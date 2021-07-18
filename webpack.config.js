
var path = require('path');

module.exports = {
    //..
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, './src/components'),
            },
             extensions: ['.wasm', '.mjs', '.js', '.json']  
        }
    }