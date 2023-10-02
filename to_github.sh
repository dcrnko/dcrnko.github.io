#!/bin/bash
if [ $# -eq 0 ]
then
	echo "Specify the commit message:"
	read COMMIT_MESSAGE
else
	echo "Uploading files to github"
fi

cd /home/David/CRID_PROJECT_GITHUB
git init
git add css
git add index.html
git add js
git add images
git commit -m "${COMMIT_MESSAGE}"
git push --all
