webpackJsonp([1],{iJ4P:function(n,t,c){"use strict";n.exports=function(n,t){return PP.json("post/edit/"+(n||""),function(n){var c=n.md,o=n.file,e=n.tmp;e?$.box.confirm("<h1 class=TC><p>有未发布的改动</p><p>是否加载 ？</p></h1>",{okBtn:"加载改动",cancelBtn:"否",ok:function(){return t(e,o)},cancel:function(){return t(c,o)}}):t(c,o)})}}});