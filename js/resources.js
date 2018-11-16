(function() {
  var resourceCache = {};
  var loading = [];
  var readyCallbacks = [];

  function load(urlOrArr) {
        if(urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                _load(url);
            });
        } else {
            _load(urlOrArr);
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function onReady(func) {
      readyCallbacks.push(func);
  }

  function isReady() {
        var ready = true;
        for(var k in resourceCache) {
            if(resourceCache.hasOwnProperty(k) &&
               !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }


    function _load(url) {
        if(resourceCache[url]) {
            return resourceCache[url];
        } else {
            var img = new Image();
            img.onload = function() {
                resourceCache[url] = img;
                if(isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };
            resourceCache[url] = false;
            img.src = url;
        }
    }


  window.Resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();
