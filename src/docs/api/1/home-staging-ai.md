# Home Staging AI

Home Staging AI allows you to automatically create furnishings for spaces.<br>

Home Staging API calls require an API key<br>
[see here how to get one](https://3d.io/docs/api/1/get-started-browser.html#using-publishable-api-keys)

## Get Furnishings

`io3d.staging.getFurnishings(sceneStructure, options)` computes furnishing proposals for residential spaces based on the constraints defined in the sceneStructure.

Walls, doors, windows, kitchens and fixed closets as well as circulation are taken into account to place furniture items.

### Scene Structure

The Home Staging API calls consume sceneStructure as input.
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


### Options:

| Parameter | Description | Default |
| --- | --- | --- |
| `spaceId` | Id of the space that will be furnished. Spaces are represented by polyfloors. To get a specific space, get the polyfloor object in the sceneStructure. | the first polyfloor in the sceneStructure is taken as default |
| `label` | Describes the furnishing type. Possible values:<br>`dining`<br>`dining_living`<br>`living`<br>`bedroom`<br>`homeOffice` | `dining_living` |

### Simple example

```javascript
const sceneEl = document.querySelector('a-scene')

io3d.scene.getStructure(sceneId)
  // first floor is selected 
  .then(io3d.staging.getFurnishings)
  // the furnish call outputs sceneStructure of the furnishing proposal
  .then(sceneStructure => { 
    // to get these into A-Frame we can use
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

### Example using options

```javascript
const sceneEl = document.querySelector('a-scene')

// get scene structure
io3d.scene.getStructure(sceneId)
  .then(sceneStructure => {
    // find all spaces in the model
    const spaces = getSpaces([sceneStructure])
    // select a space directly
    // or create a ui to allow the user to select
    const spaceId = spaces[2].id
    const label = 'bedroom'
    return io3d.staging.getFurnishings(sceneStructure, {spaceId: id, label: label})
  .then(sceneStructure => {
    // to get these into A-Frame we can use
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


// recursively search through sceneStructure
function getSpaces(sceneStructure) {
  var spaces = []
  sceneStructure.forEach(element3d => {
    if (element3d.type === 'polyfloor') spaces.push(element3d)
    if (element3d.children && element3d.children.length) {
      spaces = spaces.concat(getSpaces(element3d.children))
    }
  })
  return spaces
}
```

### Further examples

* [Load an Archilogic model and generate a UI to furnish each space](https://github.com/archilogic-com/3dio-js/blob/master/examples-browser/staging/stage-scene-structure/index.html)
* [Drawing a room in Augmented Reality and furnishing it](https://github.com/archilogic-com/3dio-js/tree/master/examples-browser/staging/stage-room-ar)
* [Recognize a labeled floor plan image and furnish one room](https://github.com/archilogic-com/3dio-js/blob/master/examples-browser/staging/stage-floor-plan/index.html)


