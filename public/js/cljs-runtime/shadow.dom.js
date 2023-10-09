goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19595 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19595(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19596 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19596(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18470 = coll;
var G__18471 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18470,G__18471) : shadow.dom.lazy_native_coll_seq.call(null,G__18470,G__18471));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18636 = arguments.length;
switch (G__18636) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18669 = arguments.length;
switch (G__18669) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18690 = arguments.length;
switch (G__18690) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18734 = arguments.length;
switch (G__18734) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18779 = arguments.length;
switch (G__18779) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18798 = arguments.length;
switch (G__18798) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18827){if((e18827 instanceof Object)){
var e = e18827;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18827;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18832 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18833 = null;
var count__18834 = (0);
var i__18835 = (0);
while(true){
if((i__18835 < count__18834)){
var el = chunk__18833.cljs$core$IIndexed$_nth$arity$2(null,i__18835);
var handler_19603__$1 = ((function (seq__18832,chunk__18833,count__18834,i__18835,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18832,chunk__18833,count__18834,i__18835,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19603__$1);


var G__19604 = seq__18832;
var G__19605 = chunk__18833;
var G__19606 = count__18834;
var G__19607 = (i__18835 + (1));
seq__18832 = G__19604;
chunk__18833 = G__19605;
count__18834 = G__19606;
i__18835 = G__19607;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18832);
if(temp__5804__auto__){
var seq__18832__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18832__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18832__$1);
var G__19608 = cljs.core.chunk_rest(seq__18832__$1);
var G__19609 = c__5568__auto__;
var G__19610 = cljs.core.count(c__5568__auto__);
var G__19611 = (0);
seq__18832 = G__19608;
chunk__18833 = G__19609;
count__18834 = G__19610;
i__18835 = G__19611;
continue;
} else {
var el = cljs.core.first(seq__18832__$1);
var handler_19612__$1 = ((function (seq__18832,chunk__18833,count__18834,i__18835,el,seq__18832__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18832,chunk__18833,count__18834,i__18835,el,seq__18832__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19612__$1);


var G__19613 = cljs.core.next(seq__18832__$1);
var G__19614 = null;
var G__19615 = (0);
var G__19616 = (0);
seq__18832 = G__19613;
chunk__18833 = G__19614;
count__18834 = G__19615;
i__18835 = G__19616;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18881 = arguments.length;
switch (G__18881) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18914 = cljs.core.seq(events);
var chunk__18915 = null;
var count__18916 = (0);
var i__18917 = (0);
while(true){
if((i__18917 < count__18916)){
var vec__18941 = chunk__18915.cljs$core$IIndexed$_nth$arity$2(null,i__18917);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18941,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18941,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19618 = seq__18914;
var G__19619 = chunk__18915;
var G__19620 = count__18916;
var G__19621 = (i__18917 + (1));
seq__18914 = G__19618;
chunk__18915 = G__19619;
count__18916 = G__19620;
i__18917 = G__19621;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18914);
if(temp__5804__auto__){
var seq__18914__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18914__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18914__$1);
var G__19622 = cljs.core.chunk_rest(seq__18914__$1);
var G__19623 = c__5568__auto__;
var G__19624 = cljs.core.count(c__5568__auto__);
var G__19625 = (0);
seq__18914 = G__19622;
chunk__18915 = G__19623;
count__18916 = G__19624;
i__18917 = G__19625;
continue;
} else {
var vec__18950 = cljs.core.first(seq__18914__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18950,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18950,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19626 = cljs.core.next(seq__18914__$1);
var G__19627 = null;
var G__19628 = (0);
var G__19629 = (0);
seq__18914 = G__19626;
chunk__18915 = G__19627;
count__18916 = G__19628;
i__18917 = G__19629;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18956 = cljs.core.seq(styles);
var chunk__18957 = null;
var count__18958 = (0);
var i__18959 = (0);
while(true){
if((i__18959 < count__18958)){
var vec__18985 = chunk__18957.cljs$core$IIndexed$_nth$arity$2(null,i__18959);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18985,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18985,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19630 = seq__18956;
var G__19631 = chunk__18957;
var G__19632 = count__18958;
var G__19633 = (i__18959 + (1));
seq__18956 = G__19630;
chunk__18957 = G__19631;
count__18958 = G__19632;
i__18959 = G__19633;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18956);
if(temp__5804__auto__){
var seq__18956__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18956__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18956__$1);
var G__19634 = cljs.core.chunk_rest(seq__18956__$1);
var G__19635 = c__5568__auto__;
var G__19636 = cljs.core.count(c__5568__auto__);
var G__19637 = (0);
seq__18956 = G__19634;
chunk__18957 = G__19635;
count__18958 = G__19636;
i__18959 = G__19637;
continue;
} else {
var vec__18990 = cljs.core.first(seq__18956__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18990,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19638 = cljs.core.next(seq__18956__$1);
var G__19639 = null;
var G__19640 = (0);
var G__19641 = (0);
seq__18956 = G__19638;
chunk__18957 = G__19639;
count__18958 = G__19640;
i__18959 = G__19641;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__19010_19642 = key;
var G__19010_19643__$1 = (((G__19010_19642 instanceof cljs.core.Keyword))?G__19010_19642.fqn:null);
switch (G__19010_19643__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19645 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19645,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19645,"aria-");
}
})())){
el.setAttribute(ks_19645,value);
} else {
(el[ks_19645] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19110){
var map__19111 = p__19110;
var map__19111__$1 = cljs.core.__destructure_map(map__19111);
var props = map__19111__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19111__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19115 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19115,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19115,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19115,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19123 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19123,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19123;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19137 = arguments.length;
switch (G__19137) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19158){
var vec__19161 = p__19158;
var seq__19162 = cljs.core.seq(vec__19161);
var first__19163 = cljs.core.first(seq__19162);
var seq__19162__$1 = cljs.core.next(seq__19162);
var nn = first__19163;
var first__19163__$1 = cljs.core.first(seq__19162__$1);
var seq__19162__$2 = cljs.core.next(seq__19162__$1);
var np = first__19163__$1;
var nc = seq__19162__$2;
var node = vec__19161;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19168 = nn;
var G__19169 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19168,G__19169) : create_fn.call(null,G__19168,G__19169));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19173 = nn;
var G__19174 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19173,G__19174) : create_fn.call(null,G__19173,G__19174));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19179 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19179,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19179,(1),null);
var seq__19184_19649 = cljs.core.seq(node_children);
var chunk__19185_19650 = null;
var count__19186_19651 = (0);
var i__19187_19652 = (0);
while(true){
if((i__19187_19652 < count__19186_19651)){
var child_struct_19653 = chunk__19185_19650.cljs$core$IIndexed$_nth$arity$2(null,i__19187_19652);
var children_19654 = shadow.dom.dom_node(child_struct_19653);
if(cljs.core.seq_QMARK_(children_19654)){
var seq__19265_19656 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19654));
var chunk__19267_19657 = null;
var count__19268_19658 = (0);
var i__19269_19659 = (0);
while(true){
if((i__19269_19659 < count__19268_19658)){
var child_19660 = chunk__19267_19657.cljs$core$IIndexed$_nth$arity$2(null,i__19269_19659);
if(cljs.core.truth_(child_19660)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19660);


var G__19661 = seq__19265_19656;
var G__19662 = chunk__19267_19657;
var G__19663 = count__19268_19658;
var G__19664 = (i__19269_19659 + (1));
seq__19265_19656 = G__19661;
chunk__19267_19657 = G__19662;
count__19268_19658 = G__19663;
i__19269_19659 = G__19664;
continue;
} else {
var G__19665 = seq__19265_19656;
var G__19666 = chunk__19267_19657;
var G__19667 = count__19268_19658;
var G__19668 = (i__19269_19659 + (1));
seq__19265_19656 = G__19665;
chunk__19267_19657 = G__19666;
count__19268_19658 = G__19667;
i__19269_19659 = G__19668;
continue;
}
} else {
var temp__5804__auto___19669 = cljs.core.seq(seq__19265_19656);
if(temp__5804__auto___19669){
var seq__19265_19670__$1 = temp__5804__auto___19669;
if(cljs.core.chunked_seq_QMARK_(seq__19265_19670__$1)){
var c__5568__auto___19671 = cljs.core.chunk_first(seq__19265_19670__$1);
var G__19672 = cljs.core.chunk_rest(seq__19265_19670__$1);
var G__19673 = c__5568__auto___19671;
var G__19674 = cljs.core.count(c__5568__auto___19671);
var G__19675 = (0);
seq__19265_19656 = G__19672;
chunk__19267_19657 = G__19673;
count__19268_19658 = G__19674;
i__19269_19659 = G__19675;
continue;
} else {
var child_19677 = cljs.core.first(seq__19265_19670__$1);
if(cljs.core.truth_(child_19677)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19677);


var G__19678 = cljs.core.next(seq__19265_19670__$1);
var G__19679 = null;
var G__19680 = (0);
var G__19681 = (0);
seq__19265_19656 = G__19678;
chunk__19267_19657 = G__19679;
count__19268_19658 = G__19680;
i__19269_19659 = G__19681;
continue;
} else {
var G__19682 = cljs.core.next(seq__19265_19670__$1);
var G__19683 = null;
var G__19684 = (0);
var G__19685 = (0);
seq__19265_19656 = G__19682;
chunk__19267_19657 = G__19683;
count__19268_19658 = G__19684;
i__19269_19659 = G__19685;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19654);
}


var G__19686 = seq__19184_19649;
var G__19687 = chunk__19185_19650;
var G__19688 = count__19186_19651;
var G__19689 = (i__19187_19652 + (1));
seq__19184_19649 = G__19686;
chunk__19185_19650 = G__19687;
count__19186_19651 = G__19688;
i__19187_19652 = G__19689;
continue;
} else {
var temp__5804__auto___19690 = cljs.core.seq(seq__19184_19649);
if(temp__5804__auto___19690){
var seq__19184_19691__$1 = temp__5804__auto___19690;
if(cljs.core.chunked_seq_QMARK_(seq__19184_19691__$1)){
var c__5568__auto___19692 = cljs.core.chunk_first(seq__19184_19691__$1);
var G__19694 = cljs.core.chunk_rest(seq__19184_19691__$1);
var G__19695 = c__5568__auto___19692;
var G__19696 = cljs.core.count(c__5568__auto___19692);
var G__19697 = (0);
seq__19184_19649 = G__19694;
chunk__19185_19650 = G__19695;
count__19186_19651 = G__19696;
i__19187_19652 = G__19697;
continue;
} else {
var child_struct_19698 = cljs.core.first(seq__19184_19691__$1);
var children_19699 = shadow.dom.dom_node(child_struct_19698);
if(cljs.core.seq_QMARK_(children_19699)){
var seq__19291_19700 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19699));
var chunk__19293_19701 = null;
var count__19294_19702 = (0);
var i__19295_19703 = (0);
while(true){
if((i__19295_19703 < count__19294_19702)){
var child_19704 = chunk__19293_19701.cljs$core$IIndexed$_nth$arity$2(null,i__19295_19703);
if(cljs.core.truth_(child_19704)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19704);


var G__19705 = seq__19291_19700;
var G__19706 = chunk__19293_19701;
var G__19707 = count__19294_19702;
var G__19708 = (i__19295_19703 + (1));
seq__19291_19700 = G__19705;
chunk__19293_19701 = G__19706;
count__19294_19702 = G__19707;
i__19295_19703 = G__19708;
continue;
} else {
var G__19709 = seq__19291_19700;
var G__19710 = chunk__19293_19701;
var G__19711 = count__19294_19702;
var G__19712 = (i__19295_19703 + (1));
seq__19291_19700 = G__19709;
chunk__19293_19701 = G__19710;
count__19294_19702 = G__19711;
i__19295_19703 = G__19712;
continue;
}
} else {
var temp__5804__auto___19713__$1 = cljs.core.seq(seq__19291_19700);
if(temp__5804__auto___19713__$1){
var seq__19291_19714__$1 = temp__5804__auto___19713__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19291_19714__$1)){
var c__5568__auto___19715 = cljs.core.chunk_first(seq__19291_19714__$1);
var G__19716 = cljs.core.chunk_rest(seq__19291_19714__$1);
var G__19717 = c__5568__auto___19715;
var G__19718 = cljs.core.count(c__5568__auto___19715);
var G__19719 = (0);
seq__19291_19700 = G__19716;
chunk__19293_19701 = G__19717;
count__19294_19702 = G__19718;
i__19295_19703 = G__19719;
continue;
} else {
var child_19720 = cljs.core.first(seq__19291_19714__$1);
if(cljs.core.truth_(child_19720)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19720);


var G__19721 = cljs.core.next(seq__19291_19714__$1);
var G__19722 = null;
var G__19723 = (0);
var G__19724 = (0);
seq__19291_19700 = G__19721;
chunk__19293_19701 = G__19722;
count__19294_19702 = G__19723;
i__19295_19703 = G__19724;
continue;
} else {
var G__19725 = cljs.core.next(seq__19291_19714__$1);
var G__19726 = null;
var G__19727 = (0);
var G__19728 = (0);
seq__19291_19700 = G__19725;
chunk__19293_19701 = G__19726;
count__19294_19702 = G__19727;
i__19295_19703 = G__19728;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19699);
}


var G__19729 = cljs.core.next(seq__19184_19691__$1);
var G__19730 = null;
var G__19731 = (0);
var G__19732 = (0);
seq__19184_19649 = G__19729;
chunk__19185_19650 = G__19730;
count__19186_19651 = G__19731;
i__19187_19652 = G__19732;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__19344 = cljs.core.seq(node);
var chunk__19346 = null;
var count__19347 = (0);
var i__19348 = (0);
while(true){
if((i__19348 < count__19347)){
var n = chunk__19346.cljs$core$IIndexed$_nth$arity$2(null,i__19348);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19734 = seq__19344;
var G__19735 = chunk__19346;
var G__19736 = count__19347;
var G__19737 = (i__19348 + (1));
seq__19344 = G__19734;
chunk__19346 = G__19735;
count__19347 = G__19736;
i__19348 = G__19737;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19344);
if(temp__5804__auto__){
var seq__19344__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19344__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19344__$1);
var G__19738 = cljs.core.chunk_rest(seq__19344__$1);
var G__19739 = c__5568__auto__;
var G__19740 = cljs.core.count(c__5568__auto__);
var G__19741 = (0);
seq__19344 = G__19738;
chunk__19346 = G__19739;
count__19347 = G__19740;
i__19348 = G__19741;
continue;
} else {
var n = cljs.core.first(seq__19344__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19742 = cljs.core.next(seq__19344__$1);
var G__19743 = null;
var G__19744 = (0);
var G__19745 = (0);
seq__19344 = G__19742;
chunk__19346 = G__19743;
count__19347 = G__19744;
i__19348 = G__19745;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__19368 = arguments.length;
switch (G__19368) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__19379 = arguments.length;
switch (G__19379) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__19401 = arguments.length;
switch (G__19401) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19754 = arguments.length;
var i__5770__auto___19755 = (0);
while(true){
if((i__5770__auto___19755 < len__5769__auto___19754)){
args__5775__auto__.push((arguments[i__5770__auto___19755]));

var G__19756 = (i__5770__auto___19755 + (1));
i__5770__auto___19755 = G__19756;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__19427_19757 = cljs.core.seq(nodes);
var chunk__19428_19758 = null;
var count__19429_19759 = (0);
var i__19430_19760 = (0);
while(true){
if((i__19430_19760 < count__19429_19759)){
var node_19762 = chunk__19428_19758.cljs$core$IIndexed$_nth$arity$2(null,i__19430_19760);
fragment.appendChild(shadow.dom._to_dom(node_19762));


var G__19763 = seq__19427_19757;
var G__19764 = chunk__19428_19758;
var G__19765 = count__19429_19759;
var G__19766 = (i__19430_19760 + (1));
seq__19427_19757 = G__19763;
chunk__19428_19758 = G__19764;
count__19429_19759 = G__19765;
i__19430_19760 = G__19766;
continue;
} else {
var temp__5804__auto___19768 = cljs.core.seq(seq__19427_19757);
if(temp__5804__auto___19768){
var seq__19427_19769__$1 = temp__5804__auto___19768;
if(cljs.core.chunked_seq_QMARK_(seq__19427_19769__$1)){
var c__5568__auto___19770 = cljs.core.chunk_first(seq__19427_19769__$1);
var G__19772 = cljs.core.chunk_rest(seq__19427_19769__$1);
var G__19773 = c__5568__auto___19770;
var G__19774 = cljs.core.count(c__5568__auto___19770);
var G__19775 = (0);
seq__19427_19757 = G__19772;
chunk__19428_19758 = G__19773;
count__19429_19759 = G__19774;
i__19430_19760 = G__19775;
continue;
} else {
var node_19776 = cljs.core.first(seq__19427_19769__$1);
fragment.appendChild(shadow.dom._to_dom(node_19776));


var G__19777 = cljs.core.next(seq__19427_19769__$1);
var G__19778 = null;
var G__19779 = (0);
var G__19780 = (0);
seq__19427_19757 = G__19777;
chunk__19428_19758 = G__19778;
count__19429_19759 = G__19779;
i__19430_19760 = G__19780;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq19426){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19426));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__19433_19781 = cljs.core.seq(scripts);
var chunk__19434_19782 = null;
var count__19435_19783 = (0);
var i__19436_19784 = (0);
while(true){
if((i__19436_19784 < count__19435_19783)){
var vec__19451_19785 = chunk__19434_19782.cljs$core$IIndexed$_nth$arity$2(null,i__19436_19784);
var script_tag_19786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19451_19785,(0),null);
var script_body_19787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19451_19785,(1),null);
eval(script_body_19787);


var G__19788 = seq__19433_19781;
var G__19789 = chunk__19434_19782;
var G__19790 = count__19435_19783;
var G__19791 = (i__19436_19784 + (1));
seq__19433_19781 = G__19788;
chunk__19434_19782 = G__19789;
count__19435_19783 = G__19790;
i__19436_19784 = G__19791;
continue;
} else {
var temp__5804__auto___19792 = cljs.core.seq(seq__19433_19781);
if(temp__5804__auto___19792){
var seq__19433_19793__$1 = temp__5804__auto___19792;
if(cljs.core.chunked_seq_QMARK_(seq__19433_19793__$1)){
var c__5568__auto___19794 = cljs.core.chunk_first(seq__19433_19793__$1);
var G__19795 = cljs.core.chunk_rest(seq__19433_19793__$1);
var G__19796 = c__5568__auto___19794;
var G__19797 = cljs.core.count(c__5568__auto___19794);
var G__19798 = (0);
seq__19433_19781 = G__19795;
chunk__19434_19782 = G__19796;
count__19435_19783 = G__19797;
i__19436_19784 = G__19798;
continue;
} else {
var vec__19454_19799 = cljs.core.first(seq__19433_19793__$1);
var script_tag_19800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19454_19799,(0),null);
var script_body_19801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19454_19799,(1),null);
eval(script_body_19801);


var G__19802 = cljs.core.next(seq__19433_19793__$1);
var G__19803 = null;
var G__19804 = (0);
var G__19805 = (0);
seq__19433_19781 = G__19802;
chunk__19434_19782 = G__19803;
count__19435_19783 = G__19804;
i__19436_19784 = G__19805;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__19462){
var vec__19467 = p__19462;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19467,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19467,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__19476 = arguments.length;
switch (G__19476) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__19482 = cljs.core.seq(style_keys);
var chunk__19483 = null;
var count__19484 = (0);
var i__19485 = (0);
while(true){
if((i__19485 < count__19484)){
var it = chunk__19483.cljs$core$IIndexed$_nth$arity$2(null,i__19485);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19810 = seq__19482;
var G__19811 = chunk__19483;
var G__19812 = count__19484;
var G__19813 = (i__19485 + (1));
seq__19482 = G__19810;
chunk__19483 = G__19811;
count__19484 = G__19812;
i__19485 = G__19813;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19482);
if(temp__5804__auto__){
var seq__19482__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19482__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19482__$1);
var G__19814 = cljs.core.chunk_rest(seq__19482__$1);
var G__19815 = c__5568__auto__;
var G__19816 = cljs.core.count(c__5568__auto__);
var G__19817 = (0);
seq__19482 = G__19814;
chunk__19483 = G__19815;
count__19484 = G__19816;
i__19485 = G__19817;
continue;
} else {
var it = cljs.core.first(seq__19482__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19818 = cljs.core.next(seq__19482__$1);
var G__19819 = null;
var G__19820 = (0);
var G__19821 = (0);
seq__19482 = G__19818;
chunk__19483 = G__19819;
count__19484 = G__19820;
i__19485 = G__19821;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19487,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19491 = k19487;
var G__19491__$1 = (((G__19491 instanceof cljs.core.Keyword))?G__19491.fqn:null);
switch (G__19491__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19487,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19492){
var vec__19493 = p__19492;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19493,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19493,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19486){
var self__ = this;
var G__19486__$1 = this;
return (new cljs.core.RecordIter((0),G__19486__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19488,other19489){
var self__ = this;
var this19488__$1 = this;
return (((!((other19489 == null)))) && ((((this19488__$1.constructor === other19489.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19488__$1.x,other19489.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19488__$1.y,other19489.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19488__$1.__extmap,other19489.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19487){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19496 = k19487;
var G__19496__$1 = (((G__19496 instanceof cljs.core.Keyword))?G__19496.fqn:null);
switch (G__19496__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19487);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19486){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19497 = cljs.core.keyword_identical_QMARK_;
var expr__19498 = k__5352__auto__;
if(cljs.core.truth_((pred__19497.cljs$core$IFn$_invoke$arity$2 ? pred__19497.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__19498) : pred__19497.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__19498)))){
return (new shadow.dom.Coordinate(G__19486,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19497.cljs$core$IFn$_invoke$arity$2 ? pred__19497.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__19498) : pred__19497.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__19498)))){
return (new shadow.dom.Coordinate(self__.x,G__19486,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19486),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19486){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19486,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19490){
var extmap__5385__auto__ = (function (){var G__19500 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19490,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19490)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19500);
} else {
return G__19500;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19490),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19490),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19502,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19506 = k19502;
var G__19506__$1 = (((G__19506 instanceof cljs.core.Keyword))?G__19506.fqn:null);
switch (G__19506__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19502,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19507){
var vec__19508 = p__19507;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19508,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19508,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19501){
var self__ = this;
var G__19501__$1 = this;
return (new cljs.core.RecordIter((0),G__19501__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19503,other19504){
var self__ = this;
var this19503__$1 = this;
return (((!((other19504 == null)))) && ((((this19503__$1.constructor === other19504.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19503__$1.w,other19504.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19503__$1.h,other19504.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19503__$1.__extmap,other19504.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19502){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19511 = k19502;
var G__19511__$1 = (((G__19511 instanceof cljs.core.Keyword))?G__19511.fqn:null);
switch (G__19511__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19502);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19501){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19512 = cljs.core.keyword_identical_QMARK_;
var expr__19513 = k__5352__auto__;
if(cljs.core.truth_((pred__19512.cljs$core$IFn$_invoke$arity$2 ? pred__19512.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__19513) : pred__19512.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__19513)))){
return (new shadow.dom.Size(G__19501,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19512.cljs$core$IFn$_invoke$arity$2 ? pred__19512.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__19513) : pred__19512.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__19513)))){
return (new shadow.dom.Size(self__.w,G__19501,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19501),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19501){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19501,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19505){
var extmap__5385__auto__ = (function (){var G__19515 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19505,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19505)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19515);
} else {
return G__19515;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19505),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19505),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19843 = (i + (1));
var G__19844 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19843;
ret = G__19844;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19520){
var vec__19521 = p__19520;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19521,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19521,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19525 = arguments.length;
switch (G__19525) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19846 = ps;
var G__19847 = (i + (1));
el__$1 = G__19846;
i = G__19847;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19526 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19526,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19526,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19526,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19529_19848 = cljs.core.seq(props);
var chunk__19530_19849 = null;
var count__19531_19850 = (0);
var i__19532_19851 = (0);
while(true){
if((i__19532_19851 < count__19531_19850)){
var vec__19539_19852 = chunk__19530_19849.cljs$core$IIndexed$_nth$arity$2(null,i__19532_19851);
var k_19853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19539_19852,(0),null);
var v_19854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19539_19852,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19853);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19853),v_19854);


var G__19855 = seq__19529_19848;
var G__19856 = chunk__19530_19849;
var G__19857 = count__19531_19850;
var G__19858 = (i__19532_19851 + (1));
seq__19529_19848 = G__19855;
chunk__19530_19849 = G__19856;
count__19531_19850 = G__19857;
i__19532_19851 = G__19858;
continue;
} else {
var temp__5804__auto___19861 = cljs.core.seq(seq__19529_19848);
if(temp__5804__auto___19861){
var seq__19529_19862__$1 = temp__5804__auto___19861;
if(cljs.core.chunked_seq_QMARK_(seq__19529_19862__$1)){
var c__5568__auto___19863 = cljs.core.chunk_first(seq__19529_19862__$1);
var G__19864 = cljs.core.chunk_rest(seq__19529_19862__$1);
var G__19865 = c__5568__auto___19863;
var G__19866 = cljs.core.count(c__5568__auto___19863);
var G__19867 = (0);
seq__19529_19848 = G__19864;
chunk__19530_19849 = G__19865;
count__19531_19850 = G__19866;
i__19532_19851 = G__19867;
continue;
} else {
var vec__19542_19868 = cljs.core.first(seq__19529_19862__$1);
var k_19869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19542_19868,(0),null);
var v_19870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19542_19868,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19869);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19869),v_19870);


var G__19872 = cljs.core.next(seq__19529_19862__$1);
var G__19873 = null;
var G__19874 = (0);
var G__19875 = (0);
seq__19529_19848 = G__19872;
chunk__19530_19849 = G__19873;
count__19531_19850 = G__19874;
i__19532_19851 = G__19875;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19546 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19546,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19546,(1),null);
var seq__19549_19877 = cljs.core.seq(node_children);
var chunk__19551_19878 = null;
var count__19552_19879 = (0);
var i__19553_19880 = (0);
while(true){
if((i__19553_19880 < count__19552_19879)){
var child_struct_19881 = chunk__19551_19878.cljs$core$IIndexed$_nth$arity$2(null,i__19553_19880);
if((!((child_struct_19881 == null)))){
if(typeof child_struct_19881 === 'string'){
var text_19882 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19882),child_struct_19881].join(''));
} else {
var children_19883 = shadow.dom.svg_node(child_struct_19881);
if(cljs.core.seq_QMARK_(children_19883)){
var seq__19567_19884 = cljs.core.seq(children_19883);
var chunk__19569_19885 = null;
var count__19570_19886 = (0);
var i__19571_19887 = (0);
while(true){
if((i__19571_19887 < count__19570_19886)){
var child_19888 = chunk__19569_19885.cljs$core$IIndexed$_nth$arity$2(null,i__19571_19887);
if(cljs.core.truth_(child_19888)){
node.appendChild(child_19888);


var G__19889 = seq__19567_19884;
var G__19890 = chunk__19569_19885;
var G__19891 = count__19570_19886;
var G__19892 = (i__19571_19887 + (1));
seq__19567_19884 = G__19889;
chunk__19569_19885 = G__19890;
count__19570_19886 = G__19891;
i__19571_19887 = G__19892;
continue;
} else {
var G__19893 = seq__19567_19884;
var G__19894 = chunk__19569_19885;
var G__19895 = count__19570_19886;
var G__19896 = (i__19571_19887 + (1));
seq__19567_19884 = G__19893;
chunk__19569_19885 = G__19894;
count__19570_19886 = G__19895;
i__19571_19887 = G__19896;
continue;
}
} else {
var temp__5804__auto___19897 = cljs.core.seq(seq__19567_19884);
if(temp__5804__auto___19897){
var seq__19567_19898__$1 = temp__5804__auto___19897;
if(cljs.core.chunked_seq_QMARK_(seq__19567_19898__$1)){
var c__5568__auto___19899 = cljs.core.chunk_first(seq__19567_19898__$1);
var G__19900 = cljs.core.chunk_rest(seq__19567_19898__$1);
var G__19901 = c__5568__auto___19899;
var G__19902 = cljs.core.count(c__5568__auto___19899);
var G__19903 = (0);
seq__19567_19884 = G__19900;
chunk__19569_19885 = G__19901;
count__19570_19886 = G__19902;
i__19571_19887 = G__19903;
continue;
} else {
var child_19904 = cljs.core.first(seq__19567_19898__$1);
if(cljs.core.truth_(child_19904)){
node.appendChild(child_19904);


var G__19905 = cljs.core.next(seq__19567_19898__$1);
var G__19906 = null;
var G__19907 = (0);
var G__19908 = (0);
seq__19567_19884 = G__19905;
chunk__19569_19885 = G__19906;
count__19570_19886 = G__19907;
i__19571_19887 = G__19908;
continue;
} else {
var G__19909 = cljs.core.next(seq__19567_19898__$1);
var G__19910 = null;
var G__19911 = (0);
var G__19912 = (0);
seq__19567_19884 = G__19909;
chunk__19569_19885 = G__19910;
count__19570_19886 = G__19911;
i__19571_19887 = G__19912;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19883);
}
}


var G__19913 = seq__19549_19877;
var G__19914 = chunk__19551_19878;
var G__19915 = count__19552_19879;
var G__19916 = (i__19553_19880 + (1));
seq__19549_19877 = G__19913;
chunk__19551_19878 = G__19914;
count__19552_19879 = G__19915;
i__19553_19880 = G__19916;
continue;
} else {
var G__19917 = seq__19549_19877;
var G__19918 = chunk__19551_19878;
var G__19919 = count__19552_19879;
var G__19920 = (i__19553_19880 + (1));
seq__19549_19877 = G__19917;
chunk__19551_19878 = G__19918;
count__19552_19879 = G__19919;
i__19553_19880 = G__19920;
continue;
}
} else {
var temp__5804__auto___19921 = cljs.core.seq(seq__19549_19877);
if(temp__5804__auto___19921){
var seq__19549_19922__$1 = temp__5804__auto___19921;
if(cljs.core.chunked_seq_QMARK_(seq__19549_19922__$1)){
var c__5568__auto___19923 = cljs.core.chunk_first(seq__19549_19922__$1);
var G__19928 = cljs.core.chunk_rest(seq__19549_19922__$1);
var G__19929 = c__5568__auto___19923;
var G__19930 = cljs.core.count(c__5568__auto___19923);
var G__19931 = (0);
seq__19549_19877 = G__19928;
chunk__19551_19878 = G__19929;
count__19552_19879 = G__19930;
i__19553_19880 = G__19931;
continue;
} else {
var child_struct_19932 = cljs.core.first(seq__19549_19922__$1);
if((!((child_struct_19932 == null)))){
if(typeof child_struct_19932 === 'string'){
var text_19933 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19933),child_struct_19932].join(''));
} else {
var children_19934 = shadow.dom.svg_node(child_struct_19932);
if(cljs.core.seq_QMARK_(children_19934)){
var seq__19573_19938 = cljs.core.seq(children_19934);
var chunk__19575_19939 = null;
var count__19576_19940 = (0);
var i__19577_19941 = (0);
while(true){
if((i__19577_19941 < count__19576_19940)){
var child_19942 = chunk__19575_19939.cljs$core$IIndexed$_nth$arity$2(null,i__19577_19941);
if(cljs.core.truth_(child_19942)){
node.appendChild(child_19942);


var G__19943 = seq__19573_19938;
var G__19944 = chunk__19575_19939;
var G__19945 = count__19576_19940;
var G__19946 = (i__19577_19941 + (1));
seq__19573_19938 = G__19943;
chunk__19575_19939 = G__19944;
count__19576_19940 = G__19945;
i__19577_19941 = G__19946;
continue;
} else {
var G__19947 = seq__19573_19938;
var G__19948 = chunk__19575_19939;
var G__19949 = count__19576_19940;
var G__19950 = (i__19577_19941 + (1));
seq__19573_19938 = G__19947;
chunk__19575_19939 = G__19948;
count__19576_19940 = G__19949;
i__19577_19941 = G__19950;
continue;
}
} else {
var temp__5804__auto___19951__$1 = cljs.core.seq(seq__19573_19938);
if(temp__5804__auto___19951__$1){
var seq__19573_19952__$1 = temp__5804__auto___19951__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19573_19952__$1)){
var c__5568__auto___19953 = cljs.core.chunk_first(seq__19573_19952__$1);
var G__19954 = cljs.core.chunk_rest(seq__19573_19952__$1);
var G__19955 = c__5568__auto___19953;
var G__19956 = cljs.core.count(c__5568__auto___19953);
var G__19957 = (0);
seq__19573_19938 = G__19954;
chunk__19575_19939 = G__19955;
count__19576_19940 = G__19956;
i__19577_19941 = G__19957;
continue;
} else {
var child_19958 = cljs.core.first(seq__19573_19952__$1);
if(cljs.core.truth_(child_19958)){
node.appendChild(child_19958);


var G__19959 = cljs.core.next(seq__19573_19952__$1);
var G__19960 = null;
var G__19961 = (0);
var G__19962 = (0);
seq__19573_19938 = G__19959;
chunk__19575_19939 = G__19960;
count__19576_19940 = G__19961;
i__19577_19941 = G__19962;
continue;
} else {
var G__19963 = cljs.core.next(seq__19573_19952__$1);
var G__19964 = null;
var G__19965 = (0);
var G__19966 = (0);
seq__19573_19938 = G__19963;
chunk__19575_19939 = G__19964;
count__19576_19940 = G__19965;
i__19577_19941 = G__19966;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19934);
}
}


var G__19967 = cljs.core.next(seq__19549_19922__$1);
var G__19968 = null;
var G__19969 = (0);
var G__19970 = (0);
seq__19549_19877 = G__19967;
chunk__19551_19878 = G__19968;
count__19552_19879 = G__19969;
i__19553_19880 = G__19970;
continue;
} else {
var G__19971 = cljs.core.next(seq__19549_19922__$1);
var G__19972 = null;
var G__19973 = (0);
var G__19974 = (0);
seq__19549_19877 = G__19971;
chunk__19551_19878 = G__19972;
count__19552_19879 = G__19973;
i__19553_19880 = G__19974;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19978 = arguments.length;
var i__5770__auto___19979 = (0);
while(true){
if((i__5770__auto___19979 < len__5769__auto___19978)){
args__5775__auto__.push((arguments[i__5770__auto___19979]));

var G__19980 = (i__5770__auto___19979 + (1));
i__5770__auto___19979 = G__19980;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19579){
var G__19580 = cljs.core.first(seq19579);
var seq19579__$1 = cljs.core.next(seq19579);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19580,seq19579__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19582 = arguments.length;
switch (G__19582) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__14585__auto___19985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_19587){
var state_val_19588 = (state_19587[(1)]);
if((state_val_19588 === (1))){
var state_19587__$1 = state_19587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19587__$1,(2),once_or_cleanup);
} else {
if((state_val_19588 === (2))){
var inst_19584 = (state_19587[(2)]);
var inst_19585 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19587__$1 = (function (){var statearr_19589 = state_19587;
(statearr_19589[(7)] = inst_19584);

return statearr_19589;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19587__$1,inst_19585);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__14016__auto__ = null;
var shadow$dom$state_machine__14016__auto____0 = (function (){
var statearr_19590 = [null,null,null,null,null,null,null,null];
(statearr_19590[(0)] = shadow$dom$state_machine__14016__auto__);

(statearr_19590[(1)] = (1));

return statearr_19590;
});
var shadow$dom$state_machine__14016__auto____1 = (function (state_19587){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_19587);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e19591){var ex__14019__auto__ = e19591;
var statearr_19592_19986 = state_19587;
(statearr_19592_19986[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_19587[(4)]))){
var statearr_19593_19987 = state_19587;
(statearr_19593_19987[(1)] = cljs.core.first((state_19587[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19988 = state_19587;
state_19587 = G__19988;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
shadow$dom$state_machine__14016__auto__ = function(state_19587){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__14016__auto____0.call(this);
case 1:
return shadow$dom$state_machine__14016__auto____1.call(this,state_19587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__14016__auto____0;
shadow$dom$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__14016__auto____1;
return shadow$dom$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_19594 = f__14586__auto__();
(statearr_19594[(6)] = c__14585__auto___19985);

return statearr_19594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
