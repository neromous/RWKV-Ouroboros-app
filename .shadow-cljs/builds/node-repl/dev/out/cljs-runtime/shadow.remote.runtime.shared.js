goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__10973){
var map__10974 = p__10973;
var map__10974__$1 = cljs.core.__destructure_map(map__10974);
var runtime = map__10974__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10974__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_11266 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_11266)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__10977 = runtime;
var G__10978 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_11266);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__10977,G__10978) : shadow.remote.runtime.shared.process.call(null,G__10977,G__10978));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__10983,res){
var map__10984 = p__10983;
var map__10984__$1 = cljs.core.__destructure_map(map__10984);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10984__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10984__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__10990 = res;
var G__10990__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10990,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__10990);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10990__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__10990__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__10999 = arguments.length;
switch (G__10999) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__11003,msg,handlers,timeout_after_ms){
var map__11006 = p__11003;
var map__11006__$1 = cljs.core.__destructure_map(map__11006);
var runtime = map__11006__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11006__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5769__auto___11286 = arguments.length;
var i__5770__auto___11287 = (0);
while(true){
if((i__5770__auto___11287 < len__5769__auto___11286)){
args__5775__auto__.push((arguments[i__5770__auto___11287]));

var G__11289 = (i__5770__auto___11287 + (1));
i__5770__auto___11287 = G__11289;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__11029,ev,args){
var map__11031 = p__11029;
var map__11031__$1 = cljs.core.__destructure_map(map__11031);
var runtime = map__11031__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11031__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__11035 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11038 = null;
var count__11039 = (0);
var i__11040 = (0);
while(true){
if((i__11040 < count__11039)){
var ext = chunk__11038.cljs$core$IIndexed$_nth$arity$2(null,i__11040);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11294 = seq__11035;
var G__11295 = chunk__11038;
var G__11296 = count__11039;
var G__11297 = (i__11040 + (1));
seq__11035 = G__11294;
chunk__11038 = G__11295;
count__11039 = G__11296;
i__11040 = G__11297;
continue;
} else {
var G__11301 = seq__11035;
var G__11302 = chunk__11038;
var G__11303 = count__11039;
var G__11304 = (i__11040 + (1));
seq__11035 = G__11301;
chunk__11038 = G__11302;
count__11039 = G__11303;
i__11040 = G__11304;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11035);
if(temp__5804__auto__){
var seq__11035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11035__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11035__$1);
var G__11310 = cljs.core.chunk_rest(seq__11035__$1);
var G__11311 = c__5568__auto__;
var G__11312 = cljs.core.count(c__5568__auto__);
var G__11313 = (0);
seq__11035 = G__11310;
chunk__11038 = G__11311;
count__11039 = G__11312;
i__11040 = G__11313;
continue;
} else {
var ext = cljs.core.first(seq__11035__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11325 = cljs.core.next(seq__11035__$1);
var G__11326 = null;
var G__11327 = (0);
var G__11328 = (0);
seq__11035 = G__11325;
chunk__11038 = G__11326;
count__11039 = G__11327;
i__11040 = G__11328;
continue;
} else {
var G__11329 = cljs.core.next(seq__11035__$1);
var G__11330 = null;
var G__11331 = (0);
var G__11332 = (0);
seq__11035 = G__11329;
chunk__11038 = G__11330;
count__11039 = G__11331;
i__11040 = G__11332;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq11013){
var G__11014 = cljs.core.first(seq11013);
var seq11013__$1 = cljs.core.next(seq11013);
var G__11015 = cljs.core.first(seq11013__$1);
var seq11013__$2 = cljs.core.next(seq11013__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11014,G__11015,seq11013__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__11091,p__11092){
var map__11093 = p__11091;
var map__11093__$1 = cljs.core.__destructure_map(map__11093);
var runtime = map__11093__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11093__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11094 = p__11092;
var map__11094__$1 = cljs.core.__destructure_map(map__11094);
var msg = map__11094__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11094__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__11105 = cljs.core.deref(state_ref);
var map__11105__$1 = cljs.core.__destructure_map(map__11105);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11105__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11105__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__11121,msg){
var map__11122 = p__11121;
var map__11122__$1 = cljs.core.__destructure_map(map__11122);
var runtime = map__11122__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11122__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__11129,key,p__11131){
var map__11132 = p__11129;
var map__11132__$1 = cljs.core.__destructure_map(map__11132);
var state = map__11132__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11132__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__11133 = p__11131;
var map__11133__$1 = cljs.core.__destructure_map(map__11133);
var spec = map__11133__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11133__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__11140,key,spec){
var map__11141 = p__11140;
var map__11141__$1 = cljs.core.__destructure_map(map__11141);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11141__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__11144_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__11144_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__11145_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__11145_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__11146_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__11146_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__11147_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__11147_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__11148_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__11148_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__11163,key){
var map__11164 = p__11163;
var map__11164__$1 = cljs.core.__destructure_map(map__11164);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11164__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__11175,msg){
var map__11178 = p__11175;
var map__11178__$1 = cljs.core.__destructure_map(map__11178);
var runtime = map__11178__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11178__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__11189,p__11190){
var map__11191 = p__11189;
var map__11191__$1 = cljs.core.__destructure_map(map__11191);
var runtime = map__11191__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11191__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11192 = p__11190;
var map__11192__$1 = cljs.core.__destructure_map(map__11192);
var msg = map__11192__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11192__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11192__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__11215 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11218 = null;
var count__11219 = (0);
var i__11220 = (0);
while(true){
if((i__11220 < count__11219)){
var map__11239 = chunk__11218.cljs$core$IIndexed$_nth$arity$2(null,i__11220);
var map__11239__$1 = cljs.core.__destructure_map(map__11239);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11239__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11370 = seq__11215;
var G__11371 = chunk__11218;
var G__11372 = count__11219;
var G__11373 = (i__11220 + (1));
seq__11215 = G__11370;
chunk__11218 = G__11371;
count__11219 = G__11372;
i__11220 = G__11373;
continue;
} else {
var G__11374 = seq__11215;
var G__11375 = chunk__11218;
var G__11376 = count__11219;
var G__11377 = (i__11220 + (1));
seq__11215 = G__11374;
chunk__11218 = G__11375;
count__11219 = G__11376;
i__11220 = G__11377;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11215);
if(temp__5804__auto__){
var seq__11215__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11215__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11215__$1);
var G__11378 = cljs.core.chunk_rest(seq__11215__$1);
var G__11379 = c__5568__auto__;
var G__11380 = cljs.core.count(c__5568__auto__);
var G__11381 = (0);
seq__11215 = G__11378;
chunk__11218 = G__11379;
count__11219 = G__11380;
i__11220 = G__11381;
continue;
} else {
var map__11246 = cljs.core.first(seq__11215__$1);
var map__11246__$1 = cljs.core.__destructure_map(map__11246);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11246__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11386 = cljs.core.next(seq__11215__$1);
var G__11387 = null;
var G__11388 = (0);
var G__11389 = (0);
seq__11215 = G__11386;
chunk__11218 = G__11387;
count__11219 = G__11388;
i__11220 = G__11389;
continue;
} else {
var G__11390 = cljs.core.next(seq__11215__$1);
var G__11391 = null;
var G__11392 = (0);
var G__11393 = (0);
seq__11215 = G__11390;
chunk__11218 = G__11391;
count__11219 = G__11392;
i__11220 = G__11393;
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
