["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/string/const.js"],"~:js","goog.provide(\"goog.string.Const\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.string.TypedString\");\ngoog.string.Const = function(opt_token, opt_content) {\n  this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = opt_token === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && opt_content || \"\";\n  this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;\n};\ngoog.string.Const.prototype.implementsGoogStringTypedString = true;\ngoog.string.Const.prototype.getTypedStringValue = function() {\n  return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;\n};\nif (goog.DEBUG) {\n  goog.string.Const.prototype.toString = function() {\n    return \"Const{\" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + \"}\";\n  };\n}\ngoog.string.Const.unwrap = function(stringConst) {\n  if (stringConst instanceof goog.string.Const && stringConst.constructor === goog.string.Const && stringConst.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_) {\n    return stringConst.stringConstValueWithSecurityContract__googStringSecurityPrivate_;\n  } else {\n    goog.asserts.fail(\"expected object of type Const, got '\" + stringConst + \"'\");\n    return \"type_error:Const\";\n  }\n};\ngoog.string.Const.from = function(s) {\n  return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, s);\n};\ngoog.string.Const.TYPE_MARKER_ = {};\ngoog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};\ngoog.string.Const.EMPTY = goog.string.Const.from(\"\");\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\ngoog.provide('goog.string.Const');\n\ngoog.require('goog.asserts');\ngoog.require('goog.string.TypedString');\n\n\n\n/**\n * Wrapper for compile-time-constant strings.\n *\n * Const is a wrapper for strings that can only be created from program\n * constants (i.e., string literals).  This property relies on a custom Closure\n * compiler check that `goog.string.Const.from` is only invoked on\n * compile-time-constant expressions.\n *\n * Const is useful in APIs whose correct and secure use requires that certain\n * arguments are not attacker controlled: Compile-time constants are inherently\n * under the control of the application and not under control of external\n * attackers, and hence are safe to use in such contexts.\n *\n * Instances of this type must be created via its factory method\n * `goog.string.Const.from` and not by invoking its constructor.  The\n * constructor intentionally takes no parameters and the type is immutable;\n * hence only a default instance corresponding to the empty string can be\n * obtained via constructor invocation.  Use goog.string.Const.EMPTY\n * instead of using this constructor to get an empty Const string.\n *\n * @see goog.string.Const#from\n * @constructor\n * @final\n * @struct\n * @implements {goog.string.TypedString}\n * @param {Object=} opt_token package-internal implementation detail.\n * @param {string=} opt_content package-internal implementation detail.\n */\ngoog.string.Const = function(opt_token, opt_content) {\n  'use strict';\n  /**\n   * The wrapped value of this Const object.  The field has a purposely ugly\n   * name to make (non-compiled) code that attempts to directly access this\n   * field stand out.\n   * @private {string}\n   */\n  this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =\n      ((opt_token ===\n        goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_) &&\n       opt_content) ||\n      '';\n\n  /**\n   * A type marker used to implement additional run-time type checking.\n   * @see goog.string.Const#unwrap\n   * @const {!Object}\n   * @private\n   */\n  this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ =\n      goog.string.Const.TYPE_MARKER_;\n};\n\n\n/**\n * @override\n * @const\n */\ngoog.string.Const.prototype.implementsGoogStringTypedString = true;\n\n\n/**\n * Returns this Const's value as a string.\n *\n * IMPORTANT: In code where it is security-relevant that an object's type is\n * indeed `goog.string.Const`, use `goog.string.Const.unwrap`\n * instead of this method.\n *\n * @see goog.string.Const#unwrap\n * @override\n * @return {string}\n */\ngoog.string.Const.prototype.getTypedStringValue = function() {\n  'use strict';\n  return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;\n};\n\n\nif (goog.DEBUG) {\n  /**\n   * Returns a debug-string representation of this value.\n   *\n   * To obtain the actual string value wrapped inside an object of this type,\n   * use `goog.string.Const.unwrap`.\n   *\n   * @see goog.string.Const#unwrap\n   * @override\n   * @return {string}\n   */\n  goog.string.Const.prototype.toString = function() {\n    'use strict';\n    return 'Const{' +\n        this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ +\n        '}';\n  };\n}\n\n\n/**\n * Performs a runtime check that the provided object is indeed an instance\n * of `goog.string.Const`, and returns its value.\n * @param {!goog.string.Const} stringConst The object to extract from.\n * @return {string} The Const object's contained string, unless the run-time\n *     type check fails. In that case, `unwrap` returns an innocuous\n *     string, or, if assertions are enabled, throws\n *     `goog.asserts.AssertionError`.\n */\ngoog.string.Const.unwrap = function(stringConst) {\n  'use strict';\n  // Perform additional run-time type-checking to ensure that stringConst is\n  // indeed an instance of the expected type.  This provides some additional\n  // protection against security bugs due to application code that disables type\n  // checks.\n  if (stringConst instanceof goog.string.Const &&\n      stringConst.constructor === goog.string.Const &&\n      stringConst.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ ===\n          goog.string.Const.TYPE_MARKER_) {\n    return stringConst\n        .stringConstValueWithSecurityContract__googStringSecurityPrivate_;\n  } else {\n    goog.asserts.fail(\n        'expected object of type Const, got \\'' + stringConst + '\\'');\n    return 'type_error:Const';\n  }\n};\n\n\n/**\n * Creates a Const object from a compile-time constant string.\n *\n * It is illegal to invoke this function on an expression whose\n * compile-time-constant value cannot be determined by the Closure compiler.\n *\n * Correct invocations include,\n * <pre>\n *   var s = goog.string.Const.from('hello');\n *   var t = goog.string.Const.from('hello' + 'world');\n * </pre>\n *\n * In contrast, the following are illegal:\n * <pre>\n *   var s = goog.string.Const.from(getHello());\n *   var t = goog.string.Const.from('hello' + world);\n * </pre>\n *\n * @param {string} s A constant string from which to create a Const.\n * @return {!goog.string.Const} A Const object initialized to stringConst.\n */\ngoog.string.Const.from = function(s) {\n  'use strict';\n  return new goog.string.Const(\n      goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, s);\n};\n\n/**\n * Type marker for the Const type, used to implement additional run-time\n * type checking.\n * @const {!Object}\n * @private\n */\ngoog.string.Const.TYPE_MARKER_ = {};\n\n/**\n * @type {!Object}\n * @private\n * @const\n */\ngoog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};\n\n/**\n * A Const instance wrapping the empty string.\n * @const {!goog.string.Const}\n */\ngoog.string.Const.EMPTY = goog.string.Const.from('');\n","~:compiled-at",1696742677790,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.string.const.js\",\n\"lineCount\":31,\n\"mappings\":\"AAMAA,IAAKC,CAAAA,OAAL,CAAa,mBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,cAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,yBAAb,CAAA;AAgCAF,IAAKG,CAAAA,MAAOC,CAAAA,KAAZ,GAAoBC,QAAQ,CAACC,SAAD,EAAYC,WAAZ,CAAyB;AAQnD,MAAKC,CAAAA,gEAAL,GACMF,SADN,KAEMN,IAAKG,CAAAA,MAAOC,CAAAA,KAAMK,CAAAA,sCAFxB,IAGKF,WAHL,IAII,EAJJ;AAYA,MAAKG,CAAAA,uDAAL,GACIV,IAAKG,CAAAA,MAAOC,CAAAA,KAAMO,CAAAA,YADtB;AApBmD,CAArD;AA6BAX,IAAKG,CAAAA,MAAOC,CAAAA,KAAMQ,CAAAA,SAAUC,CAAAA,+BAA5B,GAA8D,IAA9D;AAcAb,IAAKG,CAAAA,MAAOC,CAAAA,KAAMQ,CAAAA,SAAUE,CAAAA,mBAA5B,GAAkDC,QAAQ,EAAG;AAE3D,SAAO,IAAKP,CAAAA,gEAAZ;AAF2D,CAA7D;AAMA,IAAIR,IAAKgB,CAAAA,KAAT;AAWEhB,MAAKG,CAAAA,MAAOC,CAAAA,KAAMQ,CAAAA,SAAUK,CAAAA,QAA5B,GAAuCC,QAAQ,EAAG;AAEhD,WAAO,QAAP,GACI,IAAKV,CAAAA,gEADT,GAEI,GAFJ;AAFgD,GAAlD;AAXF;AA6BAR,IAAKG,CAAAA,MAAOC,CAAAA,KAAMe,CAAAA,MAAlB,GAA2BC,QAAQ,CAACC,WAAD,CAAc;AAM/C,MAAIA,WAAJ,YAA2BrB,IAAKG,CAAAA,MAAOC,CAAAA,KAAvC,IACIiB,WAAYC,CAAAA,WADhB,KACgCtB,IAAKG,CAAAA,MAAOC,CAAAA,KAD5C,IAEIiB,WAAYX,CAAAA,uDAFhB,KAGQV,IAAKG,CAAAA,MAAOC,CAAAA,KAAMO,CAAAA,YAH1B;AAIE,WAAOU,WACFb,CAAAA,gEADL;AAJF,QAMO;AACLR,QAAKuB,CAAAA,OAAQC,CAAAA,IAAb,CACI,sCADJ,GAC8CH,WAD9C,GAC4D,GAD5D,CAAA;AAEA,WAAO,kBAAP;AAHK;AAZwC,CAAjD;AAyCArB,IAAKG,CAAAA,MAAOC,CAAAA,KAAMqB,CAAAA,IAAlB,GAAyBC,QAAQ,CAACC,CAAD,CAAI;AAEnC,SAAO,IAAI3B,IAAKG,CAAAA,MAAOC,CAAAA,KAAhB,CACHJ,IAAKG,CAAAA,MAAOC,CAAAA,KAAMK,CAAAA,sCADf,EACuDkB,CADvD,CAAP;AAFmC,CAArC;AAYA3B,IAAKG,CAAAA,MAAOC,CAAAA,KAAMO,CAAAA,YAAlB,GAAiC,EAAjC;AAOAX,IAAKG,CAAAA,MAAOC,CAAAA,KAAMK,CAAAA,sCAAlB,GAA2D,EAA3D;AAMAT,IAAKG,CAAAA,MAAOC,CAAAA,KAAMwB,CAAAA,KAAlB,GAA0B5B,IAAKG,CAAAA,MAAOC,CAAAA,KAAMqB,CAAAA,IAAlB,CAAuB,EAAvB,CAA1B;;\",\n\"sources\":[\"goog/string/const.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\ngoog.provide('goog.string.Const');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.string.TypedString');\\n\\n\\n\\n/**\\n * Wrapper for compile-time-constant strings.\\n *\\n * Const is a wrapper for strings that can only be created from program\\n * constants (i.e., string literals).  This property relies on a custom Closure\\n * compiler check that `goog.string.Const.from` is only invoked on\\n * compile-time-constant expressions.\\n *\\n * Const is useful in APIs whose correct and secure use requires that certain\\n * arguments are not attacker controlled: Compile-time constants are inherently\\n * under the control of the application and not under control of external\\n * attackers, and hence are safe to use in such contexts.\\n *\\n * Instances of this type must be created via its factory method\\n * `goog.string.Const.from` and not by invoking its constructor.  The\\n * constructor intentionally takes no parameters and the type is immutable;\\n * hence only a default instance corresponding to the empty string can be\\n * obtained via constructor invocation.  Use goog.string.Const.EMPTY\\n * instead of using this constructor to get an empty Const string.\\n *\\n * @see goog.string.Const#from\\n * @constructor\\n * @final\\n * @struct\\n * @implements {goog.string.TypedString}\\n * @param {Object=} opt_token package-internal implementation detail.\\n * @param {string=} opt_content package-internal implementation detail.\\n */\\ngoog.string.Const = function(opt_token, opt_content) {\\n  'use strict';\\n  /**\\n   * The wrapped value of this Const object.  The field has a purposely ugly\\n   * name to make (non-compiled) code that attempts to directly access this\\n   * field stand out.\\n   * @private {string}\\n   */\\n  this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =\\n      ((opt_token ===\\n        goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_) &&\\n       opt_content) ||\\n      '';\\n\\n  /**\\n   * A type marker used to implement additional run-time type checking.\\n   * @see goog.string.Const#unwrap\\n   * @const {!Object}\\n   * @private\\n   */\\n  this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ =\\n      goog.string.Const.TYPE_MARKER_;\\n};\\n\\n\\n/**\\n * @override\\n * @const\\n */\\ngoog.string.Const.prototype.implementsGoogStringTypedString = true;\\n\\n\\n/**\\n * Returns this Const's value as a string.\\n *\\n * IMPORTANT: In code where it is security-relevant that an object's type is\\n * indeed `goog.string.Const`, use `goog.string.Const.unwrap`\\n * instead of this method.\\n *\\n * @see goog.string.Const#unwrap\\n * @override\\n * @return {string}\\n */\\ngoog.string.Const.prototype.getTypedStringValue = function() {\\n  'use strict';\\n  return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;\\n};\\n\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Returns a debug-string representation of this value.\\n   *\\n   * To obtain the actual string value wrapped inside an object of this type,\\n   * use `goog.string.Const.unwrap`.\\n   *\\n   * @see goog.string.Const#unwrap\\n   * @override\\n   * @return {string}\\n   */\\n  goog.string.Const.prototype.toString = function() {\\n    'use strict';\\n    return 'Const{' +\\n        this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ +\\n        '}';\\n  };\\n}\\n\\n\\n/**\\n * Performs a runtime check that the provided object is indeed an instance\\n * of `goog.string.Const`, and returns its value.\\n * @param {!goog.string.Const} stringConst The object to extract from.\\n * @return {string} The Const object's contained string, unless the run-time\\n *     type check fails. In that case, `unwrap` returns an innocuous\\n *     string, or, if assertions are enabled, throws\\n *     `goog.asserts.AssertionError`.\\n */\\ngoog.string.Const.unwrap = function(stringConst) {\\n  'use strict';\\n  // Perform additional run-time type-checking to ensure that stringConst is\\n  // indeed an instance of the expected type.  This provides some additional\\n  // protection against security bugs due to application code that disables type\\n  // checks.\\n  if (stringConst instanceof goog.string.Const &&\\n      stringConst.constructor === goog.string.Const &&\\n      stringConst.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ ===\\n          goog.string.Const.TYPE_MARKER_) {\\n    return stringConst\\n        .stringConstValueWithSecurityContract__googStringSecurityPrivate_;\\n  } else {\\n    goog.asserts.fail(\\n        'expected object of type Const, got \\\\'' + stringConst + '\\\\'');\\n    return 'type_error:Const';\\n  }\\n};\\n\\n\\n/**\\n * Creates a Const object from a compile-time constant string.\\n *\\n * It is illegal to invoke this function on an expression whose\\n * compile-time-constant value cannot be determined by the Closure compiler.\\n *\\n * Correct invocations include,\\n * <pre>\\n *   var s = goog.string.Const.from('hello');\\n *   var t = goog.string.Const.from('hello' + 'world');\\n * </pre>\\n *\\n * In contrast, the following are illegal:\\n * <pre>\\n *   var s = goog.string.Const.from(getHello());\\n *   var t = goog.string.Const.from('hello' + world);\\n * </pre>\\n *\\n * @param {string} s A constant string from which to create a Const.\\n * @return {!goog.string.Const} A Const object initialized to stringConst.\\n */\\ngoog.string.Const.from = function(s) {\\n  'use strict';\\n  return new goog.string.Const(\\n      goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, s);\\n};\\n\\n/**\\n * Type marker for the Const type, used to implement additional run-time\\n * type checking.\\n * @const {!Object}\\n * @private\\n */\\ngoog.string.Const.TYPE_MARKER_ = {};\\n\\n/**\\n * @type {!Object}\\n * @private\\n * @const\\n */\\ngoog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};\\n\\n/**\\n * A Const instance wrapping the empty string.\\n * @const {!goog.string.Const}\\n */\\ngoog.string.Const.EMPTY = goog.string.Const.from('');\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"string\",\"Const\",\"goog.string.Const\",\"opt_token\",\"opt_content\",\"stringConstValueWithSecurityContract__googStringSecurityPrivate_\",\"GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_\",\"STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_\",\"TYPE_MARKER_\",\"prototype\",\"implementsGoogStringTypedString\",\"getTypedStringValue\",\"goog.string.Const.prototype.getTypedStringValue\",\"DEBUG\",\"toString\",\"goog.string.Const.prototype.toString\",\"unwrap\",\"goog.string.Const.unwrap\",\"stringConst\",\"constructor\",\"asserts\",\"fail\",\"from\",\"goog.string.Const.from\",\"s\",\"EMPTY\"]\n}\n"]