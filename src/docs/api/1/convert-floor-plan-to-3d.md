# Floor plan conversion API

The floor plan conversion API allows you to convert 2D floor plan images into interactive 3D models.
If your prefer to not set up your own server you can order models via: [https://spaces.archilogic.com/order](https://spaces.archilogic.com/order)

In both cases the `Explore` license allows for 10 free conversions per month the `Professional` license for 50. For further details take a look at the [pricing info](https://3d.io/#pricing).


## Convert to basic 3d model

`io3d.floorPlan.convertToBasic3dModel()` allows you to send a request to our conversion API from a custom node server.

The result is not instant but can take up to 12 hours.
This is why you need to provide a callback url from your node server to receive the callback when the conversion is finished.

[A secret API key is needed](get-started-node-server.md)

```js
io3d.floorPlan.convertToBasic3dModel({
   // floor plan url
   floorPlan: floorPlan,    
   // address ( optional ) - allows us to create a better light simulation
   address: address, 
   // callback url to reveive that callback when the conversion status changes
   callback: configs.url 
 }).then(conversionId => {
   // store conversionId plus customer email in a database for later use
 }).catch(error => {
   console.error('Error in calling 3d.io API.', error)
 })
```

The function returns a `conversionId`

Once the status of your conversion changes, a callback is send to the provided url.

## Get conversion status

Use `io3d.floorPlan.getConversionStatus({ conversionId })` to get the status of your conversion. In case of success you get the [sceneId](scene.md#scene-id) which you can send to your customer [as a url](scene.html#get-viewer-url) or use it to further process the scene.

Possible values:
* `'IN_PROGRESS'` no action needed 
* `'REJECTED'` 
conversion has unfortunately been rejected, most likely due to one of the following reasons:
NO_FLOORPLAN, UNCLEAR_FLOORPLAN, MULTIPLE_LEVELS, INCLINED_CEILING`
* `'COMPLETED'`

```js
io3d.floorPlan.getConversionStatus({ conversionId: conversionId })
  .then(conversionData => {
    const status = conversionData.status
    const email = conversionData.customer.email
    
    if (status === 'COMPLETED') {
      const sceneId = conversionData.sceneId
      /* do something with the id - for instance send the url to your customers */
      const sceneUrl = io3d.scene.getViewerUrl(sceneId)
    }
  }).catch(error => {
    console.error('Error in calling 3d.io API.', error)
  })
```

## Reference implementation

https://github.com/archilogic-com/3dio-floor-plan-app

This project showcases a reference implementation to let users order 3D models from floor plans through a custom UI and sending email notifications on conversion updates.

Setup used:
* node server running on [heroku](https://heroku.com)
* [3dio](https://3d.io) library to send order floor plan conversions and handle updates
* [firebase](https://firebase.google.com) to store user details and conversion ids
* [sendgrid](https://sendgrid.com/) to let users order 3D models from floor plans through a custom UI and sending notifications on conversion updates.


A deployed app is running here:<br>
https://io3d-floor-plan-app.herokuapp.com/

![](https://storage.3d.io/97fa0bf7-1405-4fe3-a2be-49d2101d4121/2017-10-02_21-31-15_okw9Ax/3d_io_Floor_Plan_App.png)


## Recognize

With `io3d.floorPlan.recognize()` you can convert a color coded pixel image into scene structure.

<table>
 <thead>
  <tr>
   <th>Image:</th>
   <th>Color Codes:</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><img title="floor-plan" src="https://storage.3d.io/132f8fd0-f7e0-432a-ad21-732f3307e77e/170912-1650-8w2re2/floorplan.jpg" style="width:250px;"></td>
   <td style="vertical-align:middle">walls #000<br>windows #00f<br>doors #f00</td>
  </tr>
 </tbody>
</table>

The image has to have the correct metric dimensions.
In this example we provide a square image within an A-Frame scene with an edge length of 15m.
The image is extracted then send to the API. The response arrives within a few seconds.

```html
<a-scene>
  <a-image id="floor-plan" width="15.00" height="15.00" src="https://storage.3d.io/132f8fd0-f7e0-432a-ad21-732f3307e77e/170912-1650-8w2re2/floorplan.jpg" rotation="-90 0 0"></a-image>
</a-scene>
<script>
io3d.floorPlan.recognize('#floor-plan')
  .then(sceneStructure => { 
    // do for instance a homeStaging call
  })
</script>
```

[example on github](https://github.com/archilogic-com/3dio-js/blob/master/examples-browser/staging/stage-floor-plan/index.html)
