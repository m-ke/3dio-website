# Home Staging AI

Home Staging AI allows you to autmatically create furnishings for spaces.<br>
Walls, doors, windows, kitchens aswell as circulation are taken into account to generate the results.

Home Staging API calls need an API key<br>
[see here how to get one](https://3d.io/docs/api/1/get-started-browser.html#using-publishable-api-keys)

## Furnish

### Input

The home staging methods consume sceneStructure as input.
SceneStructure can be taken / generated from:

* an Archilogic model
via:
```javascript
io3d.scene.get(<id>)
  .then(sceneStructure => { })
```

* a custom method<br>
  Make sure to normalize it before using it.<br><br>
  [example on github](https://github.com/archilogic-com/3dio-js/tree/master/examples-browser/staging/stage-room-ar)
```javascript
mySceneStructureGenerator()
  .then(normalizeSceneStructure)
  .then(sceneStructure => { })
```

* a color coded floor plan<br>
  provide a scaled pixel image<br>
  <img title="floor-plan" src="https://storage.3d.io/132f8fd0-f7e0-432a-ad21-732f3307e77e/170912-1650-8w2re2/floorplan.jpg" style="width:250px;"><br>
  colors:<br>
  walls #000<br>
  windows #00f<br>
  doors #f00<br><br>
  [example on github](https://github.com/archilogic-com/3dio-js/blob/master/examples-browser/staging/stage-floor-plan/index.html)
```javascript
io3d.floorPlan.recognize(#selector)
  .then(sceneStructure => { })
```

* IFC import (coming soon)

### Usage

* Simple use case
```javascript
io3d.staging.furnish(sceneStructure)
  .then(result => { })
```
this will take the first space it finds
and furnish it with Living and Dining
output is the sceneStructure of the furnishing

* display result in a-frame
do get these into a-frame we can use the getHtmlFromSceneStructure method
```javascript
  var sceneEl = document.querySelector('a-scene')
  var elements = io3d.scene.getHtmlFromSceneStructure(sceneStructure)
  // add elements to the scene
  elements.forEach(el => {
    sceneEl.appendChild(el)
  })
```