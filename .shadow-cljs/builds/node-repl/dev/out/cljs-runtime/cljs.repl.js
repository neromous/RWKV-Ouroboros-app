goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14011){
var map__14012 = p__14011;
var map__14012__$1 = cljs.core.__destructure_map(map__14012);
var m = map__14012__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14012__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14012__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14024_14474 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14025_14475 = null;
var count__14026_14476 = (0);
var i__14027_14477 = (0);
while(true){
if((i__14027_14477 < count__14026_14476)){
var f_14479 = chunk__14025_14475.cljs$core$IIndexed$_nth$arity$2(null,i__14027_14477);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_14479], 0));


var G__14480 = seq__14024_14474;
var G__14481 = chunk__14025_14475;
var G__14482 = count__14026_14476;
var G__14483 = (i__14027_14477 + (1));
seq__14024_14474 = G__14480;
chunk__14025_14475 = G__14481;
count__14026_14476 = G__14482;
i__14027_14477 = G__14483;
continue;
} else {
var temp__5804__auto___14484 = cljs.core.seq(seq__14024_14474);
if(temp__5804__auto___14484){
var seq__14024_14485__$1 = temp__5804__auto___14484;
if(cljs.core.chunked_seq_QMARK_(seq__14024_14485__$1)){
var c__5568__auto___14486 = cljs.core.chunk_first(seq__14024_14485__$1);
var G__14487 = cljs.core.chunk_rest(seq__14024_14485__$1);
var G__14488 = c__5568__auto___14486;
var G__14489 = cljs.core.count(c__5568__auto___14486);
var G__14490 = (0);
seq__14024_14474 = G__14487;
chunk__14025_14475 = G__14488;
count__14026_14476 = G__14489;
i__14027_14477 = G__14490;
continue;
} else {
var f_14491 = cljs.core.first(seq__14024_14485__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_14491], 0));


var G__14492 = cljs.core.next(seq__14024_14485__$1);
var G__14493 = null;
var G__14494 = (0);
var G__14495 = (0);
seq__14024_14474 = G__14492;
chunk__14025_14475 = G__14493;
count__14026_14476 = G__14494;
i__14027_14477 = G__14495;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14496 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_14496], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_14496)))?cljs.core.second(arglists_14496):arglists_14496)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14055_14499 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14056_14500 = null;
var count__14057_14501 = (0);
var i__14058_14502 = (0);
while(true){
if((i__14058_14502 < count__14057_14501)){
var vec__14152_14503 = chunk__14056_14500.cljs$core$IIndexed$_nth$arity$2(null,i__14058_14502);
var name_14504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14152_14503,(0),null);
var map__14155_14505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14152_14503,(1),null);
var map__14155_14506__$1 = cljs.core.__destructure_map(map__14155_14505);
var doc_14511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14155_14506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14155_14506__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_14504], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_14512], 0));

if(cljs.core.truth_(doc_14511)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_14511], 0));
} else {
}


var G__14526 = seq__14055_14499;
var G__14527 = chunk__14056_14500;
var G__14528 = count__14057_14501;
var G__14529 = (i__14058_14502 + (1));
seq__14055_14499 = G__14526;
chunk__14056_14500 = G__14527;
count__14057_14501 = G__14528;
i__14058_14502 = G__14529;
continue;
} else {
var temp__5804__auto___14534 = cljs.core.seq(seq__14055_14499);
if(temp__5804__auto___14534){
var seq__14055_14535__$1 = temp__5804__auto___14534;
if(cljs.core.chunked_seq_QMARK_(seq__14055_14535__$1)){
var c__5568__auto___14536 = cljs.core.chunk_first(seq__14055_14535__$1);
var G__14537 = cljs.core.chunk_rest(seq__14055_14535__$1);
var G__14538 = c__5568__auto___14536;
var G__14539 = cljs.core.count(c__5568__auto___14536);
var G__14540 = (0);
seq__14055_14499 = G__14537;
chunk__14056_14500 = G__14538;
count__14057_14501 = G__14539;
i__14058_14502 = G__14540;
continue;
} else {
var vec__14216_14541 = cljs.core.first(seq__14055_14535__$1);
var name_14542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14216_14541,(0),null);
var map__14221_14543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14216_14541,(1),null);
var map__14221_14544__$1 = cljs.core.__destructure_map(map__14221_14543);
var doc_14545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14221_14544__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14221_14544__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_14542], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_14546], 0));

if(cljs.core.truth_(doc_14545)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_14545], 0));
} else {
}


var G__14548 = cljs.core.next(seq__14055_14535__$1);
var G__14549 = null;
var G__14550 = (0);
var G__14551 = (0);
seq__14055_14499 = G__14548;
chunk__14056_14500 = G__14549;
count__14057_14501 = G__14550;
i__14058_14502 = G__14551;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__14265 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14266 = null;
var count__14267 = (0);
var i__14268 = (0);
while(true){
if((i__14268 < count__14267)){
var role = chunk__14266.cljs$core$IIndexed$_nth$arity$2(null,i__14268);
var temp__5804__auto___14554__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___14554__$1)){
var spec_14555 = temp__5804__auto___14554__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_14555)], 0));
} else {
}


var G__14557 = seq__14265;
var G__14558 = chunk__14266;
var G__14559 = count__14267;
var G__14560 = (i__14268 + (1));
seq__14265 = G__14557;
chunk__14266 = G__14558;
count__14267 = G__14559;
i__14268 = G__14560;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__14265);
if(temp__5804__auto____$1){
var seq__14265__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__14265__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14265__$1);
var G__14564 = cljs.core.chunk_rest(seq__14265__$1);
var G__14565 = c__5568__auto__;
var G__14566 = cljs.core.count(c__5568__auto__);
var G__14567 = (0);
seq__14265 = G__14564;
chunk__14266 = G__14565;
count__14267 = G__14566;
i__14268 = G__14567;
continue;
} else {
var role = cljs.core.first(seq__14265__$1);
var temp__5804__auto___14568__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___14568__$2)){
var spec_14569 = temp__5804__auto___14568__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_14569)], 0));
} else {
}


var G__14570 = cljs.core.next(seq__14265__$1);
var G__14571 = null;
var G__14572 = (0);
var G__14573 = (0);
seq__14265 = G__14570;
chunk__14266 = G__14571;
count__14267 = G__14572;
i__14268 = G__14573;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__14579 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__14580 = cljs.core.ex_cause(t);
via = G__14579;
t = G__14580;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__14329 = datafied_throwable;
var map__14329__$1 = cljs.core.__destructure_map(map__14329);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14329__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__14330 = cljs.core.last(via);
var map__14330__$1 = cljs.core.__destructure_map(map__14330);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14330__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14330__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14330__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__14331 = data;
var map__14331__$1 = cljs.core.__destructure_map(map__14331);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14331__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14331__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14331__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__14332 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__14332__$1 = cljs.core.__destructure_map(map__14332);
var top_data = map__14332__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14332__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14340 = phase;
var G__14340__$1 = (((G__14340 instanceof cljs.core.Keyword))?G__14340.fqn:null);
switch (G__14340__$1) {
case "read-source":
var map__14347 = data;
var map__14347__$1 = cljs.core.__destructure_map(map__14347);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14347__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14347__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__14348 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__14348__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14348,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14348);
var G__14348__$2 = (cljs.core.truth_((function (){var fexpr__14349 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14349.cljs$core$IFn$_invoke$arity$1 ? fexpr__14349.cljs$core$IFn$_invoke$arity$1(source) : fexpr__14349.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14348__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14348__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14348__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__14356 = top_data;
var G__14356__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14356,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14356);
var G__14356__$2 = (cljs.core.truth_((function (){var fexpr__14357 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14357.cljs$core$IFn$_invoke$arity$1 ? fexpr__14357.cljs$core$IFn$_invoke$arity$1(source) : fexpr__14357.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14356__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14356__$1);
var G__14356__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14356__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14356__$2);
var G__14356__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14356__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14356__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14356__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14356__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__14370 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370,(3),null);
var G__14374 = top_data;
var G__14374__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14374,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__14374);
var G__14374__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14374__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__14374__$1);
var G__14374__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14374__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__14374__$2);
var G__14374__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14374__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14374__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14374__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14374__$4;
}

break;
case "execution":
var vec__14382 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14382,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__14318_SHARP_){
var or__5045__auto__ = (p1__14318_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__14387 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14387.cljs$core$IFn$_invoke$arity$1 ? fexpr__14387.cljs$core$IFn$_invoke$arity$1(p1__14318_SHARP_) : fexpr__14387.call(null,p1__14318_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__14388 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__14388__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14388,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__14388);
var G__14388__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14388__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14388__$1);
var G__14388__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14388__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__14388__$2);
var G__14388__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14388__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__14388__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14388__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14388__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14340__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__14396){
var map__14397 = p__14396;
var map__14397__$1 = cljs.core.__destructure_map(map__14397);
var triage_data = map__14397__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14397__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14397__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14397__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14397__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14397__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14397__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14397__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14397__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__14400 = phase;
var G__14400__$1 = (((G__14400 instanceof cljs.core.Keyword))?G__14400.fqn:null);
switch (G__14400__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__14406 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__14407 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14408 = loc;
var G__14409 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14417_14621 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14418_14622 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14419_14623 = true;
var _STAR_print_fn_STAR__temp_val__14420_14624 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14419_14623);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14420_14624);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14394_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14394_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14418_14622);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14417_14621);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__14406,G__14407,G__14408,G__14409) : format.call(null,G__14406,G__14407,G__14408,G__14409));

break;
case "macroexpansion":
var G__14428 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__14429 = cause_type;
var G__14430 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14431 = loc;
var G__14432 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14428,G__14429,G__14430,G__14431,G__14432) : format.call(null,G__14428,G__14429,G__14430,G__14431,G__14432));

break;
case "compile-syntax-check":
var G__14433 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__14434 = cause_type;
var G__14435 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14436 = loc;
var G__14437 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14433,G__14434,G__14435,G__14436,G__14437) : format.call(null,G__14433,G__14434,G__14435,G__14436,G__14437));

break;
case "compilation":
var G__14438 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__14439 = cause_type;
var G__14440 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14441 = loc;
var G__14442 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14438,G__14439,G__14440,G__14441,G__14442) : format.call(null,G__14438,G__14439,G__14440,G__14441,G__14442));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__14444 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__14445 = symbol;
var G__14446 = loc;
var G__14447 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14449_14632 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14450_14633 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14451_14634 = true;
var _STAR_print_fn_STAR__temp_val__14452_14635 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14451_14634);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14452_14635);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14395_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14395_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14450_14633);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14449_14632);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__14444,G__14445,G__14446,G__14447) : format.call(null,G__14444,G__14445,G__14446,G__14447));
} else {
var G__14462 = "Execution error%s at %s(%s).\n%s\n";
var G__14463 = cause_type;
var G__14464 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14465 = loc;
var G__14466 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14462,G__14463,G__14464,G__14465,G__14466) : format.call(null,G__14462,G__14463,G__14464,G__14465,G__14466));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14400__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
