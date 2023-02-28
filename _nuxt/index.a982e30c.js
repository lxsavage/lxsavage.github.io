import{a as Kn,s as B,x as Vn,y as qn}from"./entry.da0deee2.js";/*!
 * Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Wt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Wt(Object(e),!0).forEach(function(a){Jn(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Wt(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function rt(t){return rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},rt(t)}function Qn(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Ht(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Zn(t,n,e){return n&&Ht(t.prototype,n),e&&Ht(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Jn(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Tt(t,n){return ne(t)||ae(t,n)||gn(t,n)||ie()}function lt(t){return te(t)||ee(t)||gn(t)||re()}function te(t){if(Array.isArray(t))return yt(t)}function ne(t){if(Array.isArray(t))return t}function ee(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ae(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(a.push(i.value),!(n&&a.length===n));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function gn(t,n){if(t){if(typeof t=="string")return yt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return yt(t,n)}}function yt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Gt=function(){},_t={},hn={},yn=null,kn={mark:Gt,measure:Gt};try{typeof window<"u"&&(_t=window),typeof document<"u"&&(hn=document),typeof MutationObserver<"u"&&(yn=MutationObserver),typeof performance<"u"&&(kn=performance)}catch{}var oe=_t.navigator||{},Xt=oe.userAgent,Kt=Xt===void 0?"":Xt,D=_t,y=hn,Vt=yn,tt=kn;D.document;var L=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",wn=~Kt.indexOf("MSIE")||~Kt.indexOf("Trident/"),_="___FONT_AWESOME___",kt=16,xn="fa",An="svg-inline--fa",Y="data-fa-i2svg",wt="data-fa-pseudo-element",se="data-fa-pseudo-element-pending",Mt="data-prefix",zt="data-icon",qt="fontawesome-i2svg",fe="async",le=["HTML","HEAD","STYLE","SCRIPT"],On=function(){try{return!0}catch{return!1}}(),Lt={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},it={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Sn={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},ue={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},ce=/fa[srltdbk\-\ ]/,En="fa-layers-text",me=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,de={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Cn=[1,2,3,4,5,6,7,8,9,10],ve=Cn.concat([11,12,13,14,15,16,17,18,19,20]),pe=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],j={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},be=[].concat(lt(Object.keys(it)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",j.GROUP,j.SWAP_OPACITY,j.PRIMARY,j.SECONDARY]).concat(Cn.map(function(t){return"".concat(t,"x")})).concat(ve.map(function(t){return"w-".concat(t)})),Pn=D.FontAwesomeConfig||{};function ge(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function he(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var ye=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ye.forEach(function(t){var n=Tt(t,2),e=n[0],a=n[1],r=he(ge(e));r!=null&&(Pn[a]=r)})}var ke={familyPrefix:xn,styleDefault:"solid",replacementClass:An,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},q=l(l({},ke),Pn);q.autoReplaceSvg||(q.observeMutations=!1);var v={};Object.keys(q).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(e){q[t]=e,nt.forEach(function(a){return a(v)})},get:function(){return q[t]}})});D.FontAwesomeConfig=v;var nt=[];function we(t){return nt.push(t),function(){nt.splice(nt.indexOf(t),1)}}var R=kt,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xe(t){if(!(!t||!L)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=y.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return y.head.insertBefore(n,a),t}}var Ae="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z(){for(var t=12,n="";t-- >0;)n+=Ae[Math.random()*62|0];return n}function X(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function Rt(t){return t.classList?X(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Nn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Oe(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Nn(t[e]),'" ')},"").trim()}function ut(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function Dt(t){return t.size!==N.size||t.x!==N.x||t.y!==N.y||t.rotate!==N.rotate||t.flipX||t.flipY}function Se(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(n.x*32,", ").concat(n.y*32,") "),i="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},d={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:d}}function Ee(t){var n=t.transform,e=t.width,a=e===void 0?kt:e,r=t.height,o=r===void 0?kt:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&wn?f+="translate(".concat(n.x/R-a/2,"em, ").concat(n.y/R-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/R,"em), calc(-50% + ").concat(n.y/R,"em)) "):f+="translate(".concat(n.x/R,"em, ").concat(n.y/R,"em) "),f+="scale(".concat(n.size/R*(n.flipX?-1:1),", ").concat(n.size/R*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Ce=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function In(){var t=xn,n=An,e=v.familyPrefix,a=v.replacementClass,r=Ce;if(e!==t||a!==n){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Qt=!1;function vt(){v.autoAddCss&&!Qt&&(xe(In()),Qt=!0)}var Pe={mixout:function(){return{dom:{css:In,insertCss:vt}}},hooks:function(){return{beforeDOMElementCreation:function(){vt()},beforeI2svg:function(){vt()}}}},M=D||{};M[_]||(M[_]={});M[_].styles||(M[_].styles={});M[_].hooks||(M[_].hooks={});M[_].shims||(M[_].shims=[]);var P=M[_],Tn=[],Ne=function t(){y.removeEventListener("DOMContentLoaded",t),ot=1,Tn.map(function(n){return n()})},ot=!1;L&&(ot=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),ot||y.addEventListener("DOMContentLoaded",Ne));function Ie(t){L&&(ot?setTimeout(t,0):Tn.push(t))}function J(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?Nn(t):"<".concat(n," ").concat(Oe(a),">").concat(o.map(J).join(""),"</").concat(n,">")}function Zt(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Te=function(n,e){return function(a,r,o,i){return n.call(e,a,r,o,i)}},pt=function(n,e,a,r){var o=Object.keys(n),i=o.length,s=r!==void 0?Te(e,r):e,f,d,u;for(a===void 0?(f=1,u=n[o[0]]):(f=0,u=a);f<i;f++)d=o[f],u=s(u,n[d],d,n);return u};function _e(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=t.charCodeAt(e++);(o&64512)==56320?n.push(((r&1023)<<10)+(o&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function xt(t){var n=_e(t);return n.length===1?n[0].toString(16):null}function Me(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Jt(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function At(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=Jt(n);typeof P.hooks.addPack=="function"&&!r?P.hooks.addPack(t,Jt(n)):P.styles[t]=l(l({},P.styles[t]||{}),o),t==="fas"&&At("fa",n)}var Q=P.styles,ze=P.shims,Le=Object.values(Sn),Ft=null,_n={},Mn={},zn={},Ln={},Rn={},Re=Object.keys(Lt);function De(t){return~be.indexOf(t)}function Fe(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!De(r)?r:null}var Dn=function(){var n=function(o){return pt(Q,function(i,s,f){return i[f]=pt(s,o,{}),i},{})};_n=n(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Mn=n(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),Rn=n(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var e="far"in Q||v.autoFetchSvg,a=pt(ze,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});zn=a.names,Ln=a.unicodes,Ft=ct(v.styleDefault)};we(function(t){Ft=ct(t.styleDefault)});Dn();function jt(t,n){return(_n[t]||{})[n]}function je(t,n){return(Mn[t]||{})[n]}function W(t,n){return(Rn[t]||{})[n]}function Fn(t){return zn[t]||{prefix:null,iconName:null}}function Ye(t){var n=Ln[t],e=jt("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function F(){return Ft}var Yt=function(){return{prefix:null,iconName:null,rest:[]}};function ct(t){var n=Lt[t],e=it[t]||it[n],a=t in P.styles?t:null;return e||a||null}function mt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,a=e===void 0?!1:e,r=null,o=t.reduce(function(i,s){var f=Fe(v.familyPrefix,s);if(Q[s]?(s=Le.includes(s)?ue[s]:s,r=s,i.prefix=s):Re.indexOf(s)>-1?(r=s,i.prefix=ct(s)):f?i.iconName=f:s!==v.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var d=r==="fa"?Fn(i.iconName):{},u=W(i.prefix,i.iconName);d.prefix&&(r=null),i.iconName=d.iconName||u||i.iconName,i.prefix=d.prefix||i.prefix,i.prefix==="far"&&!Q.far&&Q.fas&&!v.autoFetchSvg&&(i.prefix="fas")}return i},Yt());return(o.prefix==="fa"||r==="fa")&&(o.prefix=F()||"fas"),o}var $e=function(){function t(){Qn(this,t),this.definitions={}}return Zn(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=l(l({},e.definitions[s]||{}),i[s]),At(s,i[s]);var f=Sn[s];f&&At(f,i[s]),Dn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,d=i.icon,u=d[2];e[s]||(e[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(e[s][m]=d)}),e[s][f]=d}),e}}]),t}(),tn=[],H={},G={},Ue=Object.keys(G);function Be(t,n){var e=n.mixoutsTo;return tn=t,H={},Object.keys(G).forEach(function(a){Ue.indexOf(a)===-1&&delete G[a]}),tn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),rt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){H[i]||(H[i]=[]),H[i].push(o[i])})}a.provides&&a.provides(G)}),e}function Ot(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=H[t]||[];return o.forEach(function(i){n=i.apply(null,[n].concat(a))}),n}function $(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=H[t]||[];r.forEach(function(o){o.apply(null,e)})}function z(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return G[t]?G[t].apply(null,n):void 0}function St(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||F();if(n)return n=W(e,n)||n,Zt(jn.definitions,e,n)||Zt(P.styles,e,n)}var jn=new $e,We=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,$("noAuto")},He={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?($("beforeI2svg",n),z("pseudoElements2svg",n),z("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Ie(function(){Xe({autoReplaceSvgRoot:e}),$("watch",n)})}},Ge={icon:function(n){if(n===null)return null;if(rt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:W(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=ct(n[0]);return{prefix:a,iconName:W(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(v.familyPrefix,"-"))>-1||n.match(ce))){var r=mt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||F(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var o=F();return{prefix:o,iconName:W(o,n)||n}}}},E={noAuto:We,config:v,dom:He,parse:Ge,library:jn,findIconDefinition:St,toHtml:J},Xe=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?y:e;(Object.keys(P.styles).length>0||v.autoFetchSvg)&&L&&v.autoReplaceSvg&&E.dom.i2svg({node:a})};function dt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return J(a)})}}),Object.defineProperty(t,"node",{get:function(){if(L){var a=y.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ke(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(Dt(i)&&e.found&&!a.found){var s=e.width,f=e.height,d={x:s/f/2,y:.5};r.style=ut(l(l({},o),{},{"transform-origin":"".concat(d.x+i.x/16,"em ").concat(d.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Ve(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(n,"-").concat(v.familyPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function $t(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,d=t.maskId,u=t.titleId,m=t.extra,b=t.watchable,h=b===void 0?!1:b,x=a.found?a:e,A=x.width,O=x.height,c=r==="fak",p=[v.replacementClass,o?"".concat(v.familyPrefix,"-").concat(o):""].filter(function(U){return m.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(m.classes).join(" "),g={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:p,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(O)})},w=c&&!~m.classes.indexOf("fa-fw")?{width:"".concat(A/O*16*.0625,"em")}:{};h&&(g.attributes[Y]=""),f&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(u||Z())},children:[f]}),delete g.attributes.title);var k=l(l({},g),{},{prefix:r,iconName:o,main:e,mask:a,maskId:d,transform:i,symbol:s,styles:l(l({},w),m.styles)}),C=a.found&&e.found?z("generateAbstractMask",k)||{children:[],attributes:{}}:z("generateAbstractIcon",k)||{children:[],attributes:{}},I=C.children,K=C.attributes;return k.children=I,k.attributes=K,s?Ve(k):Ke(k)}function nn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,d=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(d[Y]="");var u=l({},i.styles);Dt(r)&&(u.transform=Ee({transform:r,startCentered:!0,width:e,height:a}),u["-webkit-transform"]=u.transform);var m=ut(u);m.length>0&&(d.style=m);var b=[];return b.push({tag:"span",attributes:d,children:[n]}),o&&b.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),b}function qe(t){var n=t.content,e=t.title,a=t.extra,r=l(l(l({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=ut(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var bt=P.styles;function Et(t){var n=t[0],e=t[1],a=t.slice(4),r=Tt(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(v.familyPrefix,"-").concat(j.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(j.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(j.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:n,height:e,icon:i}}var Qe={found:!1,width:512,height:512};function Ze(t,n){!On&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Ct(t,n){var e=n;return n==="fa"&&v.styleDefault!==null&&(n=F()),new Promise(function(a,r){if(z("missingIconAbstract"),e==="fa"){var o=Fn(t)||{};t=o.iconName||t,n=o.prefix||n}if(t&&n&&bt[n]&&bt[n][t]){var i=bt[n][t];return a(Et(i))}Ze(t,n),a(l(l({},Qe),{},{icon:v.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}var en=function(){},Pt=v.measurePerformance&&tt&&tt.mark&&tt.measure?tt:{mark:en,measure:en},V='FA "6.0.0"',Je=function(n){return Pt.mark("".concat(V," ").concat(n," begins")),function(){return Yn(n)}},Yn=function(n){Pt.mark("".concat(V," ").concat(n," ends")),Pt.measure("".concat(V," ").concat(n),"".concat(V," ").concat(n," begins"),"".concat(V," ").concat(n," ends"))},Ut={begin:Je,end:Yn},et=function(){};function an(t){var n=t.getAttribute?t.getAttribute(Y):null;return typeof n=="string"}function ta(t){var n=t.getAttribute?t.getAttribute(Mt):null,e=t.getAttribute?t.getAttribute(zt):null;return n&&e}function na(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function ea(){if(v.autoReplaceSvg===!0)return at.replace;var t=at[v.autoReplaceSvg];return t||at.replace}function aa(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function ra(t){return y.createElement(t)}function $n(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?aa:ra:e;if(typeof t=="string")return y.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild($n(i,{ceFn:a}))}),r}function ia(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var at={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore($n(r),e)}),e.getAttribute(Y)===null&&v.keepOriginalSource){var a=y.createComment(ia(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~Rt(e).indexOf(v.replacementClass))return at.replace(n);var r=new RegExp("".concat(v.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return J(s)}).join(`
`);e.setAttribute(Y,""),e.innerHTML=i}};function rn(t){t()}function Un(t,n){var e=typeof n=="function"?n:et;if(t.length===0)e();else{var a=rn;v.mutateApproach===fe&&(a=D.requestAnimationFrame||rn),a(function(){var r=ea(),o=Ut.begin("mutate");t.map(r),o(),e()})}}var Bt=!1;function Bn(){Bt=!0}function Nt(){Bt=!1}var st=null;function on(t){if(Vt&&v.observeMutations){var n=t.treeCallback,e=n===void 0?et:n,a=t.nodeCallback,r=a===void 0?et:a,o=t.pseudoElementsCallback,i=o===void 0?et:o,s=t.observeMutationsRoot,f=s===void 0?y:s;st=new Vt(function(d){if(!Bt){var u=F();X(d).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!an(m.addedNodes[0])&&(v.searchPseudoElements&&i(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&an(m.target)&&~pe.indexOf(m.attributeName))if(m.attributeName==="class"&&ta(m.target)){var b=mt(Rt(m.target)),h=b.prefix,x=b.iconName;m.target.setAttribute(Mt,h||u),x&&m.target.setAttribute(zt,x)}else na(m.target)&&r(m.target)})}}),L&&st.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function oa(){st&&st.disconnect()}function sa(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function fa(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=mt(Rt(t));return r.prefix||(r.prefix=F()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=je(r.prefix,t.innerText)||jt(r.prefix,xt(t.innerText))),r}function la(t){var n=X(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(e?n["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||Z()):(n["aria-hidden"]="true",n.focusable="false")),n}function ua(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=fa(t),a=e.iconName,r=e.prefix,o=e.rest,i=la(t),s=Ot("parseNodeAttributes",{},t),f=n.styleParser?sa(t):[];return l({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var ca=P.styles;function Wn(t){var n=v.autoReplaceSvg==="nest"?sn(t,{styleParser:!1}):sn(t);return~n.extra.classes.indexOf(En)?z("generateLayersText",t,n):z("generateSvgReplacementMutation",t,n)}function fn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();var e=y.documentElement.classList,a=function(m){return e.add("".concat(qt,"-").concat(m))},r=function(m){return e.remove("".concat(qt,"-").concat(m))},o=v.autoFetchSvg?Object.keys(Lt):Object.keys(ca),i=[".".concat(En,":not([").concat(Y,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(Y,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=X(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Ut.begin("onTree"),d=s.reduce(function(u,m){try{var b=Wn(m);b&&u.push(b)}catch(h){On||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,m){Promise.all(d).then(function(b){Un(b,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),u()})}).catch(function(b){f(),m(b)})})}function ma(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wn(t).then(function(e){e&&Un([e],n)})}function da(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:St(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:St(r||{})),t(a,l(l({},e),{},{mask:r}))}}var va=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?N:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,f=s===void 0?null:s,d=e.maskId,u=d===void 0?null:d,m=e.title,b=m===void 0?null:m,h=e.titleId,x=h===void 0?null:h,A=e.classes,O=A===void 0?[]:A,c=e.attributes,p=c===void 0?{}:c,g=e.styles,w=g===void 0?{}:g;if(n){var k=n.prefix,C=n.iconName,I=n.icon;return dt(l({type:"icon"},n),function(){return $("beforeDOMElementCreation",{iconDefinition:n,params:e}),v.autoA11y&&(b?p["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(x||Z()):(p["aria-hidden"]="true",p.focusable="false")),$t({icons:{main:Et(I),mask:f?Et(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:l(l({},N),r),symbol:i,title:b,maskId:u,titleId:x,extra:{attributes:p,styles:w,classes:O}})})}},pa={mixout:function(){return{icon:da(va)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=fn,e.nodeCallback=ma,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?y:a,o=e.callback,i=o===void 0?function(){}:o;return fn(r,i)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,d=a.symbol,u=a.mask,m=a.maskId,b=a.extra;return new Promise(function(h,x){Promise.all([Ct(r,s),u.iconName?Ct(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var O=Tt(A,2),c=O[0],p=O[1];h([e,$t({icons:{main:c,mask:p},prefix:s,iconName:r,transform:f,symbol:d,maskId:m,title:o,titleId:i,extra:b,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,f=ut(s);f.length>0&&(r.style=f);var d;return Dt(i)&&(d=z("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(d||o.icon),{children:a,attributes:r}}}},ba={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return dt({type:"layer"},function(){$("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.familyPrefix,"-layers")].concat(lt(o)).join(" ")},children:i}]})}}}},ga={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,d=f===void 0?{}:f,u=a.styles,m=u===void 0?{}:u;return dt({type:"counter",content:e},function(){return $("beforeDOMElementCreation",{content:e,params:a}),qe({content:e.toString(),title:o,extra:{attributes:d,styles:m,classes:["".concat(v.familyPrefix,"-layers-counter")].concat(lt(s))}})})}}}},ha={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?N:r,i=a.title,s=i===void 0?null:i,f=a.classes,d=f===void 0?[]:f,u=a.attributes,m=u===void 0?{}:u,b=a.styles,h=b===void 0?{}:b;return dt({type:"text",content:e},function(){return $("beforeDOMElementCreation",{content:e,params:a}),nn({content:e,transform:l(l({},N),o),title:s,extra:{attributes:m,styles:h,classes:["".concat(v.familyPrefix,"-layers-text")].concat(lt(d))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(wn){var d=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/d,f=u.height/d}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,nn({content:e.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},ya=new RegExp('"',"ug"),ln=[1105920,1112319];function ka(t){var n=t.replace(ya,""),e=Me(n,0),a=e>=ln[0]&&e<=ln[1],r=n.length===2?n[0]===n[1]:!1;return{value:xt(r?n[0]:n),isSecondary:a||r}}function un(t,n){var e="".concat(se).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var o=X(t.children),i=o.filter(function(C){return C.getAttribute(wt)===n})[0],s=D.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(me),d=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?it[f[2].toLowerCase()]:de[d],h=ka(m),x=h.value,A=h.isSecondary,O=f[0].startsWith("FontAwesome"),c=jt(b,x),p=c;if(O){var g=Ye(x);g.iconName&&g.prefix&&(c=g.iconName,b=g.prefix)}if(c&&!A&&(!i||i.getAttribute(Mt)!==b||i.getAttribute(zt)!==p)){t.setAttribute(e,p),i&&t.removeChild(i);var w=ua(),k=w.extra;k.attributes[wt]=n,Ct(c,b).then(function(C){var I=$t(l(l({},w),{},{icons:{main:C,mask:Yt()},prefix:b,iconName:p,extra:k,watchable:!0})),K=y.createElement("svg");n==="::before"?t.insertBefore(K,t.firstChild):t.appendChild(K),K.outerHTML=I.map(function(U){return J(U)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function wa(t){return Promise.all([un(t,"::before"),un(t,"::after")])}function xa(t){return t.parentNode!==document.head&&!~le.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function cn(t){if(L)return new Promise(function(n,e){var a=X(t.querySelectorAll("*")).filter(xa).map(wa),r=Ut.begin("searchPseudoElements");Bn(),Promise.all(a).then(function(){r(),Nt(),n()}).catch(function(){r(),Nt(),e()})})}var Aa={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=cn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?y:a;v.searchPseudoElements&&cn(r)}}},mn=!1,Oa={mixout:function(){return{dom:{unwatch:function(){Bn(),mn=!0}}}},hooks:function(){return{bootstrap:function(){on(Ot("mutationObserverCallbacks",{}))},noAuto:function(){oa()},watch:function(e){var a=e.observeMutationsRoot;mn?Nt():on(Ot("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},dn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Sa={mixout:function(){return{parse:{transform:function(e){return dn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=dn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(d," ").concat(u)},b={transform:"translate(".concat(i/2*-1," -256)")},h={outer:s,inner:m,path:b};return{tag:"g",attributes:l({},h.outer),children:[{tag:"g",attributes:l({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:l(l({},a.icon.attributes),h.path)}]}]}}}},gt={x:0,y:0,width:"100%",height:"100%"};function vn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Ea(t){return t.tag==="g"?t.children:[t]}var Ca={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?mt(r.split(" ").map(function(i){return i.trim()})):Yt();return o.prefix||(o.prefix=F()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,f=e.transform,d=o.width,u=o.icon,m=i.width,b=i.icon,h=Se({transform:f,containerWidth:m,iconWidth:d}),x={tag:"rect",attributes:l(l({},gt),{},{fill:"white"})},A=u.children?{children:u.children.map(vn)}:{},O={tag:"g",attributes:l({},h.inner),children:[vn(l({tag:u.tag,attributes:l(l({},u.attributes),h.path)},A))]},c={tag:"g",attributes:l({},h.outer),children:[O]},p="mask-".concat(s||Z()),g="clip-".concat(s||Z()),w={tag:"mask",attributes:l(l({},gt),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,c]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:Ea(b)},w]};return a.push(k,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(p,")")},gt)}),{children:a,attributes:r}}}},Pa={provides:function(n){var e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Na={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},Ia=[Pe,pa,ba,ga,ha,Aa,Oa,Sa,Ca,Pa,Na];Be(Ia,{mixoutsTo:E});E.noAuto;E.config;E.library;E.dom;var It=E.parse;E.findIconDefinition;E.toHtml;var Ta=E.icon;E.layer;E.text;E.counter;function pn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function T(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?pn(Object(e),!0).forEach(function(a){S(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):pn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function ft(t){return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ft(t)}function S(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function _a(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function Ma(t,n){if(t==null)return{};var e=_a(t,n),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}var za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Hn={exports:{}};(function(t){(function(n){var e=function(c,p,g){if(!d(p)||m(p)||b(p)||h(p)||f(p))return p;var w,k=0,C=0;if(u(p))for(w=[],C=p.length;k<C;k++)w.push(e(c,p[k],g));else{w={};for(var I in p)Object.prototype.hasOwnProperty.call(p,I)&&(w[c(I,g)]=e(c,p[I],g))}return w},a=function(c,p){p=p||{};var g=p.separator||"_",w=p.split||/(?=[A-Z])/;return c.split(w).join(g)},r=function(c){return x(c)?c:(c=c.replace(/[\-_\s]+(.)?/g,function(p,g){return g?g.toUpperCase():""}),c.substr(0,1).toLowerCase()+c.substr(1))},o=function(c){var p=r(c);return p.substr(0,1).toUpperCase()+p.substr(1)},i=function(c,p){return a(c,p).toLowerCase()},s=Object.prototype.toString,f=function(c){return typeof c=="function"},d=function(c){return c===Object(c)},u=function(c){return s.call(c)=="[object Array]"},m=function(c){return s.call(c)=="[object Date]"},b=function(c){return s.call(c)=="[object RegExp]"},h=function(c){return s.call(c)=="[object Boolean]"},x=function(c){return c=c-0,c===c},A=function(c,p){var g=p&&"process"in p?p.process:p;return typeof g!="function"?c:function(w,k){return g(w,c,k)}},O={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(c,p){return e(A(r,p),c)},decamelizeKeys:function(c,p){return e(A(i,p),c,p)},pascalizeKeys:function(c,p){return e(A(o,p),c)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:n.humps=O})(za)})(Hn);var La=Hn.exports,Ra=["class","style"];function Da(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=La.camelize(e.slice(0,a)),o=e.slice(a+1).trim();return n[r]=o,n},{})}function Fa(t){return t.split(/\s+/).reduce(function(n,e){return n[e]=!0,n},{})}function Gn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return Gn(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,d){var u=t.attributes[d];switch(d){case"class":f.class=Fa(u);break;case"style":f.style=Da(u);break;default:f.attrs[d]=u}return f},{attrs:{},class:{},style:{}});e.class;var o=e.style,i=o===void 0?{}:o,s=Ma(e,Ra);return qn(t.tag,T(T(T({},n),{},{class:r.class,style:T(T({},r.style),i)},r.attrs),s),a)}var Xn=!1;try{Xn=!0}catch{}function ja(){if(!Xn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ht(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?S({},t,n):{}}function Ya(t){var n,e=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},S(n,"fa-".concat(t.size),t.size!==null),S(n,"fa-rotate-".concat(t.rotation),t.rotation!==null),S(n,"fa-pull-".concat(t.pull),t.pull!==null),S(n,"fa-swap-opacity",t.swapOpacity),S(n,"fa-bounce",t.bounce),S(n,"fa-shake",t.shake),S(n,"fa-beat",t.beat),S(n,"fa-fade",t.fade),S(n,"fa-beat-fade",t.beatFade),S(n,"fa-flash",t.flash),S(n,"fa-spin-pulse",t.spinPulse),S(n,"fa-spin-reverse",t.spinReverse),n);return Object.keys(e).map(function(a){return e[a]?a:null}).filter(function(a){return a})}function bn(t){if(t&&ft(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(It.icon)return It.icon(t);if(t===null)return null;if(ft(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Ua=Kn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,e){var a=e.attrs,r=B(function(){return bn(n.icon)}),o=B(function(){return ht("classes",Ya(n))}),i=B(function(){return ht("transform",typeof n.transform=="string"?It.transform(n.transform):n.transform)}),s=B(function(){return ht("mask",bn(n.mask))}),f=B(function(){return Ta(r.value,T(T(T(T({},o.value),i.value),s.value),{},{symbol:n.symbol,title:n.title}))});Vn(f,function(u){if(!u)return ja("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var d=B(function(){return f.value?Gn(f.value.abstract[0],{},a):null});return function(){return d.value}}}),Ba={prefix:"fas",iconName:"chevron-up",icon:[448,512,[],"f077","M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Wa={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Ha={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Ga={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]};export{Ua as F,Ga as a,Ha as b,Wa as c,Ba as f};
