# 3d.io Website

[![Build Status](https://travis-ci.org/archilogic-com/3dio-website.svg?branch=master)](https://travis-ci.org/archilogic-com/3dio-website)

https://3d.io

## Editing

All content resides in the `src` folder. Beside html and css the following file types are supported:
* `.pug` templates https://www.npmjs.com/package/pug
* `.md` markdown files https://help.github.com/categories/writing-on-github/
* `.less` files http://lesscss.org/

Non-native browser file types will get pre-compiled during build process in order to serve the entire site as static data.

## Deployment

* Every branch gets deployed automaticaly to custom URL using following pattern:
  * master: `https://3d.io/`
  * branches: `https://3d.io/branch/${branch-name}/`
  <br>Build takes ca. 2 minutes. *Consider:* website is being served via CDN. Updating a file might take around 10 min to show effect. 
* Continuous Integration via travis CI:<br>
  https://travis-ci.com/archilogic-com/3dio-website
* Build and distribution scripts:<br>
  https://github.com/archilogic-com/3dio-website/blob/master/tasks/build.js<br>
  https://github.com/archilogic-com/3dio-website/blob/master/tasks/dist.js<br>

## Development

* Install: `git clone https://github.com/archilogic-com/3d-io-website.git`
* Run local dev server: `npm run dev`<br>
  This will watch files in the `src` dir, rebuild and update browser window automaticaly.
