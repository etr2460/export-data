(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5648:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{u(r.next(e))}catch(t){i(t)}}function l(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,l)}u((r=r.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});let l=i(n(7294)),u=n(9671),s=({fileType:e,encoding:t="utf-8",filename:n="data",data:r,onClick:a,setsDataAsyncInOnClick:i,children:s})=>{let[c,d]=(0,l.useState)(),[f,h]=(0,l.useState)(!1),_=(0,l.useRef)(null);(0,l.useEffect)(()=>{r&&d((0,u.createDownloadUrl)((0,u.dataToString)(r.columnNames,r.rows,e),e,t))},[r,e,t]),(0,l.useEffect)(()=>{var e;f&&(null===(e=_.current)||void 0===e||e.click(),h(!1))},[c]);let j=e=>o(void 0,void 0,void 0,function*(){!f&&(i&&(e.preventDefault(),h(!0)),a&&(yield a(e)))}),p=n.endsWith(`.${e.toLowerCase()}`)?n:`${n}.${e.toLowerCase()}`;return l.default.createElement("a",{href:c,download:p,onClick:j,ref:_},s)};t.default=s},9037:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FileDownloadLink=void 0;var a=n(5648);Object.defineProperty(t,"FileDownloadLink",{enumerable:!0,get:function(){return r(a).default}})},1249:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FILE_TYPE_TO_MIME_TYPE=void 0,t.FILE_TYPE_TO_MIME_TYPE={CSV:"text/csv",JSON:"application/json",TSV:"text/tab-separated-values"}},7164:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(9671),t),a(n(9037),t),a(n(9944),t),a(n(1249),t)},9944:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},9671:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dataToString=t.createDownloadUrl=t.formatItemForCsvOrTsv=void 0;let r=n(1249);function a(e){return`"${String(e).replace(/"/g,'""')}"`}t.formatItemForCsvOrTsv=a,t.createDownloadUrl=function(e,t,n){let a=new Blob([e],{type:`${r.FILE_TYPE_TO_MIME_TYPE[t]};charset=${n}`});return URL.createObjectURL(a)},t.dataToString=function(e,t,n){if("JSON"===n)return JSON.stringify({columnNames:e,rows:t},null,2);if("CSV"===n||"TSV"===n){let r="CSV"===n?",":"	",i=e.map(a).join(r),o=t.map(e=>e.map(a).join(r)).join("\n");return[i,o].join("\n")}throw Error(`Unknown file type: ${n}`)}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4186)}])},4186:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(5893),a=n(7294),i=n(7164);function o(){let[e,t]=(0,a.useState)("CSV"),[n,o]=(0,a.useState)('["Name", "Age"]'),[l,u]=(0,a.useState)('[\n    ["John", 20],\n    ["Mary", 24]\n  ]'),[s,c]=(0,a.useState)("data"),[d,f]=(0,a.useState)({columnNames:[],rows:[]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"Export Data"}),(0,r.jsxs)("div",{style:{display:"flex",columnGap:16},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Download dynamic data"}),(0,r.jsx)("label",{htmlFor:"columnNames",children:"Column Names"}),(0,r.jsx)("br",{}),(0,r.jsx)("textarea",{value:n,onChange:e=>o(e.target.value)}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("label",{htmlFor:"rows",children:"Rows"}),(0,r.jsx)("br",{}),(0,r.jsx)("textarea",{value:l,rows:10,onChange:e=>u(e.target.value)}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("label",{htmlFor:"fileType",children:"File type"}),(0,r.jsx)("br",{}),(0,r.jsxs)("select",{id:"fileType",value:e,onChange:e=>t(e.target.value),children:[(0,r.jsx)("option",{value:"CSV",children:"CSV"}),(0,r.jsx)("option",{value:"JSON",children:"JSON"}),(0,r.jsx)("option",{value:"TSV",children:"TSV"})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("label",{htmlFor:"filename",children:"Filename"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{id:"filename",type:"text",value:s,onChange:e=>c(e.target.value)}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(i.FileDownloadLink,{setsDataAsyncInOnClick:!0,data:d,filename:s,fileType:e,onClick:()=>{f({columnNames:JSON.parse(n),rows:JSON.parse(l)})},children:(0,r.jsx)("button",{children:"Download dynamic data"})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Download static data"}),(0,r.jsx)(i.FileDownloadLink,{fileType:"CSV",filename:"fruits",data:{columnNames:["Fruit","Price"],rows:[["Apple",1],["Watermelon",5],["Durian",10]]},children:"Download static data"})]})]})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);