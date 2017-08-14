# Get Started

[Basics](#browser) | [Package Manager](#package-manager-support) | [Publishable API Keys](#using-publishable-api-keys)

## Browser

```html
<head>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://3d.io/releases/3dio-js/1.x.x/3dio.min.js"></script>
</head>
<body>
  <script>
    io3d.utils.ui.message.success('Hello World')
  </script>
</body>
```

Using 3dio without A-Frame is also possible. This is particullary useful if you don not need to render a 3D view: 

```html
<script src="https://3d.io/releases/3dio-js/1.x.x-beta/3dio.min.js"></script>
<script>
  io3d.utils.ui.message.success('Hello World')
</script>
```

## Package Manager Support
 
We support Bower, Webpack, Require.js and simmilar. 3dio is packaged in UMD (Universal Module Definition) format so that it can be used as CommonJS or AMD module.

1. Install library from npm `npm install 3dio --save`
2. Use it your code base:
  ```javascript
  var io3d = require('3dio')
  io3d.utils.ui.message.success('Hello World')
  ```

## Using Publishable API Keys

For some extended functionality with subscription based quotas a <a class="open-publishable-api-keys-menu">publishable API key</a> is required. The [authetication docs](authentication.md) provide a detailed overview of what exactly you can do with publishable API keys. 

Specify your publishable API key in the 3dio script URL:

```html
<script src="https://3d.io/releases/3dio-js/1.x.x/3dio.min.js&pk=YOUR_PUBLISHABLE_API_KEY"></script>
```

Alternatively you can set a publishable API key dynamically using the config method:
 
```html
<script src="https://3d.io/releases/3dio-js/1.x.x-beta/3dio.min.js"></script>
<script>
  io3d.config({
    publishableApiKey:'YOUR_PUBLISHABLE_API_KEY'
  })
</script>
```

Config is also the recommended method when using a package manager like Bower, Webpack, Require.js or similar: 

```javascript
var io3d = require('3dio')
io3d.config({
  publishableApiKey: 'YOUR_PUBLISHABLE_API_KEY'
})
```

## Secret API Key

Please do not use secret API keys in browser environments. Doing so would expose it to everybody. Secret API keys should be kept secret and used only in secure environments. expose your secret API key only to trusted 3rd parties.

## Next Steps

* [Authentication overview](authentication.md)
* [Config options](configs.md)
* [Using 3dio with Node.js](get-started-node-server.md)