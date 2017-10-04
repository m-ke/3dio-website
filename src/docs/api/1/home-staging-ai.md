# Home Staging AI

The Home Staging AI allows you to automatically create furnishings for interior spaces.

Home Staging API calls require an API key. You can find out how to get one [here](https://3d.io/docs/api/1/get-started-browser.html#using-publishable-api-keys).

## Get Furnishings

`io3d.staging.getFurnishings(sceneStructure, options)` computes furnishing proposals for residential spaces based on the architecture defined in the `sceneStructure`. Walls, doors, windows, kitchens and fixed closets and the space required to walk around them are taken into account to place furniture items.

### Scene Structure

The Home Staging API calls consume `sceneStructure` as input. The `sceneStructure` can be acquired from:

1. An Archilogic model
via:
```javascript
io3d.scene.getStructure(sceneId)
  .then(sceneStructure => { })
```
Learn more in the documentation of the [scene API](scene.md).

* Generating it with a custom method:
  ```javascript
  mySceneStructureGenerator()
    .then(normalizeSceneStructure)
    .then(sceneStructure => { })
  ```

  It is important to normalize your custom `sceneStructure` before passing it on.
  See an example of a custom `sceneStructure` generator [here](https://github.com/archilogic-com/3dio-js/tree/master/examples-browser/staging/stage-room-ar).

* Converting a color coded floor plan via the [floor plan conversion API](convert-floor-plan-to-3d.html#recognize).

* Importing an IFC file (coming soon)


### Options:

| Parameter | Description | Default |
| --- | --- | --- |
| `spaceId` | Id of the space that will be furnished. Spaces are represented by polyfloors. To get a specific space, get the polyfloor object in the `sceneStructure`. | The first polyfloor in the `sceneStructure` is used as default. |
| `label` | Describes the furnishing type. Possible values:<br>`dining`<br>`dining_living`<br>`living`<br>`bedroom`<br>`homeOffice` | `dining_living` |

### Example with default parameters

This example will take the first space it finds and furnish it as living and dining room.
The output of the `getFurnishings` call is a `sceneStructure` with the new furnishing and this is finally added to the A-Frame scene.

Try it live [here](https://appcreator.3d.io/xHFYjg?m=ne) in the App Creator.

```javascript
io3d.config({
  // Replace this with your own publishable key for use on your own domain
  // More info: https://3d.io/docs/api/1/get-started-browser.html#using-publishable-api-keys
  publishableApiKey: '38f4d19c-68d2-4bac-bb51-61d8bee4921b'
})

const sceneId = '27fbe564-6cf4-48aa-8a19-6f0fb6cca7c4'
// this is the root node in the 3dio structure. furnishing results have to be
// added to this for correct positioning.
const levelEl = document.querySelector('.io3d-scene').firstElementChild

io3d.scene.getStructure(sceneId)
  // first floor and is selected and dining_living label is added by default
  .then(io3d.staging.getFurnishings)
  // the furnish call outputs sceneStructure of the furnishing proposal
  .then(sceneStructure => {
    // to get these into A-Frame we can use
    // the getAframeElementsFromSceneStructure method
    var elements = io3d.scene.getAframeElementsFromSceneStructure(sceneStructure)
    // add elements to the scene
    elements.forEach(el => {
      levelEl.appendChild(el)
    })
  })
  .catch(error => {
    console.log(error)
  })
```

### Example using custom parameters

This example selects the second space in the `sceneStructure` and furnishes it as a bedroom.
Which space gets furnished and with which function could be determined based on user input.

Try it live [here](https://appcreator.3d.io/OhbEeX?m=e) in the App Creator.

```javascript

// recursively search through sceneStructure for polyfloors that represent spaces
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

io3d.config({
  // Replace this with your own publishable key for use on your own domain
  // More info: https://3d.io/docs/api/1/get-started-browser.html#using-publishable-api-keys
  publishableApiKey: '38f4d19c-68d2-4bac-bb51-61d8bee4921b'
})

const sceneId = '62aa2e6a-b72d-46cb-989b-d55c96c9cb43'
// this is the root node in the 3dio structure. furnishing results have to be
// added to this for correct positioning.
const levelEl = document.querySelector('.io3d-scene').firstElementChild

// get scene structure
io3d.scene.getStructure(sceneId)
  .then(sceneStructure => {
    // find all spaces in the model
    const spaces = getSpaces([sceneStructure])
    // select a space directly
    // or create a ui to allow the user to select
    const spaceId = spaces[1].id
    const label = 'bedroom'
    return io3d.staging.getFurnishings(sceneStructure, {spaceId: spaceId, label: label})
  })
  .then(sceneStructure => {
    // to get these into A-Frame we can use
    // the getAframeElementsFromSceneStructure method
    var elements = io3d.scene.getAframeElementsFromSceneStructure(sceneStructure)
    // add elements to the scene
    elements.forEach(el => {
      levelEl.appendChild(el)
    })
  })
  .catch(error => {
    console.log(error)
  })
```

### Further examples

* [Load an Archilogic model and generate a UI to furnish each space](https://github.com/archilogic-com/3dio-js/blob/master/examples-browser/staging/stage-scene-structure/index.html)
* [Drawing a room in Augmented Reality and furnishing it](https://github.com/archilogic-com/3dio-js/tree/master/examples-browser/staging/stage-room-ar)
* [Recognize a labeled floor plan image and furnish one room](https://github.com/archilogic-com/3dio-js/blob/master/examples-browser/staging/stage-floor-plan/index.html)
