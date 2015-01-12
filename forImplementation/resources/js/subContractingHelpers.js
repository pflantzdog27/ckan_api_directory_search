/*
 AngularJS v1.3.0-beta.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(N,S,r){'use strict';function I(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-beta.6/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function cb(b){if(null==b||Ca(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:x(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(O(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(cb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function dd(b,
a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function db(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});ac(b,a);return b}function Q(b){return parseInt(b,
10)}function bc(b,a){return w(new (w(function(){},{prototype:b})),a)}function D(){}function Da(b){return b}function $(b){return function(){return b}}function A(b){return"undefined"===typeof b}function F(b){return"undefined"!==typeof b}function R(b){return null!=b&&"object"===typeof b}function x(b){return"string"===typeof b}function Cb(b){return"number"===typeof b}function qa(b){return"[object Date]"===xa.call(b)}function M(b){return"[object Array]"===xa.call(b)}function O(b){return"function"===typeof b}
function eb(b){return"[object RegExp]"===xa.call(b)}function Ca(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function ed(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function fd(b,a,c){var d=[];q(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function fb(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ea(b,a){var c=fb(b,a);0<=c&&b.splice(c,1);return a}function aa(b,a){if(Ca(b)||b&&b.$evalAsync&&b.$watch)throw Oa("cpws");
if(a){if(b===a)throw Oa("cpi");if(M(b))for(var c=a.length=0;c<b.length;c++)a.push(aa(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=aa(b[d]);ac(a,c)}}else(a=b)&&(M(b)?a=aa(b,[]):qa(b)?a=new Date(b.getTime()):eb(b)?a=RegExp(b.source):R(b)&&(a=aa(b,{})));return a}function cc(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function ya(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ya(b[d],a[d]))return!1;return!0}}else{if(qa(b))return qa(a)&&b.getTime()==a.getTime();if(eb(b)&&eb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ca(b)||Ca(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!O(b[d])){if(!ya(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==r&&!O(a[d]))return!1;
return!0}return!1}function dc(){return S.securityPolicy&&S.securityPolicy.isActive||S.querySelector&&!(!S.querySelector("[ng-csp]")&&!S.querySelector("[data-ng-csp]"))}function gb(b,a){var c=2<arguments.length?ra.call(arguments,2):[];return!O(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ra.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function gd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
r:Ca(a)?c="$WINDOW":a&&S===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function sa(b,a){return"undefined"===typeof b?r:JSON.stringify(b,gd,a?"  ":null)}function ec(b){return x(b)?JSON.parse(b):b}function Pa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=u(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ga(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return 3===b[0].nodeType?u(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+u(b)})}catch(d){return u(c)}}function fc(b){try{return decodeURIComponent(b)}catch(a){}}function gc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=fc(c[0]),F(d)&&(b=F(c[1])?fc(c[1]):!0,a[d]?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Db(b){var a=[];q(b,function(b,d){M(b)?q(b,function(b){a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))}):a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))});return a.length?a.join("&"):""}function hb(b){return za(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function hd(b,a){var c,d,e=hc.length;b=y(b);for(d=0;d<e;++d)if(c=hc[d]+a,x(c=b.attr(c)))return c;return null}function id(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g={},h=["ng:app","ng-app","x-ng-app","data-ng-app"],m=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(h,function(a){h[a]=
!0;c(S.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=m.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&h[b.name]&&(e=a,f=b.value)})}});e&&(g.strictDi=null!==hd(e,"strict-di"),a(e,f?[f]:[],g))}function ic(b,a,c){R(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=y(b);if(b.injector()){var d=b[0]===
S?"document":ga(b);throw Oa("btstrpd",d);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");d=Eb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_DEFER_BOOTSTRAP!/;if(N&&!e.test(N.name))return d();N.name=N.name.replace(e,"");Qa.resumeBootstrap=function(b){q(b,function(b){a.push(b)});d()}}function ib(b,a){a=a||"_";return b.replace(jd,
function(b,d){return(d?a:"")+b.toLowerCase()})}function Fb(b,a,c){if(!b)throw Oa("areq",a||"?",c||"required");return b}function Ra(b,a,c){c&&M(b)&&(b=b[b.length-1]);Fb(O(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function Aa(b,a){if("hasOwnProperty"===b)throw Oa("badname",a);}function jc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&O(b)?gb(e,b):b}function Gb(b){var a=b[0];b=b[b.length-
1];if(a===b)return y(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return y(c)}function kd(b){var a=I("$injector"),c=I("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||I;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return p}}if(!f)throw a("nomod",e);var c=[],d=[],
l=b("$injector","invoke"),p={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return p}())}}())}function ld(b){w(b,
{bootstrap:ic,copy:aa,extend:w,equals:ya,element:y,forEach:q,injector:Eb,noop:D,bind:gb,toJson:sa,fromJson:ec,identity:Da,isUndefined:A,isDefined:F,isString:x,isFunction:O,isObject:R,isNumber:Cb,isElement:ed,isArray:M,version:md,isDate:qa,lowercase:u,uppercase:Fa,callbacks:{counter:0},$$minErr:I,$$csp:dc});Sa=kd(N);try{Sa("ngLocale")}catch(a){Sa("ngLocale",[]).provider("$locale",nd)}Sa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:od});a.provider("$compile",kc).directive({a:pd,
input:lc,textarea:lc,form:qd,script:rd,select:sd,style:td,option:ud,ngBind:vd,ngBindHtml:wd,ngBindTemplate:xd,ngClass:yd,ngClassEven:zd,ngClassOdd:Ad,ngCloak:Bd,ngController:Cd,ngForm:Dd,ngHide:Ed,ngIf:Fd,ngInclude:Gd,ngInit:Hd,ngNonBindable:Id,ngPluralize:Jd,ngRepeat:Kd,ngShow:Ld,ngStyle:Md,ngSwitch:Nd,ngSwitchWhen:Od,ngSwitchDefault:Pd,ngOptions:Qd,ngTransclude:Rd,ngModel:Sd,ngList:Td,ngChange:Ud,required:mc,ngRequired:mc,ngValue:Vd,ngModelOptions:Wd}).directive({ngInclude:Xd}).directive(Hb).directive(nc);
a.provider({$anchorScroll:Yd,$animate:Zd,$browser:$d,$cacheFactory:ae,$controller:be,$document:ce,$exceptionHandler:de,$filter:oc,$interpolate:ee,$interval:fe,$http:ge,$httpBackend:he,$location:ie,$log:je,$parse:ke,$rootScope:le,$q:me,$sce:ne,$sceDelegate:oe,$sniffer:pe,$templateCache:qe,$timeout:re,$window:se,$$rAF:te,$$asyncCallback:ue})}])}function Ta(b){return b.replace(ve,function(a,b,d,e){return e?d.toUpperCase():d}).replace(we,"Moz$1")}function Ib(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],m=a,k,l,p,n,t,s;if(!d||null!=b)for(;e.length;)for(k=e.shift(),l=0,p=k.length;l<p;l++)for(n=y(k[l]),m?n.triggerHandler("$destroy"):m=!m,t=0,n=(s=n.children()).length;t<n;t++)e.push(Ga(s[t]));return f.apply(this,arguments)}var f=Ga.fn[b],f=f.$original||f;e.$original=f;Ga.fn[b]=e}function xe(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Jb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ye.exec(b)||["",""])[1].toLowerCase();d=da[d]||da._default;c.innerHTML=d[1]+b.replace(ze,"<$1></$2>")+
d[2];for(d=d[0];d--;)c=c.lastChild;f=f.concat(ra.call(c.childNodes,void 0));c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function U(b){if(b instanceof U)return b;x(b)&&(b=Y(b));if(!(this instanceof U)){if(x(b)&&"<"!=b.charAt(0))throw Kb("nosel");return new U(b)}if(x(b)){var a;a=S;var c;b=(c=Ae.exec(b))?[a.createElement(c[1])]:(c=xe(b,a))?c.childNodes:[]}pc(this,b)}function Lb(b){return b.cloneNode(!0)}
function Ha(b){qc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ha(b[a])}function rc(b,a,c,d){if(F(d))throw Kb("offargs");var e=la(b,"events");la(b,"handle")&&(A(a)?q(e,function(a,c){Ua(b,c,a);delete e[c]}):q(a.split(" "),function(a){A(c)?(Ua(b,a,e[a]),delete e[a]):Ea(e[a]||[],c)}))}function qc(b,a){var c=b[jb],d=Va[c];d&&(a?delete Va[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),rc(b)),delete Va[c],b[jb]=r))}function la(b,a,c){var d=b[jb],d=Va[d||-1];if(F(c))d||(b[jb]=d=++Be,
d=Va[d]={}),d[a]=c;else return d&&d[a]}function sc(b,a,c){var d=la(b,"data"),e=F(c),f=!e&&F(a),g=f&&!R(a);d||g||la(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];w(d,a)}else return d}function Mb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function kb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",Y((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Y(a)+" "," ")))})}
function lb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=Y(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",Y(c))}}function pc(b,a){if(a){a=a.nodeName||!F(a.length)||Ca(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function tc(b,a){return mb(b,"$"+(a||"ngController")+"Controller")}function mb(b,a,c){b=y(b);9==b[0].nodeType&&(b=b.find("html"));for(a=M(a)?a:[a];b.length;){for(var d=b[0],e=0,f=a.length;e<
f;e++)if((c=b.data(a[e]))!==r)return c;b=y(d.parentNode||11===d.nodeType&&d.host)}}function uc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ha(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function vc(b,a){var c=nb[a.toLowerCase()];return c&&wc[b.nodeName]&&c}function Ce(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||S);if(A(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=cc(a[e||c.type]||[]);q(g,function(a){a.call(b,c)});8>=P?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ia(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=
b.$$hashKey():c===r&&(c=b.$$hashKey=db()):c=b;return a+":"+c}function Wa(b){q(b,this.put,this)}function De(b){return(b=b.toString().replace(xc,"").match(yc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Nb(b,a,c){var d;if("function"==typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw x(c)&&c||(c=b.name||De(b)),Ja("strictdi",c);a=b.toString().replace(xc,"");a=a.match(yc);q(a[1].split(Ee),function(a){a.replace(Fe,function(a,b,c){d.push(c)})})}b.$inject=d}}else M(b)?(a=b.length-
1,Ra(b[a],"fn"),d=b.slice(0,a)):Ra(b,"fn",!0);return d}function Eb(b,a){function c(a){return function(b,c){if(R(b))q(b,$b(a));else return a(b,c)}}function d(a,b){Aa(a,"service");if(O(b)||M(b))b=n.instantiate(b);if(!b.$get)throw Ja("pget",a);return p[a+m]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c,d,e,h;q(a,function(a){if(!l.get(a)){l.put(a,!0);try{if(x(a))for(c=Sa(a),b=b.concat(f(c.requires)).concat(c._runBlocks),d=c._invokeQueue,e=0,h=d.length;e<h;e++){var g=d[e],m=n.get(g[0]);
m[g[1]].apply(m,g[2])}else O(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Ra(a,"module")}catch(k){throw M(a)&&(a=a[a.length-1]),k.message&&(k.stack&&-1==k.stack.indexOf(k.message))&&(k=k.message+"\n"+k.stack),Ja("modulerr",a,k.stack||k.message||k);}}});return b}function g(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Ja("cdep",k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{k.shift()}}function e(b,c,f,h){"string"===
typeof f&&(h=f,f=null);var g=[];h=Nb(b,a,h);var m,k,l;k=0;for(m=h.length;k<m;k++){l=h[k];if("string"!==typeof l)throw Ja("itkn",l);g.push(f&&f.hasOwnProperty(l)?f[l]:d(l))}b.$inject||(b=b[m]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(M(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return R(a)||O(a)?a:d},get:d,annotate:Nb,has:function(a){return p.hasOwnProperty(a+m)||b.hasOwnProperty(a)}}}a=!0===a;var h={},m="Provider",k=[],l=new Wa,p={$provide:{provider:c(d),
factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,$(b))}),constant:c(function(a,b){Aa(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=n.get(a+m),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},n=p.$injector=g(p,function(){throw Ja("unpr",k.join(" <- "));},a),t={},s=t.$injector=g(t,function(a){var b=n.get(a+m);return s.invoke(b.$get,b,r,a)},a);q(f(b),function(a){s.invoke(a||
D)});return s}function Yd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==u(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ue(){this.$get=
["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Ge(b,a,c,d){function e(a){try{a.apply(null,ra.call(arguments,1))}finally{if(s--,0===s)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ba(){q(E,function(a){a()});B=b(ba,a)})()}function g(){v=null;z!=h.url()&&(z=h.url(),q(ma,function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,p=b.setTimeout,n=b.clearTimeout,t={};h.isMock=!1;var s=0,J=[];
h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){s++};h.notifyWhenNoOutstandingRequests=function(a){q(E,function(a){a()});0===s?a():J.push(a)};var E=[],B;h.addPollFn=function(a){A(B)&&f(100,p);E.push(a);return a};var z=k.href,W=a.find("base"),v=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(z!=a)return z=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),W.attr("href",W.attr("href"))):(v=a,c?k.replace(a):k.href=
a),h}else return v||k.href.replace(/%27/g,"'")};var ma=[],K=!1;h.onUrlChange=function(a){if(!K){if(d.history)y(b).on("popstate",g);if(d.hashchange)y(b).on("hashchange",g);else h.addPollFn(g);K=!0}ma.push(a);return a};h.baseHref=function(){var a=W.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var L={},Z="",G=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===r?m.cookie=escape(a)+"=;path="+G+";expires=Thu, 01 Jan 1970 00:00:00 GMT":x(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+
";path="+G).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==Z)for(Z=m.cookie,d=Z.split("; "),L={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),L[a]===r&&(L[a]=unescape(e.substring(h+1))));return L}};h.defer=function(a,b){var c;s++;c=p(function(){delete t[c];e(a)},b||0);t[c]=!0;return c};h.defer.cancel=function(a){return t[a]?(delete t[a],n(a),e(D),!0):!1}}function $d(){this.$get=
["$window","$log","$sniffer","$document",function(b,a,c,d){return new Ge(b,d,a,c)}]}function ae(){this.$get=function(){function b(b,d){function e(a){a!=p&&(n?n==a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw I("$cacheFactory")("iid",b);var g=0,h=w({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},p=null,n=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!A(b))return a in m||g++,m[a]=b,
g>k&&this.remove(n.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b==p&&(p=b.p);b==n&&(n=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m={};g=0;l={};p=n=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function qe(){this.$get=
["$cacheFactory",function(b){return b("templates")}]}function kc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,f=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Aa(a,"directive");x(a)?(Fb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,f){try{var g=b.invoke(c);O(g)?g={compile:$(g)}:!g.compile&&g.link&&(g.compile=$(g.link));g.priority=g.priority||
0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,$b(m));return this};this.aHrefSanitizationWhitelist=function(b){return F(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return F(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache",
"$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,p,n,t,s,J,E,B,z,W){function v(a,b,c,d,e){a instanceof y||(a=y(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var f=K(a,b,a,c,d,e);ma(a,"ng-scope");return function(b,c,d){Fb(b,"scope");var e=c?Ka.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var g=e.length;d<g;d++){var m=e[d].nodeType;1!==m&&9!==m||e.eq(d).data("$scope",
b)}c&&c(e,b);f&&f(b,e,e);return e}}function ma(a,b){try{a.addClass(b)}catch(c){}}function K(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,t,p,n,E;f=c.length;var Xa=Array(f);for(p=0;p<f;p++)Xa[p]=c[p];E=p=0;for(n=m.length;p<n;E++)k=Xa[E],c=m[p++],f=m[p++],l=y(k),c?(c.scope?(t=a.$new(),l.data("$scope",t)):t=a,(l=c.transclude)||!e&&b?c(f,t,k,d,L(a,l||b)):c(f,t,k,d,e)):f&&f(a,k.childNodes,r,e)}for(var m=[],k,l,t,p,n=0;n<a.length;n++)k=new Ob,l=Z(a[n],[],k,0===n?d:r,e),(f=l.length?ha(l,a[n],k,b,c,null,[],
[],f):null)&&f.scope&&ma(y(a[n]),"ng-scope"),k=f&&f.terminal||!(t=a[n].childNodes)||!t.length?null:K(t,f?f.transclude:b),m.push(f,k),p=p||f||k,f=null;return p?g:null}function L(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",gb(c,c.$destroy));return d}}function Z(a,b,c,d,g){var m=c.$attr,k;switch(a.nodeType){case 1:ba(b,na(La(a).toLowerCase()),"E",d,g);var l,t,p;k=a.attributes;for(var n=0,E=k&&k.length;n<E;n++){var s=!1,B=!1;l=k[n];if(!P||
8<=P||l.specified){t=l.name;p=na(t);Q.test(p)&&(t=ib(p.substr(6),"-"));var J=p.replace(/(Start|End)$/,"");p===J+"Start"&&(s=t,B=t.substr(0,t.length-5)+"end",t=t.substr(0,t.length-6));p=na(t.toLowerCase());m[p]=t;c[p]=l=Y(l.value);vc(a,p)&&(c[p]=!0);N(a,b,l,p);ba(b,p,"A",d,g,s,B)}}a=a.className;if(x(a)&&""!==a)for(;k=f.exec(a);)p=na(k[2]),ba(b,p,"C",d,g)&&(c[p]=Y(k[3])),a=a.substr(k.index+k[0].length);break;case 3:u(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))p=na(k[1]),ba(b,p,"M",d,g)&&
(c[p]=Y(k[2]))}catch(z){}}b.sort(qb);return b}function G(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function C(a,b,c){return function(d,e,f,g,k){e=G(e[0],b,c);return a(d,e,f,g,k)}}function ha(a,c,d,e,f,g,m,p,n){function E(a,b,c,d){if(a){c&&(a=C(a,c,d));a.require=H.require;a.directiveName=ca;if(L===H||H.$$isolateScope)a=zc(a,
{isolateScope:!0});m.push(a)}if(b){c&&(b=C(b,c,d));b.require=H.require;b.directiveName=ca;if(L===H||H.$$isolateScope)b=zc(b,{isolateScope:!0});p.push(b)}}function B(a,b,c,d){var e,f="data",g=!1;if(x(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ia("ctreq",b,a);}else M(b)&&(e=[],q(b,function(b){e.push(B(a,b,c,d))}));return e}function J(a,e,f,g,n){function E(a,b){var c;2>arguments.length&&
(b=a,a=r);w&&(c=Z);return n(a,b,c)}var z,v,Xa,C,K,G,Z={},pb;z=c===f?d:cc(d,new Ob(y(f),d.$attr));v=z.$$element;if(L){var ba=/^\s*([@=&])(\??)\s*(\w*)\s*$/;g=y(f);G=e.$new(!0);ha&&ha===L.$$originalDirective?g.data("$isolateScope",G):g.data("$isolateScopeNoTemplate",G);ma(g,"ng-isolate-scope");q(L.scope,function(a,c){var d=a.match(ba)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,p,n;G.$$isolateBindings[c]=d+f;switch(d){case "@":z.$observe(f,function(a){G[c]=a});z.$$observers[f].$$scope=e;z[f]&&(G[c]=b(z[f])(e));
break;case "=":if(g&&!z[f])break;l=t(z[f]);n=l.literal?ya:function(a,b){return a===b};p=l.assign||function(){m=G[c]=l(e);throw ia("nonassign",z[f],L.name);};m=G[c]=l(e);G.$watch(function(){var a=l(e);n(a,G[c])||(n(a,m)?p(e,a=G[c]):G[c]=a);return m=a},null,l.literal);break;case "&":l=t(z[f]);G[c]=function(a){return l(e,a)};break;default:throw ia("iscp",L.name,c,a);}})}pb=n&&E;W&&q(W,function(a){var b={$scope:a===L||a.$$isolateScope?G:e,$element:v,$attrs:z,$transclude:pb},c;K=a.controller;"@"==K&&(K=
z[a.name]);c=s(K,b);Z[a.name]=c;w||v.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(Xa=m.length;g<Xa;g++)try{C=m[g],C(C.isolateScope?G:e,v,z,C.require&&B(C.directiveName,C.require,v,Z),pb)}catch(ob){l(ob,ga(v))}g=e;L&&(L.template||null===L.templateUrl)&&(g=G);a&&a(g,f.childNodes,r,n);for(g=p.length-1;0<=g;g--)try{C=p[g],C(C.isolateScope?G:e,v,z,C.require&&B(C.directiveName,C.require,v,Z),pb)}catch(H){l(H,ga(v))}}n=n||{};for(var z=-Number.MAX_VALUE,K,W=n.controllerDirectives,
L=n.newIsolateScopeDirective,ha=n.templateDirective,ba=n.nonTlbTranscludeDirective,qb=!1,w=n.hasElementTranscludeDirective,u=d.$$element=y(c),H,ca,T,I=e,N,ja=0,P=a.length;ja<P;ja++){H=a[ja];var Q=H.$$start,V=H.$$end;Q&&(u=G(c,Q,V));T=r;if(z>H.priority)break;if(T=H.scope)K=K||H,H.templateUrl||(A("new/isolated scope",L,H,u),R(T)&&(L=H));ca=H.name;!H.templateUrl&&H.controller&&(T=H.controller,W=W||{},A("'"+ca+"' controller",W[ca],H,u),W[ca]=H);if(T=H.transclude)qb=!0,H.$$tlb||(A("transclusion",ba,H,
u),ba=H),"element"==T?(w=!0,z=H.priority,T=G(c,Q,V),u=d.$$element=y(S.createComment(" "+ca+": "+d[ca]+" ")),c=u[0],rb(f,y(ra.call(T,0)),c),I=v(T,e,z,g&&g.name,{nonTlbTranscludeDirective:ba})):(T=y(Lb(c)).contents(),u.empty(),I=v(T,e));if(H.template)if(A("template",ha,H,u),ha=H,T=O(H.template)?H.template(u,d):H.template,T=U(T),H.replace){g=H;T=Jb.test(T)?y(Y(T)):[];c=T[0];if(1!=T.length||1!==c.nodeType)throw ia("tplrt",ca,"");rb(f,u,c);P={$attr:{}};T=Z(c,[],P);var X=a.splice(ja+1,a.length-(ja+1));
L&&ob(T);a=a.concat(T).concat(X);F(d,P);P=a.length}else u.html(T);if(H.templateUrl)A("template",ha,H,u),ha=H,H.replace&&(g=H),J=D(a.splice(ja,a.length-ja),u,d,f,I,m,p,{controllerDirectives:W,newIsolateScopeDirective:L,templateDirective:ha,nonTlbTranscludeDirective:ba}),P=a.length;else if(H.compile)try{N=H.compile(u,d,I),O(N)?E(null,N,Q,V):N&&E(N.pre,N.post,Q,V)}catch(He){l(He,ga(u))}H.terminal&&(J.terminal=!0,z=Math.max(z,H.priority))}J.scope=K&&!0===K.scope;J.transclude=qb&&I;n.hasElementTranscludeDirective=
w;return J}function ob(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}function ba(b,e,f,g,k,p,t){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var n;e=a.get(e+d);for(var E=0,s=e.length;E<s;E++)try{n=e[E],(g===r||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(p&&(n=bc(n,{$$start:p,$$end:t})),b.push(n),k=n)}catch(z){l(z)}}return k}function F(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});
q(b,function(b,f){"class"==f?(ma(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function D(a,b,c,d,e,f,g,k){var m=[],l,t,E=b[0],s=a.shift(),z=w({},s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),J=O(s.templateUrl)?s.templateUrl(b,c):s.templateUrl;b.empty();p.get(B.getTrustedResourceUrl(J),{cache:n}).success(function(p){var n,
B;p=U(p);if(s.replace){p=Jb.test(p)?y(Y(p)):[];n=p[0];if(1!=p.length||1!==n.nodeType)throw ia("tplrt",s.name,J);p={$attr:{}};rb(d,b,n);var v=Z(n,[],p);R(s.scope)&&ob(v);a=v.concat(a);F(c,p)}else n=E,b.html(p);a.unshift(z);l=ha(a,n,c,e,b,s,f,g,k);q(d,function(a,c){a==n&&(d[c]=b[0])});for(t=K(b[0].childNodes,e);m.length;){p=m.shift();B=m.shift();var C=m.shift(),G=m.shift(),v=b[0];if(B!==E){var W=B.className;k.hasElementTranscludeDirective&&s.replace||(v=Lb(n));rb(C,y(B),v);ma(y(v),W)}B=l.transclude?
L(p,l.transclude):G;l(t,p,v,d,B)}m=null}).error(function(a,b,c,d){throw ia("tpload",d.url);});return function(a,b,c,d,e){m?(m.push(b),m.push(c),m.push(d),m.push(e)):l(t,b,c,d,e)}}function qb(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function A(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ga(d));}function u(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:$(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ma(c.data("$binding",
e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function I(a,b){if("srcdoc"==b)return B.HTML;var c=La(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return B.RESOURCE_URL}function N(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===La(a))throw ia("selmulti",ga(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ia("nodomevents");if(f=b(m[e],!0,I(a,e)))m[e]=f(c),(d[e]||
(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function rb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==d){a[g++]=c;m=g+e-1;for(var k=a.length;g<k;g++,m++)m<k?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=S.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];d=1;for(e=b.length;d<e;d++)f=b[d],y(f).remove(),a.appendChild(f),
delete b[d];b[0]=c;b.length=1}function zc(a,b){return w(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:na,$addClass:function(a){a&&0<a.length&&z.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&z.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Ac(a,b),d=Ac(b,a);0===c.length?z.removeClass(this.$$element,d):0===d.length?z.addClass(this.$$element,c):z.setClass(this.$$element,c,d)},$set:function(a,
b,c,d){var e=vc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ib(a,"-"));e=La(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=W(b,"src"===a);!1!==c&&(null===b||b===r?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);J.$evalAsync(function(){e.$$inter||
b(c[a])});return function(){Ea(e,b)}}};var ca=b.startSymbol(),ja=b.endSymbol(),U="{{"==ca||"}}"==ja?Da:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,ja)},Q=/^ngAttr[A-Z]/;return v}]}function na(b){return Ta(b.replace(Ie,""))}function Ac(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function be(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Aa(a,"controller");
R(a)?w(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,m;x(e)&&(g=e.match(a),h=g[1],m=g[3],e=b.hasOwnProperty(h)?b[h]:jc(f.$scope,h,!0)||jc(d,h,!0),Ra(e,h,!0));g=c.instantiate(e,f,h);if(m){if(!f||"object"!=typeof f.$scope)throw I("$controller")("noscp",h||e.name,m);f.$scope[m]=g}return g}}]}function ce(){this.$get=["$window",function(b){return y(b.document)}]}function de(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Bc(b){var a=
{},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=u(Y(b.substr(0,e)));d=Y(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function Cc(b){var a=R(b)?b:r;return function(c){a||(a=Bc(b));return c?a[u(c)]||null:a}}function Dc(b,a,c){if(O(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function ge(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){x(d)&&(d=d.replace(c,
""),b.test(d)&&a.test(d)&&(d=ec(d)));return d}],transformRequest:[function(a){return R(a)&&"[object File]"!==xa.call(a)&&"[object Blob]"!==xa.call(a)?sa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:aa(d),put:aa(d),patch:aa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,p,n){function t(a){function c(a){var b=
w({},a,{data:Dc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:p.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;q(a,function(b,d){O(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=w({},a.headers),f,g,c=w({},c.common,c[u(a.method)]);b(c);b(d);a:for(f in c){a=u(f);for(g in d)if(u(g)===a)continue a;d[f]=c[f]}return d}(a);w(d,a);d.headers=f;d.method=Fa(d.method);(a=Pb(d.url)?
b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:r)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var g=[function(a){f=a.headers;var b=Dc(a.data,Cc(f),a.transformRequest);A(a.data)&&q(f,function(a,b){"content-type"===u(b)&&delete f[b]});A(a.withCredentials)&&!A(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,b,f).then(c,c)},r],h=p.when(d);for(q(B,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=
g.shift();var k=g.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function s(b,c,f){function g(a,b,c,e){B&&(200<=a&&300>a?B.put(r,[a,b,Bc(c),e]):B.remove(r));m(b,a,c,e);d.$$phase||d.$apply()}function m(a,c,d,e){c=Math.max(c,0);(200<=c&&300>c?n.resolve:n.reject)({data:a,status:c,headers:Cc(d),config:b,statusText:e})}function k(){var a=fb(t.pendingRequests,
b);-1!==a&&t.pendingRequests.splice(a,1)}var n=p.defer(),s=n.promise,B,q,r=J(b.url,b.params);t.pendingRequests.push(b);s.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(B=R(b.cache)?b.cache:R(e.cache)?e.cache:E);if(B)if(q=B.get(r),F(q)){if(q.then)return q.then(k,k),q;M(q)?m(q[1],q[0],aa(q[2]),q[3]):m(q,200,{},"OK")}else B.put(r,s);A(q)&&a(b.method,r,c,g,f,b.timeout,b.withCredentials,b.responseType);return s}function J(a,b){if(!b)return a;var c=[];dd(b,function(a,b){null===a||A(a)||
(M(a)||(a=[a]),q(a,function(a){R(a)&&(a=sa(a));c.push(za(b)+"="+za(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var E=c("$http"),B=[];q(f,function(a){B.unshift(x(a)?n.get(a):n.invoke(a))});q(g,function(a,b){var c=x(a)?n.get(a):n.invoke(a);B.splice(b,0,{response:function(a){return c(p.when(a))},responseError:function(a){return c(p.reject(a))}})});t.pendingRequests=[];(function(a){q(arguments,function(a){t[a]=function(b,c){return t(w(c||{},{method:a,url:b}))}})})("get",
"delete","head","jsonp");(function(a){q(arguments,function(a){t[a]=function(b,c,d){return t(w(d||{},{method:a,url:b,data:c}))}})})("post","put");t.defaults=e;return t}]}function Je(b){if(8>=P&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!N.XMLHttpRequest))return new N.ActiveXObject("Microsoft.XMLHTTP");if(N.XMLHttpRequest)return new N.XMLHttpRequest;throw I("$httpBackend")("noxhr");}function he(){this.$get=["$browser","$window","$document",function(b,a,c){return Ke(b,Je,b.defer,a.angular.callbacks,
c[0])}]}function Ke(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){Ua(f,"load",g);Ua(f,"error",g);e.body.removeChild(f);f=null;var h=-1,s="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),s=a.type,h="error"===a.type?404:200);c&&c(h,s)};sb(f,"load",g);sb(f,"error",g);e.body.appendChild(f);return g}var g=-1;return function(e,m,k,l,p,n,t,s){function J(){B=g;W&&W();v&&v.abort()}function E(a,d,e,f,g){K&&c.cancel(K);
W=v=null;0===d&&(d=e?200:"file"==ta(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(D)}var B;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==u(e)){var z="_"+(d.counter++).toString(36);d[z]=function(a){d[z].data=a;d[z].called=!0};var W=f(m.replace("JSON_CALLBACK","angular.callbacks."+z),z,function(a,b){E(l,a,d[z].data,"",b);d[z]=D})}else{var v=a(e);v.open(e,m,!0);q(p,function(a,b){F(a)&&v.setRequestHeader(b,a)});v.onreadystatechange=function(){if(v&&4==v.readyState){var a=
null,b=null;B!==g&&(a=v.getAllResponseHeaders(),b="response"in v?v.response:v.responseText);E(l,B||v.status,b,a,v.statusText||"")}};t&&(v.withCredentials=!0);if(s)try{v.responseType=s}catch(r){if("json"!==s)throw r;}v.send(k||null)}if(0<n)var K=c(J,n);else n&&n.then&&n.then(J)}}function ee(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var p,
n,t=0,s=[],J=[],E=[],B=f.length,z=!1,q=!1,v=[],y={},K={};t<B;)if(-1!=(p=f.indexOf(b,t))&&-1!=(n=f.indexOf(a,p+g)))t!==p&&(q=!0),s.push(f.substring(t,p)),t=f.substring(p+g,n),J.push(t),E.push(c(t)),t=n+h,z=!0;else{t!==B&&(q=!0,s.push(f.substring(t)));break}s.length===J.length&&s.push("");if(l&&z&&(q||1<J.length))throw Ec("noconcat",f);if(!k||z){v.length=s.length+J.length;var L=function(a){for(var b=0,c=J.length;b<c;b++)v[2*b]=s[b],v[2*b+1]=a[b];v[2*c]=s[c];return v.join("")},Z=function(a){a=l?e.getTrusted(l,
a):e.valueOf(a);null===a||A(a)?a="":"string"!=typeof a&&(a=sa(a));return a};return w(function(a){var b=a.$id||"notAScope",c=y[b],e=K[b],g=0,h=J.length,k=Array(h),l,p=e===r?!0:!1;c||(c=[],p=!0,a.$on&&a.$on("$destroy",function(){y[b]=null;K[b]=null}));try{for(;g<h;g++)l=Z(E[g](a)),l!==c[g]&&(p=!0),k[g]=l;p&&(y[b]=k,K[b]=e=L(k))}catch(n){a=Ec("interr",f,n.toString()),d(a)}return e},{exp:f,separators:s,expressions:J})}}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};
return f}]}function fe(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,m){var k=a.setInterval,l=a.clearInterval,p=c.defer(),n=p.promise,t=0,s=F(m)&&!m;h=F(h)?h:0;n.then(null,null,d);n.$$intervalId=k(function(){p.notify(t++);0<h&&t>=h&&(p.resolve(t),l(n.$$intervalId),delete e[n.$$intervalId]);s||b.$apply()},g);e[n.$$intervalId]=p;return n}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],
!0):!1};return d}]}function nd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=hb(b[a]);return b.join("/")}function Fc(b,a,c){b=ta(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=Q(b.port)||Le[b.protocol]||null}function Gc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ta(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=gc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,
Ya(b).lastIndexOf("/")+1)}function Hc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);Fc(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!x(e))throw Sb("ipthprfx",a,c);Gc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Db(this.$$search),b=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=oa(b,d))!==r)return d=e,(e=oa(a,e))!==r?c+(oa("/",e)||e):b+d;if((e=oa(c,
d))!==r)return c+e;if(c==d+"/")return c}}function Tb(b,a){var c=Rb(b);Fc(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!x(e))throw Sb("ihshprfx",d,a);Gc(e,this,b);d=this.$$path;var f=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Db(this.$$search),e=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ya(b)==Ya(a))return a}}function Ub(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$rewrite=function(d){var e;if(b==Ya(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Db(this.$$search),e=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}function Ic(b,a){return function(c){if(A(c))return this[b];
this[b]=a(c);this.$$compose();return this}}function ie(){var b="",a=!1;this.hashPrefix=function(a){return F(a)?(b=a,this):b};this.html5Mode=function(b){return F(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m,k=d.baseHref(),l=d.url(),p;a?(p=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(k||"/"),m=e.history?Hc:Ub):(p=Ya(l),m=Tb);h=new m(p,"#"+b);h.$$parse(h.$$rewrite(l));f.on("click",
function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=y(a.target);"a"!==u(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");R(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ta(g.animVal).href);if(m===Ub){var k=e.attr("href")||e.attr("xlink:href");if(0>k.indexOf("://"))if(g="#"+b,"/"==k[0])g=p+g+k;else if("#"==k[0])g=p+g+(h.path()||"/")+k;else{for(var l=h.path().split("/"),k=k.split("/"),n=0;n<k.length;n++)"."!=k[n]&&(".."==k[n]?l.pop():k[n].length&&l.push(k[n]));
g=p+g+l.join("/")}}l=h.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(h.$$parse(l),c.$apply(),N.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=l&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url(),b=h.$$replace;n&&a==h.absUrl()||
(n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return n});return h}]}function je(){var b=!0,a=this;this.debugEnabled=function(a){return F(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=
c.console||{},e=b[a]||b.log||D;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ea(b,a){if("constructor"===b)throw Ba("isecfld",a);return b}function Za(b,a){if(b){if(b.constructor===b)throw Ba("isecfn",a);if(b.document&&b.location&&b.alert&&
b.setInterval)throw Ba("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Ba("isecdom",a);}return b}function ub(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ea(a.shift(),d);var h=b[f];h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(ua(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===r&&(b.$$v={}),b=b.$$v)}f=ea(a.shift(),d);return b[f]=c}function Jc(b,a,c,d,e,f,g){ea(b,f);ea(a,f);ea(c,f);ea(d,f);ea(e,f);return g.unwrapPromises?function(g,
m){var k=m&&m.hasOwnProperty(b)?m:g,l;if(null==k)return k;(k=k[b])&&k.then&&(ua(f),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return r;(k=k[a])&&k.then&&(ua(f),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return r;(k=k[c])&&k.then&&(ua(f),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return r;(k=k[d])&&k.then&&(ua(f),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=
a})),k=k.$$v);if(!e)return k;if(null==k)return r;(k=k[e])&&k.then&&(ua(f),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);return k}:function(f,g){var k=g&&g.hasOwnProperty(b)?g:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return r;k=k[a];if(!c)return k;if(null==k)return r;k=k[c];if(!d)return k;if(null==k)return r;k=k[d];return e?null==k?r:k=k[e]:k}}function Me(b,a){ea(b,a);return function(a,d){return null==a?r:(d&&d.hasOwnProperty(b)?d:a)[b]}}function Ne(b,a,c){ea(b,c);ea(a,
c);return function(c,e){if(null==c)return r;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?r:c[a]}}function Kc(b,a,c){if(Vb.hasOwnProperty(b))return Vb[b];var d=b.split("."),e=d.length,f;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)f=6>e?Jc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,h;do h=Jc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=r,b=h;while(g<e);return h};else{var g="var p;\n";q(d,function(b,d){ea(b,c);g+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+
b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",h=new Function("s","k","pw",g);h.toString=$(g);f=a.unwrapPromises?function(a,b){return h(a,b,ua)}:h}else f=Ne(d[0],d[1],c);else f=Me(d[0],c);"hasOwnProperty"!==b&&(Vb[b]=f);return f}function ke(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=
function(b){return F(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return F(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ua=function(b){a.logPromiseWarnings&&!Lc.hasOwnProperty(b)&&(Lc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];
e=new Wb(a);e=(new $a(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return D}}}]}function me(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Oe(function(a){b.$evalAsync(a)},a)}]}function Oe(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],k,l;return l={resolve:function(a){if(g){var c=g;g=r;k=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},
notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),J=function(d){try{l.resolve((O(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},E=function(b){try{l.resolve((O(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},B=function(b){try{l.notify((O(h)?h:c)(b))}catch(d){a(d)}};g?g.push([J,E,B]):k.then(J,E,B);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):
d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&O(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&O(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((O(g)?
g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,when:function(h,k,l,p){var n=e(),t,s=function(b){try{return(O(k)?k:c)(b)}catch(d){return a(d),g(d)}},J=function(b){try{return(O(l)?l:d)(b)}catch(c){return a(c),g(c)}},E=function(b){try{return(O(p)?p:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){t||(t=!0,n.resolve(f(a).then(s,J,E)))},function(a){t||(t=!0,n.resolve(J(a)))},function(a){t||n.notify(E(a))})});return n.promise},all:function(a){var b=e(),c=0,d=M(a)?
[]:{};q(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function te(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:
function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function le(){var b=10,a=I("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=db();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=
[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(n.$$phase)throw a("inprog",n.$$phase);n.$$phase=b}function k(a,b){var c=f(a);Ra(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=
new a,a.$id=db());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,g={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;if(!O(b)){var h=k(b||D,"listener");g.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var m=g.fn;
g.fn=function(a,b,c){m.call(this,a,b,c);Ea(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ea(f,g);c=null}},$watchGroup:function(a,b){var c=Array(a.length),d=Array(a.length),e=[],f=0,g=this;q(a,function(a,b){e.push(g.$watch(a,function(a,e){d[b]=a;c[b]=e;f++}))},this);e.push(g.$watch(function(){return f},function(){b(d,c,g)}));return function(){q(e,function(a){a()})}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,m=f(a),l=[],n={},p=!0,q=0;return this.$watch(function(){d=
m(c);var a,b;if(R(d))if(cb(d))for(e!==l&&(e=l,q=e.length=0,k++),a=d.length,q!==a&&(k++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(k++,e[b]=d[b]):(q++,e[b]=d[b],k++));if(q>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){p?(p=!1,b(d,d,c)):b(d,g,c);if(h)if(R(d))if(cb(d)){g=Array(d.length);
for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)Mc.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,q,v,r=b,K,L=[],y,G,C;m("$digest");c=null;do{v=!1;for(K=this;k.length;){try{C=k.shift(),C.scope.$eval(C.expression)}catch(F){n.$$phase=null,e(F)}c=null}a:do{if(h=K.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=d.get(K))!==(g=d.last)&&!(d.eq?ya(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))v=!0,c=d,d.last=
d.eq?aa(f):f,d.fn(f,g===p?f:g,K),5>r&&(y=4-r,L[y]||(L[y]=[]),G=O(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,G+="; newVal: "+sa(f)+"; oldVal: "+sa(g),L[y].push(G));else if(d===c){v=!1;break a}}catch(u){n.$$phase=null,e(u)}if(!(h=K.$$childHead||K!==this&&K.$$nextSibling))for(;K!==this&&!(h=K.$$nextSibling);)K=K.$parent}while(K=h);if((v||k.length)&&!r--)throw n.$$phase=null,a("infdig",b,sa(L));}while(v||k.length);for(n.$$phase=null;l.length;)try{l.shift()()}catch(x){e(x)}},$destroy:function(){if(!this.$$destroyed){var a=
this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==n&&(q(this.$$listenerCount,gb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=
this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=D,this.$on=this.$watch=this.$watchGroup=function(){return D})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){n.$$phase||n.$$asyncQueue.length||g.defer(function(){n.$$asyncQueue.length&&n.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{n.$$phase=null;
try{n.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[fb(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(ra.call(arguments,1)),m,l;do{d=f.$$listeners[a]||
c;h.currentScope=f;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,k)}catch(n){e(n)}else d.splice(m,1),m--,l--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ra.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(m){e(m)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&
c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var n=new h;return n}]}function od(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file|blob):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return F(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return F(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!P||8<=P)if(f=ta(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Pe(b){if("self"===
b)return b;if(x(b)){if(-1<b.indexOf("***"))throw va("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(eb(b))return RegExp("^"+b.source+"$");throw va("imatcher");}function Nc(b){var a=[];F(b)&&q(b,function(b){a.push(Pe(b))});return a}function oe(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Nc(a));return b};this.resourceUrlBlacklist=
function(b){arguments.length&&(a=Nc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw va("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=
d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw va("icontext",a,b);if(null===b||b===r||""===b)return b;if("string"!==typeof b)throw va("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===r||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=ta(d.toString()),l,p,n=!1;l=0;for(p=b.length;l<p;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){n=!0;break}if(n)for(l=
0,p=a.length;l<p;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){n=!1;break}if(n)return d;throw va("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw va("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ne(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw va("iequirks");var e=aa(fa);e.isEnabled=function(){return b};e.trustAs=
d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Da);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;q(fa,function(a,b){var c=u(b);e[Ta("parse_as_"+c)]=function(b){return f(a,b)};e[Ta("get_trusted_"+c)]=function(b){return g(a,b)};e[Ta("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function pe(){this.$get=["$window",
"$document",function(b,a){var c={},d=Q((/android (\d+)/.exec(u((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,p=!1;if(k){for(var n in k)if(l=m.exec(n)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);p=!!("animation"in k||h+"Animation"in k);!d||l&&p||(l=x(f.body.style.webkitTransition),
p=x(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==P)return!1;if(A(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:dc(),vendorPrefix:h,transitions:l,animations:p,android:d,msie:P,msieDocumentMode:g}}]}function re(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,m){var k=c.defer(),l=k.promise,p=F(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),
d(a)}finally{delete f[l.$$timeoutId]}p||b.$apply()},h);l.$$timeoutId=h;f[h]=k;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ta(b,a){var c=b;P&&(V.setAttribute("href",c),c=V.href);V.setAttribute("href",c);return{href:V.href,protocol:V.protocol?V.protocol.replace(/:$/,""):"",host:V.host,search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,
""):"",hostname:V.hostname,port:V.port,pathname:"/"===V.pathname.charAt(0)?V.pathname:"/"+V.pathname}}function Pb(b){b=x(b)?ta(b):b;return b.protocol===Oc.protocol&&b.host===Oc.host}function se(){this.$get=$(N)}function oc(b){function a(d,e){if(R(d)){var f={};q(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Pc);a("date",Qc);a("filter",Qe);a("json",Re);a("limitTo",
Se);a("lowercase",Te);a("number",Rc);a("orderBy",Sc);a("uppercase",Ue)}function Qe(){return function(b,a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Qa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Mc.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});
var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!=typeof a[b]&&
e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h)&&d.push(h)}return d}}function Pc(b){var a=b.NUMBER_FORMATS;return function(b,d){A(d)&&(d=a.CURRENCY_SYM);return Tc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Rc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Tc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Tc(b,a,c,d,e){if(null==b||!isFinite(b)||
R(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?g="0":(h=g,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Uc)[1]||"").length;A(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));g=Math.pow(10,e);b=Math.round(b*g)/g;b=(""+b).split(Uc);g=b[0];b=b[1]||"";var l=0,p=a.lgSize,n=a.gSize;if(g.length>=p+n)for(l=g.length-p,k=0;k<l;k++)0===(l-k)%n&&0!==k&&(h+=c),h+=g.charAt(k);for(k=l;k<g.length;k++)0===
(g.length-k)%p&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function vb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function X(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return vb(e,a,d)}}function wb(b,a){return function(c,d){var e=c["get"+b](),f=Fa(a?"SHORT"+b:b);return d[f][e]}}
function Vc(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Wc(b){return function(a){var c=Vc(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return vb(a,b)}}function Qc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Q(b[9]+b[10]),g=Q(b[9]+b[11]));h.call(a,Q(b[1]),Q(b[2])-1,Q(b[3]));f=Q(b[4]||0)-f;g=Q(b[5]||
0)-g;h=Q(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;x(c)&&(c=Ve.test(c)?Q(c):a(c));Cb(c)&&(c=new Date(c));if(!qa(c))return c;for(;e;)(m=We.exec(e))?(g=g.concat(ra.call(m,1)),e=g.pop()):(g.push(e),e=null);q(g,function(a){h=Xe[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,
"").replace(/''/g,"'")});return f}}function Re(){return function(b){return sa(b,!0)}}function Se(){return function(b,a){if(!M(b)&&!x(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):Q(a);if(x(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Sc(b){return function(a,c,d){function e(a,b){return Pa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=
typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!M(a)||!c)return a;c=M(c)?c:[c];c=fd(c,function(a){var c=!1,d=a||Da;if(x(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=
c[d](a,b);if(0!==e)return e}return 0},d))}}function wa(b){O(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Xc(b,a,c,d){function e(a,c){c=c?"-"+ib(c,"-"):"";d.removeClass(b,(a?xb:yb)+c);d.addClass(b,(a?yb:xb)+c)}var f=this,g=b.parent().controller("form")||zb,h=0,m=f.$error={},k=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ma);e(!0);f.$addControl=function(a){Aa(a.$name,"input");k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=
function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(m,function(b,c){f.$setValidity(c,!0,a)});Ea(k,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Ea(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||e(b);if(d){if(-1!=fb(d,c))return}else m[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ma);d.addClass(b,Ab);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=
function(){d.removeClass(b,Ab);d.addClass(b,Ma);f.$dirty=!1;f.$pristine=!0;q(k,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:r}function Ye(b,a,c){var d=c.prop("validity");R(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function ab(b,a,c,d,e,f){var g=a.prop("validity"),h=a[0].placeholder,m={};if(!e.android){var k=!1;a.on("compositionstart",function(a){k=!0});a.on("compositionend",
function(){k=!1;l()})}var l=function(e){if(!k){var f=a.val(),n=e&&e.type;if(P&&"input"===(e||m).type&&a[0].placeholder!==h)h=a[0].placeholder;else if(Pa(c.ngTrim||"T")&&(f=Y(f)),d.$viewValue!==f||g&&""===f&&!g.valueMissing)b.$$phase?d.$setViewValue(f,n):b.$apply(function(){d.$setViewValue(f,n)})}};if(d.$options&&d.$options.updateOn)a.on(d.$options.updateOn,l);if(!d.$options||d.$options.updateOnDefault){if(e.hasEvent("input"))a.on("input",l);else{var p,n=function(a){p||(p=f.defer(function(){l(a);p=
null}))};a.on("keydown",function(a){var b=a.keyCode;91===b||(15<b&&19>b||37<=b&&40>=b)||n(a)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l)}d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var q=c.ngPattern;q&&((e=q.match(/^\/(.*)\/([gim]*)$/))?(q=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||q.test(a),a)}):e=function(c){var e=b.$eval(q);if(!e||!e.test)throw I("ngPattern")("noregexp",q,e,ga(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),
c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var s=Q(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=s,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var J=Q(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=J,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Bb(b,a){return function(c){var d;return qa(c)?c:x(c)&&(b.lastIndex=0,c=b.exec(c))?(c.shift(),d={yyyy:0,MM:1,dd:1,HH:0,mm:0},q(c,function(b,c){c<
a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm)):NaN}}function bb(b,a,c,d){return function(e,f,g,h,m,k,l){ab(e,f,g,h,m,k);h.$parsers.push(function(d){if(h.$isEmpty(d))return h.$setValidity(b,!0),null;if(a.test(d))return h.$setValidity(b,!0),c(d);h.$setValidity(b,!1);return r});h.$formatters.push(function(a){return qa(a)?l("date")(a,d):""});g.min&&(e=function(a){var b=h.$isEmpty(a)||c(a)>=c(g.min);h.$setValidity("min",b);return b?a:r},h.$parsers.push(e),h.$formatters.push(e));g.max&&
(e=function(a){var b=h.$isEmpty(a)||c(a)<=c(g.max);h.$setValidity("max",b);return b?a:r},h.$parsers.push(e),h.$formatters.push(e))}}function Xb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!M(a)){if(x(a))return a.split(" ");if(R(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b}}return a}return{restrict:"AC",link:function(f,g,h){function m(a,b){var c=
g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!l){var q=m(k,1);h.$addClass(q)}else if(!ya(b,l)){var s=e(l),q=d(k,s),k=d(s,k),k=m(k,-1),q=m(q,1);0===q.length?c.removeClass(g,k):0===k.length?c.addClass(g,q):c.setClass(g,q,k)}}l=aa(b)}var l;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",
function(c,d){var g=c&1;if(g!==d&1){var k=e(f.$eval(h[b]));g===a?(g=m(k,1),h.$addClass(g)):(g=m(k,-1),h.$removeClass(g))}})}}}]}var u=function(b){return x(b)?b.toLowerCase():b},Mc=Object.prototype.hasOwnProperty,Fa=function(b){return x(b)?b.toUpperCase():b},P,y,Ga,ra=[].slice,Ze=[].push,xa=Object.prototype.toString,Oa=I("ng"),Qa=N.angular||(N.angular={}),Sa,La,ka=["0","0","0"];P=Q((/msie (\d+)/.exec(u(navigator.userAgent))||[])[1]);isNaN(P)&&(P=Q((/trident\/.*; rv:(\d+)/.exec(u(navigator.userAgent))||
[])[1]));D.$inject=[];Da.$inject=[];var Y=function(){return String.prototype.trim?function(b){return x(b)?b.trim():b}:function(b){return x(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();La=9>P?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Fa(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var hc=["ng-","data-ng-","ng:","x-ng-"],jd=/[A-Z]/g,md={full:"1.3.0-beta.6",major:1,minor:3,dot:0,codeName:"expedient-caffeination"},
Va=U.cache={},jb=U.expando="ng-"+(new Date).getTime(),Be=1,sb=N.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Ua=N.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};U._data=function(b){return this.cache[b[this.expando]]||{}};var ve=/([\:\-\_]+(.))/g,we=/^moz([A-Z])/,Kb=I("jqLite"),Ae=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Jb=/<|&#?\w+;/,ye=/<([\w:]+)/,ze=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=da.caption=da.thead;da.th=da.td;var Ka=U.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===S.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),U(N).on("load",a))},
toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Ze,sort:[].sort,splice:[].splice},nb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){nb[u(b)]=b});var wc={};q("input select option textarea button form details".split(" "),function(b){wc[Fa(b)]=!0});q({data:sc,inheritedData:mb,scope:function(b){return y(b).data("$scope")||mb(b.parentNode||b,["$isolateScope",
"$scope"])},isolateScope:function(b){return y(b).data("$isolateScope")||y(b).data("$isolateScopeNoTemplate")},controller:tc,injector:function(b){return mb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Mb,css:function(b,a,c){a=Ta(a);if(F(c))b.style[a]=c;else{var d;8>=P&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=P&&(d=""===d?r:d);return d}},attr:function(b,a,c){var d=u(a);if(nb[d])if(F(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||D).specified?d:r;else if(F(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?r:b},prop:function(b,a,c){if(F(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(A(d))return e?b[e]:"";b[e]=d}var a=[];9>P?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(A(a)){if("SELECT"===La(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(A(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ha(d[c]);b.innerHTML=a},empty:uc},function(b,a){U.prototype[a]=function(a,d){var e,f;if(b!==uc&&(2==b.length&&b!==Mb&&b!==tc?a:d)===r){if(R(a)){for(e=0;e<this.length;e++)if(b===sc)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;f=e===r?Math.min(this.length,1):this.length;for(var g=0;g<f;g++){var h=b(this[g],a,d);e=
e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:qc,dealoc:Ha,on:function a(c,d,e,f){if(F(f))throw Kb("onargs");var g=la(c,"events"),h=la(c,"handle");g||la(c,"events",g={});h||la(c,"handle",h=Ce(c,g));q(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=S.body.contains||S.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):
a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else sb(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:rc,one:function(a,c,d){a=y(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ha(a);q(new U(c),function(c){d?e.insertBefore(c,d.nextSibling):
e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new U(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new U(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ha(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new U(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:lb,removeClass:kb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=d;A(f)&&(f=!Mb(a,c));(f?lb:kb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Lb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:D,stopPropagation:D}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){U.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)A(g)?(g=a(this[h],c,e,f),F(g)&&(g=y(g))):pc(g,a(this[h],c,e,f));return F(g)?g:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});Wa.prototype={put:function(a,c){this[Ia(a)]=c},get:function(a){return this[Ia(a)]},
remove:function(a){var c=this[a=Ia(a)];delete this[a];return c}};var yc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Ee=/,/,Fe=/^\s*(_?)(\S+?)\1\s*$/,xc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ja=I("$injector");Eb.$$annotate=Nb;var $e=I("$animate"),Zd=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw $e("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,h){g?g.after(a):c.prepend(a);h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=x(c)?c:M(c)?c.join(" "):"";q(a,function(a){lb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=x(c)?c:M(c)?c.join(" "):"";q(a,function(a){kb(a,c)});g&&d(g)},setClass:function(a,c,g,h){q(a,function(a){lb(a,c);kb(a,g)});
h&&d(h)},enabled:D}}]}],ia=I("$compile");kc.$inject=["$provide","$$sanitizeUriProvider"];var Ie=/^(x[\:\-_]|data[\:\-_])/i,Ec=I("$interpolate"),af=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Le={http:80,https:443,ftp:21},Sb=I("$location");Ub.prototype=Tb.prototype=Hc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a,c){if(A(a))return this.$$url;var d=af.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:tb("$$protocol"),
host:tb("$$host"),port:tb("$$port"),path:Ic("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(x(a))this.$$search=gc(a);else if(R(a))this.$$search=a;else throw Sb("isrcharg");break;default:A(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Ic("$$hash",Da),replace:function(){this.$$replace=!0;return this}};var Ba=I("$parse"),Lc={},ua,Na={"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:D,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return F(d)?F(e)?d+e:d:F(e)?e:r},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(F(d)?d:0)-(F(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":D,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,
c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},bf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},
Wb=function(a){this.options=a};Wb.prototype={constructor:Wb,lex:function(a){this.text=a;this.index=0;this.ch=r;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),f=Na[this.ch],g=Na[d],h=Na[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):g?(this.tokens.push({index:this.index,text:d,fn:g}),this.index+=2):f?(this.tokens.push({index:this.index,
text:this.ch,fn:f,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===
a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=F(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Ba("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=u(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=
d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;
this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(Na.hasOwnProperty(c))d.fn=Na[c],d.json=Na[c];else{var m=Kc(c,this.options,this.text);d.fn=w(function(a,c){return m(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:g,json:!1}))},
readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=bf[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=
g}this.index++}this.throwError("Unterminated quote",c)}};var $a=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};$a.ZERO=w(function(){return 0},{constant:!0});$a.prototype={constructor:$a,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?
(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw Ba("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Ba("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,
e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return w(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return w(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return w(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},
statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=
function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn($a.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Kc(d,this.options,this.text);return w(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){return ub(a(e,h),d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return w(function(e,f){var g=a(e,f),h=d(e,f),m;if(!g)return r;(g=Za(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=r,m.then(function(a){m.$$v=
a})),g=g.$$v);return g},{assign:function(e,f,g){var h=d(e,g);return Za(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],m=c?c(f,g):f,k=0;k<d.length;k++)h.push(d[k](f,g));k=a(f,g,m)||D;Za(m,e.text);Za(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Za(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return w(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return w(function(c,d){for(var e={},m=0;m<
a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Vb={},va=I("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},V=S.createElement("a"),Oc=ta(N.location.href,!0);oc.$inject=["$provide"];Pc.$inject=["$locale"];Rc.$inject=["$locale"];var Uc=".",Xe={yyyy:X("FullYear",4),yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:wb("Month"),MMM:wb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",
1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:wb("Day"),EEE:wb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(vb(Math[0<a?"floor":"ceil"](a/60),2)+vb(Math.abs(a%60),2))},ww:Wc(2),w:Wc(1)},We=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Ve=/^\-?\d+$/;Qc.$inject=["$locale"];var Te=
$(u),Ue=$(Fa);Sc.$inject=["$parse"];var pd=$({restrict:"E",compile:function(a,c){8>=P&&(c.href||c.name||c.$set("href",""),a.append(S.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===xa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),Hb={};q(nb,function(a,c){if("multiple"!=a){var d=na("ng-"+c);Hb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,
!!a)})}}}}});q(["src","srcset","href"],function(a){var c=na("ng-"+a);Hb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===xa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(h,a),P&&g&&e.prop(g,f[h]))})}}}});var zb={$addControl:D,$removeControl:D,$setValidity:D,$setDirty:D,$setPristine:D};Xc.$inject=["$element","$attrs","$scope","$animate"];var Yc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Xc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",h);e.on("$destroy",function(){c(function(){Ua(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=f.name||f.ngForm;k&&ub(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&ub(a,k,r,k);w(g,zb)})}}}}}]},qd=Yc(),Dd=Yc(!0),cf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
df=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,ef=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Zc=/^(\d{4})-(\d{2})-(\d{2})$/,$c=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/,Yb=/^(\d{4})-W(\d\d)$/,ad=/^(\d{4})-(\d\d)$/,bd=/^(\d\d):(\d\d)$/,ff=/(\b|^)default(\b|$)/,cd={text:ab,date:bb("date",Zc,Bb(Zc,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":bb("datetimelocal",$c,Bb($c,["yyyy","MM","dd","HH","mm"]),"yyyy-MM-ddTHH:mm"),time:bb("time",bd,Bb(bd,["HH","mm"]),"HH:mm"),week:bb("week",Yb,function(a){if(qa(a))return a;
if(x(a)){Yb.lastIndex=0;var c=Yb.exec(a);if(c){a=+c[1];var d=+c[2],c=Vc(a),d=7*(d-1);return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),month:bb("month",ad,Bb(ad,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||ef.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return r});Ye(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=
parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return pa(e,"number",e.$isEmpty(a)||Cb(a),a)})},url:function(a,c,d,e,f,g){ab(a,c,d,e,f,g);a=function(a){return pa(e,"url",e.$isEmpty(a)||cf.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){ab(a,c,d,e,f,g);
a=function(a){return pa(e,"email",e.$isEmpty(a)||df.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){A(d.name)&&c.attr("name",db());var f=function(f){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value,f&&f.type)})};if(e.$options&&e.$options.updateOn)c.on(e.$options.updateOn,f);if(!e.$options||e.$options.updateOnDefault)c.on("click",f);e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,
g=d.ngFalseValue;x(f)||(f=!0);x(g)||(g=!1);d=function(d){a.$apply(function(){e.$setViewValue(c[0].checked,d&&d.type)})};if(e.$options&&e.$options.updateOn)c.on(e.$options.updateOn,d);if(!e.$options||e.$options.updateOnDefault)c.on("click",d);e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:D,button:D,submit:D,reset:D,file:D},lc=["$browser","$sniffer","$filter",function(a,
c,d){return{restrict:"E",require:["?ngModel"],link:function(e,f,g,h){h[0]&&(cd[u(g.type)]||cd.text)(e,f,g,h[0],c,a,d)}}}],yb="ng-valid",xb="ng-invalid",Ma="ng-pristine",Ab="ng-dirty",gf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout",function(a,c,d,e,f,g,h){function m(a,c){c=c?"-"+ib(c,"-"):"";g.removeClass(e,(a?xb:yb)+c);g.addClass(e,(a?yb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=
!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var k=f(d.ngModel),l=k.assign,p=null,n=this;if(!l)throw I("ngModel")("nonassign",d.ngModel,ga(e));this.$render=D;this.$isEmpty=function(a){return A(a)||""===a||null===a||a!==a};var t=e.inheritedData("$formController")||zb,s=0,r=this.$error={};e.addClass(Ma);m(!0);this.$setValidity=function(a,c){r[a]!==!c&&(c?(r[a]&&s--,s||(m(!0),n.$valid=!0,n.$invalid=!1)):(m(!1),n.$invalid=!0,n.$valid=!1,s++),r[a]=!c,m(c,a),t.$setValidity(a,c,n))};
this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Ab);g.addClass(e,Ma)};this.$cancelUpdate=function(){h.cancel(p);n.$render()};this.$$realSetViewValue=function(d){n.$viewValue=d;n.$pristine&&(n.$dirty=!0,n.$pristine=!1,g.removeClass(e,Ma),g.addClass(e,Ab),t.$setDirty());q(n.$parsers,function(a){d=a(d)});n.$modelValue!==d&&(n.$modelValue=d,l(a,d),q(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};this.$setViewValue=function(a,c){var d=n.$options&&(R(n.$options.debounce)?
n.$options.debounce[c]||n.$options.debounce["default"]||0:n.$options.debounce)||0;h.cancel(p);d?p=h(function(){n.$$realSetViewValue(a)},d):n.$$realSetViewValue(a)};a.$watch(function(){var c=k(a);if(n.$modelValue!==c){var d=n.$formatters,e=d.length;for(n.$modelValue=c;e--;)c=d[e](c);n.$viewValue!==c&&(n.$viewValue=c,n.$render())}return c})}],Sd=function(){return{require:["ngModel","^?form","^?ngModelOptions"],controller:gf,link:function(a,c,d,e){var f=e[0],g=e[1]||zb;g.$addControl(f);e[2]&&(f.$options=
e[2].$options);a.$on("$destroy",function(){g.$removeControl(f)})}}},Ud=$({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),mc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Td=function(){return{require:"ngModel",
link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!A(a)){var c=[];a&&q(a.split(f),function(a){a&&c.push(Y(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):r});e.$isEmpty=function(a){return!a||!a.length}}}},hf=/^(true|false|\d+)$/,Vd=function(){return{priority:100,compile:function(a,c){return hf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",
a)})}}}},Wd=function(){return{controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn?(this.$options.updateOnDefault=!1,this.$options.updateOn=this.$options.updateOn.replace(ff,function(){d.$options.updateOnDefault=!0;return" "})):this.$options.updateOnDefault=!0}]}},vd=wa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==r?"":a)})}),xd=["$interpolate",function(a){return function(c,
d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],wd=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var g=c(f.ngBindHtml);d.$watch(function(){return(g(d)||"").toString()},function(c){e.html(a.getTrustedHtml(g(d))||"")})}}],yd=Xb("",!0),Ad=Xb("Odd",0),zd=Xb("Even",1),Bd=wa({compile:function(a,c){c.$set("ngCloak",r);a.removeClass("ng-cloak")}}),Cd=[function(){return{scope:!0,
controller:"@",priority:500}}],nc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=na("ng-"+a);nc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d,e){d.on(u(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var Fd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,
d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(f){Pa(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=S.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),h&&(k=Gb(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],Gd=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Qa.noop,compile:function(g,h){var m=h.ngInclude||
h.src,k=h.onload||"",l=h.autoscroll;return function(g,h,q,s,r){var E=0,B,z,y,v=function(){z&&(z.remove(),z=null);B&&(B.$destroy(),B=null);y&&(e.leave(y,function(){z=null}),z=y,y=null)};g.$watch(f.parseAsResourceUrl(m),function(f){var m=function(){!F(l)||l&&!g.$eval(l)||d()},q=++E;f?(a.get(f,{cache:c}).success(function(a){if(q===E){var c=g.$new();s.template=a;a=r(c,function(a){v();e.enter(a,null,h,m)});B=c;y=a;B.$emit("$includeContentLoaded");g.$eval(k)}}).error(function(){q===E&&v()}),g.$emit("$includeContentRequested")):
(v(),s.template=null)})}}}}],Xd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],Hd=wa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Id=wa({terminal:!0,priority:1E3}),Jd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,l=e.$eval(m)||{},p={},n=c.startSymbol(),
t=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(g,function(a,c){s.test(c)&&(l[u(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});q(l,function(a,e){p[e]=c(a.replace(d,n+h+"-"+k+t))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return p[c](e)},function(a){f.text(a)})}}}],Kd=["$parse","$animate",function(a,c){var d=I("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,m){var k=g.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
p,n,t,s,r,E,B={$id:Ia};if(!l)throw d("iexp",k);g=l[1];h=l[2];(l=l[3])?(p=a(l),n=function(a,c,d){E&&(B[E]=a);B[r]=c;B.$index=d;return p(e,B)}):(t=function(a,c){return Ia(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);r=l[3]||l[1];E=l[2];var z={};e.$watchCollection(h,function(a){var g,h,l=f[0],p,B={},F,C,u,x,D,w,A=[];if(cb(a))D=a,p=n||t;else{p=n||s;D=[];for(u in a)a.hasOwnProperty(u)&&"$"!=u.charAt(0)&&D.push(u);D.sort()}F=D.length;
h=A.length=D.length;for(g=0;g<h;g++)if(u=a===D?g:D[g],x=a[u],x=p(u,x,g),Aa(x,"`track by` id"),z.hasOwnProperty(x))w=z[x],delete z[x],B[x]=w,A[g]=w;else{if(B.hasOwnProperty(x))throw q(A,function(a){a&&a.scope&&(z[a.id]=a)}),d("dupes",k,x);A[g]={id:x};B[x]=!1}for(u in z)z.hasOwnProperty(u)&&(w=z[u],g=Gb(w.clone),c.leave(g),q(g,function(a){a.$$NG_REMOVED=!0}),w.scope.$destroy());g=0;for(h=D.length;g<h;g++){u=a===D?g:D[g];x=a[u];w=A[g];A[g-1]&&(l=A[g-1].clone[A[g-1].clone.length-1]);if(w.scope){C=w.scope;
p=l;do p=p.nextSibling;while(p&&p.$$NG_REMOVED);w.clone[0]!=p&&c.move(Gb(w.clone),null,y(l));l=w.clone[w.clone.length-1]}else C=e.$new();C[r]=x;E&&(C[E]=u);C.$index=g;C.$first=0===g;C.$last=g===F-1;C.$middle=!(C.$first||C.$last);C.$odd=!(C.$even=0===(g&1));w.scope||m(C,function(a){a[a.length++]=S.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,y(l));l=a;w.scope=C;w.clone=a;B[w.id]=w})}z=B})}}}],Ld=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Pa(c)?"removeClass":
"addClass"](d,"ng-hide")})}}],Ed=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Pa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],Md=wa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Nd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g,h,m,k=[];c.$watch(e.ngSwitch||e.on,function(d){var p,n=k.length;if(0<n){if(m){for(p=
0;p<n;p++)m[p].remove();m=null}m=[];for(p=0;p<n;p++){var t=h[p];k[p].$destroy();m[p]=t;a.leave(t,function(){m.splice(p,1);0===m.length&&(m=null)})}}h=[];k=[];if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),q(g,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Od=wa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,
element:c})}}),Pd=wa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Rd=wa({link:function(a,c,d,e,f){if(!f)throw I("ngTransclude")("orphan",ga(c));f(function(a){c.empty();c.append(a)})}}),rd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],jf=I("ngOptions"),Qd=$({terminal:!0}),sd=["$compile","$parse",function(a,
c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:D};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,p;m.databound=d.ngModel;m.init=function(a,c,d){l=a;p=d};m.addOption=function(c){Aa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),p.parent()&&
p.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ia(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=D})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(w.parent()&&w.remove(),c.val(a),""===a&&x.prop("selected",!0)):A(a)&&
x?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){w.parent()&&w.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Wa(d.$viewValue);q(c.find("option"),function(c){c.selected=F(a.get(c.value))})};a.$watch(function(){ya(e,d.$viewValue)||(e=aa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(){var a=
{"":[]},c=[""],d,k,r,s,w;s=g.$modelValue;w=y(e)||[];var D=n?Zb(w):w,E,A,C;A={};r=!1;var G,I;if(t)if(v&&M(s))for(r=new Wa([]),C=0;C<s.length;C++)A[m]=s[C],r.put(v(e,A),s[C]);else r=new Wa(s);for(C=0;E=D.length,C<E;C++){k=C;if(n){k=D[C];if("$"===k.charAt(0))continue;A[n]=k}A[m]=w[k];d=p(e,A)||"";(k=a[d])||(k=a[d]=[],c.push(d));t?d=F(r.remove(v?v(e,A):q(e,A))):(v?(d={},d[m]=s,d=v(e,d)===v(e,A)):d=s===q(e,A),r=r||d);G=l(e,A);G=F(G)?G:"";k.push({id:v?v(e,A):n?D[C]:C,label:G,selected:d})}t||(u||null===
s?a[""].unshift({id:"",label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));A=0;for(D=c.length;A<D;A++){d=c[A];k=a[d];x.length<=A?(s={element:z.clone().attr("label",d),label:k.label},w=[s],x.push(w),f.append(s.element)):(w=x[A],s=w[0],s.label!=d&&s.element.attr("label",s.label=d));G=null;C=0;for(E=k.length;C<E;C++)r=k[C],(d=w[C+1])?(G=d.element,d.label!==r.label&&G.text(d.label=r.label),d.id!==r.id&&G.val(d.id=r.id),d.selected!==r.selected&&G.prop("selected",d.selected=r.selected)):
(""===r.id&&u?I=u:(I=B.clone()).val(r.id).attr("selected",r.selected).text(r.label),w.push({element:I,label:r.label,id:r.id,selected:r.selected}),G?G.after(I):s.element.append(I),G=I);for(C++;w.length>C;)w.pop().element.remove()}for(;x.length>A;)x.pop()[0].element.remove()}var k;if(!(k=s.match(d)))throw jf("iexp",s,ga(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),y=c(k[7]),v=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());
f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,p,s,w,u;if(t)for(k=[],p=0,w=x.length;p<w;p++)for(a=x[p],l=1,s=a.length;l<s;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(v)for(u=0;u<c.length&&(d[m]=c[u],v(e,d)!=h);u++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=r;else if(""===h)k=null;else if(v)for(u=0;u<c.length;u++){if(d[m]=c[u],v(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=
!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var n=m[0];m=m[1];var t=h.multiple,s=h.ngOptions,u=!1,x,B=y(S.createElement("option")),z=y(S.createElement("optgroup")),w=B.clone();h=0;for(var v=g.children(),D=v.length;h<D;h++)if(""===v[h].value){x=u=v.eq(h);break}n.init(m,u,w);t&&(m.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,m):t?l(e,g,m):k(e,g,m,n)}}}}],ud=["$interpolate",function(a){var c={addOption:D,removeOption:D};return{restrict:"E",priority:100,compile:function(d,e){if(A(e.value)){var f=
a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],td=$({restrict:"E",terminal:!1});N.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ga=N.jQuery)?(y=Ga,w(Ga.fn,
{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),Ib("remove",!0,!0,!1),Ib("empty",!1,!1,!1),Ib("html",!1,!1,!0)):y=U,Qa.element=y,ld(Qa),y(S).ready(function(){id(S,ic)}))})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(s,g,P){'use strict';g.module("ngAnimate",["ng"]).factory("$$animateReflow",["$$rAF","$document",function(g,s){return function(e){return g(function(){e()})}}]).config(["$provide","$animateProvider",function(ga,G){function e(e){for(var p=0;p<e.length;p++){var g=e[p];if(g.nodeType==ba)return g}}function u(p){return g.element(e(p))}var m=g.noop,p=g.forEach,Q=G.$$selectors,ba=1,h="$$ngAnimateState",J="ng-animate",r={running:!0};ga.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement",
    "$$asyncCallback","$rootScope","$document",function(t,s,aa,K,E,H,P){function R(a){if(a){var b=[],c={};a=a.substr(1).split(".");(aa.transitions||aa.animations)&&b.push(s.get(Q[""]));for(var d=0;d<a.length;d++){var f=a[d],e=Q[f];e&&!c[f]&&(b.push(s.get(e)),c[f]=!0)}return b}}function L(a,b,c){function d(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];if(c||d)return"leave"==b&&(d=c,c=null),A.push({event:b,fn:c}),l.push({event:b,fn:d}),!0}function f(b,d,e){var f=[];p(b,function(a){a.fn&&
    f.push(a)});var n=0;p(f,function(b,p){var C=function(){a:{if(d){(d[p]||m)();if(++n<f.length)break a;d=null}e()}};switch(b.event){case "setClass":d.push(b.fn(a,q,y,C));break;case "addClass":d.push(b.fn(a,q||c,C));break;case "removeClass":d.push(b.fn(a,y||c,C));break;default:d.push(b.fn(a,C))}});d&&0===d.length&&e()}var e=a[0];if(e){var h="setClass"==b,r=h||"addClass"==b||"removeClass"==b,q,y;g.isArray(c)&&(q=c[0],y=c[1],c=q+" "+y);var z=a.attr("class")+" "+c;if(T(z)){var v=m,w=[],l=[],x=m,n=[],A=[],
        z=(" "+z).replace(/\s+/g,".");p(R(z),function(a){!d(a,b)&&h&&(d(a,"addClass"),d(a,"removeClass"))});return{node:e,event:b,className:c,isClassBased:r,isSetClassOperation:h,before:function(a){v=a;f(l,w,function(){v=m;a()})},after:function(a){x=a;f(A,n,function(){x=m;a()})},cancel:function(){w&&(p(w,function(a){(a||m)(!0)}),v(!0));n&&(p(n,function(a){(a||m)(!0)}),x(!0))}}}}}function F(a,b,c,d,f,e,r){function m(d){var e="$animate:"+d;x&&(x[e]&&0<x[e].length)&&E(function(){c.triggerHandler(e,{event:a,
        className:b})})}function q(){m("before")}function y(){m("after")}function z(){m("close");r&&E(function(){r()})}function v(){v.hasBeenRun||(v.hasBeenRun=!0,e())}function w(){if(!w.hasBeenRun){w.hasBeenRun=!0;var d=c.data(h);d&&(l&&l.isClassBased?B(c,b):(E(function(){var d=c.data(h)||{};t==d.index&&B(c,b,a)}),c.data(h,d)));z()}}var l=L(c,a,b);if(l){b=l.className;var x=g.element._data(l.node),x=x&&x.events;d||(d=f?f.parent():c.parent());var n=c.data(h)||{};f=n.active||{};var A=n.totalActive||0,C=n.last;
        if(l.isClassBased&&(n.disabled||C&&!C.isClassBased)||N(c,d))v(),q(),y(),w();else{d=!1;if(0<A){n=[];if(l.isClassBased)"setClass"==C.event?(n.push(C),B(c,b)):f[b]&&(s=f[b],s.event==a?d=!0:(n.push(s),B(c,b)));else if("leave"==a&&f["ng-leave"])d=!0;else{for(var s in f)n.push(f[s]),B(c,s);f={};A=0}0<n.length&&p(n,function(a){a.cancel()})}!l.isClassBased||(l.isSetClassOperation||d)||(d="addClass"==a==c.hasClass(b));if(d)q(),y(),z();else{if("leave"==a)c.one("$destroy",function(a){a=g.element(this);var b=
            a.data(h);b&&(b=b.active["ng-leave"])&&(b.cancel(),B(a,"ng-leave"))});c.addClass(J);var t=O++;A++;f[b]=l;c.data(h,{last:l,active:f,index:t,totalActive:A});q();l.before(function(d){var e=c.data(h);d=d||!e||!e.active[b]||l.isClassBased&&e.active[b].event!=a;v();!0===d?w():(y(),l.after(w))})}}}else v(),q(),y(),w()}function U(a){if(a=e(a))a=g.isFunction(a.getElementsByClassName)?a.getElementsByClassName(J):a.querySelectorAll("."+J),p(a,function(a){a=g.element(a);(a=a.data(h))&&a.active&&p(a.active,function(a){a.cancel()})})}
        function B(a,b){if(e(a)==e(K))r.disabled||(r.running=!1,r.structural=!1);else if(b){var c=a.data(h)||{},d=!0===b;!d&&(c.active&&c.active[b])&&(c.totalActive--,delete c.active[b]);if(d||!c.totalActive)a.removeClass(J),a.removeData(h)}}function N(a,b){if(r.disabled)return!0;if(e(a)==e(K))return r.disabled||r.running;do{if(0===b.length)break;var c=e(b)==e(K),d=c?r:b.data(h),d=d&&(!!d.disabled||d.running||0<d.totalActive);if(c||d)return d;if(c)break}while(b=b.parent());return!0}var O=0;K.data(h,r);H.$$postDigest(function(){H.$$postDigest(function(){r.running=
            !1})});var V=G.classNameFilter(),T=V?function(a){return V.test(a)}:function(){return!0};return{enter:function(a,b,c,d){this.enabled(!1,a);t.enter(a,b,c);H.$$postDigest(function(){a=u(a);F("enter","ng-enter",a,b,c,m,d)})},leave:function(a,b){U(a);this.enabled(!1,a);H.$$postDigest(function(){F("leave","ng-leave",u(a),null,null,function(){t.leave(a)},b)})},move:function(a,b,c,d){U(a);this.enabled(!1,a);t.move(a,b,c);H.$$postDigest(function(){a=u(a);F("move","ng-move",a,b,c,m,d)})},addClass:function(a,b,c){a=u(a);F("addClass",b,a,null,null,function(){t.addClass(a,b)},c)},removeClass:function(a,b,c){a=u(a);F("removeClass",b,a,null,null,function(){t.removeClass(a,b)},c)},setClass:function(a,b,c,d){a=u(a);F("setClass",[b,c],a,null,null,function(){t.setClass(a,b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)B(b);else{var c=b.data(h)||{};c.disabled=!0;b.data(h,c)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);G.register("",["$window","$sniffer","$timeout",
    "$$animateReflow",function(h,r,u,K){function E(a,k){S&&S();W.push(k);S=K(function(){p(W,function(a){a()});W=[];S=null;M={}})}function H(a,k){var b=e(a);a=g.element(b);Y.push(a);b=Date.now()+k;b<=fa||(u.cancel(ea),fa=b,ea=u(function(){J(Y);Y=[]},k,!1))}function J(a){p(a,function(a){(a=a.data(n))&&(a.closeAnimationFn||m)()})}function R(a,k){var b=k?M[k]:null;if(!b){var c=0,d=0,e=0,f=0,n,Z,$,g;p(a,function(a){if(a.nodeType==ba){a=h.getComputedStyle(a)||{};$=a[I+z];c=Math.max(L($),c);g=a[I+v];n=a[I+w];
        d=Math.max(L(n),d);Z=a[q+w];f=Math.max(L(Z),f);var k=L(a[q+z]);0<k&&(k*=parseInt(a[q+l],10)||1);e=Math.max(k,e)}});b={total:0,transitionPropertyStyle:g,transitionDurationStyle:$,transitionDelayStyle:n,transitionDelay:d,transitionDuration:c,animationDelayStyle:Z,animationDelay:f,animationDuration:e};k&&(M[k]=b)}return b}function L(a){var k=0;a=g.isString(a)?a.split(/\s*,\s*/):[];p(a,function(a){k=Math.max(parseFloat(a)||0,k)});return k}function F(a){var k=a.parent(),b=k.data(x);b||(k.data(x,++da),
        b=da);return b+"-"+e(a).getAttribute("class")}function U(a,k,b,c){var d=F(k),f=d+" "+b,p=M[f]?++M[f].total:0,g={};if(0<p){var h=b+"-stagger",g=d+" "+h;(d=!M[g])&&k.addClass(h);g=R(k,g);d&&k.removeClass(h)}c=c||function(a){return a()};k.addClass(b);var h=k.data(n)||{},l=c(function(){return R(k,f)});c=l.transitionDuration;d=l.animationDuration;if(0===c&&0===d)return k.removeClass(b),!1;k.data(n,{running:h.running||0,itemIndex:p,stagger:g,timings:l,closeAnimationFn:m});a=0<h.running||"setClass"==a;0<
        c&&B(k,b,a);0<d&&(0<g.animationDelay&&0===g.animationDuration)&&(e(k).style[q]="none 0s");return!0}function B(a,b,c){"ng-enter"!=b&&("ng-move"!=b&&"ng-leave"!=b)&&c?a.addClass(A):e(a).style[I+v]="none"}function N(a,b){var c=I+v,d=e(a);d.style[c]&&0<d.style[c].length&&(d.style[c]="");a.removeClass(A)}function O(a){var b=q;a=e(a);a.style[b]&&0<a.style[b].length&&(a.style[b]="")}function V(a,b,c,f){function g(a){b.off(z,h);b.removeClass(r);d(b,c);a=e(b);for(var X in u)a.style.removeProperty(u[X])}function h(a){a.stopPropagation();
        var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(C));Math.max(a-A,0)>=x&&b>=v&&f()}var l=e(b);a=b.data(n);if(-1!=l.getAttribute("class").indexOf(c)&&a){var r="";p(c.split(" "),function(a,b){r+=(0<b?" ":"")+a+"-active"});var q=a.stagger,m=a.timings,s=a.itemIndex,v=Math.max(m.transitionDuration,m.animationDuration),w=Math.max(m.transitionDelay,m.animationDelay),x=w*ca,A=Date.now(),z=y+" "+G,t="",u=[];if(0<m.transitionDuration){var B=m.transitionPropertyStyle;
        -1==B.indexOf("all")&&(t+=D+"transition-property: "+B+";",t+=D+"transition-duration: "+m.transitionDurationStyle+";",u.push(D+"transition-property"),u.push(D+"transition-duration"))}0<s&&(0<q.transitionDelay&&0===q.transitionDuration&&(t+=D+"transition-delay: "+T(m.transitionDelayStyle,q.transitionDelay,s)+"; ",u.push(D+"transition-delay")),0<q.animationDelay&&0===q.animationDuration&&(t+=D+"animation-delay: "+T(m.animationDelayStyle,q.animationDelay,s)+"; ",u.push(D+"animation-delay")));0<u.length&&
    (m=l.getAttribute("style")||"",l.setAttribute("style",m+" "+t));b.on(z,h);b.addClass(r);a.closeAnimationFn=function(){g();f()};l=(s*(Math.max(q.animationDelay,q.transitionDelay)||0)+(w+v)*Q)*ca;a.running++;H(b,l);return g}f()}function T(a,b,c){var d="";p(a.split(","),function(a,X){d+=(0<X?",":"")+(c*b+parseInt(a,10))+"s"});return d}function a(a,b,c,e){if(U(a,b,c,e))return function(a){a&&d(b,c)}}function b(a,b,c,e){if(b.data(n))return V(a,b,c,e);d(b,c);e()}function c(c,d,e,f){var g=a(c,d,e);if(g){var h=
        g;E(d,function(){N(d,e);O(d);h=b(c,d,e,f)});return function(a){(h||m)(a)}}f()}function d(a,b){a.removeClass(b);var c=a.data(n);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(n))}function f(a,b){var c="";a=g.isArray(a)?a:a.split(/\s+/);p(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var D="",I,G,q,y;s.ontransitionend===P&&s.onwebkittransitionend!==P?(D="-webkit-",I="WebkitTransition",G="webkitTransitionEnd transitionend"):(I="transition",G="transitionend");s.onanimationend===
        P&&s.onwebkitanimationend!==P?(D="-webkit-",q="WebkitAnimation",y="webkitAnimationEnd animationend"):(q="animation",y="animationend");var z="Duration",v="Property",w="Delay",l="IterationCount",x="$$ngAnimateKey",n="$$ngAnimateCSS3Data",A="ng-animate-block-transitions",C=3,Q=1.5,ca=1E3,M={},da=0,W=[],S,ea=null,fa=0,Y=[];return{enter:function(a,b){return c("enter",a,"ng-enter",b)},leave:function(a,b){return c("leave",a,"ng-leave",b)},move:function(a,b){return c("move",a,"ng-move",b)},beforeSetClass:function(b,c,d,e){var g=f(d,"-remove")+" "+f(c,"-add"),h=a("setClass",b,g,function(a){var e=b.attr("class");b.removeClass(d);b.addClass(c);a=a();b.attr("class",e);return a});if(h)return E(b,function(){N(b,g);O(b);e()}),h;e()},beforeAddClass:function(b,c,d){var e=a("addClass",b,f(c,"-add"),function(a){b.addClass(c);a=a();b.removeClass(c);return a});if(e)return E(b,function(){N(b,c);O(b);d()}),e;d()},setClass:function(a,c,d,e){d=f(d,"-remove");c=f(c,"-add");return b("setClass",a,d+" "+c,e)},addClass:function(a,c,d){return b("addClass",a,f(c,"-add"),d)},beforeRemoveClass:function(b,c,d){var e=a("removeClass",b,f(c,"-remove"),function(a){var d=b.attr("class");b.removeClass(c);a=a();b.attr("class",d);return a});if(e)return E(b,function(){N(b,c);O(b);d()}),e;d()},removeClass:function(a,c,d){return b("removeClass",a,f(c,"-remove"),d)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map


/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.11.0 - 2014-05-01
 * License: MIT
 */
angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.transition","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(a,b,c){function d(a){for(var b in a)if(void 0!==f.style[b])return a[b]}var e=function(d,f,g){g=g||{};var h=a.defer(),i=e[g.animation?"animationEndEventName":"transitionEndEventName"],j=function(){c.$apply(function(){d.unbind(i,j),h.resolve(d)})};return i&&d.bind(i,j),b(function(){angular.isString(f)?d.addClass(f):angular.isFunction(f)?f(d):angular.isObject(f)&&d.css(f),i||h.resolve(d)}),h.promise.cancel=function(){i&&d.unbind(i,j),h.reject("Transition cancelled")},h.promise},f=document.createElement("trans"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},h={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return e.transitionEndEventName=d(g),e.animationEndEventName=d(h),e}]),angular.module("ui.bootstrap.collapse",["ui.bootstrap.transition"]).directive("collapse",["$transition",function(a){return{link:function(b,c,d){function e(b){function d(){j===e&&(j=void 0)}var e=a(c,b);return j&&j.cancel(),j=e,e.then(d,d),e}function f(){k?(k=!1,g()):(c.removeClass("collapse").addClass("collapsing"),e({height:c[0].scrollHeight+"px"}).then(g))}function g(){c.removeClass("collapsing"),c.addClass("collapse in"),c.css({height:"auto"})}function h(){if(k)k=!1,i(),c.css({height:0});else{c.css({height:c[0].scrollHeight+"px"});{c[0].offsetWidth}c.removeClass("collapse in").addClass("collapsing"),e({height:0}).then(i)}}function i(){c.removeClass("collapsing"),c.addClass("collapse")}var j,k=!0;b.$watch(d.collapse,function(a){a?h():f()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("accordionConfig",{closeOthers:!0}).controller("AccordionController",["$scope","$attrs","accordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("accordion",function(){return{restrict:"EA",controller:"AccordionController",transclude:!0,replace:!1,templateUrl:"template/accordion/accordion.html"}}).directive("accordionGroup",function(){return{require:"^accordion",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/accordion/accordion-group.html",scope:{heading:"@",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.$watch("isOpen",function(b){b&&d.closeOthers(a)}),a.toggleOpen=function(){a.isDisabled||(a.isOpen=!a.isOpen)}}}}).directive("accordionHeading",function(){return{restrict:"EA",transclude:!0,template:"",replace:!0,require:"^accordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,function(){}))}}}).directive("accordionTransclude",function(){return{require:"^accordionGroup",link:function(a,b,c,d){a.$watch(function(){return d[c.accordionTransclude]},function(a){a&&(b.html(""),b.append(a))})}}}),angular.module("ui.bootstrap.alert",[]).controller("AlertController",["$scope","$attrs",function(a,b){a.closeable="close"in b}]).directive("alert",function(){return{restrict:"EA",controller:"AlertController",templateUrl:"template/alert/alert.html",transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.bindHtml",[]).directive("bindHtmlUnsafe",function(){return function(a,b,c){b.addClass("ng-binding").data("$binding",c.bindHtmlUnsafe),a.$watch(c.bindHtmlUnsafe,function(a){b.html(a||"")})}}),angular.module("ui.bootstrap.buttons",[]).constant("buttonConfig",{activeClass:"active",toggleEvent:"click"}).controller("ButtonsController",["buttonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("btnRadio",function(){return{require:["btnRadio","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){var e=d[0],f=d[1];f.$render=function(){b.toggleClass(e.activeClass,angular.equals(f.$modelValue,a.$eval(c.btnRadio)))},b.bind(e.toggleEvent,function(){var d=b.hasClass(e.activeClass);(!d||angular.isDefined(c.uncheckable))&&a.$apply(function(){f.$setViewValue(d?null:a.$eval(c.btnRadio)),f.$render()})})}}}).directive("btnCheckbox",function(){return{require:["btnCheckbox","ngModel"],controller:"ButtonsController",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){var d=a.$eval(b);return angular.isDefined(d)?d:c}var h=d[0],i=d[1];i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.bind(h.toggleEvent,function(){a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",["ui.bootstrap.transition"]).controller("CarouselController",["$scope","$timeout","$transition",function(a,b,c){function d(){e();var c=+a.interval;!isNaN(c)&&c>=0&&(g=b(f,c))}function e(){g&&(b.cancel(g),g=null)}function f(){h?(a.next(),d()):a.pause()}var g,h,i=this,j=i.slides=a.slides=[],k=-1;i.currentSlide=null;var l=!1;i.select=a.select=function(e,f){function g(){if(!l){if(i.currentSlide&&angular.isString(f)&&!a.noTransition&&e.$element){e.$element.addClass(f);{e.$element[0].offsetWidth}angular.forEach(j,function(a){angular.extend(a,{direction:"",entering:!1,leaving:!1,active:!1})}),angular.extend(e,{direction:f,active:!0,entering:!0}),angular.extend(i.currentSlide||{},{direction:f,leaving:!0}),a.$currentTransition=c(e.$element,{}),function(b,c){a.$currentTransition.then(function(){h(b,c)},function(){h(b,c)})}(e,i.currentSlide)}else h(e,i.currentSlide);i.currentSlide=e,k=m,d()}}function h(b,c){angular.extend(b,{direction:"",active:!0,leaving:!1,entering:!1}),angular.extend(c||{},{direction:"",active:!1,leaving:!1,entering:!1}),a.$currentTransition=null}var m=j.indexOf(e);void 0===f&&(f=m>k?"next":"prev"),e&&e!==i.currentSlide&&(a.$currentTransition?(a.$currentTransition.cancel(),b(g)):g())},a.$on("$destroy",function(){l=!0}),i.indexOfSlide=function(a){return j.indexOf(a)},a.next=function(){var b=(k+1)%j.length;return a.$currentTransition?void 0:i.select(j[b],"next")},a.prev=function(){var b=0>k-1?j.length-1:k-1;return a.$currentTransition?void 0:i.select(j[b],"prev")},a.isActive=function(a){return i.currentSlide===a},a.$watch("interval",d),a.$on("$destroy",e),a.play=function(){h||(h=!0,d())},a.pause=function(){a.noPause||(h=!1,e())},i.addSlide=function(b,c){b.$element=c,j.push(b),1===j.length||b.active?(i.select(j[j.length-1]),1==j.length&&a.play()):b.active=!1},i.removeSlide=function(a){var b=j.indexOf(a);j.splice(b,1),j.length>0&&a.active?i.select(b>=j.length?j[b-1]:j[b]):k>b&&k--}}]).directive("carousel",[function(){return{restrict:"EA",transclude:!0,replace:!0,controller:"CarouselController",require:"carousel",templateUrl:"template/carousel/carousel.html",scope:{interval:"=",noTransition:"=",noPause:"="}}}]).directive("slide",function(){return{require:"^carousel",restrict:"EA",transclude:!0,replace:!0,templateUrl:"template/carousel/slide.html",scope:{active:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)}),a.$watch("active",function(b){b&&d.select(a)})}}}),angular.module("ui.bootstrap.dateparser",[]).service("dateParser",["$locale","orderByFilter",function(a,b){function c(a,b,c){return 1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}this.parsers={};var d={yyyy:{regex:"\\d{4}",apply:function(a){this.year=+a}},yy:{regex:"\\d{2}",apply:function(a){this.year=+a+2e3}},y:{regex:"\\d{1,4}",apply:function(a){this.year=+a}},MMMM:{regex:a.DATETIME_FORMATS.MONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.MONTH.indexOf(b)}},MMM:{regex:a.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(b){this.month=a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)}},MM:{regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1}},M:{regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1}},dd:{regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},d:{regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a}},EEEE:{regex:a.DATETIME_FORMATS.DAY.join("|")},EEE:{regex:a.DATETIME_FORMATS.SHORTDAY.join("|")}};this.createParser=function(a){var c=[],e=a.split("");return angular.forEach(d,function(b,d){var f=a.indexOf(d);if(f>-1){a=a.split(""),e[f]="("+b.regex+")",a[f]="$";for(var g=f+1,h=f+d.length;h>g;g++)e[g]="",a[g]="$";a=a.join(""),c.push({index:f,apply:b.apply})}}),{regex:new RegExp("^"+e.join("")+"$"),map:b(c,"index")}},this.parse=function(b,d){if(!angular.isString(b))return b;d=a.DATETIME_FORMATS[d]||d,this.parsers[d]||(this.parsers[d]=this.createParser(d));var e=this.parsers[d],f=e.regex,g=e.map,h=b.match(f);if(h&&h.length){for(var i,j={year:1900,month:0,date:1,hours:0},k=1,l=h.length;l>k;k++){var m=g[k-1];m.apply&&m.apply.call(j,h[k])}return c(j.year,j.month,j.date)&&(i=new Date(j.year,j.month,j.date,j.hours)),i}}}]),angular.module("ui.bootstrap.position",[]).factory("$position",["$document","$window",function(a,b){function c(a,c){return a.currentStyle?a.currentStyle[c]:b.getComputedStyle?b.getComputedStyle(a)[c]:a.style[c]}function d(a){return"static"===(c(a,"position")||"static")}var e=function(b){for(var c=a[0],e=b.offsetParent||c;e&&e!==c&&d(e);)e=e.offsetParent;return e||c};return{position:function(b){var c=this.offset(b),d={top:0,left:0},f=e(b[0]);f!=a[0]&&(d=this.offset(angular.element(f)),d.top+=f.clientTop-f.scrollTop,d.left+=f.clientLeft-f.scrollLeft);var g=b[0].getBoundingClientRect();return{width:g.width||b.prop("offsetWidth"),height:g.height||b.prop("offsetHeight"),top:c.top-d.top,left:c.left-d.left}},offset:function(c){var d=c[0].getBoundingClientRect();return{width:d.width||c.prop("offsetWidth"),height:d.height||c.prop("offsetHeight"),top:d.top+(b.pageYOffset||a[0].documentElement.scrollTop),left:d.left+(b.pageXOffset||a[0].documentElement.scrollLeft)}},positionElements:function(a,b,c,d){var e,f,g,h,i=c.split("-"),j=i[0],k=i[1]||"center";e=d?this.offset(a):this.position(a),f=b.prop("offsetWidth"),g=b.prop("offsetHeight");var l={center:function(){return e.left+e.width/2-f/2},left:function(){return e.left},right:function(){return e.left+e.width}},m={center:function(){return e.top+e.height/2-g/2},top:function(){return e.top},bottom:function(){return e.top+e.height}};switch(j){case"right":h={top:m[k](),left:l[j]()};break;case"left":h={top:m[k](),left:e.left-f};break;case"bottom":h={top:m[j](),left:l[k]()};break;default:h={top:e.top-g,left:l[k]()}}return h}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.position"]).constant("datepickerConfig",{formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",datepickerMode:"day",minMode:"day",maxMode:"year",showWeeks:!0,startingDay:0,yearRange:20,minDate:null,maxDate:null}).controller("DatepickerController",["$scope","$attrs","$parse","$interpolate","$timeout","$log","dateFilter","datepickerConfig",function(a,b,c,d,e,f,g,h){var i=this,j={$setViewValue:angular.noop};this.modes=["day","month","year"],angular.forEach(["formatDay","formatMonth","formatYear","formatDayHeader","formatDayTitle","formatMonthTitle","minMode","maxMode","showWeeks","startingDay","yearRange"],function(c,e){i[c]=angular.isDefined(b[c])?8>e?d(b[c])(a.$parent):a.$parent.$eval(b[c]):h[c]}),angular.forEach(["minDate","maxDate"],function(d){b[d]?a.$parent.$watch(c(b[d]),function(a){i[d]=a?new Date(a):null,i.refreshView()}):i[d]=h[d]?new Date(h[d]):null}),a.datepickerMode=a.datepickerMode||h.datepickerMode,a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),this.activeDate=angular.isDefined(b.initDate)?a.$parent.$eval(b.initDate):new Date,a.isActive=function(b){return 0===i.compare(b.date,i.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(a){j=a,j.$render=function(){i.render()}},this.render=function(){if(j.$modelValue){var a=new Date(j.$modelValue),b=!isNaN(a);b?this.activeDate=a:f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'),j.$setValidity("date",b)}this.refreshView()},this.refreshView=function(){if(this.element){this._refreshView();var a=j.$modelValue?new Date(j.$modelValue):null;j.$setValidity("date-disabled",!a||this.element&&!this.isDisabled(a))}},this.createDateObject=function(a,b){var c=j.$modelValue?new Date(j.$modelValue):null;return{date:a,label:g(a,b),selected:c&&0===this.compare(a,c),disabled:this.isDisabled(a),current:0===this.compare(a,new Date)}},this.isDisabled=function(c){return this.minDate&&this.compare(c,this.minDate)<0||this.maxDate&&this.compare(c,this.maxDate)>0||b.dateDisabled&&a.dateDisabled({date:c,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===i.minMode){var c=j.$modelValue?new Date(j.$modelValue):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),j.$setViewValue(c),j.$render()}else i.activeDate=b,a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)-1]},a.move=function(a){var b=i.activeDate.getFullYear()+a*(i.step.years||0),c=i.activeDate.getMonth()+a*(i.step.months||0);i.activeDate.setFullYear(b,c,1),i.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===i.maxMode&&1===b||a.datepickerMode===i.minMode&&-1===b||(a.datepickerMode=i.modes[i.modes.indexOf(a.datepickerMode)+b])},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var k=function(){e(function(){i.element[0].focus()},0,!1)};a.$on("datepicker.focus",k),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey)if(b.preventDefault(),b.stopPropagation(),"enter"===c||"space"===c){if(i.isDisabled(i.activeDate))return;a.select(i.activeDate),k()}else!b.ctrlKey||"up"!==c&&"down"!==c?(i.handleKeyDown(c,b),i.refreshView()):(a.toggleMode("up"===c?1:-1),k())}}]).directive("datepicker",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/datepicker.html",scope:{datepickerMode:"=?",dateDisabled:"&"},require:["datepicker","?^ngModel"],controller:"DatepickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}).directive("daypicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/day.html",require:"^datepicker",link:function(b,c,d,e){function f(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?i[b]:29}function g(a,b){var c=new Array(b),d=new Date(a),e=0;for(d.setHours(12);b>e;)c[e++]=new Date(d),d.setDate(d.getDate()+1);return c}function h(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}b.showWeeks=e.showWeeks,e.step={months:1},e.element=c;var i=[31,28,31,30,31,30,31,31,30,31,30,31];e._refreshView=function(){var c=e.activeDate.getFullYear(),d=e.activeDate.getMonth(),f=new Date(c,d,1),i=e.startingDay-f.getDay(),j=i>0?7-i:-i,k=new Date(f);j>0&&k.setDate(-j+1);for(var l=g(k,42),m=0;42>m;m++)l[m]=angular.extend(e.createDateObject(l[m],e.formatDay),{secondary:l[m].getMonth()!==d,uid:b.uniqueId+"-"+m});b.labels=new Array(7);for(var n=0;7>n;n++)b.labels[n]={abbr:a(l[n].date,e.formatDayHeader),full:a(l[n].date,"EEEE")};if(b.title=a(e.activeDate,e.formatDayTitle),b.rows=e.split(l,7),b.showWeeks){b.weekNumbers=[];for(var o=h(b.rows[0][0].date),p=b.rows.length;b.weekNumbers.push(o++)<p;);}},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},e.handleKeyDown=function(a){var b=e.activeDate.getDate();if("left"===a)b-=1;else if("up"===a)b-=7;else if("right"===a)b+=1;else if("down"===a)b+=7;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getMonth()+("pageup"===a?-1:1);e.activeDate.setMonth(c,1),b=Math.min(f(e.activeDate.getFullYear(),e.activeDate.getMonth()),b)}else"home"===a?b=1:"end"===a&&(b=f(e.activeDate.getFullYear(),e.activeDate.getMonth()));e.activeDate.setDate(b)},e.refreshView()}}}]).directive("monthpicker",["dateFilter",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/month.html",require:"^datepicker",link:function(b,c,d,e){e.step={years:1},e.element=c,e._refreshView=function(){for(var c=new Array(12),d=e.activeDate.getFullYear(),f=0;12>f;f++)c[f]=angular.extend(e.createDateObject(new Date(d,f,1),e.formatMonth),{uid:b.uniqueId+"-"+f});b.title=a(e.activeDate,e.formatMonthTitle),b.rows=e.split(c,3)},e.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth())-new Date(b.getFullYear(),b.getMonth())},e.handleKeyDown=function(a){var b=e.activeDate.getMonth();if("left"===a)b-=1;else if("up"===a)b-=3;else if("right"===a)b+=1;else if("down"===a)b+=3;else if("pageup"===a||"pagedown"===a){var c=e.activeDate.getFullYear()+("pageup"===a?-1:1);e.activeDate.setFullYear(c)}else"home"===a?b=0:"end"===a&&(b=11);e.activeDate.setMonth(b)},e.refreshView()}}}]).directive("yearpicker",["dateFilter",function(){return{restrict:"EA",replace:!0,templateUrl:"template/datepicker/year.html",require:"^datepicker",link:function(a,b,c,d){function e(a){return parseInt((a-1)/f,10)*f+1}var f=d.yearRange;d.step={years:f},d.element=b,d._refreshView=function(){for(var b=new Array(f),c=0,g=e(d.activeDate.getFullYear());f>c;c++)b[c]=angular.extend(d.createDateObject(new Date(g+c,0,1),d.formatYear),{uid:a.uniqueId+"-"+c});a.title=[b[0].label,b[f-1].label].join(" - "),a.rows=d.split(b,5)},d.compare=function(a,b){return a.getFullYear()-b.getFullYear()},d.handleKeyDown=function(a){var b=d.activeDate.getFullYear();"left"===a?b-=1:"up"===a?b-=5:"right"===a?b+=1:"down"===a?b+=5:"pageup"===a||"pagedown"===a?b+=("pageup"===a?-1:1)*d.step.years:"home"===a?b=e(d.activeDate.getFullYear()):"end"===a&&(b=e(d.activeDate.getFullYear())+f-1),d.activeDate.setFullYear(b)},d.refreshView()}}}]).constant("datepickerPopupConfig",{datepickerPopup:"yyyy-MM-dd",currentText:"Today",clearText:"Clear",closeText:"Done",closeOnDateSelection:!0,appendToBody:!1,showButtonBar:!0}).directive("datepickerPopup",["$compile","$parse","$document","$position","dateFilter","dateParser","datepickerPopupConfig",function(a,b,c,d,e,f,g){return{restrict:"EA",require:"ngModel",scope:{isOpen:"=?",currentText:"@",clearText:"@",closeText:"@",dateDisabled:"&"},link:function(h,i,j,k){function l(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function m(a){if(a){if(angular.isDate(a)&&!isNaN(a))return k.$setValidity("date",!0),a;if(angular.isString(a)){var b=f.parse(a,n)||new Date(a);return isNaN(b)?void k.$setValidity("date",!1):(k.$setValidity("date",!0),b)}return void k.$setValidity("date",!1)}return k.$setValidity("date",!0),null}var n,o=angular.isDefined(j.closeOnDateSelection)?h.$parent.$eval(j.closeOnDateSelection):g.closeOnDateSelection,p=angular.isDefined(j.datepickerAppendToBody)?h.$parent.$eval(j.datepickerAppendToBody):g.appendToBody;h.showButtonBar=angular.isDefined(j.showButtonBar)?h.$parent.$eval(j.showButtonBar):g.showButtonBar,h.getText=function(a){return h[a+"Text"]||g[a+"Text"]},j.$observe("datepickerPopup",function(a){n=a||g.datepickerPopup,k.$render()});var q=angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");q.attr({"ng-model":"date","ng-change":"dateSelection()"});var r=angular.element(q.children()[0]);j.datepickerOptions&&angular.forEach(h.$parent.$eval(j.datepickerOptions),function(a,b){r.attr(l(b),a)}),angular.forEach(["minDate","maxDate"],function(a){j[a]&&(h.$parent.$watch(b(j[a]),function(b){h[a]=b}),r.attr(l(a),a))}),j.dateDisabled&&r.attr("date-disabled","dateDisabled({ date: date, mode: mode })"),k.$parsers.unshift(m),h.dateSelection=function(a){angular.isDefined(a)&&(h.date=a),k.$setViewValue(h.date),k.$render(),o&&(h.isOpen=!1,i[0].focus())},i.bind("input change keyup",function(){h.$apply(function(){h.date=k.$modelValue})}),k.$render=function(){var a=k.$viewValue?e(k.$viewValue,n):"";i.val(a),h.date=m(k.$modelValue)};var s=function(a){h.isOpen&&a.target!==i[0]&&h.$apply(function(){h.isOpen=!1})},t=function(a){h.keydown(a)};i.bind("keydown",t),h.keydown=function(a){27===a.which?(a.preventDefault(),a.stopPropagation(),h.close()):40!==a.which||h.isOpen||(h.isOpen=!0)},h.$watch("isOpen",function(a){a?(h.$broadcast("datepicker.focus"),h.position=p?d.offset(i):d.position(i),h.position.top=h.position.top+i.prop("offsetHeight"),c.bind("click",s)):c.unbind("click",s)}),h.select=function(a){if("today"===a){var b=new Date;angular.isDate(k.$modelValue)?(a=new Date(k.$modelValue),a.setFullYear(b.getFullYear(),b.getMonth(),b.getDate())):a=new Date(b.setHours(0,0,0,0))}h.dateSelection(a)},h.close=function(){h.isOpen=!1,i[0].focus()};var u=a(q)(h);p?c.find("body").append(u):i.after(u),h.$on("$destroy",function(){u.remove(),i.unbind("keydown",t),c.unbind("click",s)})}}}]).directive("datepickerPopupWrap",function(){return{restrict:"EA",replace:!0,transclude:!0,templateUrl:"template/datepicker/popup.html",link:function(a,b){b.bind("click",function(a){a.preventDefault(),a.stopPropagation()})}}}),angular.module("ui.bootstrap.dropdown",[]).constant("dropdownConfig",{openClass:"open"}).service("dropdownService",["$document",function(a){var b=null;this.open=function(e){b||(a.bind("click",c),a.bind("keydown",d)),b&&b!==e&&(b.isOpen=!1),b=e},this.close=function(e){b===e&&(b=null,a.unbind("click",c),a.unbind("keydown",d))};var c=function(a){a&&a.isDefaultPrevented()||b.$apply(function(){b.isOpen=!1})},d=function(a){27===a.which&&(b.focusToggleElement(),c())}}]).controller("DropdownController",["$scope","$attrs","$parse","dropdownConfig","dropdownService","$animate",function(a,b,c,d,e,f){var g,h=this,i=a.$new(),j=d.openClass,k=angular.noop,l=b.onToggle?c(b.onToggle):angular.noop;this.init=function(d){h.$element=d,b.isOpen&&(g=c(b.isOpen),k=g.assign,a.$watch(g,function(a){i.isOpen=!!a}))},this.toggle=function(a){return i.isOpen=arguments.length?!!a:!i.isOpen},this.isOpen=function(){return i.isOpen},i.focusToggleElement=function(){h.toggleElement&&h.toggleElement[0].focus()},i.$watch("isOpen",function(b,c){f[b?"addClass":"removeClass"](h.$element,j),b?(i.focusToggleElement(),e.open(i)):e.close(i),k(a,b),angular.isDefined(b)&&b!==c&&l(a,{open:!!b})}),a.$on("$locationChangeSuccess",function(){i.isOpen=!1}),a.$on("$destroy",function(){i.$destroy()})}]).directive("dropdown",function(){return{restrict:"CA",controller:"DropdownController",link:function(a,b,c,d){d.init(b)}}}).directive("dropdownToggle",function(){return{restrict:"CA",require:"?^dropdown",link:function(a,b,c,d){if(d){d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b==a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b==a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}).directive("modalBackdrop",["$timeout",function(a){return{restrict:"EA",replace:!0,templateUrl:"template/modal/backdrop.html",link:function(b){b.animate=!1,a(function(){b.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(a,b){return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"template/modal/window.html"},link:function(c,d,e){d.addClass(e.windowClass||""),c.size=e.size,b(function(){c.animate=!0,d[0].focus()}),c.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!=c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))}}}}]).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(a,b,c,d,e,f){function g(){for(var a=-1,b=n.keys(),c=0;c<b.length;c++)n.get(b[c]).value.backdrop&&(a=c);return a}function h(a){var b=c.find("body").eq(0),d=n.get(a).value;n.remove(a),j(d.modalDomEl,d.modalScope,300,function(){d.modalScope.$destroy(),b.toggleClass(m,n.length()>0),i()})}function i(){if(k&&-1==g()){var a=l;j(k,l,150,function(){a.$destroy(),a=null}),k=void 0,l=void 0}}function j(c,d,e,f){function g(){g.done||(g.done=!0,c.remove(),f&&f())}d.animate=!1;var h=a.transitionEndEventName;if(h){var i=b(g,e);c.bind(h,function(){b.cancel(i),g(),d.$apply()})}else b(g,0)}var k,l,m="modal-open",n=f.createNew(),o={};return e.$watch(g,function(a){l&&(l.index=a)}),c.bind("keydown",function(a){var b;27===a.which&&(b=n.top(),b&&b.value.keyboard&&(a.preventDefault(),e.$apply(function(){o.dismiss(b.key,"escape key press")})))}),o.open=function(a,b){n.add(a,{deferred:b.deferred,modalScope:b.scope,backdrop:b.backdrop,keyboard:b.keyboard});var f=c.find("body").eq(0),h=g();h>=0&&!k&&(l=e.$new(!0),l.index=h,k=d("<div modal-backdrop></div>")(l),f.append(k));var i=angular.element("<div modal-window></div>");i.attr({"template-url":b.windowTemplateUrl,"window-class":b.windowClass,size:b.size,index:n.length()-1,animate:"animate"}).html(b.content);var j=d(i)(b.scope);n.top().value.modalDomEl=j,f.append(j),f.addClass(m)},o.close=function(a,b){var c=n.get(a).value;c&&(c.deferred.resolve(b),h(a))},o.dismiss=function(a,b){var c=n.get(a).value;c&&(c.deferred.reject(b),h(a))},o.dismissAll=function(a){for(var b=this.getTop();b;)this.dismiss(b.key,a),b=this.getTop()},o.getTop=function(){return n.top()},o}]).provider("$modal",function(){var a={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?d.when(a.template):e.get(a.templateUrl,{cache:f}).then(function(a){return a.data})}function j(a){var c=[];return angular.forEach(a,function(a){(angular.isFunction(a)||angular.isArray(a))&&c.push(d.when(b.invoke(a)))}),c}var k={};return k.open=function(b){var e=d.defer(),f=d.defer(),k={result:e.promise,opened:f.promise,close:function(a){h.close(k,a)},dismiss:function(a){h.dismiss(k,a)}};if(b=angular.extend({},a.options,b),b.resolve=b.resolve||{},!b.template&&!b.templateUrl)throw new Error("One of template or templateUrl options is required.");var l=d.all([i(b)].concat(j(b.resolve)));return l.then(function(a){var d=(b.scope||c).$new();d.$close=k.close,d.$dismiss=k.dismiss;var f,i={},j=1;b.controller&&(i.$scope=d,i.$modalInstance=k,angular.forEach(b.resolve,function(b,c){i[c]=a[j++]}),f=g(b.controller,i)),h.open(k,{scope:d,deferred:e,content:a[0],backdrop:b.backdrop,keyboard:b.keyboard,windowClass:b.windowClass,windowTemplateUrl:b.windowTemplateUrl,size:b.size})},function(a){e.reject(a)}),l.then(function(){f.resolve(!0)},function(){f.reject(!1)}),k},k}]};return a}),angular.module("ui.bootstrap.pagination",[]).controller("PaginationController",["$scope","$attrs","$parse",function(a,b,c){var d=this,e={$setViewValue:angular.noop},f=b.numPages?c(b.numPages).assign:angular.noop;this.init=function(f,g){e=f,this.config=g,e.$render=function(){d.render()},b.itemsPerPage?a.$parent.$watch(c(b.itemsPerPage),function(b){d.itemsPerPage=parseInt(b,10),a.totalPages=d.calculateTotalPages()}):this.itemsPerPage=g.itemsPerPage},this.calculateTotalPages=function(){var b=this.itemsPerPage<1?1:Math.ceil(a.totalItems/this.itemsPerPage);return Math.max(b||0,1)},this.render=function(){a.page=parseInt(e.$viewValue,10)||1},a.selectPage=function(b){a.page!==b&&b>0&&b<=a.totalPages&&(e.$setViewValue(b),e.$render())},a.getText=function(b){return a[b+"Text"]||d.config[b+"Text"]},a.noPrevious=function(){return 1===a.page},a.noNext=function(){return a.page===a.totalPages},a.$watch("totalItems",function(){a.totalPages=d.calculateTotalPages()}),a.$watch("totalPages",function(b){f(a.$parent,b),a.page>b?a.selectPage(b):e.$render()})}]).constant("paginationConfig",{itemsPerPage:10,boundaryLinks:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0}).directive("pagination",["$parse","paginationConfig",function(a,b){return{restrict:"EA",scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@"},require:["pagination","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pagination.html",replace:!0,link:function(c,d,e,f){function g(a,b,c){return{number:a,text:b,active:c}}function h(a,b){var c=[],d=1,e=b,f=angular.isDefined(k)&&b>k;f&&(l?(d=Math.max(a-Math.floor(k/2),1),e=d+k-1,e>b&&(e=b,d=e-k+1)):(d=(Math.ceil(a/k)-1)*k+1,e=Math.min(d+k-1,b)));for(var h=d;e>=h;h++){var i=g(h,h,h===a);c.push(i)}if(f&&!l){if(d>1){var j=g(d-1,"...",!1);c.unshift(j)}if(b>e){var m=g(e+1,"...",!1);c.push(m)}}return c}var i=f[0],j=f[1];if(j){var k=angular.isDefined(e.maxSize)?c.$parent.$eval(e.maxSize):b.maxSize,l=angular.isDefined(e.rotate)?c.$parent.$eval(e.rotate):b.rotate;c.boundaryLinks=angular.isDefined(e.boundaryLinks)?c.$parent.$eval(e.boundaryLinks):b.boundaryLinks,c.directionLinks=angular.isDefined(e.directionLinks)?c.$parent.$eval(e.directionLinks):b.directionLinks,i.init(j,b),e.maxSize&&c.$parent.$watch(a(e.maxSize),function(a){k=parseInt(a,10),i.render()});var m=i.render;i.render=function(){m(),c.page>0&&c.page<=c.totalPages&&(c.pages=h(c.page,c.totalPages))}}}}}]).constant("pagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("pager",["pagerConfig",function(a){return{restrict:"EA",scope:{totalItems:"=",previousText:"@",nextText:"@"},require:["pager","?ngModel"],controller:"PaginationController",templateUrl:"template/pagination/pager.html",replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&(b.align=angular.isDefined(d.align)?b.$parent.$eval(d.align):a.align,f.init(g,a))}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).provider("$tooltip",function(){function a(a){var b=/[A-Z]/g,c="-";
return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",animation:!0,popupDelay:0},c={mouseenter:"mouseleave",click:"click",focus:"blur"},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$parse","$document","$position","$interpolate",function(e,f,g,h,i,j,k){return function(e,l,m){function n(a){var b=a||o.trigger||m,d=c[b]||b;return{show:b,hide:d}}var o=angular.extend({},b,d),p=a(e),q=k.startSymbol(),r=k.endSymbol(),s="<div "+p+'-popup title="'+q+"tt_title"+r+'" content="'+q+"tt_content"+r+'" placement="'+q+"tt_placement"+r+'" animation="tt_animation" is-open="tt_isOpen"></div>';return{restrict:"EA",scope:!0,compile:function(){var a=f(s);return function(b,c,d){function f(){b.tt_isOpen?m():k()}function k(){(!y||b.$eval(d[l+"Enable"]))&&(b.tt_popupDelay?v||(v=g(p,b.tt_popupDelay,!1),v.then(function(a){a()})):p()())}function m(){b.$apply(function(){q()})}function p(){return v=null,u&&(g.cancel(u),u=null),b.tt_content?(r(),t.css({top:0,left:0,display:"block"}),w?i.find("body").append(t):c.after(t),z(),b.tt_isOpen=!0,b.$digest(),z):angular.noop}function q(){b.tt_isOpen=!1,g.cancel(v),v=null,b.tt_animation?u||(u=g(s,500)):s()}function r(){t&&s(),t=a(b,function(){}),b.$digest()}function s(){u=null,t&&(t.remove(),t=null)}var t,u,v,w=angular.isDefined(o.appendToBody)?o.appendToBody:!1,x=n(void 0),y=angular.isDefined(d[l+"Enable"]),z=function(){var a=j.positionElements(c,t,b.tt_placement,w);a.top+="px",a.left+="px",t.css(a)};b.tt_isOpen=!1,d.$observe(e,function(a){b.tt_content=a,!a&&b.tt_isOpen&&q()}),d.$observe(l+"Title",function(a){b.tt_title=a}),d.$observe(l+"Placement",function(a){b.tt_placement=angular.isDefined(a)?a:o.placement}),d.$observe(l+"PopupDelay",function(a){var c=parseInt(a,10);b.tt_popupDelay=isNaN(c)?o.popupDelay:c});var A=function(){c.unbind(x.show,k),c.unbind(x.hide,m)};d.$observe(l+"Trigger",function(a){A(),x=n(a),x.show===x.hide?c.bind(x.show,f):(c.bind(x.show,k),c.bind(x.hide,m))});var B=b.$eval(d[l+"Animation"]);b.tt_animation=angular.isDefined(B)?!!B:o.animation,d.$observe(l+"AppendToBody",function(a){w=angular.isDefined(a)?h(a)(b):w}),w&&b.$on("$locationChangeSuccess",function(){b.tt_isOpen&&q()}),b.$on("$destroy",function(){g.cancel(u),g.cancel(v),A(),s()})}}}}}]}).directive("tooltipPopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-popup.html"}}).directive("tooltip",["$tooltip",function(a){return a("tooltip","tooltip","mouseenter")}]).directive("tooltipHtmlUnsafePopup",function(){return{restrict:"EA",replace:!0,scope:{content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/tooltip/tooltip-html-unsafe-popup.html"}}).directive("tooltipHtmlUnsafe",["$tooltip",function(a){return a("tooltipHtmlUnsafe","tooltip","mouseenter")}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("popoverPopup",function(){return{restrict:"EA",replace:!0,scope:{title:"@",content:"@",placement:"@",animation:"&",isOpen:"&"},templateUrl:"template/popover/popover.html"}}).directive("popover",["$tooltip",function(a){return a("popover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("progressConfig",{animate:!0,max:100}).controller("ProgressController",["$scope","$attrs","progressConfig",function(a,b,c){var d=this,e=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max,this.addBar=function(b,c){e||c.css({transition:"none"}),this.bars.push(b),b.$watch("value",function(c){b.percent=+(100*c/a.max).toFixed(2)}),b.$on("$destroy",function(){c=null,d.removeBar(b)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1)}}]).directive("progress",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",require:"progress",scope:{},templateUrl:"template/progressbar/progress.html"}}).directive("bar",function(){return{restrict:"EA",replace:!0,transclude:!0,require:"^progress",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b)}}}).directive("progressbar",function(){return{restrict:"EA",replace:!0,transclude:!0,controller:"ProgressController",scope:{value:"=",type:"@"},templateUrl:"template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]))}}}),angular.module("ui.bootstrap.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",["$scope","$attrs","ratingConfig",function(a,b,c){var d={$setViewValue:angular.noop};this.init=function(e){d=e,d.$render=this.render,this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff;var f=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(f)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff},a[b]);return a},a.rate=function(b){!a.readonly&&b>=0&&b<=a.range.length&&(d.$setViewValue(b),d.$render())},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue}}]).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",templateUrl:"template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("TabsetController",["$scope",function(a){var b=this,c=b.tabs=a.tabs=[];b.select=function(a){angular.forEach(c,function(b){b.active&&b!==a&&(b.active=!1,b.onDeselect())}),a.active=!0,a.onSelect()},b.addTab=function(a){c.push(a),1===c.length?a.active=!0:a.active&&b.select(a)},b.removeTab=function(a){var d=c.indexOf(a);if(a.active&&c.length>1){var e=d==c.length-1?d-1:d+1;b.select(c[e])}c.splice(d,1)}}]).directive("tabset",function(){return{restrict:"EA",transclude:!0,replace:!0,scope:{type:"@"},controller:"TabsetController",templateUrl:"template/tabs/tabset.html",link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("tab",["$parse",function(a){return{require:"^tabset",restrict:"EA",replace:!0,templateUrl:"template/tabs/tab.html",transclude:!0,scope:{active:"=?",heading:"@",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},compile:function(b,c,d){return function(b,c,e,f){b.$watch("active",function(a){a&&f.select(b)}),b.disabled=!1,e.disabled&&b.$parent.$watch(a(e.disabled),function(a){b.disabled=!!a}),b.select=function(){b.disabled||(b.active=!0)},f.addTab(b),b.$on("$destroy",function(){f.removeTab(b)}),b.$transcludeFn=d}}}}]).directive("tabHeadingTransclude",[function(){return{restrict:"A",require:"^tab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}]).directive("tabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("tab-heading")||a.hasAttribute("data-tab-heading")||"tab-heading"===a.tagName.toLowerCase()||"data-tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^tabset",link:function(b,c,d){var e=b.$eval(d.tabContentTransclude);e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("timepickerConfig",{hourStep:1,minuteStep:1,showMeridian:!0,meridians:null,readonlyInput:!1,mousewheel:!0}).controller("TimepickerController",["$scope","$attrs","$parse","$log","$locale","timepickerConfig",function(a,b,c,d,e,f){function g(){var b=parseInt(a.hours,10),c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c?(a.showMeridian&&(12===b&&(b=0),a.meridian===p[1]&&(b+=12)),b):void 0}function h(){var b=parseInt(a.minutes,10);return b>=0&&60>b?b:void 0}function i(a){return angular.isDefined(a)&&a.toString().length<2?"0"+a:a}function j(a){k(),o.$setViewValue(new Date(n)),l(a)}function k(){o.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1}function l(b){var c=n.getHours(),d=n.getMinutes();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:i(c),a.minutes="m"===b?d:i(d),a.meridian=n.getHours()<12?p[0]:p[1]}function m(a){var b=new Date(n.getTime()+6e4*a);n.setHours(b.getHours(),b.getMinutes()),j()}var n=new Date,o={$setViewValue:angular.noop},p=angular.isDefined(b.meridians)?a.$parent.$eval(b.meridians):f.meridians||e.DATETIME_FORMATS.AMPMS;this.init=function(c,d){o=c,o.$render=this.render;var e=d.eq(0),g=d.eq(1),h=angular.isDefined(b.mousewheel)?a.$parent.$eval(b.mousewheel):f.mousewheel;h&&this.setupMousewheelEvents(e,g),a.readonlyInput=angular.isDefined(b.readonlyInput)?a.$parent.$eval(b.readonlyInput):f.readonlyInput,this.setupInputEvents(e,g)};var q=f.hourStep;b.hourStep&&a.$parent.$watch(c(b.hourStep),function(a){q=parseInt(a,10)});var r=f.minuteStep;b.minuteStep&&a.$parent.$watch(c(b.minuteStep),function(a){r=parseInt(a,10)}),a.showMeridian=f.showMeridian,b.showMeridian&&a.$parent.$watch(c(b.showMeridian),function(b){if(a.showMeridian=!!b,o.$error.time){var c=g(),d=h();angular.isDefined(c)&&angular.isDefined(d)&&(n.setHours(c),j())}else l()}),this.setupMousewheelEvents=function(b,c){var d=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){a.$apply(d(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()})},this.setupInputEvents=function(b,c){if(a.readonlyInput)return a.updateHours=angular.noop,void(a.updateMinutes=angular.noop);var d=function(b,c){o.$setViewValue(null),o.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c)};a.updateHours=function(){var a=g();angular.isDefined(a)?(n.setHours(a),j("h")):d(!0)},b.bind("blur",function(){!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=i(a.hours)})}),a.updateMinutes=function(){var a=h();angular.isDefined(a)?(n.setMinutes(a),j("m")):d(void 0,!0)},c.bind("blur",function(){!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=i(a.minutes)})})},this.render=function(){var a=o.$modelValue?new Date(o.$modelValue):null;isNaN(a)?(o.$setValidity("time",!1),d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(a&&(n=a),k(),l())},a.incrementHours=function(){m(60*q)},a.decrementHours=function(){m(60*-q)},a.incrementMinutes=function(){m(r)},a.decrementMinutes=function(){m(-r)},a.toggleMeridian=function(){m(720*(n.getHours()<12?1:-1))}}]).directive("timepicker",function(){return{restrict:"EA",require:["timepicker","?^ngModel"],controller:"TimepickerController",replace:!0,scope:{},templateUrl:"template/timepicker/timepicker.html",link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.position","ui.bootstrap.bindHtml"]).factory("typeaheadParser",["$parse",function(a){var b=/^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).directive("typeahead",["$compile","$parse","$q","$timeout","$document","$position","typeaheadParser",function(a,b,c,d,e,f,g){var h=[9,13,27,38,40];return{require:"ngModel",link:function(i,j,k,l){var m,n=i.$eval(k.typeaheadMinLength)||1,o=i.$eval(k.typeaheadWaitMs)||0,p=i.$eval(k.typeaheadEditable)!==!1,q=b(k.typeaheadLoading).assign||angular.noop,r=b(k.typeaheadOnSelect),s=k.typeaheadInputFormatter?b(k.typeaheadInputFormatter):void 0,t=k.typeaheadAppendToBody?i.$eval(k.typeaheadAppendToBody):!1,u=b(k.ngModel).assign,v=g.parse(k.typeahead),w=i.$new();i.$on("$destroy",function(){w.$destroy()});var x="typeahead-"+w.$id+"-"+Math.floor(1e4*Math.random());j.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":x});var y=angular.element("<div typeahead-popup></div>");y.attr({id:x,matches:"matches",active:"activeIdx",select:"select(activeIdx)",query:"query",position:"position"}),angular.isDefined(k.typeaheadTemplateUrl)&&y.attr("template-url",k.typeaheadTemplateUrl);var z=function(){w.matches=[],w.activeIdx=-1,j.attr("aria-expanded",!1)},A=function(a){return x+"-option-"+a};w.$watch("activeIdx",function(a){0>a?j.removeAttr("aria-activedescendant"):j.attr("aria-activedescendant",A(a))});var B=function(a){var b={$viewValue:a};q(i,!0),c.when(v.source(i,b)).then(function(c){var d=a===l.$viewValue;if(d&&m)if(c.length>0){w.activeIdx=0,w.matches.length=0;for(var e=0;e<c.length;e++)b[v.itemName]=c[e],w.matches.push({id:A(e),label:v.viewMapper(w,b),model:c[e]});w.query=a,w.position=t?f.offset(j):f.position(j),w.position.top=w.position.top+j.prop("offsetHeight"),j.attr("aria-expanded",!0)}else z();d&&q(i,!1)},function(){z(),q(i,!1)})};z(),w.query=void 0;var C;l.$parsers.unshift(function(a){return m=!0,a&&a.length>=n?o>0?(C&&d.cancel(C),C=d(function(){B(a)},o)):B(a):(q(i,!1),z()),p?a:a?void l.$setValidity("editable",!1):(l.$setValidity("editable",!0),a)}),l.$formatters.push(function(a){var b,c,d={};return s?(d.$model=a,s(i,d)):(d[v.itemName]=a,b=v.viewMapper(i,d),d[v.itemName]=void 0,c=v.viewMapper(i,d),b!==c?b:a)}),w.select=function(a){var b,c,e={};e[v.itemName]=c=w.matches[a].model,b=v.modelMapper(i,e),u(i,b),l.$setValidity("editable",!0),r(i,{$item:c,$model:b,$label:v.viewMapper(i,e)}),z(),d(function(){j[0].focus()},0,!1)},j.bind("keydown",function(a){0!==w.matches.length&&-1!==h.indexOf(a.which)&&(a.preventDefault(),40===a.which?(w.activeIdx=(w.activeIdx+1)%w.matches.length,w.$digest()):38===a.which?(w.activeIdx=(w.activeIdx?w.activeIdx:w.matches.length)-1,w.$digest()):13===a.which||9===a.which?w.$apply(function(){w.select(w.activeIdx)}):27===a.which&&(a.stopPropagation(),z(),w.$digest()))}),j.bind("blur",function(){m=!1});var D=function(a){j[0]!==a.target&&(z(),w.$digest())};e.bind("click",D),i.$on("$destroy",function(){e.unbind("click",D)});var E=a(y)(w);t?e.find("body").append(E):j.after(E)}}}]).directive("typeaheadPopup",function(){return{restrict:"EA",scope:{matches:"=",query:"=",active:"=",position:"=",select:"&"},replace:!0,templateUrl:"template/typeahead/typeahead-popup.html",link:function(a,b,c){a.templateUrl=c.templateUrl,a.isOpen=function(){return a.matches.length>0},a.isActive=function(b){return a.active==b},a.selectActive=function(b){a.active=b},a.selectMatch=function(b){a.select({activeIdx:b})}}}}).directive("typeaheadMatch",["$http","$templateCache","$compile","$parse",function(a,b,c,d){return{restrict:"EA",scope:{index:"=",match:"=",query:"="},link:function(e,f,g){var h=d(g.templateUrl)(e.$parent)||"template/typeahead/typeahead-match.html";a.get(h,{cache:b}).success(function(a){f.replaceWith(c(a.trim())(e))})}}}]).filter("typeaheadHighlight",function(){function a(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}return function(b,c){return c?(""+b).replace(new RegExp(a(c),"gi"),"<strong>$&</strong>"):b}}),angular.module("template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion-group.html",'<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')}]),angular.module("template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("template/accordion/accordion.html",'<div class="panel-group" ng-transclude></div>')}]),angular.module("template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("template/alert/alert.html",'<div class="alert" ng-class="{\'alert-{{type || \'warning\'}}\': true, \'alert-dismissable\': closeable}" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')}]),angular.module("template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("template/carousel/slide.html","<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")}]),angular.module("template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/datepicker.html",'<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')}]),angular.module("template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/day.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/month.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/datepicker/popup.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/popup.html",'<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')}]),angular.module("template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("template/datepicker/year.html",'<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("template/modal/backdrop.html",'<div class="modal-backdrop fade"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("template/modal/window.html",[]).run(["$templateCache",function(a){a.put("template/modal/window.html",'<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" ng-transclude></div></div>\n</div>')}]),angular.module("template/pagination/pager.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')}]),angular.module("template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')}]),angular.module("template/tooltip/tooltip-html-unsafe-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-html-unsafe-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')}]),angular.module("template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("template/tooltip/tooltip-popup.html",'<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("template/popover/popover.html",'<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')}]),angular.module("template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progress.html",'<div class="progress" ng-transclude></div>')}]),angular.module("template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')}]),angular.module("template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')}]),angular.module("template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tab.html",'<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("template/tabs/tabset-titles.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset-titles.html","<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n")}]),angular.module("template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("template/tabs/tabset.html",'\n<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("template/timepicker/timepicker.html",'<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')}]),angular.module("template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-match.html",'<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')}]),angular.module("template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-if="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')
}]);

/**
 * @license AngularJS v1.3.0-beta.6
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider);

/**
 * @ngdoc provider
 * @name $routeProvider
 * @function
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider(){
  function inherit(parent, extra) {
    return angular.extend(new (angular.extend(function() {}, {prototype:parent}))(), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    routes[path] = angular.extend(
      {reloadOnSearch: true},
      route,
      path && pathRegExp(path, route)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length-1] == '/')
            ? path.substr(0, path.length-1)
            : path +'/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, route)
      );
    }

    return this;
  };

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option){
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object} params Mapping information to be assigned to `$route.current`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$http',
               '$templateCache',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * Note that this example is using {@link ng.directive:script inlined templates}
     * to get it working on jsfiddle as well.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope, reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(updateRoute);
          }
        };

    $rootScope.$on('$locationChangeSuccess', updateRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = 'string' == typeof m[i]
              ? decodeURIComponent(m[i])
              : m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function updateRoute() {
      var next = parseRoute(),
          last = $route.current;

      if (next && last && next.$$route === last.$$route
          && angular.equals(next.pathParams, last.pathParams)
          && !next.reloadOnSearch && !forceReload) {
        last.params = next.params;
        angular.copy(last.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', last);
      } else if (next || last) {
        forceReload = false;
        $rootScope.$broadcast('$routeChangeStart', next, last);
        $route.current = next;
        if (next) {
          if (next.redirectTo) {
            if (angular.isString(next.redirectTo)) {
              $location.path(interpolate(next.redirectTo, next.params)).search(next.params)
                       .replace();
            } else {
              $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(next).
          then(function() {
            if (next) {
              var locals = angular.extend({}, next.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value, null, null, key);
              });

              if (angular.isDefined(template = next.template)) {
                if (angular.isFunction(template)) {
                  template = template(next.params);
                }
              } else if (angular.isDefined(templateUrl = next.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(next.params);
                }
                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                if (angular.isDefined(templateUrl)) {
                  next.loadedTemplateUrl = templateUrl;
                  template = $http.get(templateUrl, {cache: $templateCache}).
                      then(function(response) { return response.data; });
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (next == $route.current) {
              if (next) {
                next.locals = locals;
                angular.copy(next.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', next, last);
            }
          }, function(error) {
            if (next == $route.current) {
              $rootScope.$broadcast('$routeChangeError', next, last, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string||'').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:1, sectionId:2, search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          position:relative;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              // configure html5 to get links working on jsfiddle
              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory(   $route,   $anchorScroll,   $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousElement,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if(previousElement) {
            previousElement.remove();
            previousElement = null;
          }
          if(currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if(currentElement) {
            $animate.leave(currentElement, function() {
              previousElement = null;
            });
            previousElement = currentElement;
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element, function onNgViewEnter () {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);


/*
 AngularJS v1.3.0-build.2921+sha.02c0ed2
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(p,h,q){'use strict';function E(a){var d=[];s(d,h.noop).chars(a);return d.join("")}function k(a){var d={};a=a.split(",");var b;for(b=0;b<a.length;b++)d[a[b]]=!0;return d}function F(a,d){function b(a,c,b,g){c=h.lowercase(c);if(t[c])for(;f.last()&&u[f.last()];)e("",f.last());v[c]&&f.last()==c&&e("",c);(g=w[c]||!!g)||f.push(c);var l={};b.replace(G,function(a,c,d,b,e){l[c]=r(d||b||e||"")});d.start&&d.start(c,l,g)}function e(a,c){var b=0,e;if(c=h.lowercase(c))for(b=f.length-1;0<=b&&f[b]!=c;b--);
    if(0<=b){for(e=f.length-1;e>=b;e--)d.end&&d.end(f[e]);f.length=b}}var c,g,f=[],l=a;for(f.last=function(){return f[f.length-1]};a;){g=!0;if(f.last()&&x[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(c,a){a=a.replace(H,"$1").replace(I,"$1");d.chars&&d.chars(r(a));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))c=a.indexOf("--",4),0<=c&&a.lastIndexOf("--\x3e",c)===c&&(d.comment&&d.comment(a.substring(4,c)),a=a.substring(c+3),g=!1);else if(y.test(a)){if(c=a.match(y))a=
    a.replace(c[0],""),g=!1}else if(J.test(a)){if(c=a.match(z))a=a.substring(c[0].length),c[0].replace(z,e),g=!1}else K.test(a)&&(c=a.match(A))&&(a=a.substring(c[0].length),c[0].replace(A,b),g=!1);g&&(c=a.indexOf("<"),g=0>c?a:a.substring(0,c),a=0>c?"":a.substring(c),d.chars&&d.chars(r(g)))}if(a==l)throw L("badparse",a);l=a}e()}function r(a){if(!a)return"";var d=M.exec(a);a=d[1];var b=d[3];if(d=d[2])n.innerHTML=d.replace(/</g,"&lt;"),d="textContent"in n?n.textContent:n.innerText;return a+d+b}function B(a){return a.replace(/&/g,
    "&amp;").replace(N,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+(a-56320)+65536)+";"}).replace(O,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(a,d){var b=!1,e=h.bind(a,a.push);return{start:function(a,g,f){a=h.lowercase(a);!b&&x[a]&&(b=a);b||!0!==C[a]||(e("<"),e(a),h.forEach(g,function(b,f){var g=h.lowercase(f),k="img"===a&&"src"===g||"background"===g;!0!==P[g]||!0===D[g]&&!d(b,k)||(e(" "),e(f),e('="'),e(B(b)),e('"'))}),
    e(f?"/>":">"))},end:function(a){a=h.lowercase(a);b||!0!==C[a]||(e("</"),e(a),e(">"));a==b&&(b=!1)},chars:function(a){b||e(B(a))}}}var L=h.$$minErr("$sanitize"),A=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,z=/^<\s*\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\s*\//,H=/\x3c!--(.*?)--\x3e/g,y=/<!DOCTYPE([^>]*?)>/i,I=/<!\[CDATA\[(.*?)]]\x3e/g,N=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,O=/([^\#-~| |!])/g,
    w=k("area,br,col,hr,img,wbr");p=k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");q=k("rp,rt");var v=h.extend({},q,p),t=h.extend({},p,k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),u=h.extend({},q,k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),x=k("script,style"),
    C=h.extend({},w,t,u,v),D=k("background,cite,href,longdesc,src,usemap"),P=h.extend({},D,k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),n=document.createElement("pre"),M=/^(\s*)([\s\S]*?)(\s*)$/;h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=
    ["$$sanitizeUri",function(a){return function(d){var b=[];F(d,s(b,function(b,c){return!/^unsafe/.test(a(b,c))}));return b.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,b=/^mailto:/;return function(e,c){function g(a){a&&m.push(E(a))}function f(a,b){m.push("<a ");h.isDefined(c)&&(m.push('target="'),m.push(c),m.push('" '));m.push('href="');m.push(a);m.push('">');g(b);m.push("</a>")}if(!e)return e;
    for(var l,k=e,m=[],n,p;l=k.match(d);)n=l[0],l[2]==l[3]&&(n="mailto:"+n),p=l.index,g(k.substr(0,p)),f(n,l[0].replace(b,"")),k=k.substring(p+l[0].length);g(k);return a(m.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 2014-07-25
 *
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs
    // IE 10+ (native saveAs)
    || (typeof navigator !== "undefined" &&
    navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))
    // Everyone else
    || (function(view) {
    "use strict";
    // IE <10 is explicitly unsupported
    if (typeof navigator !== "undefined" &&
        /MSIE [1-9]\./.test(navigator.userAgent)) {
        return;
    }
    var
        doc = view.document
    // only get URL when necessary in case Blob.js hasn't overridden it yet
        , get_URL = function() {
            return view.URL || view.webkitURL || view;
        }
        , save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
        , can_use_save_link = !view.externalHost && "download" in save_link
        , click = function(node) {
            var event = doc.createEvent("MouseEvents");
            event.initMouseEvent(
                "click", true, false, view, 0, 0, 0, 0, 0
                , false, false, false, false, 0, null
            );
            node.dispatchEvent(event);
        }
        , webkit_req_fs = view.webkitRequestFileSystem
        , req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
        , throw_outside = function(ex) {
            (view.setImmediate || view.setTimeout)(function() {
                throw ex;
            }, 0);
        }
        , force_saveable_type = "application/octet-stream"
        , fs_min_size = 0
    // See https://code.google.com/p/chromium/issues/detail?id=375297#c7 for
    // the reasoning behind the timeout and revocation flow
        , arbitrary_revoke_timeout = 10
        , revoke = function(file) {
            var revoker = function() {
                if (typeof file === "string") { // file is an object URL
                    get_URL().revokeObjectURL(file);
                } else { // file is a File
                    file.remove();
                }
            };
            if (view.chrome) {
                revoker();
            } else {
                setTimeout(revoker, arbitrary_revoke_timeout);
            }
        }
        , dispatch = function(filesaver, event_types, event) {
            event_types = [].concat(event_types);
            var i = event_types.length;
            while (i--) {
                var listener = filesaver["on" + event_types[i]];
                if (typeof listener === "function") {
                    try {
                        listener.call(filesaver, event || filesaver);
                    } catch (ex) {
                        throw_outside(ex);
                    }
                }
            }
        }
        , FileSaver = function(blob, name) {
            // First try a.download, then web filesystem, then object URLs
            var
                filesaver = this
                , type = blob.type
                , blob_changed = false
                , object_url
                , target_view
                , dispatch_all = function() {
                    dispatch(filesaver, "writestart progress write writeend".split(" "));
                }
            // on any filesys errors revert to saving with object URLs
                , fs_error = function() {
                    // don't create more object URLs than needed
                    if (blob_changed || !object_url) {
                        object_url = get_URL().createObjectURL(blob);
                    }
                    if (target_view) {
                        target_view.location.href = object_url;
                    } else {
                        var new_tab = view.open(object_url, "_blank");
                        if (new_tab == undefined && typeof safari !== "undefined") {
                            //Apple do not allow window.open, see http://bit.ly/1kZffRI
                            view.location.href = object_url
                        }
                    }
                    filesaver.readyState = filesaver.DONE;
                    dispatch_all();
                    revoke(object_url);
                }
                , abortable = function(func) {
                    return function() {
                        if (filesaver.readyState !== filesaver.DONE) {
                            return func.apply(this, arguments);
                        }
                    };
                }
                , create_if_not_found = {create: true, exclusive: false}
                , slice
                ;
            filesaver.readyState = filesaver.INIT;
            if (!name) {
                name = "download";
            }
            if (can_use_save_link) {
                object_url = get_URL().createObjectURL(blob);
                save_link.href = object_url;
                save_link.download = name;
                click(save_link);
                filesaver.readyState = filesaver.DONE;
                dispatch_all();
                revoke(object_url);
                return;
            }
            // Object and web filesystem URLs have a problem saving in Google Chrome when
            // viewed in a tab, so I force save with application/octet-stream
            // http://code.google.com/p/chromium/issues/detail?id=91158
            // Update: Google errantly closed 91158, I submitted it again:
            // https://code.google.com/p/chromium/issues/detail?id=389642
            if (view.chrome && type && type !== force_saveable_type) {
                slice = blob.slice || blob.webkitSlice;
                blob = slice.call(blob, 0, blob.size, force_saveable_type);
                blob_changed = true;
            }
            // Since I can't be sure that the guessed media type will trigger a download
            // in WebKit, I append .download to the filename.
            // https://bugs.webkit.org/show_bug.cgi?id=65440
            if (webkit_req_fs && name !== "download") {
                name += ".download";
            }
            if (type === force_saveable_type || webkit_req_fs) {
                target_view = view;
            }
            if (!req_fs) {
                fs_error();
                return;
            }
            fs_min_size += blob.size;
            req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
                fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
                    var save = function() {
                        dir.getFile(name, create_if_not_found, abortable(function(file) {
                            file.createWriter(abortable(function(writer) {
                                writer.onwriteend = function(event) {
                                    target_view.location.href = file.toURL();
                                    filesaver.readyState = filesaver.DONE;
                                    dispatch(filesaver, "writeend", event);
                                    revoke(file);
                                };
                                writer.onerror = function() {
                                    var error = writer.error;
                                    if (error.code !== error.ABORT_ERR) {
                                        fs_error();
                                    }
                                };
                                "writestart progress write abort".split(" ").forEach(function(event) {
                                    writer["on" + event] = filesaver["on" + event];
                                });
                                writer.write(blob);
                                filesaver.abort = function() {
                                    writer.abort();
                                    filesaver.readyState = filesaver.DONE;
                                };
                                filesaver.readyState = filesaver.WRITING;
                            }), fs_error);
                        }), fs_error);
                    };
                    dir.getFile(name, {create: false}, abortable(function(file) {
                        // delete file if it already exists
                        file.remove();
                        save();
                    }), abortable(function(ex) {
                        if (ex.code === ex.NOT_FOUND_ERR) {
                            save();
                        } else {
                            fs_error();
                        }
                    }));
                }), fs_error);
            }), fs_error);
        }
        , FS_proto = FileSaver.prototype
        , saveAs = function(blob, name) {
            return new FileSaver(blob, name);
        }
        ;
    FS_proto.abort = function() {
        var filesaver = this;
        filesaver.readyState = filesaver.DONE;
        dispatch(filesaver, "abort");
    };
    FS_proto.readyState = FS_proto.INIT = 0;
    FS_proto.WRITING = 1;
    FS_proto.DONE = 2;

    FS_proto.error =
        FS_proto.onwritestart =
            FS_proto.onprogress =
                FS_proto.onwrite =
                    FS_proto.onabort =
                        FS_proto.onerror =
                            FS_proto.onwriteend =
                                null;

    return saveAs;
}(
        typeof self !== "undefined" && self
            || typeof window !== "undefined" && window
            || this.content
    ));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module !== null) {
    module.exports = saveAs;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
    define([], function() {
        return saveAs;
    });
}


