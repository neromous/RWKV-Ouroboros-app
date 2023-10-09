goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__11286){
var map__11287 = p__11286;
var map__11287__$1 = cljs.core.__destructure_map(map__11287);
var runtime = map__11287__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11287__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_11604 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_11604)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__11304 = runtime;
var G__11305 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_11604);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__11304,G__11305) : shadow.remote.runtime.shared.process.call(null,G__11304,G__11305));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__11316,res){
var map__11318 = p__11316;
var map__11318__$1 = cljs.core.__destructure_map(map__11318);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11318__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11318__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__11319 = res;
var G__11319__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11319,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__11319);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11319__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__11319__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__11332 = arguments.length;
switch (G__11332) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__11343,msg,handlers,timeout_after_ms){
var map__11344 = p__11343;
var map__11344__$1 = cljs.core.__destructure_map(map__11344);
var runtime = map__11344__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11344__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___11631 = arguments.length;
var i__5770__auto___11633 = (0);
while(true){
if((i__5770__auto___11633 < len__5769__auto___11631)){
args__5775__auto__.push((arguments[i__5770__auto___11633]));

var G__11635 = (i__5770__auto___11633 + (1));
i__5770__auto___11633 = G__11635;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__11364,ev,args){
var map__11366 = p__11364;
var map__11366__$1 = cljs.core.__destructure_map(map__11366);
var runtime = map__11366__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11366__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__11368 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11371 = null;
var count__11372 = (0);
var i__11373 = (0);
while(true){
if((i__11373 < count__11372)){
var ext = chunk__11371.cljs$core$IIndexed$_nth$arity$2(null,i__11373);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11643 = seq__11368;
var G__11644 = chunk__11371;
var G__11645 = count__11372;
var G__11646 = (i__11373 + (1));
seq__11368 = G__11643;
chunk__11371 = G__11644;
count__11372 = G__11645;
i__11373 = G__11646;
continue;
} else {
var G__11647 = seq__11368;
var G__11648 = chunk__11371;
var G__11649 = count__11372;
var G__11650 = (i__11373 + (1));
seq__11368 = G__11647;
chunk__11371 = G__11648;
count__11372 = G__11649;
i__11373 = G__11650;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11368);
if(temp__5804__auto__){
var seq__11368__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11368__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11368__$1);
var G__11653 = cljs.core.chunk_rest(seq__11368__$1);
var G__11654 = c__5568__auto__;
var G__11655 = cljs.core.count(c__5568__auto__);
var G__11656 = (0);
seq__11368 = G__11653;
chunk__11371 = G__11654;
count__11372 = G__11655;
i__11373 = G__11656;
continue;
} else {
var ext = cljs.core.first(seq__11368__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11662 = cljs.core.next(seq__11368__$1);
var G__11663 = null;
var G__11664 = (0);
var G__11665 = (0);
seq__11368 = G__11662;
chunk__11371 = G__11663;
count__11372 = G__11664;
i__11373 = G__11665;
continue;
} else {
var G__11666 = cljs.core.next(seq__11368__$1);
var G__11667 = null;
var G__11668 = (0);
var G__11669 = (0);
seq__11368 = G__11666;
chunk__11371 = G__11667;
count__11372 = G__11668;
i__11373 = G__11669;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq11353){
var G__11354 = cljs.core.first(seq11353);
var seq11353__$1 = cljs.core.next(seq11353);
var G__11355 = cljs.core.first(seq11353__$1);
var seq11353__$2 = cljs.core.next(seq11353__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11354,G__11355,seq11353__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__11416,p__11417){
var map__11418 = p__11416;
var map__11418__$1 = cljs.core.__destructure_map(map__11418);
var runtime = map__11418__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11418__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11419 = p__11417;
var map__11419__$1 = cljs.core.__destructure_map(map__11419);
var msg = map__11419__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11419__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__11422 = cljs.core.deref(state_ref);
var map__11422__$1 = cljs.core.__destructure_map(map__11422);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11422__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11422__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__11430,msg){
var map__11431 = p__11430;
var map__11431__$1 = cljs.core.__destructure_map(map__11431);
var runtime = map__11431__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11431__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__11457,key,p__11458){
var map__11459 = p__11457;
var map__11459__$1 = cljs.core.__destructure_map(map__11459);
var state = map__11459__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11459__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__11462 = p__11458;
var map__11462__$1 = cljs.core.__destructure_map(map__11462);
var spec = map__11462__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11462__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__11488,key,spec){
var map__11489 = p__11488;
var map__11489__$1 = cljs.core.__destructure_map(map__11489);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11489__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__11491_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__11491_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__11492_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__11492_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__11493_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__11493_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__11494_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__11494_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__11495_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__11495_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__11522,key){
var map__11524 = p__11522;
var map__11524__$1 = cljs.core.__destructure_map(map__11524);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11524__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__11539,msg){
var map__11540 = p__11539;
var map__11540__$1 = cljs.core.__destructure_map(map__11540);
var runtime = map__11540__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11540__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__11549,p__11550){
var map__11551 = p__11549;
var map__11551__$1 = cljs.core.__destructure_map(map__11551);
var runtime = map__11551__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11551__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11552 = p__11550;
var map__11552__$1 = cljs.core.__destructure_map(map__11552);
var msg = map__11552__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11552__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11552__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__11567 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11569 = null;
var count__11570 = (0);
var i__11571 = (0);
while(true){
if((i__11571 < count__11570)){
var map__11588 = chunk__11569.cljs$core$IIndexed$_nth$arity$2(null,i__11571);
var map__11588__$1 = cljs.core.__destructure_map(map__11588);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11588__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11750 = seq__11567;
var G__11751 = chunk__11569;
var G__11752 = count__11570;
var G__11753 = (i__11571 + (1));
seq__11567 = G__11750;
chunk__11569 = G__11751;
count__11570 = G__11752;
i__11571 = G__11753;
continue;
} else {
var G__11754 = seq__11567;
var G__11755 = chunk__11569;
var G__11756 = count__11570;
var G__11757 = (i__11571 + (1));
seq__11567 = G__11754;
chunk__11569 = G__11755;
count__11570 = G__11756;
i__11571 = G__11757;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11567);
if(temp__5804__auto__){
var seq__11567__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11567__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11567__$1);
var G__11759 = cljs.core.chunk_rest(seq__11567__$1);
var G__11760 = c__5568__auto__;
var G__11761 = cljs.core.count(c__5568__auto__);
var G__11762 = (0);
seq__11567 = G__11759;
chunk__11569 = G__11760;
count__11570 = G__11761;
i__11571 = G__11762;
continue;
} else {
var map__11590 = cljs.core.first(seq__11567__$1);
var map__11590__$1 = cljs.core.__destructure_map(map__11590);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11590__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11766 = cljs.core.next(seq__11567__$1);
var G__11767 = null;
var G__11768 = (0);
var G__11769 = (0);
seq__11567 = G__11766;
chunk__11569 = G__11767;
count__11570 = G__11768;
i__11571 = G__11769;
continue;
} else {
var G__11770 = cljs.core.next(seq__11567__$1);
var G__11771 = null;
var G__11772 = (0);
var G__11773 = (0);
seq__11567 = G__11770;
chunk__11569 = G__11771;
count__11570 = G__11772;
i__11571 = G__11773;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
