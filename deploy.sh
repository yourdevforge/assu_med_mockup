#!/bin/bash

repo=assu_med_mockup

echo "deploying $repo"

rsync -avz --progress --delete --exclude node_modules ./* root@192.11.0.1:/devops/$repo/

ssh root@192.11.0.1 "cd /devops/$repo; pwd; docker compose up -d --build"