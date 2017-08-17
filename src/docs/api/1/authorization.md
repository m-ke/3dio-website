# Authorization

In order to provide secure access to private and protected resources, such as 3D scenes and to be able to
determine your API usage in order to bill some of our services, such as the Virtual Staging service,
some of the API calls will require an API key or have the option to provide one if private resources should be accessed.

Getting the API key is free and quick and providing the API key in requests in unobtrusive.

<div id="apiKeyInfo">

## Getting your free API key

To generate an API key or see your previously-generated key, visit [your organisation page](https://spaces.archilogic.com/organization).

</div>

<template id="apiKeyExists">
  <h2>Your API key</h2>
  <p>To authenticate your API requests, you can use the following API key:</p>
  <code><pre></pre></code>
</template>

<template id="apiKeyEmpty">
  <h2>Generate your API key</h2>
  <p>To use API methods that require an API key, you can click the button below and generate an API key for free!</p>
  <button onclick="makeApiKey()">Get me an API key!</button>
</template>

<template id="apiKeyLoginRequired">
  <h2>Getting an API key</h2>
  <p>To use API methods that require an API key, please <a href="https://spaces.archilogic.com/dashboard">log in</a> with your Archilogic account or <a href="https://spaces.archilogic.com/dashboard">create a free account</a>.</p>
</template>

<script src="https://dist.3d.io/3dio-js/1.x.x-beta/3dio.min.js"></script>
<script>

function makeApiKey() {
  io3d.utils.services.call('Organization.generateApiKey').then(function (apiKey) {
    var tpl = document.importNode(document.getElementById('apiKeyExists').content, true)
    tpl.querySelector('pre').textContent = apiKey
    container.innerHTML = ''
    container.appendChild(tpl)
  })
}

var container = document.getElementById('apiKeyInfo')
io3d.utils.auth.getSession().then(function (session) {
  if (session.isAuthenticated) {
    io3d.utils.services.call('Organization.read').then(function (organization) {
      if (organization.apiKey) {
        var tpl = document.importNode(document.getElementById('apiKeyExists').content, true)
        tpl.querySelector('pre').textContent = organization.apiKey
        container.innerHTML = ''
        container.appendChild(tpl)
      } else {
        var tpl = document.importNode(document.getElementById('apiKeyEmpty').content, true)
        container.innerHTML = ''
        container.appendChild(tpl)
      }
    })
  } else{
    var tpl = document.importNode(document.getElementById('apiKeyLoginRequired').content, true)
    container.innerHTML = ''
    container.appendChild(tpl)
  }
})
</script>

## Making authorized requests

To make authorized API calls, you provide the API key along with the HTTP request in the `X-API-KEY` header or configure your client library:

```bash
curl -X POST -H 'Content-Type: application/json' -H 'X-API-KEY: YOUR-API-KEY-HERE' -d '...' https://spaces.archilogic.com/api/v2
```
