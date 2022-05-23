#!/bin/bash

API="http://localhost:4741"
URL_PATH="/posts"
TOKEN="4414a3cc3bbb777078e4b3c50b54a22f"
ID="628bd0e2f654cb258869ca73"
DESC="This is my updated description"
IMG="newimage.png"


curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "post": {
     "description": "'"${DESC}"'",
      "img": "'"${IMG}"'"
    }
  }'

echo
