!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([,,,,function(e,t,n){"use strict";n.r(t);n(5),n(6)},function(e,t,n){},function(e,t){!function(){function e(e,t){(function(e,t){return[["app"!==e[0],"app object should be targeted."],[!t,"content object should be passed as second argument."],[!Object.keys(t).length,"content should be a plain object with key-value pairs."]]})(e,t).forEach(function(e){!function(e,t){if(!e)return;throw new Error(t)}(e[0],e[1])})}function t(t,n,r){var o=t.split(".");e(o,n),o.reduce(function(e,t,u){return e[t]||(e[t]={}),u===o.length-1&&(e[t]=Object.keys(n).reduce(function(e,t){return e[t]&&r||(e[t]=n[t]),e},e[t]||{})),e[t]},window)}app.utils.extendApp=function(){var e=arguments;"string"==typeof e[0]?t(e[0],e[1],e[2]):Object.keys(e[0]).forEach(function(n){t(n,e[0][n],e[1])})}}()}]);