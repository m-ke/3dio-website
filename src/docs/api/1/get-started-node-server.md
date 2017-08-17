# Get Started

## Node.js Server

1. Install library from npm: `npm install 3dio --save`
2. Use it your code base:
  ```javascript
  const io3d = require('3dio')
  console.log(io3d.runtime.libInfo)
  ```

## Using Publishable API Keys

For some extended functionality with subscription based quotas a <a class="open-publishable-api-keys-menu">publishable API key</a> is required. The [authetication docs](authentication.md) provide a detailed overview of what exactly you can do with publishable API keys. 

Set a publishable API key using the config method:
 
```javascript
const io3d = require('3dio')
io3d.config({
  publishableApiKey: 'YOUR_PUBLISHABLE_API_KEY'
})
```

## Using Secret API Key

```javascript
const io3d = require('3dio')
io3d.config({
  secretApiKey: 'YOUR_SECRET_API_KEY'
})
```

## Next Steps

* [Authentication overview](authentication.md)
* [Config options](configs.md)
