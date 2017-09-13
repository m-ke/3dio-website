# Storage

Large-scale file storage service designed to handle 3D assets. It enables you to upload even large files easily and delivers them to your apps over fast and reliable CDN.

## File Access

### Storage Key

Every file has its own unique storage key consisting of the user ID and a custom component:
```text
/535e624259ee6b0200000484/example/floorplan.jpg
|                        |       |            |
| ------- userId ------- |       |            |
|                                |            |
| ------------ dir ------------- |            |
|                                             |
|                        | --- storageId ---- |
|                                             |
| ------------------- key ------------------- |
```

### URL

Simply prepend `storage.3d.io` to any file key:

https://storage.3d.io/535e624259ee6b0200000484/example/floorplan.jpg

### No CDN Cache URL

Access file directly without CDN caching via `storage-nocdn.3d.io` :

https://storage-nocdn.3d.io/535e624259ee6b0200000484/example/floorplan.jpg

## Storage characteristics

| Authentication type | Permanent | Choose the storageId |
| --- | --- | --- |
| No authentication | ❌ | ❌ |
| [Publishable key]() | ✅ | ❌ |
| [Secret key]() | ✅ | ✅ |

### Anonymous uploads

You are free to upload content without logging in, but you won't be able to pick the storage ID, instead we will generate a random storageId for you.
Also, **anonymous uploads will only be stored for 7 days**.
If you need a permanent upload, please use one of your API keys (see below).

```javascript
var file = new Blob(['Hello World'])
file.name = 'hello.txt'

io3d.storage.put(file).then(function (key) {
  console.log('Your new file key is:', key)
})
```

### Permanent uploads

You can upload files to be permanently stored by using your [publishable key]().

```javascript
var file = new Blob(['Hello World'])
file.name = 'hello.txt'

io3d.storage.put(file).then(function (key) {
  console.log('Your new file key is:', key)
})
```

### Permanent uploads with a custom key

You can upload files with a custom key of your choice under your userId using your [secret key]() for the upload or use `io3d.auth.login`.


## File Upload

### Upload a single file:
```javascript
var file = new Blob(['Hello World'])
file.name = 'hello.txt'

io3d.storage.put(file).then(function (key) {
  console.log('Your new file key is:', key)
})
```

### Upload multiple files:
```javascript
var file1 = new Blob(['Hello World!!'])
file1.name = 'my-filename.txt'

var file2 = new Blob(['Howdy Partner'])
file2.name = 'another-filename.txt'

io3d.storage.put([file1, file2]).then(function (keys) {
  console.log('Done. File keys are:', keys)
})
```

### Upload file to a specific location:
```javascript
var file = new Blob(['Hello World'])

// uploading a file to specific location requires login
io3d.utils.auth.login({
  username: 'your-username-here',
  password: 'your-password-here'
}).then(function (session) {
  return io3d.storage.put(file, {
    key: '/' + session.user.id + '/my-folder-name/my-file-name.txt'
  })
}).then(function (key) {
  console.log('Done')
})
```

### Upload file to a specific location using template shortcut:
```javascript
var file = new Blob(['Hello World'])

io3d.storage.put(file, {
  // {{userId}} will get replaced internally by the currently logged-in
  // user id. Not being logged-in will result in the promise being rejected.
  key: '/{{userId}}/my-folder-name/my-file-name.txt'
}).then(function onSuccess (key) {
  console.log('Done')
}, function onReject () {
  console.error('Please log in first')
})
```
### Upload multiple files to a specific directory:
```javascript
var file1 = new Blob(['Hello World!!'])
file1.name = 'my-filename.txt'

var file2 = new Blob(['Howdy Partner'])
file2.name = 'another-filename.txt'

io3d.storage.put(files, {
  // {{userId}} will get replaced internally by the currently logged-in
  // user id. Not being logged-in will result in the promise being rejected.
  dir: '/{{userId}}/my-folder-name/'
}).then(function onSuccess (keys) {
  console.log('Done. File keys are:', keys)
}, function onReject () {
  console.error('Please log in first')
})
```
