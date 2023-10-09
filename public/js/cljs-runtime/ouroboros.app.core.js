goog.provide('ouroboros.app.core');
if((typeof ouroboros !== 'undefined') && (typeof ouroboros.app !== 'undefined') && (typeof ouroboros.app.core !== 'undefined') && (typeof ouroboros.app.core.session !== 'undefined')){
} else {
ouroboros.app.core.session = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null));
}
ouroboros.app.core.about_page = (function ouroboros$app$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"dfas====about-page"], null)], null);
});
ouroboros.app.core.pages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return ouroboros.app.pages.home.main;},new cljs.core.Symbol("ouroboros.app.pages.home","main","ouroboros.app.pages.home/main",-1806938208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ouroboros.app.pages.home","ouroboros.app.pages.home",1758599206,null),new cljs.core.Symbol(null,"main","main",-477271134,null),"ouroboros/app/pages/home.cljs",11,1,65,65,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ouroboros.app.pages.home.main)?ouroboros.app.pages.home.main.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return ouroboros.app.core.about_page;},new cljs.core.Symbol("ouroboros.app.core","about-page","ouroboros.app.core/about-page",1657321917,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ouroboros.app.core","ouroboros.app.core",1377561621,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"ouroboros/app/core.cljs",17,1,16,16,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ouroboros.app.core.about_page)?ouroboros.app.core.about_page.cljs$lang$test:null)]))], null);
ouroboros.app.core.page = (function ouroboros$app$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24750 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ouroboros.app.core.session));
return (ouroboros.app.core.pages.cljs$core$IFn$_invoke$arity$1 ? ouroboros.app.core.pages.cljs$core$IFn$_invoke$arity$1(G__24750) : ouroboros.app.core.pages.call(null,G__24750));
})()], null);
});
ouroboros.app.core.router = reitit.core.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
ouroboros.app.core.match_route = (function ouroboros$app$core$match_route(uri){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reitit.core.match_by_path(ouroboros.app.core.router,(function (){var or__5045__auto__ = cljs.core.not_empty(clojure.string.replace(uri,/^.*#/,""));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "/";
}
})())));
});
ouroboros.app.core.hook_browser_navigation_BANG_ = (function ouroboros$app$core$hook_browser_navigation_BANG_(){
var G__24751 = (new goog.History());
goog.events.listen(G__24751,goog.history.EventType.NAVIGATE,(function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ouroboros.app.core.session,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),ouroboros.app.core.match_route(event.token));
}));

G__24751.setEnabled(true);

return G__24751;
});
ouroboros.app.core.mount_components = (function ouroboros$app$core$mount_components(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return ouroboros.app.core.page;},new cljs.core.Symbol("ouroboros.app.core","page","ouroboros.app.core/page",-1874777912,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ouroboros.app.core","ouroboros.app.core",1377561621,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"ouroboros/app/core.cljs",11,1,24,24,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ouroboros.app.core.page)?ouroboros.app.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
ouroboros.app.core.init = (function ouroboros$app$core$init(){
ouroboros.app.core.hook_browser_navigation_BANG_();

return ouroboros.app.core.mount_components();
});

//# sourceMappingURL=ouroboros.app.core.js.map
