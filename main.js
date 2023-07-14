(()=>{"use strict";var e={641:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(81),a=t.n(o),i=t(645),s=t.n(i)()(a());s.push([e.id,'/*Using Css variable*/\n:root {\n  --bg-color: white;\n  --font-color: black;\n  --secondary: #00b0ff;\n}\n\n.dark {\n  --bg-color: black;\n  --font-color: white;\n  --secondary: #536dfe;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  font-family: "DM Sans", sans-serif;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  align-items: center;\n  margin-right: 9%;\n  margin-left: 8%;\n}\n\n.logo {\n  display: flex;\n  justify-content: center;\n  width: 100px;\n}\n\n.options {\n  display: flex;\n  width: max(500px, 50%);\n  justify-content: space-around;\n  height: 25px;\n  font-size: max(15px, 1vw);\n\n  color: var(--font-color);\n}\n\n.options > div:hover {\n  cursor: pointer;\n  color: var(--secondary);\n}\n\n.home {\n  margin-top: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 10%;\n}\n\n.slogan {\n  font-size: max(5vw, 50px);\n  display: flex;\n  margin-bottom: 20px;\n}\n\n.slogan-para {\n  font-size: max(1vw, 20px);\n  width: max(80%, 300px);\n}\n\ni {\n  font-size: 25px;\n  width: auto;\n  cursor: pointer;\n  transform: translate(-50%, -50%);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n}\n\n/* study-material page */\n.study,\n.roadMaps {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.tagline {\n  margin-top: 5vh;\n  font-size: max(50px, 4vw);\n  font-weight: 950;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.search-bar {\n  margin-top: 5vh;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row;\n  border: 2px solid var(--font-color);\n  width: 40vw;\n  padding: 8px;\n  padding-left: 15px;\n  gap: 10px;\n  border-radius: 5px;\n}\n#course-select {\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  border: none;\n  outline: none;\n  color: (--font-color);\n  font-size: 25px;\n  border-left: 1px solid grey;\n  padding-left: 10px;\n  font-weight: 100;\n  width: 80%;\n}\n\n.courses,\n.roads {\n  width: 90%;\n\n  margin-top: 50px;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n}\n\n.courseBox {\n  height: 200px;\n  width: 300px;\n  border: 2px solid var(--font-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color);\n}\n\n.glink {\n  display: none;\n  border-bottom: none;\n}\na {\n  text-decoration: none;\n  color: var(--font-color);\n  border-bottom: none;\n}\na:visited {\n  text-decoration: none;\n  color: var(--font-color);\n}\na:hover {\n  text-decoration: none;\n  color: var(--font-color);\n}\na:active {\n  text-decoration: none;\n  color: var(--font-color);\n}\n.generate {\n  padding-bottom: 20px;\n}\n\n.linkSection {\n  margin-top: 5vh;\n  display: flex;\n  width: 80%;\n  justify-content: space-around;\n  gap: 10px;\n}\n.erpManagement {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.linkSection > div {\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--font-color);\n  font-size: max(1.2vw, 15px);\n  height: max(35px, 5vh);\n  width: max(350px, 15vw);\n  border-radius: 5px;\n  color: var(--font-color);\n  background-color: var(--bg-color);\n  flex-wrap: wrap;\n  cursor: pointer;\n}\n.linkSection > div:hover {\n  color: var(--bg-color);\n  background-color: var(--font-color);\n  transition: 100ms;\n}\n.faqs {\n  display: flex;\n  flex-direction: column;\n  margin-top: 7vh;\n  width: 80%;\n  gap: 20px;\n}\n.faqs > div {\n  width: 100%;\n  border: 1px solid var(--font-color);\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 15px;\n  border-radius: 2px;\n}\n.sol {\n  display: none;\n}\n.roadBox {\n  height: 200px;\n  width: 300px;\n  border: 2px solid var(--font-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color);\n}\n.glink-r {\n  display: none;\n  border: 1px solid var(--font-color);\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  width: 33%;\n  padding: 10px;\n  justify-content: center;\n  border-radius: 5px;\n}\n.glink-r:hover {\n  background-color: var(--font-color);\n  color: var(--bg-color);\n}\na.ar {\n  color: inherit;\n}\n/* footer */\n.footer {\n  background-color: rgb(23, 23, 24);\n  padding: 15px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n  margin-top: auto;\n  gap: 10px;\n}\n\n.reasources {\n  display: flex;\n  justify-content: center;\n  color: white;\n  gap: 10px;\n  width: 50%;\n  flex-wrap: wrap;\n}\n.reasources > div:hover {\n  color: var(--secondary);\n  cursor: pointer;\n}\n.contact > a {\n  color: white;\n  margin: 10px;\n}\n.contact > a:hover {\n  color: var(--secondary);\n}\n\n.foot-logo {\n  color: white;\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.foot-logo:hover {\n  color: var(--secondary);\n}\n.generate {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n',""]);const r=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},s=[],r=0;r<e.length;r++){var l=e[r],c=o.base?l[0]+o.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,o);o.byIndex=r,n.splice(r,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=o(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var r=t(i[s]);n[r].references--}for(var l=o(e,a),c=0;c<i.length;c++){var d=t(i[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),s=t.n(i),r=t(565),l=t.n(r),c=t(216),d=t.n(c),p=t(589),u=t.n(p),m=t(641),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=t.p+"aba5194fbdab3a8e48ec.png",y=t.p+"10a69e0afa343ee73062.png",v=t.p+"a7e5aee6776a70d96efc.svg",h=t.p+"aee3578e9dc63b42aa04.svg";document.getElementById("lg").src=g;const b=document.getElementById("toggleDark"),x=document.querySelector("body");document.getElementById("options"),b.addEventListener("click",(function(){this.classList.toggle("bi-moon"),document.body.classList.toggle("dark");const e=document.getElementById("lg"),n=document.getElementById("image");x.classList.contains("dark")?(e.src=y,n&&(n.src=v)):(e.src=g,n&&(n.src=h))}));let w=document.querySelector(".generate");const k=document.getElementById("home"),E=document.getElementById("study"),B=document.getElementById("road"),L=document.getElementById("erp");let I=()=>{const e=x.classList.contains("dark");k.style.borderBottom="2px solid var(--font-color)",E.style.borderBottom="none",B.style.borderBottom="none",L.style.borderBottom="none",w.innerHTML=`<div class="home">\n    <div class="content">\n        <div class="text">\n            <div class="slogan">\n                BY SNUITES <br> FOR SNUITES\n            </div>\n            <div class="slogan-para">\n                Welcome to SnuAcademia, the ultimate student designed website that helps in simplifying study life\n                at SNU\n            </div>\n        </div>\n    </div>\n    <img id="image" src='${h}' style="width:50%;margin-right: 10%;">\n</div>`;const n=document.getElementById("image");e?n&&(n.src=v):n&&(n.src=h)};I(),document.getElementById("home").addEventListener("click",I),document.getElementById("homef").addEventListener("click",I);let T=()=>{k.style.borderBottom="none",E.style.borderBottom="2px solid var(--font-color)",B.style.borderBottom="none",L.style.borderBottom="none",w.innerHTML='<div class="study">\n    <div class="tagline">\n        <span>Where Textbooks</span>\n        <span>And Dreams Collide</span>\n        <span style="font-size: max(20px,1.5vw); font-weight: 200; margin-top: 2vh;">Explore, Discover, and Shape Your Academic Journey with Limitless Possibilities</span>\n    </div>\n    <div class="search-bar">\n        <span><i class="bi bi-search" style="font-size: max(20px,1.5vw);" ></i></span>\n        <input type="text" id="course-select" placeholder="Search..." data-search>\n    </div>\n    <div class="courses">\n        \n    </div>\n</div>',((e,n)=>{let t=document.querySelector(".courses"),o=document.getElementById("course-select");o.addEventListener("input",(()=>{const a=o.value.toLowerCase();t.innerHTML="";for(let o=0;o<e.length;o++){const i=e[o].toLowerCase(),s=n[o];if(i.includes(a)){let n=document.createElement("div");n.classList.add("courseBox"),t.appendChild(n),n.innerHTML=`<span id="course-${o}">${e[o]}</span>\n          <span class="glink"  id="link-${o}"><a href="${s}" target="_blank">Content</a></span>`,n.addEventListener("mouseover",(()=>{document.getElementById(`course-${o}`).style.display="none",document.getElementById(`link-${o}`).style.display="flex"})),n.addEventListener("mouseout",(()=>{document.getElementById(`course-${o}`).style.display="flex",document.getElementById(`link-${o}`).style.display="none"}))}}})),o.dispatchEvent(new Event("input"))})(["DES101","FAC202","MEC104","MKT202","OHM401","STM204"],["https://drive.google.com/drive/folders/1pfWH0J2ek7yxTMbmoCv-4YQPB5XKOLHr?usp=sharing","https://drive.google.com/drive/folders/1q7UsKWFg5odT6rX57T4LArhSY5eLa2RJ?usp=sharing","https://drive.google.com/drive/folders/1NlrHKCP52b53OQiYcdBgO7NvL9eQ81zv?usp=sharing","https://drive.google.com/drive/folders/1tzIs2ux6lR1u8eT9fTAD-5JXBkhAGqrb?usp=drive_link","https://drive.google.com/drive/folders/1_-mkdQHCqpPceiQeZw7j91r0hVcUhmhJ?usp=sharing","https://drive.google.com/drive/folders/1Z9BqJC1vCnMxFSRT8YMafB1sdlLAv8mu?usp=sharing"])};document.getElementById("study").addEventListener("click",T),document.getElementById("studyf").addEventListener("click",T);const q=()=>{k.style.borderBottom="none",E.style.borderBottom="none",B.style.borderBottom="2px solid var(--font-color)",L.style.borderBottom="none",w.innerHTML='<div class="roadMaps">\n  <div class="tagline">\n      <span>Choose</span>\n      <span>Your Academic Trail</span>\n      <span style="font-size: max(20px,1.5vw); font-weight: 200; margin-top: 2vh;">Chart Your Academic Journey: Explore Major and Minor Paths</span>\n  </div>\n  <div class="search-bar">\n      <span><i class="bi bi-search" style="font-size: max(20px,1.5vw);" ></i></span>\n      <input type="text" id="course-select" placeholder="Search..." data-search>\n  </div>\n  <div class="roads">\n      \n  </div>',M(["CSC","ECE","EEE","MECH","BMS","ECO"])},M=e=>{let n=document.querySelector(".roads"),t=document.getElementById("course-select");t.addEventListener("input",(()=>{const o=t.value.toLowerCase();n.innerHTML="";for(let t=0;t<e.length;t++)if(e[t].toLowerCase().includes(o)){let o=document.createElement("div");o.classList.add("roadBox"),n.appendChild(o),o.innerHTML=`<span id="course-${t}">${e[t]}</span>\n          <div style="display:flex; justify-content: space-around; width:80%" >\n          <span class="glink-r"  id="majorLink-${t}"><a class='ar' href="https://www.google.com/" target="_blank">Major</a></span>\n          <span class="glink-r" id="minorLink-${t}"><a class='ar'href="https://www.google.com/" target="_blank">Minor</a></span>\n          </div>`,o.addEventListener("mouseover",(()=>{document.getElementById(`course-${t}`).style.display="none",document.getElementById(`majorLink-${t}`).style.display="flex",document.getElementById(`minorLink-${t}`).style.display="flex"})),o.addEventListener("mouseout",(()=>{document.getElementById(`course-${t}`).style.display="flex",document.getElementById(`majorLink-${t}`).style.display="none",document.getElementById(`minorLink-${t}`).style.display="none"}))}})),t.dispatchEvent(new Event("input"))};document.getElementById("road").addEventListener("click",q),document.getElementById("roadf").addEventListener("click",q);const S=()=>{k.style.borderBottom="none",E.style.borderBottom="none",B.style.borderBottom="none",L.style.borderBottom="2px solid var(--font-color)",w.innerHTML='<div class="erpManagement">\n  <div class="tagline">\n      <span>Simplify</span>\n      <span>Your Erp Experience</span>\n      <span style="font-size: max(20px,1.5vw); font-weight: 200; margin-top: 2vh;">Commonly asked FAQs </span>\n  </div>\n  <div class="linkSection">\n      <div id="erpLink">Erp</div>\n      <div id="fastLink">Fastrack</div>\n      <div id="hosteLink">Hostel Management</div>\n      <div id="bbLink">Blackboard</div>\n  </div>\n  <div class="faqs">\n      <div class>\n          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">\n              <span>What is Erp?</span>\n              <i class="bi bi-caret-down-fill"></i>\n          </div>\n          <div class="sol">random image/video</div>                    \n      </div>\n  </div>\n</div>',document.querySelector(".linkSection").getElementsByTagName("div");let e=document.querySelector(".faqs");function n(n){e.innerHTML="";for(let t=0;t<n.length;t++){let o=n[t],a=document.createElement("div");a.innerHTML=`<div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">\n      <span>${o.question}</span>\n      <span><i id='drop-${t}' class="bi bi-caret-down-fill"></i></span>\n      </div>\n      <div class="sol" id='sol-${t}'>${o.answer}</div>`,e.appendChild(a),a.addEventListener("click",(()=>{const e=document.getElementById(`sol-${t}`),n=document.getElementById(`drop-${t}`);"flex"==e.style.display?(e.style.display="none",n.classList="bi-caret-down-fill"):(e.style.display="flex",n.classList="bi-caret-up-fill")}))}}e.innerHTML="";let t=[{question:"What is ERP?",answer:"ERP (Enterprise Resource Planning) is a software system that integrates various business processes and functions to streamline operations and enhance efficiency."},{question:"What are the benefits of implementing an ERP system?",answer:"Some of the benefits of implementing an ERP system include improved productivity, better data visibility, enhanced decision-making, streamlined processes, and cost savings."},{question:"How does an ERP system work?",answer:"An ERP system works by integrating data and processes across different departments or functions within an organization, allowing for centralized data storage, real-time information sharing, and efficient collaboration."},{question:"What modules are typically included in an ERP system?",answer:"Common modules in an ERP system include finance and accounting, human resources, inventory management, procurement, sales and marketing, production planning, and customer relationship management (CRM)."},{question:"How can ERP benefit educational institutions?",answer:"ERP systems can benefit educational institutions by automating administrative tasks, managing student records, facilitating communication, improving resource allocation, and supporting data-driven decision-making."}],o=[{question:"What is Fastrack?",answer:"Fastrack is a system used for applying for permission to leave the campus grounds temporarily."},{question:"How do I apply for Fastrack?",answer:"To apply for Fastrack, you need to log in to the Fastrack portal, fill out the required details, and submit your application."},{question:"What are the eligibility criteria for Fastrack?",answer:"The eligibility criteria for Fastrack may vary depending on the university's policies. Typically, it may include factors such as academic standing, disciplinary record, and attendance."},{question:"How long does it take to get a Fastrack approval?",answer:"The time taken to receive a Fastrack approval can vary. It is recommended to submit your application well in advance to allow sufficient time for the approval process."},{question:"What should I do if my Fastrack application gets rejected?",answer:"If your Fastrack application gets rejected, you can reach out to the designated authority or department to understand the reasons for rejection and seek further guidance."}],a=[{question:"What is hostel management?",answer:"Hostel management refers to the administration and supervision of residential facilities provided to students or individuals within an educational institution or other similar settings."},{question:"How do I apply for hostel accommodation?",answer:"To apply for hostel accommodation, you typically need to fill out a hostel application form provided by your educational institution. The form will require necessary details such as personal information, preferred room type, and any specific requirements."},{question:"What amenities are usually provided in hostels?",answer:"Hostels generally offer basic amenities such as beds, study desks, storage spaces, shared bathrooms, common areas, and sometimes additional facilities like recreational areas, laundry rooms, or dining halls."},{question:"What are the rules and regulations in hostels?",answer:"Hostels have specific rules and regulations that residents must adhere to, including guidelines related to curfew hours, visitor policies, noise restrictions, cleanliness, safety protocols, and other aspects to ensure a conducive living environment for all residents."},{question:"What should I do if I have issues or complaints regarding hostel facilities?",answer:"If you have any issues or complaints regarding hostel facilities, it is recommended to contact the hostel management office or the designated authority responsible for addressing such concerns. They will assist you in resolving the problem or guiding you on the necessary steps to take."}],i=[{question:"What is Blackboard?",answer:"Blackboard is an online learning management system (LMS) used by professors to provide course materials, including notes, assignments, announcements, and other resources to students in a digital format."},{question:"How do I access Blackboard?",answer:"To access Blackboard, you need to log in to your educational institution's Blackboard portal using your assigned username and password. The portal is typically accessible through a web browser or a dedicated Blackboard mobile app."},{question:"What kind of materials can I find on Blackboard?",answer:"On Blackboard, professors can upload various materials such as lecture notes, slides, reading materials, videos, quizzes, discussion boards, and other course-related resources. It serves as a centralized platform for accessing and managing course content."},{question:"How can I submit assignments on Blackboard?",answer:"Blackboard provides features for students to submit their assignments electronically. Professors usually set up specific assignment submission areas within Blackboard where students can upload their files or enter text-based responses."},{question:"Can I communicate with my professors through Blackboard?",answer:"Yes, Blackboard offers communication tools such as email, discussion boards, and messaging features that allow students to interact with their professors. You can use these tools to ask questions, seek clarification, or engage in course-related discussions."}];document.getElementById("erpLink").addEventListener("click",(function(){n(t)})),document.getElementById("fastLink").addEventListener("click",(function(){n(o)})),document.getElementById("hosteLink").addEventListener("click",(function(){n(a)})),document.getElementById("bbLink").addEventListener("click",(function(){n(i)}))};document.getElementById("erp").addEventListener("click",S),document.getElementById("erpf").addEventListener("click",S)})()})();