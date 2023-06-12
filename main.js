(()=>{"use strict";var n={641:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(81),r=t.n(o),i=t(645),s=t.n(i)()(r());s.push([n.id,"/*Using Css variable*/\n:root{\n    --bg-color: white;\n    --font-color: black;\n}\n.dark{\n    --bg-color: black;\n    --font-color: white;\n}\n\nbody {\n    background-color: rgba(15, 16, 18, 255);\n    background-color: var(--bg-color);\n    color: var(--font-color);\n    font-family: 'DM Sans', sans-serif;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    height: 50px;\n    align-items: center;\n    margin-right: 9%;\n    margin-left: 8%;\n}\n\n.logo {\n    display: flex;\n    justify-content: center;\n    width: 100px;\n}\n\n.options {\n    display: flex;\n    width: 500px;\n    justify-content: space-between;\n    height: 25px;\n}\n\n.options>div:hover {\n    border-bottom: 2px solid var(--font-color);\n    border-radius: 2px;\n\n}\n\n.home {\n    margin-top: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 10%;\n}\n\n.slogan {\n    font-size: 70px;\n    display: flex;\n    margin-bottom: 20px;\n}\n\n.slogan-para {\n    font-size: 20px;\n    width: max(60%, 300px);\n}\n\ni {\n    font-size: 25px;\n    width: auto;\n    cursor: pointer;\n    transform: translate(-50%, -50%);\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n}\n/* study-material page */\n.study{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n}\n.tagline{\n    margin-top: 5vh;\n    font-size: max(50px,4vw);\n    font-weight: 950;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.search-bar{\n    margin-top: 5vh;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: row;\n    border: 2px solid var(--font-color);\n    width: 40vw;\n    padding: 8px;\n    padding-left: 15px;\n    gap: 10px;\n    border-radius: 5px;\n}\n#course-select{\n    background-color: var(--bg-color);\n    color: var(--font-color);\n    border: none;\n    outline: none;\n    color: (--font-color) ;\n    font-size: 25px;\n    border-left: 1px solid grey;\n    padding-left: 10px;\n    font-weight: 100;\n    width: 80%;\n}\n\n.courses{\n    width: 90%;\n    height: 20px;\n    margin-top: 50px;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 30px;\n}\n\n.courseBox{\n    height: 200px;\n    width: 300px;\n    border: 2px solid var(--font-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--font-color);\n}\n\n.glink{\n    display: none;\n    border-bottom: none;\n}\na{\n    color: var(--font-color);\n    border-bottom: none;\n}\na:visited{\n    text-decoration: none;\n    color: var(--font-color);\n}\na:hover{\n    text-decoration: none;\n    color: var(--font-color);\n}\na:active{\n    text-decoration: none;\n    color: var(--font-color);\n}\n.generate{\n    transition: '2s';\n}",""]);const a=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},s=[],a=0;a<n.length;a++){var c=n[a],l=o.base?c[0]+o.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=r(f,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:g,references:1})}s.push(p)}return s}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var s=0;s<i.length;s++){var a=t(i[s]);e[a].references--}for(var c=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),s=t.n(i),a=t(565),c=t.n(a),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(641),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const v=document.getElementById("toggleDark"),m=document.querySelector("body");document.getElementById("options"),v.addEventListener("click",(function(){this.classList.toggle("bi-moon"),document.body.classList.toggle("dark");const n=document.getElementById("logo"),e=document.getElementById("image");m.classList.contains("dark")?(n.src="../src/reasources/dark-logo.jpeg",e.src="../src/reasources/dark.jpg"):(n.src="../src/reasources/light-logo.jpeg",e.src="../src/reasources/light-bat.jpg")}));let h=document.querySelector(".generate"),y=()=>{h.innerHTML='<div class="home">\n    <div class="content">\n        <div class="text">\n            <div class="slogan">\n                BY<br>SNUITES<br>FOR<br>SNUITES\n            </div>\n            <div class="slogan-para">\n                Welcome to SnuAcademia, the ultimate student designed website that helps in simplifying study life\n                at SNU\n            </div>\n        </div>\n    </div>\n    <img id="image" src="../src/reasources/light-bat.jpg" style="width:50%;margin-right: 10%;">\n</div>'};y(),document.getElementById("home").addEventListener("click",y),document.getElementById("study").addEventListener("click",(()=>{h.innerHTML='<div class="study">\n    <div class="tagline">\n        <span>Where Textbooks</span>\n        <span>And Dreams Collide</span>\n        <span style="font-size: max(20px,1.5vw); font-weight: 200; margin-top: 2vh;">Explore, Discover, and Shape Your Academic Journey with Limitless Possibilities</span>\n    </div>\n    <div class="search-bar">\n        <span><i class="bi bi-search" style="font-size: max(20px,1.5vw);" ></i></span>\n        <input type="text" id="course-select" placeholder="Search..." data-search>\n    </div>\n    <div class="courses">\n        \n    </div>\n</div>',((n,e)=>{let t=document.querySelector(".courses"),o=document.getElementById("course-select");o.addEventListener("input",(()=>{const r=o.value.toLowerCase();t.innerHTML="";for(let o=0;o<n.length;o++){const i=n[o].toLowerCase(),s=e[o];if(i.includes(r)){let e=document.createElement("div");e.classList.add("courseBox"),t.appendChild(e),e.innerHTML=`<span id="course-${o}">${n[o]}</span>\n          <span class="glink"  id="link-${o}"><a href="${s}" target="_blank">Content</a></span>`,e.addEventListener("mouseover",(()=>{document.getElementById(`course-${o}`).style.display="none",document.getElementById(`link-${o}`).style.display="flex"})),e.addEventListener("mouseout",(()=>{document.getElementById(`course-${o}`).style.display="flex",document.getElementById(`link-${o}`).style.display="none"}))}}})),o.dispatchEvent(new Event("input"))})(["DES101","FAC202","MEC104","MKT202","OHM401","STM204"],["https://drive.google.com/drive/folders/1pfWH0J2ek7yxTMbmoCv-4YQPB5XKOLHr?usp=sharing","https://drive.google.com/drive/folders/1q7UsKWFg5odT6rX57T4LArhSY5eLa2RJ?usp=sharing","https://drive.google.com/drive/folders/1NlrHKCP52b53OQiYcdBgO7NvL9eQ81zv?usp=sharing","https://drive.google.com/drive/folders/1tzIs2ux6lR1u8eT9fTAD-5JXBkhAGqrb?usp=drive_link","https://drive.google.com/drive/folders/1_-mkdQHCqpPceiQeZw7j91r0hVcUhmhJ?usp=sharing","https://drive.google.com/drive/folders/1Z9BqJC1vCnMxFSRT8YMafB1sdlLAv8mu?usp=sharing"])})),document.getElementById("road").addEventListener("click",(()=>{h.innerHTML=""})),document.getElementById("erp").addEventListener("click",(()=>{h.innerHTML=""}))})()})();