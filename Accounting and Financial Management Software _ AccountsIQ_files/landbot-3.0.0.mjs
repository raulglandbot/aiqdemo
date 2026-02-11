const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/ou8VLiGv-index.js","chunks/landbot-core.js","chunks/landbot-vendor.js","chunks/DQgjcnD6-InputDate.js","chunks/CRxGSa0i-InputDayPicker.js","chunks/BRCuWr6L-InputTel.js","chunks/iUlCJQV5-index.js","chunks/NrFzNcau-InputForm.js","chunks/B-JXHtKC-index.js","chunks/CpHdeJQ9-emoji-picker-react.esm.js"])))=>i.map(i=>d[i]);
import{p as purify,m as mergeWith,l as linkifyHtml,f as find,a as anime}from"./chunks/landbot-vendor.js";import{g as getDefaultExportFromCjs,d,_ as __rest,S as Subject,a as debounceTime,e,f as first,b as delay}from"./chunks/landbot-core.js";let c$a,Provider$d,Assembler$3,useHeadGlobalStyle,InputContainerWrapper,MessageBubbleWrapper,PropTypes,React__default,Ye,__vitePreload,reactDomExports,breakpoint,classNames,dt,useWidgetContext,utils$1,getCommonProperties,classnamesExports,inputUtils,jsxRuntimeExports,useDocumentContext,InputHeader,m$a,l$4,ft,lt,r$h,reactExports,React,e$6,useConfigContext,a$5,t$6,mt,m$4,i$5,__tla=(async()=>{function _mergeNamespaces(t,n){for(var r=0;r<n.length;r++){const s=n[r];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(s,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var jsxRuntime={exports:{}},reactJsxRuntime_production_min={},react={exports:{}},react_production_min={},l$g=Symbol.for("react.element"),n$q=Symbol.for("react.portal"),p$f=Symbol.for("react.fragment"),q$4=Symbol.for("react.strict_mode"),r$t=Symbol.for("react.profiler"),t$y=Symbol.for("react.provider"),u$5=Symbol.for("react.context"),v$6=Symbol.for("react.forward_ref"),w$4=Symbol.for("react.suspense"),x$8=Symbol.for("react.memo"),y$6=Symbol.for("react.lazy"),z$5=Symbol.iterator;function A$6(t){return t===null||typeof t!="object"?null:typeof(t=z$5&&t[z$5]||t["@@iterator"])=="function"?t:null}var B$5={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$6=Object.assign,D$7={};function E$5(t,n,r){this.props=t,this.context=n,this.refs=D$7,this.updater=r||B$5}function F$5(){}function G$4(t,n,r){this.props=t,this.context=n,this.refs=D$7,this.updater=r||B$5}E$5.prototype.isReactComponent={},E$5.prototype.setState=function(t,n){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,n,"setState")},E$5.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},F$5.prototype=E$5.prototype;var H$5=G$4.prototype=new F$5;H$5.constructor=G$4,C$6(H$5,E$5.prototype),H$5.isPureReactComponent=!0;var I$5=Array.isArray,J$3=Object.prototype.hasOwnProperty,K$4={current:null},L$4={key:!0,ref:!0,__self:!0,__source:!0};function M$5(t,n,r){var s,i={},o=null,l=null;if(n!=null)for(s in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)J$3.call(n,s)&&!L$4.hasOwnProperty(s)&&(i[s]=n[s]);var u=arguments.length-2;if(u===1)i.children=r;else if(1<u){for(var c=Array(u),p=0;p<u;p++)c[p]=arguments[p+2];i.children=c}if(t&&t.defaultProps)for(s in u=t.defaultProps)i[s]===void 0&&(i[s]=u[s]);return{$$typeof:l$g,type:t,key:o,ref:l,props:i,_owner:K$4.current}}function N$3(t,n){return{$$typeof:l$g,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}}function O$4(t){return typeof t=="object"&&t!==null&&t.$$typeof===l$g}function escape(t){var n={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return n[r]})}var P$3=/\/+/g;function Q$5(t,n){return typeof t=="object"&&t!==null&&t.key!=null?escape(""+t.key):n.toString(36)}function R$4(t,n,r,s,i){var o=typeof t;o!=="undefined"&&o!=="boolean"||(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case l$g:case n$q:l=!0}}if(l)return i=i(l=t),t=s===""?"."+Q$5(l,0):s,I$5(i)?(r="",t!=null&&(r=t.replace(P$3,"$&/")+"/"),R$4(i,n,r,"",function(p){return p})):i!=null&&(O$4(i)&&(i=N$3(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(P$3,"$&/")+"/")+t)),n.push(i)),1;if(l=0,s=s===""?".":s+":",I$5(t))for(var u=0;u<t.length;u++){var c=s+Q$5(o=t[u],u);l+=R$4(o,n,r,c,i)}else if(typeof(c=A$6(t))=="function")for(t=c.call(t),u=0;!(o=t.next()).done;)l+=R$4(o=o.value,n,r,c=s+Q$5(o,u++),i);else if(o==="object")throw n=String(t),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function S$5(t,n,r){if(t==null)return t;var s=[],i=0;return R$4(t,s,"","",function(o){return n.call(r,o,i++)}),s}function T$3(t){if(t._status===-1){var n=t._result;(n=n()).then(function(r){t._status!==0&&t._status!==-1||(t._status=1,t._result=r)},function(r){t._status!==0&&t._status!==-1||(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var U$4={current:null},V$4={transition:null},W$4={ReactCurrentDispatcher:U$4,ReactCurrentBatchConfig:V$4,ReactCurrentOwner:K$4};function X$3(){throw Error("act(...) is not supported in production builds of React.")}react_production_min.Children={map:S$5,forEach:function(t,n,r){S$5(t,function(){n.apply(this,arguments)},r)},count:function(t){var n=0;return S$5(t,function(){n++}),n},toArray:function(t){return S$5(t,function(n){return n})||[]},only:function(t){if(!O$4(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},react_production_min.Component=E$5,react_production_min.Fragment=p$f,react_production_min.Profiler=r$t,react_production_min.PureComponent=G$4,react_production_min.StrictMode=q$4,react_production_min.Suspense=w$4,react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$4,react_production_min.act=X$3,react_production_min.cloneElement=function(t,n,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var s=C$6({},t.props),i=t.key,o=t.ref,l=t._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=K$4.current),n.key!==void 0&&(i=""+n.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(c in n)J$3.call(n,c)&&!L$4.hasOwnProperty(c)&&(s[c]=n[c]===void 0&&u!==void 0?u[c]:n[c])}var c=arguments.length-2;if(c===1)s.children=r;else if(1<c){u=Array(c);for(var p=0;p<c;p++)u[p]=arguments[p+2];s.children=u}return{$$typeof:l$g,type:t.type,key:i,ref:o,props:s,_owner:l}},react_production_min.createContext=function(t){return(t={$$typeof:u$5,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:t$y,_context:t},t.Consumer=t},react_production_min.createElement=M$5,react_production_min.createFactory=function(t){var n=M$5.bind(null,t);return n.type=t,n},react_production_min.createRef=function(){return{current:null}},react_production_min.forwardRef=function(t){return{$$typeof:v$6,render:t}},react_production_min.isValidElement=O$4,react_production_min.lazy=function(t){return{$$typeof:y$6,_payload:{_status:-1,_result:t},_init:T$3}},react_production_min.memo=function(t,n){return{$$typeof:x$8,type:t,compare:n===void 0?null:n}},react_production_min.startTransition=function(t){var n=V$4.transition;V$4.transition={};try{t()}finally{V$4.transition=n}},react_production_min.unstable_act=X$3,react_production_min.useCallback=function(t,n){return U$4.current.useCallback(t,n)},react_production_min.useContext=function(t){return U$4.current.useContext(t)},react_production_min.useDebugValue=function(){},react_production_min.useDeferredValue=function(t){return U$4.current.useDeferredValue(t)},react_production_min.useEffect=function(t,n){return U$4.current.useEffect(t,n)},react_production_min.useId=function(){return U$4.current.useId()},react_production_min.useImperativeHandle=function(t,n,r){return U$4.current.useImperativeHandle(t,n,r)},react_production_min.useInsertionEffect=function(t,n){return U$4.current.useInsertionEffect(t,n)},react_production_min.useLayoutEffect=function(t,n){return U$4.current.useLayoutEffect(t,n)},react_production_min.useMemo=function(t,n){return U$4.current.useMemo(t,n)},react_production_min.useReducer=function(t,n,r){return U$4.current.useReducer(t,n,r)},react_production_min.useRef=function(t){return U$4.current.useRef(t)},react_production_min.useState=function(t){return U$4.current.useState(t)},react_production_min.useSyncExternalStore=function(t,n,r){return U$4.current.useSyncExternalStore(t,n,r)},react_production_min.useTransition=function(){return U$4.current.useTransition()},react_production_min.version="18.3.1",react.exports=react_production_min,reactExports=react.exports,React__default=getDefaultExportFromCjs(reactExports),React=_mergeNamespaces({__proto__:null,default:React__default},[reactExports]);var f$8=reactExports,k$4=Symbol.for("react.element"),l$f=Symbol.for("react.fragment"),m$e=Object.prototype.hasOwnProperty,n$p=f$8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$e={key:!0,ref:!0,__self:!0,__source:!0};function q$3(t,n,r){var s,i={},o=null,l=null;for(s in r!==void 0&&(o=""+r),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref),n)m$e.call(n,s)&&!p$e.hasOwnProperty(s)&&(i[s]=n[s]);if(t&&t.defaultProps)for(s in n=t.defaultProps)i[s]===void 0&&(i[s]=n[s]);return{$$typeof:k$4,type:t,key:o,ref:l,props:i,_owner:n$p.current}}reactJsxRuntime_production_min.Fragment=l$f,reactJsxRuntime_production_min.jsx=q$3,reactJsxRuntime_production_min.jsxs=q$3,jsxRuntime.exports=reactJsxRuntime_production_min;let reactDom,reactDom_production_min,scheduler,scheduler_production_min;jsxRuntimeExports=jsxRuntime.exports,reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={},function(t){function n(gt,vt){var $t=gt.length;gt.push(vt);e:for(;0<$t;){var It=$t-1>>>1,wt=gt[It];if(!(0<i(wt,vt)))break e;gt[It]=vt,gt[$t]=wt,$t=It}}function r(gt){return gt.length===0?null:gt[0]}function s(gt){if(gt.length===0)return null;var vt=gt[0],$t=gt.pop();if($t!==vt){gt[0]=$t;e:for(var It=0,wt=gt.length,jt=wt>>>1;It<jt;){var Mt=2*(It+1)-1,Vt=gt[Mt],Rt=Mt+1,Nt=gt[Rt];if(0>i(Vt,$t))Rt<wt&&0>i(Nt,Vt)?(gt[It]=Nt,gt[Rt]=$t,It=Rt):(gt[It]=Vt,gt[Mt]=$t,It=Mt);else{if(!(Rt<wt&&0>i(Nt,$t)))break e;gt[It]=Nt,gt[Rt]=$t,It=Rt}}}return vt}function i(gt,vt){var $t=gt.sortIndex-vt.sortIndex;return $t!==0?$t:gt.id-vt.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var c=[],p=[],m=1,y=null,$=3,S=!1,x=!1,h=!1,N=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;function tt(gt){for(var vt=r(p);vt!==null;){if(vt.callback===null)s(p);else{if(!(vt.startTime<=gt))break;s(p),vt.sortIndex=vt.expirationTime,n(c,vt)}vt=r(p)}}function me(gt){if(h=!1,tt(gt),!x)if(r(c)!==null)x=!0,Tt(st);else{var vt=r(p);vt!==null&&Ot(me,vt.startTime-gt)}}function st(gt,vt){x=!1,h&&(h=!1,L(At),At=-1),S=!0;var $t=$;try{for(tt(vt),y=r(c);y!==null&&(!(y.expirationTime>vt)||gt&&!yt());){var It=y.callback;if(typeof It=="function"){y.callback=null,$=y.priorityLevel;var wt=It(y.expirationTime<=vt);vt=t.unstable_now(),typeof wt=="function"?y.callback=wt:y===r(c)&&s(c),tt(vt)}else s(c);y=r(c)}if(y!==null)var jt=!0;else{var Mt=r(p);Mt!==null&&Ot(me,Mt.startTime-vt),jt=!1}return jt}finally{y=null,$=$t,S=!1}}typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var xt,nt=!1,Et=null,At=-1,Ct=5,bt=-1;function yt(){return!(t.unstable_now()-bt<Ct)}function St(){if(Et!==null){var gt=t.unstable_now();bt=gt;var vt=!0;try{vt=Et(!0,gt)}finally{vt?xt():(nt=!1,Et=null)}}else nt=!1}if(typeof pe=="function")xt=function(){pe(St)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,kt=_t.port2;_t.port1.onmessage=St,xt=function(){kt.postMessage(null)}}else xt=function(){N(St,0)};function Tt(gt){Et=gt,nt||(nt=!0,xt())}function Ot(gt,vt){At=N(function(){gt(t.unstable_now())},vt)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(gt){gt.callback=null},t.unstable_continueExecution=function(){x||S||(x=!0,Tt(st))},t.unstable_forceFrameRate=function(gt){0>gt||125<gt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ct=0<gt?Math.floor(1e3/gt):5},t.unstable_getCurrentPriorityLevel=function(){return $},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(gt){switch($){case 1:case 2:case 3:var vt=3;break;default:vt=$}var $t=$;$=vt;try{return gt()}finally{$=$t}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(gt,vt){switch(gt){case 1:case 2:case 3:case 4:case 5:break;default:gt=3}var $t=$;$=gt;try{return vt()}finally{$=$t}},t.unstable_scheduleCallback=function(gt,vt,$t){var It=t.unstable_now();switch(typeof $t=="object"&&$t!==null?$t=typeof($t=$t.delay)=="number"&&0<$t?It+$t:It:$t=It,gt){case 1:var wt=-1;break;case 2:wt=250;break;case 5:wt=1073741823;break;case 4:wt=1e4;break;default:wt=5e3}return gt={id:m++,callback:vt,priorityLevel:gt,startTime:$t,expirationTime:wt=$t+wt,sortIndex:-1},$t>It?(gt.sortIndex=$t,n(p,gt),r(c)===null&&gt===r(p)&&(h?(L(At),At=-1):h=!0,Ot(me,$t-It))):(gt.sortIndex=wt,n(c,gt),x||S||(x=!0,Tt(st))),gt},t.unstable_shouldYield=yt,t.unstable_wrapCallback=function(gt){var vt=$;return function(){var $t=$;$=vt;try{return gt.apply(this,arguments)}finally{$=$t}}}}(scheduler_production_min),scheduler.exports=scheduler_production_min;var schedulerExports=scheduler.exports,aa$2=reactExports,ca$1=schedulerExports;function p$d(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea$1={};function fa$1(t,n){ha$1(t,n),ha$1(t+"Capture",n)}function ha$1(t,n){for(ea$1[t]=n,t=0;t<n.length;t++)da.add(n[t])}var ia$2=!(typeof window>"u"||window.document===void 0||window.document.createElement===void 0),ja=Object.prototype.hasOwnProperty,ka$2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma$1={};function oa$2(t){return!!ja.call(ma$1,t)||!ja.call(la,t)&&(ka$2.test(t)?ma$1[t]=!0:(la[t]=!0,!1))}function pa$2(t,n,r,s){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return!s&&(r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5))!=="data-"&&t!=="aria-");default:return!1}}function qa$1(t,n,r,s){if(n==null||pa$2(t,n,r,s))return!0;if(s)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function v$5(t,n,r,s,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var z$4={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){z$4[t]=new v$5(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];z$4[n]=new v$5(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){z$4[t]=new v$5(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){z$4[t]=new v$5(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){z$4[t]=new v$5(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){z$4[t]=new v$5(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){z$4[t]=new v$5(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){z$4[t]=new v$5(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){z$4[t]=new v$5(t,5,!1,t.toLowerCase(),null,!1,!1)});var ra$2=/[\-:]([a-z])/g;function sa$2(t){return t[1].toUpperCase()}function ta$2(t,n,r,s){var i=z$4.hasOwnProperty(n)?z$4[n]:null;(i!==null?i.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(qa$1(n,r,i,s)&&(r=null),s||i===null?oa$2(n)&&(r===null?t.removeAttribute(n):t.setAttribute(n,""+r)):i.mustUseProperty?t[i.propertyName]=r===null?i.type!==3&&"":r:(n=i.attributeName,s=i.attributeNamespace,r===null?t.removeAttribute(n):(r=(i=i.type)===3||i===4&&r===!0?"":""+r,s?t.setAttributeNS(s,n,r):t.setAttribute(n,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(ra$2,sa$2);z$4[n]=new v$5(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(ra$2,sa$2);z$4[n]=new v$5(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(ra$2,sa$2);z$4[n]=new v$5(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){z$4[t]=new v$5(t,1,!1,t.toLowerCase(),null,!1,!1)}),z$4.xlinkHref=new v$5("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){z$4[t]=new v$5(t,1,!1,t.toLowerCase(),null,!0,!0)});var ua$2=aa$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va$1=Symbol.for("react.element"),wa$1=Symbol.for("react.portal"),ya$1=Symbol.for("react.fragment"),za$1=Symbol.for("react.strict_mode"),Aa$1=Symbol.for("react.profiler"),Ba$1=Symbol.for("react.provider"),Ca$1=Symbol.for("react.context"),Da$1=Symbol.for("react.forward_ref"),Ea$2=Symbol.for("react.suspense"),Fa$1=Symbol.for("react.suspense_list"),Ga$1=Symbol.for("react.memo"),Ha$2=Symbol.for("react.lazy"),Ia$1=Symbol.for("react.offscreen"),Ja$1=Symbol.iterator;function Ka$2(t){return t===null||typeof t!="object"?null:typeof(t=Ja$1&&t[Ja$1]||t["@@iterator"])=="function"?t:null}var A$5=Object.assign,La;function Ma$1(t){if(La===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);La=n&&n[1]||""}return`
`+La+t}var Na$2=!1;function Oa$2(t,n){if(!t||Na$2)return"";Na$2=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var s=p}Reflect.construct(t,[],n)}else{try{n.call()}catch(p){s=p}t.call(n.prototype)}else{try{throw Error()}catch(p){s=p}t()}}catch(p){if(p&&s&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),o=s.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,0>--u||i[l]!==o[u]){var c=`
`+i[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=u);break}}}finally{Na$2=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Ma$1(t):""}function Pa$2(t){switch(t.tag){case 5:return Ma$1(t.type);case 16:return Ma$1("Lazy");case 13:return Ma$1("Suspense");case 19:return Ma$1("SuspenseList");case 0:case 2:case 15:return t=Oa$2(t.type,!1);case 11:return t=Oa$2(t.type.render,!1);case 1:return t=Oa$2(t.type,!0);default:return""}}function Qa$1(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ya$1:return"Fragment";case wa$1:return"Portal";case Aa$1:return"Profiler";case za$1:return"StrictMode";case Ea$2:return"Suspense";case Fa$1:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ca$1:return(t.displayName||"Context")+".Consumer";case Ba$1:return(t._context.displayName||"Context")+".Provider";case Da$1:var n=t.render;return(t=t.displayName)||(t=(t=n.displayName||n.name||"")!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ga$1:return(n=t.displayName||null)!==null?n:Qa$1(t.type)||"Memo";case Ha$2:n=t._payload,t=t._init;try{return Qa$1(t(n))}catch{}}return null}function Ra$1(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=(t=n.render).displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa$1(n);case 8:return n===za$1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Sa$1(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":case"object":return t;default:return""}}function Ta$1(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ua$1(t){var n=Ta$1(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&r!==void 0&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){s=""+l,o.call(this,l)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Va$2(t){t._valueTracker||(t._valueTracker=Ua$1(t))}function Wa$1(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),s="";return t&&(s=Ta$1(t)?t.checked?"true":"false":t.value),(t=s)!==r&&(n.setValue(t),!0)}function Xa(t){if((t=t||(typeof document<"u"?document:void 0))===void 0)return null;try{return t.activeElement||t.body}catch{return t.body}}function Ya$1(t,n){var r=n.checked;return A$5({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Za(t,n){var r=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;r=Sa$1(n.value!=null?n.value:r),t._wrapperState={initialChecked:s,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ab$1(t,n){(n=n.checked)!=null&&ta$2(t,"checked",n,!1)}function bb$1(t,n){ab$1(t,n);var r=Sa$1(n.value),s=n.type;if(r!=null)s==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(s==="submit"||s==="reset")return void t.removeAttribute("value");n.hasOwnProperty("value")?cb$1(t,n.type,r):n.hasOwnProperty("defaultValue")&&cb$1(t,n.type,Sa$1(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function db$1(t,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,r||n===t.value||(t.value=n),t.defaultValue=n}(r=t.name)!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function cb$1(t,n,r){n==="number"&&Xa(t.ownerDocument)===t||(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var eb$1=Array.isArray;function fb$1(t,n,r,s){if(t=t.options,n){n={};for(var i=0;i<r.length;i++)n["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=n.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&s&&(t[r].defaultSelected=!0)}else{for(r=""+Sa$1(r),n=null,i=0;i<t.length;i++){if(t[i].value===r)return t[i].selected=!0,void(s&&(t[i].defaultSelected=!0));n!==null||t[i].disabled||(n=t[i])}n!==null&&(n.selected=!0)}}function gb$1(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(p$d(91));return A$5({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hb$1(t,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(p$d(92));if(eb$1(r)){if(1<r.length)throw Error(p$d(93));r=r[0]}n=r}n==null&&(n=""),r=n}t._wrapperState={initialValue:Sa$1(r)}}function ib$1(t,n){var r=Sa$1(n.value),s=Sa$1(n.defaultValue);r!=null&&((r=""+r)!==t.value&&(t.value=r),n.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),s!=null&&(t.defaultValue=""+s)}function jb$1(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function kb$1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lb$1(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?kb$1(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mb$1,nb$1=(a=function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for((mb$1=mb$1||document.createElement("div")).innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=mb$1.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}},typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return a(t,n)})}:a),a;function ob$1(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3)return void(r.nodeValue=n)}t.textContent=n}var pb$1={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb$1=["Webkit","ms","Moz","O"];function rb$1(t,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||pb$1.hasOwnProperty(t)&&pb$1[t]?(""+n).trim():n+"px"}function sb$1(t,n){for(var r in t=t.style,n)if(n.hasOwnProperty(r)){var s=r.indexOf("--")===0,i=rb$1(r,n[r],s);r==="float"&&(r="cssFloat"),s?t.setProperty(r,i):t[r]=i}}Object.keys(pb$1).forEach(function(t){qb$1.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),pb$1[n]=pb$1[t]})});var tb$1=A$5({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub$1(t,n){if(n){if(tb$1[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(p$d(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(p$d(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(p$d(61))}if(n.style!=null&&typeof n.style!="object")throw Error(p$d(62))}}function vb$1(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb$1=null;function xb$1(t){return(t=t.target||t.srcElement||window).correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yb$1=null,zb$1=null,Ab$1=null;function Bb$1(t){if(t=Cb$1(t)){if(typeof yb$1!="function")throw Error(p$d(280));var n=t.stateNode;n&&(n=Db$1(n),yb$1(t.stateNode,t.type,n))}}function Eb(t){zb$1?Ab$1?Ab$1.push(t):Ab$1=[t]:zb$1=t}function Fb$1(){if(zb$1){var t=zb$1,n=Ab$1;if(Ab$1=zb$1=null,Bb$1(t),n)for(t=0;t<n.length;t++)Bb$1(n[t])}}function Gb$1(t,n){return t(n)}function Hb$1(){}var Ib$1=!1;function Jb$1(t,n,r){if(Ib$1)return t(n,r);Ib$1=!0;try{return Gb$1(t,n,r)}finally{Ib$1=!1,(zb$1!==null||Ab$1!==null)&&(Hb$1(),Fb$1())}}function Kb$1(t,n){var r=t.stateNode;if(r===null)return null;var s=Db$1(r);if(s===null)return null;r=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(s=!((t=t.type)==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(p$d(231,n,typeof r));return r}var Lb$1=!1;if(ia$2)try{var Mb$1={};Object.defineProperty(Mb$1,"passive",{get:function(){Lb$1=!0}}),window.addEventListener("test",Mb$1,Mb$1),window.removeEventListener("test",Mb$1,Mb$1)}catch{Lb$1=!1}function Nb$1(t,n,r,s,i,o,l,u,c){var p=Array.prototype.slice.call(arguments,3);try{n.apply(r,p)}catch(m){this.onError(m)}}var Ob$1=!1,Pb$1=null,Qb$1=!1,Rb$1=null,Sb$1={onError:function(t){Ob$1=!0,Pb$1=t}};function Tb$1(t,n,r,s,i,o,l,u,c){Ob$1=!1,Pb$1=null,Nb$1.apply(Sb$1,arguments)}function Ub$1(t,n,r,s,i,o,l,u,c){if(Tb$1.apply(this,arguments),Ob$1){if(!Ob$1)throw Error(p$d(198));var p=Pb$1;Ob$1=!1,Pb$1=null,Qb$1||(Qb$1=!0,Rb$1=p)}}function Vb$1(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do 4098&(n=t).flags&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function Wb$1(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate)!==null&&(n=t.memoizedState),n!==null)return n.dehydrated}return null}function Xb$1(t){if(Vb$1(t)!==t)throw Error(p$d(188))}function Yb$1(t){var n=t.alternate;if(!n){if((n=Vb$1(t))===null)throw Error(p$d(188));return n!==t?null:t}for(var r=t,s=n;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if((s=i.return)!==null){r=s;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Xb$1(i),t;if(o===s)return Xb$1(i),n;o=o.sibling}throw Error(p$d(188))}if(r.return!==s.return)r=i,s=o;else{for(var l=!1,u=i.child;u;){if(u===r){l=!0,r=i,s=o;break}if(u===s){l=!0,s=i,r=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===r){l=!0,r=o,s=i;break}if(u===s){l=!0,s=o,r=i;break}u=u.sibling}if(!l)throw Error(p$d(189))}}if(r.alternate!==s)throw Error(p$d(190))}if(r.tag!==3)throw Error(p$d(188));return r.stateNode.current===r?t:n}function Zb$1(t){return(t=Yb$1(t))!==null?$b$1(t):null}function $b$1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=$b$1(t);if(n!==null)return n;t=t.sibling}return null}var ac$1=ca$1.unstable_scheduleCallback,bc$2=ca$1.unstable_cancelCallback,cc$1=ca$1.unstable_shouldYield,dc$1=ca$1.unstable_requestPaint,B$4=ca$1.unstable_now,ec$2=ca$1.unstable_getCurrentPriorityLevel,fc$1=ca$1.unstable_ImmediatePriority,gc$2=ca$1.unstable_UserBlockingPriority,hc$1=ca$1.unstable_NormalPriority,ic$2=ca$1.unstable_LowPriority,jc$2=ca$1.unstable_IdlePriority,kc$1=null,lc$1=null;function mc$1(t){if(lc$1&&typeof lc$1.onCommitFiberRoot=="function")try{lc$1.onCommitFiberRoot(kc$1,t,void 0,!(128&~t.current.flags))}catch{}}var oc$2=Math.clz32?Math.clz32:nc$2,pc$2=Math.log,qc$2=Math.LN2;function nc$2(t){return(t>>>=0)===0?32:31-(pc$2(t)/qc$2|0)|0}var rc$2=64,sc$2=4194304;function tc$2(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&t;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&t;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uc$1(t,n){var r=t.pendingLanes;if(r===0)return 0;var s=0,i=t.suspendedLanes,o=t.pingedLanes,l=268435455&r;if(l!==0){var u=l&~i;u!==0?s=tc$2(u):(o&=l)!==0&&(s=tc$2(o))}else(l=r&~i)!==0?s=tc$2(l):o!==0&&(s=tc$2(o));if(s===0)return 0;if(n!==0&&n!==s&&!(n&i)&&((i=s&-s)>=(o=n&-n)||i===16&&4194240&o))return n;if(4&s&&(s|=16&r),(n=t.entangledLanes)!==0)for(t=t.entanglements,n&=s;0<n;)i=1<<(r=31-oc$2(n)),s|=t[r],n&=~i;return s}function vc$2(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;default:return-1}}function wc$1(t,n){for(var r=t.suspendedLanes,s=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-oc$2(o),u=1<<l,c=i[l];c===-1?u&r&&!(u&s)||(i[l]=vc$2(u,n)):c<=n&&(t.expiredLanes|=u),o&=~u}}function xc$2(t){return(t=-1073741825&t.pendingLanes)!==0?t:1073741824&t?1073741824:0}function yc$2(){var t=rc$2;return!(4194240&(rc$2<<=1))&&(rc$2=64),t}function zc$1(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Ac$2(t,n,r){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),(t=t.eventTimes)[n=31-oc$2(n)]=r}function Bc$2(t,n){var r=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var s=t.eventTimes;for(t=t.expirationTimes;0<r;){var i=31-oc$2(r),o=1<<i;n[i]=0,s[i]=-1,t[i]=-1,r&=~o}}function Cc$2(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var s=31-oc$2(r),i=1<<s;i&n|t[s]&n&&(t[s]|=n),r&=~i}}var C$5=0;function Dc$2(t){return 1<(t&=-t)?4<t?268435455&t?16:536870912:4:1}var Ec$2,Fc$2,Gc$2,Hc$2,Ic$1,Jc$2=!1,Kc$2=[],Lc$2=null,Mc$1=null,Nc$2=null,Oc$1=new Map,Pc$2=new Map,Qc$2=[],Rc$2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc$2(t,n){switch(t){case"focusin":case"focusout":Lc$2=null;break;case"dragenter":case"dragleave":Mc$1=null;break;case"mouseover":case"mouseout":Nc$2=null;break;case"pointerover":case"pointerout":Oc$1.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc$2.delete(n.pointerId)}}function Tc$2(t,n,r,s,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:n,domEventName:r,eventSystemFlags:s,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Cb$1(n))!==null&&Fc$2(n),t):(t.eventSystemFlags|=s,n=t.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),t)}function Uc$2(t,n,r,s,i){switch(n){case"focusin":return Lc$2=Tc$2(Lc$2,t,n,r,s,i),!0;case"dragenter":return Mc$1=Tc$2(Mc$1,t,n,r,s,i),!0;case"mouseover":return Nc$2=Tc$2(Nc$2,t,n,r,s,i),!0;case"pointerover":var o=i.pointerId;return Oc$1.set(o,Tc$2(Oc$1.get(o)||null,t,n,r,s,i)),!0;case"gotpointercapture":return o=i.pointerId,Pc$2.set(o,Tc$2(Pc$2.get(o)||null,t,n,r,s,i)),!0}return!1}function Vc$2(t){var n=Wc$2(t.target);if(n!==null){var r=Vb$1(n);if(r!==null){if((n=r.tag)===13){if((n=Wb$1(r))!==null)return t.blockedOn=n,void Ic$1(t.priority,function(){Gc$2(r)})}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated)return void(t.blockedOn=r.tag===3?r.stateNode.containerInfo:null)}}t.blockedOn=null}function Xc$1(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=Yc$1(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(r!==null)return(n=Cb$1(r))!==null&&Fc$2(n),t.blockedOn=r,!1;var s=new(r=t.nativeEvent).constructor(r.type,r);wb$1=s,r.target.dispatchEvent(s),wb$1=null,n.shift()}return!0}function Zc$1(t,n,r){Xc$1(t)&&r.delete(n)}function $c$1(){Jc$2=!1,Lc$2!==null&&Xc$1(Lc$2)&&(Lc$2=null),Mc$1!==null&&Xc$1(Mc$1)&&(Mc$1=null),Nc$2!==null&&Xc$1(Nc$2)&&(Nc$2=null),Oc$1.forEach(Zc$1),Pc$2.forEach(Zc$1)}function ad$1(t,n){t.blockedOn===n&&(t.blockedOn=null,Jc$2||(Jc$2=!0,ca$1.unstable_scheduleCallback(ca$1.unstable_NormalPriority,$c$1)))}function bd$1(t){function n(i){return ad$1(i,t)}if(0<Kc$2.length){ad$1(Kc$2[0],t);for(var r=1;r<Kc$2.length;r++){var s=Kc$2[r];s.blockedOn===t&&(s.blockedOn=null)}}for(Lc$2!==null&&ad$1(Lc$2,t),Mc$1!==null&&ad$1(Mc$1,t),Nc$2!==null&&ad$1(Nc$2,t),Oc$1.forEach(n),Pc$2.forEach(n),r=0;r<Qc$2.length;r++)(s=Qc$2[r]).blockedOn===t&&(s.blockedOn=null);for(;0<Qc$2.length&&(r=Qc$2[0]).blockedOn===null;)Vc$2(r),r.blockedOn===null&&Qc$2.shift()}var cd$1=ua$2.ReactCurrentBatchConfig,dd$1=!0;function ed$1(t,n,r,s){var i=C$5,o=cd$1.transition;cd$1.transition=null;try{C$5=1,fd$1(t,n,r,s)}finally{C$5=i,cd$1.transition=o}}function gd$1(t,n,r,s){var i=C$5,o=cd$1.transition;cd$1.transition=null;try{C$5=4,fd$1(t,n,r,s)}finally{C$5=i,cd$1.transition=o}}function fd$1(t,n,r,s){if(dd$1){var i=Yc$1(t,n,r,s);if(i===null)hd$1(t,n,s,id$1,r),Sc$2(t,s);else if(Uc$2(i,t,n,r,s))s.stopPropagation();else if(Sc$2(t,s),4&n&&-1<Rc$2.indexOf(t)){for(;i!==null;){var o=Cb$1(i);if(o!==null&&Ec$2(o),(o=Yc$1(t,n,r,s))===null&&hd$1(t,n,s,id$1,r),o===i)break;i=o}i!==null&&s.stopPropagation()}else hd$1(t,n,s,null,r)}}var id$1=null;function Yc$1(t,n,r,s){if(id$1=null,(t=Wc$2(t=xb$1(s)))!==null)if((n=Vb$1(t))===null)t=null;else if((r=n.tag)===13){if((t=Wb$1(n))!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return id$1=t,null}function jd$1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec$2()){case fc$1:return 1;case gc$2:return 4;case hc$1:case ic$2:return 16;case jc$2:return 536870912;default:return 16}default:return 16}}var kd$1=null,ld$1=null,md$1=null;function nd$1(){if(md$1)return md$1;var t,n,r=ld$1,s=r.length,i="value"in kd$1?kd$1.value:kd$1.textContent,o=i.length;for(t=0;t<s&&r[t]===i[t];t++);var l=s-t;for(n=1;n<=l&&r[s-n]===i[o-n];n++);return md$1=i.slice(t,1<n?1-n:void 0)}function od$1(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode)===0&&n===13&&(t=13):t=n,t===10&&(t=13),32<=t||t===13?t:0}function pd$1(){return!0}function qd$1(){return!1}function rd$1(t){function n(r,s,i,o,l){for(var u in this._reactName=r,this._targetInst=i,this.type=s,this.nativeEvent=o,this.target=l,this.currentTarget=null,t)t.hasOwnProperty(u)&&(r=t[u],this[u]=r?r(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pd$1:qd$1,this.isPropagationStopped=qd$1,this}return A$5(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=pd$1)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=pd$1)},persist:function(){},isPersistent:pd$1}),n}var sd$1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td$1=rd$1(sd$1),ud$1=A$5({},sd$1,{view:0,detail:0}),vd$1=rd$1(ud$1),wd$1,xd$1,yd$1,Ad$1=A$5({},ud$1,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd$1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yd$1&&(yd$1&&t.type==="mousemove"?(wd$1=t.screenX-yd$1.screenX,xd$1=t.screenY-yd$1.screenY):xd$1=wd$1=0,yd$1=t),wd$1)},movementY:function(t){return"movementY"in t?t.movementY:xd$1}}),Bd$1=rd$1(Ad$1),Cd$1=A$5({},Ad$1,{dataTransfer:0}),Dd$1=rd$1(Cd$1),Ed$1=A$5({},ud$1,{relatedTarget:0}),Fd$1=rd$1(Ed$1),Gd$1=A$5({},sd$1,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd$1=rd$1(Gd$1),Id$1=A$5({},sd$1,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jd$1=rd$1(Id$1),Kd$1=A$5({},sd$1,{data:0}),Ld$1=rd$1(Kd$1),Md$1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd$1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od$1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd$1(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):!!(t=Od$1[t])&&!!n[t]}function zd$1(){return Pd$1}var Qd$1=A$5({},ud$1,{key:function(t){if(t.key){var n=Md$1[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=od$1(t))===13?"Enter":String.fromCharCode(t):t.type==="keydown"||t.type==="keyup"?Nd$1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd$1,charCode:function(t){return t.type==="keypress"?od$1(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?od$1(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rd$1=rd$1(Qd$1),Sd$1=A$5({},Ad$1,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td$1=rd$1(Sd$1),Ud$1=A$5({},ud$1,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd$1}),Vd$1=rd$1(Ud$1),Wd$1=A$5({},sd$1,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd$1=rd$1(Wd$1),Yd$1=A$5({},Ad$1,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd$1=rd$1(Yd$1),$d$1=[9,13,27,32],ae$2=ia$2&&"CompositionEvent"in window,be$2=null;ia$2&&"documentMode"in document&&(be$2=document.documentMode);var ce$1=ia$2&&"TextEvent"in window&&!be$2,de=ia$2&&(!ae$2||be$2&&8<be$2&&11>=be$2),ee$1=" ",fe$1=!1;function ge$2(t,n){switch(t){case"keyup":return $d$1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he$1(t){return typeof(t=t.detail)=="object"&&"data"in t?t.data:null}var ie$1=!1;function je$2(t,n){switch(t){case"compositionend":return he$1(n);case"keypress":return n.which!==32?null:(fe$1=!0,ee$1);case"textInput":return(t=n.data)===ee$1&&fe$1?null:t;default:return null}}function ke$2(t,n){if(ie$1)return t==="compositionend"||!ae$2&&ge$2(t,n)?(t=nd$1(),md$1=ld$1=kd$1=null,ie$1=!1,t):null;switch(t){case"paste":default:return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return de&&n.locale!=="ko"?null:n.data}}var le$1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me$1(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!le$1[t.type]:n==="textarea"}function ne$1(t,n,r,s){Eb(s),0<(n=oe$1(n,"onChange")).length&&(r=new td$1("onChange","change",null,r,s),t.push({event:r,listeners:n}))}var pe$1=null,qe$2=null;function re$1(t){se$1(t,0)}function te$1(t){if(Wa$1(ue$1(t)))return t}function ve$1(t,n){if(t==="change")return n}var we$1=!1;if(ia$2){var xe$2;if(ia$2){var ye$2="oninput"in document;if(!ye$2){var ze$1=document.createElement("div");ze$1.setAttribute("oninput","return;"),ye$2=typeof ze$1.oninput=="function"}xe$2=ye$2}else xe$2=!1;we$1=xe$2&&(!document.documentMode||9<document.documentMode)}function Ae$2(){pe$1&&(pe$1.detachEvent("onpropertychange",Be),qe$2=pe$1=null)}function Be(t){if(t.propertyName==="value"&&te$1(qe$2)){var n=[];ne$1(n,qe$2,t,xb$1(t)),Jb$1(re$1,n)}}function Ce$2(t,n,r){t==="focusin"?(Ae$2(),qe$2=r,(pe$1=n).attachEvent("onpropertychange",Be)):t==="focusout"&&Ae$2()}function De$2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return te$1(qe$2)}function Ee$2(t,n){if(t==="click")return te$1(n)}function Fe$2(t,n){if(t==="input"||t==="change")return te$1(n)}function Ge$2(t,n){return t===n&&(t!==0||1/t==1/n)||t!=t&&n!=n}var He$2=typeof Object.is=="function"?Object.is:Ge$2;function Ie$2(t,n){if(He$2(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),s=Object.keys(n);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var i=r[s];if(!ja.call(n,i)||!He$2(t[i],n[i]))return!1}return!0}function Je$2(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ke$2(t,n){var r,s=Je$2(t);for(t=0;s;){if(s.nodeType===3){if(r=t+s.textContent.length,t<=n&&r>=n)return{node:s,offset:n-t};t=r}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Je$2(s)}}function Le$2(t,n){return!(!t||!n)&&(t===n||(!t||t.nodeType!==3)&&(n&&n.nodeType===3?Le$2(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}function Me$2(){for(var t=window,n=Xa();n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(!r)break;n=Xa((t=n.contentWindow).document)}return n}function Ne$2(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Oe$2(t){var n=Me$2(),r=t.focusedElem,s=t.selectionRange;if(n!==r&&r&&r.ownerDocument&&Le$2(r.ownerDocument.documentElement,r)){if(s!==null&&Ne$2(r)){if(n=s.start,(t=s.end)===void 0&&(t=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(t,r.value.length);else if((t=(n=r.ownerDocument||document)&&n.defaultView||window).getSelection){t=t.getSelection();var i=r.textContent.length,o=Math.min(s.start,i);s=s.end===void 0?o:Math.min(s.end,i),!t.extend&&o>s&&(i=s,s=o,o=i),i=Ke$2(r,o);var l=Ke$2(r,s);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&((n=n.createRange()).setStart(i.node,i.offset),t.removeAllRanges(),o>s?(t.addRange(n),t.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),t.addRange(n)))}}for(n=[],t=r;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)(t=n[r]).element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Pe$2=ia$2&&"documentMode"in document&&11>=document.documentMode,Qe$2=null,Re$2=null,Se$2=null,Te$2=!1;function Ue$2(t,n,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Te$2||Qe$2==null||Qe$2!==Xa(s)||("selectionStart"in(s=Qe$2)&&Ne$2(s)?s={start:s.selectionStart,end:s.selectionEnd}:s={anchorNode:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset},Se$2&&Ie$2(Se$2,s)||(Se$2=s,0<(s=oe$1(Re$2,"onSelect")).length&&(n=new td$1("onSelect","select",null,n,r),t.push({event:n,listeners:s}),n.target=Qe$2)))}function Ve$2(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var We$2={animationend:Ve$2("Animation","AnimationEnd"),animationiteration:Ve$2("Animation","AnimationIteration"),animationstart:Ve$2("Animation","AnimationStart"),transitionend:Ve$2("Transition","TransitionEnd")},Xe$2={},Ye$2={};function Ze$2(t){if(Xe$2[t])return Xe$2[t];if(!We$2[t])return t;var n,r=We$2[t];for(n in r)if(r.hasOwnProperty(n)&&n in Ye$2)return Xe$2[t]=r[n];return t}ia$2&&(Ye$2=document.createElement("div").style,"AnimationEvent"in window||(delete We$2.animationend.animation,delete We$2.animationiteration.animation,delete We$2.animationstart.animation),"TransitionEvent"in window||delete We$2.transitionend.transition);var $e$2=Ze$2("animationend"),af=Ze$2("animationiteration"),bf=Ze$2("animationstart"),cf=Ze$2("transitionend"),df$1=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(t,n){df$1.set(t,n),fa$1(n,[t])}for(var gf=0;gf<ef.length;gf++){var hf$1=ef[gf],jf=hf$1.toLowerCase(),kf=hf$1[0].toUpperCase()+hf$1.slice(1);ff(jf,"on"+kf)}ff($e$2,"onAnimationEnd"),ff(af,"onAnimationIteration"),ff(bf,"onAnimationStart"),ff("dblclick","onDoubleClick"),ff("focusin","onFocus"),ff("focusout","onBlur"),ff(cf,"onTransitionEnd"),ha$1("onMouseEnter",["mouseout","mouseover"]),ha$1("onMouseLeave",["mouseout","mouseover"]),ha$1("onPointerEnter",["pointerout","pointerover"]),ha$1("onPointerLeave",["pointerout","pointerover"]),fa$1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fa$1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fa$1("onBeforeInput",["compositionend","keypress","textInput","paste"]),fa$1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fa$1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fa$1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf$1(t,n,r){var s=t.type||"unknown-event";t.currentTarget=r,Ub$1(s,n,void 0,t),t.currentTarget=null}function se$1(t,n){n=!!(4&n);for(var r=0;r<t.length;r++){var s=t[r],i=s.event;s=s.listeners;e:{var o=void 0;if(n)for(var l=s.length-1;0<=l;l--){var u=s[l],c=u.instance,p=u.currentTarget;if(u=u.listener,c!==o&&i.isPropagationStopped())break e;nf$1(i,u,p),o=c}else for(l=0;l<s.length;l++){if(c=(u=s[l]).instance,p=u.currentTarget,u=u.listener,c!==o&&i.isPropagationStopped())break e;nf$1(i,u,p),o=c}}}if(Qb$1)throw t=Rb$1,Qb$1=!1,Rb$1=null,t}function D$6(t,n){var r=n[of$2];r===void 0&&(r=n[of$2]=new Set);var s=t+"__bubble";r.has(s)||(pf(n,t,2,!1),r.add(s))}function qf(t,n,r){var s=0;n&&(s|=4),pf(r,t,s,n)}var rf$1="_reactListening"+Math.random().toString(36).slice(2);function sf$1(t){if(!t[rf$1]){t[rf$1]=!0,da.forEach(function(r){r!=="selectionchange"&&(mf.has(r)||qf(r,!1,t),qf(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[rf$1]||(n[rf$1]=!0,qf("selectionchange",!1,n))}}function pf(t,n,r,s){switch(jd$1(n)){case 1:var i=ed$1;break;case 4:i=gd$1;break;default:i=fd$1}r=i.bind(null,n,r,t),i=void 0,!Lb$1||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),s?i!==void 0?t.addEventListener(n,r,{capture:!0,passive:i}):t.addEventListener(n,r,!0):i!==void 0?t.addEventListener(n,r,{passive:i}):t.addEventListener(n,r,!1)}function hd$1(t,n,r,s,i){var o=s;if(!(1&n||2&n||s===null))e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var u=s.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=s.return;l!==null;){var c=l.tag;if((c===3||c===4)&&((c=l.stateNode.containerInfo)===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;u!==null;){if((l=Wc$2(u))===null)return;if((c=l.tag)===5||c===6){s=o=l;continue e}u=u.parentNode}}s=s.return}Jb$1(function(){var p=o,m=xb$1(r),y=[];e:{var $=df$1.get(t);if($!==void 0){var S=td$1,x=t;switch(t){case"keypress":if(od$1(r)===0)break e;case"keydown":case"keyup":S=Rd$1;break;case"focusin":x="focus",S=Fd$1;break;case"focusout":x="blur",S=Fd$1;break;case"beforeblur":case"afterblur":S=Fd$1;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Bd$1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Dd$1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Vd$1;break;case $e$2:case af:case bf:S=Hd$1;break;case cf:S=Xd$1;break;case"scroll":S=vd$1;break;case"wheel":S=Zd$1;break;case"copy":case"cut":case"paste":S=Jd$1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Td$1}var h=!!(4&n),N=!h&&t==="scroll",L=h?$!==null?$+"Capture":null:$;h=[];for(var pe,tt=p;tt!==null;){var me=(pe=tt).stateNode;if(pe.tag===5&&me!==null&&(pe=me,L!==null&&(me=Kb$1(tt,L))!=null&&h.push(tf(tt,me,pe))),N)break;tt=tt.return}0<h.length&&($=new S($,x,null,r,m),y.push({event:$,listeners:h}))}}if(!(7&n)){if(S=t==="mouseout"||t==="pointerout",(!($=t==="mouseover"||t==="pointerover")||r===wb$1||!(x=r.relatedTarget||r.fromElement)||!Wc$2(x)&&!x[uf$1])&&(S||$)&&($=m.window===m?m:($=m.ownerDocument)?$.defaultView||$.parentWindow:window,S?(S=p,(x=(x=r.relatedTarget||r.toElement)?Wc$2(x):null)!==null&&(x!==(N=Vb$1(x))||x.tag!==5&&x.tag!==6)&&(x=null)):(S=null,x=p),S!==x)){if(h=Bd$1,me="onMouseLeave",L="onMouseEnter",tt="mouse",t!=="pointerout"&&t!=="pointerover"||(h=Td$1,me="onPointerLeave",L="onPointerEnter",tt="pointer"),N=S==null?$:ue$1(S),pe=x==null?$:ue$1(x),($=new h(me,tt+"leave",S,r,m)).target=N,$.relatedTarget=pe,me=null,Wc$2(m)===p&&((h=new h(L,tt+"enter",x,r,m)).target=pe,h.relatedTarget=N,me=h),N=me,S&&x)e:{for(L=x,tt=0,pe=h=S;pe;pe=vf(pe))tt++;for(pe=0,me=L;me;me=vf(me))pe++;for(;0<tt-pe;)h=vf(h),tt--;for(;0<pe-tt;)L=vf(L),pe--;for(;tt--;){if(h===L||L!==null&&h===L.alternate)break e;h=vf(h),L=vf(L)}h=null}else h=null;S!==null&&wf(y,$,S,h,!1),x!==null&&N!==null&&wf(y,N,x,h,!0)}if((S=($=p?ue$1(p):window).nodeName&&$.nodeName.toLowerCase())==="select"||S==="input"&&$.type==="file")var st=ve$1;else if(me$1($))if(we$1)st=Fe$2;else{st=De$2;var xt=Ce$2}else(S=$.nodeName)&&S.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(st=Ee$2);switch(st&&(st=st(t,p))?ne$1(y,st,r,m):(xt&&xt(t,$,p),t==="focusout"&&(xt=$._wrapperState)&&xt.controlled&&$.type==="number"&&cb$1($,"number",$.value)),xt=p?ue$1(p):window,t){case"focusin":(me$1(xt)||xt.contentEditable==="true")&&(Qe$2=xt,Re$2=p,Se$2=null);break;case"focusout":Se$2=Re$2=Qe$2=null;break;case"mousedown":Te$2=!0;break;case"contextmenu":case"mouseup":case"dragend":Te$2=!1,Ue$2(y,r,m);break;case"selectionchange":if(Pe$2)break;case"keydown":case"keyup":Ue$2(y,r,m)}var nt;if(ae$2)e:{switch(t){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else ie$1?ge$2(t,r)&&(Et="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Et="onCompositionStart");Et&&(de&&r.locale!=="ko"&&(ie$1||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&ie$1&&(nt=nd$1()):(ld$1="value"in(kd$1=m)?kd$1.value:kd$1.textContent,ie$1=!0)),0<(xt=oe$1(p,Et)).length&&(Et=new Ld$1(Et,t,null,r,m),y.push({event:Et,listeners:xt}),(nt||(nt=he$1(r))!==null)&&(Et.data=nt))),(nt=ce$1?je$2(t,r):ke$2(t,r))&&0<(p=oe$1(p,"onBeforeInput")).length&&(m=new Ld$1("onBeforeInput","beforeinput",null,r,m),y.push({event:m,listeners:p}),m.data=nt)}se$1(y,n)})}function tf(t,n,r){return{instance:t,listener:n,currentTarget:r}}function oe$1(t,n){for(var r=n+"Capture",s=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,(o=Kb$1(t,r))!=null&&s.unshift(tf(t,o,i)),(o=Kb$1(t,n))!=null&&s.push(tf(t,o,i))),t=t.return}return s}function vf(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wf(t,n,r,s,i){for(var o=n._reactName,l=[];r!==null&&r!==s;){var u=r,c=u.alternate,p=u.stateNode;if(c!==null&&c===s)break;u.tag===5&&p!==null&&(u=p,i?(c=Kb$1(r,o))!=null&&l.unshift(tf(r,c,u)):i||(c=Kb$1(r,o))!=null&&l.push(tf(r,c,u))),r=r.return}l.length!==0&&t.push({event:n,listeners:l})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(t){return(typeof t=="string"?t:""+t).replace(xf,`
`).replace(yf,"")}function Af$1(t,n,r){if(n=zf(n),zf(t)!==n&&r)throw Error(p$d(425))}function Bf(){}var Cf=null,Df=null;function Ef(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:Hf!==void 0?function(t){return Hf.resolve(null).then(t).catch(If$1)}:Ff;function If$1(t){setTimeout(function(){throw t})}function Kf(t,n){var r=n,s=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if((r=i.data)==="/$"){if(s===0)return t.removeChild(i),void bd$1(n);s--}else r!=="$"&&r!=="$?"&&r!=="$!"||s++;r=i}while(r);bd$1(n)}function Lf(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if((n=t.data)==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Mf(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf$1="__reactContainer$"+Nf,of$2="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc$2(t){var n=t[Of];if(n)return n;for(var r=t.parentNode;r;){if(n=r[uf$1]||r[Of]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=Mf(t);t!==null;){if(r=t[Of])return r;t=Mf(t)}return n}r=(t=r).parentNode}return null}function Cb$1(t){return!(t=t[Of]||t[uf$1])||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ue$1(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(p$d(33))}function Db$1(t){return t[Pf]||null}var Sf=[],Tf=-1;function Uf(t){return{current:t}}function E$4(t){0>Tf||(t.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G$3(t,n){Tf++,Sf[Tf]=t.current,t.current=n}var Vf={},H$4=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(t,n){var r=t.type.contextTypes;if(!r)return Vf;var s=t.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in r)o[i]=n[i];return s&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=o),o}function Zf(t){return(t=t.childContextTypes)!=null}function $f(){E$4(Wf),E$4(H$4)}function ag(t,n,r){if(H$4.current!==Vf)throw Error(p$d(168));G$3(H$4,n),G$3(Wf,r)}function bg(t,n,r){var s=t.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return r;for(var i in s=s.getChildContext())if(!(i in n))throw Error(p$d(108,Ra$1(t)||"Unknown",i));return A$5({},r,s)}function cg(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vf,Xf=H$4.current,G$3(H$4,t),G$3(Wf,Wf.current),!0}function dg(t,n,r){var s=t.stateNode;if(!s)throw Error(p$d(169));r?(t=bg(t,n,Xf),s.__reactInternalMemoizedMergedChildContext=t,E$4(Wf),E$4(H$4),G$3(H$4,t)):E$4(Wf),G$3(Wf,r)}var eg=null,fg=!1,gg=!1;function hg(t){eg===null?eg=[t]:eg.push(t)}function ig(t){fg=!0,hg(t)}function jg(){if(!gg&&eg!==null){gg=!0;var t=0,n=C$5;try{var r=eg;for(C$5=1;t<r.length;t++){var s=r[t];do s=s(!0);while(s!==null)}eg=null,fg=!1}catch(i){throw eg!==null&&(eg=eg.slice(t+1)),ac$1(fc$1,jg),i}finally{C$5=n,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(t,n){kg[lg++]=ng,kg[lg++]=mg,mg=t,ng=n}function ug(t,n,r){og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,qg=t;var s=rg;t=sg;var i=32-oc$2(s)-1;s&=~(1<<i),r+=1;var o=32-oc$2(n)+i;if(30<o){var l=i-i%5;o=(s&(1<<l)-1).toString(32),s>>=l,i-=l,rg=1<<32-oc$2(n)+i|r<<i|s,sg=o+t}else rg=1<<o|r<<i|s,sg=t}function vg(t){t.return!==null&&(tg(t,1),ug(t,1,0))}function wg(t){for(;t===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;t===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I$4=!1,zg=null;function Ag(t,n){var r=Bg(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=t,(n=t.deletions)===null?(t.deletions=[r],t.flags|=16):n.push(r)}function Cg(t,n){switch(t.tag){case 5:var r=t.type;return(n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n)!==null&&(t.stateNode=n,xg=t,yg=Lf(n.firstChild),!0);case 6:return(n=t.pendingProps===""||n.nodeType!==3?null:n)!==null&&(t.stateNode=n,xg=t,yg=null,!0);case 13:return(n=n.nodeType!==8?null:n)!==null&&(r=qg!==null?{id:rg,overflow:sg}:null,t.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},(r=Bg(18,null,null,0)).stateNode=n,r.return=t,t.child=r,xg=t,yg=null,!0);default:return!1}}function Dg(t){return!(!(1&t.mode)||128&t.flags)}function Eg(t){if(I$4){var n=yg;if(n){var r=n;if(!Cg(t,n)){if(Dg(t))throw Error(p$d(418));n=Lf(r.nextSibling);var s=xg;n&&Cg(t,n)?Ag(s,r):(t.flags=-4097&t.flags|2,I$4=!1,xg=t)}}else{if(Dg(t))throw Error(p$d(418));t.flags=-4097&t.flags|2,I$4=!1,xg=t}}}function Fg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xg=t}function Gg(t){if(t!==xg)return!1;if(!I$4)return Fg(t),I$4=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=(n=t.type)!=="head"&&n!=="body"&&!Ef(t.type,t.memoizedProps)),n&&(n=yg)){if(Dg(t))throw Hg(),Error(p$d(418));for(;n;)Ag(t,n),n=Lf(n.nextSibling)}if(Fg(t),t.tag===13){if(!(t=(t=t.memoizedState)!==null?t.dehydrated:null))throw Error(p$d(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(n===0){yg=Lf(t.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}t=t.nextSibling}yg=null}}else yg=xg?Lf(t.stateNode.nextSibling):null;return!0}function Hg(){for(var t=yg;t;)t=Lf(t.nextSibling)}function Ig(){yg=xg=null,I$4=!1}function Jg(t){zg===null?zg=[t]:zg.push(t)}var Kg=ua$2.ReactCurrentBatchConfig;function Lg(t,n,r){if((t=r.ref)!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner){if(r.tag!==1)throw Error(p$d(309));var s=r.stateNode}if(!s)throw Error(p$d(147,t));var i=s,o=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:((n=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l})._stringRef=o,n)}if(typeof t!="string")throw Error(p$d(284));if(!r._owner)throw Error(p$d(290,t))}return t}function Mg(t,n){throw t=Object.prototype.toString.call(n),Error(p$d(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Ng(t){return(0,t._init)(t._payload)}function Og(t){function n(x,h){if(t){var N=x.deletions;N===null?(x.deletions=[h],x.flags|=16):N.push(h)}}function r(x,h){if(!t)return null;for(;h!==null;)n(x,h),h=h.sibling;return null}function s(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function i(x,h){return(x=Pg(x,h)).index=0,x.sibling=null,x}function o(x,h,N){return x.index=N,t?(N=x.alternate)!==null?(N=N.index)<h?(x.flags|=2,h):N:(x.flags|=2,h):(x.flags|=1048576,h)}function l(x){return t&&x.alternate===null&&(x.flags|=2),x}function u(x,h,N,L){return h===null||h.tag!==6?((h=Qg(N,x.mode,L)).return=x,h):((h=i(h,N)).return=x,h)}function c(x,h,N,L){var pe=N.type;return pe===ya$1?m(x,h,N.props.children,L,N.key):h!==null&&(h.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Ha$2&&Ng(pe)===h.type)?((L=i(h,N.props)).ref=Lg(x,h,N),L.return=x,L):((L=Rg(N.type,N.key,N.props,null,x.mode,L)).ref=Lg(x,h,N),L.return=x,L)}function p(x,h,N,L){return h===null||h.tag!==4||h.stateNode.containerInfo!==N.containerInfo||h.stateNode.implementation!==N.implementation?((h=Sg(N,x.mode,L)).return=x,h):((h=i(h,N.children||[])).return=x,h)}function m(x,h,N,L,pe){return h===null||h.tag!==7?((h=Tg(N,x.mode,L,pe)).return=x,h):((h=i(h,N)).return=x,h)}function y(x,h,N){if(typeof h=="string"&&h!==""||typeof h=="number")return(h=Qg(""+h,x.mode,N)).return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case va$1:return(N=Rg(h.type,h.key,h.props,null,x.mode,N)).ref=Lg(x,null,h),N.return=x,N;case wa$1:return(h=Sg(h,x.mode,N)).return=x,h;case Ha$2:return y(x,(0,h._init)(h._payload),N)}if(eb$1(h)||Ka$2(h))return(h=Tg(h,x.mode,N,null)).return=x,h;Mg(x,h)}return null}function $(x,h,N,L){var pe=h!==null?h.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return pe!==null?null:u(x,h,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case va$1:return N.key===pe?c(x,h,N,L):null;case wa$1:return N.key===pe?p(x,h,N,L):null;case Ha$2:return $(x,h,(pe=N._init)(N._payload),L)}if(eb$1(N)||Ka$2(N))return pe!==null?null:m(x,h,N,L,null);Mg(x,N)}return null}function S(x,h,N,L,pe){if(typeof L=="string"&&L!==""||typeof L=="number")return u(h,x=x.get(N)||null,""+L,pe);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case va$1:return c(h,x=x.get(L.key===null?N:L.key)||null,L,pe);case wa$1:return p(h,x=x.get(L.key===null?N:L.key)||null,L,pe);case Ha$2:return S(x,h,N,(0,L._init)(L._payload),pe)}if(eb$1(L)||Ka$2(L))return m(h,x=x.get(N)||null,L,pe,null);Mg(h,L)}return null}return function x(h,N,L,pe){if(typeof L=="object"&&L!==null&&L.type===ya$1&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case va$1:e:{for(var tt=L.key,me=N;me!==null;){if(me.key===tt){if((tt=L.type)===ya$1){if(me.tag===7){r(h,me.sibling),(N=i(me,L.props.children)).return=h,h=N;break e}}else if(me.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Ha$2&&Ng(tt)===me.type){r(h,me.sibling),(N=i(me,L.props)).ref=Lg(h,me,L),N.return=h,h=N;break e}r(h,me);break}n(h,me),me=me.sibling}L.type===ya$1?((N=Tg(L.props.children,h.mode,pe,L.key)).return=h,h=N):((pe=Rg(L.type,L.key,L.props,null,h.mode,pe)).ref=Lg(h,N,L),pe.return=h,h=pe)}return l(h);case wa$1:e:{for(me=L.key;N!==null;){if(N.key===me){if(N.tag===4&&N.stateNode.containerInfo===L.containerInfo&&N.stateNode.implementation===L.implementation){r(h,N.sibling),(N=i(N,L.children||[])).return=h,h=N;break e}r(h,N);break}n(h,N),N=N.sibling}(N=Sg(L,h.mode,pe)).return=h,h=N}return l(h);case Ha$2:return x(h,N,(me=L._init)(L._payload),pe)}if(eb$1(L))return function(st,xt,nt,Et){for(var At=null,Ct=null,bt=xt,yt=xt=0,St=null;bt!==null&&yt<nt.length;yt++){bt.index>yt?(St=bt,bt=null):St=bt.sibling;var _t=$(st,bt,nt[yt],Et);if(_t===null){bt===null&&(bt=St);break}t&&bt&&_t.alternate===null&&n(st,bt),xt=o(_t,xt,yt),Ct===null?At=_t:Ct.sibling=_t,Ct=_t,bt=St}if(yt===nt.length)return r(st,bt),I$4&&tg(st,yt),At;if(bt===null){for(;yt<nt.length;yt++)(bt=y(st,nt[yt],Et))!==null&&(xt=o(bt,xt,yt),Ct===null?At=bt:Ct.sibling=bt,Ct=bt);return I$4&&tg(st,yt),At}for(bt=s(st,bt);yt<nt.length;yt++)(St=S(bt,st,yt,nt[yt],Et))!==null&&(t&&St.alternate!==null&&bt.delete(St.key===null?yt:St.key),xt=o(St,xt,yt),Ct===null?At=St:Ct.sibling=St,Ct=St);return t&&bt.forEach(function(kt){return n(st,kt)}),I$4&&tg(st,yt),At}(h,N,L,pe);if(Ka$2(L))return function(st,xt,nt,Et){var At=Ka$2(nt);if(typeof At!="function")throw Error(p$d(150));if((nt=At.call(nt))==null)throw Error(p$d(151));for(var Ct=At=null,bt=xt,yt=xt=0,St=null,_t=nt.next();bt!==null&&!_t.done;yt++,_t=nt.next()){bt.index>yt?(St=bt,bt=null):St=bt.sibling;var kt=$(st,bt,_t.value,Et);if(kt===null){bt===null&&(bt=St);break}t&&bt&&kt.alternate===null&&n(st,bt),xt=o(kt,xt,yt),Ct===null?At=kt:Ct.sibling=kt,Ct=kt,bt=St}if(_t.done)return r(st,bt),I$4&&tg(st,yt),At;if(bt===null){for(;!_t.done;yt++,_t=nt.next())(_t=y(st,_t.value,Et))!==null&&(xt=o(_t,xt,yt),Ct===null?At=_t:Ct.sibling=_t,Ct=_t);return I$4&&tg(st,yt),At}for(bt=s(st,bt);!_t.done;yt++,_t=nt.next())(_t=S(bt,st,yt,_t.value,Et))!==null&&(t&&_t.alternate!==null&&bt.delete(_t.key===null?yt:_t.key),xt=o(_t,xt,yt),Ct===null?At=_t:Ct.sibling=_t,Ct=_t);return t&&bt.forEach(function(Tt){return n(st,Tt)}),I$4&&tg(st,yt),At}(h,N,L,pe);Mg(h,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,N!==null&&N.tag===6?(r(h,N.sibling),(N=i(N,L)).return=h,h=N):(r(h,N),(N=Qg(L,h.mode,pe)).return=h,h=N),l(h)):r(h,N)}}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah$1(t){var n=Wg.current;E$4(Wg),t._currentValue=n}function bh$1(t,n,r){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===r)break;t=t.return}}function ch$1(t,n){Xg=t,Zg=Yg=null,(t=t.dependencies)!==null&&t.firstContext!==null&&(t.lanes&n&&(dh$1=!0),t.firstContext=null)}function eh$1(t){var n=t._currentValue;if(Zg!==t)if(t={context:t,memoizedValue:n,next:null},Yg===null){if(Xg===null)throw Error(p$d(308));Yg=t,Xg.dependencies={lanes:0,firstContext:t}}else Yg=Yg.next=t;return n}var fh$1=null;function gh(t){fh$1===null?fh$1=[t]:fh$1.push(t)}function hh$1(t,n,r,s){var i=n.interleaved;return i===null?(r.next=r,gh(n)):(r.next=i.next,i.next=r),n.interleaved=r,ih(t,s)}function ih(t,n){t.lanes|=n;var r=t.alternate;for(r!==null&&(r.lanes|=n),r=t,t=t.return;t!==null;)t.childLanes|=n,(r=t.alternate)!==null&&(r.childLanes|=n),r=t,t=t.return;return r.tag===3?r.stateNode:null}var jh$1=!1;function kh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh$1(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mh(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function nh$1(t,n,r){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,2&K$3){var i=s.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),s.pending=n,ih(t,r)}return(i=s.interleaved)===null?(n.next=n,gh(s)):(n.next=i.next,i.next=n),s.interleaved=n,ih(t,r)}function oh$1(t,n,r){if((n=n.updateQueue)!==null&&(n=n.shared,4194240&r)){var s=n.lanes;r|=s&=t.pendingLanes,n.lanes=r,Cc$2(t,r)}}function ph(t,n){var r=t.updateQueue,s=t.alternate;if(s!==null&&r===(s=s.updateQueue)){var i=null,o=null;if((r=r.firstBaseUpdate)!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=l:o=o.next=l,r=r.next}while(r!==null);o===null?i=o=n:o=o.next=n}else i=o=n;return r={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:s.shared,effects:s.effects},void(t.updateQueue=r)}(t=r.lastBaseUpdate)===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}function qh(t,n,r,s){var i=t.updateQueue;jh$1=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,p=c.next;c.next=null,l===null?o=p:l.next=p,l=c;var m=t.alternate;m!==null&&(u=(m=m.updateQueue).lastBaseUpdate)!==l&&(u===null?m.firstBaseUpdate=p:u.next=p,m.lastBaseUpdate=c)}if(o!==null){var y=i.baseState;for(l=0,m=p=c=null,u=o;;){var $=u.lane,S=u.eventTime;if((s&$)===$){m!==null&&(m=m.next={eventTime:S,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=t,h=u;switch($=n,S=r,h.tag){case 1:if(typeof(x=h.payload)=="function"){y=x.call(S,y,$);break e}y=x;break e;case 3:x.flags=-65537&x.flags|128;case 0:if(($=typeof(x=h.payload)=="function"?x.call(S,y,$):x)==null)break e;y=A$5({},y,$);break e;case 2:jh$1=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,($=i.effects)===null?i.effects=[u]:$.push(u))}else S={eventTime:S,lane:$,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(p=m=S,c=y):m=m.next=S,l|=$;if((u=u.next)===null){if((u=i.shared.pending)===null)break;u=($=u).next,$.next=null,i.lastBaseUpdate=$,i.shared.pending=null}}if(m===null&&(c=y),i.baseState=c,i.firstBaseUpdate=p,i.lastBaseUpdate=m,(n=i.shared.interleaved)!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);rh$1|=l,t.lanes=l,t.memoizedState=y}}function sh$1(t,n,r){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var s=t[n],i=s.callback;if(i!==null){if(s.callback=null,s=r,typeof i!="function")throw Error(p$d(191,i));i.call(s)}}}var th$1={},uh$1=Uf(th$1),vh$1=Uf(th$1),wh$1=Uf(th$1);function xh(t){if(t===th$1)throw Error(p$d(174));return t}function yh(t,n){switch(G$3(wh$1,n),G$3(vh$1,t),G$3(uh$1,th$1),t=n.nodeType){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:lb$1(null,"");break;default:n=lb$1(n=(t=t===8?n.parentNode:n).namespaceURI||null,t=t.tagName)}E$4(uh$1),G$3(uh$1,n)}function zh$1(){E$4(uh$1),E$4(vh$1),E$4(wh$1)}function Ah(t){xh(wh$1.current);var n=xh(uh$1.current),r=lb$1(n,t.type);n!==r&&(G$3(vh$1,t),G$3(uh$1,r))}function Bh(t){vh$1.current===t&&(E$4(uh$1),E$4(vh$1))}var L$3=Uf(0);function Ch(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&((r=r.dehydrated)===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(128&n.flags)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Dh=[];function Eh(){for(var t=0;t<Dh.length;t++)Dh[t]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua$2.ReactCurrentDispatcher,Gh=ua$2.ReactCurrentBatchConfig,Hh=0,M$4=null,N$2=null,O$3=null,Ih$1=!1,Jh$1=!1,Kh$1=0,Lh=0;function P$2(){throw Error(p$d(321))}function Mh(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!He$2(t[r],n[r]))return!1;return!0}function Nh(t,n,r,s,i,o){if(Hh=o,M$4=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fh.current=t===null||t.memoizedState===null?Oh:Ph,t=r(s,i),Jh$1){o=0;do{if(Jh$1=!1,Kh$1=0,25<=o)throw Error(p$d(301));o+=1,O$3=N$2=null,n.updateQueue=null,Fh.current=Qh$1,t=r(s,i)}while(Jh$1)}if(Fh.current=Rh$1,n=N$2!==null&&N$2.next!==null,Hh=0,O$3=N$2=M$4=null,Ih$1=!1,n)throw Error(p$d(300));return t}function Sh(){var t=Kh$1!==0;return Kh$1=0,t}function Th$1(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return O$3===null?M$4.memoizedState=O$3=t:O$3=O$3.next=t,O$3}function Uh$1(){if(N$2===null){var t=M$4.alternate;t=t!==null?t.memoizedState:null}else t=N$2.next;var n=O$3===null?M$4.memoizedState:O$3.next;if(n!==null)O$3=n,N$2=t;else{if(t===null)throw Error(p$d(310));t={memoizedState:(N$2=t).memoizedState,baseState:N$2.baseState,baseQueue:N$2.baseQueue,queue:N$2.queue,next:null},O$3===null?M$4.memoizedState=O$3=t:O$3=O$3.next=t}return O$3}function Vh$1(t,n){return typeof n=="function"?n(t):n}function Wh(t){var n=Uh$1(),r=n.queue;if(r===null)throw Error(p$d(311));r.lastRenderedReducer=t;var s=N$2,i=s.baseQueue,o=r.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}s.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,s=s.baseState;var u=l=null,c=null,p=o;do{var m=p.lane;if((Hh&m)===m)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),s=p.hasEagerState?p.eagerState:t(s,p.action);else{var y={lane:m,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(u=c=y,l=s):c=c.next=y,M$4.lanes|=m,rh$1|=m}p=p.next}while(p!==null&&p!==o);c===null?l=s:c.next=u,He$2(s,n.memoizedState)||(dh$1=!0),n.memoizedState=s,n.baseState=l,n.baseQueue=c,r.lastRenderedState=s}if((t=r.interleaved)!==null){i=t;do o=i.lane,M$4.lanes|=o,rh$1|=o,i=i.next;while(i!==t)}else i===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Xh$1(t){var n=Uh$1(),r=n.queue;if(r===null)throw Error(p$d(311));r.lastRenderedReducer=t;var s=r.dispatch,i=r.pending,o=n.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do o=t(o,l.action),l=l.next;while(l!==i);He$2(o,n.memoizedState)||(dh$1=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),r.lastRenderedState=o}return[o,s]}function Yh$1(){}function Zh$1(t,n){var r=M$4,s=Uh$1(),i=n(),o=!He$2(s.memoizedState,i);if(o&&(s.memoizedState=i,dh$1=!0),s=s.queue,$h(ai$1.bind(null,r,s,t),[t]),s.getSnapshot!==n||o||O$3!==null&&1&O$3.memoizedState.tag){if(r.flags|=2048,bi$1(9,ci$1.bind(null,r,s,i,n),void 0,null),Q$4===null)throw Error(p$d(349));30&Hh||di$1(r,n,i)}return i}function di$1(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},(n=M$4.updateQueue)===null?(n={lastEffect:null,stores:null},M$4.updateQueue=n,n.stores=[t]):(r=n.stores)===null?n.stores=[t]:r.push(t)}function ci$1(t,n,r,s){n.value=r,n.getSnapshot=s,ei$1(n)&&fi$1(t)}function ai$1(t,n,r){return r(function(){ei$1(n)&&fi$1(t)})}function ei$1(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!He$2(t,r)}catch{return!0}}function fi$1(t){var n=ih(t,1);n!==null&&gi$1(n,t,1,-1)}function hi$1(t){var n=Th$1();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh$1,lastRenderedState:t},n.queue=t,t=t.dispatch=ii$1.bind(null,M$4,t),[n.memoizedState,t]}function bi$1(t,n,r,s){return t={tag:t,create:n,destroy:r,deps:s,next:null},(n=M$4.updateQueue)===null?(n={lastEffect:null,stores:null},M$4.updateQueue=n,n.lastEffect=t.next=t):(r=n.lastEffect)===null?n.lastEffect=t.next=t:(s=r.next,r.next=t,t.next=s,n.lastEffect=t),t}function ji(){return Uh$1().memoizedState}function ki$1(t,n,r,s){var i=Th$1();M$4.flags|=t,i.memoizedState=bi$1(1|n,r,void 0,s===void 0?null:s)}function li$1(t,n,r,s){var i=Uh$1();s=s===void 0?null:s;var o=void 0;if(N$2!==null){var l=N$2.memoizedState;if(o=l.destroy,s!==null&&Mh(s,l.deps))return void(i.memoizedState=bi$1(n,r,o,s))}M$4.flags|=t,i.memoizedState=bi$1(1|n,r,o,s)}function mi$1(t,n){return ki$1(8390656,8,t,n)}function $h(t,n){return li$1(2048,8,t,n)}function ni(t,n){return li$1(4,2,t,n)}function oi(t,n){return li$1(4,4,t,n)}function pi$1(t,n){return typeof n=="function"?(t=t(),n(t),function(){n(null)}):n!=null?(t=t(),n.current=t,function(){n.current=null}):void 0}function qi$1(t,n,r){return r=r!=null?r.concat([t]):null,li$1(4,4,pi$1.bind(null,n,t),r)}function ri$1(){}function si$1(t,n){var r=Uh$1();n=n===void 0?null:n;var s=r.memoizedState;return s!==null&&n!==null&&Mh(n,s[1])?s[0]:(r.memoizedState=[t,n],t)}function ti(t,n){var r=Uh$1();n=n===void 0?null:n;var s=r.memoizedState;return s!==null&&n!==null&&Mh(n,s[1])?s[0]:(t=t(),r.memoizedState=[t,n],t)}function ui$1(t,n,r){return 21&Hh?(He$2(r,n)||(r=yc$2(),M$4.lanes|=r,rh$1|=r,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,dh$1=!0),t.memoizedState=r)}function vi$1(t,n){var r=C$5;C$5=r!==0&&4>r?r:4,t(!0);var s=Gh.transition;Gh.transition={};try{t(!1),n()}finally{C$5=r,Gh.transition=s}}function wi$1(){return Uh$1().memoizedState}function xi(t,n,r){var s=yi$1(t);r={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null},zi(t)?Ai$1(n,r):(r=hh$1(t,n,r,s))!==null&&(gi$1(r,t,s,R$3()),Bi$1(r,n,s))}function ii$1(t,n,r){var s=yi$1(t),i={lane:s,action:r,hasEagerState:!1,eagerState:null,next:null};if(zi(t))Ai$1(n,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer)!==null)try{var l=n.lastRenderedState,u=o(l,r);if(i.hasEagerState=!0,i.eagerState=u,He$2(u,l)){var c=n.interleaved;return c===null?(i.next=i,gh(n)):(i.next=c.next,c.next=i),void(n.interleaved=i)}}catch{}(r=hh$1(t,n,i,s))!==null&&(gi$1(r,t,s,i=R$3()),Bi$1(r,n,s))}}function zi(t){var n=t.alternate;return t===M$4||n!==null&&n===M$4}function Ai$1(t,n){Jh$1=Ih$1=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Bi$1(t,n,r){if(4194240&r){var s=n.lanes;r|=s&=t.pendingLanes,n.lanes=r,Cc$2(t,r)}}var Rh$1={readContext:eh$1,useCallback:P$2,useContext:P$2,useEffect:P$2,useImperativeHandle:P$2,useInsertionEffect:P$2,useLayoutEffect:P$2,useMemo:P$2,useReducer:P$2,useRef:P$2,useState:P$2,useDebugValue:P$2,useDeferredValue:P$2,useTransition:P$2,useMutableSource:P$2,useSyncExternalStore:P$2,useId:P$2,unstable_isNewReconciler:!1},Oh={readContext:eh$1,useCallback:function(t,n){return Th$1().memoizedState=[t,n===void 0?null:n],t},useContext:eh$1,useEffect:mi$1,useImperativeHandle:function(t,n,r){return r=r!=null?r.concat([t]):null,ki$1(4194308,4,pi$1.bind(null,n,t),r)},useLayoutEffect:function(t,n){return ki$1(4194308,4,t,n)},useInsertionEffect:function(t,n){return ki$1(4,2,t,n)},useMemo:function(t,n){var r=Th$1();return n=n===void 0?null:n,t=t(),r.memoizedState=[t,n],t},useReducer:function(t,n,r){var s=Th$1();return n=r!==void 0?r(n):n,s.memoizedState=s.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},s.queue=t,t=t.dispatch=xi.bind(null,M$4,t),[s.memoizedState,t]},useRef:function(t){return t={current:t},Th$1().memoizedState=t},useState:hi$1,useDebugValue:ri$1,useDeferredValue:function(t){return Th$1().memoizedState=t},useTransition:function(){var t=hi$1(!1),n=t[0];return t=vi$1.bind(null,t[1]),Th$1().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,r){var s=M$4,i=Th$1();if(I$4){if(r===void 0)throw Error(p$d(407));r=r()}else{if(r=n(),Q$4===null)throw Error(p$d(349));30&Hh||di$1(s,n,r)}i.memoizedState=r;var o={value:r,getSnapshot:n};return i.queue=o,mi$1(ai$1.bind(null,s,o,t),[t]),s.flags|=2048,bi$1(9,ci$1.bind(null,s,o,r,n),void 0,null),r},useId:function(){var t=Th$1(),n=Q$4.identifierPrefix;if(I$4){var r=sg;n=":"+n+"R"+(r=(rg&~(1<<32-oc$2(rg)-1)).toString(32)+r),0<(r=Kh$1++)&&(n+="H"+r.toString(32)),n+=":"}else n=":"+n+"r"+(r=Lh++).toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},Ph={readContext:eh$1,useCallback:si$1,useContext:eh$1,useEffect:$h,useImperativeHandle:qi$1,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh$1)},useDebugValue:ri$1,useDeferredValue:function(t){return ui$1(Uh$1(),N$2.memoizedState,t)},useTransition:function(){return[Wh(Vh$1)[0],Uh$1().memoizedState]},useMutableSource:Yh$1,useSyncExternalStore:Zh$1,useId:wi$1,unstable_isNewReconciler:!1},Qh$1={readContext:eh$1,useCallback:si$1,useContext:eh$1,useEffect:$h,useImperativeHandle:qi$1,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh$1,useRef:ji,useState:function(){return Xh$1(Vh$1)},useDebugValue:ri$1,useDeferredValue:function(t){var n=Uh$1();return N$2===null?n.memoizedState=t:ui$1(n,N$2.memoizedState,t)},useTransition:function(){return[Xh$1(Vh$1)[0],Uh$1().memoizedState]},useMutableSource:Yh$1,useSyncExternalStore:Zh$1,useId:wi$1,unstable_isNewReconciler:!1};function Ci$1(t,n){if(t&&t.defaultProps){for(var r in n=A$5({},n),t=t.defaultProps)n[r]===void 0&&(n[r]=t[r]);return n}return n}function Di$1(t,n,r,s){r=(r=r(s,n=t.memoizedState))==null?n:A$5({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ei$1={isMounted:function(t){return!!(t=t._reactInternals)&&Vb$1(t)===t},enqueueSetState:function(t,n,r){t=t._reactInternals;var s=R$3(),i=yi$1(t),o=mh(s,i);o.payload=n,r!=null&&(o.callback=r),(n=nh$1(t,o,i))!==null&&(gi$1(n,t,i,s),oh$1(n,t,i))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var s=R$3(),i=yi$1(t),o=mh(s,i);o.tag=1,o.payload=n,r!=null&&(o.callback=r),(n=nh$1(t,o,i))!==null&&(gi$1(n,t,i,s),oh$1(n,t,i))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=R$3(),s=yi$1(t),i=mh(r,s);i.tag=2,n!=null&&(i.callback=n),(n=nh$1(t,i,s))!==null&&(gi$1(n,t,s,r),oh$1(n,t,s))}};function Fi$1(t,n,r,s,i,o,l){return typeof(t=t.stateNode).shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,o,l):!n.prototype||!n.prototype.isPureReactComponent||!Ie$2(r,s)||!Ie$2(i,o)}function Gi(t,n,r){var s=!1,i=Vf,o=n.contextType;return typeof o=="object"&&o!==null?o=eh$1(o):(i=Zf(n)?Xf:H$4.current,o=(s=(s=n.contextTypes)!=null)?Yf(t,i):Vf),n=new n(r,o),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ei$1,t.stateNode=n,n._reactInternals=t,s&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),n}function Hi$1(t,n,r,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,s),n.state!==t&&Ei$1.enqueueReplaceState(n,n.state,null)}function Ii$1(t,n,r,s){var i=t.stateNode;i.props=r,i.state=t.memoizedState,i.refs={},kh(t);var o=n.contextType;typeof o=="object"&&o!==null?i.context=eh$1(o):(o=Zf(n)?Xf:H$4.current,i.context=Yf(t,o)),i.state=t.memoizedState,typeof(o=n.getDerivedStateFromProps)=="function"&&(Di$1(t,n,o,r),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ei$1.enqueueReplaceState(i,i.state,null),qh(t,r,i,s),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ji$1(t,n){try{var r="",s=n;do r+=Pa$2(s),s=s.return;while(s);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:n,stack:i,digest:null}}function Ki(t,n,r){return{value:t,source:null,stack:r??null,digest:n??null}}function Li$1(t,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var Mi$1=typeof WeakMap=="function"?WeakMap:Map;function Ni$1(t,n,r){(r=mh(-1,r)).tag=3,r.payload={element:null};var s=n.value;return r.callback=function(){Oi$1||(Oi$1=!0,Pi$1=s),Li$1(t,n)},r}function Qi$1(t,n,r){(r=mh(-1,r)).tag=3;var s=t.type.getDerivedStateFromError;if(typeof s=="function"){var i=n.value;r.payload=function(){return s(i)},r.callback=function(){Li$1(t,n)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Li$1(t,n),typeof s!="function"&&(Ri$1===null?Ri$1=new Set([this]):Ri$1.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),r}function Si$1(t,n,r){var s=t.pingCache;if(s===null){s=t.pingCache=new Mi$1;var i=new Set;s.set(n,i)}else(i=s.get(n))===void 0&&(i=new Set,s.set(n,i));i.has(r)||(i.add(r),t=Ti$1.bind(null,t,n,r),n.then(t,t))}function Ui(t){do{var n;if((n=t.tag===13)&&(n=(n=t.memoizedState)===null||n.dehydrated!==null),n)return t;t=t.return}while(t!==null);return null}function Vi$1(t,n,r,s,i){return 1&t.mode?(t.flags|=65536,t.lanes=i,t):(t===n?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:((n=mh(-1,1)).tag=2,nh$1(r,n,1))),r.lanes|=1),t)}var Wi=ua$2.ReactCurrentOwner,dh$1=!1;function Xi$1(t,n,r,s){n.child=t===null?Vg(n,null,r,s):Ug(n,t.child,r,s)}function Yi$1(t,n,r,s,i){r=r.render;var o=n.ref;return ch$1(n,i),s=Nh(t,n,r,s,o,i),r=Sh(),t===null||dh$1?(I$4&&r&&vg(n),n.flags|=1,Xi$1(t,n,s,i),n.child):(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i,Zi$1(t,n,i))}function $i(t,n,r,s,i){if(t===null){var o=r.type;return typeof o!="function"||aj(o)||o.defaultProps!==void 0||r.compare!==null||r.defaultProps!==void 0?((t=Rg(r.type,null,s,n,n.mode,i)).ref=n.ref,t.return=n,n.child=t):(n.tag=15,n.type=o,bj(t,n,o,s,i))}if(o=t.child,!(t.lanes&i)){var l=o.memoizedProps;if((r=(r=r.compare)!==null?r:Ie$2)(l,s)&&t.ref===n.ref)return Zi$1(t,n,i)}return n.flags|=1,(t=Pg(o,s)).ref=n.ref,t.return=n,n.child=t}function bj(t,n,r,s,i){if(t!==null){var o=t.memoizedProps;if(Ie$2(o,s)&&t.ref===n.ref){if(dh$1=!1,n.pendingProps=s=o,!(t.lanes&i))return n.lanes=t.lanes,Zi$1(t,n,i);131072&t.flags&&(dh$1=!0)}}return cj(t,n,r,s,i)}function dj(t,n,r){var s=n.pendingProps,i=s.children,o=t!==null?t.memoizedState:null;if(s.mode==="hidden")if(1&n.mode){if(!(1073741824&r))return t=o!==null?o.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,G$3(ej,fj),fj|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:r,G$3(ej,fj),fj|=s}else n.memoizedState={baseLanes:0,cachePool:null,transitions:null},G$3(ej,fj),fj|=r;else o!==null?(s=o.baseLanes|r,n.memoizedState=null):s=r,G$3(ej,fj),fj|=s;return Xi$1(t,n,i,r),n.child}function gj(t,n){var r=n.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function cj(t,n,r,s,i){var o=Zf(r)?Xf:H$4.current;return o=Yf(n,o),ch$1(n,i),r=Nh(t,n,r,s,o,i),s=Sh(),t===null||dh$1?(I$4&&s&&vg(n),n.flags|=1,Xi$1(t,n,r,i),n.child):(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i,Zi$1(t,n,i))}function hj(t,n,r,s,i){if(Zf(r)){var o=!0;cg(n)}else o=!1;if(ch$1(n,i),n.stateNode===null)ij(t,n),Gi(n,r,s),Ii$1(n,r,s,i),s=!0;else if(t===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var c=l.context,p=r.contextType;typeof p=="object"&&p!==null?p=eh$1(p):p=Yf(n,p=Zf(r)?Xf:H$4.current);var m=r.getDerivedStateFromProps,y=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==s||c!==p)&&Hi$1(n,l,s,p),jh$1=!1;var $=n.memoizedState;l.state=$,qh(n,s,l,i),c=n.memoizedState,u!==s||$!==c||Wf.current||jh$1?(typeof m=="function"&&(Di$1(n,r,m,s),c=n.memoizedState),(u=jh$1||Fi$1(n,r,u,s,$,c,p))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=c),l.props=s,l.state=c,l.context=p,s=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{l=n.stateNode,lh$1(t,n),u=n.memoizedProps,p=n.type===n.elementType?u:Ci$1(n.type,u),l.props=p,y=n.pendingProps,$=l.context,typeof(c=r.contextType)=="object"&&c!==null?c=eh$1(c):c=Yf(n,c=Zf(r)?Xf:H$4.current);var S=r.getDerivedStateFromProps;(m=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==y||$!==c)&&Hi$1(n,l,s,c),jh$1=!1,$=n.memoizedState,l.state=$,qh(n,s,l,i);var x=n.memoizedState;u!==y||$!==x||Wf.current||jh$1?(typeof S=="function"&&(Di$1(n,r,S,s),x=n.memoizedState),(p=jh$1||Fi$1(n,r,p,s,$,x,c)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,x,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,x,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=x),l.props=s,l.state=x,l.context=c,s=p):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return jj(t,n,r,s,o,i)}function jj(t,n,r,s,i,o){gj(t,n);var l=!!(128&n.flags);if(!s&&!l)return i&&dg(n,r,!1),Zi$1(t,n,o);s=n.stateNode,Wi.current=n;var u=l&&typeof r.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,t!==null&&l?(n.child=Ug(n,t.child,null,o),n.child=Ug(n,null,u,o)):Xi$1(t,n,u,o),n.memoizedState=s.state,i&&dg(n,r,!0),n.child}function kj(t){var n=t.stateNode;n.pendingContext?ag(t,n.pendingContext,n.pendingContext!==n.context):n.context&&ag(t,n.context,!1),yh(t,n.containerInfo)}function lj(t,n,r,s,i){return Ig(),Jg(i),n.flags|=256,Xi$1(t,n,r,s),n.child}var mj={dehydrated:null,treeContext:null,retryLane:0},zj,Aj,Bj,Cj;function nj(t){return{baseLanes:t,cachePool:null,transitions:null}}function oj(t,n,r){var s,i=n.pendingProps,o=L$3.current,l=!1,u=!!(128&n.flags);if((s=u)||(s=(t===null||t.memoizedState!==null)&&!!(2&o)),s?(l=!0,n.flags&=-129):t!==null&&t.memoizedState===null||(o|=1),G$3(L$3,1&o),t===null)return Eg(n),(t=n.memoizedState)!==null&&(t=t.dehydrated)!==null?(1&n.mode?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(u=i.children,t=i.fallback,l?(i=n.mode,l=n.child,u={mode:"hidden",children:u},1&i||l===null?l=pj(u,i,0,null):(l.childLanes=0,l.pendingProps=u),t=Tg(t,i,r,null),l.return=n,t.return=n,l.sibling=t,n.child=l,n.child.memoizedState=nj(r),n.memoizedState=mj,t):qj(n,u));if((o=t.memoizedState)!==null&&(s=o.dehydrated)!==null)return rj(t,n,u,i,s,o,r);if(l){l=i.fallback,u=n.mode,s=(o=t.child).sibling;var c={mode:"hidden",children:i.children};return 1&u||n.child===o?(i=Pg(o,c)).subtreeFlags=14680064&o.subtreeFlags:((i=n.child).childLanes=0,i.pendingProps=c,n.deletions=null),s!==null?l=Pg(s,l):(l=Tg(l,u,r,null)).flags|=2,l.return=n,i.return=n,i.sibling=l,n.child=i,i=l,l=n.child,u=(u=t.child.memoizedState)===null?nj(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=t.childLanes&~r,n.memoizedState=mj,i}return t=(l=t.child).sibling,i=Pg(l,{mode:"visible",children:i.children}),!(1&n.mode)&&(i.lanes=r),i.return=n,i.sibling=null,t!==null&&((r=n.deletions)===null?(n.deletions=[t],n.flags|=16):r.push(t)),n.child=i,n.memoizedState=null,i}function qj(t,n){return(n=pj({mode:"visible",children:n},t.mode,0,null)).return=t,t.child=n}function sj(t,n,r,s){return s!==null&&Jg(s),Ug(n,t.child,null,r),(t=qj(n,n.pendingProps.children)).flags|=2,n.memoizedState=null,t}function rj(t,n,r,s,i,o,l){if(r)return 256&n.flags?(n.flags&=-257,sj(t,n,l,s=Ki(Error(p$d(422))))):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(o=s.fallback,i=n.mode,s=pj({mode:"visible",children:s.children},i,0,null),(o=Tg(o,i,l,null)).flags|=2,s.return=n,o.return=n,s.sibling=o,n.child=s,1&n.mode&&Ug(n,t.child,null,l),n.child.memoizedState=nj(l),n.memoizedState=mj,o);if(!(1&n.mode))return sj(t,n,l,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset)var u=s.dgst;return s=u,sj(t,n,l,s=Ki(o=Error(p$d(419)),s,void 0))}if(u=!!(l&t.childLanes),dh$1||u){if((s=Q$4)!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}(i=i&(s.suspendedLanes|l)?0:i)!==0&&i!==o.retryLane&&(o.retryLane=i,ih(t,i),gi$1(s,t,i,-1))}return tj(),sj(t,n,l,s=Ki(Error(p$d(421))))}return i.data==="$?"?(n.flags|=128,n.child=t.child,n=uj.bind(null,t),i._reactRetry=n,null):(t=o.treeContext,yg=Lf(i.nextSibling),xg=n,I$4=!0,zg=null,t!==null&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=t.id,sg=t.overflow,qg=n),(n=qj(n,s.children)).flags|=4096,n)}function vj(t,n,r){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),bh$1(t.return,n,r)}function wj(t,n,r,s,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=r,o.tailMode=i)}function xj(t,n,r){var s=n.pendingProps,i=s.revealOrder,o=s.tail;if(Xi$1(t,n,s.children,r),2&(s=L$3.current))s=1&s|2,n.flags|=128;else{if(t!==null&&128&t.flags)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vj(t,r,n);else if(t.tag===19)vj(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}if(G$3(L$3,s),1&n.mode)switch(i){case"forwards":for(r=n.child,i=null;r!==null;)(t=r.alternate)!==null&&Ch(t)===null&&(i=r),r=r.sibling;(r=i)===null?(i=n.child,n.child=null):(i=r.sibling,r.sibling=null),wj(n,!1,i,r,o);break;case"backwards":for(r=null,i=n.child,n.child=null;i!==null;){if((t=i.alternate)!==null&&Ch(t)===null){n.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}wj(n,!0,r,null,o);break;case"together":wj(n,!1,null,null,void 0);break;default:n.memoizedState=null}else n.memoizedState=null;return n.child}function ij(t,n){!(1&n.mode)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function Zi$1(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),rh$1|=n.lanes,!(r&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(p$d(153));if(n.child!==null){for(r=Pg(t=n.child,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,(r=r.sibling=Pg(t,t.pendingProps)).return=n;r.sibling=null}return n.child}function yj(t,n,r){switch(n.tag){case 3:kj(n),Ig();break;case 5:Ah(n);break;case 1:Zf(n.type)&&cg(n);break;case 4:yh(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,i=n.memoizedProps.value;G$3(Wg,s._currentValue),s._currentValue=i;break;case 13:if((s=n.memoizedState)!==null)return s.dehydrated!==null?(G$3(L$3,1&L$3.current),n.flags|=128,null):r&n.child.childLanes?oj(t,n,r):(G$3(L$3,1&L$3.current),(t=Zi$1(t,n,r))!==null?t.sibling:null);G$3(L$3,1&L$3.current);break;case 19:if(s=!!(r&n.childLanes),128&t.flags){if(s)return xj(t,n,r);n.flags|=128}if((i=n.memoizedState)!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G$3(L$3,L$3.current),s)break;return null;case 22:case 23:return n.lanes=0,dj(t,n,r)}return Zi$1(t,n,r)}function Dj(t,n){if(!I$4)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function S$4(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,s=0;if(n)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,s|=14680064&i.subtreeFlags,s|=14680064&i.flags,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=s,t.childLanes=r,n}function Ej(t,n,r){var s=n.pendingProps;switch(wg(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S$4(n),null;case 1:case 17:return Zf(n.type)&&$f(),S$4(n),null;case 3:return s=n.stateNode,zh$1(),E$4(Wf),E$4(H$4),Eh(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),t!==null&&t.child!==null||(Gg(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(256&n.flags)||(n.flags|=1024,zg!==null&&(Fj(zg),zg=null))),Aj(t,n),S$4(n),null;case 5:Bh(n);var i=xh(wh$1.current);if(r=n.type,t!==null&&n.stateNode!=null)Bj(t,n,r,s,i),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(p$d(166));return S$4(n),null}if(t=xh(uh$1.current),Gg(n)){s=n.stateNode,r=n.type;var o=n.memoizedProps;switch(s[Of]=n,s[Pf]=o,t=!!(1&n.mode),r){case"dialog":D$6("cancel",s),D$6("close",s);break;case"iframe":case"object":case"embed":D$6("load",s);break;case"video":case"audio":for(i=0;i<lf.length;i++)D$6(lf[i],s);break;case"source":D$6("error",s);break;case"img":case"image":case"link":D$6("error",s),D$6("load",s);break;case"details":D$6("toggle",s);break;case"input":Za(s,o),D$6("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},D$6("invalid",s);break;case"textarea":hb$1(s,o),D$6("invalid",s)}for(var l in ub$1(r,o),i=null,o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?s.textContent!==u&&(o.suppressHydrationWarning!==!0&&Af$1(s.textContent,u,t),i=["children",u]):typeof u=="number"&&s.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Af$1(s.textContent,u,t),i=["children",""+u]):ea$1.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&D$6("scroll",s)}switch(r){case"input":Va$2(s),db$1(s,o,!0);break;case"textarea":Va$2(s),jb$1(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Bf)}s=i,n.updateQueue=s,s!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kb$1(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?((t=l.createElement("div")).innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof s.is=="string"?t=l.createElement(r,{is:s.is}):(t=l.createElement(r),r==="select"&&(l=t,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):t=l.createElementNS(t,r),t[Of]=n,t[Pf]=s,zj(t,n,!1,!1),n.stateNode=t;e:{switch(l=vb$1(r,s),r){case"dialog":D$6("cancel",t),D$6("close",t),i=s;break;case"iframe":case"object":case"embed":D$6("load",t),i=s;break;case"video":case"audio":for(i=0;i<lf.length;i++)D$6(lf[i],t);i=s;break;case"source":D$6("error",t),i=s;break;case"img":case"image":case"link":D$6("error",t),D$6("load",t),i=s;break;case"details":D$6("toggle",t),i=s;break;case"input":Za(t,s),i=Ya$1(t,s),D$6("invalid",t);break;case"option":default:i=s;break;case"select":t._wrapperState={wasMultiple:!!s.multiple},i=A$5({},s,{value:void 0}),D$6("invalid",t);break;case"textarea":hb$1(t,s),i=gb$1(t,s),D$6("invalid",t)}for(o in ub$1(r,i),u=i)if(u.hasOwnProperty(o)){var c=u[o];o==="style"?sb$1(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0)!=null&&nb$1(t,c):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&ob$1(t,c):typeof c=="number"&&ob$1(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ea$1.hasOwnProperty(o)?c!=null&&o==="onScroll"&&D$6("scroll",t):c!=null&&ta$2(t,o,c,l))}switch(r){case"input":Va$2(t),db$1(t,s,!1);break;case"textarea":Va$2(t),jb$1(t);break;case"option":s.value!=null&&t.setAttribute("value",""+Sa$1(s.value));break;case"select":t.multiple=!!s.multiple,(o=s.value)!=null?fb$1(t,!!s.multiple,o,!1):s.defaultValue!=null&&fb$1(t,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bf)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return S$4(n),null;case 6:if(t&&n.stateNode!=null)Cj(t,n,t.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(p$d(166));if(r=xh(wh$1.current),xh(uh$1.current),Gg(n)){if(s=n.stateNode,r=n.memoizedProps,s[Of]=n,(o=s.nodeValue!==r)&&(t=xg)!==null)switch(t.tag){case 3:Af$1(s.nodeValue,r,!!(1&t.mode));break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Af$1(s.nodeValue,r,!!(1&t.mode))}o&&(n.flags|=4)}else(s=(r.nodeType===9?r:r.ownerDocument).createTextNode(s))[Of]=n,n.stateNode=s}return S$4(n),null;case 13:if(E$4(L$3),s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(I$4&&yg!==null&&1&n.mode&&!(128&n.flags))Hg(),Ig(),n.flags|=98560,o=!1;else if(o=Gg(n),s!==null&&s.dehydrated!==null){if(t===null){if(!o)throw Error(p$d(318));if(!(o=(o=n.memoizedState)!==null?o.dehydrated:null))throw Error(p$d(317));o[Of]=n}else Ig(),!(128&n.flags)&&(n.memoizedState=null),n.flags|=4;S$4(n),o=!1}else zg!==null&&(Fj(zg),zg=null),o=!0;if(!o)return 65536&n.flags?n:null}return 128&n.flags?(n.lanes=r,n):((s=s!==null)!=(t!==null&&t.memoizedState!==null)&&s&&(n.child.flags|=8192,1&n.mode&&(t===null||1&L$3.current?T$2===0&&(T$2=3):tj())),n.updateQueue!==null&&(n.flags|=4),S$4(n),null);case 4:return zh$1(),Aj(t,n),t===null&&sf$1(n.stateNode.containerInfo),S$4(n),null;case 10:return ah$1(n.type._context),S$4(n),null;case 19:if(E$4(L$3),(o=n.memoizedState)===null)return S$4(n),null;if(s=!!(128&n.flags),(l=o.rendering)===null)if(s)Dj(o,!1);else{if(T$2!==0||t!==null&&128&t.flags)for(t=n.child;t!==null;){if((l=Ch(t))!==null){for(n.flags|=128,Dj(o,!1),(s=l.updateQueue)!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=r,r=n.child;r!==null;)t=s,(o=r).flags&=14680066,(l=o.alternate)===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return G$3(L$3,1&L$3.current|2),n.child}t=t.sibling}o.tail!==null&&B$4()>Gj&&(n.flags|=128,s=!0,Dj(o,!1),n.lanes=4194304)}else{if(!s)if((t=Ch(l))!==null){if(n.flags|=128,s=!0,(r=t.updateQueue)!==null&&(n.updateQueue=r,n.flags|=4),Dj(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!I$4)return S$4(n),null}else 2*B$4()-o.renderingStartTime>Gj&&r!==1073741824&&(n.flags|=128,s=!0,Dj(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):((r=o.last)!==null?r.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=B$4(),n.sibling=null,r=L$3.current,G$3(L$3,s?1&r|2:1&r),n):(S$4(n),null);case 22:case 23:return Hj(),s=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==s&&(n.flags|=8192),s&&1&n.mode?1073741824&fj&&(S$4(n),6&n.subtreeFlags&&(n.flags|=8192)):S$4(n),null;case 24:case 25:return null}throw Error(p$d(156,n.tag))}function Ij(t,n){switch(wg(n),n.tag){case 1:return Zf(n.type)&&$f(),65536&(t=n.flags)?(n.flags=-65537&t|128,n):null;case 3:return zh$1(),E$4(Wf),E$4(H$4),Eh(),65536&(t=n.flags)&&!(128&t)?(n.flags=-65537&t|128,n):null;case 5:return Bh(n),null;case 13:if(E$4(L$3),(t=n.memoizedState)!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(p$d(340));Ig()}return 65536&(t=n.flags)?(n.flags=-65537&t|128,n):null;case 19:return E$4(L$3),null;case 4:return zh$1(),null;case 10:return ah$1(n.type._context),null;case 22:case 23:return Hj(),null;default:return null}}zj=function(t,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Aj=function(){},Bj=function(t,n,r,s){var i=t.memoizedProps;if(i!==s){t=n.stateNode,xh(uh$1.current);var o,l=null;switch(r){case"input":i=Ya$1(t,i),s=Ya$1(t,s),l=[];break;case"select":i=A$5({},i,{value:void 0}),s=A$5({},s,{value:void 0}),l=[];break;case"textarea":i=gb$1(t,i),s=gb$1(t,s),l=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(t.onclick=Bf)}for(p in ub$1(r,s),r=null,i)if(!s.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var u=i[p];for(o in u)u.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(ea$1.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in s){var c=s[p];if(u=i!=null?i[p]:void 0,s.hasOwnProperty(p)&&c!==u&&(c!=null||u!=null))if(p==="style")if(u){for(o in u)!u.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&u[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(l||(l=[]),l.push(p,r)),r=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(l=l||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(ea$1.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&D$6("scroll",t),l||u===c||(l=[])):(l=l||[]).push(p,c))}r&&(l=l||[]).push("style",r);var p=l;(n.updateQueue=p)&&(n.flags|=4)}},Cj=function(t,n,r,s){r!==s&&(n.flags|=4)};var Jj=!1,U$3=!1,Kj=typeof WeakSet=="function"?WeakSet:Set,V$3=null;function Lj(t,n){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(s){W$3(t,n,s)}else r.current=null}function Mj(t,n,r){try{r()}catch(s){W$3(t,n,s)}}var Nj=!1;function Oj(t,n){if(Cf=dd$1,Ne$2(t=Me$2())){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{var s=(r=(r=t.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var i=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var l=0,u=-1,c=-1,p=0,m=0,y=t,$=null;t:for(;;){for(var S;y!==r||i!==0&&y.nodeType!==3||(u=l+i),y!==o||s!==0&&y.nodeType!==3||(c=l+s),y.nodeType===3&&(l+=y.nodeValue.length),(S=y.firstChild)!==null;)$=y,y=S;for(;;){if(y===t)break t;if($===r&&++p===i&&(u=l),$===o&&++m===s&&(c=l),(S=y.nextSibling)!==null)break;$=(y=$).parentNode}y=S}r=u===-1||c===-1?null:{start:u,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Df={focusedElem:t,selectionRange:r},dd$1=!1,V$3=n;V$3!==null;)if(t=(n=V$3).child,1028&n.subtreeFlags&&t!==null)t.return=n,V$3=t;else for(;V$3!==null;){n=V$3;try{var x=n.alternate;if(1024&n.flags)switch(n.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(x!==null){var h=x.memoizedProps,N=x.memoizedState,L=n.stateNode,pe=L.getSnapshotBeforeUpdate(n.elementType===n.type?h:Ci$1(n.type,h),N);L.__reactInternalSnapshotBeforeUpdate=pe}break;case 3:var tt=n.stateNode.containerInfo;tt.nodeType===1?tt.textContent="":tt.nodeType===9&&tt.documentElement&&tt.removeChild(tt.documentElement);break;default:throw Error(p$d(163))}}catch(me){W$3(n,n.return,me)}if((t=n.sibling)!==null){t.return=n.return,V$3=t;break}V$3=n.return}return x=Nj,Nj=!1,x}function Pj(t,n,r){var s=n.updateQueue;if((s=s!==null?s.lastEffect:null)!==null){var i=s=s.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Mj(n,r,o)}i=i.next}while(i!==s)}}function Qj(t,n){if((n=(n=n.updateQueue)!==null?n.lastEffect:null)!==null){var r=n=n.next;do{if((r.tag&t)===t){var s=r.create;r.destroy=s()}r=r.next}while(r!==n)}}function Rj(t){var n=t.ref;if(n!==null){var r=t.stateNode;t.tag,t=r,typeof n=="function"?n(t):n.current=t}}function Sj(t){var n=t.alternate;n!==null&&(t.alternate=null,Sj(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode)!==null&&(delete n[Of],delete n[Pf],delete n[of$2],delete n[Qf],delete n[Rf]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tj(t){return t.tag===5||t.tag===3||t.tag===4}function Uj(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tj(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(2&t.flags||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(2&t.flags))return t.stateNode}}function Vj(t,n,r){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(r.nodeType===8?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),(r=r._reactRootContainer)!=null||n.onclick!==null||(n.onclick=Bf));else if(s!==4&&(t=t.child)!==null)for(Vj(t,n,r),t=t.sibling;t!==null;)Vj(t,n,r),t=t.sibling}function Wj(t,n,r){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(s!==4&&(t=t.child)!==null)for(Wj(t,n,r),t=t.sibling;t!==null;)Wj(t,n,r),t=t.sibling}var X$2=null,Xj=!1;function Yj(t,n,r){for(r=r.child;r!==null;)Zj(t,n,r),r=r.sibling}function Zj(t,n,r){if(lc$1&&typeof lc$1.onCommitFiberUnmount=="function")try{lc$1.onCommitFiberUnmount(kc$1,r)}catch{}switch(r.tag){case 5:U$3||Lj(r,n);case 6:var s=X$2,i=Xj;X$2=null,Yj(t,n,r),Xj=i,(X$2=s)!==null&&(Xj?(t=X$2,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):X$2.removeChild(r.stateNode));break;case 18:X$2!==null&&(Xj?(t=X$2,r=r.stateNode,t.nodeType===8?Kf(t.parentNode,r):t.nodeType===1&&Kf(t,r),bd$1(t)):Kf(X$2,r.stateNode));break;case 4:s=X$2,i=Xj,X$2=r.stateNode.containerInfo,Xj=!0,Yj(t,n,r),X$2=s,Xj=i;break;case 0:case 11:case 14:case 15:if(!U$3&&(s=r.updateQueue)!==null&&(s=s.lastEffect)!==null){i=s=s.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(2&o||4&o)&&Mj(r,n,l),i=i.next}while(i!==s)}Yj(t,n,r);break;case 1:if(!U$3&&(Lj(r,n),typeof(s=r.stateNode).componentWillUnmount=="function"))try{s.props=r.memoizedProps,s.state=r.memoizedState,s.componentWillUnmount()}catch(u){W$3(r,n,u)}Yj(t,n,r);break;case 21:Yj(t,n,r);break;case 22:1&r.mode?(U$3=(s=U$3)||r.memoizedState!==null,Yj(t,n,r),U$3=s):Yj(t,n,r);break;default:Yj(t,n,r)}}function ak(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new Kj),n.forEach(function(s){var i=bk.bind(null,t,s);r.has(s)||(r.add(s),s.then(i,i))})}}function ck(t,n){var r=n.deletions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];try{var o=t,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:X$2=u.stateNode,Xj=!1;break e;case 3:case 4:X$2=u.stateNode.containerInfo,Xj=!0;break e}u=u.return}if(X$2===null)throw Error(p$d(160));Zj(o,l,i),X$2=null,Xj=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(p){W$3(i,n,p)}}if(12854&n.subtreeFlags)for(n=n.child;n!==null;)dk(n,t),n=n.sibling}function dk(t,n){var r=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ck(n,t),ek(t),4&s){try{Pj(3,t,t.return),Qj(3,t)}catch(h){W$3(t,t.return,h)}try{Pj(5,t,t.return)}catch(h){W$3(t,t.return,h)}}break;case 1:ck(n,t),ek(t),512&s&&r!==null&&Lj(r,r.return);break;case 5:if(ck(n,t),ek(t),512&s&&r!==null&&Lj(r,r.return),32&t.flags){var i=t.stateNode;try{ob$1(i,"")}catch(h){W$3(t,t.return,h)}}if(4&s&&(i=t.stateNode)!=null){var o=t.memoizedProps,l=r!==null?r.memoizedProps:o,u=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&ab$1(i,o),vb$1(u,l);var p=vb$1(u,o);for(l=0;l<c.length;l+=2){var m=c[l],y=c[l+1];m==="style"?sb$1(i,y):m==="dangerouslySetInnerHTML"?nb$1(i,y):m==="children"?ob$1(i,y):ta$2(i,m,y,p)}switch(u){case"input":bb$1(i,o);break;case"textarea":ib$1(i,o);break;case"select":var $=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?fb$1(i,!!o.multiple,S,!1):$!==!!o.multiple&&(o.defaultValue!=null?fb$1(i,!!o.multiple,o.defaultValue,!0):fb$1(i,!!o.multiple,o.multiple?[]:"",!1))}i[Pf]=o}catch(h){W$3(t,t.return,h)}}break;case 6:if(ck(n,t),ek(t),4&s){if(t.stateNode===null)throw Error(p$d(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(h){W$3(t,t.return,h)}}break;case 3:if(ck(n,t),ek(t),4&s&&r!==null&&r.memoizedState.isDehydrated)try{bd$1(n.containerInfo)}catch(h){W$3(t,t.return,h)}break;case 4:default:ck(n,t),ek(t);break;case 13:ck(n,t),ek(t),8192&(i=t.child).flags&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(fk=B$4())),4&s&&ak(t);break;case 22:if(m=r!==null&&r.memoizedState!==null,1&t.mode?(U$3=(p=U$3)||m,ck(n,t),U$3=p):ck(n,t),ek(t),8192&s){if(p=t.memoizedState!==null,(t.stateNode.isHidden=p)&&!m&&1&t.mode)for(V$3=t,m=t.child;m!==null;){for(y=V$3=m;V$3!==null;){switch(S=($=V$3).child,$.tag){case 0:case 11:case 14:case 15:Pj(4,$,$.return);break;case 1:Lj($,$.return);var x=$.stateNode;if(typeof x.componentWillUnmount=="function"){s=$,r=$.return;try{n=s,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(h){W$3(s,r,h)}}break;case 5:Lj($,$.return);break;case 22:if($.memoizedState!==null){gk(y);continue}}S!==null?(S.return=$,V$3=S):gk(y)}m=m.sibling}e:for(m=null,y=t;;){if(y.tag===5){if(m===null){m=y;try{i=y.stateNode,p?typeof(o=i.style).setProperty=="function"?o.setProperty("display","none","important"):o.display="none":(u=y.stateNode,l=(c=y.memoizedProps.style)!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=rb$1("display",l))}catch(h){W$3(t,t.return,h)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(h){W$3(t,t.return,h)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:ck(n,t),ek(t),4&s&&ak(t);case 21:}}function ek(t){var n=t.flags;if(2&n){try{e:{for(var r=t.return;r!==null;){if(Tj(r)){var s=r;break e}r=r.return}throw Error(p$d(160))}switch(s.tag){case 5:var i=s.stateNode;32&s.flags&&(ob$1(i,""),s.flags&=-33),Wj(t,Uj(t),i);break;case 3:case 4:var o=s.stateNode.containerInfo;Vj(t,Uj(t),o);break;default:throw Error(p$d(161))}}catch(l){W$3(t,t.return,l)}t.flags&=-3}4096&n&&(t.flags&=-4097)}function hk(t,n,r){V$3=t,ik(t)}function ik(t,n,r){for(var s=!!(1&t.mode);V$3!==null;){var i=V$3,o=i.child;if(i.tag===22&&s){var l=i.memoizedState!==null||Jj;if(!l){var u=i.alternate,c=u!==null&&u.memoizedState!==null||U$3;u=Jj;var p=U$3;if(Jj=l,(U$3=c)&&!p)for(V$3=i;V$3!==null;)c=(l=V$3).child,l.tag===22&&l.memoizedState!==null?jk(i):c!==null?(c.return=l,V$3=c):jk(i);for(;o!==null;)V$3=o,ik(o),o=o.sibling;V$3=i,Jj=u,U$3=p}kk(t)}else 8772&i.subtreeFlags&&o!==null?(o.return=i,V$3=o):kk(t)}}function kk(t){for(;V$3!==null;){var n=V$3;if(8772&n.flags){var r=n.alternate;try{if(8772&n.flags)switch(n.tag){case 0:case 11:case 15:U$3||Qj(5,n);break;case 1:var s=n.stateNode;if(4&n.flags&&!U$3)if(r===null)s.componentDidMount();else{var i=n.elementType===n.type?r.memoizedProps:Ci$1(n.type,r.memoizedProps);s.componentDidUpdate(i,r.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&sh$1(n,o,s);break;case 3:var l=n.updateQueue;if(l!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:case 1:r=n.child.stateNode}sh$1(n,l,r)}break;case 5:var u=n.stateNode;if(r===null&&4&n.flags){r=u;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var m=p.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&bd$1(y)}}}break;default:throw Error(p$d(163))}U$3||512&n.flags&&Rj(n)}catch($){W$3(n,n.return,$)}}if(n===t){V$3=null;break}if((r=n.sibling)!==null){r.return=n.return,V$3=r;break}V$3=n.return}}function gk(t){for(;V$3!==null;){var n=V$3;if(n===t){V$3=null;break}var r=n.sibling;if(r!==null){r.return=n.return,V$3=r;break}V$3=n.return}}function jk(t){for(;V$3!==null;){var n=V$3;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{Qj(4,n)}catch(c){W$3(n,r,c)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var i=n.return;try{s.componentDidMount()}catch(c){W$3(n,i,c)}}var o=n.return;try{Rj(n)}catch(c){W$3(n,o,c)}break;case 5:var l=n.return;try{Rj(n)}catch(c){W$3(n,l,c)}}}catch(c){W$3(n,n.return,c)}if(n===t){V$3=null;break}var u=n.sibling;if(u!==null){u.return=n.return,V$3=u;break}V$3=n.return}}var lk=Math.ceil,mk=ua$2.ReactCurrentDispatcher,nk=ua$2.ReactCurrentOwner,ok=ua$2.ReactCurrentBatchConfig,K$3=0,Q$4=null,Y$4=null,Z$3=0,fj=0,ej=Uf(0),T$2=0,pk=null,rh$1=0,qk=0,rk=0,sk=null,tk$1=null,fk=0,Gj=1/0,uk=null,Oi$1=!1,Pi$1=null,Ri$1=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0,Vk;function R$3(){return 6&K$3?B$4():Ak!==-1?Ak:Ak=B$4()}function yi$1(t){return 1&t.mode?2&K$3&&Z$3!==0?Z$3&-Z$3:Kg.transition!==null?(Bk===0&&(Bk=yc$2()),Bk):(t=C$5)!==0?t:t=(t=window.event)===void 0?16:jd$1(t.type):1}function gi$1(t,n,r,s){if(50<yk)throw yk=0,zk=null,Error(p$d(185));Ac$2(t,r,s),2&K$3&&t===Q$4||(t===Q$4&&(!(2&K$3)&&(qk|=r),T$2===4&&Ck(t,Z$3)),Dk(t,s),r===1&&K$3===0&&!(1&n.mode)&&(Gj=B$4()+500,fg&&jg()))}function Dk(t,n){var r=t.callbackNode;wc$1(t,n);var s=uc$1(t,t===Q$4?Z$3:0);if(s===0)r!==null&&bc$2(r),t.callbackNode=null,t.callbackPriority=0;else if(n=s&-s,t.callbackPriority!==n){if(r!=null&&bc$2(r),n===1)t.tag===0?ig(Ek.bind(null,t)):hg(Ek.bind(null,t)),Jf(function(){!(6&K$3)&&jg()}),r=null;else{switch(Dc$2(s)){case 1:r=fc$1;break;case 4:r=gc$2;break;case 16:default:r=hc$1;break;case 536870912:r=jc$2}r=Fk(r,Gk.bind(null,t))}t.callbackPriority=n,t.callbackNode=r}}function Gk(t,n){if(Ak=-1,Bk=0,6&K$3)throw Error(p$d(327));var r=t.callbackNode;if(Hk()&&t.callbackNode!==r)return null;var s=uc$1(t,t===Q$4?Z$3:0);if(s===0)return null;if(30&s||s&t.expiredLanes||n)n=Ik(t,s);else{n=s;var i=K$3;K$3|=2;var o=Jk();for(Q$4===t&&Z$3===n||(uk=null,Gj=B$4()+500,Kk(t,n));;)try{Lk();break}catch(u){Mk(t,u)}$g(),mk.current=o,K$3=i,Y$4!==null?n=0:(Q$4=null,Z$3=0,n=T$2)}if(n!==0){if(n===2&&(i=xc$2(t))!==0&&(s=i,n=Nk(t,i)),n===1)throw r=pk,Kk(t,0),Ck(t,s),Dk(t,B$4()),r;if(n===6)Ck(t,s);else{if(i=t.current.alternate,!(30&s||Ok(i)||(n=Ik(t,s),n===2&&(o=xc$2(t),o!==0&&(s=o,n=Nk(t,o))),n!==1)))throw r=pk,Kk(t,0),Ck(t,s),Dk(t,B$4()),r;switch(t.finishedWork=i,t.finishedLanes=s,n){case 0:case 1:throw Error(p$d(345));case 2:case 5:Pk(t,tk$1,uk);break;case 3:if(Ck(t,s),(130023424&s)===s&&10<(n=fk+500-B$4())){if(uc$1(t,0)!==0)break;if(((i=t.suspendedLanes)&s)!==s){R$3(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ff(Pk.bind(null,t,tk$1,uk),n);break}Pk(t,tk$1,uk);break;case 4:if(Ck(t,s),(4194240&s)===s)break;for(n=t.eventTimes,i=-1;0<s;){var l=31-oc$2(s);o=1<<l,(l=n[l])>i&&(i=l),s&=~o}if(s=i,10<(s=(120>(s=B$4()-s)?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*lk(s/1960))-s)){t.timeoutHandle=Ff(Pk.bind(null,t,tk$1,uk),s);break}Pk(t,tk$1,uk);break;default:throw Error(p$d(329))}}}return Dk(t,B$4()),t.callbackNode===r?Gk.bind(null,t):null}function Nk(t,n){var r=sk;return t.current.memoizedState.isDehydrated&&(Kk(t,n).flags|=256),(t=Ik(t,n))!==2&&(n=tk$1,tk$1=r,n!==null&&Fj(n)),t}function Fj(t){tk$1===null?tk$1=t:tk$1.push.apply(tk$1,t)}function Ok(t){for(var n=t;;){if(16384&n.flags){var r=n.updateQueue;if(r!==null&&(r=r.stores)!==null)for(var s=0;s<r.length;s++){var i=r[s],o=i.getSnapshot;i=i.value;try{if(!He$2(o(),i))return!1}catch{return!1}}}if(r=n.child,16384&n.subtreeFlags&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ck(t,n){for(n&=~rk,n&=~qk,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var r=31-oc$2(n),s=1<<r;t[r]=-1,n&=~s}}function Ek(t){if(6&K$3)throw Error(p$d(327));Hk();var n=uc$1(t,0);if(!(1&n))return Dk(t,B$4()),null;var r=Ik(t,n);if(t.tag!==0&&r===2){var s=xc$2(t);s!==0&&(n=s,r=Nk(t,s))}if(r===1)throw r=pk,Kk(t,0),Ck(t,n),Dk(t,B$4()),r;if(r===6)throw Error(p$d(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Pk(t,tk$1,uk),Dk(t,B$4()),null}function Qk(t,n){var r=K$3;K$3|=1;try{return t(n)}finally{(K$3=r)===0&&(Gj=B$4()+500,fg&&jg())}}function Rk(t){wk!==null&&wk.tag===0&&!(6&K$3)&&Hk();var n=K$3;K$3|=1;var r=ok.transition,s=C$5;try{if(ok.transition=null,C$5=1,t)return t()}finally{C$5=s,ok.transition=r,!(6&(K$3=n))&&jg()}}function Hj(){fj=ej.current,E$4(ej)}function Kk(t,n){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Gf(r)),Y$4!==null)for(r=Y$4.return;r!==null;){var s=r;switch(wg(s),s.tag){case 1:(s=s.type.childContextTypes)!=null&&$f();break;case 3:zh$1(),E$4(Wf),E$4(H$4),Eh();break;case 5:Bh(s);break;case 4:zh$1();break;case 13:case 19:E$4(L$3);break;case 10:ah$1(s.type._context);break;case 22:case 23:Hj()}r=r.return}if(Q$4=t,Y$4=t=Pg(t.current,null),Z$3=fj=n,T$2=0,pk=null,rk=qk=rh$1=0,tk$1=sk=null,fh$1!==null){for(n=0;n<fh$1.length;n++)if((s=(r=fh$1[n]).interleaved)!==null){r.interleaved=null;var i=s.next,o=r.pending;if(o!==null){var l=o.next;o.next=i,s.next=l}r.pending=s}fh$1=null}return t}function Mk(t,n){for(;;){var r=Y$4;try{if($g(),Fh.current=Rh$1,Ih$1){for(var s=M$4.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}Ih$1=!1}if(Hh=0,O$3=N$2=M$4=null,Jh$1=!1,Kh$1=0,nk.current=null,r===null||r.return===null){T$2=1,pk=n,Y$4=null;break}e:{var o=t,l=r.return,u=r,c=n;if(n=Z$3,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,m=u,y=m.tag;if(!(1&m.mode||y!==0&&y!==11&&y!==15)){var $=m.alternate;$?(m.updateQueue=$.updateQueue,m.memoizedState=$.memoizedState,m.lanes=$.lanes):(m.updateQueue=null,m.memoizedState=null)}var S=Ui(l);if(S!==null){S.flags&=-257,Vi$1(S,l,u,o,n),1&S.mode&&Si$1(o,p,n),c=p;var x=(n=S).updateQueue;if(x===null){var h=new Set;h.add(c),n.updateQueue=h}else x.add(c);break e}if(!(1&n)){Si$1(o,p,n),tj();break e}c=Error(p$d(426))}else if(I$4&&1&u.mode){var N=Ui(l);if(N!==null){!(65536&N.flags)&&(N.flags|=256),Vi$1(N,l,u,o,n),Jg(Ji$1(c,u));break e}}o=c=Ji$1(c,u),T$2!==4&&(T$2=2),sk===null?sk=[o]:sk.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n,ph(o,Ni$1(o,c,n));break e;case 1:u=c;var L=o.type,pe=o.stateNode;if(!(128&o.flags||typeof L.getDerivedStateFromError!="function"&&(pe===null||typeof pe.componentDidCatch!="function"||Ri$1!==null&&Ri$1.has(pe)))){o.flags|=65536,n&=-n,o.lanes|=n,ph(o,Qi$1(o,u,n));break e}}o=o.return}while(o!==null)}Sk(r)}catch(tt){n=tt,Y$4===r&&r!==null&&(Y$4=r=r.return);continue}break}}function Jk(){var t=mk.current;return mk.current=Rh$1,t===null?Rh$1:t}function tj(){T$2!==0&&T$2!==3&&T$2!==2||(T$2=4),Q$4===null||!(268435455&rh$1)&&!(268435455&qk)||Ck(Q$4,Z$3)}function Ik(t,n){var r=K$3;K$3|=2;var s=Jk();for(Q$4===t&&Z$3===n||(uk=null,Kk(t,n));;)try{Tk();break}catch(i){Mk(t,i)}if($g(),K$3=r,mk.current=s,Y$4!==null)throw Error(p$d(261));return Q$4=null,Z$3=0,T$2}function Tk(){for(;Y$4!==null;)Uk(Y$4)}function Lk(){for(;Y$4!==null&&!cc$1();)Uk(Y$4)}function Uk(t){var n=Vk(t.alternate,t,fj);t.memoizedProps=t.pendingProps,n===null?Sk(t):Y$4=n,nk.current=null}function Sk(t){var n=t;do{var r=n.alternate;if(t=n.return,32768&n.flags){if((r=Ij(r,n))!==null)return r.flags&=32767,void(Y$4=r);if(t===null)return T$2=6,void(Y$4=null);t.flags|=32768,t.subtreeFlags=0,t.deletions=null}else if((r=Ej(r,n,fj))!==null)return void(Y$4=r);if((n=n.sibling)!==null)return void(Y$4=n);Y$4=n=t}while(n!==null);T$2===0&&(T$2=5)}function Pk(t,n,r){var s=C$5,i=ok.transition;try{ok.transition=null,C$5=1,Wk(t,n,r,s)}finally{ok.transition=i,C$5=s}return null}function Wk(t,n,r,s){do Hk();while(wk!==null);if(6&K$3)throw Error(p$d(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(p$d(177));t.callbackNode=null,t.callbackPriority=0;var o=r.lanes|r.childLanes;if(Bc$2(t,o),t===Q$4&&(Y$4=Q$4=null,Z$3=0),!(2064&r.subtreeFlags)&&!(2064&r.flags)||vk||(vk=!0,Fk(hc$1,function(){return Hk(),null})),o=!!(15990&r.flags),15990&r.subtreeFlags||o){o=ok.transition,ok.transition=null;var l=C$5;C$5=1;var u=K$3;K$3|=4,nk.current=null,Oj(t,r),dk(r,t),Oe$2(Df),dd$1=!!Cf,Df=Cf=null,t.current=r,hk(r),dc$1(),K$3=u,C$5=l,ok.transition=o}else t.current=r;if(vk&&(vk=!1,wk=t,xk=i),(o=t.pendingLanes)===0&&(Ri$1=null),mc$1(r.stateNode),Dk(t,B$4()),n!==null)for(s=t.onRecoverableError,r=0;r<n.length;r++)s((i=n[r]).value,{componentStack:i.stack,digest:i.digest});if(Oi$1)throw Oi$1=!1,t=Pi$1,Pi$1=null,t;return 1&xk&&t.tag!==0&&Hk(),1&(o=t.pendingLanes)?t===zk?yk++:(yk=0,zk=t):yk=0,jg(),null}function Hk(){if(wk!==null){var t=Dc$2(xk),n=ok.transition,r=C$5;try{if(ok.transition=null,C$5=16>t?16:t,wk===null)var s=!1;else{if(t=wk,wk=null,xk=0,6&K$3)throw Error(p$d(331));var i=K$3;for(K$3|=4,V$3=t.current;V$3!==null;){var o=V$3,l=o.child;if(16&V$3.flags){var u=o.deletions;if(u!==null){for(var c=0;c<u.length;c++){var p=u[c];for(V$3=p;V$3!==null;){var m=V$3;switch(m.tag){case 0:case 11:case 15:Pj(8,m,o)}var y=m.child;if(y!==null)y.return=m,V$3=y;else for(;V$3!==null;){var $=(m=V$3).sibling,S=m.return;if(Sj(m),m===p){V$3=null;break}if($!==null){$.return=S,V$3=$;break}V$3=S}}}var x=o.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var N=h.sibling;h.sibling=null,h=N}while(h!==null)}}V$3=o}}if(2064&o.subtreeFlags&&l!==null)l.return=o,V$3=l;else e:for(;V$3!==null;){if(2048&(o=V$3).flags)switch(o.tag){case 0:case 11:case 15:Pj(9,o,o.return)}var L=o.sibling;if(L!==null){L.return=o.return,V$3=L;break e}V$3=o.return}}var pe=t.current;for(V$3=pe;V$3!==null;){var tt=(l=V$3).child;if(2064&l.subtreeFlags&&tt!==null)tt.return=l,V$3=tt;else e:for(l=pe;V$3!==null;){if(2048&(u=V$3).flags)try{switch(u.tag){case 0:case 11:case 15:Qj(9,u)}}catch(st){W$3(u,u.return,st)}if(u===l){V$3=null;break e}var me=u.sibling;if(me!==null){me.return=u.return,V$3=me;break e}V$3=u.return}}if(K$3=i,jg(),lc$1&&typeof lc$1.onPostCommitFiberRoot=="function")try{lc$1.onPostCommitFiberRoot(kc$1,t)}catch{}s=!0}return s}finally{C$5=r,ok.transition=n}}return!1}function Xk(t,n,r){t=nh$1(t,n=Ni$1(t,n=Ji$1(r,n),1),1),n=R$3(),t!==null&&(Ac$2(t,1,n),Dk(t,n))}function W$3(t,n,r){if(t.tag===3)Xk(t,t,r);else for(;n!==null;){if(n.tag===3){Xk(n,t,r);break}if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ri$1===null||!Ri$1.has(s))){n=nh$1(n,t=Qi$1(n,t=Ji$1(r,t),1),1),t=R$3(),n!==null&&(Ac$2(n,1,t),Dk(n,t));break}}n=n.return}}function Ti$1(t,n,r){var s=t.pingCache;s!==null&&s.delete(n),n=R$3(),t.pingedLanes|=t.suspendedLanes&r,Q$4===t&&(Z$3&r)===r&&(T$2===4||T$2===3&&(130023424&Z$3)===Z$3&&500>B$4()-fk?Kk(t,0):rk|=r),Dk(t,n)}function Yk(t,n){n===0&&(1&t.mode?(n=sc$2,!(130023424&(sc$2<<=1))&&(sc$2=4194304)):n=1);var r=R$3();(t=ih(t,n))!==null&&(Ac$2(t,n,r),Dk(t,r))}function uj(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),Yk(t,r)}function bk(t,n){var r=0;switch(t.tag){case 13:var s=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:s=t.stateNode;break;default:throw Error(p$d(314))}s!==null&&s.delete(n),Yk(t,r)}function Fk(t,n){return ac$1(t,n)}function $k(t,n,r,s){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bg(t,n,r,s){return new $k(t,n,r,s)}function aj(t){return!(!(t=t.prototype)||!t.isReactComponent)}function Zk(t){if(typeof t=="function")return aj(t)?1:0;if(t!=null){if((t=t.$$typeof)===Da$1)return 11;if(t===Ga$1)return 14}return 2}function Pg(t,n){var r=t.alternate;return r===null?((r=Bg(t.tag,n,t.key,t.mode)).elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&t.flags,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Rg(t,n,r,s,i,o){var l=2;if(s=t,typeof t=="function")aj(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case ya$1:return Tg(r.children,i,o,n);case za$1:l=8,i|=8;break;case Aa$1:return(t=Bg(12,r,n,2|i)).elementType=Aa$1,t.lanes=o,t;case Ea$2:return(t=Bg(13,r,n,i)).elementType=Ea$2,t.lanes=o,t;case Fa$1:return(t=Bg(19,r,n,i)).elementType=Fa$1,t.lanes=o,t;case Ia$1:return pj(r,i,o,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ba$1:l=10;break e;case Ca$1:l=9;break e;case Da$1:l=11;break e;case Ga$1:l=14;break e;case Ha$2:l=16,s=null;break e}throw Error(p$d(130,t==null?t:typeof t,""))}return(n=Bg(l,r,n,i)).elementType=t,n.type=s,n.lanes=o,n}function Tg(t,n,r,s){return(t=Bg(7,t,s,n)).lanes=r,t}function pj(t,n,r,s){return(t=Bg(22,t,s,n)).elementType=Ia$1,t.lanes=r,t.stateNode={isHidden:!1},t}function Qg(t,n,r){return(t=Bg(6,t,null,n)).lanes=r,t}function Sg(t,n,r){return(n=Bg(4,t.children!==null?t.children:[],t.key,n)).lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function al$1(t,n,r,s,i){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc$1(0),this.expirationTimes=zc$1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc$1(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bl$1(t,n,r,s,i,o,l,u,c){return t=new al$1(t,n,r,u,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Bg(3,null,null,n),t.current=o,o.stateNode=t,o.memoizedState={element:s,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(o),t}function cl(t,n,r){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa$1,key:s==null?null:""+s,children:t,containerInfo:n,implementation:r}}function dl$1(t){if(!t)return Vf;e:{if(Vb$1(t=t._reactInternals)!==t||t.tag!==1)throw Error(p$d(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Zf(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(p$d(171))}if(t.tag===1){var r=t.type;if(Zf(r))return bg(t,r,n)}return n}function el(t,n,r,s,i,o,l,u,c){return(t=bl$1(r,s,!0,t,i,o,l,u,c)).context=dl$1(null),r=t.current,(o=mh(s=R$3(),i=yi$1(r))).callback=n??null,nh$1(r,o,i),t.current.lanes=i,Ac$2(t,i,s),Dk(t,s),t}function fl$1(t,n,r,s){var i=n.current,o=R$3(),l=yi$1(i);return r=dl$1(r),n.context===null?n.context=r:n.pendingContext=r,(n=mh(o,l)).payload={element:t},(s=s===void 0?null:s)!==null&&(n.callback=s),(t=nh$1(i,n,l))!==null&&(gi$1(t,i,l,o),oh$1(t,i,l)),l}function gl$1(t){return(t=t.current).child?(t.child.tag,t.child.stateNode):null}function hl$1(t,n){if((t=t.memoizedState)!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function il(t,n){hl$1(t,n),(t=t.alternate)&&hl$1(t,n)}function jl$1(){return null}Vk=function(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps||Wf.current)dh$1=!0;else{if(!(t.lanes&r||128&n.flags))return dh$1=!1,yj(t,n,r);dh$1=!!(131072&t.flags)}else dh$1=!1,I$4&&1048576&n.flags&&ug(n,ng,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;ij(t,n),t=n.pendingProps;var i=Yf(n,H$4.current);ch$1(n,r),i=Nh(null,n,s,t,i,r);var o=Sh();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Zf(s)?(o=!0,cg(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kh(n),i.updater=Ei$1,n.stateNode=i,i._reactInternals=n,Ii$1(n,s,t,r),n=jj(null,n,s,!0,o,r)):(n.tag=0,I$4&&o&&vg(n),Xi$1(null,n,i,r),n=n.child),n;case 16:s=n.elementType;e:{switch(ij(t,n),t=n.pendingProps,s=(i=s._init)(s._payload),n.type=s,i=n.tag=Zk(s),t=Ci$1(s,t),i){case 0:n=cj(null,n,s,t,r);break e;case 1:n=hj(null,n,s,t,r);break e;case 11:n=Yi$1(null,n,s,t,r);break e;case 14:n=$i(null,n,s,Ci$1(s.type,t),r);break e}throw Error(p$d(306,s,""))}return n;case 0:return s=n.type,i=n.pendingProps,cj(t,n,s,i=n.elementType===s?i:Ci$1(s,i),r);case 1:return s=n.type,i=n.pendingProps,hj(t,n,s,i=n.elementType===s?i:Ci$1(s,i),r);case 3:e:{if(kj(n),t===null)throw Error(p$d(387));s=n.pendingProps,i=(o=n.memoizedState).element,lh$1(t,n),qh(n,s,null,r);var l=n.memoizedState;if(s=l.element,o.isDehydrated){if(o={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,256&n.flags){n=lj(t,n,s,r,i=Ji$1(Error(p$d(423)),n));break e}if(s!==i){n=lj(t,n,s,r,i=Ji$1(Error(p$d(424)),n));break e}for(yg=Lf(n.stateNode.containerInfo.firstChild),xg=n,I$4=!0,zg=null,r=Vg(n,null,s,r),n.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(Ig(),s===i){n=Zi$1(t,n,r);break e}Xi$1(t,n,s,r)}n=n.child}return n;case 5:return Ah(n),t===null&&Eg(n),s=n.type,i=n.pendingProps,o=t!==null?t.memoizedProps:null,l=i.children,Ef(s,i)?l=null:o!==null&&Ef(s,o)&&(n.flags|=32),gj(t,n),Xi$1(t,n,l,r),n.child;case 6:return t===null&&Eg(n),null;case 13:return oj(t,n,r);case 4:return yh(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ug(n,null,s,r):Xi$1(t,n,s,r),n.child;case 11:return s=n.type,i=n.pendingProps,Yi$1(t,n,s,i=n.elementType===s?i:Ci$1(s,i),r);case 7:return Xi$1(t,n,n.pendingProps,r),n.child;case 8:case 12:return Xi$1(t,n,n.pendingProps.children,r),n.child;case 10:e:{if(s=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,G$3(Wg,s._currentValue),s._currentValue=l,o!==null)if(He$2(o.value,l)){if(o.children===i.children&&!Wf.current){n=Zi$1(t,n,r);break e}}else for((o=n.child)!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var c=u.firstContext;c!==null;){if(c.context===s){if(o.tag===1){(c=mh(-1,r&-r)).tag=2;var p=o.updateQueue;if(p!==null){var m=(p=p.shared).pending;m===null?c.next=c:(c.next=m.next,m.next=c),p.pending=c}}o.lanes|=r,(c=o.alternate)!==null&&(c.lanes|=r),bh$1(o.return,r,n),u.lanes|=r;break}c=c.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if((l=o.return)===null)throw Error(p$d(341));l.lanes|=r,(u=l.alternate)!==null&&(u.lanes|=r),bh$1(l,r,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if((o=l.sibling)!==null){o.return=l.return,l=o;break}l=l.return}o=l}Xi$1(t,n,i.children,r),n=n.child}return n;case 9:return i=n.type,s=n.pendingProps.children,ch$1(n,r),s=s(i=eh$1(i)),n.flags|=1,Xi$1(t,n,s,r),n.child;case 14:return i=Ci$1(s=n.type,n.pendingProps),$i(t,n,s,i=Ci$1(s.type,i),r);case 15:return bj(t,n,n.type,n.pendingProps,r);case 17:return s=n.type,i=n.pendingProps,i=n.elementType===s?i:Ci$1(s,i),ij(t,n),n.tag=1,Zf(s)?(t=!0,cg(n)):t=!1,ch$1(n,r),Gi(n,s,i),Ii$1(n,s,i,r),jj(null,n,s,!0,t,r);case 19:return xj(t,n,r);case 22:return dj(t,n,r)}throw Error(p$d(156,n.tag))};var kl$1=typeof reportError=="function"?reportError:function(t){console.error(t)};function ll$1(t){this._internalRoot=t}function ml$1(t){this._internalRoot=t}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pl$1(){}function ql(t,n,r,s,i){if(i){if(typeof s=="function"){var o=s;s=function(){var p=gl$1(l);o.call(p)}}var l=el(n,s,t,0,null,!1,!1,"",pl$1);return t._reactRootContainer=l,t[uf$1]=l.current,sf$1(t.nodeType===8?t.parentNode:t),Rk(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof s=="function"){var u=s;s=function(){var p=gl$1(c);u.call(p)}}var c=bl$1(t,0,!1,null,null,!1,!1,"",pl$1);return t._reactRootContainer=c,t[uf$1]=c.current,sf$1(t.nodeType===8?t.parentNode:t),Rk(function(){fl$1(n,c,r,s)}),c}function rl(t,n,r,s,i){var o=r._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var c=gl$1(l);u.call(c)}}fl$1(n,l,t,i)}else l=ql(r,n,t,i,s);return gl$1(l)}ml$1.prototype.render=ll$1.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(p$d(409));fl$1(t,n,null,null)},ml$1.prototype.unmount=ll$1.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Rk(function(){fl$1(null,t,null,null)}),n[uf$1]=null}},ml$1.prototype.unstable_scheduleHydration=function(t){if(t){var n=Hc$2();t={blockedOn:null,target:t,priority:n};for(var r=0;r<Qc$2.length&&n!==0&&n<Qc$2[r].priority;r++);Qc$2.splice(r,0,t),r===0&&Vc$2(t)}},Ec$2=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var r=tc$2(n.pendingLanes);r!==0&&(Cc$2(n,1|r),Dk(n,B$4()),!(6&K$3)&&(Gj=B$4()+500,jg()))}break;case 13:Rk(function(){var s=ih(t,1);if(s!==null){var i=R$3();gi$1(s,t,1,i)}}),il(t,1)}},Fc$2=function(t){if(t.tag===13){var n=ih(t,134217728);n!==null&&gi$1(n,t,134217728,R$3()),il(t,134217728)}},Gc$2=function(t){if(t.tag===13){var n=yi$1(t),r=ih(t,n);r!==null&&gi$1(r,t,n,R$3()),il(t,n)}},Hc$2=function(){return C$5},Ic$1=function(t,n){var r=C$5;try{return C$5=t,n()}finally{C$5=r}},yb$1=function(t,n,r){switch(n){case"input":if(bb$1(t,r),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var s=r[n];if(s!==t&&s.form===t.form){var i=Db$1(s);if(!i)throw Error(p$d(90));Wa$1(s),bb$1(s,i)}}}break;case"textarea":ib$1(t,r);break;case"select":(n=r.value)!=null&&fb$1(t,!!r.multiple,n,!1)}},Gb$1=Qk,Hb$1=Rk;var sl={usingClientEntryPoint:!1,Events:[Cb$1,ue$1,Db$1,Eb,Fb$1,Qk]},tl={findFiberByHostInstance:Wc$2,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua$2.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return(t=Zb$1(t))===null?null:t.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||jl$1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl$1=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl$1.isDisabled&&vl$1.supportsFiber)try{kc$1=vl$1.inject(ul),lc$1=vl$1}catch{}}function checkDCE(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE=="function")try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(t){console.error(t)}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl,reactDom_production_min.createPortal=function(t,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nl(n))throw Error(p$d(200));return cl(t,n,null,r)},reactDom_production_min.createRoot=function(t,n){if(!nl(t))throw Error(p$d(299));var r=!1,s="",i=kl$1;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=bl$1(t,1,!1,null,null,r,!1,s,i),t[uf$1]=n.current,sf$1(t.nodeType===8?t.parentNode:t),new ll$1(n)},reactDom_production_min.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(p$d(188)):(t=Object.keys(t).join(","),Error(p$d(268,t)));return t=(t=Zb$1(n))===null?null:t.stateNode},reactDom_production_min.flushSync=function(t){return Rk(t)},reactDom_production_min.hydrate=function(t,n,r){if(!ol(n))throw Error(p$d(200));return rl(null,t,n,!0,r)},reactDom_production_min.hydrateRoot=function(t,n,r){if(!nl(t))throw Error(p$d(405));var s=r!=null&&r.hydratedSources||null,i=!1,o="",l=kl$1;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),n=el(n,null,t,1,r??null,i,!1,o,l),t[uf$1]=n.current,sf$1(t),s)for(t=0;t<s.length;t++)i=(i=(r=s[t])._getVersion)(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,i]:n.mutableSourceEagerHydrationData.push(r,i);return new ml$1(n)},reactDom_production_min.render=function(t,n,r){if(!ol(n))throw Error(p$d(200));return rl(null,t,n,!1,r)},reactDom_production_min.unmountComponentAtNode=function(t){if(!ol(t))throw Error(p$d(40));return!!t._reactRootContainer&&(Rk(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[uf$1]=null})}),!0)},reactDom_production_min.unstable_batchedUpdates=Qk,reactDom_production_min.unstable_renderSubtreeIntoContainer=function(t,n,r,s){if(!ol(r))throw Error(p$d(200));if(t==null||t._reactInternals===void 0)throw Error(p$d(38));return rl(t,n,r,!1,s)},reactDom_production_min.version="18.3.1-next-f1338f8080-20240426",checkDCE(),reactDom.exports=reactDom_production_min;let createRoot,m$d;reactDomExports=reactDom.exports,m$d=reactDomExports,createRoot=m$d.createRoot,m$d.hydrateRoot;let agentUtils,asyncUtils,compose,INPUTS_OUTSIDE_MESSAGE,AuthorTypes$1,MessageTypes,InputTypes,FIELDS,MEDIA_FILES,pick,globalDocument,isEqual$1,messagesUtils,DEFAULT_SETTINGS,Context$f,Provider$e,Context$e,Context$d,Provider$c,DEFINITIONS,PINK,GREY,WHITE,DARK_BLUE,DEFAULTS,utils,advancedModeCondition,basicModeCondition,launcherDefaultCondition,launcherCustomCondition,RULES;agentUtils={isHuman:t=>t>0},asyncUtils={fetchConfigJSON:({configUrl:t})=>d.utils.asyncUtils.fetch({url:t}),fetchAgentData({agentID:t,channelToken:n,serverUrl:r}){const s=d.utils.utils.getSafeUrl(r);return d.utils.asyncUtils.fetch({url:`${s}/webchat/get_agent/`,method:"POST",body:JSON.stringify({agent_id:t,channel_token:n})})}},compose=(t,n)=>t.reverse().reduce((r,[s,i])=>jsxRuntimeExports.jsx(s,{...i,children:r}),n),INPUTS_OUTSIDE_MESSAGE=["file","buttons","buttons_multiple","buttons_search","buttons_multi_search","yes_no","autocomplete","rating","scale","cards","stripe","referral"],AuthorTypes$1={BOT:"bot",USER:"user",SYSTEM:"system",AGENT:"agent"},MessageTypes={AUDIO:"audio",BUTTON:"button",CARDS:"cards",CALENDLY:"calendly",DIALOG:"dialog",DOCUMENT:"document",EVENT:"event",HIDDEN:"hidden",IFRAME:"iframe",INPUT:"input",IMAGE:"image",LOCATION:"location",MEDIA_DIALOG:"media_dialog",MULTIPLE_IMAGES:"multiple_images",MULTI_QUESTION:"multi_question",REDIRECT:"redirect",REFERRAL:"referral",STRIPE:"stripe",STRIPE_INTENT:"stripe_intent",TEXT:"text",VIDEO:"video",MULTIPLE_FILES:"multiple_files",STRUCTURED_DATA:"structured_data"},InputTypes={AUTOCOMPLETE:"autocomplete",BUTTONS:"buttons",BUTTONS_MULTIPLE:"buttons_multiple",BUTTONS_SEARCH:"buttons_search",BUTTONS_MULTI_SEARCH:"buttons_multi_search",CALENDLY:"calendly",CARDS:"cards",DATE:"date",EMAIL:"email",FILE:"file",FORM:"form",LOCATION:"location",MULTI_QUESTION:"multi_question",NUMBER:"number",RATING:"rating",REFERRAL:"referral",SCALE:"scale",STRIPE:"stripe",TEL:"tel",TEXT:"text",TEXT_LONG:"text_long",URL:"url",YES_NO:"yes_no",CHECKBOX:"checkbox",RADIO:"radio"},FIELDS=["name","phone","email","postal code","address","country","birthdate"],inputUtils={getAutocompleteOptions(t){var i,o,l,u;if(!t)return[];if(!t.buttons)return(((o=(i=t.extra)==null?void 0:i.buttons)==null?void 0:o.list)??[]).filter(Boolean).map(({payload:c,text:p})=>({label:p,payload:c,attachment:{}}));const n=t.buttons||[],r=t.payloads||[],s=((u=(l=t.extra)==null?void 0:l.buttons)==null?void 0:u.list)??null;return n.filter(Boolean).map((c,p)=>{var $,S;const m=(($=s==null?void 0:s[p])==null?void 0:$.include)??null,y={type:m,value:((S=s==null?void 0:s[p])==null?void 0:S[m])??null};return{label:c,payload:r[p]||c,attachment:y}})},getPayloadFromOptions(t,n,r=null){const s=n.find(({label:i})=>i.toUpperCase()===t.toUpperCase());return s&&s.payload||r},getButtonsFromMessage(t){var o,l,u,c;if(!t)return[];const n=t.buttons||[],r=t.payloads||[],s=((l=(o=t.extra)==null?void 0:o.dynamic_buttons)==null?void 0:l.attachments)!==void 0,i=s?(c=(u=t.extra)==null?void 0:u.dynamic_buttons)==null?void 0:c.attachments:"";return n.filter(Boolean).map((p,m)=>{var x,h,N,L,pe,tt;const y=((N=(h=(x=t.extra)==null?void 0:x.buttons)==null?void 0:h.includes)==null?void 0:N[m])??null,$=((tt=(pe=(L=t.extra)==null?void 0:L.buttons)==null?void 0:pe[`${y}s`])==null?void 0:tt[m])??null,S=t.urls?t.urls:[];return{label:p,payload:r[m]||p,attachment:{type:s?i:y,value:s?t.attachments[m]:$},href:S[m]||null}})},getCards(t){if(!t)return[];const n=t.cards||[],r=t.payloads||[];return n.map((s,i)=>({title:s.title,href:s.href,image:s.image,imageWithFooter:s.imageWithFooter,payload:r[i],hasExtraFields:s.description||s.details||s.highlighted||s.button,description:s.description,details:s.details,highlighted:s.highlighted,button:s.button}))},getFieldPlaceholder({message:t,text:n}){var i,o;if(!t)return null;if(t.placeholder)return t.placeholder;const r=(o=(i=t.extra)==null?void 0:i.textarea)==null?void 0:o.field,s=FIELDS.indexOf(r);return t.isInsideForm?"":r&&s>-1?n.inline_input_placeholder.replace("@field",n.fields[s]):(n==null?void 0:n.text_input_placeholder)??""},getInputType(t){var r,s,i,o,l,u,c,p,m,y,$,S,x,h,N;if(!t)return null;let n=null;if(t.samurai===void 0)return null;switch(t.type){case"checkbox":n=InputTypes.CHECKBOX;break;case"radio":n=InputTypes.RADIO;break;case"autocomplete":n=InputTypes.AUTOCOMPLETE;break;case"text":case"image":case"iframe":if(n=((r=t.extra)==null?void 0:r.hide_textbox)===!0?null:InputTypes.TEXT,((i=(s=t.extra)==null?void 0:s.textarea)==null?void 0:i.size)==="long"&&(n=InputTypes.TEXT_LONG),(o=t.extra)==null?void 0:o.form){n=InputTypes.FORM;break}if((l=t.extra)!=null&&l.textarea)switch((c=(u=t.extra)==null?void 0:u.textarea)==null?void 0:c.type){case"number":n=InputTypes.NUMBER;break;case"email":n=InputTypes.EMAIL;break;case"date":n=InputTypes.DATE;break;case"file":n=InputTypes.FILE;break;case"url":n=InputTypes.URL;break;case"location":n=InputTypes.LOCATION;break;case"tel":n=InputTypes.TEL}break;case"dialog":case"media_dialog":if(n=InputTypes.BUTTONS,(p=t.extra)==null?void 0:p.buttons){switch((y=(m=t.extra)==null?void 0:m.buttons)==null?void 0:y.type){case"autocomplete":n="autocomplete";break;case"scale":n="scale";break;case"rating":n="rating";break;case"yes_no":n="yes_no"}const L=(S=($=t.extra)==null?void 0:$.buttons)==null?void 0:S.multi,pe=(h=(x=t.extra)==null?void 0:x.buttons)==null?void 0:h.search;L&&pe?n=InputTypes.BUTTONS_MULTI_SEARCH:L?n=InputTypes.BUTTONS_MULTIPLE:pe&&(n=InputTypes.BUTTONS_SEARCH)}break;case"cards":n=InputTypes.CARDS;break;case"referral":(N=t.extra)!=null&&N.referral?n=InputTypes.REFERRAL:t.buttons&&t.buttons.length>0&&(n=InputTypes.BUTTONS);break;case"stripe":case"stripe_intent":n=InputTypes.STRIPE;break;case MessageTypes.CALENDLY:n=InputTypes.CALENDLY;break;case MessageTypes.MULTI_QUESTION:n=InputTypes.MULTI_QUESTION}return n},hasInput(t){return this.getInputType(t)!==null},isBubbleStyled:t=>!INPUTS_OUTSIDE_MESSAGE.includes(t),validNumberHelper({value:t,minText:n,minValue:r,maxText:s,maxValue:i}){const o=Number(t);return Number.isNaN(o)?"Not a Number!":r!==null&&o<r?n.replace(/@field/i,r):i!==null&&o>i?s.replace(/@field/i,i):""},validEmail:(t,n)=>t.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})*$/)?"":n,validPhoneNumber:(t,n)=>t.replace("+","00").replace(" ","").replace(".","").replace("-","").match(/\d{3,}/)?"":n,validText(t,{pattern:n,errorMessage:r,minChars:s,maxChars:i}){try{if(n&&!t.match(n))return r}catch{return r}return!Number.isNaN(s)&&t.length<s||!Number.isNaN(i)&&t.length>i?r:""}},MEDIA_FILES={SUPPORTED_DOCUMENT_TYPES:["pdf"],SUPPORTED_VIDEO_TYPES:["mp4","avi","mov","wmv","3gp","webm","m4v","ogv"],SUPPORTED_AUDIO_TYPES:["mp3","aac","oga","ogg","wav","wma","m4a","opus"],SUPPORTED_IMAGE_TYPES:["apng","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","avif","webp"],YOUTUBE_URL_VALIDATION:new RegExp(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/),YOUTUBE_VIDEO_ID:new RegExp(/v=([a-zA-Z0-9_-]+)&?/),VIMEO_URL_VALIDATION:new RegExp(/(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|)(\d+)(?:|\/\?)/),VIMEO_VIDEO_ID:new RegExp(/(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|)(\d+)(?:|\/\?)/),WISTIA_URL_VALIDATION:new RegExp(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/.*/),WISTIA_VIDEO_ID:new RegExp(/(medias|embed)\/([a-zA-Z0-9_-]+)&?/)},pick=(t,n)=>n.reduce((r,s)=>(t&&t.hasOwnProperty(s)&&(r[s]=t[s]),r),{}),globalDocument=document,isEqual$1=(t,n)=>{if(t===n)return!0;if(typeof t!="object"||typeof n!="object"||t===null||n===null)return!1;const r=Object.keys(t),s=Object.keys(n);if(r.length!==s.length)return!1;for(let i of r)if(!s.includes(i)||!isEqual$1(t[i],n[i]))return!1;return!0},utils$1={evalScriptTag(t,{document:n=globalDocument,context:r}={}){if(t.hasAttribute("src")){const s=n.createElement("script");for(let i=t.attributes.length-1;i>=0;i--){const{name:o,value:l}=t.attributes[i];s.setAttribute(o,l)}n.body.appendChild(s)}else{const s=t.textContent||"";this.evalCode(s,r)}},evalCode(code,context){try{(function(){eval(code)}).call(context)}catch(t){console.error(t)}},getElement:(t,{document:n=globalDocument}={})=>typeof t=="string"?n.querySelector(t):t,getHiddenFields(t={},n){const r=this.getQueryParams(n),s=pick(r,Object.keys(t)),i=Object.entries(s).map(([o,l])=>[o,typeof l=="string"?purify.sanitize(l):l]);return Object.fromEntries(i)},getHref(t){let n=null;return t&&(n=/:\/\//.test(t)?t:"https://".concat(t)),n},getQueryParams(t=window.location.search){const n=new URLSearchParams(t),r={};for(const[s,i]of n.entries())r[s]=i;return r},getReferralUrl(t,n){const r=t||window.location.href,s=n||"Try this conversational website made with Landbot \u{1F916} \u{1F4AC}  ";return{facebook:`https://facebook.com/sharer/sharer.php?u=${encodeURI(r)}`,twitter:`https://twitter.com/intent/tweet/?text=${encodeURI(s)}&url=${encodeURI(r)}`,linkedin:`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(r)}&title=${encodeURI(s)}&source=${encodeURI(r)}`,whatsapp:`https://api.whatsapp.com/send?text=${encodeURI(s)}${encodeURI(r)}`}},objectsDifference:(t,n)=>Object.entries(t).reduce((r,[s,i])=>isEqual$1(i,n[s])?r:r.concat(s),[]),randomKey:d.utils.utils.randomKey,appendUIKey(t){return t.map(n=>({uiKey:this.randomKey(),...n}))},extractScriptsfromString(t=""){const n=document.createElement("div");return n.innerHTML=t,Array.from(n.getElementsByTagName("script"))},compose:(...t)=>(...n)=>t.reduceRight((r,s)=>s(r,...n.slice(1)),...n),appendTimestampToUrl(t){const n=t.includes("?")?"&":"?";return`${t}${n}ts=${Date.now()}`},bytesToMegaBytes:t=>(t/1e6).toFixed(1),bold(t){if(typeof t=="string"){const n=/\*\*(.*?)\*\*/gm;return t.replace(n,"<strong>$1</strong>")}return t},escapeHTML:t=>typeof t=="string"?t.replace(/[&<>"']/g,n=>{switch(n){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";default:return"&#039;"}}):t,getElementOffset(t){const n=t.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,s=window.pageYOffset||document.documentElement.scrollTop;return{top:n.top+s,left:n.left+r}}},messagesUtils={getAuthor(t){const n=Number(t);let r=null;return t===void 0?r=AuthorTypes$1.USER:n<0?r=AuthorTypes$1.BOT:n===0?r=AuthorTypes$1.SYSTEM:n>0&&(r=AuthorTypes$1.AGENT),r},getAvatar({config:t={},message:n={},agents:r={}}){var s,i;return this.getAuthor(n.samurai)===AuthorTypes$1.BOT||t!=null&&t.avatar_fixed?(s=t==null?void 0:t.design)==null?void 0:s.avatar_url:(i=r==null?void 0:r[n.samurai])==null?void 0:i.avatar},getAssignationAgentID(t){const n=t.getLastBrandMessage();return n?n.action==="assign"?n.agent_id:n.samurai===-1?null:n.samurai||null:null},getMessageFromSendingData(t){if(!t)return null;switch(t.type){case"file":return{ui_key:t.ui_key,type:"image",message:t.message,url:t.url,timestamp:t.timestamp};case"multiple_files":return{message:t.message,timestamp:t.timestamp,type:t.type,ui_key:t.ui_key,files:t.urls};case"text":case"button":case MessageTypes.CALENDLY:default:return{ui_key:t.ui_key,type:t.type,message:t.message,timestamp:t.timestamp}}},getVideoUrl(t){if(MEDIA_FILES.YOUTUBE_URL_VALIDATION.test(t)){const n=(t.match(MEDIA_FILES.YOUTUBE_VIDEO_ID)||[])[1];return n?`https://www.youtube.com/embed/${n}`:null}if(MEDIA_FILES.VIMEO_URL_VALIDATION.test(t)){const n=(t.match(MEDIA_FILES.VIMEO_VIDEO_ID)||[])[4];return n?`https://player.vimeo.com/video/${n}`:null}if(MEDIA_FILES.WISTIA_URL_VALIDATION.test(t)){const n=(t.match(MEDIA_FILES.WISTIA_VIDEO_ID)||[])[2];return n?`https://fast.wistia.net/embed/iframe/${n}`:null}return null},supportedMessageFilter(t={}){const n=[MessageTypes.BUTTON,MessageTypes.CALENDLY,MessageTypes.CARDS,MessageTypes.DIALOG,MessageTypes.DOCUMENT,MessageTypes.EVENT,MessageTypes.IFRAME,MessageTypes.IMAGE,MessageTypes.REDIRECT,MessageTypes.REFERRAL,MessageTypes.STRIPE,MessageTypes.STRIPE_INTENT,MessageTypes.TEXT,MessageTypes.MEDIA_DIALOG,MessageTypes.AUDIO,MessageTypes.VIDEO,MessageTypes.MULTI_QUESTION,MessageTypes.MULTIPLE_FILES,MessageTypes.STRUCTURED_DATA].includes(t.type),r=t.type===MessageTypes.STRIPE&&t.action==="close",s=t.payload==="#init";return n&&!r&&!s},visibleMessageFilter:(t={})=>t.type!=="hidden",brandMessageFilter:(t={})=>t.type!=="hidden"&&t.samurai!==void 0,userMessageFilter:(t={})=>t.samurai===void 0,withGhost:t=>({...t,ghost:!0}),withRevisit:t=>({...t,key:utils$1.randomKey(),timestamp:Date.now(),extra:{...t.extra||{},revisit:!0}}),withVariablesReplaced(t,n){const r=this.transformVariables(t.rich_text,n);let{buttons:s}=t;return Array.isArray(t.buttons)&&(s=t.buttons.map(i=>this.transformVariables(i,n))),{...t,rich_text:r,buttons:s}},withEvaluate:t=>({...t,evaluate:!0}),transformVariables(t,n){if(typeof t!="string")return"";let r=t;const s=/¿·([^·?]*)·\?/g,i=/(?:^@|[^\w\d@]@)(\w+)/g,o=/@{([^}]*)}/g;let l=null;for(l=s.exec(t);l;)r=r.replace(`\xBF\xB7${l[1]}\xB7?`,l[1]),l=s.exec(t);for(l=null,l=i.exec(t);l;)r=r.replace(`@${l[1]}`,n[l[1]]||""),l=i.exec(t);for(l=null,l=o.exec(t);l;)r=r.replace(`@{${l[1]}}`,n[l[1]]||""),l=o.exec(t);return r},getMessageType(t,n){if(t&&[MessageTypes.IMAGE,MessageTypes.IFRAME].includes(t.type))return t.type;if(t){const r=inputUtils.getInputType(t),s=this.getAuthor(t?t.samurai:null);return n&&s===AuthorTypes$1.BOT&&r&&inputUtils.isBubbleStyled(r)?MessageTypes.INPUT:t.type}},createSortedMessagesArray:t=>Object.values(t).sort((n,r)=>n.timestamp-r.timestamp),compareMessages(t,n){const r=(t.key||n.key)&&t.key===n.key,s=(t.ui_key||n.ui_key)&&t.ui_key===n.ui_key;return!(!r&&!s)},findMessageIndex(t,n){return t.findIndex(r=>this.compareMessages(r,n))},updateMessage(t,n){const r=this.findMessageIndex(t,n);return r!==-1&&(t[r]=n,!0)},isSupportedDocumentType(t){return MEDIA_FILES.SUPPORTED_DOCUMENT_TYPES.includes(this.getFileExtension(t||""))},isSupportedVideoType(t){return MEDIA_FILES.SUPPORTED_VIDEO_TYPES.includes(this.getFileExtension(t||""))},isSupportedAudioType(t){return MEDIA_FILES.SUPPORTED_AUDIO_TYPES.includes(this.getFileExtension(t||""))},isSupportedImageType(t){return MEDIA_FILES.SUPPORTED_IMAGE_TYPES.includes(this.getFileExtension(t||""))},getFileExtension:t=>t.split(".").pop().toLowerCase()},DEFAULT_SETTINGS={design:{},text:{inline_input_placeholder:"Type your @field here...",text_input_placeholder:"Type here...",fields:["name","phone","email","postal code","address","country","birthdate"],autocomplete_input_placeholder:"Type to search options...",input_menu_help:"Choose an option",input_multi_help:"Filter the options",input_multi_range_help:"Choose at least @min_options and up to @max_options",input_instant_search_help:"Filter the options",input_text_help:"Press enter to send",input_autocomplete_help:"Press enter to select",input_rating_help:"Click on the icons",input_file_help:"Drop a file here",input_files_help:"Drop your files here",input_file_instructions_help:"Max @maxfilesize",input_files_instructions_help:"Up to @maxfiles files | Max @maxfilesize each",input_file_max_help:"You can only upload one file",input_files_max_help:"You can only upload up to @maxfiles files",no_results_found:"No results found",input_number_help_min:"Minimum value is @field",input_number_help_max:"Maximum value is @field",send:"Send",back:"Back",search:"Search",select:"Select",next:"Next",select_file:"Select a file",select_files:"Select files",open_file:"Open file",hto_assignation_message:"@agent just joined the conversation!",hto_agent_profile_text:"A human at @brand",stripe_pay_button_label:"Pay @amount",error_input_date:"Please enter a valid date (@format)",error_input_email:"Please introduce a valid email",error_input_phone:"Please introduce a valid phone number",error:"\u26A0\uFE0F  It seems there is a technical problem. Please reload this page",error_offline_message:"We are offline",error_send_message:"We couldn't send this message.",error_retrying_message:"Retrying...",error_retry_button_label:"Try again",error_inline_connection_message:"Messages can't be sent, please verify your internet connection.",error_reset_button_label:"Reset",error_retry_countdown_message:"Will try again in {countdown} seconds",error_retry_countdown_button_label:"Retry ({countdown})",load_more_button_label:"Load old messages",thinking_message:"Thinking..."},experience:"chat",style:"",foot:"",keywords:{},persistent_menu:[],branding:!0,typing_options:{state:!0,delay:{is_constant:!1,constant:.5,average_human_reading_speed:300,max_delay:1.5}},customData:{},hidden_fields:{},revisit:[{type:"dialog",title:"Hey! This is not the first time you are here. What would you like to do?",buttons:["START AGAIN","CONTINUE"],payloads:["#init","#_continue"],samurai:"-1"}],revisit_off:!0,storage_off:!0,avatar_fixed:!1,animate_buttons:!0,animate_messages:!0,animate_on_mobile:!1,debug:!1,awaiting_loader:!0,warning_connection:!0,offline_detect_navigator:!0,offline_detect_database:!1},Context$f=reactExports.createContext(DEFAULT_SETTINGS),Provider$e=({value:t,children:n})=>jsxRuntimeExports.jsx(Context$f.Provider,{value:t,children:n}),useConfigContext=()=>reactExports.useContext(Context$f),Context$e=reactExports.createContext({document,iframe:null,window}),Provider$d=({value:t,children:n})=>jsxRuntimeExports.jsx(Context$e.Provider,{value:t,children:n}),useDocumentContext=()=>reactExports.useContext(Context$e),Context$d=reactExports.createContext(null),Provider$c=({value:t,children:n})=>jsxRuntimeExports.jsx(Context$d.Provider,{value:t,children:n}),useWidgetContext=()=>reactExports.useContext(Context$d),DEFINITIONS={DESIGN:{BASIC:"basic",ADVANCED:"advanced"},BUBBLES:{ROUNDED:"rounded",SEMI:"semirounded",SQUARED:"squared",TRANSPARENT:"transparent"},AVATAR_SHAPE:{ORIGINAL:"original",ROUNDED:"rounded"},BACKGROUND_TYPE:{SOLID:"solid",GRADIENT:"gradient",IMAGE:"image",VIDEO:"video"},VIDEO_SOURCES:{DEFAULTS:"defaults"},LAUNCHER_TYPES:{DEFAULT:"default",ONLY_ICON:"only_icon"}},PINK="#E02678",GREY="#F1F2F9",WHITE="#FFFFFF",DARK_BLUE="#2F324A",DEFAULTS={base_color_button:PINK,base_color_background:GREY,base_color_message:WHITE,base_color_text:DARK_BLUE,background_type:DEFINITIONS.BACKGROUND_TYPE.SOLID,background_color_gradient_from:"#00B2A9",background_color_gradient_to:"#55E2BA",background_image:"https://storage.googleapis.com/media.yexir.com/channels_back/31.png",background_image_mobile:"https://storage.googleapis.com/media.yexir.com/channels_back/31.png",background_color_mask:"rgba(0,0,0,.1)",background_video_type:DEFINITIONS.VIDEO_SOURCES.DEFAULTS,background_video_webm:"https://static.landbot.io/landbot/video/video_1.webm",background_video_mp4:"https://static.landbot.io/landbot/video/video_1.mp4",header_visible:!0,header_logo:"https://storage.googleapis.com/media.helloumi.com/brands/helloumi.png",top_bar_separator:!1,message_shape:DEFINITIONS.BUBBLES.SEMI,border_radius:5,font_size:16,font_family:"Montserrat",avatar_enabled:!0,avatar_url:"https://static.landbot.io/daisho/img/avatar-landbot-1.png",avatar_shape:DEFINITIONS.AVATAR_SHAPE.ORIGINAL,avatar_scale:1,template_id:null,launcher_custom:!0,launcher_image:"https://storage.googleapis.com/media.helloumi.com/brands/helloumi.png",launcher_type:DEFINITIONS.LAUNCHER_TYPES.DEFAULT,back_button_visible:!0,google_api_key:null,design_mode:DEFINITIONS.DESIGN.ADVANCED},utils={cleanValues:(t={},n=DEFAULTS)=>mergeWith({},n,t,function(r,s,i,o,l,u){if(s==null)return n[i]}),customGet:({key:t,object:n={},dependencies:r=[]})=>{for(let i=0;i<r.length;i++){const o=r[i];if(typeof o=="object"&&(typeof(s=o.condition)!="object"||n[s.key]===s.value)){if(o.value!==void 0&&o.value!==null)return o.value;if(o.inherit&&n[o.inherit]!==void 0&&n[o.inherit]!==null)return n[o.inherit]}}var s;return n[t]}},advancedModeCondition={key:"design_mode",value:DEFINITIONS.DESIGN.ADVANCED},basicModeCondition={key:"design_mode",value:DEFINITIONS.DESIGN.BASIC},launcherDefaultCondition={key:"launcher_custom",value:!1},launcherCustomCondition={key:"launcher_custom",value:!0},RULES={base_color_button:{},base_color_background:{},base_color_message:{},base_color_text:{},background_type:{dependencies:[{inherit:"background_type",condition:advancedModeCondition},{value:DEFAULTS.background_type}]},background_color:{dependencies:[{inherit:"background_color",condition:advancedModeCondition},{inherit:"base_color_background"}]},background_color_gradient_from:{dependencies:[{value:DEFAULTS.background_color_gradient_from,condition:basicModeCondition}]},background_color_gradient_to:{dependencies:[{value:DEFAULTS.background_color_gradient_to,condition:basicModeCondition}]},background_image:{dependencies:[{value:DEFAULTS.background_image,condition:basicModeCondition}]},background_image_mobile:{dependencies:[{value:DEFAULTS.background_image_mobile,condition:basicModeCondition}]},background_color_mask:{dependencies:[{value:DEFAULTS.background_color_mask,condition:basicModeCondition}]},background_video_type:{dependencies:[{value:DEFAULTS.background_video_type,condition:basicModeCondition}]},background_video_webm:{dependencies:[{value:DEFAULTS.background_video_webm,condition:basicModeCondition}]},background_video_mp4:{dependencies:[{value:DEFAULTS.background_video_mp4,condition:basicModeCondition}]},header_visible:{dependencies:[{value:DEFAULTS.header_visible,condition:basicModeCondition}]},header_background_color:{dependencies:[{inherit:"header_background_color",condition:advancedModeCondition},{inherit:"base_color_message"}]},header_text:{dependencies:[{inherit:"header_text",condition:advancedModeCondition},{inherit:"base_color_text"}]},header_logo:{dependencies:[{value:DEFAULTS.header_logo,condition:basicModeCondition}]},top_bar_separator:{dependencies:[{value:DEFAULTS.top_bar_separator,condition:basicModeCondition}]},top_bar_separator_color:{dependencies:[{inherit:"top_bar_separator_color",condition:advancedModeCondition},{inherit:"base_color_text"}]},message_shape:{dependencies:[{value:DEFAULTS.message_shape,condition:basicModeCondition}]},message_background_color_bot:{dependencies:[{inherit:"message_background_color_bot",condition:advancedModeCondition},{inherit:"base_color_message"}]},message_color_bot:{dependencies:[{inherit:"message_color_bot",condition:advancedModeCondition},{inherit:"base_color_text"}]},message_background_color_user:{dependencies:[{inherit:"message_background_color_user",condition:advancedModeCondition},{inherit:"base_color_button"}]},message_color_user:{dependencies:[{inherit:"message_color_user",condition:advancedModeCondition},{inherit:"base_color_message"}]},border_radius:{dependencies:[{value:DEFAULTS.border_radius,condition:basicModeCondition}]},form_buttons_border_color:{dependencies:[{inherit:"form_buttons_border_color",condition:advancedModeCondition},{inherit:"base_color_button"}]},form_buttons_background_color:{dependencies:[{inherit:"form_buttons_background_color",condition:advancedModeCondition},{inherit:"base_color_button"}]},form_buttons_color:{dependencies:[{inherit:"form_buttons_color",condition:advancedModeCondition},{inherit:"base_color_message"}]},form_inputs_background_color:{dependencies:[{inherit:"form_inputs_background_color",condition:advancedModeCondition},{inherit:"base_color_message"}]},form_inputs_border_color:{dependencies:[{inherit:"form_inputs_border_color",condition:advancedModeCondition},{inherit:"base_color_button"}]},form_inputs_color:{dependencies:[{inherit:"form_inputs_color",condition:advancedModeCondition},{inherit:"base_color_text"}]},form_help_color:{dependencies:[{inherit:"form_help_color",condition:advancedModeCondition},{inherit:"base_color_text"}]},form_input_fullwidth_background_color:{dependencies:[{inherit:"form_input_fullwidth_background_color",condition:advancedModeCondition},{inherit:"base_color_background"}]},font_size:{},font_family:{},avatar_enabled:{},avatar_url:{},avatar_shape:{},avatar_scale:{},template_id:{},launcher_custom:{},launcher_image:{dependencies:[{value:DEFAULTS.launcher_image,condition:launcherDefaultCondition}]},launcher_type:{dependencies:[{value:DEFAULTS.launcher_type,condition:launcherDefaultCondition}]},launcher_background:{dependencies:[{inherit:"launcher_background",condition:launcherCustomCondition},{inherit:"form_buttons_background_color",condition:advancedModeCondition},{inherit:"base_color_button"}]},back_button_visible:{},google_api_key:{},design_mode:{}};function dynamicConfig(t={}){const n=utils.cleanValues(t.design);return Object.keys(RULES).reduce((r,s)=>(r[s]=utils.customGet({key:s,object:n,dependencies:RULES[s].dependencies}),r),{})}function dynamicStyles(t={}){const n=dynamicConfig(t),r={};return Object.keys(n).forEach(s=>{r[`--${s}`]=n[s]}),r}function applyRetroDynamicStyles({document:t,config:n}){const{design_mode:r,google_api_key:s,...i}=dynamicStyles(n);Object.keys(i).forEach(function(o){const l=i[o];t.style.setProperty(o,l)})}function evalCustomHtmlScripts(t,n,r,s){const i=n.createElement("div");i.innerHTML=t;const o=i.getElementsByTagName("script");Array.from(o).forEach(l=>utils$1.evalScriptTag(l,{document:n,window:r,context:s}))}function applyDesignChanges(t,n,r){utils$1.objectsDifference(n,r).forEach(s=>{t.documentElement.style.setProperty(`--${s}`,r[s])})}function DynamicStyles(){var y;const[t,n]=reactExports.useState(null),{document:r,window:s}=useDocumentContext(),i=useWidgetContext(),{design:o,style:l,foot:u,customProps:c}=useConfigContext();reactExports.useEffect(()=>{u&&evalCustomHtmlScripts(u,r,s,i)},[u,r,s,i]),reactExports.useEffect(()=>{const $=t!==null&&JSON.stringify(t)!==JSON.stringify(o);t===null?applyRetroDynamicStyles({document:r.documentElement,config:mergeWith({},{design:o,style:l,foot:u},c,()=>{})}):$&&applyDesignChanges(r,t,o),(t===null||$)&&n(o)},[t,r,o,l,u,c]);const p=`https://cdn.landbot.io/assets/fonts/${(y=o.font_family)==null?void 0:y.replace(" ","%20")}/fonts.css`,m=Object.values(r.getElementsByTagName("link")).some($=>$.href===p&&$.as==="style");return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[o.font_family&&!m&&jsxRuntimeExports.jsx("link",{href:p,rel:"stylesheet"}),o.template_id!==null&&o.template_id!==void 0&&jsxRuntimeExports.jsx("link",{href:`https://static.landbot.io/landbot-3/design/${o.template_id}.css`,rel:"stylesheet"}),!!l&&jsxRuntimeExports.jsx("style",{id:"custom-styles",children:l}),!!u&&jsxRuntimeExports.jsx("div",{id:"custom-html",dangerouslySetInnerHTML:{__html:u}})]})}Assembler$3=function({children:t}){return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[t,jsxRuntimeExports.jsx(DynamicStyles,{})]})};const EVENTS$1={DATABASE_CONNECTION:"database.connection",CUSTOM_DATA:"custom_data",INIT:"init",LOAD:"load",NEW_MESSAGE:"new_message",PROACTIVE_CLOSE:"proactive_close",PROACTIVE_OPEN:"proactive_open",SEND_MESSAGE:"send_message",SET_CONFIG:"set_config",SET_CONFIG_CONTEXT:"set_config_context",WIDGET_OPEN:"widget_open",WIDGET_CLOSE:"widget_close"},Context$c=reactExports.createContext(new d({})),Provider$b=({value:t,children:n})=>jsxRuntimeExports.jsx(Context$c.Provider,{value:t,children:n}),useCoreContext=()=>reactExports.useContext(Context$c);function polyfill$2(t,n){const r=t.Element;r.prototype.matches||(r.prototype.matches=r.prototype.matchesSelector||r.prototype.mozMatchesSelector||r.prototype.msMatchesSelector||r.prototype.oMatchesSelector||r.prototype.webkitMatchesSelector||function(s){for(var i=n.querySelectorAll(s),o=i.length;--o>=0&&i.item(o)!==this;);return o>-1})}function polyfill$1(t,n){const r=t.NodeList;r&&!r.prototype.forEach&&(r.prototype.forEach=function(s,i){i=i||t;for(var o=0;o<this.length;o++)s.call(i,this[o],o,this)})}function polyfill(t,n){var r=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame;t.requestAnimationFrame=r}function deprecationWarning(t){console.error(`Landbot: You're using a deprecated function "${t}".`)}const retroCompatSystem=({widget:t,window:n})=>{const{core:r}=t;n.Landbot=n.Landbot||{};const{Landbot:s}=n;s.send=function(i,o){switch(i){case"landbot-msg-send":r.sendMessage(o);break;case"landbot-custom-data":r.events.emit(EVENTS$1.CUSTOM_DATA,o);break;default:r.events.emit(i,o)}deprecationWarning("Landbot.send")},s.exec=s.send,s.on=function(i,o){i==="landbot-msg-receive"?r.events.on(EVENTS$1.NEW_MESSAGE,o):r.events.on(i,o),deprecationWarning("Landbot.on")},s.off=r.events.off},Context$b=reactExports.createContext(""),Provider$a=({value:t,children:n})=>jsxRuntimeExports.jsx(Context$b.Provider,{value:t,children:n}),useModeContext=()=>reactExports.useContext(Context$b);function useDocumentClassName(){const t=useModeContext(),{document:n}=useDocumentContext(),{experience:r}=useConfigContext();reactExports.useLayoutEffect(()=>{const s=`Landbot${t}`,i=`LandbotExperience--${r}`;return n.documentElement.classList.add(s),n.documentElement.classList.add(i),()=>{n.documentElement.classList.remove(s),n.documentElement.classList.remove(i)}},[t,n,r])}useHeadGlobalStyle=function(){const{document:t}=useDocumentContext();reactExports.useLayoutEffect(()=>{if(!Object.values(t.getElementsByTagName("link")).some(n=>n.href.includes("landbot-3.0.css"))){const n=t.createElement("link");n.type="text/css",n.id="dynamic-styles",n.rel="stylesheet",n.href="https://cdn.landbot.io/landbot-3/landbot-3.0.css",t.head.prepend(n)}return()=>{var n;(n=t.getElementById("dynamic-styles"))==null||n.remove()}},[t])};var Mode=(t=>(t.CONTAINER="Container",t.CONTAINER_POPUP="ContainerPopup",t.FULLPAGE="Fullpage",t.LIVECHAT="Livechat",t.NATIVE="Native",t.POPUP="Popup",t))(Mode||{});const MODES=Object.entries(Mode).reduce((t,[n,r])=>({...t,[n]:r}),{}),Context$a=reactExports.createContext({isOpen:!1,isProactiveOpen:!1,proactiveMessages:null}),{Provider:Provider$9}=Context$a,useOpenStateContext=()=>reactExports.useContext(Context$a);var AuthorTypes=(t=>(t.USER="user",t.AGENT="agent",t.BOT="bot",t.SYSTEM="sys",t))(AuthorTypes||{});const clientsThatCanBeOpened=[Mode.LIVECHAT,Mode.POPUP],messageAuthorRequiresNotification$1=[AuthorTypes.BOT,AuthorTypes.AGENT],useOpenWidgetOnNewMessage=()=>{const t=useCoreContext(),n=useModeContext(),{isOpen:r}=useOpenStateContext();reactExports.useEffect(()=>{const s=!r&&clientsThatCanBeOpened.includes(n),i=o=>{messageAuthorRequiresNotification$1.includes(o.author_type)&&s&&t.events.emit(EVENTS$1.WIDGET_OPEN)};return t.events.on(EVENTS$1.NEW_MESSAGE,i),()=>{t.events.off(EVENTS$1.NEW_MESSAGE,i)}},[t.events,n,r])},notificationSound="data:audio/mpeg;base64,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m3DHsoKJIySY02jTqTIpV5JcnGEk29OpTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+yDE+QBFVHMn7AXr4P+T5P2DPX1VVYIAWaQAAonwonvnw1+s4CxsfsoYGTATazh0EORxRZZdTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxPoARTB5GaSEaeiyD2JkkYioVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zDE+IADEAUVNMAAIdmY5P8xMABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zDE9IAJGJUVPJSAAMwQYqSAmOBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE5gPD+G0TIQBqaAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==";class AudioNotificationManager{constructor(){this.isUnlocked=!1,this.audio=new Audio(notificationSound),this.audio.preload="auto"}static getInstance(){return AudioNotificationManager.instance||(AudioNotificationManager.instance=new AudioNotificationManager),AudioNotificationManager.instance}async unlock(){try{this.audio.muted=!0,await this.audio.play(),this.audio.pause(),this.audio.currentTime=0,this.audio.muted=!1,this.isUnlocked=!0}catch{}}async playNotification(){this.isUnlocked||await this.unlock(),this.audio.currentTime=0,this.audio.play()}}const AudioNotificationService=AudioNotificationManager.getInstance(),messageAuthorRequiresNotification=[AuthorTypes.BOT,AuthorTypes.AGENT],usePlayAudioOnNewMessage=()=>{const t=useCoreContext(),n=useModeContext(),{isOpen:r}=useOpenStateContext();reactExports.useEffect(()=>{const s=i=>{messageAuthorRequiresNotification.includes(i.author_type)&&document.visibilityState==="hidden"&&AudioNotificationService.playNotification()};return t.events.on(EVENTS$1.NEW_MESSAGE,s),()=>{t.events.off(EVENTS$1.NEW_MESSAGE,s)}},[t.events,n,r])},Context$9=reactExports.createContext({}),Provider$8=({value:t={},children:n})=>jsxRuntimeExports.jsx(Context$9.Provider,{value:t,children:n}),useAgentsContext=()=>reactExports.useContext(Context$9);function AgentsService({core:t,config:n,children:r}){const[s,i]=reactExports.useState({}),[o,l]=reactExports.useState([]);return reactExports.useEffect(()=>{const u=()=>{const c=t.storage.get("agents");c&&i(c)};return t.events.on(EVENTS$1.INIT,u),()=>{t.events.off(EVENTS$1.INIT,u)}},[t.events,t.storage]),reactExports.useEffect(()=>{const u=async c=>{const p=c.agent_id||c.samurai;!p||o.includes(p)||s[p]||(l(m=>[...m,p]),p!=="-1"&&p>0&&await asyncUtils.fetchAgentData({channelToken:n.channelToken,serverUrl:n.serverUrl,agentID:p}).then(m=>{i(y=>{const $={...y,[p]:{name:m.name,avatar:m.avatar}};return t.storage.set("agents",$),$})}))};return t.events.on(EVENTS$1.NEW_MESSAGE,u),()=>{t.events.off(EVENTS$1.NEW_MESSAGE,u)}},[t.events,t.storage,s,o,n]),jsxRuntimeExports.jsx(Provider$8,{value:s,children:r})}const Context$8=reactExports.createContext({agent:0,setAssignation:()=>{}}),Provider$7=({value:t,children:n})=>jsxRuntimeExports.jsx(Context$8.Provider,{value:t,children:n}),useAssignationContext=()=>reactExports.useContext(Context$8);function AssignationService({children:t}){const[n,r]=reactExports.useState(null);return jsxRuntimeExports.jsx(Provider$7,{value:{agent:n,setAssignation:r},children:t})}var t$t={mobile:480,small_tablet:576,tablet:768,small_mobile_only:480,mobile_only:767,small_desktop:992,medium_desktop:1200,large_desktop:1440},l$c={from_tablet:"(min-width: ".concat(t$t.tablet,"px)"),from_small_tablet:"(min-width: ".concat(t$t.small_tablet,"px)"),mobile_only:"(max-width: ".concat(t$t.mobile_only,"px)"),small_mobile_only:"(max-width: ".concat(t$t.small_mobile_only,"px)"),from_mobile:"(min-width: ".concat(t$t.mobile,"px)"),only_small_tablet:"(max-width: ".concat(t$t.mobile_only,"px) and (min-width: ").concat(t$t.mobile,"px)")},o$l=function(t){var n=t.qty,r=t.unit;return"".concat(n*(arguments.length>1&&arguments[1]!==void 0?arguments[1]:1)).concat(r)},a$j=function(t){var n=t.qty,r=t.unit;return"".concat(n/(arguments.length>1&&arguments[1]!==void 0?arguments[1]:1)).concat(r)},i$k={qty:.5,unit:"rem"},o$k={design:{},initial_vars:{block_spacing:{qty:.5,unit:"rem"},vertical_unit:{qty:.5,unit:"rem"},horizontal_unit:i$k},font_sizes:{size_1:"3rem",size_2:"2.5rem",size_3:"2rem",size_4:"1.5rem",size_5:"1.25rem",size_6:"1rem",size_7:"0.75rem"},zIndex:{background:0,body:1,Branding:1,LivechatLauncher:1,LivechatContent:2,footer:5,header:10,InputFullWidth:14,BackButton__Mobile:14,OffsetMenu:19,OffsetMenuContent:20,NotificationsPanel:40,Header__Row:100,Widget:2147483e3},header:{height:{default:"95px",sticky:"58px",with_menu:"120px",not_persistent_mobile:"78px"},font_size:"0.9rem",brand_font_size:{mobile:"18px",tablet:"23px"},subtitle_font_size:{mobile:"13px",tablet:"15px"},logo_size:{mobile:"35px",tablet:"44px"},persistent_menu_button_width:"36px",persistent_menu_button_and_close_button_width:"76px"},avatar:{width:"40px",mobile_width:"35px"},footer:{max_height:{mobile:"50px",mobile_hto:"136px",desktop:"70px",desktop_hto:"160px",mobile_height:"32px"},mobile_height:"32px"},messages_max_width:"700px",message_left_margin_right:o$l(i$k,3.5),margin_left:o$l(i$k,8.5),msg_grid_left_fixed_width:"40px",device_breakpoint:t$t,input:{height:"90px",mobile_height:"90px",control_height:"58px",short_max_width:"400px"},input_cards:{card_height:"330px",card_width:"300px",button_size:"36px"},chat:{shadow_length:"14px"},widget_offset:{horizontal:"6px",vertical:"6px"},launcher:{bubble:{width:"".concat(72,"px"),height:"".concat(60,"px")},shadow_length:"".concat(14,"px"),width:"".concat(100,"px"),height:"".concat(88,"px")},widget_chat:{content_width:"".concat(425,"px"),shadow_lenght:"".concat(14,"px"),bottom_offset:"".concat(88,"px"),width:"".concat(453,"px"),height:"calc(100% - ".concat(88,")")},proactive:{width:"350px",height:"400px"}},classnames={exports:{}},module;module=classnames,function(){var t={}.hasOwnProperty;function n(){for(var i="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(i=s(i,r(l)))}return i}function r(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return n.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var o="";for(var l in i)t.call(i,l)&&i[l]&&(o=s(o,l));return o}function s(i,o){return o?i?i+" "+o:i+o:i}module.exports?(n.default=n,module.exports=n):window.classNames=n}(),classnamesExports=classnames.exports,classNames=getDefaultExportFromCjs(classnamesExports);function e$w(t){return(e$w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t$s(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,s)}return r}function r$p(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?t$s(Object(r),!0).forEach(function(s){n$m(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):t$s(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function n$m(t,n,r){return s=function(i,o){if(e$w(i)!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var u=l.call(i,o);if(e$w(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(n,"string"),(n=e$w(s)=="symbol"?s:s+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var s}c$a=function(t){var n=t.onClick,r=t.isVisible,s=t.isAnchor,i=t.href,o=t.isDisabled,l=t.children,u=t.className,c=t.label,p=t.ariaLabel,m=t.icon,y=t.type;return r&&React__default.createElement(function($){return s?React__default.createElement("a",r$p({href:i,target:"_blank"},$)):React__default.createElement("button",r$p({type:y},$))},{className:classNames(n$m(n$m({},u,!0),"button",!0)),onClick:n,"aria-label":p,disabled:o},l,!l&&m&&React__default.createElement("span",{className:"icon"},m),!l&&React__default.createElement("span",{className:"label is-unselectable"},c))},c$a.defaultProps={onClick:function(){},isVisible:!0,isDisabled:!1,isAnchor:!1,children:null,className:"custom-button",label:"",ariaLabel:"",href:"",icon:null,type:"button"};var __assign=function(){return __assign=Object.assign||function(t){for(var n,r=1,s=arguments.length;r<s;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},__assign.apply(this,arguments)};function __spreadArray(t,n,r){if(r||arguments.length===2)for(var s,i=0,o=n.length;i<o;i++)!s&&i in n||(s||(s=Array.prototype.slice.call(n,0,i)),s[i]=n[i]);return t.concat(s||Array.prototype.slice.call(n))}typeof SuppressedError=="function"&&SuppressedError;var shallowequal=function(t,n,r,s){var i=r?r.call(s,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var o=Object.keys(t),l=Object.keys(n);if(o.length!==l.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),c=0;c<o.length;c++){var p=o[c];if(!u(p))return!1;var m=t[p],y=n[p];if((i=r?r.call(s,m,y,p):void 0)===!1||i===void 0&&m!==y)return!1}return!0};const p$b=getDefaultExportFromCjs(shallowequal);var MS="-ms-",MOZ="-moz-",WEBKIT="-webkit-",COMMENT="comm",RULESET="rule",DECLARATION="decl",IMPORT="@import",KEYFRAMES="@keyframes",LAYER="@layer",abs=Math.abs,from=String.fromCharCode,assign$1=Object.assign;function hash(t,n){return 45^charat(t,0)?(((n<<2^charat(t,0))<<2^charat(t,1))<<2^charat(t,2))<<2^charat(t,3):0}function trim(t){return t.trim()}function match$1(t,n){return(t=n.exec(t))?t[0]:t}function replace$1(t,n,r){return t.replace(n,r)}function indexof(t,n,r){return t.indexOf(n,r)}function charat(t,n){return 0|t.charCodeAt(n)}function substr(t,n,r){return t.slice(n,r)}function strlen(t){return t.length}function sizeof(t){return t.length}function append(t,n){return n.push(t),t}function combine(t,n){return t.map(n).join("")}function filter(t,n){return t.filter(function(r){return!match$1(r,n)})}var line=1,column=1,length=0,position=0,character=0,characters="";function node(t,n,r,s,i,o,l,u){return{value:t,root:n,parent:r,type:s,props:i,children:o,line,column,length:l,return:"",siblings:u}}function copy(t,n){return assign$1(node("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},n)}function lift(t){for(;t.root;)t=copy(t.root,{children:[t]});append(t,t.siblings)}function char(){return character}function prev(){return character=position>0?charat(characters,--position):0,column--,character===10&&(column=1,line--),character}function next(){return character=position<length?charat(characters,position++):0,column++,character===10&&(column=1,line++),character}function peek(){return charat(characters,position)}function caret(){return position}function slice(t,n){return substr(characters,t,n)}function token(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function alloc(t){return line=column=1,length=strlen(characters=t),position=0,[]}function dealloc(t){return characters="",t}function delimit(t){return trim(slice(position-1,delimiter(t===91?t+2:t===40?t+1:t)))}function whitespace$1(t){for(;(character=peek())&&character<33;)next();return token(t)>2||token(character)>3?"":" "}function escaping(t,n){for(;--n&&next()&&!(character<48||character>102||character>57&&character<65||character>70&&character<97););return slice(t,caret()+(n<6&&peek()==32&&next()==32))}function delimiter(t){for(;next();)switch(character){case t:return position;case 34:case 39:t!==34&&t!==39&&delimiter(character);break;case 40:t===41&&delimiter(t);break;case 92:next()}return position}function commenter(t,n){for(;next()&&t+character!==57&&(t+character!==84||peek()!==47););return"/*"+slice(n,position-1)+"*"+from(t===47?t:next())}function identifier$1(t){for(;!token(peek());)next();return slice(t,position)}function compile(t){return dealloc(parse$2("",null,null,null,[""],t=alloc(t),0,[0],t))}function parse$2(t,n,r,s,i,o,l,u,c){for(var p=0,m=0,y=l,$=0,S=0,x=0,h=1,N=1,L=1,pe=0,tt="",me=i,st=o,xt=s,nt=tt;N;)switch(x=pe,pe=next()){case 40:if(x!=108&&charat(nt,y-1)==58){indexof(nt+=replace$1(delimit(pe),"&","&\f"),"&\f",abs(p?u[p-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:nt+=delimit(pe);break;case 9:case 10:case 13:case 32:nt+=whitespace$1(x);break;case 92:nt+=escaping(caret()-1,7);continue;case 47:switch(peek()){case 42:case 47:append(comment(commenter(next(),caret()),n,r,c),c);break;default:nt+="/"}break;case 123*h:u[p++]=strlen(nt)*L;case 125*h:case 59:case 0:switch(pe){case 0:case 125:N=0;case 59+m:L==-1&&(nt=replace$1(nt,/\f/g,"")),S>0&&strlen(nt)-y&&append(S>32?declaration(nt+";",s,r,y-1,c):declaration(replace$1(nt," ","")+";",s,r,y-2,c),c);break;case 59:nt+=";";default:if(append(xt=ruleset(nt,n,r,p,m,i,u,tt,me=[],st=[],y,o),o),pe===123)if(m===0)parse$2(nt,n,xt,xt,me,o,y,u,st);else switch($===99&&charat(nt,3)===110?100:$){case 100:case 108:case 109:case 115:parse$2(t,xt,xt,s&&append(ruleset(t,xt,xt,0,0,i,u,tt,i,me=[],y,st),st),i,st,y,u,s?me:st);break;default:parse$2(nt,xt,xt,xt,[""],st,0,u,st)}}p=m=S=0,h=L=1,tt=nt="",y=l;break;case 58:y=1+strlen(nt),S=x;default:if(h<1){if(pe==123)--h;else if(pe==125&&h++==0&&prev()==125)continue}switch(nt+=from(pe),pe*h){case 38:L=m>0?1:(nt+="\f",-1);break;case 44:u[p++]=(strlen(nt)-1)*L,L=1;break;case 64:peek()===45&&(nt+=delimit(next())),$=peek(),m=y=strlen(tt=nt+=identifier$1(caret())),pe++;break;case 45:x===45&&strlen(nt)==2&&(h=0)}}return o}function ruleset(t,n,r,s,i,o,l,u,c,p,m,y){for(var $=i-1,S=i===0?o:[""],x=sizeof(S),h=0,N=0,L=0;h<s;++h)for(var pe=0,tt=substr(t,$+1,$=abs(N=l[h])),me=t;pe<x;++pe)(me=trim(N>0?S[pe]+" "+tt:replace$1(tt,/&\f/g,S[pe])))&&(c[L++]=me);return node(t,n,r,i===0?RULESET:u,c,p,m,y)}function comment(t,n,r,s){return node(t,n,r,COMMENT,from(char()),substr(t,2,-2),0,s)}function declaration(t,n,r,s,i){return node(t,n,r,DECLARATION,substr(t,0,s),substr(t,s+1,-1),s,i)}function prefix(t,n,r){switch(hash(t,n)){case 5103:return WEBKIT+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return WEBKIT+t+t;case 4789:return MOZ+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return WEBKIT+t+MOZ+t+MS+t+t;case 5936:switch(charat(t,n+11)){case 114:return WEBKIT+t+MS+replace$1(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return WEBKIT+t+MS+replace$1(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return WEBKIT+t+MS+replace$1(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return WEBKIT+t+MS+t+t;case 6165:return WEBKIT+t+MS+"flex-"+t+t;case 5187:return WEBKIT+t+replace$1(t,/(\w+).+(:[^]+)/,WEBKIT+"box-$1$2"+MS+"flex-$1$2")+t;case 5443:return WEBKIT+t+MS+"flex-item-"+replace$1(t,/flex-|-self/g,"")+(match$1(t,/flex-|baseline/)?"":MS+"grid-row-"+replace$1(t,/flex-|-self/g,""))+t;case 4675:return WEBKIT+t+MS+"flex-line-pack"+replace$1(t,/align-content|flex-|-self/g,"")+t;case 5548:return WEBKIT+t+MS+replace$1(t,"shrink","negative")+t;case 5292:return WEBKIT+t+MS+replace$1(t,"basis","preferred-size")+t;case 6060:return WEBKIT+"box-"+replace$1(t,"-grow","")+WEBKIT+t+MS+replace$1(t,"grow","positive")+t;case 4554:return WEBKIT+replace$1(t,/([^-])(transform)/g,"$1"+WEBKIT+"$2")+t;case 6187:return replace$1(replace$1(replace$1(t,/(zoom-|grab)/,WEBKIT+"$1"),/(image-set)/,WEBKIT+"$1"),t,"")+t;case 5495:case 3959:return replace$1(t,/(image-set\([^]*)/,WEBKIT+"$1$`$1");case 4968:return replace$1(replace$1(t,/(.+:)(flex-)?(.*)/,WEBKIT+"box-pack:$3"+MS+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+WEBKIT+t+t;case 4200:if(!match$1(t,/flex-|baseline/))return MS+"grid-column-align"+substr(t,n)+t;break;case 2592:case 3360:return MS+replace$1(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(s,i){return n=i,match$1(s.props,/grid-\w+-end/)})?~indexof(t+(r=r[n].value),"span",0)?t:MS+replace$1(t,"-start","")+t+MS+"grid-row-span:"+(~indexof(r,"span",0)?match$1(r,/\d+/):+match$1(r,/\d+/)-+match$1(t,/\d+/))+";":MS+replace$1(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(s){return match$1(s.props,/grid-\w+-start/)})?t:MS+replace$1(replace$1(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return replace$1(t,/(.+)-inline(.+)/,WEBKIT+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(strlen(t)-1-n>6)switch(charat(t,n+1)){case 109:if(charat(t,n+4)!==45)break;case 102:return replace$1(t,/(.+:)(.+)-([^]+)/,"$1"+WEBKIT+"$2-$3$1"+MOZ+(charat(t,n+3)==108?"$3":"$2-$3"))+t;case 115:return~indexof(t,"stretch",0)?prefix(replace$1(t,"stretch","fill-available"),n,r)+t:t}break;case 5152:case 5920:return replace$1(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,i,o,l,u,c,p){return MS+i+":"+o+p+(l?MS+i+"-span:"+(u?c:+c-+o)+p:"")+t});case 4949:if(charat(t,n+6)===121)return replace$1(t,":",":"+WEBKIT)+t;break;case 6444:switch(charat(t,charat(t,14)===45?18:11)){case 120:return replace$1(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+WEBKIT+(charat(t,14)===45?"inline-":"")+"box$3$1"+WEBKIT+"$2$3$1"+MS+"$2box$3")+t;case 100:return replace$1(t,":",":"+MS)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return replace$1(t,"scroll-","scroll-snap-")+t}return t}function serialize(t,n){for(var r="",s=0;s<t.length;s++)r+=n(t[s],s,t,n)||"";return r}function stringify(t,n,r,s){switch(t.type){case LAYER:if(t.children.length)break;case IMPORT:case DECLARATION:return t.return=t.return||t.value;case COMMENT:return"";case KEYFRAMES:return t.return=t.value+"{"+serialize(t.children,s)+"}";case RULESET:if(!strlen(t.value=t.props.join(",")))return""}return strlen(r=serialize(t.children,s))?t.return=t.value+"{"+r+"}":""}function middleware(t){var n=sizeof(t);return function(r,s,i,o){for(var l="",u=0;u<n;u++)l+=t[u](r,s,i,o)||"";return l}}function rulesheet(t){return function(n){n.root||(n=n.return)&&t(n)}}function prefixer(t,n,r,s){if(t.length>-1&&!t.return)switch(t.type){case DECLARATION:return void(t.return=prefix(t.value,t.length,r));case KEYFRAMES:return serialize([copy(t,{value:replace$1(t.value,"@","@"+WEBKIT)})],s);case RULESET:if(t.length)return combine(r=t.props,function(i){switch(match$1(i,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lift(copy(t,{props:[replace$1(i,/:(read-\w+)/,":"+MOZ+"$1")]})),lift(copy(t,{props:[i]})),assign$1(t,{props:filter(r,s)});break;case"::placeholder":lift(copy(t,{props:[replace$1(i,/:(plac\w+)/,":"+WEBKIT+"input-$1")]})),lift(copy(t,{props:[replace$1(i,/:(plac\w+)/,":"+MOZ+"$1")]})),lift(copy(t,{props:[replace$1(i,/:(plac\w+)/,MS+"input-$1")]})),lift(copy(t,{props:[i]})),assign$1(t,{props:filter(r,s)})}return""})}}var unitlessKeys={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},define_process_env_default={},f$7=typeof process<"u"&&define_process_env_default!==void 0&&(define_process_env_default.REACT_APP_SC_ATTR||define_process_env_default.SC_ATTR)||"data-styled",m$c="active",y$3="data-styled-version",v$3="6.1.13",g$3=`/*!sc*/
`,S$1=typeof window<"u"&&"HTMLElement"in window,w$2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&define_process_env_default!==void 0&&define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY!==""?define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&define_process_env_default!==void 0&&define_process_env_default.SC_DISABLE_SPEEDY!==void 0&&define_process_env_default.SC_DISABLE_SPEEDY!==""&&define_process_env_default.SC_DISABLE_SPEEDY!=="false"&&define_process_env_default.SC_DISABLE_SPEEDY),b$4={},_$3=Object.freeze([]),C$2=Object.freeze({});function I$2(t,n,r){return r===void 0&&(r=C$2),t.theme!==r.theme&&t.theme||n||r.theme}var A$3=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),O=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D$3=/(^-|-$)/g;function R(t){return t.replace(O,"-").replace(D$3,"")}var T=/(a)(d)/gi,k$1=52,j$1=function(t){return String.fromCharCode(t+(t>25?39:97))};function x$6(t){var n,r="";for(n=Math.abs(t);n>k$1;n=n/k$1|0)r=j$1(n%k$1)+r;return(j$1(n%k$1)+r).replace(T,"$1-$2")}var V,F$2=5381,M$1=function(t,n){for(var r=n.length;r;)t=33*t^n.charCodeAt(--r);return t},z$1=function(t){return M$1(F$2,t)};function $$2(t){return x$6(z$1(t)>>>0)}function B$2(t){return t.displayName||t.name||"Component"}function L$1(t){return typeof t=="string"&&!0}var G=typeof Symbol=="function"&&Symbol.for,Y$1=G?Symbol.for("react.memo"):60115,W=G?Symbol.for("react.forward_ref"):60112,q={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H$1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J=((V={})[W]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V[Y$1]=U,V);function X(t){return("type"in(n=t)&&n.type.$$typeof)===Y$1?U:"$$typeof"in t?J[t.$$typeof]:q;var n}var Z=Object.defineProperty,K=Object.getOwnPropertyNames,Q$1=Object.getOwnPropertySymbols,ee=Object.getOwnPropertyDescriptor,te=Object.getPrototypeOf,ne=Object.prototype;function oe(t,n,r){if(typeof n!="string"){if(ne){var s=te(n);s&&s!==ne&&oe(t,s,r)}var i=K(n);Q$1&&(i=i.concat(Q$1(n)));for(var o=X(t),l=X(n),u=0;u<i.length;++u){var c=i[u];if(!(c in H$1||r&&r[c]||l&&c in l||o&&c in o)){var p=ee(n,c);try{Z(t,c,p)}catch{}}}}return t}function re(t){return typeof t=="function"}function se(t){return typeof t=="object"&&"styledComponentId"in t}function ie(t,n){return t&&n?"".concat(t," ").concat(n):t||n||""}function ae(t,n){if(t.length===0)return"";for(var r=t[0],s=1;s<t.length;s++)r+=t[s];return r}function ce(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function le(t,n,r){if(r===void 0&&(r=!1),!r&&!ce(t)&&!Array.isArray(t))return n;if(Array.isArray(n))for(var s=0;s<n.length;s++)t[s]=le(t[s],n[s]);else if(ce(n))for(var s in n)t[s]=le(t[s],n[s]);return t}function ue(t,n){Object.defineProperty(t,"toString",{value:n})}function he(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var fe=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return t.prototype.indexOfGroup=function(n){for(var r=0,s=0;s<n;s++)r+=this.groupSizes[s];return r},t.prototype.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var s=this.groupSizes,i=s.length,o=i;n>=o;)if((o<<=1)<0)throw he(16,"".concat(n));this.groupSizes=new Uint32Array(o),this.groupSizes.set(s),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(n+1),c=(l=0,r.length);l<c;l++)this.tag.insertRule(u,r[l])&&(this.groupSizes[n]++,u++)},t.prototype.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],s=this.indexOfGroup(n),i=s+r;this.groupSizes[n]=0;for(var o=s;o<i;o++)this.tag.deleteRule(s)}},t.prototype.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var s=this.groupSizes[n],i=this.indexOfGroup(n),o=i+s,l=i;l<o;l++)r+="".concat(this.tag.getRule(l)).concat(g$3);return r},t}(),ye=new Map,ve=new Map,ge=1,Se=function(t){if(ye.has(t))return ye.get(t);for(;ve.has(ge);)ge++;var n=ge++;return ye.set(t,n),ve.set(n,t),n},we=function(t,n){ge=n+1,ye.set(t,n),ve.set(n,t)},be="style[".concat(f$7,"][").concat(y$3,'="').concat(v$3,'"]'),Ee=new RegExp("^".concat(f$7,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ne=function(t,n,r){for(var s,i=r.split(","),o=0,l=i.length;o<l;o++)(s=i[o])&&t.registerName(n,s)},Pe=function(t,n){for(var r,s=((r=n.textContent)!==null&&r!==void 0?r:"").split(g$3),i=[],o=0,l=s.length;o<l;o++){var u=s[o].trim();if(u){var c=u.match(Ee);if(c){var p=0|parseInt(c[1],10),m=c[2];p!==0&&(we(m,p),Ne(t,m,c[3]),t.getTag().insertRules(p,i)),i.length=0}else i.push(u)}}},_e=function(t){for(var n=document.querySelectorAll(be),r=0,s=n.length;r<s;r++){var i=n[r];i&&i.getAttribute(f$7)!==m$c&&(Pe(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function Ce(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ie=function(t){var n,r,s=document.head,i=t||s,o=document.createElement("style"),l=(n=i,(r=Array.from(n.querySelectorAll("style[".concat(f$7,"]"))))[r.length-1]),u=l!==void 0?l.nextSibling:null;o.setAttribute(f$7,m$c),o.setAttribute(y$3,v$3);var c=Ce();return c&&o.setAttribute("nonce",c),i.insertBefore(o,u),o},Ae=function(){function t(n){this.element=Ie(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,i=0,o=s.length;i<o;i++){var l=s[i];if(l.ownerNode===r)return l}throw he(17)}(this.element),this.length=0}return t.prototype.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.prototype.getRule=function(n){var r=this.sheet.cssRules[n];return r&&r.cssText?r.cssText:""},t}(),Oe=function(){function t(n){this.element=Ie(n),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(n,r){if(n<=this.length&&n>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[n]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),De=function(){function t(n){this.rules=[],this.length=0}return t.prototype.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Re=S$1,Te={isServer:!S$1,useCSSOMInjection:!w$2},ke=function(){function t(n,r,s){n===void 0&&(n=C$2),r===void 0&&(r={});var i=this;this.options=__assign(__assign({},Te),n),this.gs=r,this.names=new Map(s),this.server=!!n.isServer,!this.server&&S$1&&Re&&(Re=!1,_e(this)),ue(this,function(){return function(o){for(var l=o.getTag(),u=l.length,c="",p=function(y){var $,S=($=y,ve.get($));if(S===void 0)return"continue";var x=o.names.get(S),h=l.getGroup(y);if(x===void 0||!x.size||h.length===0)return"continue";var N="".concat(f$7,".g").concat(y,'[id="').concat(S,'"]'),L="";x!==void 0&&x.forEach(function(pe){pe.length>0&&(L+="".concat(pe,","))}),c+="".concat(h).concat(N,'{content:"').concat(L,'"}').concat(g$3)},m=0;m<u;m++)p(m);return c}(i)})}return t.registerId=function(n){return Se(n)},t.prototype.rehydrate=function(){!this.server&&S$1&&_e(this)},t.prototype.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(__assign(__assign({},this.options),n),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(n=this.options,r=n.useCSSOMInjection,s=n.target,i=n.isServer?new De(s):r?new Ae(s):new Oe(s),new fe(i)));var n,r,s,i},t.prototype.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.prototype.registerName=function(n,r){if(Se(n),this.names.has(n))this.names.get(n).add(r);else{var s=new Set;s.add(r),this.names.set(n,s)}},t.prototype.insertRules=function(n,r,s){this.registerName(n,r),this.getTag().insertRules(Se(n),s)},t.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.prototype.clearRules=function(n){this.getTag().clearGroup(Se(n)),this.clearNames(n)},t.prototype.clearTag=function(){this.tag=void 0},t}(),je=/&/g,xe=/^\s*\/\/.*$/gm;function Ve(t,n){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(n," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(n," ")),r.props=r.props.map(function(s){return"".concat(n," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Ve(r.children,n)),r})}function Fe(t){var n,r,s,i=t===void 0?C$2:t,o=i.options,l=o===void 0?C$2:o,u=i.plugins,c=u===void 0?_$3:u,p=function($,S,x){return x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(n):$},m=c.slice();m.push(function($){$.type===RULESET&&$.value.includes("&")&&($.props[0]=$.props[0].replace(je,r).replace(s,p))}),l.prefix&&m.push(prefixer),m.push(stringify);var y=function($,S,x,h){S===void 0&&(S=""),x===void 0&&(x=""),h===void 0&&(h="&"),n=h,r=S,s=new RegExp("\\".concat(r,"\\b"),"g");var N=$.replace(xe,""),L=compile(x||S?"".concat(x," ").concat(S," { ").concat(N," }"):N);l.namespace&&(L=Ve(L,l.namespace));var pe=[];return serialize(L,middleware(m.concat(rulesheet(function(tt){return pe.push(tt)})))),pe};return y.hash=c.length?c.reduce(function($,S){return S.name||he(15),M$1($,S.name)},F$2).toString():"",y}var Me=new ke,ze=Fe(),$e=React__default.createContext({shouldForwardProp:void 0,styleSheet:Me,stylis:ze});$e.Consumer;var Le=React__default.createContext(void 0);function Ge(){return reactExports.useContext($e)}Ye=function(t){var n=reactExports.useState(t.stylisPlugins),r=n[0],s=n[1],i=Ge().styleSheet,o=reactExports.useMemo(function(){var c=i;return t.sheet?c=t.sheet:t.target&&(c=c.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(c=c.reconstructWithOptions({useCSSOMInjection:!1})),c},[t.disableCSSOMInjection,t.sheet,t.target,i]),l=reactExports.useMemo(function(){return Fe({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})},[t.enableVendorPrefixes,t.namespace,r]);reactExports.useEffect(function(){p$b(r,t.stylisPlugins)||s(t.stylisPlugins)},[t.stylisPlugins]);var u=reactExports.useMemo(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:l}},[t.shouldForwardProp,o,l]);return React__default.createElement($e.Provider,{value:u},React__default.createElement(Le.Provider,{value:l},t.children))};var We=function(){function t(n,r){var s=this;this.inject=function(i,o){o===void 0&&(o=ze);var l=s.name+o.hash;i.hasNameForId(s.id,l)||i.insertRules(s.id,l,o(s.rules,l,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=r,ue(this,function(){throw he(12,String(s.name))})}return t.prototype.getName=function(n){return n===void 0&&(n=ze),this.name+n.hash},t}(),qe=function(t){return t>="A"&&t<="Z"};function He(t){for(var n="",r=0;r<t.length;r++){var s=t[r];if(r===1&&s==="-"&&t[0]==="-")return t;qe(s)?n+="-"+s.toLowerCase():n+=s}return n.startsWith("ms-")?"-"+n:n}var Ue=function(t){return t==null||t===!1||t===""},Je=function(t){var n,r,s=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!Ue(o)&&(Array.isArray(o)&&o.isCss||re(o)?s.push("".concat(He(i),":"),o,";"):ce(o)?s.push.apply(s,__spreadArray(__spreadArray(["".concat(i," {")],Je(o),!1),["}"],!1)):s.push("".concat(He(i),": ").concat((n=i,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||n in unitlessKeys||n.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function Xe(t,n,r,s){return Ue(t)?[]:se(t)?[".".concat(t.styledComponentId)]:re(t)?!re(i=t)||i.prototype&&i.prototype.isReactComponent||!n?[t]:Xe(t(n),n,r,s):t instanceof We?r?(t.inject(r,s),[t.getName(s)]):[t]:ce(t)?Je(t):Array.isArray(t)?Array.prototype.concat.apply(_$3,t.map(function(o){return Xe(o,n,r,s)})):[t.toString()];var i}function Ze(t){for(var n=0;n<t.length;n+=1){var r=t[n];if(re(r)&&!se(r))return!1}return!0}var Ke=z$1(v$3),Qe=function(){function t(n,r,s){this.rules=n,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Ze(n),this.componentId=r,this.baseHash=M$1(Ke,r),this.baseStyle=s,ke.registerId(r)}return t.prototype.generateAndInjectStyles=function(n,r,s){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=ie(i,this.staticRulesId);else{var o=ae(Xe(this.rules,n,r,s)),l=x$6(M$1(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,l)){var u=s(o,".".concat(l),void 0,this.componentId);r.insertRules(this.componentId,l,u)}i=ie(i,l),this.staticRulesId=l}else{for(var c=M$1(this.baseHash,s.hash),p="",m=0;m<this.rules.length;m++){var y=this.rules[m];if(typeof y=="string")p+=y;else if(y){var $=ae(Xe(y,n,r,s));c=M$1(c,$+m),p+=$}}if(p){var S=x$6(c>>>0);r.hasNameForId(this.componentId,S)||r.insertRules(this.componentId,S,s(p,".".concat(S),void 0,this.componentId)),i=ie(i,S)}}return i},t}(),et=React__default.createContext(void 0);function ot(t){var n=React__default.useContext(et),r=reactExports.useMemo(function(){return function(s,i){if(!s)throw he(14);if(re(s))return s(i);if(Array.isArray(s)||typeof s!="object")throw he(8);return i?__assign(__assign({},i),s):s}(t.theme,n)},[t.theme,n]);return t.children?React__default.createElement(et.Provider,{value:r},t.children):null}et.Consumer;var rt={};function it(t,n,r){var s,i=se(t),o=t,l=!L$1(t),u=n.attrs,c=u===void 0?_$3:u,p=n.componentId,m=p===void 0?function(st,xt){var nt=typeof st!="string"?"sc":R(st);rt[nt]=(rt[nt]||0)+1;var Et="".concat(nt,"-").concat($$2(v$3+nt+rt[nt]));return xt?"".concat(xt,"-").concat(Et):Et}(n.displayName,n.parentComponentId):p,y=n.displayName,$=y===void 0?L$1(s=t)?"styled.".concat(s):"Styled(".concat(B$2(s),")"):y,S=n.displayName&&n.componentId?"".concat(R(n.displayName),"-").concat(n.componentId):n.componentId||m,x=i&&o.attrs?o.attrs.concat(c).filter(Boolean):c,h=n.shouldForwardProp;if(i&&o.shouldForwardProp){var N=o.shouldForwardProp;if(n.shouldForwardProp){var L=n.shouldForwardProp;h=function(st,xt){return N(st,xt)&&L(st,xt)}}else h=N}var pe=new Qe(r,S,i?o.componentStyle:void 0);function tt(st,xt){return function(nt,Et,At){var Ct=nt.attrs,bt=nt.componentStyle,yt=nt.defaultProps,St=nt.foldedComponentIds,_t=nt.styledComponentId,kt=nt.target,Tt=React__default.useContext(et),Ot=Ge(),gt=nt.shouldForwardProp||Ot.shouldForwardProp,vt=I$2(Et,Tt,yt)||C$2,$t=function(Ft,Lt,Ut){for(var Ht,Pt=__assign(__assign({},Lt),{className:void 0,theme:Ut}),Wt=0;Wt<Ft.length;Wt+=1){var zt=re(Ht=Ft[Wt])?Ht(Pt):Ht;for(var Dt in zt)Pt[Dt]=Dt==="className"?ie(Pt[Dt],zt[Dt]):Dt==="style"?__assign(__assign({},Pt[Dt]),zt[Dt]):zt[Dt]}return Lt.className&&(Pt.className=ie(Pt.className,Lt.className)),Pt}(Ct,Et,vt),It=$t.as||kt,wt={};for(var jt in $t)$t[jt]===void 0||jt[0]==="$"||jt==="as"||jt==="theme"&&$t.theme===vt||(jt==="forwardedAs"?wt.as=$t.forwardedAs:gt&&!gt(jt,It)||(wt[jt]=$t[jt]));var Mt,Vt,Rt,Nt=(Mt=bt,Vt=$t,Rt=Ge(),Mt.generateAndInjectStyles(Vt,Rt.styleSheet,Rt.stylis)),Bt=ie(St,_t);return Nt&&(Bt+=" "+Nt),$t.className&&(Bt+=" "+$t.className),wt[L$1(It)&&!A$3.has(It)?"class":"className"]=Bt,wt.ref=At,reactExports.createElement(It,wt)}(me,st,xt)}tt.displayName=$;var me=React__default.forwardRef(tt);return me.attrs=x,me.componentStyle=pe,me.displayName=$,me.shouldForwardProp=h,me.foldedComponentIds=i?ie(o.foldedComponentIds,o.styledComponentId):"",me.styledComponentId=S,me.target=i?o.target:t,Object.defineProperty(me,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(st){this._foldedDefaultProps=i?function(xt){for(var nt=[],Et=1;Et<arguments.length;Et++)nt[Et-1]=arguments[Et];for(var At=0,Ct=nt;At<Ct.length;At++)le(xt,Ct[At],!0);return xt}({},o.defaultProps,st):st}}),ue(me,function(){return".".concat(me.styledComponentId)}),l&&oe(me,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),me}function at(t,n){for(var r=[t[0]],s=0,i=n.length;s<i;s+=1)r.push(n[s],t[s+1]);return r}var ct=function(t){return Object.assign(t,{isCss:!0})};lt=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(re(t)||ce(t))return ct(Xe(at(_$3,__spreadArray([t],n,!0))));var s=t;return n.length===0&&s.length===1&&typeof s[0]=="string"?Xe(s):ct(Xe(at(s,n)))};function ut(t,n,r){if(r===void 0&&(r=C$2),!n)throw he(1,n);var s=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return t(n,r,lt.apply(void 0,__spreadArray([i],o,!1)))};return s.attrs=function(i){return ut(t,n,__assign(__assign({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},s.withConfig=function(i){return ut(t,n,__assign(__assign({},r),i))},s}let pt;pt=function(t){return ut(it,t)},dt=pt,A$3.forEach(function(t){dt[t]=pt(t)});var ht=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=Ze(n),ke.registerId(this.componentId+1)}return t.prototype.createStyles=function(n,r,s,i){var o=i(ae(Xe(this.rules,r,s,i)),""),l=this.componentId+n;s.insertRules(l,l,o)},t.prototype.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.prototype.renderStyles=function(n,r,s,i){n>2&&ke.registerId(this.componentId+n),this.removeStyles(n,s),this.createStyles(n,r,s,i)},t}(),n$l;ft=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var s=lt.apply(void 0,__spreadArray([t],n,!1)),i="sc-global-".concat($$2(JSON.stringify(s))),o=new ht(s,i),l=function(c){var p=Ge(),m=React__default.useContext(et),y=React__default.useRef(p.styleSheet.allocateGSInstance(i)).current;return p.styleSheet.server&&u(y,c,p.styleSheet,m,p.stylis),React__default.useLayoutEffect(function(){if(!p.styleSheet.server)return u(y,c,p.styleSheet,m,p.stylis),function(){return o.removeStyles(y,p.styleSheet)}},[y,c,p.styleSheet,m,p.stylis]),null};function u(c,p,m,y,$){if(o.isStatic)o.renderStyles(c,b$4,m,$);else{var S=__assign(__assign({},p),{theme:I$2(p,y,l.defaultProps)});o.renderStyles(c,S,m,$)}}return React__default.memo(l)},mt=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var s=ae(lt.apply(void 0,__spreadArray([t],n,!1))),i=$$2(s);return new We(i,s)};var t$r=function(t){return dt(t)(n$l||(n=[`
  height: auto;
  line-height: 1.1;

  .label {
    font-size: `,`;
    color: inherit;
    font-weight: inherit;
  }

  .icon {
    transform: translateY(-3px);
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    .icon {
      transform: translateY(-6px);
    }
  }
`],r||(r=n.slice(0)),n$l=Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))),function(s){return s.theme.header.font_size});var n,r};function t$q(t){return(t$q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function e$v(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,s)}return r}function r$o(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?e$v(Object(r),!0).forEach(function(s){n$k(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e$v(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function n$k(t,n,r){return s=function(i,o){if(t$q(i)!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var u=l.call(i,o);if(t$q(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(n,"string"),(n=t$q(s)=="symbol"?s:s+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var s}var a$i=function(t){var n=t.className;return React__default.createElement(c$a,r$o(r$o({},t),{},{className:classNames(n$k(n$k({},n,!!n),"custom-button",!String(n).includes("input-button")))}))};a$i.defaultProps={className:""};var s$9=t$r(a$i),f$6=function(t){var n=t.className;return React__default.createElement(s$9,r$o(r$o({},t),{},{className:classNames(n$k(n$k(n$k({},n,!!n),"custom-button",!String(n).includes("input-button")),"button",!0)),as:"button"}))},n$j,t$p,e$u,o$j,i$j,r$n,a$h,p$a,l$b,d$8,s$8,x$5,c$9,b$3;function f$5(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}f$6.defaultProps={className:""};var h$2=dt.input(n$j||(n$j=f$5([`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`]))),m$b=dt.div(t$p||(t$p=f$5([`
  @media `,` {
    width: 356px;
  }

  &.InputFile--draggedover {
    .InputFile__DropArea {
      box-shadow: inset 0 0px 7px 7px rgba(0, 0, 0, 0.2);
    }

    .InputFile__DropBorder {
      border-color: `,`;
    }
  }

  .is-loading.button::after {
    border-color: transparent transparent `,`;
  }

  .InputFile__DropArea,
  .InputFile__inputarea {
    color: `,`;
  }

  .InputFile__DropArea {
    background-color: `,`;
  }

  .InputFile__filename {
    color: `,`;
  }

  .InputFile__HelpText {
    width: calc(66.66% - 8px);
    font-size: 14px;
  }

  .InputFile__ButtonContainer:hover .button {
    box-shadow:
      0 6px 21px -11px rgba(0, 0, 0, 0.75),
      0 13px 17px -16px rgba(47, 49, 72, 0.75);
  }
`])),l$c.from_tablet,function(t){return t.theme.design.form_buttons_color},function(t){return t.theme.design.form_buttons_color},function(t){return t.theme.design.form_buttons_color},function(t){return t.theme.design.form_buttons_background_color},function(t){return t.theme.design.form_help_color}),_$2=dt.div(e$u||(e$u=f$5([`
  padding: 10px 8px;
  display: flex;
  /* overflow-x: auto; */
  align-items: center;
  box-sizing: content-box;
  justify-content: left;
  border-radius: 3px;
  flex-wrap: wrap;
  min-height: 112px;
  box-sizing: border-box;

  .InputFile__filethumbnail .InputFile__DropIcon {
    margin: 0;

    &:after {
      content: '';
      background-color: rgb(0 0 0 / 15%);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`]))),w=dt.div(o$j||(o$j=f$5([`
  border: 2px dashed white;
  height: 92px;
  width: calc(33.33% - 8px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  left: 4px;
  margin: 6px 0;

  @media `,` {
    width: calc(25% - 8px);
  }
`])),l$c.only_small_tablet),y$2=dt.i(i$j||(i$j=f$5([`
  transform: rotate(45deg);
  font-size: 24px;
`]))),v$2=dt.div(r$n||(r$n=f$5([`
  width: 100%;
  height: 92px;
  display: flex;
  border-radius: 2px;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-width: 1px;
  border-style: dashed;
`]))),z=dt.i(a$h||(a$h=f$5([`
  font-size: 40px;
  margin-right: 6px;

  &:before {
    position: relative;
    z-index: 1;
  }
`]))),I$1=dt.span(p$a||(p$a=f$5([`
  @media `,` {
    display: none;
  }
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`])),l$c.mobile_only),F$1=dt.div(l$b||(l$b=f$5([`
  height: 94px;
  display: flex;
  width: 33.33%;
  padding: 0 5px;
  margin: 6px 0;

  @media `,` {
    width: 25%;
  }
`])),l$c.only_small_tablet),k=dt.div(d$8||(d$8=f$5([`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  .custom-button.button {
    padding: 6px 16px;

    &.InputFile__SendButton {
      min-width: calc(33.33% + 12px);
      margin: 0 0 0 auto;

      @media `,` {
        min-width: calc(25% + 12px);
      }
    }
  }
`])),l$c.only_small_tablet),j=dt.div(s$8||(s$8=f$5([`
  line-height: 1.35em;
  flex-shrink: 0;
  width: 100%;
  position: relative;
`]))),D$2=dt(j)(x$5||(x$5=f$5([`
  color: #b50000;
  font-size: 14px;
  margin-bottom: 20px;
  padding-right: 24px;
  justify-content: space-between;

  .InputFile__closebutton {
    right: 0;
    top: 0;
    background-color: #b50000;
    height: 18px;
    width: 18px;

    &::before,
    &::after {
      background-color: white;
    }
  }
`]))),A$2=dt.div(c$9||(c$9=f$5([`
  height: 100%;
  width: 100%;
  border-radius: 3px;
  position: relative;
  align-items: center;
  display: inline-flex;
  background-size: cover;
  justify-content: center;
  background-position: 50%;
  border: 2px dashed #ffffff;
`]))),B$1=dt.div(b$3||(b$3=f$5([`
  top: -3px;
  z-index: 1;
  width: 24px;
  height: 24px;
  right: -10px;
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff;

  &::before,
  &::after {
    top: 50%;
    left: 50%;
    width: 50%;
    content: '';
    height: 2px;
    display: block;
    position: absolute;
    background-color: black;
    transform-origin: center center;
  }

  &::before {
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }

  &::after {
    transform: translateX(-50%) translateY(-50%) rotate(-45deg);
  }

  &:hover {
    box-shadow:
      0 7px 14px rgba(50, 50, 93, 0.1),
      0 3px 6px rgba(0, 0, 0, 0.08);
  }
`]))),n$i,e$t,o$i,t$o,i$i,r$m;function g$2(t){var n,r,s=t.dragOver,i=t.error,o=t.loading,l=t.onDragLeave,u=t.onDragOver,c=t.onDrop,p=t.onSubmit,m=t.onRemoveFile,y=t.uploadFiles,$=t.uploadedFiles,S=t.text,x=$&&$.length>0,h=(r=(n=S.input_files_instructions_help)===null||n===void 0?void 0:n.replace("@maxfiles","6"))===null||r===void 0?void 0:r.replace("@maxfilesize","10MB");return React__default.createElement(m$b,{className:classNames({InputFile:!0,"InputFile--draggedover":s})},React__default.createElement(_$2,{className:"InputFile__DropArea",onDragEnd:l,onDragLeave:l,onDragOver:u,onDrop:c},x?$.map(function(N){return React__default.createElement(F$1,{className:"InputFile__filecontainer",key:N.key},React__default.createElement(A$2,{className:"InputFile__filethumbnail hu-text-center hu-align-center hu-justify-center","data-type":N.type||null,style:{backgroundImage:N.url?"url('".concat(N.url,"') "):null}},React__default.createElement(B$1,{className:"InputFile__closebutton","data-key":N.key||null,onClick:m}),N.type!=="image"&&React__default.createElement(z,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"})))}):React__default.createElement(v$2,{className:"InputFile__DropBorder"},React__default.createElement(z,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"}),React__default.createElement(I$1,{className:"InputFile__DropTitle"},S.input_files_help)),x&&$.length<6&&React__default.createElement(w,{className:"InputFile__DropAreaButton"},React__default.createElement(h$2,{multiple:!0,onChange:function(N){return y(N.target.files)},type:"file"}),React__default.createElement(y$2,{className:"fi cross input-drop-icon hu-s-40"}))),React__default.createElement(k,{className:"InputFile__inputarea hu-display-flex hu-align-center"},i,!x&&React__default.createElement(React__default.Fragment,null,React__default.createElement(j,{className:"InputFile__filename InputFile__HelpText"},h),React__default.createElement("div",{className:"is-relative InputFile__ButtonContainer"},React__default.createElement(h$2,{multiple:!0,onChange:function(N){return y(N.target.files)},type:"file"}),React__default.createElement(s$9,{className:classNames(o&&"is-loading"),label:S.select_files}))),x&&React__default.createElement(s$9,{className:classNames(o&&"is-loading","InputFile__SendButton"),label:S.send,onClick:p})))}function d$7(t){var n,r=t.dragOver,s=t.error,i=t.loading,o=t.onDragLeave,l=t.onDragOver,u=t.onDrop,c=t.onRemoveFile,p=t.onSubmit,m=t.uploadFile,y=t.uploadedFiles,$=t.text,S=y&&y.length>0,x=(n=$.input_file_instructions_help)===null||n===void 0?void 0:n.replace("@maxfilesize","10MB");return React__default.createElement(m$b,{className:classNames({InputFile:!0,"InputFile--draggedover":r})},React__default.createElement(_$2,{className:"InputFile__DropArea",onDragEnd:o,onDragLeave:o,onDragOver:l,onDrop:u},S?y.map(function(h){return React__default.createElement(F$1,{className:"InputFile__filecontainer",key:h.key},React__default.createElement(A$2,{className:"InputFile__filethumbnail hu-text-center hu-align-center hu-justify-center","data-type":h.type||null,style:{backgroundImage:h.url?"url('".concat(h.url,"') "):null}},React__default.createElement(B$1,{className:"InputFile__closebutton","data-key":h.key||null,onClick:function(N){return c(N)}}),h.type!=="image"&&React__default.createElement(z,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"})))}):React__default.createElement(v$2,{className:"InputFile__DropBorder"},React__default.createElement(z,{className:"InputFile__DropIcon fi document input-drop-icon hu-s-40"}),React__default.createElement(I$1,{className:"InputFile__DropTitle"},$.input_file_help))),React__default.createElement(k,{className:"InputFile__inputarea hu-display-flex hu-align-center"},s,!S&&React__default.createElement(React__default.Fragment,null,React__default.createElement(j,{className:"InputFile__filename InputFile__HelpText"},x),React__default.createElement("div",{className:"is-relative InputFile__ButtonContainer"},React__default.createElement(h$2,{onChange:function(h){return m(h.target.files[0])},type:"file"}),React__default.createElement(s$9,{className:classNames(i&&"is-loading"),label:$.select_file}))),S&&React__default.createElement(s$9,{className:classNames(i&&"is-loading","InputFile__SendButton"),label:$.send,onClick:p})))}function l$a(t){var n=t.content,r=t.filesize,s=t.setError;return React__default.createElement(D$2,{className:"InputFile__Error is-flex has-text-weight-semibold"},React__default.createElement("span",{className:"InputFile__Error-FileName is-overflow-ellipsis"},n),r&&React__default.createElement("span",{className:"InputFile__Error-FileSize has-text-right"},r),React__default.createElement(B$1,{className:"InputFile__closebutton",onClick:function(){return s(null)}}))}function a$g(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}g$2.defaultProps={uploadedFiles:null,loading:!1,error:null,onRemoveFile:null,onSubmit:null,uploadFiles:null,onDragOver:null,onDragLeave:null,onDrop:null,dragOver:!1,text:{input_file_instructions_help:"",input_files_instructions_help:"",input_file_help:"",input_files_help:"",select_file:"",select_files:"",send:""}},d$7.defaultProps={uploadedFiles:null,loading:!1,error:null,onRemoveFile:null,onSubmit:null,uploadFile:null,onDragOver:null,onDragLeave:null,onDrop:null,dragOver:!1,text:{input_file_instructions_help:"",input_files_instructions_help:"",input_file_help:"",input_files_help:"",select_file:"",select_files:"",send:""}},l$a.defaultProps={content:"error",filesize:null,setError:null};var c$8=dt.div(n$i||(n$i=a$g([`
  && {
    z-index: `,`;
    pointer-events: none;

    `,`
  }
`])),function(t){var n,r=t.theme;return(n=r==null?void 0:r.zIndex)===null||n===void 0?void 0:n.background},function(t){return t.isNative?`position: fixed;
       bottom: initial;
       right: initial;
       width: 100%;
       height: 100vh;
    `:"position: absolute;"}),l$9=dt(c$8)(e$t||(e$t=a$g([`
  pointer-events: none;
  background-color: `,`;
`])),function(t){var n=t.theme;return n==null?void 0:n.design.background_color_mask}),u$3=dt(c$8)(o$i||(o$i=a$g([`
  background-color: `,`;
`])),function(t){return t.theme.design.background_color}),s$7=dt(c$8)(t$o||(t$o=a$g([`
  background-image: linear-gradient(
    to bottom,
    var(--background_color_gradient_from) 6rem,
    var(--background_color_gradient_to)
  );
`]))),g$1=dt(c$8)(i$i||(i$i=a$g([`
  /* Image should cover the full screen. */
  background-size: cover;
  background-position: center;
`]))),v$1=dt(c$8)(r$m||(r$m=a$g([`
  /* Video should cover the full screen. */
  video {
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    display: block;
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    max-width: initial;
    background-size: cover;
    transform: translateX(-50%) translateY(-50%);

    &::-webkit-media-controls {
      display: none;
    }
  }
`]))),i$h=function(t){var n=t.background_type,r=t.background_image,s=t.background_image_mobile,i=t.background_video_webm,o=t.background_video_mp4,l=t.isNative;switch(n){case DEFINITIONS.BACKGROUND_TYPE.SOLID:return React__default.createElement(u$3,{className:"Background Background--color is-overlay",id:"Background",isNative:l});case DEFINITIONS.BACKGROUND_TYPE.GRADIENT:return React__default.createElement(s$7,{className:"Background Background--gradient is-overlay",id:"Background",isNative:l});case DEFINITIONS.BACKGROUND_TYPE.IMAGE:return React__default.createElement(React__default.Fragment,null,React__default.createElement(g$1,{className:"Background Background--image is-overlay is-hidden-mobile",id:"Background",isNative:l,style:{backgroundImage:"url(".concat(r,")")}}),React__default.createElement(g$1,{className:"Background Background--image is-overlay is-hidden-tablet",id:"Background",isNative:l,style:{backgroundImage:"url(".concat(s||r,")")}}),React__default.createElement(l$9,{className:"Background--overlay is-overlay",isNative:l}));case DEFINITIONS.BACKGROUND_TYPE.VIDEO:return React__default.createElement(v$1,{className:"Background Background--video is-overlay",id:"Background",isNative:l},React__default.createElement("video",{autoPlay:!0,key:o,loop:!0,muted:!0,playsInline:!0},React__default.createElement("source",{src:o,type:"video/mp4"}),React__default.createElement("source",{src:i,type:"video/webm"})),React__default.createElement(l$9,{className:"Background--overlay is-overlay"}));default:return null}};i$h.defaultProps={background_type:DEFINITIONS.BACKGROUND_TYPE.SOLID,background_image:null,background_image_mobile:null,background_video_webm:null,background_video_mp4:null,isNative:!0};var e$s=function(t){return t.length===2?t:"0"+t},t$n=function(t,n){return n.toUpperCase().replace("DD",e$s(t.getDate().toString())).replace("MM",e$s((t.getMonth()+1).toString())).replace("YYYY",t.getFullYear().toString()).replace("YY",t.getFullYear().toString().slice(-2))},e$r=function(t,n){var r=n.toUpperCase().split("/"),s=t.split("/"),i=new Date;return i.setHours(0,0,0,0),r.forEach(function(o,l){switch(o){case"DD":i.setDate(parseInt(s[l],10));break;case"MM":i.setMonth(parseInt(s[l],10)-1);break;case"YYYY":i.setFullYear(parseInt(s[l],10));break;case"YY":parseInt(s[l],10)>=new Date().getFullYear()-1950?i.setFullYear(parseInt("19"+s[l],10)):i.setFullYear(parseInt("20"+s[l],10))}}),i};function e$q(t){return t.replace(/Y/g,"y").replace(/D/g,"d")}function t$m(t){var n=t.from,r=t.to;return n&&n.setHours(0,0,0,0),r&&r.setHours(23,59,59,59),{from:n,to:r}}function r$l(t){var n=null;if(t){var r=t.enabledDatesType,s=t.includeCurrentDate,i=t.enabledCustomRanges&&t.enabledCustomRanges.filter(Boolean)||null,o=s?0:1;switch(r){case"past":var l=new Date;l.setDate(l.getDate()-o),n=[t$m({from:null,to:l})];break;case"future":var u=new Date;u.setDate(u.getDate()+o),n=[t$m({from:u,to:null})];break;case"custom":Array.isArray(i)&&(n=i.map(function(c){var p=c.from,m=c.to;return{from:p?new Date(p):null,to:m?new Date(m):null}}).map(t$m))}}return n}function n$h(t,n){return n.some(function(r){return s=t,o=(i=r).from,l=i.to,u=s.getTime(),o&&l?u>=o.getTime()&&u<=l.getTime():o?u>=o.getTime():!!l&&u<=l.getTime();var s,i,o,l,u})}function a$f(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],s=Array.isArray(n)&&n.length>0,i=Array.isArray(r)&&r.length>0;return t&&(!s||n$h(t,n))&&(!i||r.includes(t.getDay()))}function o$h(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return{month:(t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:null)||(n&&n.length>0?n.reduce(function(r,s){var i=s.from,o=s.to,l=i||o;return r&&r.getTime()<l.getTime()?r:l},null):new Date)).getMonth(),year:t.getFullYear()}}var e$p=function(t){return t instanceof Date&&!isNaN(t.getTime())};function t$l(t){return(t$l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function e$o(t,n){for(var r=0;r<n.length;r++){var s=n[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,r$k(s.key),s)}}function r$k(t){var n=function(r){if(t$l(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var i=s.call(r,"string");if(t$l(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(t);return t$l(n)=="symbol"?n:n+""}var f$4=function(t,n){var r=e$r(t,n);if(e$p(r))return r},c$7=(t2=function t(n){(function(r,s){if(!(r instanceof s))throw new TypeError("Cannot call a class as a function")})(this,t),this.showDatePicker=(n==null?void 0:n.showDatePicker)!==!1,this.enabledDaysOfWeek=(n==null?void 0:n.enabledDaysOfWeek)||null,this.enabledDateRanges=r$l(n),this.dateFormat=(n==null?void 0:n.format)||"YYYY/MM/DD"},(r2=[{key:"getShowDatePicker",value:function(){return this.showDatePicker}},{key:"getInitialMonth",value:function(t){return o$h(this.enabledDateRanges,t)}},{key:"getDateFnsFormat",value:function(){return e$q(this.dateFormat)}},{key:"applyDateFormat",value:function(t){return t$n(t,this.getDateFnsFormat())}},{key:"parseDate",value:function(t){return f$4(t,this.getDateFnsFormat())}},{key:"isValidDate",value:function(t){return a$f(t,this.enabledDateRanges,this.enabledDaysOfWeek)}}])&&e$o(t2.prototype,r2),Object.defineProperty(t2,"prototype",{writable:!1}),t2),t2,r2,propTypes={exports:{}},ReactPropTypesSecret$1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret$1,ReactPropTypesSecret=ReactPropTypesSecret_1;function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;var factoryWithThrowingShims=function(){function t(s,i,o,l,u,c){if(c!==ReactPropTypesSecret){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}function n(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return r.PropTypes=r,r};propTypes.exports=factoryWithThrowingShims();var propTypesExports=propTypes.exports;PropTypes=getDefaultExportFromCjs(propTypesExports);function e$n(t){return(e$n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}var A$1,t$k=["fill"],r$j=["fill"],n$g=["fill"],g=["fill","rotate45"];function i$g(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,s)}return r}function l$8(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i$g(Object(r),!0).forEach(function(s){a$e(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i$g(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function a$e(t,n,r){return s=function(i,o){if(e$n(i)!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var u=l.call(i,o);if(e$n(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(n,"string"),(n=e$n(s)=="symbol"?s:s+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var s}function c$6(t,n){if(t==null)return{};var r,s,i=function(l,u){if(l==null)return{};var c={};for(var p in l)if({}.hasOwnProperty.call(l,p)){if(u.includes(p))continue;c[p]=l[p]}return c}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)r=o[s],n.includes(r)||{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var f$3=function(){return React__default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 64 64"},React__default.createElement("g",{fill:"#42ade2"},React__default.createElement("path",{d:"M16.1 48.5c-.5-.1-.9-.2-1.4-.4c-.5-.2-.9-.3-1.3-.5c-.9-.4-1.7-.9-2.5-1.5C9.3 45 8 43.5 7 41.7C6 40 5.4 38 5.3 36.1c-.1-1 0-1.9.1-2.9c.1-.5.2-.9.3-1.4c.1-.5.3-.9.4-1.4l.1 1.4c0 .5.1.9.2 1.4c.1.9.3 1.8.5 2.6c.4 1.7 1 3.3 1.9 4.8c.9 1.5 1.9 2.9 3.2 4.2c.6.6 1.3 1.2 2 1.8c.3.3.7.6 1.1.9l1 1"}),React__default.createElement("path",{d:"M15.8 52.1c-.3.2-.7.3-1.1.4c-.4.1-.7.2-1.1.2c-.7.1-1.5.2-2.3.1c-1.5-.1-3.1-.5-4.4-1.2c-1.4-.7-2.6-1.8-3.4-3.1c-.4-.6-.8-1.3-1.1-2c-.1-.3-.2-.7-.3-1.1c0-.3-.1-.6-.1-1c.3.3.5.6.7.8c.3.3.5.6.7.8c.5.5.9 1 1.4 1.4c1 .9 2 1.7 3.2 2.3c1.1.6 2.4 1.1 3.6 1.5c.6.2 1.3.3 2 .5c.3.1.7.1 1 .2c.5.1.8.1 1.2.2"}),React__default.createElement("path",{d:"M38.4 3.5c.5.1.9.3 1.4.5c.5.2.9.4 1.3.6c.9.5 1.7 1 2.5 1.6c1.6 1.2 2.9 2.8 3.8 4.6c.9 1.8 1.4 3.8 1.4 5.7c0 1-.1 1.9-.3 2.9c-.1.5-.2.9-.4 1.4c-.2.5-.3.9-.5 1.3l-.1-1.4c0-.5 0-.9-.1-1.4l-.3-2.7c-.3-1.7-.9-3.4-1.7-5c-.8-1.6-1.8-3-3-4.3c-.6-.7-1.3-1.3-1.9-2c-.3-.3-.7-.6-1.1-.9l-1-.9"}),React__default.createElement("path",{d:"M47.1 3.1c.4.1.7.2 1 .4c.3.1.7.3 1 .5c.6.4 1.2.8 1.8 1.3c1.1 1 2 2.2 2.5 3.6c.6 1.4.8 2.9.6 4.4c-.1.7-.3 1.4-.5 2.1c-.1.3-.3.7-.4 1c-.2.3-.3.6-.6.9v-2c0-.7-.1-1.3-.1-1.9c-.2-1.3-.4-2.5-.9-3.6c-.5-1.2-1.1-2.2-1.8-3.3c-.4-.5-.8-1.1-1.2-1.6c-.2-.3-.4-.5-.7-.8c-.2-.5-.5-.8-.7-1"})),React__default.createElement("g",{fill:"#ffdd67"},React__default.createElement("path",{d:"M10 18c-2 .9-2.7 3.3-1.8 5.3l12.6 26.3l7-3.3l-12.6-26.4c-.9-2-3.2-2.9-5.2-1.9"}),React__default.createElement("path",{d:"M43.1 38.9l7.4-3.5l-14.4-30c-1-2-3.4-2.9-5.5-1.9c-2 1-2.9 3.4-1.9 5.5l14.4 29.9"})),React__default.createElement("path",{d:"M30.7 3.4c-.2.1-.4.2-.6.4c1.9-.5 3.9.4 4.8 2.2l14.4 30l1.3-.6l-14.4-30c-1-2.1-3.4-3-5.5-2",fill:"#eba352"}),React__default.createElement("path",{d:"M27.8 46.2l7.7-3.7l-14.7-30.6c-1-2.1-3.6-3.1-5.7-2.1s-3 3.6-2 5.7l14.7 30.7",fill:"#ffdd67"}),React__default.createElement("path",{d:"M15.1 9.9c-.2.1-.4.2-.6.4c1.9-.5 4.1.4 5 2.3l9.1 19.1l2.2 1.3l-10-21c-1-2.2-3.5-3.1-5.7-2.1",fill:"#eba352"}),React__default.createElement("path",{d:"M34.3 40.1l7.7-3.7L27.3 5.8c-1-2.1-3.6-3.1-5.7-2c-2.1 1-3 3.6-2 5.7l14.7 30.6",fill:"#ffdd67"}),React__default.createElement("g",{fill:"#eba352"},React__default.createElement("path",{d:"M21.6 3.7c-.2.1-.4.3-.6.4c1.9-.5 4.1.4 5 2.3L36.3 28l2.2 1.3L27.3 5.8c-1-2.2-3.6-3.1-5.7-2.1"}),React__default.createElement("path",{d:"M10 18c-.2.1-.4.2-.6.4c1.8-.5 3.7.4 4.5 2.2l7.5 15.7l2.2 1.3L15.2 20c-.9-2.1-3.2-3-5.2-2"})),React__default.createElement("path",{d:"M60.8 15c-2.7-2.1-7.1.2-9.3 7.4c-1.5 5-1.7 6.5-4.9 8l-1.8-3.7S16.4 40.4 17.5 42.6c0 0 3.4 10.6 9.2 15.5c8.6 7.4 28.7-.5 29.6-19.6c.5-11.1 7.4-21.2 4.5-23.5",fill:"#ffdd67"}),React__default.createElement("g",{fill:"#eba352"},React__default.createElement("path",{d:"M60.8 15c-.5-.4-1.1-.6-1.7-.7c.1.1.3.1.4.2c3 2.3-.1 7.6-1.8 12.4c-1.4 3.8-2.6 7.7-2.4 11.5c.8 16.6-15.9 24.5-25.9 21.5c9.8 4.1 28-3.7 27.2-21c-.2-3.8.9-7.5 2.4-11.5c1.6-4.8 4.7-10.1 1.8-12.4"}),React__default.createElement("path",{d:"M47.5 30c-6.2.7-15.3 9.6-8.9 19.3c-4.7-9.8 3-16.4 7.9-18.7c.5-.4 1-.6 1-.6"})))},E$2=function(){return React__default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36"},React__default.createElement("circle",{fill:"#FFCC4D",cx:"18",cy:"18",r:"18"}),React__default.createElement("path",{fill:"#664500",d:"M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379a.499.499 0 0 0-.237-.554a.505.505 0 0 0-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855a.502.502 0 0 0-.598-.081a.5.5 0 0 0-.239.557z"}),React__default.createElement("ellipse",{fill:"#664500",cx:"12",cy:"13.5",rx:"2.5",ry:"3.5"}),React__default.createElement("ellipse",{fill:"#664500",cx:"24",cy:"13.5",rx:"2.5",ry:"3.5"}))},h$1=function(t){var n=t.fill,r=c$6(t,t$k);return React__default.createElement("svg",l$8({width:"24",height:"24"},r),React__default.createElement("path",{fill:n,d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}))};h$1.propTypes={fill:PropTypes.string},h$1.defaultProps={fill:"var(--form_inputs_border_color)"};var s$6=function(t){var n=t.fill,r=c$6(t,r$j);return React__default.createElement("svg",l$8({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",x:"3650",y:"3688"},r),React__default.createElement("path",{fill:n,d:"M1.1 21.757l22.7-9.73L1.1 2.3l.012 7.912 13.623 1.816-13.623 1.817-.01 7.912z"}))};s$6.propTypes={fill:PropTypes.string},s$6.defaultProps={fill:"var(--form_inputs_border_color)"};let C$1,I,D$1;D$1=dt.svg(A$1||(C$1=[`
  transform: rotate(`,`deg);
`],I||(I=C$1.slice(0)),A$1=Object.freeze(Object.defineProperties(C$1,{raw:{value:Object.freeze(I)}}))),function(t){return t.isRightArrow?"180":t.isUpArrow?"-90":t.isDownArrow?"90":"0"}),m$a=function(t){var n=t.fill,r=c$6(t,n$g);return React__default.createElement(D$1,l$8({height:"20",viewBox:"0 0 24 24"},r),React__default.createElement("path",{fill:n,d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}))},m$a.propTypes={fill:PropTypes.string},m$a.defaultProps={fill:"var(--form_buttons_color)"};var v=function(t){var n=t.fill,r=t.rotate45,s=c$6(t,g),i=r?"M14.68 2.31A4.54 4.54 0 0011.46.99c-1.15 0-2.31.44-3.19 1.32L.95 9.63c-.63.63-.95 1.46-.95 2.28a3.21 3.21 0 003.23 3.22c.83 0 1.66-.31 2.3-.95l7.31-7.32c.76-.77.76-1.98.01-2.73s-1.99-.76-2.75 0l-6.07 6.08c-.24.25-.24.65.01.9s.65.25.91.01l6.07-6.08c.25-.25.67-.25.91-.01.25.25.25.67 0 .92l-7.31 7.32c-.75.75-2.04.74-2.76.01-.75-.75-.73-2.02.01-2.76L9.2 3.21c1.24-1.24 3.35-1.26 4.58-.03 1.24 1.24 1.24 3.36 0 4.6l-7.12 7.13c-.24.25-.24.64.01.88.24.24.63.24.88.01v.01l7.13-7.13A4.41 4.41 0 0016 5.51c0-1.16-.44-2.32-1.32-3.2z":"M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z";return React__default.createElement("svg",l$8({"data-icon":"paperclip",width:"16",height:"16",viewBox:"0 0 16 16"},s),React__default.createElement("desc",null,"paperclip"),React__default.createElement("path",{d:i,fillRule:"evenodd",fill:n}))};v.propTypes={fill:PropTypes.string,rotate45:PropTypes.bool},v.defaultProps={fill:null,rotate45:!0};var Q=function(){return React__default.createElement("svg",{className:"MessageBubble__Decorator",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"28",viewBox:"0 0 16 28"},React__default.createElement("title",null," Path"),React__default.createElement("desc",null," Created with Sketch."),React__default.createElement("g",{fill:"none"},React__default.createElement("path",{d:"M5 0.2C5 10 5 16.6 5 20 5 23.4 3.3 25.8 0 27.2 10.5 27.8 15.8 24.8 15.8 18.4 15.8 16.3 15.8 10.3 15.8 0.2L5 0.2Z",fill:"#FFF"})))},P=function(t){return React__default.createElement("svg",l$8({height:"2em",viewBox:"0 0 31 27",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t),React__default.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},React__default.createElement("path",{fill:"currentColor",d:"M30.0011525,5.51999975 C30.4811549,6.6800055 30.7211525,7.89999325 30.7211525,9.17999959 C30.7211525,10.5800065 30.4311554,11.8999933 29.8511525,13.1399994 C29.2711497,14.3800056 28.4611578,15.429995 27.4211526,16.2899993 C26.6611489,16.9900027 24.7011686,18.7799848 21.5411529,21.659999 C18.5811382,24.3600124 16.7711564,26.0099958 16.1111531,26.6099988 C15.8911521,26.7899997 15.6411546,26.8799988 15.3611532,26.8799988 C15.0811518,26.8799988 14.8311543,26.7899997 14.6111532,26.6099988 C13.6311484,25.7299944 11.0611742,23.3800181 6.90115356,19.5599991 C4.92114375,17.7599902 3.7911551,16.7400005 3.51115371,16.4999993 C3.43115331,16.4199989 3.34115422,16.3399997 3.24115372,16.2599993 C2.22114867,15.399995 1.4311566,14.3550055 0.871153829,13.1249994 C0.311151054,11.8949933 0.0211539665,10.5900064 0.00115386744,9.20999959 C-0.0188462317,7.94999334 0.221151358,6.7300056 0.721153835,5.54999975 C1.18115611,4.4299942 1.84114949,3.44000415 2.70115375,2.57999988 C4.38116207,0.859991362 6.39114188,0 8.73115348,0 C10.0111598,0 11.2261476,0.279997187 12.3761533,0.839999962 C13.526159,1.40000274 14.521149,2.1899948 15.3611532,3.20999986 C16.2011573,2.1899948 17.1961473,1.40000274 18.346153,0.839999962 C19.4961587,0.279997187 20.7111465,0 21.9911529,0 C24.3311645,0 26.3411443,0.849991462 28.0211526,2.54999989 C28.8811569,3.41000415 29.5411502,4.3999942 30.0011525,5.51999975 Z M17.0411531,4.79999979 C16.621151,5.36000256 16.0611566,5.63999975 15.3611532,5.63999975 C14.6611497,5.63999975 14.1011553,5.36000256 13.6811533,4.79999979 C13.0811503,4.01999592 12.3461577,3.41000205 11.4761534,2.96999987 C10.606149,2.52999769 9.69115823,2.3099999 8.73115348,2.3099999 C7.03114505,2.3099999 5.56115982,2.93999357 4.32115367,4.19999981 C3.6811505,4.84000298 3.19115542,5.57999555 2.85115374,6.41999971 C2.47115186,7.30000407 2.29115367,8.22999473 2.31115376,9.20999959 C2.31115376,10.2300046 2.52115165,11.2049948 2.94115374,12.1349995 C3.36115582,13.0650041 3.96114979,13.8499962 4.74115366,14.4899994 C4.78115385,14.5499996 4.86115305,14.6199989 4.98115364,14.6999993 C5.00115374,14.7199994 5.02115354,14.7499991 5.04115364,14.7899993 C5.40115543,15.1100009 6.34114598,15.9599924 7.86115352,17.3399992 L9.30115345,18.6599992 C12.1811677,21.2800121 14.2011474,23.1199937 15.3611532,24.1799989 C16.2811577,23.3399948 17.8211423,21.9400088 19.981153,19.9799991 C22.6811664,17.4799867 24.6511466,15.6800048 25.8911527,14.5799993 L25.9511527,14.5199994 C26.7111565,13.8999963 27.3111504,13.130004 27.7511526,12.2099995 C28.1911548,11.2499947 28.4111526,10.2400048 28.4111526,9.17999959 C28.4111526,8.19999473 28.2311544,7.27000408 27.8711526,6.38999971 C27.5311509,5.54999555 27.0411559,4.81000298 26.4011527,4.16999981 C25.1611465,2.92999367 23.6911613,2.3099999 21.9911529,2.3099999 C21.0311481,2.3099999 20.1161573,2.52499774 19.246153,2.95499987 C18.3761487,3.385002 17.6411561,3.99999582 17.0411531,4.79999979 Z"})))},M=function(){return React__default.createElement("svg",{fill:"none",height:"33",viewBox:"0 0 32 33",width:"32",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},React__default.createElement("path",{d:"M0 32.24H32V0.24H0V32.24Z",fill:"url(#pattern0StartIcon)"}),React__default.createElement("defs",null,React__default.createElement("pattern",{height:"1",id:"pattern0StartIcon",patternContentUnits:"objectBoundingBox",width:"1"},React__default.createElement("use",{transform:"scale(0.015625)",xlinkHref:"#image0_1122_16887"})),React__default.createElement("image",{height:"64",id:"image0_1122_16887",width:"64",xlinkHref:"data:image/png;base64,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"})))},x$4=function(){return React__default.createElement("svg",{width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},React__default.createElement("path",{d:"M0 32.24H32V0.24H0V32.24Z",fill:"url(#pattern0SmileIcon)"}),React__default.createElement("defs",null,React__default.createElement("pattern",{id:"pattern0SmileIcon",patternContentUnits:"objectBoundingBox",width:"1",height:"1"},React__default.createElement("use",{xlinkHref:"#image0_1122_16896",transform:"scale(0.015625)"})),React__default.createElement("image",{id:"image0_1122_16896",width:"64",height:"64",xlinkHref:"data:image/png;base64,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"})))},b$2=function(){return React__default.createElement("svg",{width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},React__default.createElement("path",{d:"M0 32.24H32V0.24H0V32.24Z",fill:"url(#pattern0AngryIcon)"}),React__default.createElement("defs",null,React__default.createElement("pattern",{id:"pattern0AngryIcon",patternContentUnits:"objectBoundingBox",width:"1",height:"1"},React__default.createElement("use",{xlinkHref:"#image0_1122_16893",transform:"scale(0.015625)"})),React__default.createElement("image",{id:"image0_1122_16893",width:"64",height:"64",xlinkHref:"data:image/png;base64,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"})))},u$2=function(){return React__default.createElement("svg",{width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},React__default.createElement("path",{d:"M0 32.24H32V0.24H0V32.24Z",fill:"url(#pattern0HeartEyes)"}),React__default.createElement("defs",null,React__default.createElement("pattern",{id:"pattern0HeartEyes",patternContentUnits:"objectBoundingBox",width:"1",height:"1"},React__default.createElement("use",{xlinkHref:"#image0_1122_16897",transform:"scale(0.015625)"})),React__default.createElement("image",{id:"image0_1122_16897",width:"64",height:"64",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAZ1UlEQVR4AeW6BZAcR/bt/buZWVXNg2KWrTXt2su8+2dmZmZmZmZmZmZmWGYmeS2WbEsjDTYVZOb92tMVoY6JCcPie+/7RZzIrhqKc+6thJ7m/88oOFH+/43jvcRLfv7Ts47zrcQE0/dZZfADIPIeRl75i5/MuxOJIU0pb2nY/GBqq9szO7695fITUcKiM6Engg3RFKpmPcRkpfDZfXnITuc+PatqLwNXeDfiWrHPu5pRSJKmjO7pJMP3n2uuf0S7ObjLtfyiaUYh9eACJAEMU1QhCFR2qsIRRqYox+nVfj7/8pVh728KOq8GzvIuRl79Ux/Ku4pMqiUn+QctZ9e/cK6z/syk59t0SmgHaDCRhbQD6RzYLpgMENAAMQe/BeUm5KOJIoyBYQL9hNFW44H10fLfbVXzfwC8jHcR8tafeh7vLANtt3uy8QkHGle+vju3eY/Me+h5aCt0lqF9HBqHILsd0onsITALQB0AEXQM8QaEy1C8FfIzML4CgwsTbU5kYDOh3GiMV/t7/nat2vdzwCt4J5E3/8Q7F4BX876H0gvfvbRw4/1kwUOvhLnGRLdC78nQ+SBIHl8b7gIJUyKg3ERqARSgW6CrULwatv4LNt8A6+dhK0yUUq62+mfWj/76hhz4GeB+3kHkJT/2Ie+Y8SjtZbn2DbfOnf2WdDlvMV9BL4GlO2H5I6DzIWAPAg1QX1dZmWJmDOvMGGsBIoAFscAQqvOw+Q9w/d9h9RxsKaw5tlYX33zf+HHfAPz7OzYH/Mhj74BKsluO2zM/t3/x/o9gOcJ8gMUjsP/jYOFjwR4AjRBLQGeMCGB2BMCOjog3pWE6ioBkIArVWbj+F/DgP8PaGqwb8uvt8YXBrd93SY/+OKA8BuTffuRjeCy4OHrqk7LX/+7CnrW7WIowb+HA8+Dg50HjDogetAIEsDOG69diZoJgpvq1NAIBmB3r1wAmAwH6L4fLvw1X3wgbAtcd963f+muXOfn1wIhHifzXj3wEj5pQPOfJjdf8yfzezSPb5hfacPSTYN9EtgVhDDBrHMTOBgA8XACxHmcC0DgbwlRiwbSguApXfn+if4N1D9cNl9eO/9lpvfMLgQGPDPLvP/yRPBp8mT/l2a3X/M3cvvWJeWBpEY5/Liy9P4gHLUHMjopLPe7WAbVq6gBmDe/SBbW0Dkoy8AGu/i1c/HNYzWEFzq2d+uM3yz2fC1Q8AvJ3P/yJPBKrN9aOfdz+N/3L/PL1O1gClpfgxOfDwtNBRmDijOEdIYgBdpMA7Azg4eaCGenN7ggJaALX/g3O/0kdgnB6886fBb6OR0De9kN38XC8tH+i8ZzsDX9z24HLH8oeYKkHJz4LFp4KMgarYM0uz/dusiDyCB1Qjw8nnekWHyA6iClc+3e48NewWhGuOV7Zf8oXA7/BwyAv/f5n8HC0TPnd9/Re/33sVVhM4djHwfJzweTgmJq3tWlmx9mWN7utALtPgjs7YOfEOPt9MUJQCAGCg2DggX+Ai/8Na7B1tb32v6NnfiDwOnYHd9132B1oWn3OPe4N384c0Daw5+kwdzfEdZAIsTYoUo+z5sxUaoBdAhLDLKCz1d89jNkANE4VFWKcShNYejYMHoTybfTmhotPrE7/7Kv16R8IVOyC867HbgTVxhMmu4RWL89oCswdm7a9DiFWIPamcWS2C2rZHYHM3AfQ3eYAdhqdeTR2hBLqwHTmkYgjkBSWHwphBcarHB4++Pz7+5e+FPgFdsEdCJfYjY2cTzi6/MDzaAu02rDwxKmhsDUdVeoOkJsVNTK9NhYSN7MCRCh0RxDMjDoz1jJAYpgSpio8qNYVnx0VQv3ajyDrweI90H8hpuM5OT7zDS8Lz/0zYIUduGuyn51cvj6c+/CFN32bbUfIDHSPQrZUm1cIBqjNx5mWjwLtBGLJ8N5NypUxYgztUwske3vgI3hAdj7/NVqbb1iInsFbVylXhtimo3WyR7KnCbmHEEBr4zuD0AChhNYh6B6A4RX2NDaPHR5e+grge9iBO8wldrK4p/PBh7L1u8gEml3oHAMtIAYIUle7NiwCasADbcf4wgYXfvlt5C9YoykZIUY4nLDns06w96OOg7NQRRDZEYCCAk1DfnGTB3/7Pgb/dZ2ksvhQUS7B/s87ycGPOQYohJkJUme7oB6Ng94J2FjBtAr2Dy9/9guKZ/wMsMEM7t7iILP0Wll2e3jtl2VZhMRCcwlsA/wQRCCz0woBGIHUgo/gDMXFTd721a/Gvqri5NNup310L6rK5oUVrnzzmxidWeX4198FBojcRIAYoeUY37fJvV/1atqXm5y8+w4a8238MOf6G89xefK7/bUtjn7+rVOjKaA6VRbBAaNQrwoFJF1oLkB2jcV06/hBv/rJwK8zgztoV5ml8t07F8z150gGpE1oLEMs6z+SkF8esPXmPuXFEpM6Wre36D6lh11OeODn3kLyspxb3+8emif3Q+pAhOX5FkaFc792mrkntln4oAMwDiAC1CYMxEHk4k+9kfRtwokPvhO3pwsotpdxuHMb9qVw9WfOsHhnm84zlxi9YZPhG4bkV3JsD5q3tVi4qwcJUHhAoLkH0nWyrOBo8eCn35s+5Tdn43fj5kFmWSwvf0AzKdOYWEzaAkkhjsFY7v/XSSV/8wF6/Ta9xWUkS1j/l3WGj1+ld08D/Z8+h249TKPbhHEB3oMR8JG5Ax26pxuTrfs55p/ZRRIBZgJILf2XX6f/bze45eitOKswHFP/PPjA0sm9+Fdv0f+Dy4R7h9z4my2yqoezTYp+n6ubZ7n4zIzbvvgIzUUHeQTXhKQBaUFbNu5KYn4MOE+Nm9yghrE0svm48jHWKVg7/WH14ODK/27x+u86z21unmNPP0p6ZC9kCdXagP6bLjF68Q0WbYd2N0GGIyBCMu0AKo8MRrSc0L93i+r+TdKjzalxAYKCsYzPbpIMIxkBtobQSOu5JkJe4sqCpX09Rq/YonjtOvuOHKR9537EWXRjyPzbDG/6szO84uqQ537PSVwqAJA0iW5Aw46X237tw4BfpsZNblAD0j3ejuuPjw6iSzAmAwmML+e87lcvsrAlHHryAmlqoCxBI0kizO/t4vMCEyrMxDypBeoQVacBbA2Q0YhQesKggMqAal1hhWgIg5JYVMhWHzYyaDbA1t9XVkh/ROZLkiSFuQ5usYl4DxNJ9MwtNDh5ZIFX/NeDnL7nAR7/SXsgRtQ2JnIktqAxXPlgZgNoFCvUUKXJYWerObWCGosCQsnKW/r0Tw+5ZW4eAXScI9ZAkkAIGB9IE6AMMM7B1lUzBjRC6Ynrmww2BuSHLVYrKCxYgcg0gApIIoNQUt7YoNVKpiFbCwgU1XYX2aLAWgsWGBcgAqowzomVp9l0tFU485+r3Pa+HZKmQUVQayeChg6OvT7c3QaGAO60P0kNx9P+KSNBohiUiYJH8op8tcBWiglhu9J+lONCRJwFZWq6rKCqoJxWnNFoGgRAUZKvb7FSjrEH50kaEYoCMgNGpmFVStaDrUxZXduk2zDYThuchVj/zrKCoJDUPz8cT+/FSPAVflwQ84IUZXOzolgrSPY7VCMqQjTQcH75QFsWoA7gQE+oISkGd+IiahJUIAaPySskRgpRxuOCYnOAsZbYqHCAqQIyzmEwgrys12DAGLCGGJWqqri6NWbVKnc/rY24gAZFogGVqakiMHfQkt2WcfFlfRZWDb1RjrUWYWaNB3AOYoCqImYJwRhCjFT9EflgxIiA2gTxAYqIRj8NYCJLtS+RcAy4AuAmF9SQhuFxdaAIqorGCs0N3TlD1TVc2yyZ2+wTQyBppCQiuLLC5iUmL5DKgypqzLaiQBmVLR84UxTY25ocvCuF0kPD1pMfaFTUR5IunJi07atevsXlfs4R72k5iwMk6kQRVQVr0aIgjHNCluKtxftAPhqx1h9xg8CBoy0aiRLKgKpHARWDxDLxvjpMjZtcANB3y2krhkWFOoAI0eMry9Jex7GntDjz31t0B2P2ek/DOVIjJFGxPiDeY0PEqIIIOlEFjFS5XAWuCTz1Q3o0lyxBIwaBCCjIdmhxO9jDT2zxtntanH39kFahRB9oAFZ1Gi4QQyTGibzffhwrgcJHBlXFuVFJ2bHc8dQ2ghKCR5lIlYgQNZCG8X5q3OQCgIbzTdHQjUBUUI3bQhSx8KTndrl2vuQt53OqqCwnnoYIKUxDiBEz/UEAVKAEVlU5M9HiU9qcfEabYAScAQRUQOsQjCFYQ7Zgufuj5vjv02PO5x4TDUHA6uzxQQkT+RCoRCgUBjFyuQxcQnna+3fZdySlChEjEWJEoxIVIkIjDjvUuMkFALkGg6qdetCJAFFwSrDQWU54/scs8N9/s86bLuYcC8JeZ2gCDYVEFTNbJWAI3AdUi44nf+wCyZwlOrBOEK2TRqldIalQGeHg41uc+uA53vL36zRiZB+QAFILI3hVyijkQD/CxRhYs8Ld7zvH3c/qEhLBpIDR2nwdgILEINQ4iQGA0qZlwBQaIW5LUVWsA5pCVRqWDmd88Cct8coXbHLxDSNWysB+YL7uhFQVU5svgavAisAzPmqBvY9r4ROLazrE1laU6QiICJIYpGnRlvKED57n6ttz7js9RoEO4Jjio1LJ9PG6jnIDSPamPOd5XW5/chtaFpoGk3qQiMZInHn7wLvMU+O8ZAAMizCej3YzRqiFxgAmIpnguo6SSGe/8L4fucj5U03e+Io+5y8UNIKyCMwBCaDAFnAZuPV5PW5/7hw+s5i2nZqcbX8UkG2JUUwTqkakuS/l6Z+4xL//0lUurHsOAikQgTGwpsomIHOW43e1uPvpXRb2p8SGQXoW2wZJFA2BGCMaIQaICgPTWaPGTS4AWAw3YjTpig8Qw2wXeIyNSBtS5yitoBOdvLvNweMNLp8dc+/rhqxcLrg+jrQBB6wCe25v8tSPXsTMOeg4bNPW1TcQAVGow5giSAKunVDlsO+2Fk//+CVe8AcrhFJpAiOgAJLlhBO3NbntnjZLE+OmaQgTJT1H0jYYV6F4tDYfAhMpEUe06QPUuMkFNfik+/ZQQvBKCKB1F2ArjEvAJmTOUjUCfhBIU8upOceRUy1uPFBy9k1Drp3Puf9Gxfz+lGd/0h5a+zO0ZUjaFpPYm9VHQQGkliIAYjENwXYVX0RufWaP9euel/79Ku2GYfFAyuPuaHP0cU16SxbTsGhqkLYl6Vhc02JsBeohhO0AQmAqH6m0sWWsvUiNm1xQQ4jNt1TRbgcQ6xBcjKAeqDDOIS5FUottRvx4oqEnSS2H5hL2nWiytVbx4P3ldjsuHG8SW460azGZILVvIoAAO0dFBHCy3S2xmxAq4a7nz9PoOJpNw559Kc2uhVSmxluWZCLbNNjUYCSCbrtFoydOqz/1Uyk+umuYmQ7ApNRQiV7wwVa+qpIQkmkneLAuIOqnchbjUkxqsY2Iazv8OBAmMnlkoedYPtVCMgMdS9JLME2LmLrSqlPNwuy1IAgmEVxH0ErI9gl3vZ8j5tPlj2QakG1NlNXGnSBECNW2cWJFDLH2oHgPoYJxzG6sFW6LGje5oIZm4i6XNK/5ojzsq6n5aXoRsRViHEQL1mCSFHEGkym25YhVJBRhewQwmcV1LLZlMLae+CIg5qbh2TdE4GZA9ddMCknXISKEkcF4xRrBpLXpZCIDYgyiAQ0e8KAVGgMxaN36EKqIr6B0C69fHJ+vqHGTC2pgzANltudFvtz8tKqMJJViH5KbHoQwJYgFMchDsgm6HQZoZreD0BgBECdIKhhnkFljCmB2Vn12BNV6fjSYzJCIYKdb56lZK4g8JBCFaZ9Pq06YKvjps+8rxZdKVQTKmITQ3fsPzOBCey+zbI3yv+5482lJEanKiMvMNEGrGPGIlCAGlToE48AIYqamwYDI7H/C6soCKjM+ZWcIs5PiNAQAA5I4jKV+fABq47V5oke1qgMo0RAIgbrtle1uzgO5di5uafNlzOAmN5glaTVeURWt63482OObbjs9myjbPk3ESomIzL6rCzYDYxAiAIjMmAbCbJFll0eA2YlwJiypO6F2PBugCPgKYgnB12NJDB7vFR+mxqtSKYuIL6BM9rx4eXRugxnc5AY7uDxqHP7zrDj9FWUesdlEicFaxRtBJGJNCTCznAVwGWQpiNysVKzHOhBkt+rPsiM46hEFMWChfosNihxiAA1ozCEU6Hbra936bHdwWSh+XFGErBz2jvw6O3DD1hF2Yoz8djU6/yV2XLoqs3UHTGTACIhEDBU4w7hf8d//u0kIyq239jhwsMPCYgbNBBID1sDsY1AHtNM3ysz3KYgCQFDwEYrAeKvk2tURZ85s8sC1nOc+Y46TtzWQqkC9r81DVU33EFWhVHkkjCK5W35Zkc69jB24yU12UgTz+iQ5/JfJ+Oynlo2ASQRrBWMEMRYAR8QmBcFb/vM1A+5/sOTA8iaLvYQj+zMOTbS42KA7l9LtJnQ6jkbD4hKDdXWSsyjE7bYNVGVgOAz0+xVbWyWbawVXVwouXc25tlqythUovHDH45ucNIL6ihCYnfQoy0iZB6pxReETHSyc/JlmsRrZgZvcZCdNiJudUz/WWrv2se3RsFElBuMiYg1iIooBBBlHOguO5z2zwwtessF8zzDIPa99e8lrTg8Q2A4uSwydpqXdNDQzQ5oKzhmMQKwnuxCh8so4j4wmGowCoyISQiQqgJKkQrdjtkNcXMy47VQGhZ9OdmH681WltfmJtjdqgUFy+L9Gjb1/zy64yRfYHV7fWWj/Yr42+kZJw7Z5YwJST2KCggqZjzz3aW3OXRiRiJ9U31F6JS+gKJWimqiIbI4jqwO9ecYAZMciIALGCNZCmgjdrpCldiJopLI9onBjXXnW07r0uhA2A8FTm4/b5os8bJsvh54qNvITR4rvOsFLlF1wT0lfwu7AnsXNn3jroPXhRX90p3EGYwUxYXZpQ/oVexcTnv2MeV704hvM95RWS+qTlxAjhKnpqXkFjaA79j8CdQBgBKyZhmG2x+k1wMoNz9FjHZ755A46HFFWWrf+9Jmftn3Ejz3FyLCwp/HzxSB/ObuDm3yR3Ti1d0OIrBw70v7qc2fTf6oGVWbM7CwOqEVVsIOCpz+hyYMrc1w4s8G+PY7EzUzkCiDTsUaZBWTna5lZKWvW1j1pM+MDnr9IGkvGo4CP4Ku68kWgGAeq3DPuR7JW60XHDuXfD5CW+a5Lj+gvsDuCkAKgF67NfePVK+OfaPcCaSchaVrSh5RZktTiDHS6KUNp8Pf/scbV+/vsWbIkiey21X9kdOfGEDY2PCUJH/pBe7ntMIxXx1QBvI9UtfnyIfMjz3jDE7R5/6lTfBjwpvl0YIDILtjv/RjA7iIDKAZFu3PxZcOytb+/7p/qbAQjN40oIIKvAt1MOXZyjpVNePDBMc6Ac4IIKI8dEfBeWV0P2EaDD/6AfRPzwvjGkNJTb3QCZbE940/bvl9Rlo3h0RP2c32QFy+3+oKyO4BDH7YSisXYUMVbjhdf93bfnBtsjD61i0dmPqekCtEJG+sF3R589Acs8OLXpbztreuMxxXdjiVNBXjkIARAIAQYjQLDMew7OMf7PGeRg72K4cqAoj6lVtvPfcDngTAZi62KIk+Ko8fNV2qI/3hgYSAoQkABdu+ADwP0YeQAsFZ9Ob/Iv/fz1tHBhr/bEDAGlJndK0JZeFKtOHWyw9K+LltjYW2jYjz2oFpPbLLrZ8RVoSwjg0FgMFbSVpO771nm/Z/VY96M2boxpKi03uXV5icK48BoI5CXWf/YcfuVwO8eWBgKikFQ7LbYTaK/ziMTMYAAwbs0u3Ap/ZGVa9XXtZoVzZ7DZRabGlxisYlgLdO1f65FlbU4fzVw+u1bbGwUjAclwXucZTsIAaLWb1dhaDRTOr2Uo0fa3HFLi/mkJN8aMB55fIRQv7ERyoCfqBoHBpuRKI1LR4/Zrwb+7sDc1tR8JD5S04n+Co9MRHBM2wkCwOX1zpfcfzl8n5FyX6crJE2LS6dBWDc9BluBrGFpdRvEJKPvE66tVpP5Id/e4XmvKGAMtJqOPcsNDh7IWGwrWSwphjnjYYkPWp94I6GqVUTyoWc4ELJW4wUnjuvXAa+bbwwNigBKhT5yAL/IoyOtA1AM4AHWi/YzLlySH5pU9QMajUC7Y7ANOz08uWkQst3ySpIYskZC2kgR5/BqCBMpYIg4oxgN+KKkHFcUZSAEUFVimJqPlRKq6Ww/7IOPyebyXvtrxw6VPwaspVpaFBAUeWTzUD8CjxpFqH89AkDwJu1cuZZ93so1/+Wh9LdnjUizLSTZNAhjZVvykIRtWTM9W4i5efgJYaKo6OzH/8L0fvS18TwwGkJVudjqJv92+BA/BrwAYLk1SHb5gOEjIvprvCMIYOrRA4xjdvjKtfTz11f9p1RluDNxgUYT0szgEnMzBCPsfDsBAWaNRyWGhxSnR9pcGecGxY4aTfuS/fvNr+9byP8RyK1WBsXsMF/z7gsAQGYEEADymB24tp5+xI0b8ROrIjzBBz1oJZAmiksE55h2RR1f7R2NECPTTvDUhxoDxgbnuLfVSV+2f0/8w8Vu8XIgB7CxcjOmIzXv/gB2D8IACgSAaFxjVNjjNzaz561v8AG+KG6JkWUf7bKqdjRGAARFmbaEmUgMq07iDbFmZWL6tUsL/j/m29VrgQepaZjSAbpDvDcCeISOqLFOSs9i5c1c7pMDRWkOjQu7hxjmAKdI7pzcaGV+JU3ilYbzN5xjE+hT46QSFLuj2krNez2AXYJgZxjvAKbWzkor7yJEwQGedwe/hux+2INdjMju5mZNv+v5/wCuIDun9G9QJAAAAABJRU5ErkJggg=="})))},Y=function(){return React__default.createElement("svg",{width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},React__default.createElement("path",{d:"M0 32.24H32V0.24H0V32.24Z",fill:"url(#pattern0NeutralIcon)"}),React__default.createElement("defs",null,React__default.createElement("pattern",{id:"pattern0NeutralIcon",patternContentUnits:"objectBoundingBox",width:"1",height:"1"},React__default.createElement("use",{xlinkHref:"#image0_1122_16895",transform:"scale(0.015625)"})),React__default.createElement("image",{id:"image0_1122_16895",width:"64",height:"64",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAU2ElEQVR4AeWaBZAkN7a1vytlZkHzUPeMB0wDxmXm3cfMzMzM/N4+ZmZmZua3zLxmtodnehqKU9L9KzqV0Ypyl9n+6USckFIFkefoXEmd1fz/DIVMlP+/kfEU4w0/9RGNTMLiiKLdYJCLKENtetHQs/h1oMdTCHnTT30YTyaC6lUzpnukmQ2vm8n7z2wVw2NFVu7LsjBrTLCAhCDeO9svnT0/KIs7OqP2eweu8S7nzX2X3MxtQMmTBPnPH/lQnmg0ZXj1bNZ/3p7m6icszm4+vzHj9pl2MDQdNBxkVBQqKOC1kjkyMMjRvqXs2EtrnZl3neku/VU3zP0P8B6eYMgbfvQVPFHIw/C5uxprn7Eyd/ET2ovD/cw5mCmhDbRyaCyOuReyBbBNkOiCeghDcB0YXYTBBej3x1ToWdjMGawVa6vr8/9ycrD86xfD0v88UamQf/rBx18Cc3RuvKxx5isOLJz7lGLXaI4FB7N+zIUxr4D25dC6AYobwR4BMwfkgKVCqPToAPxZKG+GwTuhdwd074HNU2MG2Chwlwp/fm3XP93d3f9jwGt4nJDX/8ALeKxYC3NzV+SnvvTIwslvbO/p72GxhDmFxYOw8HSY/yBoPhfMXmC+EqwBREGVFAiggNjY6YFegvJ22PxXWHsDXLoNNgZbRozON/p3rV72myfL/T8K3MdjhPz7qx9bCaj6Z5xo3vVjB5fPv4rdAeZLWFqBPa+ApY+HxjXAHKgD9bW6SJP0ATQyREZzxIDkgAN/Ejb+Fc7/LVy4GTYcrOZcOjd/803d418H/DOPAfK6738hjxa5jj7x2rnbf3Z2ubvCLg8LBSy/aMzPhNbTgQLCADREsTbOrImUaQbE1oPWZngAMAWIBXcSVv8aTv4VXDwDa4bhudbglrUrvxv4UR4l5F0/cAOPBkPNv+IZCzf9ZL5S5ix62L0MBz8Ndn8kyEwtPBE82RoQif0UIZZFKjxp6xSZBpgMuu+E+34dzrwN1kDPZdxy8cpfuNNf/vXAkEcI+bvv+yAeKfabs9/49MWbftQue1gMsHwtHP5CmH866BBCmYqtmZoxUQLEthY+YYCGSUMiBWwLhqtw8g/ggX+A1RLOG+44d+h33s/1XwSMeASQv371h/NIsC+c/ornLr335+yygyWFA8+GQ18I7QNxwSKKTYSnZqSU1ACicFLBqej0eiIlDfAKZ/4W7vlTWO3DWeHmi1f/CvAlPALITa8+ysPh7t7Cx3/wvvf8sV0uM2rxhz8XGktg+mBkUuTE7EtiRBp/ISJNQSp8hxQkBoQAPoOQw7l/g7v/GFYH6Bnh3WvXfDfwfTwMsqHmwHTc41ZuePn8m3/R7hplzAF7r4X9nwi2AH8BxIAmi5ukYideI5ohUxbBdHbRWvCUBGhlTvAQLOx6IZSb4P4GKR3XjW7/rtdsPut9wF8+9Db43c9nGtayfa3nylv/6dC+0y9jD7DvMjjyGdDeD2YAmYA1YFORMhn3+rVHvgukrU4kAo304DUygLfgBE7+Ldz/GliFi6fm7vuf4fNfBtzDFMhffNcHMg0H7dlvfO78e36UFYHdbbj8Y2HhWpBUfGxFktqemHEmx6cZMM0In8y6xjZE4RrpIRQw7MK9fw6n74DzcOuFI38GfBJTkF1nb2MnDO5vHb3s2KlvZR5oGdj1dGgfBH8JMkAFQiLcyKTYiT7JFig7L4Ik4up+WgppKoJCCBCS0vE9MAXseQFsnof+Old0H/j4/9l89scAf72jAfe5FSaxcfP9cuOhS1+/q9VZoiUwuwxzx8F3AZ8KhxAFqoBNUzBl5jUVnyaAh0lBZC06RCOUqu/juO9Xi/PSddB5M8WsN8d6d37Hm3n+PwFDJpBdsnuZxObh4salpbd8tmkFaDZh/igYC75TCfdTIx1LIoPcVmLLOFvp7Ct1P9kCFYQkAfE6FzACzkHpwScJmEjCdt/C7KEx74TuWVaaq8/a1z39ScDvMYFsnz/NJI4tbH7+7vawSS7Q3gPNvRA6IIBPhMtEpDWuB75L/+wGJrM09iyC5OA1nf3YTxEFwbb4LBDWNhh0hrR3zUJWpLGvRSdrQdi+NhbmjsDaKo12yYHOvV/638Nn/SHgSZDdNthDipW2P3xCb/5UaQJFA9rL2/UlthJc009EPjfQH/D6v76Ff/uru2k0LR/+6ce58UNOgIkmIABTSiD2jYANPPC2e/jb33wfJ+/t8byXrfAhn349xe6FbcHqwQM+KYlA3BoFikVozkPjInsb6888aLovAF5Hguxgq0uKVui/eLbV37MlpjEL2VwUn8x4Sp/u//D2f72dP/yFm+h3A97DhbPv4st351z5oiviTQoPRm2MVk1hWL3jHL/1I2/jtvd0aDTgL377LrwLfMyXPQ0xeVL3JClg2xznQQRau6HYYLZRNg6MTn0OkwYc0FPUuD2/1h4a3vOJRa6ELMMUM3H2B3ENqPd1EtGxJArLxv0b/Ouf300zC5y4scB7uP2OEf/553dx5Ibd2FYDnAI6PQBiwCtv//f7OHVnhxuuzZiZMZw8XfLm/zrF8165woHr98VZriNPUg4xDXUK8hnIG5iiZIHVF74ne94s0CEiuzc7So126B5akNUXaUZVb1kbQgleKgPExB2Aiunsi+X03Wusn+9z8EDGrgUhKPRWDGfv3WTj1DpLVy6AC1G47rAJVGVUXhhw2zsusGcJlvda8gysybnr3nKciIscuHYBQhr/SF+3yRlBBM0ahKxLO+tfkZebNwBvJCIbD1Ajw13RsKPdITOozaPgUeWkt8miF01Atuktvc0BzRzmZoTMggJzc4bNMoxf67OkTfAaxafKZbubGzYvdthYHbAwH8VbaDeFZg5nT3ZgNEgEA4GkBKIBdQoIqG0QbEbTDJt2sPoqUgPGA9RoFPn1NvdGjUWNAfVVAoKNLtc1TxL/WoDFiCfbumGh1pNZyD0IIX6Xp673HaGWEDyCbomX+FZjIMvAoBBcFKqgSd2n60GI7wsBNZYwppiS3bL+XBJk4wFqaGg8Q0QJYlARNDjEGzAKYqbsAFGIh5n5nCwTQlCEygTvlUbbjl+z4Erw6SMvAVVIMQrMLVoWdhf0Tg+ooVWa2bPSgCxAz4EShSf0aeshOJSAGkMwMGOH++9sPbMF9AGyM7PXARC8L44M3ncUQ1U3SmVAsBBIEiBATQ827v8jx67lgsZsTr83ZHbWgEKv41k+3GR2l4XhKNYlwE7nAGDgaCwVHH3GIm++Zx3vweYw6Hsa7ZyrbpgH78G7RCjgAZcYEXcJ9SWqHgVUwFAuGF/OUhswvgAAP34hDFfqklJCEn+pDYjaTWzr+BvoeXbtb/C0V6zwhj+7m0xKylFAi4Lnf9gBbKGwWdaf2UF/YsJIePrL9nLTGy5w7mSHuXnD+QuBYy/Zz8GrW9AbTZz+qKh1f3sn0OC2SDQADfNezDxwHiDzYgDwtjUj6tuVeEG1/nBAxiQYCDGHEiYOMgFKhcGQF3/oPoZ95e53r5Lnhld88ArHnzUDm/3awIltMMl4PbAxYs/YzA/94qt5zZ/eT3+t5PgrFvjAT97P1oQNKkH4dAsk3RIjQyU+eAKKRwA/W4w2F4nIxhcAlFLkqM+rU6ZuCVcNsEUiJTL2AyA1DXQ9RXvAh37KAdY+6hBZBrPtEtZ64HW7XGTyOBzFqwLx5tf6HD3R5OA3X0uvB0tzAVP2qxRhapHJfSmE2MbreP9brQYlVONFXnZayTbYAcAVS9Vnid9bGzGmKIBJxKdmRPcRMBn0A7gOi80MULjkQQFjIFBBomA0MkKTLTEIXBrSajhabYGOg1EASdYkNfErNDVz+zrRUGmS2Co1svrCZ03n1fj6gBXqOtJQmRAEjDzYhCCQwlpwobphicJTrZK0aR0o20hT1o+1DtvifagnIIm/gKaJqGfejxmqt1UpKF3WHhKRjS8A2Oy7fqm2H9eOMZUQPGZMCQqpYEmEYJIUUPVr0RDfn9S+1GLS+E+YoKSzmDA1PraQjlWMJVytYZ7gQX21PXs1vWGxuE5ENr4AoOF13ZXFee+5IgTYot/+EoIilZjEZSAAxqQRjmMax2JfTb3vJ+ZRi9+hDOoEJkKDJDWatGoS8QLB1dwywgfFeyU4cGo3IGwbUE9dYemXZuZOV158rndaubZFj9oREjLQrK67OgkxnnWNKxhJZj6KDYBMmpCakTgSm8TkiX5d+7UJUke+Ho+TVlbx95UW78E5xQW7gZguERliqDHK59/lSj7VO8W76kOZD5WTvgSTIWKT+ArY5AlP8l3VNbUJFSSS9Dhdj8mEejORkMQgSeo+1KfBaIovK27dc8B7KrpquKRxDttIDLANagztzLvLocWXAe80flgx3iOm+gY1FpECJFkPMgGdPOKGVHFMAKmYiKnrQET9vXUCksSVaRlQ3d+Y9eHH+4B3RAacg44svLOxdpcSkY0vqFHOrtwz8vl6ORwu5GUVmcyD9R5jS1AL3gIGyMEKBOX+m9a47dZ1VBVrQUxy0jMAkoZmOnTyZKxVmz4T9ZUZVx9f4MhVi7HmqcXH2i8Jzm/Hvhxz5Bn63A1bu/6dBNmwsYsaI9O+pzt2aGZ09uWuDPiRwRWKzcB4hzUlkKFikDEpMvobQ/7gz07xnpu7LMwJxggppJKRqn9kDkz5jKqytq48/foeX/MVcxTtHEYj1LsovuoHr9Sl7EaKH3iG2r5Pi5l3kCAbD1Aj13K4avb+2a7y7MvLYSBvKlkJLgNjFWPKSniI9e4N5Dk0CmYaXXbPK9akgif2fpRHAyGmIFkqXIDREPJ2A8ly2BJeVvQj1JcEH3AeavHlmG4IHZ1/x+ylW1ZJkI0HSLExf9V/DNYb3Wwwmhm1MuxIsbnirWAkkMkIRFAEGUBrdoZP+rSree3rz5KJI88Nik4+63gEsz2RnGS9Sw0YjeAam/PSF62QNwJ0h+iWAUMIoxj9VHzADRxDZ0N/5uDvM4FsPAgpGvO3d7Llv2v27/uUshXIioDNDcaCMYJIwMooKhPodLnywCxXfvpRvNhY/4oKIDVrBTL5VLyWmTwk0uQ0qJEgW62gQbA4GHZhoxdnfgB+lNQ9uLISPxoqvu/osXRTv7nrX5lANh6EFMGH7syhX5pfO/kptl8yKgw2D1gr0YDKBMOQCgHWFfIB1hQgGZj6IQopaxN2ynla5NNPhIEouARXQjXzUbyrxW9FfjSsxJcDN26h0zr4O/PdB/pMIBsPMonzrSve2JKVfyj6Jz+8bIQtA4w1iFEkCshQjA4RGwCFUsF4kBxMVjGZ8aoNqQFp6nc4DKUnzu2nO2i90tfiS4ILeC9xxQ9x5scceEK3pKNLd6y3Dv86OyAbv8AkCny5OX/198+sXvyg2d4oH22VQKgSYAAsAFZ1zLKKp/WgOZgA6iG4aEL6MNVO/11EarECaBQfv0tdFO/rlb6i9/gQqLe7sgyM6tkfBFzfMehbOvNHfmp+eHJtRwPGLzAFbyoWZ3+lv776FVI4xApiJDnkGFCDKmTqEPVgauaV8OCqtjahJvLgckh/9ibOuEbi47WjLgENgeDBB4niq9W+HAaGA0/Z9/Q3Atqcee0zrjz1a0xBNn6RaWjT/YGb39f8wNHm4LjJDCMjGENVBqKwlQAAwWq1TWJCNCGLglMDpCI1DUgtPgD1rNdGhNSIOPseDVXkvQ+kh51y6LfEuzHLrmPkGptXXM03aL9fTjVg/CLT0CU7c/ByvuKe24q/t52yIUaqAABoBvEhgwJqBGsUYxxiPEgJxqRlsC1YZPpDUU2NcBBq8QGt/6YPbIv3seZHVexHfY/rOvodw57L8u/b3OAtMB3Z5obwMPj3PZcV337xAf/jxjrSFV3JUBXA1BWBNWAsCA4xEhdGG99Tz7ow/WgQQGvWwjWKr+hrloGyrMX7SnzP0VkX2kuN3x30wo8D3HCiM/WHiOzo4Y2HP4zBT7xnsHi4c6HzVXPicKT/zGGrdSATrBHUClbZEi8KEgIiAQBJf06XnRIQiW6JroeCChoUHyDE1rlqny9Lv1X3Zd9V+/16oJhp/stVR91XArTtYKp4gAymI12fjx/rf8MtvjW7udb/vDlc8g8bMZa52TIhqCGYmH6pD08AYCQACrLDNjC5FiLRD01mXvHxmFtvd+WwqnnXd3TWAnmz+O9jJ8rPJbDRzkfCw8B+z8fwcBBAMrxf2iv/vNFr7d5cdc+xeIxJH54Csc+YsYFQ9SsKtTBU4ufi+JghSJxt8LVor1Wth2qhS/d5F8WXPcfGJchbzX8+fo37LOB0Il4frwG1CSbDu937wj8NfcNdusALxbnMGqIgJWhdqzG+Aba6aVKSRT7sRF9FPD6LiKxq3ZUeF2fdD92W+OGmY2PdMLPU+O1jJ9wXInKhnY3Mw4qPEP1tHikkMgDcf37m4x+4O/yQ0dHR2XkoWhm2YbG5wWZS0RpMPEIbkbgTbpeEIICmz0m2TVSND2Y1+dM2EMqAG4Ut8Z2NwNDlq3sP5D905eWDnwRCFkoD6BNowHQTLvVbV919t/2e/lr5yc3C5e05IW/VJkTxWyaAGIknydSA9C6TcqqT4qN4r9Vxt6xi398M9PqGYib/90NXyHfVP3cvz3eni38iDJjyD77cd372o8884L9h1Pcvbhae1qxQbKVBKhMyU4m3kjw6lAkDtC6NMXXMWriOWc14r6cMBgbJ8/fuWTG/fOSy4W8DPYBC4swnwp8kAxITkjQMtZg5eab46Atn/eePBuF5Fj/TbCqNppAVVVmIiazLQCbPQBoJwSsuLnaDvuCCDbZh3r64O/ujgwfK3wfOA8zmAwOQin8qDKiRyggAI80bF9eL55w9I58y6LoXlCVHJYS5PPNkOVgrZBaMURBJah+8r+hKZeQMYEub6+15M3vX8jJ/tHf36DXABkDTlALIpPCn2oAaO95M3xUL6938+Ool+5LupnteKN0hDbLog5nzKm1RLQBRkdKI9jITOiKsSWbPNGbyd+xZcq9ZnCvfC5wnYqYYyQ7P0PnfbMD00kgx9Nms98wOXd4eOTuPhhYgiBlmNmy2slHHWro2k83Jz2eUBmC68P8zDJg0gsccU0HQBz8v4gmGKGSA48nEbyM8NihPMv4XEseL/1Xp6FgAAAAASUVORK5CYII="})))},d$6=function(){return React__default.createElement("svg",{width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},React__default.createElement("path",{d:"M0 32.24H32V0.24H0V32.24Z",fill:"url(#pattern0SadIcon)"}),React__default.createElement("defs",null,React__default.createElement("pattern",{id:"pattern0SadIcon",patternContentUnits:"objectBoundingBox",width:"1",height:"1"},React__default.createElement("use",{xlinkHref:"#image0_1122_16894",transform:"scale(0.015625)"})),React__default.createElement("image",{id:"image0_1122_16894",width:"64",height:"64",xlinkHref:"data:image/png;base64,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"})))};function r$i(t){return function(n){if(Array.isArray(n))return t$j(n)}(t)||function(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}(t)||function(n,r){if(n){if(typeof n=="string")return t$j(n,r);var s={}.toString.call(n).slice(8,-1);return s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set"?Array.from(n):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?t$j(n,r):void 0}}(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function t$j(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,s=Array(n);r<n;r++)s[r]=t[r];return s}var c$5={56865:React__default.createElement(b$2,null),56845:React__default.createElement(u$2,null),56848:React__default.createElement(Y,null),56897:React__default.createElement(d$6,null),56898:React__default.createElement(x$4,null),11088:React__default.createElement(M,null)},m$9=function(t){var n=String(t).charCodeAt(0);return c$5[n]||t},f$2=function(t){var n=t.children;return typeof n=="string"&&r$i(n).find(function(r){var s=String(r).charCodeAt(0);return!!c$5[s]})?React__default.createElement(React__default.Fragment,null,r$i(n).filter(Boolean).map(m$9)):React__default.createElement(React__default.Fragment,null,n)};function e$m(t){return(e$m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function n$f(t,n,r){return s=function(i,o){if(e$m(i)!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var u=l.call(i,o);if(e$m(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(n,"string"),(n=e$m(s)=="symbol"?s:s+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var s}let e$k,r$e;r$h=function(t){var n=t.className,r=t.defaultValue,s=t.max,i=t.min,o=t.minLength,l=t.maxLength,u=t.name,c=t.onBlur,p=t.onChange,m=t.onClick,y=t.onFocus,$=t.onKeyDown,S=t.onKeyUp,x=t.pattern,h=t.placeholder,N=t.inputRef,L=t.required,pe=t.type,tt=t.hasAutofocus,me=t.hasNoBorder,st=t.value;return React__default.createElement("input",{className:classNames(n$f(n$f(n$f(n$f({},n,!!n),"input",!0),"u-no-border",me),"js-auto-focus",tt)),max:s,min:i,minLength:o,maxLength:l,name:u,onBlur:c,onChange:function(xt){return p(xt.target.value)},onClick:m,onFocus:y,onKeyDown:$,onKeyUp:S,pattern:x,placeholder:h,ref:N,required:L,type:pe,value:st,defaultValue:r})};function n$d(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}r$h.defaultProps={className:"",max:null,min:null,minLength:null,maxLength:null,name:null,onBlur:null,onClick:null,onChange:null,onFocus:null,onKeyDown:null,onKeyUp:null,pattern:null,placeholder:null,inputRef:null,required:!1,type:"text",value:void 0,defaultValue:void 0,hasAutofocus:!1,hasNoBorder:!1};var t$h=dt.p(e$k||(e$k=n$d([`
  bottom: -22px;
  left: 0;
  position: absolute;
  border-radius: 2px;
  color: `,`;
`])),function(t){return t.theme.design.form_help_color});t$h.displayName="InputErrorMessageUI";var i$f=dt.span(r$e||(r$e=n$d([`
  border-width: 2px;
  border-style: none;
  min-width: 60px;
  border-color: `,`;
`])),function(t){return t.theme.design.form_inputs_border_color}),e$j;i$f.displayName="InputPrefixUI";var n$c,o$f,r$d=dt.p(e$j||(n$c=[`
  color: `,`;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 8px;
`],o$f||(o$f=n$c.slice(0)),e$j=Object.freeze(Object.defineProperties(n$c,{raw:{value:Object.freeze(o$f)}}))),function(t){return t.theme.design.message_color_bot});r$d.displayName="InputLabelUI";var l$7=function(t){var n=t.children,r=t.isVisibleOnMobile;return React__default.createElement(r$d,{className:classNames({"input-label-text is-size-16 is-unselectable":!0,"is-hidden-mobile":!r})},n)};l$7.defaultProps={isVisibleOnMobile:!1};var a$a=function(t){var n=t.className,r=t.children;return React__default.createElement("div",{className:classNames("field",n)},r)},n$b;a$a.defaultProps={className:"",children:null};var t$g,o$e,i$e=dt.div(n$b||(t$g=[`
  `,`
  &.has-icons-right {
    input {
      @media `,` {
        &:not(.InputTextLong__TextArea) {
          padding-right: 2.5rem !important;
        }
      }
    }
  }
`],o$e||(o$e=t$g.slice(0)),n$b=Object.freeze(Object.defineProperties(t$g,{raw:{value:Object.freeze(o$e)}}))),function(t){return t.hasError&&` & input,
    & textarea {
      border-color: red !important;
    }
  `},l$c.mobile_only);i$e.displayName="ControlUI";var e$i=function(t){var n=t.className,r=t.children,s=t.hasError;return React__default.createElement(i$e,{className:classNames("control",n),hasError:s},r)};e$i.defaultProps={className:"",children:null,hasError:!1};var t$f=function(t){var n=t.children;return React__default.createElement("div",{className:"InputSearchButton icon is-right",style:{width:"96px"}},React__default.createElement(h$1,null),React__default.createElement("span",{className:"InputSearchButton__Text is-uppercase",style:{color:"var(--form_inputs_border_color)",fontSize:"11px"}},n))},n$a;t$f.defaultProps={children:null};var r$c,i$d,o$d=dt.button(n$a||(r$c=[`
  width: 60px !important;
  pointer-events: auto !important;
  opacity: 1;

  > * {
    transition:
      opacity 0.2s,
      transform 0.2s;
  }

  &:hover > * {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.4;
  }

  @media `,` {
    width: 42px !important;
    transform: scale(0.85);
    margin-right: 7px;
    padding-right: 0;
  }
`],i$d||(i$d=r$c.slice(0)),n$a=Object.freeze(Object.defineProperties(r$c,{raw:{value:Object.freeze(i$d)}}))),l$c.mobile_only);o$d.displayName="IconSendButtonUI";var n$9=function(t){var n,r=t.onClick,s=t.disabled,i=t.children,o=t.hasError;return n=i||(o?React__default.createElement("span",{role:"img","aria-label":"\u26A0\uFE0F",className:"is-size-4"},"\u26A0\uFE0F"):React__default.createElement(s$6,null)),React__default.createElement(o$d,{type:"button",className:"input-icon-send-button button is-text icon is-right",onClick:r,disabled:s||o},n)};n$9.defaultProps={onClick:function(){},disabled:!1,children:null,hasError:!1};var o$c=function(t){var n=t.hasSearchButton,r=t.value,s=t.onSubmit,i=t.error;return n&&r===""?React__default.createElement(t$f,null):React__default.createElement(n$9,{disabled:r==="",hasError:!!i,onClick:s})},e$h;o$c.defaultProps={onSubmit:null,value:null,error:"",hasSearchButton:!1};var t$e,o$b,n$8=dt.p(e$h||(t$e=[`
  color: `,`;
  margin-top: 4px;
`],o$b||(o$b=t$e.slice(0)),e$h=Object.freeze(Object.defineProperties(t$e,{raw:{value:Object.freeze(o$b)}}))),function(t){return t.theme.design.form_help_color});function t$d(t){return t$d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t$d(t)}function r$b(t,n,r){return s=function(i,o){if(t$d(i)!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var u=l.call(i,o);if(t$d(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(n,"string"),(n=t$d(s)=="symbol"?s:s+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var s}n$8.displayName="InputHelpTextUI";var i$c=function(t){var n=t.children,r=t.className;return React__default.createElement(n$8,{className:classNames(r$b({"input-help-text is-size-7 is-unselectable":!0},r,!!r))},n)},e$g;i$c.defaultProps={className:""};var n$7,r$a,i$b=dt.button(e$g||(n$7=[`
  height: auto;
  line-height: 1.1;
  padding: 12px 45px;
`],r$a||(r$a=n$7.slice(0)),e$g=Object.freeze(Object.defineProperties(n$7,{raw:{value:Object.freeze(r$a)}}))));i$b.displayName="SendButtonUI";var i$a=function(t){var n=t.onClick,r=t.disabled,s=t.children;return React__default.createElement(i$b,{type:"submit",className:"button input-send-button is-size-6 has-text-weight-bold",onClick:n,disabled:r},s)};function e$f(t){return(e$f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t$c(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,s)}return r}function r$9(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?t$c(Object(r),!0).forEach(function(s){n$6(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):t$c(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function n$6(t,n,r){return s=function(i,o){if(e$f(i)!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var u=l.call(i,o);if(e$f(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(n,"string"),(n=e$f(s)=="symbol"?s:s+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var s}i$a.defaultProps={onClick:function(){},disabled:!1,children:"Send"};var b$1=function(t){return React__default.createElement("form",r$9({},t))},d$5=function(t){return React__default.createElement("div",r$9({},t))},y$1=function(t){var n=t.children,r=t.className,s=t.error,i=t.help,o=t.hasNoBorder,l=t.hasSearchButton,u=t.isInsideForm,c=t.isRequired,p=t.isAnimateMessagesOn,m=t.label,y=t.onSubmit,$=t.prefix,S=t.renderAs,x=t.sendButtonType,h=t.sendLabel,N=t.value,L=u?d$5:S||b$1;return React__default.createElement(L,{className:classNames(n$6(n$6(n$6({},r,!!r),"u-no-border",o),"is-animate-messages-on",p)),onSubmit:function(pe){return pe.preventDefault()}},s.length>0&&!u&&React__default.createElement(t$h,{className:"input-error-message is-uppercase is-unselectable is-size-7 has-text-weight-bold"},s),m&&React__default.createElement(l$7,{isVisibleOnMobile:u},m),React__default.createElement(a$a,{className:"has-addons is-marginless"},$&&React__default.createElement(e$i,null,React__default.createElement(i$f,{className:"button is-static has-text-weight-bold input-prefix"},$)),React__default.createElement(e$i,{className:classNames({"is-expanded":!0,"is-required":c,"has-icons-right":x==="inline"}),hasError:!!s},n,x==="inline"&&React__default.createElement(o$c,{hasSearchButton:l,value:N,onSubmit:y,error:s}))),i&&!s&&React__default.createElement(i$c,null,i),s&&u&&React__default.createElement(i$c,{className:"has-text-danger has-text-weight-semibold"},s),x==="button"&&React__default.createElement(a$a,{className:"mt-5"},React__default.createElement(e$i,null,React__default.createElement(i$a,{disabled:N===""||s!=="",onClick:y},h))))},n$5,e$e,r$8,t$b;function o$a(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}y$1.defaultProps={className:"",help:"",isInsideForm:!0,label:"",sendLabel:"Send",onSubmit:null,value:null,hasNoBorder:!1,isRequired:!1,error:"",prefix:null,hasSearchButton:!1,isAnimateMessagesOn:!0,renderAs:null,sendButtonType:"inline"};var l$6="26px",b=function(t){var n=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=o$l(t.theme.initial_vars.horizontal_unit,1.5),s=a$j(t.theme.initial_vars.horizontal_unit,4);return n?lt(n$5||(n$5=o$a([`
      border-radius: `," "," "," ",`;
    `])),r,r,s,r):lt(e$e||(e$e=o$a([`
    border-radius: `," "," "," ",`;
  `])),r,r,r,s)},_$1=dt.div(r$8||(r$8=o$a([`
  display: flex;
  overflow: visible;
  `,`

  `,`

max-width: 100%;
  background-color: `,`;
  color: `,`;

  &.is-author-user {
    background-color: `,`;
    color: `,`;
  }

  p {
    word-break: break-word;
    white-space: pre-wrap;
  }

  ul {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 3px;
    margin-top: 3px;
  }

  blockquote {
    font-size: 1.05rem;
    font-style: italic;
  }

  &.is-shape-rounded,
  &.is-shape-rounded.is-reverse {
    border-radius: `,`;
  }

  &.is-shape-squared,
  &.is-shape-squared.is-reverse {
    border-radius: `,`;
  }

  &.is-shape-transparent {
    padding: 0;
    background-color: transparent !important;
  }

  .MessageBubble__Decorator {
    position: absolute;
    left: -5px;
    bottom: 0;
  }

  .MessageBubble__Decorator path {
    fill: `,`;
  }

  &.is-reverse {
    `,`

    .MessageBubble__Decorator {
      left: initial;
      right: -5px;
      transform: scaleX(-1);
    }

    .MessageBubble__Decorator path {
      fill: `,`;
    }
  }

  input,
  textarea,
  select,
  .InputNumber .field {
    color: `,`;
  }

  .MessageBubble__content {
    width: 100%;
  }

  .MessageBubble__content input,
  .MessageBubble__content textarea,
  .MessageBubble__content select,
  .MessageBubble__content .InputNumber .field {
    color: `,`;
  }
`])),function(t){return b(t)},function(t){var n=o$l(t.theme.initial_vars.vertical_unit,2),r=o$l(t.theme.initial_vars.horizontal_unit,3);return lt(t$b||(t$b=o$a([`
      padding: `," ",`;
    `])),n,r)},function(t){return t.theme.design.message_background_color_bot},function(t){return t.theme.design.message_color_bot},function(t){return t.theme.design.message_background_color_user},function(t){return t.theme.design.message_color_user},l$6,"4px",function(t){return t.theme.design.message_background_color_bot},function(t){return b(t,!0)},function(t){return t.theme.design.message_background_color_user},function(t){return t.theme.design.form_inputs_color},function(t){return t.theme.design.form_inputs_color}),i$9,c$4;function r$7(t){return function(n){if(Array.isArray(n))return e$d(n)}(t)||function(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}(t)||function(n,r){if(n){if(typeof n=="string")return e$d(n,r);var s={}.toString.call(n).slice(8,-1);return s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set"?Array.from(n):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?e$d(n,r):void 0}}(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function e$d(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,s=Array(n);r<n;r++)s[r]=t[r];return s}_$1.displayName="MessageBubbleUI",function(t){t.ROUNDED="rounded",t.SEMI="semirounded",t.SQUARED="squared",t.TRANSPARENT="transparent"}(i$9||(i$9={})),function(t){t.BOT="bot",t.USER="user",t.SYSTEM="system",t.AGENT="agent"}(c$4||(c$4={}));var l$5=function(t){var n=t.classNames,r=t.shape,s=t.isReverse,i=t.author,o=t.children;return React__default.createElement(_$1,{className:classNames(["MessageBubble",s&&"is-reverse","is-shape-".concat(r),"is-author-".concat(i)].concat(r$7(n)))},r===DEFINITIONS.BUBBLES.ROUNDED&&React__default.createElement(Q,null),React__default.createElement("div",{className:"MessageBubble__content"},o))};l$5.defaultProps={shape:DEFINITIONS.BUBBLES.SEMI,classNames:[],isReverse:!1,author:"",children:null};var r$6=function(t){if(typeof t=="string"){var n=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?/\*(.*?)\*/gm:/\*\*(.*?)\*\*/gm;return t.replace(n,"<strong>$1</strong>")}return t},e$c,i$8,a$9,s$5=dt.div(e$c||(i$8=[`
  & + * {
    margin-top: `,`;

    @media `,` {
      margin-top: `,`;
    }
  }
  &.MessageBubbleText {
    word-break: break-word;
    white-space: pre-wrap;
  }
`],a$9||(a$9=i$8.slice(0)),e$c=Object.freeze(Object.defineProperties(i$8,{raw:{value:Object.freeze(a$9)}}))),function(t){return o$l(t.theme.initial_vars.vertical_unit,1.75)},l$c.from_tablet,function(t){return o$l(t.theme.initial_vars.vertical_unit,2.25)});s$5.displayName="MessageBubbleTextUI";var n$4=function(t){var n=t.allowHTMLContent,r=t.text;return n?React__default.createElement(s$5,{className:"MessageBubbleText content ",dangerouslySetInnerHTML:{__html:r$6(r)}}):React__default.createElement(s$5,{className:"MessageBubbleText content "},React__default.createElement(f$2,null,r))},H,H2,t$a;n$4.defaultProps={allowHTMLContent:!1,text:""},H2=H||(H={}),H2.ONE_THIRD="1/3",H2.TWO_THIRD="2/3",H2.HALF="1/2",H2.ONE="1";var i$7,r$5,o$9=dt.div(t$a||(i$7=[`
  margin-bottom: 0 !important;

  .column {
    margin-bottom: 16px;
  }

  @media `,` {
    &.is-tablet > div:not(:first-child) {
      margin-left: 8px;
    }
  }

  &:not(.is-tablet) > div:not(:first-child) {
    margin-left: 8px;
  }
`],r$5||(r$5=i$7.slice(0)),t$a=Object.freeze(Object.defineProperties(i$7,{raw:{value:Object.freeze(r$5)}}))),l$c.from_tablet);function r$4(t){return r$4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r$4(t)}function e$b(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,s)}return r}function t$9(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?e$b(Object(r),!0).forEach(function(s){o$8(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e$b(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function o$8(t,n,r){return s=function(i,o){if(r$4(i)!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var u=l.call(i,o);if(r$4(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(n,"string"),(n=r$4(s)=="symbol"?s:s+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var s}o$9.displayName="RowUI";var c$3=o$8(o$8(o$8(o$8({},H.ONE_THIRD,"is-one-third"),H.TWO_THIRD,"is-two-thirds"),H.HALF,"is-half"),H.ONE,"is-full");function a$8(t,n){return n!==0?"":c$3[t]||""}let f$1,e$a,o$7,s$4,d$4,e$9;f$1=function(t){var n=t.disposition,r=t.inputMapper,s=t.inputsUid,i=t.markRequired,o=t.samurai,l=t.responsiveLayout;return React__default.createElement(o$9,{className:classNames({columns:!0,"is-mobile":!l,"is-tablet":l})},s.map(function(u,c){return React__default.createElement("div",{className:"column ".concat(a$8(n,c)),key:u.uiKey},r(t$9(t$9({},u),{},{extra:t$9(t$9({},u.extra),{},{markRequired:i,responsiveLayout:l}),isInsideForm:!0,samurai:o}),c))}))},d$4=dt(f$6)(e$a||(o$7=[`
  border: 1px solid `,`;
  min-width: 132px;
  padding: 12px 16px;
  white-space: normal;

  `,`

  `,`
`],s$4||(s$4=o$7.slice(0)),e$a=Object.freeze(Object.defineProperties(o$7,{raw:{value:Object.freeze(s$4)}}))),function(t){return t.theme.design.form_buttons_border_color},function(t){var n=t.isDesktop;return t.isPreview&&!n&&`
  flex: 1;
  min-width: 0;
  `},function(t){return!t.isPreview&&`
    @media `.concat(l$c.mobile_only,` {
      flex: 1;
      min-width: 0;
    }
  `)}),l$4=function(t){var n=t.onClick,r=t.disabled,s=t.children,i=t.isDesktop,o=t.isPreview;return React__default.createElement(d$4,{className:"input-send-button is-size-6 has-text-weight-bold",disabled:r,isDesktop:i,isPreview:o,onClick:n,type:"submit"},s)},l$4.defaultProps={onClick:function(){},disabled:!1,children:"Send",isDesktop:!1,isPreview:!1};var o$6,s$3,l$3=dt(f$6)(e$9||(o$6=[`
  background: none;
  border: 1px solid `,` !important;
  color: `,` !important;
  margin-right: 8px;
  min-width: 132px;
  padding: 12px 16px;
  white-space: normal;

  `,`

  `,`
`],s$3||(s$3=o$6.slice(0)),e$9=Object.freeze(Object.defineProperties(o$6,{raw:{value:Object.freeze(s$3)}}))),function(t){return t.theme.design.form_buttons_border_color},function(t){return t.theme.design.form_buttons_border_color},function(t){var n=t.isDesktop;return t.isPreview&&!n&&`
  flex: 1;
  min-width: 0;
  `},function(t){return!t.isPreview&&`
    @media `.concat(l$c.mobile_only,` {
      flex: 1;
      min-width: 0;
    }
  `)}),c$2=function(t){var n=t.onClick,r=t.disabled,s=t.children,i=t.isDesktop,o=t.isPreview;return React__default.createElement(l$3,{className:"input-skip-button is-size-6 has-text-weight-bold",disabled:r,isDesktop:i,isPreview:o,onClick:n,type:"button"},s)},e$8;c$2.defaultProps={onClick:function(){},disabled:!1,children:"Skip",isDesktop:!1,isPreview:!1};var t$8,o$5,a$7=dt.textarea(e$8||(t$8=[`
  box-sizing: border-box;
  height: auto;
`],o$5||(o$5=t$8.slice(0)),e$8=Object.freeze(Object.defineProperties(t$8,{raw:{value:Object.freeze(o$5)}}))));function e$7(t){return(e$7=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t$7(t,n,r){return s=function(i,o){if(e$7(i)!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var u=l.call(i,o);if(e$7(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(n,"string"),(n=e$7(s)=="symbol"?s:s+"")in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var s}var a$6=function(t){var n=t.className,r=t.defaultValue,s=t.disabled,i=t.hasAutofocus,o=t.inputRef,l=t.maxLength,u=t.minLength,c=t.name,p=t.onChange,m=t.placeholder,y=t.required,$=t.value;return React__default.createElement(a$7,{className:classNames(t$7(t$7(t$7({},n,!!n),"textarea",!0),"js-auto-focus",i)),rows:3,maxLength:l,minLength:u,ref:o,onChange:function(S){return p(S.target.value)},placeholder:m,required:y,name:c,defaultValue:r,value:$,disabled:s})};a$6.defaultProps={className:"",disabled:!1,maxLength:null,minLength:null,name:null,onChange:null,required:!1,inputRef:null,placeholder:"",value:void 0,defaultValue:void 0,hasAutofocus:!1};let p$8,x$3,e$5,i$6,d$3,n$3,s$2,f;t$6=(t,n=16)=>t/n,e$6=(t,n)=>{const[r,s]=n.split(".");return t.palette[r][s]},a$5=dt.div`
  ${({m:t})=>t===void 0?lt`
          margin: 0rem;
        `:lt`
          margin: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
        `}

  ${({mt:t})=>t!==void 0&&lt`
      margin-top: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}

  ${({mr:t})=>t!==void 0&&lt`
      margin-right: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}

  ${({mb:t})=>t!==void 0&&lt`
      margin-bottom: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}

  ${({ml:t})=>t!==void 0&&lt`
      margin-left: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}

  ${({mx:t})=>t!==void 0&&lt`
      margin-right: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
      margin-left: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}

  ${({my:t})=>t!==void 0&&lt`
      margin-top: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
      margin-bottom: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}

  ${({p:t})=>t===void 0?lt`
          padding: 0rem;
        `:lt`
          padding: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
        `}

  ${({pt:t})=>t!==void 0&&lt`
      padding-top: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}

  ${({pr:t})=>t!==void 0&&lt`
      padding-right: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}

  ${({pb:t})=>t!==void 0&&lt`
      padding-bottom: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}

  ${({pl:t})=>t!==void 0&&lt`
      padding-left: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}

  ${({px:t})=>t!==void 0&&lt`
      padding-right: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
      padding-left: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}

  ${({py:t})=>t!==void 0&&lt`
      padding-top: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
      padding-bottom: ${({theme:n})=>t$6(n.base_spacing*t)}rem;
    `}
`,p$8={0:"none",1:"0px 1px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px 1px rgba(0, 0, 0, 0.08)",2:"0px 2px 2px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.08), 0px 8px 8px rgba(0, 0, 0, 0.04)",3:"0px 4px 4px rgba(0, 0, 0, 0.04), 0px 8px 8px rgba(0, 0, 0, 0.06), 0px 16px 16px rgba(0, 0, 0, 0.08)",4:"0px 4px 4px rgba(0, 0, 0, 0.04), 0px 8px 8px rgba(0, 0, 0, 0.08), 0px 16px 16px rgba(0, 0, 0, 0.08), 0px 32px 32px rgba(0, 0, 0, 0.08)"},x$3={0:"0",1:"2",2:"4",3:"8",4:"16",5:"24"},e$5=({$backgroundColor:t,theme:n})=>{if(t)return lt`
      background-color: ${e$6(n,t)};
    `},i$6=({$elevation:t=0,$hoverElevation:n})=>lt`
  box-shadow: ${p$8[t]};

  &:hover {
    box-shadow: ${p$8[n??t]};
  }
`,d$3=({$radius:t=0})=>lt`
  border-radius: ${x$3[t]}px;
`,n$3=({$border:t=0,$borderColor:n="neutral.300",theme:r})=>{if(t>0)return lt`
      border: ${t}px solid ${e$6(r,n)};
    `},s$2=({$position:t,$top:n,$right:r,$bottom:s,$left:i})=>lt`
    ${t&&`position: ${t};`}
    ${n!==void 0&&`top: ${n}px;`}
    ${r!==void 0&&`right: ${r}px;`}
    ${s!==void 0&&`bottom: ${s}px;`}
    ${i!==void 0&&`left: ${i}px;`}
  `,f=dt(a$5)`
  align-items: ${({$alignItems:t})=>t};
  display: ${({$display:t})=>t};
  flex-basis: ${({$flexBasis:t})=>t};
  flex-direction: ${({$flexDirection:t})=>t};
  flex-grow: ${({$flexGrow:t})=>t};
  flex-shrink: ${({$flexShrink:t})=>t};
  flex-wrap: ${({$flexWrap:t})=>t};
  justify-content: ${({$justifyContent:t})=>t};
  gap: ${({$gap:t})=>t&&`${t}px`};
  ${s$2}
  ${e$5}
  ${i$6}
  ${d$3}
  ${n$3}
`,i$5=reactExports.forwardRef((t,n)=>{var{alignItems:r,as:s="div",backgroundColor:i,border:o,borderColor:l,children:u,className:c,display:p="block",elevation:m=0,flexBasis:y,flexDirection:$,flexGrow:S,flexShrink:x,flexWrap:h,gap:N,hoverElevation:L,justifyContent:pe,radius:tt=0,position:me,top:st,left:xt,right:nt,bottom:Et}=t,At=__rest(t,["alignItems","as","backgroundColor","border","borderColor","children","className","display","elevation","flexBasis","flexDirection","flexGrow","flexShrink","flexWrap","gap","hoverElevation","justifyContent","radius","position","top","left","right","bottom"]);return jsxRuntimeExports.jsx(f,Object.assign({as:s,className:c,$alignItems:r,$backgroundColor:i,$border:o,$borderColor:l,$display:p,$elevation:m,$flexBasis:y,$flexDirection:$,$flexGrow:S,$flexShrink:x,$flexWrap:h,$gap:N,$hoverElevation:L,$justifyContent:pe,$position:me,$radius:tt,$top:st,$left:xt,$right:nt,$bottom:Et},At,{ref:n,children:u}))}),i$5.displayName="Box";let F,E,D,B,C,a$4,i$3,A,n$2,m$5,r$3,t$3,c$1,getMessageDate,defaultOptions$1,parseLinks,hasLinks,handler;F={main:"#6D7280",50:"#F9FAFB",100:"#F3F4F6",200:"#E5E7EB",300:"#D2D5DA",400:"#9CA3AF",600:"#4B5563",700:"#374151",800:"#1F2937",900:"#111827"},E={main:"#33405E",50:"#F7FAFF",100:"#F0F5FF",200:"#E0EBFF",300:"#C4CFF4",400:"#AAB5DA",500:"#606C8D",600:"#4B5676",800:"#1D2B47",900:"#051832"},D={main:"#D7376B",50:"#FEF3F3",100:"#FEE7E8",200:"#FBB0B2",300:"#F28C9A",400:"#E76683",600:"#B82865",700:"#9A1B5E"},B={main:"#4fccc2",200:"#C1EDEA",400:"#95E0DA",600:"#407F8B",700:"#395C72"},C={main:"#6361f0",50:"#F5F5FF",100:"#EEEEFF",200:"#DDDDFF",300:"#C8C8FA",400:"#A1A0F6",600:"#5557C4",700:"#464D98"},a$4={main:"#F58B0B",100:"#FFE0A9",200:"#FCC76B",400:"#F9B96D",600:"#B05305",700:"#8E3C03"},i$3={dark:"#3B730E",main:"#5E981B",light:"#F0FBD2"},A={dark:"#3230AC",main:"#6361F0",light:"#E0DFFE"},n$2={dark:"#B58816",main:"#FCCC2D",light:"#FEF9D4"},m$5={dark:"#BE0A19",main:"#DD0E0E",light:"#FDDECD"},r$3={main:"#FFFFFF"},t$3={main:"#0081FB"},c$1={main:"#075E54",secondary:"#128C7E",light:"#25D366",tertiary:"#DCF8C6",background:"#ECE5DD"},m$4={base_spacing:8,palette:{neutral:F,blue:E,pink:D,teal:B,purple:C,orange:a$4,success:i$3,info:A,warning:n$2,error:m$5,white:r$3,meta:t$3,whatsapp:c$1},typography:{font:{primary:"'DM Sans', sans-serif"}}},getMessageDate=t=>new Date(t).toTimeString().slice(0,5),defaultOptions$1={defaultProtocol:"https",ignoreTags:["script","style"],rel:"noopener noreferrer",tagName:"a",target:"_blank"},parseLinks=(t,n)=>{if(typeof t!="string")return t;const r={...defaultOptions$1,...n};try{return linkifyHtml(t,r)}catch{return t}},hasLinks=t=>{if(typeof t!="string")return!1;try{return find(t).length>0}catch{return!1}},handler={get:(t,n)=>{if(typeof t[n]=="function"){const r=t[n];return function(...s){return r.apply(t,s)}}return t.getValue(n)}};let Message$2=class{constructor(t){var r,s,i,o,l,u,c,p,m,y,$,S,x,h,N,L,pe,tt,me,st,xt,nt,Et,At,Ct,bt,yt,St,_t,kt,Tt,Ot,gt,vt,$t,It,wt,jt,Mt,Vt,Rt,Nt,Bt,Ft,Lt,Ut;this.raw={...t},this.data={...t,hasCountryFlag:!!((r=t==null?void 0:t.extra)!=null&&r.hasCountryFlag),isRevisit:!!((s=t==null?void 0:t.extra)!=null&&s.revisit),isWelcome:!!((i=t==null?void 0:t.extra)!=null&&i.welcome),isTyping:!!(t!=null&&t.evaluate&&(t==null?void 0:t.samurai)!==void 0),isGhost:!!(t!=null&&t.ghost),isEval:!!(t!=null&&t.evaluate),isInsideForm:!!(t!=null&&t.isInsideForm),isFirstInput:!!(t!=null&&t.isFirstInput),isFinishBot:(t==null?void 0:t.type)===MessageTypes.HIDDEN&&(t==null?void 0:t.action)==="finish",isActionUnassign:(t==null?void 0:t.action)==="unassign",failed:!!(t!=null&&t.failed),hasGDPR:!!((l=(o=t==null?void 0:t.extra)==null?void 0:o.legal)!=null&&l.state),gdpr:{text:((c=(u=t==null?void 0:t.extra)==null?void 0:u.legal)==null?void 0:c.text)||"",link:utils$1.getHref(((m=(p=t==null?void 0:t.extra)==null?void 0:p.legal)==null?void 0:m.link)||null),linkText:(($=(y=t==null?void 0:t.extra)==null?void 0:y.legal)==null?void 0:$.linkText)||""},customSubmitFn:((x=(S=t==null?void 0:t.extra)==null?void 0:S.input)==null?void 0:x.onSubmit)||null,minValue:Number(((N=(h=t==null?void 0:t.extra)==null?void 0:h.textarea)==null?void 0:N.minValue)||null),maxValue:Number(((pe=(L=t==null?void 0:t.extra)==null?void 0:L.textarea)==null?void 0:pe.maxValue)||null),prefix:(me=(tt=t==null?void 0:t.extra)==null?void 0:tt.textarea)==null?void 0:me.prefix,multiple:!!((xt=(st=t==null?void 0:t.extra)==null?void 0:st.textarea)!=null&&xt.multiple),buttonsAlignment:((Et=(nt=t==null?void 0:t.extra)==null?void 0:nt.buttons)==null?void 0:Et.alignment)||"horizontal",buttonsMinOptions:((Ct=(At=t==null?void 0:t.extra)==null?void 0:At.buttons)==null?void 0:Ct.minOptions)||null,buttonsMaxOptions:((yt=(bt=t==null?void 0:t.extra)==null?void 0:bt.buttons)==null?void 0:yt.maxOptions)||null,errorMessage:(St=t==null?void 0:t.extra)==null?void 0:St.errorMessage,buttonsRandomize:!!((kt=(_t=t==null?void 0:t.extra)==null?void 0:_t.buttons)!=null&&kt.randomize),isCumulative:!!((Ot=(Tt=t==null?void 0:t.extra)==null?void 0:Tt.buttons)!=null&&Ot.cumulative),buttonsLeftTag:(($t=(vt=(gt=t==null?void 0:t.extra)==null?void 0:gt.buttons)==null?void 0:vt.tags)==null?void 0:$t[0])||"",buttonsRightTag:((jt=(wt=(It=t==null?void 0:t.extra)==null?void 0:It.buttons)==null?void 0:wt.tags)==null?void 0:jt[1])||"",mustMatchSuggestion:!!(((Vt=(Mt=t==null?void 0:t.extra)==null?void 0:Mt.buttons)==null?void 0:Vt.must_match_suggestion)??!0),markRequired:!!(((Rt=t==null?void 0:t.extra)==null?void 0:Rt.markRequired)??!0),responsiveLayout:!!((Nt=t==null?void 0:t.extra)!=null&&Nt.responsiveLayout),key:(t==null?void 0:t.ui_key)||(t==null?void 0:t.key)||(t==null?void 0:t.uiKey)||"",url:(t==null?void 0:t.url)||"",inputType:inputUtils.getInputType(t),author:messagesUtils.getAuthor(t?t.samurai:null),date:t&&t.timestamp?getMessageDate(t.timestamp):null,blockID:((Bt=t==null?void 0:t.extra)==null?void 0:Bt.id)||"",className:((Ft=t==null?void 0:t.extra)==null?void 0:Ft.className)||"",submitButtonLabel:t==null?void 0:t.send_label,skipButtonLabel:t==null?void 0:t.skip_label,hasSkipButton:t==null?void 0:t.has_skip_button},this.initMessageText(),this.data.hasInput=this.data.inputType!==null;const n=((Ut=(Lt=t==null?void 0:t.extra)==null?void 0:Lt.textarea)==null?void 0:Ut.dateOptions)??null;this.initDateOptions(n),this.data.isInputBubbleStyled=inputUtils.isBubbleStyled(this.data.inputType)}getValue(t){if(t==="raw")return this.raw;if(t in this.data)return this.data[t];if(typeof t=="string"&&t.startsWith("isAuthor")){const n=t.substr(8).toLowerCase();return this.isAuthor(n)}}setValue(t,n){this.data[t]=n}toJSON(){return this.data}getRawValue(t){return this.raw[t]}getMessageType(t){const n=messagesUtils.getMessageType(this.raw,t);return n===MessageTypes.INPUT?null:n}getInputInlineMessageType(){return this.getValue("hasInput")?MessageTypes.INPUT:null}getPlaceholder(t){return inputUtils.getFieldPlaceholder({message:this.raw,text:t})}getAvatar({config:t,agents:n}){return messagesUtils.getAvatar({config:t,message:this.raw,agents:n})}getButtons(){const t=inputUtils.getButtonsFromMessage(this.raw);return this.getValue("buttonsRandomize")?t.sort(()=>Math.random()-.5):t}getAutocompleteOptions(){return inputUtils.getAutocompleteOptions(this.raw)}getCards(){return inputUtils.getCards(this.raw)}isAuthor(t){return this.getValue("author")===t}isEmpty(){return Object.keys(this.raw).length===0}getVideoUrl(){return messagesUtils.getVideoUrl(this.getValue("url"))}getKey(){const{data:t}=this;return t.key}getName(){return this.name}hasFixedInput(){var t,n;return((n=(t=this.raw)==null?void 0:t.extra)==null?void 0:n.showFixedInput)===!0}initMessageText(){const t=this.getMessageType(!0),{data:n}=this,{invite_message:r,message:s,rich_text:i,title:o}=n;if(t===MessageTypes.STRUCTURED_DATA&&s)return n.messageText=utils$1.bold(s),void(n.messageTextIsHTML=!0);if(t===MessageTypes.DIALOG){const u=r||i||o||"";return n.messageText=parseLinks(u),void(n.messageTextIsHTML=!0)}if(!i&&s&&typeof s=="string"&&hasLinks(s))return n.messageText=parseLinks(s),void(n.messageTextIsHTML=!0);const l=r||i||o||s||"";n.messageText=parseLinks(l),n.messageTextIsHTML=!0}initDateOptions(t){const{data:n}=this;this.dateInputLogic=new c$7(t),n.showDatePicker=this.dateInputLogic.getShowDatePicker(),n.dateFormat=this.dateInputLogic.dateFormat,n.enabledDaysOfWeek=this.dateInputLogic.enabledDaysOfWeek}getDateFnsFormat(){return this.dateInputLogic.getDateFnsFormat()}isValidDate(t,n=!1){return!(t||!n)||this.dateInputLogic.isValidDate(t)}applyDateFormat(t){return this.dateInputLogic.applyDateFormat(t)}parseDate(t){return this.dateInputLogic.parseDate(t)}getDatePickerInitialMonth(t){return this.dateInputLogic.getInitialMonth(t)}isValidNumber(t,n,r){return inputUtils.validNumberHelper({value:t,minText:n,minValue:this.getValue("minValue"),maxText:r,maxValue:this.getValue("maxValue")})}isValidText(t){var n,r,s,i,o,l,u,c,p,m,y,$;return inputUtils.validText(t,{pattern:(s=(r=(n=this.raw)==null?void 0:n.extra)==null?void 0:r.textarea)==null?void 0:s.pattern,errorMessage:(l=(o=(i=this.raw)==null?void 0:i.extra)==null?void 0:o.textarea)==null?void 0:l.errorMessage,minChars:(p=(c=(u=this.raw)==null?void 0:u.extra)==null?void 0:c.textarea)==null?void 0:p.minChars,maxChars:($=(y=(m=this.raw)==null?void 0:m.extra)==null?void 0:y.textarea)==null?void 0:$.maxChars})}};function _(t,n){if(t instanceof Message$2)throw new Error("TypeError: invalid arguments supplied to messageWrapper. Attempt to wrap an already wrapped message.");return new Proxy(new Message$2(t,n),handler)}const MSGFILTER_SUPPORTED="MSGFILTER_SUPPORTED",MSGFILTER_VISIBLE="MSGFILTER_VISIBLE",MSGFILTER_BRANDMESSAGE="MSGFILTER_BRANDMESSAGE",MSGFILTER_USERMESSAGE="MSGFILTER_USERMESSAGE",MESSAGE_FILTERS={MSGFILTER_SUPPORTED:messagesUtils.supportedMessageFilter,MSGFILTER_VISIBLE:messagesUtils.visibleMessageFilter,MSGFILTER_BRANDMESSAGE:messagesUtils.brandMessageFilter,MSGFILTER_USERMESSAGE:messagesUtils.userMessageFilter};function wrapMessages(t){return t.map(n=>_(n))}let Messages$1=class{constructor(t){this.raw=t,this.data=wrapMessages(t),this.filteredData={}}getLastMessage(){return this.data.length>0?this.data.slice(-1)[0]:_({})}getLastVisibleMessage(){const t=this.getSupportedMessages();return t.length>0?t.slice(-1)[0]:_({})}getLast2VisibleMessages(){const t=this.getSupportedMessages(),[n]=t.slice(-1);return[(t.length>1?t.slice(-2)[0]:_(null))||_(null),n||_(null)]}getLastBrandMessage(){const t=this.getBrandMessages();return t.length>0?t.slice(-1)[0]:_({})}getLastUserMessage(){const t=this.getUserMessages();return t.length>0?t.slice(-1)[0]:_({})}replaceVariables(t){return wrapMessages(this.raw.map(n=>messagesUtils.withVariablesReplaced(n,t)))}getBrandMessages(){return this._filterMessages(MSGFILTER_BRANDMESSAGE)}getUserMessages(){return this._filterMessages(MSGFILTER_USERMESSAGE)}getSupportedMessages(){return this._filterMessages(MSGFILTER_SUPPORTED)}getVisibleMessages(){return this._filterMessages(MSGFILTER_VISIBLE)}_filterMessages(t){return t in this.filteredData||(this.filteredData[t]=this.data.filter(MESSAGE_FILTERS[t])),this.filteredData[t]}};function messagesWrapper(t){if(t instanceof Messages$1)throw new Error("TypeError: invalid arguments supplied to messagesWrapper. Attempt to wrap an already wrapped messages.");return new Messages$1(t)}function wrapMessagesObject(t){return messagesWrapper(messagesUtils.createSortedMessagesArray(t))}const initialState$2={messages:[],previousMessages:[],messagesWrapper:new Messages$1([]),lastTimestamp:0,lastUserMessageKey:null,prependMessages:()=>null},Context$7=reactExports.createContext(initialState$2),Provider$6=({value:t,children:n})=>jsxRuntimeExports.jsx(Context$7.Provider,{value:t,children:n}),useMessagesContext=()=>reactExports.useContext(Context$7);function enchanceDispatchWithLogger(t){return n=>(console.groupCollapsed("Action:",n),t(n))}function useReducerWithLogger(t,n){const r=reactExports.useRef(n),[s,i]=reactExports.useReducer(t,n),{debug:o}=useConfigContext(),l=reactExports.useMemo(()=>o?enchanceDispatchWithLogger(i):i,[i,o]);return reactExports.useEffect(()=>{o&&s!==n&&(console.log("Prev state: ",r.current),console.log("Next state: ",s),console.groupEnd()),r.current=s},[s,s.messages,n,o]),[s,l]}const MSG_ACTION_TYPE_SET_MESSAGES="MSG_ACTION_TYPE_SET_MESSAGES",MSG_ACTION_TYPE_SET_PREVIOUS_SESSION_MESSAGES="MSG_ACTION_TYPE_SET_PREVIOUS_SESSION_MESSAGES",MSG_ACTION_TYPE_RESUME_PREVIOUS_SESSION="MSG_ACTION_TYPE_RESUME_PREVIOUS_SESSION",MSG_ACTION_TYPE_NEW_MESSAGE="MSG_ACTION_TYPE_NEW_MESSAGE",MSG_ACTION_TYPE_CLEAN="MSG_ACTION_TYPE_CLEAN",MSG_ACTION_TYPE_ADD_MESSAGES="MSG_ACTION_TYPE_ADD_MESSAGES",MSG_ACTION_TYPE_PREPEND_MESSAGES="MSG_ACTION_TYPE_PREPEND_MESSAGES",MSG_ACTION_TYPE_MARK_AS_FAILED="MSG_ACTION_TYPE_MARK_AS_FAILED";function reducer(t,n){switch(n.type){case MSG_ACTION_TYPE_CLEAN:return{...t,messages:[]};case MSG_ACTION_TYPE_SET_MESSAGES:return{...t,messages:[...n.messages]};case MSG_ACTION_TYPE_ADD_MESSAGES:return{...t,messages:[...t.messages,...n.messages]};case MSG_ACTION_TYPE_PREPEND_MESSAGES:return{...t,messages:[...n.messages,...t.messages]};case MSG_ACTION_TYPE_SET_PREVIOUS_SESSION_MESSAGES:return{...t,previousMessages:[...n.messages]};case MSG_ACTION_TYPE_RESUME_PREVIOUS_SESSION:return{...t,messages:[...t.previousMessages]};case MSG_ACTION_TYPE_NEW_MESSAGE:{const r=[...t.messages],s={...n.message};return messagesUtils.updateMessage(r,s)||r.push(s),{...t,messages:r}}case MSG_ACTION_TYPE_MARK_AS_FAILED:{const{message:r,retryCb:s}=n,i={...r,failed:!0,retryCb:s},o=[...t.messages];return messagesUtils.updateMessage(o,i),{...t,messages:o}}}return t}function MessagesService({children:t}){const n=reactExports.useRef(null),r=useCoreContext(),s=useAssignationContext(),[i,o]=useReducerWithLogger(reducer,initialState$2),l=messagesWrapper(i.messages),u=useWidgetContext(),{customData:c}=useConfigContext();return reactExports.useEffect(()=>{const p=r.pipelines.$typingSequence.subscribe(m=>{if(m===null||m&&m.state===!0)return;const{message:y}=m;y.type==="hidden"&&y.action==="script"&&n.current!==y.id&&(n.current=y.id,utils$1.evalCode(y.script,u)),o({type:MSG_ACTION_TYPE_NEW_MESSAGE,message:utils$1.compose(messagesUtils.withEvaluate,messagesUtils.withVariablesReplaced.bind(messagesUtils))(y,c),options:{}})});return()=>{p.unsubscribe()}},[r.pipelines.$typingSequence,u,c,o]),reactExports.useEffect(()=>{s.setAssignation(messagesUtils.getAssignationAgentID(l))},[s,l]),jsxRuntimeExports.jsx(Provider$6,{value:{messagesWrapper:l,lastTimestamp:l.getLastMessage().timestamp||0,lastUserMessageKey:l.getLastUserMessage().key??null,setMessages:p=>{const m=messagesUtils.createSortedMessagesArray(p);o({type:MSG_ACTION_TYPE_SET_MESSAGES,messages:m})},setPreviousSessionMessages:p=>{const m=messagesUtils.createSortedMessagesArray(p);o({type:MSG_ACTION_TYPE_SET_PREVIOUS_SESSION_MESSAGES,messages:m})},resumePreviousSession:()=>{o({type:MSG_ACTION_TYPE_RESUME_PREVIOUS_SESSION})},newMessage:(p,m)=>{o({type:MSG_ACTION_TYPE_NEW_MESSAGE,message:p,options:m||{}})},clean:()=>{o({type:MSG_ACTION_TYPE_CLEAN}),o({type:MSG_ACTION_TYPE_CLEAN})},addMessages:p=>{const m=messagesUtils.createSortedMessagesArray(p);o({type:MSG_ACTION_TYPE_ADD_MESSAGES,messages:m})},prependMessages:p=>{const m=messagesUtils.createSortedMessagesArray(p);o({type:MSG_ACTION_TYPE_PREPEND_MESSAGES,messages:m})},markAsFailed:(p,m=null)=>{o({type:MSG_ACTION_TYPE_MARK_AS_FAILED,message:p,retryCb:m})}},children:t})}const Context$6=reactExports.createContext({isOpen:!1,setIsOpen:null,src:null}),Provider$5=({value:t,children:n})=>jsxRuntimeExports.jsx(Context$6.Provider,{value:t,children:n}),useModalMediaContext=()=>reactExports.useContext(Context$6);function ModalMediaService({children:t=null}){const[n,r]=reactExports.useState(!1),[s,i]=reactExports.useState(null);return jsxRuntimeExports.jsx(Provider$5,{value:{isOpen:n,setIsOpen:r,src:s,setSrc:i},children:t})}const LAST_ACTION_IDLE="last_action_idle",NOTIFICATION_TYPE_ERROR="notification_type_error",resetCfg={lastAction:null,isOpen:!1,isInitialized:!1,type:NOTIFICATION_TYPE_ERROR,hasCloseButton:!1,hasRetryButton:!1,hasResetButton:!1,message:null,retryCb:null,retryInterval:0},Context$5=reactExports.createContext({cfg:resetCfg,showNotification:()=>{},closeNotification:()=>{}}),{Provider:Provider$4}=Context$5,useNotificationsContext=()=>reactExports.useContext(Context$5);function NotificationsService({children:t}){const[n,r]=reactExports.useState(resetCfg),[s,i]=reactExports.useState(null);return jsxRuntimeExports.jsx(Provider$4,{value:{cfg:n,showNotification:(o,l={})=>{if(n.isOpen)return r(c=>({...c,message:o})),null;const u=new Date().getTime();return i(u),r({...resetCfg,message:o,...l,isOpen:!0,isInitialized:!1}),u},closeNotification:(o=-1)=>{o!==-1&&o!==s||r(l=>{const{lastAction:u,retryCb:c}=l;return u!==LAST_ACTION_IDLE&&typeof c=="function"&&c(),{...l,isOpen:!1,lastAction:null,retryCb:null}})},setIsInitialized:o=>{r(l=>({...l,isInitialized:o}))}},children:t})}const Context$4=reactExports.createContext({isOpen:!1,setIsOpen:null}),Provider$3=({value:t,children:n})=>jsxRuntimeExports.jsx(Context$4.Provider,{value:t,children:n}),useOffsetMenuContext=()=>reactExports.useContext(Context$4);function OffsetMenuService({children:t}){const[n,r]=reactExports.useState(!1);return jsxRuntimeExports.jsx(Provider$3,{value:{isOpen:n,setIsOpen:r},children:t})}const Context$3=reactExports.createContext({}),Provider$2=t=>jsxRuntimeExports.jsx(Context$3.Provider,{value:t.value,children:t.children}),useApiContext=()=>reactExports.useContext(Context$3),Context$2=reactExports.createContext({isSubmitted:!1,setIsSubmitted:()=>{}}),{Provider:Provider$1}=Context$2,useSubmitStateContext=()=>reactExports.useContext(Context$2);function SubmitService({children:t}){const[n,r]=reactExports.useState(!1),{customData:s}=useConfigContext(),[i,o]=reactExports.useState(s),{lastTimestamp:l,newMessage:u,markAsFailed:c,resumePreviousSession:p,clean:m}=useMessagesContext(),{document:y}=useDocumentContext(),$=useCoreContext(),S=useApiContext();return reactExports.useEffect(()=>{const x=pe=>{anime({targets:y.querySelector(".js-revisit-fade"),opacity:[1,0],duration:250,easing:"easeInExpo",complete:()=>{if(m(),anime({targets:y.querySelector(".js-revisit-fade"),opacity:[0,1],duration:0}),typeof pe=="function")return pe()}})},h=async pe=>{if(pe.payload==="#continue"||pe.payload==="#_continue")return r(!1),void x(p);r(!0);const tt={...pe,custom_data:{...i,...pe.custom_data||{}},ui_key:utils$1.randomKey(),version:"3.0.0"},me=utils$1.compose(messagesUtils.withGhost,messagesUtils.withEvaluate)(messagesUtils.getMessageFromSendingData({...tt,timestamp:l+1}));pe.payload==="#init"?await new Promise(st=>x(st)):u(me),S.sendMessage(tt).catch(()=>{c(me,()=>S.sendMessage({...tt,extra:{...tt.extra,retried:!0}}))}),o({})},N=(pe={})=>{o(tt=>({...tt,...pe}))},L=()=>{r(!1)};return $.events.on(EVENTS$1.SEND_MESSAGE,h),$.events.on(EVENTS$1.CUSTOM_DATA,N),$.events.on(EVENTS$1.NEW_MESSAGE,L),()=>{$.events.off(EVENTS$1.SEND_MESSAGE,h),$.events.off(EVENTS$1.CUSTOM_DATA,N),$.events.off(EVENTS$1.NEW_MESSAGE,L)}},[i,$.events,S,l,c,u,p,m,y]),jsxRuntimeExports.jsx(Provider$1,{value:{isSubmitted:n,setIsSubmitted:r},children:t})}function CommonProvider({children:t}){const{document:n,window:r}=useDocumentContext(),s=useConfigContext(),i=useCoreContext(),o=useWidgetContext();return useOpenWidgetOnNewMessage(),usePlayAudioOnNewMessage(),useHeadGlobalStyle(),useDocumentClassName(),reactExports.useEffect(()=>{o.document=n,o.window=r,retroCompatSystem({widget:o,window:r}),polyfill$2(r,n),polyfill(r),polyfill$1(r),i.events.emit(EVENTS$1.LOAD)},[n,r,o,i.events]),compose([[AgentsService,{core:i,config:s}],[AssignationService],[NotificationsService],[ModalMediaService],[OffsetMenuService],[MessagesService],[SubmitService]],t)}const PAGINATION=20;function useFetchMore(){const[t,n]=reactExports.useState(!1),[r,s]=reactExports.useState(!0),{prependMessages:i}=useMessagesContext(),o=useCoreContext();return{isFetchingMore:t,fetchMoreMessages:()=>{n(!0),o.getMoreMessages(PAGINATION).then(l=>{l?(s(Object.keys(l).length===PAGINATION),i(l)):s(!1)}).catch(console.error).finally(()=>n(!1))},hasMoreMessages:r}}const LoadMoreUI=dt.div`
  margin: 0 auto;
  text-align: center;

  .button {
    display: inline-block;
    background-color: var(--message_background_color_user);
    color: var(--message_color_user);
  }
  .button.button {
    border-radius: calc(var(--border_radius) * 0.1rem);
    box-shadow: none;
  }
`;function LoadMore({visible:t,isFetching:n,onClick:r,label:s}){return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:t&&jsxRuntimeExports.jsx(LoadMoreUI,{className:"mt-6 mb-5 LoadMore__container",children:jsxRuntimeExports.jsx("button",{className:classNames("LoadMore__button","button","has-text-weight-bold","is-small","px-4",n&&"is-loading"),onClick:r,type:"button",children:s})})})}function LoadMoreWrapper(){const{isFetchingMore:t,fetchMoreMessages:n,hasMoreMessages:r}=useFetchMore(),{messagesWrapper:s}=useMessagesContext(),i=useConfigContext(),o=!i.storage_off;return jsxRuntimeExports.jsx(LoadMore,{isFetching:t,label:i.text.load_more_button_label,onClick:n,visible:o&&r&&s.data.length>=PAGINATION})}class AnimateAvatar{constructor({document:n,filterSelector:r,mutatingElement:s,targetSelector:i,window:o}){this.document=n,this.filterSelector=r,this.mutatingElement=s,this.targetSelector=i,this.window=o,this._onMutation=this._onMutation.bind(this);const l=new MutationObserver(this._onMutation);this.observer=l.observe(s,{subtree:!0,childList:!0})}destroy(){this.observer&&this.observer.disconnect()}_onMutation(n){n.forEach(r=>{r.addedNodes.forEach(s=>{if("querySelector"in s&&s.matches(this.filterSelector)){const i=s.querySelector(this.targetSelector);if(i){const o=i.offsetHeight+i.offsetTop+3;anime({targets:i,translateY:[-o,0],duration:500,easing:"easeInOutQuad"})}}})})}}function useAnimateAvatar(){const{document:t,window:n}=useDocumentContext();reactExports.useEffect(()=>{const r=new AnimateAvatar({document:t,filterSelector:".Message.is-eval:not(.is-start)",mutatingElement:t.querySelector(".Chat"),targetSelector:".message-left",window:n});return()=>r.destroy()},[t,n])}const TIME_OFFSET=200;class AutoFocus{constructor({document:n,iframe:r,selector:s,window:i}){this.document=n,this.iframe=r,this.selector=s,this.window=i,this._onMutation=this._onMutation.bind(this);const o=new MutationObserver(this._onMutation);this.observer=o.observe(n,{subtree:!0,childList:!0})}destroy(){this.observer&&this.observer.disconnect()}_onMutation(n){this._landbotFrameHasFocus()&&n.forEach(r=>{r.addedNodes.forEach(s=>{if("querySelector"in s){const i=s.querySelector(this.selector);i&&setTimeout(()=>{i.focus()},TIME_OFFSET)}})})}_landbotFrameHasFocus(){return window.top===this.window||window.top.document.activeElement===this.iframe}}function useAutoFocus(){const{document:t,iframe:n,window:r}=useDocumentContext(),{design:{llm_scroll_behavior:s}}=useConfigContext();reactExports.useEffect(()=>{if(s)return;const i=new AutoFocus({document:t,iframe:n,selector:".js-auto-focus",window:r});return()=>i.destroy()},[t,n,s,r])}class AutoScroll{constructor({scrollingElement:n,mutatingElement:r,inputInlineRef:s,spacerRef:i,bodyRef:o,isModeNative:l,autoScrollHandler:u}){this.scrollingElement=n,this.mutatingElement=r,this.inputInlineRef=s,this.spacerRef=i,this.bodyRef=o,this.isModeNative=l,this.autoScrollHandler=u,this.auto=!0,this.behavior="smooth",this._onUserScroll=this._onUserScroll.bind(this),this._onMutation=this._onMutation.bind(this),this._attachScrollEvents=this._attachScrollEvents.bind(this),this._dettachScrollEvents=this._dettachScrollEvents.bind(this),this._onResize=this._onResize.bind(this),this._scrollTo=this._scrollTo.bind(this);const c=new MutationObserver(this._onMutation);this.observer=c.observe(r,{attributes:!1,childList:!1,characterData:!0,subtree:!0}),this.animation=null,this._attachScrollEvents(),window.addEventListener("resize",this._onResize)}setBehavior(n){this.behavior=n}destroy(){this.observer&&this.observer.disconnect(),this._dettachScrollEvents(),window.removeEventListener("resize",this._onResize)}_attachScrollEvents(){this.scrollingElement.addEventListener("wheel",this._onUserScroll),this.scrollingElement.addEventListener("touchmove",this._onUserScroll)}_dettachScrollEvents(){this.scrollingElement.removeEventListener("wheel",this._onUserScroll),this.scrollingElement.removeEventListener("touchmove",this._onUserScroll)}_onUserScroll(){this.animation&&this.animation.pause(),this.auto=!1,this._dettachScrollEvents(),setTimeout(()=>{this.auto=!0,this._attachScrollEvents()},1e3)}_onMutation(){this.auto&&(this.animation&&!this.animation.completed&&this.animation.pause(),setTimeout(()=>this._doAutoScroll(),200))}_onResize(){this.auto&&this._doAutoScroll()}_doAutoScroll(){var i,o,l,u,c,p;const n=this.scrollingElement.scrollHeight,r=this.isModeNative?window.innerHeight:((o=(i=this.bodyRef)==null?void 0:i.current)==null?void 0:o.clientHeight)||0,s=n-r-(((u=(l=this.spacerRef)==null?void 0:l.current)==null?void 0:u.clientHeight)||0)-(((p=(c=this.inputInlineRef)==null?void 0:c.current)==null?void 0:p.scrollHeight)||0)+Math.round(.6*r);n>r+150&&s>this.scrollingElement.scrollTop&&s>=0&&this.scrollingElement.scrollTop>=0&&this._scrollTo(s)}_scrollTo(n){this.animation=anime({targets:this.scrollingElement,scrollTop:n,duration:1e3,easing:"easeOutQuad"}),this.autoScrollHandler&&this.autoScrollHandler(n)}}function useHasAgentAssigned(){const{agent:t}=useAssignationContext();return agentUtils.isHuman(t)}function useAutoScroll(t,n,r,s){const i=useModeContext(),{document:o}=useDocumentContext(),{design:{llm_scroll_behavior:l}}=useConfigContext(),u=useHasAgentAssigned();reactExports.useEffect(()=>{if(l===!0&&!u)return;const c=i===MODES.NATIVE?o.scrollingElement:o.querySelector(".js-auto-scroll"),p=new AutoScroll({mutatingElement:o.querySelector(".js-new-message-mutating-element"),scrollingElement:c,inputInlineRef:t,spacerRef:n,bodyRef:r,isModeNative:i===MODES.NATIVE,autoScrollHandler:s});return()=>p.destroy()},[o,i,t,n,r,s,l,u])}function useHasHeader(){const t=useConfigContext();return{hasHeader:t.design.header_visible,hideHeader:t.header_hidden===!0}}function useHasPersistentMenu(){return useConfigContext().persistent_menu.length>0}const headerStickyClass="Header--isSticky",bodyStickyClass="Body--isSticky";class HeaderStickyNess{constructor({scrollingElement:n,header:r,body:s}){this.scrollingElement=n,this.header=r,this.body=s,this.clientY=null,this.onUserScroll=this.onUserScroll.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onAutoScroll=this.onAutoScroll.bind(this),this.scrollingElement.addEventListener("wheel",this.onUserScroll,!1),this.scrollingElement.addEventListener("touchstart",this.onTouchStart,!1),this.scrollingElement.addEventListener("touchend",this.onTouchEnd,!1)}getAutoScrollHandler(){return this.onAutoScroll}onAutoScroll(n){this.onUserScroll({deltaY:n})}onUserScroll(n){n.deltaY>=0?(this.header.classList.add(headerStickyClass),this.body.classList.add(bodyStickyClass)):(this.header.classList.remove(headerStickyClass),this.body.classList.remove(bodyStickyClass))}onTouchStart(n){this.clientY=n.touches[0].clientY}onTouchEnd(n){const r=n.changedTouches[0].clientY-this.clientY;this.onUserScroll({deltaY:-r})}destroy(){this.scrollingElement.removeEventListener("wheel",this.onUserScroll),this.scrollingElement.removeEventListener("touchstart",this.onTouchStart),this.scrollingElement.removeEventListener("touchend",this.onTouchEnd)}}function useHeaderStickyness(){const{document:t}=useDocumentContext(),{design:n}=useConfigContext(),r=useModeContext(),[s,i]=reactExports.useState(null),o=r===MODES.NATIVE?t.scrollingElement:t.querySelector(".js-auto-scroll");return reactExports.useEffect(()=>(n.header_visible&&o&&!s&&i(new HeaderStickyNess({scrollingElement:o,header:t.querySelector(".Header"),body:t.querySelector(".Body")})),()=>{s&&s.destroy()}),[t,n.header_visible,o,s]),s==null?void 0:s.getAutoScrollHandler()}function useInitCore(){const[t,n]=reactExports.useState(!0),[r,s]=reactExports.useState(!0),i=useApiContext(),o=useCoreContext(),{showNotification:l,closeNotification:u}=useNotificationsContext(),{setPreviousSessionMessages:c,newMessage:p,setMessages:m}=useMessagesContext(),{text:y,revisit_off:$,revisit:S,warning_connection:x,offline_detect_database:h}=useConfigContext();return reactExports.useEffect(()=>{i.init().then(N=>{!N.isNewSession&&!$&&messagesUtils.getAssignationAgentID(wrapMessagesObject(N.messages))<=0&&S.length>0?(c(N.messages),S.forEach(L=>p(messagesUtils.withRevisit(L)))):m(N.messages)}).catch(console.error).finally(()=>n(!1))},[]),reactExports.useEffect(()=>{const N=L=>{L!==r&&(L?u():x&&l(y.error_offline_message,{lastAction:LAST_ACTION_IDLE,hasCloseButton:!0}),s(L))};return t===!1&&h&&o.events.on(EVENTS$1.DATABASE_CONNECTION,N),()=>o.events.off(EVENTS$1.DATABASE_CONNECTION,N)},[t,r,o.events,u,l,s,y.error_offline_message,x,h]),{isFetching:t,status:r}}const useLLMScroll=()=>{const{design:{llm_scroll_behavior:t}}=useConfigContext(),n=useHasAgentAssigned(),r=useModeContext(),{document:s,window:i}=useDocumentContext();reactExports.useEffect(()=>{if(!t||n)return;const o=s.querySelector(".js-new-user-message-mutating-element"),l=new MutationObserver(u=>handleMutations(u,s,i,r===MODES.NATIVE));return l.observe(o,{attributes:!1,childList:!1,characterData:!0,subtree:!0}),()=>l.disconnect()},[t,n,r,s,i])},handleMutations=(t,n,r,s)=>{var c,p;const i=((c=n.getElementById("Header"))==null?void 0:c.offsetHeight)||0,o=n.querySelector(".js-auto-scroll"),l=n.querySelectorAll('.Message[data-author="user"]'),u=l[l.length-1];if(u){for(const m of t)if(m.type==="characterData"){const y=u.offsetTop;if(s){const $=n.scrollingElement,S=((p=r.visualViewport)==null?void 0:p.height)||r.innerHeight;o.style.minHeight=y+S-i+"px",$.scrollTop=y-i}else{const $=n.querySelector(".js-llm-scroll-helper"),S=o.clientHeight,x=parseInt(r.getComputedStyle(o).paddingTop,10);$.style.minHeight=y+S-i-x+"px",o.scrollTop=y-i}}}};function useOnlineStatus(){const{window:t}=useDocumentContext(),[n,r]=reactExports.useState(!0),{showNotification:s,closeNotification:i}=useNotificationsContext(),{text:o,warning_connection:l,offline_detect_navigator:u}=useConfigContext();return reactExports.useEffect(()=>{const c=()=>{r(!1),l&&s(o.error_offline_message,{lastAction:LAST_ACTION_IDLE,hasCloseButton:!0})};return u&&t.addEventListener("offline",c),()=>{t.removeEventListener("offline",c)}},[t,s,l,o.error_offline_message,u]),reactExports.useEffect(()=>{const c=()=>{r(!0),i()};return u&&t.addEventListener("online",c),()=>{t.removeEventListener("online",c)}},[t,i,u]),u||n}const DEFAULT_ENABLE_SCROLL_TO_BOTTOM_BUTTON=!0;function useScrollBottomButton({chatRef:t,threshold:n=100}){const r=useModeContext(),{document:s,window:i}=useDocumentContext(),{design:{enable_scroll_to_bottom_button:o}}=useConfigContext(),{lastTimestamp:l,lastUserMessageKey:u}=useMessagesContext(),[c,p]=reactExports.useState(!1),m=o??DEFAULT_ENABLE_SCROLL_TO_BOTTOM_BUTTON,y=r===MODES.NATIVE,$=i.self!==i.top,S=!y||y&&$,x=reactExports.useCallback(()=>{var L;if(S&&t.current)return{scrollTop:t.current.scrollTop,scrollHeight:t.current.scrollHeight,clientHeight:t.current.clientHeight};{const pe=s.scrollingElement||s.documentElement;return{scrollTop:pe.scrollTop,scrollHeight:pe.scrollHeight,clientHeight:((L=i.visualViewport)==null?void 0:L.height)||i.innerHeight}}},[S,t,s,i]),h=reactExports.useCallback(()=>{const{scrollTop:L,scrollHeight:pe,clientHeight:tt}=x();p(pe-L-tt>n)},[x,n]),N=reactExports.useCallback(()=>{if(S&&t.current)t.current.scrollTo({top:t.current.scrollHeight,behavior:"smooth"});else{const L=s.scrollingElement||s.documentElement;i.scrollTo({top:L.scrollHeight,behavior:"smooth"})}},[S,t,s,i]);return reactExports.useEffect(()=>{if(m)return S?void 0:(i.addEventListener("scroll",h),()=>i.removeEventListener("scroll",h))},[S,i,h,m]),reactExports.useEffect(()=>{if(!m)return;const L=setTimeout(()=>{h()},100);return()=>clearTimeout(L)},[l,u,h,m]),{showScrollButton:!!m&&c,scrollToBottom:N,onScroll:S?h:void 0}}let device_breakpoint,getUnitValue,getUnitValueDivided,backgroundColor,paddingTopHeaderToChat,paddingTopHeader,paddingTopPersistentMenu,paddingBottomToChat,paddingBottomInputFixed,getPaddingTop,ChatUI,ScrollButtonWrapper;device_breakpoint={small_tablet:576,tablet:768,small_mobile_only:480,mobile_only:767},breakpoint={from_tablet:`(min-width: ${device_breakpoint.tablet}px)`,from_small_tablet:`(min-width: ${device_breakpoint.small_tablet}px)`,mobile_only:`(max-width: ${device_breakpoint.mobile_only}px)`,small_mobile_only:`(max-width: ${device_breakpoint.small_mobile_only}px)`},getUnitValue=({qty:t,unit:n},r=1)=>`${t*r}${n}`,getUnitValueDivided=({qty:t,unit:n},r=1)=>`${t/r}${n}`,backgroundColor=(t,n)=>`
overflow: hidden;

&::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${t};
  opacity: ${n};
}
`,paddingTopHeaderToChat=50,paddingTopHeader={mobile:55,tablet:95},paddingTopPersistentMenu=55,paddingBottomToChat=0,paddingBottomInputFixed=0,getPaddingTop=({$hasNavBarFixedTop:t,$hasPersistentMenu:n},r)=>{let s=paddingTopHeaderToChat;return t&&(s+=r?paddingTopHeader.mobile:paddingTopHeader.tablet),r&&n&&(s+=paddingTopPersistentMenu),`${s}px`},ChatUI=dt.div`
  -webkit-overflow-scrolling: touch;
  position: relative;
  height: 100%;
  width: 100%;

  ${({$isNative:t})=>t?lt`
          height: auto;
          overflow: visible;
        `:lt`
          overflow: auto;
          scroll-behavior: smooth;
        `}

  @media ${breakpoint.mobile_only} {
    padding-top: ${t=>getPaddingTop(t,!0)};
    padding-bottom: ${paddingBottomToChat}px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media ${breakpoint.from_tablet} {
    padding-top: ${t=>getPaddingTop(t,!1)};
  }
  ${t=>t.hasInputFixed?lt`
          padding-bottom: ${paddingBottomInputFixed};
        `:null}
`,ScrollButtonWrapper=dt.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  z-index: 100;
`;function Chat({hasHeader:t,hasAgentAssigned:n,hasPersistentMenu:r,isConnectionOk:s=!0,children:i,scrollBottomButton:o,onScroll:l,chatRef:u}){const c=useModeContext()===MODES.NATIVE;return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(ChatUI,{ref:u,onScroll:l,"data-testid":"chat-ui",className:classNames({Chat:!0,"Chat--hasNavBarFixedTop":t,"Chat--hasInputFixed":n,"Chat--hasPersistentMenu":r,"js-auto-scroll":!0,"js-revisit-fade":!0,"is-autoscroll-mutation-target":!0,"are-disabled":!s}),$hasNavBarFixedTop:t,$hasPersistentMenu:r,$isNative:c,children:i}),c?jsxRuntimeExports.jsx(ScrollButtonWrapper,{children:o}):o]})}const ChatLoaderContainerUI=dt.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${breakpoint.from_tablet} {
    height: 300px;
  }
`;function ChatLoaderContainer({children:t=null}){return jsxRuntimeExports.jsx(ChatLoaderContainerUI,{className:"ChatLoaderContainer",children:t})}const spacerHeight={mobile:"90px",desktop:"150px"},spacerHeightWithInputFixed={mobile:"150px",desktop:"180px"},SpacerUI=dt.div`
  width: 100%;

  @media ${breakpoint.mobile_only} {
    height: ${t=>t.hasInputFixed?spacerHeightWithInputFixed.mobile:spacerHeight.mobile};
  }

  @media ${breakpoint.from_tablet} {
    height: ${t=>t.hasInputFixed?spacerHeightWithInputFixed.desktop:spacerHeight.desktop};
  }
`;function Spacer({hasInputFixed:t,spacerRef:n}){return jsxRuntimeExports.jsx(SpacerUI,{hasInputFixed:t,className:"Chat__spacer",ref:n})}const loaderAnimation=mt`
  0%,
  80%,
  100% {
    box-shadow: 0 1em 0 -1em;
  }
  40% {
    box-shadow: 0 1em 0 -0.2em;
  }
`,LoaderUI=dt.div`
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  pointer-events: none;

  &::before,
  &::after,
  & {
    border-radius: 50%;
    animation-fill-mode: both;
    animation: ${loaderAnimation} 1.8s infinite ease-in-out;
  }

  & {
    position: relative;
    transform: translateZ(0);
    animation-delay: -0.16s;
    top: -1em;

    &::before {
      right: 100%;
      animation-delay: -0.32s;
    }

    &::after {
      left: 100%;
    }

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      width: inherit;
      height: inherit;
    }
  }

  color: ${({theme:t})=>t.design.form_buttons_background_color};
`;function Loader({className:t=""}){return jsxRuntimeExports.jsx(LoaderUI,{className:classNames("lb-loader",t),role:"status","aria-label":"loading"})}const ArrowDownIcon=()=>jsxRuntimeExports.jsx("svg",{viewBox:"0 0 24 24",children:jsxRuntimeExports.jsx("path",{d:"M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"})}),LandbotStyledButtonContainer=dt.button`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({theme:t})=>t.design.form_buttons_background_color};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
  display: grid;
  place-items: center;
  opacity: ${({$visible:t})=>t?1:0};
  visibility: ${({$visible:t})=>t?"visible":"hidden"};
  transition:
    opacity 0.3s,
    visibility 0.3s,
    transform 0.2s;
  z-index: 100;
  padding: 0;

  &:hover {
    filter: brightness(0.95);
    transform: translate(-50%, -2px);
  }

  svg {
    width: 24px;
    aspect-ratio: 1;
    fill: ${({theme:t})=>t.design.form_buttons_color};
  }
`;function ScrollBottomButton({onClick:t,visible:n}){return jsxRuntimeExports.jsx(LandbotStyledButtonContainer,{id:"ScrollBottomButton",onClick:t,$visible:n,"aria-label":"Scroll to bottom",type:"button",children:jsxRuntimeExports.jsx(ArrowDownIcon,{})})}const AWAITING_APPEAR_TIME=2e3,useAwaitingState=()=>{const[t,n]=reactExports.useState(!1),r=useCoreContext(),{awaiting_loader:s}=useConfigContext();reactExports.useEffect(()=>{const u=()=>n(!1);return r.events.on(EVENTS$1.SEND_MESSAGE,u),r.events.on(EVENTS$1.NEW_MESSAGE,u),()=>{r.events.off(EVENTS$1.SEND_MESSAGE,u),r.events.off(EVENTS$1.NEW_MESSAGE,u)}},[n,r.pipelines.$readableSequence,r.events]),reactExports.useEffect(()=>{const u=new Subject,c=r.pipelines.$readableSequence.pipe(debounceTime(AWAITING_APPEAR_TIME)).subscribe(()=>u.next(!0)),p=u.subscribe(()=>n(!0));return()=>{c.unsubscribe(),p.unsubscribe(),n(!1)}},[n,r.pipelines.$readableSequence]);const{messagesWrapper:i}=useMessagesContext(),o=i.getLastMessage(),l=useHasAgentAssigned();return s&&t&&!l&&!o.isEmpty()&&!o.hasInput&&!o.hasFixedInput()&&!o.isFinishBot&&!o.isActionUnassign},MsgGridContainerUI=dt.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media ${breakpoint.from_tablet} {
    margin: 0 auto;
    max-width: ${t=>t.theme.messages_max_width};
  }
`,MsgGridRowContainerUI=dt.div`
  display: flex;
  width: 100%;
  margin-bottom: 6px;

  &.is-end {
    margin-bottom: 10px;
  }

  @media ${breakpoint.from_tablet} {
    padding-right: 10px;
  }

  &.is-medium-width {
    width: 100%;

    .msg-grid-row {
      width: 100%;
    }

    .msg-grid-center {
      width: 410px;
    }
  }

  &.is-reverse {
    justify-content: flex-end;
    padding-right: 0;

    @media ${breakpoint.from_tablet} {
      padding-left: 50px;
    }

    .msg-grid-left {
      display: none;
      margin-left: 1rem;
      margin-right: 0;
    }
  }
  &.Message__message-failed-text,
  &.Message__message-failed-retry-link {
    color: ${({theme:t})=>t.design.form_help_color};
  }
`,MsgGridRowUI=dt.article`
  display: inline-flex;
  position: relative;
  align-items: flex-end;
  max-width: 100%;

  &.is-full-width-content {
    @media ${breakpoint.mobile_only} {
      display: block;
    }
    flex-grow: 1;
    .msg-grid-center {
      flex-grow: 1;
    }
  }
`,MsgGridLeftUI=dt.div`
  margin-right: ${t=>getUnitValue(t.theme.initial_vars.horizontal_unit)};
  text-align: center;
  position: relative;
  &.is-invisible {
    visibility: hidden;
  }

  @media ${breakpoint.from_tablet} {
    margin-right: ${t=>t.theme.message_left_margin_right};
    &.has-fixed-width {
      width: ${t=>t.theme.msg_grid_left_fixed_width};
    }
  }
`,MsgGridCenterUI=dt.div`
  position: relative;
  min-width: 0;
`,MsgGridRightUI=dt.div`
  align-self: center;
`,MsgGridFullWidthRowUI=dt.div`
  position: relative;
  width: 100%;
  margin-top: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,10)};
  margin-bottom: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,1.5)};

  @media ${breakpoint.from_tablet} {
    margin-top: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,4.75)};
    margin-bottom: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,1.5)};
  }
`,getClassNames=(t,n)=>{const[r,...s]=t;return classNames([r,n,...s])},MsgGridContainer=({className:t="",classNames:n=[],containerRef:r=null,children:s})=>jsxRuntimeExports.jsx(MsgGridContainerUI,{className:getClassNames([...n,t],"msg-grid-container"),ref:r,children:s}),MsgGridRow=({containerClassNames:t=[],classNames:n=[],id:r,author:s,type:i,block:o,inputType:l,children:u})=>jsxRuntimeExports.jsx(MsgGridRowContainerUI,{id:r,className:getClassNames(t,"msg-grid-row-container"),"data-author":s,"data-type":i,"data-block":o,"data-input":l,children:jsxRuntimeExports.jsx(MsgGridRowUI,{className:getClassNames(n,"msg-grid-row"),children:u})}),MsgGridLeft=({classNames:t=[],children:n})=>jsxRuntimeExports.jsx(MsgGridLeftUI,{className:getClassNames(t,"msg-grid-left"),children:n}),MsgGridCenter=({classNames:t=[],children:n})=>jsxRuntimeExports.jsx(MsgGridCenterUI,{className:getClassNames(t,"msg-grid-center"),children:n}),MsgGridRight=({classNames:t=[],children:n})=>jsxRuntimeExports.jsx(MsgGridRightUI,{className:getClassNames(t,"msg-grid-right"),children:n}),MsgGridFullWidthRow=({classNames:t=[],children:n})=>jsxRuntimeExports.jsx(MsgGridFullWidthRowUI,{className:getClassNames([...t],"msg-grid-fullwidth-row"),"data-testid":"MsgGridFullWidthRow",children:n}),MsgGridCenterContentRow=({children:t,hasLeftColumn:n=!0})=>jsxRuntimeExports.jsxs(MsgGridRow,{children:[n&&jsxRuntimeExports.jsx(MsgGridLeft,{classNames:["has-fixed-width","is-hidden-mobile"]}),jsxRuntimeExports.jsx(MsgGridCenter,{children:t})]});function Message$1({leftContent:t,centerContent:n,rightContent:r,className:s="",isAnimateMessagesOn:i=!0,messageShape:o=DEFINITIONS.BUBBLES.SEMI,hasLeftContent:l=!0,isBubbleStyled:u=!0,groupProps:c={isStart:!0,isEnd:!0,isLastMessage:!1,isInputInline:!1,isAvatarVisible:!0},message:p={}}){const{isAuthorUser:m,isGhost:y,isEval:$,author:S,blockID:x,className:h,type:N,inputType:L}=p,{isStart:pe,isEnd:tt,isInputInline:me,isAvatarVisible:st}=c;return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsxs(MsgGridRow,{author:S,block:x,classNames:["Message__message","message",me&&!u&&"is-full-width-content"],containerClassNames:["Message",!!s&&s,h,n&&n.url&&"u-no-padding",m&&"is-reverse",pe&&"is-start",tt&&"is-end",$&&"is-eval",y&&"is-ghost",i&&"is-animate-messages-on",o===DEFINITIONS.BUBBLES.TRANSPARENT&&"Message--is-shape-transparent",me&&u&&"is-medium-width"],inputType:L,type:N,children:[l&&jsxRuntimeExports.jsx(MsgGridLeft,{classNames:["Message__message-left","message-left","is-autoscroll-mutation-target",!u&&"is-hidden-mobile",me&&"is-hidden-small-device",!st&&"is-invisible"],children:t}),jsxRuntimeExports.jsx(MsgGridCenter,{classNames:["Message__message-content","message-content"],children:n}),jsxRuntimeExports.jsx(MsgGridRight,{classNames:["Message__message-right","message-right"],children:r})]})})}const Message=dt(Message$1)`
  transition: opacity 0.2s;

  @media ${breakpoint.from_tablet} {
    .Avatar {
      height: 40px;
      width: ${t=>t.theme.avatar.width};
    }
  }

  /* Position date for bot message */
  .message-left .MessageDate {
    position: absolute;

    ${t=>lt`
        top: calc(100% + ${getUnitValue(t.theme.initial_vars.horizontal_unit)});
      `};
  }

  .message-right .MessageDate {
    padding-left: 11px;
  }

  &.is-ghost {
    opacity: 0.6;
  }

  /* Animations */
  &.is-eval.is-animate-messages-on {
    .MessageBubble,
    .MessageMediaBubble {
      animation: message-bubble-in 0.3s ease-in-out;
    }

    .MessageBubble__content {
      opacity: 0;
      animation: message-content-in 0.6s ease-in-out 0.1s forwards;
    }
  }

  &.is-start.is-eval[data-author='bot'].is-animate-messages-on,
  &.is-start.is-eval[data-author='agent'].is-animate-messages-on {
    animation: message-avatar-left-in 0.2s ease-in-out forwards;
  }

  @media ${breakpoint.from_tablet} {
    &[data-author='user'] .MessageDate {
      position: relative;
      margin-right: ${t=>getUnitValue(t.theme.initial_vars.horizontal_unit,-5)};
    }
  }

  /* MULTIMEDIA MESSAGE */
  @media ${breakpoint.mobile_only} {
    &[data-type='image'],
    &[data-type='iframe'],
    &[data-type='media_dialog'] {
      figure {
        max-width: 279px;
      }
    }
  }

  &.Message--is-shape-transparent[data-type='text'][data-author='bot'] + &[data-type='image'][data-author='bot'],
  .Message--is-shape-transparent[data-type='text'][data-author='bot'] + &[data-type='iframe'][data-author='bot'],
  .Message--is-shape-transparent[data-type='text'][data-author='bot'] + &[data-type='media_dialog'][data-author='bot'],
  .Message--is-shape-transparent[data-author='bot'] + &[data-author='user'] {
    /* Un mensaje de tipo imagen/iframe que es posterior a un mensaje de texto de bot tiene un espaciado mayor
     que entre los mensajes de tipo texto. Lo mismo para un mensaje de usuario. */
    margin-top: 20px;
  }

  &.Message--is-shape-transparent .InputButtons,
  &.Message--is-shape-transparent .InputButtonsMultiple,
  &.Message--is-shape-transparent .InputButtonsMultiSearch {
    margin-top: 15px;
  }

  &.Message--is-shape-transparent .MessageMediaBubble .image {
    margin-bottom: 20px;
  }

  /* Decorator only visible for group ending messages */
  &:not(.is-end) .MessageBubble__Decorator {
    display: none;
  }

  &[data-block='ThinkingMessage'] {
    font-style: italic;
  }
`;MessageBubbleWrapper=function({children:t,classNames:n=["is-autoscroll-mutation-target"],message:r={},showBubble:s=!0,showText:i}){const{design:{message_shape:o}}=useConfigContext();return s?jsxRuntimeExports.jsxs(l$5,{author:r.author,classNames:n,isReverse:r.isAuthorUser,shape:o,children:[i&&r.messageText&&jsxRuntimeExports.jsx(n$4,{allowHTMLContent:r.messageTextIsHTML||!r.isAuthorUser,text:r.messageTextIsHTML&&r.isAuthorUser?purify.sanitize(r.messageText):r.messageText}),t]}):t};function MessageText({message:t}){return jsxRuntimeExports.jsx(MessageBubbleWrapper,{message:t,showText:!0})}const AwaitLoaderContainer=dt.div`
  ${LoaderUI} {
    left: 1em;
  }
`,ARBITRARY_BOT_ID=-1,AwaitLoader=()=>{const{design:{avatar_enabled:t,message_shape:n,enable_thinking_mode:r},text:{thinking_message:s}}=useConfigContext();if(!useAwaitingState())return null;if(r){const i=_({type:e.TEXT,samurai:ARBITRARY_BOT_ID,message:s,evaluate:!0,extra:{id:"ThinkingMessage"}});return jsxRuntimeExports.jsx(MsgGridContainer,{className:"is-autoscroll-mutation-target",children:jsxRuntimeExports.jsx(MsgGridCenterContentRow,{hasLeftColumn:t,children:jsxRuntimeExports.jsx(Message,{centerContent:jsxRuntimeExports.jsx(MessageText,{message:i}),hasLeftContent:!1,leftContent:null,rightContent:null,isAnimateMessagesOn:!0,message:i,messageShape:n,groupProps:{isStart:!0,isEnd:!0,isLastMessage:!1,isInputInline:!1,isAvatarVisible:!1}})})})}return jsxRuntimeExports.jsx(MsgGridContainer,{className:"is-autoscroll-mutation-target",children:jsxRuntimeExports.jsx(MsgGridCenterContentRow,{hasLeftColumn:t,children:jsxRuntimeExports.jsx(AwaitLoaderContainer,{className:"AwaitLoaderContainer",children:jsxRuntimeExports.jsx(Loader,{})})})})};function MessageGrouper({previousMessage:t=null,currentMessage:n=null,nextMessage:r=null,isInputInline:s=!1,children:i}){const o=r===null,l=reactExports.useMemo(()=>{var y,$;const p=t&&((y=t.raw)==null?void 0:y.samurai),m=($=n.raw)==null?void 0:$.samurai;return!t||p!==m},[n,t]),u=reactExports.useMemo(()=>{var y,$;const p=(y=n.raw)==null?void 0:y.samurai,m=r&&(($=r.raw)==null?void 0:$.samurai);return o?s?n.isInputBubbleStyled:!n.hasInput||!n.isInputBubbleStyled||n.isAuthorAgent:m!==p},[n,r,o,s]),c=reactExports.useMemo(()=>s?n.isInputBubbleStyled:[MessageTypes.IMAGE,MessageTypes.IFRAME].includes(n.type)?u&&(!o||o&&!n.hasInput):u,[u,s,n,o]);return reactExports.cloneElement(i,{groupProps:{isStart:l,isEnd:u,isAvatarVisible:c,isInputInline:s,isLastMessage:o}})}const Context$1=reactExports.createContext(!1),{Provider}=Context$1,useProactiveContext=()=>reactExports.useContext(Context$1),ratioClassName$1=t=>{switch(t){case"1x1":return"is-1by1";case"5x4":return"is-5by4";case"4x3":return"is-4by3";case"3x2":return"is-3by2";case"5x3":return"is-5by3";case"16x9":return"is-16by9";case"2x1":return"is-2by1";case"3x1":return"is-3by1";case"4x5":return"is-4by5";case"3x4":return"is-3by4";case"2x3":return"is-2by3";case"3x5":return"is-3by5";case"9x16":return"is-9by16";case"1x2":return"is-1by2";case"1x3":return"is-1by3";default:return null}};function Image$3({contain:t,className:n,imgClassName:r,figureStyle:s,openModal:i,ratio:o,rounded:l,size:u,src:c,alt:p,style:m,onLoad:y}){const{setIsOpen:$,setSrc:S}=useModalMediaContext(),x=useProactiveContext();return jsxRuntimeExports.jsx("figure",{className:classNames({image:!0,[`is-${u}x${u}`]:!!u,[ratioClassName$1(o)??""]:!!o,[n??""]:!!n,"u-pointer":i}),onClick:()=>{i&&!x&&(S==null||S(c??null),$==null||$(!0))},style:s,children:c&&jsxRuntimeExports.jsx("img",{alt:p||"",className:classNames({Media:!0,[r??""]:!!r,"is-rounded":l,"is-contain":t}),onLoad:y,src:c,style:m})})}function Avatar$1({className:t="",shape:n="circle",size:r=35,src:s=""}){return jsxRuntimeExports.jsx(Image$3,{className:classNames({[t]:!!t,Avatar:!0}),contain:n===DEFINITIONS.AVATAR_SHAPE.ORIGINAL,imgClassName:classNames({[`is-${n}`]:!0,"is-unselectable":!0}),rounded:n==="circle",size:r,src:s})}const AvatarUI$1=dt(Avatar$1)`
  transform-origin: bottom;
  transform: scale(${({scale:t=1})=>t});

  .is-squared {
    border-radius: 3px;
  }

  .Media {
    width: 100%;
    height: 100%;
  }
`;function AvatarWrapper({message:t}){const n=useAgentsContext(),r=useConfigContext(),{design:{avatar_shape:s,avatar_scale:i}}=r,o=t.getAvatar({config:r,agents:n});return jsxRuntimeExports.jsx(AvatarUI$1,{scale:i,shape:t.isAuthorAgent?DEFINITIONS.AVATAR_SHAPE.ROUNDED:s,src:o})}const MessageDateUI=dt.span`
  display: none;
  width: ${({theme:{avatar:t}})=>t.width};
  text-align: center;
  line-height: 0.8rem;
  color: ${({theme:t})=>t.design.form_help_color};

  @media ${breakpoint.from_tablet} {
    display: block;
  }
`,MessageDateTextUI=dt.b`
  font-weight: normal;
`;function MessageDate({children:t}){return jsxRuntimeExports.jsx(MessageDateUI,{className:"MessageDate is-unselectable is-size-7",children:jsxRuntimeExports.jsx(MessageDateTextUI,{className:"MessageDate__text",children:t})})}function MessageDateWrapper({timestamp:t}){return t?jsxRuntimeExports.jsx(MessageDate,{children:getMessageDate(t)}):null}const MessageFailedTextUI=dt.span`
  margin-right: 0.2rem;
  margin-top: 0.8rem;
  line-height: 36px;
  color: ${({theme:t})=>t.design.message_color_bot};

  + .Message__message-failed-retry-link,
  + .Message__message-failed-retry-link:hover {
    color: ${({theme:t})=>t.design.message_color_bot};
  }
`;function FailedMessage({hasRetry:t,retrying:n,onClickRetry:r,failedMessage:s="We couldn't send this message",retryingMessage:i="Retrying...",retryButtonLabel:o="Try again"}){return jsxRuntimeExports.jsxs(MsgGridRow,{classNames:["Message__message","Message__message-failed","message"],containerClassNames:["Message","is-reverse","FailedMessage"],children:[jsxRuntimeExports.jsx(MessageFailedTextUI,{className:"Message__message-failed-text",children:n?i:s}),t&&!n&&jsxRuntimeExports.jsx(c$a,{className:"Message__message-failed-retry-link is-link-style is-not-disabled",onClick:r,children:o})]})}function FailedMessageWrapper({retryCb:t}){const{text:{error_send_message:n,error_retry_button_label:r,error_retrying_message:s}}=useConfigContext(),[i,o]=reactExports.useState(!1);return jsxRuntimeExports.jsx(FailedMessage,{hasRetry:typeof t=="function",onClickRetry:()=>{o(!0);const l=()=>{setTimeout(()=>{o(!1)},1e3)},u=t==null?void 0:t();u instanceof Promise?u.finally(l):l()},failedMessage:n,retryButtonLabel:r,retryingMessage:s,retrying:i})}function useEvalScriptFromString(t,n){const r=useWidgetContext();reactExports.useEffect(()=>{t&&n&&utils$1.extractScriptsfromString(t).forEach(s=>{utils$1.evalScriptTag(s,{context:r})})},[t,n,r])}const useMediaQuery=t=>{const[n,r]=reactExports.useState(window.matchMedia(t).matches);return reactExports.useEffect(()=>{const s=window.matchMedia(t),i=o=>{r(o.matches)};return s.addEventListener("change",i),()=>{s.removeEventListener("change",i)}},[t]),{match:n}},MAX_MOBILE_BREAKPOINT="(max-width: 768px)",MIN_DESKTOP_BREAKPOINT="(min-width: 768px)",useDevice=()=>{const{match:t}=useMediaQuery(MAX_MOBILE_BREAKPOINT),{match:n}=useMediaQuery(MIN_DESKTOP_BREAKPOINT),r=navigator.userAgent.indexOf("Chrome")>-1;return{isDesktop:n,isMobile:t,isSafari:navigator.userAgent.indexOf("Safari")>-1&&!r,isIos:/iPhone|iPod|iPad/.test(navigator.userAgent)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}};function useHasAnimationOn(){const{isMobile:t}=useDevice(),{animate_buttons:n,animate_messages:r,animate_on_mobile:s}=useConfigContext(),i=s||!t;return{has_buttons_animation_on:i&&n,has_messages_animation_on:i&&r}}function useTypingState(t,n){const r=useCoreContext(),[s,i]=reactExports.useState(t);return reactExports.useEffect(()=>{let o;return n&&(o=r.pipelines.$typingSequence.pipe(first(l=>!!l&&l.state===!1),delay(1e3)).subscribe(()=>i(!1))),()=>{o&&o.unsubscribe()}},[r.pipelines.$typingSequence,n]),s}const AvatarLoaderContainerUI=dt.div`
  position: absolute;
  top: calc(100% + ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,1)});
  left: 50%;
  height: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,2)};
  transform: translateX(-50%) scale(0.6);
`;function AvatarLoaderContainer({children:t}){return jsxRuntimeExports.jsx(AvatarLoaderContainerUI,{children:t})}const borderRadiusRounded="26px",borderRadiusSquared="4px",getBorderRadius=(t,n=!1)=>{const r=getUnitValue(t.theme.initial_vars.horizontal_unit,1.5),s=getUnitValueDivided(t.theme.initial_vars.horizontal_unit,4);return n?lt`
      border-radius: ${r} ${r} ${s} ${r};
    `:lt`
      border-radius: ${r} ${r} ${r} ${s};
    `},MessageBubbleUI=dt.div`
  display: flex;
  overflow: visible;
  ${t=>getBorderRadius(t)}

  ${t=>lt`
      padding: ${getUnitValue(t.theme.initial_vars.vertical_unit,2)} ${getUnitValue(t.theme.initial_vars.horizontal_unit,3)};
    `}

  max-width: 100%;
  background-color: ${({theme:t})=>t.design.message_background_color_bot};
  color: ${({theme:t})=>t.design.message_color_bot};

  &.is-author-user {
    background-color: ${({theme:t})=>t.design.message_background_color_user};
    color: ${({theme:t})=>t.design.message_color_user};
  }

  p {
    word-break: break-word;
    white-space: pre-wrap;
  }

  ul {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 3px;
    margin-top: 3px;
  }

  blockquote {
    font-size: 1.05rem;
    font-style: italic;
  }

  &.is-shape-rounded,
  &.is-shape-rounded.is-reverse {
    border-radius: ${borderRadiusRounded};
  }

  &.is-shape-squared,
  &.is-shape-squared.is-reverse {
    border-radius: ${borderRadiusSquared};
  }

  &.is-shape-transparent {
    padding: 0;
    background-color: transparent !important;
  }

  .MessageBubble__Decorator {
    position: absolute;
    left: -5px;
    bottom: 0;
  }

  .MessageBubble__Decorator path {
    fill: ${({theme:t})=>t.design.message_background_color_bot};
  }

  &.is-reverse {
    ${t=>getBorderRadius(t,!0)}

    .MessageBubble__Decorator {
      left: initial;
      right: -5px;
      transform: scaleX(-1);
    }

    .MessageBubble__Decorator path {
      fill: ${({theme:t})=>t.design.message_background_color_user};
    }
  }

  input,
  textarea,
  select,
  .InputNumber .field {
    color: ${({theme:t})=>t.design.form_inputs_color};
  }

  .MessageBubble__content input,
  .MessageBubble__content textarea,
  .MessageBubble__content select,
  .MessageBubble__content .InputNumber .field {
    color: ${({theme:t})=>t.design.form_inputs_color};
  }
`,MessageMediaBubbleUI=dt(MessageBubbleUI)`
  padding: 0;
  box-shadow: none;
  overflow: hidden;

  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* Safari Video Fix */
  &--isSafari .Media {
    object-fit: initial !important;
    border-radius: 0.75rem 0.75rem 0.75rem 0.125rem;
    border: 4px transparent solid;
  }
`;function MessageMediaBubble({classNames:t=[],shape:n=DEFINITIONS.BUBBLES.SEMI,isReverse:r=!1,isSafari:s=!1,children:i=null}){return jsxRuntimeExports.jsx(MessageMediaBubbleUI,{className:classNames(["MessageMediaBubble",r&&"is-reverse",`is-shape-${n}`,s&&"MessageMediaBubble--isSafari",...t]),children:i})}function MessageMediaBubbleWrapper({message:t,classNames:n=["is-autoscroll-mutation-target"],children:r}){const{isSafari:s}=useDevice(),{design:{message_shape:i}}=useConfigContext();return jsxRuntimeExports.jsx(MessageMediaBubble,{shape:i,classNames:n,isReverse:t.isAuthorUser,isSafari:s,children:r})}function Audio$1({url:t}){return jsxRuntimeExports.jsxs("audio",{controls:!0,children:[jsxRuntimeExports.jsx("source",{src:t,type:"audio/ogg"}),jsxRuntimeExports.jsx("source",{src:t,type:"audio/mpeg"}),jsxRuntimeExports.jsx("source",{src:t,type:"audio/wav"}),"Your browser does not support the audio element."]})}const Link=dt.a`
  justify-content: flex-start;

  &.is-shape-rounded,
  &.is-shape-transparent {
    border-radius: ${borderRadiusRounded};
  }
`;function Document({url:t}){const{isIos:n}=useDevice(),{setIsOpen:r,setSrc:s}=useModalMediaContext(),{design:{message_shape:i},text:o}=useConfigContext(),l=messagesUtils.isSupportedDocumentType(t);return jsxRuntimeExports.jsx("p",{className:"content is-marginless",children:jsxRuntimeExports.jsxs(Link,{className:classNames(["button",`is-shape-${i}`]),href:t||null,onClick:l&&!n?u=>{u.preventDefault(),s(t),r(!0)}:void 0,rel:"noopener noreferrer",target:"_blank",children:[jsxRuntimeExports.jsx("span",{className:"icon pt-1 pl-1",children:jsxRuntimeExports.jsx(v,{fill:"currentColor",fillRule:null,height:"24",viewBox:"0 0 24 24",width:"24"})}),jsxRuntimeExports.jsx("span",{style:{maxWidth:"90%",overflow:"hidden",textOverflow:"ellipsis",direction:"rtl"},children:o.open_file})]})})}const VideoUI=dt.video`
  max-height: 400px;
`;function Video({url:t}){return jsxRuntimeExports.jsxs(VideoUI,{controls:!0,children:[jsxRuntimeExports.jsx("source",{src:t,type:"video/mp4"}),jsxRuntimeExports.jsx("source",{src:t,type:"video/ogg"}),jsxRuntimeExports.jsx("source",{src:t,type:"video/webm"}),"Your browser does not support the video tag."]})}function MessageDocumentWrapper({message:t}){const n=messagesUtils.isSupportedVideoType(t.url),r=messagesUtils.isSupportedAudioType(t.url);return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[n&&jsxRuntimeExports.jsx(MessageMediaBubbleWrapper,{message:t,children:jsxRuntimeExports.jsx(Video,{url:t.url})}),r&&jsxRuntimeExports.jsx(Audio$1,{url:t.url}),!n&&!r&&jsxRuntimeExports.jsx(MessageBubbleWrapper,{message:t,children:jsxRuntimeExports.jsx(Document,{url:t.url})})]})}const IframeStyled=dt.iframe`
  border-radius: 0.75rem 0.75rem 0.75rem 0.125rem;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;IframeStyled.displayName="IframeStyled";const IFRAME_WIDTH=640;function Iframe({className:t,contain:n,figureClassName:r,figureStyle:s={backgroundColor:"black",width:IFRAME_WIDTH,maxWidth:"100%"},ratio:i="16x9",rounded:o,size:l,src:u,style:c}){const[p,m]=reactExports.useState(!1);return jsxRuntimeExports.jsx("figure",{className:classNames({image:!0,[`is-${l}x${l}`]:!!l,[ratioClassName$1(i)??""]:!!i,[r??""]:!!r}),style:s,children:jsxRuntimeExports.jsx(IframeStyled,{allowFullScreen:!0,className:classNames({[t??""]:!!t,"is-rounded":o,"is-contain":n,"has-loaded":p,"is-overlay":!0}),frameBorder:"0",onLoad:()=>m(!0),src:u,style:c,title:"lb-iframe",type:"text/html"})})}function MessageIframeWrapper({message:t}){return jsxRuntimeExports.jsx(MessageMediaBubbleWrapper,{message:t,children:jsxRuntimeExports.jsx(Iframe,{src:t.getVideoUrl()})})}const ImageUI$1=dt(Image$3)`
  && img {
    /* I need specificity for this rule */
    width: auto;
  }
  img {
    max-width: ${t=>getUnitValue(t.theme.initial_vars.horizontal_unit,25)};
    max-height: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,25)};

    @media ${breakpoint.from_tablet} {
      max-width: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,87.5)};
      max-height: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,29)};
    }
  }
`;function Image$2({url:t,openModal:n=!0}){return jsxRuntimeExports.jsx(ImageUI$1,{figureStyle:{width:"auto",maxWidth:"auto"},openModal:n,src:t})}function MessageImageWrapper({message:t,openModal:n=!0}){return jsxRuntimeExports.jsx(MessageMediaBubbleWrapper,{message:t,children:t.url&&jsxRuntimeExports.jsx(Image$2,{openModal:n,url:t.url})})}let scriptRel,assetsURL,seen,InputButtonUI,ButtonEmoji,ButtonIcon;scriptRel="modulepreload",assetsURL=function(t){return"https://cdn.landbot.io/landbot-3/"+t},seen={},__vitePreload=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if((l=assetsURL(l))in seen)return;seen[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");return p.rel=u?"stylesheet":scriptRel,u||(p.as="script"),p.crossOrigin="",p.href=l,o&&p.setAttribute("nonce",o),document.head.appendChild(p),u?new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))}):void 0}))}return s.then(i=>{for(const o of i||[]){if(o.status!=="rejected")continue;const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o.reason,window.dispatchEvent(l),!l.defaultPrevented)throw o.reason}return t()})},InputButtonUI=t=>dt(t)`
  width: calc(50% - 0.5rem);
  transition: box-shadow 0.1s linear;

  @media ${breakpoint.from_small_tablet} {
    width: calc(33% - 0.5rem);

    &.is-four-cols {
      span.icon {
        font-size: 2rem !important;
      }
      width: calc(25% - 0.5rem);
    }
  }

  &.is-image-button {
    overflow: hidden;
    padding: 0 0 14px 0;
    position: relative;

    .image {
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      margin: 0;
    }

    .image .Media {
      transform: scale(1);
      transition: transform 0.2s;
    }

    &:hover .image .Media {
      transform: scale(1.1);
    }

    .input-button-label {
      display: flex;
      position: absolute;
      align-items: center;
    }
  }

  /* Button with image
     Layout horizontal, button content vertical */
  &.is-image-button:not(.is-flex-direction-column) {
    height: 65px;
    max-width: 400px;

    .image {
      display: flex;
      align-items: center;
      width: 100px;
      height: 100%;
      border-top-left-radius: $radius;
      border-bottom-left-radius: $radius;
    }

    .input-button-label {
      justify-content: flex-start;
      padding-left: 39px;
      top: 0;
      left: 100px;
      width: 100%;
      max-width: 300px;
      height: 100%;
    }
  }

  /* Button with image
     Layout vertical, button content horizontal */
  &.is-image-button.is-flex-direction-column {
    height: 160px;

    .image {
      width: 100%;
      height: 100px;
      border-top-right-radius: $radius;
    }

    .input-button-label {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      justify-content: center;
    }
  }

  /* Button with icon/emoji
     Layout horizontal, button content vertical */
  &.is-icon-button:not(.is-flex-direction-column),
  &.is-emoji-button:not(.is-flex-direction-column) {
    height: 84px;

    .icon {
      padding: 0 52px 0 37px;
    }

    .input-button-label {
      text-align: left;
    }
  }

  .input-button-label {
    width: 100%;

    .chains {
      margin-left: $horizontal-unit;
    }
  }
`,ButtonEmoji=({children:t})=>jsxRuntimeExports.jsx("span",{className:"icon is-marginless is-size-1",children:t}),ButtonIcon=({icon:t="",isBig:n})=>jsxRuntimeExports.jsx("span",{className:classNames({"icon fi is-marginless":!0,[t]:!0,"is-size-3":n})});function InputButtonWrapper({data:t={},className:n="",onClick:r,isAnimated:s,isDirectionColumn:i,isDisabled:o}){var N,L;const{label:l}=t,u=t.href&&utils$1.getHref(t.href),[c,p]=reactExports.useState(!1),m=(N=t==null?void 0:t.attachment)==null?void 0:N.type,y=(L=t==null?void 0:t.attachment)==null?void 0:L.value,$=m==="icon",S=m==="image",x=m==="emoji",h=!!u;return reactExports.useEffect(()=>{c&&setTimeout(()=>p(!1),200)},[c]),jsxRuntimeExports.jsxs(s$9,{className:classNames({"input-button":!0,[n]:!!n,"u-white-space-normal":!0,"is-image-button":S,"is-icon-button":$,"is-emoji-button":x,"is-flex-direction-column":i,"u-fullwidth":!i,"is-animated":s}),href:u,isAnchor:h,isDisabled:c||o,onClick:()=>{r(t),p(!0)},children:[$&&jsxRuntimeExports.jsx(ButtonIcon,{icon:y,isBig:!0}),x&&jsxRuntimeExports.jsx(ButtonEmoji,{children:y}),S&&jsxRuntimeExports.jsx(Image$3,{src:y}),jsxRuntimeExports.jsx("span",{className:"input-button-label",dangerouslySetInnerHTML:{__html:`${utils$1.bold(utils$1.escapeHTML(l??""))} ${h?'<ButtonIcon icon="chains" />':""}`}})]})}const InputButton=InputButtonUI(InputButtonWrapper),StyledCustomButtonContainer=dt.div`
  .custom-button,
  .input-button {
    border-radius: calc(var(--border_radius) * 0.1rem);
    border: ${t=>getUnitValueDivided(t.theme.initial_vars.vertical_unit,4)} solid transparent;
    padding: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,2)}
      ${t=>getUnitValue(t.theme.initial_vars.horizontal_unit,2)};
  }

  .custom-button:hover:not([disabled]),
  .input-button:hover:not([disabled]) {
    box-shadow:
      0 6px 21px -11px rgba(0, 0, 0, 0.29),
      0 13px 17px -16px rgba(47, 49, 72, 0.3);
  }
`,CustomButtons=reactExports.forwardRef(({className:t="",...n},r)=>jsxRuntimeExports.jsx(StyledCustomButtonContainer,{...n,ref:r,className:classNames({[t]:!!t,"custom-buttons":!String(t).includes("input-buttons"),buttons:!0})})),InputButtonsContainer$1=reactExports.forwardRef(({className:t="",children:n,...r},s)=>jsxRuntimeExports.jsx(CustomButtons,{...r,className:classNames({[t]:!!t,"input-buttons":!0}),ref:s,children:n})),InputButtonsContainer=dt(InputButtonsContainer$1)`
  align-items: stretch;

  .input-button {
    color: ${({theme:t})=>t.design.form_buttons_color};
    background-color: ${({theme:t})=>t.design.form_buttons_background_color};
    border-color: ${({theme:t})=>t.design.form_buttons_border_color};
  }

  .input-button.is-multiple {
    color: ${({theme:t})=>t.design.message_color_bot};
    background-color: ${({theme:t})=>t.design.message_shape==="transparent"?t.design.background_color:t.design.message_background_color_bot};
    border-color: transparent;

    &.is-selected {
      color: ${({theme:t})=>t.design.form_buttons_color};
      background-color: ${({theme:t})=>t.design.form_buttons_background_color};
      border-color: ${({theme:t})=>t.design.form_buttons_border_color};
      box-shadow:
        0 6px 21px -11px rgba(0, 0, 0, 0.29),
        0 13px 17px -16px rgba(47, 49, 72, 0.3);
    }
  }

  &.has-vertical-scroll {
    max-height: 180px;
    overflow-y: auto;

    @media ${breakpoint.from_tablet} {
      max-height: 300px;
    }
  }

  &.is-layout-vertical .input-button {
    max-width: 500px;
    margin: 0 0 3px 0;
  }
`,InputHeaderUI=dt.p`
  margin-bottom: ${({theme:{initial_vars:{vertical_unit:{qty:t,unit:n}}}})=>String(1.5*t)+n};
  color: ${({theme:t})=>t.design.form_help_color};
`;InputHeader=function({children:t}){return jsxRuntimeExports.jsx(InputHeaderUI,{className:"input-small-header is-size-7 is-uppercase is-unselectable",children:t})};const InputButtonsUI=dt.div`
  margin-top: ${t=>getUnitValueDivided(t.theme.initial_vars.vertical_unit,4)};

  @media ${breakpoint.from_tablet} {
    margin: ${t=>getUnitValueDivided(t.theme.initial_vars.vertical_unit,4)}
      auto 0 0;
  }

  @media ${breakpoint.mobile_only} {
    .has-margin-left {
      margin-left: calc(${t=>t.theme.avatar.mobile_width} + ${t=>getUnitValue(t.theme.initial_vars.horizontal_unit)})};
    }
  }

  .field .control input {
    background-color: ${({theme:t})=>t.design.form_inputs_background_color};
  }

  .InputButtons .button svg path,
  .InputButtons .custom-button svg path,
  .InputButtons .input-button svg path {
    fill: ${({theme:t})=>t.design.form_buttons_color};
  }
`;function InputButtons({help:t,buttons:n=[],alignment:r="horizontal",buttonsRef:s,onSubmit:i,searchInput:o,isAnimated:l}){return jsxRuntimeExports.jsxs(InputButtonsUI,{className:"InputButtons",children:[n.length>1&&jsxRuntimeExports.jsx(InputHeader,{children:t}),o&&jsxRuntimeExports.jsx("div",{className:"field has-addons",children:o}),jsxRuntimeExports.jsx(InputButtonsContainer,{className:classNames({"is-layout-vertical":r==="vertical","has-vertical-scroll":!!o,"has-margin-left":r!=="vertical"&&n.length===1}),ref:s,children:n.map(u=>jsxRuntimeExports.jsx(InputButton,{onClick:i,data:u,isAnimated:l,isDirectionColumn:r==="horizontal",className:classNames({"is-four-cols":n.length>=4})},u.payload))})]})}function WithAnimatedButtons({buttons:t=[],children:n,...r}){const s=reactExports.useRef(null),[i,o]=reactExports.useState(!1),{has_buttons_animation_on:l}=useHasAnimationOn();return reactExports.useEffect(()=>{if(!l||!t||!s.current||i)return()=>{};const u=Array.from(s.current.querySelectorAll(".is-animated"));return anime({targets:u,translateY:[20,0],opacity:[0,1],delay:anime.stagger(120,{from:"first"}),duration:300,easing:"easeInOutSine",complete(){o(!0)}}),()=>{anime.remove(u)}},[t,i,l]),reactExports.cloneElement(n,{buttons:t,buttonsRef:s,isAnimated:t.length<9&&!i&&l!==!1,...r})}function InputButtonsWrapper({onSubmit:t,animateOnSubmit:n,message:r}){const s=l=>{t({type:"button",message:l.label,payload:l.payload})},{text:i}=useConfigContext(),o=reactExports.useMemo(()=>r.getButtons(),[r]);return jsxRuntimeExports.jsx(WithAnimatedButtons,{buttons:o,children:jsxRuntimeExports.jsx(InputButtons,{alignment:r.buttonsAlignment,onSubmit:l=>{n?(u=>{anime({targets:[".InputInline .input-buttons .input-button"],translateY:[0,20],opacity:[1,0],duration:300,easing:"easeInOutSine",complete:()=>{s(u)}})})(l):s(l)},help:i.input_menu_help})})}const InputButtonsMultipleUI=dt.div`
  ${t=>t.$searchInput&&`
  max-width: 100%;
  `}

  .buttons-container-full-width {
    margin-bottom: 32px;

    .button,
    .input-button {
      padding: 20px;
      text-align: left;
      width: calc(50% - 0.5rem);
    }
  }
`;function InputButtonsMultiple({searchInput:t,help:n,buttons:r=[],onChange:s,disabled:i,onSubmit:o,sendLabel:l="Send",isAnimated:u,alignment:c="horizontal",buttonsRef:p}){return jsxRuntimeExports.jsxs(InputButtonsMultipleUI,{className:classNames({InputButtonsMultiple:!t,InputButtonsMultiSearch:!!t}),$searchInput:!!t,children:[r.length>1&&jsxRuntimeExports.jsx(InputHeader,{children:n}),t&&jsxRuntimeExports.jsx("div",{className:"field has-addons ",children:t}),r.length>0&&jsxRuntimeExports.jsx(InputButtonsContainer,{ref:p,className:classNames({"is-layout-vertical":c==="vertical","has-vertical-scroll":!!t}),children:r.map(m=>jsxRuntimeExports.jsx(InputButton,{className:classNames({"is-multiple":!0,"is-selected":m.isSelected,"is-four-cols":r.length>=4}),data:m,isAnimated:u,isDirectionColumn:c==="horizontal",isDisabled:m.isDisabled,onClick:y=>s(y,!y.isSelected)},m.payload))}),jsxRuntimeExports.jsx("div",{className:"field is-marginless",children:jsxRuntimeExports.jsx(l$4,{disabled:i,onClick:o,children:l})})]})}function InputButtonSearchInput({onChange:t,placeholder:n,value:r}){return jsxRuntimeExports.jsxs("div",{className:"control is-expanded has-icons-right",children:[jsxRuntimeExports.jsx("input",{className:"input js-auto-focus",onChange:t,placeholder:n,type:"search",value:r}),jsxRuntimeExports.jsx("div",{className:"icon is-right",children:jsxRuntimeExports.jsx(h$1,{})})]})}function WithSearch({buttons:t,children:n}){const{text:r}=useConfigContext(),[s,i]=reactExports.useState(""),[o,l]=reactExports.useState([]);reactExports.useEffect(()=>{l(t.filter(c=>!s||c.label.toLowerCase().indexOf(s.toLowerCase())>-1||c.isSelected))},[s,t]);const u={buttons:o,searchInput:jsxRuntimeExports.jsx(InputButtonSearchInput,{onChange:c=>i(c.target.value),placeholder:r.input_instant_search_help||"Filter the options",value:s})};return reactExports.cloneElement(n,u)}function InputButtonsMultipleWrapper({message:t,onSubmit:n,hasSearch:r}){const{text:s}=useConfigContext(),i=reactExports.useMemo(()=>t.getButtons().map((S,x)=>({...S,_id:x})),[t]),[o,l,u]=reactExports.useMemo(()=>{let S=1,x=i.length,h=s.input_multi_help;return t.buttonsMinOptions&&Number(t.buttonsMinOptions)<=x&&(S=Number(t.buttonsMinOptions)),t.buttonsMaxOptions&&Number(t.buttonsMaxOptions)>0&&(x=Number(t.buttonsMaxOptions)),h=s.input_multi_range_help.replace("@min_options",`${S}`).replace("@max_options",x===99?`${i.length}`:`${x}`),[S,x,h]},[i,t,s]),[c,p]=reactExports.useState([]),m=i.map(S=>{const x=c.includes(S._id);return{...S,isSelected:x,isDisabled:!x&&c.length===l}}),y=(S,x)=>{if(x&&c.length===l)return;const h=new Set(c);x?h.add(S._id):h.delete(S._id),p(Array.from(h))},$=()=>n({type:"structured_data",message:c.map(S=>m.find(x=>x._id===S)).map(S=>S==null?void 0:S.label).join(", "),data:{items:c.map(S=>m.find(x=>x._id===S)).map(S=>S==null?void 0:S.label),payloads:c.map(S=>m.find(x=>x._id===S)).map(S=>S==null?void 0:S.payload),payloads_str:c.map(S=>m.find(x=>x._id===S)).map(S=>S==null?void 0:S.payload).join(", ")}});return r?jsxRuntimeExports.jsx(WithSearch,{buttons:m,children:jsxRuntimeExports.jsx(WithAnimatedButtons,{children:jsxRuntimeExports.jsx(InputButtonsMultiple,{alignment:t.buttonsAlignment,disabled:c.length<o,help:u,onChange:y,onSubmit:$,sendLabel:s.send})})}):jsxRuntimeExports.jsx(WithAnimatedButtons,{buttons:m,children:jsxRuntimeExports.jsx(InputButtonsMultiple,{alignment:t.buttonsAlignment,disabled:c.length<o,help:u,onChange:y,onSubmit:$,sendLabel:s.send})})}function InputButtonsMultiSearchWrapper({message:t,onSubmit:n}){return jsxRuntimeExports.jsx(InputButtonsMultipleWrapper,{message:t,onSubmit:n,hasSearch:!0})}function InputButtonsSearchWrapper({message:t,onSubmit:n}){const{text:r}=useConfigContext(),s=reactExports.useMemo(()=>t.getButtons(),[t]);return jsxRuntimeExports.jsx(WithSearch,{buttons:s,children:jsxRuntimeExports.jsx(WithAnimatedButtons,{children:jsxRuntimeExports.jsx(InputButtons,{alignment:t.buttonsAlignment,onSubmit:i=>n({type:"button",message:i.label,payload:i.payload}),help:r.input_menu_help})})})}function useHeadScript(t){reactExports.useLayoutEffect(()=>{const n=document.createElement("script");return n.src=t,n.type="text/javascript",document.head.append(n),()=>n.remove()},[t])}function useHeadStyle(t,n){reactExports.useLayoutEffect(()=>{const r=document.createElement("style");return r.type="text/css",r.id=t,r.appendChild(document.createTextNode(n)),document.head.prepend(r),()=>{var s;(s=document.getElementById(t))==null||s.remove()}},[t,n])}function useHeadStylesheet(t){reactExports.useLayoutEffect(()=>{const n=document.createElement("link");return n.rel="stylesheet",n.href=t,document.head.append(n),()=>n.remove()},[t])}const ACTIONS={BOOKED:"booked",SKIPPED:"skipped"};function InputCalendly({message:t,onSubmit:n}){const{scheduling_url:r,button_message:s,skip_message:i}=t,o=i||"Skip";useHeadStylesheet("https://assets.calendly.com/assets/external/widget.css"),useHeadScript("https://assets.calendly.com/assets/external/widget.js"),useHeadStyle("calendly-dynamic-style",".calendly-overlay{z-index: 2147483000 !important;}");const l=reactExports.useCallback(u=>{if(u.data.event&&u.data.event.indexOf("calendly")===0)switch(u.data.event){case"calendly.profile_page_viewed":case"calendly.event_type_viewed":case"calendly.date_and_time_selected":return;case"calendly.event_scheduled":return n({type:MessageTypes.CALENDLY,action:ACTIONS.BOOKED,message:s,payload:u.data.payload}),void window.Calendly.closePopupWidget()}},[n,s]);return reactExports.useEffect(()=>(window.addEventListener("message",l),()=>{window.removeEventListener("message",l)}),[l]),jsxRuntimeExports.jsxs(MessageBubbleWrapper,{message:t,showText:!0,children:[jsxRuntimeExports.jsx("div",{className:"is-block has-text-centered",children:jsxRuntimeExports.jsx(c$a,{className:"is-fullwidth",onClick:()=>{window.Calendly.initPopupWidget({url:r})},label:s})}),jsxRuntimeExports.jsx("div",{className:"is-block has-text-centered mt-2",children:jsxRuntimeExports.jsx("a",{className:"is-inline-block py-2 px-4",onClick:()=>{n({type:MessageTypes.CALENDLY,action:ACTIONS.SKIPPED,message:o,payload:{}})},children:o})})]})}function useInputValue({messageError:t,originalValue:n,selectedValue:r,validate:s}){const i=t||"",o=n||"",l=r||"",[u,c]=reactExports.useState(""),[p,m]=reactExports.useState("");return reactExports.useEffect(()=>{m(i&&o===u?i:s&&o!==u?s(u):"")},[i,o,s,u]),reactExports.useEffect(()=>{c(l)},[l]),{error:p,setValue:c,value:u}}InputContainerWrapper=function({bubbleClassName:t="",children:n,className:r="",hasAutofocus:s=!0,hasNoBorder:i,hasSearchButton:o,helpText:l=null,message:u=null,onSubmit:c,prefix:p,renderAs:m,sendButtonType:y="inline",selectedValue:$="",showBubble:S=!0,submitOnEnter:x=!0,validate:h}){const N=$||u.default,L=reactExports.useMemo(()=>N,[N]),{error:pe,setValue:tt,value:me}=useInputValue({messageError:u==null?void 0:u.error,originalValue:L,selectedValue:N,validate:u.isInsideForm?null:h}),{text:st}=useConfigContext(),[xt,nt]=reactExports.useState(!1),{has_messages_animation_on:Et}=useHasAnimationOn(),At=reactExports.useCallback(()=>{pe===""&&(c==null||c({type:"text",message:me}))},[pe,me,c]);reactExports.useEffect(()=>(xt&&At(),()=>{nt(!1)}),[xt,At]);const Ct={name:u.name,onChange:_t=>tt(_t),onSubmit:At,value:me,hasAutofocus:s,hasNoBorder:!1,required:!!u.required&&!u.isInsideForm,...x&&{onKeyDown:_t=>{(_t.keyCode||_t.which)===13&&(_t.preventDefault(),me&&setTimeout(()=>{nt(!0)}))}}},bt=u.markRequired&&u.required&&u.label?"*":"";reactExports.isValidElement(n)&&!n.props.placeholder&&(Ct.placeholder=u&&u.getPlaceholder(st),u.markRequired&&u.required&&!bt&&Ct.placeholder&&(Ct.placeholder+="*"));const yt=u.help||(l!==null||u.isInsideForm?l:st.input_text_help),St=u.markRequired&&u.required&&!bt&&!Ct.placeholder&&yt?"*":"";return jsxRuntimeExports.jsx(MessageBubbleWrapper,{classNames:t,message:u,showBubble:S&&!u.isInsideForm,showText:!0,children:jsxRuntimeExports.jsx(y$1,{className:r,error:pe,hasNoBorder:i,hasSearchButton:o,help:yt&&`${yt}${St}`,isAnimateMessagesOn:Et,isRequired:u.required,label:u.label&&`${u.label}${bt}`,onSubmit:At,prefix:p,renderAs:m,sendButtonType:y,sendLabel:st.send,value:me,isMinimalMobile:!u.isInsideForm,children:reactExports.isValidElement(n)?reactExports.cloneElement(n,Ct):n})})},getCommonProperties=({hasNoBorder:t,message:n,onSubmit:r,sendButtonType:s})=>({hasNoBorder:t,message:n,onSubmit:r,sendButtonType:n.isInsideForm?null:s,hasAutofocus:n.isInsideForm?n.isFirstInput:void 0});function InputEmailWrapper(t){const{text:{error_input_email:n}}=useConfigContext();return jsxRuntimeExports.jsx(InputContainerWrapper,{className:"InputEmail",...getCommonProperties(t),validate:r=>inputUtils.validEmail(r,n),children:jsxRuntimeExports.jsx(r$h,{name:"email",type:"email"})})}const MAX_FILE_SIZE$1=1e7,ERROR_TYPES={MAX_SIZE:"max_size",MAXNUMBER_FILES:"maxnumber_files",FETCH:"fetch"};function useUploadFile$1(t){const[n,r]=reactExports.useState([]),[s,i]=reactExports.useState(null),[o,l]=reactExports.useState(!1),u=useCoreContext(),{text:c}=useConfigContext(),p=t===1?c.input_file_max_help.replace("@maxfiles",t):c.input_files_max_help.replace("@maxfiles",t),m=($,S)=>{switch($){case ERROR_TYPES.MAX_SIZE:return jsxRuntimeExports.jsx(l$a,{content:S.name,filesize:`${utils$1.bytesToMegaBytes(S.size)}MB`,setError:i});case ERROR_TYPES.MAXNUMBER_FILES:return jsxRuntimeExports.jsx(l$a,{content:jsxRuntimeExports.jsx("span",{className:"InputFile__Error-FileName is-overflow-ellipsis",children:p}),setError:i});case ERROR_TYPES.FETCH:return jsxRuntimeExports.jsx(l$a,{content:jsxRuntimeExports.jsx("span",{className:"InputFile__Error-FileName is-overflow-ellipsis",children:"Error! Please, try again."}),setError:i});default:return null}},y=$=>$.size>MAX_FILE_SIZE$1?(i(m(ERROR_TYPES.MAX_SIZE,$)),null):(l(!0),u.client.uploadFile({serverUrl:u.config.serverUrl,file:$,landbotToken:u.landbotToken,channelToken:u.config.channelToken}).then(({url:S})=>{const x={url:S,name:$.name,size:$.size,key:d.utils.utils.randomKey()};r(h=>[...h,x])}).catch(()=>{i(m(ERROR_TYPES.FETCH,null))}).finally(()=>l(!1)));return{uploadedFiles:n,removeUploadedFile:$=>{i(null);const{key:S}=$.target.dataset,x=n.findIndex(h=>h.key===S);r([...n.slice(0,x),...n.slice(x+1)])},error:s,isFetching:o,uploadFiles:$=>{i(null);const S=Object.values($);S.length+n.length>t?i(m(ERROR_TYPES.MAXNUMBER_FILES)):S.forEach(x=>{y(x)})},uploadFile:y,setError:i}}function InputFileInteraction(t){const{text:{input_file_instructions_help:n,input_files_instructions_help:r,input_file_help:s,input_files_help:i,select_file:o,select_files:l,send:u}}=useConfigContext(),c={input_file_instructions_help:n,input_files_instructions_help:r,input_file_help:s,input_files_help:i,select_file:o,select_files:l,send:u},[p,m]=reactExports.useState(!1),y=x=>{x.preventDefault(),m(!0)},$=x=>{x.preventDefault(),m(!1)},S=x=>{const{dataTransfer:h}=x;x.preventDefault(),m(!1),h.effectAllowed="none",h.dropEffect="none",t.onDropUpload(h.files)};return t.multiple?jsxRuntimeExports.jsx(g$2,{...t,dragOver:p,onDragLeave:$,onDragOver:y,onDrop:S,text:c}):jsxRuntimeExports.jsx(d$7,{...t,dragOver:p,onDragLeave:$,onDragOver:y,onDrop:S,text:c})}function InputFileWrapper(t){const{multiple:n}=t.message,r=n?6:1,{uploadedFiles:s,error:i,removeUploadedFile:o,isFetching:l,uploadFile:u,uploadFiles:c,setError:p}=useUploadFile$1(r);return jsxRuntimeExports.jsx(InputFileInteraction,{error:i,loading:l,multiple:n,onDropUpload:c,onRemoveFile:o,onSubmit:()=>n===!0?(()=>{const m=s.map($=>({url:$.url})),y=s.map($=>$.name).join(", ");t.onSubmit({type:"multiple_files",urls:m,message:y})})():(()=>{const m=s[0];t.onSubmit({type:"file",url:m.url,message:m.name})})(),setError:p,uploadedFiles:s,uploadFile:u,uploadFiles:c})}let autoComplete;const loadScript$1=(t,n,r)=>{const s=n.createElement("script");s.type="text/javascript",s.readyState?s.onreadystatechange=function(){s.readyState!=="loaded"&&s.readyState!=="complete"||(s.onreadystatechange=null,r())}:s.onload=()=>r(),s.src=t,n.getElementsByTagName("head")[0].appendChild(s)};async function handlePlaceSelect(t,n){t(autoComplete.getPlace().formatted_address),n(!0)}function handleScriptLoad(t,n,r,s){autoComplete=new t.google.maps.places.Autocomplete(r.current,{}),autoComplete.addListener("place_changed",()=>handlePlaceSelect(n,s))}function InputLocationWrapper(t){const{design:{google_api_key:n}}=useConfigContext(),{document:r,window:s}=useDocumentContext(),i=reactExports.useRef(null),[o,l]=reactExports.useState(""),[u,c]=reactExports.useState(!1);return reactExports.useEffect(()=>{const p=()=>handleScriptLoad(s,l,i,c);"google"in s?p():loadScript$1(`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=places`,r,p)},[n,s,r]),jsxRuntimeExports.jsx(InputContainerWrapper,{className:"InputLocation",selectedValue:o,submitOnEnter:u,...getCommonProperties(t),children:jsxRuntimeExports.jsx(r$h,{inputRef:i,type:"text"})})}const InputCheckbox=t=>{const{options:n}=t.message.extra;return jsxRuntimeExports.jsx(InputContainerWrapper,{...getCommonProperties(t),children:n.map(r=>jsxRuntimeExports.jsxs(i$5,{display:"flex",gap:12,children:[jsxRuntimeExports.jsx("input",{type:"checkbox",id:r.id,name:r.id,value:r.value}),jsxRuntimeExports.jsx("label",{htmlFor:r.id,children:r.label})]},r.id))})},InputNumberUI=dt.form`
  margin-bottom: 28px;
`;function InputNumberWrapper(t){const{text:n}=useConfigContext(),{message:r,message:{minValue:s,maxValue:i,prefix:o}}=t,l=n.input_number_help_min,u=n.input_number_help_max;return jsxRuntimeExports.jsx(InputContainerWrapper,{className:"InputNumber",prefix:o,renderAs:InputNumberUI,validate:c=>r.isValidNumber(c,l,u),...getCommonProperties(t),children:jsxRuntimeExports.jsx(r$h,{max:i,min:s,type:"number"})})}const InputRadio=t=>{const{options:n}=t.message.extra;return jsxRuntimeExports.jsx(InputContainerWrapper,{...getCommonProperties(t),children:n.map(r=>jsxRuntimeExports.jsxs(i$5,{display:"flex",gap:12,children:[jsxRuntimeExports.jsx("input",{type:"radio",id:r.id,name:t.message.name,value:r.value}),jsxRuntimeExports.jsx("label",{htmlFor:r.id,children:r.label})]},r.id))})},InputTextUI=dt.form`
  overflow: hidden;
`,InputTextDivUI=dt.div`
  overflow: hidden;
`;function InputTextWrapper(t){return jsxRuntimeExports.jsx(InputContainerWrapper,{className:"InputText",renderAs:t.message.isInsideForm?InputTextDivUI:InputTextUI,...getCommonProperties(t),validate:n=>t.message.isValidText(n),children:jsxRuntimeExports.jsx(r$h,{type:"text"})})}const InputTextLongUI=dt.form`
  overflow: hidden;

  &.is-animate-messages-on {
    animation-name: showTextarea;
    animation-duration: 0.7s;
    animation-timing-function: ease-out;
  }
`,TextareaComponent=dt(a$6)`
  && {
    max-height: initial;
  }
`;function InputTextLongWrapper(t){return jsxRuntimeExports.jsx(InputContainerWrapper,{className:"InputTextLong",renderAs:InputTextLongUI,...getCommonProperties({...t,sendButtonType:"button"}),helpText:"",validate:n=>t.message.isValidText(n),children:jsxRuntimeExports.jsx(TextareaComponent,{className:"InputTextLong__TextArea"})})}function InputUrlWrapper(t){return jsxRuntimeExports.jsx(InputContainerWrapper,{className:"InputUrl",...getCommonProperties(t),children:jsxRuntimeExports.jsx(r$h,{pattern:"^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",placeholder:"https://",required:!0,type:"url"})})}const InputAutocomplete$2=reactExports.lazy(()=>__vitePreload(()=>import("./chunks/ou8VLiGv-index.js"),__vite__mapDeps([0,1,2]))),InputDate$2=reactExports.lazy(()=>__vitePreload(()=>import("./chunks/DQgjcnD6-InputDate.js"),__vite__mapDeps([3,4,2,1]))),InputTel$2=reactExports.lazy(()=>__vitePreload(()=>import("./chunks/BRCuWr6L-InputTel.js"),__vite__mapDeps([5,1,2]))),INPUT_MAP_MULTI_QUESTION={default:null,[InputTypes.AUTOCOMPLETE]:InputAutocomplete$2,[InputTypes.DATE]:InputDate$2,[InputTypes.EMAIL]:InputEmailWrapper,[InputTypes.LOCATION]:InputLocationWrapper,[InputTypes.NUMBER]:InputNumberWrapper,[InputTypes.TEL]:InputTel$2,[InputTypes.TEXT]:InputTextWrapper,[InputTypes.TEXT_LONG]:InputTextLongWrapper,[InputTypes.URL]:InputUrlWrapper,[InputTypes.CHECKBOX]:InputCheckbox,[InputTypes.RADIO]:InputRadio},dateValidator=(t,n,{error_input_date:r})=>{const s=n.message.parseDate(t);return n.message.isValidDate(s,!0)?"":(r==null?void 0:r.replace(/@format/i,n.message.dateFormat))||""},numberValidator=(t,n,{input_number_help_min:r,input_number_help_max:s})=>n.message.isValidNumber(t,r,s),noValidator=()=>"",emailValidator=(t,n,{error_input_email:r})=>t?inputUtils.validEmail(t,r):"",phoneValidator=(t,n,{error_input_phone:r})=>t?inputUtils.validPhoneNumber(t,r):"",textValidator=(t,n)=>n.message.isValidText(t),allOptionsValidator=(t,n)=>{var l,u;const r=((u=(l=n.extra)==null?void 0:l.options)==null?void 0:u.map(c=>c.value))??[],s=Array.isArray(t),i=n.required,o=s&&r.length===t.length&&r.every(c=>t.includes(c));return!s||i&&!o?`You should select all options on: ${n.label}`:""},atLeastOneOptionValidator=(t,n)=>{var o,l;const r=((l=(o=n.extra)==null?void 0:o.options)==null?void 0:l.map(u=>u.value))??[],s=n.required,i=r.find(u=>u===t);return!s||i?"":`You should select at least one option on: ${n.label}`},INPUT_VALIDATORS={default:noValidator,[InputTypes.AUTOCOMPLETE]:noValidator,[InputTypes.DATE]:dateValidator,[InputTypes.EMAIL]:emailValidator,[InputTypes.LOCATION]:noValidator,[InputTypes.NUMBER]:numberValidator,[InputTypes.TEL]:phoneValidator,[InputTypes.TEXT]:textValidator,[InputTypes.TEXT_LONG]:noValidator,[InputTypes.URL]:noValidator,[InputTypes.CHECKBOX]:allOptionsValidator,[InputTypes.RADIO]:atLeastOneOptionValidator};function MultiQuestionInput({message:t}){const n=INPUT_MAP_MULTI_QUESTION[t.inputType]||INPUT_MAP_MULTI_QUESTION.default;return jsxRuntimeExports.jsx(n,{message:t})}const Row=dt.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`,parseDataForInput=(t,n)=>{var i,o;if(n.type!==InputTypes.CHECKBOX)return t[n.name];const r=((o=(i=n.extra)==null?void 0:i.options)==null?void 0:o.map(l=>l.id))??[],s=[];return r.forEach(l=>{l in t&&s.push(t[l])}),s};function parseFormData(t){const n=new FormData(t),r={};for(let[s,i]of n.entries())r[s]=i;return r}function validInput({input:t,reqErrorMessage:n,text:r,value:s}){const i=typeof s=="string"||t.type===InputTypes.CHECKBOX||t.type===InputTypes.RADIO?s:"";let o="";const l=!t.required||!!i;return!t.required&&!i||(l?o=(0,INPUT_VALIDATORS[t.message.inputType])(i,t,r):o=n),o}function validMultiquestionInputs(t,n,r="This field is required",s){let i=!0;const o=t.map(l=>({...l,inputs:l.inputs.map(u=>{const c=parseDataForInput(n,u),p=validInput({input:u,value:c,text:s,reqErrorMessage:r});return i=i&&!p,{...u,default:c,error:p,uiKey:p?d.utils.utils.randomKey():u.uiKey}})}));return[i,o]}function getMultiquestionDataWithLabels(t,n){const r=[];return t.forEach(({inputs:s})=>{s.forEach(i=>{var c;const o=i.message.inputType===InputTypes.TEL&&((c=i==null?void 0:i.extra)==null?void 0:c.hasCountryFlag),l=i.label||(i==null?void 0:i.placeholder)||(i==null?void 0:i.help)||"",u=o?n[i.name].replace(/[^0-9]+/g,""):parseDataForInput(n,i);if(u&&l){const p=i.type===InputTypes.CHECKBOX&&Array.isArray(u)?u.join(", "):u;typeof p=="string"&&p.length>0&&r.push({label:l,value:p})}})}),r}function formatMultiquestionData(t,n){const r={};return t.forEach(({inputs:s})=>{s.forEach(i=>{var l;const o=i.message.inputType===InputTypes.TEL&&((l=i==null?void 0:i.extra)==null?void 0:l.hasCountryFlag);r[i.name]=o?n[i.name].replace(/[^0-9]+/g,""):parseDataForInput(n,i)})}),r}function formatMultiquestionMessage(t,n){return getMultiquestionDataWithLabels(t,n).reduce((r,{label:s,value:i})=>`${r}
**${s}:** ${i}`,"").trim()}const wrapInputs=(t,n)=>t.map(r=>({...r,inputs:r.inputs.map(s=>({...s,message:_({...s,isInsideForm:!0,samurai:n})}))})),appendUIKeyToRows=t=>utils$1.appendUIKey(t).map(n=>({...n,inputs:utils$1.appendUIKey(n.inputs)}));function InputMultiQuestionWrapper({message:t,onSubmit:n}){const{text:r}=useConfigContext(),[s,i]=reactExports.useState([]);return reactExports.useEffect(()=>{i(t.rows?wrapInputs(appendUIKeyToRows(Object.values(t.rows)),t.samurai):[])},[t.rows,t.samurai]),jsxRuntimeExports.jsx(MessageBubbleWrapper,{message:t,showText:!0,children:jsxRuntimeExports.jsxs("form",{onSubmit:o=>{o.preventDefault();const l=parseFormData(o.target),[u,c]=validMultiquestionInputs(s,l,t.errorMessage,r);u?n({type:MessageTypes.STRUCTURED_DATA,message:formatMultiquestionMessage(s,l),data:formatMultiquestionData(s,l)}):i(c)},noValidate:!0,children:[s.map((o,l)=>jsxRuntimeExports.jsx(f$1,{disposition:o.disposition,inputMapper:(u,c)=>jsxRuntimeExports.jsx(MultiQuestionInput,{message:_({...u,isFirstInput:l===0&&c===0})}),inputsUid:o.inputs,markRequired:t.markRequired,responsiveLayout:t.responsiveLayout,samurai:t.samurai},o.uiKey)),jsxRuntimeExports.jsxs(Row,{children:[t.hasSkipButton&&jsxRuntimeExports.jsx(c$2,{onClick:o=>{o.preventDefault(),n({type:"button",message:t.skipButtonLabel,payload:"$skip"})},children:t.skipButtonLabel}),jsxRuntimeExports.jsx(l$4,{children:t.submitButtonLabel||r.send})]})]})})}const InputRatingButtonUI=dt.div`
  &:not(:first-child) .custom-button {
    padding-left: 0.4rem;
  }

  &:not(:last-child) .custom-button {
    padding-right: 0.4rem;
  }

  .InputRating__button-label {
    filter: grayscale(100%);
    opacity: 0.44;
    transition:
      filter 0.25s,
      opacity 0.25s;
  }

  .custom-button[data-color='1'] {
    .InputRating__button-label {
      filter: grayscale(0%);
      opacity: 1;
    }
  }

  .button {
    background-color: ${({theme:t})=>t.design.message_background_color_bot};
  }
`;function InputRating({buttons:t=[],cumulative:n,help:r,onSubmit:s}){const[i,o]=reactExports.useState(-1),l=t,u=reactExports.useMemo(()=>l.map(({label:c})=>jsxRuntimeExports.jsx(f$2,{children:c})),[l]);return jsxRuntimeExports.jsxs("div",{className:"InputRating",children:[jsxRuntimeExports.jsx(InputHeader,{children:r}),jsxRuntimeExports.jsx("div",{className:classNames({"field has-addons is-marginless is-inline-flex":!0,"is-cumulative":n}),style:{maxWidth:"100%"},children:l.map((c,p,m)=>jsxRuntimeExports.jsx(InputRatingButtonUI,{className:"InputRating__button control",children:jsxRuntimeExports.jsx(f$6,{className:classNames({"is-rounded":p===0||p===m.length-1}),"data-color":i>=p?"1":"0","data-key":p,onClick:()=>s==null?void 0:s(c),onMouseLeave:()=>o(-1),onMouseOver:()=>o(p),type:"button",disabled:!1,children:jsxRuntimeExports.jsx("span",{className:classNames({"InputRating__button-label":!0,"is-size-3":m.length<=5,"is-size-6":m.length>5}),children:u[p]})})},c.payload))})]})}function InputRatingWrapper({message:t,onSubmit:n}){const{text:r}=useConfigContext(),s=t.getButtons();return jsxRuntimeExports.jsx(InputRating,{buttons:s,onSubmit:i=>{if(t.isCumulative){const o=s.indexOf(i);n({type:"button",message:s.map(l=>l.label).slice(0,o+1).join(""),payload:i.payload})}else n({type:"button",message:i.label,payload:i.payload})},cumulative:t.isCumulative,help:r.input_rating_help})}function usePagination(t,n){const[r,s]=reactExports.useState(0),[i,o]=reactExports.useState(!1),[l,u]=reactExports.useState(!1),[c,p]=reactExports.useState([]);return reactExports.useEffect(()=>{p(t.slice(r*n,r*n+n)),o(r>0),u((r+1)*n<t.length)},[t,n,r]),reactExports.useEffect(()=>{s(0)},[n]),{currentPageItems:c,prevButtonHandler:i?()=>s(m=>m-1):null,nextButtonHandler:l?()=>s(m=>m+1):null}}const InputScaleUI=dt.div`
  position: relative;
  display:flex;
  flex-direction: column;

  @media ${breakpoint.from_tablet} {
    width: calc(100% - 50px);
  }
  .columns {
    align-items: start;
    align-self: center;
    flex-grow:1;

    @media ${breakpoint.from_tablet} {
      &.has-avatar, &:not(.has-arrows) {
        align-self: auto;
      }
      &.has-arrows.has-avatar {
        margin-left: -62px;
      }
    }

    .InputScale_Buttons__container {
        flex-direction: column;
        flex-grow:1;
        .InputScale_Buttons__row {
          display:flex;
          align-content: stretch;
        }
      }
  }

  .control {
    margin-left: 2px;
    margin-right: -1px;
    height: 100%;
    flex-grow: 1;
    border-radius: 0;
    border: 1px solid transparent;
    width: 50px;
    max-width: 50px;

    &:first-of-type {
      border-top-left-radius: 4px !important;
      border-bottom-left-radius: 4px !important;
    }

    &:last-of-type {
      border-top-right-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
    }

    &:hover {
      .InputScale__hoverelement {
        opacity: 1;
        transform: scaleY(1.5);
      }

      .InputScale__number {
        color: ${({theme:t})=>t.design.form_inputs_color};
      }
    }
  }

  .InputScale__number {
    color: ${({theme:t})=>t.design.form_buttons_color};
  }

  .InputScale__Tags {
    color: ${({theme:t})=>t.design.form_help_color};
    }
  }

  .InputScale__hoverelement {
    background-color: ${({theme:t})=>t.design.form_inputs_background_color};
  }
`,TagsUI=dt.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
  span:first-child {
    margin-right: 20px;
  }
  @media ${breakpoint.mobile_only} {
    span {
      white-space: normal;
      max-width: 100px;
    }
  }
`,HoverElementUI=dt.div`
  top: 0;
  z-index: 2;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 4px;
  transition:
    0.2s ease-in-out transform,
    0.2s ease-in-out opacity;
  box-shadow: 0 0 18px -3px rgba(0, 0, 0, 0.1);
`,NumberUI=dt.span`
  z-index: 5;
  position: relative;
  font-size: 17px;
`,ArrowButtonUI=dt.button`
  && {
    padding: 3;
    flex-grow: 0;
  }
  &.is-scale-arrow-right,
  &.is-scale-arrow-left {
    margin-top: 7%;
  }

  &.is-scale-arrow-right {
    margin-left: 10px;
  }
  &.is-scale-arrow-left {
    margin-right: 10px;
  }
`,ArrowButton$1=({onClick:t,isVisible:n=!1,isRightArrow:r=!1})=>jsxRuntimeExports.jsx(ArrowButtonUI,{className:classNames({"is-scale-arrow-left":!r,"is-scale-arrow-right":r,"is-invisible":!n,"button has-text-weight-bold is-inverted":!0}),onClick:t,type:"button",children:jsxRuntimeExports.jsx(m$a,{isRightArrow:r})});function InputScale({inputScaleRef:t,buttons:n=[],help:r,prevButtonHandler:s,nextButtonHandler:i,onSubmit:o,leftTag:l,rightTag:u,firstValue:c,lastValue:p}){const m=s||i,{design:{avatar_enabled:y}}=useConfigContext();return jsxRuntimeExports.jsxs(InputScaleUI,{className:"InputScale",ref:t,children:[jsxRuntimeExports.jsx(InputHeader,{children:r}),jsxRuntimeExports.jsxs("div",{className:classNames({"columns is-mobile":!0,"has-avatar":y,"has-arrows":m}),children:[m&&jsxRuntimeExports.jsx("div",{className:"column is-narrow",children:jsxRuntimeExports.jsx(ArrowButton$1,{isVisible:!!s,onClick:s})}),jsxRuntimeExports.jsxs("div",{className:"column is-narrow InputScale_Buttons__container",children:[jsxRuntimeExports.jsx("div",{className:"InputScale_Buttons__row ",children:n.map($=>jsxRuntimeExports.jsxs("button",{className:classNames({"control button has-text-weight-bold is-medium":!0}),onClick:()=>o==null?void 0:o($),type:"button",children:[jsxRuntimeExports.jsx(NumberUI,{className:"InputScale__number",children:$.label}),jsxRuntimeExports.jsx(HoverElementUI,{className:"InputScale__hoverelement"})]},$.payload))}),jsxRuntimeExports.jsxs(TagsUI,{className:"InputScale__Tags is-flex is-size-7 is-uppercase is-unselectable",children:[jsxRuntimeExports.jsx("span",{children:`${c} - ${l}`}),jsxRuntimeExports.jsx("span",{children:`${p} - ${u}`})]})]}),m&&jsxRuntimeExports.jsx("div",{className:"column is-narrow",children:jsxRuntimeExports.jsx(ArrowButton$1,{isRightArrow:!0,isVisible:!!i,onClick:i})})]})]})}const DESKTOP_BREAKPOINT=550,ARROW_WIDTH=60,BUTTON_WIDTH=50,calcIPP=(t,n)=>{const r=Math.floor(t/BUTTON_WIDTH),s=Math.floor((t-2*ARROW_WIDTH)/BUTTON_WIDTH);return t>DESKTOP_BREAKPOINT?10:r>=n?r:s};function InputScaleWrapper({message:t,onSubmit:n}){const{text:r}=useConfigContext(),s=reactExports.useMemo(()=>t.getButtons(),[t]),i=reactExports.useRef(null),[o,l]=reactExports.useState(0);reactExports.useEffect(()=>{i&&i.current&&l(calcIPP(i.current.clientWidth,s.length))},[i,s]);const{currentPageItems:u,prevButtonHandler:c,nextButtonHandler:p}=usePagination(s,o);return jsxRuntimeExports.jsx(InputScale,{inputScaleRef:i,buttons:u,leftTag:t.buttonsLeftTag,onSubmit:m=>n({type:"button",message:m.label,payload:m.payload}),help:r.input_menu_help,rightTag:t.buttonsRightTag,prevButtonHandler:c,nextButtonHandler:p,firstValue:s[0].label,lastValue:s[s.length-1].label})}const InputYesNoUI=dt.div`
  padding-bottom: 1.5rem;

  .custom-buttons {
    width: 50%;

    &:hover {
      .icon {
        transform: none;
      }
    }

    @media ${breakpoint.from_tablet} {
      width: 50%;
    }

    .custom-button {
      padding: 0;
      width: 60px;
      height: 60px;
      border-radius: 50%;

      &:hover {
        .InputYesNo__button-label {
          opacity: 1 !important;
        }
      }

      &:not(:last-child) {
        margin-right: 25px !important;
      }
    }

    .icon {
      font-size: 25px !important;
      transform: scale(0.9);
    }
  }

  .buttons .button {
    color: ${({theme:t})=>t.design.form_buttons_color};
    background-color: ${({theme:t})=>t.design.form_buttons_background_color};
    border-color: ${({theme:t})=>t.design.form_buttons_border_color};
  }

  .InputYesNo__button-label {
    color: ${({theme:t})=>t.design.form_help_color};
  }
`,ButtonLabelUI=dt.span`
  position: absolute;
  bottom: -1.5rem;
  font-size: 0.8rem !important;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0.7;
`;function InputYesNo({help:t,buttons:n=[],onSubmit:r,buttonsRef:s,isAnimated:i=!1}){const o=l=>{var p,m;const u=((p=l==null?void 0:l.attachment)==null?void 0:p.type)??null,c=((m=l==null?void 0:l.attachment)==null?void 0:m.value)??void 0;switch(u){case"icon":return jsxRuntimeExports.jsx(ButtonIcon,{icon:c,isBig:!0});case"emoji":return jsxRuntimeExports.jsx(ButtonEmoji,{children:c});case"image":return jsxRuntimeExports.jsx(Image$3,{className:"is-overlay",figureStyle:{position:"absolute"},rounded:!0,src:c});default:return null}};return jsxRuntimeExports.jsxs(InputYesNoUI,{className:"InputYesNo",children:[jsxRuntimeExports.jsx(InputHeader,{children:t}),jsxRuntimeExports.jsx("div",{className:"field is-marginless",children:jsxRuntimeExports.jsx(CustomButtons,{ref:s,children:n.map(l=>jsxRuntimeExports.jsxs(s$9,{className:classNames({"is-rounded":!0,"is-animated":i}),onClick:()=>r==null?void 0:r(l),children:[o(l),jsxRuntimeExports.jsx(ButtonLabelUI,{className:"InputYesNo__button-label is-size-7",children:l.label})]},l.payload))})})]})}function InputYesNoWrapper({message:t,onSubmit:n}){const{text:r}=useConfigContext(),s=t.getButtons();return jsxRuntimeExports.jsx(WithAnimatedButtons,{buttons:s,children:jsxRuntimeExports.jsx(InputYesNo,{onSubmit:i=>n({type:"button",message:i.label,payload:i.payload}),help:r.input_menu_help})})}const ReferralButton=dt.a`
  height: auto;
`;function InputReferral(){const{brand_name:t}=useConfigContext(),n=`https://landbot.io/powered-by?utm_source=${encodeURIComponent(t)}&utm_medium=landbot&utm_campaign=goodbye`;return jsxRuntimeExports.jsxs("div",{className:"InputReferral ",children:[jsxRuntimeExports.jsx(InputHeader,{children:"Want to create your own? It's easy, beautiful and free"}),jsxRuntimeExports.jsx("div",{className:"buttons",children:jsxRuntimeExports.jsxs(ReferralButton,{className:"button py-3 px-5",href:n,rel:"noopener noreferrer",target:"_blank",children:[jsxRuntimeExports.jsx("span",{className:"icon is-size-4",children:jsxRuntimeExports.jsx(P,{})}),jsxRuntimeExports.jsx("span",{className:"ml-3",children:"Create a Landbot"})]})})]})}const InputAutocomplete$1=reactExports.lazy(()=>__vitePreload(()=>import("./chunks/ou8VLiGv-index.js"),__vite__mapDeps([0,1,2]))),InputCards$1=reactExports.lazy(()=>__vitePreload(()=>import("./chunks/iUlCJQV5-index.js"),__vite__mapDeps([6,1,2]))),InputDate$1=reactExports.lazy(()=>__vitePreload(()=>import("./chunks/DQgjcnD6-InputDate.js"),__vite__mapDeps([3,4,2,1]))),InputForm$1=reactExports.lazy(()=>__vitePreload(()=>import("./chunks/NrFzNcau-InputForm.js"),__vite__mapDeps([7,4,2,1]))),InputTel$1=reactExports.lazy(()=>__vitePreload(()=>import("./chunks/BRCuWr6L-InputTel.js"),__vite__mapDeps([5,1,2]))),InputStripe=reactExports.lazy(()=>__vitePreload(()=>import("./chunks/B-JXHtKC-index.js"),__vite__mapDeps([8,1,2]))),INPUT_MAP={default:null,[InputTypes.AUTOCOMPLETE]:InputAutocomplete$1,[InputTypes.BUTTONS]:InputButtonsWrapper,[InputTypes.BUTTONS_MULTIPLE]:InputButtonsMultipleWrapper,[InputTypes.BUTTONS_SEARCH]:InputButtonsSearchWrapper,[InputTypes.BUTTONS_MULTI_SEARCH]:InputButtonsMultiSearchWrapper,[InputTypes.CALENDLY]:InputCalendly,[InputTypes.CARDS]:InputCards$1,[InputTypes.DATE]:InputDate$1,[InputTypes.FORM]:InputForm$1,[InputTypes.EMAIL]:InputEmailWrapper,[InputTypes.FILE]:InputFileWrapper,[InputTypes.LOCATION]:InputLocationWrapper,[InputTypes.MULTI_QUESTION]:InputMultiQuestionWrapper,[InputTypes.NUMBER]:InputNumberWrapper,[InputTypes.RATING]:InputRatingWrapper,[InputTypes.REFERRAL]:InputReferral,[InputTypes.SCALE]:InputScaleWrapper,[InputTypes.STRIPE]:InputStripe,[InputTypes.TEL]:InputTel$1,[InputTypes.TEXT]:InputTextWrapper,[InputTypes.TEXT_LONG]:InputTextLongWrapper,[InputTypes.URL]:InputUrlWrapper,[InputTypes.YES_NO]:InputYesNoWrapper};function inputMapper(t){return INPUT_MAP[t]||INPUT_MAP.default}function MessageInputWrapper({message:t}){const{customSubmitFn:n}=t,r=inputMapper(t.inputType),s=useCoreContext(),{setIsSubmitted:i,isSubmitted:o}=useSubmitStateContext();return reactExports.useEffect(()=>()=>{i(!1)},[i]),jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:!o&&jsxRuntimeExports.jsx(r,{onSubmit:l=>{let u=l;n&&typeof window[n]=="function"&&(u=window[n](l)),i(!0),s.events.emit(EVENTS$1.SEND_MESSAGE,u)},message:t})})}function MessageMediaDialog({message:t={}}){const n=messagesUtils.isSupportedImageType(t.url);return t.media_type==="image"?n?jsxRuntimeExports.jsx(MessageImageWrapper,{message:t}):jsxRuntimeExports.jsx(MessageDocumentWrapper,{message:t}):t.media_type==="iframe"?jsxRuntimeExports.jsx(MessageIframeWrapper,{message:t}):null}const getMessageText=(t,n)=>t.replace(/\{timeout\}/i,n);function useRedirect({message:t,timeout:n,redirectionURL:r}){const[s,i]=reactExports.useState(n),[o,l]=reactExports.useState(!1),[u,c]=reactExports.useState(getMessageText(t,s)),p=reactExports.useCallback(()=>{l(!1)},[]),m=reactExports.useCallback(()=>{i(n),l(!0)},[n]);return reactExports.useEffect(()=>{o&&s>0&&setTimeout(()=>{i(y=>y-1)},1e3)},[o,s]),reactExports.useEffect(()=>{s===0&&(p(),window.location.href=r),c(getMessageText(t,s))},[s,r,t,p,m]),{startRedirect:m,stopRedirect:p,timeMessage:u}}function MessageRedirect({message:t}){var p,m;const n=useCoreContext(),{url:r,evaluate:s}=t,i=((m=(p=t.extra)==null?void 0:p.redirect)==null?void 0:m.timeout)??3,o={message:t.messageText,timeout:i,redirectionURL:utils$1.getHref(r)},{startRedirect:l,stopRedirect:u,timeMessage:c}=useRedirect(o);return reactExports.useEffect(()=>{s&&(l(),n.events.once(EVENTS$1.SEND_MESSAGE,u))},[s,n.events,l,u]),jsxRuntimeExports.jsx(MessageText,{message:{...t,messageText:c}})}const ICONS={facebook:jsxRuntimeExports.jsx("span",{className:"icon",children:jsxRuntimeExports.jsx("svg",{viewBox:"0 0 24 24",style:{width:"100%"},children:jsxRuntimeExports.jsx("path",{fill:"#FFFFFF",d:"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"})})}),twitter:jsxRuntimeExports.jsx("span",{className:"icon",children:jsxRuntimeExports.jsx("svg",{viewBox:"0 0 24 24",style:{width:"100%"},children:jsxRuntimeExports.jsx("path",{fill:"#FFFFFF",d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"})})}),linkedin:jsxRuntimeExports.jsx("span",{className:"icon",children:jsxRuntimeExports.jsx("svg",{viewBox:"0 0 24 24",style:{width:"100%"},children:jsxRuntimeExports.jsx("path",{fill:"#FFFFFF",d:"M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"})})}),whatsapp:jsxRuntimeExports.jsx("span",{className:"icon",children:jsxRuntimeExports.jsx("svg",{viewBox:"0 0 24 24",style:{width:"100%"},children:jsxRuntimeExports.jsx("path",{fill:"#FFFFFF",d:"M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"})})})},COLORS={facebook:"#3b5998",twitter:"#1da1f2",linkedin:"#2E77B0",whatsapp:"#0DC143"},SocialButton=({className:t="",href:n,type:r,label:s})=>jsxRuntimeExports.jsxs("a",{className:classNames({button:!0,"social-button":!0,[t]:!!t}),href:n,style:{backgroundColor:COLORS[r],color:"white"},target:"_blank",rel:"noopener noreferrer",children:[ICONS[r],jsxRuntimeExports.jsx("span",{className:"social-button-label ",children:s})]}),SocialButtonUI=dt(SocialButton)`
  display: inline-flex;
  padding: 8px 10px;
  font-size: 0.75rem;

  .social-button-label {
    padding-top: 2px;
  }
`;function MessageReferral({message:t}){var s,i;const n=utils$1.getReferralUrl(utils$1.getHref(((i=(s=t.raw)==null?void 0:s.extra)==null?void 0:i.socialUrl)??""),t.description??""),r=jsxRuntimeExports.jsxs("p",{className:"buttons",children:[jsxRuntimeExports.jsx(SocialButtonUI,{type:"facebook",href:n.facebook,label:"Facebook"}),jsxRuntimeExports.jsx(SocialButtonUI,{type:"twitter",href:n.twitter,label:"Twitter"}),jsxRuntimeExports.jsx(SocialButtonUI,{type:"linkedin",href:n.linkedin,label:"LinkedIN"}),jsxRuntimeExports.jsx(SocialButtonUI,{type:"whatsapp",href:n.whatsapp,label:"Whatsapp"})]});return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[t.messageText&&(t.rich_text?jsxRuntimeExports.jsx("p",{className:"content is-marginless",style:{marginBottom:10},dangerouslySetInnerHTML:{__html:t.rich_text}}):jsxRuntimeExports.jsx("p",{style:{marginBottom:10},children:t.title||t.message})),r]})}function MessageReferralWrapper({message:t}){return jsxRuntimeExports.jsx(MessageBubbleWrapper,{message:t,children:jsxRuntimeExports.jsx(MessageReferral,{message:t})})}const IMAGE_WIDTH$2=300;function MessageDialog({message:t={},openModal:n=!0}){return jsxRuntimeExports.jsx(MessageBubbleWrapper,{message:t,children:jsxRuntimeExports.jsxs("div",{style:{width:t.url?IMAGE_WIDTH$2:null,maxWidth:"100%"},children:[t.url&&jsxRuntimeExports.jsx(Image$3,{figureStyle:{backgroundColor:"black",width:IMAGE_WIDTH$2,marginBottom:t.messageText?"1rem":null,maxWidth:"100%"},openModal:n,ratio:"16x9",src:t.url}),t.messageText&&jsxRuntimeExports.jsx("div",{className:"content is-marginless",dangerouslySetInnerHTML:{__html:t.messageText}})]})})}const GOOGLE_API_KEY="AIzaSyCjznqz7l3S1OQcQNJDPkG2e8-LWgVFukc",IMAGE_WIDTH$1=300;function MessageLocation({message:t}){const n=`https://maps.googleapis.com/maps/api/staticmap?center=${t.latitude},${t.longitude}&size=600x300&zoom=15&markers=color:red%7C${t.latitude},${t.longitude}&key=${GOOGLE_API_KEY}`,r=`https://www.google.com/maps/search/?api=1&query=${t.latitude},${t.longitude}`;return jsxRuntimeExports.jsx(MessageBubbleWrapper,{message:t,children:jsxRuntimeExports.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:jsxRuntimeExports.jsx(Image$3,{figureStyle:{width:IMAGE_WIDTH$1,marginBottom:t.message?"1rem":null,maxWidth:"100%"},ratio:"16x9",src:n,style:{backgroundColor:"gray",borderRadius:4}})})})}function MessageMultipleFilesDocument({message:t,fileIndex:n}){const{url:r}=t.files[n];return jsxRuntimeExports.jsx(MessageBubbleWrapper,{classNames:["is-inline-flex","mb-2"],message:t,children:jsxRuntimeExports.jsx("p",{className:"content is-marginless",children:jsxRuntimeExports.jsxs("a",{className:"button",href:r||null,rel:"noopener noreferrer",style:{justifyContent:"flex-start",maxWidth:"330px",textDecoration:"underline"},target:"_blank",children:[jsxRuntimeExports.jsx("span",{className:"icon",children:jsxRuntimeExports.jsx(v,{fill:"currentColor",fillRule:null,height:"24",rotate45:!1,viewBox:"0 0 24 24",width:"24"})}),jsxRuntimeExports.jsx("span",{style:{maxWidth:"90%",overflow:"hidden",textOverflow:"ellipsis",direction:"rtl"},children:r})]})})})}const ImageUI=dt(Image$3)`
  && img {
    /* I need specificity for this rule */
    width: auto;
  }
  img {
    max-width: ${t=>getUnitValue(t.theme.initial_vars.horizontal_unit,25)};
    max-height: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,25)};

    @media ${breakpoint.from_tablet} {
      max-width: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,87.5)};
      max-height: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,29)};
    }
  }
`;function MessageImage({message:t,fileIndex:n,openModal:r=!0}){const{url:s}=t.files[n];return jsxRuntimeExports.jsx(MessageMediaBubbleWrapper,{message:t,classNames:["is-inline-flex","mb-2"],children:s&&jsxRuntimeExports.jsx(ImageUI,{figureStyle:{width:"auto",maxWidth:"auto"},openModal:r,src:s})})}const getUuidFromUrl=t=>{const n=t.lastIndexOf("/"),r=t.lastIndexOf(".");return t.substring(n+1,r)};function MessageMultipleFiles({message:t}){const{files:n}=t,r=n.map((s,i)=>{const o=getUuidFromUrl(s.url);return s.type==="image"?jsxRuntimeExports.jsx(MessageImage,{message:t,fileIndex:i},o):jsxRuntimeExports.jsx(MessageMultipleFilesDocument,{message:t,fileIndex:i},o)});return jsxRuntimeExports.jsx("div",{className:"is-flex is-flex-direction-column is-align-items-flex-end",children:r})}const IMAGE_WIDTH=300;function MessageMultipleImages({message:t}){return jsxRuntimeExports.jsx(MessageBubbleWrapper,{message:t,children:jsxRuntimeExports.jsx("div",{style:{width:IMAGE_WIDTH,maxWidth:"100%"},children:t.urls.filter(Boolean).map((n,r,s)=>jsxRuntimeExports.jsx(Image$3,{figureStyle:{width:IMAGE_WIDTH,marginBottom:r!==s.length-1?3:null,maxWidth:"100%"},openModal:!0,ratio:"16x9",src:n,style:{backgroundColor:"gray",borderRadius:4}}))})})}function MessageTextWithInput({message:t}){const{text:n}=useConfigContext();return jsxRuntimeExports.jsx(MessageBubbleWrapper,{message:t,children:jsxRuntimeExports.jsxs("div",{children:[t.rich_text&&jsxRuntimeExports.jsx("div",{className:"content is-marginless",dangerouslySetInnerHTML:{__html:t.rich_text}}),!t.rich_text&&jsxRuntimeExports.jsx("p",{children:t.title||t.message}),jsxRuntimeExports.jsx(r$h,{name:"email",placeholder:inputUtils.getFieldPlaceholder({message:t.message,text:n}),type:"email"})]})})}const MESSAGE_MAP={[MessageTypes.BUTTON]:MessageText,[MessageTypes.CALENDLY]:MessageText,[MessageTypes.CARDS]:MessageText,[MessageTypes.DIALOG]:MessageDialog,[MessageTypes.DOCUMENT]:MessageDocumentWrapper,[MessageTypes.AUDIO]:MessageDocumentWrapper,[MessageTypes.VIDEO]:MessageDocumentWrapper,[MessageTypes.IFRAME]:MessageIframeWrapper,[MessageTypes.IMAGE]:MessageImageWrapper,[MessageTypes.INPUT]:MessageInputWrapper,[MessageTypes.MULTI_QUESTION]:MessageText,[MessageTypes.LOCATION]:MessageLocation,[MessageTypes.MEDIA_DIALOG]:MessageMediaDialog,[MessageTypes.MULTIPLE_IMAGES]:MessageMultipleImages,[MessageTypes.REDIRECT]:MessageRedirect,[MessageTypes.REFERRAL]:MessageReferralWrapper,[MessageTypes.STRIPE]:MessageText,[MessageTypes.STRIPE_INTENT]:MessageText,[MessageTypes.TEXT]:MessageText,[MessageTypes.MESSAGEWITHINPUT]:MessageTextWithInput,[MessageTypes.MULTIPLE_FILES]:MessageMultipleFiles,[MessageTypes.STRUCTURED_DATA]:MessageText,default:null};function messageMapper(t){return MESSAGE_MAP[t]||MESSAGE_MAP.default}function MessageWrapper({message:t,groupProps:n={isStart:!0,isEnd:!0,isLastMessage:!1,isInputInline:!1,isAvatarVisible:!1}}){const{isLastMessage:r,isInputInline:s}=n,i=useProactiveContext(),{failed:o,retryCb:l,timestamp:u,rich_text:c,isEval:p,isWelcome:m,isGhost:y,isInputBubbleStyled:$,isAuthorUser:S}=t,x=s?t.getInputInlineMessageType():t.getMessageType(r),h=x?messageMapper(x):null,N=!s||$,{design:{avatar_enabled:L,message_shape:pe}}=useConfigContext(),{has_messages_animation_on:tt}=useHasAnimationOn();useEvalScriptFromString(c,p);const me=useTypingState(t.isTyping,N),st=!t.hasInput&&me;return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[h&&jsxRuntimeExports.jsx(Message,{centerContent:jsxRuntimeExports.jsx(h,{message:t}),groupProps:n,hasLeftContent:!!L&&!i,isAnimateMessagesOn:tt&&r,isBubbleStyled:N,leftContent:!i&&L?jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(AvatarWrapper,{message:t}),st?jsxRuntimeExports.jsx(AvatarLoaderContainer,{children:jsxRuntimeExports.jsx(Loader,{})}):!S&&!m&&jsxRuntimeExports.jsx(MessageDateWrapper,{timestamp:u})]}):null,message:t,messageShape:pe,rightContent:S&&!y?jsxRuntimeExports.jsx(MessageDateWrapper,{timestamp:u}):null}),o&&!s&&jsxRuntimeExports.jsx(FailedMessageWrapper,{retryCb:l})]})}const BackButtonUI=dt.div`
  /******************************
    Desktop version
  *******************************/
  display: none;

  @media ${breakpoint.from_tablet} {
    display: block;
    padding-top: 20px;
  }

  /******************************
    Mobile version
  *******************************/
  &.BackButton--Mobile {
    @media ${breakpoint.from_tablet} {
      display: none;
    }

    @media ${breakpoint.mobile_only} {
      display: block;
    }

    height: ${t=>t.theme.footer.mobile_height};
    z-index: ${({theme:t})=>t.zIndex.BackButton__Mobile};

    @media ${breakpoint.small_mobile_only} {
      transform: scale(0.8);
      transform-origin: left;
    }
  }

  /*******************************
    SubComponents Styles - Desktop
  ********************************/
  .BackButton__Button.custom-button {
    height: 30px;
    width: 86px;
    opacity: ${t=>t.$isIos?1:0};
    background-color: transparent;
    transition:
      opacity 0.25s ease-in-out,
      padding 0.25s ease-in-out;
    border-radius: 1rem;
    border-width: 0;

    &:hover {
      padding-right: 3px;
      background-color: rgba(0, 0, 0, 0.1);
      border-width: 0;
      box-shadow: none;
    }

    ${t=>!t.$isIos&&`
      .InputInline:hover & {
        opacity: 1;
      }
    `}

    span {
      color: var(--form_help_color) !important;

      svg path {
        fill: var(--form_help_color) !important;
      }
    }
  }

  .BackButton__Label {
    text-transform: uppercase;
    font-size: ${t=>t.theme.font_sizes.size_7};
  }

  .BackButton__Icon {
    padding-right: 8px;
    font-size: ${t=>t.theme.font_sizes.size_7};

    .icon {
      transform: rotate(${t=>t.$isIos?"0":"180deg"});
      transition: transform 0.25s;
    }
    ${t=>!t.$isIos&&`
      .InputInline:hover & .icon {
        transform: rotate(0);
      }
    `}
  }

  /*******************************
    SubComponents Styles - Mobile
  ********************************/
  &.BackButton--Mobile {
    button.BackButton__Button.custom-button {
      background-color: white !important;
      box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3);
      height: 1.95rem;
      font-size: 13.5px;
      width: inherit;
      padding: 4px 16px;
      transition: transform 0.15s ease-in-out;
      border-radius: 4px;
      opacity: 1;

      &:hover {
        transform: translateY(-1px);
        box-shadow:
          0 0 1px 0 rgba(47, 48, 72, 0.3),
          0 3px 5px -5px rgba(47, 49, 73, 0.35);
      }

      .BackButton__Label {
        color: #6a6b7c !important;
        text-transform: none;
        font-size: 13.5px;
      }

      .BackButton__Icon {
        padding-right: 12px;
        .icon {
          transform: none;
        }
        svg path {
          fill: #2f3149 !important;
          font-size: 13.5px;
        }
      }
    }

    &:hover {
      .icon {
        transform: rotate(0deg);
      }
    }
  }
`;function BackButton({label:t="Back",onClick:n,containerClassName:r}){const{isIos:s}=useDevice();return jsxRuntimeExports.jsx(BackButtonUI,{className:classNames(["BackButton",r]),onClick:n,$isIos:s,children:jsxRuntimeExports.jsxs(s$9,{ariaLabel:"Back",className:"BackButton__Button",children:[jsxRuntimeExports.jsx("span",{className:"BackButton__Icon",children:jsxRuntimeExports.jsx("span",{className:"icon",children:jsxRuntimeExports.jsx(m$a,{})})}),jsxRuntimeExports.jsx("span",{className:"BackButton__Label is-unselectable",children:t})]})})}function BackButtonWrapper({containerClassName:t}){const{text:n}=useConfigContext(),{setIsSubmitted:r}=useSubmitStateContext(),s=useCoreContext();return jsxRuntimeExports.jsx(BackButton,{onClick:()=>{r(!0),s.events.emit(EVENTS$1.SEND_MESSAGE,{type:"button",message:n.back,payload:"#back"})},label:n.back,className:"BackButton",containerClassName:t})}function useHasBackButton(){const{messagesWrapper:t}=useMessagesContext(),n=useHasAgentAssigned(),r=t.getLastVisibleMessage(),s=t.getLastMessage(),{design:{back_button_visible:i}}=useConfigContext();return i&&!n&&!r.isEmpty()&&!r.isRevisit&&!r.isWelcome&&!r.isAuthorUser&&!s.isFinishBot}const InputInlineUI=dt(MsgGridContainer)`
  min-height: ${t=>t.theme.input.mobile_height};

  .input-small-header {
    margin-top: ${t=>getUnitValue(2*t.theme.initial_vars.vertical_unit)};
  }

  @media ${breakpoint.from_tablet} {
    min-height: ${t=>t.theme.input.height};
  }

  .Chat--hasInputFixed & {
    min-height: 0;
  }
`;function InputInline({children:t=null,inputInlineRef:n=null}){return jsxRuntimeExports.jsx(InputInlineUI,{classNames:["InputInline","is-relative","is-autoscroll-mutation-target"],containerRef:n,children:t})}const GdprLinkUI=dt.p`
  margin-top: 1em;
  font-size: 14px;
  animation: 'fade-in 1.5s ease-out';
  color: ${({theme:t})=>t.design.form_help_color};

  .GdprLink__link {
    margin-left: 0.2rem;
    text-decoration: underline;
  }
`;function GdprLink({text:t,link:n="",linkText:r}){return jsxRuntimeExports.jsxs(GdprLinkUI,{className:"GdprLink",children:[t,jsxRuntimeExports.jsx("a",{className:"GdprLink__link",href:n,target:"_blank",rel:"noopener noreferrer",children:r})]})}function NoConnectionMessage({children:t}){return jsxRuntimeExports.jsx(MsgGridFullWidthRow,{children:jsxRuntimeExports.jsx("div",{className:"columns is-centered",children:jsxRuntimeExports.jsx(l$5,{shape:DEFINITIONS.BUBBLES.SQUARED,children:t})})})}function InputInlineWrapper({isConnectionOk:t=!0,inputInlineRef:n}){const r=useHasAgentAssigned(),{messagesWrapper:s}=useMessagesContext(),i=useProactiveContext(),[o,l]=s.getLast2VisibleMessages(),{isWelcome:u}=l,{text:c,design:{avatar_enabled:p},is_legal_consent_enabled:m,privacy_policy_link:y,privacy_policy_link_text:$,privacy_policy_text:S}=useConfigContext(),x=useHasBackButton();return jsxRuntimeExports.jsxs(InputInline,{inputInlineRef:n,children:[r?null:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(MessageGrouper,{previousMessage:o,currentMessage:l,nextMessage:null,isInputInline:!0,children:jsxRuntimeExports.jsx(MessageWrapper,{message:l})}),t&&x&&jsxRuntimeExports.jsx(MsgGridCenterContentRow,{hasLeftColumn:p,children:jsxRuntimeExports.jsx(BackButtonWrapper,{})}),m&&u&&!i&&jsxRuntimeExports.jsx(MsgGridCenterContentRow,{hasLeftColumn:p,children:jsxRuntimeExports.jsx(GdprLink,{link:y,linkText:$,text:S})})]}),!t&&jsxRuntimeExports.jsx(NoConnectionMessage,{children:c.error_inline_connection_message})]})}const AgentAssignationMessageUI=dt.span`
  margin-left: 34px;
`,NotificationIconUI=dt.span`
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  font-size: 23px;
  margin-left: -1px;
  position: absolute;
  margin-top: -4px;
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: 2;
  transform-origin: 70% 70%;
`,LineSeparatorUI=dt.hr`
  background: transparent;
  ${t=>lt`
      margin: 0 auto ${getUnitValue(t.theme.initial_vars.vertical_unit,3)};
    `}

  border-top: 1px dashed rgba(0, 0, 0, 0.16);
`,HTOMsgGridFullWidthRow=({className:t="",children:n})=>jsxRuntimeExports.jsx(MsgGridFullWidthRow,{classNames:["htomessage",t],children:n}),HTOMessageUI=dt(HTOMsgGridFullWidthRow)`
  .MessageBubble {
    padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  }
`,AgentAssignationMessage=({agentName:t=""})=>{const{text:n}=useConfigContext(),r=n.hto_assignation_message.includes("@agent"),s=n.hto_assignation_message.split("@agent");return jsxRuntimeExports.jsxs(AgentAssignationMessageUI,{children:[s[0],r&&jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx("b",{className:"htomessage__AgentName",children:t}),"\xA0",s[1]]})]})};function MessageEvent({action:t="assign",agents:n={},agent_id:r}){var o;const s=t==="assign",i={name:((o=n==null?void 0:n[r])==null?void 0:o.name)??""};return jsxRuntimeExports.jsxs(HTOMessageUI,{children:[jsxRuntimeExports.jsx(LineSeparatorUI,{className:"htomessage__lineseparator u-fullwidth-avoiding-container"}),s?jsxRuntimeExports.jsxs(l$5,{shape:DEFINITIONS.BUBBLES.SQUARED,children:[jsxRuntimeExports.jsx(NotificationIconUI,{"aria-label":"wave",className:"htomessage__notificationIcon",role:"img",children:jsxRuntimeExports.jsx(f$3,{})}),"\xA0",jsxRuntimeExports.jsx(AgentAssignationMessage,{agentName:i.name})]}):null]})}function MessageEventWrapper({message:t}){const n=useAgentsContext(),{action:r,agent_id:s}=t;return jsxRuntimeExports.jsx(MessageEvent,{agents:n,action:r,agent_id:s})}function Messages({children:t}){return jsxRuntimeExports.jsx(MsgGridContainer,{classNames:["Messages","is-autoscroll-mutation-target"],children:t})}function MessagesWrapper(){const{messagesWrapper:t}=useMessagesContext();return jsxRuntimeExports.jsx(Messages,{children:t.getSupportedMessages().map((n,r,s)=>n.type===MessageTypes.EVENT?jsxRuntimeExports.jsx(MessageEventWrapper,{message:n},n.key):jsxRuntimeExports.jsx(MessageGrouper,{previousMessage:s[r-1],currentMessage:n,nextMessage:s[r+1],children:jsxRuntimeExports.jsx(MessageWrapper,{message:n})},n.ui_key||n.key))})}const NewMessageMutatingElement=dt.div`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;function ChatWrapper({bodyRef:t}){const{isFetching:n,status:r}=useInitCore(),s=useOnlineStatus(),{hasHeader:i,hideHeader:o}=useHasHeader(),l=useHasPersistentMenu(),u=useHasAgentAssigned(),c=reactExports.useRef(null),p=reactExports.useRef(null),m=reactExports.useRef(null),{lastTimestamp:y,lastUserMessageKey:$}=useMessagesContext();useAnimateAvatar(),useAutoScroll(c,p,t,useHeaderStickyness()),useLLMScroll(),useAutoFocus();const{showScrollButton:S,scrollToBottom:x,onScroll:h}=useScrollBottomButton({chatRef:m});return jsxRuntimeExports.jsxs(Chat,{hasAgentAssigned:u,hasHeader:i||o,hasPersistentMenu:l,isConnectionOk:s&&r,chatRef:m,onScroll:h,scrollBottomButton:jsxRuntimeExports.jsx(ScrollBottomButton,{visible:S,onClick:x}),children:[n?jsxRuntimeExports.jsx(ChatLoaderContainer,{children:jsxRuntimeExports.jsx(Loader,{})}):jsxRuntimeExports.jsxs("div",{id:"ChatMessages",className:"js-llm-scroll-helper",children:[jsxRuntimeExports.jsx(LoadMoreWrapper,{}),jsxRuntimeExports.jsx(MessagesWrapper,{}),jsxRuntimeExports.jsx(AwaitLoader,{}),jsxRuntimeExports.jsx(InputInlineWrapper,{inputInlineRef:c,isConnectionOk:s&&r}),jsxRuntimeExports.jsx(Spacer,{hasInputFixed:u,spacerRef:p})]}),jsxRuntimeExports.jsx(NewMessageMutatingElement,{className:"js-new-message-mutating-element",children:y}),jsxRuntimeExports.jsx(NewMessageMutatingElement,{className:"js-new-user-message-mutating-element",children:$})]})}const BodyUI=dt.div`
  && {
    z-index: ${({theme:t})=>t.zIndex.body};
    overflow: hidden;

    ${()=>useModeContext()===MODES.NATIVE?`height: auto;
         min-height: 100vh;
      `:"height: 100%;"}
  }
`;function Body$1({className:t,bodyRef:n,children:r}){return jsxRuntimeExports.jsx(BodyUI,{className:classNames({Body:!0,[t]:!!t}),ref:n,children:r})}function BodyWrapper(){const t=reactExports.useRef(null);return jsxRuntimeExports.jsx(Body$1,{bodyRef:t,children:jsxRuntimeExports.jsx(ChatWrapper,{bodyRef:t})})}const InputFullWidthUI=dt.div`
  z-index: ${({theme:t})=>t.zIndex.InputFullWidth};
  position: relative;
  bottom: 0;
  text-align: center;
  margin: 0 auto;
  width: 100%;

  @media ${breakpoint.from_tablet} {
    min-height: 100px;
    background-color: transparent;
    bottom: 4px;
  }

  @media ${breakpoint.mobile_only} {
    box-shadow: 0 -1px 1px 0 rgba(47, 49, 73, 0.08);
    max-height: 96px;
  }

  .InputFullWidth__Container {
    position: relative;
  }

  .InputFullWidth__Content {
    z-index: ${({theme:t})=>t.zIndex.InputFullWidth};
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 700px;
    position: relative;

    @media ${breakpoint.from_tablet} {
      height: auto;
      min-height: 100%;
    }

    .Input--Text,
    .Input--Text .field {
      height: 100%;
    }

    > input,
    > textarea {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }

  .InputText__SendButton {
    @media ${breakpoint.mobile_only} {
      height: 60px !important;
    }
  }

  .InputText {
    overflow: visible;
    position: relative;
    box-shadow: 0 0 60px -17px rgba(0, 0, 0, 0.07);
  }

  .InputText textarea {
    line-height: 24px;
    max-height: 96px !important;

    @media ${breakpoint.mobile_only} {
      padding: 1rem 7.3rem 1rem 1.25rem;
      border: hidden;
    }
  }

  .InputText textarea:not(:focus) {
    border-color: transparent;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.2) !important;

    @media ${breakpoint.mobile_only} {
      box-shadow: none !important;
    }
  }

  .hu-images-preview__container {
    border: hidden;

    @media ${breakpoint.from_tablet} {
      height: 60px;
      max-height: 96px;
      border-radius: 4px;
      border: 2px solid var(--form_inputs_border_color);
      background-color: var(--textarea_background);
    }
  }

  .hu-images-preview {
    flex: 1;
    display: flex;
    padding: 4px;
    max-width: 100%;
    max-height: 100%;
    margin-right: 10px;
    box-sizing: border-box;
  }

  .thumbnail {
    display: inline-block;
    height: 50px;
    width: 50px;
    background-size: cover;
    position: relative;
    margin-right: 2px;
    margin-bottom: 2px;
  }

  .thumbnail-button {
    cursor: pointer;
    pointer-events: auto;
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
  }
`;function InputFullWidth({isactive:t,input:n}){return jsxRuntimeExports.jsx(InputFullWidthUI,{className:classNames({InputFullWidth:!0,"InputFullWidth--is-Active":t}),children:jsxRuntimeExports.jsx("div",{className:"InputFullWidth__Container",children:jsxRuntimeExports.jsx("div",{className:"InputFullWidth__Content",children:n})})})}const MAX_FILE_SIZE=1e7;function useUploadFile(){const[t,n]=reactExports.useState(null),[r,s]=reactExports.useState(""),[i,o]=reactExports.useState(!1),l=useCoreContext();return{uploadedFile:t,removeUploadedFile:()=>{n(null)},error:r,isFetching:i,uploadFile:u=>u.size<=MAX_FILE_SIZE?(o(!0),l.client.uploadFile({serverUrl:l.config.serverUrl,file:u,landbotToken:l.landbotToken,channelToken:l.config.channelToken}).then(({url:c})=>{n({url:c,name:u.name,size:u.size})}).catch(c=>{s("Error!"),console.error(c)}).then(()=>o(!1))):(s("MAX. 10MB"),Promise.reject(new Error(`Size limit exceeded: "${u.size}" > "${MAX_FILE_SIZE}"`)))}}function ImagesPreview({images:t=[],removeImage:n}){return jsxRuntimeExports.jsx("div",{className:"hu-images-preview__container",children:jsxRuntimeExports.jsx("div",{className:"hu-images-preview",children:t.map((r,s)=>jsxRuntimeExports.jsx("div",{className:"thumbnail",style:r.url?{backgroundImage:`url(${r.url})`}:{},children:jsxRuntimeExports.jsx("div",{className:"thumbnail-button",children:jsxRuntimeExports.jsx("svg",{className:"hu-fill_accent",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",x:"3650",y:"3688",viewBox:"0 0 610 610",onClick:()=>n(s),children:jsxRuntimeExports.jsx("path",{d:"M387.128,170.748L306,251.915l-81.128-81.167l-54.124,54.124L251.915,306l-81.128,81.128l54.085,54.086L306,360.086 l81.128,81.128l54.086-54.086L360.086,306l81.128-81.128L387.128,170.748z M522.38,89.62 c-119.493-119.493-313.267-119.493-432.76,0c-119.493,119.493-119.493,313.267,0,432.76 c119.493,119.493,313.267,119.493,432.76,0C641.873,402.888,641.873,209.113,522.38,89.62z M468.295,468.295 c-89.62,89.619-234.932,89.619-324.551,0c-89.62-89.62-89.62-234.932,0-324.551c89.62-89.62,234.931-89.62,324.551,0 C557.914,233.363,557.914,378.637,468.295,468.295z"})})})},r.name))})})}const EmojiPicker$2=reactExports.lazy(()=>__vitePreload(()=>import("./chunks/CpHdeJQ9-emoji-picker-react.esm.js"),__vite__mapDeps([9,2,1]))),InputAddonsUI=dt.ul`
  top: 0;
  right: 51px;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  @media ${breakpoint.mobile_only} {
    right: 45px;
  }
`,AddonItemUI=dt.button`
  border: 0;
  opacity: 0.7;
  background: transparent;
  cursor: pointer;

  svg path {
    fill: var(--message_color_bot);
  }
`,AddonEmojisUI=dt(AddonItemUI)`
  font-size: 1.3rem;
`,StyledEmojiContainer=dt.div`
  position: absolute;
  bottom: 62px;
  right: 0px;
`;function InputAddOns({onSelectEmoji:t,uploadFile:n,hasAttachButton:r}){const{document:s}=useDocumentContext(),i=reactExports.useRef(null),[o,l]=reactExports.useState(!1);return reactExports.useEffect(()=>{const u=c=>{i.current&&!i.current.contains(c.target)&&l(!1)};return o?s.addEventListener("mousedown",u):s.removeEventListener("mousedown",u),()=>{s.removeEventListener("mousedown",u)}},[s,o]),jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs(InputAddonsUI,{className:"inputaddons",children:[r&&jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx(AttachButton,{uploadFile:n})}),jsxRuntimeExports.jsx("li",{children:jsxRuntimeExports.jsx(EmojiButton,{onClick:()=>{l(!o)}})})]}),jsxRuntimeExports.jsx(StyledEmojiContainer,{ref:i,children:o&&jsxRuntimeExports.jsx(reactExports.Suspense,{children:jsxRuntimeExports.jsx(EmojiPicker$2,{onEmojiClick:u=>t(u)})})})]})}const InputFileHiddenUI=dt.input`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`,AttachButton=({uploadFile:t})=>jsxRuntimeExports.jsxs(AddonItemUI,{className:"inputaddons__addonitem inputaddons__filebutton is-relative",type:"button",children:[jsxRuntimeExports.jsx(InputFileHiddenUI,{onChange:n=>t(n.target.files[0]),type:"file"}),jsxRuntimeExports.jsx(v,{})]}),EmojiButton=({onClick:t})=>jsxRuntimeExports.jsx(AddonEmojisUI,{className:"inputaddons__addonitem inputaddons__emojisbutton",onClick:t,type:"button",children:jsxRuntimeExports.jsx("span",{"aria-label":"slightly_smiling_face",role:"img",children:jsxRuntimeExports.jsx(E$2,{})})}),IconSendButtonUI=dt.button`
  width: 60px !important;
  pointer-events: auto !important;
  opacity: 1;

  > * {
    transition: opacity 0.2s, transform 0.2s;
  }

  &:hover > * {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.4;
  }

  @media ${breakpoint.mobile_only} {
    width: 42px !important;
    transform: scale(0.85);
    margin-right: 7px;
    padding-right: 0;
  }
}
`;function IconSendButton({onClick:t,disabled:n,children:r,hasError:s}){let i;return i=r||(s?jsxRuntimeExports.jsx("span",{"aria-label":"\u26A0\uFE0F",className:"is-size-4",role:"img",children:"\u26A0\uFE0F"}):jsxRuntimeExports.jsx(s$6,{})),jsxRuntimeExports.jsx(IconSendButtonUI,{className:"input-icon-send-button button is-text icon is-right",disabled:n||s,onClick:t,type:"button",children:i})}const InputHTOHelpTextUI=dt.p`
  right: 0;
  bottom: ${t=>getUnitValue(t.theme.initial_vars.vertical_unit,-3)};
  position: absolute;
  color: ${({theme:t})=>t.design.form_help_color};
`;function InputHTOHelpText({hiddenWhenFullWidth:t=!1,children:n}){return jsxRuntimeExports.jsx(InputHTOHelpTextUI,{className:classNames({"input-help-text is-hidden-mobile is-size-7 is-pulled-right is-uppercase is-unselectable":!0,"is-hidden":t}),children:n})}function InputHTO({help:t,placeholder:n,onChange:r,onSelectEmoji:s,onFileUploadedChange:i,onSubmit:o,hasAddOns:l,hasNoBorder:u,disabled:c=!1,value:p=""}){const{uploadedFile:m,uploadFile:y,removeUploadedFile:$}=useUploadFile();reactExports.useEffect(()=>{i==null||i(m)},[m,i]);const S=m?jsxRuntimeExports.jsx(ImagesPreview,{images:[m],removeImage:$}):jsxRuntimeExports.jsx("textarea",{className:"textarea js-auto-focus",onChange:x=>r(x.target.value),onKeyDown:x=>{(x.keyCode||x.which)===13&&(x.shiftKey||(x.preventDefault(),p&&!c&&o()))},placeholder:n,rows:1,value:p});return jsxRuntimeExports.jsxs("div",{className:classNames({"u-no-border":u,InputText:!0}),children:[jsxRuntimeExports.jsx("div",{className:"field has-addons is-marginless",children:jsxRuntimeExports.jsxs("div",{className:"control is-expanded has-icons-right",children:[S,l&&!m&&jsxRuntimeExports.jsx(InputAddOns,{hasAttachButton:p==="",onSelectEmoji:x=>s(x),uploadFile:y}),jsxRuntimeExports.jsx(IconSendButton,{disabled:c||p===""&&m===null,onClick:()=>{c||(o(),$())}})]})}),jsxRuntimeExports.jsx(InputHTOHelpText,{hiddenWhenFullWidth:p!=="",children:t})]})}const useDisabledFixedInput=()=>{const{messagesWrapper:t}=useMessagesContext(),n=useHasAgentAssigned(),r=t.getLastMessage().isAuthorUser;return!n&&r};function InputFullWidthWrapper({onSubmit:t=()=>{}}){const[n,r]=reactExports.useState({}),s=useDisabledFixedInput(),{text:i}=useConfigContext(),o=u=>{r({type:"text",message:u})},l=reactExports.useCallback(u=>{r(u?{type:"file",url:u.url,message:u.name}:c=>({type:"text",message:c.type==="file"?"":c.message}))},[]);return jsxRuntimeExports.jsx(InputFullWidth,{input:jsxRuntimeExports.jsx(InputHTO,{disabled:s,help:i.input_text_help,placeholder:i.text_input_placeholder,value:n.message,onChange:u=>o(u),onSelectEmoji:u=>(c=>{const p=n.message||"";o(p+c.emoji)})(u),onFileUploadedChange:l,onSubmit:()=>(t(n),void r({})),hasAddOns:!0})})}const LandbotLogo=()=>jsxRuntimeExports.jsxs("svg",{width:"84",height:"26",viewBox:"0 0 84 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[jsxRuntimeExports.jsxs("g",{"clip-path":"url(#clip0_4171_1951)",children:[jsxRuntimeExports.jsx("path",{d:"M8.49979 20.9553C6.9305 20.9553 5.39626 20.4911 4.09009 19.6211C2.78392 18.7511 1.76416 17.5141 1.1591 16.0659C0.554034 14.6176 0.390695 13.0227 0.689629 11.4819C0.988564 9.94099 1.73642 8.52295 2.83911 7.40614C3.57084 6.65822 4.44378 6.06309 5.40728 5.65529C6.37079 5.24748 7.40567 5.03512 8.45187 5.03052H8.50139C9.94568 5.03015 11.3629 5.42263 12.6013 6.16595C13.8397 6.90927 14.8527 7.97546 15.5319 9.25037C16.2111 10.5253 16.5308 11.9609 16.4569 13.4036C16.383 14.8463 15.9183 16.2418 15.1124 17.4406C15.0174 17.581 14.9802 17.7527 15.0086 17.9199C15.1133 18.5078 15.3112 19.0751 15.5948 19.6006L15.7817 19.9456C15.8023 19.9841 15.8135 20.0269 15.8143 20.0705C15.8151 20.1142 15.8056 20.1574 15.7864 20.1966C15.7672 20.2358 15.7389 20.2698 15.7039 20.2959C15.6689 20.322 15.6283 20.3394 15.5852 20.3466L15.1971 20.4089C14.8997 20.4573 14.5991 20.4824 14.2978 20.484H14.2547C13.62 20.4817 12.99 20.3737 12.3907 20.1645C12.3214 20.1404 12.2485 20.128 12.1751 20.1278C12.0805 20.1276 11.9871 20.1489 11.9019 20.1901C10.8527 20.6851 9.70779 20.9441 8.54771 20.9489L8.49979 20.9553Z",fill:"white"}),jsxRuntimeExports.jsx("path",{d:"M9.92585 11.7437C9.92902 12.0265 9.84807 12.3039 9.69327 12.5406C9.53848 12.7773 9.31684 12.9627 9.0565 13.0731C8.79617 13.1835 8.50889 13.2141 8.23116 13.1608C7.95343 13.1076 7.69779 12.973 7.49671 12.7741C7.29563 12.5753 7.15818 12.3211 7.10184 12.0439C7.0455 11.7668 7.0728 11.4791 7.18027 11.2175C7.28774 10.9559 7.47054 10.7321 7.70543 10.5746C7.94033 10.4171 8.21672 10.333 8.4995 10.333C8.68577 10.332 8.87041 10.3676 9.0429 10.438C9.21539 10.5083 9.37233 10.6119 9.50478 10.7429C9.63723 10.8739 9.74259 11.0297 9.81484 11.2014C9.88708 11.3731 9.92481 11.5574 9.92585 11.7437Z",fill:"#33405E"}),jsxRuntimeExports.jsx("path",{d:"M10.0175 16.824C9.92637 16.7089 9.79342 16.6346 9.6477 16.6173C9.50197 16.5999 9.3553 16.6409 9.23967 16.7313C9.03126 16.8915 8.77473 16.9763 8.51193 16.972C8.24913 16.9676 7.99556 16.8743 7.79256 16.7073C7.68657 16.6171 7.55125 16.5687 7.41208 16.5714C7.27292 16.574 7.13953 16.6275 7.03706 16.7217C6.96098 16.7937 6.90693 16.8859 6.8812 16.9874C6.85547 17.0889 6.85911 17.1957 6.8917 17.2953C6.92912 17.4022 6.99683 17.496 7.08657 17.5652C7.48584 17.8909 7.98364 18.0717 8.4988 18.0781C9.01396 18.0844 9.51608 17.9161 9.9233 17.6004C9.98079 17.556 10.0289 17.5007 10.0648 17.4376C10.1007 17.3744 10.1237 17.3048 10.1325 17.2327C10.1413 17.1606 10.1356 17.0875 10.1159 17.0176C10.0961 16.9477 10.0627 16.8824 10.0175 16.8256V16.824Z",fill:"#34405F"}),jsxRuntimeExports.jsx("path",{d:"M8.49867 8.13776C7.78711 8.14595 7.09387 8.36451 6.50623 8.76591C5.91858 9.16731 5.46278 9.73362 5.19621 10.3935C4.92964 11.0535 4.86421 11.7775 5.00815 12.4746C5.1521 13.1716 5.49899 13.8105 6.00515 14.3108C6.51132 14.8111 7.15414 15.1504 7.8527 15.2861C8.55126 15.4218 9.27434 15.3477 9.93092 15.0733C10.5875 14.7988 11.1482 14.3362 11.5425 13.7437C11.9368 13.1512 12.1471 12.4553 12.1468 11.7435C12.1409 10.7816 11.7533 9.86131 11.0691 9.18514C10.385 8.50897 9.46044 8.13223 8.49867 8.13776ZM8.49867 14.2597C8.00277 14.2541 7.51961 14.1018 7.11001 13.8221C6.7004 13.5425 6.38264 13.1479 6.19671 12.688C6.01078 12.2282 5.96498 11.7236 6.06508 11.2377C6.16518 10.7519 6.40671 10.3065 6.75927 9.95767C7.11183 9.6088 7.55967 9.37202 8.04645 9.27712C8.53323 9.18222 9.03719 9.23344 9.49494 9.42434C9.95268 9.61523 10.3438 9.93728 10.6189 10.3499C10.8941 10.7626 11.0412 11.2475 11.0415 11.7435C11.0377 12.4144 10.7677 13.0563 10.2909 13.5281C9.81405 14 9.16941 14.2631 8.49867 14.2597Z",fill:"#ED4078"}),jsxRuntimeExports.jsx("path",{d:"M16.32 19.7778C15.9713 19.2487 15.7228 18.6601 15.5869 18.0412C15.5697 17.9664 15.5674 17.8889 15.5803 17.8132C15.5932 17.7375 15.6209 17.6652 15.6619 17.6003C16.5379 16.2089 17.0005 14.5971 16.9956 12.9529C16.9855 10.7067 16.0859 8.55602 14.4939 6.97175C12.9019 5.38749 10.7472 4.49871 8.50143 4.5H8.44872C6.82432 4.5087 5.23648 4.98311 3.87344 5.86696C2.5104 6.75082 1.42933 8.00707 0.758393 9.48677C0.0874567 10.9665 -0.145208 12.6076 0.0879825 14.2155C0.321173 15.8234 1.01044 17.3308 2.07407 18.5588C2.86984 19.4838 3.85631 20.2256 4.96577 20.7333C6.07522 21.241 7.28138 21.5025 8.50143 21.5H8.54615C9.7319 21.4935 10.9036 21.2428 11.9882 20.7635C12.1047 20.7121 12.2358 20.7047 12.3572 20.7427C12.9755 20.9274 13.6174 21.0211 14.2627 21.0207H14.2963C14.8538 21.0191 15.4087 20.9434 15.9462 20.7954C16.1149 20.7483 16.2584 20.6369 16.3459 20.4852C16.4333 20.3335 16.4579 20.1535 16.4142 19.9839C16.3954 19.9101 16.3634 19.8403 16.32 19.7778V19.7778ZM14.9112 19.8976C14.1234 19.9958 13.3236 19.9127 12.5728 19.6548C12.2764 19.5511 11.951 19.5683 11.6672 19.7027C10.6891 20.1646 9.6214 20.4057 8.53976 20.4088H8.50143C7.0382 20.412 5.60684 19.9815 4.3881 19.1716C3.16937 18.3616 2.21792 17.2086 1.65393 15.8582C1.08993 14.5077 0.938686 13.0204 1.21928 11.584C1.49988 10.1476 2.19974 8.82663 3.23048 7.78785C3.91262 7.09303 4.72576 6.54041 5.62284 6.16198C6.51991 5.78355 7.48311 5.58682 8.4567 5.58317H8.50143C9.84517 5.58285 11.1637 5.94794 12.316 6.63938C13.4683 7.33082 14.4109 8.3226 15.0431 9.50859C15.6753 10.6946 15.9732 12.0302 15.9049 13.3725C15.8367 14.7148 15.4048 16.0132 14.6557 17.129C14.4767 17.391 14.4084 17.7131 14.4656 18.0252C14.572 18.6041 14.7596 19.1651 15.023 19.6915C15.0339 19.712 15.0396 19.7349 15.0395 19.7581C15.0394 19.7813 15.0336 19.8042 15.0225 19.8246C15.0114 19.845 14.9954 19.8624 14.976 19.8751C14.9566 19.8878 14.9343 19.8956 14.9112 19.8976V19.8976Z",fill:"#34405F"}),jsxRuntimeExports.jsx("path",{d:"M23.4514 17.0809H29.2382V19.3575H21.0635V6.63428H23.4594L23.4514 17.0809Z",fill:"#33405E"}),jsxRuntimeExports.jsx("path",{d:"M36.6754 10.5901H38.6895V19.3576H36.6003L36.4518 18.0141C35.9471 18.9854 34.9216 19.5637 33.5608 19.5637C31.5274 19.5637 29.4941 17.9965 29.4941 14.9739C29.4941 11.9512 31.5274 10.4111 33.5608 10.4111C34.9408 10.4111 35.9662 10.9895 36.4694 11.9784L36.6754 10.5901ZM36.4135 14.9739C36.4135 13.3763 35.257 12.4736 34.1773 12.4736C32.8532 12.4736 31.8277 13.4434 31.8277 14.9739C31.8277 16.5411 32.8723 17.4917 34.1773 17.4917C35.2954 17.4917 36.4135 16.6721 36.4135 14.9739V14.9739Z",fill:"#33405E"}),jsxRuntimeExports.jsx("path",{d:"M39.6035 19.3578V14.3765C39.6035 12.0632 41.0778 10.4033 43.7069 10.4033C46.336 10.4033 47.7927 12.0632 47.7927 14.3765V19.3578H45.4415V14.565C45.4415 13.2774 44.8633 12.4754 43.7069 12.4754C42.5505 12.4754 41.9722 13.2742 41.9722 14.565V19.3578H39.6035Z",fill:"#33405E"}),jsxRuntimeExports.jsx("path",{d:"M55.3572 6.63428H57.7068V19.3575H55.5617L55.4131 18.0139C54.91 18.9853 53.9021 19.5636 52.5381 19.5636C50.5415 19.5636 48.5273 17.9964 48.5273 14.9737C48.5273 11.9511 50.5447 10.411 52.5413 10.411C53.8462 10.411 54.8349 10.9526 55.3572 11.8488V6.63428ZM55.3748 14.9737C55.3748 13.2755 54.2567 12.4735 53.1562 12.4735C51.8688 12.4735 50.8625 13.4065 50.8625 14.9737C50.8625 16.5409 51.8688 17.4915 53.1562 17.4915C54.2567 17.4915 55.3748 16.6719 55.3748 14.9737Z",fill:"#33405E"}),jsxRuntimeExports.jsx("path",{d:"M67.8149 14.9737C67.8149 17.9964 65.8008 19.5636 63.8042 19.5636C62.4433 19.5636 61.4355 18.9853 60.9291 18.0139L60.7838 19.3575H58.6387V6.63428H60.9882V11.8392C61.5105 10.9446 62.4992 10.4014 63.8042 10.4014C65.8008 10.411 67.8149 11.9511 67.8149 14.9737ZM65.4829 14.9737C65.4829 13.4065 64.4942 12.4735 63.1893 12.4735C62.0887 12.4735 60.9691 13.2723 60.9691 14.9737C60.9691 16.6751 62.0871 17.4915 63.1893 17.4915C64.4942 17.4915 65.4829 16.5409 65.4829 14.9737V14.9737Z",fill:"#33405E"}),jsxRuntimeExports.jsx("path",{d:"M68.3721 14.9739C68.3721 12.381 70.3287 10.4111 73.0504 10.4111C75.7722 10.4111 77.732 12.381 77.732 14.9739C77.732 17.5667 75.7738 19.5637 73.0504 19.5637C70.3271 19.5637 68.3721 17.5667 68.3721 14.9739ZM75.4 14.9739C75.4 13.4993 74.4113 12.4561 73.0488 12.4561C71.6864 12.4561 70.6993 13.4993 70.6993 14.9739C70.6993 16.4484 71.688 17.4917 73.0488 17.4917C74.4097 17.4917 75.4 16.466 75.4 14.9739Z",fill:"#33405E"}),jsxRuntimeExports.jsx("path",{d:"M84.3151 12.4736H81.7595V15.7391C81.7595 16.8765 82.1684 17.399 83.344 17.399C83.4558 17.399 83.7353 17.399 84.0899 17.3798V19.2969C83.6413 19.4276 83.177 19.4964 82.7099 19.5014C80.7325 19.5014 79.3908 18.308 79.3908 16.0506V12.4736H77.8047V10.59H79.3924V7.62329H81.7611V10.59H84.3167L84.3151 12.4736Z",fill:"#33405E"})]}),jsxRuntimeExports.jsx("defs",{children:jsxRuntimeExports.jsx("clipPath",{id:"clip0_4171_1951",children:jsxRuntimeExports.jsx("rect",{width:"84",height:"26",fill:"white"})})})]}),TextItemUI=dt.div`
  font-size: 13.5px;
  color: #6a6b7c;
  line-height: 1;
`,StyledLogo=dt.span`
  margin: 0 0 0 8px;

  svg {
    width: 100%;
    height: 100%;
  }
`,ButtonUI=dt.a`
  background: white;
  box-shadow: 0 0 1px 0 rgba(47, 48, 72, 0.3);
  padding: 8px 15px;
  border-radius: 3px;
  height: 1.95rem;
  transition: transform 0.15s ease-in-out;

  &:hover {
    box-shadow:
      0 0 1px 0 rgba(47, 48, 72, 0.3),
      0 3px 5px -5px rgba(47, 49, 73, 0.35);
    transform: translateY(-1px);
  }

  /* stylelint-disable */
  &[data-tooltip]::before {
    font-family:
      var(--font_family),
      BlinkMacSystemFont,
      -apple-system,
      Segoe UI,
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      Fira Sans,
      Droid Sans,
      Helvetica Neue,
      Helvetica,
      Arial,
      sans-serif;
    background-color: #2f3048;
    font-size: 13px;
  }
  /* stylelint-enable */

  &[data-tooltip]::before,
  &[data-tooltip]::after {
    margin-top: -9px;
  }

  &,
  &[data-tooltip]::after {
    border-top-color: #2f2f47;
  }

  &[data-tooltip]::before,
  &[data-tooltip]::after {
    transition: opacity 0.25s ease-in-out;
    transition-delay: 0.35s;
  }
`,ContainerUI=dt.div`
  @media ${breakpoint.mobile_only} {
    margin: 0 auto;
    max-width: 700px;
    text-align: left;
    height: ${t=>t.theme.footer.mobile_height};
  }
`,BrandingUI=dt.div`
  width: 100%;
  text-align: center;
  z-index: ${({theme:t})=>t.zIndex.Branding};

  @media ${breakpoint.mobile_only} {
    margin: 0 auto;
    width: auto;
  }
  @media ${breakpoint.small_mobile_only} {
    transform: scale(0.8);
  }

  ${({$hasInputFixed:t})=>t?lt`
          margin-bottom: 10px;
        `:lt`
          margin-bottom: 20px;
        `}
`;function Branding({referralUrl:t,hasToolTipRight:n,hasInputFixed:r,isMobile:s}){return jsxRuntimeExports.jsx(BrandingUI,{className:classNames({Branding:!0,"has-tooltip-right":n,"has-input-fixed":r}),$hasInputFixed:r,children:jsxRuntimeExports.jsx(ContainerUI,{className:"Branding__Container is-inline-flex",children:jsxRuntimeExports.jsxs(ButtonUI,{className:"button Branding__Button",href:t,target:"_blank",rel:"noopener noreferrer","data-tooltip":s?null:"Build a chatbot with no code \u{1F916}",children:[jsxRuntimeExports.jsx(TextItemUI,{className:"Branding__Text Branding__TextItem",children:"Made with"}),jsxRuntimeExports.jsx(StyledLogo,{className:"Branding__Logo Branding__TextItem is-inline-flex",children:jsxRuntimeExports.jsx(LandbotLogo,{})}),jsxRuntimeExports.jsx("span",{className:"Branding__Background"})]})})})}function BrandingWrapper({hasInputFixed:t,hasToolTipRight:n}){const{isMobile:r}=useDevice(),{brand_name:s}=useConfigContext(),i=`https://landbot.io/powered-by?utm_source=${encodeURIComponent(s)}&utm_medium=landbot&utm_campaign=header`;return jsxRuntimeExports.jsx(Branding,{referralUrl:i,hasToolTipRight:n,hasInputFixed:t,isMobile:r})}const useShowFixedInput=()=>{const{messagesWrapper:t}=useMessagesContext();return t.getLastBrandMessage().hasFixedInput()},FooterUI=dt.footer`
  z-index: ${({theme:t})=>t.zIndex.footer}; /* The input icon and the input fixed have a (z-index: 4) */
  bottom: 0;
  max-height: ${t=>t.theme.footer.max_height.desktop};
  width: 100%;
  pointer-events: none;
  a,
  button,
  input,
  textarea,
  ${StyledEmojiContainer} {
    pointer-events: auto;
  }

  ${()=>useModeContext()===MODES.NATIVE?`position: fixed;
         left: 0;
      `:"position: absolute;"}

  @media ${breakpoint.mobile_only} {
    max-height: ${t=>t.theme.footer.max_height.mobile};
    background-color: rgba(0, 0, 0, 0.02);
  }

  ${({$hasInputFixed:t})=>t&&lt`
      max-height: ${n=>n.theme.footer.max_height.desktop_hto};

      @media ${breakpoint.mobile_only} {
        max-height: ${n=>n.theme.footer.max_height.mobile_hto};
      }
    `}
`;function Footer({hasInputFixed:t,isConnectionOk:n=!0,children:r}){return jsxRuntimeExports.jsx(FooterUI,{className:classNames({Footer:!0,"Footer--hasInputFixed":t,"are-disabled":!n}),$hasInputFixed:t,children:r})}const FooterRowUI=dt.div`
  display: flex;
  padding: 8px 12px;
`;function FooterWrapper(){const{branding:t}=useConfigContext(),n=useCoreContext(),r=useHasAgentAssigned(),[s,i]=reactExports.useState(!0),o=useHasBackButton(),l=useShowFixedInput();return reactExports.useEffect(()=>{const u=c=>{i(!!c)};return n.events.on(EVENTS$1.DATABASE_CONNECTION,u),()=>{n.events.off(EVENTS$1.DATABASE_CONNECTION,u)}},[n.events]),r||t||o||l?jsxRuntimeExports.jsxs(Footer,{hasInputFixed:r||l,isConnectionOk:s,children:[(s&&o||t)&&jsxRuntimeExports.jsxs(FooterRowUI,{className:"Footer__Row",children:[s&&o&&jsxRuntimeExports.jsx(BackButtonWrapper,{containerClassName:"BackButton--Mobile"}),t&&jsxRuntimeExports.jsx(BrandingWrapper,{hasInputFixed:r||l})]}),(r||l)&&jsxRuntimeExports.jsx(FooterRowUI,{className:"Footer__Row is-paddingless",children:jsxRuntimeExports.jsx(InputFullWidthWrapper,{onSubmit:u=>{n.events.emit(EVENTS$1.SEND_MESSAGE,u)}})})]}):null}function CloseButtonWrapper(){const t=useCoreContext();return jsxRuntimeExports.jsxs(s$9,{ariaLabel:"close",className:"Header__NavigationButton Header__NavigationButton--Close delete",onClick:()=>t.events.emit(EVENTS$1.WIDGET_CLOSE),children:[jsxRuntimeExports.jsx("span",{"aria-hidden":"true"}),jsxRuntimeExports.jsx("span",{"aria-hidden":"true"})]})}function OffsetMenuLauncherWrapper(){const{setIsOpen:t}=useOffsetMenuContext();return jsxRuntimeExports.jsxs(s$9,{ariaLabel:"Open Menu",className:"Header__NavigationButton Header__NavigationButton--Menu is-relative",onClick:()=>t(!0),children:[jsxRuntimeExports.jsx("span",{"aria-hidden":"true"}),jsxRuntimeExports.jsx("span",{"aria-hidden":"true"}),jsxRuntimeExports.jsx("span",{"aria-hidden":"true"})]})}const onClickItem=t=>{t.action==="keyword"&&(t.events.emit(EVENTS$1.SEND_MESSAGE,{type:"button",message:t.text,payload:t.payload}),t.setDisabled(!0),setTimeout(()=>t.setDisabled(!1),500)),t.closeMenu()},PersistentMenuButton=t=>{const{item:n,className:r,isVerticalVersion:s}=t;return reactExports.createElement(s$9,{...t,className:classNames({"button--PersistentMenu is-overflow-ellipsis":!0,"is-transparent":!s&&n.style==="text",[r]:!0}),href:n.href,isAnchor:!0,key:n.payload,label:n.text,onClick:()=>onClickItem(n)})},PersistentMenuButtonUI=dt(PersistentMenuButton)`
  padding: 10px 16px;
  border-radius: calc(var(--border_radius) * 0.1rem);
  justify-content: flex-start;
  max-width: 250px;

  @media ${breakpoint.mobile_only} {
    max-width: 50%;
  }

  .label {
    font-size: ${t=>t.theme.header.font_size};
    width: 100%;
  }

  &:hover {
    border-color: transparent;
    ${backgroundColor("var(--header_text)",.1)}
  }

  &.is-transparent {
    color: ${({theme:t})=>t.design.header_text};
  }

  ${t=>t.isVerticalVersion&&`
    margin-bottom: 2px;
    margin-right: 0;
    border-radius: 3px;
    max-width: 100% !important;

    &:first-child {
      border-radius: 16px 16px 3px 3px;
    }

    &:last-child {
      border-radius: 3px 3px 16px 16px;
    }
`}
`,margin_x_value=t=>getUnitValue(t.theme.initial_vars.horizontal_unit,1.25),PersistentMenuUI=dt.nav`
  flex: 0;
  order: 1;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-basis: auto;
  box-shadow: none;
  position: relative;
  align-items: center;

  @media ${breakpoint.from_tablet} {
    padding: 0;
    border: initial;
    background-color: transparent;
  }

  &:not(.PersistentMenu--VerticalVersion) {
    @media ${breakpoint.from_tablet} {
      margin: 0 ${margin_x_value};
    }
  }

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  ${t=>t.verticalVersion&&`
    width: 100%;
  `}
`;function PersistentMenu(t){return jsxRuntimeExports.jsx(PersistentMenuUI,{"aria-expanded":t.ariaExpanded,className:classNames({PersistentMenu:!0,"navbar-menu":!0,"PersistentMenu--VerticalVersion":t.isVerticalVersion}),id:"navigation__persistent__menu",children:jsxRuntimeExports.jsx("div",{className:classNames({"is-vertically-centered is-horizontally-centered":!t.isVerticalVersion,"is-layout-vertical":t.isVerticalVersion,buttons:!t.isVerticalVersion}),ref:t.menuRef,children:t.children})})}function PersistentMenuWrapper({closeMenu:t,isVerticalVersion:n,ariaExpanded:r}){const{events:s}=useCoreContext(),[i,o]=reactExports.useState(!1),l=reactExports.useRef(null),{persistent_menu:u}=useConfigContext(),c=u.map(p=>({...p,action:p.action||"keyword",style:p.style||"text",href:p.href||null,isKeyword:p.action!=="link",closeMenu:t,events:s,disabled:i,setDisabled:o})).map((p,m)=>(n||m<2)&&jsxRuntimeExports.jsx(PersistentMenuButtonUI,{item:p,isVerticalVersion:n},p.payload));return jsxRuntimeExports.jsx(PersistentMenu,{isVerticalVersion:n,menuRef:l,ariaExpanded:r!==null?r:null,children:c})}function useHasCloseButton(){const t=useModeContext(),{isOpen:n}=useOpenStateContext();return[MODES.LIVECHAT,MODES.POPUP,MODES.CONTAINER_POPUP].includes(t)&&n}function useHasOffsetMenu(){const t=useConfigContext(),n=useHasAgentAssigned(),r=t.design.header_visible?2:0;return!n&&t.persistent_menu.length>r}const HeaderUI=dt.header`
  z-index: ${({theme:t})=>t.zIndex.header};
  width: 100%;
  height: ${t=>t.theme.header.height.default};
  top: 0;
  left: 0;
  padding: 10px 30px;
  border-bottom: 1px solid transparent;
  transition: 0.25s height ease-in-out;
  color: ${({theme:t})=>t.design.header_text};

  ${()=>useModeContext()===MODES.NATIVE?`position: fixed;
      `:"position: absolute;"}

  @media ${breakpoint.from_tablet} {
    padding: 22px 34px;
    margin: auto;
  }

  &.is-transparent {
    padding: 12px 10px;
    .custom-buttons {
      align-items: flex-start;
    }
  }

  &:not(.Header--hasPersistentMenu),
  &.Header--isAgentActive {
    .Header__Row {
      height: 100%;
    }
  }

  &.Header--isAgentActive {
    .Header__NavigationButton--Menu,
    .PersistentMenu .buttons {
      display: none;
    }

    .Header__BotInfo {
      transform: translateY(-100%);
      opacity: 0;
    }

    .Header__AgentInfo {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &.Header--isSticky {
    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.16);
  }

  &:not(.is-transparent) {
    background-color: ${({theme:t})=>t.design.header_background_color};
  }

  &.Header--hasSeparator {
    border-bottom-color: ${({theme:t})=>t.design.top_bar_separator_color};
  }

  .custom-buttons {
    .Header__NavigationButton {
      &.custom-button {
        width: 44px;
        height: 37px;
        min-width: initial;
        min-height: initial;
        max-width: initial;
        max-height: initial;
        padding: 0 0.6rem 0 0.5rem;
        color: ${({theme:t})=>t.design.header_text};
      }

      &.custom-button:hover {
        ${backgroundColor("var(--header_text)",.1)};
        color: ${({theme:t})=>t.design.header_text};
      }

      &--Menu {
        /* The navigation button menu will have a fixed border radius and no border color */
        border-radius: 3px !important;
        border: hidden !important;
        flex-wrap: wrap;
        align-content: center;
      }

      &--Menu span {
        height: 2px;
        display: block;
        width: 100%;
        margin: 1px;
        border-radius: 1px;
        background-color: currentColor;
      }

      &--Menu span:not(:first-child) {
        margin-top: 3px;
      }

      &--Close {
        &:after,
        &:not(:hover):before {
          display: none;
        }
        &:before {
          transform: none;
        }
        position: relative;
      }
      &--Close span:first-child {
        transform: rotate(45deg);
      }

      &--Close span:last-child {
        transform: rotate(-45deg);
      }

      &--Close span {
        display: block;
        position: absolute;
        width: 20px;
        height: 2px;
        border-radius: 3px;
        background-color: currentColor;
      }
    }
  }

  /* Mobile */
  @media ${breakpoint.mobile_only} {
    &:not(.Header--hasPersistentMenu) {
      height: ${t=>t.theme.header.height.not_persistent_mobile};
    }

    &.Header--isSticky.Header--hasPersistentMenu {
      height: ${t=>t.theme.header.height.sticky};

      .custom-buttons {
        transform: translate(12px, 54px) scale(0.8);
        transform-origin: center right;
      }

      &.Header--isAgentActive {
        .custom-buttons {
          transform: translate(12px, -2px) scale(0.8);
        }
      }
    }

    &.Header--hasPersistentMenu:not(.Header--isAgentActive):not(.Header--isSticky) {
      height: ${t=>t.theme.header.height.with_menu};
    }

    &.Header--hasPersistentMenu {
      .Header__Row:first-child {
        z-index: ${({theme:t})=>t.zIndex.Header__Row};
        position: relative;
        .custom-buttons {
          transition: transform 0.25s ease-in-out;
        }
      }

      &.Header--isSticky.Header--hasPersistentMenu {
        .Header__Row {
          transform: translateY(-58px);
        }
      }

      &.Header--hasPersistentMenu.Header--isAgentActive {
        .Header__Row:first-child {
          transform: translateY(0);
        }

        .Header__Row:nth-child(2) {
          display: none;
        }
      }
    }
  }

  ${t=>{const{$hasOffsetMenu:n,$hasCloseButton:r,theme:s}=t;return r===!0&&n===!0?lt`
        &.Header--isSticky .Header__Row:last-of-type {
          padding-right: ${s.header.persistent_menu_button_and_close_button_width};
        }
      `:n===!0?lt`
        &.Header--isSticky .Header__Row:last-of-type {
          padding-right: ${s.header.persistent_menu_button_width};
        }
      `:null}}
`,HeaderRowUI=dt.div`
  display: flex;
  align-items: stretch;
  transition: transform 0.25s ease-in-out;

  &:not(:first-child) {
    margin-top: 18px;
  }
`,HeaderInfoUI=dt.div`
  display: inline-flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  transition: 0.25s transform ease-in-out;
`,HeaderMenuUI=dt.div`
  display: inline-flex;
  justify-content: center;
  transition: 0.25s transform ease-in-out;

  @media ${breakpoint.mobile_only} {
    width: 100%;
  }
`;function Header$1({isAgentActive:t,isSticky:n,hasPersistentMenu:r,persistentMenu:s,hasSeparator:i,description:o,navigation:l,hasOffsetMenu:u,hasCloseButton:c}){return jsxRuntimeExports.jsxs(HeaderUI,{className:classNames({Header:!0,"Header--isAgentActive":t,"Header--isSticky":n,"Header--hasPersistentMenu":r,"Header--hasSeparator":i}),id:"Header",role:"navigation","aria-label":"main navigation",$hasOffsetMenu:u,$hasCloseButton:c,children:[jsxRuntimeExports.jsxs(HeaderRowUI,{className:"Header__Row",children:[jsxRuntimeExports.jsx(HeaderInfoUI,{className:"Header__Info is-relative is-overflow-ellipsis",children:o}),r&&jsxRuntimeExports.jsx(HeaderMenuUI,{className:"Header__Menu is-hidden-mobile",children:s}),jsxRuntimeExports.jsx(CustomButtons,{className:"custom-buttons is-inline-flex are-transparent",children:l})]}),jsxRuntimeExports.jsx(HeaderRowUI,{className:"Header__Row is-hidden-tablet",children:r&&jsxRuntimeExports.jsx(HeaderMenuUI,{className:"Header__Menu",children:s})})]})}const HeaderLogoUI=dt.div`
  position: relative;
  display: inline-block;
  height: inherit;
  max-width: 40%;
  margin-right: 15px;

  .image {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .image img {
    width: auto;
    height: ${t=>t.theme.header.logo_size.mobile};
    min-width: ${t=>t.theme.header.logo_size.mobile};
    display: block;

    @media ${breakpoint.from_tablet} {
      height: ${t=>t.theme.header.logo_size.mobile};
      min-width: ${t=>t.theme.header.logo_size.mobile};
    }
  }
`;function Logo({src:t,rounded:n}){return t?jsxRuntimeExports.jsx(HeaderLogoUI,{className:"Header__Logo",children:jsxRuntimeExports.jsx(Image$3,{contain:!0,src:t,rounded:n})}):null}const HeaderDescriptionContainerUI=dt.div`
  display: flex;
  align-items: center;
  transition:
    transform 0.4s ease-in-out,
    opacity 0.4s ease-in-out;
`,HeaderDescriptionBotInfoContainerUI=dt(HeaderDescriptionContainerUI)`
  opacity: 1;
  width: 100%;
`,HeaderDescriptionAgentInfoContainerUI=dt(HeaderDescriptionContainerUI)`
  position: absolute;
  height: 100%;
  transform: translateY(100%);
  opacity: 0;

  .image img {
    width: ${t=>t.theme.header.logo_size.mobile};
  }
`,HeaderDescriptionUI=dt.hgroup`
  flex: 1;
  min-width: 0;
`,HeaderTitleUI=dt.h1`
  letter-spacing: -0.75px;
  font-size: ${t=>t.theme.header.brand_font_size.mobile};

  @media ${breakpoint.from_tablet} {
    font-size: ${t=>t.theme.header.brand_font_size.tablet};
  }
`,HeaderSubtitleUI=dt.h3`
  letter-spacing: -0.25px;
  font-size: ${t=>t.theme.header.subtitle_font_size.mobile};

  @media ${breakpoint.from_tablet} {
    font-size: ${t=>t.theme.header.subtitle_font_size.tablet};
  }
`;function HeaderDescription({isBotInfo:t=!0,title:n,subtitle:r,avatar:s,avatarRounded:i}){const o=t?HeaderDescriptionBotInfoContainerUI:HeaderDescriptionAgentInfoContainerUI,l=t?"Header__BotInfo":"Header__AgentInfo";return jsxRuntimeExports.jsxs(o,{className:l,"data-testid":"HeaderDescription",children:[jsxRuntimeExports.jsx(Logo,{src:s,rounded:i}),jsxRuntimeExports.jsxs(HeaderDescriptionUI,{className:"Header__Description",children:[n&&jsxRuntimeExports.jsx(HeaderTitleUI,{className:"Header__Title has-text-weight-bold",children:n}),r&&jsxRuntimeExports.jsx(HeaderSubtitleUI,{className:"Header__Subtitle is-overflow-ellipsis",children:r})]})]})}function HeaderWrapper({isSticky:t}){var S,x,h;const n=useConfigContext(),r=useAgentsContext(),{agent:s}=useAssignationContext(),i=useHasAgentAssigned(),o=useHasPersistentMenu(),l=useHasCloseButton(),u=useHasOffsetMenu(),{hasHeader:c,hideHeader:p}=useHasHeader(),[m,y]=reactExports.useState(!1),$={name:((S=r==null?void 0:r[s])==null?void 0:S.name)??"",avatar:((x=r==null?void 0:r[s])==null?void 0:x.avatar)??""};return!c||p?null:jsxRuntimeExports.jsx(Header$1,{menuActive:m,openMenu:()=>y(!0),closeMenu:()=>y(!1),isAgentActive:i,isSticky:t,hasOffsetMenu:u,hasCloseButton:l,hasPersistentMenu:o,hasSeparator:(h=n==null?void 0:n.design)==null?void 0:h.top_bar_separator,persistentMenu:jsxRuntimeExports.jsx(PersistentMenuWrapper,{}),navigation:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[u&&jsxRuntimeExports.jsx(OffsetMenuLauncherWrapper,{}),l&&jsxRuntimeExports.jsx(CloseButtonWrapper,{})]}),description:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(HeaderDescription,{title:n.brand_name,subtitle:n.tagline,avatar:n.logo}),jsxRuntimeExports.jsx(HeaderDescription,{isBotInfo:!1,title:$.name,subtitle:n.text.hto_agent_profile_text.replace(/@brand/i,n.brand_name),avatar:$.avatar,avatarRounded:!0})]})})}function InvisibleHeader({navigation:t,hasOffsetMenu:n,hasCloseButton:r}){return jsxRuntimeExports.jsx(HeaderUI,{className:classNames({"Header is-transparent":!0}),role:"navigation","aria-label":"main navigation",hasOffsetMenu:n,hasCloseButton:r,children:jsxRuntimeExports.jsx(HeaderRowUI,{className:"Header__Row is-pulled-right",children:jsxRuntimeExports.jsx(CustomButtons,{className:"is-inline-flex are-transparent",children:t})})})}function InvisibleHeaderWrapper(){const t=useConfigContext(),n=useHasOffsetMenu(),r=useHasCloseButton(),[s,i]=reactExports.useState(!1);return t.design.header_visible||!r&&!n?null:jsxRuntimeExports.jsx(InvisibleHeader,{menuActive:s,openMenu:()=>i(!0),closeMenu:()=>i(!1),hasOffsetMenu:n,hasCloseButton:r,navigation:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[n&&jsxRuntimeExports.jsx(OffsetMenuLauncherWrapper,{}),r&&jsxRuntimeExports.jsx(CloseButtonWrapper,{})]})})}const PanelContainerUI=dt.div`
  z-index: ${({theme:t})=>t.zIndex.NotificationsPanel};
  ${()=>useModeContext()===MODES.NATIVE?"position: fixed;":"position: absolute;"}
  top: 0;
  left: 0;
  padding: 10px 30px;
  height: ${t=>t.theme.header.height.default};
  width: 100%;
  color: white;
  background-color: #fc4c4c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${breakpoint.from_tablet} {
    padding: 22px 34px;
    margin: auto;
  }
`,NotificationsPanelUI=dt.div`
  display: none;

  &.is-active {
    display: block;
  }

  .modal-close {
    z-index: 41;
  }
`;function NotificationsPanel$1({message:t,retryMessage:n,isOpen:r,hasCloseButton:s,onClose:i,buttons:o=[]}){return jsxRuntimeExports.jsxs(NotificationsPanelUI,{className:classNames({NotificationsPanel:!0,"fade-in":!0,"is-active":r}),children:[jsxRuntimeExports.jsxs(PanelContainerUI,{className:classNames({"panel-container":!0}),children:[jsxRuntimeExports.jsx("p",{children:t}),jsxRuntimeExports.jsx("p",{children:o.length>0?o.map(({label:l,retryMessageLabel:u,onClick:c})=>jsxRuntimeExports.jsx(c$a,{label:u?n:l,onClick:c},u?n:l)):n})]}),s&&jsxRuntimeExports.jsx("button",{"aria-label":"close",className:"modal-close is-large",onClick:i,type:"submit",children:jsxRuntimeExports.jsx("div",{className:"has-tooltip-left","data-tooltip":"Close"})})]})}function NotificationsPanel(){const{cfg:{isOpen:t,isInitialized:n,hasCloseButton:r,hasRetryButton:s,hasResetButton:i,message:o,retryCb:l,retryInterval:u},closeNotification:c,setIsInitialized:p}=useNotificationsContext(),{text:m}=useConfigContext(),[y,$]=reactExports.useState([]),{document:S}=useDocumentContext();reactExports.useEffect(()=>{if(!t||!r)return()=>{};const me=st=>{st.keyCode===27&&c()};return S.addEventListener("keydown",me,!1),()=>S.removeEventListener("keydown",me,!1)},[t,c,r,S]);const[x,h]=reactExports.useState(-1),[N,L]=reactExports.useState(""),[pe,tt]=reactExports.useState(!1);return reactExports.useEffect(()=>{if(t&&!n){const me=[];typeof l=="function"&&u>0?(h(u),tt(!0),s&&me.push({retryMessageLabel:!0,onClick:()=>{tt(!1),l()}})):s&&me.push({label:m.error_retry_button_label,onClick:l}),i&&me.push({label:m.error_reset_button_label,onClick:()=>{alert("RESET")}}),$(me),L(""),p(!0)}else t||tt(!1)},[t,n,l,u,p,s,i,m]),reactExports.useEffect(()=>{if(!t||!n||!pe)return()=>{};const me=setInterval(()=>{h(st=>st-1)},1e3);return()=>{clearInterval(me)}},[t,n,pe]),reactExports.useEffect(()=>{t&&n&&pe&&(x>0?L(m.error_retry_countdown_message.replace("{countdown}",x)):x===0&&(L(m.error_retrying_message),tt(!1),l()))},[t,n,pe,x,l,m.error_retry_countdown_message,m.error_retrying_message]),jsxRuntimeExports.jsx(NotificationsPanel$1,{isOpen:t,onClose:()=>c(),hasCloseButton:r,message:o,retryMessage:N,buttons:y})}const OffsetMenuContentUI=dt.div`
  /* Positioning */
  top: 0;
  right: 0;
  z-index: ${({theme:t})=>t.zIndex.OffsetMenuContent};
  ${()=>useModeContext()===MODES.NATIVE?"position: fixed;":"position: absolute;"}

  /* Display & Box Model */
  width: 240px;
  height: 100%;
  padding: 18px 15px;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;

  /* Color */
  opacity: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 0 27px 0 rgba(32, 20, 104, 0.2);
  background-color: white; // --base_color_message

  /* Other */
  transition:
    transform 0.25s ease-in-out,
    opacity 0.25s ease-in-out;

  &.OffsetMenu__Content--isActive {
    opacity: 1;
    transform: translateX(0);
  }
`,CloseButton$1=({className:t="",onClick:n})=>jsxRuntimeExports.jsx(s$9,{ariaLabel:"Close Menu",className:classNames({[t]:!0,OffsetMenu__CloseButton:!0,delete:!0}),onClick:n}),CloseMenuUI=dt(CloseButton$1)`
  align-self: flex-end;
  height: 37px;
  width: 37px;
  min-width: initial;
  min-height: initial;
  max-width: initial;
  max-height: initial;
  margin-bottom: 20px;
  background-color: transparent !important;

  &:hover,
  &:active {
    border-color: transparent;
    box-shadow: none;
    background-image: none;
  }

  &:before,
  &:after {
    background-color: ${({theme:t})=>t.design.message_color_bot};
  }
`,OffsetMenuUI=dt.div`
  .modal-background {
    z-index: ${({theme:t})=>t.zIndex.OffsetMenu};
  }
`;function OffsetMenu({menuActive:t,closeMenu:n}){return jsxRuntimeExports.jsxs(OffsetMenuUI,{className:"OffsetMenu",children:[jsxRuntimeExports.jsxs(OffsetMenuContentUI,{className:classNames({OffsetMenu__Content:!0,"OffsetMenu__Content--isActive":t}),children:[jsxRuntimeExports.jsx(CloseMenuUI,{onClick:n}),jsxRuntimeExports.jsx("div",{className:"OffsetMenu__ContentSection",children:jsxRuntimeExports.jsx(PersistentMenuWrapper,{ariaExpanded:t,closeMenu:n,isVerticalVersion:!0})})]}),t&&jsxRuntimeExports.jsx("div",{className:"modal-background",onClick:n})]})}function OffsetMenuWrapper(){const{isOpen:t,setIsOpen:n}=useOffsetMenuContext();return jsxRuntimeExports.jsx(OffsetMenu,{menuActive:t,closeMenu:()=>{n(!1)}})}function BackgroundWrapper(){const{design:t}=useConfigContext(),{background_type:n,background_image:r,background_image_mobile:s,background_video_webm:i,background_video_mp4:o}=t;return jsxRuntimeExports.jsx(i$h,{background_image:r,background_image_mobile:s,background_type:n,background_video_mp4:o,background_video_webm:i,isNative:useModeContext()===MODES.NATIVE})}const ModalUI=dt.div`
  ${()=>useModeContext()===MODES.NATIVE?`position: fixed;
       width: 100%;
       height: 100vh;`:"position: absolute;"}

  .modal-close {
    ${()=>useModeContext()===MODES.NATIVE?"position: fixed;":"position: absolute;"}
  }

  .modal-close [data-tooltip] {
    width: 100%;
    height: 100%;

    &:hover {
      &::before,
      &::after {
        opacity: 0;
        animation-delay: 0.1s;
        animation-name: opacityAnimation;
        animation-duration: 0.25s;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
      }
    }

    @keyframes opacityAnimation {
      from {
        opacity: 0;
      }

      50% {
        opacity: 0.5;
      }

      to {
        opacity: 1;
      }
    }
  }
`;function Modal({className:t="",children:n,canCloseOnClickOverlay:r,isOpen:s,onClose:i,contentClassName:o=""}){return jsxRuntimeExports.jsxs(ModalUI,{className:classNames({"modal fade-in":!0,"is-active":s,[t]:!!t}),children:[jsxRuntimeExports.jsx("div",{className:"modal-background",onClick:()=>{r&&i()}}),jsxRuntimeExports.jsx("div",{className:classNames({"modal-content":!0,[o]:!!o}),style:{width:"auto"},children:n}),jsxRuntimeExports.jsx("button",{className:"modal-close is-large","aria-label":"close",onClick:i,type:"submit",children:jsxRuntimeExports.jsx("div",{className:"has-tooltip-left","data-tooltip":"Close"})})]})}const IframeUI=dt.iframe`
  height: 90vh;
  width: 90vw;
`;function ModalMedia(){const{isOpen:t,setIsOpen:n,src:r}=useModalMediaContext(),{document:s}=useDocumentContext(),i=messagesUtils.isSupportedDocumentType(r||"");return reactExports.useEffect(()=>{if(!t)return;const o=l=>{l.keyCode===27&&n(!1)};return s.addEventListener("keydown",o,!1),()=>s.removeEventListener("keydown",o,!1)},[t,n,s]),jsxRuntimeExports.jsx(Modal,{contentClassName:"has-text-centered",isOpen:t,onClose:()=>n(!1),canCloseOnClickOverlay:!0,children:i?jsxRuntimeExports.jsx(IframeUI,{type:"text/html",src:r,frameBorder:"0",allowFullScreen:!0,title:"lb-iframe"}):jsxRuntimeExports.jsx(Image$3,{className:"is-inline-block",src:r})})}const MainUI=dt.div`
  && {
    position: relative;
    overflow: hidden;

    ${()=>useModeContext()===MODES.NATIVE?"min-height: 100vh;":"height: 100%;"}
  }
`;function Main({children:t}){return jsxRuntimeExports.jsx(MainUI,{"data-testid":"Main",id:"Main",children:t})}function MainWrapper(){return jsxRuntimeExports.jsxs(Main,{children:[jsxRuntimeExports.jsx(BackgroundWrapper,{}),jsxRuntimeExports.jsx(NotificationsPanel,{}),jsxRuntimeExports.jsx(Experience,{}),jsxRuntimeExports.jsx(ModalMedia,{}),jsxRuntimeExports.jsx(OffsetMenuWrapper,{})]})}function Experience(){return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(HeaderWrapper,{}),jsxRuntimeExports.jsx(InvisibleHeaderWrapper,{}),jsxRuntimeExports.jsx(BodyWrapper,{}),jsxRuntimeExports.jsx(FooterWrapper,{})]})}function FullpageAssemblerWrapper(){return jsxRuntimeExports.jsx(CommonProvider,{children:jsxRuntimeExports.jsx(Assembler$3,{children:jsxRuntimeExports.jsx(MainWrapper,{})})})}var lib$1={},Context={};Object.defineProperty(Context,"__esModule",{value:!0}),Context.FrameContextConsumer=Context.FrameContextProvider=Context.FrameContext=void 0;var _react$7=reactExports,_react2$1=_interopRequireDefault$7(_react$7);function _interopRequireDefault$7(t){return t&&t.__esModule?t:{default:t}}var doc=void 0,win=void 0;typeof document<"u"&&(doc=document),typeof window<"u"&&(win=window);var FrameContext=Context.FrameContext=_react2$1.default.createContext({document:doc,window:win}),FrameContextProvider=FrameContext.Provider,FrameContextConsumer=FrameContext.Consumer;Context.FrameContextProvider=FrameContextProvider,Context.FrameContextConsumer=FrameContextConsumer;var Frame$2={},Content$1={};Object.defineProperty(Content$1,"__esModule",{value:!0});var _createClass$5=function(){function t(n,r){for(var s=0;s<r.length;s++){var i=r[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,r,s){return r&&t(n.prototype,r),s&&t(n,s),n}}(),_react$6=reactExports;_interopRequireDefault$6(_react$6);var _propTypes$1=propTypesExports,_propTypes2$1=_interopRequireDefault$6(_propTypes$1);function _interopRequireDefault$6(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck$5(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn$5(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||typeof n!="object"&&typeof n!="function"?t:n}function _inherits$5(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var Content=function(t){function n(){return _classCallCheck$5(this,n),_possibleConstructorReturn$5(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return _inherits$5(n,_react$6.Component),_createClass$5(n,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return _react$6.Children.only(this.props.children)}}]),n}();Content.propTypes={children:_propTypes2$1.default.element.isRequired,contentDidMount:_propTypes2$1.default.func.isRequired,contentDidUpdate:_propTypes2$1.default.func.isRequired},Content$1.default=Content,Object.defineProperty(Frame$2,"__esModule",{value:!0});var _extends$4=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},_createClass$4=function(){function t(n,r){for(var s=0;s<r.length;s++){var i=r[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,r,s){return r&&t(n.prototype,r),s&&t(n,s),n}}(),_react$5=reactExports,_react2=_interopRequireDefault$5(_react$5),_reactDom=reactDomExports,_reactDom2=_interopRequireDefault$5(_reactDom),_propTypes=propTypesExports,_propTypes2=_interopRequireDefault$5(_propTypes),_Context=Context,_Content=Content$1,_Content2=_interopRequireDefault$5(_Content);function _interopRequireDefault$5(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck$4(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn$4(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||typeof n!="object"&&typeof n!="function"?t:n}function _inherits$4(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var Frame$1=function(t){function n(r,s){_classCallCheck$4(this,n);var i=_possibleConstructorReturn$4(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r,s));return i.handleLoad=function(){i.forceUpdate()},i._isMounted=!1,i}return _inherits$4(n,_react$5.Component),_createClass$4(n,[{key:"componentDidMount",value:function(){this._isMounted=!0;var r=this.getDoc();r&&r.readyState==="complete"?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var r=this.getDoc();return this.props.mountTarget?r.querySelector(this.props.mountTarget):r.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var r=this.getDoc();if(!r)return null;var s=this.props.contentDidMount,i=this.props.contentDidUpdate,o=r.defaultView||r.parentView,l=_react2.default.createElement(_Content2.default,{contentDidMount:s,contentDidUpdate:i},_react2.default.createElement(_Context.FrameContextProvider,{value:{document:r,window:o}},_react2.default.createElement("div",{className:"frame-content"},this.props.children)));r.body.children.length<1&&(r.open("text/html","replace"),r.write(this.props.initialContent),r.close());var u=this.getMountTarget();return[_reactDom2.default.createPortal(this.props.head,this.getDoc().head),_reactDom2.default.createPortal(l,u)]}},{key:"render",value:function(){var r=this,s=_extends$4({},this.props,{children:void 0});return delete s.head,delete s.initialContent,delete s.mountTarget,delete s.contentDidMount,delete s.contentDidUpdate,_react2.default.createElement("iframe",_extends$4({},s,{ref:function(i){r.node=i}}),this.renderFrameContents())}}]),n}();Frame$1.propTypes={style:_propTypes2.default.object,head:_propTypes2.default.node,initialContent:_propTypes2.default.string,mountTarget:_propTypes2.default.string,contentDidMount:_propTypes2.default.func,contentDidUpdate:_propTypes2.default.func,children:_propTypes2.default.oneOfType([_propTypes2.default.element,_propTypes2.default.arrayOf(_propTypes2.default.element)])},Frame$1.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},Frame$2.default=Frame$1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var n=Context;Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return n.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return n.FrameContextConsumer}});var r,s=(r=Frame$2)&&r.__esModule?r:{default:r};t.default=s.default}(lib$1);const Frame=getDefaultExportFromCjs(lib$1);function WidgetFrame({children:t,frameRef:n}){return jsxRuntimeExports.jsx(Frame,{initialContent:`
  <!DOCTYPE html>
  <html>
    <head>
        <link rel="stylesheet" href="https://cdn.landbot.io/landbot-3/landbot-3.0.css" as="style" rel="stylesheet"> 
    </head>
    <body>
      <div id="frame-content"></div>
    </body>
  </html>`,mountTarget:"#frame-content",frameBorder:"0",ref:n,style:{width:"100%",height:"100%"},"data-cy":null,children:t})}function WidgetFrameWrapper({children:t}){const n=reactExports.useRef(null);return jsxRuntimeExports.jsx(WidgetFrame,{frameRef:n,children:jsxRuntimeExports.jsx(lib$1.FrameContextConsumer,{children:({document:r,window:s})=>{var i;return jsxRuntimeExports.jsx(Provider$d,{value:{document:r,iframe:(i=n.current)==null?void 0:i.node,window:s},children:jsxRuntimeExports.jsx(Ye,{target:r==null?void 0:r.head,children:t})})}})})}const LandbotContainerUI=dt.div`
  width: 100%;
  height: 100%;
`;function Container$1({children:t}){return jsxRuntimeExports.jsx(LandbotContainerUI,{className:"LandbotContainer",children:t})}const CORE_SETTINGS_KEYS=["firestore","apiKey","authDomain","databaseURL","storageBucket","serverUrl","welcomeUrl","brandID","channelToken","landbotToken","welcome","typing_options","storage_off","forceWebsockets","firestoreSettings"],ConfigService=({config:t,core:n,children:r})=>{const[s,i]=reactExports.useState(t);return reactExports.useEffect(()=>{const o=l=>i(l);return n.events.on(EVENTS$1.SET_CONFIG_CONTEXT,o),()=>{n.events.off(EVENTS$1.SET_CONFIG_CONTEXT,o)}},[n]),jsxRuntimeExports.jsx(Provider$e,{value:s,children:r})},NOT_MERGEABLE_CONFIG=["welcome","revisit","persistent_menu"];function mergeCustomizer(t,n,r){return r==="revisit"&&n.length===0?DEFAULT_SETTINGS.revisit:NOT_MERGEABLE_CONFIG.includes(r)?n:void 0}function configMergeManager(...t){return{...t.reduce((n,r)=>mergeWith(n,r,mergeCustomizer),{})}}class ConfigManager{constructor(n){this.localConfig=Object.assign({},n)}async init(){let n={};try{n=await this._fetchConfig()}catch(r){console.warn("landbot-3: Could not fetch remote config",r)}return this.rawConfig=configMergeManager(DEFAULT_SETTINGS,n,this.localConfig),this.rawConfig.customData={...utils$1.getHiddenFields(this.rawConfig.hidden_fields,window.location.search),...this.rawConfig.customData},this.applyConfig()}async _fetchConfig(){return this.localConfig.configUrl?asyncUtils.fetchConfigJSON({configUrl:utils$1.appendTimestampToUrl(this.localConfig.configUrl)}):Promise.reject()}applyConfig(n=null){var r,s,i;return n&&(this.rawConfig=configMergeManager(this.rawConfig,n)),{...this.rawConfig,design:{...dynamicConfig(this.rawConfig),llm_scroll_behavior:(r=this.rawConfig.design)==null?void 0:r.llm_scroll_behavior,enable_scroll_to_bottom_button:(s=this.rawConfig.design)==null?void 0:s.enable_scroll_to_bottom_button,enable_thinking_mode:(i=this.rawConfig.design)==null?void 0:i.enable_thinking_mode}}}}function ThemeService({children:t}){const n=useConfigContext(),r=mergeWith({},o$k,{design:n.design},m$4,()=>{});return jsxRuntimeExports.jsx(ot,{theme:r,children:t})}class Widget{constructor(n){this.MODE=null,this.VERSION=null,this.core=new d(n||{}),this.configManager=new ConfigManager(n),this.setup()}async setup(){this.config=await this.configManager.init(),this.core.setConfig(pick(this.config,CORE_SETTINGS_KEYS)),this.api=this._getApi(),this._create(),this._render(),this._applyConfig=this._applyConfig.bind(this),this.core.events.on(EVENTS$1.SET_CONFIG,this._applyConfig)}onLoad(n){this.core.events.on(EVENTS$1.LOAD,n)}setConfig(n={}){this.core.events.emit(EVENTS$1.SET_CONFIG,n)}_applyConfig(n){this.config=this.configManager.applyConfig(n),this.core.events.emit(EVENTS$1.SET_CONFIG_CONTEXT,this.config)}setCustomData(n={}){this.core.events.emit(EVENTS$1.CUSTOM_DATA,n)}sendMessage(n){return this.core.sendMessage(n)}destroy(){this.core.events.off(EVENTS$1.SET_CONFIG,this._applyConfig),this.root.unmount(),this.container.remove(),this.container=null,this.core.destroy()}_create(){this.container=document.createElement("div"),document.body.appendChild(this.container),this.root=createRoot(this.container)}_getApi(){return{init:this.core.init.bind(this.core),getMoreMessages:this.core.getMoreMessages.bind(this.core),sendMessage:this.core.sendMessage.bind(this.core)}}_render(){this.root.render(compose([[Provider$c,{value:this}],[Provider$a,{value:this.MODE}],[Provider$b,{value:this.core}],[ConfigService,{core:this.core,config:this.config}],[Provider$2,{value:this.api}],[ThemeService]],this._contentRenderer()))}_contentRenderer(){return null}}class Container extends Widget{constructor(){super(...arguments),this.MODE=MODES.CONTAINER}_create(){if(this.container=utils$1.getElement(this.config.container),!this.container)throw new Error("Container element is not set or doesn't exist.",this.config.container,this.container);this.root=createRoot(this.container)}destroy(){this.core.events.off(EVENTS$1.SET_CONFIG,this._applyConfig),this.root.unmount(),this.core.destroy()}_contentRenderer(){return jsxRuntimeExports.jsx(Container$1,{children:jsxRuntimeExports.jsx(WidgetFrameWrapper,{children:jsxRuntimeExports.jsx(FullpageAssemblerWrapper,{})})})}}const LivechatContentUI=dt.div`
  z-index: ${({theme:t})=>t.zIndex.LivechatContent};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: ${t=>t.theme.chat.shadow_length};
  display: none;

  &.is-open {
    display: block;
  }

  #Main {
    border-radius: 5px;
    box-shadow: 0 -1px ${t=>t.theme.chat.shadow_length} 0 rgba(0, 0, 0, 0.2);
  }
`,PopupOverlayUI=dt.div`
  animation: fade-in 0.8s forwards;
  background-color: rgba(0, 0, 0, 0.7);
`;function PopupOverlay({onClick:t}){return jsxRuntimeExports.jsx(PopupOverlayUI,{className:"PopupOverlay is-overlay",onClick:t})}const ContainerPopupContentUI=dt(LivechatContentUI)`
  :not(.is-open) {
    z-index: auto;
    padding: 0;
  }
`;function Assembler$2({isOpen:t,onClick:n=()=>{},onClickOpensPopup:r,children:s}){return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsxs(ContainerPopupContentUI,{className:classNames({"LivechatContent fade-in":!0,"is-block":!0,"is-open":t}),onClick:n,children:[r&&jsxRuntimeExports.jsx(PopupOverlay,{}),s]}),jsxRuntimeExports.jsx(DynamicStyles,{})]})}function ContainerPopupAssemblerWrapper(){const{isDesktop:t}=useDevice(),n=useCoreContext(),{isOpen:r}=useOpenStateContext(),s=!t;return jsxRuntimeExports.jsx(CommonProvider,{children:jsxRuntimeExports.jsx(Assembler$2,{onClickOpensPopup:s,onClick:!r&&s?()=>n.events.emit(EVENTS$1.WIDGET_OPEN,!0):null,isOpen:r,children:jsxRuntimeExports.jsx(MainWrapper,{})})})}function OpenStateService({children:t}){const[n,r]=reactExports.useState(!1),[s,i]=reactExports.useState(!1),[o,l]=reactExports.useState(null),[u,c]=reactExports.useState(0),p=useCoreContext();return reactExports.useEffect(()=>{const m=()=>{r(!0),i(!1),p.storage.set("proactive",{closed:!0})},y=()=>r(!1);return p.events.on(EVENTS$1.WIDGET_OPEN,m),p.events.on(EVENTS$1.WIDGET_CLOSE,y),()=>{p.events.off(EVENTS$1.WIDGET_OPEN,m),p.events.off(EVENTS$1.WIDGET_CLOSE,y)}},[p.events,p.storage]),reactExports.useEffect(()=>{const m=$=>{n||(l($),i(!0))},y=()=>i(!1);return p.events.on(EVENTS$1.PROACTIVE_OPEN,m),p.events.on(EVENTS$1.PROACTIVE_CLOSE,y),()=>{p.events.off(EVENTS$1.PROACTIVE_OPEN,m),p.events.off(EVENTS$1.PROACTIVE_CLOSE,y)}},[n,p.events]),reactExports.useEffect(()=>{s||l(null)},[s]),jsxRuntimeExports.jsx(Provider$9,{value:{isProactiveOpen:s,isOpen:n,proactiveMessages:o,proactiveHeight:u,setProactiveHeight:c},children:t})}const LandbotContainerPopupUI=dt.div`
  width: 100%;
  height: 100%;

  &.is-open {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: ${({theme:t})=>t.zIndex.Widget};
  }
`;function ContainerPopup$1({children:t}){const{isOpen:n}=useOpenStateContext();return jsxRuntimeExports.jsx(LandbotContainerPopupUI,{className:classNames({LandbotContainerPopup:!0,"is-open":n}),children:t})}class ContainerPopup extends Widget{constructor(){super(...arguments),this.MODE=MODES.CONTAINER_POPUP}_create(){if(this.container=utils$1.getElement(this.config.container),!this.container)throw new Error("ContainerPopup element is not set or doesn't exist.",this.config.container,this.container);this.root=createRoot(this.container)}_contentRenderer(){return jsxRuntimeExports.jsx(OpenStateService,{children:jsxRuntimeExports.jsx(ContainerPopup$1,{children:jsxRuntimeExports.jsx(WidgetFrameWrapper,{children:jsxRuntimeExports.jsx(ContainerPopupAssemblerWrapper,{})})})})}}const LandbotFullpageUI=dt.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: ${({theme:t})=>t.zIndex.Widget};
`;function Fullpage$1({children:t}){return jsxRuntimeExports.jsx(LandbotFullpageUI,{className:"LandbotFullpage",children:t})}class Fullpage extends Widget{constructor(){super(...arguments),this.MODE=MODES.FULLPAGE}_contentRenderer(){return jsxRuntimeExports.jsx(Fullpage$1,{children:jsxRuntimeExports.jsx(WidgetFrameWrapper,{children:jsxRuntimeExports.jsx(FullpageAssemblerWrapper,{})})})}}function useHasProactiveOn(){const t=useCoreContext(),{conditional_proactives:n}=useConfigContext(),r=t.storage.get("proactive")||{};return!!(!t.storage.get("sessionStarted")&&!r.closed&&n.enabled)}function LazyMountWrapper({children:t}){const n=useHasProactiveOn(),{isOpen:r}=useOpenStateContext(),[s,i]=reactExports.useState(n||r);return reactExports.useEffect(()=>{r&&!s&&i(!0)},[r,s]),s?t:null}const ErrorBoundaryContext=reactExports.createContext(null),initialState$1={didCatch:!1,error:null};let ErrorBoundary$1=class extends reactExports.Component{constructor(t){super(t),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=initialState$1}static getDerivedStateFromError(t){return{didCatch:!0,error:t}}resetErrorBoundary(){const{error:t}=this.state;if(t!==null){for(var n,r,s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];(n=(r=this.props).onReset)===null||n===void 0||n.call(r,{args:i,reason:"imperative-api"}),this.setState(initialState$1)}}componentDidCatch(t,n){var r,s;(r=(s=this.props).onError)===null||r===void 0||r.call(s,t,n)}componentDidUpdate(t,n){const{didCatch:r}=this.state,{resetKeys:s}=this.props;var i,o;r&&n.error!==null&&hasArrayChanged(t.resetKeys,s)&&((i=(o=this.props).onReset)===null||i===void 0||i.call(o,{next:s,prev:t.resetKeys,reason:"keys"}),this.setState(initialState$1))}render(){const{children:t,fallbackRender:n,FallbackComponent:r,fallback:s}=this.props,{didCatch:i,error:o}=this.state;let l=t;if(i){const u={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")l=n(u);else if(r)l=reactExports.createElement(r,u);else{if(s!==null&&!reactExports.isValidElement(s))throw o;l=s}}return reactExports.createElement(ErrorBoundaryContext.Provider,{value:{didCatch:i,error:o,resetErrorBoundary:this.resetErrorBoundary}},l)}};function hasArrayChanged(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.length!==n.length||t.some((r,s)=>!Object.is(r,n[s]))}function withErrorBoundary(t,n){const r=reactExports.forwardRef((i,o)=>reactExports.createElement(ErrorBoundary$1,n,reactExports.createElement(t,{...i,ref:o}))),s=t.displayName||t.name||"Unknown";return r.displayName="withErrorBoundary(".concat(s,")"),r}const CloseContainerUI=dt.div`
  flex: 1;
  opacity: 0;
  min-height: 30px;
  transition: opacity 0.25s;

  &.Proactive__close--isMobile {
    opacity: 1;
  }

  .Proactive__close__button {
    right: 16px;
    bottom: 0;
    min-width: 30px;
    min-height: 30px;
    position: absolute;
  }
`,ProactiveCardUI=dt.div`
  cursor: pointer;
  border-radius: 8px;
  max-height: calc(100% - 25px);
  background-color: transparent;

  .Proactive__card-content {
    padding: 1rem;
  }

  .Proactive__messages {
    padding-top: 0;
  }
`,ProactiveWrapper$1=({className:t,onClick:n,children:r})=>jsxRuntimeExports.jsx("div",{className:classNames({Proactive:!0,"fade-in":!0,"is-flex":!0,[t]:!0}),onClick:n,children:r}),ProactiveUI=dt(ProactiveWrapper$1)`
  flex-direction: column;
  cursor: pointer;

  &:hover .Proactive__close {
    opacity: 1;
  }
`;function Proactive$1({messages:t,onClick:n,onClose:r,input:s}){const{isMobile:i}=useDevice(),o=reactExports.useRef(null),{setProactiveHeight:l}=useOpenStateContext();return reactExports.useEffect(()=>{const u=new MutationObserver(()=>{l==null||l(o.current.clientHeight)});return u.observe(o.current,{attributes:!1,childList:!0,characterData:!1,subtree:!0}),l==null||l(o.current.clientHeight),()=>u.disconnect()},[o,l,t]),jsxRuntimeExports.jsxs(ProactiveUI,{onClick:n,children:[jsxRuntimeExports.jsx(CloseContainerUI,{className:classNames({"Proactive__close is-relative":!0,"Proactive__close--isMobile":i}),children:jsxRuntimeExports.jsx("button",{type:"submit","aria-label":"delete",className:"Proactive__close__button delete",onClick:u=>{u.stopPropagation(),r()}})}),jsxRuntimeExports.jsx(ProactiveCardUI,{className:"Proactive__card",ref:o,children:jsxRuntimeExports.jsxs("div",{className:"Proactive__card-content card-content",children:[jsxRuntimeExports.jsx("div",{className:"Proactive__messages Messages",children:t}),s]})})]})}function ProactiveWrapper(){const t=useCoreContext(),{conditional_proactives:n,welcome:r,customData:s}=useConfigContext(),{isProactiveOpen:i,proactiveMessages:o}=useOpenStateContext(),l=useHasProactiveOn();reactExports.useEffect(()=>{const m=setTimeout(function(){l&&t.events.emit(EVENTS$1.PROACTIVE_OPEN)},1e3*n.timeout);return()=>clearTimeout(m)},[n,l,t.events]);const u=reactExports.useCallback(()=>{t.events.emit(EVENTS$1.PROACTIVE_CLOSE),t.storage.set("proactive",{closed:!0})},[t.events,t.storage]),c=reactExports.useCallback(()=>{t.events.emit(EVENTS$1.WIDGET_OPEN)},[t.events]),p=reactExports.useMemo(()=>wrapMessagesObject(utils$1.appendUIKey(o||n.messages||r)),[o,r,n.messages]);return i?jsxRuntimeExports.jsx(Provider,{value:!0,children:jsxRuntimeExports.jsx(Provider$6,{value:{messagesWrapper:p},children:jsxRuntimeExports.jsx(Proactive$1,{onClose:u,onClick:c,messages:p.replaceVariables(s).map((m,y,$)=>jsxRuntimeExports.jsx(MessageGrouper,{previousMessage:$[y-1],currentMessage:m,nextMessage:$[y+1],children:jsxRuntimeExports.jsx(MessageWrapper,{message:m})},m.uiKey)),input:jsxRuntimeExports.jsx(InputInlineWrapper,{})})})}):null}function DummyFallback(){return null}const Proactive=withErrorBoundary(ProactiveWrapper,{FallbackComponent:DummyFallback,onError(t,n){console.error("Catched error in ProactiveWrapper"),console.error(t,n)}}),Avatar=({src:t,className:n=""})=>jsxRuntimeExports.jsx(Image$3,{className:classNames({[n]:!0,"is-launcher__avatar":!0}),contain:!0,src:t}),AvatarUI=dt(Avatar)`
  position: relative;
  height: 60%;

  img {
    height: 100%;
    width: auto;
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
  }
`,CloseButton=({className:t=""})=>jsxRuntimeExports.jsx("div",{className:classNames({[t]:!0,launcher__bubble__close:!0,delete:!0})}),CloseButtonUI=dt(CloseButton)`
  min-width: 50px;
  min-height: 50px;
  background-color: transparent !important;
`,BubbleUI=dt.div`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s;
  animation: fade-in 0.4s forwards;
  border-radius: ${t=>t.theme.launcher.bubble.height};
  box-shadow:
    rgba(0, 0, 0, 0.06) 0 1px 6px 0,
    rgba(0, 0, 0, 0.16) 0 2px 24px -5px;
  background-color: var(--launcher_background);

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;function Launcher({isOpen:t,isTransparent:n,avatarImage:r,onClick:s}){return t?null:jsxRuntimeExports.jsx(BubbleUI,{className:classNames({launcher__bubble:!0,"is-transparent":n}),onClick:s,children:t?jsxRuntimeExports.jsx(CloseButtonUI,{}):jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment,{children:jsxRuntimeExports.jsx(AvatarUI,{src:r})})})}function LauncherWrapper(){const t=useCoreContext(),{isOpen:n}=useOpenStateContext(),r=useConfigContext(),{launcher_custom:s,launcher_image:i,launcher_type:o}=r.design,l=s&&o===DEFINITIONS.LAUNCHER_TYPES.ONLY_ICON,u=s&&i?i:"https://storage.googleapis.com/media.helloumi.com/brands/helloumi.png";return jsxRuntimeExports.jsx(Launcher,{avatarImage:u,isOpen:n,isTransparent:l,onClick:()=>{n===!1?t.events.emit(EVENTS$1.WIDGET_OPEN):t.events.emit(EVENTS$1.WIDGET_CLOSE)}})}const LivechatLauncherUI=dt.div`
  z-index: ${({theme:t})=>t.zIndex.LivechatLauncher};
  right: 0;
  bottom: 0;
  position: absolute;
  width: ${t=>t.theme.launcher.width};
  height: ${t=>t.theme.launcher.height};
  padding: ${t=>t.theme.launcher.shadow_length};
`,LivechatProactiveUI=dt.div`
  display: flex;
  flex-direction: column;
  transform-origin: bottom right;
  max-width: 350px;

  .InputInline {
    margin: 0 !important;
    min-height: initial !important;
  }

  .BackButton {
    display: none !important;
  }

  .Message[data-type='dialog'],
  .Message[data-type='text'] {
    .MessageBubble {
      padding: 7px 13px 9px;
    }
  }

  .MessageMediaBubble {
    max-width: 150px;

    figure {
      background: transparent;
    }
    img {
      max-height: 105px;
    }
  }

  .input-small-header {
    display: none;
  }

  &__card-content {
    padding: 1rem 1rem 0.2rem 1rem;
  }

  .Message .MessageBubble {
    box-shadow: 0 11px 23px -5px rgba(0, 0, 0, 0.06);
  }
`;function Assembler$1({children:t,launcher:n,proactive:r}){return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[t,jsxRuntimeExports.jsx(LivechatProactiveUI,{className:"LivechatProactive",children:r}),jsxRuntimeExports.jsx(LivechatLauncherUI,{className:classNames({LivechatLauncher:!0}),children:n}),jsxRuntimeExports.jsx(DynamicStyles,{})]})}function LivechatAssemblerWrapper(){const{isOpen:t}=useOpenStateContext();return jsxRuntimeExports.jsx(CommonProvider,{children:jsxRuntimeExports.jsx(Assembler$1,{launcher:jsxRuntimeExports.jsx(LauncherWrapper,{}),proactive:jsxRuntimeExports.jsx(Proactive,{}),children:jsxRuntimeExports.jsx(LazyMountWrapper,{children:jsxRuntimeExports.jsx(LivechatContentUI,{className:classNames({"LivechatContent fade-in":!0,"is-open":t}),children:jsxRuntimeExports.jsx(MainWrapper,{})})})})})}const LiveChatPopupCommonUI=dt.div`
  right: 0;
  bottom: 0;
  position: fixed;

  width: ${t=>t.theme.launcher.width};
  height: ${t=>t.theme.launcher.height};
  z-index: ${({theme:t})=>t.zIndex.Widget};

  /* open / close state */
  &.is-open {
    top: 0;
    left: 0;
    width: auto;
    height: auto;
  }

  /* Proactive state */
  &.is-proactive {
    width: ${t=>t.theme.proactive.width};
    height: ${t=>t.proactiveHeight?`${t.proactiveHeight+118}px`:t.theme.proactive.height};
    /* height: ${t=>t.theme.proactive.height}; */
    flex-direction: column;
    transform: scale(0.8);
    transform-origin: bottom right;
  }
`,LandbotLivechatUI=dt(LiveChatPopupCommonUI)`
  @media ${breakpoint.from_tablet} {
    max-height: 800px;

    right: ${t=>t.theme.widget_offset.vertical};
    bottom: ${t=>t.theme.widget_offset.horizontal};
  }
  &.is-open {
    @media ${breakpoint.from_tablet} {
      top: initial;
      width: ${t=>t.theme.widget_chat.width};
      left: initial;
      height: calc(100vh - 2 * ${t=>t.theme.widget_offset.vertical});
    }
  }
`;function Livechat$1({children:t}){const{isOpen:n,isProactiveOpen:r,proactiveHeight:s}=useOpenStateContext();return jsxRuntimeExports.jsx(LandbotLivechatUI,{className:classNames({LandbotLivechat:!0,"is-open":n,"is-proactive":r}),proactiveHeight:s,children:t})}class Livechat extends Widget{constructor(){super(...arguments),this.MODE=MODES.LIVECHAT}open(){this.core.events.emit(EVENTS$1.WIDGET_OPEN)}close(){this.core.events.emit(EVENTS$1.WIDGET_CLOSE)}showProactive(n){this.core.events.emit(EVENTS$1.PROACTIVE_OPEN,n)}hideProactive(){this.core.events.emit(EVENTS$1.PROACTIVE_CLOSE)}_contentRenderer(){return jsxRuntimeExports.jsx(OpenStateService,{children:jsxRuntimeExports.jsx(Livechat$1,{children:jsxRuntimeExports.jsx(WidgetFrameWrapper,{children:jsxRuntimeExports.jsx(LivechatAssemblerWrapper,{})})})})}}class Native extends Widget{constructor(){super(...arguments),this.MODE=MODES.NATIVE}_contentRenderer(){return jsxRuntimeExports.jsx(FullpageAssemblerWrapper,{})}}function Assembler({children:t,launcher:n,proactive:r}){return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[t,jsxRuntimeExports.jsx(LivechatProactiveUI,{className:"LivechatProactive",children:r}),jsxRuntimeExports.jsx(LivechatLauncherUI,{className:classNames({LivechatLauncher:!0}),children:n}),jsxRuntimeExports.jsx(DynamicStyles,{})]})}function PopupAssemblerWrapper(){const t=useCoreContext(),{isOpen:n}=useOpenStateContext();return jsxRuntimeExports.jsx(CommonProvider,{children:jsxRuntimeExports.jsx(Assembler,{launcher:jsxRuntimeExports.jsx(LauncherWrapper,{}),proactive:jsxRuntimeExports.jsx(Proactive,{}),children:jsxRuntimeExports.jsx(LazyMountWrapper,{children:jsxRuntimeExports.jsxs(LivechatContentUI,{className:classNames({"LivechatContent PopupContent fade-in":!0,"is-open":n}),children:[jsxRuntimeExports.jsx(PopupOverlay,{onClick:()=>{t.events.emit(EVENTS$1.WIDGET_CLOSE)}}),jsxRuntimeExports.jsx(MainWrapper,{})]})})})})}const LandbotPopupUI=dt(LiveChatPopupCommonUI)`
  @media ${breakpoint.from_tablet} {
    right: ${t=>t.theme.widget_offset.vertical};
    bottom: ${t=>t.theme.widget_offset.horizontal};
  }

  &.is-open {
    @media ${breakpoint.from_tablet} {
      right: 0;
      bottom: 0;
    }
  }
`;function Popup$1({children:t}){const{isOpen:n,isProactiveOpen:r,proactiveHeight:s}=useOpenStateContext();return jsxRuntimeExports.jsx(LandbotPopupUI,{className:classNames({LandbotPopup:!0,"is-open":n,"is-proactive":r}),proactiveHeight:s,children:t})}class Popup extends Widget{constructor(){super(...arguments),this.MODE=MODES.POPUP}open(){this.core.events.emit(EVENTS$1.WIDGET_OPEN)}close(){this.core.events.emit(EVENTS$1.WIDGET_CLOSE)}showProactive(n){this.core.events.emit(EVENTS$1.PROACTIVE_OPEN,n)}hideProactive(){this.core.events.emit(EVENTS$1.PROACTIVE_CLOSE)}_contentRenderer(){return jsxRuntimeExports.jsx(OpenStateService,{children:jsxRuntimeExports.jsx(Popup$1,{children:jsxRuntimeExports.jsx(WidgetFrameWrapper,{children:jsxRuntimeExports.jsx(PopupAssemblerWrapper,{})})})})}}const _Landbot=window.Landbot||{};window.Landbot={..._Landbot,Fullpage,Livechat,Native,Popup,Container,ContainerPopup,anime}})();export{c$a as A,Provider$d as B,Assembler$3 as C,useHeadGlobalStyle as D,InputContainerWrapper as I,MessageBubbleWrapper as M,PropTypes as P,React__default as R,Ye as Y,__vitePreload as _,__tla,reactDomExports as a,breakpoint as b,classNames as c,dt as d,useWidgetContext as e,utils$1 as f,getCommonProperties as g,classnamesExports as h,inputUtils as i,jsxRuntimeExports as j,useDocumentContext as k,InputHeader as l,m$a as m,l$4 as n,ft as o,lt as p,r$h as q,reactExports as r,React as s,e$6 as t,useConfigContext as u,a$5 as v,t$6 as w,mt as x,m$4 as y,i$5 as z};
