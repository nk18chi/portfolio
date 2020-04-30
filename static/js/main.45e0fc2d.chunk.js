(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{50:function(e,t,a){e.exports=a(67)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),n=a(16),r=a.n(n),l=(a(55),a(19)),s=a(17),c=(a(56),a(90)),m=a(92),p=a(93),d=a(83),g=a(84),u=a(85),h=a(86),f=a(87),b=a(88),v=a(89),y=a(91),E=(a(57),a(80)),k=function(e){var t=e.url,a=e.icon;return o.a.createElement(E.a,{className:"icon-button",size:"medium",href:t},a)},w=(a(61),a(98)),N=a(81),I=a(82),T=a(41),j=function(e){var t=e.text,a=e.icon,i=e.anchor;return o.a.createElement(T.HashLink,{className:"headline-link",to:"/portfolio#".concat(i)},o.a.createElement(w.a,{button:!0,className:"headline-list-item"},o.a.createElement(N.a,{className:"headline-icon"},a),o.a.createElement(I.a,{className:"headline-text",primary:t})))},_=function(){var e=[{url:"https://github.com/nk18chi",element:o.a.createElement(d.a,null)},{url:"https://www.linkedin.com/in/naoki-mita-ab186839/",element:o.a.createElement(g.a,null)},{url:"https://twitter.com/naokien1",element:o.a.createElement(u.a,null)},{url:"https://leetcode.com/nk18chi/",element:o.a.createElement("img",{src:"/portfolio/img/icon/leetcode.svg",alt:""})}],t=[{text:"About Me",icon:o.a.createElement(h.a,null),anchor:"about-me"},{text:"Skill Sets",icon:o.a.createElement(f.a,null),anchor:"skill-sets"},{text:"My Values",icon:o.a.createElement(b.a,null),anchor:"my-values"},{text:"Portfolios",icon:o.a.createElement(v.a,null),anchor:"portfolios"}];return o.a.createElement("div",{className:"side-bar"},o.a.createElement("div",{className:"profile"},o.a.createElement("h2",null,"Naoki Mita"),o.a.createElement("img",{src:"/portfolio/img/main.jpg",alt:""}),o.a.createElement("p",null,"Hello, my name is Naoki Mita. I am a software developer. Take a look at my personal page!")),o.a.createElement("div",{className:"social-link"},o.a.createElement("ul",null,e.length>0&&e.map((function(e){return o.a.createElement(k,{url:e.url,icon:e.element})})))),o.a.createElement(c.a,{className:"black-btn",variant:"contained",size:"large",startIcon:o.a.createElement(y.a,null)},"View Resume"),o.a.createElement(m.a,{className:"divider"}),o.a.createElement("div",{className:"headline"},o.a.createElement(p.a,{component:"nav"},t.length>0&&t.map((function(e){return o.a.createElement(j,{text:e.text,icon:e.icon,anchor:e.anchor})})))))},U=(a(64),a(97)),x=a(94),A=a(95),z=a(96),M=[{id:1,serviceName:"Venture Desk",serviceThumbnail:"/portfolio/img/portfolio/vd_thumbnail.jpg",serviceDescription:"Users can book a meeting room through this app and apply for a membership that can make use of working space.",appIcons:["/portfolio/img/icon/typescript.svg","/portfolio/img/icon/react.svg","/portfolio/img/icon/firebase.svg","/portfolio/img/icon/sass.svg"],usages:[{headline:"User can check all meeting rooms",description:"Those meeting room data are fetched from Firebase Database",image:"/portfolio/img/portfolio/vd_search_meeting_room.jpg"},{headline:"Book a meeting room via through a form",description:"",image:"/portfolio/img/portfolio/vd_booking.jpg"},{headline:"Manage booking information that users applied for by admin-user",description:"Admin user can read and create, update the booking information on admin-page. This is built by react-admin with Firebase.",image:"/portfolio/img/portfolio/vd_admin_booking.jpg"},{headline:"The mail is sent to admin-user when use book a meeting room.",description:"This function is for admin-user not to overlook a booking user applied. This mail sending system is used by Firebase Functions",image:"/portfolio/img/portfolio/vd_mail.jpg"},{headline:"The booking is going to be fixed if admin-user allow",description:"Other users can make sure whether to book the room at time they want or not.",image:"/portfolio/img/portfolio/vd_schedule.jpg"},{headline:"User have to register to book the meeting",description:"The authentication to handle register and log-in, log-out rely on Firebase. This app verifies whether the email that user type in register page is true or not.",image:"/portfolio/img/portfolio/vd_register.jpg"}],features:[{headline:"Serverless apps",description:"This is a single page application by only react and firebase. I used React Hooks to handle data instead of Redux. I used react-admin and react-big-calendar that I connect with firebase."}],memo:"This app is not published yet because my client is making content and taking a photo. Also, I built this app for my client so that I don't plan to make this code public."},{id:2,serviceName:"Bizre",serviceThumbnail:"/portfolio/img/portfolio/bizre_thumbnail.jpg",serviceDescription:"This app is intended for a person who deal with real estate. They can advertise their properties that are on sale or rent at no cost.",appIcons:["/portfolio/img/icon/python.svg","/portfolio/img/icon/django.svg","/portfolio/img/icon/mysql.svg","/portfolio/img/icon/centos.svg"],usages:[{headline:"Search for a proprty by filtering area or station, cost and so on",description:"Users can store properties as favorites if they are logged-in.",image:"/portfolio/img/portfolio/bizre_searchlist.jpg"},{headline:"Check the information of a property in detail",description:"User can contact with the advertiser if they are interested in.",image:"/portfolio/img/portfolio/bizre_detail.jpg"},{headline:"Register this app by email-authentication",description:"User can use features of advertising property and storing property if they register. This app requires to verify their email that they input in register page as an authentication.User can use features of advertising property and storing property if they register. This app requires to verify their email that they input in register page as an authentication. This function is used by User authentication in Django.",image:"/portfolio/img/portfolio/bizre_register.jpg"},{headline:"Add their property as advertisement",description:"Users can add their property and advertise them at no cost if they register and admin-user allow. Of course, they update and delete their items. The term of advertising is  for only 40 days. Advertiser can receive notice of expiry date before 10 days and update expiry date during this 10days. If not, it will be automatically deleted on this app.",image:"/portfolio/img/portfolio/bizre_add_property.jpg"},{headline:"Set access permission for their property",description:"If advertiser want only some people to see their property, they can set access permission. If they do not have permit, it appears 403 page. In this If advertiser want only some people to see their property, they can set access permission. If they do not have permit, it appears 403 page. Users can sent an access request to an advertiser and users can watch the property if advertiser accepts the offer.",image:"/portfolio/img/portfolio/bizre_ar.jpg"},{headline:"send a mail that users might be interested in",description:"When a property is added, this app automatically send a mail to user that might have interest in this property according to user's area and needs. User can also register their needs for this mail.",image:"/portfolio/img/portfolio/bizre_mail.jpg"}],features:[{headline:"Test code by fixture and factory-boy",description:"This app has a lot of features so that it is more likely to happen bugs. To reduce this possibility, I focussed on writing test codes in particular for user authentication. ",image:"/portfolio/img/portfolio/bizre_testcode.jpg"},{headline:"Make the structure of files clean",description:"Take a look at above image. In general, the bigger a product is, the more complex the code is. To avoid this problem, I strictly followed MVC design pattern. In addition, divided folder by features and separated template files from apps."}],webUrl:"https://biz-re.com/",memo:"I developed this app for my client. Therefore, I don't plan to make this code public."},{id:3,serviceName:"Webdirector Blog",serviceThumbnail:"/portfolio/img/portfolio/wd_thumbnail.jpg",serviceDescription:"Users can book a meeting room through this app and apply for a membership that can make use of working space.",appIcons:["/portfolio/img/icon/python.svg","/portfolio/img/icon/django.svg","/portfolio/img/icon/mysql.svg","/portfolio/img/icon/centos.svg"],features:[{headline:"Get more articles without loading by REST API",description:"",image:"/portfolio/img/portfolio/wd_restapi.gif"},{headline:"Switch languages by i18n",description:"This blog can switch between Japanese and English. If an article is written by both languages, the post can switch languages. If not, move to top page in the languages.",image:"/portfolio/img/portfolio/wd_i18n.gif"},{headline:"SEO Friendly",description:"I am taking care of HTML markdown and structure of the URL path. Also, I set alternate tags in HTML because this blog supports two languages. To increase the speed of the blog, I set a cache for static files and reduce the weight of the images."}],webUrl:"https://webdirector-blog.com/en/",githubUrl:"https://github.com/nk18chi/webdirector-blog/"},{id:4,serviceName:"Portfolio",serviceThumbnail:"/portfolio/img/portfolio/portfolio.jpg",serviceDescription:"I introduce myself about what I can and my products on this page. This website is built by React and Github Hosting.",appIcons:["/portfolio/img/icon/typescript.svg","/portfolio/img/icon/react.svg","/portfolio/img/icon/github.svg","/portfolio/img/icon/sass.svg"],webUrl:"https://nk18chi.github.io/portfolio/",githubUrl:"https://github.com/nk18chi/portfolio"}],S=function(){var e=[{title:"Typescript & React",description:"I have experience in building a React app with Firebase. I am familiar with React Hooks. I can program by Javascript but I prefer typescript to javascript. It helps me to make apps safe and find the bug easily.",icons:["/portfolio/img/icon/typescript.svg","/portfolio/img/icon/react.svg"]},{title:"Python & Django",description:"I have experience in publishing some apps that are developed by Django and MySQL. Also, I can make use of Rest API to handle data from the database and write test cases by fixtures and factory-boy.",icons:["/portfolio/img/icon/python.svg","/portfolio/img/icon/django.svg"]},{title:"Data Analysis",description:"I know how to get data from google analytics by Python(via API) or BigQuery and data from the database by SQL. I can analyze how users use your product by investigating those data and come up with a new strategy.",icons:["/portfolio/img/icon/google-analytics.svg","/portfolio/img/icon/google-big-query.png","/portfolio/img/icon/sql.svg"]},{title:"Mobile Apps",description:"The experience in building web apps is bigger than one in mobile apps but I have knowledge of mobile apps as well and I am able to simple apps in iOS(Swift) and Android(Kotlin).",icons:["/portfolio/img/icon/apple.svg","/portfolio/img/icon/android.svg"]}],t=[{icon:o.a.createElement(x.a,null),title:"Passion for building apps",description:"I love building apps and thinking about how make users comfortable. I never stop learning and building the app even free time."},{icon:o.a.createElement(A.a,null),title:"Think efficiently",description:"I always keep looking for the way to reduce time. I love automation and effective-algorithm."},{icon:o.a.createElement(z.a,null),title:"Work together well",description:"I can smoothly work with a team from other departments because I have knowledge of not only building apps but also analysis and marketing, design etc."}];return o.a.createElement("article",{className:"main-column"},o.a.createElement("section",{id:"about-me",className:"about-me block"},o.a.createElement("div",{className:"summary-description"},o.a.createElement("h1",null,"Naoki Mita"),o.a.createElement("h3",null,"Software Developer / Data Analyst"),o.a.createElement("p",null,"I am a software developer specialized in frontend and backend development for web apps. Also, I have experience of being a data analyst. I believe I can help you to grow up your products in every aspect. Check out my portfolio and online resume.")),o.a.createElement("div",{className:"summary-image"},o.a.createElement("img",{className:"main-thumnail",src:"/portfolio/img/about_me.jpg",alt:""}))),o.a.createElement("section",{id:"skill-sets",className:"skill-sets block"},o.a.createElement("h2",null,"What I do"),o.a.createElement("p",null,"I have experience as a software developer and a data analyst for clients in Japan. Below is a quick overview of my technical skillsets and technologies I use. Check out my portfolio as well."),o.a.createElement("ul",null,e.length>0&&e.map((function(e){return o.a.createElement("li",{className:"four-elements"},o.a.createElement("div",null,o.a.createElement("ul",{className:"icon"},e.icons.length>0&&e.icons.map((function(e){return o.a.createElement("li",null,o.a.createElement("img",{className:"app-icon",src:e,alt:""}))})))),o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.description))})))),o.a.createElement("section",{id:"my-values",className:"block"},o.a.createElement("h2",null,"My Values"),o.a.createElement("ul",null,t.length>0&&t.map((function(e){return o.a.createElement("li",{className:"three-elements"},o.a.createElement("p",{className:"center app-big-icon"},e.icon),o.a.createElement("h3",{className:"center"},e.title),o.a.createElement("p",null,e.description))})))),o.a.createElement("section",{id:"portfolios",className:"portfolios block"},o.a.createElement("h2",null,"PortFolios"),o.a.createElement("ul",null,M.length>0&&M.map((function(e){return o.a.createElement("li",{className:"three-elements card"},o.a.createElement("img",{className:"portfolio-thumbnail",src:e.serviceThumbnail,alt:""}),o.a.createElement("div",{className:"portfolio-description"},o.a.createElement("h3",null,e.serviceName),o.a.createElement("p",null,e.serviceDescription),o.a.createElement("p",{className:"font-little-bold"},"Applications"),o.a.createElement("ul",{className:"icons-ul"},e.appIcons.length>0&&e.appIcons.map((function(e){return o.a.createElement("li",null,o.a.createElement("img",{className:"app-icon",src:e,alt:""}))}))),o.a.createElement("div",{className:"view-more"},o.a.createElement(U.a,{component:l.Link,to:"/portfolio/p_".concat(e.id,"/")}))))})))))},D=(a(65),a(43)),R=a.n(D),F=a(44),H=a.n(F);function P(){var e=Object(s.l)().pathname;return o.a.useEffect((function(){window.scrollTo(0,0)}),[e]),null}var q=function(e){var t=e.match.params.portfolio_id,a=M.find((function(e){return e.id===Number(t)}));return o.a.createElement("article",{className:"main-column"},o.a.createElement(P,null),o.a.createElement("section",{className:"portfolio-summary block"},o.a.createElement("div",{className:"summary-description"},o.a.createElement("h1",null,a.serviceName),o.a.createElement("p",null,a.serviceDescription),o.a.createElement("p",{className:"font-little-bold"},"Applications"),o.a.createElement("ul",{className:"icon"},a.appIcons.length>0&&a.appIcons.map((function(e){return o.a.createElement("li",null,o.a.createElement("img",{className:"app-icon",src:e,alt:""}))})))),o.a.createElement("div",{className:"summary-image"},o.a.createElement("img",{className:"main-thumnail",src:a.serviceThumbnail,alt:""}))),a.usages&&o.a.createElement("section",{className:"portfolio-detail block"},o.a.createElement("h2",null,"How to use"),a.usages.length>0&&a.usages.map((function(e){return o.a.createElement("div",{className:"portfolio--detail-container block"},o.a.createElement("h3",{className:"font-little-bold"},e.headline),e.image&&o.a.createElement("img",{className:"portfolio-detail-image",src:e.image,alt:""}),o.a.createElement("p",null,e.description),o.a.createElement("ul",null))}))),a.features&&o.a.createElement("section",{className:"portfolio-detail block"},o.a.createElement("h2",null,"Feature points"),a.features.length>0&&a.features.map((function(e){return o.a.createElement("div",{className:"portfolio--detail-container block"},o.a.createElement("h3",{className:"font-little-bold"},e.headline),e.image&&o.a.createElement("img",{className:"portfolio-detail-image",src:e.image,alt:""}),o.a.createElement("p",null,e.description),o.a.createElement("ul",null))}))),o.a.createElement("section",{className:"portfolio-links block"},o.a.createElement("h2",null,"Go to my app"),o.a.createElement("ul",null,a.webUrl&&o.a.createElement("li",null,o.a.createElement(c.a,{href:a.webUrl,className:"black-btn link-badge",variant:"contained",size:"large",startIcon:o.a.createElement(R.a,null)},"Visit webpage")),a.githubUrl&&o.a.createElement("li",null,o.a.createElement(c.a,{href:a.githubUrl,className:"black-btn link-badge",variant:"contained",size:"large",startIcon:o.a.createElement(H.a,null)},"See on GitHub")),a.appstoreUrl&&o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement(U.a,{href:a.appstoreUrl},o.a.createElement("img",{className:"app-store-badge",src:"/portfolio/img/app-store-badge.svg",alt:""})))),a.googleplayUrl&&o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement(U.a,{href:a.googleplayUrl},o.a.createElement("img",{className:"google-play-badge link-badge",src:"/portfolio/img/google-play-badge.png",alt:""}))))),a.memo&&o.a.createElement("p",null,"\u203b",a.memo)))};var B=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement(l.BrowserRouter,null,o.a.createElement(_,null),o.a.createElement(s.g,null,o.a.createElement(s.d,{exact:!0,path:"/portfolio/p_:portfolio_id",component:q}),o.a.createElement(s.d,{exact:!0,path:"/portfolio",component:S})))),o.a.createElement("footer",null,"2020 \xa9 Naoki Mita. All Rights Reserved."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.45e0fc2d.chunk.js.map