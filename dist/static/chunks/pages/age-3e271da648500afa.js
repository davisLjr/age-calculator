(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{7761:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/age",function(){return t(7244)}])},7244:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a=t(5893),l=t(3100),r=t(4418),i=t(204),s=t(1533),u=t(9222),o=t(8911),c=t(7294);let d=()=>{let[e,n]=(0,c.useState)(""),[t,d]=(0,c.useState)(""),[m,x]=(0,c.useState)(""),[f,p]=(0,c.useState)(0),h=()=>{let n=new Date("".concat(t,"/").concat(m,"/").concat(e)),a=Date.now()-n.getTime();p(Math.floor(a/1e3/60/60/24/365))};return(0,a.jsxs)(l.xu,{className:"calculator",maxW:"600px",margin:"auto",textAlign:"center",boxShadow:"md",padding:"2.5rem 2rem",background:"light",children:[(0,a.jsx)(r.X,{size:"lg",children:"Age Calculator"}),(0,a.jsxs)(i.k,{className:"input-section",justifyContent:"space-between",marginTop:"2rem",flexWrap:"wrap",children:[(0,a.jsx)("label",{children:"A\xf1o de nacimiento:"}),(0,a.jsx)(s.I,{type:"text",value:e,onChange:e=>n(e.target.value),width:{sm:"100%",lg:"50%"}})]}),(0,a.jsxs)(i.k,{className:"input-section",justifyContent:"space-between",flexWrap:"wrap",margin:"0.5rem 0rem",children:[(0,a.jsx)("label",{children:"Mes de nacimiento:"}),(0,a.jsx)(s.I,{type:"text",value:t,onChange:e=>d(e.target.value),width:{sm:"100%",lg:"50%"}})]}),(0,a.jsxs)(i.k,{className:"input-section",justifyContent:"space-between",flexWrap:"wrap",children:[(0,a.jsx)("label",{children:"D\xeda de nacimiento:"}),(0,a.jsx)(s.I,{type:"text",value:m,onChange:e=>x(e.target.value),width:{sm:"100%",lg:"50%"}})]}),(0,a.jsx)(u.z,{onClick:h,variant:"solid",colorScheme:"blue",marginTop:"1rem",width:"100%",children:"Calculate"}),(0,a.jsx)(o.x,{className:"result",mt:"1rem",h:"1.5rem",children:0===f?"":"Tu edad es: ".concat(f," A\xf1os")})]})};function m(){return(0,a.jsx)(l.xu,{height:"100vh",display:"flex",alignItems:"center",background:"light",children:(0,a.jsx)(d,{})})}},9222:function(e,n,t){"use strict";t.d(n,{z:function(){return h}});var a=t(7294),[l,r]=(0,t(5227).k)({strict:!1,name:"ButtonGroupContext"}),i=t(6384),s=t(5432),u=t(5893);function o(e){let{children:n,className:t,...l}=e,r=(0,a.isValidElement)(n)?(0,a.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,s.cx)("chakra-button__icon",t);return(0,u.jsx)(i.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...l,className:o,children:r})}o.displayName="ButtonIcon";var c=t(295);function d(e){let{label:n,placement:t,spacing:l="0.5rem",children:r=(0,u.jsx)(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:d,...m}=e,x=(0,s.cx)("chakra-button__spinner",o),f="start"===t?"marginEnd":"marginStart",p=(0,a.useMemo)(()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[f]:n?l:0,fontSize:"1em",lineHeight:"normal",...d}),[d,n,f,l]);return(0,u.jsx)(i.m.div,{className:x,...m,__css:p,children:r})}d.displayName="ButtonSpinner";var m=t(1103),x=t(5059),f=t(1628),p=t(3179),h=(0,x.G)((e,n)=>{let t=r(),l=(0,f.mq)("Button",{...t,...e}),{isDisabled:o=null==t?void 0:t.isDisabled,isLoading:c,isActive:x,children:h,leftIcon:g,rightIcon:b,loadingText:j,iconSpacing:y="0.5rem",type:_,spinner:N,spinnerPlacement:k="start",className:C,as:w,...S}=(0,p.Lr)(e),I=(0,a.useMemo)(()=>{let e={...null==l?void 0:l._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...l,...!!t&&{_focus:e}}},[l,t]),{ref:B,type:T}=function(e){let[n,t]=(0,a.useState)(!e),l=(0,a.useCallback)(e=>{e&&t("BUTTON"===e.tagName)},[]);return{ref:l,type:n?"button":void 0}}(w),q={rightIcon:b,leftIcon:g,iconSpacing:y,children:h};return(0,u.jsxs)(i.m.button,{ref:(0,m.qq)(n,B),as:w,type:null!=_?_:T,"data-active":(0,s.PB)(x),"data-loading":(0,s.PB)(c),__css:I,className:(0,s.cx)("chakra-button",C),...S,disabled:o||c,children:[c&&"start"===k&&(0,u.jsx)(d,{className:"chakra-button__spinner--start",label:j,placement:"start",spacing:y,children:N}),c?j||(0,u.jsx)(i.m.span,{opacity:0,children:(0,u.jsx)(v,{...q})}):(0,u.jsx)(v,{...q}),c&&"end"===k&&(0,u.jsx)(d,{className:"chakra-button__spinner--end",label:j,placement:"end",spacing:y,children:N})]})});function v(e){let{leftIcon:n,rightIcon:t,children:a,iconSpacing:l}=e;return(0,u.jsxs)(u.Fragment,{children:[n&&(0,u.jsx)(o,{marginEnd:l,children:n}),a,t&&(0,u.jsx)(o,{marginStart:l,children:t})]})}h.displayName="Button"},1533:function(e,n,t){"use strict";t.d(n,{I:function(){return h}});var a=t(5227),l=t(1103),r=t(5059),i=t(1628),s=t(3179),u=t(6384),o=t(5432),c=t(7294),d=t(5893),[m,x]=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[f,p]=(0,a.k)({strict:!1,name:"FormControlContext"});(0,r.G)(function(e,n){let t=(0,i.jC)("Form",e),a=(0,s.Lr)(e),{getRootProps:r,htmlProps:x,...p}=function(e){let{id:n,isRequired:t,isInvalid:a,isDisabled:r,isReadOnly:i,...s}=e,u=(0,c.useId)(),d=n||`field-${u}`,m=`${d}-label`,x=`${d}-feedback`,f=`${d}-helptext`,[p,h]=(0,c.useState)(!1),[v,g]=(0,c.useState)(!1),[b,j]=(0,c.useState)(!1),y=(0,c.useCallback)((e={},n=null)=>({id:f,...e,ref:(0,l.lq)(n,e=>{e&&g(!0)})}),[f]),_=(0,c.useCallback)((e={},n=null)=>{var t,l;return{...e,ref:n,"data-focus":(0,o.PB)(b),"data-disabled":(0,o.PB)(r),"data-invalid":(0,o.PB)(a),"data-readonly":(0,o.PB)(i),id:null!=(t=e.id)?t:m,htmlFor:null!=(l=e.htmlFor)?l:d}},[d,r,b,a,i,m]),N=(0,c.useCallback)((e={},n=null)=>({id:x,...e,ref:(0,l.lq)(n,e=>{e&&h(!0)}),"aria-live":"polite"}),[x]),k=(0,c.useCallback)((e={},n=null)=>({...e,...s,ref:n,role:"group"}),[s]),C=(0,c.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!a,isReadOnly:!!i,isDisabled:!!r,isFocused:!!b,onFocus:()=>j(!0),onBlur:()=>j(!1),hasFeedbackText:p,setHasFeedbackText:h,hasHelpText:v,setHasHelpText:g,id:d,labelId:m,feedbackId:x,helpTextId:f,htmlProps:s,getHelpTextProps:y,getErrorMessageProps:N,getRootProps:k,getLabelProps:_,getRequiredIndicatorProps:C}}(a),h=(0,o.cx)("chakra-form-control",e.className);return(0,d.jsx)(f,{value:p,children:(0,d.jsx)(m,{value:t,children:(0,d.jsx)(u.m.div,{...r({},n),className:h,__css:t.container})})})}).displayName="FormControl",(0,r.G)(function(e,n){let t=p(),a=x(),l=(0,o.cx)("chakra-form__helper-text",e.className);return(0,d.jsx)(u.m.div,{...null==t?void 0:t.getHelpTextProps(e,n),__css:a.helperText,className:l})}).displayName="FormHelperText";var h=(0,r.G)(function(e,n){let{htmlSize:t,...a}=e,l=(0,i.jC)("Input",a),r=(0,s.Lr)(a),c=function(e){let{isDisabled:n,isInvalid:t,isReadOnly:a,isRequired:l,...r}=function(e){var n,t,a;let l=p(),{id:r,disabled:i,readOnly:s,required:u,isRequired:c,isInvalid:d,isReadOnly:m,isDisabled:x,onFocus:f,onBlur:h,...v}=e,g=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==l?void 0:l.hasFeedbackText)&&(null==l?void 0:l.isInvalid)&&g.push(l.feedbackId),(null==l?void 0:l.hasHelpText)&&g.push(l.helpTextId),{...v,"aria-describedby":g.join(" ")||void 0,id:null!=r?r:null==l?void 0:l.id,isDisabled:null!=(n=null!=i?i:x)?n:null==l?void 0:l.isDisabled,isReadOnly:null!=(t=null!=s?s:m)?t:null==l?void 0:l.isReadOnly,isRequired:null!=(a=null!=u?u:c)?a:null==l?void 0:l.isRequired,isInvalid:null!=d?d:null==l?void 0:l.isInvalid,onFocus:(0,o.v0)(null==l?void 0:l.onFocus,f),onBlur:(0,o.v0)(null==l?void 0:l.onBlur,h)}}(e);return{...r,disabled:n,readOnly:a,required:l,"aria-invalid":(0,o.Qm)(t),"aria-required":(0,o.Qm)(l),"aria-readonly":(0,o.Qm)(a)}}(r),m=(0,o.cx)("chakra-input",e.className);return(0,d.jsx)(u.m.input,{size:t,...c,__css:l.field,ref:n,className:m})});h.displayName="Input",h.id="Input"},3100:function(e,n,t){"use strict";t.d(n,{xu:function(){return i}});var a=t(6384),l=t(5059),r=t(5893),i=(0,a.m)("div");i.displayName="Box";var s=(0,l.G)(function(e,n){let{size:t,centerContent:a=!0,...l}=e;return(0,r.jsx)(i,{ref:n,boxSize:t,__css:{...a?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...l})});s.displayName="Square",(0,l.G)(function(e,n){let{size:t,...a}=e;return(0,r.jsx)(s,{size:t,ref:n,borderRadius:"9999px",...a})}).displayName="Circle"},4418:function(e,n,t){"use strict";t.d(n,{X:function(){return o}});var a=t(5059),l=t(1628),r=t(3179),i=t(6384),s=t(5432),u=t(5893),o=(0,a.G)(function(e,n){let t=(0,l.mq)("Heading",e),{className:a,...o}=(0,r.Lr)(e);return(0,u.jsx)(i.m.h2,{ref:n,className:(0,s.cx)("chakra-heading",e.className),...o,__css:t})});o.displayName="Heading"},204:function(e,n,t){"use strict";t.d(n,{k:function(){return i}});var a=t(5059),l=t(6384),r=t(5893),i=(0,a.G)(function(e,n){let{direction:t,align:a,justify:i,wrap:s,basis:u,grow:o,shrink:c,...d}=e;return(0,r.jsx)(l.m.div,{ref:n,__css:{display:"flex",flexDirection:t,alignItems:a,justifyContent:i,flexWrap:s,flexBasis:u,flexGrow:o,flexShrink:c},...d})});i.displayName="Flex"},8911:function(e,n,t){"use strict";t.d(n,{x:function(){return c}});var a=t(5059),l=t(1628),r=t(3179),i=t(6384),s=t(5432),u=t(888),o=t(5893),c=(0,a.G)(function(e,n){let t=(0,l.mq)("Text",e),{className:a,align:c,decoration:d,casing:m,...x}=(0,r.Lr)(e),f=(0,u.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,o.jsx)(i.m.p,{ref:n,className:(0,s.cx)("chakra-text",e.className),...f,...x,__css:t})});c.displayName="Text"},1103:function(e,n,t){"use strict";t.d(n,{lq:function(){return l},qq:function(){return r}});var a=t(7294);function l(...e){return n=>{e.forEach(e=>{!function(e,n){if(null!=e){if("function"==typeof e){e(n);return}try{e.current=n}catch(t){throw Error(`Cannot assign value '${n}' to ref '${e}'`)}}}(e,n)})}}function r(...e){return(0,a.useMemo)(()=>l(...e),e)}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7761)}),_N_E=e.O()}]);