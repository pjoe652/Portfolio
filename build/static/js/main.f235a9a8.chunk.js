(this["webpackJsonppeter-joe-portfolio"]=this["webpackJsonppeter-joe-portfolio"]||[]).push([[0],{12:function(e,t,a){e.exports=a(33)},17:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),s=(a(17),a(3)),c=a(4),l=a(6),m=a(5),d=a(1),u=a.n(d),p=[{skill:"Javascript",percentage:[90,10]},{skill:"React",percentage:[80,20]},{skill:"Redux",percentage:[50,50]},{skill:"Selenium",percentage:[65,35]},{skill:"Jest",percentage:[75,25]},{skill:".Net",percentage:[30,70]},{skill:"Express",percentage:[75,25]}],h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onExpandMoreClick=function(){n.setState({exposeMoreAboutMe:!0})},n.state={exposeMoreAboutMe:!1,mounted:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.requestAnimationFrame((function(){return e.setState({mounted:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.exposeMoreAboutMe,a=e.mounted,n=this.props.viewMode;return i.a.createElement("div",{className:u()({"about-me-container":!0,expanded:t})},i.a.createElement("div",{className:u()({"intro-container":!0,active:a})},i.a.createElement("div",{className:"main-header-container"},i.a.createElement("div",{className:"headers"},i.a.createElement("span",{className:"title"},"Hi, I'm Peter Joe."),i.a.createElement("br",null),i.a.createElement("span",{className:"sub-title"},"I'm a full-stack web developer.")),"desktop"===n&&i.a.createElement("div",{className:u()({"expand-button-wrapper":!0,"slide-out":t}),onClick:this.onExpandMoreClick},i.a.createElement("i",{className:"fas fa-chevron-right"}))),i.a.createElement("div",{className:"links"},i.a.createElement("a",{href:"https://www.linkedin.com/in/peter-joe-17673b186/"},i.a.createElement("i",{class:"fab fa-linkedin"})),i.a.createElement("a",{href:"https://github.com/pjoe652"},i.a.createElement("i",{class:"fab fa-github-square"})),i.a.createElement("a",{href:"mailto: p.joe97@hotmail.com"},i.a.createElement("i",{class:"fas fa-envelope-square"}))),"desktop"!==n&&i.a.createElement("div",{className:u()({"expand-button-wrapper":!0,"slide-down":t}),onClick:this.onExpandMoreClick},i.a.createElement("i",{className:"fas fa-chevron-down"}))),i.a.createElement("div",{className:"expanded-container"},i.a.createElement("div",{className:u()({"expanded-intro-container":!0,"slide-in":t&&"desktop"===n,"slide-down":t&&"desktop"!==n})},i.a.createElement("div",{className:"intro"},"I'm a (soon-to-become) graduate of the University of Auckland. I studied Computer Systems Engineering and somehow came to doing web development."),i.a.createElement("div",{className:"skill-level-container"},p.map((function(e){return i.a.createElement("div",{className:"skill-container"},i.a.createElement("span",{className:"skill-name"},e.skill),i.a.createElement("div",{className:"bar"},i.a.createElement("div",{className:"filled",style:{width:"".concat(t?e.percentage[0]:0,"%")}}),i.a.createElement("div",{className:"unfilled",style:{width:"".concat(t?e.percentage[1]:0,"%")}})))}))))))}}]),a}(i.a.Component),v=[{timeStarted:"October 2018",company:"University of Auckland",position:"Summer Researcher"},{timeStarted:"November 2018",company:"E-Merge Data Solution",position:"Intern"},{timeStarted:"February 2019",company:"University of Auckland",position:"Summer Researcher"},{timeStarted:"November 2019",company:"Perpetual Guardian",position:"Junior Analyst Programmer"}],E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"experience-container"},i.a.createElement("div",{className:"title-wrapper"},i.a.createElement("span",{className:"work-experience-title"},"Work Experience Timeline"),i.a.createElement("div",{className:"underline"})),i.a.createElement("div",{className:"workplace-container"},v.map((function(e,t){return i.a.createElement("div",{className:"experience-wrapper"},i.a.createElement("div",{className:"time-header"},i.a.createElement("span",{className:"time"},e.timeStarted),t!==v.length-1&&i.a.createElement("div",{className:"arrow"})),i.a.createElement("span",{className:"company"},e.company),i.a.createElement("span",{className:"position"},e.position))}))))}}]),a}(i.a.Component),f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onMenuClick,a=e.menuOpen,n=e.switchRoutes,r=e.route,o=e.viewMode;return i.a.createElement("div",{className:"header-container"},i.a.createElement("div",{className:"title"},i.a.createElement("img",{src:"/pj.ico",alt:"",onClick:function(){return n("main")}}),"tabletSM"!==o&&i.a.createElement("span",{onClick:function(){return n("main")}},"Peter Joe")),i.a.createElement("div",{className:"link-container"},"tabletSM"===o?i.a.createElement("div",{className:u()({"burger-menu":!0,cross:a}),onClick:t},i.a.createElement("span",{className:"burger-bar top"}),i.a.createElement("span",{className:"burger-bar middle"}),i.a.createElement("span",{className:"burger-bar bottom"})):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:u()({"link-wrapper":!0,selected:"project"===r}),onClick:function(){return n("project")}},i.a.createElement("span",null,"Projects"),i.a.createElement("div",{className:"underline"})),i.a.createElement("div",{className:u()({"link-wrapper":!0,selected:"main"===r}),onClick:function(){return n("main")}},i.a.createElement("span",null,"About Me"),i.a.createElement("div",{className:"underline"})))))}}]),a}(i.a.Component),w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.switchRoutes,a=e.menuOpen,n=e.route;return i.a.createElement("div",{className:u()({"menu-container":!0,closed:!a})},i.a.createElement("div",{className:u()({"link-wrapper":!0,selected:"project"===n}),onClick:function(){return t("project")}},i.a.createElement("span",null,"Projects"),i.a.createElement("div",{className:"underline"})),i.a.createElement("div",{className:u()({"link-wrapper":!0,selected:"main"===n}),onClick:function(){return t("main")}},i.a.createElement("span",null,"About Me"),i.a.createElement("div",{className:"underline"})))}}]),a}(i.a.Component),g=[{title:"Computer Vision for Assistive Technology",repo:"https://github.com/pjoe652/Computer-Vision-for-Assistive-Technology",video:"FPxfm59Gtfw",image:"/computerVision.png",description:'This was my submission for my capstone project. \n      AI was used to identify humans and their postures, these include: "Standing", "Sitting", "Fallen Down", and "Sleeping". \n      We won a prize for "Best Project in Parallel and Cloud Computing" category.',skills:["ImageAI","Express","React Native","SQL"]},{title:"Messenger",repo:"https://github.com/pjoe652/Messenger-App",image:"/messenger.png",description:"Messenger was made for a university assignment and was my first introduction to web development. It is similar to Facebook messenger and is able to send/receive text messages, images, videos, and pdf files.",skills:["Python","CherryPy","SQLite"]},{title:"Pacman RPG",repo:"https://github.com/pjoe652/Pacman-RPG",image:"/pacmanRPG.png",description:"Pacman RPG is a game made for a university assignment. It plays like Pacman with the Pacman, Ghosts and pellets however Pacman-RPG has new aesthetics, multiplayer,\n    dialogue, events, and a boss battle in the end.",skills:["Java","SceneBuilder","OOP"]},{title:"Coeus",repo:"https://github.com/pjoe652/Coeus",image:"/coeus.png",description:"Coeus is a helpdesk system where the content of the email is analyzed and sorted out based on category. Semantic analysis is performed on the content to determine the category and mood of an email to determine who should handle the the email and how urgent the email is.",skills:["React","Express","SQL"]},{title:"Eukya",repo:"https://github.com/pjoe652/Eukya",image:"/eukya.png",description:"Eukya is a website I created for a furniture company. It was used to showcase their products and their partners who have purchased from them.",skills:["React","Express","SQL","Next.Js","SCSS"]},{title:"Portfolio",repo:"https://github.com/pjoe652/Portfolio",image:"/peterjoe.png",description:"This is my portfolio, this is where I'll update my journey as I do more projects",skills:["React","SCSS"]}],b=a(9),k=function(){var e=document.body.style.top;document.body.style.top="",document.body.style.overflowY="",window.scrollTo(0,-1*parseInt(e||"0"))},y=function(){document.body.style.top="-".concat(window.scrollY,"px"),document.body.style.overflowY="hidden"},N={height:"100%",width:"100%"},j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).selectProject=function(e){var t=g.filter((function(t){return t.title===e}))[0];y(),n.setState({openModal:!0,activeProject:t})},n.closeModal=function(){k(),n.setState({openModal:!1,activeProject:null})},n.updateProjectRow=function(){var e=3,t=[],a=[];for(window.innerWidth<800?e=1:window.innerWidth<1120&&(e=2),g.forEach((function(n){n.empty=!1,a.push(n),a.length===e&&(t.push(a),a=[])}));a.length<e;)a.push({empty:!0});t.push(a),n.setState({displayProjects:t})},n.state={displayProjects:[],openModal:!1,activeProject:null,mounted:!1},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){window.addEventListener("resize",this.updateProjectRow)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateProjectRow)}},{key:"componentDidMount",value:function(){var e=this;this.updateProjectRow(),window.requestAnimationFrame((function(){return e.setState({mounted:!0})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.openModal,n=t.activeProject,r=t.mounted,o=t.displayProjects;return i.a.createElement("div",{className:"projects-container"},i.a.createElement("div",{className:u()({"modal-escape":!0,hidden:!a}),onClick:this.closeModal}),i.a.createElement("div",{className:u()({"modal-container":!0,hidden:!a})},n&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"description"},i.a.createElement("div",{className:"description-header"},i.a.createElement("span",{className:"title"},n.title),i.a.createElement("a",{href:n.repo},i.a.createElement("i",{class:"fab fa-github-square"}))),i.a.createElement("div",{className:"skills"},"Related Skills:",n.skills.map((function(e){return i.a.createElement("span",null," ".concat(e))}))),i.a.createElement("span",{className:"main"},n.description)),i.a.createElement("div",{className:"rhs-wrapper"},n.video?i.a.createElement(b.a,{opts:N,videoId:n.video}):i.a.createElement("img",{src:n.image,alt:""})))),o.map((function(t,a){return i.a.createElement("div",{className:"project-wrapper-row"},t.map((function(n,o){return i.a.createElement("div",{className:u()({"project-wrapper":!0,active:r}),style:{"--delay":"0.".concat(a*t.length+o+1,"s")}},i.a.createElement("span",{className:"title"},n.title),!n.empty&&i.a.createElement("div",{className:"image-container",onClick:function(){return e.selectProject(n.title)}},i.a.createElement("img",{src:n.image,alt:""}),i.a.createElement("i",{class:"find-out fas fa-search"})))})))})))}}]),a}(i.a.Component),M=(a(32),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).updateViewMode=function(){window.innerWidth<800?n.setState({viewMode:"tabletSM"}):window.innerWidth<1120?(n.setState({viewMode:"tablet",menuOpen:!1}),k()):(n.setState({viewMode:"desktop",menuOpen:!1}),k())},n.switchRoutes=function(e){k(),n.setState({route:e,menuOpen:!1})},n.onMenuClick=function(){var e=n.state.menuOpen;e?k():y(),n.setState({menuOpen:!e})},n.state={route:"main",viewMode:"desktop",menuOpen:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.updateViewMode(),window.addEventListener("resize",this.updateViewMode)}},{key:"render",value:function(){var e=this.state,t=e.menuOpen,a=e.route,n=e.viewMode;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{switchRoutes:this.switchRoutes,route:a,viewMode:n,menuOpen:t,onMenuClick:this.onMenuClick}),i.a.createElement("div",{className:"app-container"},i.a.createElement(w,{switchRoutes:this.switchRoutes,menuOpen:t,route:a}),"main"===a?i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{viewMode:n}),i.a.createElement(E,null)):i.a.createElement(j,null)))}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.f235a9a8.chunk.js.map