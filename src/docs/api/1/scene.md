# Scene API

The scene API allows users to access Archilogic's scene structure and for instance convert it to A-Frame Elements.

Content:
* [Scene Id](#scene-id)
* [Scene Structure](#scene-structure)
* [`getStructure(sceneId)`](#get-structure)
* [`getAframeElements(sceneId)`](#get-a-frame-elements)
* [`getAframeElementsFromSceneStructure(sceneId)`](#get-a-frame-elements-from-scene-structure)
* [`normalizeSceneStructure(sceneStructure)`](#normalize-scene-structure)
* [`validateSceneStructure(sceneStructure)`](#validate-scene-structure)
* [`getViewerUrl(sceneId)`](#get-viewer-url)

## Scene Id

Each scene has it's unique id which is generally refered to as `sceneId`.

You can get the `sceneId` of an Archilogic model for instance from the url:
```bash
https://spaces.archilogic.com/3d/!5dc58829-ecd3-4b33-bdaf-f798b7edecd4`
                                 |-------------scene-id---------------|
```
```bash
https://spaces.archilogic.com/3d/archilogic/zgkeizhc?modelResourceId=5dc58829-ecd3-4b33-bdaf-f798b7edecd4
                                                                    |-------------scene-id---------------|
```
## Scene Structure

The scene structure is a JSON based scene format used in the [Archilogic editor](https://spaces.archilgoc.com/3d) to describe scenes.

example of a simple scene structure snippet describing a furniture item:
```json
{
  "type": "interior",
  "x": 3.4,
  "y": 0,
  "z": 1.4,
  "src": "!3aff54e2-fdff-44a3-9646-f2db1ea3bbfc"
}
```

### Get Structure

Use `io3d.scene.getStructure(sceneId)` to get the sceneStructure of an Archilogic model

```js
io3d.scene.getStructure(sceneId)
.then(sceneStructure => { })
```

this returns an object with the following hierarchy:
```json
{
  "type": "plan",
  "children": [
    {
      "type": "level",
      "children": [
         {
           "type": "interior"
         }
         // all elements are children of the level
      ]
    }
  ]
}
```

### Get A-Frame Elements

`io3d.scene.getAframeElements(sceneId)` is a wrapper function for [getStructure()](#get-structure) and [getAframeElementsFromSceneStructure()](#get-a-frame-elements-from-scene-structure)<br>
The function returns an A-Frame DOM element with children nodes according to the hierarchy of the scene structure.

To add an Archiogic scene to your A-Frame scene you can do:
```js
const sceneEl = document.querySelector('a-scene')
io3d.scene.getAframeElements(sceneId)
  .then(element => {
    sceneEl.appendChild(element)
  })
```

### Get A-Frame Elements From Scene Structure

`io3d.scene.getAframeElementsFromSceneStructure()` converts scene structure into A-Frame DOM elements
This is needed when working for instance with our [Home Staging AI](home-staging-ai.md)
The sample converts a furniture item described in scene structure into an A-Frame entity using the [io3d-furniture](aframe-components.html#io3d-furniture) component
```
const element3d = {
  "type": "interior",
  "x": 3.4,
  "y": 0,
  "z": 1.4,
  "src": "!3aff54e2-fdff-44a3-9646-f2db1ea3bbfc"
}
const sceneEl = document.querySelector('a-scene')

io3d.scene.getAframeElementsFromSceneStructure(element3d)
  .then(result => {
    sceneEl.appendChild(result)
  })
```
result:
```html
<a-scene>
    <a-entity io3d-furniture="id:3aff54e2-fdff-44a3-9646-f2db1ea3bbfc" position="3.4 0 1.4"></a-entity>
</a-scene>
```

### Normalize scene structure

With `io3d.scene.normalizeSceneStructure(sceneStructure)` you make sure to always have a scene structure object that contains all the necessary information.
This includes:
* adding default values if not specified
* adding a uuid to each element if not existant

```
const element3d = {
  "type": "interior",
  "x": 3.4,
  "z": 1.4,
  "src": "!3aff54e2-fdff-44a3-9646-f2db1ea3bbfc"
}
io3d.scene.normalizeSceneStructure(element3d)
  .then(result => {
    console.log(result)
  })
```
```bash
{
  "type": "interior",
  "x": 3.4,
  "y": 0,
  "z": 1.4,
  "ry": 0,
  "children": [],
  "id": "2140a713-2ac5-483a-a278-d45cfab1d68c",
  "src": "!3aff54e2-fdff-44a3-9646-f2db1ea3bbfc"
}
```

### Validate scene structure

`io3d.scene.validateSceneStructure(sceneStructure)` allows you to validate a scene structure object.<br>
This is useful when converting third party formats into scene structure or creating scene structure on the fly like in this [Augmented Reality Demo](https://github.com/archilogic-com/3dio-js/tree/master/examples-browser/staging/stage-room-ar)

```js
io3d.scene.validateSceneStructure({type:"foo"}).then(console.log)
```
```bash
{
	"isValid": false,
	"warnings": [],
	"errors": [{
		"message": "Parameter "type" of value "foo" is not supported",
		"item": {
			"type": "foo"
		},
		"code": 4
	}]
}
```
Error codes:
```bash
  OK: 0,
  MIN_VALUE: 1,
  MAX_VALUE: 2,
  MISSED: 3,
  NOT_SUPPOPRTED: 4,
  VALUE: 5,
  TYPE: 6,
  CHILDREN_TYPE: 7
```

### Get viewer url

returns Archilogic Viewer Url from a scene Id
```js
io3d.scene.getViewerUrl(5dc58829-ecd3-4b33-bdaf-f798b7edecd4)
```
returns

https://spaces.archilogic.com/3d/!5dc58829-ecd3-4b33-bdaf-f798b7edecd4

