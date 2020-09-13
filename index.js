const fs = require('fs')
const csv = require('csv')
const japanmesh = require('japanmesh')
const centerOfMass = require('@turf/center-of-mass').default


const parser = csv.parse((err, data) => {
  if (err) throw(err)
  const keys = data.shift()
  const descriptions = data.shift()
  for(const r of data) {
    let properties = {}
    for(let i = 0; i < keys.length; i++) {
      if (i === 0) {
        properties[keys[i]] = r[i]
      } else {
        properties[keys[i]] = Number(r[i])
      }
    }

    // Polygon
    let f = japanmesh.toGeoJSON(r[0], properties)
    f.tippecanoe = {
      layer: 'stat',
      minzoom: 7
    }
    console.log(`\x1e${JSON.stringify(f)}`)

    // Points
    f = centerOfMass(f, {properties: properties})
    f.tippecanoe = {
      layer: 'stat',
      maxzoom: 6
    }
    console.log(`\x1e${JSON.stringify(f)}`)
  }
})

fs.createReadStream(process.argv[2]).pipe(parser)
