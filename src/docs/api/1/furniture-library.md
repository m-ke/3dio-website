# Furniture Library

The furniture library API calls give you access to the broad [furniture library](https://furniture.3d.io) offered by [Archilogic](https://spaces.archilogic.com/explore).

## Searching the Library

### Example

Get a list of max 50 furniture objects related to `wood` and `chair`:
```javascript
  io3d.furniture.search('Wood Chair', { limit: 50 }).then(console.log)
```

| Parameter | Required? | Description |
| --- | --- | --- |
| `query` | Yes | An string specifying search options (see below) or `null` to return random furniture pieces. |
| `options` | No | |
| `options.limit` | No | How many results will be returned at most. |

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


## Get a Single Furniture Piece

### Example

The following snippet reads a single piece of furniture with the ID `943357e8-911f-4bb5-8b89-8281385ef08f`:

```javascript
  io3d.furniture.get('943357e8-911f-4bb5-8b89-8281385ef08f').then(console.log)
```

| Parameter | Required? | Description |
| --- | --- | --- |
| `furniture ID` | Yes | The ID of the furniture piece to retrieve. |

## Furniture Data Structure

Exemplary data returned from `io3d.furniture.search` or `io3d.furniture.get` 

```JSON
"{
  "id": "5b97e7b5-2d13-4489-bf76-013ad70949fe",
  "name": "Basel Chair",
  "description": "With the Basel Chair, Jasper Morrison renews the classic genre of simple wooden chairs, which have been industrially produced over the past 100 years in great quantity and variety. The eye is immediately struck by the harmonious proportions, yet on closer inspection the chair also reveals a decisive innovation: the seat and back are made of plastic, allowing for a more pronounced organic shape, enhanced surface texture and an overall thinner and thus more flexible design compared to all-wood chairs. Thanks to this combination of materials, the Basel Chair provides significantly improved seating comfort over chairs made only of wood and, in its two-tone variants, is especially pleasing to the eye.<br><br>Vitra furniture is protected by copyright. Vitra has been authorised by the owners of the intellectual property rights for the manufacture and distribution of these designs and holds the exclusive worldwide rights for their production and sale.</br>Restrictions apply. Details:<br><a href='https://www.vitra.com/en-ch/content/distribution-rights' target='_blank'>https://www.vitra.com/en-ch/content/distribution-rights</a> ",
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
}"
```