# Modify

Modify API enables you to transform and style your 3D content using scalable preprocessing in the cloud.
Play around with the [modify app](https://modify.3d.io) to test out different settings.

Namespace: `io3d.modify`

## Quota

The modify API is a part of the 3d.io Freemium API. Learn here about [Quotas](https://3d.io/docs/api/1/authentication.html)
and how to authenticate in order to use this API.

## origami

Applies a low poly, paper crafted style to the model.

| Parameter | Type | Required? | Description |
| --- | --- | --- | --- |
| `storageId` | String | Yes | The storageId of the model to modify. |

[coming soon] modify settings

### Example

The following snippet sends a modify API request with storageID from a furniture.
The resulting storageId url of the transformed model gets logged upon task completion:

```javascript
  var storageId = '/535e624259ee6b0200000484/170511-1605-ti05qg/archilogic_2017-05-11_16-05-27_vNIa8r.gz.data3d.buffer'

  io3d.modify.origami(storageId)
    .then(io3d.utils.processing.whenDone)
    .then(io3d.storage.getUrlFromStorageId)
    .then(console.log)
```

![origami Modifier](https://storage.3d.io/535e624259ee6b0200000484/2017-10-19_9-44_i7TkMp/modify.png)


## consolidateFaceSides

This API fixes inconsistencies in supposedly continuous surfaces. This is useful if your model is not showing up properly or has visible holes.

| Parameter | Type | Required? | Description |
| --- | --- | --- | --- |
| `storageId` | String | Yes | The storageId of the model to modify. |

[coming soon] consolidateFaceSides settings


### Example

The following snippet sends a modify API request for a model with inconsistent face normals.
The resulting storageId url of the transformed model gets logged upon task completion:

```javascript
  var storageId = '/535e624259ee6b0200000484/171018-1032-hbth3l/archilogic_2017-10-18_10-32-30_ME3Aah.gz.data3d.buffer'
  
  io3d.modify.consolidateFaceSides(storageId)
    .then(io3d.utils.processing.whenDone)
    .then(io3d.storage.getUrlFromStorageId)
    .then(console.log)
```

![consolidateFaceSides Modifier](https://storage.3d.io/535e624259ee6b0200000484/2017-10-18_23-4_1Dg9G4/consolidate.png)
