#!/bin/bash

API="http://localhost:4741"
URL_PATH="/posts"
TOKEN="4414a3cc3bbb777078e4b3c50b54a22f"
ID="628bd0e2f654cb258869ca73"


curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
