require("./main.css");
var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
require("react");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
///<reference path="./types/index.d.ts" />
var $5dcc767f924b770d$exports = {};

$parcel$export($5dcc767f924b770d$exports, "Button", () => $5a6f28f3fd58ff6e$export$2e2bcd8739ae039);


var $e3bda4904d1bce24$exports = {};

$parcel$export($e3bda4904d1bce24$exports, "button", () => $e3bda4904d1bce24$export$2ba01fb71ed41cb6, (v) => $e3bda4904d1bce24$export$2ba01fb71ed41cb6 = v);
var $e3bda4904d1bce24$export$2ba01fb71ed41cb6;
$e3bda4904d1bce24$export$2ba01fb71ed41cb6 = `os2tra_button`;


function $5a6f28f3fd58ff6e$export$2e2bcd8739ae039({ children: children }) {
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("button", {
        className: (0, (/*@__PURE__*/$parcel$interopDefault($e3bda4904d1bce24$exports))).button,
        children: children
    });
}






$parcel$exportWildcard(module.exports, $5dcc767f924b770d$exports);


//# sourceMappingURL=main.js.map
