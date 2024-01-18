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
},email:function(d,a){return this.optional(a)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@([a-z0-9-]+)((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(d)
},url:function(d,a){return this.optional(a)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(d)
},date:function(d,a){d=d.split("/")[1]+"/"+d.split("/")[0]+"/"+d.split("/")[2];
return this.optional(a)||!/Invalid|NaN/.test(new Date(d))
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
(function($){$.fn.columnize=function(options){var defaults={width:400,columns:false,buildOnce:false,overflow:false,doneFunc:function(){},target:false,ignoreImageLoading:true,columnFloat:"left",lastNeverTallest:false,accuracy:false,manualBreaks:false,cssClassPrefix:""};
options=$.extend(defaults,options);
if(typeof(options.width)=="string"){options.width=parseInt(options.width,10);
if(isNaN(options.width)){options.width=defaults.width
}}return this.each(function(){var $inBox=options.target?$(options.target):$(this);
var maxHeight=$(this).height();
var $cache=$("<div></div>");
var lastWidth=0;
var columnizing=false;
var manualBreaks=options.manualBreaks;
var cssClassPrefix=defaults.cssClassPrefix;
if(typeof(options.cssClassPrefix)=="string"){cssClassPrefix=options.cssClassPrefix
}var adjustment=0;
$cache.append($(this).contents().clone(true));
if(!options.ignoreImageLoading&&!options.target){if(!$inBox.data("imageLoaded")){$inBox.data("imageLoaded",true);
if($(this).find("img").length>0){var func=function($inBox,$cache){return function(){if(!$inBox.data("firstImageLoaded")){$inBox.data("firstImageLoaded","true");
$inBox.empty().append($cache.children().clone(true));
$inBox.columnize(options)
}}
}($(this),$cache);
$(this).find("img").one("load",func);
$(this).find("img").one("abort",func);
return
}}}$inBox.empty();
columnizeIt();
if(!options.buildOnce){$(window).resize(function(){if(!options.buildOnce){if($inBox.data("timeout")){clearTimeout($inBox.data("timeout"))
}$inBox.data("timeout",setTimeout(columnizeIt,200))
}})
}function prefixTheClassName(className,withDot){var dot=withDot?".":"";
if(cssClassPrefix.length){return dot+cssClassPrefix+"-"+className
}return dot+className
}function columnize($putInHere,$pullOutHere,$parentColumn,targetHeight){while((manualBreaks||$parentColumn.height()<targetHeight)&&$pullOutHere[0].childNodes.length){var node=$pullOutHere[0].childNodes[0];
if($(node).find(prefixTheClassName("columnbreak",true)).length){return
}if($(node).hasClass(prefixTheClassName("columnbreak"))){return
}$putInHere.append(node)
}if($putInHere[0].childNodes.length===0){return
}var kids=$putInHere[0].childNodes;
var lastKid=kids[kids.length-1];
$putInHere[0].removeChild(lastKid);
var $item=$(lastKid);
if($item[0].nodeType==3){var oText=$item[0].nodeValue;
var counter2=options.width/18;
if(options.accuracy){counter2=options.accuracy
}var columnText;
var latestTextNode=null;
while($parentColumn.height()<targetHeight&&oText.length){var indexOfSpace=oText.indexOf(" ",counter2);
if(indexOfSpace!=-1){columnText=oText.substring(0,oText.indexOf(" ",counter2))
}else{columnText=oText
}latestTextNode=document.createTextNode(columnText);
$putInHere.append(latestTextNode);
if(oText.length>counter2&&indexOfSpace!=-1){oText=oText.substring(indexOfSpace)
}else{oText=""
}}if($parentColumn.height()>=targetHeight&&latestTextNode!==null){$putInHere[0].removeChild(latestTextNode);
oText=latestTextNode.nodeValue+oText
}if(oText.length){$item[0].nodeValue=oText
}else{return false
}}if($pullOutHere.contents().length){$pullOutHere.prepend($item)
}else{$pullOutHere.append($item)
}return $item[0].nodeType==3
}function split($putInHere,$pullOutHere,$parentColumn,targetHeight){if($putInHere.contents(":last").find(prefixTheClassName("columnbreak",true)).length){return
}if($putInHere.contents(":last").hasClass(prefixTheClassName("columnbreak"))){return
}if($pullOutHere.contents().length){var $cloneMe=$pullOutHere.contents(":first");
if($cloneMe.get(0).nodeType!=1){return
}var $clone=$cloneMe.clone(true);
if($cloneMe.hasClass(prefixTheClassName("columnbreak"))){$putInHere.append($clone);
$cloneMe.remove()
}else{if(manualBreaks){$putInHere.append($clone);
$cloneMe.remove()
}else{if($clone.get(0).nodeType==1&&!$clone.hasClass(prefixTheClassName("dontend"))){$putInHere.append($clone);
if($clone.is("img")&&$parentColumn.height()<targetHeight+20){$cloneMe.remove()
}else{if(!$cloneMe.hasClass(prefixTheClassName("dontsplit"))&&$parentColumn.height()<targetHeight+20){$cloneMe.remove()
}else{if($clone.is("img")||$cloneMe.hasClass(prefixTheClassName("dontsplit"))){$clone.remove()
}else{$clone.empty();
if(!columnize($clone,$cloneMe,$parentColumn,targetHeight)){$cloneMe.addClass(prefixTheClassName("split"));
if($cloneMe.children().length){split($clone,$cloneMe,$parentColumn,targetHeight)
}}else{$cloneMe.addClass(prefixTheClassName("split"))
}if($clone.get(0).childNodes.length===0){$clone.remove()
}}}}}}}}}function singleColumnizeIt(){if($inBox.data("columnized")&&$inBox.children().length==1){return
}$inBox.data("columnized",true);
$inBox.data("columnizing",true);
$inBox.empty();
$inBox.append($("<div class='"+prefixTheClassName("first")+" "+prefixTheClassName("last")+" "+prefixTheClassName("column")+" ' style='width:100%; float: "+options.columnFloat+";'></div>"));
$col=$inBox.children().eq($inBox.children().length-1);
$destroyable=$cache.clone(true);
if(options.overflow){targetHeight=options.overflow.height;
columnize($col,$destroyable,$col,targetHeight);
if(!$destroyable.contents().find(":first-child").hasClass(prefixTheClassName("dontend"))){split($col,$destroyable,$col,targetHeight)
}while($col.contents(":last").length&&checkDontEndColumn($col.contents(":last").get(0))){var $lastKid=$col.contents(":last");
$lastKid.remove();
$destroyable.prepend($lastKid)
}var html="";
var div=document.createElement("DIV");
while($destroyable[0].childNodes.length>0){var kid=$destroyable[0].childNodes[0];
if(kid.attributes){for(var i=0;
i<kid.attributes.length;
i++){if(kid.attributes[i].nodeName.indexOf("jQuery")===0){kid.removeAttribute(kid.attributes[i].nodeName)
}}}div.innerHTML="";
div.appendChild($destroyable[0].childNodes[0]);
html+=div.innerHTML
}var overflow=$(options.overflow.id)[0];
overflow.innerHTML=html
}else{$col.append($destroyable)
}$inBox.data("columnizing",false);
if(options.overflow&&options.overflow.doneFunc){options.overflow.doneFunc()
}}function checkDontEndColumn(dom){if(dom.nodeType==3){if(/^\s+$/.test(dom.nodeValue)){if(!dom.previousSibling){return false
}return checkDontEndColumn(dom.previousSibling)
}return false
}if(dom.nodeType!=1){return false
}if($(dom).hasClass(prefixTheClassName("dontend"))){return true
}if(dom.childNodes.length===0){return false
}return checkDontEndColumn(dom.childNodes[dom.childNodes.length-1])
}function columnizeIt(){adjustment=0;
if(lastWidth==$inBox.width()){return
}lastWidth=$inBox.width();
var numCols=Math.round($inBox.width()/options.width);
var optionWidth=options.width;
var optionHeight=options.height;
if(options.columns){numCols=options.columns
}if(manualBreaks){numCols=$cache.find(prefixTheClassName("columnbreak",true)).length+1;
optionWidth=false
}if(numCols<=1){return singleColumnizeIt()
}if($inBox.data("columnizing")){return
}$inBox.data("columnized",true);
$inBox.data("columnizing",true);
$inBox.empty();
$inBox.append($("<div style='width:"+(Math.floor(100/numCols))+"%; float: "+options.columnFloat+";'></div>"));
$col=$inBox.children(":last");
$col.append($cache.clone());
maxHeight=$col.height();
$inBox.empty();
var targetHeight=maxHeight/numCols;
var firstTime=true;
var maxLoops=3;
var scrollHorizontally=false;
if(options.overflow){maxLoops=1;
targetHeight=options.overflow.height
}else{if(optionHeight&&optionWidth){maxLoops=1;
targetHeight=optionHeight;
scrollHorizontally=true
}}for(var loopCount=0;
loopCount<maxLoops&&loopCount<20;
loopCount++){$inBox.empty();
var $destroyable,className,$col,$lastKid;
try{$destroyable=$cache.clone(true)
}catch(e){$destroyable=$cache.clone()
}$destroyable.css("visibility","hidden");
for(var i=0;
i<numCols;
i++){className=(i===0)?prefixTheClassName("first"):"";
className+=" "+prefixTheClassName("column");
className=(i==numCols-1)?(prefixTheClassName("last")+" "+className):className;
$inBox.append($("<div class='"+className+"' style='width:"+(Math.floor(100/numCols))+"%; float: "+options.columnFloat+";'></div>"))
}i=0;
while(i<numCols-(options.overflow?0:1)||scrollHorizontally&&$destroyable.contents().length){if($inBox.children().length<=i){$inBox.append($("<div class='"+className+"' style='width:"+(Math.floor(100/numCols))+"%; float: "+options.columnFloat+";'></div>"))
}$col=$inBox.children().eq(i);
if(scrollHorizontally){$col.width(optionWidth+"px")
}columnize($col,$destroyable,$col,targetHeight);
split($col,$destroyable,$col,targetHeight);
while($col.contents(":last").length&&checkDontEndColumn($col.contents(":last").get(0))){$lastKid=$col.contents(":last");
$lastKid.remove();
$destroyable.prepend($lastKid)
}i++;
if($col.contents().length===0&&$destroyable.contents().length){$col.append($destroyable.contents(":first"))
}else{if(i==numCols-(options.overflow?0:1)&&!options.overflow){if($destroyable.find(prefixTheClassName("columnbreak",true)).length){numCols++
}}}}if(options.overflow&&!scrollHorizontally){var IE6=false;
/*@cc_on || @_jscript_version < 5.7 @*/
;
var IE7=(document.all)&&(navigator.appVersion.indexOf("MSIE 7.")!=-1);
if(IE6||IE7){var html="";
var div=document.createElement("DIV");
while($destroyable[0].childNodes.length>0){var kid=$destroyable[0].childNodes[0];
for(i=0;
i<kid.attributes.length;
i++){if(kid.attributes[i].nodeName.indexOf("jQuery")===0){kid.removeAttribute(kid.attributes[i].nodeName)
}}div.innerHTML="";
div.appendChild($destroyable[0].childNodes[0]);
html+=div.innerHTML
}var overflow=$(options.overflow.id)[0];
overflow.innerHTML=html
}else{$(options.overflow.id).empty().append($destroyable.contents().clone(true))
}}else{if(!scrollHorizontally){$col=$inBox.children().eq($inBox.children().length-1);
$destroyable.contents().each(function(){$col.append($(this))
});
var afterH=$col.height();
var diff=afterH-targetHeight;
var totalH=0;
var min=10000000;
var max=0;
var lastIsMax=false;
var numberOfColumnsThatDontEndInAColumnBreak=0;
$inBox.children().each(function($inBox){return function($item){var $col=$inBox.children().eq($item);
var endsInBreak=$col.children(":last").find(prefixTheClassName("columnbreak",true)).length;
if(!endsInBreak){var h=$col.height();
lastIsMax=false;
totalH+=h;
if(h>max){max=h;
lastIsMax=true
}if(h<min){min=h
}numberOfColumnsThatDontEndInAColumnBreak++
}}
}($inBox));
var avgH=totalH/numberOfColumnsThatDontEndInAColumnBreak;
if(totalH===0){loopCount=maxLoops
}else{if(options.lastNeverTallest&&lastIsMax){adjustment+=30;
targetHeight=targetHeight+30;
if(loopCount==maxLoops-1){maxLoops++
}}else{if(max-min>30){targetHeight=avgH+30
}else{if(Math.abs(avgH-targetHeight)>20){targetHeight=avgH
}else{loopCount=maxLoops
}}}}}else{$inBox.children().each(function(i){$col=$inBox.children().eq(i);
$col.width(optionWidth+"px");
if(i===0){$col.addClass(prefixTheClassName("first"))
}else{if(i==$inBox.children().length-1){$col.addClass(prefixTheClassName("last"))
}else{$col.removeClass(prefixTheClassName("first"));
$col.removeClass(prefixTheClassName("last"))
}}});
$inBox.width($inBox.children().length*optionWidth+"px")
}}$inBox.append($("<br style='clear:both;'>"))
}$inBox.find(prefixTheClassName("column",true)).find(":first"+prefixTheClassName("removeiffirst",true)).remove();
$inBox.find(prefixTheClassName("column",true)).find(":last"+prefixTheClassName("removeiflast",true)).remove();
$inBox.data("columnizing",false);
if(options.overflow){options.overflow.doneFunc()
}options.doneFunc()
}})
}
})(jQuery);
(function(b){b.fn.MaGEValidate=function(H){var H=H||{},t=b(this);
var F=".isRequired",y=".isTableCheckRequired",u=".isDate",a=".isMobile",D=".isPhone",J=".isimageCheckRequired",B=".isTestValidate",G=".isScoreValidate",z=".isYearValidate",v=".isRegisterValidate",A=".isDdValidate",w=".isNameValidate",x=".isCodeValidateIfsc",I=".isNumber";
mobileValidTenDigit=".isValidTenDigit";
signSymbolValidate=".isSignValidate";
addressValidate=".isAddressValidate";
formNotSubmitted=true;
var C=function(){t.on("submit",function(j){t.find(signSymbolValidate).each(function(o,n){var m=b(n).parent();
var l=/^[a-zA-Z0-9 +]+$/;
if(b(n).val()!=""){if(!l.test(b(n).val())){if(!m.hasClass("error")){m.addClass("error");
m.append(b('<p class="error_msg">'+H.signErrorMsg+"</p>"))
}}else{m.removeClass("error");
m.find(".error_msg").remove()
}}});
t.find(addressValidate).each(function(n,m){var l=b(m).parent();
var o=/^[a-zA-Z0-9 \\p{Space},#.!\\'\\:\\&\\+\\"\\-\\(\\)/]+$/;
if(b(m).val()!=""){if(!o.test(b(m).val())){if(!l.hasClass("error")){l.addClass("error");
l.append(b('<p class="error_msg">'+H.addressErrorMsg+"</p>"))
}}else{l.removeClass("error");
l.find(".error_msg").remove()
}}});
t.find(w).each(function(o,n){var m=b(n).parent();
var l=/^[a-zA-Z'. ]{0,150}$/;
if(!l.test(b(n).val())){if(!m.hasClass("error")){m.addClass("error");
m.append(b('<p class="error_msg">'+H.nameErrorMsg+"</p>"))
}}else{m.removeClass("error");
m.find(".error_msg").remove()
}});
t.find(I).each(function(n,m){if(b(m).parent(".fieldset_list").parent().css("display")=="none"){return
}var l=b(m).parent();
if(!b.isNumeric(b.trim(b(m).val()))&&b.trim(b(m).val())!=""){if(!l.hasClass("error")){b(l).addClass("error");
b(l).append(b('<p class="error_msg">Please add number</p>'))
}}else{l.removeClass("error");
l.find(".error_msg").remove()
}});
t.find(F).each(function(n,m){var l=b(m).parent();
if(m.nodeName==="INPUT"){if(b.trim(b(m).val())===""){if(!l.hasClass("error")){b(l).addClass("error");
if(l.find(".error_msg").length!=0){l.find(".error_msg").remove()
}b(l).append(b('<p class="error_msg">This field is required</p>'))
}}else{if(b(m).prop("type")=="checkbox"&&!b(m).is(":checked")){if(!l.hasClass("error")){b(l).addClass("error");
b(l).append(b('<p class="error_msg">This field is required, Please select this checkbox</p>'))
}}else{if(b(m).hasClass("emailNotValid")){if(!l.hasClass("error")){b(l).addClass("error");
b(l).find("p.error_msg").remove();
b(l).append(b('<p class="error_msg">Please enter a valid email address</p>'))
}}else{l.removeClass("error");
l.find(".error_msg").remove()
}}}}else{if(b(m).find("input[type=radio]").length>0&&b(m).find("input[type=radio]").parents(".app_form_container").css("display")!="none"){if(b(m).find("input[type=radio]:checked").length<=0){if(!l.hasClass("error")){b(l).addClass("error");
b(l).append(b('<p class="error_msg">Confirm eligiblity. If you do not have the required eligiblity, you cannot apply.</p>'))
}}}else{if(m.nodeName==="SELECT"){if(b(m).prop("selectedIndex")===0){if(!l.hasClass("error")){b(l).addClass("error");
b(l).append(b('<p class="error_msg">This field is required</p>'))
}}else{l.removeClass("error");
l.find(".error_msg").remove()
}}else{if(m.nodeName==="TEXTAREA"){if(b.trim(b(m).val())===""){if(!l.hasClass("error")){b(l).addClass("error");
b(l).append(b('<p class="error_msg">This field is required</p>'))
}}else{l.removeClass("error");
l.find(".error_msg").remove()
}}}}}if(b(l).hasClass("otherCityHide")){l.removeClass("error");
l.find(".error_msg").remove()
}});
t.find(D).each(function(n,m){var l=b(".phone_field");
if(!b.isNumeric(b.trim(b(l).val()))){if(!b(m).hasClass("error")){b(m).addClass("error");
b(m).append(b('<p class="error_msg">This field is required</p>'))
}}else{if(b.trim(b(l).val()).indexOf("0")!=0||b(l).val().length<11){if(!b(m).hasClass("error")){b(m).addClass("error");
b(m).append(b("<p class='error_msg'>Please enter a valid phone number starting with '0'</p>"))
}}else{b(m).removeClass("error");
b(m).find(".error_msg").remove()
}}});
t.find(a).each(function(m,l){var n=b(".mobile_field-1"),o=b(".mobile_field-2");
if(!b.isNumeric(b.trim(b(n).val()))||!b.isNumeric(b.trim(b(o).val()))){if(!b(l).hasClass("error")){b(l).addClass("error");
b(l).append(b('<p class="error_msg">This field is required</p>'))
}}else{b(l).removeClass("error");
b(l).find(".error_msg").remove()
}});
t.find(mobileValidTenDigit).each(function(n,m){var l=b(".isValidTenDigit");
if(b(l).val().length!=10){if(!b(m).parent().hasClass("error")){b(m).parent().addClass("error");
b(m).parent().append(b('<p class="error_msg">Please Enter 10 Digits</p>'))
}}else{b(m).parent().removeClass("error");
b(m).parent().find(".error_msg").remove()
}});
t.find(B).each(function(o,n){if(b(n).parent(".fieldset_list").parent().css("display")=="none"){return
}var m=b(n).parent();
var l=/^[a-zA-Z'. ]{0,150}$/;
if(!l.test(b(n).val())||b(n).val()==""){if(!m.hasClass("error")){m.addClass("error");
m.append(b('<p class="error_msg">'+H.testErrorMsg+"</p>"))
}}else{m.removeClass("error");
m.find(".error_msg").remove()
}});
t.find(G).each(function(n,m){if(b(m).parent(".fieldset_list").parent().css("display")=="none"){return
}var l=b(m).parent();
var o=/^\d{0,9}(\.\d{1,4})? *%?$/;
if(!o.test(b(m).val())||b(m).val()==""){if(!l.hasClass("error")){l.addClass("error");
l.append(b('<p class="error_msg">'+H.scoreErrorMsg+"</p>"))
}}else{l.removeClass("error");
l.find(".error_msg").remove()
}});
t.find(z).each(function(o,n){if(b(n).parent(".fieldset_list").parent().css("display")=="none"){return
}var m=b(n).parent();
var l=/^[1-2][0-9]{3}$/;
if(!l.test(b(n).val())||b(n).val()==""){if(!m.hasClass("error")){m.addClass("error");
m.append(b('<p class="error_msg">'+H.yearErrorMsg+"</p>"))
}}else{m.removeClass("error");
m.find(".error_msg").remove()
}});
t.find(v).each(function(o,m){if(b(m).parent(".fieldset_list").parent().css("display")=="none"){return
}var l=b(m).parent();
var n=/^([a-zA-Z0-9\s\-]+)$/;
if(!n.test(b(m).val())||b(m).val()==""){if(!l.hasClass("error")){l.addClass("error");
l.append(b('<p class="error_msg">'+H.registerErrorMsg+"</p>"))
}}else{l.removeClass("error");
l.find(".error_msg").remove()
}});
t.find(A).each(function(o,n){if(b(n).parent(".fieldset_list").parent().css("display")=="none"){return
}var m=b(n).parent();
var l=/^[0-9]{6}$/;
if(!l.test(b(n).val())||b(n).val()==""){if(!m.hasClass("error")){m.addClass("error");
m.append(b('<p class="error_msg">'+H.ddErrorMsg+"</p>"))
}}else{m.removeClass("error");
m.find(".error_msg").remove()
}});
t.find(x).each(function(n,m){var l=b(m).parent();
var o=/^([a-zA-Z0-9\s\-]+)$/;
if(!o.test(b(m).val())&&b.trim(b(m).val())!=""){if(!l.hasClass("error")){l.addClass("error");
l.append(b('<p class="error_msg">'+H.codeErrorMsg+"</p>"))
}}else{l.removeClass("error");
l.find(".error_msg").remove()
}});
t.find(J).each(function(n,m){var l=b(m).parents(".image_container");
if(b.trim(b(m).val())===""){if(!l.hasClass("error")){b(l).addClass("error")
}}else{l.removeClass("error")
}});
t.find(u).on("change",function(l){var n=b(l.target),m=b(n).parent();
if(b.trim(b(n).val())===""){if(!m.hasClass("error")){b(m).addClass("error");
b(m).append(b('<p class="error_msg">This field is required</p>'))
}}else{m.removeClass("error");
m.find(".error_msg").remove()
}});
t.find(D).find("input").on("change",function(m){var l=b(m.target),n=l.parent();
if(!b.isNumeric(b.trim(b(l).val()))){if(!b(n).hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">This field is required</p>'))
}}else{b(n).removeClass("error");
b(n).find(".error_msg").remove()
}});
t.find(a).find("input").on("change",function(l){var m=b(l.target).parents(".isMobile");
var n=m.find(".mobile_field-1"),o=m.find(".mobile_field-2");
if(!b.isNumeric(b.trim(b(n).val()))||!b.isNumeric(b.trim(b(o).val()))){if(!b(m).hasClass("error")){b(m).addClass("error");
b(m).append(b('<p class="error_msg">This field is required</p>'))
}}else{b(m).removeClass("error");
b(m).find(".error_msg").remove()
}});
t.find(".error").on("keyup",function(l){var o=b(l.target),n=b(o).parent();
var m=o.hasClass("isRequired");
var p=o.hasClass("isNumber");
if(m&&l.target.nodeName==="INPUT"){if(b.trim(b(o).val())===""){if(!n.hasClass("error")){b(n).addClass("error");
if(n.find(".error_msg").length!=0){n.find(".error_msg").remove()
}b(n).append(b('<p class="error_msg">This field is required</p>'))
}}else{if(b(o).prop("type")=="checkbox"&&!b(o).is(":checked")){if(!n.hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">This field is required, Please select this checkbox</p>'))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}}}if(p){if(!b.isNumeric(b.trim(b(o).val()))){if(!n.hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">Please add number</p>'))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}}if(m&&l.target.nodeName==="TEXTAREA"){if(b.trim(b(o).val())===""){if(!n.hasClass("error")){b(n).addClass("error");
if(n.find(".error_msg").length!=0){n.find(".error_msg").remove()
}b(n).append(b('<p class="error_msg">This field is required</p>'))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}}});
t.find(".error").find("input[type='checkbox']").on("change",function(l){var o=b(l.target),n=b(o).parent(),m=o.hasClass("isRequired");
if(!b(o).is(":checked")&&m){if(!n.hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">This field is required, Please select the above checkbox</p>'))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}});
t.find(".error").find("input[type='radio']").on("change",function(l){var o=b(l.target),n=b(b(o)[0]).parents(".error"),m=o.hasClass("isRequired");
if(!b(n).find("input[type=radio]:checked").length>0){if(!n.hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">Confirm eligiblity. If you do not have the required eligiblity, you cannot apply.</p>'))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}});
t.find(".error").find("select").on("change",function(l){var o=b(l.target),n=b(o).parent();
var m=o.hasClass("isRequired");
if(b(o).prop("selectedIndex")===0){if(!n.hasClass("error")){b(n).addClass("error");
b(n).append(b('<p class="error_msg">This field is required</p>'))
}}else{n.removeClass("error");
n.find(".error_msg").remove()
}});
t.find(".image_container.error").find("input").on("change",function(l){var n=b(l.target),m=b(n).parents(".image_container");
if(b.trim(b(n).val())===""){if(!m.hasClass("error")){b(m).addClass("error")
}}else{m.removeClass("error")
}});
if(t.find(y).length>0){var k=t.find("error").find(".program_table input:checkbox");
var d=t.find(y).find("input:checkbox:checked").length;
if(d<=0){t.find(y).addClass("error").find(".course_table_tr").removeClass("highlight_tr").end().siblings(".base_topic").append(b('<p class="error_msg">This field is required</p>'))
}}t.find(".error").find(".program_table input:checkbox").on("change",function(m){var l=t.find(y).find("input:checkbox:checked").length;
if(l<=0){if(!t.find(y).hasClass("error")){t.find(y).addClass("error").find(".course_table_tr").removeClass("highlight_tr").end().siblings(".base_topic").append(b('<p class="error_msg">This field is required</p>'))
}}else{t.find(y).removeClass("error").siblings(".base_topic").find(".error_msg").remove();
b(m.target).parents(".course_table_tr").addClass("highlight_tr")
}});
if(b("#icas_course")){var c=b("#branch_2_field").parent();
if(b("#branch_1_field").val()===b("#branch_2_field").val()){if(!c.hasClass("error")){b(c).addClass("error");
b(c).append(b('<p class="error_msg">Branch 1 and 2 cannot be same value</p>'))
}}else{if(c.hasClass("error")){b(c).removeClass("error");
c.find(".error_msg").remove()
}}}if(b("#after_confirm_testcenter").css("display")!="none"){var e=b("#preference_2_field").parent();
if(b("#preference_1_field").val()===b("#preference_2_field").val()){if(!e.hasClass("error")){b(e).addClass("error");
b(e).append(b('<p class="error_msg">Preference 1 and 2 cannot be same value</p>'))
}}else{if(e.hasClass("error")){b(e).removeClass("error");
e.find(".error_msg").remove()
}}}if(t.find(".error").length>0){return false
}else{if(b(t).attr("id")=="forgot_pwd_form"){j.preventDefault();
var f=t.find("#forgot_email_id").val(),g=t.find("#forgot_date_of_birth").val(),h=t.attr("action");
var i=b.ajax({url:h,type:"POST",data:{forgotEmailAddress:f,forgotDateOfBirth:g}});
i.done(function(m){var l=m.status.toLowerCase();
if(l=="success"){b("#forgot_username_pwd_form_container").hide();
b("#forgot_username_pwd_success_container").show()
}else{if(l=="failure"){var n=m.errors;
if(n.hasOwnProperty("generalError")){b("#forgot_username_pwd_form_container .basic_info_container").find(".error_msg").remove();
b("#forgot_username_pwd_form_container .basic_info_container").append('<p class="error_msg">'+n.generalError+"</p>")
}else{if(n.hasOwnProperty("emailOrDateOfBirth")){b("#forgot_username_pwd_form_container .basic_info_container").find(".error_msg").remove();
b("#forgot_username_pwd_form_container .basic_info_container").append('<p class="error_msg">'+n.emailOrDateOfBirth+"</p>")
}else{if(n.hasOwnProperty("emailAddress")){b("#forgot_email_id").parent().addClass("error").append('<p class="error_msg">'+n.emailAddress+"</p>")
}else{if(n.hasOwnProperty("dateOfBirth")){b("#forgot_date_of_birth").parent().addClass("error").append('<p class="error_msg">'+n.dateOfBirth+"</p>")
}}}}}}}).fail(function(){alert("error in data")
})
}if(formNotSubmitted){return true;
formNotSubmitted=false
}return false
}})
};
var E=function(){C();
b(document).ready(function(){b(".diploma_holder_datepicker").on("click",function(c){if(b(this).is(":checked")&&b(this).val()=="true"){b(".show-date-picker").show()
}else{b(".show-date-picker").hide()
}})
})
};
E()
}
})(jQuery);
/*!
 *
 *
 * @project   Manipal GE
 * @date      2013-05-13
 * @author    Kuldip Raj, SapientNitro <kraj2@sapient.com>
 * @licensor  CLIENTNAME
 * @site      Manipal
 *
 */
(function(b){b.fn.c110b=function(a){var a=a||{},i=a.inputData,k=a.componentContainer,l=b(this);
categoryCarouselDom=function(){var c=i;
var e="";
if(b.trim(c.go_link)!=""&&b.trim(c.link_content)!=""){if(c.go_linkType=="false"){e="<a class='more-info-link' href='"+c.go_link+"' title='"+c.link_title+"'><span class='see-more'>"+c.link_content+"</span></a>"
}else{e="<a class='more-info-link' href='"+c.go_link+"' title='"+c.link_title+"' target='_blank'><span class='see-more'>"+c.link_content+"</span></a>"
}}else{if(b.trim(c.link_content)==""){e=""
}else{e="<a class='more-info-link' href='#' title='"+c.link_title+"'><span class='see-more'>"+c.link_content+"</span></a>"
}}if(c.go_link2||c.link_content2){var g="";
if(b.trim(c.go_link2)!=""&&b.trim(c.link_content2)!=""){if(c.go_link2Type=="false"){g="<a class='more-info-link' href='"+c.go_link2+"' title='"+c.link_title2+"'><span class='see-more'>"+c.link_content2+"</span></a>"
}else{g="<a class='more-info-link' href='"+c.go_link2+"' title='"+c.link_title2+"' target='_blank'><span class='see-more'>"+c.link_content2+"</span></a>"
}}else{if(b.trim(c.link_content2)==""){g=""
}else{g="<a class='more-info-link' href='#' title='"+c.link_title2+"'><span class='see-more'>"+c.link_content2+"</span></a>"
}}b(l).find("#c110-b section .categories .slides").append("<li class = '"+c.color_scheme+"'><div class='category-parent'><div class='container-940'><div class='"+c.position+"'><h3 class='"+c.header_css+"'>"+c.header+"</h3><h2 class='"+c.big_title_css+"'>"+c.big_title+"</h2><p class='"+c.small_css+"'>"+c.text_line1+"</p>"+e+g+"</div></div></div><img class='lazyload' data-src='"+c.image+"' alt='"+c.alt_content+"' /></li>")
}else{b(l).find("#c110-b section .categories .slides").append("<li class = '"+c.color_scheme+"'><div class='category-parent'><div class='container-940'><div class='"+c.position+"'><h3 class='"+c.header_css+"'>"+c.header+"</h3><h2 class='"+c.big_title_css+"'>"+c.big_title+"</h2><p class='"+c.small_css+"'>"+c.text_line1+"</p>"+e+"</div></div></div><img class='lazyload' data-src='"+c.image+"' alt='"+c.alt_content+"' /></li>")
}var d="";
var n="";
var f="";
if(b("#domainValue").val()!="MEMG"){d=b("#c110-b .head-text-big");
n=b("#c110-b .head-text");
f=b("#c110-b .detail-text");
h(n,100);
h(d,100);
h(f,300)
}};
function h(d,c){b.each(d,function(g){var n=b(d)[g],f=b(n).text(),e=f.length;
if(e>c){b(n).text(f.substr(0,c))
}})
}mobileCarouselDom=function(){var p=i;
var g=b("."+k).find("#c110-b section");
var d="";
if(b.trim(p.go_link)!=""){if(p.go_linkType=="false"){d="<a href='"+p.go_link+"' title='"+p.link_content+"' class='view_more'>"+p.link_content+"</a>"
}else{d="<a href='"+p.go_link+"' title='"+p.link_content+"' class='view_more' target='_blank'>"+p.link_content+"</a>"
}}if(p.go_link2){var f="";
if(b.trim(p.go_link2)!=""){if(p.go_link2Type=="false"){f="<a href='"+p.go_link2+"' title='"+p.link_content2+"' class='view_more'>"+p.link_content2+"</a>"
}else{f="<a href='"+p.go_link2+"' title='"+p.link_content2+"' class='view_more' target='_blank'>"+p.link_content2+"</a>"
}}b(g).find(".learning-mobile-content").append("<li class = '"+p.color_scheme+"'><img class='learning-mobile-images lazyload' data-src='"+p.mobile_image+"' alt='' /><div class='"+p.position+"'><h3 class='"+p.header_css+"'>"+p.header+"</h3><h2 class='"+p.big_title_css+"'>"+p.big_title+"</h2><p class='"+p.small_css+"'>"+p.text_line1+"</p>"+d+f+"</div></li>")
}else{b(g).find(".learning-mobile-content").append("<li class = '"+p.color_scheme+"'><img class='learning-mobile-images lazyload' data-src='"+p.mobile_image+"' alt=''/><div class='"+p.position+"'><h3 class='"+p.header_css+"'>"+p.header+"</h3><h2 class='"+p.big_title_css+"'>"+p.big_title+"</h2><p class='"+p.small_css+"'>"+p.text_line1+"</p>"+d+"</div></li>")
}var c=b("#c110-b .head-text-big");
var o=b("#c110-b .head-text");
var e=b("#c110-b .detail-text");
h(o,100);
h(c,100);
h(e,300)
};
var j=function(){var c=b(window).width();
if(typeof i!="object"){return
}if(c>767){categoryCarouselDom()
}else{mobileCarouselDom()
}};
j()
}
})(jQuery);
(function(b){b.flexslider=function(B,a){var E=b(B);
E.vars=b.extend({},b.flexslider.defaults,a);
var x=E.vars.namespace,C=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,w=(("ontouchstart" in window)||C||window.DocumentTouch&&document instanceof DocumentTouch)&&E.vars.touch,D="click touchend MSPointerUp keyup",F="",r,y=E.vars.direction==="vertical",v=E.vars.reverse,s=(E.vars.itemWidth>0),z=E.vars.animation==="fade",u=E.vars.asNavFor!=="",A={},t=true;
b.data(B,"flexslider",E);
A={init:function(){E.animating=false;
E.currentSlide=parseInt((E.vars.startAt?E.vars.startAt:0),10);
if(isNaN(E.currentSlide)){E.currentSlide=0
}E.animatingTo=E.currentSlide;
E.atEnd=(E.currentSlide===0||E.currentSlide===E.last);
E.containerSelector=E.vars.selector.substr(0,E.vars.selector.search(" "));
E.slides=b(E.vars.selector,E);
E.container=b(E.containerSelector,E);
E.count=E.slides.length;
E.syncExists=b(E.vars.sync).length>0;
if(E.vars.animation==="slide"){E.vars.animation="swing"
}E.prop=(y)?"top":"marginLeft";
E.args={};
E.manualPause=false;
E.stopped=false;
E.started=false;
E.startTimeout=null;
E.transitions=!E.vars.video&&!z&&E.vars.useCSS&&(function(){var c=document.createElement("div"),d=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];
for(var e in d){if(c.style[d[e]]!==undefined){E.pfx=d[e].replace("Perspective","").toLowerCase();
E.prop="-"+E.pfx+"-transform";
return true
}}return false
}());
E.ensureAnimationEnd="";
if(E.vars.controlsContainer!==""){E.controlsContainer=b(E.vars.controlsContainer).length>0&&b(E.vars.controlsContainer)
}if(E.vars.manualControls!==""){E.manualControls=b(E.vars.manualControls).length>0&&b(E.vars.manualControls)
}if(E.vars.randomize){E.slides.sort(function(){return(Math.round(Math.random())-0.5)
});
E.container.empty().append(E.slides)
}E.doMath();
E.setup("init");
if(E.vars.controlNav){A.controlNav.setup()
}if(E.vars.directionNav){A.directionNav.setup()
}if(E.vars.keyboard&&(b(E.containerSelector).length===1||E.vars.multipleKeyboard)){b(document).bind("keyup",function(d){var e=d.keyCode;
if(!E.animating&&(e===39||e===37)){var c=(e===39)?E.getTarget("next"):(e===37)?E.getTarget("prev"):false;
E.flexAnimate(c,E.vars.pauseOnAction)
}})
}if(E.vars.mousewheel){E.bind("mousewheel",function(e,c,f,g){e.preventDefault();
var d=(c<0)?E.getTarget("next"):E.getTarget("prev");
E.flexAnimate(d,E.vars.pauseOnAction)
})
}if(E.vars.pausePlay){A.pausePlay.setup()
}if(E.vars.slideshow&&E.vars.pauseInvisible){A.pauseInvisible.init()
}if(E.vars.slideshow){if(E.vars.pauseOnHover){E.hover(function(){if(!E.manualPlay&&!E.manualPause){E.pause()
}},function(){if(!E.manualPause&&!E.manualPlay&&!E.stopped){E.play()
}})
}if(!E.vars.pauseInvisible||!A.pauseInvisible.isHidden()){(E.vars.initDelay>0)?E.startTimeout=setTimeout(E.play,E.vars.initDelay):E.play()
}}if(u){A.asNav.setup()
}if(w&&E.vars.touch){A.touch()
}if(!z||(z&&E.vars.smoothHeight)){b(window).bind("resize orientationchange focus",A.resize)
}E.find("img").attr("draggable","false");
setTimeout(function(){E.vars.start(E)
},200)
},asNav:{setup:function(){E.asNav=true;
E.animatingTo=Math.floor(E.currentSlide/E.move);
E.currentItem=E.currentSlide;
E.slides.removeClass(x+"active-slide").eq(E.currentItem).addClass(x+"active-slide");
if(!C){E.slides.on(D,function(d){d.preventDefault();
var e=b(this),f=e.index();
var c=e.offset().left-b(E).scrollLeft();
if(c<=0&&e.hasClass(x+"active-slide")){E.flexAnimate(E.getTarget("prev"),true)
}else{if(!b(E.vars.asNavFor).data("flexslider").animating&&!e.hasClass(x+"active-slide")){E.direction=(E.currentItem<f)?"next":"prev";
E.flexAnimate(f,E.vars.pauseOnAction,false,true,true)
}}})
}else{B._slider=E;
E.slides.each(function(){var c=this;
c._gesture=new MSGesture();
c._gesture.target=c;
c.addEventListener("MSPointerDown",function(d){d.preventDefault();
if(d.currentTarget._gesture){d.currentTarget._gesture.addPointer(d.pointerId)
}},false);
c.addEventListener("MSGestureTap",function(d){d.preventDefault();
var e=b(this),f=e.index();
if(!b(E.vars.asNavFor).data("flexslider").animating&&!e.hasClass("active")){E.direction=(E.currentItem<f)?"next":"prev";
E.flexAnimate(f,E.vars.pauseOnAction,false,true,true)
}})
})
}}},controlNav:{setup:function(){if(!E.manualControls){A.controlNav.setupPaging()
}else{A.controlNav.setupManual()
}},setupPaging:function(){var e=(E.vars.controlNav==="thumbnails")?"control-thumbs":"control-paging",g=1,d,h;
E.controlNavScaffold=b('<ol class="'+x+"control-nav "+x+e+'"></ol>');
if(E.pagingCount>1){for(var f=0;
f<E.pagingCount;
f++){h=E.slides.eq(f);
d=(E.vars.controlNav==="thumbnails")?'<img src="'+h.attr("data-thumb")+'"/>':"<a>"+g+"</a>";
if("thumbnails"===E.vars.controlNav&&true===E.vars.thumbCaptions){var c=h.attr("data-thumbcaption");
if(""!=c&&undefined!=c){d+='<span class="'+x+'caption">'+c+"</span>"
}}E.controlNavScaffold.append("<li>"+d+"</li>");
g++
}}(E.controlsContainer)?b(E.controlsContainer).append(E.controlNavScaffold):E.append(E.controlNavScaffold);
A.controlNav.set();
A.controlNav.active();
E.controlNavScaffold.delegate("a, img",D,function(i){i.preventDefault();
if(F===""||F===i.type){var j=b(this),k=E.controlNav.index(j);
if(!j.hasClass(x+"active")){E.direction=(k>E.currentSlide)?"next":"prev";
E.flexAnimate(k,E.vars.pauseOnAction)
}}if(F===""){F=i.type
}A.setToClearWatchedEvent()
})
},setupManual:function(){E.controlNav=E.manualControls;
A.controlNav.active();
E.controlNav.bind(D,function(e){e.preventDefault();
if(F===""||F===e.type){var c=b(this),d=E.controlNav.index(c);
if(!c.hasClass(x+"active")){(d>E.currentSlide)?E.direction="next":E.direction="prev";
E.flexAnimate(d,E.vars.pauseOnAction)
}}if(F===""){F=e.type
}A.setToClearWatchedEvent()
})
},set:function(){var c=(E.vars.controlNav==="thumbnails")?"img":"a";
E.controlNav=b("."+x+"control-nav li "+c,(E.controlsContainer)?E.controlsContainer:E)
},active:function(){E.controlNav.removeClass(x+"active").eq(E.animatingTo).addClass(x+"active")
},update:function(d,c){if(E.pagingCount>1&&d==="add"){E.controlNavScaffold.append(b("<li><a>"+E.count+"</a></li>"))
}else{if(E.pagingCount===1){E.controlNavScaffold.find("li").remove()
}else{E.controlNav.eq(c).closest("li").remove()
}}A.controlNav.set();
(E.pagingCount>1&&E.pagingCount!==E.controlNav.length)?E.update(c,d):A.controlNav.active()
}},directionNav:{setup:function(){var c=b('<ul class="'+x+'direction-nav"><li><a class="'+x+'prev" href="#">'+E.vars.prevText+'</a></li><li><a class="'+x+'next" href="#">'+E.vars.nextText+"</a></li></ul>");
if(E.controlsContainer){b(E.controlsContainer).append(c);
E.directionNav=b("."+x+"direction-nav li a",E.controlsContainer)
}else{E.append(c);
E.directionNav=b("."+x+"direction-nav li a",E)
}A.directionNav.update();
E.directionNav.bind(D,function(e){e.preventDefault();
var d;
if(F===""||F===e.type){d=(b(this).hasClass(x+"next"))?E.getTarget("next"):E.getTarget("prev");
E.flexAnimate(d,E.vars.pauseOnAction)
}if(F===""){F=e.type
}A.setToClearWatchedEvent()
})
},update:function(){var c=x+"disabled";
if(E.pagingCount===1){E.directionNav.addClass(c).attr("tabindex","-1")
}else{if(!E.vars.animationLoop){if(E.animatingTo===0){E.directionNav.removeClass(c).filter("."+x+"prev").addClass(c).attr("tabindex","-1")
}else{if(E.animatingTo===E.last){E.directionNav.removeClass(c).filter("."+x+"next").addClass(c).attr("tabindex","-1")
}else{E.directionNav.removeClass(c).removeAttr("tabindex")
}}}else{E.directionNav.removeClass(c).removeAttr("tabindex")
}}}},pausePlay:{setup:function(){var c=b('<div class="'+x+'pauseplay"><a></a></div>');
if(E.controlsContainer){E.controlsContainer.append(c);
E.pausePlay=b("."+x+"pauseplay a",E.controlsContainer)
}else{E.append(c);
E.pausePlay=b("."+x+"pauseplay a",E)
}A.pausePlay.update((E.vars.slideshow)?x+"pause":x+"play");
E.pausePlay.bind(D,function(d){d.preventDefault();
if(F===""||F===d.type){if(b(this).hasClass(x+"pause")){E.manualPause=true;
E.manualPlay=false;
E.pause()
}else{E.manualPause=false;
E.manualPlay=true;
E.play()
}}if(F===""){F=d.type
}A.setToClearWatchedEvent()
})
},update:function(c){(c==="play")?E.pausePlay.removeClass(x+"pause").addClass(x+"play").html(E.vars.playText):E.pausePlay.removeClass(x+"play").addClass(x+"pause").html(E.vars.pauseText)
}},touch:function(){var e,h,j,d,m,H,f=false,n=0,p=0,k=0;
if(!C){B.addEventListener("touchstart",i,false);
function i(G){if(E.animating){G.preventDefault()
}else{if((window.navigator.msPointerEnabled)||G.touches.length===1){E.pause();
d=(y)?E.h:E.w;
H=Number(new Date());
n=G.touches[0].pageX;
p=G.touches[0].pageY;
j=(s&&v&&E.animatingTo===E.last)?0:(s&&v)?E.limit-(((E.itemW+E.vars.itemMargin)*E.move)*E.animatingTo):(s&&E.currentSlide===E.last)?E.limit:(s)?((E.itemW+E.vars.itemMargin)*E.move)*E.currentSlide:(v)?(E.last-E.currentSlide+E.cloneOffset)*d:(E.currentSlide+E.cloneOffset)*d;
e=(y)?p:n;
h=(y)?n:p;
B.addEventListener("touchmove",q,false);
B.addEventListener("touchend",o,false)
}}}function q(J){n=J.touches[0].pageX;
p=J.touches[0].pageY;
m=(y)?e-p:e-n;
f=(y)?(Math.abs(m)<Math.abs(n-h)):(Math.abs(m)<Math.abs(p-h));
var G=500;
if(!f||Number(new Date())-H>G){J.preventDefault();
if(!z&&E.transitions){if(!E.vars.animationLoop){m=m/((E.currentSlide===0&&m<0||E.currentSlide===E.last&&m>0)?(Math.abs(m)/d+2):1)
}E.setProps(j+m,"setTouch")
}}}function o(G){B.removeEventListener("touchmove",q,false);
if(E.animatingTo===E.currentSlide&&!f&&!(m===null)){var K=(v)?-m:m,L=(K>0)?E.getTarget("next"):E.getTarget("prev");
if(E.canAdvance(L)&&(Number(new Date())-H<550&&Math.abs(K)>50||Math.abs(K)>d/2)){E.flexAnimate(L,E.vars.pauseOnAction)
}else{if(!z){E.flexAnimate(E.currentSlide,E.vars.pauseOnAction,true)
}}}B.removeEventListener("touchend",o,false);
e=null;
h=null;
m=null;
j=null
}}else{B.style.msTouchAction="none";
B._gesture=new MSGesture();
B._gesture.target=B;
B.addEventListener("MSPointerDown",c,false);
B._slider=E;
B.addEventListener("MSGestureChange",g,false);
B.addEventListener("MSGestureEnd",l,false);
function c(G){G.stopPropagation();
if(E.animating){G.preventDefault()
}else{E.pause();
B._gesture.addPointer(G.pointerId);
k=0;
d=(y)?E.h:E.w;
H=Number(new Date());
j=(s&&v&&E.animatingTo===E.last)?0:(s&&v)?E.limit-(((E.itemW+E.vars.itemMargin)*E.move)*E.animatingTo):(s&&E.currentSlide===E.last)?E.limit:(s)?((E.itemW+E.vars.itemMargin)*E.move)*E.currentSlide:(v)?(E.last-E.currentSlide+E.cloneOffset)*d:(E.currentSlide+E.cloneOffset)*d
}}function g(G){G.stopPropagation();
var L=G.target._slider;
if(!L){return
}var M=-G.translationX,N=-G.translationY;
k=k+((y)?N:M);
m=k;
f=(y)?(Math.abs(k)<Math.abs(-M)):(Math.abs(k)<Math.abs(-N));
if(G.detail===G.MSGESTURE_FLAG_INERTIA){setImmediate(function(){B._gesture.stop()
});
return
}if(!f||Number(new Date())-H>500){G.preventDefault();
if(!z&&L.transitions){if(!L.vars.animationLoop){m=k/((L.currentSlide===0&&k<0||L.currentSlide===L.last&&k>0)?(Math.abs(k)/d+2):1)
}L.setProps(j+m,"setTouch")
}}}function l(G){G.stopPropagation();
var N=G.target._slider;
if(!N){return
}if(N.animatingTo===N.currentSlide&&!f&&!(m===null)){var L=(v)?-m:m,M=(L>0)?N.getTarget("next"):N.getTarget("prev");
if(N.canAdvance(M)&&(Number(new Date())-H<550&&Math.abs(L)>50||Math.abs(L)>d/2)){N.flexAnimate(M,N.vars.pauseOnAction)
}else{if(!z){N.flexAnimate(N.currentSlide,N.vars.pauseOnAction,true)
}}}e=null;
h=null;
m=null;
j=null;
k=0
}}},resize:function(){if(!E.animating&&E.is(":visible")){if(!s){E.doMath()
}if(z){A.smoothHeight()
}else{if(s){E.slides.width(E.computedW);
E.update(E.pagingCount);
E.setProps()
}else{if(y){E.viewport.height(E.h);
E.setProps(E.h,"setTotal")
}else{if(E.vars.smoothHeight){A.smoothHeight()
}E.newSlides.width(E.computedW);
E.setProps(E.computedW,"setTotal")
}}}}},smoothHeight:function(d){if(!y||z){var c=(z)?E:E.viewport;
(d)?c.animate({height:E.slides.eq(E.animatingTo).height()},d):c.height(E.slides.eq(E.animatingTo).height())
}},sync:function(e){var c=b(E.vars.sync).data("flexslider"),d=E.animatingTo;
switch(e){case"animate":c.flexAnimate(d,E.vars.pauseOnAction,false,true);
break;
case"play":if(!c.playing&&!c.asNav){c.play()
}break;
case"pause":c.pause();
break
}},uniqueID:function(c){c.filter("[id]").add(c.find("[id]")).each(function(){var d=b(this);
d.attr("id",d.attr("id")+"_clone")
});
return c
},pauseInvisible:{visProp:null,init:function(){var c=["webkit","moz","ms","o"];
if("hidden" in document){return"hidden"
}for(var d=0;
d<c.length;
d++){if((c[d]+"Hidden") in document){A.pauseInvisible.visProp=c[d]+"Hidden"
}}if(A.pauseInvisible.visProp){var e=A.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";
document.addEventListener(e,function(){if(A.pauseInvisible.isHidden()){if(E.startTimeout){clearTimeout(E.startTimeout)
}else{E.pause()
}}else{if(E.started){E.play()
}else{(E.vars.initDelay>0)?setTimeout(E.play,E.vars.initDelay):E.play()
}}})
}},isHidden:function(){return document[A.pauseInvisible.visProp]||false
}},setToClearWatchedEvent:function(){clearTimeout(r);
r=setTimeout(function(){F=""
},3000)
}};
E.flexAnimate=function(e,d,k,i,h){if(!E.vars.animationLoop&&e!==E.currentSlide){E.direction=(e>E.currentSlide)?"next":"prev"
}if(u&&E.pagingCount===1){E.direction=(E.currentItem<e)?"next":"prev"
}if(!E.animating&&(E.canAdvance(e,h)||k)&&E.is(":visible")){if(u&&i){var l=b(E.vars.asNavFor).data("flexslider");
E.atEnd=e===0||e===E.count-1;
l.flexAnimate(e,true,false,true,h);
E.direction=(E.currentItem<e)?"next":"prev";
l.direction=E.direction;
if(Math.ceil((e+1)/E.visible)-1!==E.currentSlide&&e!==0){E.currentItem=e;
E.slides.removeClass(x+"active-slide").eq(e).addClass(x+"active-slide");
e=Math.floor(e/E.visible)
}else{E.currentItem=e;
E.slides.removeClass(x+"active-slide").eq(e).addClass(x+"active-slide");
return false
}}E.animating=true;
E.animatingTo=e;
if(d){E.pause()
}E.vars.before(E);
if(E.syncExists&&!h){A.sync("animate")
}if(E.vars.controlNav){A.controlNav.active()
}if(!s){E.slides.removeClass(x+"active-slide").eq(e).addClass(x+"active-slide")
}E.atEnd=e===0||e===E.last;
if(E.vars.directionNav){A.directionNav.update()
}if(e===E.last){E.vars.end(E);
if(!E.vars.animationLoop){E.pause()
}}if(!z){var f=(y)?E.slides.filter(":first").height():E.computedW,g,j,c;
if(s){g=E.vars.itemMargin;
c=((E.itemW+g)*E.move)*E.animatingTo;
j=(c>E.limit&&E.visible!==1)?E.limit:c
}else{if(E.currentSlide===0&&e===E.count-1&&E.vars.animationLoop&&E.direction!=="next"){j=(v)?(E.count+E.cloneOffset)*f:0
}else{if(E.currentSlide===E.last&&e===0&&E.vars.animationLoop&&E.direction!=="prev"){j=(v)?0:(E.count+1)*f
}else{j=(v)?((E.count-1)-e+E.cloneOffset)*f:(e+E.cloneOffset)*f
}}}E.setProps(j,"",E.vars.animationSpeed);
if(E.transitions){if(!E.vars.animationLoop||!E.atEnd){E.animating=false;
E.currentSlide=E.animatingTo
}E.container.unbind("webkitTransitionEnd transitionend");
E.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(E.ensureAnimationEnd);
E.wrapup(f)
});
clearTimeout(E.ensureAnimationEnd);
E.ensureAnimationEnd=setTimeout(function(){E.wrapup(f)
},E.vars.animationSpeed+100)
}else{E.container.animate(E.args,E.vars.animationSpeed,E.vars.easing,function(){E.wrapup(f)
})
}}else{if(!w){E.slides.eq(E.currentSlide).css({zIndex:1}).animate({opacity:0},E.vars.animationSpeed,E.vars.easing);
E.slides.eq(e).css({zIndex:2}).animate({opacity:1},E.vars.animationSpeed,E.vars.easing,E.wrapup)
}else{E.slides.eq(E.currentSlide).css({opacity:0,zIndex:1});
E.slides.eq(e).css({opacity:1,zIndex:2});
E.wrapup(f)
}}if(E.vars.smoothHeight){A.smoothHeight(E.vars.animationSpeed)
}}};
E.wrapup=function(c){if(!z&&!s){if(E.currentSlide===0&&E.animatingTo===E.last&&E.vars.animationLoop){E.setProps(c,"jumpEnd")
}else{if(E.currentSlide===E.last&&E.animatingTo===0&&E.vars.animationLoop){E.setProps(c,"jumpStart")
}}}E.animating=false;
E.currentSlide=E.animatingTo;
E.vars.after(E)
};
E.animateSlides=function(){if(!E.animating&&t){E.flexAnimate(E.getTarget("next"))
}};
E.pause=function(){clearInterval(E.animatedSlides);
E.animatedSlides=null;
E.playing=false;
if(E.vars.pausePlay){A.pausePlay.update("play")
}if(E.syncExists){A.sync("pause")
}};
E.play=function(){if(E.playing){clearInterval(E.animatedSlides)
}E.animatedSlides=E.animatedSlides||setInterval(E.animateSlides,E.vars.slideshowSpeed);
E.started=E.playing=true;
if(E.vars.pausePlay){A.pausePlay.update("pause")
}if(E.syncExists){A.sync("play")
}};
E.stop=function(){E.pause();
E.stopped=true
};
E.canAdvance=function(c,e){var d=(u)?E.pagingCount-1:E.last;
return(e)?true:(u&&E.currentItem===E.count-1&&c===0&&E.direction==="prev")?true:(u&&E.currentItem===0&&c===E.pagingCount-1&&E.direction!=="next")?false:(c===E.currentSlide&&!u)?false:(E.vars.animationLoop)?true:(E.atEnd&&E.currentSlide===0&&c===d&&E.direction!=="next")?false:(E.atEnd&&E.currentSlide===d&&c===0&&E.direction==="next")?false:true
};
E.getTarget=function(c){E.direction=c;
if(c==="next"){return(E.currentSlide===E.last)?0:E.currentSlide+1
}else{return(E.currentSlide===0)?E.last:E.currentSlide-1
}};
E.setProps=function(c,f,e){var d=(function(){var h=(c)?c:((E.itemW+E.vars.itemMargin)*E.move)*E.animatingTo,g=(function(){if(s){return(f==="setTouch")?c:(v&&E.animatingTo===E.last)?0:(v)?E.limit-(((E.itemW+E.vars.itemMargin)*E.move)*E.animatingTo):(E.animatingTo===E.last)?E.limit:h
}else{switch(f){case"setTotal":return(v)?((E.count-1)-E.currentSlide+E.cloneOffset)*c:(E.currentSlide+E.cloneOffset)*c;
case"setTouch":return(v)?c:c;
case"jumpEnd":return(v)?c:E.count*c;
case"jumpStart":return(v)?E.count*c:c;
default:return c
}}}());
return(g*-1)+"px"
}());
if(E.transitions){d=(y)?"translate3d(0,"+d+",0)":"translate3d("+d+",0,0)";
e=(e!==undefined)?(e/1000)+"s":"0s";
E.container.css("-"+E.pfx+"-transition-duration",e);
E.container.css("transition-duration",e)
}E.args[E.prop]=d;
if(E.transitions||e===undefined){E.container.css(E.args)
}E.container.css("transform",d)
};
E.setup=function(d){if(!z){var c,e;
if(d==="init"){E.viewport=b('<div class="'+x+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(E).append(E.container);
E.cloneCount=0;
E.cloneOffset=0;
if(v){e=b.makeArray(E.slides).reverse();
E.slides=b(e);
E.container.empty().append(E.slides)
}}if(E.vars.animationLoop&&!s){E.cloneCount=2;
E.cloneOffset=1;
if(d!=="init"){E.container.find(".clone").remove()
}E.container.append(A.uniqueID(E.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(A.uniqueID(E.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))
}E.newSlides=b(E.vars.selector,E);
c=(v)?E.count-1-E.currentSlide+E.cloneOffset:E.currentSlide+E.cloneOffset;
if(y&&!s){E.container.height((E.count+E.cloneCount)*200+"%").css("position","absolute").width("100%");
setTimeout(function(){E.newSlides.css({display:"block"});
E.doMath();
E.viewport.height(E.h);
E.setProps(c*E.h,"init")
},(d==="init")?100:0)
}else{E.container.width((E.count+E.cloneCount)*200+"%");
E.setProps(c*E.computedW,"init");
setTimeout(function(){E.doMath();
E.newSlides.css({width:E.computedW,"float":"left",display:"block"});
if(E.vars.smoothHeight){A.smoothHeight()
}},(d==="init")?100:0)
}}else{E.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});
if(d==="init"){if(!w){if(E.vars.fadeFirstSlide==false){E.slides.css({opacity:0,display:"block",zIndex:1}).eq(E.currentSlide).css({zIndex:2}).css({opacity:1})
}else{E.slides.css({opacity:0,display:"block",zIndex:1}).eq(E.currentSlide).css({zIndex:2}).animate({opacity:1},E.vars.animationSpeed,E.vars.easing)
}}else{E.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+E.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(E.currentSlide).css({opacity:1,zIndex:2})
}}if(E.vars.smoothHeight){A.smoothHeight()
}}if(!s){E.slides.removeClass(x+"active-slide").eq(E.currentSlide).addClass(x+"active-slide")
}E.vars.init(E)
};
E.doMath=function(){var f=E.slides.first(),c=E.vars.itemMargin,e=E.vars.minItems,d=E.vars.maxItems;
E.w=(E.viewport===undefined)?E.width():E.viewport.width();
E.h=f.height();
E.boxPadding=f.outerWidth()-f.width();
if(s){E.itemT=E.vars.itemWidth+c;
E.minW=(e)?e*E.itemT:E.w;
E.maxW=(d)?(d*E.itemT)-c:E.w;
E.itemW=(E.minW>E.w)?(E.w-(c*(e-1)))/e:(E.maxW<E.w)?(E.w-(c*(d-1)))/d:(E.vars.itemWidth>E.w)?E.w:E.vars.itemWidth;
E.visible=Math.floor(E.w/(E.itemW));
E.move=(E.vars.move>0&&E.vars.move<E.visible)?E.vars.move:E.visible;
E.pagingCount=Math.ceil(((E.count-E.visible)/E.move)+1);
E.last=E.pagingCount-1;
E.limit=(E.pagingCount===1)?0:(E.vars.itemWidth>E.w)?(E.itemW*(E.count-1))+(c*(E.count-1)):((E.itemW+c)*E.count)-E.w-c
}else{E.itemW=E.w;
E.pagingCount=E.count;
E.last=E.count-1
}E.computedW=E.itemW-E.boxPadding
};
E.update=function(c,d){E.doMath();
if(!s){if(c<E.currentSlide){E.currentSlide+=1
}else{if(c<=E.currentSlide&&c!==0){E.currentSlide-=1
}}E.animatingTo=E.currentSlide
}if(E.vars.controlNav&&!E.manualControls){if((d==="add"&&!s)||E.pagingCount>E.controlNav.length){A.controlNav.update("add")
}else{if((d==="remove"&&!s)||E.pagingCount<E.controlNav.length){if(s&&E.currentSlide>E.last){E.currentSlide-=1;
E.animatingTo-=1
}A.controlNav.update("remove",E.last)
}}}if(E.vars.directionNav){A.directionNav.update()
}};
E.addSlide=function(e,c){var d=b(e);
E.count+=1;
E.last=E.count-1;
if(y&&v){(c!==undefined)?E.slides.eq(E.count-c).after(d):E.container.prepend(d)
}else{(c!==undefined)?E.slides.eq(c).before(d):E.container.append(d)
}E.update(c,"add");
E.slides=b(E.vars.selector+":not(.clone)",E);
E.setup();
E.vars.added(E)
};
E.removeSlide=function(d){var c=(isNaN(d))?E.slides.index(b(d)):d;
E.count-=1;
E.last=E.count-1;
if(isNaN(d)){b(d,E.slides).remove()
}else{(y&&v)?E.slides.eq(E.last).remove():E.slides.eq(d).remove()
}E.doMath();
E.update(c,"remove");
E.slides=b(E.vars.selector+":not(.clone)",E);
E.setup();
E.vars.removed(E)
};
A.init()
};
b(window).blur(function(a){focused=false
}).focus(function(a){focused=true
});
b.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,fadeFirstSlide:true,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};
b.fn.flexslider=function(a){if(a===undefined){a={}
}if(typeof a==="object"){return this.each(function(){var c=b(this),h=(a.selector)?a.selector:".slides > li",g=c.find(h);
if((g.length===1&&a.allowOneSlide===true)||g.length===0){g.fadeIn(400);
if(a.start){a.start(c)
}}else{if(c.data("flexslider")===undefined){new b.flexslider(this,a)
}}})
}else{var d=b(this).data("flexslider");
switch(a){case"play":d.play();
break;
case"pause":d.pause();
break;
case"stop":d.stop();
break;
case"next":d.flexAnimate(d.getTarget("next"),true);
break;
case"prev":case"previous":d.flexAnimate(d.getTarget("prev"),true);
break;
default:if(typeof a==="number"){d.flexAnimate(a,true)
}}}}
})(jQuery);
/*!
 * jQuery flexslider extension
 * Original author: @markirby
 * Licensed under the MIT license
 */
(function(m,n,h,k){var j="flexsliderManualDirectionControls",l={previousElementSelector:".previous",nextElementSelector:".next",disabledStateClassName:"disable"};
function i(a,b){this.element=a;
this.options=m.extend({},l,b);
this._flexslider=m(a).data("flexslider");
this._originalFlexsliderWrapupFunction=this._flexslider.wrapup;
this._defaults=l;
this._name=j;
this.init()
}i.prototype.init=function(){this.addEventListeners();
var a=this;
this._flexslider.wrapup=function(b){a.onAnimationEnd.call(a,b)
}
};
i.prototype.addEventListeners=function(){m(this.element).find(this.options.previousElementSelector).bind("touchstart.flexsliderPromo click.flexsliderPromo",{self:this},function(a){a.stopPropagation();
a.preventDefault();
if(!a.handled){a.data.self.goToTargetInDirection("prev");
a.handled=true
}});
m(this.element).find(this.options.nextElementSelector).bind("click.flexsliderPromo",{self:this},function(a){a.stopPropagation();
a.preventDefault();
if(!a.handled){a.data.self.goToTargetInDirection("next");
a.handled=true
}})
};
i.prototype.goToTargetInDirection=function(a){var b=this._flexslider.getTarget(a);
if(this._flexslider.canAdvance(b)){this._flexslider.flexAnimate(b)
}return false
};
i.prototype.addOrRemoveDisabledStateForDirection=function(a,c){var b=this._flexslider.getTarget(a);
if(!this._flexslider.canAdvance(b)){c.addClass(this.options.disabledStateClassName)
}else{c.removeClass(this.options.disabledStateClassName)
}};
i.prototype.onAnimationEnd=function(a){var c=m(this.element).find(this.options.nextElementSelector),b=m(this.element).find(this.options.previousElementSelector);
this.addOrRemoveDisabledStateForDirection("next",c);
this.addOrRemoveDisabledStateForDirection("prev",b);
this._originalFlexsliderWrapupFunction(a)
};
m.fn[j]=function(a){return this.each(function(){if(!m.data(this,"plugin_"+j)){m.data(this,"plugin_"+j,new i(this,a))
}})
}
})(jQuery,window,document);