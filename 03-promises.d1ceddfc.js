function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const u=document.querySelector(".form");function l(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{if(n)return o({position:e,delay:t}),{position:e,delay:t};r({position:e,delay:t})}),t)}))}function s(){const{elements:{delay:e,step:t,amount:n}}=u;return{delay:e.value,step:t.value,amount:n.value}}u.addEventListener("submit",(t=>{t.preventDefault(),s();const n=s();!function(t){const n=s();let o=Number(n.delay),r=Number(n.step);Number(n.amount);for(let n=1;n<=t;n++)l(n,o+n*r).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}(Number(n.amount)),u.reset()}));
//# sourceMappingURL=03-promises.d1ceddfc.js.map
