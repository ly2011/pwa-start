(function() {
  'use strict';
  if ('serviceWorker' in navigator) {
    // 注册service worker
    navigator.serviceWorker.register('/service-worker.js');
  }
})();
