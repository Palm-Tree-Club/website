(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{1075:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(7178)}])},7178:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return d}});var a=t(5893),l=t(7294),n=t(1259),i=t(3190),r=t(1163),c=t(7516),o=t(8193),m=t(6728);let u=(0,n.v0)();function d(){var e;let[s,t]=(0,l.useState)(null),[n,d]=(0,l.useState)(null),[x,h]=(0,l.useState)(null),p=(0,r.useRouter)();return(0,l.useEffect)(()=>{u.currentUser||p.push({pathname:"/login"},"/login")},[p]),(0,l.useEffect)(()=>{let e=(0,m.sN)(i.Z);e.settings.minimumFetchIntervalMillis=1e4,(0,m.xS)(e).then(()=>{let s=(0,m.go)(e,"dashboard"),a=JSON.parse(s.dashboard._value);t(a.task),d(a.announcement),h(a.events)})},[]),(0,a.jsxs)("div",{className:"h-screen w-screen ",children:[(0,a.jsxs)("nav",{className:"fixed z-30 flex p-10 justify-center max-sm:justify-center items-center w-full h-20 bg-zinc-900 font-sans font-semibold text-lg max-sm:text-sm",children:[(0,a.jsxs)("a",{onClick:()=>{u.signOut(),p.back()},className:"absolute left-2 text-white max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300",children:[(0,a.jsx)(c.TPb,{className:"inline-block"})," Sign Out"]}),(0,a.jsxs)("a",{className:"max-sm:hidden text-cyan-50 text-2xl",children:[(0,a.jsx)("img",{className:"inline-block cursor-pointer",onClick:()=>{p.reload()},src:"/Assets/Images/palm.png",height:50,width:50,alt:"Palm Tree Club"})," ","|"," ",(0,a.jsx)("img",{onClick:()=>{window.open("https://silveroakuni.ac.in","_blank")},src:"/Assets/Images/sou.png",className:"inline-block cursor-pointer",height:100,width:100,alt:"silver oak university"})]}),(0,a.jsxs)("a",{className:"absolute right-2 text-white max-sm:mr-3 cursor-pointer hover:text-sky-700 transition duration-300",children:[null===(e=u.currentUser)||void 0===e?void 0:e.email," "]})]}),(0,a.jsx)("div",{className:"h-screen w-screen flex flex-col justify-start items-center bg-grayish",children:(0,a.jsxs)("div",{className:"mt-40 grid grid-cols-3 gap-10",children:[(0,a.jsx)("div",{className:"rounded-lg w-auto border-2 p-5",children:(0,a.jsxs)("div",{className:"flex flex-col items-start",children:[(0,a.jsx)("h1",{className:"text-4xl cursor-pointer hover:text-sky-700 transition duration-300 text-white uppercase font-semibold",children:"Task"}),(0,a.jsx)("ol",{className:"mt-10",children:null!=s?s.map((e,s)=>(0,a.jsxs)("li",{className:"text-white",children:[" ",(0,a.jsx)(o.rYR,{className:"inline-block"})," ",e.message]},s)):null})]})}),(0,a.jsx)("div",{style:{width:"30rem"},className:"rounded-lg w-auto border-2 p-5",children:(0,a.jsxs)("div",{className:"flex flex-col items-start",children:[(0,a.jsx)("h1",{className:"text-4xl cursor-pointer hover:text-sky-700 transition duration-300 text-white uppercase font-semibold",children:"Announcements"}),(0,a.jsx)("ol",{className:"mt-10",children:null!=n?n.map((e,s)=>(0,a.jsxs)("li",{className:"text-white",children:[" ",(0,a.jsx)(o.rYR,{className:"inline-block"})," ",e.message]},s)):null})]})}),(0,a.jsx)("div",{className:"w-auto rounded-lg border-2 p-5",children:(0,a.jsxs)("div",{className:" flex flex-col items-start ",children:[(0,a.jsx)("h1",{className:"text-4xl cursor-pointer hover:text-sky-700 transition duration-300 text-white uppercase font-semibold",children:"Upcoming Events"}),(0,a.jsx)("ol",{className:"mt-10",children:null!=x?x.map((e,s)=>(0,a.jsxs)("li",{className:"text-white",children:[" ",(0,a.jsx)(o.rYR,{className:"inline-block"})," ",e.message]},s)):null})]})})]})})]})}},3190:function(e,s,t){"use strict";var a=t(770);s.Z=a.Z.apps.length?a.Z.app():a.Z.initializeApp({apiKey:"AIzaSyAk4-yfa5ll0v0PncfiV1ETbiXOKB7I3II",authDomain:"palm-tree-club.firebaseapp.com",projectId:"palm-tree-club",storageBucket:"palm-tree-club.appspot.com",messagingSenderId:"1025156690287",appId:"1:1025156690287:web:76a7aa741d546a0afc789a",measurementId:"G-4QMLY5KNST"})}},function(e){e.O(0,[597,874,617,217,316,774,888,179],function(){return e(e.s=1075)}),_N_E=e.O()}]);