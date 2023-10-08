goog.provide('shadow.cljs.devtools.client.node_repl');
shadow.cljs.devtools.client.node_repl.uncaught_exception = (function shadow$cljs$devtools$client$node_repl$uncaught_exception(e,origin){
cljs.core.tap_GT_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uncaught-exception","uncaught-exception",2078638448),e,origin], null));

console.warn("---- UNCAUGHT EXCEPTION --------------");

console.warn(e);

return console.warn("--------------------------------------");
});
shadow.cljs.devtools.client.node_repl.unhandled_rejection = (function shadow$cljs$devtools$client$node_repl$unhandled_rejection(e,promise){
cljs.core.tap_GT_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unhandled-rejection","unhandled-rejection",1413224593),e,promise], null));

console.warn("---- UNHANDLED REJECTION --------------");

console.warn(e);

return console.warn("--------------------------------------");
});
shadow.cljs.devtools.client.node_repl.main = (function shadow$cljs$devtools$client$node_repl$main(){
process.on("uncaughtException",(function (e,origin){
return shadow.cljs.devtools.client.node_repl.uncaught_exception(e,origin);
}));

return process.on("unhandledRejection",(function (e,promise){
return shadow.cljs.devtools.client.node_repl.unhandled_rejection(e,promise);
}));
});

//# sourceMappingURL=shadow.cljs.devtools.client.node_repl.js.map
