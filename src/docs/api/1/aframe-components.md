# A-Frame Components

## Overview

The following components are available:

* [`io3d-data3d`](#io3d-data3d) to display 3D models.
* [`io3d-furniture`](#io3d-furniture) to display furniture.
* [`io3d-lighting`](#io3d-lighting) change the default light setup.
* [`tour`](#tour) to create camera tours.
* [`gblock`](#gblock) to display Google Blocks.

## What can be done with the components

If you are building a 3D web application with the [A-Frame](https://aframe.io) library
you may find it convenient to **display 3D scenes** from your own or our public [Scene library](/docs/api/1/scene-library.html)
or **display furniture** from our [Furniture library](https://furniture.3d.io).

This can be done with these components:

```html
<head>
  <script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
  <script src="https://dist.3d.io/3dio-js/1.x.x/3dio.min.js"></script>
</head>
<body>
  <a-scene>
    <!-- furniture specified by furniture id -->
    <!-- get more: https://furniture.3d.io -->
    <a-entity io3d-furniture="id:10344b13-d981-47a0-90ac-f048ee2780a6" position="-2 0 -3.2" rotation="0 180 0"></a-entity>

    <!-- data3d files specified by 3d.io storage 'key:' or 'url:' -->
    <a-entity io3d-data3d="key:/3f995099-d624-4c8e-ab6b-1fd5e3799173/170515-0913-4p3ktf/1e588a3b-90ac-4a32-b5b8-ff2fda7f87c4.gz.data3d.buffer" position="0 0 0"></a-entity>
  </a-scene>
</body>
```
[Interactive demo](https://3dio-aframe.glitch.me/)

## io3d-data3d

| Parameter | Description |
| --- | --- |
| `key` | Specifies a 3d.io [storage key](storage.md) to identify 3d data to display, e.g. `/3f995099-d624-4c8e-ab6b-1fd5e3799173/170515-0913-4p3ktf/1e588a3b-90ac-4a32-b5b8-ff2fda7f87c4.gz.data3d.buffer` |
| `url` | Specifies a URL of a `.data3d.json` or `.data3d.buffer` file, e.g. `https://storage.3d.io/3f995099-d624-4c8e-ab6b-1fd5e3799173/170515-0913-4p3ktf/1e588a3b-90ac-4a32-b5b8-ff2fda7f87c4.gz.data3d.buffer` |
| `lightMapIntensity` | Intensity (default 1.2) of the lightmap being applied |
| `lightMapExposure` | Exposure (default 0.6) of the lightmap being applied |

### Changing the lighting

Lighting can be configured using two properties: `lightMapIntensity` and `lightMapExposure`.

Both influence how the [precalculated lights](https://spaces.archilogic.com/blog/3d-models-light-baking) are affecting the loaded scene.
The exposure can be used to over- or underexpose the scene while the intensity allows to adjust how much the light blends with the materials.

The relation of the two settings is visualised below:
![Intensity and exposure of the lightmap visualised](../../../img/docs/aframe-io3d-data3d-lightmap-settings.png)

## io3d-furniture

The `io3d-furniture` component allows to display a piece of furniture in A-Frame.
You specify the desired piece of furniture by furniture ID.

```html
  <a-scene>
    <a-entity io3d-furniture="id:10344b13-d981-47a0-90ac-f048ee2780a6" position="0 0 -3.2"></a-entity>
  </a-scene>
```

| Parameter | Description |
| --- | --- |
| `id` | The furniture ID of the desired furniture piece from the [furniture library](https://furniture.3d.io) |

### Selecting the furniture material

Furniture may have more than one material available. In this case you may select the desired material.

**Note**: Materials are associated with parts of the (or the whole) furniture.

There are three ways of changing and accessing materials:

* Using the inspector
* Using attributes in the HTML tag
* Using JavaScript

#### Using the inspector

1. Select the furniture entity in the tree on the left
2. Find the `io3d-furniture` component in the properties panel on the right
3. If more than one material is available, the available material options will appear in the panel

![](../../../img/docs/aframe-io3d-furniture-materials-inspector.png)

#### Using HTML

You can specify the material for each furniture part in the HTML attributes.

For example, the shelf below has one furniture part called `Wood`, so we use the `material_Wood` property to select the `Black Walnut Tree` material:

```html
  <a-entity io3d-furniture="id:10344b13-d981-47a0-90ac-f048ee2780a6; material_Wood:Black Walnut Tree" position="0 0 -3.2"></a-entity>
```

**Note**: Both the property names (e.g. `material_Wood`) _and_ the values (e.g. `Black Walnut Tree`) are case-sensitive.

#### Using JavaScript

You can specify and change the material using JavaScript:

```javascript
var shelf = document.querySelector('a-entity[io3d-furniture]')
var component = shelf.components['io3d-furniture']
component.data.material_Wood = 'Black Walnut Tree'
component.update()
```

### Listing available & currently selected materials

You can list all available materials by using the JavaScript API:

```javascript
var shelf = document.querySelector('a-entity[io3d-furniture]')
var component = shelf.components['io3d-furniture']
console.log(component.data.availableMaterials)
```

If the furniture has multiple materials available, this will log an object with the different parts of the furniture as properties. Each property contains an array of names for the different materials.

For example, the shelf may have a single piece (`Wood`) with a set of available materials:

```javascript
// console.log(component.data.availableMaterials)
{
  Wood: [
    Oak stained aqua blue,
    Oak stained pink pastell,
    Black Walnut Tree,
    Oak stained chalk,
    Oak stained dark warmgrey,
    Oak stained mint blue,
    Oak stained graphite grey,
    Oak stained salmon pink,
    Oak stained graphite black,
    Oak stained light warmgrey,
    Oak stained cold grey,
    European Oak
  ]
}
```

The currently selected material is available via the material properties:

```javascript
var shelf = document.querySelector('a-entity["io3d-furniture"]').components['io3d-furniture']
console.log(shelf.data.material_Wood) // "European Oak"
```

The material properties follow the naming scheme "material_" followed by the furniture part they are associated with.

## io3d-lighting

Using `io3d-lighting` component replaces the default A-Frame lighting scene and adds new preset

| Parameter | Description | Default value |
| --- | --- | --- |
| `preset` | Choose from different presets (currently only `studio` is available) | `studio` |
| `intensity` | Intensity multiplier. | `1` |
| `saturation` | Saturation multiplier. | `1` |

### Usage:

```html
<a-scene io3d-lighting>
</a-scene>
```

### Comparison

* A-Frame default lighting
![A-Frame default](https://storage.3d.io/97fa0bf7-1405-4fe3-a2be-49d2101d4121/2017-10-02_15-56-45_VAVhxX/A-Frame-default.png)
* Studio preset
![Studio Preset](https://storage.3d.io/97fa0bf7-1405-4fe3-a2be-49d2101d4121/2017-10-02_15-57-06_OFrK8z/studio-preset.png)

## tour

Create a camera flythrough tour of your A-Frame scene.

| Parameter | Description | Default value |
| --- | --- | --- |
| `autoStart` | Determines if the camera tour starts automatically | `true` |
| `loop` | When set to `true`, the tour will play in a loop, transitioning from the last waypoint to the first. | `true` |
| `wait` | Time (in milliseconds) the tour will wait at each waypoint before moving on. | `2000` |
| `move` | Time (in milliseconds) the tour will take to move to the next point (at most). | `3000` |

### Example

The following example shows a tour of the different rooms in an apartment:

```html
<head>
  <script src="https://aframe.io/releases/0.6.1/aframe.min.js"></script>
  <script src="https://dist.3d.io/3dio-js/1.x.x/3dio.min.js"></script>
  <!-- This component requires the animation component from kframe! -->
  <script src="https://unpkg.com/aframe-animation-component/dist/aframe-animation-component.min.js"></script>
</head>
<body>
  <a-scene>
    <!-- loading an apartment -->
    <a-entity io3d-data3d="key:/3f995099-d624-4c8e-ab6b-1fd5e3799173/170515-0913-4p3ktf/1e588a3b-90ac-4a32-b5b8-ff2fda7f87c4.gz.data3d.buffer" position="0 0 0"></a-entity>
    <!-- define the camera with a tour (it will start automatically and loop infinitely) -->
    <a-entity camera tour>
      <!-- each of these waypoints will be visited in the given order -->
      <a-entity tour-waypoint="Living Room" position="-2.9 1.6 3.5"></a-entity>
      <a-entity tour-waypoint="Office" position="-3.6 1.6 -2.6" rotation="0 -140 0"></a-entity>
      <a-entity tour-waypoint="Kitchen" position="-1.9 1.6 -1.4" rotation="0 -100 0"></a-entity>
      <a-entity tour-waypoint="Bedroom" position="3.1 1.6 -2.6" rotation="0 -140 0"></a-entity>
    </a-entity>
  </a-scene>
</body>
```

### Programmatically start / stop or pause / resume the tour

The tour can be manually started, stopped, paused or resumed by calling the corresponding methods `playTour`, `stopTour` and `pauseTour`.
Here is an example with a play / pause button:

```html
<a-scene>
  <a-box color="red"></a-box>
  <a-entity id="camera" camera tour="autoStart: false" position="0 2 5" rotation="-22.5 0 0">
    <!-- each of these waypoints will be visited in the given order -->
    <a-entity tour-waypoint="Front" position="0 2 5" rotation="-22.5 0 0"></a-entity>
    <a-entity tour-waypoint="Back" position="0 2 -5" rotation="-22.5 180 0"></a-entity>
  </a-entity>
</a-scene>

<!-- Play / Pause button -->
<button id="play-pause">Play</button>

<script>
  var tour = document.querySelector('[tour]').components.tour

  // when the button is clicked, play or pause
  document.getElementById('play-pause').addEventListener('click', function () {
    if(this.textContent === 'Play') {
      this.textContent = 'Pause'
      tour.playTour()
    } else {
      this.textContent = 'Play'
      tour.pauseTour()
    }

  })
</script>
```

### Programmatically jumping to any waypoint

If you need to offer a way to make the camera fly from the current position to a predefined waypoint, you can use the `goTo` method together with the name of the waypoint:

```html
<!-- Buttons to move to each waypoint -->
<button onclick="document.getElementById('camera').components.tour.goTo('front')">Front</button>
<button onclick="document.getElementById('camera').components.tour.goTo('back')">Back</button>

<a-scene>
  <a-box color="red"></a-box>
  <a-entity id="camera" camera tour="autoStart: false" position="0 2 5" rotation="-22.5 0 0">
    <!-- each of these waypoints will be visited in the given order -->
    <a-entity tour-waypoint="front" position="0 2 5" rotation="-22.5 0 0"></a-entity>
    <a-entity tour-waypoint="back" position="0 2 -5" rotation="-22.5 180 0"></a-entity>
  </a-entity>
</a-scene>
```

If the transition should be immediate, you can set `move: 0` to make the movement instant instead of a flythrough:

```html
<!-- Buttons to move to each waypoint -->
<button onclick="document.getElementById('camera').components.tour.goTo('front')">Front</button>
<button onclick="document.getElementById('camera').components.tour.goTo('back')">Back</button>

<a-scene>
  <a-box color="red"></a-box>
  <a-entity id="camera" camera tour="autoStart: false; move: 0" position="0 2 5" rotation="-22.5 0 0">
    <!-- each of these waypoints will be visited in the given order -->
    <a-entity tour-waypoint="front" position="0 2 5" rotation="-22.5 0 0"></a-entity>
    <a-entity tour-waypoint="back" position="0 2 -5" rotation="-22.5 180 0"></a-entity>
  </a-entity>
</a-scene>
```

## gblock

Loads Google Blocks glTFs models hosted on [https://vr.google.com/blocks](). The only parameter is the URL of a specific google blocks model.

### Example
```html
<a-scene>
  <a-entity gblock="https://vr.google.com/objects/duKsqcc0oUX"></a-entity>
</a-scene>
```
