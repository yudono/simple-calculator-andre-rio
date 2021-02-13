cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-theme-detection/www/ThemeDetection.js",
        "id": "cordova-plugin-theme-detection.ThemeDetection",
        "pluginId": "cordova-plugin-theme-detection",
        "clobbers": [
            "cordova.plugins.ThemeDetection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-theme-detection/src/browser/ThemeDetectionProxy.js",
        "id": "cordova-plugin-theme-detection.ThemeDetectionProxy",
        "pluginId": "cordova-plugin-theme-detection",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-theme-detection": "1.3.0"
}
// BOTTOM OF METADATA
});