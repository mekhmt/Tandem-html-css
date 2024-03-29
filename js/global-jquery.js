/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
(function(ci,cs){var cE=ci.document,bR=ci.navigator,b1=ci.location;
var bS=(function(){var B=function(I,H){return new B.fn.init(I,H,D)
},g=ci.jQuery,x=ci.$,D,b=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,o=/\S/,v=/^\s+/,C=/\s+$/,G=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,d=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,l=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,s=/(?:^|:|,)(?:\s*\[)+/g,t=/(webkit)[ \/]([\w.]+)/,j=/(opera)(?:.*version)?[ \/]([\w.]+)/,k=/(msie) ([\w.]+)/,i=/(mozilla)(?:.*? rv:([\w.]+))?/,F=/-([a-z]|[0-9])/ig,a=/^-ms-/,h=function(I,H){return(H+"").toUpperCase()
},c=bR.userAgent,f,E,A,p=Object.prototype.toString,z=Object.prototype.hasOwnProperty,r=Array.prototype.push,q=Array.prototype.slice,m=String.prototype.trim,y=Array.prototype.indexOf,u={};
B.fn=B.prototype={constructor:B,init:function(L,H,I){var J,N,K,M;
if(!L){return this
}if(L.nodeType){this.context=this[0]=L;
this.length=1;
return this
}if(L==="body"&&!H&&cE.body){this.context=cE;
this[0]=cE.body;
this.selector=L;
this.length=1;
return this
}if(typeof L==="string"){if(L.charAt(0)==="<"&&L.charAt(L.length-1)===">"&&L.length>=3){J=[null,L,null]
}else{J=b.exec(L)
}if(J&&(J[1]||!H)){if(J[1]){H=H instanceof B?H[0]:H;
M=(H?H.ownerDocument||H:cE);
K=G.exec(L);
if(K){if(B.isPlainObject(H)){L=[cE.createElement(K[1])];
B.fn.attr.call(L,H,true)
}else{L=[M.createElement(K[1])]
}}else{K=B.buildFragment([J[1]],[M]);
L=(K.cacheable?B.clone(K.fragment):K.fragment).childNodes
}return B.merge(this,L)
}else{N=cE.getElementById(J[2]);
if(N&&N.parentNode){if(N.id!==J[2]){return I.find(L)
}this.length=1;
this[0]=N
}this.context=cE;
this.selector=L;
return this
}}else{if(!H||H.jquery){return(H||I).find(L)
}else{return this.constructor(H).find(L)
}}}else{if(B.isFunction(L)){return I.ready(L)
}}if(L.selector!==cs){this.selector=L.selector;
this.context=L.context
}return B.makeArray(L,this)
},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length
},toArray:function(){return q.call(this,0)
},get:function(H){return H==null?this.toArray():(H<0?this[this.length+H]:this[H])
},pushStack:function(J,H,K){var I=this.constructor();
if(B.isArray(J)){r.apply(I,J)
}else{B.merge(I,J)
}I.prevObject=this;
I.context=this.context;
if(H==="find"){I.selector=this.selector+(this.selector?" ":"")+K
}else{if(H){I.selector=this.selector+"."+H+"("+K+")"
}}return I
},each:function(H,I){return B.each(this,H,I)
},ready:function(H){B.bindReady();
E.add(H);
return this
},eq:function(H){H=+H;
return H===-1?this.slice(H):this.slice(H,H+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(q.apply(this,arguments),"slice",q.call(arguments).join(","))
},map:function(H){return this.pushStack(B.map(this,function(I,J){return H.call(I,J,I)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:r,sort:[].sort,splice:[].splice};
B.fn.init.prototype=B.fn;
B.extend=B.fn.extend=function(){var H,O,Q,P,K,J,L=arguments[0]||{},M=1,N=arguments.length,I=false;
if(typeof L==="boolean"){I=L;
L=arguments[1]||{};
M=2
}if(typeof L!=="object"&&!B.isFunction(L)){L={}
}if(N===M){L=this;
--M
}for(;
M<N;
M++){if((H=arguments[M])!=null){for(O in H){Q=L[O];
P=H[O];
if(L===P){continue
}if(I&&P&&(B.isPlainObject(P)||(K=B.isArray(P)))){if(K){K=false;
J=Q&&B.isArray(Q)?Q:[]
}else{J=Q&&B.isPlainObject(Q)?Q:{}
}L[O]=B.extend(I,J,P)
}else{if(P!==cs){L[O]=P
}}}}}return L
};
B.extend({noConflict:function(H){if(ci.$===B){ci.$=x
}if(H&&ci.jQuery===B){ci.jQuery=g
}return B
},isReady:false,readyWait:1,holdReady:function(H){if(H){B.readyWait++
}else{B.ready(true)
}},ready:function(H){if((H===true&&!--B.readyWait)||(H!==true&&!B.isReady)){if(!cE.body){return setTimeout(B.ready,1)
}B.isReady=true;
if(H!==true&&--B.readyWait>0){return
}E.fireWith(cE,[B]);
if(B.fn.trigger){B(cE).trigger("ready").off("ready")
}}},bindReady:function(){if(E){return
}E=B.Callbacks("once memory");
if(cE.readyState==="complete"){return setTimeout(B.ready,1)
}if(cE.addEventListener){cE.addEventListener("DOMContentLoaded",A,false);
ci.addEventListener("load",B.ready,false)
}else{if(cE.attachEvent){cE.attachEvent("onreadystatechange",A);
ci.attachEvent("onload",B.ready);
var I=false;
try{I=ci.frameElement==null
}catch(H){}if(cE.documentElement.doScroll&&I){w()
}}}},isFunction:function(H){return B.type(H)==="function"
},isArray:Array.isArray||function(H){return B.type(H)==="array"
},isWindow:function(H){return H!=null&&H==H.window
},isNumeric:function(H){return !isNaN(parseFloat(H))&&isFinite(H)
},type:function(H){return H==null?String(H):u[p.call(H)]||"object"
},isPlainObject:function(H){if(!H||B.type(H)!=="object"||H.nodeType||B.isWindow(H)){return false
}try{if(H.constructor&&!z.call(H,"constructor")&&!z.call(H.constructor.prototype,"isPrototypeOf")){return false
}}catch(I){return false
}var J;
for(J in H){}return J===cs||z.call(H,J)
},isEmptyObject:function(H){for(var I in H){return false
}return true
},error:function(H){throw new Error(H)
},parseJSON:function(H){if(typeof H!=="string"||!H){return null
}H=B.trim(H);
if(ci.JSON&&ci.JSON.parse){return ci.JSON.parse(H)
}if(n.test(H.replace(d,"@").replace(l,"]").replace(s,""))){return(new Function("return "+H))()
}B.error("Invalid JSON: "+H)
},parseXML:function(I){if(typeof I!=="string"||!I){return null
}var K,J;
try{if(ci.DOMParser){J=new DOMParser();
K=J.parseFromString(I,"text/xml")
}else{K=new ActiveXObject("Microsoft.XMLDOM");
K.async="false";
K.loadXML(I)
}}catch(H){K=cs
}if(!K||!K.documentElement||K.getElementsByTagName("parsererror").length){B.error("Invalid XML: "+I)
}return K
},noop:function(){},globalEval:function(H){if(H&&o.test(H)){(ci.execScript||function(I){ci["eval"].call(ci,I)
})(H)
}},camelCase:function(H){return H.replace(a,"ms-").replace(F,h)
},nodeName:function(H,I){return H.nodeName&&H.nodeName.toUpperCase()===I.toUpperCase()
},each:function(I,M,J){var K,H=0,N=I.length,L=N===cs||B.isFunction(I);
if(J){if(L){for(K in I){if(M.apply(I[K],J)===false){break
}}}else{for(;
H<N;
){if(M.apply(I[H++],J)===false){break
}}}}else{if(L){for(K in I){if(M.call(I[K],K,I[K])===false){break
}}}else{for(;
H<N;
){if(M.call(I[H],H,I[H++])===false){break
}}}}return I
},trim:m?function(H){return H==null?"":m.call(H)
}:function(H){return H==null?"":H.toString().replace(v,"").replace(C,"")
},makeArray:function(H,J){var K=J||[];
if(H!=null){var I=B.type(H);
if(H.length==null||I==="string"||I==="function"||I==="regexp"||B.isWindow(H)){r.call(K,H)
}else{B.merge(K,H)
}}return K
},inArray:function(I,H,J){var K;
if(H){if(y){return y.call(H,I,J)
}K=H.length;
J=J?J<0?Math.max(0,K+J):J:0;
for(;
J<K;
J++){if(J in H&&H[J]===I){return J
}}}return -1
},merge:function(H,J){var I=H.length,K=0;
if(typeof J.length==="number"){for(var L=J.length;
K<L;
K++){H[I++]=J[K]
}}else{while(J[K]!==cs){H[I++]=J[K++]
}}H.length=I;
return H
},grep:function(K,M,L){var J=[],N;
L=!!L;
for(var I=0,H=K.length;
I<H;
I++){N=!!M(K[I],I);
if(L!==N){J.push(K[I])
}}return J
},map:function(P,I,H){var K,J,L=[],N=0,O=P.length,M=P instanceof B||O!==cs&&typeof O==="number"&&((O>0&&P[0]&&P[O-1])||O===0||B.isArray(P));
if(M){for(;
N<O;
N++){K=I(P[N],N,H);
if(K!=null){L[L.length]=K
}}}else{for(J in P){K=I(P[J],J,H);
if(K!=null){L[L.length]=K
}}}return L.concat.apply([],L)
},guid:1,proxy:function(H,I){if(typeof I==="string"){var J=H[I];
I=H;
H=J
}if(!B.isFunction(H)){return cs
}var L=q.call(arguments,2),K=function(){return H.apply(I,L.concat(q.call(arguments)))
};
K.guid=H.guid=H.guid||K.guid||B.guid++;
return K
},access:function(R,L,I,K,N,H,J){var P,M=I==null,O=0,Q=R.length;
if(I&&typeof I==="object"){for(O in I){B.access(R,L,O,I[O],1,H,K)
}N=1
}else{if(K!==cs){P=J===cs&&B.isFunction(K);
if(M){if(P){P=L;
L=function(U,S,T){return P.call(B(U),T)
}
}else{L.call(R,K);
L=null
}}if(L){for(;
O<Q;
O++){L(R[O],I,P?K.call(R[O],O,L(R[O],I)):K,J)
}}N=1
}}return N?R:M?L.call(R):Q?L(R[0],I):H
},now:function(){return(new Date()).getTime()
},uaMatch:function(H){H=H.toLowerCase();
var I=t.exec(H)||j.exec(H)||k.exec(H)||H.indexOf("compatible")<0&&i.exec(H)||[];
return{browser:I[1]||"",version:I[2]||"0"}
},sub:function(){function J(L,K){return new J.fn.init(L,K)
}B.extend(true,J,this);
J.superclass=this;
J.fn=J.prototype=this();
J.fn.constructor=J;
J.sub=this.sub;
J.fn.init=function H(L,K){if(K&&K instanceof B&&!(K instanceof J)){K=J(K)
}return B.fn.init.call(this,L,K,I)
};
J.fn.init.prototype=J.fn;
var I=J(cE);
return J
},browser:{}});
B.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(H,I){u["[object "+I+"]"]=I.toLowerCase()
});
f=B.uaMatch(c);
if(f.browser){B.browser[f.browser]=true;
B.browser.version=f.version
}if(B.browser.webkit){B.browser.safari=true
}if(o.test("\xA0")){v=/^[\s\xA0]+/;
C=/[\s\xA0]+$/
}D=B(cE);
if(cE.addEventListener){A=function(){cE.removeEventListener("DOMContentLoaded",A,false);
B.ready()
}
}else{if(cE.attachEvent){A=function(){if(cE.readyState==="complete"){cE.detachEvent("onreadystatechange",A);
B.ready()
}}
}}function w(){if(B.isReady){return
}try{cE.documentElement.doScroll("left")
}catch(H){setTimeout(w,1);
return
}B.ready()
}return B
})();
var dA={};
function b7(b){var a=dA[b]={},d,c;
b=b.split(/\s+/);
for(d=0,c=b.length;
d<c;
d++){a[b[d]]=true
}return a
}bS.Callbacks=function(g){g=g?(dA[g]||b7(g)):{};
var m=[],l=[],f,c,d,h,b,a,j=function(q){var p,s,n,o,r;
for(p=0,s=q.length;
p<s;
p++){n=q[p];
o=bS.type(n);
if(o==="array"){j(n)
}else{if(o==="function"){if(!g.unique||!k.has(n)){m.push(n)
}}}}},i=function(n,o){o=o||[];
f=!g.memory||[n,o];
c=true;
d=true;
a=h||0;
h=0;
b=m.length;
for(;
m&&a<b;
a++){if(m[a].apply(n,o)===false&&g.stopOnFalse){f=true;
break
}}d=false;
if(m){if(!g.once){if(l&&l.length){f=l.shift();
k.fireWith(f[0],f[1])
}}else{if(f===true){k.disable()
}else{m=[]
}}}},k={add:function(){if(m){var n=m.length;
j(arguments);
if(d){b=m.length
}else{if(f&&f!==true){h=n;
i(f[0],f[1])
}}}return this
},remove:function(){if(m){var q=arguments,o=0,n=q.length;
for(;
o<n;
o++){for(var p=0;
p<m.length;
p++){if(q[o]===m[p]){if(d){if(p<=b){b--;
if(p<=a){a--
}}}m.splice(p--,1);
if(g.unique){break
}}}}}return this
},has:function(o){if(m){var p=0,n=m.length;
for(;
p<n;
p++){if(o===m[p]){return true
}}}return false
},empty:function(){m=[];
return this
},disable:function(){m=l=f=cs;
return this
},disabled:function(){return !m
},lock:function(){l=cs;
if(!f||f===true){k.disable()
}return this
},locked:function(){return !l
},fireWith:function(n,o){if(l){if(d){if(!g.once){l.push([n,o])
}}else{if(!(g.once&&f)){i(n,o)
}}}return this
},fire:function(){k.fireWith(this,arguments);
return this
},fired:function(){return !!c
}};
return k
};
var di=[].slice;
bS.extend({Deferred:function(f){var g=bS.Callbacks("once memory"),h=bS.Callbacks("once memory"),i=bS.Callbacks("memory"),d="pending",b={resolve:g,reject:h,notify:i},j={done:g.add,fail:h.add,progress:i.add,state:function(){return d
},isResolved:g.fired,isRejected:h.fired,then:function(l,m,k){a.done(l).fail(m).progress(k);
return this
},always:function(){a.done.apply(a,arguments).fail.apply(a,arguments);
return this
},pipe:function(k,l,m){return bS.Deferred(function(n){bS.each({done:[k,"resolve"],fail:[l,"reject"],progress:[m,"notify"]},function(p,r){var q=r[0],s=r[1],o;
if(bS.isFunction(q)){a[p](function(){o=q.apply(this,arguments);
if(o&&bS.isFunction(o.promise)){o.promise().then(n.resolve,n.reject,n.notify)
}else{n[s+"With"](this===a?n:this,[o])
}})
}else{a[p](n[s])
}})
}).promise()
},promise:function(k){if(k==null){k=j
}else{for(var l in j){k[l]=j[l]
}}return k
}},a=j.promise({}),c;
for(c in b){a[c]=b[c].fire;
a[c+"With"]=b[c].fireWith
}a.done(function(){d="resolved"
},h.disable,i.lock).fail(function(){d="rejected"
},g.disable,i.lock);
if(f){f.call(a,a)
}return a
},when:function(b){var g=di.call(arguments,0),i=0,d=g.length,a=new Array(d),h=d,f=d,l=d<=1&&b&&bS.isFunction(b.promise)?b:bS.Deferred(),j=l.promise();
function k(m){return function(n){g[m]=arguments.length>1?di.call(arguments,0):n;
if(!(--h)){l.resolveWith(l,g)
}}
}function c(m){return function(n){a[m]=arguments.length>1?di.call(arguments,0):n;
l.notifyWith(j,a)
}
}if(d>1){for(;
i<d;
i++){if(g[i]&&g[i].promise&&bS.isFunction(g[i].promise)){g[i].promise().then(k(i),l.reject,c(i))
}else{--h
}}if(!h){l.resolveWith(l,g)
}}else{if(l!==b){l.resolveWith(l,d?[b]:[])
}}return j
}});
bS.support=(function(){var i,k,n,m,g,o,p,c,f,b,d,h,j=cE.createElement("div"),l=cE.documentElement;
j.setAttribute("className","t");
j.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
k=j.getElementsByTagName("*");
n=j.getElementsByTagName("a")[0];
if(!k||!k.length||!n){return{}
}m=cE.createElement("select");
g=m.appendChild(cE.createElement("option"));
o=j.getElementsByTagName("input")[0];
i={leadingWhitespace:(j.firstChild.nodeType===3),tbody:!j.getElementsByTagName("tbody").length,htmlSerialize:!!j.getElementsByTagName("link").length,style:/top/.test(n.getAttribute("style")),hrefNormalized:(n.getAttribute("href")==="/a"),opacity:/^0.55/.test(n.style.opacity),cssFloat:!!n.style.cssFloat,checkOn:(o.value==="on"),optSelected:g.selected,getSetAttribute:j.className!=="t",enctype:!!cE.createElement("form").enctype,html5Clone:cE.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,pixelMargin:true};
bS.boxModel=i.boxModel=(cE.compatMode==="CSS1Compat");
o.checked=true;
i.noCloneChecked=o.cloneNode(true).checked;
m.disabled=true;
i.optDisabled=!g.disabled;
try{delete j.test
}catch(a){i.deleteExpando=false
}if(!j.addEventListener&&j.attachEvent&&j.fireEvent){j.attachEvent("onclick",function(){i.noCloneEvent=false
});
j.cloneNode(true).fireEvent("onclick")
}o=cE.createElement("input");
o.value="t";
o.setAttribute("type","radio");
i.radioValue=o.value==="t";
o.setAttribute("checked","checked");
o.setAttribute("name","t");
j.appendChild(o);
p=cE.createDocumentFragment();
p.appendChild(j.lastChild);
i.checkClone=p.cloneNode(true).cloneNode(true).lastChild.checked;
i.appendChecked=o.checked;
p.removeChild(o);
p.appendChild(j);
if(j.attachEvent){for(d in {submit:1,change:1,focusin:1}){b="on"+d;
h=(b in j);
if(!h){j.setAttribute(b,"return;");
h=(typeof j[b]==="function")
}i[d+"Bubbles"]=h
}}p.removeChild(j);
p=m=g=j=o=null;
bS(function(){var A,r,q,s,y,x,v,C,D,w,z,B,t,u=cE.getElementsByTagName("body")[0];
if(!u){return
}C=1;
t="padding:0;margin:0;border:";
z="position:absolute;top:0;left:0;width:1px;height:1px;";
B=t+"0;visibility:hidden;";
D="style='"+z+t+"5px solid #000;";
w="<div "+D+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div><table "+D+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
A=cE.createElement("div");
A.style.cssText=B+"width:0;height:0;position:static;top:0;margin-top:"+C+"px";
u.insertBefore(A,u.firstChild);
j=cE.createElement("div");
A.appendChild(j);
j.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>";
c=j.getElementsByTagName("td");
h=(c[0].offsetHeight===0);
c[0].style.display="";
c[1].style.display="none";
i.reliableHiddenOffsets=h&&(c[0].offsetHeight===0);
if(ci.getComputedStyle){j.innerHTML="";
v=cE.createElement("div");
v.style.width="0";
v.style.marginRight="0";
j.style.width="2px";
j.appendChild(v);
i.reliableMarginRight=(parseInt((ci.getComputedStyle(v,null)||{marginRight:0}).marginRight,10)||0)===0
}if(typeof j.style.zoom!=="undefined"){j.innerHTML="";
j.style.width=j.style.padding="1px";
j.style.border=0;
j.style.overflow="hidden";
j.style.display="inline";
j.style.zoom=1;
i.inlineBlockNeedsLayout=(j.offsetWidth===3);
j.style.display="block";
j.style.overflow="visible";
j.innerHTML="<div style='width:5px;'></div>";
i.shrinkWrapBlocks=(j.offsetWidth!==3)
}j.style.cssText=z+B;
j.innerHTML=w;
r=j.firstChild;
q=r.firstChild;
y=r.nextSibling.firstChild.firstChild;
x={doesNotAddBorder:(q.offsetTop!==5),doesAddBorderForTableAndCells:(y.offsetTop===5)};
q.style.position="fixed";
q.style.top="20px";
x.fixedPosition=(q.offsetTop===20||q.offsetTop===15);
q.style.position=q.style.top="";
r.style.overflow="hidden";
r.style.position="relative";
x.subtractsBorderForOverflowNotVisible=(q.offsetTop===-5);
x.doesNotIncludeMarginInBodyOffset=(u.offsetTop!==C);
if(ci.getComputedStyle){j.style.marginTop="1%";
i.pixelMargin=(ci.getComputedStyle(j,null)||{marginTop:0}).marginTop!=="1%"
}if(typeof A.style.zoom!=="undefined"){A.style.zoom=1
}u.removeChild(A);
v=j=A=null;
bS.extend(i,x)
});
return i
})();
var c9=/^(?:\{.*\}|\[.*\])$/,dt=/([A-Z])/g;
bS.extend({cache:{},uuid:0,expando:"jQuery"+(bS.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(a){a=a.nodeType?bS.cache[a[bS.expando]]:a[bS.expando];
return !!a&&!ch(a)
},data:function(g,i,d,f){if(!bS.acceptData(g)){return
}var j,b,m,l=bS.expando,n=typeof i==="string",k=g.nodeType,c=k?bS.cache:g,h=k?g[l]:g[l]&&l,a=i==="events";
if((!h||!c[h]||(!a&&!f&&!c[h].data))&&n&&d===cs){return
}if(!h){if(k){g[l]=h=++bS.uuid
}else{h=l
}}if(!c[h]){c[h]={};
if(!k){c[h].toJSON=bS.noop
}}if(typeof i==="object"||typeof i==="function"){if(f){c[h]=bS.extend(c[h],i)
}else{c[h].data=bS.extend(c[h].data,i)
}}j=b=c[h];
if(!f){if(!b.data){b.data={}
}b=b.data
}if(d!==cs){b[bS.camelCase(i)]=d
}if(a&&!b[i]){return j.events
}if(n){m=b[i];
if(m==null){m=b[bS.camelCase(i)]
}}else{m=b
}return m
},removeData:function(g,i,f){if(!bS.acceptData(g)){return
}var a,b,d,k=bS.expando,j=g.nodeType,c=j?bS.cache:g,h=j?g[k]:k;
if(!c[h]){return
}if(i){a=f?c[h]:c[h].data;
if(a){if(!bS.isArray(i)){if(i in a){i=[i]
}else{i=bS.camelCase(i);
if(i in a){i=[i]
}else{i=i.split(" ")
}}}for(b=0,d=i.length;
b<d;
b++){delete a[i[b]]
}if(!(f?ch:bS.isEmptyObject)(a)){return
}}}if(!f){delete c[h].data;
if(!ch(c[h])){return
}}if(bS.support.deleteExpando||!c.setInterval){delete c[h]
}else{c[h]=null
}if(j){if(bS.support.deleteExpando){delete g[k]
}else{if(g.removeAttribute){g.removeAttribute(k)
}else{g[k]=null
}}}},_data:function(a,b,c){return bS.data(a,b,c,true)
},acceptData:function(a){if(a.nodeName){var b=bS.noData[a.nodeName.toLowerCase()];
if(b){return !(b===true||a.getAttribute("classid")!==b)
}}return true
}});
bS.fn.extend({data:function(j,k){var f,i,a,d,g,h=this[0],b=0,c=null;
if(j===cs){if(this.length){c=bS.data(h);
if(h.nodeType===1&&!bS._data(h,"parsedAttrs")){a=h.attributes;
for(g=a.length;
b<g;
b++){d=a[b].name;
if(d.indexOf("data-")===0){d=bS.camelCase(d.substring(5));
dx(h,d,c[d])
}}bS._data(h,"parsedAttrs",true)
}}return c
}if(typeof j==="object"){return this.each(function(){bS.data(this,j)
})
}f=j.split(".",2);
f[1]=f[1]?"."+f[1]:"";
i=f[1]+"!";
return bS.access(this,function(l){if(l===cs){c=this.triggerHandler("getData"+i,[f[0]]);
if(c===cs&&h){c=bS.data(h,j);
c=dx(h,j,c)
}return c===cs&&f[1]?this.data(f[0]):c
}f[1]=l;
this.each(function(){var m=bS(this);
m.triggerHandler("setData"+i,f);
bS.data(this,j,l);
m.triggerHandler("changeData"+i,f)
})
},null,k,arguments.length>1,null,false)
},removeData:function(a){return this.each(function(){bS.removeData(this,a)
})
}});
function dx(d,f,c){if(c===cs&&d.nodeType===1){var a="data-"+f.replace(dt,"-$1").toLowerCase();
c=d.getAttribute(a);
if(typeof c==="string"){try{c=c==="true"?true:c==="false"?false:c==="null"?null:bS.isNumeric(c)?+c:c9.test(c)?bS.parseJSON(c):c
}catch(b){}bS.data(d,f,c)
}else{c=cs
}}return c
}function ch(a){for(var b in a){if(b==="data"&&bS.isEmptyObject(a[b])){continue
}if(b!=="toJSON"){return false
}}return true
}function b6(d,g,f){var h=g+"defer",a=g+"queue",c=g+"mark",b=bS._data(d,h);
if(b&&(f==="queue"||!bS._data(d,a))&&(f==="mark"||!bS._data(d,c))){setTimeout(function(){if(!bS._data(d,a)&&!bS._data(d,c)){bS.removeData(d,h,true);
b.fire()
}},0)
}}bS.extend({_mark:function(a,b){if(a){b=(b||"fx")+"mark";
bS._data(a,b,(bS._data(a,b)||0)+1)
}},_unmark:function(c,d,a){if(c!==true){a=d;
d=c;
c=false
}if(d){a=a||"fx";
var b=a+"mark",f=c?0:((bS._data(d,b)||1)-1);
if(f){bS._data(d,b,f)
}else{bS.removeData(d,b,true);
b6(d,a,"mark")
}}},queue:function(a,b,c){var d;
if(a){b=(b||"fx")+"queue";
d=bS._data(a,b);
if(c){if(!d||bS.isArray(c)){d=bS._data(a,b,bS.makeArray(c))
}else{d.push(c)
}}return d||[]
}},dequeue:function(c,d){d=d||"fx";
var a=bS.queue(c,d),f=a.shift(),b={};
if(f==="inprogress"){f=a.shift()
}if(f){if(d==="fx"){a.unshift("inprogress")
}bS._data(c,d+".run",b);
f.call(c,function(){bS.dequeue(c,d)
},b)
}if(!a.length){bS.removeData(c,d+"queue "+d+".run",true);
b6(c,d,"queue")
}}});
bS.fn.extend({queue:function(b,a){var c=2;
if(typeof b!=="string"){a=b;
b="fx";
c--
}if(arguments.length<c){return bS.queue(this[0],b)
}return a===cs?this:this.each(function(){var d=bS.queue(this,b,a);
if(b==="fx"&&d[0]!=="inprogress"){bS.dequeue(this,b)
}})
},dequeue:function(a){return this.each(function(){bS.dequeue(this,a)
})
},delay:function(a,b){a=bS.fx?bS.fx.speeds[a]||a:a;
b=b||"fx";
return this.queue(b,function(d,f){var c=setTimeout(d,a);
f.stop=function(){clearTimeout(c)
}
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(k,h){if(typeof k!=="string"){h=k;
k=cs
}k=k||"fx";
var c=bS.Deferred(),i=this,f=i.length,a=1,d=k+"defer",b=k+"queue",l=k+"mark",g;
function j(){if(!(--a)){c.resolveWith(i,[i])
}}while(f--){if((g=bS.data(i[f],d,cs,true)||(bS.data(i[f],b,cs,true)||bS.data(i[f],l,cs,true))&&bS.data(i[f],d,bS.Callbacks("once memory"),true))){a++;
g.add(j)
}}j();
return c.promise(h)
}});
var dc=/[\n\t\r]/g,cW=/\s+/,c7=/\r/g,bN=/^(?:button|input)$/i,cI=/^(?:button|input|object|select|textarea)$/i,bI=/^a(?:rea)?$/i,cO=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,cD=bS.support.getSetAttribute,ce,c3,dm;
bS.fn.extend({attr:function(b,a){return bS.access(this,bS.attr,b,a,arguments.length>1)
},removeAttr:function(a){return this.each(function(){bS.removeAttr(this,a)
})
},prop:function(b,a){return bS.access(this,bS.prop,b,a,arguments.length>1)
},removeProp:function(a){a=bS.propFix[a]||a;
return this.each(function(){try{this[a]=cs;
delete this[a]
}catch(b){}})
},addClass:function(f){var h,i,a,g,b,d,c;
if(bS.isFunction(f)){return this.each(function(j){bS(this).addClass(f.call(this,j,this.className))
})
}if(f&&typeof f==="string"){h=f.split(cW);
for(i=0,a=this.length;
i<a;
i++){g=this[i];
if(g.nodeType===1){if(!g.className&&h.length===1){g.className=f
}else{b=" "+g.className+" ";
for(d=0,c=h.length;
d<c;
d++){if(!~b.indexOf(" "+h[d]+" ")){b+=h[d]+" "
}}g.className=bS.trim(b)
}}}}return this
},removeClass:function(b){var h,i,a,f,g,d,c;
if(bS.isFunction(b)){return this.each(function(j){bS(this).removeClass(b.call(this,j,this.className))
})
}if((b&&typeof b==="string")||b===cs){h=(b||"").split(cW);
for(i=0,a=this.length;
i<a;
i++){f=this[i];
if(f.nodeType===1&&f.className){if(b){g=(" "+f.className+" ").replace(dc," ");
for(d=0,c=h.length;
d<c;
d++){g=g.replace(" "+h[d]+" "," ")
}f.className=bS.trim(g)
}else{f.className=""
}}}}return this
},toggleClass:function(c,a){var d=typeof c,b=typeof a==="boolean";
if(bS.isFunction(c)){return this.each(function(f){bS(this).toggleClass(c.call(this,f,this.className,a),a)
})
}return this.each(function(){if(d==="string"){var j,g=0,i=bS(this),h=a,f=c.split(cW);
while((j=f[g++])){h=b?h:!i.hasClass(j);
i[h?"addClass":"removeClass"](j)
}}else{if(d==="undefined"||d==="boolean"){if(this.className){bS._data(this,"__className__",this.className)
}this.className=this.className||c===false?"":bS._data(this,"__className__")||""
}}})
},hasClass:function(b){var c=" "+b+" ",d=0,a=this.length;
for(;
d<a;
d++){if(this[d].nodeType===1&&(" "+this[d].className+" ").replace(dc," ").indexOf(c)>-1){return true
}}return false
},val:function(d){var c,a,b,f=this[0];
if(!arguments.length){if(f){c=bS.valHooks[f.type]||bS.valHooks[f.nodeName.toLowerCase()];
if(c&&"get" in c&&(a=c.get(f,"value"))!==cs){return a
}a=f.value;
return typeof a==="string"?a.replace(c7,""):a==null?"":a
}return
}b=bS.isFunction(d);
return this.each(function(i){var g=bS(this),h;
if(this.nodeType!==1){return
}if(b){h=d.call(this,i,g.val())
}else{h=d
}if(h==null){h=""
}else{if(typeof h==="number"){h+=""
}else{if(bS.isArray(h)){h=bS.map(h,function(j){return j==null?"":j+""
})
}}}c=bS.valHooks[this.type]||bS.valHooks[this.nodeName.toLowerCase()];
if(!c||!("set" in c)||c.set(this,h,"value")===cs){this.value=h
}})
}});
bS.extend({valHooks:{option:{get:function(b){var a=b.attributes.value;
return !a||a.specified?b.value:b.text
}},select:{get:function(c){var b,i,d,g,f=c.selectedIndex,a=[],j=c.options,h=c.type==="select-one";
if(f<0){return null
}i=h?f:0;
d=h?f+1:j.length;
for(;
i<d;
i++){g=j[i];
if(g.selected&&(bS.support.optDisabled?!g.disabled:g.getAttribute("disabled")===null)&&(!g.parentNode.disabled||!bS.nodeName(g.parentNode,"optgroup"))){b=bS(g).val();
if(h){return b
}a.push(b)
}}if(h&&!a.length&&j.length){return bS(j[f]).val()
}return a
},set:function(a,c){var b=bS.makeArray(c);
bS(a).find("option").each(function(){this.selected=bS.inArray(bS(this).val(),b)>=0
});
if(!b.length){a.selectedIndex=-1
}return b
}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(h,g,f,b){var i,d,c,a=h.nodeType;
if(!h||a===3||a===8||a===2){return
}if(b&&g in bS.attrFn){return bS(h)[g](f)
}if(typeof h.getAttribute==="undefined"){return bS.prop(h,g,f)
}c=a!==1||!bS.isXMLDoc(h);
if(c){g=g.toLowerCase();
d=bS.attrHooks[g]||(cO.test(g)?c3:ce)
}if(f!==cs){if(f===null){bS.removeAttr(h,g);
return
}else{if(d&&"set" in d&&c&&(i=d.set(h,f,g))!==cs){return i
}else{h.setAttribute(g,""+f);
return f
}}}else{if(d&&"get" in d&&c&&(i=d.get(h,g))!==null){return i
}else{i=h.getAttribute(g);
return i===null?cs:i
}}},removeAttr:function(f,h){var b,d,i,c,a,g=0;
if(h&&f.nodeType===1){d=h.toLowerCase().split(cW);
c=d.length;
for(;
g<c;
g++){i=d[g];
if(i){b=bS.propFix[i]||i;
a=cO.test(i);
if(!a){bS.attr(f,i,"")
}f.removeAttribute(cD?i:b);
if(a&&b in f){f[b]=false
}}}}},attrHooks:{type:{set:function(b,a){if(bN.test(b.nodeName)&&b.parentNode){bS.error("type property can't be changed")
}else{if(!bS.support.radioValue&&a==="radio"&&bS.nodeName(b,"input")){var c=b.value;
b.setAttribute("type",a);
if(c){b.value=c
}return a
}}}},value:{get:function(a,b){if(ce&&bS.nodeName(a,"button")){return ce.get(a,b)
}return b in a?a.value:null
},set:function(a,c,b){if(ce&&bS.nodeName(a,"button")){return ce.set(a,c,b)
}a.value=c
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b,g,f){var h,d,c,a=b.nodeType;
if(!b||a===3||a===8||a===2){return
}c=a!==1||!bS.isXMLDoc(b);
if(c){g=bS.propFix[g]||g;
d=bS.propHooks[g]
}if(f!==cs){if(d&&"set" in d&&(h=d.set(b,f,g))!==cs){return h
}else{return(b[g]=f)
}}else{if(d&&"get" in d&&(h=d.get(b,g))!==null){return h
}else{return b[g]
}}},propHooks:{tabIndex:{get:function(a){var b=a.getAttributeNode("tabindex");
return b&&b.specified?parseInt(b.value,10):cI.test(a.nodeName)||bI.test(a.nodeName)&&a.href?0:cs
}}}});
bS.attrHooks.tabindex=bS.propHooks.tabIndex;
c3={get:function(a,b){var c,d=bS.prop(a,b);
return d===true||typeof d!=="boolean"&&(c=a.getAttributeNode(b))&&c.nodeValue!==false?b.toLowerCase():cs
},set:function(a,c,b){var d;
if(c===false){bS.removeAttr(a,b)
}else{d=bS.propFix[b]||b;
if(d in a){a[d]=true
}a.setAttribute(b,b.toLowerCase())
}return b
}};
if(!cD){dm={name:true,id:true,coords:true};
ce=bS.valHooks.button={get:function(c,a){var b;
b=c.getAttributeNode(a);
return b&&(dm[a]?b.nodeValue!=="":b.specified)?b.nodeValue:cs
},set:function(d,c,a){var b=d.getAttributeNode(a);
if(!b){b=cE.createAttribute(a);
d.setAttributeNode(b)
}return(b.nodeValue=c+"")
}};
bS.attrHooks.tabindex.set=ce.set;
bS.each(["width","height"],function(a,b){bS.attrHooks[b]=bS.extend(bS.attrHooks[b],{set:function(d,c){if(c===""){d.setAttribute(b,"auto");
return c
}}})
});
bS.attrHooks.contenteditable={get:ce.get,set:function(a,c,b){if(c===""){c="false"
}ce.set(a,c,b)
}}
}if(!bS.support.hrefNormalized){bS.each(["href","src","width","height"],function(a,b){bS.attrHooks[b]=bS.extend(bS.attrHooks[b],{get:function(c){var d=c.getAttribute(b,2);
return d===null?cs:d
}})
})
}if(!bS.support.style){bS.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||cs
},set:function(b,a){return(b.style.cssText=""+a)
}}
}if(!bS.support.optSelected){bS.propHooks.selected=bS.extend(bS.propHooks.selected,{get:function(a){var b=a.parentNode;
if(b){b.selectedIndex;
if(b.parentNode){b.parentNode.selectedIndex
}}return null
}})
}if(!bS.support.enctype){bS.propFix.enctype="encoding"
}if(!bS.support.checkOn){bS.each(["radio","checkbox"],function(){bS.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value
}}
})
}bS.each(["radio","checkbox"],function(){bS.valHooks[this]=bS.extend(bS.valHooks[this],{set:function(b,a){if(bS.isArray(a)){return(b.checked=bS.inArray(bS(b).val(),a)>=0)
}}})
});
var cg=/^(?:textarea|input|select)$/i,bG=/^([^\.]*)?(?:\.(.+))?$/,cu=/(?:^|\s)hover(\.\S+)?\b/,dd=/^key/,cc=/^(?:mouse|contextmenu)|click/,cf=/^(?:focusinfocus|focusoutblur)$/,cd=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,b5=function(b){var a=cd.exec(b);
if(a){a[1]=(a[1]||"").toLowerCase();
a[3]=a[3]&&new RegExp("(?:^|\\s)"+a[3]+"(?:\\s|$)")
}return a
},bK=function(c,b){var a=c.attributes||{};
return((!b[1]||c.nodeName.toLowerCase()===b[1])&&(!b[2]||(a.id||{}).value===b[2])&&(!b[3]||b[3].test((a["class"]||{}).value)))
},bT=function(a){return bS.event.special.hover?a:a.replace(cu,"mouseenter$1 mouseleave$1")
};
bS.event={add:function(h,r,i,b,g){var q,a,f,k,m,o,d,n,l,c,j,p;
if(h.nodeType===3||h.nodeType===8||!r||!i||!(q=bS._data(h))){return
}if(i.handler){l=i;
i=l.handler;
g=l.selector
}if(!i.guid){i.guid=bS.guid++
}f=q.events;
if(!f){q.events=f={}
}a=q.handle;
if(!a){q.handle=a=function(s){return typeof bS!=="undefined"&&(!s||bS.event.triggered!==s.type)?bS.event.dispatch.apply(a.elem,arguments):cs
};
a.elem=h
}r=bS.trim(bT(r)).split(" ");
for(k=0;
k<r.length;
k++){m=bG.exec(r[k])||[];
o=m[1];
d=(m[2]||"").split(".").sort();
p=bS.event.special[o]||{};
o=(g?p.delegateType:p.bindType)||o;
p=bS.event.special[o]||{};
n=bS.extend({type:o,origType:m[1],data:b,handler:i,guid:i.guid,selector:g,quick:g&&b5(g),namespace:d.join(".")},l);
j=f[o];
if(!j){j=f[o]=[];
j.delegateCount=0;
if(!p.setup||p.setup.call(h,b,d,a)===false){if(h.addEventListener){h.addEventListener(o,a,false)
}else{if(h.attachEvent){h.attachEvent("on"+o,a)
}}}}if(p.add){p.add.call(h,n);
if(!n.handler.guid){n.handler.guid=i.guid
}}if(g){j.splice(j.delegateCount++,0,n)
}else{j.push(n)
}bS.event.global[o]=true
}h=null
},global:{},remove:function(d,o,m,i,r){var g=bS.hasData(d)&&bS._data(d),n,h,c,a,q,s,l,j,f,b,p,k;
if(!g||!(j=g.events)){return
}o=bS.trim(bT(o||"")).split(" ");
for(n=0;
n<o.length;
n++){h=bG.exec(o[n])||[];
c=a=h[1];
q=h[2];
if(!c){for(c in j){bS.event.remove(d,c+o[n],m,i,true)
}continue
}f=bS.event.special[c]||{};
c=(i?f.delegateType:f.bindType)||c;
p=j[c]||[];
s=p.length;
q=q?new RegExp("(^|\\.)"+q.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
for(l=0;
l<p.length;
l++){k=p[l];
if((r||a===k.origType)&&(!m||m.guid===k.guid)&&(!q||q.test(k.namespace))&&(!i||i===k.selector||i==="**"&&k.selector)){p.splice(l--,1);
if(k.selector){p.delegateCount--
}if(f.remove){f.remove.call(d,k)
}}}if(p.length===0&&s!==p.length){if(!f.teardown||f.teardown.call(d,q)===false){bS.removeEvent(d,c,g.handle)
}delete j[c]
}}if(bS.isEmptyObject(j)){b=g.handle;
if(b){b.elem=null
}bS.removeData(d,["events","handle"],true)
}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(l,p,b,h){if(b&&(b.nodeType===3||b.nodeType===8)){return
}var m=l.type||l,g=[],d,j,q,k,c,f,n,o,a,i;
if(cf.test(m+bS.event.triggered)){return
}if(m.indexOf("!")>=0){m=m.slice(0,-1);
j=true
}if(m.indexOf(".")>=0){g=m.split(".");
m=g.shift();
g.sort()
}if((!b||bS.event.customEvent[m])&&!bS.event.global[m]){return
}l=typeof l==="object"?l[bS.expando]?l:new bS.Event(m,l):new bS.Event(m);
l.type=m;
l.isTrigger=true;
l.exclusive=j;
l.namespace=g.join(".");
l.namespace_re=l.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;
f=m.indexOf(":")<0?"on"+m:"";
if(!b){d=bS.cache;
for(q in d){if(d[q].events&&d[q].events[m]){bS.event.trigger(l,p,d[q].handle.elem,true)
}}return
}l.result=cs;
if(!l.target){l.target=b
}p=p!=null?bS.makeArray(p):[];
p.unshift(l);
n=bS.event.special[m]||{};
if(n.trigger&&n.trigger.apply(b,p)===false){return
}a=[[b,n.bindType||m]];
if(!h&&!n.noBubble&&!bS.isWindow(b)){i=n.delegateType||m;
k=cf.test(i+m)?b:b.parentNode;
c=null;
for(;
k;
k=k.parentNode){a.push([k,i]);
c=k
}if(c&&c===b.ownerDocument){a.push([c.defaultView||c.parentWindow||ci,i])
}}for(q=0;
q<a.length&&!l.isPropagationStopped();
q++){k=a[q][0];
l.type=a[q][1];
o=(bS._data(k,"events")||{})[l.type]&&bS._data(k,"handle");
if(o){o.apply(k,p)
}o=f&&k[f];
if(o&&bS.acceptData(k)&&o.apply(k,p)===false){l.preventDefault()
}}l.type=m;
if(!h&&!l.isDefaultPrevented()){if((!n._default||n._default.apply(b.ownerDocument,p)===false)&&!(m==="click"&&bS.nodeName(b,"a"))&&bS.acceptData(b)){if(f&&b[m]&&((m!=="focus"&&m!=="blur")||l.target.offsetWidth!==0)&&!bS.isWindow(b)){c=b[f];
if(c){b[f]=null
}bS.event.triggered=m;
b[m]();
bS.event.triggered=cs;
if(c){b[f]=c
}}}}return l.result
},dispatch:function(i){i=bS.event.fix(i||ci.event);
var p=((bS._data(this,"events")||{})[i.type]||[]),q=p.delegateCount,h=[].slice.call(arguments,0),o=!i.exclusive&&!i.namespace,c=bS.event.special[i.type]||{},l=[],d,k,f,s,b,g,r,j,m,n,a;
h[0]=i;
i.delegateTarget=this;
if(c.preDispatch&&c.preDispatch.call(this,i)===false){return
}if(q&&!(i.button&&i.type==="click")){s=bS(this);
s.context=this.ownerDocument||this;
for(f=i.target;
f!=this;
f=f.parentNode||this){if(f.disabled!==true){g={};
j=[];
s[0]=f;
for(d=0;
d<q;
d++){m=p[d];
n=m.selector;
if(g[n]===cs){g[n]=(m.quick?bK(f,m.quick):s.is(n))
}if(g[n]){j.push(m)
}}if(j.length){l.push({elem:f,matches:j})
}}}}if(p.length>q){l.push({elem:this,matches:p.slice(q)})
}for(d=0;
d<l.length&&!i.isPropagationStopped();
d++){r=l[d];
i.currentTarget=r.elem;
for(k=0;
k<r.matches.length&&!i.isImmediatePropagationStopped();
k++){m=r.matches[k];
if(o||(!i.namespace&&!m.namespace)||i.namespace_re&&i.namespace_re.test(m.namespace)){i.data=m.data;
i.handleObj=m;
b=((bS.event.special[m.origType]||{}).handle||m.handler).apply(r.elem,h);
if(b!==cs){i.result=b;
if(b===false){i.preventDefault();
i.stopPropagation()
}}}}}if(c.postDispatch){c.postDispatch.call(this,i)
}return i.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){if(a.which==null){a.which=b.charCode!=null?b.charCode:b.keyCode
}return a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(g,h){var d,b,c,a=h.button,f=h.fromElement;
if(g.pageX==null&&h.clientX!=null){d=g.target.ownerDocument||cE;
b=d.documentElement;
c=d.body;
g.pageX=h.clientX+(b&&b.scrollLeft||c&&c.scrollLeft||0)-(b&&b.clientLeft||c&&c.clientLeft||0);
g.pageY=h.clientY+(b&&b.scrollTop||c&&c.scrollTop||0)-(b&&b.clientTop||c&&c.clientTop||0)
}if(!g.relatedTarget&&f){g.relatedTarget=f===g.target?h.toElement:f
}if(!g.which&&a!==cs){g.which=(a&1?1:(a&2?3:(a&4?2:0)))
}return g
}},fix:function(g){if(g[bS.expando]){return g
}var a,b,d=g,f=bS.event.fixHooks[g.type]||{},c=f.props?this.props.concat(f.props):this.props;
g=bS.Event(d);
for(a=c.length;
a;
){b=c[--a];
g[b]=d[b]
}if(!g.target){g.target=d.srcElement||cE
}if(g.target.nodeType===3){g.target=g.target.parentNode
}if(g.metaKey===cs){g.metaKey=g.ctrlKey
}return f.filter?f.filter(g,d):g
},special:{ready:{setup:bS.bindReady},load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(c,a,b){if(bS.isWindow(this)){this.onbeforeunload=b
}},teardown:function(a,b){if(this.onbeforeunload===b){this.onbeforeunload=null
}}}},simulate:function(f,c,d,a){var b=bS.extend(new bS.Event(),d,{type:f,isSimulated:true,originalEvent:{}});
if(a){bS.event.trigger(b,null,c)
}else{bS.event.dispatch.call(c,b)
}if(b.isDefaultPrevented()){d.preventDefault()
}}};
bS.event.handle=bS.event.dispatch;
bS.removeEvent=cE.removeEventListener?function(a,b,c){if(a.removeEventListener){a.removeEventListener(b,c,false)
}}:function(a,b,c){if(a.detachEvent){a.detachEvent("on"+b,c)
}};
bS.Event=function(a,b){if(!(this instanceof bS.Event)){return new bS.Event(a,b)
}if(a&&a.type){this.originalEvent=a;
this.type=a.type;
this.isDefaultPrevented=(a.defaultPrevented||a.returnValue===false||a.getPreventDefault&&a.getPreventDefault())?bL:b3
}else{this.type=a
}if(b){bS.extend(this,b)
}this.timeStamp=a&&a.timeStamp||bS.now();
this[bS.expando]=true
};
function b3(){return false
}function bL(){return true
}bS.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bL;
var a=this.originalEvent;
if(!a){return
}if(a.preventDefault){a.preventDefault()
}else{a.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=bL;
var a=this.originalEvent;
if(!a){return
}if(a.stopPropagation){a.stopPropagation()
}a.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bL;
this.stopPropagation()
},isDefaultPrevented:b3,isPropagationStopped:b3,isImmediatePropagationStopped:b3};
bS.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){bS.event.special[a]={delegateType:b,bindType:b,handle:function(c){var f=this,h=c.relatedTarget,d=c.handleObj,i=d.selector,g;
if(!h||(h!==f&&!bS.contains(f,h))){c.type=d.origType;
g=d.handler.apply(this,arguments);
c.type=b
}return g
}}
});
if(!bS.support.submitBubbles){bS.event.special.submit={setup:function(){if(bS.nodeName(this,"form")){return false
}bS.event.add(this,"click._submit keypress._submit",function(b){var c=b.target,a=bS.nodeName(c,"input")||bS.nodeName(c,"button")?c.form:cs;
if(a&&!a._submit_attached){bS.event.add(a,"submit._submit",function(d){d._submit_bubble=true
});
a._submit_attached=true
}})
},postDispatch:function(a){if(a._submit_bubble){delete a._submit_bubble;
if(this.parentNode&&!a.isTrigger){bS.event.simulate("submit",this.parentNode,a,true)
}}},teardown:function(){if(bS.nodeName(this,"form")){return false
}bS.event.remove(this,"._submit")
}}
}if(!bS.support.changeBubbles){bS.event.special.change={setup:function(){if(cg.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bS.event.add(this,"propertychange._change",function(a){if(a.originalEvent.propertyName==="checked"){this._just_changed=true
}});
bS.event.add(this,"click._change",function(a){if(this._just_changed&&!a.isTrigger){this._just_changed=false;
bS.event.simulate("change",this,a,true)
}})
}return false
}bS.event.add(this,"beforeactivate._change",function(b){var a=b.target;
if(cg.test(a.nodeName)&&!a._change_attached){bS.event.add(a,"change._change",function(c){if(this.parentNode&&!c.isSimulated&&!c.isTrigger){bS.event.simulate("change",this.parentNode,c,true)
}});
a._change_attached=true
}})
},handle:function(a){var b=a.target;
if(this!==b||a.isSimulated||a.isTrigger||(b.type!=="radio"&&b.type!=="checkbox")){return a.handleObj.handler.apply(this,arguments)
}},teardown:function(){bS.event.remove(this,"._change");
return cg.test(this.nodeName)
}}
}if(!bS.support.focusinBubbles){bS.each({focus:"focusin",blur:"focusout"},function(c,b){var a=0,d=function(f){bS.event.simulate(b,f.target,bS.event.fix(f),true)
};
bS.event.special[b]={setup:function(){if(a++===0){cE.addEventListener(c,d,true)
}},teardown:function(){if(--a===0){cE.removeEventListener(c,d,true)
}}}
})
}bS.fn.extend({on:function(h,d,b,c,a){var g,f;
if(typeof h==="object"){if(typeof d!=="string"){b=b||d;
d=cs
}for(f in h){this.on(f,d,b,h[f],a)
}return this
}if(b==null&&c==null){c=d;
b=d=cs
}else{if(c==null){if(typeof d==="string"){c=b;
b=cs
}else{c=b;
b=d;
d=cs
}}}if(c===false){c=b3
}else{if(!c){return this
}}if(a===1){g=c;
c=function(i){bS().off(i);
return g.apply(this,arguments)
};
c.guid=g.guid||(g.guid=bS.guid++)
}return this.each(function(){bS.event.add(this,h,c,b,d)
})
},one:function(a,b,c,d){return this.on(a,b,c,d,1)
},off:function(f,c,b){if(f&&f.preventDefault&&f.handleObj){var a=f.handleObj;
bS(f.delegateTarget).off(a.namespace?a.origType+"."+a.namespace:a.origType,a.selector,a.handler);
return this
}if(typeof f==="object"){for(var d in f){this.off(d,c,f[d])
}return this
}if(c===false||typeof c==="function"){b=c;
c=cs
}if(b===false){b=b3
}return this.each(function(){bS.event.remove(this,f,b,c)
})
},bind:function(b,c,a){return this.on(b,null,c,a)
},unbind:function(b,a){return this.off(b,null,a)
},live:function(b,c,a){bS(this.context).on(b,this.selector,c,a);
return this
},die:function(b,a){bS(this.context).off(b,this.selector||"**",a);
return this
},delegate:function(b,a,c,d){return this.on(a,b,c,d)
},undelegate:function(b,a,c){return arguments.length==1?this.off(b,"**"):this.off(a,b,c)
},trigger:function(b,a){return this.each(function(){bS.event.trigger(b,a,this)
})
},triggerHandler:function(b,a){if(this[0]){return bS.event.trigger(b,a,this[0],true)
}},toggle:function(d){var a=arguments,c=d.guid||bS.guid++,f=0,b=function(g){var h=(bS._data(this,"lastToggle"+d.guid)||0)%f;
bS._data(this,"lastToggle"+d.guid,h+1);
g.preventDefault();
return a[h].apply(this,arguments)||false
};
b.guid=c;
while(f<a.length){a[f++].guid=c
}return this.click(b)
},hover:function(b,a){return this.mouseenter(b).mouseleave(a||b)
}});
bS.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(a,b){bS.fn[b]=function(c,d){if(d==null){d=c;
c=null
}return arguments.length>0?this.on(b,null,c,d):this.trigger(b)
};
if(bS.attrFn){bS.attrFn[b]=true
}if(dd.test(b)){bS.event.fixHooks[b]=bS.event.keyHooks
}if(cc.test(b)){bS.event.fixHooks[b]=bS.event.mouseHooks
}});
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var n=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,u="sizcache"+(Math.random()+"").replace(".",""),l=0,g=Object.prototype.toString,v=false,w=true,h=/\\/g,c=/\r\n/g,a=/\W/;
[0,0].sort(function(){w=false;
return 0
});
var k=function(A,H,x,N){x=x||[];
H=H||cE;
var L=H;
if(H.nodeType!==1&&H.nodeType!==9){return[]
}if(!A||typeof A!=="string"){return x
}var D,J,F,E,K,G,I,y,B=true,C=k.isXML(H),z=[],M=A;
do{n.exec("");
D=n.exec(M);
if(D){M=D[3];
z.push(D[1]);
if(D[2]){E=D[3];
break
}}}while(D);
if(z.length>1&&t.exec(A)){if(z.length===2&&s.relative[z[0]]){J=f(z[0]+z[1],H,N)
}else{J=s.relative[z[0]]?[H]:k(z.shift(),H);
while(z.length){A=z.shift();
if(s.relative[A]){A+=z.shift()
}J=f(A,J,N)
}}}else{if(!N&&z.length>1&&H.nodeType===9&&!C&&s.match.ID.test(z[0])&&!s.match.ID.test(z[z.length-1])){K=k.find(z.shift(),H,C);
H=K.expr?k.filter(K.expr,K.set)[0]:K.set[0]
}if(H){K=N?{expr:z.pop(),set:r(N)}:k.find(z.pop(),z.length===1&&(z[0]==="~"||z[0]==="+")&&H.parentNode?H.parentNode:H,C);
J=K.expr?k.filter(K.expr,K.set):K.set;
if(z.length>0){F=r(J)
}else{B=false
}while(z.length){G=z.pop();
I=G;
if(!s.relative[G]){G=""
}else{I=z.pop()
}if(I==null){I=H
}s.relative[G](F,I,C)
}}else{F=z=[]
}}if(!F){F=J
}if(!F){k.error(G||A)
}if(g.call(F)==="[object Array]"){if(!B){x.push.apply(x,F)
}else{if(H&&H.nodeType===1){for(y=0;
F[y]!=null;
y++){if(F[y]&&(F[y]===true||F[y].nodeType===1&&k.contains(H,F[y]))){x.push(J[y])
}}}else{for(y=0;
F[y]!=null;
y++){if(F[y]&&F[y].nodeType===1){x.push(J[y])
}}}}}else{r(F,x)
}if(E){k(E,L,x,N);
k.uniqueSort(x)
}return x
};
k.uniqueSort=function(x){if(j){v=w;
x.sort(j);
if(v){for(var y=1;
y<x.length;
y++){if(x[y]===x[y-1]){x.splice(y--,1)
}}}}return x
};
k.matches=function(y,x){return k(y,null,null,x)
};
k.matchesSelector=function(y,x){return k(x,null,null,[y]).length>0
};
k.find=function(y,F,x){var z,D,B,C,A,E;
if(!y){return[]
}for(D=0,B=s.order.length;
D<B;
D++){A=s.order[D];
if((C=s.leftMatch[A].exec(y))){E=C[1];
C.splice(1,1);
if(E.substr(E.length-1)!=="\\"){C[1]=(C[1]||"").replace(h,"");
z=s.find[A](C,F,x);
if(z!=null){y=y.replace(s.match[A],"");
break
}}}}if(!z){z=typeof F.getElementsByTagName!=="undefined"?F.getElementsByTagName("*"):[]
}return{set:z,expr:y}
};
k.filter=function(L,M,I,B){var z,H,N,F,J,E,C,A,K,D=L,G=[],x=M,y=M&&M[0]&&k.isXML(M[0]);
while(L&&M.length){for(N in s.filter){if((z=s.leftMatch[N].exec(L))!=null&&z[2]){E=s.filter[N];
C=z[1];
H=false;
z.splice(1,1);
if(C.substr(C.length-1)==="\\"){continue
}if(x===G){G=[]
}if(s.preFilter[N]){z=s.preFilter[N](z,x,I,G,B,y);
if(!z){H=F=true
}else{if(z===true){continue
}}}if(z){for(A=0;
(J=x[A])!=null;
A++){if(J){F=E(J,z,A,x);
K=B^F;
if(I&&F!=null){if(K){H=true
}else{x[A]=false
}}else{if(K){G.push(J);
H=true
}}}}}if(F!==cs){if(!I){x=G
}L=L.replace(s.match[N],"");
if(!H){return[]
}break
}}}if(L===D){if(H==null){k.error(L)
}else{break
}}D=L
}return x
};
k.error=function(x){throw new Error("Syntax error, unrecognized expression: "+x)
};
var o=k.getText=function(x){var z,y,B=x.nodeType,A="";
if(B){if(B===1||B===9||B===11){if(typeof x.textContent==="string"){return x.textContent
}else{if(typeof x.innerText==="string"){return x.innerText.replace(c,"")
}else{for(x=x.firstChild;
x;
x=x.nextSibling){A+=o(x)
}}}}else{if(B===3||B===4){return x.nodeValue
}}}else{for(z=0;
(y=x[z]);
z++){if(y.nodeType!==8){A+=o(y)
}}}return A
};
var s=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(x){return x.getAttribute("href")
},type:function(x){return x.getAttribute("type")
}},relative:{"+":function(D,A){var y=typeof A==="string",E=y&&!a.test(A),C=y&&!E;
if(E){A=A.toLowerCase()
}for(var z=0,B=D.length,x;
z<B;
z++){if((x=D[z])){while((x=x.previousSibling)&&x.nodeType!==1){}D[z]=C||x&&x.nodeName.toLowerCase()===A?x||false:x===A
}}if(C){k.filter(A,D,true)
}},">":function(C,A){var D,x=typeof A==="string",z=0,B=C.length;
if(x&&!a.test(A)){A=A.toLowerCase();
for(;
z<B;
z++){D=C[z];
if(D){var y=D.parentNode;
C[z]=y.nodeName.toLowerCase()===A?y:false
}}}else{for(;
z<B;
z++){D=C[z];
if(D){C[z]=x?D.parentNode:D.parentNode===A
}}if(x){k.filter(A,C,true)
}}},"":function(y,A,C){var x,z=l++,B=d;
if(typeof A==="string"&&!a.test(A)){A=A.toLowerCase();
x=A;
B=p
}B("parentNode",A,z,y,x,C)
},"~":function(y,A,C){var x,z=l++,B=d;
if(typeof A==="string"&&!a.test(A)){A=A.toLowerCase();
x=A;
B=p
}B("previousSibling",A,z,y,x,C)
}},find:{ID:function(z,y,x){if(typeof y.getElementById!=="undefined"&&!x){var A=y.getElementById(z[1]);
return A&&A.parentNode?[A]:[]
}},NAME:function(z,C){if(typeof C.getElementsByName!=="undefined"){var A=[],x=C.getElementsByName(z[1]);
for(var y=0,B=x.length;
y<B;
y++){if(x[y].getAttribute("name")===z[1]){A.push(x[y])
}}return A.length===0?null:A
}},TAG:function(y,x){if(typeof x.getElementsByTagName!=="undefined"){return x.getElementsByTagName(y[1])
}}},preFilter:{CLASS:function(y,A,z,C,D,B){y=" "+y[1].replace(h,"")+" ";
if(B){return y
}for(var x=0,E;
(E=A[x])!=null;
x++){if(E){if(D^(E.className&&(" "+E.className+" ").replace(/[\t\n\r]/g," ").indexOf(y)>=0)){if(!z){C.push(E)
}}else{if(z){A[x]=false
}}}}return false
},ID:function(x){return x[1].replace(h,"")
},TAG:function(x,y){return x[1].replace(h,"").toLowerCase()
},CHILD:function(y){if(y[1]==="nth"){if(!y[2]){k.error(y[0])
}y[2]=y[2].replace(/^\+|\s*/g,"");
var x=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(y[2]==="even"&&"2n"||y[2]==="odd"&&"2n+1"||!/\D/.test(y[2])&&"0n+"+y[2]||y[2]);
y[2]=(x[1]+(x[2]||1))-0;
y[3]=x[3]-0
}else{if(y[2]){k.error(y[0])
}}y[0]=l++;
return y
},ATTR:function(x,A,z,B,D,C){var y=x[1]=x[1].replace(h,"");
if(!C&&s.attrMap[y]){x[1]=s.attrMap[y]
}x[4]=(x[4]||x[5]||"").replace(h,"");
if(x[2]==="~="){x[4]=" "+x[4]+" "
}return x
},PSEUDO:function(x,A,z,B,C){if(x[1]==="not"){if((n.exec(x[3])||"").length>1||/^\w/.test(x[3])){x[3]=k(x[3],null,null,A)
}else{var y=k.filter(x[3],A,z,true^C);
if(!z){B.push.apply(B,y)
}return false
}}else{if(s.match.POS.test(x[0])||s.match.CHILD.test(x[0])){return true
}}return x
},POS:function(x){x.unshift(true);
return x
}},filters:{enabled:function(x){return x.disabled===false&&x.type!=="hidden"
},disabled:function(x){return x.disabled===true
},checked:function(x){return x.checked===true
},selected:function(x){if(x.parentNode){x.parentNode.selectedIndex
}return x.selected===true
},parent:function(x){return !!x.firstChild
},empty:function(x){return !x.firstChild
},has:function(x,y,z){return !!k(z[3],x).length
},header:function(x){return(/h\d/i).test(x.nodeName)
},text:function(x){var z=x.getAttribute("type"),y=x.type;
return x.nodeName.toLowerCase()==="input"&&"text"===y&&(z===y||z===null)
},radio:function(x){return x.nodeName.toLowerCase()==="input"&&"radio"===x.type
},checkbox:function(x){return x.nodeName.toLowerCase()==="input"&&"checkbox"===x.type
},file:function(x){return x.nodeName.toLowerCase()==="input"&&"file"===x.type
},password:function(x){return x.nodeName.toLowerCase()==="input"&&"password"===x.type
},submit:function(x){var y=x.nodeName.toLowerCase();
return(y==="input"||y==="button")&&"submit"===x.type
},image:function(x){return x.nodeName.toLowerCase()==="input"&&"image"===x.type
},reset:function(x){var y=x.nodeName.toLowerCase();
return(y==="input"||y==="button")&&"reset"===x.type
},button:function(x){var y=x.nodeName.toLowerCase();
return y==="input"&&"button"===x.type||y==="button"
},input:function(x){return(/input|select|textarea|button/i).test(x.nodeName)
},focus:function(x){return x===x.ownerDocument.activeElement
}},setFilters:{first:function(x,y){return y===0
},last:function(y,z,A,x){return z===x.length-1
},even:function(x,y){return y%2===0
},odd:function(x,y){return y%2===1
},lt:function(x,y,z){return y<z[3]-0
},gt:function(x,y,z){return y>z[3]-0
},nth:function(x,y,z){return z[3]-0===y
},eq:function(x,y,z){return z[3]-0===y
}},filter:{PSEUDO:function(D,y,z,x){var F=y[1],E=s.filters[F];
if(E){return E(D,z,y,x)
}else{if(F==="contains"){return(D.textContent||D.innerText||o([D])||"").indexOf(y[3])>=0
}else{if(F==="not"){var C=y[3];
for(var A=0,B=C.length;
A<B;
A++){if(C[A]===D){return false
}}return true
}else{k.error(F)
}}}},CHILD:function(D,B){var C,G,z,H,F,A,x,y=B[1],E=D;
switch(y){case"only":case"first":while((E=E.previousSibling)){if(E.nodeType===1){return false
}}if(y==="first"){return true
}E=D;
case"last":while((E=E.nextSibling)){if(E.nodeType===1){return false
}}return true;
case"nth":C=B[2];
G=B[3];
if(C===1&&G===0){return true
}z=B[0];
H=D.parentNode;
if(H&&(H[u]!==z||!D.nodeIndex)){A=0;
for(E=H.firstChild;
E;
E=E.nextSibling){if(E.nodeType===1){E.nodeIndex=++A
}}H[u]=z
}x=D.nodeIndex-G;
if(C===0){return x===0
}else{return(x%C===0&&x/C>=0)
}}},ID:function(x,y){return x.nodeType===1&&x.getAttribute("id")===y
},TAG:function(x,y){return(y==="*"&&x.nodeType===1)||!!x.nodeName&&x.nodeName.toLowerCase()===y
},CLASS:function(x,y){return(" "+(x.className||x.getAttribute("class"))+" ").indexOf(y)>-1
},ATTR:function(D,y){var z=y[1],B=k.attr?k.attr(D,z):s.attrHandle[z]?s.attrHandle[z](D):D[z]!=null?D[z]:D.getAttribute(z),C=B+"",x=y[2],A=y[4];
return B==null?x==="!=":!x&&k.attr?B!=null:x==="="?C===A:x==="*="?C.indexOf(A)>=0:x==="~="?(" "+C+" ").indexOf(A)>=0:!A?C&&B!==false:x==="!="?C!==A:x==="^="?C.indexOf(A)===0:x==="$="?C.substr(C.length-A.length)===A:x==="|="?C===A||C.substr(0,A.length+1)===A+"-":false
},POS:function(x,A,z,C){var B=A[2],y=s.setFilters[B];
if(y){return y(x,z,A,C)
}}}};
var t=s.match.POS,m=function(x,y){return"\\"+(y-0+1)
};
for(var i in s.match){s.match[i]=new RegExp(s.match[i].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
s.leftMatch[i]=new RegExp(/(^(?:.|\r|\n)*?)/.source+s.match[i].source.replace(/\\(\d+)/g,m))
}s.match.globalPOS=t;
var r=function(x,y){x=Array.prototype.slice.call(x,0);
if(y){y.push.apply(y,x);
return y
}return x
};
try{Array.prototype.slice.call(cE.documentElement.childNodes,0)[0].nodeType
}catch(b){r=function(x,y){var z=0,A=y||[];
if(g.call(x)==="[object Array]"){Array.prototype.push.apply(A,x)
}else{if(typeof x.length==="number"){for(var B=x.length;
z<B;
z++){A.push(x[z])
}}else{for(;
x[z];
z++){A.push(x[z])
}}}return A
}
}var j,q;
if(cE.documentElement.compareDocumentPosition){j=function(x,y){if(x===y){v=true;
return 0
}if(!x.compareDocumentPosition||!y.compareDocumentPosition){return x.compareDocumentPosition?-1:1
}return x.compareDocumentPosition(y)&4?-1:1
}
}else{j=function(x,y){if(x===y){v=true;
return 0
}else{if(x.sourceIndex&&y.sourceIndex){return x.sourceIndex-y.sourceIndex
}}var A,E,D=[],F=[],B=x.parentNode,z=y.parentNode,G=B;
if(B===z){return q(x,y)
}else{if(!B){return -1
}else{if(!z){return 1
}}}while(G){D.unshift(G);
G=G.parentNode
}G=z;
while(G){F.unshift(G);
G=G.parentNode
}A=D.length;
E=F.length;
for(var C=0;
C<A&&C<E;
C++){if(D[C]!==F[C]){return q(D[C],F[C])
}}return C===A?q(x,F[C],-1):q(D[C],y,1)
};
q=function(z,A,y){if(z===A){return y
}var x=z.nextSibling;
while(x){if(x===A){return -1
}x=x.nextSibling
}return 1
}
}(function(){var y=cE.createElement("div"),x="script"+(new Date()).getTime(),z=cE.documentElement;
y.innerHTML="<a name='"+x+"'/>";
z.insertBefore(y,z.firstChild);
if(cE.getElementById(x)){s.find.ID=function(A,D,C){if(typeof D.getElementById!=="undefined"&&!C){var B=D.getElementById(A[1]);
return B?B.id===A[1]||typeof B.getAttributeNode!=="undefined"&&B.getAttributeNode("id").nodeValue===A[1]?[B]:cs:[]
}};
s.filter.ID=function(C,B){var A=typeof C.getAttributeNode!=="undefined"&&C.getAttributeNode("id");
return C.nodeType===1&&A&&A.nodeValue===B
}
}z.removeChild(y);
z=y=null
})();
(function(){var x=cE.createElement("div");
x.appendChild(cE.createComment(""));
if(x.getElementsByTagName("*").length>0){s.find.TAG=function(B,C){var y=C.getElementsByTagName(B[1]);
if(B[1]==="*"){var z=[];
for(var A=0;
y[A];
A++){if(y[A].nodeType===1){z.push(y[A])
}}y=z
}return y
}
}x.innerHTML="<a href='#'></a>";
if(x.firstChild&&typeof x.firstChild.getAttribute!=="undefined"&&x.firstChild.getAttribute("href")!=="#"){s.attrHandle.href=function(y){return y.getAttribute("href",2)
}
}x=null
})();
if(cE.querySelectorAll){(function(){var A=k,x=cE.createElement("div"),y="__sizzle__";
x.innerHTML="<p class='TEST'></p>";
if(x.querySelectorAll&&x.querySelectorAll(".TEST").length===0){return
}k=function(I,E,N,J){E=E||cE;
if(!J&&!k.isXML(E)){var K=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(I);
if(K&&(E.nodeType===1||E.nodeType===9)){if(K[1]){return r(E.getElementsByTagName(I),N)
}else{if(K[2]&&s.find.CLASS&&E.getElementsByClassName){return r(E.getElementsByClassName(K[2]),N)
}}}if(E.nodeType===9){if(I==="body"&&E.body){return r([E.body],N)
}else{if(K&&K[3]){var B=E.getElementById(K[3]);
if(B&&B.parentNode){if(B.id===K[3]){return r([B],N)
}}else{return r([],N)
}}}try{return r(E.querySelectorAll(I),N)
}catch(M){}}else{if(E.nodeType===1&&E.nodeName.toLowerCase()!=="object"){var D=E,C=E.getAttribute("id"),F=C||y,G=E.parentNode,H=/^\s*[+~]/.test(I);
if(!C){E.setAttribute("id",F)
}else{F=F.replace(/'/g,"\\$&")
}if(H&&G){E=E.parentNode
}try{if(!H||G){return r(E.querySelectorAll("[id='"+F+"'] "+I),N)
}}catch(L){}finally{if(!C){D.removeAttribute("id")
}}}}}return A(I,E,N,J)
};
for(var z in A){k[z]=A[z]
}x=null
})()
}(function(){var B=cE.documentElement,z=B.matchesSelector||B.mozMatchesSelector||B.webkitMatchesSelector||B.msMatchesSelector;
if(z){var x=!z.call(cE.createElement("div"),"div"),A=false;
try{z.call(cE.documentElement,"[test!='']:sizzle")
}catch(y){A=true
}k.matchesSelector=function(E,C){C=C.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!k.isXML(E)){try{if(A||!s.match.PSEUDO.test(C)&&!/!=/.test(C)){var F=z.call(E,C);
if(F||!x||E.document&&E.document.nodeType!==11){return F
}}}catch(D){}}return k(C,null,null,[E]).length>0
}
}})();
(function(){var x=cE.createElement("div");
x.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!x.getElementsByClassName||x.getElementsByClassName("e").length===0){return
}x.lastChild.className="e";
if(x.getElementsByClassName("e").length===1){return
}s.order.splice(1,0,"CLASS");
s.find.CLASS=function(A,z,y){if(typeof z.getElementsByClassName!=="undefined"&&!y){return z.getElementsByClassName(A[1])
}};
x=null
})();
function p(E,z,A,G,y,x){for(var C=0,D=G.length;
C<D;
C++){var F=G[C];
if(F){var B=false;
F=F[E];
while(F){if(F[u]===A){B=G[F.sizset];
break
}if(F.nodeType===1&&!x){F[u]=A;
F.sizset=C
}if(F.nodeName.toLowerCase()===z){B=F;
break
}F=F[E]
}G[C]=B
}}}function d(E,z,A,G,y,x){for(var C=0,D=G.length;
C<D;
C++){var F=G[C];
if(F){var B=false;
F=F[E];
while(F){if(F[u]===A){B=G[F.sizset];
break
}if(F.nodeType===1){if(!x){F[u]=A;
F.sizset=C
}if(typeof z!=="string"){if(F===z){B=true;
break
}}else{if(k.filter(z,[F]).length>0){B=F;
break
}}}F=F[E]
}G[C]=B
}}}if(cE.documentElement.contains){k.contains=function(x,y){return x!==y&&(x.contains?x.contains(y):true)
}
}else{if(cE.documentElement.compareDocumentPosition){k.contains=function(x,y){return !!(x.compareDocumentPosition(y)&16)
}
}else{k.contains=function(){return false
}
}}k.isXML=function(y){var x=(y?y.ownerDocument||y:0).documentElement;
return x?x.nodeName!=="HTML":false
};
var f=function(D,F,z){var A,y=[],B="",x=F.nodeType?[F]:F;
while((A=s.match.PSEUDO.exec(D))){B+=A[0];
D=D.replace(s.match.PSEUDO,"")
}D=s.relative[D]?D+"*":D;
for(var C=0,E=x.length;
C<E;
C++){k(D,x[C],y,z)
}return k.filter(B,y)
};
k.attr=bS.attr;
k.selectors.attrMap={};
bS.find=k;
bS.expr=k.selectors;
bS.expr[":"]=bS.expr.filters;
bS.unique=k.uniqueSort;
bS.text=k.getText;
bS.isXMLDoc=k.isXML;
bS.contains=k.contains
})();
var c1=/Until$/,cM=/^(?:parents|prevUntil|prevAll)/,cm=/,/,bY=/^.[^:#\[\.,]*$/,cn=Array.prototype.slice,cx=bS.expr.match.globalPOS,cy={children:true,contents:true,next:true,prev:true};
bS.fn.extend({find:function(f){var i=this,d,a;
if(typeof f!=="string"){return bS(f).filter(function(){for(d=0,a=i.length;
d<a;
d++){if(bS.contains(i[d],this)){return true
}}})
}var h=this.pushStack("","find",f),g,c,b;
for(d=0,a=this.length;
d<a;
d++){g=h.length;
bS.find(f,this[d],h);
if(d>0){for(c=g;
c<h.length;
c++){for(b=0;
b<g;
b++){if(h[b]===h[c]){h.splice(c--,1);
break
}}}}}return h
},has:function(a){var b=bS(a);
return this.filter(function(){for(var c=0,d=b.length;
c<d;
c++){if(bS.contains(this,b[c])){return true
}}})
},not:function(a){return this.pushStack(dl(this,a,false),"not",a)
},filter:function(a){return this.pushStack(dl(this,a,true),"filter",a)
},is:function(a){return !!a&&(typeof a==="string"?cx.test(a)?bS(a,this.context).index(this[0])>=0:bS.filter(a,this).length>0:this.filter(a).length>0)
},closest:function(f,h){var a=[],i,d,b=this[0];
if(bS.isArray(f)){var c=1;
while(b&&b.ownerDocument&&b!==h){for(i=0;
i<f.length;
i++){if(bS(b).is(f[i])){a.push({selector:f[i],elem:b,level:c})
}}b=b.parentNode;
c++
}return a
}var g=cx.test(f)||typeof f!=="string"?bS(f,h||this.context):0;
for(i=0,d=this.length;
i<d;
i++){b=this[i];
while(b){if(g?g.index(b)>-1:bS.find.matchesSelector(b,f)){a.push(b);
break
}else{b=b.parentNode;
if(!b||!b.ownerDocument||b===h||b.nodeType===11){break
}}}}a=a.length>1?bS.unique(a):a;
return this.pushStack(a,"closest",f)
},index:function(a){if(!a){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof a==="string"){return bS.inArray(this[0],bS(a))
}return bS.inArray(a.jquery?a[0]:a,this)
},add:function(b,a){var c=typeof b==="string"?bS(b,a):bS.makeArray(b&&b.nodeType?[b]:b),d=bS.merge(this.get(),c);
return this.pushStack(cJ(c[0])||cJ(d[0])?d:bS.unique(d))
},andSelf:function(){return this.add(this.prevObject)
}});
function cJ(a){return !a||!a.parentNode||a.parentNode.nodeType===11
}bS.each({parent:function(a){var b=a.parentNode;
return b&&b.nodeType!==11?b:null
},parents:function(a){return bS.dir(a,"parentNode")
},parentsUntil:function(a,b,c){return bS.dir(a,"parentNode",c)
},next:function(a){return bS.nth(a,2,"nextSibling")
},prev:function(a){return bS.nth(a,2,"previousSibling")
},nextAll:function(a){return bS.dir(a,"nextSibling")
},prevAll:function(a){return bS.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return bS.dir(a,"nextSibling",c)
},prevUntil:function(a,b,c){return bS.dir(a,"previousSibling",c)
},siblings:function(a){return bS.sibling((a.parentNode||{}).firstChild,a)
},children:function(a){return bS.sibling(a.firstChild)
},contents:function(a){return bS.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:bS.makeArray(a.childNodes)
}},function(b,a){bS.fn[b]=function(c,f){var d=bS.map(this,a,c);
if(!c1.test(b)){f=c
}if(f&&typeof f==="string"){d=bS.filter(f,d)
}d=this.length>1&&!cy[b]?bS.unique(d):d;
if((this.length>1||cm.test(f))&&cM.test(b)){d=d.reverse()
}return this.pushStack(d,b,cn.call(arguments).join(","))
}
});
bS.extend({filter:function(c,b,a){if(a){c=":not("+c+")"
}return b.length===1?bS.find.matchesSelector(b[0],c)?[b[0]]:[]:bS.find.matches(c,b)
},dir:function(f,a,c){var b=[],d=f[a];
while(d&&d.nodeType!==9&&(c===cs||d.nodeType!==1||!bS(d).is(c))){if(d.nodeType===1){b.push(d)
}d=d[a]
}return b
},nth:function(c,b,f,d){b=b||1;
var a=0;
for(;
c;
c=c[f]){if(c.nodeType===1&&++a===b){break
}}return c
},sibling:function(c,a){var b=[];
for(;
c;
c=c.nextSibling){if(c.nodeType===1&&c!==a){b.push(c)
}}return b
}});
function dl(c,d,b){d=d||0;
if(bS.isFunction(d)){return bS.grep(c,function(f,g){var h=!!d.call(f,g,f);
return h===b
})
}else{if(d.nodeType){return bS.grep(c,function(f,g){return(f===d)===b
})
}else{if(typeof d==="string"){var a=bS.grep(c,function(f){return f.nodeType===1
});
if(bY.test(d)){return bS.filter(d,a,!b)
}else{d=bS.filter(d,a)
}}}}return bS.grep(c,function(f,g){return(bS.inArray(f,d)>=0)===b
})
}function bV(b){var c=da.split("|"),a=b.createDocumentFragment();
if(a.createElement){while(c.length){a.createElement(c.pop())
}}return a
}var da="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",cV=/ jQuery\d+="(?:\d+|null)"/g,cL=/^\s+/,cj=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,bP=/<([\w:]+)/,by=/<tbody/i,b9=/<|&#?\w+;/,cY=/<(?:script|style)/i,cp=/<(?:script|object|embed|option|style)/i,cU=new RegExp("<(?:"+da+")[\\s/>]","i"),bF=/checked\s*(?:[^=]|=\s*.checked.)/i,b0=/\/(java|ecma)script/i,de=/^\s*<!(?:\[CDATA\[|\-\-)/,cA={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},c0=bV(cE);
cA.optgroup=cA.option;
cA.tbody=cA.tfoot=cA.colgroup=cA.caption=cA.thead;
cA.th=cA.td;
if(!bS.support.htmlSerialize){cA._default=[1,"div<div>","</div>"]
}bS.fn.extend({text:function(a){return bS.access(this,function(b){return b===cs?bS.text(this):this.empty().append((this[0]&&this[0].ownerDocument||cE).createTextNode(b))
},null,a,arguments.length)
},wrapAll:function(b){if(bS.isFunction(b)){return this.each(function(c){bS(this).wrapAll(b.call(this,c))
})
}if(this[0]){var a=bS(b,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){a.insertBefore(this[0])
}a.map(function(){var c=this;
while(c.firstChild&&c.firstChild.nodeType===1){c=c.firstChild
}return c
}).append(this)
}return this
},wrapInner:function(a){if(bS.isFunction(a)){return this.each(function(b){bS(this).wrapInner(a.call(this,b))
})
}return this.each(function(){var b=bS(this),c=b.contents();
if(c.length){c.wrapAll(a)
}else{b.append(a)
}})
},wrap:function(b){var a=bS.isFunction(b);
return this.each(function(c){bS(this).wrapAll(a?b.call(this,c):b)
})
},unwrap:function(){return this.parent().each(function(){if(!bS.nodeName(this,"body")){bS(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(a){if(this.nodeType===1){this.appendChild(a)
}})
},prepend:function(){return this.domManip(arguments,true,function(a){if(this.nodeType===1){this.insertBefore(a,this.firstChild)
}})
},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)
})
}else{if(arguments.length){var a=bS.clean(arguments);
a.push.apply(a,this.toArray());
return this.pushStack(a,"before",arguments)
}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this.nextSibling)
})
}else{if(arguments.length){var a=this.pushStack(this,"after",arguments);
a.push.apply(a,bS.clean(arguments));
return a
}}},remove:function(b,c){for(var a=0,d;
(d=this[a])!=null;
a++){if(!b||bS.filter(b,[d]).length){if(!c&&d.nodeType===1){bS.cleanData(d.getElementsByTagName("*"));
bS.cleanData([d])
}if(d.parentNode){d.parentNode.removeChild(d)
}}}return this
},empty:function(){for(var b=0,a;
(a=this[b])!=null;
b++){if(a.nodeType===1){bS.cleanData(a.getElementsByTagName("*"))
}while(a.firstChild){a.removeChild(a.firstChild)
}}return this
},clone:function(a,b){a=a==null?false:a;
b=b==null?a:b;
return this.map(function(){return bS.clone(this,a,b)
})
},html:function(a){return bS.access(this,function(d){var f=this[0]||{},g=0,b=this.length;
if(d===cs){return f.nodeType===1?f.innerHTML.replace(cV,""):null
}if(typeof d==="string"&&!cY.test(d)&&(bS.support.leadingWhitespace||!cL.test(d))&&!cA[(bP.exec(d)||["",""])[1].toLowerCase()]){d=d.replace(cj,"<$1></$2>");
try{for(;
g<b;
g++){f=this[g]||{};
if(f.nodeType===1){bS.cleanData(f.getElementsByTagName("*"));
f.innerHTML=d
}}f=0
}catch(c){}}if(f){this.empty().append(d)
}},null,a,arguments.length)
},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(bS.isFunction(a)){return this.each(function(c){var d=bS(this),b=d.html();
d.replaceWith(a.call(this,c,b))
})
}if(typeof a!=="string"){a=bS(a).detach()
}return this.each(function(){var c=this.nextSibling,b=this.parentNode;
bS(this).remove();
if(c){bS(c).before(a)
}else{bS(b).append(a)
}})
}else{return this.length?this.pushStack(bS(bS.isFunction(a)?a():a),"replaceWith",a):this
}},detach:function(a){return this.remove(a,true)
},domManip:function(a,j,k){var g,f,b,l,m=a[0],i=[];
if(!bS.support.checkClone&&arguments.length===3&&typeof m==="string"&&bF.test(m)){return this.each(function(){bS(this).domManip(a,j,k,true)
})
}if(bS.isFunction(m)){return this.each(function(n){var o=bS(this);
a[0]=m.call(this,n,j?o.html():cs);
o.domManip(a,j,k)
})
}if(this[0]){l=m&&m.parentNode;
if(bS.support.parentNode&&l&&l.nodeType===11&&l.childNodes.length===this.length){g={fragment:l}
}else{g=bS.buildFragment(a,this,i)
}b=g.fragment;
if(b.childNodes.length===1){f=b=b.firstChild
}else{f=b.firstChild
}if(f){j=j&&bS.nodeName(f,"tr");
for(var h=0,d=this.length,c=d-1;
h<d;
h++){k.call(j?cl(this[h],f):this[h],g.cacheable||(d>1&&h<c)?bS.clone(b,true,true):b)
}}if(i.length){bS.each(i,function(o,n){if(n.src){bS.ajax({type:"GET",global:false,url:n.src,async:false,dataType:"script"})
}else{bS.globalEval((n.text||n.textContent||n.innerHTML||"").replace(de,"/*$0*/"))
}if(n.parentNode){n.parentNode.removeChild(n)
}})
}}return this
}});
function cl(b,a){return bS.nodeName(b,"table")?(b.getElementsByTagName("tbody")[0]||b.appendChild(b.ownerDocument.createElement("tbody"))):b
}function bB(f,a){if(a.nodeType!==1||!bS.hasData(f)){return
}var d,h,c,g=bS._data(f),b=bS._data(a,g),i=g.events;
if(i){delete b.handle;
b.events={};
for(d in i){for(h=0,c=i[d].length;
h<c;
h++){bS.event.add(a,d,i[d][h])
}}}if(b.data){b.data=bS.extend({},b.data)
}}function cT(a,b){var c;
if(b.nodeType!==1){return
}if(b.clearAttributes){b.clearAttributes()
}if(b.mergeAttributes){b.mergeAttributes(a)
}c=b.nodeName.toLowerCase();
if(c==="object"){b.outerHTML=a.outerHTML
}else{if(c==="input"&&(a.type==="checkbox"||a.type==="radio")){if(a.checked){b.defaultChecked=b.checked=a.checked
}if(b.value!==a.value){b.value=a.value
}}else{if(c==="option"){b.selected=a.defaultSelected
}else{if(c==="input"||c==="textarea"){b.defaultValue=a.defaultValue
}else{if(c==="script"&&b.text!==a.text){b.text=a.text
}}}}}b.removeAttribute(bS.expando);
b.removeAttribute("_submit_attached");
b.removeAttribute("_change_attached")
}bS.buildFragment=function(b,h,a){var f,d,i,g,c=b[0];
if(h&&h[0]){g=h[0].ownerDocument||h[0]
}if(!g.createDocumentFragment){g=cE
}if(b.length===1&&typeof c==="string"&&c.length<512&&g===cE&&c.charAt(0)==="<"&&!cp.test(c)&&(bS.support.checkClone||!bF.test(c))&&(bS.support.html5Clone||!cU.test(c))){d=true;
i=bS.fragments[c];
if(i&&i!==1){f=i
}}if(!f){f=g.createDocumentFragment();
bS.clean(b,g,f,a)
}if(d){bS.fragments[c]=i?f:1
}return{fragment:f,cacheable:d}
};
bS.fragments={};
bS.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(b,a){bS.fn[b]=function(j){var d=[],c=bS(j),g=this.length===1&&this[0].parentNode;
if(g&&g.nodeType===11&&g.childNodes.length===1&&c.length===1){c[a](this[0]);
return this
}else{for(var i=0,h=c.length;
i<h;
i++){var f=(i>0?this.clone(true):this).get();
bS(c[i])[a](f);
d=d.concat(f)
}return this.pushStack(d,b,c.selector)
}}
});
function cb(a){if(typeof a.getElementsByTagName!=="undefined"){return a.getElementsByTagName("*")
}else{if(typeof a.querySelectorAll!=="undefined"){return a.querySelectorAll("*")
}else{return[]
}}}function cw(a){if(a.type==="checkbox"||a.type==="radio"){a.defaultChecked=a.checked
}}function cF(b){var a=(b.nodeName||"").toLowerCase();
if(a==="input"){cw(b)
}else{if(a!=="script"&&typeof b.getElementsByTagName!=="undefined"){bS.grep(b.getElementsByTagName("input"),cw)
}}}function cQ(b){var a=cE.createElement("div");
c0.appendChild(a);
a.innerHTML=b.outerHTML;
return a.firstChild
}bS.extend({clone:function(d,g,h){var c,a,f,b=bS.support.html5Clone||bS.isXMLDoc(d)||!cU.test("<"+d.nodeName+">")?d.cloneNode(true):cQ(d);
if((!bS.support.noCloneEvent||!bS.support.noCloneChecked)&&(d.nodeType===1||d.nodeType===11)&&!bS.isXMLDoc(d)){cT(d,b);
c=cb(d);
a=cb(b);
for(f=0;
c[f];
++f){if(a[f]){cT(c[f],a[f])
}}}if(g){bB(d,b);
if(h){c=cb(d);
a=cb(b);
for(f=0;
c[f];
++f){bB(c[f],a[f])
}}}c=a=null;
return b
},clean:function(i,l,o,j){var u,k,r,g=[];
l=l||cE;
if(typeof l.createElement==="undefined"){l=l.ownerDocument||l[0]&&l[0].ownerDocument||cE
}for(var q=0,n;
(n=i[q])!=null;
q++){if(typeof n==="number"){n+=""
}if(!n){continue
}if(typeof n==="string"){if(!b9.test(n)){n=l.createTextNode(n)
}else{n=n.replace(cj,"<$1></$2>");
var a=(bP.exec(n)||["",""])[1].toLowerCase(),f=cA[a]||cA._default,d=f[0],t=l.createElement("div"),c=c0.childNodes,b;
if(l===cE){c0.appendChild(t)
}else{bV(l).appendChild(t)
}t.innerHTML=f[1]+n+f[2];
while(d--){t=t.lastChild
}if(!bS.support.tbody){var h=by.test(n),m=a==="table"&&!h?t.firstChild&&t.firstChild.childNodes:f[1]==="<table>"&&!h?t.childNodes:[];
for(r=m.length-1;
r>=0;
--r){if(bS.nodeName(m[r],"tbody")&&!m[r].childNodes.length){m[r].parentNode.removeChild(m[r])
}}}if(!bS.support.leadingWhitespace&&cL.test(n)){t.insertBefore(l.createTextNode(cL.exec(n)[0]),t.firstChild)
}n=t.childNodes;
if(t){t.parentNode.removeChild(t);
if(c.length>0){b=c[c.length-1];
if(b&&b.parentNode){b.parentNode.removeChild(b)
}}}}}var p;
if(!bS.support.appendChecked){if(n[0]&&typeof(p=n.length)==="number"){for(r=0;
r<p;
r++){cF(n[r])
}}else{cF(n)
}}if(n.nodeType){g.push(n)
}else{g=bS.merge(g,n)
}}if(o){u=function(v){return !v.type||b0.test(v.type)
};
for(q=0;
g[q];
q++){k=g[q];
if(j&&bS.nodeName(k,"script")&&(!k.type||b0.test(k.type))){j.push(k.parentNode?k.parentNode.removeChild(k):k)
}else{if(k.nodeType===1){var s=bS.grep(k.getElementsByTagName("script"),u);
g.splice.apply(g,[q+1,0].concat(s))
}o.appendChild(k)
}}}return g
},cleanData:function(i){var f,h,c=bS.cache,a=bS.event.special,b=bS.support.deleteExpando;
for(var d=0,g;
(g=i[d])!=null;
d++){if(g.nodeName&&bS.noData[g.nodeName.toLowerCase()]){continue
}h=g[bS.expando];
if(h){f=c[h];
if(f&&f.events){for(var j in f.events){if(a[j]){bS.event.remove(g,j)
}else{bS.removeEvent(g,j,f.handle)
}}if(f.handle){f.handle.elem=null
}}if(b){delete g[bS.expando]
}else{if(g.removeAttribute){g.removeAttribute(bS.expando)
}}delete c[h]
}}}});
var cR=/alpha\([^)]*\)/i,cG=/opacity=([^)]*)/,bv=/([A-Z]|^ms)/g,bZ=/^[\-+]?(?:\d*\.)?\d+$/i,dC=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,cv=/^([\-+])=([\-+.\de]+)/,dp=/^margin/,du={position:"absolute",visibility:"hidden",display:"block"},cz=["Top","Right","Bottom","Left"],b2,dj,c4;
bS.fn.css=function(b,a){return bS.access(this,function(d,f,c){return c!==cs?bS.style(d,f,c):bS.css(d,f)
},b,a,arguments.length>1)
};
bS.extend({cssHooks:{opacity:{get:function(c,a){if(a){var b=b2(c,"opacity");
return b===""?"1":b
}else{return c.style.opacity
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":bS.support.cssFloat?"cssFloat":"styleFloat"},style:function(f,g,j,d){if(!f||f.nodeType===3||f.nodeType===8||!f.style){return
}var a,k,c=bS.camelCase(g),h=f.style,i=bS.cssHooks[c];
g=bS.cssProps[c]||c;
if(j!==cs){k=typeof j;
if(k==="string"&&(a=cv.exec(j))){j=(+(a[1]+1)*+a[2])+parseFloat(bS.css(f,g));
k="number"
}if(j==null||k==="number"&&isNaN(j)){return
}if(k==="number"&&!bS.cssNumber[c]){j+="px"
}if(!i||!("set" in i)||(j=i.set(f,j))!==cs){try{h[g]=j
}catch(b){}}}else{if(i&&"get" in i&&(a=i.get(f,false,d))!==cs){return a
}return h[g]
}},css:function(c,d,a){var f,b;
d=bS.camelCase(d);
b=bS.cssHooks[d];
d=bS.cssProps[d]||d;
if(d==="cssFloat"){d="float"
}if(b&&"get" in b&&(f=b.get(c,true,a))!==cs){return f
}else{if(b2){return b2(c,d)
}}},swap:function(d,f,b){var c={},g,a;
for(a in f){c[a]=d.style[a];
d.style[a]=f[a]
}g=b.call(d);
for(a in f){d.style[a]=c[a]
}return g
}});
bS.curCSS=bS.css;
if(cE.defaultView&&cE.defaultView.getComputedStyle){dj=function(g,h){var a,b,d,c,f=g.style;
h=h.replace(bv,"-$1").toLowerCase();
if((b=g.ownerDocument.defaultView)&&(d=b.getComputedStyle(g,null))){a=d.getPropertyValue(h);
if(a===""&&!bS.contains(g.ownerDocument.documentElement,g)){a=bS.style(g,h)
}}if(!bS.support.pixelMargin&&d&&dp.test(h)&&dC.test(a)){c=f.width;
f.width=a;
a=d.width;
f.width=c
}return a
}
}if(cE.documentElement.currentStyle){c4=function(b,h){var g,d,c,a=b.currentStyle&&b.currentStyle[h],f=b.style;
if(a==null&&f&&(c=f[h])){a=c
}if(dC.test(a)){g=f.left;
d=b.runtimeStyle&&b.runtimeStyle.left;
if(d){b.runtimeStyle.left=b.currentStyle.left
}f.left=h==="fontSize"?"1em":a;
a=f.pixelLeft+"px";
f.left=g;
if(d){b.runtimeStyle.left=d
}}return a===""?"auto":a
}
}b2=dj||c4;
function cX(d,g,a){var b=g==="width"?d.offsetWidth:d.offsetHeight,f=g==="width"?1:0,c=4;
if(b>0){if(a!=="border"){for(;
f<c;
f+=2){if(!a){b-=parseFloat(bS.css(d,"padding"+cz[f]))||0
}if(a==="margin"){b+=parseFloat(bS.css(d,a+cz[f]))||0
}else{b-=parseFloat(bS.css(d,"border"+cz[f]+"Width"))||0
}}}return b+"px"
}b=b2(d,g);
if(b<0||b==null){b=d.style[g]
}if(dC.test(b)){return b
}b=parseFloat(b)||0;
if(a){for(;
f<c;
f+=2){b+=parseFloat(bS.css(d,"padding"+cz[f]))||0;
if(a!=="padding"){b+=parseFloat(bS.css(d,"border"+cz[f]+"Width"))||0
}if(a==="margin"){b+=parseFloat(bS.css(d,a+cz[f]))||0
}}}return b+"px"
}bS.each(["height","width"],function(a,b){bS.cssHooks[b]={get:function(c,d,f){if(d){if(c.offsetWidth!==0){return cX(c,b,f)
}else{return bS.swap(c,du,function(){return cX(c,b,f)
})
}}},set:function(d,c){return bZ.test(c)?c+"px":c
}}
});
if(!bS.support.opacity){bS.cssHooks.opacity={get:function(a,b){return cG.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":b?"1":""
},set:function(d,b){var f=d.style,a=d.currentStyle,c=bS.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=a&&a.filter||f.filter||"";
f.zoom=1;
if(b>=1&&bS.trim(g.replace(cR,""))===""){f.removeAttribute("filter");
if(a&&!a.filter){return
}}f.filter=cR.test(g)?g.replace(cR,c):g+" "+c
}}
}bS(function(){if(!bS.support.reliableMarginRight){bS.cssHooks.marginRight={get:function(a,b){return bS.swap(a,{display:"inline-block"},function(){if(b){return b2(a,"margin-right")
}else{return a.style.marginRight
}})
}}
}});
if(bS.expr&&bS.expr.filters){bS.expr.filters.hidden=function(c){var a=c.offsetWidth,b=c.offsetHeight;
return(a===0&&b===0)||(!bS.support.reliableHiddenOffsets&&((c.style&&c.style.display)||bS.css(c,"display"))==="none")
};
bS.expr.filters.visible=function(a){return !bS.expr.filters.hidden(a)
}
}bS.each({margin:"",padding:"",border:"Width"},function(b,a){bS.cssHooks[b+a]={expand:function(d){var f,c=typeof d==="string"?d.split(" "):[d],g={};
for(f=0;
f<4;
f++){g[b+cz[f]+a]=c[f]||c[f-2]||c[0]
}return g
}}
});
var bJ=/%20/g,cN=/\[\]$/,bU=/\r?\n/g,bX=/#.*$/,dq=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,e=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,df=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,db=/^(?:GET|HEAD)$/,bQ=/^\/\//,cr=/\?/,dw=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bE=/^(?:select|textarea)/i,bM=/\s+/,bW=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,a0=bS.fn.load,c2={},bD={},dn,bC,c6=["*/"]+["*"];
try{dn=b1.href
}catch(cC){dn=cE.createElement("a");
dn.href="";
dn=dn.href
}bC=ct.exec(dn.toLowerCase())||[];
function bO(a){return function(g,i){if(typeof g!=="string"){i=g;
g="*"
}if(bS.isFunction(i)){var h=g.toLowerCase().split(bM),j=0,d=h.length,b,f,c;
for(;
j<d;
j++){b=h[j];
c=/^\+/.test(b);
if(c){b=b.substr(1)||"*"
}f=a[b]=a[b]||[];
f[c?"unshift":"push"](i)
}}}
}function c5(i,j,d,k,a,g){a=a||j.dataTypes[0];
g=g||{};
g[a]=true;
var b=i[a],h=0,c=b?b.length:0,f=(i===c2),l;
for(;
h<c&&(f||!l);
h++){l=b[h](j,d,k);
if(typeof l==="string"){if(!f||g[l]){l=cs
}else{j.dataTypes.unshift(l);
l=c5(i,j,d,k,l,g)
}}}if((f||!l)&&!g["*"]){l=c5(i,j,d,k,"*",g)
}return l
}function cP(f,d){var a,c,b=bS.ajaxSettings.flatOptions||{};
for(a in d){if(d[a]!==cs){(b[a]?f:(c||(c={})))[a]=d[a]
}}if(c){bS.extend(true,f,c)
}}bS.fn.extend({load:function(h,b,g){if(typeof h!=="string"&&a0){return a0.apply(this,arguments)
}else{if(!this.length){return this
}}var d=h.indexOf(" ");
if(d>=0){var c=h.slice(d,h.length);
h=h.slice(0,d)
}var f="GET";
if(b){if(bS.isFunction(b)){g=b;
b=cs
}else{if(typeof b==="object"){b=bS.param(b,bS.ajaxSettings.traditional);
f="POST"
}}}var a=this;
bS.ajax({url:h,type:f,dataType:"html",data:b,complete:function(j,k,i){i=j.responseText;
if(j.isResolved()){j.done(function(l){i=l
});
a.html(c?bS("<div>").append(i.replace(dw,"")).find(c):i)
}if(g){a.each(g,[i,k,j])
}}});
return this
},serialize:function(){return bS.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?bS.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||bE.test(this.nodeName)||e.test(this.type))
}).map(function(b,a){var c=bS(this).val();
return c==null?null:bS.isArray(c)?bS.map(c,function(d,f){return{name:a.name,value:d.replace(bU,"\r\n")}
}):{name:a.name,value:c.replace(bU,"\r\n")}
}).get()
}});
bS.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(b,a){bS.fn[a]=function(c){return this.on(a,c)
}
});
bS.each(["get","post"],function(b,a){bS[a]=function(g,d,c,f){if(bS.isFunction(d)){f=f||c;
c=d;
d=cs
}return bS.ajax({type:a,url:g,data:d,success:c,dataType:f})
}
});
bS.extend({getScript:function(b,a){return bS.get(b,cs,a,"script")
},getJSON:function(b,a,c){return bS.get(b,a,c,"json")
},ajaxSetup:function(a,b){if(b){cP(a,bS.ajaxSettings)
}else{b=a;
a=bS.ajaxSettings
}cP(a,b);
return a
},ajaxSettings:{url:dn,isLocal:df.test(bC[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":c6},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":ci.String,"text html":true,"text json":bS.parseJSON,"text xml":bS.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:bO(c2),ajaxTransport:bO(bD),ajax:function(k,o){if(typeof k==="object"){o=k;
k=cs
}o=o||{};
var v=bS.ajaxSetup({},o),a=v.context||v,s=a!==v&&(a.nodeType||a instanceof bS)?bS(a):bS.event,b=bS.Deferred(),g=bS.Callbacks("once memory"),x=v.statusCode||{},w,q={},f={},c,m,i,u,n,y=0,p,j,l={readyState:0,setRequestHeader:function(A,z){if(!y){var B=A.toLowerCase();
A=f[B]=f[B]||A;
q[A]=z
}return this
},getAllResponseHeaders:function(){return y===2?c:null
},getResponseHeader:function(z){var A;
if(y===2){if(!m){m={};
while((A=dq.exec(c))){m[A[1].toLowerCase()]=A[2]
}}A=m[z.toLowerCase()]
}return A===cs?null:A
},overrideMimeType:function(z){if(!y){v.mimeType=z
}return this
},abort:function(z){z=z||"abort";
if(i){i.abort(z)
}t(0,z);
return this
}};
function t(K,D,J,B){if(y===2){return
}y=2;
if(u){clearTimeout(u)
}i=cs;
c=B||"";
l.readyState=K>0?4:0;
var E,F,G,A=D,z=J?b4(v,l,J):cs,C,H;
if(K>=200&&K<300||K===304){if(v.ifModified){if((C=l.getResponseHeader("Last-Modified"))){bS.lastModified[w]=C
}if((H=l.getResponseHeader("Etag"))){bS.etag[w]=H
}}if(K===304){A="notmodified";
E=true
}else{try{F=cB(v,z);
A="success";
E=true
}catch(I){A="parsererror";
G=I
}}}else{G=A;
if(!A||K){A="error";
if(K<0){K=0
}}}l.status=K;
l.statusText=""+(D||A);
if(E){b.resolveWith(a,[F,A,l])
}else{b.rejectWith(a,[l,A,G])
}l.statusCode(x);
x=cs;
if(p){s.trigger("ajax"+(E?"Success":"Error"),[l,v,E?F:G])
}g.fireWith(a,[l,A]);
if(p){s.trigger("ajaxComplete",[l,v]);
if(!(--bS.active)){bS.event.trigger("ajaxStop")
}}}b.promise(l);
l.success=l.done;
l.error=l.fail;
l.complete=g.add;
l.statusCode=function(z){if(z){var A;
if(y<2){for(A in z){x[A]=[x[A],z[A]]
}}else{A=z[l.status];
l.then(A,A)
}}return this
};
v.url=((k||v.url)+"").replace(bX,"").replace(bQ,bC[1]+"//");
v.dataTypes=bS.trim(v.dataType||"*").toLowerCase().split(bM);
if(v.crossDomain==null){n=ct.exec(v.url.toLowerCase());
v.crossDomain=!!(n&&(n[1]!=bC[1]||n[2]!=bC[2]||(n[3]||(n[1]==="http:"?80:443))!=(bC[3]||(bC[1]==="http:"?80:443))))
}if(v.data&&v.processData&&typeof v.data!=="string"){v.data=bS.param(v.data,v.traditional)
}c5(c2,v,o,l);
if(y===2){return false
}p=v.global;
v.type=v.type.toUpperCase();
v.hasContent=!db.test(v.type);
if(p&&bS.active++===0){bS.event.trigger("ajaxStart")
}if(!v.hasContent){if(v.data){v.url+=(cr.test(v.url)?"&":"?")+v.data;
delete v.data
}w=v.url;
if(v.cache===false){var r=bS.now(),d=v.url.replace(bW,"$1_="+r);
v.url=d+((d===v.url)?(cr.test(v.url)?"&":"?")+"_="+r:"")
}}if(v.data&&v.hasContent&&v.contentType!==false||o.contentType){l.setRequestHeader("Content-Type",v.contentType)
}if(v.ifModified){w=w||v.url;
if(bS.lastModified[w]){l.setRequestHeader("If-Modified-Since",bS.lastModified[w])
}if(bS.etag[w]){l.setRequestHeader("If-None-Match",bS.etag[w])
}}l.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+(v.dataTypes[0]!=="*"?", "+c6+"; q=0.01":""):v.accepts["*"]);
for(j in v.headers){l.setRequestHeader(j,v.headers[j])
}if(v.beforeSend&&(v.beforeSend.call(a,l,v)===false||y===2)){l.abort();
return false
}for(j in {success:1,error:1,complete:1}){l[j](v[j])
}i=c5(bD,v,o,l);
if(!i){t(-1,"No Transport")
}else{l.readyState=1;
if(p){s.trigger("ajaxSend",[l,v])
}if(v.async&&v.timeout>0){u=setTimeout(function(){l.abort("timeout")
},v.timeout)
}try{y=1;
i.send(q,t)
}catch(h){if(y<2){t(-1,h)
}else{throw h
}}}return l
},param:function(c,f){var a=[],b=function(g,h){h=bS.isFunction(h)?h():h;
a[a.length]=encodeURIComponent(g)+"="+encodeURIComponent(h)
};
if(f===cs){f=bS.ajaxSettings.traditional
}if(bS.isArray(c)||(c.jquery&&!bS.isPlainObject(c))){bS.each(c,function(){b(this.name,this.value)
})
}else{for(var d in c){bz(d,c[d],f,b)
}}return a.join("&").replace(bJ,"+")
}});
function bz(f,c,a,d){if(bS.isArray(c)){bS.each(c,function(h,g){if(a||cN.test(f)){d(f,g)
}else{bz(f+"["+(typeof g==="object"?h:"")+"]",g,a,d)
}})
}else{if(!a&&bS.type(c)==="object"){for(var b in c){bz(f+"["+b+"]",c[b],a,d)
}}else{d(f,c)
}}}bS.extend({active:0,lastModified:{},etag:{}});
function b4(j,k,d){var i=j.contents,a=j.dataTypes,h=j.responseFields,f,b,g,c;
for(b in h){if(b in d){k[h[b]]=d[b]
}}while(a[0]==="*"){a.shift();
if(f===cs){f=j.mimeType||k.getResponseHeader("content-type")
}}if(f){for(b in i){if(i[b]&&i[b].test(f)){a.unshift(b);
break
}}}if(a[0] in d){g=a[0]
}else{for(b in d){if(!a[0]||j.converters[b+" "+a[0]]){g=b;
break
}if(!c){c=b
}}g=g||c
}if(g){if(g!==a[0]){a.unshift(g)
}return d[g]
}}function cB(j,d){if(j.dataFilter){d=j.dataFilter(d,j.dataType)
}var n=j.dataTypes,k={},b,m,h=n.length,a,o=n[0],g,f,l,i,c;
for(b=1;
b<h;
b++){if(b===1){for(m in j.converters){if(typeof m==="string"){k[m.toLowerCase()]=j.converters[m]
}}}g=o;
o=n[b];
if(o==="*"){o=g
}else{if(g!=="*"&&g!==o){f=g+" "+o;
l=k[f]||k["* "+o];
if(!l){c=cs;
for(i in k){a=i.split(" ");
if(a[0]===g||a[0]==="*"){c=k[a[1]+" "+o];
if(c){i=k[i];
if(i===true){l=c
}else{if(c===true){l=i
}}break
}}}}if(!(l||c)){bS.error("No conversion from "+f.replace(" "," to "))
}if(l!==true){d=l?l(d):c(i(d))
}}}}return d
}var dr=bS.now(),bA=/(\=)\?(&|$)|\?\?/i;
bS.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return bS.expando+"_"+(dr++)
}});
bS.ajaxPrefilter("json jsonp",function(j,b,k){var g=(typeof j.data==="string")&&/^application\/x\-www\-form\-urlencoded/.test(j.contentType);
if(j.dataTypes[0]==="jsonp"||j.jsonp!==false&&(bA.test(j.url)||g&&bA.test(j.data))){var a,h=j.jsonpCallback=bS.isFunction(j.jsonpCallback)?j.jsonpCallback():j.jsonpCallback,d=ci[h],c=j.url,f=j.data,i="$1"+h+"$2";
if(j.jsonp!==false){c=c.replace(bA,i);
if(j.url===c){if(g){f=f.replace(bA,i)
}if(j.data===f){c+=(/\?/.test(c)?"&":"?")+j.jsonp+"="+h
}}}j.url=c;
j.data=f;
ci[h]=function(l){a=[l]
};
k.always(function(){ci[h]=d;
if(a&&bS.isFunction(d)){ci[h](a[0])
}});
j.converters["script json"]=function(){if(!a){bS.error(h+" was not called")
}return a[0]
};
j.dataTypes[0]="json";
return"script"
}});
bS.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){bS.globalEval(a);
return a
}}});
bS.ajaxPrefilter("script",function(a){if(a.cache===cs){a.cache=false
}if(a.crossDomain){a.type="GET";
a.global=false
}});
bS.ajaxTransport("script",function(c){if(c.crossDomain){var b,a=cE.head||cE.getElementsByTagName("head")[0]||cE.documentElement;
return{send:function(f,d){b=cE.createElement("script");
b.async="async";
if(c.scriptCharset){b.charset=c.scriptCharset
}b.src=c.url;
b.onload=b.onreadystatechange=function(h,g){if(g||!b.readyState||/loaded|complete/.test(b.readyState)){b.onload=b.onreadystatechange=null;
if(a&&b.parentNode){a.removeChild(b)
}b=cs;
if(!g){d(200,"success")
}}};
a.insertBefore(b,a.firstChild)
},abort:function(){if(b){b.onload(0,1)
}}}
}});
var cK=ci.ActiveXObject?function(){for(var a in cq){cq[a](0,1)
}}:false,bw=0,cq;
function dg(){try{return new ci.XMLHttpRequest()
}catch(a){}}function cS(){try{return new ci.ActiveXObject("Microsoft.XMLHTTP")
}catch(a){}}bS.ajaxSettings.xhr=ci.ActiveXObject?function(){return !this.isLocal&&dg()||cS()
}:dg;
(function(a){bS.extend(bS.support,{ajax:!!a,cors:!!a&&("withCredentials" in a)})
})(bS.ajaxSettings.xhr());
if(bS.support.ajax){bS.ajaxTransport(function(b){if(!b.crossDomain||bS.support.cors){var a;
return{send:function(f,i){var h=b.xhr(),c,d;
if(b.username){h.open(b.type,b.url,b.async,b.username,b.password)
}else{h.open(b.type,b.url,b.async)
}if(b.xhrFields){for(d in b.xhrFields){h[d]=b.xhrFields[d]
}}if(b.mimeType&&h.overrideMimeType){h.overrideMimeType(b.mimeType)
}if(!b.crossDomain&&!f["X-Requested-With"]){f["X-Requested-With"]="XMLHttpRequest"
}try{for(d in f){h.setRequestHeader(d,f[d])
}}catch(g){}h.send((b.hasContent&&b.data)||null);
a=function(j,p){var o,q,r,l,m;
try{if(a&&(p||h.readyState===4)){a=cs;
if(c){h.onreadystatechange=bS.noop;
if(cK){delete cq[c]
}}if(p){if(h.readyState!==4){h.abort()
}}else{o=h.status;
r=h.getAllResponseHeaders();
l={};
m=h.responseXML;
if(m&&m.documentElement){l.xml=m
}try{l.text=h.responseText
}catch(j){}try{q=h.statusText
}catch(k){q=""
}if(!o&&b.isLocal&&!b.crossDomain){o=l.text?200:404
}else{if(o===1223){o=204
}}}}}catch(n){if(!p){i(-1,n)
}}if(l){i(o,q,l,r)
}};
if(!b.async||h.readyState===4){a()
}else{c=++bw;
if(cK){if(!cq){cq={};
bS(ci).unload(cK)
}cq[c]=a
}h.onreadystatechange=a
}},abort:function(){if(a){a(0,1)
}}}
}})
}var ck={},co,bH,ds=/^(?:toggle|show|hide)$/,c8=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,dz,dk=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],dy;
bS.fn.extend({show:function(g,f,b){var h,d;
if(g||g===0){return this.animate(dB("show",3),g,f,b)
}else{for(var a=0,c=this.length;
a<c;
a++){h=this[a];
if(h.style){d=h.style.display;
if(!bS._data(h,"olddisplay")&&d==="none"){d=h.style.display=""
}if((d===""&&bS.css(h,"display")==="none")||!bS.contains(h.ownerDocument.documentElement,h)){bS._data(h,"olddisplay",bx(h.nodeName))
}}}for(a=0;
a<c;
a++){h=this[a];
if(h.style){d=h.style.display;
if(d===""||d==="none"){h.style.display=bS._data(h,"olddisplay")||""
}}}return this
}},hide:function(g,f,b){if(g||g===0){return this.animate(dB("hide",3),g,f,b)
}else{var h,d,a=0,c=this.length;
for(;
a<c;
a++){h=this[a];
if(h.style){d=bS.css(h,"display");
if(d!=="none"&&!bS._data(h,"olddisplay")){bS._data(h,"olddisplay",d)
}}}for(a=0;
a<c;
a++){if(this[a].style){this[a].style.display="none"
}}return this
}},_toggle:bS.fn.toggle,toggle:function(d,a,c){var b=typeof d==="boolean";
if(bS.isFunction(d)&&bS.isFunction(a)){this._toggle.apply(this,arguments)
}else{if(d==null||b){this.each(function(){var f=b?d:bS(this).is(":hidden");
bS(this)[f?"show":"hide"]()
})
}else{this.animate(dB("toggle",3),d,a,c)
}}return this
},fadeTo:function(b,c,d,a){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:c},b,d,a)
},animate:function(b,g,d,f){var c=bS.speed(g,d,f);
if(bS.isEmptyObject(b)){return this.each(c.complete,[false])
}b=bS.extend({},b);
function a(){if(c.queue===false){bS._mark(this)
}var s=bS.extend({},c),l=this.nodeType===1,n=l&&bS(this).is(":hidden"),h,q,t,m,j,r,o,u,p,k,i;
s.animatedProperties={};
for(t in b){h=bS.camelCase(t);
if(t!==h){b[h]=b[t];
delete b[t]
}if((j=bS.cssHooks[h])&&"expand" in j){r=j.expand(b[h]);
delete b[h];
for(t in r){if(!(t in b)){b[t]=r[t]
}}}}for(h in b){q=b[h];
if(bS.isArray(q)){s.animatedProperties[h]=q[1];
q=b[h]=q[0]
}else{s.animatedProperties[h]=s.specialEasing&&s.specialEasing[h]||s.easing||"swing"
}if(q==="hide"&&n||q==="show"&&!n){return s.complete.call(this)
}if(l&&(h==="height"||h==="width")){s.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
if(bS.css(this,"display")==="inline"&&bS.css(this,"float")==="none"){if(!bS.support.inlineBlockNeedsLayout||bx(this.nodeName)==="inline"){this.style.display="inline-block"
}else{this.style.zoom=1
}}}}if(s.overflow!=null){this.style.overflow="hidden"
}for(t in b){m=new bS.fx(this,s,t);
q=b[t];
if(ds.test(q)){i=bS._data(this,"toggle"+t)||(q==="toggle"?n?"show":"hide":0);
if(i){bS._data(this,"toggle"+t,i==="show"?"hide":"show");
m[i]()
}else{m[q]()
}}else{o=c8.exec(q);
u=m.cur();
if(o){p=parseFloat(o[2]);
k=o[3]||(bS.cssNumber[t]?"":"px");
if(k!=="px"){bS.style(this,t,(p||1)+k);
u=((p||1)/m.cur())*u;
bS.style(this,t,u+k)
}if(o[1]){p=((o[1]==="-="?-1:1)*p)+u
}m.custom(u,p,k)
}else{m.custom(u,q,"")
}}}return true
}return c.queue===false?this.each(a):this.queue(c.queue,a)
},stop:function(c,a,b){if(typeof c!=="string"){b=a;
a=c;
c=cs
}if(a&&c!==false){this.queue(c||"fx",[])
}return this.each(function(){var i,g=false,h=bS.timers,d=bS._data(this);
if(!b){bS._unmark(true,this)
}function f(k,j,l){var m=j[l];
bS.removeData(k,l,true);
m.stop(b)
}if(c==null){for(i in d){if(d[i]&&d[i].stop&&i.indexOf(".run")===i.length-4){f(this,d,i)
}}}else{if(d[i=c+".run"]&&d[i].stop){f(this,d,i)
}}for(i=h.length;
i--;
){if(h[i].elem===this&&(c==null||h[i].queue===c)){if(b){h[i](true)
}else{h[i].saveState()
}g=true;
h.splice(i,1)
}}if(!(b&&g)){bS.dequeue(this,c)
}})
}});
function b8(){setTimeout(cH,0);
return(dy=bS.now())
}function cH(){dy=cs
}function dB(a,b){var c={};
bS.each(dk.concat.apply([],dk.slice(0,b)),function(){c[this]=a
});
return c
}bS.each({slideDown:dB("show",1),slideUp:dB("hide",1),slideToggle:dB("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(b,a){bS.fn[b]=function(f,c,d){return this.animate(a,f,c,d)
}
});
bS.extend({speed:function(d,c,a){var b=d&&typeof d==="object"?bS.extend({},d):{complete:a||!a&&c||bS.isFunction(d)&&d,duration:d,easing:a&&c||c&&!bS.isFunction(c)&&c};
b.duration=bS.fx.off?0:typeof b.duration==="number"?b.duration:b.duration in bS.fx.speeds?bS.fx.speeds[b.duration]:bS.fx.speeds._default;
if(b.queue==null||b.queue===true){b.queue="fx"
}b.old=b.complete;
b.complete=function(f){if(bS.isFunction(b.old)){b.old.call(this)
}if(b.queue){bS.dequeue(this,b.queue)
}else{if(f!==false){bS._unmark(this)
}}};
return b
},easing:{linear:function(a){return a
},swing:function(a){return(-Math.cos(a*Math.PI)/2)+0.5
}},timers:[],fx:function(a,b,c){this.options=b;
this.elem=a;
this.prop=c;
b.orig=b.orig||{}
}});
bS.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(bS.fx.step[this.prop]||bS.fx.step._default)(this)
},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var b,a=bS.css(this.elem,this.prop);
return isNaN(b=parseFloat(a))?!a||a==="auto"?0:a:b
},custom:function(b,d,f){var c=this,g=bS.fx;
this.startTime=dy||b8();
this.end=d;
this.now=this.start=b;
this.pos=this.state=0;
this.unit=f||this.unit||(bS.cssNumber[this.prop]?"":"px");
function a(h){return c.step(h)
}a.queue=this.options.queue;
a.elem=this.elem;
a.saveState=function(){if(bS._data(c.elem,"fxshow"+c.prop)===cs){if(c.options.hide){bS._data(c.elem,"fxshow"+c.prop,c.start)
}else{if(c.options.show){bS._data(c.elem,"fxshow"+c.prop,c.end)
}}}};
if(a()&&bS.timers.push(a)&&!dz){dz=setInterval(g.tick,g.interval)
}},show:function(){var a=bS._data(this.elem,"fxshow"+this.prop);
this.options.orig[this.prop]=a||bS.style(this.elem,this.prop);
this.options.show=true;
if(a!==cs){this.custom(this.cur(),a)
}else{this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur())
}bS(this.elem).show()
},hide:function(){this.options.orig[this.prop]=bS._data(this.elem,"fxshow"+this.prop)||bS.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0)
},step:function(f){var h,d,a,g=dy||b8(),c=true,b=this.elem,i=this.options;
if(f||g>=i.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
i.animatedProperties[this.prop]=true;
for(h in i.animatedProperties){if(i.animatedProperties[h]!==true){c=false
}}if(c){if(i.overflow!=null&&!bS.support.shrinkWrapBlocks){bS.each(["","X","Y"],function(k,j){b.style["overflow"+j]=i.overflow[k]
})
}if(i.hide){bS(b).hide()
}if(i.hide||i.show){for(h in i.animatedProperties){bS.style(b,h,i.orig[h]);
bS.removeData(b,"fxshow"+h,true);
bS.removeData(b,"toggle"+h,true)
}}a=i.complete;
if(a){i.complete=false;
a.call(b)
}}return false
}else{if(i.duration==Infinity){this.now=g
}else{d=g-this.startTime;
this.state=d/i.duration;
this.pos=bS.easing[i.animatedProperties[this.prop]](this.state,d,0,1,i.duration);
this.now=this.start+((this.end-this.start)*this.pos)
}this.update()
}return true
}};
bS.extend(bS.fx,{tick:function(){var c,a=bS.timers,b=0;
for(;
b<a.length;
b++){c=a[b];
if(!c()&&a[b]===c){a.splice(b--,1)
}}if(!a.length){bS.fx.stop()
}},interval:13,stop:function(){clearInterval(dz);
dz=null
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){bS.style(a.elem,"opacity",a.now)
},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null){a.elem.style[a.prop]=a.now+a.unit
}else{a.elem[a.prop]=a.now
}}}});
bS.each(dk.concat.apply([],dk),function(b,a){if(a.indexOf("margin")){bS.fx.step[a]=function(c){bS.style(c.elem,a,Math.max(0,c.now)+c.unit)
}
}});
if(bS.expr&&bS.expr.filters){bS.expr.filters.animated=function(a){return bS.grep(bS.timers,function(b){return a===b.elem
}).length
}
}function bx(c){if(!ck[c]){var b=cE.body,a=bS("<"+c+">").appendTo(b),d=a.css("display");
a.remove();
if(d==="none"||d===""){if(!co){co=cE.createElement("iframe");
co.frameBorder=co.width=co.height=0
}b.appendChild(co);
if(!bH||!co.createElement){bH=(co.contentWindow||co.contentDocument).document;
bH.write((bS.support.boxModel?"<!doctype html>":"")+"<html><body>");
bH.close()
}a=bH.createElement(c);
bH.body.appendChild(a);
d=bS.css(a,"display");
b.removeChild(co)
}ck[c]=d
}return ck[c]
}var dv,ca=/^t(?:able|d|h)$/i,cZ=/^(?:body|html)$/i;
if("getBoundingClientRect" in cE.documentElement){dv=function(d,i,g,a){try{a=d.getBoundingClientRect()
}catch(k){}if(!a||!bS.contains(g,d)){return a?{top:a.top,left:a.left}:{top:0,left:0}
}var n=i.body,m=dh(i),b=g.clientTop||n.clientTop||0,l=g.clientLeft||n.clientLeft||0,h=m.pageYOffset||bS.support.boxModel&&g.scrollTop||n.scrollTop,c=m.pageXOffset||bS.support.boxModel&&g.scrollLeft||n.scrollLeft,j=a.top+h-b,f=a.left+c-l;
return{top:j,left:f}
}
}else{dv=function(d,j,g){var l,h=d.offsetParent,i=d,b=j.body,a=j.defaultView,c=a?a.getComputedStyle(d,null):d.currentStyle,k=d.offsetTop,f=d.offsetLeft;
while((d=d.parentNode)&&d!==b&&d!==g){if(bS.support.fixedPosition&&c.position==="fixed"){break
}l=a?a.getComputedStyle(d,null):d.currentStyle;
k-=d.scrollTop;
f-=d.scrollLeft;
if(d===h){k+=d.offsetTop;
f+=d.offsetLeft;
if(bS.support.doesNotAddBorder&&!(bS.support.doesAddBorderForTableAndCells&&ca.test(d.nodeName))){k+=parseFloat(l.borderTopWidth)||0;
f+=parseFloat(l.borderLeftWidth)||0
}i=h;
h=d.offsetParent
}if(bS.support.subtractsBorderForOverflowNotVisible&&l.overflow!=="visible"){k+=parseFloat(l.borderTopWidth)||0;
f+=parseFloat(l.borderLeftWidth)||0
}c=l
}if(c.position==="relative"||c.position==="static"){k+=b.offsetTop;
f+=b.offsetLeft
}if(bS.support.fixedPosition&&c.position==="fixed"){k+=Math.max(g.scrollTop,b.scrollTop);
f+=Math.max(g.scrollLeft,b.scrollLeft)
}return{top:k,left:f}
}
}bS.fn.offset=function(b){if(arguments.length){return b===cs?this:this.each(function(d){bS.offset.setOffset(this,b,d)
})
}var a=this[0],c=a&&a.ownerDocument;
if(!c){return null
}if(a===c.body){return bS.offset.bodyOffset(a)
}return dv(a,c,c.documentElement)
};
bS.offset={bodyOffset:function(b){var c=b.offsetTop,a=b.offsetLeft;
if(bS.support.doesNotIncludeMarginInBodyOffset){c+=parseFloat(bS.css(b,"marginTop"))||0;
a+=parseFloat(bS.css(b,"marginLeft"))||0
}return{top:c,left:a}
},setOffset:function(g,j,b){var a=bS.css(g,"position");
if(a==="static"){g.style.position="relative"
}var d=bS(g),i=d.offset(),c=bS.css(g,"top"),l=bS.css(g,"left"),k=(a==="absolute"||a==="fixed")&&bS.inArray("auto",[c,l])>-1,m={},n={},h,f;
if(k){n=d.position();
h=n.top;
f=n.left
}else{h=parseFloat(c)||0;
f=parseFloat(l)||0
}if(bS.isFunction(j)){j=j.call(g,b,i)
}if(j.top!=null){m.top=(j.top-i.top)+h
}if(j.left!=null){m.left=(j.left-i.left)+f
}if("using" in j){j.using.call(g,m)
}else{d.css(m)
}}};
bS.fn.extend({position:function(){if(!this[0]){return null
}var d=this[0],a=this.offsetParent(),c=this.offset(),b=cZ.test(a[0].nodeName)?{top:0,left:0}:a.offset();
c.top-=parseFloat(bS.css(d,"marginTop"))||0;
c.left-=parseFloat(bS.css(d,"marginLeft"))||0;
b.top+=parseFloat(bS.css(a[0],"borderTopWidth"))||0;
b.left+=parseFloat(bS.css(a[0],"borderLeftWidth"))||0;
return{top:c.top-b.top,left:c.left-b.left}
},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cE.body;
while(a&&(!cZ.test(a.nodeName)&&bS.css(a,"position")==="static")){a=a.offsetParent
}return a
})
}});
bS.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(c,a){var b=/Y/.test(a);
bS.fn[c]=function(d){return bS.access(this,function(h,g,i){var f=dh(h);
if(i===cs){return f?(a in f)?f[a]:bS.support.boxModel&&f.document.documentElement[g]||f.document.body[g]:h[g]
}if(f){f.scrollTo(!b?i:bS(f).scrollLeft(),b?i:bS(f).scrollTop())
}else{h[g]=i
}},c,d,arguments.length,null)
}
});
function dh(a){return bS.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false
}bS.each({Height:"height",Width:"width"},function(f,d){var a="client"+f,c="scroll"+f,b="offset"+f;
bS.fn["inner"+f]=function(){var g=this[0];
return g?g.style?parseFloat(bS.css(g,d,"padding")):this[d]():null
};
bS.fn["outer"+f]=function(h){var g=this[0];
return g?g.style?parseFloat(bS.css(g,d,h?"margin":"border")):this[d]():null
};
bS.fn[d]=function(g){return bS.access(this,function(l,m,k){var i,j,h,n;
if(bS.isWindow(l)){i=l.document;
j=i.documentElement[a];
return bS.support.boxModel&&j||i.body&&i.body[a]||j
}if(l.nodeType===9){i=l.documentElement;
if(i[a]>=i[c]){return i[a]
}return Math.max(l.body[c],i[c],l.body[b],i[b])
}if(k===cs){h=bS.css(l,m);
n=parseFloat(h);
return bS.isNumeric(n)?n:h
}bS(l).css(m,k)
},d,g,arguments.length,null)
}
});
ci.jQuery=ci.$=bS;
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return bS
})
}})(window);