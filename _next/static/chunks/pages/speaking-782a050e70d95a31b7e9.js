(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{7312:function(e,n,t){"use strict";t.d(n,{A:function(){return c}});var r=t(5893),i=function(){return(0,r.jsxs)("footer",{children:[(0,r.jsx)("span",{style:{fontWeight:"normal"}}),(0,r.jsxs)("p",{children:["About the site: Hosted on ",(0,r.jsx)("a",{href:"https://pages.github.com/",target:"blank",children:" GitHub Pages"}),". Theme by ",(0,r.jsx)("a",{href:"https://github.com/orderedlist",rel:"noreferrer",target:"_blank",children:"orderedlist."})," Theme modified by Ravi Kumar."]})]})},a=t(1664),o=function(){return(0,r.jsxs)("div",{className:"header",children:[(0,r.jsxs)("h1",{children:["Ravi Kumar, ",(0,r.jsx)("a",{href:"https://twitter.com/RaviNepal",rel:"noreferrer",target:"_blank",children:"@RaviNepal"})]}),(0,r.jsxs)("p",{className:"alignright",children:[(0,r.jsx)(a.default,{href:"/",children:" Home "})," ",(0,r.jsx)(a.default,{href:"/projects",children:" | Projects"})," ",(0,r.jsx)(a.default,{href:"/speaking",children:" | Speaking "})," ",(0,r.jsx)(a.default,{href:"/blogs",children:" | Blog "})," ",(0,r.jsx)(a.default,{href:"/media",children:" | Media "})," ",(0,r.jsx)(a.default,{href:"/contact",children:" | Contact"})," "]}),(0,r.jsx)("div",{style:{clear:"both"}})]})},l=t(9008),s=function(){return(0,r.jsxs)(l.default,{children:[(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("title",{children:"Ravi Kumar, @RaviNepal"}),(0,r.jsx)("meta",{name:"description",content:"Ravi Kumar, @RaviNepal's Personal Portfilio."}),(0,r.jsx)("link",{rel:"icon",href:"/images/ravi.jpg"}),(0,r.jsx)("meta",{property:"og:image",content:""})]})},c=function(e){var n=e.children;return(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsx)(o,{}),(0,r.jsx)(s,{}),n,(0,r.jsx)(i,{})]})}},2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var i,a=(i=t(7294))&&i.__esModule?i:{default:i},o=t(1063),l=t(4651),s=t(7426);var c={};function u(e,n,t,r){if(e&&o.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(i?"%"+i:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,i=l.useRouter(),d=a.default.useMemo((function(){var n=o.resolveHref(i,e.href,!0),t=r(n,2),a=t[0],l=t[1];return{href:a,as:e.as?o.resolveHref(i,e.as):l||a}}),[i,e.href,e.as]),f=d.href,h=d.as,p=e.children,j=e.replace,x=e.shallow,v=e.scroll,g=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var m=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,y=s.useIntersection({rootMargin:"200px"}),b=r(y,2),k=b[0],C=b[1],M=a.default.useCallback((function(e){k(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,k]);a.default.useEffect((function(){var e=C&&t&&o.isLocalURL(f),n="undefined"!==typeof g?g:i&&i.locale,r=c[f+"%"+h+(n?"%"+n:"")];e&&!r&&u(i,f,h,{locale:n})}),[h,f,C,g,t,i]);var w={ref:M,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,a,l,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[i?"replace":"push"](t,r,{shallow:a,locale:s,scroll:l}))}(e,i,f,h,j,x,v,g)},onMouseEnter:function(e){o.isLocalURL(f)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(i,f,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof g?g:i&&i.locale,E=i&&i.isLocaleDomain&&o.getDomainLocale(h,N,i&&i.locales,i&&i.domainLocales);w.href=E||o.addBasePath(o.addLocale(h,N,i&&i.defaultLocale))}return a.default.cloneElement(n,w)};n.default=d},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,s=i.useRef(),c=i.useState(!1),u=r(c,2),d=u[0],f=u[1],h=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||d||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,a=r.observer,o=r.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),l.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return i.useEffect((function(){if(!o&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[h,d]};var i=t(7294),a=t(3447),o="undefined"!==typeof IntersectionObserver;var l=new Map},8997:function(e,n,t){"use strict";t.r(n);var r=t(7312),i=t(1664),a=t(5893);n.default=function(){return(0,a.jsx)(r.A,{children:(0,a.jsxs)("span",{style:{fontWeight:"normal"},children:[(0,a.jsxs)("p",{children:[" ",(0,a.jsx)("br",{})," Here are selected speaking engagements \u2014 topics include open data, civic technology, entrepreneurship, social media, social good, strategic crisis communications, youth empowerment, and digtial literacy. ",(0,a.jsx)(i.default,{href:"/contact",children:" Contact"})," for availability. "]}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Panelist: Social entrepreneurship, World Bank Global Youth Summit, August 2018 "}),(0,a.jsx)("p",{}),(0,a.jsx)("li",{children:"Keynote guest lecturer: Social entrepreneurship, The Fund for American Studies, Washington, D.C., July 2017 "}),(0,a.jsx)("p",{}),(0,a.jsx)("li",{children:"Speaker: How to use digital tool and data to unleash the potential of Nepal,  Ace Institute of Management, Kathmandu, February 2017"}),(0,a.jsx)("p",{}),(0,a.jsx)("li",{children:" Speaker, 6th Annual Social Media Technology Conference & Workshop: How to use social media, data & SMS to help during a natural or man made crisis, Washington, D.C., October 2016"}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:"Moderator: Social Media and Social Good, Social Media Weekend, New York City, June 2016, "}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:" Presenter and Co-Chair, Making it Count: Effective Use of Data by Nonprofits, Open Data Day, Washington, D.C. March 2016 "}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:" Social Media and Social Entrepreneurship, Dartmouth College, February, 2016 "}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:" Panelist at \u201cA discussion on digital crisis communications,\u201d White House Office of the Chief of Protocol, Washington, D.C., June 2015 "}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:" Entrepreneurship and future of BitCoin with Haseeb Awan, Digital Youth Summit, Pakistan, May 2015 "}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:" Panelist, \u201cPutting your journalism skills to use in other careers,\u201d Columbia University, April 2015 "}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:" Moderator, Global Forum on Entrepreneurship, World Bank, August 2014 "}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:" Facilitator and Trainer, Digital Literacy Workshop, Code for Nepal, Kathmandu, Nepal, August 2014 "}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:" Guest speaker, MBA class, Don Bosco College, Kathmandu, Nepal, January 2014 "}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:" Panelist at \u201cThe role of open data in fragile states and conflict situations,\u201d World Bank, Washington, D.C., March 2014  "}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:" Academic and Cultural Series Speaker at Buena Vista University, Iowa, November 2013 "}),(0,a.jsx)("p",{children:" "}),(0,a.jsx)("li",{children:" Panelist at Youth to Youth Event at the World Bank, World Bank, Washington, D.C., May 2013 "})]})]})})}},475:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/speaking",function(){return t(8997)}])},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=475,e(e.s=n);var n}));var n=e.O();_N_E=n}]);