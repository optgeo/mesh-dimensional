# mesh-dimensional
Proof of Concept (PoC) for the idea to generate both point and polygon features from a meshcode. Implemented on Node.js and Tippecanoe.

# Install
```bash
git clone git@github.com:optgeo/mesh-dimensional
cd mesh-dimensional
yarn
```

# Use
```bash
rake tiles
rake style
rake host
```

# Tools used
- Node.js
- tippecanoe-json-tool: to convert GeoJSONS into GeoJSON.

# Source
「経済センサス－活動調査 産業（大分類）別事業所数及び従業者数 M3928 2019-09-25」(総務省 統計局統計調査部経済統計課) を加工して作成

See: https://www.e-stat.go.jp/gis/statmap-search?type=1 and src directory.

