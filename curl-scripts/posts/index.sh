#!/bin/sh

API="http://localhost:4741"
URL_PATH="/posts"
TOKEN="4414a3cc3bbb777078e4b3c50b54a22f"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
