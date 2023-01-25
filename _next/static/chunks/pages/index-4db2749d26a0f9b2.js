(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6016)}])},6016:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return j}});var a=t(5893),r=t(9008),n=t.n(r),i=t(6261),l=t(1163);function c(){let e=(0,l.useRouter)();return(0,a.jsxs)("nav",{className:"select-none fixed z-30 flex p-10 justify-between max-sm:justify-center items-center w-full h-20 bg-zinc-900 font-sans font-semibold text-lg max-sm:text-sm",children:[(0,a.jsxs)("a",{className:"max-sm:hidden text-cyan-50 text-2xl",children:[(0,a.jsx)("img",{className:"inline-block cursor-pointer",onClick:()=>{e.reload()},src:"/Assets/Images/palm.png",height:50,width:50,alt:"Palm Tree Club"})," | ",(0,a.jsx)("img",{onClick:()=>{window.open("https://silveroakuni.ac.in","_blank")},src:"/Assets/Images/sou.png",className:"inline-block cursor-pointer",height:100,width:100,alt:"silver oak university"})]}),(0,a.jsxs)("ul",{className:"flex justify-center text-cyan-50",children:[(0,a.jsx)(i.rU,{activeClass:"active",to:"hero",smooth:!0,duration:300,className:"max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300",children:"Home"}),(0,a.jsx)(i.rU,{activeClass:"active",to:"domain",smooth:!0,duration:300,className:"max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300",children:"Domains"}),(0,a.jsx)(i.rU,{activeClass:"active",to:"achivements",smooth:!0,duration:300,className:"max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300",children:"Achievements"}),(0,a.jsx)(i.rU,{activeClass:"active",to:"events",smooth:!0,duration:300,className:"max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300",children:"Events"}),(0,a.jsx)(i.rU,{activeClass:"active",to:"faculty",smooth:!0,duration:300,className:"max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300",children:"Faculty"}),(0,a.jsx)(i.rU,{activeClass:"active",to:"contact",smooth:!0,duration:300,className:"max-sm:mr-3 mr-10 cursor-pointer hover:text-sky-700 transition duration-300",children:"Contact"}),(0,a.jsx)("a",{className:"text-ambers cursor-pointer hover:text-sky-700 transition duration-300",onClick:()=>{e.push("/login")},children:"Login"})]})]})}function o(){return(0,a.jsx)("div",{id:"hero",className:"select-none grid h-screen bg-hero bg-cover w-screen max-sm:bg-center",children:(0,a.jsxs)("div",{className:"bg-opacity flex h-screen w-screen flex-col justify-center items-center font-sans col-span-2",children:[(0,a.jsxs)("a",{className:"hidden mb-10 max-sm:inline-block text-cyan-50 text-2xl",children:[(0,a.jsx)("img",{className:"inline-block cursor-pointer",src:"/Assets/Images/palm.png",height:100,width:100,alt:"Palm Tree Club"})," ","|"," ",(0,a.jsx)("img",{onClick:()=>{window.open("https://silveroakuni.ac.in","_blank")},src:"/Assets/Images/sou.png",className:"inline-block cursor-pointer",height:150,width:150,alt:"silver oak university"})]}),(0,a.jsxs)("h1",{className:"text-white text-6xl max-sm:text-3xl max-sm:text-center font-extrabold uppercase",children:[(0,a.jsxs)("a",{href:"https://silveroakuni.ac.in",target:"_blank",className:"hover:text-sky-700 transition duration-300 cursor-pointer",rel:"noreferrer",children:["SOCCA's"," "]}),"Largest Community"]}),(0,a.jsx)("h1",{className:"mt-10 text-7xl max-sm:text-3xl uppercase font-bold text-ambers",children:"Palm Tree Club"}),(0,a.jsx)("p",{className:"text-white mt-16 text-3xl max-sm:text-3xl font-semibold text-grey",children:"Learn | Build | Grow"})]})})}var m=t(7294);function x(){let[e,s]=(0,m.useState)([]);return(0,m.useEffect)(()=>{fetch("/data.json").then(e=>e.json()).then(e=>{s(e.domains)})},[]),(0,a.jsxs)("div",{id:"domain",className:"select-none flex flex-col justify-center items-center h-screen bg-slate-900 w-screen",children:[(0,a.jsx)("div",{"data-aos":"fade-up",className:"flex justify-center items-center",children:(0,a.jsx)("h1",{className:"m-20 max-sm:text-4xl max-sm:m-10 max-sm:text-center font-semibold text-ambers text-6xl ",children:"Find People Of Your Interest!"})}),(0,a.jsx)("div",{"data-aos":"fade-up",className:" grid grid-cols-2 place-content-center gap-5 w-3/6 max-sm:w-screen ",children:e.map((e,s)=>(0,a.jsx)("div",{className:"h-40 w-full border-2 rounded-lg border-sky-700",children:(0,a.jsxs)("div",{className:"cursor-pointer flex flex-col justify-around items-center h-full hover:bg-sky-700 transition ease-in-out duration-300",children:[(0,a.jsx)("img",{src:e.src,height:48,width:48,alt:e.name}),(0,a.jsx)("h1",{className:"text-2xl max-sm:text-xl uppercase font-semibold text-ambers",children:e.name})]})},s))})]})}function d(){let[e,s]=(0,m.useState)([]);return(0,m.useEffect)(()=>{fetch("/data.json").then(e=>e.json()).then(e=>{s(e.achivements)})},[]),(0,a.jsxs)("div",{id:"achivements",className:"select-noneselect-none flex flex-col font-sans justify-center items-center h-screen bg-ambers w-screen",children:[(0,a.jsx)("h1",{"data-aos":"fade-up",className:"text-white text-6xl max-sm:text-3xl",children:"Achivements"}),(0,a.jsx)("div",{"data-aos":"fade-up",className:"mt-32 grid gap-5 grid-flow-col place-items-center w-3/4 max-sm:grid-flow-row max-sm:mt-10",children:e.map((e,s)=>(0,a.jsxs)("div",{className:"hover:bg-pink-300 transition ease-in-out duration-300 flex flex-col justify-evenly items-center h-48 w-96 bg-white rounded-lg shadow-2xl max-sm:w-64",children:[(0,a.jsx)("img",{src:e.src,height:150,width:150,alt:e.name}),(0,a.jsxs)("a",{href:e.link,target:"_blank",className:"bg-ambers p-3 rounded-lg cursor-pointer",rel:"noreferrer",children:["Read more about ",e.name]})]},s))})]})}function h(){return(0,a.jsxs)("div",{id:"events",className:"select-none flex flex-col justify-evenly items-center h-screen w-screen bg-bottle",children:[(0,a.jsx)("h1",{"data-aos":"fade-up",className:"max-sm:text-3xl text-6xl text-bottle-text",children:"Upcoming Events"}),(0,a.jsxs)("div",{className:"grid w-full px-28 grid-flow-col place-items-center",children:[(0,a.jsx)("div",{style:{height:"300px",width:"700px"},className:"rounded-2xl bg-event bg-cover flex justify-evenly items-center p-10"}),(0,a.jsxs)("div",{className:"flex flex-col justify-evenly h-full items-center",children:[(0,a.jsx)("h1",{className:"text-3xl font-semibold uppercase text-bottle-text text-center",children:"Profile Building Session - LinkedIn"}),(0,a.jsxs)("div",{className:"text-xl text-bottle-text",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{className:"inline-flex",alt:"calender",height:30,width:30,src:"https://img.icons8.com/color/48/null/calendar--v3.png"})," : 28",(0,a.jsx)("sup",{children:"th"})," Jan"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{alt:"clock",height:30,width:30,className:"inline-flex",src:"https://img.icons8.com/fluency/48/null/time-span.png"})," : 11:00 am - 1:30 pm"]}),(0,a.jsxs)("p",{className:"mb-10",children:[(0,a.jsx)("img",{alt:"location",height:30,width:30,className:"inline-flex",src:"https://img.icons8.com/office/40/null/place-marker--v1.png"})," : CV Raman Hall - B Block"]}),(0,a.jsx)("a",{className:"bg-amber-400 p-3 rounded-xl text-xl font-semibold active:bg-transparent transition-all duration-300 active:text-bottle-text active:scale-90 cursor-pointer",href:"https://docs.google.com/forms/d/e/1FAIpQLSfl9aPobOWLW0q9onb5u6lZ_QrKcCS346Li5qmhv4adEOh93g/viewform",rel:"noreferrer",target:"_blank",children:"Register Now"})]})]})]})]})}var u=t(7735);function p(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{id:"contact",style:{height:"60vh"},className:"select-none max-sm:hidden font-sans w-screen p-20 bg-black grid grid-cols-4 gap-32 place-items-start",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsxs)("span",{className:"text-white text-6xl",children:[(0,a.jsx)("img",{className:"inline-block",src:"/Assets/Images/palm.png",height:100,width:100,alt:"palm"}),"|",(0,a.jsx)("img",{className:"inline-block",src:"/Assets/Images/sou.png",height:100,width:100,alt:"sou"})]}),(0,a.jsx)("p",{className:"text-white mt-10 ",children:"Palm Tree Club, created & mentored by Silver Oak College Of Computer Application!"})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)("p",{className:"text-white font-bold text-2xl uppercase",children:"site track"}),(0,a.jsxs)("ul",{className:"flex flex-col mt-10 text-cyan-50 text-xl",children:[(0,a.jsx)(i.rU,{activeClass:"active",to:"hero",smooth:!0,duration:300,className:"mt-3 cursor-pointer hover:text-sky-700 transition duration-300",children:"Home"}),(0,a.jsx)(i.rU,{activeClass:"active",to:"domain",smooth:!0,duration:300,className:"mt-3 cursor-pointer hover:text-sky-700 transition duration-300",children:"Domains"}),(0,a.jsx)(i.rU,{activeClass:"active",to:"achivements",smooth:!0,duration:300,className:"mt-3 cursor-pointer hover:text-sky-700 transition duration-300",children:"Achievements"}),(0,a.jsx)(i.rU,{activeClass:"active",to:"events",smooth:!0,duration:300,className:"mt-3 cursor-pointer hover:text-sky-700 transition duration-300",children:"Events"}),(0,a.jsx)(i.rU,{activeClass:"active",to:"contact",smooth:!0,duration:300,className:"mt-3 cursor-pointer hover:text-sky-700 transition duration-300",children:"Contact"}),(0,a.jsx)("a",{className:"text-white mt-3 cursor-pointer hover:text-sky-700 transition duration-300",onClick:()=>{router.push("/login")},children:"Login"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-start",children:[(0,a.jsx)("p",{className:"text-white font-bold text-2xl uppercase",children:"other links"}),(0,a.jsxs)("ul",{className:"flex flex-col mt-10 text-cyan-50 text-xl",children:[(0,a.jsx)("a",{href:"https://silveroakuni.ac.in",target:"_blank",className:"mt-3 cursor-pointer hover:text-sky-700 transition duration-300",rel:"noreferrer",children:"Silver Oak University"}),(0,a.jsx)("a",{href:"https://gdsc.community.dev/silver-oak-university-ahmedabad/",target:"_blank",className:"mt-3 cursor-pointer hover:text-sky-700 transition duration-300",rel:"noreferrer",children:"Google Developers Student Club"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,a.jsx)("p",{className:"text-white font-bold text-2xl uppercase",children:"follow us"}),(0,a.jsx)("ul",{className:"flex mt-10 text-cyan-50 text-xl",children:(0,a.jsx)("a",{href:"https://instagram.com/sou_palmclub",target:"_blank",className:"mt-3 cursor-pointer transition duration-300",rel:"noreferrer",children:(0,a.jsx)(u.Pno,{className:"text-4xl hover:text-sky-700 inline-block mr-2"})})})]})]}),(0,a.jsxs)("div",{className:"select-none max-sm:p-10 flex flex-col font-sans bg-black w-screen justify-center items-center",children:[(0,a.jsxs)("p",{className:"text-white mb-5 text-xl",children:["Have a query? ",(0,a.jsx)("a",{className:"p-2 ml-4 bg-ambers rounded cursor-pointer",href:"mailto:",children:"Send Mail"})]}),(0,a.jsx)("p",{className:"text-white text-center",children:"\xa9 2021 Palm Tree Club. All rights reserved."})]})]})}var f=t(3190),g=t(9261);function v(){return(0,a.jsxs)("div",{id:"faculty",className:"select-none h-screen w-screen flex flex-col justify-center items-center bg-purple-800",children:[(0,a.jsx)("h1",{"data-aos":"fade-up",className:"md-sm:text-3xl text-5xl text-white",children:"Meet our Founders, Organizers & Leaders"}),(0,a.jsxs)("div",{className:"w-screen m-14 flex justify-evenly items-center",children:[(0,a.jsx)("img",{"data-aos":"fade-right",className:"cursor-pointer",src:"/Assets/Images/cards/dean.png",width:230,height:230,alt:"Dean"}),(0,a.jsx)("img",{"data-aos":"fade-up",className:"cursor-pointer",src:"/Assets/Images/cards/principal.png",width:230,height:230,alt:"principal"}),(0,a.jsx)("img",{"data-aos":"fade-down",className:"cursor-pointer",src:"/Assets/Images/cards/HOD.png",width:230,height:230,alt:"HOD"}),(0,a.jsx)("img",{"data-aos":"fade-left",className:"cursor-pointer",src:"/Assets/Images/cards/meghnamam.png",width:230,height:230,alt:"meghna mam"})]})]})}function j(){return(0,m.useEffect)(()=>{let e=(0,g.IH)(f.Z);(0,g.Kz)(e,"page_view")},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:"Palm Tree Club"}),(0,a.jsx)("meta",{name:"description",content:"Palm Tree Club is offical club of SOCCA - Silver Oak University"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/Assets/Images/palm.png"}),(0,a.jsx)("link",{href:"/Assets/Images/palm.png",rel:"apple-touch-icon"}),(0,a.jsx)("meta",{content:"Palm tree club, rde, silver oak university, palm, tree, club, silver oak, univeristy, silver, oak, club, community, coding, programming, google, gls, indus, nirma, btech, microsoft",name:"keywords"})]}),(0,a.jsx)(c,{}),(0,a.jsxs)("main",{suppressHydrationWarning:!0,style:{minHeight:"100vh"},className:"flex flex-col justify-center items-center overflow-hidden",children:[(0,a.jsx)(o,{}),(0,a.jsx)(x,{}),(0,a.jsx)(d,{}),(0,a.jsx)(h,{}),(0,a.jsx)(v,{})]}),(0,a.jsx)("footer",{style:{overflow:"hidden"},children:(0,a.jsx)(p,{})})]})}},3190:function(e,s,t){"use strict";var a=t(770);s.Z=a.Z.apps.length?a.Z.app():a.Z.initializeApp({apiKey:"AIzaSyAk4-yfa5ll0v0PncfiV1ETbiXOKB7I3II",authDomain:"palm-tree-club.firebaseapp.com",projectId:"palm-tree-club",storageBucket:"palm-tree-club.appspot.com",messagingSenderId:"1025156690287",appId:"1:1025156690287:web:76a7aa741d546a0afc789a",measurementId:"G-4QMLY5KNST"})}},function(e){e.O(0,[415,217,578,674,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);