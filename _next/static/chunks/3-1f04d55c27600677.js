"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{655:function(t,e,s){s.d(e,{_T:function(){return i}});function i(t,e){var s={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&0>e.indexOf(i)&&(s[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,i=Object.getOwnPropertySymbols(t);a<i.length;a++)0>e.indexOf(i[a])&&Object.prototype.propertyIsEnumerable.call(t,i[a])&&(s[i[a]]=t[i[a]]);return s}},1259:function(t,e,s){s.d(e,{v0:function(){return i.n},LS:function(){return i.a0},e5:function(){return i.a6}});var i=s(9516);s(4444),s(2238),s(3333),s(8463)},7135:function(t,e,s){s.d(e,{xS:function(){return E},go:function(){return w},sN:function(){return m}});var i=s(2238),a=s(4444),r=s(8463),n=s(3333);s(7578);let o="@firebase/remote-config",c="0.4.0";/**
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
 */class l{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
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
 */let h="remote-config",g=new a.LL("remoteconfig","Remote Config",{"registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser"}),u=["1","true","t","yes","y","on"];class f{constructor(t,e=""){this._source=t,this._value=e}asString(){return this._value}asBoolean(){return"static"!==this._source&&u.indexOf(this._value.toLowerCase())>=0}asNumber(){if("static"===this._source)return 0;let t=Number(this._value);return isNaN(t)&&(t=0),t}getSource(){return this._source}}/**
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
 */function m(t=(0,i.getApp)()){t=(0,a.m9)(t);let e=(0,i._getProvider)(t,h);return e.getImmediate()}async function d(t){let e=(0,a.m9)(t),[s,i]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);return!!s&&!!s.config&&!!s.eTag&&s.eTag!==i&&(await Promise.all([e._storageCache.setActiveConfig(s.config),e._storage.setActiveConfigEtag(s.eTag)]),!0)}async function p(t){let e=(0,a.m9)(t),s=new l;setTimeout(async()=>{s.abort()},e.settings.fetchTimeoutMillis);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:s}),await e._storageCache.setLastFetchStatus("success")}catch(r){let i=r instanceof a.ZR&&-1!==r.code.indexOf("fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(i),r}}function w(t){let e=(0,a.m9)(t);return(function(t={},e={}){return Object.keys(Object.assign(Object.assign({},t),e))})(e._storageCache.getActiveConfig(),e.defaultConfig).reduce((e,s)=>(e[s]=function(t,e){let s=(0,a.m9)(t);s._isInitializationComplete||s._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);let i=s._storageCache.getActiveConfig();return i&&void 0!==i[e]?new f("remote",i[e]):s.defaultConfig&&void 0!==s.defaultConfig[e]?new f("default",String(s.defaultConfig[e])):(s._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new f("static"))}(t,s),e),{})}/**
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
 */class _{constructor(t,e,s,i){this.client=t,this.storage=e,this.storageCache=s,this.logger=i}isCachedDataFresh(t,e){if(!e)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;let s=Date.now()-e,i=s<=t;return this.logger.debug(`Config fetch cache check. Cache age millis: ${s}. Cache max age millis (minimumFetchIntervalMillis setting): ${t}. Is cache hit: ${i}.`),i}async fetch(t){let[e,s]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(s&&this.isCachedDataFresh(t.cacheMaxAgeMillis,e))return s;t.eTag=s&&s.eTag;let i=await this.client.fetch(t),a=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return 200===i.status&&a.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(a),i}}/**
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
 */class v{constructor(t,e,s,i,a,r){this.firebaseInstallations=t,this.sdkVersion=e,this.namespace=s,this.projectId=i,this.apiKey=a,this.appId=r}async fetch(t){let e,s,i;let[a,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),n=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",o=`${n}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,c={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":t.eTag||"*"},l={sdk_version:this.sdkVersion,app_instance_id:a,app_instance_id_token:r,app_id:this.appId,language_code:/**
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
 */function(t=navigator){return t.languages&&t.languages[0]||t.language}()},h={method:"POST",headers:c,body:JSON.stringify(l)},u=fetch(o,h),f=new Promise((e,s)=>{t.signal.addEventListener(()=>{let t=Error("The operation was aborted.");t.name="AbortError",s(t)})});try{await Promise.race([u,f]),e=await u}catch(d){let m="fetch-client-network";throw(null==d?void 0:d.name)==="AbortError"&&(m="fetch-timeout"),g.create(m,{originalErrorMessage:null==d?void 0:d.message})}let p=e.status,w=e.headers.get("ETag")||void 0;if(200===e.status){let _;try{_=await e.json()}catch(v){throw g.create("fetch-client-parse",{originalErrorMessage:null==v?void 0:v.message})}s=_.entries,i=_.state}if("INSTANCE_STATE_UNSPECIFIED"===i?p=500:"NO_CHANGE"===i?p=304:("NO_TEMPLATE"===i||"EMPTY_CONFIG"===i)&&(s={}),304!==p&&200!==p)throw g.create("fetch-status",{httpStatus:p});return{status:p,eTag:w,config:s}}}class C{constructor(t,e){this.client=t,this.storage=e}async fetch(t){let e=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(t,e)}async attemptFetch(t,{throttleEndTimeMillis:e,backoffCount:s}){var i;await (i=t.signal,new Promise((t,s)=>{let a=Math.max(e-Date.now(),0),r=setTimeout(t,a);i.addEventListener(()=>{clearTimeout(r),s(g.create("fetch-throttle",{throttleEndTimeMillis:e}))})}));try{let r=await this.client.fetch(t);return await this.storage.deleteThrottleMetadata(),r}catch(o){if(!function(t){if(!(t instanceof a.ZR)||!t.customData)return!1;let e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(o))throw o;let n={throttleEndTimeMillis:Date.now()+(0,a.$s)(s),backoffCount:s+1};return await this.storage.setThrottleMetadata(n),this.attemptFetch(t,n)}}}class S{constructor(t,e,s,i,a){this.app=t,this._client=e,this._storageCache=s,this._storage=i,this._logger=a,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
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
 */function T(t,e){let s=t.target.error||void 0;return g.create(e,{originalErrorMessage:s&&(null==s?void 0:s.message)})}let b="app_namespace_store";class y{constructor(t,e,s,i=new Promise((t,e)=>{try{let s=indexedDB.open("firebase_remote_config",1);s.onerror=t=>{e(T(t,"storage-open"))},s.onsuccess=e=>{t(e.target.result)},s.onupgradeneeded=t=>{let e=t.target.result;0===t.oldVersion&&e.createObjectStore(b,{keyPath:"compositeKey"})}}catch(i){e(g.create("storage-open",{originalErrorMessage:null==i?void 0:i.message}))}})){this.appId=t,this.appName=e,this.namespace=s,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(t){return this.set("last_fetch_status",t)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(t){return this.set("last_successful_fetch_timestamp_millis",t)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(t){return this.set("last_successful_fetch_response",t)}getActiveConfig(){return this.get("active_config")}setActiveConfig(t){return this.set("active_config",t)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(t){return this.set("active_config_etag",t)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(t){return this.set("throttle_metadata",t)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(t){let e=await this.openDbPromise;return new Promise((s,i)=>{let a=e.transaction([b],"readonly"),r=a.objectStore(b),n=this.createCompositeKey(t);try{let o=r.get(n);o.onerror=t=>{i(T(t,"storage-get"))},o.onsuccess=t=>{let e=t.target.result;e?s(e.value):s(void 0)}}catch(c){i(g.create("storage-get",{originalErrorMessage:null==c?void 0:c.message}))}})}async set(t,e){let s=await this.openDbPromise;return new Promise((i,a)=>{let r=s.transaction([b],"readwrite"),n=r.objectStore(b),o=this.createCompositeKey(t);try{let c=n.put({compositeKey:o,value:e});c.onerror=t=>{a(T(t,"storage-set"))},c.onsuccess=()=>{i()}}catch(l){a(g.create("storage-set",{originalErrorMessage:null==l?void 0:l.message}))}})}async delete(t){let e=await this.openDbPromise;return new Promise((s,i)=>{let a=e.transaction([b],"readwrite"),r=a.objectStore(b),n=this.createCompositeKey(t);try{let o=r.delete(n);o.onerror=t=>{i(T(t,"storage-delete"))},o.onsuccess=()=>{s()}}catch(c){i(g.create("storage-delete",{originalErrorMessage:null==c?void 0:c.message}))}})}createCompositeKey(t){return[this.appId,this.appName,this.namespace,t].join()}}/**
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
 */class M{constructor(t){this.storage=t}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){let t=this.storage.getLastFetchStatus(),e=this.storage.getLastSuccessfulFetchTimestampMillis(),s=this.storage.getActiveConfig(),i=await t;i&&(this.lastFetchStatus=i);let a=await e;a&&(this.lastSuccessfulFetchTimestampMillis=a);let r=await s;r&&(this.activeConfig=r)}setLastFetchStatus(t){return this.lastFetchStatus=t,this.storage.setLastFetchStatus(t)}setLastSuccessfulFetchTimestampMillis(t){return this.lastSuccessfulFetchTimestampMillis=t,this.storage.setLastSuccessfulFetchTimestampMillis(t)}setActiveConfig(t){return this.activeConfig=t,this.storage.setActiveConfig(t)}}/**
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
 */async function E(t){return await p(t=(0,a.m9)(t)),d(t)}(0,i._registerComponent)(new r.wA(h,function(t,{instanceIdentifier:e}){let s=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if("undefined"==typeof window)throw g.create("registration-window");if(!(0,a.hl)())throw g.create("indexed-db-unavailable");let{projectId:c,apiKey:l,appId:h}=s.options;if(!c)throw g.create("registration-project-id");if(!l)throw g.create("registration-api-key");if(!h)throw g.create("registration-app-id");e=e||"firebase";let u=new y(h,s.name,e),f=new M(u),m=new n.Yd(o);m.logLevel=n.in.ERROR;let d=new v(r,i.SDK_VERSION,e,c,l,h),p=new C(d,u),w=new _(p,u,f,m),T=new S(s,w,f,u,m);return function(t){let e=(0,a.m9)(t);e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}(T),T},"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(o,c),(0,i.registerVersion)(o,c,"esm2017")}}]);