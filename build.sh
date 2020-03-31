AUTH="23bc46b1-71f6-4ed5-8c54-816aa4f8c502:123zO3xZCLrMN6v2BKK1dXYFpXlPkccOFqm12CdAsMgRU4VrNZ9lyGVCGuMDGIwP"
APIHOST="http://openwhisk:3280"
wsk property set --apihost $APIHOST --auth $AUTH
test -d node_modules || npm install
test -f index.zip || zip -r index.zip node_modules
zip -u index.zip *.js -x *.test.js
wsk action update iosdk/import index.zip --kind nodejs:10 --web true
 