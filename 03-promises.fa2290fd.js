!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector(".form"),u=(document.querySelector('button[type="submit"]'),0),a=0,l=0;function c(e,t){new Promise((function(n,o){setTimeout((function(){Math.random()>.3?r.Notify.success("Fulfilled promise".concat(e,"  in").concat(t,"ms")):r.Notify.failure("Rejected promise".concat(e,"  in").concat(t,"ms"))}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault(),u=Number(e.target.delay.value),a=Number(e.target.step.value),l=Number(e.target.amount.value);for(var t=1;t<=l;t+=1){var n=u+(t-1)*a;c(t,n),console.log(t,n)}}))}();
//# sourceMappingURL=03-promises.fa2290fd.js.map
