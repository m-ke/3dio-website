# Furniture Library

The furniture library API calls give you access to the broad [furniture library](https://furniture.3d.io) offered by [Archilogic](https://spaces.archilogic.com/explore).

## Searching the library

API Key: **not required**

| Parameter | Required? | Description |
| --- | --- | --- |
| `searchQuery` | Yes | An object specifying search options (see below) or an empty object to return any furniture piece. |
| `limit` | Yes | How many results will be returned at most. |

The `searchQuery` object looks like this with all fields being optional:

| Field name | Description |
| --- | --- |
| `query` | A text that will be fuzzily matched against the name, description, tags and manufacturer of the product |
| `lengthMin` | Minimum length of the product in centimeters |
| `lengthMax` | Maximum length of the product in centimeters |
| `widthMin` | Minimum width of the product in centimeters |
| `widthMax` | Maximum width of the product in centimeters |
| `heightMin` | Minimum height of the product in centimeters |
| `heightMax` | Maximum height of the product in centimeters |

The following snippet lists the first 50 furniture pieces:

```javascript
  io3d.furniture.search().then(console.log)
```
<!--
```bash
  curl -X POST -H 'content-type: application/json' -d '{ \
    "json-rpc": 2.0, \
    "id": "some-random-id", \
    "method": "Product.search", \
    "params": { \
      "searchQuery": {} \
      "limit": 50 \
    } \
  }'
```
-->

## Get a single furniture piece

API key: **not required**

| Parameter | Required? | Description |
| --- | --- | --- |
| `furniture ID` | Yes | The ID of the furniture piece to retrieve. |

The following snippet reads a single piece of furniture with the ID `943357e8-911f-4bb5-8b89-8281385ef08f`:

```javascript
  io3d.furniture.get('943357e8-911f-4bb5-8b89-8281385ef08f').then(console.log)
```
<!--
```bash
  curl -X POST -H 'content-type: application/json' -d '{ \
    "json-rpc": 2.0, \
    "id": "some-random-id", \
    "method": "Product.read", \
    "params": { \
      "productResourceId": "943357e8-911f-4bb5-8b89-8281385ef08f"
    } \
  }'
```
-->
