# Light map baking

Light maps are image textures that enrich the appearance of the model with shadow and light information. Light maps are independent of the other textures in the material.
Baking provides realistic lighting effects at a low computational cost and enriches your models without impacting the performance on all supported devices.

The light simulation can be set up based on the location of the model, its orientation and a specified time and day of the year.

Namespace: `io3d.light`

## Quota

The bake API is a part of the 3d.io Freemium API. Learn here about [Quotas](https://3d.io/docs/api/1/authentication.html)
and how to authenticate in order to use this API.

## bake, bakeLoRes

Bake a preview of your scene. Use this API to get a quick preview of your lighting setup. This is useful if you need a quick result for your prototype. Bake your model in hi-res if you finished your design. 

| Parameter | Type | Required? | Default | Description |
| --- | --- | --- | --- | --- |
| `storageId` | String | Yes | | The storageId of the model to be baked. |
| `options` | Object | No | | |
| `options.sunDirection`  | Array(Float) | No | [ 0.75, -0.48, -0.46 ] | What direction the sun is coming from. |

**Sun Direction**
[coming soon] Determine the position of the sun.

### Example

The following snippet sends a bake API request with storageID from a scene. The resulting url of the transformed model gets logged upon task completion:

```javascript
  var storageId = '535e624259ee6b0200000484/bake/2017-10-20_15-22-15_lKCBcz/lighting.gz.data3d.buffer'

  io3d.light.bakeLoRes(storageId, { sunDirection: [ -0.73, -0.3, 0.6 ] })
    .then(io3d.utils.processing.whenDone)
    .then(io3d.storage.getUrlFromStorageId)
    .then(console.log)
```

## bakeHiRes

Bake your scene in high quality. This is useful to make your model more realistic and beautiful before publishing.

| Parameter | Type | Required? | Default | Description |
| --- | --- | --- | --- | --- |
| `storageId` | String | Yes | | The storageId of the model to be baked. |
| `options` | Object | No | | |
| `options.sunDirection`  | Array(float) | No | [ 0.75, -0.48, -0.46 ] | What direction the sun is coming from. |
| `options.lightMapCount`  | Number | No | optiomal count calculated | How many light maps should be baked. |
| `options.samples`  | Number | No | 1000 | How many raytracing samples are used. |

**Sun Direction**

[coming soon] Determine the position of the sun.

**Light Map Count**

The map count influences the overall resolution for the light simulation. We advise you to use an optimal count depending on the level of detail and size of your model. If not provided, the server will calculate an optimum count for your scene. If your light map count is to low, your baked light might look a bit noisy. If too high, the performance of your scene might be affected.

**Samples**

With samples you can specify how many [raytracing rays](https://en.wikipedia.org/wiki/Ray_tracing_(graphics)) will be used by the render engine to do the simulation. With less samples your result will be available faster, but your light map image could be a bit noisy. The recommended range of samples for a good result is between 800-1200, if you have a lot of additional light sources, increase the value to 1500.

### Example

The following snippet sends a bake API request with storageID from a scene. The resulting url of the transformed model gets logged upon task completion:

```javascript
  var storageId = '535e624259ee6b0200000484/bake/2017-10-20_15-22-15_lKCBcz/lighting.gz.data3d.buffer'
  
  io3d.light.bakeHiRes(storageId,
                       { sunDirection: [ -0.73, -0.3, 0.6 ],
                         lightMapCount: 1,
                         samples: 1000 })
    .then(io3d.utils.processing.whenDone)
    .then(io3d.storage.getUrlFromStorageId)
    .then(console.log)
```

## Example: Bake an aFrame scene

[Coming soon] How to get a storageId from an aFrame scene and bake it with custom sun direction.
