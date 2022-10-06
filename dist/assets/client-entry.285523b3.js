var C={exports:{}},m={},O={exports:{}},n={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),F=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),B=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),$=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,P={};function p(e,t,o){this.props=e,this.context=t,this.refs=P,this.updater=o||j}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I(){}I.prototype=p.prototype;function w(e,t,o){this.props=e,this.context=t,this.refs=P,this.updater=o||j}var E=w.prototype=new I;E.constructor=w;g(E,p.prototype);E.isPureReactComponent=!0;var b=Array.isArray,A=Object.prototype.hasOwnProperty,R={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,o){var r,u={},i=null,c=null;if(t!=null)for(r in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(i=""+t.key),t)A.call(t,r)&&!T.hasOwnProperty(r)&&(u[r]=t[r]);var f=arguments.length-2;if(f===1)u.children=o;else if(1<f){for(var s=Array(f),a=0;a<f;a++)s[a]=arguments[a+2];u.children=s}if(e&&e.defaultProps)for(r in f=e.defaultProps,f)u[r]===void 0&&(u[r]=f[r]);return{$$typeof:y,type:e,key:i,ref:c,props:u,_owner:R.current}}function J(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function Y(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var x=/\/+/g;function h(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Y(""+e.key):t.toString(36)}function _(e,t,o,r,u){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case y:case F:c=!0}}if(c)return c=e,u=u(c),e=r===""?"."+h(c,0):r,b(u)?(o="",e!=null&&(o=e.replace(x,"$&/")+"/"),_(u,t,o,"",function(a){return a})):u!=null&&(k(u)&&(u=J(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(x,"$&/")+"/")+e)),t.push(u)),1;if(c=0,r=r===""?".":r+":",b(e))for(var f=0;f<e.length;f++){i=e[f];var s=r+h(i,f);c+=_(i,t,o,s,u)}else if(s=H(e),typeof s=="function")for(e=s.call(e),f=0;!(i=e.next()).done;)i=i.value,s=r+h(i,f++),c+=_(i,t,o,s,u);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function d(e,t,o){if(e==null)return e;var r=[],u=0;return _(e,r,"","",function(i){return t.call(o,i,u++)}),r}function K(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},v={transition:null},Q={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:v,ReactCurrentOwner:R};n.Children={map:d,forEach:function(e,t,o){d(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};n.Component=p;n.Fragment=L;n.Profiler=V;n.PureComponent=w;n.StrictMode=U;n.Suspense=W;n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q;n.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=g({},e.props),u=e.key,i=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,c=R.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in t)A.call(t,s)&&!T.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&f!==void 0?f[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=o;else if(1<s){f=Array(s);for(var a=0;a<s;a++)f[a]=arguments[a+2];r.children=f}return{$$typeof:y,type:e.type,key:u,ref:i,props:r,_owner:c}};n.createContext=function(e){return e={$$typeof:B,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:q,_context:e},e.Consumer=e};n.createElement=N;n.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t};n.createRef=function(){return{current:null}};n.forwardRef=function(e){return{$$typeof:M,render:e}};n.isValidElement=k;n.lazy=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:K}};n.memo=function(e,t){return{$$typeof:z,type:e,compare:t===void 0?null:t}};n.startTransition=function(e){var t=v.transition;v.transition={};try{e()}finally{v.transition=t}};n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};n.useCallback=function(e,t){return l.current.useCallback(e,t)};n.useContext=function(e){return l.current.useContext(e)};n.useDebugValue=function(){};n.useDeferredValue=function(e){return l.current.useDeferredValue(e)};n.useEffect=function(e,t){return l.current.useEffect(e,t)};n.useId=function(){return l.current.useId()};n.useImperativeHandle=function(e,t,o){return l.current.useImperativeHandle(e,t,o)};n.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};n.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};n.useMemo=function(e,t){return l.current.useMemo(e,t)};n.useReducer=function(e,t,o){return l.current.useReducer(e,t,o)};n.useRef=function(e){return l.current.useRef(e)};n.useState=function(e){return l.current.useState(e)};n.useSyncExternalStore=function(e,t,o){return l.current.useSyncExternalStore(e,t,o)};n.useTransition=function(){return l.current.useTransition()};n.version="18.2.0";(function(e){e.exports=n})(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X=O.exports,Z=Symbol.for("react.element"),ee=Symbol.for("react.fragment"),te=Object.prototype.hasOwnProperty,re=X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ne={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,o){var r,u={},i=null,c=null;o!==void 0&&(i=""+o),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)te.call(t,r)&&!ne.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)u[r]===void 0&&(u[r]=t[r]);return{$$typeof:Z,type:e,key:i,ref:c,props:u,_owner:re.current}}m.Fragment=ee;m.jsx=D;m.jsxs=D;(function(e){e.exports=m})(C);const S=C.exports.jsx,oe=()=>S("div",{className:"App",children:S("button",{className:"btn btn-sm btn-outline-secondary",children:"copy"})});const ue=()=>{const{optionsGenerators:e}=growiFacade.markdownRenderer;e.customGeneratePreviewOptions=(t,o)=>{const r=e.generatePreviewOptions(t,o);return r.components.code=()=>S(oe,{}),r}},ie=()=>{};window.pluginActivators==null&&(window.pluginActivators={});window.pluginActivators["growi-plugin-jstest"]={activate:ue,deactivate:ie};