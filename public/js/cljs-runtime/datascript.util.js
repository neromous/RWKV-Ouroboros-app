goog.provide('datascript.util');
datascript.util._STAR_debug_STAR_ = false;
datascript.util.rand_bits = (function datascript$util$rand_bits(pow){
return cljs.core.rand_int(((1) << pow));
});
datascript.util.to_hex_string = (function datascript$util$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count(s);
if((c > l)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),l);
} else {
if((c < l)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((l - c),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;

}
}
});
datascript.util.squuid = (function datascript$util$squuid(var_args){
var G__18063 = arguments.length;
switch (G__18063) {
case 0:
return datascript.util.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.util.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.util.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.util.squuid.cljs$core$IFn$_invoke$arity$1((new Date()).getTime());
}));

(datascript.util.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid([cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(((msec / (1000)) | (0)),(8))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(datascript.util.rand_bits((16)),(4))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(((datascript.util.rand_bits((16)) & (4095)) | (16384)),(4))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(((datascript.util.rand_bits((16)) & (16383)) | (32768)),(4))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(datascript.util.rand_bits((16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(datascript.util.rand_bits((16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.util.to_hex_string(datascript.util.rand_bits((16)),(4)))].join(''));
}));

(datascript.util.squuid.cljs$lang$maxFixedArity = 1);

/**
 * Returns time that was used in [[squuid]] call, in milliseconds, rounded to the closest second.
 */
datascript.util.squuid_time_millis = (function datascript$util$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),(0),(8)),(16)) * (1000));
});

//# sourceMappingURL=datascript.util.js.map
