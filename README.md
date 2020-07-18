# FrontEnd-WebUI-Frameworks-and-Tools-Bootstrap4
Introductory Project for Bootstrap 4

## Libraries (Initially, before vulnerability fix)
- Bootstrap 4.0.0 
- jQuery 3.1.1
- Font-Awesome 4.7.0
- BootStrap-Social 5.1.1
- LESS CSS 2.7.2 (npm install -g less@2.7.2)
- SASS SCSS 4.14.1 (npm install --save-dev node-sass@4.14.1 )
- npm install --save-dev onchange@3.3.0 parallelshell@3.0.2

## Making Ready for Deployment
- Cleaning up a Distribution Folder (npm install --save-dev rimraf@2.6.2)
- Copying Fonts (npm -g install copyfiles@2.0.0)
- Compressing and Minifying Images (npm -g install imagemin-cli@3.0.0)
- Preparing the Distribution Folder (npm install --save-dev usemin-cli@0.5.1 cssmin@0.4.3 uglifyjs@2.4.11 htmlmin@0.0.7)

## Making Use of Grunt
### Installing Grunt
- npm install -g grunt-cli@1.2.0
- npm install grunt@1.0.2 --save-dev
- npm install grunt-contrib-sass --save-dev
### Compiling SCSS to CSS
- npm install grunt-sass@2.1.0 --save-dev
- npm install time-grunt@1.4.0 --save-dev
- npm install jit-grunt@0.10.0 --save-dev
### Watch and Serve Tasks
- npm install grunt-contrib-watch@1.0.0 --save-dev
- npm install grunt-browser-sync@2.2.0 --save-dev
### Copying the Files and Cleaning Up the Dist Folder
- npm install grunt-contrib-copy@1.0.0 --save-dev
- npm install grunt-contrib-clean@1.1.0 --save-dev
### Compressing and Minifying Images
- npm install grunt-contrib-imagemin@2.0.1 --save-dev
### Preparing the Distribution Folder and Files
- npm install grunt-contrib-concat@1.0.1 --save-dev
- npm install grunt-contrib-cssmin@2.2.1 --save-dev
- npm install grunt-contrib-htmlmin@2.4.0 --save-dev
- npm install grunt-contrib-uglify@3.3.0 --save-dev
- npm install grunt-filerev@2.3.1 --save-dev
- npm install grunt-usemin@3.1.1 --save-dev
### Grunt build
- grunt build
### Run with Grunt
- grunt

## Making use of Gulp
### Installing Gulp
- npm install -g gulp-cli@2.0.1
- npm install gulp@3.9.1 --save-dev
### Install Gulp Plugins for SASS and Browser-Sync
- npm install gulp-sass@4.1.0  browser-sync@2.26.7 --save-dev

## Links to Errors faced
- [Problem Running Parallelshell](https://stackoverflow.com/questions/53461626/problem-running-parallelshell-nodejs-script/)