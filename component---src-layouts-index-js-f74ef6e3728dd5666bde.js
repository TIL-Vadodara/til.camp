webpackJsonp([0x67ef26645b2a,60335399758886],{142:function(e,t){e.exports={data:{site:{siteMetadata:{title:"TIL: Today I Learned"}}},layoutContext:{}}},287:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=r(i),u=n(295),l=r(u),c=n(142),f=r(c);t.default=function(e){return a.default.createElement(l.default,o({},e,f.default))},e.exports=t.default},303:function(e,t,n){e.exports={default:n(313),__esModule:!0}},305:function(e,t,n){e.exports={default:n(315),__esModule:!0}},309:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(303),i=r(o);t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},310:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},313:function(e,t,n){n(338),e.exports=n(24).Object.assign},315:function(e,t,n){n(340),e.exports=n(24).Object.keys},328:function(e,t,n){"use strict";var r=n(59),o=n(119),i=n(87),a=n(124),u=n(220),l=Object.assign;e.exports=!l||n(45)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=r})?function(e,t){for(var n=a(e),l=arguments.length,c=1,f=o.f,s=i.f;l>c;)for(var d,p=u(arguments[c++]),T=f?r(p).concat(f(p)):r(p),h=T.length,y=0;h>y;)s.call(p,d=T[y++])&&(n[d]=p[d]);return n}:l},332:function(e,t,n){var r=n(44),o=n(24),i=n(45);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},338:function(e,t,n){var r=n(44);r(r.S+r.F,"Object",{assign:n(328)})},340:function(e,t,n){var r=n(124),o=n(59);n(332)("keys",function(){return function(e){return o(r(e))}})},381:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var s=u(e),d=u(t)}catch(e){return!1}if(s.length!=d.length)return!1;for(s.sort(),d.sort(),i=s.length-1;i>=0;i--)if(s[i]!=d[i])return!1;for(i=s.length-1;i>=0;i--)if(f=s[i],!c(e[f],t[f],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(383),l=n(382),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},382:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},383:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},390:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},242:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return i(O+e)}function i(e){return e.replace(/^\/\//g,"/")}function a(e,t){var n=(0,S.createLocation)(e,null,null,t.location);return n.pathname=o(n.pathname),n}t.__esModule=!0,t.navigateTo=void 0;var u=n(309),l=r(u),c=n(305),f=r(c),s=n(310),d=r(s),p=n(85),T=r(p),h=n(114),y=r(h),m=n(113),E=r(m);t.withPrefix=o;var _=n(1),g=r(_),b=n(104),v=n(3),A=r(v),S=n(34),O="/",w={activeClassName:A.default.string,activeStyle:A.default.object,exact:A.default.bool,strict:A.default.bool,isActive:A.default.func,location:A.default.object},M=function(e,t){var n=new window.IntersectionObserver(function(r){r.forEach(function(r){e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},P=function(e){function t(n,r){(0,T.default)(this,t);var o=(0,y.default)(this,e.call(this)),i=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0);var u=r.router.history,l=a(n.to,u);return o.state={path:(0,S.createPath)(l),to:l,IOSupported:i},o.handleRef=o.handleRef.bind(o),o}return(0,E.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=a(e.to,history);this.setState({path:(0,S.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&M(e,function(){___loader.enqueue(t.state.to.pathname)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,r=(0,d.default)(t,["onClick"]),o=void 0;return o=(0,f.default)(w).some(function(t){return e.props[t]})?b.NavLink:b.Link,g.default.createElement(o,(0,l.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var r=e.state.path;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),i=document.getElementById(o);return null!==i?(i.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},r,{to:this.state.to,innerRef:this.handleRef}))},t}(g.default.Component);P.propTypes=(0,l.default)({},w,{innerRef:A.default.func,onClick:A.default.func,to:A.default.oneOfType([A.default.string,A.default.object]).isRequired}),P.contextTypes={router:A.default.object},t.default=P;t.navigateTo=function(e){window.___navigateTo(e)}},500:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),d=n(3),p=r(d),T=n(521),h=r(T),y=n(381),m=r(y),E=n(501),_=n(270),g=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,m.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case _.TAG_NAMES.SCRIPT:case _.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case _.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case _.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=a,t.titleAttributes=l({},i),t));case _.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},i)});case _.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},i)})}return l({},o,(n={},n[r.type]=l({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),l=(0,E.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case _.TAG_NAMES.LINK:case _.TAG_NAMES.META:case _.TAG_NAMES.NOSCRIPT:case _.TAG_NAMES.SCRIPT:case _.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=l({},r);return n&&(i=this.mapChildrenToProps(n,i)),s.default.createElement(e,i)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,E.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},v=(0,h.default)(E.reducePropsToState,E.handleClientStateChange,E.mapStateOnServer)(b),A=g(v);A.renderStatic=A.rewind,t.Helmet=A,t.default=A},270:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},501:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),u=r(a),l=n(8),c=r(l),f=n(270),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=m(e,f.TAG_NAMES.TITLE),n=m(e,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=m(e,f.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return m(e,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},h=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[f.TAG_NAMES.BASE]}).map(function(e){return e[f.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},y=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],l=u.toLowerCase();t.indexOf(l)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===f.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],l=(0,c.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},E=function(e){return{baseTag:h([f.TAG_PROPERTIES.HREF],e),bodyAttributes:T(f.ATTRIBUTE_NAMES.BODY,e),defer:m(e,f.HELMET_PROPS.DEFER),encode:m(e,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(f.ATTRIBUTE_NAMES.HTML,e),linkTags:y(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],e),metaTags:y(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:y(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:y(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],e),styleTags:y(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(f.ATTRIBUTE_NAMES.TITLE,e)}},_=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){_(t)},0)}}(),g=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||_:e.requestAnimationFrame||_,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,O=function(e){S&&v(S),e.defer?S=b(function(){w(e,function(){S=null})}):(w(e),S=null)},w=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,s=e.styleTags,d=e.title,p=e.titleAttributes;R(f.TAG_NAMES.BODY,r),R(f.TAG_NAMES.HTML,o),P(d,p);var T={baseTag:C(f.TAG_NAMES.BASE,n),linkTags:C(f.TAG_NAMES.LINK,i),metaTags:C(f.TAG_NAMES.META,a),noscriptTags:C(f.TAG_NAMES.NOSCRIPT,u),scriptTags:C(f.TAG_NAMES.SCRIPT,c),styleTags:C(f.TAG_NAMES.STYLE,s)},h={},y={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(y[e]=T[e].oldTags)}),t&&t(),l(e,h,y)},M=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),R(f.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var l=a[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var s=i.indexOf(l);s!==-1&&i.splice(s,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,a.join(","))}},C=function(e,t){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},j=function(e,t,n,r){var o=I(n),i=M(t);return o?"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+f.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"},N=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===f.TAG_PROPERTIES.INNER_HTML||e===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=f.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.REACT_TAG_MAP[n]||n]=e[n],t},t)},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[f.HELMET_ATTRIBUTE]=!0,r),i=x(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,i,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=f.REACT_TAG_MAP[e]||e;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},k=function(e,t,n){switch(e){case f.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return j(e,t.title,t.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return x(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return N(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,s=e.title,d=void 0===s?"":s,p=e.titleAttributes;return{base:k(f.TAG_NAMES.BASE,t,r),bodyAttributes:k(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(f.ATTRIBUTE_NAMES.HTML,o,r),link:k(f.TAG_NAMES.LINK,i,r),meta:k(f.TAG_NAMES.META,a,r),noscript:k(f.TAG_NAMES.NOSCRIPT,u,r),script:k(f.TAG_NAMES.SCRIPT,l,r),style:k(f.TAG_NAMES.STYLE,c,r),title:k(f.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=L,t.handleClientStateChange=O,t.mapStateOnServer=B,t.reducePropsToState=E,t.requestAnimationFrame=b,t.warn=A}).call(t,function(){return this}())},271:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){return t={exports:{}},e(t,t.exports),t.exports}function i(e){return function(){return e}}function a(e,t,n,r,o,i,a,u){if(d(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,u],f=0;l=new Error(t.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}function u(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function l(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var c=r(n(1)),f=function(){};f.thatReturns=i,f.thatReturnsFalse=i(!1),f.thatReturnsTrue=i(!0),f.thatReturnsNull=i(null),f.thatReturnsThis=function(){return this},f.thatReturnsArgument=function(e){return e};var s=f,d=function(e){},p=a,T=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,m=(l()?Object.assign:function(e,t){for(var n,r,o=u(e),i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var a in n)h.call(n,a)&&(o[a]=n[a]);if(T){r=T(n);for(var l=0;l<r.length;l++)y.call(n,r[l])&&(o[r[l]]=n[r[l]])}}return o},"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"),E=m,_=function(){function e(e,t,n,r,o,i){i!==E&&p(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=s,n.PropTypes=n,n},g=o(function(e){e.exports=_()}),b="production",v=function(e,t,n,r,o,i,a,u){if("production"!==b&&void 0===t)throw new Error("invariant requires an error message argument");if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,u],f=0;l=new Error(t.replace(/%s/g,function(){return c[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},A=v,S=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},O=S,w=function(e){var t=/[height|width]$/;return t.test(e)},M=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,o){var i=e[r];r=O(r),w(r)&&"number"==typeof i&&(i+="px"),t+=i===!0?r:i===!1?"not "+r:"("+r+": "+i+")",o<n.length-1&&(t+=" and ")}),t},P=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(n,r){t+=M(n),r<e.length-1&&(t+=", ")}),t):M(e)},R=P,C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},j=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},N=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},x=function(e){function t(){var n,r,o;I(this,t);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return n=r=N(this,e.call.apply(e,[this].concat(a))),r.state={matches:r.props.defaultMatches},r.updateMatches=function(){return r.setState({matches:r.mediaQueryList.matches})},o=n,N(r,o)}return j(t,e),t.prototype.componentWillMount=function(){if("object"===("undefined"==typeof window?"undefined":C(window))){var e=this.props.targetWindow||window;A("function"==typeof e.matchMedia,"<Media targetWindow> does not support `matchMedia`.");var t=this.props.query;"string"!=typeof t&&(t=R(t)),this.mediaQueryList=e.matchMedia(t),this.mediaQueryList.addListener(this.updateMatches),this.updateMatches()}},t.prototype.componentWillUnmount=function(){this.mediaQueryList.removeListener(this.updateMatches)},t.prototype.render=function e(){var t=this.props,n=t.children,e=t.render,r=this.state.matches;return e?r?e():null:n?"function"==typeof n?n(r):(!Array.isArray(n)||n.length)&&r?c.Children.only(n):null:null},t}(c.Component);x.propTypes={defaultMatches:g.bool,query:g.oneOfType([g.string,g.object,g.arrayOf(g.object.isRequired)]).isRequired,render:g.func,children:g.oneOfType([g.node,g.func]),targetWindow:g.object},x.defaultProps={defaultMatches:!0},e.exports=x},521:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function d(){T=e(p.map(function(e){return e.props})),h.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,h=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!s(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return c.createElement(u,this.props)},t}(l.Component);return h.displayName="SideEffect("+r(u)+")",h.canUseDOM=f.canUseDOM,h}}var l=n(1),c=r(l),f=r(n(390)),s=r(n(538));e.exports=u},538:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!u(c))return!1;var f=e[c],s=t[c];if(o=n?n.call(r,f,s,c):void 0,o===!1||void 0===o&&f!==s)return!1}return!0}},290:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return e.raw=t,e}t.__esModule=!0;var a=i(["margin-right: ",""],["margin-right: ",""]),u=i(["\n    width: 45px;\n    height: 45px;\n  "],["\n    width: 45px;\n    height: 45px;\n  "]),l=n(1),c=o(l),f=n(3),s=o(f),d=n(11),p=o(d),T=n(242),h=o(T),y=n(271),m=o(y),E=n(291),_=o(E),g=n(214),b=o(g),v=n(27),A=n(15),S=r(A),O=p.default.div.withConfig({displayName:"Header__HeaderLayout"})(["display:flex;align-items:center;"]),w=(0,p.default)(h.default).withConfig({displayName:"Header__LogoLink"})(["display:flex;align-items:center;",";"],v.media.medium(a,S.xLarge)),M=(0,p.default)(_.default).withConfig({displayName:"Header__StyledLogo"})(["width:30px;height:30px;",";"],v.media.medium(u)),P=function(){return c.default.createElement(O,null,c.default.createElement(w,{to:"/"},c.default.createElement(M,null)),c.default.createElement(m.default,{query:v.small},function(e){return e?null:c.default.createElement(b.default,null)}))};P.propTypes={pageTitle:s.default.string},t.default=P,e.exports=t.default},214:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return e.raw=t,e}t.__esModule=!0;var a=i(["margin-right: ",""],["margin-right: ",""]),u=n(1),l=o(u),c=n(11),f=o(c),s=n(242),d=o(s),p=n(23),T=r(p),h=n(32),y=n(27),m=n(15),E=r(m),_=f.default.ol.withConfig({displayName:"Navigation__List"})(["margin:0;padding:0;display:flex;justify-content:space-around;list-style-type:none;height:100%;"]),g=f.default.li.withConfig({displayName:"Navigation__Item"})(["text-align:center;flex-grow:1;",";"],y.media.medium(a,E.medium)),b="active",v=(0,f.default)(d.default).attrs({activeClassName:b}).withConfig({displayName:"Navigation__ItemLink"})(["flex-grow:1;color:",";display:flex;justify-content:center;height:100%;align-items:center;&.","{color:",";font-weight:",";}"],T.secondaryTextColor,b,T.primaryColor,h.fontWeightBold),A=[{to:"/",title:"Upcoming",exact:!0},{to:"/events",title:"Past Events"},{to:"/members",title:"Members"},{to:"/about",title:"About Us"}],S=function(){return l.default.createElement(_,{role:"navigation"},A.map(function(e,t){return l.default.createElement(g,{key:t},l.default.createElement(v,{to:e.to,exact:e.exact},e.title))}))};t.default=S,e.exports=t.default},27:function(e,t,n){"use strict";t.__esModule=!0,t.media=t.large=t.medium=t.small=void 0;var r=n(11),o={medium:600,large:1024};t.small={maxWidth:o.medium-1},t.medium={minWidth:o.medium,maxWidth:o.large-1},t.large={minWidth:o.large},t.media=Object.keys(o).reduce(function(e,t){return e[t]=function(){return(0,r.css)(["@media (min-width:","em){",";}"],o[t]/16,r.css.apply(void 0,arguments))},e},{})},23:function(e,t){"use strict";t.__esModule=!0;t.textColor="hsl(0, 0%, 16%)",t.linkColor="hsl(0, 0%, 13%)",t.secondaryTextColor="hsl(0, 0%, 33%)",t.tertiaryTextColor="hsl(0, 0%, 55%)",t.primaryColor="hsl(2, 75%, 52%)",
t.borderColor="hsl(0, 0%, 93%)"},15:function(e,t){"use strict";t.__esModule=!0;t.xxSmall="4px",t.xSmall="6.5px",t.small="10.5px",t.medium="17px",t.large="27.5px",t.xLarge="44.5px",t.xxLarge="72px"},32:function(e,t){"use strict";t.__esModule=!0;t.fontWeightNormal="400",t.fontWeightSemiBold="600",t.fontWeightBold="700"},291:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=r(i),u=n(28),l=r(u),c=function(e){return a.default.createElement(l.default,o({viewBox:"0 0 310 310"},e),a.default.createElement("path",{d:"M20 0h270c11.046 0 20 8.954 20 20v270c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0zm29 256.305l45.508-7.079a1812.894 1812.894 0 0 1 7.585-51.829c1.18-7.08 2.36-14.495 3.54-22.249a1455.41 1455.41 0 0 1 3.666-22.88c1.264-7.5 2.57-14.748 3.919-21.743a1554.55 1554.55 0 0 1 3.792-19.088c3.708-.675 11.35-1.265 12.612-1.644 1.261-.379 7.545-36.125 5.289-35.9-2.256.223-22.41 1.095-30.416 1.516-8.006.421-16.307.632-24.903.632a342.039 342.039 0 0 1-26.294-1.011c-.169 4.382-.337 8.512-.506 12.388-.168 3.54-.252 7.08-.252 10.619 0 3.54-.085 6.658-.253 9.354 3.876 1.18 7.795 1.686 11.756 1.517 3.961-.168 7.88 0 11.756.506a1953.747 1953.747 0 0 1-2.907 20.605 736.412 736.412 0 0 1-3.792 23.26 5419.993 5419.993 0 0 1-4.425 24.398 1538.585 1538.585 0 0 1-4.55 23.765A4543.457 4543.457 0 0 1 49 256.305zm110.929-14.476a2440.204 2440.204 0 0 1 4.677-24.904c1.77-9.186 3.54-18.666 5.31-28.442 1.77-9.776 3.623-19.636 5.562-29.58a6008.258 6008.258 0 0 1 5.688-28.823 9367.598 9367.598 0 0 0 13.147-66.493l-39.44 6.32a3993.488 3993.488 0 0 1-12.39 66.494c-1.853 9.27-3.75 18.877-5.688 28.822a1395 1395 0 0 1-6.067 29.454 2679.113 2679.113 0 0 1-6.195 27.81c-2.022 8.85-4.045 16.898-6.067 24.145.337-.168 2.401-.505 6.194-1.01a1526.72 1526.72 0 0 1 12.767-1.644c4.72-.59 9.27-1.096 13.653-1.517 4.382-.422 7.332-.632 8.849-.632zm92.044-9.84c1.348 0 2.654.042 3.918.126 1.265.084 2.57.127 3.92.127-.17-.675-.38-1.98-.633-3.92-.253-1.938-.59-4.17-1.011-6.699-.422-2.528-.8-5.351-1.138-8.47a172.6 172.6 0 0 1-.758-9.48c-3.708 0-7.964.042-12.768.126-4.804.084-9.312.295-13.526.632.843-5.9 1.938-12.641 3.287-20.226a813.785 813.785 0 0 1 4.55-23.513c1.686-8.09 3.456-16.391 5.31-24.903a1638.858 1638.858 0 0 1 5.562-24.65C252.9 92.597 257.282 73.551 261.833 54l-44.245 5.815a4756.58 4756.58 0 0 0-13.4 67.504 1226.338 1226.338 0 0 0-5.435 29.075 10621.41 10621.41 0 0 1-5.31 30.086 922.626 922.626 0 0 0-4.677 28.822 2163.61 2163.61 0 0 0-3.54 25.283c4.552-1.517 9.65-2.823 15.297-3.919a225.053 225.053 0 0 1 17.318-2.655c5.9-.674 11.757-1.18 17.572-1.517a286.726 286.726 0 0 1 16.56-.505z",fillRule:"evenodd"}))};t.default=c,e.exports=t.default},28:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),u=r(a),l=n(11),c=r(l),f=n(3),s=r(f),d=function(e){var t=e.viewBox,n=e.children,r=o(e,["viewBox","children"]);return u.default.createElement("svg",i({viewBox:t,width:"1em",height:"1em"},r),n)},p=(0,c.default)(d).withConfig({displayName:"Root__StyledIconRoot"})(["position:relative;top:0.125em;fill:currentColor;user-select:none;align-self:center;"]);d.propTypes={viewBox:s.default.string,children:s.default.node.isRequired},t.default=p,e.exports=t.default},295:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return e.raw=t,e}t.__esModule=!0,t.query=void 0;var a=i(["\n    padding: ",";\n  "],["\n    padding: ",";\n  "]),u=i(["\n    margin-bottom: ",";\n  "],["\n    margin-bottom: ",";\n  "]),l=n(1),c=o(l),f=n(3),s=o(f),d=n(500),p=o(d),T=n(11),h=o(T),y=n(271),m=o(y),E=n(290),_=o(E),g=n(214),b=o(g),v=n(15),A=r(v),S=n(27);n(296);var O="44px",w=h.default.div.withConfig({displayName:"layouts__Container"})(["padding:",";padding-bottom:",";",";"],A.large,A.xxLarge,S.media.medium(a,A.xLarge)),M=h.default.header.withConfig({displayName:"layouts__HeaderContainer"})(["margin-bottom:",";",";"],A.large,S.media.medium(u,A.xLarge)),P=h.default.div.withConfig({displayName:"layouts__ContentContainer"})(["margin:0 auto;max-width:800px;"]),R=h.default.div.withConfig({displayName:"layouts__NavigationContainer"})(["position:fixed;bottom:0;left:0;right:0;height:",";background-color:white;box-shadow:0 0 4px 0 hsla(0,0%,0%,0.2);"],O),C=function(e){var t=e.children,n=e.data;return c.default.createElement(w,null,c.default.createElement(p.default,null,c.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Hind+Vadodara:400,600,700",rel:"stylesheet"}),c.default.createElement("title",null,n.site.siteMetadata.title)),c.default.createElement(M,null,c.default.createElement(_.default,null)),c.default.createElement(P,null,t()),c.default.createElement(m.default,{query:S.small},function(e){return e?c.default.createElement(R,null,c.default.createElement(b.default,null)):null}))};C.propTypes={children:s.default.func,data:s.default.any},t.default=C;t.query="** extracted graphql fragment **"},296:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e,t){return e.raw=t,e}var a=i(["\n  body {\n    margin: 0;\n    font-family: 'Hind Vadodara';\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.4;\n    color: ",";\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n"],["\n  body {\n    margin: 0;\n    font-family: 'Hind Vadodara';\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.4;\n    color: ",";\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n"]),u=n(11),l=n(23),c=o(l),f=n(32),s=o(f),d=n(84),p=r(d),T=18,h=15;(0,u.injectGlobal)(a,s.fontWeightNormal,(0,p.default)(h,T),c.textColor,c.linkColor)}});
//# sourceMappingURL=component---src-layouts-index-js-f74ef6e3728dd5666bde.js.map