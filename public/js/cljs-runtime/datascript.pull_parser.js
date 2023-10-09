goog.provide('datascript.pull_parser');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullAttr = (function (as,default$,limit,name,pattern,recursion_limit,recursive_QMARK_,reverse_QMARK_,xform,multival_QMARK_,ref_QMARK_,component_QMARK_,__meta,__extmap,__hash){
this.as = as;
this.default$ = default$;
this.limit = limit;
this.name = name;
this.pattern = pattern;
this.recursion_limit = recursion_limit;
this.recursive_QMARK_ = recursive_QMARK_;
this.reverse_QMARK_ = reverse_QMARK_;
this.xform = xform;
this.multival_QMARK_ = multival_QMARK_;
this.ref_QMARK_ = ref_QMARK_;
this.component_QMARK_ = component_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_parser.PullAttr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k22457,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__22474 = k22457;
var G__22474__$1 = (((G__22474 instanceof cljs.core.Keyword))?G__22474.fqn:null);
switch (G__22474__$1) {
case "as":
return self__.as;

break;
case "default":
return self__.default$;

break;
case "limit":
return self__.limit;

break;
case "name":
return self__.name;

break;
case "pattern":
return self__.pattern;

break;
case "recursion-limit":
return self__.recursion_limit;

break;
case "recursive?":
return self__.recursive_QMARK_;

break;
case "reverse?":
return self__.reverse_QMARK_;

break;
case "xform":
return self__.xform;

break;
case "multival?":
return self__.multival_QMARK_;

break;
case "ref?":
return self__.ref_QMARK_;

break;
case "component?":
return self__.component_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22457,else__5346__auto__);

}
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__22485){
var vec__22487 = p__22485;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22487,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22487,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#datascript.pull-parser.PullAttr{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"as","as",1148689641),self__.as],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),self__.recursion_limit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),self__.recursive_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),self__.reverse_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"xform","xform",-1725711008),self__.xform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"multival?","multival?",1072388383),self__.multival_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ref?","ref?",1932693720),self__.ref_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"component?","component?",407783990),self__.component_QMARK_],null))], null),self__.__extmap));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22456){
var self__ = this;
var G__22456__$1 = this;
return (new cljs.core.RecordIter((0),G__22456__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Keyword(null,"multival?","multival?",1072388383),new cljs.core.Keyword(null,"ref?","ref?",1932693720),new cljs.core.Keyword(null,"component?","component?",407783990)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1743810262 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22458,other22459){
var self__ = this;
var this22458__$1 = this;
return (((!((other22459 == null)))) && ((((this22458__$1.constructor === other22459.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.as,other22459.as)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.default,other22459.default)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.limit,other22459.limit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.name,other22459.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.pattern,other22459.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.recursion_limit,other22459.recursion_limit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.recursive_QMARK_,other22459.recursive_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.reverse_QMARK_,other22459.reverse_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.xform,other22459.xform)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.multival_QMARK_,other22459.multival_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.ref_QMARK_,other22459.ref_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.component_QMARK_,other22459.component_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22458__$1.__extmap,other22459.__extmap)))))))))))))))))))))))))))));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"xform","xform",-1725711008),null,new cljs.core.Keyword(null,"limit","limit",-1355822363),null,new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),null,new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),null,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),null,new cljs.core.Keyword(null,"component?","component?",407783990),null,new cljs.core.Keyword(null,"ref?","ref?",1932693720),null,new cljs.core.Keyword(null,"multival?","multival?",1072388383),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k22457){
var self__ = this;
var this__5350__auto____$1 = this;
var G__22522 = k22457;
var G__22522__$1 = (((G__22522 instanceof cljs.core.Keyword))?G__22522.fqn:null);
switch (G__22522__$1) {
case "as":
case "default":
case "limit":
case "name":
case "pattern":
case "recursion-limit":
case "recursive?":
case "reverse?":
case "xform":
case "multival?":
case "ref?":
case "component?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22457);

}
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__22456){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__22523 = cljs.core.keyword_identical_QMARK_;
var expr__22524 = k__5352__auto__;
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"as","as",1148689641),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"as","as",1148689641),expr__22524)))){
return (new datascript.pull_parser.PullAttr(G__22456,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__22524)))){
return (new datascript.pull_parser.PullAttr(self__.as,G__22456,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"limit","limit",-1355822363),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"limit","limit",-1355822363),expr__22524)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,G__22456,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__22524)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,G__22456,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__22524)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,G__22456,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),expr__22524)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,G__22456,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),expr__22524)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,G__22456,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),expr__22524)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,G__22456,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"xform","xform",-1725711008),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"xform","xform",-1725711008),expr__22524)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,G__22456,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multival?","multival?",1072388383),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"multival?","multival?",1072388383),expr__22524)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,G__22456,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref?","ref?",1932693720),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"ref?","ref?",1932693720),expr__22524)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,G__22456,self__.component_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22523.cljs$core$IFn$_invoke$arity$2 ? pred__22523.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component?","component?",407783990),expr__22524) : pred__22523.call(null,new cljs.core.Keyword(null,"component?","component?",407783990),expr__22524)))){
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,G__22456,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__22456),null));
}
}
}
}
}
}
}
}
}
}
}
}
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"as","as",1148689641),self__.as,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"limit","limit",-1355822363),self__.limit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),self__.recursion_limit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),self__.recursive_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),self__.reverse_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"xform","xform",-1725711008),self__.xform,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"multival?","multival?",1072388383),self__.multival_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ref?","ref?",1932693720),self__.ref_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"component?","component?",407783990),self__.component_QMARK_,null))], null),self__.__extmap));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__22456){
var self__ = this;
var this__5342__auto____$1 = this;
return (new datascript.pull_parser.PullAttr(self__.as,self__.default$,self__.limit,self__.name,self__.pattern,self__.recursion_limit,self__.recursive_QMARK_,self__.reverse_QMARK_,self__.xform,self__.multival_QMARK_,self__.ref_QMARK_,self__.component_QMARK_,G__22456,self__.__extmap,self__.__hash));
}));

(datascript.pull_parser.PullAttr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(datascript.pull_parser.PullAttr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"as","as",-1505746128,null),new cljs.core.Symbol(null,"default","default",-347290801,null),new cljs.core.Symbol(null,"limit","limit",284709164,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.Symbol(null,"recursion-limit","recursion-limit",1692877166,null),new cljs.core.Symbol(null,"recursive?","recursive?",-1314360525,null),new cljs.core.Symbol(null,"reverse?","reverse?",-32336947,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"multival?","multival?",-1582047386,null),new cljs.core.Symbol(null,"ref?","ref?",-721742049,null),new cljs.core.Symbol(null,"component?","component?",2048315517,null)], null);
}));

(datascript.pull_parser.PullAttr.cljs$lang$type = true);

(datascript.pull_parser.PullAttr.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"datascript.pull-parser/PullAttr",null,(1),null));
}));

(datascript.pull_parser.PullAttr.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"datascript.pull-parser/PullAttr");
}));

/**
 * Positional factory function for datascript.pull-parser/PullAttr.
 */
datascript.pull_parser.__GT_PullAttr = (function datascript$pull_parser$__GT_PullAttr(as,default$,limit,name,pattern,recursion_limit,recursive_QMARK_,reverse_QMARK_,xform,multival_QMARK_,ref_QMARK_,component_QMARK_){
return (new datascript.pull_parser.PullAttr(as,default$,limit,name,pattern,recursion_limit,recursive_QMARK_,reverse_QMARK_,xform,multival_QMARK_,ref_QMARK_,component_QMARK_,null,null,null));
});

/**
 * Factory function for datascript.pull-parser/PullAttr, taking a map of keywords to field values.
 */
datascript.pull_parser.map__GT_PullAttr = (function datascript$pull_parser$map__GT_PullAttr(G__22460){
var extmap__5385__auto__ = (function (){var G__22540 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22460,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Keyword(null,"multival?","multival?",1072388383),new cljs.core.Keyword(null,"ref?","ref?",1932693720),new cljs.core.Keyword(null,"component?","component?",407783990)], 0));
if(cljs.core.record_QMARK_(G__22460)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22540);
} else {
return G__22540;
}
})();
return (new datascript.pull_parser.PullAttr(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(G__22460),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(G__22460),new cljs.core.Keyword(null,"limit","limit",-1355822363).cljs$core$IFn$_invoke$arity$1(G__22460),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__22460),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__22460),new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639).cljs$core$IFn$_invoke$arity$1(G__22460),new cljs.core.Keyword(null,"recursive?","recursive?",1340075244).cljs$core$IFn$_invoke$arity$1(G__22460),new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474).cljs$core$IFn$_invoke$arity$1(G__22460),new cljs.core.Keyword(null,"xform","xform",-1725711008).cljs$core$IFn$_invoke$arity$1(G__22460),new cljs.core.Keyword(null,"multival?","multival?",1072388383).cljs$core$IFn$_invoke$arity$1(G__22460),new cljs.core.Keyword(null,"ref?","ref?",1932693720).cljs$core$IFn$_invoke$arity$1(G__22460),new cljs.core.Keyword(null,"component?","component?",407783990).cljs$core$IFn$_invoke$arity$1(G__22460),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullPattern = (function (attrs,first_attr,last_attr,reverse_attrs,wildcard_QMARK_,__meta,__extmap,__hash){
this.attrs = attrs;
this.first_attr = first_attr;
this.last_attr = last_attr;
this.reverse_attrs = reverse_attrs;
this.wildcard_QMARK_ = wildcard_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k22542,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__22547 = k22542;
var G__22547__$1 = (((G__22547 instanceof cljs.core.Keyword))?G__22547.fqn:null);
switch (G__22547__$1) {
case "attrs":
return self__.attrs;

break;
case "first-attr":
return self__.first_attr;

break;
case "last-attr":
return self__.last_attr;

break;
case "reverse-attrs":
return self__.reverse_attrs;

break;
case "wildcard?":
return self__.wildcard_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22542,else__5346__auto__);

}
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__22551){
var vec__22552 = p__22551;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22552,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22552,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#datascript.pull-parser.PullPattern{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),self__.first_attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),self__.last_attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),self__.reverse_attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),self__.wildcard_QMARK_],null))], null),self__.__extmap));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22541){
var self__ = this;
var G__22541__$1 = this;
return (new cljs.core.RecordIter((0),G__22541__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-795554044 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22543,other22544){
var self__ = this;
var this22543__$1 = this;
return (((!((other22544 == null)))) && ((((this22543__$1.constructor === other22544.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22543__$1.attrs,other22544.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22543__$1.first_attr,other22544.first_attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22543__$1.last_attr,other22544.last_attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22543__$1.reverse_attrs,other22544.reverse_attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22543__$1.wildcard_QMARK_,other22544.wildcard_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22543__$1.__extmap,other22544.__extmap)))))))))))))));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),null,new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),null,new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k22542){
var self__ = this;
var this__5350__auto____$1 = this;
var G__22557 = k22542;
var G__22557__$1 = (((G__22557 instanceof cljs.core.Keyword))?G__22557.fqn:null);
switch (G__22557__$1) {
case "attrs":
case "first-attr":
case "last-attr":
case "reverse-attrs":
case "wildcard?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22542);

}
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__22541){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__22558 = cljs.core.keyword_identical_QMARK_;
var expr__22559 = k__5352__auto__;
if(cljs.core.truth_((pred__22558.cljs$core$IFn$_invoke$arity$2 ? pred__22558.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__22559) : pred__22558.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__22559)))){
return (new datascript.pull_parser.PullPattern(G__22541,self__.first_attr,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22558.cljs$core$IFn$_invoke$arity$2 ? pred__22558.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),expr__22559) : pred__22558.call(null,new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),expr__22559)))){
return (new datascript.pull_parser.PullPattern(self__.attrs,G__22541,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22558.cljs$core$IFn$_invoke$arity$2 ? pred__22558.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),expr__22559) : pred__22558.call(null,new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),expr__22559)))){
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,G__22541,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22558.cljs$core$IFn$_invoke$arity$2 ? pred__22558.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),expr__22559) : pred__22558.call(null,new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),expr__22559)))){
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,G__22541,self__.wildcard_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22558.cljs$core$IFn$_invoke$arity$2 ? pred__22558.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),expr__22559) : pred__22558.call(null,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),expr__22559)))){
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,self__.reverse_attrs,G__22541,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__22541),null));
}
}
}
}
}
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),self__.first_attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),self__.last_attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),self__.reverse_attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),self__.wildcard_QMARK_,null))], null),self__.__extmap));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__22541){
var self__ = this;
var this__5342__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.attrs,self__.first_attr,self__.last_attr,self__.reverse_attrs,self__.wildcard_QMARK_,G__22541,self__.__extmap,self__.__hash));
}));

(datascript.pull_parser.PullPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(datascript.pull_parser.PullPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"first-attr","first-attr",-352508304,null),new cljs.core.Symbol(null,"last-attr","last-attr",1114530819,null),new cljs.core.Symbol(null,"reverse-attrs","reverse-attrs",-2024338067,null),new cljs.core.Symbol(null,"wildcard?","wildcard?",954487426,null)], null);
}));

(datascript.pull_parser.PullPattern.cljs$lang$type = true);

(datascript.pull_parser.PullPattern.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"datascript.pull-parser/PullPattern",null,(1),null));
}));

(datascript.pull_parser.PullPattern.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"datascript.pull-parser/PullPattern");
}));

/**
 * Positional factory function for datascript.pull-parser/PullPattern.
 */
datascript.pull_parser.__GT_PullPattern = (function datascript$pull_parser$__GT_PullPattern(attrs,first_attr,last_attr,reverse_attrs,wildcard_QMARK_){
return (new datascript.pull_parser.PullPattern(attrs,first_attr,last_attr,reverse_attrs,wildcard_QMARK_,null,null,null));
});

/**
 * Factory function for datascript.pull-parser/PullPattern, taking a map of keywords to field values.
 */
datascript.pull_parser.map__GT_PullPattern = (function datascript$pull_parser$map__GT_PullPattern(G__22545){
var extmap__5385__auto__ = (function (){var G__22561 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22545,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101)], 0));
if(cljs.core.record_QMARK_(G__22545)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22561);
} else {
return G__22561;
}
})();
return (new datascript.pull_parser.PullPattern(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"last-attr","last-attr",-526000708).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702).cljs$core$IFn$_invoke$arity$1(G__22545),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101).cljs$core$IFn$_invoke$arity$1(G__22545),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

datascript.pull_parser.default_db_id_attr = datascript.pull_parser.map__GT_PullAttr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"xform","xform",-1725711008),cljs.core.identity], null));
datascript.pull_parser.default_pattern_ref = datascript.pull_parser.map__GT_PullPattern(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(new cljs.core.List(null,datascript.pull_parser.default_db_id_attr,null,(1),null))], null));
datascript.pull_parser.default_pattern_component = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.pull_parser.default_pattern_ref,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),true);

datascript.pull_parser.check = (function datascript$pull_parser$check(cond,expected,fragment){
if(cljs.core.truth_(cond)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fragment], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),fragment], null));
}
});
datascript.pull_parser.parse_attr_name = (function datascript$pull_parser$parse_attr_name(db,attr_spec){
var reverse_QMARK_ = datascript.db.reverse_ref_QMARK_(attr_spec);
var name = ((reverse_QMARK_)?datascript.db.reverse_ref(attr_spec):attr_spec);
var ref_QMARK_ = datascript.db.ref_QMARK_(db,name);
var component_QMARK_ = datascript.db.component_QMARK_(db,name);
var multival_QMARK_ = datascript.db.multival_QMARK_(db,name);
return datascript.pull_parser.map__GT_PullAttr(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"xform","xform",-1725711008),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"component?","component?",407783990),new cljs.core.Keyword(null,"ref?","ref?",1932693720),new cljs.core.Keyword(null,"multival?","multival?",1072388383),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[cljs.core.identity,((multival_QMARK_)?(1000):null),((reverse_QMARK_)?(function (){
datascript.pull_parser.check(ref_QMARK_,"reverse attribute having :db.type/ref",attr_spec);

return true;
})()
:null),name,attr_spec,((component_QMARK_)?true:null),((ref_QMARK_)?true:null),((multival_QMARK_)?true:null),(((!(ref_QMARK_)))?null:((reverse_QMARK_)?datascript.pull_parser.default_pattern_ref:((component_QMARK_)?datascript.pull_parser.default_pattern_component:datascript.pull_parser.default_pattern_ref
)))]));
});
datascript.pull_parser.check_limit = (function datascript$pull_parser$check_limit(db,pull_attr,limit){
datascript.pull_parser.check(((((typeof limit === 'number') && ((limit > (0))))) || ((limit == null))),"(positive-number | nil)",limit);

return datascript.pull_parser.check(datascript.db.multival_QMARK_(db,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pull_attr)),"limit attribute having :db.cardinality/many",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pull_attr));
});
datascript.pull_parser.resolve_xform = (function datascript$pull_parser$resolve_xform(sym_or_fn){
var or__5045__auto__ = ((cljs.core.fn_QMARK_(sym_or_fn))?sym_or_fn:null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.query_fns,sym_or_fn);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't resolve symbol ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym_or_fn], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","pull","parser/pull",-2147427204),new cljs.core.Keyword(null,"fragment","fragment",826775688),sym_or_fn], null));
}
}
});
datascript.pull_parser.parse_attr_expr = (function datascript$pull_parser$parse_attr_expr(db,attr_spec){
var temp__5808__auto__ = (function (){var G__22575 = db;
var G__22576 = cljs.core.first(attr_spec);
return (datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2 ? datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2(G__22575,G__22576) : datascript.pull_parser.parse_attr_spec.call(null,G__22575,G__22576));
})();
if((temp__5808__auto__ == null)){
return null;
} else {
var pull_attr = temp__5808__auto__;
datascript.pull_parser.check(cljs.core.even_QMARK_(cljs.core.count(cljs.core.next(attr_spec))),"even number of opts",attr_spec);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (pull_attr__$1,p__22577){
var vec__22578 = p__22577;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(1),null);
var G__22581 = key;
var G__22581__$1 = (((G__22581 instanceof cljs.core.Keyword))?G__22581.fqn:null);
switch (G__22581__$1) {
case "as":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr__$1,new cljs.core.Keyword(null,"as","as",1148689641),value);

break;
case "limit":
datascript.pull_parser.check_limit(db,pull_attr__$1,value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),value);

break;
case "default":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr__$1,new cljs.core.Keyword(null,"default","default",-1987822328),value);

break;
case "xform":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr__$1,new cljs.core.Keyword(null,"xform","xform",-1725711008),datascript.pull_parser.resolve_xform(value));

break;
default:
return datascript.pull_parser.check(false,"one of :as, :limit, :default, :xform",attr_spec);

}
}),pull_attr,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.next(attr_spec)));
}
});
datascript.pull_parser.parse_legacy_limit_expr = (function datascript$pull_parser$parse_legacy_limit_expr(db,attr_spec){
var expected = "['limit attr-name (positive-number | nil)]";
if(cljs.core.truth_((function (){var G__22583 = cljs.core.first(attr_spec);
var fexpr__22582 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"limit","limit",284709164,null),null,"limit",null], null), null);
return (fexpr__22582.cljs$core$IFn$_invoke$arity$1 ? fexpr__22582.cljs$core$IFn$_invoke$arity$1(G__22583) : fexpr__22582.call(null,G__22583));
})())){
datascript.pull_parser.check(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(attr_spec),(3)),expected,attr_spec);

var vec__22584 = attr_spec;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(1),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(2),null);
var pull_attr = (datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2 ? datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2(db,attr) : datascript.pull_parser.parse_attr_spec.call(null,db,attr));
datascript.pull_parser.check_limit(db,pull_attr,limit);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr,new cljs.core.Keyword(null,"limit","limit",-1355822363),limit);
} else {
return null;
}
});
datascript.pull_parser.parse_legacy_default_expr = (function datascript$pull_parser$parse_legacy_default_expr(db,attr_spec){
var expected = "['default attr-name any-value]";
if(cljs.core.truth_((function (){var G__22589 = cljs.core.first(attr_spec);
var fexpr__22588 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"default","default",-347290801,null),null,"default",null], null), null);
return (fexpr__22588.cljs$core$IFn$_invoke$arity$1 ? fexpr__22588.cljs$core$IFn$_invoke$arity$1(G__22589) : fexpr__22588.call(null,G__22589));
})())){
datascript.pull_parser.check(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(attr_spec),(3)),expected,attr_spec);

var vec__22593 = attr_spec;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22593,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22593,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22593,(2),null);
var pull_attr = (datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2 ? datascript.pull_parser.parse_attr_spec.cljs$core$IFn$_invoke$arity$2(db,attr) : datascript.pull_parser.parse_attr_spec.call(null,db,attr));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr,new cljs.core.Keyword(null,"default","default",-1987822328),default$);
} else {
return null;
}
});
datascript.pull_parser.parse_attr_spec = (function datascript$pull_parser$parse_attr_spec(db,attr_spec){
if((((attr_spec instanceof cljs.core.Keyword)) || (((typeof attr_spec === 'string') && (cljs.core.not((function (){var fexpr__22596 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["limit",null,"default",null], null), null);
return (fexpr__22596.cljs$core$IFn$_invoke$arity$1 ? fexpr__22596.cljs$core$IFn$_invoke$arity$1(attr_spec) : fexpr__22596.call(null,attr_spec));
})())))))){
return datascript.pull_parser.parse_attr_name(db,attr_spec);
} else {
if(cljs.core.sequential_QMARK_(attr_spec)){
var or__5045__auto__ = datascript.pull_parser.parse_attr_expr(db,attr_spec);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = datascript.pull_parser.parse_legacy_limit_expr(db,attr_spec);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = datascript.pull_parser.parse_legacy_default_expr(db,attr_spec);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return datascript.pull_parser.check(false,"[attr-name attr-option+] | ['limit attr-name (positive-num | nil)] | ['default attr-name any-val]",attr_spec);
}
}
}
} else {
return null;

}
}
});
datascript.pull_parser.parse_map_spec = (function datascript$pull_parser$parse_map_spec(db,attr_spec,pattern){
var pull_attr = datascript.pull_parser.parse_attr_spec(db,attr_spec);
datascript.pull_parser.check((!((pull_attr == null))),"attr-name | attr-expr",attr_spec);

datascript.pull_parser.check(datascript.db.ref_QMARK_(db,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pull_attr)),"attribute having :db.type/ref",attr_spec);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),pattern)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("...",pattern)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pull_attr,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),true,new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),null], 0));
} else {
if(typeof pattern === 'number'){
datascript.pull_parser.check((pattern > (0)),"(positive-num | ...)",cljs.core.PersistentArrayMap.createAsIfByAssoc([attr_spec,pattern]));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pull_attr,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursive?","recursive?",1340075244),true,new cljs.core.Keyword(null,"recursion-limit","recursion-limit",52345639),pattern], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pull_attr,new cljs.core.Keyword(null,"pattern","pattern",242135423),(datascript.pull_parser.parse_pattern.cljs$core$IFn$_invoke$arity$2 ? datascript.pull_parser.parse_pattern.cljs$core$IFn$_invoke$arity$2(db,pattern) : datascript.pull_parser.parse_pattern.call(null,db,pattern)));

}
}
});
datascript.pull_parser.index_of = (function datascript$pull_parser$index_of(pred,xs){
return cljs.core.some((function (p__22597){
var vec__22598 = p__22597;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22598,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22598,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return idx;
} else {
return null;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.pull_parser.conj_attr = (function datascript$pull_parser$conj_attr(pull_pattern,pull_attr){
var pattern_attr = (cljs.core.truth_(new cljs.core.Keyword(null,"reverse?","reverse?",-1672868474).cljs$core$IFn$_invoke$arity$1(pull_attr))?new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702):new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var temp__5806__auto__ = datascript.pull_parser.index_of((function (p1__22601_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(p1__22601_SHARP_),new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(pull_attr));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(pull_pattern,pattern_attr));
if((temp__5806__auto__ == null)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(pull_pattern,pattern_attr,cljs.core.conj,pull_attr);
} else {
var idx = temp__5806__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(pull_pattern,pattern_attr,cljs.core.assoc,idx,pull_attr);
}
});
datascript.pull_parser.parse_pattern = (function datascript$pull_parser$parse_pattern(db,pattern){
datascript.pull_parser.check(cljs.core.sequential_QMARK_(pattern),"pattern to be sequential?",pattern);

var pattern__$1 = pattern;
var result = datascript.pull_parser.map__GT_PullPattern(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),null], null));
while(true){
if(cljs.core.empty_QMARK_(pattern__$1)){
var attrs = result.attrs;
var db_id_QMARK_ = ((function (pattern__$1,result,attrs){
return (function (attr){
var G__22617 = attr.name;
var fexpr__22616 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),null,":db/id",null], null), null);
return (fexpr__22616.cljs$core$IFn$_invoke$arity$1 ? fexpr__22616.cljs$core$IFn$_invoke$arity$1(G__22617) : fexpr__22616.call(null,G__22617));
});})(pattern__$1,result,attrs))
;
var key_fn = ((function (pattern__$1,result,attrs,db_id_QMARK_){
return (function (attr){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(attr);
if((name instanceof cljs.core.Keyword)){
return name;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(name,(0),(1)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name);

}
}
});})(pattern__$1,result,attrs,db_id_QMARK_))
;
var attrs__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = result.wildcard_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(db_id_QMARK_,result.attrs));
} else {
return and__5043__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,datascript.pull_parser.default_db_id_attr):attrs);
var attrs__$2 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(key_fn,attrs__$1));
var datom_attrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(db_id_QMARK_,attrs__$2);
var first_attr = cljs.core.first(datom_attrs);
var last_attr = cljs.core.last(datom_attrs);
return datascript.pull_parser.map__GT_PullPattern(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs__$2,new cljs.core.Keyword(null,"first-attr","first-attr",-1993039831),first_attr,new cljs.core.Keyword(null,"last-attr","last-attr",-526000708),last_attr,new cljs.core.Keyword(null,"reverse-attrs","reverse-attrs",630097702),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(key_fn,result.reverse_attrs)),new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),result.wildcard_QMARK_], null));
} else {
var attr_spec = cljs.core.first(pattern__$1);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*","*",345799209,null),attr_spec)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",attr_spec)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*","*",-1294732318),attr_spec)))))){
var G__22663 = cljs.core.next(pattern__$1);
var G__22664 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"wildcard?","wildcard?",-686044101),true);
pattern__$1 = G__22663;
result = G__22664;
continue;
} else {
if(cljs.core.map_QMARK_(attr_spec)){
var result_SINGLEQUOTE_ = cljs.core.reduce_kv(((function (pattern__$1,result,attr_spec){
return (function (result__$1,attr_spec__$1,pattern__$2){
return datascript.pull_parser.conj_attr(result__$1,datascript.pull_parser.parse_map_spec(db,attr_spec__$1,pattern__$2));
});})(pattern__$1,result,attr_spec))
,result,attr_spec);
var G__22665 = cljs.core.next(pattern__$1);
var G__22666 = result_SINGLEQUOTE_;
pattern__$1 = G__22665;
result = G__22666;
continue;
} else {
var pull_attr = datascript.pull_parser.parse_attr_spec(db,attr_spec);
if((pull_attr == null)){
return datascript.pull_parser.check(false,"attr-name | attr-expr | map-spec | *",attr_spec);
} else {
var G__22667 = cljs.core.next(pattern__$1);
var G__22668 = datascript.pull_parser.conj_attr(result,pull_attr);
pattern__$1 = G__22667;
result = G__22668;
continue;

}
}
}
}
break;
}
});

//# sourceMappingURL=datascript.pull_parser.js.map
