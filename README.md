## About
This gulp-config will help you to build your project easier, his opportunities:
- ES6 import plugins
- Developer and Production modes
- Comfortable files architecture and folders, working with files using aliases from any nesting
- processing HTML files
- Work with Preprocessors SASS(SCSS), optimize styles
- WEBPACK assembly JavaScript, ES6 modules
- Picture optimization, creating WEBP
- Fonts conversion, connection entry in SCSS
- Uploading on FTP server
- Creating ZIP archive
- Errors processing
- Local server, page autoupdate

## How to install
First you need to install [Node.js](https://nodejs.org/en/) if you haven't, download a version recomennded for most users, then install it. Next step, go to your terminal(GIT Bash or other), and type command:
```
npm i gulp-cli -g 
```
This will install gulp in system globally, now you are ready to go!
######
When you have downloaded gulp-config, and export to your project, run this command in terminal to install all packages:
```
npm i
```

## How to use
```
npm run dev
```
Developer mode, files isn't optimizing (photos, fonts), only work process (local server, watching files, errors processing).
```
npm run build
```
Production mode, files are optimizing, for photos creating file extension webp (if it's possible), fonts converting from .otf and .ttf to .woff and .woff2, creating font-weight based on file name, and writing data into a style file.
```
npm run deploy
```
Sending a files on FTP server, but before this you need to write a data of your server in appropriate file in:
```
gulp/config/ftp.js
```
######
```
npm run zip
```
Creating a ZIP archive.
