goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__15902){
var map__15903 = p__15902;
var map__15903__$1 = cljs.core.__destructure_map(map__15903);
var msg = map__15903__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15903__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15903__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__15905){
var map__15906 = p__15905;
var map__15906__$1 = cljs.core.__destructure_map(map__15906);
var msg = map__15906__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15906__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15906__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__15907 = info;
var map__15907__$1 = cljs.core.__destructure_map(map__15907);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15907__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15907__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15907__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__15908){
var map__15909 = p__15908;
var map__15909__$1 = cljs.core.__destructure_map(map__15909);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15909__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15909__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__15910){
var map__15911 = p__15910;
var map__15911__$1 = cljs.core.__destructure_map(map__15911);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15911__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__15912 = cljs.core.seq(files_to_require);
var chunk__15913 = null;
var count__15914 = (0);
var i__15915 = (0);
while(true){
if((i__15915 < count__15914)){
var src = chunk__15913.cljs$core$IIndexed$_nth$arity$2(null,i__15915);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__15953 = seq__15912;
var G__15954 = chunk__15913;
var G__15955 = count__15914;
var G__15956 = (i__15915 + (1));
seq__15912 = G__15953;
chunk__15913 = G__15954;
count__15914 = G__15955;
i__15915 = G__15956;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15912);
if(temp__5804__auto__){
var seq__15912__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15912__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15912__$1);
var G__15957 = cljs.core.chunk_rest(seq__15912__$1);
var G__15958 = c__5568__auto__;
var G__15959 = cljs.core.count(c__5568__auto__);
var G__15960 = (0);
seq__15912 = G__15957;
chunk__15913 = G__15958;
count__15914 = G__15959;
i__15915 = G__15960;
continue;
} else {
var src = cljs.core.first(seq__15912__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__15961 = cljs.core.next(seq__15912__$1);
var G__15962 = null;
var G__15963 = (0);
var G__15964 = (0);
seq__15912 = G__15961;
chunk__15913 = G__15962;
count__15914 = G__15963;
i__15915 = G__15964;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__15919,msg){
var map__15920 = p__15919;
var map__15920__$1 = cljs.core.__destructure_map(map__15920);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15920__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__15921){
var map__15922 = p__15921;
var map__15922__$1 = cljs.core.__destructure_map(map__15922);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15922__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15922__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__15923,done,error){
var map__15924 = p__15923;
var map__15924__$1 = cljs.core.__destructure_map(map__15924);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15924__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__15926_15965 = cljs.core.seq(repl_sources);
var chunk__15928_15966 = null;
var count__15929_15967 = (0);
var i__15930_15968 = (0);
while(true){
if((i__15930_15968 < count__15929_15967)){
var map__15934_15969 = chunk__15928_15966.cljs$core$IIndexed$_nth$arity$2(null,i__15930_15968);
var map__15934_15970__$1 = cljs.core.__destructure_map(map__15934_15969);
var src_15971 = map__15934_15970__$1;
var output_name_15972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15934_15970__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_15972)))){
shadow.cljs.devtools.client.node.closure_import(output_name_15972);


var G__15973 = seq__15926_15965;
var G__15974 = chunk__15928_15966;
var G__15975 = count__15929_15967;
var G__15976 = (i__15930_15968 + (1));
seq__15926_15965 = G__15973;
chunk__15928_15966 = G__15974;
count__15929_15967 = G__15975;
i__15930_15968 = G__15976;
continue;
} else {
var G__15977 = seq__15926_15965;
var G__15978 = chunk__15928_15966;
var G__15979 = count__15929_15967;
var G__15980 = (i__15930_15968 + (1));
seq__15926_15965 = G__15977;
chunk__15928_15966 = G__15978;
count__15929_15967 = G__15979;
i__15930_15968 = G__15980;
continue;
}
} else {
var temp__5804__auto___15981 = cljs.core.seq(seq__15926_15965);
if(temp__5804__auto___15981){
var seq__15926_15982__$1 = temp__5804__auto___15981;
if(cljs.core.chunked_seq_QMARK_(seq__15926_15982__$1)){
var c__5568__auto___15983 = cljs.core.chunk_first(seq__15926_15982__$1);
var G__15984 = cljs.core.chunk_rest(seq__15926_15982__$1);
var G__15985 = c__5568__auto___15983;
var G__15986 = cljs.core.count(c__5568__auto___15983);
var G__15987 = (0);
seq__15926_15965 = G__15984;
chunk__15928_15966 = G__15985;
count__15929_15967 = G__15986;
i__15930_15968 = G__15987;
continue;
} else {
var map__15935_15988 = cljs.core.first(seq__15926_15982__$1);
var map__15935_15989__$1 = cljs.core.__destructure_map(map__15935_15988);
var src_15990 = map__15935_15989__$1;
var output_name_15991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15935_15989__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_15991)))){
shadow.cljs.devtools.client.node.closure_import(output_name_15991);


var G__15992 = cljs.core.next(seq__15926_15982__$1);
var G__15993 = null;
var G__15994 = (0);
var G__15995 = (0);
seq__15926_15965 = G__15992;
chunk__15928_15966 = G__15993;
count__15929_15967 = G__15994;
i__15930_15968 = G__15995;
continue;
} else {
var G__15996 = cljs.core.next(seq__15926_15982__$1);
var G__15997 = null;
var G__15998 = (0);
var G__15999 = (0);
seq__15926_15965 = G__15996;
chunk__15928_15966 = G__15997;
count__15929_15967 = G__15998;
i__15930_15968 = G__15999;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e15925){var e = e15925;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__15936,done,error){
var map__15937 = p__15936;
var map__15937__$1 = cljs.core.__destructure_map(map__15937);
var msg = map__15937__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15937__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15937__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__15939_16000 = cljs.core.seq(sources);
var chunk__15940_16001 = null;
var count__15941_16002 = (0);
var i__15942_16003 = (0);
while(true){
if((i__15942_16003 < count__15941_16002)){
var map__15945_16004 = chunk__15940_16001.cljs$core$IIndexed$_nth$arity$2(null,i__15942_16003);
var map__15945_16005__$1 = cljs.core.__destructure_map(map__15945_16004);
var src_16006 = map__15945_16005__$1;
var provides_16007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15945_16005__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_16008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15945_16005__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5045__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_16008)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_16007);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_16008);
} else {
}


var G__16009 = seq__15939_16000;
var G__16010 = chunk__15940_16001;
var G__16011 = count__15941_16002;
var G__16012 = (i__15942_16003 + (1));
seq__15939_16000 = G__16009;
chunk__15940_16001 = G__16010;
count__15941_16002 = G__16011;
i__15942_16003 = G__16012;
continue;
} else {
var temp__5804__auto___16013 = cljs.core.seq(seq__15939_16000);
if(temp__5804__auto___16013){
var seq__15939_16014__$1 = temp__5804__auto___16013;
if(cljs.core.chunked_seq_QMARK_(seq__15939_16014__$1)){
var c__5568__auto___16015 = cljs.core.chunk_first(seq__15939_16014__$1);
var G__16016 = cljs.core.chunk_rest(seq__15939_16014__$1);
var G__16017 = c__5568__auto___16015;
var G__16018 = cljs.core.count(c__5568__auto___16015);
var G__16019 = (0);
seq__15939_16000 = G__16016;
chunk__15940_16001 = G__16017;
count__15941_16002 = G__16018;
i__15942_16003 = G__16019;
continue;
} else {
var map__15946_16020 = cljs.core.first(seq__15939_16014__$1);
var map__15946_16021__$1 = cljs.core.__destructure_map(map__15946_16020);
var src_16022 = map__15946_16021__$1;
var provides_16023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15946_16021__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_16024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15946_16021__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5045__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_16024)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_16023);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_16024);
} else {
}


var G__16025 = cljs.core.next(seq__15939_16014__$1);
var G__16026 = null;
var G__16027 = (0);
var G__16028 = (0);
seq__15939_16000 = G__16025;
chunk__15940_16001 = G__16026;
count__15941_16002 = G__16027;
i__15942_16003 = G__16028;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e15938){var e = e15938;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__15947){
var map__15948 = p__15947;
var map__15948__$1 = cljs.core.__destructure_map(map__15948);
var env = map__15948__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15948__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__15949){
var map__15950 = p__15949;
var map__15950__$1 = cljs.core.__destructure_map(map__15950);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15950__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15950__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__15951){
var map__15952 = p__15951;
var map__15952__$1 = cljs.core.__destructure_map(map__15952);
var svc = map__15952__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15952__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
