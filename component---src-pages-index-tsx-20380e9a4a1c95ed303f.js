(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QeBL:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return j}));var n=i("dI71"),o=i("q1tI"),l=i("+ego"),a=i("vOnD"),r=i("TBFr"),d=a.a.iframe.withConfig({displayName:"DemoSliderComponents__DemoIFrame",componentId:"sc-1olhyb2-0"})(["width:100%;height:calc(100% - 200px);border:none;@media (min-width:1024px){height:calc(100% - 180px);}"]),c=(a.a.a.withConfig({displayName:"DemoSliderComponents__DemoLink",componentId:"sc-1olhyb2-1"})([""]),Object(a.a)(r.b).withConfig({displayName:"DemoSliderComponents__DemoFooterContainer",componentId:"sc-1olhyb2-2"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;flex-direction:column-reverse;@media (min-width:768px){flex-direction:row;}"])),p=a.a.div.withConfig({displayName:"DemoSliderComponents__SliderControls",componentId:"sc-1olhyb2-3"})(["display:flex;justify-content:space-around;padding:16px 0;width:100%;flex-direction:row;@media (min-width:768px){width:auto;}"]),s=a.a.a.withConfig({displayName:"DemoSliderComponents__SliderLink",componentId:"sc-1olhyb2-4"})(["line-height:40px;font-size:16px;cursor:",";color:",";font-weight:800;padding:0 16px;:last-of-type{text-align:right;}@media (min-width:768px) and (max-width:1199px){line-height:80px;font-size:24px;}@media (min-width:1200px){line-height:180px;font-size:24px;:last-of-type{margin-left:40px;}}"],(function(e){return e.disabled?"default":"pointer"}),(function(e){return e.disabled?"#e1e1e1":"#fc4275"})),m=a.a.section.withConfig({displayName:"Container__DemoContainer",componentId:"sc-1v6gplg-0"})(["height:calc(100% - 100px);"]),h=a.a.div.withConfig({displayName:"ProjectCard",componentId:"sc-8hzhuj-0"})(["z-index:1;position:relative;background-color:#fff;padding:16px;width:calc(100% - 32px);@media (min-width:768px) and (max-width:1023px){max-width:50%;}@media (min-width:1024px){padding:25px 40px;width:auto;min-width:450px;top:-58px;left:-40px;}"]),u=a.a.h1.withConfig({displayName:"ProjectCard__ProjectCardHeader",componentId:"sc-8hzhuj-1"})(["margin-top:0;margin-bottom:10px;font-size:20px;font-weight:800;@media (min-width:768px){font-size:28px;}"]),f=a.a.p.withConfig({displayName:"ProjectCard__ProjectCardBody",componentId:"sc-8hzhuj-2"})(['font-family:"PlayFair Display";margin-top:10px;font-size:16px;@media (min-width:768px){font-size:22px;}']),g=a.a.ul.withConfig({displayName:"ProjectCard__ProjectCardMenu",componentId:"sc-8hzhuj-3"})(["list-style:none;display:flex;padding-left:0;"]),x=a.a.li.withConfig({displayName:"ProjectCard__ProjectCardMenuItem",componentId:"sc-8hzhuj-4"})(["margin-right:15px;"]),b=h,w=i("nQb1"),y=[{title:"little-synth",slug:"little-synth",description:"Tone.js synth experiment",iframeUrl:"https://naffiq.github.io/little-synth/",links:[{label:"Source code",url:"https://github.com/naffiq/little-synth"}]},{title:"Eblett",slug:"eblett",description:"Molly @ Haarlem, 2018",iframeUrl:"https://naffiq.github.io/eblett/",links:[{label:"Source code",url:"https://github.com/naffiq/eblett"}]},{title:"Motherland",slug:"3d-globe",description:"First three.js experiment",iframeUrl:"https://naffiq.github.io/3d-globe/",links:[{label:"Source code",url:"https://github.com/naffiq/3d-globe"}]},{title:"The world we're living in",slug:"bubble-data",description:"Styding D3.js by Demographic data visualization",iframeUrl:"https://naffiq.github.io/bubble-data/",links:[{label:"Source code",url:"https://github.com/naffiq/bubble-data"}]},{title:"TicTacToe",slug:"tic-tac-toe",description:"Small React app used to polish Jest. (Uses heroku, might take a while to load)",iframeUrl:"https://naffiq.github.io/tic-tac-toe/",links:[{label:"Source code",url:"https://github.com/naffiq/tic-tac-toe"}]}],C=function(){var e=function(){var e=Object(o.useState)(0),t=e[0],i=e[1],n=t<y.length-1,l=t>0;return{project:y[t],hasNextSlide:n,hasPrevSlide:l,onNextSlideClick:function(){n&&i(t+1)},onPrevSlideClick:function(){l&&i(t-1)}}}(),t=e.project,i=e.hasNextSlide,n=e.hasPrevSlide,l=e.onNextSlideClick,a=e.onPrevSlideClick;return o.createElement(m,null,o.createElement(d,{src:t.iframeUrl,title:t.title}),o.createElement("div",null,o.createElement(c,null,o.createElement(b,null,o.createElement(u,null,t.title),o.createElement(f,null,t.description),o.createElement(g,null,t.links.map((function(e,t){return o.createElement(x,{key:t},o.createElement(w.a,{target:"_blank",rel:"noopener noreferrer",href:e.url},e.label))})))),o.createElement(p,null,o.createElement(s,{disabled:!n,onClick:a},"← previous"),o.createElement(s,{disabled:!i,onClick:l},"next →")))))},j=function(e){function t(t,i){return e.call(this,t,i)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.createElement(l.a,null,o.createElement(C,null))},t}(o.Component)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-20380e9a4a1c95ed303f.js.map