(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{1075:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return s(7646)}])},7646:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return L}});var i=s(5893),a=s(7294),r=s(1259),n=s(3190),o=s(1163),l=s(7516),c=s(8193),h=s(2238),u=s(4444),g=s(8463),m=s(3333);s(7578);let d="@firebase/remote-config",f="0.4.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let w="remote-config",_=new u.LL("remoteconfig","Remote Config",{"registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser"}),x=["1","true","t","yes","y","on"];class v{constructor(e,t=""){this._source=e,this._value=t}asString(){return this._value}asBoolean(){return"static"!==this._source&&x.indexOf(this._value.toLowerCase())>=0}asNumber(){if("static"===this._source)return 0;let e=Number(this._value);return isNaN(e)&&(e=0),e}getSource(){return this._source}}async function b(e){let t=(0,u.m9)(e),[s,i]=await Promise.all([t._storage.getLastSuccessfulFetchResponse(),t._storage.getActiveConfigEtag()]);return!!s&&!!s.config&&!!s.eTag&&s.eTag!==i&&(await Promise.all([t._storageCache.setActiveConfig(s.config),t._storage.setActiveConfigEtag(s.eTag)]),!0)}async function C(e){let t=(0,u.m9)(e),s=new p;setTimeout(async()=>{s.abort()},t.settings.fetchTimeoutMillis);try{await t._client.fetch({cacheMaxAgeMillis:t.settings.minimumFetchIntervalMillis,signal:s}),await t._storageCache.setLastFetchStatus("success")}catch(s){let e=s instanceof u.ZR&&-1!==s.code.indexOf("fetch-throttle")?"throttle":"failure";throw await t._storageCache.setLastFetchStatus(e),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,t,s,i){this.client=e,this.storage=t,this.storageCache=s,this.logger=i}isCachedDataFresh(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;let s=Date.now()-t,i=s<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${s}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){let[t,s]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(s&&this.isCachedDataFresh(e.cacheMaxAgeMillis,t))return s;e.eTag=s&&s.eTag;let i=await this.client.fetch(e),a=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return 200===i.status&&a.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(a),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t,s,i,a,r){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=s,this.projectId=i,this.apiKey=a,this.appId=r}async fetch(e){let t,s,i;let[a,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),n=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",o=`${n}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,l={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:a,app_instance_id_token:r,app_id:this.appId,language_code:/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e=navigator){return e.languages&&e.languages[0]||e.language}()},h={method:"POST",headers:l,body:JSON.stringify(c)},u=fetch(o,h),g=new Promise((t,s)=>{e.signal.addEventListener(()=>{let e=Error("The operation was aborted.");e.name="AbortError",s(e)})});try{await Promise.race([u,g]),t=await u}catch(t){let e="fetch-client-network";throw(null==t?void 0:t.name)==="AbortError"&&(e="fetch-timeout"),_.create(e,{originalErrorMessage:null==t?void 0:t.message})}let m=t.status,d=t.headers.get("ETag")||void 0;if(200===t.status){let e;try{e=await t.json()}catch(e){throw _.create("fetch-client-parse",{originalErrorMessage:null==e?void 0:e.message})}s=e.entries,i=e.state}if("INSTANCE_STATE_UNSPECIFIED"===i?m=500:"NO_CHANGE"===i?m=304:("NO_TEMPLATE"===i||"EMPTY_CONFIG"===i)&&(s={}),304!==m&&200!==m)throw _.create("fetch-status",{httpStatus:m});return{status:m,eTag:d,config:s}}}class T{constructor(e,t){this.client=e,this.storage=t}async fetch(e){let t=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,t)}async attemptFetch(e,{throttleEndTimeMillis:t,backoffCount:s}){var i;await (i=e.signal,new Promise((e,s)=>{let a=Math.max(t-Date.now(),0),r=setTimeout(e,a);i.addEventListener(()=>{clearTimeout(r),s(_.create("fetch-throttle",{throttleEndTimeMillis:t}))})}));try{let t=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),t}catch(i){if(!function(e){if(!(e instanceof u.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(i))throw i;let t={throttleEndTimeMillis:Date.now()+(0,u.$s)(s),backoffCount:s+1};return await this.storage.setThrottleMetadata(t),this.attemptFetch(e,t)}}}class E{constructor(e,t,s,i,a){this.app=e,this._client=t,this._storageCache=s,this._storage=i,this._logger=a,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){let s=e.target.error||void 0;return _.create(t,{originalErrorMessage:s&&(null==s?void 0:s.message)})}let j="app_namespace_store";class k{constructor(e,t,s,i=new Promise((e,t)=>{try{let s=indexedDB.open("firebase_remote_config",1);s.onerror=e=>{t(N(e,"storage-open"))},s.onsuccess=t=>{e(t.target.result)},s.onupgradeneeded=e=>{let t=e.target.result;0===e.oldVersion&&t.createObjectStore(j,{keyPath:"compositeKey"})}}catch(e){t(_.create("storage-open",{originalErrorMessage:null==e?void 0:e.message}))}})){this.appId=e,this.appName=t,this.namespace=s,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){let t=await this.openDbPromise;return new Promise((s,i)=>{let a=t.transaction([j],"readonly"),r=a.objectStore(j),n=this.createCompositeKey(e);try{let e=r.get(n);e.onerror=e=>{i(N(e,"storage-get"))},e.onsuccess=e=>{let t=e.target.result;t?s(t.value):s(void 0)}}catch(e){i(_.create("storage-get",{originalErrorMessage:null==e?void 0:e.message}))}})}async set(e,t){let s=await this.openDbPromise;return new Promise((i,a)=>{let r=s.transaction([j],"readwrite"),n=r.objectStore(j),o=this.createCompositeKey(e);try{let e=n.put({compositeKey:o,value:t});e.onerror=e=>{a(N(e,"storage-set"))},e.onsuccess=()=>{i()}}catch(e){a(_.create("storage-set",{originalErrorMessage:null==e?void 0:e.message}))}})}async delete(e){let t=await this.openDbPromise;return new Promise((s,i)=>{let a=t.transaction([j],"readwrite"),r=a.objectStore(j),n=this.createCompositeKey(e);try{let e=r.delete(n);e.onerror=e=>{i(N(e,"storage-delete"))},e.onsuccess=()=>{s()}}catch(e){i(_.create("storage-delete",{originalErrorMessage:null==e?void 0:e.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){let e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),s=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);let a=await t;a&&(this.lastSuccessfulFetchTimestampMillis=a);let r=await s;r&&(this.activeConfig=r)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F(e){return await C(e=(0,u.m9)(e)),b(e)}(0,h._registerComponent)(new g.wA(w,function(e,{instanceIdentifier:t}){let s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if("undefined"==typeof window)throw _.create("registration-window");if(!(0,u.hl)())throw _.create("indexed-db-unavailable");let{projectId:a,apiKey:r,appId:n}=s.options;if(!a)throw _.create("registration-project-id");if(!r)throw _.create("registration-api-key");if(!n)throw _.create("registration-app-id");t=t||"firebase";let o=new k(n,s.name,t),l=new M(o),c=new m.Yd(d);c.logLevel=m.in.ERROR;let g=new S(i,h.SDK_VERSION,t,a,r,n),f=new T(g,o),p=new y(f,o,l,c),w=new E(s,p,l,o,c);return function(e){let t=(0,u.m9)(e);t._initializePromise||(t._initializePromise=t._storageCache.loadFromStorage().then(()=>{t._isInitializationComplete=!0})),t._initializePromise}(w),w},"PUBLIC").setMultipleInstances(!0)),(0,h.registerVersion)(d,f),(0,h.registerVersion)(d,f,"esm2017");var I=s(2920);let P=(0,r.v0)();function L(){var e;let[t,s]=(0,a.useState)(null),[g,m]=(0,a.useState)(null),[d,f]=(0,a.useState)(null),p=(0,o.useRouter)(),_=()=>{(0,I.Am)("Password Link Sent!",{hideProgressBar:!1,autoClose:2e3,type:"success"})},x=()=>{(0,I.Am)("Kindly check your spam box also!",{hideProgressBar:!1,autoClose:2e3,type:"success"})};return(0,a.useEffect)(()=>{P.currentUser||p.push({pathname:"/login"},"/login")},[p]),(0,a.useEffect)(()=>{let e=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e=(0,h.getApp)()){e=(0,u.m9)(e);let t=(0,h._getProvider)(e,w);return t.getImmediate()}(n.Z);e.settings.minimumFetchIntervalMillis=1e4,F(e).then(()=>{let t=function(e){let t=(0,u.m9)(e);return(function(e={},t={}){return Object.keys(Object.assign(Object.assign({},e),t))})(t._storageCache.getActiveConfig(),t.defaultConfig).reduce((t,s)=>(t[s]=function(e,t){let s=(0,u.m9)(e);s._isInitializationComplete||s._logger.debug(`A value was requested for key "${t}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);let i=s._storageCache.getActiveConfig();return i&&void 0!==i[t]?new v("remote",i[t]):s.defaultConfig&&void 0!==s.defaultConfig[t]?new v("default",String(s.defaultConfig[t])):(s._logger.debug(`Returning static value for key "${t}". Define a default or remote value if this is unintentional.`),new v("static"))}(e,s),t),{})}(e,"dashboard"),i=JSON.parse(t.dashboard._value);s(i.task),m(i.announcement),f(i.events)})},[]),(0,i.jsxs)("div",{className:"h-screen w-screen ",children:[(0,i.jsxs)("nav",{className:"fixed z-30 flex p-10 justify-center max-sm:justify-center items-center w-full h-20 bg-zinc-900 font-sans font-semibold text-lg max-sm:text-sm",children:[(0,i.jsxs)("a",{onClick:()=>{P.signOut(),p.back()},className:"absolute left-2 text-white max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300",children:[(0,i.jsx)(l.TPb,{className:"inline-block"})," Sign Out"]}),(0,i.jsxs)("a",{className:"max-sm:hidden text-cyan-50 text-2xl",children:[(0,i.jsx)("img",{className:"inline-block cursor-pointer",onClick:()=>{p.reload()},src:"/Assets/Images/palm.png",height:50,width:50,alt:"Palm Tree Club"})," ","|"," ",(0,i.jsx)("img",{onClick:()=>{window.open("https://silveroakuni.ac.in","_blank")},src:"/Assets/Images/sou.png",className:"inline-block cursor-pointer",height:100,width:100,alt:"silver oak university"})]}),(0,i.jsxs)("span",{className:"inline-flex rounded absolute right-2 text-white max-sm:mr-3 cursor-pointertransition duration-300",children:[null===(e=P.currentUser)||void 0===e?void 0:e.email," | ",(0,i.jsxs)("a",{onClick:()=>{(0,r.LS)(P,P.currentUser.email).then(()=>{_(),x()})},className:"inline-flex text-white max-sm:mr-3 cursor-pointer hover:text-sky-700 transition duration-300",children:[" ","Reset Password"]})]})]}),(0,i.jsx)(I.Ix,{className:" z-40"}),null!=t&&null!=g&&null!=d?(0,i.jsx)("div",{className:"h-screen w-screen flex flex-col justify-start items-center bg-grayish",children:(0,i.jsxs)("div",{className:"mt-40 grid grid-cols-3 gap-10",children:[(0,i.jsx)("div",{className:"rounded-lg w-auto border-2 p-5",children:(0,i.jsxs)("div",{className:"flex flex-col items-start",children:[(0,i.jsx)("h1",{className:"text-4xl cursor-pointer hover:text-sky-700 transition duration-300 text-white uppercase font-semibold",children:"Task"}),(0,i.jsx)("ol",{className:"mt-10",children:null!=t?t.map((e,t)=>(0,i.jsxs)("li",{className:"text-white",children:[" ",(0,i.jsx)(c.rYR,{className:"inline-block"})," ",e.message]},t)):null})]})}),(0,i.jsx)("div",{style:{width:"30rem"},className:"rounded-lg w-auto border-2 p-5",children:(0,i.jsxs)("div",{className:"flex flex-col items-start",children:[(0,i.jsx)("h1",{className:"text-4xl cursor-pointer hover:text-sky-700 transition duration-300 text-white uppercase font-semibold",children:"Announcements"}),(0,i.jsx)("ol",{className:"mt-10",children:null!=g?g.map((e,t)=>(0,i.jsxs)("li",{className:"text-white",children:[" ",(0,i.jsx)(c.rYR,{className:"inline-block"})," ",e.message]},t)):null})]})}),(0,i.jsx)("div",{className:"w-auto rounded-lg border-2 p-5",children:(0,i.jsxs)("div",{className:" flex flex-col items-start ",children:[(0,i.jsx)("h1",{className:"text-4xl cursor-pointer hover:text-sky-700 transition duration-300 text-white uppercase font-semibold",children:"Upcoming Events"}),(0,i.jsx)("ol",{className:"mt-10",children:null!=d?d.map((e,t)=>(0,i.jsxs)("li",{className:"text-white",children:[" ",(0,i.jsx)(c.rYR,{className:"inline-block"})," ",e.message]},t)):null})]})})]})}):(0,i.jsxs)("div",{className:"h-screen w-screen flex flex-col justify-evenly items-center",children:[(0,i.jsx)("img",{src:"/Assets/Images/palm.png",height:200,width:200,alt:"Loading"}),(0,i.jsx)("h1",{className:"text-4xl text-black",children:"Loading..."})]})]})}},3190:function(e,t,s){"use strict";var i=s(770);t.Z=i.Z.apps.length?i.Z.app():i.Z.initializeApp({apiKey:"AIzaSyAk4-yfa5ll0v0PncfiV1ETbiXOKB7I3II",authDomain:"palm-tree-club.firebaseapp.com",projectId:"palm-tree-club",storageBucket:"palm-tree-club.appspot.com",messagingSenderId:"1025156690287",appId:"1:1025156690287:web:76a7aa741d546a0afc789a",measurementId:"G-4QMLY5KNST"})}},function(e){e.O(0,[570,874,617,217,578,313,774,888,179],function(){return e(e.s=1075)}),_N_E=e.O()}]);