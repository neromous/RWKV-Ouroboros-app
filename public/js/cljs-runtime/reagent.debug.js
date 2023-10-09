goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__10256__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10258__i = 0, G__10258__a = new Array(arguments.length -  0);
while (G__10258__i < G__10258__a.length) {G__10258__a[G__10258__i] = arguments[G__10258__i + 0]; ++G__10258__i;}
  args = new cljs.core.IndexedSeq(G__10258__a,0,null);
} 
return G__10256__delegate.call(this,args);};
G__10256.cljs$lang$maxFixedArity = 0;
G__10256.cljs$lang$applyTo = (function (arglist__10259){
var args = cljs.core.seq(arglist__10259);
return G__10256__delegate(args);
});
G__10256.cljs$core$IFn$_invoke$arity$variadic = G__10256__delegate;
return G__10256;
})()
);

(o.error = (function() { 
var G__10261__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10264__i = 0, G__10264__a = new Array(arguments.length -  0);
while (G__10264__i < G__10264__a.length) {G__10264__a[G__10264__i] = arguments[G__10264__i + 0]; ++G__10264__i;}
  args = new cljs.core.IndexedSeq(G__10264__a,0,null);
} 
return G__10261__delegate.call(this,args);};
G__10261.cljs$lang$maxFixedArity = 0;
G__10261.cljs$lang$applyTo = (function (arglist__10265){
var args = cljs.core.seq(arglist__10265);
return G__10261__delegate(args);
});
G__10261.cljs$core$IFn$_invoke$arity$variadic = G__10261__delegate;
return G__10261;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
