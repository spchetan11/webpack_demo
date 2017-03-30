var path = require('path');

module.exports = {
  entry:__dirname+'/src/app.js',
  output: {
         path: path.join(__dirname,"/static/build"),
         filename:"bundle.js"
         }
 
  }
