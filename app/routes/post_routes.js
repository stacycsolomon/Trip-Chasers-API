// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

const Post = require('../models/post')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// INDEX
// GET /examples
router.get('/posts', requireToken, (req, res, next) => {
  Post.find().populate('owner')
    .then(posts => {
      return posts.map(post => post.toObject())
    })
    .then(posts => res.status(200).json({ posts: posts }))
    .catch(next)
})

// SHOW
// GET /examples/5a7db6c74d55bc51bdf39793
router.get('/posts/:id', requireToken, (req, res, next) => {
  Post.findById(req.params.id).populate('owner')
    .then(handle404)
    .then(post => res.status(200).json({ post: post.toObject() }))
    .catch(next)
})

// CREATE
// POST /examples
router.post('/posts', requireToken, (req, res, next) => {
  // set owner of new example to be current user
  req.body.post.owner = req.user.id

  Post.create(req.body.post)
    .then(post => {
      res.status(201).json({ post: post.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /examples/5a7db6c74d55bc51bdf39793
router.patch('/posts/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.post.owner

  Post.findById(req.params.id)
    .then(handle404)
    .then(post => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, post)
      return post.updateOne(req.body.post)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /examples/5a7db6c74d55bc51bdf39793
router.delete('/posts/:id', requireToken, (req, res, next) => {
  Post.findById(req.params.id)
    .then(handle404)
    .then(post => {
      requireOwnership(req, post)
      post.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
