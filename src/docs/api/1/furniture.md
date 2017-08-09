# Furniture

Furniture API calls give you access to a broad [furniture library](https://furniture.3d.io) powered by [Archilogic](https://spaces.archilogic.com/explore).

Namespace: `io3d.furniture`

## search

Searches the library using a text query. Will return a promise which resolves with a list of [furniture objects](#furniture-data-structure) (without geometry data).

### Example

Get a list of max 50 furniture objects related to `wood` and `chair`:
```javascript
  io3d.furniture.search('Wood Chair', { limit: 50 }).then(console.log)
```

| Parameter | Type | Required? | Description |
| --- | --- | --- | --- |
| `query` | String | Yes | An string specifying search options (see below) or `null` to return random furniture pieces. |
| `options` | Object | No | |
| `options.limit` | Number | No | How many results will be returned at most. |

<!--
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
-->


## get

Gets a single furniture piece including its geometry data.

### Example

The following snippet reads a single piece of furniture using a specific furniture ID:

```javascript
  io3d.furniture.get('943357e8-911f-4bb5-8b89-8281385ef08f').then(console.log)
```

| Parameter | Type | Required? | Description |
| --- | --- | --- | --- |
| `furnitureId` | String | Yes | The ID of the furniture piece to retrieve. Obtain furnitureIds from the furniture library: at https://furniture.3d.io |

## Furniture Data Structure

Exemplary data returned from `io3d.furniture.search` or `io3d.furniture.get` 

```JSON
{
  "id": "5b97e7b5-2d13-4489-bf76-013ad70949fe",
  "name": "Basel Chair",
  "description": "With the Basel Chair, Jasper Morrison renews the classic genre of simple wooden chairs, which have been industrially produced over the past 100 years in great quantity and variety.",
  "manufacturer": "Vitra",
  "designer": "Jasper Morrison",
  "indexImage": "https://storage.3d.io/archilogic/interior/vitra/chairs/Basel-Chair/info/3d.png",
  "images": [
    "https://storage.3d.io/archilogic/interior/vitra/chairs/Basel-Chair/info/Basel1.jpg",
    "https://storage.3d.io/archilogic/interior/vitra/chairs/Basel-Chair/info/Basel3.jpg",
    "https://storage.3d.io/archilogic/interior/vitra/chairs/Basel-Chair/info/Basel2.jpg"
  ],
  "url": "https://www.vitra.com/en-gb/product/basel-chair",
  "year": 2008,
  "collectionIds": [ "6f8407e0-9ff2-4bbd-89fb-85946eba9748" ],
  "tags": [ "chair" ],
  "styles": [],
  "categories": [ "seating", "dining" ],
  "colours": [],
  "boundingBox": { "length": 0.42, "width": 0.46, "height": 0.78 },
  "boundingPoints": { "min": [-0.21,0,-0.23], "max": [0.21,0.78,0.23] },
  "updated": "2017-02-23T20:30:09Z"
}
```
