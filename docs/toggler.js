!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=59)}({59:function(t,e,n){"use strict";n.r(e);n(60)},60:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o,r,i,a;o=jQuery,r={},i={},a={init:function(t){$win.data("togglerCount")||$win.data("togglerCount",0),o.extend(r,i,t),this.filter((function(){return null==o(this).data("index")})).each((function(){var t=o(this).data({options:o.extend({},r),index:$win.data("togglerCount")}),e=t.find(".js-toggle-switcher").filter((function(){return o(this).closest(".js-toggle").data("index")==t.data("index")})),n=t.find(".js-toggle-content").filter((function(){return o(this).closest(".js-toggle").data("index")==t.data("index")}));$win.data("togglerCount",$win.data("togglerCount")+1),t.data({switcher:e,content:n}),t.hasClass("toggle-off")&&e.data("off")&&e.data("on",e.html()).html(e.data("off")),e.click((function(t){var e,n=o(this),r=n.closest(".js-toggle"),i=r.data("content");switch(e=r.hasClass("toggle-off"),r.toggleClass("toggle-off"),n.data("off")&&(e?n.data("on",n.html()).html(n.data("off")):n.html(n.data("on"))),r.data("effect")){case"slide":e?i.show().slideUp(200,(function(){$win.resize()})):i.hide().slideDown(200,(function(){$win.resize()}));break;case"fade":e?i.show().fadeOut(200,(function(){$win.resize()})):i.hide().fadeIn(200,(function(){$win.resize()}));break;default:e?i.hide():i.show()}t.preventDefault()}))}))}},o.fn.toggler=function(t){return"object"!==n(t)&&t?a[t]?a[t].apply(this,Array.prototype.slice.call(arguments,1)):void o.error("Метод "+t+" не существует в jQuery.toggler"):a.init.apply(this,arguments)}}});