goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__10961){
var map__10962 = p__10961;
var map__10962__$1 = cljs.core.__destructure_map(map__10962);
var runtime = map__10962__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10962__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_11114 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_11114)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__10970 = runtime;
var G__10971 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_11114);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__10970,G__10971) : shadow.remote.runtime.shared.process.call(null,G__10970,G__10971));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__10974,res){
var map__10975 = p__10974;
var map__10975__$1 = cljs.core.__destructure_map(map__10975);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10975__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10975__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__10978 = res;
var G__10978__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10978,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__10978);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10978__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__10978__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__10982 = arguments.length;
switch (G__10982) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__10987,msg,handlers,timeout_after_ms){
var map__10990 = p__10987;
var map__10990__$1 = cljs.core.__destructure_map(map__10990);
var runtime = map__10990__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10990__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5769__auto___11124 = arguments.length;
var i__5770__auto___11125 = (0);
while(true){
if((i__5770__auto___11125 < len__5769__auto___11124)){
args__5775__auto__.push((arguments[i__5770__auto___11125]));

var G__11129 = (i__5770__auto___11125 + (1));
i__5770__auto___11125 = G__11129;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__11002,ev,args){
var map__11003 = p__11002;
var map__11003__$1 = cljs.core.__destructure_map(map__11003);
var runtime = map__11003__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11003__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__11004 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11007 = null;
var count__11008 = (0);
var i__11009 = (0);
while(true){
if((i__11009 < count__11008)){
var ext = chunk__11007.cljs$core$IIndexed$_nth$arity$2(null,i__11009);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11137 = seq__11004;
var G__11138 = chunk__11007;
var G__11139 = count__11008;
var G__11140 = (i__11009 + (1));
seq__11004 = G__11137;
chunk__11007 = G__11138;
count__11008 = G__11139;
i__11009 = G__11140;
continue;
} else {
var G__11142 = seq__11004;
var G__11143 = chunk__11007;
var G__11144 = count__11008;
var G__11145 = (i__11009 + (1));
seq__11004 = G__11142;
chunk__11007 = G__11143;
count__11008 = G__11144;
i__11009 = G__11145;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11004);
if(temp__5804__auto__){
var seq__11004__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11004__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11004__$1);
var G__11147 = cljs.core.chunk_rest(seq__11004__$1);
var G__11148 = c__5568__auto__;
var G__11149 = cljs.core.count(c__5568__auto__);
var G__11150 = (0);
seq__11004 = G__11147;
chunk__11007 = G__11148;
count__11008 = G__11149;
i__11009 = G__11150;
continue;
} else {
var ext = cljs.core.first(seq__11004__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11152 = cljs.core.next(seq__11004__$1);
var G__11153 = null;
var G__11154 = (0);
var G__11155 = (0);
seq__11004 = G__11152;
chunk__11007 = G__11153;
count__11008 = G__11154;
i__11009 = G__11155;
continue;
} else {
var G__11156 = cljs.core.next(seq__11004__$1);
var G__11157 = null;
var G__11158 = (0);
var G__11159 = (0);
seq__11004 = G__11156;
chunk__11007 = G__11157;
count__11008 = G__11158;
i__11009 = G__11159;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq10996){
var G__10997 = cljs.core.first(seq10996);
var seq10996__$1 = cljs.core.next(seq10996);
var G__10998 = cljs.core.first(seq10996__$1);
var seq10996__$2 = cljs.core.next(seq10996__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10997,G__10998,seq10996__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__11021,p__11022){
var map__11024 = p__11021;
var map__11024__$1 = cljs.core.__destructure_map(map__11024);
var runtime = map__11024__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11024__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11025 = p__11022;
var map__11025__$1 = cljs.core.__destructure_map(map__11025);
var msg = map__11025__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11025__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__11026 = cljs.core.deref(state_ref);
var map__11026__$1 = cljs.core.__destructure_map(map__11026);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11026__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11026__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__11033,msg){
var map__11034 = p__11033;
var map__11034__$1 = cljs.core.__destructure_map(map__11034);
var runtime = map__11034__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11034__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__11040,key,p__11041){
var map__11044 = p__11040;
var map__11044__$1 = cljs.core.__destructure_map(map__11044);
var state = map__11044__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11044__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__11045 = p__11041;
var map__11045__$1 = cljs.core.__destructure_map(map__11045);
var spec = map__11045__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11045__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__11050,key,spec){
var map__11051 = p__11050;
var map__11051__$1 = cljs.core.__destructure_map(map__11051);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11051__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__11053_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__11053_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__11054_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__11054_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__11055_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__11055_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__11056_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__11056_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__11057_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__11057_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__11062,key){
var map__11063 = p__11062;
var map__11063__$1 = cljs.core.__destructure_map(map__11063);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11063__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__11066,msg){
var map__11067 = p__11066;
var map__11067__$1 = cljs.core.__destructure_map(map__11067);
var runtime = map__11067__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11067__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__11075,p__11076){
var map__11077 = p__11075;
var map__11077__$1 = cljs.core.__destructure_map(map__11077);
var runtime = map__11077__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11077__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11078 = p__11076;
var map__11078__$1 = cljs.core.__destructure_map(map__11078);
var msg = map__11078__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11078__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11078__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__11088 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11090 = null;
var count__11091 = (0);
var i__11092 = (0);
while(true){
if((i__11092 < count__11091)){
var map__11102 = chunk__11090.cljs$core$IIndexed$_nth$arity$2(null,i__11092);
var map__11102__$1 = cljs.core.__destructure_map(map__11102);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11102__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11247 = seq__11088;
var G__11248 = chunk__11090;
var G__11249 = count__11091;
var G__11250 = (i__11092 + (1));
seq__11088 = G__11247;
chunk__11090 = G__11248;
count__11091 = G__11249;
i__11092 = G__11250;
continue;
} else {
var G__11251 = seq__11088;
var G__11252 = chunk__11090;
var G__11253 = count__11091;
var G__11254 = (i__11092 + (1));
seq__11088 = G__11251;
chunk__11090 = G__11252;
count__11091 = G__11253;
i__11092 = G__11254;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11088);
if(temp__5804__auto__){
var seq__11088__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11088__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11088__$1);
var G__11257 = cljs.core.chunk_rest(seq__11088__$1);
var G__11258 = c__5568__auto__;
var G__11259 = cljs.core.count(c__5568__auto__);
var G__11260 = (0);
seq__11088 = G__11257;
chunk__11090 = G__11258;
count__11091 = G__11259;
i__11092 = G__11260;
continue;
} else {
var map__11104 = cljs.core.first(seq__11088__$1);
var map__11104__$1 = cljs.core.__destructure_map(map__11104);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11104__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11265 = cljs.core.next(seq__11088__$1);
var G__11266 = null;
var G__11267 = (0);
var G__11268 = (0);
seq__11088 = G__11265;
chunk__11090 = G__11266;
count__11091 = G__11267;
i__11092 = G__11268;
continue;
} else {
var G__11269 = cljs.core.next(seq__11088__$1);
var G__11270 = null;
var G__11271 = (0);
var G__11272 = (0);
seq__11088 = G__11269;
chunk__11090 = G__11270;
count__11091 = G__11271;
i__11092 = G__11272;
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
