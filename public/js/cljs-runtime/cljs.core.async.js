goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14685 = (function (f,blockable,meta14686){
this.f = f;
this.blockable = blockable;
this.meta14686 = meta14686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14687,meta14686__$1){
var self__ = this;
var _14687__$1 = this;
return (new cljs.core.async.t_cljs$core$async14685(self__.f,self__.blockable,meta14686__$1));
}));

(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14687){
var self__ = this;
var _14687__$1 = this;
return self__.meta14686;
}));

(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14686","meta14686",1634445094,null)], null);
}));

(cljs.core.async.t_cljs$core$async14685.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14685");

(cljs.core.async.t_cljs$core$async14685.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14685");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14685.
 */
cljs.core.async.__GT_t_cljs$core$async14685 = (function cljs$core$async$__GT_t_cljs$core$async14685(f,blockable,meta14686){
return (new cljs.core.async.t_cljs$core$async14685(f,blockable,meta14686));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14676 = arguments.length;
switch (G__14676) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14685(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14718 = arguments.length;
switch (G__14718) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14751 = arguments.length;
switch (G__14751) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14766 = arguments.length;
switch (G__14766) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18360 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18360) : fn1.call(null,val_18360));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18360) : fn1.call(null,val_18360));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14788 = arguments.length;
switch (G__14788) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___18372 = n;
var x_18375 = (0);
while(true){
if((x_18375 < n__5636__auto___18372)){
(a[x_18375] = x_18375);

var G__18376 = (x_18375 + (1));
x_18375 = G__18376;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14802 = (function (flag,meta14803){
this.flag = flag;
this.meta14803 = meta14803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14804,meta14803__$1){
var self__ = this;
var _14804__$1 = this;
return (new cljs.core.async.t_cljs$core$async14802(self__.flag,meta14803__$1));
}));

(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14804){
var self__ = this;
var _14804__$1 = this;
return self__.meta14803;
}));

(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14803","meta14803",499516811,null)], null);
}));

(cljs.core.async.t_cljs$core$async14802.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14802");

(cljs.core.async.t_cljs$core$async14802.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14802");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14802.
 */
cljs.core.async.__GT_t_cljs$core$async14802 = (function cljs$core$async$__GT_t_cljs$core$async14802(flag,meta14803){
return (new cljs.core.async.t_cljs$core$async14802(flag,meta14803));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14802(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14823 = (function (flag,cb,meta14824){
this.flag = flag;
this.cb = cb;
this.meta14824 = meta14824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14825,meta14824__$1){
var self__ = this;
var _14825__$1 = this;
return (new cljs.core.async.t_cljs$core$async14823(self__.flag,self__.cb,meta14824__$1));
}));

(cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14825){
var self__ = this;
var _14825__$1 = this;
return self__.meta14824;
}));

(cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14823.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14824","meta14824",1336704248,null)], null);
}));

(cljs.core.async.t_cljs$core$async14823.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14823");

(cljs.core.async.t_cljs$core$async14823.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14823");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14823.
 */
cljs.core.async.__GT_t_cljs$core$async14823 = (function cljs$core$async$__GT_t_cljs$core$async14823(flag,cb,meta14824){
return (new cljs.core.async.t_cljs$core$async14823(flag,cb,meta14824));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14823(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14856_SHARP_){
var G__14874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14856_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14874) : fret.call(null,G__14874));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14857_SHARP_){
var G__14881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14857_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14881) : fret.call(null,G__14881));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18396 = (i + (1));
i = G__18396;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18397 = arguments.length;
var i__5770__auto___18398 = (0);
while(true){
if((i__5770__auto___18398 < len__5769__auto___18397)){
args__5775__auto__.push((arguments[i__5770__auto___18398]));

var G__18399 = (i__5770__auto___18398 + (1));
i__5770__auto___18398 = G__18399;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14913){
var map__14914 = p__14913;
var map__14914__$1 = cljs.core.__destructure_map(map__14914);
var opts = map__14914__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14900){
var G__14901 = cljs.core.first(seq14900);
var seq14900__$1 = cljs.core.next(seq14900);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14901,seq14900__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14937 = arguments.length;
switch (G__14937) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14585__auto___18416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_14995){
var state_val_14996 = (state_14995[(1)]);
if((state_val_14996 === (7))){
var inst_14988 = (state_14995[(2)]);
var state_14995__$1 = state_14995;
var statearr_15011_18419 = state_14995__$1;
(statearr_15011_18419[(2)] = inst_14988);

(statearr_15011_18419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (1))){
var state_14995__$1 = state_14995;
var statearr_15012_18422 = state_14995__$1;
(statearr_15012_18422[(2)] = null);

(statearr_15012_18422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (4))){
var inst_14970 = (state_14995[(7)]);
var inst_14970__$1 = (state_14995[(2)]);
var inst_14972 = (inst_14970__$1 == null);
var state_14995__$1 = (function (){var statearr_15016 = state_14995;
(statearr_15016[(7)] = inst_14970__$1);

return statearr_15016;
})();
if(cljs.core.truth_(inst_14972)){
var statearr_15017_18427 = state_14995__$1;
(statearr_15017_18427[(1)] = (5));

} else {
var statearr_15018_18428 = state_14995__$1;
(statearr_15018_18428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (13))){
var state_14995__$1 = state_14995;
var statearr_15030_18433 = state_14995__$1;
(statearr_15030_18433[(2)] = null);

(statearr_15030_18433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (6))){
var inst_14970 = (state_14995[(7)]);
var state_14995__$1 = state_14995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14995__$1,(11),to,inst_14970);
} else {
if((state_val_14996 === (3))){
var inst_14992 = (state_14995[(2)]);
var state_14995__$1 = state_14995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14995__$1,inst_14992);
} else {
if((state_val_14996 === (12))){
var state_14995__$1 = state_14995;
var statearr_15036_18436 = state_14995__$1;
(statearr_15036_18436[(2)] = null);

(statearr_15036_18436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (2))){
var state_14995__$1 = state_14995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14995__$1,(4),from);
} else {
if((state_val_14996 === (11))){
var inst_14981 = (state_14995[(2)]);
var state_14995__$1 = state_14995;
if(cljs.core.truth_(inst_14981)){
var statearr_15045_18439 = state_14995__$1;
(statearr_15045_18439[(1)] = (12));

} else {
var statearr_15046_18440 = state_14995__$1;
(statearr_15046_18440[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (9))){
var state_14995__$1 = state_14995;
var statearr_15047_18442 = state_14995__$1;
(statearr_15047_18442[(2)] = null);

(statearr_15047_18442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (5))){
var state_14995__$1 = state_14995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15051_18445 = state_14995__$1;
(statearr_15051_18445[(1)] = (8));

} else {
var statearr_15054_18446 = state_14995__$1;
(statearr_15054_18446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (14))){
var inst_14986 = (state_14995[(2)]);
var state_14995__$1 = state_14995;
var statearr_15055_18447 = state_14995__$1;
(statearr_15055_18447[(2)] = inst_14986);

(statearr_15055_18447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (10))){
var inst_14978 = (state_14995[(2)]);
var state_14995__$1 = state_14995;
var statearr_15056_18448 = state_14995__$1;
(statearr_15056_18448[(2)] = inst_14978);

(statearr_15056_18448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14996 === (8))){
var inst_14975 = cljs.core.async.close_BANG_(to);
var state_14995__$1 = state_14995;
var statearr_15058_18449 = state_14995__$1;
(statearr_15058_18449[(2)] = inst_14975);

(statearr_15058_18449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_15062 = [null,null,null,null,null,null,null,null];
(statearr_15062[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_15062[(1)] = (1));

return statearr_15062;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_14995){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_14995);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15075){var ex__14019__auto__ = e15075;
var statearr_15076_18455 = state_14995;
(statearr_15076_18455[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_14995[(4)]))){
var statearr_15077_18458 = state_14995;
(statearr_15077_18458[(1)] = cljs.core.first((state_14995[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18463 = state_14995;
state_14995 = G__18463;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_14995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_14995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_15078 = f__14586__auto__();
(statearr_15078[(6)] = c__14585__auto___18416);

return statearr_15078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15083){
var vec__15084 = p__15083;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15084,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15084,(1),null);
var job = vec__15084;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14585__auto___18466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_15092){
var state_val_15093 = (state_15092[(1)]);
if((state_val_15093 === (1))){
var state_15092__$1 = state_15092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15092__$1,(2),res,v);
} else {
if((state_val_15093 === (2))){
var inst_15089 = (state_15092[(2)]);
var inst_15090 = cljs.core.async.close_BANG_(res);
var state_15092__$1 = (function (){var statearr_15094 = state_15092;
(statearr_15094[(7)] = inst_15089);

return statearr_15094;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15092__$1,inst_15090);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_15095 = [null,null,null,null,null,null,null,null];
(statearr_15095[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__);

(statearr_15095[(1)] = (1));

return statearr_15095;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1 = (function (state_15092){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15092);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15096){var ex__14019__auto__ = e15096;
var statearr_15097_18472 = state_15092;
(statearr_15097_18472[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_15092[(4)]))){
var statearr_15101_18473 = state_15092;
(statearr_15101_18473[(1)] = cljs.core.first((state_15092[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18474 = state_15092;
state_15092 = G__18474;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = function(state_15092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1.call(this,state_15092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_15104 = f__14586__auto__();
(statearr_15104[(6)] = c__14585__auto___18466);

return statearr_15104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15108){
var vec__15109 = p__15108;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15109,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15109,(1),null);
var job = vec__15109;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___18487 = n;
var __18488 = (0);
while(true){
if((__18488 < n__5636__auto___18487)){
var G__15120_18489 = type;
var G__15120_18490__$1 = (((G__15120_18489 instanceof cljs.core.Keyword))?G__15120_18489.fqn:null);
switch (G__15120_18490__$1) {
case "compute":
var c__14585__auto___18496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18488,c__14585__auto___18496,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async){
return (function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = ((function (__18488,c__14585__auto___18496,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async){
return (function (state_15136){
var state_val_15137 = (state_15136[(1)]);
if((state_val_15137 === (1))){
var state_15136__$1 = state_15136;
var statearr_15142_18500 = state_15136__$1;
(statearr_15142_18500[(2)] = null);

(statearr_15142_18500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (2))){
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15136__$1,(4),jobs);
} else {
if((state_val_15137 === (3))){
var inst_15134 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15136__$1,inst_15134);
} else {
if((state_val_15137 === (4))){
var inst_15126 = (state_15136[(2)]);
var inst_15127 = process__$1(inst_15126);
var state_15136__$1 = state_15136;
if(cljs.core.truth_(inst_15127)){
var statearr_15146_18501 = state_15136__$1;
(statearr_15146_18501[(1)] = (5));

} else {
var statearr_15148_18502 = state_15136__$1;
(statearr_15148_18502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (5))){
var state_15136__$1 = state_15136;
var statearr_15151_18503 = state_15136__$1;
(statearr_15151_18503[(2)] = null);

(statearr_15151_18503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (6))){
var state_15136__$1 = state_15136;
var statearr_15154_18504 = state_15136__$1;
(statearr_15154_18504[(2)] = null);

(statearr_15154_18504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (7))){
var inst_15132 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15158_18506 = state_15136__$1;
(statearr_15158_18506[(2)] = inst_15132);

(statearr_15158_18506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18488,c__14585__auto___18496,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async))
;
return ((function (__18488,switch__14015__auto__,c__14585__auto___18496,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_15159 = [null,null,null,null,null,null,null];
(statearr_15159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__);

(statearr_15159[(1)] = (1));

return statearr_15159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1 = (function (state_15136){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15136);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15160){var ex__14019__auto__ = e15160;
var statearr_15161_18507 = state_15136;
(statearr_15161_18507[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_15136[(4)]))){
var statearr_15162_18510 = state_15136;
(statearr_15162_18510[(1)] = cljs.core.first((state_15136[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18512 = state_15136;
state_15136 = G__18512;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = function(state_15136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1.call(this,state_15136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__;
})()
;})(__18488,switch__14015__auto__,c__14585__auto___18496,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async))
})();
var state__14587__auto__ = (function (){var statearr_15165 = f__14586__auto__();
(statearr_15165[(6)] = c__14585__auto___18496);

return statearr_15165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
});})(__18488,c__14585__auto___18496,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async))
);


break;
case "async":
var c__14585__auto___18513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18488,c__14585__auto___18513,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async){
return (function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = ((function (__18488,c__14585__auto___18513,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async){
return (function (state_15195){
var state_val_15196 = (state_15195[(1)]);
if((state_val_15196 === (1))){
var state_15195__$1 = state_15195;
var statearr_15203_18519 = state_15195__$1;
(statearr_15203_18519[(2)] = null);

(statearr_15203_18519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15196 === (2))){
var state_15195__$1 = state_15195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15195__$1,(4),jobs);
} else {
if((state_val_15196 === (3))){
var inst_15193 = (state_15195[(2)]);
var state_15195__$1 = state_15195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15195__$1,inst_15193);
} else {
if((state_val_15196 === (4))){
var inst_15185 = (state_15195[(2)]);
var inst_15186 = async(inst_15185);
var state_15195__$1 = state_15195;
if(cljs.core.truth_(inst_15186)){
var statearr_15221_18526 = state_15195__$1;
(statearr_15221_18526[(1)] = (5));

} else {
var statearr_15227_18528 = state_15195__$1;
(statearr_15227_18528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15196 === (5))){
var state_15195__$1 = state_15195;
var statearr_15234_18530 = state_15195__$1;
(statearr_15234_18530[(2)] = null);

(statearr_15234_18530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15196 === (6))){
var state_15195__$1 = state_15195;
var statearr_15235_18535 = state_15195__$1;
(statearr_15235_18535[(2)] = null);

(statearr_15235_18535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15196 === (7))){
var inst_15191 = (state_15195[(2)]);
var state_15195__$1 = state_15195;
var statearr_15237_18537 = state_15195__$1;
(statearr_15237_18537[(2)] = inst_15191);

(statearr_15237_18537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18488,c__14585__auto___18513,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async))
;
return ((function (__18488,switch__14015__auto__,c__14585__auto___18513,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_15247 = [null,null,null,null,null,null,null];
(statearr_15247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__);

(statearr_15247[(1)] = (1));

return statearr_15247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1 = (function (state_15195){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15195);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15249){var ex__14019__auto__ = e15249;
var statearr_15251_18549 = state_15195;
(statearr_15251_18549[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_15195[(4)]))){
var statearr_15255_18550 = state_15195;
(statearr_15255_18550[(1)] = cljs.core.first((state_15195[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18552 = state_15195;
state_15195 = G__18552;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = function(state_15195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1.call(this,state_15195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__;
})()
;})(__18488,switch__14015__auto__,c__14585__auto___18513,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async))
})();
var state__14587__auto__ = (function (){var statearr_15256 = f__14586__auto__();
(statearr_15256[(6)] = c__14585__auto___18513);

return statearr_15256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
});})(__18488,c__14585__auto___18513,G__15120_18489,G__15120_18490__$1,n__5636__auto___18487,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15120_18490__$1)].join('')));

}

var G__18556 = (__18488 + (1));
__18488 = G__18556;
continue;
} else {
}
break;
}

var c__14585__auto___18558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_15290){
var state_val_15291 = (state_15290[(1)]);
if((state_val_15291 === (7))){
var inst_15285 = (state_15290[(2)]);
var state_15290__$1 = state_15290;
var statearr_15299_18562 = state_15290__$1;
(statearr_15299_18562[(2)] = inst_15285);

(statearr_15299_18562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (1))){
var state_15290__$1 = state_15290;
var statearr_15300_18566 = state_15290__$1;
(statearr_15300_18566[(2)] = null);

(statearr_15300_18566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (4))){
var inst_15264 = (state_15290[(7)]);
var inst_15264__$1 = (state_15290[(2)]);
var inst_15265 = (inst_15264__$1 == null);
var state_15290__$1 = (function (){var statearr_15302 = state_15290;
(statearr_15302[(7)] = inst_15264__$1);

return statearr_15302;
})();
if(cljs.core.truth_(inst_15265)){
var statearr_15305_18567 = state_15290__$1;
(statearr_15305_18567[(1)] = (5));

} else {
var statearr_15306_18569 = state_15290__$1;
(statearr_15306_18569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (6))){
var inst_15264 = (state_15290[(7)]);
var inst_15269 = (state_15290[(8)]);
var inst_15269__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15273 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15274 = [inst_15264,inst_15269__$1];
var inst_15275 = (new cljs.core.PersistentVector(null,2,(5),inst_15273,inst_15274,null));
var state_15290__$1 = (function (){var statearr_15309 = state_15290;
(statearr_15309[(8)] = inst_15269__$1);

return statearr_15309;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15290__$1,(8),jobs,inst_15275);
} else {
if((state_val_15291 === (3))){
var inst_15287 = (state_15290[(2)]);
var state_15290__$1 = state_15290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15290__$1,inst_15287);
} else {
if((state_val_15291 === (2))){
var state_15290__$1 = state_15290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15290__$1,(4),from);
} else {
if((state_val_15291 === (9))){
var inst_15282 = (state_15290[(2)]);
var state_15290__$1 = (function (){var statearr_15315 = state_15290;
(statearr_15315[(9)] = inst_15282);

return statearr_15315;
})();
var statearr_15316_18578 = state_15290__$1;
(statearr_15316_18578[(2)] = null);

(statearr_15316_18578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (5))){
var inst_15267 = cljs.core.async.close_BANG_(jobs);
var state_15290__$1 = state_15290;
var statearr_15322_18579 = state_15290__$1;
(statearr_15322_18579[(2)] = inst_15267);

(statearr_15322_18579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (8))){
var inst_15269 = (state_15290[(8)]);
var inst_15280 = (state_15290[(2)]);
var state_15290__$1 = (function (){var statearr_15325 = state_15290;
(statearr_15325[(10)] = inst_15280);

return statearr_15325;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15290__$1,(9),results,inst_15269);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_15328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__);

(statearr_15328[(1)] = (1));

return statearr_15328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1 = (function (state_15290){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15290);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15333){var ex__14019__auto__ = e15333;
var statearr_15334_18585 = state_15290;
(statearr_15334_18585[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_15290[(4)]))){
var statearr_15337_18587 = state_15290;
(statearr_15337_18587[(1)] = cljs.core.first((state_15290[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18589 = state_15290;
state_15290 = G__18589;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = function(state_15290){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1.call(this,state_15290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_15339 = f__14586__auto__();
(statearr_15339[(6)] = c__14585__auto___18558);

return statearr_15339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


var c__14585__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_15378){
var state_val_15379 = (state_15378[(1)]);
if((state_val_15379 === (7))){
var inst_15374 = (state_15378[(2)]);
var state_15378__$1 = state_15378;
var statearr_15382_18594 = state_15378__$1;
(statearr_15382_18594[(2)] = inst_15374);

(statearr_15382_18594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (20))){
var state_15378__$1 = state_15378;
var statearr_15391_18596 = state_15378__$1;
(statearr_15391_18596[(2)] = null);

(statearr_15391_18596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (1))){
var state_15378__$1 = state_15378;
var statearr_15399_18599 = state_15378__$1;
(statearr_15399_18599[(2)] = null);

(statearr_15399_18599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (4))){
var inst_15342 = (state_15378[(7)]);
var inst_15342__$1 = (state_15378[(2)]);
var inst_15343 = (inst_15342__$1 == null);
var state_15378__$1 = (function (){var statearr_15400 = state_15378;
(statearr_15400[(7)] = inst_15342__$1);

return statearr_15400;
})();
if(cljs.core.truth_(inst_15343)){
var statearr_15403_18604 = state_15378__$1;
(statearr_15403_18604[(1)] = (5));

} else {
var statearr_15408_18605 = state_15378__$1;
(statearr_15408_18605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (15))){
var inst_15355 = (state_15378[(8)]);
var state_15378__$1 = state_15378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15378__$1,(18),to,inst_15355);
} else {
if((state_val_15379 === (21))){
var inst_15368 = (state_15378[(2)]);
var state_15378__$1 = state_15378;
var statearr_15412_18607 = state_15378__$1;
(statearr_15412_18607[(2)] = inst_15368);

(statearr_15412_18607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (13))){
var inst_15370 = (state_15378[(2)]);
var state_15378__$1 = (function (){var statearr_15415 = state_15378;
(statearr_15415[(9)] = inst_15370);

return statearr_15415;
})();
var statearr_15416_18610 = state_15378__$1;
(statearr_15416_18610[(2)] = null);

(statearr_15416_18610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (6))){
var inst_15342 = (state_15378[(7)]);
var state_15378__$1 = state_15378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15378__$1,(11),inst_15342);
} else {
if((state_val_15379 === (17))){
var inst_15363 = (state_15378[(2)]);
var state_15378__$1 = state_15378;
if(cljs.core.truth_(inst_15363)){
var statearr_15419_18614 = state_15378__$1;
(statearr_15419_18614[(1)] = (19));

} else {
var statearr_15420_18616 = state_15378__$1;
(statearr_15420_18616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (3))){
var inst_15376 = (state_15378[(2)]);
var state_15378__$1 = state_15378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15378__$1,inst_15376);
} else {
if((state_val_15379 === (12))){
var inst_15352 = (state_15378[(10)]);
var state_15378__$1 = state_15378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15378__$1,(14),inst_15352);
} else {
if((state_val_15379 === (2))){
var state_15378__$1 = state_15378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15378__$1,(4),results);
} else {
if((state_val_15379 === (19))){
var state_15378__$1 = state_15378;
var statearr_15456_18620 = state_15378__$1;
(statearr_15456_18620[(2)] = null);

(statearr_15456_18620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (11))){
var inst_15352 = (state_15378[(2)]);
var state_15378__$1 = (function (){var statearr_15459 = state_15378;
(statearr_15459[(10)] = inst_15352);

return statearr_15459;
})();
var statearr_15468_18624 = state_15378__$1;
(statearr_15468_18624[(2)] = null);

(statearr_15468_18624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (9))){
var state_15378__$1 = state_15378;
var statearr_15472_18625 = state_15378__$1;
(statearr_15472_18625[(2)] = null);

(statearr_15472_18625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (5))){
var state_15378__$1 = state_15378;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15473_18628 = state_15378__$1;
(statearr_15473_18628[(1)] = (8));

} else {
var statearr_15474_18634 = state_15378__$1;
(statearr_15474_18634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (14))){
var inst_15357 = (state_15378[(11)]);
var inst_15355 = (state_15378[(8)]);
var inst_15355__$1 = (state_15378[(2)]);
var inst_15356 = (inst_15355__$1 == null);
var inst_15357__$1 = cljs.core.not(inst_15356);
var state_15378__$1 = (function (){var statearr_15475 = state_15378;
(statearr_15475[(11)] = inst_15357__$1);

(statearr_15475[(8)] = inst_15355__$1);

return statearr_15475;
})();
if(inst_15357__$1){
var statearr_15476_18642 = state_15378__$1;
(statearr_15476_18642[(1)] = (15));

} else {
var statearr_15477_18643 = state_15378__$1;
(statearr_15477_18643[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (16))){
var inst_15357 = (state_15378[(11)]);
var state_15378__$1 = state_15378;
var statearr_15479_18646 = state_15378__$1;
(statearr_15479_18646[(2)] = inst_15357);

(statearr_15479_18646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (10))){
var inst_15349 = (state_15378[(2)]);
var state_15378__$1 = state_15378;
var statearr_15483_18648 = state_15378__$1;
(statearr_15483_18648[(2)] = inst_15349);

(statearr_15483_18648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (18))){
var inst_15360 = (state_15378[(2)]);
var state_15378__$1 = state_15378;
var statearr_15484_18653 = state_15378__$1;
(statearr_15484_18653[(2)] = inst_15360);

(statearr_15484_18653[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15379 === (8))){
var inst_15346 = cljs.core.async.close_BANG_(to);
var state_15378__$1 = state_15378;
var statearr_15487_18656 = state_15378__$1;
(statearr_15487_18656[(2)] = inst_15346);

(statearr_15487_18656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_15491 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__);

(statearr_15491[(1)] = (1));

return statearr_15491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1 = (function (state_15378){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15378);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15497){var ex__14019__auto__ = e15497;
var statearr_15498_18657 = state_15378;
(statearr_15498_18657[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_15378[(4)]))){
var statearr_15499_18658 = state_15378;
(statearr_15499_18658[(1)] = cljs.core.first((state_15378[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18659 = state_15378;
state_15378 = G__18659;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__ = function(state_15378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1.call(this,state_15378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_15500 = f__14586__auto__();
(statearr_15500[(6)] = c__14585__auto__);

return statearr_15500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));

return c__14585__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15505 = arguments.length;
switch (G__15505) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15515 = arguments.length;
switch (G__15515) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15526 = arguments.length;
switch (G__15526) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14585__auto___18689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_15571){
var state_val_15572 = (state_15571[(1)]);
if((state_val_15572 === (7))){
var inst_15563 = (state_15571[(2)]);
var state_15571__$1 = state_15571;
var statearr_15576_18693 = state_15571__$1;
(statearr_15576_18693[(2)] = inst_15563);

(statearr_15576_18693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (1))){
var state_15571__$1 = state_15571;
var statearr_15585_18694 = state_15571__$1;
(statearr_15585_18694[(2)] = null);

(statearr_15585_18694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (4))){
var inst_15536 = (state_15571[(7)]);
var inst_15536__$1 = (state_15571[(2)]);
var inst_15541 = (inst_15536__$1 == null);
var state_15571__$1 = (function (){var statearr_15598 = state_15571;
(statearr_15598[(7)] = inst_15536__$1);

return statearr_15598;
})();
if(cljs.core.truth_(inst_15541)){
var statearr_15599_18700 = state_15571__$1;
(statearr_15599_18700[(1)] = (5));

} else {
var statearr_15600_18701 = state_15571__$1;
(statearr_15600_18701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (13))){
var state_15571__$1 = state_15571;
var statearr_15602_18703 = state_15571__$1;
(statearr_15602_18703[(2)] = null);

(statearr_15602_18703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (6))){
var inst_15536 = (state_15571[(7)]);
var inst_15549 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15536) : p.call(null,inst_15536));
var state_15571__$1 = state_15571;
if(cljs.core.truth_(inst_15549)){
var statearr_15606_18707 = state_15571__$1;
(statearr_15606_18707[(1)] = (9));

} else {
var statearr_15607_18708 = state_15571__$1;
(statearr_15607_18708[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (3))){
var inst_15565 = (state_15571[(2)]);
var state_15571__$1 = state_15571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15571__$1,inst_15565);
} else {
if((state_val_15572 === (12))){
var state_15571__$1 = state_15571;
var statearr_15616_18712 = state_15571__$1;
(statearr_15616_18712[(2)] = null);

(statearr_15616_18712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (2))){
var state_15571__$1 = state_15571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15571__$1,(4),ch);
} else {
if((state_val_15572 === (11))){
var inst_15536 = (state_15571[(7)]);
var inst_15553 = (state_15571[(2)]);
var state_15571__$1 = state_15571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15571__$1,(8),inst_15553,inst_15536);
} else {
if((state_val_15572 === (9))){
var state_15571__$1 = state_15571;
var statearr_15628_18714 = state_15571__$1;
(statearr_15628_18714[(2)] = tc);

(statearr_15628_18714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (5))){
var inst_15543 = cljs.core.async.close_BANG_(tc);
var inst_15547 = cljs.core.async.close_BANG_(fc);
var state_15571__$1 = (function (){var statearr_15631 = state_15571;
(statearr_15631[(8)] = inst_15543);

return statearr_15631;
})();
var statearr_15632_18721 = state_15571__$1;
(statearr_15632_18721[(2)] = inst_15547);

(statearr_15632_18721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (14))){
var inst_15561 = (state_15571[(2)]);
var state_15571__$1 = state_15571;
var statearr_15633_18722 = state_15571__$1;
(statearr_15633_18722[(2)] = inst_15561);

(statearr_15633_18722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (10))){
var state_15571__$1 = state_15571;
var statearr_15635_18723 = state_15571__$1;
(statearr_15635_18723[(2)] = fc);

(statearr_15635_18723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (8))){
var inst_15556 = (state_15571[(2)]);
var state_15571__$1 = state_15571;
if(cljs.core.truth_(inst_15556)){
var statearr_15636_18726 = state_15571__$1;
(statearr_15636_18726[(1)] = (12));

} else {
var statearr_15637_18727 = state_15571__$1;
(statearr_15637_18727[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_15638 = [null,null,null,null,null,null,null,null,null];
(statearr_15638[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_15638[(1)] = (1));

return statearr_15638;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_15571){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15571);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15640){var ex__14019__auto__ = e15640;
var statearr_15641_18733 = state_15571;
(statearr_15641_18733[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_15571[(4)]))){
var statearr_15645_18735 = state_15571;
(statearr_15645_18735[(1)] = cljs.core.first((state_15571[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18738 = state_15571;
state_15571 = G__18738;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_15571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_15571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_15650 = f__14586__auto__();
(statearr_15650[(6)] = c__14585__auto___18689);

return statearr_15650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14585__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_15678){
var state_val_15679 = (state_15678[(1)]);
if((state_val_15679 === (7))){
var inst_15674 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15684_18745 = state_15678__$1;
(statearr_15684_18745[(2)] = inst_15674);

(statearr_15684_18745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (1))){
var inst_15657 = init;
var inst_15658 = inst_15657;
var state_15678__$1 = (function (){var statearr_15685 = state_15678;
(statearr_15685[(7)] = inst_15658);

return statearr_15685;
})();
var statearr_15687_18748 = state_15678__$1;
(statearr_15687_18748[(2)] = null);

(statearr_15687_18748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (4))){
var inst_15661 = (state_15678[(8)]);
var inst_15661__$1 = (state_15678[(2)]);
var inst_15662 = (inst_15661__$1 == null);
var state_15678__$1 = (function (){var statearr_15690 = state_15678;
(statearr_15690[(8)] = inst_15661__$1);

return statearr_15690;
})();
if(cljs.core.truth_(inst_15662)){
var statearr_15692_18756 = state_15678__$1;
(statearr_15692_18756[(1)] = (5));

} else {
var statearr_15693_18757 = state_15678__$1;
(statearr_15693_18757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (6))){
var inst_15658 = (state_15678[(7)]);
var inst_15661 = (state_15678[(8)]);
var inst_15665 = (state_15678[(9)]);
var inst_15665__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15658,inst_15661) : f.call(null,inst_15658,inst_15661));
var inst_15666 = cljs.core.reduced_QMARK_(inst_15665__$1);
var state_15678__$1 = (function (){var statearr_15694 = state_15678;
(statearr_15694[(9)] = inst_15665__$1);

return statearr_15694;
})();
if(inst_15666){
var statearr_15701_18758 = state_15678__$1;
(statearr_15701_18758[(1)] = (8));

} else {
var statearr_15702_18761 = state_15678__$1;
(statearr_15702_18761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (3))){
var inst_15676 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15678__$1,inst_15676);
} else {
if((state_val_15679 === (2))){
var state_15678__$1 = state_15678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15678__$1,(4),ch);
} else {
if((state_val_15679 === (9))){
var inst_15665 = (state_15678[(9)]);
var inst_15658 = inst_15665;
var state_15678__$1 = (function (){var statearr_15703 = state_15678;
(statearr_15703[(7)] = inst_15658);

return statearr_15703;
})();
var statearr_15704_18763 = state_15678__$1;
(statearr_15704_18763[(2)] = null);

(statearr_15704_18763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (5))){
var inst_15658 = (state_15678[(7)]);
var state_15678__$1 = state_15678;
var statearr_15716_18764 = state_15678__$1;
(statearr_15716_18764[(2)] = inst_15658);

(statearr_15716_18764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (10))){
var inst_15672 = (state_15678[(2)]);
var state_15678__$1 = state_15678;
var statearr_15717_18765 = state_15678__$1;
(statearr_15717_18765[(2)] = inst_15672);

(statearr_15717_18765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15679 === (8))){
var inst_15665 = (state_15678[(9)]);
var inst_15668 = cljs.core.deref(inst_15665);
var state_15678__$1 = state_15678;
var statearr_15724_18767 = state_15678__$1;
(statearr_15724_18767[(2)] = inst_15668);

(statearr_15724_18767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14016__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14016__auto____0 = (function (){
var statearr_15728 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15728[(0)] = cljs$core$async$reduce_$_state_machine__14016__auto__);

(statearr_15728[(1)] = (1));

return statearr_15728;
});
var cljs$core$async$reduce_$_state_machine__14016__auto____1 = (function (state_15678){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15678);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15732){var ex__14019__auto__ = e15732;
var statearr_15733_18775 = state_15678;
(statearr_15733_18775[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_15678[(4)]))){
var statearr_15734_18778 = state_15678;
(statearr_15734_18778[(1)] = cljs.core.first((state_15678[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18781 = state_15678;
state_15678 = G__18781;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14016__auto__ = function(state_15678){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14016__auto____1.call(this,state_15678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14016__auto____0;
cljs$core$async$reduce_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14016__auto____1;
return cljs$core$async$reduce_$_state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_15735 = f__14586__auto__();
(statearr_15735[(6)] = c__14585__auto__);

return statearr_15735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));

return c__14585__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14585__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_15746){
var state_val_15747 = (state_15746[(1)]);
if((state_val_15747 === (1))){
var inst_15741 = cljs.core.async.reduce(f__$1,init,ch);
var state_15746__$1 = state_15746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15746__$1,(2),inst_15741);
} else {
if((state_val_15747 === (2))){
var inst_15743 = (state_15746[(2)]);
var inst_15744 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15743) : f__$1.call(null,inst_15743));
var state_15746__$1 = state_15746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15746__$1,inst_15744);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14016__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14016__auto____0 = (function (){
var statearr_15752 = [null,null,null,null,null,null,null];
(statearr_15752[(0)] = cljs$core$async$transduce_$_state_machine__14016__auto__);

(statearr_15752[(1)] = (1));

return statearr_15752;
});
var cljs$core$async$transduce_$_state_machine__14016__auto____1 = (function (state_15746){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15746);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15757){var ex__14019__auto__ = e15757;
var statearr_15759_18785 = state_15746;
(statearr_15759_18785[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_15746[(4)]))){
var statearr_15760_18786 = state_15746;
(statearr_15760_18786[(1)] = cljs.core.first((state_15746[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18787 = state_15746;
state_15746 = G__18787;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14016__auto__ = function(state_15746){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14016__auto____1.call(this,state_15746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14016__auto____0;
cljs$core$async$transduce_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14016__auto____1;
return cljs$core$async$transduce_$_state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_15768 = f__14586__auto__();
(statearr_15768[(6)] = c__14585__auto__);

return statearr_15768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));

return c__14585__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15783 = arguments.length;
switch (G__15783) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14585__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_15820){
var state_val_15821 = (state_15820[(1)]);
if((state_val_15821 === (7))){
var inst_15802 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
var statearr_15832_18789 = state_15820__$1;
(statearr_15832_18789[(2)] = inst_15802);

(statearr_15832_18789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (1))){
var inst_15784 = cljs.core.seq(coll);
var inst_15785 = inst_15784;
var state_15820__$1 = (function (){var statearr_15834 = state_15820;
(statearr_15834[(7)] = inst_15785);

return statearr_15834;
})();
var statearr_15837_18790 = state_15820__$1;
(statearr_15837_18790[(2)] = null);

(statearr_15837_18790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (4))){
var inst_15785 = (state_15820[(7)]);
var inst_15800 = cljs.core.first(inst_15785);
var state_15820__$1 = state_15820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15820__$1,(7),ch,inst_15800);
} else {
if((state_val_15821 === (13))){
var inst_15814 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
var statearr_15840_18791 = state_15820__$1;
(statearr_15840_18791[(2)] = inst_15814);

(statearr_15840_18791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (6))){
var inst_15805 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
if(cljs.core.truth_(inst_15805)){
var statearr_15841_18793 = state_15820__$1;
(statearr_15841_18793[(1)] = (8));

} else {
var statearr_15844_18794 = state_15820__$1;
(statearr_15844_18794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (3))){
var inst_15818 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15820__$1,inst_15818);
} else {
if((state_val_15821 === (12))){
var state_15820__$1 = state_15820;
var statearr_15846_18796 = state_15820__$1;
(statearr_15846_18796[(2)] = null);

(statearr_15846_18796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (2))){
var inst_15785 = (state_15820[(7)]);
var state_15820__$1 = state_15820;
if(cljs.core.truth_(inst_15785)){
var statearr_15848_18797 = state_15820__$1;
(statearr_15848_18797[(1)] = (4));

} else {
var statearr_15849_18799 = state_15820__$1;
(statearr_15849_18799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (11))){
var inst_15811 = cljs.core.async.close_BANG_(ch);
var state_15820__$1 = state_15820;
var statearr_15850_18800 = state_15820__$1;
(statearr_15850_18800[(2)] = inst_15811);

(statearr_15850_18800[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (9))){
var state_15820__$1 = state_15820;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15854_18802 = state_15820__$1;
(statearr_15854_18802[(1)] = (11));

} else {
var statearr_15855_18803 = state_15820__$1;
(statearr_15855_18803[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (5))){
var inst_15785 = (state_15820[(7)]);
var state_15820__$1 = state_15820;
var statearr_15858_18804 = state_15820__$1;
(statearr_15858_18804[(2)] = inst_15785);

(statearr_15858_18804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (10))){
var inst_15816 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
var statearr_15859_18805 = state_15820__$1;
(statearr_15859_18805[(2)] = inst_15816);

(statearr_15859_18805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (8))){
var inst_15785 = (state_15820[(7)]);
var inst_15807 = cljs.core.next(inst_15785);
var inst_15785__$1 = inst_15807;
var state_15820__$1 = (function (){var statearr_15865 = state_15820;
(statearr_15865[(7)] = inst_15785__$1);

return statearr_15865;
})();
var statearr_15866_18806 = state_15820__$1;
(statearr_15866_18806[(2)] = null);

(statearr_15866_18806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_15869 = [null,null,null,null,null,null,null,null];
(statearr_15869[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_15869[(1)] = (1));

return statearr_15869;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_15820){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_15820);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e15871){var ex__14019__auto__ = e15871;
var statearr_15872_18808 = state_15820;
(statearr_15872_18808[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_15820[(4)]))){
var statearr_15875_18809 = state_15820;
(statearr_15875_18809[(1)] = cljs.core.first((state_15820[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18810 = state_15820;
state_15820 = G__18810;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_15820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_15820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_15885 = f__14586__auto__();
(statearr_15885[(6)] = c__14585__auto__);

return statearr_15885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));

return c__14585__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15894 = arguments.length;
switch (G__15894) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18825 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18825(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18829 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18829(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18830 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18830(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18831 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18831(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15960 = (function (ch,cs,meta15961){
this.ch = ch;
this.cs = cs;
this.meta15961 = meta15961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15962,meta15961__$1){
var self__ = this;
var _15962__$1 = this;
return (new cljs.core.async.t_cljs$core$async15960(self__.ch,self__.cs,meta15961__$1));
}));

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15962){
var self__ = this;
var _15962__$1 = this;
return self__.meta15961;
}));

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15960.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15961","meta15961",1647603693,null)], null);
}));

(cljs.core.async.t_cljs$core$async15960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15960");

(cljs.core.async.t_cljs$core$async15960.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15960.
 */
cljs.core.async.__GT_t_cljs$core$async15960 = (function cljs$core$async$__GT_t_cljs$core$async15960(ch,cs,meta15961){
return (new cljs.core.async.t_cljs$core$async15960(ch,cs,meta15961));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15960(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14585__auto___18836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_16142){
var state_val_16149 = (state_16142[(1)]);
if((state_val_16149 === (7))){
var inst_16138 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
var statearr_16154_18841 = state_16142__$1;
(statearr_16154_18841[(2)] = inst_16138);

(statearr_16154_18841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (20))){
var inst_16026 = (state_16142[(7)]);
var inst_16039 = cljs.core.first(inst_16026);
var inst_16040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16039,(0),null);
var inst_16041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16039,(1),null);
var state_16142__$1 = (function (){var statearr_16160 = state_16142;
(statearr_16160[(8)] = inst_16040);

return statearr_16160;
})();
if(cljs.core.truth_(inst_16041)){
var statearr_16161_18843 = state_16142__$1;
(statearr_16161_18843[(1)] = (22));

} else {
var statearr_16162_18844 = state_16142__$1;
(statearr_16162_18844[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (27))){
var inst_16076 = (state_16142[(9)]);
var inst_16074 = (state_16142[(10)]);
var inst_15990 = (state_16142[(11)]);
var inst_16085 = (state_16142[(12)]);
var inst_16085__$1 = cljs.core._nth(inst_16074,inst_16076);
var inst_16086 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16085__$1,inst_15990,done);
var state_16142__$1 = (function (){var statearr_16167 = state_16142;
(statearr_16167[(12)] = inst_16085__$1);

return statearr_16167;
})();
if(cljs.core.truth_(inst_16086)){
var statearr_16174_18845 = state_16142__$1;
(statearr_16174_18845[(1)] = (30));

} else {
var statearr_16176_18846 = state_16142__$1;
(statearr_16176_18846[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (1))){
var state_16142__$1 = state_16142;
var statearr_16177_18847 = state_16142__$1;
(statearr_16177_18847[(2)] = null);

(statearr_16177_18847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (24))){
var inst_16026 = (state_16142[(7)]);
var inst_16046 = (state_16142[(2)]);
var inst_16047 = cljs.core.next(inst_16026);
var inst_16003 = inst_16047;
var inst_16004 = null;
var inst_16005 = (0);
var inst_16006 = (0);
var state_16142__$1 = (function (){var statearr_16184 = state_16142;
(statearr_16184[(13)] = inst_16005);

(statearr_16184[(14)] = inst_16004);

(statearr_16184[(15)] = inst_16003);

(statearr_16184[(16)] = inst_16006);

(statearr_16184[(17)] = inst_16046);

return statearr_16184;
})();
var statearr_16185_18850 = state_16142__$1;
(statearr_16185_18850[(2)] = null);

(statearr_16185_18850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (39))){
var state_16142__$1 = state_16142;
var statearr_16190_18851 = state_16142__$1;
(statearr_16190_18851[(2)] = null);

(statearr_16190_18851[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (4))){
var inst_15990 = (state_16142[(11)]);
var inst_15990__$1 = (state_16142[(2)]);
var inst_15991 = (inst_15990__$1 == null);
var state_16142__$1 = (function (){var statearr_16192 = state_16142;
(statearr_16192[(11)] = inst_15990__$1);

return statearr_16192;
})();
if(cljs.core.truth_(inst_15991)){
var statearr_16193_18853 = state_16142__$1;
(statearr_16193_18853[(1)] = (5));

} else {
var statearr_16196_18854 = state_16142__$1;
(statearr_16196_18854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (15))){
var inst_16005 = (state_16142[(13)]);
var inst_16004 = (state_16142[(14)]);
var inst_16003 = (state_16142[(15)]);
var inst_16006 = (state_16142[(16)]);
var inst_16021 = (state_16142[(2)]);
var inst_16022 = (inst_16006 + (1));
var tmp16186 = inst_16005;
var tmp16187 = inst_16004;
var tmp16188 = inst_16003;
var inst_16003__$1 = tmp16188;
var inst_16004__$1 = tmp16187;
var inst_16005__$1 = tmp16186;
var inst_16006__$1 = inst_16022;
var state_16142__$1 = (function (){var statearr_16200 = state_16142;
(statearr_16200[(13)] = inst_16005__$1);

(statearr_16200[(14)] = inst_16004__$1);

(statearr_16200[(15)] = inst_16003__$1);

(statearr_16200[(16)] = inst_16006__$1);

(statearr_16200[(18)] = inst_16021);

return statearr_16200;
})();
var statearr_16204_18856 = state_16142__$1;
(statearr_16204_18856[(2)] = null);

(statearr_16204_18856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (21))){
var inst_16050 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
var statearr_16208_18857 = state_16142__$1;
(statearr_16208_18857[(2)] = inst_16050);

(statearr_16208_18857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (31))){
var inst_16085 = (state_16142[(12)]);
var inst_16089 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16085);
var state_16142__$1 = state_16142;
var statearr_16214_18859 = state_16142__$1;
(statearr_16214_18859[(2)] = inst_16089);

(statearr_16214_18859[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (32))){
var inst_16076 = (state_16142[(9)]);
var inst_16074 = (state_16142[(10)]);
var inst_16075 = (state_16142[(19)]);
var inst_16073 = (state_16142[(20)]);
var inst_16091 = (state_16142[(2)]);
var inst_16092 = (inst_16076 + (1));
var tmp16205 = inst_16074;
var tmp16206 = inst_16075;
var tmp16207 = inst_16073;
var inst_16073__$1 = tmp16207;
var inst_16074__$1 = tmp16205;
var inst_16075__$1 = tmp16206;
var inst_16076__$1 = inst_16092;
var state_16142__$1 = (function (){var statearr_16222 = state_16142;
(statearr_16222[(9)] = inst_16076__$1);

(statearr_16222[(10)] = inst_16074__$1);

(statearr_16222[(21)] = inst_16091);

(statearr_16222[(19)] = inst_16075__$1);

(statearr_16222[(20)] = inst_16073__$1);

return statearr_16222;
})();
var statearr_16229_18863 = state_16142__$1;
(statearr_16229_18863[(2)] = null);

(statearr_16229_18863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (40))){
var inst_16110 = (state_16142[(22)]);
var inst_16115 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16110);
var state_16142__$1 = state_16142;
var statearr_16234_18864 = state_16142__$1;
(statearr_16234_18864[(2)] = inst_16115);

(statearr_16234_18864[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (33))){
var inst_16100 = (state_16142[(23)]);
var inst_16103 = cljs.core.chunked_seq_QMARK_(inst_16100);
var state_16142__$1 = state_16142;
if(inst_16103){
var statearr_16236_18865 = state_16142__$1;
(statearr_16236_18865[(1)] = (36));

} else {
var statearr_16237_18866 = state_16142__$1;
(statearr_16237_18866[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (13))){
var inst_16015 = (state_16142[(24)]);
var inst_16018 = cljs.core.async.close_BANG_(inst_16015);
var state_16142__$1 = state_16142;
var statearr_16239_18867 = state_16142__$1;
(statearr_16239_18867[(2)] = inst_16018);

(statearr_16239_18867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (22))){
var inst_16040 = (state_16142[(8)]);
var inst_16043 = cljs.core.async.close_BANG_(inst_16040);
var state_16142__$1 = state_16142;
var statearr_16244_18868 = state_16142__$1;
(statearr_16244_18868[(2)] = inst_16043);

(statearr_16244_18868[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (36))){
var inst_16100 = (state_16142[(23)]);
var inst_16105 = cljs.core.chunk_first(inst_16100);
var inst_16106 = cljs.core.chunk_rest(inst_16100);
var inst_16107 = cljs.core.count(inst_16105);
var inst_16073 = inst_16106;
var inst_16074 = inst_16105;
var inst_16075 = inst_16107;
var inst_16076 = (0);
var state_16142__$1 = (function (){var statearr_16254 = state_16142;
(statearr_16254[(9)] = inst_16076);

(statearr_16254[(10)] = inst_16074);

(statearr_16254[(19)] = inst_16075);

(statearr_16254[(20)] = inst_16073);

return statearr_16254;
})();
var statearr_16255_18872 = state_16142__$1;
(statearr_16255_18872[(2)] = null);

(statearr_16255_18872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (41))){
var inst_16100 = (state_16142[(23)]);
var inst_16117 = (state_16142[(2)]);
var inst_16118 = cljs.core.next(inst_16100);
var inst_16073 = inst_16118;
var inst_16074 = null;
var inst_16075 = (0);
var inst_16076 = (0);
var state_16142__$1 = (function (){var statearr_16259 = state_16142;
(statearr_16259[(9)] = inst_16076);

(statearr_16259[(25)] = inst_16117);

(statearr_16259[(10)] = inst_16074);

(statearr_16259[(19)] = inst_16075);

(statearr_16259[(20)] = inst_16073);

return statearr_16259;
})();
var statearr_16260_18875 = state_16142__$1;
(statearr_16260_18875[(2)] = null);

(statearr_16260_18875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (43))){
var state_16142__$1 = state_16142;
var statearr_16261_18876 = state_16142__$1;
(statearr_16261_18876[(2)] = null);

(statearr_16261_18876[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (29))){
var inst_16126 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
var statearr_16263_18878 = state_16142__$1;
(statearr_16263_18878[(2)] = inst_16126);

(statearr_16263_18878[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (44))){
var inst_16135 = (state_16142[(2)]);
var state_16142__$1 = (function (){var statearr_16267 = state_16142;
(statearr_16267[(26)] = inst_16135);

return statearr_16267;
})();
var statearr_16268_18880 = state_16142__$1;
(statearr_16268_18880[(2)] = null);

(statearr_16268_18880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (6))){
var inst_16064 = (state_16142[(27)]);
var inst_16063 = cljs.core.deref(cs);
var inst_16064__$1 = cljs.core.keys(inst_16063);
var inst_16065 = cljs.core.count(inst_16064__$1);
var inst_16066 = cljs.core.reset_BANG_(dctr,inst_16065);
var inst_16072 = cljs.core.seq(inst_16064__$1);
var inst_16073 = inst_16072;
var inst_16074 = null;
var inst_16075 = (0);
var inst_16076 = (0);
var state_16142__$1 = (function (){var statearr_16270 = state_16142;
(statearr_16270[(9)] = inst_16076);

(statearr_16270[(10)] = inst_16074);

(statearr_16270[(28)] = inst_16066);

(statearr_16270[(19)] = inst_16075);

(statearr_16270[(20)] = inst_16073);

(statearr_16270[(27)] = inst_16064__$1);

return statearr_16270;
})();
var statearr_16272_18883 = state_16142__$1;
(statearr_16272_18883[(2)] = null);

(statearr_16272_18883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (28))){
var inst_16073 = (state_16142[(20)]);
var inst_16100 = (state_16142[(23)]);
var inst_16100__$1 = cljs.core.seq(inst_16073);
var state_16142__$1 = (function (){var statearr_16282 = state_16142;
(statearr_16282[(23)] = inst_16100__$1);

return statearr_16282;
})();
if(inst_16100__$1){
var statearr_16287_18884 = state_16142__$1;
(statearr_16287_18884[(1)] = (33));

} else {
var statearr_16297_18885 = state_16142__$1;
(statearr_16297_18885[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (25))){
var inst_16076 = (state_16142[(9)]);
var inst_16075 = (state_16142[(19)]);
var inst_16078 = (inst_16076 < inst_16075);
var inst_16079 = inst_16078;
var state_16142__$1 = state_16142;
if(cljs.core.truth_(inst_16079)){
var statearr_16299_18886 = state_16142__$1;
(statearr_16299_18886[(1)] = (27));

} else {
var statearr_16301_18887 = state_16142__$1;
(statearr_16301_18887[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (34))){
var state_16142__$1 = state_16142;
var statearr_16306_18888 = state_16142__$1;
(statearr_16306_18888[(2)] = null);

(statearr_16306_18888[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (17))){
var state_16142__$1 = state_16142;
var statearr_16309_18891 = state_16142__$1;
(statearr_16309_18891[(2)] = null);

(statearr_16309_18891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (3))){
var inst_16140 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16142__$1,inst_16140);
} else {
if((state_val_16149 === (12))){
var inst_16055 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
var statearr_16311_18893 = state_16142__$1;
(statearr_16311_18893[(2)] = inst_16055);

(statearr_16311_18893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (2))){
var state_16142__$1 = state_16142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16142__$1,(4),ch);
} else {
if((state_val_16149 === (23))){
var state_16142__$1 = state_16142;
var statearr_16315_18895 = state_16142__$1;
(statearr_16315_18895[(2)] = null);

(statearr_16315_18895[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (35))){
var inst_16124 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
var statearr_16316_18896 = state_16142__$1;
(statearr_16316_18896[(2)] = inst_16124);

(statearr_16316_18896[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (19))){
var inst_16026 = (state_16142[(7)]);
var inst_16031 = cljs.core.chunk_first(inst_16026);
var inst_16032 = cljs.core.chunk_rest(inst_16026);
var inst_16033 = cljs.core.count(inst_16031);
var inst_16003 = inst_16032;
var inst_16004 = inst_16031;
var inst_16005 = inst_16033;
var inst_16006 = (0);
var state_16142__$1 = (function (){var statearr_16317 = state_16142;
(statearr_16317[(13)] = inst_16005);

(statearr_16317[(14)] = inst_16004);

(statearr_16317[(15)] = inst_16003);

(statearr_16317[(16)] = inst_16006);

return statearr_16317;
})();
var statearr_16318_18898 = state_16142__$1;
(statearr_16318_18898[(2)] = null);

(statearr_16318_18898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (11))){
var inst_16003 = (state_16142[(15)]);
var inst_16026 = (state_16142[(7)]);
var inst_16026__$1 = cljs.core.seq(inst_16003);
var state_16142__$1 = (function (){var statearr_16319 = state_16142;
(statearr_16319[(7)] = inst_16026__$1);

return statearr_16319;
})();
if(inst_16026__$1){
var statearr_16320_18899 = state_16142__$1;
(statearr_16320_18899[(1)] = (16));

} else {
var statearr_16321_18900 = state_16142__$1;
(statearr_16321_18900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (9))){
var inst_16059 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
var statearr_16322_18901 = state_16142__$1;
(statearr_16322_18901[(2)] = inst_16059);

(statearr_16322_18901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (5))){
var inst_16001 = cljs.core.deref(cs);
var inst_16002 = cljs.core.seq(inst_16001);
var inst_16003 = inst_16002;
var inst_16004 = null;
var inst_16005 = (0);
var inst_16006 = (0);
var state_16142__$1 = (function (){var statearr_16323 = state_16142;
(statearr_16323[(13)] = inst_16005);

(statearr_16323[(14)] = inst_16004);

(statearr_16323[(15)] = inst_16003);

(statearr_16323[(16)] = inst_16006);

return statearr_16323;
})();
var statearr_16324_18906 = state_16142__$1;
(statearr_16324_18906[(2)] = null);

(statearr_16324_18906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (14))){
var state_16142__$1 = state_16142;
var statearr_16326_18907 = state_16142__$1;
(statearr_16326_18907[(2)] = null);

(statearr_16326_18907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (45))){
var inst_16132 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
var statearr_16327_18909 = state_16142__$1;
(statearr_16327_18909[(2)] = inst_16132);

(statearr_16327_18909[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (26))){
var inst_16064 = (state_16142[(27)]);
var inst_16128 = (state_16142[(2)]);
var inst_16129 = cljs.core.seq(inst_16064);
var state_16142__$1 = (function (){var statearr_16328 = state_16142;
(statearr_16328[(29)] = inst_16128);

return statearr_16328;
})();
if(inst_16129){
var statearr_16329_18911 = state_16142__$1;
(statearr_16329_18911[(1)] = (42));

} else {
var statearr_16330_18913 = state_16142__$1;
(statearr_16330_18913[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (16))){
var inst_16026 = (state_16142[(7)]);
var inst_16028 = cljs.core.chunked_seq_QMARK_(inst_16026);
var state_16142__$1 = state_16142;
if(inst_16028){
var statearr_16331_18918 = state_16142__$1;
(statearr_16331_18918[(1)] = (19));

} else {
var statearr_16332_18919 = state_16142__$1;
(statearr_16332_18919[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (38))){
var inst_16121 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
var statearr_16334_18920 = state_16142__$1;
(statearr_16334_18920[(2)] = inst_16121);

(statearr_16334_18920[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (30))){
var state_16142__$1 = state_16142;
var statearr_16345_18924 = state_16142__$1;
(statearr_16345_18924[(2)] = null);

(statearr_16345_18924[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (10))){
var inst_16004 = (state_16142[(14)]);
var inst_16006 = (state_16142[(16)]);
var inst_16014 = cljs.core._nth(inst_16004,inst_16006);
var inst_16015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16014,(0),null);
var inst_16016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16014,(1),null);
var state_16142__$1 = (function (){var statearr_16350 = state_16142;
(statearr_16350[(24)] = inst_16015);

return statearr_16350;
})();
if(cljs.core.truth_(inst_16016)){
var statearr_16351_18926 = state_16142__$1;
(statearr_16351_18926[(1)] = (13));

} else {
var statearr_16352_18927 = state_16142__$1;
(statearr_16352_18927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (18))){
var inst_16053 = (state_16142[(2)]);
var state_16142__$1 = state_16142;
var statearr_16353_18928 = state_16142__$1;
(statearr_16353_18928[(2)] = inst_16053);

(statearr_16353_18928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (42))){
var state_16142__$1 = state_16142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16142__$1,(45),dchan);
} else {
if((state_val_16149 === (37))){
var inst_16110 = (state_16142[(22)]);
var inst_15990 = (state_16142[(11)]);
var inst_16100 = (state_16142[(23)]);
var inst_16110__$1 = cljs.core.first(inst_16100);
var inst_16111 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16110__$1,inst_15990,done);
var state_16142__$1 = (function (){var statearr_16355 = state_16142;
(statearr_16355[(22)] = inst_16110__$1);

return statearr_16355;
})();
if(cljs.core.truth_(inst_16111)){
var statearr_16356_18930 = state_16142__$1;
(statearr_16356_18930[(1)] = (39));

} else {
var statearr_16357_18932 = state_16142__$1;
(statearr_16357_18932[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (8))){
var inst_16005 = (state_16142[(13)]);
var inst_16006 = (state_16142[(16)]);
var inst_16008 = (inst_16006 < inst_16005);
var inst_16009 = inst_16008;
var state_16142__$1 = state_16142;
if(cljs.core.truth_(inst_16009)){
var statearr_16361_18936 = state_16142__$1;
(statearr_16361_18936[(1)] = (10));

} else {
var statearr_16362_18937 = state_16142__$1;
(statearr_16362_18937[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14016__auto__ = null;
var cljs$core$async$mult_$_state_machine__14016__auto____0 = (function (){
var statearr_16367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16367[(0)] = cljs$core$async$mult_$_state_machine__14016__auto__);

(statearr_16367[(1)] = (1));

return statearr_16367;
});
var cljs$core$async$mult_$_state_machine__14016__auto____1 = (function (state_16142){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_16142);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e16376){var ex__14019__auto__ = e16376;
var statearr_16377_18939 = state_16142;
(statearr_16377_18939[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_16142[(4)]))){
var statearr_16378_18940 = state_16142;
(statearr_16378_18940[(1)] = cljs.core.first((state_16142[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18944 = state_16142;
state_16142 = G__18944;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14016__auto__ = function(state_16142){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14016__auto____1.call(this,state_16142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14016__auto____0;
cljs$core$async$mult_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14016__auto____1;
return cljs$core$async$mult_$_state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_16379 = f__14586__auto__();
(statearr_16379[(6)] = c__14585__auto___18836);

return statearr_16379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16385 = arguments.length;
switch (G__16385) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18947 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18947(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18954 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18954(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18955 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18955(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18960 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18960(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18962 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18962(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18968 = arguments.length;
var i__5770__auto___18969 = (0);
while(true){
if((i__5770__auto___18969 < len__5769__auto___18968)){
args__5775__auto__.push((arguments[i__5770__auto___18969]));

var G__18971 = (i__5770__auto___18969 + (1));
i__5770__auto___18969 = G__18971;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16472){
var map__16474 = p__16472;
var map__16474__$1 = cljs.core.__destructure_map(map__16474);
var opts = map__16474__$1;
var statearr_16480_18975 = state;
(statearr_16480_18975[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16489_18976 = state;
(statearr_16489_18976[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16490_18979 = state;
(statearr_16490_18979[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16461){
var G__16462 = cljs.core.first(seq16461);
var seq16461__$1 = cljs.core.next(seq16461);
var G__16463 = cljs.core.first(seq16461__$1);
var seq16461__$2 = cljs.core.next(seq16461__$1);
var G__16464 = cljs.core.first(seq16461__$2);
var seq16461__$3 = cljs.core.next(seq16461__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16462,G__16463,G__16464,seq16461__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16503 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16504){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16504 = meta16504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16505,meta16504__$1){
var self__ = this;
var _16505__$1 = this;
return (new cljs.core.async.t_cljs$core$async16503(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16504__$1));
}));

(cljs.core.async.t_cljs$core$async16503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16505){
var self__ = this;
var _16505__$1 = this;
return self__.meta16504;
}));

(cljs.core.async.t_cljs$core$async16503.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16503.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16503.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16503.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16503.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16503.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16503.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16504","meta16504",2141404573,null)], null);
}));

(cljs.core.async.t_cljs$core$async16503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16503");

(cljs.core.async.t_cljs$core$async16503.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16503.
 */
cljs.core.async.__GT_t_cljs$core$async16503 = (function cljs$core$async$__GT_t_cljs$core$async16503(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16504){
return (new cljs.core.async.t_cljs$core$async16503(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16504));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16503(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14585__auto___18993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_16602){
var state_val_16603 = (state_16602[(1)]);
if((state_val_16603 === (7))){
var inst_16555 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
if(cljs.core.truth_(inst_16555)){
var statearr_16610_18996 = state_16602__$1;
(statearr_16610_18996[(1)] = (8));

} else {
var statearr_16611_18998 = state_16602__$1;
(statearr_16611_18998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (20))){
var inst_16545 = (state_16602[(7)]);
var state_16602__$1 = state_16602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16602__$1,(23),out,inst_16545);
} else {
if((state_val_16603 === (1))){
var inst_16524 = calc_state();
var inst_16529 = cljs.core.__destructure_map(inst_16524);
var inst_16530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16529,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16529,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16529,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16533 = inst_16524;
var state_16602__$1 = (function (){var statearr_16616 = state_16602;
(statearr_16616[(8)] = inst_16533);

(statearr_16616[(9)] = inst_16532);

(statearr_16616[(10)] = inst_16530);

(statearr_16616[(11)] = inst_16531);

return statearr_16616;
})();
var statearr_16624_18999 = state_16602__$1;
(statearr_16624_18999[(2)] = null);

(statearr_16624_18999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (24))){
var inst_16536 = (state_16602[(12)]);
var inst_16533 = inst_16536;
var state_16602__$1 = (function (){var statearr_16627 = state_16602;
(statearr_16627[(8)] = inst_16533);

return statearr_16627;
})();
var statearr_16628_19000 = state_16602__$1;
(statearr_16628_19000[(2)] = null);

(statearr_16628_19000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (4))){
var inst_16550 = (state_16602[(13)]);
var inst_16545 = (state_16602[(7)]);
var inst_16544 = (state_16602[(2)]);
var inst_16545__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16544,(0),null);
var inst_16546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16544,(1),null);
var inst_16550__$1 = (inst_16545__$1 == null);
var state_16602__$1 = (function (){var statearr_16629 = state_16602;
(statearr_16629[(13)] = inst_16550__$1);

(statearr_16629[(7)] = inst_16545__$1);

(statearr_16629[(14)] = inst_16546);

return statearr_16629;
})();
if(cljs.core.truth_(inst_16550__$1)){
var statearr_16630_19001 = state_16602__$1;
(statearr_16630_19001[(1)] = (5));

} else {
var statearr_16631_19006 = state_16602__$1;
(statearr_16631_19006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (15))){
var inst_16537 = (state_16602[(15)]);
var inst_16572 = (state_16602[(16)]);
var inst_16572__$1 = cljs.core.empty_QMARK_(inst_16537);
var state_16602__$1 = (function (){var statearr_16632 = state_16602;
(statearr_16632[(16)] = inst_16572__$1);

return statearr_16632;
})();
if(inst_16572__$1){
var statearr_16633_19011 = state_16602__$1;
(statearr_16633_19011[(1)] = (17));

} else {
var statearr_16634_19012 = state_16602__$1;
(statearr_16634_19012[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (21))){
var inst_16536 = (state_16602[(12)]);
var inst_16533 = inst_16536;
var state_16602__$1 = (function (){var statearr_16635 = state_16602;
(statearr_16635[(8)] = inst_16533);

return statearr_16635;
})();
var statearr_16636_19020 = state_16602__$1;
(statearr_16636_19020[(2)] = null);

(statearr_16636_19020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (13))){
var inst_16562 = (state_16602[(2)]);
var inst_16563 = calc_state();
var inst_16533 = inst_16563;
var state_16602__$1 = (function (){var statearr_16641 = state_16602;
(statearr_16641[(17)] = inst_16562);

(statearr_16641[(8)] = inst_16533);

return statearr_16641;
})();
var statearr_16642_19030 = state_16602__$1;
(statearr_16642_19030[(2)] = null);

(statearr_16642_19030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (22))){
var inst_16592 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
var statearr_16645_19035 = state_16602__$1;
(statearr_16645_19035[(2)] = inst_16592);

(statearr_16645_19035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (6))){
var inst_16546 = (state_16602[(14)]);
var inst_16553 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16546,change);
var state_16602__$1 = state_16602;
var statearr_16646_19041 = state_16602__$1;
(statearr_16646_19041[(2)] = inst_16553);

(statearr_16646_19041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (25))){
var state_16602__$1 = state_16602;
var statearr_16647_19047 = state_16602__$1;
(statearr_16647_19047[(2)] = null);

(statearr_16647_19047[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (17))){
var inst_16538 = (state_16602[(18)]);
var inst_16546 = (state_16602[(14)]);
var inst_16574 = (inst_16538.cljs$core$IFn$_invoke$arity$1 ? inst_16538.cljs$core$IFn$_invoke$arity$1(inst_16546) : inst_16538.call(null,inst_16546));
var inst_16575 = cljs.core.not(inst_16574);
var state_16602__$1 = state_16602;
var statearr_16652_19061 = state_16602__$1;
(statearr_16652_19061[(2)] = inst_16575);

(statearr_16652_19061[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (3))){
var inst_16596 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16602__$1,inst_16596);
} else {
if((state_val_16603 === (12))){
var state_16602__$1 = state_16602;
var statearr_16657_19062 = state_16602__$1;
(statearr_16657_19062[(2)] = null);

(statearr_16657_19062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (2))){
var inst_16533 = (state_16602[(8)]);
var inst_16536 = (state_16602[(12)]);
var inst_16536__$1 = cljs.core.__destructure_map(inst_16533);
var inst_16537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16536__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16536__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16536__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16602__$1 = (function (){var statearr_16658 = state_16602;
(statearr_16658[(18)] = inst_16538);

(statearr_16658[(12)] = inst_16536__$1);

(statearr_16658[(15)] = inst_16537);

return statearr_16658;
})();
return cljs.core.async.ioc_alts_BANG_(state_16602__$1,(4),inst_16539);
} else {
if((state_val_16603 === (23))){
var inst_16583 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
if(cljs.core.truth_(inst_16583)){
var statearr_16659_19064 = state_16602__$1;
(statearr_16659_19064[(1)] = (24));

} else {
var statearr_16660_19065 = state_16602__$1;
(statearr_16660_19065[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (19))){
var inst_16578 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
var statearr_16661_19066 = state_16602__$1;
(statearr_16661_19066[(2)] = inst_16578);

(statearr_16661_19066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (11))){
var inst_16546 = (state_16602[(14)]);
var inst_16559 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16546);
var state_16602__$1 = state_16602;
var statearr_16662_19067 = state_16602__$1;
(statearr_16662_19067[(2)] = inst_16559);

(statearr_16662_19067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (9))){
var inst_16569 = (state_16602[(19)]);
var inst_16546 = (state_16602[(14)]);
var inst_16537 = (state_16602[(15)]);
var inst_16569__$1 = (inst_16537.cljs$core$IFn$_invoke$arity$1 ? inst_16537.cljs$core$IFn$_invoke$arity$1(inst_16546) : inst_16537.call(null,inst_16546));
var state_16602__$1 = (function (){var statearr_16663 = state_16602;
(statearr_16663[(19)] = inst_16569__$1);

return statearr_16663;
})();
if(cljs.core.truth_(inst_16569__$1)){
var statearr_16664_19072 = state_16602__$1;
(statearr_16664_19072[(1)] = (14));

} else {
var statearr_16665_19073 = state_16602__$1;
(statearr_16665_19073[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (5))){
var inst_16550 = (state_16602[(13)]);
var state_16602__$1 = state_16602;
var statearr_16672_19074 = state_16602__$1;
(statearr_16672_19074[(2)] = inst_16550);

(statearr_16672_19074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (14))){
var inst_16569 = (state_16602[(19)]);
var state_16602__$1 = state_16602;
var statearr_16673_19075 = state_16602__$1;
(statearr_16673_19075[(2)] = inst_16569);

(statearr_16673_19075[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (26))){
var inst_16588 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
var statearr_16674_19076 = state_16602__$1;
(statearr_16674_19076[(2)] = inst_16588);

(statearr_16674_19076[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (16))){
var inst_16580 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
if(cljs.core.truth_(inst_16580)){
var statearr_16675_19077 = state_16602__$1;
(statearr_16675_19077[(1)] = (20));

} else {
var statearr_16676_19078 = state_16602__$1;
(statearr_16676_19078[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (10))){
var inst_16594 = (state_16602[(2)]);
var state_16602__$1 = state_16602;
var statearr_16677_19079 = state_16602__$1;
(statearr_16677_19079[(2)] = inst_16594);

(statearr_16677_19079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (18))){
var inst_16572 = (state_16602[(16)]);
var state_16602__$1 = state_16602;
var statearr_16678_19080 = state_16602__$1;
(statearr_16678_19080[(2)] = inst_16572);

(statearr_16678_19080[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16603 === (8))){
var inst_16545 = (state_16602[(7)]);
var inst_16557 = (inst_16545 == null);
var state_16602__$1 = state_16602;
if(cljs.core.truth_(inst_16557)){
var statearr_16679_19081 = state_16602__$1;
(statearr_16679_19081[(1)] = (11));

} else {
var statearr_16680_19082 = state_16602__$1;
(statearr_16680_19082[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14016__auto__ = null;
var cljs$core$async$mix_$_state_machine__14016__auto____0 = (function (){
var statearr_16681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16681[(0)] = cljs$core$async$mix_$_state_machine__14016__auto__);

(statearr_16681[(1)] = (1));

return statearr_16681;
});
var cljs$core$async$mix_$_state_machine__14016__auto____1 = (function (state_16602){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_16602);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e16686){var ex__14019__auto__ = e16686;
var statearr_16687_19084 = state_16602;
(statearr_16687_19084[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_16602[(4)]))){
var statearr_16688_19085 = state_16602;
(statearr_16688_19085[(1)] = cljs.core.first((state_16602[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19087 = state_16602;
state_16602 = G__19087;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14016__auto__ = function(state_16602){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14016__auto____1.call(this,state_16602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14016__auto____0;
cljs$core$async$mix_$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14016__auto____1;
return cljs$core$async$mix_$_state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_16691 = f__14586__auto__();
(statearr_16691[(6)] = c__14585__auto___18993);

return statearr_16691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19089 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19089(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19095 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19095(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19099 = (function() {
var G__19100 = null;
var G__19100__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19100__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19100 = function(p,v){
switch(arguments.length){
case 1:
return G__19100__1.call(this,p);
case 2:
return G__19100__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19100.cljs$core$IFn$_invoke$arity$1 = G__19100__1;
G__19100.cljs$core$IFn$_invoke$arity$2 = G__19100__2;
return G__19100;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16725 = arguments.length;
switch (G__16725) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19099(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19099(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16752 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16753){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16753 = meta16753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16754,meta16753__$1){
var self__ = this;
var _16754__$1 = this;
return (new cljs.core.async.t_cljs$core$async16752(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16753__$1));
}));

(cljs.core.async.t_cljs$core$async16752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16754){
var self__ = this;
var _16754__$1 = this;
return self__.meta16753;
}));

(cljs.core.async.t_cljs$core$async16752.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16752.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16752.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16752.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16752.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16752.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16752.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16753","meta16753",1104757117,null)], null);
}));

(cljs.core.async.t_cljs$core$async16752.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16752");

(cljs.core.async.t_cljs$core$async16752.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16752");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16752.
 */
cljs.core.async.__GT_t_cljs$core$async16752 = (function cljs$core$async$__GT_t_cljs$core$async16752(ch,topic_fn,buf_fn,mults,ensure_mult,meta16753){
return (new cljs.core.async.t_cljs$core$async16752(ch,topic_fn,buf_fn,mults,ensure_mult,meta16753));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16740 = arguments.length;
switch (G__16740) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16733_SHARP_){
if(cljs.core.truth_((p1__16733_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16733_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16733_SHARP_.call(null,topic)))){
return p1__16733_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16733_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16752(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14585__auto___19112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_16872){
var state_val_16873 = (state_16872[(1)]);
if((state_val_16873 === (7))){
var inst_16868 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
var statearr_16889_19113 = state_16872__$1;
(statearr_16889_19113[(2)] = inst_16868);

(statearr_16889_19113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (20))){
var state_16872__$1 = state_16872;
var statearr_16890_19114 = state_16872__$1;
(statearr_16890_19114[(2)] = null);

(statearr_16890_19114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (1))){
var state_16872__$1 = state_16872;
var statearr_16900_19119 = state_16872__$1;
(statearr_16900_19119[(2)] = null);

(statearr_16900_19119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (24))){
var inst_16851 = (state_16872[(7)]);
var inst_16860 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16851);
var state_16872__$1 = state_16872;
var statearr_16917_19120 = state_16872__$1;
(statearr_16917_19120[(2)] = inst_16860);

(statearr_16917_19120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (4))){
var inst_16771 = (state_16872[(8)]);
var inst_16771__$1 = (state_16872[(2)]);
var inst_16776 = (inst_16771__$1 == null);
var state_16872__$1 = (function (){var statearr_16918 = state_16872;
(statearr_16918[(8)] = inst_16771__$1);

return statearr_16918;
})();
if(cljs.core.truth_(inst_16776)){
var statearr_16919_19122 = state_16872__$1;
(statearr_16919_19122[(1)] = (5));

} else {
var statearr_16924_19124 = state_16872__$1;
(statearr_16924_19124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (15))){
var inst_16845 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
var statearr_16930_19125 = state_16872__$1;
(statearr_16930_19125[(2)] = inst_16845);

(statearr_16930_19125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (21))){
var inst_16865 = (state_16872[(2)]);
var state_16872__$1 = (function (){var statearr_16931 = state_16872;
(statearr_16931[(9)] = inst_16865);

return statearr_16931;
})();
var statearr_16932_19126 = state_16872__$1;
(statearr_16932_19126[(2)] = null);

(statearr_16932_19126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (13))){
var inst_16819 = (state_16872[(10)]);
var inst_16822 = cljs.core.chunked_seq_QMARK_(inst_16819);
var state_16872__$1 = state_16872;
if(inst_16822){
var statearr_16947_19127 = state_16872__$1;
(statearr_16947_19127[(1)] = (16));

} else {
var statearr_16948_19128 = state_16872__$1;
(statearr_16948_19128[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (22))){
var inst_16857 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
if(cljs.core.truth_(inst_16857)){
var statearr_16953_19131 = state_16872__$1;
(statearr_16953_19131[(1)] = (23));

} else {
var statearr_16958_19132 = state_16872__$1;
(statearr_16958_19132[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (6))){
var inst_16851 = (state_16872[(7)]);
var inst_16771 = (state_16872[(8)]);
var inst_16853 = (state_16872[(11)]);
var inst_16851__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16771) : topic_fn.call(null,inst_16771));
var inst_16852 = cljs.core.deref(mults);
var inst_16853__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16852,inst_16851__$1);
var state_16872__$1 = (function (){var statearr_16960 = state_16872;
(statearr_16960[(7)] = inst_16851__$1);

(statearr_16960[(11)] = inst_16853__$1);

return statearr_16960;
})();
if(cljs.core.truth_(inst_16853__$1)){
var statearr_16965_19135 = state_16872__$1;
(statearr_16965_19135[(1)] = (19));

} else {
var statearr_16966_19136 = state_16872__$1;
(statearr_16966_19136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (25))){
var inst_16862 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
var statearr_16967_19138 = state_16872__$1;
(statearr_16967_19138[(2)] = inst_16862);

(statearr_16967_19138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (17))){
var inst_16819 = (state_16872[(10)]);
var inst_16836 = cljs.core.first(inst_16819);
var inst_16837 = cljs.core.async.muxch_STAR_(inst_16836);
var inst_16838 = cljs.core.async.close_BANG_(inst_16837);
var inst_16839 = cljs.core.next(inst_16819);
var inst_16795 = inst_16839;
var inst_16796 = null;
var inst_16797 = (0);
var inst_16798 = (0);
var state_16872__$1 = (function (){var statearr_16973 = state_16872;
(statearr_16973[(12)] = inst_16795);

(statearr_16973[(13)] = inst_16796);

(statearr_16973[(14)] = inst_16838);

(statearr_16973[(15)] = inst_16797);

(statearr_16973[(16)] = inst_16798);

return statearr_16973;
})();
var statearr_16975_19142 = state_16872__$1;
(statearr_16975_19142[(2)] = null);

(statearr_16975_19142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (3))){
var inst_16870 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16872__$1,inst_16870);
} else {
if((state_val_16873 === (12))){
var inst_16847 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
var statearr_16984_19144 = state_16872__$1;
(statearr_16984_19144[(2)] = inst_16847);

(statearr_16984_19144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (2))){
var state_16872__$1 = state_16872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16872__$1,(4),ch);
} else {
if((state_val_16873 === (23))){
var state_16872__$1 = state_16872;
var statearr_16986_19145 = state_16872__$1;
(statearr_16986_19145[(2)] = null);

(statearr_16986_19145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (19))){
var inst_16771 = (state_16872[(8)]);
var inst_16853 = (state_16872[(11)]);
var inst_16855 = cljs.core.async.muxch_STAR_(inst_16853);
var state_16872__$1 = state_16872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16872__$1,(22),inst_16855,inst_16771);
} else {
if((state_val_16873 === (11))){
var inst_16795 = (state_16872[(12)]);
var inst_16819 = (state_16872[(10)]);
var inst_16819__$1 = cljs.core.seq(inst_16795);
var state_16872__$1 = (function (){var statearr_16987 = state_16872;
(statearr_16987[(10)] = inst_16819__$1);

return statearr_16987;
})();
if(inst_16819__$1){
var statearr_16988_19147 = state_16872__$1;
(statearr_16988_19147[(1)] = (13));

} else {
var statearr_16990_19149 = state_16872__$1;
(statearr_16990_19149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (9))){
var inst_16849 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
var statearr_16993_19150 = state_16872__$1;
(statearr_16993_19150[(2)] = inst_16849);

(statearr_16993_19150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (5))){
var inst_16791 = cljs.core.deref(mults);
var inst_16793 = cljs.core.vals(inst_16791);
var inst_16794 = cljs.core.seq(inst_16793);
var inst_16795 = inst_16794;
var inst_16796 = null;
var inst_16797 = (0);
var inst_16798 = (0);
var state_16872__$1 = (function (){var statearr_16994 = state_16872;
(statearr_16994[(12)] = inst_16795);

(statearr_16994[(13)] = inst_16796);

(statearr_16994[(15)] = inst_16797);

(statearr_16994[(16)] = inst_16798);

return statearr_16994;
})();
var statearr_16999_19152 = state_16872__$1;
(statearr_16999_19152[(2)] = null);

(statearr_16999_19152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (14))){
var state_16872__$1 = state_16872;
var statearr_17004_19154 = state_16872__$1;
(statearr_17004_19154[(2)] = null);

(statearr_17004_19154[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (16))){
var inst_16819 = (state_16872[(10)]);
var inst_16824 = cljs.core.chunk_first(inst_16819);
var inst_16825 = cljs.core.chunk_rest(inst_16819);
var inst_16830 = cljs.core.count(inst_16824);
var inst_16795 = inst_16825;
var inst_16796 = inst_16824;
var inst_16797 = inst_16830;
var inst_16798 = (0);
var state_16872__$1 = (function (){var statearr_17005 = state_16872;
(statearr_17005[(12)] = inst_16795);

(statearr_17005[(13)] = inst_16796);

(statearr_17005[(15)] = inst_16797);

(statearr_17005[(16)] = inst_16798);

return statearr_17005;
})();
var statearr_17007_19155 = state_16872__$1;
(statearr_17007_19155[(2)] = null);

(statearr_17007_19155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (10))){
var inst_16795 = (state_16872[(12)]);
var inst_16796 = (state_16872[(13)]);
var inst_16797 = (state_16872[(15)]);
var inst_16798 = (state_16872[(16)]);
var inst_16812 = cljs.core._nth(inst_16796,inst_16798);
var inst_16813 = cljs.core.async.muxch_STAR_(inst_16812);
var inst_16814 = cljs.core.async.close_BANG_(inst_16813);
var inst_16816 = (inst_16798 + (1));
var tmp17001 = inst_16795;
var tmp17002 = inst_16796;
var tmp17003 = inst_16797;
var inst_16795__$1 = tmp17001;
var inst_16796__$1 = tmp17002;
var inst_16797__$1 = tmp17003;
var inst_16798__$1 = inst_16816;
var state_16872__$1 = (function (){var statearr_17011 = state_16872;
(statearr_17011[(17)] = inst_16814);

(statearr_17011[(12)] = inst_16795__$1);

(statearr_17011[(13)] = inst_16796__$1);

(statearr_17011[(15)] = inst_16797__$1);

(statearr_17011[(16)] = inst_16798__$1);

return statearr_17011;
})();
var statearr_17013_19156 = state_16872__$1;
(statearr_17013_19156[(2)] = null);

(statearr_17013_19156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (18))){
var inst_16842 = (state_16872[(2)]);
var state_16872__$1 = state_16872;
var statearr_17014_19157 = state_16872__$1;
(statearr_17014_19157[(2)] = inst_16842);

(statearr_17014_19157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (8))){
var inst_16797 = (state_16872[(15)]);
var inst_16798 = (state_16872[(16)]);
var inst_16809 = (inst_16798 < inst_16797);
var inst_16810 = inst_16809;
var state_16872__$1 = state_16872;
if(cljs.core.truth_(inst_16810)){
var statearr_17019_19159 = state_16872__$1;
(statearr_17019_19159[(1)] = (10));

} else {
var statearr_17022_19160 = state_16872__$1;
(statearr_17022_19160[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_17024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17024[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_17024[(1)] = (1));

return statearr_17024;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_16872){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_16872);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e17026){var ex__14019__auto__ = e17026;
var statearr_17027_19164 = state_16872;
(statearr_17027_19164[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_16872[(4)]))){
var statearr_17028_19165 = state_16872;
(statearr_17028_19165[(1)] = cljs.core.first((state_16872[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19166 = state_16872;
state_16872 = G__19166;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_16872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_16872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_17033 = f__14586__auto__();
(statearr_17033[(6)] = c__14585__auto___19112);

return statearr_17033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17041 = arguments.length;
switch (G__17041) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17059 = arguments.length;
switch (G__17059) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17063 = arguments.length;
switch (G__17063) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14585__auto___19183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_17124){
var state_val_17125 = (state_17124[(1)]);
if((state_val_17125 === (7))){
var state_17124__$1 = state_17124;
var statearr_17127_19189 = state_17124__$1;
(statearr_17127_19189[(2)] = null);

(statearr_17127_19189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (1))){
var state_17124__$1 = state_17124;
var statearr_17128_19190 = state_17124__$1;
(statearr_17128_19190[(2)] = null);

(statearr_17128_19190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (4))){
var inst_17074 = (state_17124[(7)]);
var inst_17075 = (state_17124[(8)]);
var inst_17078 = (inst_17075 < inst_17074);
var state_17124__$1 = state_17124;
if(cljs.core.truth_(inst_17078)){
var statearr_17134_19191 = state_17124__$1;
(statearr_17134_19191[(1)] = (6));

} else {
var statearr_17135_19192 = state_17124__$1;
(statearr_17135_19192[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (15))){
var inst_17106 = (state_17124[(9)]);
var inst_17111 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17106);
var state_17124__$1 = state_17124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17124__$1,(17),out,inst_17111);
} else {
if((state_val_17125 === (13))){
var inst_17106 = (state_17124[(9)]);
var inst_17106__$1 = (state_17124[(2)]);
var inst_17107 = cljs.core.some(cljs.core.nil_QMARK_,inst_17106__$1);
var state_17124__$1 = (function (){var statearr_17147 = state_17124;
(statearr_17147[(9)] = inst_17106__$1);

return statearr_17147;
})();
if(cljs.core.truth_(inst_17107)){
var statearr_17148_19200 = state_17124__$1;
(statearr_17148_19200[(1)] = (14));

} else {
var statearr_17149_19201 = state_17124__$1;
(statearr_17149_19201[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (6))){
var state_17124__$1 = state_17124;
var statearr_17154_19203 = state_17124__$1;
(statearr_17154_19203[(2)] = null);

(statearr_17154_19203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (17))){
var inst_17113 = (state_17124[(2)]);
var state_17124__$1 = (function (){var statearr_17161 = state_17124;
(statearr_17161[(10)] = inst_17113);

return statearr_17161;
})();
var statearr_17167_19204 = state_17124__$1;
(statearr_17167_19204[(2)] = null);

(statearr_17167_19204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (3))){
var inst_17118 = (state_17124[(2)]);
var state_17124__$1 = state_17124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17124__$1,inst_17118);
} else {
if((state_val_17125 === (12))){
var _ = (function (){var statearr_17168 = state_17124;
(statearr_17168[(4)] = cljs.core.rest((state_17124[(4)])));

return statearr_17168;
})();
var state_17124__$1 = state_17124;
var ex17160 = (state_17124__$1[(2)]);
var statearr_17169_19205 = state_17124__$1;
(statearr_17169_19205[(5)] = ex17160);


if((ex17160 instanceof Object)){
var statearr_17170_19206 = state_17124__$1;
(statearr_17170_19206[(1)] = (11));

(statearr_17170_19206[(5)] = null);

} else {
throw ex17160;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (2))){
var inst_17073 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17074 = cnt;
var inst_17075 = (0);
var state_17124__$1 = (function (){var statearr_17175 = state_17124;
(statearr_17175[(7)] = inst_17074);

(statearr_17175[(8)] = inst_17075);

(statearr_17175[(11)] = inst_17073);

return statearr_17175;
})();
var statearr_17176_19207 = state_17124__$1;
(statearr_17176_19207[(2)] = null);

(statearr_17176_19207[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (11))){
var inst_17081 = (state_17124[(2)]);
var inst_17082 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17124__$1 = (function (){var statearr_17178 = state_17124;
(statearr_17178[(12)] = inst_17081);

return statearr_17178;
})();
var statearr_17179_19208 = state_17124__$1;
(statearr_17179_19208[(2)] = inst_17082);

(statearr_17179_19208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (9))){
var inst_17075 = (state_17124[(8)]);
var _ = (function (){var statearr_17189 = state_17124;
(statearr_17189[(4)] = cljs.core.cons((12),(state_17124[(4)])));

return statearr_17189;
})();
var inst_17092 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17075) : chs__$1.call(null,inst_17075));
var inst_17093 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17075) : done.call(null,inst_17075));
var inst_17094 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17092,inst_17093);
var ___$1 = (function (){var statearr_17197 = state_17124;
(statearr_17197[(4)] = cljs.core.rest((state_17124[(4)])));

return statearr_17197;
})();
var state_17124__$1 = state_17124;
var statearr_17203_19209 = state_17124__$1;
(statearr_17203_19209[(2)] = inst_17094);

(statearr_17203_19209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (5))){
var inst_17104 = (state_17124[(2)]);
var state_17124__$1 = (function (){var statearr_17205 = state_17124;
(statearr_17205[(13)] = inst_17104);

return statearr_17205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17124__$1,(13),dchan);
} else {
if((state_val_17125 === (14))){
var inst_17109 = cljs.core.async.close_BANG_(out);
var state_17124__$1 = state_17124;
var statearr_17206_19212 = state_17124__$1;
(statearr_17206_19212[(2)] = inst_17109);

(statearr_17206_19212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (16))){
var inst_17116 = (state_17124[(2)]);
var state_17124__$1 = state_17124;
var statearr_17214_19214 = state_17124__$1;
(statearr_17214_19214[(2)] = inst_17116);

(statearr_17214_19214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (10))){
var inst_17075 = (state_17124[(8)]);
var inst_17097 = (state_17124[(2)]);
var inst_17098 = (inst_17075 + (1));
var inst_17075__$1 = inst_17098;
var state_17124__$1 = (function (){var statearr_17221 = state_17124;
(statearr_17221[(8)] = inst_17075__$1);

(statearr_17221[(14)] = inst_17097);

return statearr_17221;
})();
var statearr_17227_19216 = state_17124__$1;
(statearr_17227_19216[(2)] = null);

(statearr_17227_19216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (8))){
var inst_17102 = (state_17124[(2)]);
var state_17124__$1 = state_17124;
var statearr_17238_19217 = state_17124__$1;
(statearr_17238_19217[(2)] = inst_17102);

(statearr_17238_19217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_17251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17251[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_17251[(1)] = (1));

return statearr_17251;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_17124){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_17124);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e17252){var ex__14019__auto__ = e17252;
var statearr_17253_19221 = state_17124;
(statearr_17253_19221[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_17124[(4)]))){
var statearr_17255_19222 = state_17124;
(statearr_17255_19222[(1)] = cljs.core.first((state_17124[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19223 = state_17124;
state_17124 = G__19223;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_17124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_17124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_17268 = f__14586__auto__();
(statearr_17268[(6)] = c__14585__auto___19183);

return statearr_17268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17276 = arguments.length;
switch (G__17276) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14585__auto___19229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_17323){
var state_val_17324 = (state_17323[(1)]);
if((state_val_17324 === (7))){
var inst_17300 = (state_17323[(7)]);
var inst_17299 = (state_17323[(8)]);
var inst_17299__$1 = (state_17323[(2)]);
var inst_17300__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17299__$1,(0),null);
var inst_17301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17299__$1,(1),null);
var inst_17302 = (inst_17300__$1 == null);
var state_17323__$1 = (function (){var statearr_17333 = state_17323;
(statearr_17333[(7)] = inst_17300__$1);

(statearr_17333[(9)] = inst_17301);

(statearr_17333[(8)] = inst_17299__$1);

return statearr_17333;
})();
if(cljs.core.truth_(inst_17302)){
var statearr_17339_19232 = state_17323__$1;
(statearr_17339_19232[(1)] = (8));

} else {
var statearr_17344_19233 = state_17323__$1;
(statearr_17344_19233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (1))){
var inst_17288 = cljs.core.vec(chs);
var inst_17289 = inst_17288;
var state_17323__$1 = (function (){var statearr_17347 = state_17323;
(statearr_17347[(10)] = inst_17289);

return statearr_17347;
})();
var statearr_17348_19241 = state_17323__$1;
(statearr_17348_19241[(2)] = null);

(statearr_17348_19241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (4))){
var inst_17289 = (state_17323[(10)]);
var state_17323__$1 = state_17323;
return cljs.core.async.ioc_alts_BANG_(state_17323__$1,(7),inst_17289);
} else {
if((state_val_17324 === (6))){
var inst_17318 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17354_19243 = state_17323__$1;
(statearr_17354_19243[(2)] = inst_17318);

(statearr_17354_19243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (3))){
var inst_17320 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17323__$1,inst_17320);
} else {
if((state_val_17324 === (2))){
var inst_17289 = (state_17323[(10)]);
var inst_17292 = cljs.core.count(inst_17289);
var inst_17293 = (inst_17292 > (0));
var state_17323__$1 = state_17323;
if(cljs.core.truth_(inst_17293)){
var statearr_17357_19244 = state_17323__$1;
(statearr_17357_19244[(1)] = (4));

} else {
var statearr_17358_19245 = state_17323__$1;
(statearr_17358_19245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (11))){
var inst_17289 = (state_17323[(10)]);
var inst_17311 = (state_17323[(2)]);
var tmp17355 = inst_17289;
var inst_17289__$1 = tmp17355;
var state_17323__$1 = (function (){var statearr_17359 = state_17323;
(statearr_17359[(10)] = inst_17289__$1);

(statearr_17359[(11)] = inst_17311);

return statearr_17359;
})();
var statearr_17360_19246 = state_17323__$1;
(statearr_17360_19246[(2)] = null);

(statearr_17360_19246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (9))){
var inst_17300 = (state_17323[(7)]);
var state_17323__$1 = state_17323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17323__$1,(11),out,inst_17300);
} else {
if((state_val_17324 === (5))){
var inst_17316 = cljs.core.async.close_BANG_(out);
var state_17323__$1 = state_17323;
var statearr_17370_19248 = state_17323__$1;
(statearr_17370_19248[(2)] = inst_17316);

(statearr_17370_19248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (10))){
var inst_17314 = (state_17323[(2)]);
var state_17323__$1 = state_17323;
var statearr_17374_19251 = state_17323__$1;
(statearr_17374_19251[(2)] = inst_17314);

(statearr_17374_19251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17324 === (8))){
var inst_17289 = (state_17323[(10)]);
var inst_17300 = (state_17323[(7)]);
var inst_17301 = (state_17323[(9)]);
var inst_17299 = (state_17323[(8)]);
var inst_17306 = (function (){var cs = inst_17289;
var vec__17295 = inst_17299;
var v = inst_17300;
var c = inst_17301;
return (function (p1__17274_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17274_SHARP_);
});
})();
var inst_17307 = cljs.core.filterv(inst_17306,inst_17289);
var inst_17289__$1 = inst_17307;
var state_17323__$1 = (function (){var statearr_17376 = state_17323;
(statearr_17376[(10)] = inst_17289__$1);

return statearr_17376;
})();
var statearr_17382_19253 = state_17323__$1;
(statearr_17382_19253[(2)] = null);

(statearr_17382_19253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_17383 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17383[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_17383[(1)] = (1));

return statearr_17383;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_17323){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_17323);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e17384){var ex__14019__auto__ = e17384;
var statearr_17385_19255 = state_17323;
(statearr_17385_19255[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_17323[(4)]))){
var statearr_17386_19256 = state_17323;
(statearr_17386_19256[(1)] = cljs.core.first((state_17323[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19257 = state_17323;
state_17323 = G__19257;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_17323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_17323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_17388 = f__14586__auto__();
(statearr_17388[(6)] = c__14585__auto___19229);

return statearr_17388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17393 = arguments.length;
switch (G__17393) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14585__auto___19260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_17440){
var state_val_17441 = (state_17440[(1)]);
if((state_val_17441 === (7))){
var inst_17418 = (state_17440[(7)]);
var inst_17418__$1 = (state_17440[(2)]);
var inst_17419 = (inst_17418__$1 == null);
var inst_17420 = cljs.core.not(inst_17419);
var state_17440__$1 = (function (){var statearr_17443 = state_17440;
(statearr_17443[(7)] = inst_17418__$1);

return statearr_17443;
})();
if(inst_17420){
var statearr_17444_19262 = state_17440__$1;
(statearr_17444_19262[(1)] = (8));

} else {
var statearr_17445_19263 = state_17440__$1;
(statearr_17445_19263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (1))){
var inst_17409 = (0);
var state_17440__$1 = (function (){var statearr_17446 = state_17440;
(statearr_17446[(8)] = inst_17409);

return statearr_17446;
})();
var statearr_17447_19264 = state_17440__$1;
(statearr_17447_19264[(2)] = null);

(statearr_17447_19264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (4))){
var state_17440__$1 = state_17440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17440__$1,(7),ch);
} else {
if((state_val_17441 === (6))){
var inst_17435 = (state_17440[(2)]);
var state_17440__$1 = state_17440;
var statearr_17456_19271 = state_17440__$1;
(statearr_17456_19271[(2)] = inst_17435);

(statearr_17456_19271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (3))){
var inst_17437 = (state_17440[(2)]);
var inst_17438 = cljs.core.async.close_BANG_(out);
var state_17440__$1 = (function (){var statearr_17464 = state_17440;
(statearr_17464[(9)] = inst_17437);

return statearr_17464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17440__$1,inst_17438);
} else {
if((state_val_17441 === (2))){
var inst_17409 = (state_17440[(8)]);
var inst_17415 = (inst_17409 < n);
var state_17440__$1 = state_17440;
if(cljs.core.truth_(inst_17415)){
var statearr_17465_19273 = state_17440__$1;
(statearr_17465_19273[(1)] = (4));

} else {
var statearr_17466_19274 = state_17440__$1;
(statearr_17466_19274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (11))){
var inst_17409 = (state_17440[(8)]);
var inst_17423 = (state_17440[(2)]);
var inst_17424 = (inst_17409 + (1));
var inst_17409__$1 = inst_17424;
var state_17440__$1 = (function (){var statearr_17467 = state_17440;
(statearr_17467[(10)] = inst_17423);

(statearr_17467[(8)] = inst_17409__$1);

return statearr_17467;
})();
var statearr_17468_19276 = state_17440__$1;
(statearr_17468_19276[(2)] = null);

(statearr_17468_19276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (9))){
var state_17440__$1 = state_17440;
var statearr_17469_19277 = state_17440__$1;
(statearr_17469_19277[(2)] = null);

(statearr_17469_19277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (5))){
var state_17440__$1 = state_17440;
var statearr_17472_19278 = state_17440__$1;
(statearr_17472_19278[(2)] = null);

(statearr_17472_19278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (10))){
var inst_17432 = (state_17440[(2)]);
var state_17440__$1 = state_17440;
var statearr_17475_19280 = state_17440__$1;
(statearr_17475_19280[(2)] = inst_17432);

(statearr_17475_19280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17441 === (8))){
var inst_17418 = (state_17440[(7)]);
var state_17440__$1 = state_17440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17440__$1,(11),out,inst_17418);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_17476 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17476[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_17476[(1)] = (1));

return statearr_17476;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_17440){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_17440);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e17481){var ex__14019__auto__ = e17481;
var statearr_17482_19282 = state_17440;
(statearr_17482_19282[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_17440[(4)]))){
var statearr_17483_19283 = state_17440;
(statearr_17483_19283[(1)] = cljs.core.first((state_17440[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19284 = state_17440;
state_17440 = G__19284;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_17440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_17440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_17487 = f__14586__auto__();
(statearr_17487[(6)] = c__14585__auto___19260);

return statearr_17487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17505 = (function (f,ch,meta17491,_,fn1,meta17506){
this.f = f;
this.ch = ch;
this.meta17491 = meta17491;
this._ = _;
this.fn1 = fn1;
this.meta17506 = meta17506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17507,meta17506__$1){
var self__ = this;
var _17507__$1 = this;
return (new cljs.core.async.t_cljs$core$async17505(self__.f,self__.ch,self__.meta17491,self__._,self__.fn1,meta17506__$1));
}));

(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17507){
var self__ = this;
var _17507__$1 = this;
return self__.meta17506;
}));

(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17489_SHARP_){
var G__17522 = (((p1__17489_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17489_SHARP_) : self__.f.call(null,p1__17489_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17522) : f1.call(null,G__17522));
});
}));

(cljs.core.async.t_cljs$core$async17505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17491","meta17491",1420550045,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17490","cljs.core.async/t_cljs$core$async17490",1433369862,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17506","meta17506",-1538572747,null)], null);
}));

(cljs.core.async.t_cljs$core$async17505.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17505");

(cljs.core.async.t_cljs$core$async17505.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17505");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17505.
 */
cljs.core.async.__GT_t_cljs$core$async17505 = (function cljs$core$async$__GT_t_cljs$core$async17505(f,ch,meta17491,_,fn1,meta17506){
return (new cljs.core.async.t_cljs$core$async17505(f,ch,meta17491,_,fn1,meta17506));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17490 = (function (f,ch,meta17491){
this.f = f;
this.ch = ch;
this.meta17491 = meta17491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17492,meta17491__$1){
var self__ = this;
var _17492__$1 = this;
return (new cljs.core.async.t_cljs$core$async17490(self__.f,self__.ch,meta17491__$1));
}));

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17492){
var self__ = this;
var _17492__$1 = this;
return self__.meta17491;
}));

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17505(self__.f,self__.ch,self__.meta17491,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17534 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17534) : self__.f.call(null,G__17534));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17491","meta17491",1420550045,null)], null);
}));

(cljs.core.async.t_cljs$core$async17490.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17490");

(cljs.core.async.t_cljs$core$async17490.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17490");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17490.
 */
cljs.core.async.__GT_t_cljs$core$async17490 = (function cljs$core$async$__GT_t_cljs$core$async17490(f,ch,meta17491){
return (new cljs.core.async.t_cljs$core$async17490(f,ch,meta17491));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17490(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17546 = (function (f,ch,meta17547){
this.f = f;
this.ch = ch;
this.meta17547 = meta17547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17548,meta17547__$1){
var self__ = this;
var _17548__$1 = this;
return (new cljs.core.async.t_cljs$core$async17546(self__.f,self__.ch,meta17547__$1));
}));

(cljs.core.async.t_cljs$core$async17546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17548){
var self__ = this;
var _17548__$1 = this;
return self__.meta17547;
}));

(cljs.core.async.t_cljs$core$async17546.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17546.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17546.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17546.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17546.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17546.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17547","meta17547",1422616589,null)], null);
}));

(cljs.core.async.t_cljs$core$async17546.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17546");

(cljs.core.async.t_cljs$core$async17546.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17546");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17546.
 */
cljs.core.async.__GT_t_cljs$core$async17546 = (function cljs$core$async$__GT_t_cljs$core$async17546(f,ch,meta17547){
return (new cljs.core.async.t_cljs$core$async17546(f,ch,meta17547));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17546(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17565 = (function (p,ch,meta17566){
this.p = p;
this.ch = ch;
this.meta17566 = meta17566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17567,meta17566__$1){
var self__ = this;
var _17567__$1 = this;
return (new cljs.core.async.t_cljs$core$async17565(self__.p,self__.ch,meta17566__$1));
}));

(cljs.core.async.t_cljs$core$async17565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17567){
var self__ = this;
var _17567__$1 = this;
return self__.meta17566;
}));

(cljs.core.async.t_cljs$core$async17565.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17565.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17565.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17565.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17565.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17565.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17565.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17566","meta17566",1551583482,null)], null);
}));

(cljs.core.async.t_cljs$core$async17565.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17565");

(cljs.core.async.t_cljs$core$async17565.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17565");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17565.
 */
cljs.core.async.__GT_t_cljs$core$async17565 = (function cljs$core$async$__GT_t_cljs$core$async17565(p,ch,meta17566){
return (new cljs.core.async.t_cljs$core$async17565(p,ch,meta17566));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17565(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17582 = arguments.length;
switch (G__17582) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14585__auto___19299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_17617){
var state_val_17618 = (state_17617[(1)]);
if((state_val_17618 === (7))){
var inst_17609 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
var statearr_17625_19300 = state_17617__$1;
(statearr_17625_19300[(2)] = inst_17609);

(statearr_17625_19300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17618 === (1))){
var state_17617__$1 = state_17617;
var statearr_17627_19301 = state_17617__$1;
(statearr_17627_19301[(2)] = null);

(statearr_17627_19301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17618 === (4))){
var inst_17592 = (state_17617[(7)]);
var inst_17592__$1 = (state_17617[(2)]);
var inst_17595 = (inst_17592__$1 == null);
var state_17617__$1 = (function (){var statearr_17628 = state_17617;
(statearr_17628[(7)] = inst_17592__$1);

return statearr_17628;
})();
if(cljs.core.truth_(inst_17595)){
var statearr_17629_19303 = state_17617__$1;
(statearr_17629_19303[(1)] = (5));

} else {
var statearr_17630_19304 = state_17617__$1;
(statearr_17630_19304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17618 === (6))){
var inst_17592 = (state_17617[(7)]);
var inst_17600 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17592) : p.call(null,inst_17592));
var state_17617__$1 = state_17617;
if(cljs.core.truth_(inst_17600)){
var statearr_17632_19305 = state_17617__$1;
(statearr_17632_19305[(1)] = (8));

} else {
var statearr_17633_19306 = state_17617__$1;
(statearr_17633_19306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17618 === (3))){
var inst_17612 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17617__$1,inst_17612);
} else {
if((state_val_17618 === (2))){
var state_17617__$1 = state_17617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17617__$1,(4),ch);
} else {
if((state_val_17618 === (11))){
var inst_17603 = (state_17617[(2)]);
var state_17617__$1 = state_17617;
var statearr_17637_19307 = state_17617__$1;
(statearr_17637_19307[(2)] = inst_17603);

(statearr_17637_19307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17618 === (9))){
var state_17617__$1 = state_17617;
var statearr_17638_19308 = state_17617__$1;
(statearr_17638_19308[(2)] = null);

(statearr_17638_19308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17618 === (5))){
var inst_17597 = cljs.core.async.close_BANG_(out);
var state_17617__$1 = state_17617;
var statearr_17639_19309 = state_17617__$1;
(statearr_17639_19309[(2)] = inst_17597);

(statearr_17639_19309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17618 === (10))){
var inst_17606 = (state_17617[(2)]);
var state_17617__$1 = (function (){var statearr_17640 = state_17617;
(statearr_17640[(8)] = inst_17606);

return statearr_17640;
})();
var statearr_17641_19313 = state_17617__$1;
(statearr_17641_19313[(2)] = null);

(statearr_17641_19313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17618 === (8))){
var inst_17592 = (state_17617[(7)]);
var state_17617__$1 = state_17617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17617__$1,(11),out,inst_17592);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_17644 = [null,null,null,null,null,null,null,null,null];
(statearr_17644[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_17644[(1)] = (1));

return statearr_17644;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_17617){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_17617);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e17645){var ex__14019__auto__ = e17645;
var statearr_17646_19319 = state_17617;
(statearr_17646_19319[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_17617[(4)]))){
var statearr_17648_19320 = state_17617;
(statearr_17648_19320[(1)] = cljs.core.first((state_17617[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19321 = state_17617;
state_17617 = G__19321;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_17617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_17617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_17654 = f__14586__auto__();
(statearr_17654[(6)] = c__14585__auto___19299);

return statearr_17654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17666 = arguments.length;
switch (G__17666) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14585__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_17747){
var state_val_17748 = (state_17747[(1)]);
if((state_val_17748 === (7))){
var inst_17739 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
var statearr_17755_19324 = state_17747__$1;
(statearr_17755_19324[(2)] = inst_17739);

(statearr_17755_19324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (20))){
var inst_17704 = (state_17747[(7)]);
var inst_17720 = (state_17747[(2)]);
var inst_17721 = cljs.core.next(inst_17704);
var inst_17690 = inst_17721;
var inst_17691 = null;
var inst_17692 = (0);
var inst_17693 = (0);
var state_17747__$1 = (function (){var statearr_17762 = state_17747;
(statearr_17762[(8)] = inst_17720);

(statearr_17762[(9)] = inst_17690);

(statearr_17762[(10)] = inst_17692);

(statearr_17762[(11)] = inst_17693);

(statearr_17762[(12)] = inst_17691);

return statearr_17762;
})();
var statearr_17765_19325 = state_17747__$1;
(statearr_17765_19325[(2)] = null);

(statearr_17765_19325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (1))){
var state_17747__$1 = state_17747;
var statearr_17767_19326 = state_17747__$1;
(statearr_17767_19326[(2)] = null);

(statearr_17767_19326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (4))){
var inst_17679 = (state_17747[(13)]);
var inst_17679__$1 = (state_17747[(2)]);
var inst_17680 = (inst_17679__$1 == null);
var state_17747__$1 = (function (){var statearr_17771 = state_17747;
(statearr_17771[(13)] = inst_17679__$1);

return statearr_17771;
})();
if(cljs.core.truth_(inst_17680)){
var statearr_17772_19327 = state_17747__$1;
(statearr_17772_19327[(1)] = (5));

} else {
var statearr_17774_19328 = state_17747__$1;
(statearr_17774_19328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (15))){
var state_17747__$1 = state_17747;
var statearr_17778_19329 = state_17747__$1;
(statearr_17778_19329[(2)] = null);

(statearr_17778_19329[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (21))){
var state_17747__$1 = state_17747;
var statearr_17779_19330 = state_17747__$1;
(statearr_17779_19330[(2)] = null);

(statearr_17779_19330[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (13))){
var inst_17690 = (state_17747[(9)]);
var inst_17692 = (state_17747[(10)]);
var inst_17693 = (state_17747[(11)]);
var inst_17691 = (state_17747[(12)]);
var inst_17700 = (state_17747[(2)]);
var inst_17701 = (inst_17693 + (1));
var tmp17775 = inst_17690;
var tmp17776 = inst_17692;
var tmp17777 = inst_17691;
var inst_17690__$1 = tmp17775;
var inst_17691__$1 = tmp17777;
var inst_17692__$1 = tmp17776;
var inst_17693__$1 = inst_17701;
var state_17747__$1 = (function (){var statearr_17790 = state_17747;
(statearr_17790[(9)] = inst_17690__$1);

(statearr_17790[(10)] = inst_17692__$1);

(statearr_17790[(14)] = inst_17700);

(statearr_17790[(11)] = inst_17693__$1);

(statearr_17790[(12)] = inst_17691__$1);

return statearr_17790;
})();
var statearr_17791_19332 = state_17747__$1;
(statearr_17791_19332[(2)] = null);

(statearr_17791_19332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (22))){
var state_17747__$1 = state_17747;
var statearr_17792_19333 = state_17747__$1;
(statearr_17792_19333[(2)] = null);

(statearr_17792_19333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (6))){
var inst_17679 = (state_17747[(13)]);
var inst_17688 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17679) : f.call(null,inst_17679));
var inst_17689 = cljs.core.seq(inst_17688);
var inst_17690 = inst_17689;
var inst_17691 = null;
var inst_17692 = (0);
var inst_17693 = (0);
var state_17747__$1 = (function (){var statearr_17795 = state_17747;
(statearr_17795[(9)] = inst_17690);

(statearr_17795[(10)] = inst_17692);

(statearr_17795[(11)] = inst_17693);

(statearr_17795[(12)] = inst_17691);

return statearr_17795;
})();
var statearr_17796_19334 = state_17747__$1;
(statearr_17796_19334[(2)] = null);

(statearr_17796_19334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (17))){
var inst_17704 = (state_17747[(7)]);
var inst_17709 = cljs.core.chunk_first(inst_17704);
var inst_17710 = cljs.core.chunk_rest(inst_17704);
var inst_17711 = cljs.core.count(inst_17709);
var inst_17690 = inst_17710;
var inst_17691 = inst_17709;
var inst_17692 = inst_17711;
var inst_17693 = (0);
var state_17747__$1 = (function (){var statearr_17799 = state_17747;
(statearr_17799[(9)] = inst_17690);

(statearr_17799[(10)] = inst_17692);

(statearr_17799[(11)] = inst_17693);

(statearr_17799[(12)] = inst_17691);

return statearr_17799;
})();
var statearr_17803_19335 = state_17747__$1;
(statearr_17803_19335[(2)] = null);

(statearr_17803_19335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (3))){
var inst_17741 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17747__$1,inst_17741);
} else {
if((state_val_17748 === (12))){
var inst_17729 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
var statearr_17815_19336 = state_17747__$1;
(statearr_17815_19336[(2)] = inst_17729);

(statearr_17815_19336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (2))){
var state_17747__$1 = state_17747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17747__$1,(4),in$);
} else {
if((state_val_17748 === (23))){
var inst_17737 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
var statearr_17820_19337 = state_17747__$1;
(statearr_17820_19337[(2)] = inst_17737);

(statearr_17820_19337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (19))){
var inst_17724 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
var statearr_17821_19338 = state_17747__$1;
(statearr_17821_19338[(2)] = inst_17724);

(statearr_17821_19338[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (11))){
var inst_17690 = (state_17747[(9)]);
var inst_17704 = (state_17747[(7)]);
var inst_17704__$1 = cljs.core.seq(inst_17690);
var state_17747__$1 = (function (){var statearr_17822 = state_17747;
(statearr_17822[(7)] = inst_17704__$1);

return statearr_17822;
})();
if(inst_17704__$1){
var statearr_17823_19340 = state_17747__$1;
(statearr_17823_19340[(1)] = (14));

} else {
var statearr_17824_19341 = state_17747__$1;
(statearr_17824_19341[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (9))){
var inst_17731 = (state_17747[(2)]);
var inst_17732 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17747__$1 = (function (){var statearr_17825 = state_17747;
(statearr_17825[(15)] = inst_17731);

return statearr_17825;
})();
if(cljs.core.truth_(inst_17732)){
var statearr_17827_19342 = state_17747__$1;
(statearr_17827_19342[(1)] = (21));

} else {
var statearr_17828_19343 = state_17747__$1;
(statearr_17828_19343[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (5))){
var inst_17682 = cljs.core.async.close_BANG_(out);
var state_17747__$1 = state_17747;
var statearr_17832_19345 = state_17747__$1;
(statearr_17832_19345[(2)] = inst_17682);

(statearr_17832_19345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (14))){
var inst_17704 = (state_17747[(7)]);
var inst_17707 = cljs.core.chunked_seq_QMARK_(inst_17704);
var state_17747__$1 = state_17747;
if(inst_17707){
var statearr_17836_19349 = state_17747__$1;
(statearr_17836_19349[(1)] = (17));

} else {
var statearr_17837_19350 = state_17747__$1;
(statearr_17837_19350[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (16))){
var inst_17727 = (state_17747[(2)]);
var state_17747__$1 = state_17747;
var statearr_17839_19351 = state_17747__$1;
(statearr_17839_19351[(2)] = inst_17727);

(statearr_17839_19351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17748 === (10))){
var inst_17693 = (state_17747[(11)]);
var inst_17691 = (state_17747[(12)]);
var inst_17698 = cljs.core._nth(inst_17691,inst_17693);
var state_17747__$1 = state_17747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17747__$1,(13),out,inst_17698);
} else {
if((state_val_17748 === (18))){
var inst_17704 = (state_17747[(7)]);
var inst_17718 = cljs.core.first(inst_17704);
var state_17747__$1 = state_17747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17747__$1,(20),out,inst_17718);
} else {
if((state_val_17748 === (8))){
var inst_17692 = (state_17747[(10)]);
var inst_17693 = (state_17747[(11)]);
var inst_17695 = (inst_17693 < inst_17692);
var inst_17696 = inst_17695;
var state_17747__$1 = state_17747;
if(cljs.core.truth_(inst_17696)){
var statearr_17841_19352 = state_17747__$1;
(statearr_17841_19352[(1)] = (10));

} else {
var statearr_17842_19353 = state_17747__$1;
(statearr_17842_19353[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____0 = (function (){
var statearr_17845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17845[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__);

(statearr_17845[(1)] = (1));

return statearr_17845;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____1 = (function (state_17747){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_17747);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e17848){var ex__14019__auto__ = e17848;
var statearr_17849_19354 = state_17747;
(statearr_17849_19354[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_17747[(4)]))){
var statearr_17850_19355 = state_17747;
(statearr_17850_19355[(1)] = cljs.core.first((state_17747[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19356 = state_17747;
state_17747 = G__19356;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__ = function(state_17747){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____1.call(this,state_17747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14016__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_17854 = f__14586__auto__();
(statearr_17854[(6)] = c__14585__auto__);

return statearr_17854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));

return c__14585__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17865 = arguments.length;
switch (G__17865) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17905 = arguments.length;
switch (G__17905) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17918 = arguments.length;
switch (G__17918) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14585__auto___19361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_17951){
var state_val_17952 = (state_17951[(1)]);
if((state_val_17952 === (7))){
var inst_17946 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_17960_19362 = state_17951__$1;
(statearr_17960_19362[(2)] = inst_17946);

(statearr_17960_19362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (1))){
var inst_17926 = null;
var state_17951__$1 = (function (){var statearr_17962 = state_17951;
(statearr_17962[(7)] = inst_17926);

return statearr_17962;
})();
var statearr_17965_19363 = state_17951__$1;
(statearr_17965_19363[(2)] = null);

(statearr_17965_19363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (4))){
var inst_17929 = (state_17951[(8)]);
var inst_17929__$1 = (state_17951[(2)]);
var inst_17930 = (inst_17929__$1 == null);
var inst_17931 = cljs.core.not(inst_17930);
var state_17951__$1 = (function (){var statearr_17969 = state_17951;
(statearr_17969[(8)] = inst_17929__$1);

return statearr_17969;
})();
if(inst_17931){
var statearr_17970_19364 = state_17951__$1;
(statearr_17970_19364[(1)] = (5));

} else {
var statearr_17971_19365 = state_17951__$1;
(statearr_17971_19365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (6))){
var state_17951__$1 = state_17951;
var statearr_17972_19366 = state_17951__$1;
(statearr_17972_19366[(2)] = null);

(statearr_17972_19366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (3))){
var inst_17948 = (state_17951[(2)]);
var inst_17949 = cljs.core.async.close_BANG_(out);
var state_17951__$1 = (function (){var statearr_17973 = state_17951;
(statearr_17973[(9)] = inst_17948);

return statearr_17973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17951__$1,inst_17949);
} else {
if((state_val_17952 === (2))){
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17951__$1,(4),ch);
} else {
if((state_val_17952 === (11))){
var inst_17929 = (state_17951[(8)]);
var inst_17940 = (state_17951[(2)]);
var inst_17926 = inst_17929;
var state_17951__$1 = (function (){var statearr_17978 = state_17951;
(statearr_17978[(10)] = inst_17940);

(statearr_17978[(7)] = inst_17926);

return statearr_17978;
})();
var statearr_17979_19369 = state_17951__$1;
(statearr_17979_19369[(2)] = null);

(statearr_17979_19369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (9))){
var inst_17929 = (state_17951[(8)]);
var state_17951__$1 = state_17951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17951__$1,(11),out,inst_17929);
} else {
if((state_val_17952 === (5))){
var inst_17926 = (state_17951[(7)]);
var inst_17929 = (state_17951[(8)]);
var inst_17933 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17929,inst_17926);
var state_17951__$1 = state_17951;
if(inst_17933){
var statearr_17983_19370 = state_17951__$1;
(statearr_17983_19370[(1)] = (8));

} else {
var statearr_17984_19371 = state_17951__$1;
(statearr_17984_19371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (10))){
var inst_17943 = (state_17951[(2)]);
var state_17951__$1 = state_17951;
var statearr_17989_19372 = state_17951__$1;
(statearr_17989_19372[(2)] = inst_17943);

(statearr_17989_19372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17952 === (8))){
var inst_17926 = (state_17951[(7)]);
var tmp17980 = inst_17926;
var inst_17926__$1 = tmp17980;
var state_17951__$1 = (function (){var statearr_17994 = state_17951;
(statearr_17994[(7)] = inst_17926__$1);

return statearr_17994;
})();
var statearr_17995_19373 = state_17951__$1;
(statearr_17995_19373[(2)] = null);

(statearr_17995_19373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_18004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18004[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_18004[(1)] = (1));

return statearr_18004;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_17951){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_17951);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e18013){var ex__14019__auto__ = e18013;
var statearr_18014_19374 = state_17951;
(statearr_18014_19374[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_17951[(4)]))){
var statearr_18016_19375 = state_17951;
(statearr_18016_19375[(1)] = cljs.core.first((state_17951[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19376 = state_17951;
state_17951 = G__19376;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_17951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_17951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_18021 = f__14586__auto__();
(statearr_18021[(6)] = c__14585__auto___19361);

return statearr_18021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18028 = arguments.length;
switch (G__18028) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14585__auto___19380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_18075){
var state_val_18076 = (state_18075[(1)]);
if((state_val_18076 === (7))){
var inst_18071 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18079_19381 = state_18075__$1;
(statearr_18079_19381[(2)] = inst_18071);

(statearr_18079_19381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (1))){
var inst_18035 = (new Array(n));
var inst_18036 = inst_18035;
var inst_18037 = (0);
var state_18075__$1 = (function (){var statearr_18084 = state_18075;
(statearr_18084[(7)] = inst_18037);

(statearr_18084[(8)] = inst_18036);

return statearr_18084;
})();
var statearr_18086_19382 = state_18075__$1;
(statearr_18086_19382[(2)] = null);

(statearr_18086_19382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (4))){
var inst_18040 = (state_18075[(9)]);
var inst_18040__$1 = (state_18075[(2)]);
var inst_18041 = (inst_18040__$1 == null);
var inst_18042 = cljs.core.not(inst_18041);
var state_18075__$1 = (function (){var statearr_18092 = state_18075;
(statearr_18092[(9)] = inst_18040__$1);

return statearr_18092;
})();
if(inst_18042){
var statearr_18094_19383 = state_18075__$1;
(statearr_18094_19383[(1)] = (5));

} else {
var statearr_18095_19384 = state_18075__$1;
(statearr_18095_19384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (15))){
var inst_18065 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18096_19385 = state_18075__$1;
(statearr_18096_19385[(2)] = inst_18065);

(statearr_18096_19385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (13))){
var state_18075__$1 = state_18075;
var statearr_18097_19386 = state_18075__$1;
(statearr_18097_19386[(2)] = null);

(statearr_18097_19386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (6))){
var inst_18037 = (state_18075[(7)]);
var inst_18061 = (inst_18037 > (0));
var state_18075__$1 = state_18075;
if(cljs.core.truth_(inst_18061)){
var statearr_18099_19387 = state_18075__$1;
(statearr_18099_19387[(1)] = (12));

} else {
var statearr_18100_19388 = state_18075__$1;
(statearr_18100_19388[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (3))){
var inst_18073 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18075__$1,inst_18073);
} else {
if((state_val_18076 === (12))){
var inst_18036 = (state_18075[(8)]);
var inst_18063 = cljs.core.vec(inst_18036);
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18075__$1,(15),out,inst_18063);
} else {
if((state_val_18076 === (2))){
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18075__$1,(4),ch);
} else {
if((state_val_18076 === (11))){
var inst_18054 = (state_18075[(2)]);
var inst_18055 = (new Array(n));
var inst_18036 = inst_18055;
var inst_18037 = (0);
var state_18075__$1 = (function (){var statearr_18101 = state_18075;
(statearr_18101[(10)] = inst_18054);

(statearr_18101[(7)] = inst_18037);

(statearr_18101[(8)] = inst_18036);

return statearr_18101;
})();
var statearr_18102_19389 = state_18075__$1;
(statearr_18102_19389[(2)] = null);

(statearr_18102_19389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (9))){
var inst_18036 = (state_18075[(8)]);
var inst_18052 = cljs.core.vec(inst_18036);
var state_18075__$1 = state_18075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18075__$1,(11),out,inst_18052);
} else {
if((state_val_18076 === (5))){
var inst_18037 = (state_18075[(7)]);
var inst_18040 = (state_18075[(9)]);
var inst_18046 = (state_18075[(11)]);
var inst_18036 = (state_18075[(8)]);
var inst_18044 = (inst_18036[inst_18037] = inst_18040);
var inst_18046__$1 = (inst_18037 + (1));
var inst_18048 = (inst_18046__$1 < n);
var state_18075__$1 = (function (){var statearr_18105 = state_18075;
(statearr_18105[(12)] = inst_18044);

(statearr_18105[(11)] = inst_18046__$1);

return statearr_18105;
})();
if(cljs.core.truth_(inst_18048)){
var statearr_18107_19391 = state_18075__$1;
(statearr_18107_19391[(1)] = (8));

} else {
var statearr_18112_19392 = state_18075__$1;
(statearr_18112_19392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (14))){
var inst_18068 = (state_18075[(2)]);
var inst_18069 = cljs.core.async.close_BANG_(out);
var state_18075__$1 = (function (){var statearr_18115 = state_18075;
(statearr_18115[(13)] = inst_18068);

return statearr_18115;
})();
var statearr_18116_19393 = state_18075__$1;
(statearr_18116_19393[(2)] = inst_18069);

(statearr_18116_19393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (10))){
var inst_18059 = (state_18075[(2)]);
var state_18075__$1 = state_18075;
var statearr_18118_19394 = state_18075__$1;
(statearr_18118_19394[(2)] = inst_18059);

(statearr_18118_19394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18076 === (8))){
var inst_18046 = (state_18075[(11)]);
var inst_18036 = (state_18075[(8)]);
var tmp18113 = inst_18036;
var inst_18036__$1 = tmp18113;
var inst_18037 = inst_18046;
var state_18075__$1 = (function (){var statearr_18119 = state_18075;
(statearr_18119[(7)] = inst_18037);

(statearr_18119[(8)] = inst_18036__$1);

return statearr_18119;
})();
var statearr_18120_19395 = state_18075__$1;
(statearr_18120_19395[(2)] = null);

(statearr_18120_19395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_18123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18123[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_18123[(1)] = (1));

return statearr_18123;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_18075){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_18075);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e18124){var ex__14019__auto__ = e18124;
var statearr_18125_19396 = state_18075;
(statearr_18125_19396[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_18075[(4)]))){
var statearr_18126_19397 = state_18075;
(statearr_18126_19397[(1)] = cljs.core.first((state_18075[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19398 = state_18075;
state_18075 = G__19398;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_18075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_18075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_18127 = f__14586__auto__();
(statearr_18127[(6)] = c__14585__auto___19380);

return statearr_18127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18131 = arguments.length;
switch (G__18131) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14585__auto___19402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14586__auto__ = (function (){var switch__14015__auto__ = (function (state_18193){
var state_val_18194 = (state_18193[(1)]);
if((state_val_18194 === (7))){
var inst_18189 = (state_18193[(2)]);
var state_18193__$1 = state_18193;
var statearr_18195_19403 = state_18193__$1;
(statearr_18195_19403[(2)] = inst_18189);

(statearr_18195_19403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (1))){
var inst_18143 = [];
var inst_18144 = inst_18143;
var inst_18145 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18193__$1 = (function (){var statearr_18197 = state_18193;
(statearr_18197[(7)] = inst_18145);

(statearr_18197[(8)] = inst_18144);

return statearr_18197;
})();
var statearr_18198_19405 = state_18193__$1;
(statearr_18198_19405[(2)] = null);

(statearr_18198_19405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (4))){
var inst_18148 = (state_18193[(9)]);
var inst_18148__$1 = (state_18193[(2)]);
var inst_18151 = (inst_18148__$1 == null);
var inst_18152 = cljs.core.not(inst_18151);
var state_18193__$1 = (function (){var statearr_18201 = state_18193;
(statearr_18201[(9)] = inst_18148__$1);

return statearr_18201;
})();
if(inst_18152){
var statearr_18202_19407 = state_18193__$1;
(statearr_18202_19407[(1)] = (5));

} else {
var statearr_18203_19408 = state_18193__$1;
(statearr_18203_19408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (15))){
var inst_18144 = (state_18193[(8)]);
var inst_18181 = cljs.core.vec(inst_18144);
var state_18193__$1 = state_18193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18193__$1,(18),out,inst_18181);
} else {
if((state_val_18194 === (13))){
var inst_18176 = (state_18193[(2)]);
var state_18193__$1 = state_18193;
var statearr_18204_19409 = state_18193__$1;
(statearr_18204_19409[(2)] = inst_18176);

(statearr_18204_19409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (6))){
var inst_18144 = (state_18193[(8)]);
var inst_18178 = inst_18144.length;
var inst_18179 = (inst_18178 > (0));
var state_18193__$1 = state_18193;
if(cljs.core.truth_(inst_18179)){
var statearr_18207_19410 = state_18193__$1;
(statearr_18207_19410[(1)] = (15));

} else {
var statearr_18210_19411 = state_18193__$1;
(statearr_18210_19411[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (17))){
var inst_18186 = (state_18193[(2)]);
var inst_18187 = cljs.core.async.close_BANG_(out);
var state_18193__$1 = (function (){var statearr_18216 = state_18193;
(statearr_18216[(10)] = inst_18186);

return statearr_18216;
})();
var statearr_18217_19412 = state_18193__$1;
(statearr_18217_19412[(2)] = inst_18187);

(statearr_18217_19412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (3))){
var inst_18191 = (state_18193[(2)]);
var state_18193__$1 = state_18193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18193__$1,inst_18191);
} else {
if((state_val_18194 === (12))){
var inst_18144 = (state_18193[(8)]);
var inst_18169 = cljs.core.vec(inst_18144);
var state_18193__$1 = state_18193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18193__$1,(14),out,inst_18169);
} else {
if((state_val_18194 === (2))){
var state_18193__$1 = state_18193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18193__$1,(4),ch);
} else {
if((state_val_18194 === (11))){
var inst_18148 = (state_18193[(9)]);
var inst_18144 = (state_18193[(8)]);
var inst_18154 = (state_18193[(11)]);
var inst_18166 = inst_18144.push(inst_18148);
var tmp18220 = inst_18144;
var inst_18144__$1 = tmp18220;
var inst_18145 = inst_18154;
var state_18193__$1 = (function (){var statearr_18222 = state_18193;
(statearr_18222[(7)] = inst_18145);

(statearr_18222[(8)] = inst_18144__$1);

(statearr_18222[(12)] = inst_18166);

return statearr_18222;
})();
var statearr_18226_19413 = state_18193__$1;
(statearr_18226_19413[(2)] = null);

(statearr_18226_19413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (9))){
var inst_18145 = (state_18193[(7)]);
var inst_18158 = cljs.core.keyword_identical_QMARK_(inst_18145,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18193__$1 = state_18193;
var statearr_18228_19414 = state_18193__$1;
(statearr_18228_19414[(2)] = inst_18158);

(statearr_18228_19414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (5))){
var inst_18148 = (state_18193[(9)]);
var inst_18145 = (state_18193[(7)]);
var inst_18155 = (state_18193[(13)]);
var inst_18154 = (state_18193[(11)]);
var inst_18154__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18148) : f.call(null,inst_18148));
var inst_18155__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18154__$1,inst_18145);
var state_18193__$1 = (function (){var statearr_18230 = state_18193;
(statearr_18230[(13)] = inst_18155__$1);

(statearr_18230[(11)] = inst_18154__$1);

return statearr_18230;
})();
if(inst_18155__$1){
var statearr_18231_19415 = state_18193__$1;
(statearr_18231_19415[(1)] = (8));

} else {
var statearr_18232_19416 = state_18193__$1;
(statearr_18232_19416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (14))){
var inst_18148 = (state_18193[(9)]);
var inst_18154 = (state_18193[(11)]);
var inst_18171 = (state_18193[(2)]);
var inst_18172 = [];
var inst_18173 = inst_18172.push(inst_18148);
var inst_18144 = inst_18172;
var inst_18145 = inst_18154;
var state_18193__$1 = (function (){var statearr_18236 = state_18193;
(statearr_18236[(14)] = inst_18171);

(statearr_18236[(7)] = inst_18145);

(statearr_18236[(8)] = inst_18144);

(statearr_18236[(15)] = inst_18173);

return statearr_18236;
})();
var statearr_18239_19417 = state_18193__$1;
(statearr_18239_19417[(2)] = null);

(statearr_18239_19417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (16))){
var state_18193__$1 = state_18193;
var statearr_18244_19418 = state_18193__$1;
(statearr_18244_19418[(2)] = null);

(statearr_18244_19418[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (10))){
var inst_18160 = (state_18193[(2)]);
var state_18193__$1 = state_18193;
if(cljs.core.truth_(inst_18160)){
var statearr_18247_19419 = state_18193__$1;
(statearr_18247_19419[(1)] = (11));

} else {
var statearr_18250_19420 = state_18193__$1;
(statearr_18250_19420[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (18))){
var inst_18183 = (state_18193[(2)]);
var state_18193__$1 = state_18193;
var statearr_18255_19421 = state_18193__$1;
(statearr_18255_19421[(2)] = inst_18183);

(statearr_18255_19421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18194 === (8))){
var inst_18155 = (state_18193[(13)]);
var state_18193__$1 = state_18193;
var statearr_18258_19422 = state_18193__$1;
(statearr_18258_19422[(2)] = inst_18155);

(statearr_18258_19422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14016__auto__ = null;
var cljs$core$async$state_machine__14016__auto____0 = (function (){
var statearr_18263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18263[(0)] = cljs$core$async$state_machine__14016__auto__);

(statearr_18263[(1)] = (1));

return statearr_18263;
});
var cljs$core$async$state_machine__14016__auto____1 = (function (state_18193){
while(true){
var ret_value__14017__auto__ = (function (){try{while(true){
var result__14018__auto__ = switch__14015__auto__(state_18193);
if(cljs.core.keyword_identical_QMARK_(result__14018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14018__auto__;
}
break;
}
}catch (e18265){var ex__14019__auto__ = e18265;
var statearr_18266_19423 = state_18193;
(statearr_18266_19423[(2)] = ex__14019__auto__);


if(cljs.core.seq((state_18193[(4)]))){
var statearr_18267_19424 = state_18193;
(statearr_18267_19424[(1)] = cljs.core.first((state_18193[(4)])));

} else {
throw ex__14019__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19425 = state_18193;
state_18193 = G__19425;
continue;
} else {
return ret_value__14017__auto__;
}
break;
}
});
cljs$core$async$state_machine__14016__auto__ = function(state_18193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14016__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14016__auto____1.call(this,state_18193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14016__auto____0;
cljs$core$async$state_machine__14016__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14016__auto____1;
return cljs$core$async$state_machine__14016__auto__;
})()
})();
var state__14587__auto__ = (function (){var statearr_18269 = f__14586__auto__();
(statearr_18269[(6)] = c__14585__auto___19402);

return statearr_18269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14587__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
