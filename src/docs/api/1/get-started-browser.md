# Get Started



## Browser

```javascript
<head>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://3d.io/releases/3dio-js/1.x.x-beta/3dio.min.js"></script>
</head>
<body>
  <script>
    io3d.utils.ui.message.success('Hello World')
  </script>
</body>
```

Using 3dio without A-Frame is also possible. This is particullary useful if you don not need to render a 3D view: 

```javascript
<script src="https://3d.io/releases/3dio-js/1.x.x-beta/3dio.min.js"></script>
<script>
  io3d.utils.ui.message.success('Hello World')
</script>
```

## Package Manager Support
 
We support Bower, Webpack, Require.js or simmilar. 3dio is packaged in UMD (Universal Module Definition) format so that it can be used as CommonJS or AMD module:

1. Install library from npm `npm install 3dio --save`
2. Use it your code base:
  ```javascript
  var io3d = require('3dio')
  io3d.utils.ui.message.success('Hello World')
  ```

## Using Publishable API Keys

For some extended functionality with subscription based quotas a <a href="javascript:io3d.utils.ui.publishableApiKeys();">publishable API key</a> is required. The [authetication docs](authentication.md) provide a detailed overview of what exactly you can do with publishable API keys. 

Specify your publishable API key in the 3dio script URL:

```javascript
<script src="https://3d.io/releases/3dio-js/1.x.x/3dio.min.js&pk=[[YOUR_PUBLISHABLE_API_KEY]]"></script>
```

Alternatively you can set a publishable API key dynamically using the config method:
 
```javascript
<script src="https://3d.io/releases/3dio-js/1.x.x-beta/3dio.min.js"></script>
<script>
  io3d.config({
    publishableApiKey:'[[YOUR_PUBLISHABLE_API_KEY]]'
  })
</script>
```

### With Bower, Webpack, Require.js 

```javascript
var io3d = require('3dio')
io3d.config({
  publishableApiKey:'[[YOUR_PUBLISHABLE_API_KEY]]'
})
```

## Next Steps

* [Authentication overview](authentication.md)
* [Config options](configs.md)
* [Using 3dio with Node.js](get-started-node-server.md)