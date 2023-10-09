goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16689){
var map__16690 = p__16689;
var map__16690__$1 = cljs.core.__destructure_map(map__16690);
var m = map__16690__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16690__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16690__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__16693_17180 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16695_17181 = null;
var count__16696_17182 = (0);
var i__16697_17183 = (0);
while(true){
if((i__16697_17183 < count__16696_17182)){
var f_17184 = chunk__16695_17181.cljs$core$IIndexed$_nth$arity$2(null,i__16697_17183);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17184], 0));


var G__17185 = seq__16693_17180;
var G__17186 = chunk__16695_17181;
var G__17187 = count__16696_17182;
var G__17188 = (i__16697_17183 + (1));
seq__16693_17180 = G__17185;
chunk__16695_17181 = G__17186;
count__16696_17182 = G__17187;
i__16697_17183 = G__17188;
continue;
} else {
var temp__5804__auto___17190 = cljs.core.seq(seq__16693_17180);
if(temp__5804__auto___17190){
var seq__16693_17191__$1 = temp__5804__auto___17190;
if(cljs.core.chunked_seq_QMARK_(seq__16693_17191__$1)){
var c__5568__auto___17192 = cljs.core.chunk_first(seq__16693_17191__$1);
var G__17193 = cljs.core.chunk_rest(seq__16693_17191__$1);
var G__17194 = c__5568__auto___17192;
var G__17195 = cljs.core.count(c__5568__auto___17192);
var G__17196 = (0);
seq__16693_17180 = G__17193;
chunk__16695_17181 = G__17194;
count__16696_17182 = G__17195;
i__16697_17183 = G__17196;
continue;
} else {
var f_17198 = cljs.core.first(seq__16693_17191__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17198], 0));


var G__17199 = cljs.core.next(seq__16693_17191__$1);
var G__17200 = null;
var G__17201 = (0);
var G__17202 = (0);
seq__16693_17180 = G__17199;
chunk__16695_17181 = G__17200;
count__16696_17182 = G__17201;
i__16697_17183 = G__17202;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17204 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17204], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17204)))?cljs.core.second(arglists_17204):arglists_17204)], 0));
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
var seq__16727_17207 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16728_17208 = null;
var count__16729_17209 = (0);
var i__16730_17210 = (0);
while(true){
if((i__16730_17210 < count__16729_17209)){
var vec__16758_17215 = chunk__16728_17208.cljs$core$IIndexed$_nth$arity$2(null,i__16730_17210);
var name_17216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16758_17215,(0),null);
var map__16761_17217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16758_17215,(1),null);
var map__16761_17218__$1 = cljs.core.__destructure_map(map__16761_17217);
var doc_17219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16761_17218__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16761_17218__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17216], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17220], 0));

if(cljs.core.truth_(doc_17219)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17219], 0));
} else {
}


var G__17222 = seq__16727_17207;
var G__17223 = chunk__16728_17208;
var G__17224 = count__16729_17209;
var G__17225 = (i__16730_17210 + (1));
seq__16727_17207 = G__17222;
chunk__16728_17208 = G__17223;
count__16729_17209 = G__17224;
i__16730_17210 = G__17225;
continue;
} else {
var temp__5804__auto___17226 = cljs.core.seq(seq__16727_17207);
if(temp__5804__auto___17226){
var seq__16727_17228__$1 = temp__5804__auto___17226;
if(cljs.core.chunked_seq_QMARK_(seq__16727_17228__$1)){
var c__5568__auto___17231 = cljs.core.chunk_first(seq__16727_17228__$1);
var G__17232 = cljs.core.chunk_rest(seq__16727_17228__$1);
var G__17233 = c__5568__auto___17231;
var G__17234 = cljs.core.count(c__5568__auto___17231);
var G__17235 = (0);
seq__16727_17207 = G__17232;
chunk__16728_17208 = G__17233;
count__16729_17209 = G__17234;
i__16730_17210 = G__17235;
continue;
} else {
var vec__16763_17236 = cljs.core.first(seq__16727_17228__$1);
var name_17237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763_17236,(0),null);
var map__16766_17239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16763_17236,(1),null);
var map__16766_17240__$1 = cljs.core.__destructure_map(map__16766_17239);
var doc_17241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16766_17240__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16766_17240__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17237], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17242], 0));

if(cljs.core.truth_(doc_17241)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17241], 0));
} else {
}


var G__17247 = cljs.core.next(seq__16727_17228__$1);
var G__17248 = null;
var G__17249 = (0);
var G__17250 = (0);
seq__16727_17207 = G__17247;
chunk__16728_17208 = G__17248;
count__16729_17209 = G__17249;
i__16730_17210 = G__17250;
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

var seq__16788 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16789 = null;
var count__16790 = (0);
var i__16792 = (0);
while(true){
if((i__16792 < count__16790)){
var role = chunk__16789.cljs$core$IIndexed$_nth$arity$2(null,i__16792);
var temp__5804__auto___17254__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17254__$1)){
var spec_17256 = temp__5804__auto___17254__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17256)], 0));
} else {
}


var G__17257 = seq__16788;
var G__17258 = chunk__16789;
var G__17259 = count__16790;
var G__17260 = (i__16792 + (1));
seq__16788 = G__17257;
chunk__16789 = G__17258;
count__16790 = G__17259;
i__16792 = G__17260;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__16788);
if(temp__5804__auto____$1){
var seq__16788__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__16788__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16788__$1);
var G__17262 = cljs.core.chunk_rest(seq__16788__$1);
var G__17263 = c__5568__auto__;
var G__17264 = cljs.core.count(c__5568__auto__);
var G__17265 = (0);
seq__16788 = G__17262;
chunk__16789 = G__17263;
count__16790 = G__17264;
i__16792 = G__17265;
continue;
} else {
var role = cljs.core.first(seq__16788__$1);
var temp__5804__auto___17267__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17267__$2)){
var spec_17269 = temp__5804__auto___17267__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17269)], 0));
} else {
}


var G__17270 = cljs.core.next(seq__16788__$1);
var G__17271 = null;
var G__17272 = (0);
var G__17273 = (0);
seq__16788 = G__17270;
chunk__16789 = G__17271;
count__16790 = G__17272;
i__16792 = G__17273;
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
var G__17278 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__17279 = cljs.core.ex_cause(t);
via = G__17278;
t = G__17279;
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
var map__16995 = datafied_throwable;
var map__16995__$1 = cljs.core.__destructure_map(map__16995);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16995__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16995__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16995__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__16996 = cljs.core.last(via);
var map__16996__$1 = cljs.core.__destructure_map(map__16996);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16996__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16996__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16996__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__16997 = data;
var map__16997__$1 = cljs.core.__destructure_map(map__16997);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16997__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16997__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16997__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__16998 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__16998__$1 = cljs.core.__destructure_map(map__16998);
var top_data = map__16998__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16998__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17008 = phase;
var G__17008__$1 = (((G__17008 instanceof cljs.core.Keyword))?G__17008.fqn:null);
switch (G__17008__$1) {
case "read-source":
var map__17009 = data;
var map__17009__$1 = cljs.core.__destructure_map(map__17009);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17009__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17009__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17012 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17012__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17012,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17012);
var G__17012__$2 = (cljs.core.truth_((function (){var fexpr__17015 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17015.cljs$core$IFn$_invoke$arity$1 ? fexpr__17015.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17015.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17012__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17012__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17012__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17012__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17020 = top_data;
var G__17020__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17020,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17020);
var G__17020__$2 = (cljs.core.truth_((function (){var fexpr__17023 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17023.cljs$core$IFn$_invoke$arity$1 ? fexpr__17023.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17023.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17020__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17020__$1);
var G__17020__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17020__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17020__$2);
var G__17020__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17020__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17020__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17020__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17020__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17029 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17029,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17029,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17029,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17029,(3),null);
var G__17032 = top_data;
var G__17032__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17032,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17032);
var G__17032__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17032__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17032__$1);
var G__17032__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17032__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17032__$2);
var G__17032__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17032__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17032__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17032__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17032__$4;
}

break;
case "execution":
var vec__17043 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17043,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17043,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17043,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17043,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16991_SHARP_){
var or__5045__auto__ = (p1__16991_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__17052 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17052.cljs$core$IFn$_invoke$arity$1 ? fexpr__17052.cljs$core$IFn$_invoke$arity$1(p1__16991_SHARP_) : fexpr__17052.call(null,p1__16991_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__17057 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17057__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17057,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17057);
var G__17057__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17057__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17057__$1);
var G__17057__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17057__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17057__$2);
var G__17057__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17057__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17057__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17057__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17057__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17008__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17066){
var map__17067 = p__17066;
var map__17067__$1 = cljs.core.__destructure_map(map__17067);
var triage_data = map__17067__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__17080 = phase;
var G__17080__$1 = (((G__17080 instanceof cljs.core.Keyword))?G__17080.fqn:null);
switch (G__17080__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17084 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17085 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17086 = loc;
var G__17087 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17120_17365 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17121_17366 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17122_17367 = true;
var _STAR_print_fn_STAR__temp_val__17123_17368 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17122_17367);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17123_17368);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17062_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17062_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17121_17366);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17120_17365);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17084,G__17085,G__17086,G__17087) : format.call(null,G__17084,G__17085,G__17086,G__17087));

break;
case "macroexpansion":
var G__17129 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__17130 = cause_type;
var G__17131 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17132 = loc;
var G__17133 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17129,G__17130,G__17131,G__17132,G__17133) : format.call(null,G__17129,G__17130,G__17131,G__17132,G__17133));

break;
case "compile-syntax-check":
var G__17136 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__17137 = cause_type;
var G__17138 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17139 = loc;
var G__17140 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17136,G__17137,G__17138,G__17139,G__17140) : format.call(null,G__17136,G__17137,G__17138,G__17139,G__17140));

break;
case "compilation":
var G__17142 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__17143 = cause_type;
var G__17144 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17145 = loc;
var G__17146 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17142,G__17143,G__17144,G__17145,G__17146) : format.call(null,G__17142,G__17143,G__17144,G__17145,G__17146));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__17150 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__17151 = symbol;
var G__17152 = loc;
var G__17153 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17155_17377 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17156_17378 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17157_17379 = true;
var _STAR_print_fn_STAR__temp_val__17158_17380 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17157_17379);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17158_17380);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17064_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17064_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17156_17378);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17155_17377);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17150,G__17151,G__17152,G__17153) : format.call(null,G__17150,G__17151,G__17152,G__17153));
} else {
var G__17162 = "Execution error%s at %s(%s).\n%s\n";
var G__17163 = cause_type;
var G__17164 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17165 = loc;
var G__17166 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17162,G__17163,G__17164,G__17165,G__17166) : format.call(null,G__17162,G__17163,G__17164,G__17165,G__17166));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17080__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
