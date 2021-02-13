cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-theme-detection.ThemeDetection",
      "file": "plugins/cordova-plugin-theme-detection/www/ThemeDetection.js",
      "pluginId": "cordova-plugin-theme-detection",
      "clobbers": [
        "cordova.plugins.ThemeDetection"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-theme-detection": "1.3.0",
    "cordova-plugin-whitelist": "1.3.4"
  };
});