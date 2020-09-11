const fs = require('fs')
const csv = require('csv')
const japanmesh = require('japanmesh')


const parser = csv.parse((err, data) => {
  if (err) throw(err)
  const keys = data.shift()
  const descriptions = data.shift()
  for(const r of data) {
    let properties = {}
    for(let i = 0; i < keys.length; i++) {
      properties[keys[i]] = r[i]
    }
    let f = japanmesh.toGeoJSON(r[0], properties)
    console.log(`\x1e${JSON.stringify(f)}`)
  }
})

fs.createReadStream(process.argv[2]).pipe(parser)
