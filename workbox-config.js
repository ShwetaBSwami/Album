module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{html,js,css,png,jpg,svg,json}"
  ],
  "swDest": "build/service-worker.js",
  "clientsClaim": true,
  "skipWaiting": true,
  "runtimeCaching": [
    {
      "urlPattern": /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
      "handler": "CacheFirst",
      "options": {
        "cacheName": "images",
        "expiration": {
          "maxEntries": 60,
          "maxAgeSeconds": 30 * 24 * 60 * 60 // 30 Days
        }
      }
    },
    {
      "urlPattern": new RegExp('https://api.example.com/'),
      "handler": "StaleWhileRevalidate"
    }
  ]
};
