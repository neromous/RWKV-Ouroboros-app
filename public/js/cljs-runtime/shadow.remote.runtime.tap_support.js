goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__18208,p__18209){
var map__18212 = p__18208;
var map__18212__$1 = cljs.core.__destructure_map(map__18212);
var svc = map__18212__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18212__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18212__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18212__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__18213 = p__18209;
var map__18213__$1 = cljs.core.__destructure_map(map__18213);
var msg = map__18213__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18213__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18213__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18213__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18213__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__18234,p__18235){
var map__18237 = p__18234;
var map__18237__$1 = cljs.core.__destructure_map(map__18237);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18237__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__18238 = p__18235;
var map__18238__$1 = cljs.core.__destructure_map(map__18238);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18238__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__18259,p__18261){
var map__18262 = p__18259;
var map__18262__$1 = cljs.core.__destructure_map(map__18262);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18262__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18262__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__18264 = p__18261;
var map__18264__$1 = cljs.core.__destructure_map(map__18264);
var msg = map__18264__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18264__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__18271,tid){
var map__18272 = p__18271;
var map__18272__$1 = cljs.core.__destructure_map(map__18272);
var svc = map__18272__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18272__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__18290 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__18291 = null;
var count__18292 = (0);
var i__18293 = (0);
while(true){
if((i__18293 < count__18292)){
var vec__18317 = chunk__18291.cljs$core$IIndexed$_nth$arity$2(null,i__18293);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18317,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18317,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__18400 = seq__18290;
var G__18401 = chunk__18291;
var G__18402 = count__18292;
var G__18403 = (i__18293 + (1));
seq__18290 = G__18400;
chunk__18291 = G__18401;
count__18292 = G__18402;
i__18293 = G__18403;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18290);
if(temp__5804__auto__){
var seq__18290__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18290__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18290__$1);
var G__18407 = cljs.core.chunk_rest(seq__18290__$1);
var G__18408 = c__5568__auto__;
var G__18409 = cljs.core.count(c__5568__auto__);
var G__18410 = (0);
seq__18290 = G__18407;
chunk__18291 = G__18408;
count__18292 = G__18409;
i__18293 = G__18410;
continue;
} else {
var vec__18330 = cljs.core.first(seq__18290__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18330,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18330,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__18423 = cljs.core.next(seq__18290__$1);
var G__18424 = null;
var G__18425 = (0);
var G__18426 = (0);
seq__18290 = G__18423;
chunk__18291 = G__18424;
count__18292 = G__18425;
i__18293 = G__18426;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__18278_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__18278_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__18279_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__18279_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__18281_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__18281_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__18282_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__18282_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__18349){
var map__18351 = p__18349;
var map__18351__$1 = cljs.core.__destructure_map(map__18351);
var svc = map__18351__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18351__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18351__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
