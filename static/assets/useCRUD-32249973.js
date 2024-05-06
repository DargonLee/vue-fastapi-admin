var H=Object.defineProperty;var k=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var T=(e,t,o)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&T(e,o,t[o]);if(k)for(var o of k(t))G.call(t,o)&&T(e,o,t[o]);return e};var x=(e,t,o)=>new Promise((i,r)=>{var a=s=>{try{n(o.next(s))}catch(l){r(l)}},u=s=>{try{n(o.throw(s))}catch(l){r(l)}},n=s=>s.done?i(s.value):Promise.resolve(s.value).then(a,u);n((o=o.apply(e,t)).next())});import{n as Q,d as F,u as V,o as Z,e as P,j as X,J as N,v as _,h as d,A as w,m as Y,N as ee,W as te,bE as oe,a as S,k as y,c as B,g as E,bF as ne,x as m,L as se,bG as ie,bi as ae,aM as le,bH as re,Q as j,Z as ce,_ as ue,bI as de,$ as C,a0 as ve,bD as z,a1 as O,a7 as R,a2 as pe,an as fe,aj as me,bJ as ge,bC as he}from"./index-1319d715.js";import{u as $}from"./Input-80da2416.js";const U=Q("n-popconfirm"),A={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},I=oe(A),Pe=F({name:"NPopconfirmPanel",props:A,setup(e){const{localeRef:t}=$("Popconfirm"),{inlineThemeDisabled:o}=V(),{mergedClsPrefixRef:i,mergedThemeRef:r,props:a}=Z(U),u=P(()=>{const{common:{cubicBezierEaseInOut:s},self:{fontSize:l,iconSize:f,iconColor:c}}=r.value;return{"--n-bezier":s,"--n-font-size":l,"--n-icon-size":f,"--n-icon-color":c}}),n=o?X("popconfirm-panel",void 0,u,a):void 0;return Object.assign(Object.assign({},$("Popconfirm")),{mergedClsPrefix:i,cssVars:o?void 0:u,localizedPositiveText:P(()=>e.positiveText||t.value.positiveText),localizedNegativeText:P(()=>e.negativeText||t.value.negativeText),positiveButtonProps:N(a,"positiveButtonProps"),negativeButtonProps:N(a,"negativeButtonProps"),handlePositiveClick(s){e.onPositiveClick(s)},handleNegativeClick(s){e.onNegativeClick(s)},themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender})},render(){var e;const{mergedClsPrefix:t,showIcon:o,$slots:i}=this,r=_(i.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&d(w,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&d(w,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${t}-popconfirm__panel`,this.themeClass],style:this.cssVars},Y(i.default,a=>o||a?d("div",{class:`${t}-popconfirm__body`},o?d("div",{class:`${t}-popconfirm__icon`},_(i.icon,()=>[d(ee,{clsPrefix:t},{default:()=>d(te,null)})])):null,a):null),r?d("div",{class:[`${t}-popconfirm__action`]},r):null)}}),Ce=S("popconfirm",[y("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[y("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),y("action",`
 display: flex;
 justify-content: flex-end;
 `,[B("&:not(:first-child)","margin-top: 8px"),S("button",[B("&:not(:last-child)","margin-right: 8px;")])])]),be=Object.assign(Object.assign(Object.assign({},E.props),re),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),_e=F({name:"Popconfirm",props:be,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=V(),o=E("Popconfirm","-popconfirm",Ce,ne,e,t),i=m(null);function r(n){const{onPositiveClick:s,"onUpdate:show":l}=e;Promise.resolve(s?s(n):!0).then(f=>{var c;f!==!1&&((c=i.value)===null||c===void 0||c.setShow(!1),l&&j(l,!1))})}function a(n){const{onNegativeClick:s,"onUpdate:show":l}=e;Promise.resolve(s?s(n):!0).then(f=>{var c;f!==!1&&((c=i.value)===null||c===void 0||c.setShow(!1),l&&j(l,!1))})}return se(U,{mergedThemeRef:o,mergedClsPrefixRef:t,props:e}),Object.assign(Object.assign({},{setShow(n){var s;(s=i.value)===null||s===void 0||s.setShow(n)},syncPosition(){var n;(n=i.value)===null||n===void 0||n.syncPosition()}}),{mergedTheme:o,popoverInstRef:i,handlePositiveClick:r,handleNegativeClick:a})},render(){const{$slots:e,$props:t,mergedTheme:o}=this;return d(le,ae(t,I,{theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const i=ie(t,I);return d(Pe,Object.assign(Object.assign({},i),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}}),xe={flex:"","justify-end":""},Se={__name:"CrudModal",props:{width:{type:String,default:"600px"},title:{type:String,default:""},showFooter:{type:Boolean,default:!0},visible:{type:Boolean,required:!0},loading:{type:Boolean,default:!1}},emits:["update:visible","onSave"],setup(e,{emit:t}){const o=e,i=P({get(){return o.visible},set(r){t("update:visible",r)}});return(r,a)=>{const u=w,n=ge;return ce(),ue(n,{show:pe(i),"onUpdate:show":a[2]||(a[2]=s=>fe(i)?i.value=s:null),style:me({width:e.width}),preset:"card",title:e.title,size:"huge",bordered:!1,"mask-closable":!1},de({default:C(()=>[z(r.$slots,"default")]),_:2},[e.showFooter?{name:"footer",fn:C(()=>[ve("footer",xe,[z(r.$slots,"footer",{},()=>[O(u,{onClick:a[0]||(a[0]=s=>i.value=!1)},{default:C(()=>[R("取消")]),_:1}),O(u,{loading:e.loading,"ml-20":"",type:"primary",onClick:a[1]||(a[1]=s=>t("save"))},{default:C(()=>[R("保存")]),_:1},8,["loading"])])])]),key:"0"}:void 0]),1032,["show","style","title"])}}},ye={view:"查看",edit:"编辑",add:"新增"};function Be({name:e,initForm:t={},doCreate:o,doDelete:i,doUpdate:r,refresh:a}){const u=m(!1),n=m(""),s=P(()=>ye[n.value]+e),l=m(!1),f=m(null),c=m(h({},t));function D(){n.value="add",u.value=!0,c.value=h({},t)}function L(v){n.value="edit",u.value=!0,c.value=h({},v)}function M(v){n.value="view",u.value=!0,c.value=h({},v)}function W(...v){var g;if(!["edit","add"].includes(n.value)){u.value=!1;return}(g=f.value)==null||g.validate(K=>x(this,null,function*(){if(K)return;const b={add:{api:()=>o(c.value),cb:()=>{v.forEach(p=>p&&p())},msg:()=>$message.success("新增成功")},edit:{api:()=>r(c.value),cb:()=>{v.forEach(p=>p&&p())},msg:()=>$message.success("编辑成功")}}[n.value];try{l.value=!0;const p=yield b.api();b.cb(),b.msg(),l.value=u.value=!1,p&&a(p)}catch(p){l.value=!1}}))}function q(){return x(this,arguments,function*(v={}){if(!he(v))try{l.value=!0;const g=yield i(v);$message.success("删除成功"),l.value=!1,a(g)}catch(g){l.value=!1}})}return{modalVisible:u,modalAction:n,modalTitle:s,modalLoading:l,handleAdd:D,handleDelete:q,handleEdit:L,handleView:M,handleSave:W,modalForm:c,modalFormRef:f}}export{_e as N,Se as _,Be as u};
