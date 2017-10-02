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
io3d.scene.getStructure(sceneId)
  .then(sceneStructure => { })
```
for further reference visit the documentation of the [scene API](scene.md)

* a custom method<br>
  Make sure to normalize it before using it.<br><br>
  [example on github](https://github.com/archilogic-com/3dio-js/tree/master/examples-browser/staging/stage-room-ar)
```javascript
mySceneStructureGenerator()
  .then(normalizeSceneStructure)
  .then(sceneStructure => { })
```

* [a color coded floor plan](convert-floor-plan-to-3d.html#recognize)

* IFC import (coming soon)

### Usage

* Simple use case calling homeStaging inside A-Frame

```javascript
const sceneEl = document.querySelector('a-scene')

io3d.scene.getStructure(sceneId)
  // first floor is selected 
  .then(io3d.staging.furnish)
  // the furnish call outputs sceneStructure of the furnishing proposal
  .then(sceneStructure => { 
    // do get these into A-Frame we can use 
    // the getAframeElementsFromSceneStructure method
    var elements = io3d.scene.getAframeElementsFromSceneStructure(sceneStructure)
    // add elements to the scene
    elements.forEach(el => {
      sceneEl.appendChild(el)
    })
  })
  .catch(error => {
    console.log(error)
  })
```
this will take the first space it finds
and furnish it with Living and Dining
output is the sceneStructure of the furnishing