!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),u=document.querySelector(".form");function a(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){if(t)return o({position:e,delay:n}),{position:e,delay:n};r({position:e,delay:n})}),n)}))}function l(){var e=u.elements,n=e.delay,t=e.step,o=e.amount;return{delay:n.value,step:t.value,amount:o.value}}u.addEventListener("submit",(function(n){n.preventDefault(),l();var t=l();!function(n){for(var t=l(),o=Number(t.delay),r=Number(t.step),u=(Number(t.amount),1);u<=n;u++)a(u,o+u*r).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}(Number(t.amount)),u.reset()}))}();
//# sourceMappingURL=03-promises.e2dc5f19.js.map
