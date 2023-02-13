"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[578],{7578:function(t,e,a){var n=a(2238),i=a(8463),r=a(4444),o=a(6531);let s="@firebase/installations",u="0.6.3",l=`w:${u}`,f="FIS_v2",c=new r.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function p(t){return t instanceof r.ZR&&t.code.includes("request-failed")}/**
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
 */function d({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function g(t){return{token:t.token,requestStatus:2,expiresIn:Number(t.expiresIn.replace("s","000")),creationTime:Date.now()}}async function w(t,e){let a=await e.json(),n=a.error;return c.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function h({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function m(t){let e=await t();return e.status>=500&&e.status<600?t():e}/**
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
 */async function y({appConfig:t,heartbeatServiceProvider:e},{fid:a}){let n=d(t),i=h(t),r=e.getImmediate({optional:!0});if(r){let t=await r.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}let o={fid:a,authVersion:f,appId:t.appId,sdkVersion:l},s={method:"POST",headers:i,body:JSON.stringify(o)},u=await m(()=>fetch(n,s));if(u.ok){let t=await u.json(),e={fid:t.fid||a,registrationStatus:2,refreshToken:t.refreshToken,authToken:g(t.authToken)};return e}throw await w("Create Installation",u)}/**
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
 */function C(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */let b=/^[cdef][\w-]{21}$/;/**
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
 */let k=new Map;function I(t,e){let a=S(t);T(a,e),function(t,e){let a=(!v&&"BroadcastChannel"in self&&((v=new BroadcastChannel("[Firebase] FID Change")).onmessage=t=>{T(t.data.key,t.data.fid)}),v);a&&a.postMessage({key:t,fid:e}),0===k.size&&v&&(v.close(),v=null)}(a,e)}function T(t,e){let a=k.get(t);if(a)for(let t of a)t(e)}let v=null,j="firebase-installations-store",q=null;function P(){return q||(q=(0,o.X3)("firebase-installations-database",1,{upgrade:(t,e)=>{0===e&&t.createObjectStore(j)}})),q}async function $(t,e){let a=S(t),n=await P(),i=n.transaction(j,"readwrite"),r=i.objectStore(j),o=await r.get(a);return await r.put(e,a),await i.done,o&&o.fid===e.fid||I(t,e.fid),e}async function O(t){let e=S(t),a=await P(),n=a.transaction(j,"readwrite");await n.objectStore(j).delete(e),await n.done}async function A(t,e){let a=S(t),n=await P(),i=n.transaction(j,"readwrite"),r=i.objectStore(j),o=await r.get(a),s=e(o);return void 0===s?await r.delete(a):await r.put(s,a),await i.done,s&&(!o||o.fid!==s.fid)&&I(t,s.fid),s}/**
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
 */async function _(t){let e;let a=await A(t.appConfig,a=>{let n=function(t){let e=t||{fid:function(){try{let t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;let a=function(t){let e=/**
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
 */function(t){let e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}(t);return e.substr(0,22)}(t);return b.test(a)?a:""}catch(t){return""}}(),registrationStatus:0};return x(e)}(a),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){let t=Promise.reject(c.create("app-offline"));return{installationEntry:e,registrationPromise:t}}let a={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=D(t,a);return{installationEntry:a,registrationPromise:n}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:N(t)}:{installationEntry:e}}(t,n);return e=i.registrationPromise,i.installationEntry});return""===a.fid?{installationEntry:await e}:{installationEntry:a,registrationPromise:e}}async function D(t,e){try{let a=await y(t,e);return $(t.appConfig,a)}catch(a){throw p(a)&&409===a.customData.serverCode?await O(t.appConfig):await $(t.appConfig,{fid:e.fid,registrationStatus:0}),a}}async function N(t){let e=await V(t.appConfig);for(;1===e.registrationStatus;)await C(100),e=await V(t.appConfig);if(0===e.registrationStatus){let{installationEntry:e,registrationPromise:a}=await _(t);return a||e}return e}function V(t){return A(t,t=>{if(!t)throw c.create("installation-not-found");return x(t)})}function x(t){return 1===t.registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t}/**
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
 */async function E({appConfig:t,heartbeatServiceProvider:e},a){let n=function(t,{fid:e}){return`${d(t)}/${e}/authTokens:generate`}(t,a),i=function(t,{refreshToken:e}){let a=h(t);return a.append("Authorization",`${f} ${e}`),a}(t,a),r=e.getImmediate({optional:!0});if(r){let t=await r.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}let o={installation:{sdkVersion:l,appId:t.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},u=await m(()=>fetch(n,s));if(u.ok){let t=await u.json(),e=g(t);return e}throw await w("Generate Auth Token",u)}/**
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
 */async function F(t,e=!1){let a;let n=await A(t.appConfig,n=>{var i;if(!B(n))throw c.create("not-registered");let r=n.authToken;if(!e&&2===(i=r).requestStatus&&!function(t){let e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(i))return n;if(1===r.requestStatus)return a=H(t,e),n;{if(!navigator.onLine)throw c.create("app-offline");let e=function(t){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(n);return a=M(t,e),e}}),i=a?await a:n.authToken;return i}async function H(t,e){let a=await L(t.appConfig);for(;1===a.authToken.requestStatus;)await C(100),a=await L(t.appConfig);let n=a.authToken;return 0===n.requestStatus?F(t,e):n}function L(t){return A(t,t=>{if(!B(t))throw c.create("not-registered");let e=t.authToken;return 1===e.requestStatus&&e.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function M(t,e){try{let a=await E(t,e),n=Object.assign(Object.assign({},e),{authToken:a});return await $(t.appConfig,n),a}catch(a){if(p(a)&&(401===a.customData.serverCode||404===a.customData.serverCode))await O(t.appConfig);else{let a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $(t.appConfig,a)}throw a}}function B(t){return void 0!==t&&2===t.registrationStatus}/**
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
 */async function K(t){let{installationEntry:e,registrationPromise:a}=await _(t);return a?a.catch(console.error):F(t).catch(console.error),e.fid}/**
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
 */async function R(t,e=!1){await z(t);let a=await F(t,e);return a.token}async function z(t){let{registrationPromise:e}=await _(t);e&&await e}function J(t){return c.create("missing-app-config-values",{valueName:t})}/**
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
 */let U="installations",G=t=>{let e=t.getProvider("app").getImmediate(),a=/**
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
 */function(t){if(!t||!t.options)throw J("App Configuration");if(!t.name)throw J("App Name");for(let e of["projectId","apiKey","appId"])if(!t.options[e])throw J(e);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),i=(0,n._getProvider)(e,"heartbeat");return{app:e,appConfig:a,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},X=t=>{let e=t.getProvider("app").getImmediate(),a=(0,n._getProvider)(e,U).getImmediate();return{getId:()=>K(a),getToken:t=>R(a,t)}};(0,n._registerComponent)(new i.wA(U,G,"PUBLIC")),(0,n._registerComponent)(new i.wA("installations-internal",X,"PRIVATE")),(0,n.registerVersion)(s,u),(0,n.registerVersion)(s,u,"esm2017")}}]);