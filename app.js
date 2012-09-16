var Swapper=function(x,q,f,h){function r(b,a){var c=a.parentNode;c.lastchild===a?c.appendChild(b):c.insertBefore(b,a.nextSibling)}function p(b){b.parentNode&&b.parentNode.removeChild(b)}function i(b,a){b.style["-webkit-transform"]=a;b.style["-moz-transform"]=a;b.style["-ms-transform"]=a;b.style["-o-transform"]=a;b.style.transform=a}function m(b,a){a?(b.style["-webkit-transition"]="-webkit-"+a,b.style["-moz-transition"]="-moz-"+a,b.style["-ms-transition"]="-ms-"+a,b.style["-o-transition"]="-o-"+a,
b.style.transition=a):(b.style["-webkit-transition"]="",b.style["-moz-transition"]="",b.style["-ms-transition"]="",b.style["-o-transition"]="",b.style.transition="")}function n(b,a){var c;c=a?b.style:q.defaultView.getComputedStyle(b,null);return{display:c.display,opacity:c.opacity,top:c.top,left:c.left,height:c.height,width:c.width,position:c.position}}function s(b){var a;a:if(b){try{a=b instanceof Node||b instanceof HTMLElement;break a}catch(c){}a="object"!==typeof b||"number"!==typeof b.nodeType||
"string"!==typeof b.nodeName?!1:!0}else a=!1;if(!a)throw TypeError("element must be a DOM node, got "+b);}function j(b,a,c,l){function e(){t||(t=!0,a.removeEventListener("webkitTransitionEnd",e),a.removeEventListener("transitionend",e),a.removeEventListener("oTransitionEnd",e),a.removeEventListener("otransitionend",e),a.removeEventListener("MSTransitionEnd",e),a.removeEventListener("transitionend",e),p(b),m(b,""),m(a,""),setTimeout(function(){i(b,"");i(a,"");g[0].fade&&(a.style.opacity=k.opacity);
g[1].fade&&(b.style.opacity=w.opacity);a.style.position=k.position;a.style.top=k.top;a.style.left=k.left;a.style.height=k.height;a.style.width=k.width;b._swapper=!1;a._swapper=!1;l()},0))}s(b);s(a);"function"===typeof c&&(l=c,c={});switch(typeof c){case "string":c={transition:c};break;case "undefined":c={};break;case "object":break;default:throw TypeError("options must be an object if defined, got "+c);}switch(typeof c.transition){case "string":if(!(c.transition in u)&&"instant"!==c.transition)throw TypeError(c.transition+
" is not a valid transition");break;case "undefined":break;default:throw TypeError("transition must be a string if defined, got "+c.transition);}switch(typeof c.duration){case "number":if(0>c.duration)throw TypeError("duration must be a non-negative integer, got "+c.duration);break;case "undefined":break;default:throw TypeError("duration must be a number if defined, got "+c.duration);}switch(typeof c.easing){case "string":if(!(c.easing in v))throw TypeError(c.easing+" is not a valid easing");break;
case "undefined":break;default:throw TypeError("easing must be a string if defined, got "+c.easing);}var d=l;switch(typeof d){case "undefined":d=function(){};break;case "function":break;default:throw TypeError("callback must be a function if defined, got "+d);}l=d;if(b._swapper)throw Error("elem1 is currently being swapped");if(a._swapper)throw Error("elem2 is currently being swapped");a:{for(d=b;d=d.parentNode;)if(d===q){d=!0;break a}d=!1}if(!d)throw Error("elem1 must be in the DOM to be swapped");
b._swapper=!0;a._swapper=!0;p(a);if("instant"===c.transition)r(a,b),p(b),b._swapper=!1,a._swapper=!1,setTimeout(function(){l()},0);else{var g=u[c.transition||"fade"],f=v[c.easing||"ease-in-out"],h=c.duration||300;r(a,b);var c=b.getBoundingClientRect(),d=n(b),j=n(a),w=n(b,!0),k=n(a,!0);"none"!==d.display&&(a.style.position="fixed",a.style.top=c.top+"px",a.style.left=c.left+"px");a.style.height=j.height||d.height;a.style.width=j.width||d.width;g[2]&&b.parentNode.insertBefore(a,b);i(b,o);i(a,g[0].transform||
o);g[0].fade&&(a.style.opacity="0");g[1].fade&&(b.style.opacity="1");setTimeout(function(){var c="transform "+h/1E3+"s "+f+", opacity "+h/1E3+"s "+f;m(b,c);m(a,c);setTimeout(function(){i(b,g[1].transform||o);i(a,o);if(g[0].fade)a.style.opacity="1";if(g[1].fade)b.style.opacity="0";a.addEventListener("webkitTransitionEnd",e,false);a.addEventListener("transitionend",e,false);a.addEventListener("oTransitionEnd",e,false);a.addEventListener("otransitionend",e,false);a.addEventListener("MSTransitionEnd",
e,false);a.addEventListener("transitionend",e,false);setTimeout(e,h+300)},0)},0);var t=!1}}var o="translate3d(0,0,0) scale(1)",u={fade:[{fade:!0},{fade:!0}],"scale-in":[{transform:"scale(0.01)"},{}],"scale-out":[{},{transform:"scale(0.01)"},!0],"rotate-left":[{transform:"rotateY(-180deg) perspective(360px)",fade:!0},{transform:"rotateY( 180deg) perspective(360px)",fade:!0}],"rotate-right":[{transform:"rotateY( 180deg) perspective(360px)",fade:!0},{transform:"rotateY(-180deg) perspective(360px)",fade:!0}],
"cube-left":[{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"}],"cube-right":[{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-left":[{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-right":[{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"},
{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"}],"explode-in":[{fade:!0,transform:"scale(1.25)"},{}],"explode-out":[{},{fade:!0,transform:"scale(1.25)"},!0],"implode-in":[{},{fade:!0,transform:"scale(0.60)"},!0],"implode-out":[{fade:!0,transform:"scale(0.80)"},{}],"slide-left":[{transform:"translate3d( 100%,0,0)"},{transform:"translate3d(-100%,0,0)"}],"slide-right":[{transform:"translate3d(-100%,0,0)"},{transform:"translate3d( 100%,0,0)"}],"slide-up":[{transform:"translate3d(0, 100%,0)"},
{transform:"translate3d(0,-100%,0)"}],"slide-down":[{transform:"translate3d(0,-100%,0)"},{transform:"translate3d(0, 100%,0)"}],"slideon-left":[{transform:"translate3d(-100%,0,0)"},{}],"slideoff-left":[{},{transform:"translate3d(-100%,0,0)"},!0],"slideon-right":[{transform:"translate3d(100%,0,0)"},{}],"slideoff-right":[{},{transform:"translate3d(100%,0,0)"},!0],"slideon-up":[{transform:"translate3d(0,-100%,0)"},{}],"slideoff-up":[{},{transform:"translate3d(0,-100%,0)"},!0],"slideon-down":[{transform:"translate3d(0,100%,0)"},
{}],"slideoff-down":[{},{transform:"translate3d(0,100%,0)"},!0]},v={linear:"linear",ease:"ease","ease-in":"ease-in","ease-out":"ease-out","ease-in-out":"ease-in-out","step-start":"step-start","step-end":"step-end"};f&&f.extend(f.fn,{swapper:function(b,a,c){b=f(b)[0];this.forEach(function(f){j(f,b,a,c)});return this}});h&&(h.fn.swapper=function(b,a,c){b=h(b)[0];this.each(function(){j(this,b,a,c)});return this});return j}(window,document,window.Zepto,window.jQuery);

var Clickable=function(q,u,n,l,o){function g(a,h){function e(){a.addEventListener("touchstart",n,!1);a.addEventListener("touchmove",p,!1);a.addEventListener("touchend",o,!1);a.addEventListener("touchcancel",p,!1)}function i(){a.removeEventListener("touchstart",n);a.removeEventListener("touchmove",p);a.removeEventListener("touchend",o);a.removeEventListener("touchcancel",p)}function g(){var b=a,c;c=a.className.replace(w,"");c=String(c).replace(x,"");b.className=c}function j(a,c){do{if(a===c)return!0;
if(a._clickable)break}while(a=a.parentNode);return!1}function k(b){c=!1;a.disabled||!j(b.target,a)?(b.preventDefault(),f=!1):(f=!0,a.className+=" "+h)}function r(a){a.preventDefault();c=f=!1;g()}function l(b){a.disabled?(b.preventDefault(),c=f=!1):(f?c=!0:(b.preventDefault(),c=!1),f=!1,g())}function n(b){c=!1;if(a.disabled||!j(b.target,a))f=!1;else{f=!0;var d=s=+new Date;setTimeout(function(){f&&d===s&&(a.className+=" "+h)},v)}}function p(){f=c=!1;a.disabled||g()}function o(b){function d(){c=!0;var b=
u.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,q,1,0,0,0,0,!1,!1,!1,!1,0,null);a.dispatchEvent(b)}var e=f;p();e&&!a.disabled&&(b.stopImmediatePropagation?+new Date-s>v?d():(a.className+=" "+h,setTimeout(function(){g();d()},1)):c=!0)}function t(b){b=b||q.event;if(!a.disabled&&c)c=!1;else return b.stopImmediatePropagation&&b.stopImmediatePropagation(),b.preventDefault(),b.stopPropagation(),b.cancelBubble=!0,b.returnValue=!1}var d;a:if(a){try{d=a instanceof Node||a instanceof HTMLElement;
break a}catch(y){}d="object"!==typeof a||"number"!==typeof a.nodeType||"string"!==typeof a.nodeName?!1:!0}else d=!1;if(!d)throw TypeError("element "+a+" must be a DOM element");if(!a._clickable){a._clickable=!0;switch(typeof h){case "undefined":h="active";case "string":break;default:throw TypeError("active class "+h+" must be a string");}a.setAttribute("data-clickable-class",h);var w=RegExp("\\b"+h+"\\b"),f=!1,c=!1,s;if(m.ios||m.android)if(a.style["-webkit-tap-highlight-color"]="rgba(255,255,255,0)",
a.addEventListener("click",t,!1),m.ios){a.addEventListener("DOMNodeInsertedIntoDocument",e,!1);a.addEventListener("DOMNodeRemovedFromDocument",i,!1);a:{for(d=a;d=d.parentNode;)if(d===u){d=!0;break a}d=!1}d&&e()}else e();else a.addEventListener?(a.addEventListener("mousedown",k,!1),a.addEventListener("mousemove",r,!1),a.addEventListener("mouseout",r,!1),a.addEventListener("mouseup",l,!1),a.addEventListener("click",t,!1)):a.attachEvent&&(a.attachEvent("onmousedown",k),a.attachEvent("onmousemove",r),
a.attachEvent("onmouseout",r),a.attachEvent("onmouseup",l),a.attachEvent("onclick",t))}}var x=/^\s+|\s+$/g,v=40,m,i=q.navigator.userAgent,e,j,k;if(k=/\bCPU.*OS (\d+(_\d+)?)/i.exec(i))e="ios",j=k[1].replace("_",".");else if(k=/\bAndroid (\d+(\.\d+)?)/.exec(i))e="android",j=k[1];i={name:e,version:j&&q.parseFloat(j)};i[e]=!0;m=i;e=function(){g.apply(this,arguments)};n&&n.plugin("clickable",function(){g.apply(this,arguments)});l&&l.extend(l.fn,{clickable:function(a){this.forEach(function(e){g(e,a)});
return this}});o&&(o.fn.clickable=function(a){this.each(function(){g(this,a)});return this});e.touchable=function(){return m.ios||m.android};return e}(window,document,window.clik,window.Zepto,window.jQuery);

var Scrollable=function(C,q,V,u,v){function r(b){if(!b)return!1;try{return b instanceof Node||b instanceof HTMLElement}catch(a){}return"object"!==typeof b||"number"!==typeof b.nodeType||"string"!==typeof b.nodeName?!1:!0}function W(b,a,c){if(Array.prototype.forEach)Array.prototype.forEach.call(b,a,c);else for(var d=0,e=b.length;d<e;d++)d in b&&a.call(c,b[d],d,b)}function M(b){N?setTimeout(b,0):X.push(b)}function Y(b){try{q.documentElement.doScroll("left")}catch(a){setTimeout(function(){Y(b)},1);return}b()}
function J(b,a){function c(){var a=b._scrollTop(),c=b._scrollLeft();a===g&&c===k||(g=a,k=c,b.dispatchEvent&&(a=q.createEvent("MouseEvents"),a.initMouseEvent("scroll",!1,!1,C,0,0,0,0,0,!1,!1,!1,!1,0,null),b.dispatchEvent(a)))}if(!r(b))throw b+" is not a DOM element";if(!b._scrollable){b._scrollable=!0;b.style.overflow="scroll";b._scrollTop=function(a){if("undefined"===typeof a)return f?Math.max(parseInt(-f.y),0):b.scrollTop;!f&&(!O||K)?b.scrollTop=a:M(function(){f.scrollTo(f.x,Math.max(-a,0),1)})};
b._scrollLeft=function(a){if("undefined"===typeof a)return f?Math.max(parseInt(-f.x),0):b.scrollLeft;!f&&(!O||K)?b.scrollLeft=a:M(function(){f.scrollTo(Math.max(-a,0),f.y,1)})};if(!a){if(!O)return;if(K){b.style["-webkit-overflow-scrolling"]="touch";return}}var d=q.createElement("div"),e=Array.prototype.slice.call(b.childNodes||[]);W(e,function(a){a=b.removeChild(a);d.appendChild(a)});b.appendChild(d);var f,g,k;b._iScroll=!0;M(function(){f=new Z(b,{checkDOMChanges:!0,useTransform:!0,useTransition:!0,
hScrollbar:!1,vScrollbar:!1,bounce:!!z.ios,onScrollMove:c,onBeforeScrollEnd:c,onScrollEnd:c,onBeforeScrollStart:ga})})}}function ga(b){for(var a=b.target;1!==a.nodeType;)a=a.parentNode;"SELECT"!==a.tagName&&("INPUT"!==a.tagName&&"TEXTAREA"!==a.tagName)&&b.preventDefault()}function L(b){return r(b)&&b._iScroll?b.childNodes[0]:b}var X=[],N=!1,K=!1,z,s=navigator.userAgent,h,m,t;if(t=/\bCPU.*OS (\d+(_\d+)?)/i.exec(s))h="ios",m=t[1].replace("_",".");else if(t=/\bAndroid (\d+(\.\d+)?)/.exec(s))h="android",
m=t[1];s={name:h,version:m&&C.parseFloat(m)};s[h]=!0;z=s;var O=!!z.name,Z;if(z.ios&&5<=z.version||z.android&&4<=z.version)K=!0;var l=C,E=q;h=function(b){if(""===o)return b;b=b.charAt(0).toUpperCase()+b.substr(1);return o+b};var g=Math,s=E.createElement("div").style,o;a:{m=["t","webkitT","MozT","msT","OT"];var x;t=0;for(var ha=m.length;t<ha;t++)if(x=m[t]+"ransform",x in s){o=m[t].substr(0,m[t].length-1);break a}o=!1}var p=o?"-"+o.toLowerCase()+"-":"",w=h("transform"),ia=h("transitionProperty"),A=h("transitionDuration"),
ja=h("transformOrigin"),ka=h("transitionTimingFunction"),P=h("transitionDelay"),Q=/android/gi.test(navigator.appVersion),aa=/iphone|ipad/gi.test(navigator.appVersion);m=/hp-tablet/gi.test(navigator.appVersion);var ba=h("perspective")in s,n="ontouchstart"in l&&!m,ca=!!o,la=h("transition")in s,R="onorientationchange"in l?"orientationchange":"resize",S=n?"touchstart":"mousedown",F=n?"touchmove":"mousemove",G=n?"touchend":"mouseup",H=n?"touchcancel":"mouseup",T="Moz"==o?"DOMMouseScroll":"mousewheel",
B;B=!1===o?!1:{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"oTransitionEnd",ms:"MSTransitionEnd"}[o];var ma=l.requestAnimationFrame||l.webkitRequestAnimationFrame||l.mozRequestAnimationFrame||l.oRequestAnimationFrame||l.msRequestAnimationFrame||function(b){return setTimeout(b,1)},da=l.cancelRequestAnimationFrame||l.webkitCancelAnimationFrame||l.webkitCancelRequestAnimationFrame||l.mozCancelRequestAnimationFrame||l.oCancelRequestAnimationFrame||l.msCancelRequestAnimationFrame||
clearTimeout,y=ba?" translateZ(0)":"";m=function(b,a){var c=this,d;c.wrapper="object"==typeof b?b:E.getElementById(b);c.wrapper.style.overflow="hidden";c.scroller=c.wrapper.children[0];c.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:Q,hideScrollbar:aa,fadeScrollbar:aa&&ba,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,
wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(a){a.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(d in a)c.options[d]=a[d];c.x=c.options.x;c.y=c.options.y;c.options.useTransform=ca&&c.options.useTransform;c.options.hScrollbar=c.options.hScroll&&c.options.hScrollbar;c.options.vScrollbar=c.options.vScroll&&
c.options.vScrollbar;c.options.zoom=c.options.useTransform&&c.options.zoom;c.options.useTransition=la&&c.options.useTransition;c.options.zoom&&Q&&(y="");c.scroller.style[ia]=c.options.useTransform?p+"transform":"top left";c.scroller.style[A]="0";c.scroller.style[ja]="0 0";c.options.useTransition&&(c.scroller.style[ka]="cubic-bezier(0.33,0.66,0.66,1)");c.options.useTransform?c.scroller.style[w]="translate("+c.x+"px,"+c.y+"px)"+y:c.scroller.style.cssText+=";position:absolute;top:"+c.y+"px;left:"+c.x+
"px";c.options.useTransition&&(c.options.fixedScrollbar=!0);c.refresh();c._bind(R,l);c._bind(S);n||(c._bind("mouseout",c.wrapper),"none"!=c.options.wheelAction&&c._bind(T));c.options.checkDOMChanges&&(c.checkDOMTime=setInterval(function(){c._checkDOMChanges()},500))};m.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(b){switch(b.type){case S:if(!n&&0!==b.button)break;this._start(b);break;case F:this._move(b);
break;case G:case H:this._end(b);break;case R:this._resize();break;case T:this._wheel(b);break;case "mouseout":this._mouseout(b);break;case B:this._transitionEnd(b)}},_checkDOMChanges:function(){!this.moved&&!this.zoomed&&!(this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale)&&this.refresh()},_scrollbar:function(b){var a;this[b+"Scrollbar"]?(this[b+"ScrollbarWrapper"]||(a=E.createElement("div"),this.options.scrollbarClass?a.className=
this.options.scrollbarClass+b.toUpperCase():a.style.cssText="position:absolute;z-index:100;"+("h"==b?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?"7":"2")+"px;top:2px;right:1px"),a.style.cssText+=";pointer-events:none;"+p+"transition-property:opacity;"+p+"transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(a),this[b+"ScrollbarWrapper"]=
a,a=E.createElement("div"),this.options.scrollbarClass||(a.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+p+"background-clip:padding-box;"+p+"box-sizing:border-box;"+("h"==b?"height:100%":"width:100%")+";"+p+"border-radius:3px;border-radius:3px"),a.style.cssText+=";pointer-events:none;"+p+"transition-property:"+p+"transform;"+p+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+p+"transition-duration:0;"+p+"transform: translate(0,0)"+
y,this.options.useTransition&&(a.style.cssText+=";"+p+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[b+"ScrollbarWrapper"].appendChild(a),this[b+"ScrollbarIndicator"]=a),"h"==b?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,this.hScrollbarIndicatorSize=g.max(g.round(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=
this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=g.max(g.round(this.vScrollbarSize*this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(b,!0)):this[b+"ScrollbarWrapper"]&&(ca&&(this[b+"ScrollbarIndicator"].style[w]=
""),this[b+"ScrollbarWrapper"].parentNode.removeChild(this[b+"ScrollbarWrapper"]),this[b+"ScrollbarWrapper"]=null,this[b+"ScrollbarIndicator"]=null)},_resize:function(){var b=this;setTimeout(function(){b.refresh()},Q?200:0)},_pos:function(b,a){this.zoomed||(b=this.hScroll?b:0,a=this.vScroll?a:0,this.options.useTransform?this.scroller.style[w]="translate("+b+"px,"+a+"px) scale("+this.scale+")"+y:(b=g.round(b),a=g.round(a),this.scroller.style.left=b+"px",this.scroller.style.top=a+"px"),this.x=b,this.y=
a,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(b,a){var c="h"==b?this.x:this.y;this[b+"Scrollbar"]&&(c*=this[b+"ScrollbarProp"],0>c?(this.options.fixedScrollbar||(c=this[b+"ScrollbarIndicatorSize"]+g.round(3*c),8>c&&(c=8),this[b+"ScrollbarIndicator"].style["h"==b?"width":"height"]=c+"px"),c=0):c>this[b+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?c=this[b+"ScrollbarMaxScroll"]:(c=this[b+"ScrollbarIndicatorSize"]-g.round(3*(c-this[b+"ScrollbarMaxScroll"])),8>c&&(c=
8),this[b+"ScrollbarIndicator"].style["h"==b?"width":"height"]=c+"px",c=this[b+"ScrollbarMaxScroll"]+(this[b+"ScrollbarIndicatorSize"]-c))),this[b+"ScrollbarWrapper"].style[P]="0",this[b+"ScrollbarWrapper"].style.opacity=a&&this.options.hideScrollbar?"0":"1",this[b+"ScrollbarIndicator"].style[w]="translate("+("h"==b?c+"px,0)":"0,"+c+"px)")+y)},_start:function(b){var a=n?b.touches[0]:b,c,d;if(this.enabled){this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,b);(this.options.useTransition||
this.options.zoom)&&this._transitionTime(0);this.zoomed=this.animating=this.moved=!1;this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0;this.options.zoom&&n&&1<b.touches.length&&(d=g.abs(b.touches[0].pageX-b.touches[1].pageX),c=g.abs(b.touches[0].pageY-b.touches[1].pageY),this.touchesDistStart=g.sqrt(d*d+c*c),this.originX=g.abs(b.touches[0].pageX+b.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=g.abs(b.touches[0].pageY+b.touches[1].pageY-2*this.wrapperOffsetTop)/
2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,b));if(this.options.momentum&&(this.options.useTransform?(c=getComputedStyle(this.scroller,null)[w].replace(/[^0-9\-.,]/g,"").split(","),d=1*c[4],c=1*c[5]):(d=1*getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),c=1*getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),d!=this.x||c!=this.y))this.options.useTransition?this._unbind(B):da(this.aniTime),this.steps=[],this._pos(d,c);this.absStartX=this.x;this.absStartY=
this.y;this.startX=this.x;this.startY=this.y;this.pointX=a.pageX;this.pointY=a.pageY;this.startTime=b.timeStamp||Date.now();this.options.onScrollStart&&this.options.onScrollStart.call(this,b);this._bind(F);this._bind(G);this._bind(H)}},_move:function(b){var a=n?b.touches[0]:b,c=a.pageX-this.pointX,d=a.pageY-this.pointY,e=this.x+c,f=this.y+d,i=b.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,b);if(this.options.zoom&&n&&1<b.touches.length)e=g.abs(b.touches[0].pageX-
b.touches[1].pageX),f=g.abs(b.touches[0].pageY-b.touches[1].pageY),this.touchesDist=g.sqrt(e*e+f*f),this.zoomed=!0,a=1/this.touchesDistStart*this.touchesDist*this.scale,a<this.options.zoomMin?a=0.5*this.options.zoomMin*Math.pow(2,a/this.options.zoomMin):a>this.options.zoomMax&&(a=2*this.options.zoomMax*Math.pow(0.5,this.options.zoomMax/a)),this.lastScale=a/this.scale,e=this.originX-this.originX*this.lastScale+this.x,f=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[w]="translate("+
e+"px,"+f+"px) scale("+a+")"+y,this.options.onZoom&&this.options.onZoom.call(this,b);else{this.pointX=a.pageX;this.pointY=a.pageY;if(0<e||e<this.maxScrollX)e=this.options.bounce?this.x+c/2:0<=e||0<=this.maxScrollX?0:this.maxScrollX;if(f>this.minScrollY||f<this.maxScrollY)f=this.options.bounce?this.y+d/2:f>=this.minScrollY||0<=this.maxScrollY?this.minScrollY:this.maxScrollY;this.distX+=c;this.distY+=d;this.absDistX=g.abs(this.distX);this.absDistY=g.abs(this.distY);6>this.absDistX&&6>this.absDistY||
(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(f=this.y,d=0):this.absDistY>this.absDistX+5&&(e=this.x,c=0)),this.moved=!0,this._pos(e,f),this.dirX=0<c?-1:0>c?1:0,this.dirY=0<d?-1:0>d?1:0,300<i-this.startTime&&(this.startTime=i,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,b))}},_end:function(b){if(!(n&&0!==b.touches.length)){var a=this,c=n?b.changedTouches[0]:b,d,e,f={dist:0,time:0},i={dist:0,time:0},k=(b.timeStamp||Date.now())-
a.startTime,j=a.x,h=a.y;a._unbind(F);a._unbind(G);a._unbind(H);a.options.onBeforeScrollEnd&&a.options.onBeforeScrollEnd.call(a,b);if(a.zoomed)j=a.scale*a.lastScale,j=Math.max(a.options.zoomMin,j),j=Math.min(a.options.zoomMax,j),a.lastScale=j/a.scale,a.scale=j,a.x=a.originX-a.originX*a.lastScale+a.x,a.y=a.originY-a.originY*a.lastScale+a.y,a.scroller.style[A]="200ms",a.scroller.style[w]="translate("+a.x+"px,"+a.y+"px) scale("+a.scale+")"+y,a.zoomed=!1,a.refresh(),a.options.onZoomEnd&&a.options.onZoomEnd.call(a,
b);else{if(a.moved){if(300>k&&a.options.momentum){f=j?a._momentum(j-a.startX,k,-a.x,a.scrollerW-a.wrapperW+a.x,a.options.bounce?a.wrapperW:0):f;i=h?a._momentum(h-a.startY,k,-a.y,0>a.maxScrollY?a.scrollerH-a.wrapperH+a.y-a.minScrollY:0,a.options.bounce?a.wrapperH:0):i;j=a.x+f.dist;h=a.y+i.dist;if(0<a.x&&0<j||a.x<a.maxScrollX&&j<a.maxScrollX)f={dist:0,time:0};if(a.y>a.minScrollY&&h>a.minScrollY||a.y<a.maxScrollY&&h<a.maxScrollY)i={dist:0,time:0}}f.dist||i.dist?(f=g.max(g.max(f.time,i.time),10),a.options.snap&&
(i=j-a.absStartX,k=h-a.absStartY,g.abs(i)<a.options.snapThreshold&&g.abs(k)<a.options.snapThreshold?a.scrollTo(a.absStartX,a.absStartY,200):(i=a._snap(j,h),j=i.x,h=i.y,f=g.max(i.time,f))),a.scrollTo(g.round(j),g.round(h),f)):a.options.snap?(i=j-a.absStartX,k=h-a.absStartY,g.abs(i)<a.options.snapThreshold&&g.abs(k)<a.options.snapThreshold?a.scrollTo(a.absStartX,a.absStartY,200):(i=a._snap(a.x,a.y),(i.x!=a.x||i.y!=a.y)&&a.scrollTo(i.x,i.y,i.time))):a._resetPos(200)}else n&&(a.doubleTapTimer&&a.options.zoom?
(clearTimeout(a.doubleTapTimer),a.doubleTapTimer=null,a.options.onZoomStart&&a.options.onZoomStart.call(a,b),a.zoom(a.pointX,a.pointY,1==a.scale?a.options.doubleTapZoom:1),a.options.onZoomEnd&&setTimeout(function(){a.options.onZoomEnd.call(a,b)},200)):this.options.handleClick&&(a.doubleTapTimer=setTimeout(function(){a.doubleTapTimer=null;for(d=c.target;1!=d.nodeType;)d=d.parentNode;"SELECT"!=d.tagName&&"INPUT"!=d.tagName&&"TEXTAREA"!=d.tagName&&(e=E.createEvent("MouseEvents"),e.initMouseEvent("click",
!0,!0,b.view,1,c.screenX,c.screenY,c.clientX,c.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,0,null),e._fake=!0,d.dispatchEvent(e))},a.options.zoom?250:0))),a._resetPos(200);a.options.onTouchEnd&&a.options.onTouchEnd.call(a,b)}}},_resetPos:function(b){var a=0<=this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,c=this.y>=this.minScrollY||0<this.maxScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;if(a==this.x&&c==this.y){if(this.moved&&(this.moved=!1,this.options.onScrollEnd&&
this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==o&&(this.hScrollbarWrapper.style[P]="300ms"),this.hScrollbarWrapper.style.opacity="0"),this.vScrollbar&&this.options.hideScrollbar)"webkit"==o&&(this.vScrollbarWrapper.style[P]="300ms"),this.vScrollbarWrapper.style.opacity="0"}else this.scrollTo(a,c,b||0)},_wheel:function(b){var a=this,c,d;if("wheelDeltaX"in b)c=b.wheelDeltaX/12,d=b.wheelDeltaY/12;else if("wheelDelta"in b)c=d=b.wheelDelta/12;else if("detail"in
b)c=d=3*-b.detail;else return;if("zoom"==a.options.wheelAction){if(d=a.scale*Math.pow(2,1/3*(d?d/Math.abs(d):0)),d<a.options.zoomMin&&(d=a.options.zoomMin),d>a.options.zoomMax&&(d=a.options.zoomMax),d!=a.scale)!a.wheelZoomCount&&a.options.onZoomStart&&a.options.onZoomStart.call(a,b),a.wheelZoomCount++,a.zoom(b.pageX,b.pageY,d,400),setTimeout(function(){a.wheelZoomCount--;!a.wheelZoomCount&&a.options.onZoomEnd&&a.options.onZoomEnd.call(a,b)},400)}else c=a.x+c,d=a.y+d,0<c?c=0:c<a.maxScrollX&&(c=a.maxScrollX),
d>a.minScrollY?d=a.minScrollY:d<a.maxScrollY&&(d=a.maxScrollY),0>a.maxScrollY&&a.scrollTo(c,d,0)},_mouseout:function(b){var a=b.relatedTarget;if(a)for(;a=a.parentNode;)if(a==this.wrapper)return;this._end(b)},_transitionEnd:function(b){b.target==this.scroller&&(this._unbind(B),this._startAni())},_startAni:function(){var b=this,a=b.x,c=b.y,d=Date.now(),e,f,h;b.animating||(b.steps.length?(e=b.steps.shift(),e.x==a&&e.y==c&&(e.time=0),b.animating=!0,b.moved=!0,b.options.useTransition)?(b._transitionTime(e.time),
b._pos(e.x,e.y),b.animating=!1,e.time?b._bind(B):b._resetPos(0)):(h=function(){var k=Date.now(),j;k>=d+e.time?(b._pos(e.x,e.y),b.animating=!1,b.options.onAnimationEnd&&b.options.onAnimationEnd.call(b),b._startAni()):(k=(k-d)/e.time-1,f=g.sqrt(1-k*k),k=(e.x-a)*f+a,j=(e.y-c)*f+c,b._pos(k,j),b.animating&&(b.aniTime=ma(h)))},h()):b._resetPos(400))},_transitionTime:function(b){b+="ms";this.scroller.style[A]=b;this.hScrollbar&&(this.hScrollbarIndicator.style[A]=b);this.vScrollbar&&(this.vScrollbarIndicator.style[A]=
b)},_momentum:function(b,a,c,d,e){var a=g.abs(b)/a,f=a*a/0.0012;0<b&&f>c?(c+=e/(6/(6E-4*(f/a))),a=a*c/f,f=c):0>b&&f>d&&(d+=e/(6/(6E-4*(f/a))),a=a*d/f,f=d);return{dist:f*(0>b?-1:1),time:g.round(a/6E-4)}},_offset:function(b){for(var a=-b.offsetLeft,c=-b.offsetTop;b=b.offsetParent;)a-=b.offsetLeft,c-=b.offsetTop;b!=this.wrapper&&(a*=this.scale,c*=this.scale);return{left:a,top:c}},_snap:function(b,a){var c,d,e;e=this.pagesX.length-1;c=0;for(d=this.pagesX.length;c<d;c++)if(b>=this.pagesX[c]){e=c;break}e==
this.currPageX&&0<e&&0>this.dirX&&e--;b=this.pagesX[e];d=(d=g.abs(b-this.pagesX[this.currPageX]))?500*(g.abs(this.x-b)/d):0;this.currPageX=e;e=this.pagesY.length-1;for(c=0;c<e;c++)if(a>=this.pagesY[c]){e=c;break}e==this.currPageY&&0<e&&0>this.dirY&&e--;a=this.pagesY[e];c=(c=g.abs(a-this.pagesY[this.currPageY]))?500*(g.abs(this.y-a)/c):0;this.currPageY=e;e=g.round(g.max(d,c))||200;return{x:b,y:a,time:e}},_bind:function(b,a,c){(a||this.scroller).addEventListener(b,this,!!c)},_unbind:function(b,a,c){(a||
this.scroller).removeEventListener(b,this,!!c)},destroy:function(){this.scroller.style[w]="";this.vScrollbar=this.hScrollbar=!1;this._scrollbar("h");this._scrollbar("v");this._unbind(R,l);this._unbind(S);this._unbind(F);this._unbind(G);this._unbind(H);this.options.hasTouch||(this._unbind("mouseout",this.wrapper),this._unbind(T));this.options.useTransition&&this._unbind(B);this.options.checkDOMChanges&&clearInterval(this.checkDOMTime);this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var b,
a,c,d=0;a=0;this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin);this.wrapperW=this.wrapper.clientWidth||1;this.wrapperH=this.wrapper.clientHeight||1;this.minScrollY=-this.options.topOffset||0;this.scrollerW=g.round(this.scroller.offsetWidth*this.scale);this.scrollerH=g.round((this.scroller.offsetHeight+this.minScrollY)*this.scale);this.maxScrollX=this.wrapperW-this.scrollerW;this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY;this.dirY=this.dirX=0;this.options.onRefresh&&this.options.onRefresh.call(this);
this.hScroll=this.options.hScroll&&0>this.maxScrollX;this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH);this.hScrollbar=this.hScroll&&this.options.hScrollbar;this.vScrollbar=this.vScroll&&this.options.vScrollbar&&this.scrollerH>this.wrapperH;b=this._offset(this.wrapper);this.wrapperOffsetLeft=-b.left;this.wrapperOffsetTop=-b.top;if("string"==typeof this.options.snap){this.pagesX=[];this.pagesY=[];c=this.scroller.querySelectorAll(this.options.snap);
b=0;for(a=c.length;b<a;b++)d=this._offset(c[b]),d.left+=this.wrapperOffsetLeft,d.top+=this.wrapperOffsetTop,this.pagesX[b]=d.left<this.maxScrollX?this.maxScrollX:d.left*this.scale,this.pagesY[b]=d.top<this.maxScrollY?this.maxScrollY:d.top*this.scale}else if(this.options.snap){for(this.pagesX=[];d>=this.maxScrollX;)this.pagesX[a]=d,d-=this.wrapperW,a++;this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]);
a=d=0;for(this.pagesY=[];d>=this.maxScrollY;)this.pagesY[a]=d,d-=this.wrapperH,a++;this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-1]+this.pagesY[this.pagesY.length-1])}this._scrollbar("h");this._scrollbar("v");this.zoomed||(this.scroller.style[A]="0",this._resetPos(200))},scrollTo:function(b,a,c,d){var e=b;this.stop();e.length||(e=[{x:b,y:a,time:c,relative:d}]);b=0;for(a=e.length;b<a;b++)e[b].relative&&(e[b].x=this.x-e[b].x,e[b].y=this.y-
e[b].y),this.steps.push({x:e[b].x,y:e[b].y,time:e[b].time||0});this._startAni()},scrollToElement:function(b,a){var c;if(b=b.nodeType?b:this.scroller.querySelector(b))c=this._offset(b),c.left+=this.wrapperOffsetLeft,c.top+=this.wrapperOffsetTop,c.left=0<c.left?0:c.left<this.maxScrollX?this.maxScrollX:c.left,c.top=c.top>this.minScrollY?this.minScrollY:c.top<this.maxScrollY?this.maxScrollY:c.top,a=void 0===a?g.max(2*g.abs(c.left),2*g.abs(c.top)):a,this.scrollTo(c.left,c.top,a)},scrollToPage:function(b,
a,c){c=void 0===c?400:c;this.options.onScrollStart&&this.options.onScrollStart.call(this);if(this.options.snap)b="next"==b?this.currPageX+1:"prev"==b?this.currPageX-1:b,a="next"==a?this.currPageY+1:"prev"==a?this.currPageY-1:a,b=0>b?0:b>this.pagesX.length-1?this.pagesX.length-1:b,a=0>a?0:a>this.pagesY.length-1?this.pagesY.length-1:a,this.currPageX=b,this.currPageY=a,b=this.pagesX[b],a=this.pagesY[a];else if(b*=-this.wrapperW,a*=-this.wrapperH,b<this.maxScrollX&&(b=this.maxScrollX),a<this.maxScrollY)a=
this.maxScrollY;this.scrollTo(b,a,c)},disable:function(){this.stop();this._resetPos(0);this.enabled=!1;this._unbind(F);this._unbind(G);this._unbind(H)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(B):da(this.aniTime);this.steps=[];this.animating=this.moved=!1},zoom:function(b,a,c,d){var e=c/this.scale;this.options.useTransform&&(this.zoomed=!0,d=void 0===d?200:d,b=b-this.wrapperOffsetLeft-this.x,a=a-this.wrapperOffsetTop-this.y,this.x=b-b*e+this.x,this.y=
a-a*e+this.y,this.scale=c,this.refresh(),this.x=0<this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y,this.scroller.style[A]=d+"ms",this.scroller.style[w]="translate("+this.x+"px,"+this.y+"px) scale("+c+")"+y,this.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}};s=null;Z=m;var D=function(){N||(N=!0,W(X,function(b){setTimeout(b,0)}))};if("complete"===q.readyState)setTimeout(D,
0);else if(q.addEventListener)q.addEventListener("DOMContentLoaded",D,!1),C.addEventListener("load",D,!1);else if(q.attachEvent){q.attachEvent("onreadystatechange",D);C.attachEvent("onload",D);x=!1;try{x=null===C.frameElement}catch(na){}q.documentElement.doScroll&&x&&setTimeout(function(){Y(D)},0)}x=function(){J.apply(this,arguments)};h=function(){J.apply(this,arguments)};V&&(h.node=function(){return L.apply(this,arguments)},V.plugin("scrollable",h));if(u){u.extend(u.fn,{scrollable:function(b){this.forEach(function(a){J(a,
b)});return this},scrollableNode:function(){return $(this.map(function(){return L(this)}))}});var I=u.fn.scrollTop,U=u.fn.scrollLeft;u.fn.scrollTop=function(b){if(typeof b==="undefined"){var a=this[0],c=r(a);return c&&a._scrollTop?a._scrollTop():I?I.apply(this,arguments):c?a.scrollTop:null}this.forEach(function(a){var c=r(a);if(c&&a._scrollTop)a._scrollTop(b);else if(I)I.call(u(a),b);else if(c)a.scrollTop=b});return this};u.fn.scrollLeft=function(b){if(typeof b==="undefined"){var a=this[0],c=r(a);
return c&&a._scrollLeft?a._scrollLeft():I?U.apply(this,arguments):c?a.scrollLeft:null}this.forEach(function(a){var c=r(a);if(c&&a._scrollLeft)a._scrollLeft(b);else if(U)U.call(u(a),b);else if(c)a.scrollLeft=b});return this}}if(v){v.fn.scrollable=function(b){this.each(function(){J(this,b)});return this};v.fn.scrollableNode=function(){return $(this.map(function(){return L(this)}))};var ea=v.fn.scrollTop,fa=v.fn.scrollLeft;v.fn.scrollTop=function(b){if(typeof b==="undefined"){var a=this[0];return r(a)&&
a._scrollTop?a._scrollTop():ea.apply(this,arguments)}this.each(function(){r(this)&&this._scrollTop?this._scrollTop(b):ea.call(v(this),b)});return this};v.fn.scrollLeft=function(b){if(typeof b==="undefined"){var a=this[0];return r(a)&&a._scrollLeft?a._scrollLeft():fa.apply(this,arguments)}this.each(function(){r(this)&&this._scrollLeft?this._scrollLeft(b):fa.call(v(this),b)});return this}}x.node=function(){return L.apply(this,arguments)};return x}(window,document,window.clik,window.Zepto,window.jQuery);

(function (window, document, picard) {
	var PAGE_CLASS                     = 'app-page',
		PAGE_NAME                      = 'data-page',
		APP_IOS                        = 'app-ios',
		APP_ANDROID                    = 'app-android',
		APP_LOADED                     = 'app-loaded',
		DEFAULT_TRANSITION_IOS         = 'slide-left',
		DEFAULT_TRANSITION_ANDROID     = 'implode-out',
		DEFAULT_TRANSITION_ANDROID_OLD = 'fade',
		REVERSE_TRANSITION             = {
			'fade'           : 'fade'           ,
			'scale-in'       : 'scale-out'      ,
			'scale-out'      : 'scale-in'       ,
			'rotate-left'    : 'rotate-right'   ,
			'rotate-right'   : 'rotate-left'    ,
			'cube-left'      : 'cube-right'     ,
			'cube-right'     : 'cube-left'      ,
			'swap-left'      : 'swap-right'     ,
			'swap-right'     : 'swap-left'      ,
			'explode-in'     : 'explode-out'    ,
			'explode-out'    : 'explode-in'     ,
			'implode-in'     : 'implode-out'    ,
			'implode-out'    : 'implode-in'     ,
			'slide-left'     : 'slide-right'    ,
			'slide-right'    : 'slide-left'     ,
			'slide-up'       : 'slide-down'     ,
			'slide-down'     : 'slide-up'       ,
			'slideon-left'   : 'slideoff-left'  ,
			'slideon-right'  : 'slideoff-right' ,
			'slideon-up'     : 'slideoff-up'    ,
			'slideon-down'   : 'slideoff-down'  ,
			'slideoff-left'  : 'slideon-left'   ,
			'slideoff-right' : 'slideon-right'  ,
			'slideoff-up'    : 'slideon-up'     ,
			'slideoff-down'  : 'slideon-down'
		};

	var App        = {},
		pages      = {},
		populators = {},
		stack      = [],
		navQueue   = [],
		navLock    = false,
		platform, version, defaultTransition, reverseTransition,
		current, currentNode;



	function init () {
		var pageNodes = document.getElementsByClassName(PAGE_CLASS),
			page, pageName, match;

		for (var i=pageNodes.length; i--;) {
			page     = pageNodes[i];
			pageName = page.getAttribute(PAGE_NAME);

			if ((typeof pageName === 'string') && (pageName.length !== 0)) {
				page.parentNode.removeChild(page);
				pages[pageName] = page.cloneNode(true);
			}
		}

		if (match = /\bCPU.*OS (\d+(_\d+)?)/i.exec(navigator.userAgent)) {
			platform = 'ios';
			version = parseFloat( match[1] );
			document.body.className += ' ' + APP_IOS;
			defaultTransition = DEFAULT_TRANSITION_IOS;
		}
		else if (match = /\bAndroid (\d+(\.\d+)?)/.exec(navigator.userAgent)) {
			platform = 'android';
			version = parseFloat( match[1] );
			document.body.className += ' ' + APP_ANDROID;
			defaultTransition = (version >= 4) ? DEFAULT_TRANSITION_ANDROID : DEFAULT_TRANSITION_ANDROID_OLD;
		}

		document.body.className += ' ' + APP_LOADED;
		reverseTransition = REVERSE_TRANSITION[defaultTransition];
	}



	function generatePage (pageName, args, pageManager) {
		if ( !(pageName in pages) ) {
			throw TypeError(pageName + ' is not a known page');
		}

		var page           = pages[pageName].cloneNode(true),
			pagePopulators = populators[pageName] || [];

		setContentHeight(page);

		Array.prototype.forEach.call(
			page.querySelectorAll('.app-button'),
			function (button) {
				Clickable(button);

				var target = button.getAttribute('data-target'),
					back   = button.getAttribute('data-back');

				if (back) {
					stickyButton(button, function (callback) {
						navigateBack({}, callback);
					});
				}
				else if (target) {
					stickyButton(button, function (callback) {
						loadPage(target, {}, {}, callback);
					});
				}
			}
		);

		pagePopulators.forEach(function (data) {
			var populator = data[0];
			populator.call(pageManager, page, args);
		});

		return page;
	}

	function finishPageGeneration (pageName, page, args, pageManager) {
		Array.prototype.forEach.call(
			page.querySelectorAll('.app-content'),
			function (content) {
				if ( !content.getAttribute('data-no-scroll') ) {
					Scrollable(content);
				}
			}
		);
	}

	function destroyPage (pageName, page, args, pageManager) {
		Array.prototype.forEach.call(
			page.querySelectorAll('*'),
			function (elem) {
				elem.style['-webkit-overflow-scrolling'] = '';
			}
		);
	}

	function finishPageDestruction (pageName, page, args, pageManager) {
		if ( !(pageName in pages) ) {
			throw TypeError(pageName + ' is not a known page');
		}

		var pagePopulators = populators[pageName] || [];

		pagePopulators.forEach(function (data) {
			var unpopulator = data[1];
			unpopulator.call(pageManager, page, args);
		});
	}

	function stickyButton (button, holdFunction) {
		button.addEventListener('click', function () {
			var lock        = false,
				activeClass = button.getAttribute('data-clickable-class') || 'active';
			button.disabled = true;
			button.className += ' ' + activeClass;

			try {
				holdFunction(cleanUp);
			}
			catch (err) {
				cleanUp();
			}

			function cleanUp () {
				if (lock) {
					return;
				}
				lock = true;

				button.disabled = false;
				button.className = button.className.replace(new RegExp('\\b'+activeClass+'\\b', 'g'), '');
			}
		}, false);
	}



	function loadPage (pageName, args, options, callback) {
		if (navLock) {
			navQueue.push(['load', pageName, args, options, callback]);
			return;
		}
		navLock = true;

		if ( !current ) {
			init();
		}

		var pageManager = {},
			page        = generatePage(pageName, args, pageManager);

		if ( !current ) {
			document.body.appendChild(page);
			setTimeout(finish, 0);
		}
		else {
			var newOptions = {};
			for (var key in options) {
				newOptions[key] = options[key];
			}
			performTransition(page, newOptions, finish);
		}

		current     = pageName;
		currentNode = page;
		stack.push([ pageName, page, options, args, pageManager ]);

		function finish () {
			finishPageGeneration(pageName, page, args, pageManager);
			navLock = false;
			setTimeout(processNavigationQueue, 0);
			callback();
		}
	}



	function navigateBack (options, callback) {
		if (navLock) {
			navQueue.push(['back', options, callback]);
			return;
		}

		if (stack.length < 2) {
			throw Error('navigation stack is empty');
		}

		navLock = true;

		var oldPage    = stack.pop(),
			data       = stack[stack.length - 1],
			pageName   = data[0],
			page       = data[1],
			oldOptions = oldPage[2];

		destroyPage(oldPage[0], oldPage[1], oldPage[3], oldPage[4]);

		var newOptions = {};
		for (var key in oldOptions) {
			newOptions[key] = oldOptions[key];
		}
		for (var key in options) {
			newOptions[key] = options[key];
		}

		performTransition(page, newOptions, function () {
			setTimeout(processNavigationQueue, 0);
			finishPageDestruction(oldPage[0], oldPage[1], oldPage[3], oldPage[4]);
			navLock = false;
			callback();
		}, true);

		current     = pageName;
		currentNode = page;
	}



	function processNavigationQueue () {
		if (navQueue.length === 0) {
			return;
		}

		var args = navQueue.shift(),
			cmd  = args.shift();

		switch (cmd) {
			case 'load':
				loadPage.apply(window, args);
				break;

			case 'back':
				navigateBack.apply(window, args);
				break;
		}
	}



	function performTransition (page, options, callback, reverse) {
		var clickBlocker = document.createElement('div');
		clickBlocker.className = 'app-clickblocker';
		document.body.appendChild(clickBlocker);

		function cleanup () {
			document.body.removeChild(clickBlocker);
			callback();
		}

		var oldPage = currentNode;

		if (options.transition) {
			if (reverse) {
				options.transition = REVERSE_TRANSITION[options.transition] || options.transition;
			}
			Swapper(oldPage, page, options, cleanup);
			return;
		}

		options.transition = reverse ? reverseTransition : defaultTransition;

		if ((platform !== 'ios') || ((options.transition !== 'slide-left') && (options.transition !== 'slide-right'))) {
			Swapper(oldPage, page, options, cleanup);
			return;
		}

		var currentBar     = oldPage.querySelector('.app-topbar'),
			currentContent = oldPage.querySelector('.app-content'),
			currentTitle   = oldPage.querySelector('.app-topbar .app-title'),
			currentLeft    = oldPage.querySelector('.app-topbar .left.app-button'),
			currentRight   = oldPage.querySelector('.app-topbar .right.app-button'),
			newBar         = page.querySelector('.app-topbar'),
			newContent     = page.querySelector('.app-content'),
			newTitle       = page.querySelector('.app-topbar .app-title'),
			newLeft        = page.querySelector('.app-topbar .left.app-button'),
			newRight       = page.querySelector('.app-topbar .right.app-button');

		if (!currentBar || !newBar || !currentContent || !newContent) {
			Swapper(oldPage, page, options, cleanup);
			return;
		}

		var count = 4;

		function swapperDone () {
			if (--count) {
				return;
			}

			titleClean();
			leftClean();
			rightClean();

			oldPage.appendChild(currentContent);
			page.appendChild(newContent);
			Swapper(oldPage, page, 'instant');

			cleanup();
		}

		var titleClean = fadeInPlace(currentBar , newBar , currentTitle , newTitle , options , swapperDone),
			leftClean  = fadeInPlace(currentBar , newBar , currentLeft  , newLeft  , options , swapperDone),
			rightClean = fadeInPlace(currentBar , newBar , currentRight , newRight , options , swapperDone);

		Swapper(currentContent, newContent, options, swapperDone);
	}

	function fadeInPlace (oldBar, newBar, oldElem, newElem, options, callback) {
		var cleanup = function () {};

		if (oldElem && newElem) {
			Swapper(oldElem, newElem, {
				easing     : options.easing   ,
				duration   : options.duration ,
				transition : 'fade'
			}, callback);
			cleanup = function () {
				oldBar.appendChild(oldElem);
				newBar.appendChild(newElem);
			};
		}

		else if (oldElem) {
			var elem = document.createElement('div');
			elem.className = oldElem.className;
			elem.innerHTML = oldElem.innerHTML;
			elem.style.visibility = 'hidden';

			Swapper(oldElem, elem, {
				easing     : options.easing   ,
				duration   : options.duration ,
				transition : 'fade'
			}, callback);
			cleanup = function () {
				oldBar.removeChild(elem);
				oldBar.appendChild(oldElem);
			};
		}

		else if (newElem) {
			var elem = document.createElement('div');
			elem.className = newElem.className;
			elem.innerHTML = newElem.innerHTML;
			elem.style.visibility = 'hidden';
			oldBar.appendChild(elem);

			Swapper(elem, newElem, {
				easing     : options.easing   ,
				duration   : options.duration ,
				transition : 'fade'
			}, callback);
			cleanup = function () {
				newBar.appendChild(newElem);
			};
		}

		else {
			setTimeout(callback, 0);
		}

		return cleanup;
	}



	function addPopulator (pageName, populator, unpopulator) {
		if ( !populators[pageName] ) {
			populators[pageName] = [];
		}

		populators[pageName].push([populator, unpopulator]);
	}



	function setContentHeight (page) {
		var topbar  = page.querySelector('.app-topbar'),
			content = page.querySelector('.app-content');

		if ( !content ) {
			return;
		}

		var height = window.innerHeight;

		if ( !topbar ) {
			content.style.height = height + 'px';
			return;
		}

		var topbarStyles = document.defaultView.getComputedStyle(topbar, null),
			topbarHeight = (platform === 'android') ? 48 : 44;

		if (topbarStyles.height) {
			topbarHeight = parseInt(topbarStyles.height) || 0;
		}

		content.style.height = (height - topbarHeight) + 'px';
	}

	function setupListeners () {
		window.addEventListener('resize', function () {
			currentNode && setContentHeight(currentNode);
		});

		if (picard && picard.browser.back) {
			picard.browser.back(function () {
				if (stack.length > 1) {
					App.back();
					return false;
				}
			});
		}
	}



	App.current = function () {
		return current;
	};



	App.populator = function (pageName, populator, unpopulator) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}

		if (typeof populator !== 'function') {
			throw TypeError('page populator must be a function, got ' + populator);
		}

		switch (typeof unpopulator) {
			case 'undefined':
				unpopulator = function () {};
				break;

			case 'function':
				break;

			default:
				throw TypeError('page unpopulator must be a function, got ' + unpopulator);
		}

		addPopulator(pageName, populator, unpopulator);
	};



	App.load = function (pageName, args, options, callback) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}

		switch (typeof args) {
			case 'function':
				callback = args;
				args     = {};
				options  = {};
				break;

			case 'undefined':
				args = {};
				break;

			case 'string':
				options = args;
				args    = {};
				break;

			case 'object':
				break;

			default:
				throw TypeError('page arguments must be an object if defined, got ' + args);
		}

		switch (typeof options) {
			case 'function':
				callback = options;
				options  = {};
				break;

			case 'undefined':
				options = {};
				break;

			case 'string':
				options = { transition : options };
				break;

			case 'object':
				break;

			default:
				throw TypeError('options must be an object if defined, got ' + options);
		}

		switch (typeof callback) {
			case 'undefined':
				callback = function () {};
				break;

			case 'function':
				break;

			default:
				throw TypeError('callback must be a function if defined, got ' + callback);
		}

		loadPage(pageName, args, options, callback);
	};



	App.back = function (options, callback) {
		switch (typeof options) {
			case 'function':
				callback = options;
				options  = {};
				break;

			case 'undefined':
				options  = {};
				break;

			case 'object':
				break;

			default:
				throw TypeError('options must be an object if defined, got ' + options);
		}

		switch (typeof callback) {
			case 'undefined':
				callback = function () {};
				break;

			case 'function':
				break;

			default:
				throw TypeError('callback must be a function if defined, got ' + callback);
		}

		navigateBack(options, callback);
	};



	setupListeners();

	window.App = App;
})(window, document, window.picard);
