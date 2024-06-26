function G0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const a of i.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var q0 = { exports: {} },
  Gc = {},
  X0 = { exports: {} },
  Me = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nl = Symbol.for('react.element'),
  Cw = Symbol.for('react.portal'),
  Sw = Symbol.for('react.fragment'),
  ww = Symbol.for('react.strict_mode'),
  xw = Symbol.for('react.profiler'),
  Ew = Symbol.for('react.provider'),
  $w = Symbol.for('react.context'),
  Ow = Symbol.for('react.forward_ref'),
  Pw = Symbol.for('react.suspense'),
  Rw = Symbol.for('react.memo'),
  Tw = Symbol.for('react.lazy'),
  Np = Symbol.iterator;
function _w(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Np && e[Np]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Q0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Y0 = Object.assign,
  Z0 = {};
function pa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Z0),
    (this.updater = n || Q0);
}
pa.prototype.isReactComponent = {};
pa.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
pa.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function J0() {}
J0.prototype = pa.prototype;
function qv(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Z0),
    (this.updater = n || Q0);
}
var Xv = (qv.prototype = new J0());
Xv.constructor = qv;
Y0(Xv, pa.prototype);
Xv.isPureReactComponent = !0;
var jp = Array.isArray,
  ey = Object.prototype.hasOwnProperty,
  Qv = { current: null },
  ty = { key: !0, ref: !0, __self: !0, __source: !0 };
function ny(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      ey.call(t, r) && !ty.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Nl,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Qv.current,
  };
}
function Mw(e, t) {
  return {
    $$typeof: Nl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yv(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Nl;
}
function Iw(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Lp = /\/+/g;
function Qu(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Iw('' + e.key)
    : t.toString(36);
}
function Ns(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Nl:
          case Cw:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === '' ? '.' + Qu(a, 0) : r),
      jp(o)
        ? ((n = ''),
          e != null && (n = e.replace(Lp, '$&/') + '/'),
          Ns(o, t, n, '', function (c) {
            return c;
          }))
        : o != null &&
          (Yv(o) &&
            (o = Mw(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Lp, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), jp(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + Qu(i, l);
      a += Ns(i, t, n, s, o);
    }
  else if (((s = _w(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Qu(i, l++)), (a += Ns(i, t, n, s, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return a;
}
function Jl(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ns(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function kw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var sn = { current: null },
  js = { transition: null },
  Nw = {
    ReactCurrentDispatcher: sn,
    ReactCurrentBatchConfig: js,
    ReactCurrentOwner: Qv,
  };
Me.Children = {
  map: Jl,
  forEach: function (e, t, n) {
    Jl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Jl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Jl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yv(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
Me.Component = pa;
Me.Fragment = Sw;
Me.Profiler = xw;
Me.PureComponent = qv;
Me.StrictMode = ww;
Me.Suspense = Pw;
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nw;
Me.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Y0({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Qv.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      ey.call(t, s) &&
        !ty.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var c = 0; c < s; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Nl, type: e.type, key: o, ref: i, props: r, _owner: a };
};
Me.createContext = function (e) {
  return (
    (e = {
      $$typeof: $w,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ew, _context: e }),
    (e.Consumer = e)
  );
};
Me.createElement = ny;
Me.createFactory = function (e) {
  var t = ny.bind(null, e);
  return (t.type = e), t;
};
Me.createRef = function () {
  return { current: null };
};
Me.forwardRef = function (e) {
  return { $$typeof: Ow, render: e };
};
Me.isValidElement = Yv;
Me.lazy = function (e) {
  return { $$typeof: Tw, _payload: { _status: -1, _result: e }, _init: kw };
};
Me.memo = function (e, t) {
  return { $$typeof: Rw, type: e, compare: t === void 0 ? null : t };
};
Me.startTransition = function (e) {
  var t = js.transition;
  js.transition = {};
  try {
    e();
  } finally {
    js.transition = t;
  }
};
Me.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
Me.useCallback = function (e, t) {
  return sn.current.useCallback(e, t);
};
Me.useContext = function (e) {
  return sn.current.useContext(e);
};
Me.useDebugValue = function () {};
Me.useDeferredValue = function (e) {
  return sn.current.useDeferredValue(e);
};
Me.useEffect = function (e, t) {
  return sn.current.useEffect(e, t);
};
Me.useId = function () {
  return sn.current.useId();
};
Me.useImperativeHandle = function (e, t, n) {
  return sn.current.useImperativeHandle(e, t, n);
};
Me.useInsertionEffect = function (e, t) {
  return sn.current.useInsertionEffect(e, t);
};
Me.useLayoutEffect = function (e, t) {
  return sn.current.useLayoutEffect(e, t);
};
Me.useMemo = function (e, t) {
  return sn.current.useMemo(e, t);
};
Me.useReducer = function (e, t, n) {
  return sn.current.useReducer(e, t, n);
};
Me.useRef = function (e) {
  return sn.current.useRef(e);
};
Me.useState = function (e) {
  return sn.current.useState(e);
};
Me.useSyncExternalStore = function (e, t, n) {
  return sn.current.useSyncExternalStore(e, t, n);
};
Me.useTransition = function () {
  return sn.current.useTransition();
};
Me.version = '18.2.0';
X0.exports = Me;
var u = X0.exports;
const G = Kc(u),
  qc = G0({ __proto__: null, default: G }, [u]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jw = u,
  Lw = Symbol.for('react.element'),
  Fw = Symbol.for('react.fragment'),
  Aw = Object.prototype.hasOwnProperty,
  zw = jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Dw = { key: !0, ref: !0, __self: !0, __source: !0 };
function ry(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Aw.call(t, r) && !Dw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Lw,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: zw.current,
  };
}
Gc.Fragment = Fw;
Gc.jsx = ry;
Gc.jsxs = ry;
q0.exports = Gc;
var W = q0.exports,
  Jf = {},
  oy = { exports: {} },
  Mn = {},
  iy = { exports: {} },
  ay = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, N) {
    var I = $.length;
    $.push(N);
    e: for (; 0 < I; ) {
      var F = (I - 1) >>> 1,
        A = $[F];
      if (0 < o(A, N)) ($[F] = N), ($[I] = A), (I = F);
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var N = $[0],
      I = $.pop();
    if (I !== N) {
      $[0] = I;
      e: for (var F = 0, A = $.length, V = A >>> 1; F < V; ) {
        var U = 2 * (F + 1) - 1,
          Y = $[U],
          te = U + 1,
          J = $[te];
        if (0 > o(Y, I))
          te < A && 0 > o(J, Y)
            ? (($[F] = J), ($[te] = I), (F = te))
            : (($[F] = Y), ($[U] = I), (F = U));
        else if (te < A && 0 > o(J, I)) ($[F] = J), ($[te] = I), (F = te);
        else break e;
      }
    }
    return N;
  }
  function o($, N) {
    var I = $.sortIndex - N.sortIndex;
    return I !== 0 ? I : $.id - N.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    c = [],
    f = 1,
    d = null,
    v = 3,
    h = !1,
    b = !1,
    y = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g($) {
    for (var N = n(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= $)
        r(c), (N.sortIndex = N.expirationTime), t(s, N);
      else break;
      N = n(c);
    }
  }
  function C($) {
    if (((y = !1), g($), !b))
      if (n(s) !== null) (b = !0), k(E);
      else {
        var N = n(c);
        N !== null && T(C, N.startTime - $);
      }
  }
  function E($, N) {
    (b = !1), y && ((y = !1), p(O), (O = -1)), (h = !0);
    var I = v;
    try {
      for (
        g(N), d = n(s);
        d !== null && (!(d.expirationTime > N) || ($ && !M()));

      ) {
        var F = d.callback;
        if (typeof F == 'function') {
          (d.callback = null), (v = d.priorityLevel);
          var A = F(d.expirationTime <= N);
          (N = e.unstable_now()),
            typeof A == 'function' ? (d.callback = A) : d === n(s) && r(s),
            g(N);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var V = !0;
      else {
        var U = n(c);
        U !== null && T(C, U.startTime - N), (V = !1);
      }
      return V;
    } finally {
      (d = null), (v = I), (h = !1);
    }
  }
  var w = !1,
    x = null,
    O = -1,
    P = 5,
    _ = -1;
  function M() {
    return !(e.unstable_now() - _ < P);
  }
  function L() {
    if (x !== null) {
      var $ = e.unstable_now();
      _ = $;
      var N = !0;
      try {
        N = x(!0, $);
      } finally {
        N ? R() : ((w = !1), (x = null));
      }
    } else w = !1;
  }
  var R;
  if (typeof m == 'function')
    R = function () {
      m(L);
    };
  else if (typeof MessageChannel < 'u') {
    var D = new MessageChannel(),
      B = D.port2;
    (D.port1.onmessage = L),
      (R = function () {
        B.postMessage(null);
      });
  } else
    R = function () {
      S(L, 0);
    };
  function k($) {
    (x = $), w || ((w = !0), R());
  }
  function T($, N) {
    O = S(function () {
      $(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || h || ((b = !0), k(E));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (P = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function ($) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = v;
      }
      var I = v;
      v = N;
      try {
        return $();
      } finally {
        v = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, N) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var I = v;
      v = $;
      try {
        return N();
      } finally {
        v = I;
      }
    }),
    (e.unstable_scheduleCallback = function ($, N, I) {
      var F = e.unstable_now();
      switch (
        (typeof I == 'object' && I !== null
          ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? F + I : F))
          : (I = F),
        $)
      ) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return (
        (A = I + A),
        ($ = {
          id: f++,
          callback: N,
          priorityLevel: $,
          startTime: I,
          expirationTime: A,
          sortIndex: -1,
        }),
        I > F
          ? (($.sortIndex = I),
            t(c, $),
            n(s) === null &&
              $ === n(c) &&
              (y ? (p(O), (O = -1)) : (y = !0), T(C, I - F)))
          : (($.sortIndex = A), t(s, $), b || h || ((b = !0), k(E))),
        $
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function ($) {
      var N = v;
      return function () {
        var I = v;
        v = N;
        try {
          return $.apply(this, arguments);
        } finally {
          v = I;
        }
      };
    });
})(ay);
iy.exports = ay;
var Bw = iy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ly = u,
  _n = Bw;
function X(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var sy = new Set(),
  cl = {};
function li(e, t) {
  na(e, t), na(e + 'Capture', t);
}
function na(e, t) {
  for (cl[e] = t, e = 0; e < t.length; e++) sy.add(t[e]);
}
var Lr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ed = Object.prototype.hasOwnProperty,
  Hw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fp = {},
  Ap = {};
function Vw(e) {
  return ed.call(Ap, e)
    ? !0
    : ed.call(Fp, e)
      ? !1
      : Hw.test(e)
        ? (Ap[e] = !0)
        : ((Fp[e] = !0), !1);
}
function Ww(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Uw(e, t, n, r) {
  if (t === null || typeof t > 'u' || Ww(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function cn(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Wt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Wt[e] = new cn(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Wt[t] = new cn(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Wt[e] = new cn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Wt[e] = new cn(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Wt[e] = new cn(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Wt[e] = new cn(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Wt[e] = new cn(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Wt[e] = new cn(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Wt[e] = new cn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zv = /[\-:]([a-z])/g;
function Jv(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Zv, Jv);
    Wt[t] = new cn(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Zv, Jv);
    Wt[t] = new cn(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Zv, Jv);
  Wt[t] = new cn(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Wt[e] = new cn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Wt.xlinkHref = new cn(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Wt[e] = new cn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function em(e, t, n, r) {
  var o = Wt.hasOwnProperty(t) ? Wt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Uw(t, n, o, r) && (n = null),
    r || o === null
      ? Vw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vr = ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  es = Symbol.for('react.element'),
  ki = Symbol.for('react.portal'),
  Ni = Symbol.for('react.fragment'),
  tm = Symbol.for('react.strict_mode'),
  td = Symbol.for('react.profiler'),
  cy = Symbol.for('react.provider'),
  uy = Symbol.for('react.context'),
  nm = Symbol.for('react.forward_ref'),
  nd = Symbol.for('react.suspense'),
  rd = Symbol.for('react.suspense_list'),
  rm = Symbol.for('react.memo'),
  to = Symbol.for('react.lazy'),
  fy = Symbol.for('react.offscreen'),
  zp = Symbol.iterator;
function Pa(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (zp && e[zp]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var lt = Object.assign,
  Yu;
function Ha(e) {
  if (Yu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yu = (t && t[1]) || '';
    }
  return (
    `
` +
    Yu +
    e
  );
}
var Zu = !1;
function Ju(e, t) {
  if (!e || Zu) return '';
  Zu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var s =
                  `
` + o[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Zu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ha(e) : '';
}
function Kw(e) {
  switch (e.tag) {
    case 5:
      return Ha(e.type);
    case 16:
      return Ha('Lazy');
    case 13:
      return Ha('Suspense');
    case 19:
      return Ha('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ju(e.type, !1)), e;
    case 11:
      return (e = Ju(e.type.render, !1)), e;
    case 1:
      return (e = Ju(e.type, !0)), e;
    default:
      return '';
  }
}
function od(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ni:
      return 'Fragment';
    case ki:
      return 'Portal';
    case td:
      return 'Profiler';
    case tm:
      return 'StrictMode';
    case nd:
      return 'Suspense';
    case rd:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case uy:
        return (e.displayName || 'Context') + '.Consumer';
      case cy:
        return (e._context.displayName || 'Context') + '.Provider';
      case nm:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case rm:
        return (
          (t = e.displayName || null), t !== null ? t : od(e.type) || 'Memo'
        );
      case to:
        (t = e._payload), (e = e._init);
        try {
          return od(e(t));
        } catch {}
    }
  return null;
}
function Gw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return od(t);
    case 8:
      return t === tm ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function So(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function dy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function qw(e) {
  var t = dy(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = '' + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ts(e) {
  e._valueTracker || (e._valueTracker = qw(e));
}
function vy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = dy(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function sc(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function id(e, t) {
  var n = t.checked;
  return lt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Dp(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = So(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function my(e, t) {
  (t = t.checked), t != null && em(e, 'checked', t, !1);
}
function ad(e, t) {
  my(e, t);
  var n = So(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? ld(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ld(e, t.type, So(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bp(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function ld(e, t, n) {
  (t !== 'number' || sc(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Va = Array.isArray;
function qi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + So(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function sd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(X(91));
  return lt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Hp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(X(92));
      if (Va(n)) {
        if (1 < n.length) throw Error(X(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: So(n) };
}
function py(e, t) {
  var n = So(t.value),
    r = So(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Vp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function gy(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function cd(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? gy(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var ns,
  hy = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        ns = ns || document.createElement('div'),
          ns.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ns.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ul(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Xw = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(qa).forEach(function (e) {
  Xw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qa[t] = qa[e]);
  });
});
function yy(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (qa.hasOwnProperty(e) && qa[e])
      ? ('' + t).trim()
      : t + 'px';
}
function by(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = yy(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Qw = lt(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ud(e, t) {
  if (t) {
    if (Qw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(X(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(X(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(X(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(X(62));
  }
}
function fd(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var dd = null;
function om(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vd = null,
  Xi = null,
  Qi = null;
function Wp(e) {
  if ((e = Fl(e))) {
    if (typeof vd != 'function') throw Error(X(280));
    var t = e.stateNode;
    t && ((t = Jc(t)), vd(e.stateNode, e.type, t));
  }
}
function Cy(e) {
  Xi ? (Qi ? Qi.push(e) : (Qi = [e])) : (Xi = e);
}
function Sy() {
  if (Xi) {
    var e = Xi,
      t = Qi;
    if (((Qi = Xi = null), Wp(e), t)) for (e = 0; e < t.length; e++) Wp(t[e]);
  }
}
function wy(e, t) {
  return e(t);
}
function xy() {}
var ef = !1;
function Ey(e, t, n) {
  if (ef) return e(t, n);
  ef = !0;
  try {
    return wy(e, t, n);
  } finally {
    (ef = !1), (Xi !== null || Qi !== null) && (xy(), Sy());
  }
}
function fl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Jc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(X(231, t, typeof n));
  return n;
}
var md = !1;
if (Lr)
  try {
    var Ra = {};
    Object.defineProperty(Ra, 'passive', {
      get: function () {
        md = !0;
      },
    }),
      window.addEventListener('test', Ra, Ra),
      window.removeEventListener('test', Ra, Ra);
  } catch {
    md = !1;
  }
function Yw(e, t, n, r, o, i, a, l, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var Xa = !1,
  cc = null,
  uc = !1,
  pd = null,
  Zw = {
    onError: function (e) {
      (Xa = !0), (cc = e);
    },
  };
function Jw(e, t, n, r, o, i, a, l, s) {
  (Xa = !1), (cc = null), Yw.apply(Zw, arguments);
}
function ex(e, t, n, r, o, i, a, l, s) {
  if ((Jw.apply(this, arguments), Xa)) {
    if (Xa) {
      var c = cc;
      (Xa = !1), (cc = null);
    } else throw Error(X(198));
    uc || ((uc = !0), (pd = c));
  }
}
function si(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function $y(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Up(e) {
  if (si(e) !== e) throw Error(X(188));
}
function tx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = si(e)), t === null)) throw Error(X(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Up(o), e;
        if (i === r) return Up(o), t;
        i = i.sibling;
      }
      throw Error(X(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(X(189));
      }
    }
    if (n.alternate !== r) throw Error(X(190));
  }
  if (n.tag !== 3) throw Error(X(188));
  return n.stateNode.current === n ? e : t;
}
function Oy(e) {
  return (e = tx(e)), e !== null ? Py(e) : null;
}
function Py(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Py(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ry = _n.unstable_scheduleCallback,
  Kp = _n.unstable_cancelCallback,
  nx = _n.unstable_shouldYield,
  rx = _n.unstable_requestPaint,
  Ct = _n.unstable_now,
  ox = _n.unstable_getCurrentPriorityLevel,
  im = _n.unstable_ImmediatePriority,
  Ty = _n.unstable_UserBlockingPriority,
  fc = _n.unstable_NormalPriority,
  ix = _n.unstable_LowPriority,
  _y = _n.unstable_IdlePriority,
  Xc = null,
  hr = null;
function ax(e) {
  if (hr && typeof hr.onCommitFiberRoot == 'function')
    try {
      hr.onCommitFiberRoot(Xc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var or = Math.clz32 ? Math.clz32 : cx,
  lx = Math.log,
  sx = Math.LN2;
function cx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((lx(e) / sx) | 0)) | 0;
}
var rs = 64,
  os = 4194304;
function Wa(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function dc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = Wa(l)) : ((i &= a), i !== 0 && (r = Wa(i)));
  } else (a = n & ~o), a !== 0 ? (r = Wa(a)) : i !== 0 && (r = Wa(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - or(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function ux(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function fx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - or(i),
      l = 1 << a,
      s = o[a];
    s === -1
      ? (!(l & n) || l & r) && (o[a] = ux(l, t))
      : s <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function gd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function My() {
  var e = rs;
  return (rs <<= 1), !(rs & 4194240) && (rs = 64), e;
}
function tf(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function jl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - or(t)),
    (e[t] = n);
}
function dx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - or(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function am(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - or(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var He = 0;
function Iy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ky,
  lm,
  Ny,
  jy,
  Ly,
  hd = !1,
  is = [],
  fo = null,
  vo = null,
  mo = null,
  dl = new Map(),
  vl = new Map(),
  ro = [],
  vx =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Gp(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      fo = null;
      break;
    case 'dragenter':
    case 'dragleave':
      vo = null;
      break;
    case 'mouseover':
    case 'mouseout':
      mo = null;
      break;
    case 'pointerover':
    case 'pointerout':
      dl.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      vl.delete(t.pointerId);
  }
}
function Ta(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Fl(t)), t !== null && lm(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function mx(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (fo = Ta(fo, e, t, n, r, o)), !0;
    case 'dragenter':
      return (vo = Ta(vo, e, t, n, r, o)), !0;
    case 'mouseover':
      return (mo = Ta(mo, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return dl.set(i, Ta(dl.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), vl.set(i, Ta(vl.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Fy(e) {
  var t = Ao(e.target);
  if (t !== null) {
    var n = si(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $y(n)), t !== null)) {
          (e.blockedOn = t),
            Ly(e.priority, function () {
              Ny(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ls(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (dd = r), n.target.dispatchEvent(r), (dd = null);
    } else return (t = Fl(n)), t !== null && lm(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qp(e, t, n) {
  Ls(e) && n.delete(t);
}
function px() {
  (hd = !1),
    fo !== null && Ls(fo) && (fo = null),
    vo !== null && Ls(vo) && (vo = null),
    mo !== null && Ls(mo) && (mo = null),
    dl.forEach(qp),
    vl.forEach(qp);
}
function _a(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    hd ||
      ((hd = !0),
      _n.unstable_scheduleCallback(_n.unstable_NormalPriority, px)));
}
function ml(e) {
  function t(o) {
    return _a(o, e);
  }
  if (0 < is.length) {
    _a(is[0], e);
    for (var n = 1; n < is.length; n++) {
      var r = is[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    fo !== null && _a(fo, e),
      vo !== null && _a(vo, e),
      mo !== null && _a(mo, e),
      dl.forEach(t),
      vl.forEach(t),
      n = 0;
    n < ro.length;
    n++
  )
    (r = ro[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ro.length && ((n = ro[0]), n.blockedOn === null); )
    Fy(n), n.blockedOn === null && ro.shift();
}
var Yi = Vr.ReactCurrentBatchConfig,
  vc = !0;
function gx(e, t, n, r) {
  var o = He,
    i = Yi.transition;
  Yi.transition = null;
  try {
    (He = 1), sm(e, t, n, r);
  } finally {
    (He = o), (Yi.transition = i);
  }
}
function hx(e, t, n, r) {
  var o = He,
    i = Yi.transition;
  Yi.transition = null;
  try {
    (He = 4), sm(e, t, n, r);
  } finally {
    (He = o), (Yi.transition = i);
  }
}
function sm(e, t, n, r) {
  if (vc) {
    var o = yd(e, t, n, r);
    if (o === null) df(e, t, r, mc, n), Gp(e, r);
    else if (mx(o, e, t, n, r)) r.stopPropagation();
    else if ((Gp(e, r), t & 4 && -1 < vx.indexOf(e))) {
      for (; o !== null; ) {
        var i = Fl(o);
        if (
          (i !== null && ky(i),
          (i = yd(e, t, n, r)),
          i === null && df(e, t, r, mc, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else df(e, t, r, null, n);
  }
}
var mc = null;
function yd(e, t, n, r) {
  if (((mc = null), (e = om(r)), (e = Ao(e)), e !== null))
    if (((t = si(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $y(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (mc = e), null;
}
function Ay(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (ox()) {
        case im:
          return 1;
        case Ty:
          return 4;
        case fc:
        case ix:
          return 16;
        case _y:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var io = null,
  cm = null,
  Fs = null;
function zy() {
  if (Fs) return Fs;
  var e,
    t = cm,
    n = t.length,
    r,
    o = 'value' in io ? io.value : io.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Fs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function As(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function as() {
  return !0;
}
function Xp() {
  return !1;
}
function In(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? as
        : Xp),
      (this.isPropagationStopped = Xp),
      this
    );
  }
  return (
    lt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = as));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = as));
      },
      persist: function () {},
      isPersistent: as,
    }),
    t
  );
}
var ga = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  um = In(ga),
  Ll = lt({}, ga, { view: 0, detail: 0 }),
  yx = In(Ll),
  nf,
  rf,
  Ma,
  Qc = lt({}, Ll, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: fm,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Ma &&
            (Ma && e.type === 'mousemove'
              ? ((nf = e.screenX - Ma.screenX), (rf = e.screenY - Ma.screenY))
              : (rf = nf = 0),
            (Ma = e)),
          nf);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : rf;
    },
  }),
  Qp = In(Qc),
  bx = lt({}, Qc, { dataTransfer: 0 }),
  Cx = In(bx),
  Sx = lt({}, Ll, { relatedTarget: 0 }),
  of = In(Sx),
  wx = lt({}, ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xx = In(wx),
  Ex = lt({}, ga, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  $x = In(Ex),
  Ox = lt({}, ga, { data: 0 }),
  Yp = In(Ox),
  Px = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Rx = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Tx = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function _x(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tx[e]) ? !!t[e] : !1;
}
function fm() {
  return _x;
}
var Mx = lt({}, Ll, {
    key: function (e) {
      if (e.key) {
        var t = Px[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = As(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Rx[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fm,
    charCode: function (e) {
      return e.type === 'keypress' ? As(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? As(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  Ix = In(Mx),
  kx = lt({}, Qc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Zp = In(kx),
  Nx = lt({}, Ll, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fm,
  }),
  jx = In(Nx),
  Lx = lt({}, ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fx = In(Lx),
  Ax = lt({}, Qc, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zx = In(Ax),
  Dx = [9, 13, 27, 32],
  dm = Lr && 'CompositionEvent' in window,
  Qa = null;
Lr && 'documentMode' in document && (Qa = document.documentMode);
var Bx = Lr && 'TextEvent' in window && !Qa,
  Dy = Lr && (!dm || (Qa && 8 < Qa && 11 >= Qa)),
  Jp = ' ',
  eg = !1;
function By(e, t) {
  switch (e) {
    case 'keyup':
      return Dx.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Hy(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ji = !1;
function Hx(e, t) {
  switch (e) {
    case 'compositionend':
      return Hy(t);
    case 'keypress':
      return t.which !== 32 ? null : ((eg = !0), Jp);
    case 'textInput':
      return (e = t.data), e === Jp && eg ? null : e;
    default:
      return null;
  }
}
function Vx(e, t) {
  if (ji)
    return e === 'compositionend' || (!dm && By(e, t))
      ? ((e = zy()), (Fs = cm = io = null), (ji = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Dy && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Wx = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function tg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Wx[e.type] : t === 'textarea';
}
function Vy(e, t, n, r) {
  Cy(r),
    (t = pc(t, 'onChange')),
    0 < t.length &&
      ((n = new um('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ya = null,
  pl = null;
function Ux(e) {
  e1(e, 0);
}
function Yc(e) {
  var t = Ai(e);
  if (vy(t)) return e;
}
function Kx(e, t) {
  if (e === 'change') return t;
}
var Wy = !1;
if (Lr) {
  var af;
  if (Lr) {
    var lf = 'oninput' in document;
    if (!lf) {
      var ng = document.createElement('div');
      ng.setAttribute('oninput', 'return;'),
        (lf = typeof ng.oninput == 'function');
    }
    af = lf;
  } else af = !1;
  Wy = af && (!document.documentMode || 9 < document.documentMode);
}
function rg() {
  Ya && (Ya.detachEvent('onpropertychange', Uy), (pl = Ya = null));
}
function Uy(e) {
  if (e.propertyName === 'value' && Yc(pl)) {
    var t = [];
    Vy(t, pl, e, om(e)), Ey(Ux, t);
  }
}
function Gx(e, t, n) {
  e === 'focusin'
    ? (rg(), (Ya = t), (pl = n), Ya.attachEvent('onpropertychange', Uy))
    : e === 'focusout' && rg();
}
function qx(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Yc(pl);
}
function Xx(e, t) {
  if (e === 'click') return Yc(t);
}
function Qx(e, t) {
  if (e === 'input' || e === 'change') return Yc(t);
}
function Yx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sr = typeof Object.is == 'function' ? Object.is : Yx;
function gl(e, t) {
  if (sr(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ed.call(t, o) || !sr(e[o], t[o])) return !1;
  }
  return !0;
}
function og(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ig(e, t) {
  var n = og(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = og(n);
  }
}
function Ky(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ky(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Gy() {
  for (var e = window, t = sc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = sc(e.document);
  }
  return t;
}
function vm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Zx(e) {
  var t = Gy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ky(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && vm(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = ig(n, i));
        var a = ig(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Jx = Lr && 'documentMode' in document && 11 >= document.documentMode,
  Li = null,
  bd = null,
  Za = null,
  Cd = !1;
function ag(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Cd ||
    Li == null ||
    Li !== sc(r) ||
    ((r = Li),
    'selectionStart' in r && vm(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Za && gl(Za, r)) ||
      ((Za = r),
      (r = pc(bd, 'onSelect')),
      0 < r.length &&
        ((t = new um('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Li))));
}
function ls(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Fi = {
    animationend: ls('Animation', 'AnimationEnd'),
    animationiteration: ls('Animation', 'AnimationIteration'),
    animationstart: ls('Animation', 'AnimationStart'),
    transitionend: ls('Transition', 'TransitionEnd'),
  },
  sf = {},
  qy = {};
Lr &&
  ((qy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Fi.animationend.animation,
    delete Fi.animationiteration.animation,
    delete Fi.animationstart.animation),
  'TransitionEvent' in window || delete Fi.transitionend.transition);
function Zc(e) {
  if (sf[e]) return sf[e];
  if (!Fi[e]) return e;
  var t = Fi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in qy) return (sf[e] = t[n]);
  return e;
}
var Xy = Zc('animationend'),
  Qy = Zc('animationiteration'),
  Yy = Zc('animationstart'),
  Zy = Zc('transitionend'),
  Jy = new Map(),
  lg =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function xo(e, t) {
  Jy.set(e, t), li(t, [e]);
}
for (var cf = 0; cf < lg.length; cf++) {
  var uf = lg[cf],
    e2 = uf.toLowerCase(),
    t2 = uf[0].toUpperCase() + uf.slice(1);
  xo(e2, 'on' + t2);
}
xo(Xy, 'onAnimationEnd');
xo(Qy, 'onAnimationIteration');
xo(Yy, 'onAnimationStart');
xo('dblclick', 'onDoubleClick');
xo('focusin', 'onFocus');
xo('focusout', 'onBlur');
xo(Zy, 'onTransitionEnd');
na('onMouseEnter', ['mouseout', 'mouseover']);
na('onMouseLeave', ['mouseout', 'mouseover']);
na('onPointerEnter', ['pointerout', 'pointerover']);
na('onPointerLeave', ['pointerout', 'pointerover']);
li(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
li(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
li('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
li(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
li(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
li(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Ua =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  n2 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ua));
function sg(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), ex(r, t, void 0, e), (e.currentTarget = null);
}
function e1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
          sg(o, l, c), (i = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          sg(o, l, c), (i = s);
        }
    }
  }
  if (uc) throw ((e = pd), (uc = !1), (pd = null), e);
}
function Ze(e, t) {
  var n = t[$d];
  n === void 0 && (n = t[$d] = new Set());
  var r = e + '__bubble';
  n.has(r) || (t1(t, e, 2, !1), n.add(r));
}
function ff(e, t, n) {
  var r = 0;
  t && (r |= 4), t1(n, e, r, t);
}
var ss = '_reactListening' + Math.random().toString(36).slice(2);
function hl(e) {
  if (!e[ss]) {
    (e[ss] = !0),
      sy.forEach(function (n) {
        n !== 'selectionchange' && (n2.has(n) || ff(n, !1, e), ff(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ss] || ((t[ss] = !0), ff('selectionchange', !1, t));
  }
}
function t1(e, t, n, r) {
  switch (Ay(t)) {
    case 1:
      var o = gx;
      break;
    case 4:
      o = hx;
      break;
    default:
      o = sm;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !md ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function df(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = Ao(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Ey(function () {
    var c = i,
      f = om(n),
      d = [];
    e: {
      var v = Jy.get(e);
      if (v !== void 0) {
        var h = um,
          b = e;
        switch (e) {
          case 'keypress':
            if (As(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            h = Ix;
            break;
          case 'focusin':
            (b = 'focus'), (h = of);
            break;
          case 'focusout':
            (b = 'blur'), (h = of);
            break;
          case 'beforeblur':
          case 'afterblur':
            h = of;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            h = Qp;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            h = Cx;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            h = jx;
            break;
          case Xy:
          case Qy:
          case Yy:
            h = xx;
            break;
          case Zy:
            h = Fx;
            break;
          case 'scroll':
            h = yx;
            break;
          case 'wheel':
            h = zx;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            h = $x;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            h = Zp;
        }
        var y = (t & 4) !== 0,
          S = !y && e === 'scroll',
          p = y ? (v !== null ? v + 'Capture' : null) : v;
        y = [];
        for (var m = c, g; m !== null; ) {
          g = m;
          var C = g.stateNode;
          if (
            (g.tag === 5 &&
              C !== null &&
              ((g = C),
              p !== null && ((C = fl(m, p)), C != null && y.push(yl(m, C, g)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < y.length &&
          ((v = new h(v, b, null, n, f)), d.push({ event: v, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === 'mouseover' || e === 'pointerover'),
          (h = e === 'mouseout' || e === 'pointerout'),
          v &&
            n !== dd &&
            (b = n.relatedTarget || n.fromElement) &&
            (Ao(b) || b[Fr]))
        )
          break e;
        if (
          (h || v) &&
          ((v =
            f.window === f
              ? f
              : (v = f.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
          h
            ? ((b = n.relatedTarget || n.toElement),
              (h = c),
              (b = b ? Ao(b) : null),
              b !== null &&
                ((S = si(b)), b !== S || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((h = null), (b = c)),
          h !== b)
        ) {
          if (
            ((y = Qp),
            (C = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Zp),
              (C = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (m = 'pointer')),
            (S = h == null ? v : Ai(h)),
            (g = b == null ? v : Ai(b)),
            (v = new y(C, m + 'leave', h, n, f)),
            (v.target = S),
            (v.relatedTarget = g),
            (C = null),
            Ao(f) === c &&
              ((y = new y(p, m + 'enter', b, n, f)),
              (y.target = g),
              (y.relatedTarget = S),
              (C = y)),
            (S = C),
            h && b)
          )
            t: {
              for (y = h, p = b, m = 0, g = y; g; g = Ci(g)) m++;
              for (g = 0, C = p; C; C = Ci(C)) g++;
              for (; 0 < m - g; ) (y = Ci(y)), m--;
              for (; 0 < g - m; ) (p = Ci(p)), g--;
              for (; m--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = Ci(y)), (p = Ci(p));
              }
              y = null;
            }
          else y = null;
          h !== null && cg(d, v, h, y, !1),
            b !== null && S !== null && cg(d, S, b, y, !0);
        }
      }
      e: {
        if (
          ((v = c ? Ai(c) : window),
          (h = v.nodeName && v.nodeName.toLowerCase()),
          h === 'select' || (h === 'input' && v.type === 'file'))
        )
          var E = Kx;
        else if (tg(v))
          if (Wy) E = Qx;
          else {
            E = qx;
            var w = Gx;
          }
        else
          (h = v.nodeName) &&
            h.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (E = Xx);
        if (E && (E = E(e, c))) {
          Vy(d, E, n, f);
          break e;
        }
        w && w(e, v, c),
          e === 'focusout' &&
            (w = v._wrapperState) &&
            w.controlled &&
            v.type === 'number' &&
            ld(v, 'number', v.value);
      }
      switch (((w = c ? Ai(c) : window), e)) {
        case 'focusin':
          (tg(w) || w.contentEditable === 'true') &&
            ((Li = w), (bd = c), (Za = null));
          break;
        case 'focusout':
          Za = bd = Li = null;
          break;
        case 'mousedown':
          Cd = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Cd = !1), ag(d, n, f);
          break;
        case 'selectionchange':
          if (Jx) break;
        case 'keydown':
        case 'keyup':
          ag(d, n, f);
      }
      var x;
      if (dm)
        e: {
          switch (e) {
            case 'compositionstart':
              var O = 'onCompositionStart';
              break e;
            case 'compositionend':
              O = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              O = 'onCompositionUpdate';
              break e;
          }
          O = void 0;
        }
      else
        ji
          ? By(e, n) && (O = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
      O &&
        (Dy &&
          n.locale !== 'ko' &&
          (ji || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && ji && (x = zy())
            : ((io = f),
              (cm = 'value' in io ? io.value : io.textContent),
              (ji = !0))),
        (w = pc(c, O)),
        0 < w.length &&
          ((O = new Yp(O, e, null, n, f)),
          d.push({ event: O, listeners: w }),
          x ? (O.data = x) : ((x = Hy(n)), x !== null && (O.data = x)))),
        (x = Bx ? Hx(e, n) : Vx(e, n)) &&
          ((c = pc(c, 'onBeforeInput')),
          0 < c.length &&
            ((f = new Yp('onBeforeInput', 'beforeinput', null, n, f)),
            d.push({ event: f, listeners: c }),
            (f.data = x)));
    }
    e1(d, t);
  });
}
function yl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pc(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = fl(e, n)),
      i != null && r.unshift(yl(e, i, o)),
      (i = fl(e, t)),
      i != null && r.push(yl(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Ci(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cg(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      c = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      o
        ? ((s = fl(n, i)), s != null && a.unshift(yl(n, s, l)))
        : o || ((s = fl(n, i)), s != null && a.push(yl(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var r2 = /\r\n?/g,
  o2 = /\u0000|\uFFFD/g;
function ug(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      r2,
      `
`
    )
    .replace(o2, '');
}
function cs(e, t, n) {
  if (((t = ug(t)), ug(e) !== t && n)) throw Error(X(425));
}
function gc() {}
var Sd = null,
  wd = null;
function xd(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ed = typeof setTimeout == 'function' ? setTimeout : void 0,
  i2 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  fg = typeof Promise == 'function' ? Promise : void 0,
  a2 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof fg < 'u'
        ? function (e) {
            return fg.resolve(null).then(e).catch(l2);
          }
        : Ed;
function l2(e) {
  setTimeout(function () {
    throw e;
  });
}
function vf(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), ml(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  ml(t);
}
function po(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function dg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ha = Math.random().toString(36).slice(2),
  vr = '__reactFiber$' + ha,
  bl = '__reactProps$' + ha,
  Fr = '__reactContainer$' + ha,
  $d = '__reactEvents$' + ha,
  s2 = '__reactListeners$' + ha,
  c2 = '__reactHandles$' + ha;
function Ao(e) {
  var t = e[vr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Fr] || n[vr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = dg(e); e !== null; ) {
          if ((n = e[vr])) return n;
          e = dg(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Fl(e) {
  return (
    (e = e[vr] || e[Fr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ai(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(X(33));
}
function Jc(e) {
  return e[bl] || null;
}
var Od = [],
  zi = -1;
function Eo(e) {
  return { current: e };
}
function Je(e) {
  0 > zi || ((e.current = Od[zi]), (Od[zi] = null), zi--);
}
function Ye(e, t) {
  zi++, (Od[zi] = e.current), (e.current = t);
}
var wo = {},
  Jt = Eo(wo),
  mn = Eo(!1),
  Yo = wo;
function ra(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function pn(e) {
  return (e = e.childContextTypes), e != null;
}
function hc() {
  Je(mn), Je(Jt);
}
function vg(e, t, n) {
  if (Jt.current !== wo) throw Error(X(168));
  Ye(Jt, t), Ye(mn, n);
}
function n1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(X(108, Gw(e) || 'Unknown', o));
  return lt({}, n, r);
}
function yc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wo),
    (Yo = Jt.current),
    Ye(Jt, e),
    Ye(mn, mn.current),
    !0
  );
}
function mg(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(X(169));
  n
    ? ((e = n1(e, t, Yo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Je(mn),
      Je(Jt),
      Ye(Jt, e))
    : Je(mn),
    Ye(mn, n);
}
var Tr = null,
  eu = !1,
  mf = !1;
function r1(e) {
  Tr === null ? (Tr = [e]) : Tr.push(e);
}
function u2(e) {
  (eu = !0), r1(e);
}
function $o() {
  if (!mf && Tr !== null) {
    mf = !0;
    var e = 0,
      t = He;
    try {
      var n = Tr;
      for (He = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Tr = null), (eu = !1);
    } catch (o) {
      throw (Tr !== null && (Tr = Tr.slice(e + 1)), Ry(im, $o), o);
    } finally {
      (He = t), (mf = !1);
    }
  }
  return null;
}
var Di = [],
  Bi = 0,
  bc = null,
  Cc = 0,
  Fn = [],
  An = 0,
  Zo = null,
  Mr = 1,
  Ir = '';
function ko(e, t) {
  (Di[Bi++] = Cc), (Di[Bi++] = bc), (bc = e), (Cc = t);
}
function o1(e, t, n) {
  (Fn[An++] = Mr), (Fn[An++] = Ir), (Fn[An++] = Zo), (Zo = e);
  var r = Mr;
  e = Ir;
  var o = 32 - or(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - or(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Mr = (1 << (32 - or(t) + o)) | (n << o) | r),
      (Ir = i + e);
  } else (Mr = (1 << i) | (n << o) | r), (Ir = e);
}
function mm(e) {
  e.return !== null && (ko(e, 1), o1(e, 1, 0));
}
function pm(e) {
  for (; e === bc; )
    (bc = Di[--Bi]), (Di[Bi] = null), (Cc = Di[--Bi]), (Di[Bi] = null);
  for (; e === Zo; )
    (Zo = Fn[--An]),
      (Fn[An] = null),
      (Ir = Fn[--An]),
      (Fn[An] = null),
      (Mr = Fn[--An]),
      (Fn[An] = null);
}
var Tn = null,
  On = null,
  rt = !1,
  nr = null;
function i1(e, t) {
  var n = zn(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function pg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Tn = e), (On = po(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Tn = e), (On = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zo !== null ? { id: Mr, overflow: Ir } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = zn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Tn = e),
            (On = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Pd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Rd(e) {
  if (rt) {
    var t = On;
    if (t) {
      var n = t;
      if (!pg(e, t)) {
        if (Pd(e)) throw Error(X(418));
        t = po(n.nextSibling);
        var r = Tn;
        t && pg(e, t)
          ? i1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (rt = !1), (Tn = e));
      }
    } else {
      if (Pd(e)) throw Error(X(418));
      (e.flags = (e.flags & -4097) | 2), (rt = !1), (Tn = e);
    }
  }
}
function gg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Tn = e;
}
function us(e) {
  if (e !== Tn) return !1;
  if (!rt) return gg(e), (rt = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !xd(e.type, e.memoizedProps))),
    t && (t = On))
  ) {
    if (Pd(e)) throw (a1(), Error(X(418)));
    for (; t; ) i1(e, t), (t = po(t.nextSibling));
  }
  if ((gg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(X(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              On = po(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      On = null;
    }
  } else On = Tn ? po(e.stateNode.nextSibling) : null;
  return !0;
}
function a1() {
  for (var e = On; e; ) e = po(e.nextSibling);
}
function oa() {
  (On = Tn = null), (rt = !1);
}
function gm(e) {
  nr === null ? (nr = [e]) : nr.push(e);
}
var f2 = Vr.ReactCurrentBatchConfig;
function Zn(e, t) {
  if (e && e.defaultProps) {
    (t = lt({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Sc = Eo(null),
  wc = null,
  Hi = null,
  hm = null;
function ym() {
  hm = Hi = wc = null;
}
function bm(e) {
  var t = Sc.current;
  Je(Sc), (e._currentValue = t);
}
function Td(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zi(e, t) {
  (wc = e),
    (hm = Hi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (vn = !0), (e.firstContext = null));
}
function Hn(e) {
  var t = e._currentValue;
  if (hm !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hi === null)) {
      if (wc === null) throw Error(X(308));
      (Hi = e), (wc.dependencies = { lanes: 0, firstContext: e });
    } else Hi = Hi.next = e;
  return t;
}
var zo = null;
function Cm(e) {
  zo === null ? (zo = [e]) : zo.push(e);
}
function l1(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Cm(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ar(e, r)
  );
}
function Ar(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var no = !1;
function Sm(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function s1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function kr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function go(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), je & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ar(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Cm(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ar(e, n)
  );
}
function zs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), am(e, n);
  }
}
function hg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function xc(e, t, n, r) {
  var o = e.updateQueue;
  no = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      c = s.next;
    (s.next = null), a === null ? (i = c) : (a.next = c), (a = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== a &&
        (l === null ? (f.firstBaseUpdate = c) : (l.next = c),
        (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (f = c = s = null), (l = i);
    do {
      var v = l.lane,
        h = l.eventTime;
      if ((r & v) === v) {
        f !== null &&
          (f = f.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var b = e,
            y = l;
          switch (((v = t), (h = n), y.tag)) {
            case 1:
              if (((b = y.payload), typeof b == 'function')) {
                d = b.call(h, d, v);
                break e;
              }
              d = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = y.payload),
                (v = typeof b == 'function' ? b.call(h, d, v) : b),
                v == null)
              )
                break e;
              d = lt({}, d, v);
              break e;
            case 2:
              no = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (v = o.effects),
          v === null ? (o.effects = [l]) : v.push(l));
      } else
        (h = {
          eventTime: h,
          lane: v,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((c = f = h), (s = d)) : (f = f.next = h),
          (a |= v);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (v = l),
          (l = v.next),
          (v.next = null),
          (o.lastBaseUpdate = v),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (s = d),
      (o.baseState = s),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (ei |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function yg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(X(191, o));
        o.call(r);
      }
    }
}
var c1 = new ly.Component().refs;
function _d(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : lt({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var tu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? si(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = rn(),
      o = yo(e),
      i = kr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = go(e, i, o)),
      t !== null && (ir(t, e, o, r), zs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = rn(),
      o = yo(e),
      i = kr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = go(e, i, o)),
      t !== null && (ir(t, e, o, r), zs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = rn(),
      r = yo(e),
      o = kr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = go(e, o, r)),
      t !== null && (ir(t, e, r, n), zs(t, e, r));
  },
};
function bg(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !gl(n, r) || !gl(o, i)
        : !0
  );
}
function u1(e, t, n) {
  var r = !1,
    o = wo,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = Hn(i))
      : ((o = pn(t) ? Yo : Jt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ra(e, o) : wo)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = tu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Cg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && tu.enqueueReplaceState(t, t.state, null);
}
function Md(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = c1), Sm(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = Hn(i))
    : ((i = pn(t) ? Yo : Jt.current), (o.context = ra(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (_d(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && tu.enqueueReplaceState(o, o.state, null),
      xc(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Ia(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(X(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(X(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            l === c1 && (l = o.refs = {}),
              a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(X(284));
    if (!n._owner) throw Error(X(290, e));
  }
  return e;
}
function fs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      X(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Sg(e) {
  var t = e._init;
  return t(e._payload);
}
function f1(e) {
  function t(p, m) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [m]), (p.flags |= 16)) : g.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function o(p, m) {
    return (p = bo(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, m, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < m ? ((p.flags |= 2), m) : g)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function a(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, m, g, C) {
    return m === null || m.tag !== 6
      ? ((m = Sf(g, p.mode, C)), (m.return = p), m)
      : ((m = o(m, g)), (m.return = p), m);
  }
  function s(p, m, g, C) {
    var E = g.type;
    return E === Ni
      ? f(p, m, g.props.children, C, g.key)
      : m !== null &&
          (m.elementType === E ||
            (typeof E == 'object' &&
              E !== null &&
              E.$$typeof === to &&
              Sg(E) === m.type))
        ? ((C = o(m, g.props)), (C.ref = Ia(p, m, g)), (C.return = p), C)
        : ((C = Us(g.type, g.key, g.props, null, p.mode, C)),
          (C.ref = Ia(p, m, g)),
          (C.return = p),
          C);
  }
  function c(p, m, g, C) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== g.containerInfo ||
      m.stateNode.implementation !== g.implementation
      ? ((m = wf(g, p.mode, C)), (m.return = p), m)
      : ((m = o(m, g.children || [])), (m.return = p), m);
  }
  function f(p, m, g, C, E) {
    return m === null || m.tag !== 7
      ? ((m = Ko(g, p.mode, C, E)), (m.return = p), m)
      : ((m = o(m, g)), (m.return = p), m);
  }
  function d(p, m, g) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = Sf('' + m, p.mode, g)), (m.return = p), m;
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case es:
          return (
            (g = Us(m.type, m.key, m.props, null, p.mode, g)),
            (g.ref = Ia(p, null, m)),
            (g.return = p),
            g
          );
        case ki:
          return (m = wf(m, p.mode, g)), (m.return = p), m;
        case to:
          var C = m._init;
          return d(p, C(m._payload), g);
      }
      if (Va(m) || Pa(m))
        return (m = Ko(m, p.mode, g, null)), (m.return = p), m;
      fs(p, m);
    }
    return null;
  }
  function v(p, m, g, C) {
    var E = m !== null ? m.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return E !== null ? null : l(p, m, '' + g, C);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case es:
          return g.key === E ? s(p, m, g, C) : null;
        case ki:
          return g.key === E ? c(p, m, g, C) : null;
        case to:
          return (E = g._init), v(p, m, E(g._payload), C);
      }
      if (Va(g) || Pa(g)) return E !== null ? null : f(p, m, g, C, null);
      fs(p, g);
    }
    return null;
  }
  function h(p, m, g, C, E) {
    if ((typeof C == 'string' && C !== '') || typeof C == 'number')
      return (p = p.get(g) || null), l(m, p, '' + C, E);
    if (typeof C == 'object' && C !== null) {
      switch (C.$$typeof) {
        case es:
          return (p = p.get(C.key === null ? g : C.key) || null), s(m, p, C, E);
        case ki:
          return (p = p.get(C.key === null ? g : C.key) || null), c(m, p, C, E);
        case to:
          var w = C._init;
          return h(p, m, g, w(C._payload), E);
      }
      if (Va(C) || Pa(C)) return (p = p.get(g) || null), f(m, p, C, E, null);
      fs(m, C);
    }
    return null;
  }
  function b(p, m, g, C) {
    for (
      var E = null, w = null, x = m, O = (m = 0), P = null;
      x !== null && O < g.length;
      O++
    ) {
      x.index > O ? ((P = x), (x = null)) : (P = x.sibling);
      var _ = v(p, x, g[O], C);
      if (_ === null) {
        x === null && (x = P);
        break;
      }
      e && x && _.alternate === null && t(p, x),
        (m = i(_, m, O)),
        w === null ? (E = _) : (w.sibling = _),
        (w = _),
        (x = P);
    }
    if (O === g.length) return n(p, x), rt && ko(p, O), E;
    if (x === null) {
      for (; O < g.length; O++)
        (x = d(p, g[O], C)),
          x !== null &&
            ((m = i(x, m, O)), w === null ? (E = x) : (w.sibling = x), (w = x));
      return rt && ko(p, O), E;
    }
    for (x = r(p, x); O < g.length; O++)
      (P = h(x, p, O, g[O], C)),
        P !== null &&
          (e && P.alternate !== null && x.delete(P.key === null ? O : P.key),
          (m = i(P, m, O)),
          w === null ? (E = P) : (w.sibling = P),
          (w = P));
    return (
      e &&
        x.forEach(function (M) {
          return t(p, M);
        }),
      rt && ko(p, O),
      E
    );
  }
  function y(p, m, g, C) {
    var E = Pa(g);
    if (typeof E != 'function') throw Error(X(150));
    if (((g = E.call(g)), g == null)) throw Error(X(151));
    for (
      var w = (E = null), x = m, O = (m = 0), P = null, _ = g.next();
      x !== null && !_.done;
      O++, _ = g.next()
    ) {
      x.index > O ? ((P = x), (x = null)) : (P = x.sibling);
      var M = v(p, x, _.value, C);
      if (M === null) {
        x === null && (x = P);
        break;
      }
      e && x && M.alternate === null && t(p, x),
        (m = i(M, m, O)),
        w === null ? (E = M) : (w.sibling = M),
        (w = M),
        (x = P);
    }
    if (_.done) return n(p, x), rt && ko(p, O), E;
    if (x === null) {
      for (; !_.done; O++, _ = g.next())
        (_ = d(p, _.value, C)),
          _ !== null &&
            ((m = i(_, m, O)), w === null ? (E = _) : (w.sibling = _), (w = _));
      return rt && ko(p, O), E;
    }
    for (x = r(p, x); !_.done; O++, _ = g.next())
      (_ = h(x, p, O, _.value, C)),
        _ !== null &&
          (e && _.alternate !== null && x.delete(_.key === null ? O : _.key),
          (m = i(_, m, O)),
          w === null ? (E = _) : (w.sibling = _),
          (w = _));
    return (
      e &&
        x.forEach(function (L) {
          return t(p, L);
        }),
      rt && ko(p, O),
      E
    );
  }
  function S(p, m, g, C) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === Ni &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case es:
          e: {
            for (var E = g.key, w = m; w !== null; ) {
              if (w.key === E) {
                if (((E = g.type), E === Ni)) {
                  if (w.tag === 7) {
                    n(p, w.sibling),
                      (m = o(w, g.props.children)),
                      (m.return = p),
                      (p = m);
                    break e;
                  }
                } else if (
                  w.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === to &&
                    Sg(E) === w.type)
                ) {
                  n(p, w.sibling),
                    (m = o(w, g.props)),
                    (m.ref = Ia(p, w, g)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                n(p, w);
                break;
              } else t(p, w);
              w = w.sibling;
            }
            g.type === Ni
              ? ((m = Ko(g.props.children, p.mode, C, g.key)),
                (m.return = p),
                (p = m))
              : ((C = Us(g.type, g.key, g.props, null, p.mode, C)),
                (C.ref = Ia(p, m, g)),
                (C.return = p),
                (p = C));
          }
          return a(p);
        case ki:
          e: {
            for (w = g.key; m !== null; ) {
              if (m.key === w)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === g.containerInfo &&
                  m.stateNode.implementation === g.implementation
                ) {
                  n(p, m.sibling),
                    (m = o(m, g.children || [])),
                    (m.return = p),
                    (p = m);
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = wf(g, p.mode, C)), (m.return = p), (p = m);
          }
          return a(p);
        case to:
          return (w = g._init), S(p, m, w(g._payload), C);
      }
      if (Va(g)) return b(p, m, g, C);
      if (Pa(g)) return y(p, m, g, C);
      fs(p, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = o(m, g)), (m.return = p), (p = m))
          : (n(p, m), (m = Sf(g, p.mode, C)), (m.return = p), (p = m)),
        a(p))
      : n(p, m);
  }
  return S;
}
var ia = f1(!0),
  d1 = f1(!1),
  Al = {},
  yr = Eo(Al),
  Cl = Eo(Al),
  Sl = Eo(Al);
function Do(e) {
  if (e === Al) throw Error(X(174));
  return e;
}
function wm(e, t) {
  switch ((Ye(Sl, t), Ye(Cl, e), Ye(yr, Al), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cd(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cd(t, e));
  }
  Je(yr), Ye(yr, t);
}
function aa() {
  Je(yr), Je(Cl), Je(Sl);
}
function v1(e) {
  Do(Sl.current);
  var t = Do(yr.current),
    n = cd(t, e.type);
  t !== n && (Ye(Cl, e), Ye(yr, n));
}
function xm(e) {
  Cl.current === e && (Je(yr), Je(Cl));
}
var it = Eo(0);
function Ec(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var pf = [];
function Em() {
  for (var e = 0; e < pf.length; e++)
    pf[e]._workInProgressVersionPrimary = null;
  pf.length = 0;
}
var Ds = Vr.ReactCurrentDispatcher,
  gf = Vr.ReactCurrentBatchConfig,
  Jo = 0,
  at = null,
  Rt = null,
  Nt = null,
  $c = !1,
  Ja = !1,
  wl = 0,
  d2 = 0;
function qt() {
  throw Error(X(321));
}
function $m(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!sr(e[n], t[n])) return !1;
  return !0;
}
function Om(e, t, n, r, o, i) {
  if (
    ((Jo = i),
    (at = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ds.current = e === null || e.memoizedState === null ? g2 : h2),
    (e = n(r, o)),
    Ja)
  ) {
    i = 0;
    do {
      if (((Ja = !1), (wl = 0), 25 <= i)) throw Error(X(301));
      (i += 1),
        (Nt = Rt = null),
        (t.updateQueue = null),
        (Ds.current = y2),
        (e = n(r, o));
    } while (Ja);
  }
  if (
    ((Ds.current = Oc),
    (t = Rt !== null && Rt.next !== null),
    (Jo = 0),
    (Nt = Rt = at = null),
    ($c = !1),
    t)
  )
    throw Error(X(300));
  return e;
}
function Pm() {
  var e = wl !== 0;
  return (wl = 0), e;
}
function dr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Nt === null ? (at.memoizedState = Nt = e) : (Nt = Nt.next = e), Nt;
}
function Vn() {
  if (Rt === null) {
    var e = at.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Rt.next;
  var t = Nt === null ? at.memoizedState : Nt.next;
  if (t !== null) (Nt = t), (Rt = e);
  else {
    if (e === null) throw Error(X(310));
    (Rt = e),
      (e = {
        memoizedState: Rt.memoizedState,
        baseState: Rt.baseState,
        baseQueue: Rt.baseQueue,
        queue: Rt.queue,
        next: null,
      }),
      Nt === null ? (at.memoizedState = Nt = e) : (Nt = Nt.next = e);
  }
  return Nt;
}
function xl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function hf(e) {
  var t = Vn(),
    n = t.queue;
  if (n === null) throw Error(X(311));
  n.lastRenderedReducer = e;
  var r = Rt,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      c = i;
    do {
      var f = c.lane;
      if ((Jo & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((l = s = d), (a = r)) : (s = s.next = d),
          (at.lanes |= f),
          (ei |= f);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (a = r) : (s.next = l),
      sr(r, t.memoizedState) || (vn = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (at.lanes |= i), (ei |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function yf(e) {
  var t = Vn(),
    n = t.queue;
  if (n === null) throw Error(X(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    sr(i, t.memoizedState) || (vn = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function m1() {}
function p1(e, t) {
  var n = at,
    r = Vn(),
    o = t(),
    i = !sr(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (vn = !0)),
    (r = r.queue),
    Rm(y1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Nt !== null && Nt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      El(9, h1.bind(null, n, r, o, t), void 0, null),
      jt === null)
    )
      throw Error(X(349));
    Jo & 30 || g1(n, t, o);
  }
  return o;
}
function g1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = at.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (at.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function h1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), b1(t) && C1(e);
}
function y1(e, t, n) {
  return n(function () {
    b1(t) && C1(e);
  });
}
function b1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !sr(e, n);
  } catch {
    return !0;
  }
}
function C1(e) {
  var t = Ar(e, 1);
  t !== null && ir(t, e, 1, -1);
}
function wg(e) {
  var t = dr();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = p2.bind(null, at, e)),
    [t.memoizedState, e]
  );
}
function El(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = at.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (at.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function S1() {
  return Vn().memoizedState;
}
function Bs(e, t, n, r) {
  var o = dr();
  (at.flags |= e),
    (o.memoizedState = El(1 | t, n, void 0, r === void 0 ? null : r));
}
function nu(e, t, n, r) {
  var o = Vn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Rt !== null) {
    var a = Rt.memoizedState;
    if (((i = a.destroy), r !== null && $m(r, a.deps))) {
      o.memoizedState = El(t, n, i, r);
      return;
    }
  }
  (at.flags |= e), (o.memoizedState = El(1 | t, n, i, r));
}
function xg(e, t) {
  return Bs(8390656, 8, e, t);
}
function Rm(e, t) {
  return nu(2048, 8, e, t);
}
function w1(e, t) {
  return nu(4, 2, e, t);
}
function x1(e, t) {
  return nu(4, 4, e, t);
}
function E1(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function $1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), nu(4, 4, E1.bind(null, t, e), n)
  );
}
function Tm() {}
function O1(e, t) {
  var n = Vn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $m(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function P1(e, t) {
  var n = Vn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $m(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function R1(e, t, n) {
  return Jo & 21
    ? (sr(n, t) || ((n = My()), (at.lanes |= n), (ei |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (vn = !0)), (e.memoizedState = n));
}
function v2(e, t) {
  var n = He;
  (He = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = gf.transition;
  gf.transition = {};
  try {
    e(!1), t();
  } finally {
    (He = n), (gf.transition = r);
  }
}
function T1() {
  return Vn().memoizedState;
}
function m2(e, t, n) {
  var r = yo(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _1(e))
  )
    M1(t, n);
  else if (((n = l1(e, t, n, r)), n !== null)) {
    var o = rn();
    ir(n, e, r, o), I1(n, t, r);
  }
}
function p2(e, t, n) {
  var r = yo(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_1(e)) M1(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), sr(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Cm(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = l1(e, t, o, r)),
      n !== null && ((o = rn()), ir(n, e, r, o), I1(n, t, r));
  }
}
function _1(e) {
  var t = e.alternate;
  return e === at || (t !== null && t === at);
}
function M1(e, t) {
  Ja = $c = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function I1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), am(e, n);
  }
}
var Oc = {
    readContext: Hn,
    useCallback: qt,
    useContext: qt,
    useEffect: qt,
    useImperativeHandle: qt,
    useInsertionEffect: qt,
    useLayoutEffect: qt,
    useMemo: qt,
    useReducer: qt,
    useRef: qt,
    useState: qt,
    useDebugValue: qt,
    useDeferredValue: qt,
    useTransition: qt,
    useMutableSource: qt,
    useSyncExternalStore: qt,
    useId: qt,
    unstable_isNewReconciler: !1,
  },
  g2 = {
    readContext: Hn,
    useCallback: function (e, t) {
      return (dr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Hn,
    useEffect: xg,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Bs(4194308, 4, E1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Bs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dr();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = m2.bind(null, at, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wg,
    useDebugValue: Tm,
    useDeferredValue: function (e) {
      return (dr().memoizedState = e);
    },
    useTransition: function () {
      var e = wg(!1),
        t = e[0];
      return (e = v2.bind(null, e[1])), (dr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = at,
        o = dr();
      if (rt) {
        if (n === void 0) throw Error(X(407));
        n = n();
      } else {
        if (((n = t()), jt === null)) throw Error(X(349));
        Jo & 30 || g1(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        xg(y1.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        El(9, h1.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dr(),
        t = jt.identifierPrefix;
      if (rt) {
        var n = Ir,
          r = Mr;
        (n = (r & ~(1 << (32 - or(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = wl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = d2++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  h2 = {
    readContext: Hn,
    useCallback: O1,
    useContext: Hn,
    useEffect: Rm,
    useImperativeHandle: $1,
    useInsertionEffect: w1,
    useLayoutEffect: x1,
    useMemo: P1,
    useReducer: hf,
    useRef: S1,
    useState: function () {
      return hf(xl);
    },
    useDebugValue: Tm,
    useDeferredValue: function (e) {
      var t = Vn();
      return R1(t, Rt.memoizedState, e);
    },
    useTransition: function () {
      var e = hf(xl)[0],
        t = Vn().memoizedState;
      return [e, t];
    },
    useMutableSource: m1,
    useSyncExternalStore: p1,
    useId: T1,
    unstable_isNewReconciler: !1,
  },
  y2 = {
    readContext: Hn,
    useCallback: O1,
    useContext: Hn,
    useEffect: Rm,
    useImperativeHandle: $1,
    useInsertionEffect: w1,
    useLayoutEffect: x1,
    useMemo: P1,
    useReducer: yf,
    useRef: S1,
    useState: function () {
      return yf(xl);
    },
    useDebugValue: Tm,
    useDeferredValue: function (e) {
      var t = Vn();
      return Rt === null ? (t.memoizedState = e) : R1(t, Rt.memoizedState, e);
    },
    useTransition: function () {
      var e = yf(xl)[0],
        t = Vn().memoizedState;
      return [e, t];
    },
    useMutableSource: m1,
    useSyncExternalStore: p1,
    useId: T1,
    unstable_isNewReconciler: !1,
  };
function la(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Kw(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function bf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Id(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var b2 = typeof WeakMap == 'function' ? WeakMap : Map;
function k1(e, t, n) {
  (n = kr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Rc || ((Rc = !0), (Hd = r)), Id(e, t);
    }),
    n
  );
}
function N1(e, t, n) {
  (n = kr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Id(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Id(e, t),
          typeof r != 'function' &&
            (ho === null ? (ho = new Set([this])) : ho.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function Eg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new b2();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = k2.bind(null, e, t, n)), t.then(e, e));
}
function $g(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Og(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = kr(-1, 1)), (t.tag = 2), go(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var C2 = Vr.ReactCurrentOwner,
  vn = !1;
function nn(e, t, n, r) {
  t.child = e === null ? d1(t, null, n, r) : ia(t, e.child, n, r);
}
function Pg(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Zi(t, o),
    (r = Om(e, t, n, r, i, o)),
    (n = Pm()),
    e !== null && !vn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zr(e, t, o))
      : (rt && n && mm(t), (t.flags |= 1), nn(e, t, r, o), t.child)
  );
}
function Rg(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Fm(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), j1(e, t, i, r, o))
      : ((e = Us(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : gl), n(a, r) && e.ref === t.ref)
    )
      return zr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = bo(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function j1(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (gl(i, r) && e.ref === t.ref)
      if (((vn = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (vn = !0);
      else return (t.lanes = e.lanes), zr(e, t, o);
  }
  return kd(e, t, n, r, o);
}
function L1(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ye(Wi, En),
        (En |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ye(Wi, En),
          (En |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Ye(Wi, En),
        (En |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ye(Wi, En),
      (En |= r);
  return nn(e, t, o, n), t.child;
}
function F1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function kd(e, t, n, r, o) {
  var i = pn(n) ? Yo : Jt.current;
  return (
    (i = ra(t, i)),
    Zi(t, o),
    (n = Om(e, t, n, r, i, o)),
    (r = Pm()),
    e !== null && !vn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zr(e, t, o))
      : (rt && r && mm(t), (t.flags |= 1), nn(e, t, n, o), t.child)
  );
}
function Tg(e, t, n, r, o) {
  if (pn(n)) {
    var i = !0;
    yc(t);
  } else i = !1;
  if ((Zi(t, o), t.stateNode === null))
    Hs(e, t), u1(t, n, r), Md(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = Hn(c))
      : ((c = pn(n) ? Yo : Jt.current), (c = ra(t, c)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== c) && Cg(t, a, r, c)),
      (no = !1);
    var v = t.memoizedState;
    (a.state = v),
      xc(t, r, a, o),
      (s = t.memoizedState),
      l !== r || v !== s || mn.current || no
        ? (typeof f == 'function' && (_d(t, n, f, r), (s = t.memoizedState)),
          (l = no || bg(t, n, l, r, v, s, c))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = c),
          (r = l))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      s1(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : Zn(t.type, l)),
      (a.props = c),
      (d = t.pendingProps),
      (v = a.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Hn(s))
        : ((s = pn(n) ? Yo : Jt.current), (s = ra(t, s)));
    var h = n.getDerivedStateFromProps;
    (f =
      typeof h == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((l !== d || v !== s) && Cg(t, a, r, s)),
      (no = !1),
      (v = t.memoizedState),
      (a.state = v),
      xc(t, r, a, o);
    var b = t.memoizedState;
    l !== d || v !== b || mn.current || no
      ? (typeof h == 'function' && (_d(t, n, h, r), (b = t.memoizedState)),
        (c = no || bg(t, n, c, r, v, b, s) || !1)
          ? (f ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, b, s),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, b, s)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (a.props = r),
        (a.state = b),
        (a.context = s),
        (r = c))
      : (typeof a.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Nd(e, t, n, r, i, o);
}
function Nd(e, t, n, r, o, i) {
  F1(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && mg(t, n, !1), zr(e, t, i);
  (r = t.stateNode), (C2.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = ia(t, e.child, null, i)), (t.child = ia(t, null, l, i)))
      : nn(e, t, l, i),
    (t.memoizedState = r.state),
    o && mg(t, n, !0),
    t.child
  );
}
function A1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vg(e, t.context, !1),
    wm(e, t.containerInfo);
}
function _g(e, t, n, r, o) {
  return oa(), gm(o), (t.flags |= 256), nn(e, t, n, r), t.child;
}
var jd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ld(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function z1(e, t, n) {
  var r = t.pendingProps,
    o = it.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ye(it, o & 1),
    e === null)
  )
    return (
      Rd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = iu(a, r, 0, null)),
              (e = Ko(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ld(n)),
              (t.memoizedState = jd),
              e)
            : _m(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return S2(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = bo(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = bo(l, i)) : ((i = Ko(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Ld(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = jd),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = bo(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _m(e, t) {
  return (
    (t = iu({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ds(e, t, n, r) {
  return (
    r !== null && gm(r),
    ia(t, e.child, null, n),
    (e = _m(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function S2(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = bf(Error(X(422)))), ds(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = iu({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = Ko(i, o, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && ia(t, e.child, null, a),
          (t.child.memoizedState = Ld(a)),
          (t.memoizedState = jd),
          i);
  if (!(t.mode & 1)) return ds(e, t, a, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(X(419))), (r = bf(i, r, void 0)), ds(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), vn || l)) {
    if (((r = jt), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ar(e, o), ir(r, e, o, -1));
    }
    return Lm(), (r = bf(Error(X(421)))), ds(e, t, a, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = N2.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (On = po(o.nextSibling)),
      (Tn = t),
      (rt = !0),
      (nr = null),
      e !== null &&
        ((Fn[An++] = Mr),
        (Fn[An++] = Ir),
        (Fn[An++] = Zo),
        (Mr = e.id),
        (Ir = e.overflow),
        (Zo = t)),
      (t = _m(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Mg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Td(e.return, t, n);
}
function Cf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function D1(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((nn(e, t, r.children, n), (r = it.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mg(e, n, t);
        else if (e.tag === 19) Mg(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ye(it, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ec(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Cf(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ec(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Cf(t, !0, n, null, i);
        break;
      case 'together':
        Cf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ei |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(X(153));
  if (t.child !== null) {
    for (
      e = t.child, n = bo(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = bo(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function w2(e, t, n) {
  switch (t.tag) {
    case 3:
      A1(t), oa();
      break;
    case 5:
      v1(t);
      break;
    case 1:
      pn(t.type) && yc(t);
      break;
    case 4:
      wm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Ye(Sc, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ye(it, it.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? z1(e, t, n)
            : (Ye(it, it.current & 1),
              (e = zr(e, t, n)),
              e !== null ? e.sibling : null);
      Ye(it, it.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return D1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ye(it, it.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), L1(e, t, n);
  }
  return zr(e, t, n);
}
var B1, Fd, H1, V1;
B1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fd = function () {};
H1 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Do(yr.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = id(e, o)), (r = id(e, r)), (i = []);
        break;
      case 'select':
        (o = lt({}, o, { value: void 0 })),
          (r = lt({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = sd(e, o)), (r = sd(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = gc);
    }
    ud(n, r);
    var a;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === 'style') {
          var l = o[c];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (cl.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((l = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && s !== l && (s != null || l != null))
      )
        if (c === 'style')
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (i = i || []).push(c, s))
            : c === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (i = i || []).push(c, '' + s)
              : c !== 'suppressContentEditableWarning' &&
                c !== 'suppressHydrationWarning' &&
                (cl.hasOwnProperty(c)
                  ? (s != null && c === 'onScroll' && Ze('scroll', e),
                    i || l === s || (i = []))
                  : (i = i || []).push(c, s));
    }
    n && (i = i || []).push('style', n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
V1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ka(e, t) {
  if (!rt)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Xt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function x2(e, t, n) {
  var r = t.pendingProps;
  switch ((pm(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Xt(t), null;
    case 1:
      return pn(t.type) && hc(), Xt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        aa(),
        Je(mn),
        Je(Jt),
        Em(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (us(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nr !== null && (Ud(nr), (nr = null)))),
        Fd(e, t),
        Xt(t),
        null
      );
    case 5:
      xm(t);
      var o = Do(Sl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        H1(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(X(166));
          return Xt(t), null;
        }
        if (((e = Do(yr.current)), us(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[vr] = t), (r[bl] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Ze('cancel', r), Ze('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              Ze('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Ua.length; o++) Ze(Ua[o], r);
              break;
            case 'source':
              Ze('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              Ze('error', r), Ze('load', r);
              break;
            case 'details':
              Ze('toggle', r);
              break;
            case 'input':
              Dp(r, i), Ze('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ze('invalid', r);
              break;
            case 'textarea':
              Hp(r, i), Ze('invalid', r);
          }
          ud(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      cs(r.textContent, l, e),
                    (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      cs(r.textContent, l, e),
                    (o = ['children', '' + l]))
                : cl.hasOwnProperty(a) &&
                  l != null &&
                  a === 'onScroll' &&
                  Ze('scroll', r);
            }
          switch (n) {
            case 'input':
              ts(r), Bp(r, i, !0);
              break;
            case 'textarea':
              ts(r), Vp(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = gc);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = gy(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === 'select' &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[vr] = t),
            (e[bl] = r),
            B1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = fd(n, r)), n)) {
              case 'dialog':
                Ze('cancel', e), Ze('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Ze('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Ua.length; o++) Ze(Ua[o], e);
                o = r;
                break;
              case 'source':
                Ze('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                Ze('error', e), Ze('load', e), (o = r);
                break;
              case 'details':
                Ze('toggle', e), (o = r);
                break;
              case 'input':
                Dp(e, r), (o = id(e, r)), Ze('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = lt({}, r, { value: void 0 })),
                  Ze('invalid', e);
                break;
              case 'textarea':
                Hp(e, r), (o = sd(e, r)), Ze('invalid', e);
                break;
              default:
                o = r;
            }
            ud(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === 'style'
                  ? by(e, s)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((s = s ? s.__html : void 0), s != null && hy(e, s))
                    : i === 'children'
                      ? typeof s == 'string'
                        ? (n !== 'textarea' || s !== '') && ul(e, s)
                        : typeof s == 'number' && ul(e, '' + s)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (cl.hasOwnProperty(i)
                          ? s != null && i === 'onScroll' && Ze('scroll', e)
                          : s != null && em(e, i, s, a));
              }
            switch (n) {
              case 'input':
                ts(e), Bp(e, r, !1);
                break;
              case 'textarea':
                ts(e), Vp(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + So(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qi(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = gc);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Xt(t), null;
    case 6:
      if (e && t.stateNode != null) V1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(X(166));
        if (((n = Do(Sl.current)), Do(yr.current), us(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[vr] = t),
            (i = r.nodeValue !== n) && ((e = Tn), e !== null))
          )
            switch (e.tag) {
              case 3:
                cs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  cs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vr] = t),
            (t.stateNode = r);
      }
      return Xt(t), null;
    case 13:
      if (
        (Je(it),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (rt && On !== null && t.mode & 1 && !(t.flags & 128))
          a1(), oa(), (t.flags |= 98560), (i = !1);
        else if (((i = us(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(X(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(X(317));
            i[vr] = t;
          } else
            oa(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Xt(t), (i = !1);
        } else nr !== null && (Ud(nr), (nr = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || it.current & 1 ? Tt === 0 && (Tt = 3) : Lm())),
          t.updateQueue !== null && (t.flags |= 4),
          Xt(t),
          null);
    case 4:
      return (
        aa(), Fd(e, t), e === null && hl(t.stateNode.containerInfo), Xt(t), null
      );
    case 10:
      return bm(t.type._context), Xt(t), null;
    case 17:
      return pn(t.type) && hc(), Xt(t), null;
    case 19:
      if ((Je(it), (i = t.memoizedState), i === null)) return Xt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) ka(i, !1);
        else {
          if (Tt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Ec(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    ka(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ye(it, (it.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ct() > sa &&
            ((t.flags |= 128), (r = !0), ka(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ec(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ka(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !a.alternate && !rt)
            )
              return Xt(t), null;
          } else
            2 * Ct() - i.renderingStartTime > sa &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ka(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ct()),
          (t.sibling = null),
          (n = it.current),
          Ye(it, r ? (n & 1) | 2 : n & 1),
          t)
        : (Xt(t), null);
    case 22:
    case 23:
      return (
        jm(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? En & 1073741824 && (Xt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Xt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(X(156, t.tag));
}
function E2(e, t) {
  switch ((pm(t), t.tag)) {
    case 1:
      return (
        pn(t.type) && hc(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        aa(),
        Je(mn),
        Je(Jt),
        Em(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xm(t), null;
    case 13:
      if (
        (Je(it), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(X(340));
        oa();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Je(it), null;
    case 4:
      return aa(), null;
    case 10:
      return bm(t.type._context), null;
    case 22:
    case 23:
      return jm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vs = !1,
  Yt = !1,
  $2 = typeof WeakSet == 'function' ? WeakSet : Set,
  oe = null;
function Vi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        mt(e, t, r);
      }
    else n.current = null;
}
function Ad(e, t, n) {
  try {
    n();
  } catch (r) {
    mt(e, t, r);
  }
}
var Ig = !1;
function O2(e, t) {
  if (((Sd = vc), (e = Gy()), vm(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            c = 0,
            f = 0,
            d = e,
            v = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (s = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (v = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (v === n && ++c === o && (l = a),
                v === i && ++f === r && (s = a),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = v), (v = d.parentNode);
            }
            d = h;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    wd = { focusedElem: e, selectionRange: n }, vc = !1, oe = t;
    oe !== null;

  )
    if (((t = oe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (oe = e);
    else
      for (; oe !== null; ) {
        t = oe;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var y = b.memoizedProps,
                    S = b.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Zn(t.type, y),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(X(163));
            }
        } catch (C) {
          mt(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (oe = e);
          break;
        }
        oe = t.return;
      }
  return (b = Ig), (Ig = !1), b;
}
function el(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ad(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ru(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function zd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function W1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), W1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vr], delete t[bl], delete t[$d], delete t[s2], delete t[c2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function U1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kg(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || U1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Dd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = gc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Dd(e, t, n), e = e.sibling; e !== null; ) Dd(e, t, n), (e = e.sibling);
}
function Bd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bd(e, t, n), e = e.sibling; e !== null; ) Bd(e, t, n), (e = e.sibling);
}
var Dt = null,
  Jn = !1;
function Jr(e, t, n) {
  for (n = n.child; n !== null; ) K1(e, t, n), (n = n.sibling);
}
function K1(e, t, n) {
  if (hr && typeof hr.onCommitFiberUnmount == 'function')
    try {
      hr.onCommitFiberUnmount(Xc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Yt || Vi(n, t);
    case 6:
      var r = Dt,
        o = Jn;
      (Dt = null),
        Jr(e, t, n),
        (Dt = r),
        (Jn = o),
        Dt !== null &&
          (Jn
            ? ((e = Dt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Dt.removeChild(n.stateNode));
      break;
    case 18:
      Dt !== null &&
        (Jn
          ? ((e = Dt),
            (n = n.stateNode),
            e.nodeType === 8
              ? vf(e.parentNode, n)
              : e.nodeType === 1 && vf(e, n),
            ml(e))
          : vf(Dt, n.stateNode));
      break;
    case 4:
      (r = Dt),
        (o = Jn),
        (Dt = n.stateNode.containerInfo),
        (Jn = !0),
        Jr(e, t, n),
        (Dt = r),
        (Jn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Yt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && Ad(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Jr(e, t, n);
      break;
    case 1:
      if (
        !Yt &&
        (Vi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          mt(n, t, l);
        }
      Jr(e, t, n);
      break;
    case 21:
      Jr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Yt = (r = Yt) || n.memoizedState !== null), Jr(e, t, n), (Yt = r))
        : Jr(e, t, n);
      break;
    default:
      Jr(e, t, n);
  }
}
function Ng(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $2()),
      t.forEach(function (r) {
        var o = j2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Xn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Dt = l.stateNode), (Jn = !1);
              break e;
            case 3:
              (Dt = l.stateNode.containerInfo), (Jn = !0);
              break e;
            case 4:
              (Dt = l.stateNode.containerInfo), (Jn = !0);
              break e;
          }
          l = l.return;
        }
        if (Dt === null) throw Error(X(160));
        K1(i, a, o), (Dt = null), (Jn = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (c) {
        mt(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) G1(t, e), (t = t.sibling);
}
function G1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xn(t, e), fr(e), r & 4)) {
        try {
          el(3, e, e.return), ru(3, e);
        } catch (y) {
          mt(e, e.return, y);
        }
        try {
          el(5, e, e.return);
        } catch (y) {
          mt(e, e.return, y);
        }
      }
      break;
    case 1:
      Xn(t, e), fr(e), r & 512 && n !== null && Vi(n, n.return);
      break;
    case 5:
      if (
        (Xn(t, e),
        fr(e),
        r & 512 && n !== null && Vi(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ul(o, '');
        } catch (y) {
          mt(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && i.type === 'radio' && i.name != null && my(o, i),
              fd(l, a);
            var c = fd(l, i);
            for (a = 0; a < s.length; a += 2) {
              var f = s[a],
                d = s[a + 1];
              f === 'style'
                ? by(o, d)
                : f === 'dangerouslySetInnerHTML'
                  ? hy(o, d)
                  : f === 'children'
                    ? ul(o, d)
                    : em(o, f, d, c);
            }
            switch (l) {
              case 'input':
                ad(o, i);
                break;
              case 'textarea':
                py(o, i);
                break;
              case 'select':
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? qi(o, !!i.multiple, h, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qi(o, !!i.multiple, i.defaultValue, !0)
                      : qi(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[bl] = i;
          } catch (y) {
            mt(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Xn(t, e), fr(e), r & 4)) {
        if (e.stateNode === null) throw Error(X(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          mt(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Xn(t, e), fr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ml(t.containerInfo);
        } catch (y) {
          mt(e, e.return, y);
        }
      break;
    case 4:
      Xn(t, e), fr(e);
      break;
    case 13:
      Xn(t, e),
        fr(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (km = Ct())),
        r & 4 && Ng(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Yt = (c = Yt) || f), Xn(t, e), (Yt = c)) : Xn(t, e),
        fr(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (oe = e, f = e.child; f !== null; ) {
            for (d = oe = f; oe !== null; ) {
              switch (((v = oe), (h = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  el(4, v, v.return);
                  break;
                case 1:
                  Vi(v, v.return);
                  var b = v.stateNode;
                  if (typeof b.componentWillUnmount == 'function') {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (y) {
                      mt(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Vi(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Lg(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = v), (oe = h)) : Lg(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (o = d.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((l = d.stateNode),
                      (s = d.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (l.style.display = yy('display', a)));
              } catch (y) {
                mt(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = c ? '' : d.memoizedProps;
              } catch (y) {
                mt(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Xn(t, e), fr(e), r & 4 && Ng(e);
      break;
    case 21:
      break;
    default:
      Xn(t, e), fr(e);
  }
}
function fr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (U1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(X(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ul(o, ''), (r.flags &= -33));
          var i = kg(e);
          Bd(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = kg(e);
          Dd(e, l, a);
          break;
        default:
          throw Error(X(161));
      }
    } catch (s) {
      mt(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function P2(e, t, n) {
  (oe = e), q1(e);
}
function q1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; oe !== null; ) {
    var o = oe,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || vs;
      if (!a) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || Yt;
        l = vs;
        var c = Yt;
        if (((vs = a), (Yt = s) && !c))
          for (oe = o; oe !== null; )
            (a = oe),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Fg(o)
                : s !== null
                  ? ((s.return = a), (oe = s))
                  : Fg(o);
        for (; i !== null; ) (oe = i), q1(i), (i = i.sibling);
        (oe = o), (vs = l), (Yt = c);
      }
      jg(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (oe = i)) : jg(e);
  }
}
function jg(e) {
  for (; oe !== null; ) {
    var t = oe;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Yt || ru(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Yt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Zn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && yg(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                yg(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && ml(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(X(163));
          }
        Yt || (t.flags & 512 && zd(t));
      } catch (v) {
        mt(t, t.return, v);
      }
    }
    if (t === e) {
      oe = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (oe = n);
      break;
    }
    oe = t.return;
  }
}
function Lg(e) {
  for (; oe !== null; ) {
    var t = oe;
    if (t === e) {
      oe = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (oe = n);
      break;
    }
    oe = t.return;
  }
}
function Fg(e) {
  for (; oe !== null; ) {
    var t = oe;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ru(4, t);
          } catch (s) {
            mt(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              mt(t, o, s);
            }
          }
          var i = t.return;
          try {
            zd(t);
          } catch (s) {
            mt(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            zd(t);
          } catch (s) {
            mt(t, a, s);
          }
      }
    } catch (s) {
      mt(t, t.return, s);
    }
    if (t === e) {
      oe = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (oe = l);
      break;
    }
    oe = t.return;
  }
}
var R2 = Math.ceil,
  Pc = Vr.ReactCurrentDispatcher,
  Mm = Vr.ReactCurrentOwner,
  Dn = Vr.ReactCurrentBatchConfig,
  je = 0,
  jt = null,
  $t = null,
  Ht = 0,
  En = 0,
  Wi = Eo(0),
  Tt = 0,
  $l = null,
  ei = 0,
  ou = 0,
  Im = 0,
  tl = null,
  dn = null,
  km = 0,
  sa = 1 / 0,
  Rr = null,
  Rc = !1,
  Hd = null,
  ho = null,
  ms = !1,
  ao = null,
  Tc = 0,
  nl = 0,
  Vd = null,
  Vs = -1,
  Ws = 0;
function rn() {
  return je & 6 ? Ct() : Vs !== -1 ? Vs : (Vs = Ct());
}
function yo(e) {
  return e.mode & 1
    ? je & 2 && Ht !== 0
      ? Ht & -Ht
      : f2.transition !== null
        ? (Ws === 0 && (Ws = My()), Ws)
        : ((e = He),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ay(e.type))),
          e)
    : 1;
}
function ir(e, t, n, r) {
  if (50 < nl) throw ((nl = 0), (Vd = null), Error(X(185)));
  jl(e, n, r),
    (!(je & 2) || e !== jt) &&
      (e === jt && (!(je & 2) && (ou |= n), Tt === 4 && oo(e, Ht)),
      gn(e, r),
      n === 1 && je === 0 && !(t.mode & 1) && ((sa = Ct() + 500), eu && $o()));
}
function gn(e, t) {
  var n = e.callbackNode;
  fx(e, t);
  var r = dc(e, e === jt ? Ht : 0);
  if (r === 0)
    n !== null && Kp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Kp(n), t === 1))
      e.tag === 0 ? u2(Ag.bind(null, e)) : r1(Ag.bind(null, e)),
        a2(function () {
          !(je & 6) && $o();
        }),
        (n = null);
    else {
      switch (Iy(r)) {
        case 1:
          n = im;
          break;
        case 4:
          n = Ty;
          break;
        case 16:
          n = fc;
          break;
        case 536870912:
          n = _y;
          break;
        default:
          n = fc;
      }
      n = nb(n, X1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function X1(e, t) {
  if (((Vs = -1), (Ws = 0), je & 6)) throw Error(X(327));
  var n = e.callbackNode;
  if (Ji() && e.callbackNode !== n) return null;
  var r = dc(e, e === jt ? Ht : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = _c(e, r);
  else {
    t = r;
    var o = je;
    je |= 2;
    var i = Y1();
    (jt !== e || Ht !== t) && ((Rr = null), (sa = Ct() + 500), Uo(e, t));
    do
      try {
        M2();
        break;
      } catch (l) {
        Q1(e, l);
      }
    while (!0);
    ym(),
      (Pc.current = i),
      (je = o),
      $t !== null ? (t = 0) : ((jt = null), (Ht = 0), (t = Tt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = gd(e)), o !== 0 && ((r = o), (t = Wd(e, o)))), t === 1)
    )
      throw ((n = $l), Uo(e, 0), oo(e, r), gn(e, Ct()), n);
    if (t === 6) oo(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !T2(o) &&
          ((t = _c(e, r)),
          t === 2 && ((i = gd(e)), i !== 0 && ((r = i), (t = Wd(e, i)))),
          t === 1))
      )
        throw ((n = $l), Uo(e, 0), oo(e, r), gn(e, Ct()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(X(345));
        case 2:
          No(e, dn, Rr);
          break;
        case 3:
          if (
            (oo(e, r), (r & 130023424) === r && ((t = km + 500 - Ct()), 10 < t))
          ) {
            if (dc(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              rn(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ed(No.bind(null, e, dn, Rr), t);
            break;
          }
          No(e, dn, Rr);
          break;
        case 4:
          if ((oo(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - or(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ct() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * R2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ed(No.bind(null, e, dn, Rr), r);
            break;
          }
          No(e, dn, Rr);
          break;
        case 5:
          No(e, dn, Rr);
          break;
        default:
          throw Error(X(329));
      }
    }
  }
  return gn(e, Ct()), e.callbackNode === n ? X1.bind(null, e) : null;
}
function Wd(e, t) {
  var n = tl;
  return (
    e.current.memoizedState.isDehydrated && (Uo(e, t).flags |= 256),
    (e = _c(e, t)),
    e !== 2 && ((t = dn), (dn = n), t !== null && Ud(t)),
    e
  );
}
function Ud(e) {
  dn === null ? (dn = e) : dn.push.apply(dn, e);
}
function T2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!sr(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function oo(e, t) {
  for (
    t &= ~Im,
      t &= ~ou,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - or(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ag(e) {
  if (je & 6) throw Error(X(327));
  Ji();
  var t = dc(e, 0);
  if (!(t & 1)) return gn(e, Ct()), null;
  var n = _c(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gd(e);
    r !== 0 && ((t = r), (n = Wd(e, r)));
  }
  if (n === 1) throw ((n = $l), Uo(e, 0), oo(e, t), gn(e, Ct()), n);
  if (n === 6) throw Error(X(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    No(e, dn, Rr),
    gn(e, Ct()),
    null
  );
}
function Nm(e, t) {
  var n = je;
  je |= 1;
  try {
    return e(t);
  } finally {
    (je = n), je === 0 && ((sa = Ct() + 500), eu && $o());
  }
}
function ti(e) {
  ao !== null && ao.tag === 0 && !(je & 6) && Ji();
  var t = je;
  je |= 1;
  var n = Dn.transition,
    r = He;
  try {
    if (((Dn.transition = null), (He = 1), e)) return e();
  } finally {
    (He = r), (Dn.transition = n), (je = t), !(je & 6) && $o();
  }
}
function jm() {
  (En = Wi.current), Je(Wi);
}
function Uo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), i2(n)), $t !== null))
    for (n = $t.return; n !== null; ) {
      var r = n;
      switch ((pm(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && hc();
          break;
        case 3:
          aa(), Je(mn), Je(Jt), Em();
          break;
        case 5:
          xm(r);
          break;
        case 4:
          aa();
          break;
        case 13:
          Je(it);
          break;
        case 19:
          Je(it);
          break;
        case 10:
          bm(r.type._context);
          break;
        case 22:
        case 23:
          jm();
      }
      n = n.return;
    }
  if (
    ((jt = e),
    ($t = e = bo(e.current, null)),
    (Ht = En = t),
    (Tt = 0),
    ($l = null),
    (Im = ou = ei = 0),
    (dn = tl = null),
    zo !== null)
  ) {
    for (t = 0; t < zo.length; t++)
      if (((n = zo[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    zo = null;
  }
  return e;
}
function Q1(e, t) {
  do {
    var n = $t;
    try {
      if ((ym(), (Ds.current = Oc), $c)) {
        for (var r = at.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        $c = !1;
      }
      if (
        ((Jo = 0),
        (Nt = Rt = at = null),
        (Ja = !1),
        (wl = 0),
        (Mm.current = null),
        n === null || n.return === null)
      ) {
        (Tt = 1), ($l = t), ($t = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = Ht),
          (l.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var c = s,
            f = l,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var v = f.alternate;
            v
              ? ((f.updateQueue = v.updateQueue),
                (f.memoizedState = v.memoizedState),
                (f.lanes = v.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var h = $g(a);
          if (h !== null) {
            (h.flags &= -257),
              Og(h, a, l, i, t),
              h.mode & 1 && Eg(i, c, t),
              (t = h),
              (s = c);
            var b = t.updateQueue;
            if (b === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else b.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Eg(i, c, t), Lm();
              break e;
            }
            s = Error(X(426));
          }
        } else if (rt && l.mode & 1) {
          var S = $g(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Og(S, a, l, i, t),
              gm(la(s, l));
            break e;
          }
        }
        (i = s = la(s, l)),
          Tt !== 4 && (Tt = 2),
          tl === null ? (tl = [i]) : tl.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = k1(i, s, t);
              hg(i, p);
              break e;
            case 1:
              l = s;
              var m = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (ho === null || !ho.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = N1(i, l, t);
                hg(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      J1(n);
    } catch (E) {
      (t = E), $t === n && n !== null && ($t = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Y1() {
  var e = Pc.current;
  return (Pc.current = Oc), e === null ? Oc : e;
}
function Lm() {
  (Tt === 0 || Tt === 3 || Tt === 2) && (Tt = 4),
    jt === null || (!(ei & 268435455) && !(ou & 268435455)) || oo(jt, Ht);
}
function _c(e, t) {
  var n = je;
  je |= 2;
  var r = Y1();
  (jt !== e || Ht !== t) && ((Rr = null), Uo(e, t));
  do
    try {
      _2();
      break;
    } catch (o) {
      Q1(e, o);
    }
  while (!0);
  if ((ym(), (je = n), (Pc.current = r), $t !== null)) throw Error(X(261));
  return (jt = null), (Ht = 0), Tt;
}
function _2() {
  for (; $t !== null; ) Z1($t);
}
function M2() {
  for (; $t !== null && !nx(); ) Z1($t);
}
function Z1(e) {
  var t = tb(e.alternate, e, En);
  (e.memoizedProps = e.pendingProps),
    t === null ? J1(e) : ($t = t),
    (Mm.current = null);
}
function J1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = E2(n, t)), n !== null)) {
        (n.flags &= 32767), ($t = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Tt = 6), ($t = null);
        return;
      }
    } else if (((n = x2(n, t, En)), n !== null)) {
      $t = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      $t = t;
      return;
    }
    $t = t = e;
  } while (t !== null);
  Tt === 0 && (Tt = 5);
}
function No(e, t, n) {
  var r = He,
    o = Dn.transition;
  try {
    (Dn.transition = null), (He = 1), I2(e, t, n, r);
  } finally {
    (Dn.transition = o), (He = r);
  }
  return null;
}
function I2(e, t, n, r) {
  do Ji();
  while (ao !== null);
  if (je & 6) throw Error(X(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(X(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (dx(e, i),
    e === jt && (($t = jt = null), (Ht = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ms ||
      ((ms = !0),
      nb(fc, function () {
        return Ji(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Dn.transition), (Dn.transition = null);
    var a = He;
    He = 1;
    var l = je;
    (je |= 4),
      (Mm.current = null),
      O2(e, n),
      G1(n, e),
      Zx(wd),
      (vc = !!Sd),
      (wd = Sd = null),
      (e.current = n),
      P2(n),
      rx(),
      (je = l),
      (He = a),
      (Dn.transition = i);
  } else e.current = n;
  if (
    (ms && ((ms = !1), (ao = e), (Tc = o)),
    (i = e.pendingLanes),
    i === 0 && (ho = null),
    ax(n.stateNode),
    gn(e, Ct()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Rc) throw ((Rc = !1), (e = Hd), (Hd = null), e);
  return (
    Tc & 1 && e.tag !== 0 && Ji(),
    (i = e.pendingLanes),
    i & 1 ? (e === Vd ? nl++ : ((nl = 0), (Vd = e))) : (nl = 0),
    $o(),
    null
  );
}
function Ji() {
  if (ao !== null) {
    var e = Iy(Tc),
      t = Dn.transition,
      n = He;
    try {
      if (((Dn.transition = null), (He = 16 > e ? 16 : e), ao === null))
        var r = !1;
      else {
        if (((e = ao), (ao = null), (Tc = 0), je & 6)) throw Error(X(331));
        var o = je;
        for (je |= 4, oe = e.current; oe !== null; ) {
          var i = oe,
            a = i.child;
          if (oe.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var c = l[s];
                for (oe = c; oe !== null; ) {
                  var f = oe;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      el(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (oe = d);
                  else
                    for (; oe !== null; ) {
                      f = oe;
                      var v = f.sibling,
                        h = f.return;
                      if ((W1(f), f === c)) {
                        oe = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = h), (oe = v);
                        break;
                      }
                      oe = h;
                    }
                }
              }
              var b = i.alternate;
              if (b !== null) {
                var y = b.child;
                if (y !== null) {
                  b.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              oe = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (oe = a);
          else
            e: for (; oe !== null; ) {
              if (((i = oe), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    el(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (oe = p);
                break e;
              }
              oe = i.return;
            }
        }
        var m = e.current;
        for (oe = m; oe !== null; ) {
          a = oe;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (oe = g);
          else
            e: for (a = m; oe !== null; ) {
              if (((l = oe), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ru(9, l);
                  }
                } catch (E) {
                  mt(l, l.return, E);
                }
              if (l === a) {
                oe = null;
                break e;
              }
              var C = l.sibling;
              if (C !== null) {
                (C.return = l.return), (oe = C);
                break e;
              }
              oe = l.return;
            }
        }
        if (
          ((je = o), $o(), hr && typeof hr.onPostCommitFiberRoot == 'function')
        )
          try {
            hr.onPostCommitFiberRoot(Xc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (He = n), (Dn.transition = t);
    }
  }
  return !1;
}
function zg(e, t, n) {
  (t = la(n, t)),
    (t = k1(e, t, 1)),
    (e = go(e, t, 1)),
    (t = rn()),
    e !== null && (jl(e, 1, t), gn(e, t));
}
function mt(e, t, n) {
  if (e.tag === 3) zg(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zg(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ho === null || !ho.has(r)))
        ) {
          (e = la(n, e)),
            (e = N1(t, e, 1)),
            (t = go(t, e, 1)),
            (e = rn()),
            t !== null && (jl(t, 1, e), gn(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function k2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = rn()),
    (e.pingedLanes |= e.suspendedLanes & n),
    jt === e &&
      (Ht & n) === n &&
      (Tt === 4 || (Tt === 3 && (Ht & 130023424) === Ht && 500 > Ct() - km)
        ? Uo(e, 0)
        : (Im |= n)),
    gn(e, t);
}
function eb(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = os), (os <<= 1), !(os & 130023424) && (os = 4194304))
      : (t = 1));
  var n = rn();
  (e = Ar(e, t)), e !== null && (jl(e, t, n), gn(e, n));
}
function N2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), eb(e, n);
}
function j2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(X(314));
  }
  r !== null && r.delete(t), eb(e, n);
}
var tb;
tb = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || mn.current) vn = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (vn = !1), w2(e, t, n);
      vn = !!(e.flags & 131072);
    }
  else (vn = !1), rt && t.flags & 1048576 && o1(t, Cc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Hs(e, t), (e = t.pendingProps);
      var o = ra(t, Jt.current);
      Zi(t, n), (o = Om(null, t, r, e, o, n));
      var i = Pm();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pn(r) ? ((i = !0), yc(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Sm(t),
            (o.updater = tu),
            (t.stateNode = o),
            (o._reactInternals = t),
            Md(t, r, e, n),
            (t = Nd(null, t, r, !0, i, n)))
          : ((t.tag = 0), rt && i && mm(t), nn(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = F2(r)),
          (e = Zn(r, e)),
          o)
        ) {
          case 0:
            t = kd(null, t, r, e, n);
            break e;
          case 1:
            t = Tg(null, t, r, e, n);
            break e;
          case 11:
            t = Pg(null, t, r, e, n);
            break e;
          case 14:
            t = Rg(null, t, r, Zn(r.type, e), n);
            break e;
        }
        throw Error(X(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Zn(r, o)),
        kd(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Zn(r, o)),
        Tg(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((A1(t), e === null)) throw Error(X(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          s1(e, t),
          xc(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = la(Error(X(423)), t)), (t = _g(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = la(Error(X(424)), t)), (t = _g(e, t, r, n, o));
            break e;
          } else
            for (
              On = po(t.stateNode.containerInfo.firstChild),
                Tn = t,
                rt = !0,
                nr = null,
                n = d1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((oa(), r === o)) {
            t = zr(e, t, n);
            break e;
          }
          nn(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        v1(t),
        e === null && Rd(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        xd(r, o) ? (a = null) : i !== null && xd(r, i) && (t.flags |= 32),
        F1(e, t),
        nn(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Rd(t), null;
    case 13:
      return z1(e, t, n);
    case 4:
      return (
        wm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ia(t, null, r, n)) : nn(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Zn(r, o)),
        Pg(e, t, r, o, n)
      );
    case 7:
      return nn(e, t, t.pendingProps, n), t.child;
    case 8:
      return nn(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return nn(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Ye(Sc, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (sr(i.value, a)) {
            if (i.children === o.children && !mn.current) {
              t = zr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = kr(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Td(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(X(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  Td(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        nn(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Zi(t, n),
        (o = Hn(o)),
        (r = r(o)),
        (t.flags |= 1),
        nn(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Zn(r, t.pendingProps)),
        (o = Zn(r.type, o)),
        Rg(e, t, r, o, n)
      );
    case 15:
      return j1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Zn(r, o)),
        Hs(e, t),
        (t.tag = 1),
        pn(r) ? ((e = !0), yc(t)) : (e = !1),
        Zi(t, n),
        u1(t, r, o),
        Md(t, r, o, n),
        Nd(null, t, r, !0, e, n)
      );
    case 19:
      return D1(e, t, n);
    case 22:
      return L1(e, t, n);
  }
  throw Error(X(156, t.tag));
};
function nb(e, t) {
  return Ry(e, t);
}
function L2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function zn(e, t, n, r) {
  return new L2(e, t, n, r);
}
function Fm(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function F2(e) {
  if (typeof e == 'function') return Fm(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === nm)) return 11;
    if (e === rm) return 14;
  }
  return 2;
}
function bo(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = zn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Us(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == 'function')) Fm(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case Ni:
        return Ko(n.children, o, i, t);
      case tm:
        (a = 8), (o |= 8);
        break;
      case td:
        return (
          (e = zn(12, n, t, o | 2)), (e.elementType = td), (e.lanes = i), e
        );
      case nd:
        return (e = zn(13, n, t, o)), (e.elementType = nd), (e.lanes = i), e;
      case rd:
        return (e = zn(19, n, t, o)), (e.elementType = rd), (e.lanes = i), e;
      case fy:
        return iu(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case cy:
              a = 10;
              break e;
            case uy:
              a = 9;
              break e;
            case nm:
              a = 11;
              break e;
            case rm:
              a = 14;
              break e;
            case to:
              (a = 16), (r = null);
              break e;
          }
        throw Error(X(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = zn(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ko(e, t, n, r) {
  return (e = zn(7, e, r, t)), (e.lanes = n), e;
}
function iu(e, t, n, r) {
  return (
    (e = zn(22, e, r, t)),
    (e.elementType = fy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Sf(e, t, n) {
  return (e = zn(6, e, null, t)), (e.lanes = n), e;
}
function wf(e, t, n) {
  return (
    (t = zn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function A2(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = tf(0)),
    (this.expirationTimes = tf(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = tf(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Am(e, t, n, r, o, i, a, l, s) {
  return (
    (e = new A2(e, t, n, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = zn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Sm(i),
    e
  );
}
function z2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ki,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rb(e) {
  if (!e) return wo;
  e = e._reactInternals;
  e: {
    if (si(e) !== e || e.tag !== 1) throw Error(X(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(X(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pn(n)) return n1(e, n, t);
  }
  return t;
}
function ob(e, t, n, r, o, i, a, l, s) {
  return (
    (e = Am(n, r, !0, e, o, i, a, l, s)),
    (e.context = rb(null)),
    (n = e.current),
    (r = rn()),
    (o = yo(n)),
    (i = kr(r, o)),
    (i.callback = t ?? null),
    go(n, i, o),
    (e.current.lanes = o),
    jl(e, o, r),
    gn(e, r),
    e
  );
}
function au(e, t, n, r) {
  var o = t.current,
    i = rn(),
    a = yo(o);
  return (
    (n = rb(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = kr(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = go(o, t, a)),
    e !== null && (ir(e, o, a, i), zs(e, o, a)),
    a
  );
}
function Mc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zm(e, t) {
  Dg(e, t), (e = e.alternate) && Dg(e, t);
}
function D2() {
  return null;
}
var ib =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Dm(e) {
  this._internalRoot = e;
}
lu.prototype.render = Dm.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(X(409));
  au(e, t, null, null);
};
lu.prototype.unmount = Dm.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ti(function () {
      au(null, e, null, null);
    }),
      (t[Fr] = null);
  }
};
function lu(e) {
  this._internalRoot = e;
}
lu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = jy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ro.length && t !== 0 && t < ro[n].priority; n++);
    ro.splice(n, 0, e), n === 0 && Fy(e);
  }
};
function Bm(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function su(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Bg() {}
function B2(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var c = Mc(a);
        i.call(c);
      };
    }
    var a = ob(t, r, e, 0, null, !1, !1, '', Bg);
    return (
      (e._reactRootContainer = a),
      (e[Fr] = a.current),
      hl(e.nodeType === 8 ? e.parentNode : e),
      ti(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var c = Mc(s);
      l.call(c);
    };
  }
  var s = Am(e, 0, !1, null, null, !1, !1, '', Bg);
  return (
    (e._reactRootContainer = s),
    (e[Fr] = s.current),
    hl(e.nodeType === 8 ? e.parentNode : e),
    ti(function () {
      au(t, s, n, r);
    }),
    s
  );
}
function cu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == 'function') {
      var l = o;
      o = function () {
        var s = Mc(a);
        l.call(s);
      };
    }
    au(t, a, e, o);
  } else a = B2(n, t, e, o, r);
  return Mc(a);
}
ky = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wa(t.pendingLanes);
        n !== 0 &&
          (am(t, n | 1), gn(t, Ct()), !(je & 6) && ((sa = Ct() + 500), $o()));
      }
      break;
    case 13:
      ti(function () {
        var r = Ar(e, 1);
        if (r !== null) {
          var o = rn();
          ir(r, e, 1, o);
        }
      }),
        zm(e, 1);
  }
};
lm = function (e) {
  if (e.tag === 13) {
    var t = Ar(e, 134217728);
    if (t !== null) {
      var n = rn();
      ir(t, e, 134217728, n);
    }
    zm(e, 134217728);
  }
};
Ny = function (e) {
  if (e.tag === 13) {
    var t = yo(e),
      n = Ar(e, t);
    if (n !== null) {
      var r = rn();
      ir(n, e, t, r);
    }
    zm(e, t);
  }
};
jy = function () {
  return He;
};
Ly = function (e, t) {
  var n = He;
  try {
    return (He = e), t();
  } finally {
    He = n;
  }
};
vd = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ad(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Jc(r);
            if (!o) throw Error(X(90));
            vy(r), ad(r, o);
          }
        }
      }
      break;
    case 'textarea':
      py(e, n);
      break;
    case 'select':
      (t = n.value), t != null && qi(e, !!n.multiple, t, !1);
  }
};
wy = Nm;
xy = ti;
var H2 = { usingClientEntryPoint: !1, Events: [Fl, Ai, Jc, Cy, Sy, Nm] },
  Na = {
    findFiberByHostInstance: Ao,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  V2 = {
    bundleType: Na.bundleType,
    version: Na.version,
    rendererPackageName: Na.rendererPackageName,
    rendererConfig: Na.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Oy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Na.findFiberByHostInstance || D2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ps.isDisabled && ps.supportsFiber)
    try {
      (Xc = ps.inject(V2)), (hr = ps);
    } catch {}
}
Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H2;
Mn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bm(t)) throw Error(X(200));
  return z2(e, t, null, n);
};
Mn.createRoot = function (e, t) {
  if (!Bm(e)) throw Error(X(299));
  var n = !1,
    r = '',
    o = ib;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Am(e, 1, !1, null, null, n, !1, r, o)),
    (e[Fr] = t.current),
    hl(e.nodeType === 8 ? e.parentNode : e),
    new Dm(t)
  );
};
Mn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(X(188))
      : ((e = Object.keys(e).join(',')), Error(X(268, e)));
  return (e = Oy(t)), (e = e === null ? null : e.stateNode), e;
};
Mn.flushSync = function (e) {
  return ti(e);
};
Mn.hydrate = function (e, t, n) {
  if (!su(t)) throw Error(X(200));
  return cu(null, e, t, !0, n);
};
Mn.hydrateRoot = function (e, t, n) {
  if (!Bm(e)) throw Error(X(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    a = ib;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = ob(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Fr] = t.current),
    hl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new lu(t);
};
Mn.render = function (e, t, n) {
  if (!su(t)) throw Error(X(200));
  return cu(null, e, t, !1, n);
};
Mn.unmountComponentAtNode = function (e) {
  if (!su(e)) throw Error(X(40));
  return e._reactRootContainer
    ? (ti(function () {
        cu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Fr] = null);
        });
      }),
      !0)
    : !1;
};
Mn.unstable_batchedUpdates = Nm;
Mn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!su(n)) throw Error(X(200));
  if (e == null || e._reactInternals === void 0) throw Error(X(38));
  return cu(e, t, n, !1, r);
};
Mn.version = '18.2.0-next-9e3b772b8-20220608';
function ab() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ab);
    } catch (e) {
      console.error(e);
    }
}
ab(), (oy.exports = Mn);
var ya = oy.exports;
const lb = Kc(ya),
  W2 = G0({ __proto__: null, default: lb }, [ya]);
var Hg = ya;
(Jf.createRoot = Hg.createRoot), (Jf.hydrateRoot = Hg.hydrateRoot);
var U2 = u.createContext({});
const sb = U2;
function Dr() {
  return (
    (Dr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Dr.apply(this, arguments)
  );
}
function K2(e) {
  if (Array.isArray(e)) return e;
}
function G2(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r,
      o,
      i,
      a,
      l = [],
      s = !0,
      c = !1;
    try {
      if (((i = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        s = !1;
      } else
        for (
          ;
          !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t);
          s = !0
        );
    } catch (f) {
      (c = !0), (o = f);
    } finally {
      try {
        if (!s && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function Vg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function q2(e, t) {
  if (e) {
    if (typeof e == 'string') return Vg(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Vg(e, t);
  }
}
function X2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cb(e, t) {
  return K2(e) || G2(e, t) || q2(e, t) || X2();
}
function ni(e) {
  '@babel/helpers - typeof';
  return (
    (ni =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    ni(e)
  );
}
function Q2(e, t) {
  if (ni(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (ni(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Y2(e) {
  var t = Q2(e, 'string');
  return ni(t) == 'symbol' ? t : t + '';
}
function Kd(e, t, n) {
  return (
    (t = Y2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Z2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function ub(e, t) {
  if (e == null) return {};
  var n = Z2(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
var fb = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = '', a = 0; a < arguments.length; a++) {
        var l = arguments[a];
        l && (i = o(i, r(l)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == 'string' || typeof i == 'number') return i;
      if (typeof i != 'object') return '';
      if (Array.isArray(i)) return n.apply(null, i);
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes('[native code]')
      )
        return i.toString();
      var a = '';
      for (var l in i) t.call(i, l) && i[l] && (a = o(a, l));
      return a;
    }
    function o(i, a) {
      return a ? (i ? i + ' ' + a : i + a) : i;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(fb);
var J2 = fb.exports;
const eE = Kc(J2);
function Bn(e, t) {
  tE(e) && (e = '100%');
  var n = nE(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function tE(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function nE(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1;
}
function rE(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function gs(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function xf(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function oE(e, t, n) {
  return { r: Bn(e, 255) * 255, g: Bn(t, 255) * 255, b: Bn(n, 255) * 255 };
}
function Ef(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function iE(e, t, n) {
  var r, o, i;
  if (((e = Bn(e, 360)), (t = Bn(t, 100)), (n = Bn(n, 100)), t === 0))
    (o = n), (i = n), (r = n);
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (r = Ef(l, a, e + 1 / 3)), (o = Ef(l, a, e)), (i = Ef(l, a, e - 1 / 3));
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function aE(e, t, n) {
  (e = Bn(e, 255)), (t = Bn(t, 255)), (n = Bn(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = r,
    l = r - o,
    s = r === 0 ? 0 : l / r;
  if (r === o) i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: a };
}
function lE(e, t, n) {
  (e = Bn(e, 360) * 6), (t = Bn(t, 100)), (n = Bn(n, 100));
  var r = Math.floor(e),
    o = e - r,
    i = n * (1 - t),
    a = n * (1 - o * t),
    l = n * (1 - (1 - o) * t),
    s = r % 6,
    c = [n, a, i, i, l, n][s],
    f = [l, n, n, a, i, i][s],
    d = [i, i, l, n, n, a][s];
  return { r: c * 255, g: f * 255, b: d * 255 };
}
function sE(e, t, n, r) {
  var o = [
    xf(Math.round(e).toString(16)),
    xf(Math.round(t).toString(16)),
    xf(Math.round(n).toString(16)),
  ];
  return r &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join('');
}
function Wg(e) {
  return wn(e) / 255;
}
function wn(e) {
  return parseInt(e, 16);
}
var Ug = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function ja(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    o = null,
    i = null,
    a = !1,
    l = !1;
  return (
    typeof e == 'string' && (e = fE(e)),
    typeof e == 'object' &&
      ($r(e.r) && $r(e.g) && $r(e.b)
        ? ((t = oE(e.r, e.g, e.b)),
          (a = !0),
          (l = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : $r(e.h) && $r(e.s) && $r(e.v)
          ? ((r = gs(e.s)),
            (o = gs(e.v)),
            (t = lE(e.h, r, o)),
            (a = !0),
            (l = 'hsv'))
          : $r(e.h) &&
            $r(e.s) &&
            $r(e.l) &&
            ((r = gs(e.s)),
            (i = gs(e.l)),
            (t = iE(e.h, r, i)),
            (a = !0),
            (l = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = rE(n)),
    {
      ok: a,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  );
}
var cE = '[-\\+]?\\d+%?',
  uE = '[-\\+]?\\d*\\.\\d+%?',
  lo = '(?:'.concat(uE, ')|(?:').concat(cE, ')'),
  $f = '[\\s|\\(]+('
    .concat(lo, ')[,|\\s]+(')
    .concat(lo, ')[,|\\s]+(')
    .concat(lo, ')\\s*\\)?'),
  Of = '[\\s|\\(]+('
    .concat(lo, ')[,|\\s]+(')
    .concat(lo, ')[,|\\s]+(')
    .concat(lo, ')[,|\\s]+(')
    .concat(lo, ')\\s*\\)?'),
  Qn = {
    CSS_UNIT: new RegExp(lo),
    rgb: new RegExp('rgb' + $f),
    rgba: new RegExp('rgba' + Of),
    hsl: new RegExp('hsl' + $f),
    hsla: new RegExp('hsla' + Of),
    hsv: new RegExp('hsv' + $f),
    hsva: new RegExp('hsva' + Of),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function fE(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (Ug[e]) (e = Ug[e]), (t = !0);
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var n = Qn.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Qn.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Qn.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Qn.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Qn.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Qn.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Qn.hex8.exec(e)),
                          n
                            ? {
                                r: wn(n[1]),
                                g: wn(n[2]),
                                b: wn(n[3]),
                                a: Wg(n[4]),
                                format: t ? 'name' : 'hex8',
                              }
                            : ((n = Qn.hex6.exec(e)),
                              n
                                ? {
                                    r: wn(n[1]),
                                    g: wn(n[2]),
                                    b: wn(n[3]),
                                    format: t ? 'name' : 'hex',
                                  }
                                : ((n = Qn.hex4.exec(e)),
                                  n
                                    ? {
                                        r: wn(n[1] + n[1]),
                                        g: wn(n[2] + n[2]),
                                        b: wn(n[3] + n[3]),
                                        a: Wg(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8',
                                      }
                                    : ((n = Qn.hex3.exec(e)),
                                      n
                                        ? {
                                            r: wn(n[1] + n[1]),
                                            g: wn(n[2] + n[2]),
                                            b: wn(n[3] + n[3]),
                                            format: t ? 'name' : 'hex',
                                          }
                                        : !1)))))))));
}
function $r(e) {
  return !!Qn.CSS_UNIT.exec(String(e));
}
var hs = 2,
  Kg = 0.16,
  dE = 0.05,
  vE = 0.05,
  mE = 0.15,
  db = 5,
  vb = 4,
  pE = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function Gg(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    o = aE(t, n, r);
  return { h: o.h * 360, s: o.s, v: o.v };
}
function ys(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return '#'.concat(sE(t, n, r, !1));
}
function gE(e, t, n) {
  var r = n / 100,
    o = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b,
    };
  return o;
}
function qg(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - hs * t : Math.round(e.h) + hs * t)
      : (r = n ? Math.round(e.h) + hs * t : Math.round(e.h) - hs * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function Xg(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - Kg * t) : t === vb ? (r = e.s + Kg) : (r = e.s + dE * t),
    r > 1 && (r = 1),
    n && t === db && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function Qg(e, t, n) {
  var r;
  return (
    n ? (r = e.v + vE * t) : (r = e.v - mE * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function Gd(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = ja(e),
      o = db;
    o > 0;
    o -= 1
  ) {
    var i = Gg(r),
      a = ys(ja({ h: qg(i, o, !0), s: Xg(i, o, !0), v: Qg(i, o, !0) }));
    n.push(a);
  }
  n.push(ys(r));
  for (var l = 1; l <= vb; l += 1) {
    var s = Gg(r),
      c = ys(ja({ h: qg(s, l), s: Xg(s, l), v: Qg(s, l) }));
    n.push(c);
  }
  return t.theme === 'dark'
    ? pE.map(function (f) {
        var d = f.index,
          v = f.opacity,
          h = ys(gE(ja(t.backgroundColor || '#141414'), ja(n[d]), v * 100));
        return h;
      })
    : n;
}
var Pf = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1677FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  Ks = {},
  Rf = {};
Object.keys(Pf).forEach(function (e) {
  (Ks[e] = Gd(Pf[e])),
    (Ks[e].primary = Ks[e][5]),
    (Rf[e] = Gd(Pf[e], { theme: 'dark', backgroundColor: '#141414' })),
    (Rf[e].primary = Rf[e][5]);
});
var hE = Ks.blue;
function Yg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yg(Object(n), !0).forEach(function (r) {
          Kd(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Yg(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function yE() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
function bE(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var n = t; n; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
var Zg = 'data-rc-order',
  Jg = 'data-rc-priority',
  CE = 'rc-util-key',
  qd = new Map();
function mb() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : CE;
}
function Hm(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector('head');
  return t || document.body;
}
function SE(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
}
function Vm(e) {
  return Array.from((qd.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE';
  });
}
function pb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!yE()) return null;
  var n = t.csp,
    r = t.prepend,
    o = t.priority,
    i = o === void 0 ? 0 : o,
    a = SE(r),
    l = a === 'prependQueue',
    s = document.createElement('style');
  s.setAttribute(Zg, a),
    l && i && s.setAttribute(Jg, ''.concat(i)),
    n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce),
    (s.innerHTML = e);
  var c = Hm(t),
    f = c.firstChild;
  if (r) {
    if (l) {
      var d = (t.styles || Vm(c)).filter(function (v) {
        if (!['prepend', 'prependQueue'].includes(v.getAttribute(Zg)))
          return !1;
        var h = Number(v.getAttribute(Jg) || 0);
        return i >= h;
      });
      if (d.length) return c.insertBefore(s, d[d.length - 1].nextSibling), s;
    }
    c.insertBefore(s, f);
  } else c.appendChild(s);
  return s;
}
function wE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Hm(t);
  return (t.styles || Vm(n)).find(function (r) {
    return r.getAttribute(mb(t)) === e;
  });
}
function xE(e, t) {
  var n = qd.get(e);
  if (!n || !bE(document, n)) {
    var r = pb('', t),
      o = r.parentNode;
    qd.set(e, o), e.removeChild(r);
  }
}
function EE(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Hm(n),
    o = Vm(r),
    i = pr(pr({}, n), {}, { styles: o });
  xE(r, i);
  var a = wE(t, i);
  if (a) {
    var l, s;
    if (
      (l = i.csp) !== null &&
      l !== void 0 &&
      l.nonce &&
      a.nonce !== ((s = i.csp) === null || s === void 0 ? void 0 : s.nonce)
    ) {
      var c;
      a.nonce = (c = i.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var f = pb(e, i);
  return f.setAttribute(mb(i), t), f;
}
function gb(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e);
}
function $E(e) {
  return gb(e) instanceof ShadowRoot;
}
function OE(e) {
  return $E(e) ? gb(e) : null;
}
var Xd = {},
  PE = function (t) {};
function RE(e, t) {}
function TE(e, t) {}
function _E() {
  Xd = {};
}
function hb(e, t, n) {
  !t && !Xd[n] && (e(!1, n), (Xd[n] = !0));
}
function uu(e, t) {
  hb(RE, e, t);
}
function ME(e, t) {
  hb(TE, e, t);
}
uu.preMessage = PE;
uu.resetWarned = _E;
uu.noteOnce = ME;
function IE(e) {
  return e.replace(/-(.)/g, function (t, n) {
    return n.toUpperCase();
  });
}
function kE(e, t) {
  uu(e, '[@ant-design/icons] '.concat(t));
}
function eh(e) {
  return (
    ni(e) === 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (ni(e.icon) === 'object' || typeof e.icon == 'function')
  );
}
function th() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    switch (n) {
      case 'class':
        (t.className = r), delete t.class;
        break;
      default:
        delete t[n], (t[IE(n)] = r);
    }
    return t;
  }, {});
}
function Qd(e, t, n) {
  return n
    ? G.createElement(
        e.tag,
        pr(pr({ key: t }, th(e.attrs)), n),
        (e.children || []).map(function (r, o) {
          return Qd(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        })
      )
    : G.createElement(
        e.tag,
        pr({ key: t }, th(e.attrs)),
        (e.children || []).map(function (r, o) {
          return Qd(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        })
      );
}
function yb(e) {
  return Gd(e)[0];
}
function bb(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var NE = `
.anticon {
  display: inline-flex;
  alignItems: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  jE = function (t) {
    var n = u.useContext(sb),
      r = n.csp,
      o = n.prefixCls,
      i = NE;
    o && (i = i.replace(/anticon/g, o)),
      u.useEffect(function () {
        var a = t.current,
          l = OE(a);
        EE(i, '@ant-design-icons', { prepend: !0, csp: r, attachTo: l });
      }, []);
  },
  LE = [
    'icon',
    'className',
    'onClick',
    'style',
    'primaryColor',
    'secondaryColor',
  ],
  rl = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
function FE(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (rl.primaryColor = t),
    (rl.secondaryColor = n || yb(t)),
    (rl.calculated = !!n);
}
function AE() {
  return pr({}, rl);
}
var fu = function (t) {
  var n = t.icon,
    r = t.className,
    o = t.onClick,
    i = t.style,
    a = t.primaryColor,
    l = t.secondaryColor,
    s = ub(t, LE),
    c = u.useRef(),
    f = rl;
  if (
    (a && (f = { primaryColor: a, secondaryColor: l || yb(a) }),
    jE(c),
    kE(eh(n), 'icon should be icon definiton, but got '.concat(n)),
    !eh(n))
  )
    return null;
  var d = n;
  return (
    d &&
      typeof d.icon == 'function' &&
      (d = pr(
        pr({}, d),
        {},
        { icon: d.icon(f.primaryColor, f.secondaryColor) }
      )),
    Qd(
      d.icon,
      'svg-'.concat(d.name),
      pr(
        pr(
          {
            className: r,
            onClick: o,
            style: i,
            'data-icon': d.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          s
        ),
        {},
        { ref: c }
      )
    )
  );
};
fu.displayName = 'IconReact';
fu.getTwoToneColors = AE;
fu.setTwoToneColors = FE;
const Wm = fu;
function Cb(e) {
  var t = bb(e),
    n = cb(t, 2),
    r = n[0],
    o = n[1];
  return Wm.setTwoToneColors({ primaryColor: r, secondaryColor: o });
}
function zE() {
  var e = Wm.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var DE = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
];
Cb(hE.primary);
var du = u.forwardRef(function (e, t) {
  var n = e.className,
    r = e.icon,
    o = e.spin,
    i = e.rotate,
    a = e.tabIndex,
    l = e.onClick,
    s = e.twoToneColor,
    c = ub(e, DE),
    f = u.useContext(sb),
    d = f.prefixCls,
    v = d === void 0 ? 'anticon' : d,
    h = f.rootClassName,
    b = eE(
      h,
      v,
      Kd(
        Kd({}, ''.concat(v, '-').concat(r.name), !!r.name),
        ''.concat(v, '-spin'),
        !!o || r.name === 'loading'
      ),
      n
    ),
    y = a;
  y === void 0 && l && (y = -1);
  var S = i
      ? {
          msTransform: 'rotate('.concat(i, 'deg)'),
          transform: 'rotate('.concat(i, 'deg)'),
        }
      : void 0,
    p = bb(s),
    m = cb(p, 2),
    g = m[0],
    C = m[1];
  return u.createElement(
    'span',
    Dr({ role: 'img', 'aria-label': r.name }, c, {
      ref: t,
      tabIndex: y,
      onClick: l,
      className: b,
    }),
    u.createElement(Wm, {
      icon: r,
      primaryColor: g,
      secondaryColor: C,
      style: S,
    })
  );
});
du.displayName = 'AntdIcon';
du.getTwoToneColor = zE;
du.setTwoToneColor = Cb;
const ba = du;
var BE = {
  icon: {
    tag: 'svg',
    attrs: {
      'fill-rule': 'evenodd',
      viewBox: '64 64 896 896',
      focusable: 'false',
    },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z',
        },
      },
    ],
  },
  name: 'close',
  theme: 'outlined',
};
const HE = BE;
var VE = function (t, n) {
    return u.createElement(ba, Dr({}, t, { ref: n, icon: HE }));
  },
  WE = u.forwardRef(VE);
const UE = WE;
var KE = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
        },
      },
    ],
  },
  name: 'github',
  theme: 'outlined',
};
const GE = KE;
var qE = function (t, n) {
    return u.createElement(ba, Dr({}, t, { ref: n, icon: GE }));
  },
  XE = u.forwardRef(qE);
const QE = XE;
var YE = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136V232h752v560zM610.3 476h123.4c1.3 0 2.3-3.6 2.3-8v-48c0-4.4-1-8-2.3-8H610.3c-1.3 0-2.3 3.6-2.3 8v48c0 4.4 1 8 2.3 8zm4.8 144h185.7c3.9 0 7.1-3.6 7.1-8v-48c0-4.4-3.2-8-7.1-8H615.1c-3.9 0-7.1 3.6-7.1 8v48c0 4.4 3.2 8 7.1 8zM224 673h43.9c4.2 0 7.6-3.3 7.9-7.5 3.8-50.5 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H522a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.6-126.1a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1c-.4 4.6 3.2 8.4 7.8 8.4zm149-262c28.5 0 51.7 23.3 51.7 52s-23.2 52-51.7 52-51.7-23.3-51.7-52 23.2-52 51.7-52z',
        },
      },
    ],
  },
  name: 'idcard',
  theme: 'outlined',
};
const ZE = YE;
var JE = function (t, n) {
    return u.createElement(ba, Dr({}, t, { ref: n, icon: ZE }));
  },
  e$ = u.forwardRef(JE);
const t$ = e$;
var n$ = {
  icon: function (t, n) {
    return {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M477.5 536.3L135.9 270.7l-27.5-21.4 27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 01-68.7 0z',
            fill: n,
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M876.3 198.8l39.3 50.5-27.6 21.5 27.7-21.5-39.3-50.5z',
            fill: n,
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-94.5 72.1L512 482 190.5 232.1h643zm54.5 38.7V792H136V270.8l-27.6-21.5 27.5 21.4 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5h.1l39.3 50.5-27.7 21.5z',
            fill: t,
          },
        },
      ],
    };
  },
  name: 'mail',
  theme: 'twotone',
};
const r$ = n$;
var o$ = function (t, n) {
    return u.createElement(ba, Dr({}, t, { ref: n, icon: r$ }));
  },
  i$ = u.forwardRef(o$);
const a$ = i$;
var l$ = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
        },
      },
    ],
  },
  name: 'menu',
  theme: 'outlined',
};
const s$ = l$;
var c$ = function (t, n) {
    return u.createElement(ba, Dr({}, t, { ref: n, icon: s$ }));
  },
  u$ = u.forwardRef(c$);
const f$ = u$;
var d$ = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 01-36 35.9z',
        },
      },
    ],
  },
  name: 'wechat',
  theme: 'outlined',
};
const v$ = d$;
var m$ = function (t, n) {
    return u.createElement(ba, Dr({}, t, { ref: n, icon: v$ }));
  },
  p$ = u.forwardRef(m$);
const g$ = p$;
function h$() {
  const [e, t] = u.useState(!1),
    n = (r) => {
      const o = document.getElementById(r);
      o && (o.scrollIntoView({ behavior: 'smooth' }), t(!1)),
        console.log('iiiii'),
        t(!1);
    };
  return W.jsx(W.Fragment, {
    children: W.jsxs('nav', {
      style: {
        display: 'flex',
        margin: '10px',
        color: 'white',
        fontSize: '30px',
        position: 'relative',
      },
      children: [
        W.jsx('div', {}),
        W.jsxs('div', {
          className: 'navbar',
          children: [
            W.jsx('div', {
              style: { position: 'absolute', right: '15%' },
              children: W.jsx('a', {
                className: 'text-white',
                onClick: () => {
                  n('content');
                },
                children: 'About',
              }),
            }),
            W.jsx('div', {
              style: { position: 'absolute', right: '2%' },
              children: W.jsx('a', {
                className: 'text-white',
                onClick: () => {
                  n('contact');
                },
                children: 'Contact',
              }),
            }),
          ],
        }),
        W.jsxs('div', {
          className: 'navbar2',
          children: [
            W.jsx(f$, {
              style: {
                position: 'absolute',
                right: '2%',
                display: e ? 'none' : 'block',
              },
              onClick: () => t(!e),
            }),
            W.jsx(UE, {
              style: {
                position: 'absolute',
                right: '2%',
                display: e ? 'block' : 'none',
              },
              onClick: () => t(!e),
            }),
            W.jsxs('div', {
              style: {
                display: e ? 'block' : 'none',
                backgroundColor: 'black',
                width: '1100px',
                height: '700px',
                position: 'absolute',
                top: '90%',
                right: '4%',
                zIndex: '3',
              },
              children: [
                W.jsx('div', {
                  className:
                    'mt-10  text-5xl cursor-pointer hover:text-blue-400',
                  onClick: () => {
                    n('content');
                  },
                  children: 'About',
                }),
                W.jsx('div', {
                  className:
                    'mt-10  text-5xl cursor-pointer hover:text-amber-400',
                  onClick: () => {
                    n('contact');
                  },
                  children: 'Contact',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const bs = {
  about: 'Transitioning from the field of psychology to frontend development',
  about_1: 'I embarked on a journey of conversing with code.',
  about_first:
    "Hello,I'm Elaine Chen, a frontend developer with 1 years of experience.",
  about_first_1: 'My expertise lies in developing B2B and B2C products,',
  about_first_2:
    ' using react.js, Next.js, and Vite, taking products from 0 to 1.',
  about_second:
    'Additionally, I have a knack for designing smooth web flows and interfaces, crafting products with excellent UX',
  about_second_1:
    "I'm passionate about leveraging these skills to help my clients unleash their full potential",
  about_third:
    "I majored in psychology in university and continue to explore knowledge in counseling, child protection, and animal conservation in my spare time. If there's any opportunity for collaboration, feel free to reach out!",
  about_skills:
    ' Here are the technical skills I consider myself proficient in:',
};
function y$() {
  return W.jsx(W.Fragment, {
    children: W.jsx('div', {
      className: 'bg-black  text-white ',
      children: W.jsxs('div', {
        className: 'about-text',
        style: { fontFamily: 'fantasy' },
        children: [
          W.jsx('p', { children: bs.about }),
          W.jsx('p', { children: bs.about_1 }),
          W.jsx('p', { className: 'mt-6', children: bs.about_first }),
          W.jsx('p', { className: 'mt-5 ', children: bs.click }),
        ],
      }),
    }),
  });
}
function vu(e, t, n, r) {
  return new (n || (n = Promise))(function (o, i) {
    function a(c) {
      try {
        s(r.next(c));
      } catch (f) {
        i(f);
      }
    }
    function l(c) {
      try {
        s(r.throw(c));
      } catch (f) {
        i(f);
      }
    }
    function s(c) {
      var f;
      c.done
        ? o(c.value)
        : ((f = c.value),
          f instanceof n
            ? f
            : new n(function (d) {
                d(f);
              })).then(a, l);
    }
    s((r = r.apply(e, t || [])).next());
  });
}
function Co(e, t) {
  var n,
    r,
    o,
    i,
    a = {
      label: 0,
      sent: function () {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (i = { next: l(0), throw: l(1), return: l(2) }),
    typeof Symbol == 'function' &&
      (i[Symbol.iterator] = function () {
        return this;
      }),
    i
  );
  function l(s) {
    return function (c) {
      return (function (f) {
        if (n) throw new TypeError('Generator is already executing.');
        for (; a; )
          try {
            if (
              ((n = 1),
              r &&
                (o =
                  2 & f[0]
                    ? r.return
                    : f[0]
                      ? r.throw || ((o = r.return) && o.call(r), 0)
                      : r.next) &&
                !(o = o.call(r, f[1])).done)
            )
              return o;
            switch (((r = 0), o && (f = [2 & f[0], o.value]), f[0])) {
              case 0:
              case 1:
                o = f;
                break;
              case 4:
                return a.label++, { value: f[1], done: !1 };
              case 5:
                a.label++, (r = f[1]), (f = [0]);
                continue;
              case 7:
                (f = a.ops.pop()), a.trys.pop();
                continue;
              default:
                if (
                  ((o = a.trys),
                  !(
                    (o = o.length > 0 && o[o.length - 1]) ||
                    (f[0] !== 6 && f[0] !== 2)
                  ))
                ) {
                  a = 0;
                  continue;
                }
                if (f[0] === 3 && (!o || (f[1] > o[0] && f[1] < o[3]))) {
                  a.label = f[1];
                  break;
                }
                if (f[0] === 6 && a.label < o[1]) {
                  (a.label = o[1]), (o = f);
                  break;
                }
                if (o && a.label < o[2]) {
                  (a.label = o[2]), a.ops.push(f);
                  break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            f = t.call(e, a);
          } catch (d) {
            (f = [6, d]), (r = 0);
          } finally {
            n = o = 0;
          }
        if (5 & f[0]) throw f[1];
        return { value: f[0] ? f[1] : void 0, done: !0 };
      })([s, c]);
    };
  }
}
function Yd(e) {
  var t = typeof Symbol == 'function' && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == 'number')
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
  );
}
function rr(e, t) {
  var n = typeof Symbol == 'function' && e[Symbol.iterator];
  if (!n) return e;
  var r,
    o,
    i = n.call(e),
    a = [];
  try {
    for (; (t === void 0 || t-- > 0) && !(r = i.next()).done; ) a.push(r.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      r && !r.done && (n = i.return) && n.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function mr(e, t, n) {
  if (n || arguments.length === 2)
    for (var r, o = 0, i = t.length; o < i; o++)
      (!r && o in t) ||
        (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
  return e.concat(r || Array.prototype.slice.call(t));
}
function nh(e, t, n, r, o) {
  for (var i = [], a = 5; a < arguments.length; a++) i[a - 5] = arguments[a];
  return vu(this, void 0, void 0, function () {
    var l, s, c, f, d, v;
    return Co(this, function (h) {
      switch (h.label) {
        case 0:
          h.trys.push([0, 12, 13, 14]),
            (l = Yd(i)),
            (s = l.next()),
            (h.label = 1);
        case 1:
          if (s.done) return [3, 11];
          switch (((c = s.value), typeof c)) {
            case 'string':
              return [3, 2];
            case 'number':
              return [3, 4];
            case 'function':
              return [3, 6];
          }
          return [3, 8];
        case 2:
          return [4, b$(e, t, c, n, r, o)];
        case 3:
          return h.sent(), [3, 10];
        case 4:
          return [4, Sb(c)];
        case 5:
          return h.sent(), [3, 10];
        case 6:
          return [4, c.apply(void 0, mr([e, t, n, r, o], rr(i), !1))];
        case 7:
          return h.sent(), [3, 10];
        case 8:
          return [4, c];
        case 9:
          h.sent(), (h.label = 10);
        case 10:
          return (s = l.next()), [3, 1];
        case 11:
          return [3, 14];
        case 12:
          return (f = h.sent()), (d = { error: f }), [3, 14];
        case 13:
          try {
            s && !s.done && (v = l.return) && v.call(l);
          } finally {
            if (d) throw d.error;
          }
          return [7];
        case 14:
          return [2];
      }
    });
  });
}
function b$(e, t, n, r, o, i) {
  return vu(this, void 0, void 0, function () {
    var a, l;
    return Co(this, function (s) {
      switch (s.label) {
        case 0:
          return (
            (a = e.textContent || ''),
            (l = (function (c, f) {
              var d = rr(f).slice(0);
              return mr(mr([], rr(c), !1), [NaN], !1).findIndex(
                function (v, h) {
                  return d[h] !== v;
                }
              );
            })(a, n)),
            [
              4,
              C$(
                e,
                mr(mr([], rr(w$(a, t, l)), !1), rr(S$(n, t, l)), !1),
                r,
                o,
                i
              ),
            ]
          );
        case 1:
          return s.sent(), [2];
      }
    });
  });
}
function Sb(e) {
  return vu(this, void 0, void 0, function () {
    return Co(this, function (t) {
      switch (t.label) {
        case 0:
          return [
            4,
            new Promise(function (n) {
              return setTimeout(n, e);
            }),
          ];
        case 1:
          return t.sent(), [2];
      }
    });
  });
}
function C$(e, t, n, r, o) {
  return vu(this, void 0, void 0, function () {
    var i, a, l, s, c, f, d, v, h, b, y, S, p;
    return Co(this, function (m) {
      switch (m.label) {
        case 0:
          if (((i = t), o)) {
            for (a = 0, l = 1; l < t.length; l++)
              if (
                ((s = rr([t[l - 1], t[l]], 2)),
                (c = s[0]),
                (f = s[1]).length > c.length || f === '')
              ) {
                a = l;
                break;
              }
            i = t.slice(a, t.length);
          }
          m.label = 1;
        case 1:
          m.trys.push([1, 6, 7, 8]),
            (d = Yd(
              (function (g) {
                var C, E, w, x, O, P, _;
                return Co(this, function (M) {
                  switch (M.label) {
                    case 0:
                      (C = function (L) {
                        return Co(this, function (R) {
                          switch (R.label) {
                            case 0:
                              return [
                                4,
                                {
                                  op: function (D) {
                                    return requestAnimationFrame(function () {
                                      return (D.textContent = L);
                                    });
                                  },
                                  opCode: function (D) {
                                    var B = D.textContent || '';
                                    return L === '' || B.length > L.length
                                      ? 'DELETE'
                                      : 'WRITING';
                                  },
                                },
                              ];
                            case 1:
                              return R.sent(), [2];
                          }
                        });
                      }),
                        (M.label = 1);
                    case 1:
                      M.trys.push([1, 6, 7, 8]),
                        (E = Yd(g)),
                        (w = E.next()),
                        (M.label = 2);
                    case 2:
                      return w.done ? [3, 5] : ((x = w.value), [5, C(x)]);
                    case 3:
                      M.sent(), (M.label = 4);
                    case 4:
                      return (w = E.next()), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (O = M.sent()), (P = { error: O }), [3, 8];
                    case 7:
                      try {
                        w && !w.done && (_ = E.return) && _.call(E);
                      } finally {
                        if (P) throw P.error;
                      }
                      return [7];
                    case 8:
                      return [2];
                  }
                });
              })(i)
            )),
            (v = d.next()),
            (m.label = 2);
        case 2:
          return v.done
            ? [3, 5]
            : ((h = v.value),
              (b =
                h.opCode(e) === 'WRITING'
                  ? n + n * (Math.random() - 0.5)
                  : r + r * (Math.random() - 0.5)),
              h.op(e),
              [4, Sb(b)]);
        case 3:
          m.sent(), (m.label = 4);
        case 4:
          return (v = d.next()), [3, 2];
        case 5:
          return [3, 8];
        case 6:
          return (y = m.sent()), (S = { error: y }), [3, 8];
        case 7:
          try {
            v && !v.done && (p = d.return) && p.call(d);
          } finally {
            if (S) throw S.error;
          }
          return [7];
        case 8:
          return [2];
      }
    });
  });
}
function S$(e, t, n) {
  var r, o;
  return (
    n === void 0 && (n = 0),
    Co(this, function (i) {
      switch (i.label) {
        case 0:
          (r = t(e)), (o = r.length), (i.label = 1);
        case 1:
          return n < o ? [4, r.slice(0, ++n).join('')] : [3, 3];
        case 2:
          return i.sent(), [3, 1];
        case 3:
          return [2];
      }
    })
  );
}
function w$(e, t, n) {
  var r, o;
  return (
    n === void 0 && (n = 0),
    Co(this, function (i) {
      switch (i.label) {
        case 0:
          (r = t(e)), (o = r.length), (i.label = 1);
        case 1:
          return o > n ? [4, r.slice(0, --o).join('')] : [3, 3];
        case 2:
          return i.sent(), [3, 1];
        case 3:
          return [2];
      }
    })
  );
}
var x$ = 'index-module_type__E-SaG';
(function (e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (e && typeof document < 'u') {
    var r = document.head || document.getElementsByTagName('head')[0],
      o = document.createElement('style');
    (o.type = 'text/css'),
      n === 'top' && r.firstChild
        ? r.insertBefore(o, r.firstChild)
        : r.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(document.createTextNode(e));
  }
})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);
var Cs = u.memo(
  u.forwardRef(function (e, t) {
    var n = e.sequence,
      r = e.repeat,
      o = e.className,
      i = e.speed,
      a = i === void 0 ? 40 : i,
      l = e.deletionSpeed,
      s = e.omitDeletionAnimation,
      c = s !== void 0 && s,
      f = e.preRenderFirstString,
      d = f !== void 0 && f,
      v = e.wrapper,
      h = v === void 0 ? 'span' : v,
      b = e.splitter,
      y =
        b === void 0
          ? function (I) {
              return mr([], rr(I), !1);
            }
          : b,
      S = e.cursor,
      p = S === void 0 || S,
      m = e.style,
      g = (function (I, F) {
        var A = {};
        for (var V in I)
          Object.prototype.hasOwnProperty.call(I, V) &&
            F.indexOf(V) < 0 &&
            (A[V] = I[V]);
        if (I != null && typeof Object.getOwnPropertySymbols == 'function') {
          var U = 0;
          for (V = Object.getOwnPropertySymbols(I); U < V.length; U++)
            F.indexOf(V[U]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(I, V[U]) &&
              (A[V[U]] = I[V[U]]);
        }
        return A;
      })(e, [
        'sequence',
        'repeat',
        'className',
        'speed',
        'deletionSpeed',
        'omitDeletionAnimation',
        'preRenderFirstString',
        'wrapper',
        'splitter',
        'cursor',
        'style',
      ]),
      C = g['aria-label'],
      E = g['aria-hidden'],
      w = g.role;
    l || (l = a);
    var x = new Array(2).fill(40);
    [a, l].forEach(function (I, F) {
      switch (typeof I) {
        case 'number':
          x[F] = Math.abs(I - 100);
          break;
        case 'object':
          var A = I.type,
            V = I.value;
          if (typeof V != 'number') break;
          A === 'keyStrokeDelayInMs' && (x[F] = V);
      }
    });
    var O,
      P,
      _,
      M,
      L,
      R,
      D = x[0],
      B = x[1],
      k = (function (I, F) {
        F === void 0 && (F = null);
        var A = u.useRef(F);
        return (
          u.useEffect(
            function () {
              I &&
                (typeof I == 'function'
                  ? I(A.current)
                  : (I.current = A.current));
            },
            [I]
          ),
          A
        );
      })(t),
      T = x$;
    (O = o ? ''.concat(p ? T + ' ' : '').concat(o) : p ? T : ''),
      (P = u.useRef(function () {
        var I,
          F = n;
        r === 1 / 0
          ? (I = nh)
          : typeof r == 'number' &&
            (F = Array(1 + r)
              .fill(n)
              .flat());
        var A = I ? mr(mr([], rr(F), !1), [I], !1) : mr([], rr(F), !1);
        return (
          nh.apply(void 0, mr([k.current, y, D, B, c], rr(A), !1)),
          function () {
            k.current;
          }
        );
      })),
      (_ = u.useRef()),
      (M = u.useRef(!1)),
      (L = u.useRef(!1)),
      (R = rr(u.useState(0), 2)[1]),
      M.current && (L.current = !0),
      u.useEffect(function () {
        return (
          M.current || ((_.current = P.current()), (M.current = !0)),
          R(function (I) {
            return I + 1;
          }),
          function () {
            L.current && _.current && _.current();
          }
        );
      }, []);
    var $ = h,
      N = d
        ? n.find(function (I) {
            return typeof I == 'string';
          }) || ''
        : null;
    return G.createElement($, {
      'aria-hidden': E,
      'aria-label': C,
      role: w,
      style: m,
      className: O,
      children: C
        ? G.createElement('span', {
            'aria-hidden': 'true',
            ref: k,
            children: N,
          })
        : N,
      ref: C ? void 0 : k,
    });
  }),
  function (e, t) {
    return !0;
  }
);
function E$() {
  const [e, t] = u.useState(!1),
    [n, r] = u.useState(!1),
    [o, i] = u.useState(!1),
    [a, l] = u.useState(!1);
  return W.jsx(W.Fragment, {
    children: W.jsxs('div', {
      id: 'content',
      className: ' text-white  bg-black mt-48',
      children: [
        W.jsx('p', { className: 'text-white text-4xl ', children: 'About' }),
        W.jsxs('p', {
          className: 'text-2xl  mt-10',
          children: [
            'Click Brain,Try it.  ',
            W.jsx('lord-icon', {
              src: 'https://cdn.lordicon.com/gyynjgtu.json',
              trigger: 'hover',
              colors: 'primary:#eee966,secondary:#eeaa66',
              style: { width: '40px', height: '40px', marginBottom: '-10px' },
            }),
          ],
        }),
        W.jsxs('div', {
          className: 'image-container',
          style: {
            position: 'relative',
            height: '900px',
            backgroundColor: 'black',
          },
          children: [
            W.jsx('img', {
              src: 'image/front.png',
              className: 'image front hover:scale-110 transition duration-600',
              onClick: () => t(!0),
            }),
            e
              ? W.jsx(W.Fragment, {
                  children: W.jsx('div', {
                    className: 'front-brain',
                    children: W.jsx('p', {
                      children: W.jsx(Cs, {
                        splitter: (s) => s.split(/(?= )/),
                        sequence: [
                          'I specialize in developing B2B and B2C products, ex. educational systems,research center data computing and else. Using react.js, Next.js, and Vite. ',
                          3e3,
                        ],
                        speed: { type: 'keyStrokeDelayInMs', value: 90 },
                        omitDeletionAnimation: !0,
                        style: {
                          display: 'block',
                          minHeight: '200px',
                          color: '	#FF8F59',
                          fontWeight: '500',
                        },
                      }),
                    }),
                  }),
                })
              : null,
            W.jsx('img', {
              src: 'image/temporal.png',
              className:
                'image temporal hover:scale-110 transition duration-600',
              onClick: () => i(!0),
            }),
            o
              ? W.jsx(W.Fragment, {
                  children: W.jsx('div', {
                    className: 'temporal-brain',
                    children: W.jsx('p', {
                      children: W.jsx(Cs, {
                        splitter: (s) => s.split(/(?= )/),
                        sequence: [
                          'Efficient communication and problem-solving.constantly improving my technical abilities.  My psychology background enriches my understanding of human-computer interaction and UX design concepts.',
                          3e3,
                        ],
                        speed: { type: 'keyStrokeDelayInMs', value: 90 },
                        omitDeletionAnimation: !0,
                        style: {
                          display: 'block',
                          minHeight: '200px',
                          color: '#84C1FF',
                          fontWeight: '500',
                        },
                      }),
                    }),
                  }),
                })
              : null,
            W.jsx('img', {
              src: 'image/parietal.png',
              className:
                'image parietal hover:scale-110 transition duration-600',
              onClick: () => r(!0),
            }),
            n
              ? W.jsx(W.Fragment, {
                  children: W.jsx('div', {
                    className: 'parietial-brain',
                    children: W.jsx('p', {
                      children: W.jsx(Cs, {
                        splitter: (s) => s.split(/(?= )/),
                        sequence: [
                          'I focus on crafting smooth web flows and user-friendly interfaces. By collaborating closely with clients, I translate their needs into designs, bringing their vision to life from concept to finished product.',
                          3e3,
                        ],
                        speed: { type: 'keyStrokeDelayInMs', value: 90 },
                        omitDeletionAnimation: !0,
                        style: {
                          display: 'block',
                          minHeight: '200px',
                          color: '	#FFFFAA',
                          fontWeight: '500',
                        },
                      }),
                    }),
                  }),
                })
              : null,
            W.jsx('img', {
              src: 'image/occipital.png',
              className:
                'image occipital hover:scale-110 transition duration-600',
              onClick: () => l(!0),
            }),
            a
              ? W.jsx(W.Fragment, {
                  children: W.jsx('div', {
                    className: 'occipital-brain',
                    children: W.jsx('p', {
                      children: W.jsx(Cs, {
                        splitter: (s) => s.split(/(?= )/),
                        sequence: [
                          ' So,if you need frontend development, interface design, web consultation, or collaboration in the field of psychology, contact me!',
                          3e3,
                        ],
                        speed: { type: 'keyStrokeDelayInMs', value: 90 },
                        omitDeletionAnimation: !0,
                        style: {
                          display: 'block',
                          minHeight: '200px',
                          color: '	#53FF53',
                          fontWeight: '500',
                        },
                      }),
                    }),
                  }),
                })
              : null,
          ],
        }),
      ],
    }),
  });
}
var wb = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = '', a = 0; a < arguments.length; a++) {
        var l = arguments[a];
        l && (i = o(i, r(l)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == 'string' || typeof i == 'number') return i;
      if (typeof i != 'object') return '';
      if (Array.isArray(i)) return n.apply(null, i);
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes('[native code]')
      )
        return i.toString();
      var a = '';
      for (var l in i) t.call(i, l) && i[l] && (a = o(a, l));
      return a;
    }
    function o(i, a) {
      return a ? (i ? i + ' ' + a : i + a) : i;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(wb);
var $$ = wb.exports;
const q = Kc($$);
function ue() {
  return (
    (ue = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ue.apply(this, arguments)
  );
}
var xb = { exports: {} },
  Ve = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Um = Symbol.for('react.element'),
  Km = Symbol.for('react.portal'),
  mu = Symbol.for('react.fragment'),
  pu = Symbol.for('react.strict_mode'),
  gu = Symbol.for('react.profiler'),
  hu = Symbol.for('react.provider'),
  yu = Symbol.for('react.context'),
  O$ = Symbol.for('react.server_context'),
  bu = Symbol.for('react.forward_ref'),
  Cu = Symbol.for('react.suspense'),
  Su = Symbol.for('react.suspense_list'),
  wu = Symbol.for('react.memo'),
  xu = Symbol.for('react.lazy'),
  P$ = Symbol.for('react.offscreen'),
  Eb;
Eb = Symbol.for('react.module.reference');
function Kn(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Um:
        switch (((e = e.type), e)) {
          case mu:
          case gu:
          case pu:
          case Cu:
          case Su:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case O$:
              case yu:
              case bu:
              case xu:
              case wu:
              case hu:
                return e;
              default:
                return t;
            }
        }
      case Km:
        return t;
    }
  }
}
Ve.ContextConsumer = yu;
Ve.ContextProvider = hu;
Ve.Element = Um;
Ve.ForwardRef = bu;
Ve.Fragment = mu;
Ve.Lazy = xu;
Ve.Memo = wu;
Ve.Portal = Km;
Ve.Profiler = gu;
Ve.StrictMode = pu;
Ve.Suspense = Cu;
Ve.SuspenseList = Su;
Ve.isAsyncMode = function () {
  return !1;
};
Ve.isConcurrentMode = function () {
  return !1;
};
Ve.isContextConsumer = function (e) {
  return Kn(e) === yu;
};
Ve.isContextProvider = function (e) {
  return Kn(e) === hu;
};
Ve.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Um;
};
Ve.isForwardRef = function (e) {
  return Kn(e) === bu;
};
Ve.isFragment = function (e) {
  return Kn(e) === mu;
};
Ve.isLazy = function (e) {
  return Kn(e) === xu;
};
Ve.isMemo = function (e) {
  return Kn(e) === wu;
};
Ve.isPortal = function (e) {
  return Kn(e) === Km;
};
Ve.isProfiler = function (e) {
  return Kn(e) === gu;
};
Ve.isStrictMode = function (e) {
  return Kn(e) === pu;
};
Ve.isSuspense = function (e) {
  return Kn(e) === Cu;
};
Ve.isSuspenseList = function (e) {
  return Kn(e) === Su;
};
Ve.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === mu ||
    e === gu ||
    e === pu ||
    e === Cu ||
    e === Su ||
    e === P$ ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === xu ||
        e.$$typeof === wu ||
        e.$$typeof === hu ||
        e.$$typeof === yu ||
        e.$$typeof === bu ||
        e.$$typeof === Eb ||
        e.getModuleId !== void 0))
  );
};
Ve.typeOf = Kn;
xb.exports = Ve;
var Gs = xb.exports;
function ri(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = [];
  return (
    G.Children.forEach(e, function (r) {
      (r == null && !t.keepEmpty) ||
        (Array.isArray(r)
          ? (n = n.concat(ri(r)))
          : Gs.isFragment(r) && r.props
            ? (n = n.concat(ri(r.props.children, t)))
            : n.push(r));
    }),
    n
  );
}
var Zd = {},
  R$ = function (t) {};
function T$(e, t) {}
function _$(e, t) {}
function M$() {
  Zd = {};
}
function $b(e, t, n) {
  !t && !Zd[n] && (e(!1, n), (Zd[n] = !0));
}
function on(e, t) {
  $b(T$, e, t);
}
function I$(e, t) {
  $b(_$, e, t);
}
on.preMessage = R$;
on.resetWarned = M$;
on.noteOnce = I$;
function ke(e) {
  '@babel/helpers - typeof';
  return (
    (ke =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    ke(e)
  );
}
function k$(e, t) {
  if (ke(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (ke(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Ob(e) {
  var t = k$(e, 'string');
  return ke(t) == 'symbol' ? t : String(t);
}
function j(e, t, n) {
  return (
    (t = Ob(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function rh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rh(Object(n), !0).forEach(function (r) {
          j(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rh(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Ic(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function qs(e) {
  return Ic(e) ? e : e instanceof G.Component ? lb.findDOMNode(e) : null;
}
function Eu(e, t, n) {
  var r = u.useRef({});
  return (
    (!('value' in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  );
}
function Gm(e, t) {
  typeof e == 'function'
    ? e(t)
    : ke(e) === 'object' && e && 'current' in e && (e.current = t);
}
function ci() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t.filter(function (o) {
    return o;
  });
  return r.length <= 1
    ? r[0]
    : function (o) {
        t.forEach(function (i) {
          Gm(i, o);
        });
      };
}
function Ca() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Eu(
    function () {
      return ci.apply(void 0, t);
    },
    t,
    function (r, o) {
      return (
        r.length !== o.length ||
        r.every(function (i, a) {
          return i !== o[a];
        })
      );
    }
  );
}
function ui(e) {
  var t,
    n,
    r = Gs.isMemo(e) ? e.type.type : e.type;
  return !(
    (typeof r == 'function' &&
      !((t = r.prototype) !== null && t !== void 0 && t.render) &&
      r.$$typeof !== Gs.ForwardRef) ||
    (typeof e == 'function' &&
      !((n = e.prototype) !== null && n !== void 0 && n.render) &&
      e.$$typeof !== Gs.ForwardRef)
  );
}
var Jd = u.createContext(null);
function N$(e) {
  var t = e.children,
    n = e.onBatchResize,
    r = u.useRef(0),
    o = u.useRef([]),
    i = u.useContext(Jd),
    a = u.useCallback(
      function (l, s, c) {
        r.current += 1;
        var f = r.current;
        o.current.push({ size: l, element: s, data: c }),
          Promise.resolve().then(function () {
            f === r.current && (n == null || n(o.current), (o.current = []));
          }),
          i == null || i(l, s, c);
      },
      [n, i]
    );
  return u.createElement(Jd.Provider, { value: a }, t);
}
var Pb = (function () {
    if (typeof Map < 'u') return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (o, i) {
          return o[0] === n ? ((r = i), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, 'size', {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            o = this.__entries__[r];
          return o && o[1];
        }),
        (t.prototype.set = function (n, r) {
          var o = e(this.__entries__, n);
          ~o ? (this.__entries__[o][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            o = e(r, n);
          ~o && r.splice(o, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var o = 0, i = this.__entries__; o < i.length; o++) {
            var a = i[o];
            n.call(r, a[1], a[0]);
          }
        }),
        t
      );
    })();
  })(),
  ev =
    typeof window < 'u' &&
    typeof document < 'u' &&
    window.document === document,
  kc = (function () {
    return typeof global < 'u' && global.Math === Math
      ? global
      : typeof self < 'u' && self.Math === Math
        ? self
        : typeof window < 'u' && window.Math === Math
          ? window
          : Function('return this')();
  })(),
  j$ = (function () {
    return typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame.bind(kc)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  L$ = 2;
function F$(e, t) {
  var n = !1,
    r = !1,
    o = 0;
  function i() {
    n && ((n = !1), e()), r && l();
  }
  function a() {
    j$(i);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - o < L$) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(a, t);
    o = s;
  }
  return l;
}
var A$ = 20,
  z$ = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  D$ = typeof MutationObserver < 'u',
  B$ = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = F$(this.refresh.bind(this), A$));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !ev ||
          this.connected_ ||
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          D$
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !ev ||
          !this.connected_ ||
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? '' : n,
          o = z$.some(function (i) {
            return !!~r.indexOf(i);
          });
        o && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  Rb = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var o = r[n];
      Object.defineProperty(e, o, {
        value: t[o],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  ca = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || kc;
  },
  Tb = $u(0, 0, 0, 0);
function Nc(e) {
  return parseFloat(e) || 0;
}
function oh(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, o) {
    var i = e['border-' + o + '-width'];
    return r + Nc(i);
  }, 0);
}
function H$(e) {
  for (
    var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, o = t;
    r < o.length;
    r++
  ) {
    var i = o[r],
      a = e['padding-' + i];
    n[i] = Nc(a);
  }
  return n;
}
function V$(e) {
  var t = e.getBBox();
  return $u(0, 0, t.width, t.height);
}
function W$(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return Tb;
  var r = ca(e).getComputedStyle(e),
    o = H$(r),
    i = o.left + o.right,
    a = o.top + o.bottom,
    l = Nc(r.width),
    s = Nc(r.height);
  if (
    (r.boxSizing === 'border-box' &&
      (Math.round(l + i) !== t && (l -= oh(r, 'left', 'right') + i),
      Math.round(s + a) !== n && (s -= oh(r, 'top', 'bottom') + a)),
    !K$(e))
  ) {
    var c = Math.round(l + i) - t,
      f = Math.round(s + a) - n;
    Math.abs(c) !== 1 && (l -= c), Math.abs(f) !== 1 && (s -= f);
  }
  return $u(o.left, o.top, l, s);
}
var U$ = (function () {
  return typeof SVGGraphicsElement < 'u'
    ? function (e) {
        return e instanceof ca(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof ca(e).SVGElement && typeof e.getBBox == 'function';
      };
})();
function K$(e) {
  return e === ca(e).document.documentElement;
}
function G$(e) {
  return ev ? (U$(e) ? V$(e) : W$(e)) : Tb;
}
function q$(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    o = e.height,
    i = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
    a = Object.create(i.prototype);
  return (
    Rb(a, {
      x: t,
      y: n,
      width: r,
      height: o,
      top: n,
      right: t + r,
      bottom: o + n,
      left: t,
    }),
    a
  );
}
function $u(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var X$ = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = $u(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = G$(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  Q$ = (function () {
    function e(t, n) {
      var r = q$(n);
      Rb(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  Y$ = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Pb()),
        typeof t != 'function')
      )
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.'
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof ca(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new X$(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.');
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof ca(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new Q$(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  _b = typeof WeakMap < 'u' ? new WeakMap() : new Pb(),
  Mb = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError('Cannot call a class as a function.');
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.');
      var n = B$.getInstance(),
        r = new Y$(t, n, this);
      _b.set(this, r);
    }
    return e;
  })();
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
  Mb.prototype[e] = function () {
    var t;
    return (t = _b.get(this))[e].apply(t, arguments);
  };
});
var Z$ = (function () {
    return typeof kc.ResizeObserver < 'u' ? kc.ResizeObserver : Mb;
  })(),
  so = new Map();
function J$(e) {
  e.forEach(function (t) {
    var n,
      r = t.target;
    (n = so.get(r)) === null ||
      n === void 0 ||
      n.forEach(function (o) {
        return o(r);
      });
  });
}
var Ib = new Z$(J$);
function eO(e, t) {
  so.has(e) || (so.set(e, new Set()), Ib.observe(e)), so.get(e).add(t);
}
function tO(e, t) {
  so.has(e) &&
    (so.get(e).delete(t), so.get(e).size || (Ib.unobserve(e), so.delete(e)));
}
function hn(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function ih(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, Ob(r.key), r);
  }
}
function yn(e, t, n) {
  return (
    t && ih(e.prototype, t),
    n && ih(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function tv(e, t) {
  return (
    (tv = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    tv(e, t)
  );
}
function fi(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && tv(e, t);
}
function ua(e) {
  return (
    (ua = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    ua(e)
  );
}
function qm() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (qm = function () {
    return !!e;
  })();
}
function Ne(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function kb(e, t) {
  if (t && (ke(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return Ne(e);
}
function zl(e) {
  var t = qm();
  return function () {
    var r = ua(e),
      o;
    if (t) {
      var i = ua(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return kb(this, o);
  };
}
var nO = (function (e) {
  fi(n, e);
  var t = zl(n);
  function n() {
    return hn(this, n), t.apply(this, arguments);
  }
  return (
    yn(n, [
      {
        key: 'render',
        value: function () {
          return this.props.children;
        },
      },
    ]),
    n
  );
})(u.Component);
function rO(e, t) {
  var n = e.children,
    r = e.disabled,
    o = u.useRef(null),
    i = u.useRef(null),
    a = u.useContext(Jd),
    l = typeof n == 'function',
    s = l ? n(o) : n,
    c = u.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
    f = !l && u.isValidElement(s) && ui(s),
    d = f ? s.ref : null,
    v = Ca(d, o),
    h = function () {
      var p;
      return (
        qs(o.current) ||
        (o.current && ke(o.current) === 'object'
          ? qs(
              (p = o.current) === null || p === void 0
                ? void 0
                : p.nativeElement
            )
          : null) ||
        qs(i.current)
      );
    };
  u.useImperativeHandle(t, function () {
    return h();
  });
  var b = u.useRef(e);
  b.current = e;
  var y = u.useCallback(function (S) {
    var p = b.current,
      m = p.onResize,
      g = p.data,
      C = S.getBoundingClientRect(),
      E = C.width,
      w = C.height,
      x = S.offsetWidth,
      O = S.offsetHeight,
      P = Math.floor(E),
      _ = Math.floor(w);
    if (
      c.current.width !== P ||
      c.current.height !== _ ||
      c.current.offsetWidth !== x ||
      c.current.offsetHeight !== O
    ) {
      var M = { width: P, height: _, offsetWidth: x, offsetHeight: O };
      c.current = M;
      var L = x === Math.round(E) ? E : x,
        R = O === Math.round(w) ? w : O,
        D = z(z({}, M), {}, { offsetWidth: L, offsetHeight: R });
      a == null || a(D, S, g),
        m &&
          Promise.resolve().then(function () {
            m(D, S);
          });
    }
  }, []);
  return (
    u.useEffect(
      function () {
        var S = h();
        return (
          S && !r && eO(S, y),
          function () {
            return tO(S, y);
          }
        );
      },
      [o.current, r]
    ),
    u.createElement(nO, { ref: i }, f ? u.cloneElement(s, { ref: v }) : s)
  );
}
var oO = u.forwardRef(rO),
  iO = 'rc-observer-key';
function aO(e, t) {
  var n = e.children,
    r = typeof n == 'function' ? [n] : ri(n);
  return r.map(function (o, i) {
    var a = (o == null ? void 0 : o.key) || ''.concat(iO, '-').concat(i);
    return u.createElement(
      oO,
      ue({}, e, { key: a, ref: i === 0 ? t : void 0 }),
      o
    );
  });
}
var Nr = u.forwardRef(aO);
Nr.Collection = N$;
function di(e, t) {
  var n = z({}, e);
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r];
      }),
    n
  );
}
function nv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function lO(e) {
  if (Array.isArray(e)) return nv(e);
}
function Nb(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function Xm(e, t) {
  if (e) {
    if (typeof e == 'string') return nv(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return nv(e, t);
  }
}
function sO() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ae(e) {
  return lO(e) || Nb(e) || Xm(e) || sO();
}
var jb = function (t) {
    return +setTimeout(t, 16);
  },
  Lb = function (t) {
    return clearTimeout(t);
  };
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((jb = function (t) {
    return window.requestAnimationFrame(t);
  }),
  (Lb = function (t) {
    return window.cancelAnimationFrame(t);
  }));
var ah = 0,
  Qm = new Map();
function Fb(e) {
  Qm.delete(e);
}
var Zt = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  ah += 1;
  var r = ah;
  function o(i) {
    if (i === 0) Fb(r), t();
    else {
      var a = jb(function () {
        o(i - 1);
      });
      Qm.set(r, a);
    }
  }
  return o(n), r;
};
Zt.cancel = function (e) {
  var t = Qm.get(e);
  return Fb(e), Lb(t);
};
function Ab(e) {
  if (Array.isArray(e)) return e;
}
function cO(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r,
      o,
      i,
      a,
      l = [],
      s = !0,
      c = !1;
    try {
      if (((i = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        s = !1;
      } else
        for (
          ;
          !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t);
          s = !0
        );
    } catch (f) {
      (c = !0), (o = f);
    } finally {
      try {
        if (!s && n.return != null && ((a = n.return()), Object(a) !== a))
          return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function zb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(e, t) {
  return Ab(e) || cO(e, t) || Xm(e, t) || zb();
}
function jc(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
function an() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  );
}
function rv(e, t) {
  if (!e) return !1;
  if (e.contains) return e.contains(t);
  for (var n = t; n; ) {
    if (n === e) return !0;
    n = n.parentNode;
  }
  return !1;
}
var lh = 'data-rc-order',
  sh = 'data-rc-priority',
  uO = 'rc-util-key',
  ov = new Map();
function Db() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark;
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : uO;
}
function Ou(e) {
  if (e.attachTo) return e.attachTo;
  var t = document.querySelector('head');
  return t || document.body;
}
function fO(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append';
}
function Ym(e) {
  return Array.from((ov.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE';
  });
}
function Bb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!an()) return null;
  var n = t.csp,
    r = t.prepend,
    o = t.priority,
    i = o === void 0 ? 0 : o,
    a = fO(r),
    l = a === 'prependQueue',
    s = document.createElement('style');
  s.setAttribute(lh, a),
    l && i && s.setAttribute(sh, ''.concat(i)),
    n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce),
    (s.innerHTML = e);
  var c = Ou(t),
    f = c.firstChild;
  if (r) {
    if (l) {
      var d = (t.styles || Ym(c)).filter(function (v) {
        if (!['prepend', 'prependQueue'].includes(v.getAttribute(lh)))
          return !1;
        var h = Number(v.getAttribute(sh) || 0);
        return i >= h;
      });
      if (d.length) return c.insertBefore(s, d[d.length - 1].nextSibling), s;
    }
    c.insertBefore(s, f);
  } else c.appendChild(s);
  return s;
}
function Hb(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Ou(t);
  return (t.styles || Ym(n)).find(function (r) {
    return r.getAttribute(Db(t)) === e;
  });
}
function fa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = Hb(e, t);
  if (n) {
    var r = Ou(t);
    r.removeChild(n);
  }
}
function dO(e, t) {
  var n = ov.get(e);
  if (!n || !rv(document, n)) {
    var r = Bb('', t),
      o = r.parentNode;
    ov.set(e, o), e.removeChild(r);
  }
}
function Br(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = Ou(n),
    o = Ym(r),
    i = z(z({}, n), {}, { styles: o });
  dO(r, i);
  var a = Hb(t, i);
  if (a) {
    var l, s;
    if (
      (l = i.csp) !== null &&
      l !== void 0 &&
      l.nonce &&
      a.nonce !== ((s = i.csp) === null || s === void 0 ? void 0 : s.nonce)
    ) {
      var c;
      a.nonce = (c = i.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var f = Bb(e, i);
  return f.setAttribute(Db(i), t), f;
}
function vO(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ae(e, t) {
  if (e == null) return {};
  var n = vO(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Pu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set();
  function o(i, a) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      s = r.has(i);
    if ((on(!s, 'Warning: There may be circular references'), s)) return !1;
    if (i === a) return !0;
    if (n && l > 1) return !1;
    r.add(i);
    var c = l + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length) return !1;
      for (var f = 0; f < i.length; f++) if (!o(i[f], a[f], c)) return !1;
      return !0;
    }
    if (i && a && ke(i) === 'object' && ke(a) === 'object') {
      var d = Object.keys(i);
      return d.length !== Object.keys(a).length
        ? !1
        : d.every(function (v) {
            return o(i[v], a[v], c);
          });
    }
    return !1;
  }
  return o(e, t);
}
var mO = '%';
function iv(e) {
  return e.join(mO);
}
var pO = (function () {
    function e(t) {
      hn(this, e),
        j(this, 'instanceId', void 0),
        j(this, 'cache', new Map()),
        (this.instanceId = t);
    }
    return (
      yn(e, [
        {
          key: 'get',
          value: function (n) {
            return this.opGet(iv(n));
          },
        },
        {
          key: 'opGet',
          value: function (n) {
            return this.cache.get(n) || null;
          },
        },
        {
          key: 'update',
          value: function (n, r) {
            return this.opUpdate(iv(n), r);
          },
        },
        {
          key: 'opUpdate',
          value: function (n, r) {
            var o = this.cache.get(n),
              i = r(o);
            i === null ? this.cache.delete(n) : this.cache.set(n, i);
          },
        },
      ]),
      e
    );
  })(),
  da = 'data-token-hash',
  ar = 'data-css-hash',
  co = '__cssinjs_instance__';
function gO() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < 'u' && document.head && document.body) {
    var t = document.body.querySelectorAll('style['.concat(ar, ']')) || [],
      n = document.head.firstChild;
    Array.from(t).forEach(function (o) {
      (o[co] = o[co] || e), o[co] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll('style['.concat(ar, ']'))).forEach(
      function (o) {
        var i = o.getAttribute(ar);
        if (r[i]) {
          if (o[co] === e) {
            var a;
            (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
          }
        } else r[i] = !0;
      }
    );
  }
  return new pO(e);
}
var hO = u.createContext({
  hashPriority: 'low',
  cache: gO(),
  defaultCache: !0,
});
const Ru = hO;
function yO(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var Zm = (function () {
  function e() {
    hn(this, e),
      j(this, 'cache', void 0),
      j(this, 'keys', void 0),
      j(this, 'cacheCallTimes', void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0);
  }
  return (
    yn(e, [
      {
        key: 'size',
        value: function () {
          return this.keys.length;
        },
      },
      {
        key: 'internalGet',
        value: function (n) {
          var r,
            o,
            i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            a = { map: this.cache };
          return (
            n.forEach(function (l) {
              if (!a) a = void 0;
              else {
                var s;
                a =
                  (s = a) === null ||
                  s === void 0 ||
                  (s = s.map) === null ||
                  s === void 0
                    ? void 0
                    : s.get(l);
              }
            }),
            (r = a) !== null &&
              r !== void 0 &&
              r.value &&
              i &&
              (a.value[1] = this.cacheCallTimes++),
            (o = a) === null || o === void 0 ? void 0 : o.value
          );
        },
      },
      {
        key: 'get',
        value: function (n) {
          var r;
          return (r = this.internalGet(n, !0)) === null || r === void 0
            ? void 0
            : r[0];
        },
      },
      {
        key: 'has',
        value: function (n) {
          return !!this.internalGet(n);
        },
      },
      {
        key: 'set',
        value: function (n, r) {
          var o = this;
          if (!this.has(n)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var i = this.keys.reduce(
                  function (c, f) {
                    var d = H(c, 2),
                      v = d[1];
                    return o.internalGet(f)[1] < v
                      ? [f, o.internalGet(f)[1]]
                      : c;
                  },
                  [this.keys[0], this.cacheCallTimes]
                ),
                a = H(i, 1),
                l = a[0];
              this.delete(l);
            }
            this.keys.push(n);
          }
          var s = this.cache;
          n.forEach(function (c, f) {
            if (f === n.length - 1)
              s.set(c, { value: [r, o.cacheCallTimes++] });
            else {
              var d = s.get(c);
              d ? d.map || (d.map = new Map()) : s.set(c, { map: new Map() }),
                (s = s.get(c).map);
            }
          });
        },
      },
      {
        key: 'deleteByPath',
        value: function (n, r) {
          var o = n.get(r[0]);
          if (r.length === 1) {
            var i;
            return (
              o.map ? n.set(r[0], { map: o.map }) : n.delete(r[0]),
              (i = o.value) === null || i === void 0 ? void 0 : i[0]
            );
          }
          var a = this.deleteByPath(o.map, r.slice(1));
          return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), a;
        },
      },
      {
        key: 'delete',
        value: function (n) {
          if (this.has(n))
            return (
              (this.keys = this.keys.filter(function (r) {
                return !yO(r, n);
              })),
              this.deleteByPath(this.cache, n)
            );
        },
      },
    ]),
    e
  );
})();
j(Zm, 'MAX_CACHE_SIZE', 20);
j(Zm, 'MAX_CACHE_OFFSET', 5);
var ch = 0,
  Vb = (function () {
    function e(t) {
      hn(this, e),
        j(this, 'derivatives', void 0),
        j(this, 'id', void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = ch),
        t.length === 0 && (t.length > 0, void 0),
        (ch += 1);
    }
    return (
      yn(e, [
        {
          key: 'getDerivativeToken',
          value: function (n) {
            return this.derivatives.reduce(
              function (r, o) {
                return o(n, r);
              },
              void 0
            );
          },
        },
      ]),
      e
    );
  })(),
  Tf = new Zm();
function av(e) {
  var t = Array.isArray(e) ? e : [e];
  return Tf.has(t) || Tf.set(t, new Vb(t)), Tf.get(t);
}
var bO = new WeakMap(),
  _f = {};
function CO(e, t) {
  for (var n = bO, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, new WeakMap()), (n = n.get(o));
  }
  return n.has(_f) || n.set(_f, e()), n.get(_f);
}
var uh = new WeakMap();
function ol(e) {
  var t = uh.get(e) || '';
  return (
    t ||
      (Object.keys(e).forEach(function (n) {
        var r = e[n];
        (t += n),
          r instanceof Vb
            ? (t += r.id)
            : r && ke(r) === 'object'
              ? (t += ol(r))
              : (t += r);
      }),
      uh.set(e, t)),
    t
  );
}
function fh(e, t) {
  return jc(''.concat(t, '_').concat(ol(e)));
}
var il = 'random-'
    .concat(Date.now(), '-')
    .concat(Math.random())
    .replace(/\./g, ''),
  Wb = '_bAmBoO_';
function SO(e, t, n) {
  if (an()) {
    var r, o;
    Br(e, il);
    var i = document.createElement('div');
    (i.style.position = 'fixed'),
      (i.style.left = '0'),
      (i.style.top = '0'),
      t == null || t(i),
      document.body.appendChild(i);
    var a = n
      ? n(i)
      : (r = getComputedStyle(i).content) === null || r === void 0
        ? void 0
        : r.includes(Wb);
    return (
      (o = i.parentNode) === null || o === void 0 || o.removeChild(i), fa(il), a
    );
  }
  return !1;
}
var Mf = void 0;
function wO() {
  return (
    Mf === void 0 &&
      (Mf = SO(
        '@layer '
          .concat(il, ' { .')
          .concat(il, ' { content: "')
          .concat(Wb, '"!important; } }'),
        function (e) {
          e.className = il;
        }
      )),
    Mf
  );
}
var lv = an();
function K(e) {
  return typeof e == 'number' ? ''.concat(e, 'px') : e;
}
function Lc(e, t, n) {
  var r,
    o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i) return e;
  var a = z(z({}, o), {}, ((r = {}), j(r, da, t), j(r, ar, n), r)),
    l = Object.keys(a)
      .map(function (s) {
        var c = a[s];
        return c ? ''.concat(s, '="').concat(c, '"') : null;
      })
      .filter(function (s) {
        return s;
      })
      .join(' ');
  return '<style '.concat(l, '>').concat(e, '</style>');
}
var Ub = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    return '--'
      .concat(n ? ''.concat(n, '-') : '')
      .concat(t)
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
      .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
      .toLowerCase();
  },
  xO = function (t, n, r) {
    return Object.keys(t).length
      ? '.'
          .concat(n)
          .concat(r != null && r.scope ? '.'.concat(r.scope) : '', '{')
          .concat(
            Object.entries(t)
              .map(function (o) {
                var i = H(o, 2),
                  a = i[0],
                  l = i[1];
                return ''.concat(a, ':').concat(l, ';');
              })
              .join(''),
            '}'
          )
      : '';
  },
  Kb = function (t, n, r) {
    var o = {},
      i = {};
    return (
      Object.entries(t).forEach(function (a) {
        var l,
          s,
          c = H(a, 2),
          f = c[0],
          d = c[1];
        if (r != null && (l = r.preserve) !== null && l !== void 0 && l[f])
          i[f] = d;
        else if (
          (typeof d == 'string' || typeof d == 'number') &&
          !(r != null && (s = r.ignore) !== null && s !== void 0 && s[f])
        ) {
          var v,
            h = Ub(f, r == null ? void 0 : r.prefix);
          (o[h] =
            typeof d == 'number' &&
            !(r != null && (v = r.unitless) !== null && v !== void 0 && v[f])
              ? ''.concat(d, 'px')
              : String(d)),
            (i[f] = 'var('.concat(h, ')'));
        }
      }),
      [i, xO(o, n, { scope: r == null ? void 0 : r.scope })]
    );
  },
  dh = an() ? u.useLayoutEffect : u.useEffect,
  Bt = function (t, n) {
    var r = u.useRef(!0);
    dh(function () {
      return t(r.current);
    }, n),
      dh(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0;
          }
        );
      }, []);
  },
  sv = function (t, n) {
    Bt(function (r) {
      if (!r) return t();
    }, n);
  },
  EO = z({}, qc),
  vh = EO.useInsertionEffect,
  $O = function (t, n, r) {
    u.useMemo(t, r),
      Bt(function () {
        return n(!0);
      }, r);
  },
  OO = vh
    ? function (e, t, n) {
        return vh(function () {
          return e(), t();
        }, n);
      }
    : $O;
const PO = OO;
var RO = z({}, qc),
  TO = RO.useInsertionEffect,
  _O = function (t) {
    var n = [],
      r = !1;
    function o(i) {
      r || n.push(i);
    }
    return (
      u.useEffect(function () {
        return (
          (r = !1),
          function () {
            (r = !0),
              n.length &&
                n.forEach(function (i) {
                  return i();
                });
          }
        );
      }, t),
      o
    );
  },
  MO = function () {
    return function (t) {
      t();
    };
  },
  IO = typeof TO < 'u' ? _O : MO;
const kO = IO;
function Jm(e, t, n, r, o) {
  var i = u.useContext(Ru),
    a = i.cache,
    l = [e].concat(ae(t)),
    s = iv(l),
    c = kO([s]),
    f = function (b) {
      a.opUpdate(s, function (y) {
        var S = y || [void 0, void 0],
          p = H(S, 2),
          m = p[0],
          g = m === void 0 ? 0 : m,
          C = p[1],
          E = C,
          w = E || n(),
          x = [g, w];
        return b ? b(x) : x;
      });
    };
  u.useMemo(
    function () {
      f();
    },
    [s]
  );
  var d = a.opGet(s),
    v = d[1];
  return (
    PO(
      function () {
        o == null || o(v);
      },
      function (h) {
        return (
          f(function (b) {
            var y = H(b, 2),
              S = y[0],
              p = y[1];
            return h && S === 0 && (o == null || o(v)), [S + 1, p];
          }),
          function () {
            a.opUpdate(s, function (b) {
              var y = b || [],
                S = H(y, 2),
                p = S[0],
                m = p === void 0 ? 0 : p,
                g = S[1],
                C = m - 1;
              return C === 0
                ? (c(function () {
                    (h || !a.opGet(s)) && (r == null || r(g, !1));
                  }),
                  null)
                : [m - 1, g];
            });
          }
        );
      },
      [s]
    ),
    v
  );
}
var NO = {},
  jO = 'css',
  Fo = new Map();
function LO(e) {
  Fo.set(e, (Fo.get(e) || 0) + 1);
}
function FO(e, t) {
  if (typeof document < 'u') {
    var n = document.querySelectorAll(
      'style['.concat(da, '="').concat(e, '"]')
    );
    n.forEach(function (r) {
      if (r[co] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var AO = 0;
function zO(e, t) {
  Fo.set(e, (Fo.get(e) || 0) - 1);
  var n = Array.from(Fo.keys()),
    r = n.filter(function (o) {
      var i = Fo.get(o) || 0;
      return i <= 0;
    });
  n.length - r.length > AO &&
    r.forEach(function (o) {
      FO(o, t), Fo.delete(o);
    });
}
var DO = function (t, n, r, o) {
    var i = r.getDerivativeToken(t),
      a = z(z({}, i), n);
    return o && (a = o(a)), a;
  },
  Gb = 'token';
function BO(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = u.useContext(Ru),
    o = r.cache.instanceId,
    i = r.container,
    a = n.salt,
    l = a === void 0 ? '' : a,
    s = n.override,
    c = s === void 0 ? NO : s,
    f = n.formatToken,
    d = n.getComputedToken,
    v = n.cssVar,
    h = CO(function () {
      return Object.assign.apply(Object, [{}].concat(ae(t)));
    }, t),
    b = ol(h),
    y = ol(c),
    S = v ? ol(v) : '',
    p = Jm(
      Gb,
      [l, e.id, b, y, S],
      function () {
        var m,
          g = d ? d(h, c, e) : DO(h, c, e, f),
          C = z({}, g),
          E = '';
        if (v) {
          var w = Kb(g, v.key, {
              prefix: v.prefix,
              ignore: v.ignore,
              unitless: v.unitless,
              preserve: v.preserve,
            }),
            x = H(w, 2);
          (g = x[0]), (E = x[1]);
        }
        var O = fh(g, l);
        (g._tokenKey = O), (C._tokenKey = fh(C, l));
        var P =
          (m = v == null ? void 0 : v.key) !== null && m !== void 0 ? m : O;
        (g._themeKey = P), LO(P);
        var _ = ''.concat(jO, '-').concat(jc(O));
        return (
          (g._hashId = _), [g, _, C, E, (v == null ? void 0 : v.key) || '']
        );
      },
      function (m) {
        zO(m[0]._themeKey, o);
      },
      function (m) {
        var g = H(m, 4),
          C = g[0],
          E = g[3];
        if (v && E) {
          var w = Br(E, jc('css-variables-'.concat(C._themeKey)), {
            mark: ar,
            prepend: 'queue',
            attachTo: i,
            priority: -999,
          });
          (w[co] = o), w.setAttribute(da, C._themeKey);
        }
      }
    );
  return p;
}
var HO = function (t, n, r) {
    var o = H(t, 5),
      i = o[2],
      a = o[3],
      l = o[4],
      s = r || {},
      c = s.plain;
    if (!a) return null;
    var f = i._tokenKey,
      d = -999,
      v = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(d) },
      h = Lc(a, l, f, v, c);
    return [d, f, h];
  },
  VO = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  qb = 'comm',
  Xb = 'rule',
  Qb = 'decl',
  WO = '@import',
  UO = '@keyframes',
  KO = '@layer',
  Yb = Math.abs,
  ep = String.fromCharCode;
function Zb(e) {
  return e.trim();
}
function Xs(e, t, n) {
  return e.replace(t, n);
}
function GO(e, t, n) {
  return e.indexOf(t, n);
}
function Ol(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pl(e, t, n) {
  return e.slice(t, n);
}
function _r(e) {
  return e.length;
}
function qO(e) {
  return e.length;
}
function Ss(e, t) {
  return t.push(e), e;
}
var Tu = 1,
  va = 1,
  Jb = 0,
  Wn = 0,
  Et = 0,
  Sa = '';
function tp(e, t, n, r, o, i, a, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Tu,
    column: va,
    length: a,
    return: '',
    siblings: l,
  };
}
function XO() {
  return Et;
}
function QO() {
  return (
    (Et = Wn > 0 ? Ol(Sa, --Wn) : 0), va--, Et === 10 && ((va = 1), Tu--), Et
  );
}
function lr() {
  return (
    (Et = Wn < Jb ? Ol(Sa, Wn++) : 0), va++, Et === 10 && ((va = 1), Tu++), Et
  );
}
function Go() {
  return Ol(Sa, Wn);
}
function Qs() {
  return Wn;
}
function _u(e, t) {
  return Pl(Sa, e, t);
}
function cv(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function YO(e) {
  return (Tu = va = 1), (Jb = _r((Sa = e))), (Wn = 0), [];
}
function ZO(e) {
  return (Sa = ''), e;
}
function If(e) {
  return Zb(_u(Wn - 1, uv(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function JO(e) {
  for (; (Et = Go()) && Et < 33; ) lr();
  return cv(e) > 2 || cv(Et) > 3 ? '' : ' ';
}
function eP(e, t) {
  for (
    ;
    --t &&
    lr() &&
    !(Et < 48 || Et > 102 || (Et > 57 && Et < 65) || (Et > 70 && Et < 97));

  );
  return _u(e, Qs() + (t < 6 && Go() == 32 && lr() == 32));
}
function uv(e) {
  for (; lr(); )
    switch (Et) {
      case e:
        return Wn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && uv(Et);
        break;
      case 40:
        e === 41 && uv(e);
        break;
      case 92:
        lr();
        break;
    }
  return Wn;
}
function tP(e, t) {
  for (; lr() && e + Et !== 57; ) if (e + Et === 84 && Go() === 47) break;
  return '/*' + _u(t, Wn - 1) + '*' + ep(e === 47 ? e : lr());
}
function nP(e) {
  for (; !cv(Go()); ) lr();
  return _u(e, Wn);
}
function rP(e) {
  return ZO(Ys('', null, null, null, [''], (e = YO(e)), 0, [0], e));
}
function Ys(e, t, n, r, o, i, a, l, s) {
  for (
    var c = 0,
      f = 0,
      d = a,
      v = 0,
      h = 0,
      b = 0,
      y = 1,
      S = 1,
      p = 1,
      m = 0,
      g = '',
      C = o,
      E = i,
      w = r,
      x = g;
    S;

  )
    switch (((b = m), (m = lr()))) {
      case 40:
        if (b != 108 && Ol(x, d - 1) == 58) {
          GO((x += Xs(If(m), '&', '&\f')), '&\f', Yb(c ? l[c - 1] : 0)) != -1 &&
            (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += If(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += JO(b);
        break;
      case 92:
        x += eP(Qs() - 1, 7);
        continue;
      case 47:
        switch (Go()) {
          case 42:
          case 47:
            Ss(oP(tP(lr(), Qs()), t, n, s), s);
            break;
          default:
            x += '/';
        }
        break;
      case 123 * y:
        l[c++] = _r(x) * p;
      case 125 * y:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            S = 0;
          case 59 + f:
            p == -1 && (x = Xs(x, /\f/g, '')),
              h > 0 &&
                _r(x) - d &&
                Ss(
                  h > 32
                    ? ph(x + ';', r, n, d - 1, s)
                    : ph(Xs(x, ' ', '') + ';', r, n, d - 2, s),
                  s
                );
            break;
          case 59:
            x += ';';
          default:
            if (
              (Ss(
                (w = mh(x, t, n, c, f, o, l, g, (C = []), (E = []), d, i)),
                i
              ),
              m === 123)
            )
              if (f === 0) Ys(x, t, w, w, C, i, d, l, E);
              else
                switch (v === 99 && Ol(x, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ys(
                      e,
                      w,
                      w,
                      r && Ss(mh(e, w, w, 0, 0, o, l, g, o, (C = []), d, E), E),
                      o,
                      E,
                      d,
                      l,
                      r ? C : E
                    );
                    break;
                  default:
                    Ys(x, w, w, w, [''], E, 0, l, E);
                }
        }
        (c = f = h = 0), (y = p = 1), (g = x = ''), (d = a);
        break;
      case 58:
        (d = 1 + _r(x)), (h = b);
      default:
        if (y < 1) {
          if (m == 123) --y;
          else if (m == 125 && y++ == 0 && QO() == 125) continue;
        }
        switch (((x += ep(m)), m * y)) {
          case 38:
            p = f > 0 ? 1 : ((x += '\f'), -1);
            break;
          case 44:
            (l[c++] = (_r(x) - 1) * p), (p = 1);
            break;
          case 64:
            Go() === 45 && (x += If(lr())),
              (v = Go()),
              (f = d = _r((g = x += nP(Qs())))),
              m++;
            break;
          case 45:
            b === 45 && _r(x) == 2 && (y = 0);
        }
    }
  return i;
}
function mh(e, t, n, r, o, i, a, l, s, c, f, d) {
  for (
    var v = o - 1, h = o === 0 ? i : [''], b = qO(h), y = 0, S = 0, p = 0;
    y < r;
    ++y
  )
    for (var m = 0, g = Pl(e, v + 1, (v = Yb((S = a[y])))), C = e; m < b; ++m)
      (C = Zb(S > 0 ? h[m] + ' ' + g : Xs(g, /&\f/g, h[m]))) && (s[p++] = C);
  return tp(e, t, n, o === 0 ? Xb : l, s, c, f, d);
}
function oP(e, t, n, r) {
  return tp(e, t, n, qb, ep(XO()), Pl(e, 2, -2), 0, r);
}
function ph(e, t, n, r, o) {
  return tp(e, t, n, Qb, Pl(e, 0, r), Pl(e, r + 1, -1), r, o);
}
function fv(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
  return n;
}
function iP(e, t, n, r) {
  switch (e.type) {
    case KO:
      if (e.children.length) break;
    case WO:
    case Qb:
      return (e.return = e.return || e.value);
    case qb:
      return '';
    case UO:
      return (e.return = e.value + '{' + fv(e.children, r) + '}');
    case Xb:
      if (!_r((e.value = e.props.join(',')))) return '';
  }
  return _r((n = fv(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
var gh = 'data-ant-cssinjs-cache-path',
  eC = '_FILE_STYLE__',
  qo,
  tC = !0;
function aP() {
  if (!qo && ((qo = {}), an())) {
    var e = document.createElement('div');
    (e.className = gh),
      (e.style.position = 'fixed'),
      (e.style.visibility = 'hidden'),
      (e.style.top = '-9999px'),
      document.body.appendChild(e);
    var t = getComputedStyle(e).content || '';
    (t = t.replace(/^"/, '').replace(/"$/, '')),
      t.split(';').forEach(function (o) {
        var i = o.split(':'),
          a = H(i, 2),
          l = a[0],
          s = a[1];
        qo[l] = s;
      });
    var n = document.querySelector('style['.concat(gh, ']'));
    if (n) {
      var r;
      (tC = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function lP(e) {
  return aP(), !!qo[e];
}
function sP(e) {
  var t = qo[e],
    n = null;
  if (t && an())
    if (tC) n = eC;
    else {
      var r = document.querySelector(
        'style['.concat(ar, '="').concat(qo[e], '"]')
      );
      r ? (n = r.innerHTML) : delete qo[e];
    }
  return [n, t];
}
var cP = '_skip_check_',
  nC = '_multi_value_';
function dv(e) {
  var t = fv(rP(e), iP);
  return t.replace(/\{%%%\:[^;];}/g, ';');
}
function uP(e) {
  return ke(e) === 'object' && e && (cP in e || nC in e);
}
function fP(e, t, n) {
  if (!t) return e;
  var r = '.'.concat(t),
    o = n === 'low' ? ':where('.concat(r, ')') : r,
    i = e.split(',').map(function (a) {
      var l,
        s = a.trim().split(/\s+/),
        c = s[0] || '',
        f =
          ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) ||
          '';
      return (
        (c = ''.concat(f).concat(o).concat(c.slice(f.length))),
        [c].concat(ae(s.slice(1))).join(' ')
      );
    });
  return i.join(',');
}
var dP = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    o = r.root,
    i = r.injectHash,
    a = r.parentSelectors,
    l = n.hashId,
    s = n.layer;
  n.path;
  var c = n.hashPriority,
    f = n.transformers,
    d = f === void 0 ? [] : f;
  n.linters;
  var v = '',
    h = {};
  function b(g) {
    var C = g.getName(l);
    if (!h[C]) {
      var E = e(g.style, n, { root: !1, parentSelectors: a }),
        w = H(E, 1),
        x = w[0];
      h[C] = '@keyframes '.concat(g.getName(l)).concat(x);
    }
  }
  function y(g) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return (
      g.forEach(function (E) {
        Array.isArray(E) ? y(E, C) : E && C.push(E);
      }),
      C
    );
  }
  var S = y(Array.isArray(t) ? t : [t]);
  if (
    (S.forEach(function (g) {
      var C = typeof g == 'string' && !o ? {} : g;
      if (typeof C == 'string')
        v += ''.concat(
          C,
          `
`
        );
      else if (C._keyframe) b(C);
      else {
        var E = d.reduce(function (w, x) {
          var O;
          return (
            (x == null || (O = x.visit) === null || O === void 0
              ? void 0
              : O.call(x, w)) || w
          );
        }, C);
        Object.keys(E).forEach(function (w) {
          var x = E[w];
          if (
            ke(x) === 'object' &&
            x &&
            (w !== 'animationName' || !x._keyframe) &&
            !uP(x)
          ) {
            var O = !1,
              P = w.trim(),
              _ = !1;
            (o || i) && l
              ? P.startsWith('@')
                ? (O = !0)
                : (P = fP(w, l, c))
              : o && !l && (P === '&' || P === '') && ((P = ''), (_ = !0));
            var M = e(x, n, {
                root: _,
                injectHash: O,
                parentSelectors: [].concat(ae(a), [P]),
              }),
              L = H(M, 2),
              R = L[0],
              D = L[1];
            (h = z(z({}, h), D)), (v += ''.concat(P).concat(R));
          } else {
            let T = function ($, N) {
              var I = $.replace(/[A-Z]/g, function (A) {
                  return '-'.concat(A.toLowerCase());
                }),
                F = N;
              !VO[$] &&
                typeof F == 'number' &&
                F !== 0 &&
                (F = ''.concat(F, 'px')),
                $ === 'animationName' &&
                  N !== null &&
                  N !== void 0 &&
                  N._keyframe &&
                  (b(N), (F = N.getName(l))),
                (v += ''.concat(I, ':').concat(F, ';'));
            };
            var B,
              k =
                (B = x == null ? void 0 : x.value) !== null && B !== void 0
                  ? B
                  : x;
            ke(x) === 'object' &&
            x !== null &&
            x !== void 0 &&
            x[nC] &&
            Array.isArray(k)
              ? k.forEach(function ($) {
                  T(w, $);
                })
              : T(w, k);
          }
        });
      }
    }),
    !o)
  )
    v = '{'.concat(v, '}');
  else if (s && wO()) {
    var p = s.split(','),
      m = p[p.length - 1].trim();
    (v = '@layer '.concat(m, ' {').concat(v, '}')),
      p.length > 1 && (v = '@layer '.concat(s, '{%%%:%}').concat(v));
  }
  return [v, h];
};
function rC(e, t) {
  return jc(''.concat(e.join('%')).concat(t));
}
function vP() {
  return null;
}
var oC = 'style';
function vv(e, t) {
  var n = e.token,
    r = e.path,
    o = e.hashId,
    i = e.layer,
    a = e.nonce,
    l = e.clientOnly,
    s = e.order,
    c = s === void 0 ? 0 : s,
    f = u.useContext(Ru),
    d = f.autoClear;
  f.mock;
  var v = f.defaultCache,
    h = f.hashPriority,
    b = f.container,
    y = f.ssrInline,
    S = f.transformers,
    p = f.linters,
    m = f.cache,
    g = n._tokenKey,
    C = [g].concat(ae(r)),
    E = lv,
    w = Jm(
      oC,
      C,
      function () {
        var M = C.join('|');
        if (lP(M)) {
          var L = sP(M),
            R = H(L, 2),
            D = R[0],
            B = R[1];
          if (D) return [D, g, B, {}, l, c];
        }
        var k = t(),
          T = dP(k, {
            hashId: o,
            hashPriority: h,
            layer: i,
            path: r.join('-'),
            transformers: S,
            linters: p,
          }),
          $ = H(T, 2),
          N = $[0],
          I = $[1],
          F = dv(N),
          A = rC(C, F);
        return [F, g, A, I, l, c];
      },
      function (M, L) {
        var R = H(M, 3),
          D = R[2];
        (L || d) && lv && fa(D, { mark: ar });
      },
      function (M) {
        var L = H(M, 4),
          R = L[0];
        L[1];
        var D = L[2],
          B = L[3];
        if (E && R !== eC) {
          var k = { mark: ar, prepend: 'queue', attachTo: b, priority: c },
            T = typeof a == 'function' ? a() : a;
          T && (k.csp = { nonce: T });
          var $ = Br(R, D, k);
          ($[co] = m.instanceId),
            $.setAttribute(da, g),
            Object.keys(B).forEach(function (N) {
              Br(dv(B[N]), '_effect-'.concat(N), k);
            });
        }
      }
    ),
    x = H(w, 3),
    O = x[0],
    P = x[1],
    _ = x[2];
  return function (M) {
    var L;
    if (!y || E || !v) L = u.createElement(vP, null);
    else {
      var R;
      L = u.createElement(
        'style',
        ue({}, ((R = {}), j(R, da, P), j(R, ar, _), R), {
          dangerouslySetInnerHTML: { __html: O },
        })
      );
    }
    return u.createElement(u.Fragment, null, L, M);
  };
}
var mP = function (t, n, r) {
    var o = H(t, 6),
      i = o[0],
      a = o[1],
      l = o[2],
      s = o[3],
      c = o[4],
      f = o[5],
      d = r || {},
      v = d.plain;
    if (c) return null;
    var h = i,
      b = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(f) };
    return (
      (h = Lc(i, a, l, b, v)),
      s &&
        Object.keys(s).forEach(function (y) {
          if (!n[y]) {
            n[y] = !0;
            var S = dv(s[y]);
            h += Lc(S, a, '_effect-'.concat(y), b, v);
          }
        }),
      [f, l, h]
    );
  },
  iC = 'cssVar',
  pP = function (t, n) {
    var r = t.key,
      o = t.prefix,
      i = t.unitless,
      a = t.ignore,
      l = t.token,
      s = t.scope,
      c = s === void 0 ? '' : s,
      f = u.useContext(Ru),
      d = f.cache.instanceId,
      v = f.container,
      h = l._tokenKey,
      b = [].concat(ae(t.path), [r, c, h]),
      y = Jm(
        iC,
        b,
        function () {
          var S = n(),
            p = Kb(S, r, { prefix: o, unitless: i, ignore: a, scope: c }),
            m = H(p, 2),
            g = m[0],
            C = m[1],
            E = rC(b, C);
          return [g, C, E, r];
        },
        function (S) {
          var p = H(S, 3),
            m = p[2];
          lv && fa(m, { mark: ar });
        },
        function (S) {
          var p = H(S, 3),
            m = p[1],
            g = p[2];
          if (m) {
            var C = Br(m, g, {
              mark: ar,
              prepend: 'queue',
              attachTo: v,
              priority: -999,
            });
            (C[co] = d), C.setAttribute(da, r);
          }
        }
      );
    return y;
  },
  gP = function (t, n, r) {
    var o = H(t, 4),
      i = o[1],
      a = o[2],
      l = o[3],
      s = r || {},
      c = s.plain;
    if (!i) return null;
    var f = -999,
      d = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(f) },
      v = Lc(i, l, a, d, c);
    return [f, a, v];
  },
  La;
(La = {}), j(La, oC, mP), j(La, Gb, HO), j(La, iC, gP);
var st = (function () {
  function e(t, n) {
    hn(this, e),
      j(this, 'name', void 0),
      j(this, 'style', void 0),
      j(this, '_keyframe', !0),
      (this.name = t),
      (this.style = n);
  }
  return (
    yn(e, [
      {
        key: 'getName',
        value: function () {
          var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
          return n ? ''.concat(n, '-').concat(this.name) : this.name;
        },
      },
    ]),
    e
  );
})();
function Si(e) {
  return (e.notSplit = !0), e;
}
Si(['borderTop', 'borderBottom']),
  Si(['borderTop']),
  Si(['borderBottom']),
  Si(['borderLeft', 'borderRight']),
  Si(['borderLeft']),
  Si(['borderRight']);
var np = u.createContext({});
function hP(e) {
  return Ab(e) || Nb(e) || Xm(e) || zb();
}
function gr(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return;
    n = n[t[r]];
  }
  return n;
}
function aC(e, t, n, r) {
  if (!t.length) return n;
  var o = hP(t),
    i = o[0],
    a = o.slice(1),
    l;
  return (
    !e && typeof i == 'number'
      ? (l = [])
      : Array.isArray(e)
        ? (l = ae(e))
        : (l = z({}, e)),
    r && n === void 0 && a.length === 1
      ? delete l[i][a[0]]
      : (l[i] = aC(l[i], a, n, r)),
    l
  );
}
function er(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !gr(e, t.slice(0, -1))
    ? e
    : aC(e, t, n, r);
}
function yP(e) {
  return (
    ke(e) === 'object' &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
function hh(e) {
  return Array.isArray(e) ? [] : {};
}
var bP = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys;
function Ui() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = hh(t[0]);
  return (
    t.forEach(function (o) {
      function i(a, l) {
        var s = new Set(l),
          c = gr(o, a),
          f = Array.isArray(c);
        if (f || yP(c)) {
          if (!s.has(c)) {
            s.add(c);
            var d = gr(r, a);
            f
              ? (r = er(r, a, []))
              : (!d || ke(d) !== 'object') && (r = er(r, a, hh(c))),
              bP(c).forEach(function (v) {
                i([].concat(ae(a), [v]), s);
              });
          }
        } else r = er(r, a, c);
      }
      i([]);
    }),
    r
  );
}
function CP() {}
const SP = u.createContext({}),
  lC = () => {
    const e = () => {};
    return (e.deprecated = CP), e;
  },
  wP = u.createContext(void 0);
var xP = {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: 'Page',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
    page_size: 'Page Size',
  },
  EP = {
    locale: 'en_US',
    today: 'Today',
    now: 'Now',
    backToToday: 'Back to today',
    ok: 'OK',
    clear: 'Clear',
    month: 'Month',
    year: 'Year',
    timeSelect: 'select time',
    dateSelect: 'select date',
    weekSelect: 'Choose a week',
    monthSelect: 'Choose a month',
    yearSelect: 'Choose a year',
    decadeSelect: 'Choose a decade',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthBeforeYear: !0,
    previousMonth: 'Previous month (PageUp)',
    nextMonth: 'Next month (PageDown)',
    previousYear: 'Last year (Control + left)',
    nextYear: 'Next year (Control + right)',
    previousDecade: 'Last decade',
    nextDecade: 'Next decade',
    previousCentury: 'Last century',
    nextCentury: 'Next century',
  };
const $P = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time'],
  },
  sC = $P,
  OP = {
    lang: Object.assign(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week'],
      },
      EP
    ),
    timePickerLocale: Object.assign({}, sC),
  },
  yh = OP,
  Cn = '${label} is not a valid ${type}',
  oi = {
    locale: 'en',
    Pagination: xP,
    DatePicker: yh,
    TimePicker: sC,
    Calendar: yh,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckall: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting',
    },
    Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page',
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file',
    },
    Empty: { description: 'No data' },
    Icon: { icon: 'icon' },
    Text: { edit: 'Edit', copy: 'Copy', copied: 'Copied', expand: 'Expand' },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date',
        },
        types: {
          string: Cn,
          method: Cn,
          array: Cn,
          object: Cn,
          number: Cn,
          date: Cn,
          boolean: Cn,
          integer: Cn,
          float: Cn,
          regexp: Cn,
          email: Cn,
          url: Cn,
          hex: Cn,
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters',
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}',
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}',
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
      },
    },
    Image: { preview: 'Preview' },
    QRCode: {
      expired: 'QR code expired',
      refresh: 'Refresh',
      scanned: 'Scanned',
    },
    ColorPicker: { presetEmpty: 'Empty' },
  };
let Zs = Object.assign({}, oi.Modal),
  Js = [];
const bh = () =>
  Js.reduce((e, t) => Object.assign(Object.assign({}, e), t), oi.Modal);
function PP(e) {
  if (e) {
    const t = Object.assign({}, e);
    return (
      Js.push(t),
      (Zs = bh()),
      () => {
        (Js = Js.filter((n) => n !== t)), (Zs = bh());
      }
    );
  }
  Zs = Object.assign({}, oi.Modal);
}
function cC() {
  return Zs;
}
const RP = u.createContext(void 0),
  rp = RP,
  op = (e, t) => {
    const n = u.useContext(rp),
      r = u.useMemo(() => {
        var i;
        const a = t || oi[e],
          l = (i = n == null ? void 0 : n[e]) !== null && i !== void 0 ? i : {};
        return Object.assign(
          Object.assign({}, typeof a == 'function' ? a() : a),
          l || {}
        );
      }, [e, t, n]),
      o = u.useMemo(() => {
        const i = n == null ? void 0 : n.locale;
        return n != null && n.exist && !i ? oi.locale : i;
      }, [n]);
    return [r, o];
  },
  TP = 'internalMark',
  _P = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e;
    u.useEffect(() => PP(t && t.Modal), [t]);
    const o = u.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t]
    );
    return u.createElement(rp.Provider, { value: o }, n);
  },
  MP = _P;
function Vt(e, t) {
  IP(e) && (e = '100%');
  var n = kP(e);
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  );
}
function ws(e) {
  return Math.min(1, Math.max(0, e));
}
function IP(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1;
}
function kP(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1;
}
function uC(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function xs(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e;
}
function Bo(e) {
  return e.length === 1 ? '0' + e : String(e);
}
function NP(e, t, n) {
  return { r: Vt(e, 255) * 255, g: Vt(t, 255) * 255, b: Vt(n, 255) * 255 };
}
function Ch(e, t, n) {
  (e = Vt(e, 255)), (t = Vt(t, 255)), (n = Vt(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = 0,
    l = (r + o) / 2;
  if (r === o) (a = 0), (i = 0);
  else {
    var s = r - o;
    switch (((a = l > 0.5 ? s / (2 - r - o) : s / (r + o)), r)) {
      case e:
        i = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, l };
}
function kf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function jP(e, t, n) {
  var r, o, i;
  if (((e = Vt(e, 360)), (t = Vt(t, 100)), (n = Vt(n, 100)), t === 0))
    (o = n), (i = n), (r = n);
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (r = kf(l, a, e + 1 / 3)), (o = kf(l, a, e)), (i = kf(l, a, e - 1 / 3));
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function mv(e, t, n) {
  (e = Vt(e, 255)), (t = Vt(t, 255)), (n = Vt(n, 255));
  var r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = 0,
    a = r,
    l = r - o,
    s = r === 0 ? 0 : l / r;
  if (r === o) i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: a };
}
function LP(e, t, n) {
  (e = Vt(e, 360) * 6), (t = Vt(t, 100)), (n = Vt(n, 100));
  var r = Math.floor(e),
    o = e - r,
    i = n * (1 - t),
    a = n * (1 - o * t),
    l = n * (1 - (1 - o) * t),
    s = r % 6,
    c = [n, a, i, i, l, n][s],
    f = [l, n, n, a, i, i][s],
    d = [i, i, l, n, n, a][s];
  return { r: c * 255, g: f * 255, b: d * 255 };
}
function pv(e, t, n, r) {
  var o = [
    Bo(Math.round(e).toString(16)),
    Bo(Math.round(t).toString(16)),
    Bo(Math.round(n).toString(16)),
  ];
  return r &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join('');
}
function FP(e, t, n, r, o) {
  var i = [
    Bo(Math.round(e).toString(16)),
    Bo(Math.round(t).toString(16)),
    Bo(Math.round(n).toString(16)),
    Bo(AP(r)),
  ];
  return o &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1)) &&
    i[3].startsWith(i[3].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
    : i.join('');
}
function AP(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Sh(e) {
  return xn(e) / 255;
}
function xn(e) {
  return parseInt(e, 16);
}
function zP(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 };
}
var gv = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function Ii(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    o = null,
    i = null,
    a = !1,
    l = !1;
  return (
    typeof e == 'string' && (e = HP(e)),
    typeof e == 'object' &&
      (Or(e.r) && Or(e.g) && Or(e.b)
        ? ((t = NP(e.r, e.g, e.b)),
          (a = !0),
          (l = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : Or(e.h) && Or(e.s) && Or(e.v)
          ? ((r = xs(e.s)),
            (o = xs(e.v)),
            (t = LP(e.h, r, o)),
            (a = !0),
            (l = 'hsv'))
          : Or(e.h) &&
            Or(e.s) &&
            Or(e.l) &&
            ((r = xs(e.s)),
            (i = xs(e.l)),
            (t = jP(e.h, r, i)),
            (a = !0),
            (l = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = uC(n)),
    {
      ok: a,
      format: e.format || l,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  );
}
var DP = '[-\\+]?\\d+%?',
  BP = '[-\\+]?\\d*\\.\\d+%?',
  uo = '(?:'.concat(BP, ')|(?:').concat(DP, ')'),
  Nf = '[\\s|\\(]+('
    .concat(uo, ')[,|\\s]+(')
    .concat(uo, ')[,|\\s]+(')
    .concat(uo, ')\\s*\\)?'),
  jf = '[\\s|\\(]+('
    .concat(uo, ')[,|\\s]+(')
    .concat(uo, ')[,|\\s]+(')
    .concat(uo, ')[,|\\s]+(')
    .concat(uo, ')\\s*\\)?'),
  Yn = {
    CSS_UNIT: new RegExp(uo),
    rgb: new RegExp('rgb' + Nf),
    rgba: new RegExp('rgba' + jf),
    hsl: new RegExp('hsl' + Nf),
    hsla: new RegExp('hsla' + jf),
    hsv: new RegExp('hsv' + Nf),
    hsva: new RegExp('hsva' + jf),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function HP(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1;
  var t = !1;
  if (gv[e]) (e = gv[e]), (t = !0);
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  var n = Yn.rgb.exec(e);
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Yn.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Yn.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Yn.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Yn.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Yn.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Yn.hex8.exec(e)),
                          n
                            ? {
                                r: xn(n[1]),
                                g: xn(n[2]),
                                b: xn(n[3]),
                                a: Sh(n[4]),
                                format: t ? 'name' : 'hex8',
                              }
                            : ((n = Yn.hex6.exec(e)),
                              n
                                ? {
                                    r: xn(n[1]),
                                    g: xn(n[2]),
                                    b: xn(n[3]),
                                    format: t ? 'name' : 'hex',
                                  }
                                : ((n = Yn.hex4.exec(e)),
                                  n
                                    ? {
                                        r: xn(n[1] + n[1]),
                                        g: xn(n[2] + n[2]),
                                        b: xn(n[3] + n[3]),
                                        a: Sh(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8',
                                      }
                                    : ((n = Yn.hex3.exec(e)),
                                      n
                                        ? {
                                            r: xn(n[1] + n[1]),
                                            g: xn(n[2] + n[2]),
                                            b: xn(n[3] + n[3]),
                                            format: t ? 'name' : 'hex',
                                          }
                                        : !1)))))))));
}
function Or(e) {
  return !!Yn.CSS_UNIT.exec(String(e));
}
var Pn = (function () {
    function e(t, n) {
      t === void 0 && (t = ''), n === void 0 && (n = {});
      var r;
      if (t instanceof e) return t;
      typeof t == 'number' && (t = zP(t)), (this.originalInput = t);
      var o = Ii(t);
      (this.originalInput = t),
        (this.r = o.r),
        (this.g = o.g),
        (this.b = o.b),
        (this.a = o.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : o.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = o.ok);
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function () {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          o,
          i = t.r / 255,
          a = t.g / 255,
          l = t.b / 255;
        return (
          i <= 0.03928
            ? (n = i / 12.92)
            : (n = Math.pow((i + 0.055) / 1.055, 2.4)),
          a <= 0.03928
            ? (r = a / 12.92)
            : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
          l <= 0.03928
            ? (o = l / 12.92)
            : (o = Math.pow((l + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * o
        );
      }),
      (e.prototype.getAlpha = function () {
        return this.a;
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = uC(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        );
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s;
        return t === 0;
      }),
      (e.prototype.toHsv = function () {
        var t = mv(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
      }),
      (e.prototype.toHsvString = function () {
        var t = mv(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.v * 100);
        return this.a === 1
          ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
          : 'hsva('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHsl = function () {
        var t = Ch(this.r, this.g, this.b);
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
      }),
      (e.prototype.toHslString = function () {
        var t = Ch(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          o = Math.round(t.l * 100);
        return this.a === 1
          ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(o, '%)')
          : 'hsla('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(o, '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), pv(this.r, this.g, this.b, t);
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t);
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), FP(this.r, this.g, this.b, this.a, t);
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex8(t);
      }),
      (e.prototype.toHexShortString = function (t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        );
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a,
        };
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b);
        return this.a === 1
          ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
          : 'rgba('
              .concat(t, ', ')
              .concat(n, ', ')
              .concat(r, ', ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return ''.concat(Math.round(Vt(n, 255) * 100), '%');
        };
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(Vt(n, 255) * 100);
        };
        return this.a === 1
          ? 'rgb('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%)')
          : 'rgba('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%, ')
              .concat(this.roundA, ')');
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return 'transparent';
        if (this.a < 1) return !1;
        for (
          var t = '#' + pv(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(gv);
          n < r.length;
          n++
        ) {
          var o = r[n],
            i = o[0],
            a = o[1];
          if (t === a) return i;
        }
        return !1;
      }),
      (e.prototype.toString = function (t) {
        var n = !!t;
        t = t ?? this.format;
        var r = !1,
          o = this.a < 1 && this.a >= 0,
          i = !n && o && (t.startsWith('hex') || t === 'name');
        return i
          ? t === 'name' && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === 'rgb' && (r = this.toRgbString()),
            t === 'prgb' && (r = this.toPercentageRgbString()),
            (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
            t === 'hex3' && (r = this.toHexString(!0)),
            t === 'hex4' && (r = this.toHex8String(!0)),
            t === 'hex8' && (r = this.toHex8String()),
            t === 'name' && (r = this.toName()),
            t === 'hsl' && (r = this.toHslString()),
            t === 'hsv' && (r = this.toHsvString()),
            r || this.toHexString());
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        );
      }),
      (e.prototype.clone = function () {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l += t / 100), (n.l = ws(n.l)), new e(n);
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100)))
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100)))
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100)))
          )),
          new e(n)
        );
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.l -= t / 100), (n.l = ws(n.l)), new e(n);
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix('white', t);
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix('black', t);
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s -= t / 100), (n.s = ws(n.s)), new e(n);
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return (n.s += t / 100), (n.s = ws(n.s)), new e(n);
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360;
        return (n.h = r < 0 ? 360 + r : r), new e(n);
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
          o = new e(t).toRgb(),
          i = n / 100,
          a = {
            r: (o.r - r.r) * i + r.r,
            g: (o.g - r.g) * i + r.g,
            b: (o.b - r.b) * i + r.b,
            a: (o.a - r.a) * i + r.a,
          };
        return new e(a);
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30);
        var r = this.toHsl(),
          o = 360 / n,
          i = [this];
        for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + o) % 360), i.push(new e(r));
        return i;
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6);
        for (
          var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], l = 1 / t;
          t--;

        )
          a.push(new e({ h: r, s: o, v: i })), (i = (i + l) % 1);
        return a;
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h;
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ];
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb(),
          o = n.a + r.a * (1 - n.a);
        return new e({
          r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
          g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
          b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
          a: o,
        });
      }),
      (e.prototype.triad = function () {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1;
          a < t;
          a++
        )
          o.push(new e({ h: (r + a * i) % 360, s: n.s, l: n.l }));
        return o;
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  Es = 2,
  wh = 0.16,
  VP = 0.05,
  WP = 0.05,
  UP = 0.15,
  fC = 5,
  dC = 4,
  KP = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function xh(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    o = mv(t, n, r);
  return { h: o.h * 360, s: o.s, v: o.v };
}
function $s(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return '#'.concat(pv(t, n, r, !1));
}
function GP(e, t, n) {
  var r = n / 100,
    o = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b,
    };
  return o;
}
function Eh(e, t, n) {
  var r;
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - Es * t : Math.round(e.h) + Es * t)
      : (r = n ? Math.round(e.h) + Es * t : Math.round(e.h) - Es * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  );
}
function $h(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s;
  var r;
  return (
    n ? (r = e.s - wh * t) : t === dC ? (r = e.s + wh) : (r = e.s + VP * t),
    r > 1 && (r = 1),
    n && t === fC && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  );
}
function Oh(e, t, n) {
  var r;
  return (
    n ? (r = e.v + WP * t) : (r = e.v - UP * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  );
}
function ii(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Ii(e),
      o = fC;
    o > 0;
    o -= 1
  ) {
    var i = xh(r),
      a = $s(Ii({ h: Eh(i, o, !0), s: $h(i, o, !0), v: Oh(i, o, !0) }));
    n.push(a);
  }
  n.push($s(r));
  for (var l = 1; l <= dC; l += 1) {
    var s = xh(r),
      c = $s(Ii({ h: Eh(s, l), s: $h(s, l), v: Oh(s, l) }));
    n.push(c);
  }
  return t.theme === 'dark'
    ? KP.map(function (f) {
        var d = f.index,
          v = f.opacity,
          h = $s(GP(Ii(t.backgroundColor || '#141414'), Ii(n[d]), v * 100));
        return h;
      })
    : n;
}
var Lf = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1677FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  ec = {},
  Ff = {};
Object.keys(Lf).forEach(function (e) {
  (ec[e] = ii(Lf[e])),
    (ec[e].primary = ec[e][5]),
    (Ff[e] = ii(Lf[e], { theme: 'dark', backgroundColor: '#141414' })),
    (Ff[e].primary = Ff[e][5]);
});
var qP = ec.blue;
const XP = (e) => {
  const { controlHeight: t } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25,
  };
};
function QP(e) {
  const { sizeUnit: t, sizeStep: n } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3),
  };
}
const vC = {
    blue: '#1677ff',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    pink: '#eb2f96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911',
  },
  YP = Object.assign(Object.assign({}, vC), {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: 'solid',
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0,
  }),
  Rl = YP;
function ZP(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t;
  const {
      colorSuccess: o,
      colorWarning: i,
      colorError: a,
      colorInfo: l,
      colorPrimary: s,
      colorBgBase: c,
      colorTextBase: f,
    } = e,
    d = n(s),
    v = n(o),
    h = n(i),
    b = n(a),
    y = n(l),
    S = r(c, f),
    p = e.colorLink || e.colorInfo,
    m = n(p);
  return Object.assign(Object.assign({}, S), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: b[1],
    colorErrorBgHover: b[2],
    colorErrorBorder: b[3],
    colorErrorBorderHover: b[4],
    colorErrorHover: b[5],
    colorError: b[6],
    colorErrorActive: b[7],
    colorErrorTextHover: b[8],
    colorErrorText: b[9],
    colorErrorTextActive: b[10],
    colorWarningBg: h[1],
    colorWarningBgHover: h[2],
    colorWarningBorder: h[3],
    colorWarningBorderHover: h[4],
    colorWarningHover: h[4],
    colorWarning: h[6],
    colorWarningActive: h[7],
    colorWarningTextHover: h[8],
    colorWarningText: h[9],
    colorWarningTextActive: h[10],
    colorInfoBg: y[1],
    colorInfoBgHover: y[2],
    colorInfoBorder: y[3],
    colorInfoBorderHover: y[4],
    colorInfoHover: y[4],
    colorInfo: y[6],
    colorInfoActive: y[7],
    colorInfoTextHover: y[8],
    colorInfoText: y[9],
    colorInfoTextActive: y[10],
    colorLinkHover: m[4],
    colorLink: m[6],
    colorLinkActive: m[7],
    colorBgMask: new Pn('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff',
  });
}
const JP = (e) => {
  let t = e,
    n = e,
    r = e,
    o = e;
  return (
    e < 6 && e >= 5
      ? (t = e + 1)
      : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
    e < 7 && e >= 5
      ? (n = 4)
      : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
          ? (n = 6)
          : e < 16 && e >= 14
            ? (n = 7)
            : e >= 16 && (n = 8),
    e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
    e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
    {
      borderRadius: e,
      borderRadiusXS: r,
      borderRadiusSM: n,
      borderRadiusLG: t,
      borderRadiusOuter: o,
    }
  );
};
function eR(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: o } = e;
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: o + 1,
    },
    JP(r)
  );
}
const Pr = (e, t) => new Pn(e).setAlpha(t).toRgbString(),
  Fa = (e, t) => new Pn(e).darken(t).toHexString(),
  tR = (e) => {
    const t = ii(e);
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    };
  },
  nR = (e, t) => {
    const n = e || '#fff',
      r = t || '#000';
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: Pr(r, 0.88),
      colorTextSecondary: Pr(r, 0.65),
      colorTextTertiary: Pr(r, 0.45),
      colorTextQuaternary: Pr(r, 0.25),
      colorFill: Pr(r, 0.15),
      colorFillSecondary: Pr(r, 0.06),
      colorFillTertiary: Pr(r, 0.04),
      colorFillQuaternary: Pr(r, 0.02),
      colorBgLayout: Fa(n, 4),
      colorBgContainer: Fa(n, 0),
      colorBgElevated: Fa(n, 0),
      colorBgSpotlight: Pr(r, 0.85),
      colorBgBlur: 'transparent',
      colorBorder: Fa(n, 15),
      colorBorderSecondary: Fa(n, 6),
    };
  };
function tc(e) {
  return (e + 8) / e;
}
function rR(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1,
      i = e * Math.pow(2.71828, o / 5),
      a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return (t[1] = e), t.map((n) => ({ size: n, lineHeight: tc(n) }));
}
const oR = (e) => {
  const t = rR(e),
    n = t.map((f) => f.size),
    r = t.map((f) => f.lineHeight),
    o = n[1],
    i = n[0],
    a = n[2],
    l = r[1],
    s = r[0],
    c = r[2];
  return {
    fontSizeSM: i,
    fontSize: o,
    fontSizeLG: a,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: l,
    lineHeightLG: c,
    lineHeightSM: s,
    fontHeight: Math.round(l * o),
    fontHeightLG: Math.round(c * a),
    fontHeightSM: Math.round(s * i),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2],
  };
};
function iR(e) {
  const t = Object.keys(vC)
    .map((n) => {
      const r = ii(e[n]);
      return new Array(10)
        .fill(1)
        .reduce(
          (o, i, a) => (
            (o[`${n}-${a + 1}`] = r[a]), (o[`${n}${a + 1}`] = r[a]), o
          ),
          {}
        );
    })
    .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {});
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            ZP(e, {
              generateColorPalettes: tR,
              generateNeutralColorPalettes: nR,
            })
          ),
          oR(e.fontSize)
        ),
        QP(e)
      ),
      XP(e)
    ),
    eR(e)
  );
}
const mC = av(iR),
  hv = { token: Rl, override: { override: Rl }, hashed: !0 },
  pC = G.createContext(hv),
  ip = 'anticon',
  aR = (e, t) => t || (e ? `ant-${e}` : 'ant'),
  Ge = u.createContext({ getPrefixCls: aR, iconPrefixCls: ip }),
  lR = `-ant-${Date.now()}-${Math.random()}`;
function sR(e, t) {
  const n = {},
    r = (a, l) => {
      let s = a.clone();
      return (s = (l == null ? void 0 : l(s)) || s), s.toRgbString();
    },
    o = (a, l) => {
      const s = new Pn(a),
        c = ii(s.toRgbString());
      (n[`${l}-color`] = r(s)),
        (n[`${l}-color-disabled`] = c[1]),
        (n[`${l}-color-hover`] = c[4]),
        (n[`${l}-color-active`] = c[6]),
        (n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString()),
        (n[`${l}-color-deprecated-bg`] = c[0]),
        (n[`${l}-color-deprecated-border`] = c[2]);
    };
  if (t.primaryColor) {
    o(t.primaryColor, 'primary');
    const a = new Pn(t.primaryColor),
      l = ii(a.toRgbString());
    l.forEach((c, f) => {
      n[`primary-${f + 1}`] = c;
    }),
      (n['primary-color-deprecated-l-35'] = r(a, (c) => c.lighten(35))),
      (n['primary-color-deprecated-l-20'] = r(a, (c) => c.lighten(20))),
      (n['primary-color-deprecated-t-20'] = r(a, (c) => c.tint(20))),
      (n['primary-color-deprecated-t-50'] = r(a, (c) => c.tint(50))),
      (n['primary-color-deprecated-f-12'] = r(a, (c) =>
        c.setAlpha(c.getAlpha() * 0.12)
      ));
    const s = new Pn(l[0]);
    (n['primary-color-active-deprecated-f-30'] = r(s, (c) =>
      c.setAlpha(c.getAlpha() * 0.3)
    )),
      (n['primary-color-active-deprecated-d-02'] = r(s, (c) => c.darken(2)));
  }
  return (
    t.successColor && o(t.successColor, 'success'),
    t.warningColor && o(t.warningColor, 'warning'),
    t.errorColor && o(t.errorColor, 'error'),
    t.infoColor && o(t.infoColor, 'info'),
    `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()
  );
}
function cR(e, t) {
  const n = sR(e, t);
  an() && Br(n, `${lR}-dynamic-theme`);
}
const Fc = u.createContext(!1),
  gC = (e) => {
    let { children: t, disabled: n } = e;
    const r = u.useContext(Fc);
    return u.createElement(Fc.Provider, { value: n ?? r }, t);
  },
  yv = u.createContext(void 0),
  uR = (e) => {
    let { children: t, size: n } = e;
    const r = u.useContext(yv);
    return u.createElement(yv.Provider, { value: n || r }, t);
  },
  Mu = yv;
function fR() {
  const e = u.useContext(Fc),
    t = u.useContext(Mu);
  return { componentDisabled: e, componentSize: t };
}
const Tl = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold',
  ],
  dR = '5.15.3';
function Af(e) {
  return e >= 0 && e <= 255;
}
function Os(e, t) {
  const { r: n, g: r, b: o, a: i } = new Pn(e).toRgb();
  if (i < 1) return e;
  const { r: a, g: l, b: s } = new Pn(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const f = Math.round((n - a * (1 - c)) / c),
      d = Math.round((r - l * (1 - c)) / c),
      v = Math.round((o - s * (1 - c)) / c);
    if (Af(f) && Af(d) && Af(v))
      return new Pn({
        r: f,
        g: d,
        b: v,
        a: Math.round(c * 100) / 100,
      }).toRgbString();
  }
  return new Pn({ r: n, g: r, b: o, a: 1 }).toRgbString();
}
var vR = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function hC(e) {
  const { override: t } = e,
    n = vR(e, ['override']),
    r = Object.assign({}, t);
  Object.keys(Rl).forEach((v) => {
    delete r[v];
  });
  const o = Object.assign(Object.assign({}, n), r),
    i = 480,
    a = 576,
    l = 768,
    s = 992,
    c = 1200,
    f = 1600;
  if (o.motion === !1) {
    const v = '0s';
    (o.motionDurationFast = v),
      (o.motionDurationMid = v),
      (o.motionDurationSlow = v);
  }
  return Object.assign(
    Object.assign(Object.assign({}, o), {
      colorFillContent: o.colorFillSecondary,
      colorFillContentHover: o.colorFill,
      colorFillAlter: o.colorFillQuaternary,
      colorBgContainerDisabled: o.colorFillTertiary,
      colorBorderBg: o.colorBgContainer,
      colorSplit: Os(o.colorBorderSecondary, o.colorBgContainer),
      colorTextPlaceholder: o.colorTextQuaternary,
      colorTextDisabled: o.colorTextQuaternary,
      colorTextHeading: o.colorText,
      colorTextLabel: o.colorTextSecondary,
      colorTextDescription: o.colorTextTertiary,
      colorTextLightSolid: o.colorWhite,
      colorHighlight: o.colorError,
      colorBgTextHover: o.colorFillSecondary,
      colorBgTextActive: o.colorFill,
      colorIcon: o.colorTextTertiary,
      colorIconHover: o.colorText,
      colorErrorOutline: Os(o.colorErrorBg, o.colorBgContainer),
      colorWarningOutline: Os(o.colorWarningBg, o.colorBgContainer),
      fontSizeIcon: o.fontSizeSM,
      lineWidthFocus: o.lineWidth * 4,
      lineWidth: o.lineWidth,
      controlOutlineWidth: o.lineWidth * 2,
      controlInteractiveSize: o.controlHeight / 2,
      controlItemBgHover: o.colorFillTertiary,
      controlItemBgActive: o.colorPrimaryBg,
      controlItemBgActiveHover: o.colorPrimaryBgHover,
      controlItemBgActiveDisabled: o.colorFill,
      controlTmpOutline: o.colorFillQuaternary,
      controlOutline: Os(o.colorPrimaryBg, o.colorBgContainer),
      lineType: o.lineType,
      borderRadius: o.borderRadius,
      borderRadiusXS: o.borderRadiusXS,
      borderRadiusSM: o.borderRadiusSM,
      borderRadiusLG: o.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: 'none',
      linkHoverDecoration: 'none',
      linkFocusDecoration: 'none',
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: o.sizeXXS,
      paddingXS: o.sizeXS,
      paddingSM: o.sizeSM,
      padding: o.size,
      paddingMD: o.sizeMD,
      paddingLG: o.sizeLG,
      paddingXL: o.sizeXL,
      paddingContentHorizontalLG: o.sizeLG,
      paddingContentVerticalLG: o.sizeMS,
      paddingContentHorizontal: o.sizeMS,
      paddingContentVertical: o.sizeSM,
      paddingContentHorizontalSM: o.size,
      paddingContentVerticalSM: o.sizeXS,
      marginXXS: o.sizeXXS,
      marginXS: o.sizeXS,
      marginSM: o.sizeSM,
      margin: o.size,
      marginMD: o.sizeMD,
      marginLG: o.sizeLG,
      marginXL: o.sizeXL,
      marginXXL: o.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: i,
      screenXSMin: i,
      screenXSMax: a - 1,
      screenSM: a,
      screenSMMin: a,
      screenSMMax: l - 1,
      screenMD: l,
      screenMDMin: l,
      screenMDMax: s - 1,
      screenLG: s,
      screenLGMin: s,
      screenLGMax: c - 1,
      screenXL: c,
      screenXLMin: c,
      screenXLMax: f - 1,
      screenXXL: f,
      screenXXLMin: f,
      boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
      boxShadowCard: `
      0 1px 2px -2px ${new Pn('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new Pn('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new Pn('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
    }),
    r
  );
}
var Ph = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const yC = {
    lineHeight: !0,
    lineHeightSM: !0,
    lineHeightLG: !0,
    lineHeightHeading1: !0,
    lineHeightHeading2: !0,
    lineHeightHeading3: !0,
    lineHeightHeading4: !0,
    lineHeightHeading5: !0,
    opacityLoading: !0,
    fontWeightStrong: !0,
    zIndexPopupBase: !0,
    zIndexBase: !0,
  },
  bC = {
    size: !0,
    sizeSM: !0,
    sizeLG: !0,
    sizeMD: !0,
    sizeXS: !0,
    sizeXXS: !0,
    sizeMS: !0,
    sizeXL: !0,
    sizeXXL: !0,
    sizeUnit: !0,
    sizeStep: !0,
    motionBase: !0,
    motionUnit: !0,
  },
  mR = {
    screenXS: !0,
    screenXSMin: !0,
    screenXSMax: !0,
    screenSM: !0,
    screenSMMin: !0,
    screenSMMax: !0,
    screenMD: !0,
    screenMDMin: !0,
    screenMDMax: !0,
    screenLG: !0,
    screenLGMin: !0,
    screenLGMax: !0,
    screenXL: !0,
    screenXLMin: !0,
    screenXLMax: !0,
    screenXXL: !0,
    screenXXLMin: !0,
  },
  CC = (e, t, n) => {
    const r = n.getDerivativeToken(e),
      { override: o } = t,
      i = Ph(t, ['override']);
    let a = Object.assign(Object.assign({}, r), { override: o });
    return (
      (a = hC(a)),
      i &&
        Object.entries(i).forEach((l) => {
          let [s, c] = l;
          const { theme: f } = c,
            d = Ph(c, ['theme']);
          let v = d;
          f &&
            (v = CC(
              Object.assign(Object.assign({}, a), d),
              { override: d },
              f
            )),
            (a[s] = v);
        }),
      a
    );
  };
function Un() {
  const {
      token: e,
      hashed: t,
      theme: n,
      override: r,
      cssVar: o,
    } = G.useContext(pC),
    i = `${dR}-${t || ''}`,
    a = n || mC,
    [l, s, c] = BO(a, [Rl, e], {
      salt: i,
      override: r,
      getComputedToken: CC,
      formatToken: hC,
      cssVar: o && {
        prefix: o.prefix,
        key: o.key,
        unitless: yC,
        ignore: bC,
        preserve: mR,
      },
    });
  return [a, c, t ? s : '', l, o];
}
function $n(e) {
  var t = u.useRef();
  t.current = e;
  var n = u.useCallback(function () {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function Xo(e) {
  var t = u.useRef(!1),
    n = u.useState(e),
    r = H(n, 2),
    o = r[0],
    i = r[1];
  u.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0;
      }
    );
  }, []);
  function a(l, s) {
    (s && t.current) || i(l);
  }
  return [o, a];
}
function zf(e) {
  return e !== void 0;
}
function Qo(e, t) {
  var n = t || {},
    r = n.defaultValue,
    o = n.value,
    i = n.onChange,
    a = n.postState,
    l = Xo(function () {
      return zf(o)
        ? o
        : zf(r)
          ? typeof r == 'function'
            ? r()
            : r
          : typeof e == 'function'
            ? e()
            : e;
    }),
    s = H(l, 2),
    c = s[0],
    f = s[1],
    d = o !== void 0 ? o : c,
    v = a ? a(d) : d,
    h = $n(i),
    b = Xo([d]),
    y = H(b, 2),
    S = y[0],
    p = y[1];
  sv(
    function () {
      var g = S[0];
      c !== g && h(c, g);
    },
    [S]
  ),
    sv(
      function () {
        zf(o) || f(o);
      },
      [o]
    );
  var m = $n(function (g, C) {
    f(g, C), p([d], C);
  });
  return [v, m];
}
const ap = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  vi = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: 'none',
      fontFamily: t ? 'inherit' : e.fontFamily,
    };
  },
  pR = () => ({
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: '-0.125em',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '> *': { lineHeight: 1 },
    svg: { display: 'inline-block' },
  }),
  Dl = () => ({
    '&::before': { display: 'table', content: '""' },
    '&::after': { display: 'table', clear: 'both', content: '""' },
  }),
  gR = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      transition: `color ${e.motionDurationSlow}`,
      '-webkit-text-decoration-skip': 'objects',
      '&:hover': { color: e.colorLinkHover },
      '&:active': { color: e.colorLinkActive },
      '&:active,\n  &:hover': {
        textDecoration: e.linkHoverDecoration,
        outline: 0,
      },
      '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
      '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' },
    },
  }),
  hR = (e, t, n) => {
    const { fontFamily: r, fontSize: o } = e,
      i = `[class^="${t}"], [class*=" ${t}"]`;
    return {
      [n ? `.${n}` : i]: {
        fontFamily: r,
        fontSize: o,
        boxSizing: 'border-box',
        '&::before, &::after': { boxSizing: 'border-box' },
        [i]: {
          boxSizing: 'border-box',
          '&::before, &::after': { boxSizing: 'border-box' },
        },
      },
    };
  },
  yR = (e) => ({
    outline: `${K(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s',
  }),
  Iu = (e) => ({ '&:focus-visible': Object.assign({}, yR(e)) });
function SC(e, t, n) {
  return (
    (t = ua(t)),
    kb(
      e,
      qm() ? Reflect.construct(t, n || [], ua(e).constructor) : t.apply(e, n)
    )
  );
}
let bR = yn(function e() {
  hn(this, e);
});
const wC = bR;
let CR = (function (e) {
  fi(t, e);
  function t(n) {
    var r;
    return (
      hn(this, t),
      (r = SC(this, t)),
      (r.result = 0),
      n instanceof t
        ? (r.result = n.result)
        : typeof n == 'number' && (r.result = n),
      r
    );
  }
  return (
    yn(t, [
      {
        key: 'add',
        value: function (r) {
          return (
            r instanceof t
              ? (this.result += r.result)
              : typeof r == 'number' && (this.result += r),
            this
          );
        },
      },
      {
        key: 'sub',
        value: function (r) {
          return (
            r instanceof t
              ? (this.result -= r.result)
              : typeof r == 'number' && (this.result -= r),
            this
          );
        },
      },
      {
        key: 'mul',
        value: function (r) {
          return (
            r instanceof t
              ? (this.result *= r.result)
              : typeof r == 'number' && (this.result *= r),
            this
          );
        },
      },
      {
        key: 'div',
        value: function (r) {
          return (
            r instanceof t
              ? (this.result /= r.result)
              : typeof r == 'number' && (this.result /= r),
            this
          );
        },
      },
      {
        key: 'equal',
        value: function () {
          return this.result;
        },
      },
    ]),
    t
  );
})(wC);
const xC = 'CALC_UNIT';
function Df(e) {
  return typeof e == 'number' ? `${e}${xC}` : e;
}
let SR = (function (e) {
  fi(t, e);
  function t(n) {
    var r;
    return (
      hn(this, t),
      (r = SC(this, t)),
      (r.result = ''),
      n instanceof t
        ? (r.result = `(${n.result})`)
        : typeof n == 'number'
          ? (r.result = Df(n))
          : typeof n == 'string' && (r.result = n),
      r
    );
  }
  return (
    yn(t, [
      {
        key: 'add',
        value: function (r) {
          return (
            r instanceof t
              ? (this.result = `${this.result} + ${r.getResult()}`)
              : (typeof r == 'number' || typeof r == 'string') &&
                (this.result = `${this.result} + ${Df(r)}`),
            (this.lowPriority = !0),
            this
          );
        },
      },
      {
        key: 'sub',
        value: function (r) {
          return (
            r instanceof t
              ? (this.result = `${this.result} - ${r.getResult()}`)
              : (typeof r == 'number' || typeof r == 'string') &&
                (this.result = `${this.result} - ${Df(r)}`),
            (this.lowPriority = !0),
            this
          );
        },
      },
      {
        key: 'mul',
        value: function (r) {
          return (
            this.lowPriority && (this.result = `(${this.result})`),
            r instanceof t
              ? (this.result = `${this.result} * ${r.getResult(!0)}`)
              : (typeof r == 'number' || typeof r == 'string') &&
                (this.result = `${this.result} * ${r}`),
            (this.lowPriority = !1),
            this
          );
        },
      },
      {
        key: 'div',
        value: function (r) {
          return (
            this.lowPriority && (this.result = `(${this.result})`),
            r instanceof t
              ? (this.result = `${this.result} / ${r.getResult(!0)}`)
              : (typeof r == 'number' || typeof r == 'string') &&
                (this.result = `${this.result} / ${r}`),
            (this.lowPriority = !1),
            this
          );
        },
      },
      {
        key: 'getResult',
        value: function (r) {
          return this.lowPriority || r ? `(${this.result})` : this.result;
        },
      },
      {
        key: 'equal',
        value: function (r) {
          const { unit: o = !0 } = r || {},
            i = new RegExp(`${xC}`, 'g');
          return (
            (this.result = this.result.replace(i, o ? 'px' : '')),
            typeof this.lowPriority < 'u' ? `calc(${this.result})` : this.result
          );
        },
      },
    ]),
    t
  );
})(wC);
const wR = (e) => {
  const t = e === 'css' ? SR : CR;
  return (n) => new t(n);
};
function xR(e) {
  return e === 'js'
    ? { max: Math.max, min: Math.min }
    : {
        max: function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return `max(${n.map((o) => K(o)).join(',')})`;
        },
        min: function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return `min(${n.map((o) => K(o)).join(',')})`;
        },
      };
}
const EC = typeof CSSINJS_STATISTIC < 'u';
let bv = !0;
function bn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!EC) return Object.assign.apply(Object, [{}].concat(t));
  bv = !1;
  const r = {};
  return (
    t.forEach((o) => {
      Object.keys(o).forEach((a) => {
        Object.defineProperty(r, a, {
          configurable: !0,
          enumerable: !0,
          get: () => o[a],
        });
      });
    }),
    (bv = !0),
    r
  );
}
const Rh = {};
function ER() {}
const $R = (e) => {
    let t,
      n = e,
      r = ER;
    return (
      EC &&
        typeof Proxy < 'u' &&
        ((t = new Set()),
        (n = new Proxy(e, {
          get(o, i) {
            return bv && t.add(i), o[i];
          },
        })),
        (r = (o, i) => {
          var a;
          Rh[o] = {
            global: Array.from(t),
            component: Object.assign(
              Object.assign(
                {},
                (a = Rh[o]) === null || a === void 0 ? void 0 : a.component
              ),
              i
            ),
          };
        })),
      { token: n, keys: t, flush: r }
    );
  },
  $C = (e, t) => {
    const [n, r] = Un();
    return vv(
      {
        theme: n,
        token: r,
        hashId: '',
        path: ['ant-design-icons', e],
        nonce: () => (t == null ? void 0 : t.nonce),
      },
      () => [
        {
          [`.${e}`]: Object.assign(Object.assign({}, pR()), {
            [`.${e} .${e}-icon`]: { display: 'block' },
          }),
        },
      ]
    );
  },
  OC = (e, t, n) => {
    var r;
    return typeof n == 'function'
      ? n(bn(t, (r = t[e]) !== null && r !== void 0 ? r : {}))
      : n ?? {};
  },
  PC = (e, t, n, r) => {
    const o = Object.assign({}, t[e]);
    if (r != null && r.deprecatedTokens) {
      const { deprecatedTokens: a } = r;
      a.forEach((l) => {
        let [s, c] = l;
        var f;
        ((o != null && o[s]) || (o != null && o[c])) &&
          (((f = o[c]) !== null && f !== void 0) ||
            (o[c] = o == null ? void 0 : o[s]));
      });
    }
    const i = Object.assign(Object.assign({}, n), o);
    return (
      Object.keys(i).forEach((a) => {
        i[a] === t[a] && delete i[a];
      }),
      i
    );
  },
  OR = (e, t) =>
    `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2')].filter(Boolean).join('-')}`;
function lp(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const o = Array.isArray(e) ? e : [e, e],
    [i] = o,
    a = o.join('-');
  return function (l) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : l;
    const [c, f, d, v, h] = Un(),
      { getPrefixCls: b, iconPrefixCls: y, csp: S } = u.useContext(Ge),
      p = b(),
      m = h ? 'css' : 'js',
      g = wR(m),
      { max: C, min: E } = xR(m),
      w = {
        theme: c,
        token: v,
        hashId: d,
        nonce: () => (S == null ? void 0 : S.nonce),
        clientOnly: r.clientOnly,
        order: r.order || -999,
      };
    return (
      vv(
        Object.assign(Object.assign({}, w), {
          clientOnly: !1,
          path: ['Shared', p],
        }),
        () => [{ '&': gR(v) }]
      ),
      $C(y, S),
      [
        vv(Object.assign(Object.assign({}, w), { path: [a, l, y] }), () => {
          if (r.injectStyle === !1) return [];
          const { token: O, flush: P } = $R(v),
            _ = OC(i, f, n),
            M = `.${l}`,
            L = PC(i, f, _, { deprecatedTokens: r.deprecatedTokens });
          h &&
            Object.keys(_).forEach((B) => {
              _[B] = `var(${Ub(B, OR(i, h.prefix))})`;
            });
          const R = bn(
              O,
              {
                componentCls: M,
                prefixCls: l,
                iconCls: `.${y}`,
                antCls: `.${p}`,
                calc: g,
                max: C,
                min: E,
              },
              h ? _ : L
            ),
            D = t(R, {
              hashId: d,
              prefixCls: l,
              rootPrefixCls: p,
              iconPrefixCls: y,
            });
          return P(i, L), [r.resetStyle === !1 ? null : hR(R, l, s), D];
        }),
        d,
      ]
    );
  };
}
const RC = (e, t, n, r) => {
    const o = lp(e, t, n, Object.assign({ resetStyle: !1, order: -998 }, r));
    return (a) => {
      let { prefixCls: l, rootCls: s = l } = a;
      return o(l, s), null;
    };
  },
  PR = (e, t, n) => {
    function r(c) {
      return `${e}${c.slice(0, 1).toUpperCase()}${c.slice(1)}`;
    }
    const { unitless: o = {}, injectStyle: i = !0 } = n ?? {},
      a = { [r('zIndexPopup')]: !0 };
    Object.keys(o).forEach((c) => {
      a[r(c)] = o[c];
    });
    const l = (c) => {
      let { rootCls: f, cssVar: d } = c;
      const [, v] = Un();
      return (
        pP(
          {
            path: [e],
            prefix: d.prefix,
            key: d == null ? void 0 : d.key,
            unitless: Object.assign(Object.assign({}, yC), a),
            ignore: bC,
            token: v,
            scope: f,
          },
          () => {
            const h = OC(e, v, t),
              b = PC(e, v, h, {
                deprecatedTokens: n == null ? void 0 : n.deprecatedTokens,
              });
            return (
              Object.keys(h).forEach((y) => {
                (b[r(y)] = b[y]), delete b[y];
              }),
              b
            );
          }
        ),
        null
      );
    };
    return (c) => {
      const [, , , , f] = Un();
      return [
        (d) =>
          i && f
            ? G.createElement(
                G.Fragment,
                null,
                G.createElement(l, { rootCls: c, cssVar: f, component: e }),
                d
              )
            : d,
        f == null ? void 0 : f.key,
      ];
    };
  },
  Oo = (e, t, n, r) => {
    const o = lp(e, t, n, r),
      i = PR(Array.isArray(e) ? e[0] : e, n, r);
    return function (a) {
      let l =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a;
      const [, s] = o(a, l),
        [c, f] = i(l);
      return [c, s, f];
    };
  };
function RR(e, t) {
  return Tl.reduce((n, r) => {
    const o = e[`${r}1`],
      i = e[`${r}3`],
      a = e[`${r}6`],
      l = e[`${r}7`];
    return Object.assign(
      Object.assign({}, n),
      t(r, { lightColor: o, lightBorderColor: i, darkColor: a, textColor: l })
    );
  }, {});
}
const TR = Object.assign({}, qc),
  { useId: Th } = TR,
  _R = () => '',
  MR = typeof Th > 'u' ? _R : Th;
function IR(e, t, n) {
  var r;
  lC();
  const o = e || {},
    i =
      o.inherit === !1 || !t
        ? Object.assign(Object.assign({}, hv), {
            hashed:
              (r = t == null ? void 0 : t.hashed) !== null && r !== void 0
                ? r
                : hv.hashed,
            cssVar: t == null ? void 0 : t.cssVar,
          })
        : t,
    a = MR();
  return Eu(
    () => {
      var l, s;
      if (!e) return t;
      const c = Object.assign({}, i.components);
      Object.keys(e.components || {}).forEach((v) => {
        c[v] = Object.assign(Object.assign({}, c[v]), e.components[v]);
      });
      const f = `css-var-${a.replace(/:/g, '')}`,
        d =
          ((l = o.cssVar) !== null && l !== void 0 ? l : i.cssVar) &&
          Object.assign(
            Object.assign(
              Object.assign(
                { prefix: n == null ? void 0 : n.prefixCls },
                typeof i.cssVar == 'object' ? i.cssVar : {}
              ),
              typeof o.cssVar == 'object' ? o.cssVar : {}
            ),
            {
              key:
                (typeof o.cssVar == 'object' &&
                  ((s = o.cssVar) === null || s === void 0 ? void 0 : s.key)) ||
                f,
            }
          );
      return Object.assign(Object.assign(Object.assign({}, i), o), {
        token: Object.assign(Object.assign({}, i.token), o.token),
        components: c,
        cssVar: d,
      });
    },
    [o, i],
    (l, s) =>
      l.some((c, f) => {
        const d = s[f];
        return !Pu(c, d, !0);
      })
  );
}
var kR = ['children'],
  TC = u.createContext({});
function NR(e) {
  var t = e.children,
    n = Ae(e, kR);
  return u.createElement(TC.Provider, { value: n }, t);
}
var jR = (function (e) {
    fi(n, e);
    var t = zl(n);
    function n() {
      return hn(this, n), t.apply(this, arguments);
    }
    return (
      yn(n, [
        {
          key: 'render',
          value: function () {
            return this.props.children;
          },
        },
      ]),
      n
    );
  })(u.Component),
  jo = 'none',
  Ps = 'appear',
  Rs = 'enter',
  Ts = 'leave',
  _h = 'none',
  tr = 'prepare',
  Ki = 'start',
  Gi = 'active',
  sp = 'end',
  _C = 'prepared';
function Mh(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
    (n['Moz'.concat(e)] = 'moz'.concat(t)),
    (n['ms'.concat(e)] = 'MS'.concat(t)),
    (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
    n
  );
}
function LR(e, t) {
  var n = {
    animationend: Mh('Animation', 'AnimationEnd'),
    transitionend: Mh('Transition', 'TransitionEnd'),
  };
  return (
    e &&
      ('AnimationEvent' in t || delete n.animationend.animation,
      'TransitionEvent' in t || delete n.transitionend.transition),
    n
  );
}
var FR = LR(an(), typeof window < 'u' ? window : {}),
  MC = {};
if (an()) {
  var AR = document.createElement('div');
  MC = AR.style;
}
var _s = {};
function IC(e) {
  if (_s[e]) return _s[e];
  var t = FR[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in MC)
        return (_s[e] = t[i]), _s[e];
    }
  return '';
}
var kC = IC('animationend'),
  NC = IC('transitionend'),
  jC = !!(kC && NC),
  Ih = kC || 'animationend',
  kh = NC || 'transitionend';
function Nh(e, t) {
  if (!e) return null;
  if (ke(e) === 'object') {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return ''.concat(e, '-').concat(t);
}
const zR = function (e) {
  var t = u.useRef(),
    n = u.useRef(e);
  n.current = e;
  var r = u.useCallback(function (a) {
    n.current(a);
  }, []);
  function o(a) {
    a && (a.removeEventListener(kh, r), a.removeEventListener(Ih, r));
  }
  function i(a) {
    t.current && t.current !== a && o(t.current),
      a &&
        a !== t.current &&
        (a.addEventListener(kh, r), a.addEventListener(Ih, r), (t.current = a));
  }
  return (
    u.useEffect(function () {
      return function () {
        o(t.current);
      };
    }, []),
    [i, o]
  );
};
var LC = an() ? u.useLayoutEffect : u.useEffect;
const DR = function () {
  var e = u.useRef(null);
  function t() {
    Zt.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Zt(function () {
      o <= 1
        ? r({
            isCanceled: function () {
              return i !== e.current;
            },
          })
        : n(r, o - 1);
    });
    e.current = i;
  }
  return (
    u.useEffect(function () {
      return function () {
        t();
      };
    }, []),
    [n, t]
  );
};
var BR = [tr, Ki, Gi, sp],
  HR = [tr, _C],
  FC = !1,
  VR = !0;
function AC(e) {
  return e === Gi || e === sp;
}
const WR = function (e, t, n) {
  var r = Xo(_h),
    o = H(r, 2),
    i = o[0],
    a = o[1],
    l = DR(),
    s = H(l, 2),
    c = s[0],
    f = s[1];
  function d() {
    a(tr, !0);
  }
  var v = t ? HR : BR;
  return (
    LC(
      function () {
        if (i !== _h && i !== sp) {
          var h = v.indexOf(i),
            b = v[h + 1],
            y = n(i);
          y === FC
            ? a(b, !0)
            : b &&
              c(function (S) {
                function p() {
                  S.isCanceled() || a(b, !0);
                }
                y === !0 ? p() : Promise.resolve(y).then(p);
              });
        }
      },
      [e, i]
    ),
    u.useEffect(function () {
      return function () {
        f();
      };
    }, []),
    [d, i]
  );
};
function UR(e, t, n, r) {
  var o = r.motionEnter,
    i = o === void 0 ? !0 : o,
    a = r.motionAppear,
    l = a === void 0 ? !0 : a,
    s = r.motionLeave,
    c = s === void 0 ? !0 : s,
    f = r.motionDeadline,
    d = r.motionLeaveImmediately,
    v = r.onAppearPrepare,
    h = r.onEnterPrepare,
    b = r.onLeavePrepare,
    y = r.onAppearStart,
    S = r.onEnterStart,
    p = r.onLeaveStart,
    m = r.onAppearActive,
    g = r.onEnterActive,
    C = r.onLeaveActive,
    E = r.onAppearEnd,
    w = r.onEnterEnd,
    x = r.onLeaveEnd,
    O = r.onVisibleChanged,
    P = Xo(),
    _ = H(P, 2),
    M = _[0],
    L = _[1],
    R = Xo(jo),
    D = H(R, 2),
    B = D[0],
    k = D[1],
    T = Xo(null),
    $ = H(T, 2),
    N = $[0],
    I = $[1],
    F = u.useRef(!1),
    A = u.useRef(null);
  function V() {
    return n();
  }
  var U = u.useRef(!1);
  function Y() {
    k(jo, !0), I(null, !0);
  }
  function te(Z) {
    var fe = V();
    if (!(Z && !Z.deadline && Z.target !== fe)) {
      var ge = U.current,
        Se;
      B === Ps && ge
        ? (Se = E == null ? void 0 : E(fe, Z))
        : B === Rs && ge
          ? (Se = w == null ? void 0 : w(fe, Z))
          : B === Ts && ge && (Se = x == null ? void 0 : x(fe, Z)),
        B !== jo && ge && Se !== !1 && Y();
    }
  }
  var J = zR(te),
    Q = H(J, 1),
    ee = Q[0],
    se = function (fe) {
      var ge, Se, de;
      switch (fe) {
        case Ps:
          return (ge = {}), j(ge, tr, v), j(ge, Ki, y), j(ge, Gi, m), ge;
        case Rs:
          return (Se = {}), j(Se, tr, h), j(Se, Ki, S), j(Se, Gi, g), Se;
        case Ts:
          return (de = {}), j(de, tr, b), j(de, Ki, p), j(de, Gi, C), de;
        default:
          return {};
      }
    },
    pe = u.useMemo(
      function () {
        return se(B);
      },
      [B]
    ),
    Le = WR(B, !e, function (Z) {
      if (Z === tr) {
        var fe = pe[tr];
        return fe ? fe(V()) : FC;
      }
      if (ce in pe) {
        var ge;
        I(
          ((ge = pe[ce]) === null || ge === void 0
            ? void 0
            : ge.call(pe, V(), null)) || null
        );
      }
      return (
        ce === Gi &&
          (ee(V()),
          f > 0 &&
            (clearTimeout(A.current),
            (A.current = setTimeout(function () {
              te({ deadline: !0 });
            }, f)))),
        ce === _C && Y(),
        VR
      );
    }),
    he = H(Le, 2),
    Ce = he[0],
    ce = he[1],
    Pe = AC(ce);
  (U.current = Pe),
    LC(
      function () {
        L(t);
        var Z = F.current;
        F.current = !0;
        var fe;
        !Z && t && l && (fe = Ps),
          Z && t && i && (fe = Rs),
          ((Z && !t && c) || (!Z && d && !t && c)) && (fe = Ts);
        var ge = se(fe);
        fe && (e || ge[tr]) ? (k(fe), Ce()) : k(jo);
      },
      [t]
    ),
    u.useEffect(
      function () {
        ((B === Ps && !l) || (B === Rs && !i) || (B === Ts && !c)) && k(jo);
      },
      [l, i, c]
    ),
    u.useEffect(function () {
      return function () {
        (F.current = !1), clearTimeout(A.current);
      };
    }, []);
  var $e = u.useRef(!1);
  u.useEffect(
    function () {
      M && ($e.current = !0),
        M !== void 0 &&
          B === jo &&
          (($e.current || M) && (O == null || O(M)), ($e.current = !0));
    },
    [M, B]
  );
  var ve = N;
  return (
    pe[tr] && ce === Ki && (ve = z({ transition: 'none' }, ve)),
    [B, ce, ve, M ?? t]
  );
}
function KR(e) {
  var t = e;
  ke(e) === 'object' && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = u.forwardRef(function (o, i) {
    var a = o.visible,
      l = a === void 0 ? !0 : a,
      s = o.removeOnLeave,
      c = s === void 0 ? !0 : s,
      f = o.forceRender,
      d = o.children,
      v = o.motionName,
      h = o.leavedClassName,
      b = o.eventProps,
      y = u.useContext(TC),
      S = y.motion,
      p = n(o, S),
      m = u.useRef(),
      g = u.useRef();
    function C() {
      try {
        return m.current instanceof HTMLElement ? m.current : qs(g.current);
      } catch {
        return null;
      }
    }
    var E = UR(p, l, C, o),
      w = H(E, 4),
      x = w[0],
      O = w[1],
      P = w[2],
      _ = w[3],
      M = u.useRef(_);
    _ && (M.current = !0);
    var L = u.useCallback(
        function (I) {
          (m.current = I), Gm(i, I);
        },
        [i]
      ),
      R,
      D = z(z({}, b), {}, { visible: l });
    if (!d) R = null;
    else if (x === jo)
      _
        ? (R = d(z({}, D), L))
        : !c && M.current && h
          ? (R = d(z(z({}, D), {}, { className: h }), L))
          : f || (!c && !h)
            ? (R = d(z(z({}, D), {}, { style: { display: 'none' } }), L))
            : (R = null);
    else {
      var B, k;
      O === tr
        ? (k = 'prepare')
        : AC(O)
          ? (k = 'active')
          : O === Ki && (k = 'start');
      var T = Nh(v, ''.concat(x, '-').concat(k));
      R = d(
        z(
          z({}, D),
          {},
          {
            className: q(
              Nh(v, x),
              ((B = {}), j(B, T, T && k), j(B, v, typeof v == 'string'), B)
            ),
            style: P,
          }
        ),
        L
      );
    }
    if (u.isValidElement(R) && ui(R)) {
      var $ = R,
        N = $.ref;
      N || (R = u.cloneElement(R, { ref: L }));
    }
    return u.createElement(jR, { ref: g }, R);
  });
  return (r.displayName = 'CSSMotion'), r;
}
const Wr = KR(jC);
var Cv = 'add',
  Sv = 'keep',
  wv = 'remove',
  Bf = 'removed';
function GR(e) {
  var t;
  return (
    e && ke(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
    z(z({}, t), {}, { key: String(t.key) })
  );
}
function xv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(GR);
}
function qR() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    o = t.length,
    i = xv(e),
    a = xv(t);
  i.forEach(function (c) {
    for (var f = !1, d = r; d < o; d += 1) {
      var v = a[d];
      if (v.key === c.key) {
        r < d &&
          ((n = n.concat(
            a.slice(r, d).map(function (h) {
              return z(z({}, h), {}, { status: Cv });
            })
          )),
          (r = d)),
          n.push(z(z({}, v), {}, { status: Sv })),
          (r += 1),
          (f = !0);
        break;
      }
    }
    f || n.push(z(z({}, c), {}, { status: wv }));
  }),
    r < o &&
      (n = n.concat(
        a.slice(r).map(function (c) {
          return z(z({}, c), {}, { status: Cv });
        })
      ));
  var l = {};
  n.forEach(function (c) {
    var f = c.key;
    l[f] = (l[f] || 0) + 1;
  });
  var s = Object.keys(l).filter(function (c) {
    return l[c] > 1;
  });
  return (
    s.forEach(function (c) {
      (n = n.filter(function (f) {
        var d = f.key,
          v = f.status;
        return d !== c || v !== wv;
      })),
        n.forEach(function (f) {
          f.key === c && (f.status = Sv);
        });
    }),
    n
  );
}
var XR = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  QR = ['status'],
  YR = [
    'eventProps',
    'visible',
    'children',
    'motionName',
    'motionAppear',
    'motionEnter',
    'motionLeave',
    'motionLeaveImmediately',
    'motionDeadline',
    'removeOnLeave',
    'leavedClassName',
    'onAppearPrepare',
    'onAppearStart',
    'onAppearActive',
    'onAppearEnd',
    'onEnterStart',
    'onEnterActive',
    'onEnterEnd',
    'onLeaveStart',
    'onLeaveActive',
    'onLeaveEnd',
  ];
function ZR(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wr,
    n = (function (r) {
      fi(i, r);
      var o = zl(i);
      function i() {
        var a;
        hn(this, i);
        for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++)
          s[c] = arguments[c];
        return (
          (a = o.call.apply(o, [this].concat(s))),
          j(Ne(a), 'state', { keyEntities: [] }),
          j(Ne(a), 'removeKey', function (f) {
            var d = a.state.keyEntities,
              v = d.map(function (h) {
                return h.key !== f ? h : z(z({}, h), {}, { status: Bf });
              });
            return (
              a.setState({ keyEntities: v }),
              v.filter(function (h) {
                var b = h.status;
                return b !== Bf;
              }).length
            );
          }),
          a
        );
      }
      return (
        yn(
          i,
          [
            {
              key: 'render',
              value: function () {
                var l = this,
                  s = this.state.keyEntities,
                  c = this.props,
                  f = c.component,
                  d = c.children,
                  v = c.onVisibleChanged,
                  h = c.onAllRemoved,
                  b = Ae(c, XR),
                  y = f || u.Fragment,
                  S = {};
                return (
                  YR.forEach(function (p) {
                    (S[p] = b[p]), delete b[p];
                  }),
                  delete b.keys,
                  u.createElement(
                    y,
                    b,
                    s.map(function (p, m) {
                      var g = p.status,
                        C = Ae(p, QR),
                        E = g === Cv || g === Sv;
                      return u.createElement(
                        t,
                        ue({}, S, {
                          key: C.key,
                          visible: E,
                          eventProps: C,
                          onVisibleChanged: function (x) {
                            if ((v == null || v(x, { key: C.key }), !x)) {
                              var O = l.removeKey(C.key);
                              O === 0 && h && h();
                            }
                          },
                        }),
                        function (w, x) {
                          return d(z(z({}, w), {}, { index: m }), x);
                        }
                      );
                    })
                  )
                );
              },
            },
          ],
          [
            {
              key: 'getDerivedStateFromProps',
              value: function (l, s) {
                var c = l.keys,
                  f = s.keyEntities,
                  d = xv(c),
                  v = qR(f, d);
                return {
                  keyEntities: v.filter(function (h) {
                    var b = f.find(function (y) {
                      var S = y.key;
                      return h.key === S;
                    });
                    return !(b && b.status === Bf && h.status === wv);
                  }),
                };
              },
            },
          ]
        ),
        i
      );
    })(u.Component);
  return j(n, 'defaultProps', { component: 'div' }), n;
}
ZR(jC);
function JR(e) {
  const { children: t } = e,
    [, n] = Un(),
    { motion: r } = n,
    o = u.useRef(!1);
  return (
    (o.current = o.current || r === !1),
    o.current ? u.createElement(NR, { motion: r }, t) : t
  );
}
const eT = () => null;
var tT = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const nT = [
    'getTargetContainer',
    'getPopupContainer',
    'renderEmpty',
    'input',
    'pagination',
    'form',
    'select',
    'button',
  ],
  rT = 'ant';
let Ac, zC, DC, BC;
function nc() {
  return Ac || rT;
}
function oT() {
  return zC || ip;
}
function iT(e) {
  return Object.keys(e).some((t) => t.endsWith('Color'));
}
const aT = (e) => {
    const { prefixCls: t, iconPrefixCls: n, theme: r, holderRender: o } = e;
    t !== void 0 && (Ac = t),
      n !== void 0 && (zC = n),
      'holderRender' in e && (BC = o),
      r && (iT(r) ? cR(nc(), r) : (DC = r));
  },
  lT = () => ({
    getPrefixCls: (e, t) => t || (e ? `${nc()}-${e}` : nc()),
    getIconPrefixCls: oT,
    getRootPrefixCls: () => Ac || nc(),
    getTheme: () => DC,
    holderRender: BC,
  }),
  sT = (e) => {
    const {
        children: t,
        csp: n,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        form: a,
        locale: l,
        componentSize: s,
        direction: c,
        space: f,
        virtual: d,
        dropdownMatchSelectWidth: v,
        popupMatchSelectWidth: h,
        popupOverflow: b,
        legacyLocale: y,
        parentContext: S,
        iconPrefixCls: p,
        theme: m,
        componentDisabled: g,
        segmented: C,
        statistic: E,
        spin: w,
        calendar: x,
        carousel: O,
        cascader: P,
        collapse: _,
        typography: M,
        checkbox: L,
        descriptions: R,
        divider: D,
        drawer: B,
        skeleton: k,
        steps: T,
        image: $,
        layout: N,
        list: I,
        mentions: F,
        modal: A,
        progress: V,
        result: U,
        slider: Y,
        breadcrumb: te,
        menu: J,
        pagination: Q,
        input: ee,
        textArea: se,
        empty: pe,
        badge: Le,
        radio: he,
        rate: Ce,
        switch: ce,
        transfer: Pe,
        avatar: $e,
        message: ve,
        tag: Z,
        table: fe,
        card: ge,
        tabs: Se,
        timeline: de,
        timePicker: ze,
        upload: qe,
        notification: xe,
        tree: Ut,
        colorPicker: pt,
        datePicker: Te,
        rangePicker: Ie,
        flex: We,
        wave: Mt,
        dropdown: St,
        warning: et,
        tour: Qe,
      } = e,
      tt = u.useCallback(
        (ne, le) => {
          const { prefixCls: Oe } = e;
          if (le) return le;
          const Fe = Oe || S.getPrefixCls('');
          return ne ? `${Fe}-${ne}` : Fe;
        },
        [S.getPrefixCls, e.prefixCls]
      ),
      nt = p || S.iconPrefixCls || ip,
      Lt = n || S.csp;
    $C(nt, Lt);
    const ct = IR(m, S.theme, { prefixCls: tt('') }),
      Xe = {
        csp: Lt,
        autoInsertSpaceInButton: r,
        alert: o,
        anchor: i,
        locale: l || y,
        direction: c,
        space: f,
        virtual: d,
        popupMatchSelectWidth: h ?? v,
        popupOverflow: b,
        getPrefixCls: tt,
        iconPrefixCls: nt,
        theme: ct,
        segmented: C,
        statistic: E,
        spin: w,
        calendar: x,
        carousel: O,
        cascader: P,
        collapse: _,
        typography: M,
        checkbox: L,
        descriptions: R,
        divider: D,
        drawer: B,
        skeleton: k,
        steps: T,
        image: $,
        input: ee,
        textArea: se,
        layout: N,
        list: I,
        mentions: F,
        modal: A,
        progress: V,
        result: U,
        slider: Y,
        breadcrumb: te,
        menu: J,
        pagination: Q,
        empty: pe,
        badge: Le,
        radio: he,
        rate: Ce,
        switch: ce,
        transfer: Pe,
        avatar: $e,
        message: ve,
        tag: Z,
        table: fe,
        card: ge,
        tabs: Se,
        timeline: de,
        timePicker: ze,
        upload: qe,
        notification: xe,
        tree: Ut,
        colorPicker: pt,
        datePicker: Te,
        rangePicker: Ie,
        flex: We,
        wave: Mt,
        dropdown: St,
        warning: et,
        tour: Qe,
      },
      gt = Object.assign({}, S);
    Object.keys(Xe).forEach((ne) => {
      Xe[ne] !== void 0 && (gt[ne] = Xe[ne]);
    }),
      nT.forEach((ne) => {
        const le = e[ne];
        le && (gt[ne] = le);
      });
    const wt = Eu(
        () => gt,
        gt,
        (ne, le) => {
          const Oe = Object.keys(ne),
            Fe = Object.keys(le);
          return Oe.length !== Fe.length || Oe.some((xt) => ne[xt] !== le[xt]);
        }
      ),
      ht = u.useMemo(() => ({ prefixCls: nt, csp: Lt }), [nt, Lt]);
    let ye = u.createElement(
      u.Fragment,
      null,
      u.createElement(eT, { dropdownMatchSelectWidth: v }),
      t
    );
    const me = u.useMemo(() => {
      var ne, le, Oe, Fe;
      return Ui(
        ((ne = oi.Form) === null || ne === void 0
          ? void 0
          : ne.defaultValidateMessages) || {},
        ((Oe =
          (le = wt.locale) === null || le === void 0 ? void 0 : le.Form) ===
          null || Oe === void 0
          ? void 0
          : Oe.defaultValidateMessages) || {},
        ((Fe = wt.form) === null || Fe === void 0
          ? void 0
          : Fe.validateMessages) || {},
        (a == null ? void 0 : a.validateMessages) || {}
      );
    }, [wt, a == null ? void 0 : a.validateMessages]);
    Object.keys(me).length > 0 &&
      (ye = u.createElement(wP.Provider, { value: me }, ye)),
      l && (ye = u.createElement(MP, { locale: l, _ANT_MARK__: TP }, ye)),
      (nt || Lt) && (ye = u.createElement(np.Provider, { value: ht }, ye)),
      s && (ye = u.createElement(uR, { size: s }, ye)),
      (ye = u.createElement(JR, null, ye));
    const ot = u.useMemo(() => {
      const ne = ct || {},
        { algorithm: le, token: Oe, components: Fe, cssVar: xt } = ne,
        yt = tT(ne, ['algorithm', 'token', 'components', 'cssVar']),
        un = le && (!Array.isArray(le) || le.length > 0) ? av(le) : mC,
        Kt = {};
      Object.entries(Fe || {}).forEach((Ot) => {
        let [kn, Gt] = Ot;
        const Ee = Object.assign({}, Gt);
        'algorithm' in Ee &&
          (Ee.algorithm === !0
            ? (Ee.theme = un)
            : (Array.isArray(Ee.algorithm) ||
                typeof Ee.algorithm == 'function') &&
              (Ee.theme = av(Ee.algorithm)),
          delete Ee.algorithm),
          (Kt[kn] = Ee);
      });
      const Ft = Object.assign(Object.assign({}, Rl), Oe);
      return Object.assign(Object.assign({}, yt), {
        theme: un,
        token: Ft,
        components: Kt,
        override: Object.assign({ override: Ft }, Kt),
        cssVar: xt,
      });
    }, [ct]);
    return (
      m && (ye = u.createElement(pC.Provider, { value: ot }, ye)),
      wt.warning &&
        (ye = u.createElement(SP.Provider, { value: wt.warning }, ye)),
      g !== void 0 && (ye = u.createElement(gC, { disabled: g }, ye)),
      u.createElement(Ge.Provider, { value: wt }, ye)
    );
  },
  Po = (e) => {
    const t = u.useContext(Ge),
      n = u.useContext(rp);
    return u.createElement(
      sT,
      Object.assign({ parentContext: t, legacyLocale: n }, e)
    );
  };
Po.ConfigContext = Ge;
Po.SizeContext = Mu;
Po.config = aT;
Po.useConfig = fR;
Object.defineProperty(Po, 'SizeContext', { get: () => Mu });
var cT = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z',
        },
      },
    ],
  },
  name: 'check-circle',
  theme: 'filled',
};
const uT = cT;
function HC(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e);
}
function fT(e) {
  return HC(e) instanceof ShadowRoot;
}
function zc(e) {
  return fT(e) ? HC(e) : null;
}
function dT(e) {
  return e.replace(/-(.)/g, function (t, n) {
    return n.toUpperCase();
  });
}
function vT(e, t) {
  on(e, '[@ant-design/icons] '.concat(t));
}
function jh(e) {
  return (
    ke(e) === 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (ke(e.icon) === 'object' || typeof e.icon == 'function')
  );
}
function Lh() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    switch (n) {
      case 'class':
        (t.className = r), delete t.class;
        break;
      default:
        delete t[n], (t[dT(n)] = r);
    }
    return t;
  }, {});
}
function Ev(e, t, n) {
  return n
    ? G.createElement(
        e.tag,
        z(z({ key: t }, Lh(e.attrs)), n),
        (e.children || []).map(function (r, o) {
          return Ev(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        })
      )
    : G.createElement(
        e.tag,
        z({ key: t }, Lh(e.attrs)),
        (e.children || []).map(function (r, o) {
          return Ev(r, ''.concat(t, '-').concat(e.tag, '-').concat(o));
        })
      );
}
function VC(e) {
  return ii(e)[0];
}
function WC(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var mT = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  pT = function (t) {
    var n = u.useContext(np),
      r = n.csp,
      o = n.prefixCls,
      i = mT;
    o && (i = i.replace(/anticon/g, o)),
      u.useEffect(function () {
        var a = t.current,
          l = zc(a);
        Br(i, '@ant-design-icons', { prepend: !0, csp: r, attachTo: l });
      }, []);
  },
  gT = [
    'icon',
    'className',
    'onClick',
    'style',
    'primaryColor',
    'secondaryColor',
  ],
  al = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
function hT(e) {
  var t = e.primaryColor,
    n = e.secondaryColor;
  (al.primaryColor = t),
    (al.secondaryColor = n || VC(t)),
    (al.calculated = !!n);
}
function yT() {
  return z({}, al);
}
var ku = function (t) {
  var n = t.icon,
    r = t.className,
    o = t.onClick,
    i = t.style,
    a = t.primaryColor,
    l = t.secondaryColor,
    s = Ae(t, gT),
    c = u.useRef(),
    f = al;
  if (
    (a && (f = { primaryColor: a, secondaryColor: l || VC(a) }),
    pT(c),
    vT(jh(n), 'icon should be icon definiton, but got '.concat(n)),
    !jh(n))
  )
    return null;
  var d = n;
  return (
    d &&
      typeof d.icon == 'function' &&
      (d = z(z({}, d), {}, { icon: d.icon(f.primaryColor, f.secondaryColor) })),
    Ev(
      d.icon,
      'svg-'.concat(d.name),
      z(
        z(
          {
            className: r,
            onClick: o,
            style: i,
            'data-icon': d.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          s
        ),
        {},
        { ref: c }
      )
    )
  );
};
ku.displayName = 'IconReact';
ku.getTwoToneColors = yT;
ku.setTwoToneColors = hT;
const cp = ku;
function UC(e) {
  var t = WC(e),
    n = H(t, 2),
    r = n[0],
    o = n[1];
  return cp.setTwoToneColors({ primaryColor: r, secondaryColor: o });
}
function bT() {
  var e = cp.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var CT = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
];
UC(qP.primary);
var Nu = u.forwardRef(function (e, t) {
  var n = e.className,
    r = e.icon,
    o = e.spin,
    i = e.rotate,
    a = e.tabIndex,
    l = e.onClick,
    s = e.twoToneColor,
    c = Ae(e, CT),
    f = u.useContext(np),
    d = f.prefixCls,
    v = d === void 0 ? 'anticon' : d,
    h = f.rootClassName,
    b = q(
      h,
      v,
      j(
        j({}, ''.concat(v, '-').concat(r.name), !!r.name),
        ''.concat(v, '-spin'),
        !!o || r.name === 'loading'
      ),
      n
    ),
    y = a;
  y === void 0 && l && (y = -1);
  var S = i
      ? {
          msTransform: 'rotate('.concat(i, 'deg)'),
          transform: 'rotate('.concat(i, 'deg)'),
        }
      : void 0,
    p = WC(s),
    m = H(p, 2),
    g = m[0],
    C = m[1];
  return u.createElement(
    'span',
    ue({ role: 'img', 'aria-label': r.name }, c, {
      ref: t,
      tabIndex: y,
      onClick: l,
      className: b,
    }),
    u.createElement(cp, {
      icon: r,
      primaryColor: g,
      secondaryColor: C,
      style: S,
    })
  );
});
Nu.displayName = 'AntdIcon';
Nu.getTwoToneColor = bT;
Nu.setTwoToneColor = UC;
const Ur = Nu;
var ST = function (t, n) {
  return u.createElement(Ur, ue({}, t, { ref: n, icon: uT }));
};
const wT = u.forwardRef(ST);
var xT = {
  icon: {
    tag: 'svg',
    attrs: {
      'fill-rule': 'evenodd',
      viewBox: '64 64 896 896',
      focusable: 'false',
    },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z',
        },
      },
    ],
  },
  name: 'close-circle',
  theme: 'filled',
};
const ET = xT;
var $T = function (t, n) {
  return u.createElement(Ur, ue({}, t, { ref: n, icon: ET }));
};
const OT = u.forwardRef($T);
var PT = {
  icon: {
    tag: 'svg',
    attrs: {
      'fill-rule': 'evenodd',
      viewBox: '64 64 896 896',
      focusable: 'false',
    },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z',
        },
      },
    ],
  },
  name: 'close',
  theme: 'outlined',
};
const RT = PT;
var TT = function (t, n) {
  return u.createElement(Ur, ue({}, t, { ref: n, icon: RT }));
};
const ju = u.forwardRef(TT);
var _T = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
        },
      },
    ],
  },
  name: 'exclamation-circle',
  theme: 'filled',
};
const MT = _T;
var IT = function (t, n) {
  return u.createElement(Ur, ue({}, t, { ref: n, icon: MT }));
};
const kT = u.forwardRef(IT);
var NT = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
        },
      },
    ],
  },
  name: 'info-circle',
  theme: 'filled',
};
const jT = NT;
var LT = function (t, n) {
  return u.createElement(Ur, ue({}, t, { ref: n, icon: jT }));
};
const FT = u.forwardRef(LT);
var AT = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
  zT = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
  DT = ''
    .concat(AT, ' ')
    .concat(zT)
    .split(/[\s\n]+/),
  BT = 'aria-',
  HT = 'data-';
function Fh(e, t) {
  return e.indexOf(t) === 0;
}
function up(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n;
  t === !1
    ? (n = { aria: !0, data: !0, attr: !0 })
    : t === !0
      ? (n = { aria: !0 })
      : (n = z({}, t));
  var r = {};
  return (
    Object.keys(e).forEach(function (o) {
      ((n.aria && (o === 'role' || Fh(o, BT))) ||
        (n.data && Fh(o, HT)) ||
        (n.attr && DT.includes(o))) &&
        (r[o] = e[o]);
    }),
    r
  );
}
function KC(e) {
  return e && G.isValidElement(e) && e.type === G.Fragment;
}
const VT = (e, t, n) =>
  G.isValidElement(e)
    ? G.cloneElement(e, typeof n == 'function' ? n(e.props || {}) : n)
    : t;
function Lu(e, t) {
  return VT(e, e, t);
}
const Bl = (e) => {
  const [, , , , t] = Un();
  return t ? `${e}-css-var` : '';
};
var re = {
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    WIN_IME: 229,
    isTextModifyingKeyEvent: function (t) {
      var n = t.keyCode;
      if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= re.F1 && n <= re.F12))
        return !1;
      switch (n) {
        case re.ALT:
        case re.CAPS_LOCK:
        case re.CONTEXT_MENU:
        case re.CTRL:
        case re.DOWN:
        case re.END:
        case re.ESC:
        case re.HOME:
        case re.INSERT:
        case re.LEFT:
        case re.MAC_FF_META:
        case re.META:
        case re.NUMLOCK:
        case re.NUM_CENTER:
        case re.PAGE_DOWN:
        case re.PAGE_UP:
        case re.PAUSE:
        case re.PRINT_SCREEN:
        case re.RIGHT:
        case re.SHIFT:
        case re.UP:
        case re.WIN_KEY:
        case re.WIN_KEY_RIGHT:
          return !1;
        default:
          return !0;
      }
    },
    isCharacterKey: function (t) {
      if (
        (t >= re.ZERO && t <= re.NINE) ||
        (t >= re.NUM_ZERO && t <= re.NUM_MULTIPLY) ||
        (t >= re.A && t <= re.Z) ||
        (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
      )
        return !0;
      switch (t) {
        case re.SPACE:
        case re.QUESTION_MARK:
        case re.NUM_PLUS:
        case re.NUM_MINUS:
        case re.NUM_PERIOD:
        case re.NUM_DIVISION:
        case re.SEMICOLON:
        case re.DASH:
        case re.EQUALS:
        case re.COMMA:
        case re.PERIOD:
        case re.SLASH:
        case re.APOSTROPHE:
        case re.SINGLE_QUOTE:
        case re.OPEN_SQUARE_BRACKET:
        case re.BACKSLASH:
        case re.CLOSE_SQUARE_BRACKET:
          return !0;
        default:
          return !1;
      }
    },
  },
  WT = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
          },
        },
      ],
    },
    name: 'loading',
    theme: 'outlined',
  };
const UT = WT;
var KT = function (t, n) {
  return u.createElement(Ur, ue({}, t, { ref: n, icon: UT }));
};
const GT = u.forwardRef(KT),
  qT = G.createContext(void 0),
  fp = qT,
  Lo = 100,
  XT = 10,
  GC = Lo * XT,
  qC = {
    Modal: Lo,
    Drawer: Lo,
    Popover: Lo,
    Popconfirm: Lo,
    Tooltip: Lo,
    Tour: Lo,
  },
  QT = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1,
  };
function YT(e) {
  return e in qC;
}
function XC(e, t) {
  const [, n] = Un(),
    r = G.useContext(fp),
    o = YT(e);
  if (t !== void 0) return [t, t];
  let i = r ?? 0;
  return (
    o
      ? ((i += (r ? 0 : n.zIndexPopupBase) + qC[e]),
        (i = Math.min(i, n.zIndexPopupBase + GC)))
      : (i += QT[e]),
    [r === void 0 ? t : i, i]
  );
}
function ZT() {
  const [e, t] = u.useState([]),
    n = u.useCallback(
      (r) => (
        t((o) => [].concat(ae(o), [r])),
        () => {
          t((o) => o.filter((i) => i !== r));
        }
      ),
      []
    );
  return [e, n];
}
function ln() {
  ln = function () {
    return t;
  };
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (k, T, $) {
        k[T] = $.value;
      },
    i = typeof Symbol == 'function' ? Symbol : {},
    a = i.iterator || '@@iterator',
    l = i.asyncIterator || '@@asyncIterator',
    s = i.toStringTag || '@@toStringTag';
  function c(k, T, $) {
    return (
      Object.defineProperty(k, T, {
        value: $,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      k[T]
    );
  }
  try {
    c({}, '');
  } catch {
    c = function ($, N, I) {
      return ($[N] = I);
    };
  }
  function f(k, T, $, N) {
    var I = T && T.prototype instanceof p ? T : p,
      F = Object.create(I.prototype),
      A = new D(N || []);
    return o(F, '_invoke', { value: _(k, $, A) }), F;
  }
  function d(k, T, $) {
    try {
      return { type: 'normal', arg: k.call(T, $) };
    } catch (N) {
      return { type: 'throw', arg: N };
    }
  }
  t.wrap = f;
  var v = 'suspendedStart',
    h = 'suspendedYield',
    b = 'executing',
    y = 'completed',
    S = {};
  function p() {}
  function m() {}
  function g() {}
  var C = {};
  c(C, a, function () {
    return this;
  });
  var E = Object.getPrototypeOf,
    w = E && E(E(B([])));
  w && w !== n && r.call(w, a) && (C = w);
  var x = (g.prototype = p.prototype = Object.create(C));
  function O(k) {
    ['next', 'throw', 'return'].forEach(function (T) {
      c(k, T, function ($) {
        return this._invoke(T, $);
      });
    });
  }
  function P(k, T) {
    function $(I, F, A, V) {
      var U = d(k[I], k, F);
      if (U.type !== 'throw') {
        var Y = U.arg,
          te = Y.value;
        return te && ke(te) == 'object' && r.call(te, '__await')
          ? T.resolve(te.__await).then(
              function (J) {
                $('next', J, A, V);
              },
              function (J) {
                $('throw', J, A, V);
              }
            )
          : T.resolve(te).then(
              function (J) {
                (Y.value = J), A(Y);
              },
              function (J) {
                return $('throw', J, A, V);
              }
            );
      }
      V(U.arg);
    }
    var N;
    o(this, '_invoke', {
      value: function (F, A) {
        function V() {
          return new T(function (U, Y) {
            $(F, A, U, Y);
          });
        }
        return (N = N ? N.then(V, V) : V());
      },
    });
  }
  function _(k, T, $) {
    var N = v;
    return function (I, F) {
      if (N === b) throw new Error('Generator is already running');
      if (N === y) {
        if (I === 'throw') throw F;
        return { value: e, done: !0 };
      }
      for ($.method = I, $.arg = F; ; ) {
        var A = $.delegate;
        if (A) {
          var V = M(A, $);
          if (V) {
            if (V === S) continue;
            return V;
          }
        }
        if ($.method === 'next') $.sent = $._sent = $.arg;
        else if ($.method === 'throw') {
          if (N === v) throw ((N = y), $.arg);
          $.dispatchException($.arg);
        } else $.method === 'return' && $.abrupt('return', $.arg);
        N = b;
        var U = d(k, T, $);
        if (U.type === 'normal') {
          if (((N = $.done ? y : h), U.arg === S)) continue;
          return { value: U.arg, done: $.done };
        }
        U.type === 'throw' && ((N = y), ($.method = 'throw'), ($.arg = U.arg));
      }
    };
  }
  function M(k, T) {
    var $ = T.method,
      N = k.iterator[$];
    if (N === e)
      return (
        (T.delegate = null),
        ($ === 'throw' &&
          k.iterator.return &&
          ((T.method = 'return'),
          (T.arg = e),
          M(k, T),
          T.method === 'throw')) ||
          ($ !== 'return' &&
            ((T.method = 'throw'),
            (T.arg = new TypeError(
              "The iterator does not provide a '" + $ + "' method"
            )))),
        S
      );
    var I = d(N, k.iterator, T.arg);
    if (I.type === 'throw')
      return (T.method = 'throw'), (T.arg = I.arg), (T.delegate = null), S;
    var F = I.arg;
    return F
      ? F.done
        ? ((T[k.resultName] = F.value),
          (T.next = k.nextLoc),
          T.method !== 'return' && ((T.method = 'next'), (T.arg = e)),
          (T.delegate = null),
          S)
        : F
      : ((T.method = 'throw'),
        (T.arg = new TypeError('iterator result is not an object')),
        (T.delegate = null),
        S);
  }
  function L(k) {
    var T = { tryLoc: k[0] };
    1 in k && (T.catchLoc = k[1]),
      2 in k && ((T.finallyLoc = k[2]), (T.afterLoc = k[3])),
      this.tryEntries.push(T);
  }
  function R(k) {
    var T = k.completion || {};
    (T.type = 'normal'), delete T.arg, (k.completion = T);
  }
  function D(k) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      k.forEach(L, this),
      this.reset(!0);
  }
  function B(k) {
    if (k || k === '') {
      var T = k[a];
      if (T) return T.call(k);
      if (typeof k.next == 'function') return k;
      if (!isNaN(k.length)) {
        var $ = -1,
          N = function I() {
            for (; ++$ < k.length; )
              if (r.call(k, $)) return (I.value = k[$]), (I.done = !1), I;
            return (I.value = e), (I.done = !0), I;
          };
        return (N.next = N);
      }
    }
    throw new TypeError(ke(k) + ' is not iterable');
  }
  return (
    (m.prototype = g),
    o(x, 'constructor', { value: g, configurable: !0 }),
    o(g, 'constructor', { value: m, configurable: !0 }),
    (m.displayName = c(g, s, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (k) {
      var T = typeof k == 'function' && k.constructor;
      return (
        !!T && (T === m || (T.displayName || T.name) === 'GeneratorFunction')
      );
    }),
    (t.mark = function (k) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(k, g)
          : ((k.__proto__ = g), c(k, s, 'GeneratorFunction')),
        (k.prototype = Object.create(x)),
        k
      );
    }),
    (t.awrap = function (k) {
      return { __await: k };
    }),
    O(P.prototype),
    c(P.prototype, l, function () {
      return this;
    }),
    (t.AsyncIterator = P),
    (t.async = function (k, T, $, N, I) {
      I === void 0 && (I = Promise);
      var F = new P(f(k, T, $, N), I);
      return t.isGeneratorFunction(T)
        ? F
        : F.next().then(function (A) {
            return A.done ? A.value : F.next();
          });
    }),
    O(x),
    c(x, s, 'Generator'),
    c(x, a, function () {
      return this;
    }),
    c(x, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (k) {
      var T = Object(k),
        $ = [];
      for (var N in T) $.push(N);
      return (
        $.reverse(),
        function I() {
          for (; $.length; ) {
            var F = $.pop();
            if (F in T) return (I.value = F), (I.done = !1), I;
          }
          return (I.done = !0), I;
        }
      );
    }),
    (t.values = B),
    (D.prototype = {
      constructor: D,
      reset: function (T) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(R),
          !T)
        )
          for (var $ in this)
            $.charAt(0) === 't' &&
              r.call(this, $) &&
              !isNaN(+$.slice(1)) &&
              (this[$] = e);
      },
      stop: function () {
        this.done = !0;
        var T = this.tryEntries[0].completion;
        if (T.type === 'throw') throw T.arg;
        return this.rval;
      },
      dispatchException: function (T) {
        if (this.done) throw T;
        var $ = this;
        function N(Y, te) {
          return (
            (A.type = 'throw'),
            (A.arg = T),
            ($.next = Y),
            te && (($.method = 'next'), ($.arg = e)),
            !!te
          );
        }
        for (var I = this.tryEntries.length - 1; I >= 0; --I) {
          var F = this.tryEntries[I],
            A = F.completion;
          if (F.tryLoc === 'root') return N('end');
          if (F.tryLoc <= this.prev) {
            var V = r.call(F, 'catchLoc'),
              U = r.call(F, 'finallyLoc');
            if (V && U) {
              if (this.prev < F.catchLoc) return N(F.catchLoc, !0);
              if (this.prev < F.finallyLoc) return N(F.finallyLoc);
            } else if (V) {
              if (this.prev < F.catchLoc) return N(F.catchLoc, !0);
            } else {
              if (!U) throw new Error('try statement without catch or finally');
              if (this.prev < F.finallyLoc) return N(F.finallyLoc);
            }
          }
        }
      },
      abrupt: function (T, $) {
        for (var N = this.tryEntries.length - 1; N >= 0; --N) {
          var I = this.tryEntries[N];
          if (
            I.tryLoc <= this.prev &&
            r.call(I, 'finallyLoc') &&
            this.prev < I.finallyLoc
          ) {
            var F = I;
            break;
          }
        }
        F &&
          (T === 'break' || T === 'continue') &&
          F.tryLoc <= $ &&
          $ <= F.finallyLoc &&
          (F = null);
        var A = F ? F.completion : {};
        return (
          (A.type = T),
          (A.arg = $),
          F
            ? ((this.method = 'next'), (this.next = F.finallyLoc), S)
            : this.complete(A)
        );
      },
      complete: function (T, $) {
        if (T.type === 'throw') throw T.arg;
        return (
          T.type === 'break' || T.type === 'continue'
            ? (this.next = T.arg)
            : T.type === 'return'
              ? ((this.rval = this.arg = T.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : T.type === 'normal' && $ && (this.next = $),
          S
        );
      },
      finish: function (T) {
        for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
          var N = this.tryEntries[$];
          if (N.finallyLoc === T)
            return this.complete(N.completion, N.afterLoc), R(N), S;
        }
      },
      catch: function (T) {
        for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
          var N = this.tryEntries[$];
          if (N.tryLoc === T) {
            var I = N.completion;
            if (I.type === 'throw') {
              var F = I.arg;
              R(N);
            }
            return F;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (T, $, N) {
        return (
          (this.delegate = { iterator: B(T), resultName: $, nextLoc: N }),
          this.method === 'next' && (this.arg = e),
          S
        );
      },
    }),
    t
  );
}
function Ah(e, t, n, r, o, i, a) {
  try {
    var l = e[i](a),
      s = l.value;
  } catch (c) {
    n(c);
    return;
  }
  l.done ? t(s) : Promise.resolve(s).then(r, o);
}
function mi(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, o) {
      var i = e.apply(t, n);
      function a(s) {
        Ah(i, r, o, a, l, 'next', s);
      }
      function l(s) {
        Ah(i, r, o, a, l, 'throw', s);
      }
      a(void 0);
    });
  };
}
var Hl = z({}, W2),
  JT = Hl.version,
  e4 = Hl.render,
  t4 = Hl.unmountComponentAtNode,
  Fu;
try {
  var n4 = Number((JT || '').split('.')[0]);
  n4 >= 18 && (Fu = Hl.createRoot);
} catch {}
function zh(e) {
  var t = Hl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ke(t) === 'object' && (t.usingClientEntryPoint = e);
}
var Dc = '__rc_react_root__';
function r4(e, t) {
  zh(!0);
  var n = t[Dc] || Fu(t);
  zh(!1), n.render(e), (t[Dc] = n);
}
function o4(e, t) {
  e4(e, t);
}
function QC(e, t) {
  if (Fu) {
    r4(e, t);
    return;
  }
  o4(e, t);
}
function i4(e) {
  return $v.apply(this, arguments);
}
function $v() {
  return (
    ($v = mi(
      ln().mark(function e(t) {
        return ln().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.resolve().then(function () {
                    var o;
                    (o = t[Dc]) === null || o === void 0 || o.unmount(),
                      delete t[Dc];
                  })
                );
              case 1:
              case 'end':
                return r.stop();
            }
        }, e);
      })
    )),
    $v.apply(this, arguments)
  );
}
function a4(e) {
  t4(e);
}
function YC(e) {
  return Ov.apply(this, arguments);
}
function Ov() {
  return (
    (Ov = mi(
      ln().mark(function e(t) {
        return ln().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                if (Fu === void 0) {
                  r.next = 2;
                  break;
                }
                return r.abrupt('return', i4(t));
              case 2:
                a4(t);
              case 3:
              case 'end':
                return r.stop();
            }
        }, e);
      })
    )),
    Ov.apply(this, arguments)
  );
}
const ai = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`),
  dp = function (e) {
    if (!e) return !1;
    if (e instanceof Element) {
      if (e.offsetParent) return !0;
      if (e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height;
        if (n || r) return !0;
      }
      if (e.getBoundingClientRect) {
        var o = e.getBoundingClientRect(),
          i = o.width,
          a = o.height;
        if (i || a) return !0;
      }
    }
    return !1;
  },
  l4 = (e) => {
    const { componentCls: t, colorPrimary: n } = e;
    return {
      [t]: {
        position: 'absolute',
        background: 'transparent',
        pointerEvents: 'none',
        boxSizing: 'border-box',
        color: `var(--wave-color, ${n})`,
        boxShadow: '0 0 0 0 currentcolor',
        opacity: 0.2,
        '&.wave-motion-appear': {
          transition: [
            `box-shadow 0.4s ${e.motionEaseOutCirc}`,
            `opacity 2s ${e.motionEaseOutCirc}`,
          ].join(','),
          '&-active': { boxShadow: '0 0 0 6px currentcolor', opacity: 0 },
          '&.wave-quick': {
            transition: [
              `box-shadow 0.3s ${e.motionEaseInOut}`,
              `opacity 0.35s ${e.motionEaseInOut}`,
            ].join(','),
          },
        },
      },
    };
  },
  s4 = lp('Wave', (e) => [l4(e)]);
function c4(e) {
  const t = (e || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function Hf(e) {
  return (
    e &&
    e !== '#fff' &&
    e !== '#ffffff' &&
    e !== 'rgb(255, 255, 255)' &&
    e !== 'rgba(255, 255, 255, 1)' &&
    c4(e) &&
    !/rgba\((?:\d*, ){3}0\)/.test(e) &&
    e !== 'transparent'
  );
}
function u4(e) {
  const {
    borderTopColor: t,
    borderColor: n,
    backgroundColor: r,
  } = getComputedStyle(e);
  return Hf(t) ? t : Hf(n) ? n : Hf(r) ? r : null;
}
const ZC = 'ant-wave-target';
function Vf(e) {
  return Number.isNaN(e) ? 0 : e;
}
const f4 = (e) => {
    const { className: t, target: n, component: r } = e,
      o = u.useRef(null),
      [i, a] = u.useState(null),
      [l, s] = u.useState([]),
      [c, f] = u.useState(0),
      [d, v] = u.useState(0),
      [h, b] = u.useState(0),
      [y, S] = u.useState(0),
      [p, m] = u.useState(!1),
      g = {
        left: c,
        top: d,
        width: h,
        height: y,
        borderRadius: l.map((w) => `${w}px`).join(' '),
      };
    i && (g['--wave-color'] = i);
    function C() {
      const w = getComputedStyle(n);
      a(u4(n));
      const x = w.position === 'static',
        { borderLeftWidth: O, borderTopWidth: P } = w;
      f(x ? n.offsetLeft : Vf(-parseFloat(O))),
        v(x ? n.offsetTop : Vf(-parseFloat(P))),
        b(n.offsetWidth),
        S(n.offsetHeight);
      const {
        borderTopLeftRadius: _,
        borderTopRightRadius: M,
        borderBottomLeftRadius: L,
        borderBottomRightRadius: R,
      } = w;
      s([_, M, R, L].map((D) => Vf(parseFloat(D))));
    }
    if (
      (u.useEffect(() => {
        if (n) {
          const w = Zt(() => {
            C(), m(!0);
          });
          let x;
          return (
            typeof ResizeObserver < 'u' &&
              ((x = new ResizeObserver(C)), x.observe(n)),
            () => {
              Zt.cancel(w), x == null || x.disconnect();
            }
          );
        }
      }, []),
      !p)
    )
      return null;
    const E =
      (r === 'Checkbox' || r === 'Radio') &&
      (n == null ? void 0 : n.classList.contains(ZC));
    return u.createElement(
      Wr,
      {
        visible: !0,
        motionAppear: !0,
        motionName: 'wave-motion',
        motionDeadline: 5e3,
        onAppearEnd: (w, x) => {
          var O;
          if (x.deadline || x.propertyName === 'opacity') {
            const P =
              (O = o.current) === null || O === void 0
                ? void 0
                : O.parentElement;
            YC(P).then(() => {
              P == null || P.remove();
            });
          }
          return !1;
        },
      },
      (w) => {
        let { className: x } = w;
        return u.createElement('div', {
          ref: o,
          className: q(t, { 'wave-quick': E }, x),
          style: g,
        });
      }
    );
  },
  d4 = (e, t) => {
    var n;
    const { component: r } = t;
    if (
      r === 'Checkbox' &&
      !(!((n = e.querySelector('input')) === null || n === void 0) && n.checked)
    )
      return;
    const o = document.createElement('div');
    (o.style.position = 'absolute'),
      (o.style.left = '0px'),
      (o.style.top = '0px'),
      e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild),
      QC(u.createElement(f4, Object.assign({}, t, { target: e })), o);
  },
  v4 = d4;
function m4(e, t, n) {
  const { wave: r } = u.useContext(Ge),
    [, o, i] = Un(),
    a = $n((c) => {
      const f = e.current;
      if ((r != null && r.disabled) || !f) return;
      const d = f.querySelector(`.${ZC}`) || f,
        { showEffect: v } = r || {};
      (v || v4)(d, {
        className: t,
        token: o,
        component: n,
        event: c,
        hashId: i,
      });
    }),
    l = u.useRef();
  return (c) => {
    Zt.cancel(l.current),
      (l.current = Zt(() => {
        a(c);
      }));
  };
}
const p4 = (e) => {
    const { children: t, disabled: n, component: r } = e,
      { getPrefixCls: o } = u.useContext(Ge),
      i = u.useRef(null),
      a = o('wave'),
      [, l] = s4(a),
      s = m4(i, q(a, l), r);
    if (
      (G.useEffect(() => {
        const f = i.current;
        if (!f || f.nodeType !== 1 || n) return;
        const d = (v) => {
          !dp(v.target) ||
            !f.getAttribute ||
            f.getAttribute('disabled') ||
            f.disabled ||
            f.className.includes('disabled') ||
            f.className.includes('-leave') ||
            s(v);
        };
        return (
          f.addEventListener('click', d, !0),
          () => {
            f.removeEventListener('click', d, !0);
          }
        );
      }, [n]),
      !G.isValidElement(t))
    )
      return t ?? null;
    const c = ui(t) ? ci(t.ref, i) : i;
    return Lu(t, { ref: c });
  },
  g4 = p4,
  Au = (e) => {
    const t = G.useContext(Mu);
    return G.useMemo(
      () =>
        e
          ? typeof e == 'string'
            ? e ?? t
            : e instanceof Function
              ? e(t)
              : t
          : t,
      [e, t]
    );
  },
  JC = u.createContext(null),
  h4 = (e, t) => {
    const n = u.useContext(JC),
      r = u.useMemo(() => {
        if (!n) return '';
        const { compactDirection: o, isFirstItem: i, isLastItem: a } = n,
          l = o === 'vertical' ? '-vertical-' : '-';
        return q(`${e}-compact${l}item`, {
          [`${e}-compact${l}first-item`]: i,
          [`${e}-compact${l}last-item`]: a,
          [`${e}-compact${l}item-rtl`]: t === 'rtl',
        });
      }, [e, t, n]);
    return {
      compactSize: n == null ? void 0 : n.compactSize,
      compactDirection: n == null ? void 0 : n.compactDirection,
      compactItemClassnames: r,
    };
  },
  eS = (e) => {
    let { children: t } = e;
    return u.createElement(JC.Provider, { value: null }, t);
  };
var y4 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const tS = u.createContext(void 0),
  b4 = (e) => {
    const { getPrefixCls: t, direction: n } = u.useContext(Ge),
      { prefixCls: r, size: o, className: i } = e,
      a = y4(e, ['prefixCls', 'size', 'className']),
      l = t('btn-group', r),
      [, , s] = Un();
    let c = '';
    switch (o) {
      case 'large':
        c = 'lg';
        break;
      case 'small':
        c = 'sm';
        break;
    }
    const f = q(l, { [`${l}-${c}`]: c, [`${l}-rtl`]: n === 'rtl' }, i, s);
    return u.createElement(
      tS.Provider,
      { value: o },
      u.createElement('div', Object.assign({}, a, { className: f }))
    );
  },
  C4 = b4,
  Dh = /^[\u4e00-\u9fa5]{2}$/,
  Pv = Dh.test.bind(Dh);
function nS(e) {
  return e === 'danger' ? { danger: !0 } : { type: e };
}
function Bh(e) {
  return typeof e == 'string';
}
function Wf(e) {
  return e === 'text' || e === 'link';
}
function S4(e, t) {
  if (e == null) return;
  const n = t ? ' ' : '';
  return typeof e != 'string' &&
    typeof e != 'number' &&
    Bh(e.type) &&
    Pv(e.props.children)
    ? Lu(e, { children: e.props.children.split('').join(n) })
    : Bh(e)
      ? Pv(e)
        ? G.createElement('span', null, e.split('').join(n))
        : G.createElement('span', null, e)
      : KC(e)
        ? G.createElement('span', null, e)
        : e;
}
function w4(e, t) {
  let n = !1;
  const r = [];
  return (
    G.Children.forEach(e, (o) => {
      const i = typeof o,
        a = i === 'string' || i === 'number';
      if (n && a) {
        const l = r.length - 1,
          s = r[l];
        r[l] = `${s}${o}`;
      } else r.push(o);
      n = a;
    }),
    G.Children.map(r, (o) => S4(o, t))
  );
}
const x4 = u.forwardRef((e, t) => {
    const { className: n, style: r, children: o, prefixCls: i } = e,
      a = q(`${i}-icon`, n);
    return G.createElement('span', { ref: t, className: a, style: r }, o);
  }),
  rS = x4,
  Hh = u.forwardRef((e, t) => {
    let { prefixCls: n, className: r, style: o, iconClassName: i } = e;
    const a = q(`${n}-loading-icon`, r);
    return G.createElement(
      rS,
      { prefixCls: n, className: a, style: o, ref: t },
      G.createElement(GT, { className: i })
    );
  }),
  Uf = () => ({ width: 0, opacity: 0, transform: 'scale(0)' }),
  Kf = (e) => ({ width: e.scrollWidth, opacity: 1, transform: 'scale(1)' }),
  E4 = (e) => {
    const {
        prefixCls: t,
        loading: n,
        existIcon: r,
        className: o,
        style: i,
      } = e,
      a = !!n;
    return r
      ? G.createElement(Hh, { prefixCls: t, className: o, style: i })
      : G.createElement(
          Wr,
          {
            visible: a,
            motionName: `${t}-loading-icon-motion`,
            motionLeave: a,
            removeOnLeave: !0,
            onAppearStart: Uf,
            onAppearActive: Kf,
            onEnterStart: Uf,
            onEnterActive: Kf,
            onLeaveStart: Kf,
            onLeaveActive: Uf,
          },
          (l, s) => {
            let { className: c, style: f } = l;
            return G.createElement(Hh, {
              prefixCls: t,
              className: o,
              style: Object.assign(Object.assign({}, i), f),
              ref: s,
              iconClassName: c,
            });
          }
        );
  },
  $4 = E4,
  Vh = (e, t) => ({
    [`> span, > ${e}`]: {
      '&:not(:last-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineEndColor: t } },
      },
      '&:not(:first-child)': {
        [`&, & > ${e}`]: { '&:not(:disabled)': { borderInlineStartColor: t } },
      },
    },
  }),
  O4 = (e) => {
    const {
      componentCls: t,
      fontSize: n,
      lineWidth: r,
      groupBorderColor: o,
      colorErrorHover: i,
    } = e;
    return {
      [`${t}-group`]: [
        {
          position: 'relative',
          display: 'inline-flex',
          [`> span, > ${t}`]: {
            '&:not(:last-child)': {
              [`&, & > ${t}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            '&:not(:first-child)': {
              marginInlineStart: e.calc(r).mul(-1).equal(),
              [`&, & > ${t}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
          },
          [t]: {
            position: 'relative',
            zIndex: 1,
            '&:hover,\n          &:focus,\n          &:active': { zIndex: 2 },
            '&[disabled]': { zIndex: 0 },
          },
          [`${t}-icon-only`]: { fontSize: n },
        },
        Vh(`${t}-primary`, o),
        Vh(`${t}-danger`, i),
      ],
    };
  },
  oS = (e) => {
    const { paddingInline: t, onlyIconSize: n, paddingBlock: r } = e;
    return bn(e, {
      buttonPaddingHorizontal: t,
      buttonPaddingVertical: r,
      buttonIconOnlyFontSize: n,
    });
  },
  iS = (e) => {
    var t, n, r, o, i, a;
    const l = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize,
      s = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize,
      c = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG,
      f = (o = e.contentLineHeight) !== null && o !== void 0 ? o : tc(l),
      d = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : tc(s),
      v = (a = e.contentLineHeightLG) !== null && a !== void 0 ? a : tc(c);
    return {
      fontWeight: 400,
      defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
      primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
      dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
      primaryColor: e.colorTextLightSolid,
      dangerColor: e.colorTextLightSolid,
      borderColorDisabled: e.colorBorder,
      defaultGhostColor: e.colorBgContainer,
      ghostBg: 'transparent',
      defaultGhostBorderColor: e.colorBgContainer,
      paddingInline: e.paddingContentHorizontal - e.lineWidth,
      paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
      paddingInlineSM: 8 - e.lineWidth,
      onlyIconSize: e.fontSizeLG,
      onlyIconSizeSM: e.fontSizeLG - 2,
      onlyIconSizeLG: e.fontSizeLG + 2,
      groupBorderColor: e.colorPrimaryHover,
      linkHoverBg: 'transparent',
      textHoverBg: e.colorBgTextHover,
      defaultColor: e.colorText,
      defaultBg: e.colorBgContainer,
      defaultBorderColor: e.colorBorder,
      defaultBorderColorDisabled: e.colorBorder,
      defaultHoverBg: e.colorBgContainer,
      defaultHoverColor: e.colorPrimaryHover,
      defaultHoverBorderColor: e.colorPrimaryHover,
      defaultActiveBg: e.colorBgContainer,
      defaultActiveColor: e.colorPrimaryActive,
      defaultActiveBorderColor: e.colorPrimaryActive,
      contentFontSize: l,
      contentFontSizeSM: s,
      contentFontSizeLG: c,
      contentLineHeight: f,
      contentLineHeightSM: d,
      contentLineHeightLG: v,
      paddingBlock: Math.max((e.controlHeight - l * f) / 2 - e.lineWidth, 0),
      paddingBlockSM: Math.max(
        (e.controlHeightSM - s * d) / 2 - e.lineWidth,
        0
      ),
      paddingBlockLG: Math.max(
        (e.controlHeightLG - c * v) / 2 - e.lineWidth,
        0
      ),
    };
  },
  P4 = (e) => {
    const { componentCls: t, iconCls: n, fontWeight: r } = e;
    return {
      [t]: {
        outline: 'none',
        position: 'relative',
        display: 'inline-block',
        fontWeight: r,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        backgroundImage: 'none',
        background: 'transparent',
        border: `${K(e.lineWidth)} ${e.lineType} transparent`,
        cursor: 'pointer',
        transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
        userSelect: 'none',
        touchAction: 'manipulation',
        color: e.colorText,
        '&:disabled > *': { pointerEvents: 'none' },
        '> span': { display: 'inline-block' },
        [`${t}-icon`]: { lineHeight: 0 },
        [`> ${n} + span, > span + ${n}`]: { marginInlineStart: e.marginXS },
        [`&:not(${t}-icon-only) > ${t}-icon`]: {
          [`&${t}-loading-icon, &:not(:last-child)`]: {
            marginInlineEnd: e.marginXS,
          },
        },
        '> a': { color: 'currentColor' },
        '&:not(:disabled)': Object.assign({}, Iu(e)),
        [`&${t}-two-chinese-chars::first-letter`]: { letterSpacing: '0.34em' },
        [`&${t}-two-chinese-chars > *:not(${n})`]: {
          marginInlineEnd: '-0.34em',
          letterSpacing: '0.34em',
        },
        [`&-icon-only${t}-compact-item`]: { flex: 'none' },
      },
    };
  },
  Hr = (e, t, n) => ({
    [`&:not(:disabled):not(${e}-disabled)`]: { '&:hover': t, '&:active': n },
  }),
  R4 = (e) => ({
    minWidth: e.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: '50%',
  }),
  T4 = (e) => ({
    borderRadius: e.controlHeight,
    paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
    paddingInlineEnd: e.calc(e.controlHeight).div(2).equal(),
  }),
  _4 = (e) => ({
    cursor: 'not-allowed',
    borderColor: e.borderColorDisabled,
    color: e.colorTextDisabled,
    background: e.colorBgContainerDisabled,
    boxShadow: 'none',
  }),
  _l = (e, t, n, r, o, i, a, l) => ({
    [`&${e}-background-ghost`]: Object.assign(
      Object.assign(
        {
          color: n || void 0,
          background: t,
          borderColor: r || void 0,
          boxShadow: 'none',
        },
        Hr(
          e,
          Object.assign({ background: t }, a),
          Object.assign({ background: t }, l)
        )
      ),
      {
        '&:disabled': {
          cursor: 'not-allowed',
          color: o || void 0,
          borderColor: i || void 0,
        },
      }
    ),
  }),
  vp = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, _4(e)),
  }),
  aS = (e) => Object.assign({}, vp(e)),
  Bc = (e) => ({
    [`&:disabled, &${e.componentCls}-disabled`]: {
      cursor: 'not-allowed',
      color: e.colorTextDisabled,
    },
  }),
  lS = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, aS(e)), {
            background: e.defaultBg,
            borderColor: e.defaultBorderColor,
            color: e.defaultColor,
            boxShadow: e.defaultShadow,
          }),
          Hr(
            e.componentCls,
            {
              color: e.defaultHoverColor,
              borderColor: e.defaultHoverBorderColor,
              background: e.defaultHoverBg,
            },
            {
              color: e.defaultActiveColor,
              borderColor: e.defaultActiveBorderColor,
              background: e.defaultActiveBg,
            }
          )
        ),
        _l(
          e.componentCls,
          e.ghostBg,
          e.defaultGhostColor,
          e.defaultGhostBorderColor,
          e.colorTextDisabled,
          e.colorBorder
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              { color: e.colorError, borderColor: e.colorError },
              Hr(
                e.componentCls,
                {
                  color: e.colorErrorHover,
                  borderColor: e.colorErrorBorderHover,
                },
                { color: e.colorErrorActive, borderColor: e.colorErrorActive }
              )
            ),
            _l(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder
            )
          ),
          vp(e)
        ),
      }
    ),
  M4 = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, aS(e)), {
            color: e.primaryColor,
            background: e.colorPrimary,
            boxShadow: e.primaryShadow,
          }),
          Hr(
            e.componentCls,
            { color: e.colorTextLightSolid, background: e.colorPrimaryHover },
            { color: e.colorTextLightSolid, background: e.colorPrimaryActive }
          )
        ),
        _l(
          e.componentCls,
          e.ghostBg,
          e.colorPrimary,
          e.colorPrimary,
          e.colorTextDisabled,
          e.colorBorder,
          { color: e.colorPrimaryHover, borderColor: e.colorPrimaryHover },
          { color: e.colorPrimaryActive, borderColor: e.colorPrimaryActive }
        )
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            Object.assign(
              {
                background: e.colorError,
                boxShadow: e.dangerShadow,
                color: e.dangerColor,
              },
              Hr(
                e.componentCls,
                { background: e.colorErrorHover },
                { background: e.colorErrorActive }
              )
            ),
            _l(
              e.componentCls,
              e.ghostBg,
              e.colorError,
              e.colorError,
              e.colorTextDisabled,
              e.colorBorder,
              { color: e.colorErrorHover, borderColor: e.colorErrorHover },
              { color: e.colorErrorActive, borderColor: e.colorErrorActive }
            )
          ),
          vp(e)
        ),
      }
    ),
  I4 = (e) =>
    Object.assign(Object.assign({}, lS(e)), { borderStyle: 'dashed' }),
  k4 = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          { color: e.colorLink },
          Hr(
            e.componentCls,
            { color: e.colorLinkHover, background: e.linkHoverBg },
            { color: e.colorLinkActive }
          )
        ),
        Bc(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign(
            { color: e.colorError },
            Hr(
              e.componentCls,
              { color: e.colorErrorHover },
              { color: e.colorErrorActive }
            )
          ),
          Bc(e)
        ),
      }
    ),
  N4 = (e) =>
    Object.assign(
      Object.assign(
        Object.assign(
          {},
          Hr(
            e.componentCls,
            { color: e.colorText, background: e.textHoverBg },
            { color: e.colorText, background: e.colorBgTextActive }
          )
        ),
        Bc(e)
      ),
      {
        [`&${e.componentCls}-dangerous`]: Object.assign(
          Object.assign({ color: e.colorError }, Bc(e)),
          Hr(
            e.componentCls,
            { color: e.colorErrorHover, background: e.colorErrorBg },
            { color: e.colorErrorHover, background: e.colorErrorBg }
          )
        ),
      }
    ),
  j4 = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-default`]: lS(e),
      [`${t}-primary`]: M4(e),
      [`${t}-dashed`]: I4(e),
      [`${t}-link`]: k4(e),
      [`${t}-text`]: N4(e),
      [`${t}-ghost`]: _l(
        e.componentCls,
        e.ghostBg,
        e.colorBgContainer,
        e.colorBgContainer,
        e.colorTextDisabled,
        e.colorBorder
      ),
    };
  },
  mp = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const {
        componentCls: n,
        controlHeight: r,
        fontSize: o,
        lineHeight: i,
        borderRadius: a,
        buttonPaddingHorizontal: l,
        iconCls: s,
        buttonPaddingVertical: c,
      } = e,
      f = `${n}-icon-only`;
    return [
      {
        [`${t}`]: {
          fontSize: o,
          lineHeight: i,
          height: r,
          padding: `${K(c)} ${K(l)}`,
          borderRadius: a,
          [`&${f}`]: {
            width: r,
            paddingInlineStart: 0,
            paddingInlineEnd: 0,
            [`&${n}-round`]: { width: 'auto' },
            [s]: { fontSize: e.buttonIconOnlyFontSize },
          },
          [`&${n}-loading`]: { opacity: e.opacityLoading, cursor: 'default' },
          [`${n}-loading-icon`]: {
            transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
        },
      },
      { [`${n}${n}-circle${t}`]: R4(e) },
      { [`${n}${n}-round${t}`]: T4(e) },
    ];
  },
  L4 = (e) => {
    const t = bn(e, {
      fontSize: e.contentFontSize,
      lineHeight: e.contentLineHeight,
    });
    return mp(t, e.componentCls);
  },
  F4 = (e) => {
    const t = bn(e, {
      controlHeight: e.controlHeightSM,
      fontSize: e.contentFontSizeSM,
      lineHeight: e.contentLineHeightSM,
      padding: e.paddingXS,
      buttonPaddingHorizontal: e.paddingInlineSM,
      buttonPaddingVertical: e.paddingBlockSM,
      borderRadius: e.borderRadiusSM,
      buttonIconOnlyFontSize: e.onlyIconSizeSM,
    });
    return mp(t, `${e.componentCls}-sm`);
  },
  A4 = (e) => {
    const t = bn(e, {
      controlHeight: e.controlHeightLG,
      fontSize: e.contentFontSizeLG,
      lineHeight: e.contentLineHeightLG,
      buttonPaddingHorizontal: e.paddingInlineLG,
      buttonPaddingVertical: e.paddingBlockLG,
      borderRadius: e.borderRadiusLG,
      buttonIconOnlyFontSize: e.onlyIconSizeLG,
    });
    return mp(t, `${e.componentCls}-lg`);
  },
  z4 = (e) => {
    const { componentCls: t } = e;
    return { [t]: { [`&${t}-block`]: { width: '100%' } } };
  },
  D4 = Oo(
    'Button',
    (e) => {
      const t = oS(e);
      return [P4(t), L4(t), F4(t), A4(t), z4(t), j4(t), O4(t)];
    },
    iS,
    {
      unitless: {
        fontWeight: !0,
        contentLineHeight: !0,
        contentLineHeightSM: !0,
        contentLineHeightLG: !0,
      },
    }
  );
function B4(e, t, n) {
  const { focusElCls: r, focus: o, borderElCls: i } = n,
    a = i ? '> *' : '',
    l = ['hover', o ? 'focus' : null, 'active']
      .filter(Boolean)
      .map((s) => `&:${s} ${a}`)
      .join(',');
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
    },
    '&-item': Object.assign(
      Object.assign(
        { [l]: { zIndex: 2 } },
        r ? { [`&${r}`]: { zIndex: 2 } } : {}
      ),
      { [`&[disabled] ${a}`]: { zIndex: 0 } }
    ),
  };
}
function H4(e, t, n) {
  const { borderElCls: r } = n,
    o = r ? `> ${r}` : '';
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0,
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },
  };
}
function V4(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { focus: !0 };
  const { componentCls: n } = e,
    r = `${n}-compact`;
  return { [r]: Object.assign(Object.assign({}, B4(e, r, t)), H4(n, r, t)) };
}
function W4(e, t) {
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal(),
    },
    '&-item': {
      '&:hover,&:focus,&:active': { zIndex: 2 },
      '&[disabled]': { zIndex: 0 },
    },
  };
}
function U4(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0,
      },
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
      },
    },
  };
}
function K4(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, W4(e, t)), U4(e.componentCls, t)),
  };
}
const G4 = (e) => {
    const { componentCls: t, calc: n } = e;
    return {
      [t]: {
        [`&-compact-item${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]:
            {
              position: 'relative',
              '&:before': {
                position: 'absolute',
                top: n(e.lineWidth).mul(-1).equal(),
                insetInlineStart: n(e.lineWidth).mul(-1).equal(),
                display: 'inline-block',
                width: e.lineWidth,
                height: `calc(100% + ${K(e.lineWidth)} * 2)`,
                backgroundColor: e.colorPrimaryHover,
                content: '""',
              },
            },
        },
        '&-compact-vertical-item': {
          [`&${t}-primary`]: {
            [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]:
              {
                position: 'relative',
                '&:before': {
                  position: 'absolute',
                  top: n(e.lineWidth).mul(-1).equal(),
                  insetInlineStart: n(e.lineWidth).mul(-1).equal(),
                  display: 'inline-block',
                  width: `calc(100% + ${K(e.lineWidth)} * 2)`,
                  height: e.lineWidth,
                  backgroundColor: e.colorPrimaryHover,
                  content: '""',
                },
              },
          },
        },
      },
    };
  },
  q4 = RC(
    ['Button', 'compact'],
    (e) => {
      const t = oS(e);
      return [V4(t), K4(t), G4(t)];
    },
    iS
  );
var X4 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function Q4(e) {
  if (typeof e == 'object' && e) {
    let t = e == null ? void 0 : e.delay;
    return (
      (t = !Number.isNaN(t) && typeof t == 'number' ? t : 0),
      { loading: t <= 0, delay: t }
    );
  }
  return { loading: !!e, delay: 0 };
}
const Y4 = (e, t) => {
    var n, r;
    const {
        loading: o = !1,
        prefixCls: i,
        type: a,
        danger: l,
        shape: s = 'default',
        size: c,
        styles: f,
        disabled: d,
        className: v,
        rootClassName: h,
        children: b,
        icon: y,
        ghost: S = !1,
        block: p = !1,
        htmlType: m = 'button',
        classNames: g,
        style: C = {},
      } = e,
      E = X4(e, [
        'loading',
        'prefixCls',
        'type',
        'danger',
        'shape',
        'size',
        'styles',
        'disabled',
        'className',
        'rootClassName',
        'children',
        'icon',
        'ghost',
        'block',
        'htmlType',
        'classNames',
        'style',
      ]),
      w = a || 'default',
      {
        getPrefixCls: x,
        autoInsertSpaceInButton: O,
        direction: P,
        button: _,
      } = u.useContext(Ge),
      M = x('btn', i),
      [L, R, D] = D4(M),
      B = u.useContext(Fc),
      k = d ?? B,
      T = u.useContext(tS),
      $ = u.useMemo(() => Q4(o), [o]),
      [N, I] = u.useState($.loading),
      [F, A] = u.useState(!1),
      U = ci(t, u.createRef()),
      Y = u.Children.count(b) === 1 && !y && !Wf(w);
    u.useEffect(() => {
      let Se = null;
      $.delay > 0
        ? (Se = setTimeout(() => {
            (Se = null), I(!0);
          }, $.delay))
        : I($.loading);
      function de() {
        Se && (clearTimeout(Se), (Se = null));
      }
      return de;
    }, [$]),
      u.useEffect(() => {
        if (!U || !U.current || O === !1) return;
        const Se = U.current.textContent;
        Y && Pv(Se) ? F || A(!0) : F && A(!1);
      }, [U]);
    const te = (Se) => {
        const { onClick: de } = e;
        if (N || k) {
          Se.preventDefault();
          return;
        }
        de == null || de(Se);
      },
      J = O !== !1,
      { compactSize: Q, compactItemClassnames: ee } = h4(M, P),
      se = { large: 'lg', small: 'sm', middle: void 0 },
      pe = Au((Se) => {
        var de, ze;
        return (ze = (de = c ?? Q) !== null && de !== void 0 ? de : T) !==
          null && ze !== void 0
          ? ze
          : Se;
      }),
      Le = (pe && se[pe]) || '',
      he = N ? 'loading' : y,
      Ce = di(E, ['navigate']),
      ce = q(
        M,
        R,
        D,
        {
          [`${M}-${s}`]: s !== 'default' && s,
          [`${M}-${w}`]: w,
          [`${M}-${Le}`]: Le,
          [`${M}-icon-only`]: !b && b !== 0 && !!he,
          [`${M}-background-ghost`]: S && !Wf(w),
          [`${M}-loading`]: N,
          [`${M}-two-chinese-chars`]: F && J && !N,
          [`${M}-block`]: p,
          [`${M}-dangerous`]: !!l,
          [`${M}-rtl`]: P === 'rtl',
        },
        ee,
        v,
        h,
        _ == null ? void 0 : _.className
      ),
      Pe = Object.assign(Object.assign({}, _ == null ? void 0 : _.style), C),
      $e = q(
        g == null ? void 0 : g.icon,
        (n = _ == null ? void 0 : _.classNames) === null || n === void 0
          ? void 0
          : n.icon
      ),
      ve = Object.assign(
        Object.assign({}, (f == null ? void 0 : f.icon) || {}),
        ((r = _ == null ? void 0 : _.styles) === null || r === void 0
          ? void 0
          : r.icon) || {}
      ),
      Z =
        y && !N
          ? G.createElement(rS, { prefixCls: M, className: $e, style: ve }, y)
          : G.createElement($4, { existIcon: !!y, prefixCls: M, loading: !!N }),
      fe = b || b === 0 ? w4(b, Y && J) : null;
    if (Ce.href !== void 0)
      return L(
        G.createElement(
          'a',
          Object.assign({}, Ce, {
            className: q(ce, { [`${M}-disabled`]: k }),
            href: k ? void 0 : Ce.href,
            style: Pe,
            onClick: te,
            ref: U,
            tabIndex: k ? -1 : 0,
          }),
          Z,
          fe
        )
      );
    let ge = G.createElement(
      'button',
      Object.assign({}, E, {
        type: m,
        className: ce,
        style: Pe,
        onClick: te,
        disabled: k,
        ref: U,
      }),
      Z,
      fe,
      !!ee && G.createElement(q4, { key: 'compact', prefixCls: M })
    );
    return (
      Wf(w) ||
        (ge = G.createElement(g4, { component: 'Button', disabled: !!N }, ge)),
      L(ge)
    );
  },
  pp = u.forwardRef(Y4);
pp.Group = C4;
pp.__ANT_BUTTON = !0;
const gp = pp;
function Wh(e) {
  return !!(e && e.then);
}
const Z4 = (e) => {
    const {
        type: t,
        children: n,
        prefixCls: r,
        buttonProps: o,
        close: i,
        autoFocus: a,
        emitEvent: l,
        isSilent: s,
        quitOnNullishReturnValue: c,
        actionFn: f,
      } = e,
      d = u.useRef(!1),
      v = u.useRef(null),
      [h, b] = Xo(!1),
      y = function () {
        i == null || i.apply(void 0, arguments);
      };
    u.useEffect(() => {
      let m = null;
      return (
        a &&
          (m = setTimeout(() => {
            var g;
            (g = v.current) === null || g === void 0 || g.focus();
          })),
        () => {
          m && clearTimeout(m);
        }
      );
    }, []);
    const S = (m) => {
        Wh(m) &&
          (b(!0),
          m.then(
            function () {
              b(!1, !0), y.apply(void 0, arguments), (d.current = !1);
            },
            (g) => {
              if ((b(!1, !0), (d.current = !1), !(s != null && s())))
                return Promise.reject(g);
            }
          ));
      },
      p = (m) => {
        if (d.current) return;
        if (((d.current = !0), !f)) {
          y();
          return;
        }
        let g;
        if (l) {
          if (((g = f(m)), c && !Wh(g))) {
            (d.current = !1), y(m);
            return;
          }
        } else if (f.length) (g = f(i)), (d.current = !1);
        else if (((g = f()), !g)) {
          y();
          return;
        }
        S(g);
      };
    return u.createElement(
      gp,
      Object.assign({}, nS(t), { onClick: p, loading: h, prefixCls: r }, o, {
        ref: v,
      }),
      n
    );
  },
  sS = Z4,
  Vl = G.createContext({}),
  { Provider: cS } = Vl,
  J4 = () => {
    const {
      autoFocusButton: e,
      cancelButtonProps: t,
      cancelTextLocale: n,
      isSilent: r,
      mergedOkCancel: o,
      rootPrefixCls: i,
      close: a,
      onCancel: l,
      onConfirm: s,
    } = u.useContext(Vl);
    return o
      ? G.createElement(
          sS,
          {
            isSilent: r,
            actionFn: l,
            close: function () {
              a == null || a.apply(void 0, arguments), s == null || s(!1);
            },
            autoFocus: e === 'cancel',
            buttonProps: t,
            prefixCls: `${i}-btn`,
          },
          n
        )
      : null;
  },
  Uh = J4,
  e_ = () => {
    const {
      autoFocusButton: e,
      close: t,
      isSilent: n,
      okButtonProps: r,
      rootPrefixCls: o,
      okTextLocale: i,
      okType: a,
      onConfirm: l,
      onOk: s,
    } = u.useContext(Vl);
    return G.createElement(
      sS,
      {
        isSilent: n,
        type: a || 'primary',
        actionFn: s,
        close: function () {
          t == null || t.apply(void 0, arguments), l == null || l(!0);
        },
        autoFocus: e === 'ok',
        buttonProps: r,
        prefixCls: `${o}-btn`,
      },
      i
    );
  },
  Kh = e_;
var uS = u.createContext(null),
  Gh = [];
function t_(e, t) {
  var n = u.useState(function () {
      if (!an()) return null;
      var b = document.createElement('div');
      return b;
    }),
    r = H(n, 1),
    o = r[0],
    i = u.useRef(!1),
    a = u.useContext(uS),
    l = u.useState(Gh),
    s = H(l, 2),
    c = s[0],
    f = s[1],
    d =
      a ||
      (i.current
        ? void 0
        : function (b) {
            f(function (y) {
              var S = [b].concat(ae(y));
              return S;
            });
          });
  function v() {
    o.parentElement || document.body.appendChild(o), (i.current = !0);
  }
  function h() {
    var b;
    (b = o.parentElement) === null || b === void 0 || b.removeChild(o),
      (i.current = !1);
  }
  return (
    Bt(
      function () {
        return e ? (a ? a(v) : v()) : h(), h;
      },
      [e]
    ),
    Bt(
      function () {
        c.length &&
          (c.forEach(function (b) {
            return b();
          }),
          f(Gh));
      },
      [c]
    ),
    [o, d]
  );
}
function n_(e) {
  var t = 'rc-scrollbar-measure-'.concat(
      Math.random().toString(36).substring(7)
    ),
    n = document.createElement('div');
  n.id = t;
  var r = n.style;
  (r.position = 'absolute'),
    (r.left = '0'),
    (r.top = '0'),
    (r.width = '100px'),
    (r.height = '100px'),
    (r.overflow = 'scroll');
  var o, i;
  if (e) {
    var a = getComputedStyle(e);
    (r.scrollbarColor = a.scrollbarColor),
      (r.scrollbarWidth = a.scrollbarWidth);
    var l = getComputedStyle(e, '::-webkit-scrollbar'),
      s = parseInt(l.width, 10),
      c = parseInt(l.height, 10);
    try {
      var f = s ? 'width: '.concat(l.width, ';') : '',
        d = c ? 'height: '.concat(l.height, ';') : '';
      Br(
        `
#`
          .concat(
            t,
            `::-webkit-scrollbar {
`
          )
          .concat(
            f,
            `
`
          )
          .concat(
            d,
            `
}`
          ),
        t
      );
    } catch (b) {
      console.error(b), (o = s), (i = c);
    }
  }
  document.body.appendChild(n);
  var v = e && o && !isNaN(o) ? o : n.offsetWidth - n.clientWidth,
    h = e && i && !isNaN(i) ? i : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), fa(t), { width: v, height: h };
}
function r_(e) {
  return typeof document > 'u' || !e || !(e instanceof Element)
    ? { width: 0, height: 0 }
    : n_(e);
}
function o_() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}
var i_ = 'rc-util-locker-'.concat(Date.now()),
  qh = 0;
function a_(e) {
  var t = !!e,
    n = u.useState(function () {
      return (qh += 1), ''.concat(i_, '_').concat(qh);
    }),
    r = H(n, 1),
    o = r[0];
  Bt(
    function () {
      if (t) {
        var i = r_(document.body).width,
          a = o_();
        Br(
          `
html body {
  overflow-y: hidden;
  `.concat(
            a ? 'width: calc(100% - '.concat(i, 'px);') : '',
            `
}`
          ),
          o
        );
      } else fa(o);
      return function () {
        fa(o);
      };
    },
    [t, o]
  );
}
var Xh = !1;
function l_(e) {
  return typeof e == 'boolean' && (Xh = e), Xh;
}
var Qh = function (t) {
    return t === !1
      ? !1
      : !an() || !t
        ? null
        : typeof t == 'string'
          ? document.querySelector(t)
          : typeof t == 'function'
            ? t()
            : t;
  },
  hp = u.forwardRef(function (e, t) {
    var n = e.open,
      r = e.autoLock,
      o = e.getContainer;
    e.debug;
    var i = e.autoDestroy,
      a = i === void 0 ? !0 : i,
      l = e.children,
      s = u.useState(n),
      c = H(s, 2),
      f = c[0],
      d = c[1],
      v = f || n;
    u.useEffect(
      function () {
        (a || n) && d(n);
      },
      [n, a]
    );
    var h = u.useState(function () {
        return Qh(o);
      }),
      b = H(h, 2),
      y = b[0],
      S = b[1];
    u.useEffect(function () {
      var M = Qh(o);
      S(M ?? null);
    });
    var p = t_(v && !y),
      m = H(p, 2),
      g = m[0],
      C = m[1],
      E = y ?? g;
    a_(r && n && an() && (E === g || E === document.body));
    var w = null;
    if (l && ui(l) && t) {
      var x = l;
      w = x.ref;
    }
    var O = Ca(w, t);
    if (!v || !an() || y === void 0) return null;
    var P = E === !1 || l_(),
      _ = l;
    return (
      t && (_ = u.cloneElement(l, { ref: O })),
      u.createElement(uS.Provider, { value: C }, P ? _ : ya.createPortal(_, E))
    );
  }),
  fS = u.createContext({});
function s_() {
  var e = z({}, qc);
  return e.useId;
}
var Yh = 0,
  Zh = s_();
const dS = Zh
  ? function (t) {
      var n = Zh();
      return t || n;
    }
  : function (t) {
      var n = u.useState('ssr-id'),
        r = H(n, 2),
        o = r[0],
        i = r[1];
      return (
        u.useEffect(function () {
          var a = Yh;
          (Yh += 1), i('rc_unique_'.concat(a));
        }, []),
        t || o
      );
    };
function Jh(e, t, n) {
  var r = t;
  return !r && n && (r = ''.concat(e, '-').concat(n)), r;
}
function e0(e, t) {
  var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
    r = 'scroll'.concat(t ? 'Top' : 'Left');
  if (typeof n != 'number') {
    var o = e.document;
    (n = o.documentElement[r]), typeof n != 'number' && (n = o.body[r]);
  }
  return n;
}
function c_(e) {
  var t = e.getBoundingClientRect(),
    n = { left: t.left, top: t.top },
    r = e.ownerDocument,
    o = r.defaultView || r.parentWindow;
  return (n.left += e0(o)), (n.top += e0(o, !0)), n;
}
const u_ = u.memo(
  function (e) {
    var t = e.children;
    return t;
  },
  function (e, t) {
    var n = t.shouldUpdate;
    return !n;
  }
);
var t0 = { width: 0, height: 0, overflow: 'hidden', outline: 'none' },
  f_ = { outline: 'none' },
  vS = G.forwardRef(function (e, t) {
    var n = e.prefixCls,
      r = e.className,
      o = e.style,
      i = e.title,
      a = e.ariaId,
      l = e.footer,
      s = e.closable,
      c = e.closeIcon,
      f = e.onClose,
      d = e.children,
      v = e.bodyStyle,
      h = e.bodyProps,
      b = e.modalRender,
      y = e.onMouseDown,
      S = e.onMouseUp,
      p = e.holderRef,
      m = e.visible,
      g = e.forceRender,
      C = e.width,
      E = e.height,
      w = e.classNames,
      x = e.styles,
      O = G.useContext(fS),
      P = O.panel,
      _ = Ca(p, P),
      M = u.useRef(),
      L = u.useRef(),
      R = u.useRef();
    G.useImperativeHandle(t, function () {
      return {
        focus: function () {
          var A;
          (A = R.current) === null || A === void 0 || A.focus();
        },
        changeActive: function (A) {
          var V = document,
            U = V.activeElement;
          A && U === L.current
            ? M.current.focus()
            : !A && U === M.current && L.current.focus();
        },
      };
    });
    var D = {};
    C !== void 0 && (D.width = C), E !== void 0 && (D.height = E);
    var B;
    l &&
      (B = G.createElement(
        'div',
        {
          className: q(''.concat(n, '-footer'), w == null ? void 0 : w.footer),
          style: z({}, x == null ? void 0 : x.footer),
        },
        l
      ));
    var k;
    i &&
      (k = G.createElement(
        'div',
        {
          className: q(''.concat(n, '-header'), w == null ? void 0 : w.header),
          style: z({}, x == null ? void 0 : x.header),
        },
        G.createElement('div', { className: ''.concat(n, '-title'), id: a }, i)
      ));
    var T = u.useMemo(
        function () {
          return ke(s) === 'object' && s !== null
            ? s
            : s
              ? {
                  closeIcon:
                    c ??
                    G.createElement('span', {
                      className: ''.concat(n, '-close-x'),
                    }),
                }
              : {};
        },
        [s, c]
      ),
      $ = up(T, !0),
      N;
    s &&
      (N = G.createElement(
        'button',
        ue({ type: 'button', onClick: f, 'aria-label': 'Close' }, $, {
          className: ''.concat(n, '-close'),
        }),
        T.closeIcon
      ));
    var I = G.createElement(
      'div',
      {
        className: q(''.concat(n, '-content'), w == null ? void 0 : w.content),
        style: x == null ? void 0 : x.content,
      },
      N,
      k,
      G.createElement(
        'div',
        ue(
          {
            className: q(''.concat(n, '-body'), w == null ? void 0 : w.body),
            style: z(z({}, v), x == null ? void 0 : x.body),
          },
          h
        ),
        d
      ),
      B
    );
    return G.createElement(
      'div',
      {
        key: 'dialog-element',
        role: 'dialog',
        'aria-labelledby': i ? a : null,
        'aria-modal': 'true',
        ref: _,
        style: z(z({}, o), D),
        className: q(n, r),
        onMouseDown: y,
        onMouseUp: S,
      },
      G.createElement('div', {
        tabIndex: 0,
        ref: M,
        style: t0,
        'aria-hidden': 'true',
      }),
      G.createElement(
        'div',
        { ref: R, tabIndex: -1, style: f_ },
        G.createElement(u_, { shouldUpdate: m || g }, b ? b(I) : I)
      ),
      G.createElement('div', {
        tabIndex: 0,
        ref: L,
        style: t0,
        'aria-hidden': 'true',
      })
    );
  }),
  mS = u.forwardRef(function (e, t) {
    var n = e.prefixCls,
      r = e.title,
      o = e.style,
      i = e.className,
      a = e.visible,
      l = e.forceRender,
      s = e.destroyOnClose,
      c = e.motionName,
      f = e.ariaId,
      d = e.onVisibleChanged,
      v = e.mousePosition,
      h = u.useRef(),
      b = u.useState(),
      y = H(b, 2),
      S = y[0],
      p = y[1],
      m = {};
    S && (m.transformOrigin = S);
    function g() {
      var C = c_(h.current);
      p(v ? ''.concat(v.x - C.left, 'px ').concat(v.y - C.top, 'px') : '');
    }
    return u.createElement(
      Wr,
      {
        visible: a,
        onVisibleChanged: d,
        onAppearPrepare: g,
        onEnterPrepare: g,
        forceRender: l,
        motionName: c,
        removeOnLeave: s,
        ref: h,
      },
      function (C, E) {
        var w = C.className,
          x = C.style;
        return u.createElement(
          vS,
          ue({}, e, {
            ref: t,
            title: r,
            ariaId: f,
            prefixCls: n,
            holderRef: E,
            style: z(z(z({}, x), o), m),
            className: q(i, w),
          })
        );
      }
    );
  });
mS.displayName = 'Content';
function d_(e) {
  var t = e.prefixCls,
    n = e.style,
    r = e.visible,
    o = e.maskProps,
    i = e.motionName,
    a = e.className;
  return u.createElement(
    Wr,
    {
      key: 'mask',
      visible: r,
      motionName: i,
      leavedClassName: ''.concat(t, '-mask-hidden'),
    },
    function (l, s) {
      var c = l.className,
        f = l.style;
      return u.createElement(
        'div',
        ue(
          {
            ref: s,
            style: z(z({}, f), n),
            className: q(''.concat(t, '-mask'), c, a),
          },
          o
        )
      );
    }
  );
}
function v_(e) {
  var t = e.prefixCls,
    n = t === void 0 ? 'rc-dialog' : t,
    r = e.zIndex,
    o = e.visible,
    i = o === void 0 ? !1 : o,
    a = e.keyboard,
    l = a === void 0 ? !0 : a,
    s = e.focusTriggerAfterClose,
    c = s === void 0 ? !0 : s,
    f = e.wrapStyle,
    d = e.wrapClassName,
    v = e.wrapProps,
    h = e.onClose,
    b = e.afterOpenChange,
    y = e.afterClose,
    S = e.transitionName,
    p = e.animation,
    m = e.closable,
    g = m === void 0 ? !0 : m,
    C = e.mask,
    E = C === void 0 ? !0 : C,
    w = e.maskTransitionName,
    x = e.maskAnimation,
    O = e.maskClosable,
    P = O === void 0 ? !0 : O,
    _ = e.maskStyle,
    M = e.maskProps,
    L = e.rootClassName,
    R = e.classNames,
    D = e.styles,
    B = u.useRef(),
    k = u.useRef(),
    T = u.useRef(),
    $ = u.useState(i),
    N = H($, 2),
    I = N[0],
    F = N[1],
    A = dS();
  function V() {
    rv(k.current, document.activeElement) ||
      (B.current = document.activeElement);
  }
  function U() {
    if (!rv(k.current, document.activeElement)) {
      var he;
      (he = T.current) === null || he === void 0 || he.focus();
    }
  }
  function Y(he) {
    if (he) U();
    else {
      if ((F(!1), E && B.current && c)) {
        try {
          B.current.focus({ preventScroll: !0 });
        } catch {}
        B.current = null;
      }
      I && (y == null || y());
    }
    b == null || b(he);
  }
  function te(he) {
    h == null || h(he);
  }
  var J = u.useRef(!1),
    Q = u.useRef(),
    ee = function () {
      clearTimeout(Q.current), (J.current = !0);
    },
    se = function () {
      Q.current = setTimeout(function () {
        J.current = !1;
      });
    },
    pe = null;
  P &&
    (pe = function (Ce) {
      J.current ? (J.current = !1) : k.current === Ce.target && te(Ce);
    });
  function Le(he) {
    if (l && he.keyCode === re.ESC) {
      he.stopPropagation(), te(he);
      return;
    }
    i && he.keyCode === re.TAB && T.current.changeActive(!he.shiftKey);
  }
  return (
    u.useEffect(
      function () {
        i && (F(!0), V());
      },
      [i]
    ),
    u.useEffect(function () {
      return function () {
        clearTimeout(Q.current);
      };
    }, []),
    u.createElement(
      'div',
      ue({ className: q(''.concat(n, '-root'), L) }, up(e, { data: !0 })),
      u.createElement(d_, {
        prefixCls: n,
        visible: E && i,
        motionName: Jh(n, w, x),
        style: z(z({ zIndex: r }, _), D == null ? void 0 : D.mask),
        maskProps: M,
        className: R == null ? void 0 : R.mask,
      }),
      u.createElement(
        'div',
        ue(
          {
            tabIndex: -1,
            onKeyDown: Le,
            className: q(
              ''.concat(n, '-wrap'),
              d,
              R == null ? void 0 : R.wrapper
            ),
            ref: k,
            onClick: pe,
            style: z(
              z(z({ zIndex: r }, f), D == null ? void 0 : D.wrapper),
              {},
              { display: I ? null : 'none' }
            ),
          },
          v
        ),
        u.createElement(
          mS,
          ue({}, e, {
            onMouseDown: ee,
            onMouseUp: se,
            ref: T,
            closable: g,
            ariaId: A,
            prefixCls: n,
            visible: i && I,
            onClose: te,
            onVisibleChanged: Y,
            motionName: Jh(n, S, p),
          })
        )
      )
    )
  );
}
var pS = function (t) {
  var n = t.visible,
    r = t.getContainer,
    o = t.forceRender,
    i = t.destroyOnClose,
    a = i === void 0 ? !1 : i,
    l = t.afterClose,
    s = t.panelRef,
    c = u.useState(n),
    f = H(c, 2),
    d = f[0],
    v = f[1],
    h = u.useMemo(
      function () {
        return { panel: s };
      },
      [s]
    );
  return (
    u.useEffect(
      function () {
        n && v(!0);
      },
      [n]
    ),
    !o && a && !d
      ? null
      : u.createElement(
          fS.Provider,
          { value: h },
          u.createElement(
            hp,
            {
              open: n || o || d,
              autoDestroy: !1,
              getContainer: r,
              autoLock: n || d,
            },
            u.createElement(
              v_,
              ue({}, t, {
                destroyOnClose: a,
                afterClose: function () {
                  l == null || l(), v(!1);
                },
              })
            )
          )
        )
  );
};
pS.displayName = 'Dialog';
var m_ = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function p_(e, t, n) {
  return typeof e == 'boolean'
    ? e
    : typeof e == 'object'
      ? !0
      : t === void 0
        ? !!n
        : t !== !1 && t !== null;
}
function g_(e) {
  let {
    closable: t,
    closeIcon: n,
    customCloseIconRender: r,
    defaultCloseIcon: o = G.createElement(ju, null),
    defaultClosable: i = !1,
  } = e;
  if (!p_(t, n, i)) return [!1, null];
  const l = typeof t == 'object' ? t : {},
    { closeIcon: s } = l,
    c = m_(l, ['closeIcon']),
    f =
      typeof t == 'object' && s !== void 0
        ? s
        : typeof n == 'boolean' || n === void 0 || n === null
          ? o
          : n,
    d = up(c, !0),
    v = r ? r(f) : f;
  return [
    !0,
    G.isValidElement(v)
      ? G.cloneElement(v, d)
      : G.createElement('span', Object.assign({}, d), v),
  ];
}
const h_ = () => an() && window.document.documentElement;
var Ho = 'RC_FORM_INTERNAL_HOOKS',
  Ke = function () {
    on(
      !1,
      'Can not find FormContext. Please make sure you wrap Field under Form.'
    );
  },
  ma = u.createContext({
    getFieldValue: Ke,
    getFieldsValue: Ke,
    getFieldError: Ke,
    getFieldWarning: Ke,
    getFieldsError: Ke,
    isFieldsTouched: Ke,
    isFieldTouched: Ke,
    isFieldValidating: Ke,
    isFieldsValidating: Ke,
    resetFields: Ke,
    setFields: Ke,
    setFieldValue: Ke,
    setFieldsValue: Ke,
    validateFields: Ke,
    submit: Ke,
    getInternalHooks: function () {
      return (
        Ke(),
        {
          dispatch: Ke,
          initEntityValue: Ke,
          registerField: Ke,
          useSubscribe: Ke,
          setInitialValues: Ke,
          destroyForm: Ke,
          setCallbacks: Ke,
          registerWatch: Ke,
          getFields: Ke,
          setValidateMessages: Ke,
          setPreserve: Ke,
          getInitialValue: Ke,
        }
      );
    },
  }),
  Hc = u.createContext(null);
function Rv(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function y_(e) {
  return e && !!e._init;
}
function Vo() {
  return (
    (Vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vo.apply(this, arguments)
  );
}
function b_(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Ml(e, t);
}
function Tv(e) {
  return (
    (Tv = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Tv(e)
  );
}
function Ml(e, t) {
  return (
    (Ml = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Ml(e, t)
  );
}
function C_() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function rc(e, t, n) {
  return (
    C_()
      ? (rc = Reflect.construct.bind())
      : (rc = function (o, i, a) {
          var l = [null];
          l.push.apply(l, i);
          var s = Function.bind.apply(o, l),
            c = new s();
          return a && Ml(c, a.prototype), c;
        }),
    rc.apply(null, arguments)
  );
}
function S_(e) {
  return Function.toString.call(e).indexOf('[native code]') !== -1;
}
function _v(e) {
  var t = typeof Map == 'function' ? new Map() : void 0;
  return (
    (_v = function (r) {
      if (r === null || !S_(r)) return r;
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      if (typeof t < 'u') {
        if (t.has(r)) return t.get(r);
        t.set(r, o);
      }
      function o() {
        return rc(r, arguments, Tv(this).constructor);
      }
      return (
        (o.prototype = Object.create(r.prototype, {
          constructor: {
            value: o,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Ml(o, r)
      );
    }),
    _v(e)
  );
}
var w_ = /%[sdj%]/g,
  x_ = function () {};
function Mv(e) {
  if (!e || !e.length) return null;
  var t = {};
  return (
    e.forEach(function (n) {
      var r = n.field;
      (t[r] = t[r] || []), t[r].push(n);
    }),
    t
  );
}
function Rn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = 0,
    i = n.length;
  if (typeof e == 'function') return e.apply(null, n);
  if (typeof e == 'string') {
    var a = e.replace(w_, function (l) {
      if (l === '%%') return '%';
      if (o >= i) return l;
      switch (l) {
        case '%s':
          return String(n[o++]);
        case '%d':
          return Number(n[o++]);
        case '%j':
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return '[Circular]';
          }
          break;
        default:
          return l;
      }
    });
    return a;
  }
  return e;
}
function E_(e) {
  return (
    e === 'string' ||
    e === 'url' ||
    e === 'hex' ||
    e === 'email' ||
    e === 'date' ||
    e === 'pattern'
  );
}
function _t(e, t) {
  return !!(
    e == null ||
    (t === 'array' && Array.isArray(e) && !e.length) ||
    (E_(t) && typeof e == 'string' && !e)
  );
}
function $_(e, t, n) {
  var r = [],
    o = 0,
    i = e.length;
  function a(l) {
    r.push.apply(r, l || []), o++, o === i && n(r);
  }
  e.forEach(function (l) {
    t(l, a);
  });
}
function n0(e, t, n) {
  var r = 0,
    o = e.length;
  function i(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var l = r;
    (r = r + 1), l < o ? t(e[l], i) : n([]);
  }
  i([]);
}
function O_(e) {
  var t = [];
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, e[n] || []);
    }),
    t
  );
}
var r0 = (function (e) {
  b_(t, e);
  function t(n, r) {
    var o;
    return (
      (o = e.call(this, 'Async Validation Error') || this),
      (o.errors = n),
      (o.fields = r),
      o
    );
  }
  return t;
})(_v(Error));
function P_(e, t, n, r, o) {
  if (t.first) {
    var i = new Promise(function (v, h) {
      var b = function (p) {
          return r(p), p.length ? h(new r0(p, Mv(p))) : v(o);
        },
        y = O_(e);
      n0(y, n, b);
    });
    return (
      i.catch(function (v) {
        return v;
      }),
      i
    );
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    l = Object.keys(e),
    s = l.length,
    c = 0,
    f = [],
    d = new Promise(function (v, h) {
      var b = function (S) {
        if ((f.push.apply(f, S), c++, c === s))
          return r(f), f.length ? h(new r0(f, Mv(f))) : v(o);
      };
      l.length || (r(f), v(o)),
        l.forEach(function (y) {
          var S = e[y];
          a.indexOf(y) !== -1 ? n0(S, n, b) : $_(S, n, b);
        });
    });
  return (
    d.catch(function (v) {
      return v;
    }),
    d
  );
}
function R_(e) {
  return !!(e && e.message !== void 0);
}
function T_(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null) return n;
    n = n[t[r]];
  }
  return n;
}
function o0(e, t) {
  return function (n) {
    var r;
    return (
      e.fullFields
        ? (r = T_(t, e.fullFields))
        : (r = t[n.field || e.fullField]),
      R_(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
        : {
            message: typeof n == 'function' ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField,
          }
    );
  };
}
function i0(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == 'object' && typeof e[n] == 'object'
          ? (e[n] = Vo({}, e[n], r))
          : (e[n] = r);
      }
  }
  return e;
}
var gS = function (t, n, r, o, i, a) {
    t.required &&
      (!r.hasOwnProperty(t.field) || _t(n, a || t.type)) &&
      o.push(Rn(i.messages.required, t.fullField));
  },
  __ = function (t, n, r, o, i) {
    (/^\s+$/.test(n) || n === '') &&
      o.push(Rn(i.messages.whitespace, t.fullField));
  },
  Ms,
  M_ = function () {
    if (Ms) return Ms;
    var e = '[a-fA-F\\d:]',
      t = function (C) {
        return C && C.includeBoundaries
          ? '(?:(?<=\\s|^)(?=' + e + ')|(?<=' + e + ')(?=\\s|$))'
          : '';
      },
      n =
        '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
      r = '[a-fA-F\\d]{1,4}',
      o = (
        `
(?:
(?:` +
        r +
        ':){7}(?:' +
        r +
        `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` +
        r +
        ':){6}(?:' +
        n +
        '|:' +
        r +
        `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` +
        r +
        ':){5}(?::' +
        n +
        '|(?::' +
        r +
        `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` +
        r +
        ':){4}(?:(?::' +
        r +
        '){0,1}:' +
        n +
        '|(?::' +
        r +
        `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` +
        r +
        ':){3}(?:(?::' +
        r +
        '){0,2}:' +
        n +
        '|(?::' +
        r +
        `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` +
        r +
        ':){2}(?:(?::' +
        r +
        '){0,3}:' +
        n +
        '|(?::' +
        r +
        `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` +
        r +
        ':){1}(?:(?::' +
        r +
        '){0,4}:' +
        n +
        '|(?::' +
        r +
        `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` +
        r +
        '){0,5}:' +
        n +
        '|(?::' +
        r +
        `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`
      )
        .replace(/\s*\/\/.*$/gm, '')
        .replace(/\n/g, '')
        .trim(),
      i = new RegExp('(?:^' + n + '$)|(?:^' + o + '$)'),
      a = new RegExp('^' + n + '$'),
      l = new RegExp('^' + o + '$'),
      s = function (C) {
        return C && C.exact
          ? i
          : new RegExp(
              '(?:' + t(C) + n + t(C) + ')|(?:' + t(C) + o + t(C) + ')',
              'g'
            );
      };
    (s.v4 = function (g) {
      return g && g.exact ? a : new RegExp('' + t(g) + n + t(g), 'g');
    }),
      (s.v6 = function (g) {
        return g && g.exact ? l : new RegExp('' + t(g) + o + t(g), 'g');
      });
    var c = '(?:(?:[a-z]+:)?//)',
      f = '(?:\\S+(?::\\S*)?@)?',
      d = s.v4().source,
      v = s.v6().source,
      h = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
      b = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
      y = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
      S = '(?::\\d{2,5})?',
      p = '(?:[/?#][^\\s"]*)?',
      m =
        '(?:' +
        c +
        '|www\\.)' +
        f +
        '(?:localhost|' +
        d +
        '|' +
        v +
        '|' +
        h +
        b +
        y +
        ')' +
        S +
        p;
    return (Ms = new RegExp('(?:^' + m + '$)', 'i')), Ms;
  },
  a0 = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  Ka = {
    integer: function (t) {
      return Ka.number(t) && parseInt(t, 10) === t;
    },
    float: function (t) {
      return Ka.number(t) && !Ka.integer(t);
    },
    array: function (t) {
      return Array.isArray(t);
    },
    regexp: function (t) {
      if (t instanceof RegExp) return !0;
      try {
        return !!new RegExp(t);
      } catch {
        return !1;
      }
    },
    date: function (t) {
      return (
        typeof t.getTime == 'function' &&
        typeof t.getMonth == 'function' &&
        typeof t.getYear == 'function' &&
        !isNaN(t.getTime())
      );
    },
    number: function (t) {
      return isNaN(t) ? !1 : typeof t == 'number';
    },
    object: function (t) {
      return typeof t == 'object' && !Ka.array(t);
    },
    method: function (t) {
      return typeof t == 'function';
    },
    email: function (t) {
      return typeof t == 'string' && t.length <= 320 && !!t.match(a0.email);
    },
    url: function (t) {
      return typeof t == 'string' && t.length <= 2048 && !!t.match(M_());
    },
    hex: function (t) {
      return typeof t == 'string' && !!t.match(a0.hex);
    },
  },
  I_ = function (t, n, r, o, i) {
    if (t.required && n === void 0) {
      gS(t, n, r, o, i);
      return;
    }
    var a = [
        'integer',
        'float',
        'array',
        'regexp',
        'object',
        'method',
        'email',
        'number',
        'date',
        'url',
        'hex',
      ],
      l = t.type;
    a.indexOf(l) > -1
      ? Ka[l](n) || o.push(Rn(i.messages.types[l], t.fullField, t.type))
      : l &&
        typeof n !== t.type &&
        o.push(Rn(i.messages.types[l], t.fullField, t.type));
  },
  k_ = function (t, n, r, o, i) {
    var a = typeof t.len == 'number',
      l = typeof t.min == 'number',
      s = typeof t.max == 'number',
      c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      f = n,
      d = null,
      v = typeof n == 'number',
      h = typeof n == 'string',
      b = Array.isArray(n);
    if ((v ? (d = 'number') : h ? (d = 'string') : b && (d = 'array'), !d))
      return !1;
    b && (f = n.length),
      h && (f = n.replace(c, '_').length),
      a
        ? f !== t.len && o.push(Rn(i.messages[d].len, t.fullField, t.len))
        : l && !s && f < t.min
          ? o.push(Rn(i.messages[d].min, t.fullField, t.min))
          : s && !l && f > t.max
            ? o.push(Rn(i.messages[d].max, t.fullField, t.max))
            : l &&
              s &&
              (f < t.min || f > t.max) &&
              o.push(Rn(i.messages[d].range, t.fullField, t.min, t.max));
  },
  wi = 'enum',
  N_ = function (t, n, r, o, i) {
    (t[wi] = Array.isArray(t[wi]) ? t[wi] : []),
      t[wi].indexOf(n) === -1 &&
        o.push(Rn(i.messages[wi], t.fullField, t[wi].join(', ')));
  },
  j_ = function (t, n, r, o, i) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(n) ||
            o.push(Rn(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
      else if (typeof t.pattern == 'string') {
        var a = new RegExp(t.pattern);
        a.test(n) ||
          o.push(Rn(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
      }
    }
  },
  _e = {
    required: gS,
    whitespace: __,
    type: I_,
    range: k_,
    enum: N_,
    pattern: j_,
  },
  L_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (_t(n, 'string') && !t.required) return r();
      _e.required(t, n, o, a, i, 'string'),
        _t(n, 'string') ||
          (_e.type(t, n, o, a, i),
          _e.range(t, n, o, a, i),
          _e.pattern(t, n, o, a, i),
          t.whitespace === !0 && _e.whitespace(t, n, o, a, i));
    }
    r(a);
  },
  F_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (_t(n) && !t.required) return r();
      _e.required(t, n, o, a, i), n !== void 0 && _e.type(t, n, o, a, i);
    }
    r(a);
  },
  A_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if ((n === '' && (n = void 0), _t(n) && !t.required)) return r();
      _e.required(t, n, o, a, i),
        n !== void 0 && (_e.type(t, n, o, a, i), _e.range(t, n, o, a, i));
    }
    r(a);
  },
  z_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (_t(n) && !t.required) return r();
      _e.required(t, n, o, a, i), n !== void 0 && _e.type(t, n, o, a, i);
    }
    r(a);
  },
  D_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (_t(n) && !t.required) return r();
      _e.required(t, n, o, a, i), _t(n) || _e.type(t, n, o, a, i);
    }
    r(a);
  },
  B_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (_t(n) && !t.required) return r();
      _e.required(t, n, o, a, i),
        n !== void 0 && (_e.type(t, n, o, a, i), _e.range(t, n, o, a, i));
    }
    r(a);
  },
  H_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (_t(n) && !t.required) return r();
      _e.required(t, n, o, a, i),
        n !== void 0 && (_e.type(t, n, o, a, i), _e.range(t, n, o, a, i));
    }
    r(a);
  },
  V_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (n == null && !t.required) return r();
      _e.required(t, n, o, a, i, 'array'),
        n != null && (_e.type(t, n, o, a, i), _e.range(t, n, o, a, i));
    }
    r(a);
  },
  W_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (_t(n) && !t.required) return r();
      _e.required(t, n, o, a, i), n !== void 0 && _e.type(t, n, o, a, i);
    }
    r(a);
  },
  U_ = 'enum',
  K_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (_t(n) && !t.required) return r();
      _e.required(t, n, o, a, i), n !== void 0 && _e[U_](t, n, o, a, i);
    }
    r(a);
  },
  G_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (_t(n, 'string') && !t.required) return r();
      _e.required(t, n, o, a, i), _t(n, 'string') || _e.pattern(t, n, o, a, i);
    }
    r(a);
  },
  q_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (_t(n, 'date') && !t.required) return r();
      if ((_e.required(t, n, o, a, i), !_t(n, 'date'))) {
        var s;
        n instanceof Date ? (s = n) : (s = new Date(n)),
          _e.type(t, s, o, a, i),
          s && _e.range(t, s.getTime(), o, a, i);
      }
    }
    r(a);
  },
  X_ = function (t, n, r, o, i) {
    var a = [],
      l = Array.isArray(n) ? 'array' : typeof n;
    _e.required(t, n, o, a, i, l), r(a);
  },
  Gf = function (t, n, r, o, i) {
    var a = t.type,
      l = [],
      s = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (s) {
      if (_t(n, a) && !t.required) return r();
      _e.required(t, n, o, l, i, a), _t(n, a) || _e.type(t, n, o, l, i);
    }
    r(l);
  },
  Q_ = function (t, n, r, o, i) {
    var a = [],
      l = t.required || (!t.required && o.hasOwnProperty(t.field));
    if (l) {
      if (_t(n) && !t.required) return r();
      _e.required(t, n, o, a, i);
    }
    r(a);
  },
  ll = {
    string: L_,
    method: F_,
    number: A_,
    boolean: z_,
    regexp: D_,
    integer: B_,
    float: H_,
    array: V_,
    object: W_,
    enum: K_,
    pattern: G_,
    date: q_,
    url: Gf,
    hex: Gf,
    email: Gf,
    required: X_,
    any: Q_,
  };
function Iv() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: { mismatch: '%s value %s does not match pattern %s' },
    clone: function () {
      var t = JSON.parse(JSON.stringify(this));
      return (t.clone = this.clone), t;
    },
  };
}
var kv = Iv(),
  Wl = (function () {
    function e(n) {
      (this.rules = null), (this._messages = kv), this.define(n);
    }
    var t = e.prototype;
    return (
      (t.define = function (r) {
        var o = this;
        if (!r) throw new Error('Cannot configure a schema with no rules');
        if (typeof r != 'object' || Array.isArray(r))
          throw new Error('Rules must be an object');
        (this.rules = {}),
          Object.keys(r).forEach(function (i) {
            var a = r[i];
            o.rules[i] = Array.isArray(a) ? a : [a];
          });
      }),
      (t.messages = function (r) {
        return r && (this._messages = i0(Iv(), r)), this._messages;
      }),
      (t.validate = function (r, o, i) {
        var a = this;
        o === void 0 && (o = {}), i === void 0 && (i = function () {});
        var l = r,
          s = o,
          c = i;
        if (
          (typeof s == 'function' && ((c = s), (s = {})),
          !this.rules || Object.keys(this.rules).length === 0)
        )
          return c && c(null, l), Promise.resolve(l);
        function f(y) {
          var S = [],
            p = {};
          function m(C) {
            if (Array.isArray(C)) {
              var E;
              S = (E = S).concat.apply(E, C);
            } else S.push(C);
          }
          for (var g = 0; g < y.length; g++) m(y[g]);
          S.length ? ((p = Mv(S)), c(S, p)) : c(null, l);
        }
        if (s.messages) {
          var d = this.messages();
          d === kv && (d = Iv()), i0(d, s.messages), (s.messages = d);
        } else s.messages = this.messages();
        var v = {},
          h = s.keys || Object.keys(this.rules);
        h.forEach(function (y) {
          var S = a.rules[y],
            p = l[y];
          S.forEach(function (m) {
            var g = m;
            typeof g.transform == 'function' &&
              (l === r && (l = Vo({}, l)), (p = l[y] = g.transform(p))),
              typeof g == 'function' ? (g = { validator: g }) : (g = Vo({}, g)),
              (g.validator = a.getValidationMethod(g)),
              g.validator &&
                ((g.field = y),
                (g.fullField = g.fullField || y),
                (g.type = a.getType(g)),
                (v[y] = v[y] || []),
                v[y].push({ rule: g, value: p, source: l, field: y }));
          });
        });
        var b = {};
        return P_(
          v,
          s,
          function (y, S) {
            var p = y.rule,
              m =
                (p.type === 'object' || p.type === 'array') &&
                (typeof p.fields == 'object' ||
                  typeof p.defaultField == 'object');
            (m = m && (p.required || (!p.required && y.value))),
              (p.field = y.field);
            function g(w, x) {
              return Vo({}, x, {
                fullField: p.fullField + '.' + w,
                fullFields: p.fullFields ? [].concat(p.fullFields, [w]) : [w],
              });
            }
            function C(w) {
              w === void 0 && (w = []);
              var x = Array.isArray(w) ? w : [w];
              !s.suppressWarning &&
                x.length &&
                e.warning('async-validator:', x),
                x.length && p.message !== void 0 && (x = [].concat(p.message));
              var O = x.map(o0(p, l));
              if (s.first && O.length) return (b[p.field] = 1), S(O);
              if (!m) S(O);
              else {
                if (p.required && !y.value)
                  return (
                    p.message !== void 0
                      ? (O = [].concat(p.message).map(o0(p, l)))
                      : s.error &&
                        (O = [s.error(p, Rn(s.messages.required, p.field))]),
                    S(O)
                  );
                var P = {};
                p.defaultField &&
                  Object.keys(y.value).map(function (L) {
                    P[L] = p.defaultField;
                  }),
                  (P = Vo({}, P, y.rule.fields));
                var _ = {};
                Object.keys(P).forEach(function (L) {
                  var R = P[L],
                    D = Array.isArray(R) ? R : [R];
                  _[L] = D.map(g.bind(null, L));
                });
                var M = new e(_);
                M.messages(s.messages),
                  y.rule.options &&
                    ((y.rule.options.messages = s.messages),
                    (y.rule.options.error = s.error)),
                  M.validate(y.value, y.rule.options || s, function (L) {
                    var R = [];
                    O && O.length && R.push.apply(R, O),
                      L && L.length && R.push.apply(R, L),
                      S(R.length ? R : null);
                  });
              }
            }
            var E;
            if (p.asyncValidator)
              E = p.asyncValidator(p, y.value, C, y.source, s);
            else if (p.validator) {
              try {
                E = p.validator(p, y.value, C, y.source, s);
              } catch (w) {
                console.error == null || console.error(w),
                  s.suppressValidatorError ||
                    setTimeout(function () {
                      throw w;
                    }, 0),
                  C(w.message);
              }
              E === !0
                ? C()
                : E === !1
                  ? C(
                      typeof p.message == 'function'
                        ? p.message(p.fullField || p.field)
                        : p.message || (p.fullField || p.field) + ' fails'
                    )
                  : E instanceof Array
                    ? C(E)
                    : E instanceof Error && C(E.message);
            }
            E &&
              E.then &&
              E.then(
                function () {
                  return C();
                },
                function (w) {
                  return C(w);
                }
              );
          },
          function (y) {
            f(y);
          },
          l
        );
      }),
      (t.getType = function (r) {
        if (
          (r.type === void 0 &&
            r.pattern instanceof RegExp &&
            (r.type = 'pattern'),
          typeof r.validator != 'function' &&
            r.type &&
            !ll.hasOwnProperty(r.type))
        )
          throw new Error(Rn('Unknown rule type %s', r.type));
        return r.type || 'string';
      }),
      (t.getValidationMethod = function (r) {
        if (typeof r.validator == 'function') return r.validator;
        var o = Object.keys(r),
          i = o.indexOf('message');
        return (
          i !== -1 && o.splice(i, 1),
          o.length === 1 && o[0] === 'required'
            ? ll.required
            : ll[this.getType(r)] || void 0
        );
      }),
      e
    );
  })();
Wl.register = function (t, n) {
  if (typeof n != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function'
    );
  ll[t] = n;
};
Wl.warning = x_;
Wl.messages = kv;
Wl.validators = ll;
var Sn = "'${name}' is not a valid ${type}",
  hS = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date",
    },
    types: {
      string: Sn,
      method: Sn,
      array: Sn,
      object: Sn,
      number: Sn,
      date: Sn,
      boolean: Sn,
      integer: Sn,
      float: Sn,
      regexp: Sn,
      email: Sn,
      url: Sn,
      hex: Sn,
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters",
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}",
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length",
    },
    pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
  },
  l0 = Wl;
function Y_(e, t) {
  return e.replace(/\$\{\w+\}/g, function (n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
var s0 = 'CODE_LOGIC_ERROR';
function Nv(e, t, n, r, o) {
  return jv.apply(this, arguments);
}
function jv() {
  return (
    (jv = mi(
      ln().mark(function e(t, n, r, o, i) {
        var a, l, s, c, f, d, v, h, b;
        return ln().wrap(
          function (S) {
            for (;;)
              switch ((S.prev = S.next)) {
                case 0:
                  return (
                    (a = z({}, r)),
                    delete a.ruleIndex,
                    (l0.warning = function () {}),
                    a.validator &&
                      ((l = a.validator),
                      (a.validator = function () {
                        try {
                          return l.apply(void 0, arguments);
                        } catch (p) {
                          return console.error(p), Promise.reject(s0);
                        }
                      })),
                    (s = null),
                    a &&
                      a.type === 'array' &&
                      a.defaultField &&
                      ((s = a.defaultField), delete a.defaultField),
                    (c = new l0(j({}, t, [a]))),
                    (f = Ui(hS, o.validateMessages)),
                    c.messages(f),
                    (d = []),
                    (S.prev = 10),
                    (S.next = 13),
                    Promise.resolve(c.validate(j({}, t, n), z({}, o)))
                  );
                case 13:
                  S.next = 18;
                  break;
                case 15:
                  (S.prev = 15),
                    (S.t0 = S.catch(10)),
                    S.t0.errors &&
                      (d = S.t0.errors.map(function (p, m) {
                        var g = p.message,
                          C = g === s0 ? f.default : g;
                        return u.isValidElement(C)
                          ? u.cloneElement(C, { key: 'error_'.concat(m) })
                          : C;
                      }));
                case 18:
                  if (!(!d.length && s)) {
                    S.next = 23;
                    break;
                  }
                  return (
                    (S.next = 21),
                    Promise.all(
                      n.map(function (p, m) {
                        return Nv(''.concat(t, '.').concat(m), p, s, o, i);
                      })
                    )
                  );
                case 21:
                  return (
                    (v = S.sent),
                    S.abrupt(
                      'return',
                      v.reduce(function (p, m) {
                        return [].concat(ae(p), ae(m));
                      }, [])
                    )
                  );
                case 23:
                  return (
                    (h = z(
                      z({}, r),
                      {},
                      { name: t, enum: (r.enum || []).join(', ') },
                      i
                    )),
                    (b = d.map(function (p) {
                      return typeof p == 'string' ? Y_(p, h) : p;
                    })),
                    S.abrupt('return', b)
                  );
                case 26:
                case 'end':
                  return S.stop();
              }
          },
          e,
          null,
          [[10, 15]]
        );
      })
    )),
    jv.apply(this, arguments)
  );
}
function Z_(e, t, n, r, o, i) {
  var a = e.join('.'),
    l = n
      .map(function (f, d) {
        var v = f.validator,
          h = z(z({}, f), {}, { ruleIndex: d });
        return (
          v &&
            (h.validator = function (b, y, S) {
              var p = !1,
                m = function () {
                  for (
                    var E = arguments.length, w = new Array(E), x = 0;
                    x < E;
                    x++
                  )
                    w[x] = arguments[x];
                  Promise.resolve().then(function () {
                    on(
                      !p,
                      'Your validator function has already return a promise. `callback` will be ignored.'
                    ),
                      p || S.apply(void 0, w);
                  });
                },
                g = v(b, y, m);
              (p =
                g &&
                typeof g.then == 'function' &&
                typeof g.catch == 'function'),
                on(
                  p,
                  '`callback` is deprecated. Please return a promise instead.'
                ),
                p &&
                  g
                    .then(function () {
                      S();
                    })
                    .catch(function (C) {
                      S(C || ' ');
                    });
            }),
          h
        );
      })
      .sort(function (f, d) {
        var v = f.warningOnly,
          h = f.ruleIndex,
          b = d.warningOnly,
          y = d.ruleIndex;
        return !!v == !!b ? h - y : v ? 1 : -1;
      }),
    s;
  if (o === !0)
    s = new Promise(
      (function () {
        var f = mi(
          ln().mark(function d(v, h) {
            var b, y, S;
            return ln().wrap(function (m) {
              for (;;)
                switch ((m.prev = m.next)) {
                  case 0:
                    b = 0;
                  case 1:
                    if (!(b < l.length)) {
                      m.next = 12;
                      break;
                    }
                    return (y = l[b]), (m.next = 5), Nv(a, t, y, r, i);
                  case 5:
                    if (((S = m.sent), !S.length)) {
                      m.next = 9;
                      break;
                    }
                    return h([{ errors: S, rule: y }]), m.abrupt('return');
                  case 9:
                    (b += 1), (m.next = 1);
                    break;
                  case 12:
                    v([]);
                  case 13:
                  case 'end':
                    return m.stop();
                }
            }, d);
          })
        );
        return function (d, v) {
          return f.apply(this, arguments);
        };
      })()
    );
  else {
    var c = l.map(function (f) {
      return Nv(a, t, f, r, i).then(function (d) {
        return { errors: d, rule: f };
      });
    });
    s = (o ? eM(c) : J_(c)).then(function (f) {
      return Promise.reject(f);
    });
  }
  return (
    s.catch(function (f) {
      return f;
    }),
    s
  );
}
function J_(e) {
  return Lv.apply(this, arguments);
}
function Lv() {
  return (
    (Lv = mi(
      ln().mark(function e(t) {
        return ln().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.all(t).then(function (o) {
                    var i,
                      a = (i = []).concat.apply(i, ae(o));
                    return a;
                  })
                );
              case 1:
              case 'end':
                return r.stop();
            }
        }, e);
      })
    )),
    Lv.apply(this, arguments)
  );
}
function eM(e) {
  return Fv.apply(this, arguments);
}
function Fv() {
  return (
    (Fv = mi(
      ln().mark(function e(t) {
        var n;
        return ln().wrap(function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (
                  (n = 0),
                  o.abrupt(
                    'return',
                    new Promise(function (i) {
                      t.forEach(function (a) {
                        a.then(function (l) {
                          l.errors.length && i([l]),
                            (n += 1),
                            n === t.length && i([]);
                        });
                      });
                    })
                  )
                );
              case 2:
              case 'end':
                return o.stop();
            }
        }, e);
      })
    )),
    Fv.apply(this, arguments)
  );
}
function bt(e) {
  return Rv(e);
}
function c0(e, t) {
  var n = {};
  return (
    t.forEach(function (r) {
      var o = gr(e, r);
      n = er(n, r, o);
    }),
    n
  );
}
function ea(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return (
    e &&
    e.some(function (r) {
      return yS(t, r, n);
    })
  );
}
function yS(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || (!n && e.length !== t.length)
    ? !1
    : t.every(function (r, o) {
        return e[o] === r;
      });
}
function tM(e, t) {
  if (e === t) return !0;
  if (
    (!e && t) ||
    (e && !t) ||
    !e ||
    !t ||
    ke(e) !== 'object' ||
    ke(t) !== 'object'
  )
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t),
    o = new Set([].concat(n, r));
  return ae(o).every(function (i) {
    var a = e[i],
      l = t[i];
    return typeof a == 'function' && typeof l == 'function' ? !0 : a === l;
  });
}
function nM(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && ke(t.target) === 'object' && e in t.target
    ? t.target[e]
    : t;
}
function u0(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r) return e;
  var o = e[t],
    i = t - n;
  return i > 0
    ? [].concat(
        ae(e.slice(0, n)),
        [o],
        ae(e.slice(n, t)),
        ae(e.slice(t + 1, r))
      )
    : i < 0
      ? [].concat(
          ae(e.slice(0, t)),
          ae(e.slice(t + 1, n + 1)),
          [o],
          ae(e.slice(n + 1, r))
        )
      : e;
}
var rM = ['name'],
  jn = [];
function f0(e, t, n, r, o, i) {
  return typeof e == 'function'
    ? e(t, n, 'source' in i ? { source: i.source } : {})
    : r !== o;
}
var yp = (function (e) {
  fi(n, e);
  var t = zl(n);
  function n(r) {
    var o;
    if (
      (hn(this, n),
      (o = t.call(this, r)),
      j(Ne(o), 'state', { resetCount: 0 }),
      j(Ne(o), 'cancelRegisterFunc', null),
      j(Ne(o), 'mounted', !1),
      j(Ne(o), 'touched', !1),
      j(Ne(o), 'dirty', !1),
      j(Ne(o), 'validatePromise', void 0),
      j(Ne(o), 'prevValidating', void 0),
      j(Ne(o), 'errors', jn),
      j(Ne(o), 'warnings', jn),
      j(Ne(o), 'cancelRegister', function () {
        var s = o.props,
          c = s.preserve,
          f = s.isListField,
          d = s.name;
        o.cancelRegisterFunc && o.cancelRegisterFunc(f, c, bt(d)),
          (o.cancelRegisterFunc = null);
      }),
      j(Ne(o), 'getNamePath', function () {
        var s = o.props,
          c = s.name,
          f = s.fieldContext,
          d = f.prefixName,
          v = d === void 0 ? [] : d;
        return c !== void 0 ? [].concat(ae(v), ae(c)) : [];
      }),
      j(Ne(o), 'getRules', function () {
        var s = o.props,
          c = s.rules,
          f = c === void 0 ? [] : c,
          d = s.fieldContext;
        return f.map(function (v) {
          return typeof v == 'function' ? v(d) : v;
        });
      }),
      j(Ne(o), 'refresh', function () {
        o.mounted &&
          o.setState(function (s) {
            var c = s.resetCount;
            return { resetCount: c + 1 };
          });
      }),
      j(Ne(o), 'metaCache', null),
      j(Ne(o), 'triggerMetaEvent', function (s) {
        var c = o.props.onMetaChange;
        if (c) {
          var f = z(z({}, o.getMeta()), {}, { destroy: s });
          Pu(o.metaCache, f) || c(f), (o.metaCache = f);
        } else o.metaCache = null;
      }),
      j(Ne(o), 'onStoreChange', function (s, c, f) {
        var d = o.props,
          v = d.shouldUpdate,
          h = d.dependencies,
          b = h === void 0 ? [] : h,
          y = d.onReset,
          S = f.store,
          p = o.getNamePath(),
          m = o.getValue(s),
          g = o.getValue(S),
          C = c && ea(c, p);
        switch (
          (f.type === 'valueUpdate' &&
            f.source === 'external' &&
            m !== g &&
            ((o.touched = !0),
            (o.dirty = !0),
            (o.validatePromise = null),
            (o.errors = jn),
            (o.warnings = jn),
            o.triggerMetaEvent()),
          f.type)
        ) {
          case 'reset':
            if (!c || C) {
              (o.touched = !1),
                (o.dirty = !1),
                (o.validatePromise = void 0),
                (o.errors = jn),
                (o.warnings = jn),
                o.triggerMetaEvent(),
                y == null || y(),
                o.refresh();
              return;
            }
            break;
          case 'remove': {
            if (v) {
              o.reRender();
              return;
            }
            break;
          }
          case 'setField': {
            var E = f.data;
            if (C) {
              'touched' in E && (o.touched = E.touched),
                'validating' in E &&
                  !('originRCField' in E) &&
                  (o.validatePromise = E.validating
                    ? Promise.resolve([])
                    : null),
                'errors' in E && (o.errors = E.errors || jn),
                'warnings' in E && (o.warnings = E.warnings || jn),
                (o.dirty = !0),
                o.triggerMetaEvent(),
                o.reRender();
              return;
            } else if ('value' in E && ea(c, p, !0)) {
              o.reRender();
              return;
            }
            if (v && !p.length && f0(v, s, S, m, g, f)) {
              o.reRender();
              return;
            }
            break;
          }
          case 'dependenciesUpdate': {
            var w = b.map(bt);
            if (
              w.some(function (x) {
                return ea(f.relatedFields, x);
              })
            ) {
              o.reRender();
              return;
            }
            break;
          }
          default:
            if (C || ((!b.length || p.length || v) && f0(v, s, S, m, g, f))) {
              o.reRender();
              return;
            }
            break;
        }
        v === !0 && o.reRender();
      }),
      j(Ne(o), 'validateRules', function (s) {
        var c = o.getNamePath(),
          f = o.getValue(),
          d = s || {},
          v = d.triggerName,
          h = d.validateOnly,
          b = h === void 0 ? !1 : h,
          y = Promise.resolve().then(
            mi(
              ln().mark(function S() {
                var p, m, g, C, E, w, x;
                return ln().wrap(function (P) {
                  for (;;)
                    switch ((P.prev = P.next)) {
                      case 0:
                        if (o.mounted) {
                          P.next = 2;
                          break;
                        }
                        return P.abrupt('return', []);
                      case 2:
                        if (
                          ((p = o.props),
                          (m = p.validateFirst),
                          (g = m === void 0 ? !1 : m),
                          (C = p.messageVariables),
                          (E = p.validateDebounce),
                          (w = o.getRules()),
                          v &&
                            (w = w
                              .filter(function (_) {
                                return _;
                              })
                              .filter(function (_) {
                                var M = _.validateTrigger;
                                if (!M) return !0;
                                var L = Rv(M);
                                return L.includes(v);
                              })),
                          !(E && v))
                        ) {
                          P.next = 10;
                          break;
                        }
                        return (
                          (P.next = 8),
                          new Promise(function (_) {
                            setTimeout(_, E);
                          })
                        );
                      case 8:
                        if (o.validatePromise === y) {
                          P.next = 10;
                          break;
                        }
                        return P.abrupt('return', []);
                      case 10:
                        return (
                          (x = Z_(c, f, w, s, g, C)),
                          x
                            .catch(function (_) {
                              return _;
                            })
                            .then(function () {
                              var _ =
                                arguments.length > 0 && arguments[0] !== void 0
                                  ? arguments[0]
                                  : jn;
                              if (o.validatePromise === y) {
                                var M;
                                o.validatePromise = null;
                                var L = [],
                                  R = [];
                                (M = _.forEach) === null ||
                                  M === void 0 ||
                                  M.call(_, function (D) {
                                    var B = D.rule.warningOnly,
                                      k = D.errors,
                                      T = k === void 0 ? jn : k;
                                    B
                                      ? R.push.apply(R, ae(T))
                                      : L.push.apply(L, ae(T));
                                  }),
                                  (o.errors = L),
                                  (o.warnings = R),
                                  o.triggerMetaEvent(),
                                  o.reRender();
                              }
                            }),
                          P.abrupt('return', x)
                        );
                      case 13:
                      case 'end':
                        return P.stop();
                    }
                }, S);
              })
            )
          );
        return (
          b ||
            ((o.validatePromise = y),
            (o.dirty = !0),
            (o.errors = jn),
            (o.warnings = jn),
            o.triggerMetaEvent(),
            o.reRender()),
          y
        );
      }),
      j(Ne(o), 'isFieldValidating', function () {
        return !!o.validatePromise;
      }),
      j(Ne(o), 'isFieldTouched', function () {
        return o.touched;
      }),
      j(Ne(o), 'isFieldDirty', function () {
        if (o.dirty || o.props.initialValue !== void 0) return !0;
        var s = o.props.fieldContext,
          c = s.getInternalHooks(Ho),
          f = c.getInitialValue;
        return f(o.getNamePath()) !== void 0;
      }),
      j(Ne(o), 'getErrors', function () {
        return o.errors;
      }),
      j(Ne(o), 'getWarnings', function () {
        return o.warnings;
      }),
      j(Ne(o), 'isListField', function () {
        return o.props.isListField;
      }),
      j(Ne(o), 'isList', function () {
        return o.props.isList;
      }),
      j(Ne(o), 'isPreserve', function () {
        return o.props.preserve;
      }),
      j(Ne(o), 'getMeta', function () {
        o.prevValidating = o.isFieldValidating();
        var s = {
          touched: o.isFieldTouched(),
          validating: o.prevValidating,
          errors: o.errors,
          warnings: o.warnings,
          name: o.getNamePath(),
          validated: o.validatePromise === null,
        };
        return s;
      }),
      j(Ne(o), 'getOnlyChild', function (s) {
        if (typeof s == 'function') {
          var c = o.getMeta();
          return z(
            z(
              {},
              o.getOnlyChild(s(o.getControlled(), c, o.props.fieldContext))
            ),
            {},
            { isFunction: !0 }
          );
        }
        var f = ri(s);
        return f.length !== 1 || !u.isValidElement(f[0])
          ? { child: f, isFunction: !1 }
          : { child: f[0], isFunction: !1 };
      }),
      j(Ne(o), 'getValue', function (s) {
        var c = o.props.fieldContext.getFieldsValue,
          f = o.getNamePath();
        return gr(s || c(!0), f);
      }),
      j(Ne(o), 'getControlled', function () {
        var s =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          c = o.props,
          f = c.trigger,
          d = c.validateTrigger,
          v = c.getValueFromEvent,
          h = c.normalize,
          b = c.valuePropName,
          y = c.getValueProps,
          S = c.fieldContext,
          p = d !== void 0 ? d : S.validateTrigger,
          m = o.getNamePath(),
          g = S.getInternalHooks,
          C = S.getFieldsValue,
          E = g(Ho),
          w = E.dispatch,
          x = o.getValue(),
          O =
            y ||
            function (R) {
              return j({}, b, R);
            },
          P = s[f],
          _ = O(x),
          M = z(z({}, s), _);
        M[f] = function () {
          (o.touched = !0), (o.dirty = !0), o.triggerMetaEvent();
          for (var R, D = arguments.length, B = new Array(D), k = 0; k < D; k++)
            B[k] = arguments[k];
          v ? (R = v.apply(void 0, B)) : (R = nM.apply(void 0, [b].concat(B))),
            h && (R = h(R, x, C(!0))),
            w({ type: 'updateValue', namePath: m, value: R }),
            P && P.apply(void 0, B);
        };
        var L = Rv(p || []);
        return (
          L.forEach(function (R) {
            var D = M[R];
            M[R] = function () {
              D && D.apply(void 0, arguments);
              var B = o.props.rules;
              B &&
                B.length &&
                w({ type: 'validateField', namePath: m, triggerName: R });
            };
          }),
          M
        );
      }),
      r.fieldContext)
    ) {
      var i = r.fieldContext.getInternalHooks,
        a = i(Ho),
        l = a.initEntityValue;
      l(Ne(o));
    }
    return o;
  }
  return (
    yn(n, [
      {
        key: 'componentDidMount',
        value: function () {
          var o = this.props,
            i = o.shouldUpdate,
            a = o.fieldContext;
          if (((this.mounted = !0), a)) {
            var l = a.getInternalHooks,
              s = l(Ho),
              c = s.registerField;
            this.cancelRegisterFunc = c(this);
          }
          i === !0 && this.reRender();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1);
        },
      },
      {
        key: 'reRender',
        value: function () {
          this.mounted && this.forceUpdate();
        },
      },
      {
        key: 'render',
        value: function () {
          var o = this.state.resetCount,
            i = this.props.children,
            a = this.getOnlyChild(i),
            l = a.child,
            s = a.isFunction,
            c;
          return (
            s
              ? (c = l)
              : u.isValidElement(l)
                ? (c = u.cloneElement(l, this.getControlled(l.props)))
                : (on(!l, '`children` of Field is not validate ReactElement.'),
                  (c = l)),
            u.createElement(u.Fragment, { key: o }, c)
          );
        },
      },
    ]),
    n
  );
})(u.Component);
j(yp, 'contextType', ma);
j(yp, 'defaultProps', { trigger: 'onChange', valuePropName: 'value' });
function bS(e) {
  var t = e.name,
    n = Ae(e, rM),
    r = u.useContext(ma),
    o = u.useContext(Hc),
    i = t !== void 0 ? bt(t) : void 0,
    a = 'keep';
  return (
    n.isListField || (a = '_'.concat((i || []).join('_'))),
    u.createElement(
      yp,
      ue({ key: a, name: i, isListField: !!o }, n, { fieldContext: r })
    )
  );
}
function oM(e) {
  var t = e.name,
    n = e.initialValue,
    r = e.children,
    o = e.rules,
    i = e.validateTrigger,
    a = e.isListField,
    l = u.useContext(ma),
    s = u.useContext(Hc),
    c = u.useRef({ keys: [], id: 0 }),
    f = c.current,
    d = u.useMemo(
      function () {
        var y = bt(l.prefixName) || [];
        return [].concat(ae(y), ae(bt(t)));
      },
      [l.prefixName, t]
    ),
    v = u.useMemo(
      function () {
        return z(z({}, l), {}, { prefixName: d });
      },
      [l, d]
    ),
    h = u.useMemo(
      function () {
        return {
          getKey: function (S) {
            var p = d.length,
              m = S[p];
            return [f.keys[m], S.slice(p + 1)];
          },
        };
      },
      [d]
    );
  if (typeof r != 'function')
    return on(!1, 'Form.List only accepts function as children.'), null;
  var b = function (S, p, m) {
    var g = m.source;
    return g === 'internal' ? !1 : S !== p;
  };
  return u.createElement(
    Hc.Provider,
    { value: h },
    u.createElement(
      ma.Provider,
      { value: v },
      u.createElement(
        bS,
        {
          name: [],
          shouldUpdate: b,
          rules: o,
          validateTrigger: i,
          initialValue: n,
          isList: !0,
          isListField: a ?? !!s,
        },
        function (y, S) {
          var p = y.value,
            m = p === void 0 ? [] : p,
            g = y.onChange,
            C = l.getFieldValue,
            E = function () {
              var P = C(d || []);
              return P || [];
            },
            w = {
              add: function (P, _) {
                var M = E();
                _ >= 0 && _ <= M.length
                  ? ((f.keys = [].concat(
                      ae(f.keys.slice(0, _)),
                      [f.id],
                      ae(f.keys.slice(_))
                    )),
                    g([].concat(ae(M.slice(0, _)), [P], ae(M.slice(_)))))
                  : ((f.keys = [].concat(ae(f.keys), [f.id])),
                    g([].concat(ae(M), [P]))),
                  (f.id += 1);
              },
              remove: function (P) {
                var _ = E(),
                  M = new Set(Array.isArray(P) ? P : [P]);
                M.size <= 0 ||
                  ((f.keys = f.keys.filter(function (L, R) {
                    return !M.has(R);
                  })),
                  g(
                    _.filter(function (L, R) {
                      return !M.has(R);
                    })
                  ));
              },
              move: function (P, _) {
                if (P !== _) {
                  var M = E();
                  P < 0 ||
                    P >= M.length ||
                    _ < 0 ||
                    _ >= M.length ||
                    ((f.keys = u0(f.keys, P, _)), g(u0(M, P, _)));
                }
              },
            },
            x = m || [];
          return (
            Array.isArray(x) || (x = []),
            r(
              x.map(function (O, P) {
                var _ = f.keys[P];
                return (
                  _ === void 0 &&
                    ((f.keys[P] = f.id), (_ = f.keys[P]), (f.id += 1)),
                  { name: P, key: _, isListField: !0 }
                );
              }),
              w,
              S
            )
          );
        }
      )
    )
  );
}
function iM(e) {
  var t = !1,
    n = e.length,
    r = [];
  return e.length
    ? new Promise(function (o, i) {
        e.forEach(function (a, l) {
          a.catch(function (s) {
            return (t = !0), s;
          }).then(function (s) {
            (n -= 1), (r[l] = s), !(n > 0) && (t && i(r), o(r));
          });
        });
      })
    : Promise.resolve([]);
}
var CS = '__@field_split__';
function qf(e) {
  return e
    .map(function (t) {
      return ''.concat(ke(t), ':').concat(t);
    })
    .join(CS);
}
var xi = (function () {
    function e() {
      hn(this, e), j(this, 'kvs', new Map());
    }
    return (
      yn(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.kvs.set(qf(n), r);
          },
        },
        {
          key: 'get',
          value: function (n) {
            return this.kvs.get(qf(n));
          },
        },
        {
          key: 'update',
          value: function (n, r) {
            var o = this.get(n),
              i = r(o);
            i ? this.set(n, i) : this.delete(n);
          },
        },
        {
          key: 'delete',
          value: function (n) {
            this.kvs.delete(qf(n));
          },
        },
        {
          key: 'map',
          value: function (n) {
            return ae(this.kvs.entries()).map(function (r) {
              var o = H(r, 2),
                i = o[0],
                a = o[1],
                l = i.split(CS);
              return n({
                key: l.map(function (s) {
                  var c = s.match(/^([^:]*):(.*)$/),
                    f = H(c, 3),
                    d = f[1],
                    v = f[2];
                  return d === 'number' ? Number(v) : v;
                }),
                value: a,
              });
            });
          },
        },
        {
          key: 'toJSON',
          value: function () {
            var n = {};
            return (
              this.map(function (r) {
                var o = r.key,
                  i = r.value;
                return (n[o.join('.')] = i), null;
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  aM = ['name'],
  lM = yn(function e(t) {
    var n = this;
    hn(this, e),
      j(this, 'formHooked', !1),
      j(this, 'forceRootUpdate', void 0),
      j(this, 'subscribable', !0),
      j(this, 'store', {}),
      j(this, 'fieldEntities', []),
      j(this, 'initialValues', {}),
      j(this, 'callbacks', {}),
      j(this, 'validateMessages', null),
      j(this, 'preserve', null),
      j(this, 'lastValidatePromise', null),
      j(this, 'getForm', function () {
        return {
          getFieldValue: n.getFieldValue,
          getFieldsValue: n.getFieldsValue,
          getFieldError: n.getFieldError,
          getFieldWarning: n.getFieldWarning,
          getFieldsError: n.getFieldsError,
          isFieldsTouched: n.isFieldsTouched,
          isFieldTouched: n.isFieldTouched,
          isFieldValidating: n.isFieldValidating,
          isFieldsValidating: n.isFieldsValidating,
          resetFields: n.resetFields,
          setFields: n.setFields,
          setFieldValue: n.setFieldValue,
          setFieldsValue: n.setFieldsValue,
          validateFields: n.validateFields,
          submit: n.submit,
          _init: !0,
          getInternalHooks: n.getInternalHooks,
        };
      }),
      j(this, 'getInternalHooks', function (r) {
        return r === Ho
          ? ((n.formHooked = !0),
            {
              dispatch: n.dispatch,
              initEntityValue: n.initEntityValue,
              registerField: n.registerField,
              useSubscribe: n.useSubscribe,
              setInitialValues: n.setInitialValues,
              destroyForm: n.destroyForm,
              setCallbacks: n.setCallbacks,
              setValidateMessages: n.setValidateMessages,
              getFields: n.getFields,
              setPreserve: n.setPreserve,
              getInitialValue: n.getInitialValue,
              registerWatch: n.registerWatch,
            })
          : (on(
              !1,
              '`getInternalHooks` is internal usage. Should not call directly.'
            ),
            null);
      }),
      j(this, 'useSubscribe', function (r) {
        n.subscribable = r;
      }),
      j(this, 'prevWithoutPreserves', null),
      j(this, 'setInitialValues', function (r, o) {
        if (((n.initialValues = r || {}), o)) {
          var i,
            a = Ui(r, n.store);
          (i = n.prevWithoutPreserves) === null ||
            i === void 0 ||
            i.map(function (l) {
              var s = l.key;
              a = er(a, s, gr(r, s));
            }),
            (n.prevWithoutPreserves = null),
            n.updateStore(a);
        }
      }),
      j(this, 'destroyForm', function () {
        var r = new xi();
        n.getFieldEntities(!0).forEach(function (o) {
          n.isMergedPreserve(o.isPreserve()) || r.set(o.getNamePath(), !0);
        }),
          (n.prevWithoutPreserves = r);
      }),
      j(this, 'getInitialValue', function (r) {
        var o = gr(n.initialValues, r);
        return r.length ? Ui(o) : o;
      }),
      j(this, 'setCallbacks', function (r) {
        n.callbacks = r;
      }),
      j(this, 'setValidateMessages', function (r) {
        n.validateMessages = r;
      }),
      j(this, 'setPreserve', function (r) {
        n.preserve = r;
      }),
      j(this, 'watchList', []),
      j(this, 'registerWatch', function (r) {
        return (
          n.watchList.push(r),
          function () {
            n.watchList = n.watchList.filter(function (o) {
              return o !== r;
            });
          }
        );
      }),
      j(this, 'notifyWatch', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (n.watchList.length) {
          var o = n.getFieldsValue(),
            i = n.getFieldsValue(!0);
          n.watchList.forEach(function (a) {
            a(o, i, r);
          });
        }
      }),
      j(this, 'timeoutId', null),
      j(this, 'warningUnhooked', function () {}),
      j(this, 'updateStore', function (r) {
        n.store = r;
      }),
      j(this, 'getFieldEntities', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
        return r
          ? n.fieldEntities.filter(function (o) {
              return o.getNamePath().length;
            })
          : n.fieldEntities;
      }),
      j(this, 'getFieldsMap', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          o = new xi();
        return (
          n.getFieldEntities(r).forEach(function (i) {
            var a = i.getNamePath();
            o.set(a, i);
          }),
          o
        );
      }),
      j(this, 'getFieldEntitiesForNamePathList', function (r) {
        if (!r) return n.getFieldEntities(!0);
        var o = n.getFieldsMap(!0);
        return r.map(function (i) {
          var a = bt(i);
          return o.get(a) || { INVALIDATE_NAME_PATH: bt(i) };
        });
      }),
      j(this, 'getFieldsValue', function (r, o) {
        n.warningUnhooked();
        var i, a, l;
        if (
          (r === !0 || Array.isArray(r)
            ? ((i = r), (a = o))
            : r && ke(r) === 'object' && ((l = r.strict), (a = r.filter)),
          i === !0 && !a)
        )
          return n.store;
        var s = n.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null),
          c = [];
        return (
          s.forEach(function (f) {
            var d,
              v,
              h =
                'INVALIDATE_NAME_PATH' in f
                  ? f.INVALIDATE_NAME_PATH
                  : f.getNamePath();
            if (l) {
              var b, y;
              if ((b = (y = f).isList) !== null && b !== void 0 && b.call(y))
                return;
            } else if (
              !i &&
              (d = (v = f).isListField) !== null &&
              d !== void 0 &&
              d.call(v)
            )
              return;
            if (!a) c.push(h);
            else {
              var S = 'getMeta' in f ? f.getMeta() : null;
              a(S) && c.push(h);
            }
          }),
          c0(n.store, c.map(bt))
        );
      }),
      j(this, 'getFieldValue', function (r) {
        n.warningUnhooked();
        var o = bt(r);
        return gr(n.store, o);
      }),
      j(this, 'getFieldsError', function (r) {
        n.warningUnhooked();
        var o = n.getFieldEntitiesForNamePathList(r);
        return o.map(function (i, a) {
          return i && !('INVALIDATE_NAME_PATH' in i)
            ? {
                name: i.getNamePath(),
                errors: i.getErrors(),
                warnings: i.getWarnings(),
              }
            : { name: bt(r[a]), errors: [], warnings: [] };
        });
      }),
      j(this, 'getFieldError', function (r) {
        n.warningUnhooked();
        var o = bt(r),
          i = n.getFieldsError([o])[0];
        return i.errors;
      }),
      j(this, 'getFieldWarning', function (r) {
        n.warningUnhooked();
        var o = bt(r),
          i = n.getFieldsError([o])[0];
        return i.warnings;
      }),
      j(this, 'isFieldsTouched', function () {
        n.warningUnhooked();
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
          o[i] = arguments[i];
        var a = o[0],
          l = o[1],
          s,
          c = !1;
        o.length === 0
          ? (s = null)
          : o.length === 1
            ? Array.isArray(a)
              ? ((s = a.map(bt)), (c = !1))
              : ((s = null), (c = a))
            : ((s = a.map(bt)), (c = l));
        var f = n.getFieldEntities(!0),
          d = function (S) {
            return S.isFieldTouched();
          };
        if (!s)
          return c
            ? f.every(function (y) {
                return d(y) || y.isList();
              })
            : f.some(d);
        var v = new xi();
        s.forEach(function (y) {
          v.set(y, []);
        }),
          f.forEach(function (y) {
            var S = y.getNamePath();
            s.forEach(function (p) {
              p.every(function (m, g) {
                return S[g] === m;
              }) &&
                v.update(p, function (m) {
                  return [].concat(ae(m), [y]);
                });
            });
          });
        var h = function (S) {
            return S.some(d);
          },
          b = v.map(function (y) {
            var S = y.value;
            return S;
          });
        return c ? b.every(h) : b.some(h);
      }),
      j(this, 'isFieldTouched', function (r) {
        return n.warningUnhooked(), n.isFieldsTouched([r]);
      }),
      j(this, 'isFieldsValidating', function (r) {
        n.warningUnhooked();
        var o = n.getFieldEntities();
        if (!r)
          return o.some(function (a) {
            return a.isFieldValidating();
          });
        var i = r.map(bt);
        return o.some(function (a) {
          var l = a.getNamePath();
          return ea(i, l) && a.isFieldValidating();
        });
      }),
      j(this, 'isFieldValidating', function (r) {
        return n.warningUnhooked(), n.isFieldsValidating([r]);
      }),
      j(this, 'resetWithFieldInitialValue', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          o = new xi(),
          i = n.getFieldEntities(!0);
        i.forEach(function (s) {
          var c = s.props.initialValue,
            f = s.getNamePath();
          if (c !== void 0) {
            var d = o.get(f) || new Set();
            d.add({ entity: s, value: c }), o.set(f, d);
          }
        });
        var a = function (c) {
            c.forEach(function (f) {
              var d = f.props.initialValue;
              if (d !== void 0) {
                var v = f.getNamePath(),
                  h = n.getInitialValue(v);
                if (h !== void 0)
                  on(
                    !1,
                    "Form already set 'initialValues' with path '".concat(
                      v.join('.'),
                      "'. Field can not overwrite it."
                    )
                  );
                else {
                  var b = o.get(v);
                  if (b && b.size > 1)
                    on(
                      !1,
                      "Multiple Field with path '".concat(
                        v.join('.'),
                        "' set 'initialValue'. Can not decide which one to pick."
                      )
                    );
                  else if (b) {
                    var y = n.getFieldValue(v),
                      S = f.isListField();
                    !S &&
                      (!r.skipExist || y === void 0) &&
                      n.updateStore(er(n.store, v, ae(b)[0].value));
                  }
                }
              }
            });
          },
          l;
        r.entities
          ? (l = r.entities)
          : r.namePathList
            ? ((l = []),
              r.namePathList.forEach(function (s) {
                var c = o.get(s);
                if (c) {
                  var f;
                  (f = l).push.apply(
                    f,
                    ae(
                      ae(c).map(function (d) {
                        return d.entity;
                      })
                    )
                  );
                }
              }))
            : (l = i),
          a(l);
      }),
      j(this, 'resetFields', function (r) {
        n.warningUnhooked();
        var o = n.store;
        if (!r) {
          n.updateStore(Ui(n.initialValues)),
            n.resetWithFieldInitialValue(),
            n.notifyObservers(o, null, { type: 'reset' }),
            n.notifyWatch();
          return;
        }
        var i = r.map(bt);
        i.forEach(function (a) {
          var l = n.getInitialValue(a);
          n.updateStore(er(n.store, a, l));
        }),
          n.resetWithFieldInitialValue({ namePathList: i }),
          n.notifyObservers(o, i, { type: 'reset' }),
          n.notifyWatch(i);
      }),
      j(this, 'setFields', function (r) {
        n.warningUnhooked();
        var o = n.store,
          i = [];
        r.forEach(function (a) {
          var l = a.name,
            s = Ae(a, aM),
            c = bt(l);
          i.push(c),
            'value' in s && n.updateStore(er(n.store, c, s.value)),
            n.notifyObservers(o, [c], { type: 'setField', data: a });
        }),
          n.notifyWatch(i);
      }),
      j(this, 'getFields', function () {
        var r = n.getFieldEntities(!0),
          o = r.map(function (i) {
            var a = i.getNamePath(),
              l = i.getMeta(),
              s = z(z({}, l), {}, { name: a, value: n.getFieldValue(a) });
            return Object.defineProperty(s, 'originRCField', { value: !0 }), s;
          });
        return o;
      }),
      j(this, 'initEntityValue', function (r) {
        var o = r.props.initialValue;
        if (o !== void 0) {
          var i = r.getNamePath(),
            a = gr(n.store, i);
          a === void 0 && n.updateStore(er(n.store, i, o));
        }
      }),
      j(this, 'isMergedPreserve', function (r) {
        var o = r !== void 0 ? r : n.preserve;
        return o ?? !0;
      }),
      j(this, 'registerField', function (r) {
        n.fieldEntities.push(r);
        var o = r.getNamePath();
        if ((n.notifyWatch([o]), r.props.initialValue !== void 0)) {
          var i = n.store;
          n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
            n.notifyObservers(i, [r.getNamePath()], {
              type: 'valueUpdate',
              source: 'internal',
            });
        }
        return function (a, l) {
          var s =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
          if (
            ((n.fieldEntities = n.fieldEntities.filter(function (d) {
              return d !== r;
            })),
            !n.isMergedPreserve(l) && (!a || s.length > 1))
          ) {
            var c = a ? void 0 : n.getInitialValue(o);
            if (
              o.length &&
              n.getFieldValue(o) !== c &&
              n.fieldEntities.every(function (d) {
                return !yS(d.getNamePath(), o);
              })
            ) {
              var f = n.store;
              n.updateStore(er(f, o, c, !0)),
                n.notifyObservers(f, [o], { type: 'remove' }),
                n.triggerDependenciesUpdate(f, o);
            }
          }
          n.notifyWatch([o]);
        };
      }),
      j(this, 'dispatch', function (r) {
        switch (r.type) {
          case 'updateValue': {
            var o = r.namePath,
              i = r.value;
            n.updateValue(o, i);
            break;
          }
          case 'validateField': {
            var a = r.namePath,
              l = r.triggerName;
            n.validateFields([a], { triggerName: l });
            break;
          }
        }
      }),
      j(this, 'notifyObservers', function (r, o, i) {
        if (n.subscribable) {
          var a = z(z({}, i), {}, { store: n.getFieldsValue(!0) });
          n.getFieldEntities().forEach(function (l) {
            var s = l.onStoreChange;
            s(r, o, a);
          });
        } else n.forceRootUpdate();
      }),
      j(this, 'triggerDependenciesUpdate', function (r, o) {
        var i = n.getDependencyChildrenFields(o);
        return (
          i.length && n.validateFields(i),
          n.notifyObservers(r, i, {
            type: 'dependenciesUpdate',
            relatedFields: [o].concat(ae(i)),
          }),
          i
        );
      }),
      j(this, 'updateValue', function (r, o) {
        var i = bt(r),
          a = n.store;
        n.updateStore(er(n.store, i, o)),
          n.notifyObservers(a, [i], {
            type: 'valueUpdate',
            source: 'internal',
          }),
          n.notifyWatch([i]);
        var l = n.triggerDependenciesUpdate(a, i),
          s = n.callbacks.onValuesChange;
        if (s) {
          var c = c0(n.store, [i]);
          s(c, n.getFieldsValue());
        }
        n.triggerOnFieldsChange([i].concat(ae(l)));
      }),
      j(this, 'setFieldsValue', function (r) {
        n.warningUnhooked();
        var o = n.store;
        if (r) {
          var i = Ui(n.store, r);
          n.updateStore(i);
        }
        n.notifyObservers(o, null, { type: 'valueUpdate', source: 'external' }),
          n.notifyWatch();
      }),
      j(this, 'setFieldValue', function (r, o) {
        n.setFields([{ name: r, value: o }]);
      }),
      j(this, 'getDependencyChildrenFields', function (r) {
        var o = new Set(),
          i = [],
          a = new xi();
        n.getFieldEntities().forEach(function (s) {
          var c = s.props.dependencies;
          (c || []).forEach(function (f) {
            var d = bt(f);
            a.update(d, function () {
              var v =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : new Set();
              return v.add(s), v;
            });
          });
        });
        var l = function s(c) {
          var f = a.get(c) || new Set();
          f.forEach(function (d) {
            if (!o.has(d)) {
              o.add(d);
              var v = d.getNamePath();
              d.isFieldDirty() && v.length && (i.push(v), s(v));
            }
          });
        };
        return l(r), i;
      }),
      j(this, 'triggerOnFieldsChange', function (r, o) {
        var i = n.callbacks.onFieldsChange;
        if (i) {
          var a = n.getFields();
          if (o) {
            var l = new xi();
            o.forEach(function (c) {
              var f = c.name,
                d = c.errors;
              l.set(f, d);
            }),
              a.forEach(function (c) {
                c.errors = l.get(c.name) || c.errors;
              });
          }
          var s = a.filter(function (c) {
            var f = c.name;
            return ea(r, f);
          });
          s.length && i(s, a);
        }
      }),
      j(this, 'validateFields', function (r, o) {
        n.warningUnhooked();
        var i, a;
        Array.isArray(r) || typeof r == 'string' || typeof o == 'string'
          ? ((i = r), (a = o))
          : (a = r);
        var l = !!i,
          s = l ? i.map(bt) : [],
          c = [],
          f = String(Date.now()),
          d = new Set(),
          v = a || {},
          h = v.recursive,
          b = v.dirty;
        n.getFieldEntities(!0).forEach(function (m) {
          if (
            (l || s.push(m.getNamePath()),
            !(!m.props.rules || !m.props.rules.length) &&
              !(b && !m.isFieldDirty()))
          ) {
            var g = m.getNamePath();
            if ((d.add(g.join(f)), !l || ea(s, g, h))) {
              var C = m.validateRules(
                z({ validateMessages: z(z({}, hS), n.validateMessages) }, a)
              );
              c.push(
                C.then(function () {
                  return { name: g, errors: [], warnings: [] };
                }).catch(function (E) {
                  var w,
                    x = [],
                    O = [];
                  return (
                    (w = E.forEach) === null ||
                      w === void 0 ||
                      w.call(E, function (P) {
                        var _ = P.rule.warningOnly,
                          M = P.errors;
                        _ ? O.push.apply(O, ae(M)) : x.push.apply(x, ae(M));
                      }),
                    x.length
                      ? Promise.reject({ name: g, errors: x, warnings: O })
                      : { name: g, errors: x, warnings: O }
                  );
                })
              );
            }
          }
        });
        var y = iM(c);
        (n.lastValidatePromise = y),
          y
            .catch(function (m) {
              return m;
            })
            .then(function (m) {
              var g = m.map(function (C) {
                var E = C.name;
                return E;
              });
              n.notifyObservers(n.store, g, { type: 'validateFinish' }),
                n.triggerOnFieldsChange(g, m);
            });
        var S = y
          .then(function () {
            return n.lastValidatePromise === y
              ? Promise.resolve(n.getFieldsValue(s))
              : Promise.reject([]);
          })
          .catch(function (m) {
            var g = m.filter(function (C) {
              return C && C.errors.length;
            });
            return Promise.reject({
              values: n.getFieldsValue(s),
              errorFields: g,
              outOfDate: n.lastValidatePromise !== y,
            });
          });
        S.catch(function (m) {
          return m;
        });
        var p = s.filter(function (m) {
          return d.has(m.join(f));
        });
        return n.triggerOnFieldsChange(p), S;
      }),
      j(this, 'submit', function () {
        n.warningUnhooked(),
          n
            .validateFields()
            .then(function (r) {
              var o = n.callbacks.onFinish;
              if (o)
                try {
                  o(r);
                } catch (i) {
                  console.error(i);
                }
            })
            .catch(function (r) {
              var o = n.callbacks.onFinishFailed;
              o && o(r);
            });
      }),
      (this.forceRootUpdate = t);
  });
function SS(e) {
  var t = u.useRef(),
    n = u.useState({}),
    r = H(n, 2),
    o = r[1];
  if (!t.current)
    if (e) t.current = e;
    else {
      var i = function () {
          o({});
        },
        a = new lM(i);
      t.current = a.getForm();
    }
  return [t.current];
}
var Av = u.createContext({
    triggerFormChange: function () {},
    triggerFormFinish: function () {},
    registerForm: function () {},
    unregisterForm: function () {},
  }),
  sM = function (t) {
    var n = t.validateMessages,
      r = t.onFormChange,
      o = t.onFormFinish,
      i = t.children,
      a = u.useContext(Av),
      l = u.useRef({});
    return u.createElement(
      Av.Provider,
      {
        value: z(
          z({}, a),
          {},
          {
            validateMessages: z(z({}, a.validateMessages), n),
            triggerFormChange: function (c, f) {
              r && r(c, { changedFields: f, forms: l.current }),
                a.triggerFormChange(c, f);
            },
            triggerFormFinish: function (c, f) {
              o && o(c, { values: f, forms: l.current }),
                a.triggerFormFinish(c, f);
            },
            registerForm: function (c, f) {
              c && (l.current = z(z({}, l.current), {}, j({}, c, f))),
                a.registerForm(c, f);
            },
            unregisterForm: function (c) {
              var f = z({}, l.current);
              delete f[c], (l.current = f), a.unregisterForm(c);
            },
          }
        ),
      },
      i
    );
  },
  cM = [
    'name',
    'initialValues',
    'fields',
    'form',
    'preserve',
    'children',
    'component',
    'validateMessages',
    'validateTrigger',
    'onValuesChange',
    'onFieldsChange',
    'onFinish',
    'onFinishFailed',
  ],
  uM = function (t, n) {
    var r = t.name,
      o = t.initialValues,
      i = t.fields,
      a = t.form,
      l = t.preserve,
      s = t.children,
      c = t.component,
      f = c === void 0 ? 'form' : c,
      d = t.validateMessages,
      v = t.validateTrigger,
      h = v === void 0 ? 'onChange' : v,
      b = t.onValuesChange,
      y = t.onFieldsChange,
      S = t.onFinish,
      p = t.onFinishFailed,
      m = Ae(t, cM),
      g = u.useContext(Av),
      C = SS(a),
      E = H(C, 1),
      w = E[0],
      x = w.getInternalHooks(Ho),
      O = x.useSubscribe,
      P = x.setInitialValues,
      _ = x.setCallbacks,
      M = x.setValidateMessages,
      L = x.setPreserve,
      R = x.destroyForm;
    u.useImperativeHandle(n, function () {
      return w;
    }),
      u.useEffect(
        function () {
          return (
            g.registerForm(r, w),
            function () {
              g.unregisterForm(r);
            }
          );
        },
        [g, w, r]
      ),
      M(z(z({}, g.validateMessages), d)),
      _({
        onValuesChange: b,
        onFieldsChange: function (A) {
          if ((g.triggerFormChange(r, A), y)) {
            for (
              var V = arguments.length, U = new Array(V > 1 ? V - 1 : 0), Y = 1;
              Y < V;
              Y++
            )
              U[Y - 1] = arguments[Y];
            y.apply(void 0, [A].concat(U));
          }
        },
        onFinish: function (A) {
          g.triggerFormFinish(r, A), S && S(A);
        },
        onFinishFailed: p,
      }),
      L(l);
    var D = u.useRef(null);
    P(o, !D.current),
      D.current || (D.current = !0),
      u.useEffect(function () {
        return R;
      }, []);
    var B,
      k = typeof s == 'function';
    if (k) {
      var T = w.getFieldsValue(!0);
      B = s(T, w);
    } else B = s;
    O(!k);
    var $ = u.useRef();
    u.useEffect(
      function () {
        tM($.current || [], i || []) || w.setFields(i || []), ($.current = i);
      },
      [i, w]
    );
    var N = u.useMemo(
        function () {
          return z(z({}, w), {}, { validateTrigger: h });
        },
        [w, h]
      ),
      I = u.createElement(
        Hc.Provider,
        { value: null },
        u.createElement(ma.Provider, { value: N }, B)
      );
    return f === !1
      ? I
      : u.createElement(
          f,
          ue({}, m, {
            onSubmit: function (A) {
              A.preventDefault(), A.stopPropagation(), w.submit();
            },
            onReset: function (A) {
              var V;
              A.preventDefault(),
                w.resetFields(),
                (V = m.onReset) === null || V === void 0 || V.call(m, A);
            },
          }),
          I
        );
  };
function d0(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
function fM() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0],
    o = t[1],
    i = o === void 0 ? {} : o,
    a = y_(i) ? { form: i } : i,
    l = a.form,
    s = u.useState(),
    c = H(s, 2),
    f = c[0],
    d = c[1],
    v = u.useMemo(
      function () {
        return d0(f);
      },
      [f]
    ),
    h = u.useRef(v);
  h.current = v;
  var b = u.useContext(ma),
    y = l || b,
    S = y && y._init,
    p = bt(r),
    m = u.useRef(p);
  return (
    (m.current = p),
    u.useEffect(
      function () {
        if (S) {
          var g = y.getFieldsValue,
            C = y.getInternalHooks,
            E = C(Ho),
            w = E.registerWatch,
            x = function (M, L) {
              var R = a.preserve ? L : M;
              return typeof r == 'function' ? r(R) : gr(R, m.current);
            },
            O = w(function (_, M) {
              var L = x(_, M),
                R = d0(L);
              h.current !== R && ((h.current = R), d(L));
            }),
            P = x(g(), g(!0));
          return f !== P && d(P), O;
        }
      },
      [S]
    ),
    f
  );
}
var dM = u.forwardRef(uM),
  Ul = dM;
Ul.FormProvider = sM;
Ul.Field = bS;
Ul.List = oM;
Ul.useForm = SS;
Ul.useWatch = fM;
const v0 = u.createContext({}),
  vM = (e) => {
    let { children: t, status: n, override: r } = e;
    const o = u.useContext(v0),
      i = u.useMemo(() => {
        const a = Object.assign({}, o);
        return (
          r && delete a.isFormItemInput,
          n && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon),
          a
        );
      }, [n, r, o]);
    return u.createElement(v0.Provider, { value: i }, t);
  };
function m0() {}
const mM = u.createContext({ add: m0, remove: m0 });
function pM(e) {
  const t = u.useContext(mM),
    n = u.useRef();
  return $n((o) => {
    if (o) {
      const i = e ? o.querySelector(e) : o;
      t.add(i), (n.current = i);
    } else t.remove(n.current);
  });
}
const gM = () => {
    const {
      cancelButtonProps: e,
      cancelTextLocale: t,
      onCancel: n,
    } = u.useContext(Vl);
    return G.createElement(gp, Object.assign({ onClick: n }, e), t);
  },
  p0 = gM,
  hM = () => {
    const {
      confirmLoading: e,
      okButtonProps: t,
      okType: n,
      okTextLocale: r,
      onOk: o,
    } = u.useContext(Vl);
    return G.createElement(
      gp,
      Object.assign({}, nS(n), { loading: e, onClick: o }, t),
      r
    );
  },
  g0 = hM;
function wS(e, t) {
  return G.createElement(
    'span',
    { className: `${e}-close-x` },
    t || G.createElement(ju, { className: `${e}-close-icon` })
  );
}
const xS = (e) => {
    const {
        okText: t,
        okType: n = 'primary',
        cancelText: r,
        confirmLoading: o,
        onOk: i,
        onCancel: a,
        okButtonProps: l,
        cancelButtonProps: s,
        footer: c,
      } = e,
      [f] = op('Modal', cC()),
      d = t || (f == null ? void 0 : f.okText),
      v = r || (f == null ? void 0 : f.cancelText),
      h = {
        confirmLoading: o,
        okButtonProps: l,
        cancelButtonProps: s,
        okTextLocale: d,
        cancelTextLocale: v,
        okType: n,
        onOk: i,
        onCancel: a,
      },
      b = G.useMemo(() => h, ae(Object.values(h)));
    let y;
    return (
      typeof c == 'function' || typeof c > 'u'
        ? ((y = G.createElement(
            G.Fragment,
            null,
            G.createElement(p0, null),
            G.createElement(g0, null)
          )),
          typeof c == 'function' && (y = c(y, { OkBtn: g0, CancelBtn: p0 })),
          (y = G.createElement(cS, { value: b }, y)))
        : (y = c),
      G.createElement(gC, { disabled: !1 }, y)
    );
  },
  yM = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  bM = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  bp = function (e, t, n, r) {
    const i = (
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
    )
      ? '&'
      : '';
    return {
      [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, yM(r)), {
        animationPlayState: 'paused',
      }),
      [`${i}${e}-leave`]: Object.assign(Object.assign({}, bM(r)), {
        animationPlayState: 'paused',
      }),
      [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
      [`${i}${e}-leave${e}-leave-active`]: {
        animationName: n,
        animationPlayState: 'running',
        pointerEvents: 'none',
      },
    };
  },
  CM = new st('antFadeIn', { '0%': { opacity: 0 }, '100%': { opacity: 1 } }),
  SM = new st('antFadeOut', { '0%': { opacity: 1 }, '100%': { opacity: 0 } }),
  wM = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const { antCls: n } = e,
      r = `${n}-fade`,
      o = t ? '&' : '';
    return [
      bp(r, CM, SM, e.motionDurationMid, t),
      {
        [`
        ${o}${r}-enter,
        ${o}${r}-appear
      `]: { opacity: 0, animationTimingFunction: 'linear' },
        [`${o}${r}-leave`]: { animationTimingFunction: 'linear' },
      },
    ];
  },
  xM = new st('antSlideUpIn', {
    '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  EM = new st('antSlideUpOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  $M = new st('antSlideDownIn', {
    '0%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
    '100%': {
      transform: 'scaleY(1)',
      transformOrigin: '100% 100%',
      opacity: 1,
    },
  }),
  OM = new st('antSlideDownOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    '100%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
  }),
  PM = new st('antSlideLeftIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  RM = new st('antSlideLeftOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  TM = new st('antSlideRightIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
  }),
  _M = new st('antSlideRightOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    '100%': {
      transform: 'scaleX(0.8)',
      transformOrigin: '100% 0%',
      opacity: 0,
    },
  }),
  MM = {
    'slide-up': { inKeyframes: xM, outKeyframes: EM },
    'slide-down': { inKeyframes: $M, outKeyframes: OM },
    'slide-left': { inKeyframes: PM, outKeyframes: RM },
    'slide-right': { inKeyframes: TM, outKeyframes: _M },
  },
  h0 = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: o, outKeyframes: i } = MM[t];
    return [
      bp(r, o, i, e.motionDurationMid),
      {
        [`
      ${r}-enter,
      ${r}-appear
    `]: {
          transform: 'scale(0)',
          transformOrigin: '0% 0%',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutQuint,
          '&-prepare': { transform: 'scale(1)' },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
      },
    ];
  },
  IM = new st('antZoomIn', {
    '0%': { transform: 'scale(0.2)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  kM = new st('antZoomOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.2)', opacity: 0 },
  }),
  y0 = new st('antZoomBigIn', {
    '0%': { transform: 'scale(0.8)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  b0 = new st('antZoomBigOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.8)', opacity: 0 },
  }),
  NM = new st('antZoomUpIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
  }),
  jM = new st('antZoomUpOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
  }),
  LM = new st('antZoomLeftIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
  }),
  FM = new st('antZoomLeftOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
  }),
  AM = new st('antZoomRightIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
  }),
  zM = new st('antZoomRightOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '100% 50%',
      opacity: 0,
    },
  }),
  DM = new st('antZoomDownIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
  }),
  BM = new st('antZoomDownOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '50% 100%',
      opacity: 0,
    },
  }),
  HM = {
    zoom: { inKeyframes: IM, outKeyframes: kM },
    'zoom-big': { inKeyframes: y0, outKeyframes: b0 },
    'zoom-big-fast': { inKeyframes: y0, outKeyframes: b0 },
    'zoom-left': { inKeyframes: LM, outKeyframes: FM },
    'zoom-right': { inKeyframes: AM, outKeyframes: zM },
    'zoom-up': { inKeyframes: NM, outKeyframes: jM },
    'zoom-down': { inKeyframes: DM, outKeyframes: BM },
  },
  Cp = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: o, outKeyframes: i } = HM[t];
    return [
      bp(
        r,
        o,
        i,
        t === 'zoom-big-fast' ? e.motionDurationFast : e.motionDurationMid
      ),
      {
        [`
        ${r}-enter,
        ${r}-appear
      `]: {
          transform: 'scale(0)',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
          '&-prepare': { transform: 'none' },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ];
  };
function C0(e) {
  return { position: e, inset: 0 };
}
const VM = (e) => {
    const { componentCls: t, antCls: n } = e;
    return [
      {
        [`${t}-root`]: {
          [`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]: {
            transform: 'none',
            opacity: 0,
            animationDuration: e.motionDurationSlow,
            userSelect: 'none',
          },
          [`${t}${n}-zoom-leave ${t}-content`]: { pointerEvents: 'none' },
          [`${t}-mask`]: Object.assign(Object.assign({}, C0('fixed')), {
            zIndex: e.zIndexPopupBase,
            height: '100%',
            backgroundColor: e.colorBgMask,
            pointerEvents: 'none',
            [`${t}-hidden`]: { display: 'none' },
          }),
          [`${t}-wrap`]: Object.assign(Object.assign({}, C0('fixed')), {
            zIndex: e.zIndexPopupBase,
            overflow: 'auto',
            outline: 0,
            WebkitOverflowScrolling: 'touch',
          }),
        },
      },
      { [`${t}-root`]: wM(e) },
    ];
  },
  WM = (e) => {
    const { componentCls: t } = e;
    return [
      {
        [`${t}-root`]: {
          [`${t}-wrap-rtl`]: { direction: 'rtl' },
          [`${t}-centered`]: {
            textAlign: 'center',
            '&::before': {
              display: 'inline-block',
              width: 0,
              height: '100%',
              verticalAlign: 'middle',
              content: '""',
            },
            [t]: {
              top: 0,
              display: 'inline-block',
              paddingBottom: 0,
              textAlign: 'start',
              verticalAlign: 'middle',
            },
          },
          [`@media (max-width: ${e.screenSMMax}px)`]: {
            [t]: {
              maxWidth: 'calc(100vw - 16px)',
              margin: `${K(e.marginXS)} auto`,
            },
            [`${t}-centered`]: { [t]: { flex: 1 } },
          },
        },
      },
      {
        [t]: Object.assign(Object.assign({}, vi(e)), {
          pointerEvents: 'none',
          position: 'relative',
          top: 100,
          width: 'auto',
          maxWidth: `calc(100vw - ${K(e.calc(e.margin).mul(2).equal())})`,
          margin: '0 auto',
          paddingBottom: e.paddingLG,
          [`${t}-title`]: {
            margin: 0,
            color: e.titleColor,
            fontWeight: e.fontWeightStrong,
            fontSize: e.titleFontSize,
            lineHeight: e.titleLineHeight,
            wordWrap: 'break-word',
          },
          [`${t}-content`]: {
            position: 'relative',
            backgroundColor: e.contentBg,
            backgroundClip: 'padding-box',
            border: 0,
            borderRadius: e.borderRadiusLG,
            boxShadow: e.boxShadow,
            pointerEvents: 'auto',
            padding: e.contentPadding,
          },
          [`${t}-close`]: Object.assign(
            {
              position: 'absolute',
              top: e
                .calc(e.modalHeaderHeight)
                .sub(e.modalCloseBtnSize)
                .div(2)
                .equal(),
              insetInlineEnd: e
                .calc(e.modalHeaderHeight)
                .sub(e.modalCloseBtnSize)
                .div(2)
                .equal(),
              zIndex: e.calc(e.zIndexPopupBase).add(10).equal(),
              padding: 0,
              color: e.modalCloseIconColor,
              fontWeight: e.fontWeightStrong,
              lineHeight: 1,
              textDecoration: 'none',
              background: 'transparent',
              borderRadius: e.borderRadiusSM,
              width: e.modalCloseBtnSize,
              height: e.modalCloseBtnSize,
              border: 0,
              outline: 0,
              cursor: 'pointer',
              transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
              '&-x': {
                display: 'flex',
                fontSize: e.fontSizeLG,
                fontStyle: 'normal',
                lineHeight: `${K(e.modalCloseBtnSize)}`,
                justifyContent: 'center',
                textTransform: 'none',
                textRendering: 'auto',
              },
              '&:hover': {
                color: e.modalCloseIconHoverColor,
                backgroundColor: e.colorBgTextHover,
                textDecoration: 'none',
              },
              '&:active': { backgroundColor: e.colorBgTextActive },
            },
            Iu(e)
          ),
          [`${t}-header`]: {
            color: e.colorText,
            background: e.headerBg,
            borderRadius: `${K(e.borderRadiusLG)} ${K(e.borderRadiusLG)} 0 0`,
            marginBottom: e.headerMarginBottom,
            padding: e.headerPadding,
            borderBottom: e.headerBorderBottom,
          },
          [`${t}-body`]: {
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            wordWrap: 'break-word',
            padding: e.bodyPadding,
          },
          [`${t}-footer`]: {
            textAlign: 'end',
            background: e.footerBg,
            marginTop: e.footerMarginTop,
            padding: e.footerPadding,
            borderTop: e.footerBorderTop,
            borderRadius: e.footerBorderRadius,
            [`> ${e.antCls}-btn + ${e.antCls}-btn`]: {
              marginInlineStart: e.marginXS,
            },
          },
          [`${t}-open`]: { overflow: 'hidden' },
        }),
      },
      {
        [`${t}-pure-panel`]: {
          top: 'auto',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
            display: 'flex',
            flexDirection: 'column',
            flex: 'auto',
          },
          [`${t}-confirm-body`]: { marginBottom: 'auto' },
        },
      },
    ];
  },
  UM = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-root`]: {
        [`${t}-wrap-rtl`]: {
          direction: 'rtl',
          [`${t}-confirm-body`]: { direction: 'rtl' },
        },
      },
    };
  },
  ES = (e) => {
    const t = e.padding,
      n = e.fontSizeHeading5,
      r = e.lineHeightHeading5;
    return bn(e, {
      modalHeaderHeight: e
        .calc(e.calc(r).mul(n).equal())
        .add(e.calc(t).mul(2).equal())
        .equal(),
      modalFooterBorderColorSplit: e.colorSplit,
      modalFooterBorderStyle: e.lineType,
      modalFooterBorderWidth: e.lineWidth,
      modalCloseIconColor: e.colorIcon,
      modalCloseIconHoverColor: e.colorIconHover,
      modalCloseBtnSize: e.controlHeight,
      modalConfirmIconSize: e.fontHeight,
      modalTitleHeight: e.calc(e.titleFontSize).mul(e.titleLineHeight).equal(),
    });
  },
  $S = (e) => ({
    footerBg: 'transparent',
    headerBg: e.colorBgElevated,
    titleLineHeight: e.lineHeightHeading5,
    titleFontSize: e.fontSizeHeading5,
    contentBg: e.colorBgElevated,
    titleColor: e.colorTextHeading,
    contentPadding: e.wireframe
      ? 0
      : `${K(e.paddingMD)} ${K(e.paddingContentHorizontalLG)}`,
    headerPadding: e.wireframe ? `${K(e.padding)} ${K(e.paddingLG)}` : 0,
    headerBorderBottom: e.wireframe
      ? `${K(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
      : 'none',
    headerMarginBottom: e.wireframe ? 0 : e.marginXS,
    bodyPadding: e.wireframe ? e.paddingLG : 0,
    footerPadding: e.wireframe ? `${K(e.paddingXS)} ${K(e.padding)}` : 0,
    footerBorderTop: e.wireframe
      ? `${K(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
      : 'none',
    footerBorderRadius: e.wireframe
      ? `0 0 ${K(e.borderRadiusLG)} ${K(e.borderRadiusLG)}`
      : 0,
    footerMarginTop: e.wireframe ? 0 : e.marginSM,
    confirmBodyPadding: e.wireframe
      ? `${K(e.padding * 2)} ${K(e.padding * 2)} ${K(e.paddingLG)}`
      : 0,
    confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
    confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM,
  }),
  OS = Oo(
    'Modal',
    (e) => {
      const t = ES(e);
      return [WM(t), UM(t), VM(t), Cp(t, 'zoom')];
    },
    $S,
    { unitless: { titleLineHeight: !0 } }
  );
var KM = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
let zv;
const GM = (e) => {
  (zv = { x: e.pageX, y: e.pageY }),
    setTimeout(() => {
      zv = null;
    }, 100);
};
h_() && document.documentElement.addEventListener('click', GM, !0);
const qM = (e) => {
    var t;
    const {
        getPopupContainer: n,
        getPrefixCls: r,
        direction: o,
        modal: i,
      } = u.useContext(Ge),
      a = (A) => {
        const { onCancel: V } = e;
        V == null || V(A);
      },
      l = (A) => {
        const { onOk: V } = e;
        V == null || V(A);
      },
      {
        prefixCls: s,
        className: c,
        rootClassName: f,
        open: d,
        wrapClassName: v,
        centered: h,
        getContainer: b,
        closeIcon: y,
        closable: S,
        focusTriggerAfterClose: p = !0,
        style: m,
        visible: g,
        width: C = 520,
        footer: E,
        classNames: w,
        styles: x,
      } = e,
      O = KM(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'open',
        'wrapClassName',
        'centered',
        'getContainer',
        'closeIcon',
        'closable',
        'focusTriggerAfterClose',
        'style',
        'visible',
        'width',
        'footer',
        'classNames',
        'styles',
      ]),
      P = r('modal', s),
      _ = r(),
      M = Bl(P),
      [L, R, D] = OS(P, M),
      B = q(v, { [`${P}-centered`]: !!h, [`${P}-wrap-rtl`]: o === 'rtl' }),
      k =
        E !== null &&
        u.createElement(xS, Object.assign({}, e, { onOk: l, onCancel: a })),
      [T, $] = g_({
        closable: S,
        closeIcon: typeof y < 'u' ? y : i == null ? void 0 : i.closeIcon,
        customCloseIconRender: (A) => wS(P, A),
        defaultCloseIcon: u.createElement(ju, { className: `${P}-close-icon` }),
        defaultClosable: !0,
      }),
      N = pM(`.${P}-content`),
      [I, F] = XC('Modal', O.zIndex);
    return L(
      u.createElement(
        eS,
        null,
        u.createElement(
          vM,
          { status: !0, override: !0 },
          u.createElement(
            fp.Provider,
            { value: F },
            u.createElement(
              pS,
              Object.assign({ width: C }, O, {
                zIndex: I,
                getContainer: b === void 0 ? n : b,
                prefixCls: P,
                rootClassName: q(R, f, D, M),
                footer: k,
                visible: d ?? g,
                mousePosition:
                  (t = O.mousePosition) !== null && t !== void 0 ? t : zv,
                onClose: a,
                closable: T,
                closeIcon: $,
                focusTriggerAfterClose: p,
                transitionName: ai(_, 'zoom', e.transitionName),
                maskTransitionName: ai(_, 'fade', e.maskTransitionName),
                className: q(R, c, i == null ? void 0 : i.className),
                style: Object.assign(
                  Object.assign({}, i == null ? void 0 : i.style),
                  m
                ),
                classNames: Object.assign(
                  Object.assign(
                    Object.assign({}, i == null ? void 0 : i.classNames),
                    w
                  ),
                  { wrapper: q(B, w == null ? void 0 : w.wrapper) }
                ),
                styles: Object.assign(
                  Object.assign({}, i == null ? void 0 : i.styles),
                  x
                ),
                panelRef: N,
              })
            )
          )
        )
      )
    );
  },
  PS = qM,
  XM = (e) => {
    const {
        componentCls: t,
        titleFontSize: n,
        titleLineHeight: r,
        modalConfirmIconSize: o,
        fontSize: i,
        lineHeight: a,
        modalTitleHeight: l,
        fontHeight: s,
        confirmBodyPadding: c,
      } = e,
      f = `${t}-confirm`;
    return {
      [f]: {
        '&-rtl': { direction: 'rtl' },
        [`${e.antCls}-modal-header`]: { display: 'none' },
        [`${f}-body-wrapper`]: Object.assign({}, Dl()),
        [`&${t} ${t}-body`]: { padding: c },
        [`${f}-body`]: {
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'start',
          [`> ${e.iconCls}`]: {
            flex: 'none',
            fontSize: o,
            marginInlineEnd: e.confirmIconMarginInlineEnd,
            marginTop: e.calc(e.calc(s).sub(o).equal()).div(2).equal(),
          },
          [`&-has-title > ${e.iconCls}`]: {
            marginTop: e.calc(e.calc(l).sub(o).equal()).div(2).equal(),
          },
        },
        [`${f}-paragraph`]: {
          display: 'flex',
          flexDirection: 'column',
          flex: 'auto',
          rowGap: e.marginXS,
          maxWidth: `calc(100% - ${K(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`,
        },
        [`${f}-title`]: {
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: n,
          lineHeight: r,
        },
        [`${f}-content`]: { color: e.colorText, fontSize: i, lineHeight: a },
        [`${f}-btns`]: {
          textAlign: 'end',
          marginTop: e.confirmBtnsMarginTop,
          [`${e.antCls}-btn + ${e.antCls}-btn`]: {
            marginBottom: 0,
            marginInlineStart: e.marginXS,
          },
        },
      },
      [`${f}-error ${f}-body > ${e.iconCls}`]: { color: e.colorError },
      [`${f}-warning ${f}-body > ${e.iconCls},
        ${f}-confirm ${f}-body > ${e.iconCls}`]: { color: e.colorWarning },
      [`${f}-info ${f}-body > ${e.iconCls}`]: { color: e.colorInfo },
      [`${f}-success ${f}-body > ${e.iconCls}`]: { color: e.colorSuccess },
    };
  },
  QM = RC(
    ['Modal', 'confirm'],
    (e) => {
      const t = ES(e);
      return [XM(t)];
    },
    $S,
    { order: -1e3 }
  );
var YM = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function RS(e) {
  const {
      prefixCls: t,
      icon: n,
      okText: r,
      cancelText: o,
      confirmPrefixCls: i,
      type: a,
      okCancel: l,
      footer: s,
      locale: c,
    } = e,
    f = YM(e, [
      'prefixCls',
      'icon',
      'okText',
      'cancelText',
      'confirmPrefixCls',
      'type',
      'okCancel',
      'footer',
      'locale',
    ]);
  let d = n;
  if (!n && n !== null)
    switch (a) {
      case 'info':
        d = u.createElement(FT, null);
        break;
      case 'success':
        d = u.createElement(wT, null);
        break;
      case 'error':
        d = u.createElement(OT, null);
        break;
      default:
        d = u.createElement(kT, null);
    }
  const v = l ?? a === 'confirm',
    h = e.autoFocusButton === null ? !1 : e.autoFocusButton || 'ok',
    [b] = op('Modal'),
    y = c || b,
    S =
      r ||
      (v ? (y == null ? void 0 : y.okText) : y == null ? void 0 : y.justOkText),
    p = o || (y == null ? void 0 : y.cancelText),
    m = Object.assign(
      {
        autoFocusButton: h,
        cancelTextLocale: p,
        okTextLocale: S,
        mergedOkCancel: v,
      },
      f
    ),
    g = u.useMemo(() => m, ae(Object.values(m))),
    C = u.createElement(
      u.Fragment,
      null,
      u.createElement(Uh, null),
      u.createElement(Kh, null)
    ),
    E = e.title !== void 0 && e.title !== null,
    w = `${i}-body`;
  return u.createElement(
    'div',
    { className: `${i}-body-wrapper` },
    u.createElement(
      'div',
      { className: q(w, { [`${w}-has-title`]: E }) },
      d,
      u.createElement(
        'div',
        { className: `${i}-paragraph` },
        E && u.createElement('span', { className: `${i}-title` }, e.title),
        u.createElement('div', { className: `${i}-content` }, e.content)
      )
    ),
    s === void 0 || typeof s == 'function'
      ? u.createElement(
          cS,
          { value: g },
          u.createElement(
            'div',
            { className: `${i}-btns` },
            typeof s == 'function' ? s(C, { OkBtn: Kh, CancelBtn: Uh }) : C
          )
        )
      : s,
    u.createElement(QM, { prefixCls: t })
  );
}
const ZM = (e) => {
    const {
        close: t,
        zIndex: n,
        afterClose: r,
        open: o,
        keyboard: i,
        centered: a,
        getContainer: l,
        maskStyle: s,
        direction: c,
        prefixCls: f,
        wrapClassName: d,
        rootPrefixCls: v,
        bodyStyle: h,
        closable: b = !1,
        closeIcon: y,
        modalRender: S,
        focusTriggerAfterClose: p,
        onConfirm: m,
        styles: g,
      } = e,
      C = `${f}-confirm`,
      E = e.width || 416,
      w = e.style || {},
      x = e.mask === void 0 ? !0 : e.mask,
      O = e.maskClosable === void 0 ? !1 : e.maskClosable,
      P = q(C, `${C}-${e.type}`, { [`${C}-rtl`]: c === 'rtl' }, e.className),
      [, _] = Un(),
      M = u.useMemo(() => (n !== void 0 ? n : _.zIndexPopupBase + GC), [n, _]);
    return u.createElement(
      PS,
      {
        prefixCls: f,
        className: P,
        wrapClassName: q({ [`${C}-centered`]: !!e.centered }, d),
        onCancel: () => {
          t == null || t({ triggerCancel: !0 }), m == null || m(!1);
        },
        open: o,
        title: '',
        footer: null,
        transitionName: ai(v || '', 'zoom', e.transitionName),
        maskTransitionName: ai(v || '', 'fade', e.maskTransitionName),
        mask: x,
        maskClosable: O,
        style: w,
        styles: Object.assign({ body: h, mask: s }, g),
        width: E,
        zIndex: M,
        afterClose: r,
        keyboard: i,
        centered: a,
        getContainer: l,
        closable: b,
        closeIcon: y,
        modalRender: S,
        focusTriggerAfterClose: p,
      },
      u.createElement(RS, Object.assign({}, e, { confirmPrefixCls: C }))
    );
  },
  JM = (e) => {
    const { rootPrefixCls: t, iconPrefixCls: n, direction: r, theme: o } = e;
    return u.createElement(
      Po,
      { prefixCls: t, iconPrefixCls: n, direction: r, theme: o },
      u.createElement(ZM, Object.assign({}, e))
    );
  },
  TS = JM,
  Wo = [];
let _S = '';
function MS() {
  return _S;
}
const e3 = (e) => {
  var t, n;
  const { prefixCls: r, getContainer: o, direction: i } = e,
    a = cC(),
    l = u.useContext(Ge),
    s = MS() || l.getPrefixCls(),
    c = r || `${s}-modal`;
  let f = o;
  return (
    f === !1 && (f = void 0),
    G.createElement(
      TS,
      Object.assign({}, e, {
        rootPrefixCls: s,
        prefixCls: c,
        iconPrefixCls: l.iconPrefixCls,
        theme: l.theme,
        direction: i ?? l.direction,
        locale:
          (n = (t = l.locale) === null || t === void 0 ? void 0 : t.Modal) !==
            null && n !== void 0
            ? n
            : a,
        getContainer: f,
      })
    )
  );
};
function Kl(e) {
  const t = lT(),
    n = document.createDocumentFragment();
  let r = Object.assign(Object.assign({}, e), { close: l, open: !0 }),
    o;
  function i() {
    for (var c = arguments.length, f = new Array(c), d = 0; d < c; d++)
      f[d] = arguments[d];
    const v = f.some((h) => h && h.triggerCancel);
    e.onCancel && v && e.onCancel.apply(e, [() => {}].concat(ae(f.slice(1))));
    for (let h = 0; h < Wo.length; h++)
      if (Wo[h] === l) {
        Wo.splice(h, 1);
        break;
      }
    YC(n);
  }
  function a(c) {
    clearTimeout(o),
      (o = setTimeout(() => {
        const f = t.getPrefixCls(void 0, MS()),
          d = t.getIconPrefixCls(),
          v = t.getTheme(),
          h = G.createElement(e3, Object.assign({}, c));
        QC(
          G.createElement(
            Po,
            { prefixCls: f, iconPrefixCls: d, theme: v },
            t.holderRender ? t.holderRender(h) : h
          ),
          n
        );
      }));
  }
  function l() {
    for (var c = arguments.length, f = new Array(c), d = 0; d < c; d++)
      f[d] = arguments[d];
    (r = Object.assign(Object.assign({}, r), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == 'function' && e.afterClose(), i.apply(this, f);
      },
    })),
      r.visible && delete r.visible,
      a(r);
  }
  function s(c) {
    typeof c == 'function'
      ? (r = c(r))
      : (r = Object.assign(Object.assign({}, r), c)),
      a(r);
  }
  return a(r), Wo.push(l), { destroy: l, update: s };
}
function IS(e) {
  return Object.assign(Object.assign({}, e), { type: 'warning' });
}
function kS(e) {
  return Object.assign(Object.assign({}, e), { type: 'info' });
}
function NS(e) {
  return Object.assign(Object.assign({}, e), { type: 'success' });
}
function jS(e) {
  return Object.assign(Object.assign({}, e), { type: 'error' });
}
function LS(e) {
  return Object.assign(Object.assign({}, e), { type: 'confirm' });
}
function t3(e) {
  let { rootPrefixCls: t } = e;
  _S = t;
}
var n3 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const r3 = (e, t) => {
    var n,
      { afterClose: r, config: o } = e,
      i = n3(e, ['afterClose', 'config']);
    const [a, l] = u.useState(!0),
      [s, c] = u.useState(o),
      { direction: f, getPrefixCls: d } = u.useContext(Ge),
      v = d('modal'),
      h = d(),
      b = () => {
        var m;
        r(), (m = s.afterClose) === null || m === void 0 || m.call(s);
      },
      y = function () {
        l(!1);
        for (var m = arguments.length, g = new Array(m), C = 0; C < m; C++)
          g[C] = arguments[C];
        const E = g.some((w) => w && w.triggerCancel);
        s.onCancel &&
          E &&
          s.onCancel.apply(s, [() => {}].concat(ae(g.slice(1))));
      };
    u.useImperativeHandle(t, () => ({
      destroy: y,
      update: (m) => {
        c((g) => Object.assign(Object.assign({}, g), m));
      },
    }));
    const S =
        (n = s.okCancel) !== null && n !== void 0 ? n : s.type === 'confirm',
      [p] = op('Modal', oi.Modal);
    return u.createElement(
      TS,
      Object.assign(
        { prefixCls: v, rootPrefixCls: h },
        s,
        {
          close: y,
          open: a,
          afterClose: b,
          okText:
            s.okText ||
            (S
              ? p == null
                ? void 0
                : p.okText
              : p == null
                ? void 0
                : p.justOkText),
          direction: s.direction || f,
          cancelText: s.cancelText || (p == null ? void 0 : p.cancelText),
        },
        i
      )
    );
  },
  o3 = u.forwardRef(r3);
let S0 = 0;
const i3 = u.memo(
  u.forwardRef((e, t) => {
    const [n, r] = ZT();
    return (
      u.useImperativeHandle(t, () => ({ patchElement: r }), []),
      u.createElement(u.Fragment, null, n)
    );
  })
);
function a3() {
  const e = u.useRef(null),
    [t, n] = u.useState([]);
  u.useEffect(() => {
    t.length &&
      (ae(t).forEach((a) => {
        a();
      }),
      n([]));
  }, [t]);
  const r = u.useCallback(
    (i) =>
      function (l) {
        var s;
        S0 += 1;
        const c = u.createRef();
        let f;
        const d = new Promise((S) => {
          f = S;
        });
        let v = !1,
          h;
        const b = u.createElement(o3, {
          key: `modal-${S0}`,
          config: i(l),
          ref: c,
          afterClose: () => {
            h == null || h();
          },
          isSilent: () => v,
          onConfirm: (S) => {
            f(S);
          },
        });
        return (
          (h =
            (s = e.current) === null || s === void 0
              ? void 0
              : s.patchElement(b)),
          h && Wo.push(h),
          {
            destroy: () => {
              function S() {
                var p;
                (p = c.current) === null || p === void 0 || p.destroy();
              }
              c.current ? S() : n((p) => [].concat(ae(p), [S]));
            },
            update: (S) => {
              function p() {
                var m;
                (m = c.current) === null || m === void 0 || m.update(S);
              }
              c.current ? p() : n((m) => [].concat(ae(m), [p]));
            },
            then: (S) => ((v = !0), d.then(S)),
          }
        );
      },
    []
  );
  return [
    u.useMemo(
      () => ({
        info: r(kS),
        success: r(NS),
        error: r(jS),
        warning: r(IS),
        confirm: r(LS),
      }),
      []
    ),
    u.createElement(i3, { key: 'modal-holder', ref: e }),
  ];
}
function l3(e) {
  return (t) =>
    u.createElement(
      Po,
      { theme: { token: { motion: !1, zIndexPopupBase: 0 } } },
      u.createElement(e, Object.assign({}, t))
    );
}
const FS = function () {
  if (typeof navigator > 'u' || typeof window > 'u') return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      e
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
      e == null ? void 0 : e.substr(0, 4)
    )
  );
};
var s3 = [
    'prefixCls',
    'invalidate',
    'item',
    'renderItem',
    'responsive',
    'responsiveDisabled',
    'registerSize',
    'itemKey',
    'className',
    'style',
    'children',
    'display',
    'order',
    'component',
  ],
  Ei = void 0;
function c3(e, t) {
  var n = e.prefixCls,
    r = e.invalidate,
    o = e.item,
    i = e.renderItem,
    a = e.responsive,
    l = e.responsiveDisabled,
    s = e.registerSize,
    c = e.itemKey,
    f = e.className,
    d = e.style,
    v = e.children,
    h = e.display,
    b = e.order,
    y = e.component,
    S = y === void 0 ? 'div' : y,
    p = Ae(e, s3),
    m = a && !h;
  function g(O) {
    s(c, O);
  }
  u.useEffect(function () {
    return function () {
      g(null);
    };
  }, []);
  var C = i && o !== Ei ? i(o) : v,
    E;
  r ||
    (E = {
      opacity: m ? 0 : 1,
      height: m ? 0 : Ei,
      overflowY: m ? 'hidden' : Ei,
      order: a ? b : Ei,
      pointerEvents: m ? 'none' : Ei,
      position: m ? 'absolute' : Ei,
    });
  var w = {};
  m && (w['aria-hidden'] = !0);
  var x = u.createElement(
    S,
    ue({ className: q(!r && n, f), style: z(z({}, E), d) }, w, p, { ref: t }),
    C
  );
  return (
    a &&
      (x = u.createElement(
        Nr,
        {
          onResize: function (P) {
            var _ = P.offsetWidth;
            g(_);
          },
          disabled: l,
        },
        x
      )),
    x
  );
}
var sl = u.forwardRef(c3);
sl.displayName = 'Item';
function u3(e) {
  if (typeof MessageChannel > 'u') Zt(e);
  else {
    var t = new MessageChannel();
    (t.port1.onmessage = function () {
      return e();
    }),
      t.port2.postMessage(void 0);
  }
}
function f3() {
  var e = u.useRef(null),
    t = function (r) {
      e.current ||
        ((e.current = []),
        u3(function () {
          ya.unstable_batchedUpdates(function () {
            e.current.forEach(function (o) {
              o();
            }),
              (e.current = null);
          });
        })),
        e.current.push(r);
    };
  return t;
}
function Aa(e, t) {
  var n = u.useState(t),
    r = H(n, 2),
    o = r[0],
    i = r[1],
    a = $n(function (l) {
      e(function () {
        i(l);
      });
    });
  return [o, a];
}
var Vc = G.createContext(null),
  d3 = ['component'],
  v3 = ['className'],
  m3 = ['className'],
  p3 = function (t, n) {
    var r = u.useContext(Vc);
    if (!r) {
      var o = t.component,
        i = o === void 0 ? 'div' : o,
        a = Ae(t, d3);
      return u.createElement(i, ue({}, a, { ref: n }));
    }
    var l = r.className,
      s = Ae(r, v3),
      c = t.className,
      f = Ae(t, m3);
    return u.createElement(
      Vc.Provider,
      { value: null },
      u.createElement(sl, ue({ ref: n, className: q(l, c) }, s, f))
    );
  },
  AS = u.forwardRef(p3);
AS.displayName = 'RawItem';
var g3 = [
    'prefixCls',
    'data',
    'renderItem',
    'renderRawItem',
    'itemKey',
    'itemWidth',
    'ssr',
    'style',
    'className',
    'maxCount',
    'renderRest',
    'renderRawRest',
    'suffix',
    'component',
    'itemComponent',
    'onVisibleChange',
  ],
  zS = 'responsive',
  DS = 'invalidate';
function h3(e) {
  return '+ '.concat(e.length, ' ...');
}
function y3(e, t) {
  var n = e.prefixCls,
    r = n === void 0 ? 'rc-overflow' : n,
    o = e.data,
    i = o === void 0 ? [] : o,
    a = e.renderItem,
    l = e.renderRawItem,
    s = e.itemKey,
    c = e.itemWidth,
    f = c === void 0 ? 10 : c,
    d = e.ssr,
    v = e.style,
    h = e.className,
    b = e.maxCount,
    y = e.renderRest,
    S = e.renderRawRest,
    p = e.suffix,
    m = e.component,
    g = m === void 0 ? 'div' : m,
    C = e.itemComponent,
    E = e.onVisibleChange,
    w = Ae(e, g3),
    x = d === 'full',
    O = f3(),
    P = Aa(O, null),
    _ = H(P, 2),
    M = _[0],
    L = _[1],
    R = M || 0,
    D = Aa(O, new Map()),
    B = H(D, 2),
    k = B[0],
    T = B[1],
    $ = Aa(O, 0),
    N = H($, 2),
    I = N[0],
    F = N[1],
    A = Aa(O, 0),
    V = H(A, 2),
    U = V[0],
    Y = V[1],
    te = Aa(O, 0),
    J = H(te, 2),
    Q = J[0],
    ee = J[1],
    se = u.useState(null),
    pe = H(se, 2),
    Le = pe[0],
    he = pe[1],
    Ce = u.useState(null),
    ce = H(Ce, 2),
    Pe = ce[0],
    $e = ce[1],
    ve = u.useMemo(
      function () {
        return Pe === null && x ? Number.MAX_SAFE_INTEGER : Pe || 0;
      },
      [Pe, M]
    ),
    Z = u.useState(!1),
    fe = H(Z, 2),
    ge = fe[0],
    Se = fe[1],
    de = ''.concat(r, '-item'),
    ze = Math.max(I, U),
    qe = b === zS,
    xe = i.length && qe,
    Ut = b === DS,
    pt = xe || (typeof b == 'number' && i.length > b),
    Te = u.useMemo(
      function () {
        var ne = i;
        return (
          xe
            ? M === null && x
              ? (ne = i)
              : (ne = i.slice(0, Math.min(i.length, R / f)))
            : typeof b == 'number' && (ne = i.slice(0, b)),
          ne
        );
      },
      [i, f, M, b, xe]
    ),
    Ie = u.useMemo(
      function () {
        return xe ? i.slice(ve + 1) : i.slice(Te.length);
      },
      [i, Te, xe, ve]
    ),
    We = u.useCallback(
      function (ne, le) {
        var Oe;
        return typeof s == 'function'
          ? s(ne)
          : (Oe = s && (ne == null ? void 0 : ne[s])) !== null && Oe !== void 0
            ? Oe
            : le;
      },
      [s]
    ),
    Mt = u.useCallback(
      a ||
        function (ne) {
          return ne;
        },
      [a]
    );
  function St(ne, le, Oe) {
    (Pe === ne && (le === void 0 || le === Le)) ||
      ($e(ne),
      Oe || (Se(ne < i.length - 1), E == null || E(ne)),
      le !== void 0 && he(le));
  }
  function et(ne, le) {
    L(le.clientWidth);
  }
  function Qe(ne, le) {
    T(function (Oe) {
      var Fe = new Map(Oe);
      return le === null ? Fe.delete(ne) : Fe.set(ne, le), Fe;
    });
  }
  function tt(ne, le) {
    Y(le), F(U);
  }
  function nt(ne, le) {
    ee(le);
  }
  function Lt(ne) {
    return k.get(We(Te[ne], ne));
  }
  Bt(
    function () {
      if (R && typeof ze == 'number' && Te) {
        var ne = Q,
          le = Te.length,
          Oe = le - 1;
        if (!le) {
          St(0, null);
          return;
        }
        for (var Fe = 0; Fe < le; Fe += 1) {
          var xt = Lt(Fe);
          if ((x && (xt = xt || 0), xt === void 0)) {
            St(Fe - 1, void 0, !0);
            break;
          }
          if (
            ((ne += xt),
            (Oe === 0 && ne <= R) || (Fe === Oe - 1 && ne + Lt(Oe) <= R))
          ) {
            St(Oe, null);
            break;
          } else if (ne + ze > R) {
            St(Fe - 1, ne - xt - Q + U);
            break;
          }
        }
        p && Lt(0) + Q > R && he(null);
      }
    },
    [R, k, U, Q, We, Te]
  );
  var ct = ge && !!Ie.length,
    Xe = {};
  Le !== null && xe && (Xe = { position: 'absolute', left: Le, top: 0 });
  var gt = { prefixCls: de, responsive: xe, component: C, invalidate: Ut },
    wt = l
      ? function (ne, le) {
          var Oe = We(ne, le);
          return u.createElement(
            Vc.Provider,
            {
              key: Oe,
              value: z(
                z({}, gt),
                {},
                {
                  order: le,
                  item: ne,
                  itemKey: Oe,
                  registerSize: Qe,
                  display: le <= ve,
                }
              ),
            },
            l(ne, le)
          );
        }
      : function (ne, le) {
          var Oe = We(ne, le);
          return u.createElement(
            sl,
            ue({}, gt, {
              order: le,
              key: Oe,
              item: ne,
              renderItem: Mt,
              itemKey: Oe,
              registerSize: Qe,
              display: le <= ve,
            })
          );
        },
    ht,
    ye = {
      order: ct ? ve : Number.MAX_SAFE_INTEGER,
      className: ''.concat(de, '-rest'),
      registerSize: tt,
      display: ct,
    };
  if (S)
    S &&
      (ht = u.createElement(Vc.Provider, { value: z(z({}, gt), ye) }, S(Ie)));
  else {
    var me = y || h3;
    ht = u.createElement(
      sl,
      ue({}, gt, ye),
      typeof me == 'function' ? me(Ie) : me
    );
  }
  var ot = u.createElement(
    g,
    ue({ className: q(!Ut && r, h), style: v, ref: t }, w),
    Te.map(wt),
    pt ? ht : null,
    p &&
      u.createElement(
        sl,
        ue({}, gt, {
          responsive: qe,
          responsiveDisabled: !xe,
          order: ve,
          className: ''.concat(de, '-suffix'),
          registerSize: nt,
          display: !0,
          style: Xe,
        }),
        p
      )
  );
  return (
    qe && (ot = u.createElement(Nr, { onResize: et, disabled: !xe }, ot)), ot
  );
}
var jr = u.forwardRef(y3);
jr.displayName = 'Overflow';
jr.Item = AS;
jr.RESPONSIVE = zS;
jr.INVALIDATE = DS;
function b3(e) {
  var t = e.prefixCls,
    n = e.align,
    r = e.arrow,
    o = e.arrowPos,
    i = r || {},
    a = i.className,
    l = i.content,
    s = o.x,
    c = s === void 0 ? 0 : s,
    f = o.y,
    d = f === void 0 ? 0 : f,
    v = u.useRef();
  if (!n || !n.points) return null;
  var h = { position: 'absolute' };
  if (n.autoArrow !== !1) {
    var b = n.points[0],
      y = n.points[1],
      S = b[0],
      p = b[1],
      m = y[0],
      g = y[1];
    S === m || !['t', 'b'].includes(S)
      ? (h.top = d)
      : S === 't'
        ? (h.top = 0)
        : (h.bottom = 0),
      p === g || !['l', 'r'].includes(p)
        ? (h.left = c)
        : p === 'l'
          ? (h.left = 0)
          : (h.right = 0);
  }
  return u.createElement(
    'div',
    { ref: v, className: q(''.concat(t, '-arrow'), a), style: h },
    l
  );
}
function C3(e) {
  var t = e.prefixCls,
    n = e.open,
    r = e.zIndex,
    o = e.mask,
    i = e.motion;
  return o
    ? u.createElement(
        Wr,
        ue({}, i, { motionAppear: !0, visible: n, removeOnLeave: !0 }),
        function (a) {
          var l = a.className;
          return u.createElement('div', {
            style: { zIndex: r },
            className: q(''.concat(t, '-mask'), l),
          });
        }
      )
    : null;
}
var S3 = u.memo(
    function (e) {
      var t = e.children;
      return t;
    },
    function (e, t) {
      return t.cache;
    }
  ),
  w3 = u.forwardRef(function (e, t) {
    var n = e.popup,
      r = e.className,
      o = e.prefixCls,
      i = e.style,
      a = e.target,
      l = e.onVisibleChanged,
      s = e.open,
      c = e.keepDom,
      f = e.fresh,
      d = e.onClick,
      v = e.mask,
      h = e.arrow,
      b = e.arrowPos,
      y = e.align,
      S = e.motion,
      p = e.maskMotion,
      m = e.forceRender,
      g = e.getPopupContainer,
      C = e.autoDestroy,
      E = e.portal,
      w = e.zIndex,
      x = e.onMouseEnter,
      O = e.onMouseLeave,
      P = e.onPointerEnter,
      _ = e.ready,
      M = e.offsetX,
      L = e.offsetY,
      R = e.offsetR,
      D = e.offsetB,
      B = e.onAlign,
      k = e.onPrepare,
      T = e.stretch,
      $ = e.targetWidth,
      N = e.targetHeight,
      I = typeof n == 'function' ? n() : n,
      F = s || c,
      A = (g == null ? void 0 : g.length) > 0,
      V = u.useState(!g || !A),
      U = H(V, 2),
      Y = U[0],
      te = U[1];
    if (
      (Bt(
        function () {
          !Y && A && a && te(!0);
        },
        [Y, A, a]
      ),
      !Y)
    )
      return null;
    var J = 'auto',
      Q = { left: '-1000vw', top: '-1000vh', right: J, bottom: J };
    if (_ || !s) {
      var ee,
        se = y.points,
        pe =
          y.dynamicInset ||
          ((ee = y._experimental) === null || ee === void 0
            ? void 0
            : ee.dynamicInset),
        Le = pe && se[0][1] === 'r',
        he = pe && se[0][0] === 'b';
      Le ? ((Q.right = R), (Q.left = J)) : ((Q.left = M), (Q.right = J)),
        he ? ((Q.bottom = D), (Q.top = J)) : ((Q.top = L), (Q.bottom = J));
    }
    var Ce = {};
    return (
      T &&
        (T.includes('height') && N
          ? (Ce.height = N)
          : T.includes('minHeight') && N && (Ce.minHeight = N),
        T.includes('width') && $
          ? (Ce.width = $)
          : T.includes('minWidth') && $ && (Ce.minWidth = $)),
      s || (Ce.pointerEvents = 'none'),
      u.createElement(
        E,
        {
          open: m || F,
          getContainer:
            g &&
            function () {
              return g(a);
            },
          autoDestroy: C,
        },
        u.createElement(C3, {
          prefixCls: o,
          open: s,
          zIndex: w,
          mask: v,
          motion: p,
        }),
        u.createElement(Nr, { onResize: B, disabled: !s }, function (ce) {
          return u.createElement(
            Wr,
            ue(
              {
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: m,
                leavedClassName: ''.concat(o, '-hidden'),
              },
              S,
              {
                onAppearPrepare: k,
                onEnterPrepare: k,
                visible: s,
                onVisibleChanged: function ($e) {
                  var ve;
                  S == null ||
                    (ve = S.onVisibleChanged) === null ||
                    ve === void 0 ||
                    ve.call(S, $e),
                    l($e);
                },
              }
            ),
            function (Pe, $e) {
              var ve = Pe.className,
                Z = Pe.style,
                fe = q(o, ve, r);
              return u.createElement(
                'div',
                {
                  ref: ci(ce, t, $e),
                  className: fe,
                  style: z(
                    z(
                      z(
                        z(
                          {
                            '--arrow-x': ''.concat(b.x || 0, 'px'),
                            '--arrow-y': ''.concat(b.y || 0, 'px'),
                          },
                          Q
                        ),
                        Ce
                      ),
                      Z
                    ),
                    {},
                    { boxSizing: 'border-box', zIndex: w },
                    i
                  ),
                  onMouseEnter: x,
                  onMouseLeave: O,
                  onPointerEnter: P,
                  onClick: d,
                },
                h &&
                  u.createElement(b3, {
                    prefixCls: o,
                    arrow: h,
                    arrowPos: b,
                    align: y,
                  }),
                u.createElement(S3, { cache: !s && !f }, I)
              );
            }
          );
        })
      )
    );
  }),
  x3 = u.forwardRef(function (e, t) {
    var n = e.children,
      r = e.getTriggerDOMNode,
      o = ui(n),
      i = u.useCallback(
        function (l) {
          Gm(t, r ? r(l) : l);
        },
        [r]
      ),
      a = Ca(i, n.ref);
    return o ? u.cloneElement(n, { ref: a }) : n;
  }),
  w0 = u.createContext(null);
function x0(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function E3(e, t, n, r) {
  return u.useMemo(
    function () {
      var o = x0(n ?? t),
        i = x0(r ?? t),
        a = new Set(o),
        l = new Set(i);
      return (
        e &&
          (a.has('hover') && (a.delete('hover'), a.add('click')),
          l.has('hover') && (l.delete('hover'), l.add('click'))),
        [a, l]
      );
    },
    [e, t, n, r]
  );
}
function $3() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function O3(e, t, n, r) {
  for (var o = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var l,
      s = i[a];
    if ($3((l = e[s]) === null || l === void 0 ? void 0 : l.points, o, r))
      return ''.concat(t, '-placement-').concat(s);
  }
  return '';
}
function E0(e, t, n, r) {
  return (
    t ||
    (n
      ? { motionName: ''.concat(e, '-').concat(n) }
      : r
        ? { motionName: r }
        : null)
  );
}
function Gl(e) {
  return e.ownerDocument.defaultView;
}
function Dv(e) {
  for (
    var t = [],
      n = e == null ? void 0 : e.parentElement,
      r = ['hidden', 'scroll', 'clip', 'auto'];
    n;

  ) {
    var o = Gl(n).getComputedStyle(n),
      i = o.overflowX,
      a = o.overflowY,
      l = o.overflow;
    [i, a, l].some(function (s) {
      return r.includes(s);
    }) && t.push(n),
      (n = n.parentElement);
  }
  return t;
}
function Il(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function za(e) {
  return Il(parseFloat(e), 0);
}
function $0(e, t) {
  var n = z({}, e);
  return (
    (t || []).forEach(function (r) {
      if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
        var o = Gl(r).getComputedStyle(r),
          i = o.overflow,
          a = o.overflowClipMargin,
          l = o.borderTopWidth,
          s = o.borderBottomWidth,
          c = o.borderLeftWidth,
          f = o.borderRightWidth,
          d = r.getBoundingClientRect(),
          v = r.offsetHeight,
          h = r.clientHeight,
          b = r.offsetWidth,
          y = r.clientWidth,
          S = za(l),
          p = za(s),
          m = za(c),
          g = za(f),
          C = Il(Math.round((d.width / b) * 1e3) / 1e3),
          E = Il(Math.round((d.height / v) * 1e3) / 1e3),
          w = (b - y - m - g) * C,
          x = (v - h - S - p) * E,
          O = S * E,
          P = p * E,
          _ = m * C,
          M = g * C,
          L = 0,
          R = 0;
        if (i === 'clip') {
          var D = za(a);
          (L = D * C), (R = D * E);
        }
        var B = d.x + _ - L,
          k = d.y + O - R,
          T = B + d.width + 2 * L - _ - M - w,
          $ = k + d.height + 2 * R - O - P - x;
        (n.left = Math.max(n.left, B)),
          (n.top = Math.max(n.top, k)),
          (n.right = Math.min(n.right, T)),
          (n.bottom = Math.min(n.bottom, $));
      }
    }),
    n
  );
}
function O0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = ''.concat(t),
    r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function P0(e, t) {
  var n = t || [],
    r = H(n, 2),
    o = r[0],
    i = r[1];
  return [O0(e.width, o), O0(e.height, i)];
}
function R0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
  return [e[0], e[1]];
}
function $i(e, t) {
  var n = t[0],
    r = t[1],
    o,
    i;
  return (
    n === 't'
      ? (i = e.y)
      : n === 'b'
        ? (i = e.y + e.height)
        : (i = e.y + e.height / 2),
    r === 'l'
      ? (o = e.x)
      : r === 'r'
        ? (o = e.x + e.width)
        : (o = e.x + e.width / 2),
    { x: o, y: i }
  );
}
function eo(e, t) {
  var n = { t: 'b', b: 't', l: 'r', r: 'l' };
  return e
    .map(function (r, o) {
      return o === t ? n[r] || 'c' : r;
    })
    .join('');
}
function P3(e, t, n, r, o, i, a) {
  var l = u.useState({
      ready: !1,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: o[r] || {},
    }),
    s = H(l, 2),
    c = s[0],
    f = s[1],
    d = u.useRef(0),
    v = u.useMemo(
      function () {
        return t ? Dv(t) : [];
      },
      [t]
    ),
    h = u.useRef({}),
    b = function () {
      h.current = {};
    };
  e || b();
  var y = $n(function () {
      if (t && n && e) {
        let kt = function (Ql, Er) {
            var Io =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : fe,
              bi = I.x + Ql,
              Oa = I.y + Er,
              Uu = bi + ee,
              Ku = Oa + Q,
              Gu = Math.max(bi, Io.left),
              qu = Math.max(Oa, Io.top),
              ie = Math.min(Uu, Io.right),
              be = Math.min(Ku, Io.bottom);
            return Math.max(0, (ie - Gu) * (be - qu));
          },
          $a = function () {
            (Gt = I.y + me), (Ee = Gt + Q), (we = I.x + ye), (Ue = we + ee);
          };
        var Mp = kt,
          Ip = $a,
          m,
          g,
          C = t,
          E = C.ownerDocument,
          w = Gl(C),
          x = w.getComputedStyle(C),
          O = x.width,
          P = x.height,
          _ = x.position,
          M = C.style.left,
          L = C.style.top,
          R = C.style.right,
          D = C.style.bottom,
          B = C.style.overflow,
          k = z(z({}, o[r]), i),
          T = E.createElement('div');
        (m = C.parentElement) === null || m === void 0 || m.appendChild(T),
          (T.style.left = ''.concat(C.offsetLeft, 'px')),
          (T.style.top = ''.concat(C.offsetTop, 'px')),
          (T.style.position = _),
          (T.style.height = ''.concat(C.offsetHeight, 'px')),
          (T.style.width = ''.concat(C.offsetWidth, 'px')),
          (C.style.left = '0'),
          (C.style.top = '0'),
          (C.style.right = 'auto'),
          (C.style.bottom = 'auto'),
          (C.style.overflow = 'hidden');
        var $;
        if (Array.isArray(n)) $ = { x: n[0], y: n[1], width: 0, height: 0 };
        else {
          var N = n.getBoundingClientRect();
          $ = { x: N.x, y: N.y, width: N.width, height: N.height };
        }
        var I = C.getBoundingClientRect(),
          F = E.documentElement,
          A = F.clientWidth,
          V = F.clientHeight,
          U = F.scrollWidth,
          Y = F.scrollHeight,
          te = F.scrollTop,
          J = F.scrollLeft,
          Q = I.height,
          ee = I.width,
          se = $.height,
          pe = $.width,
          Le = { left: 0, top: 0, right: A, bottom: V },
          he = { left: -J, top: -te, right: U - J, bottom: Y - te },
          Ce = k.htmlRegion,
          ce = 'visible',
          Pe = 'visibleFirst';
        Ce !== 'scroll' && Ce !== Pe && (Ce = ce);
        var $e = Ce === Pe,
          ve = $0(he, v),
          Z = $0(Le, v),
          fe = Ce === ce ? Z : ve,
          ge = $e ? Z : fe;
        (C.style.left = 'auto'),
          (C.style.top = 'auto'),
          (C.style.right = '0'),
          (C.style.bottom = '0');
        var Se = C.getBoundingClientRect();
        (C.style.left = M),
          (C.style.top = L),
          (C.style.right = R),
          (C.style.bottom = D),
          (C.style.overflow = B),
          (g = C.parentElement) === null || g === void 0 || g.removeChild(T);
        var de = Il(Math.round((ee / parseFloat(O)) * 1e3) / 1e3),
          ze = Il(Math.round((Q / parseFloat(P)) * 1e3) / 1e3);
        if (de === 0 || ze === 0 || (Ic(n) && !dp(n))) return;
        var qe = k.offset,
          xe = k.targetOffset,
          Ut = P0(I, qe),
          pt = H(Ut, 2),
          Te = pt[0],
          Ie = pt[1],
          We = P0($, xe),
          Mt = H(We, 2),
          St = Mt[0],
          et = Mt[1];
        ($.x -= St), ($.y -= et);
        var Qe = k.points || [],
          tt = H(Qe, 2),
          nt = tt[0],
          Lt = tt[1],
          ct = R0(Lt),
          Xe = R0(nt),
          gt = $i($, ct),
          wt = $i(I, Xe),
          ht = z({}, k),
          ye = gt.x - wt.x + Te,
          me = gt.y - wt.y + Ie,
          ot = kt(ye, me),
          ne = kt(ye, me, Z),
          le = $i($, ['t', 'l']),
          Oe = $i(I, ['t', 'l']),
          Fe = $i($, ['b', 'r']),
          xt = $i(I, ['b', 'r']),
          yt = k.overflow || {},
          un = yt.adjustX,
          Kt = yt.adjustY,
          Ft = yt.shiftX,
          Ot = yt.shiftY,
          kn = function (Er) {
            return typeof Er == 'boolean' ? Er : Er >= 0;
          },
          Gt,
          Ee,
          we,
          Ue;
        $a();
        var ut = kn(Kt),
          en = Xe[0] === ct[0];
        if (ut && Xe[0] === 't' && (Ee > ge.bottom || h.current.bt)) {
          var It = me;
          en ? (It -= Q - se) : (It = le.y - xt.y - Ie);
          var fn = kt(ye, It),
            Kr = kt(ye, It, Z);
          fn > ot || (fn === ot && (!$e || Kr >= ne))
            ? ((h.current.bt = !0),
              (me = It),
              (Ie = -Ie),
              (ht.points = [eo(Xe, 0), eo(ct, 0)]))
            : (h.current.bt = !1);
        }
        if (ut && Xe[0] === 'b' && (Gt < ge.top || h.current.tb)) {
          var ft = me;
          en ? (ft += Q - se) : (ft = Fe.y - Oe.y - Ie);
          var tn = kt(ye, ft),
            br = kt(ye, ft, Z);
          tn > ot || (tn === ot && (!$e || br >= ne))
            ? ((h.current.tb = !0),
              (me = ft),
              (Ie = -Ie),
              (ht.points = [eo(Xe, 0), eo(ct, 0)]))
            : (h.current.tb = !1);
        }
        var Gr = kn(un),
          qr = Xe[1] === ct[1];
        if (Gr && Xe[1] === 'l' && (Ue > ge.right || h.current.rl)) {
          var Gn = ye;
          qr ? (Gn -= ee - pe) : (Gn = le.x - xt.x - Te);
          var Ro = kt(Gn, me),
            Xr = kt(Gn, me, Z);
          Ro > ot || (Ro === ot && (!$e || Xr >= ne))
            ? ((h.current.rl = !0),
              (ye = Gn),
              (Te = -Te),
              (ht.points = [eo(Xe, 1), eo(ct, 1)]))
            : (h.current.rl = !1);
        }
        if (Gr && Xe[1] === 'r' && (we < ge.left || h.current.lr)) {
          var Cr = ye;
          qr ? (Cr += ee - pe) : (Cr = Fe.x - Oe.x - Te);
          var pi = kt(Cr, me),
            Qr = kt(Cr, me, Z);
          pi > ot || (pi === ot && (!$e || Qr >= ne))
            ? ((h.current.lr = !0),
              (ye = Cr),
              (Te = -Te),
              (ht.points = [eo(Xe, 1), eo(ct, 1)]))
            : (h.current.lr = !1);
        }
        $a();
        var Nn = Ft === !0 ? 0 : Ft;
        typeof Nn == 'number' &&
          (we < Z.left &&
            ((ye -= we - Z.left - Te),
            $.x + pe < Z.left + Nn && (ye += $.x - Z.left + pe - Nn)),
          Ue > Z.right &&
            ((ye -= Ue - Z.right - Te),
            $.x > Z.right - Nn && (ye += $.x - Z.right + Nn)));
        var Sr = Ot === !0 ? 0 : Ot;
        typeof Sr == 'number' &&
          (Gt < Z.top &&
            ((me -= Gt - Z.top - Ie),
            $.y + se < Z.top + Sr && (me += $.y - Z.top + se - Sr)),
          Ee > Z.bottom &&
            ((me -= Ee - Z.bottom - Ie),
            $.y > Z.bottom - Sr && (me += $.y - Z.bottom + Sr)));
        var Yr = I.x + ye,
          Zr = Yr + ee,
          qn = I.y + me,
          gi = qn + Q,
          De = $.x,
          Re = De + pe,
          Be = $.y,
          At = Be + se,
          zt = Math.max(Yr, De),
          wr = Math.min(Zr, Re),
          To = (zt + wr) / 2,
          Ea = To - Yr,
          hi = Math.max(qn, Be),
          _o = Math.min(gi, At),
          xr = (hi + _o) / 2,
          Mo = xr - qn;
        a == null || a(t, ht);
        var yi = Se.right - I.x - (ye + I.width),
          Wu = Se.bottom - I.y - (me + I.height);
        f({
          ready: !0,
          offsetX: ye / de,
          offsetY: me / ze,
          offsetR: yi / de,
          offsetB: Wu / ze,
          arrowX: Ea / de,
          arrowY: Mo / ze,
          scaleX: de,
          scaleY: ze,
          align: ht,
        });
      }
    }),
    S = function () {
      d.current += 1;
      var g = d.current;
      Promise.resolve().then(function () {
        d.current === g && y();
      });
    },
    p = function () {
      f(function (g) {
        return z(z({}, g), {}, { ready: !1 });
      });
    };
  return (
    Bt(p, [r]),
    Bt(
      function () {
        e || p();
      },
      [e]
    ),
    [
      c.ready,
      c.offsetX,
      c.offsetY,
      c.offsetR,
      c.offsetB,
      c.arrowX,
      c.arrowY,
      c.scaleX,
      c.scaleY,
      c.align,
      S,
    ]
  );
}
function R3(e, t, n, r, o) {
  Bt(
    function () {
      if (e && t && n) {
        let v = function () {
          r(), o();
        };
        var d = v,
          i = t,
          a = n,
          l = Dv(i),
          s = Dv(a),
          c = Gl(a),
          f = new Set([c].concat(ae(l), ae(s)));
        return (
          f.forEach(function (h) {
            h.addEventListener('scroll', v, { passive: !0 });
          }),
          c.addEventListener('resize', v, { passive: !0 }),
          r(),
          function () {
            f.forEach(function (h) {
              h.removeEventListener('scroll', v),
                c.removeEventListener('resize', v);
            });
          }
        );
      }
    },
    [e, t, n]
  );
}
function T3(e, t, n, r, o, i, a, l) {
  var s = u.useRef(e);
  (s.current = e),
    u.useEffect(
      function () {
        if (t && r && (!o || i)) {
          var c = function (h) {
              var b = h.target;
              s.current && !a(b) && l(!1);
            },
            f = Gl(r);
          f.addEventListener('mousedown', c, !0),
            f.addEventListener('contextmenu', c, !0);
          var d = zc(n);
          return (
            d &&
              (d.addEventListener('mousedown', c, !0),
              d.addEventListener('contextmenu', c, !0)),
            function () {
              f.removeEventListener('mousedown', c, !0),
                f.removeEventListener('contextmenu', c, !0),
                d &&
                  (d.removeEventListener('mousedown', c, !0),
                  d.removeEventListener('contextmenu', c, !0));
            }
          );
        }
      },
      [t, n, r, o, i]
    );
}
var _3 = [
  'prefixCls',
  'children',
  'action',
  'showAction',
  'hideAction',
  'popupVisible',
  'defaultPopupVisible',
  'onPopupVisibleChange',
  'afterPopupVisibleChange',
  'mouseEnterDelay',
  'mouseLeaveDelay',
  'focusDelay',
  'blurDelay',
  'mask',
  'maskClosable',
  'getPopupContainer',
  'forceRender',
  'autoDestroy',
  'destroyPopupOnHide',
  'popup',
  'popupClassName',
  'popupStyle',
  'popupPlacement',
  'builtinPlacements',
  'popupAlign',
  'zIndex',
  'stretch',
  'getPopupClassNameFromAlign',
  'fresh',
  'alignPoint',
  'onPopupClick',
  'onPopupAlign',
  'arrow',
  'popupMotion',
  'maskMotion',
  'popupTransitionName',
  'popupAnimation',
  'maskTransitionName',
  'maskAnimation',
  'className',
  'getTriggerDOMNode',
];
function M3() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hp,
    t = u.forwardRef(function (n, r) {
      var o = n.prefixCls,
        i = o === void 0 ? 'rc-trigger-popup' : o,
        a = n.children,
        l = n.action,
        s = l === void 0 ? 'hover' : l,
        c = n.showAction,
        f = n.hideAction,
        d = n.popupVisible,
        v = n.defaultPopupVisible,
        h = n.onPopupVisibleChange,
        b = n.afterPopupVisibleChange,
        y = n.mouseEnterDelay,
        S = n.mouseLeaveDelay,
        p = S === void 0 ? 0.1 : S,
        m = n.focusDelay,
        g = n.blurDelay,
        C = n.mask,
        E = n.maskClosable,
        w = E === void 0 ? !0 : E,
        x = n.getPopupContainer,
        O = n.forceRender,
        P = n.autoDestroy,
        _ = n.destroyPopupOnHide,
        M = n.popup,
        L = n.popupClassName,
        R = n.popupStyle,
        D = n.popupPlacement,
        B = n.builtinPlacements,
        k = B === void 0 ? {} : B,
        T = n.popupAlign,
        $ = n.zIndex,
        N = n.stretch,
        I = n.getPopupClassNameFromAlign,
        F = n.fresh,
        A = n.alignPoint,
        V = n.onPopupClick,
        U = n.onPopupAlign,
        Y = n.arrow,
        te = n.popupMotion,
        J = n.maskMotion,
        Q = n.popupTransitionName,
        ee = n.popupAnimation,
        se = n.maskTransitionName,
        pe = n.maskAnimation,
        Le = n.className,
        he = n.getTriggerDOMNode,
        Ce = Ae(n, _3),
        ce = P || _ || !1,
        Pe = u.useState(!1),
        $e = H(Pe, 2),
        ve = $e[0],
        Z = $e[1];
      Bt(function () {
        Z(FS());
      }, []);
      var fe = u.useRef({}),
        ge = u.useContext(w0),
        Se = u.useMemo(
          function () {
            return {
              registerSubPopup: function (be, dt) {
                (fe.current[be] = dt),
                  ge == null || ge.registerSubPopup(be, dt);
              },
            };
          },
          [ge]
        ),
        de = dS(),
        ze = u.useState(null),
        qe = H(ze, 2),
        xe = qe[0],
        Ut = qe[1],
        pt = $n(function (ie) {
          Ic(ie) && xe !== ie && Ut(ie),
            ge == null || ge.registerSubPopup(de, ie);
        }),
        Te = u.useState(null),
        Ie = H(Te, 2),
        We = Ie[0],
        Mt = Ie[1],
        St = u.useRef(null),
        et = $n(function (ie) {
          Ic(ie) && We !== ie && (Mt(ie), (St.current = ie));
        }),
        Qe = u.Children.only(a),
        tt = (Qe == null ? void 0 : Qe.props) || {},
        nt = {},
        Lt = $n(function (ie) {
          var be,
            dt,
            Pt = We;
          return (
            (Pt == null ? void 0 : Pt.contains(ie)) ||
            ((be = zc(Pt)) === null || be === void 0 ? void 0 : be.host) ===
              ie ||
            ie === Pt ||
            (xe == null ? void 0 : xe.contains(ie)) ||
            ((dt = zc(xe)) === null || dt === void 0 ? void 0 : dt.host) ===
              ie ||
            ie === xe ||
            Object.values(fe.current).some(function (vt) {
              return (vt == null ? void 0 : vt.contains(ie)) || ie === vt;
            })
          );
        }),
        ct = E0(i, te, ee, Q),
        Xe = E0(i, J, pe, se),
        gt = u.useState(v || !1),
        wt = H(gt, 2),
        ht = wt[0],
        ye = wt[1],
        me = d ?? ht,
        ot = $n(function (ie) {
          d === void 0 && ye(ie);
        });
      Bt(
        function () {
          ye(d || !1);
        },
        [d]
      );
      var ne = u.useRef(me);
      ne.current = me;
      var le = u.useRef([]);
      le.current = [];
      var Oe = $n(function (ie) {
          var be;
          ot(ie),
            ((be = le.current[le.current.length - 1]) !== null && be !== void 0
              ? be
              : me) !== ie && (le.current.push(ie), h == null || h(ie));
        }),
        Fe = u.useRef(),
        xt = function () {
          clearTimeout(Fe.current);
        },
        yt = function (be) {
          var dt =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          xt(),
            dt === 0
              ? Oe(be)
              : (Fe.current = setTimeout(function () {
                  Oe(be);
                }, dt * 1e3));
        };
      u.useEffect(function () {
        return xt;
      }, []);
      var un = u.useState(!1),
        Kt = H(un, 2),
        Ft = Kt[0],
        Ot = Kt[1];
      Bt(
        function (ie) {
          (!ie || me) && Ot(!0);
        },
        [me]
      );
      var kn = u.useState(null),
        Gt = H(kn, 2),
        Ee = Gt[0],
        we = Gt[1],
        Ue = u.useState([0, 0]),
        ut = H(Ue, 2),
        en = ut[0],
        It = ut[1],
        fn = function (be) {
          It([be.clientX, be.clientY]);
        },
        Kr = P3(me, xe, A ? en : We, D, k, T, U),
        ft = H(Kr, 11),
        tn = ft[0],
        br = ft[1],
        Gr = ft[2],
        qr = ft[3],
        Gn = ft[4],
        Ro = ft[5],
        Xr = ft[6],
        Cr = ft[7],
        pi = ft[8],
        Qr = ft[9],
        Nn = ft[10],
        Sr = E3(ve, s, c, f),
        Yr = H(Sr, 2),
        Zr = Yr[0],
        qn = Yr[1],
        gi = Zr.has('click'),
        De = qn.has('click') || qn.has('contextMenu'),
        Re = $n(function () {
          Ft || Nn();
        }),
        Be = function () {
          ne.current && A && De && yt(!1);
        };
      R3(me, We, xe, Re, Be),
        Bt(
          function () {
            Re();
          },
          [en, D]
        ),
        Bt(
          function () {
            me && !(k != null && k[D]) && Re();
          },
          [JSON.stringify(T)]
        );
      var At = u.useMemo(
        function () {
          var ie = O3(k, i, Qr, A);
          return q(ie, I == null ? void 0 : I(Qr));
        },
        [Qr, I, k, i, A]
      );
      u.useImperativeHandle(r, function () {
        return { nativeElement: St.current, forceAlign: Re };
      });
      var zt = u.useState(0),
        wr = H(zt, 2),
        To = wr[0],
        Ea = wr[1],
        hi = u.useState(0),
        _o = H(hi, 2),
        xr = _o[0],
        Mo = _o[1],
        yi = function () {
          if (N && We) {
            var be = We.getBoundingClientRect();
            Ea(be.width), Mo(be.height);
          }
        },
        Wu = function () {
          yi(), Re();
        },
        Mp = function (be) {
          Ot(!1), Nn(), b == null || b(be);
        },
        Ip = function () {
          return new Promise(function (be) {
            yi(),
              we(function () {
                return be;
              });
          });
        };
      Bt(
        function () {
          Ee && (Nn(), Ee(), we(null));
        },
        [Ee]
      );
      function kt(ie, be, dt, Pt) {
        nt[ie] = function (vt) {
          var Yl;
          Pt == null || Pt(vt), yt(be, dt);
          for (
            var Xu = arguments.length,
              kp = new Array(Xu > 1 ? Xu - 1 : 0),
              Zl = 1;
            Zl < Xu;
            Zl++
          )
            kp[Zl - 1] = arguments[Zl];
          (Yl = tt[ie]) === null ||
            Yl === void 0 ||
            Yl.call.apply(Yl, [tt, vt].concat(kp));
        };
      }
      (gi || De) &&
        (nt.onClick = function (ie) {
          var be;
          ne.current && De ? yt(!1) : !ne.current && gi && (fn(ie), yt(!0));
          for (
            var dt = arguments.length,
              Pt = new Array(dt > 1 ? dt - 1 : 0),
              vt = 1;
            vt < dt;
            vt++
          )
            Pt[vt - 1] = arguments[vt];
          (be = tt.onClick) === null ||
            be === void 0 ||
            be.call.apply(be, [tt, ie].concat(Pt));
        }),
        T3(me, De, We, xe, C, w, Lt, yt);
      var $a = Zr.has('hover'),
        Ql = qn.has('hover'),
        Er,
        Io;
      $a &&
        (kt('onMouseEnter', !0, y, function (ie) {
          fn(ie);
        }),
        kt('onPointerEnter', !0, y, function (ie) {
          fn(ie);
        }),
        (Er = function (be) {
          (me || Ft) &&
            xe !== null &&
            xe !== void 0 &&
            xe.contains(be.target) &&
            yt(!0, y);
        }),
        A &&
          (nt.onMouseMove = function (ie) {
            var be;
            (be = tt.onMouseMove) === null || be === void 0 || be.call(tt, ie);
          })),
        Ql &&
          (kt('onMouseLeave', !1, p),
          kt('onPointerLeave', !1, p),
          (Io = function () {
            yt(!1, p);
          })),
        Zr.has('focus') && kt('onFocus', !0, m),
        qn.has('focus') && kt('onBlur', !1, g),
        Zr.has('contextMenu') &&
          (nt.onContextMenu = function (ie) {
            var be;
            ne.current && qn.has('contextMenu') ? yt(!1) : (fn(ie), yt(!0)),
              ie.preventDefault();
            for (
              var dt = arguments.length,
                Pt = new Array(dt > 1 ? dt - 1 : 0),
                vt = 1;
              vt < dt;
              vt++
            )
              Pt[vt - 1] = arguments[vt];
            (be = tt.onContextMenu) === null ||
              be === void 0 ||
              be.call.apply(be, [tt, ie].concat(Pt));
          }),
        Le && (nt.className = q(tt.className, Le));
      var bi = z(z({}, tt), nt),
        Oa = {},
        Uu = [
          'onContextMenu',
          'onClick',
          'onMouseDown',
          'onTouchStart',
          'onMouseEnter',
          'onMouseLeave',
          'onFocus',
          'onBlur',
        ];
      Uu.forEach(function (ie) {
        Ce[ie] &&
          (Oa[ie] = function () {
            for (
              var be, dt = arguments.length, Pt = new Array(dt), vt = 0;
              vt < dt;
              vt++
            )
              Pt[vt] = arguments[vt];
            (be = bi[ie]) === null ||
              be === void 0 ||
              be.call.apply(be, [bi].concat(Pt)),
              Ce[ie].apply(Ce, Pt);
          });
      });
      var Ku = u.cloneElement(Qe, z(z({}, bi), Oa)),
        Gu = { x: Ro, y: Xr },
        qu = Y ? z({}, Y !== !0 ? Y : {}) : null;
      return u.createElement(
        u.Fragment,
        null,
        u.createElement(
          Nr,
          { disabled: !me, ref: et, onResize: Wu },
          u.createElement(x3, { getTriggerDOMNode: he }, Ku)
        ),
        u.createElement(
          w0.Provider,
          { value: Se },
          u.createElement(w3, {
            portal: e,
            ref: pt,
            prefixCls: i,
            popup: M,
            className: q(L, At),
            style: R,
            target: We,
            onMouseEnter: Er,
            onMouseLeave: Io,
            onPointerEnter: Er,
            zIndex: $,
            open: me,
            keepDom: Ft,
            fresh: F,
            onClick: V,
            mask: C,
            motion: ct,
            maskMotion: Xe,
            onVisibleChanged: Mp,
            onPrepare: Ip,
            forceRender: O,
            autoDestroy: ce,
            getPopupContainer: x,
            align: Qr,
            arrow: qu,
            arrowPos: Gu,
            ready: tn,
            offsetX: br,
            offsetY: Gr,
            offsetR: qr,
            offsetB: Gn,
            onAlign: Re,
            stretch: N,
            targetWidth: To / Cr,
            targetHeight: xr / pi,
          })
        )
      );
    });
  return t;
}
const Sp = M3(hp),
  BS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  I3 = (e) => ({
    xs: `(max-width: ${e.screenXSMax}px)`,
    sm: `(min-width: ${e.screenSM}px)`,
    md: `(min-width: ${e.screenMD}px)`,
    lg: `(min-width: ${e.screenLG}px)`,
    xl: `(min-width: ${e.screenXL}px)`,
    xxl: `(min-width: ${e.screenXXL}px)`,
  }),
  k3 = (e) => {
    const t = e,
      n = [].concat(BS).reverse();
    return (
      n.forEach((r, o) => {
        const i = r.toUpperCase(),
          a = `screen${i}Min`,
          l = `screen${i}`;
        if (!(t[a] <= t[l]))
          throw new Error(`${a}<=${l} fails : !(${t[a]}<=${t[l]})`);
        if (o < n.length - 1) {
          const s = `screen${i}Max`;
          if (!(t[l] <= t[s]))
            throw new Error(`${l}<=${s} fails : !(${t[l]}<=${t[s]})`);
          const f = `screen${n[o + 1].toUpperCase()}Min`;
          if (!(t[s] <= t[f]))
            throw new Error(`${s}<=${f} fails : !(${t[s]}<=${t[f]})`);
        }
      }),
      e
    );
  };
function N3() {
  const [, e] = Un(),
    t = I3(k3(e));
  return G.useMemo(() => {
    const n = new Map();
    let r = -1,
      o = {};
    return {
      matchHandlers: {},
      dispatch(i) {
        return (o = i), n.forEach((a) => a(o)), n.size >= 1;
      },
      subscribe(i) {
        return n.size || this.register(), (r += 1), n.set(r, i), i(o), r;
      },
      unsubscribe(i) {
        n.delete(i), n.size || this.unregister();
      },
      unregister() {
        Object.keys(t).forEach((i) => {
          const a = t[i],
            l = this.matchHandlers[a];
          l == null || l.mql.removeListener(l == null ? void 0 : l.listener);
        }),
          n.clear();
      },
      register() {
        Object.keys(t).forEach((i) => {
          const a = t[i],
            l = (c) => {
              let { matches: f } = c;
              this.dispatch(Object.assign(Object.assign({}, o), { [i]: f }));
            },
            s = window.matchMedia(a);
          s.addListener(l),
            (this.matchHandlers[a] = { mql: s, listener: l }),
            l(s);
        });
      },
      responsiveMap: t,
    };
  }, [e]);
}
function j3() {
  const [, e] = u.useReducer((t) => t + 1, 0);
  return e;
}
function L3() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  const t = u.useRef({}),
    n = j3(),
    r = N3();
  return (
    Bt(() => {
      const o = r.subscribe((i) => {
        (t.current = i), e && n();
      });
      return () => r.unsubscribe(o);
    }, []),
    t.current
  );
}
const F3 = u.createContext({}),
  Bv = F3,
  A3 = (e) => {
    const {
        antCls: t,
        componentCls: n,
        iconCls: r,
        avatarBg: o,
        avatarColor: i,
        containerSize: a,
        containerSizeLG: l,
        containerSizeSM: s,
        textFontSize: c,
        textFontSizeLG: f,
        textFontSizeSM: d,
        borderRadius: v,
        borderRadiusLG: h,
        borderRadiusSM: b,
        lineWidth: y,
        lineType: S,
      } = e,
      p = (m, g, C) => ({
        width: m,
        height: m,
        borderRadius: '50%',
        [`&${n}-square`]: { borderRadius: C },
        [`&${n}-icon`]: { fontSize: g, [`> ${r}`]: { margin: 0 } },
      });
    return {
      [n]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, vi(e)), {
            position: 'relative',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            color: i,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            verticalAlign: 'middle',
            background: o,
            border: `${K(y)} ${S} transparent`,
            '&-image': { background: 'transparent' },
            [`${t}-image-img`]: { display: 'block' },
          }),
          p(a, c, v)
        ),
        {
          '&-lg': Object.assign({}, p(l, f, h)),
          '&-sm': Object.assign({}, p(s, d, b)),
          '> img': {
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        }
      ),
    };
  },
  z3 = (e) => {
    const {
      componentCls: t,
      groupBorderColor: n,
      groupOverlapping: r,
      groupSpace: o,
    } = e;
    return {
      [`${t}-group`]: {
        display: 'inline-flex',
        [`${t}`]: { borderColor: n },
        '> *:not(:first-child)': { marginInlineStart: r },
      },
      [`${t}-group-popover`]: { [`${t} + ${t}`]: { marginInlineStart: o } },
    };
  },
  D3 = (e) => {
    const {
      controlHeight: t,
      controlHeightLG: n,
      controlHeightSM: r,
      fontSize: o,
      fontSizeLG: i,
      fontSizeXL: a,
      fontSizeHeading3: l,
      marginXS: s,
      marginXXS: c,
      colorBorderBg: f,
    } = e;
    return {
      containerSize: t,
      containerSizeLG: n,
      containerSizeSM: r,
      textFontSize: Math.round((i + a) / 2),
      textFontSizeLG: l,
      textFontSizeSM: o,
      groupSpace: c,
      groupOverlapping: -s,
      groupBorderColor: f,
    };
  },
  HS = Oo(
    'Avatar',
    (e) => {
      const { colorTextLightSolid: t, colorTextPlaceholder: n } = e,
        r = bn(e, { avatarBg: n, avatarColor: t });
      return [A3(r), z3(r)];
    },
    D3
  );
var B3 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const H3 = (e, t) => {
    const [n, r] = u.useState(1),
      [o, i] = u.useState(!1),
      [a, l] = u.useState(!0),
      s = u.useRef(null),
      c = u.useRef(null),
      f = ci(t, s),
      { getPrefixCls: d, avatar: v } = u.useContext(Ge),
      h = u.useContext(Bv),
      b = () => {
        if (!c.current || !s.current) return;
        const Q = c.current.offsetWidth,
          ee = s.current.offsetWidth;
        if (Q !== 0 && ee !== 0) {
          const { gap: se = 4 } = e;
          se * 2 < ee && r(ee - se * 2 < Q ? (ee - se * 2) / Q : 1);
        }
      };
    u.useEffect(() => {
      i(!0);
    }, []),
      u.useEffect(() => {
        l(!0), r(1);
      }, [e.src]),
      u.useEffect(b, [e.gap]);
    const y = () => {
        const { onError: Q } = e;
        (Q == null ? void 0 : Q()) !== !1 && l(!1);
      },
      {
        prefixCls: S,
        shape: p,
        size: m,
        src: g,
        srcSet: C,
        icon: E,
        className: w,
        rootClassName: x,
        alt: O,
        draggable: P,
        children: _,
        crossOrigin: M,
      } = e,
      L = B3(e, [
        'prefixCls',
        'shape',
        'size',
        'src',
        'srcSet',
        'icon',
        'className',
        'rootClassName',
        'alt',
        'draggable',
        'children',
        'crossOrigin',
      ]),
      R = Au((Q) => {
        var ee, se;
        return (se =
          (ee = m ?? (h == null ? void 0 : h.size)) !== null && ee !== void 0
            ? ee
            : Q) !== null && se !== void 0
          ? se
          : 'default';
      }),
      D = Object.keys(typeof R == 'object' ? R || {} : {}).some((Q) =>
        ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(Q)
      ),
      B = L3(D),
      k = u.useMemo(() => {
        if (typeof R != 'object') return {};
        const Q = BS.find((se) => B[se]),
          ee = R[Q];
        return ee
          ? { width: ee, height: ee, fontSize: ee && (E || _) ? ee / 2 : 18 }
          : {};
      }, [B, R]),
      T = d('avatar', S),
      $ = Bl(T),
      [N, I, F] = HS(T, $),
      A = q({ [`${T}-lg`]: R === 'large', [`${T}-sm`]: R === 'small' }),
      V = u.isValidElement(g),
      U = p || (h == null ? void 0 : h.shape) || 'circle',
      Y = q(
        T,
        A,
        v == null ? void 0 : v.className,
        `${T}-${U}`,
        { [`${T}-image`]: V || (g && a), [`${T}-icon`]: !!E },
        F,
        $,
        w,
        x,
        I
      ),
      te =
        typeof R == 'number'
          ? { width: R, height: R, fontSize: E ? R / 2 : 18 }
          : {};
    let J;
    if (typeof g == 'string' && a)
      J = u.createElement('img', {
        src: g,
        draggable: P,
        srcSet: C,
        onError: y,
        alt: O,
        crossOrigin: M,
      });
    else if (V) J = g;
    else if (E) J = E;
    else if (o || n !== 1) {
      const Q = `scale(${n})`,
        ee = { msTransform: Q, WebkitTransform: Q, transform: Q };
      J = u.createElement(
        Nr,
        { onResize: b },
        u.createElement(
          'span',
          { className: `${T}-string`, ref: c, style: Object.assign({}, ee) },
          _
        )
      );
    } else
      J = u.createElement(
        'span',
        { className: `${T}-string`, style: { opacity: 0 }, ref: c },
        _
      );
    return (
      delete L.onError,
      delete L.gap,
      N(
        u.createElement(
          'span',
          Object.assign({}, L, {
            style: Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, te), k),
                v == null ? void 0 : v.style
              ),
              L.style
            ),
            className: Y,
            ref: f,
          }),
          J
        )
      )
    );
  },
  V3 = u.forwardRef(H3),
  VS = V3,
  Wc = (e) => (e ? (typeof e == 'function' ? e() : e) : null);
function wp(e) {
  var t = e.children,
    n = e.prefixCls,
    r = e.id,
    o = e.overlayInnerStyle,
    i = e.className,
    a = e.style;
  return u.createElement(
    'div',
    { className: q(''.concat(n, '-content'), i), style: a },
    u.createElement(
      'div',
      { className: ''.concat(n, '-inner'), id: r, role: 'tooltip', style: o },
      typeof t == 'function' ? t() : t
    )
  );
}
var Oi = { shiftX: 64, adjustY: 1 },
  Pi = { adjustX: 1, shiftY: !0 },
  Ln = [0, 0],
  W3 = {
    left: {
      points: ['cr', 'cl'],
      overflow: Pi,
      offset: [-4, 0],
      targetOffset: Ln,
    },
    right: {
      points: ['cl', 'cr'],
      overflow: Pi,
      offset: [4, 0],
      targetOffset: Ln,
    },
    top: {
      points: ['bc', 'tc'],
      overflow: Oi,
      offset: [0, -4],
      targetOffset: Ln,
    },
    bottom: {
      points: ['tc', 'bc'],
      overflow: Oi,
      offset: [0, 4],
      targetOffset: Ln,
    },
    topLeft: {
      points: ['bl', 'tl'],
      overflow: Oi,
      offset: [0, -4],
      targetOffset: Ln,
    },
    leftTop: {
      points: ['tr', 'tl'],
      overflow: Pi,
      offset: [-4, 0],
      targetOffset: Ln,
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: Oi,
      offset: [0, -4],
      targetOffset: Ln,
    },
    rightTop: {
      points: ['tl', 'tr'],
      overflow: Pi,
      offset: [4, 0],
      targetOffset: Ln,
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: Oi,
      offset: [0, 4],
      targetOffset: Ln,
    },
    rightBottom: {
      points: ['bl', 'br'],
      overflow: Pi,
      offset: [4, 0],
      targetOffset: Ln,
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: Oi,
      offset: [0, 4],
      targetOffset: Ln,
    },
    leftBottom: {
      points: ['br', 'bl'],
      overflow: Pi,
      offset: [-4, 0],
      targetOffset: Ln,
    },
  },
  U3 = [
    'overlayClassName',
    'trigger',
    'mouseEnterDelay',
    'mouseLeaveDelay',
    'overlayStyle',
    'prefixCls',
    'children',
    'onVisibleChange',
    'afterVisibleChange',
    'transitionName',
    'animation',
    'motion',
    'placement',
    'align',
    'destroyTooltipOnHide',
    'defaultVisible',
    'getTooltipContainer',
    'overlayInnerStyle',
    'arrowContent',
    'overlay',
    'id',
    'showArrow',
  ],
  K3 = function (t, n) {
    var r = t.overlayClassName,
      o = t.trigger,
      i = o === void 0 ? ['hover'] : o,
      a = t.mouseEnterDelay,
      l = a === void 0 ? 0 : a,
      s = t.mouseLeaveDelay,
      c = s === void 0 ? 0.1 : s,
      f = t.overlayStyle,
      d = t.prefixCls,
      v = d === void 0 ? 'rc-tooltip' : d,
      h = t.children,
      b = t.onVisibleChange,
      y = t.afterVisibleChange,
      S = t.transitionName,
      p = t.animation,
      m = t.motion,
      g = t.placement,
      C = g === void 0 ? 'right' : g,
      E = t.align,
      w = E === void 0 ? {} : E,
      x = t.destroyTooltipOnHide,
      O = x === void 0 ? !1 : x,
      P = t.defaultVisible,
      _ = t.getTooltipContainer,
      M = t.overlayInnerStyle;
    t.arrowContent;
    var L = t.overlay,
      R = t.id,
      D = t.showArrow,
      B = D === void 0 ? !0 : D,
      k = Ae(t, U3),
      T = u.useRef(null);
    u.useImperativeHandle(n, function () {
      return T.current;
    });
    var $ = z({}, k);
    'visible' in t && ($.popupVisible = t.visible);
    var N = function () {
      return u.createElement(
        wp,
        { key: 'content', prefixCls: v, id: R, overlayInnerStyle: M },
        L
      );
    };
    return u.createElement(
      Sp,
      ue(
        {
          popupClassName: r,
          prefixCls: v,
          popup: N,
          action: i,
          builtinPlacements: W3,
          popupPlacement: C,
          ref: T,
          popupAlign: w,
          getPopupContainer: _,
          onPopupVisibleChange: b,
          afterPopupVisibleChange: y,
          popupTransitionName: S,
          popupAnimation: p,
          popupMotion: m,
          defaultPopupVisible: P,
          autoDestroy: O,
          mouseLeaveDelay: c,
          popupStyle: f,
          mouseEnterDelay: l,
          arrow: B,
        },
        $
      ),
      h
    );
  };
const G3 = u.forwardRef(K3);
function WS(e) {
  const { sizePopupArrow: t, borderRadiusXS: n, borderRadiusOuter: r } = e,
    o = t / 2,
    i = 0,
    a = o,
    l = (r * 1) / Math.sqrt(2),
    s = o - r * (1 - 1 / Math.sqrt(2)),
    c = o - n * (1 / Math.sqrt(2)),
    f = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)),
    d = 2 * o - c,
    v = f,
    h = 2 * o - l,
    b = s,
    y = 2 * o - i,
    S = a,
    p = o * Math.sqrt(2) + r * (Math.sqrt(2) - 2),
    m = r * (Math.sqrt(2) - 1),
    g = `polygon(${m}px 100%, 50% ${m}px, ${2 * o - m}px 100%, ${m}px 100%)`,
    C = `path('M ${i} ${a} A ${r} ${r} 0 0 0 ${l} ${s} L ${c} ${f} A ${n} ${n} 0 0 1 ${d} ${v} L ${h} ${b} A ${r} ${r} 0 0 0 ${y} ${S} Z')`;
  return { arrowShadowWidth: p, arrowPath: C, arrowPolygon: g };
}
const q3 = (e, t, n) => {
    const {
      sizePopupArrow: r,
      arrowPolygon: o,
      arrowPath: i,
      arrowShadowWidth: a,
      borderRadiusXS: l,
      calc: s,
    } = e;
    return {
      pointerEvents: 'none',
      width: r,
      height: r,
      overflow: 'hidden',
      '&::before': {
        position: 'absolute',
        bottom: 0,
        insetInlineStart: 0,
        width: r,
        height: s(r).div(2).equal(),
        background: t,
        clipPath: { _multi_value_: !0, value: [o, i] },
        content: '""',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: a,
        height: a,
        bottom: 0,
        insetInline: 0,
        margin: 'auto',
        borderRadius: { _skip_check_: !0, value: `0 0 ${K(l)} 0` },
        transform: 'translateY(50%) rotate(-135deg)',
        boxShadow: n,
        zIndex: 0,
        background: 'transparent',
      },
    };
  },
  US = 8;
function xp(e) {
  const { contentRadius: t, limitVerticalRadius: n } = e,
    r = t > 12 ? t + 2 : 12;
  return { arrowOffsetHorizontal: r, arrowOffsetVertical: n ? US : r };
}
function Is(e, t) {
  return e ? t : {};
}
function KS(e, t, n) {
  const {
      componentCls: r,
      boxShadowPopoverArrow: o,
      arrowOffsetVertical: i,
      arrowOffsetHorizontal: a,
    } = e,
    {
      arrowDistance: l = 0,
      arrowPlacement: s = { left: !0, right: !0, top: !0, bottom: !0 },
    } = n || {};
  return {
    [r]: Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              [`${r}-arrow`]: [
                Object.assign(
                  Object.assign(
                    { position: 'absolute', zIndex: 1, display: 'block' },
                    q3(e, t, o)
                  ),
                  { '&:before': { background: t } }
                ),
              ],
            },
            Is(!!s.top, {
              [[
                `&-placement-top > ${r}-arrow`,
                `&-placement-topLeft > ${r}-arrow`,
                `&-placement-topRight > ${r}-arrow`,
              ].join(',')]: {
                bottom: l,
                transform: 'translateY(100%) rotate(180deg)',
              },
              [`&-placement-top > ${r}-arrow`]: {
                left: { _skip_check_: !0, value: '50%' },
                transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
              },
              [`&-placement-topLeft > ${r}-arrow`]: {
                left: { _skip_check_: !0, value: a },
              },
              [`&-placement-topRight > ${r}-arrow`]: {
                right: { _skip_check_: !0, value: a },
              },
            })
          ),
          Is(!!s.bottom, {
            [[
              `&-placement-bottom > ${r}-arrow`,
              `&-placement-bottomLeft > ${r}-arrow`,
              `&-placement-bottomRight > ${r}-arrow`,
            ].join(',')]: { top: l, transform: 'translateY(-100%)' },
            [`&-placement-bottom > ${r}-arrow`]: {
              left: { _skip_check_: !0, value: '50%' },
              transform: 'translateX(-50%) translateY(-100%)',
            },
            [`&-placement-bottomLeft > ${r}-arrow`]: {
              left: { _skip_check_: !0, value: a },
            },
            [`&-placement-bottomRight > ${r}-arrow`]: {
              right: { _skip_check_: !0, value: a },
            },
          })
        ),
        Is(!!s.left, {
          [[
            `&-placement-left > ${r}-arrow`,
            `&-placement-leftTop > ${r}-arrow`,
            `&-placement-leftBottom > ${r}-arrow`,
          ].join(',')]: {
            right: { _skip_check_: !0, value: l },
            transform: 'translateX(100%) rotate(90deg)',
          },
          [`&-placement-left > ${r}-arrow`]: {
            top: { _skip_check_: !0, value: '50%' },
            transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
          },
          [`&-placement-leftTop > ${r}-arrow`]: { top: i },
          [`&-placement-leftBottom > ${r}-arrow`]: { bottom: i },
        })
      ),
      Is(!!s.right, {
        [[
          `&-placement-right > ${r}-arrow`,
          `&-placement-rightTop > ${r}-arrow`,
          `&-placement-rightBottom > ${r}-arrow`,
        ].join(',')]: {
          left: { _skip_check_: !0, value: l },
          transform: 'translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-right > ${r}-arrow`]: {
          top: { _skip_check_: !0, value: '50%' },
          transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-rightTop > ${r}-arrow`]: { top: i },
        [`&-placement-rightBottom > ${r}-arrow`]: { bottom: i },
      })
    ),
  };
}
function X3(e, t, n, r) {
  if (r === !1) return { adjustX: !1, adjustY: !1 };
  const o = r && typeof r == 'object' ? r : {},
    i = {};
  switch (e) {
    case 'top':
    case 'bottom':
      (i.shiftX = t.arrowOffsetHorizontal * 2 + n),
        (i.shiftY = !0),
        (i.adjustY = !0);
      break;
    case 'left':
    case 'right':
      (i.shiftY = t.arrowOffsetVertical * 2 + n),
        (i.shiftX = !0),
        (i.adjustX = !0);
      break;
  }
  const a = Object.assign(Object.assign({}, i), o);
  return a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a;
}
const T0 = {
    left: { points: ['cr', 'cl'] },
    right: { points: ['cl', 'cr'] },
    top: { points: ['bc', 'tc'] },
    bottom: { points: ['tc', 'bc'] },
    topLeft: { points: ['bl', 'tl'] },
    leftTop: { points: ['tr', 'tl'] },
    topRight: { points: ['br', 'tr'] },
    rightTop: { points: ['tl', 'tr'] },
    bottomRight: { points: ['tr', 'br'] },
    rightBottom: { points: ['bl', 'br'] },
    bottomLeft: { points: ['tl', 'bl'] },
    leftBottom: { points: ['br', 'bl'] },
  },
  Q3 = {
    topLeft: { points: ['bl', 'tc'] },
    leftTop: { points: ['tr', 'cl'] },
    topRight: { points: ['br', 'tc'] },
    rightTop: { points: ['tl', 'cr'] },
    bottomRight: { points: ['tr', 'bc'] },
    rightBottom: { points: ['bl', 'cr'] },
    bottomLeft: { points: ['tl', 'bc'] },
    leftBottom: { points: ['br', 'cl'] },
  },
  Y3 = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom',
  ]);
function Z3(e) {
  const {
      arrowWidth: t,
      autoAdjustOverflow: n,
      arrowPointAtCenter: r,
      offset: o,
      borderRadius: i,
      visibleFirst: a,
    } = e,
    l = t / 2,
    s = {};
  return (
    Object.keys(T0).forEach((c) => {
      const f = (r && Q3[c]) || T0[c],
        d = Object.assign(Object.assign({}, f), {
          offset: [0, 0],
          dynamicInset: !0,
        });
      switch (((s[c] = d), Y3.has(c) && (d.autoArrow = !1), c)) {
        case 'top':
        case 'topLeft':
        case 'topRight':
          d.offset[1] = -l - o;
          break;
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          d.offset[1] = l + o;
          break;
        case 'left':
        case 'leftTop':
        case 'leftBottom':
          d.offset[0] = -l - o;
          break;
        case 'right':
        case 'rightTop':
        case 'rightBottom':
          d.offset[0] = l + o;
          break;
      }
      const v = xp({ contentRadius: i, limitVerticalRadius: !0 });
      if (r)
        switch (c) {
          case 'topLeft':
          case 'bottomLeft':
            d.offset[0] = -v.arrowOffsetHorizontal - l;
            break;
          case 'topRight':
          case 'bottomRight':
            d.offset[0] = v.arrowOffsetHorizontal + l;
            break;
          case 'leftTop':
          case 'rightTop':
            d.offset[1] = -v.arrowOffsetHorizontal - l;
            break;
          case 'leftBottom':
          case 'rightBottom':
            d.offset[1] = v.arrowOffsetHorizontal + l;
            break;
        }
      (d.overflow = X3(c, v, t, n)), a && (d.htmlRegion = 'visibleFirst');
    }),
    s
  );
}
const J3 = (e) => {
    const {
      componentCls: t,
      tooltipMaxWidth: n,
      tooltipColor: r,
      tooltipBg: o,
      tooltipBorderRadius: i,
      zIndexPopup: a,
      controlHeight: l,
      boxShadowSecondary: s,
      paddingSM: c,
      paddingXS: f,
    } = e;
    return [
      {
        [t]: Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, vi(e)), {
              position: 'absolute',
              zIndex: a,
              display: 'block',
              width: 'max-content',
              maxWidth: n,
              visibility: 'visible',
              transformOrigin: 'var(--arrow-x, 50%) var(--arrow-y, 50%)',
              '&-hidden': { display: 'none' },
              '--antd-arrow-background-color': o,
              [`${t}-inner`]: {
                minWidth: l,
                minHeight: l,
                padding: `${K(e.calc(c).div(2).equal())} ${K(f)}`,
                color: r,
                textAlign: 'start',
                textDecoration: 'none',
                wordWrap: 'break-word',
                backgroundColor: o,
                borderRadius: i,
                boxShadow: s,
                boxSizing: 'border-box',
              },
              [[
                '&-placement-left',
                '&-placement-leftTop',
                '&-placement-leftBottom',
                '&-placement-right',
                '&-placement-rightTop',
                '&-placement-rightBottom',
              ].join(',')]: { [`${t}-inner`]: { borderRadius: e.min(i, US) } },
              [`${t}-content`]: { position: 'relative' },
            }),
            RR(e, (d, v) => {
              let { darkColor: h } = v;
              return {
                [`&${t}-${d}`]: {
                  [`${t}-inner`]: { backgroundColor: h },
                  [`${t}-arrow`]: { '--antd-arrow-background-color': h },
                },
              };
            })
          ),
          { '&-rtl': { direction: 'rtl' } }
        ),
      },
      KS(e, 'var(--antd-arrow-background-color)'),
      {
        [`${t}-pure`]: {
          position: 'relative',
          maxWidth: 'none',
          margin: e.sizePopupArrow,
        },
      },
    ];
  },
  eI = (e) =>
    Object.assign(
      Object.assign(
        { zIndexPopup: e.zIndexPopupBase + 70 },
        xp({ contentRadius: e.borderRadius, limitVerticalRadius: !0 })
      ),
      WS(bn(e, { borderRadiusOuter: Math.min(e.borderRadiusOuter, 4) }))
    ),
  GS = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return Oo(
      'Tooltip',
      (r) => {
        const {
            borderRadius: o,
            colorTextLightSolid: i,
            colorBgSpotlight: a,
          } = r,
          l = bn(r, {
            tooltipMaxWidth: 250,
            tooltipColor: i,
            tooltipBorderRadius: o,
            tooltipBg: a,
          });
        return [J3(l), Cp(r, 'zoom-big-fast')];
      },
      eI,
      { resetStyle: !1, injectStyle: t }
    )(e);
  },
  tI = Tl.map((e) => `${e}-inverse`);
function nI(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
    ? [].concat(ae(tI), ae(Tl)).includes(e)
    : Tl.includes(e);
}
function qS(e, t) {
  const n = nI(t),
    r = q({ [`${e}-${t}`]: t && n }),
    o = {},
    i = {};
  return (
    t && !n && ((o.background = t), (i['--antd-arrow-background-color'] = t)),
    { className: r, overlayStyle: o, arrowStyle: i }
  );
}
const rI = (e) => {
    const {
        prefixCls: t,
        className: n,
        placement: r = 'top',
        title: o,
        color: i,
        overlayInnerStyle: a,
      } = e,
      { getPrefixCls: l } = u.useContext(Ge),
      s = l('tooltip', t),
      [c, f, d] = GS(s),
      v = qS(s, i),
      h = v.arrowStyle,
      b = Object.assign(Object.assign({}, a), v.overlayStyle),
      y = q(f, d, s, `${s}-pure`, `${s}-placement-${r}`, n, v.className);
    return c(
      u.createElement(
        'div',
        { className: y, style: h },
        u.createElement('div', { className: `${s}-arrow` }),
        u.createElement(
          wp,
          Object.assign({}, e, {
            className: f,
            prefixCls: s,
            overlayInnerStyle: b,
          }),
          o
        )
      )
    );
  },
  oI = rI;
var iI = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const XS = u.forwardRef((e, t) => {
  var n, r;
  const {
      prefixCls: o,
      openClassName: i,
      getTooltipContainer: a,
      overlayClassName: l,
      color: s,
      overlayInnerStyle: c,
      children: f,
      afterOpenChange: d,
      afterVisibleChange: v,
      destroyTooltipOnHide: h,
      arrow: b = !0,
      title: y,
      overlay: S,
      builtinPlacements: p,
      arrowPointAtCenter: m = !1,
      autoAdjustOverflow: g = !0,
    } = e,
    C = !!b,
    [, E] = Un(),
    { getPopupContainer: w, getPrefixCls: x, direction: O } = u.useContext(Ge),
    P = lC(),
    _ = u.useRef(null),
    M = () => {
      var de;
      (de = _.current) === null || de === void 0 || de.forceAlign();
    };
  u.useImperativeHandle(t, () => ({
    forceAlign: M,
    forcePopupAlign: () => {
      P.deprecated(!1, 'forcePopupAlign', 'forceAlign'), M();
    },
  }));
  const [L, R] = Qo(!1, {
      value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
      defaultValue:
        (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible,
    }),
    D = !y && !S && y !== 0,
    B = (de) => {
      var ze, qe;
      R(D ? !1 : de),
        D ||
          ((ze = e.onOpenChange) === null || ze === void 0 || ze.call(e, de),
          (qe = e.onVisibleChange) === null || qe === void 0 || qe.call(e, de));
    },
    k = u.useMemo(() => {
      var de, ze;
      let qe = m;
      return (
        typeof b == 'object' &&
          (qe =
            (ze =
              (de = b.pointAtCenter) !== null && de !== void 0
                ? de
                : b.arrowPointAtCenter) !== null && ze !== void 0
              ? ze
              : m),
        p ||
          Z3({
            arrowPointAtCenter: qe,
            autoAdjustOverflow: g,
            arrowWidth: C ? E.sizePopupArrow : 0,
            borderRadius: E.borderRadius,
            offset: E.marginXXS,
            visibleFirst: !0,
          })
      );
    }, [m, b, p, E]),
    T = u.useMemo(() => (y === 0 ? y : S || y || ''), [S, y]),
    $ = u.createElement(eS, null, typeof T == 'function' ? T() : T),
    {
      getPopupContainer: N,
      placement: I = 'top',
      mouseEnterDelay: F = 0.1,
      mouseLeaveDelay: A = 0.1,
      overlayStyle: V,
      rootClassName: U,
    } = e,
    Y = iI(e, [
      'getPopupContainer',
      'placement',
      'mouseEnterDelay',
      'mouseLeaveDelay',
      'overlayStyle',
      'rootClassName',
    ]),
    te = x('tooltip', o),
    J = x(),
    Q = e['data-popover-inject'];
  let ee = L;
  !('open' in e) && !('visible' in e) && D && (ee = !1);
  const se =
      u.isValidElement(f) && !KC(f) ? f : u.createElement('span', null, f),
    pe = se.props,
    Le =
      !pe.className || typeof pe.className == 'string'
        ? q(pe.className, i || `${te}-open`)
        : pe.className,
    [he, Ce, ce] = GS(te, !Q),
    Pe = qS(te, s),
    $e = Pe.arrowStyle,
    ve = Object.assign(Object.assign({}, c), Pe.overlayStyle),
    Z = q(l, { [`${te}-rtl`]: O === 'rtl' }, Pe.className, U, Ce, ce),
    [fe, ge] = XC('Tooltip', Y.zIndex),
    Se = u.createElement(
      G3,
      Object.assign({}, Y, {
        zIndex: fe,
        showArrow: C,
        placement: I,
        mouseEnterDelay: F,
        mouseLeaveDelay: A,
        prefixCls: te,
        overlayClassName: Z,
        overlayStyle: Object.assign(Object.assign({}, $e), V),
        getTooltipContainer: N || a || w,
        ref: _,
        builtinPlacements: k,
        overlay: $,
        visible: ee,
        onVisibleChange: B,
        afterVisibleChange: d ?? v,
        overlayInnerStyle: ve,
        arrowContent: u.createElement('span', {
          className: `${te}-arrow-content`,
        }),
        motion: {
          motionName: ai(J, 'zoom-big-fast', e.transitionName),
          motionDeadline: 1e3,
        },
        destroyTooltipOnHide: !!h,
      }),
      ee ? Lu(se, { className: Le }) : se
    );
  return he(u.createElement(fp.Provider, { value: ge }, Se));
});
XS._InternalPanelDoNotUseOrYouWillBeFired = oI;
const oc = XS,
  aI = (e) => {
    const {
      componentCls: t,
      popoverColor: n,
      titleMinWidth: r,
      fontWeightStrong: o,
      innerPadding: i,
      boxShadowSecondary: a,
      colorTextHeading: l,
      borderRadiusLG: s,
      zIndexPopup: c,
      titleMarginBottom: f,
      colorBgElevated: d,
      popoverBg: v,
      titleBorderBottom: h,
      innerContentPadding: b,
      titlePadding: y,
    } = e;
    return [
      {
        [t]: Object.assign(Object.assign({}, vi(e)), {
          position: 'absolute',
          top: 0,
          left: { _skip_check_: !0, value: 0 },
          zIndex: c,
          fontWeight: 'normal',
          whiteSpace: 'normal',
          textAlign: 'start',
          cursor: 'auto',
          userSelect: 'text',
          transformOrigin: 'var(--arrow-x, 50%) var(--arrow-y, 50%)',
          '--antd-arrow-background-color': d,
          '&-rtl': { direction: 'rtl' },
          '&-hidden': { display: 'none' },
          [`${t}-content`]: { position: 'relative' },
          [`${t}-inner`]: {
            backgroundColor: v,
            backgroundClip: 'padding-box',
            borderRadius: s,
            boxShadow: a,
            padding: i,
          },
          [`${t}-title`]: {
            minWidth: r,
            marginBottom: f,
            color: l,
            fontWeight: o,
            borderBottom: h,
            padding: y,
          },
          [`${t}-inner-content`]: { color: n, padding: b },
        }),
      },
      KS(e, 'var(--antd-arrow-background-color)'),
      {
        [`${t}-pure`]: {
          position: 'relative',
          maxWidth: 'none',
          margin: e.sizePopupArrow,
          display: 'inline-block',
          [`${t}-content`]: { display: 'inline-block' },
        },
      },
    ];
  },
  lI = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: Tl.map((n) => {
        const r = e[`${n}6`];
        return {
          [`&${t}-${n}`]: {
            '--antd-arrow-background-color': r,
            [`${t}-inner`]: { backgroundColor: r },
            [`${t}-arrow`]: { background: 'transparent' },
          },
        };
      }),
    };
  },
  sI = (e) => {
    const {
        lineWidth: t,
        controlHeight: n,
        fontHeight: r,
        padding: o,
        wireframe: i,
        zIndexPopupBase: a,
        borderRadiusLG: l,
        marginXS: s,
        lineType: c,
        colorSplit: f,
        paddingSM: d,
      } = e,
      v = n - r,
      h = v / 2,
      b = v / 2 - t,
      y = o;
    return Object.assign(
      Object.assign(
        Object.assign({ titleMinWidth: 177, zIndexPopup: a + 30 }, WS(e)),
        xp({ contentRadius: l, limitVerticalRadius: !0 })
      ),
      {
        innerPadding: i ? 0 : 12,
        titleMarginBottom: i ? 0 : s,
        titlePadding: i ? `${h}px ${y}px ${b}px` : 0,
        titleBorderBottom: i ? `${t}px ${c} ${f}` : 'none',
        innerContentPadding: i ? `${d}px ${y}px` : 0,
      }
    );
  },
  QS = Oo(
    'Popover',
    (e) => {
      const { colorBgElevated: t, colorText: n } = e,
        r = bn(e, { popoverBg: t, popoverColor: n });
      return [aI(r), lI(r), Cp(r, 'zoom-big')];
    },
    sI,
    {
      resetStyle: !1,
      deprecatedTokens: [
        ['width', 'titleMinWidth'],
        ['minWidth', 'titleMinWidth'],
      ],
    }
  );
var cI = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const uI = (e, t, n) =>
    !t && !n
      ? null
      : u.createElement(
          u.Fragment,
          null,
          t && u.createElement('div', { className: `${e}-title` }, Wc(t)),
          u.createElement('div', { className: `${e}-inner-content` }, Wc(n))
        ),
  fI = (e) => {
    const {
      hashId: t,
      prefixCls: n,
      className: r,
      style: o,
      placement: i = 'top',
      title: a,
      content: l,
      children: s,
    } = e;
    return u.createElement(
      'div',
      { className: q(t, n, `${n}-pure`, `${n}-placement-${i}`, r), style: o },
      u.createElement('div', { className: `${n}-arrow` }),
      u.createElement(
        wp,
        Object.assign({}, e, { className: t, prefixCls: n }),
        s || uI(n, a, l)
      )
    );
  },
  dI = (e) => {
    const { prefixCls: t, className: n } = e,
      r = cI(e, ['prefixCls', 'className']),
      { getPrefixCls: o } = u.useContext(Ge),
      i = o('popover', t),
      [a, l, s] = QS(i);
    return a(
      u.createElement(
        fI,
        Object.assign({}, r, { prefixCls: i, hashId: l, className: q(n, s) })
      )
    );
  },
  vI = dI;
var mI = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const pI = (e) => {
    let { title: t, content: n, prefixCls: r } = e;
    return u.createElement(
      u.Fragment,
      null,
      t && u.createElement('div', { className: `${r}-title` }, Wc(t)),
      u.createElement('div', { className: `${r}-inner-content` }, Wc(n))
    );
  },
  YS = u.forwardRef((e, t) => {
    const {
        prefixCls: n,
        title: r,
        content: o,
        overlayClassName: i,
        placement: a = 'top',
        trigger: l = 'hover',
        mouseEnterDelay: s = 0.1,
        mouseLeaveDelay: c = 0.1,
        overlayStyle: f = {},
      } = e,
      d = mI(e, [
        'prefixCls',
        'title',
        'content',
        'overlayClassName',
        'placement',
        'trigger',
        'mouseEnterDelay',
        'mouseLeaveDelay',
        'overlayStyle',
      ]),
      { getPrefixCls: v } = u.useContext(Ge),
      h = v('popover', n),
      [b, y, S] = QS(h),
      p = v(),
      m = q(i, y, S);
    return b(
      u.createElement(
        oc,
        Object.assign(
          {
            placement: a,
            trigger: l,
            mouseEnterDelay: s,
            mouseLeaveDelay: c,
            overlayStyle: f,
          },
          d,
          {
            prefixCls: h,
            overlayClassName: m,
            ref: t,
            overlay:
              r || o
                ? u.createElement(pI, { prefixCls: h, title: r, content: o })
                : null,
            transitionName: ai(p, 'zoom-big', d.transitionName),
            'data-popover-inject': !0,
          }
        )
      )
    );
  });
YS._InternalPanelDoNotUseOrYouWillBeFired = vI;
const gI = YS,
  _0 = (e) => {
    const { size: t, shape: n } = u.useContext(Bv),
      r = u.useMemo(
        () => ({ size: e.size || t, shape: e.shape || n }),
        [e.size, e.shape, t, n]
      );
    return u.createElement(Bv.Provider, { value: r }, e.children);
  },
  hI = (e) => {
    const { getPrefixCls: t, direction: n } = u.useContext(Ge),
      {
        prefixCls: r,
        className: o,
        rootClassName: i,
        style: a,
        maxCount: l,
        maxStyle: s,
        size: c,
        shape: f,
        maxPopoverPlacement: d = 'top',
        maxPopoverTrigger: v = 'hover',
        children: h,
      } = e,
      b = t('avatar', r),
      y = `${b}-group`,
      S = Bl(b),
      [p, m, g] = HS(b, S),
      C = q(y, { [`${y}-rtl`]: n === 'rtl' }, g, S, o, i, m),
      E = ri(h).map((x, O) => Lu(x, { key: `avatar-key-${O}` })),
      w = E.length;
    if (l && l < w) {
      const x = E.slice(0, l),
        O = E.slice(l, w);
      return (
        x.push(
          u.createElement(
            gI,
            {
              key: 'avatar-popover-key',
              content: O,
              trigger: v,
              placement: d,
              overlayClassName: `${y}-popover`,
              destroyTooltipOnHide: !0,
            },
            u.createElement(VS, { style: s }, `+${w - l}`)
          )
        ),
        p(
          u.createElement(
            _0,
            { shape: f, size: c },
            u.createElement('div', { className: C, style: a }, x)
          )
        )
      );
    }
    return p(
      u.createElement(
        _0,
        { shape: f, size: c },
        u.createElement('div', { className: C, style: a }, E)
      )
    );
  },
  yI = hI,
  ZS = VS;
ZS.Group = yI;
const bI = ZS;
var CI = re.ESC,
  SI = re.TAB;
function wI(e) {
  var t = e.visible,
    n = e.triggerRef,
    r = e.onVisibleChange,
    o = e.autoFocus,
    i = e.overlayRef,
    a = u.useRef(!1),
    l = function () {
      if (t) {
        var d, v;
        (d = n.current) === null ||
          d === void 0 ||
          (v = d.focus) === null ||
          v === void 0 ||
          v.call(d),
          r == null || r(!1);
      }
    },
    s = function () {
      var d;
      return (d = i.current) !== null && d !== void 0 && d.focus
        ? (i.current.focus(), (a.current = !0), !0)
        : !1;
    },
    c = function (d) {
      switch (d.keyCode) {
        case CI:
          l();
          break;
        case SI: {
          var v = !1;
          a.current || (v = s()), v ? d.preventDefault() : l();
          break;
        }
      }
    };
  u.useEffect(
    function () {
      return t
        ? (window.addEventListener('keydown', c),
          o && Zt(s, 3),
          function () {
            window.removeEventListener('keydown', c), (a.current = !1);
          })
        : function () {
            a.current = !1;
          };
    },
    [t]
  );
}
var xI = u.forwardRef(function (e, t) {
    var n = e.overlay,
      r = e.arrow,
      o = e.prefixCls,
      i = u.useMemo(
        function () {
          var l;
          return typeof n == 'function' ? (l = n()) : (l = n), l;
        },
        [n]
      ),
      a = ci(t, i == null ? void 0 : i.ref);
    return G.createElement(
      G.Fragment,
      null,
      r && G.createElement('div', { className: ''.concat(o, '-arrow') }),
      G.cloneElement(i, { ref: ui(i) ? a : void 0 })
    );
  }),
  Ri = { adjustX: 1, adjustY: 1 },
  Ti = [0, 0],
  EI = {
    topLeft: {
      points: ['bl', 'tl'],
      overflow: Ri,
      offset: [0, -4],
      targetOffset: Ti,
    },
    top: {
      points: ['bc', 'tc'],
      overflow: Ri,
      offset: [0, -4],
      targetOffset: Ti,
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: Ri,
      offset: [0, -4],
      targetOffset: Ti,
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: Ri,
      offset: [0, 4],
      targetOffset: Ti,
    },
    bottom: {
      points: ['tc', 'bc'],
      overflow: Ri,
      offset: [0, 4],
      targetOffset: Ti,
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: Ri,
      offset: [0, 4],
      targetOffset: Ti,
    },
  },
  $I = [
    'arrow',
    'prefixCls',
    'transitionName',
    'animation',
    'align',
    'placement',
    'placements',
    'getPopupContainer',
    'showAction',
    'hideAction',
    'overlayClassName',
    'overlayStyle',
    'visible',
    'trigger',
    'autoFocus',
    'overlay',
    'children',
    'onVisibleChange',
  ];
function OI(e, t) {
  var n,
    r = e.arrow,
    o = r === void 0 ? !1 : r,
    i = e.prefixCls,
    a = i === void 0 ? 'rc-dropdown' : i,
    l = e.transitionName,
    s = e.animation,
    c = e.align,
    f = e.placement,
    d = f === void 0 ? 'bottomLeft' : f,
    v = e.placements,
    h = v === void 0 ? EI : v,
    b = e.getPopupContainer,
    y = e.showAction,
    S = e.hideAction,
    p = e.overlayClassName,
    m = e.overlayStyle,
    g = e.visible,
    C = e.trigger,
    E = C === void 0 ? ['hover'] : C,
    w = e.autoFocus,
    x = e.overlay,
    O = e.children,
    P = e.onVisibleChange,
    _ = Ae(e, $I),
    M = G.useState(),
    L = H(M, 2),
    R = L[0],
    D = L[1],
    B = 'visible' in e ? g : R,
    k = G.useRef(null),
    T = G.useRef(null),
    $ = G.useRef(null);
  G.useImperativeHandle(t, function () {
    return k.current;
  });
  var N = function (Q) {
    D(Q), P == null || P(Q);
  };
  wI({
    visible: B,
    triggerRef: $,
    onVisibleChange: N,
    autoFocus: w,
    overlayRef: T,
  });
  var I = function (Q) {
      var ee = e.onOverlayClick;
      D(!1), ee && ee(Q);
    },
    F = function () {
      return G.createElement(xI, {
        ref: T,
        overlay: x,
        prefixCls: a,
        arrow: o,
      });
    },
    A = function () {
      return typeof x == 'function' ? F : F();
    },
    V = function () {
      var Q = e.minOverlayWidthMatchTrigger,
        ee = e.alignPoint;
      return 'minOverlayWidthMatchTrigger' in e ? Q : !ee;
    },
    U = function () {
      var Q = e.openClassName;
      return Q !== void 0 ? Q : ''.concat(a, '-open');
    },
    Y = G.cloneElement(O, {
      className: q(
        (n = O.props) === null || n === void 0 ? void 0 : n.className,
        B && U()
      ),
      ref: ui(O) ? ci($, O.ref) : void 0,
    }),
    te = S;
  return (
    !te && E.indexOf('contextMenu') !== -1 && (te = ['click']),
    G.createElement(
      Sp,
      ue({ builtinPlacements: h }, _, {
        prefixCls: a,
        ref: k,
        popupClassName: q(p, j({}, ''.concat(a, '-show-arrow'), o)),
        popupStyle: m,
        action: E,
        showAction: y,
        hideAction: te,
        popupPlacement: d,
        popupAlign: c,
        popupTransitionName: l,
        popupAnimation: s,
        popupVisible: B,
        stretch: V() ? 'minWidth' : '',
        popup: A(),
        onPopupVisibleChange: N,
        onPopupClick: I,
        getPopupContainer: b,
      }),
      Y
    )
  );
}
const PI = G.forwardRef(OI);
var JS = u.createContext(null);
function ew(e, t) {
  return e === void 0 ? null : ''.concat(e, '-').concat(t);
}
function tw(e) {
  var t = u.useContext(JS);
  return ew(t, e);
}
var RI = ['children', 'locked'],
  cr = u.createContext(null);
function TI(e, t) {
  var n = z({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      var o = t[r];
      o !== void 0 && (n[r] = o);
    }),
    n
  );
}
function kl(e) {
  var t = e.children,
    n = e.locked,
    r = Ae(e, RI),
    o = u.useContext(cr),
    i = Eu(
      function () {
        return TI(o, r);
      },
      [o, r],
      function (a, l) {
        return !n && (a[0] !== l[0] || !Pu(a[1], l[1], !0));
      }
    );
  return u.createElement(cr.Provider, { value: i }, t);
}
var _I = [],
  nw = u.createContext(null);
function zu() {
  return u.useContext(nw);
}
var rw = u.createContext(_I);
function ql(e) {
  var t = u.useContext(rw);
  return u.useMemo(
    function () {
      return e !== void 0 ? [].concat(ae(t), [e]) : t;
    },
    [t, e]
  );
}
var ow = u.createContext(null),
  Ep = u.createContext({});
function M0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (dp(e)) {
    var n = e.nodeName.toLowerCase(),
      r =
        ['input', 'select', 'textarea', 'button'].includes(n) ||
        e.isContentEditable ||
        (n === 'a' && !!e.getAttribute('href')),
      o = e.getAttribute('tabindex'),
      i = Number(o),
      a = null;
    return (
      o && !Number.isNaN(i) ? (a = i) : r && a === null && (a = 0),
      r && e.disabled && (a = null),
      a !== null && (a >= 0 || (t && a < 0))
    );
  }
  return !1;
}
function MI(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = ae(e.querySelectorAll('*')).filter(function (r) {
      return M0(r, t);
    });
  return M0(e, t) && n.unshift(e), n;
}
var Hv = re.LEFT,
  Vv = re.RIGHT,
  Wv = re.UP,
  ic = re.DOWN,
  ac = re.ENTER,
  iw = re.ESC,
  Da = re.HOME,
  Ba = re.END,
  I0 = [Wv, ic, Hv, Vv];
function II(e, t, n, r) {
  var o,
    i = 'prev',
    a = 'next',
    l = 'children',
    s = 'parent';
  if (e === 'inline' && r === ac) return { inlineTrigger: !0 };
  var c = j(j({}, Wv, i), ic, a),
    f = j(j(j(j({}, Hv, n ? a : i), Vv, n ? i : a), ic, l), ac, l),
    d = j(
      j(j(j(j(j({}, Wv, i), ic, a), ac, l), iw, s), Hv, n ? l : s),
      Vv,
      n ? s : l
    ),
    v = {
      inline: c,
      horizontal: f,
      vertical: d,
      inlineSub: c,
      horizontalSub: d,
      verticalSub: d,
    },
    h =
      (o = v[''.concat(e).concat(t ? '' : 'Sub')]) === null || o === void 0
        ? void 0
        : o[r];
  switch (h) {
    case i:
      return { offset: -1, sibling: !0 };
    case a:
      return { offset: 1, sibling: !0 };
    case s:
      return { offset: -1, sibling: !1 };
    case l:
      return { offset: 1, sibling: !1 };
    default:
      return null;
  }
}
function kI(e) {
  for (var t = e; t; ) {
    if (t.getAttribute('data-menu-list')) return t;
    t = t.parentElement;
  }
  return null;
}
function NI(e, t) {
  for (var n = e || document.activeElement; n; ) {
    if (t.has(n)) return n;
    n = n.parentElement;
  }
  return null;
}
function $p(e, t) {
  var n = MI(e, !0);
  return n.filter(function (r) {
    return t.has(r);
  });
}
function k0(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e) return null;
  var o = $p(e, t),
    i = o.length,
    a = o.findIndex(function (l) {
      return n === l;
    });
  return (
    r < 0 ? (a === -1 ? (a = i - 1) : (a -= 1)) : r > 0 && (a += 1),
    (a = (a + i) % i),
    o[a]
  );
}
var Uv = function (t, n) {
  var r = new Set(),
    o = new Map(),
    i = new Map();
  return (
    t.forEach(function (a) {
      var l = document.querySelector("[data-menu-id='".concat(ew(n, a), "']"));
      l && (r.add(l), i.set(l, a), o.set(a, l));
    }),
    { elements: r, key2element: o, element2key: i }
  );
};
function jI(e, t, n, r, o, i, a, l, s, c) {
  var f = u.useRef(),
    d = u.useRef();
  d.current = t;
  var v = function () {
    Zt.cancel(f.current);
  };
  return (
    u.useEffect(function () {
      return function () {
        v();
      };
    }, []),
    function (h) {
      var b = h.which;
      if ([].concat(I0, [ac, iw, Da, Ba]).includes(b)) {
        var y = i(),
          S = Uv(y, r),
          p = S,
          m = p.elements,
          g = p.key2element,
          C = p.element2key,
          E = g.get(t),
          w = NI(E, m),
          x = C.get(w),
          O = II(e, a(x, !0).length === 1, n, b);
        if (!O && b !== Da && b !== Ba) return;
        (I0.includes(b) || [Da, Ba].includes(b)) && h.preventDefault();
        var P = function (T) {
          if (T) {
            var $ = T,
              N = T.querySelector('a');
            N != null && N.getAttribute('href') && ($ = N);
            var I = C.get(T);
            l(I),
              v(),
              (f.current = Zt(function () {
                d.current === I && $.focus();
              }));
          }
        };
        if ([Da, Ba].includes(b) || O.sibling || !w) {
          var _;
          !w || e === 'inline' ? (_ = o.current) : (_ = kI(w));
          var M,
            L = $p(_, m);
          b === Da
            ? (M = L[0])
            : b === Ba
              ? (M = L[L.length - 1])
              : (M = k0(_, m, w, O.offset)),
            P(M);
        } else if (O.inlineTrigger) s(x);
        else if (O.offset > 0)
          s(x, !0),
            v(),
            (f.current = Zt(function () {
              S = Uv(y, r);
              var k = w.getAttribute('aria-controls'),
                T = document.getElementById(k),
                $ = k0(T, S.elements);
              P($);
            }, 5));
        else if (O.offset < 0) {
          var R = a(x, !0),
            D = R[R.length - 2],
            B = g.get(D);
          s(D, !1), P(B);
        }
      }
      c == null || c(h);
    }
  );
}
function LI(e) {
  Promise.resolve().then(e);
}
var Op = '__RC_UTIL_PATH_SPLIT__',
  N0 = function (t) {
    return t.join(Op);
  },
  FI = function (t) {
    return t.split(Op);
  },
  Kv = 'rc-menu-more';
function AI() {
  var e = u.useState({}),
    t = H(e, 2),
    n = t[1],
    r = u.useRef(new Map()),
    o = u.useRef(new Map()),
    i = u.useState([]),
    a = H(i, 2),
    l = a[0],
    s = a[1],
    c = u.useRef(0),
    f = u.useRef(!1),
    d = function () {
      f.current || n({});
    },
    v = u.useCallback(function (g, C) {
      var E = N0(C);
      o.current.set(E, g), r.current.set(g, E), (c.current += 1);
      var w = c.current;
      LI(function () {
        w === c.current && d();
      });
    }, []),
    h = u.useCallback(function (g, C) {
      var E = N0(C);
      o.current.delete(E), r.current.delete(g);
    }, []),
    b = u.useCallback(function (g) {
      s(g);
    }, []),
    y = u.useCallback(
      function (g, C) {
        var E = r.current.get(g) || '',
          w = FI(E);
        return C && l.includes(w[0]) && w.unshift(Kv), w;
      },
      [l]
    ),
    S = u.useCallback(
      function (g, C) {
        return g.some(function (E) {
          var w = y(E, !0);
          return w.includes(C);
        });
      },
      [y]
    ),
    p = function () {
      var C = ae(r.current.keys());
      return l.length && C.push(Kv), C;
    },
    m = u.useCallback(function (g) {
      var C = ''.concat(r.current.get(g)).concat(Op),
        E = new Set();
      return (
        ae(o.current.keys()).forEach(function (w) {
          w.startsWith(C) && E.add(o.current.get(w));
        }),
        E
      );
    }, []);
  return (
    u.useEffect(function () {
      return function () {
        f.current = !0;
      };
    }, []),
    {
      registerPath: v,
      unregisterPath: h,
      refreshOverflowKeys: b,
      isSubPathKey: S,
      getKeyPath: y,
      getKeys: p,
      getSubPathKeys: m,
    }
  );
}
function Ga(e) {
  var t = u.useRef(e);
  t.current = e;
  var n = u.useCallback(function () {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(i));
  }, []);
  return e ? n : void 0;
}
var zI = Math.random().toFixed(5).toString().slice(2),
  j0 = 0;
function DI(e) {
  var t = Qo(e, { value: e }),
    n = H(t, 2),
    r = n[0],
    o = n[1];
  return (
    u.useEffect(function () {
      j0 += 1;
      var i = ''.concat(zI, '-').concat(j0);
      o('rc-menu-uuid-'.concat(i));
    }, []),
    r
  );
}
function aw(e, t, n, r) {
  var o = u.useContext(cr),
    i = o.activeKey,
    a = o.onActive,
    l = o.onInactive,
    s = { active: i === e };
  return (
    t ||
      ((s.onMouseEnter = function (c) {
        n == null || n({ key: e, domEvent: c }), a(e);
      }),
      (s.onMouseLeave = function (c) {
        r == null || r({ key: e, domEvent: c }), l(e);
      })),
    s
  );
}
function lw(e) {
  var t = u.useContext(cr),
    n = t.mode,
    r = t.rtl,
    o = t.inlineIndent;
  if (n !== 'inline') return null;
  var i = e;
  return r ? { paddingRight: i * o } : { paddingLeft: i * o };
}
function sw(e) {
  var t = e.icon,
    n = e.props,
    r = e.children,
    o;
  return t === null || t === !1
    ? null
    : (typeof t == 'function'
        ? (o = u.createElement(t, z({}, n)))
        : typeof t != 'boolean' && (o = t),
      o || r || null);
}
var BI = ['item'];
function Uc(e) {
  var t = e.item,
    n = Ae(e, BI);
  return (
    Object.defineProperty(n, 'item', {
      get: function () {
        return (
          on(
            !1,
            '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.'
          ),
          t
        );
      },
    }),
    n
  );
}
var HI = ['title', 'attribute', 'elementRef'],
  VI = [
    'style',
    'className',
    'eventKey',
    'warnKey',
    'disabled',
    'itemIcon',
    'children',
    'role',
    'onMouseEnter',
    'onMouseLeave',
    'onClick',
    'onKeyDown',
    'onFocus',
  ],
  WI = ['active'],
  UI = (function (e) {
    fi(n, e);
    var t = zl(n);
    function n() {
      return hn(this, n), t.apply(this, arguments);
    }
    return (
      yn(n, [
        {
          key: 'render',
          value: function () {
            var o = this.props,
              i = o.title,
              a = o.attribute,
              l = o.elementRef,
              s = Ae(o, HI),
              c = di(s, [
                'eventKey',
                'popupClassName',
                'popupOffset',
                'onTitleClick',
              ]);
            return (
              on(
                !a,
                '`attribute` of Menu.Item is deprecated. Please pass attribute directly.'
              ),
              u.createElement(
                jr.Item,
                ue({}, a, { title: typeof i == 'string' ? i : void 0 }, c, {
                  ref: l,
                })
              )
            );
          },
        },
      ]),
      n
    );
  })(u.Component),
  KI = u.forwardRef(function (e, t) {
    var n = e.style,
      r = e.className,
      o = e.eventKey;
    e.warnKey;
    var i = e.disabled,
      a = e.itemIcon,
      l = e.children,
      s = e.role,
      c = e.onMouseEnter,
      f = e.onMouseLeave,
      d = e.onClick,
      v = e.onKeyDown,
      h = e.onFocus,
      b = Ae(e, VI),
      y = tw(o),
      S = u.useContext(cr),
      p = S.prefixCls,
      m = S.onItemClick,
      g = S.disabled,
      C = S.overflowDisabled,
      E = S.itemIcon,
      w = S.selectedKeys,
      x = S.onActive,
      O = u.useContext(Ep),
      P = O._internalRenderMenuItem,
      _ = ''.concat(p, '-item'),
      M = u.useRef(),
      L = u.useRef(),
      R = g || i,
      D = Ca(t, L),
      B = ql(o),
      k = function (ee) {
        return {
          key: o,
          keyPath: ae(B).reverse(),
          item: M.current,
          domEvent: ee,
        };
      },
      T = a || E,
      $ = aw(o, R, c, f),
      N = $.active,
      I = Ae($, WI),
      F = w.includes(o),
      A = lw(B.length),
      V = function (ee) {
        if (!R) {
          var se = k(ee);
          d == null || d(Uc(se)), m(se);
        }
      },
      U = function (ee) {
        if ((v == null || v(ee), ee.which === re.ENTER)) {
          var se = k(ee);
          d == null || d(Uc(se)), m(se);
        }
      },
      Y = function (ee) {
        x(o), h == null || h(ee);
      },
      te = {};
    e.role === 'option' && (te['aria-selected'] = F);
    var J = u.createElement(
      UI,
      ue(
        {
          ref: M,
          elementRef: D,
          role: s === null ? 'none' : s || 'menuitem',
          tabIndex: i ? null : -1,
          'data-menu-id': C && y ? null : y,
        },
        b,
        I,
        te,
        {
          component: 'li',
          'aria-disabled': i,
          style: z(z({}, A), n),
          className: q(
            _,
            j(
              j(
                j({}, ''.concat(_, '-active'), N),
                ''.concat(_, '-selected'),
                F
              ),
              ''.concat(_, '-disabled'),
              R
            ),
            r
          ),
          onClick: V,
          onKeyDown: U,
          onFocus: Y,
        }
      ),
      l,
      u.createElement(sw, {
        props: z(z({}, e), {}, { isSelected: F }),
        icon: T,
      })
    );
    return P && (J = P(J, e, { selected: F })), J;
  });
function GI(e, t) {
  var n = e.eventKey,
    r = zu(),
    o = ql(n);
  return (
    u.useEffect(
      function () {
        if (r)
          return (
            r.registerPath(n, o),
            function () {
              r.unregisterPath(n, o);
            }
          );
      },
      [o]
    ),
    r ? null : u.createElement(KI, ue({}, e, { ref: t }))
  );
}
const Du = u.forwardRef(GI);
var qI = ['className', 'children'],
  XI = function (t, n) {
    var r = t.className,
      o = t.children,
      i = Ae(t, qI),
      a = u.useContext(cr),
      l = a.prefixCls,
      s = a.mode,
      c = a.rtl;
    return u.createElement(
      'ul',
      ue(
        {
          className: q(
            l,
            c && ''.concat(l, '-rtl'),
            ''.concat(l, '-sub'),
            ''.concat(l, '-').concat(s === 'inline' ? 'inline' : 'vertical'),
            r
          ),
          role: 'menu',
        },
        i,
        { 'data-menu-list': !0, ref: n }
      ),
      o
    );
  },
  Pp = u.forwardRef(XI);
Pp.displayName = 'SubMenuList';
function Rp(e, t) {
  return ri(e).map(function (n, r) {
    if (u.isValidElement(n)) {
      var o,
        i,
        a = n.key,
        l =
          (o = (i = n.props) === null || i === void 0 ? void 0 : i.eventKey) !==
            null && o !== void 0
            ? o
            : a,
        s = l == null;
      s && (l = 'tmp_key-'.concat([].concat(ae(t), [r]).join('-')));
      var c = { key: l, eventKey: l };
      return u.cloneElement(n, c);
    }
    return n;
  });
}
var Qt = { adjustX: 1, adjustY: 1 },
  QI = {
    topLeft: { points: ['bl', 'tl'], overflow: Qt },
    topRight: { points: ['br', 'tr'], overflow: Qt },
    bottomLeft: { points: ['tl', 'bl'], overflow: Qt },
    bottomRight: { points: ['tr', 'br'], overflow: Qt },
    leftTop: { points: ['tr', 'tl'], overflow: Qt },
    leftBottom: { points: ['br', 'bl'], overflow: Qt },
    rightTop: { points: ['tl', 'tr'], overflow: Qt },
    rightBottom: { points: ['bl', 'br'], overflow: Qt },
  },
  YI = {
    topLeft: { points: ['bl', 'tl'], overflow: Qt },
    topRight: { points: ['br', 'tr'], overflow: Qt },
    bottomLeft: { points: ['tl', 'bl'], overflow: Qt },
    bottomRight: { points: ['tr', 'br'], overflow: Qt },
    rightTop: { points: ['tr', 'tl'], overflow: Qt },
    rightBottom: { points: ['br', 'bl'], overflow: Qt },
    leftTop: { points: ['tl', 'tr'], overflow: Qt },
    leftBottom: { points: ['bl', 'br'], overflow: Qt },
  };
function cw(e, t, n) {
  if (t) return t;
  if (n) return n[e] || n.other;
}
var ZI = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop',
};
function JI(e) {
  var t = e.prefixCls,
    n = e.visible,
    r = e.children,
    o = e.popup,
    i = e.popupStyle,
    a = e.popupClassName,
    l = e.popupOffset,
    s = e.disabled,
    c = e.mode,
    f = e.onVisibleChange,
    d = u.useContext(cr),
    v = d.getPopupContainer,
    h = d.rtl,
    b = d.subMenuOpenDelay,
    y = d.subMenuCloseDelay,
    S = d.builtinPlacements,
    p = d.triggerSubMenuAction,
    m = d.forceSubMenuRender,
    g = d.rootClassName,
    C = d.motion,
    E = d.defaultMotions,
    w = u.useState(!1),
    x = H(w, 2),
    O = x[0],
    P = x[1],
    _ = z(h ? z({}, YI) : z({}, QI), S),
    M = ZI[c],
    L = cw(c, C, E),
    R = u.useRef(L);
  c !== 'inline' && (R.current = L);
  var D = z(
      z({}, R.current),
      {},
      {
        leavedClassName: ''.concat(t, '-hidden'),
        removeOnLeave: !1,
        motionAppear: !0,
      }
    ),
    B = u.useRef();
  return (
    u.useEffect(
      function () {
        return (
          (B.current = Zt(function () {
            P(n);
          })),
          function () {
            Zt.cancel(B.current);
          }
        );
      },
      [n]
    ),
    u.createElement(
      Sp,
      {
        prefixCls: t,
        popupClassName: q(
          ''.concat(t, '-popup'),
          j({}, ''.concat(t, '-rtl'), h),
          a,
          g
        ),
        stretch: c === 'horizontal' ? 'minWidth' : null,
        getPopupContainer: v,
        builtinPlacements: _,
        popupPlacement: M,
        popupVisible: O,
        popup: o,
        popupStyle: i,
        popupAlign: l && { offset: l },
        action: s ? [] : [p],
        mouseEnterDelay: b,
        mouseLeaveDelay: y,
        onPopupVisibleChange: f,
        forceRender: m,
        popupMotion: D,
        fresh: !0,
      },
      r
    )
  );
}
function ek(e) {
  var t = e.id,
    n = e.open,
    r = e.keyPath,
    o = e.children,
    i = 'inline',
    a = u.useContext(cr),
    l = a.prefixCls,
    s = a.forceSubMenuRender,
    c = a.motion,
    f = a.defaultMotions,
    d = a.mode,
    v = u.useRef(!1);
  v.current = d === i;
  var h = u.useState(!v.current),
    b = H(h, 2),
    y = b[0],
    S = b[1],
    p = v.current ? n : !1;
  u.useEffect(
    function () {
      v.current && S(!1);
    },
    [d]
  );
  var m = z({}, cw(i, c, f));
  r.length > 1 && (m.motionAppear = !1);
  var g = m.onVisibleChanged;
  return (
    (m.onVisibleChanged = function (C) {
      return !v.current && !C && S(!0), g == null ? void 0 : g(C);
    }),
    y
      ? null
      : u.createElement(
          kl,
          { mode: i, locked: !v.current },
          u.createElement(
            Wr,
            ue({ visible: p }, m, {
              forceRender: s,
              removeOnLeave: !1,
              leavedClassName: ''.concat(l, '-hidden'),
            }),
            function (C) {
              var E = C.className,
                w = C.style;
              return u.createElement(Pp, { id: t, className: E, style: w }, o);
            }
          )
        )
  );
}
var tk = [
    'style',
    'className',
    'title',
    'eventKey',
    'warnKey',
    'disabled',
    'internalPopupClose',
    'children',
    'itemIcon',
    'expandIcon',
    'popupClassName',
    'popupOffset',
    'popupStyle',
    'onClick',
    'onMouseEnter',
    'onMouseLeave',
    'onTitleClick',
    'onTitleMouseEnter',
    'onTitleMouseLeave',
  ],
  nk = ['active'],
  rk = function (t) {
    var n = t.style,
      r = t.className,
      o = t.title,
      i = t.eventKey;
    t.warnKey;
    var a = t.disabled,
      l = t.internalPopupClose,
      s = t.children,
      c = t.itemIcon,
      f = t.expandIcon,
      d = t.popupClassName,
      v = t.popupOffset,
      h = t.popupStyle,
      b = t.onClick,
      y = t.onMouseEnter,
      S = t.onMouseLeave,
      p = t.onTitleClick,
      m = t.onTitleMouseEnter,
      g = t.onTitleMouseLeave,
      C = Ae(t, tk),
      E = tw(i),
      w = u.useContext(cr),
      x = w.prefixCls,
      O = w.mode,
      P = w.openKeys,
      _ = w.disabled,
      M = w.overflowDisabled,
      L = w.activeKey,
      R = w.selectedKeys,
      D = w.itemIcon,
      B = w.expandIcon,
      k = w.onItemClick,
      T = w.onOpenChange,
      $ = w.onActive,
      N = u.useContext(Ep),
      I = N._internalRenderSubMenuItem,
      F = u.useContext(ow),
      A = F.isSubPathKey,
      V = ql(),
      U = ''.concat(x, '-submenu'),
      Y = _ || a,
      te = u.useRef(),
      J = u.useRef(),
      Q = c ?? D,
      ee = f ?? B,
      se = P.includes(i),
      pe = !M && se,
      Le = A(R, i),
      he = aw(i, Y, m, g),
      Ce = he.active,
      ce = Ae(he, nk),
      Pe = u.useState(!1),
      $e = H(Pe, 2),
      ve = $e[0],
      Z = $e[1],
      fe = function (Qe) {
        Y || Z(Qe);
      },
      ge = function (Qe) {
        fe(!0), y == null || y({ key: i, domEvent: Qe });
      },
      Se = function (Qe) {
        fe(!1), S == null || S({ key: i, domEvent: Qe });
      },
      de = u.useMemo(
        function () {
          return Ce || (O !== 'inline' ? ve || A([L], i) : !1);
        },
        [O, Ce, L, ve, i, A]
      ),
      ze = lw(V.length),
      qe = function (Qe) {
        Y ||
          (p == null || p({ key: i, domEvent: Qe }),
          O === 'inline' && T(i, !se));
      },
      xe = Ga(function (et) {
        b == null || b(Uc(et)), k(et);
      }),
      Ut = function (Qe) {
        O !== 'inline' && T(i, Qe);
      },
      pt = function () {
        $(i);
      },
      Te = E && ''.concat(E, '-popup'),
      Ie = u.createElement(
        'div',
        ue(
          {
            role: 'menuitem',
            style: ze,
            className: ''.concat(U, '-title'),
            tabIndex: Y ? null : -1,
            ref: te,
            title: typeof o == 'string' ? o : null,
            'data-menu-id': M && E ? null : E,
            'aria-expanded': pe,
            'aria-haspopup': !0,
            'aria-controls': Te,
            'aria-disabled': Y,
            onClick: qe,
            onFocus: pt,
          },
          ce
        ),
        o,
        u.createElement(
          sw,
          {
            icon: O !== 'horizontal' ? ee : void 0,
            props: z(z({}, t), {}, { isOpen: pe, isSubMenu: !0 }),
          },
          u.createElement('i', { className: ''.concat(U, '-arrow') })
        )
      ),
      We = u.useRef(O);
    if (
      (O !== 'inline' && V.length > 1
        ? (We.current = 'vertical')
        : (We.current = O),
      !M)
    ) {
      var Mt = We.current;
      Ie = u.createElement(
        JI,
        {
          mode: Mt,
          prefixCls: U,
          visible: !l && pe && O !== 'inline',
          popupClassName: d,
          popupOffset: v,
          popupStyle: h,
          popup: u.createElement(
            kl,
            { mode: Mt === 'horizontal' ? 'vertical' : Mt },
            u.createElement(Pp, { id: Te, ref: J }, s)
          ),
          disabled: Y,
          onVisibleChange: Ut,
        },
        Ie
      );
    }
    var St = u.createElement(
      jr.Item,
      ue({ role: 'none' }, C, {
        component: 'li',
        style: n,
        className: q(
          U,
          ''.concat(U, '-').concat(O),
          r,
          j(
            j(
              j(j({}, ''.concat(U, '-open'), pe), ''.concat(U, '-active'), de),
              ''.concat(U, '-selected'),
              Le
            ),
            ''.concat(U, '-disabled'),
            Y
          )
        ),
        onMouseEnter: ge,
        onMouseLeave: Se,
      }),
      Ie,
      !M && u.createElement(ek, { id: Te, open: pe, keyPath: V }, s)
    );
    return (
      I && (St = I(St, t, { selected: Le, active: de, open: pe, disabled: Y })),
      u.createElement(
        kl,
        {
          onItemClick: xe,
          mode: O === 'horizontal' ? 'vertical' : O,
          itemIcon: Q,
          expandIcon: ee,
        },
        St
      )
    );
  };
function Tp(e) {
  var t = e.eventKey,
    n = e.children,
    r = ql(t),
    o = Rp(n, r),
    i = zu();
  u.useEffect(
    function () {
      if (i)
        return (
          i.registerPath(t, r),
          function () {
            i.unregisterPath(t, r);
          }
        );
    },
    [r]
  );
  var a;
  return (
    i ? (a = o) : (a = u.createElement(rk, e, o)),
    u.createElement(rw.Provider, { value: r }, a)
  );
}
var ok = ['className', 'title', 'eventKey', 'children'],
  ik = ['children'],
  ak = function (t) {
    var n = t.className,
      r = t.title;
    t.eventKey;
    var o = t.children,
      i = Ae(t, ok),
      a = u.useContext(cr),
      l = a.prefixCls,
      s = ''.concat(l, '-item-group');
    return u.createElement(
      'li',
      ue({ role: 'presentation' }, i, {
        onClick: function (f) {
          return f.stopPropagation();
        },
        className: q(s, n),
      }),
      u.createElement(
        'div',
        {
          role: 'presentation',
          className: ''.concat(s, '-title'),
          title: typeof r == 'string' ? r : void 0,
        },
        r
      ),
      u.createElement(
        'ul',
        { role: 'group', className: ''.concat(s, '-list') },
        o
      )
    );
  };
function uw(e) {
  var t = e.children,
    n = Ae(e, ik),
    r = ql(n.eventKey),
    o = Rp(t, r),
    i = zu();
  return i ? o : u.createElement(ak, di(n, ['warnKey']), o);
}
function fw(e) {
  var t = e.className,
    n = e.style,
    r = u.useContext(cr),
    o = r.prefixCls,
    i = zu();
  return i
    ? null
    : u.createElement('li', {
        role: 'separator',
        className: q(''.concat(o, '-item-divider'), t),
        style: n,
      });
}
var lk = ['label', 'children', 'key', 'type'];
function Gv(e) {
  return (e || [])
    .map(function (t, n) {
      if (t && ke(t) === 'object') {
        var r = t,
          o = r.label,
          i = r.children,
          a = r.key,
          l = r.type,
          s = Ae(r, lk),
          c = a ?? 'tmp-'.concat(n);
        return i || l === 'group'
          ? l === 'group'
            ? u.createElement(uw, ue({ key: c }, s, { title: o }), Gv(i))
            : u.createElement(Tp, ue({ key: c }, s, { title: o }), Gv(i))
          : l === 'divider'
            ? u.createElement(fw, ue({ key: c }, s))
            : u.createElement(Du, ue({ key: c }, s), o);
      }
      return null;
    })
    .filter(function (t) {
      return t;
    });
}
function sk(e, t, n) {
  var r = e;
  return t && (r = Gv(t)), Rp(r, n);
}
var ck = [
    'prefixCls',
    'rootClassName',
    'style',
    'className',
    'tabIndex',
    'items',
    'children',
    'direction',
    'id',
    'mode',
    'inlineCollapsed',
    'disabled',
    'disabledOverflow',
    'subMenuOpenDelay',
    'subMenuCloseDelay',
    'forceSubMenuRender',
    'defaultOpenKeys',
    'openKeys',
    'activeKey',
    'defaultActiveFirst',
    'selectable',
    'multiple',
    'defaultSelectedKeys',
    'selectedKeys',
    'onSelect',
    'onDeselect',
    'inlineIndent',
    'motion',
    'defaultMotions',
    'triggerSubMenuAction',
    'builtinPlacements',
    'itemIcon',
    'expandIcon',
    'overflowedIndicator',
    'overflowedIndicatorPopupClassName',
    'getPopupContainer',
    'onClick',
    'onOpenChange',
    'onKeyDown',
    'openAnimation',
    'openTransitionName',
    '_internalRenderMenuItem',
    '_internalRenderSubMenuItem',
  ],
  _i = [],
  uk = u.forwardRef(function (e, t) {
    var n,
      r = e,
      o = r.prefixCls,
      i = o === void 0 ? 'rc-menu' : o,
      a = r.rootClassName,
      l = r.style,
      s = r.className,
      c = r.tabIndex,
      f = c === void 0 ? 0 : c,
      d = r.items,
      v = r.children,
      h = r.direction,
      b = r.id,
      y = r.mode,
      S = y === void 0 ? 'vertical' : y,
      p = r.inlineCollapsed,
      m = r.disabled,
      g = r.disabledOverflow,
      C = r.subMenuOpenDelay,
      E = C === void 0 ? 0.1 : C,
      w = r.subMenuCloseDelay,
      x = w === void 0 ? 0.1 : w,
      O = r.forceSubMenuRender,
      P = r.defaultOpenKeys,
      _ = r.openKeys,
      M = r.activeKey,
      L = r.defaultActiveFirst,
      R = r.selectable,
      D = R === void 0 ? !0 : R,
      B = r.multiple,
      k = B === void 0 ? !1 : B,
      T = r.defaultSelectedKeys,
      $ = r.selectedKeys,
      N = r.onSelect,
      I = r.onDeselect,
      F = r.inlineIndent,
      A = F === void 0 ? 24 : F,
      V = r.motion,
      U = r.defaultMotions,
      Y = r.triggerSubMenuAction,
      te = Y === void 0 ? 'hover' : Y,
      J = r.builtinPlacements,
      Q = r.itemIcon,
      ee = r.expandIcon,
      se = r.overflowedIndicator,
      pe = se === void 0 ? '...' : se,
      Le = r.overflowedIndicatorPopupClassName,
      he = r.getPopupContainer,
      Ce = r.onClick,
      ce = r.onOpenChange,
      Pe = r.onKeyDown;
    r.openAnimation, r.openTransitionName;
    var $e = r._internalRenderMenuItem,
      ve = r._internalRenderSubMenuItem,
      Z = Ae(r, ck),
      fe = u.useMemo(
        function () {
          return sk(v, d, _i);
        },
        [v, d]
      ),
      ge = u.useState(!1),
      Se = H(ge, 2),
      de = Se[0],
      ze = Se[1],
      qe = u.useRef(),
      xe = DI(b),
      Ut = h === 'rtl',
      pt = Qo(P, {
        value: _,
        postState: function (Re) {
          return Re || _i;
        },
      }),
      Te = H(pt, 2),
      Ie = Te[0],
      We = Te[1],
      Mt = function (Re) {
        var Be =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        function At() {
          We(Re), ce == null || ce(Re);
        }
        Be ? ya.flushSync(At) : At();
      },
      St = u.useState(Ie),
      et = H(St, 2),
      Qe = et[0],
      tt = et[1],
      nt = u.useRef(!1),
      Lt = u.useMemo(
        function () {
          return (S === 'inline' || S === 'vertical') && p
            ? ['vertical', p]
            : [S, !1];
        },
        [S, p]
      ),
      ct = H(Lt, 2),
      Xe = ct[0],
      gt = ct[1],
      wt = Xe === 'inline',
      ht = u.useState(Xe),
      ye = H(ht, 2),
      me = ye[0],
      ot = ye[1],
      ne = u.useState(gt),
      le = H(ne, 2),
      Oe = le[0],
      Fe = le[1];
    u.useEffect(
      function () {
        ot(Xe), Fe(gt), nt.current && (wt ? We(Qe) : Mt(_i));
      },
      [Xe, gt]
    );
    var xt = u.useState(0),
      yt = H(xt, 2),
      un = yt[0],
      Kt = yt[1],
      Ft = un >= fe.length - 1 || me !== 'horizontal' || g;
    u.useEffect(
      function () {
        wt && tt(Ie);
      },
      [Ie]
    ),
      u.useEffect(function () {
        return (
          (nt.current = !0),
          function () {
            nt.current = !1;
          }
        );
      }, []);
    var Ot = AI(),
      kn = Ot.registerPath,
      Gt = Ot.unregisterPath,
      Ee = Ot.refreshOverflowKeys,
      we = Ot.isSubPathKey,
      Ue = Ot.getKeyPath,
      ut = Ot.getKeys,
      en = Ot.getSubPathKeys,
      It = u.useMemo(
        function () {
          return { registerPath: kn, unregisterPath: Gt };
        },
        [kn, Gt]
      ),
      fn = u.useMemo(
        function () {
          return { isSubPathKey: we };
        },
        [we]
      );
    u.useEffect(
      function () {
        Ee(
          Ft
            ? _i
            : fe.slice(un + 1).map(function (De) {
                return De.key;
              })
        );
      },
      [un, Ft]
    );
    var Kr = Qo(
        M || (L && ((n = fe[0]) === null || n === void 0 ? void 0 : n.key)),
        { value: M }
      ),
      ft = H(Kr, 2),
      tn = ft[0],
      br = ft[1],
      Gr = Ga(function (De) {
        br(De);
      }),
      qr = Ga(function () {
        br(void 0);
      });
    u.useImperativeHandle(t, function () {
      return {
        list: qe.current,
        focus: function (Re) {
          var Be,
            At = ut(),
            zt = Uv(At, xe),
            wr = zt.elements,
            To = zt.key2element,
            Ea = zt.element2key,
            hi = $p(qe.current, wr),
            _o =
              tn ??
              (hi[0]
                ? Ea.get(hi[0])
                : (Be = fe.find(function (yi) {
                      return !yi.props.disabled;
                    })) === null || Be === void 0
                  ? void 0
                  : Be.key),
            xr = To.get(_o);
          if (_o && xr) {
            var Mo;
            xr == null ||
              (Mo = xr.focus) === null ||
              Mo === void 0 ||
              Mo.call(xr, Re);
          }
        },
      };
    });
    var Gn = Qo(T || [], {
        value: $,
        postState: function (Re) {
          return Array.isArray(Re) ? Re : Re == null ? _i : [Re];
        },
      }),
      Ro = H(Gn, 2),
      Xr = Ro[0],
      Cr = Ro[1],
      pi = function (Re) {
        if (D) {
          var Be = Re.key,
            At = Xr.includes(Be),
            zt;
          k
            ? At
              ? (zt = Xr.filter(function (To) {
                  return To !== Be;
                }))
              : (zt = [].concat(ae(Xr), [Be]))
            : (zt = [Be]),
            Cr(zt);
          var wr = z(z({}, Re), {}, { selectedKeys: zt });
          At ? I == null || I(wr) : N == null || N(wr);
        }
        !k && Ie.length && me !== 'inline' && Mt(_i);
      },
      Qr = Ga(function (De) {
        Ce == null || Ce(Uc(De)), pi(De);
      }),
      Nn = Ga(function (De, Re) {
        var Be = Ie.filter(function (zt) {
          return zt !== De;
        });
        if (Re) Be.push(De);
        else if (me !== 'inline') {
          var At = en(De);
          Be = Be.filter(function (zt) {
            return !At.has(zt);
          });
        }
        Pu(Ie, Be, !0) || Mt(Be, !0);
      }),
      Sr = function (Re, Be) {
        var At = Be ?? !Ie.includes(Re);
        Nn(Re, At);
      },
      Yr = jI(me, tn, Ut, xe, qe, ut, Ue, br, Sr, Pe);
    u.useEffect(function () {
      ze(!0);
    }, []);
    var Zr = u.useMemo(
        function () {
          return {
            _internalRenderMenuItem: $e,
            _internalRenderSubMenuItem: ve,
          };
        },
        [$e, ve]
      ),
      qn =
        me !== 'horizontal' || g
          ? fe
          : fe.map(function (De, Re) {
              return u.createElement(
                kl,
                { key: De.key, overflowDisabled: Re > un },
                De
              );
            }),
      gi = u.createElement(
        jr,
        ue(
          {
            id: b,
            ref: qe,
            prefixCls: ''.concat(i, '-overflow'),
            component: 'ul',
            itemComponent: Du,
            className: q(
              i,
              ''.concat(i, '-root'),
              ''.concat(i, '-').concat(me),
              s,
              j(
                j({}, ''.concat(i, '-inline-collapsed'), Oe),
                ''.concat(i, '-rtl'),
                Ut
              ),
              a
            ),
            dir: h,
            style: l,
            role: 'menu',
            tabIndex: f,
            data: qn,
            renderRawItem: function (Re) {
              return Re;
            },
            renderRawRest: function (Re) {
              var Be = Re.length,
                At = Be ? fe.slice(-Be) : null;
              return u.createElement(
                Tp,
                {
                  eventKey: Kv,
                  title: pe,
                  disabled: Ft,
                  internalPopupClose: Be === 0,
                  popupClassName: Le,
                },
                At
              );
            },
            maxCount: me !== 'horizontal' || g ? jr.INVALIDATE : jr.RESPONSIVE,
            ssr: 'full',
            'data-menu-list': !0,
            onVisibleChange: function (Re) {
              Kt(Re);
            },
            onKeyDown: Yr,
          },
          Z
        )
      );
    return u.createElement(
      Ep.Provider,
      { value: Zr },
      u.createElement(
        JS.Provider,
        { value: xe },
        u.createElement(
          kl,
          {
            prefixCls: i,
            rootClassName: a,
            mode: me,
            openKeys: Ie,
            rtl: Ut,
            disabled: m,
            motion: de ? V : null,
            defaultMotions: de ? U : null,
            activeKey: tn,
            onActive: Gr,
            onInactive: qr,
            selectedKeys: Xr,
            inlineIndent: A,
            subMenuOpenDelay: E,
            subMenuCloseDelay: x,
            forceSubMenuRender: O,
            builtinPlacements: J,
            triggerSubMenuAction: te,
            getPopupContainer: he,
            itemIcon: Q,
            expandIcon: ee,
            onItemClick: Qr,
            onOpenChange: Nn,
          },
          u.createElement(ow.Provider, { value: fn }, gi),
          u.createElement(
            'div',
            { style: { display: 'none' }, 'aria-hidden': !0 },
            u.createElement(nw.Provider, { value: It }, fe)
          )
        )
      )
    );
  }),
  Xl = uk;
Xl.Item = Du;
Xl.SubMenu = Tp;
Xl.ItemGroup = uw;
Xl.Divider = fw;
var fk = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
        },
      },
    ],
  },
  name: 'ellipsis',
  theme: 'outlined',
};
const dk = fk;
var vk = function (t, n) {
  return u.createElement(Ur, ue({}, t, { ref: n, icon: dk }));
};
const mk = u.forwardRef(vk),
  pk = (e) => {
    const { prefixCls: t, className: n, style: r, size: o, shape: i } = e,
      a = q({ [`${t}-lg`]: o === 'large', [`${t}-sm`]: o === 'small' }),
      l = q({
        [`${t}-circle`]: i === 'circle',
        [`${t}-square`]: i === 'square',
        [`${t}-round`]: i === 'round',
      }),
      s = u.useMemo(
        () =>
          typeof o == 'number'
            ? { width: o, height: o, lineHeight: `${o}px` }
            : {},
        [o]
      );
    return u.createElement('span', {
      className: q(t, a, l, n),
      style: Object.assign(Object.assign({}, s), r),
    });
  },
  Bu = pk,
  gk = new st('ant-skeleton-loading', {
    '0%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0 50%' },
  }),
  Hu = (e) => ({ height: e, lineHeight: K(e) }),
  ta = (e) => Object.assign({ width: e }, Hu(e)),
  hk = (e) => ({
    background: e.skeletonLoadingBackground,
    backgroundSize: '400% 100%',
    animationName: gk,
    animationDuration: e.skeletonLoadingMotionDuration,
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite',
  }),
  Xf = (e, t) =>
    Object.assign(
      { width: t(e).mul(5).equal(), minWidth: t(e).mul(5).equal() },
      Hu(e)
    ),
  yk = (e) => {
    const {
      skeletonAvatarCls: t,
      gradientFromColor: n,
      controlHeight: r,
      controlHeightLG: o,
      controlHeightSM: i,
    } = e;
    return {
      [`${t}`]: Object.assign(
        { display: 'inline-block', verticalAlign: 'top', background: n },
        ta(r)
      ),
      [`${t}${t}-circle`]: { borderRadius: '50%' },
      [`${t}${t}-lg`]: Object.assign({}, ta(o)),
      [`${t}${t}-sm`]: Object.assign({}, ta(i)),
    };
  },
  bk = (e) => {
    const {
      controlHeight: t,
      borderRadiusSM: n,
      skeletonInputCls: r,
      controlHeightLG: o,
      controlHeightSM: i,
      gradientFromColor: a,
      calc: l,
    } = e;
    return {
      [`${r}`]: Object.assign(
        {
          display: 'inline-block',
          verticalAlign: 'top',
          background: a,
          borderRadius: n,
        },
        Xf(t, l)
      ),
      [`${r}-lg`]: Object.assign({}, Xf(o, l)),
      [`${r}-sm`]: Object.assign({}, Xf(i, l)),
    };
  },
  L0 = (e) => Object.assign({ width: e }, Hu(e)),
  Ck = (e) => {
    const {
      skeletonImageCls: t,
      imageSizeBase: n,
      gradientFromColor: r,
      borderRadiusSM: o,
      calc: i,
    } = e;
    return {
      [`${t}`]: Object.assign(
        Object.assign(
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            verticalAlign: 'top',
            background: r,
            borderRadius: o,
          },
          L0(i(n).mul(2).equal())
        ),
        {
          [`${t}-path`]: { fill: '#bfbfbf' },
          [`${t}-svg`]: Object.assign(Object.assign({}, L0(n)), {
            maxWidth: i(n).mul(4).equal(),
            maxHeight: i(n).mul(4).equal(),
          }),
          [`${t}-svg${t}-svg-circle`]: { borderRadius: '50%' },
        }
      ),
      [`${t}${t}-circle`]: { borderRadius: '50%' },
    };
  },
  Qf = (e, t, n) => {
    const { skeletonButtonCls: r } = e;
    return {
      [`${n}${r}-circle`]: { width: t, minWidth: t, borderRadius: '50%' },
      [`${n}${r}-round`]: { borderRadius: t },
    };
  },
  Yf = (e, t) =>
    Object.assign(
      { width: t(e).mul(2).equal(), minWidth: t(e).mul(2).equal() },
      Hu(e)
    ),
  Sk = (e) => {
    const {
      borderRadiusSM: t,
      skeletonButtonCls: n,
      controlHeight: r,
      controlHeightLG: o,
      controlHeightSM: i,
      gradientFromColor: a,
      calc: l,
    } = e;
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {
                [`${n}`]: Object.assign(
                  {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    background: a,
                    borderRadius: t,
                    width: l(r).mul(2).equal(),
                    minWidth: l(r).mul(2).equal(),
                  },
                  Yf(r, l)
                ),
              },
              Qf(e, r, n)
            ),
            { [`${n}-lg`]: Object.assign({}, Yf(o, l)) }
          ),
          Qf(e, o, `${n}-lg`)
        ),
        { [`${n}-sm`]: Object.assign({}, Yf(i, l)) }
      ),
      Qf(e, i, `${n}-sm`)
    );
  },
  wk = (e) => {
    const {
      componentCls: t,
      skeletonAvatarCls: n,
      skeletonTitleCls: r,
      skeletonParagraphCls: o,
      skeletonButtonCls: i,
      skeletonInputCls: a,
      skeletonImageCls: l,
      controlHeight: s,
      controlHeightLG: c,
      controlHeightSM: f,
      gradientFromColor: d,
      padding: v,
      marginSM: h,
      borderRadius: b,
      titleHeight: y,
      blockRadius: S,
      paragraphLiHeight: p,
      controlHeightXS: m,
      paragraphMarginTop: g,
    } = e;
    return {
      [`${t}`]: {
        display: 'table',
        width: '100%',
        [`${t}-header`]: {
          display: 'table-cell',
          paddingInlineEnd: v,
          verticalAlign: 'top',
          [`${n}`]: Object.assign(
            { display: 'inline-block', verticalAlign: 'top', background: d },
            ta(s)
          ),
          [`${n}-circle`]: { borderRadius: '50%' },
          [`${n}-lg`]: Object.assign({}, ta(c)),
          [`${n}-sm`]: Object.assign({}, ta(f)),
        },
        [`${t}-content`]: {
          display: 'table-cell',
          width: '100%',
          verticalAlign: 'top',
          [`${r}`]: {
            width: '100%',
            height: y,
            background: d,
            borderRadius: S,
            [`+ ${o}`]: { marginBlockStart: f },
          },
          [`${o}`]: {
            padding: 0,
            '> li': {
              width: '100%',
              height: p,
              listStyle: 'none',
              background: d,
              borderRadius: S,
              '+ li': { marginBlockStart: m },
            },
          },
          [`${o}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
            width: '61%',
          },
        },
        [`&-round ${t}-content`]: { [`${r}, ${o} > li`]: { borderRadius: b } },
      },
      [`${t}-with-avatar ${t}-content`]: {
        [`${r}`]: { marginBlockStart: h, [`+ ${o}`]: { marginBlockStart: g } },
      },
      [`${t}${t}-element`]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign({ display: 'inline-block', width: 'auto' }, Sk(e)),
            yk(e)
          ),
          bk(e)
        ),
        Ck(e)
      ),
      [`${t}${t}-block`]: {
        width: '100%',
        [`${i}`]: { width: '100%' },
        [`${a}`]: { width: '100%' },
      },
      [`${t}${t}-active`]: {
        [`
        ${r},
        ${o} > li,
        ${n},
        ${i},
        ${a},
        ${l}
      `]: Object.assign({}, hk(e)),
      },
    };
  },
  xk = (e) => {
    const { colorFillContent: t, colorFill: n } = e,
      r = t,
      o = n;
    return {
      color: r,
      colorGradientEnd: o,
      gradientFromColor: r,
      gradientToColor: o,
      titleHeight: e.controlHeight / 2,
      blockRadius: e.borderRadiusSM,
      paragraphMarginTop: e.marginLG + e.marginXXS,
      paragraphLiHeight: e.controlHeight / 2,
    };
  },
  wa = Oo(
    'Skeleton',
    (e) => {
      const { componentCls: t, calc: n } = e,
        r = bn(e, {
          skeletonAvatarCls: `${t}-avatar`,
          skeletonTitleCls: `${t}-title`,
          skeletonParagraphCls: `${t}-paragraph`,
          skeletonButtonCls: `${t}-button`,
          skeletonInputCls: `${t}-input`,
          skeletonImageCls: `${t}-image`,
          imageSizeBase: n(e.controlHeight).mul(1.5).equal(),
          borderRadius: 100,
          skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
          skeletonLoadingMotionDuration: '1.4s',
        });
      return [wk(r)];
    },
    xk,
    {
      deprecatedTokens: [
        ['color', 'gradientFromColor'],
        ['colorGradientEnd', 'gradientToColor'],
      ],
    }
  ),
  Ek = (e) => {
    const {
        prefixCls: t,
        className: n,
        rootClassName: r,
        active: o,
        shape: i = 'circle',
        size: a = 'default',
      } = e,
      { getPrefixCls: l } = u.useContext(Ge),
      s = l('skeleton', t),
      [c, f, d] = wa(s),
      v = di(e, ['prefixCls', 'className']),
      h = q(s, `${s}-element`, { [`${s}-active`]: o }, n, r, f, d);
    return c(
      u.createElement(
        'div',
        { className: h },
        u.createElement(
          Bu,
          Object.assign({ prefixCls: `${s}-avatar`, shape: i, size: a }, v)
        )
      )
    );
  },
  $k = Ek,
  Ok = (e) => {
    const {
        prefixCls: t,
        className: n,
        rootClassName: r,
        active: o,
        block: i = !1,
        size: a = 'default',
      } = e,
      { getPrefixCls: l } = u.useContext(Ge),
      s = l('skeleton', t),
      [c, f, d] = wa(s),
      v = di(e, ['prefixCls']),
      h = q(
        s,
        `${s}-element`,
        { [`${s}-active`]: o, [`${s}-block`]: i },
        n,
        r,
        f,
        d
      );
    return c(
      u.createElement(
        'div',
        { className: h },
        u.createElement(
          Bu,
          Object.assign({ prefixCls: `${s}-button`, size: a }, v)
        )
      )
    );
  },
  Pk = Ok,
  Rk =
    'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
  Tk = (e) => {
    const {
        prefixCls: t,
        className: n,
        rootClassName: r,
        style: o,
        active: i,
      } = e,
      { getPrefixCls: a } = u.useContext(Ge),
      l = a('skeleton', t),
      [s, c, f] = wa(l),
      d = q(l, `${l}-element`, { [`${l}-active`]: i }, n, r, c, f);
    return s(
      u.createElement(
        'div',
        { className: d },
        u.createElement(
          'div',
          { className: q(`${l}-image`, n), style: o },
          u.createElement(
            'svg',
            {
              viewBox: '0 0 1098 1024',
              xmlns: 'http://www.w3.org/2000/svg',
              className: `${l}-image-svg`,
            },
            u.createElement('path', { d: Rk, className: `${l}-image-path` })
          )
        )
      )
    );
  },
  _k = Tk,
  Mk = (e) => {
    const {
        prefixCls: t,
        className: n,
        rootClassName: r,
        active: o,
        block: i,
        size: a = 'default',
      } = e,
      { getPrefixCls: l } = u.useContext(Ge),
      s = l('skeleton', t),
      [c, f, d] = wa(s),
      v = di(e, ['prefixCls']),
      h = q(
        s,
        `${s}-element`,
        { [`${s}-active`]: o, [`${s}-block`]: i },
        n,
        r,
        f,
        d
      );
    return c(
      u.createElement(
        'div',
        { className: h },
        u.createElement(
          Bu,
          Object.assign({ prefixCls: `${s}-input`, size: a }, v)
        )
      )
    );
  },
  Ik = Mk;
var kk = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z',
        },
      },
    ],
  },
  name: 'dot-chart',
  theme: 'outlined',
};
const Nk = kk;
var jk = function (t, n) {
  return u.createElement(Ur, ue({}, t, { ref: n, icon: Nk }));
};
const Lk = u.forwardRef(jk),
  Fk = (e) => {
    const {
        prefixCls: t,
        className: n,
        rootClassName: r,
        style: o,
        active: i,
        children: a,
      } = e,
      { getPrefixCls: l } = u.useContext(Ge),
      s = l('skeleton', t),
      [c, f, d] = wa(s),
      v = q(s, `${s}-element`, { [`${s}-active`]: i }, f, n, r, d),
      h = a ?? u.createElement(Lk, null);
    return c(
      u.createElement(
        'div',
        { className: v },
        u.createElement('div', { className: q(`${s}-image`, n), style: o }, h)
      )
    );
  },
  Ak = Fk,
  zk = (e, t) => {
    const { width: n, rows: r = 2 } = t;
    if (Array.isArray(n)) return n[e];
    if (r - 1 === e) return n;
  },
  Dk = (e) => {
    const { prefixCls: t, className: n, style: r, rows: o } = e,
      i = ae(Array(o)).map((a, l) =>
        u.createElement('li', { key: l, style: { width: zk(l, e) } })
      );
    return u.createElement('ul', { className: q(t, n), style: r }, i);
  },
  Bk = Dk,
  Hk = (e) => {
    let { prefixCls: t, className: n, width: r, style: o } = e;
    return u.createElement('h3', {
      className: q(t, n),
      style: Object.assign({ width: r }, o),
    });
  },
  Vk = Hk;
function Zf(e) {
  return e && typeof e == 'object' ? e : {};
}
function Wk(e, t) {
  return e && !t
    ? { size: 'large', shape: 'square' }
    : { size: 'large', shape: 'circle' };
}
function Uk(e, t) {
  return !e && t ? { width: '38%' } : e && t ? { width: '50%' } : {};
}
function Kk(e, t) {
  const n = {};
  return (
    (!e || !t) && (n.width = '61%'), !e && t ? (n.rows = 3) : (n.rows = 2), n
  );
}
const xa = (e) => {
  const {
      prefixCls: t,
      loading: n,
      className: r,
      rootClassName: o,
      style: i,
      children: a,
      avatar: l = !1,
      title: s = !0,
      paragraph: c = !0,
      active: f,
      round: d,
    } = e,
    { getPrefixCls: v, direction: h, skeleton: b } = u.useContext(Ge),
    y = v('skeleton', t),
    [S, p, m] = wa(y);
  if (n || !('loading' in e)) {
    const g = !!l,
      C = !!s,
      E = !!c;
    let w;
    if (g) {
      const P = Object.assign(
        Object.assign({ prefixCls: `${y}-avatar` }, Wk(C, E)),
        Zf(l)
      );
      w = u.createElement(
        'div',
        { className: `${y}-header` },
        u.createElement(Bu, Object.assign({}, P))
      );
    }
    let x;
    if (C || E) {
      let P;
      if (C) {
        const M = Object.assign(
          Object.assign({ prefixCls: `${y}-title` }, Uk(g, E)),
          Zf(s)
        );
        P = u.createElement(Vk, Object.assign({}, M));
      }
      let _;
      if (E) {
        const M = Object.assign(
          Object.assign({ prefixCls: `${y}-paragraph` }, Kk(g, C)),
          Zf(c)
        );
        _ = u.createElement(Bk, Object.assign({}, M));
      }
      x = u.createElement('div', { className: `${y}-content` }, P, _);
    }
    const O = q(
      y,
      {
        [`${y}-with-avatar`]: g,
        [`${y}-active`]: f,
        [`${y}-rtl`]: h === 'rtl',
        [`${y}-round`]: d,
      },
      b == null ? void 0 : b.className,
      r,
      o,
      p,
      m
    );
    return S(
      u.createElement(
        'div',
        {
          className: O,
          style: Object.assign(
            Object.assign({}, b == null ? void 0 : b.style),
            i
          ),
        },
        w,
        x
      )
    );
  }
  return a ?? null;
};
xa.Button = Pk;
xa.Avatar = $k;
xa.Input = Ik;
xa.Image = _k;
xa.Node = Ak;
const Gk = xa;
var qk = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z',
        },
      },
    ],
  },
  name: 'plus',
  theme: 'outlined',
};
const Xk = qk;
var Qk = function (t, n) {
  return u.createElement(Ur, ue({}, t, { ref: n, icon: Xk }));
};
const Yk = u.forwardRef(Qk),
  Vu = u.createContext(null);
var Zk = function (t) {
    var n = t.activeTabOffset,
      r = t.horizontal,
      o = t.rtl,
      i = t.indicator,
      a = i === void 0 ? {} : i,
      l = a.size,
      s = a.align,
      c = s === void 0 ? 'center' : s,
      f = u.useState(),
      d = H(f, 2),
      v = d[0],
      h = d[1],
      b = u.useRef(),
      y = G.useCallback(
        function (p) {
          return typeof l == 'function' ? l(p) : typeof l == 'number' ? l : p;
        },
        [l]
      );
    function S() {
      Zt.cancel(b.current);
    }
    return (
      u.useEffect(
        function () {
          var p = {};
          if (n)
            if (r) {
              p.width = y(n.width);
              var m = o ? 'right' : 'left';
              c === 'start' && (p[m] = n[m]),
                c === 'center' &&
                  ((p[m] = n[m] + n.width / 2),
                  (p.transform = o ? 'translateX(50%)' : 'translateX(-50%)')),
                c === 'end' &&
                  ((p[m] = n[m] + n.width),
                  (p.transform = 'translateX(-100%)'));
            } else
              (p.height = y(n.height)),
                c === 'start' && (p.top = n.top),
                c === 'center' &&
                  ((p.top = n.top + n.height / 2),
                  (p.transform = 'translateY(-50%)')),
                c === 'end' &&
                  ((p.top = n.top + n.height),
                  (p.transform = 'translateY(-100%)'));
          return (
            S(),
            (b.current = Zt(function () {
              h(p);
            })),
            S
          );
        },
        [n, r, o, c, y]
      ),
      { style: v }
    );
  },
  F0 = { width: 0, height: 0, left: 0, top: 0 };
function Jk(e, t, n) {
  return u.useMemo(
    function () {
      for (
        var r,
          o = new Map(),
          i = t.get((r = e[0]) === null || r === void 0 ? void 0 : r.key) || F0,
          a = i.left + i.width,
          l = 0;
        l < e.length;
        l += 1
      ) {
        var s = e[l].key,
          c = t.get(s);
        if (!c) {
          var f;
          c =
            t.get((f = e[l - 1]) === null || f === void 0 ? void 0 : f.key) ||
            F0;
        }
        var d = o.get(s) || z({}, c);
        (d.right = a - d.left - d.width), o.set(s, d);
      }
      return o;
    },
    [
      e
        .map(function (r) {
          return r.key;
        })
        .join('_'),
      t,
      n,
    ]
  );
}
function A0(e, t) {
  var n = u.useRef(e),
    r = u.useState({}),
    o = H(r, 2),
    i = o[1];
  function a(l) {
    var s = typeof l == 'function' ? l(n.current) : l;
    s !== n.current && t(s, n.current), (n.current = s), i({});
  }
  return [n.current, a];
}
var eN = 0.1,
  z0 = 0.01,
  lc = 20,
  D0 = Math.pow(0.995, lc);
function tN(e, t) {
  var n = u.useState(),
    r = H(n, 2),
    o = r[0],
    i = r[1],
    a = u.useState(0),
    l = H(a, 2),
    s = l[0],
    c = l[1],
    f = u.useState(0),
    d = H(f, 2),
    v = d[0],
    h = d[1],
    b = u.useState(),
    y = H(b, 2),
    S = y[0],
    p = y[1],
    m = u.useRef();
  function g(P) {
    var _ = P.touches[0],
      M = _.screenX,
      L = _.screenY;
    i({ x: M, y: L }), window.clearInterval(m.current);
  }
  function C(P) {
    if (o) {
      P.preventDefault();
      var _ = P.touches[0],
        M = _.screenX,
        L = _.screenY;
      i({ x: M, y: L });
      var R = M - o.x,
        D = L - o.y;
      t(R, D);
      var B = Date.now();
      c(B), h(B - s), p({ x: R, y: D });
    }
  }
  function E() {
    if (o && (i(null), p(null), S)) {
      var P = S.x / v,
        _ = S.y / v,
        M = Math.abs(P),
        L = Math.abs(_);
      if (Math.max(M, L) < eN) return;
      var R = P,
        D = _;
      m.current = window.setInterval(function () {
        if (Math.abs(R) < z0 && Math.abs(D) < z0) {
          window.clearInterval(m.current);
          return;
        }
        (R *= D0), (D *= D0), t(R * lc, D * lc);
      }, lc);
    }
  }
  var w = u.useRef();
  function x(P) {
    var _ = P.deltaX,
      M = P.deltaY,
      L = 0,
      R = Math.abs(_),
      D = Math.abs(M);
    R === D
      ? (L = w.current === 'x' ? _ : M)
      : R > D
        ? ((L = _), (w.current = 'x'))
        : ((L = M), (w.current = 'y')),
      t(-L, -L) && P.preventDefault();
  }
  var O = u.useRef(null);
  (O.current = { onTouchStart: g, onTouchMove: C, onTouchEnd: E, onWheel: x }),
    u.useEffect(function () {
      function P(R) {
        O.current.onTouchStart(R);
      }
      function _(R) {
        O.current.onTouchMove(R);
      }
      function M(R) {
        O.current.onTouchEnd(R);
      }
      function L(R) {
        O.current.onWheel(R);
      }
      return (
        document.addEventListener('touchmove', _, { passive: !1 }),
        document.addEventListener('touchend', M, { passive: !1 }),
        e.current.addEventListener('touchstart', P, { passive: !1 }),
        e.current.addEventListener('wheel', L),
        function () {
          document.removeEventListener('touchmove', _),
            document.removeEventListener('touchend', M);
        }
      );
    }, []);
}
function dw(e) {
  var t = u.useState(0),
    n = H(t, 2),
    r = n[0],
    o = n[1],
    i = u.useRef(0),
    a = u.useRef();
  return (
    (a.current = e),
    sv(
      function () {
        var l;
        (l = a.current) === null || l === void 0 || l.call(a);
      },
      [r]
    ),
    function () {
      i.current === r && ((i.current += 1), o(i.current));
    }
  );
}
function nN(e) {
  var t = u.useRef([]),
    n = u.useState({}),
    r = H(n, 2),
    o = r[1],
    i = u.useRef(typeof e == 'function' ? e() : e),
    a = dw(function () {
      var s = i.current;
      t.current.forEach(function (c) {
        s = c(s);
      }),
        (t.current = []),
        (i.current = s),
        o({});
    });
  function l(s) {
    t.current.push(s), a();
  }
  return [i.current, l];
}
var B0 = { width: 0, height: 0, left: 0, top: 0, right: 0 };
function rN(e, t, n, r, o, i, a) {
  var l = a.tabs,
    s = a.tabPosition,
    c = a.rtl,
    f,
    d,
    v;
  return (
    ['top', 'bottom'].includes(s)
      ? ((f = 'width'), (d = c ? 'right' : 'left'), (v = Math.abs(n)))
      : ((f = 'height'), (d = 'top'), (v = -n)),
    u.useMemo(
      function () {
        if (!l.length) return [0, 0];
        for (var h = l.length, b = h, y = 0; y < h; y += 1) {
          var S = e.get(l[y].key) || B0;
          if (S[d] + S[f] > v + t) {
            b = y - 1;
            break;
          }
        }
        for (var p = 0, m = h - 1; m >= 0; m -= 1) {
          var g = e.get(l[m].key) || B0;
          if (g[d] < v) {
            p = m + 1;
            break;
          }
        }
        return p >= b ? [0, 0] : [p, b];
      },
      [
        e,
        t,
        r,
        o,
        i,
        v,
        s,
        l
          .map(function (h) {
            return h.key;
          })
          .join('_'),
        c,
      ]
    )
  );
}
function H0(e) {
  var t;
  return (
    e instanceof Map
      ? ((t = {}),
        e.forEach(function (n, r) {
          t[r] = n;
        }))
      : (t = e),
    JSON.stringify(t)
  );
}
var oN = 'TABS_DQ';
function vw(e) {
  return String(e).replace(/"/g, oN);
}
function mw(e, t, n, r) {
  return !(!n || r || e === !1 || (e === void 0 && (t === !1 || t === null)));
}
var pw = u.forwardRef(function (e, t) {
    var n = e.prefixCls,
      r = e.editable,
      o = e.locale,
      i = e.style;
    return !r || r.showAdd === !1
      ? null
      : u.createElement(
          'button',
          {
            ref: t,
            type: 'button',
            className: ''.concat(n, '-nav-add'),
            style: i,
            'aria-label': (o == null ? void 0 : o.addAriaLabel) || 'Add tab',
            onClick: function (l) {
              r.onEdit('add', { event: l });
            },
          },
          r.addIcon || '+'
        );
  }),
  V0 = u.forwardRef(function (e, t) {
    var n = e.position,
      r = e.prefixCls,
      o = e.extra;
    if (!o) return null;
    var i,
      a = {};
    return (
      ke(o) === 'object' && !u.isValidElement(o) ? (a = o) : (a.right = o),
      n === 'right' && (i = a.right),
      n === 'left' && (i = a.left),
      i
        ? u.createElement(
            'div',
            { className: ''.concat(r, '-extra-content'), ref: t },
            i
          )
        : null
    );
  }),
  iN = u.forwardRef(function (e, t) {
    var n = e.prefixCls,
      r = e.id,
      o = e.tabs,
      i = e.locale,
      a = e.mobile,
      l = e.moreIcon,
      s = l === void 0 ? 'More' : l,
      c = e.moreTransitionName,
      f = e.style,
      d = e.className,
      v = e.editable,
      h = e.tabBarGutter,
      b = e.rtl,
      y = e.removeAriaLabel,
      S = e.onTabClick,
      p = e.getPopupContainer,
      m = e.popupClassName,
      g = u.useState(!1),
      C = H(g, 2),
      E = C[0],
      w = C[1],
      x = u.useState(null),
      O = H(x, 2),
      P = O[0],
      _ = O[1],
      M = ''.concat(r, '-more-popup'),
      L = ''.concat(n, '-dropdown'),
      R = P !== null ? ''.concat(M, '-').concat(P) : null,
      D = i == null ? void 0 : i.dropdownAriaLabel;
    function B(A, V) {
      A.preventDefault(),
        A.stopPropagation(),
        v.onEdit('remove', { key: V, event: A });
    }
    var k = u.createElement(
      Xl,
      {
        onClick: function (V) {
          var U = V.key,
            Y = V.domEvent;
          S(U, Y), w(!1);
        },
        prefixCls: ''.concat(L, '-menu'),
        id: M,
        tabIndex: -1,
        role: 'listbox',
        'aria-activedescendant': R,
        selectedKeys: [P],
        'aria-label': D !== void 0 ? D : 'expanded dropdown',
      },
      o.map(function (A) {
        var V = A.closable,
          U = A.disabled,
          Y = A.closeIcon,
          te = A.key,
          J = A.label,
          Q = mw(V, Y, v, U);
        return u.createElement(
          Du,
          {
            key: te,
            id: ''.concat(M, '-').concat(te),
            role: 'option',
            'aria-controls': r && ''.concat(r, '-panel-').concat(te),
            disabled: U,
          },
          u.createElement('span', null, J),
          Q &&
            u.createElement(
              'button',
              {
                type: 'button',
                'aria-label': y || 'remove',
                tabIndex: 0,
                className: ''.concat(L, '-menu-item-remove'),
                onClick: function (se) {
                  se.stopPropagation(), B(se, te);
                },
              },
              Y || v.removeIcon || '×'
            )
        );
      })
    );
    function T(A) {
      for (
        var V = o.filter(function (Q) {
            return !Q.disabled;
          }),
          U =
            V.findIndex(function (Q) {
              return Q.key === P;
            }) || 0,
          Y = V.length,
          te = 0;
        te < Y;
        te += 1
      ) {
        U = (U + A + Y) % Y;
        var J = V[U];
        if (!J.disabled) {
          _(J.key);
          return;
        }
      }
    }
    function $(A) {
      var V = A.which;
      if (!E) {
        [re.DOWN, re.SPACE, re.ENTER].includes(V) &&
          (w(!0), A.preventDefault());
        return;
      }
      switch (V) {
        case re.UP:
          T(-1), A.preventDefault();
          break;
        case re.DOWN:
          T(1), A.preventDefault();
          break;
        case re.ESC:
          w(!1);
          break;
        case re.SPACE:
        case re.ENTER:
          P !== null && S(P, A);
          break;
      }
    }
    u.useEffect(
      function () {
        var A = document.getElementById(R);
        A && A.scrollIntoView && A.scrollIntoView(!1);
      },
      [P]
    ),
      u.useEffect(
        function () {
          E || _(null);
        },
        [E]
      );
    var N = j({}, b ? 'marginRight' : 'marginLeft', h);
    o.length || ((N.visibility = 'hidden'), (N.order = 1));
    var I = q(j({}, ''.concat(L, '-rtl'), b)),
      F = a
        ? null
        : u.createElement(
            PI,
            {
              prefixCls: L,
              overlay: k,
              trigger: ['hover'],
              visible: o.length ? E : !1,
              transitionName: c,
              onVisibleChange: w,
              overlayClassName: q(I, m),
              mouseEnterDelay: 0.1,
              mouseLeaveDelay: 0.1,
              getPopupContainer: p,
            },
            u.createElement(
              'button',
              {
                type: 'button',
                className: ''.concat(n, '-nav-more'),
                style: N,
                tabIndex: -1,
                'aria-hidden': 'true',
                'aria-haspopup': 'listbox',
                'aria-controls': M,
                id: ''.concat(r, '-more'),
                'aria-expanded': E,
                onKeyDown: $,
              },
              s
            )
          );
    return u.createElement(
      'div',
      { className: q(''.concat(n, '-nav-operations'), d), style: f, ref: t },
      F,
      u.createElement(pw, { prefixCls: n, locale: i, editable: v })
    );
  });
const aN = u.memo(iN, function (e, t) {
  return t.tabMoving;
});
var lN = function (t) {
    var n = t.prefixCls,
      r = t.id,
      o = t.active,
      i = t.tab,
      a = i.key,
      l = i.label,
      s = i.disabled,
      c = i.closeIcon,
      f = i.icon,
      d = t.closable,
      v = t.renderWrapper,
      h = t.removeAriaLabel,
      b = t.editable,
      y = t.onClick,
      S = t.onFocus,
      p = t.style,
      m = ''.concat(n, '-tab'),
      g = mw(d, c, b, s);
    function C(O) {
      s || y(O);
    }
    function E(O) {
      O.preventDefault(),
        O.stopPropagation(),
        b.onEdit('remove', { key: a, event: O });
    }
    var w = u.useMemo(
        function () {
          return f && typeof l == 'string'
            ? u.createElement('span', null, l)
            : l;
        },
        [l, f]
      ),
      x = u.createElement(
        'div',
        {
          key: a,
          'data-node-key': vw(a),
          className: q(
            m,
            j(
              j(
                j({}, ''.concat(m, '-with-remove'), g),
                ''.concat(m, '-active'),
                o
              ),
              ''.concat(m, '-disabled'),
              s
            )
          ),
          style: p,
          onClick: C,
        },
        u.createElement(
          'div',
          {
            role: 'tab',
            'aria-selected': o,
            id: r && ''.concat(r, '-tab-').concat(a),
            className: ''.concat(m, '-btn'),
            'aria-controls': r && ''.concat(r, '-panel-').concat(a),
            'aria-disabled': s,
            tabIndex: s ? null : 0,
            onClick: function (P) {
              P.stopPropagation(), C(P);
            },
            onKeyDown: function (P) {
              [re.SPACE, re.ENTER].includes(P.which) &&
                (P.preventDefault(), C(P));
            },
            onFocus: S,
          },
          f && u.createElement('span', { className: ''.concat(m, '-icon') }, f),
          l && w
        ),
        g &&
          u.createElement(
            'button',
            {
              type: 'button',
              'aria-label': h || 'remove',
              tabIndex: 0,
              className: ''.concat(m, '-remove'),
              onClick: function (P) {
                P.stopPropagation(), E(P);
              },
            },
            c || b.removeIcon || '×'
          )
      );
    return v ? v(x) : x;
  },
  sN = function (t, n) {
    var r = t.offsetWidth,
      o = t.offsetHeight,
      i = t.offsetTop,
      a = t.offsetLeft,
      l = t.getBoundingClientRect(),
      s = l.width,
      c = l.height,
      f = l.x,
      d = l.y;
    return Math.abs(s - r) < 1 ? [s, c, f - n.x, d - n.y] : [r, o, a, i];
  },
  Mi = function (t) {
    var n = t.current || {},
      r = n.offsetWidth,
      o = r === void 0 ? 0 : r,
      i = n.offsetHeight,
      a = i === void 0 ? 0 : i;
    if (t.current) {
      var l = t.current.getBoundingClientRect(),
        s = l.width,
        c = l.height;
      if (Math.abs(s - o) < 1) return [s, c];
    }
    return [o, a];
  },
  ks = function (t, n) {
    return t[n ? 0 : 1];
  },
  W0 = u.forwardRef(function (e, t) {
    var n = e.className,
      r = e.style,
      o = e.id,
      i = e.animated,
      a = e.activeKey,
      l = e.rtl,
      s = e.extra,
      c = e.editable,
      f = e.locale,
      d = e.tabPosition,
      v = e.tabBarGutter,
      h = e.children,
      b = e.onTabClick,
      y = e.onTabScroll,
      S = e.indicator,
      p = u.useContext(Vu),
      m = p.prefixCls,
      g = p.tabs,
      C = u.useRef(null),
      E = u.useRef(null),
      w = u.useRef(null),
      x = u.useRef(null),
      O = u.useRef(null),
      P = u.useRef(null),
      _ = u.useRef(null),
      M = d === 'top' || d === 'bottom',
      L = A0(0, function (Ee, we) {
        M && y && y({ direction: Ee > we ? 'left' : 'right' });
      }),
      R = H(L, 2),
      D = R[0],
      B = R[1],
      k = A0(0, function (Ee, we) {
        !M && y && y({ direction: Ee > we ? 'top' : 'bottom' });
      }),
      T = H(k, 2),
      $ = T[0],
      N = T[1],
      I = u.useState([0, 0]),
      F = H(I, 2),
      A = F[0],
      V = F[1],
      U = u.useState([0, 0]),
      Y = H(U, 2),
      te = Y[0],
      J = Y[1],
      Q = u.useState([0, 0]),
      ee = H(Q, 2),
      se = ee[0],
      pe = ee[1],
      Le = u.useState([0, 0]),
      he = H(Le, 2),
      Ce = he[0],
      ce = he[1],
      Pe = nN(new Map()),
      $e = H(Pe, 2),
      ve = $e[0],
      Z = $e[1],
      fe = Jk(g, ve, te[0]),
      ge = ks(A, M),
      Se = ks(te, M),
      de = ks(se, M),
      ze = ks(Ce, M),
      qe = ge < Se + de,
      xe = qe ? ge - ze : ge - de,
      Ut = ''.concat(m, '-nav-operations-hidden'),
      pt = 0,
      Te = 0;
    M && l
      ? ((pt = 0), (Te = Math.max(0, Se - xe)))
      : ((pt = Math.min(0, xe - Se)), (Te = 0));
    function Ie(Ee) {
      return Ee < pt ? pt : Ee > Te ? Te : Ee;
    }
    var We = u.useRef(null),
      Mt = u.useState(),
      St = H(Mt, 2),
      et = St[0],
      Qe = St[1];
    function tt() {
      Qe(Date.now());
    }
    function nt() {
      We.current && clearTimeout(We.current);
    }
    tN(x, function (Ee, we) {
      function Ue(ut, en) {
        ut(function (It) {
          var fn = Ie(It + en);
          return fn;
        });
      }
      return qe ? (M ? Ue(B, Ee) : Ue(N, we), nt(), tt(), !0) : !1;
    }),
      u.useEffect(
        function () {
          return (
            nt(),
            et &&
              (We.current = setTimeout(function () {
                Qe(0);
              }, 100)),
            nt
          );
        },
        [et]
      );
    var Lt = rN(fe, xe, M ? D : $, Se, de, ze, z(z({}, e), {}, { tabs: g })),
      ct = H(Lt, 2),
      Xe = ct[0],
      gt = ct[1],
      wt = $n(function () {
        var Ee =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a,
          we = fe.get(Ee) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
        if (M) {
          var Ue = D;
          l
            ? we.right < D
              ? (Ue = we.right)
              : we.right + we.width > D + xe && (Ue = we.right + we.width - xe)
            : we.left < -D
              ? (Ue = -we.left)
              : we.left + we.width > -D + xe &&
                (Ue = -(we.left + we.width - xe)),
            N(0),
            B(Ie(Ue));
        } else {
          var ut = $;
          we.top < -$
            ? (ut = -we.top)
            : we.top + we.height > -$ + xe && (ut = -(we.top + we.height - xe)),
            B(0),
            N(Ie(ut));
        }
      }),
      ht = {};
    d === 'top' || d === 'bottom'
      ? (ht[l ? 'marginRight' : 'marginLeft'] = v)
      : (ht.marginTop = v);
    var ye = g.map(function (Ee, we) {
        var Ue = Ee.key;
        return u.createElement(lN, {
          id: o,
          prefixCls: m,
          key: Ue,
          tab: Ee,
          style: we === 0 ? void 0 : ht,
          closable: Ee.closable,
          editable: c,
          active: Ue === a,
          renderWrapper: h,
          removeAriaLabel: f == null ? void 0 : f.removeAriaLabel,
          onClick: function (en) {
            b(Ue, en);
          },
          onFocus: function () {
            wt(Ue),
              tt(),
              x.current &&
                (l || (x.current.scrollLeft = 0), (x.current.scrollTop = 0));
          },
        });
      }),
      me = function () {
        return Z(function () {
          var we,
            Ue = new Map(),
            ut =
              (we = O.current) === null || we === void 0
                ? void 0
                : we.getBoundingClientRect();
          return (
            g.forEach(function (en) {
              var It,
                fn = en.key,
                Kr =
                  (It = O.current) === null || It === void 0
                    ? void 0
                    : It.querySelector('[data-node-key="'.concat(vw(fn), '"]'));
              if (Kr) {
                var ft = sN(Kr, ut),
                  tn = H(ft, 4),
                  br = tn[0],
                  Gr = tn[1],
                  qr = tn[2],
                  Gn = tn[3];
                Ue.set(fn, { width: br, height: Gr, left: qr, top: Gn });
              }
            }),
            Ue
          );
        });
      };
    u.useEffect(
      function () {
        me();
      },
      [
        g
          .map(function (Ee) {
            return Ee.key;
          })
          .join('_'),
      ]
    );
    var ot = dw(function () {
        var Ee = Mi(C),
          we = Mi(E),
          Ue = Mi(w);
        V([Ee[0] - we[0] - Ue[0], Ee[1] - we[1] - Ue[1]]);
        var ut = Mi(_);
        pe(ut);
        var en = Mi(P);
        ce(en);
        var It = Mi(O);
        J([It[0] - ut[0], It[1] - ut[1]]), me();
      }),
      ne = g.slice(0, Xe),
      le = g.slice(gt + 1),
      Oe = [].concat(ae(ne), ae(le)),
      Fe = fe.get(a),
      xt = Zk({ activeTabOffset: Fe, horizontal: M, indicator: S, rtl: l }),
      yt = xt.style;
    u.useEffect(
      function () {
        wt();
      },
      [a, pt, Te, H0(Fe), H0(fe), M]
    ),
      u.useEffect(
        function () {
          ot();
        },
        [l]
      );
    var un = !!Oe.length,
      Kt = ''.concat(m, '-nav-wrap'),
      Ft,
      Ot,
      kn,
      Gt;
    return (
      M
        ? l
          ? ((Ot = D > 0), (Ft = D !== Te))
          : ((Ft = D < 0), (Ot = D !== pt))
        : ((kn = $ < 0), (Gt = $ !== pt)),
      u.createElement(
        Nr,
        { onResize: ot },
        u.createElement(
          'div',
          {
            ref: Ca(t, C),
            role: 'tablist',
            className: q(''.concat(m, '-nav'), n),
            style: r,
            onKeyDown: function () {
              tt();
            },
          },
          u.createElement(V0, {
            ref: E,
            position: 'left',
            extra: s,
            prefixCls: m,
          }),
          u.createElement(
            Nr,
            { onResize: ot },
            u.createElement(
              'div',
              {
                className: q(
                  Kt,
                  j(
                    j(
                      j(
                        j({}, ''.concat(Kt, '-ping-left'), Ft),
                        ''.concat(Kt, '-ping-right'),
                        Ot
                      ),
                      ''.concat(Kt, '-ping-top'),
                      kn
                    ),
                    ''.concat(Kt, '-ping-bottom'),
                    Gt
                  )
                ),
                ref: x,
              },
              u.createElement(
                Nr,
                { onResize: ot },
                u.createElement(
                  'div',
                  {
                    ref: O,
                    className: ''.concat(m, '-nav-list'),
                    style: {
                      transform: 'translate('
                        .concat(D, 'px, ')
                        .concat($, 'px)'),
                      transition: et ? 'none' : void 0,
                    },
                  },
                  ye,
                  u.createElement(pw, {
                    ref: _,
                    prefixCls: m,
                    locale: f,
                    editable: c,
                    style: z(
                      z({}, ye.length === 0 ? void 0 : ht),
                      {},
                      { visibility: un ? 'hidden' : null }
                    ),
                  }),
                  u.createElement('div', {
                    className: q(
                      ''.concat(m, '-ink-bar'),
                      j({}, ''.concat(m, '-ink-bar-animated'), i.inkBar)
                    ),
                    style: yt,
                  })
                )
              )
            )
          ),
          u.createElement(
            aN,
            ue({}, e, {
              removeAriaLabel: f == null ? void 0 : f.removeAriaLabel,
              ref: P,
              prefixCls: m,
              tabs: Oe,
              className: !un && Ut,
              tabMoving: !!et,
            })
          ),
          u.createElement(V0, {
            ref: w,
            position: 'right',
            extra: s,
            prefixCls: m,
          })
        )
      )
    );
  }),
  gw = u.forwardRef(function (e, t) {
    var n = e.prefixCls,
      r = e.className,
      o = e.style,
      i = e.id,
      a = e.active,
      l = e.tabKey,
      s = e.children;
    return u.createElement(
      'div',
      {
        id: i && ''.concat(i, '-panel-').concat(l),
        role: 'tabpanel',
        tabIndex: a ? 0 : -1,
        'aria-labelledby': i && ''.concat(i, '-tab-').concat(l),
        'aria-hidden': !a,
        style: o,
        className: q(n, a && ''.concat(n, '-active'), r),
        ref: t,
      },
      s
    );
  }),
  cN = ['renderTabBar'],
  uN = ['label', 'key'],
  fN = function (t) {
    var n = t.renderTabBar,
      r = Ae(t, cN),
      o = u.useContext(Vu),
      i = o.tabs;
    if (n) {
      var a = z(
        z({}, r),
        {},
        {
          panes: i.map(function (l) {
            var s = l.label,
              c = l.key,
              f = Ae(l, uN);
            return u.createElement(gw, ue({ tab: s, key: c, tabKey: c }, f));
          }),
        }
      );
      return n(a, W0);
    }
    return u.createElement(W0, r);
  },
  dN = ['key', 'forceRender', 'style', 'className', 'destroyInactiveTabPane'],
  vN = function (t) {
    var n = t.id,
      r = t.activeKey,
      o = t.animated,
      i = t.tabPosition,
      a = t.destroyInactiveTabPane,
      l = u.useContext(Vu),
      s = l.prefixCls,
      c = l.tabs,
      f = o.tabPane,
      d = ''.concat(s, '-tabpane');
    return u.createElement(
      'div',
      { className: q(''.concat(s, '-content-holder')) },
      u.createElement(
        'div',
        {
          className: q(
            ''.concat(s, '-content'),
            ''.concat(s, '-content-').concat(i),
            j({}, ''.concat(s, '-content-animated'), f)
          ),
        },
        c.map(function (v) {
          var h = v.key,
            b = v.forceRender,
            y = v.style,
            S = v.className,
            p = v.destroyInactiveTabPane,
            m = Ae(v, dN),
            g = h === r;
          return u.createElement(
            Wr,
            ue(
              {
                key: h,
                visible: g,
                forceRender: b,
                removeOnLeave: !!(a || p),
                leavedClassName: ''.concat(d, '-hidden'),
              },
              o.tabPaneMotion
            ),
            function (C, E) {
              var w = C.style,
                x = C.className;
              return u.createElement(
                gw,
                ue({}, m, {
                  prefixCls: d,
                  id: n,
                  tabKey: h,
                  animated: f,
                  active: g,
                  style: z(z({}, y), w),
                  className: q(S, x),
                  ref: E,
                })
              );
            }
          );
        })
      )
    );
  };
function mN() {
  var e =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : { inkBar: !0, tabPane: !1 },
    t;
  return (
    e === !1
      ? (t = { inkBar: !1, tabPane: !1 })
      : e === !0
        ? (t = { inkBar: !0, tabPane: !1 })
        : (t = z({ inkBar: !0 }, ke(e) === 'object' ? e : {})),
    t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0),
    !t.tabPaneMotion && t.tabPane && (t.tabPane = !1),
    t
  );
}
var pN = [
    'id',
    'prefixCls',
    'className',
    'items',
    'direction',
    'activeKey',
    'defaultActiveKey',
    'editable',
    'animated',
    'tabPosition',
    'tabBarGutter',
    'tabBarStyle',
    'tabBarExtraContent',
    'locale',
    'moreIcon',
    'moreTransitionName',
    'destroyInactiveTabPane',
    'renderTabBar',
    'onChange',
    'onTabClick',
    'onTabScroll',
    'getPopupContainer',
    'popupClassName',
    'indicator',
  ],
  U0 = 0,
  gN = u.forwardRef(function (e, t) {
    var n = e.id,
      r = e.prefixCls,
      o = r === void 0 ? 'rc-tabs' : r,
      i = e.className,
      a = e.items,
      l = e.direction,
      s = e.activeKey,
      c = e.defaultActiveKey,
      f = e.editable,
      d = e.animated,
      v = e.tabPosition,
      h = v === void 0 ? 'top' : v,
      b = e.tabBarGutter,
      y = e.tabBarStyle,
      S = e.tabBarExtraContent,
      p = e.locale,
      m = e.moreIcon,
      g = e.moreTransitionName,
      C = e.destroyInactiveTabPane,
      E = e.renderTabBar,
      w = e.onChange,
      x = e.onTabClick,
      O = e.onTabScroll,
      P = e.getPopupContainer,
      _ = e.popupClassName,
      M = e.indicator,
      L = Ae(e, pN),
      R = u.useMemo(
        function () {
          return (a || []).filter(function (ce) {
            return ce && ke(ce) === 'object' && 'key' in ce;
          });
        },
        [a]
      ),
      D = l === 'rtl',
      B = mN(d),
      k = u.useState(!1),
      T = H(k, 2),
      $ = T[0],
      N = T[1];
    u.useEffect(function () {
      N(FS());
    }, []);
    var I = Qo(
        function () {
          var ce;
          return (ce = R[0]) === null || ce === void 0 ? void 0 : ce.key;
        },
        { value: s, defaultValue: c }
      ),
      F = H(I, 2),
      A = F[0],
      V = F[1],
      U = u.useState(function () {
        return R.findIndex(function (ce) {
          return ce.key === A;
        });
      }),
      Y = H(U, 2),
      te = Y[0],
      J = Y[1];
    u.useEffect(
      function () {
        var ce = R.findIndex(function ($e) {
          return $e.key === A;
        });
        if (ce === -1) {
          var Pe;
          (ce = Math.max(0, Math.min(te, R.length - 1))),
            V((Pe = R[ce]) === null || Pe === void 0 ? void 0 : Pe.key);
        }
        J(ce);
      },
      [
        R.map(function (ce) {
          return ce.key;
        }).join('_'),
        A,
        te,
      ]
    );
    var Q = Qo(null, { value: n }),
      ee = H(Q, 2),
      se = ee[0],
      pe = ee[1];
    u.useEffect(function () {
      n || (pe('rc-tabs-'.concat(U0)), (U0 += 1));
    }, []);
    function Le(ce, Pe) {
      x == null || x(ce, Pe);
      var $e = ce !== A;
      V(ce), $e && (w == null || w(ce));
    }
    var he = {
        id: se,
        activeKey: A,
        animated: B,
        tabPosition: h,
        rtl: D,
        mobile: $,
      },
      Ce = z(
        z({}, he),
        {},
        {
          editable: f,
          locale: p,
          moreIcon: m,
          moreTransitionName: g,
          tabBarGutter: b,
          onTabClick: Le,
          onTabScroll: O,
          extra: S,
          style: y,
          panes: null,
          getPopupContainer: P,
          popupClassName: _,
          indicator: M,
        }
      );
    return u.createElement(
      Vu.Provider,
      { value: { tabs: R, prefixCls: o } },
      u.createElement(
        'div',
        ue(
          {
            ref: t,
            id: n,
            className: q(
              o,
              ''.concat(o, '-').concat(h),
              j(
                j(
                  j({}, ''.concat(o, '-mobile'), $),
                  ''.concat(o, '-editable'),
                  f
                ),
                ''.concat(o, '-rtl'),
                D
              ),
              i
            ),
          },
          L
        ),
        u.createElement(fN, ue({}, Ce, { renderTabBar: E })),
        u.createElement(
          vN,
          ue({ destroyInactiveTabPane: C }, he, { animated: B })
        )
      )
    );
  });
const hN = { motionAppear: !1, motionEnter: !0, motionLeave: !0 };
function yN(e) {
  let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { inkBar: !0, tabPane: !1 },
    n;
  return (
    t === !1
      ? (n = { inkBar: !1, tabPane: !1 })
      : t === !0
        ? (n = { inkBar: !0, tabPane: !0 })
        : (n = Object.assign({ inkBar: !0 }, typeof t == 'object' ? t : {})),
    n.tabPane &&
      (n.tabPaneMotion = Object.assign(Object.assign({}, hN), {
        motionName: ai(e, 'switch'),
      })),
    n
  );
}
var bN = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
function CN(e) {
  return e.filter((t) => t);
}
function SN(e, t) {
  if (e) return e;
  const n = ri(t).map((r) => {
    if (u.isValidElement(r)) {
      const { key: o, props: i } = r,
        a = i || {},
        { tab: l } = a,
        s = bN(a, ['tab']);
      return Object.assign(Object.assign({ key: String(o) }, s), { label: l });
    }
    return null;
  });
  return CN(n);
}
const wN = (e) => {
    const { componentCls: t, motionDurationSlow: n } = e;
    return [
      {
        [t]: {
          [`${t}-switch`]: {
            '&-appear, &-enter': {
              transition: 'none',
              '&-start': { opacity: 0 },
              '&-active': { opacity: 1, transition: `opacity ${n}` },
            },
            '&-leave': {
              position: 'absolute',
              transition: 'none',
              inset: 0,
              '&-start': { opacity: 1 },
              '&-active': { opacity: 0, transition: `opacity ${n}` },
            },
          },
        },
      },
      [h0(e, 'slide-up'), h0(e, 'slide-down')],
    ];
  },
  xN = wN,
  EN = (e) => {
    const {
      componentCls: t,
      tabsCardPadding: n,
      cardBg: r,
      cardGutter: o,
      colorBorderSecondary: i,
      itemSelectedColor: a,
    } = e;
    return {
      [`${t}-card`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            margin: 0,
            padding: n,
            background: r,
            border: `${K(e.lineWidth)} ${e.lineType} ${i}`,
            transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
          [`${t}-tab-active`]: { color: a, background: e.colorBgContainer },
          [`${t}-ink-bar`]: { visibility: 'hidden' },
        },
        [`&${t}-top, &${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginLeft: { _skip_check_: !0, value: K(o) },
            },
          },
        },
        [`&${t}-top`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `${K(e.borderRadiusLG)} ${K(e.borderRadiusLG)} 0 0`,
            },
            [`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer },
          },
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `0 0 ${K(e.borderRadiusLG)} ${K(e.borderRadiusLG)}`,
            },
            [`${t}-tab-active`]: { borderTopColor: e.colorBgContainer },
          },
        },
        [`&${t}-left, &${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: { marginTop: K(o) },
          },
        },
        [`&${t}-left`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${K(e.borderRadiusLG)} 0 0 ${K(e.borderRadiusLG)}`,
              },
            },
            [`${t}-tab-active`]: {
              borderRightColor: { _skip_check_: !0, value: e.colorBgContainer },
            },
          },
        },
        [`&${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${K(e.borderRadiusLG)} ${K(e.borderRadiusLG)} 0`,
              },
            },
            [`${t}-tab-active`]: {
              borderLeftColor: { _skip_check_: !0, value: e.colorBgContainer },
            },
          },
        },
      },
    };
  },
  $N = (e) => {
    const {
      componentCls: t,
      itemHoverColor: n,
      dropdownEdgeChildVerticalPadding: r,
    } = e;
    return {
      [`${t}-dropdown`]: Object.assign(Object.assign({}, vi(e)), {
        position: 'absolute',
        top: -9999,
        left: { _skip_check_: !0, value: -9999 },
        zIndex: e.zIndexPopup,
        display: 'block',
        '&-hidden': { display: 'none' },
        [`${t}-dropdown-menu`]: {
          maxHeight: e.tabsDropdownHeight,
          margin: 0,
          padding: `${K(r)} 0`,
          overflowX: 'hidden',
          overflowY: 'auto',
          textAlign: { _skip_check_: !0, value: 'left' },
          listStyleType: 'none',
          backgroundColor: e.colorBgContainer,
          backgroundClip: 'padding-box',
          borderRadius: e.borderRadiusLG,
          outline: 'none',
          boxShadow: e.boxShadowSecondary,
          '&-item': Object.assign(Object.assign({}, ap), {
            display: 'flex',
            alignItems: 'center',
            minWidth: e.tabsDropdownWidth,
            margin: 0,
            padding: `${K(e.paddingXXS)} ${K(e.paddingSM)}`,
            color: e.colorText,
            fontWeight: 'normal',
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            cursor: 'pointer',
            transition: `all ${e.motionDurationSlow}`,
            '> span': { flex: 1, whiteSpace: 'nowrap' },
            '&-remove': {
              flex: 'none',
              marginLeft: { _skip_check_: !0, value: e.marginSM },
              color: e.colorTextDescription,
              fontSize: e.fontSizeSM,
              background: 'transparent',
              border: 0,
              cursor: 'pointer',
              '&:hover': { color: n },
            },
            '&:hover': { background: e.controlItemBgHover },
            '&-disabled': {
              '&, &:hover': {
                color: e.colorTextDisabled,
                background: 'transparent',
                cursor: 'not-allowed',
              },
            },
          }),
        },
      }),
    };
  },
  ON = (e) => {
    const {
      componentCls: t,
      margin: n,
      colorBorderSecondary: r,
      horizontalMargin: o,
      verticalItemPadding: i,
      verticalItemMargin: a,
      calc: l,
    } = e;
    return {
      [`${t}-top, ${t}-bottom`]: {
        flexDirection: 'column',
        [`> ${t}-nav, > div > ${t}-nav`]: {
          margin: o,
          '&::before': {
            position: 'absolute',
            right: { _skip_check_: !0, value: 0 },
            left: { _skip_check_: !0, value: 0 },
            borderBottom: `${K(e.lineWidth)} ${e.lineType} ${r}`,
            content: "''",
          },
          [`${t}-ink-bar`]: {
            height: e.lineWidthBold,
            '&-animated': {
              transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`,
            },
          },
          [`${t}-nav-wrap`]: {
            '&::before, &::after': {
              top: 0,
              bottom: 0,
              width: e.controlHeight,
            },
            '&::before': {
              left: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowLeft,
            },
            '&::after': {
              right: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowRight,
            },
            [`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 },
          },
        },
      },
      [`${t}-top`]: {
        [`> ${t}-nav,
        > div > ${t}-nav`]: {
          '&::before': { bottom: 0 },
          [`${t}-ink-bar`]: { bottom: 0 },
        },
      },
      [`${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          marginTop: n,
          marginBottom: 0,
          '&::before': { top: 0 },
          [`${t}-ink-bar`]: { top: 0 },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: { order: 0 },
      },
      [`${t}-left, ${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          flexDirection: 'column',
          minWidth: l(e.controlHeight).mul(1.25).equal(),
          [`${t}-tab`]: { padding: i, textAlign: 'center' },
          [`${t}-tab + ${t}-tab`]: { margin: a },
          [`${t}-nav-wrap`]: {
            flexDirection: 'column',
            '&::before, &::after': {
              right: { _skip_check_: !0, value: 0 },
              left: { _skip_check_: !0, value: 0 },
              height: e.controlHeight,
            },
            '&::before': { top: 0, boxShadow: e.boxShadowTabsOverflowTop },
            '&::after': { bottom: 0, boxShadow: e.boxShadowTabsOverflowBottom },
            [`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 },
          },
          [`${t}-ink-bar`]: {
            width: e.lineWidthBold,
            '&-animated': {
              transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`,
            },
          },
          [`${t}-nav-list, ${t}-nav-operations`]: {
            flex: '1 0 auto',
            flexDirection: 'column',
          },
        },
      },
      [`${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          marginLeft: {
            _skip_check_: !0,
            value: K(l(e.lineWidth).mul(-1).equal()),
          },
          borderLeft: {
            _skip_check_: !0,
            value: `${K(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingLeft: { _skip_check_: !0, value: e.paddingLG },
          },
        },
      },
      [`${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          [`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          order: 0,
          marginRight: {
            _skip_check_: !0,
            value: l(e.lineWidth).mul(-1).equal(),
          },
          borderRight: {
            _skip_check_: !0,
            value: `${K(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingRight: { _skip_check_: !0, value: e.paddingLG },
          },
        },
      },
    };
  },
  PN = (e) => {
    const {
      componentCls: t,
      cardPaddingSM: n,
      cardPaddingLG: r,
      horizontalItemPaddingSM: o,
      horizontalItemPaddingLG: i,
    } = e;
    return {
      [t]: {
        '&-small': {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: o, fontSize: e.titleFontSizeSM },
          },
        },
        '&-large': {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: i, fontSize: e.titleFontSizeLG },
          },
        },
      },
      [`${t}-card`]: {
        [`&${t}-small`]: {
          [`> ${t}-nav`]: { [`${t}-tab`]: { padding: n } },
          [`&${t}-bottom`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `0 0 ${K(e.borderRadius)} ${K(e.borderRadius)}`,
            },
          },
          [`&${t}-top`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `${K(e.borderRadius)} ${K(e.borderRadius)} 0 0`,
            },
          },
          [`&${t}-right`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${K(e.borderRadius)} ${K(e.borderRadius)} 0`,
              },
            },
          },
          [`&${t}-left`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${K(e.borderRadius)} 0 0 ${K(e.borderRadius)}`,
              },
            },
          },
        },
        [`&${t}-large`]: { [`> ${t}-nav`]: { [`${t}-tab`]: { padding: r } } },
      },
    };
  },
  RN = (e) => {
    const {
        componentCls: t,
        itemActiveColor: n,
        itemHoverColor: r,
        iconCls: o,
        tabsHorizontalItemMargin: i,
        horizontalItemPadding: a,
        itemSelectedColor: l,
        itemColor: s,
      } = e,
      c = `${t}-tab`;
    return {
      [c]: {
        position: 'relative',
        WebkitTouchCallout: 'none',
        WebkitTapHighlightColor: 'transparent',
        display: 'inline-flex',
        alignItems: 'center',
        padding: a,
        fontSize: e.titleFontSize,
        background: 'transparent',
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        color: s,
        '&-btn, &-remove': Object.assign(
          { '&:focus:not(:focus-visible), &:active': { color: n } },
          Iu(e)
        ),
        '&-btn': {
          outline: 'none',
          transition: 'all 0.3s',
          [`${c}-icon:not(:last-child)`]: { marginInlineEnd: e.marginSM },
        },
        '&-remove': {
          flex: 'none',
          marginRight: {
            _skip_check_: !0,
            value: e.calc(e.marginXXS).mul(-1).equal(),
          },
          marginLeft: { _skip_check_: !0, value: e.marginXS },
          color: e.colorTextDescription,
          fontSize: e.fontSizeSM,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          transition: `all ${e.motionDurationSlow}`,
          '&:hover': { color: e.colorTextHeading },
        },
        '&:hover': { color: r },
        [`&${c}-active ${c}-btn`]: {
          color: l,
          textShadow: e.tabsActiveTextShadow,
        },
        [`&${c}-disabled`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed',
        },
        [`&${c}-disabled ${c}-btn, &${c}-disabled ${t}-remove`]: {
          '&:focus, &:active': { color: e.colorTextDisabled },
        },
        [`& ${c}-remove ${o}`]: { margin: 0 },
        [`${o}:not(:last-child)`]: {
          marginRight: { _skip_check_: !0, value: e.marginSM },
        },
      },
      [`${c} + ${c}`]: { margin: { _skip_check_: !0, value: i } },
    };
  },
  TN = (e) => {
    const {
      componentCls: t,
      tabsHorizontalItemMarginRTL: n,
      iconCls: r,
      cardGutter: o,
      calc: i,
    } = e;
    return {
      [`${t}-rtl`]: {
        direction: 'rtl',
        [`${t}-nav`]: {
          [`${t}-tab`]: {
            margin: { _skip_check_: !0, value: n },
            [`${t}-tab:last-of-type`]: {
              marginLeft: { _skip_check_: !0, value: 0 },
            },
            [r]: {
              marginRight: { _skip_check_: !0, value: 0 },
              marginLeft: { _skip_check_: !0, value: K(e.marginSM) },
            },
            [`${t}-tab-remove`]: {
              marginRight: { _skip_check_: !0, value: K(e.marginXS) },
              marginLeft: {
                _skip_check_: !0,
                value: K(i(e.marginXXS).mul(-1).equal()),
              },
              [r]: { margin: 0 },
            },
          },
        },
        [`&${t}-left`]: {
          [`> ${t}-nav`]: { order: 1 },
          [`> ${t}-content-holder`]: { order: 0 },
        },
        [`&${t}-right`]: {
          [`> ${t}-nav`]: { order: 0 },
          [`> ${t}-content-holder`]: { order: 1 },
        },
        [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginRight: { _skip_check_: !0, value: o },
              marginLeft: { _skip_check_: !0, value: 0 },
            },
          },
        },
      },
      [`${t}-dropdown-rtl`]: { direction: 'rtl' },
      [`${t}-menu-item`]: {
        [`${t}-dropdown-rtl`]: {
          textAlign: { _skip_check_: !0, value: 'right' },
        },
      },
    };
  },
  _N = (e) => {
    const {
      componentCls: t,
      tabsCardPadding: n,
      cardHeight: r,
      cardGutter: o,
      itemHoverColor: i,
      itemActiveColor: a,
      colorBorderSecondary: l,
    } = e;
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, vi(e)), {
            display: 'flex',
            [`> ${t}-nav, > div > ${t}-nav`]: {
              position: 'relative',
              display: 'flex',
              flex: 'none',
              alignItems: 'center',
              [`${t}-nav-wrap`]: {
                position: 'relative',
                display: 'flex',
                flex: 'auto',
                alignSelf: 'stretch',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                transform: 'translate(0)',
                '&::before, &::after': {
                  position: 'absolute',
                  zIndex: 1,
                  opacity: 0,
                  transition: `opacity ${e.motionDurationSlow}`,
                  content: "''",
                  pointerEvents: 'none',
                },
              },
              [`${t}-nav-list`]: {
                position: 'relative',
                display: 'flex',
                transition: `opacity ${e.motionDurationSlow}`,
              },
              [`${t}-nav-operations`]: {
                display: 'flex',
                alignSelf: 'stretch',
              },
              [`${t}-nav-operations-hidden`]: {
                position: 'absolute',
                visibility: 'hidden',
                pointerEvents: 'none',
              },
              [`${t}-nav-more`]: {
                position: 'relative',
                padding: n,
                background: 'transparent',
                border: 0,
                color: e.colorText,
                '&::after': {
                  position: 'absolute',
                  right: { _skip_check_: !0, value: 0 },
                  bottom: 0,
                  left: { _skip_check_: !0, value: 0 },
                  height: e.calc(e.controlHeightLG).div(8).equal(),
                  transform: 'translateY(100%)',
                  content: "''",
                },
              },
              [`${t}-nav-add`]: Object.assign(
                {
                  minWidth: r,
                  minHeight: r,
                  marginLeft: { _skip_check_: !0, value: o },
                  padding: `0 ${K(e.paddingXS)}`,
                  background: 'transparent',
                  border: `${K(e.lineWidth)} ${e.lineType} ${l}`,
                  borderRadius: `${K(e.borderRadiusLG)} ${K(e.borderRadiusLG)} 0 0`,
                  outline: 'none',
                  cursor: 'pointer',
                  color: e.colorText,
                  transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                  '&:hover': { color: i },
                  '&:active, &:focus:not(:focus-visible)': { color: a },
                },
                Iu(e)
              ),
            },
            [`${t}-extra-content`]: { flex: 'none' },
            [`${t}-ink-bar`]: {
              position: 'absolute',
              background: e.inkBarColor,
              pointerEvents: 'none',
            },
          }),
          RN(e)
        ),
        {
          [`${t}-content`]: { position: 'relative', width: '100%' },
          [`${t}-content-holder`]: { flex: 'auto', minWidth: 0, minHeight: 0 },
          [`${t}-tabpane`]: {
            outline: 'none',
            '&-hidden': { display: 'none' },
          },
        }
      ),
      [`${t}-centered`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-nav-wrap`]: {
            [`&:not([class*='${t}-nav-wrap-ping'])`]: {
              justifyContent: 'center',
            },
          },
        },
      },
    };
  },
  MN = (e) => {
    const t = e.controlHeightLG;
    return {
      zIndexPopup: e.zIndexPopupBase + 50,
      cardBg: e.colorFillAlter,
      cardHeight: t,
      cardPadding: `${(t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth}px ${e.padding}px`,
      cardPaddingSM: `${e.paddingXXS * 1.5}px ${e.padding}px`,
      cardPaddingLG: `${e.paddingXS}px ${e.padding}px ${e.paddingXXS * 1.5}px`,
      titleFontSize: e.fontSize,
      titleFontSizeLG: e.fontSizeLG,
      titleFontSizeSM: e.fontSize,
      inkBarColor: e.colorPrimary,
      horizontalMargin: `0 0 ${e.margin}px 0`,
      horizontalItemGutter: 32,
      horizontalItemMargin: '',
      horizontalItemMarginRTL: '',
      horizontalItemPadding: `${e.paddingSM}px 0`,
      horizontalItemPaddingSM: `${e.paddingXS}px 0`,
      horizontalItemPaddingLG: `${e.padding}px 0`,
      verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
      verticalItemMargin: `${e.margin}px 0 0 0`,
      itemColor: e.colorText,
      itemSelectedColor: e.colorPrimary,
      itemHoverColor: e.colorPrimaryHover,
      itemActiveColor: e.colorPrimaryActive,
      cardGutter: e.marginXXS / 2,
    };
  },
  IN = Oo(
    'Tabs',
    (e) => {
      const t = bn(e, {
        tabsCardPadding: e.cardPadding,
        dropdownEdgeChildVerticalPadding: e.paddingXXS,
        tabsActiveTextShadow: '0 0 0.25px currentcolor',
        tabsDropdownHeight: 200,
        tabsDropdownWidth: 120,
        tabsHorizontalItemMargin: `0 0 0 ${K(e.horizontalItemGutter)}`,
        tabsHorizontalItemMarginRTL: `0 0 0 ${K(e.horizontalItemGutter)}`,
      });
      return [PN(t), TN(t), ON(t), $N(t), EN(t), _N(t), xN(t)];
    },
    MN
  ),
  kN = () => null,
  NN = kN;
var jN = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const hw = (e) => {
  var t, n, r, o, i, a, l, s;
  const {
      type: c,
      className: f,
      rootClassName: d,
      size: v,
      onEdit: h,
      hideAdd: b,
      centered: y,
      addIcon: S,
      removeIcon: p,
      moreIcon: m,
      popupClassName: g,
      children: C,
      items: E,
      animated: w,
      style: x,
      indicatorSize: O,
      indicator: P,
    } = e,
    _ = jN(e, [
      'type',
      'className',
      'rootClassName',
      'size',
      'onEdit',
      'hideAdd',
      'centered',
      'addIcon',
      'removeIcon',
      'moreIcon',
      'popupClassName',
      'children',
      'items',
      'animated',
      'style',
      'indicatorSize',
      'indicator',
    ]),
    { prefixCls: M } = _,
    {
      direction: L,
      tabs: R,
      getPrefixCls: D,
      getPopupContainer: B,
    } = u.useContext(Ge),
    k = D('tabs', M),
    T = Bl(k),
    [$, N, I] = IN(k, T);
  let F;
  c === 'editable-card' &&
    (F = {
      onEdit: (Q, ee) => {
        let { key: se, event: pe } = ee;
        h == null || h(Q === 'add' ? pe : se, Q);
      },
      removeIcon:
        (t = p ?? (R == null ? void 0 : R.removeIcon)) !== null && t !== void 0
          ? t
          : u.createElement(ju, null),
      addIcon:
        (S ?? (R == null ? void 0 : R.addIcon)) || u.createElement(Yk, null),
      showAdd: b !== !0,
    });
  const A = D(),
    V = Au(v),
    U = SN(E, C),
    Y = yN(k, w),
    te = Object.assign(Object.assign({}, R == null ? void 0 : R.style), x),
    J = {
      align:
        (n = P == null ? void 0 : P.align) !== null && n !== void 0
          ? n
          : (r = R == null ? void 0 : R.indicator) === null || r === void 0
            ? void 0
            : r.align,
      size:
        (l =
          (i =
            (o = P == null ? void 0 : P.size) !== null && o !== void 0
              ? o
              : O) !== null && i !== void 0
            ? i
            : (a = R == null ? void 0 : R.indicator) === null || a === void 0
              ? void 0
              : a.size) !== null && l !== void 0
          ? l
          : R == null
            ? void 0
            : R.indicatorSize,
    };
  return $(
    u.createElement(
      gN,
      Object.assign(
        {
          direction: L,
          getPopupContainer: B,
          moreTransitionName: `${A}-slide-up`,
        },
        _,
        {
          items: U,
          className: q(
            {
              [`${k}-${V}`]: V,
              [`${k}-card`]: ['card', 'editable-card'].includes(c),
              [`${k}-editable-card`]: c === 'editable-card',
              [`${k}-centered`]: y,
            },
            R == null ? void 0 : R.className,
            f,
            d,
            N,
            I,
            T
          ),
          popupClassName: q(g, N, I, T),
          style: te,
          editable: F,
          moreIcon:
            (s = m ?? (R == null ? void 0 : R.moreIcon)) !== null &&
            s !== void 0
              ? s
              : u.createElement(mk, null),
          prefixCls: k,
          animated: Y,
          indicator: J,
        }
      )
    )
  );
};
hw.TabPane = NN;
const LN = hw;
var FN = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const AN = (e) => {
    var { prefixCls: t, className: n, hoverable: r = !0 } = e,
      o = FN(e, ['prefixCls', 'className', 'hoverable']);
    const { getPrefixCls: i } = u.useContext(Ge),
      a = i('card', t),
      l = q(`${a}-grid`, n, { [`${a}-grid-hoverable`]: r });
    return u.createElement('div', Object.assign({}, o, { className: l }));
  },
  yw = AN,
  zN = (e) => {
    const {
      antCls: t,
      componentCls: n,
      headerHeight: r,
      cardPaddingBase: o,
      tabsMarginBottom: i,
    } = e;
    return Object.assign(
      Object.assign(
        {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: r,
          marginBottom: -1,
          padding: `0 ${K(o)}`,
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: e.headerFontSize,
          background: e.headerBg,
          borderBottom: `${K(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
          borderRadius: `${K(e.borderRadiusLG)} ${K(e.borderRadiusLG)} 0 0`,
        },
        Dl()
      ),
      {
        '&-wrapper': { width: '100%', display: 'flex', alignItems: 'center' },
        '&-title': Object.assign(
          Object.assign({ display: 'inline-block', flex: 1 }, ap),
          {
            [`
          > ${n}-typography,
          > ${n}-typography-edit-content
        `]: { insetInlineStart: 0, marginTop: 0, marginBottom: 0 },
          }
        ),
        [`${t}-tabs-top`]: {
          clear: 'both',
          marginBottom: i,
          color: e.colorText,
          fontWeight: 'normal',
          fontSize: e.fontSize,
          '&-bar': {
            borderBottom: `${K(e.lineWidth)} ${e.lineType} ${e.colorBorderSecondary}`,
          },
        },
      }
    );
  },
  DN = (e) => {
    const {
      cardPaddingBase: t,
      colorBorderSecondary: n,
      cardShadow: r,
      lineWidth: o,
    } = e;
    return {
      width: '33.33%',
      padding: t,
      border: 0,
      borderRadius: 0,
      boxShadow: `
      ${K(o)} 0 0 0 ${n},
      0 ${K(o)} 0 0 ${n},
      ${K(o)} ${K(o)} 0 0 ${n},
      ${K(o)} 0 0 0 ${n} inset,
      0 ${K(o)} 0 0 ${n} inset;
    `,
      transition: `all ${e.motionDurationMid}`,
      '&-hoverable:hover': { position: 'relative', zIndex: 1, boxShadow: r },
    };
  },
  BN = (e) => {
    const {
      componentCls: t,
      iconCls: n,
      actionsLiMargin: r,
      cardActionsIconSize: o,
      colorBorderSecondary: i,
      actionsBg: a,
    } = e;
    return Object.assign(
      Object.assign(
        {
          margin: 0,
          padding: 0,
          listStyle: 'none',
          background: a,
          borderTop: `${K(e.lineWidth)} ${e.lineType} ${i}`,
          display: 'flex',
          borderRadius: `0 0 ${K(e.borderRadiusLG)} ${K(e.borderRadiusLG)}`,
        },
        Dl()
      ),
      {
        '& > li': {
          margin: r,
          color: e.colorTextDescription,
          textAlign: 'center',
          '> span': {
            position: 'relative',
            display: 'block',
            minWidth: e.calc(e.cardActionsIconSize).mul(2).equal(),
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            cursor: 'pointer',
            '&:hover': {
              color: e.colorPrimary,
              transition: `color ${e.motionDurationMid}`,
            },
            [`a:not(${t}-btn), > ${n}`]: {
              display: 'inline-block',
              width: '100%',
              color: e.colorTextDescription,
              lineHeight: K(e.fontHeight),
              transition: `color ${e.motionDurationMid}`,
              '&:hover': { color: e.colorPrimary },
            },
            [`> ${n}`]: {
              fontSize: o,
              lineHeight: K(e.calc(o).mul(e.lineHeight).equal()),
            },
          },
          '&:not(:last-child)': {
            borderInlineEnd: `${K(e.lineWidth)} ${e.lineType} ${i}`,
          },
        },
      }
    );
  },
  HN = (e) =>
    Object.assign(
      Object.assign(
        {
          margin: `${K(e.calc(e.marginXXS).mul(-1).equal())} 0`,
          display: 'flex',
        },
        Dl()
      ),
      {
        '&-avatar': { paddingInlineEnd: e.padding },
        '&-detail': {
          overflow: 'hidden',
          flex: 1,
          '> div:not(:last-child)': { marginBottom: e.marginXS },
        },
        '&-title': Object.assign(
          {
            color: e.colorTextHeading,
            fontWeight: e.fontWeightStrong,
            fontSize: e.fontSizeLG,
          },
          ap
        ),
        '&-description': { color: e.colorTextDescription },
      }
    ),
  VN = (e) => {
    const { componentCls: t, cardPaddingBase: n, colorFillAlter: r } = e;
    return {
      [`${t}-head`]: {
        padding: `0 ${K(n)}`,
        background: r,
        '&-title': { fontSize: e.fontSize },
      },
      [`${t}-body`]: { padding: `${K(e.padding)} ${K(n)}` },
    };
  },
  WN = (e) => {
    const { componentCls: t } = e;
    return { overflow: 'hidden', [`${t}-body`]: { userSelect: 'none' } };
  },
  UN = (e) => {
    const {
      antCls: t,
      componentCls: n,
      cardShadow: r,
      cardHeadPadding: o,
      colorBorderSecondary: i,
      boxShadowTertiary: a,
      cardPaddingBase: l,
      extraColor: s,
    } = e;
    return {
      [n]: Object.assign(Object.assign({}, vi(e)), {
        position: 'relative',
        background: e.colorBgContainer,
        borderRadius: e.borderRadiusLG,
        [`&:not(${n}-bordered)`]: { boxShadow: a },
        [`${n}-head`]: zN(e),
        [`${n}-extra`]: {
          marginInlineStart: 'auto',
          color: s,
          fontWeight: 'normal',
          fontSize: e.fontSize,
        },
        [`${n}-body`]: Object.assign(
          {
            padding: l,
            borderRadius: ` 0 0 ${K(e.borderRadiusLG)} ${K(e.borderRadiusLG)}`,
          },
          Dl()
        ),
        [`${n}-grid`]: DN(e),
        [`${n}-cover`]: {
          '> *': { display: 'block', width: '100%' },
          [`img, img + ${t}-image-mask`]: {
            borderRadius: `${K(e.borderRadiusLG)} ${K(e.borderRadiusLG)} 0 0`,
          },
        },
        [`${n}-actions`]: BN(e),
        [`${n}-meta`]: HN(e),
      }),
      [`${n}-bordered`]: {
        border: `${K(e.lineWidth)} ${e.lineType} ${i}`,
        [`${n}-cover`]: {
          marginTop: -1,
          marginInlineStart: -1,
          marginInlineEnd: -1,
        },
      },
      [`${n}-hoverable`]: {
        cursor: 'pointer',
        transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
        '&:hover': { borderColor: 'transparent', boxShadow: r },
      },
      [`${n}-contain-grid`]: {
        borderRadius: `${K(e.borderRadiusLG)} ${K(e.borderRadiusLG)} 0 0 `,
        [`${n}-body`]: { display: 'flex', flexWrap: 'wrap' },
        [`&:not(${n}-loading) ${n}-body`]: {
          marginBlockStart: e.calc(e.lineWidth).mul(-1).equal(),
          marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
          padding: 0,
        },
      },
      [`${n}-contain-tabs`]: {
        [`> ${n}-head`]: {
          minHeight: 0,
          [`${n}-head-title, ${n}-extra`]: { paddingTop: o },
        },
      },
      [`${n}-type-inner`]: VN(e),
      [`${n}-loading`]: WN(e),
      [`${n}-rtl`]: { direction: 'rtl' },
    };
  },
  KN = (e) => {
    const {
      componentCls: t,
      cardPaddingSM: n,
      headerHeightSM: r,
      headerFontSizeSM: o,
    } = e;
    return {
      [`${t}-small`]: {
        [`> ${t}-head`]: {
          minHeight: r,
          padding: `0 ${K(n)}`,
          fontSize: o,
          [`> ${t}-head-wrapper`]: {
            [`> ${t}-extra`]: { fontSize: e.fontSize },
          },
        },
        [`> ${t}-body`]: { padding: n },
      },
      [`${t}-small${t}-contain-tabs`]: {
        [`> ${t}-head`]: {
          [`${t}-head-title, ${t}-extra`]: {
            paddingTop: 0,
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
    };
  },
  GN = (e) => ({
    headerBg: 'transparent',
    headerFontSize: e.fontSizeLG,
    headerFontSizeSM: e.fontSize,
    headerHeight: e.fontSizeLG * e.lineHeightLG + e.padding * 2,
    headerHeightSM: e.fontSize * e.lineHeight + e.paddingXS * 2,
    actionsBg: e.colorBgContainer,
    actionsLiMargin: `${e.paddingSM}px 0`,
    tabsMarginBottom: -e.padding - e.lineWidth,
    extraColor: e.colorText,
  }),
  qN = Oo(
    'Card',
    (e) => {
      const t = bn(e, {
        cardShadow: e.boxShadowCard,
        cardHeadPadding: e.padding,
        cardPaddingBase: e.paddingLG,
        cardActionsIconSize: e.fontSize,
        cardPaddingSM: 12,
      });
      return [UN(t), KN(t)];
    },
    GN
  );
var K0 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const XN = (e) => {
    const { actionClasses: t, actions: n = [], actionStyle: r } = e;
    return u.createElement(
      'ul',
      { className: t, style: r },
      n.map((o, i) => {
        const a = `action-${i}`;
        return u.createElement(
          'li',
          { style: { width: `${100 / n.length}%` }, key: a },
          u.createElement('span', null, o)
        );
      })
    );
  },
  QN = u.forwardRef((e, t) => {
    const {
        prefixCls: n,
        className: r,
        rootClassName: o,
        style: i,
        extra: a,
        headStyle: l = {},
        bodyStyle: s = {},
        title: c,
        loading: f,
        bordered: d = !0,
        size: v,
        type: h,
        cover: b,
        actions: y,
        tabList: S,
        children: p,
        activeTabKey: m,
        defaultActiveTabKey: g,
        tabBarExtraContent: C,
        hoverable: E,
        tabProps: w = {},
        classNames: x,
        styles: O,
      } = e,
      P = K0(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'style',
        'extra',
        'headStyle',
        'bodyStyle',
        'title',
        'loading',
        'bordered',
        'size',
        'type',
        'cover',
        'actions',
        'tabList',
        'children',
        'activeTabKey',
        'defaultActiveTabKey',
        'tabBarExtraContent',
        'hoverable',
        'tabProps',
        'classNames',
        'styles',
      ]),
      { getPrefixCls: _, direction: M, card: L } = u.useContext(Ge),
      R = (ve) => {
        var Z;
        (Z = e.onTabChange) === null || Z === void 0 || Z.call(e, ve);
      },
      D = (ve) => {
        var Z;
        return q(
          (Z = L == null ? void 0 : L.classNames) === null || Z === void 0
            ? void 0
            : Z[ve],
          x == null ? void 0 : x[ve]
        );
      },
      B = (ve) => {
        var Z;
        return Object.assign(
          Object.assign(
            {},
            (Z = L == null ? void 0 : L.styles) === null || Z === void 0
              ? void 0
              : Z[ve]
          ),
          O == null ? void 0 : O[ve]
        );
      },
      k = u.useMemo(() => {
        let ve = !1;
        return (
          u.Children.forEach(p, (Z) => {
            Z && Z.type && Z.type === yw && (ve = !0);
          }),
          ve
        );
      }, [p]),
      T = _('card', n),
      [$, N, I] = qN(T),
      F = u.createElement(
        Gk,
        { loading: !0, active: !0, paragraph: { rows: 4 }, title: !1 },
        p
      ),
      A = m !== void 0,
      V = Object.assign(Object.assign({}, w), {
        [A ? 'activeKey' : 'defaultActiveKey']: A ? m : g,
        tabBarExtraContent: C,
      });
    let U;
    const Y = Au(v),
      te = !Y || Y === 'default' ? 'large' : Y,
      J = S
        ? u.createElement(
            LN,
            Object.assign({ size: te }, V, {
              className: `${T}-head-tabs`,
              onChange: R,
              items: S.map((ve) => {
                var { tab: Z } = ve,
                  fe = K0(ve, ['tab']);
                return Object.assign({ label: Z }, fe);
              }),
            })
          )
        : null;
    if (c || a || J) {
      const ve = q(`${T}-head`, D('header')),
        Z = q(`${T}-head-title`, D('title')),
        fe = q(`${T}-extra`, D('extra')),
        ge = Object.assign(Object.assign({}, l), B('header'));
      U = u.createElement(
        'div',
        { className: ve, style: ge },
        u.createElement(
          'div',
          { className: `${T}-head-wrapper` },
          c && u.createElement('div', { className: Z, style: B('title') }, c),
          a && u.createElement('div', { className: fe, style: B('extra') }, a)
        ),
        J
      );
    }
    const Q = q(`${T}-cover`, D('cover')),
      ee = b
        ? u.createElement('div', { className: Q, style: B('cover') }, b)
        : null,
      se = q(`${T}-body`, D('body')),
      pe = Object.assign(Object.assign({}, s), B('body')),
      Le = u.createElement('div', { className: se, style: pe }, f ? F : p),
      he = q(`${T}-actions`, D('actions')),
      Ce =
        y && y.length
          ? u.createElement(XN, {
              actionClasses: he,
              actionStyle: B('actions'),
              actions: y,
            })
          : null,
      ce = di(P, ['onTabChange']),
      Pe = q(
        T,
        L == null ? void 0 : L.className,
        {
          [`${T}-loading`]: f,
          [`${T}-bordered`]: d,
          [`${T}-hoverable`]: E,
          [`${T}-contain-grid`]: k,
          [`${T}-contain-tabs`]: S && S.length,
          [`${T}-${Y}`]: Y,
          [`${T}-type-${h}`]: !!h,
          [`${T}-rtl`]: M === 'rtl',
        },
        r,
        o,
        N,
        I
      ),
      $e = Object.assign(Object.assign({}, L == null ? void 0 : L.style), i);
    return $(
      u.createElement(
        'div',
        Object.assign({ ref: t }, ce, { className: Pe, style: $e }),
        U,
        ee,
        Le,
        Ce
      )
    );
  }),
  YN = QN;
var ZN = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const JN = (e) => {
    const {
        prefixCls: t,
        className: n,
        avatar: r,
        title: o,
        description: i,
      } = e,
      a = ZN(e, ['prefixCls', 'className', 'avatar', 'title', 'description']),
      { getPrefixCls: l } = u.useContext(Ge),
      s = l('card', t),
      c = q(`${s}-meta`, n),
      f = r
        ? u.createElement('div', { className: `${s}-meta-avatar` }, r)
        : null,
      d = o
        ? u.createElement('div', { className: `${s}-meta-title` }, o)
        : null,
      v = i
        ? u.createElement('div', { className: `${s}-meta-description` }, i)
        : null,
      h =
        d || v
          ? u.createElement('div', { className: `${s}-meta-detail` }, d, v)
          : null;
    return u.createElement('div', Object.assign({}, a, { className: c }), f, h);
  },
  e5 = JN,
  _p = YN;
_p.Grid = yw;
_p.Meta = e5;
const t5 = _p;
var n5 = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
};
const r5 = (e) => {
    const {
        prefixCls: t,
        className: n,
        closeIcon: r,
        closable: o,
        type: i,
        title: a,
        children: l,
        footer: s,
      } = e,
      c = n5(e, [
        'prefixCls',
        'className',
        'closeIcon',
        'closable',
        'type',
        'title',
        'children',
        'footer',
      ]),
      { getPrefixCls: f } = u.useContext(Ge),
      d = f(),
      v = t || f('modal'),
      h = Bl(d),
      [b, y, S] = OS(v, h),
      p = `${v}-confirm`;
    let m = {};
    return (
      i
        ? (m = {
            closable: o ?? !1,
            title: '',
            footer: '',
            children: u.createElement(
              RS,
              Object.assign({}, e, {
                prefixCls: v,
                confirmPrefixCls: p,
                rootPrefixCls: d,
                content: l,
              })
            ),
          })
        : (m = {
            closable: o ?? !0,
            title: a,
            footer: s !== null && u.createElement(xS, Object.assign({}, e)),
            children: l,
          }),
      b(
        u.createElement(
          vS,
          Object.assign(
            {
              prefixCls: v,
              className: q(
                y,
                `${v}-pure-panel`,
                i && p,
                i && `${p}-${i}`,
                n,
                S,
                h
              ),
            },
            c,
            { closeIcon: wS(v, r), closable: o },
            m
          )
        )
      )
    );
  },
  o5 = l3(r5);
function bw(e) {
  return Kl(IS(e));
}
const ur = PS;
ur.useModal = a3;
ur.info = function (t) {
  return Kl(kS(t));
};
ur.success = function (t) {
  return Kl(NS(t));
};
ur.error = function (t) {
  return Kl(jS(t));
};
ur.warning = bw;
ur.warn = bw;
ur.confirm = function (t) {
  return Kl(LS(t));
};
ur.destroyAll = function () {
  for (; Wo.length; ) {
    const t = Wo.pop();
    t && t();
  }
};
ur.config = t3;
ur._InternalPanelDoNotUseOrYouWillBeFired = o5;
const i5 = ur;
function a5() {
  const [e, t] = u.useState(!1),
    n = () => {
      t(!0);
    },
    r = () => {
      t(!1);
    };
  return W.jsxs(W.Fragment, {
    children: [
      W.jsx('div', {
        id: 'contact',
        className: 'text-4xl mb-8 text-white',
        children: 'Contact Me',
      }),
      W.jsx('div', {
        style: { display: 'flex', justifyContent: 'center', width: '100%' },
        children: W.jsx(t5, {
          style: { width: '60%', textAlign: 'center' },
          cover: W.jsx('img', {
            alt: 'example',
            src: 'image/gray2.jpg',
            style: { height: '70px', width: '100%' },
          }),
          actions: [
            W.jsx(W.Fragment, {
              children: W.jsx(oc, {
                title: 'My GitHub',
                placement: 'top',
                children: W.jsx('a', {
                  href: 'https://github.com/hanhan0914',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: W.jsx(
                    QE,
                    { style: { fontSize: '30px' } },
                    'github'
                  ),
                }),
              }),
            }),
            W.jsx(W.Fragment, {
              children: W.jsx(oc, {
                title: 'My Fiverr',
                placement: 'top',
                children: W.jsx('a', {
                  href: 'https://www.fiverr.com/elainechen_dev?up_rollout=true',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  children: W.jsx(t$, { style: { fontSize: '30px' } }),
                }),
              }),
            }),
            W.jsx(W.Fragment, {
              children: W.jsx(oc, {
                title: 'My WeChat',
                placement: 'top',
                children: W.jsx(g$, {
                  onClick: n,
                  style: { fontSize: '30px' },
                }),
              }),
            }),
          ],
          children: W.jsxs('div', {
            style: { display: 'flex' },
            children: [
              W.jsx(bI, {
                src: 'image/girl.png',
                style: { width: '30%', height: '80%' },
              }),
              W.jsxs('div', {
                style: {
                  width: '60%',
                  marginLeft: '5px',
                  fontFamily: 'fantasy',
                },
                children: [
                  W.jsx('p', {
                    style: { textAlign: 'left', fontSize: '1.5vw' },
                    children: 'Elaine Chen',
                  }),
                  W.jsx('br', {}),
                  W.jsx('p', {
                    style: { textAlign: 'left', fontSize: '1.3vw' },
                    children:
                      'If you have any ideas to share with me or are interested in business collaboration,  email me : ',
                  }),
                  W.jsxs('p', {
                    style: { textAlign: 'left', fontSize: '1.3vw' },
                    children: [
                      W.jsx(a$, { twoToneColor: '	#0072E3' }),
                      '  amy8611020923@gmail.com',
                    ],
                  }),
                  W.jsx('br', {}),
                  W.jsx('p', {
                    style: { textAlign: 'left', fontSize: '1.3vw' },
                    children: 'or contact  through  following platforms ⇩',
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      W.jsxs(i5, {
        visible: e,
        footer: null,
        onCancel: r,
        children: [
          W.jsx('p', {
            children: "This is my WeChat QR code. Add me and let's chat!",
          }),
          W.jsx('br', {}),
          W.jsx('img', {
            src: 'image/wechat.png',
            style: { width: '300px', marginLeft: '50px' },
          }),
        ],
      }),
    ],
  });
}
function l5() {
  return W.jsx(W.Fragment, {
    children: W.jsx('div', {
      className: 'text-style',
      children: 'Copyright © 2024 ElaineChen. All rights reserved.',
    }),
  });
}
function s5() {
  return W.jsxs(W.Fragment, {
    children: [
      W.jsx(h$, {}),
      W.jsx(y$, {}),
      W.jsx(E$, {}),
      W.jsx(a5, {}),
      W.jsx(l5, {}),
    ],
  });
}
Jf.createRoot(document.getElementById('root')).render(
  W.jsx(G.StrictMode, { children: W.jsx(s5, {}) })
);
