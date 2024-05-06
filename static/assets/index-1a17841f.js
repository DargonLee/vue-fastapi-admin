var T=Object.defineProperty,W=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var N=(i,a,s)=>a in i?T(i,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[a]=s,h=(i,a)=>{for(var s in a||(a={}))D.call(a,s)&&N(i,s,a[s]);if(y)for(var s of y(a))L.call(a,s)&&N(i,s,a[s]);return i},$=(i,a)=>W(i,A(a));var _=(i,a,s)=>new Promise((n,f)=>{var p=w=>{try{v(s.next(w))}catch(l){f(l)}},g=w=>{try{v(s.throw(w))}catch(l){f(l)}},v=w=>w.done?n(w.value):Promise.resolve(w.value).then(p,g);v((s=s.apply(i,a)).next())});import{U as Z,V as j,x as c,Z as z,_ as E,$ as d,a1 as o,a2 as t,a0 as G,A as F,a7 as U,a3 as q,a8 as I}from"./index-1319d715.js";import{_ as H}from"./CommonPage-1b7131ea.js";import{N as k,a as J}from"./Tabs-c7dd0a0d.js";import{N as P,a as m}from"./FormItem-a3720c19.js";import{N as K}from"./Image-9de67d83.js";import{N as b}from"./Input-80da2416.js";import"./AppPage-2c648aa5.js";import"./Add-d3888378.js";const M={class:"m-30 flex items-center"},re={__name:"index",setup(i){const{t:a}=Z(),s=j(),n=c(!1),f=c(null),p=c({avatar:s.avatar,username:s.name,email:s.email});function g(){return _(this,null,function*(){var e;n.value=!0,(e=f.value)==null||e.validate(r=>_(this,null,function*(){r||(yield I.updateUser($(h({},p.value),{id:s.userId})).then(()=>{s.setUserInfo(p.value),n.value=!1,$message.success(a("common.text.update_success"))}).catch(()=>{n.value=!1}))}))})}const v={username:[{required:!0,message:a("views.profile.message_username_required"),trigger:["input","blur","change"]}]},w=c(null),l=c({old_password:"",new_password:"",confirm_password:""});function R(){return _(this,null,function*(){var e;n.value=!0,(e=w.value)==null||e.validate(r=>_(this,null,function*(){if(!r){const u=$(h({},l.value),{id:s.userId});yield I.updatePassword(u).then(C=>{$message.success(C.msg),l.value={old_password:"",new_password:"",confirm_password:""},n.value=!1}).catch(()=>{n.value=!1})}}))})}const S={old_password:[{required:!0,message:a("views.profile.message_old_password_required"),trigger:["input","blur","change"]}],new_password:[{required:!0,message:a("views.profile.message_new_password_required"),trigger:["input","blur","change"]}],confirm_password:[{required:!0,message:a("views.profile.message_password_confirmation_required"),trigger:["input","blur"]},{validator:B,message:a("views.profile.message_password_confirmation_diff"),trigger:"input"},{validator:V,message:a("views.profile.message_password_confirmation_diff"),trigger:["blur","password-input"]}]};function B(e,r){return!!l.value.new_password&&l.value.new_password.startsWith(r)&&l.value.new_password.length>=r.length}function V(e,r){return r===l.value.new_password}return(e,r)=>(z(),E(H,{"show-header":!1},{default:d(()=>[o(t(J),{type:"line",animated:""},{default:d(()=>[o(t(k),{name:"website",tab:e.$t("views.profile.label_modify_information")},{default:d(()=>[G("div",M,[o(t(P),{ref_key:"infoFormRef",ref:f,"label-placement":"left","label-align":"left","label-width":"100",model:p.value,rules:v,class:"w-400"},{default:d(()=>[o(t(m),{label:e.$t("views.profile.label_avatar"),path:"avatar"},{default:d(()=>[o(t(K),{width:"100",src:p.value.avatar},null,8,["src"])]),_:1},8,["label"]),o(t(m),{label:e.$t("views.profile.label_username"),path:"username"},{default:d(()=>[o(t(b),{value:p.value.username,"onUpdate:value":r[0]||(r[0]=u=>p.value.username=u),type:"text",placeholder:e.$t("views.profile.placeholder_username")},null,8,["value","placeholder"])]),_:1},8,["label"]),o(t(m),{label:e.$t("views.profile.label_email"),path:"email"},{default:d(()=>[o(t(b),{value:p.value.email,"onUpdate:value":r[1]||(r[1]=u=>p.value.email=u),type:"text",placeholder:e.$t("views.profile.placeholder_email")},null,8,["value","placeholder"])]),_:1},8,["label"]),o(t(F),{type:"primary",loading:n.value,onClick:g},{default:d(()=>[U(q(e.$t("common.buttons.update")),1)]),_:1},8,["loading"])]),_:1},8,["model"])])]),_:1},8,["tab"]),o(t(k),{name:"contact",tab:e.$t("views.profile.label_change_password")},{default:d(()=>[o(t(P),{ref_key:"passwordFormRef",ref:w,"label-placement":"left","label-align":"left",model:l.value,"label-width":"200",rules:S,class:"m-30 w-500"},{default:d(()=>[o(t(m),{label:e.$t("views.profile.label_old_password"),path:"old_password"},{default:d(()=>[o(t(b),{value:l.value.old_password,"onUpdate:value":r[2]||(r[2]=u=>l.value.old_password=u),type:"password","show-password-on":"mousedown",placeholder:e.$t("views.profile.placeholder_old_password")},null,8,["value","placeholder"])]),_:1},8,["label"]),o(t(m),{label:e.$t("views.profile.label_new_password"),path:"new_password"},{default:d(()=>[o(t(b),{value:l.value.new_password,"onUpdate:value":r[3]||(r[3]=u=>l.value.new_password=u),disabled:!l.value.old_password,type:"password","show-password-on":"mousedown",placeholder:e.$t("views.profile.placeholder_new_password")},null,8,["value","disabled","placeholder"])]),_:1},8,["label"]),o(t(m),{label:e.$t("views.profile.label_confirm_password"),path:"confirm_password"},{default:d(()=>[o(t(b),{value:l.value.confirm_password,"onUpdate:value":r[4]||(r[4]=u=>l.value.confirm_password=u),disabled:!l.value.new_password,type:"password","show-password-on":"mousedown",placeholder:e.$t("views.profile.placeholder_confirm_password")},null,8,["value","disabled","placeholder"])]),_:1},8,["label"]),o(t(F),{type:"primary",loading:n.value,onClick:R},{default:d(()=>[U(q(e.$t("common.buttons.update")),1)]),_:1},8,["loading"])]),_:1},8,["model"])]),_:1},8,["tab"])]),_:1})]),_:1}))}};export{re as default};