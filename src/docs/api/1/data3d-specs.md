# Data3d

Web optimized format for 3d geometry and materials

## Goals by Priority

* Performant in browser context
* Independent from browser context
* Robust ("Be conservative in what you send, be liberal in what you accept":https://en.wikipedia.org/wiki/Robustness_principle)
* Human readable

## Data Structure
```javascript
var data3d = {
    // corresponding node uuid in plan structure
    elementId: 'ee63ca0d-4878-47fb-9048-6f99c9cc3980',
    // position
    position: [ 0, 0, 0 ],
    // orientation in angles radian
    rotation: [ 0, 0, 0 ],
    // mesh definitions
    meshes: {
      '<some-mesh-name>': {
        v: 1,
        positions: [], // buffer array of position vertices
        linePositions: [], // (optional)
        // normal vertices (optional)        
        normals: 'flat', // buffer array or string (name of normal generator method) // fallback: 'flat'
        // uv vertices (optional)
        uvs: 'cubic', // buffer array or string (name of uv generator method) // fallback: 'architectural'
        // uv vertices for lightmap (optional)
        uvsLightmap: [], // buffer array
        // material (optional)
        material: '<some-material-name>', // string
        // position of the entire mesh (optional)
        position: [ 0, 0, 0 ],
        // orientation of the entire mesh in angles radian
        rotation: [ 0, 0, 0 ],
        // scale
        scale: [ 1, 1, 1 ], // optional, fallback fo [1,1,1]
        // position of UV1 vertices (not yet implemented)
        uvsPosition: [ 0, 0, 0 ],
        // orientation of UV1 vertices (not yet implemented)
        uvsRotDeg: [ 0, 0, 0 ],
        side: 'front', // face side. can be: front, back, both // fallback: 'front'
      }
    },
    // material definitions
    materials: {
      '<some-material-name>': {
        v: 1,
        // colors (optional)
        colorDiffuse: [ 0.8, 0.8, 0.8 ], // Fallback [0.85, 0.85, 0.85] (Shader & Blender)
        colorSpecular: [ 0.8, 0.8, 0.8 ], // Fallback [0.25, 0.25, 0.25] (Shader & Blender)
        colorAmbient: [ 0.1, 0.1, 0.1 ],
        colorEmissive: [ 0.1, 0.1, 0.1 ],
        // textures (optional. texture set is mandatory: i.e. mapDiffuse, mapDiffusePreview, mapDiffuseSource)
        // hi-res textures
        // DDS format, power of 2, max 2048 pixel size
        mapDiffuse: '/archilogic/textures/filename.dds',
        mapSpecular: '/archilogic/textures/filename.dds',
        mapNormal: '/archilogic/textures/filename.dds',
        mapAlpha: '/archilogic/textures/filename.dds',
        mapEnv: '/archilogic/textures/filename.dds',
        mapLight: '/archilogic/textures/filename.dds',
        // lo-res textures
        // JPG format, power of 2, max 512 pixel size for materials, max 1024 pixel size for lightmaps
        mapDiffusePreview: '/archilogic/textures/filename.jpg',
        mapSpecularPreview: '/archilogic/textures/filename.jpg',
        mapNormalPreview: '/archilogic/textures/filename.jpg',
        mapAlphaPreview: '/archilogic/textures/filename.jpg',
        mapEnvPreview: '/archilogic/textures/filename.jpg',
        mapLightPreview: '/archilogic/textures/filename.jpg',
        // source textures
        // JPG format, max 4096 pixel size
        mapDiffuseSource: '/archilogic/textures/filename.jpg',
        mapSpecularSource: '/archilogic/textures/filename.jpg',
        mapNormalSource '/archilogic/textures/filename.jpg',
        mapAlphaSource: '/archilogic/textures/filename.jpg',
        mapEnvSource '/archilogic/textures/filename.jpg',
        mapLightSource: '/archilogic/textures/filename.jpg',
        // related to mapLight, mapLightPreview (optional)
        mapLightIntensity: 1,
        mapLightCenter: 0.5,
        mapLightFalloff: 0.5,
        // related to mapSpecular, colorSpecular (optional)
        specularCoef: 11, // Fallback: 0.1 (Shader & Blender)
        // relalted to mapNormal (optional)
        mapNormalFactor: 1,
        // related to mapDiffuse, mapSpecular, mapNormal, mapAlpha, mapDiffusePreview, mapSpecularPreview, mapNormalPreview, mapAlphaPreview (optional)
        size: [ 3, 2 ], // UV1 map size in meters
        wrap: 'repeat', // string (name of wrapping) // possible: repeat, mirror, clamp // fallback: repeat
        // related to realtime shadows (optional)
        castRealTimeShadows: true,
        receiveRealTimeShadows: false,
        // related to light baking (optional)
        lightEmissionCoef: 0,
        addLightmap: true,
        useInBaking: true,
        hideAfterBaking: false,
        // wireframe (optional)
        wireframeThickness: 1,
        wireframeColor: [ 0, 0, 0 ],
        wireframeThresholdAngle: 10, // arc degree
        wireframeOpacity: 1,
        // transparency (optional)
        opacity: 0.5 // 0 = fully transparent, 1 = non-transparent
      },
      '<some-other-material-name>': '<some-global-material-name>' // map local material name to a global material name
    }
  },
  // hierarchy support
  children: []
}
```

## Usage in Code

https://github.com/archilogic-com/3dio-js/tree/master/src/utils/data3d

## Open Question

* buffer referencing in binary format? (objects with repeating geometries)

## Considerations for Version 2.0

* replace data3d with glTF2 + extension for texture sets