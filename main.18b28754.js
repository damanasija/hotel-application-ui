parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"PMvg":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"QVnC"}],"agGE":[function(require,module,exports) {
function n(n,t,o,r,e,i,u){try{var c=n[i](u),v=c.value}catch(a){return void o(a)}c.done?t(v):Promise.resolve(v).then(r,e)}function t(t){return function(){var o=this,r=arguments;return new Promise(function(e,i){var u=t.apply(o,r);function c(t){n(u,e,i,c,v,"next",t)}function v(t){n(u,e,i,c,v,"throw",t)}c(void 0)})}}module.exports=t;
},{}],"fcMS":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"OUZ9":[function(require,module,exports) {
function r(r){if(Array.isArray(r))return r}module.exports=r;
},{}],"vKPt":[function(require,module,exports) {
function r(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,l=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(a){o=!0,l=a}finally{try{n||null==u.return||u.return()}finally{if(o)throw l}}return e}}module.exports=r;
},{}],"NVR6":[function(require,module,exports) {
function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}module.exports=n;
},{}],"UyFj":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function t(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}module.exports=t;
},{"./arrayLikeToArray":"NVR6"}],"Rom6":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e;
},{}],"HETk":[function(require,module,exports) {
var r=require("./arrayWithHoles"),e=require("./iterableToArrayLimit"),t=require("./unsupportedIterableToArray"),i=require("./nonIterableRest");function u(u,a){return r(u)||e(u,a)||t(u,a)||i()}module.exports=u;
},{"./arrayWithHoles":"OUZ9","./iterableToArrayLimit":"vKPt","./unsupportedIterableToArray":"UyFj","./nonIterableRest":"Rom6"}],"LPaJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderNewHotel=s,exports.updateFavouriteStatusForHotel=c,exports.openModalFor=d,exports.closeHotelModal=a,exports.updateHotelPreferencesOnView=l,exports.enableHotelModalUpdateButton=g,exports.disableHotelModalUpdateButton=w,exports.showInvalidNameError=N,exports.hideInvalidNameError=M;var e=t(require("@babel/runtime/helpers/slicedToArray"));function t(e){return e&&e.__esModule?e:{default:e}}var n='<svg class="disabled-clicks" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>',r='<svg class="disabled-clicks" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>',o=document.querySelector("#hotels");function l(e,t,n){e.lastElementChild.firstElementChild.firstElementChild.textContent=t,e.lastElementChild.firstElementChild.lastElementChild.replaceWith(v(n))}function a(){document.querySelector("#hotel-modal").style.display="none",document.forms.hotelUpdateForm.hotelNameInput.value="",Array.from(document.forms.hotelUpdateForm.options).forEach(function(e){return e.checked=!1}),M()}function d(e){i(e.optionIds);var t=document.querySelector("#hotel-modal"),n=document.forms.hotelUpdateForm.hotelNameInput;n.value=e.name,t.firstElementChild.firstElementChild.firstElementChild.innerText="Update ".concat(e.name),t.style.display="flex",n.focus()}function i(e){Array.from(document.forms.hotelUpdateForm.options).filter(function(t){return e.includes(t.id)}).forEach(function(e){return e.checked=!0})}function s(e){o.appendChild(u(e))}function c(e,t){var n=e.children[1].children[1],r=b(t);n.replaceWith(r)}function u(e,t){var n=S("li",{class:"card","data-id":e.id,role:"button",tabindex:"0"});return n.appendChild(p(e.logoUrl)),n.appendChild(h(e,t)),n}function p(e){var t=S("div",{class:"image-container"}),n=S("img",{class:"hotel-logo",src:e});return t.appendChild(n),t}function h(e){var t=S("div",{class:"hotel-details"});return t.appendChild(f(e)),t.appendChild(b(e.isFavourite)),t}function f(e){var t=S("div",{class:"hotel-card-header"});return t.appendChild(C(e.name)),t.appendChild(y(e.phoneNumber)),t.appendChild(m()),t}function m(){return S("ul",{class:"selected-options-list"})}function v(e){var t=m();return e.map(function(e){var t=S("li",{class:"gray-badge"});return t.appendChild(document.createTextNode(e.label)),t}).forEach(function(e){return t.appendChild(e)}),t}function C(e){var t=S("h1",{class:"hotel-name"});return t.appendChild(document.createTextNode(e)),t}function b(e){var t=S("div",{class:"hotel-status-container"});return t.appendChild(x(e)),t}function x(e){return F(E(e),{class:"hotel-status-icon"})}function E(e){return e?n:r}function y(e){var t=S("span");return t.appendChild(document.createTextNode("Ph: ".concat(e))),t}function g(){var e=document.querySelector("#updateHotelButton");e.disabled=!1,e.classList.add("btn-blue"),e.classList.remove("disabled-btn")}function w(){var e=document.querySelector("#updateHotelButton");e.disabled=!0,e.classList.remove("btn-blue"),e.classList.add("disabled-btn")}function N(e){var t=document.querySelector("#hotelNameError");q(t,{class:""}),t.textContent=e}function M(){q(document.querySelector("#hotelNameError"),{class:"hidden",value:""})}function F(e,t){var n=(new DOMParser).parseFromString(e,"text/html").body.firstElementChild;return t&&q(n,t),n}function S(e,t){var n=document.createElement(e);return t&&q(n,t),n}function q(t,n){Object.entries(n).forEach(function(n){var r=(0,e.default)(n,2),o=r[0],l=r[1];t.setAttribute(o,l)})}
},{"@babel/runtime/helpers/slicedToArray":"HETk"}],"vb6H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Hotel=void 0;var e=t(require("@babel/runtime/helpers/classCallCheck"));function t(e){return e&&e.__esModule?e:{default:e}}var s=function t(s,i,o,r,l){(0,e.default)(this,t),this.id=s,this.name=i,this.isFavourite=o,this.phoneNumber=r,this.logoUrl=l,this.optionIds=[]};exports.Hotel=s;
},{"@babel/runtime/helpers/classCallCheck":"fcMS"}],"XfdL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HOTELS=void 0;var o=[{name:"Hotel 1",isFavourite:!1,phoneNumber:2345678901,logo:"https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_logos_4.0/Aetna.png"},{name:"Hotel 2",isFavourite:!0,phoneNumber:9876567890,logo:"https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_logos_4.0/Teladoc.png"},{name:"Hotel 3",isFavourite:!0,phoneNumber:7656789087,logo:"https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_logos_4.0/Aetna.png"},{name:"Hotel 4",isFavourite:!1,phoneNumber:5678908970,logo:"https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_logos_4.0/Aetna.png"},{name:"Hotel 5",isFavourite:!0,phoneNumber:5678908970,logo:"https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_logos_4.0/Teladoc.png"},{name:"Hotel 6",isFavourite:!1,phoneNumber:4567893456,logo:"https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_logos_4.0/Teladoc.png"},{name:"Hotel 7",isFavourite:!1,phoneNumber:4522345678,logo:"https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_logos_4.0/ComPsych.png"},{name:"Hotel 8",isFavourite:!0,phoneNumber:5678906789,logo:"https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_logos_4.0/ComPsych.png"},{name:"Hotel 9",isFavourite:!0,phoneNumber:4567456789,logo:"https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_logos_4.0/ComPsych.png"},{name:"Hotel 10",isFavourite:!1,phoneNumber:4567456789,logo:"https://59b602507414a6d288cf-98a1a17df509e6abbdfa88e2a08a0e33.ssl.cf1.rackcdn.com/common/vendor_logos_4.0/Teladoc.png"}];exports.HOTELS=o;
},{}],"qokF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HotelController=void 0;var e=a(require("@babel/runtime/regenerator")),t=a(require("@babel/runtime/helpers/asyncToGenerator")),r=a(require("@babel/runtime/helpers/classCallCheck")),o=require("./hotelRenderer.js"),n=require("./hotel.js"),l=require("./seeds.js");function a(e){return e&&e.__esModule?e:{default:e}}var u=function e(){(0,r.default)(this,e),this.hotels=[]};function i(){return Array.from(document.forms.hotelUpdateForm.options).filter(function(e){return e.checked}).map(function(e){return{id:e.id,label:e.nextElementSibling.textContent}})}exports.HotelController=u,u.prototype.fetchHotels=(0,t.default)(e.default.mark(function t(){var r;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=l.HOTELS,this.hotels=r.map(function(e,t){return new n.Hotel(t,e.name,e.isFavourite,e.phoneNumber,e.logo)}),this.currentlySelectedHotelCard=null;case 3:case"end":return e.stop()}},t,this)})),u.prototype.refreshHotels=(0,t.default)(e.default.mark(function t(){return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchHotels();case 2:this.hotels.forEach(function(e){return(0,o.renderNewHotel)(e)});case 3:case"end":return e.stop()}},t,this)})),u.prototype.updateFavouriteStatusFor=function(e){var t=this.hotelIdFromElement(e),r=this.findHotelById(t);r.isFavourite=!r.isFavourite,(0,o.updateFavouriteStatusForHotel)(e,r.isFavourite)},u.prototype.updateHotelPreferences=function(){var e=this.hotelIdFromElement(this.currentlySelectedHotelCard),t=this.findHotelById(e),r=i();t.optionIds=r.map(function(e){return e.id});var n=document.forms.hotelUpdateForm.hotelNameInput;t.name=n.value,(0,o.updateHotelPreferencesOnView)(this.currentlySelectedHotelCard,n.value,r),this.closeModal()},u.prototype.hotelIdFromElement=function(e){return parseInt(e.dataset.id)},u.prototype.findHotelById=function(e){return this.hotels.find(function(t){return t.id===e})},u.prototype.openHotelModal=function(e){this.currentlySelectedHotelCard=e;var t=this.hotelIdFromElement(e),r=this.findHotelById(t);(0,o.openModalFor)(r)},u.prototype.closeModal=function(){(0,o.closeHotelModal)(),this.currentlySelectedHotelCard.focus(),this.currentlySelectedHotelCard=null},u.prototype.validateHotelName=function(){var e=document.forms.hotelUpdateForm.hotelNameInput,t=e.value.trim();e.value=t,t.length<3&&(0,o.showInvalidNameError)("Name should be atleast three characters long"),t.length>100&&(0,o.showInvalidNameError)("Name should not be greater than 100 characters")},u.prototype.isHotelNameInputValid=function(){var e=document.forms.hotelUpdateForm.hotelNameInput,t=e.value.replace(/^\s*/,"");e.value=t;var r=t.trim();return 2<r.length&&101>r.length},u.prototype.enableUpdateButtonOnValidInput=function(){if(this.isHotelNameInputValid())return(0,o.enableHotelModalUpdateButton)(),void(0,o.hideInvalidNameError)();(0,o.disableHotelModalUpdateButton)()};
},{"@babel/runtime/regenerator":"PMvg","@babel/runtime/helpers/asyncToGenerator":"agGE","@babel/runtime/helpers/classCallCheck":"fcMS","./hotelRenderer.js":"LPaJ","./hotel.js":"vb6H","./seeds.js":"XfdL"}],"EuEp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.interceptClicks=l,exports.interceptKeyUpEvents=n,exports.preventSpaceKeyDownEvent=s,exports.handleEscapePressed=a;var e=require("./hotelRenderer"),t=32,o=13,r=27;function n(e,r){e.keyCode!==t&&e.keyCode!==o||(e.preventDefault(),c(e,r))}function s(e){e.keyCode===t&&e.preventDefault()}function a(t){t.keyCode===r&&(0,e.closeHotelModal)()}function c(e,t){i(e)&&t.openHotelModal(e.target)}function l(e,t){if(u(e)){var o=i(e);t.updateFavouriteStatusFor(o)}else{var r=i(e);r&&t.openHotelModal(r)}}function u(e){return e.target.closest(".hotel-status-container")}function i(e){return e.target.closest("li.card")}
},{"./hotelRenderer":"LPaJ"}],"d6sW":[function(require,module,exports) {
"use strict";var e=require("./hotelController.js"),t=require("./interceptor.js"),n=new e.HotelController,r=document.querySelector("#hotels");function o(e){return"hotel-modal"===e.target.id}r.addEventListener("click",function(e){return(0,t.interceptClicks)(e,n)}),r.addEventListener("keyup",function(e){return(0,t.interceptKeyUpEvents)(e,n)}),r.addEventListener("keydown",function(e){return(0,t.preventSpaceKeyDownEvent)(e)}),document.querySelector(".modal-close").addEventListener("click",function(e){return n.closeModal()}),document.querySelector("#updateHotelButton").addEventListener("click",function(e){return n.updateHotelPreferences()}),document.forms.hotelUpdateForm.hotelNameInput.addEventListener("blur",function(e){return n.validateHotelName()}),document.forms.hotelUpdateForm.hotelNameInput.addEventListener("input",function(e){return n.enableUpdateButtonOnValidInput()}),window.addEventListener("click",function(e){o(e)&&n.closeModal()}),window.addEventListener("keyup",function(e){(0,t.handleEscapePressed)(e)}),document.forms.hotelUpdateForm.addEventListener("submit",function(e){return e.preventDefault()}),window.addEventListener("DOMContentLoaded",function(e){return n.refreshHotels()});
},{"./hotelController.js":"qokF","./interceptor.js":"EuEp"}]},{},["d6sW"], null)
//# sourceMappingURL=main.18b28754.js.map