if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const d=e=>a(e,i),r={module:{uri:i},exports:t,require:d};s[i]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(n(...e),t)))}}define(["./workbox-e13f827e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Assets/Images/cards/HOD.png",revision:"3ef28e70d8f2df6f82d0731ff7bb49ed"},{url:"/Assets/Images/cards/dean.png",revision:"b6eef4c35ea86bee9b98d472d2ebd308"},{url:"/Assets/Images/cards/meghnamam.png",revision:"bc06cec922574ff0b6492c1c3e8cfe8a"},{url:"/Assets/Images/cards/principal.png",revision:"0948a0ddac8452ec684978c3d6ae1fbd"},{url:"/Assets/Images/googledev.svg",revision:"41e77e5f14b3d9a44db86fe6dc04c410"},{url:"/Assets/Images/hero.jpeg",revision:"9cf5d44acee6e1e1e05394d1693c4431"},{url:"/Assets/Images/heroop.png",revision:"1281c65b4da03282bc47e65d037ce34c"},{url:"/Assets/Images/palm.png",revision:"8ada2c14520aa9a40fd73fd1e7aa688d"},{url:"/Assets/Images/palmtrans.png",revision:"c4fbe48699e33454f11481c609cddbb5"},{url:"/Assets/Images/reskill.svg",revision:"d77d1958e7f4b2d96c9a162698429312"},{url:"/Assets/Images/sou.png",revision:"1f38a9a0b34d62a913b7c94831aab38d"},{url:"/Assets/Videos/event.gif",revision:"9746a8851304f3882b1b49e4a36265fe"},{url:"/PROPOSED_EVENT_LIST_JAN_2023 TO DEC_2023.docx",revision:"22e1ab8b274b37acbd1bb38fc3a74180"},{url:"/_next/static/chunks/1a48c3c1-3dafa21fa6990163.js",revision:"3dafa21fa6990163"},{url:"/_next/static/chunks/217-53360f4d8670e13c.js",revision:"53360f4d8670e13c"},{url:"/_next/static/chunks/313-a8b21cd5c71b0a9e.js",revision:"a8b21cd5c71b0a9e"},{url:"/_next/static/chunks/578-765d28107782eed3.js",revision:"765d28107782eed3"},{url:"/_next/static/chunks/742-e2519bcf2b0cd885.js",revision:"e2519bcf2b0cd885"},{url:"/_next/static/chunks/d0447323-5da066b9e97ad1ce.js",revision:"5da066b9e97ad1ce"},{url:"/_next/static/chunks/d64684d8-e535f0f45f2e59b6.js",revision:"e535f0f45f2e59b6"},{url:"/_next/static/chunks/d70ca943-a15730f7606d61f9.js",revision:"a15730f7606d61f9"},{url:"/_next/static/chunks/d7eeaac4-128a3d5b5ae585de.js",revision:"128a3d5b5ae585de"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-8d63d1b69cc92dcb.js",revision:"8d63d1b69cc92dcb"},{url:"/_next/static/chunks/pages/_app-71dec24a68de1749.js",revision:"71dec24a68de1749"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/dashboard-a462f818f67abbc5.js",revision:"a462f818f67abbc5"},{url:"/_next/static/chunks/pages/index-848d6179f05ca9ac.js",revision:"848d6179f05ca9ac"},{url:"/_next/static/chunks/pages/login-7099f492aa82d9ac.js",revision:"7099f492aa82d9ac"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-59c5c889f52620d6.js",revision:"59c5c889f52620d6"},{url:"/_next/static/css/53a9169c96cbb4d8.css",revision:"53a9169c96cbb4d8"},{url:"/_next/static/css/d93a1bd30da46e87.css",revision:"d93a1bd30da46e87"},{url:"/_next/static/lhRc_j8H0L0CZgCjuKOpH/_buildManifest.js",revision:"6899b3c43e86f0ac8340da7f17a83870"},{url:"/_next/static/lhRc_j8H0L0CZgCjuKOpH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/1b496f798a642250.woff2",revision:"7b77d8d594cc6aee5a915bb083311d4c"},{url:"/_next/static/media/230e62120f6d785b.woff2",revision:"669c2c517e561272cbb89b4cc59761c8"},{url:"/_next/static/media/647e3efd824faf1c.p.woff2",revision:"40b6965b5cd26213faf61e5ab6765bb9"},{url:"/_next/static/media/75c6578c0e7ebfd8.woff2",revision:"d6affb2b0ebb90639a938928787c0364"},{url:"/_next/static/media/ac361f64331e3beb.woff2",revision:"f2b8dc1c11b50b628d5e0b12060c3736"},{url:"/_next/static/media/e3e909ff52605f18.woff2",revision:"a4fb151402f669c65488dbf5cc735658"},{url:"/_next/static/media/e859973cdb7f6b3d.woff2",revision:"a55dba7f3e37a023425d533a5cd83fd9"},{url:"/_next/static/media/fd72bbd943f0444a.woff2",revision:"04c0e19395ffb1768f43c638ef367f3e"},{url:"/dashboard.json",revision:"74827f5fef4e2c6998fabdf0bec41ae7"},{url:"/data.json",revision:"bb537abcd75e4ab3f8a24060dba44d9c"},{url:"/test.jsx",revision:"aa05b8311a2dbb7ccb57eb0e9ebd1a65"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
