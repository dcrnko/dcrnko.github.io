#!/bin/bash
#
docker cp crid_web_container:/usr/share/nginx/html/index.html /home/David/CRID_PROJECT_GITHUB/

docker cp crid_web_container:/usr/share/nginx/html/css/style.css /home/David/CRID_PROJECT_GITHUB/

docker cp crid_web_container:/usr/share/nginx/html/js/js.js /home/David/CRID_PROJECT_GITHUB/

mkdir /home/David/CRID_PROJECT_GITHUB/css
mkdir /home/David/CRID_PROJECT_GITHUB/js


mv /home/David/CRID_PROJECT_GITHUB/style.css /home/David/CRID_PROJECT_GITHUB/css
mv /home/David/CRID_PROJECT_GITHUB/js.js /home/David/CRID_PROJECT_GITHUB/js



