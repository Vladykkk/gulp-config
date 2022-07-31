## About
This gulp-config will help you to build your project easier than before, because with this gulp-config you will forgot about reloading pages, optimizate your photo, fonts, creating a zip folder of project.

## How to install
Firstly you need to install [Node.js](https://nodejs.org/en/) if you haven't, download a version recomennded for most users, then install it. Next step, go to your terminal, and type command:
```
npm i gulp-cli -g 
```
This will install gulp in system globally, now you are ready to go!
<br>
<br>
When you have downloaded gulp-config, and export to your project, run this command in terminal to install all packages:
```
npm i
```

## How to use
```
npm run dev
```
Developer mode, files isn't optimizing (photos, fonts), only work process (live page updating, watching on files in project folder).
```
npm run build
```
Production mode, files are optimizing, for photos creating file extension webp (if it's possible), webp has a smaller size than png or jpg, and saves quality. Fonts converting from .otf and .ttf to .woff and .woff2, creating font-weight based on file name, and writing data into a style file.
```
npm run deploy
```
Sending a files on server by ftp, but before this you need to write a data of your server in appropriate file.
```
npm run zip
```
Creating a zip file with projects files inside.
