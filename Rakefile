desc 'create GeoJSON and vector tiles'
task :tiles do
  sh "node index.js src/tblT000918H3928.txt | tippecanoe-json-tool -w > geojson/a.geojson"
  sh "node index.js src/tblT000918H3928.txt | tippecanoe --no-feature-limit --no-tile-size-limit --force --maximum-zoom=7 --minimum-zoom=2 -o tiles.mbtiles"
  sh "tile-join --force --no-tile-compression --output-to-directory=docs/zxy --no-tile-size-limit tiles.mbtiles"
end

desc 'build style.json from HOCON descriptions'
task :style do
  require 'json'
   sh "parse-hocon hocon/style.conf > docs/style.json"
  center = JSON.parse(File.read('docs/zxy/metadata.json'))['center'].split(',')
    .map{|v| v.to_f }.slice(0, 2)
  style = JSON.parse(File.read('docs/style.json'))
  style['center'] = center
  File.write('docs/style.json', JSON.pretty_generate(style))
  sh "gl-style-validate docs/style.json"
end

desc 'host the site'
task :host do
  sh "budo -d docs"
end

