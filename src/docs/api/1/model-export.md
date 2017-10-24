# Export 3d Models

Export API calls enable you to convert your model to a wide variety of 3d formats.
Supported texture types depend on the export file format specification.

Namespace: `io3d.storage`

## Quota

The export API is a part of the 3d.io Freemium API. Learn here about [Quotas](https://3d.io/docs/api/1/authentication.html)
and how to authenticate in order to use this API.

## 3d and 2d formats overview

| Format   | Method | Dimension | Specifications | Version |
| ---      | ---     | ---       | --- | --- |
| `3ds`    | export3ds | 3d      | [Autodesk 3DS](http://www.martinreddy.net/gfx/3d/3DS.spec)| |
| `blend`  | exportBlend | 3d    | [Blender](https://www.blender.org/) | 2.78 +|
| `dae`    | exportDae | 3d      | [Collada](https://www.khronos.org/files/collada_spec_1_4.pdf) | |
| `dxf`    | exportDxf | 3d/2d   | [AutoCAD](http://usa.autodesk.com/adsk/servlet/item?id=24240325&siteID=123112) | AC1009 |
| `fbx`    | exportFbx | 3d      | [Autodesk FBX](https://wiki.blender.org/index.php/Extensions:2.6/Py/Scripts/Import-Export/Autodesk_FBX)| Bin 7.4|
| `obj`    | exportObj | 3d      | [Wavefront OBJ](http://www.fileformat.info/format/wavefrontobj/egff.htm)| |

### Texture export

The API always exports the highest quality texture available for further use in the CAD program of your choice.
For example, if a source texture is available it will always export the source over lo-res or hi-res.

Supported texture maps per file format:

| Format   | Diffuse Map | Specular Map | Normal Map | Light Map |
| ---      | ---         | ---          | ---        | ---       |
| `3ds`    | no          | no           | no         | no        |
| `blend`  | yes         | yes          | yes        | yes       |
| `dae`    | no          | no           | no         | no        |
| `dxf`    | no          | no           | no         | no        |
| `fbx`    | yes         | yes          | yes        | yes       |
| `obj`    | yes         | yes          | map_Bump channel | no        |


## export3ds,  exportBlend, exportDae, exportFbx, exportObj

| Parameter | Type | Required? | Description |
| --- | --- | --- | --- |
| `storageId` | String | Yes | The storageId of the model to export. |
| `options` | Object | No | |
| `options.filename`  | String | No | The requested filename for the exported model (no file suffix). |

### Example

The following snippet sends a export API request with storageID of a model for conversion to the blend format.
The resulting url of the converted zip archive gets logged upon task completion and is ready for download:

```javascript
  var storageId = '/535e624259ee6b0200000484/bake/2017-03-03_10-15-49_M7nYrh/regular/lighting.gz.data3d.buffer'
  
  io3d.storage.exportBlend( storageId, { filename: 'material-test' })
    .then(io3d.utils.processing.whenDone)
    .then(io3d.storage.getUrlFromStorageId)
    .then(console.log)
```

## exportDxf

| Parameter | Type | Required? | Description |
| --- | --- | --- | --- |
| `storageId` | String | Yes  | The storageId of the model to export. |
| `options` | Object | No | |
| `options.filename`  | String | No | The requested filename for the exported model (no file suffix). |
| `options.projection`| String | No | The camera position for the 2D projection (rear, front, top, left, right, no), 'no' will export a 3D dxf. |

### Example

The following snippet sends a export API request with storageID to create a top down dxf projection.
The resulting url of the projected 2d floorplan gets logged upon task completion and is ready for download:

```javascript
  var storageId = '535e624259ee6b0200000484/processing/2017-10-17_07-26-42_eqgq9n/lighting.gz.data3d.buffer'
  
  io3d.storage.exportDxf(storageId, { filename: 'my-floorplan', projection: 'top' })
    .then(io3d.utils.processing.whenDone)
    .then(io3d.storage.getUrlFromStorageId)
    .then(console.log)
```

## Software specific format recommendation

Recommended 3d/2d file format for use in other software and toolkits:

| Name          | Format |
| ---           | ---    |
| 3D Studio Max | `3ds`, `dxf` |
| ArchiCAD      | `dxf` |
| ARKit         | `dae` |
| AutoCAD       | `dxf` |
| Blender       | `blend` |
| Cinema 4D     | `fbx`, `obj` |
| Illustrator (Adobe) | `dxf` (2d) |
| Maya          | `fbx` |
| pCon Planner  | `3ds`, `dxf` |
| Revit         | `dxf` (2d) |
| Rhino         | `obj` |
| SketchUp      | `obj` |
| Unity Game Engine  | `blend` |
| Unreal Game Engine | `fbx` |
