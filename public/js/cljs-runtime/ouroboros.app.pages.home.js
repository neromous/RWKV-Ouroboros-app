goog.provide('ouroboros.app.pages.home');
var module$node_modules$react_list$react_list=shadow.js.require("module$node_modules$react_list$react_list", {});
ouroboros.app.pages.home.chat_item = (function ouroboros$app$pages$home$chat_item(i,k){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.message.is-small","article.message.is-small",109596624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message-body","div.message-body",566197895),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-1","div.column.is-1",848002756),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure.image.is-32x32","figure.image.is-32x32",1949147831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://i.pinimg.com/originals/0c/16/8e/0c168e4543e671ba5ff9c3c1f98484cf.png"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-10","div.column.is-10",453393699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"dasdf"], null)], null)], null),"wwwwww","dasdfds"], null)], null));
});
ouroboros.app.pages.home.chat_view = (function ouroboros$app$pages$home$chat_view(){
var with_let24745 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let24745","with-let24745",886397714));
var temp__5808__auto___24748 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___24748 == null)){
} else {
var c__11866__auto___24749 = temp__5808__auto___24748;
if((with_let24745.generation === c__11866__auto___24749.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let24745.generation = c__11866__auto___24749.ratomGeneration);
}

var init24746 = (with_let24745.length === (0));
var items = ((((init24746) || (cljs.core.not(with_let24745.hasOwnProperty((0))))))?(with_let24745[(0)] = cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(256))):(with_let24745[(0)]));
var res24747 = (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"650px",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_list$react_list,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"uniform",new cljs.core.Keyword(null,"length","length",588987862),(100),new cljs.core.Keyword(null,"itemRenderer","itemRenderer",-390713796),ouroboros.app.pages.home.chat_item], null)], null)], null);
})();
return res24747;
});
ouroboros.app.pages.home.chat_input = (function ouroboros$app$pages$home$chat_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"960px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-10","div.column.is-10",453393699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.textarea.is-small","textarea.textarea.is-small",-868306992),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),"ddasd",new cljs.core.Keyword(null,"row","row",-570139521),(40)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-2","div.column.is-2",-1290805620),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-primary","button.button.is-primary",-883309392),cljs.core.PersistentArrayMap.EMPTY,"\u8FD9\u91CC\u662F\u8F93\u5165\u6309\u94AE"], null)], null)], null)], null);
});
ouroboros.app.pages.home.dashboard = (function ouroboros$app$pages$home$dashboard(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),"\u8FD9\u91CC\u662Fdashboard"], null);
});
ouroboros.app.pages.home.chat_box = (function ouroboros$app$pages$home$chat_box(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
ouroboros.app.pages.home.main = (function ouroboros$app$pages$home$main(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-desktop","div.columns.is-desktop",17979193),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-two-thrid.is-8","div.column.is-two-thrid.is-8",1520330052),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.pages.home.chat_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.pages.home.chat_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-thrid.is-4","div.column.is-one-thrid.is-4",-1875922901),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ouroboros.app.pages.home.dashboard], null)], null)], null)], null);
});

//# sourceMappingURL=ouroboros.app.pages.home.js.map
