"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[413],{413:(e,t,r)=>{r.r(t),r.d(t,{deepMerge:()=>a,initDefaultData:()=>n});const c=new URLSearchParams(location.search),o={0:"DEBUG",1:"INFO",2:"NOTICE",3:"WARNING",4:"ERROR",5:"CRITICAL",6:"ALERT",7:"EMERGENCY"};function n(){var e=Object.create(null);return e.debugLevel=o[c.get("debugLevel")||0],e}function a(e,t){for(const r of Object.keys(t))"__proto__"!==r&&"constructor"!==r&&(t[r]&&"object"==typeof t[r]&&!Array.isArray(t[r])?(e[r]&&"object"==typeof e[r]||(e[r]={}),a(e[r],t[r])):e[r]=t[r]);return e}}}]);