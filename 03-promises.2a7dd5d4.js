function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=o);var i=o("eWCmQ");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let r=0,n=Number(t.target.delay.value);const o=Number(t.target.step.value),l=Number(t.target.amount.value);setTimeout((()=>{const t=setInterval((()=>{l===r?clearInterval(t):(r+=1,function(e,t){const r=Math.random()>.3,n={position:e,delay:t};return r?Promise.resolve(n):Promise.reject(n)}(r,n).then((({position:t,delay:r})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${r}ms`)})).catch((({position:t,delay:r})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${r}ms`)})),n+=o)}),o)}),n)}));
//# sourceMappingURL=03-promises.2a7dd5d4.js.map
