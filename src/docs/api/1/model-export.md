# Export 3d Models

Export API calls enable you to convert your model to a wide variety of 3d formats.
Supported texture types depend on the export file format specification.

Namespace: `io3d.storage`

## 3d and 2d formats overview

| Format   | dimension | specification | version |
| ---      | ---       | --- | --- |
| `3ds`    | 3d        | | |
| `blend`  | 3d        | Blender | 2.78 +|
| `dae`    | 3d        | | |
| `dxf`    | 3d/2d     | | |
| `fbx`    | 3d        | | |
| `obj`    | 3d        | Wavefront| |

### Texture export

The API always exports the highest quality texture available for further use in the CAD program of your choice.
For example, if a source texture is available it will always export the source over lo-res or hi-res.

Supported texture maps per file format:

| Format   | diffuse map | specular map | normal map | light map |
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
The resulting storageId of the converted zip archive gets logged upon task completion and is ready for download:

```javascript
  io3d.storage.exportBlend("/535e624259ee6b0200000484/bake/2017-03-03_10-15-49_M7nYrh/regular/lighting.gz.data3d.buffer",
                            {filename: 'material-test'})
    .then(function (status) { return io3d.utils.processing.whenDone(status)})
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
The resulting storageId of the projected 2d floorplan gets logged upon task completion and is ready for download:

```javascript
  io3d.storage.exportDxf("535e624259ee6b0200000484/processing/2017-10-17_07-26-42_eqgq9n/lighting.gz.data3d.buffer",
                            {filename: 'my-floorplan', projection: 'top'})
    .then(function (status) { return io3d.utils.processing.whenDone(status)})
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
| Illustrator   | `dxf` (2d) |
| Maya          | `fbx` |
| pCon Planner  | `3ds`, `dxf` |
| Revit         | `dxf` (2d) |
| Rhino         | `obj` |
| SketchUp      | `obj` |
| Unity Game Engine  | `blend` |
| Unreal Game Engine | `fbx` |