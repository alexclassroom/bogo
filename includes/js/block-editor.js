!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){var r=n(3),l=n(4),o=n(5);e.exports=function(e,t){return r(e)||l(e,t)||o()}},function(e,t,n){"use strict";n.r(t);var r=n(1),l=n.n(r),o=n(0),a=wp.plugins.registerPlugin,c=wp.editPost.PluginDocumentSettingPanel,i=wp.components,u=i.PanelRow,s=i.SelectControl,b=wp.element.useState,f=wp.compose.withState,p=wp.data,g=p.select,m=p.dispatch,d=wp.apiFetch;a("bogo-language-panel",{render:function(){var e=Object.assign({},g("core/editor").getCurrentPost(),bogo.currentPost);if(-1==bogo.localizablePostTypes.indexOf(e.type))return Object(o.createElement)(o.Fragment,null);var t=b(e.translations),n=l()(t,2),r=n[0],a=n[1],i=f({locale:""})((function(t){var n=t.locale,c=t.setState,i=[{label:bogo.l10n.addTranslation,value:""}];Object.entries(r).forEach((function(e){var t=l()(e,2),n=t[0];t[1].postId||i.push({label:O(n),value:n})}));return i.length<=1||"auto-draft"==e.status?Object(o.createElement)(o.Fragment,null):Object(o.createElement)(u,null,Object(o.createElement)("span",null),Object(o.createElement)(s,{value:n,options:i,onChange:function(t){!function(t){c({locale:t}),d({path:"/bogo/v1/posts/"+e.id+"/translations/"+t,method:"POST"}).then((function(e){var n=Object.assign({},r);n[t]={postId:e[t].id,postTitle:e[t].title.rendered,editLink:e[t].edit_link},a(n),m("core/notices").createInfoNotice(bogo.l10n.noticePostCreation,{isDismissible:!0,type:"snackbar",speak:!0,actions:[{url:n[t].editLink,label:"Edit Post"}]})}))}(t)}}))}));return Object(o.createElement)(c,{name:"bogo-language-panel",title:bogo.l10n.language,className:"bogo-language-panel"},Object(o.createElement)((function(){return Object(o.createElement)(u,null,Object(o.createElement)("span",null,bogo.l10n.language),Object(o.createElement)("div",null,O(e.locale)))}),null),Object(o.createElement)((function(){var e=[];Object.entries(r).forEach((function(t){var n=l()(t,2),r=n[0],a=n[1];a.editLink&&a.postTitle&&e.push(Object(o.createElement)("li",{key:r},Object(o.createElement)("a",{href:a.editLink,target:"_blank",rel:"noopener noreferrer"},a.postTitle),Object(o.createElement)("span",{className:"screen-reader-text"},bogo.l10n.targetBlank),Object(o.createElement)("br",null),Object(o.createElement)("em",null,O(r))))}));return Object(o.createElement)(u,null,Object(o.createElement)("span",null,bogo.l10n.translations),Object(o.createElement)((function(e){return e.listItems.length?Object(o.createElement)("ul",null,e.listItems):Object(o.createElement)("em",null,bogo.l10n.none)}),{listItems:e}))}),null),Object(o.createElement)(i,null))},icon:"translation"});var O=function(e){return bogo.availableLanguages[e]?bogo.availableLanguages[e]:e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,l=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){l=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(l)throw o}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}]);