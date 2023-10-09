goog.provide('ouroboros.app.db');
ouroboros.app.db.squuid = (function ouroboros$app$db$squuid(){
return (datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 ? datascript.core.squuid.cljs$core$IFn$_invoke$arity$0() : datascript.core.squuid.call(null));
});
if((typeof ouroboros !== 'undefined') && (typeof ouroboros.app !== 'undefined') && (typeof ouroboros.app.db !== 'undefined') && (typeof ouroboros.app.db.datomic_db !== 'undefined')){
} else {
ouroboros.app.db.datomic_db = (function (){var init_schema = ouroboros.app.db_schema.schema;
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(init_schema);
})();
}
if((typeof ouroboros !== 'undefined') && (typeof ouroboros.app !== 'undefined') && (typeof ouroboros.app.db !== 'undefined') && (typeof ouroboros.app.db.conn !== 'undefined')){
} else {
ouroboros.app.db.conn = datascript.core.conn_from_db(ouroboros.app.db.datomic_db);
}
if((typeof ouroboros !== 'undefined') && (typeof ouroboros.app !== 'undefined') && (typeof ouroboros.app.db !== 'undefined') && (typeof ouroboros.app.db.global_state_BANG_ !== 'undefined')){
} else {
ouroboros.app.db.global_state_BANG_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tx","tx",466630418),(0),new cljs.core.Keyword(null,"conn","conn",278309663),ouroboros.app.db.conn], null));
}
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2(ouroboros.app.db.conn,(function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.db.global_state_BANG_,cljs.core.update,new cljs.core.Keyword(null,"tx","tx",466630418),cljs.core.inc);
}));
ouroboros.app.db.transact = (function ouroboros$app$db$transact(tx_data){
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.db.global_state_BANG_));
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2(conn,tx_data);
});
ouroboros.app.db.q = (function ouroboros$app$db$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21102 = arguments.length;
var i__5770__auto___21103 = (0);
while(true){
if((i__5770__auto___21103 < len__5769__auto___21102)){
args__5775__auto__.push((arguments[i__5770__auto___21103]));

var G__21104 = (i__5770__auto___21103 + (1));
i__5770__auto___21103 = G__21104;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return ouroboros.app.db.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(ouroboros.app.db.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.db.global_state_BANG_));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(datascript.core.q,query,cljs.core.deref(conn),args);
}));

(ouroboros.app.db.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ouroboros.app.db.q.cljs$lang$applyTo = (function (seq21100){
var G__21101 = cljs.core.first(seq21100);
var seq21100__$1 = cljs.core.next(seq21100);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21101,seq21100__$1);
}));


//# sourceMappingURL=ouroboros.app.db.js.map
