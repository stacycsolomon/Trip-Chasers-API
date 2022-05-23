#!/bin/bash

API="http://localhost:4741"
URL_PATH="/posts"
TOKEN="4414a3cc3bbb777078e4b3c50b54a22f"
DESC="Hey! This is my second post"
IMG="image2.jpg"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "post": {
      "description": "'"${DESC}"'",
      "img": "'"${IMG}"'"
    }
  }'

echo
