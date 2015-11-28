/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      functions: {
        "listFiles($pattern)": function(pattern) {
          var sass     = require('node-sass');
          var path     = require('path');
          var globSync = require('glob').sync;
          var files    = globSync(pattern.getValue(), { cwd: __dirname });

          list = new sass.types.List(files.length);

          for (var i = 0; i < files.length; i++) {
            var filePath = files[i];
            var fileName = path.basename(filePath, path.extname(filePath))

            list.setValue(i, new sass.types.String(fileName));
          }

          return list;
        }
      }
    } 
  });

  app.import('bower_components/jquery-cookie/jquery.cookie.js');
  app.import('bower_components/leaflet.locatecontrol/dist/L.Control.Locate.css');
  app.import('bower_components/leaflet.locatecontrol/dist/L.Control.Locate.min.js');

  return app.toTree();
};
