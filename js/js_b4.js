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
/*!
 * Bootstrap v3.0.2 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */
;
if(typeof jQuery==="undefined"){throw new Error("Bootstrap requires jQuery")
}+function(c){function d(){var a=document.createElement("bootstrap");
var b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var f in b){if(a.style[f]!==undefined){return{end:b[f]}
}}}c.fn.emulateTransitionEnd=function(b){var g=false,h=this;
c(this).one(c.support.transition.end,function(){g=true
});
var a=function(){if(!g){c(h).trigger(c.support.transition.end)
}};
setTimeout(a,b);
return this
};
c(function(){c.support.transition=d()
})
}(jQuery);
+function(g){var h='[data-dismiss="alert"]';
var e=function(a){g(a).on("click",h,this.close)
};
e.prototype.close=function(a){var b=g(this);
var d=b.attr("data-target");
if(!d){d=b.attr("href");
d=d&&d.replace(/.*(?=#[^\s]*$)/,"")
}var c=g(d);
if(a){a.preventDefault()
}if(!c.length){c=b.hasClass("alert")?b:b.parent()
}c.trigger(a=g.Event("close.bs.alert"));
if(a.isDefaultPrevented()){return
}c.removeClass("in");
function k(){c.trigger("closed.bs.alert").remove()
}g.support.transition&&c.hasClass("fade")?c.one(g.support.transition.end,k).emulateTransitionEnd(150):k()
};
var f=g.fn.alert;
g.fn.alert=function(a){return this.each(function(){var b=g(this);
var c=b.data("bs.alert");
if(!c){b.data("bs.alert",(c=new e(this)))
}if(typeof a=="string"){c[a].call(b)
}})
};
g.fn.alert.Constructor=e;
g.fn.alert.noConflict=function(){g.fn.alert=f;
return this
};
g(document).on("click.bs.alert.data-api",h,e.prototype.close)
}(jQuery);
+function(f){var d=function(a,b){this.$element=f(a);
this.options=f.extend({},d.DEFAULTS,b)
};
d.DEFAULTS={loadingText:"loading..."};
d.prototype.setState=function(c){var a="disabled";
var k=this.$element;
var b=k.is("input")?"val":"html";
var j=k.data();
c=c+"Text";
if(!j.resetText){k.data("resetText",k[b]())
}k[b](j[c]||this.options[c]);
setTimeout(function(){c=="loadingText"?k.addClass(a).attr(a,a):k.removeClass(a).removeAttr(a)
},0)
};
d.prototype.toggle=function(){var b=this.$element.closest('[data-toggle="buttons"]');
if(b.length){var a=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");
if(a.prop("type")==="radio"){b.find(".active").removeClass("active")
}}this.$element.toggleClass("active")
};
var e=f.fn.button;
f.fn.button=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.button");
var h=typeof a=="object"&&a;
if(!c){b.data("bs.button",(c=new d(this,h)))
}if(a=="toggle"){c.toggle()
}else{if(a){c.setState(a)
}}})
};
f.fn.button.Constructor=d;
f.fn.button.noConflict=function(){f.fn.button=e;
return this
};
f(document).on("click.bs.button.data-api","[data-toggle^=button]",function(a){var b=f(a.target);
if(!b.hasClass("btn")){b=b.closest(".btn")
}b.button("toggle");
a.preventDefault()
})
}(jQuery);
+function(d){var f=function(a,b){this.$element=d(a);
this.$indicators=this.$element.find(".carousel-indicators");
this.options=b;
this.paused=this.sliding=this.interval=this.$active=this.$items=null;
this.options.pause=="hover"&&this.$element.on("mouseenter",d.proxy(this.pause,this)).on("mouseleave",d.proxy(this.cycle,this))
};
f.DEFAULTS={interval:5000,pause:"hover",wrap:true};
f.prototype.cycle=function(a){a||(this.paused=false);
this.interval&&clearInterval(this.interval);
this.options.interval&&!this.paused&&(this.interval=setInterval(d.proxy(this.next,this),this.options.interval));
return this
};
f.prototype.getActiveIndex=function(){this.$active=this.$element.find(".item.active");
this.$items=this.$active.parent().children();
return this.$items.index(this.$active)
};
f.prototype.to=function(a){var b=this;
var c=this.getActiveIndex();
if(a>(this.$items.length-1)||a<0){return
}if(this.sliding){return this.$element.one("slid",function(){b.to(a)
})
}if(c==a){return this.pause().cycle()
}return this.slide(a>c?"next":"prev",d(this.$items[a]))
};
f.prototype.pause=function(a){a||(this.paused=true);
if(this.$element.find(".next, .prev").length&&d.support.transition.end){this.$element.trigger(d.support.transition.end);
this.cycle(true)
}this.interval=clearInterval(this.interval);
return this
};
f.prototype.next=function(){if(this.sliding){return
}return this.slide("next")
};
f.prototype.prev=function(){if(this.sliding){return
}return this.slide("prev")
};
f.prototype.slide=function(c,r){var a=this.$element.find(".item.active");
var s=r||a[c]();
var n=this.interval;
var b=c=="next"?"left":"right";
var q=c=="next"?"first":"last";
var p=this;
if(!s.length){if(!this.options.wrap){return
}s=this.$element.find(".item")[q]()
}this.sliding=true;
n&&this.pause();
var o=d.Event("slide.bs.carousel",{relatedTarget:s[0],direction:b});
if(s.hasClass("active")){return
}if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");
this.$element.one("slid",function(){var g=d(p.$indicators.children()[p.getActiveIndex()]);
g&&g.addClass("active")
})
}if(d.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(o);
if(o.isDefaultPrevented()){return
}s.addClass(c);
s[0].offsetWidth;
a.addClass(b);
s.addClass(b);
a.one(d.support.transition.end,function(){s.removeClass([c,b].join(" ")).addClass("active");
a.removeClass(["active",b].join(" "));
p.sliding=false;
setTimeout(function(){p.$element.trigger("slid")
},0)
}).emulateTransitionEnd(600)
}else{this.$element.trigger(o);
if(o.isDefaultPrevented()){return
}a.removeClass("active");
s.addClass("active");
this.sliding=false;
this.$element.trigger("slid")
}n&&this.cycle();
return this
};
var e=d.fn.carousel;
d.fn.carousel=function(a){return this.each(function(){var b=d(this);
var c=b.data("bs.carousel");
var j=d.extend({},f.DEFAULTS,b.data(),typeof a=="object"&&a);
var i=typeof a=="string"?a:j.slide;
if(!c){b.data("bs.carousel",(c=new f(this,j)))
}if(typeof a=="number"){c.to(a)
}else{if(i){c[i]()
}else{if(j.interval){c.pause().cycle()
}}}})
};
d.fn.carousel.Constructor=f;
d.fn.carousel.noConflict=function(){d.fn.carousel=e;
return this
};
d(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(a){var b=d(this),l;
var m=d(b.attr("data-target")||(l=b.attr("href"))&&l.replace(/.*(?=#[^\s]+$)/,""));
var k=d.extend({},m.data(),b.data());
var c=b.attr("data-slide-to");
if(c){k.interval=false
}m.carousel(k);
if(c=b.attr("data-slide-to")){m.data("bs.carousel").to(c)
}a.preventDefault()
});
d(window).on("load",function(){d('[data-ride="carousel"]').each(function(){var a=d(this);
a.carousel(a.data())
})
})
}(jQuery);
+function(d){var f=function(a,b){this.$element=d(a);
this.options=d.extend({},f.DEFAULTS,b);
this.transitioning=null;
if(this.options.parent){this.$parent=d(this.options.parent)
}if(this.options.toggle){this.toggle()
}};
f.DEFAULTS={toggle:true};
f.prototype.dimension=function(){var a=this.$element.hasClass("width");
return a?"width":"height"
};
f.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return
}var k=d.Event("show.bs.collapse");
this.$element.trigger(k);
if(k.isDefaultPrevented()){return
}var b=this.$parent&&this.$parent.find("> .panel > .in");
if(b&&b.length){var j=b.data("bs.collapse");
if(j&&j.transitioning){return
}b.collapse("hide");
j||b.data("bs.collapse",null)
}var a=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[a](0);
this.transitioning=1;
var l=function(){this.$element.removeClass("collapsing").addClass("in")[a]("auto");
this.transitioning=0;
this.$element.trigger("shown.bs.collapse")
};
if(!d.support.transition){return l.call(this)
}var c=d.camelCase(["scroll",a].join("-"));
this.$element.one(d.support.transition.end,d.proxy(l,this)).emulateTransitionEnd(350)[a](this.$element[0][c])
};
f.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return
}var b=d.Event("hide.bs.collapse");
this.$element.trigger(b);
if(b.isDefaultPrevented()){return
}var a=this.dimension();
this.$element[a](this.$element[a]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
this.transitioning=1;
var c=function(){this.transitioning=0;
this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
};
if(!d.support.transition){return c.call(this)
}this.$element[a](0).one(d.support.transition.end,d.proxy(c,this)).emulateTransitionEnd(350)
};
f.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
var e=d.fn.collapse;
d.fn.collapse=function(a){return this.each(function(){var b=d(this);
var c=b.data("bs.collapse");
var h=d.extend({},f.DEFAULTS,b.data(),typeof a=="object"&&a);
if(!c){b.data("bs.collapse",(c=new f(this,h)))
}if(typeof a=="string"){c[a]()
}})
};
d.fn.collapse.Constructor=f;
d.fn.collapse.noConflict=function(){d.fn.collapse=e;
return this
};
d(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(n){var b=d(this),s;
var c=b.attr("data-target")||n.preventDefault()||(s=b.attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"");
var r=d(c);
var p=r.data("bs.collapse");
var o=p?"toggle":b.data();
var a=b.attr("data-parent");
var q=a&&d(a);
if(!p||!p.transitioning){if(q){q.find('[data-toggle=collapse][data-parent="'+a+'"]').not(b).addClass("collapsed")
}b[r.hasClass("in")?"addClass":"removeClass"]("collapsed")
}r.collapse(o)
})
}(jQuery);
+function(j){var l=".dropdown-backdrop";
var h="[data-toggle=dropdown]";
var i=function(a){var b=j(a).on("click.bs.dropdown",this.toggle)
};
i.prototype.toggle=function(a){var b=j(this);
if(b.is(".disabled, :disabled")){return
}var c=k(b);
var d=c.hasClass("open");
m();
if(!d){if("ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length){j('<div class="dropdown-backdrop"/>').insertAfter(j(this)).on("click",m)
}c.trigger(a=j.Event("show.bs.dropdown"));
if(a.isDefaultPrevented()){return
}c.toggleClass("open").trigger("shown.bs.dropdown");
b.focus()
}return false
};
i.prototype.keydown=function(b){if(!/(38|40|27)/.test(b.keyCode)){return
}var c=j(this);
b.preventDefault();
b.stopPropagation();
if(c.is(".disabled, :disabled")){return
}var d=k(c);
var e=d.hasClass("open");
if(!e||(e&&b.keyCode==27)){if(b.which==27){d.find(h).focus()
}return c.click()
}var a=j("[role=menu] li:not(.divider):visible a",d);
if(!a.length){return
}var f=a.index(a.filter(":focus"));
if(b.keyCode==38&&f>0){f--
}if(b.keyCode==40&&f<a.length-1){f++
}if(!~f){f=0
}a.eq(f).focus()
};
function m(){j(l).remove();
j(h).each(function(a){var b=k(j(this));
if(!b.hasClass("open")){return
}b.trigger(a=j.Event("hide.bs.dropdown"));
if(a.isDefaultPrevented()){return
}b.removeClass("open").trigger("hidden.bs.dropdown")
})
}function k(a){var c=a.attr("data-target");
if(!c){c=a.attr("href");
c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")
}var b=c&&j(c);
return b&&b.length?b:a.parent()
}var n=j.fn.dropdown;
j.fn.dropdown=function(a){return this.each(function(){var b=j(this);
var c=b.data("dropdown");
if(!c){b.data("dropdown",(c=new i(this)))
}if(typeof a=="string"){c[a].call(b)
}})
};
j.fn.dropdown.Constructor=i;
j.fn.dropdown.noConflict=function(){j.fn.dropdown=n;
return this
};
j(document).on("click.bs.dropdown.data-api",m).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()
}).on("click.bs.dropdown.data-api",h,i.prototype.toggle).on("keydown.bs.dropdown.data-api",h+", [role=menu]",i.prototype.keydown)
}(jQuery);
+function(f){var d=function(a,b){this.options=b;
this.$element=f(a);
this.$backdrop=this.isShown=null;
if(this.options.remote){this.$element.load(this.options.remote)
}};
d.DEFAULTS={backdrop:true,keyboard:true,show:true};
d.prototype.toggle=function(a){return this[!this.isShown?"show":"hide"](a)
};
d.prototype.show=function(a){var c=this;
var b=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(b);
if(this.isShown||b.isDefaultPrevented()){return
}this.isShown=true;
this.escape();
this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this));
this.backdrop(function(){var g=f.support.transition&&c.$element.hasClass("fade");
if(!c.$element.parent().length){c.$element.appendTo(document.body)
}c.$element.show();
if(g){c.$element[0].offsetWidth
}c.$element.addClass("in").attr("aria-hidden",false);
c.enforceFocus();
var j=f.Event("shown.bs.modal",{relatedTarget:a});
g?c.$element.find(".modal-dialog").one(f.support.transition.end,function(){c.$element.focus().trigger(j)
}).emulateTransitionEnd(300):c.$element.focus().trigger(j)
})
};
d.prototype.hide=function(a){if(a){a.preventDefault()
}a=f.Event("hide.bs.modal");
this.$element.trigger(a);
if(!this.isShown||a.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
f(document).off("focusin.bs.modal");
this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.modal");
f.support.transition&&this.$element.hasClass("fade")?this.$element.one(f.support.transition.end,f.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()
};
d.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(a){if(this.$element[0]!==a.target&&!this.$element.has(a.target).length){this.$element.focus()
}},this))
};
d.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",f.proxy(function(a){a.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")
}}};
d.prototype.hideModal=function(){var a=this;
this.$element.hide();
this.backdrop(function(){a.removeBackdrop();
a.$element.trigger("hidden.bs.modal")
})
};
d.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
d.prototype.backdrop=function(a){var b=this;
var c=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var h=f.support.transition&&c;
this.$backdrop=f('<div class="modal-backdrop '+c+'" />').appendTo(document.body);
this.$element.on("click.dismiss.modal",f.proxy(function(g){if(g.target!==g.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)
},this));
if(h){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!a){return
}h?this.$backdrop.one(f.support.transition.end,a).emulateTransitionEnd(150):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(f.support.transition.end,a).emulateTransitionEnd(150):a()
}else{if(a){a()
}}}};
var e=f.fn.modal;
f.fn.modal=function(b,a){return this.each(function(){var c=f(this);
var i=c.data("bs.modal");
var j=f.extend({},d.DEFAULTS,c.data(),typeof b=="object"&&b);
if(!i){c.data("bs.modal",(i=new d(this,j)))
}if(typeof b=="string"){i[b](a)
}else{if(j.show){i.show(a)
}}})
};
f.fn.modal.Constructor=d;
f.fn.modal.noConflict=function(){f.fn.modal=e;
return this
};
f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(a){var b=f(this);
var j=b.attr("href");
var k=f(b.attr("data-target")||(j&&j.replace(/.*(?=#[^\s]+$)/,"")));
var c=k.data("modal")?"toggle":f.extend({remote:!/#/.test(j)&&j},k.data(),b.data());
a.preventDefault();
k.modal(c,this).one("hide",function(){b.is(":visible")&&b.focus()
})
});
f(document).on("show.bs.modal",".modal",function(){f(document.body).addClass("modal-open")
}).on("hidden.bs.modal",".modal",function(){f(document.body).removeClass("modal-open")
})
}(jQuery);
+function(f){var d=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;
this.init("tooltip",a,b)
};
d.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};
d.prototype.init=function(b,i,n){this.enabled=true;
this.type=b;
this.$element=f(i);
this.options=this.getOptions(n);
var c=this.options.trigger.split(" ");
for(var m=c.length;
m--;
){var o=c[m];
if(o=="click"){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if(o!="manual"){var a=o=="hover"?"mouseenter":"focus";
var p=o=="hover"?"mouseleave":"blur";
this.$element.on(a+"."+this.type,this.options.selector,f.proxy(this.enter,this));
this.$element.on(p+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?(this._options=f.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
};
d.prototype.getDefaults=function(){return d.DEFAULTS
};
d.prototype.getOptions=function(a){a=f.extend({},this.getDefaults(),this.$element.data(),a);
if(a.delay&&typeof a.delay=="number"){a.delay={show:a.delay,hide:a.delay}
}return a
};
d.prototype.getDelegateOptions=function(){var b={};
var a=this.getDefaults();
this._options&&f.each(this._options,function(h,c){if(a[h]!=c){b[h]=c
}});
return b
};
d.prototype.enter=function(a){var b=a instanceof this.constructor?a:f(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
clearTimeout(b.timeout);
b.hoverState="in";
if(!b.options.delay||!b.options.delay.show){return b.show()
}b.timeout=setTimeout(function(){if(b.hoverState=="in"){b.show()
}},b.options.delay.show)
};
d.prototype.leave=function(a){var b=a instanceof this.constructor?a:f(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);
clearTimeout(b.timeout);
b.hoverState="out";
if(!b.options.delay||!b.options.delay.hide){return b.hide()
}b.timeout=setTimeout(function(){if(b.hoverState=="out"){b.hide()
}},b.options.delay.hide)
};
d.prototype.show=function(){var u=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(u);
if(u.isDefaultPrevented()){return
}var y=this.tip();
this.setContent();
if(this.options.animation){y.addClass("fade")
}var z=typeof this.options.placement=="function"?this.options.placement.call(this,y[0],this.$element[0]):this.options.placement;
var a=/\s?auto?\s?/i;
var E=a.test(z);
if(E){z=z.replace(a,"")||"top"
}y.detach().css({top:0,left:0,display:"block"}).addClass(z);
this.options.container?y.appendTo(this.options.container):y.insertAfter(this.$element);
var t=this.getPosition();
var D=y[0].offsetWidth;
var w=y[0].offsetHeight;
if(E){var A=this.$element.parent();
var B=z;
var c=document.documentElement.scrollTop||document.body.scrollTop;
var b=this.options.container=="body"?window.innerWidth:A.outerWidth();
var v=this.options.container=="body"?window.innerHeight:A.outerHeight();
var x=this.options.container=="body"?0:A.offset().left;
z=z=="bottom"&&t.top+t.height+w-c>v?"top":z=="top"&&t.top-c-w<0?"bottom":z=="right"&&t.right+D>b?"left":z=="left"&&t.left-D<x?"right":z;
y.removeClass(B).addClass(z)
}var C=this.getCalculatedOffset(z,t,D,w);
this.applyPlacement(C,z);
this.$element.trigger("shown.bs."+this.type)
}};
d.prototype.applyPlacement=function(q,p){var s;
var o=this.tip();
var t=o[0].offsetWidth;
var a=o[0].offsetHeight;
var u=parseInt(o.css("margin-top"),10);
var r=parseInt(o.css("margin-left"),10);
if(isNaN(u)){u=0
}if(isNaN(r)){r=0
}q.top=q.top+u;
q.left=q.left+r;
o.offset(q).addClass("in");
var v=o[0].offsetWidth;
var c=o[0].offsetHeight;
if(p=="top"&&c!=a){s=true;
q.top=q.top+a-c
}if(/bottom|top/.test(p)){var b=0;
if(q.left<0){b=q.left*-2;
q.left=0;
o.offset(q);
v=o[0].offsetWidth;
c=o[0].offsetHeight
}this.replaceArrow(b-t+v,v,"left")
}else{this.replaceArrow(c-a,c,"top")
}if(s){o.offset(q)
}};
d.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?(50*(1-a/b)+"%"):"")
};
d.prototype.setContent=function(){var a=this.tip();
var b=this.getTitle();
a.find(".tooltip-inner")[this.options.html?"html":"text"](b);
a.removeClass("fade in top bottom left right")
};
d.prototype.hide=function(){var c=this;
var a=this.tip();
var b=f.Event("hide.bs."+this.type);
function i(){if(c.hoverState!="in"){a.detach()
}}this.$element.trigger(b);
if(b.isDefaultPrevented()){return
}a.removeClass("in");
f.support.transition&&this.$tip.hasClass("fade")?a.one(f.support.transition.end,i).emulateTransitionEnd(150):i();
this.$element.trigger("hidden.bs."+this.type);
return this
};
d.prototype.fixTitle=function(){var a=this.$element;
if(a.attr("title")||typeof(a.attr("data-original-title"))!="string"){a.attr("data-original-title",a.attr("title")||"").attr("title","")
}};
d.prototype.hasContent=function(){return this.getTitle()
};
d.prototype.getPosition=function(){var a=this.$element[0];
return f.extend({},(typeof a.getBoundingClientRect=="function")?a.getBoundingClientRect():{width:a.offsetWidth,height:a.offsetHeight},this.$element.offset())
};
d.prototype.getCalculatedOffset=function(h,a,c,b){return h=="bottom"?{top:a.top+a.height,left:a.left+a.width/2-c/2}:h=="top"?{top:a.top-b,left:a.left+a.width/2-c/2}:h=="left"?{top:a.top+a.height/2-b/2,left:a.left-c}:{top:a.top+a.height/2-b/2,left:a.left+a.width}
};
d.prototype.getTitle=function(){var a;
var c=this.$element;
var b=this.options;
a=c.attr("data-original-title")||(typeof b.title=="function"?b.title.call(c[0]):b.title);
return a
};
d.prototype.tip=function(){return this.$tip=this.$tip||f(this.options.template)
};
d.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
};
d.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();
this.$element=null;
this.options=null
}};
d.prototype.enable=function(){this.enabled=true
};
d.prototype.disable=function(){this.enabled=false
};
d.prototype.toggleEnabled=function(){this.enabled=!this.enabled
};
d.prototype.toggle=function(a){var b=a?f(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;
b.tip().hasClass("in")?b.leave(b):b.enter(b)
};
d.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)
};
var e=f.fn.tooltip;
f.fn.tooltip=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.tooltip");
var h=typeof a=="object"&&a;
if(!c){b.data("bs.tooltip",(c=new d(this,h)))
}if(typeof a=="string"){c[a]()
}})
};
f.fn.tooltip.Constructor=d;
f.fn.tooltip.noConflict=function(){f.fn.tooltip=e;
return this
}
}(jQuery);
+function(f){var d=function(a,b){this.init("popover",a,b)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}d.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
d.prototype=f.extend({},f.fn.tooltip.Constructor.prototype);
d.prototype.constructor=d;
d.prototype.getDefaults=function(){return d.DEFAULTS
};
d.prototype.setContent=function(){var a=this.tip();
var b=this.getTitle();
var c=this.getContent();
a.find(".popover-title")[this.options.html?"html":"text"](b);
a.find(".popover-content")[this.options.html?"html":"text"](c);
a.removeClass("fade top bottom left right in");
if(!a.find(".popover-title").html()){a.find(".popover-title").hide()
}};
d.prototype.hasContent=function(){return this.getTitle()||this.getContent()
};
d.prototype.getContent=function(){var b=this.$element;
var a=this.options;
return b.attr("data-content")||(typeof a.content=="function"?a.content.call(b[0]):a.content)
};
d.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
d.prototype.tip=function(){if(!this.$tip){this.$tip=f(this.options.template)
}return this.$tip
};
var e=f.fn.popover;
f.fn.popover=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.popover");
var h=typeof a=="object"&&a;
if(!c){b.data("bs.popover",(c=new d(this,h)))
}if(typeof a=="string"){c[a]()
}})
};
f.fn.popover.Constructor=d;
f.fn.popover.noConflict=function(){f.fn.popover=e;
return this
}
}(jQuery);
+function(f){function d(b,c){var h;
var a=f.proxy(this.process,this);
this.$element=f(b).is("body")?f(window):f(b);
this.$body=f("body");
this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",a);
this.options=f.extend({},d.DEFAULTS,c);
this.selector=(this.options.target||((h=f(b).attr("href"))&&h.replace(/.*(?=#[^\s]+$)/,""))||"")+" .nav li span > a";
this.offsets=f([]);
this.targets=f([]);
this.activeTarget=null;
this.refresh();
this.process()
}d.DEFAULTS={offset:10};
d.prototype.refresh=function(){var c=this.$element[0]==window?"offset":"position";
this.offsets=f([]);
this.targets=f([]);
var b=this;
var a=this.$body.find(this.selector).map(function(){var k=f(this);
var l=k.data("target")||k.attr("href");
var j=/^#\w/.test(l)&&f(l);
return(j&&j.length&&[[j[c]().top+(!f.isWindow(b.$scrollElement.get(0))&&b.$scrollElement.scrollTop()),l]])||null
}).sort(function(i,j){return i[0]-j[0]
}).each(function(){b.offsets.push(this[0]);
b.targets.push(this[1])
})
};
d.prototype.process=function(){var b=this.$scrollElement.scrollTop()+this.options.offset;
var l=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight;
var c=l-this.$scrollElement.height();
var i=this.offsets;
var n=this.targets;
var a=this.activeTarget;
var m;
if(b>=c){return a!=(m=n.last()[0])&&this.activate(m)
}for(m=i.length;
m--;
){a!=n[m]&&b>=i[m]&&(!i[m+1]||b<=i[m+1])&&this.activate(n[m])
}};
d.prototype.activate=function(a){this.activeTarget=a;
f(this.selector).parents(".active").removeClass("active");
var c=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]';
var b=f(c).parents("li").addClass("active");
if(b.parent(".dropdown-menu").length){b=b.closest("li.dropdown").addClass("active")
}b.trigger("activate")
};
var e=f.fn.scrollspy;
f.fn.scrollspy=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.scrollspy");
var h=typeof a=="object"&&a;
if(!c){b.data("bs.scrollspy",(c=new d(this,h)))
}if(typeof a=="string"){c[a]()
}})
};
f.fn.scrollspy.Constructor=d;
f.fn.scrollspy.noConflict=function(){f.fn.scrollspy=e;
return this
};
f(window).on("load",function(){f('[data-spy="scroll"]').each(function(){var a=f(this)
})
})
}(jQuery);
+function(f){var d=function(a){this.element=f(a)
};
d.prototype.show=function(){var a=this.element;
var k=a.closest("ul:not(.dropdown-menu)");
var l=a.data("target");
if(!l){l=a.attr("href");
l=l&&l.replace(/.*(?=#[^\s]*$)/,"")
}if(a.parent("li").hasClass("active")){return
}var c=k.find(".active:last a")[0];
var b=f.Event("show.bs.tab",{relatedTarget:c});
a.trigger(b);
if(b.isDefaultPrevented()){return
}var m=f(l);
this.activate(a.parent("li"),k);
this.activate(m,m.parent(),function(){a.trigger({type:"shown.bs.tab",relatedTarget:c})
})
};
d.prototype.activate=function(j,k,a){var l=k.find("> .active");
var b=a&&f.support.transition&&l.hasClass("fade");
function c(){l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
j.addClass("active");
if(b){j[0].offsetWidth;
j.addClass("in")
}else{j.removeClass("fade")
}if(j.parent(".dropdown-menu")){j.closest("li.dropdown").addClass("active")
}a&&a()
}b?l.one(f.support.transition.end,c).emulateTransitionEnd(150):c();
l.removeClass("in")
};
var e=f.fn.tab;
f.fn.tab=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.tab");
if(!c){b.data("bs.tab",(c=new d(this)))
}if(typeof a=="string"){c[a]()
}})
};
f.fn.tab.Constructor=d;
f.fn.tab.noConflict=function(){f.fn.tab=e;
return this
};
f(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(a){a.preventDefault();
f(this).tab("show")
})
}(jQuery);
+function(f){var d=function(a,b){this.options=f.extend({},d.DEFAULTS,b);
this.$window=f(window).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this));
this.$element=f(a);
this.affixed=this.unpin=null;
this.checkPosition()
};
d.RESET="affix affix-top affix-bottom";
d.DEFAULTS={offset:0};
d.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
};
d.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return
}var c=f(document).height();
var b=this.$window.scrollTop();
var n=this.$element.offset();
var a=this.options.offset;
var k=a.top;
var l=a.bottom;
if(typeof a!="object"){l=k=a
}if(typeof k=="function"){k=a.top()
}if(typeof l=="function"){l=a.bottom()
}var m=this.unpin!=null&&(b+this.unpin<=n.top)?false:l!=null&&(n.top+this.$element.height()>=c-l)?"bottom":k!=null&&(b<=k)?"top":false;
if(this.affixed===m){return
}if(this.unpin){this.$element.css("top","")
}this.affixed=m;
this.unpin=m=="bottom"?n.top-b:null;
this.$element.removeClass(d.RESET).addClass("affix"+(m?"-"+m:""));
if(m=="bottom"){this.$element.offset({top:document.body.offsetHeight-l-this.$element.height()})
}};
var e=f.fn.affix;
f.fn.affix=function(a){return this.each(function(){var b=f(this);
var c=b.data("bs.affix");
var h=typeof a=="object"&&a;
if(!c){b.data("bs.affix",(c=new d(this,h)))
}if(typeof a=="string"){c[a]()
}})
};
f.fn.affix.Constructor=d;
f.fn.affix.noConflict=function(){f.fn.affix=e;
return this
};
f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var a=f(this);
var b=a.data();
b.offset=b.offset||{};
if(b.offsetBottom){b.offset.bottom=b.offsetBottom
}if(b.offsetTop){b.offset.top=b.offsetTop
}a.affix(b)
})
})
}(jQuery);
/*! jQuery UI - v1.10.3 - 2013-12-01
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.button.js, jquery.ui.dialog.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(g,i){var h=0,j=/^ui-id-\d+$/;
g.ui=g.ui||{};
g.extend(g.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
g.fn.extend({focus:(function(a){return function(c,b){return typeof c==="number"?this.each(function(){var d=this;
setTimeout(function(){g(d).focus();
if(b){b.call(d)
}},c)
}):a.apply(this,arguments)
}
})(g.fn.focus),scrollParent:function(){var a;
if((g.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){a=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(g.css(this,"position"))&&(/(auto|scroll)/).test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0)
}else{a=this.parents().filter(function(){return(/(auto|scroll)/).test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!a.length?g(document):a
},zIndex:function(a){if(a!==i){return this.css("zIndex",a)
}if(this.length){var c=g(this[0]),d,b;
while(c.length&&c[0]!==document){d=c.css("position");
if(d==="absolute"||d==="relative"||d==="fixed"){b=parseInt(c.css("zIndex"),10);
if(!isNaN(b)&&b!==0){return b
}}c=c.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++h)
}})
},removeUniqueId:function(){return this.each(function(){if(j.test(this.id)){g(this).removeAttr("id")
}})
}});
function k(d,f){var b,c,e,a=d.nodeName.toLowerCase();
if("area"===a){b=d.parentNode;
c=b.name;
if(!d.href||!c||b.nodeName.toLowerCase()!=="map"){return false
}e=g("img[usemap=#"+c+"]")[0];
return !!e&&l(e)
}return(/input|select|textarea|button|object/.test(a)?!d.disabled:"a"===a?d.href||f:f)&&l(d)
}function l(a){return g.expr.filters.visible(a)&&!g(a).parents().addBack().filter(function(){return g.css(this,"visibility")==="hidden"
}).length
}g.extend(g.expr[":"],{data:g.expr.createPseudo?g.expr.createPseudo(function(a){return function(b){return !!g.data(b,a)
}
}):function(a,b,c){return !!g.data(a,c[3])
},focusable:function(a){return k(a,!isNaN(g.attr(a,"tabindex")))
},tabbable:function(a){var c=g.attr(a,"tabindex"),b=isNaN(c);
return(b||c>=0)&&k(a,!b)
}});
if(!g("<a>").outerWidth(1).jquery){g.each(["Width","Height"],function(d,f){var e=f==="Width"?["Left","Right"]:["Top","Bottom"],c=f.toLowerCase(),a={innerWidth:g.fn.innerWidth,innerHeight:g.fn.innerHeight,outerWidth:g.fn.outerWidth,outerHeight:g.fn.outerHeight};
function b(r,s,m,q){g.each(e,function(){s-=parseFloat(g.css(r,"padding"+this))||0;
if(m){s-=parseFloat(g.css(r,"border"+this+"Width"))||0
}if(q){s-=parseFloat(g.css(r,"margin"+this))||0
}});
return s
}g.fn["inner"+f]=function(m){if(m===i){return a["inner"+f].call(this)
}return this.each(function(){g(this).css(c,b(this,m)+"px")
})
};
g.fn["outer"+f]=function(m,o){if(typeof m!=="number"){return a["outer"+f].call(this,m)
}return this.each(function(){g(this).css(c,b(this,m,true,o)+"px")
})
}
})
}if(!g.fn.addBack){g.fn.addBack=function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))
}
}if(g("<a>").data("a-b","a").removeData("a-b").data("a-b")){g.fn.removeData=(function(a){return function(b){if(arguments.length){return a.call(this,g.camelCase(b))
}else{return a.call(this)
}}
})(g.fn.removeData)
}g.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
g.support.selectstart="onselectstart" in document.createElement("div");
g.fn.extend({disableSelection:function(){return this.bind((g.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
g.extend(g.ui,{plugin:{add:function(d,c,a){var e,b=g.ui[d].prototype;
for(e in a){b.plugins[e]=b.plugins[e]||[];
b.plugins[e].push([c,a[e]])
}},call:function(e,c,d){var b,a=e.plugins[c];
if(!a||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11){return
}for(b=0;
b<a.length;
b++){if(e.options[a[b][0]]){a[b][1].apply(e.element,d)
}}}},hasScroll:function(a,c){if(g(a).css("overflow")==="hidden"){return false
}var d=(c&&c==="left")?"scrollLeft":"scrollTop",b=false;
if(a[d]>0){return true
}a[d]=1;
b=(a[d]>0);
a[d]=0;
return b
}})
})(jQuery);
(function(f,h){var g=0,i=Array.prototype.slice,j=f.cleanData;
f.cleanData=function(d){for(var c=0,b;
(b=d[c])!=null;
c++){try{f(b).triggerHandler("remove")
}catch(a){}}j(d)
};
f.widget=function(r,q,a){var d,c,o,b,p={},e=r.split(".")[0];
r=r.split(".")[1];
d=e+"-"+r;
if(!a){a=q;
q=f.Widget
}f.expr[":"][d.toLowerCase()]=function(k){return !!f.data(k,d)
};
f[e]=f[e]||{};
c=f[e][r];
o=f[e][r]=function(l,k){if(!this._createWidget){return new o(l,k)
}if(arguments.length){this._createWidget(l,k)
}};
f.extend(o,c,{version:a.version,_proto:f.extend({},a),_childConstructors:[]});
b=new q();
b.options=f.widget.extend({},b.options);
f.each(a,function(k,l){if(!f.isFunction(l)){p[k]=l;
return
}p[k]=(function(){var n=function(){return q.prototype[k].apply(this,arguments)
},m=function(t){return q.prototype[k].apply(this,t)
};
return function(){var v=this._super,x=this._superApply,w;
this._super=n;
this._superApply=m;
w=l.apply(this,arguments);
this._super=v;
this._superApply=x;
return w
}
})()
});
o.prototype=f.widget.extend(b,{widgetEventPrefix:c?b.widgetEventPrefix:r},p,{constructor:o,namespace:e,widgetName:r,widgetFullName:d});
if(c){f.each(c._childConstructors,function(l,k){var m=k.prototype;
f.widget(m.namespace+"."+m.widgetName,o,k._proto)
});
delete c._childConstructors
}else{q._childConstructors.push(o)
}f.widget.bridge(r,o)
};
f.widget.extend=function(a){var e=i.call(arguments,1),b=0,l=e.length,d,c;
for(;
b<l;
b++){for(d in e[b]){c=e[b][d];
if(e[b].hasOwnProperty(d)&&c!==h){if(f.isPlainObject(c)){a[d]=f.isPlainObject(a[d])?f.widget.extend({},a[d],c):f.widget.extend({},c)
}else{a[d]=c
}}}}return a
};
f.widget.bridge=function(b,c){var a=c.prototype.widgetFullName||b;
f.fn[b]=function(e){var n=typeof e==="string",m=i.call(arguments,1),d=this;
e=!n&&m.length?f.widget.extend.apply(null,[e].concat(m)):e;
if(n){this.each(function(){var l,k=f.data(this,a);
if(!k){return f.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+e+"'")
}if(!f.isFunction(k[e])||e.charAt(0)==="_"){return f.error("no such method '"+e+"' for "+b+" widget instance")
}l=k[e].apply(k,m);
if(l!==k&&l!==h){d=l&&l.jquery?d.pushStack(l.get()):l;
return false
}})
}else{this.each(function(){var k=f.data(this,a);
if(k){k.option(e||{})._init()
}else{f.data(this,a,new c(e,this))
}})
}return d
}
};
f.Widget=function(){};
f.Widget._childConstructors=[];
f.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(b,a){a=f(a||this.defaultElement||this)[0];
this.element=f(a);
this.uuid=g++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=f.widget.extend({},this.options,this._getCreateOptions(),b);
this.bindings=f();
this.hoverable=f();
this.focusable=f();
if(a!==this){f.data(a,this.widgetFullName,this);
this._on(true,this.element,{remove:function(c){if(c.target===a){this.destroy()
}}});
this.document=f(a.style?a.ownerDocument:a.document||a);
this.window=f(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:f.noop,_getCreateEventData:f.noop,_create:f.noop,_init:f.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(f.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:f.noop,widget:function(){return this.element
},option:function(c,b){var m=c,a,d,e;
if(arguments.length===0){return f.widget.extend({},this.options)
}if(typeof c==="string"){m={};
a=c.split(".");
c=a.shift();
if(a.length){d=m[c]=f.widget.extend({},this.options[c]);
for(e=0;
e<a.length-1;
e++){d[a[e]]=d[a[e]]||{};
d=d[a[e]]
}c=a.pop();
if(b===h){return d[c]===h?null:d[c]
}d[c]=b
}else{if(b===h){return this.options[c]===h?null:this.options[c]
}m[c]=b
}}this._setOptions(m);
return this
},_setOptions:function(b){var a;
for(a in b){this._setOption(a,b[a])
}return this
},_setOption:function(b,a){this.options[b]=a;
if(b==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!a).attr("aria-disabled",a);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(b,c,d){var a,e=this;
if(typeof b!=="boolean"){d=c;
c=b;
b=false
}if(!d){d=c;
c=this.element;
a=this.widget()
}else{c=a=f(c);
this.bindings=this.bindings.add(c)
}f.each(d,function(t,u){function q(){if(!b&&(e.options.disabled===true||f(this).hasClass("ui-state-disabled"))){return
}return(typeof u==="string"?e[u]:u).apply(e,arguments)
}if(typeof u!=="string"){q.guid=u.guid=u.guid||q.guid||f.guid++
}var v=t.match(/^(\w+)\s*(.*)$/),r=v[1]+e.eventNamespace,s=v[2];
if(s){a.delegate(s,r,q)
}else{c.bind(r,q)
}})
},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
a.unbind(b).undelegate(b)
},_delay:function(a,b){function c(){return(typeof a==="string"?d[a]:a).apply(d,arguments)
}var d=this;
return setTimeout(c,b||0)
},_hoverable:function(a){this.hoverable=this.hoverable.add(a);
this._on(a,{mouseenter:function(b){f(b.currentTarget).addClass("ui-state-hover")
},mouseleave:function(b){f(b.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(a){this.focusable=this.focusable.add(a);
this._on(a,{focusin:function(b){f(b.currentTarget).addClass("ui-state-focus")
},focusout:function(b){f(b.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(l,e,d){var a,b,c=this.options[l];
d=d||{};
e=f.Event(e);
e.type=(l===this.widgetEventPrefix?l:this.widgetEventPrefix+l).toLowerCase();
e.target=this.element[0];
b=e.originalEvent;
if(b){for(a in b){if(!(a in e)){e[a]=b[a]
}}}this.element.trigger(e,d);
return !(f.isFunction(c)&&c.apply(this.element[0],[e].concat(d))===false||e.isDefaultPrevented())
}};
f.each({show:"fadeIn",hide:"fadeOut"},function(a,b){f.Widget.prototype["_"+a]=function(e,m,c){if(typeof m==="string"){m={effect:m}
}var d,n=!m?a:m===true||typeof m==="number"?b:m.effect||b;
m=m||{};
if(typeof m==="number"){m={duration:m}
}d=!f.isEmptyObject(m);
m.complete=c;
if(m.delay){e.delay(m.delay)
}if(d&&f.effects&&f.effects.effect[n]){e[a](m)
}else{if(n!==a&&e[n]){e[n](m.duration,m.easing,c)
}else{e.queue(function(k){f(this)[a]();
if(c){c.call(e[0])
}k()
})
}}}
})
})(jQuery);
(function(d,f){var e=false;
d(document).mouseup(function(){e=false
});
d.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var a=this;
this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)
}).bind("click."+this.widgetName,function(b){if(true===d.data(b.target,a.widgetName+".preventClickEvent")){d.removeData(b.target,a.widgetName+".preventClickEvent");
b.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){d(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(b){if(e){return
}(this._mouseStarted&&this._mouseUp(b));
this._mouseDownEvent=b;
var c=this,a=(b.which===1),h=(typeof this.options.cancel==="string"&&b.target.nodeName?d(b.target).closest(this.options.cancel).length:false);
if(!a||h||!this._mouseCapture(b)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=(this._mouseStart(b)!==false);
if(!this._mouseStarted){b.preventDefault();
return true
}}if(true===d.data(b.target,this.widgetName+".preventClickEvent")){d.removeData(b.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(g){return c._mouseMove(g)
};
this._mouseUpDelegate=function(g){return c._mouseUp(g)
};
d(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
b.preventDefault();
e=true;
return true
},_mouseMove:function(a){if(d.ui.ie&&(!document.documentMode||document.documentMode<9)&&!a.button){return this._mouseUp(a)
}if(this._mouseStarted){this._mouseDrag(a);
return a.preventDefault()
}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,a)!==false);
(this._mouseStarted?this._mouseDrag(a):this._mouseUp(a))
}return !this._mouseStarted
},_mouseUp:function(a){d(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(a.target===this._mouseDownEvent.target){d.data(a.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(a)
}return false
},_mouseDistanceMet:function(a){return(Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(z,B){z.ui=z.ui||{};
var u,t=Math.max,p=Math.abs,r=Math.round,A=/left|center|right/,w=/top|center|bottom/,D=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,C=/%$/,x=z.fn.position;
function q(a,b,c){return[parseFloat(a[0])*(C.test(a[0])?b/100:1),parseFloat(a[1])*(C.test(a[1])?c/100:1)]
}function v(b,a){return parseInt(z.css(b,a),10)||0
}function y(a){var b=a[0];
if(b.nodeType===9){return{width:a.width(),height:a.height(),offset:{top:0,left:0}}
}if(z.isWindow(b)){return{width:a.width(),height:a.height(),offset:{top:a.scrollTop(),left:a.scrollLeft()}}
}if(b.preventDefault){return{width:0,height:0,offset:{top:b.pageY,left:b.pageX}}
}return{width:a.outerWidth(),height:a.outerHeight(),offset:a.offset()}
}z.position={scrollbarWidth:function(){if(u!==B){return u
}var c,d,a=z("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),b=a.children()[0];
z("body").append(a);
c=b.offsetWidth;
a.css("overflow","scroll");
d=b.offsetWidth;
if(c===d){d=a[0].clientWidth
}a.remove();
return(u=c-d)
},getScrollInfo:function(a){var b=a.isWindow?"":a.element.css("overflow-x"),c=a.isWindow?"":a.element.css("overflow-y"),d=b==="scroll"||(b==="auto"&&a.width<a.element[0].scrollWidth),e=c==="scroll"||(c==="auto"&&a.height<a.element[0].scrollHeight);
return{width:e?z.position.scrollbarWidth():0,height:d?z.position.scrollbarWidth():0}
},getWithinInfo:function(b){var a=z(b||window),c=z.isWindow(a[0]);
return{element:a,isWindow:c,offset:a.offset()||{left:0,top:0},scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:c?a.width():a.outerWidth(),height:c?a.height():a.outerHeight()}
}};
z.fn.position=function(e){if(!e||!e.of){return x.apply(this,arguments)
}e=z.extend({},e);
var d,h,j,f,k,c,i=z(e.of),l=z.position.getWithinInfo(e.within),b=z.position.getScrollInfo(l),g=(e.collision||"flip").split(" "),a={};
c=y(i);
if(i[0].preventDefault){e.at="left top"
}h=c.width;
j=c.height;
f=c.offset;
k=z.extend({},f);
z.each(["my","at"],function(){var m=(e[this]||"").split(" "),n,o;
if(m.length===1){m=A.test(m[0])?m.concat(["center"]):w.test(m[0])?["center"].concat(m):["center","center"]
}m[0]=A.test(m[0])?m[0]:"center";
m[1]=w.test(m[1])?m[1]:"center";
n=D.exec(m[0]);
o=D.exec(m[1]);
a[this]=[n?n[0]:0,o?o[0]:0];
e[this]=[s.exec(m[0])[0],s.exec(m[1])[0]]
});
if(g.length===1){g[1]=g[0]
}if(e.at[0]==="right"){k.left+=h
}else{if(e.at[0]==="center"){k.left+=h/2
}}if(e.at[1]==="bottom"){k.top+=j
}else{if(e.at[1]==="center"){k.top+=j/2
}}d=q(a.at,h,j);
k.left+=d[0];
k.top+=d[1];
return this.each(function(){var n,M,T=z(this),R=T.outerWidth(),m=T.outerHeight(),S=v(this,"marginLeft"),o=v(this,"marginTop"),N=R+S+v(this,"marginRight")+b.width,O=m+o+v(this,"marginBottom")+b.height,Q=z.extend({},k),P=q(a.my,T.outerWidth(),T.outerHeight());
if(e.my[0]==="right"){Q.left-=R
}else{if(e.my[0]==="center"){Q.left-=R/2
}}if(e.my[1]==="bottom"){Q.top-=m
}else{if(e.my[1]==="center"){Q.top-=m/2
}}Q.left+=P[0];
Q.top+=P[1];
if(!z.support.offsetFractions){Q.left=r(Q.left);
Q.top=r(Q.top)
}n={marginLeft:S,marginTop:o};
z.each(["left","top"],function(E,F){if(z.ui.position[g[E]]){z.ui.position[g[E]][F](Q,{targetWidth:h,targetHeight:j,elemWidth:R,elemHeight:m,collisionPosition:n,collisionWidth:N,collisionHeight:O,offset:[d[0]+P[0],d[1]+P[1]],my:e.my,at:e.at,within:l,elem:T})
}});
if(e.using){M=function(G){var E=f.left-Q.left,H=E+h-R,F=f.top-Q.top,I=F+j-m,J={target:{element:i,left:f.left,top:f.top,width:h,height:j},element:{element:T,left:Q.left,top:Q.top,width:R,height:m},horizontal:H<0?"left":E>0?"right":"center",vertical:I<0?"top":F>0?"bottom":"middle"};
if(h<R&&p(E+H)<h){J.horizontal="center"
}if(j<m&&p(F+I)<j){J.vertical="middle"
}if(t(p(E),p(H))>t(p(F),p(I))){J.important="horizontal"
}else{J.important="vertical"
}e.using.call(this,G,J)
}
}T.offset(z.extend(Q,{using:M}))
})
};
z.ui.position={fit:{left:function(h,i){var a=i.within,f=a.isWindow?a.scrollLeft:a.offset.left,d=a.width,g=h.left-i.collisionPosition.marginLeft,e=f-g,b=g+i.collisionWidth-d-f,c;
if(i.collisionWidth>d){if(e>0&&b<=0){c=h.left+e+i.collisionWidth-d-f;
h.left+=e-c
}else{if(b>0&&e<=0){h.left=f
}else{if(e>b){h.left=f+d-i.collisionWidth
}else{h.left=f
}}}}else{if(e>0){h.left+=e
}else{if(b>0){h.left-=b
}else{h.left=t(h.left-g,h.left)
}}}},top:function(i,a){var b=a.within,e=b.isWindow?b.scrollTop:b.offset.top,d=a.within.height,g=i.top-a.collisionPosition.marginTop,f=e-g,h=g+a.collisionHeight-d-e,c;
if(a.collisionHeight>d){if(f>0&&h<=0){c=i.top+f+a.collisionHeight-d-e;
i.top+=f-c
}else{if(h>0&&f<=0){i.top=e
}else{if(f>h){i.top=e+d-a.collisionHeight
}else{i.top=e
}}}}else{if(f>0){i.top+=f
}else{if(h>0){i.top-=h
}else{i.top=t(i.top-g,i.top)
}}}}},flip:{left:function(k,l){var m=l.within,g=m.offset.left+m.scrollLeft,c=m.width,a=m.isWindow?m.scrollLeft:m.offset.left,j=k.left-l.collisionPosition.marginLeft,f=j-a,b=j+l.collisionWidth-c-a,h=l.my[0]==="left"?-l.elemWidth:l.my[0]==="right"?l.elemWidth:0,e=l.at[0]==="left"?l.targetWidth:l.at[0]==="right"?-l.targetWidth:0,n=-2*l.offset[0],d,i;
if(f<0){d=k.left+h+e+n+l.collisionWidth-c-g;
if(d<0||d<p(f)){k.left+=h+e+n
}}else{if(b>0){i=k.left-l.collisionPosition.marginLeft+h+e+n-a;
if(i>0||p(i)<b){k.left+=h+e+n
}}}},top:function(m,n){var o=n.within,e=o.offset.top+o.scrollTop,d=o.height,f=o.isWindow?o.scrollTop:o.offset.top,k=m.top-n.collisionPosition.marginTop,i=k-f,l=k+n.collisionHeight-d-f,h=n.my[1]==="top",j=h?-n.elemHeight:n.my[1]==="bottom"?n.elemHeight:0,b=n.at[1]==="top"?n.targetHeight:n.at[1]==="bottom"?-n.targetHeight:0,a=-2*n.offset[1],g,c;
if(i<0){c=m.top+j+b+a+n.collisionHeight-d-e;
if((m.top+j+b+a)>i&&(c<0||c<p(i))){m.top+=j+b+a
}}else{if(l>0){g=m.top-n.collisionPosition.marginTop+j+b+a-f;
if((m.top+j+b+a)>l&&(g>0||p(g)<l)){m.top+=j+b+a
}}}}},flipfit:{left:function(){z.ui.position.flip.left.apply(this,arguments);
z.ui.position.fit.left.apply(this,arguments)
},top:function(){z.ui.position.flip.top.apply(this,arguments);
z.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var c,a,f,d,e,g=document.getElementsByTagName("body")[0],b=document.createElement("div");
c=document.createElement(g?"div":"body");
f={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(g){z.extend(f,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(e in f){c.style[e]=f[e]
}c.appendChild(b);
a=g||document.documentElement;
a.insertBefore(c,a.firstChild);
b.style.cssText="position: absolute; left: 10.7432222px;";
d=z(b).offset().left;
z.support.offsetFractions=d>10&&d<11;
c.innerHTML="";
a.removeChild(c)
})()
}(jQuery));
(function(d,c){d.widget("ui.draggable",d.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}if(this.options.addClasses){this.element.addClass("ui-draggable")
}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(b){var a=this.options;
if(this.helper||a.disabled||d(b.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(b);
if(!this.handle){return false
}d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(d(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(b){var a=this.options;
this.helper=this._createHelper(b);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(d.ui.ddmanager){d.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offsetParent=this.helper.offsetParent();
this.offsetParentCssPosition=this.offsetParent.css("position");
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.offset.scroll=false;
d.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(b);
this.originalPageX=b.pageX;
this.originalPageY=b.pageY;
(a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt));
this._setContainment();
if(this._trigger("start",b)===false){this._clear();
return false
}this._cacheHelperProportions();
if(d.ui.ddmanager&&!a.dropBehaviour){d.ui.ddmanager.prepareOffsets(this,b)
}this._mouseDrag(b,true);
if(d.ui.ddmanager){d.ui.ddmanager.dragStart(this,b)
}return true
},_mouseDrag:function(f,a){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(f);
this.positionAbs=this._convertPositionTo("absolute");
if(!a){var b=this._uiHash();
if(this._trigger("drag",f,b)===false){this._mouseUp({});
return false
}this.position=b.position
}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}if(d.ui.ddmanager){d.ui.ddmanager.drag(this,f)
}return false
},_mouseStop:function(b){var f=this,a=false;
if(d.ui.ddmanager&&!this.options.dropBehaviour){a=d.ui.ddmanager.drop(this,b)
}if(this.dropped){a=this.dropped;
this.dropped=false
}if(this.options.helper==="original"&&!d.contains(this.element[0].ownerDocument,this.element[0])){return false
}if((this.options.revert==="invalid"&&!a)||(this.options.revert==="valid"&&a)||this.options.revert===true||(d.isFunction(this.options.revert)&&this.options.revert.call(this.element,a))){d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(f._trigger("stop",b)!==false){f._clear()
}})
}else{if(this._trigger("stop",b)!==false){this._clear()
}}return false
},_mouseUp:function(a){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(d.ui.ddmanager){d.ui.ddmanager.dragStop(this,a)
}return d.ui.mouse.prototype._mouseUp.call(this,a)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(a){return this.options.handle?!!d(a.target).closest(this.element.find(this.options.handle)).length:true
},_createHelper:function(b){var a=this.options,f=d.isFunction(a.helper)?d(a.helper.apply(this.element[0],[b])):(a.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!f.parents("body").length){f.appendTo((a.appendTo==="parent"?this.element[0].parentNode:a.appendTo))
}if(f[0]!==this.element[0]&&!(/(fixed|absolute)/).test(f.css("position"))){f.css("position","absolute")
}return f
},_adjustOffsetFromHelper:function(a){if(typeof a==="string"){a=a.split(" ")
}if(d.isArray(a)){a={left:+a[0],top:+a[1]||0}
}if("left" in a){this.offset.click.left=a.left+this.margins.left
}if("right" in a){this.offset.click.left=this.helperProportions.width-a.right+this.margins.left
}if("top" in a){this.offset.click.top=a.top+this.margins.top
}if("bottom" in a){this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top
}},_getParentOffset:function(){var a=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&d.ui.ie)){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var a=this.element.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var h,a,i,b=this.options;
if(!b.containment){this.containment=null;
return
}if(b.containment==="window"){this.containment=[d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,d(window).scrollLeft()+d(window).width()-this.helperProportions.width-this.margins.left,d(window).scrollTop()+(d(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(b.containment==="document"){this.containment=[0,0,d(document).width()-this.helperProportions.width-this.margins.left,(d(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(b.containment.constructor===Array){this.containment=b.containment;
return
}if(b.containment==="parent"){b.containment=this.helper[0].parentNode
}a=d(b.containment);
i=a[0];
if(!i){return
}h=a.css("overflow")!=="hidden";
this.containment=[(parseInt(a.css("borderLeftWidth"),10)||0)+(parseInt(a.css("paddingLeft"),10)||0),(parseInt(a.css("borderTopWidth"),10)||0)+(parseInt(a.css("paddingTop"),10)||0),(h?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(a.css("borderRightWidth"),10)||0)-(parseInt(a.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(h?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(a.css("borderBottomWidth"),10)||0)-(parseInt(a.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=a
},_convertPositionTo:function(b,a){if(!a){a=this.position
}var h=b==="absolute"?1:-1,i=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;
if(!this.offset.scroll){this.offset.scroll={top:i.scrollTop(),left:i.scrollLeft()}
}return{top:(a.top+this.offset.relative.top*h+this.offset.parent.top*h-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*h)),left:(a.left+this.offset.relative.left*h+this.offset.parent.left*h-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*h))}
},_generatePosition:function(q){var r,l,b,o,p=this.options,a=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,m=q.pageX,n=q.pageY;
if(!this.offset.scroll){this.offset.scroll={top:a.scrollTop(),left:a.scrollLeft()}
}if(this.originalPosition){if(this.containment){if(this.relative_container){l=this.relative_container.offset();
r=[this.containment[0]+l.left,this.containment[1]+l.top,this.containment[2]+l.left,this.containment[3]+l.top]
}else{r=this.containment
}if(q.pageX-this.offset.click.left<r[0]){m=r[0]+this.offset.click.left
}if(q.pageY-this.offset.click.top<r[1]){n=r[1]+this.offset.click.top
}if(q.pageX-this.offset.click.left>r[2]){m=r[2]+this.offset.click.left
}if(q.pageY-this.offset.click.top>r[3]){n=r[3]+this.offset.click.top
}}if(p.grid){b=p.grid[1]?this.originalPageY+Math.round((n-this.originalPageY)/p.grid[1])*p.grid[1]:this.originalPageY;
n=r?((b-this.offset.click.top>=r[1]||b-this.offset.click.top>r[3])?b:((b-this.offset.click.top>=r[1])?b-p.grid[1]:b+p.grid[1])):b;
o=p.grid[0]?this.originalPageX+Math.round((m-this.originalPageX)/p.grid[0])*p.grid[0]:this.originalPageX;
m=r?((o-this.offset.click.left>=r[0]||o-this.offset.click.left>r[2])?o:((o-this.offset.click.left>=r[0])?o-p.grid[0]:o+p.grid[0])):o
}}return{top:(n-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)),left:(m-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(f,b,a){a=a||this._uiHash();
d.ui.plugin.call(this,f,[b,a]);
if(f==="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return d.Widget.prototype._trigger.call(this,f,b,a)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
d.ui.plugin.add("draggable","connectToSortable",{start:function(i,b){var h=d(this).data("ui-draggable"),a=h.options,j=d.extend({},b,{item:h.element});
h.sortables=[];
d(a.connectToSortable).each(function(){var e=d.data(this,"ui-sortable");
if(e&&!e.options.disabled){h.sortables.push({instance:e,shouldRevert:e.options.revert});
e.refreshPositions();
e._trigger("activate",i,j)
}})
},stop:function(g,a){var b=d(this).data("ui-draggable"),h=d.extend({},a,{item:b.element});
d.each(b.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
b.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert
}this.instance._mouseStop(g);
this.instance.options.helper=this.instance.options._helper;
if(b.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",g,h)
}})
},drag:function(g,a){var b=d(this).data("ui-draggable"),h=this;
d.each(b.sortables,function(){var f=false,e=this;
this.instance.positionAbs=b.positionAbs;
this.instance.helperProportions=b.helperProportions;
this.instance.offset.click=b.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){f=true;
d.each(b.sortables,function(){this.instance.positionAbs=b.positionAbs;
this.instance.helperProportions=b.helperProportions;
this.instance.offset.click=b.offset.click;
if(this!==e&&this.instance._intersectsWith(this.instance.containerCache)&&d.contains(e.instance.element[0],this.instance.element[0])){f=false
}return f
})
}if(f){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=d(h).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return a.helper[0]
};
g.target=this.instance.currentItem[0];
this.instance._mouseCapture(g,true);
this.instance._mouseStart(g,true,true);
this.instance.offset.click.top=b.offset.click.top;
this.instance.offset.click.left=b.offset.click.left;
this.instance.offset.parent.left-=b.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=b.offset.parent.top-this.instance.offset.parent.top;
b._trigger("toSortable",g);
b.dropped=this.instance.element;
b.currentItem=b.element;
this.instance.fromOutside=b
}if(this.instance.currentItem){this.instance._mouseDrag(g)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",g,this.instance._uiHash(this.instance));
this.instance._mouseStop(g,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}b._trigger("fromSortable",g);
b.dropped=false
}}})
}});
d.ui.plugin.add("draggable","cursor",{start:function(){var b=d("body"),a=d(this).data("ui-draggable").options;
if(b.css("cursor")){a._cursor=b.css("cursor")
}b.css("cursor",a.cursor)
},stop:function(){var a=d(this).data("ui-draggable").options;
if(a._cursor){d("body").css("cursor",a._cursor)
}}});
d.ui.plugin.add("draggable","opacity",{start:function(g,b){var h=d(b.helper),a=d(this).data("ui-draggable").options;
if(h.css("opacity")){a._opacity=h.css("opacity")
}h.css("opacity",a.opacity)
},stop:function(f,b){var a=d(this).data("ui-draggable").options;
if(a._opacity){d(b.helper).css("opacity",a._opacity)
}}});
d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("ui-draggable");
if(a.scrollParent[0]!==document&&a.scrollParent[0].tagName!=="HTML"){a.overflowOffset=a.scrollParent.offset()
}},drag:function(b){var g=d(this).data("ui-draggable"),a=g.options,h=false;
if(g.scrollParent[0]!==document&&g.scrollParent[0].tagName!=="HTML"){if(!a.axis||a.axis!=="x"){if((g.overflowOffset.top+g.scrollParent[0].offsetHeight)-b.pageY<a.scrollSensitivity){g.scrollParent[0].scrollTop=h=g.scrollParent[0].scrollTop+a.scrollSpeed
}else{if(b.pageY-g.overflowOffset.top<a.scrollSensitivity){g.scrollParent[0].scrollTop=h=g.scrollParent[0].scrollTop-a.scrollSpeed
}}}if(!a.axis||a.axis!=="y"){if((g.overflowOffset.left+g.scrollParent[0].offsetWidth)-b.pageX<a.scrollSensitivity){g.scrollParent[0].scrollLeft=h=g.scrollParent[0].scrollLeft+a.scrollSpeed
}else{if(b.pageX-g.overflowOffset.left<a.scrollSensitivity){g.scrollParent[0].scrollLeft=h=g.scrollParent[0].scrollLeft-a.scrollSpeed
}}}}else{if(!a.axis||a.axis!=="x"){if(b.pageY-d(document).scrollTop()<a.scrollSensitivity){h=d(document).scrollTop(d(document).scrollTop()-a.scrollSpeed)
}else{if(d(window).height()-(b.pageY-d(document).scrollTop())<a.scrollSensitivity){h=d(document).scrollTop(d(document).scrollTop()+a.scrollSpeed)
}}}if(!a.axis||a.axis!=="y"){if(b.pageX-d(document).scrollLeft()<a.scrollSensitivity){h=d(document).scrollLeft(d(document).scrollLeft()-a.scrollSpeed)
}else{if(d(window).width()-(b.pageX-d(document).scrollLeft())<a.scrollSensitivity){h=d(document).scrollLeft(d(document).scrollLeft()+a.scrollSpeed)
}}}}if(h!==false&&d.ui.ddmanager&&!a.dropBehaviour){d.ui.ddmanager.prepareOffsets(g,b)
}}});
d.ui.plugin.add("draggable","snap",{start:function(){var b=d(this).data("ui-draggable"),a=b.options;
b.snapElements=[];
d(a.snap.constructor!==String?(a.snap.items||":data(ui-draggable)"):a.snap).each(function(){var g=d(this),h=g.offset();
if(this!==b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:h.top,left:h.left})
}})
},drag:function(r,D){var M,a,H,G,t,E,F,C,o,I,J=d(this).data("ui-draggable"),B=J.options,b=B.snapTolerance,i=D.offset.left,l=i+J.helperProportions.width,K=D.offset.top,L=K+J.helperProportions.height;
for(o=J.snapElements.length-1;
o>=0;
o--){t=J.snapElements[o].left;
E=t+J.snapElements[o].width;
F=J.snapElements[o].top;
C=F+J.snapElements[o].height;
if(l<t-b||i>E+b||L<F-b||K>C+b||!d.contains(J.snapElements[o].item.ownerDocument,J.snapElements[o].item)){if(J.snapElements[o].snapping){(J.options.snap.release&&J.options.snap.release.call(J.element,r,d.extend(J._uiHash(),{snapItem:J.snapElements[o].item})))
}J.snapElements[o].snapping=false;
continue
}if(B.snapMode!=="inner"){M=Math.abs(F-L)<=b;
a=Math.abs(C-K)<=b;
H=Math.abs(t-l)<=b;
G=Math.abs(E-i)<=b;
if(M){D.position.top=J._convertPositionTo("relative",{top:F-J.helperProportions.height,left:0}).top-J.margins.top
}if(a){D.position.top=J._convertPositionTo("relative",{top:C,left:0}).top-J.margins.top
}if(H){D.position.left=J._convertPositionTo("relative",{top:0,left:t-J.helperProportions.width}).left-J.margins.left
}if(G){D.position.left=J._convertPositionTo("relative",{top:0,left:E}).left-J.margins.left
}}I=(M||a||H||G);
if(B.snapMode!=="outer"){M=Math.abs(F-K)<=b;
a=Math.abs(C-L)<=b;
H=Math.abs(t-i)<=b;
G=Math.abs(E-l)<=b;
if(M){D.position.top=J._convertPositionTo("relative",{top:F,left:0}).top-J.margins.top
}if(a){D.position.top=J._convertPositionTo("relative",{top:C-J.helperProportions.height,left:0}).top-J.margins.top
}if(H){D.position.left=J._convertPositionTo("relative",{top:0,left:t}).left-J.margins.left
}if(G){D.position.left=J._convertPositionTo("relative",{top:0,left:E-J.helperProportions.width}).left-J.margins.left
}}if(!J.snapElements[o].snapping&&(M||a||H||G||I)){(J.options.snap.snap&&J.options.snap.snap.call(J.element,r,d.extend(J._uiHash(),{snapItem:J.snapElements[o].item})))
}J.snapElements[o].snapping=(M||a||H||G||I)
}}});
d.ui.plugin.add("draggable","stack",{start:function(){var f,a=this.data("ui-draggable").options,b=d.makeArray(d(a.stack)).sort(function(e,h){return(parseInt(d(e).css("zIndex"),10)||0)-(parseInt(d(h).css("zIndex"),10)||0)
});
if(!b.length){return
}f=parseInt(d(b[0]).css("zIndex"),10)||0;
d(b).each(function(e){d(this).css("zIndex",f+e)
});
this.css("zIndex",(f+b.length))
}});
d.ui.plugin.add("draggable","zIndex",{start:function(g,b){var h=d(b.helper),a=d(this).data("ui-draggable").options;
if(h.css("zIndex")){a._zIndex=h.css("zIndex")
}h.css("zIndex",a.zIndex)
},stop:function(f,b){var a=d(this).data("ui-draggable").options;
if(a._zIndex){d(b.helper).css("zIndex",a._zIndex)
}}})
})(jQuery);
(function(d,f){function e(b,c,a){return(b>c)&&(b<(c+a))
}d.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var a=this.options,b=a.accept;
this.isover=false;
this.isout=true;
this.accept=d.isFunction(b)?b:function(c){return c.is(b)
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];
d.ui.ddmanager.droppables[a.scope].push(this);
(a.addClasses&&this.element.addClass("ui-droppable"))
},_destroy:function(){var a=0,b=d.ui.ddmanager.droppables[this.options.scope];
for(;
a<b.length;
a++){if(b[a]===this){b.splice(a,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(b,a){if(b==="accept"){this.accept=d.isFunction(a)?a:function(c){return c.is(a)
}
}d.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(a){var b=d.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}if(b){this._trigger("activate",a,this.ui(b))
}},_deactivate:function(a){var b=d.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(b){this._trigger("deactivate",a,this.ui(b))
}},_over:function(a){var b=d.ui.ddmanager.current;
if(!b||(b.currentItem||b.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",a,this.ui(b))
}},_out:function(a){var b=d.ui.ddmanager.current;
if(!b||(b.currentItem||b.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",a,this.ui(b))
}},_drop:function(c,b){var h=b||d.ui.ddmanager.current,a=false;
if(!h||(h.currentItem||h.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var g=d.data(this,"ui-droppable");
if(g.options.greedy&&!g.options.disabled&&g.options.scope===h.options.scope&&g.accept.call(g.element[0],(h.currentItem||h.element))&&d.ui.intersect(h,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){a=true;
return false
}});
if(a){return false
}if(this.accept.call(this.element[0],(h.currentItem||h.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",c,this.ui(h));
return this.element
}return false
},ui:function(a){return{draggable:(a.currentItem||a.element),helper:a.helper,position:a.position,offset:a.positionAbs}
}});
d.ui.intersect=function(a,t,c){if(!t.offset){return false
}var v,u,x=(a.positionAbs||a.position.absolute).left,y=x+a.helperProportions.width,l=(a.positionAbs||a.position.absolute).top,r=l+a.helperProportions.height,w=t.offset.left,z=w+t.proportions.width,b=t.offset.top,s=b+t.proportions.height;
switch(c){case"fit":return(w<=x&&y<=z&&b<=l&&r<=s);
case"intersect":return(w<x+(a.helperProportions.width/2)&&y-(a.helperProportions.width/2)<z&&b<l+(a.helperProportions.height/2)&&r-(a.helperProportions.height/2)<s);
case"pointer":v=((a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left);
u=((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top);
return e(u,b,t.proportions.height)&&e(v,w,t.proportions.width);
case"touch":return((l>=b&&l<=s)||(r>=b&&r<=s)||(l<b&&r>s))&&((x>=w&&x<=z)||(y>=w&&y<=z)||(x<w&&y>z));
default:return false
}};
d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(i,b){var j,m,n=d.ui.ddmanager.droppables[i.options.scope]||[],c=b?b.type:null,a=(i.currentItem||i.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(j=0;
j<n.length;
j++){if(n[j].options.disabled||(i&&!n[j].accept.call(n[j].element[0],(i.currentItem||i.element)))){continue
}for(m=0;
m<a.length;
m++){if(a[m]===n[j].element[0]){n[j].proportions.height=0;
continue droppablesLoop
}}n[j].visible=n[j].element.css("display")!=="none";
if(!n[j].visible){continue
}if(c==="mousedown"){n[j]._activate.call(n[j],b)
}n[j].offset=n[j].element.offset();
n[j].proportions={width:n[j].element[0].offsetWidth,height:n[j].element[0].offsetHeight}
}},drop:function(c,b){var a=false;
d.each((d.ui.ddmanager.droppables[c.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&d.ui.intersect(c,this,this.options.tolerance)){a=this._drop.call(this,b)||a
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,b)
}});
return a
},dragStart:function(b,a){b.element.parentsUntil("body").bind("scroll.droppable",function(){if(!b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}})
},drag:function(b,a){if(b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}d.each(d.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var k,m,n,l=d.ui.intersect(b,this,this.options.tolerance),c=!l&&this.isover?"isout":(l&&!this.isover?"isover":null);
if(!c){return
}if(this.options.greedy){m=this.options.scope;
n=this.element.parents(":data(ui-droppable)").filter(function(){return d.data(this,"ui-droppable").options.scope===m
});
if(n.length){k=d.data(n[0],"ui-droppable");
k.greedyChild=(c==="isover")
}}if(k&&c==="isover"){k.isover=false;
k.isout=true;
k._out.call(k,a)
}this[c]=true;
this[c==="isout"?"isover":"isout"]=false;
this[c==="isover"?"_over":"_out"].call(this,a);
if(k&&c==="isout"){k.isout=false;
k.isover=true;
k._over.call(k,a)
}})
},dragStop:function(b,a){b.element.parentsUntil("body").unbind("scroll.droppable");
if(!b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}}}
})(jQuery);
(function(h,g){function e(a){return parseInt(a,10)||0
}function f(a){return !isNaN(parseInt(a,10))
}h.widget("ui.resizable",h.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var a,m,c,i,n,d=this,b=this.options;
this.element.addClass("ui-resizable");
h.extend(this,{_aspectRatio:!!(b.aspectRatio),aspectRatio:b.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:b.helper||b.ghost||b.animate?b.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(h("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=b.handles||(!h(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}a=this.handles.split(",");
this.handles={};
for(m=0;
m<a.length;
m++){c=h.trim(a[m]);
n="ui-resizable-"+c;
i=h("<div class='ui-resizable-handle "+n+"'></div>");
i.css({zIndex:b.zIndex});
if("se"===c){i.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[c]=".ui-resizable-"+c;
this.element.append(i)
}}this._renderAxis=function(k){var s,r,j,l;
k=k||this.element;
for(s in this.handles){if(this.handles[s].constructor===String){this.handles[s]=h(this.handles[s],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){r=h(this.handles[s],this.element);
l=/sw|ne|nw|se|n|s/.test(s)?r.outerHeight():r.outerWidth();
j=["padding",/ne|nw|n/.test(s)?"Top":/se|sw|s/.test(s)?"Bottom":/^e$/.test(s)?"Right":"Left"].join("");
k.css(j,l);
this._proportionallyResize()
}if(!h(this.handles[s]).length){continue
}}};
this._renderAxis(this.element);
this._handles=h(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!d.resizing){if(this.className){i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}d.axis=i&&i[1]?i[1]:"se"
}});
if(b.autoHide){this._handles.hide();
h(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(b.disabled){return
}h(this).removeClass("ui-resizable-autohide");
d._handles.show()
}).mouseleave(function(){if(b.disabled){return
}if(!d.resizing){h(this).addClass("ui-resizable-autohide");
d._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var a,b=function(c){h(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){b(this.element);
a=this.element;
this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")}).insertAfter(a);
a.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
b(this.originalElement);
return this
},_mouseCapture:function(b){var c,a,d=false;
for(c in this.handles){a=h(this.handles[c])[0];
if(a===b.target||h.contains(a,b.target)){d=true
}}return !this.options.disabled&&d
},_mouseStart:function(l){var a,d,b,c=this.options,m=this.element.position(),n=this.element;
this.resizing=true;
if((/absolute/).test(n.css("position"))){n.css({position:"absolute",top:n.css("top"),left:n.css("left")})
}else{if(n.is(".ui-draggable")){n.css({position:"absolute",top:m.top,left:m.left})
}}this._renderProxy();
a=e(this.helper.css("left"));
d=e(this.helper.css("top"));
if(c.containment){a+=h(c.containment).scrollLeft()||0;
d+=h(c.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:a,top:d};
this.size=this._helper?{width:n.outerWidth(),height:n.outerHeight()}:{width:n.width(),height:n.height()};
this.originalSize=this._helper?{width:n.outerWidth(),height:n.outerHeight()}:{width:n.width(),height:n.height()};
this.originalPosition={left:a,top:d};
this.sizeDiff={width:n.outerWidth()-n.width(),height:n.outerHeight()-n.height()};
this.originalMousePosition={left:l.pageX,top:l.pageY};
this.aspectRatio=(typeof c.aspectRatio==="number")?c.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
b=h(".ui-resizable-"+this.axis).css("cursor");
h("body").css("cursor",b==="auto"?this.axis+"-resize":b);
n.addClass("ui-resizable-resizing");
this._propagate("start",l);
return true
},_mouseDrag:function(z){var t,x=this.helper,s={},v=this.originalMousePosition,r=this.axis,c=this.position.top,y=this.position.left,d=this.size.width,u=this.size.height,a=(z.pageX-v.left)||0,b=(z.pageY-v.top)||0,w=this._change[r];
if(!w){return false
}t=w.apply(this,[z,a,b]);
this._updateVirtualBoundaries(z.shiftKey);
if(this._aspectRatio||z.shiftKey){t=this._updateRatio(t,z)
}t=this._respectSize(t,z);
this._updateCache(t);
this._propagate("resize",z);
if(this.position.top!==c){s.top=this.position.top+"px"
}if(this.position.left!==y){s.left=this.position.left+"px"
}if(this.size.width!==d){s.width=this.size.width+"px"
}if(this.size.height!==u){s.height=this.size.height+"px"
}x.css(s);
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!h.isEmptyObject(s)){this._trigger("resize",z,this.ui())
}return false
},_mouseStop:function(q){this.resizing=false;
var r,t,s,d,a,o,b,p=this.options,c=this;
if(this._helper){r=this._proportionallyResizeElements;
t=r.length&&(/textarea/i).test(r[0].nodeName);
s=t&&h.ui.hasScroll(r[0],"left")?0:c.sizeDiff.height;
d=t?0:c.sizeDiff.width;
a={width:(c.helper.width()-d),height:(c.helper.height()-s)};
o=(parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left))||null;
b=(parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top))||null;
if(!p.animate){this.element.css(h.extend(a,{top:b,left:o}))
}c.helper.height(c.size.height);
c.helper.width(c.size.width);
if(this._helper&&!p.animate){this._proportionallyResize()
}}h("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",q);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(l){var c,d,m,a,n,b=this.options;
n={minWidth:f(b.minWidth)?b.minWidth:0,maxWidth:f(b.maxWidth)?b.maxWidth:Infinity,minHeight:f(b.minHeight)?b.minHeight:0,maxHeight:f(b.maxHeight)?b.maxHeight:Infinity};
if(this._aspectRatio||l){c=n.minHeight*this.aspectRatio;
m=n.minWidth/this.aspectRatio;
d=n.maxHeight*this.aspectRatio;
a=n.maxWidth/this.aspectRatio;
if(c>n.minWidth){n.minWidth=c
}if(m>n.minHeight){n.minHeight=m
}if(d<n.maxWidth){n.maxWidth=d
}if(a<n.maxHeight){n.maxHeight=a
}}this._vBoundaries=n
},_updateCache:function(a){this.offset=this.helper.offset();
if(f(a.left)){this.position.left=a.left
}if(f(a.top)){this.position.top=a.top
}if(f(a.height)){this.size.height=a.height
}if(f(a.width)){this.size.width=a.width
}},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;
if(f(b.height)){b.width=(b.height*this.aspectRatio)
}else{if(f(b.width)){b.height=(b.width/this.aspectRatio)
}}if(d==="sw"){b.left=a.left+(c.width-b.width);
b.top=null
}if(d==="nw"){b.top=a.top+(c.height-b.height);
b.left=a.left+(c.width-b.width)
}return b
},_respectSize:function(q){var t=this._vBoundaries,c=this.axis,a=f(q.width)&&t.maxWidth&&(t.maxWidth<q.width),o=f(q.height)&&t.maxHeight&&(t.maxHeight<q.height),s=f(q.width)&&t.minWidth&&(t.minWidth>q.width),b=f(q.height)&&t.minHeight&&(t.minHeight>q.height),u=this.originalPosition.left+this.originalSize.width,d=this.position.top+this.size.height,r=/sw|nw|w/.test(c),v=/nw|ne|n/.test(c);
if(s){q.width=t.minWidth
}if(b){q.height=t.minHeight
}if(a){q.width=t.maxWidth
}if(o){q.height=t.maxHeight
}if(s&&r){q.left=u-t.minWidth
}if(a&&r){q.left=u-t.maxWidth
}if(b&&v){q.top=d-t.minHeight
}if(o&&v){q.top=d-t.maxHeight
}if(!q.width&&!q.height&&!q.left&&q.top){q.top=null
}else{if(!q.width&&!q.height&&!q.top&&q.left){q.left=null
}}return q
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var c,i,a,j,b,d=this.helper||this.element;
for(c=0;
c<this._proportionallyResizeElements.length;
c++){b=this._proportionallyResizeElements[c];
if(!this.borderDif){this.borderDif=[];
a=[b.css("borderTopWidth"),b.css("borderRightWidth"),b.css("borderBottomWidth"),b.css("borderLeftWidth")];
j=[b.css("paddingTop"),b.css("paddingRight"),b.css("paddingBottom"),b.css("paddingLeft")];
for(i=0;
i<a.length;
i++){this.borderDif[i]=(parseInt(a[i],10)||0)+(parseInt(j[i],10)||0)
}}b.css({height:(d.height()-this.borderDif[0]-this.borderDif[2])||0,width:(d.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var b=this.element,a=this.options;
this.elementOffset=b.offset();
if(this._helper){this.helper=this.helper||h("<div style='overflow:hidden;'></div>");
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++a.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(a,b){return{width:this.originalSize.width+b}
},w:function(b,d){var c=this.originalSize,a=this.originalPosition;
return{left:a.left+d,width:c.width-d}
},n:function(b,d,j){var c=this.originalSize,a=this.originalPosition;
return{top:a.top+j,height:c.height-j}
},s:function(a,b,c){return{height:this.originalSize.height+c}
},se:function(a,b,c){return h.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[a,b,c]))
},sw:function(a,b,c){return h.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[a,b,c]))
},ne:function(a,b,c){return h.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[a,b,c]))
},nw:function(a,b,c){return h.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[a,b,c]))
}},_propagate:function(a,b){h.ui.plugin.call(this,a,[b,this.ui()]);
(a!=="resize"&&this._trigger(a,b,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
h.ui.plugin.add("resizable","animate",{stop:function(q){var b=h(this).data("ui-resizable"),o=b.options,r=b._proportionallyResizeElements,t=r.length&&(/textarea/i).test(r[0].nodeName),s=t&&h.ui.hasScroll(r[0],"left")?0:b.sizeDiff.height,c=t?0:b.sizeDiff.width,p={width:(b.size.width-c),height:(b.size.height-s)},d=(parseInt(b.element.css("left"),10)+(b.position.left-b.originalPosition.left))||null,a=(parseInt(b.element.css("top"),10)+(b.position.top-b.originalPosition.top))||null;
b.element.animate(h.extend(p,a&&d?{top:a,left:d}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var i={width:parseInt(b.element.css("width"),10),height:parseInt(b.element.css("height"),10),top:parseInt(b.element.css("top"),10),left:parseInt(b.element.css("left"),10)};
if(r&&r.length){h(r[0]).css({width:i.width,height:i.height})
}b._updateCache(i);
b._propagate("resize",q)
}})
}});
h.ui.plugin.add("resizable","containment",{start:function(){var d,v,b,x,o,u,a,c=h(this).data("ui-resizable"),p=c.options,s=c.element,w=p.containment,t=(w instanceof h)?w.get(0):(/parent/.test(w))?s.parent().get(0):w;
if(!t){return
}c.containerElement=h(t);
if(/document/.test(w)||w===document){c.containerOffset={left:0,top:0};
c.containerPosition={left:0,top:0};
c.parentData={element:h(document),left:0,top:0,width:h(document).width(),height:h(document).height()||document.body.parentNode.scrollHeight}
}else{d=h(t);
v=[];
h(["Top","Right","Left","Bottom"]).each(function(i,j){v[i]=e(d.css("padding"+j))
});
c.containerOffset=d.offset();
c.containerPosition=d.position();
c.containerSize={height:(d.innerHeight()-v[3]),width:(d.innerWidth()-v[1])};
b=c.containerOffset;
x=c.containerSize.height;
o=c.containerSize.width;
u=(h.ui.hasScroll(t,"left")?t.scrollWidth:o);
a=(h.ui.hasScroll(t)?t.scrollHeight:x);
c.parentData={element:t,left:b.left,top:b.top,width:u,height:a}
}},resize:function(w){var r,a,s,t,o=h(this).data("ui-resizable"),u=o.options,c=o.containerOffset,d=o.position,b=o._aspectRatio||w.shiftKey,x={top:0,left:0},v=o.containerElement;
if(v[0]!==document&&(/static/).test(v.css("position"))){x=c
}if(d.left<(o._helper?c.left:0)){o.size.width=o.size.width+(o._helper?(o.position.left-c.left):(o.position.left-x.left));
if(b){o.size.height=o.size.width/o.aspectRatio
}o.position.left=u.helper?c.left:0
}if(d.top<(o._helper?c.top:0)){o.size.height=o.size.height+(o._helper?(o.position.top-c.top):o.position.top);
if(b){o.size.width=o.size.height*o.aspectRatio
}o.position.top=o._helper?c.top:0
}o.offset.left=o.parentData.left+o.position.left;
o.offset.top=o.parentData.top+o.position.top;
r=Math.abs((o._helper?o.offset.left-x.left:(o.offset.left-x.left))+o.sizeDiff.width);
a=Math.abs((o._helper?o.offset.top-x.top:(o.offset.top-c.top))+o.sizeDiff.height);
s=o.containerElement.get(0)===o.element.parent().get(0);
t=/relative|absolute/.test(o.containerElement.css("position"));
if(s&&t){r-=o.parentData.left
}if(r+o.size.width>=o.parentData.width){o.size.width=o.parentData.width-r;
if(b){o.size.height=o.size.width/o.aspectRatio
}}if(a+o.size.height>=o.parentData.height){o.size.height=o.parentData.height-a;
if(b){o.size.width=o.size.height*o.aspectRatio
}}},stop:function(){var d=h(this).data("ui-resizable"),r=d.options,c=d.containerOffset,s=d.containerPosition,q=d.containerElement,p=h(d.helper),a=p.offset(),b=p.outerWidth()-d.sizeDiff.width,o=p.outerHeight()-d.sizeDiff.height;
if(d._helper&&!r.animate&&(/relative/).test(q.css("position"))){h(this).css({left:a.left-s.left-c.left,width:b,height:o})
}if(d._helper&&!r.animate&&(/static/).test(q.css("position"))){h(this).css({left:a.left-s.left-c.left,width:b,height:o})
}}});
h.ui.plugin.add("resizable","alsoResize",{start:function(){var c=h(this).data("ui-resizable"),a=c.options,b=function(d){h(d).each(function(){var j=h(this);
j.data("ui-resizable-alsoresize",{width:parseInt(j.width(),10),height:parseInt(j.height(),10),left:parseInt(j.css("left"),10),top:parseInt(j.css("top"),10)})
})
};
if(typeof(a.alsoResize)==="object"&&!a.alsoResize.parentNode){if(a.alsoResize.length){a.alsoResize=a.alsoResize[0];
b(a.alsoResize)
}else{h.each(a.alsoResize,function(d){b(d)
})
}}else{b(a.alsoResize)
}},resize:function(n,d){var o=h(this).data("ui-resizable"),c=o.options,m=o.originalSize,a=o.originalPosition,b={height:(o.size.height-m.height)||0,width:(o.size.width-m.width)||0,top:(o.position.top-a.top)||0,left:(o.position.left-a.left)||0},p=function(i,j){h(i).each(function(){var l=h(this),k=h(this).data("ui-resizable-alsoresize"),s={},t=j&&j.length?j:l.parents(d.originalElement[0]).length?["width","height"]:["width","height","top","left"];
h.each(t,function(v,q){var r=(k[q]||0)+(b[q]||0);
if(r&&r>=0){s[q]=r||null
}});
l.css(s)
})
};
if(typeof(c.alsoResize)==="object"&&!c.alsoResize.nodeType){h.each(c.alsoResize,function(i,j){p(i,j)
})
}else{p(c.alsoResize)
}},stop:function(){h(this).removeData("resizable-alsoresize")
}});
h.ui.plugin.add("resizable","ghost",{start:function(){var b=h(this).data("ui-resizable"),a=b.options,c=b.size;
b.ghost=b.originalElement.clone();
b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost==="string"?a.ghost:"");
b.ghost.appendTo(b.helper)
},resize:function(){var a=h(this).data("ui-resizable");
if(a.ghost){a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})
}},stop:function(){var a=h(this).data("ui-resizable");
if(a.ghost&&a.helper){a.helper.get(0).removeChild(a.ghost.get(0))
}}});
h.ui.plugin.add("resizable","grid",{resize:function(){var a=h(this).data("ui-resizable"),z=a.options,H=a.size,x=a.originalSize,d=a.originalPosition,G=a.axis,C=typeof z.grid==="number"?[z.grid,z.grid]:z.grid,c=(C[0]||1),o=(C[1]||1),A=Math.round((H.width-x.width)/c)*c,B=Math.round((H.height-x.height)/o)*o,w=x.width+A,D=x.height+B,y=z.maxWidth&&(z.maxWidth<w),F=z.maxHeight&&(z.maxHeight<D),b=z.minWidth&&(z.minWidth>w),E=z.minHeight&&(z.minHeight>D);
z.grid=C;
if(b){w=w+c
}if(E){D=D+o
}if(y){w=w-c
}if(F){D=D-o
}if(/^(se|s|e)$/.test(G)){a.size.width=w;
a.size.height=D
}else{if(/^(ne)$/.test(G)){a.size.width=w;
a.size.height=D;
a.position.top=d.top-B
}else{if(/^(sw)$/.test(G)){a.size.width=w;
a.size.height=D;
a.position.left=d.left-A
}else{a.size.width=w;
a.size.height=D;
a.position.top=d.top-B;
a.position.left=d.left-A
}}}}})
})(jQuery);
(function(d,c){d.widget("ui.selectable",d.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var a,b=this;
this.element.addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){a=d(b.options.filter,b.element[0]);
a.addClass("ui-selectee");
a.each(function(){var h=d(this),g=h.offset();
d.data(this,"selectable-item",{element:this,$element:h,left:g.left,top:g.top,right:g.left+h.outerWidth(),bottom:g.top+h.outerHeight(),startselected:false,selected:h.hasClass("ui-selected"),selecting:h.hasClass("ui-selecting"),unselecting:h.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=a.addClass("ui-selectee");
this._mouseInit();
this.helper=d("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");
this._mouseDestroy()
},_mouseStart:function(a){var b=this,f=this.options;
this.opos=[a.pageX,a.pageY];
if(this.options.disabled){return
}this.selectees=d(f.filter,this.element[0]);
this._trigger("start",a);
d(f.appendTo).append(this.helper);
this.helper.css({left:a.pageX,top:a.pageY,width:0,height:0});
if(f.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var e=d.data(this,"selectable-item");
e.startselected=true;
if(!a.metaKey&&!a.ctrlKey){e.$element.removeClass("ui-selected");
e.selected=false;
e.$element.addClass("ui-unselecting");
e.unselecting=true;
b._trigger("unselecting",a,{unselecting:e.element})
}});
d(a.target).parents().addBack().each(function(){var h,e=d.data(this,"selectable-item");
if(e){h=(!a.metaKey&&!a.ctrlKey)||!e.$element.hasClass("ui-selected");
e.$element.removeClass(h?"ui-unselecting":"ui-selected").addClass(h?"ui-selecting":"ui-unselecting");
e.unselecting=!h;
e.selecting=h;
e.selected=h;
if(h){b._trigger("selecting",a,{selecting:e.element})
}else{b._trigger("unselecting",a,{unselecting:e.element})
}return false
}})
},_mouseDrag:function(a){this.dragged=true;
if(this.options.disabled){return
}var l,b=this,n=this.options,o=this.opos[0],k=this.opos[1],p=a.pageX,m=a.pageY;
if(o>p){l=p;
p=o;
o=l
}if(k>m){l=m;
m=k;
k=l
}this.helper.css({left:o,top:k,width:p-o,height:m-k});
this.selectees.each(function(){var f=d.data(this,"selectable-item"),e=false;
if(!f||f.element===b.element[0]){return
}if(n.tolerance==="touch"){e=(!(f.left>p||f.right<o||f.top>m||f.bottom<k))
}else{if(n.tolerance==="fit"){e=(f.left>o&&f.right<p&&f.top>k&&f.bottom<m)
}}if(e){if(f.selected){f.$element.removeClass("ui-selected");
f.selected=false
}if(f.unselecting){f.$element.removeClass("ui-unselecting");
f.unselecting=false
}if(!f.selecting){f.$element.addClass("ui-selecting");
f.selecting=true;
b._trigger("selecting",a,{selecting:f.element})
}}else{if(f.selecting){if((a.metaKey||a.ctrlKey)&&f.startselected){f.$element.removeClass("ui-selecting");
f.selecting=false;
f.$element.addClass("ui-selected");
f.selected=true
}else{f.$element.removeClass("ui-selecting");
f.selecting=false;
if(f.startselected){f.$element.addClass("ui-unselecting");
f.unselecting=true
}b._trigger("unselecting",a,{unselecting:f.element})
}}if(f.selected){if(!a.metaKey&&!a.ctrlKey&&!f.startselected){f.$element.removeClass("ui-selected");
f.selected=false;
f.$element.addClass("ui-unselecting");
f.unselecting=true;
b._trigger("unselecting",a,{unselecting:f.element})
}}}});
return false
},_mouseStop:function(a){var b=this;
this.dragged=false;
d(".ui-unselecting",this.element[0]).each(function(){var f=d.data(this,"selectable-item");
f.$element.removeClass("ui-unselecting");
f.unselecting=false;
f.startselected=false;
b._trigger("unselected",a,{unselected:f.element})
});
d(".ui-selecting",this.element[0]).each(function(){var f=d.data(this,"selectable-item");
f.$element.removeClass("ui-selecting").addClass("ui-selected");
f.selecting=false;
f.selected=true;
f.startselected=true;
b._trigger("selected",a,{selected:f.element})
});
this._trigger("stop",a);
this.helper.remove();
return false
}})
})(jQuery);
(function(e,g){function f(b,c,a){return(b>c)&&(b<(c+a))
}function h(a){return(/left|right/).test(a.css("float"))||(/inline|table-cell/).test(a.css("display"))
}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var a=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?a.axis==="x"||h(this.items[0].item):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var a=this.items.length-1;
a>=0;
a--){this.items[a].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(b,a){if(b==="disabled"){this.options[b]=a;
this.widget().toggleClass("ui-sortable-disabled",!!a)
}else{e.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(c,b){var j=null,a=false,d=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(c);
e(c.target).parents().each(function(){if(e.data(this,d.widgetName+"-item")===d){j=e(this);
return false
}});
if(e.data(c.target,d.widgetName+"-item")===d){j=e(c.target)
}if(!j){return false
}if(this.options.handle&&!b){e(this.options.handle,j).find("*").addBack().each(function(){if(this===c.target){a=true
}});
if(!a){return false
}}this.currentItem=j;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(c,b,i){var d,l,a=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(c);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
e.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(c);
this.originalPageX=c.pageX;
this.originalPageY=c.pageY;
(a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(a.containment){this._setContainment()
}if(a.cursor&&a.cursor!=="auto"){l=this.document.find("body");
this.storedCursor=l.css("cursor");
l.css("cursor",a.cursor);
this.storedStylesheet=e("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(l)
}if(a.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",a.opacity)
}if(a.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",a.zIndex)
}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",c,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!i){for(d=this.containers.length-1;
d>=0;
d--){this.containers[d]._trigger("activate",c,this._uiHash(this))
}}if(e.ui.ddmanager){e.ui.ddmanager.current=this
}if(e.ui.ddmanager&&!a.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,c)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(c);
return true
},_mouseDrag:function(c){var i,d,m,a,b=this.options,n=false;
this.position=this._generatePosition(c);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-c.pageY<b.scrollSensitivity){this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop+b.scrollSpeed
}else{if(c.pageY-this.overflowOffset.top<b.scrollSensitivity){this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop-b.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-c.pageX<b.scrollSensitivity){this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft+b.scrollSpeed
}else{if(c.pageX-this.overflowOffset.left<b.scrollSensitivity){this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft-b.scrollSpeed
}}}else{if(c.pageY-e(document).scrollTop()<b.scrollSensitivity){n=e(document).scrollTop(e(document).scrollTop()-b.scrollSpeed)
}else{if(e(window).height()-(c.pageY-e(document).scrollTop())<b.scrollSensitivity){n=e(document).scrollTop(e(document).scrollTop()+b.scrollSpeed)
}}if(c.pageX-e(document).scrollLeft()<b.scrollSensitivity){n=e(document).scrollLeft(e(document).scrollLeft()-b.scrollSpeed)
}else{if(e(window).width()-(c.pageX-e(document).scrollLeft())<b.scrollSensitivity){n=e(document).scrollLeft(e(document).scrollLeft()+b.scrollSpeed)
}}}if(n!==false&&e.ui.ddmanager&&!b.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,c)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(i=this.items.length-1;
i>=0;
i--){d=this.items[i];
m=d.item[0];
a=this._intersectsWithPointer(d);
if(!a){continue
}if(d.instance!==this.currentContainer){continue
}if(m!==this.currentItem[0]&&this.placeholder[a===1?"next":"prev"]()[0]!==m&&!e.contains(this.placeholder[0],m)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],m):true)){this.direction=a===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(d)){this._rearrange(c,d)
}else{break
}this._trigger("change",c,this._uiHash());
break
}}this._contactContainers(c);
if(e.ui.ddmanager){e.ui.ddmanager.drag(this,c)
}this._trigger("sort",c,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(d,b){if(!d){return
}if(e.ui.ddmanager&&!this.options.dropBehaviour){e.ui.ddmanager.drop(this,d)
}if(this.options.revert){var k=this,a=this.placeholder.offset(),l=this.options.axis,c={};
if(!l||l==="x"){c.left=a.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)
}if(!l||l==="y"){c.top=a.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)
}this.reverting=true;
e(this.helper).animate(c,parseInt(this.options.revert,10)||500,function(){k._clear(d)
})
}else{this._clear(d,b)
}return false
},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var a=this.containers.length-1;
a>=0;
a--){this.containers[a]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[a].containerCache.over){this.containers[a]._trigger("out",null,this._uiHash(this));
this.containers[a].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}e.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){e(this.domPosition.prev).after(this.currentItem)
}else{e(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(a){var c=this._getItemsAsjQuery(a&&a.connected),b=[];
a=a||{};
e(c).each(function(){var d=(e(a.item||this).attr(a.attribute||"id")||"").match(a.expression||(/(.+)[\-=_](.+)/));
if(d){b.push((a.key||d[1]+"[]")+"="+(a.key&&a.expression?d[1]:d[2]))
}});
if(!b.length&&a.key){b.push(a.key+"=")
}return b.join("&")
},toArray:function(a){var c=this._getItemsAsjQuery(a&&a.connected),b=[];
a=a||{};
c.each(function(){b.push(e(a.item||this).attr(a.attribute||"id")||"")
});
return b
},_intersectsWith:function(a){var x=this.positionAbs.left,y=x+this.helperProportions.width,c=this.positionAbs.top,d=c+this.helperProportions.height,w=a.left,z=w+a.width,B=a.top,l=B+a.height,A=this.offset.click.top,r=this.offset.click.left,t=(this.options.axis==="x")||((c+A)>B&&(c+A)<l),b=(this.options.axis==="y")||((x+r)>w&&(x+r)<z),v=t&&b;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"])){return v
}else{return(w<x+(this.helperProportions.width/2)&&y-(this.helperProportions.width/2)<z&&B<c+(this.helperProportions.height/2)&&d-(this.helperProportions.height/2)<l)
}},_intersectsWithPointer:function(d){var c=(this.options.axis==="x")||f(this.positionAbs.top+this.offset.click.top,d.top,d.height),k=(this.options.axis==="y")||f(this.positionAbs.left+this.offset.click.left,d.left,d.width),a=c&&k,l=this._getDragVerticalDirection(),b=this._getDragHorizontalDirection();
if(!a){return false
}return this.floating?(((b&&b==="right")||l==="down")?2:1):(l&&(l==="down"?2:1))
},_intersectsWithSides:function(b){var d=f(this.positionAbs.top+this.offset.click.top,b.top+(b.height/2),b.height),c=f(this.positionAbs.left+this.offset.click.left,b.left+(b.width/2),b.width),j=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();
if(this.floating&&a){return((a==="right"&&c)||(a==="left"&&!c))
}else{return j&&((j==="down"&&d)||(j==="up"&&!d))
}},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;
return a!==0&&(a>0?"down":"up")
},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;
return a!==0&&(a>0?"right":"left")
},refresh:function(a){this._refreshItems(a);
this.refreshPositions();
return this
},_connectWith:function(){var a=this.options;
return a.connectWith.constructor===String?[a.connectWith]:a.connectWith
},_getItemsAsjQuery:function(b){var d,i,p,a,o=[],j=[],c=this._connectWith();
if(c&&b){for(d=c.length-1;
d>=0;
d--){p=e(c[d]);
for(i=p.length-1;
i>=0;
i--){a=e.data(p[i],this.widgetFullName);
if(a&&a!==this&&!a.options.disabled){j.push([e.isFunction(a.options.items)?a.options.items.call(a.element):e(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a])
}}}}j.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(d=j.length-1;
d>=0;
d--){j[d][0].each(function(){o.push(this)
})
}return e(o)
},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=e.grep(this.items,function(b){for(var c=0;
c<a.length;
c++){if(a[c]===b.item[0]){return false
}}return true
})
},_refreshItems:function(x){this.items=[];
this.containers=[this];
var t,v,c,s,d,w,a,b,j=this.items,u=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],x,{item:this.currentItem}):e(this.options.items,this.element),this]],i=this._connectWith();
if(i&&this.ready){for(t=i.length-1;
t>=0;
t--){c=e(i[t]);
for(v=c.length-1;
v>=0;
v--){s=e.data(c[v],this.widgetFullName);
if(s&&s!==this&&!s.options.disabled){u.push([e.isFunction(s.options.items)?s.options.items.call(s.element[0],x,{item:this.currentItem}):e(s.options.items,s.element),s]);
this.containers.push(s)
}}}}for(t=u.length-1;
t>=0;
t--){d=u[t][1];
w=u[t][0];
for(v=0,b=w.length;
v<b;
v++){a=e(w[v]);
a.data(this.widgetName+"-item",d);
j.push({item:a,instance:d,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(i){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var c,b,d,a;
for(c=this.items.length-1;
c>=0;
c--){b=this.items[c];
if(b.instance!==this.currentContainer&&this.currentContainer&&b.item[0]!==this.currentItem[0]){continue
}d=this.options.toleranceElement?e(this.options.toleranceElement,b.item):b.item;
if(!i){b.width=d.outerWidth();
b.height=d.outerHeight()
}a=d.offset();
b.left=a.left;
b.top=a.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(c=this.containers.length-1;
c>=0;
c--){a=this.containers[c].element.offset();
this.containers[c].containerCache.left=a.left;
this.containers[c].containerCache.top=a.top;
this.containers[c].containerCache.width=this.containers[c].element.outerWidth();
this.containers[c].containerCache.height=this.containers[c].element.outerHeight()
}}return this
},_createPlaceholder:function(b){b=b||this;
var c,a=b.options;
if(!a.placeholder||a.placeholder.constructor===String){c=a.placeholder;
a.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),j=e("<"+d+">",b.document[0]).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
if(d==="tr"){b.currentItem.children().each(function(){e("<td>&#160;</td>",b.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(j)
})
}else{if(d==="img"){j.attr("src",b.currentItem.attr("src"))
}}if(!c){j.css("visibility","hidden")
}return j
},update:function(j,d){if(c&&!a.forcePlaceholderSize){return
}if(!d.height()){d.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10))
}if(!d.width()){d.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))
}}}
}b.placeholder=e(a.placeholder.element.call(b.element,b.currentItem));
b.currentItem.after(b.placeholder);
a.placeholder.update(b,b.placeholder)
},_contactContainers:function(y){var t,v,c,j,i,a,x,z,u,d,w=null,b=null;
for(t=this.containers.length-1;
t>=0;
t--){if(e.contains(this.currentItem[0],this.containers[t].element[0])){continue
}if(this._intersectsWith(this.containers[t].containerCache)){if(w&&e.contains(this.containers[t].element[0],w.element[0])){continue
}w=this.containers[t];
b=t
}else{if(this.containers[t].containerCache.over){this.containers[t]._trigger("out",y,this._uiHash(this));
this.containers[t].containerCache.over=0
}}}if(!w){return
}if(this.containers.length===1){if(!this.containers[b].containerCache.over){this.containers[b]._trigger("over",y,this._uiHash(this));
this.containers[b].containerCache.over=1
}}else{c=10000;
j=null;
d=w.floating||h(this.currentItem);
i=d?"left":"top";
a=d?"width":"height";
x=this.positionAbs[i]+this.offset.click[i];
for(v=this.items.length-1;
v>=0;
v--){if(!e.contains(this.containers[b].element[0],this.items[v].item[0])){continue
}if(this.items[v].item[0]===this.currentItem[0]){continue
}if(d&&!f(this.positionAbs.top+this.offset.click.top,this.items[v].top,this.items[v].height)){continue
}z=this.items[v].item.offset()[i];
u=false;
if(Math.abs(z-x)>Math.abs(z+this.items[v][a]-x)){u=true;
z+=this.items[v][a]
}if(Math.abs(z-x)<c){c=Math.abs(z-x);
j=this.items[v];
this.direction=u?"up":"down"
}}if(!j&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[b]){return
}j?this._rearrange(y,j,null,true):this._rearrange(y,null,this.containers[b].element,true);
this._trigger("change",y,this._uiHash());
this.containers[b]._trigger("change",y,this._uiHash(this));
this.currentContainer=this.containers[b];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[b]._trigger("over",y,this._uiHash(this));
this.containers[b].containerCache.over=1
}},_createHelper:function(b){var a=this.options,c=e.isFunction(a.helper)?e(a.helper.apply(this.element[0],[b,this.currentItem])):(a.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!c.parents("body").length){e(a.appendTo!=="parent"?a.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])
}if(c[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!c[0].style.width||a.forceHelperSize){c.width(this.currentItem.width())
}if(!c[0].style.height||a.forceHelperSize){c.height(this.currentItem.height())
}return c
},_adjustOffsetFromHelper:function(a){if(typeof a==="string"){a=a.split(" ")
}if(e.isArray(a)){a={left:+a[0],top:+a[1]||0}
}if("left" in a){this.offset.click.left=a.left+this.margins.left
}if("right" in a){this.offset.click.left=this.helperProportions.width-a.right+this.margins.left
}if("top" in a){this.offset.click.top=a.top+this.margins.top
}if("bottom" in a){this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var a=this.currentItem.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var c,a,d,b=this.options;
if(b.containment==="parent"){b.containment=this.helper[0].parentNode
}if(b.containment==="document"||b.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(b.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(b.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(b.containment)){c=e(b.containment)[0];
a=e(b.containment).offset();
d=(e(c).css("overflow")!=="hidden");
this.containment=[a.left+(parseInt(e(c).css("borderLeftWidth"),10)||0)+(parseInt(e(c).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(e(c).css("borderTopWidth"),10)||0)+(parseInt(e(c).css("paddingTop"),10)||0)-this.margins.top,a.left+(d?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(e(c).css("borderLeftWidth"),10)||0)-(parseInt(e(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(d?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(e(c).css("borderTopWidth"),10)||0)-(parseInt(e(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(c,a){if(!a){a=this.position
}var d=c==="absolute"?1:-1,j=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,b=(/(html|body)/i).test(j[0].tagName);
return{top:(a.top+this.offset.relative.top*d+this.offset.parent.top*d-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(b?0:j.scrollTop()))*d)),left:(a.left+this.offset.relative.left*d+this.offset.parent.left*d-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():b?0:j.scrollLeft())*d))}
},_generatePosition:function(m){var c,d,b=this.options,n=m.pageX,o=m.pageY,p=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,a=(/(html|body)/i).test(p[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(m.pageX-this.offset.click.left<this.containment[0]){n=this.containment[0]+this.offset.click.left
}if(m.pageY-this.offset.click.top<this.containment[1]){o=this.containment[1]+this.offset.click.top
}if(m.pageX-this.offset.click.left>this.containment[2]){n=this.containment[2]+this.offset.click.left
}if(m.pageY-this.offset.click.top>this.containment[3]){o=this.containment[3]+this.offset.click.top
}}if(b.grid){c=this.originalPageY+Math.round((o-this.originalPageY)/b.grid[1])*b.grid[1];
o=this.containment?((c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3])?c:((c-this.offset.click.top>=this.containment[1])?c-b.grid[1]:c+b.grid[1])):c;
d=this.originalPageX+Math.round((n-this.originalPageX)/b.grid[0])*b.grid[0];
n=this.containment?((d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2])?d:((d-this.offset.click.left>=this.containment[0])?d-b.grid[0]:d+b.grid[0])):d
}}return{top:(o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(a?0:p.scrollTop())))),left:(n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:p.scrollLeft())))}
},_rearrange:function(a,b,d,c){d?d[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?b.item[0]:b.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var i=this.counter;
this._delay(function(){if(i===this.counter){this.refreshPositions(!c)
}})
},_clear:function(c,b){this.reverting=false;
var d,a=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(d in this._storedCSS){if(this._storedCSS[d]==="auto"||this._storedCSS[d]==="static"){this._storedCSS[d]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!b){a.push(function(j){this._trigger("receive",j,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!b){a.push(function(j){this._trigger("update",j,this._uiHash())
})
}if(this!==this.currentContainer){if(!b){a.push(function(j){this._trigger("remove",j,this._uiHash())
});
a.push((function(j){return function(i){j._trigger("receive",i,this._uiHash(this))
}
}).call(this,this.currentContainer));
a.push((function(j){return function(i){j._trigger("update",i,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}for(d=this.containers.length-1;
d>=0;
d--){if(!b){a.push((function(j){return function(i){j._trigger("deactivate",i,this._uiHash(this))
}
}).call(this,this.containers[d]))
}if(this.containers[d].containerCache.over){a.push((function(j){return function(i){j._trigger("out",i,this._uiHash(this))
}
}).call(this,this.containers[d]));
this.containers[d].containerCache.over=0
}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove()
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",c,this._uiHash());
for(d=0;
d<a.length;
d++){a[d].call(this,c)
}this._trigger("stop",c,this._uiHash())
}this.fromOutside=false;
return false
}if(!b){this._trigger("beforeStop",c,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!b){for(d=0;
d<a.length;
d++){a[d].call(this,c)
}this._trigger("stop",c,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(e.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(b){var a=b||this;
return{helper:a.helper,placeholder:a.placeholder||e([]),position:a.position,originalPosition:a.originalPosition,offset:a.positionAbs,item:a.currentItem,sender:b?b.element:null}
}})
})(jQuery);
(function(q,u){var l,r,v,o,n="ui-button ui-widget ui-state-default ui-corner-all",t="ui-state-hover ui-state-active ",p="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var a=q(this);
setTimeout(function(){a.find(":ui-button").button("refresh")
},1)
},s=function(a){var b=a.name,d=a.form,c=q([]);
if(b){b=b.replace(/'/g,"\\'");
if(d){c=q(d).find("[name='"+b+"']")
}else{c=q("[name='"+b+"']",a.ownerDocument).filter(function(){return !this.form
})
}}return c
};
q.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var d=this,a=this.options,c=this.type==="checkbox"||this.type==="radio",e=!c?"ui-state-active":"",b="ui-state-focus";
if(a.label===null){a.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(n).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(a.disabled){return
}if(this===l){q(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(a.disabled){return
}q(this).removeClass(e)
}).bind("click"+this.eventNamespace,function(f){if(a.disabled){f.preventDefault();
f.stopImmediatePropagation()
}});
this.element.bind("focus"+this.eventNamespace,function(){d.buttonElement.addClass(b)
}).bind("blur"+this.eventNamespace,function(){d.buttonElement.removeClass(b)
});
if(c){this.element.bind("change"+this.eventNamespace,function(){if(o){return
}d.refresh()
});
this.buttonElement.bind("mousedown"+this.eventNamespace,function(f){if(a.disabled){return
}o=false;
r=f.pageX;
v=f.pageY
}).bind("mouseup"+this.eventNamespace,function(f){if(a.disabled){return
}if(r!==f.pageX||v!==f.pageY){o=true
}})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(a.disabled||o){return false
}})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(a.disabled||o){return false
}q(this).addClass("ui-state-active");
d.buttonElement.attr("aria-pressed","true");
var f=d.element[0];
s(f).not(f).map(function(){return q(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(a.disabled){return false
}q(this).addClass("ui-state-active");
l=this;
d.document.one("mouseup",function(){l=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(a.disabled){return false
}q(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(f){if(a.disabled){return false
}if(f.keyCode===q.ui.keyCode.SPACE||f.keyCode===q.ui.keyCode.ENTER){q(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){q(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(f){if(f.keyCode===q.ui.keyCode.SPACE){q(this).click()
}})
}}}this._setOption("disabled",a.disabled);
this._resetButton()
},_determineButtonType:function(){var b,c,a;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){b=this.element.parents().last();
c="label[for='"+this.element.attr("id")+"']";
this.buttonElement=b.find(c);
if(!this.buttonElement.length){b=b.length?b.siblings():this.element.siblings();
this.buttonElement=b.filter(c);
if(!this.buttonElement.length){this.buttonElement=b.find(c)
}}this.element.addClass("ui-helper-hidden-accessible");
a=this.element.is(":checked");
if(a){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",a)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(n+" "+t+" "+p).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(b,a){this._super(b,a);
if(b==="disabled"){if(a){this.element.prop("disabled",true)
}else{this.element.prop("disabled",false)
}return
}this._resetButton()
},refresh:function(){var a=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(a!==this.options.disabled){this._setOption("disabled",a)
}if(this.type==="radio"){s(this.element[0]).each(function(){if(q(this).is(":checked")){q(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{q(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var c=this.buttonElement.removeClass(p),e=q("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(c.empty()).text(),a=this.options.icons,b=a.primary&&a.secondary,d=[];
if(a.primary||a.secondary){if(this.options.text){d.push("ui-button-text-icon"+(b?"s":(a.primary?"-primary":"-secondary")))
}if(a.primary){c.prepend("<span class='ui-button-icon-primary ui-icon "+a.primary+"'></span>")
}if(a.secondary){c.append("<span class='ui-button-icon-secondary ui-icon "+a.secondary+"'></span>")
}if(!this.options.text){d.push(b?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){c.attr("title",q.trim(e))
}}}else{d.push("ui-button-text-only")
}c.addClass(d.join(" "))
}});
q.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(b,a){if(b==="disabled"){this.buttons.button("option",b,a)
}this._super(b,a)
},refresh:function(){var a=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return q(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(a?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return q(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function(h,g){var f={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},e={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
h.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(a){var b=h(this).css(a).offset().top;
if(b<0){h(this).css("top",a.top-b)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
this.options.title=this.options.title||this.originalTitle;
this._createWrapper();
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&h.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&h.fn.resizable){this._makeResizable()
}this._isOpen=false
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var a=this.options.appendTo;
if(a&&(a.jquery||a.nodeType)){return h(a)
}return this.document.find(a||"body").eq(0)
},_destroy:function(){var a,b=this.originalPosition;
this._destroyOverlay();
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
this.uiDialog.stop(true,true).remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}a=b.parent.children().eq(b.index);
if(a.length&&a[0]!==this.element[0]){a.before(this.element)
}else{b.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:h.noop,enable:h.noop,close:function(a){var b=this;
if(!this._isOpen||this._trigger("beforeClose",a)===false){return
}this._isOpen=false;
this._destroyOverlay();
if(!this.opener.filter(":focusable").focus().length){h(this.document[0].activeElement).blur()
}this._hide(this.uiDialog,this.options.hide,function(){b._trigger("close",a)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(a,c){var b=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
if(b&&!c){this._trigger("focus",a)
}return b
},open:function(){var a=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=h(this.document[0].activeElement);
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
this._show(this.uiDialog,this.options.show,function(){a._focusTabbable();
a._trigger("focus")
});
this._trigger("open")
},_focusTabbable:function(){var a=this.element.find("[autofocus]");
if(!a.length){a=this.element.find(":tabbable")
}if(!a.length){a=this.uiDialogButtonPane.find(":tabbable")
}if(!a.length){a=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!a.length){a=this.uiDialog
}a.eq(0).focus()
},_keepFocus:function(b){function a(){var c=this.document[0].activeElement,d=this.uiDialog[0]===c||h.contains(this.uiDialog[0],c);
if(!d){this._focusTabbable()
}}b.preventDefault();
a.call(this);
this._delay(a)
},_createWrapper:function(){this.uiDialog=h("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===h.ui.keyCode.ESCAPE){b.preventDefault();
this.close(b);
return
}if(b.keyCode!==h.ui.keyCode.TAB){return
}var c=this.uiDialog.find(":tabbable"),a=c.filter(":first"),d=c.filter(":last");
if((b.target===d[0]||b.target===this.uiDialog[0])&&!b.shiftKey){a.focus(1);
b.preventDefault()
}else{if((b.target===a[0]||b.target===this.uiDialog[0])&&b.shiftKey){d.focus(1);
b.preventDefault()
}}},mousedown:function(a){if(this._moveToTop(a)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var a;
this.uiDialogTitlebar=h("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
this._on(this.uiDialogTitlebar,{mousedown:function(b){if(!h(b.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()
}}});
this.uiDialogTitlebarClose=h("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
this._on(this.uiDialogTitlebarClose,{click:function(b){b.preventDefault();
this.close(b)
}});
a=h("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
this._title(a);
this.uiDialog.attr({"aria-labelledby":a.attr("id")})
},_title:function(a){if(!this.options.title){a.html("&#160;")
}a.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=h("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
this.uiButtonSet=h("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
this._createButtons()
},_createButtons:function(){var a=this,b=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(h.isEmptyObject(b)||(h.isArray(b)&&!b.length)){this.uiDialog.removeClass("ui-dialog-buttons");
return
}h.each(b,function(l,k){var d,c;
k=h.isFunction(k)?{click:k,text:l}:k;
k=h.extend({type:"button"},k);
d=k.click;
k.click=function(){d.apply(a.element[0],arguments)
};
c={icons:k.icons,text:k.showText};
delete k.icons;
delete k.showText;
h("<button></button>",k).button(c).appendTo(a.uiButtonSet)
});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var a=this,b=this.options;
function c(d){return{position:d.position,offset:d.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(j,d){h(this).addClass("ui-dialog-dragging");
a._blockFrames();
a._trigger("dragStart",j,c(d))
},drag:function(j,d){a._trigger("drag",j,c(d))
},stop:function(j,d){b.position=[d.position.left-a.document.scrollLeft(),d.position.top-a.document.scrollTop()];
h(this).removeClass("ui-dialog-dragging");
a._unblockFrames();
a._trigger("dragStop",j,c(d))
}})
},_makeResizable:function(){var a=this,c=this.options,b=c.resizable,l=this.uiDialog.css("position"),d=typeof b==="string"?b:"n,e,s,w,se,sw,ne,nw";
function k(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:c.maxWidth,maxHeight:c.maxHeight,minWidth:c.minWidth,minHeight:this._minHeight(),handles:d,start:function(j,i){h(this).addClass("ui-dialog-resizing");
a._blockFrames();
a._trigger("resizeStart",j,k(i))
},resize:function(j,i){a._trigger("resize",j,k(i))
},stop:function(j,i){c.height=h(this).height();
c.width=h(this).width();
h(this).removeClass("ui-dialog-resizing");
a._unblockFrames();
a._trigger("resizeStop",j,k(i))
}}).css("position",l)
},_minHeight:function(){var a=this.options;
return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)
},_position:function(){var a=this.uiDialog.is(":visible");
if(!a){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!a){this.uiDialog.hide()
}},_setOptions:function(b){var a=this,c=false,d={};
h.each(b,function(l,k){a._setOption(l,k);
if(l in f){c=true
}if(l in e){d[l]=k
}});
if(c){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",d)
}},_setOption:function(c,b){var d,a,j=this.uiDialog;
if(c==="dialogClass"){j.removeClass(this.options.dialogClass).addClass(b)
}if(c==="disabled"){return
}this._super(c,b);
if(c==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(c==="buttons"){this._createButtons()
}if(c==="closeText"){this.uiDialogTitlebarClose.button({label:""+b})
}if(c==="draggable"){d=j.is(":data(ui-draggable)");
if(d&&!b){j.draggable("destroy")
}if(!d&&b){this._makeDraggable()
}}if(c==="position"){this._position()
}if(c==="resizable"){a=j.is(":data(ui-resizable)");
if(a&&!b){j.resizable("destroy")
}if(a&&typeof b==="string"){j.resizable("option","handles",b)
}if(!a&&b!==false){this._makeResizable()
}}if(c==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var d,b,a,c=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(c.minWidth>c.width){c.width=c.minWidth
}d=this.uiDialog.css({height:"auto",width:c.width}).outerHeight();
b=Math.max(0,c.minHeight-d);
a=typeof c.maxHeight==="number"?Math.max(0,c.maxHeight-d):"none";
if(c.height==="auto"){this.element.css({minHeight:b,maxHeight:a,height:"auto"})
}else{this.element.height(Math.max(0,c.height-d))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var a=h(this);
return h("<div>").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(a.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(a){return true;
if(h(a.target).closest(".ui-dialog").length){return true
}return !!h(a.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var a=this,b=this.widgetFullName;
if(!h.ui.dialog.overlayInstances){this._delay(function(){if(h.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(c){if(!a._allowInteraction(c)){c.preventDefault();
h(".ui-dialog:visible:last .ui-dialog-content").data(b)._focusTabbable()
}})
}})
}this.overlay=h("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
this._on(this.overlay,{mousedown:"_keepFocus"});
h.ui.dialog.overlayInstances++
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){h.ui.dialog.overlayInstances--;
if(!h.ui.dialog.overlayInstances){}this.overlay.remove();
this.overlay=null
}}});
h.ui.dialog.overlayInstances=0;
if(h.uiBackCompat!==false){h.widget("ui.dialog",h.ui.dialog,{_position:function(){var c=this.options.position,b=[],a=[0,0],d;
if(c){if(typeof c==="string"||(typeof c==="object"&&"0" in c)){b=c.split?c.split(" "):[c[0],c[1]];
if(b.length===1){b[1]=b[0]
}h.each(["left","top"],function(i,l){if(+b[i]===b[i]){a[i]=b[i];
b[i]=l
}});
c={my:b[0]+(a[0]<0?a[0]:"+"+a[0])+" "+b[1]+(a[1]<0?a[1]:"+"+a[1]),at:b.join(" ")}
}c=h.extend({},h.ui.dialog.prototype.options.position,c)
}else{c=h.ui.dialog.prototype.options.position
}d=this.uiDialog.is(":visible");
if(!d){this.uiDialog.show()
}this.uiDialog.position(c);
if(!d){this.uiDialog.hide()
}}})
}}(jQuery));
(function(e,f){var d="ui-effects-";
e.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(a,A){var t="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",w=/^([\-+])=\s*(\d+\.?\d*)/,x=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(g){return[g[1],g[2],g[3],g[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(g){return[g[1]*2.55,g[2]*2.55,g[3]*2.55,g[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(g){return[parseInt(g[1],16),parseInt(g[2],16),parseInt(g[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(g){return[parseInt(g[1]+g[1],16),parseInt(g[2]+g[2],16),parseInt(g[3]+g[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(g){return[g[1],g[2]/100,g[3]/100,g[4]]
}}],z=a.Color=function(i,h,j,g){return new a.Color.fn.parse(i,h,j,g)
},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},b={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},c=z.support={},C=a("<p>")[0],D,s=a.each;
C.style.cssText="background-color:rgba(1,1,1,.5)";
c.rgba=C.style.backgroundColor.indexOf("rgba")>-1;
s(u,function(h,g){g.cache="_"+h;
g.props.alpha={idx:3,type:"percent",def:1}
});
function v(i,g,h){var j=b[g.type]||{};
if(i==null){return(h||!g.def)?null:g.def
}i=j.floor?~~i:parseFloat(i);
if(isNaN(i)){return g.def
}if(j.mod){return(i+j.mod)%j.mod
}return 0>i?0:j.max<i?j.max:i
}function y(i){var g=z(),h=g._rgba=[];
i=i.toLowerCase();
s(x,function(n,k){var j,o=k.re.exec(i),l=o&&k.parse(o),m=k.space||"rgba";
if(l){j=g[m](l);
g[u[m].cache]=j[u[m].cache];
h=g._rgba=j._rgba;
return false
}});
if(h.length){if(h.join()==="0,0,0,0"){a.extend(h,D.transparent)
}return g
}return D[i]
}z.fn=a.extend(z.prototype,{parse:function(m,h,l,g){if(m===A){this._rgba=[null,null,null,null];
return this
}if(m.jquery||m.nodeType){m=a(m).css(h);
h=A
}var i=this,j=a.type(m),k=this._rgba=[];
if(h!==A){m=[m,h,l,g];
j="array"
}if(j==="string"){return this.parse(y(m)||D._default)
}if(j==="array"){s(u.rgba.props,function(o,n){k[n.idx]=v(m[n.idx],n)
});
return this
}if(j==="object"){if(m instanceof z){s(u,function(o,n){if(m[n.cache]){i[n.cache]=m[n.cache].slice()
}})
}else{s(u,function(n,p){var o=p.cache;
s(p.props,function(r,q){if(!i[o]&&p.to){if(r==="alpha"||m[r]==null){return
}i[o]=p.to(i._rgba)
}i[o][q.idx]=v(m[r],q,true)
});
if(i[o]&&a.inArray(null,i[o].slice(0,3))<0){i[o][3]=1;
if(p.from){i._rgba=p.from(i[o])
}}})
}return this
}},is:function(h){var j=z(h),g=true,i=this;
s(u,function(l,n){var m,k=j[n.cache];
if(k){m=i[n.cache]||n.to&&n.to(i._rgba)||[];
s(n.props,function(o,p){if(k[p.idx]!=null){g=(k[p.idx]===m[p.idx]);
return g
}})
}return g
});
return g
},_space:function(){var h=[],g=this;
s(u,function(j,i){if(g[i.cache]){h.push(j)
}});
return h.pop()
},transition:function(k,m){var j=z(k),i=j._space(),h=u[i],g=this.alpha()===0?z("transparent"):this,n=g[h.cache]||h.to(g._rgba),l=n.slice();
j=j[h.cache];
s(h.props,function(r,p){var G=p.idx,H=n[G],o=j[G],q=b[p.type]||{};
if(o===null){return
}if(H===null){l[G]=o
}else{if(q.mod){if(o-H>q.mod/2){H+=q.mod
}else{if(H-o>q.mod/2){H-=q.mod
}}}l[G]=v((o-H)*m+H,p)
}});
return this[i](l)
},blend:function(g){if(this._rgba[3]===1){return this
}var h=this._rgba.slice(),i=h.pop(),j=z(g)._rgba;
return z(a.map(h,function(l,k){return(1-i)*j[k]+i*l
}))
},toRgbaString:function(){var g="rgba(",h=a.map(this._rgba,function(j,i){return j==null?(i>2?1:0):j
});
if(h[3]===1){h.pop();
g="rgb("
}return g+h.join()+")"
},toHslaString:function(){var g="hsla(",h=a.map(this.hsla(),function(j,i){if(j==null){j=i>2?1:0
}if(i&&i<3){j=Math.round(j*100)+"%"
}return j
});
if(h[3]===1){h.pop();
g="hsl("
}return g+h.join()+")"
},toHexString:function(i){var h=this._rgba.slice(),g=h.pop();
if(i){h.push(~~(g*255))
}return"#"+a.map(h,function(j){j=(j||0).toString(16);
return j.length===1?"0"+j:j
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
z.fn.parse.prototype=z.fn;
function B(g,h,i){i=(i+1)%1;
if(i*6<1){return g+(h-g)*i*6
}if(i*2<1){return h
}if(i*3<2){return g+(h-g)*((2/3)-i)*6
}return g
}u.hsla.to=function(o){if(o[0]==null||o[1]==null||o[2]==null){return[null,null,null,o[3]]
}var q=o[0]/255,l=o[1]/255,k=o[2]/255,i=o[3],j=Math.max(q,l,k),n=Math.min(q,l,k),h=j-n,g=j+n,p=g*0.5,m,r;
if(n===j){m=0
}else{if(q===j){m=(60*(l-k)/h)+360
}else{if(l===j){m=(60*(k-q)/h)+120
}else{m=(60*(q-l)/h)+240
}}}if(h===0){r=0
}else{if(p<=0.5){r=h/g
}else{r=h/(2-g)
}}return[Math.round(m)%360,r,p,i==null?1:i]
};
u.hsla.from=function(g){if(g[0]==null||g[1]==null||g[2]==null){return[null,null,null,g[3]]
}var h=g[0]/360,i=g[1],j=g[2],k=g[3],m=j<=0.5?j*(1+i):j+i-j*i,l=2*j-m;
return[Math.round(B(l,m,h+(1/3))*255),Math.round(B(l,m,h)*255),Math.round(B(l,m,h-(1/3))*255),k]
};
s(u,function(k,i){var j=i.props,l=i.cache,g=i.to,h=i.from;
z.fn[k]=function(o){if(g&&!this[l]){this[l]=g(this._rgba)
}if(o===A){return this[l].slice()
}var n,q=a.type(o),p=(q==="array"||q==="object")?o:arguments,m=this[l].slice();
s(j,function(H,r){var G=p[q==="object"?H:r.idx];
if(G==null){G=m[r.idx]
}m[r.idx]=v(G,r)
});
if(h){n=z(h(m));
n[l]=m;
return n
}else{return z(m)
}};
s(j,function(n,m){if(z.fn[n]){return
}z.fn[n]=function(r){var p=a.type(r),G=(n==="alpha"?(this._hsla?"hsla":"rgba"):k),H=this[G](),q=H[m.idx],o;
if(p==="undefined"){return q
}if(p==="function"){r=r.call(this,q);
p=a.type(r)
}if(r==null&&m.empty){return this
}if(p==="string"){o=w.exec(r);
if(o){r=q+parseFloat(o[2])*(o[1]==="+"?1:-1)
}}H[m.idx]=r;
return this[G](H)
}
})
});
z.hook=function(g){var h=g.split(" ");
s(h,function(j,i){a.cssHooks[i]={set:function(n,l){var k,p,m="";
if(l!=="transparent"&&(a.type(l)!=="string"||(k=y(l)))){l=z(k||l);
if(!c.rgba&&l._rgba[3]!==1){p=i==="backgroundColor"?n.parentNode:n;
while((m===""||m==="transparent")&&p&&p.style){try{m=a.css(p,"backgroundColor");
p=p.parentNode
}catch(o){}}l=l.blend(m&&m!=="transparent"?m:"_default")
}l=l.toRgbaString()
}try{n.style[i]=l
}catch(o){}}};
a.fx.step[i]=function(k){if(!k.colorInit){k.start=z(k.elem,i);
k.end=z(k.end);
k.colorInit=true
}a.cssHooks[i].set(k.elem,k.start.transition(k.end,k.pos))
}
})
};
z.hook(t);
a.cssHooks.borderColor={expand:function(g){var h={};
s(["Top","Right","Bottom","Left"],function(i,j){h["border"+j+"Color"]=g
});
return h
}};
D=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var c=["add","remove","toggle"],b={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(j,g){e.fx.step[g]=function(i){if(i.end!=="none"&&!i.setAttr||i.pos===1&&!i.setAttr){jQuery.style(i.elem,g,i.end);
i.setAttr=true
}}
});
function a(g){var o,p,n=g.ownerDocument.defaultView?g.ownerDocument.defaultView.getComputedStyle(g,null):g.currentStyle,m={};
if(n&&n.length&&n[0]&&n[n[0]]){p=n.length;
while(p--){o=n[p];
if(typeof n[o]==="string"){m[e.camelCase(o)]=n[o]
}}}else{for(o in n){if(typeof n[o]==="string"){m[o]=n[o]
}}}return m
}function h(p,n){var g={},o,m;
for(o in n){m=n[o];
if(p[o]!==m){if(!b[o]){if(e.fx.step[o]||!isNaN(parseFloat(m))){g[o]=m
}}}}return g
}if(!e.fn.addBack){e.fn.addBack=function(g){return this.add(g==null?this.prevObject:this.prevObject.filter(g))
}
}e.effects.animateClass=function(p,o,g,m){var n=e.speed(o,g,m);
return this.queue(function(){var k=e(this),i=k.attr("class")||"",l,j=n.children?k.find("*").addBack():k;
j=j.map(function(){var r=e(this);
return{el:r,start:a(this)}
});
l=function(){e.each(c,function(t,s){if(p[s]){k[s+"Class"](p[s])
}})
};
l();
j=j.map(function(){this.end=a(this.el[0]);
this.diff=h(this.start,this.end);
return this
});
k.attr("class",i);
j=j.map(function(){var t=this,v=e.Deferred(),u=e.extend({},n,{queue:false,complete:function(){v.resolve(t)
}});
this.el.animate(this.diff,u);
return v.promise()
});
e.when.apply(e,j.get()).done(function(){l();
e.each(arguments,function(){var r=this.el;
e.each(this.diff,function(q){r.css(q,"")
})
});
n.complete.call(k[0])
})
})
};
e.fn.extend({addClass:(function(g){return function(o,p,m,n){return p?e.effects.animateClass.call(this,{add:o},p,m,n):g.apply(this,arguments)
}
})(e.fn.addClass),removeClass:(function(g){return function(o,p,m,n){return arguments.length>1?e.effects.animateClass.call(this,{remove:o},p,m,n):g.apply(this,arguments)
}
})(e.fn.removeClass),toggleClass:(function(g){return function(p,q,r,n,o){if(typeof q==="boolean"||q===f){if(!r){return g.apply(this,arguments)
}else{return e.effects.animateClass.call(this,(q?{add:p}:{remove:p}),r,n,o)
}}else{return e.effects.animateClass.call(this,{toggle:p},q,r,n)
}}
})(e.fn.toggleClass),switchClass:function(p,n,o,g,m){return e.effects.animateClass.call(this,{add:n,remove:p},o,g,m)
}})
})();
(function(){e.extend(e.effects,{version:"1.10.3",save:function(i,c){for(var j=0;
j<c.length;
j++){if(c[j]!==null){i.data(d+c[j],i[0].style[c[j]])
}}},restore:function(k,c){var i,l;
for(l=0;
l<c.length;
l++){if(c[l]!==null){i=k.data(d+c[l]);
if(i===f){i=""
}k.css(c[l],i)
}}},setMode:function(h,c){if(c==="toggle"){c=h.is(":hidden")?"show":"hide"
}return c
},getBaseline:function(k,j){var c,l;
switch(k[0]){case"top":c=0;
break;
case"middle":c=0.5;
break;
case"bottom":c=1;
break;
default:c=k[0]/j.height
}switch(k[1]){case"left":l=0;
break;
case"center":l=0.5;
break;
case"right":l=1;
break;
default:l=k[1]/j.width
}return{x:l,y:c}
},createWrapper:function(o){if(o.parent().is(".ui-effects-wrapper")){return o.parent()
}var n={width:o.outerWidth(true),height:o.outerHeight(true),"float":o.css("float")},c=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),p={width:o.width(),height:o.height()},l=document.activeElement;
try{l.id
}catch(m){l=document.body
}o.wrap(c);
if(o[0]===l||e.contains(o[0],l)){e(l).focus()
}c=o.parent();
if(o.css("position")==="static"){c.css({position:"relative"});
o.css({position:"relative"})
}else{e.extend(n,{position:o.css("position"),zIndex:o.css("z-index")});
e.each(["top","left","bottom","right"],function(h,g){n[g]=o.css(g);
if(isNaN(parseInt(n[g],10))){n[g]="auto"
}});
o.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}o.css(p);
return c.css(n).show()
},removeWrapper:function(h){var c=document.activeElement;
if(h.parent().is(".ui-effects-wrapper")){h.parent().replaceWith(h);
if(h[0]===c||e.contains(h[0],c)){e(c).focus()
}}return h
},setTransition:function(k,c,l,j){j=j||{};
e.each(c,function(h,i){var g=k.cssUnit(i);
if(g[0]>0){j[i]=g[0]*l+g[1]
}});
return j
}});
function b(k,l,j,c){if(e.isPlainObject(k)){l=k;
k=k.effect
}k={effect:k};
if(l==null){l={}
}if(e.isFunction(l)){c=l;
j=null;
l={}
}if(typeof l==="number"||e.fx.speeds[l]){c=j;
j=l;
l={}
}if(e.isFunction(j)){c=j;
j=null
}if(l){e.extend(k,l)
}j=j||l.duration;
k.duration=e.fx.off?0:typeof j==="number"?j:j in e.fx.speeds?e.fx.speeds[j]:e.fx.speeds._default;
k.complete=c||l.complete;
return k
}function a(c){if(!c||typeof c==="number"||e.fx.speeds[c]){return true
}if(typeof c==="string"&&!e.effects.effect[c]){return true
}if(e.isFunction(c)){return true
}if(typeof c==="object"&&!c.effect){return true
}return false
}e.fn.extend({effect:function(){var l=b.apply(this,arguments),c=l.mode,n=l.queue,m=e.effects.effect[l.effect];
if(e.fx.off||!m){if(c){return this[c](l.duration,l.complete)
}else{return this.each(function(){if(l.complete){l.complete.call(this)
}})
}}function k(g){var p=e(this),h=l.complete,j=l.mode;
function i(){if(e.isFunction(h)){h.call(p[0])
}if(e.isFunction(g)){g()
}}if(p.is(":hidden")?j==="hide":j==="show"){p[j]();
i()
}else{m.call(p[0],l,i)
}}return n===false?this.each(k):this.queue(n||"fx",k)
},show:(function(c){return function(i){if(a(i)){return c.apply(this,arguments)
}else{var j=b.apply(this,arguments);
j.mode="show";
return this.effect.call(this,j)
}}
})(e.fn.show),hide:(function(c){return function(i){if(a(i)){return c.apply(this,arguments)
}else{var j=b.apply(this,arguments);
j.mode="hide";
return this.effect.call(this,j)
}}
})(e.fn.hide),toggle:(function(c){return function(i){if(a(i)||typeof i==="boolean"){return c.apply(this,arguments)
}else{var j=b.apply(this,arguments);
j.mode="toggle";
return this.effect.call(this,j)
}}
})(e.fn.toggle),cssUnit:function(j){var i=this.css(j),c=[];
e.each(["em","px","%","pt"],function(h,g){if(i.indexOf(g)>0){c=[parseFloat(i),g]
}});
return c
}})
})();
(function(){var a={};
e.each(["Quad","Cubic","Quart","Quint","Expo"],function(b,c){a[c]=function(h){return Math.pow(h,b+2)
}
});
e.extend(a,{Sine:function(b){return 1-Math.cos(b*Math.PI/2)
},Circ:function(b){return 1-Math.sqrt(1-b*b)
},Elastic:function(b){return b===0||b===1?b:-Math.pow(2,8*(b-1))*Math.sin(((b-1)*80-7.5)*Math.PI/15)
},Back:function(b){return b*b*(3*b-2)
},Bounce:function(b){var h,c=4;
while(b<((h=Math.pow(2,--c))-1)/11){}return 1/Math.pow(4,3-c)-7.5625*Math.pow((h*3-2)/22-b,2)
}});
e.each(a,function(b,c){e.easing["easeIn"+b]=c;
e.easing["easeOut"+b]=function(h){return 1-c(1-h)
};
e.easing["easeInOut"+b]=function(h){return h<0.5?c(h*2)/2:1-c(h*-2+2)/2
}
})
})()
})(jQuery);
(function(e,g){var f=/up|down|vertical/,h=/up|left|vertical|horizontal/;
e.effects.effect.blind=function(z,o){var y=e(this),b=["position","top","bottom","left","right","height","width"],d=e.effects.setMode(y,z.mode||"hide"),a=z.direction||"up",w=f.test(a),x=w?"height":"width",c=w?"top":"left",C=h.test(a),u={},D=d==="show",A,B,v;
if(y.parent().is(".ui-effects-wrapper")){e.effects.save(y.parent(),b)
}else{e.effects.save(y,b)
}y.show();
A=e.effects.createWrapper(y).css({overflow:"hidden"});
B=A[x]();
v=parseFloat(A.css(c))||0;
u[x]=D?B:0;
if(!C){y.css(w?"bottom":"right",0).css(w?"top":"left","auto").css({position:"absolute"});
u[c]=D?v:B+v
}if(D){A.css(x,0);
if(!C){A.css(c,v+B)
}}A.animate(u,{duration:z.duration,easing:z.easing,queue:false,complete:function(){if(d==="hide"){y.hide()
}e.effects.restore(y,b);
e.effects.removeWrapper(y);
o()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.bounce=function(E,F){var N=d(this),M=["position","top","bottom","left","right","height","width"],G=d.effects.setMode(N,E.mode||"effect"),H=G==="hide",i=G==="show",b=E.direction||"up",L=E.distance,I=E.times||5,a=I*2+(i||H?1:0),o=E.duration/a,C=E.easing,K=(b==="up"||b==="down")?"top":"left",D=(b==="up"||b==="left"),y,J,z,B=N.queue(),A=B.length;
if(i||H){M.push("opacity")
}d.effects.save(N,M);
N.show();
d.effects.createWrapper(N);
if(!L){L=N[K==="top"?"outerHeight":"outerWidth"]()/3
}if(i){z={opacity:1};
z[K]=0;
N.css("opacity",0).css(K,D?-L*2:L*2).animate(z,o,C)
}if(H){L=L/Math.pow(2,I-1)
}z={};
z[K]=0;
for(y=0;
y<I;
y++){J={};
J[K]=(D?"-=":"+=")+L;
N.animate(J,o,C).animate(z,o,C);
L=H?L*2:L/2
}if(H){J={opacity:0};
J[K]=(D?"-=":"+=")+L;
N.animate(J,o,C)
}N.queue(function(){if(H){N.hide()
}d.effects.restore(N,M);
d.effects.removeWrapper(N);
F()
});
if(A>1){B.splice.apply(B,[1,0].concat(B.splice(A,a+1)))
}N.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.clip=function(y,v){var x=d(this),r=["position","top","bottom","left","right","height","width"],s=d.effects.setMode(x,y.mode||"hide"),b=s==="show",o=y.direction||"vertical",t=o==="vertical",a=t?"height":"width",u=t?"top":"left",w={},A,z,B;
d.effects.save(x,r);
x.show();
A=d.effects.createWrapper(x).css({overflow:"hidden"});
z=(x[0].tagName==="IMG")?A:x;
B=z[a]();
if(b){z.css(a,0);
z.css(u,B/2)
}w[a]=b?B:0;
w[u]=b?0:B/2;
z.animate(w,{queue:false,duration:y.duration,easing:y.easing,complete:function(){if(!b){x.hide()
}d.effects.restore(x,r);
d.effects.removeWrapper(x);
v()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.drop=function(u,q){var t=d(this),o=["position","top","bottom","left","right","opacity","height","width"],p=d.effects.setMode(t,u.mode||"hide"),b=p==="show",n=u.direction||"left",s=(n==="up"||n==="down")?"top":"left",a=(n==="up"||n==="left")?"pos":"neg",r={opacity:b?1:0},v;
d.effects.save(t,o);
t.show();
d.effects.createWrapper(t);
v=u.distance||t[s==="top"?"outerHeight":"outerWidth"](true)/2;
if(b){t.css("opacity",0).css(s,a==="pos"?-v:v)
}r[s]=(b?(a==="pos"?"+=":"-="):(a==="pos"?"-=":"+="))+v;
t.animate(r,{queue:false,duration:u.duration,easing:u.easing,complete:function(){if(p==="hide"){t.hide()
}d.effects.restore(t,o);
d.effects.removeWrapper(t);
q()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.explode=function(y,z){var F=y.pieces?Math.round(Math.sqrt(y.pieces)):3,K=F,L=d(this),D=d.effects.setMode(L,y.mode||"hide"),b=D==="show",H=L.show().css("visibility","hidden").offset(),o=Math.ceil(L.outerWidth()/K),A=Math.ceil(L.outerHeight()/F),G=[],i,j,J,B,C,E;
function a(){G.push(this);
if(G.length===F*K){I()
}}for(i=0;
i<F;
i++){B=H.top+i*A;
E=i-(F-1)/2;
for(j=0;
j<K;
j++){J=H.left+j*o;
C=j-(K-1)/2;
L.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*o,top:-i*A}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:o,height:A,left:J+(b?C*o:0),top:B+(b?E*A:0),opacity:b?0:1}).animate({left:J+(b?0:C*o),top:B+(b?0:E*A),opacity:b?1:0},y.duration||500,y.easing,a)
}}function I(){L.css({visibility:"visible"});
d(G).remove();
if(!b){L.hide()
}z()
}}
})(jQuery);
(function(d,c){d.effects.effect.fade=function(a,h){var g=d(this),b=d.effects.setMode(g,a.mode||"toggle");
g.animate({opacity:b},{queue:false,duration:a.duration,easing:a.easing,complete:h})
}
})(jQuery);
(function(d,c){d.effects.effect.fold=function(D,z){var C=d(this),u=["position","top","bottom","left","right","height","width"],x=d.effects.setMode(C,D.mode||"hide"),a=x==="show",w=x==="hide",G=D.size||15,v=/([0-9]+)%/.exec(G),H=!!D.horizFirst,y=a!==H,B=y?["width","height"]:["height","width"],A=D.duration/2,E,F,b={},o={};
d.effects.save(C,u);
C.show();
E=d.effects.createWrapper(C).css({overflow:"hidden"});
F=y?[E.width(),E.height()]:[E.height(),E.width()];
if(v){G=parseInt(v[1],10)/100*F[w?0:1]
}if(a){E.css(H?{height:0,width:G}:{height:G,width:0})
}b[B[0]]=a?F[0]:G;
o[B[1]]=a?F[1]:0;
E.animate(b,A,D.easing).animate(o,A,D.easing,function(){if(w){C.hide()
}d.effects.restore(C,u);
d.effects.removeWrapper(C);
z()
})
}
})(jQuery);
(function(d,c){d.effects.effect.highlight=function(a,l){var j=d(this),k=["backgroundImage","backgroundColor","opacity"],b=d.effects.setMode(j,a.mode||"show"),i={backgroundColor:j.css("backgroundColor")};
if(b==="hide"){i.opacity=0
}d.effects.save(j,k);
j.show().css({backgroundImage:"none",backgroundColor:a.color||"#ffff99"}).animate(i,{queue:false,duration:a.duration,easing:a.easing,complete:function(){if(b==="hide"){j.hide()
}d.effects.restore(j,k);
l()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.pulsate=function(z,v){var x=d(this),s=d.effects.setMode(x,z.mode||"show"),b=s==="show",r=s==="hide",a=(b||s==="hide"),o=((z.times||5)*2)+(a?1:0),w=z.duration/o,i=0,t=x.queue(),y=t.length,u;
if(b||!x.is(":visible")){x.css("opacity",0).show();
i=1
}for(u=1;
u<o;
u++){x.animate({opacity:i},w,z.easing);
i=1-i
}x.animate({opacity:i},w,z.easing);
x.queue(function(){if(r){x.hide()
}v()
});
if(y>1){t.splice.apply(t,[1,0].concat(t.splice(y,o+1)))
}x.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.puff=function(a,p){var k=d(this),b=d.effects.setMode(k,a.mode||"hide"),m=b==="hide",l=parseInt(a.percent,10)||150,n=l/100,o={height:k.height(),width:k.width(),outerHeight:k.outerHeight(),outerWidth:k.outerWidth()};
d.extend(a,{effect:"scale",queue:false,fade:true,mode:b,complete:p,percent:m?l:100,from:m?o:{height:o.height*n,width:o.width*n,outerHeight:o.outerHeight*n,outerWidth:o.outerWidth*n}});
k.effect(a)
};
d.effects.effect.scale=function(t,q){var s=d(this),a=d.extend(true,{},t),p=d.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:(p==="hide"?0:100)),m=t.direction||"both",b=t.origin,r={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},n={y:m!=="horizontal"?(o/100):1,x:m!=="vertical"?(o/100):1};
a.effect="size";
a.queue=false;
a.complete=q;
if(p!=="effect"){a.origin=b||["middle","center"];
a.restore=true
}a.from=t.from||(p==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:r);
a.to={height:r.height*n.y,width:r.width*n.x,outerHeight:r.outerHeight*n.y,outerWidth:r.outerWidth*n.x};
if(a.fade){if(p==="show"){a.from.opacity=0;
a.to.opacity=1
}if(p==="hide"){a.from.opacity=1;
a.to.opacity=0
}}s.effect(a)
};
d.effects.effect.size=function(C,D){var y,F,E,L=d(this),z=["position","top","bottom","left","right","width","height","overflow","opacity"],A=["position","top","bottom","left","right","overflow","opacity"],B=["width","height","overflow"],H=["fontSize"],w=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],K=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],G=d.effects.setMode(L,C.mode||"effect"),x=C.restore||G!=="effect",a=C.scale||"both",o=C.origin||["middle","center"],b=L.css("position"),J=x?z:A,I={height:0,width:0,outerHeight:0,outerWidth:0};
if(G==="show"){L.show()
}y={height:L.height(),width:L.width(),outerHeight:L.outerHeight(),outerWidth:L.outerWidth()};
if(C.mode==="toggle"&&G==="show"){L.from=C.to||I;
L.to=C.from||y
}else{L.from=C.from||(G==="show"?I:y);
L.to=C.to||(G==="hide"?I:y)
}E={from:{y:L.from.height/y.height,x:L.from.width/y.width},to:{y:L.to.height/y.height,x:L.to.width/y.width}};
if(a==="box"||a==="both"){if(E.from.y!==E.to.y){J=J.concat(w);
L.from=d.effects.setTransition(L,w,E.from.y,L.from);
L.to=d.effects.setTransition(L,w,E.to.y,L.to)
}if(E.from.x!==E.to.x){J=J.concat(K);
L.from=d.effects.setTransition(L,K,E.from.x,L.from);
L.to=d.effects.setTransition(L,K,E.to.x,L.to)
}}if(a==="content"||a==="both"){if(E.from.y!==E.to.y){J=J.concat(H).concat(B);
L.from=d.effects.setTransition(L,H,E.from.y,L.from);
L.to=d.effects.setTransition(L,H,E.to.y,L.to)
}}d.effects.save(L,J);
L.show();
d.effects.createWrapper(L);
L.css("overflow","hidden").css(L.from);
if(o){F=d.effects.getBaseline(o,y);
L.from.top=(y.outerHeight-L.outerHeight())*F.y;
L.from.left=(y.outerWidth-L.outerWidth())*F.x;
L.to.top=(y.outerHeight-L.to.outerHeight)*F.y;
L.to.left=(y.outerWidth-L.to.outerWidth)*F.x
}L.css(L.from);
if(a==="content"||a==="both"){w=w.concat(["marginTop","marginBottom"]).concat(H);
K=K.concat(["marginLeft","marginRight"]);
B=z.concat(w).concat(K);
L.find("*[width]").each(function(){var e=d(this),f={height:e.height(),width:e.width(),outerHeight:e.outerHeight(),outerWidth:e.outerWidth()};
if(x){d.effects.save(e,B)
}e.from={height:f.height*E.from.y,width:f.width*E.from.x,outerHeight:f.outerHeight*E.from.y,outerWidth:f.outerWidth*E.from.x};
e.to={height:f.height*E.to.y,width:f.width*E.to.x,outerHeight:f.height*E.to.y,outerWidth:f.width*E.to.x};
if(E.from.y!==E.to.y){e.from=d.effects.setTransition(e,w,E.from.y,e.from);
e.to=d.effects.setTransition(e,w,E.to.y,e.to)
}if(E.from.x!==E.to.x){e.from=d.effects.setTransition(e,K,E.from.x,e.from);
e.to=d.effects.setTransition(e,K,E.to.x,e.to)
}e.css(e.from);
e.animate(e.to,C.duration,C.easing,function(){if(x){d.effects.restore(e,B)
}})
})
}L.animate(L.to,{queue:false,duration:C.duration,easing:C.easing,complete:function(){if(L.to.opacity===0){L.css("opacity",L.from.opacity)
}if(G==="hide"){L.hide()
}d.effects.restore(L,J);
if(!x){if(b==="static"){L.css({position:"relative",top:L.to.top,left:L.to.left})
}else{d.each(["top","left"],function(f,e){L.css(e,function(j,h){var i=parseInt(h,10),g=f?L.to.left:L.to.top;
if(h==="auto"){return g+"px"
}return i+g+"px"
})
})
}}d.effects.removeWrapper(L);
D()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.shake=function(B,C){var J=d(this),I=["position","top","bottom","left","right","height","width"],D=d.effects.setMode(J,B.mode||"effect"),b=B.direction||"left",H=B.distance||20,E=B.times||3,a=E*2+1,x=Math.round(B.duration/a),F=(b==="up"||b==="down")?"top":"left",G=(b==="up"||b==="left"),i={},o={},w={},y,A=J.queue(),z=A.length;
d.effects.save(J,I);
J.show();
d.effects.createWrapper(J);
i[F]=(G?"-=":"+=")+H;
o[F]=(G?"+=":"-=")+H*2;
w[F]=(G?"-=":"+=")+H*2;
J.animate(i,x,B.easing);
for(y=1;
y<E;
y++){J.animate(o,x,B.easing).animate(w,x,B.easing)
}J.animate(o,x,B.easing).animate(i,x/2,B.easing).queue(function(){if(D==="hide"){J.hide()
}d.effects.restore(J,I);
d.effects.removeWrapper(J);
C()
});
if(z>1){A.splice.apply(A,[1,0].concat(A.splice(z,a+1)))
}J.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.slide=function(t,p){var s=d(this),n=["position","top","bottom","left","right","width","height"],o=d.effects.setMode(s,t.mode||"show"),a=o==="show",b=t.direction||"left",r=(b==="up"||b==="down")?"top":"left",u=(b==="up"||b==="left"),v,q={};
d.effects.save(s,n);
s.show();
v=t.distance||s[r==="top"?"outerHeight":"outerWidth"](true);
d.effects.createWrapper(s).css({overflow:"hidden"});
if(a){s.css(r,u?(isNaN(v)?"-"+v:-v):v)
}q[r]=(a?(u?"+=":"-="):(u?"-=":"+="))+v;
s.animate(q,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(o==="hide"){s.hide()
}d.effects.restore(s,n);
d.effects.removeWrapper(s);
p()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.transfer=function(w,s){var u=d(this),p=d(w.to),a=p.css("position")==="fixed",q=d("body"),o=a?q.scrollTop():0,b=a?q.scrollLeft():0,x=p.offset(),t={top:x.top-o,left:x.left-b,height:p.innerHeight(),width:p.innerWidth()},r=u.offset(),v=d("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(w.className).css({top:r.top-o,left:r.left-b,height:u.innerHeight(),width:u.innerWidth(),position:a?"fixed":"absolute"}).animate(t,w.duration,w.easing,function(){v.remove();
s()
})
}
})(jQuery);
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(g,i){var h=0,j=/^ui-id-\d+$/;
g.ui=g.ui||{};
g.extend(g.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
g.fn.extend({focus:(function(a){return function(c,b){return typeof c==="number"?this.each(function(){var d=this;
setTimeout(function(){g(d).focus();
if(b){b.call(d)
}},c)
}):a.apply(this,arguments)
}
})(g.fn.focus),scrollParent:function(){var a;
if((g.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){a=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(g.css(this,"position"))&&(/(auto|scroll)/).test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0)
}else{a=this.parents().filter(function(){return(/(auto|scroll)/).test(g.css(this,"overflow")+g.css(this,"overflow-y")+g.css(this,"overflow-x"))
}).eq(0)
}return(/fixed/).test(this.css("position"))||!a.length?g(document):a
},zIndex:function(a){if(a!==i){return this.css("zIndex",a)
}if(this.length){var c=g(this[0]),d,b;
while(c.length&&c[0]!==document){d=c.css("position");
if(d==="absolute"||d==="relative"||d==="fixed"){b=parseInt(c.css("zIndex"),10);
if(!isNaN(b)&&b!==0){return b
}}c=c.parent()
}}return 0
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++h)
}})
},removeUniqueId:function(){return this.each(function(){if(j.test(this.id)){g(this).removeAttr("id")
}})
}});
function k(d,f){var b,c,e,a=d.nodeName.toLowerCase();
if("area"===a){b=d.parentNode;
c=b.name;
if(!d.href||!c||b.nodeName.toLowerCase()!=="map"){return false
}e=g("img[usemap=#"+c+"]")[0];
return !!e&&l(e)
}return(/input|select|textarea|button|object/.test(a)?!d.disabled:"a"===a?d.href||f:f)&&l(d)
}function l(a){return g.expr.filters.visible(a)&&!g(a).parents().addBack().filter(function(){return g.css(this,"visibility")==="hidden"
}).length
}g.extend(g.expr[":"],{data:g.expr.createPseudo?g.expr.createPseudo(function(a){return function(b){return !!g.data(b,a)
}
}):function(a,b,c){return !!g.data(a,c[3])
},focusable:function(a){return k(a,!isNaN(g.attr(a,"tabindex")))
},tabbable:function(a){var c=g.attr(a,"tabindex"),b=isNaN(c);
return(b||c>=0)&&k(a,!b)
}});
if(!g("<a>").outerWidth(1).jquery){g.each(["Width","Height"],function(d,f){var e=f==="Width"?["Left","Right"]:["Top","Bottom"],c=f.toLowerCase(),a={innerWidth:g.fn.innerWidth,innerHeight:g.fn.innerHeight,outerWidth:g.fn.outerWidth,outerHeight:g.fn.outerHeight};
function b(r,s,m,q){g.each(e,function(){s-=parseFloat(g.css(r,"padding"+this))||0;
if(m){s-=parseFloat(g.css(r,"border"+this+"Width"))||0
}if(q){s-=parseFloat(g.css(r,"margin"+this))||0
}});
return s
}g.fn["inner"+f]=function(m){if(m===i){return a["inner"+f].call(this)
}return this.each(function(){g(this).css(c,b(this,m)+"px")
})
};
g.fn["outer"+f]=function(m,o){if(typeof m!=="number"){return a["outer"+f].call(this,m)
}return this.each(function(){g(this).css(c,b(this,m,true,o)+"px")
})
}
})
}if(!g.fn.addBack){g.fn.addBack=function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))
}
}if(g("<a>").data("a-b","a").removeData("a-b").data("a-b")){g.fn.removeData=(function(a){return function(b){if(arguments.length){return a.call(this,g.camelCase(b))
}else{return a.call(this)
}}
})(g.fn.removeData)
}g.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
g.support.selectstart="onselectstart" in document.createElement("div");
g.fn.extend({disableSelection:function(){return this.bind((g.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}});
g.extend(g.ui,{plugin:{add:function(d,c,a){var e,b=g.ui[d].prototype;
for(e in a){b.plugins[e]=b.plugins[e]||[];
b.plugins[e].push([c,a[e]])
}},call:function(e,c,d){var b,a=e.plugins[c];
if(!a||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11){return
}for(b=0;
b<a.length;
b++){if(e.options[a[b][0]]){a[b][1].apply(e.element,d)
}}}},hasScroll:function(a,c){if(g(a).css("overflow")==="hidden"){return false
}var d=(c&&c==="left")?"scrollLeft":"scrollTop",b=false;
if(a[d]>0){return true
}a[d]=1;
b=(a[d]>0);
a[d]=0;
return b
}})
})(jQuery);
(function(f,h){var g=0,i=Array.prototype.slice,j=f.cleanData;
f.cleanData=function(d){for(var c=0,b;
(b=d[c])!=null;
c++){try{f(b).triggerHandler("remove")
}catch(a){}}j(d)
};
f.widget=function(r,q,a){var d,c,o,b,p={},e=r.split(".")[0];
r=r.split(".")[1];
d=e+"-"+r;
if(!a){a=q;
q=f.Widget
}f.expr[":"][d.toLowerCase()]=function(k){return !!f.data(k,d)
};
f[e]=f[e]||{};
c=f[e][r];
o=f[e][r]=function(l,k){if(!this._createWidget){return new o(l,k)
}if(arguments.length){this._createWidget(l,k)
}};
f.extend(o,c,{version:a.version,_proto:f.extend({},a),_childConstructors:[]});
b=new q();
b.options=f.widget.extend({},b.options);
f.each(a,function(k,l){if(!f.isFunction(l)){p[k]=l;
return
}p[k]=(function(){var n=function(){return q.prototype[k].apply(this,arguments)
},m=function(t){return q.prototype[k].apply(this,t)
};
return function(){var v=this._super,x=this._superApply,w;
this._super=n;
this._superApply=m;
w=l.apply(this,arguments);
this._super=v;
this._superApply=x;
return w
}
})()
});
o.prototype=f.widget.extend(b,{widgetEventPrefix:c?(b.widgetEventPrefix||r):r},p,{constructor:o,namespace:e,widgetName:r,widgetFullName:d});
if(c){f.each(c._childConstructors,function(l,k){var m=k.prototype;
f.widget(m.namespace+"."+m.widgetName,o,k._proto)
});
delete c._childConstructors
}else{q._childConstructors.push(o)
}f.widget.bridge(r,o)
};
f.widget.extend=function(a){var e=i.call(arguments,1),b=0,l=e.length,d,c;
for(;
b<l;
b++){for(d in e[b]){c=e[b][d];
if(e[b].hasOwnProperty(d)&&c!==h){if(f.isPlainObject(c)){a[d]=f.isPlainObject(a[d])?f.widget.extend({},a[d],c):f.widget.extend({},c)
}else{a[d]=c
}}}}return a
};
f.widget.bridge=function(b,c){var a=c.prototype.widgetFullName||b;
f.fn[b]=function(e){var n=typeof e==="string",m=i.call(arguments,1),d=this;
e=!n&&m.length?f.widget.extend.apply(null,[e].concat(m)):e;
if(n){this.each(function(){var l,k=f.data(this,a);
if(!k){return f.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+e+"'")
}if(!f.isFunction(k[e])||e.charAt(0)==="_"){return f.error("no such method '"+e+"' for "+b+" widget instance")
}l=k[e].apply(k,m);
if(l!==k&&l!==h){d=l&&l.jquery?d.pushStack(l.get()):l;
return false
}})
}else{this.each(function(){var k=f.data(this,a);
if(k){k.option(e||{})._init()
}else{f.data(this,a,new c(e,this))
}})
}return d
}
};
f.Widget=function(){};
f.Widget._childConstructors=[];
f.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(b,a){a=f(a||this.defaultElement||this)[0];
this.element=f(a);
this.uuid=g++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.options=f.widget.extend({},this.options,this._getCreateOptions(),b);
this.bindings=f();
this.hoverable=f();
this.focusable=f();
if(a!==this){f.data(a,this.widgetFullName,this);
this._on(true,this.element,{remove:function(c){if(c.target===a){this.destroy()
}}});
this.document=f(a.style?a.ownerDocument:a.document||a);
this.window=f(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:f.noop,_getCreateEventData:f.noop,_create:f.noop,_init:f.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(f.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:f.noop,widget:function(){return this.element
},option:function(c,b){var m=c,a,d,e;
if(arguments.length===0){return f.widget.extend({},this.options)
}if(typeof c==="string"){m={};
a=c.split(".");
c=a.shift();
if(a.length){d=m[c]=f.widget.extend({},this.options[c]);
for(e=0;
e<a.length-1;
e++){d[a[e]]=d[a[e]]||{};
d=d[a[e]]
}c=a.pop();
if(arguments.length===1){return d[c]===h?null:d[c]
}d[c]=b
}else{if(arguments.length===1){return this.options[c]===h?null:this.options[c]
}m[c]=b
}}this._setOptions(m);
return this
},_setOptions:function(b){var a;
for(a in b){this._setOption(a,b[a])
}return this
},_setOption:function(b,a){this.options[b]=a;
if(b==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!a).attr("aria-disabled",a);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}return this
},enable:function(){return this._setOption("disabled",false)
},disable:function(){return this._setOption("disabled",true)
},_on:function(b,c,d){var a,e=this;
if(typeof b!=="boolean"){d=c;
c=b;
b=false
}if(!d){d=c;
c=this.element;
a=this.widget()
}else{c=a=f(c);
this.bindings=this.bindings.add(c)
}f.each(d,function(t,u){function q(){if(!b&&(e.options.disabled===true||f(this).hasClass("ui-state-disabled"))){return
}return(typeof u==="string"?e[u]:u).apply(e,arguments)
}if(typeof u!=="string"){q.guid=u.guid=u.guid||q.guid||f.guid++
}var v=t.match(/^(\w+)\s*(.*)$/),r=v[1]+e.eventNamespace,s=v[2];
if(s){a.delegate(s,r,q)
}else{c.bind(r,q)
}})
},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
a.unbind(b).undelegate(b)
},_delay:function(a,b){function c(){return(typeof a==="string"?d[a]:a).apply(d,arguments)
}var d=this;
return setTimeout(c,b||0)
},_hoverable:function(a){this.hoverable=this.hoverable.add(a);
this._on(a,{mouseenter:function(b){f(b.currentTarget).addClass("ui-state-hover")
},mouseleave:function(b){f(b.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(a){this.focusable=this.focusable.add(a);
this._on(a,{focusin:function(b){f(b.currentTarget).addClass("ui-state-focus")
},focusout:function(b){f(b.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(l,e,d){var a,b,c=this.options[l];
d=d||{};
e=f.Event(e);
e.type=(l===this.widgetEventPrefix?l:this.widgetEventPrefix+l).toLowerCase();
e.target=this.element[0];
b=e.originalEvent;
if(b){for(a in b){if(!(a in e)){e[a]=b[a]
}}}this.element.trigger(e,d);
return !(f.isFunction(c)&&c.apply(this.element[0],[e].concat(d))===false||e.isDefaultPrevented())
}};
f.each({show:"fadeIn",hide:"fadeOut"},function(a,b){f.Widget.prototype["_"+a]=function(e,m,c){if(typeof m==="string"){m={effect:m}
}var d,n=!m?a:m===true||typeof m==="number"?b:m.effect||b;
m=m||{};
if(typeof m==="number"){m={duration:m}
}d=!f.isEmptyObject(m);
m.complete=c;
if(m.delay){e.delay(m.delay)
}if(d&&f.effects&&f.effects.effect[n]){e[a](m)
}else{if(n!==a&&e[n]){e[n](m.duration,m.easing,c)
}else{e.queue(function(k){f(this)[a]();
if(c){c.call(e[0])
}k()
})
}}}
})
})(jQuery);
(function(d,f){var e=false;
d(document).mouseup(function(){e=false
});
d.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var a=this;
this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)
}).bind("click."+this.widgetName,function(b){if(true===d.data(b.target,a.widgetName+".preventClickEvent")){d.removeData(b.target,a.widgetName+".preventClickEvent");
b.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){d(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(b){if(e){return
}(this._mouseStarted&&this._mouseUp(b));
this._mouseDownEvent=b;
var c=this,a=(b.which===1),h=(typeof this.options.cancel==="string"&&b.target.nodeName?d(b.target).closest(this.options.cancel).length:false);
if(!a||h||!this._mouseCapture(b)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=(this._mouseStart(b)!==false);
if(!this._mouseStarted){b.preventDefault();
return true
}}if(true===d.data(b.target,this.widgetName+".preventClickEvent")){d.removeData(b.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(g){return c._mouseMove(g)
};
this._mouseUpDelegate=function(g){return c._mouseUp(g)
};
d(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
b.preventDefault();
e=true;
return true
},_mouseMove:function(a){if(d.ui.ie&&(!document.documentMode||document.documentMode<9)&&!a.button){return this._mouseUp(a)
}if(this._mouseStarted){this._mouseDrag(a);
return a.preventDefault()
}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,a)!==false);
(this._mouseStarted?this._mouseDrag(a):this._mouseUp(a))
}return !this._mouseStarted
},_mouseUp:function(a){d(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(a.target===this._mouseDownEvent.target){d.data(a.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(a)
}return false
},_mouseDistanceMet:function(a){return(Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})
})(jQuery);
(function(z,B){z.ui=z.ui||{};
var u,t=Math.max,p=Math.abs,r=Math.round,A=/left|center|right/,w=/top|center|bottom/,D=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,C=/%$/,x=z.fn.position;
function q(a,b,c){return[parseFloat(a[0])*(C.test(a[0])?b/100:1),parseFloat(a[1])*(C.test(a[1])?c/100:1)]
}function v(b,a){return parseInt(z.css(b,a),10)||0
}function y(a){var b=a[0];
if(b.nodeType===9){return{width:a.width(),height:a.height(),offset:{top:0,left:0}}
}if(z.isWindow(b)){return{width:a.width(),height:a.height(),offset:{top:a.scrollTop(),left:a.scrollLeft()}}
}if(b.preventDefault){return{width:0,height:0,offset:{top:b.pageY,left:b.pageX}}
}return{width:a.outerWidth(),height:a.outerHeight(),offset:a.offset()}
}z.position={scrollbarWidth:function(){if(u!==B){return u
}var c,d,a=z("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),b=a.children()[0];
z("body").append(a);
c=b.offsetWidth;
a.css("overflow","scroll");
d=b.offsetWidth;
if(c===d){d=a[0].clientWidth
}a.remove();
return(u=c-d)
},getScrollInfo:function(a){var b=a.isWindow||a.isDocument?"":a.element.css("overflow-x"),c=a.isWindow||a.isDocument?"":a.element.css("overflow-y"),d=b==="scroll"||(b==="auto"&&a.width<a.element[0].scrollWidth),e=c==="scroll"||(c==="auto"&&a.height<a.element[0].scrollHeight);
return{width:e?z.position.scrollbarWidth():0,height:d?z.position.scrollbarWidth():0}
},getWithinInfo:function(c){var b=z(c||window),d=z.isWindow(b[0]),a=!!b[0]&&b[0].nodeType===9;
return{element:b,isWindow:d,isDocument:a,offset:b.offset()||{left:0,top:0},scrollLeft:b.scrollLeft(),scrollTop:b.scrollTop(),width:d?b.width():b.outerWidth(),height:d?b.height():b.outerHeight()}
}};
z.fn.position=function(e){if(!e||!e.of){return x.apply(this,arguments)
}e=z.extend({},e);
var d,h,j,f,k,c,i=z(e.of),l=z.position.getWithinInfo(e.within),b=z.position.getScrollInfo(l),g=(e.collision||"flip").split(" "),a={};
c=y(i);
if(i[0].preventDefault){e.at="left top"
}h=c.width;
j=c.height;
f=c.offset;
k=z.extend({},f);
z.each(["my","at"],function(){var m=(e[this]||"").split(" "),n,o;
if(m.length===1){m=A.test(m[0])?m.concat(["center"]):w.test(m[0])?["center"].concat(m):["center","center"]
}m[0]=A.test(m[0])?m[0]:"center";
m[1]=w.test(m[1])?m[1]:"center";
n=D.exec(m[0]);
o=D.exec(m[1]);
a[this]=[n?n[0]:0,o?o[0]:0];
e[this]=[s.exec(m[0])[0],s.exec(m[1])[0]]
});
if(g.length===1){g[1]=g[0]
}if(e.at[0]==="right"){k.left+=h
}else{if(e.at[0]==="center"){k.left+=h/2
}}if(e.at[1]==="bottom"){k.top+=j
}else{if(e.at[1]==="center"){k.top+=j/2
}}d=q(a.at,h,j);
k.left+=d[0];
k.top+=d[1];
return this.each(function(){var n,M,T=z(this),R=T.outerWidth(),m=T.outerHeight(),S=v(this,"marginLeft"),o=v(this,"marginTop"),N=R+S+v(this,"marginRight")+b.width,O=m+o+v(this,"marginBottom")+b.height,Q=z.extend({},k),P=q(a.my,T.outerWidth(),T.outerHeight());
if(e.my[0]==="right"){Q.left-=R
}else{if(e.my[0]==="center"){Q.left-=R/2
}}if(e.my[1]==="bottom"){Q.top-=m
}else{if(e.my[1]==="center"){Q.top-=m/2
}}Q.left+=P[0];
Q.top+=P[1];
if(!z.support.offsetFractions){Q.left=r(Q.left);
Q.top=r(Q.top)
}n={marginLeft:S,marginTop:o};
z.each(["left","top"],function(E,F){if(z.ui.position[g[E]]){z.ui.position[g[E]][F](Q,{targetWidth:h,targetHeight:j,elemWidth:R,elemHeight:m,collisionPosition:n,collisionWidth:N,collisionHeight:O,offset:[d[0]+P[0],d[1]+P[1]],my:e.my,at:e.at,within:l,elem:T})
}});
if(e.using){M=function(G){var E=f.left-Q.left,H=E+h-R,F=f.top-Q.top,I=F+j-m,J={target:{element:i,left:f.left,top:f.top,width:h,height:j},element:{element:T,left:Q.left,top:Q.top,width:R,height:m},horizontal:H<0?"left":E>0?"right":"center",vertical:I<0?"top":F>0?"bottom":"middle"};
if(h<R&&p(E+H)<h){J.horizontal="center"
}if(j<m&&p(F+I)<j){J.vertical="middle"
}if(t(p(E),p(H))>t(p(F),p(I))){J.important="horizontal"
}else{J.important="vertical"
}e.using.call(this,G,J)
}
}T.offset(z.extend(Q,{using:M}))
})
};
z.ui.position={fit:{left:function(h,i){var a=i.within,f=a.isWindow?a.scrollLeft:a.offset.left,d=a.width,g=h.left-i.collisionPosition.marginLeft,e=f-g,b=g+i.collisionWidth-d-f,c;
if(i.collisionWidth>d){if(e>0&&b<=0){c=h.left+e+i.collisionWidth-d-f;
h.left+=e-c
}else{if(b>0&&e<=0){h.left=f
}else{if(e>b){h.left=f+d-i.collisionWidth
}else{h.left=f
}}}}else{if(e>0){h.left+=e
}else{if(b>0){h.left-=b
}else{h.left=t(h.left-g,h.left)
}}}},top:function(i,a){var b=a.within,e=b.isWindow?b.scrollTop:b.offset.top,d=a.within.height,g=i.top-a.collisionPosition.marginTop,f=e-g,h=g+a.collisionHeight-d-e,c;
if(a.collisionHeight>d){if(f>0&&h<=0){c=i.top+f+a.collisionHeight-d-e;
i.top+=f-c
}else{if(h>0&&f<=0){i.top=e
}else{if(f>h){i.top=e+d-a.collisionHeight
}else{i.top=e
}}}}else{if(f>0){i.top+=f
}else{if(h>0){i.top-=h
}else{i.top=t(i.top-g,i.top)
}}}}},flip:{left:function(k,l){var m=l.within,g=m.offset.left+m.scrollLeft,c=m.width,a=m.isWindow?m.scrollLeft:m.offset.left,j=k.left-l.collisionPosition.marginLeft,f=j-a,b=j+l.collisionWidth-c-a,h=l.my[0]==="left"?-l.elemWidth:l.my[0]==="right"?l.elemWidth:0,e=l.at[0]==="left"?l.targetWidth:l.at[0]==="right"?-l.targetWidth:0,n=-2*l.offset[0],d,i;
if(f<0){d=k.left+h+e+n+l.collisionWidth-c-g;
if(d<0||d<p(f)){k.left+=h+e+n
}}else{if(b>0){i=k.left-l.collisionPosition.marginLeft+h+e+n-a;
if(i>0||p(i)<b){k.left+=h+e+n
}}}},top:function(m,n){var o=n.within,e=o.offset.top+o.scrollTop,d=o.height,f=o.isWindow?o.scrollTop:o.offset.top,k=m.top-n.collisionPosition.marginTop,i=k-f,l=k+n.collisionHeight-d-f,h=n.my[1]==="top",j=h?-n.elemHeight:n.my[1]==="bottom"?n.elemHeight:0,b=n.at[1]==="top"?n.targetHeight:n.at[1]==="bottom"?-n.targetHeight:0,a=-2*n.offset[1],g,c;
if(i<0){c=m.top+j+b+a+n.collisionHeight-d-e;
if((m.top+j+b+a)>i&&(c<0||c<p(i))){m.top+=j+b+a
}}else{if(l>0){g=m.top-n.collisionPosition.marginTop+j+b+a-f;
if((m.top+j+b+a)>l&&(g>0||p(g)<l)){m.top+=j+b+a
}}}}},flipfit:{left:function(){z.ui.position.flip.left.apply(this,arguments);
z.ui.position.fit.left.apply(this,arguments)
},top:function(){z.ui.position.flip.top.apply(this,arguments);
z.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var c,a,f,d,e,g=document.getElementsByTagName("body")[0],b=document.createElement("div");
c=document.createElement(g?"div":"body");
f={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(g){z.extend(f,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(e in f){c.style[e]=f[e]
}c.appendChild(b);
a=g||document.documentElement;
a.insertBefore(c,a.firstChild);
b.style.cssText="position: absolute; left: 10.7432222px;";
d=z(b).offset().left;
z.support.offsetFractions=d>10&&d<11;
c.innerHTML="";
a.removeChild(c)
})()
}(jQuery));
(function(i,h){var f=0,j={},g={};
j.height=j.paddingTop=j.paddingBottom=j.borderTopWidth=j.borderBottomWidth="hide";
g.height=g.paddingTop=g.paddingBottom=g.borderTopWidth=g.borderBottomWidth="show";
i.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var a=this.options;
this.prevShow=this.prevHide=i();
this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");
if(!a.collapsible&&(a.active===false||a.active==null)){a.active=0
}this._processPanels();
if(a.active<0){a.active+=this.headers.length
}this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?i():this.active.next(),content:!this.active.length?i():this.active.next()}
},_createIcons:function(){var a=this.options.icons;
if(a){i("<span>").addClass("ui-accordion-header-icon ui-icon "+a.header).prependTo(this.headers);
this.active.children(".ui-accordion-header-icon").removeClass(a.header).addClass(a.activeHeader);
this.headers.addClass("ui-accordion-icons")
}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var a;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
this._destroyIcons();
a=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")
}});
if(this.options.heightStyle!=="content"){a.css("height","")
}},_setOption:function(b,a){if(b==="active"){this._activate(a);
return
}if(b==="event"){if(this.options.event){this._off(this.headers,this.options.event)
}this._setupEvents(a)
}this._super(b,a);
if(b==="collapsible"&&!a&&this.options.active===false){this._activate(0)
}if(b==="icons"){this._destroyIcons();
if(a){this._createIcons()
}}if(b==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!a)
}},_keydown:function(b){if(b.altKey||b.ctrlKey){return
}var a=i.ui.keyCode,c=this.headers.length,e=this.headers.index(b.target),d=false;
switch(b.keyCode){case a.RIGHT:case a.DOWN:d=this.headers[(e+1)%c];
break;
case a.LEFT:case a.UP:d=this.headers[(e-1+c)%c];
break;
case a.SPACE:case a.ENTER:this._eventHandler(b);
break;
case a.HOME:d=this.headers[0];
break;
case a.END:d=this.headers[c-1];
break
}if(d){i(b.target).attr("tabIndex",-1);
i(d).attr("tabIndex",0);
d.focus();
b.preventDefault()
}},_panelKeyDown:function(a){if(a.keyCode===i.ui.keyCode.UP&&a.ctrlKey){i(a.currentTarget).prev().focus()
}},refresh:function(){var a=this.options;
this._processPanels();
if((a.active===false&&a.collapsible===true)||!this.headers.length){a.active=false;
this.active=i()
}else{if(a.active===false){this._activate(0)
}else{if(this.active.length&&!i.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){a.active=false;
this.active=i()
}else{this._activate(Math.max(0,a.active-1))
}}else{a.active=this.headers.index(this.active)
}}}this._destroyIcons();
this._refresh()
},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
},_refresh:function(){var a,c=this.options,d=c.heightStyle,b=this.element.parent(),e=this.accordionId="ui-accordion-"+(this.element.attr("id")||++f);
this.active=this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
this.active.next().addClass("ui-accordion-content-active").show();
this.headers.attr("role","tab").each(function(t){var s=i(this),p=s.attr("id"),r=s.next(),q=r.attr("id");
if(!p){p=e+"-header-"+t;
s.attr("id",p)
}if(!q){q=e+"-panel-"+t;
r.attr("id",q)
}s.attr("aria-controls",q);
r.attr("aria-labelledby",p)
}).next().attr("role","tabpanel");
this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();
if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)
}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"})
}this._createIcons();
this._setupEvents(c.event);
if(d==="fill"){a=b.height();
this.element.siblings(":visible").each(function(){var m=i(this),n=m.css("position");
if(n==="absolute"||n==="fixed"){return
}a-=m.outerHeight(true)
});
this.headers.each(function(){a-=i(this).outerHeight(true)
});
this.headers.next().each(function(){i(this).height(Math.max(0,a-i(this).innerHeight()+i(this).height()))
}).css("overflow","auto")
}else{if(d==="auto"){a=0;
this.headers.next().each(function(){a=Math.max(a,i(this).css("height","").height())
}).height(a)
}}},_activate:function(b){var a=this._findActive(b)[0];
if(a===this.active[0]){return
}a=a||this.active[0];
this._eventHandler({target:a,currentTarget:a,preventDefault:i.noop})
},_findActive:function(a){return typeof a==="number"?this.headers.eq(a):i()
},_setupEvents:function(a){var b={keydown:"_keydown"};
if(a){i.each(a.split(" "),function(c,d){b[d]="_eventHandler"
})
}this._off(this.headers.add(this.headers.next()));
this._on(this.headers,b);
this._on(this.headers.next(),{keydown:"_panelKeyDown"});
this._hoverable(this.headers);
this._focusable(this.headers)
},_eventHandler:function(r){var a=this.options,o=this.active,e=i(r.currentTarget),c=e[0]===o[0],q=c&&a.collapsible,p=q?i():e.next(),d=o.next(),b={oldHeader:o,oldPanel:d,newHeader:q?i():e,newPanel:p};
r.preventDefault();
if((c&&!a.collapsible)||(this._trigger("beforeActivate",r,b)===false)){return
}a.active=q?false:this.headers.index(e);
this.active=c?i():e;
this._toggle(b);
o.removeClass("ui-accordion-header-active ui-state-active");
if(a.icons){o.children(".ui-accordion-header-icon").removeClass(a.icons.activeHeader).addClass(a.icons.header)
}if(!c){e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");
if(a.icons){e.children(".ui-accordion-header-icon").removeClass(a.icons.header).addClass(a.icons.activeHeader)
}e.next().addClass("ui-accordion-content-active")
}},_toggle:function(a){var c=a.newPanel,b=this.prevShow.length?this.prevShow:a.oldPanel;
this.prevShow.add(this.prevHide).stop(true,true);
this.prevShow=c;
this.prevHide=b;
if(this.options.animate){this._animate(c,b,a)
}else{b.hide();
c.show();
this._toggleComplete(a)
}b.attr({"aria-hidden":"true"});
b.prev().attr("aria-selected","false");
if(c.length&&b.length){b.prev().attr({tabIndex:-1,"aria-expanded":"false"})
}else{if(c.length){this.headers.filter(function(){return i(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}c.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})
},_animate:function(x,d,t){var e,r,u,s=this,c=0,b=x.length&&(!d.length||(x.index()<d.index())),v=this.options.animate||{},a=b&&v.down||v,w=function(){s._toggleComplete(t)
};
if(typeof a==="number"){u=a
}if(typeof a==="string"){r=a
}r=r||a.easing||v.easing;
u=u||a.duration||v.duration;
if(!d.length){return x.animate(g,u,r,w)
}if(!x.length){return d.animate(j,u,r,w)
}e=x.show().outerHeight();
d.animate(j,{duration:u,easing:r,step:function(l,k){k.now=Math.round(l)
}});
x.hide().animate(g,{duration:u,easing:r,complete:w,step:function(l,k){k.now=Math.round(l);
if(k.prop!=="height"){c+=k.now
}else{if(s.options.heightStyle!=="content"){k.now=Math.round(e-d.outerHeight()-c);
c=0
}}}})
},_toggleComplete:function(a){var b=a.oldPanel;
b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
if(b.length){b.parent()[0].className=b.parent()[0].className
}this._trigger("activate",null,a)
}})
})(jQuery);
(function(d,c){d.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var j,l,i,a=this.element[0].nodeName.toLowerCase(),b=a==="textarea",k=a==="input";
this.isMultiLine=b?true:k?false:this.element.prop("isContentEditable");
this.valueMethod=this.element[b||k?"val":"text"];
this.isNewMenu=true;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");
this._on(this.element,{keydown:function(f){if(this.element.prop("readOnly")){j=true;
i=true;
l=true;
return
}j=false;
i=false;
l=false;
var e=d.ui.keyCode;
switch(f.keyCode){case e.PAGE_UP:j=true;
this._move("previousPage",f);
break;
case e.PAGE_DOWN:j=true;
this._move("nextPage",f);
break;
case e.UP:j=true;
this._keyEvent("previous",f);
break;
case e.DOWN:j=true;
this._keyEvent("next",f);
break;
case e.ENTER:case e.NUMPAD_ENTER:if(this.menu.active){j=true;
f.preventDefault();
this.menu.select(f)
}break;
case e.TAB:if(this.menu.active){this.menu.select(f)
}break;
case e.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);
this.close(f);
f.preventDefault()
}break;
default:l=true;
this._searchTimeout(f);
break
}},keypress:function(f){if(j){j=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){f.preventDefault()
}return
}if(l){return
}var e=d.ui.keyCode;
switch(f.keyCode){case e.PAGE_UP:this._move("previousPage",f);
break;
case e.PAGE_DOWN:this._move("nextPage",f);
break;
case e.UP:this._keyEvent("previous",f);
break;
case e.DOWN:this._keyEvent("next",f);
break
}},input:function(e){if(i){i=false;
e.preventDefault();
return
}this._searchTimeout(e)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching);
this.close(e);
this._change(e)
}});
this._initSource();
this.menu=d("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu");
this._on(this.menu.element,{mousedown:function(f){f.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur
});
var e=this.menu.element[0];
if(!d(f.target).closest(".ui-menu-item").length){this._delay(function(){var g=this;
this.document.one("mousedown",function(h){if(h.target!==g.element[0]&&h.target!==e&&!d.contains(e,h.target)){g.close()
}})
})
}},menufocus:function(f,e){if(this.isNewMenu){this.isNewMenu=false;
if(f.originalEvent&&/^mouse/.test(f.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){d(f.target).trigger(f.originalEvent)
});
return
}}var g=e.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",f,{item:g})){if(f.originalEvent&&/^key/.test(f.originalEvent.type)){this._value(g.value)
}}else{this.liveRegion.text(g.value)
}},menuselect:function(f,e){var g=e.item.data("ui-autocomplete-item"),h=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();
this.previous=h;
this._delay(function(){this.previous=h;
this.selectedItem=g
})
}if(false!==this._trigger("select",f,{item:g})){this._value(g.value)
}this.term=this._value();
this.close(f);
this.selectedItem=g
}});
this.liveRegion=d("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(b,a){this._super(b,a);
if(b==="source"){this._initSource()
}if(b==="appendTo"){this.menu.element.appendTo(this._appendTo())
}if(b==="disabled"&&a&&this.xhr){this.xhr.abort()
}},_appendTo:function(){var a=this.options.appendTo;
if(a){a=a.jquery||a.nodeType?d(a):this.document.find(a).eq(0)
}if(!a){a=this.element.closest(".ui-front")
}if(!a.length){a=this.document[0].body
}return a
},_initSource:function(){var a,f,b=this;
if(d.isArray(this.options.source)){a=this.options.source;
this.source=function(e,h){h(d.ui.autocomplete.filter(a,e.term))
}
}else{if(typeof this.options.source==="string"){f=this.options.source;
this.source=function(e,h){if(b.xhr){b.xhr.abort()
}b.xhr=d.ajax({url:f,data:e,dataType:"json",success:function(g){h(g)
},error:function(){h([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(a){clearTimeout(this.searching);
this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;
this.search(null,a)
}},this.options.delay)
},search:function(a,b){a=a!=null?a:this._value();
this.term=this._value();
if(a.length<this.options.minLength){return this.close(b)
}if(this._trigger("search",b)===false){return
}return this._search(a)
},_search:function(a){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:a},this._response())
},_response:function(){var a=++this.requestIndex;
return d.proxy(function(b){if(a===this.requestIndex){this.__response(b)
}this.pending--;
if(!this.pending){this.element.removeClass("ui-autocomplete-loading")
}},this)
},__response:function(a){if(a){a=this._normalize(a)
}this._trigger("response",null,{content:a});
if(!this.options.disabled&&a&&a.length&&!this.cancelSearch){this._suggest(a);
this._trigger("open")
}else{this._close()
}},close:function(a){this.cancelSearch=true;
this._close(a)
},_close:function(a){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",a)
}},_change:function(a){if(this.previous!==this._value()){this._trigger("change",a,{item:this.selectedItem})
}},_normalize:function(a){if(a.length&&a[0].label&&a[0].value){return a
}return d.map(a,function(b){if(typeof b==="string"){return{label:b,value:b}
}return d.extend({label:b.label||b.value,value:b.value||b.label},b)
})
},_suggest:function(b){var a=this.menu.element.empty();
this._renderMenu(a,b);
this.isNewMenu=true;
this.menu.refresh();
a.show();
this._resizeMenu();
a.position(d.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}},_resizeMenu:function(){var a=this.menu.element;
a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(b,f){var a=this;
d.each(f,function(h,e){a._renderItemData(b,e)
})
},_renderItemData:function(b,a){return this._renderItem(b,a).data("ui-autocomplete-item",a)
},_renderItem:function(b,a){return d("<li>").append(d("<a>").text(a.label)).appendTo(b)
},_move:function(a,b){if(!this.menu.element.is(":visible")){this.search(null,b);
return
}if(this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)){this._value(this.term);
this.menu.blur();
return
}this.menu[a](b)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(a,b){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(a,b);
b.preventDefault()
}}});
d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(a,f){var b=new RegExp(d.ui.autocomplete.escapeRegex(f),"i");
return d.grep(a,function(e){return b.test(e.label||e.value||e)
})
}});
d.widget("ui.autocomplete",d.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(a){var b;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}if(a&&a.length){b=this.options.messages.results(a.length)
}else{b=this.options.messages.noResults
}this.liveRegion.text(b)
}})
}(jQuery));
(function(l,j){var n,h="ui-button ui-widget ui-state-default ui-corner-all",k="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var a=l(this);
setTimeout(function(){a.find(":ui-button").button("refresh")
},1)
},i=function(c){var d=c.name,b=c.form,a=l([]);
if(d){d=d.replace(/'/g,"\\'");
if(b){a=l(b).find("[name='"+d+"']")
}else{a=l("[name='"+d+"']",c.ownerDocument).filter(function(){return !this.form
})
}}return a
};
l.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m);
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")
}else{this.element.prop("disabled",this.options.disabled)
}this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");
var b=this,d=this.options,a=this.type==="checkbox"||this.type==="radio",c=!a?"ui-state-active":"";
if(d.label===null){d.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())
}this._hoverable(this.buttonElement);
this.buttonElement.addClass(h).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(d.disabled){return
}if(this===n){l(this).addClass("ui-state-active")
}}).bind("mouseleave"+this.eventNamespace,function(){if(d.disabled){return
}l(this).removeClass(c)
}).bind("click"+this.eventNamespace,function(e){if(d.disabled){e.preventDefault();
e.stopImmediatePropagation()
}});
this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")
},blur:function(){this.buttonElement.removeClass("ui-state-focus")
}});
if(a){this.element.bind("change"+this.eventNamespace,function(){b.refresh()
})
}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(d.disabled){return false
}})
}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(d.disabled){return false
}l(this).addClass("ui-state-active");
b.buttonElement.attr("aria-pressed","true");
var e=b.element[0];
i(e).not(e).map(function(){return l(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
})
}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(d.disabled){return false
}l(this).addClass("ui-state-active");
n=this;
b.document.one("mouseup",function(){n=null
})
}).bind("mouseup"+this.eventNamespace,function(){if(d.disabled){return false
}l(this).removeClass("ui-state-active")
}).bind("keydown"+this.eventNamespace,function(e){if(d.disabled){return false
}if(e.keyCode===l.ui.keyCode.SPACE||e.keyCode===l.ui.keyCode.ENTER){l(this).addClass("ui-state-active")
}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){l(this).removeClass("ui-state-active")
});
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(e){if(e.keyCode===l.ui.keyCode.SPACE){l(this).click()
}})
}}}this._setOption("disabled",d.disabled);
this._resetButton()
},_determineButtonType:function(){var c,a,b;
if(this.element.is("[type=checkbox]")){this.type="checkbox"
}else{if(this.element.is("[type=radio]")){this.type="radio"
}else{if(this.element.is("input")){this.type="input"
}else{this.type="button"
}}}if(this.type==="checkbox"||this.type==="radio"){c=this.element.parents().last();
a="label[for='"+this.element.attr("id")+"']";
this.buttonElement=c.find(a);
if(!this.buttonElement.length){c=c.length?c.siblings():this.element.siblings();
this.buttonElement=c.filter(a);
if(!this.buttonElement.length){this.buttonElement=c.find(a)
}}this.element.addClass("ui-helper-hidden-accessible");
b=this.element.is(":checked");
if(b){this.buttonElement.addClass("ui-state-active")
}this.buttonElement.prop("aria-pressed",b)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");
this.buttonElement.removeClass(h+" ui-state-active "+k).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
if(!this.hasTitle){this.buttonElement.removeAttr("title")
}},_setOption:function(b,a){this._super(b,a);
if(b==="disabled"){this.element.prop("disabled",!!a);
if(a){this.buttonElement.removeClass("ui-state-focus")
}return
}this._resetButton()
},refresh:function(){var a=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
if(a!==this.options.disabled){this._setOption("disabled",a)
}if(this.type==="radio"){i(this.element[0]).each(function(){if(l(this).is(":checked")){l(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")
}else{l(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}})
}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")
}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")
}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)
}return
}var a=this.buttonElement.removeClass(k),c=l("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,b=[];
if(d.primary||d.secondary){if(this.options.text){b.push("ui-button-text-icon"+(e?"s":(d.primary?"-primary":"-secondary")))
}if(d.primary){a.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>")
}if(d.secondary){a.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>")
}if(!this.options.text){b.push(e?"ui-button-icons-only":"ui-button-icon-only");
if(!this.hasTitle){a.attr("title",l.trim(c))
}}}else{b.push("ui-button-text-only")
}a.addClass(b.join(" "))
}});
l.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(b,a){if(b==="disabled"){this.buttons.button("option",b,a)
}this._super(b,a)
},refresh:function(){var a=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return l(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(a?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset");
this.buttons.map(function(){return l(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
}(jQuery));
(function(l,j){l.extend(l.ui,{datepicker:{version:"1.10.4"}});
var k="datepicker",n;
function h(){this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
l.extend(this._defaults,this.regional[""]);
this.dpDiv=m(l("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}l.extend(h.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){i(this._defaults,a||{});
return this
},_attachDatepicker:function(b,e){var a,c,d;
a=b.nodeName.toLowerCase();
c=(a==="div"||a==="span");
if(!b.id){this.uuid+=1;
b.id="dp"+this.uuid
}d=this._newInst(l(b),c);
d.settings=l.extend({},e||{});
if(a==="input"){this._connectDatepicker(b,d)
}else{if(c){this._inlineDatepicker(b,d)
}}},_newInst:function(b,c){var a=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:a,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:(!c?this.dpDiv:m(l("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(a,b){var c=l(a);
b.append=l([]);
b.trigger=l([]);
if(c.hasClass(this.markerClassName)){return
}this._attachments(c,b);
c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
this._autoSize(b);
l.data(a,k,b);
if(b.settings.disabled){this._disableDatepicker(a)
}},_attachments:function(d,a){var e,b,f,g=this._get(a,"appendText"),c=this._get(a,"isRTL");
if(a.append){a.append.remove()
}if(g){a.append=l("<span class='"+this._appendClass+"'>"+g+"</span>");
d[c?"before":"after"](a.append)
}d.unbind("focus",this._showDatepicker);
if(a.trigger){a.trigger.remove()
}e=this._get(a,"showOn");
if(e==="focus"||e==="both"){d.focus(this._showDatepicker)
}if(e==="button"||e==="both"){b=this._get(a,"buttonText");
f=this._get(a,"buttonImage");
a.trigger=l(this._get(a,"buttonImageOnly")?l("<img/>").addClass(this._triggerClass).attr({src:f,alt:b,title:b}):l("<button type='button'></button>").addClass(this._triggerClass).html(!f?b:l("<img/>").attr({src:f,alt:b,title:b})));
d[c?"before":"after"](a.trigger);
a.trigger.click(function(){if(l.datepicker._datepickerShowing&&l.datepicker._lastInput===d[0]){l.datepicker._hideDatepicker()
}else{if(l.datepicker._datepickerShowing&&l.datepicker._lastInput!==d[0]){l.datepicker._hideDatepicker();
l.datepicker._showDatepicker(d[0])
}else{l.datepicker._showDatepicker(d[0])
}}return false
})
}},_autoSize:function(f){if(this._get(f,"autoSize")&&!f.inline){var b,d,c,g,a=new Date(2009,12-1,20),e=this._get(f,"dateFormat");
if(e.match(/[DM]/)){b=function(o){d=0;
c=0;
for(g=0;
g<o.length;
g++){if(o[g].length>d){d=o[g].length;
c=g
}}return c
};
a.setMonth(b(this._get(f,(e.match(/MM/)?"monthNames":"monthNamesShort"))));
a.setDate(b(this._get(f,(e.match(/DD/)?"dayNames":"dayNamesShort")))+20-a.getDay())
}f.input.attr("size",this._formatDate(f,a).length)
}},_inlineDatepicker:function(b,c){var a=l(b);
if(a.hasClass(this.markerClassName)){return
}a.addClass(this.markerClassName).append(c.dpDiv);
l.data(b,k,c);
this._setDate(c,this._getDefaultDate(c),true);
this._updateDatepicker(c);
this._updateAlternate(c);
if(c.settings.disabled){this._disableDatepicker(b)
}c.dpDiv.css("display","block")
},_dialogDatepicker:function(d,u,f,t,e){var v,a,g,b,c,s=this._dialogInst;
if(!s){this.uuid+=1;
v="dp"+this.uuid;
this._dialogInput=l("<input type='text' id='"+v+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.keydown(this._doKeyDown);
l("body").append(this._dialogInput);
s=this._dialogInst=this._newInst(this._dialogInput,false);
s.settings={};
l.data(this._dialogInput[0],k,s)
}i(s.settings,t||{});
u=(u&&u.constructor===Date?this._formatDate(s,u):u);
this._dialogInput.val(u);
this._pos=(e?(e.length?e:[e.pageX,e.pageY]):null);
if(!this._pos){a=document.documentElement.clientWidth;
g=document.documentElement.clientHeight;
b=document.documentElement.scrollLeft||document.body.scrollLeft;
c=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(a/2)-100+b,(g/2)-150+c]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
s.settings.onSelect=f;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if(l.blockUI){l.blockUI(this.dpDiv)
}l.data(this._dialogInput[0],k,s);
return this
},_destroyDatepicker:function(b){var a,d=l(b),c=l.data(b,k);
if(!d.hasClass(this.markerClassName)){return
}a=b.nodeName.toLowerCase();
l.removeData(b,k);
if(a==="input"){c.append.remove();
c.trigger.remove();
d.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(a==="div"||a==="span"){d.removeClass(this.markerClassName).empty()
}}},_enableDatepicker:function(b){var a,c,e=l(b),d=l.data(b,k);
if(!e.hasClass(this.markerClassName)){return
}a=b.nodeName.toLowerCase();
if(a==="input"){b.disabled=false;
d.trigger.filter("button").each(function(){this.disabled=false
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(a==="div"||a==="span"){c=e.children("."+this._inlineClass);
c.children().removeClass("ui-state-disabled");
c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=l.map(this._disabledInputs,function(f){return(f===b?null:f)
})
},_disableDatepicker:function(b){var a,c,e=l(b),d=l.data(b,k);
if(!e.hasClass(this.markerClassName)){return
}a=b.nodeName.toLowerCase();
if(a==="input"){b.disabled=true;
d.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(a==="div"||a==="span"){c=e.children("."+this._inlineClass);
c.children().addClass("ui-state-disabled");
c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=l.map(this._disabledInputs,function(f){return(f===b?null:f)
});
this._disabledInputs[this._disabledInputs.length]=b
},_isDisabledDatepicker:function(a){if(!a){return false
}for(var b=0;
b<this._disabledInputs.length;
b++){if(this._disabledInputs[b]===a){return true
}}return false
},_getInst:function(a){try{return l.data(a,k)
}catch(b){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(p,e,a){var d,f,b,g,c=this._getInst(p);
if(arguments.length===2&&typeof e==="string"){return(e==="defaults"?l.extend({},l.datepicker._defaults):(c?(e==="all"?l.extend({},c.settings):this._get(c,e)):null))
}d=e||{};
if(typeof e==="string"){d={};
d[e]=a
}if(c){if(this._curInst===c){this._hideDatepicker()
}f=this._getDateDatepicker(p,true);
b=this._getMinMaxDate(c,"min");
g=this._getMinMaxDate(c,"max");
i(c.settings,d);
if(b!==null&&d.dateFormat!==j&&d.minDate===j){c.settings.minDate=this._formatDate(c,b)
}if(g!==null&&d.dateFormat!==j&&d.maxDate===j){c.settings.maxDate=this._formatDate(c,g)
}if("disabled" in d){if(d.disabled){this._disableDatepicker(p)
}else{this._enableDatepicker(p)
}}this._attachments(l(p),c);
this._autoSize(c);
this._setDate(c,f);
this._updateAlternate(c);
this._updateDatepicker(c)
}},_changeDatepicker:function(a,c,b){this._optionDatepicker(a,c,b)
},_refreshDatepicker:function(a){var b=this._getInst(a);
if(b){this._updateDatepicker(b)
}},_setDateDatepicker:function(a,c){var b=this._getInst(a);
if(b){this._setDate(b,c);
this._updateDatepicker(b);
this._updateAlternate(b)
}},_getDateDatepicker:function(a,c){var b=this._getInst(a);
if(b&&!b.inline){this._setDateFromField(b,c)
}return(b?this._getDate(b):null)
},_doKeyDown:function(c){var e,f,a,b=l.datepicker._getInst(c.target),g=true,d=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=true;
if(l.datepicker._datepickerShowing){switch(c.keyCode){case 9:l.datepicker._hideDatepicker();
g=false;
break;
case 13:a=l("td."+l.datepicker._dayOverClass+":not(."+l.datepicker._currentClass+")",b.dpDiv);
if(a[0]){l.datepicker._selectDay(c.target,b.selectedMonth,b.selectedYear,a[0])
}e=l.datepicker._get(b,"onSelect");
if(e){f=l.datepicker._formatDate(b);
e.apply((b.input?b.input[0]:null),[f,b])
}else{l.datepicker._hideDatepicker()
}return false;
case 27:l.datepicker._hideDatepicker();
break;
case 33:l.datepicker._adjustDate(c.target,(c.ctrlKey?-l.datepicker._get(b,"stepBigMonths"):-l.datepicker._get(b,"stepMonths")),"M");
break;
case 34:l.datepicker._adjustDate(c.target,(c.ctrlKey?+l.datepicker._get(b,"stepBigMonths"):+l.datepicker._get(b,"stepMonths")),"M");
break;
case 35:if(c.ctrlKey||c.metaKey){l.datepicker._clearDate(c.target)
}g=c.ctrlKey||c.metaKey;
break;
case 36:if(c.ctrlKey||c.metaKey){l.datepicker._gotoToday(c.target)
}g=c.ctrlKey||c.metaKey;
break;
case 37:if(c.ctrlKey||c.metaKey){l.datepicker._adjustDate(c.target,(d?+1:-1),"D")
}g=c.ctrlKey||c.metaKey;
if(c.originalEvent.altKey){l.datepicker._adjustDate(c.target,(c.ctrlKey?-l.datepicker._get(b,"stepBigMonths"):-l.datepicker._get(b,"stepMonths")),"M")
}break;
case 38:if(c.ctrlKey||c.metaKey){l.datepicker._adjustDate(c.target,-7,"D")
}g=c.ctrlKey||c.metaKey;
break;
case 39:if(c.ctrlKey||c.metaKey){l.datepicker._adjustDate(c.target,(d?-1:+1),"D")
}g=c.ctrlKey||c.metaKey;
if(c.originalEvent.altKey){l.datepicker._adjustDate(c.target,(c.ctrlKey?+l.datepicker._get(b,"stepBigMonths"):+l.datepicker._get(b,"stepMonths")),"M")
}break;
case 40:if(c.ctrlKey||c.metaKey){l.datepicker._adjustDate(c.target,+7,"D")
}g=c.ctrlKey||c.metaKey;
break;
default:g=false
}}else{if(c.keyCode===36&&c.ctrlKey){l.datepicker._showDatepicker(this)
}else{g=false
}}if(g){c.preventDefault();
c.stopPropagation()
}},_doKeyPress:function(b){var c,d,a=l.datepicker._getInst(b.target);
if(l.datepicker._get(a,"constrainInput")){c=l.datepicker._possibleChars(l.datepicker._get(a,"dateFormat"));
d=String.fromCharCode(b.charCode==null?b.keyCode:b.charCode);
return b.ctrlKey||b.metaKey||(d<" "||!c||c.indexOf(d)>-1)
}},_doKeyUp:function(b){var d,a=l.datepicker._getInst(b.target);
if(a.input.val()!==a.lastVal){try{d=l.datepicker.parseDate(l.datepicker._get(a,"dateFormat"),(a.input?a.input.val():null),l.datepicker._getFormatConfig(a));
if(d){l.datepicker._setDateFromField(a);
l.datepicker._updateAlternate(a);
l.datepicker._updateDatepicker(a)
}}catch(c){}}return true
},_showDatepicker:function(e){e=e.target||e;
if(e.nodeName.toLowerCase()!=="input"){e=l("input",e.parentNode)[0]
}if(l.datepicker._isDisabledDatepicker(e)||l.datepicker._lastInput===e){return
}var c,g,d,a,p,f,b;
c=l.datepicker._getInst(e);
if(l.datepicker._curInst&&l.datepicker._curInst!==c){l.datepicker._curInst.dpDiv.stop(true,true);
if(c&&l.datepicker._datepickerShowing){l.datepicker._hideDatepicker(l.datepicker._curInst.input[0])
}}g=l.datepicker._get(c,"beforeShow");
d=g?g.apply(e,[e,c]):{};
if(d===false){return
}i(c.settings,d);
c.lastVal=null;
l.datepicker._lastInput=e;
l.datepicker._setDateFromField(c);
if(l.datepicker._inDialog){e.value=""
}if(!l.datepicker._pos){l.datepicker._pos=l.datepicker._findPos(e);
l.datepicker._pos[1]+=e.offsetHeight
}a=false;
l(e).parents().each(function(){a|=l(this).css("position")==="fixed";
return !a
});
p={left:l.datepicker._pos[0],top:l.datepicker._pos[1]};
l.datepicker._pos=null;
c.dpDiv.empty();
c.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
l.datepicker._updateDatepicker(c);
p=l.datepicker._checkOffset(c,p,a);
c.dpDiv.css({position:(l.datepicker._inDialog&&l.blockUI?"static":(a?"fixed":"absolute")),display:"none",left:p.left+"px",top:p.top+"px"});
if(!c.inline){f=l.datepicker._get(c,"showAnim");
b=l.datepicker._get(c,"duration");
c.dpDiv.zIndex(l(e).zIndex()+1);
l.datepicker._datepickerShowing=true;
if(l.effects&&l.effects.effect[f]){c.dpDiv.show(f,l.datepicker._get(c,"showOptions"),b)
}else{c.dpDiv[f||"show"](f?b:null)
}if(l.datepicker._shouldFocusInput(c)){c.input.focus()
}l.datepicker._curInst=c
}},_updateDatepicker:function(c){this.maxRows=4;
n=c;
c.dpDiv.empty().append(this._generateHTML(c));
this._attachHandlers(c);
c.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var a,e=this._getNumberOfMonths(c),b=e[1],d=17;
c.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(b>1){c.dpDiv.addClass("ui-datepicker-multi-"+b).css("width",(d*b)+"em")
}c.dpDiv[(e[0]!==1||e[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");
c.dpDiv[(this._get(c,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(c===l.datepicker._curInst&&l.datepicker._datepickerShowing&&l.datepicker._shouldFocusInput(c)){c.input.focus()
}if(c.yearshtml){a=c.yearshtml;
setTimeout(function(){if(a===c.yearshtml&&c.yearshtml){c.dpDiv.find("select.ui-datepicker-year:first").replaceWith(c.yearshtml)
}a=c.yearshtml=null
},0)
}},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")
},_checkOffset:function(d,f,g){var e=d.dpDiv.outerWidth(),a=d.dpDiv.outerHeight(),b=d.input?d.input.outerWidth():0,r=d.input?d.input.outerHeight():0,c=document.documentElement.clientWidth+(g?0:l(document).scrollLeft()),q=document.documentElement.clientHeight+(g?0:l(document).scrollTop());
f.left-=(this._get(d,"isRTL")?(e-b):0);
f.left-=(g&&f.left===d.input.offset().left)?l(document).scrollLeft():0;
f.top-=(g&&f.top===(d.input.offset().top+r))?l(document).scrollTop():0;
f.left-=Math.min(f.left,(f.left+e>c&&c>e)?Math.abs(f.left+e-c):0);
f.top-=Math.min(f.top,(f.top+a>q&&q>a)?Math.abs(a+r):0);
return f
},_findPos:function(a){var d,b=this._getInst(a),c=this._get(b,"isRTL");
while(a&&(a.type==="hidden"||a.nodeType!==1||l.expr.filters.hidden(a))){a=a[c?"previousSibling":"nextSibling"]
}d=l(a).offset();
return[d.left,d.top]
},_hideDatepicker:function(d){var e,a,b,f,c=this._curInst;
if(!c||(d&&c!==l.data(d,k))){return
}if(this._datepickerShowing){e=this._get(c,"showAnim");
a=this._get(c,"duration");
b=function(){l.datepicker._tidyDialog(c)
};
if(l.effects&&(l.effects.effect[e]||l.effects[e])){c.dpDiv.hide(e,l.datepicker._get(c,"showOptions"),a,b)
}else{c.dpDiv[(e==="slideDown"?"slideUp":(e==="fadeIn"?"fadeOut":"hide"))]((e?a:null),b)
}if(!e){b()
}this._datepickerShowing=false;
f=this._get(c,"onClose");
if(f){f.apply((c.input?c.input[0]:null),[(c.input?c.input.val():""),c])
}this._lastInput=null;
if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(l.blockUI){l.unblockUI();
l("body").append(this.dpDiv)
}}this._inDialog=false
}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(b){if(!l.datepicker._curInst){return
}var c=l(b.target),a=l.datepicker._getInst(c[0]);
if(((c[0].id!==l.datepicker._mainDivId&&c.parents("#"+l.datepicker._mainDivId).length===0&&!c.hasClass(l.datepicker.markerClassName)&&!c.closest("."+l.datepicker._triggerClass).length&&l.datepicker._datepickerShowing&&!(l.datepicker._inDialog&&l.blockUI)))||(c.hasClass(l.datepicker.markerClassName)&&l.datepicker._curInst!==a)){l.datepicker._hideDatepicker()
}},_adjustDate:function(a,b,c){var d=l(a),e=this._getInst(d[0]);
if(this._isDisabledDatepicker(d[0])){return
}this._adjustInstDate(e,b+(c==="M"?this._get(e,"showCurrentAtPos"):0),c);
this._updateDatepicker(e)
},_gotoToday:function(a){var d,b=l(a),c=this._getInst(b[0]);
if(this._get(c,"gotoCurrent")&&c.currentDay){c.selectedDay=c.currentDay;
c.drawMonth=c.selectedMonth=c.currentMonth;
c.drawYear=c.selectedYear=c.currentYear
}else{d=new Date();
c.selectedDay=d.getDate();
c.drawMonth=c.selectedMonth=d.getMonth();
c.drawYear=c.selectedYear=d.getFullYear()
}this._notifyChange(c);
this._adjustDate(b)
},_selectMonthYear:function(a,e,b){var c=l(a),d=this._getInst(c[0]);
d["selected"+(b==="M"?"Month":"Year")]=d["draw"+(b==="M"?"Month":"Year")]=parseInt(e.options[e.selectedIndex].value,10);
this._notifyChange(d);
this._adjustDate(c)
},_selectDay:function(a,c,f,b){var e,d=l(a);
if(l(b).hasClass(this._unselectableClass)||this._isDisabledDatepicker(d[0])){return
}e=this._getInst(d[0]);
e.selectedDay=e.currentDay=l("a",b).html();
e.selectedMonth=e.currentMonth=c;
e.selectedYear=e.currentYear=f;
this._selectDate(a,this._formatDate(e,e.currentDay,e.currentMonth,e.currentYear))
},_clearDate:function(a){var b=l(a);
this._selectDate(b,"")
},_selectDate:function(a,e){var d,b=l(a),c=this._getInst(b[0]);
e=(e!=null?e:this._formatDate(c));
if(c.input){c.input.val(e)
}this._updateAlternate(c);
d=this._get(c,"onSelect");
if(d){d.apply((c.input?c.input[0]:null),[e,c])
}else{if(c.input){c.input.trigger("change")
}}if(c.inline){this._updateDatepicker(c)
}else{this._hideDatepicker();
this._lastInput=c.input[0];
if(typeof(c.input[0])!=="object"){c.input.focus()
}this._lastInput=null
}},_updateAlternate:function(a){var b,c,e,d=this._get(a,"altField");
if(d){b=this._get(a,"altFormat")||this._get(a,"dateFormat");
c=this._getDate(a);
e=this.formatDate(b,c,this._getFormatConfig(a));
l(d).each(function(){l(this).val(e)
})
}},noWeekends:function(a){var b=a.getDay();
return[(b>0&&b<6),""]
},iso8601Week:function(c){var b,a=new Date(c.getTime());
a.setDate(a.getDate()+4-(a.getDay()||7));
b=a.getTime();
a.setMonth(0);
a.setDate(1);
return Math.floor(Math.round((b-a)/86400000)/7)+1
},parseDate:function(c,F,a){if(c==null||F==null){throw"Invalid arguments"
}F=(typeof F==="object"?F.toString():F+"");
if(F===""){return null
}var Q,f,S,b=0,N=(a?a.shortYearCutoff:null)||this._defaults.shortYearCutoff,R=(typeof N!=="string"?N:new Date().getFullYear()%100+parseInt(N,10)),J=(a?a.dayNamesShort:null)||this._defaults.dayNamesShort,I=(a?a.dayNames:null)||this._defaults.dayNames,T=(a?a.monthNamesShort:null)||this._defaults.monthNamesShort,P=(a?a.monthNames:null)||this._defaults.monthNames,O=-1,H=-1,d=-1,L=-1,e=false,K,G=function(p){var o=(Q+1<c.length&&c.charAt(Q+1)===p);
if(o){Q++
}return o
},E=function(q){var s=G(q),p=(q==="@"?14:(q==="!"?20:(q==="y"&&s?4:(q==="o"?3:2)))),o=new RegExp("^\\d{1,"+p+"}"),r=F.substring(b).match(o);
if(!r){throw"Missing number at position "+b
}b+=r[0].length;
return parseInt(r[0],10)
},M=function(r,q,o){var s=-1,p=l.map(G(r)?o:q,function(t,u){return[[u,t]]
}).sort(function(t,u){return -(t[1].length-u[1].length)
});
l.each(p,function(u,t){var v=t[1];
if(F.substr(b,v.length).toLowerCase()===v.toLowerCase()){s=t[0];
b+=v.length;
return false
}});
if(s!==-1){return s+1
}else{throw"Unknown name at position "+b
}},g=function(){if(F.charAt(b)!==c.charAt(Q)){throw"Unexpected literal at position "+b
}b++
};
for(Q=0;
Q<c.length;
Q++){if(e){if(c.charAt(Q)==="'"&&!G("'")){e=false
}else{g()
}}else{switch(c.charAt(Q)){case"d":d=E("d");
break;
case"D":M("D",J,I);
break;
case"o":L=E("o");
break;
case"m":H=E("m");
break;
case"M":H=M("M",T,P);
break;
case"y":O=E("y");
break;
case"@":K=new Date(E("@"));
O=K.getFullYear();
H=K.getMonth()+1;
d=K.getDate();
break;
case"!":K=new Date((E("!")-this._ticksTo1970)/10000);
O=K.getFullYear();
H=K.getMonth()+1;
d=K.getDate();
break;
case"'":if(G("'")){g()
}else{e=true
}break;
default:g()
}}}if(b<F.length){S=F.substr(b);
if(!/^\s+/.test(S)){throw"Extra/unparsed characters found in date: "+S
}}if(O===-1){O=new Date().getFullYear()
}else{if(O<100){O+=new Date().getFullYear()-new Date().getFullYear()%100+(O<=R?0:-100)
}}if(L>-1){H=1;
d=L;
do{f=this._getDaysInMonth(O,H-1);
if(d<=f){break
}H++;
d-=f
}while(true)
}K=this._daylightSavingAdjust(new Date(O,H-1,d));
if(K.getFullYear()!==O||K.getMonth()+1!==H||K.getDate()!==d){throw"Invalid date"
}return K
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(b,u,g){if(!u){return""
}var z,y=(g?g.dayNamesShort:null)||this._defaults.dayNamesShort,w=(g?g.dayNames:null)||this._defaults.dayNames,d=(g?g.monthNamesShort:null)||this._defaults.monthNamesShort,f=(g?g.monthNames:null)||this._defaults.monthNames,a=function(p){var o=(z+1<b.length&&b.charAt(z+1)===p);
if(o){z++
}return o
},x=function(p,o,r){var q=""+o;
if(a(p)){while(q.length<r){q="0"+q
}}return q
},e=function(r,p,q,o){return(a(r)?o[p]:q[p])
},v="",c=false;
if(u){for(z=0;
z<b.length;
z++){if(c){if(b.charAt(z)==="'"&&!a("'")){c=false
}else{v+=b.charAt(z)
}}else{switch(b.charAt(z)){case"d":v+=x("d",u.getDate(),2);
break;
case"D":v+=e("D",u.getDay(),y,w);
break;
case"o":v+=x("o",Math.round((new Date(u.getFullYear(),u.getMonth(),u.getDate()).getTime()-new Date(u.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":v+=x("m",u.getMonth()+1,2);
break;
case"M":v+=e("M",u.getMonth(),d,f);
break;
case"y":v+=(a("y")?u.getFullYear():(u.getYear()%100<10?"0":"")+u.getYear()%100);
break;
case"@":v+=u.getTime();
break;
case"!":v+=u.getTime()*10000+this._ticksTo1970;
break;
case"'":if(a("'")){v+="'"
}else{c=true
}break;
default:v+=b.charAt(z)
}}}}return v
},_possibleChars:function(a){var b,c="",d=false,e=function(f){var g=(b+1<a.length&&a.charAt(b+1)===f);
if(g){b++
}return g
};
for(b=0;
b<a.length;
b++){if(d){if(a.charAt(b)==="'"&&!e("'")){d=false
}else{c+=a.charAt(b)
}}else{switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";
break;
case"D":case"M":return null;
case"'":if(e("'")){c+="'"
}else{d=true
}break;
default:c+=a.charAt(b)
}}}return c
},_get:function(a,b){return a.settings[b]!==j?a.settings[b]:this._defaults[b]
},_setDateFromField:function(a,d){if(a.input.val()===a.lastVal){return
}var f=this._get(a,"dateFormat"),g=a.lastVal=a.input?a.input.val():null,p=this._getDefaultDate(a),e=p,c=this._getFormatConfig(a);
try{e=this.parseDate(f,g,c)||p
}catch(b){g=(d?"":g)
}a.selectedDay=e.getDate();
a.drawMonth=a.selectedMonth=e.getMonth();
a.drawYear=a.selectedYear=e.getFullYear();
a.currentDay=(g?e.getDate():0);
a.currentMonth=(g?e.getMonth():0);
a.currentYear=(g?e.getFullYear():0);
this._adjustInstDate(a)
},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date()))
},_determineDate:function(b,e,a){var c=function(g){var p=new Date();
p.setDate(p.getDate()+g);
return p
},d=function(g){try{return l.datepicker.parseDate(l.datepicker._get(b,"dateFormat"),g,l.datepicker._getFormatConfig(b))
}catch(v){}var A=(g.toLowerCase().match(/^c/)?l.datepicker._getDate(b):null)||new Date(),z=A.getFullYear(),w=A.getMonth(),B=A.getDate(),x=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,y=x.exec(g);
while(y){switch(y[2]||"d"){case"d":case"D":B+=parseInt(y[1],10);
break;
case"w":case"W":B+=parseInt(y[1],10)*7;
break;
case"m":case"M":w+=parseInt(y[1],10);
B=Math.min(B,l.datepicker._getDaysInMonth(z,w));
break;
case"y":case"Y":z+=parseInt(y[1],10);
B=Math.min(B,l.datepicker._getDaysInMonth(z,w));
break
}y=x.exec(g)
}return new Date(z,w,B)
},f=(e==null||e===""?a:(typeof e==="string"?d(e):(typeof e==="number"?(isNaN(e)?a:c(e)):new Date(e.getTime()))));
f=(f&&f.toString()==="Invalid Date"?a:f);
if(f){f.setHours(0);
f.setMinutes(0);
f.setSeconds(0);
f.setMilliseconds(0)
}return this._daylightSavingAdjust(f)
},_daylightSavingAdjust:function(a){if(!a){return null
}a.setHours(a.getHours()>12?a.getHours()+2:0);
return a
},_setDate:function(g,c,a){var f=!c,d=g.selectedMonth,b=g.selectedYear,e=this._restrictMinMax(g,this._determineDate(g,c,new Date()));
g.selectedDay=g.currentDay=e.getDate();
g.drawMonth=g.selectedMonth=g.currentMonth=e.getMonth();
g.drawYear=g.selectedYear=g.currentYear=e.getFullYear();
if((d!==g.selectedMonth||b!==g.selectedYear)&&!a){this._notifyChange(g)
}this._adjustInstDate(g);
if(g.input){g.input.val(f?"":this._formatDate(g))
}},_getDate:function(a){var b=(!a.currentYear||(a.input&&a.input.val()==="")?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay)));
return b
},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),a="#"+b.id.replace(/\\\\/g,"\\");
b.dpDiv.find("[data-handler]").map(function(){var d={prev:function(){l.datepicker._adjustDate(a,-c,"M")
},next:function(){l.datepicker._adjustDate(a,+c,"M")
},hide:function(){l.datepicker._hideDatepicker()
},today:function(){l.datepicker._gotoToday(a)
},selectDay:function(){l.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false
},selectMonth:function(){l.datepicker._selectMonthYear(a,this,"M");
return false
},selectYear:function(){l.datepicker._selectMonthYear(a,this,"Y");
return false
}};
l(this).bind(this.getAttribute("data-event"),d[this.getAttribute("data-handler")])
})
},_generateHTML:function(c){var aM,aO,ak,at,a2,aL,e,ao,aF,aw,ax,aV,aT,aU,a5,aN,aX,aG,aH,am,av,aI,ay,aW,a1,g,aq,an,ap,aY,aC,aS,d,a,a3,aK,aB,ar,aR,b=new Date(),aJ=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate())),aE=this._get(c,"isRTL"),aA=this._get(c,"showButtonPanel"),al=this._get(c,"hideIfNoPrevNext"),az=this._get(c,"navigationAsDateFormat"),aQ=this._getNumberOfMonths(c),aZ=this._get(c,"showCurrentAtPos"),au=this._get(c,"stepMonths"),aD=(aQ[0]!==1||aQ[1]!==1),a4=this._daylightSavingAdjust((!c.currentDay?new Date(9999,9,9):new Date(c.currentYear,c.currentMonth,c.currentDay))),a0=this._getMinMaxDate(c,"min"),aP=this._getMinMaxDate(c,"max"),a6=c.drawMonth-aZ,f=c.drawYear;
if(a6<0){a6+=12;
f--
}if(aP){aM=this._daylightSavingAdjust(new Date(aP.getFullYear(),aP.getMonth()-(aQ[0]*aQ[1])+1,aP.getDate()));
aM=(a0&&aM<a0?a0:aM);
while(this._daylightSavingAdjust(new Date(f,a6,1))>aM){a6--;
if(a6<0){a6=11;
f--
}}}c.drawMonth=a6;
c.drawYear=f;
aO=this._get(c,"prevText");
aO=(!az?aO:this.formatDate(aO,this._daylightSavingAdjust(new Date(f,a6-au,1)),this._getFormatConfig(c)));
ak=(this._canAdjustMonth(c,-1,f,a6)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aO+"'><span class='ui-icon ui-icon-circle-triangle-"+(aE?"e":"w")+"'>"+aO+"</span></a>":(al?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aO+"'><span class='ui-icon ui-icon-circle-triangle-"+(aE?"e":"w")+"'>"+aO+"</span></a>"));
at=this._get(c,"nextText");
at=(!az?at:this.formatDate(at,this._daylightSavingAdjust(new Date(f,a6+au,1)),this._getFormatConfig(c)));
a2=(this._canAdjustMonth(c,+1,f,a6)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+at+"'><span class='ui-icon ui-icon-circle-triangle-"+(aE?"w":"e")+"'>"+at+"</span></a>":(al?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+at+"'><span class='ui-icon ui-icon-circle-triangle-"+(aE?"w":"e")+"'>"+at+"</span></a>"));
aL=this._get(c,"currentText");
e=(this._get(c,"gotoCurrent")&&c.currentDay?a4:aJ);
aL=(!az?aL:this.formatDate(aL,e,this._getFormatConfig(c)));
ao=(!c.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(c,"closeText")+"</button>":"");
aF=(aA)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(aE?ao:"")+(this._isInRange(c,e)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+aL+"</button>":"")+(aE?"":ao)+"</div>":"";
aw=parseInt(this._get(c,"firstDay"),10);
aw=(isNaN(aw)?0:aw);
ax=this._get(c,"showWeek");
aV=this._get(c,"dayNames");
aT=this._get(c,"dayNamesMin");
aU=this._get(c,"monthNames");
a5=this._get(c,"monthNamesShort");
aN=this._get(c,"beforeShowDay");
aX=this._get(c,"showOtherMonths");
aG=this._get(c,"selectOtherMonths");
aH=this._getDefaultDate(c);
am="";
av;
for(aI=0;
aI<aQ[0];
aI++){ay="";
this.maxRows=4;
for(aW=0;
aW<aQ[1];
aW++){a1=this._daylightSavingAdjust(new Date(f,a6,c.selectedDay));
g=" ui-corner-all";
aq="";
if(aD){aq+="<div class='ui-datepicker-group";
if(aQ[1]>1){switch(aW){case 0:aq+=" ui-datepicker-group-first";
g=" ui-corner-"+(aE?"right":"left");
break;
case aQ[1]-1:aq+=" ui-datepicker-group-last";
g=" ui-corner-"+(aE?"left":"right");
break;
default:aq+=" ui-datepicker-group-middle";
g="";
break
}}aq+="'>"
}aq+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+g+"'>"+(/all|left/.test(g)&&aI===0?(aE?a2:ak):"")+(/all|right/.test(g)&&aI===0?(aE?ak:a2):"")+this._generateMonthYearHeader(c,a6,f,a0,aP,aI>0||aW>0,aU,a5)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
an=(ax?"<th class='ui-datepicker-week-col'>"+this._get(c,"weekHeader")+"</th>":"");
for(av=0;
av<7;
av++){ap=(av+aw)%7;
an+="<th"+((av+aw+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+aV[ap]+"'>"+aT[ap]+"</span></th>"
}aq+=an+"</tr></thead><tbody>";
aY=this._getDaysInMonth(f,a6);
if(f===c.selectedYear&&a6===c.selectedMonth){c.selectedDay=Math.min(c.selectedDay,aY)
}aC=(this._getFirstDayOfMonth(f,a6)-aw+7)%7;
aS=Math.ceil((aC+aY)/7);
d=(aD?this.maxRows>aS?this.maxRows:aS:aS);
this.maxRows=d;
a=this._daylightSavingAdjust(new Date(f,a6,1-aC));
for(a3=0;
a3<d;
a3++){aq+="<tr>";
aK=(!ax?"":"<td class='ui-datepicker-week-col'>"+this._get(c,"calculateWeek")(a)+"</td>");
for(av=0;
av<7;
av++){aB=(aN?aN.apply((c.input?c.input[0]:null),[a]):[true,""]);
ar=(a.getMonth()!==a6);
aR=(ar&&!aG)||!aB[0]||(a0&&a<a0)||(aP&&a>aP);
aK+="<td class='"+((av+aw+6)%7>=5?" ui-datepicker-week-end":"")+(ar?" ui-datepicker-other-month":"")+((a.getTime()===a1.getTime()&&a6===c.selectedMonth&&c._keyEvent)||(aH.getTime()===a.getTime()&&aH.getTime()===a1.getTime())?" "+this._dayOverClass:"")+(aR?" "+this._unselectableClass+" ui-state-disabled":"")+(ar&&!aX?"":" "+aB[1]+(a.getTime()===a4.getTime()?" "+this._currentClass:"")+(a.getTime()===aJ.getTime()?" ui-datepicker-today":""))+"'"+((!ar||aX)&&aB[2]?" title='"+aB[2].replace(/'/g,"&#39;")+"'":"")+(aR?"":" data-handler='selectDay' data-event='click' data-month='"+a.getMonth()+"' data-year='"+a.getFullYear()+"'")+">"+(ar&&!aX?"&#xa0;":(aR?"<span class='ui-state-default'>"+a.getDate()+"</span>":"<a class='ui-state-default"+(a.getTime()===aJ.getTime()?" ui-state-highlight":"")+(a.getTime()===a4.getTime()?" ui-state-active":"")+(ar?" ui-priority-secondary":"")+"' href='#'>"+a.getDate()+"</a>"))+"</td>";
a.setDate(a.getDate()+1);
a=this._daylightSavingAdjust(a)
}aq+=aK+"</tr>"
}a6++;
if(a6>11){a6=0;
f++
}aq+="</tbody></table>"+(aD?"</div>"+((aQ[0]>0&&aW===aQ[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
ay+=aq
}am+=ay
}am+=aF;
c._keyEvent=false;
return am
},_generateMonthYearHeader:function(L,N,g,J,D,f,H,P){var b,O,a,d,K,e,C,I,M=this._get(L,"changeMonth"),G=this._get(L,"changeYear"),F=this._get(L,"showMonthAfterYear"),E="<div class='ui-datepicker-title'>",c="";
if(f||!M){c+="<span class='ui-datepicker-month'>"+H[N]+"</span>"
}else{b=(J&&J.getFullYear()===g);
O=(D&&D.getFullYear()===g);
c+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(a=0;
a<12;
a++){if((!b||a>=J.getMonth())&&(!O||a<=D.getMonth())){c+="<option value='"+a+"'"+(a===N?" selected='selected'":"")+">"+P[a]+"</option>"
}}c+="</select>"
}if(!F){E+=c+(f||!(M&&G)?"&#xa0;":"")
}if(!L.yearshtml){L.yearshtml="";
if(f||!G){E+="<span class='ui-datepicker-year'>"+g+"</span>"
}else{d=this._get(L,"yearRange").split(":");
K=new Date().getFullYear();
e=function(o){var p=(o.match(/c[+\-].*/)?g+parseInt(o.substring(1),10):(o.match(/[+\-].*/)?K+parseInt(o,10):parseInt(o,10)));
return(isNaN(p)?K:p)
};
C=e(d[0]);
I=Math.max(C,e(d[1]||""));
C=(J?Math.max(C,J.getFullYear()):C);
I=(D?Math.min(I,D.getFullYear()):I);
L.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;
C<=I;
C++){L.yearshtml+="<option value='"+C+"'"+(C===g?" selected='selected'":"")+">"+C+"</option>"
}L.yearshtml+="</select>";
E+=L.yearshtml;
L.yearshtml=null
}}E+=this._get(L,"yearSuffix");
if(F){E+=(f||!(M&&G)?"&#xa0;":"")+c
}E+="</div>";
return E
},_adjustInstDate:function(c,g,a){var d=c.drawYear+(a==="Y"?g:0),b=c.drawMonth+(a==="M"?g:0),f=Math.min(c.selectedDay,this._getDaysInMonth(d,b))+(a==="D"?g:0),e=this._restrictMinMax(c,this._daylightSavingAdjust(new Date(d,b,f)));
c.selectedDay=e.getDate();
c.drawMonth=c.selectedMonth=e.getMonth();
c.drawYear=c.selectedYear=e.getFullYear();
if(a==="M"||a==="Y"){this._notifyChange(c)
}},_restrictMinMax:function(b,d){var c=this._getMinMaxDate(b,"min"),a=this._getMinMaxDate(b,"max"),e=(c&&d<c?c:d);
return(a&&e>a?a:e)
},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");
if(b){b.apply((a.input?a.input[0]:null),[a.selectedYear,a.selectedMonth+1,a])
}},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");
return(b==null?[1,1]:(typeof b==="number"?[1,b]:b))
},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)
},_getDaysInMonth:function(b,a){return 32-this._daylightSavingAdjust(new Date(b,a,32)).getDate()
},_getFirstDayOfMonth:function(b,a){return new Date(b,a,1).getDay()
},_canAdjustMonth:function(c,a,d,b){var f=this._getNumberOfMonths(c),e=this._daylightSavingAdjust(new Date(d,b+(a<0?a:f[0]*f[1]),1));
if(a<0){e.setDate(this._getDaysInMonth(e.getFullYear(),e.getMonth()))
}return this._isInRange(c,e)
},_isInRange:function(e,g){var q,b,f=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),a=null,d=null,c=this._get(e,"yearRange");
if(c){q=c.split(":");
b=new Date().getFullYear();
a=parseInt(q[0],10);
d=parseInt(q[1],10);
if(q[0].match(/[+\-].*/)){a+=b
}if(q[1].match(/[+\-].*/)){d+=b
}}return((!f||g.getTime()>=f.getTime())&&(!r||g.getTime()<=r.getTime())&&(!a||g.getFullYear()>=a)&&(!d||g.getFullYear()<=d))
},_getFormatConfig:function(b){var a=this._get(b,"shortYearCutoff");
a=(typeof a!=="string"?a:new Date().getFullYear()%100+parseInt(a,10));
return{shortYearCutoff:a,dayNamesShort:this._get(b,"dayNamesShort"),dayNames:this._get(b,"dayNames"),monthNamesShort:this._get(b,"monthNamesShort"),monthNames:this._get(b,"monthNames")}
},_formatDate:function(b,e,a,c){if(!e){b.currentDay=b.selectedDay;
b.currentMonth=b.selectedMonth;
b.currentYear=b.selectedYear
}var d=(e?(typeof e==="object"?e:this._daylightSavingAdjust(new Date(c,a,e))):this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay)));
return this.formatDate(this._get(b,"dateFormat"),d,this._getFormatConfig(b))
}});
function m(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return a.delegate(b,"mouseout",function(){l(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){l(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){l(this).removeClass("ui-datepicker-next-hover")
}}).delegate(b,"mouseover",function(){if(!l.datepicker._isDisabledDatepicker(n.inline?a.parent()[0]:n.input[0])){l(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
l(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){l(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){l(this).addClass("ui-datepicker-next-hover")
}}})
}function i(a,b){l.extend(a,b);
for(var c in b){if(b[c]==null){a[c]=b[c]
}}return a
}l.fn.datepicker=function(a){if(!this.length){return this
}if(!l.datepicker.initialized){l(document).mousedown(l.datepicker._checkExternalClick);
l.datepicker.initialized=true
}if(l("#"+l.datepicker._mainDivId).length===0){l("body").append(l.datepicker.dpDiv)
}var b=Array.prototype.slice.call(arguments,1);
if(typeof a==="string"&&(a==="isDisabled"||a==="getDate"||a==="widget")){return l.datepicker["_"+a+"Datepicker"].apply(l.datepicker,[this[0]].concat(b))
}if(a==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return l.datepicker["_"+a+"Datepicker"].apply(l.datepicker,[this[0]].concat(b))
}return this.each(function(){typeof a==="string"?l.datepicker["_"+a+"Datepicker"].apply(l.datepicker,[this].concat(b)):l.datepicker._attachDatepicker(this,a)
})
};
l.datepicker=new h();
l.datepicker.initialized=false;
l.datepicker.uuid=new Date().getTime();
l.datepicker.version="1.10.4"
})(jQuery);
(function(h,g){var f={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},e={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
h.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(a){var b=h(this).css(a).offset().top;
if(b<0){h(this).css("top",a.top-b)
}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};
this.originalTitle=this.element.attr("title");
this.options.title=this.options.title||this.originalTitle;
this._createWrapper();
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&h.fn.draggable){this._makeDraggable()
}if(this.options.resizable&&h.fn.resizable){this._makeResizable()
}this._isOpen=false
},_init:function(){if(this.options.autoOpen){this.open()
}},_appendTo:function(){var a=this.options.appendTo;
if(a&&(a.jquery||a.nodeType)){return h(a)
}return this.document.find(a||"body").eq(0)
},_destroy:function(){var a,b=this.originalPosition;
this._destroyOverlay();
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
this.uiDialog.stop(true,true).remove();
if(this.originalTitle){this.element.attr("title",this.originalTitle)
}a=b.parent.children().eq(b.index);
if(a.length&&a[0]!==this.element[0]){a.before(this.element)
}else{b.parent.append(this.element)
}},widget:function(){return this.uiDialog
},disable:h.noop,enable:h.noop,close:function(a){var b,c=this;
if(!this._isOpen||this._trigger("beforeClose",a)===false){return
}this._isOpen=false;
this._destroyOverlay();
if(!this.opener.filter(":focusable").focus().length){try{b=this.document[0].activeElement;
if(b&&b.nodeName.toLowerCase()!=="body"){h(b).blur()
}}catch(d){}}this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",a)
})
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(a,c){var b=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
if(b&&!c){this._trigger("focus",a)
}return b
},open:function(){var a=this;
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()
}return
}this._isOpen=true;
this.opener=h(this.document[0].activeElement);
this._size();
this._position();
this._createOverlay();
this._moveToTop(null,true);
this._show(this.uiDialog,this.options.show,function(){a._focusTabbable();
a._trigger("focus")
});
this._trigger("open")
},_focusTabbable:function(){var a=this.element.find("[autofocus]");
if(!a.length){a=this.element.find(":tabbable")
}if(!a.length){a=this.uiDialogButtonPane.find(":tabbable")
}if(!a.length){a=this.uiDialogTitlebarClose.filter(":tabbable")
}if(!a.length){a=this.uiDialog
}a.eq(0).focus()
},_keepFocus:function(b){function a(){var c=this.document[0].activeElement,d=this.uiDialog[0]===c||h.contains(this.uiDialog[0],c);
if(!d){this._focusTabbable()
}}b.preventDefault();
a.call(this);
this._delay(a)
},_createWrapper:function(){this.uiDialog=h("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());
this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===h.ui.keyCode.ESCAPE){b.preventDefault();
this.close(b);
return
}if(b.keyCode!==h.ui.keyCode.TAB){return
}var c=this.uiDialog.find(":tabbable"),a=c.filter(":first"),d=c.filter(":last");
if((b.target===d[0]||b.target===this.uiDialog[0])&&!b.shiftKey){a.focus(1);
b.preventDefault()
}else{if((b.target===a[0]||b.target===this.uiDialog[0])&&b.shiftKey){d.focus(1);
b.preventDefault()
}}},mousedown:function(a){if(this._moveToTop(a)){this._focusTabbable()
}}});
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
}},_createTitlebar:function(){var a;
this.uiDialogTitlebar=h("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
this._on(this.uiDialogTitlebar,{mousedown:function(b){if(!h(b.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()
}}});
this.uiDialogTitlebarClose=h("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
this._on(this.uiDialogTitlebarClose,{click:function(b){b.preventDefault();
this.close(b)
}});
a=h("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
this._title(a);
this.uiDialog.attr({"aria-labelledby":a.attr("id")})
},_title:function(a){if(!this.options.title){a.html("&#160;")
}a.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=h("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
this.uiButtonSet=h("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
this._createButtons()
},_createButtons:function(){var a=this,b=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if(h.isEmptyObject(b)||(h.isArray(b)&&!b.length)){this.uiDialog.removeClass("ui-dialog-buttons");
return
}h.each(b,function(l,k){var d,c;
k=h.isFunction(k)?{click:k,text:l}:k;
k=h.extend({type:"button"},k);
d=k.click;
k.click=function(){d.apply(a.element[0],arguments)
};
c={icons:k.icons,text:k.showText};
delete k.icons;
delete k.showText;
h("<button></button>",k).button(c).appendTo(a.uiButtonSet)
});
this.uiDialog.addClass("ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog)
},_makeDraggable:function(){var a=this,b=this.options;
function c(d){return{position:d.position,offset:d.offset}
}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(j,d){h(this).addClass("ui-dialog-dragging");
a._blockFrames();
a._trigger("dragStart",j,c(d))
},drag:function(j,d){a._trigger("drag",j,c(d))
},stop:function(j,d){b.position=[d.position.left-a.document.scrollLeft(),d.position.top-a.document.scrollTop()];
h(this).removeClass("ui-dialog-dragging");
a._unblockFrames();
a._trigger("dragStop",j,c(d))
}})
},_makeResizable:function(){var a=this,c=this.options,b=c.resizable,l=this.uiDialog.css("position"),d=typeof b==="string"?b:"n,e,s,w,se,sw,ne,nw";
function k(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}
}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:c.maxWidth,maxHeight:c.maxHeight,minWidth:c.minWidth,minHeight:this._minHeight(),handles:d,start:function(j,i){h(this).addClass("ui-dialog-resizing");
a._blockFrames();
a._trigger("resizeStart",j,k(i))
},resize:function(j,i){a._trigger("resize",j,k(i))
},stop:function(j,i){c.height=h(this).height();
c.width=h(this).width();
h(this).removeClass("ui-dialog-resizing");
a._unblockFrames();
a._trigger("resizeStop",j,k(i))
}}).css("position",l)
},_minHeight:function(){var a=this.options;
return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)
},_position:function(){var a=this.uiDialog.is(":visible");
if(!a){this.uiDialog.show()
}this.uiDialog.position(this.options.position);
if(!a){this.uiDialog.hide()
}},_setOptions:function(b){var a=this,c=false,d={};
h.each(b,function(l,k){a._setOption(l,k);
if(l in f){c=true
}if(l in e){d[l]=k
}});
if(c){this._size();
this._position()
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",d)
}},_setOption:function(c,b){var d,a,j=this.uiDialog;
if(c==="dialogClass"){j.removeClass(this.options.dialogClass).addClass(b)
}if(c==="disabled"){return
}this._super(c,b);
if(c==="appendTo"){this.uiDialog.appendTo(this._appendTo())
}if(c==="buttons"){this._createButtons()
}if(c==="closeText"){this.uiDialogTitlebarClose.button({label:""+b})
}if(c==="draggable"){d=j.is(":data(ui-draggable)");
if(d&&!b){j.draggable("destroy")
}if(!d&&b){this._makeDraggable()
}}if(c==="position"){this._position()
}if(c==="resizable"){a=j.is(":data(ui-resizable)");
if(a&&!b){j.resizable("destroy")
}if(a&&typeof b==="string"){j.resizable("option","handles",b)
}if(!a&&b!==false){this._makeResizable()
}}if(c==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
}},_size:function(){var d,b,a,c=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});
if(c.minWidth>c.width){c.width=c.minWidth
}d=this.uiDialog.css({height:"auto",width:c.width}).outerHeight();
b=Math.max(0,c.minHeight-d);
a=typeof c.maxHeight==="number"?Math.max(0,c.maxHeight-d):"none";
if(c.height==="auto"){this.element.css({minHeight:b,maxHeight:a,height:"auto"})
}else{this.element.height(Math.max(0,c.height-d))
}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())
}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var a=h(this);
return h("<div>").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(a.offset())[0]
})
},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();
delete this.iframeBlocks
}},_allowInteraction:function(a){if(h(a.target).closest(".ui-dialog").length){return true
}return !!h(a.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(!this.options.modal){return
}var a=this,b=this.widgetFullName;
if(!h.ui.dialog.overlayInstances){this._delay(function(){if(h.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(c){if(!a._allowInteraction(c)){c.preventDefault();
h(".ui-dialog:visible:last .ui-dialog-content").data(b)._focusTabbable()
}})
}})
}this.overlay=h("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
this._on(this.overlay,{mousedown:"_keepFocus"});
h.ui.dialog.overlayInstances++
},_destroyOverlay:function(){if(!this.options.modal){return
}if(this.overlay){h.ui.dialog.overlayInstances--;
if(!h.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog")
}this.overlay.remove();
this.overlay=null
}}});
h.ui.dialog.overlayInstances=0;
if(h.uiBackCompat!==false){h.widget("ui.dialog",h.ui.dialog,{_position:function(){var c=this.options.position,b=[],a=[0,0],d;
if(c){if(typeof c==="string"||(typeof c==="object"&&"0" in c)){b=c.split?c.split(" "):[c[0],c[1]];
if(b.length===1){b[1]=b[0]
}h.each(["left","top"],function(i,l){if(+b[i]===b[i]){a[i]=b[i];
b[i]=l
}});
c={my:b[0]+(a[0]<0?a[0]:"+"+a[0])+" "+b[1]+(a[1]<0?a[1]:"+"+a[1]),at:b.join(" ")}
}c=h.extend({},h.ui.dialog.prototype.options.position,c)
}else{c=h.ui.dialog.prototype.options.position
}d=this.uiDialog.is(":visible");
if(!d){this.uiDialog.show()
}this.uiDialog.position(c);
if(!d){this.uiDialog.hide()
}}})
}}(jQuery));
(function(d,c){d.widget("ui.draggable",d.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}if(this.options.addClasses){this.element.addClass("ui-draggable")
}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()
},_mouseCapture:function(b){var a=this.options;
if(this.helper||a.disabled||d(b.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(b);
if(!this.handle){return false
}d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(d(this).offset()).appendTo("body")
});
return true
},_mouseStart:function(b){var a=this.options;
this.helper=this._createHelper(b);
this.helper.addClass("ui-draggable-dragging");
this._cacheHelperProportions();
if(d.ui.ddmanager){d.ui.ddmanager.current=this
}this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offsetParent=this.helper.offsetParent();
this.offsetParentCssPosition=this.offsetParent.css("position");
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.offset.scroll=false;
d.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(b);
this.originalPageX=b.pageX;
this.originalPageY=b.pageY;
(a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt));
this._setContainment();
if(this._trigger("start",b)===false){this._clear();
return false
}this._cacheHelperProportions();
if(d.ui.ddmanager&&!a.dropBehaviour){d.ui.ddmanager.prepareOffsets(this,b)
}this._mouseDrag(b,true);
if(d.ui.ddmanager){d.ui.ddmanager.dragStart(this,b)
}return true
},_mouseDrag:function(f,a){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()
}this.position=this._generatePosition(f);
this.positionAbs=this._convertPositionTo("absolute");
if(!a){var b=this._uiHash();
if(this._trigger("drag",f,b)===false){this._mouseUp({});
return false
}this.position=b.position
}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}if(d.ui.ddmanager){d.ui.ddmanager.drag(this,f)
}return false
},_mouseStop:function(b){var f=this,a=false;
if(d.ui.ddmanager&&!this.options.dropBehaviour){a=d.ui.ddmanager.drop(this,b)
}if(this.dropped){a=this.dropped;
this.dropped=false
}if(this.options.helper==="original"&&!d.contains(this.element[0].ownerDocument,this.element[0])){return false
}if((this.options.revert==="invalid"&&!a)||(this.options.revert==="valid"&&a)||this.options.revert===true||(d.isFunction(this.options.revert)&&this.options.revert.call(this.element,a))){d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(f._trigger("stop",b)!==false){f._clear()
}})
}else{if(this._trigger("stop",b)!==false){this._clear()
}}return false
},_mouseUp:function(a){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});
if(d.ui.ddmanager){d.ui.ddmanager.dragStop(this,a)
}return d.ui.mouse.prototype._mouseUp.call(this,a)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()
}return this
},_getHandle:function(a){return this.options.handle?!!d(a.target).closest(this.element.find(this.options.handle)).length:true
},_createHelper:function(b){var a=this.options,f=d.isFunction(a.helper)?d(a.helper.apply(this.element[0],[b])):(a.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!f.parents("body").length){f.appendTo((a.appendTo==="parent"?this.element[0].parentNode:a.appendTo))
}if(f[0]!==this.element[0]&&!(/(fixed|absolute)/).test(f.css("position"))){f.css("position","absolute")
}return f
},_adjustOffsetFromHelper:function(a){if(typeof a==="string"){a=a.split(" ")
}if(d.isArray(a)){a={left:+a[0],top:+a[1]||0}
}if("left" in a){this.offset.click.left=a.left+this.margins.left
}if("right" in a){this.offset.click.left=this.helperProportions.width-a.right+this.margins.left
}if("top" in a){this.offset.click.top=a.top+this.margins.top
}if("bottom" in a){this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top
}},_getParentOffset:function(){var a=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop()
}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&d.ui.ie)){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var a=this.element.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var h,a,i,b=this.options;
if(!b.containment){this.containment=null;
return
}if(b.containment==="window"){this.containment=[d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,d(window).scrollLeft()+d(window).width()-this.helperProportions.width-this.margins.left,d(window).scrollTop()+(d(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(b.containment==="document"){this.containment=[0,0,d(document).width()-this.helperProportions.width-this.margins.left,(d(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
return
}if(b.containment.constructor===Array){this.containment=b.containment;
return
}if(b.containment==="parent"){b.containment=this.helper[0].parentNode
}a=d(b.containment);
i=a[0];
if(!i){return
}h=a.css("overflow")!=="hidden";
this.containment=[(parseInt(a.css("borderLeftWidth"),10)||0)+(parseInt(a.css("paddingLeft"),10)||0),(parseInt(a.css("borderTopWidth"),10)||0)+(parseInt(a.css("paddingTop"),10)||0),(h?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(a.css("borderRightWidth"),10)||0)-(parseInt(a.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(h?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(a.css("borderBottomWidth"),10)||0)-(parseInt(a.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=a
},_convertPositionTo:function(b,a){if(!a){a=this.position
}var h=b==="absolute"?1:-1,i=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;
if(!this.offset.scroll){this.offset.scroll={top:i.scrollTop(),left:i.scrollLeft()}
}return{top:(a.top+this.offset.relative.top*h+this.offset.parent.top*h-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*h)),left:(a.left+this.offset.relative.left*h+this.offset.parent.left*h-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*h))}
},_generatePosition:function(q){var r,l,b,o,p=this.options,a=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&d.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,m=q.pageX,n=q.pageY;
if(!this.offset.scroll){this.offset.scroll={top:a.scrollTop(),left:a.scrollLeft()}
}if(this.originalPosition){if(this.containment){if(this.relative_container){l=this.relative_container.offset();
r=[this.containment[0]+l.left,this.containment[1]+l.top,this.containment[2]+l.left,this.containment[3]+l.top]
}else{r=this.containment
}if(q.pageX-this.offset.click.left<r[0]){m=r[0]+this.offset.click.left
}if(q.pageY-this.offset.click.top<r[1]){n=r[1]+this.offset.click.top
}if(q.pageX-this.offset.click.left>r[2]){m=r[2]+this.offset.click.left
}if(q.pageY-this.offset.click.top>r[3]){n=r[3]+this.offset.click.top
}}if(p.grid){b=p.grid[1]?this.originalPageY+Math.round((n-this.originalPageY)/p.grid[1])*p.grid[1]:this.originalPageY;
n=r?((b-this.offset.click.top>=r[1]||b-this.offset.click.top>r[3])?b:((b-this.offset.click.top>=r[1])?b-p.grid[1]:b+p.grid[1])):b;
o=p.grid[0]?this.originalPageX+Math.round((m-this.originalPageX)/p.grid[0])*p.grid[0]:this.originalPageX;
m=r?((o-this.offset.click.left>=r[0]||o-this.offset.click.left>r[2])?o:((o-this.offset.click.left>=r[0])?o-p.grid[0]:o+p.grid[0])):o
}}return{top:(n-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)),left:(m-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;
this.cancelHelperRemoval=false
},_trigger:function(f,b,a){a=a||this._uiHash();
d.ui.plugin.call(this,f,[b,a]);
if(f==="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return d.Widget.prototype._trigger.call(this,f,b,a)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});
d.ui.plugin.add("draggable","connectToSortable",{start:function(i,b){var h=d(this).data("ui-draggable"),a=h.options,j=d.extend({},b,{item:h.element});
h.sortables=[];
d(a.connectToSortable).each(function(){var e=d.data(this,"ui-sortable");
if(e&&!e.options.disabled){h.sortables.push({instance:e,shouldRevert:e.options.revert});
e.refreshPositions();
e._trigger("activate",i,j)
}})
},stop:function(g,a){var b=d(this).data("ui-draggable"),h=d.extend({},a,{item:b.element});
d.each(b.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;
b.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){this.instance.options.revert=this.shouldRevert
}this.instance._mouseStop(g);
this.instance.options.helper=this.instance.options._helper;
if(b.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",g,h)
}})
},drag:function(g,a){var b=d(this).data("ui-draggable"),h=this;
d.each(b.sortables,function(){var f=false,e=this;
this.instance.positionAbs=b.positionAbs;
this.instance.helperProportions=b.helperProportions;
this.instance.offset.click=b.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){f=true;
d.each(b.sortables,function(){this.instance.positionAbs=b.positionAbs;
this.instance.helperProportions=b.helperProportions;
this.instance.offset.click=b.offset.click;
if(this!==e&&this.instance._intersectsWith(this.instance.containerCache)&&d.contains(e.instance.element[0],this.instance.element[0])){f=false
}return f
})
}if(f){if(!this.instance.isOver){this.instance.isOver=1;
this.instance.currentItem=d(h).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return a.helper[0]
};
g.target=this.instance.currentItem[0];
this.instance._mouseCapture(g,true);
this.instance._mouseStart(g,true,true);
this.instance.offset.click.top=b.offset.click.top;
this.instance.offset.click.left=b.offset.click.left;
this.instance.offset.parent.left-=b.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=b.offset.parent.top-this.instance.offset.parent.top;
b._trigger("toSortable",g);
b.dropped=this.instance.element;
b.currentItem=b.element;
this.instance.fromOutside=b
}if(this.instance.currentItem){this.instance._mouseDrag(g)
}}else{if(this.instance.isOver){this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",g,this.instance._uiHash(this.instance));
this.instance._mouseStop(g,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){this.instance.placeholder.remove()
}b._trigger("fromSortable",g);
b.dropped=false
}}})
}});
d.ui.plugin.add("draggable","cursor",{start:function(){var b=d("body"),a=d(this).data("ui-draggable").options;
if(b.css("cursor")){a._cursor=b.css("cursor")
}b.css("cursor",a.cursor)
},stop:function(){var a=d(this).data("ui-draggable").options;
if(a._cursor){d("body").css("cursor",a._cursor)
}}});
d.ui.plugin.add("draggable","opacity",{start:function(g,b){var h=d(b.helper),a=d(this).data("ui-draggable").options;
if(h.css("opacity")){a._opacity=h.css("opacity")
}h.css("opacity",a.opacity)
},stop:function(f,b){var a=d(this).data("ui-draggable").options;
if(a._opacity){d(b.helper).css("opacity",a._opacity)
}}});
d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("ui-draggable");
if(a.scrollParent[0]!==document&&a.scrollParent[0].tagName!=="HTML"){a.overflowOffset=a.scrollParent.offset()
}},drag:function(b){var g=d(this).data("ui-draggable"),a=g.options,h=false;
if(g.scrollParent[0]!==document&&g.scrollParent[0].tagName!=="HTML"){if(!a.axis||a.axis!=="x"){if((g.overflowOffset.top+g.scrollParent[0].offsetHeight)-b.pageY<a.scrollSensitivity){g.scrollParent[0].scrollTop=h=g.scrollParent[0].scrollTop+a.scrollSpeed
}else{if(b.pageY-g.overflowOffset.top<a.scrollSensitivity){g.scrollParent[0].scrollTop=h=g.scrollParent[0].scrollTop-a.scrollSpeed
}}}if(!a.axis||a.axis!=="y"){if((g.overflowOffset.left+g.scrollParent[0].offsetWidth)-b.pageX<a.scrollSensitivity){g.scrollParent[0].scrollLeft=h=g.scrollParent[0].scrollLeft+a.scrollSpeed
}else{if(b.pageX-g.overflowOffset.left<a.scrollSensitivity){g.scrollParent[0].scrollLeft=h=g.scrollParent[0].scrollLeft-a.scrollSpeed
}}}}else{if(!a.axis||a.axis!=="x"){if(b.pageY-d(document).scrollTop()<a.scrollSensitivity){h=d(document).scrollTop(d(document).scrollTop()-a.scrollSpeed)
}else{if(d(window).height()-(b.pageY-d(document).scrollTop())<a.scrollSensitivity){h=d(document).scrollTop(d(document).scrollTop()+a.scrollSpeed)
}}}if(!a.axis||a.axis!=="y"){if(b.pageX-d(document).scrollLeft()<a.scrollSensitivity){h=d(document).scrollLeft(d(document).scrollLeft()-a.scrollSpeed)
}else{if(d(window).width()-(b.pageX-d(document).scrollLeft())<a.scrollSensitivity){h=d(document).scrollLeft(d(document).scrollLeft()+a.scrollSpeed)
}}}}if(h!==false&&d.ui.ddmanager&&!a.dropBehaviour){d.ui.ddmanager.prepareOffsets(g,b)
}}});
d.ui.plugin.add("draggable","snap",{start:function(){var b=d(this).data("ui-draggable"),a=b.options;
b.snapElements=[];
d(a.snap.constructor!==String?(a.snap.items||":data(ui-draggable)"):a.snap).each(function(){var g=d(this),h=g.offset();
if(this!==b.element[0]){b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:h.top,left:h.left})
}})
},drag:function(r,D){var M,a,H,G,t,E,F,C,o,I,J=d(this).data("ui-draggable"),B=J.options,b=B.snapTolerance,i=D.offset.left,l=i+J.helperProportions.width,K=D.offset.top,L=K+J.helperProportions.height;
for(o=J.snapElements.length-1;
o>=0;
o--){t=J.snapElements[o].left;
E=t+J.snapElements[o].width;
F=J.snapElements[o].top;
C=F+J.snapElements[o].height;
if(l<t-b||i>E+b||L<F-b||K>C+b||!d.contains(J.snapElements[o].item.ownerDocument,J.snapElements[o].item)){if(J.snapElements[o].snapping){(J.options.snap.release&&J.options.snap.release.call(J.element,r,d.extend(J._uiHash(),{snapItem:J.snapElements[o].item})))
}J.snapElements[o].snapping=false;
continue
}if(B.snapMode!=="inner"){M=Math.abs(F-L)<=b;
a=Math.abs(C-K)<=b;
H=Math.abs(t-l)<=b;
G=Math.abs(E-i)<=b;
if(M){D.position.top=J._convertPositionTo("relative",{top:F-J.helperProportions.height,left:0}).top-J.margins.top
}if(a){D.position.top=J._convertPositionTo("relative",{top:C,left:0}).top-J.margins.top
}if(H){D.position.left=J._convertPositionTo("relative",{top:0,left:t-J.helperProportions.width}).left-J.margins.left
}if(G){D.position.left=J._convertPositionTo("relative",{top:0,left:E}).left-J.margins.left
}}I=(M||a||H||G);
if(B.snapMode!=="outer"){M=Math.abs(F-K)<=b;
a=Math.abs(C-L)<=b;
H=Math.abs(t-i)<=b;
G=Math.abs(E-l)<=b;
if(M){D.position.top=J._convertPositionTo("relative",{top:F,left:0}).top-J.margins.top
}if(a){D.position.top=J._convertPositionTo("relative",{top:C-J.helperProportions.height,left:0}).top-J.margins.top
}if(H){D.position.left=J._convertPositionTo("relative",{top:0,left:t}).left-J.margins.left
}if(G){D.position.left=J._convertPositionTo("relative",{top:0,left:E-J.helperProportions.width}).left-J.margins.left
}}if(!J.snapElements[o].snapping&&(M||a||H||G||I)){(J.options.snap.snap&&J.options.snap.snap.call(J.element,r,d.extend(J._uiHash(),{snapItem:J.snapElements[o].item})))
}J.snapElements[o].snapping=(M||a||H||G||I)
}}});
d.ui.plugin.add("draggable","stack",{start:function(){var f,a=this.data("ui-draggable").options,b=d.makeArray(d(a.stack)).sort(function(e,h){return(parseInt(d(e).css("zIndex"),10)||0)-(parseInt(d(h).css("zIndex"),10)||0)
});
if(!b.length){return
}f=parseInt(d(b[0]).css("zIndex"),10)||0;
d(b).each(function(e){d(this).css("zIndex",f+e)
});
this.css("zIndex",(f+b.length))
}});
d.ui.plugin.add("draggable","zIndex",{start:function(g,b){var h=d(b.helper),a=d(this).data("ui-draggable").options;
if(h.css("zIndex")){a._zIndex=h.css("zIndex")
}h.css("zIndex",a.zIndex)
},stop:function(f,b){var a=d(this).data("ui-draggable").options;
if(a._zIndex){d(b.helper).css("zIndex",a._zIndex)
}}})
})(jQuery);
(function(d,f){function e(b,c,a){return(b>c)&&(b<(c+a))
}d.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var b,a=this.options,c=a.accept;
this.isover=false;
this.isout=true;
this.accept=d.isFunction(c)?c:function(h){return h.is(c)
};
this.proportions=function(){if(arguments.length){b=arguments[0]
}else{return b?b:b={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
}};
d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];
d.ui.ddmanager.droppables[a.scope].push(this);
(a.addClasses&&this.element.addClass("ui-droppable"))
},_destroy:function(){var a=0,b=d.ui.ddmanager.droppables[this.options.scope];
for(;
a<b.length;
a++){if(b[a]===this){b.splice(a,1)
}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(b,a){if(b==="accept"){this.accept=d.isFunction(a)?a:function(c){return c.is(a)
}
}d.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(a){var b=d.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)
}if(b){this._trigger("activate",a,this.ui(b))
}},_deactivate:function(a){var b=d.ui.ddmanager.current;
if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(b){this._trigger("deactivate",a,this.ui(b))
}},_over:function(a){var b=d.ui.ddmanager.current;
if(!b||(b.currentItem||b.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",a,this.ui(b))
}},_out:function(a){var b=d.ui.ddmanager.current;
if(!b||(b.currentItem||b.element)[0]===this.element[0]){return
}if(this.accept.call(this.element[0],(b.currentItem||b.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",a,this.ui(b))
}},_drop:function(c,b){var h=b||d.ui.ddmanager.current,a=false;
if(!h||(h.currentItem||h.element)[0]===this.element[0]){return false
}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var g=d.data(this,"ui-droppable");
if(g.options.greedy&&!g.options.disabled&&g.options.scope===h.options.scope&&g.accept.call(g.element[0],(h.currentItem||h.element))&&d.ui.intersect(h,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){a=true;
return false
}});
if(a){return false
}if(this.accept.call(this.element[0],(h.currentItem||h.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("drop",c,this.ui(h));
return this.element
}return false
},ui:function(a){return{draggable:(a.currentItem||a.element),helper:a.helper,position:a.position,offset:a.positionAbs}
}});
d.ui.intersect=function(a,t,c){if(!t.offset){return false
}var v,u,x=(a.positionAbs||a.position.absolute).left,l=(a.positionAbs||a.position.absolute).top,y=x+a.helperProportions.width,r=l+a.helperProportions.height,w=t.offset.left,b=t.offset.top,z=w+t.proportions().width,s=b+t.proportions().height;
switch(c){case"fit":return(w<=x&&y<=z&&b<=l&&r<=s);
case"intersect":return(w<x+(a.helperProportions.width/2)&&y-(a.helperProportions.width/2)<z&&b<l+(a.helperProportions.height/2)&&r-(a.helperProportions.height/2)<s);
case"pointer":v=((a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left);
u=((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top);
return e(u,b,t.proportions().height)&&e(v,w,t.proportions().width);
case"touch":return((l>=b&&l<=s)||(r>=b&&r<=s)||(l<b&&r>s))&&((x>=w&&x<=z)||(y>=w&&y<=z)||(x<w&&y>z));
default:return false
}};
d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(i,b){var j,m,n=d.ui.ddmanager.droppables[i.options.scope]||[],c=b?b.type:null,a=(i.currentItem||i.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(j=0;
j<n.length;
j++){if(n[j].options.disabled||(i&&!n[j].accept.call(n[j].element[0],(i.currentItem||i.element)))){continue
}for(m=0;
m<a.length;
m++){if(a[m]===n[j].element[0]){n[j].proportions().height=0;
continue droppablesLoop
}}n[j].visible=n[j].element.css("display")!=="none";
if(!n[j].visible){continue
}if(c==="mousedown"){n[j]._activate.call(n[j],b)
}n[j].offset=n[j].element.offset();
n[j].proportions({width:n[j].element[0].offsetWidth,height:n[j].element[0].offsetHeight})
}},drop:function(c,b){var a=false;
d.each((d.ui.ddmanager.droppables[c.options.scope]||[]).slice(),function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&d.ui.intersect(c,this,this.options.tolerance)){a=this._drop.call(this,b)||a
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(c.currentItem||c.element))){this.isout=true;
this.isover=false;
this._deactivate.call(this,b)
}});
return a
},dragStart:function(b,a){b.element.parentsUntil("body").bind("scroll.droppable",function(){if(!b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}})
},drag:function(b,a){if(b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}d.each(d.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var k,m,n,l=d.ui.intersect(b,this,this.options.tolerance),c=!l&&this.isover?"isout":(l&&!this.isover?"isover":null);
if(!c){return
}if(this.options.greedy){m=this.options.scope;
n=this.element.parents(":data(ui-droppable)").filter(function(){return d.data(this,"ui-droppable").options.scope===m
});
if(n.length){k=d.data(n[0],"ui-droppable");
k.greedyChild=(c==="isover")
}}if(k&&c==="isover"){k.isover=false;
k.isout=true;
k._out.call(k,a)
}this[c]=true;
this[c==="isout"?"isover":"isout"]=false;
this[c==="isover"?"_over":"_out"].call(this,a);
if(k&&c==="isout"){k.isout=false;
k.isover=true;
k._over.call(k,a)
}})
},dragStop:function(b,a){b.element.parentsUntil("body").unbind("scroll.droppable");
if(!b.options.refreshPositions){d.ui.ddmanager.prepareOffsets(b,a)
}}}
})(jQuery);
(function(e,f){var d="ui-effects-";
e.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(a,A){var t="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",w=/^([\-+])=\s*(\d+\.?\d*)/,x=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(g){return[g[1],g[2],g[3],g[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(g){return[g[1]*2.55,g[2]*2.55,g[3]*2.55,g[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(g){return[parseInt(g[1],16),parseInt(g[2],16),parseInt(g[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(g){return[parseInt(g[1]+g[1],16),parseInt(g[2]+g[2],16),parseInt(g[3]+g[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(g){return[g[1],g[2]/100,g[3]/100,g[4]]
}}],z=a.Color=function(i,h,j,g){return new a.Color.fn.parse(i,h,j,g)
},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},b={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},c=z.support={},C=a("<p>")[0],D,s=a.each;
C.style.cssText="background-color:rgba(1,1,1,.5)";
c.rgba=C.style.backgroundColor.indexOf("rgba")>-1;
s(u,function(h,g){g.cache="_"+h;
g.props.alpha={idx:3,type:"percent",def:1}
});
function v(i,g,h){var j=b[g.type]||{};
if(i==null){return(h||!g.def)?null:g.def
}i=j.floor?~~i:parseFloat(i);
if(isNaN(i)){return g.def
}if(j.mod){return(i+j.mod)%j.mod
}return 0>i?0:j.max<i?j.max:i
}function y(i){var g=z(),h=g._rgba=[];
i=i.toLowerCase();
s(x,function(n,k){var j,o=k.re.exec(i),l=o&&k.parse(o),m=k.space||"rgba";
if(l){j=g[m](l);
g[u[m].cache]=j[u[m].cache];
h=g._rgba=j._rgba;
return false
}});
if(h.length){if(h.join()==="0,0,0,0"){a.extend(h,D.transparent)
}return g
}return D[i]
}z.fn=a.extend(z.prototype,{parse:function(m,h,l,g){if(m===A){this._rgba=[null,null,null,null];
return this
}if(m.jquery||m.nodeType){m=a(m).css(h);
h=A
}var i=this,j=a.type(m),k=this._rgba=[];
if(h!==A){m=[m,h,l,g];
j="array"
}if(j==="string"){return this.parse(y(m)||D._default)
}if(j==="array"){s(u.rgba.props,function(o,n){k[n.idx]=v(m[n.idx],n)
});
return this
}if(j==="object"){if(m instanceof z){s(u,function(o,n){if(m[n.cache]){i[n.cache]=m[n.cache].slice()
}})
}else{s(u,function(n,p){var o=p.cache;
s(p.props,function(r,q){if(!i[o]&&p.to){if(r==="alpha"||m[r]==null){return
}i[o]=p.to(i._rgba)
}i[o][q.idx]=v(m[r],q,true)
});
if(i[o]&&a.inArray(null,i[o].slice(0,3))<0){i[o][3]=1;
if(p.from){i._rgba=p.from(i[o])
}}})
}return this
}},is:function(h){var j=z(h),g=true,i=this;
s(u,function(l,n){var m,k=j[n.cache];
if(k){m=i[n.cache]||n.to&&n.to(i._rgba)||[];
s(n.props,function(o,p){if(k[p.idx]!=null){g=(k[p.idx]===m[p.idx]);
return g
}})
}return g
});
return g
},_space:function(){var h=[],g=this;
s(u,function(j,i){if(g[i.cache]){h.push(j)
}});
return h.pop()
},transition:function(k,m){var j=z(k),i=j._space(),h=u[i],g=this.alpha()===0?z("transparent"):this,n=g[h.cache]||h.to(g._rgba),l=n.slice();
j=j[h.cache];
s(h.props,function(r,p){var G=p.idx,H=n[G],o=j[G],q=b[p.type]||{};
if(o===null){return
}if(H===null){l[G]=o
}else{if(q.mod){if(o-H>q.mod/2){H+=q.mod
}else{if(H-o>q.mod/2){H-=q.mod
}}}l[G]=v((o-H)*m+H,p)
}});
return this[i](l)
},blend:function(g){if(this._rgba[3]===1){return this
}var h=this._rgba.slice(),i=h.pop(),j=z(g)._rgba;
return z(a.map(h,function(l,k){return(1-i)*j[k]+i*l
}))
},toRgbaString:function(){var g="rgba(",h=a.map(this._rgba,function(j,i){return j==null?(i>2?1:0):j
});
if(h[3]===1){h.pop();
g="rgb("
}return g+h.join()+")"
},toHslaString:function(){var g="hsla(",h=a.map(this.hsla(),function(j,i){if(j==null){j=i>2?1:0
}if(i&&i<3){j=Math.round(j*100)+"%"
}return j
});
if(h[3]===1){h.pop();
g="hsl("
}return g+h.join()+")"
},toHexString:function(i){var h=this._rgba.slice(),g=h.pop();
if(i){h.push(~~(g*255))
}return"#"+a.map(h,function(j){j=(j||0).toString(16);
return j.length===1?"0"+j:j
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
z.fn.parse.prototype=z.fn;
function B(g,h,i){i=(i+1)%1;
if(i*6<1){return g+(h-g)*i*6
}if(i*2<1){return h
}if(i*3<2){return g+(h-g)*((2/3)-i)*6
}return g
}u.hsla.to=function(o){if(o[0]==null||o[1]==null||o[2]==null){return[null,null,null,o[3]]
}var q=o[0]/255,l=o[1]/255,k=o[2]/255,i=o[3],j=Math.max(q,l,k),n=Math.min(q,l,k),h=j-n,g=j+n,p=g*0.5,m,r;
if(n===j){m=0
}else{if(q===j){m=(60*(l-k)/h)+360
}else{if(l===j){m=(60*(k-q)/h)+120
}else{m=(60*(q-l)/h)+240
}}}if(h===0){r=0
}else{if(p<=0.5){r=h/g
}else{r=h/(2-g)
}}return[Math.round(m)%360,r,p,i==null?1:i]
};
u.hsla.from=function(g){if(g[0]==null||g[1]==null||g[2]==null){return[null,null,null,g[3]]
}var h=g[0]/360,i=g[1],j=g[2],k=g[3],m=j<=0.5?j*(1+i):j+i-j*i,l=2*j-m;
return[Math.round(B(l,m,h+(1/3))*255),Math.round(B(l,m,h)*255),Math.round(B(l,m,h-(1/3))*255),k]
};
s(u,function(k,i){var j=i.props,l=i.cache,g=i.to,h=i.from;
z.fn[k]=function(o){if(g&&!this[l]){this[l]=g(this._rgba)
}if(o===A){return this[l].slice()
}var n,q=a.type(o),p=(q==="array"||q==="object")?o:arguments,m=this[l].slice();
s(j,function(H,r){var G=p[q==="object"?H:r.idx];
if(G==null){G=m[r.idx]
}m[r.idx]=v(G,r)
});
if(h){n=z(h(m));
n[l]=m;
return n
}else{return z(m)
}};
s(j,function(n,m){if(z.fn[n]){return
}z.fn[n]=function(r){var p=a.type(r),G=(n==="alpha"?(this._hsla?"hsla":"rgba"):k),H=this[G](),q=H[m.idx],o;
if(p==="undefined"){return q
}if(p==="function"){r=r.call(this,q);
p=a.type(r)
}if(r==null&&m.empty){return this
}if(p==="string"){o=w.exec(r);
if(o){r=q+parseFloat(o[2])*(o[1]==="+"?1:-1)
}}H[m.idx]=r;
return this[G](H)
}
})
});
z.hook=function(g){var h=g.split(" ");
s(h,function(j,i){a.cssHooks[i]={set:function(n,l){var k,p,m="";
if(l!=="transparent"&&(a.type(l)!=="string"||(k=y(l)))){l=z(k||l);
if(!c.rgba&&l._rgba[3]!==1){p=i==="backgroundColor"?n.parentNode:n;
while((m===""||m==="transparent")&&p&&p.style){try{m=a.css(p,"backgroundColor");
p=p.parentNode
}catch(o){}}l=l.blend(m&&m!=="transparent"?m:"_default")
}l=l.toRgbaString()
}try{n.style[i]=l
}catch(o){}}};
a.fx.step[i]=function(k){if(!k.colorInit){k.start=z(k.elem,i);
k.end=z(k.end);
k.colorInit=true
}a.cssHooks[i].set(k.elem,k.start.transition(k.end,k.pos))
}
})
};
z.hook(t);
a.cssHooks.borderColor={expand:function(g){var h={};
s(["Top","Right","Bottom","Left"],function(i,j){h["border"+j+"Color"]=g
});
return h
}};
D=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var c=["add","remove","toggle"],b={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(j,g){e.fx.step[g]=function(i){if(i.end!=="none"&&!i.setAttr||i.pos===1&&!i.setAttr){jQuery.style(i.elem,g,i.end);
i.setAttr=true
}}
});
function a(g){var o,p,n=g.ownerDocument.defaultView?g.ownerDocument.defaultView.getComputedStyle(g,null):g.currentStyle,m={};
if(n&&n.length&&n[0]&&n[n[0]]){p=n.length;
while(p--){o=n[p];
if(typeof n[o]==="string"){m[e.camelCase(o)]=n[o]
}}}else{for(o in n){if(typeof n[o]==="string"){m[o]=n[o]
}}}return m
}function h(p,n){var g={},o,m;
for(o in n){m=n[o];
if(p[o]!==m){if(!b[o]){if(e.fx.step[o]||!isNaN(parseFloat(m))){g[o]=m
}}}}return g
}if(!e.fn.addBack){e.fn.addBack=function(g){return this.add(g==null?this.prevObject:this.prevObject.filter(g))
}
}e.effects.animateClass=function(p,o,g,m){var n=e.speed(o,g,m);
return this.queue(function(){var k=e(this),i=k.attr("class")||"",l,j=n.children?k.find("*").addBack():k;
j=j.map(function(){var r=e(this);
return{el:r,start:a(this)}
});
l=function(){e.each(c,function(t,s){if(p[s]){k[s+"Class"](p[s])
}})
};
l();
j=j.map(function(){this.end=a(this.el[0]);
this.diff=h(this.start,this.end);
return this
});
k.attr("class",i);
j=j.map(function(){var t=this,v=e.Deferred(),u=e.extend({},n,{queue:false,complete:function(){v.resolve(t)
}});
this.el.animate(this.diff,u);
return v.promise()
});
e.when.apply(e,j.get()).done(function(){l();
e.each(arguments,function(){var r=this.el;
e.each(this.diff,function(q){r.css(q,"")
})
});
n.complete.call(k[0])
})
})
};
e.fn.extend({addClass:(function(g){return function(o,p,m,n){return p?e.effects.animateClass.call(this,{add:o},p,m,n):g.apply(this,arguments)
}
})(e.fn.addClass),removeClass:(function(g){return function(o,p,m,n){return arguments.length>1?e.effects.animateClass.call(this,{remove:o},p,m,n):g.apply(this,arguments)
}
})(e.fn.removeClass),toggleClass:(function(g){return function(p,q,r,n,o){if(typeof q==="boolean"||q===f){if(!r){return g.apply(this,arguments)
}else{return e.effects.animateClass.call(this,(q?{add:p}:{remove:p}),r,n,o)
}}else{return e.effects.animateClass.call(this,{toggle:p},q,r,n)
}}
})(e.fn.toggleClass),switchClass:function(p,n,o,g,m){return e.effects.animateClass.call(this,{add:n,remove:p},o,g,m)
}})
})();
(function(){e.extend(e.effects,{version:"1.10.4",save:function(i,c){for(var j=0;
j<c.length;
j++){if(c[j]!==null){i.data(d+c[j],i[0].style[c[j]])
}}},restore:function(k,c){var i,l;
for(l=0;
l<c.length;
l++){if(c[l]!==null){i=k.data(d+c[l]);
if(i===f){i=""
}k.css(c[l],i)
}}},setMode:function(h,c){if(c==="toggle"){c=h.is(":hidden")?"show":"hide"
}return c
},getBaseline:function(k,j){var c,l;
switch(k[0]){case"top":c=0;
break;
case"middle":c=0.5;
break;
case"bottom":c=1;
break;
default:c=k[0]/j.height
}switch(k[1]){case"left":l=0;
break;
case"center":l=0.5;
break;
case"right":l=1;
break;
default:l=k[1]/j.width
}return{x:l,y:c}
},createWrapper:function(o){if(o.parent().is(".ui-effects-wrapper")){return o.parent()
}var n={width:o.outerWidth(true),height:o.outerHeight(true),"float":o.css("float")},c=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),p={width:o.width(),height:o.height()},l=document.activeElement;
try{l.id
}catch(m){l=document.body
}o.wrap(c);
if(o[0]===l||e.contains(o[0],l)){e(l).focus()
}c=o.parent();
if(o.css("position")==="static"){c.css({position:"relative"});
o.css({position:"relative"})
}else{e.extend(n,{position:o.css("position"),zIndex:o.css("z-index")});
e.each(["top","left","bottom","right"],function(h,g){n[g]=o.css(g);
if(isNaN(parseInt(n[g],10))){n[g]="auto"
}});
o.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}o.css(p);
return c.css(n).show()
},removeWrapper:function(h){var c=document.activeElement;
if(h.parent().is(".ui-effects-wrapper")){h.parent().replaceWith(h);
if(h[0]===c||e.contains(h[0],c)){e(c).focus()
}}return h
},setTransition:function(k,c,l,j){j=j||{};
e.each(c,function(h,i){var g=k.cssUnit(i);
if(g[0]>0){j[i]=g[0]*l+g[1]
}});
return j
}});
function b(k,l,j,c){if(e.isPlainObject(k)){l=k;
k=k.effect
}k={effect:k};
if(l==null){l={}
}if(e.isFunction(l)){c=l;
j=null;
l={}
}if(typeof l==="number"||e.fx.speeds[l]){c=j;
j=l;
l={}
}if(e.isFunction(j)){c=j;
j=null
}if(l){e.extend(k,l)
}j=j||l.duration;
k.duration=e.fx.off?0:typeof j==="number"?j:j in e.fx.speeds?e.fx.speeds[j]:e.fx.speeds._default;
k.complete=c||l.complete;
return k
}function a(c){if(!c||typeof c==="number"||e.fx.speeds[c]){return true
}if(typeof c==="string"&&!e.effects.effect[c]){return true
}if(e.isFunction(c)){return true
}if(typeof c==="object"&&!c.effect){return true
}return false
}e.fn.extend({effect:function(){var l=b.apply(this,arguments),c=l.mode,n=l.queue,m=e.effects.effect[l.effect];
if(e.fx.off||!m){if(c){return this[c](l.duration,l.complete)
}else{return this.each(function(){if(l.complete){l.complete.call(this)
}})
}}function k(g){var p=e(this),h=l.complete,j=l.mode;
function i(){if(e.isFunction(h)){h.call(p[0])
}if(e.isFunction(g)){g()
}}if(p.is(":hidden")?j==="hide":j==="show"){p[j]();
i()
}else{m.call(p[0],l,i)
}}return n===false?this.each(k):this.queue(n||"fx",k)
},show:(function(c){return function(i){if(a(i)){return c.apply(this,arguments)
}else{var j=b.apply(this,arguments);
j.mode="show";
return this.effect.call(this,j)
}}
})(e.fn.show),hide:(function(c){return function(i){if(a(i)){return c.apply(this,arguments)
}else{var j=b.apply(this,arguments);
j.mode="hide";
return this.effect.call(this,j)
}}
})(e.fn.hide),toggle:(function(c){return function(i){if(a(i)||typeof i==="boolean"){return c.apply(this,arguments)
}else{var j=b.apply(this,arguments);
j.mode="toggle";
return this.effect.call(this,j)
}}
})(e.fn.toggle),cssUnit:function(j){var i=this.css(j),c=[];
e.each(["em","px","%","pt"],function(h,g){if(i.indexOf(g)>0){c=[parseFloat(i),g]
}});
return c
}})
})();
(function(){var a={};
e.each(["Quad","Cubic","Quart","Quint","Expo"],function(b,c){a[c]=function(h){return Math.pow(h,b+2)
}
});
e.extend(a,{Sine:function(b){return 1-Math.cos(b*Math.PI/2)
},Circ:function(b){return 1-Math.sqrt(1-b*b)
},Elastic:function(b){return b===0||b===1?b:-Math.pow(2,8*(b-1))*Math.sin(((b-1)*80-7.5)*Math.PI/15)
},Back:function(b){return b*b*(3*b-2)
},Bounce:function(b){var h,c=4;
while(b<((h=Math.pow(2,--c))-1)/11){}return 1/Math.pow(4,3-c)-7.5625*Math.pow((h*3-2)/22-b,2)
}});
e.each(a,function(b,c){e.easing["easeIn"+b]=c;
e.easing["easeOut"+b]=function(h){return 1-c(1-h)
};
e.easing["easeInOut"+b]=function(h){return h<0.5?c(h*2)/2:1-c(h*-2+2)/2
}
})
})()
})(jQuery);
(function(e,g){var f=/up|down|vertical/,h=/up|left|vertical|horizontal/;
e.effects.effect.blind=function(z,o){var y=e(this),b=["position","top","bottom","left","right","height","width"],d=e.effects.setMode(y,z.mode||"hide"),a=z.direction||"up",w=f.test(a),x=w?"height":"width",c=w?"top":"left",C=h.test(a),u={},D=d==="show",A,B,v;
if(y.parent().is(".ui-effects-wrapper")){e.effects.save(y.parent(),b)
}else{e.effects.save(y,b)
}y.show();
A=e.effects.createWrapper(y).css({overflow:"hidden"});
B=A[x]();
v=parseFloat(A.css(c))||0;
u[x]=D?B:0;
if(!C){y.css(w?"bottom":"right",0).css(w?"top":"left","auto").css({position:"absolute"});
u[c]=D?v:B+v
}if(D){A.css(x,0);
if(!C){A.css(c,v+B)
}}A.animate(u,{duration:z.duration,easing:z.easing,queue:false,complete:function(){if(d==="hide"){y.hide()
}e.effects.restore(y,b);
e.effects.removeWrapper(y);
o()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.bounce=function(E,F){var N=d(this),M=["position","top","bottom","left","right","height","width"],G=d.effects.setMode(N,E.mode||"effect"),H=G==="hide",i=G==="show",b=E.direction||"up",L=E.distance,I=E.times||5,a=I*2+(i||H?1:0),o=E.duration/a,C=E.easing,K=(b==="up"||b==="down")?"top":"left",D=(b==="up"||b==="left"),y,J,z,B=N.queue(),A=B.length;
if(i||H){M.push("opacity")
}d.effects.save(N,M);
N.show();
d.effects.createWrapper(N);
if(!L){L=N[K==="top"?"outerHeight":"outerWidth"]()/3
}if(i){z={opacity:1};
z[K]=0;
N.css("opacity",0).css(K,D?-L*2:L*2).animate(z,o,C)
}if(H){L=L/Math.pow(2,I-1)
}z={};
z[K]=0;
for(y=0;
y<I;
y++){J={};
J[K]=(D?"-=":"+=")+L;
N.animate(J,o,C).animate(z,o,C);
L=H?L*2:L/2
}if(H){J={opacity:0};
J[K]=(D?"-=":"+=")+L;
N.animate(J,o,C)
}N.queue(function(){if(H){N.hide()
}d.effects.restore(N,M);
d.effects.removeWrapper(N);
F()
});
if(A>1){B.splice.apply(B,[1,0].concat(B.splice(A,a+1)))
}N.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.clip=function(y,v){var x=d(this),r=["position","top","bottom","left","right","height","width"],s=d.effects.setMode(x,y.mode||"hide"),b=s==="show",o=y.direction||"vertical",t=o==="vertical",a=t?"height":"width",u=t?"top":"left",w={},A,z,B;
d.effects.save(x,r);
x.show();
A=d.effects.createWrapper(x).css({overflow:"hidden"});
z=(x[0].tagName==="IMG")?A:x;
B=z[a]();
if(b){z.css(a,0);
z.css(u,B/2)
}w[a]=b?B:0;
w[u]=b?0:B/2;
z.animate(w,{queue:false,duration:y.duration,easing:y.easing,complete:function(){if(!b){x.hide()
}d.effects.restore(x,r);
d.effects.removeWrapper(x);
v()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.drop=function(u,q){var t=d(this),o=["position","top","bottom","left","right","opacity","height","width"],p=d.effects.setMode(t,u.mode||"hide"),b=p==="show",n=u.direction||"left",s=(n==="up"||n==="down")?"top":"left",a=(n==="up"||n==="left")?"pos":"neg",r={opacity:b?1:0},v;
d.effects.save(t,o);
t.show();
d.effects.createWrapper(t);
v=u.distance||t[s==="top"?"outerHeight":"outerWidth"](true)/2;
if(b){t.css("opacity",0).css(s,a==="pos"?-v:v)
}r[s]=(b?(a==="pos"?"+=":"-="):(a==="pos"?"-=":"+="))+v;
t.animate(r,{queue:false,duration:u.duration,easing:u.easing,complete:function(){if(p==="hide"){t.hide()
}d.effects.restore(t,o);
d.effects.removeWrapper(t);
q()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.explode=function(y,z){var F=y.pieces?Math.round(Math.sqrt(y.pieces)):3,K=F,L=d(this),D=d.effects.setMode(L,y.mode||"hide"),b=D==="show",H=L.show().css("visibility","hidden").offset(),o=Math.ceil(L.outerWidth()/K),A=Math.ceil(L.outerHeight()/F),G=[],i,j,J,B,C,E;
function a(){G.push(this);
if(G.length===F*K){I()
}}for(i=0;
i<F;
i++){B=H.top+i*A;
E=i-(F-1)/2;
for(j=0;
j<K;
j++){J=H.left+j*o;
C=j-(K-1)/2;
L.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*o,top:-i*A}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:o,height:A,left:J+(b?C*o:0),top:B+(b?E*A:0),opacity:b?0:1}).animate({left:J+(b?0:C*o),top:B+(b?0:E*A),opacity:b?1:0},y.duration||500,y.easing,a)
}}function I(){L.css({visibility:"visible"});
d(G).remove();
if(!b){L.hide()
}z()
}}
})(jQuery);
(function(d,c){d.effects.effect.fade=function(a,h){var g=d(this),b=d.effects.setMode(g,a.mode||"toggle");
g.animate({opacity:b},{queue:false,duration:a.duration,easing:a.easing,complete:h})
}
})(jQuery);
(function(d,c){d.effects.effect.fold=function(D,z){var C=d(this),u=["position","top","bottom","left","right","height","width"],x=d.effects.setMode(C,D.mode||"hide"),a=x==="show",w=x==="hide",G=D.size||15,v=/([0-9]+)%/.exec(G),H=!!D.horizFirst,y=a!==H,B=y?["width","height"]:["height","width"],A=D.duration/2,E,F,b={},o={};
d.effects.save(C,u);
C.show();
E=d.effects.createWrapper(C).css({overflow:"hidden"});
F=y?[E.width(),E.height()]:[E.height(),E.width()];
if(v){G=parseInt(v[1],10)/100*F[w?0:1]
}if(a){E.css(H?{height:0,width:G}:{height:G,width:0})
}b[B[0]]=a?F[0]:G;
o[B[1]]=a?F[1]:0;
E.animate(b,A,D.easing).animate(o,A,D.easing,function(){if(w){C.hide()
}d.effects.restore(C,u);
d.effects.removeWrapper(C);
z()
})
}
})(jQuery);
(function(d,c){d.effects.effect.highlight=function(a,l){var j=d(this),k=["backgroundImage","backgroundColor","opacity"],b=d.effects.setMode(j,a.mode||"show"),i={backgroundColor:j.css("backgroundColor")};
if(b==="hide"){i.opacity=0
}d.effects.save(j,k);
j.show().css({backgroundImage:"none",backgroundColor:a.color||"#ffff99"}).animate(i,{queue:false,duration:a.duration,easing:a.easing,complete:function(){if(b==="hide"){j.hide()
}d.effects.restore(j,k);
l()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.pulsate=function(z,v){var x=d(this),s=d.effects.setMode(x,z.mode||"show"),b=s==="show",r=s==="hide",a=(b||s==="hide"),o=((z.times||5)*2)+(a?1:0),w=z.duration/o,i=0,t=x.queue(),y=t.length,u;
if(b||!x.is(":visible")){x.css("opacity",0).show();
i=1
}for(u=1;
u<o;
u++){x.animate({opacity:i},w,z.easing);
i=1-i
}x.animate({opacity:i},w,z.easing);
x.queue(function(){if(r){x.hide()
}v()
});
if(y>1){t.splice.apply(t,[1,0].concat(t.splice(y,o+1)))
}x.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.puff=function(a,p){var k=d(this),b=d.effects.setMode(k,a.mode||"hide"),m=b==="hide",l=parseInt(a.percent,10)||150,n=l/100,o={height:k.height(),width:k.width(),outerHeight:k.outerHeight(),outerWidth:k.outerWidth()};
d.extend(a,{effect:"scale",queue:false,fade:true,mode:b,complete:p,percent:m?l:100,from:m?o:{height:o.height*n,width:o.width*n,outerHeight:o.outerHeight*n,outerWidth:o.outerWidth*n}});
k.effect(a)
};
d.effects.effect.scale=function(t,q){var s=d(this),a=d.extend(true,{},t),p=d.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:(p==="hide"?0:100)),m=t.direction||"both",b=t.origin,r={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},n={y:m!=="horizontal"?(o/100):1,x:m!=="vertical"?(o/100):1};
a.effect="size";
a.queue=false;
a.complete=q;
if(p!=="effect"){a.origin=b||["middle","center"];
a.restore=true
}a.from=t.from||(p==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:r);
a.to={height:r.height*n.y,width:r.width*n.x,outerHeight:r.outerHeight*n.y,outerWidth:r.outerWidth*n.x};
if(a.fade){if(p==="show"){a.from.opacity=0;
a.to.opacity=1
}if(p==="hide"){a.from.opacity=1;
a.to.opacity=0
}}s.effect(a)
};
d.effects.effect.size=function(C,D){var y,F,E,L=d(this),z=["position","top","bottom","left","right","width","height","overflow","opacity"],A=["position","top","bottom","left","right","overflow","opacity"],B=["width","height","overflow"],H=["fontSize"],w=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],K=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],G=d.effects.setMode(L,C.mode||"effect"),x=C.restore||G!=="effect",a=C.scale||"both",o=C.origin||["middle","center"],b=L.css("position"),J=x?z:A,I={height:0,width:0,outerHeight:0,outerWidth:0};
if(G==="show"){L.show()
}y={height:L.height(),width:L.width(),outerHeight:L.outerHeight(),outerWidth:L.outerWidth()};
if(C.mode==="toggle"&&G==="show"){L.from=C.to||I;
L.to=C.from||y
}else{L.from=C.from||(G==="show"?I:y);
L.to=C.to||(G==="hide"?I:y)
}E={from:{y:L.from.height/y.height,x:L.from.width/y.width},to:{y:L.to.height/y.height,x:L.to.width/y.width}};
if(a==="box"||a==="both"){if(E.from.y!==E.to.y){J=J.concat(w);
L.from=d.effects.setTransition(L,w,E.from.y,L.from);
L.to=d.effects.setTransition(L,w,E.to.y,L.to)
}if(E.from.x!==E.to.x){J=J.concat(K);
L.from=d.effects.setTransition(L,K,E.from.x,L.from);
L.to=d.effects.setTransition(L,K,E.to.x,L.to)
}}if(a==="content"||a==="both"){if(E.from.y!==E.to.y){J=J.concat(H).concat(B);
L.from=d.effects.setTransition(L,H,E.from.y,L.from);
L.to=d.effects.setTransition(L,H,E.to.y,L.to)
}}d.effects.save(L,J);
L.show();
d.effects.createWrapper(L);
L.css("overflow","hidden").css(L.from);
if(o){F=d.effects.getBaseline(o,y);
L.from.top=(y.outerHeight-L.outerHeight())*F.y;
L.from.left=(y.outerWidth-L.outerWidth())*F.x;
L.to.top=(y.outerHeight-L.to.outerHeight)*F.y;
L.to.left=(y.outerWidth-L.to.outerWidth)*F.x
}L.css(L.from);
if(a==="content"||a==="both"){w=w.concat(["marginTop","marginBottom"]).concat(H);
K=K.concat(["marginLeft","marginRight"]);
B=z.concat(w).concat(K);
L.find("*[width]").each(function(){var e=d(this),f={height:e.height(),width:e.width(),outerHeight:e.outerHeight(),outerWidth:e.outerWidth()};
if(x){d.effects.save(e,B)
}e.from={height:f.height*E.from.y,width:f.width*E.from.x,outerHeight:f.outerHeight*E.from.y,outerWidth:f.outerWidth*E.from.x};
e.to={height:f.height*E.to.y,width:f.width*E.to.x,outerHeight:f.height*E.to.y,outerWidth:f.width*E.to.x};
if(E.from.y!==E.to.y){e.from=d.effects.setTransition(e,w,E.from.y,e.from);
e.to=d.effects.setTransition(e,w,E.to.y,e.to)
}if(E.from.x!==E.to.x){e.from=d.effects.setTransition(e,K,E.from.x,e.from);
e.to=d.effects.setTransition(e,K,E.to.x,e.to)
}e.css(e.from);
e.animate(e.to,C.duration,C.easing,function(){if(x){d.effects.restore(e,B)
}})
})
}L.animate(L.to,{queue:false,duration:C.duration,easing:C.easing,complete:function(){if(L.to.opacity===0){L.css("opacity",L.from.opacity)
}if(G==="hide"){L.hide()
}d.effects.restore(L,J);
if(!x){if(b==="static"){L.css({position:"relative",top:L.to.top,left:L.to.left})
}else{d.each(["top","left"],function(f,e){L.css(e,function(j,h){var i=parseInt(h,10),g=f?L.to.left:L.to.top;
if(h==="auto"){return g+"px"
}return i+g+"px"
})
})
}}d.effects.removeWrapper(L);
D()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.shake=function(B,C){var J=d(this),I=["position","top","bottom","left","right","height","width"],D=d.effects.setMode(J,B.mode||"effect"),b=B.direction||"left",H=B.distance||20,E=B.times||3,a=E*2+1,x=Math.round(B.duration/a),F=(b==="up"||b==="down")?"top":"left",G=(b==="up"||b==="left"),i={},o={},w={},y,A=J.queue(),z=A.length;
d.effects.save(J,I);
J.show();
d.effects.createWrapper(J);
i[F]=(G?"-=":"+=")+H;
o[F]=(G?"+=":"-=")+H*2;
w[F]=(G?"-=":"+=")+H*2;
J.animate(i,x,B.easing);
for(y=1;
y<E;
y++){J.animate(o,x,B.easing).animate(w,x,B.easing)
}J.animate(o,x,B.easing).animate(i,x/2,B.easing).queue(function(){if(D==="hide"){J.hide()
}d.effects.restore(J,I);
d.effects.removeWrapper(J);
C()
});
if(z>1){A.splice.apply(A,[1,0].concat(A.splice(z,a+1)))
}J.dequeue()
}
})(jQuery);
(function(d,c){d.effects.effect.slide=function(t,p){var s=d(this),n=["position","top","bottom","left","right","width","height"],o=d.effects.setMode(s,t.mode||"show"),a=o==="show",b=t.direction||"left",r=(b==="up"||b==="down")?"top":"left",u=(b==="up"||b==="left"),v,q={};
d.effects.save(s,n);
s.show();
v=t.distance||s[r==="top"?"outerHeight":"outerWidth"](true);
d.effects.createWrapper(s).css({overflow:"hidden"});
if(a){s.css(r,u?(isNaN(v)?"-"+v:-v):v)
}q[r]=(a?(u?"+=":"-="):(u?"-=":"+="))+v;
s.animate(q,{queue:false,duration:t.duration,easing:t.easing,complete:function(){if(o==="hide"){s.hide()
}d.effects.restore(s,n);
d.effects.removeWrapper(s);
p()
}})
}
})(jQuery);
(function(d,c){d.effects.effect.transfer=function(w,s){var u=d(this),p=d(w.to),a=p.css("position")==="fixed",q=d("body"),o=a?q.scrollTop():0,b=a?q.scrollLeft():0,x=p.offset(),t={top:x.top-o,left:x.left-b,height:p.innerHeight(),width:p.innerWidth()},r=u.offset(),v=d("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(w.className).css({top:r.top-o,left:r.left-b,height:u.innerHeight(),width:u.innerWidth(),position:a?"fixed":"absolute"}).animate(t,w.duration,w.easing,function(){v.remove();
s()
})
}
})(jQuery);
(function(d,c){d.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.mouseHandled=false;
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,d.proxy(function(a){if(this.options.disabled){a.preventDefault()
}},this));
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
}this._on({"mousedown .ui-menu-item > a":function(a){a.preventDefault()
},"click .ui-state-disabled > a":function(a){a.preventDefault()
},"click .ui-menu-item:has(a)":function(b){var a=d(b.target).closest(".ui-menu-item");
if(!this.mouseHandled&&a.not(".ui-state-disabled").length){this.select(b);
if(!b.isPropagationStopped()){this.mouseHandled=true
}if(a.has(".ui-menu").length){this.expand(b)
}else{if(!this.element.is(":focus")&&d(this.document[0].activeElement).closest(".ui-menu").length){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(b){var a=d(b.currentTarget);
a.siblings().children(".ui-state-active").removeClass("ui-state-active");
this.focus(b,a)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,f){var b=this.active||this.element.children(".ui-menu-item").eq(0);
if(!f){this.focus(a,b)
}},blur:function(a){this._delay(function(){if(!d.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(a)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(a){if(!d(a.target).closest(".ui-menu").length){this.collapseAll(a)
}this.mouseHandled=false
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var a=d(this);
if(a.data("ui-menu-submenu-carat")){a.remove()
}});
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(b){var o,k,a,l,m,p=true;
function n(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}switch(b.keyCode){case d.ui.keyCode.PAGE_UP:this.previousPage(b);
break;
case d.ui.keyCode.PAGE_DOWN:this.nextPage(b);
break;
case d.ui.keyCode.HOME:this._move("first","first",b);
break;
case d.ui.keyCode.END:this._move("last","last",b);
break;
case d.ui.keyCode.UP:this.previous(b);
break;
case d.ui.keyCode.DOWN:this.next(b);
break;
case d.ui.keyCode.LEFT:this.collapse(b);
break;
case d.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(b)
}break;
case d.ui.keyCode.ENTER:case d.ui.keyCode.SPACE:this._activate(b);
break;
case d.ui.keyCode.ESCAPE:this.collapse(b);
break;
default:p=false;
k=this.previousFilter||"";
a=String.fromCharCode(b.keyCode);
l=false;
clearTimeout(this.filterTimer);
if(a===k){l=true
}else{a=k+a
}m=new RegExp("^"+n(a),"i");
o=this.activeMenu.children(".ui-menu-item").filter(function(){return m.test(d(this).children("a").text())
});
o=l&&o.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):o;
if(!o.length){a=String.fromCharCode(b.keyCode);
m=new RegExp("^"+n(a),"i");
o=this.activeMenu.children(".ui-menu-item").filter(function(){return m.test(d(this).children("a").text())
})
}if(o.length){this.focus(b,o);
if(o.length>1){this.previousFilter=a;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}else{delete this.previousFilter
}}if(p){b.preventDefault()
}},_activate:function(a){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(a)
}else{this.select(a)
}}},refresh:function(){var a,b=this.options.icons.submenu,f=this.element.find(this.options.menus);
this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length);
f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=d(this),i=e.prev("a"),j=d("<span>").addClass("ui-menu-icon ui-icon "+b).data("ui-menu-submenu-carat",true);
i.attr("aria-haspopup","true").prepend(j);
e.attr("aria-labelledby",i.attr("id"))
});
a=f.add(this.element);
a.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});
a.children(":not(.ui-menu-item)").each(function(){var e=d(this);
if(!/[^\-\u2014\u2013\s]/.test(e.text())){e.addClass("ui-widget-content ui-menu-divider")
}});
a.children(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!d.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(b,a){if(b==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(a.submenu)
}this._super(b,a)
},focus:function(g,h){var a,b;
this.blur(g,g&&g.type==="focus");
this._scrollIntoView(h);
this.active=h.first();
b=this.active.children("a").addClass("ui-state-focus");
if(this.options.role){this.element.attr("aria-activedescendant",b.attr("id"))
}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
if(g&&g.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}a=h.children(".ui-menu");
if(a.length&&g&&(/^mouse/.test(g.type))){this._startOpening(a)
}this.activeMenu=h.parent();
this._trigger("focus",g,{item:h})
},_scrollIntoView:function(k){var a,l,j,n,m,b;
if(this._hasScroll()){a=parseFloat(d.css(this.activeMenu[0],"borderTopWidth"))||0;
l=parseFloat(d.css(this.activeMenu[0],"paddingTop"))||0;
j=k.offset().top-this.activeMenu.offset().top-a-l;
n=this.activeMenu.scrollTop();
m=this.activeMenu.height();
b=k.height();
if(j<0){this.activeMenu.scrollTop(n+j)
}else{if(j+b>m){this.activeMenu.scrollTop(n+j-m+b)
}}}},blur:function(a,b){if(!b){clearTimeout(this.timer)
}if(!this.active){return
}this.active.children("a").removeClass("ui-state-focus");
this.active=null;
this._trigger("blur",a,{item:this.active})
},_startOpening:function(a){clearTimeout(this.timer);
if(a.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close();
this._open(a)
},this.delay)
},_open:function(a){var b=d.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden","true");
a.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(b)
},collapseAll:function(a,b){clearTimeout(this.timer);
this.timer=this._delay(function(){var f=b?this.element:d(a&&a.target).closest(this.element.find(".ui-menu"));
if(!f.length){f=this.element
}this._close(f);
this.blur(a);
this.activeMenu=f
},this.delay)
},_close:function(a){if(!a){a=this.active?this.active.parent():this.element
}a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(b&&b.length){this._close();
this.focus(a,b)
}},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
if(b&&b.length){this._open(b.parent());
this._delay(function(){this.focus(a,b)
})
}},next:function(a){this._move("next","first",a)
},previous:function(a){this._move("prev","last",a)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(a,g,b){var h;
if(this.active){if(a==="first"||a==="last"){h=this.active[a==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{h=this.active[a+"All"](".ui-menu-item").eq(0)
}}if(!h||!h.length||!this.active){h=this.activeMenu.children(".ui-menu-item")[g]()
}this.focus(b,h)
},nextPage:function(b){var g,a,h;
if(!this.active){this.next(b);
return
}if(this.isLastItem()){return
}if(this._hasScroll()){a=this.active.offset().top;
h=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){g=d(this);
return g.offset().top-a-h<0
});
this.focus(b,g)
}else{this.focus(b,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())
}},previousPage:function(b){var g,a,h;
if(!this.active){this.next(b);
return
}if(this.isFirstItem()){return
}if(this._hasScroll()){a=this.active.offset().top;
h=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){g=d(this);
return g.offset().top-a+h>0
});
this.focus(b,g)
}else{this.focus(b,this.activeMenu.children(".ui-menu-item").first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(b){this.active=this.active||d(b.target).closest(".ui-menu-item");
var a={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(b,true)
}this._trigger("select",b,a)
}})
}(jQuery));
(function(d,c){d.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});
this.valueDiv=d("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove()
},value:function(a){if(a===c){return this.options.value
}this.options.value=this._constrainedValue(a);
this._refreshValue()
},_constrainedValue:function(a){if(a===c){a=this.options.value
}this.indeterminate=a===false;
if(typeof a!=="number"){a=0
}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,a))
},_setOptions:function(b){var a=b.value;
delete b.value;
this._super(b);
this.options.value=this._constrainedValue(a);
this._refreshValue()
},_setOption:function(b,a){if(b==="max"){a=Math.max(this.min,a)
}this._super(b,a)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var a=this.options.value,b=this._percentage();
this.valueDiv.toggle(this.indeterminate||a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(b.toFixed(0)+"%");
this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);
if(this.indeterminate){this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){this.overlayDiv=d("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)
}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":a});
if(this.overlayDiv){this.overlayDiv.remove();
this.overlayDiv=null
}}if(this.oldValue!==a){this.oldValue=a;
this._trigger("change")
}if(a===this.options.max){this._trigger("complete")
}}})
})(jQuery);
(function(h,g){function e(a){return parseInt(a,10)||0
}function f(a){return !isNaN(parseInt(a,10))
}h.widget("ui.resizable",h.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var a,m,c,i,n,d=this,b=this.options;
this.element.addClass("ui-resizable");
h.extend(this,{_aspectRatio:!!(b.aspectRatio),aspectRatio:b.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:b.helper||b.ghost||b.animate?b.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(h("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize()
}this.handles=b.handles||(!h(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"
}a=this.handles.split(",");
this.handles={};
for(m=0;
m<a.length;
m++){c=h.trim(a[m]);
n="ui-resizable-"+c;
i=h("<div class='ui-resizable-handle "+n+"'></div>");
i.css({zIndex:b.zIndex});
if("se"===c){i.addClass("ui-icon ui-icon-gripsmall-diagonal-se")
}this.handles[c]=".ui-resizable-"+c;
this.element.append(i)
}}this._renderAxis=function(k){var s,r,j,l;
k=k||this.element;
for(s in this.handles){if(this.handles[s].constructor===String){this.handles[s]=h(this.handles[s],this.element).show()
}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){r=h(this.handles[s],this.element);
l=/sw|ne|nw|se|n|s/.test(s)?r.outerHeight():r.outerWidth();
j=["padding",/ne|nw|n/.test(s)?"Top":/se|sw|s/.test(s)?"Bottom":/^e$/.test(s)?"Right":"Left"].join("");
k.css(j,l);
this._proportionallyResize()
}if(!h(this.handles[s]).length){continue
}}};
this._renderAxis(this.element);
this._handles=h(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!d.resizing){if(this.className){i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}d.axis=i&&i[1]?i[1]:"se"
}});
if(b.autoHide){this._handles.hide();
h(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(b.disabled){return
}h(this).removeClass("ui-resizable-autohide");
d._handles.show()
}).mouseleave(function(){if(b.disabled){return
}if(!d.resizing){h(this).addClass("ui-resizable-autohide");
d._handles.hide()
}})
}this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var a,b=function(c){h(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){b(this.element);
a=this.element;
this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")}).insertAfter(a);
a.remove()
}this.originalElement.css("resize",this.originalResizeStyle);
b(this.originalElement);
return this
},_mouseCapture:function(b){var c,a,d=false;
for(c in this.handles){a=h(this.handles[c])[0];
if(a===b.target||h.contains(a,b.target)){d=true
}}return !this.options.disabled&&d
},_mouseStart:function(l){var a,d,b,c=this.options,m=this.element.position(),n=this.element;
this.resizing=true;
if((/absolute/).test(n.css("position"))){n.css({position:"absolute",top:n.css("top"),left:n.css("left")})
}else{if(n.is(".ui-draggable")){n.css({position:"absolute",top:m.top,left:m.left})
}}this._renderProxy();
a=e(this.helper.css("left"));
d=e(this.helper.css("top"));
if(c.containment){a+=h(c.containment).scrollLeft()||0;
d+=h(c.containment).scrollTop()||0
}this.offset=this.helper.offset();
this.position={left:a,top:d};
this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:n.width(),height:n.height()};
this.originalSize=this._helper?{width:n.outerWidth(),height:n.outerHeight()}:{width:n.width(),height:n.height()};
this.originalPosition={left:a,top:d};
this.sizeDiff={width:n.outerWidth()-n.width(),height:n.outerHeight()-n.height()};
this.originalMousePosition={left:l.pageX,top:l.pageY};
this.aspectRatio=(typeof c.aspectRatio==="number")?c.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
b=h(".ui-resizable-"+this.axis).css("cursor");
h("body").css("cursor",b==="auto"?this.axis+"-resize":b);
n.addClass("ui-resizable-resizing");
this._propagate("start",l);
return true
},_mouseDrag:function(z){var t,x=this.helper,s={},v=this.originalMousePosition,r=this.axis,c=this.position.top,y=this.position.left,d=this.size.width,u=this.size.height,a=(z.pageX-v.left)||0,b=(z.pageY-v.top)||0,w=this._change[r];
if(!w){return false
}t=w.apply(this,[z,a,b]);
this._updateVirtualBoundaries(z.shiftKey);
if(this._aspectRatio||z.shiftKey){t=this._updateRatio(t,z)
}t=this._respectSize(t,z);
this._updateCache(t);
this._propagate("resize",z);
if(this.position.top!==c){s.top=this.position.top+"px"
}if(this.position.left!==y){s.left=this.position.left+"px"
}if(this.size.width!==d){s.width=this.size.width+"px"
}if(this.size.height!==u){s.height=this.size.height+"px"
}x.css(s);
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()
}if(!h.isEmptyObject(s)){this._trigger("resize",z,this.ui())
}return false
},_mouseStop:function(q){this.resizing=false;
var r,t,s,d,a,o,b,p=this.options,c=this;
if(this._helper){r=this._proportionallyResizeElements;
t=r.length&&(/textarea/i).test(r[0].nodeName);
s=t&&h.ui.hasScroll(r[0],"left")?0:c.sizeDiff.height;
d=t?0:c.sizeDiff.width;
a={width:(c.helper.width()-d),height:(c.helper.height()-s)};
o=(parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left))||null;
b=(parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top))||null;
if(!p.animate){this.element.css(h.extend(a,{top:b,left:o}))
}c.helper.height(c.size.height);
c.helper.width(c.size.width);
if(this._helper&&!p.animate){this._proportionallyResize()
}}h("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",q);
if(this._helper){this.helper.remove()
}return false
},_updateVirtualBoundaries:function(l){var c,d,m,a,n,b=this.options;
n={minWidth:f(b.minWidth)?b.minWidth:0,maxWidth:f(b.maxWidth)?b.maxWidth:Infinity,minHeight:f(b.minHeight)?b.minHeight:0,maxHeight:f(b.maxHeight)?b.maxHeight:Infinity};
if(this._aspectRatio||l){c=n.minHeight*this.aspectRatio;
m=n.minWidth/this.aspectRatio;
d=n.maxHeight*this.aspectRatio;
a=n.maxWidth/this.aspectRatio;
if(c>n.minWidth){n.minWidth=c
}if(m>n.minHeight){n.minHeight=m
}if(d<n.maxWidth){n.maxWidth=d
}if(a<n.maxHeight){n.maxHeight=a
}}this._vBoundaries=n
},_updateCache:function(a){this.offset=this.helper.offset();
if(f(a.left)){this.position.left=a.left
}if(f(a.top)){this.position.top=a.top
}if(f(a.height)){this.size.height=a.height
}if(f(a.width)){this.size.width=a.width
}},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;
if(f(b.height)){b.width=(b.height*this.aspectRatio)
}else{if(f(b.width)){b.height=(b.width/this.aspectRatio)
}}if(d==="sw"){b.left=a.left+(c.width-b.width);
b.top=null
}if(d==="nw"){b.top=a.top+(c.height-b.height);
b.left=a.left+(c.width-b.width)
}return b
},_respectSize:function(q){var t=this._vBoundaries,c=this.axis,a=f(q.width)&&t.maxWidth&&(t.maxWidth<q.width),o=f(q.height)&&t.maxHeight&&(t.maxHeight<q.height),s=f(q.width)&&t.minWidth&&(t.minWidth>q.width),b=f(q.height)&&t.minHeight&&(t.minHeight>q.height),u=this.originalPosition.left+this.originalSize.width,d=this.position.top+this.size.height,r=/sw|nw|w/.test(c),v=/nw|ne|n/.test(c);
if(s){q.width=t.minWidth
}if(b){q.height=t.minHeight
}if(a){q.width=t.maxWidth
}if(o){q.height=t.maxHeight
}if(s&&r){q.left=u-t.minWidth
}if(a&&r){q.left=u-t.maxWidth
}if(b&&v){q.top=d-t.minHeight
}if(o&&v){q.top=d-t.maxHeight
}if(!q.width&&!q.height&&!q.left&&q.top){q.top=null
}else{if(!q.width&&!q.height&&!q.top&&q.left){q.left=null
}}return q
},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return
}var c,i,a,j,b,d=this.helper||this.element;
for(c=0;
c<this._proportionallyResizeElements.length;
c++){b=this._proportionallyResizeElements[c];
if(!this.borderDif){this.borderDif=[];
a=[b.css("borderTopWidth"),b.css("borderRightWidth"),b.css("borderBottomWidth"),b.css("borderLeftWidth")];
j=[b.css("paddingTop"),b.css("paddingRight"),b.css("paddingBottom"),b.css("paddingLeft")];
for(i=0;
i<a.length;
i++){this.borderDif[i]=(parseInt(a[i],10)||0)+(parseInt(j[i],10)||0)
}}b.css({height:(d.height()-this.borderDif[0]-this.borderDif[2])||0,width:(d.width()-this.borderDif[1]-this.borderDif[3])||0})
}},_renderProxy:function(){var b=this.element,a=this.options;
this.elementOffset=b.offset();
if(this._helper){this.helper=this.helper||h("<div style='overflow:hidden;'></div>");
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++a.zIndex});
this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(a,b){return{width:this.originalSize.width+b}
},w:function(b,d){var c=this.originalSize,a=this.originalPosition;
return{left:a.left+d,width:c.width-d}
},n:function(b,d,j){var c=this.originalSize,a=this.originalPosition;
return{top:a.top+j,height:c.height-j}
},s:function(a,b,c){return{height:this.originalSize.height+c}
},se:function(a,b,c){return h.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[a,b,c]))
},sw:function(a,b,c){return h.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[a,b,c]))
},ne:function(a,b,c){return h.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[a,b,c]))
},nw:function(a,b,c){return h.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[a,b,c]))
}},_propagate:function(a,b){h.ui.plugin.call(this,a,[b,this.ui()]);
(a!=="resize"&&this._trigger(a,b,this.ui()))
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}});
h.ui.plugin.add("resizable","animate",{stop:function(q){var b=h(this).data("ui-resizable"),o=b.options,r=b._proportionallyResizeElements,t=r.length&&(/textarea/i).test(r[0].nodeName),s=t&&h.ui.hasScroll(r[0],"left")?0:b.sizeDiff.height,c=t?0:b.sizeDiff.width,p={width:(b.size.width-c),height:(b.size.height-s)},d=(parseInt(b.element.css("left"),10)+(b.position.left-b.originalPosition.left))||null,a=(parseInt(b.element.css("top"),10)+(b.position.top-b.originalPosition.top))||null;
b.element.animate(h.extend(p,a&&d?{top:a,left:d}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var i={width:parseInt(b.element.css("width"),10),height:parseInt(b.element.css("height"),10),top:parseInt(b.element.css("top"),10),left:parseInt(b.element.css("left"),10)};
if(r&&r.length){h(r[0]).css({width:i.width,height:i.height})
}b._updateCache(i);
b._propagate("resize",q)
}})
}});
h.ui.plugin.add("resizable","containment",{start:function(){var d,v,b,x,o,u,a,c=h(this).data("ui-resizable"),p=c.options,s=c.element,w=p.containment,t=(w instanceof h)?w.get(0):(/parent/.test(w))?s.parent().get(0):w;
if(!t){return
}c.containerElement=h(t);
if(/document/.test(w)||w===document){c.containerOffset={left:0,top:0};
c.containerPosition={left:0,top:0};
c.parentData={element:h(document),left:0,top:0,width:h(document).width(),height:h(document).height()||document.body.parentNode.scrollHeight}
}else{d=h(t);
v=[];
h(["Top","Right","Left","Bottom"]).each(function(i,j){v[i]=e(d.css("padding"+j))
});
c.containerOffset=d.offset();
c.containerPosition=d.position();
c.containerSize={height:(d.innerHeight()-v[3]),width:(d.innerWidth()-v[1])};
b=c.containerOffset;
x=c.containerSize.height;
o=c.containerSize.width;
u=(h.ui.hasScroll(t,"left")?t.scrollWidth:o);
a=(h.ui.hasScroll(t)?t.scrollHeight:x);
c.parentData={element:t,left:b.left,top:b.top,width:u,height:a}
}},resize:function(w){var r,a,s,t,o=h(this).data("ui-resizable"),u=o.options,c=o.containerOffset,d=o.position,b=o._aspectRatio||w.shiftKey,x={top:0,left:0},v=o.containerElement;
if(v[0]!==document&&(/static/).test(v.css("position"))){x=c
}if(d.left<(o._helper?c.left:0)){o.size.width=o.size.width+(o._helper?(o.position.left-c.left):(o.position.left-x.left));
if(b){o.size.height=o.size.width/o.aspectRatio
}o.position.left=u.helper?c.left:0
}if(d.top<(o._helper?c.top:0)){o.size.height=o.size.height+(o._helper?(o.position.top-c.top):o.position.top);
if(b){o.size.width=o.size.height*o.aspectRatio
}o.position.top=o._helper?c.top:0
}o.offset.left=o.parentData.left+o.position.left;
o.offset.top=o.parentData.top+o.position.top;
r=Math.abs((o._helper?o.offset.left-x.left:(o.offset.left-x.left))+o.sizeDiff.width);
a=Math.abs((o._helper?o.offset.top-x.top:(o.offset.top-c.top))+o.sizeDiff.height);
s=o.containerElement.get(0)===o.element.parent().get(0);
t=/relative|absolute/.test(o.containerElement.css("position"));
if(s&&t){r-=Math.abs(o.parentData.left)
}if(r+o.size.width>=o.parentData.width){o.size.width=o.parentData.width-r;
if(b){o.size.height=o.size.width/o.aspectRatio
}}if(a+o.size.height>=o.parentData.height){o.size.height=o.parentData.height-a;
if(b){o.size.width=o.size.height*o.aspectRatio
}}},stop:function(){var d=h(this).data("ui-resizable"),r=d.options,c=d.containerOffset,s=d.containerPosition,q=d.containerElement,p=h(d.helper),a=p.offset(),b=p.outerWidth()-d.sizeDiff.width,o=p.outerHeight()-d.sizeDiff.height;
if(d._helper&&!r.animate&&(/relative/).test(q.css("position"))){h(this).css({left:a.left-s.left-c.left,width:b,height:o})
}if(d._helper&&!r.animate&&(/static/).test(q.css("position"))){h(this).css({left:a.left-s.left-c.left,width:b,height:o})
}}});
h.ui.plugin.add("resizable","alsoResize",{start:function(){var c=h(this).data("ui-resizable"),a=c.options,b=function(d){h(d).each(function(){var j=h(this);
j.data("ui-resizable-alsoresize",{width:parseInt(j.width(),10),height:parseInt(j.height(),10),left:parseInt(j.css("left"),10),top:parseInt(j.css("top"),10)})
})
};
if(typeof(a.alsoResize)==="object"&&!a.alsoResize.parentNode){if(a.alsoResize.length){a.alsoResize=a.alsoResize[0];
b(a.alsoResize)
}else{h.each(a.alsoResize,function(d){b(d)
})
}}else{b(a.alsoResize)
}},resize:function(n,d){var o=h(this).data("ui-resizable"),c=o.options,m=o.originalSize,a=o.originalPosition,b={height:(o.size.height-m.height)||0,width:(o.size.width-m.width)||0,top:(o.position.top-a.top)||0,left:(o.position.left-a.left)||0},p=function(i,j){h(i).each(function(){var l=h(this),k=h(this).data("ui-resizable-alsoresize"),s={},t=j&&j.length?j:l.parents(d.originalElement[0]).length?["width","height"]:["width","height","top","left"];
h.each(t,function(v,q){var r=(k[q]||0)+(b[q]||0);
if(r&&r>=0){s[q]=r||null
}});
l.css(s)
})
};
if(typeof(c.alsoResize)==="object"&&!c.alsoResize.nodeType){h.each(c.alsoResize,function(i,j){p(i,j)
})
}else{p(c.alsoResize)
}},stop:function(){h(this).removeData("resizable-alsoresize")
}});
h.ui.plugin.add("resizable","ghost",{start:function(){var b=h(this).data("ui-resizable"),a=b.options,c=b.size;
b.ghost=b.originalElement.clone();
b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost==="string"?a.ghost:"");
b.ghost.appendTo(b.helper)
},resize:function(){var a=h(this).data("ui-resizable");
if(a.ghost){a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})
}},stop:function(){var a=h(this).data("ui-resizable");
if(a.ghost&&a.helper){a.helper.get(0).removeChild(a.ghost.get(0))
}}});
h.ui.plugin.add("resizable","grid",{resize:function(){var a=h(this).data("ui-resizable"),z=a.options,H=a.size,x=a.originalSize,d=a.originalPosition,G=a.axis,C=typeof z.grid==="number"?[z.grid,z.grid]:z.grid,c=(C[0]||1),o=(C[1]||1),A=Math.round((H.width-x.width)/c)*c,B=Math.round((H.height-x.height)/o)*o,w=x.width+A,D=x.height+B,y=z.maxWidth&&(z.maxWidth<w),F=z.maxHeight&&(z.maxHeight<D),b=z.minWidth&&(z.minWidth>w),E=z.minHeight&&(z.minHeight>D);
z.grid=C;
if(b){w=w+c
}if(E){D=D+o
}if(y){w=w-c
}if(F){D=D-o
}if(/^(se|s|e)$/.test(G)){a.size.width=w;
a.size.height=D
}else{if(/^(ne)$/.test(G)){a.size.width=w;
a.size.height=D;
a.position.top=d.top-B
}else{if(/^(sw)$/.test(G)){a.size.width=w;
a.size.height=D;
a.position.left=d.left-A
}else{if(D-o>0){a.size.height=D;
a.position.top=d.top-B
}else{a.size.height=o;
a.position.top=d.top+x.height-o
}if(w-c>0){a.size.width=w;
a.position.left=d.left-A
}else{a.size.width=c;
a.position.left=d.left+x.width-c
}}}}}})
})(jQuery);
(function(d,c){d.widget("ui.selectable",d.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var a,b=this;
this.element.addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){a=d(b.options.filter,b.element[0]);
a.addClass("ui-selectee");
a.each(function(){var h=d(this),g=h.offset();
d.data(this,"selectable-item",{element:this,$element:h,left:g.left,top:g.top,right:g.left+h.outerWidth(),bottom:g.top+h.outerHeight(),startselected:false,selected:h.hasClass("ui-selected"),selecting:h.hasClass("ui-selecting"),unselecting:h.hasClass("ui-unselecting")})
})
};
this.refresh();
this.selectees=a.addClass("ui-selectee");
this._mouseInit();
this.helper=d("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");
this._mouseDestroy()
},_mouseStart:function(a){var b=this,f=this.options;
this.opos=[a.pageX,a.pageY];
if(this.options.disabled){return
}this.selectees=d(f.filter,this.element[0]);
this._trigger("start",a);
d(f.appendTo).append(this.helper);
this.helper.css({left:a.pageX,top:a.pageY,width:0,height:0});
if(f.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var e=d.data(this,"selectable-item");
e.startselected=true;
if(!a.metaKey&&!a.ctrlKey){e.$element.removeClass("ui-selected");
e.selected=false;
e.$element.addClass("ui-unselecting");
e.unselecting=true;
b._trigger("unselecting",a,{unselecting:e.element})
}});
d(a.target).parents().addBack().each(function(){var h,e=d.data(this,"selectable-item");
if(e){h=(!a.metaKey&&!a.ctrlKey)||!e.$element.hasClass("ui-selected");
e.$element.removeClass(h?"ui-unselecting":"ui-selected").addClass(h?"ui-selecting":"ui-unselecting");
e.unselecting=!h;
e.selecting=h;
e.selected=h;
if(h){b._trigger("selecting",a,{selecting:e.element})
}else{b._trigger("unselecting",a,{unselecting:e.element})
}return false
}})
},_mouseDrag:function(a){this.dragged=true;
if(this.options.disabled){return
}var l,b=this,n=this.options,o=this.opos[0],k=this.opos[1],p=a.pageX,m=a.pageY;
if(o>p){l=p;
p=o;
o=l
}if(k>m){l=m;
m=k;
k=l
}this.helper.css({left:o,top:k,width:p-o,height:m-k});
this.selectees.each(function(){var f=d.data(this,"selectable-item"),e=false;
if(!f||f.element===b.element[0]){return
}if(n.tolerance==="touch"){e=(!(f.left>p||f.right<o||f.top>m||f.bottom<k))
}else{if(n.tolerance==="fit"){e=(f.left>o&&f.right<p&&f.top>k&&f.bottom<m)
}}if(e){if(f.selected){f.$element.removeClass("ui-selected");
f.selected=false
}if(f.unselecting){f.$element.removeClass("ui-unselecting");
f.unselecting=false
}if(!f.selecting){f.$element.addClass("ui-selecting");
f.selecting=true;
b._trigger("selecting",a,{selecting:f.element})
}}else{if(f.selecting){if((a.metaKey||a.ctrlKey)&&f.startselected){f.$element.removeClass("ui-selecting");
f.selecting=false;
f.$element.addClass("ui-selected");
f.selected=true
}else{f.$element.removeClass("ui-selecting");
f.selecting=false;
if(f.startselected){f.$element.addClass("ui-unselecting");
f.unselecting=true
}b._trigger("unselecting",a,{unselecting:f.element})
}}if(f.selected){if(!a.metaKey&&!a.ctrlKey&&!f.startselected){f.$element.removeClass("ui-selected");
f.selected=false;
f.$element.addClass("ui-unselecting");
f.unselecting=true;
b._trigger("unselecting",a,{unselecting:f.element})
}}}});
return false
},_mouseStop:function(a){var b=this;
this.dragged=false;
d(".ui-unselecting",this.element[0]).each(function(){var f=d.data(this,"selectable-item");
f.$element.removeClass("ui-unselecting");
f.unselecting=false;
f.startselected=false;
b._trigger("unselected",a,{unselected:f.element})
});
d(".ui-selecting",this.element[0]).each(function(){var f=d.data(this,"selectable-item");
f.$element.removeClass("ui-selecting").addClass("ui-selected");
f.selecting=false;
f.selected=true;
f.startselected=true;
b._trigger("selected",a,{selected:f.element})
});
this._trigger("stop",a);
this.helper.remove();
return false
}})
})(jQuery);
(function(d,f){var e=5;
d.widget("ui.slider",d.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");
this._refresh();
this._setOption("disabled",this.options.disabled);
this._animateOff=false
},_refresh:function(){this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue()
},_createHandles:function(){var c,l,k=this.options,a=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),b="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",i=[];
l=(k.values&&k.values.length)||1;
if(a.length>l){a.slice(l).remove();
a=a.slice(0,l)
}for(c=a.length;
c<l;
c++){i.push(b)
}this.handles=a.add(d(i.join("")).appendTo(this.element));
this.handle=this.handles.eq(0);
this.handles.each(function(g){d(this).data("ui-slider-handle-index",g)
})
},_createRange:function(){var b=this.options,a="";
if(b.range){if(b.range===true){if(!b.values){b.values=[this._valueMin(),this._valueMin()]
}else{if(b.values.length&&b.values.length!==2){b.values=[b.values[0],b.values[0]]
}else{if(d.isArray(b.values)){b.values=b.values.slice(0)
}}}}if(!this.range||!this.range.length){this.range=d("<div></div>").appendTo(this.element);
a="ui-slider-range ui-widget-header ui-corner-all"
}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})
}this.range.addClass(a+((b.range==="min"||b.range==="max")?" ui-slider-range-"+b.range:""))
}else{if(this.range){this.range.remove()
}this.range=null
}},_setupEvents:function(){var a=this.handles.add(this.range).filter("a");
this._off(a);
this._on(a,this._handleEvents);
this._hoverable(a);
this._focusable(a)
},_destroy:function(){this.handles.remove();
if(this.range){this.range.remove()
}this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()
},_mouseCapture:function(t){var p,b,u,r,c,a,q,v,o=this,s=this.options;
if(s.disabled){return false
}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
p={x:t.pageX,y:t.pageY};
b=this._normValueFromMouse(p);
u=this._valueMax()-this._valueMin()+1;
this.handles.each(function(h){var g=Math.abs(b-o.values(h));
if((u>g)||(u===g&&(h===o._lastChangedValue||o.values(h)===s.min))){u=g;
r=d(this);
c=h
}});
a=this._start(t,c);
if(a===false){return false
}this._mouseSliding=true;
this._handleIndex=c;
r.addClass("ui-state-active").focus();
q=r.offset();
v=!d(t.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=v?{left:0,top:0}:{left:t.pageX-q.left-(r.width()/2),top:t.pageY-q.top-(r.height()/2)-(parseInt(r.css("borderTopWidth"),10)||0)-(parseInt(r.css("borderBottomWidth"),10)||0)+(parseInt(r.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(t,c,b)
}this._animateOff=true;
return true
},_mouseStart:function(){return true
},_mouseDrag:function(a){var c={x:a.pageX,y:a.pageY},b=this._normValueFromMouse(c);
this._slide(a,this._handleIndex,b);
return false
},_mouseStop:function(a){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;
this._stop(a,this._handleIndex);
this._change(a,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(k){var l,b,c,j,a;
if(this.orientation==="horizontal"){l=this.elementSize.width;
b=k.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)
}else{l=this.elementSize.height;
b=k.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)
}c=(b/l);
if(c>1){c=1
}if(c<0){c=0
}if(this.orientation==="vertical"){c=1-c
}j=this._valueMax()-this._valueMin();
a=this._valueMin()+c*j;
return this._trimAlignValue(a)
},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};
if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()
}return this._trigger("start",a,c)
},_slide:function(b,c,j){var l,k,a;
if(this.options.values&&this.options.values.length){l=this.values(c?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((c===0&&j>l)||(c===1&&j<l))){j=l
}if(j!==this.values(c)){k=this.values();
k[c]=j;
a=this._trigger("slide",b,{handle:this.handles[c],value:j,values:k});
l=this.values(c?0:1);
if(a!==false){this.values(c,j)
}}}else{if(j!==this.value()){a=this._trigger("slide",b,{handle:this.handles[c],value:j});
if(a!==false){this.value(j)
}}}},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};
if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()
}this._trigger("stop",a,c)
},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};
if(this.options.values&&this.options.values.length){c.value=this.values(b);
c.values=this.values()
}this._lastChangedValue=b;
this._trigger("change",a,c)
}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a);
this._refreshValue();
this._change(null,0);
return
}return this._value()
},values:function(i,a){var b,j,c;
if(arguments.length>1){this.options.values[i]=this._trimAlignValue(a);
this._refreshValue();
this._change(null,i);
return
}if(arguments.length){if(d.isArray(arguments[0])){b=this.options.values;
j=arguments[0];
for(c=0;
c<b.length;
c+=1){b[c]=this._trimAlignValue(j[c]);
this._change(null,c)
}this._refreshValue()
}else{if(this.options.values&&this.options.values.length){return this._values(i)
}else{return this.value()
}}}else{return this._values()
}},_setOption:function(c,b){var h,a=0;
if(c==="range"&&this.options.range===true){if(b==="min"){this.options.value=this._values(0);
this.options.values=null
}else{if(b==="max"){this.options.value=this._values(this.options.values.length-1);
this.options.values=null
}}}if(d.isArray(this.options.values)){a=this.options.values.length
}d.Widget.prototype._setOption.apply(this,arguments);
switch(c){case"orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":this._animateOff=true;
this._refreshValue();
for(h=0;
h<a;
h+=1){this._change(null,h)
}this._animateOff=false;
break;
case"min":case"max":this._animateOff=true;
this._refreshValue();
this._animateOff=false;
break;
case"range":this._animateOff=true;
this._refresh();
this._animateOff=false;
break
}},_value:function(){var a=this.options.value;
a=this._trimAlignValue(a);
return a
},_values:function(h){var a,b,c;
if(arguments.length){a=this.options.values[h];
a=this._trimAlignValue(a);
return a
}else{if(this.options.values&&this.options.values.length){b=this.options.values.slice();
for(c=0;
c<b.length;
c+=1){b[c]=this._trimAlignValue(b[c])
}return b
}else{return[]
}}},_trimAlignValue:function(a){if(a<=this._valueMin()){return this._valueMin()
}if(a>=this._valueMax()){return this._valueMax()
}var h=(this.options.step>0)?this.options.step:1,b=(a-this._valueMin())%h,c=a-b;
if(Math.abs(b)*2>=h){c+=(b>0)?h:(-h)
}return parseFloat(c.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var o,p,b,n,a,q=this.options.range,r=this.options,c=this,s=(!this._animateOff)?r.animate:false,t={};
if(this.options.values&&this.options.values.length){this.handles.each(function(g){p=(c.values(g)-c._valueMin())/(c._valueMax()-c._valueMin())*100;
t[c.orientation==="horizontal"?"left":"bottom"]=p+"%";
d(this).stop(1,1)[s?"animate":"css"](t,r.animate);
if(c.options.range===true){if(c.orientation==="horizontal"){if(g===0){c.range.stop(1,1)[s?"animate":"css"]({left:p+"%"},r.animate)
}if(g===1){c.range[s?"animate":"css"]({width:(p-o)+"%"},{queue:false,duration:r.animate})
}}else{if(g===0){c.range.stop(1,1)[s?"animate":"css"]({bottom:(p)+"%"},r.animate)
}if(g===1){c.range[s?"animate":"css"]({height:(p-o)+"%"},{queue:false,duration:r.animate})
}}}o=p
})
}else{b=this.value();
n=this._valueMin();
a=this._valueMax();
p=(a!==n)?(b-n)/(a-n)*100:0;
t[this.orientation==="horizontal"?"left":"bottom"]=p+"%";
this.handle.stop(1,1)[s?"animate":"css"](t,r.animate);
if(q==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[s?"animate":"css"]({width:p+"%"},r.animate)
}if(q==="max"&&this.orientation==="horizontal"){this.range[s?"animate":"css"]({width:(100-p)+"%"},{queue:false,duration:r.animate})
}if(q==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[s?"animate":"css"]({height:p+"%"},r.animate)
}if(q==="max"&&this.orientation==="vertical"){this.range[s?"animate":"css"]({height:(100-p)+"%"},{queue:false,duration:r.animate})
}}},_handleEvents:{keydown:function(b){var a,j,k,c,l=d(b.target).data("ui-slider-handle-index");
switch(b.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:b.preventDefault();
if(!this._keySliding){this._keySliding=true;
d(b.target).addClass("ui-state-active");
a=this._start(b,l);
if(a===false){return
}}break
}c=this.options.step;
if(this.options.values&&this.options.values.length){j=k=this.values(l)
}else{j=k=this.value()
}switch(b.keyCode){case d.ui.keyCode.HOME:k=this._valueMin();
break;
case d.ui.keyCode.END:k=this._valueMax();
break;
case d.ui.keyCode.PAGE_UP:k=this._trimAlignValue(j+((this._valueMax()-this._valueMin())/e));
break;
case d.ui.keyCode.PAGE_DOWN:k=this._trimAlignValue(j-((this._valueMax()-this._valueMin())/e));
break;
case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(j===this._valueMax()){return
}k=this._trimAlignValue(j+c);
break;
case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(j===this._valueMin()){return
}k=this._trimAlignValue(j-c);
break
}this._slide(b,l,k)
},click:function(a){a.preventDefault()
},keyup:function(a){var b=d(a.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;
this._stop(a,b);
this._change(a,b);
d(a.target).removeClass("ui-state-active")
}}}})
}(jQuery));
(function(e,g){function f(b,c,a){return(b>c)&&(b<(c+a))
}function h(a){return(/left|right/).test(a.css("float"))||(/inline|table-cell/).test(a.css("display"))
}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var a=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?a.axis==="x"||h(this.items[0].item):false;
this.offset=this.element.offset();
this._mouseInit();
this.ready=true
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();
for(var a=this.items.length-1;
a>=0;
a--){this.items[a].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(b,a){if(b==="disabled"){this.options[b]=a;
this.widget().toggleClass("ui-sortable-disabled",!!a)
}else{e.Widget.prototype._setOption.apply(this,arguments)
}},_mouseCapture:function(c,b){var j=null,a=false,d=this;
if(this.reverting){return false
}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(c);
e(c.target).parents().each(function(){if(e.data(this,d.widgetName+"-item")===d){j=e(this);
return false
}});
if(e.data(c.target,d.widgetName+"-item")===d){j=e(c.target)
}if(!j){return false
}if(this.options.handle&&!b){e(this.options.handle,j).find("*").addBack().each(function(){if(this===c.target){a=true
}});
if(!a){return false
}}this.currentItem=j;
this._removeCurrentsFromItems();
return true
},_mouseStart:function(c,b,i){var d,l,a=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(c);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
e.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(c);
this.originalPageX=c.pageX;
this.originalPageY=c.pageY;
(a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt));
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()
}this._createPlaceholder();
if(a.containment){this._setContainment()
}if(a.cursor&&a.cursor!=="auto"){l=this.document.find("body");
this.storedCursor=l.css("cursor");
l.css("cursor",a.cursor);
this.storedStylesheet=e("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(l)
}if(a.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",a.opacity)
}if(a.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",a.zIndex)
}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",c,this._uiHash());
if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!i){for(d=this.containers.length-1;
d>=0;
d--){this.containers[d]._trigger("activate",c,this._uiHash(this))
}}if(e.ui.ddmanager){e.ui.ddmanager.current=this
}if(e.ui.ddmanager&&!a.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,c)
}this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(c);
return true
},_mouseDrag:function(c){var i,d,m,a,b=this.options,n=false;
this.position=this._generatePosition(c);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-c.pageY<b.scrollSensitivity){this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop+b.scrollSpeed
}else{if(c.pageY-this.overflowOffset.top<b.scrollSensitivity){this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop-b.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-c.pageX<b.scrollSensitivity){this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft+b.scrollSpeed
}else{if(c.pageX-this.overflowOffset.left<b.scrollSensitivity){this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft-b.scrollSpeed
}}}else{if(c.pageY-e(document).scrollTop()<b.scrollSensitivity){n=e(document).scrollTop(e(document).scrollTop()-b.scrollSpeed)
}else{if(e(window).height()-(c.pageY-e(document).scrollTop())<b.scrollSensitivity){n=e(document).scrollTop(e(document).scrollTop()+b.scrollSpeed)
}}if(c.pageX-e(document).scrollLeft()<b.scrollSensitivity){n=e(document).scrollLeft(e(document).scrollLeft()-b.scrollSpeed)
}else{if(e(window).width()-(c.pageX-e(document).scrollLeft())<b.scrollSensitivity){n=e(document).scrollLeft(e(document).scrollLeft()+b.scrollSpeed)
}}}if(n!==false&&e.ui.ddmanager&&!b.dropBehaviour){e.ui.ddmanager.prepareOffsets(this,c)
}}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(i=this.items.length-1;
i>=0;
i--){d=this.items[i];
m=d.item[0];
a=this._intersectsWithPointer(d);
if(!a){continue
}if(d.instance!==this.currentContainer){continue
}if(m!==this.currentItem[0]&&this.placeholder[a===1?"next":"prev"]()[0]!==m&&!e.contains(this.placeholder[0],m)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],m):true)){this.direction=a===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(d)){this._rearrange(c,d)
}else{break
}this._trigger("change",c,this._uiHash());
break
}}this._contactContainers(c);
if(e.ui.ddmanager){e.ui.ddmanager.drag(this,c)
}this._trigger("sort",c,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false
},_mouseStop:function(d,b){if(!d){return
}if(e.ui.ddmanager&&!this.options.dropBehaviour){e.ui.ddmanager.drop(this,d)
}if(this.options.revert){var k=this,a=this.placeholder.offset(),l=this.options.axis,c={};
if(!l||l==="x"){c.left=a.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)
}if(!l||l==="y"){c.top=a.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)
}this.reverting=true;
e(this.helper).animate(c,parseInt(this.options.revert,10)||500,function(){k._clear(d)
})
}else{this._clear(d,b)
}return false
},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(var a=this.containers.length-1;
a>=0;
a--){this.containers[a]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[a].containerCache.over){this.containers[a]._trigger("out",null,this._uiHash(this));
this.containers[a].containerCache.over=0
}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}e.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){e(this.domPosition.prev).after(this.currentItem)
}else{e(this.domPosition.parent).prepend(this.currentItem)
}}return this
},serialize:function(a){var c=this._getItemsAsjQuery(a&&a.connected),b=[];
a=a||{};
e(c).each(function(){var d=(e(a.item||this).attr(a.attribute||"id")||"").match(a.expression||(/(.+)[\-=_](.+)/));
if(d){b.push((a.key||d[1]+"[]")+"="+(a.key&&a.expression?d[1]:d[2]))
}});
if(!b.length&&a.key){b.push(a.key+"=")
}return b.join("&")
},toArray:function(a){var c=this._getItemsAsjQuery(a&&a.connected),b=[];
a=a||{};
c.each(function(){b.push(e(a.item||this).attr(a.attribute||"id")||"")
});
return b
},_intersectsWith:function(a){var x=this.positionAbs.left,y=x+this.helperProportions.width,c=this.positionAbs.top,d=c+this.helperProportions.height,w=a.left,z=w+a.width,B=a.top,l=B+a.height,A=this.offset.click.top,r=this.offset.click.left,t=(this.options.axis==="x")||((c+A)>B&&(c+A)<l),b=(this.options.axis==="y")||((x+r)>w&&(x+r)<z),v=t&&b;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"])){return v
}else{return(w<x+(this.helperProportions.width/2)&&y-(this.helperProportions.width/2)<z&&B<c+(this.helperProportions.height/2)&&d-(this.helperProportions.height/2)<l)
}},_intersectsWithPointer:function(d){var c=(this.options.axis==="x")||f(this.positionAbs.top+this.offset.click.top,d.top,d.height),k=(this.options.axis==="y")||f(this.positionAbs.left+this.offset.click.left,d.left,d.width),a=c&&k,l=this._getDragVerticalDirection(),b=this._getDragHorizontalDirection();
if(!a){return false
}return this.floating?(((b&&b==="right")||l==="down")?2:1):(l&&(l==="down"?2:1))
},_intersectsWithSides:function(b){var d=f(this.positionAbs.top+this.offset.click.top,b.top+(b.height/2),b.height),c=f(this.positionAbs.left+this.offset.click.left,b.left+(b.width/2),b.width),j=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();
if(this.floating&&a){return((a==="right"&&c)||(a==="left"&&!c))
}else{return j&&((j==="down"&&d)||(j==="up"&&!d))
}},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;
return a!==0&&(a>0?"down":"up")
},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;
return a!==0&&(a>0?"right":"left")
},refresh:function(a){this._refreshItems(a);
this.refreshPositions();
return this
},_connectWith:function(){var a=this.options;
return a.connectWith.constructor===String?[a.connectWith]:a.connectWith
},_getItemsAsjQuery:function(r){var p,q,b,i,d=[],j=[],c=this._connectWith();
if(c&&r){for(p=c.length-1;
p>=0;
p--){b=e(c[p]);
for(q=b.length-1;
q>=0;
q--){i=e.data(b[q],this.widgetFullName);
if(i&&i!==this&&!i.options.disabled){j.push([e.isFunction(i.options.items)?i.options.items.call(i.element):e(i.options.items,i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),i])
}}}}j.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
function a(){d.push(this)
}for(p=j.length-1;
p>=0;
p--){j[p][0].each(a)
}return e(d)
},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=e.grep(this.items,function(b){for(var c=0;
c<a.length;
c++){if(a[c]===b.item[0]){return false
}}return true
})
},_refreshItems:function(x){this.items=[];
this.containers=[this];
var t,v,c,s,d,w,a,b,j=this.items,u=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],x,{item:this.currentItem}):e(this.options.items,this.element),this]],i=this._connectWith();
if(i&&this.ready){for(t=i.length-1;
t>=0;
t--){c=e(i[t]);
for(v=c.length-1;
v>=0;
v--){s=e.data(c[v],this.widgetFullName);
if(s&&s!==this&&!s.options.disabled){u.push([e.isFunction(s.options.items)?s.options.items.call(s.element[0],x,{item:this.currentItem}):e(s.options.items,s.element),s]);
this.containers.push(s)
}}}}for(t=u.length-1;
t>=0;
t--){d=u[t][1];
w=u[t][0];
for(v=0,b=w.length;
v<b;
v++){a=e(w[v]);
a.data(this.widgetName+"-item",d);
j.push({item:a,instance:d,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(i){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var c,b,d,a;
for(c=this.items.length-1;
c>=0;
c--){b=this.items[c];
if(b.instance!==this.currentContainer&&this.currentContainer&&b.item[0]!==this.currentItem[0]){continue
}d=this.options.toleranceElement?e(this.options.toleranceElement,b.item):b.item;
if(!i){b.width=d.outerWidth();
b.height=d.outerHeight()
}a=d.offset();
b.left=a.left;
b.top=a.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(c=this.containers.length-1;
c>=0;
c--){a=this.containers[c].element.offset();
this.containers[c].containerCache.left=a.left;
this.containers[c].containerCache.top=a.top;
this.containers[c].containerCache.width=this.containers[c].element.outerWidth();
this.containers[c].containerCache.height=this.containers[c].element.outerHeight()
}}return this
},_createPlaceholder:function(b){b=b||this;
var c,a=b.options;
if(!a.placeholder||a.placeholder.constructor===String){c=a.placeholder;
a.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),j=e("<"+d+">",b.document[0]).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
if(d==="tr"){b.currentItem.children().each(function(){e("<td>&#160;</td>",b.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(j)
})
}else{if(d==="img"){j.attr("src",b.currentItem.attr("src"))
}}if(!c){j.css("visibility","hidden")
}return j
},update:function(j,d){if(c&&!a.forcePlaceholderSize){return
}if(!d.height()){d.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10))
}if(!d.width()){d.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))
}}}
}b.placeholder=e(a.placeholder.element.call(b.element,b.currentItem));
b.currentItem.after(b.placeholder);
a.placeholder.update(b,b.placeholder)
},_contactContainers:function(y){var t,v,c,j,i,a,x,z,u,d,w=null,b=null;
for(t=this.containers.length-1;
t>=0;
t--){if(e.contains(this.currentItem[0],this.containers[t].element[0])){continue
}if(this._intersectsWith(this.containers[t].containerCache)){if(w&&e.contains(this.containers[t].element[0],w.element[0])){continue
}w=this.containers[t];
b=t
}else{if(this.containers[t].containerCache.over){this.containers[t]._trigger("out",y,this._uiHash(this));
this.containers[t].containerCache.over=0
}}}if(!w){return
}if(this.containers.length===1){if(!this.containers[b].containerCache.over){this.containers[b]._trigger("over",y,this._uiHash(this));
this.containers[b].containerCache.over=1
}}else{c=10000;
j=null;
d=w.floating||h(this.currentItem);
i=d?"left":"top";
a=d?"width":"height";
x=this.positionAbs[i]+this.offset.click[i];
for(v=this.items.length-1;
v>=0;
v--){if(!e.contains(this.containers[b].element[0],this.items[v].item[0])){continue
}if(this.items[v].item[0]===this.currentItem[0]){continue
}if(d&&!f(this.positionAbs.top+this.offset.click.top,this.items[v].top,this.items[v].height)){continue
}z=this.items[v].item.offset()[i];
u=false;
if(Math.abs(z-x)>Math.abs(z+this.items[v][a]-x)){u=true;
z+=this.items[v][a]
}if(Math.abs(z-x)<c){c=Math.abs(z-x);
j=this.items[v];
this.direction=u?"up":"down"
}}if(!j&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[b]){return
}j?this._rearrange(y,j,null,true):this._rearrange(y,null,this.containers[b].element,true);
this._trigger("change",y,this._uiHash());
this.containers[b]._trigger("change",y,this._uiHash(this));
this.currentContainer=this.containers[b];
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[b]._trigger("over",y,this._uiHash(this));
this.containers[b].containerCache.over=1
}},_createHelper:function(b){var a=this.options,c=e.isFunction(a.helper)?e(a.helper.apply(this.element[0],[b,this.currentItem])):(a.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!c.parents("body").length){e(a.appendTo!=="parent"?a.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])
}if(c[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!c[0].style.width||a.forceHelperSize){c.width(this.currentItem.width())
}if(!c[0].style.height||a.forceHelperSize){c.height(this.currentItem.height())
}return c
},_adjustOffsetFromHelper:function(a){if(typeof a==="string"){a=a.split(" ")
}if(e.isArray(a)){a={left:+a[0],top:+a[1]||0}
}if("left" in a){this.offset.click.left=a.left+this.margins.left
}if("right" in a){this.offset.click.left=this.helperProportions.width-a.right+this.margins.left
}if("top" in a){this.offset.click.top=a.top+this.margins.top
}if("bottom" in a){this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop()
}if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var a=this.currentItem.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}
}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var c,a,d,b=this.options;
if(b.containment==="parent"){b.containment=this.helper[0].parentNode
}if(b.containment==="document"||b.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(b.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(b.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(b.containment)){c=e(b.containment)[0];
a=e(b.containment).offset();
d=(e(c).css("overflow")!=="hidden");
this.containment=[a.left+(parseInt(e(c).css("borderLeftWidth"),10)||0)+(parseInt(e(c).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(e(c).css("borderTopWidth"),10)||0)+(parseInt(e(c).css("paddingTop"),10)||0)-this.margins.top,a.left+(d?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(e(c).css("borderLeftWidth"),10)||0)-(parseInt(e(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(d?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(e(c).css("borderTopWidth"),10)||0)-(parseInt(e(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(c,a){if(!a){a=this.position
}var d=c==="absolute"?1:-1,j=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,b=(/(html|body)/i).test(j[0].tagName);
return{top:(a.top+this.offset.relative.top*d+this.offset.parent.top*d-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(b?0:j.scrollTop()))*d)),left:(a.left+this.offset.relative.left*d+this.offset.parent.left*d-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():b?0:j.scrollLeft())*d))}
},_generatePosition:function(m){var c,d,b=this.options,n=m.pageX,o=m.pageY,p=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,a=(/(html|body)/i).test(p[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(m.pageX-this.offset.click.left<this.containment[0]){n=this.containment[0]+this.offset.click.left
}if(m.pageY-this.offset.click.top<this.containment[1]){o=this.containment[1]+this.offset.click.top
}if(m.pageX-this.offset.click.left>this.containment[2]){n=this.containment[2]+this.offset.click.left
}if(m.pageY-this.offset.click.top>this.containment[3]){o=this.containment[3]+this.offset.click.top
}}if(b.grid){c=this.originalPageY+Math.round((o-this.originalPageY)/b.grid[1])*b.grid[1];
o=this.containment?((c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3])?c:((c-this.offset.click.top>=this.containment[1])?c-b.grid[1]:c+b.grid[1])):c;
d=this.originalPageX+Math.round((n-this.originalPageX)/b.grid[0])*b.grid[0];
n=this.containment?((d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2])?d:((d-this.offset.click.left>=this.containment[0])?d-b.grid[0]:d+b.grid[0])):d
}}return{top:(o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(a?0:p.scrollTop())))),left:(n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:p.scrollLeft())))}
},_rearrange:function(a,b,d,c){d?d[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?b.item[0]:b.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var i=this.counter;
this._delay(function(){if(i===this.counter){this.refreshPositions(!c)
}})
},_clear:function(d,b){this.reverting=false;
var i,a=[];
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;
if(this.helper[0]===this.currentItem[0]){for(i in this._storedCSS){if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){this._storedCSS[i]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}if(this.fromOutside&&!b){a.push(function(j){this._trigger("receive",j,this._uiHash(this.fromOutside))
})
}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!b){a.push(function(j){this._trigger("update",j,this._uiHash())
})
}if(this!==this.currentContainer){if(!b){a.push(function(j){this._trigger("remove",j,this._uiHash())
});
a.push((function(j){return function(l){j._trigger("receive",l,this._uiHash(this))
}
}).call(this,this.currentContainer));
a.push((function(j){return function(l){j._trigger("update",l,this._uiHash(this))
}
}).call(this,this.currentContainer))
}}function c(j,n,m){return function(k){m._trigger(j,k,n._uiHash(n))
}
}for(i=this.containers.length-1;
i>=0;
i--){if(!b){a.push(c("deactivate",this,this.containers[i]))
}if(this.containers[i].containerCache.over){a.push(c("out",this,this.containers[i]));
this.containers[i].containerCache.over=0
}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);
this.storedStylesheet.remove()
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)
}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;
if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",d,this._uiHash());
for(i=0;
i<a.length;
i++){a[i].call(this,d)
}this._trigger("stop",d,this._uiHash())
}this.fromOutside=false;
return false
}if(!b){this._trigger("beforeStop",d,this._uiHash())
}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()
}this.helper=null;
if(!b){for(i=0;
i<a.length;
i++){a[i].call(this,d)
}this._trigger("stop",d,this._uiHash())
}this.fromOutside=false;
return true
},_trigger:function(){if(e.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(b){var a=b||this;
return{helper:a.helper,placeholder:a.placeholder||e([]),position:a.position,originalPosition:a.originalPosition,offset:a.positionAbs,item:a.currentItem,sender:b?b.element:null}
}})
})(jQuery);
(function(c){function d(a){return function(){var b=this.element.val();
a.apply(this,arguments);
this._refresh();
if(b!==this.element.val()){this._trigger("change")
}}
}c.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);
this._setOption("min",this.options.min);
this._setOption("step",this.options.step);
if(this.value()!==""){this._value(this.element.val(),true)
}this._draw();
this._on(this._events);
this._refresh();
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var b={},a=this.element;
c.each(["min","max","step"],function(j,i){var h=a.attr(i);
if(h!==undefined&&h.length){b[i]=h
}});
return b
},_events:{keydown:function(a){if(this._start(a)&&this._keydown(a)){a.preventDefault()
}},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(a){if(this.cancelBlur){delete this.cancelBlur;
return
}this._stop();
this._refresh();
if(this.previous!==this.element.val()){this._trigger("change",a)
}},mousewheel:function(b,a){if(!a){return
}if(!this.spinning&&!this._start(b)){return false
}this._spin((a>0?1:-1)*this.options.step,b);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(b)
}},100);
b.preventDefault()
},"mousedown .ui-spinner-button":function(b){var f;
f=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();
function a(){var e=this.element[0]===this.document[0].activeElement;
if(!e){this.element.focus();
this.previous=f;
this._delay(function(){this.previous=f
})
}}b.preventDefault();
a.call(this);
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur;
a.call(this)
});
if(this._start(b)===false){return
}this._repeat(null,c(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(a){if(!c(a.currentTarget).hasClass("ui-state-active")){return
}if(this._start(a)===false){return false
}this._repeat(null,c(a.currentTarget).hasClass("ui-spinner-up")?1:-1,a)
},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var a=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton");
this.buttons=a.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");
if(this.buttons.height()>Math.ceil(a.height()*0.5)&&a.height()>0){a.height(a.height())
}if(this.options.disabled){this.disable()
}},_keydown:function(b){var f=this.options,a=c.ui.keyCode;
switch(b.keyCode){case a.UP:this._repeat(null,1,b);
return true;
case a.DOWN:this._repeat(null,-1,b);
return true;
case a.PAGE_UP:this._repeat(null,f.page,b);
return true;
case a.PAGE_DOWN:this._repeat(null,-f.page,b);
return true
}return false
},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"
},_start:function(a){if(!this.spinning&&this._trigger("start",a)===false){return false
}if(!this.counter){this.counter=1
}this.spinning=true;
return true
},_repeat:function(b,f,a){b=b||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){this._repeat(40,f,a)
},b);
this._spin(f*this.options.step,a)
},_spin:function(b,f){var a=this.value()||0;
if(!this.counter){this.counter=1
}a=this._adjustValue(a+b*this._increment(this.counter));
if(!this.spinning||this._trigger("spin",f,{value:a})!==false){this._value(a);
this.counter++
}},_increment:function(b){var a=this.options.incremental;
if(a){return c.isFunction(a)?a(b):Math.floor(b*b*b/50000-b*b/500+17*b/200+1)
}return 1
},_precision:function(){var a=this._precisionOf(this.options.step);
if(this.options.min!==null){a=Math.max(a,this._precisionOf(this.options.min))
}return a
},_precisionOf:function(b){var a=b.toString(),f=a.indexOf(".");
return f===-1?0:a.length-f-1
},_adjustValue:function(b){var g,a,h=this.options;
g=h.min!==null?h.min:0;
a=b-g;
a=Math.round(a/h.step)*h.step;
b=g+a;
b=parseFloat(b.toFixed(this._precision()));
if(h.max!==null&&b>h.max){return h.max
}if(h.min!==null&&b<h.min){return h.min
}return b
},_stop:function(a){if(!this.spinning){return
}clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop",a)
},_setOption:function(f,b){if(f==="culture"||f==="numberFormat"){var a=this._parse(this.element.val());
this.options[f]=b;
this.element.val(this._format(a));
return
}if(f==="max"||f==="min"||f==="step"){if(typeof b==="string"){b=this._parse(b)
}}if(f==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up);
this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)
}this._super(f,b);
if(f==="disabled"){if(b){this.element.prop("disabled",true);
this.buttons.button("disable")
}else{this.element.prop("disabled",false);
this.buttons.button("enable")
}}},_setOptions:d(function(a){this._super(a);
this._value(this.element.val())
}),_parse:function(a){if(typeof a==="string"&&a!==""){a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a
}return a===""||isNaN(a)?null:a
},_format:function(a){if(a===""){return""
}return window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},_value:function(a,f){var b;
if(a!==""){b=this._parse(a);
if(b!==null){if(!f){b=this._adjustValue(b)
}a=this._format(b)
}}this.element.val(a);
this._refresh()
},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.uiSpinner.replaceWith(this.element)
},stepUp:d(function(a){this._stepUp(a)
}),_stepUp:function(a){if(this._start()){this._spin((a||1)*this.options.step);
this._stop()
}},stepDown:d(function(a){this._stepDown(a)
}),_stepDown:function(a){if(this._start()){this._spin((a||1)*-this.options.step);
this._stop()
}},pageUp:d(function(a){this._stepUp((a||1)*this.options.page)
}),pageDown:d(function(a){this._stepDown((a||1)*this.options.page)
}),value:function(a){if(!arguments.length){return this._parse(this.element.val())
}d(this._value).call(this,a)
},widget:function(){return this.uiSpinner
}})
}(jQuery));
(function(l,j){var h=0,i=/#.*$/;
function k(){return ++h
}function g(a){a=a.cloneNode(false);
return a.hash.length>1&&decodeURIComponent(a.href.replace(i,""))===decodeURIComponent(location.href.replace(i,""))
}l.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var a=this,b=this.options;
this.running=false;
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",b.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(c){if(l(this).is(".ui-state-disabled")){c.preventDefault()
}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(l(this).closest("li").is(".ui-state-disabled")){this.blur()
}});
this._processTabs();
b.active=this._initialActive();
if(l.isArray(b.disabled)){b.disabled=l.unique(b.disabled.concat(l.map(this.tabs.filter(".ui-state-disabled"),function(c){return a.tabs.index(c)
}))).sort()
}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(b.active)
}else{this.active=l()
}this._refresh();
if(this.active.length){this.load(b.active)
}},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,a=location.hash.substring(1);
if(b===null){if(a){this.tabs.each(function(e,d){if(l(d).attr("aria-controls")===a){b=e;
return false
}})
}if(b===null){b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(b===null||b===-1){b=this.tabs.length?0:false
}}if(b!==false){b=this.tabs.index(this.tabs.eq(b));
if(b===-1){b=c?false:0
}}if(!c&&b===false&&this.anchors.length){b=0
}return b
},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?l():this._getPanelForTab(this.active)}
},_tabKeydown:function(b){var c=l(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),a=true;
if(this._handlePageNav(b)){return
}switch(b.keyCode){case l.ui.keyCode.RIGHT:case l.ui.keyCode.DOWN:d++;
break;
case l.ui.keyCode.UP:case l.ui.keyCode.LEFT:a=false;
d--;
break;
case l.ui.keyCode.END:d=this.anchors.length-1;
break;
case l.ui.keyCode.HOME:d=0;
break;
case l.ui.keyCode.SPACE:b.preventDefault();
clearTimeout(this.activating);
this._activate(d);
return;
case l.ui.keyCode.ENTER:b.preventDefault();
clearTimeout(this.activating);
this._activate(d===this.options.active?false:d);
return;
default:return
}b.preventDefault();
clearTimeout(this.activating);
d=this._focusNextTab(d,a);
if(!b.ctrlKey){c.attr("aria-selected","false");
this.tabs.eq(d).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",d)
},this.delay)
}},_panelKeydown:function(a){if(this._handlePageNav(a)){return
}if(a.ctrlKey&&a.keyCode===l.ui.keyCode.UP){a.preventDefault();
this.active.focus()
}},_handlePageNav:function(a){if(a.altKey&&a.keyCode===l.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true
}if(a.altKey&&a.keyCode===l.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true
}},_findNextTab:function(c,b){var d=this.tabs.length-1;
function a(){if(c>d){c=0
}if(c<0){c=d
}return c
}while(l.inArray(a(),this.options.disabled)!==-1){c=b?c+1:c-1
}return c
},_focusNextTab:function(b,a){b=this._findNextTab(b,a);
this.tabs.eq(b).focus();
return b
},_setOption:function(b,a){if(b==="active"){this._activate(a);
return
}if(b==="disabled"){this._setupDisabled(a);
return
}this._super(b,a);
if(b==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",a);
if(!a&&this.options.active===false){this._activate(0)
}}if(b==="event"){this._setupEvents(a)
}if(b==="heightStyle"){this._setupHeightStyle(a)
}},_tabId:function(a){return a.attr("aria-controls")||"ui-tabs-"+k()
},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var a=this.options,b=this.tablist.children(":has(a[href])");
a.disabled=l.map(b.filter(".ui-state-disabled"),function(c){return b.index(c)
});
this._processTabs();
if(a.active===false||!this.anchors.length){a.active=false;
this.active=l()
}else{if(this.active.length&&!l.contains(this.tablist[0],this.active[0])){if(this.tabs.length===a.disabled.length){a.active=false;
this.active=l()
}else{this._activate(this._findNextTab(Math.max(0,a.active-1),false))
}}else{a.active=this.tabs.index(this.active)
}}this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)
}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})
}},_processTabs:function(){var a=this;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});
this.anchors=this.tabs.map(function(){return l("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});
this.panels=l();
this.anchors.each(function(s,c){var f,e,b,d=l(c).uniqueId().attr("id"),r=l(c).closest("li"),q=r.attr("aria-controls");
if(g(c)){f=c.hash;
e=a.element.find(a._sanitizeSelector(f))
}else{b=a._tabId(r);
f="#"+b;
e=a.element.find(f);
if(!e.length){e=a._createPanel(b);
e.insertAfter(a.panels[s-1]||a.tablist)
}e.attr("aria-live","polite")
}if(e.length){a.panels=a.panels.add(e)
}if(q){r.data("ui-tabs-aria-controls",q)
}r.attr({"aria-controls":f.substring(1),"aria-labelledby":d});
e.attr("aria-labelledby",d)
});
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)
},_createPanel:function(a){return l("<div>").attr("id",a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
},_setupDisabled:function(a){if(l.isArray(a)){if(!a.length){a=false
}else{if(a.length===this.anchors.length){a=true
}}}for(var b=0,c;
(c=this.tabs[b]);
b++){if(a===true||l.inArray(b,a)!==-1){l(c).addClass("ui-state-disabled").attr("aria-disabled","true")
}else{l(c).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}}this.options.disabled=a
},_setupEvents:function(a){var b={click:function(c){c.preventDefault()
}};
if(a){l.each(a.split(" "),function(c,d){b[d]="_eventHandler"
})
}this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(this.anchors,b);
this._on(this.tabs,{keydown:"_tabKeydown"});
this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);
this._hoverable(this.tabs)
},_setupHeightStyle:function(c){var a,b=this.element.parent();
if(c==="fill"){a=b.height();
a-=this.element.outerHeight()-this.element.height();
this.element.siblings(":visible").each(function(){var d=l(this),e=d.css("position");
if(e==="absolute"||e==="fixed"){return
}a-=d.outerHeight(true)
});
this.element.children().not(this.panels).each(function(){a-=l(this).outerHeight(true)
});
this.panels.each(function(){l(this).height(Math.max(0,a-l(this).innerHeight()+l(this).height()))
}).css("overflow","auto")
}else{if(c==="auto"){a=0;
this.panels.each(function(){a=Math.max(a,l(this).height("").height())
}).height(a)
}}},_eventHandler:function(t){var a=this.options,f=this.active,e=l(t.currentTarget),q=e.closest("li"),c=q[0]===f[0],s=c&&a.collapsible,r=s?l():this._getPanelForTab(q),d=!f.length?l():this._getPanelForTab(f),b={oldTab:f,oldPanel:d,newTab:s?l():q,newPanel:r};
t.preventDefault();
if(q.hasClass("ui-state-disabled")||q.hasClass("ui-tabs-loading")||this.running||(c&&!a.collapsible)||(this._trigger("beforeActivate",t,b)===false)){return
}a.active=s?false:this.tabs.index(q);
this.active=c?l():q;
if(this.xhr){this.xhr.abort()
}if(!d.length&&!r.length){l.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(r.length){this.load(this.tabs.index(q),t)
}this._toggle(t,b)
},_toggle:function(a,b){var c=this,n=b.newPanel,d=b.oldPanel;
this.running=true;
function e(){c.running=false;
c._trigger("activate",a,b)
}function f(){b.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(n.length&&c.options.show){c._show(n,c.options.show,e)
}else{n.show();
e()
}}if(d.length&&this.options.hide){this._hide(d,this.options.hide,function(){b.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
f()
})
}else{b.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
d.hide();
f()
}d.attr({"aria-expanded":"false","aria-hidden":"true"});
b.oldTab.attr("aria-selected","false");
if(n.length&&d.length){b.oldTab.attr("tabIndex",-1)
}else{if(n.length){this.tabs.filter(function(){return l(this).attr("tabIndex")===0
}).attr("tabIndex",-1)
}}n.attr({"aria-expanded":"true","aria-hidden":"false"});
b.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(b){var c,a=this._findActive(b);
if(a[0]===this.active[0]){return
}if(!a.length){a=this.active
}c=a.find(".ui-tabs-anchor")[0];
this._eventHandler({target:c,currentTarget:c,preventDefault:l.noop})
},_findActive:function(a){return a===false?l():this.tabs.eq(a)
},_getIndex:function(a){if(typeof a==="string"){a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))
}return a
},_destroy:function(){if(this.xhr){this.xhr.abort()
}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(l.data(this,"ui-tabs-destroy")){l(this).remove()
}else{l(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}});
this.tabs.each(function(){var b=l(this),a=b.data("ui-tabs-aria-controls");
if(a){b.attr("aria-controls",a).removeData("ui-tabs-aria-controls")
}else{b.removeAttr("aria-controls")
}});
this.panels.show();
if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(b){var a=this.options.disabled;
if(a===false){return
}if(b===j){a=false
}else{b=this._getIndex(b);
if(l.isArray(a)){a=l.map(a,function(c){return c!==b?c:null
})
}else{a=l.map(this.tabs,function(d,c){return c!==b?c:null
})
}}this._setupDisabled(a)
},disable:function(b){var a=this.options.disabled;
if(a===true){return
}if(b===j){a=true
}else{b=this._getIndex(b);
if(l.inArray(b,a)!==-1){return
}if(l.isArray(a)){a=l.merge([b],a).sort()
}else{a=[b]
}}this._setupDisabled(a)
},load:function(e,a){e=this._getIndex(e);
var b=this,d=this.tabs.eq(e),f=d.find(".ui-tabs-anchor"),n=this._getPanelForTab(d),c={tab:d,panel:n};
if(g(f[0])){return
}this.xhr=l.ajax(this._ajaxSettings(f,a,c));
if(this.xhr&&this.xhr.statusText!=="canceled"){d.addClass("ui-tabs-loading");
n.attr("aria-busy","true");
this.xhr.success(function(m){setTimeout(function(){n.html(m);
b._trigger("load",a,c)
},1)
}).complete(function(m,p){setTimeout(function(){if(p==="abort"){b.panels.stop(false,true)
}d.removeClass("ui-tabs-loading");
n.removeAttr("aria-busy");
if(m===b.xhr){delete b.xhr
}},1)
})
}},_ajaxSettings:function(d,a,b){var c=this;
return{url:d.attr("href"),beforeSend:function(e,f){return c._trigger("beforeLoad",a,l.extend({jqXHR:e,ajaxSettings:f},b))
}}
},_getPanelForTab:function(b){var a=l(b).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+a))
}})
})(jQuery);
(function(g){var e=0;
function h(b,a){var c=(b.attr("aria-describedby")||"").split(/\s+/);
c.push(a);
b.data("ui-tooltip-id",a).attr("aria-describedby",g.trim(c.join(" ")))
}function f(b){var a=b.data("ui-tooltip-id"),c=(b.attr("aria-describedby")||"").split(/\s+/),d=g.inArray(a,c);
if(d!==-1){c.splice(d,1)
}b.removeData("ui-tooltip-id");
c=g.trim(c.join(" "));
if(c){b.attr("aria-describedby",c)
}else{b.removeAttr("aria-describedby")
}}g.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var a=g(this).attr("title")||"";
return g("<a>").text(a).html()
},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});
this.tooltips={};
this.parents={};
if(this.options.disabled){this._disable()
}},_setOption:function(c,a){var b=this;
if(c==="disabled"){this[a?"_disable":"_enable"]();
this.options[c]=a;
return
}this._super(c,a);
if(c==="content"){g.each(this.tooltips,function(d,j){b._updateContent(j)
})
}},_disable:function(){var a=this;
g.each(this.tooltips,function(b,d){var c=g.Event("blur");
c.target=c.currentTarget=d[0];
a.close(c,true)
});
this.element.find(this.options.items).addBack().each(function(){var b=g(this);
if(b.is("[title]")){b.data("ui-tooltip-title",b.attr("title")).attr("title","")
}})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var a=g(this);
if(a.data("ui-tooltip-title")){a.attr("title",a.data("ui-tooltip-title"))
}})
},open:function(b){var c=this,a=g(b?b.target:this.element).closest(this.options.items);
if(!a.length||a.data("ui-tooltip-id")){return
}if(a.attr("title")){a.data("ui-tooltip-title",a.attr("title"))
}a.data("ui-tooltip-open",true);
if(b&&b.type==="mouseover"){a.parents().each(function(){var d=g(this),j;
if(d.data("ui-tooltip-open")){j=g.Event("blur");
j.target=j.currentTarget=this;
c.close(j,true)
}if(d.attr("title")){d.uniqueId();
c.parents[this.id]={element:this,title:d.attr("title")};
d.attr("title","")
}})
}this._updateContent(a,b)
},_updateContent:function(a,b){var c,l=this.options.content,d=this,k=b?b.type:null;
if(typeof l==="string"){return this._open(b,a,l)
}c=l.call(a[0],function(i){if(!a.data("ui-tooltip-open")){return
}d._delay(function(){if(b){b.type=k
}this._open(b,a,i)
})
});
if(c){this._open(b,a,c)
}},_open:function(d,b,m){var c,n,o,a=g.extend({},this.options.position);
if(!m){return
}c=this._find(b);
if(c.length){c.find(".ui-tooltip-content").html(m);
return
}if(b.is("[title]")){if(d&&d.type==="mouseover"){b.attr("title","")
}else{b.removeAttr("title")
}}c=this._tooltip(b);
h(b,c.attr("id"));
c.find(".ui-tooltip-content").html(m);
function p(i){a.of=i;
if(c.is(":hidden")){return
}c.position(a)
}if(this.options.track&&d&&/^mouse/.test(d.type)){this._on(this.document,{mousemove:p});
p(d)
}else{c.position(g.extend({of:b},this.options.position))
}c.hide();
this._show(c,this.options.show);
if(this.options.show&&this.options.show.delay){o=this.delayedShow=setInterval(function(){if(c.is(":visible")){p(a.of);
clearInterval(o)
}},g.fx.interval)
}this._trigger("open",d,{tooltip:c});
n={keyup:function(i){if(i.keyCode===g.ui.keyCode.ESCAPE){var j=g.Event(i);
j.currentTarget=b[0];
this.close(j,true)
}},remove:function(){this._removeTooltip(c)
}};
if(!d||d.type==="mouseover"){n.mouseleave="close"
}if(!d||d.type==="focusin"){n.focusout="close"
}this._on(true,b,n)
},close:function(c){var d=this,a=g(c?c.currentTarget:this.element),b=this._find(a);
if(this.closing){return
}clearInterval(this.delayedShow);
if(a.data("ui-tooltip-title")){a.attr("title",a.data("ui-tooltip-title"))
}f(a);
b.stop(true);
this._hide(b,this.options.hide,function(){d._removeTooltip(g(this))
});
a.removeData("ui-tooltip-open");
this._off(a,"mouseleave focusout keyup");
if(a[0]!==this.element[0]){this._off(a,"remove")
}this._off(this.document,"mousemove");
if(c&&c.type==="mouseleave"){g.each(this.parents,function(k,l){g(l.element).attr("title",l.title);
delete d.parents[k]
})
}this.closing=true;
this._trigger("close",c,{tooltip:b});
this.closing=false
},_tooltip:function(c){var a="ui-tooltip-"+e++,b=g("<div>").attr({id:a,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
g("<div>").addClass("ui-tooltip-content").appendTo(b);
b.appendTo(this.document[0].body);
this.tooltips[a]=c;
return b
},_find:function(b){var a=b.data("ui-tooltip-id");
return a?g("#"+a):g()
},_removeTooltip:function(a){a.remove();
delete this.tooltips[a.attr("id")]
},_destroy:function(){var a=this;
g.each(this.tooltips,function(b,d){var c=g.Event("blur");
c.target=c.currentTarget=d[0];
a.close(c,true);
g("#"+b).remove();
if(d.data("ui-tooltip-title")){d.attr("title",d.data("ui-tooltip-title"));
d.removeData("ui-tooltip-title")
}})
}})
}(jQuery));
/*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2012 Jörn Zaefferer; Licensed MIT, GPL */
(function(b){b.extend(b.fn,{validate:function(a){if(!this.length){if(a&&a.debug&&window.console){console.warn("nothing selected, can't validate, returning nothing")
}return
}var d=b.data(this[0],"validator");
if(d){return d
}this.attr("novalidate","novalidate");
d=new b.validator(a,this[0]);
b.data(this[0],"validator",d);
if(d.settings.onsubmit){this.validateDelegate(":submit","click",function(c){if(d.settings.submitHandler){d.submitButton=c.target
}if(b(c.target).hasClass("cancel")){d.cancelSubmit=true
}});
this.submit(function(f){if(d.settings.debug){f.preventDefault()
}function c(){var e;
if(d.settings.submitHandler){if(d.submitButton){e=b("<input type='hidden'/>").attr("name",d.submitButton.name).val(d.submitButton.value).appendTo(d.currentForm)
}d.settings.submitHandler.call(d,d.currentForm,f);
if(d.submitButton){e.remove()
}return false
}return true
}if(d.cancelSubmit){d.cancelSubmit=false;
return c()
}if(d.form()){if(d.pendingRequest){d.formSubmitted=true;
return false
}return c()
}else{d.focusInvalid();
return false
}})
}return d
},valid:function(){if(b(this[0]).is("form")){return this.validate().form()
}else{var d=true;
var a=b(this[0].form).validate();
this.each(function(){d&=a.element(this)
});
return d
}},removeAttrs:function(e){var a={},f=this;
b.each(e.split(/\s/),function(d,c){a[c]=f.attr(c);
f.removeAttr(c)
});
return a
},rules:function(o,r){var m=this[0];
if(o){var p=b.data(m.form,"validator").settings;
var k=p.rules;
var a=b.validator.staticRules(m);
switch(o){case"add":b.extend(a,b.validator.normalizeRule(r));
k[m.name]=a;
if(r.messages){p.messages[m.name]=b.extend(p.messages[m.name],r.messages)
}break;
case"remove":if(!r){delete k[m.name];
return a
}var l={};
b.each(r.split(/\s/),function(d,c){l[c]=a[c];
delete a[c]
});
return l
}}var n=b.validator.normalizeRules(b.extend({},b.validator.metadataRules(m),b.validator.classRules(m),b.validator.attributeRules(m),b.validator.staticRules(m)),m);
if(n.required){var q=n.required;
delete n.required;
n=b.extend({required:q},n)
}return n
}});
b.extend(b.expr[":"],{blank:function(a){return !b.trim(""+a.value)
},filled:function(a){return !!b.trim(""+a.value)
},unchecked:function(a){return !a.checked
}});
b.validator=function(a,d){this.settings=b.extend(true,{},b.validator.defaults,a);
this.currentForm=d;
this.init()
};
b.validator.format=function(a,d){if(arguments.length===1){return function(){var c=b.makeArray(arguments);
c.unshift(a);
return b.validator.format.apply(this,c)
}
}if(arguments.length>2&&d.constructor!==Array){d=b.makeArray(arguments).slice(1)
}if(d.constructor!==Array){d=[d]
}b.each(d,function(f,c){a=a.replace(new RegExp("\\{"+f+"\\}","g"),c)
});
return a
};
b.extend(b.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:b([]),errorLabelContainer:b([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(a,d){this.lastActive=a;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass)
}this.addWrapper(this.errorsFor(a)).hide()
}},onfocusout:function(a,d){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a))){this.element(a)
}},onkeyup:function(a,d){if(d.which===9&&this.elementValue(a)===""){return
}else{if(a.name in this.submitted||a===this.lastActive){this.element(a)
}}},onclick:function(a,d){if(a.name in this.submitted){this.element(a)
}else{if(a.parentNode.name in this.submitted){this.element(a.parentNode)
}}},highlight:function(e,a,f){if(e.type==="radio"){this.findByName(e.name).addClass(a).removeClass(f)
}else{b(e).addClass(a).removeClass(f)
}},unhighlight:function(e,a,f){if(e.type==="radio"){this.findByName(e.name).removeClass(a).addClass(f)
}else{b(e).removeClass(a).addClass(f)
}}},setDefaults:function(a){b.extend(b.validator.defaults,a)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:b.validator.format("Please enter no more than {0} characters."),minlength:b.validator.format("Please enter at least {0} characters."),rangelength:b.validator.format("Please enter a value between {0} and {1} characters long."),range:b.validator.format("Please enter a value between {0} and {1}."),max:b.validator.format("Please enter a value less than or equal to {0}."),min:b.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=b(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||b(this.currentForm);
this.containers=b(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var a=(this.groups={});
b.each(this.settings.groups,function(d,c){b.each(c.split(/\s/),function(i,j){a[j]=d
})
});
var e=this.settings.rules;
b.each(e,function(d,c){e[d]=b.validator.normalizeRule(c)
});
function f(c){var d=b.data(this[0].form,"validator"),h="on"+c.type.replace(/^validate/,"");
if(d.settings[h]){d.settings[h].call(d,this[0],c)
}}b(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",f).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",f);
if(this.settings.invalidHandler){b(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
}},form:function(){this.checkForm();
b.extend(this.submitted,this.errorMap);
this.invalid=b.extend({},this.errorMap);
if(!this.valid()){b(this.currentForm).triggerHandler("invalid-form",[this])
}this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var a=0,d=(this.currentElements=this.elements());
d[a];
a++){this.check(d[a])
}return this.valid()
},element:function(d){d=this.validationTargetFor(this.clean(d));
this.lastElement=d;
this.prepareElement(d);
this.currentElements=b(d);
var a=this.check(d)!==false;
if(a){delete this.invalid[d.name]
}else{this.invalid[d.name]=true
}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
return a
},showErrors:function(d){if(d){b.extend(this.errorMap,d);
this.errorList=[];
for(var a in d){this.errorList.push({message:d[a],element:this.findByName(a)[0]})
}this.successList=b.grep(this.successList,function(c){return !(c.name in d)
})
}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList)
}else{this.defaultShowErrors()
}},resetForm:function(){if(b.fn.resetForm){b(this.currentForm).resetForm()
}this.submitted={};
this.lastElement=null;
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(e){var f=0;
for(var a in e){f++
}return f
},hideErrors:function(){this.addWrapper(this.toHide).hide()
},valid:function(){return this.size()===0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{b(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(a){}}},findLastActive:function(){var a=this.lastActive;
return a&&b.grep(this.errorList,function(d){return d.element.name===a.name
}).length===1&&a
},elements:function(){var d=this,a={};
return b(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){if(!this.name&&d.settings.debug&&window.console){console.error("%o has no name assigned",this)
}if(this.name in a||!d.objectLength(b(this).rules())){return false
}a[this.name]=true;
return true
})
},clean:function(a){return b(a)[0]
},errors:function(){var a=this.settings.errorClass.replace(" ",".");
return b(this.settings.errorElement+"."+a,this.errorContext)
},reset:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=b([]);
this.toHide=b([]);
this.currentElements=b([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(a){this.reset();
this.toHide=this.errorsFor(a)
},elementValue:function(a){var f=b(a).attr("type"),e=b(a).val();
if(f==="radio"||f==="checkbox"){return b('input[name="'+b(a).attr("name")+'"]:checked').val()
}if(typeof e==="string"){return e.replace(/\r/g,"")
}return e
},check:function(p){p=this.validationTargetFor(this.clean(p));
var k=b(p).rules();
var o=false;
var l=this.elementValue(p);
var a;
for(var e in k){var m={method:e,parameters:k[e]};
try{a=b.validator.methods[e].call(this,l,p,m.parameters);
if(a==="dependency-mismatch"){o=true;
continue
}o=false;
if(a==="pending"){this.toHide=this.toHide.not(this.errorsFor(p));
return
}if(!a){this.formatAndAdd(p,m);
return false
}}catch(n){if(this.settings.debug&&window.console){console.log("exception occured when checking element "+p.id+", check the '"+m.method+"' method",n)
}throw n
}}if(o){return
}if(this.objectLength(k)){this.successList.push(p)
}return true
},customMetaMessage:function(a,e){if(!b.metadata){return
}var f=this.settings.meta?b(a).metadata()[this.settings.meta]:b(a).metadata();
return f&&f.messages&&f.messages[e]
},customDataMessage:function(a,d){return b(a).data("msg-"+d.toLowerCase())||(a.attributes&&b(a).attr("data-msg-"+d.toLowerCase()))
},customMessage:function(f,e){var a=this.settings.messages[f];
return a&&(a.constructor===String?a:a[e])
},findDefined:function(){for(var a=0;
a<arguments.length;
a++){if(arguments[a]!==undefined){return arguments[a]
}}return undefined
},defaultMessage:function(a,d){return this.findDefined(this.customMessage(a.name,d),this.customDataMessage(a,d),this.customMetaMessage(a,d),!this.settings.ignoreTitle&&a.title||undefined,b.validator.messages[d],"<strong>Warning: No message defined for "+a.name+"</strong>")
},formatAndAdd:function(h,f){var g=this.defaultMessage(h,f.method),a=/\$?\{(\d+)\}/g;
if(typeof g==="function"){g=g.call(this,f.parameters,h)
}else{if(a.test(g)){g=b.validator.format(g.replace(a,"{$1}"),f.parameters)
}}this.errorList.push({message:g,element:h});
this.errorMap[h.name]=g;
this.submitted[h.name]=g
},addWrapper:function(a){if(this.settings.wrapper){a=a.add(a.parent(this.settings.wrapper))
}return a
},defaultShowErrors:function(){var f,e;
for(f=0;
this.errorList[f];
f++){var a=this.errorList[f];
if(this.settings.highlight){this.settings.highlight.call(this,a.element,this.settings.errorClass,this.settings.validClass)
}this.showLabel(a.element,a.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(f=0;
this.successList[f];
f++){this.showLabel(this.successList[f])
}}if(this.settings.unhighlight){for(f=0,e=this.validElements();
e[f];
f++){this.settings.unhighlight.call(this,e[f],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return b(this.errorList).map(function(){return this.element
})
},showLabel:function(f,e){var a=this.errorsFor(f);
if(a.length){a.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
if(a.attr("generated")){a.html(e)
}}else{a=b("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(f),generated:true}).addClass(this.settings.errorClass).html(e||"");
if(this.settings.wrapper){a=a.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}if(!this.labelContainer.append(a).length){if(this.settings.errorPlacement){this.settings.errorPlacement(a,b(f))
}else{a.insertAfter(f)
}}}if(!e&&this.settings.success){a.text("");
if(typeof this.settings.success==="string"){a.addClass(this.settings.success)
}else{this.settings.success(a,f)
}}this.toShow=this.toShow.add(a)
},errorsFor:function(d){var a=this.idOrName(d);
return this.errors().filter(function(){return b(this).attr("for")===a
})
},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)
},validationTargetFor:function(a){if(this.checkable(a)){a=this.findByName(a.name).not(this.settings.ignore)[0]
}return a
},checkable:function(a){return(/radio|checkbox/i).test(a.type)
},findByName:function(a){return b(this.currentForm).find('[name="'+a+'"]')
},getLength:function(d,a){switch(a.nodeName.toLowerCase()){case"select":return b("option:selected",a).length;
case"input":if(this.checkable(a)){return this.findByName(a.name).filter(":checked").length
}}return d.length
},depend:function(d,a){return this.dependTypes[typeof d]?this.dependTypes[typeof d](d,a):true
},dependTypes:{"boolean":function(d,a){return d
},string:function(d,a){return !!b(d,a.form).length
},"function":function(d,a){return d(a)
}},optional:function(a){var d=this.elementValue(a);
return !b.validator.methods.required.call(this,d,a)&&"dependency-mismatch"
},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;
this.pending[a.name]=true
}},stopRequest:function(a,d){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[a.name];
if(d&&this.pendingRequest===0&&this.formSubmitted&&this.form()){b(this.currentForm).submit();
this.formSubmitted=false
}else{if(!d&&this.pendingRequest===0&&this.formSubmitted){b(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false
}}},previousValue:function(a){return b.data(a,"previousValue")||b.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,d){if(a.constructor===String){this.classRuleSettings[a]=d
}else{b.extend(this.classRuleSettings,a)
}},classRules:function(f){var e={};
var a=b(f).attr("class");
if(a){b.each(a.split(" "),function(){if(this in b.validator.classRuleSettings){b.extend(e,b.validator.classRuleSettings[this])
}})
}return e
},attributeRules:function(j){var h={};
var a=b(j);
for(var g in b.validator.methods){var i;
if(g==="required"){i=a.get(0).getAttribute(g);
if(i===""){i=true
}i=!!i
}else{i=a.attr(g)
}if(i){h[g]=i
}else{if(a[0].getAttribute("type")===g){h[g]=true
}}}if(h.maxlength&&/-1|2147483647|524288/.test(h.maxlength)){delete h.maxlength
}return h
},metadataRules:function(a){if(!b.metadata){return{}
}var d=b.data(a.form,"validator").settings.meta;
return d?b(a).metadata()[d]:b(a).metadata()
},staticRules:function(f){var e={};
var a=b.data(f.form,"validator");
if(a.settings.rules){e=b.validator.normalizeRule(a.settings.rules[f.name])||{}
}return e
},normalizeRules:function(d,a){b.each(d,function(c,g){if(g===false){delete d[c];
return
}if(g.param||g.depends){var h=true;
switch(typeof g.depends){case"string":h=!!b(g.depends,a.form).length;
break;
case"function":h=g.depends.call(a,a);
break
}if(h){d[c]=g.param!==undefined?g.param:true
}else{delete d[c]
}}});
b.each(d,function(f,c){d[f]=b.isFunction(c)?c(a):c
});
b.each(["minlength","maxlength","min","max"],function(){if(d[this]){d[this]=Number(d[this])
}});
b.each(["rangelength","range"],function(){if(d[this]){d[this]=[Number(d[this][0]),Number(d[this][1])]
}});
if(b.validator.autoCreateRanges){if(d.min&&d.max){d.range=[d.min,d.max];
delete d.min;
delete d.max
}if(d.minlength&&d.maxlength){d.rangelength=[d.minlength,d.maxlength];
delete d.minlength;
delete d.maxlength
}}if(d.messages){delete d.messages
}return d
},normalizeRule:function(d){if(typeof d==="string"){var a={};
b.each(d.split(/\s/),function(){a[this]=true
});
d=a
}return d
},addMethod:function(a,e,f){b.validator.methods[a]=e;
b.validator.messages[a]=f!==undefined?f:b.validator.messages[a];
if(e.length<3){b.validator.addClassRules(a,b.validator.normalizeRule(a))
}},methods:{required:function(h,a,f){if(!this.depend(f,a)){return"dependency-mismatch"
}if(a.nodeName.toLowerCase()==="select"){var g=b(a).val();
return g&&g.length>0
}if(this.checkable(a)){return this.getLength(h,a)>0
}return b.trim(h).length>0
},remote:function(i,l,h){if(this.optional(l)){return"dependency-mismatch"
}var k=this.previousValue(l);
if(!this.settings.messages[l.name]){this.settings.messages[l.name]={}
}k.originalMessage=this.settings.messages[l.name].remote;
this.settings.messages[l.name].remote=k.message;
h=typeof h==="string"&&{url:h}||h;
if(this.pending[l.name]){return"pending"
}if(k.old===i){return k.valid
}k.old=i;
var a=this;
this.startRequest(l);
var j={};
j[l.name]=i;
b.ajax(b.extend(true,{url:h,mode:"abort",port:"validate"+l.name,dataType:"json",data:j,success:function(f){a.settings.messages[l.name].remote=k.originalMessage;
var d=f===true||f==="true";
if(d){var g=a.formSubmitted;
a.prepareElement(l);
a.formSubmitted=g;
a.successList.push(l);
delete a.invalid[l.name];
a.showErrors()
}else{var c={};
var e=f||a.defaultMessage(l,"remote");
c[l.name]=k.message=b.isFunction(e)?e(i):e;
a.invalid[l.name]=true;
a.showErrors(c)
}k.valid=d;
a.stopRequest(l,d)
}},h));
return"pending"
},minlength:function(g,a,f){var h=b.isArray(g)?g.length:this.getLength(b.trim(g),a);
return this.optional(a)||h>=f
},maxlength:function(g,a,f){var h=b.isArray(g)?g.length:this.getLength(b.trim(g),a);
return this.optional(a)||h<=f
},rangelength:function(g,a,f){var h=b.isArray(g)?g.length:this.getLength(b.trim(g),a);
return this.optional(a)||(h>=f[0]&&h<=f[1])
},min:function(f,a,e){return this.optional(a)||f>=e
},max:function(f,a,e){return this.optional(a)||f<=e
},range:function(f,a,e){return this.optional(a)||(f>=e[0]&&f<=e[1])
},email:function(d,a){return this.optional(a)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@(?!sapient.com)((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(d)
},url:function(d,a){return this.optional(a)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
},date:function(d,a){return this.optional(a)||!/Invalid|NaN/.test(new Date(d))
},dateISO:function(d,a){return this.optional(a)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(d)
},number:function(d,a){return this.optional(a)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(d)
},digits:function(d,a){return this.optional(a)||/^\d+$/.test(d)
},creditcard:function(k,n){if(this.optional(n)){return"dependency-mismatch"
}if(/[^0-9 \-]+/.test(k)){return false
}var j=0,l=0,a=false;
k=k.replace(/\D/g,"");
for(var i=k.length-1;
i>=0;
i--){var m=k.charAt(i);
l=parseInt(m,10);
if(a){if((l*=2)>9){l-=9
}}j+=l;
a=!a
}return(j%10)===0
},equalTo:function(h,a,f){var g=b(f);
if(this.settings.onfocusout){g.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){b(a).valid()
})
}return h===g.val()
}}});
b.format=b.validator.format
}(jQuery));
(function(f){var e={};
if(f.ajaxPrefilter){f.ajaxPrefilter(function(b,c,a){var h=b.port;
if(b.mode==="abort"){if(e[h]){e[h].abort()
}e[h]=a
}})
}else{var d=f.ajax;
f.ajax=function(b){var a=("mode" in b?b:f.ajaxSettings).mode,c=("port" in b?b:f.ajaxSettings).port;
if(a==="abort"){if(e[c]){e[c].abort()
}return(e[c]=d.apply(this,arguments))
}return d.apply(this,arguments)
}
}}(jQuery));
(function(b){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){b.each({focus:"focusin",blur:"focusout"},function(f,a){b.event.special[a]={setup:function(){this.addEventListener(f,e,true)
},teardown:function(){this.removeEventListener(f,e,true)
},handler:function(c){var d=arguments;
d[0]=b.event.fix(c);
d[0].type=a;
return b.event.handle.apply(this,d)
}};
function e(c){c=b.event.fix(c);
c.type=a;
return b.event.handle.call(this,c)
}})
}b.extend(b.fn,{validateDelegate:function(e,f,a){return this.bind(f,function(d){var c=b(d.target);
if(c.is(e)){return a.apply(c,arguments)
}})
}})
}(jQuery));
(function(b){b.widget("custom.combobox",{options:{placeholder:"",eleCls:"",name:""},_create:function(){this.wrapper=b("<span>").addClass("custom-combobox").insertAfter(this.element);
this.element.hide();
this._createAutocomplete();
this._createShowAllButton();
if(typeof(this.options.callback)==="function"){this.options.callback.call(this)
}},_createAutocomplete:function(){var a=this.element.children(":selected"),d=a.val()?a.text():"";
this.input=b("<input>").appendTo(this.wrapper).val(d).attr("title","").attr("placeholder",this.options.placeholder).attr("name",this.options.name).addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left").addClass(this.options.eleCls).autocomplete({delay:0,minLength:0,source:b.proxy(this,"_source")}).tooltip({tooltipClass:"ui-state-highlight"}).click(function(){b(this).focus();
b(this).autocomplete("search","")
});
b("<input type='hidden'>").appendTo(this.wrapper).addClass("myData");
this._on(this.input,{autocompleteselect:function(f,c){c.item.option.selected=true;
this._trigger("select",f,{item:c.item.option});
this.input.val(c.item.label);
this.wrapper.find(".myData").val(c.item.mydata);
this.input.trigger("change")
},autocompletechange:"_removeIfInvalid"})
},_createShowAllButton:function(){var a=this.input,d=false;
b("<a>").attr("tabIndex",-1).tooltip().appendTo(this.wrapper).button({icons:{primary:"ui-icon-triangle-1-s"},text:false}).removeClass("ui-corner-all").addClass(this.options.eleCls+" custom-combobox-toggle ui-corner-right").mousedown(function(){d=a.autocomplete("widget").is(":visible")
}).click(function(){a.focus();
if(d){return
}a.autocomplete("search","")
})
},_source:function(i,a){var g=new RegExp(b.ui.autocomplete.escapeRegex(i.term),"i");
var j=0;
var h=this.element.children("option").map(function(){var c=b(this).text(),d=b(this).val();
if(this.value&&(!i.term||g.test(c))){j++;
return{label:c,value:c,mydata:d,option:this}
}});
if(j==0){h={};
h=b.makeArray(h);
h=h.map(function(){return{label:"No Results Found",value:"",mydata:"",option:this}
})
}a(h)
},_removeIfInvalid:function(i,g){if(g.item){return
}var h=this.input.val(),a=h.toLowerCase(),j=false;
this.element.children("option").each(function(){if(b(this).text().toLowerCase()===a){this.selected=j=true;
return false
}});
if(j){return
}this.input.val("").tooltip("open");
this.element.val("");
this._delay(function(){this.input.tooltip("close").attr("title","")
},2500);
this.input.autocomplete("instance").term=""
},_destroy:function(){this.wrapper.remove();
this.element.show()
}})
})(jQuery);
/*!
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */
;
!function(b){b(function(){if(navigator.userAgent.match(/IEMobile\/10\.0/)){var a=document.createElement("style");
a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
document.getElementsByTagName("head")[0].appendChild(a)
}var h=b(window);
var i=b(document.body);
var g=b(".bs-row").outerHeight(true)+10;
b(".bs-docs-container [href=#]").click(function(c){c.preventDefault()
});
setTimeout(function(){b(".bs-top").affix()
},100);
b(".tooltip-demo").tooltip({selector:"[data-toggle=tooltip]",container:"body"});
b(".tooltip-test").tooltip();
b(".popover-test").popover();
b(".bs-docs-navbar").tooltip({selector:"a[data-toggle=tooltip]",container:".bs-docs-navbar .nav"});
if(matchMedia){var j=window.matchMedia("(min-width: 320px) and (max-width: 767px)");
if(j.matches){b("body").addClass("manipal-mobile")
}else{b("body").removeClass("manipal-mobile")
}b(window).resize(function(){j=window.matchMedia("(min-width: 320px) and (max-width: 767px)");
if(j.matches){b("body").addClass("manipal-mobile")
}else{b("body").removeClass("manipal-mobile")
}})
}b("[data-toggle=popover]").popover();
b("#fat-btn").click(function(){var c=b(this);
c.button("loading");
setTimeout(function(){c.button("reset")
},3000)
})
})
}(window.jQuery);
(function(d,e,f){d.landingPageTpco={btech:{rteContentEligibility:'<p class="article-content-sub-heading">Eligibility Btech</p><p class="article-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna ac tincidunt scelerisque. Pellentesque auctor tincidunt augue eu dignissim. Cras luctus convallis luctus.</p><p class="article-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna ac tincidunt scelerisque. Pellentesque auctor tincidunt augue eu dignissim. Cras luctus convallis luctus.</p>',rteContentFees:'<p class="article-content-sub-heading">Admission Btech</p><p class="article-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna ac tincidunt scelerisque. Pellentesque auctor tincidunt augue eu dignissim. Cras luctus convallis luctus.</p><p class="article-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna ac tincidunt scelerisque. Pellentesque auctor tincidunt augue eu dignissim. Cras luctus convallis luctus.</p>'},mtech:{rteContentEligibility:'<p class="article-content-sub-heading">Eligibility Mtech</p><p class="article-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna ac tincidunt scelerisque. Pellentesque auctor tincidunt augue eu dignissim. Cras luctus convallis luctus.</p><p class="article-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna ac tincidunt scelerisque. Pellentesque auctor tincidunt augue eu dignissim. Cras luctus convallis luctus.</p>',rteContentFees:'<p class="article-content-sub-heading">Admission Mtech</p><p class="article-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna ac tincidunt scelerisque. Pellentesque auctor tincidunt augue eu dignissim. Cras luctus convallis luctus.</p><p class="article-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida urna ac tincidunt scelerisque. Pellentesque auctor tincidunt augue eu dignissim. Cras luctus convallis luctus.</p>'}}
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.landingPage=(function(){function a(){var b=this;
var c=true;
this.ctaPopup=function(){e("#demo").dialog({autoOpen:false,resizable:false,height:"500",top:"0",appendTo:".lp-cta-modal",modal:true,dialogClass:"noTitle",closeOnEscape:true,width:"870"})
};
this.headerCtaClick=function(){e(".lp-header-cta").off().on("click",function(h){e("#demo").dialog("close")
});
e(".lp-header-cta").off().on("click",function(){e("#demo").dialog("open")
})
};
this.loadTpcoData=function(h){e.each(d.landingPageTpco,function(m,g){if(m.replace(/[\s\-]/g,"").toLowerCase()==h){e(".lp-tab-eligibility").html(g.rteContentEligibility);
e(".lp-tab-admission").html(g.rteContentFees);
e(".lp-tab-eligibility").html(g.rteContentEligibility);
e(".lp-tab-admission").html(g.rteContentFees);
var l=e("#programsHow").val();
var n=e("#programsDetails").val();
if(l!=null&&l=="true"){e(".lp-tab-why").html(g.rteContentWhy)
}if(n!=null&&n=="true"){e(".lp-tab-details").html(g.rteContentDetails)
}}})
};
this.pageLoadTpcoData=function(m){for(var o=0;
o<Object.keys(d.landingPageTpco).length;
o++){if(e(".lp-interest-filter .dropdown-toggle").text().trim()==Object.keys(d.landingPageTpco)[o].trim()){var i=d.landingPageTpco[Object.keys(d.landingPageTpco)[o]]
}else{var i=d.landingPageTpco[Object.keys(d.landingPageTpco)[0]]
}}e(".lp-tab-eligibility").html(i.rteContentEligibility);
e(".lp-tab-admission").html(i.rteContentFees);
var n=e("#programsHow").val();
var p=e("#programsDetails").val();
if(n!=null&&n=="true"){e(".lp-tab-why").html(i.rteContentWhy)
}if(p!=null&&p=="true"){e(".lp-tab-details").html(i.rteContentDetails)
}};
this.tpcoDDClick=function(){e(".lp-interest-dropdown .dropdown-menu").click(function(h){h.stopPropagation()
});
e(".lp-interest-dropdown-options").click(function(){e(".lp-interest-dropdown-options").removeClass("active");
e(".lp-interest-dropdown span.dropdown-default-text").text(e(this).text());
e(".lp-interest-dropdown .dropdown-menu").dropdown();
e(this).addClass("active");
if(e("#taskPanelRFI").val()=="true"){e("input.rfi_course, input.rfi_program").val(e(this).text());
var k=e(this).text();
var n=e("#course option,#program option").filter(function(){return this.text==k
}).val();
e("input.rfi_course, input.rfi_program").siblings(".myData").val(n);
var m=e("input.rfi_course, input.rfi_program").parent().siblings("select").prop("id");
e("#hid"+m).val(n)
}var l=e(this).text().replace(/[\s\-]/g,"").toLowerCase();
b.loadTpcoData(l)
})
};
this.isDOMElementVisible=function(q){var s=q;
var n=e(window);
var o=n.scrollTop();
var p=o+n.height();
var t=s.offset().top;
var r=t+s.height();
return((r<=p)&&(t>=o))
};
this.sitemapBuildColumn=function(){var j=e(".sitemap-links");
var l=j.find(".sitemap-links-section").length;
var k=(100/l)+"%";
j.find(".sitemap-links-section").css("width",k)
};
this.init=function(){e(".rfi-tag").hide();
e(document).ready(function(){b.pageLoadTpcoData();
e(window).scroll(function(){if(e(window).scrollTop()+e(window).height()==e(document).height()){if(!b.isDOMElementVisible(e(".request4info"))){e(".rfi-tag").show()
}else{e(".rfi-tag").hide()
}}else{if(!b.isDOMElementVisible(e(".request4info"))){e(".rfi-tag").show()
}else{e(".rfi-tag").hide()
}}})
});
b.sitemapBuildColumn();
b.ctaPopup();
b.headerCtaClick();
b.tpcoDDClick();
e("#lp-tabs").tabs();
e("#accordion").accordion({collapsible:true,heightStyle:"content"});
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.rfi=(function(){function a(){var b=this,c=true;
this.checkConfigAvailable=function(h){if(h==f){return false
}else{return true
}};
this.associatedDropdown=function(j,l){if(l.items!=f){switch(j){case"country":var k=l.isdCode;
if(k.indexOf("+")===false||k.indexOf("+")===-1){k="+"+k
}e(".rfi_city_code").prop("placeholder",k).prop("value",k);
e("#city").empty();
e("#location").empty();
e("#program").empty();
e(".smart-city").prop("value","");
e(".smart-location").prop("value","");
e(".smart-program").prop("value","");
b.populateDropdown("city","smart-city",l.items);
break;
case"city":e(".smart-location").prop("value","");
e(".smart-program").prop("value","");
e("#location").empty();
e("#program").empty();
b.populateDropdown("program","smart-program",l.items);
break;
case"program":e(".smart-location").prop("value","");
e("#location").empty();
b.populateDropdown("location","smart-location",l.items);
break;
case"level":e(".smart-discipline").prop("value","");
e(".smart-program").prop("value","");
e("#program").empty();
e("#discipline").empty();
b.populateDropdown("discipline","smart-discipline",l.items);
break;
case"discipline":e(".smart-program").prop("value","");
e("#program").empty();
b.populateDropdown("program","smart-program",l.items);
break
}}else{if(j=="countryind"){var k=l.isdCode;
if(k.indexOf("+")===false||k.indexOf("+")===-1){k="+"+k
}e(".rfi_city_code").prop("placeholder",k).prop("value",k)
}}};
this.populateDropdown=function(l,m,n){e("#"+l).empty().append("<option value=''>Select "+l+"</option>");
if(n[0].singleValue=="true"){e(".request4info #"+l).siblings(".custom-combobox").find("input.custom-combobox-input").val(n[0].value);
e("#hid"+l).val(n[0].value);
if(l=="level"){e("#programLevelFieldId").hide()
}else{if(l=="discipline"){e("#disciplineFieldId").hide()
}else{if(l=="program"){e("#programFieldId").hide()
}else{if(l=="location"){e("#locationFieldId").hide()
}}}}b.associatedDropdown(l,n[0]);
return
}else{if(l=="level"){e("#programLevelFieldId").show()
}else{if(l=="discipline"){e("#disciplineFieldId").show()
}else{if(l=="program"){e("#programFieldId").show()
}else{if(l=="location"){e("#locationFieldId").show()
}}}}}if(!b.checkConfigAvailable(n)){return null
}var o="";
for(var p=0;
p<n.length;
p++){o="<option value='"+n[p].value+"'>"+n[p].name+"</option>";
e("#"+l).append(o)
}e(".request4info #rfi-form").on("change","."+m,function(i){for(var g=0;
g<n.length;
g++){var j=e.trim(e(this).val().toLowerCase());
var h=e.trim(n[g].name.toLowerCase());
e("#hid"+l).val(e(this).siblings(".myData").val());
if(j==h){b.associatedDropdown(l,n[g])
}}})
};
this.initializeFieldPopulate=function(l,k,m){var n=d.rfiConfig;
if((e(".news-flash-banner").length>0)&&(!e(".news-flash-banner").hasClass("hide-news-flash"))){e(".request4info.manipal-web-view").addClass("newsflashShowing")
}if(e(".request4info #"+l).length>0){e(".request4info #"+l).combobox({name:l,eleCls:"smart-"+l});
e(".smart-"+l).prop("placeholder",n.placeholder[l]).addClass("rfi_"+l)
}if(e(".request4info #"+k).length>0){e(".request4info #"+k).combobox({name:k,eleCls:"smart-"+k});
e(".smart-"+k).prop("placeholder",n.placeholder[k]).addClass("rfi_"+k)
}if(e(".request4info #"+m).length>0){e(".request4info #"+m).combobox({name:m,eleCls:"smart-"+m});
e(".smart-"+m).prop("placeholder",n.placeholder[m]).addClass("rfi_"+m)
}if(n[l]!=f&&n[l].length>0){b.populateDropdown(l,"smart-"+l,n[l])
}else{if(n[k]!=f&&n[k].length>0){b.populateDropdown(k,"smart-"+k,n[k])
}else{if(n[m]!=f&&n[m].length>0){b.populateDropdown(m,"smart-"+m,n[m])
}}}};
this.emailValidate=function(){var h=e(".request4info #rfi-form .rfi-info, .request4info .ui-widget input, .request4info .phonewithcode input");
e(h).blur(function(M){var aa=e(this),af=e(".request4info #rfi-form input[name='studentName']").val(),ah=e(".request4info #rfi-form input[name='referralName']").val(),W=e(".request4info #rfi-form input[name='email']").val(),am=e(".request4info #rfi-form input[name='mobileNumber']").val(),ab=e(".request4info #rfi-form input[name='referralEmailId']").val(),T=e(".request4info #rfi-form input[name='referralMobile']").val(),N=e(".request4info #rfi-form input[name='captcha']").val(),ai=e(".request4info #rfi-form input[name='zipCode']").val(),aj=e(".request4info #rfi-form input[name='eligibility']").val(),P=e(".request4info #rfi-form input[name='income']").val(),V=e(".request4info #rfi-form input[name='experience']").val(),ad=e(".request4info #rfi-form input[name='company']").val(),X=e(".request4info #rfi-form input[name='nationality']").val(),S=e(".request4info #hidcountry").val(),R=e(".request4info #hidcity").val(),O=e(".request4info #hidlocation").val(),al=e(".request4info #hidcourse").val(),Z=e(".request4info #rfi-form .phonewithcode .citycode").val(),ac=e(".request4info #rfi-form .phonewithcode .altcitycode").val(),U=e(".request4info #rfi-form .phonewithcode .phone").val(),an=e(".request4info #rfi-form .phonewithcode .altphone").val(),ao=e(".request4info #hidlevel").val(),Q=e(".request4info #hiddiscipline").val(),ap=e(".request4info #hidprogram").val(),Y=e(".request4info #rfi-form input[name='query']").val(),ae=e(".request4info #rfi-form input[name='custom1']").val(),ag=e(".request4info #rfi-form input[name='custom2']").val(),ak=e(".request4info #hidgenericDetails").val(),g="";
g={name:af,refname:ah,email:W,mobileNumber:am,refemail:ab,refmobile:T,zipCode:ai,eligibility:aj,income:P,experience:V,company:ad,nationality:X,countryId:S,cityId:R,locationId:O,course:al,isdCode:Z,alternateIsdCode:ac,studentPhone:U,alternateMobileNumber:an,programLevelId:ao,streamId:Q,programId:ap,query:Y,custom1:ae,custom2:ag,genericTableId:ak,currentPagePath:currentPagePath};
if(e.trim(aa.val())==""){if(!aa.hasClass("error")&&!aa.hasClass("custom-error")){b.printErrorMsg(aa)
}}else{aa.removeClass("error").siblings("label.custom-error, label.error").remove()
}if(aa.prop("name")=="studentName"){return
}e.ajax({type:"POST",data:g,url:"/bin/manipal/lppartialsave",dataType:"jsonp"})
});
return false
};
this.printErrorMsg=function(h){if(h.hasClass("rfi_student_name")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter your name</label>')
}if(h.hasClass("rfi_ref_student_name")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter your name</label>')
}if(h.hasClass("rfi_zip_code")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid zipcode</label>')
}if(h.hasClass("rfi_eligibility")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(h.hasClass("rfi_income")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid income</label>')
}if(h.hasClass("rfi_experience")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(h.hasClass("rfi_company")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(h.hasClass("rfi_nationality")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid data</label>')
}if(h.hasClass("rfi_student_phone")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid number</label>')
}if(h.hasClass("rfi_city_code")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter correct data</label>')
}if(h.hasClass("rfi_mobile_number")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter correct number</label>')
}if(h.hasClass("rfi_alt_mobile_number")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter valid alt number</label>')
}if(h.hasClass("rfi_query")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter your query</label>')
}if(h.hasClass("rfi_ref_mobile")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please enter correct data</label>')
}if(h.hasClass("rfi_country")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a country</label>')
}if(h.hasClass("rfi_countryind")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a country</label>')
}if(h.hasClass("rfi_city")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a city</label>')
}if(h.hasClass("rfi_cityind")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a city</label>')
}if(h.hasClass("rfi_level")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a level</label>')
}if(h.hasClass("rfi_discipline")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a discipline</label>')
}if(h.hasClass("rfi_program")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a program</label>')
}if(h.hasClass("rfi_location")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a location</label>')
}if(h.hasClass("rfi_course")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a course</label>')
}if(h.hasClass("rfi_stateInd")){h.addClass("error").after('<label for="country" generated="true" class="custom-error">Please select a state</label>')
}};
this.mobileValidate=function(){var i=e(".request4info .phonewithcode .mobile, .request4info .phonewithcode .rfi_mobile_number");
var j=e(".request4info .phonewithcode .citycode, .request4info .phonewithcode .rfi_city_code");
e(i).blur(function(){if(e.trim(e(this).val()).length<=0){return false
}if((j.val()=="+91"&&e.trim(e(this).val()).length!=10)||!/^\d*$/.test(e(this).val())){if(e(this).hasClass("error")){e(this).next("label.error").remove();
e(this).next("label.custom-error").remove();
e(this).after('<label for="email" generated="true" class="error">Please enter 10 digits</label>')
}else{e(this).after('<label for="email" generated="true" class="error">Please enter 10 digits</label>');
e(this).addClass("error")
}}else{if((e.trim(e(this).val()).length<7||e.trim(e(this).val()).length>11)||!/^\d*$/.test(e(this).val())){if(e(this).hasClass("error")){e(this).next("label.error").remove();
e(this).next("label.custom-error").remove();
e(this).after('<label for="email" generated="true" class="error">Please enter valid number</label>')
}else{e(this).after('<label for="email" generated="true" class="error">Please enter valid number</label>');
e(this).addClass("error")
}}}})
};
this.disableRFIFields=function(){e(".submit-container").hide();
e(".request4info .custom-combobox a, .request4info .rfi-input-wrapper").hide();
e(".otp-input-wrapper,.otp-buttons, .otp-session-msg").show()
};
e(".otp-submit").on("click",function(j){j.preventDefault();
var k=e(".request4info #rfi-form input.rfi_otp_value");
if(k.val()===""){if(!e("#otp-error").length){k.siblings(".resendOTP").after('<label for="otpValue" generated="true" class="custom-error" id="otp-error">Please enter valid code</label>')
}}else{e(".otp-input-wrapper, .otp-session-msg").show();
var l=e(".request4info #rfi-form input[name='otpValue']").val();
e.ajax({type:"GET",url:"/bin/showcase/servlet/validateotp?otpValue="+l,success:function(g){if(g.indexOf("Invalid")!=-1){if(!e("#otp-error").length){k.siblings(".resendOTP").after('<label for="otpValue" generated="true" class="custom-error" id="otp-error">Please enter valid code</label>')
}}else{if(g.indexOf("sessionexpires")!=-1){if(!e("#otp-sessionError").length){if(e("#otp-error").length){e("#otp-error").hide()
}k.siblings(".resendOTP").after('<label for="otpValue" generated="true" class="custom-error" id="otp-sessionError">Otp Session Time Out.Please click on Resend OTP</label>')
}}else{e("#rfi-form").submit();
e(".request4info .rfi-input-wrapper input").not(".request4info .otp-input-wrapper input, .request4info .rfi-input-wrapper input.citycode").val("")
}}},error:function(g){console.log("error in otp validation service"+g)
}})
}});
e(".resendOTP").on("click",function(h){b.getOtp()
});
this.getOtp=function(){e(".otp-input-wrapper input[type='number'").val("");
e(".custom-error").remove();
e(".otp-server-error").hide();
var O=e(".msgType").val(),ab=e(".username").val(),af=e(".password").val(),W=e(".authscheme").val(),T=e(".method").val(),K=e(".otpEnabled").val(),S=e(".rfi_mobile_number").val(),Q=e(".rfi_city_code").val(),K=e(".otpEnabled").val(),N=parseInt(e(".isOtpChecked").val()),X=e(".otpUrl").val(),J=e(".otpMessage").val(),V=e(".otpMsgType").val(),L=e(".otpErrorMsg").val(),U=e(".ivrErrorMessage").val(),M=e(".ivrAdminContact").val(),ae=e(".otpAdminContact").val(),Z=e(".otpServiceType").val(),ad=e(".ivrUrl").val(),H=e(".ivrUserId").val(),Y=e(".ivrPwd").val(),ac=e(".otpApiVersion").val(),I="/bin/showcase/servlet/clicktocall?ivrUrl="+ad+"&ivrUserId="+H+"&ivrPassword="+Y,P="/bin/showcase/servlet/sendsms?otpMessage="+J+"&otpUrl=",aa=X+"?send_to="+Q+S+"&auth_scheme="+W+"&userid="+ab+"&password="+af+"&method="+T+"&msg_type="+V+"&v="+ac;
var G=encodeURIComponent(aa);
var R=P+G;
if(N){if(Z==="SMS"){e.ajax({type:"GET",url:R,success:function(g){b.disableRFIFields();
console.log("sucess in otp sms service"+g);
var h=g;
if(h.indexOf("error")!=-1){e(".config-error-msg").show().html("<strong>"+L+"</strong><a href=mailto:"+ae+">"+ae+"</a>");
e(".submit-container").show();
e(".otp-input-wrapper, .otp-buttons").hide()
}},error:function(g){e(".submit-container").hide();
e(".otp-input-wrapper, .otp-buttons, .otp-server-error").show();
console.log("error in otp sms service"+g)
}})
}else{e.ajax({type:"GET",url:I,success:function(g){b.disableRFIFields();
console.log("sucess in ivr service"+g);
var h=g;
if(h.indexOf("Error")!=-1){e(".config-error-msg").show().html("<strong>"+U+"</strong><a href=mailto:"+M+">"+M+"</a>");
e(".submit-container").show();
e(".otp-input-wrapper, .otp-buttons").hide()
}},error:function(g){e(".submit-container").hide();
e(".otp-input-wrapper, .otp-buttons, .otp-server-error").show();
console.log("error in ivr service"+g)
}})
}}else{e("#rfi-form").submit()
}};
e(".request4info .rfi-input-wrapper input.rfi_otp_value").focus(function(){e(".custom-error").remove()
});
this.formValidation=function(){var i=e(".request4info #rfi-form .phonewithcode .citycode").val();
if(i.indexOf("+")==false||i.indexOf("+")=="-1"){e(".request4info #rfi-form .phonewithcode .citycode").val("+"+i)
}e(".request4info #rfi-form .rfi-info, .request4info .ui-widget input, .request4info .phonewithcode input").focus(function(){var g=e(this);
g.next("label.custom-error").remove();
g.next("label.error").remove();
g.removeClass("error")
});
e(".request4info #rfi-form .dropdown-options").off().on("click",function(){var g=e(this);
g.parent().siblings(".default-state").removeClass("error");
g.parent().siblings(".default-state").addClass("selected")
});
e(".request4info #rfi-form .rfi-submit").off().on("click",function(v){v.preventDefault();
var x=e(".request4info #country").siblings(".custom-combobox").find("input.custom-combobox-input"),h=e(".request4info #countryind").siblings(".custom-combobox").find("input.custom-combobox-input"),D=e(".request4info #city").siblings(".custom-combobox").find("input.custom-combobox-input"),y=e(".request4info #cityind").siblings(".custom-combobox").find("input.custom-combobox-input"),g=e(".request4info #level").siblings(".custom-combobox").find("input.custom-combobox-input"),w=e(".request4info #discipline").siblings(".custom-combobox").find("input.custom-combobox-input"),A=e(".request4info #program").siblings(".custom-combobox").find("input.custom-combobox-input"),z=e(".request4info #location").siblings(".custom-combobox").find("input.custom-combobox-input"),B=e(".request4info #stateInd").siblings(".custom-combobox").find("input.custom-combobox-input"),C=e(".request4info #genericDetails").siblings(".custom-combobox").find("input.custom-combobox-input"),u=e(".request4info #course").siblings(".custom-combobox").find("input.custom-combobox-input");
if(e(x).parent().parent().is(":visible")){if(e(x).val()==""&&!e(x).hasClass("error")){e(x).after('<label for="country" generated="true" class="custom-error">Please select a country</label>');
e(x).addClass("error")
}}if(e(h).parent().parent().is(":visible")){if(e(h).val()==""&&!e(h).hasClass("error")){e(h).after('<label for="country" generated="true" class="custom-error">Please select a country</label>');
e(h).addClass("error")
}}if(e(D).parent().parent().is(":visible")){if(e(D).val()==""&&!e(D).hasClass("error")){e(D).after('<label for="city" generated="true" class="custom-error">Please select a city</label>');
e(D).addClass("error")
}}if(e(C).parent().parent().is(":visible")){if(e(C).val()==""&&!e(C).hasClass("error")){e(C).after('<label for="generic" generated="true" class="custom-error">Please select a value</label>');
e(C).addClass("error")
}}if(e(y).parent().parent().is(":visible")){if(e(y).val()==""&&!e(y).hasClass("error")){e(y).after('<label for="city" generated="true" class="custom-error">Please select a city</label>');
e(y).addClass("error")
}}if(e(B).val()==""&&!e(B).hasClass("error")){e(B).after('<label for="city" generated="true" class="custom-error">Please select a state</label>');
e(B).addClass("error")
}if(e(g).parent().parent().is(":visible")){if(e(g).val()==""&&!e(g).hasClass("error")){e(g).after('<label for="level" generated="true" class="custom-error">Please select a level</label>');
e(g).addClass("error")
}}if(e(w).parent().parent().is(":visible")){if(e(w).val()==""&&!e(w).hasClass("error")){e(w).after('<label for="discipline" generated="true" class="custom-error">Please select a discipline</label>');
e(w).addClass("error")
}}if(e(A).parent().parent().is(":visible")){if(e(A).val()==""&&!e(A).hasClass("error")){e(A).after('<label for="program" generated="true" class="custom-error">Please select a program</label>');
e(A).addClass("error")
}}if(e(z).parent().parent().is(":visible")){if(e(z).val()==""&&!e(z).hasClass("error")){e(z).after('<label for="location" generated="true" class="custom-error">Please select a location</label>');
e(z).addClass("error")
}}else{e(z).removeClass("error")
}if(e(u).parent().parent().is(":visible")){if(e(u).val()==""&&!e(u).hasClass("error")){e(u).after('<label for="location" generated="true" class="custom-error">Please select a course</label>');
e(u).addClass("error")
}}b.emailValidateSureVerify();
if(e(".request4info #rfi-form").valid()&&!e(".custom-combobox-input").hasClass("error")){e("#rfi-form .rfi-submit").prop("disabled","disabled");
if(c){b.getOtp()
}}});
jQuery.validator.addMethod("exactlength",function(h,l,g){return this.optional(l)||h.length==g
},jQuery.format("Please enter {0} digits"));
jQuery.validator.addMethod("alpha",function(g,h){return this.optional(h)||g==g.match(/^[a-zA-Z .]*$/)
},jQuery.format("Please enter alphabets only"));
var j=0;
jQuery.validator.addMethod("checklength",function(n,o,h){var p=e(".request4info .phonewithcode .citycode, .request4info .phonewithcode .rfi_city_code");
var g=true;
if(p.val()=="+91"&&e.trim(n).length!=10){g=false;
j=1
}else{if((e.trim(n).length<7||e.trim(n).length>11)){g=false;
j=2
}}return g
},function(m,n,g){console.log(j);
var h="Please enter valid number";
if(j==1){h="Please enter 10 digits"
}else{if(j==2){h="Please enter valid number"
}}return h
});
e(".request4info #rfi-form").validate({onfocusout:false,onkeyup:false,rules:{email:{required:true},referralEmailId:{required:true},studentName:{required:true,digits:false,alpha:e(".rfi_student_name").val()},refstudentname:{required:true,digits:false,alpha:e(".referral_student_name").val()},zipCode:{required:true,digits:false},eligibility:{required:true,digits:false},income:{required:true,digits:false},experience:{required:true,digits:false},company:{required:true,digits:false},nationality:{required:true,digits:false},isdCode:{required:true},studentPhone:{required:true,maxlength:12,digits:true},alternateIsdCode:{required:true,maxlength:12},alternateMobileNumber:{required:true,maxlength:12,digits:true},query:{required:true,maxlength:100},course:{required:true},cityId:{required:true},stream:{required:true},ipa:{required:true},cityCode:{required:true},mobileNumber:{required:true,checklength:true,digits:true},referralName:{required:true},referralMobile:{required:true,checklength:true},captcha:{required:true}},messages:{studentName:{required:"Please enter your name"},email:{required:"Please enter a valid email"},referralEmailId:{required:"Please enter a valid email"},refstudentname:{required:"Please enter your name"},zipCode:{required:"Please enter valid zipcode"},eligibility:{required:"Please enter valid data",eligibility:"Please enter valid data"},income:{required:"Please enter valid income",income:"Please enter valid income"},experience:{required:"Please enter valid data",experience:"Please enter valid data"},company:{required:"Please enter valid data",company:"Please enter valid data"},nationality:{required:"Please enter valid data",nationality:"Please enter valid data"},studentPhone:{required:"Please enter valid number",studentPhone:"Please enter valid number"},course:{required:"Please enter correct info"},cityId:{required:"Please enter correct info"},stream:{required:"Please enter correct data"},ipa:{required:"Please enter correct data"},cityCode:{required:"Please enter correct data"},mobileNumber:{required:"Please enter correct number"},alternateMobileNumber:{required:"Please enter valid alt number"},query:{required:"Please enter your query"},referralName:{required:"Please enter correct data"},referralMobile:{required:"Please enter correct data"},captcha:{required:"Please enter verification code"}}})
};
this.emailValidateSureVerify=function(){e(".request4info .email_field_rfi , .request4info .referral_email_field").blur(function(l){var k=(e(l.target).length==0)?"":e(l.target),n=e(this);
var m=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
e(n).next(".custom-error").remove();
e(n).removeClass("error");
if(!m.test(k.val())){e(n).after('<label for="email" generated="true" class="custom-error">Please enter a valid email</label>');
e(n).addClass("error")
}});
return false
};
this.smartComboCheck=function(k){var l="#"+k,n=e(l).siblings(".custom-combobox").find("input");
var m=e(n).val();
e(l).find("option").filter(function(g,h){if((e.trim(e(h).text())).toLowerCase()==e.trim(m).toLowerCase()){e(l).siblings().find(".myData").val(e(h).val());
e("#hid"+k).val(e(h).val())
}})
};
this.onlyNumber=function(){e(".only-number").keypress(function(h){if(h.which!=8&&h.which!=0&&(h.which<48||h.which>57)){return false
}})
};
this.init=function(){if(e(".error-otp-validate").length){e(".otp-input-wrapper,.otp-buttons").show();
e(".submit-container").hide()
}else{e(".otp-input-wrapper,.otp-buttons").hide();
e(".submit-container").show()
}if(d.rfiConfig==f){return null
}e(document).ready(function(){e(".request4info .rfi-input-wrapper input").not(".request4info .rfi-input-wrapper input.citycode").val("");
e(".request4info .rfi-radio-link").hide();
e(e(".request4info .nav-tabs li")[1]).hide();
e(".request4info").addClass("show");
b.initializeFieldPopulate("country","city","location");
b.initializeFieldPopulate("level","discipline","program");
b.initializeFieldPopulate("course");
b.initializeFieldPopulate("stateInd");
b.initializeFieldPopulate("cityind");
b.initializeFieldPopulate("countryind");
b.initializeFieldPopulate("genericDetails");
b.formValidation();
var k=document.getElementById("firstName").innerHTML;
var l=document.getElementById("eMail").innerHTML;
var m=document.getElementById("mobilePhoneDiv").innerHTML;
var n=document.getElementById("hidcombinationFieldName").value;
if(n=="CombinationOne"){document.getElementById("firstName").innerHTML=m;
document.getElementById("eMail").innerHTML=l;
document.getElementById("mobilePhoneDiv").innerHTML=k
}else{if(n=="CombinationTwo"){document.getElementById("firstName").innerHTML=l;
document.getElementById("eMail").innerHTML=k;
document.getElementById("mobilePhoneDiv").innerHTML=m
}else{if(n=="CombinationThree"){document.getElementById("firstName").innerHTML=k;
document.getElementById("eMail").innerHTML=m;
document.getElementById("mobilePhoneDiv").innerHTML=l
}else{}}}e("input.rfi_course, input.rfi_program").on("change",function(){if((e("#taskPanelRFI").val())=="true"){var g=e("input.rfi_course, input.rfi_program").val();
e(".lp-interest-dropdown-options").each(function(i,h){if((e(h).text())==g){e(h).addClass("active");
e(h).click();
e(".dropdown-default-text").text(g)
}else{e(h).removeClass("active")
}})
}});
e("input.custom-combobox-input").blur(function(){if(e(this).siblings(".myData").val()!=null){var g=e(this).parent().siblings("select").prop("id");
b.smartComboCheck(g)
}});
b.emailValidate();
b.emailValidateSureVerify();
b.mobileValidate();
b.onlyNumber()
});
return this
}
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
(function(d,e,f){d.columnControl=(function(){function a(){var b=this;
this.setWrapperHeight=function(){e.each(e(".background-applicable .column-container-with-bg"),function(j,i){var c=e(this).closest(".column-container-with-bg").height();
e(this).closest(".background-applicable").height(c)
})
};
this.calculateHeight=function(){e.each(e(".column-with-bg"),function(o,n){var p=e(this).find(".column-data").height();
var l=0;
var c=e(this);
if(e(this).find(".column-bg").height()==0){e(this).find(".column-bg").load(function(){l=e(this).height();
var g=(p>l)?p:l;
c.height(g);
c.find(".column-data").css("position","absolute");
if(o==(e(".column-with-bg").length-1)){b.setWrapperHeight()
}})
}else{l=e(this).find(".column-bg").height();
var m=(p>l)?p:l;
c.height(m);
c.find(".column-data").css("position","absolute");
if(o==(e(".column-with-bg").length-1)){b.setWrapperHeight()
}}});
e.each(e(".image-rte-cta-wrapper,.programs-wrapper"),function(h,c){e(this).height(e(this).parent().parent().height())
});
e(".cta-2").css("position","absolute")
};
this.ctaPopup=function(){e(".column-control-popup").dialog({autoOpen:false,resizable:false,height:"auto",modal:true,dialogClass:"noTitle",closeOnEscape:true,width:"auto",appendTo:".page-container"})
};
e(".ui-icon-closethick").click(function(){e(".column-cta-url").attr("src","")
});
e(".cta-modal").off().on("click",function(c){e(".column-control-popup").dialog("option","title",e(this).find(".dialog-title-hidden").text());
e(".column-control-popup").dialog("open");
e(".column-cta-url").attr("src",e(this).find(".column-modal-url-hidden").text()+".html")
});
this.init=function(){b.ctaPopup();
e(document).ready(function(){b.calculateHeight()
});
return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));
/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
(function(b){b.picturefill=function(){var t=b.document.getElementsByTagName("span");
for(var p=0,i=t.length;
p<i;
p++){if(t[p].getAttribute("data-picture")!==null){var s=t[p].getElementsByTagName("span"),n=[];
for(var q=0,o=s.length;
q<o;
q++){var r=s[q].getAttribute("data-media");
if(!r||(b.matchMedia&&b.matchMedia(r).matches)){n.push(s[q])
}}var a=t[p].getElementsByTagName("img")[0];
if(n.length){var j=n.pop();
if(!a||a.parentNode.nodeName==="NOSCRIPT"){a=b.document.createElement("img");
a.alt=t[p].getAttribute("data-alt")
}else{if(j===a.parentNode){continue
}}a.src=j.getAttribute("data-src");
j.appendChild(a);
a.removeAttribute("width");
a.removeAttribute("height")
}else{if(a){a.parentNode.removeChild(a)
}}}}};
if(b.addEventListener){b.addEventListener("resize",b.picturefill,false);
b.addEventListener("DOMContentLoaded",function(){b.picturefill();
b.removeEventListener("load",b.picturefill,false)
},false);
b.addEventListener("load",b.picturefill,false)
}else{if(b.attachEvent){b.attachEvent("onload",b.picturefill)
}}}(this));
if(window.manipal.alumniListConfig!=undefined){window.manipal.alumniListComponent.init()
}if(window.manipal.rfiConfig!=undefined){window.manipal.rfi.init()
}(function(d,e,f){d.insideSecNav=(function(){function a(){var b=this;
var n=[],p=[],c=[],m=true,l=0,o=[];
this.stickTopNav=function(i){var g=e(window).width(),h=0;
if(e(".main-nav-container").length>0){if(i>=p[1]){if(m){e(".main-nav-container").addClass("stuck");
if(e(".request4info").length!=0){e(".sticky-navigation .rfi-tag").show()
}e(".page-container").css("margin-top","44px");
m=false
}}else{e(".page-container").css("margin-top","0");
e(".main-nav-container").removeClass("stuck");
e(".sticky-navigation .rfi-tag").hide();
m=true
}}};
this.handleScroll=function(g){var h=e(window).width();
e.each(n,function(k){if(k>0&&g>=n[k]&&g<n[k+1]){var r=e(".sec-nav-item")[k-1];
if(!e(r).find(".inside-sec-nav-links").hasClass("active")){e(".sec-nav-item").find(".inside-sec-nav-links").removeClass("active");
e(r).find(".inside-sec-nav-links").addClass("active")
}if(k>6||h<=768){var j=o[k+1];
if(e.trim(j)==""){j=o[k+1]
}e(".dd-sec-nav").find(".dropdown-toggle").html(j+' <b class="caret"></b>');
var i=e(".sec-nav-item")[6];
if(!e(i).find(".dropdown-toggle").hasClass("active")){e(i).find(".dropdown-toggle").addClass("active")
}}else{e(".dd-sec-nav").find(".dropdown-toggle").removeClass("active").html('More <b class="caret"></b>')
}}})
};
this.handleClick=function(){e(".sticky-navigation").on("click",".inside-sec-nav-links",function(j){j.preventDefault();
var h=e(this),k=h.parent(),g=e(k).data("nav-index"),i=e(".quick-facts"),r=0;
if(i.length<=0){g+=1
}else{if(e("#domainValue").val()=="SMUDE"){r=i.outerHeight(true)-55
}}e.each(c,function(v){if(g==v){var x=c[v]+r,q=1000,w=null;
e("body,html").animate({scrollTop:x+"px"},{duration:q},{easing:w})
}})
})
};
this.prepareScrollPoints=function(){if(e(".news-flash-banner").hasClass("hide-news-flash")){var P=e(".top-navigation").outerHeight(true)
}else{var P=e(".top-navigation").outerHeight(true)+e(".news-flash-banner").outerHeight(true)
}var i=e(".primary-nav-container").height(true);
var G=[0],J=[0],O=[0],M=[],F=0,k=[null],h=e(window).width(),I=(h>768)?false:true,S=0;
if(e(".manipal-mobile .request4info").length!=0&&e("#domainValue").val()=="SMUDE"){S=571
}var K=(I)?e(".mobile-hero-container").outerHeight(true):((e(".hero-container").length===0)?0:0);
var H=(I)?e(".manipal-mobile-view").outerHeight(true):((e(".hero-banner-container").length===0)?0:526);
if(I){if(e("#domainValue").val()=="MEMG"){F+=H+P-20
}else{F+=H+P+70;
F+=K-90;
F+=S+320
}}else{F+=(H-70)+P
}if(e(".quick-facts").length!=0){var L=(I)?e(".manipal-mobile .quick-facts").outerHeight(true):e(".quick-facts").outerHeight(true);
F+=L
}if(e(".four-column-manual .container-940").find(".sticky-nav-data").length!=0){e(".four-column-manual .container-940").find(".sticky-nav-data").remove()
}if(!I){}else{F+=S
}G.push(F);
k.push("Hero Banner");
J.push(F);
O.push(F);
var T=e(".sticky-nav-data"),Q,N=e(".main-nav-container .sticky-navigation ul");
e(N).empty();
var j=true;
e.each(T,function(s){var u=T[s],v=T[s+1];
var q=e(u).find(".sticky-title").text(),w=e(u).find(".sticky-image-path").text(),t=e(u).find(".sticky-link-target").text(),r="";
if(e(v).length>0){r=e(v).find(".sticky-title").text()
}if(e(u).parent(".quick-facts").length<=0){if(e.trim(r)==""){F+=e(v).parent().outerHeight(true);
O.push(F)
}if(e.trim(q)!=""){if(l<6&&!I){e(N).append('<li class="sec-nav-item" data-nav-index="'+s+'"><a href="'+t+'" title="'+q+'" class="inside-sec-nav-links"><span class="sticky-nav-text">'+q+"</span></a></li>")
}else{if(j){e(N).append('<li class="dropdown dd-sec-nav sec-nav-item"><a href="#" class="dropdown-toggle" data-toggle="dropdown">More <b class="caret"></b></a><ul class="inside-drop-down dropdown-menu"></ul></li>');
j=false
}e(".inside-drop-down").append('<li role="presentation" data-nav-index="'+s+'"><a href="'+t+'" tabindex="-1" role="menuitem" data-value="" class="inside-sec-nav-links">'+q+"</a></li>")
}l+=1;
F+=e(u).parent().outerHeight(true);
J.push(F);
G.push(F);
k.push(q);
O.push(F)
}}});
if(e("#request4info").length>0){var R=e('input[name="siteIdentifier"]').val().toLowerCase();
var g='<div class="rfi-text" >Request for information</div>';
if(R=="miu"){g='<div class="rfi-text" ></div>'
}e(N).append('<a href="#request4info" class="rfi-tag">'+g+'<img src="/etc/designs/manipal/'+R+"/"+R+'-clientlibs/images/rfi-bg.png" alt="Request for Information" /></a>');
e('.manipal-mobile .main-nav-container ul li a[href="#videoplanner"]').hide()
}b.setItemWidth();
n=G;
p=J;
c=O;
o=k;
e(window).scroll(function(){var q=e(window).scrollTop();
b.stickTopNav(q);
b.handleScroll(q)
});
b.handleClick()
};
this.requestForInfo=function(){e(".sticky-nav-container").on("click",".rfi-tag",function(g){g.preventDefault();
e(window).scrollTop(0);
var h=e(".request4info").find("form input").not("input[type=hidden]")[0];
e(h).focus()
})
};
this.setItemWidth=function(){var h=e(".sticky-nav-container li.sec-nav-item").length;
var g=(100/h)+"%";
e(".sticky-nav-container li.sec-nav-item").css("width",g)
};
this.setDefaults=function(){e(window).scrollTop(0);
e(document).mousedown(function(h){if(h.which===2){h.preventDefault()
}return true
});
b.prepareScrollPoints();
b.requestForInfo();
var g={primaryStickyHeight:e(".js-primary-sticky").outerHeight(),isFixedState:false,lastAnimation:0,prevScrollTop:0,scrollDirection:"null"};
d.stickyNavDefaults=g
};
this.homePageTab=function(){var h=e(".sticky-nav-data"),g,i=e(".main-nav-container .sticky-navigation ul"),j=e(window).width();
e(i).empty();
var k=true;
e.each(h,function(w){var y=h[w];
var v=e(y).find(".sticky-title").text(),z=e(y).find(".sticky-image-path").text(),x=e(y).find(".sticky-link-target").text();
if(w<1){e(i).append('<li class="hom-sec-nav-item learning" data-nav-index="'+w+'"><span class="banner_anim"></span><a href="'+x+'" title="'+v+'" class="inspired_learning"><img class="normal" src="'+z+'" alt="'+v+'" height="15" width="15" /><img class="brown" src="'+z+'" alt="'+v+'" height="15" width="15" /><span class="sticky-nav-text">'+v+"</span></a></li>")
}else{if(!(x=="#videoplanner"&&j<=768)){e(i).append('<li class="hom-sec-nav-item" data-nav-index="'+w+'"><span class="banner_anim"></span><a href="'+x+'" title="'+v+'" class="inspired_learning"><img class="normal" src="'+z+'" alt="'+v+'" height="15" width="15" /><img class="brown" src="'+z+'" alt="'+v+'" height="15" width="15" /><span class="sticky-nav-text">'+v+"</span></a></li>")
}}})
};
this.init=function(){var g=e(window).width();
if(e(".bs-docs-container  section.learning-carousel-sections").length==0){e(".js-primary-sticky").css("top","auto");
e(document).ready(function(){setTimeout(function(){b.setDefaults()
},1000)
})
}else{b.homePageTab()
}return this
};
return this.init()
}return new a()
}())
}(window.manipal=window.manipal||{},jQuery));