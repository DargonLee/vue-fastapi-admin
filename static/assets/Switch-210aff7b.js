import{ap as se,by as de,bz as ce,a as L,k as t,F as O,c as K,b as l,bj as U,d as ue,u as he,g as I,H as be,x as W,J as fe,K as ge,e as z,i as w,b6 as M,bA as s,j as ve,bB as P,h as n,m,B as we,bp as me,Q as A}from"./index-1319d715.js";const pe=e=>{const{primaryColor:d,opacityDisabled:f,borderRadius:o,textColor3:r}=e,p="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},de),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:f,railColor:p,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${ce(d,{alpha:.2})}`})},ye={name:"Switch",common:se,self:pe},xe=ye,ke=L("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),L("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[O({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),K("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),U("disabled",[U("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[K("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[K("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[O()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Se=Object.assign(Object.assign({},I.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Be=ue({name:"Switch",props:Se,setup(e){B===void 0&&(typeof CSS!="undefined"?typeof CSS.supports!="undefined"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:d,inlineThemeDisabled:f}=he(e),o=I("Switch","-switch",ke,xe,e,d),r=be(e),{mergedSizeRef:p,mergedDisabledRef:g}=r,k=W(e.defaultValue),R=fe(e,"value"),v=ge(R,k),S=z(()=>v.value===e.checkedValue),y=W(!1),a=W(!1),c=z(()=>{const{railStyle:i}=e;if(i)return i({focused:a.value,checked:S.value})});function u(i){const{"onUpdate:value":$,onChange:V,onUpdateValue:_}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=r;$&&A($,i),_&&A(_,i),V&&A(V,i),k.value=i,F(),T()}function E(){const{nTriggerFormFocus:i}=r;i()}function X(){const{nTriggerFormBlur:i}=r;i()}function Y(){e.loading||g.value||(v.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function J(){a.value=!0,E()}function Q(){a.value=!1,X(),y.value=!1}function q(i){e.loading||g.value||i.key===" "&&(v.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),y.value=!1)}function G(i){e.loading||g.value||i.key===" "&&(i.preventDefault(),y.value=!0)}const H=z(()=>{const{value:i}=p,{self:{opacityDisabled:$,railColor:V,railColorActive:_,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:Z,loadingColor:ee,textColor:te,iconColor:ie,[w("buttonHeight",i)]:h,[w("buttonWidth",i)]:ae,[w("buttonWidthPressed",i)]:ne,[w("railHeight",i)]:b,[w("railWidth",i)]:C,[w("railBorderRadius",i)]:oe,[w("buttonBorderRadius",i)]:re},common:{cubicBezierEaseInOut:le}}=o.value;let j,N,D;return B?(j=`calc((${b} - ${h}) / 2)`,N=`max(${b}, ${h})`,D=`max(${C}, calc(${C} + ${h} - ${b}))`):(j=M((s(b)-s(h))/2),N=M(Math.max(s(b),s(h))),D=s(b)>s(h)?C:M(s(C)+s(h)-s(b))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":ae,"--n-button-width-pressed":ne,"--n-button-height":h,"--n-height":N,"--n-offset":j,"--n-opacity-disabled":$,"--n-rail-border-radius":oe,"--n-rail-color":V,"--n-rail-color-active":_,"--n-rail-height":b,"--n-rail-width":C,"--n-width":D,"--n-box-shadow-focus":Z,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ie}}),x=f?ve("switch",z(()=>p.value[0]),H,e):void 0;return{handleClick:Y,handleBlur:Q,handleFocus:J,handleKeyup:q,handleKeydown:G,mergedRailStyle:c,pressed:y,mergedClsPrefix:d,mergedValue:v,checked:S,mergedDisabled:g,cssVars:f?void 0:H,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:f,mergedRailStyle:o,onRender:r,$slots:p}=this;r==null||r();const{checked:g,unchecked:k,icon:R,"checked-icon":v,"unchecked-icon":S}=p,y=!(P(R)&&P(v)&&P(S));return n("div",{role:"switch","aria-checked":f,class:[`${e}-switch`,this.themeClass,y&&`${e}-switch--icon`,f&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},m(g,a=>m(k,c=>a||c?n("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),a),n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),c)):null)),n("div",{class:`${e}-switch__button`},m(R,a=>m(v,c=>m(S,u=>n(we,null,{default:()=>this.loading?n(me,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||a)?n("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||a):!this.checked&&(u||a)?n("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||a):null})))),m(g,a=>a&&n("div",{key:"checked",class:`${e}-switch__checked`},a)),m(k,a=>a&&n("div",{key:"unchecked",class:`${e}-switch__unchecked`},a)))))}});export{Be as N};
