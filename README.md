# Trip Chasers

A social media app that connects like-minded travelers from across the globe to communicate, share their thoughts, post cool trip ideas, and more!

## Links

[Link](https://stacycsolomon.github.io/Trip-Chasers-React/) to deployed Client Application.

[Link](https://fast-springs-02778.herokuapp.com) to deployed back-end Application.

[Link](https://github.com/stacycsolomon/Trip-Chasers-React) to Client repository.

## User Stories 

* As an unregistered user, I would like to sign up with email and password.
* As a registered user, I would like to sign in with email and password.
* As a signed in user, I would like to change password.
* As a signed in user, I would like to sign out.
* As a signed in user, I would like to add a post to my wall.
* As a signed in user, I would like to update a post on my wall.
* As a signed in user, I would like to delete a post on my wall.
* As a signed in user, I would like to see all my posts.

### Reach Goal(s)

* View a list of other users and view their walls.
* Allow users to comment on other users' posts.
* Allow users to follow other users and view a newsfeed of those users' posts .
* Allow users to like or upvote other users' posts.
* Implement socket.io to allow for real-time chat

## Getting Started

If you would like to download this version locally, follow the steps below:

### Installation

1. Form and clone this repository
2. Install NPM packages by running `npm install`
3. Ensure that you have `nodemon` installed by running `npm install -g nodemon`
4. Run `npm run server` to ensure the API is functioning properly

## ERD

![Social Media App ERD](https://media.git.generalassemb.ly/user/41949/files/32c68d75-724a-431e-b06a-c5ea47ca7a11)


## App

![Screenshot of App](https://media.git.generalassemb.ly/user/41949/files/19b6f940-2696-457c-89f5-6747a8682781)


## Technologies Used
Utilized MERN Stack to build a full-stack application:

* MongoDb/Mongoose
* Express.js
* React.js
* Node.js

Other technologies used:

* Bootstrap
* HTML/CSS
* Javascript
* Axios
* Heroku for deployment of API

## Planning Process

- Created wireframes and ERDs
- Started with back-end application then worked on the front-end
- Created new feature branches for each stage of development
- Used Bootstrap and CSS to style final application

## API Routes

| HTTP Method   | URL Path     | Action           | CRUD     |
|:--------------|:-------------|:-----------------|----------|
| GET           | /posts       | index or list    | `R`ead   |
| GET           | /posts/`:id` | show or retrieve | `R`ead   |
| POST          | /posts       | create           | `C`reate |
| PATCH         | /posts/`:id` | update           | `U`pdate |
| DELETE        | /posts/`:id` | destroy          | `D`elete |

# Stay Connected

I am Stacy Solomon, a Full Stack Software Engineer and Web Developer. 

Thank you for checking out my work! You can connect with me at stacycsolomon@gmail.com or find me on [LinkedIn](https://www.linkedin.com/in/stacycsolomon/).