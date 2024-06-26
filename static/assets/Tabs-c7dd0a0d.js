import{d as J,bb as ve,x as W,bc as ct,bd as bt,h as b,be as ft,bf as q,bg as pt,n as ut,o as Re,t as vt,e as Y,ad as ht,M as gt,N as xt,bh as mt,b4 as yt,bi as wt,a as n,b as i,c as C,k as L,bj as St,u as Ct,g as Te,bk as he,b9 as ee,K as Rt,av as te,L as Tt,J as H,bl as zt,z as $t,i as j,bm as G,j as Pt,m as ge,b7 as xe,bn as Wt,Q as K,P as ae,a6 as _t,aP as Lt,bo as At,ba as Bt}from"./index-1319d715.js";import{A as Et}from"./Add-d3888378.js";const kt=ve(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[ve("&::-webkit-scrollbar",{width:0,height:0})]),jt=J({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=W(null);function r(l){!(l.currentTarget.offsetWidth<l.currentTarget.scrollWidth)||l.deltaY===0||(l.currentTarget.scrollLeft+=l.deltaY+l.deltaX,l.preventDefault())}const d=ct();return kt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:bt,ssr:d}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...l){var h;(h=e.value)===null||h===void 0||h.scrollTo(...l)}})},render(){return b("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var It=/\s/;function Ot(e){for(var r=e.length;r--&&It.test(e.charAt(r)););return r}var Ft=/^\s+/;function Ht(e){return e&&e.slice(0,Ot(e)+1).replace(Ft,"")}var me=0/0,Mt=/^[-+]0x[0-9a-f]+$/i,Nt=/^0b[01]+$/i,Dt=/^0o[0-7]+$/i,Vt=parseInt;function ye(e){if(typeof e=="number")return e;if(ft(e))return me;if(q(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=q(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Ht(e);var d=Nt.test(e);return d||Dt.test(e)?Vt(e.slice(2),d?2:8):Mt.test(e)?me:+e}var Ut=function(){return pt.Date.now()};const re=Ut;var Xt="Expected a function",Gt=Math.max,Kt=Math.min;function Yt(e,r,d){var u,l,h,v,f,g,x=0,y=!1,w=!1,m=!0;if(typeof e!="function")throw new TypeError(Xt);r=ye(r)||0,q(d)&&(y=!!d.leading,w="maxWait"in d,h=w?Gt(ye(d.maxWait)||0,r):h,m="trailing"in d?!!d.trailing:m);function S(c){var z=u,I=l;return u=l=void 0,x=c,v=e.apply(I,z),v}function R(c){return x=c,f=setTimeout(A,r),y?S(c):v}function _(c){var z=c-g,I=c-x,F=r-z;return w?Kt(F,h-I):F}function $(c){var z=c-g,I=c-x;return g===void 0||z>=r||z<0||w&&I>=h}function A(){var c=re();if($(c))return T(c);f=setTimeout(A,_(c))}function T(c){return f=void 0,m&&u?S(c):(u=l=void 0,v)}function B(){f!==void 0&&clearTimeout(f),x=0,u=g=l=f=void 0}function k(){return f===void 0?v:T(re())}function p(){var c=re(),z=$(c);if(u=arguments,l=this,g=c,z){if(f===void 0)return R(g);if(w)return clearTimeout(f),f=setTimeout(A,r),S(g)}return f===void 0&&(f=setTimeout(A,r)),v}return p.cancel=B,p.flush=k,p}var qt="Expected a function";function ne(e,r,d){var u=!0,l=!0;if(typeof e!="function")throw new TypeError(qt);return q(d)&&(u="leading"in d?!!d.leading:u,l="trailing"in d?!!d.trailing:l),Yt(e,r,{leading:u,maxWait:r,trailing:l})}const se=ut("n-tabs"),ze={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},aa=J({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ze,setup(e){const r=Re(se,null);return r||vt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:r.paneStyleRef,class:r.paneClassRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){return b("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Jt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},wt(ze,["displayDirective"])),ie=J({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Jt,setup(e){const{mergedClsPrefixRef:r,valueRef:d,typeRef:u,closableRef:l,tabStyleRef:h,tabChangeIdRef:v,onBeforeLeaveRef:f,triggerRef:g,handleAdd:x,activateTab:y,handleClose:w}=Re(se);return{trigger:g,mergedClosable:Y(()=>{if(e.internalAddable)return!1;const{closable:m}=e;return m===void 0?l.value:m}),style:h,clsPrefix:r,value:d,type:u,handleClose(m){m.stopPropagation(),!e.disabled&&w(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){x();return}const{name:m}=e,S=++v.id;if(m!==d.value){const{value:R}=f;R?Promise.resolve(R(e.name,d.value)).then(_=>{_&&v.id===S&&y(m)}):y(m)}}}},render(){const{internalAddable:e,clsPrefix:r,name:d,disabled:u,label:l,tab:h,value:v,mergedClosable:f,style:g,trigger:x,$slots:{default:y}}=this,w=l!=null?l:h;return b("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?b("div",{class:`${r}-tabs-tab-pad`}):null,b("div",Object.assign({key:d,"data-name":d,"data-disabled":u?!0:void 0},ht({class:[`${r}-tabs-tab`,v===d&&`${r}-tabs-tab--active`,u&&`${r}-tabs-tab--disabled`,f&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`],onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?void 0:g},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),b("span",{class:`${r}-tabs-tab__label`},e?b(gt,null,b("div",{class:`${r}-tabs-tab__height-placeholder`}," "),b(xt,{clsPrefix:r},{default:()=>b(Et,null)})):y?y():typeof w=="object"?w:mt(w!=null?w:d)),f&&this.type==="card"?b(yt,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:u}):null))}}),Qt=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[i("segment-type",[n("tabs-rail",[C("&.transition-disabled","color: red;",[n("tabs-tab",`
 transition: none;
 `)])])]),i("top",[n("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),i("left",[n("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),i("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),i("right",`
 flex-direction: row-reverse;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),n("tabs-bar",`
 left: 0;
 `)]),i("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),i("flex",[n("tabs-nav",{width:"100%"},[n("tabs-wrapper",{width:"100%"},[n("tabs-tab",{marginRight:0})])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[L("prefix, suffix",`
 display: flex;
 align-items: center;
 `),L("prefix","padding-right: 16px;"),L("suffix","padding-left: 16px;")]),i("top, bottom",[n("tabs-nav-scroll-wrapper",[C("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),C("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),i("shadow-start",[C("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[C("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),i("left, right",[n("tabs-nav-scroll-wrapper",[C("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),C("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),i("shadow-start",[C("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[C("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[C("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),C("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[i("disabled",{cursor:"not-allowed"}),L("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),L("label",`
 display: flex;
 align-items: center;
 `)]),n("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[C("&.transition-disabled",`
 transition: none;
 `),i("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[C("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),C("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),C("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),C("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),C("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),i("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[C("&:hover",{color:"var(--n-tab-text-color-hover)"}),i("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),i("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[i("line-type",[i("top",[L("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 bottom: -1px;
 `)]),i("left",[L("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 right: -1px;
 `)]),i("right",[L("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 left: -1px;
 `)]),i("bottom",[L("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 top: -1px;
 `)]),L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-bar",`
 border-radius: 0;
 `)]),i("card-type",[L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[i("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[L("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),St("disabled",[C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),i("closable","padding-right: 8px;"),i("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),i("disabled","color: var(--n-tab-text-color-disabled);")]),n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),i("left, right",[n("tabs-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),i("top",[i("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-bottom: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),i("left",[i("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-right: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),i("right",[i("card-type",[n("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-left: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),i("bottom",[i("card-type",[n("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[i("active",`
 border-top: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Zt=Object.assign(Object.assign({},Te.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ra=J({name:"Tabs",props:Zt,setup(e,{slots:r}){var d,u,l,h;const{mergedClsPrefixRef:v,inlineThemeDisabled:f}=Ct(e),g=Te("Tabs","-tabs",Qt,Wt,e,v),x=W(null),y=W(null),w=W(null),m=W(null),S=W(null),R=W(!0),_=W(!0),$=he(e,["labelSize","size"]),A=he(e,["activeName","value"]),T=W((u=(d=A.value)!==null&&d!==void 0?d:e.defaultValue)!==null&&u!==void 0?u:r.default?(h=(l=ee(r.default())[0])===null||l===void 0?void 0:l.props)===null||h===void 0?void 0:h.name:null),B=Rt(A,T),k={id:0},p=Y(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});te(B,()=>{k.id=0,F(),le()});function c(){var t;const{value:a}=B;return a===null?null:(t=x.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function z(t){if(e.type==="card")return;const{value:a}=y;if(a&&t){const o=`${v.value}-tabs-bar--disabled`,{barWidth:s,placement:P}=e;if(t.dataset.disabled==="true"?a.classList.add(o):a.classList.remove(o),["top","bottom"].includes(P)){if(I(["top","maxHeight","height"]),typeof s=="number"&&t.offsetWidth>=s){const E=Math.floor((t.offsetWidth-s)/2)+t.offsetLeft;a.style.left=`${E}px`,a.style.maxWidth=`${s}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(I(["left","maxWidth","width"]),typeof s=="number"&&t.offsetHeight>=s){const E=Math.floor((t.offsetHeight-s)/2)+t.offsetTop;a.style.top=`${E}px`,a.style.maxHeight=`${s}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function I(t){const{value:a}=y;if(a)for(const o of t)a.style[o]=""}function F(){if(e.type==="card")return;const t=c();t&&z(t)}function le(t){var a;const o=(a=S.value)===null||a===void 0?void 0:a.$el;if(!o)return;const s=c();if(!s)return;const{scrollLeft:P,offsetWidth:E}=o,{offsetLeft:N,offsetWidth:U}=s;P>N?o.scrollTo({top:0,left:N,behavior:"smooth"}):N+U>P+E&&o.scrollTo({top:0,left:N+U-E,behavior:"smooth"})}const D=W(null);let Q=0,O=null;function $e(t){const a=D.value;if(a){Q=t.getBoundingClientRect().height;const o=`${Q}px`,s=()=>{a.style.height=o,a.style.maxHeight=o};O?(s(),O(),O=null):O=s}}function Pe(t){const a=D.value;if(a){const o=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(Q,o)}px`};O?(O(),O=null,s()):O=s}}function We(){const t=D.value;t&&(t.style.maxHeight="",t.style.height="")}const de={value:[]},ce=W("next");function _e(t){const a=B.value;let o="next";for(const s of de.value){if(s===a)break;if(s===t){o="prev";break}}ce.value=o,Le(t)}function Le(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":s}=e;a&&K(a,t),o&&K(o,t),s&&K(s,t),T.value=t}function Ae(t){const{onClose:a}=e;a&&K(a,t)}function be(){const{value:t}=y;if(!t)return;const a="transition-disabled";t.classList.add(a),F(),t.classList.remove(a)}let fe=0;function Be(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||fe===t.contentRect.width)return;fe=t.contentRect.width;const{type:o}=e;(o==="line"||o==="bar")&&be(),o!=="segment"&&Z((a=S.value)===null||a===void 0?void 0:a.$el)}const Ee=ne(Be,64);te([()=>e.justifyContent,()=>e.size],()=>{ae(()=>{const{type:t}=e;(t==="line"||t==="bar")&&be()})});const V=W(!1);function ke(t){var a;const{target:o,contentRect:{width:s}}=t,P=o.parentElement.offsetWidth;if(!V.value)P<s&&(V.value=!0);else{const{value:E}=m;if(!E)return;P-s>E.$el.offsetWidth&&(V.value=!1)}Z((a=S.value)===null||a===void 0?void 0:a.$el)}const je=ne(ke,64);function Ie(){const{onAdd:t}=e;t&&t(),ae(()=>{const a=c(),{value:o}=S;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function Z(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:o,scrollWidth:s,offsetWidth:P}=t;R.value=o<=0,_.value=o+P>=s}else{const{scrollTop:o,scrollHeight:s,offsetHeight:P}=t;R.value=o<=0,_.value=o+P>=s}}const Oe=ne(t=>{Z(t.target)},64);Tt(se,{triggerRef:H(e,"trigger"),tabStyleRef:H(e,"tabStyle"),paneClassRef:H(e,"paneClass"),paneStyleRef:H(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:H(e,"type"),closableRef:H(e,"closable"),valueRef:B,tabChangeIdRef:k,onBeforeLeaveRef:H(e,"onBeforeLeave"),activateTab:_e,handleClose:Ae,handleAdd:Ie}),zt(()=>{F(),le()}),$t(()=>{const{value:t}=w;if(!t)return;const{value:a}=v,o=`${a}-tabs-nav-scroll-wrapper--shadow-start`,s=`${a}-tabs-nav-scroll-wrapper--shadow-end`;R.value?t.classList.remove(o):t.classList.add(o),_.value?t.classList.remove(s):t.classList.add(s)});const pe=W(null);te(B,()=>{if(e.type==="segment"){const t=pe.value;t&&ae(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Fe={syncBarPosition:()=>{F()}},ue=Y(()=>{const{value:t}=$,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${o}`,{self:{barColor:P,closeIconColor:E,closeIconColorHover:N,closeIconColorPressed:U,tabColor:He,tabBorderColor:Me,paneTextColor:Ne,tabFontWeight:De,tabBorderRadius:Ve,tabFontWeightActive:Ue,colorSegment:Xe,fontWeightStrong:Ge,tabColorSegment:Ke,closeSize:Ye,closeIconSize:qe,closeColorHover:Je,closeColorPressed:Qe,closeBorderRadius:Ze,[j("panePadding",t)]:X,[j("tabPadding",s)]:et,[j("tabPaddingVertical",s)]:tt,[j("tabGap",s)]:at,[j("tabGap",`${s}Vertical`)]:rt,[j("tabTextColor",a)]:nt,[j("tabTextColorActive",a)]:ot,[j("tabTextColorHover",a)]:it,[j("tabTextColorDisabled",a)]:st,[j("tabFontSize",t)]:lt},common:{cubicBezierEaseInOut:dt}}=g.value;return{"--n-bezier":dt,"--n-color-segment":Xe,"--n-bar-color":P,"--n-tab-font-size":lt,"--n-tab-text-color":nt,"--n-tab-text-color-active":ot,"--n-tab-text-color-disabled":st,"--n-tab-text-color-hover":it,"--n-pane-text-color":Ne,"--n-tab-border-color":Me,"--n-tab-border-radius":Ve,"--n-close-size":Ye,"--n-close-icon-size":qe,"--n-close-color-hover":Je,"--n-close-color-pressed":Qe,"--n-close-border-radius":Ze,"--n-close-icon-color":E,"--n-close-icon-color-hover":N,"--n-close-icon-color-pressed":U,"--n-tab-color":He,"--n-tab-font-weight":De,"--n-tab-font-weight-active":Ue,"--n-tab-padding":et,"--n-tab-padding-vertical":tt,"--n-tab-gap":at,"--n-tab-gap-vertical":rt,"--n-pane-padding-left":G(X,"left"),"--n-pane-padding-right":G(X,"right"),"--n-pane-padding-top":G(X,"top"),"--n-pane-padding-bottom":G(X,"bottom"),"--n-font-weight-strong":Ge,"--n-tab-color-segment":Ke}}),M=f?Pt("tabs",Y(()=>`${$.value[0]}${e.type[0]}`),ue,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:B,renderedNames:new Set,tabsRailElRef:pe,tabsPaneWrapperRef:D,tabsElRef:x,barElRef:y,addTabInstRef:m,xScrollInstRef:S,scrollWrapperElRef:w,addTabFixed:V,tabWrapperStyle:p,handleNavResize:Ee,mergedSize:$,handleScroll:Oe,handleTabsResize:je,cssVars:f?void 0:ue,themeClass:M==null?void 0:M.themeClass,animationDirection:ce,renderNameListRef:de,onAnimationBeforeLeave:$e,onAnimationEnter:Pe,onAnimationAfterEnter:We,onRender:M==null?void 0:M.onRender},Fe)},render(){const{mergedClsPrefix:e,type:r,placement:d,addTabFixed:u,addable:l,mergedSize:h,renderNameListRef:v,onRender:f,paneWrapperClass:g,paneWrapperStyle:x,$slots:{default:y,prefix:w,suffix:m}}=this;f==null||f();const S=y?ee(y()).filter(p=>p.type.__TAB_PANE__===!0):[],R=y?ee(y()).filter(p=>p.type.__TAB__===!0):[],_=!R.length,$=r==="card",A=r==="segment",T=!$&&!A&&this.justifyContent;v.value=[];const B=()=>{const p=b("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},T?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),_?S.map((c,z)=>(v.value.push(c.props.name),oe(b(ie,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0&&(!T||T==="center"||T==="start"||T==="end")}),c.children?{default:c.children.tab}:void 0)))):R.map((c,z)=>(v.value.push(c.props.name),oe(z!==0&&!T?Ce(c):c))),!u&&l&&$?Se(l,(_?S.length:R.length)!==0):null,T?null:b("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return b("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},$&&l?b(xe,{onResize:this.handleTabsResize},{default:()=>p}):p,$?b("div",{class:`${e}-tabs-pad`}):null,$?null:b("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},k=A?"top":d;return b("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${h}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${k}`],style:this.cssVars},b("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${k}`,`${e}-tabs-nav`]},ge(w,p=>p&&b("div",{class:`${e}-tabs-nav__prefix`},p)),A?b("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},_?S.map((p,c)=>(v.value.push(p.props.name),b(ie,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:c!==0}),p.children?{default:p.children.tab}:void 0))):R.map((p,c)=>(v.value.push(p.props.name),c===0?p:Ce(p)))):b(xe,{onResize:this.handleNavResize},{default:()=>b("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(k)?b(jt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:B}):b("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},B()))}),u&&l&&$?Se(l,!0):null,ge(m,p=>p&&b("div",{class:`${e}-tabs-nav__suffix`},p))),_&&(this.animated&&(k==="top"||k==="bottom")?b("div",{ref:"tabsPaneWrapperRef",style:x,class:[`${e}-tabs-pane-wrapper`,g]},we(S,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):we(S,this.mergedValue,this.renderedNames)))}});function we(e,r,d,u,l,h,v){const f=[];return e.forEach(g=>{const{name:x,displayDirective:y,"display-directive":w}=g.props,m=R=>y===R||w===R,S=r===x;if(g.key!==void 0&&(g.key=x),S||m("show")||m("show:lazy")&&d.has(x)){d.has(x)||d.add(x);const R=!m("if");f.push(R?_t(g,[[Lt,S]]):g)}}),v?b(At,{name:`${v}-transition`,onBeforeLeave:u,onEnter:l,onAfterEnter:h},{default:()=>f}):f}function Se(e,r){return b(ie,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function Ce(e){const r=Bt(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function oe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{aa as N,ra as a};
