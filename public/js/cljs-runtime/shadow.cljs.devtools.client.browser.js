goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20852 = arguments.length;
var i__5770__auto___20853 = (0);
while(true){
if((i__5770__auto___20853 < len__5769__auto___20852)){
args__5775__auto__.push((arguments[i__5770__auto___20853]));

var G__20854 = (i__5770__auto___20853 + (1));
i__5770__auto___20853 = G__20854;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20567){
var G__20568 = cljs.core.first(seq20567);
var seq20567__$1 = cljs.core.next(seq20567);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20568,seq20567__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20574 = cljs.core.seq(sources);
var chunk__20575 = null;
var count__20576 = (0);
var i__20577 = (0);
while(true){
if((i__20577 < count__20576)){
var map__20584 = chunk__20575.cljs$core$IIndexed$_nth$arity$2(null,i__20577);
var map__20584__$1 = cljs.core.__destructure_map(map__20584);
var src = map__20584__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20585){var e_20855 = e20585;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20855);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20855.message)].join('')));
}

var G__20856 = seq__20574;
var G__20857 = chunk__20575;
var G__20858 = count__20576;
var G__20859 = (i__20577 + (1));
seq__20574 = G__20856;
chunk__20575 = G__20857;
count__20576 = G__20858;
i__20577 = G__20859;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20574);
if(temp__5804__auto__){
var seq__20574__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20574__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20574__$1);
var G__20860 = cljs.core.chunk_rest(seq__20574__$1);
var G__20861 = c__5568__auto__;
var G__20862 = cljs.core.count(c__5568__auto__);
var G__20863 = (0);
seq__20574 = G__20860;
chunk__20575 = G__20861;
count__20576 = G__20862;
i__20577 = G__20863;
continue;
} else {
var map__20586 = cljs.core.first(seq__20574__$1);
var map__20586__$1 = cljs.core.__destructure_map(map__20586);
var src = map__20586__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20587){var e_20864 = e20587;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20864);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20864.message)].join('')));
}

var G__20865 = cljs.core.next(seq__20574__$1);
var G__20866 = null;
var G__20867 = (0);
var G__20868 = (0);
seq__20574 = G__20865;
chunk__20575 = G__20866;
count__20576 = G__20867;
i__20577 = G__20868;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20588 = cljs.core.seq(js_requires);
var chunk__20589 = null;
var count__20590 = (0);
var i__20591 = (0);
while(true){
if((i__20591 < count__20590)){
var js_ns = chunk__20589.cljs$core$IIndexed$_nth$arity$2(null,i__20591);
var require_str_20869 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20869);


var G__20870 = seq__20588;
var G__20871 = chunk__20589;
var G__20872 = count__20590;
var G__20873 = (i__20591 + (1));
seq__20588 = G__20870;
chunk__20589 = G__20871;
count__20590 = G__20872;
i__20591 = G__20873;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20588);
if(temp__5804__auto__){
var seq__20588__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20588__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20588__$1);
var G__20874 = cljs.core.chunk_rest(seq__20588__$1);
var G__20875 = c__5568__auto__;
var G__20876 = cljs.core.count(c__5568__auto__);
var G__20877 = (0);
seq__20588 = G__20874;
chunk__20589 = G__20875;
count__20590 = G__20876;
i__20591 = G__20877;
continue;
} else {
var js_ns = cljs.core.first(seq__20588__$1);
var require_str_20878 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20878);


var G__20879 = cljs.core.next(seq__20588__$1);
var G__20880 = null;
var G__20881 = (0);
var G__20882 = (0);
seq__20588 = G__20879;
chunk__20589 = G__20880;
count__20590 = G__20881;
i__20591 = G__20882;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20593){
var map__20594 = p__20593;
var map__20594__$1 = cljs.core.__destructure_map(map__20594);
var msg = map__20594__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20594__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20594__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20595(s__20596){
return (new cljs.core.LazySeq(null,(function (){
var s__20596__$1 = s__20596;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20596__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20601 = cljs.core.first(xs__6360__auto__);
var map__20601__$1 = cljs.core.__destructure_map(map__20601);
var src = map__20601__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20601__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20601__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20596__$1,map__20601,map__20601__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20594,map__20594__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20595_$_iter__20597(s__20598){
return (new cljs.core.LazySeq(null,((function (s__20596__$1,map__20601,map__20601__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20594,map__20594__$1,msg,info,reload_info){
return (function (){
var s__20598__$1 = s__20598;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20598__$1);
if(temp__5804__auto____$1){
var s__20598__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20598__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20598__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20600 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20599 = (0);
while(true){
if((i__20599 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20599);
cljs.core.chunk_append(b__20600,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20883 = (i__20599 + (1));
i__20599 = G__20883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20600),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20595_$_iter__20597(cljs.core.chunk_rest(s__20598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20600),null);
}
} else {
var warning = cljs.core.first(s__20598__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20595_$_iter__20597(cljs.core.rest(s__20598__$2)));
}
} else {
return null;
}
break;
}
});})(s__20596__$1,map__20601,map__20601__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20594,map__20594__$1,msg,info,reload_info))
,null,null));
});})(s__20596__$1,map__20601,map__20601__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20594,map__20594__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20595(cljs.core.rest(s__20596__$1)));
} else {
var G__20884 = cljs.core.rest(s__20596__$1);
s__20596__$1 = G__20884;
continue;
}
} else {
var G__20885 = cljs.core.rest(s__20596__$1);
s__20596__$1 = G__20885;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20602_20886 = cljs.core.seq(warnings);
var chunk__20603_20887 = null;
var count__20604_20888 = (0);
var i__20605_20889 = (0);
while(true){
if((i__20605_20889 < count__20604_20888)){
var map__20608_20890 = chunk__20603_20887.cljs$core$IIndexed$_nth$arity$2(null,i__20605_20889);
var map__20608_20891__$1 = cljs.core.__destructure_map(map__20608_20890);
var w_20892 = map__20608_20891__$1;
var msg_20893__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20608_20891__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20608_20891__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20608_20891__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20608_20891__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20896)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20894),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20895),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20893__$1)].join(''));


var G__20897 = seq__20602_20886;
var G__20898 = chunk__20603_20887;
var G__20899 = count__20604_20888;
var G__20900 = (i__20605_20889 + (1));
seq__20602_20886 = G__20897;
chunk__20603_20887 = G__20898;
count__20604_20888 = G__20899;
i__20605_20889 = G__20900;
continue;
} else {
var temp__5804__auto___20901 = cljs.core.seq(seq__20602_20886);
if(temp__5804__auto___20901){
var seq__20602_20902__$1 = temp__5804__auto___20901;
if(cljs.core.chunked_seq_QMARK_(seq__20602_20902__$1)){
var c__5568__auto___20903 = cljs.core.chunk_first(seq__20602_20902__$1);
var G__20904 = cljs.core.chunk_rest(seq__20602_20902__$1);
var G__20905 = c__5568__auto___20903;
var G__20906 = cljs.core.count(c__5568__auto___20903);
var G__20907 = (0);
seq__20602_20886 = G__20904;
chunk__20603_20887 = G__20905;
count__20604_20888 = G__20906;
i__20605_20889 = G__20907;
continue;
} else {
var map__20609_20908 = cljs.core.first(seq__20602_20902__$1);
var map__20609_20909__$1 = cljs.core.__destructure_map(map__20609_20908);
var w_20910 = map__20609_20909__$1;
var msg_20911__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609_20909__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609_20909__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609_20909__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609_20909__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20914)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20912),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20913),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20911__$1)].join(''));


var G__20915 = cljs.core.next(seq__20602_20902__$1);
var G__20916 = null;
var G__20917 = (0);
var G__20918 = (0);
seq__20602_20886 = G__20915;
chunk__20603_20887 = G__20916;
count__20604_20888 = G__20917;
i__20605_20889 = G__20918;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20592_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20592_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20610){
var map__20611 = p__20610;
var map__20611__$1 = cljs.core.__destructure_map(map__20611);
var msg = map__20611__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20611__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20611__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20612 = cljs.core.seq(updates);
var chunk__20614 = null;
var count__20615 = (0);
var i__20616 = (0);
while(true){
if((i__20616 < count__20615)){
var path = chunk__20614.cljs$core$IIndexed$_nth$arity$2(null,i__20616);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20726_20919 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20730_20920 = null;
var count__20731_20921 = (0);
var i__20732_20922 = (0);
while(true){
if((i__20732_20922 < count__20731_20921)){
var node_20923 = chunk__20730_20920.cljs$core$IIndexed$_nth$arity$2(null,i__20732_20922);
if(cljs.core.not(node_20923.shadow$old)){
var path_match_20924 = shadow.cljs.devtools.client.browser.match_paths(node_20923.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20924)){
var new_link_20925 = (function (){var G__20758 = node_20923.cloneNode(true);
G__20758.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20924),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20758;
})();
(node_20923.shadow$old = true);

(new_link_20925.onload = ((function (seq__20726_20919,chunk__20730_20920,count__20731_20921,i__20732_20922,seq__20612,chunk__20614,count__20615,i__20616,new_link_20925,path_match_20924,node_20923,path,map__20611,map__20611__$1,msg,updates,reload_info){
return (function (e){
var seq__20759_20926 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20761_20927 = null;
var count__20762_20928 = (0);
var i__20763_20929 = (0);
while(true){
if((i__20763_20929 < count__20762_20928)){
var map__20767_20930 = chunk__20761_20927.cljs$core$IIndexed$_nth$arity$2(null,i__20763_20929);
var map__20767_20931__$1 = cljs.core.__destructure_map(map__20767_20930);
var task_20932 = map__20767_20931__$1;
var fn_str_20933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20767_20931__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20767_20931__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20935 = goog.getObjectByName(fn_str_20933,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20934)].join(''));

(fn_obj_20935.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20935.cljs$core$IFn$_invoke$arity$2(path,new_link_20925) : fn_obj_20935.call(null,path,new_link_20925));


var G__20936 = seq__20759_20926;
var G__20937 = chunk__20761_20927;
var G__20938 = count__20762_20928;
var G__20939 = (i__20763_20929 + (1));
seq__20759_20926 = G__20936;
chunk__20761_20927 = G__20937;
count__20762_20928 = G__20938;
i__20763_20929 = G__20939;
continue;
} else {
var temp__5804__auto___20940 = cljs.core.seq(seq__20759_20926);
if(temp__5804__auto___20940){
var seq__20759_20941__$1 = temp__5804__auto___20940;
if(cljs.core.chunked_seq_QMARK_(seq__20759_20941__$1)){
var c__5568__auto___20942 = cljs.core.chunk_first(seq__20759_20941__$1);
var G__20943 = cljs.core.chunk_rest(seq__20759_20941__$1);
var G__20944 = c__5568__auto___20942;
var G__20945 = cljs.core.count(c__5568__auto___20942);
var G__20946 = (0);
seq__20759_20926 = G__20943;
chunk__20761_20927 = G__20944;
count__20762_20928 = G__20945;
i__20763_20929 = G__20946;
continue;
} else {
var map__20768_20947 = cljs.core.first(seq__20759_20941__$1);
var map__20768_20948__$1 = cljs.core.__destructure_map(map__20768_20947);
var task_20949 = map__20768_20948__$1;
var fn_str_20950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20768_20948__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20768_20948__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20952 = goog.getObjectByName(fn_str_20950,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20951)].join(''));

(fn_obj_20952.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20952.cljs$core$IFn$_invoke$arity$2(path,new_link_20925) : fn_obj_20952.call(null,path,new_link_20925));


var G__20953 = cljs.core.next(seq__20759_20941__$1);
var G__20954 = null;
var G__20955 = (0);
var G__20956 = (0);
seq__20759_20926 = G__20953;
chunk__20761_20927 = G__20954;
count__20762_20928 = G__20955;
i__20763_20929 = G__20956;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20923);
});})(seq__20726_20919,chunk__20730_20920,count__20731_20921,i__20732_20922,seq__20612,chunk__20614,count__20615,i__20616,new_link_20925,path_match_20924,node_20923,path,map__20611,map__20611__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20924], 0));

goog.dom.insertSiblingAfter(new_link_20925,node_20923);


var G__20957 = seq__20726_20919;
var G__20958 = chunk__20730_20920;
var G__20959 = count__20731_20921;
var G__20960 = (i__20732_20922 + (1));
seq__20726_20919 = G__20957;
chunk__20730_20920 = G__20958;
count__20731_20921 = G__20959;
i__20732_20922 = G__20960;
continue;
} else {
var G__20961 = seq__20726_20919;
var G__20962 = chunk__20730_20920;
var G__20963 = count__20731_20921;
var G__20964 = (i__20732_20922 + (1));
seq__20726_20919 = G__20961;
chunk__20730_20920 = G__20962;
count__20731_20921 = G__20963;
i__20732_20922 = G__20964;
continue;
}
} else {
var G__20965 = seq__20726_20919;
var G__20966 = chunk__20730_20920;
var G__20967 = count__20731_20921;
var G__20968 = (i__20732_20922 + (1));
seq__20726_20919 = G__20965;
chunk__20730_20920 = G__20966;
count__20731_20921 = G__20967;
i__20732_20922 = G__20968;
continue;
}
} else {
var temp__5804__auto___20969 = cljs.core.seq(seq__20726_20919);
if(temp__5804__auto___20969){
var seq__20726_20970__$1 = temp__5804__auto___20969;
if(cljs.core.chunked_seq_QMARK_(seq__20726_20970__$1)){
var c__5568__auto___20971 = cljs.core.chunk_first(seq__20726_20970__$1);
var G__20972 = cljs.core.chunk_rest(seq__20726_20970__$1);
var G__20973 = c__5568__auto___20971;
var G__20974 = cljs.core.count(c__5568__auto___20971);
var G__20975 = (0);
seq__20726_20919 = G__20972;
chunk__20730_20920 = G__20973;
count__20731_20921 = G__20974;
i__20732_20922 = G__20975;
continue;
} else {
var node_20976 = cljs.core.first(seq__20726_20970__$1);
if(cljs.core.not(node_20976.shadow$old)){
var path_match_20977 = shadow.cljs.devtools.client.browser.match_paths(node_20976.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20977)){
var new_link_20978 = (function (){var G__20769 = node_20976.cloneNode(true);
G__20769.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20977),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20769;
})();
(node_20976.shadow$old = true);

(new_link_20978.onload = ((function (seq__20726_20919,chunk__20730_20920,count__20731_20921,i__20732_20922,seq__20612,chunk__20614,count__20615,i__20616,new_link_20978,path_match_20977,node_20976,seq__20726_20970__$1,temp__5804__auto___20969,path,map__20611,map__20611__$1,msg,updates,reload_info){
return (function (e){
var seq__20770_20979 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20772_20980 = null;
var count__20773_20981 = (0);
var i__20774_20982 = (0);
while(true){
if((i__20774_20982 < count__20773_20981)){
var map__20778_20983 = chunk__20772_20980.cljs$core$IIndexed$_nth$arity$2(null,i__20774_20982);
var map__20778_20984__$1 = cljs.core.__destructure_map(map__20778_20983);
var task_20985 = map__20778_20984__$1;
var fn_str_20986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20778_20984__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20778_20984__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20988 = goog.getObjectByName(fn_str_20986,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20987)].join(''));

(fn_obj_20988.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20988.cljs$core$IFn$_invoke$arity$2(path,new_link_20978) : fn_obj_20988.call(null,path,new_link_20978));


var G__20989 = seq__20770_20979;
var G__20990 = chunk__20772_20980;
var G__20991 = count__20773_20981;
var G__20992 = (i__20774_20982 + (1));
seq__20770_20979 = G__20989;
chunk__20772_20980 = G__20990;
count__20773_20981 = G__20991;
i__20774_20982 = G__20992;
continue;
} else {
var temp__5804__auto___20993__$1 = cljs.core.seq(seq__20770_20979);
if(temp__5804__auto___20993__$1){
var seq__20770_20994__$1 = temp__5804__auto___20993__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20770_20994__$1)){
var c__5568__auto___20995 = cljs.core.chunk_first(seq__20770_20994__$1);
var G__20996 = cljs.core.chunk_rest(seq__20770_20994__$1);
var G__20997 = c__5568__auto___20995;
var G__20998 = cljs.core.count(c__5568__auto___20995);
var G__20999 = (0);
seq__20770_20979 = G__20996;
chunk__20772_20980 = G__20997;
count__20773_20981 = G__20998;
i__20774_20982 = G__20999;
continue;
} else {
var map__20779_21000 = cljs.core.first(seq__20770_20994__$1);
var map__20779_21001__$1 = cljs.core.__destructure_map(map__20779_21000);
var task_21002 = map__20779_21001__$1;
var fn_str_21003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779_21001__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20779_21001__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21005 = goog.getObjectByName(fn_str_21003,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21004)].join(''));

(fn_obj_21005.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21005.cljs$core$IFn$_invoke$arity$2(path,new_link_20978) : fn_obj_21005.call(null,path,new_link_20978));


var G__21006 = cljs.core.next(seq__20770_20994__$1);
var G__21007 = null;
var G__21008 = (0);
var G__21009 = (0);
seq__20770_20979 = G__21006;
chunk__20772_20980 = G__21007;
count__20773_20981 = G__21008;
i__20774_20982 = G__21009;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20976);
});})(seq__20726_20919,chunk__20730_20920,count__20731_20921,i__20732_20922,seq__20612,chunk__20614,count__20615,i__20616,new_link_20978,path_match_20977,node_20976,seq__20726_20970__$1,temp__5804__auto___20969,path,map__20611,map__20611__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20977], 0));

goog.dom.insertSiblingAfter(new_link_20978,node_20976);


var G__21010 = cljs.core.next(seq__20726_20970__$1);
var G__21011 = null;
var G__21012 = (0);
var G__21013 = (0);
seq__20726_20919 = G__21010;
chunk__20730_20920 = G__21011;
count__20731_20921 = G__21012;
i__20732_20922 = G__21013;
continue;
} else {
var G__21014 = cljs.core.next(seq__20726_20970__$1);
var G__21015 = null;
var G__21016 = (0);
var G__21017 = (0);
seq__20726_20919 = G__21014;
chunk__20730_20920 = G__21015;
count__20731_20921 = G__21016;
i__20732_20922 = G__21017;
continue;
}
} else {
var G__21018 = cljs.core.next(seq__20726_20970__$1);
var G__21019 = null;
var G__21020 = (0);
var G__21021 = (0);
seq__20726_20919 = G__21018;
chunk__20730_20920 = G__21019;
count__20731_20921 = G__21020;
i__20732_20922 = G__21021;
continue;
}
}
} else {
}
}
break;
}


var G__21022 = seq__20612;
var G__21023 = chunk__20614;
var G__21024 = count__20615;
var G__21025 = (i__20616 + (1));
seq__20612 = G__21022;
chunk__20614 = G__21023;
count__20615 = G__21024;
i__20616 = G__21025;
continue;
} else {
var G__21026 = seq__20612;
var G__21027 = chunk__20614;
var G__21028 = count__20615;
var G__21029 = (i__20616 + (1));
seq__20612 = G__21026;
chunk__20614 = G__21027;
count__20615 = G__21028;
i__20616 = G__21029;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20612);
if(temp__5804__auto__){
var seq__20612__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20612__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20612__$1);
var G__21030 = cljs.core.chunk_rest(seq__20612__$1);
var G__21031 = c__5568__auto__;
var G__21032 = cljs.core.count(c__5568__auto__);
var G__21033 = (0);
seq__20612 = G__21030;
chunk__20614 = G__21031;
count__20615 = G__21032;
i__20616 = G__21033;
continue;
} else {
var path = cljs.core.first(seq__20612__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20780_21034 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20784_21035 = null;
var count__20785_21036 = (0);
var i__20786_21037 = (0);
while(true){
if((i__20786_21037 < count__20785_21036)){
var node_21038 = chunk__20784_21035.cljs$core$IIndexed$_nth$arity$2(null,i__20786_21037);
if(cljs.core.not(node_21038.shadow$old)){
var path_match_21039 = shadow.cljs.devtools.client.browser.match_paths(node_21038.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21039)){
var new_link_21040 = (function (){var G__20812 = node_21038.cloneNode(true);
G__20812.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21039),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20812;
})();
(node_21038.shadow$old = true);

(new_link_21040.onload = ((function (seq__20780_21034,chunk__20784_21035,count__20785_21036,i__20786_21037,seq__20612,chunk__20614,count__20615,i__20616,new_link_21040,path_match_21039,node_21038,path,seq__20612__$1,temp__5804__auto__,map__20611,map__20611__$1,msg,updates,reload_info){
return (function (e){
var seq__20813_21041 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20815_21042 = null;
var count__20816_21043 = (0);
var i__20817_21044 = (0);
while(true){
if((i__20817_21044 < count__20816_21043)){
var map__20821_21045 = chunk__20815_21042.cljs$core$IIndexed$_nth$arity$2(null,i__20817_21044);
var map__20821_21046__$1 = cljs.core.__destructure_map(map__20821_21045);
var task_21047 = map__20821_21046__$1;
var fn_str_21048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20821_21046__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20821_21046__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21050 = goog.getObjectByName(fn_str_21048,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21049)].join(''));

(fn_obj_21050.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21050.cljs$core$IFn$_invoke$arity$2(path,new_link_21040) : fn_obj_21050.call(null,path,new_link_21040));


var G__21051 = seq__20813_21041;
var G__21052 = chunk__20815_21042;
var G__21053 = count__20816_21043;
var G__21054 = (i__20817_21044 + (1));
seq__20813_21041 = G__21051;
chunk__20815_21042 = G__21052;
count__20816_21043 = G__21053;
i__20817_21044 = G__21054;
continue;
} else {
var temp__5804__auto___21055__$1 = cljs.core.seq(seq__20813_21041);
if(temp__5804__auto___21055__$1){
var seq__20813_21056__$1 = temp__5804__auto___21055__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20813_21056__$1)){
var c__5568__auto___21057 = cljs.core.chunk_first(seq__20813_21056__$1);
var G__21058 = cljs.core.chunk_rest(seq__20813_21056__$1);
var G__21059 = c__5568__auto___21057;
var G__21060 = cljs.core.count(c__5568__auto___21057);
var G__21061 = (0);
seq__20813_21041 = G__21058;
chunk__20815_21042 = G__21059;
count__20816_21043 = G__21060;
i__20817_21044 = G__21061;
continue;
} else {
var map__20822_21062 = cljs.core.first(seq__20813_21056__$1);
var map__20822_21063__$1 = cljs.core.__destructure_map(map__20822_21062);
var task_21064 = map__20822_21063__$1;
var fn_str_21065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822_21063__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822_21063__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21067 = goog.getObjectByName(fn_str_21065,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21066)].join(''));

(fn_obj_21067.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21067.cljs$core$IFn$_invoke$arity$2(path,new_link_21040) : fn_obj_21067.call(null,path,new_link_21040));


var G__21068 = cljs.core.next(seq__20813_21056__$1);
var G__21069 = null;
var G__21070 = (0);
var G__21071 = (0);
seq__20813_21041 = G__21068;
chunk__20815_21042 = G__21069;
count__20816_21043 = G__21070;
i__20817_21044 = G__21071;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21038);
});})(seq__20780_21034,chunk__20784_21035,count__20785_21036,i__20786_21037,seq__20612,chunk__20614,count__20615,i__20616,new_link_21040,path_match_21039,node_21038,path,seq__20612__$1,temp__5804__auto__,map__20611,map__20611__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21039], 0));

goog.dom.insertSiblingAfter(new_link_21040,node_21038);


var G__21072 = seq__20780_21034;
var G__21073 = chunk__20784_21035;
var G__21074 = count__20785_21036;
var G__21075 = (i__20786_21037 + (1));
seq__20780_21034 = G__21072;
chunk__20784_21035 = G__21073;
count__20785_21036 = G__21074;
i__20786_21037 = G__21075;
continue;
} else {
var G__21076 = seq__20780_21034;
var G__21077 = chunk__20784_21035;
var G__21078 = count__20785_21036;
var G__21079 = (i__20786_21037 + (1));
seq__20780_21034 = G__21076;
chunk__20784_21035 = G__21077;
count__20785_21036 = G__21078;
i__20786_21037 = G__21079;
continue;
}
} else {
var G__21080 = seq__20780_21034;
var G__21081 = chunk__20784_21035;
var G__21082 = count__20785_21036;
var G__21083 = (i__20786_21037 + (1));
seq__20780_21034 = G__21080;
chunk__20784_21035 = G__21081;
count__20785_21036 = G__21082;
i__20786_21037 = G__21083;
continue;
}
} else {
var temp__5804__auto___21084__$1 = cljs.core.seq(seq__20780_21034);
if(temp__5804__auto___21084__$1){
var seq__20780_21085__$1 = temp__5804__auto___21084__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20780_21085__$1)){
var c__5568__auto___21086 = cljs.core.chunk_first(seq__20780_21085__$1);
var G__21087 = cljs.core.chunk_rest(seq__20780_21085__$1);
var G__21088 = c__5568__auto___21086;
var G__21089 = cljs.core.count(c__5568__auto___21086);
var G__21090 = (0);
seq__20780_21034 = G__21087;
chunk__20784_21035 = G__21088;
count__20785_21036 = G__21089;
i__20786_21037 = G__21090;
continue;
} else {
var node_21091 = cljs.core.first(seq__20780_21085__$1);
if(cljs.core.not(node_21091.shadow$old)){
var path_match_21092 = shadow.cljs.devtools.client.browser.match_paths(node_21091.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21092)){
var new_link_21093 = (function (){var G__20823 = node_21091.cloneNode(true);
G__20823.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21092),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20823;
})();
(node_21091.shadow$old = true);

(new_link_21093.onload = ((function (seq__20780_21034,chunk__20784_21035,count__20785_21036,i__20786_21037,seq__20612,chunk__20614,count__20615,i__20616,new_link_21093,path_match_21092,node_21091,seq__20780_21085__$1,temp__5804__auto___21084__$1,path,seq__20612__$1,temp__5804__auto__,map__20611,map__20611__$1,msg,updates,reload_info){
return (function (e){
var seq__20824_21094 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20826_21095 = null;
var count__20827_21096 = (0);
var i__20828_21097 = (0);
while(true){
if((i__20828_21097 < count__20827_21096)){
var map__20832_21098 = chunk__20826_21095.cljs$core$IIndexed$_nth$arity$2(null,i__20828_21097);
var map__20832_21099__$1 = cljs.core.__destructure_map(map__20832_21098);
var task_21100 = map__20832_21099__$1;
var fn_str_21101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832_21099__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832_21099__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21103 = goog.getObjectByName(fn_str_21101,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21102)].join(''));

(fn_obj_21103.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21103.cljs$core$IFn$_invoke$arity$2(path,new_link_21093) : fn_obj_21103.call(null,path,new_link_21093));


var G__21104 = seq__20824_21094;
var G__21105 = chunk__20826_21095;
var G__21106 = count__20827_21096;
var G__21107 = (i__20828_21097 + (1));
seq__20824_21094 = G__21104;
chunk__20826_21095 = G__21105;
count__20827_21096 = G__21106;
i__20828_21097 = G__21107;
continue;
} else {
var temp__5804__auto___21108__$2 = cljs.core.seq(seq__20824_21094);
if(temp__5804__auto___21108__$2){
var seq__20824_21109__$1 = temp__5804__auto___21108__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20824_21109__$1)){
var c__5568__auto___21110 = cljs.core.chunk_first(seq__20824_21109__$1);
var G__21111 = cljs.core.chunk_rest(seq__20824_21109__$1);
var G__21112 = c__5568__auto___21110;
var G__21113 = cljs.core.count(c__5568__auto___21110);
var G__21114 = (0);
seq__20824_21094 = G__21111;
chunk__20826_21095 = G__21112;
count__20827_21096 = G__21113;
i__20828_21097 = G__21114;
continue;
} else {
var map__20833_21115 = cljs.core.first(seq__20824_21109__$1);
var map__20833_21116__$1 = cljs.core.__destructure_map(map__20833_21115);
var task_21117 = map__20833_21116__$1;
var fn_str_21118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20833_21116__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20833_21116__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21120 = goog.getObjectByName(fn_str_21118,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21119)].join(''));

(fn_obj_21120.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21120.cljs$core$IFn$_invoke$arity$2(path,new_link_21093) : fn_obj_21120.call(null,path,new_link_21093));


var G__21121 = cljs.core.next(seq__20824_21109__$1);
var G__21122 = null;
var G__21123 = (0);
var G__21124 = (0);
seq__20824_21094 = G__21121;
chunk__20826_21095 = G__21122;
count__20827_21096 = G__21123;
i__20828_21097 = G__21124;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21091);
});})(seq__20780_21034,chunk__20784_21035,count__20785_21036,i__20786_21037,seq__20612,chunk__20614,count__20615,i__20616,new_link_21093,path_match_21092,node_21091,seq__20780_21085__$1,temp__5804__auto___21084__$1,path,seq__20612__$1,temp__5804__auto__,map__20611,map__20611__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21092], 0));

goog.dom.insertSiblingAfter(new_link_21093,node_21091);


var G__21125 = cljs.core.next(seq__20780_21085__$1);
var G__21126 = null;
var G__21127 = (0);
var G__21128 = (0);
seq__20780_21034 = G__21125;
chunk__20784_21035 = G__21126;
count__20785_21036 = G__21127;
i__20786_21037 = G__21128;
continue;
} else {
var G__21129 = cljs.core.next(seq__20780_21085__$1);
var G__21130 = null;
var G__21131 = (0);
var G__21132 = (0);
seq__20780_21034 = G__21129;
chunk__20784_21035 = G__21130;
count__20785_21036 = G__21131;
i__20786_21037 = G__21132;
continue;
}
} else {
var G__21133 = cljs.core.next(seq__20780_21085__$1);
var G__21134 = null;
var G__21135 = (0);
var G__21136 = (0);
seq__20780_21034 = G__21133;
chunk__20784_21035 = G__21134;
count__20785_21036 = G__21135;
i__20786_21037 = G__21136;
continue;
}
}
} else {
}
}
break;
}


var G__21137 = cljs.core.next(seq__20612__$1);
var G__21138 = null;
var G__21139 = (0);
var G__21140 = (0);
seq__20612 = G__21137;
chunk__20614 = G__21138;
count__20615 = G__21139;
i__20616 = G__21140;
continue;
} else {
var G__21141 = cljs.core.next(seq__20612__$1);
var G__21142 = null;
var G__21143 = (0);
var G__21144 = (0);
seq__20612 = G__21141;
chunk__20614 = G__21142;
count__20615 = G__21143;
i__20616 = G__21144;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__20834){
var map__20835 = p__20834;
var map__20835__$1 = cljs.core.__destructure_map(map__20835);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__20836,done,error){
var map__20837 = p__20836;
var map__20837__$1 = cljs.core.__destructure_map(map__20837);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20837__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__20838,done,error){
var map__20839 = p__20838;
var map__20839__$1 = cljs.core.__destructure_map(map__20839);
var msg = map__20839__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20840){
var map__20841 = p__20840;
var map__20841__$1 = cljs.core.__destructure_map(map__20841);
var src = map__20841__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20841__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__20842 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20842) : done.call(null,G__20842));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__20843){
var map__20844 = p__20843;
var map__20844__$1 = cljs.core.__destructure_map(map__20844);
var msg__$1 = map__20844__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20844__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e20845){var ex = e20845;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__20846){
var map__20847 = p__20846;
var map__20847__$1 = cljs.core.__destructure_map(map__20847);
var env = map__20847__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20847__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__20848){
var map__20849 = p__20848;
var map__20849__$1 = cljs.core.__destructure_map(map__20849);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__20850){
var map__20851 = p__20850;
var map__20851__$1 = cljs.core.__destructure_map(map__20851);
var svc = map__20851__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20851__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
