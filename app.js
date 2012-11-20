var ImageLoader=function(p,k,f,h){function l(a,b){a.style["-webkit-transition"]=b;a.style["-moz-transition"]=b;a.style["-ms-transition"]=b;a.style["-o-transition"]=b;a.style.transition=b}function i(a,b,d,e){function f(){h||(h=!0,m[b]=!0,a.src=b,a.style.opacity="1",setTimeout(function(){l(a,"");setTimeout(function(){a.style.opacity=g.opacity;a.style["-webkit-transition"]=g["-webkit-transition"];a.style["-moz-transition"]=g["-moz-transition"];a.style["-ms-transition"]=g["-ms-transition"];a.style["-o-transition"]=
g["-o-transition"];a.style.transition=g.transition;e()},0)},n),k.body.removeChild(c))}var j;a:if(a){try{j=a instanceof Node||a instanceof HTMLElement;break a}catch(i){}j="object"!==typeof a||"number"!==typeof a.nodeType||"string"!==typeof a.nodeName?!1:!0}else j=!1;if(!j)throw TypeError("image must be a DOM element, got "+a);if("string"!==typeof b)throw TypeError("url must be a string, got "+b);switch(typeof d){case "function":e=d;case "undefined":d=0;case "number":break;default:throw TypeError("minimum wait time must be a number if deinfed, got "+
d);}switch(typeof e){case "undefined":e=function(){};case "function":break;default:throw TypeError("callback must be a function if defined, got "+e);}if(!0===m[b])a.src=b;else{var h=!1,o=+new Date+(d||0),g={opacity:a.style.opacity,"-webkit-transition":a.style["-webkit-transition"],"-moz-transition":a.style["-moz-transition"],"-ms-transition":a.style["-ms-transition"],"-o-transition":a.style["-o-transition"],transition:a.style.transition};a.style.opacity="0";setTimeout(function(){l(a,"opacity "+n/
1E3+"s ease-in-out")},0);var c=new Image;c.style.opacity="0";c.style.position="fixed";c.style.top="-100%";c.style.left="-100%";c.style.height="1px";c.style.width="1px";k.body.appendChild(c);c.onload=function(){var a=+new Date;a>=o?f():setTimeout(f,o-a)};c.onerror=c.onload;c.src=b}}var n=300,m={};f&&f.extend(f.fn,{imageLoader:function(a,b,d){this.forEach(function(e){i(e,a,b,d)});return this}});h&&(h.fn.imageLoader=function(a,b,d){this.each(function(){i(this,a,b,d)});return this});return i}(window,
document,window.Zepto,window.jQuery);

var Swapper=function(l,p,q,m){var a="translate3d(0,0,0) scale(1)";var n=false,j;if((j=/\bCPU.*OS (\d+(_\d+)?)/i.exec(navigator.userAgent))&&(Math.floor(parseFloat(j[1]))===5)){n=true}var u={fade:[{fade:true},{fade:true}],"fade-on":[{fade:true},{}],"fade-off":[{},{fade:true},true],"scale-in":[{transform:"scale(0.01)"},{}],"scale-out":[{},{transform:"scale(0.01)"},true],"rotate-left":[{transform:"rotateY(-180deg) perspective(360px)",fade:true},{transform:"rotateY( 180deg) perspective(360px)",fade:true}],"rotate-right":[{transform:"rotateY( 180deg) perspective(360px)",fade:true},{transform:"rotateY(-180deg) perspective(360px)",fade:true}],"cube-left":[{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"}],"cube-right":[{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-left":[{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-right":[{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"}],"explode-in":[{fade:true,transform:"scale(1.25)"},{}],"explode-out":[{},{fade:true,transform:"scale(1.25)"},true],"implode-in":[{},{fade:true,transform:"scale(0.60)"},true],"implode-out":[{fade:true,transform:"scale(0.80)"},{}],"slide-left":[{transform:"translate3d( 100%,0,0)"},{transform:"translate3d(-100%,0,0)"}],"slide-right":[{transform:"translate3d(-100%,0,0)"},{transform:"translate3d( 100%,0,0)"}],"slide-up":[{transform:"translate3d(0, 100%,0)"},{transform:"translate3d(0,-100%,0)"}],"slide-down":[{transform:"translate3d(0,-100%,0)"},{transform:"translate3d(0, 100%,0)"}],"slideon-left":[{transform:"translate3d(-100%,0,0)"},{}],"slideoff-left":[{},{transform:"translate3d(-100%,0,0)"},true],"slideon-right":[{transform:"translate3d(100%,0,0)"},{}],"slideoff-right":[{},{transform:"translate3d(100%,0,0)"},true],"slideon-up":[{transform:"translate3d(0,-100%,0)"},{}],"slideoff-up":[{},{transform:"translate3d(0,-100%,0)"},true],"slideon-down":[{transform:"translate3d(0,100%,0)"},{}],"slideoff-down":[{},{transform:"translate3d(0,100%,0)"},true]},k={linear:"linear",ease:"ease","ease-in":"ease-in","ease-out":"ease-out","ease-in-out":"ease-in-out","step-start":"step-start","step-end":"step-end"};function r(w){if(!w){return false}try{return(w instanceof Node)||(w instanceof HTMLElement)}catch(v){}if(typeof w!=="object"){return false}if(typeof w.nodeType!=="number"){return false}if(typeof w.nodeName!=="string"){return false}return true}function d(w,v){if(!v&&!r(w)){throw TypeError("element must be a DOM node, got "+w)}while(w=w.parentNode){if(w===p){return true}}return false}function c(v,w){w.parentNode.insertBefore(v,w)}function t(v,x){var w=x.parentNode;if(w.lastchild===x){w.appendChild(v)}else{w.insertBefore(v,x.nextSibling)}}function s(v){if(v.parentNode){v.parentNode.removeChild(v)}}function e(w,v){w.style["-webkit-transform"]=v;w.style["-moz-transform"]=v;w.style["-ms-transform"]=v;w.style["-o-transform"]=v;w.style.transform=v}function g(v,w){if(w){v.style["-webkit-transition"]="-webkit-"+w;v.style["-moz-transition"]="-moz-"+w;v.style["-ms-transition"]="-ms-"+w;v.style["-o-transition"]="-o-"+w;v.style.transition=w}else{v.style["-webkit-transition"]="";v.style["-moz-transition"]="";v.style["-ms-transition"]="";v.style["-o-transition"]="";v.style.transition=""}}function h(w,x){var v;if(x){v=w.style}else{v=p.defaultView.getComputedStyle(w,null)}return{display:v.display,opacity:v.opacity,top:v.top,left:v.left,height:v.height,width:v.width,position:v.position}}function b(v){if(!r(v)){throw TypeError("element must be a DOM node, got "+v)}}function f(v){switch(typeof v){case"string":v={transition:v};break;case"undefined":v={};break;case"object":break;default:throw TypeError("options must be an object if defined, got "+v)}switch(typeof v.transition){case"string":if(!(v.transition in u)&&(v.transition!=="instant")){throw TypeError(v.transition+" is not a valid transition")}break;case"undefined":break;default:throw TypeError("transition must be a string if defined, got "+v.transition)}switch(typeof v.duration){case"number":if(v.duration<0){throw TypeError("duration must be a non-negative integer, got "+v.duration)}break;case"undefined":break;default:throw TypeError("duration must be a number if defined, got "+v.duration)}switch(typeof v.easing){case"string":if(!(v.easing in k)){throw TypeError(v.easing+" is not a valid easing")}break;case"undefined":break;default:throw TypeError("easing must be a string if defined, got "+v.easing)}return v}function i(v){switch(typeof v){case"undefined":v=function(){};break;case"function":break;default:throw TypeError("callback must be a function if defined, got "+v)}return v}function o(D,B,y,z){b(D);b(B);if(typeof y==="function"){z=y;y={}}y=f(y);z=i(z);if(D._swapper){throw Error("elem1 is currently being swapped")}if(B._swapper){throw Error("elem2 is currently being swapped")}if(!d(D,true)){throw Error("elem1 must be in the DOM to be swapped")}D._swapper=true;B._swapper=true;s(B);if(y.transition==="instant"){t(B,D);s(D);D._swapper=false;B._swapper=false;setTimeout(function(){z()},0);return}var M=u[y.transition||"fade"],K=k[y.easing||"ease-in-out"],v=y.duration||300;t(B,D);var C=D.getBoundingClientRect(),I=h(D),F=h(B),J=h(D,true),H=h(B,true);if(I.display!=="none"){if(n){B.style.position="absolute"}else{B.style.position="fixed"}B.style.top=C.top+"px";B.style.left=C.left+"px"}B.style.height=F.height||I.height;B.style.width=F.width||I.width;if(M[2]){c(B,D)}e(D,a);e(B,M[0].transform||a);if(M[0].fade){B.style.opacity="0"}if(M[1].fade){D.style.opacity="1"}setTimeout(function(){var N="transform "+(v/1000)+"s "+K+", opacity "+(v/1000)+"s "+K;g(D,N);g(B,N);setTimeout(function(){e(D,M[1].transform||a);e(B,a);if(M[0].fade){B.style.opacity="1"}if(M[1].fade){D.style.opacity="0"}if((F.display!=="none")&&(M[0].fade||(M[0].transform&&M[0].transform!==a))){G=B;x()}else{if((I.display!=="none")&&(M[1].fade||(M[1].transform&&M[1].transform!==a))){G=D;x()}else{setTimeout(w,v)}}},0)},0);var A=false,G;function x(){G.addEventListener("webkitTransitionEnd",w,false);G.addEventListener("transitionend",w,false);G.addEventListener("oTransitionEnd",w,false);G.addEventListener("otransitionend",w,false);G.addEventListener("MSTransitionEnd",w,false);G.addEventListener("transitionend",w,false)}function E(){G.removeEventListener("webkitTransitionEnd",w);G.removeEventListener("transitionend",w);G.removeEventListener("oTransitionEnd",w);G.removeEventListener("otransitionend",w);G.removeEventListener("MSTransitionEnd",w);G.removeEventListener("transitionend",w)}function L(){x()}function w(){if(A){return}A=true;if(G){E()}s(D);g(D,"");g(B,"");setTimeout(function(){e(D,"");e(B,"");if(M[0].fade){B.style.opacity=H.opacity}if(M[1].fade){D.style.opacity=J.opacity}B.style.position=H.position;B.style.top=H.top;B.style.left=H.left;B.style.height=H.height;B.style.width=H.width;D._swapper=false;B._swapper=false;z()},0)}}if(q){q.extend(q.fn,{swapper:function(v,w,x){v=q(v)[0];this.forEach(function(y){o(y,v,w,x)});return this}})}if(m){m.fn.swapper=function(v,w,x){v=m(v)[0];this.each(function(){o(this,v,w,x)});return this}}return o}(window,document,window.Zepto,window.jQuery);

var Clickable=function(f,k,r,l,i){var a=/^\s+|\s+$/g,n=40;var o=false,e=j();function j(){var w=f.navigator.userAgent,v,u,t;if((t=/\bCPU.*OS (\d+(_\d+)?)/i.exec(w))){v="ios";u=t[1].replace("_",".")}else{if((t=/\bAndroid (\d+(\.\d+)?)/.exec(w))){v="android";u=t[1]}}var x={name:v,version:u&&f.parseFloat(u)};x[v]=true;return x}function m(t){return String(t).replace(a,"")}function s(u){if(!u){return false}try{return(u instanceof Node)||(u instanceof HTMLElement)}catch(t){}if(typeof u!=="object"){return false}if(typeof u.nodeType!=="number"){return false}if(typeof u.nodeName!=="string"){return false}return true}function b(t){while(t=t.parentNode){if(t===k){return true}}return false}function q(){return e.ios||e.android}function d(K,L){if(!s(K)){throw TypeError("element "+K+" must be a DOM element")}if(K._clickable){return}K._clickable=true;switch(typeof L){case"undefined":L="active";case"string":break;default:throw TypeError("active class "+L+" must be a string")}K.setAttribute("data-clickable-class",L);var I=new RegExp("\\b"+L+"\\b"),G=false,t=false,J;if(!q()){if(K.addEventListener){K.addEventListener("mousedown",E,false);K.addEventListener("mousemove",F,false);K.addEventListener("mouseout",F,false);K.addEventListener("mouseup",C,false);K.addEventListener("click",A,false)}else{if(K.attachEvent){K.attachEvent("onmousedown",E);K.attachEvent("onmousemove",F);K.attachEvent("onmouseout",F);K.attachEvent("onmouseup",C);K.attachEvent("onclick",A)}}return}K.style["-webkit-tap-highlight-color"]="rgba(255,255,255,0)";K.addEventListener("click",A,false);if(e.ios){K.addEventListener("DOMNodeInsertedIntoDocument",M,false);K.addEventListener("DOMNodeRemovedFromDocument",B,false);if(b(K)){M()}}else{M()}function M(){K.addEventListener("touchstart",y,false);K.addEventListener("touchmove",D,false);K.addEventListener("touchend",x,false);K.addEventListener("touchcancel",D,false)}function B(){K.removeEventListener("touchstart",y);K.removeEventListener("touchmove",D);K.removeEventListener("touchend",x);K.removeEventListener("touchcancel",D)}function w(){K.className+=" "+L}function u(){K.className=m(K.className.replace(I,""))}function H(){o=true}function z(){if(o){setTimeout(function(){o=true},50)}}function v(O,N){do{if(O===N){return true}else{if(O._clickable){return false}}}while(O=O.parentNode);return false}function E(N){t=false;if(K.disabled||!v(N.target,K)){N.preventDefault();G=false;return}G=true;w()}function F(N){N.preventDefault();G=false;t=false;u()}function C(N){if(K.disabled){N.preventDefault();G=false;t=false;return}if(!G){N.preventDefault();t=false}else{t=true}G=false;u()}function y(N){t=false;if(o||K.disabled||(N.touches.length!==1)||!v(N.target,K)){G=false;return}o=true;G=true;J=+new Date();var O=J;setTimeout(function(){if(G&&(O===J)){w()}},n)}function D(N){t=false;G=false;if(N){o=false}if(K.disabled){return}u()}function x(Q){var N=G;D();if(!N||K.disabled){o=false;return}if(!Q.stopImmediatePropagation){t=true;return}var P=+new Date()-J;if(P>n){O()}else{w();setTimeout(function(){u();O()},1)}function O(){t=true;var R=k.createEvent("MouseEvents");R.initMouseEvent("click",true,true,f,1,0,0,0,0,false,false,false,false,0,null);K.dispatchEvent(R)}}function A(N){N=N||f.event;if(!K.disabled&&t){t=false;setTimeout(function(){o=false},0);return}if(N.stopImmediatePropagation){N.stopImmediatePropagation()}N.preventDefault();N.stopPropagation();N.cancelBubble=true;N.returnValue=false;return false}}function h(){if(!r){return}r.plugin("clickable",function(){d.apply(this,arguments)})}function g(){if(!l){return}l.extend(l.fn,{clickable:function(t){this.forEach(function(u){d(u,t)});return this}})}function p(){if(!i){return}i.fn.clickable=function(t){this.each(function(){d(this,t)});return this}}function c(){h();g();p();function t(){d.apply(this,arguments)}t.touchable=function(){return q()};return t}return c()}(window,document,window.clik,window.Zepto,window.jQuery);

var Dialog=function(g,k,m){var e=k.querySelector("head"),q=[],n,b,r,c;if(match=/\bCPU.*OS (\d+(_\d+)?)/i.exec(navigator.userAgent)){r="ios";c=parseFloat(match[1])}else{if(match=/\bAndroid (\d+(\.\d+(\.\d+)?)?)/.exec(navigator.userAgent)){r="android";c=parseFloat(match[1])}}function h(s){s.preventDefault()}function a(t){var s=q.splice(0);setTimeout(function(){s.forEach(function(u){try{e.removeChild(u)}catch(v){}})},t||0)}function l(v){var s=k.createElement("div");s.style.margin="0 4%";s.style.padding="12px 0";s.style.border="1px solid #060607";s.style["-webkit-border-radius"]="3px";s.style["-moz-border-radius"]="3px";s.style["border-radius"]="3px";s.style["-webkit-box-sizing"]="border-box";s.style["-moz-box-sizing"]="border-box";s.style["box-sizing"]="border-box";s.style.color="#FFF";s.style.fontSize="18px";s.style.fontWeight="bold";s.style.lineHeight="20px";s.style.textShadow="0 -1px 0 #1C1C1C";s.style.textAlign="center";var u="color: #EEE !important;background-image: -webkit-gradient(linear, left top, left bottom, from(#15171D), to(#1D1E25)) !important;background-image: -webkit-linear-gradient(top, #15171D, #1D1E25) !important;background-image: -moz-linear-gradient(top, #15171D, #1D1E25) !important;background-image: -ms-linear-gradient(top, #15171D, #1D1E25) !important;background-image: -o-linear-gradient(top, #15171D, #1D1E25) !important;background-image: linear-gradient(top, #15171D, #1D1E25) !important;";if(r==="ios"){s.style.backgroundImage="-webkit-gradient(linear, left top, left bottom, from(#3D3E45), to(#191A22))";s.style.backgroundImage="-webkit-linear-gradient(top, #3D3E45, #191A22)";s.style.backgroundImage="-moz-linear-gradient(top, #3D3E45, #191A22)";s.style.backgroundImage="-ms-linear-gradient(top, #3D3E45, #191A22)";s.style.backgroundImage="-o-linear-gradient(top, #3D3E45, #191A22)";s.style.backgroundImage="linear-gradient(top, #3D3E45, #191A22)";s.style["-webkit-box-shadow"]="inset 0 1px 1px #5C5E63";s.style["-moz-box-shadow"]="inset 0 1px 1px #5C5E63";s.style["box-shadow"]="inset 0 1px 1px #5C5E63";s.style["-webkit-border-radius"]="6px";s.style["-moz-border-radius"]="6px";s.style["border-radius"]="6px";u+="-webkit-box-shadow: inset 0 1px 2px #070814 !important;-moz-box-shadow: inset 0 1px 2px #070814 !important;box-shadow: inset 0 1px 2px #070814 !important;"}else{s.style.backgroundImage="-webkit-gradient(linear, left top, left bottom, from(#3D3E45), to(#15171D))";s.style.backgroundImage="-webkit-linear-gradient(top, #3D3E45, #15171D)";s.style.backgroundImage="-moz-linear-gradient(top, #3D3E45, #15171D)";s.style.backgroundImage="-ms-linear-gradient(top, #3D3E45, #15171D)";s.style.backgroundImage="-o-linear-gradient(top, #3D3E45, #15171D)";s.style.backgroundImage="linear-gradient(top, #3D3E45, #15171D)"}s.id=("x"+Math.random()).replace(/\-|\./g,"");var t=k.createElement("link");t.rel="stylesheet";t.href="data:text/css,#"+s.id+".active{"+u+"}";e.appendChild(t);q.push(t);m&&m(s);s.addEventListener("click",v,false);return s}function i(B,z){var w=k.createElement("div");w.style.position="fixed";w.style.zIndex="5000";w.style.top="0";w.style.left="0";w.style.margin="0";w.style.padding="0";w.style.height="100%";w.style.width="100%";w.style.background="rgba(0,0,0, 0.8)";w.style.overflow="hidden";if((r==="ios")&&(c<=5)){w.style.position="absolute"}if((r!=="android")||(c>=4)){w.addEventListener("touchstart",h,false)}var v=k.createElement("div");v.style.position="absolute";v.style.bottom="0";v.style.left="0";v.style.margin="0";v.style.padding="0";v.style.width="100%";v.style.background="#000";v.style.borderTop="1px solid rgba(124,125,127, 0.2)";v.style["-webkit-box-shadow"]="0 -1px 3px rgba(0,0,0, 0.5)";v.style["-moz-box-shadow"]="0 -1px 3px rgba(0,0,0, 0.5)";v.style["box-shadow"]="0 -1px 3px rgba(0,0,0, 0.5)";v.style.color="#FFF";if(r==="android"){v.style.fontFamily='"Roboto", sans-serif'}else{v.style.fontFamily='"Helvetica Neue", Helvetica, Arial, sans-serif'}w.appendChild(v);if(B.title){var y=k.createElement("div");y.textContent=B.title;y.style.position="relative";y.style.padding="12px 8px";y.style.margin="0";y.style.background="rgba(26,27,31, 0.97)";y.style.borderBottom="1px solid rgba(18,18,21, 0.97)";y.style["-webkit-box-shadow"]="0 1px 0 rgba(49,50,55, 0.97)";y.style["-moz-box-shadow"]="0 1px 0 rgba(49,50,55, 0.97)";y.style["box-shadow"]="0 1px 0 rgba(49,50,55, 0.97)";y.style.fontSize="17px";y.style.fontWeight="bold";y.style.lineHeight="18px";y.style.textAlign="center";v.appendChild(y)}if(B.text){var A=k.createElement("div");A.textContent=B.text;A.style.padding="12px 32px 0";A.style.margin="0";A.style.backgroundImage="-webkit-gradient(linear, left top, left bottom, from(rgba(27,29,34, 0.97)), to(rgba(24,26,31, 0.97)))";A.style.backgroundImage="-webkit-linear-gradient(top, rgba(27,29,34, 0.97), rgba(24,26,31, 0.97))";A.style.backgroundImage="-moz-linear-gradient(top, rgba(27,29,34, 0.97), rgba(24,26,31, 0.97))";A.style.backgroundImage="-ms-linear-gradient(top, rgba(27,29,34, 0.97), rgba(24,26,31, 0.97))";A.style.backgroundImage="-o-linear-gradient(top, rgba(27,29,34, 0.97), rgba(24,26,31, 0.97))";A.style.backgroundImage="linear-gradient(top, rgba(27,29,34, 0.97), rgba(24,26,31, 0.97))";A.style.color="#A6A7A9";A.style.fontSize="16px";A.style.lineHeight="17px";A.style.textAlign="center";v.appendChild(A)}if(B.success||B.cancel){var x=k.createElement("div");x.style.padding="12px 0";x.style.margin="0";x.style.backgroundImage="-webkit-gradient(linear, left top, left bottom, from(rgba(24,26,31, 0.97)), to(rgba(20,22,28, 0.97)))";x.style.backgroundImage="-webkit-linear-gradient(top, rgba(24,26,31, 0.97), rgba(20,22,28, 0.97))";x.style.backgroundImage="-moz-linear-gradient(top, rgba(24,26,31, 0.97), rgba(20,22,28, 0.97))";x.style.backgroundImage="-ms-linear-gradient(top, rgba(24,26,31, 0.97), rgba(20,22,28, 0.97))";x.style.backgroundImage="-o-linear-gradient(top, rgba(24,26,31, 0.97), rgba(20,22,28, 0.97))";x.style.backgroundImage="linear-gradient(top, rgba(24,26,31, 0.97), rgba(20,22,28, 0.97))";v.appendChild(x);if(B.success){var t=l(function(){z(true)});t.textContent=B.success||"Ok"}if(B.cancel){var s=l(function(){z(false)});s.textContent=B.cancel||"Cancel"}if(B.success&&B.cancel){t.style.width="44%";t.style["float"]="right";t.style.marginLeft="0";s.style.width="44%";s.style["float"]="left";s.style.marginRight="0"}if(B.cancel){x.appendChild(s)}if(B.success){x.appendChild(t)}var u=k.createElement("div");u.style.margin="0";u.style.padding="0";u.style.clear="both";x.appendChild(u)}return w}function j(u,y,w){if(!w&&b){b.push([u,y]);return}b=b||[];var x=false;var v=i(u,t);function t(z){if(x){return}x=true;n=null;if(r==="ios"){v.style.background="rgba(0,0,0, 0)";s.style["-webkit-transform"]="translate3d(0,100%,0)";s.style["-moz-transform"]="translate3d(0,100%,0)";s.style["-ms-transform"]="translate3d(0,100%,0)";s.style["-o-transform"]="translate3d(0,100%,0)";s.style.transform="translate3d(0,100%,0)"}else{v.style.opacity="0"}a(600);setTimeout(function(){p();y(z)},0);setTimeout(function(){try{k.body.removeChild(v)}catch(A){}},600)}n=t;var s=v.firstChild;if(r==="ios"){v.style.background="rgba(0,0,0, 0)";s.style["-webkit-transform"]="translate3d(0,100%,0)";s.style["-moz-transform"]="translate3d(0,100%,0)";s.style["-ms-transform"]="translate3d(0,100%,0)";s.style["-o-transform"]="translate3d(0,100%,0)";s.style.transform="translate3d(0,100%,0)"}else{v.style.opacity="0"}k.body.appendChild(v);setTimeout(function(){if(r==="ios"){v.style["-webkit-transition"]="background 0.2s ease-in-out";v.style["-moz-transition"]="background 0.2s ease-in-out";v.style["-ms-transition"]="background 0.2s ease-in-out";v.style["-o-transition"]="background 0.2s ease-in-out";v.style.transition="background 0.2s ease-in-out";s.style["-webkit-transition"]="-webkit-transform 0.2s ease-in-out";s.style["-moz-transition"]="-moz-transform 0.2s ease-in-out";s.style["-ms-transition"]="-ms-transform 0.2s ease-in-out";s.style["-o-transition"]="-o-transform 0.2s ease-in-out";s.style.transition="transform 0.2s ease-in-out"}else{v.style["-webkit-transition"]="opacity 0.2s ease-in-out";v.style["-moz-transition"]="opacity 0.2s ease-in-out";v.style["-ms-transition"]="opacity 0.2s ease-in-out";v.style["-o-transition"]="opacity 0.2s ease-in-out";v.style.transition="opacity 0.2s ease-in-out"}setTimeout(function(){if(r==="ios"){v.style.background="rgba(0,0,0, 0.8)";setTimeout(function(){s.style["-webkit-transform"]="translate3d(0,0,0)";s.style["-moz-transform"]="translate3d(0,0,0)";s.style["-ms-transform"]="translate3d(0,0,0)";s.style["-o-transform"]="translate3d(0,0,0)";s.style.transform="translate3d(0,0,0)"},50)}else{v.style.opacity="1"}},10)},0)}function o(){if(n){n(false)}}function f(){return !!n}function p(){if(!b){return}if(!b.length){b=null;return}var s=b.shift();s.push(true);j.apply(g,s)}function d(s,t){switch(typeof s){case"string":s={text:s};break;case"object":break;default:throw TypeError("dialog options must be an object, got "+s)}switch(typeof s.title){case"string":break;case"undefined":s.title="";break;default:throw TypeError("dialog title must a string if defined, got "+s.title)}if(typeof s.text!=="string"){throw TypeError("dialog text must a string, got "+s.text)}switch(typeof s.success){case"string":break;case"undefined":s.success="Ok";break;default:throw TypeError("success button must a string if defined, got "+s.success)}switch(typeof s.cancel){case"string":break;case"undefined":s.cancel="";break;default:throw TypeError("cancel button must a string if defined, got "+s.cancel)}switch(typeof t){case"undefined":t=function(){};break;case"function":break;default:throw TypeError("callback must be a function if defined, got "+t)}return j(s,t)}d.close=function(){o()};d.status=function(){return f()};return d}(window,document,window.Clickable);

var iScroll=function(an,Z){function ah(f){if(""===am){return f}f=f.charAt(0).toUpperCase()+f.substr(1);return am+f}var ao=Math,P=Z.createElement("div").style,am;a:{for(var aj=["t","webkitT","MozT","msT","OT"],Y,X=0,k=aj.length;X<k;X++){if(Y=aj[X]+"ransform",Y in P){am=aj[X].substr(0,aj[X].length-1);break a}}am=!1}var ak=am?"-"+am.toLowerCase()+"-":"",ai=ah("transform"),g=ah("transitionProperty"),ad=ah("transitionDuration"),e=ah("transformOrigin"),d=ah("transitionTimingFunction"),i=ah("transitionDelay"),ag=/android/gi.test(navigator.appVersion),W=/iphone|ipad/gi.test(navigator.appVersion),aj=/hp-tablet/gi.test(navigator.appVersion),V=ah("perspective") in P,al="ontouchstart" in an&&!aj,T=!!am,c=ah("transition") in P,af="onorientationchange" in an?"orientationchange":"resize",ac=al?"touchstart":"mousedown",U=al?"touchmove":"mousemove",S=al?"touchend":"mouseup",R=al?"touchcancel":"mouseup",ab="Moz"==am?"DOMMouseScroll":"mousewheel",aa;aa=!1===am?!1:{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"oTransitionEnd",ms:"MSTransitionEnd"}[am];var b=an.requestAnimationFrame||an.webkitRequestAnimationFrame||an.mozRequestAnimationFrame||an.oRequestAnimationFrame||an.msRequestAnimationFrame||function(f){return setTimeout(f,1)},Q=an.cancelRequestAnimationFrame||an.webkitCancelAnimationFrame||an.webkitCancelRequestAnimationFrame||an.mozCancelRequestAnimationFrame||an.oCancelRequestAnimationFrame||an.msCancelRequestAnimationFrame||clearTimeout,ae=V?" translateZ(0)":"",aj=function(f,h){var l=this,j;l.wrapper="object"==typeof f?f:Z.getElementById(f);l.wrapper.style.overflow="hidden";l.scroller=l.wrapper.children[0];l.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:ag,hideScrollbar:W,fadeScrollbar:W&&V,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(m){m.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(j in h){l.options[j]=h[j]}l.x=l.options.x;l.y=l.options.y;l.options.useTransform=T&&l.options.useTransform;l.options.hScrollbar=l.options.hScroll&&l.options.hScrollbar;l.options.vScrollbar=l.options.vScroll&&l.options.vScrollbar;l.options.zoom=l.options.useTransform&&l.options.zoom;l.options.useTransition=c&&l.options.useTransition;l.options.zoom&&ag&&(ae="");l.scroller.style[g]=l.options.useTransform?ak+"transform":"top left";l.scroller.style[ad]="0";l.scroller.style[e]="0 0";l.options.useTransition&&(l.scroller.style[d]="cubic-bezier(0.33,0.66,0.66,1)");l.options.useTransform?l.scroller.style[ai]="translate("+l.x+"px,"+l.y+"px)"+ae:l.scroller.style.cssText+=";position:absolute;top:"+l.y+"px;left:"+l.x+"px";l.options.useTransition&&(l.options.fixedScrollbar=!0);l.refresh();l._bind(af,an);l._bind(ac);al||(l._bind("mouseout",l.wrapper),"none"!=l.options.wheelAction&&l._bind(ab));l.options.checkDOMChanges&&(l.checkDOMTime=setInterval(function(){l._checkDOMChanges()},500))};aj.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(f){switch(f.type){case ac:if(!al&&0!==f.button){break}this._start(f);break;case U:this._move(f);break;case S:case R:this._end(f);break;case af:this._resize();break;case ab:this._wheel(f);break;case"mouseout":this._mouseout(f);break;case aa:this._transitionEnd(f)}},_checkDOMChanges:function(){!this.moved&&(!this.zoomed&&!(this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale))&&this.refresh()},_scrollbar:function(f){var h;this[f+"Scrollbar"]?(this[f+"ScrollbarWrapper"]||(h=Z.createElement("div"),this.options.scrollbarClass?h.className=this.options.scrollbarClass+f.toUpperCase():h.style.cssText="position:absolute;z-index:100;"+("h"==f?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?"7":"2")+"px;top:2px;right:1px"),h.style.cssText+=";pointer-events:none;"+ak+"transition-property:opacity;"+ak+"transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(h),this[f+"ScrollbarWrapper"]=h,h=Z.createElement("div"),this.options.scrollbarClass||(h.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+ak+"background-clip:padding-box;"+ak+"box-sizing:border-box;"+("h"==f?"height:100%":"width:100%")+";"+ak+"border-radius:3px;border-radius:3px"),h.style.cssText+=";pointer-events:none;"+ak+"transition-property:"+ak+"transform;"+ak+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+ak+"transition-duration:0;"+ak+"transform: translate(0,0)"+ae,this.options.useTransition&&(h.style.cssText+=";"+ak+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[f+"ScrollbarWrapper"].appendChild(h),this[f+"ScrollbarIndicator"]=h),"h"==f?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,this.hScrollbarIndicatorSize=ao.max(ao.round(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=ao.max(ao.round(this.vScrollbarSize*this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(f,!0)):this[f+"ScrollbarWrapper"]&&(T&&(this[f+"ScrollbarIndicator"].style[ai]=""),this[f+"ScrollbarWrapper"].parentNode.removeChild(this[f+"ScrollbarWrapper"]),this[f+"ScrollbarWrapper"]=null,this[f+"ScrollbarIndicator"]=null)},_resize:function(){var f=this;setTimeout(function(){f.refresh()},ag?200:0)},_pos:function(f,h){this.zoomed||(f=this.hScroll?f:0,h=this.vScroll?h:0,this.options.useTransform?this.scroller.style[ai]="translate("+f+"px,"+h+"px) scale("+this.scale+")"+ae:(f=ao.round(f),h=ao.round(h),this.scroller.style.left=f+"px",this.scroller.style.top=h+"px"),this.x=f,this.y=h,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(f,h){var j="h"==f?this.x:this.y;this[f+"Scrollbar"]&&(j*=this[f+"ScrollbarProp"],0>j?(this.options.fixedScrollbar||(j=this[f+"ScrollbarIndicatorSize"]+ao.round(3*j),8>j&&(j=8),this[f+"ScrollbarIndicator"].style["h"==f?"width":"height"]=j+"px"),j=0):j>this[f+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?j=this[f+"ScrollbarMaxScroll"]:(j=this[f+"ScrollbarIndicatorSize"]-ao.round(3*(j-this[f+"ScrollbarMaxScroll"])),8>j&&(j=8),this[f+"ScrollbarIndicator"].style["h"==f?"width":"height"]=j+"px",j=this[f+"ScrollbarMaxScroll"]+(this[f+"ScrollbarIndicatorSize"]-j))),this[f+"ScrollbarWrapper"].style[i]="0",this[f+"ScrollbarWrapper"].style.opacity=h&&this.options.hideScrollbar?"0":"1",this[f+"ScrollbarIndicator"].style[ai]="translate("+("h"==f?j+"px,0)":"0,"+j+"px)")+ae)},_start:function(f){var h=al?f.touches[0]:f,l,j;if(this.enabled){this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,f);(this.options.useTransition||this.options.zoom)&&this._transitionTime(0);this.zoomed=this.animating=this.moved=!1;this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0;this.options.zoom&&(al&&1<f.touches.length)&&(j=ao.abs(f.touches[0].pageX-f.touches[1].pageX),l=ao.abs(f.touches[0].pageY-f.touches[1].pageY),this.touchesDistStart=ao.sqrt(j*j+l*l),this.originX=ao.abs(f.touches[0].pageX+f.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=ao.abs(f.touches[0].pageY+f.touches[1].pageY-2*this.wrapperOffsetTop)/2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,f));if(this.options.momentum&&(this.options.useTransform?(l=getComputedStyle(this.scroller,null)[ai].replace(/[^0-9\-.,]/g,"").split(","),j=1*l[4],l=1*l[5]):(j=1*getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),l=1*getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),j!=this.x||l!=this.y)){this.options.useTransition?this._unbind(aa):Q(this.aniTime),this.steps=[],this._pos(j,l)}this.absStartX=this.x;this.absStartY=this.y;this.startX=this.x;this.startY=this.y;this.pointX=h.pageX;this.pointY=h.pageY;this.startTime=f.timeStamp||Date.now();this.options.onScrollStart&&this.options.onScrollStart.call(this,f);this._bind(U);this._bind(S);this._bind(R)}},_move:function(f){var h=al?f.touches[0]:f,o=h.pageX-this.pointX,n=h.pageY-this.pointY,m=this.x+o,l=this.y+n,j=f.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,f);if(this.options.zoom&&al&&1<f.touches.length){m=ao.abs(f.touches[0].pageX-f.touches[1].pageX),l=ao.abs(f.touches[0].pageY-f.touches[1].pageY),this.touchesDist=ao.sqrt(m*m+l*l),this.zoomed=!0,h=1/this.touchesDistStart*this.touchesDist*this.scale,h<this.options.zoomMin?h=0.5*this.options.zoomMin*Math.pow(2,h/this.options.zoomMin):h>this.options.zoomMax&&(h=2*this.options.zoomMax*Math.pow(0.5,this.options.zoomMax/h)),this.lastScale=h/this.scale,m=this.originX-this.originX*this.lastScale+this.x,l=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[ai]="translate("+m+"px,"+l+"px) scale("+h+")"+ae,this.options.onZoom&&this.options.onZoom.call(this,f)}else{this.pointX=h.pageX;this.pointY=h.pageY;if(0<m||m<this.maxScrollX){m=this.options.bounce?this.x+o/2:0<=m||0<=this.maxScrollX?0:this.maxScrollX}if(l>this.minScrollY||l<this.maxScrollY){l=this.options.bounce?this.y+n/2:l>=this.minScrollY||0<=this.maxScrollY?this.minScrollY:this.maxScrollY}this.distX+=o;this.distY+=n;this.absDistX=ao.abs(this.distX);this.absDistY=ao.abs(this.distY);6>this.absDistX&&6>this.absDistY||(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(l=this.y,n=0):this.absDistY>this.absDistX+5&&(m=this.x,o=0)),this.moved=!0,this._pos(m,l),this.dirX=0<o?-1:0>o?1:0,this.dirY=0<n?-1:0>n?1:0,300<j-this.startTime&&(this.startTime=j,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,f))}},_end:function(s){if(!(al&&0!==s.touches.length)){var t=this,r=al?s.changedTouches[0]:s,q,p,o={dist:0,time:0},m={dist:0,time:0},n=(s.timeStamp||Date.now())-t.startTime,f=t.x,l=t.y;t._unbind(U);t._unbind(S);t._unbind(R);t.options.onBeforeScrollEnd&&t.options.onBeforeScrollEnd.call(t,s);if(t.zoomed){f=t.scale*t.lastScale,f=Math.max(t.options.zoomMin,f),f=Math.min(t.options.zoomMax,f),t.lastScale=f/t.scale,t.scale=f,t.x=t.originX-t.originX*t.lastScale+t.x,t.y=t.originY-t.originY*t.lastScale+t.y,t.scroller.style[ad]="200ms",t.scroller.style[ai]="translate("+t.x+"px,"+t.y+"px) scale("+t.scale+")"+ae,t.zoomed=!1,t.refresh(),t.options.onZoomEnd&&t.options.onZoomEnd.call(t,s)}else{if(t.moved){if(300>n&&t.options.momentum){o=f?t._momentum(f-t.startX,n,-t.x,t.scrollerW-t.wrapperW+t.x,t.options.bounce?t.wrapperW:0):o;m=l?t._momentum(l-t.startY,n,-t.y,0>t.maxScrollY?t.scrollerH-t.wrapperH+t.y-t.minScrollY:0,t.options.bounce?t.wrapperH:0):m;f=t.x+o.dist;l=t.y+m.dist;if(0<t.x&&0<f||t.x<t.maxScrollX&&f<t.maxScrollX){o={dist:0,time:0}}if(t.y>t.minScrollY&&l>t.minScrollY||t.y<t.maxScrollY&&l<t.maxScrollY){m={dist:0,time:0}}}o.dist||m.dist?(o=ao.max(ao.max(o.time,m.time),10),t.options.snap&&(m=f-t.absStartX,n=l-t.absStartY,ao.abs(m)<t.options.snapThreshold&&ao.abs(n)<t.options.snapThreshold?t.scrollTo(t.absStartX,t.absStartY,200):(m=t._snap(f,l),f=m.x,l=m.y,o=ao.max(m.time,o))),t.scrollTo(ao.round(f),ao.round(l),o)):t.options.snap?(m=f-t.absStartX,n=l-t.absStartY,ao.abs(m)<t.options.snapThreshold&&ao.abs(n)<t.options.snapThreshold?t.scrollTo(t.absStartX,t.absStartY,200):(m=t._snap(t.x,t.y),(m.x!=t.x||m.y!=t.y)&&t.scrollTo(m.x,m.y,m.time))):t._resetPos(200)}else{al&&(t.doubleTapTimer&&t.options.zoom?(clearTimeout(t.doubleTapTimer),t.doubleTapTimer=null,t.options.onZoomStart&&t.options.onZoomStart.call(t,s),t.zoom(t.pointX,t.pointY,1==t.scale?t.options.doubleTapZoom:1),t.options.onZoomEnd&&setTimeout(function(){t.options.onZoomEnd.call(t,s)},200)):this.options.handleClick&&(t.doubleTapTimer=setTimeout(function(){t.doubleTapTimer=null;for(q=r.target;1!=q.nodeType;){q=q.parentNode}"SELECT"!=q.tagName&&("INPUT"!=q.tagName&&"TEXTAREA"!=q.tagName)&&(p=Z.createEvent("MouseEvents"),p.initMouseEvent("click",!0,!0,s.view,1,r.screenX,r.screenY,r.clientX,r.clientY,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,0,null),p._fake=!0,q.dispatchEvent(p))},t.options.zoom?250:0))),t._resetPos(200)}t.options.onTouchEnd&&t.options.onTouchEnd.call(t,s)}}},_resetPos:function(f){var h=0<=this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,j=this.y>=this.minScrollY||0<this.maxScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;if(h==this.x&&j==this.y){if(this.moved&&(this.moved=!1,this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==am&&(this.hScrollbarWrapper.style[i]="300ms"),this.hScrollbarWrapper.style.opacity="0"),this.vScrollbar&&this.options.hideScrollbar){"webkit"==am&&(this.vScrollbarWrapper.style[i]="300ms"),this.vScrollbarWrapper.style.opacity="0"}}else{this.scrollTo(h,j,f||0)}},_wheel:function(f){var h=this,l,j;if("wheelDeltaX" in f){l=f.wheelDeltaX/12,j=f.wheelDeltaY/12}else{if("wheelDelta" in f){l=j=f.wheelDelta/12}else{if("detail" in f){l=j=3*-f.detail}else{return}}}if("zoom"==h.options.wheelAction){if(j=h.scale*Math.pow(2,1/3*(j?j/Math.abs(j):0)),j<h.options.zoomMin&&(j=h.options.zoomMin),j>h.options.zoomMax&&(j=h.options.zoomMax),j!=h.scale){!h.wheelZoomCount&&h.options.onZoomStart&&h.options.onZoomStart.call(h,f),h.wheelZoomCount++,h.zoom(f.pageX,f.pageY,j,400),setTimeout(function(){h.wheelZoomCount--;!h.wheelZoomCount&&h.options.onZoomEnd&&h.options.onZoomEnd.call(h,f)},400)}}else{l=h.x+l,j=h.y+j,0<l?l=0:l<h.maxScrollX&&(l=h.maxScrollX),j>h.minScrollY?j=h.minScrollY:j<h.maxScrollY&&(j=h.maxScrollY),0>h.maxScrollY&&h.scrollTo(l,j,0)}},_mouseout:function(f){var h=f.relatedTarget;if(h){for(;h=h.parentNode;){if(h==this.wrapper){return}}}this._end(f)},_transitionEnd:function(f){f.target==this.scroller&&(this._unbind(aa),this._startAni())},_startAni:function(){var f=this,h=f.x,o=f.y,n=Date.now(),m,l,j;f.animating||(f.steps.length?(m=f.steps.shift(),m.x==h&&m.y==o&&(m.time=0),f.animating=!0,f.moved=!0,f.options.useTransition)?(f._transitionTime(m.time),f._pos(m.x,m.y),f.animating=!1,m.time?f._bind(aa):f._resetPos(0)):(j=function(){var q=Date.now(),p;if(q>=n+m.time){f._pos(m.x,m.y);f.animating=false;f.options.onAnimationEnd&&f.options.onAnimationEnd.call(f);f._startAni()}else{q=(q-n)/m.time-1;l=ao.sqrt(1-q*q);q=(m.x-h)*l+h;p=(m.y-o)*l+o;f._pos(q,p);if(f.animating){f.aniTime=b(j)}}},j()):f._resetPos(400))},_transitionTime:function(f){f+="ms";this.scroller.style[ad]=f;this.hScrollbar&&(this.hScrollbarIndicator.style[ad]=f);this.vScrollbar&&(this.vScrollbarIndicator.style[ad]=f)},_momentum:function(f,h,n,m,l){var h=ao.abs(f)/h,j=h*h/0.0012;0<f&&j>n?(n+=l/(6/(0.0006*(j/h))),h=h*n/j,j=n):0>f&&j>m&&(m+=l/(6/(0.0006*(j/h))),h=h*m/j,j=m);return{dist:j*(0>f?-1:1),time:ao.round(h/0.0006)}},_offset:function(f){for(var h=-f.offsetLeft,j=-f.offsetTop;f=f.offsetParent;){h-=f.offsetLeft,j-=f.offsetTop}f!=this.wrapper&&(h*=this.scale,j*=this.scale);return{left:h,top:j}},_snap:function(f,h){var m,l,j;j=this.pagesX.length-1;m=0;for(l=this.pagesX.length;m<l;m++){if(f>=this.pagesX[m]){j=m;break}}j==this.currPageX&&(0<j&&0>this.dirX)&&j--;f=this.pagesX[j];l=(l=ao.abs(f-this.pagesX[this.currPageX]))?500*(ao.abs(this.x-f)/l):0;this.currPageX=j;j=this.pagesY.length-1;for(m=0;m<j;m++){if(h>=this.pagesY[m]){j=m;break}}j==this.currPageY&&(0<j&&0>this.dirY)&&j--;h=this.pagesY[j];m=(m=ao.abs(h-this.pagesY[this.currPageY]))?500*(ao.abs(this.y-h)/m):0;this.currPageY=j;j=ao.round(ao.max(l,m))||200;return{x:f,y:h,time:j}},_bind:function(f,h,j){(h||this.scroller).addEventListener(f,this,!!j)},_unbind:function(f,h,j){(h||this.scroller).removeEventListener(f,this,!!j)},destroy:function(){this.scroller.style[ai]="";this.vScrollbar=this.hScrollbar=!1;this._scrollbar("h");this._scrollbar("v");this._unbind(af,an);this._unbind(ac);this._unbind(U);this._unbind(S);this._unbind(R);this.options.hasTouch||(this._unbind("mouseout",this.wrapper),this._unbind(ab));this.options.useTransition&&this._unbind(aa);this.options.checkDOMChanges&&clearInterval(this.checkDOMTime);this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var f,h,l,j=0;h=0;this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin);this.wrapperW=this.wrapper.clientWidth||1;this.wrapperH=this.wrapper.clientHeight||1;this.minScrollY=-this.options.topOffset||0;this.scrollerW=ao.round(this.scroller.offsetWidth*this.scale);this.scrollerH=ao.round((this.scroller.offsetHeight+this.minScrollY)*this.scale);this.maxScrollX=this.wrapperW-this.scrollerW;this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY;this.dirY=this.dirX=0;this.options.onRefresh&&this.options.onRefresh.call(this);this.hScroll=this.options.hScroll&&0>this.maxScrollX;this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH);this.hScrollbar=this.hScroll&&this.options.hScrollbar;this.vScrollbar=this.vScroll&&this.options.vScrollbar&&this.scrollerH>this.wrapperH;f=this._offset(this.wrapper);this.wrapperOffsetLeft=-f.left;this.wrapperOffsetTop=-f.top;if("string"==typeof this.options.snap){this.pagesX=[];this.pagesY=[];l=this.scroller.querySelectorAll(this.options.snap);f=0;for(h=l.length;f<h;f++){j=this._offset(l[f]),j.left+=this.wrapperOffsetLeft,j.top+=this.wrapperOffsetTop,this.pagesX[f]=j.left<this.maxScrollX?this.maxScrollX:j.left*this.scale,this.pagesY[f]=j.top<this.maxScrollY?this.maxScrollY:j.top*this.scale}}else{if(this.options.snap){for(this.pagesX=[];j>=this.maxScrollX;){this.pagesX[h]=j,j-=this.wrapperW,h++}this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]);h=j=0;for(this.pagesY=[];j>=this.maxScrollY;){this.pagesY[h]=j,j-=this.wrapperH,h++}this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-1]+this.pagesY[this.pagesY.length-1])}}this._scrollbar("h");this._scrollbar("v");this.zoomed||(this.scroller.style[ad]="0",this._resetPos(200))},scrollTo:function(f,h,m,l){var j=f;this.stop();j.length||(j=[{x:f,y:h,time:m,relative:l}]);f=0;for(h=j.length;f<h;f++){j[f].relative&&(j[f].x=this.x-j[f].x,j[f].y=this.y-j[f].y),this.steps.push({x:j[f].x,y:j[f].y,time:j[f].time||0})}this._startAni()},scrollToElement:function(f,h){var j;if(f=f.nodeType?f:this.scroller.querySelector(f)){j=this._offset(f),j.left+=this.wrapperOffsetLeft,j.top+=this.wrapperOffsetTop,j.left=0<j.left?0:j.left<this.maxScrollX?this.maxScrollX:j.left,j.top=j.top>this.minScrollY?this.minScrollY:j.top<this.maxScrollY?this.maxScrollY:j.top,h=void 0===h?ao.max(2*ao.abs(j.left),2*ao.abs(j.top)):h,this.scrollTo(j.left,j.top,h)}},scrollToPage:function(f,h,j){j=void 0===j?400:j;this.options.onScrollStart&&this.options.onScrollStart.call(this);if(this.options.snap){f="next"==f?this.currPageX+1:"prev"==f?this.currPageX-1:f,h="next"==h?this.currPageY+1:"prev"==h?this.currPageY-1:h,f=0>f?0:f>this.pagesX.length-1?this.pagesX.length-1:f,h=0>h?0:h>this.pagesY.length-1?this.pagesY.length-1:h,this.currPageX=f,this.currPageY=h,f=this.pagesX[f],h=this.pagesY[h]}else{if(f*=-this.wrapperW,h*=-this.wrapperH,f<this.maxScrollX&&(f=this.maxScrollX),h<this.maxScrollY){h=this.maxScrollY}}this.scrollTo(f,h,j)},disable:function(){this.stop();this._resetPos(0);this.enabled=!1;this._unbind(U);this._unbind(S);this._unbind(R)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(aa):Q(this.aniTime);this.steps=[];this.animating=this.moved=!1},zoom:function(f,h,m,l){var j=m/this.scale;this.options.useTransform&&(this.zoomed=!0,l=void 0===l?200:l,f=f-this.wrapperOffsetLeft-this.x,h=h-this.wrapperOffsetTop-this.y,this.x=f-f*j+this.x,this.y=h-h*j+this.y,this.scale=m,this.refresh(),this.x=0<this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y,this.scroller.style[ad]=l+"ms",this.scroller.style[ai]="translate("+this.x+"px,"+this.y+"px) scale("+m+")"+ae,this.zoomed=!1)},isReady:function(){return !this.moved&&!this.zoomed&&!this.animating}};P=null;return aj}(window,document);
var Scrollable=function(h,q,t,C,s,k){var e=[],r=false,y=false,g=p(),o=!!g.name,A;function p(){var H=navigator.userAgent,G,F,E;if((E=/\bCPU.*OS (\d+(_\d+)?)/i.exec(H))){G="ios";F=E[1].replace("_",".")}else{if((E=/\bAndroid (\d+(\.\d+)?)/.exec(H))){G="android";F=E[1]}}var I={name:G,version:F&&h.parseFloat(F)};I[G]=true;return I}function D(F){if(!F){return false}try{return(F instanceof Node)||(F instanceof HTMLElement)}catch(E){}if(typeof F!=="object"){return false}if(typeof F.nodeType!=="number"){return false}if(typeof F.nodeName!=="string"){return false}return true}function w(F,H,I){if(F.indexOf){return Array.prototype.indexOf.call(F,H,I)}else{for(var G=I||0,E=F.length;G<E;G++){if((G in F)&&(F[G]===H)){return G}}return -1}}function d(F,I,G){if(Array.prototype.forEach){Array.prototype.forEach.call(F,I,G)}else{for(var H=0,E=F.length;H<E;H++){if(H in F){I.call(G,F[H],H,F)}}}}function b(E){if(r){setTimeout(E,0)}else{e.push(E)}}function v(){if(r){return}r=true;d(e,function(E){setTimeout(E,0)})}function c(F){try{q.documentElement.doScroll("left")}catch(E){setTimeout(function(){c(F)},1);return}F()}function l(G){if(q.readyState==="complete"){setTimeout(G,0);return}if(q.addEventListener){q.addEventListener("DOMContentLoaded",G,false);h.addEventListener("load",G,false)}else{if(q.attachEvent){q.attachEvent("onreadystatechange",G);h.attachEvent("onload",G);var E=false;try{E=(h.frameElement===null)}catch(F){}if(q.documentElement.doScroll&&E){setTimeout(function(){c(G)},0)}}}}function j(){if(!C){return}function E(){B.apply(this,arguments)}E.node=function(){return z.apply(this,arguments)};C.plugin("scrollable",E)}function i(){if(!s){return}s.extend(s.fn,{scrollable:function(G){this.forEach(function(H){B(H,G)});return this},scrollableNode:function(){return $(this.map(function(){return z(this)}))}});var E=s.fn.scrollTop,F=s.fn.scrollLeft;s.fn.scrollTop=function(I){if(typeof I==="undefined"){var G=this[0],H=D(G);if(H&&G._scrollTop){return G._scrollTop()}else{if(E){return E.apply(this,arguments)}else{if(H){return G.scrollTop}else{return null}}}}this.forEach(function(J){var K=D(J);if(K&&J._scrollTop){J._scrollTop(I)}else{if(E){E.call(s(J),I)}else{if(K){J.scrollTop=I}}}});return this};s.fn.scrollLeft=function(I){if(typeof I==="undefined"){var G=this[0],H=D(G);if(H&&G._scrollLeft){return G._scrollLeft()}else{if(E){return F.apply(this,arguments)}else{if(H){return G.scrollLeft}else{return null}}}}this.forEach(function(J){var K=D(J);if(K&&J._scrollLeft){J._scrollLeft(I)}else{if(F){F.call(s(J),I)}else{if(K){J.scrollLeft=I}}}});return this}}function u(){if(!k){return}k.fn.scrollable=function(G){this.each(function(){B(this,G)});return this};k.fn.scrollableNode=function(){return $(this.map(function(){return z(this)}))};var E=k.fn.scrollTop,F=k.fn.scrollLeft;k.fn.scrollTop=function(H){if(typeof H==="undefined"){var G=this[0];if(D(G)&&G._scrollTop){return G._scrollTop()}else{return E.apply(this,arguments)}}this.each(function(){if(D(this)&&this._scrollTop){this._scrollTop(H)}else{E.call(k(this),H)}});return this};k.fn.scrollLeft=function(H){if(typeof H==="undefined"){var G=this[0];if(D(G)&&G._scrollLeft){return G._scrollLeft()}else{return F.apply(this,arguments)}}this.each(function(){if(D(this)&&this._scrollLeft){this._scrollLeft(H)}else{F.call(k(this),H)}});return this}}function x(){j();i();u();function E(){B.apply(this,arguments)}E.node=function(){return z.apply(this,arguments)};return E}function f(){if((g.ios&&(g.version>=5))||(g.android&&(g.version>=4))){y=true}n();l(v);return x()}function n(){A=t}function B(J,F){if(!D(J)){throw J+" is not a DOM element"}if(J._scrollable){return}J._scrollable=true;J.style.overflow="scroll";J._scrollTop=function(M){if(typeof M==="undefined"){return E?Math.max(parseInt(-E.y),0):J.scrollTop}if(!E&&(!o||y)){J.scrollTop=M;return}b(function(){E.scrollTo(E.x,Math.min(-M,0),1)})};J._scrollLeft=function(M){if(typeof M==="undefined"){return E?Math.max(parseInt(-E.x),0):J.scrollLeft}if(!E&&(!o||y)){J.scrollLeft=M;return}b(function(){E.scrollTo(Math.min(-M,0),E.y,1)})};if(!F){if(!o){return}if(y){J.style["-webkit-overflow-scrolling"]="touch";return}}var L=q.createElement("div"),H=Array.prototype.slice.call(J.childNodes||[]);d(H,function(N){var M=J.removeChild(N);L.appendChild(M)});J.appendChild(L);var E,I,K;J._iScroll=true;b(function(){E=new A(J,{checkDOMChanges:true,useTransform:true,useTransition:true,hScrollbar:false,vScrollbar:false,bounce:!!g.ios,onScrollMove:G,onBeforeScrollEnd:G,onScrollEnd:G,onBeforeScrollStart:m})});function G(){var O=J._scrollTop(),N=J._scrollLeft();if((O===I)&&(N===K)){return}I=O;K=N;if(J.dispatchEvent){var M=q.createEvent("MouseEvents");M.initMouseEvent("scroll",false,false,h,0,0,0,0,0,false,false,false,false,0,null);J.dispatchEvent(M)}}}function m(F){var E=F.target;while(E.nodeType!==1){E=E.parentNode}if((E.tagName!=="SELECT")&&(E.tagName!=="INPUT")&&(E.tagName!=="TEXTAREA")){F.preventDefault()}}function z(E){if(D(E)&&E._iScroll){return E.childNodes[0]}else{return E}}return f()}(window,document,iScroll,window.clik,window.Zepto,window.jQuery);

(function (window, document, ImageLoader, Swapper, Clickable, Dialog, Scrollable) {
	var PAGE_CLASS                        = 'app-page',
		PAGE_NAME                         = 'data-page',
		APP_IOS                           = 'app-ios',
		APP_ANDROID                       = 'app-android',
		APP_LOADED                        = 'app-loaded',
		PAGE_SHOW_EVENT                   = 'appShow',
		PAGE_HIDE_EVENT                   = 'appHide',
		PAGE_BACK_EVENT                   = 'appBack',
		PAGE_FORWARD_EVENT                = 'appForward',
		STACK_KEY                         = '__APP_JS_STACK__' + window.location.pathname,
		DEFAULT_TRANSITION_IOS            = 'slide-left',
		DEFAULT_TRANSITION_ANDROID        = 'implode-out',
		DEFAULT_TRANSITION_ANDROID_OLD    = 'fade-on',
		DEFAULT_TRANSITION_ANDROID_GHETTO = 'instant',
		REVERSE_TRANSITION                = {
			'instant'        : 'instant'        ,
			'fade'           : 'fade'           ,
			'fade-on'        : 'fade-off'       ,
			'fade-off'       : 'fade-on'        ,
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

	var App          = {},
		pages        = {},
		populators   = {},
		stack        = [],
		navQueue     = [],
		navLock      = false,
		initialised  = false,
		isAndroid401 = false,
		customEvents = null,
		platform, version, defaultTransition, reverseTransition,
		current, currentNode;



	function isArray (arr) {
		if (Array.isArray) {
			return Array.isArray(arr);
		}
		else {
			return Object.prototype.toString.call(arr) !== '[object Array]';
		}
	}

	function isNode (elem) {
		if ( !elem ) {
			return false;
		}

		try {
			return (elem instanceof Node) || (elem instanceof HTMLElement);
		} catch (err) {}

		if (typeof elem !== 'object') {
			return false;
		}

		if (typeof elem.nodeType !== 'number') {
			return false;
		}

		if (typeof elem.nodeName !== 'string') {
			return false;
		}

		return true;
	}

	function getStyles (elem, notComputed) {
		var styles;

		if (notComputed) {
			styles = elem.style;
		}
		else {
			styles = document.defaultView.getComputedStyle(elem, null);
		}

		return {
			display          : styles.display          ,
			opacity          : styles.opacity          ,
			paddingRight     : styles.paddingRight     ,
			paddingLeft      : styles.paddingLeft      ,
			marginRight      : styles.marginRight      ,
			marginLeft       : styles.marginLeft       ,
			borderRightWidth : styles.borderRightWidth ,
			borderLeftWidth  : styles.borderLeftWidth  ,
			top              : styles.top              ,
			left             : styles.left             ,
			height           : styles.height           ,
			width            : styles.width            ,
			position         : styles.position
		};
	}

	function getTotalWidth (styles) {
		return parseInt(styles.width || 0) + parseInt(styles.paddingLeft || 0) + parseInt(styles.paddingRight || 0) + parseInt(styles.borderLeftWidth || 0) + parseInt(styles.borderRightWidth || 0) + parseInt(styles.marginLeft || 0) + parseInt(styles.marginRight || 0);
	}



	function setDefaultTransition (transition) {
		defaultTransition = transition;
		reverseTransition = REVERSE_TRANSITION[defaultTransition];
	}

	function config () {
		if (match = /\bCPU.*OS (\d+(_\d+)?)/i.exec(navigator.userAgent)) {
			platform = 'ios';
			version = parseFloat( match[1] );
			document.body.className += ' ' + APP_IOS;
			setDefaultTransition(DEFAULT_TRANSITION_IOS);
		}
		else if (match = /\bAndroid (\d+(\.\d+(\.\d+)?)?)/.exec(navigator.userAgent)) {
			platform = 'android';
			version = parseFloat( match[1] );
			document.body.className += ' ' + APP_ANDROID;

			if (match[1] === '4.0.1') {
				isAndroid401 = true;
				setDefaultTransition(DEFAULT_TRANSITION_ANDROID_GHETTO);
			}
			else if (version >= 4) {
				setDefaultTransition(DEFAULT_TRANSITION_ANDROID);
			}
			else if ((version < 2.3) || /LT15a/i.test(navigator.userAgent)) {
				setDefaultTransition(DEFAULT_TRANSITION_ANDROID_GHETTO);
			}
			else {
				setDefaultTransition(DEFAULT_TRANSITION_ANDROID_OLD);
			}
		}

		App.platform = platform;
		App.platformVersion = version;
	}

	function init () {
		if (initialised) {
			return;
		}
		initialised = true;

		var pageNodes = document.getElementsByClassName(PAGE_CLASS),
			page, pageName, match;

		for (var i=pageNodes.length; i--;) {
			addPage( pageNodes[i] );
		}

		document.body.className += ' ' + APP_LOADED;
	}

	function addPage (page, pageName) {
		if (pageName) {
			page.setAttribute(PAGE_NAME, pageName);
		}
		else {
			pageName = page.getAttribute(PAGE_NAME);
		}

		if ((typeof pageName === 'string') && (pageName.length !== 0)) {
			page.parentNode.removeChild(page);
			pages[pageName] = page.cloneNode(true);
		}
	}



	function startPageGeneration (pageName, args, pageManager) {
		init();

		if ( !(pageName in pages) ) {
			throw TypeError(pageName + ' is not a known page');
		}

		var page           = pages[pageName].cloneNode(true),
			pagePopulators = populators[pageName] || [];

		insureCustomEventing(page, [PAGE_SHOW_EVENT, PAGE_HIDE_EVENT, PAGE_BACK_EVENT, PAGE_FORWARD_EVENT]);

		setContentHeight(page);

		Array.prototype.forEach.call(
			page.querySelectorAll('.app-button'),
			function (button) {
				Clickable(button);

				var target = button.getAttribute('data-target'),
					back   = button.getAttribute('data-back');

				if (back) {
					stickyButton(button, function (callback) {
						return navigateBack({}, callback);
					});
				}
				else if (target) {
					stickyButton(button, function (callback) {
						return loadPage(target, {}, {}, callback);
					});
				}
			}
		);

		pagePopulators.forEach(function (data) {
			var populator = data[0];
			populator.call(pageManager, page, args);
		});

		Array.prototype.forEach.call(
			page.querySelectorAll('img'),
			function (image) {
				if ( !image.getAttribute('data-auto-load') ) {
					return;
				}

				var minWait = (platform === 'android' ? 400 : 0),
					url     = image.src;
				image.src   = '';

				ImageLoader(image, url, minWait);
			}
		);

		if (isAndroid401) {
			setupScrollers(page);
		}

		var topbar = page.querySelector('.app-topbar');

		if (topbar) {
			topbar.addEventListener('DOMNodeInsertedIntoDocument', function () {
				fixPageTitle(this);
			}, false);
		}

		return page;
	}

	function fixPageTitle (topbar) {
		if ( !topbar ) {
			return;
		}

		var title = topbar.querySelector('.app-title');

		if ( !title ) {
			return;
		}

		if ( !title.getAttribute('data-autosize') ) {
			return;
		}

		var margin      = 0,
			leftButton  = topbar.querySelector('.left.app-button'),
			rightButton = topbar.querySelector('.right.app-button');

		if (leftButton) {
			var leftStyles = getStyles(leftButton),
				leftPos    = getTotalWidth(leftStyles) + parseInt(leftStyles.left || 0) + 4;
			margin = Math.max(margin, leftPos);
		}

		if (rightButton) {
			var rightStyles = getStyles(rightButton),
				rightPos    = getTotalWidth(rightStyles) + parseInt(rightStyles.right || 0) + 4;
			margin = Math.max(margin, rightPos);
		}

		title.style.width = (window.innerWidth-margin*2) + 'px';
	}

	function finishPageGeneration (pageName, page, args, pageManager) {
		if ( !isAndroid401 ) {
			setupScrollers(page);
		}
	}

	function setupScrollers (page) {
		Array.prototype.forEach.call(
			page.querySelectorAll('.app-content'),
			function (content) {
				if ( !content.getAttribute('data-no-scroll') ) {
					Scrollable(content);
					content.className += ' app-scrollable';
				}
			}
		);

		Array.prototype.forEach.call(
			page.querySelectorAll('[data-scrollable]'),
			function (content) {
				Scrollable(content);
				content.className += ' app-scrollable';
			}
		);
	}

	function startPageDestruction (pageName, page, args, pageManager) {
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
				activeClass = button.getAttribute('data-clickable-class') || 'active',
				value;
			button.disabled = true;
			button.className += ' ' + activeClass;

			try {
				value = holdFunction(cleanUp);
			}
			catch (err) {
				if (window.console && window.console.error) {
					window.console.error(err + '');
				}

				cleanUp();
			}

			if (value === false) {
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



	function navigate (handler) {
		if (navLock) {
			navQueue.push(handler);
			return false;
		}

		navLock = true;

		handler(function () {
			navLock = false;
			setTimeout(processNavigationQueue, 0);
			saveStack();
		});

		return true;
	}



	function generatePage (pageName, args) {
		var pageManager = {},
			page        = startPageGeneration(pageName, args, pageManager);

		finishPageGeneration(pageName, page, args, pageManager);

		return page;
	}

	function loadPage (pageName, args, options, callback) {
		navigate(function (unlock) {
			var pageManager = {},
				page        = startPageGeneration(pageName, args, pageManager);

			if ( !current ) {
				App.restore = null;
				document.body.appendChild(page);
				setTimeout(finish, 0);
			}
			else {
				savePageScrollPosition(currentNode);

				var newOptions = {};
				for (var key in options) {
					newOptions[key] = options[key];
				}
				performTransition(page, newOptions, finish);
			}

			var oldNode = currentNode;

			current     = pageName;
			currentNode = page;
			stack.push([ pageName, page, options, args, pageManager ]);

			if (oldNode) {
				firePageEvent(oldNode, PAGE_FORWARD_EVENT);
			}

			function finish () {
				savePageScrollStyle(oldNode);
				finishPageGeneration(pageName, page, args, pageManager);

				unlock();
				callback();

				if (oldNode) {
					firePageEvent(oldNode, PAGE_HIDE_EVENT);
				}
				firePageEvent(page, PAGE_SHOW_EVENT);
			}
		});

		if ( !(pageName in pages) ) {
			return false;
		}
	}

	function navigateBack (options, callback) {
		if ( Dialog.status() ) {
			Dialog.close();
			return;
		}

		var stackLength = stack.length;

		var navigatedImmediately = navigate(function (unlock) {
			if (stack.length < 2) {
				unlock();
				return;
			}

			var oldPage    = stack.pop(),
				data       = stack[stack.length - 1],
				pageName   = data[0],
				page       = data[1],
				oldOptions = oldPage[2];

			firePageEvent(oldPage[1], PAGE_BACK_EVENT);

			setContentHeight(page);

			startPageDestruction(oldPage[0], oldPage[1], oldPage[3], oldPage[4]);

			restorePageScrollPosition(page);

			var newOptions = {};
			for (var key in oldOptions) {
				newOptions[key] = oldOptions[key];
			}
			for (var key in options) {
				newOptions[key] = options[key];
			}

			performTransition(page, newOptions, function () {
				restorePageScrollStyle(page);

				firePageEvent(oldPage[1], PAGE_HIDE_EVENT);
				firePageEvent(page, PAGE_SHOW_EVENT);

				setTimeout(function () {
					finishPageDestruction(oldPage[0], oldPage[1], oldPage[3], oldPage[4]);

					unlock();
					callback();
				}, 0);
			}, true);

			current     = pageName;
			currentNode = page;
		});

		if (navigatedImmediately && (stackLength < 2)) {
			return false;
		}
	}



	function fetchStack () {
		return stack.slice().map(function (pageData) {
			var pageName = pageData[0],
				pageArgs = {};

			for (var key in pageData[3]) {
				pageArgs[key] = pageData[3][key];
			}

			return [ pageName, pageArgs ];
		});
	}

	// you must manually save the stack if you choose to use this method
	function removeFromStackNow (startIndex, endIndex) {
		var deadPages = stack.splice(startIndex, endIndex - startIndex);

		deadPages.forEach(function (pageData) {
			startPageDestruction(pageData[0], pageData[1], pageData[3], pageData[4]);
			finishPageDestruction(pageData[0], pageData[1], pageData[3], pageData[4]);
		});
	}

	function removeFromStack (startIndex, endIndex) {
		navigate(function (unlock) {
			removeFromStackNow(startIndex, endIndex);
			unlock();
		});
	}

	// you must manually save the stack if you choose to use this method
	function addToStackNow (index, newPages) {
		var pageDatas = [];

		newPages.forEach(function (pageData) {
			var pageManager = {},
				page        = startPageGeneration(pageData[0], pageData[1], pageManager);

			finishPageGeneration(pageData[0], page, pageData[1], pageManager);

			savePageScrollPosition(page);
			savePageScrollStyle(page);

			pageDatas.push([pageData[0], page, pageData[2], pageData[1], pageManager]);
		});

		pageDatas.unshift(0);
		pageDatas.unshift(index);
		Array.prototype.splice.apply(stack, pageDatas);
	}

	function addToStack (index, newPages) {
		navigate(function (unlock) {
			addToStackNow(index, newPages);
			unlock();
		});
	}



	function processNavigationQueue () {
		if ( navQueue.length ) {
			navigate( navQueue.shift() );
		}

	}



	function supportsCustomEventing () {
		if (customEvents === null) {
			try {
				var elem = document.createElement('div'),
					evt  = document.createEvent('CustomEvent');
				evt.initEvent('fooBarFace', false, true);
				elem.dispatchEvent(evt);
				customEvents = true;
			}
			catch (err) {
				customEvents = false;
			}
		}

		return customEvents;
	}

	function insureCustomEventing (page, names) {
		if (page._brokenEvents || supportsCustomEventing()) {
			return;
		}

		page._brokenEvents = true;
		page._addEventListener    = page.addEventListener;
		page._removeEventListener = page.removeEventListener;

		var listeners = {};

		names.forEach(function (name) {
			listeners[name] = [];
		});

		page.addEventListener = function (name, listener) {
			if (names.indexOf(name) === -1) {
				page._addEventListener.apply(this, arguments);
				return;
			}

			var eventListeners = listeners[name];

			if (eventListeners.indexOf(listener) === -1) {
				eventListeners.push(listener);
			}
		};

		page.removeEventListener = function (name, listener) {
			if (names.indexOf(name) === -1) {
				page._removeEventListener.apply(this, arguments);
				return;
			}

			var eventListeners = listeners[name],
				index          = eventListeners.indexOf(listener);

			if (index !== -1) {
				eventListeners.splice(index, 1);
			}
		};

		page._trigger = function (name) {
			if (names.indexOf(name) === -1) {
				return;
			}

			listeners[name].forEach(function (listener) {
				setTimeout(function () {
					listener.call(page, {});
				}, 0);
			});
		};
	}

	function firePageEvent (page, eventName) {
		if (page._brokenEvents) {
			page._trigger(eventName);
			return;
		}

		var event = document.createEvent('CustomEvent');
		event.initEvent(eventName, false, true);
		page.dispatchEvent(event);
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
			newBar         = page.querySelector('.app-topbar'),
			newContent     = page.querySelector('.app-content');

		if (!currentBar || !newBar || !currentContent || !newContent) {
			Swapper(oldPage, page, options, cleanup);
			return;
		}

		var count = 0;

		Swapper(currentBar    , newBar    , 'fade-off', swapDone);
		Swapper(currentContent, newContent, options   , swapDone);

		function swapDone () {
			if (++count !== 2) {
				return;
			}

			page.appendChild(newBar);
			page.appendChild(newContent);
			oldPage.appendChild(currentBar);
			oldPage.appendChild(currentContent);

			Swapper(oldPage, page, 'instant');

			cleanup();
		}
	}

	function getScrollableElems (page) {
		page = page || currentNode;

		if ( !page ) {
			return [];
		}

		var elems = [];

		Array.prototype.forEach.call(
			page.querySelectorAll('.app-scrollable'),
			function (elem) {
				if (elem._scrollable) {
					elems.push(elem);
				}
			}
		);

		return elems;
	}

	function savePageScrollPosition (page) {
		Array.prototype.forEach.call(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollTop = elem._scrollTop();
				elem.setAttribute('data-last-scroll', scrollTop+'');
			}
		);
	}

	function savePageScrollStyle (page) {
		Array.prototype.forEach.call(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollStyle = elem.style['-webkit-overflow-scrolling'] || '';
				elem.style['-webkit-overflow-scrolling'] = '';
				elem.setAttribute('data-scroll-style', scrollStyle);
			}
		);
	}

	function restorePageScrollPosition (page, noTimeout) {
		Array.prototype.forEach.call(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollTop = parseInt( elem.getAttribute('data-last-scroll') );

				if (scrollTop) {
					if (noTimeout) {
						elem._scrollTop(scrollTop);
					}
					else {
						setTimeout(function () {
							elem._scrollTop(scrollTop);
						}, 0);
					}
				}
			}
		);
	}

	function restorePageScrollStyle (page) {
		Array.prototype.forEach.call(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollStyle = elem.getAttribute('data-scroll-style') || '';

				if (scrollStyle) {
					elem.style['-webkit-overflow-scrolling'] = scrollStyle;
				}

			}
		);

		restorePageScrollPosition(page, true);
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
		function fixSizing () {
			currentNode && setContentHeight(currentNode);
		}
		function triggerSizeFix () {
			fixSizing();
			setTimeout(fixSizing, 0);
			setTimeout(fixSizing, 10);
			setTimeout(fixSizing, 100);
		}

		window.addEventListener('orientationchange', triggerSizeFix);
		window.addEventListener('resize'           , triggerSizeFix);
		window.addEventListener('load'             , triggerSizeFix);
		setTimeout(triggerSizeFix, 0);

		return triggerSizeFix;
	}



	function saveStack () {
		try {
			var storedStack = stack.map(function (pageData) {
				return [ pageData[0], pageData[3], pageData[2] ];
			});

			localStorage[STACK_KEY] = JSON.stringify(storedStack);
		}
		catch (err) {}
	}

	function setupRestoreFunction () {
		var storedStack, lastPage;

		try {
			storedStack = JSON.parse( localStorage[STACK_KEY] );
			lastPage    = storedStack.pop();
		}
		catch (err) {
			return;
		}

		return function (callback) {
			switch (typeof callback) {
				case 'undefined':
					callback = function () {};
				case 'function':
					break;

				default:
					throw TypeError('restore callback must be a function if defined, got ' + callback);
			}

			init();

			if ( !(lastPage[0] in pages) ) {
				throw TypeError(lastPage[0] + ' is not a known page');
			}

			storedStack.forEach(function (pageData) {
				if ( !(pageData[0] in pages) ) {
					throw TypeError(pageData[0] + ' is not a known page');
				}
			});

			try {
				addToStackNow(0, storedStack);
			}
			catch (err) {
				removeFromStackNow(0, stack.length);
				throw Error('failed to restore stack');
			}

			saveStack();

			try {
				loadPage(lastPage[0], lastPage[1], lastPage[2], callback);
			}
			catch (err) {
				removeFromStackNow(0, stack.length);
				throw Error('failed to restore stack');
			}
		};
	}



	App.platform = null;
	App.platformVersion = null;



	App.current = function () {
		return current;
	};



	App.add = function (pageName, page) {
		if (typeof pageName !== 'string') {
			page     = pageName;
			pageName = undefined;
		}

		if ( !isNode(page) ) {
			throw TypeError('page template node must be a DOM node, got ' + page);
		}

		addPage(page, pageName);
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

		return navigateBack(options, callback);
	};



	App.generate = function (pageName, args) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}

		switch (typeof args) {
			case 'undefined':
				args = {};
				break;

			case 'object':
				break;

			default:
				throw TypeError('page arguments must be an object if defined, got ' + args);
		}

		return generatePage(pageName, args);
	};



	App.setDefaultTransition = function (transition) {
		if (typeof transition === 'object') {
			switch (platform) {
				case 'android':
					transition = transition.android;
					if ((isAndroid401 || version < 4) && transition.androidFallback) {
						transition = transition.androidFallback;
					}
					break;

				case 'ios':
					transition = transition.ios;
					if ((version < 5) && transition.iosFallback) {
						transition = transition.iosFallback;
					}
					break;

				default:
					transition = transition.fallback;
					break;
			}

			if ( !transition ) {
				return;
			}
		}

		if (typeof transition !== 'string') {
			throw TypeError('transition must be a string if defined, got ' + transition);
		}

		if ( !(transition in REVERSE_TRANSITION) ) {
			throw TypeError('invalid transition type, got ' + transition);
		}

		setDefaultTransition(transition);
	};



	App.getStack = function () {
		return fetchStack();
	};



	App.removeFromStack = function (startIndex, endIndex) {
		// minus 1 because last item on stack is current page (which is untouchable)
		var stackSize = stack.length - 1;

		switch (typeof startIndex) {
			case 'undefined':
				startIndex = 0;
				break;

			case 'number':
				if (Math.abs(startIndex) > stackSize) {
					throw TypeError('absolute start index cannot be greater than stack size, got ' + startIndex);
				}
				if (startIndex < 0) {
					startIndex = stackSize + startIndex;
				}
				break;

			default:
				throw TypeError('start index must be a number if defined, got ' + startIndex);
		}

		switch (typeof endIndex) {
			case 'undefined':
				endIndex = stackSize;
				break;

			case 'number':
				if (Math.abs(endIndex) > stackSize) {
					throw TypeError('absolute end index cannot be greater than stack size, got ' + endIndex);
				}
				if (endIndex < 0) {
					endIndex = stackSize + endIndex;
				}
				break;

			default:
				throw TypeError('end index must be a number if defined, got ' + endIndex);
		}

		if (startIndex > endIndex) {
			throw TypeError('start index cannot be greater than end index');
		}

		removeFromStack(startIndex, endIndex);
	};



	App.addToStack = function (index, newPages) {
		// minus 1 because last item on stack is current page (which is untouchable)
		var stackSize = stack.length - 1;

		switch (typeof index) {
			case 'undefined':
				index = 0;
				break;

			case 'number':
				if (Math.abs(index) > stackSize) {
					throw TypeError('absolute index cannot be greater than stack size, got ' + index);
				}
				if (index < 0) {
					index = stackSize + index;
				}
				break;

			default:
				throw TypeError('index must be a number if defined, got ' + index);
		}

		if ( !isArray(newPages) ) {
			throw TypeError('added pages must be an array, got ' + newPages);
		}

		newPages = newPages.slice();

		newPages.forEach(function (page, i) {
			if (typeof page === 'string') {
				page = [page, {}];
			}
			else if ( isArray(page) ) {
				page = page.slice();
			}
			else {
				throw TypeError('page description must be an array (page name, arguments), got ' + page);
			}

			if (typeof page[0] !== 'string') {
				throw TypeError('page name must be a string, got ' + page[0]);
			}

			switch (typeof page[1]) {
				case 'undefined':
					page[1] = {};
					break;

				case 'object':
					break;

				default:
					throw TypeError('page arguments must be an object if defined, got ' + page[1]);
			}

			switch (typeof page[2]) {
				case 'undefined':
					page[2] = {};
					break;

				case 'object':
					break;

				default:
					throw TypeError('page options must be an object if defined, got ' + page[2]);
			}

			newPages[i] = page;
		});

		addToStack(index, newPages);
	};



	App.dialog = Dialog;





	config();

	App.restore = setupRestoreFunction();
	App._layout = setupListeners();

	window.App = App;
})(window, document, ImageLoader, Swapper, Clickable, Dialog, Scrollable);
