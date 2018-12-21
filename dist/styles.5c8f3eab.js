// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/kirby.gif":[["kirby.392af8d4.gif","img/kirby.gif"],"img/kirby.gif"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/dark-ground.png":[["dark-ground.d9c90977.png","img/dark-ground.png"],"img/dark-ground.png"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/pink-ground.png":[["pink-ground.b69af411.png","img/pink-ground.png"],"img/pink-ground.png"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/Kirby_background-1280_TWISTER.png":[["Kirby_background-1280_TWISTER.8abca570.png","img/Kirby_background-1280_TWISTER.png"],"img/Kirby_background-1280_TWISTER.png"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/pink-crystal_1.png":[["pink-crystal_1.45165233.png","img/pink-crystal_1.png"],"img/pink-crystal_1.png"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/pink-rock_3.png":[["pink-rock_3.ff268bcd.png","img/pink-rock_3.png"],"img/pink-rock_3.png"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/pink-portal.gif":[["pink-portal.6ad3a3ef.gif","img/pink-portal.gif"],"img/pink-portal.gif"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/pink-cactus_3.png":[["pink-cactus_3.51115c3c.png","img/pink-cactus_3.png"],"img/pink-cactus_3.png"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/pink-rock_2.png":[["pink-rock_2.b886e8c5.png","img/pink-rock_2.png"],"img/pink-rock_2.png"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/pink-crystal_4.png":[["pink-crystal_4.3b650349.png","img/pink-crystal_4.png"],"img/pink-crystal_4.png"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/bat.gif":[["bat.f0ad9dc3.gif","img/bat.gif"],"img/bat.gif"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/dark-dragon.gif":[["dark-dragon.a6370954.gif","img/dark-dragon.gif"],"img/dark-dragon.gif"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/dark-spike_2.png":[["dark-spike_2.0aaf9de0.png","img/dark-spike_2.png"],"img/dark-spike_2.png"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/dark-rock_1.png":[["dark-rock_1.3379891e.png","img/dark-rock_1.png"],"img/dark-rock_1.png"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/dark-portal.gif":[["dark-portal.c6c9eb91.gif","img/dark-portal.gif"],"img/dark-portal.gif"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/img/cemetary.png":[["cemetary.ddc79207.png","img/cemetary.png"],"img/cemetary.png"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/fonts/kirby-classic.ttf":[["kirby-classic.c97de274.ttf","fonts/kirby-classic.ttf"],"fonts/kirby-classic.ttf"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/fonts/ChauPhilomeneOne-Regular.ttf":[["ChauPhilomeneOne-Regular.3670f938.ttf","fonts/ChauPhilomeneOne-Regular.ttf"],"fonts/ChauPhilomeneOne-Regular.ttf"],"/Users/LouisHETIC/Documents/Sites/hetic-w1p2021-11-kirby-backup-copie/src/fonts/Cinzel-Regular.ttf":[["Cinzel-Regular.c098b09a.ttf","fonts/Cinzel-Regular.ttf"],"fonts/Cinzel-Regular.ttf"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49453" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)