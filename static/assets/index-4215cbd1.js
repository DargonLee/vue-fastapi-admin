var ae=(e,t,r)=>new Promise((a,o)=>{var n=u=>{try{i(r.next(u))}catch(m){o(m)}},s=u=>{try{i(r.throw(u))}catch(m){o(m)}},i=u=>u.done?a(u.value):Promise.resolve(u.value).then(n,s);i((r=r.apply(e,t)).next())});import{aP as J,aQ as je,e as D,x as R,aR as $e,d as K,o as ce,aS as fe,u as he,l as Le,z as Ge,av as He,aH as Xe,aT as qe,L as W,aU as Ve,aV as Ye,aW as We,a6 as j,h as b,aX as Ke,aG as Re,ad as ue,aY as ze,c as y,aZ as te,a as O,b as I,k as H,a_ as Qe,aC as Ze,g as Ce,a$ as Je,K as pe,J as ee,f as ve,b0 as et,j as tt,b1 as rt,b2 as ot,Q as G,b3 as at,t as nt,b4 as st,n as it,b5 as lt,b6 as X,y as Q,Y as xe,q as dt,b7 as ut,b8 as ct,b9 as ft,ba as me,X as ht,a8 as P,Z as ne,_ as se,$ as x,a2 as v,A as q,a1 as $,a7 as ie,a9 as pt,an as vt,aa as mt,aO as bt,ab as le}from"./index-1319d715.js";import{_ as gt}from"./CommonPage-1b7131ea.js";import{_ as yt}from"./QueryBarItem-8c7c36d3.js";import{u as wt,_ as St,N as $t}from"./useCRUD-32249973.js";import{g as Rt,a as zt,_ as Ct}from"./CrudTable-1b72018f.js";import{N as be}from"./Tree-af06686b.js";import{N as Z}from"./Input-80da2416.js";import{N as xt,a as ge}from"./FormItem-a3720c19.js";import{a as kt,N as ye}from"./Tabs-c7dd0a0d.js";import"./AppPage-2c648aa5.js";import"./Add-d3888378.js";function _t(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(r=>{if(r==="")return;const[a,o]=r.split(":");o===void 0?t[""]=a:t[a]=o}),t}function V(e,t){var r;if(e==null)return;const a=_t(e);if(t===void 0)return a[""];if(typeof t=="string")return(r=a[t])!==null&&r!==void 0?r:a[""];if(Array.isArray(t)){for(let o=t.length-1;o>=0;--o){const n=t[o];if(n in a)return a[n]}return a[""]}else{let o,n=-1;return Object.keys(a).forEach(s=>{const i=Number(s);!Number.isNaN(i)&&t>=i&&i>=n&&(n=i,o=a[s])}),o}}function Bt(e){var t;const r=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:a})=>a===J);return!!(r&&r.value===!1)}const Et={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function Nt(e){return`(min-width: ${e}px)`}const Y={};function Tt(e=Et){if(!je)return D(()=>[]);if(typeof window.matchMedia!="function")return D(()=>[]);const t=R({}),r=Object.keys(e),a=(o,n)=>{o.matches?t.value[n]=!0:t.value[n]=!1};return r.forEach(o=>{const n=e[o];let s,i;Y[n]===void 0?(s=window.matchMedia(Nt(n)),s.addEventListener?s.addEventListener("change",u=>{i.forEach(m=>{m(u,o)})}):s.addListener&&s.addListener(u=>{i.forEach(m=>{m(u,o)})}),i=new Set,Y[n]={mql:s,cbs:i}):(s=Y[n].mql,i=Y[n].cbs),i.add(a),s.matches&&i.forEach(u=>{u(s,o)})}),$e(()=>{r.forEach(o=>{const{cbs:n}=Y[e[o]];n.has(a)&&n.delete(a)})}),D(()=>{const{value:o}=t;return r.filter(n=>o[n])})}const Dt=K({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=R(!!e.show),r=R(null),a=ce(fe);let o=0,n="",s=null;const i=R(!1),u=R(!1),m=D(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:z,mergedRtlRef:M}=he(e),k=Le("Drawer",M,z),A=h=>{u.value=!0,o=m.value?h.clientY:h.clientX,n=document.body.style.cursor,document.body.style.cursor=m.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",f),document.body.addEventListener("mouseleave",S),document.body.addEventListener("mouseup",B)},N=()=>{s!==null&&(window.clearTimeout(s),s=null),u.value?i.value=!0:s=window.setTimeout(()=>{i.value=!0},300)},C=()=>{s!==null&&(window.clearTimeout(s),s=null),i.value=!1},{doUpdateHeight:T,doUpdateWidth:w}=a,f=h=>{var E,p;if(u.value)if(m.value){let d=((E=r.value)===null||E===void 0?void 0:E.offsetHeight)||0;const c=o-h.clientY;d+=e.placement==="bottom"?c:-c,T(d),o=h.clientY}else{let d=((p=r.value)===null||p===void 0?void 0:p.offsetWidth)||0;const c=o-h.clientX;d+=e.placement==="right"?c:-c,w(d),o=h.clientX}},B=()=>{u.value&&(o=0,u.value=!1,document.body.style.cursor=n,document.body.removeEventListener("mousemove",f),document.body.removeEventListener("mouseup",B),document.body.removeEventListener("mouseleave",S))},S=B;Ge(()=>{e.show&&(t.value=!0)}),He(()=>e.show,h=>{h||B()}),$e(()=>{B()});const l=D(()=>{const{show:h}=e,E=[[J,h]];return e.showMask||E.push([Xe,e.onClickoutside,void 0,{capture:!0}]),E});function g(){var h;t.value=!1,(h=e.onAfterLeave)===null||h===void 0||h.call(e)}return qe(D(()=>e.blockScroll&&t.value)),W(Ve,r),W(Ye,null),W(We,null),{bodyRef:r,rtlEnabled:k,mergedClsPrefix:a.mergedClsPrefixRef,isMounted:a.isMountedRef,mergedTheme:a.mergedThemeRef,displayed:t,transitionName:D(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:g,bodyDirectives:l,handleMousedownResizeTrigger:A,handleMouseenterResizeTrigger:N,handleMouseleaveResizeTrigger:C,isDragging:u,isHoverOnResizeTrigger:i}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?j(b("div",{role:"none"},b(Ke,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>b(Re,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>j(b("div",ue(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?b("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?b("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):b(ze,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[J,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Mt,cubicBezierEaseOut:Ot}=te;function At({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[y(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Mt}`}),y(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ot}`}),y(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),y(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),y(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),y(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Ft,cubicBezierEaseOut:It}=te;function Pt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[y(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ft}`}),y(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${It}`}),y(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),y(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),y(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),y(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Ut,cubicBezierEaseOut:jt}=te;function Lt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[y(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ut}`}),y(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${jt}`}),y(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),y(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),y(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),y(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Gt,cubicBezierEaseOut:Ht}=te;function Xt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[y(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Gt}`}),y(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ht}`}),y(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),y(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),y(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),y(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const qt=y([O("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[At(),Pt(),Lt(),Xt(),I("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),I("native-scrollbar",[O("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),H("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[I("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),O("drawer-content-wrapper",`
 box-sizing: border-box;
 `),O("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[I("native-scrollbar",[O("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),O("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),O("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),O("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[H("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),O("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),I("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[H("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),I("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[H("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),I("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[H("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),I("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[H("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),y("body",[y(">",[O("drawer-container",{position:"fixed"})])]),O("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[y("> *",{pointerEvents:"all"})]),O("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[I("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Qe({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Vt=Object.assign(Object.assign({},Ce.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Yt=K({name:"Drawer",inheritAttrs:!1,props:Vt,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:a}=he(e),o=Ze(),n=Ce("Drawer","-drawer",qt,Je,e,t),s=R(e.defaultWidth),i=R(e.defaultHeight),u=pe(ee(e,"width"),s),m=pe(ee(e,"height"),i),z=D(()=>{const{placement:l}=e;return l==="top"||l==="bottom"?"":ve(u.value)}),M=D(()=>{const{placement:l}=e;return l==="left"||l==="right"?"":ve(m.value)}),k=l=>{const{onUpdateWidth:g,"onUpdate:width":h}=e;g&&G(g,l),h&&G(h,l),s.value=l},A=l=>{const{onUpdateHeight:g,"onUpdate:width":h}=e;g&&G(g,l),h&&G(h,l),i.value=l},N=D(()=>[{width:z.value,height:M.value},e.drawerStyle||""]);function C(l){const{onMaskClick:g,maskClosable:h}=e;h&&f(!1),g&&g(l)}const T=et();function w(l){var g;(g=e.onEsc)===null||g===void 0||g.call(e),e.show&&e.closeOnEsc&&at(l)&&!T.value&&f(!1)}function f(l){const{onHide:g,onUpdateShow:h,"onUpdate:show":E}=e;h&&G(h,l),E&&G(E,l),g&&!l&&G(g,l)}W(fe,{isMountedRef:o,mergedThemeRef:n,mergedClsPrefixRef:t,doUpdateShow:f,doUpdateHeight:A,doUpdateWidth:k});const B=D(()=>{const{common:{cubicBezierEaseInOut:l,cubicBezierEaseIn:g,cubicBezierEaseOut:h},self:{color:E,textColor:p,boxShadow:d,lineHeight:c,headerPadding:_,footerPadding:F,bodyPadding:U,titleFontSize:L,titleTextColor:re,titleFontWeight:oe,headerBorderBottom:Ee,footerBorderTop:Ne,closeIconColor:Te,closeIconColorHover:De,closeIconColorPressed:Me,closeColorHover:Oe,closeColorPressed:Ae,closeIconSize:Fe,closeSize:Ie,closeBorderRadius:Pe,resizableTriggerColorHover:Ue}}=n.value;return{"--n-line-height":c,"--n-color":E,"--n-text-color":p,"--n-box-shadow":d,"--n-bezier":l,"--n-bezier-out":h,"--n-bezier-in":g,"--n-header-padding":_,"--n-body-padding":U,"--n-footer-padding":F,"--n-title-text-color":re,"--n-title-font-size":L,"--n-title-font-weight":oe,"--n-header-border-bottom":Ee,"--n-footer-border-top":Ne,"--n-close-icon-color":Te,"--n-close-icon-color-hover":De,"--n-close-icon-color-pressed":Me,"--n-close-size":Ie,"--n-close-color-hover":Oe,"--n-close-color-pressed":Ae,"--n-close-icon-size":Fe,"--n-close-border-radius":Pe,"--n-resize-trigger-color-hover":Ue}}),S=a?tt("drawer",void 0,B,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:N,handleMaskClick:C,handleEsc:w,mergedTheme:n,cssVars:a?void 0:B,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,isMounted:o}},render(){const{mergedClsPrefix:e}=this;return b(ot,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),j(b("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?b(Re,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?b("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,b(Dt,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[rt,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Wt={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Kt=K({name:"DrawerContent",props:Wt,setup(){const e=ce(fe,null);e||nt("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:a,bodyStyle:o,bodyContentStyle:n,headerStyle:s,footerStyle:i,scrollbarProps:u,closable:m,$slots:z}=this;return b("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},z.header||e||m?b("div",{class:`${t}-drawer-header`,style:s,role:"none"},b("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},z.header!==void 0?z.header():e),m&&b(st,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?b("div",{class:`${t}-drawer-body`,style:o,role:"none"},b("div",{class:`${t}-drawer-body-content-wrapper`,style:n,role:"none"},z)):b(ze,Object.assign({themeOverrides:a.peerOverrides.Scrollbar,theme:a.peers.Scrollbar},u,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:n}),z),z.footer?b("div",{class:`${t}-drawer-footer`,style:i,role:"none"},z.footer()):null)}}),we=1,ke=it("n-grid"),_e=1,Qt={span:{type:[Number,String],default:_e},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},Se=K({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:Qt,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:r,overflowRef:a,layoutShiftDisabledRef:o}=ce(ke),n=lt();return{overflow:a,itemStyle:r,layoutShiftDisabled:o,mergedXGap:D(()=>X(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:s=_e,privateShow:i=!0,privateColStart:u=void 0,privateOffset:m=0}=n.vnode.props,{value:z}=t,M=X(z||0);return{display:i?"":"none",gridColumn:`${u!=null?u:`span ${s}`} / span ${s}`,marginLeft:m?`calc((100% - (${s} - 1) * ${M}) / ${s} * ${m} + ${M} * ${m})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:r,offset:a,mergedXGap:o}=this;return b("div",{style:{gridColumn:`span ${r} / span ${r}`,marginLeft:a?`calc((100% - (${r} - 1) * ${o}) / ${r} * ${a} + ${o} * ${a})`:""}},this.$slots)}return b("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),Zt={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Be=24,de="__ssr__",Jt={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Be},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},er=K({name:"Grid",inheritAttrs:!1,props:Jt,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:r}=he(e),a=/^\d+$/,o=R(void 0),n=Tt((r==null?void 0:r.value)||Zt),s=Q(()=>!!(e.itemResponsive||!a.test(e.cols.toString())||!a.test(e.xGap.toString())||!a.test(e.yGap.toString()))),i=D(()=>{if(s.value)return e.responsive==="self"?o.value:n.value}),u=Q(()=>{var w;return(w=Number(V(e.cols.toString(),i.value)))!==null&&w!==void 0?w:Be}),m=Q(()=>V(e.xGap.toString(),i.value)),z=Q(()=>V(e.yGap.toString(),i.value)),M=w=>{o.value=w.contentRect.width},k=w=>{ct(M,w)},A=R(!1),N=D(()=>{if(e.responsive==="self")return k}),C=R(!1),T=R();return xe(()=>{const{value:w}=T;w&&w.hasAttribute(de)&&(w.removeAttribute(de),C.value=!0)}),W(ke,{layoutShiftDisabledRef:ee(e,"layoutShiftDisabled"),isSsrRef:C,itemStyleRef:ee(e,"itemStyle"),xGapRef:m,overflowRef:A}),{isSsr:!dt,contentEl:T,mergedClsPrefix:t,style:D(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:X(e.xGap),rowGap:X(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${u.value}, minmax(0, 1fr))`,columnGap:X(m.value),rowGap:X(z.value)}),isResponsive:s,responsiveQuery:i,responsiveCols:u,handleResize:N,overflow:A}},render(){if(this.layoutShiftDisabled)return b("div",ue({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,r,a,o,n,s,i;this.overflow=!1;const u=ft(Rt(this)),m=[],{collapsed:z,collapsedRows:M,responsiveCols:k,responsiveQuery:A}=this;u.forEach(f=>{var B,S,l,g;if(((B=f==null?void 0:f.type)===null||B===void 0?void 0:B.__GRID_ITEM__)!==!0)return;if(Bt(f)){const p=me(f);p.props?p.props.privateShow=!1:p.props={privateShow:!1},m.push({child:p,rawChildSpan:0});return}f.dirs=((S=f.dirs)===null||S===void 0?void 0:S.filter(({dir:p})=>p!==J))||null;const h=me(f),E=Number((g=V((l=h.props)===null||l===void 0?void 0:l.span,A))!==null&&g!==void 0?g:we);E!==0&&m.push({child:h,rawChildSpan:E})});let N=0;const C=(t=m[m.length-1])===null||t===void 0?void 0:t.child;if(C!=null&&C.props){const f=(r=C.props)===null||r===void 0?void 0:r.suffix;f!==void 0&&f!==!1&&(N=(o=(a=C.props)===null||a===void 0?void 0:a.span)!==null&&o!==void 0?o:we,C.props.privateSpan=N,C.props.privateColStart=k+1-N,C.props.privateShow=(n=C.props.privateShow)!==null&&n!==void 0?n:!0)}let T=0,w=!1;for(const{child:f,rawChildSpan:B}of m){if(w&&(this.overflow=!0),!w){const S=Number((i=V((s=f.props)===null||s===void 0?void 0:s.offset,A))!==null&&i!==void 0?i:0),l=Math.min(B+S,k);if(f.props?(f.props.privateSpan=l,f.props.privateOffset=S):f.props={privateSpan:l,privateOffset:S},z){const g=T%k;l+g>k&&(T+=k-g),l+T+N>M*k?w=!0:T+=l}}w&&(f.props?f.props.privateShow!==!0&&(f.props.privateShow=!1):f.props={privateShow:!1})}return b("div",ue({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[de]:this.isSsr||void 0},this.$attrs),m.map(({child:f})=>f))};return this.isResponsive&&this.responsive==="self"?b(ut,{onResize:this.handleResize},{default:e}):e()}}),hr=Object.assign({name:"角色管理"},{__name:"index",setup(e){const t=R(null),r=R({}),a=ht("permission"),{modalVisible:o,modalAction:n,modalTitle:s,modalLoading:i,handleAdd:u,handleDelete:m,handleEdit:z,handleSave:M,modalForm:k,modalFormRef:A}=wt({name:"角色",initForm:{},doCreate:P.createRole,doDelete:P.deleteRole,doUpdate:P.updateRole,refresh:()=>{var p;return(p=t.value)==null?void 0:p.handleSearch()}}),N=R(""),C=R([]),T=R(!1),w=R([]),f=R(0),B=R([]),S=R([]),l=R([]);function g(p){const d=[],c={};return p.forEach(_=>{const F=_.tags,L=_.path.split("/").slice(0,-1).join("/"),re=F.charAt(0).toUpperCase()+F.slice(1),oe=_.method.toLowerCase()+_.path;L in c||(c[L]={unique_id:L,path:L,summary:re,children:[]}),c[L].children.push({id:_.id,path:_.path,method:_.method,summary:_.summary,unique_id:oe})}),d.push(...Object.values(c)),d}xe(()=>{var p;(p=t.value)==null||p.handleSearch()});const h=[{title:"角色名",key:"name",width:80,align:"center",ellipsis:{tooltip:!0},render(p){return b(mt,{type:"info"},{default:()=>p.name})}},{title:"角色描述",key:"desc",width:80,align:"center"},{title:"创建日期",key:"created_at",width:60,align:"center",render(p){return b("span",bt(p.created_at))}},{title:"操作",key:"actions",width:80,align:"center",fixed:"right",render(p){return[j(b(q,{size:"small",type:"primary",style:"margin-right: 8px;",onClick:()=>{z(p)}},{default:()=>"编辑",icon:le("material-symbols:edit-outline",{size:16})}),[[a,"post/api/v1/role/update"]]),b($t,{onPositiveClick:()=>m({role_id:p.id},!1),onNegativeClick:()=>{}},{trigger:()=>j(b(q,{size:"small",type:"error",style:"margin-right: 8px;"},{default:()=>"删除",icon:le("material-symbols:delete-outline",{size:16})}),[[a,"delete/api/v1/role/delete"]]),default:()=>b("div",{},"确定删除该角色吗?")}),j(b(q,{size:"small",type:"primary",onClick:()=>ae(this,null,function*(){try{const[d,c,_]=yield Promise.all([P.getMenus({page:1,page_size:9999}),P.getApis({page:1,page_size:9999}),P.getRoleAuthorized({id:p.id})]);C.value=d.data,B.value=g(c.data),w.value=_.data.menus.map(F=>F.id),S.value=_.data.apis.map(F=>F.method.toLowerCase()+F.path),T.value=!0,f.value=p.id}catch(d){console.error("Error loading data:",d)}})},{default:()=>"设置权限",icon:le("material-symbols:edit-outline",{size:16})}),[[a,"get/api/v1/role/authorized"]])]}}];function E(){return ae(this,null,function*(){const p=l.value.getCheckedData(),d=[];p&&p.options.forEach(U=>{U.children||d.push({path:U.path,method:U.method})});const{code:c,msg:_}=yield P.updateRoleAuthorized({id:f.value,menu_ids:w.value,api_infos:d});c===200?$message==null||$message.success("设置成功"):$message==null||$message.error(_);const F=yield P.getRoleAuthorized({id:f.value});w.value=F.data.menus.map(U=>U.id)})}return(p,d)=>(ne(),se(gt,{"show-footer":"",title:"角色列表"},{action:x(()=>[j((ne(),se(v(q),{type:"primary",onClick:v(u)},{default:x(()=>[$(zt,{icon:"material-symbols:add",size:18,class:"mr-5"}),ie("新建角色 ")]),_:1},8,["onClick"])),[[v(a),"post/api/v1/role/create"]])]),default:x(()=>[$(Ct,{ref_key:"$table",ref:t,"query-items":r.value,"onUpdate:queryItems":d[2]||(d[2]=c=>r.value=c),columns:h,"get-data":v(P).getRoleList},{queryBar:x(()=>[$(yt,{label:"角色名","label-width":50},{default:x(()=>[$(v(Z),{value:r.value.role_name,"onUpdate:value":d[0]||(d[0]=c=>r.value.role_name=c),clearable:"",type:"text",placeholder:"请输入角色名",onKeypress:d[1]||(d[1]=pt(c=>{var _;return(_=t.value)==null?void 0:_.handleSearch()},["enter"]))},null,8,["value"])]),_:1})]),_:1},8,["query-items","get-data"]),$(St,{visible:v(o),"onUpdate:visible":d[5]||(d[5]=c=>vt(o)?o.value=c:null),title:v(s),loading:v(i),onSave:v(M)},{default:x(()=>[$(v(xt),{ref_key:"modalFormRef",ref:A,"label-placement":"left","label-align":"left","label-width":80,model:v(k),disabled:v(n)==="view"},{default:x(()=>[$(v(ge),{label:"角色名",path:"name",rule:{required:!0,message:"请输入角色名称",trigger:["input","blur"]}},{default:x(()=>[$(v(Z),{value:v(k).name,"onUpdate:value":d[3]||(d[3]=c=>v(k).name=c),placeholder:"请输入角色名称"},null,8,["value"])]),_:1}),$(v(ge),{label:"角色描述",path:"desc"},{default:x(()=>[$(v(Z),{value:v(k).desc,"onUpdate:value":d[4]||(d[4]=c=>v(k).desc=c),placeholder:"请输入角色描述"},null,8,["value"])]),_:1})]),_:1},8,["model","disabled"])]),_:1},8,["visible","title","loading","onSave"]),$(v(Yt),{show:T.value,"onUpdate:show":d[9]||(d[9]=c=>T.value=c),placement:"right",width:500},{default:x(()=>[$(v(Kt),null,{header:x(()=>[ie(" 设置权限 ")]),default:x(()=>[$(v(er),{"x-gap":"24",cols:"12"},{default:x(()=>[$(v(Se),{span:"8"},{default:x(()=>[$(v(Z),{value:N.value,"onUpdate:value":d[6]||(d[6]=c=>N.value=c),type:"text",placeholder:"筛选",style:{"flex-grow":"1"}},null,8,["value"])]),_:1}),$(v(Se),{offset:"2"},{default:x(()=>[j((ne(),se(v(q),{type:"info",onClick:E},{default:x(()=>[ie("确定")]),_:1})),[[v(a),"post/api/v1/role/authorized"]])]),_:1})]),_:1}),$(v(kt),null,{default:x(()=>[$(v(ye),{name:"menu",tab:"菜单权限","display-directive":"show"},{default:x(()=>[$(v(be),{data:C.value,"checked-keys":w.value,pattern:N.value,"show-irrelevant-nodes":!1,"key-field":"id","label-field":"name",checkable:"","default-expand-all":!0,"block-line":!0,selectable:!1,"onUpdate:checkedKeys":d[7]||(d[7]=c=>w.value=c)},null,8,["data","checked-keys","pattern"])]),_:1}),$(v(ye),{name:"resource",tab:"接口权限","display-directive":"show"},{default:x(()=>[$(v(be),{ref_key:"apiTree",ref:l,data:B.value,"checked-keys":S.value,pattern:N.value,"show-irrelevant-nodes":!1,"key-field":"unique_id","label-field":"summary",checkable:"","default-expand-all":!0,"block-line":!0,selectable:!1,cascade:"","onUpdate:checkedKeys":d[8]||(d[8]=c=>S.value=c)},null,8,["data","checked-keys","pattern"])]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])]),_:1}))}});export{hr as default};