goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14211){
var map__14212 = p__14211;
var map__14212__$1 = cljs.core.__destructure_map(map__14212);
var m = map__14212__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14212__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14212__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__14240_14578 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14241_14579 = null;
var count__14242_14580 = (0);
var i__14243_14581 = (0);
while(true){
if((i__14243_14581 < count__14242_14580)){
var f_14582 = chunk__14241_14579.cljs$core$IIndexed$_nth$arity$2(null,i__14243_14581);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_14582], 0));


var G__14583 = seq__14240_14578;
var G__14584 = chunk__14241_14579;
var G__14585 = count__14242_14580;
var G__14586 = (i__14243_14581 + (1));
seq__14240_14578 = G__14583;
chunk__14241_14579 = G__14584;
count__14242_14580 = G__14585;
i__14243_14581 = G__14586;
continue;
} else {
var temp__5804__auto___14587 = cljs.core.seq(seq__14240_14578);
if(temp__5804__auto___14587){
var seq__14240_14588__$1 = temp__5804__auto___14587;
if(cljs.core.chunked_seq_QMARK_(seq__14240_14588__$1)){
var c__5568__auto___14589 = cljs.core.chunk_first(seq__14240_14588__$1);
var G__14590 = cljs.core.chunk_rest(seq__14240_14588__$1);
var G__14591 = c__5568__auto___14589;
var G__14592 = cljs.core.count(c__5568__auto___14589);
var G__14593 = (0);
seq__14240_14578 = G__14590;
chunk__14241_14579 = G__14591;
count__14242_14580 = G__14592;
i__14243_14581 = G__14593;
continue;
} else {
var f_14594 = cljs.core.first(seq__14240_14588__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_14594], 0));


var G__14595 = cljs.core.next(seq__14240_14588__$1);
var G__14596 = null;
var G__14597 = (0);
var G__14598 = (0);
seq__14240_14578 = G__14595;
chunk__14241_14579 = G__14596;
count__14242_14580 = G__14597;
i__14243_14581 = G__14598;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14599 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_14599], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_14599)))?cljs.core.second(arglists_14599):arglists_14599)], 0));
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
var seq__14286_14601 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14287_14602 = null;
var count__14288_14603 = (0);
var i__14289_14604 = (0);
while(true){
if((i__14289_14604 < count__14288_14603)){
var vec__14304_14605 = chunk__14287_14602.cljs$core$IIndexed$_nth$arity$2(null,i__14289_14604);
var name_14606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14304_14605,(0),null);
var map__14307_14607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14304_14605,(1),null);
var map__14307_14608__$1 = cljs.core.__destructure_map(map__14307_14607);
var doc_14609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14307_14608__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14307_14608__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_14606], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_14610], 0));

if(cljs.core.truth_(doc_14609)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_14609], 0));
} else {
}


var G__14615 = seq__14286_14601;
var G__14616 = chunk__14287_14602;
var G__14617 = count__14288_14603;
var G__14618 = (i__14289_14604 + (1));
seq__14286_14601 = G__14615;
chunk__14287_14602 = G__14616;
count__14288_14603 = G__14617;
i__14289_14604 = G__14618;
continue;
} else {
var temp__5804__auto___14619 = cljs.core.seq(seq__14286_14601);
if(temp__5804__auto___14619){
var seq__14286_14620__$1 = temp__5804__auto___14619;
if(cljs.core.chunked_seq_QMARK_(seq__14286_14620__$1)){
var c__5568__auto___14621 = cljs.core.chunk_first(seq__14286_14620__$1);
var G__14622 = cljs.core.chunk_rest(seq__14286_14620__$1);
var G__14623 = c__5568__auto___14621;
var G__14624 = cljs.core.count(c__5568__auto___14621);
var G__14625 = (0);
seq__14286_14601 = G__14622;
chunk__14287_14602 = G__14623;
count__14288_14603 = G__14624;
i__14289_14604 = G__14625;
continue;
} else {
var vec__14326_14627 = cljs.core.first(seq__14286_14620__$1);
var name_14628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14326_14627,(0),null);
var map__14329_14629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14326_14627,(1),null);
var map__14329_14630__$1 = cljs.core.__destructure_map(map__14329_14629);
var doc_14631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329_14630__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329_14630__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_14628], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_14632], 0));

if(cljs.core.truth_(doc_14631)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_14631], 0));
} else {
}


var G__14638 = cljs.core.next(seq__14286_14620__$1);
var G__14639 = null;
var G__14640 = (0);
var G__14641 = (0);
seq__14286_14601 = G__14638;
chunk__14287_14602 = G__14639;
count__14288_14603 = G__14640;
i__14289_14604 = G__14641;
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

var seq__14331 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14332 = null;
var count__14333 = (0);
var i__14334 = (0);
while(true){
if((i__14334 < count__14333)){
var role = chunk__14332.cljs$core$IIndexed$_nth$arity$2(null,i__14334);
var temp__5804__auto___14642__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___14642__$1)){
var spec_14643 = temp__5804__auto___14642__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_14643)], 0));
} else {
}


var G__14644 = seq__14331;
var G__14645 = chunk__14332;
var G__14646 = count__14333;
var G__14647 = (i__14334 + (1));
seq__14331 = G__14644;
chunk__14332 = G__14645;
count__14333 = G__14646;
i__14334 = G__14647;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__14331);
if(temp__5804__auto____$1){
var seq__14331__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__14331__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14331__$1);
var G__14648 = cljs.core.chunk_rest(seq__14331__$1);
var G__14649 = c__5568__auto__;
var G__14650 = cljs.core.count(c__5568__auto__);
var G__14651 = (0);
seq__14331 = G__14648;
chunk__14332 = G__14649;
count__14333 = G__14650;
i__14334 = G__14651;
continue;
} else {
var role = cljs.core.first(seq__14331__$1);
var temp__5804__auto___14652__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___14652__$2)){
var spec_14653 = temp__5804__auto___14652__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_14653)], 0));
} else {
}


var G__14654 = cljs.core.next(seq__14331__$1);
var G__14655 = null;
var G__14656 = (0);
var G__14657 = (0);
seq__14331 = G__14654;
chunk__14332 = G__14655;
count__14333 = G__14656;
i__14334 = G__14657;
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
var G__14660 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__14661 = cljs.core.ex_cause(t);
via = G__14660;
t = G__14661;
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
var map__14467 = datafied_throwable;
var map__14467__$1 = cljs.core.__destructure_map(map__14467);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14467__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14467__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14467__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__14468 = cljs.core.last(via);
var map__14468__$1 = cljs.core.__destructure_map(map__14468);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14468__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14468__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14468__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__14469 = data;
var map__14469__$1 = cljs.core.__destructure_map(map__14469);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14469__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14469__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14469__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__14470 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__14470__$1 = cljs.core.__destructure_map(map__14470);
var top_data = map__14470__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14470__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14476 = phase;
var G__14476__$1 = (((G__14476 instanceof cljs.core.Keyword))?G__14476.fqn:null);
switch (G__14476__$1) {
case "read-source":
var map__14477 = data;
var map__14477__$1 = cljs.core.__destructure_map(map__14477);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14477__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14477__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__14479 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__14479__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14479,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14479);
var G__14479__$2 = (cljs.core.truth_((function (){var fexpr__14480 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14480.cljs$core$IFn$_invoke$arity$1 ? fexpr__14480.cljs$core$IFn$_invoke$arity$1(source) : fexpr__14480.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14479__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14479__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14479__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14479__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__14482 = top_data;
var G__14482__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14482,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14482);
var G__14482__$2 = (cljs.core.truth_((function (){var fexpr__14483 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14483.cljs$core$IFn$_invoke$arity$1 ? fexpr__14483.cljs$core$IFn$_invoke$arity$1(source) : fexpr__14483.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14482__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14482__$1);
var G__14482__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14482__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14482__$2);
var G__14482__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14482__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14482__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14482__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14482__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__14485 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14485,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14485,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14485,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14485,(3),null);
var G__14488 = top_data;
var G__14488__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14488,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__14488);
var G__14488__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14488__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__14488__$1);
var G__14488__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14488__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__14488__$2);
var G__14488__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14488__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14488__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14488__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14488__$4;
}

break;
case "execution":
var vec__14499 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14499,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14499,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14499,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14499,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__14463_SHARP_){
var or__5045__auto__ = (p1__14463_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__14506 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14506.cljs$core$IFn$_invoke$arity$1 ? fexpr__14506.cljs$core$IFn$_invoke$arity$1(p1__14463_SHARP_) : fexpr__14506.call(null,p1__14463_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__14507 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__14507__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14507,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__14507);
var G__14507__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14507__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14507__$1);
var G__14507__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14507__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__14507__$2);
var G__14507__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14507__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__14507__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14507__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14507__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14476__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__14521){
var map__14522 = p__14521;
var map__14522__$1 = cljs.core.__destructure_map(map__14522);
var triage_data = map__14522__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14522__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14522__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14522__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14522__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14522__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14522__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14522__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14522__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__14523 = phase;
var G__14523__$1 = (((G__14523 instanceof cljs.core.Keyword))?G__14523.fqn:null);
switch (G__14523__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__14524 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__14525 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14526 = loc;
var G__14527 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14528_14695 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14529_14696 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14530_14697 = true;
var _STAR_print_fn_STAR__temp_val__14531_14698 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14530_14697);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14531_14698);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14515_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14515_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14529_14696);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14528_14695);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__14524,G__14525,G__14526,G__14527) : format.call(null,G__14524,G__14525,G__14526,G__14527));

break;
case "macroexpansion":
var G__14533 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__14534 = cause_type;
var G__14535 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14536 = loc;
var G__14537 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14533,G__14534,G__14535,G__14536,G__14537) : format.call(null,G__14533,G__14534,G__14535,G__14536,G__14537));

break;
case "compile-syntax-check":
var G__14538 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__14539 = cause_type;
var G__14540 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14541 = loc;
var G__14542 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14538,G__14539,G__14540,G__14541,G__14542) : format.call(null,G__14538,G__14539,G__14540,G__14541,G__14542));

break;
case "compilation":
var G__14543 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__14544 = cause_type;
var G__14545 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14546 = loc;
var G__14547 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14543,G__14544,G__14545,G__14546,G__14547) : format.call(null,G__14543,G__14544,G__14545,G__14546,G__14547));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__14550 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__14551 = symbol;
var G__14552 = loc;
var G__14553 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14555_14707 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14556_14708 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14557_14709 = true;
var _STAR_print_fn_STAR__temp_val__14558_14710 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14557_14709);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14558_14710);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14520_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14520_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14556_14708);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14555_14707);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__14550,G__14551,G__14552,G__14553) : format.call(null,G__14550,G__14551,G__14552,G__14553));
} else {
var G__14568 = "Execution error%s at %s(%s).\n%s\n";
var G__14569 = cause_type;
var G__14570 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14571 = loc;
var G__14572 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14568,G__14569,G__14570,G__14571,G__14572) : format.call(null,G__14568,G__14569,G__14570,G__14571,G__14572));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14523__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
