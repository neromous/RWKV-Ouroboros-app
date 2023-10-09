
shadow.cljs.devtools.client.env.module_loaded('main');

try { ouroboros.app.core.init(); } catch (e) { console.error("An error occurred when calling (ouroboros.app.core/init)"); throw(e); }