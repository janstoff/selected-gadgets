(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(151),c=n(142),u=["about","contact"],r=n(179),l=n.n(r),M=(n(180),n(182)),s=n.n(M),m=(n(32),n(147)),d=n.n(m),L=n(148),N=n(150),g=n.n(N),j=Object(c.d)(function(e){var t=e.to,n=e.children,a=e.intl.locale,i=d()(e,["to","children","intl"]),c=g.a[a].default?t:"selected-gadgets/"+a+t;return o.a.createElement(L.Link,Object.assign({},i,{to:c}),n)}),D=function(){return o.a.createElement("footer",{className:s.a.footer},o.a.createElement("div",{className:s.a.logoBox},o.a.createElement(j,{to:"/"},o.a.createElement("img",{src:n(185),alt:"Home"}))),o.a.createElement("div",{className:s.a.main},o.a.createElement("div",{className:s.a.elementWrapper},o.a.createElement("div",{className:s.a.navigation},(e=u,o.a.createElement("ul",null,e.map(function(e){return o.a.createElement("li",null,o.a.createElement(j,{className:s.a.link,to:"/#"+e},o.a.createElement(c.a,{id:e+"-header"})))}))))),o.a.createElement("div",{className:s.a.elementWrapper},o.a.createElement("div",{className:s.a.copyright},o.a.createElement(c.a,{id:"footer-copyright"})))));var e},y=n(186),z=n.n(y),w=(n(74),n(52),n(187),n(189)),C=n.n(w),I=n(191),T=n.n(I),E=n(23),p=function(e){var t=e.locale,n=Object.keys(g.a);return C.a.createElement("div",{className:T.a.languageSwitchContainer},n.map(function(e){return C.a.createElement("button",{key:e,disabled:e===t,className:e===t?T.a.switchBtnActive:T.a.switchBtn,onClick:function(){return Object(E.navigate)("de"===e?"/":"/en/")}},e)}))},x=n(7),b=n.n(x),P=n(192),h=n.n(P),v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t}b()(t,e);var a=t.prototype;return a.handleMenuClick=function(){var e=this;this.setState(function(t){return{menuOpen:!e.state.menuOpen}})},a.handleMenuHover=function(){this.setState(function(){return{menuOpen:!0}})},a.handleMenuClose=function(){this.setState(function(){return{menuOpen:!1}})},a.renderSectionLinks=function(e){var t=this;return this.state.menuOpen?o.a.createElement("ul",{className:h.a.menuList,onMouseLeave:function(){return t.handleMenuClose()}},e.map(function(e){return o.a.createElement(j,{to:"/#"+e},o.a.createElement(c.a,{id:e+"-header"}))})):null},a.render=function(){var e=this;return o.a.createElement("div",{className:h.a.menuContainer},o.a.createElement("button",{className:h.a.menuButton,onMouseEnter:function(){return e.handleMenuHover()},onClick:function(){return e.handleMenuClick()}},o.a.createElement("img",{src:n(193),alt:"Menu"})),this.renderSectionLinks(u))},t}(a.Component),Q=function(){return o.a.createElement(j,{className:z.a.homeLink,to:"/"},o.a.createElement("img",{src:n(194),alt:"Home"}))},k=function(e){var t=e.locale;return o.a.createElement("div",{className:z.a.header},o.a.createElement(p,{locale:t}),o.a.createElement(Q,null),o.a.createElement(v,null))},f=n(195),S=n.n(f),Z=n(196),A=n.n(Z),O={en:n(197),de:n(198)};Object(c.c)([].concat(S.a,A.a));var Y=function(){return o.a.createElement(j,{to:"/",style:{textDecoration:"none",color:"inherit"}},o.a.createElement(c.a,{id:"back-to-top-link"}))},U=function(e){var t=e.locale,n=e.children;return o.a.createElement(c.b,{locale:t,messages:O[t],textComponent:o.a.Fragment},o.a.createElement("div",{className:l.a.App},o.a.createElement(i.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Selected Gadgets")),o.a.createElement(k,{locale:t}),n,o.a.createElement(Y,null),o.a.createElement(D,null)))},B=n(199),G=n.n(B),K=n(200),H=n.n(K),J=function(e){var t=e.children,a=u[0];return o.a.createElement(j,{className:H.a.downButton,to:"/#"+a},t,o.a.createElement("img",{src:n(201),alt:"down"}))},W=function(e){var t=e.children,n=e.to;return o.a.createElement(j,{className:G.a.contactButton,to:n},t)},V=function(){return o.a.createElement(a.Fragment,null,o.a.createElement("header",{className:G.a.base},o.a.createElement("div",{className:G.a.heading},o.a.createElement("h1",null,o.a.createElement("span",{className:G.a.headingMain},o.a.createElement(c.a,{id:"brand-name"})),o.a.createElement("span",{className:G.a.headingSub},o.a.createElement(c.a,{id:"brand-heading-slogan"}))),o.a.createElement(W,{to:"/#contact"},o.a.createElement(c.a,{id:"contact-button-text"}))),o.a.createElement(J,null)))},F=n(202),X=n.n(F),R=n(203),q=n.n(R),$=function(e){var t=e.type,n=e.children;return o.a.createElement("button",{type:t,className:q.a.primaryButton},n)},_=n(204),ee=n.n(_),te=function(e){var t=e.id,n=e.children;return o.a.createElement("section",{id:t,className:ee.a.section},n)},ne=Object(c.d)(function(e){var t=e.intl.formatMessage;return o.a.createElement(te,{id:"contact"},o.a.createElement("form",{action:"https://formspree.io/jan.steinhoff@gmail.com",method:"POST"},o.a.createElement("h1",null,o.a.createElement(c.a,{id:"contact-header"})),o.a.createElement("div",null,o.a.createElement("div",{className:X.a.formGroup},o.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"email"}),o.a.createElement("label",{htmlFor:"email"},"email")),o.a.createElement("div",{className:X.a.formGroup},o.a.createElement("input",{name:"name",required:!0,placeholder:"name"}),o.a.createElement("label",{htmlFor:"name"},"name"))),o.a.createElement("div",{className:X.a.formGroup},o.a.createElement("textarea",{name:"message",required:!0,placeholder:t({id:"message-label"})}),o.a.createElement("label",{htmlFor:"message"},o.a.createElement(c.a,{id:"message-label"}))),o.a.createElement("div",{className:X.a.formGroup},o.a.createElement($,{type:"submit"},o.a.createElement(c.a,{id:"send-button-text"})))))}),ae=function(){return o.a.createElement(te,{id:"about"},o.a.createElement("h1",null,o.a.createElement(c.a,{id:"about-headline"})),o.a.createElement("p",null,o.a.createElement(c.a,{id:"about-body"})))};"undefined"!=typeof window&&n(205)('a[href*="#"]',{speed:100,speedAsDuration:!0});t.default=function(e){var t=e.pathContext.locale;return o.a.createElement(U,{locale:t},o.a.createElement(V,null),o.a.createElement(ae,null),o.a.createElement(ne,null))}},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return L}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return d});var a=n(0),o=n.n(a),i=n(4),c=n.n(i),u=n(143),r=n.n(u);n.d(t,"Link",function(){return r.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(149),M=n.n(l);n.d(t,"PageRenderer",function(){return M.a});var s=n(48);n.d(t,"parsePath",function(){return s.a});var m=o.a.createContext({}),d=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function L(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},149:function(e,t,n){var a;e.exports=(a=n(184))&&a.default||a},150:function(e,t){e.exports={de:{path:"de",locale:"Deutsch",default:!0},en:{path:"en",locale:"English"}}},159:function(e,t){},167:function(e,t){},174:function(e,t){},179:function(e,t,n){e.exports={App:"app-module--App--rA98j"}},182:function(e,t,n){e.exports={footer:"footer-module--footer--3c7ub",logoBox:"footer-module--logoBox--1abZE",main:"footer-module--main--xrgD8",elementWrapper:"footer-module--elementWrapper--26Wt9",navigation:"footer-module--navigation--jjZrb",copyright:"footer-module--copyright--y0VJ9",link:"footer-module--link--2d0g3"}},184:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),o=n.n(a),i=n(4),c=n.n(i),u=n(68),r=n(2),l=function(e){var t=e.location,n=r.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},185:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjZjVmNWY1Ij4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA2LjU1NSwyMDguMDY0TDI2My44NTksMzAuMzY3Yy00LjY4LTMuNDI2LTExLjAzOC0zLjQyNi0xNS43MTYsMEw1LjQ0NSwyMDguMDY0DQoJCQljLTUuOTI4LDQuMzQxLTcuMjE2LDEyLjY2NS0yLjg3NSwxOC41OTNzMTIuNjY2LDcuMjE0LDE4LjU5MywyLjg3NUwyNTYsNTcuNTg4bDIzNC44MzcsMTcxLjk0M2MyLjM2OCwxLjczNSw1LjEyLDIuNTcsNy44NDgsMi41Nw0KCQkJYzQuMDk2LDAsOC4xMzgtMS44ODUsMTAuNzQ0LTUuNDQ1QzUxMy43NzEsMjIwLjcyOSw1MTIuNDgzLDIxMi40MDUsNTA2LjU1NSwyMDguMDY0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDQyLjI0NiwyMzIuNTQzYy03LjM0NiwwLTEzLjMwMyw1Ljk1Ni0xMy4zMDMsMTMuMzAzdjIxMS43NDlIMzIyLjUyMVYzNDIuMDA5YzAtMzYuNjgtMjkuODQyLTY2LjUyLTY2LjUyLTY2LjUyDQoJCQlzLTY2LjUyLDI5Ljg0Mi02Ni41Miw2Ni41MnYxMTUuNTg3SDgzLjA1OFYyNDUuODQ3YzAtNy4zNDctNS45NTctMTMuMzAzLTEzLjMwMy0xMy4zMDNzLTEzLjMwMyw1Ljk1Ni0xMy4zMDMsMTMuMzAzdjIyNS4wNTMNCgkJCWMwLDcuMzQ3LDUuOTU3LDEzLjMwMywxMy4zMDMsMTMuMzAzaDEzMy4wMjljNi45OTYsMCwxMi43MjEtNS40MDUsMTMuMjUxLTEyLjI2N2MwLjAzMi0wLjMxMSwwLjA1Mi0wLjY1MSwwLjA1Mi0xLjAzNnYtMTI4Ljg5DQoJCQljMC0yMi4wMDksMTcuOTA1LTM5LjkxNCwzOS45MTQtMzkuOTE0czM5LjkxNCwxNy45MDYsMzkuOTE0LDM5LjkxNHYxMjguODljMCwwLjM4MywwLjAyLDAuNzE3LDAuMDUyLDEuMDI0DQoJCQljMC41MjQsNi44NjcsNi4yNTEsMTIuMjc5LDEzLjI1MSwxMi4yNzloMTMzLjAyOWM3LjM0NywwLDEzLjMwMy01Ljk1NiwxMy4zMDMtMTMuMzAzVjI0NS44NDcNCgkJCUM0NTUuNTQ5LDIzOC40OTksNDQ5LjU5MywyMzIuNTQzLDQ0Mi4yNDYsMjMyLjU0M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},186:function(e,t,n){e.exports={header:"header-module--header--1985H",homeLink:"header-module--homeLink--3KycI"}},191:function(e,t,n){e.exports={languageSwitchContainer:"languageSelect-module--languageSwitchContainer--3nNBD",switchBtn:"languageSelect-module--switchBtn--3iTCk",switchBtnActive:"languageSelect-module--switchBtnActive--1IJk-"}},192:function(e,t,n){e.exports={menuContainer:"navigationMenu-module--menuContainer--3R6jp",menuList:"navigationMenu-module--menuList--37YoW",menuButton:"navigationMenu-module--menuButton--3eE3h"}},193:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2Y1ZjVmNSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTIsMTMuNWg0OWMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkgyYy0xLjEwNCwwLTIsMC44OTYtMiwyUzAuODk2LDEzLjUsMiwxMy41eiIvPg0KCQk8cGF0aCBkPSJNMiwyOC41aDQ5YzEuMTA0LDAsMi0wLjg5NiwyLTJzLTAuODk2LTItMi0ySDJjLTEuMTA0LDAtMiwwLjg5Ni0yLDJTMC44OTYsMjguNSwyLDI4LjV6Ii8+DQoJCTxwYXRoIGQ9Ik0yLDQzLjVoNDljMS4xMDQsMCwyLTAuODk2LDItMnMtMC44OTYtMi0yLTJIMmMtMS4xMDQsMC0yLDAuODk2LTIsMlMwLjg5Niw0My41LDIsNDMuNXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},194:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjMmMyYjJiIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA2LjU1NSwyMDguMDY0TDI2My44NTksMzAuMzY3Yy00LjY4LTMuNDI2LTExLjAzOC0zLjQyNi0xNS43MTYsMEw1LjQ0NSwyMDguMDY0DQoJCQljLTUuOTI4LDQuMzQxLTcuMjE2LDEyLjY2NS0yLjg3NSwxOC41OTNzMTIuNjY2LDcuMjE0LDE4LjU5MywyLjg3NUwyNTYsNTcuNTg4bDIzNC44MzcsMTcxLjk0M2MyLjM2OCwxLjczNSw1LjEyLDIuNTcsNy44NDgsMi41Nw0KCQkJYzQuMDk2LDAsOC4xMzgtMS44ODUsMTAuNzQ0LTUuNDQ1QzUxMy43NzEsMjIwLjcyOSw1MTIuNDgzLDIxMi40MDUsNTA2LjU1NSwyMDguMDY0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDQyLjI0NiwyMzIuNTQzYy03LjM0NiwwLTEzLjMwMyw1Ljk1Ni0xMy4zMDMsMTMuMzAzdjIxMS43NDlIMzIyLjUyMVYzNDIuMDA5YzAtMzYuNjgtMjkuODQyLTY2LjUyLTY2LjUyLTY2LjUyDQoJCQlzLTY2LjUyLDI5Ljg0Mi02Ni41Miw2Ni41MnYxMTUuNTg3SDgzLjA1OFYyNDUuODQ3YzAtNy4zNDctNS45NTctMTMuMzAzLTEzLjMwMy0xMy4zMDNzLTEzLjMwMyw1Ljk1Ni0xMy4zMDMsMTMuMzAzdjIyNS4wNTMNCgkJCWMwLDcuMzQ3LDUuOTU3LDEzLjMwMywxMy4zMDMsMTMuMzAzaDEzMy4wMjljNi45OTYsMCwxMi43MjEtNS40MDUsMTMuMjUxLTEyLjI2N2MwLjAzMi0wLjMxMSwwLjA1Mi0wLjY1MSwwLjA1Mi0xLjAzNnYtMTI4Ljg5DQoJCQljMC0yMi4wMDksMTcuOTA1LTM5LjkxNCwzOS45MTQtMzkuOTE0czM5LjkxNCwxNy45MDYsMzkuOTE0LDM5LjkxNHYxMjguODljMCwwLjM4MywwLjAyLDAuNzE3LDAuMDUyLDEuMDI0DQoJCQljMC41MjQsNi44NjcsNi4yNTEsMTIuMjc5LDEzLjI1MSwxMi4yNzloMTMzLjAyOWM3LjM0NywwLDEzLjMwMy01Ljk1NiwxMy4zMDMtMTMuMzAzVjI0NS44NDcNCgkJCUM0NTUuNTQ5LDIzOC40OTksNDQ5LjU5MywyMzIuNTQzLDQ0Mi4yNDYsMjMyLjU0M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},197:function(e){e.exports={company:"company","company-name":"sg GmbH","brand-name":"selected gadgets","brand-heading-slogan":"from today's most innovative startup companies","contact-button-text":"GET IN TOUCH","contact-header":"contact","contact-headline":"Say Hi!","about-header":"about","about-headline":"who and what we are...","about-body":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","landing-header":"home","message-label":"message","send-button-text":"send","back-to-top-link":"back to top","learn-more-button-text":"learn more...","footer-copyright":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna..."}},198:function(e){e.exports={company:"Unternehmen","company-name":"sg GmbH","brand-name":"selected gadgets","brand-heading-slogan":"von den krassesten startups","contact-button-text":"SCHREIB' UNS","contact-header":"kontakt","contact-headline":"Sag hallo!","about-header":"über uns","about-headline":"wer und was wir sind...","about-body":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","landing-header":"start","message-label":"deine Nachricht","send-button-text":"absenden","back-to-top-link":"zurück nach oben","learn-more-button-text":"hier mehr...","footer-copyright":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna..."}},199:function(e,t,n){e.exports={base:"landing-module--base--1fjCH",heading:"landing-module--heading--1lBsk",headingMain:"landing-module--headingMain--2rqdq",moveInLeft:"landing-module--moveInLeft--2QRaZ",headingSub:"landing-module--headingSub--14ZZ3",moveInRight:"landing-module--moveInRight--3PNOf",contactButton:"landing-module--contactButton--2L0u8",fadeIn:"landing-module--fadeIn--3J3li"}},200:function(e,t,n){e.exports={downButton:"downButton-module--downButton--2I29A"}},201:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNWY1YTVhIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA5LjEyMSwxMjUuOTY2Yy0zLjgzOC0zLjgzOC0xMC4wNTUtMy44MzgtMTMuODkzLDBMMjU2LjAwNSwzNjUuMTk0TDE2Ljc3MSwxMjUuOTY2Yy0zLjgzOC0zLjgzOC0xMC4wNTUtMy44MzgtMTMuODkzLDANCgkJCWMtMy44MzgsMy44MzgtMy44MzgsMTAuMDU1LDAsMTMuODkzbDI0Ni4xOCwyNDYuMTc1YzEuODQyLDEuODQyLDQuMzM3LDIuODc4LDYuOTQ3LDIuODc4YzIuNjEsMCw1LjEwNC0xLjAzNiw2Ljk0Ni0yLjg3OA0KCQkJbDI0Ni4xNy0yNDYuMTc1QzUxMi45NTksMTM2LjAyMSw1MTIuOTU5LDEyOS44MDQsNTA5LjEyMSwxMjUuOTY2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"},202:function(e,t,n){e.exports={formGroup:"contact-module--formGroup--170LP"}},203:function(e,t,n){e.exports={primaryButton:"primaryButton-module--primaryButton--1f80h"}},204:function(e,t,n){e.exports={section:"section-module--section--2OkR9"}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fcf4245eff84a42c3912.js.map