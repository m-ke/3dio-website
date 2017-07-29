# Utils

## Data3D utils

### Load a Data3D file (e.g. scenes or furniture)

This method is a helper to load Data3D files (e.g. [scenes](https://spaces.archilogic.com/explore) or [furniture](./furniture-library.html)).
It loads the specified URL and processes it into a JSON structure.

It takes a single parameter that is the URL to load as a string.

```javascript
IO3D.utils.data3d.load('https://storage.3d.io/3f995099-d624-4c8e-ab6b-1fd5e3799173/170515-0913-4p3ktf/1e588a3b-90ac-4a32-b5b8-ff2fda7f87c4.gz.data3d.buffer')
.then(function (scene3d) {
  console.log(scene3d.meshes.mesh_0.material)
})
```

### Decode a Data3D binary buffer into Data3D JSON

This helper method decodes binary Data3D (also referred to as Buffer3D) data into a more developer-friendly JSON structure.

It takes an [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) or node.js [Buffer](https://nodejs.org/api/buffer.html) as its argument.

```javascript
fetch('https://storage.3d.io/3f995099-d624-4c8e-ab6b-1fd5e3799173/170515-0913-4p3ktf/1e588a3b-90ac-4a32-b5b8-ff2fda7f87c4.gz.data3d.buffer')
  .then(function (response) { return response.arraybuffer() })
  .then(IO3D.utils.data3d.decodeBuffer)
  .then(console.log)
```

## Call Archilogic APIs (services)

In case you need to access a specific Archilogic API directly, you may use `IO3D.services.call` to do so.

**Note**: Please note that the APIs are currently under review and the IO3D wrapper methods should be used instead of calling API methods directly. The API methods are subject to change soon and will be wrapped accordingly via the [3dio.js library](https://github.com/archilogic-com/3dio-js).

```javascript
IO3D.utils.services.call('Model.list', {page: 2})
  .then(console.log)
```

## UUID

### Generating a UUID
In case you need to create a UUID, you can use the convenience function `IO3D.utils.uuid.generate`:

```javascript
var uuid = IO3D.utils.uuid.generate()
console.log(uuid)
```

### Validating that a string is a UUID

Given a string you can check if it is a valid UUID by calling `IO3D.utils.uuid.validate`:

```javascript
console.log(IO3D.utils.uuid.validate('not-a-uuid')) // will log false
console.log(IO3D.utils.uuid.validate('7078987a-d67c-4d01-bd7d-a3c4bb51244b')) // will log true
```

## Get the MIME type based on the filename

Given a filename, e.g. `test.html` you can retrieve the expected MIME type of the file by calling:

```javascript
console.log(IO3D.utils.getMimeTypeFromFilename('test.html')) // will print 'text/html'
console.log(IO3D.utils.getMimeTypeFromFilename('test.jpg')) // will print 'image/jpeg'
```