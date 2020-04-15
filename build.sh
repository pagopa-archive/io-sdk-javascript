test -d node_modules || npm install
test -f index.zip || zip -r index.zip node_modules
zip -u index.zip *.js -x *.test.js
wsk action update iosdk/import index.zip --kind nodejs:10 --web true
 
