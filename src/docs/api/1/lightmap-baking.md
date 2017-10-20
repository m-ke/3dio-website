# Light map baking

Light maps are image textures that enrich the appearance of the model with shadow and light information. Light maps are independent of the other textures in the material.
Baking provides realistic lighting effects at a low computational cost and enriches your models without impacting the performance on all supported devices.

The light simulation can be set up based on the location of the model, its orientation and a specified time and day of the year.

Namespace: `io3d.light`

## Quota

The bake API is a part of the 3d.io Freemium API. Learn here about [Quotas](https://3d.io/docs/api/1/authentication.html)
and how to authenticate in order to use this API.

## bake, bakeLoRes

| Parameter | Type | Required? | Default | Description |
| --- | --- | --- | --- | --- |
| `storageId` | String | Yes | | The storageId of the model to be baked. |
| `options` | Object | No | | |
| `options.sunDirection`  | Array(Float) | No | [ 0.75, -0.48, -0.46 ] | What direction the sun is coming from. |

### Example

```javascript
  io3d.light.bakeLoRes("/535e624259ee6b0200000484/bake/2017-03-03_10-15-49_M7nYrh/regular/lighting.gz.data3d.buffer",
                            { sunDirection: [ 0.75, -0.75, -0.4 ]})
    .then(io3d.utils.processing.whenDone)
    .then(console.log)
```

## bakeHiRes

| Parameter | Type | Required? | Default | Description |
| --- | --- | --- | --- | --- |
| `storageId` | String | Yes | | The storageId of the model to be baked. |
| `options` | Object | No | | |
| `options.sunDirection`  | Array(float) | No | [ 0.75, -0.48, -0.46 ] | What direction the sun is coming from. |
| `options.lightMapCount`  | Number | No | optiomal count calculated | How many light maps should be baked. |
| `options.samples`  | Number | No | 1000 | How many raytracing samples are used. |

Sun Direction
- (WIP)

Light Map Count
- performance

Samples
- less samples, faster bake
- more samples, better lightmaps

### Example

```javascript
  io3d.light.bakeHiRes("/535e624259ee6b0200000484/bake/2017-03-03_10-15-49_M7nYrh/regular/lighting.gz.data3d.buffer",
                            { sunDirection: [ 0.75, -0.75, -0.4 ],
                              lightMapCount: 1,
                              samples: 1000 })
    .then(io3d.utils.processing.whenDone)
    .then(console.log)
```

## Bake a a-frame scene

(WIP) How to get buffer file from (a-frame) scene
