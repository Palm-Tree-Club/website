"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[316],{655:function(t,e,i){i.d(e,{_T:function(){return a}});function a(t,e){var i={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&0>e.indexOf(a)&&(i[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)0>e.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(i[a[r]]=t[a[r]]);return i}},1259:function(t,e,i){i.d(e,{v0:function(){return a.n},e5:function(){return a.a6}});var a=i(9516);i(4444),i(2238),i(3333),i(8463)},6728:function(t,e,i){i.d(e,{xS:function(){return tm},go:function(){return to},sN:function(){return tr}});var a=i(2238),r=i(4444),s=i(8463),n=i(3333),o=i(6531);let c="@firebase/installations",l="0.6.0",u=`w:${l}`,g="FIS_v2",f=new r.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function h(t){return t instanceof r.ZR&&t.code.includes("request-failed")}/**
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
 */function p({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function d(t){return{token:t.token,requestStatus:2,expiresIn:Number(t.expiresIn.replace("s","000")),creationTime:Date.now()}}async function m(t,e){let i=await e.json(),a=i.error;return f.create("request-failed",{requestName:t,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function w({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function C(t){let e=await t();return e.status>=500&&e.status<600?t():e}/**
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
 */async function _({appConfig:t,heartbeatServiceProvider:e},{fid:i}){let a=p(t),r=w(t),s=e.getImmediate({optional:!0});if(s){let n=await s.getHeartbeatsHeader();n&&r.append("x-firebase-client",n)}let o={fid:i,authVersion:g,appId:t.appId,sdkVersion:u},c={method:"POST",headers:r,body:JSON.stringify(o)},l=await C(()=>fetch(a,c));if(l.ok){let f=await l.json(),h={fid:f.fid||i,registrationStatus:2,refreshToken:f.refreshToken,authToken:d(f.authToken)};return h}throw await m("Create Installation",l)}/**
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
 */function v(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */let y=/^[cdef][\w-]{21}$/;/**
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
 */function S(t){return`${t.appName}!${t.appId}`}/**
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
 */let b=new Map;function T(t,e){let i=S(t);I(i,e),function(t,e){let i=(!M&&"BroadcastChannel"in self&&((M=new BroadcastChannel("[Firebase] FID Change")).onmessage=t=>{I(t.data.key,t.data.fid)}),M);i&&i.postMessage({key:t,fid:e}),0===b.size&&M&&(M.close(),M=null)}(i,e)}function I(t,e){let i=b.get(t);if(i)for(let a of i)a(e)}let M=null,E="firebase-installations-store",F=null;function k(){return F||(F=(0,o.X3)("firebase-installations-database",1,{upgrade:(t,e)=>{0===e&&t.createObjectStore(E)}})),F}async function P(t,e){let i=S(t),a=await k(),r=a.transaction(E,"readwrite"),s=r.objectStore(E),n=await s.get(i);return await s.put(e,i),await r.done,n&&n.fid===e.fid||T(t,e.fid),e}async function j(t){let e=S(t),i=await k(),a=i.transaction(E,"readwrite");await a.objectStore(E).delete(e),await a.done}async function O(t,e){let i=S(t),a=await k(),r=a.transaction(E,"readwrite"),s=r.objectStore(E),n=await s.get(i),o=e(n);return void 0===o?await s.delete(i):await s.put(o,i),await r.done,o&&(!n||n.fid!==o.fid)&&T(t,o.fid),o}/**
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
 */async function A(t){let e;let i=await O(t.appConfig,i=>{let a=function(t){let e=t||{fid:function(){try{let t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;let i=function(t){let e=/**
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
 */function(t){let e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}(t);return e.substr(0,22)}(t);return y.test(i)?i:""}catch(a){return""}}(),registrationStatus:0};return N(e)}(i),r=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){let i=Promise.reject(f.create("app-offline"));return{installationEntry:e,registrationPromise:i}}let a={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=L(t,a);return{installationEntry:a,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:D(t)}:{installationEntry:e}}(t,a);return e=r.registrationPromise,r.installationEntry});return""===i.fid?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}async function L(t,e){try{let i=await _(t,e);return P(t.appConfig,i)}catch(a){throw h(a)&&409===a.customData.serverCode?await j(t.appConfig):await P(t.appConfig,{fid:e.fid,registrationStatus:0}),a}}async function D(t){let e=await $(t.appConfig);for(;1===e.registrationStatus;)await v(100),e=await $(t.appConfig);if(0===e.registrationStatus){let{installationEntry:i,registrationPromise:a}=await A(t);return a||i}return e}function $(t){return O(t,t=>{if(!t)throw f.create("installation-not-found");return N(t)})}function N(t){return 1===t.registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t}/**
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
 */async function q({appConfig:t,heartbeatServiceProvider:e},i){let a=function(t,{fid:e}){return`${p(t)}/${e}/authTokens:generate`}(t,i),r=function(t,{refreshToken:e}){let i=w(t);return i.append("Authorization",`${g} ${e}`),i}(t,i),s=e.getImmediate({optional:!0});if(s){let n=await s.getHeartbeatsHeader();n&&r.append("x-firebase-client",n)}let o={installation:{sdkVersion:u,appId:t.appId}},c={method:"POST",headers:r,body:JSON.stringify(o)},l=await C(()=>fetch(a,c));if(l.ok){let f=await l.json(),h=d(f);return h}throw await m("Generate Auth Token",l)}/**
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
 */async function x(t,e=!1){let i;let a=await O(t.appConfig,a=>{var r;if(!V(a))throw f.create("not-registered");let s=a.authToken;if(!e&&2===(r=s).requestStatus&&!function(t){let e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(r))return a;if(1===s.requestStatus)return i=R(t,e),a;{if(!navigator.onLine)throw f.create("app-offline");let n=function(t){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(a);return i=z(t,n),n}}),r=i?await i:a.authToken;return r}async function R(t,e){let i=await K(t.appConfig);for(;1===i.authToken.requestStatus;)await v(100),i=await K(t.appConfig);let a=i.authToken;return 0===a.requestStatus?x(t,e):a}function K(t){return O(t,t=>{if(!V(t))throw f.create("not-registered");let e=t.authToken;return 1===e.requestStatus&&e.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function z(t,e){try{let i=await q(t,e),a=Object.assign(Object.assign({},e),{authToken:i});return await P(t.appConfig,a),i}catch(s){if(h(s)&&(401===s.customData.serverCode||404===s.customData.serverCode))await j(t.appConfig);else{let r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await P(t.appConfig,r)}throw s}}function V(t){return void 0!==t&&2===t.registrationStatus}/**
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
 */async function U(t){let{installationEntry:e,registrationPromise:i}=await A(t);return i?i.catch(console.error):x(t).catch(console.error),e.fid}/**
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
 */async function B(t,e=!1){await H(t);let i=await x(t,e);return i.token}async function H(t){let{registrationPromise:e}=await A(t);e&&await e}function G(t){return f.create("missing-app-config-values",{valueName:t})}/**
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
 */let J="installations",Z=t=>{let e=t.getProvider("app").getImmediate(),i=/**
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
 */function(t){if(!t||!t.options)throw G("App Configuration");if(!t.name)throw G("App Name");for(let e of["projectId","apiKey","appId"])if(!t.options[e])throw G(e);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),r=(0,a._getProvider)(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Y=t=>{let e=t.getProvider("app").getImmediate(),i=(0,a._getProvider)(e,J).getImmediate();return{getId:()=>U(i),getToken:t=>B(i,t)}};(0,a._registerComponent)(new s.wA(J,Z,"PUBLIC")),(0,a._registerComponent)(new s.wA("installations-internal",Y,"PRIVATE")),(0,a.registerVersion)(c,l),(0,a.registerVersion)(c,l,"esm2017");let X="@firebase/remote-config",Q="0.4.0";/**
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
 */class W{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
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
 */let tt="remote-config",te=new r.LL("remoteconfig","Remote Config",{"registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser"}),ti=["1","true","t","yes","y","on"];class ta{constructor(t,e=""){this._source=t,this._value=e}asString(){return this._value}asBoolean(){return"static"!==this._source&&ti.indexOf(this._value.toLowerCase())>=0}asNumber(){if("static"===this._source)return 0;let t=Number(this._value);return isNaN(t)&&(t=0),t}getSource(){return this._source}}/**
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
 */function tr(t=(0,a.getApp)()){t=(0,r.m9)(t);let e=(0,a._getProvider)(t,tt);return e.getImmediate()}async function ts(t){let e=(0,r.m9)(t),[i,a]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);return!!i&&!!i.config&&!!i.eTag&&i.eTag!==a&&(await Promise.all([e._storageCache.setActiveConfig(i.config),e._storage.setActiveConfigEtag(i.eTag)]),!0)}async function tn(t){let e=(0,r.m9)(t),i=new W;setTimeout(async()=>{i.abort()},e.settings.fetchTimeoutMillis);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:i}),await e._storageCache.setLastFetchStatus("success")}catch(s){let a=s instanceof r.ZR&&-1!==s.code.indexOf("fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(a),s}}function to(t){let e=(0,r.m9)(t);return(function(t={},e={}){return Object.keys(Object.assign(Object.assign({},t),e))})(e._storageCache.getActiveConfig(),e.defaultConfig).reduce((e,i)=>(e[i]=function(t,e){let i=(0,r.m9)(t);i._isInitializationComplete||i._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);let a=i._storageCache.getActiveConfig();return a&&void 0!==a[e]?new ta("remote",a[e]):i.defaultConfig&&void 0!==i.defaultConfig[e]?new ta("default",String(i.defaultConfig[e])):(i._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new ta("static"))}(t,i),e),{})}/**
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
 */class tc{constructor(t,e,i,a){this.client=t,this.storage=e,this.storageCache=i,this.logger=a}isCachedDataFresh(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;let i=Date.now()-e,a=i<=t;return this.logger.debug(`Config fetch cache check. Cache age millis: ${i}. Cache max age millis (minimumFetchIntervalMillis setting): ${t}. Is cache hit: ${a}.`),a}async fetch(t){let[e,i]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(i&&this.isCachedDataFresh(t.cacheMaxAgeMillis,e))return i;t.eTag=i&&i.eTag;let a=await this.client.fetch(t),r=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return 200===a.status&&r.push(this.storage.setLastSuccessfulFetchResponse(a)),await Promise.all(r),a}}/**
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
 */class tl{constructor(t,e,i,a,r,s){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=i,this.projectId=a,this.apiKey=r,this.appId=s}async fetch(t){let e,i,a;let[r,s]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),n=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",o=`${n}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,c={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},l={sdk_version:this.sdkVersion,app_instance_id:r,app_instance_id_token:s,app_id:this.appId,language_code:/**
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
 */function(t=navigator){return t.languages&&t.languages[0]||t.language}()},u={method:"POST",headers:c,body:JSON.stringify(l)},g=fetch(o,u),f=new Promise((e,i)=>{t.signal.addEventListener(()=>{let t=Error("The operation was aborted.");t.name="AbortError",i(t)})});try{await Promise.race([g,f]),e=await g}catch(p){let h="fetch-client-network";throw(null==p?void 0:p.name)==="AbortError"&&(h="fetch-timeout"),te.create(h,{originalErrorMessage:null==p?void 0:p.message})}let d=e.status,m=e.headers.get("ETag")||void 0;if(200===e.status){let w;try{w=await e.json()}catch(C){throw te.create("fetch-client-parse",{originalErrorMessage:null==C?void 0:C.message})}i=w.entries,a=w.state}if("INSTANCE_STATE_UNSPECIFIED"===a?d=500:"NO_CHANGE"===a?d=304:("NO_TEMPLATE"===a||"EMPTY_CONFIG"===a)&&(i={}),304!==d&&200!==d)throw te.create("fetch-status",{httpStatus:d});return{status:d,eTag:m,config:i}}}class tu{constructor(t,e){this.client=t,this.storage=e}async fetch(t){let e=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(t,e)}async attemptFetch(t,{throttleEndTimeMillis:e,backoffCount:i}){var a;await (a=t.signal,new Promise((t,i)=>{let r=Math.max(e-Date.now(),0),s=setTimeout(t,r);a.addEventListener(()=>{clearTimeout(s),i(te.create("fetch-throttle",{throttleEndTimeMillis:e}))})}));try{let s=await this.client.fetch(t);return await this.storage.deleteThrottleMetadata(),s}catch(o){if(!function(t){if(!(t instanceof r.ZR)||!t.customData)return!1;let e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(o))throw o;let n={throttleEndTimeMillis:Date.now()+(0,r.$s)(i),backoffCount:i+1};return await this.storage.setThrottleMetadata(n),this.attemptFetch(t,n)}}}class tg{constructor(t,e,i,a,r){this.app=t,this._client=e,this._storageCache=i,this._storage=a,this._logger=r,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function tf(t,e){let i=t.target.error||void 0;return te.create(e,{originalErrorMessage:i&&(null==i?void 0:i.message)})}let th="app_namespace_store";class tp{constructor(t,e,i,a=new Promise((t,e)=>{try{let i=indexedDB.open("firebase_remote_config",1);i.onerror=t=>{e(tf(t,"storage-open"))},i.onsuccess=e=>{t(e.target.result)},i.onupgradeneeded=t=>{let e=t.target.result;0===t.oldVersion&&e.createObjectStore(th,{keyPath:"compositeKey"})}}catch(a){e(te.create("storage-open",{originalErrorMessage:null==a?void 0:a.message}))}})){this.appId=t,this.appName=e,this.namespace=i,this.openDbPromise=a}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(t){return this.set("last_fetch_status",t)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(t){return this.set("last_successful_fetch_timestamp_millis",t)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(t){return this.set("last_successful_fetch_response",t)}getActiveConfig(){return this.get("active_config")}setActiveConfig(t){return this.set("active_config",t)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(t){return this.set("active_config_etag",t)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(t){return this.set("throttle_metadata",t)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(t){let e=await this.openDbPromise;return new Promise((i,a)=>{let r=e.transaction([th],"readonly"),s=r.objectStore(th),n=this.createCompositeKey(t);try{let o=s.get(n);o.onerror=t=>{a(tf(t,"storage-get"))},o.onsuccess=t=>{let e=t.target.result;e?i(e.value):i(void 0)}}catch(c){a(te.create("storage-get",{originalErrorMessage:null==c?void 0:c.message}))}})}async set(t,e){let i=await this.openDbPromise;return new Promise((a,r)=>{let s=i.transaction([th],"readwrite"),n=s.objectStore(th),o=this.createCompositeKey(t);try{let c=n.put({compositeKey:o,value:e});c.onerror=t=>{r(tf(t,"storage-set"))},c.onsuccess=()=>{a()}}catch(l){r(te.create("storage-set",{originalErrorMessage:null==l?void 0:l.message}))}})}async delete(t){let e=await this.openDbPromise;return new Promise((i,a)=>{let r=e.transaction([th],"readwrite"),s=r.objectStore(th),n=this.createCompositeKey(t);try{let o=s.delete(n);o.onerror=t=>{a(tf(t,"storage-delete"))},o.onsuccess=()=>{i()}}catch(c){a(te.create("storage-delete",{originalErrorMessage:null==c?void 0:c.message}))}})}createCompositeKey(t){return[this.appId,this.appName,this.namespace,t].join()}}/**
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
 */class td{constructor(t){this.storage=t}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){let t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),i=this.storage.getActiveConfig(),a=await t;a&&(this.lastFetchStatus=a);let r=await e;r&&(this.lastSuccessfulFetchTimestampMillis=r);let s=await i;s&&(this.activeConfig=s)}setLastFetchStatus(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)}setLastSuccessfulFetchTimestampMillis(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)}setActiveConfig(t){return this.activeConfig=t,this.storage.setActiveConfig(t)}}/**
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
 */async function tm(t){return await tn(t=(0,r.m9)(t)),ts(t)}(0,a._registerComponent)(new s.wA(tt,function(t,{instanceIdentifier:e}){let i=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();if("undefined"==typeof window)throw te.create("registration-window");if(!(0,r.hl)())throw te.create("indexed-db-unavailable");let{projectId:o,apiKey:c,appId:l}=i.options;if(!o)throw te.create("registration-project-id");if(!c)throw te.create("registration-api-key");if(!l)throw te.create("registration-app-id");e=e||"firebase";let u=new tp(l,i.name,e),g=new td(u),f=new n.Yd(X);f.logLevel=n.in.ERROR;let h=new tl(s,a.SDK_VERSION,e,o,c,l),p=new tu(h,u),d=new tc(p,u,g,f),m=new tg(i,d,g,u,f);return function(t){let e=(0,r.m9)(t);e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}(m),m},"PUBLIC").setMultipleInstances(!0)),(0,a.registerVersion)(X,Q),(0,a.registerVersion)(X,Q,"esm2017")}}]);