/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-hashchange-history-audio-video-input-inputtypes-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function F(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)r[a[b]]=a[b]in k;return r}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,g,h,i=a.length;d<i;d++)k.setAttribute("type",g=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(g)&&k.style.WebkitAppearance!==c?(f.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,f.removeChild(k)):/^(search|tel)$/.test(g)||(/^(url|email)$/.test(g)?e=k.checkValidity&&k.checkValidity()===!1:/^color$/.test(g)?(f.appendChild(k),f.offsetWidth,e=k.value!=l,f.removeChild(k)):e=k.value!=l)),q[a[d]]=!!e;return q}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function D(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+o.join(c+" ")+c).split(" ");return C(d,b)}function C(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function B(a,b){return!!~(""+a).indexOf(b)}function A(a,b){return typeof a===b}function z(a,b){return y(n.join(a+";")+(b||""))}function y(a){j.cssText=a}var d="2.0.6",e={},f=b.documentElement,g=b.head||b.getElementsByTagName("head")[0],h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m=Object.prototype.toString,n=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),o="Webkit Moz O ms Khtml".split(" "),p={},q={},r={},s=[],t=function(a,c,d,e){var g,i,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);g=["&shy;","<style>",a,"</style>"].join(""),k.id=h,k.innerHTML+=g,f.appendChild(k),i=c(k,a),k.parentNode.removeChild(k);return!!i},u=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=A(e[d],"function"),A(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),v,w={}.hasOwnProperty,x;!A(w,c)&&!A(w.call,c)?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],c)};var E=function(a,c){var d=a.join(""),f=c.length;t(d,function(a,c){var d=b.styleSheets[b.styleSheets.length-1],g=d.cssRules&&d.cssRules[0]?d.cssRules[0].cssText:d.cssText||"",h=a.childNodes,i={};while(f--)i[h[f].id]=h[f];e.csstransforms3d=i.csstransforms3d.offsetLeft===9,e.generatedcontent=i.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(g)&&g.indexOf(c.split(" ")[0])===0},f,c)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",n.join("transform-3d),("),h,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',l,'";visibility:hidden}'].join("")],["fontface","csstransforms3d","generatedcontent"]);p.flexbox=function(){function c(a,b,c,d){a.style.cssText=n.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+n.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),f.appendChild(d);var g=e.offsetWidth===42;d.removeChild(e),f.removeChild(d);return g},p.hashchange=function(){return u("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},p.history=function(){return!!a.history&&!!history.pushState},p.rgba=function(){y("background-color:rgba(150,255,150,.5)");return B(j.backgroundColor,"rgba")},p.hsla=function(){y("background-color:hsla(120,40%,100%,.5)");return B(j.backgroundColor,"rgba")||B(j.backgroundColor,"hsla")},p.multiplebgs=function(){y("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(j.background)},p.backgroundsize=function(){return D("backgroundSize")},p.borderimage=function(){return D("borderImage")},p.borderradius=function(){return D("borderRadius")},p.boxshadow=function(){return D("boxShadow")},p.textshadow=function(){return b.createElement("div").style.textShadow===""},p.opacity=function(){z("opacity:.55");return/^0.55$/.test(j.opacity)},p.cssanimations=function(){return D("animationName")},p.csscolumns=function(){return D("columnCount")},p.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";y((a+n.join(b+a)+n.join(c+a)).slice(0,-a.length));return B(j.backgroundImage,"gradient")},p.cssreflections=function(){return D("boxReflect")},p.csstransforms=function(){return!!C(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},p.csstransforms3d=function(){var a=!!C(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in f.style&&(a=e.csstransforms3d);return a},p.csstransitions=function(){return D("transitionProperty")},p.fontface=function(){return e.fontface},p.generatedcontent=function(){return e.generatedcontent},p.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c},p.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c};for(var G in p)x(p,G)&&(v=G.toLowerCase(),e[v]=p[G](),s.push((e[v]?"":"no-")+v));e.input||F(),y(""),i=k=null,e._version=d,e._prefixes=n,e._domPrefixes=o,e.hasEvent=u,e.testProp=function(a){return C([a])},e.testAllProps=D,e.testStyles=t;return e}(this,this.document);