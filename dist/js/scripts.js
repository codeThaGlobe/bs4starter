"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};function p(a, b) {
    b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }var q = "3.1.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
      return f.call(this);
    }, get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    }, pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
    }, each: function each(a) {
      return r.each(this, a);
    }, map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === r.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    }, isPlainObject: function isPlainObject(a) {
      var b, c;return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      p(a);
    }, camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }return g.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, e;if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, { dir: "parentNode", next: "legend" });try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = { apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(P, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("fieldset");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return X.test(a.nodeName);
        }, input: function input(a) {
          return W.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: pa(function () {
          return [0];
        }), last: pa(function (a, b) {
          return [b - 1];
        }), eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }), even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }return a;
        }), odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }return a;
        }), lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }return d;
    }function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }return !1;
      };
    }function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }return c;
    }function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }m.push(c);
        }
      }return ua(m);
    }function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }u = wa(u);
          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, za(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;
          }
        }
      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      A = r.expr.match.needsContext,
      B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }r.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({ find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }return d > 1 ? r.uniqueSort(c) : c;
    }, filter: function filter(a) {
      return this.pushStack(D(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(D(this, a || [], !0));
    }, is: function is(a) {
      return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    } });var E,
      F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      G = r.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
      I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
      var b = r(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function J(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }r.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return y(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    }, next: function next(a) {
      return J(a, "nextSibling");
    }, prev: function prev(a) {
      return J(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return z(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || r.merge([], a.childNodes);
    } }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
    };
  });var K = /[^\x20\t\r\n\f]+/g;function L(a) {
    var b = {};return r.each(a.match(K) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }r.Callbacks = function (a) {
    a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  };function M(a) {
    return a;
  }function N(a) {
    throw a;
  }function O(a, b, c) {
    var d;try {
      a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
    } catch (a) {
      c.call(void 0, a);
    }
  }r.extend({ Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = { state: function state() {
          return d;
        }, always: function always() {
          return f.done(arguments).fail(arguments), this;
        }, "catch": function _catch(a) {
          return e.then(null, a);
        }, pipe: function pipe() {
          var a = arguments;return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, then: function then(b, d, e) {
          var f = 0;function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
          }).promise();
        }, promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        } },
          f = {};return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    }, when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
        O(e[c], h(c), g.reject);
      }return g.promise();
    } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };var Q = r.Deferred();r.fn.ready = function (a) {
    return Q.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? r.readyWait++ : r.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
    } }), r.ready.then = Q.then;function R() {
    d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
  }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === r.type(c)) {
      e = !0;for (h in c) {
        S(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      T = function T(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function U() {
    this.expando = r.expando + U.uid++;
  }U.uid = 1, U.prototype = { cache: function cache(a) {
      var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    }, access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d = a[this.expando];if (void 0 !== d) {
        if (void 0 !== b) {
          r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
            delete d[b[c]];
          }
        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
    } };var V = new U(),
      W = new U(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Y = /[A-Z]/g;function Z(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a);
  }function $(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = Z(c);
      } catch (e) {}W.set(a, b, c);
    } else c = void 0;return c;
  }r.extend({ hasData: function hasData(a) {
      return W.hasData(a) || V.hasData(a);
    }, data: function data(a, b, c) {
      return W.access(a, b, c);
    }, removeData: function removeData(a, b) {
      W.remove(a, b);
    }, _data: function _data(a, b, c) {
      return V.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      V.remove(a, b);
    } }), r.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
          }V.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        W.set(this, a);
      }) : S(this, function (b) {
        var c;if (f && void 0 === b) {
          if (c = W.get(f, a), void 0 !== c) return c;if (c = $(f, a), void 0 !== c) return c;
        } else this.each(function () {
          W.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        W.remove(this, a);
      });
    } }), r.extend({ queue: function queue(a, b, c) {
      var d;if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
          V.remove(a, [b + "queue", c]);
        }) });
    } }), r.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
      ba = ["Top", "Right", "Bottom", "Left"],
      ca = function ca(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      da = function da(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };function ea(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var fa = {};function ga(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = fa[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e);
  }function ha(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
    }for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }return a;
  }r.fn.extend({ show: function show() {
      return ha(this, !0);
    }, hide: function hide() {
      return ha(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        ca(this) ? r(this).show() : r(this).hide();
      });
    } });var ia = /^(?:checkbox|radio)$/i,
      ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      ka = /^$|\/(?:java|ecma)script/i,
      la = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;function ma(a, b) {
    var c;return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
  }function na(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
    }
  }var oa = /<|&#?\w+;/;function pa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (oa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", n = 0;while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
        k = 0;while (f = g[k++]) {
          ka.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var qa = d.documentElement,
      ra = /^key/,
      sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ta = /^([^.]*)(?:\.(.+)|)/;function ua() {
    return !0;
  }function va() {
    return !1;
  }function wa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function xa(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        xa(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }r.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = V.get(a);if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
          h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
        b = (b || "").match(K) || [""], j = b.length;while (j--) {
          if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }r.isEmptyObject(i) && V.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (V.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }f.length && h.push({ elem: j, handlers: f });
        }
      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
    }, addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        }, set: function set(b) {
          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
        } });
    }, fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== wa() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === wa() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1;
        }, _default: function _default(a) {
          return r.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: va, isPropagationStopped: va, isImmediatePropagationStopped: va, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
      var b = a.button;return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), r.fn.extend({ on: function on(a, b, c, d) {
      return xa(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return xa(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    } });var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      za = /<script|<style|<link/i,
      Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ba = /^true\/(.*)/,
      Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a, b) {
    return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
  }function Ea(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function Fa(a) {
    var b = Ba.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Ga(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
    }
  }function Ha(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function Ia(a, b, c, d) {
    b = g.apply([], b);var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function (e) {
      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d);
    });if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) {
        j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k));
      }
    }return a;
  }function Ja(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ya, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      }if (b) if (c) for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) {
        Ga(f[d], g[d]);
      } else Ga(a, h);return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (T(c)) {
          if (b = c[V.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }c[V.expando] = void 0;
          }c[W.expando] && (c[W.expando] = void 0);
        }
      }
    } }), r.fn.extend({ detach: function detach(a) {
      return Ja(this, a, !0);
    }, remove: function remove(a) {
      return Ja(this, a);
    }, text: function text(a) {
      return S(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return Ia(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Da(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ia(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Da(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ia(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ia(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    }, html: function html(a) {
      return S(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ia(this, arguments, function (b) {
        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this));
      }, a);
    } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var Ka = /^margin/,
      La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
      Ma = function Ma(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  };!function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null;
      }
    }var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
        return b(), c;
      }, boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      }, pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      } }));
  }();function Na(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }function Oa(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Pa = /^(none|table(?!-c[ea]).+)/,
      Qa = { position: "absolute", visibility: "hidden", display: "block" },
      Ra = { letterSpacing: "0", fontWeight: "400" },
      Sa = ["Webkit", "Moz", "ms"],
      Ta = d.createElement("div").style;function Ua(a) {
    if (a in Ta) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Sa.length;while (c--) {
      if (a = Sa[c] + b, a in Ta) return a;
    }
  }function Va(a, b, c) {
    var d = aa.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Wa(a, b, c, d, e) {
    var f,
        g = 0;for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
    }return g;
  }function Xa(a, b, c) {
    var d,
        e = !0,
        f = Ma(a),
        g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
      if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
    }return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px";
  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Na(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = { get: function get(a, c, d) {
        if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () {
          return Xa(a, b, d);
        });
      }, set: function set(a, c, d) {
        var e,
            f = d && Ma(a),
            g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g);
      } };
  }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    r.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Ka.test(a) || (r.cssHooks[a + b].set = Va);
  }), r.fn.extend({ css: function css(a, b) {
      return S(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (r.isArray(b)) {
          for (d = Ma(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    } });function Ya(a, b, c, d, e) {
    return new Ya.prototype.init(a, b, c, d, e);
  }r.Tween = Ya, Ya.prototype = { constructor: Ya, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ya.propHooks[this.prop];return a && a.get ? a.get(this) : Ya.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ya.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this;
    } }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, r.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, r.fx = Ya.prototype.init, r.fx.step = {};var Za,
      $a,
      _a = /^(?:toggle|show|hide)$/,
      ab = /queueHooks$/;function bb() {
    $a && (a.requestAnimationFrame(bb), r.fx.tick());
  }function cb() {
    return a.setTimeout(function () {
      Za = void 0;
    }), Za = r.now();
  }function db(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ba[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function eb(a, b, c) {
    for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function fb(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && ca(a),
        q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));for (d in b) {
      if (e = b[d], _a.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }n[d] = q && q[d] || r.style(a, d);
      }
    }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ha([a], !0), m.done(function () {
          p || ha([a]), V.remove(a, "fxshow");for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }function gb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function hb(a, b, c) {
    var d,
        e,
        f = 0,
        g = hb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Za || cb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (gb(k, j.opts.specialEasing); f < g; f++) {
      if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }r.Animation = r.extend(hb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return ea(c.elem, a, aa.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b);
      }
    }, prefilters: [fb], prefilter: function prefilter(a, b) {
      b ? hb.prefilters.unshift(a) : hb.prefilters.push(a);
    } }), r.speed = function (a, b, c) {
    var e = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
      r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
    }, e;
  }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = hb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && ab.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || r.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = V.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e);
    };
  }), r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;for (Za = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || r.fx.stop(), Za = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
  }, r.fx.interval = 13, r.fx.start = function () {
    $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval));
  }, r.fx.stop = function () {
    a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null;
  }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();var ib,
      jb = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
      return S(this, r.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    } }), r.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    } }), ib = { set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = jb[b] || r.find.attr;jb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e;
    };
  });var kb = /^(?:input|select|textarea|button)$/i,
      lb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
      return S(this, r.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    } }), r.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });function mb(a) {
    var b = a.match(K) || [];return b.join(" ");
  }function nb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }r.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, nb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(K) || [];while (c = this[i++]) {
          if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = mb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, nb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(K) || [];while (c = this[i++]) {
          if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = mb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, nb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var ob = /\r/g;r.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c);
      }
    } }), r.extend({ valHooks: { option: { get: function get(a) {
          var b = r.find.attr(a, "value");return null != b ? b : mb(r.text(a));
        } }, select: { get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;h.push(b);
            }
          }return h;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = { set: function set(a, b) {
        if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      } }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
    } }), r.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);
    } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };r.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
      } };
  });var qb = a.location,
      rb = r.now(),
      sb = /\?/;r.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };var tb = /\[\]$/,
      ub = /\r?\n/g,
      vb = /^(?:submit|button|image|reset|file)$/i,
      wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
    var e;if (r.isArray(b)) r.each(b, function (b, e) {
      c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      xb(a + "[" + e + "]", b[e], c, d);
    }
  }r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      xb(c, a[c], b, e);
    }return d.join("&");
  }, r.fn.extend({ serialize: function serialize() {
      return r.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a));
      }).map(function (a, b) {
        var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
          return { name: b.name, value: a.replace(ub, "\r\n") };
        }) : { name: b.name, value: c.replace(ub, "\r\n") };
      }).get();
    } });var yb = /%20/g,
      zb = /#.*$/,
      Ab = /([?&])_=[^&]*/,
      Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Db = /^(?:GET|HEAD)$/,
      Eb = /^\/\//,
      Fb = {},
      Gb = {},
      Hb = "*/".concat("*"),
      Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Kb(a, b, c, d) {
    var e = {},
        f = a === Gb;function g(h) {
      var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Lb(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && r.extend(!0, a, d), a;
  }function Mb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }if (f) return f !== i[0] && i.unshift(f), c[f];
  }function Nb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
    }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (k) {
            if (!h) {
              h = {};while (b = Bb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }return this;
        }, abort: function abort(a) {
          var b = a || x;return e && e.abort(b), A(0, b), this;
        } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
        j = d.createElement("a");try {
          j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;A(-1, z);
        }
      } else A(-1, "No Transport");function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }return y;
    }, getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    } }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, r.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this;
    }, wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = r.isFunction(a);return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    } }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Ob = { 0: 200, 1223: 204 },
      Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
    var _c, d;if (o.cors || Pb && !b.crossDomain) return { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return r.globalEval(a), a;
      } } }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Qb = [],
      Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
    } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Sb(a) {
    return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }r.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, r.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });var b,
          c,
          d,
          e,
          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }return a || qa;
      });
    } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;r.fn[a] = function (d) {
      return S(this, function (a, d, e) {
        var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
      if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({ Height: "height", Width: "width" }, function (a, b) {
    r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
          var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
    return r;
  });var Tb = a.jQuery,
      Ub = a.$;return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function _update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref3) {
    var name = _ref3.name,
        enabled = _ref3.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var _i = 0; _i < prefixes.length; _i++) {
    var prefix = prefixes[_i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function _destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function _enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function _disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref4) {
    var name = _ref4.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, _defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), _defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets2 = data.offsets,
      popper = _data$offsets2.popper,
      reference = _data$offsets2.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref5) {
  var offset = _ref5.offset;
  var placement = data.placement,
      _data$offsets3 = data.offsets,
      popper = _data$offsets3.popper,
      reference = _data$offsets3.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return _defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return _defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets4 = data.offsets,
        reference = _data$offsets4.reference,
        popper = _data$offsets4.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: _defineProperty({}, side, reference[side]),
      end: _defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets5 = data.offsets,
      popper = _data$offsets5.popper,
      reference = _data$offsets5.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods

var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  _createClass(Popper, [{
    key: 'update',
    value: function update() {
      return _update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      return _destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners() {
      return _enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners() {
      return _disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);

  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;

//# sourceMappingURL=popper.js.map
Popper.Defaults = Defaults;
"use strict";

$(function () {

    // Your custom JS here

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJwb3BwZXIuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbImEiLCJiIiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50IiwiRXJyb3IiLCJ3aW5kb3ciLCJjIiwiZCIsImUiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImYiLCJzbGljZSIsImciLCJjb25jYXQiLCJoIiwicHVzaCIsImkiLCJpbmRleE9mIiwiaiIsImsiLCJ0b1N0cmluZyIsImwiLCJoYXNPd25Qcm9wZXJ0eSIsIm0iLCJuIiwiY2FsbCIsIm8iLCJwIiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJxIiwiciIsImZuIiwiaW5pdCIsInMiLCJ0IiwidSIsInYiLCJ0b1VwcGVyQ2FzZSIsInByb3RvdHlwZSIsImpxdWVyeSIsImNvbnN0cnVjdG9yIiwibGVuZ3RoIiwidG9BcnJheSIsImdldCIsInB1c2hTdGFjayIsIm1lcmdlIiwicHJldk9iamVjdCIsImVhY2giLCJtYXAiLCJhcHBseSIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0IiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzRnVuY3Rpb24iLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm5vb3AiLCJ0eXBlIiwiQXJyYXkiLCJpc1dpbmRvdyIsImlzTnVtZXJpYyIsImlzTmFOIiwicGFyc2VGbG9hdCIsImlzRW1wdHlPYmplY3QiLCJnbG9iYWxFdmFsIiwiY2FtZWxDYXNlIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInciLCJ0cmltIiwibWFrZUFycmF5IiwiaW5BcnJheSIsImdyZXAiLCJndWlkIiwicHJveHkiLCJub3ciLCJEYXRlIiwic3VwcG9ydCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwic3BsaXQiLCJ4IiwieSIsImhhIiwieiIsIkEiLCJCIiwiQyIsIkQiLCJFIiwicG9wIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiTCIsIk0iLCJOIiwiTyIsIlJlZ0V4cCIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJJRCIsIkNMQVNTIiwiVEFHIiwiQVRUUiIsIlBTRVVETyIsIkNISUxEIiwiYm9vbCIsIm5lZWRzQ29udGV4dCIsIlciLCJYIiwiWSIsIloiLCIkIiwiXyIsImFhIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYmEiLCJjYSIsImNoYXJDb2RlQXQiLCJkYSIsImVhIiwidGEiLCJkaXNhYmxlZCIsImRpciIsIm5leHQiLCJjaGlsZE5vZGVzIiwibm9kZVR5cGUiLCJmYSIsImdhIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNhIiwiam9pbiIsInFhIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUF0dHJpYnV0ZSIsImNhY2hlTGVuZ3RoIiwic2hpZnQiLCJpYSIsImphIiwia2EiLCJhdHRySGFuZGxlIiwibGEiLCJzb3VyY2VJbmRleCIsIm5leHRTaWJsaW5nIiwibWEiLCJuYSIsIm9hIiwiaXNEaXNhYmxlZCIsInBhIiwiaXNYTUwiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXREb2N1bWVudCIsImRlZmF1bHRWaWV3IiwidG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImNyZWF0ZUNvbW1lbnQiLCJnZXRCeUlkIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJmaWx0ZXIiLCJmaW5kIiwiZ2V0QXR0cmlidXRlTm9kZSIsInZhbHVlIiwiaW5uZXJIVE1MIiwibWF0Y2hlc1NlbGVjdG9yIiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsImRpc2Nvbm5lY3RlZE1hdGNoIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJjb250YWlucyIsInNvcnREZXRhY2hlZCIsInVuc2hpZnQiLCJhdHRyIiwic3BlY2lmaWVkIiwiZXNjYXBlIiwidW5pcXVlU29ydCIsImRldGVjdER1cGxpY2F0ZXMiLCJzb3J0U3RhYmxlIiwiZ2V0VGV4dCIsInRleHRDb250ZW50IiwiZmlyc3RDaGlsZCIsIm5vZGVWYWx1ZSIsInNlbGVjdG9ycyIsImNyZWF0ZVBzZXVkbyIsIm1hdGNoIiwicmVsYXRpdmUiLCJwcmVGaWx0ZXIiLCJsYXN0Q2hpbGQiLCJ1bmlxdWVJRCIsInBzZXVkb3MiLCJzZXRGaWx0ZXJzIiwibm90IiwiaGFzIiwiaW5uZXJUZXh0IiwibGFuZyIsInRhcmdldCIsImxvY2F0aW9uIiwiaGFzaCIsInJvb3QiLCJmb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJoYXNGb2N1cyIsImhyZWYiLCJ0YWJJbmRleCIsImVuYWJsZWQiLCJjaGVja2VkIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwiZW1wdHkiLCJwYXJlbnQiLCJoZWFkZXIiLCJpbnB1dCIsImJ1dHRvbiIsImV2ZW4iLCJvZGQiLCJsdCIsImd0IiwibnRoIiwicmFkaW8iLCJjaGVja2JveCIsImZpbGUiLCJwYXNzd29yZCIsImltYWdlIiwic3VibWl0IiwicmVzZXQiLCJyYSIsImZpbHRlcnMiLCJ0b2tlbml6ZSIsInVhIiwidmEiLCJ3YSIsInhhIiwieWEiLCJ6YSIsImNvbXBpbGUiLCJzZWxlY3RvciIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImV4cHIiLCJ1bmlxdWUiLCJpc1hNTERvYyIsImVzY2FwZVNlbGVjdG9yIiwiaXMiLCJwYXJzZUhUTUwiLCJyZWFkeSIsImNoaWxkcmVuIiwiY29udGVudHMiLCJwcmV2IiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwibmV4dEFsbCIsIm5leHRVbnRpbCIsInByZXZVbnRpbCIsInNpYmxpbmdzIiwiY29udGVudERvY3VtZW50IiwicmV2ZXJzZSIsIkNhbGxiYWNrcyIsIm9uY2UiLCJzdG9wT25GYWxzZSIsIm1lbW9yeSIsInJlbW92ZSIsImRpc2FibGUiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJwcm9taXNlIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwiRGVmZXJyZWQiLCJzdGF0ZSIsImFsd2F5cyIsInBpcGUiLCJwcm9ncmVzcyIsIm5vdGlmeSIsInJlc29sdmUiLCJyZWplY3QiLCJUeXBlRXJyb3IiLCJub3RpZnlXaXRoIiwicmVzb2x2ZVdpdGgiLCJleGNlcHRpb25Ib29rIiwic3RhY2tUcmFjZSIsInJlamVjdFdpdGgiLCJnZXRTdGFja0hvb2siLCJzZXRUaW1lb3V0Iiwid2hlbiIsImNvbnNvbGUiLCJ3YXJuIiwibmFtZSIsIm1lc3NhZ2UiLCJzdGFjayIsInJlYWR5RXhjZXB0aW9uIiwicmVhZHlXYWl0IiwiaG9sZFJlYWR5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJkb1Njcm9sbCIsInVpZCIsImNhY2hlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJzZXQiLCJhY2Nlc3MiLCJoYXNEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsInN0eWxlIiwiZGlzcGxheSIsImNzcyIsImN1ciIsImNzc051bWJlciIsInVuaXQiLCJzdGFydCIsImJvZHkiLCJzaG93IiwiaGlkZSIsInRvZ2dsZSIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIl9kZWZhdWx0Iiwib3B0Z3JvdXAiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaHRtbFByZWZpbHRlciIsImNyZWF0ZVRleHROb2RlIiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwib2ZmIiwiZXZlbnQiLCJnbG9iYWwiLCJoYW5kbGVyIiwiZXZlbnRzIiwiaGFuZGxlIiwidHJpZ2dlcmVkIiwiZGlzcGF0Y2giLCJzcGVjaWFsIiwiZGVsZWdhdGVUeXBlIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsIm5hbWVzcGFjZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwb3N0RGlzcGF0Y2giLCJhZGRQcm9wIiwiRXZlbnQiLCJlbnVtZXJhYmxlIiwib3JpZ2luYWxFdmVudCIsIndyaXRhYmxlIiwibG9hZCIsIm5vQnViYmxlIiwidHJpZ2dlciIsImJsdXIiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJpc1NpbXVsYXRlZCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY2hhckNvZGUiLCJrZXkiLCJrZXlDb2RlIiwiYnV0dG9ucyIsImNsaWVudFgiLCJjbGllbnRZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJwb2ludGVySWQiLCJwb2ludGVyVHlwZSIsInNjcmVlblgiLCJzY3JlZW5ZIiwidGFyZ2V0VG91Y2hlcyIsInRvRWxlbWVudCIsInRvdWNoZXMiLCJ3aGljaCIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwib24iLCJvbmUiLCJBYSIsIkJhIiwiQ2EiLCJEYSIsIkVhIiwiRmEiLCJHYSIsIkhhIiwiSWEiLCJodG1sIiwiY2xvbmUiLCJzcmMiLCJfZXZhbFVybCIsIkphIiwiY2xlYW5EYXRhIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIkthIiwiTGEiLCJNYSIsIm9wZW5lciIsImdldENvbXB1dGVkU3R5bGUiLCJjc3NUZXh0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJiYWNrZ3JvdW5kQ2xpcCIsImNsZWFyQ2xvbmVTdHlsZSIsInBpeGVsUG9zaXRpb24iLCJib3hTaXppbmdSZWxpYWJsZSIsInBpeGVsTWFyZ2luUmlnaHQiLCJyZWxpYWJsZU1hcmdpbkxlZnQiLCJOYSIsImdldFByb3BlcnR5VmFsdWUiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiT2EiLCJQYSIsIlFhIiwicG9zaXRpb24iLCJ2aXNpYmlsaXR5IiwiUmEiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFdlaWdodCIsIlNhIiwiVGEiLCJVYSIsIlZhIiwibWF4IiwiV2EiLCJYYSIsImdldENsaWVudFJlY3RzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY3NzSG9va3MiLCJvcGFjaXR5IiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJjb2x1bW5Db3VudCIsImZpbGxPcGFjaXR5IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwibGluZUhlaWdodCIsIm9yZGVyIiwib3JwaGFucyIsIndpZG93cyIsInpJbmRleCIsInpvb20iLCJjc3NQcm9wcyIsImlzRmluaXRlIiwibGVmdCIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJleHBhbmQiLCJZYSIsIlR3ZWVuIiwicHJvcCIsImVhc2luZyIsIm9wdGlvbnMiLCJwcm9wSG9va3MiLCJydW4iLCJkdXJhdGlvbiIsInBvcyIsInN0ZXAiLCJmeCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJsaW5lYXIiLCJzd2luZyIsImNvcyIsIlBJIiwiWmEiLCIkYSIsIl9hIiwiYWIiLCJiYiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRpY2siLCJjYiIsImRiIiwiaGVpZ2h0IiwiZWIiLCJoYiIsInR3ZWVuZXJzIiwiZmIiLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiaGlkZGVuIiwiZ2IiLCJwcmVmaWx0ZXJzIiwic3RhcnRUaW1lIiwidHdlZW5zIiwicHJvcHMiLCJvcHRzIiwic3BlY2lhbEVhc2luZyIsIm9yaWdpbmFsUHJvcGVydGllcyIsIm9yaWdpbmFsT3B0aW9ucyIsImNyZWF0ZVR3ZWVuIiwidGltZXIiLCJhbmltIiwiY29tcGxldGUiLCJBbmltYXRpb24iLCJ0d2VlbmVyIiwicHJlZmlsdGVyIiwic3BlZWQiLCJzcGVlZHMiLCJvbGQiLCJmYWRlVG8iLCJhbmltYXRlIiwiZmluaXNoIiwidGltZXJzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhckludGVydmFsIiwic2xvdyIsImZhc3QiLCJkZWxheSIsImNsZWFyVGltZW91dCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsInJhZGlvVmFsdWUiLCJpYiIsImpiIiwicmVtb3ZlQXR0ciIsImF0dHJIb29rcyIsImtiIiwibGIiLCJyZW1vdmVQcm9wIiwicHJvcEZpeCIsInBhcnNlSW50IiwibWIiLCJuYiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwib2IiLCJ2YWwiLCJ2YWxIb29rcyIsInBiIiwiaXNUcmlnZ2VyIiwicGFyZW50V2luZG93Iiwic2ltdWxhdGUiLCJ0cmlnZ2VySGFuZGxlciIsImhvdmVyIiwiZm9jdXNpbiIsInFiIiwicmIiLCJzYiIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwidGIiLCJ1YiIsInZiIiwid2IiLCJ4YiIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplIiwic2VyaWFsaXplQXJyYXkiLCJ5YiIsInpiIiwiQWIiLCJCYiIsIkNiIiwiRGIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiSmIiLCJLYiIsImRhdGFUeXBlcyIsIkxiIiwiYWpheFNldHRpbmdzIiwiZmxhdE9wdGlvbnMiLCJNYiIsIm1pbWVUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJjb252ZXJ0ZXJzIiwiTmIiLCJyZXNwb25zZUZpZWxkcyIsImRhdGFGaWx0ZXIiLCJkYXRhVHlwZSIsImFjdGl2ZSIsImxhc3RNb2RpZmllZCIsImV0YWciLCJ1cmwiLCJpc0xvY2FsIiwicHJvdG9jb2wiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJhY2NlcHRzIiwieG1sIiwianNvbiIsImNvbnRleHQiLCJhamF4U2V0dXAiLCJhamF4UHJlZmlsdGVyIiwiYWpheFRyYW5zcG9ydCIsImFqYXgiLCJzdGF0dXNDb2RlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsIm92ZXJyaWRlTWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsIm1ldGhvZCIsImNyb3NzRG9tYWluIiwiaG9zdCIsInRyYWRpdGlvbmFsIiwiaGFzQ29udGVudCIsImlmTW9kaWZpZWQiLCJoZWFkZXJzIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJ0aW1lb3V0Iiwic2VuZCIsInN0YXR1c1RleHQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwid3JhcCIsInVud3JhcCIsInZpc2libGUiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiT2IiLCJQYiIsImNvcnMiLCJvcGVuIiwidXNlcm5hbWUiLCJ4aHJGaWVsZHMiLCJvbmxvYWQiLCJvbmVycm9yIiwib25hYm9ydCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsImJpbmFyeSIsInJlc3BvbnNlIiwic2NyaXB0IiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJRYiIsIlJiIiwianNvbnAiLCJqc29ucENhbGxiYWNrIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiaW1wbGVtZW50YXRpb24iLCJhbmltYXRlZCIsIlNiIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsIm9mZnNldFBhcmVudCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJjb250ZW50IiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsInBhcnNlSlNPTiIsImRlZmluZSIsImFtZCIsIlRiIiwialF1ZXJ5IiwiVWIiLCJub0NvbmZsaWN0IiwiaXNCcm93c2VyIiwibG9uZ2VyVGltZW91dEJyb3dzZXJzIiwidGltZW91dER1cmF0aW9uIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWljcm90YXNrRGVib3VuY2UiLCJjYWxsZWQiLCJQcm9taXNlIiwidGFza0RlYm91bmNlIiwic2NoZWR1bGVkIiwic3VwcG9ydHNNaWNyb1Rhc2tzIiwiZGVib3VuY2UiLCJmdW5jdGlvblRvQ2hlY2siLCJnZXRUeXBlIiwiZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IiwiZWxlbWVudCIsInByb3BlcnR5IiwiZ2V0UGFyZW50Tm9kZSIsImdldFNjcm9sbFBhcmVudCIsImlzSUUxMSIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwiaXNJRTEwIiwiaXNJRSIsInZlcnNpb24iLCJnZXRPZmZzZXRQYXJlbnQiLCJub09mZnNldFBhcmVudCIsIm5leHRFbGVtZW50U2libGluZyIsImlzT2Zmc2V0Q29udGFpbmVyIiwiZ2V0Um9vdCIsIm5vZGUiLCJmaW5kQ29tbW9uT2Zmc2V0UGFyZW50IiwiZWxlbWVudDEiLCJlbGVtZW50MiIsIk5vZGUiLCJET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkciLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsImVsZW1lbnQxcm9vdCIsImdldFNjcm9sbCIsInNpZGUiLCJ1cHBlclNpZGUiLCJzY3JvbGxpbmdFbGVtZW50IiwiaW5jbHVkZVNjcm9sbCIsInJlY3QiLCJzdWJ0cmFjdCIsIm1vZGlmaWVyIiwiYm90dG9tIiwicmlnaHQiLCJnZXRCb3JkZXJzU2l6ZSIsInN0eWxlcyIsImF4aXMiLCJzaWRlQSIsInNpZGVCIiwiZ2V0U2l6ZSIsImNvbXB1dGVkU3R5bGUiLCJnZXRXaW5kb3dTaXplcyIsIl9leHRlbmRzIiwiYXNzaWduIiwiZ2V0Q2xpZW50UmVjdCIsIm9mZnNldHMiLCJzaXplcyIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaG9yaXpTY3JvbGxiYXIiLCJ2ZXJ0U2Nyb2xsYmFyIiwiZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIiwiZml4ZWRQb3NpdGlvbiIsImlzSFRNTCIsImNoaWxkcmVuUmVjdCIsInBhcmVudFJlY3QiLCJzY3JvbGxQYXJlbnQiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsIm1hcmdpblRvcCIsImdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSIsImV4Y2x1ZGVTY3JvbGwiLCJyZWxhdGl2ZU9mZnNldCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImlzRml4ZWQiLCJnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IiwicGFyZW50RWxlbWVudCIsImVsIiwiZ2V0Qm91bmRhcmllcyIsInBvcHBlciIsInJlZmVyZW5jZSIsImJvdW5kYXJpZXNFbGVtZW50IiwiYm91bmRhcmllcyIsImJvdW5kYXJpZXNOb2RlIiwiZ2V0QXJlYSIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwicGxhY2VtZW50IiwicmVmUmVjdCIsInJlY3RzIiwic29ydGVkQXJlYXMiLCJrZXlzIiwiYXJlYSIsImZpbHRlcmVkQXJlYXMiLCJjb21wdXRlZFBsYWNlbWVudCIsInZhcmlhdGlvbiIsImdldFJlZmVyZW5jZU9mZnNldHMiLCJjb21tb25PZmZzZXRQYXJlbnQiLCJnZXRPdXRlclNpemVzIiwibWFyZ2luQm90dG9tIiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJtYXRjaGVkIiwiZ2V0UG9wcGVyT2Zmc2V0cyIsInJlZmVyZW5jZU9mZnNldHMiLCJwb3BwZXJSZWN0IiwicG9wcGVyT2Zmc2V0cyIsImlzSG9yaXoiLCJtYWluU2lkZSIsInNlY29uZGFyeVNpZGUiLCJtZWFzdXJlbWVudCIsInNlY29uZGFyeU1lYXN1cmVtZW50IiwiYXJyIiwiY2hlY2siLCJmaW5kSW5kZXgiLCJvYmoiLCJydW5Nb2RpZmllcnMiLCJtb2RpZmllcnMiLCJlbmRzIiwibW9kaWZpZXJzVG9SdW4iLCJ1bmRlZmluZWQiLCJmb3JFYWNoIiwidXBkYXRlIiwiaXNEZXN0cm95ZWQiLCJpbnN0YW5jZSIsImFycm93U3R5bGVzIiwiZmxpcHBlZCIsInBvc2l0aW9uRml4ZWQiLCJmbGlwIiwib3JpZ2luYWxQbGFjZW1lbnQiLCJpc0NyZWF0ZWQiLCJvbkNyZWF0ZSIsIm9uVXBkYXRlIiwiaXNNb2RpZmllckVuYWJsZWQiLCJtb2RpZmllck5hbWUiLCJzb21lIiwiZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lIiwicHJlZml4ZXMiLCJ1cHBlclByb3AiLCJjaGFyQXQiLCJwcmVmaXgiLCJ0b0NoZWNrIiwiZGVzdHJveSIsIndpbGxDaGFuZ2UiLCJkaXNhYmxlRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVPbkRlc3Ryb3kiLCJnZXRXaW5kb3ciLCJhdHRhY2hUb1Njcm9sbFBhcmVudHMiLCJjYWxsYmFjayIsInNjcm9sbFBhcmVudHMiLCJpc0JvZHkiLCJwYXNzaXZlIiwic2V0dXBFdmVudExpc3RlbmVycyIsInVwZGF0ZUJvdW5kIiwic2Nyb2xsRWxlbWVudCIsImV2ZW50c0VuYWJsZWQiLCJlbmFibGVFdmVudExpc3RlbmVycyIsInNjaGVkdWxlVXBkYXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJzZXRTdHlsZXMiLCJzZXRBdHRyaWJ1dGVzIiwiYXBwbHlTdHlsZSIsImFycm93RWxlbWVudCIsImFwcGx5U3R5bGVPbkxvYWQiLCJtb2RpZmllck9wdGlvbnMiLCJjb21wdXRlU3R5bGUiLCJsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24iLCJncHVBY2NlbGVyYXRpb24iLCJvZmZzZXRQYXJlbnRSZWN0IiwiZmxvb3IiLCJyb3VuZCIsInByZWZpeGVkUHJvcGVydHkiLCJpbnZlcnRUb3AiLCJpbnZlcnRMZWZ0IiwiYXJyb3ciLCJpc01vZGlmaWVyUmVxdWlyZWQiLCJyZXF1ZXN0aW5nTmFtZSIsInJlcXVlc3RlZE5hbWUiLCJyZXF1ZXN0aW5nIiwiaXNSZXF1aXJlZCIsInJlcXVlc3RlZCIsInF1ZXJ5U2VsZWN0b3IiLCJpc1ZlcnRpY2FsIiwibGVuIiwic2lkZUNhcGl0YWxpemVkIiwiYWx0U2lkZSIsIm9wU2lkZSIsImFycm93RWxlbWVudFNpemUiLCJjZW50ZXIiLCJwb3BwZXJNYXJnaW5TaWRlIiwicG9wcGVyQm9yZGVyU2lkZSIsInNpZGVWYWx1ZSIsIm1pbiIsImdldE9wcG9zaXRlVmFyaWF0aW9uIiwicGxhY2VtZW50cyIsInZhbGlkUGxhY2VtZW50cyIsImNsb2Nrd2lzZSIsImNvdW50ZXIiLCJCRUhBVklPUlMiLCJGTElQIiwiQ0xPQ0tXSVNFIiwiQ09VTlRFUkNMT0NLV0lTRSIsInBsYWNlbWVudE9wcG9zaXRlIiwiZmxpcE9yZGVyIiwiYmVoYXZpb3IiLCJyZWZPZmZzZXRzIiwib3ZlcmxhcHNSZWYiLCJvdmVyZmxvd3NMZWZ0Iiwib3ZlcmZsb3dzUmlnaHQiLCJvdmVyZmxvd3NUb3AiLCJvdmVyZmxvd3NCb3R0b20iLCJvdmVyZmxvd3NCb3VuZGFyaWVzIiwiZmxpcHBlZFZhcmlhdGlvbiIsImZsaXBWYXJpYXRpb25zIiwia2VlcFRvZ2V0aGVyIiwidG9WYWx1ZSIsInN0ciIsInNpemUiLCJwYXJzZU9mZnNldCIsImJhc2VQbGFjZW1lbnQiLCJ1c2VIZWlnaHQiLCJmcmFnbWVudHMiLCJmcmFnIiwiZGl2aWRlciIsInNlYXJjaCIsInNwbGl0UmVnZXgiLCJvcHMiLCJvcCIsIm1lcmdlV2l0aFByZXZpb3VzIiwicmVkdWNlIiwiaW5kZXgyIiwicHJldmVudE92ZXJmbG93IiwidHJhbnNmb3JtUHJvcCIsInBvcHBlclN0eWxlcyIsInRyYW5zZm9ybSIsInByaW9yaXR5IiwicHJpbWFyeSIsImVzY2FwZVdpdGhSZWZlcmVuY2UiLCJzZWNvbmRhcnkiLCJzaGlmdHZhcmlhdGlvbiIsInNoaWZ0T2Zmc2V0cyIsImJvdW5kIiwiaW5uZXIiLCJzdWJ0cmFjdExlbmd0aCIsIm9uTG9hZCIsIkRlZmF1bHRzIiwiUG9wcGVyIiwiVXRpbHMiLCJQb3BwZXJVdGlscyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsQ0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDO0FBQWEsc0JBQWlCQyxNQUFqQix5Q0FBaUJBLE1BQWpCLE1BQXlCLG9CQUFpQkEsT0FBT0MsT0FBeEIsQ0FBekIsR0FB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Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOC9CLE9BQU9DLEtBQVAsR0FBZSxDQUFDLE9BQU9waEMsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUNzWSxNQUExQyxFQUFrRCtvQixXQUFqRTtBQUNBRixPQUFPcEQsVUFBUCxHQUFvQkEsVUFBcEI7O0FBSUE7QUFIQW9ELE9BQU9ELFFBQVAsR0FBa0JBLFFBQWxCOzs7QUNoMEVBNzRCLEVBQUUsWUFBVzs7QUFFVDs7QUFFSCxDQUpEIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgalF1ZXJ5IHYzLjEuMSB8IChjKSBqUXVlcnkgRm91bmRhdGlvbiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9W10sZD1hLmRvY3VtZW50LGU9T2JqZWN0LmdldFByb3RvdHlwZU9mLGY9Yy5zbGljZSxnPWMuY29uY2F0LGg9Yy5wdXNoLGk9Yy5pbmRleE9mLGo9e30saz1qLnRvU3RyaW5nLGw9ai5oYXNPd25Qcm9wZXJ0eSxtPWwudG9TdHJpbmcsbj1tLmNhbGwoT2JqZWN0KSxvPXt9O2Z1bmN0aW9uIHAoYSxiKXtiPWJ8fGQ7dmFyIGM9Yi5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2MudGV4dD1hLGIuaGVhZC5hcHBlbmRDaGlsZChjKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpfXZhciBxPVwiMy4xLjFcIixyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyByLmZuLmluaXQoYSxiKX0scz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csdD0vXi1tcy0vLHU9Ly0oW2Etel0pL2csdj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O3IuZm49ci5wcm90b3R5cGU9e2pxdWVyeTpxLGNvbnN0cnVjdG9yOnIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBmLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9mLmNhbGwodGhpcyk6YTwwP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPXIubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxifSxlYWNoOmZ1bmN0aW9uKGEpe3JldHVybiByLmVhY2godGhpcyxhKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhyLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoYTwwP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmM8Yj9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6aCxzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LHIuZXh0ZW5kPXIuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8ci5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtoPGk7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKHIuaXNQbGFpbk9iamVjdChkKXx8KGU9ci5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZyLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZyLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPXIuZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxyLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhxK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PXIudHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXt2YXIgYj1yLnR5cGUoYSk7cmV0dXJuKFwibnVtYmVyXCI9PT1ifHxcInN0cmluZ1wiPT09YikmJiFpc05hTihhLXBhcnNlRmxvYXQoYSkpfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiLGM7cmV0dXJuISghYXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PWsuY2FsbChhKSkmJighKGI9ZShhKSl8fChjPWwuY2FsbChiLFwiY29uc3RydWN0b3JcIikmJmIuY29uc3RydWN0b3IsXCJmdW5jdGlvblwiPT10eXBlb2YgYyYmbS5jYWxsKGMpPT09bikpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2pbay5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXtwKGEpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSh0LFwibXMtXCIpLnJlcGxhY2UodSx2KX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wO2lmKHcoYSkpe2ZvcihjPWEubGVuZ3RoO2Q8YztkKyspaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrfWVsc2UgZm9yKGQgaW4gYSlpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKHMsXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYodyhPYmplY3QoYSkpP3IubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6aC5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmkuY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtkPGM7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7ZjxnO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9MCxoPVtdO2lmKHcoYSkpZm9yKGQ9YS5sZW5ndGg7ZjxkO2YrKyllPWIoYVtmXSxmLGMpLG51bGwhPWUmJmgucHVzaChlKTtlbHNlIGZvcihmIGluIGEpZT1iKGFbZl0sZixjKSxudWxsIT1lJiZoLnB1c2goZSk7cmV0dXJuIGcuYXBwbHkoW10saCl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZTtpZihcInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxyLmlzRnVuY3Rpb24oYSkpcmV0dXJuIGQ9Zi5jYWxsKGFyZ3VtZW50cywyKSxlPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxkLmNvbmNhdChmLmNhbGwoYXJndW1lbnRzKSkpfSxlLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8ci5ndWlkKyssZX0sbm93OkRhdGUubm93LHN1cHBvcnQ6b30pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKHIuZm5bU3ltYm9sLml0ZXJhdG9yXT1jW1N5bWJvbC5pdGVyYXRvcl0pLHIuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7altcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gdyhhKXt2YXIgYj0hIWEmJlwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPXIudHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCIhPT1jJiYhci5pc1dpbmRvdyhhKSYmKFwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYSl9dmFyIHg9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKzEqbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1oYSgpLHo9aGEoKSxBPWhhKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9e30uaGFzT3duUHJvcGVydHksRD1bXSxFPUQucG9wLEY9RC5wdXNoLEc9RC5wdXNoLEg9RC5zbGljZSxJPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxKPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixLPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixMPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixNPVwiXFxcXFtcIitLK1wiKihcIitMK1wiKSg/OlwiK0srXCIqKFsqXiR8IX5dPz0pXCIrSytcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK0wrXCIpKXwpXCIrSytcIipcXFxcXVwiLE49XCI6KFwiK0wrXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK00rXCIpKil8LiopXFxcXCl8KVwiLE89bmV3IFJlZ0V4cChLK1wiK1wiLFwiZ1wiKSxQPW5ldyBSZWdFeHAoXCJeXCIrSytcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrSytcIiskXCIsXCJnXCIpLFE9bmV3IFJlZ0V4cChcIl5cIitLK1wiKixcIitLK1wiKlwiKSxSPW5ldyBSZWdFeHAoXCJeXCIrSytcIiooWz4rfl18XCIrSytcIilcIitLK1wiKlwiKSxTPW5ldyBSZWdFeHAoXCI9XCIrSytcIiooW15cXFxcXSdcXFwiXSo/KVwiK0srXCIqXFxcXF1cIixcImdcIiksVD1uZXcgUmVnRXhwKE4pLFU9bmV3IFJlZ0V4cChcIl5cIitMK1wiJFwiKSxWPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrTCtcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitMK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrTCtcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitNKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitOKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitLK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrSytcIiooPzooWystXXwpXCIrSytcIiooXFxcXGQrKXwpKVwiK0srXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrSitcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK0srXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK0srXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK0srXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFc9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxYPS9eaFxcZCQvaSxZPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sWj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLywkPS9bK35dLyxfPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitLK1wiP3woXCIrSytcIil8LilcIixcImlnXCIpLGFhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjpkPDA/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGJhPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLGNhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/XCJcXDBcIj09PWE/XCJcXHVmZmZkXCI6YS5zbGljZSgwLC0xKStcIlxcXFxcIithLmNoYXJDb2RlQXQoYS5sZW5ndGgtMSkudG9TdHJpbmcoMTYpK1wiIFwiOlwiXFxcXFwiK2F9LGRhPWZ1bmN0aW9uKCl7bSgpfSxlYT10YShmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwJiYoXCJmb3JtXCJpbiBhfHxcImxhYmVsXCJpbiBhKX0se2RpcjpcInBhcmVudE5vZGVcIixuZXh0OlwibGVnZW5kXCJ9KTt0cnl7Ry5hcHBseShEPUguY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRFt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChmYSl7Rz17YXBwbHk6RC5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtGLmFwcGx5KGEsSC5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZ2EoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscz1iJiZiLm93bmVyRG9jdW1lbnQsdz1iP2Iubm9kZVR5cGU6OTtpZihkPWR8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PXcmJjkhPT13JiYxMSE9PXcpcmV0dXJuIGQ7aWYoIWUmJigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixwKSl7aWYoMTEhPT13JiYobD1aLmV4ZWMoYSkpKWlmKGY9bFsxXSl7aWYoOT09PXcpe2lmKCEoaj1iLmdldEVsZW1lbnRCeUlkKGYpKSlyZXR1cm4gZDtpZihqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZSBpZihzJiYoaj1zLmdldEVsZW1lbnRCeUlkKGYpKSYmdChiLGopJiZqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZXtpZihsWzJdKXJldHVybiBHLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoZj1sWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEcuYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZikpLGR9aWYoYy5xc2EmJiFBW2ErXCIgXCJdJiYoIXF8fCFxLnRlc3QoYSkpKXtpZigxIT09dylzPWIscj1hO2Vsc2UgaWYoXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGs9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/az1rLnJlcGxhY2UoYmEsY2EpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixrPXUpLG89ZyhhKSxoPW8ubGVuZ3RoO3doaWxlKGgtLSlvW2hdPVwiI1wiK2srXCIgXCIrc2Eob1toXSk7cj1vLmpvaW4oXCIsXCIpLHM9JC50ZXN0KGEpJiZxYShiLnBhcmVudE5vZGUpfHxifWlmKHIpdHJ5e3JldHVybiBHLmFwcGx5KGQscy5xdWVyeVNlbGVjdG9yQWxsKHIpKSxkfWNhdGNoKHgpe31maW5hbGx5e2s9PT11JiZiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGkoYS5yZXBsYWNlKFAsXCIkMVwiKSxiLGQsZSl9ZnVuY3Rpb24gaGEoKXt2YXIgYT1bXTtmdW5jdGlvbiBiKGMsZSl7cmV0dXJuIGEucHVzaChjK1wiIFwiKT5kLmNhY2hlTGVuZ3RoJiZkZWxldGUgYlthLnNoaWZ0KCldLGJbYytcIiBcIl09ZX1yZXR1cm4gYn1mdW5jdGlvbiBpYShhKXtyZXR1cm4gYVt1XT0hMCxhfWZ1bmN0aW9uIGphKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGthKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1jLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24gbGEoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiZhLnNvdXJjZUluZGV4LWIuc291cmNlSW5kZXg7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIG1hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbmEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuXCJmb3JtXCJpbiBiP2IucGFyZW50Tm9kZSYmYi5kaXNhYmxlZD09PSExP1wibGFiZWxcImluIGI/XCJsYWJlbFwiaW4gYi5wYXJlbnROb2RlP2IucGFyZW50Tm9kZS5kaXNhYmxlZD09PWE6Yi5kaXNhYmxlZD09PWE6Yi5pc0Rpc2FibGVkPT09YXx8Yi5pc0Rpc2FibGVkIT09IWEmJmVhKGIpPT09YTpiLmRpc2FibGVkPT09YTpcImxhYmVsXCJpbiBiJiZiLmRpc2FibGVkPT09YX19ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGlhKGZ1bmN0aW9uKGIpe3JldHVybiBiPStiLGlhKGZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hKFtdLGMubGVuZ3RoLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWNbZT1mW2ddXSYmKGNbZV09IShkW2VdPWNbZV0pKX0pfSl9ZnVuY3Rpb24gcWEoYSl7cmV0dXJuIGEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZhfWM9Z2Euc3VwcG9ydD17fSxmPWdhLmlzWE1MPWZ1bmN0aW9uKGEpe3ZhciBiPWEmJihhLm93bmVyRG9jdW1lbnR8fGEpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hIWImJlwiSFRNTFwiIT09Yi5ub2RlTmFtZX0sbT1nYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89bi5kb2N1bWVudEVsZW1lbnQscD0hZihuKSx2IT09biYmKGU9bi5kZWZhdWx0VmlldykmJmUudG9wIT09ZSYmKGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixkYSwhMSk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZGEpKSxjLmF0dHJpYnV0ZXM9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuY2xhc3NOYW1lPVwiaVwiLCFhLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGMuZ2V0RWxlbWVudHNCeVRhZ05hbWU9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQobi5jcmVhdGVDb21tZW50KFwiXCIpKSwhYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPVkudGVzdChuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGMuZ2V0QnlJZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gby5hcHBlbmRDaGlsZChhKS5pZD11LCFuLmdldEVsZW1lbnRzQnlOYW1lfHwhbi5nZXRFbGVtZW50c0J5TmFtZSh1KS5sZW5ndGh9KSxjLmdldEJ5SWQ/KGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0sZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGM/W2NdOltdfX0pOihkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19LGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYyxkLGUsZj1iLmdldEVsZW1lbnRCeUlkKGEpO2lmKGYpe2lmKGM9Zi5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIiksYyYmYy52YWx1ZT09PWEpcmV0dXJuW2ZdO2U9Yi5nZXRFbGVtZW50c0J5TmFtZShhKSxkPTA7d2hpbGUoZj1lW2QrK10paWYoYz1mLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSxjJiZjLnZhbHVlPT09YSlyZXR1cm5bZl19cmV0dXJuW119fSksZC5maW5kLlRBRz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWU/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTpjLnFzYT9iLnF1ZXJ5U2VsZWN0b3JBbGwoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmcClyZXR1cm4gYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpfSxyPVtdLHE9W10sKGMucXNhPVkudGVzdChuLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGphKGZ1bmN0aW9uKGEpe28uYXBwZW5kQ2hpbGQoYSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK3UrXCInPjwvYT48c2VsZWN0IGlkPSdcIit1K1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsYS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZxLnB1c2goXCJbKl4kXT1cIitLK1wiKig/OicnfFxcXCJcXFwiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8cS5wdXNoKFwiXFxcXFtcIitLK1wiKig/OnZhbHVlfFwiK0orXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrdStcIi1dXCIpLmxlbmd0aHx8cS5wdXNoKFwifj1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHxxLnB1c2goXCI6Y2hlY2tlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK3UrXCIrKlwiKS5sZW5ndGh8fHEucHVzaChcIi4jLitbK35dXCIpfSksamEoZnVuY3Rpb24oYSl7YS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrSytcIipbKl4kfCF+XT89XCIpLDIhPT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksby5hcHBlbmRDaGlsZChhKS5kaXNhYmxlZD0hMCwyIT09YS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmcS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPVkudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmamEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcIipcIikscy5jYWxsKGEsXCJbcyE9JyddOnhcIiksci5wdXNoKFwiIT1cIixOKX0pLHE9cS5sZW5ndGgmJm5ldyBSZWdFeHAocS5qb2luKFwifFwiKSkscj1yLmxlbmd0aCYmbmV3IFJlZ0V4cChyLmpvaW4oXCJ8XCIpKSxiPVkudGVzdChvLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx0PWJ8fFkudGVzdChvLmNvbnRhaW5zKT9mdW5jdGlvbihhLGIpe3ZhciBjPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1kfHwhKCFkfHwxIT09ZC5ub2RlVHlwZXx8IShjLmNvbnRhaW5zP2MuY29udGFpbnMoZCk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkKSkpfTpmdW5jdGlvbihhLGIpe2lmKGIpd2hpbGUoYj1iLnBhcmVudE5vZGUpaWYoYj09PWEpcmV0dXJuITA7cmV0dXJuITF9LEI9Yj9mdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGQ9IWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIGQ/ZDooZD0oYS5vd25lckRvY3VtZW50fHxhKT09PShiLm93bmVyRG9jdW1lbnR8fGIpP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik6MSwxJmR8fCFjLnNvcnREZXRhY2hlZCYmYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKT09PWQ/YT09PW58fGEub3duZXJEb2N1bWVudD09PXYmJnQodixhKT8tMTpiPT09bnx8Yi5vd25lckRvY3VtZW50PT09diYmdCh2LGIpPzE6az9JKGssYSktSShrLGIpOjA6NCZkPy0xOjEpfTpmdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGMsZD0wLGU9YS5wYXJlbnROb2RlLGY9Yi5wYXJlbnROb2RlLGc9W2FdLGg9W2JdO2lmKCFlfHwhZilyZXR1cm4gYT09PW4/LTE6Yj09PW4/MTplPy0xOmY/MTprP0koayxhKS1JKGssYik6MDtpZihlPT09ZilyZXR1cm4gbGEoYSxiKTtjPWE7d2hpbGUoYz1jLnBhcmVudE5vZGUpZy51bnNoaWZ0KGMpO2M9Yjt3aGlsZShjPWMucGFyZW50Tm9kZSloLnVuc2hpZnQoYyk7d2hpbGUoZ1tkXT09PWhbZF0pZCsrO3JldHVybiBkP2xhKGdbZF0saFtkXSk6Z1tkXT09PXY/LTE6aFtkXT09PXY/MTowfSxuKTpufSxnYS5tYXRjaGVzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGdhKGEsbnVsbCxudWxsLGIpfSxnYS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oYSxiKXtpZigoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksYj1iLnJlcGxhY2UoUyxcIj0nJDEnXVwiKSxjLm1hdGNoZXNTZWxlY3RvciYmcCYmIUFbYitcIiBcIl0mJighcnx8IXIudGVzdChiKSkmJighcXx8IXEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGdhKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGdhLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZ2EuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkMuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGdhLmVzY2FwZT1mdW5jdGlvbihhKXtyZXR1cm4oYStcIlwiKS5yZXBsYWNlKGJhLGNhKX0sZ2EuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGdhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1nYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWdhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmlhLG1hdGNoOlYsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoXyxhYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShfLGFhKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxnYS5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZnYS5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gVi5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlQudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShfLGFhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitLK1wiKVwiK2ErXCIoXCIrSytcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWdhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOiFifHwoZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShPLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iJiYoZT09PWN8fGUuc2xpY2UoMCxjLmxlbmd0aCsxKT09PWMrXCItXCIpKX19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoLHQ9ITE7aWYocSl7aWYoZil7d2hpbGUocCl7bT1iO3doaWxlKG09bVtwXSlpZihoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7bT1xLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4mJmpbMl0sbT1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoMT09PW0ubm9kZVR5cGUmJisrdCYmbT09PWIpe2tbYV09W3csbix0XTticmVha319ZWxzZSBpZihzJiYobT1iLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4pLHQ9PT0hMSl3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKSYmKyt0JiYocyYmKGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGtbYV09W3csdF0pLG09PT1iKSlicmVhaztyZXR1cm4gdC09ZSx0PT09ZHx8dCVkPT09MCYmdC9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aWEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUkoYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aWEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFAsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aWEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczppYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGdhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKF8sYWEpLGZ1bmN0aW9uKGIpe3JldHVybihiLnRleHRDb250ZW50fHxiLmlubmVyVGV4dHx8ZShiKSkuaW5kZXhPZihhKT4tMX19KSxsYW5nOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBVLnRlc3QoYXx8XCJcIil8fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrYSksYT1hLnJlcGxhY2UoXyxhYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpvYSghMSksZGlzYWJsZWQ6b2EoITApLGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFgudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFcudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpwYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6cGEoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOnBhKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bYzwwP2MrYjpjXX0pLGV2ZW46cGEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtjPGI7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6cGEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtjPGI7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpwYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWM8MD9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0OnBhKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YzwwP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1uYShiKTtmdW5jdGlvbiByYSgpe31yYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHJhLGc9Z2EudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXtjJiYhKGU9US5leGVjKGgpKXx8KGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9Ui5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShQLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1WW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/Z2EuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiBzYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtiPGM7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gdGEoYSxiLGMpe3ZhciBkPWIuZGlyLGU9Yi5uZXh0LGY9ZXx8ZCxnPWMmJlwicGFyZW50Tm9kZVwiPT09ZixoPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZSl7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxnKXJldHVybiBhKGIsYyxlKTtyZXR1cm4hMX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtPVt3LGhdO2lmKGkpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGcpJiZhKGIsYyxpKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZylpZihsPWJbdV18fChiW3VdPXt9KSxrPWxbYi51bmlxdWVJRF18fChsW2IudW5pcXVlSURdPXt9KSxlJiZlPT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKWI9YltkXXx8YjtlbHNle2lmKChqPWtbZl0pJiZqWzBdPT09dyYmalsxXT09PWgpcmV0dXJuIG1bMl09alsyXTtpZihrW2ZdPW0sbVsyXT1hKGIsYyxpKSlyZXR1cm4hMH1yZXR1cm4hMX19ZnVuY3Rpb24gdWEoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdmEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZDxlO2QrKylnYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gd2EoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aDxpO2grKykoZj1hW2hdKSYmKGMmJiFjKGYsZCxlKXx8KGcucHVzaChmKSxqJiZiLnB1c2goaCkpKTtyZXR1cm4gZ31mdW5jdGlvbiB4YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD14YShkKSksZSYmIWVbdV0mJihlPXhhKGUsZikpLGlhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHZhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6d2EocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXdhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9JKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj13YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6Ry5hcHBseShnLHIpfSl9ZnVuY3Rpb24geWEoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXRhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD10YShmdW5jdGlvbihhKXtyZXR1cm4gSShiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07aTxmO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVt0YSh1YShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtlPGY7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4geGEoaT4xJiZ1YShtKSxpPjEmJnNhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUCxcIiQxXCIpLGMsaTxlJiZ5YShhLnNsaWNlKGksZSkpLGU8ZiYmeWEoYT1hLnNsaWNlKGUpKSxlPGYmJnNhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHVhKG0pfWZ1bmN0aW9uIHphKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG8scSxyPTAscz1cIjBcIix0PWYmJltdLHU9W10sdj1qLHg9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx5PXcrPW51bGw9PXY/MTpNYXRoLnJhbmRvbSgpfHwuMSx6PXgubGVuZ3RoO2ZvcihrJiYoaj1nPT09bnx8Z3x8ayk7cyE9PXomJm51bGwhPShsPXhbc10pO3MrKyl7aWYoZSYmbCl7bz0wLGd8fGwub3duZXJEb2N1bWVudD09PW58fChtKGwpLGg9IXApO3doaWxlKHE9YVtvKytdKWlmKHEobCxnfHxuLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9eSl9YyYmKChsPSFxJiZsKSYmci0tLGYmJnQucHVzaChsKSl9aWYocis9cyxjJiZzIT09cil7bz0wO3doaWxlKHE9YltvKytdKXEodCx1LGcsaCk7aWYoZil7aWYocj4wKXdoaWxlKHMtLSl0W3NdfHx1W3NdfHwodVtzXT1FLmNhbGwoaSkpO3U9d2EodSl9Ry5hcHBseShpLHUpLGsmJiFmJiZ1Lmxlbmd0aD4wJiZyK2IubGVuZ3RoPjEmJmdhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXksaj12KSx0fTtyZXR1cm4gYz9pYShmKTpmfXJldHVybiBoPWdhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXlhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx6YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9Z2Euc2VsZWN0PWZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGksaixrLGwsbT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG49IWUmJmcoYT1tLnNlbGVjdG9yfHxhKTtpZihjPWN8fFtdLDE9PT1uLmxlbmd0aCl7aWYoaT1uWzBdPW5bMF0uc2xpY2UoMCksaS5sZW5ndGg+MiYmXCJJRFwiPT09KGo9aVswXSkudHlwZSYmOT09PWIubm9kZVR5cGUmJnAmJmQucmVsYXRpdmVbaVsxXS50eXBlXSl7aWYoYj0oZC5maW5kLklEKGoubWF0Y2hlc1swXS5yZXBsYWNlKF8sYWEpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGM7bSYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2UoaS5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9Zj1WLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6aS5sZW5ndGg7d2hpbGUoZi0tKXtpZihqPWlbZl0sZC5yZWxhdGl2ZVtrPWoudHlwZV0pYnJlYWs7aWYoKGw9ZC5maW5kW2tdKSYmKGU9bChqLm1hdGNoZXNbMF0ucmVwbGFjZShfLGFhKSwkLnRlc3QoaVswXS50eXBlKSYmcWEoYi5wYXJlbnROb2RlKXx8YikpKXtpZihpLnNwbGljZShmLDEpLGE9ZS5sZW5ndGgmJnNhKGkpLCFhKXJldHVybiBHLmFwcGx5KGMsZSksYzticmVha319fXJldHVybihtfHxoKGEsbikpKGUsYiwhcCxjLCFifHwkLnRlc3QoYSkmJnFhKGIucGFyZW50Tm9kZSl8fGIpLGN9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxrYShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7aWYoIWMpcmV0dXJuIGEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGthKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7aWYoIWMmJlwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gYS5kZWZhdWx0VmFsdWV9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxrYShKLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtpZighYylyZXR1cm4gYVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxnYX0oYSk7ci5maW5kPXgsci5leHByPXguc2VsZWN0b3JzLHIuZXhwcltcIjpcIl09ci5leHByLnBzZXVkb3Msci51bmlxdWVTb3J0PXIudW5pcXVlPXgudW5pcXVlU29ydCxyLnRleHQ9eC5nZXRUZXh0LHIuaXNYTUxEb2M9eC5pc1hNTCxyLmNvbnRhaW5zPXguY29udGFpbnMsci5lc2NhcGVTZWxlY3Rvcj14LmVzY2FwZTt2YXIgeT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmcihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9LEE9ci5leHByLm1hdGNoLm5lZWRzQ29udGV4dCxCPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pLEM9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIEQoYSxiLGMpe3JldHVybiByLmlzRnVuY3Rpb24oYik/ci5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk6Yi5ub2RlVHlwZT9yLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk6XCJzdHJpbmdcIiE9dHlwZW9mIGI/ci5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGkuY2FsbChiLGEpPi0xIT09Y30pOkMudGVzdChiKT9yLmZpbHRlcihiLGEsYyk6KGI9ci5maWx0ZXIoYixhKSxyLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gaS5jYWxsKGIsYSk+LTEhPT1jJiYxPT09YS5ub2RlVHlwZX0pKX1yLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/ci5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpyLmZpbmQubWF0Y2hlcyhhLHIuZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sci5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMubGVuZ3RoLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2socihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2I8ZDtiKyspaWYoci5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihjPXRoaXMucHVzaFN0YWNrKFtdKSxiPTA7YjxkO2IrKylyLmZpbmQoYSxlW2JdLGMpO3JldHVybiBkPjE/ci51bmlxdWVTb3J0KGMpOmN9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRCh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soRCh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEhRCh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZBLnRlc3QoYSk/cihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBFLEY9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sRz1yLmZuLmluaXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlLGY7aWYoIWEpcmV0dXJuIHRoaXM7aWYoYz1jfHxFLFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihlPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkYuZXhlYyhhKSwhZXx8IWVbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxjKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihlWzFdKXtpZihiPWIgaW5zdGFuY2VvZiByP2JbMF06YixyLm1lcmdlKHRoaXMsci5wYXJzZUhUTUwoZVsxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpkLCEwKSksQi50ZXN0KGVbMV0pJiZyLmlzUGxhaW5PYmplY3QoYikpZm9yKGUgaW4gYilyLmlzRnVuY3Rpb24odGhpc1tlXSk/dGhpc1tlXShiW2VdKTp0aGlzLmF0dHIoZSxiW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gZj1kLmdldEVsZW1lbnRCeUlkKGVbMl0pLGYmJih0aGlzWzBdPWYsdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6ci5pc0Z1bmN0aW9uKGEpP3ZvaWQgMCE9PWMucmVhZHk/Yy5yZWFkeShhKTphKHIpOnIubWFrZUFycmF5KGEsdGhpcyl9O0cucHJvdG90eXBlPXIuZm4sRT1yKGQpO3ZhciBIPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEk9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07ci5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1yKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGM7YSsrKWlmKHIuY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPVwic3RyaW5nXCIhPXR5cGVvZiBhJiZyKGEpO2lmKCFBLnRlc3QoYSkpZm9yKDtkPGU7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmci5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP3IudW5pcXVlU29ydChmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/aS5jYWxsKHIoYSksdGhpc1swXSk6aS5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhyLnVuaXF1ZVNvcnQoci5tZXJnZSh0aGlzLmdldCgpLHIoYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gSihhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9ci5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB5KGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEooYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBKKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB5KGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4geigoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIHooYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGVudERvY3VtZW50fHxyLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1yLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1yLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoSVthXXx8ci51bmlxdWVTb3J0KGUpLEgudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBLPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBMKGEpe3ZhciBiPXt9O3JldHVybiByLmVhY2goYS5tYXRjaChLKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1yLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0woYSk6ci5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZj1bXSxnPVtdLGg9LTEsaT1mdW5jdGlvbigpe2ZvcihlPWEub25jZSxkPWI9ITA7Zy5sZW5ndGg7aD0tMSl7Yz1nLnNoaWZ0KCk7d2hpbGUoKytoPGYubGVuZ3RoKWZbaF0uYXBwbHkoY1swXSxjWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlJiYoaD1mLmxlbmd0aCxjPSExKX1hLm1lbW9yeXx8KGM9ITEpLGI9ITEsZSYmKGY9Yz9bXTpcIlwiKX0saj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihjJiYhYiYmKGg9Zi5sZW5ndGgtMSxnLnB1c2goYykpLGZ1bmN0aW9uIGQoYil7ci5lYWNoKGIsZnVuY3Rpb24oYixjKXtyLmlzRnVuY3Rpb24oYyk/YS51bmlxdWUmJmouaGFzKGMpfHxmLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1yLnR5cGUoYykmJmQoYyl9KX0oYXJndW1lbnRzKSxjJiYhYiYmaSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gci5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPXIuaW5BcnJheShiLGYsYykpPi0xKWYuc3BsaWNlKGMsMSksYzw9aCYmaC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP3IuaW5BcnJheShhLGYpPi0xOmYubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihmPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxmPWM9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFmfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxjfHxifHwoZj1jPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhZX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZXx8KGM9Y3x8W10sYz1bYSxjLnNsaWNlP2Muc2xpY2UoKTpjXSxnLnB1c2goYyksYnx8aSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGouZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFkfX07cmV0dXJuIGp9O2Z1bmN0aW9uIE0oYSl7cmV0dXJuIGF9ZnVuY3Rpb24gTihhKXt0aHJvdyBhfWZ1bmN0aW9uIE8oYSxiLGMpe3ZhciBkO3RyeXthJiZyLmlzRnVuY3Rpb24oZD1hLnByb21pc2UpP2QuY2FsbChhKS5kb25lKGIpLmZhaWwoYyk6YSYmci5pc0Z1bmN0aW9uKGQ9YS50aGVuKT9kLmNhbGwoYSxiLGMpOmIuY2FsbCh2b2lkIDAsYSl9Y2F0Y2goYSl7Yy5jYWxsKHZvaWQgMCxhKX19ci5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGIpe3ZhciBjPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsci5DYWxsYmFja3MoXCJtZW1vcnlcIiksci5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0sZD1cInBlbmRpbmdcIixlPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBkfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZi5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihhKXtyZXR1cm4gZS50aGVuKG51bGwsYSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIHIuRGVmZXJyZWQoZnVuY3Rpb24oYil7ci5lYWNoKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1yLmlzRnVuY3Rpb24oYVtkWzRdXSkmJmFbZFs0XV07ZltkWzFdXShmdW5jdGlvbigpe3ZhciBhPWUmJmUuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJnIuaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLnByb2dyZXNzKGIubm90aWZ5KS5kb25lKGIucmVzb2x2ZSkuZmFpbChiLnJlamVjdCk6YltkWzBdK1wiV2l0aFwiXSh0aGlzLGU/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbihiLGQsZSl7dmFyIGY9MDtmdW5jdGlvbiBnKGIsYyxkLGUpe3JldHVybiBmdW5jdGlvbigpe3ZhciBoPXRoaXMsaT1hcmd1bWVudHMsaj1mdW5jdGlvbigpe3ZhciBhLGo7aWYoIShiPGYpKXtpZihhPWQuYXBwbHkoaCxpKSxhPT09Yy5wcm9taXNlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTtqPWEmJihcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYSkmJmEudGhlbixyLmlzRnVuY3Rpb24oaik/ZT9qLmNhbGwoYSxnKGYsYyxNLGUpLGcoZixjLE4sZSkpOihmKyssai5jYWxsKGEsZyhmLGMsTSxlKSxnKGYsYyxOLGUpLGcoZixjLE0sYy5ub3RpZnlXaXRoKSkpOihkIT09TSYmKGg9dm9pZCAwLGk9W2FdKSwoZXx8Yy5yZXNvbHZlV2l0aCkoaCxpKSl9fSxrPWU/ajpmdW5jdGlvbigpe3RyeXtqKCl9Y2F0Y2goYSl7ci5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZyLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soYSxrLnN0YWNrVHJhY2UpLGIrMT49ZiYmKGQhPT1OJiYoaD12b2lkIDAsaT1bYV0pLGMucmVqZWN0V2l0aChoLGkpKX19O2I/aygpOihyLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKGsuc3RhY2tUcmFjZT1yLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxhLnNldFRpbWVvdXQoaykpfX1yZXR1cm4gci5EZWZlcnJlZChmdW5jdGlvbihhKXtjWzBdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oZSk/ZTpNLGEubm90aWZ5V2l0aCkpLGNbMV1bM10uYWRkKGcoMCxhLHIuaXNGdW5jdGlvbihiKT9iOk0pKSxjWzJdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oZCk/ZDpOKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/ci5leHRlbmQoYSxlKTplfX0sZj17fTtyZXR1cm4gci5lYWNoKGMsZnVuY3Rpb24oYSxiKXt2YXIgZz1iWzJdLGg9Yls1XTtlW2JbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7ZD1ofSxjWzMtYV1bMl0uZGlzYWJsZSxjWzBdWzJdLmxvY2spLGcuYWRkKGJbM10uZmlyZSksZltiWzBdXT1mdW5jdGlvbigpe3JldHVybiBmW2JbMF0rXCJXaXRoXCJdKHRoaXM9PT1mP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZltiWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZS5wcm9taXNlKGYpLGImJmIuY2FsbChmLGYpLGZ9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9YXJndW1lbnRzLmxlbmd0aCxjPWIsZD1BcnJheShjKSxlPWYuY2FsbChhcmd1bWVudHMpLGc9ci5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMpe2RbYV09dGhpcyxlW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9mLmNhbGwoYXJndW1lbnRzKTpjLC0tYnx8Zy5yZXNvbHZlV2l0aChkLGUpfX07aWYoYjw9MSYmKE8oYSxnLmRvbmUoaChjKSkucmVzb2x2ZSxnLnJlamVjdCksXCJwZW5kaW5nXCI9PT1nLnN0YXRlKCl8fHIuaXNGdW5jdGlvbihlW2NdJiZlW2NdLnRoZW4pKSlyZXR1cm4gZy50aGVuKCk7d2hpbGUoYy0tKU8oZVtjXSxoKGMpLGcucmVqZWN0KTtyZXR1cm4gZy5wcm9taXNlKCl9fSk7dmFyIFA9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87ci5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKGIsYyl7YS5jb25zb2xlJiZhLmNvbnNvbGUud2FybiYmYiYmUC50ZXN0KGIubmFtZSkmJmEuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrYi5tZXNzYWdlLGIuc3RhY2ssYyl9LHIucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24oYil7YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYn0pfTt2YXIgUT1yLkRlZmVycmVkKCk7ci5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gUS50aGVuKGEpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oYSl7ci5yZWFkeUV4Y2VwdGlvbihhKX0pLHRoaXN9LHIuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP3IucmVhZHlXYWl0Kys6ci5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1yLnJlYWR5V2FpdDpyLmlzUmVhZHkpfHwoci5pc1JlYWR5PSEwLGEhPT0hMCYmLS1yLnJlYWR5V2FpdD4wfHxRLnJlc29sdmVXaXRoKGQsW3JdKSl9fSksci5yZWFkeS50aGVuPVEudGhlbjtmdW5jdGlvbiBSKCl7ZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLFIpLFxuYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLFIpLHIucmVhZHkoKX1cImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/YS5zZXRUaW1lb3V0KHIucmVhZHkpOihkLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsUiksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLFIpKTt2YXIgUz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1yLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYylTKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLHIuaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChyKGEpLGMpfSkpLGIpKWZvcig7aDxpO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9LFQ9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBVKCl7dGhpcy5leHBhbmRvPXIuZXhwYW5kbytVLnVpZCsrfVUudWlkPTEsVS5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGEpe3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gYnx8KGI9e30sVChhKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWI6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpiLGNvbmZpZ3VyYWJsZTohMH0pKSksYn0sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMuY2FjaGUoYSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZVtyLmNhbWVsQ2FzZShiKV09YztlbHNlIGZvcihkIGluIGIpZVtyLmNhbWVsQ2FzZShkKV09YltkXTtyZXR1cm4gZX0sZ2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHZvaWQgMD09PWI/dGhpcy5jYWNoZShhKTphW3RoaXMuZXhwYW5kb10mJmFbdGhpcy5leHBhbmRvXVtyLmNhbWVsQ2FzZShiKV19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jP3RoaXMuZ2V0KGEsYik6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9YVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PWQpe2lmKHZvaWQgMCE9PWIpe3IuaXNBcnJheShiKT9iPWIubWFwKHIuY2FtZWxDYXNlKTooYj1yLmNhbWVsQ2FzZShiKSxiPWIgaW4gZD9bYl06Yi5tYXRjaChLKXx8W10pLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBkW2JbY11dfSh2b2lkIDA9PT1ifHxyLmlzRW1wdHlPYmplY3QoZCkpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBhW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PWImJiFyLmlzRW1wdHlPYmplY3QoYil9fTt2YXIgVj1uZXcgVSxXPW5ldyBVLFg9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFk9L1tBLVpdL2c7ZnVuY3Rpb24gWihhKXtyZXR1cm5cInRydWVcIj09PWF8fFwiZmFsc2VcIiE9PWEmJihcIm51bGxcIj09PWE/bnVsbDphPT09K2ErXCJcIj8rYTpYLnRlc3QoYSk/SlNPTi5wYXJzZShhKTphKX1mdW5jdGlvbiAkKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoWSxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVooYyl9Y2F0Y2goZSl7fVcuc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfXIuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBXLmhhc0RhdGEoYSl8fFYuaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFcuYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1cucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gVi5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1YucmVtb3ZlKGEsYil9fSksci5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1XLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIVYuZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1yLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSwkKGYsZCxlW2RdKSkpO1Yuc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Vy5zZXQodGhpcyxhKX0pOlModGhpcyxmdW5jdGlvbihiKXt2YXIgYztpZihmJiZ2b2lkIDA9PT1iKXtpZihjPVcuZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPSQoZixhKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Vy5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1cucmVtb3ZlKHRoaXMsYSl9KX19KSxyLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKGEpcmV0dXJuIGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Vi5nZXQoYSxiKSxjJiYoIWR8fHIuaXNBcnJheShjKT9kPVYuYWNjZXNzKGEsYixyLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPXIucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9ci5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtyLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBWLmdldChhLGMpfHxWLmFjY2VzcyhhLGMse2VtcHR5OnIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Vi5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxyLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP3IucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9ci5xdWV1ZSh0aGlzLGEsYik7ci5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmci5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ci5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9ci5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Vi5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgXz0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsYWE9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrXytcIikoW2EteiVdKikkXCIsXCJpXCIpLGJhPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxjYT1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1hLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1hLnN0eWxlLmRpc3BsYXkmJnIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpJiZcIm5vbmVcIj09PXIuY3NzKGEsXCJkaXNwbGF5XCIpfSxkYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX07ZnVuY3Rpb24gZWEoYSxiLGMsZCl7dmFyIGUsZj0xLGc9MjAsaD1kP2Z1bmN0aW9uKCl7cmV0dXJuIGQuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIHIuY3NzKGEsYixcIlwiKX0saT1oKCksaj1jJiZjWzNdfHwoci5jc3NOdW1iZXJbYl0/XCJcIjpcInB4XCIpLGs9KHIuY3NzTnVtYmVyW2JdfHxcInB4XCIhPT1qJiYraSkmJmFhLmV4ZWMoci5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixyLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBmYT17fTtmdW5jdGlvbiBnYShhKXt2YXIgYixjPWEub3duZXJEb2N1bWVudCxkPWEubm9kZU5hbWUsZT1mYVtkXTtyZXR1cm4gZT9lOihiPWMuYm9keS5hcHBlbmRDaGlsZChjLmNyZWF0ZUVsZW1lbnQoZCkpLGU9ci5jc3MoYixcImRpc3BsYXlcIiksYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLFwibm9uZVwiPT09ZSYmKGU9XCJibG9ja1wiKSxmYVtkXT1lLGUpfWZ1bmN0aW9uIGhhKGEsYil7Zm9yKHZhciBjLGQsZT1bXSxmPTAsZz1hLmxlbmd0aDtmPGc7ZisrKWQ9YVtmXSxkLnN0eWxlJiYoYz1kLnN0eWxlLmRpc3BsYXksYj8oXCJub25lXCI9PT1jJiYoZVtmXT1WLmdldChkLFwiZGlzcGxheVwiKXx8bnVsbCxlW2ZdfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZjYShkKSYmKGVbZl09Z2EoZCkpKTpcIm5vbmVcIiE9PWMmJihlW2ZdPVwibm9uZVwiLFYuc2V0KGQsXCJkaXNwbGF5XCIsYykpKTtmb3IoZj0wO2Y8ZztmKyspbnVsbCE9ZVtmXSYmKGFbZl0uc3R5bGUuZGlzcGxheT1lW2ZdKTtyZXR1cm4gYX1yLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBoYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBoYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2NhKHRoaXMpP3IodGhpcykuc2hvdygpOnIodGhpcykuaGlkZSgpfSl9fSk7dmFyIGlhPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGphPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKykvaSxrYT0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLGxhPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07bGEub3B0Z3JvdXA9bGEub3B0aW9uLGxhLnRib2R5PWxhLnRmb290PWxhLmNvbGdyb3VwPWxhLmNhcHRpb249bGEudGhlYWQsbGEudGg9bGEudGQ7ZnVuY3Rpb24gbWEoYSxiKXt2YXIgYztyZXR1cm4gYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W10sdm9pZCAwPT09Ynx8YiYmci5ub2RlTmFtZShhLGIpP3IubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gbmEoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspVi5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Vi5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfXZhciBvYT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24gcGEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZyxoLGksaixrLGw9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbT1bXSxuPTAsbz1hLmxlbmd0aDtuPG87bisrKWlmKGY9YVtuXSxmfHwwPT09ZilpZihcIm9iamVjdFwiPT09ci50eXBlKGYpKXIubWVyZ2UobSxmLm5vZGVUeXBlP1tmXTpmKTtlbHNlIGlmKG9hLnRlc3QoZikpe2c9Z3x8bC5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGg9KGphLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGk9bGFbaF18fGxhLl9kZWZhdWx0LGcuaW5uZXJIVE1MPWlbMV0rci5odG1sUHJlZmlsdGVyKGYpK2lbMl0saz1pWzBdO3doaWxlKGstLSlnPWcubGFzdENoaWxkO3IubWVyZ2UobSxnLmNoaWxkTm9kZXMpLGc9bC5maXJzdENoaWxkLGcudGV4dENvbnRlbnQ9XCJcIn1lbHNlIG0ucHVzaChiLmNyZWF0ZVRleHROb2RlKGYpKTtsLnRleHRDb250ZW50PVwiXCIsbj0wO3doaWxlKGY9bVtuKytdKWlmKGQmJnIuaW5BcnJheShmLGQpPi0xKWUmJmUucHVzaChmKTtlbHNlIGlmKGo9ci5jb250YWlucyhmLm93bmVyRG9jdW1lbnQsZiksZz1tYShsLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGomJm5hKGcpLGMpe2s9MDt3aGlsZShmPWdbaysrXSlrYS50ZXN0KGYudHlwZXx8XCJcIikmJmMucHVzaChmKX1yZXR1cm4gbH0hZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLG8uY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixvLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIHFhPWQuZG9jdW1lbnRFbGVtZW50LHJhPS9ea2V5LyxzYT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sdGE9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiB1YSgpe3JldHVybiEwfWZ1bmN0aW9uIHZhKCl7cmV0dXJuITF9ZnVuY3Rpb24gd2EoKXt0cnl7cmV0dXJuIGQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fWZ1bmN0aW9uIHhhKGEsYixjLGQsZSxmKXt2YXIgZyxoO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiKXtcInN0cmluZ1wiIT10eXBlb2YgYyYmKGQ9ZHx8YyxjPXZvaWQgMCk7Zm9yKGggaW4gYil4YShhLGgsYyxkLGJbaF0sZik7cmV0dXJuIGF9aWYobnVsbD09ZCYmbnVsbD09ZT8oZT1jLGQ9Yz12b2lkIDApOm51bGw9PWUmJihcInN0cmluZ1wiPT10eXBlb2YgYz8oZT1kLGQ9dm9pZCAwKTooZT1kLGQ9YyxjPXZvaWQgMCkpLGU9PT0hMSllPXZhO2Vsc2UgaWYoIWUpcmV0dXJuIGE7cmV0dXJuIDE9PT1mJiYoZz1lLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHIoKS5vZmYoYSksZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZ3VpZD1nLmd1aWR8fChnLmd1aWQ9ci5ndWlkKyspKSxhLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LmFkZCh0aGlzLGIsZSxkLGMpfSl9ci5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixvLHAscT1WLmdldChhKTtpZihxKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxlJiZyLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHFhLGUpLGMuZ3VpZHx8KGMuZ3VpZD1yLmd1aWQrKyksKGk9cS5ldmVudHMpfHwoaT1xLmV2ZW50cz17fSksKGc9cS5oYW5kbGUpfHwoZz1xLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgciYmci5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/ci5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goSyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPXRhLmV4ZWMoYltqXSl8fFtdLG49cD1oWzFdLG89KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbiYmKGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxrPXIuZXh0ZW5kKHt0eXBlOm4sb3JpZ1R5cGU6cCxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJnIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6by5qb2luKFwiLlwiKX0sZiksKG09aVtuXSl8fChtPWlbbl09W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxvLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG4sZykpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxyLmV2ZW50Lmdsb2JhbFtuXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG4sbyxwLHE9Vi5oYXNEYXRhKGEpJiZWLmdldChhKTtpZihxJiYoaT1xLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEspfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD10YS5leGVjKGJbal0pfHxbXSxuPXA9aFsxXSxvPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG4pe2w9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLG09aVtuXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrby5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnAhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEsbyxxLmhhbmRsZSkhPT0hMXx8ci5yZW1vdmVFdmVudChhLG4scS5oYW5kbGUpLGRlbGV0ZSBpW25dKX1lbHNlIGZvcihuIGluIGkpci5ldmVudC5yZW1vdmUoYSxuK2Jbal0sYyxkLCEwKTtyLmlzRW1wdHlPYmplY3QoaSkmJlYucmVtb3ZlKGEsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dmFyIGI9ci5ldmVudC5maXgoYSksYyxkLGUsZixnLGgsaT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksaj0oVi5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2IudHlwZV18fFtdLGs9ci5ldmVudC5zcGVjaWFsW2IudHlwZV18fHt9O2ZvcihpWzBdPWIsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspaVtjXT1hcmd1bWVudHNbY107aWYoYi5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxiKSE9PSExKXtoPXIuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGIsaiksYz0wO3doaWxlKChmPWhbYysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2IuY3VycmVudFRhcmdldD1mLmVsZW0sZD0wO3doaWxlKChnPWYuaGFuZGxlcnNbZCsrXSkmJiFiLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpYi5ybmFtZXNwYWNlJiYhYi5ybmFtZXNwYWNlLnRlc3QoZy5uYW1lc3BhY2UpfHwoYi5oYW5kbGVPYmo9ZyxiLmRhdGE9Zy5kYXRhLGU9KChyLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihiLnJlc3VsdD1lKT09PSExJiYoYi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxiKSxiLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZyxoPVtdLGk9Yi5kZWxlZ2F0ZUNvdW50LGo9YS50YXJnZXQ7aWYoaSYmai5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1hLnR5cGUmJmEuYnV0dG9uPj0xKSlmb3IoO2ohPT10aGlzO2o9ai5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1qLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxqLmRpc2FibGVkIT09ITApKXtmb3IoZj1bXSxnPXt9LGM9MDtjPGk7YysrKWQ9YltjXSxlPWQuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09Z1tlXSYmKGdbZV09ZC5uZWVkc0NvbnRleHQ/cihlLHRoaXMpLmluZGV4KGopPi0xOnIuZmluZChlLHRoaXMsbnVsbCxbal0pLmxlbmd0aCksZ1tlXSYmZi5wdXNoKGQpO2YubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpmfSl9cmV0dXJuIGo9dGhpcyxpPGIubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpiLnNsaWNlKGkpfSksaH0sYWRkUHJvcDpmdW5jdGlvbihhLGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLkV2ZW50LnByb3RvdHlwZSxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ci5pc0Z1bmN0aW9uKGIpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBiKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbYV19LHNldDpmdW5jdGlvbihiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9fSl9LGZpeDpmdW5jdGlvbihhKXtyZXR1cm4gYVtyLmV4cGFuZG9dP2E6bmV3IHIuRXZlbnQoYSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT13YSgpJiZ0aGlzLmZvY3VzKXJldHVybiB0aGlzLmZvY3VzKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXM9PT13YSgpJiZ0aGlzLmJsdXIpcmV0dXJuIHRoaXMuYmx1cigpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmci5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIikpcmV0dXJuIHRoaXMuY2xpY2soKSwhMX0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHIubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX19LHIucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9LHIuRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIHIuRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP3VhOnZhLHRoaXMudGFyZ2V0PWEudGFyZ2V0JiYzPT09YS50YXJnZXQubm9kZVR5cGU/YS50YXJnZXQucGFyZW50Tm9kZTphLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9YS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1hLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1hLGImJnIuZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fHIubm93KCksdm9pZCh0aGlzW3IuZXhwYW5kb109ITApKTpuZXcgci5FdmVudChhLGIpfSxyLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6ci5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6dmEsaXNQcm9wYWdhdGlvblN0b3BwZWQ6dmEsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6dmEsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9dWEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9dWEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXVhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxyLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oYSl7dmFyIGI9YS5idXR0b247cmV0dXJuIG51bGw9PWEud2hpY2gmJnJhLnRlc3QoYS50eXBlKT9udWxsIT1hLmNoYXJDb2RlP2EuY2hhckNvZGU6YS5rZXlDb2RlOiFhLndoaWNoJiZ2b2lkIDAhPT1iJiZzYS50ZXN0KGEudHlwZSk/MSZiPzE6MiZiPzM6NCZiPzI6MDphLndoaWNofX0sci5ldmVudC5hZGRQcm9wKSxyLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtyLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybiBlJiYoZT09PWR8fHIuY29udGFpbnMoZCxlKSl8fChhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLHIuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4geGEodGhpcyxhLGIsYyxkKX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB4YSh0aGlzLGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixyKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybiBiIT09ITEmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fChjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9dmEpLHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9fSk7dmFyIHlhPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLHphPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLEFhPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksQmE9L150cnVlXFwvKC4qKS8sQ2E9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIERhKGEsYil7cmV0dXJuIHIubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZyLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YTphfWZ1bmN0aW9uIEVhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIEZhKGEpe3ZhciBiPUJhLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBHYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKFYuaGFzRGF0YShhKSYmKGY9Vi5hY2Nlc3MoYSksZz1WLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7YzxkO2MrKylyLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9Vy5oYXNEYXRhKGEpJiYoaD1XLmFjY2VzcyhhKSxpPXIuZXh0ZW5kKHt9LGgpLFcuc2V0KGIsaSkpfX1mdW5jdGlvbiBIYShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZpYS50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDpcImlucHV0XCIhPT1jJiZcInRleHRhcmVhXCIhPT1jfHwoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIElhKGEsYixjLGQpe2I9Zy5hcHBseShbXSxiKTt2YXIgZSxmLGgsaSxqLGssbD0wLG09YS5sZW5ndGgsbj1tLTEscT1iWzBdLHM9ci5pc0Z1bmN0aW9uKHEpO2lmKHN8fG0+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFvLmNoZWNrQ2xvbmUmJkFhLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3MmJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSxJYShmLGIsYyxkKX0pO2lmKG0mJihlPXBhKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZj1lLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPWYpLGZ8fGQpKXtmb3IoaD1yLm1hcChtYShlLFwic2NyaXB0XCIpLEVhKSxpPWgubGVuZ3RoO2w8bTtsKyspaj1lLGwhPT1uJiYoaj1yLmNsb25lKGosITAsITApLGkmJnIubWVyZ2UoaCxtYShqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbF0saixsKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxyLm1hcChoLEZhKSxsPTA7bDxpO2wrKylqPWhbbF0sa2EudGVzdChqLnR5cGV8fFwiXCIpJiYhVi5hY2Nlc3MoaixcImdsb2JhbEV2YWxcIikmJnIuY29udGFpbnMoayxqKSYmKGouc3JjP3IuX2V2YWxVcmwmJnIuX2V2YWxVcmwoai5zcmMpOnAoai50ZXh0Q29udGVudC5yZXBsYWNlKENhLFwiXCIpLGspKX1yZXR1cm4gYX1mdW5jdGlvbiBKYShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9yLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8ci5jbGVhbkRhdGEobWEoZCkpLGQucGFyZW50Tm9kZSYmKGMmJnIuY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZuYShtYShkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfXIuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoeWEsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPXIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoby5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8ci5pc1hNTERvYyhhKSkpZm9yKGc9bWEoaCksZj1tYShhKSxkPTAsZT1mLmxlbmd0aDtkPGU7ZCsrKUhhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fG1hKGEpLGc9Z3x8bWEoaCksZD0wLGU9Zi5sZW5ndGg7ZDxlO2QrKylHYShmW2RdLGdbZF0pO2Vsc2UgR2EoYSxoKTtyZXR1cm4gZz1tYShoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm5hKGcsIWkmJm1hKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9ci5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoVChjKSl7aWYoYj1jW1YuZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/ci5ldmVudC5yZW1vdmUoYyxkKTpyLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tWLmV4cGFuZG9dPXZvaWQgMH1jW1cuZXhwYW5kb10mJihjW1cuZXhwYW5kb109dm9pZCAwKX19fSksci5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gSmEodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiBKYSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBTKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/ci50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIElhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1EYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPURhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG1hKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGwhPWEmJmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiByLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBTKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhemEudGVzdChhKSYmIWxhWyhqYS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9ci5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2M8ZDtjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG1hKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIElhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMucGFyZW50Tm9kZTtyLmluQXJyYXkodGhpcyxhKTwwJiYoci5jbGVhbkRhdGEobWEodGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxyLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9cihhKSxmPWUubGVuZ3RoLTEsZz0wO2c8PWY7ZysrKWM9Zz09PWY/dGhpczp0aGlzLmNsb25lKCEwKSxyKGVbZ10pW2JdKGMpLGguYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIEthPS9ebWFyZ2luLyxMYT1uZXcgUmVnRXhwKFwiXihcIitfK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLE1hPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYyYmYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX07IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYigpe2lmKGkpe2kuc3R5bGUuY3NzVGV4dD1cImJveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7dG9wOjElO3dpZHRoOjUwJVwiLGkuaW5uZXJIVE1MPVwiXCIscWEuYXBwZW5kQ2hpbGQoaCk7dmFyIGI9YS5nZXRDb21wdXRlZFN0eWxlKGkpO2M9XCIxJVwiIT09Yi50b3AsZz1cIjJweFwiPT09Yi5tYXJnaW5MZWZ0LGU9XCI0cHhcIj09PWIud2lkdGgsaS5zdHlsZS5tYXJnaW5SaWdodD1cIjUwJVwiLGY9XCI0cHhcIj09PWIubWFyZ2luUmlnaHQscWEucmVtb3ZlQ2hpbGQoaCksaT1udWxsfX12YXIgYyxlLGYsZyxoPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxpPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpLnN0eWxlJiYoaS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsaS5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsby5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09aS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxoLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGguYXBwZW5kQ2hpbGQoaSksci5leHRlbmQobyx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBiKCksY30sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGV9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGZ9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBiKCksZ319KSl9KCk7ZnVuY3Rpb24gTmEoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxNYShhKSxjJiYoZz1jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl0sXCJcIiE9PWd8fHIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1yLnN0eWxlKGEsYikpLCFvLnBpeGVsTWFyZ2luUmlnaHQoKSYmTGEudGVzdChnKSYmS2EudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiBPYShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX12YXIgUGE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFFhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxSYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LFNhPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxUYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gVWEoYSl7aWYoYSBpbiBUYSlyZXR1cm4gYTt2YXIgYj1hWzBdLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxjPVNhLmxlbmd0aDt3aGlsZShjLS0paWYoYT1TYVtjXStiLGEgaW4gVGEpcmV0dXJuIGF9ZnVuY3Rpb24gVmEoYSxiLGMpe3ZhciBkPWFhLmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzJdLShjfHwwKSkrKGRbM118fFwicHhcIik6Yn1mdW5jdGlvbiBXYShhLGIsYyxkLGUpe3ZhciBmLGc9MDtmb3IoZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MDtmPDQ7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPXIuY3NzKGEsYytiYVtmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09ci5jc3MoYSxcInBhZGRpbmdcIitiYVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1yLmNzcyhhLFwiYm9yZGVyXCIrYmFbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPXIuY3NzKGEsXCJwYWRkaW5nXCIrYmFbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9ci5jc3MoYSxcImJvcmRlclwiK2JhW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIFhhKGEsYixjKXt2YXIgZCxlPSEwLGY9TWEoYSksZz1cImJvcmRlci1ib3hcIj09PXIuY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKTtpZihhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiYoZD1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2JdKSxkPD0wfHxudWxsPT1kKXtpZihkPU5hKGEsYixmKSwoZDwwfHxudWxsPT1kKSYmKGQ9YS5zdHlsZVtiXSksTGEudGVzdChkKSlyZXR1cm4gZDtlPWcmJihvLmJveFNpemluZ1JlbGlhYmxlKCl8fGQ9PT1hLnN0eWxlW2JdKSxkPXBhcnNlRmxvYXQoZCl8fDB9cmV0dXJuIGQrV2EoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGUsZikrXCJweFwifXIuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9TmEoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKSxpPWEuc3R5bGU7cmV0dXJuIGI9ci5jc3NQcm9wc1toXXx8KHIuY3NzUHJvcHNbaF09VWEoaCl8fGgpLGc9ci5jc3NIb29rc1tiXXx8ci5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPWFhLmV4ZWMoYykpJiZlWzFdJiYoYz1lYShhLGIsZSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCI9PT1mJiYoYys9ZSYmZVszXXx8KHIuY3NzTnVtYmVyW2hdP1wiXCI6XCJweFwiKSksby5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGlbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaVtiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1yLmNzc1Byb3BzW2hdfHwoci5jc3NQcm9wc1toXT1VYShoKXx8aCksZz1yLmNzc0hvb2tzW2JdfHxyLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT1OYShhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIFJhJiYoZT1SYVtiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fGlzRmluaXRlKGYpP2Z8fDA6ZSk6ZX19KSxyLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe3IuY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7aWYoYylyZXR1cm4hUGEudGVzdChyLmNzcyhhLFwiZGlzcGxheVwiKSl8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/WGEoYSxiLGQpOmRhKGEsUWEsZnVuY3Rpb24oKXtyZXR1cm4gWGEoYSxiLGQpfSl9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGUsZj1kJiZNYShhKSxnPWQmJldhKGEsYixkLFwiYm9yZGVyLWJveFwiPT09ci5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpLGYpO3JldHVybiBnJiYoZT1hYS5leGVjKGMpKSYmXCJweFwiIT09KGVbM118fFwicHhcIikmJihhLnN0eWxlW2JdPWMsYz1yLmNzcyhhLGIpKSxWYShhLGMsZyl9fX0pLHIuY3NzSG9va3MubWFyZ2luTGVmdD1PYShvLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihhLGIpe2lmKGIpcmV0dXJuKHBhcnNlRmxvYXQoTmEoYSxcIm1hcmdpbkxlZnRcIikpfHxhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtZGEoYSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksci5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdO2Q8NDtkKyspZVthK2JhW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LEthLnRlc3QoYSl8fChyLmNzc0hvb2tzW2ErYl0uc2V0PVZhKX0pLHIuZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUyh0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKHIuaXNBcnJheShiKSl7Zm9yKGQ9TWEoYSksZT1iLmxlbmd0aDtnPGU7ZysrKWZbYltnXV09ci5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP3Iuc3R5bGUoYSxiLGMpOnIuY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfX0pO2Z1bmN0aW9uIFlhKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBZYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfXIuVHdlZW49WWEsWWEucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpZYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxyLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KHIuY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9WWEucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOllhLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPVlhLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1yLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6WWEucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sWWEucHJvdG90eXBlLmluaXQucHJvdG90eXBlPVlhLnByb3RvdHlwZSxZYS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIDEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGwhPWEuZWxlbVthLnByb3BdJiZudWxsPT1hLmVsZW0uc3R5bGVbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXTooYj1yLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApfSxzZXQ6ZnVuY3Rpb24oYSl7ci5meC5zdGVwW2EucHJvcF0/ci5meC5zdGVwW2EucHJvcF0oYSk6MSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbD09YS5lbGVtLnN0eWxlW3IuY3NzUHJvcHNbYS5wcm9wXV0mJiFyLmNzc0hvb2tzW2EucHJvcF0/YS5lbGVtW2EucHJvcF09YS5ub3c6ci5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCl9fX0sWWEucHJvcEhvb2tzLnNjcm9sbFRvcD1ZYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxyLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sci5meD1ZYS5wcm90b3R5cGUuaW5pdCxyLmZ4LnN0ZXA9e307dmFyIFphLCRhLF9hPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxhYj0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIGJiKCl7JGEmJihhLnJlcXVlc3RBbmltYXRpb25GcmFtZShiYiksci5meC50aWNrKCkpfWZ1bmN0aW9uIGNiKCl7cmV0dXJuIGEuc2V0VGltZW91dChmdW5jdGlvbigpe1phPXZvaWQgMH0pLFphPXIubm93KCl9ZnVuY3Rpb24gZGIoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowO2Q8NDtkKz0yLWIpYz1iYVtkXSxlW1wibWFyZ2luXCIrY109ZVtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZS5vcGFjaXR5PWUud2lkdGg9YSksZX1mdW5jdGlvbiBlYihhLGIsYyl7Zm9yKHZhciBkLGU9KGhiLnR3ZWVuZXJzW2JdfHxbXSkuY29uY2F0KGhiLnR3ZWVuZXJzW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7ZjxnO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gZmIoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbD1cIndpZHRoXCJpbiBifHxcImhlaWdodFwiaW4gYixtPXRoaXMsbj17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZjYShhKSxxPVYuZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGc9ci5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09Zy51bnF1ZXVlZCYmKGcudW5xdWV1ZWQ9MCxoPWcuZW1wdHkuZmlyZSxnLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtnLnVucXVldWVkfHxoKCl9KSxnLnVucXVldWVkKyssbS5hbHdheXMoZnVuY3Rpb24oKXttLmFsd2F5cyhmdW5jdGlvbigpe2cudW5xdWV1ZWQtLSxyLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGcuZW1wdHkuZmlyZSgpfSl9KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sX2EudGVzdChlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHA/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFxfHx2b2lkIDA9PT1xW2RdKWNvbnRpbnVlO3A9ITB9bltkXT1xJiZxW2RdfHxyLnN0eWxlKGEsZCl9aWYoaT0hci5pc0VtcHR5T2JqZWN0KGIpLGl8fCFyLmlzRW1wdHlPYmplY3Qobikpe2wmJjE9PT1hLm5vZGVUeXBlJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1xJiZxLmRpc3BsYXksbnVsbD09aiYmKGo9Vi5nZXQoYSxcImRpc3BsYXlcIikpLGs9ci5jc3MoYSxcImRpc3BsYXlcIiksXCJub25lXCI9PT1rJiYoaj9rPWo6KGhhKFthXSwhMCksaj1hLnN0eWxlLmRpc3BsYXl8fGosaz1yLmNzcyhhLFwiZGlzcGxheVwiKSxoYShbYV0pKSksKFwiaW5saW5lXCI9PT1rfHxcImlubGluZS1ibG9ja1wiPT09ayYmbnVsbCE9aikmJlwibm9uZVwiPT09ci5jc3MoYSxcImZsb2F0XCIpJiYoaXx8KG0uZG9uZShmdW5jdGlvbigpe28uZGlzcGxheT1qfSksbnVsbD09aiYmKGs9by5kaXNwbGF5LGo9XCJub25lXCI9PT1rP1wiXCI6aykpLG8uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG8ub3ZlcmZsb3c9XCJoaWRkZW5cIixtLmFsd2F5cyhmdW5jdGlvbigpe28ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxvLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG8ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSksaT0hMTtmb3IoZCBpbiBuKWl8fChxP1wiaGlkZGVuXCJpbiBxJiYocD1xLmhpZGRlbik6cT1WLmFjY2VzcyhhLFwiZnhzaG93XCIse2Rpc3BsYXk6an0pLGYmJihxLmhpZGRlbj0hcCkscCYmaGEoW2FdLCEwKSxtLmRvbmUoZnVuY3Rpb24oKXtwfHxoYShbYV0pLFYucmVtb3ZlKGEsXCJmeHNob3dcIik7Zm9yKGQgaW4gbilyLnN0eWxlKGEsZCxuW2RdKX0pKSxpPWViKHA/cVtkXTowLGQsbSksZCBpbiBxfHwocVtkXT1pLnN0YXJ0LHAmJihpLmVuZD1pLnN0YXJ0LGkuc3RhcnQ9MCkpfX1mdW5jdGlvbiBnYihhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPXIuY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sci5pc0FycmF5KGYpJiYoZT1mWzFdLGY9YVtjXT1mWzBdKSxjIT09ZCYmKGFbZF09ZixkZWxldGUgYVtjXSksZz1yLmNzc0hvb2tzW2RdLGcmJlwiZXhwYW5kXCJpbiBnKXtmPWcuZXhwYW5kKGYpLGRlbGV0ZSBhW2RdO2ZvcihjIGluIGYpYyBpbiBhfHwoYVtjXT1mW2NdLGJbY109ZSl9ZWxzZSBiW2RdPWV9ZnVuY3Rpb24gaGIoYSxiLGMpe3ZhciBkLGUsZj0wLGc9aGIucHJlZmlsdGVycy5sZW5ndGgsaD1yLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1aYXx8Y2IoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7ZzxpO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLGY8MSYmaT9jOihoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6ci5leHRlbmQoe30sYiksb3B0czpyLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6ci5lYXNpbmcuX2RlZmF1bHR9LGMpLG9yaWdpbmFsUHJvcGVydGllczpiLG9yaWdpbmFsT3B0aW9uczpjLHN0YXJ0VGltZTpaYXx8Y2IoKSxkdXJhdGlvbjpjLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihiLGMpe3ZhciBkPXIuVHdlZW4oYSxqLm9wdHMsYixjLGoub3B0cy5zcGVjaWFsRWFzaW5nW2JdfHxqLm9wdHMuZWFzaW5nKTtyZXR1cm4gai50d2VlbnMucHVzaChkKSxkfSxzdG9wOmZ1bmN0aW9uKGIpe3ZhciBjPTAsZD1iP2oudHdlZW5zLmxlbmd0aDowO2lmKGUpcmV0dXJuIHRoaXM7Zm9yKGU9ITA7YzxkO2MrKylqLnR3ZWVuc1tjXS5ydW4oMSk7cmV0dXJuIGI/KGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbaixiXSkpOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoZ2IoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7ZjxnO2YrKylpZihkPWhiLnByZWZpbHRlcnNbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiByLmlzRnVuY3Rpb24oZC5zdG9wKSYmKHIuX3F1ZXVlSG9va3Moai5lbGVtLGoub3B0cy5xdWV1ZSkuc3RvcD1yLnByb3h5KGQuc3RvcCxkKSksZDtyZXR1cm4gci5tYXAoayxlYixqKSxyLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxyLmZ4LnRpbWVyKHIuZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpfXIuQW5pbWF0aW9uPXIuZXh0ZW5kKGhiLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpO3JldHVybiBlYShjLmVsZW0sYSxhYS5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe3IuaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEspO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWM9YVtkXSxoYi50d2VlbmVyc1tjXT1oYi50d2VlbmVyc1tjXXx8W10saGIudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbZmJdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/aGIucHJlZmlsdGVycy51bnNoaWZ0KGEpOmhiLnByZWZpbHRlcnMucHVzaChhKX19KSxyLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZT1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9yLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fHIuaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhci5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gci5meC5vZmZ8fGQuaGlkZGVuP2UuZHVyYXRpb249MDpcIm51bWJlclwiIT10eXBlb2YgZS5kdXJhdGlvbiYmKGUuZHVyYXRpb24gaW4gci5meC5zcGVlZHM/ZS5kdXJhdGlvbj1yLmZ4LnNwZWVkc1tlLmR1cmF0aW9uXTplLmR1cmF0aW9uPXIuZnguc3BlZWRzLl9kZWZhdWx0KSxudWxsIT1lLnF1ZXVlJiZlLnF1ZXVlIT09ITB8fChlLnF1ZXVlPVwiZnhcIiksZS5vbGQ9ZS5jb21wbGV0ZSxlLmNvbXBsZXRlPWZ1bmN0aW9uKCl7ci5pc0Z1bmN0aW9uKGUub2xkKSYmZS5vbGQuY2FsbCh0aGlzKSxlLnF1ZXVlJiZyLmRlcXVldWUodGhpcyxlLnF1ZXVlKX0sZX0sci5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoY2EpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ci5pc0VtcHR5T2JqZWN0KGEpLGY9ci5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPWhiKHRoaXMsci5leHRlbmQoe30sYSksZik7KGV8fFYuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1yLnRpbWVycyxnPVYuZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJmFiLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7IWImJmN8fHIuZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9Vi5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1yLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsci5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7YjxnO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxyLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9ci5mbltiXTtyLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShkYihiLCEwKSxhLGQsZSl9fSksci5lYWNoKHtzbGlkZURvd246ZGIoXCJzaG93XCIpLHNsaWRlVXA6ZGIoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmRiKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLHIudGltZXJzPVtdLHIuZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPXIudGltZXJzO2ZvcihaYT1yLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fHIuZnguc3RvcCgpLFphPXZvaWQgMH0sci5meC50aW1lcj1mdW5jdGlvbihhKXtyLnRpbWVycy5wdXNoKGEpLGEoKT9yLmZ4LnN0YXJ0KCk6ci50aW1lcnMucG9wKCl9LHIuZnguaW50ZXJ2YWw9MTMsci5meC5zdGFydD1mdW5jdGlvbigpeyRhfHwoJGE9YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYmIpOmEuc2V0SW50ZXJ2YWwoci5meC50aWNrLHIuZnguaW50ZXJ2YWwpKX0sci5meC5zdG9wPWZ1bmN0aW9uKCl7YS5jYW5jZWxBbmltYXRpb25GcmFtZT9hLmNhbmNlbEFuaW1hdGlvbkZyYW1lKCRhKTphLmNsZWFySW50ZXJ2YWwoJGEpLCRhPW51bGx9LHIuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LHIuZm4uZGVsYXk9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj1yLmZ4P3IuZnguc3BlZWRzW2JdfHxiOmIsYz1jfHxcImZ4XCIsdGhpcy5xdWV1ZShjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9YS5zZXRUaW1lb3V0KGMsYik7ZC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQoZSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixvLmNoZWNrT249XCJcIiE9PWEudmFsdWUsby5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLG8ucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIGliLGpiPXIuZXhwci5hdHRySGFuZGxlO3IuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFModGhpcyxyLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksci5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP3IucHJvcChhLGIsYyk6KDE9PT1mJiZyLmlzWE1MRG9jKGEpfHwoZT1yLmF0dHJIb29rc1tiLnRvTG93ZXJDYXNlKCldfHwoci5leHByLm1hdGNoLmJvb2wudGVzdChiKT9pYjp2b2lkIDApKSxcbnZvaWQgMCE9PWM/bnVsbD09PWM/dm9pZCByLnJlbW92ZUF0dHIoYSxiKTplJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOihkPXIuZmluZC5hdHRyKGEsYiksbnVsbD09ZD92b2lkIDA6ZCkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFvLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJnIubm9kZU5hbWUoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wLGU9YiYmYi5tYXRjaChLKTtpZihlJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWVbZCsrXSlhLnJlbW92ZUF0dHJpYnV0ZShjKX19KSxpYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP3IucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LHIuZWFjaChyLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz1qYltiXXx8ci5maW5kLmF0dHI7amJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGYsZz1iLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGR8fChmPWpiW2ddLGpiW2ddPWUsZT1udWxsIT1jKGEsYixkKT9nOm51bGwsamJbZ109ZiksZX19KTt2YXIga2I9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxsYj0vXig/OmF8YXJlYSkkL2k7ci5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUyh0aGlzLHIucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbci5wcm9wRml4W2FdfHxhXX0pfX0pLHIuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiAxPT09ZiYmci5pc1hNTERvYyhhKXx8KGI9ci5wcm9wRml4W2JdfHxiLGU9ci5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXt2YXIgYj1yLmZpbmQuYXR0cihhLFwidGFiaW5kZXhcIik7cmV0dXJuIGI/cGFyc2VJbnQoYiwxMCk6a2IudGVzdChhLm5vZGVOYW1lKXx8bGIudGVzdChhLm5vZGVOYW1lKSYmYS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxvLm9wdFNlbGVjdGVkfHwoci5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLHIuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtyLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7ZnVuY3Rpb24gbWIoYSl7dmFyIGI9YS5tYXRjaChLKXx8W107cmV0dXJuIGIuam9pbihcIiBcIil9ZnVuY3Rpb24gbmIoYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifXIuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYoci5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLG5iKHRoaXMpKSl9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEspfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPW5iKGMpLGQ9MT09PWMubm9kZVR5cGUmJlwiIFwiK21iKGUpK1wiIFwiKXtnPTA7d2hpbGUoZj1iW2crK10pZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPDAmJihkKz1mK1wiIFwiKTtoPW1iKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYoci5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLG5iKHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEspfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPW5iKGMpLGQ9MT09PWMubm9kZVR5cGUmJlwiIFwiK21iKGUpK1wiIFwiKXtnPTA7d2hpbGUoZj1iW2crK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPi0xKWQ9ZC5yZXBsYWNlKFwiIFwiK2YrXCIgXCIsXCIgXCIpO2g9bWIoZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTpyLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3IodGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyxuYih0aGlzKSxiKSxiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGQsZSxmO2lmKFwic3RyaW5nXCI9PT1jKXtkPTAsZT1yKHRoaXMpLGY9YS5tYXRjaChLKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZSB2b2lkIDAhPT1hJiZcImJvb2xlYW5cIiE9PWN8fChiPW5iKHRoaXMpLGImJlYuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsYiksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixifHxhPT09ITE/XCJcIjpWLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0wO2I9XCIgXCIrYStcIiBcIjt3aGlsZShjPXRoaXNbZCsrXSlpZigxPT09Yy5ub2RlVHlwZSYmKFwiIFwiK21iKG5iKGMpKStcIiBcIikuaW5kZXhPZihiKT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgb2I9L1xcci9nO3IuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1yLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMscih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOnIuaXNBcnJheShlKSYmKGU9ci5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPXIudmFsSG9va3NbdGhpcy50eXBlXXx8ci52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1yLnZhbEhvb2tzW2UudHlwZV18fHIudmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKG9iLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksci5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1yLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjptYihyLnRleHQoYSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9YS5vcHRpb25zLGY9YS5zZWxlY3RlZEluZGV4LGc9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGUsaD1nP251bGw6W10saT1nP2YrMTplLmxlbmd0aDtmb3IoZD1mPDA/aTpnP2Y6MDtkPGk7ZCsrKWlmKGM9ZVtkXSwoYy5zZWxlY3RlZHx8ZD09PWYpJiYhYy5kaXNhYmxlZCYmKCFjLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFyLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1yKGMpLnZhbCgpLGcpcmV0dXJuIGI7aC5wdXNoKGIpfXJldHVybiBofSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9ci5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPXIuaW5BcnJheShyLnZhbEhvb2tzLm9wdGlvbi5nZXQoZCksZik+LTEpJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxyLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7ci52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7aWYoci5pc0FycmF5KGIpKXJldHVybiBhLmNoZWNrZWQ9ci5pbkFycmF5KHIoYSkudmFsKCksYik+LTF9fSxvLmNoZWNrT258fChyLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pO3ZhciBwYj0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87ci5leHRlbmQoci5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihiLGMsZSxmKXt2YXIgZyxoLGksaixrLG0sbixvPVtlfHxkXSxwPWwuY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixxPWwuY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihoPWk9ZT1lfHxkLDMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmIXBiLnRlc3QocCtyLmV2ZW50LnRyaWdnZXJlZCkmJihwLmluZGV4T2YoXCIuXCIpPi0xJiYocT1wLnNwbGl0KFwiLlwiKSxwPXEuc2hpZnQoKSxxLnNvcnQoKSksaz1wLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitwLGI9YltyLmV4cGFuZG9dP2I6bmV3IHIuRXZlbnQocCxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9Zj8yOjMsYi5uYW1lc3BhY2U9cS5qb2luKFwiLlwiKSxiLnJuYW1lc3BhY2U9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Euam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZSksYz1udWxsPT1jP1tiXTpyLm1ha2VBcnJheShjLFtiXSksbj1yLmV2ZW50LnNwZWNpYWxbcF18fHt9LGZ8fCFuLnRyaWdnZXJ8fG4udHJpZ2dlci5hcHBseShlLGMpIT09ITEpKXtpZighZiYmIW4ubm9CdWJibGUmJiFyLmlzV2luZG93KGUpKXtmb3Ioaj1uLmRlbGVnYXRlVHlwZXx8cCxwYi50ZXN0KGorcCl8fChoPWgucGFyZW50Tm9kZSk7aDtoPWgucGFyZW50Tm9kZSlvLnB1c2goaCksaT1oO2k9PT0oZS5vd25lckRvY3VtZW50fHxkKSYmby5wdXNoKGkuZGVmYXVsdFZpZXd8fGkucGFyZW50V2luZG93fHxhKX1nPTA7d2hpbGUoKGg9b1tnKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zz4xP2o6bi5iaW5kVHlwZXx8cCxtPShWLmdldChoLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmVi5nZXQoaCxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGgsYyksbT1rJiZoW2tdLG0mJm0uYXBwbHkmJlQoaCkmJihiLnJlc3VsdD1tLmFwcGx5KGgsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXAsZnx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8bi5fZGVmYXVsdCYmbi5fZGVmYXVsdC5hcHBseShvLnBvcCgpLGMpIT09ITF8fCFUKGUpfHxrJiZyLmlzRnVuY3Rpb24oZVtwXSkmJiFyLmlzV2luZG93KGUpJiYoaT1lW2tdLGkmJihlW2tdPW51bGwpLHIuZXZlbnQudHJpZ2dlcmVkPXAsZVtwXSgpLHIuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxpJiYoZVtrXT1pKSksYi5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ci5leHRlbmQobmV3IHIuRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwfSk7ci5ldmVudC50cmlnZ2VyKGQsbnVsbCxiKX19KSxyLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtpZihjKXJldHVybiByLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApfX0pLHIuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxyLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSksby5mb2N1c2luPVwib25mb2N1c2luXCJpbiBhLG8uZm9jdXNpbnx8ci5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtyLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsci5ldmVudC5maXgoYSkpfTtyLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Vi5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxWLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPVYuYWNjZXNzKGQsYiktMTtlP1YuYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksVi5yZW1vdmUoZCxiKSl9fX0pO3ZhciBxYj1hLmxvY2F0aW9uLHJiPXIubm93KCksc2I9L1xcPy87ci5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYztpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2M9KG5ldyBhLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtjPXZvaWQgMH1yZXR1cm4gYyYmIWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fHIuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYiksY307dmFyIHRiPS9cXFtcXF0kLyx1Yj0vXFxyP1xcbi9nLHZiPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSx3Yj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24geGIoYSxiLGMsZCl7dmFyIGU7aWYoci5pc0FycmF5KGIpKXIuZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8dGIudGVzdChhKT9kKGEsZSk6eGIoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1yLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYil4YihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfXIucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1yLmlzRnVuY3Rpb24oYik/YigpOmI7ZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1jP1wiXCI6Yyl9O2lmKHIuaXNBcnJheShhKXx8YS5qcXVlcnkmJiFyLmlzUGxhaW5PYmplY3QoYSkpci5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSl4YihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKX0sci5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiByLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9ci5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9yLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFyKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZ3Yi50ZXN0KHRoaXMubm9kZU5hbWUpJiYhdmIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IWlhLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9cih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOnIuaXNBcnJheShjKT9yLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UodWIsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZSh1YixcIlxcclxcblwiKX19KS5nZXQoKX19KTt2YXIgeWI9LyUyMC9nLHpiPS8jLiokLyxBYj0vKFs/Jl0pXz1bXiZdKi8sQmI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxDYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxEYj0vXig/OkdFVHxIRUFEKSQvLEViPS9eXFwvXFwvLyxGYj17fSxHYj17fSxIYj1cIiovXCIuY29uY2F0KFwiKlwiKSxJYj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO0liLmhyZWY9cWIuaHJlZjtmdW5jdGlvbiBKYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goSyl8fFtdO2lmKHIuaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBLYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1HYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLHIuZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIExiKGEsYil7dmFyIGMsZCxlPXIuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJnIuZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiBNYihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfWlmKGYpcmV0dXJuIGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXX1mdW5jdGlvbiBOYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fXIuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpxYi5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOkNiLnRlc3QocWIucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOkhiLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjpyLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9MYihMYihhLHIuYWpheFNldHRpbmdzKSxiKTpMYihyLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpKYihGYiksYWpheFRyYW5zcG9ydDpKYihHYiksYWpheDpmdW5jdGlvbihiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9dm9pZCAwKSxjPWN8fHt9O3ZhciBlLGYsZyxoLGksaixrLGwsbSxuLG89ci5hamF4U2V0dXAoe30sYykscD1vLmNvbnRleHR8fG8scT1vLmNvbnRleHQmJihwLm5vZGVUeXBlfHxwLmpxdWVyeSk/cihwKTpyLmV2ZW50LHM9ci5EZWZlcnJlZCgpLHQ9ci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx1PW8uc3RhdHVzQ29kZXx8e30sdj17fSx3PXt9LHg9XCJjYW5jZWxlZFwiLHk9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZihrKXtpZighaCl7aD17fTt3aGlsZShiPUJiLmV4ZWMoZykpaFtiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1oW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gaz9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09ayYmKGE9d1thLnRvTG93ZXJDYXNlKCldPXdbYS50b0xvd2VyQ2FzZSgpXXx8YSx2W2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWsmJihvLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZihrKXkuYWx3YXlzKGFbeS5zdGF0dXNdKTtlbHNlIGZvcihiIGluIGEpdVtiXT1bdVtiXSxhW2JdXTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8eDtyZXR1cm4gZSYmZS5hYm9ydChiKSxBKDAsYiksdGhpc319O2lmKHMucHJvbWlzZSh5KSxvLnVybD0oKGJ8fG8udXJsfHxxYi5ocmVmKStcIlwiKS5yZXBsYWNlKEViLHFiLnByb3RvY29sK1wiLy9cIiksby50eXBlPWMubWV0aG9kfHxjLnR5cGV8fG8ubWV0aG9kfHxvLnR5cGUsby5kYXRhVHlwZXM9KG8uZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEspfHxbXCJcIl0sbnVsbD09by5jcm9zc0RvbWFpbil7aj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtqLmhyZWY9by51cmwsai5ocmVmPWouaHJlZixvLmNyb3NzRG9tYWluPUliLnByb3RvY29sK1wiLy9cIitJYi5ob3N0IT1qLnByb3RvY29sK1wiLy9cIitqLmhvc3R9Y2F0Y2goeil7by5jcm9zc0RvbWFpbj0hMH19aWYoby5kYXRhJiZvLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygby5kYXRhJiYoby5kYXRhPXIucGFyYW0oby5kYXRhLG8udHJhZGl0aW9uYWwpKSxLYihGYixvLGMseSksaylyZXR1cm4geTtsPXIuZXZlbnQmJm8uZ2xvYmFsLGwmJjA9PT1yLmFjdGl2ZSsrJiZyLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksby50eXBlPW8udHlwZS50b1VwcGVyQ2FzZSgpLG8uaGFzQ29udGVudD0hRGIudGVzdChvLnR5cGUpLGY9by51cmwucmVwbGFjZSh6YixcIlwiKSxvLmhhc0NvbnRlbnQ/by5kYXRhJiZvLnByb2Nlc3NEYXRhJiYwPT09KG8uY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJihvLmRhdGE9by5kYXRhLnJlcGxhY2UoeWIsXCIrXCIpKToobj1vLnVybC5zbGljZShmLmxlbmd0aCksby5kYXRhJiYoZis9KHNiLnRlc3QoZik/XCImXCI6XCI/XCIpK28uZGF0YSxkZWxldGUgby5kYXRhKSxvLmNhY2hlPT09ITEmJihmPWYucmVwbGFjZShBYixcIiQxXCIpLG49KHNiLnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIityYisrICtuKSxvLnVybD1mK24pLG8uaWZNb2RpZmllZCYmKHIubGFzdE1vZGlmaWVkW2ZdJiZ5LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLHIubGFzdE1vZGlmaWVkW2ZdKSxyLmV0YWdbZl0mJnkuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixyLmV0YWdbZl0pKSwoby5kYXRhJiZvLmhhc0NvbnRlbnQmJm8uY29udGVudFR5cGUhPT0hMXx8Yy5jb250ZW50VHlwZSkmJnkuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLG8uY29udGVudFR5cGUpLHkuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLG8uZGF0YVR5cGVzWzBdJiZvLmFjY2VwdHNbby5kYXRhVHlwZXNbMF1dP28uYWNjZXB0c1tvLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09by5kYXRhVHlwZXNbMF0/XCIsIFwiK0hiK1wiOyBxPTAuMDFcIjpcIlwiKTpvLmFjY2VwdHNbXCIqXCJdKTtmb3IobSBpbiBvLmhlYWRlcnMpeS5zZXRSZXF1ZXN0SGVhZGVyKG0sby5oZWFkZXJzW21dKTtpZihvLmJlZm9yZVNlbmQmJihvLmJlZm9yZVNlbmQuY2FsbChwLHksbyk9PT0hMXx8aykpcmV0dXJuIHkuYWJvcnQoKTtpZih4PVwiYWJvcnRcIix0LmFkZChvLmNvbXBsZXRlKSx5LmRvbmUoby5zdWNjZXNzKSx5LmZhaWwoby5lcnJvciksZT1LYihHYixvLGMseSkpe2lmKHkucmVhZHlTdGF0ZT0xLGwmJnEudHJpZ2dlcihcImFqYXhTZW5kXCIsW3ksb10pLGspcmV0dXJuIHk7by5hc3luYyYmby50aW1lb3V0PjAmJihpPWEuc2V0VGltZW91dChmdW5jdGlvbigpe3kuYWJvcnQoXCJ0aW1lb3V0XCIpfSxvLnRpbWVvdXQpKTt0cnl7az0hMSxlLnNlbmQodixBKX1jYXRjaCh6KXtpZihrKXRocm93IHo7QSgtMSx6KX19ZWxzZSBBKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIEEoYixjLGQsaCl7dmFyIGosbSxuLHYsdyx4PWM7a3x8KGs9ITAsaSYmYS5jbGVhclRpbWVvdXQoaSksZT12b2lkIDAsZz1ofHxcIlwiLHkucmVhZHlTdGF0ZT1iPjA/NDowLGo9Yj49MjAwJiZiPDMwMHx8MzA0PT09YixkJiYodj1NYihvLHksZCkpLHY9TmIobyx2LHksaiksaj8oby5pZk1vZGlmaWVkJiYodz15LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYoci5sYXN0TW9kaWZpZWRbZl09dyksdz15LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYoci5ldGFnW2ZdPXcpKSwyMDQ9PT1ifHxcIkhFQURcIj09PW8udHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09Yj94PVwibm90bW9kaWZpZWRcIjooeD12LnN0YXRlLG09di5kYXRhLG49di5lcnJvcixqPSFuKSk6KG49eCwhYiYmeHx8KHg9XCJlcnJvclwiLGI8MCYmKGI9MCkpKSx5LnN0YXR1cz1iLHkuc3RhdHVzVGV4dD0oY3x8eCkrXCJcIixqP3MucmVzb2x2ZVdpdGgocCxbbSx4LHldKTpzLnJlamVjdFdpdGgocCxbeSx4LG5dKSx5LnN0YXR1c0NvZGUodSksdT12b2lkIDAsbCYmcS50cmlnZ2VyKGo/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW3ksbyxqP206bl0pLHQuZmlyZVdpdGgocCxbeSx4XSksbCYmKHEudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFt5LG9dKSwtLXIuYWN0aXZlfHxyLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiB5fSxnZXRKU09OOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gci5nZXQoYSxiLGMsXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gci5nZXQoYSx2b2lkIDAsYixcInNjcmlwdFwiKX19KSxyLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGEsYil7cltiXT1mdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGMpJiYoZT1lfHxkLGQ9YyxjPXZvaWQgMCksci5hamF4KHIuZXh0ZW5kKHt1cmw6YSx0eXBlOmIsZGF0YVR5cGU6ZSxkYXRhOmMsc3VjY2VzczpkfSxyLmlzUGxhaW5PYmplY3QoYSkmJmEpKX19KSxyLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiByLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LHIuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiB0aGlzWzBdJiYoci5pc0Z1bmN0aW9uKGEpJiYoYT1hLmNhbGwodGhpc1swXSkpLGI9cihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9cih0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1yLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtyKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucGFyZW50KGEpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe3IodGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksci5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiFyLmV4cHIucHNldWRvcy52aXNpYmxlKGEpfSxyLmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiEhKGEub2Zmc2V0V2lkdGh8fGEub2Zmc2V0SGVpZ2h0fHxhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0sci5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChiKXt9fTt2YXIgT2I9ezA6MjAwLDEyMjM6MjA0fSxQYj1yLmFqYXhTZXR0aW5ncy54aHIoKTtvLmNvcnM9ISFQYiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIFBiLG8uYWpheD1QYj0hIVBiLHIuYWpheFRyYW5zcG9ydChmdW5jdGlvbihiKXt2YXIgYyxkO2lmKG8uY29yc3x8UGImJiFiLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsZil7dmFyIGcsaD1iLnhocigpO2lmKGgub3BlbihiLnR5cGUsYi51cmwsYi5hc3luYyxiLnVzZXJuYW1lLGIucGFzc3dvcmQpLGIueGhyRmllbGRzKWZvcihnIGluIGIueGhyRmllbGRzKWhbZ109Yi54aHJGaWVsZHNbZ107Yi5taW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUoYi5taW1lVHlwZSksYi5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihnIGluIGUpaC5zZXRSZXF1ZXN0SGVhZGVyKGcsZVtnXSk7Yz1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtjJiYoYz1kPWgub25sb2FkPWgub25lcnJvcj1oLm9uYWJvcnQ9aC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1hP2guYWJvcnQoKTpcImVycm9yXCI9PT1hP1wibnVtYmVyXCIhPXR5cGVvZiBoLnN0YXR1cz9mKDAsXCJlcnJvclwiKTpmKGguc3RhdHVzLGguc3RhdHVzVGV4dCk6ZihPYltoLnN0YXR1c118fGguc3RhdHVzLGguc3RhdHVzVGV4dCxcInRleHRcIiE9PShoLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2YgaC5yZXNwb25zZVRleHQ/e2JpbmFyeTpoLnJlc3BvbnNlfTp7dGV4dDpoLnJlc3BvbnNlVGV4dH0saC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0saC5vbmxvYWQ9YygpLGQ9aC5vbmVycm9yPWMoXCJlcnJvclwiKSx2b2lkIDAhPT1oLm9uYWJvcnQ/aC5vbmFib3J0PWQ6aC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09aC5yZWFkeVN0YXRlJiZhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjJiZkKCl9KX0sYz1jKFwiYWJvcnRcIik7dHJ5e2guc2VuZChiLmhhc0NvbnRlbnQmJmIuZGF0YXx8bnVsbCl9Y2F0Y2goaSl7aWYoYyl0aHJvdyBpfX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX0pLHIuYWpheFByZWZpbHRlcihmdW5jdGlvbihhKXthLmNyb3NzRG9tYWluJiYoYS5jb250ZW50cy5zY3JpcHQ9ITEpfSksci5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZ2xvYmFsRXZhbChhKSxhfX19KSxyLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLHIuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXtiPXIoXCI8c2NyaXB0PlwiKS5wcm9wKHtjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmYoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGQuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgUWI9W10sUmI9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztyLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1RYi5wb3AoKXx8ci5leHBhbmRvK1wiX1wiK3JiKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxyLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKFJiLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmMD09PShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZSYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtpZihofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXSlyZXR1cm4gZT1iLmpzb25wQ2FsbGJhY2s9ci5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoUmIsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0oc2IudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8ci5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9yKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLFFiLnB1c2goZSkpLGcmJnIuaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIn0pLG8uY3JlYXRlSFRNTERvY3VtZW50PWZ1bmN0aW9uKCl7dmFyIGE9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtyZXR1cm4gYS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1hLmNoaWxkTm9kZXMubGVuZ3RofSgpLHIucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm5bXTtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSk7dmFyIGUsZixnO3JldHVybiBifHwoby5jcmVhdGVIVE1MRG9jdW1lbnQ/KGI9ZC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksZT1iLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpLGUuaHJlZj1kLmxvY2F0aW9uLmhyZWYsYi5oZWFkLmFwcGVuZENoaWxkKGUpKTpiPWQpLGY9Qi5leGVjKGEpLGc9IWMmJltdLGY/W2IuY3JlYXRlRWxlbWVudChmWzFdKV06KGY9cGEoW2FdLGIsZyksZyYmZy5sZW5ndGgmJnIoZykucmVtb3ZlKCksci5tZXJnZShbXSxmLmNoaWxkTm9kZXMpKX0sci5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD4tMSYmKGQ9bWIoYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLHIuaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJnIuYWpheCh7dXJsOmEsdHlwZTplfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/cihcIjxkaXY+XCIpLmFwcGVuZChyLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmFsd2F5cyhjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChmdW5jdGlvbigpe2MuYXBwbHkodGhpcyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KX0pLHRoaXN9LHIuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7ci5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLHIuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiByLmdyZXAoci50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9O2Z1bmN0aW9uIFNiKGEpe3JldHVybiByLmlzV2luZG93KGEpP2E6OT09PWEubm9kZVR5cGUmJmEuZGVmYXVsdFZpZXd9ci5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1yLmNzcyhhLFwicG9zaXRpb25cIiksbD1yKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9ci5jc3MoYSxcInRvcFwiKSxpPXIuY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiYoZitpKS5pbmRleE9mKFwiYXV0b1wiKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksci5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLHIuZXh0ZW5kKHt9LGgpKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sci5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3Iub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQsZSxmPXRoaXNbMF07aWYoZilyZXR1cm4gZi5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZD1mLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGQud2lkdGh8fGQuaGVpZ2h0PyhlPWYub3duZXJEb2N1bWVudCxjPVNiKGUpLGI9ZS5kb2N1bWVudEVsZW1lbnQse3RvcDpkLnRvcCtjLnBhZ2VZT2Zmc2V0LWIuY2xpZW50VG9wLGxlZnQ6ZC5sZWZ0K2MucGFnZVhPZmZzZXQtYi5jbGllbnRMZWZ0fSk6ZCk6e3RvcDowLGxlZnQ6MH19LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1yLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLHIubm9kZU5hbWUoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQ9e3RvcDpkLnRvcCtyLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksbGVmdDpkLmxlZnQrci5jc3MoYVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKX0pLHt0b3A6Yi50b3AtZC50b3Atci5jc3MoYyxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1kLmxlZnQtci5jc3MoYyxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoYSYmXCJzdGF0aWNcIj09PXIuY3NzKGEsXCJwb3NpdGlvblwiKSlhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxxYX0pfX0pLHIuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1cInBhZ2VZT2Zmc2V0XCI9PT1iO3IuZm5bYV09ZnVuY3Rpb24oZCl7cmV0dXJuIFModGhpcyxmdW5jdGlvbihhLGQsZSl7dmFyIGY9U2IoYSk7cmV0dXJuIHZvaWQgMD09PWU/Zj9mW2JdOmFbZF06dm9pZChmP2Yuc2Nyb2xsVG8oYz9mLnBhZ2VYT2Zmc2V0OmUsYz9lOmYucGFnZVlPZmZzZXQpOmFbZF09ZSl9LGEsZCxhcmd1bWVudHMubGVuZ3RoKX19KSxyLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1tiXT1PYShvLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtpZihjKXJldHVybiBjPU5hKGEsYiksTGEudGVzdChjKT9yKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmN9KX0pLHIuZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe3IuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXtyLmZuW2RdPWZ1bmN0aW9uKGUsZil7dmFyIGc9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaD1jfHwoZT09PSEwfHxmPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gUyh0aGlzLGZ1bmN0aW9uKGIsYyxlKXt2YXIgZjtyZXR1cm4gci5pc1dpbmRvdyhiKT8wPT09ZC5pbmRleE9mKFwib3V0ZXJcIik/YltcImlubmVyXCIrYV06Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZj1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxmW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZltcIm9mZnNldFwiK2FdLGZbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWU/ci5jc3MoYixjLGgpOnIuc3R5bGUoYixjLGUsaCl9LGIsZz9lOnZvaWQgMCxnKX19KX0pLHIuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSksci5wYXJzZUpTT049SlNPTi5wYXJzZSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTt2YXIgVGI9YS5qUXVlcnksVWI9YS4kO3JldHVybiByLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PXImJihhLiQ9VWIpLGImJmEualF1ZXJ5PT09ciYmKGEualF1ZXJ5PVRiKSxyfSxifHwoYS5qUXVlcnk9YS4kPXIpLHJ9KTtcbiIsIi8qKiFcbiAqIEBmaWxlT3ZlcnZpZXcgS2lja2FzcyBsaWJyYXJ5IHRvIGNyZWF0ZSBhbmQgcGxhY2UgcG9wcGVycyBuZWFyIHRoZWlyIHJlZmVyZW5jZSBlbGVtZW50cy5cbiAqIEB2ZXJzaW9uIDEuMTQuM1xuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiBGZWRlcmljbyBaaXZvbG8gYW5kIGNvbnRyaWJ1dG9yc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKi9cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG5jb25zdCBsb25nZXJUaW1lb3V0QnJvd3NlcnMgPSBbJ0VkZ2UnLCAnVHJpZGVudCcsICdGaXJlZm94J107XG5sZXQgdGltZW91dER1cmF0aW9uID0gMDtcbmZvciAobGV0IGkgPSAwOyBpIDwgbG9uZ2VyVGltZW91dEJyb3dzZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gIGlmIChpc0Jyb3dzZXIgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKGxvbmdlclRpbWVvdXRCcm93c2Vyc1tpXSkgPj0gMCkge1xuICAgIHRpbWVvdXREdXJhdGlvbiA9IDE7XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWljcm90YXNrRGVib3VuY2UoZm4pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBjYWxsZWQgPSBmYWxzZTtcbiAgICAgIGZuKCk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRhc2tEZWJvdW5jZShmbikge1xuICBsZXQgc2NoZWR1bGVkID0gZmFsc2U7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIGZuKCk7XG4gICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3Qgc3VwcG9ydHNNaWNyb1Rhc2tzID0gaXNCcm93c2VyICYmIHdpbmRvdy5Qcm9taXNlO1xuXG4vKipcbiogQ3JlYXRlIGEgZGVib3VuY2VkIHZlcnNpb24gb2YgYSBtZXRob2QsIHRoYXQncyBhc3luY2hyb25vdXNseSBkZWZlcnJlZFxuKiBidXQgY2FsbGVkIGluIHRoZSBtaW5pbXVtIHRpbWUgcG9zc2libGUuXG4qXG4qIEBtZXRob2RcbiogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuKiBAYXJndW1lbnQge0Z1bmN0aW9ufSBmblxuKiBAcmV0dXJucyB7RnVuY3Rpb259XG4qL1xudmFyIGRlYm91bmNlID0gc3VwcG9ydHNNaWNyb1Rhc2tzID8gbWljcm90YXNrRGVib3VuY2UgOiB0YXNrRGVib3VuY2U7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QW55fSBmdW5jdGlvblRvQ2hlY2sgLSB2YXJpYWJsZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0bzogaXMgYSBmdW5jdGlvbj9cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcbiAgY29uc3QgZ2V0VHlwZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIGdldFR5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIEdldCBDU1MgY29tcHV0ZWQgcHJvcGVydHkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gIHJldHVybiBwcm9wZXJ0eSA/IGNzc1twcm9wZXJ0eV0gOiBjc3M7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcGFyZW50Tm9kZSBvciB0aGUgaG9zdCBvZiB0aGUgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZSB8fCBlbGVtZW50Lmhvc3Q7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gc2Nyb2xsIHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBSZXR1cm4gYm9keSwgYGdldFNjcm9sbGAgd2lsbCB0YWtlIGNhcmUgdG8gZ2V0IHRoZSBjb3JyZWN0IGBzY3JvbGxUb3BgIGZyb20gaXRcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBzd2l0Y2ggKGVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICBjYXNlICdIVE1MJzpcbiAgICBjYXNlICdCT0RZJzpcbiAgICAgIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgICBjYXNlICcjZG9jdW1lbnQnOlxuICAgICAgcmV0dXJuIGVsZW1lbnQuYm9keTtcbiAgfVxuXG4gIC8vIEZpcmVmb3ggd2FudCB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICBjb25zdCB7IG92ZXJmbG93LCBvdmVyZmxvd1gsIG92ZXJmbG93WSB9ID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xuICBpZiAoLyhhdXRvfHNjcm9sbHxvdmVybGF5KS8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG59XG5cbmNvbnN0IGlzSUUxMSA9IGlzQnJvd3NlciAmJiAhISh3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbmNvbnN0IGlzSUUxMCA9IGlzQnJvd3NlciAmJiAvTVNJRSAxMC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge051bWJlcn0gdmVyc2lvbiB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGlzSUVcbiAqL1xuZnVuY3Rpb24gaXNJRSh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uID09PSAxMSkge1xuICAgIHJldHVybiBpc0lFMTE7XG4gIH1cbiAgaWYgKHZlcnNpb24gPT09IDEwKSB7XG4gICAgcmV0dXJuIGlzSUUxMDtcbiAgfVxuICByZXR1cm4gaXNJRTExIHx8IGlzSUUxMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBvZmZzZXQgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBjb25zdCBub09mZnNldFBhcmVudCA9IGlzSUUoMTApID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgbGV0IG9mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAvLyBTa2lwIGhpZGRlbiBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGFuIG9mZnNldFBhcmVudFxuICB3aGlsZSAob2Zmc2V0UGFyZW50ID09PSBub09mZnNldFBhcmVudCAmJiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xuICAgIG9mZnNldFBhcmVudCA9IChlbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFBhcmVudDtcbiAgfVxuXG4gIGNvbnN0IG5vZGVOYW1lID0gb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudC5ub2RlTmFtZTtcblxuICBpZiAoIW5vZGVOYW1lIHx8IG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIC5vZmZzZXRQYXJlbnQgd2lsbCByZXR1cm4gdGhlIGNsb3Nlc3QgVEQgb3IgVEFCTEUgaW4gY2FzZVxuICAvLyBubyBvZmZzZXRQYXJlbnQgaXMgcHJlc2VudCwgSSBoYXRlIHRoaXMgam9iLi4uXG4gIGlmIChbJ1REJywgJ1RBQkxFJ10uaW5kZXhPZihvZmZzZXRQYXJlbnQubm9kZU5hbWUpICE9PSAtMSAmJiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkob2Zmc2V0UGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50O1xufVxuXG5mdW5jdGlvbiBpc09mZnNldENvbnRhaW5lcihlbGVtZW50KSB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGVsZW1lbnQ7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGdldE9mZnNldFBhcmVudChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSA9PT0gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgcm9vdCBub2RlIChkb2N1bWVudCwgc2hhZG93RE9NIHJvb3QpIG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtFbGVtZW50fSByb290IG5vZGVcbiAqL1xuZnVuY3Rpb24gZ2V0Um9vdChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZ2V0Um9vdChub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDFcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBjb21tb24gb2Zmc2V0IHBhcmVudFxuICovXG5mdW5jdGlvbiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBlbGVtZW50Mikge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyBIZXJlIHdlIG1ha2Ugc3VyZSB0byBnaXZlIGFzIFwic3RhcnRcIiB0aGUgZWxlbWVudCB0aGF0IGNvbWVzIGZpcnN0IGluIHRoZSBET01cbiAgY29uc3Qgb3JkZXIgPSBlbGVtZW50MS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50MikgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORztcbiAgY29uc3Qgc3RhcnQgPSBvcmRlciA/IGVsZW1lbnQxIDogZWxlbWVudDI7XG4gIGNvbnN0IGVuZCA9IG9yZGVyID8gZWxlbWVudDIgOiBlbGVtZW50MTtcblxuICAvLyBHZXQgY29tbW9uIGFuY2VzdG9yIGNvbnRhaW5lclxuICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCAwKTtcbiAgcmFuZ2Uuc2V0RW5kKGVuZCwgMCk7XG4gIGNvbnN0IHsgY29tbW9uQW5jZXN0b3JDb250YWluZXIgfSA9IHJhbmdlO1xuXG4gIC8vIEJvdGggbm9kZXMgYXJlIGluc2lkZSAjZG9jdW1lbnRcbiAgaWYgKGVsZW1lbnQxICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciAmJiBlbGVtZW50MiAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgfHwgc3RhcnQuY29udGFpbnMoZW5kKSkge1xuICAgIGlmIChpc09mZnNldENvbnRhaW5lcihjb21tb25BbmNlc3RvckNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiBjb21tb25BbmNlc3RvckNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIG9uZSBvZiB0aGUgbm9kZXMgaXMgaW5zaWRlIHNoYWRvd0RPTSwgZmluZCB3aGljaCBvbmVcbiAgY29uc3QgZWxlbWVudDFyb290ID0gZ2V0Um9vdChlbGVtZW50MSk7XG4gIGlmIChlbGVtZW50MXJvb3QuaG9zdCkge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxcm9vdC5ob3N0LCBlbGVtZW50Mik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGdldFJvb3QoZWxlbWVudDIpLmhvc3QpO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc2Nyb2xsIHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50IGluIHRoZSBnaXZlbiBzaWRlICh0b3AgYW5kIGxlZnQpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzaWRlIGB0b3BgIG9yIGBsZWZ0YFxuICogQHJldHVybnMge251bWJlcn0gYW1vdW50IG9mIHNjcm9sbGVkIHBpeGVsc1xuICovXG5mdW5jdGlvbiBnZXRTY3JvbGwoZWxlbWVudCwgc2lkZSA9ICd0b3AnKSB7XG4gIGNvbnN0IHVwcGVyU2lkZSA9IHNpZGUgPT09ICd0b3AnID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gIGNvbnN0IG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgY29uc3QgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3Qgc2Nyb2xsaW5nRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGh0bWw7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnRbdXBwZXJTaWRlXTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50W3VwcGVyU2lkZV07XG59XG5cbi8qXG4gKiBTdW0gb3Igc3VidHJhY3QgdGhlIGVsZW1lbnQgc2Nyb2xsIHZhbHVlcyAobGVmdCBhbmQgdG9wKSBmcm9tIGEgZ2l2ZW4gcmVjdCBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IC0gUmVjdCBvYmplY3QgeW91IHdhbnQgdG8gY2hhbmdlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgZnJvbSB0aGUgZnVuY3Rpb24gcmVhZHMgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3VidHJhY3QgLSBzZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBzdWJ0cmFjdCB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHJldHVybiB7T2JqZWN0fSByZWN0IC0gVGhlIG1vZGlmaWVyIHJlY3Qgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluY2x1ZGVTY3JvbGwocmVjdCwgZWxlbWVudCwgc3VidHJhY3QgPSBmYWxzZSkge1xuICBjb25zdCBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICBjb25zdCBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gIGNvbnN0IG1vZGlmaWVyID0gc3VidHJhY3QgPyAtMSA6IDE7XG4gIHJlY3QudG9wICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJldHVybiByZWN0O1xufVxuXG4vKlxuICogSGVscGVyIHRvIGRldGVjdCBib3JkZXJzIG9mIGEgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcbiAqIFJlc3VsdCBvZiBgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5YCBvbiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGF4aXMgLSBgeGAgb3IgYHlgXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGJvcmRlcnMgLSBUaGUgYm9yZGVycyBzaXplIG9mIHRoZSBnaXZlbiBheGlzXG4gKi9cblxuZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCBheGlzKSB7XG4gIGNvbnN0IHNpZGVBID0gYXhpcyA9PT0gJ3gnID8gJ0xlZnQnIDogJ1RvcCc7XG4gIGNvbnN0IHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gcGFyc2VGbG9hdChzdHlsZXNbYGJvcmRlciR7c2lkZUF9V2lkdGhgXSwgMTApICsgcGFyc2VGbG9hdChzdHlsZXNbYGJvcmRlciR7c2lkZUJ9V2lkdGhgXSwgMTApO1xufVxuXG5mdW5jdGlvbiBnZXRTaXplKGF4aXMsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KGJvZHlbYG9mZnNldCR7YXhpc31gXSwgYm9keVtgc2Nyb2xsJHtheGlzfWBdLCBodG1sW2BjbGllbnQke2F4aXN9YF0sIGh0bWxbYG9mZnNldCR7YXhpc31gXSwgaHRtbFtgc2Nyb2xsJHtheGlzfWBdLCBpc0lFKDEwKSA/IGh0bWxbYG9mZnNldCR7YXhpc31gXSArIGNvbXB1dGVkU3R5bGVbYG1hcmdpbiR7YXhpcyA9PT0gJ0hlaWdodCcgPyAnVG9wJyA6ICdMZWZ0J31gXSArIGNvbXB1dGVkU3R5bGVbYG1hcmdpbiR7YXhpcyA9PT0gJ0hlaWdodCcgPyAnQm90dG9tJyA6ICdSaWdodCd9YF0gOiAwKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2l6ZXMoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gaXNJRSgxMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShodG1sKTtcblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogZ2V0U2l6ZSgnSGVpZ2h0JywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSlcbiAgfTtcbn1cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbi8qKlxuICogR2l2ZW4gZWxlbWVudCBvZmZzZXRzLCBnZW5lcmF0ZSBhbiBvdXRwdXQgc2ltaWxhciB0byBnZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvZmZzZXRzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDbGllbnRSZWN0IGxpa2Ugb3V0cHV0XG4gKi9cbmZ1bmN0aW9uIGdldENsaWVudFJlY3Qob2Zmc2V0cykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG9mZnNldHMsIHtcbiAgICByaWdodDogb2Zmc2V0cy5sZWZ0ICsgb2Zmc2V0cy53aWR0aCxcbiAgICBib3R0b206IG9mZnNldHMudG9wICsgb2Zmc2V0cy5oZWlnaHRcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gY2xpZW50IHJlY3RcbiAqL1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgbGV0IHJlY3QgPSB7fTtcblxuICAvLyBJRTEwIDEwIEZJWDogUGxlYXNlLCBkb24ndCBhc2ssIHRoZSBlbGVtZW50IGlzbid0XG4gIC8vIGNvbnNpZGVyZWQgaW4gRE9NIGluIHNvbWUgY2lyY3Vtc3RhbmNlcy4uLlxuICAvLyBUaGlzIGlzbid0IHJlcHJvZHVjaWJsZSBpbiBJRTEwIGNvbXBhdGliaWxpdHkgbW9kZSBvZiBJRTExXG4gIHRyeSB7XG4gICAgaWYgKGlzSUUoMTApKSB7XG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gICAgICByZWN0LnRvcCArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdDtcbiAgICAgIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3BcbiAgfTtcblxuICAvLyBzdWJ0cmFjdCBzY3JvbGxiYXIgc2l6ZSBmcm9tIHNpemVzXG4gIGNvbnN0IHNpemVzID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoKSA6IHt9O1xuICBjb25zdCB3aWR0aCA9IHNpemVzLndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGggfHwgcmVzdWx0LnJpZ2h0IC0gcmVzdWx0LmxlZnQ7XG4gIGNvbnN0IGhlaWdodCA9IHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuYm90dG9tIC0gcmVzdWx0LnRvcDtcblxuICBsZXQgaG9yaXpTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldFdpZHRoIC0gd2lkdGg7XG4gIGxldCB2ZXJ0U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQ7XG5cbiAgLy8gaWYgYW4gaHlwb3RoZXRpY2FsIHNjcm9sbGJhciBpcyBkZXRlY3RlZCwgd2UgbXVzdCBiZSBzdXJlIGl0J3Mgbm90IGEgYGJvcmRlcmBcbiAgLy8gd2UgbWFrZSB0aGlzIGNoZWNrIGNvbmRpdGlvbmFsIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gIGlmIChob3JpelNjcm9sbGJhciB8fCB2ZXJ0U2Nyb2xsYmFyKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xuICAgIGhvcml6U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3gnKTtcbiAgICB2ZXJ0U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3knKTtcblxuICAgIHJlc3VsdC53aWR0aCAtPSBob3JpelNjcm9sbGJhcjtcbiAgICByZXN1bHQuaGVpZ2h0IC09IHZlcnRTY3JvbGxiYXI7XG4gIH1cblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoY2hpbGRyZW4sIHBhcmVudCwgZml4ZWRQb3NpdGlvbiA9IGZhbHNlKSB7XG4gIGNvbnN0IGlzSUUxMCA9IGlzSUUoMTApO1xuICBjb25zdCBpc0hUTUwgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJztcbiAgY29uc3QgY2hpbGRyZW5SZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGNoaWxkcmVuKTtcbiAgY29uc3QgcGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xuICBjb25zdCBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xuXG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQpO1xuICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlclRvcFdpZHRoLCAxMCk7XG4gIGNvbnN0IGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCwgMTApO1xuXG4gIC8vIEluIGNhc2VzIHdoZXJlIHRoZSBwYXJlbnQgaXMgZml4ZWQsIHdlIG11c3QgaWdub3JlIG5lZ2F0aXZlIHNjcm9sbCBpbiBvZmZzZXQgY2FsY1xuICBpZiAoZml4ZWRQb3NpdGlvbiAmJiBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHBhcmVudFJlY3QudG9wID0gTWF0aC5tYXgocGFyZW50UmVjdC50b3AsIDApO1xuICAgIHBhcmVudFJlY3QubGVmdCA9IE1hdGgubWF4KHBhcmVudFJlY3QubGVmdCwgMCk7XG4gIH1cbiAgbGV0IG9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHtcbiAgICB0b3A6IGNoaWxkcmVuUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcCAtIGJvcmRlclRvcFdpZHRoLFxuICAgIGxlZnQ6IGNoaWxkcmVuUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0IC0gYm9yZGVyTGVmdFdpZHRoLFxuICAgIHdpZHRoOiBjaGlsZHJlblJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBjaGlsZHJlblJlY3QuaGVpZ2h0XG4gIH0pO1xuICBvZmZzZXRzLm1hcmdpblRvcCA9IDA7XG4gIG9mZnNldHMubWFyZ2luTGVmdCA9IDA7XG5cbiAgLy8gU3VidHJhY3QgbWFyZ2lucyBvZiBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBpdCdzIGJlaW5nIHVzZWQgYXMgcGFyZW50XG4gIC8vIHdlIGRvIHRoaXMgb25seSBvbiBIVE1MIGJlY2F1c2UgaXQncyB0aGUgb25seSBlbGVtZW50IHRoYXQgYmVoYXZlc1xuICAvLyBkaWZmZXJlbnRseSB3aGVuIG1hcmdpbnMgYXJlIGFwcGxpZWQgdG8gaXQuIFRoZSBtYXJnaW5zIGFyZSBpbmNsdWRlZCBpblxuICAvLyB0aGUgYm94IG9mIHRoZSBkb2N1bWVudEVsZW1lbnQsIGluIHRoZSBvdGhlciBjYXNlcyBub3QuXG4gIGlmICghaXNJRTEwICYmIGlzSFRNTCkge1xuICAgIGNvbnN0IG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCwgMTApO1xuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0LCAxMCk7XG5cbiAgICBvZmZzZXRzLnRvcCAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmJvdHRvbSAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmxlZnQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcbiAgICBvZmZzZXRzLnJpZ2h0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG5cbiAgICAvLyBBdHRhY2ggbWFyZ2luVG9wIGFuZCBtYXJnaW5MZWZ0IGJlY2F1c2UgaW4gc29tZSBjaXJjdW1zdGFuY2VzIHdlIG1heSBuZWVkIHRoZW1cbiAgICBvZmZzZXRzLm1hcmdpblRvcCA9IG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xuICB9XG5cbiAgaWYgKGlzSUUxMCAmJiAhZml4ZWRQb3NpdGlvbiA/IHBhcmVudC5jb250YWlucyhzY3JvbGxQYXJlbnQpIDogcGFyZW50ID09PSBzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50Lm5vZGVOYW1lICE9PSAnQk9EWScpIHtcbiAgICBvZmZzZXRzID0gaW5jbHVkZVNjcm9sbChvZmZzZXRzLCBwYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50LCBleGNsdWRlU2Nyb2xsID0gZmFsc2UpIHtcbiAgY29uc3QgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KGh0bWwuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChodG1sLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwpIDogMDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwsICdsZWZ0JykgOiAwO1xuXG4gIGNvbnN0IG9mZnNldCA9IHtcbiAgICB0b3A6IHNjcm9sbFRvcCAtIHJlbGF0aXZlT2Zmc2V0LnRvcCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpblRvcCxcbiAgICBsZWZ0OiBzY3JvbGxMZWZ0IC0gcmVsYXRpdmVPZmZzZXQubGVmdCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpbkxlZnQsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0XG4gIH07XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBmaXhlZCBvciBpcyBpbnNpZGUgYSBmaXhlZCBwYXJlbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBjdXN0b21Db250YWluZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG8gXCJpc0ZpeGVkP1wiXG4gKi9cbmZ1bmN0aW9uIGlzRml4ZWQoZWxlbWVudCkge1xuICBjb25zdCBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBpc0ZpeGVkKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBmaXJzdCBwYXJlbnQgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBhIHRyYW5zZm9ybWVkIHByb3BlcnR5IGRlZmluZWRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IGZpcnN0IHRyYW5zZm9ybWVkIHBhcmVudCBvciBkb2N1bWVudEVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IGlzSUUoKSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cbiAgbGV0IGVsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufVxuXG4vKipcbiAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFkZGluZ1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQgLSBFbGVtZW50IHVzZWQgdG8gZGVmaW5lIHRoZSBib3VuZGFyaWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZpeGVkUG9zaXRpb24gLSBJcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb29yZGluYXRlcyBvZiB0aGUgYm91bmRhcmllc1xuICovXG5mdW5jdGlvbiBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCwgZml4ZWRQb3NpdGlvbiA9IGZhbHNlKSB7XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG5cbiAgbGV0IGJvdW5kYXJpZXMgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIHJlZmVyZW5jZSk7XG5cbiAgLy8gSGFuZGxlIHZpZXdwb3J0IGNhc2VcbiAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAndmlld3BvcnQnKSB7XG4gICAgYm91bmRhcmllcyA9IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuICB9IGVsc2Uge1xuICAgIC8vIEhhbmRsZSBvdGhlciBjYXNlcyBiYXNlZCBvbiBET00gZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXNcbiAgICBsZXQgYm91bmRhcmllc05vZGU7XG4gICAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShyZWZlcmVuY2UpKTtcbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGJvdW5kYXJpZXNOb2RlLCBvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuXG4gICAgLy8gSW4gY2FzZSBvZiBIVE1MLCB3ZSBuZWVkIGEgZGlmZmVyZW50IGNvbXB1dGF0aW9uXG4gICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnSFRNTCcgJiYgIWlzRml4ZWQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBnZXRXaW5kb3dTaXplcygpO1xuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gaGVpZ2h0ICsgb2Zmc2V0cy50b3A7XG4gICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xuICAgICAgYm91bmRhcmllcy5yaWdodCA9IHdpZHRoICsgb2Zmc2V0cy5sZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcbiAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBwYWRkaW5nc1xuICBib3VuZGFyaWVzLmxlZnQgKz0gcGFkZGluZztcbiAgYm91bmRhcmllcy50b3AgKz0gcGFkZGluZztcbiAgYm91bmRhcmllcy5yaWdodCAtPSBwYWRkaW5nO1xuICBib3VuZGFyaWVzLmJvdHRvbSAtPSBwYWRkaW5nO1xuXG4gIHJldHVybiBib3VuZGFyaWVzO1xufVxuXG5mdW5jdGlvbiBnZXRBcmVhKHsgd2lkdGgsIGhlaWdodCB9KSB7XG4gIHJldHVybiB3aWR0aCAqIGhlaWdodDtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBgYXV0b2AgcGxhY2VtZW50IHRvIHRoZSBwbGFjZW1lbnQgd2l0aCBtb3JlXG4gKiBhdmFpbGFibGUgc3BhY2UuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChwbGFjZW1lbnQsIHJlZlJlY3QsIHBvcHBlciwgcmVmZXJlbmNlLCBib3VuZGFyaWVzRWxlbWVudCwgcGFkZGluZyA9IDApIHtcbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCk7XG5cbiAgY29uc3QgcmVjdHMgPSB7XG4gICAgdG9wOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuYm90dG9tIC0gcmVmUmVjdC5ib3R0b21cbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgIHdpZHRoOiByZWZSZWN0LmxlZnQgLSBib3VuZGFyaWVzLmxlZnQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNvcnRlZEFyZWFzID0gT2JqZWN0LmtleXMocmVjdHMpLm1hcChrZXkgPT4gX2V4dGVuZHMoe1xuICAgIGtleVxuICB9LCByZWN0c1trZXldLCB7XG4gICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKVxuICB9KSkuc29ydCgoYSwgYikgPT4gYi5hcmVhIC0gYS5hcmVhKTtcblxuICBjb25zdCBmaWx0ZXJlZEFyZWFzID0gc29ydGVkQXJlYXMuZmlsdGVyKCh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gd2lkdGggPj0gcG9wcGVyLmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSBwb3BwZXIuY2xpZW50SGVpZ2h0KTtcblxuICBjb25zdCBjb21wdXRlZFBsYWNlbWVudCA9IGZpbHRlcmVkQXJlYXMubGVuZ3RoID4gMCA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5IDogc29ydGVkQXJlYXNbMF0ua2V5O1xuXG4gIGNvbnN0IHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIHJldHVybiBjb21wdXRlZFBsYWNlbWVudCArICh2YXJpYXRpb24gPyBgLSR7dmFyaWF0aW9ufWAgOiAnJyk7XG59XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGZpeGVkUG9zaXRpb24gLSBpcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSwgZml4ZWRQb3NpdGlvbiA9IG51bGwpIHtcbiAgY29uc3QgY29tbW9uT2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCByZWZlcmVuY2UpO1xuICByZXR1cm4gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKHJlZmVyZW5jZSwgY29tbW9uT2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG91dGVyIHNpemVzIG9mIHRoZSBnaXZlbiBlbGVtZW50IChvZmZzZXQgc2l6ZSArIG1hcmdpbnMpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG9iamVjdCBjb250YWluaW5nIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBnZXRPdXRlclNpemVzKGVsZW1lbnQpIHtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgY29uc3QgeCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20pO1xuICBjb25zdCB5ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5SaWdodCk7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCArIHksXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCArIHhcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudFxuICovXG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgY29uc3QgaGFzaCA9IHsgbGVmdDogJ3JpZ2h0JywgcmlnaHQ6ICdsZWZ0JywgYm90dG9tOiAndG9wJywgdG9wOiAnYm90dG9tJyB9O1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBtYXRjaGVkID0+IGhhc2hbbWF0Y2hlZF0pO1xufVxuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwb3NpdGlvbiAtIENTUyBwb3NpdGlvbiB0aGUgUG9wcGVyIHdpbGwgZ2V0IGFwcGxpZWRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHMgLSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtTdHJpbmd9IHBsYWNlbWVudCAtIG9uZSBvZiB0aGUgdmFsaWQgcGxhY2VtZW50IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IHBvcHBlck9mZnNldHMgLSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5mdW5jdGlvbiBnZXRQb3BwZXJPZmZzZXRzKHBvcHBlciwgcmVmZXJlbmNlT2Zmc2V0cywgcGxhY2VtZW50KSB7XG4gIHBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIC8vIEdldCBwb3BwZXIgbm9kZSBzaXplc1xuICBjb25zdCBwb3BwZXJSZWN0ID0gZ2V0T3V0ZXJTaXplcyhwb3BwZXIpO1xuXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcbiAgY29uc3QgcG9wcGVyT2Zmc2V0cyA9IHtcbiAgICB3aWR0aDogcG9wcGVyUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHBvcHBlclJlY3QuaGVpZ2h0XG4gIH07XG5cbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSBwb3BwZXIgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxuICBjb25zdCBpc0hvcml6ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgY29uc3QgbWFpblNpZGUgPSBpc0hvcml6ID8gJ3RvcCcgOiAnbGVmdCc7XG4gIGNvbnN0IHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XG4gIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgY29uc3Qgc2Vjb25kYXJ5TWVhc3VyZW1lbnQgPSAhaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBwb3BwZXJPZmZzZXRzW21haW5TaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbbWFpblNpZGVdICsgcmVmZXJlbmNlT2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC0gcG9wcGVyUmVjdFttZWFzdXJlbWVudF0gLyAyO1xuICBpZiAocGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlKSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSBwb3BwZXJSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XTtcbiAgfSBlbHNlIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XG4gIH1cblxuICByZXR1cm4gcG9wcGVyT2Zmc2V0cztcbn1cblxuLyoqXG4gKiBNaW1pY3MgdGhlIGBmaW5kYCBtZXRob2Qgb2YgQXJyYXlcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZChhcnIsIGNoZWNrKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gICAgcmV0dXJuIGFyci5maW5kKGNoZWNrKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmlsdGVyYCB0byBvYnRhaW4gdGhlIHNhbWUgYmVoYXZpb3Igb2YgYGZpbmRgXG4gIHJldHVybiBhcnIuZmlsdGVyKGNoZWNrKVswXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBtYXRjaGluZyBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZEluZGV4KGFyciwgcHJvcCwgdmFsdWUpIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kSW5kZXggaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5maW5kSW5kZXgoY3VyID0+IGN1cltwcm9wXSA9PT0gdmFsdWUpO1xuICB9XG5cbiAgLy8gdXNlIGBmaW5kYCArIGBpbmRleE9mYCBpZiBgZmluZEluZGV4YCBpc24ndCBzdXBwb3J0ZWRcbiAgY29uc3QgbWF0Y2ggPSBmaW5kKGFyciwgb2JqID0+IG9ialtwcm9wXSA9PT0gdmFsdWUpO1xuICByZXR1cm4gYXJyLmluZGV4T2YobWF0Y2gpO1xufVxuXG4vKipcbiAqIExvb3AgdHJvdWdoIHRoZSBsaXN0IG9mIG1vZGlmaWVycyBhbmQgcnVuIHRoZW0gaW4gb3JkZXIsXG4gKiBlYWNoIG9mIHRoZW0gd2lsbCB0aGVuIGVkaXQgdGhlIGRhdGEgb2JqZWN0LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmRzIC0gT3B0aW9uYWwgbW9kaWZpZXIgbmFtZSB1c2VkIGFzIHN0b3BwZXJcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fVxuICovXG5mdW5jdGlvbiBydW5Nb2RpZmllcnMobW9kaWZpZXJzLCBkYXRhLCBlbmRzKSB7XG4gIGNvbnN0IG1vZGlmaWVyc1RvUnVuID0gZW5kcyA9PT0gdW5kZWZpbmVkID8gbW9kaWZpZXJzIDogbW9kaWZpZXJzLnNsaWNlKDAsIGZpbmRJbmRleChtb2RpZmllcnMsICduYW1lJywgZW5kcykpO1xuXG4gIG1vZGlmaWVyc1RvUnVuLmZvckVhY2gobW9kaWZpZXIgPT4ge1xuICAgIGlmIChtb2RpZmllclsnZnVuY3Rpb24nXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICAgIGNvbnNvbGUud2FybignYG1vZGlmaWVyLmZ1bmN0aW9uYCBpcyBkZXByZWNhdGVkLCB1c2UgYG1vZGlmaWVyLmZuYCEnKTtcbiAgICB9XG4gICAgY29uc3QgZm4gPSBtb2RpZmllclsnZnVuY3Rpb24nXSB8fCBtb2RpZmllci5mbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICBpZiAobW9kaWZpZXIuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgLy8gQWRkIHByb3BlcnRpZXMgdG8gb2Zmc2V0cyB0byBtYWtlIHRoZW0gYSBjb21wbGV0ZSBjbGllbnRSZWN0IG9iamVjdFxuICAgICAgLy8gd2UgZG8gdGhpcyBiZWZvcmUgZWFjaCBtb2RpZmllciB0byBtYWtlIHN1cmUgdGhlIHByZXZpb3VzIG9uZSBkb2Vzbid0XG4gICAgICAvLyBtZXNzIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcbiAgICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UpO1xuXG4gICAgICBkYXRhID0gZm4oZGF0YSwgbW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcHBlciwgY29tcHV0aW5nIHRoZSBuZXcgb2Zmc2V0cyBhbmQgYXBwbHlpbmdcbiAqIHRoZSBuZXcgc3R5bGUuPGJyIC8+XG4gKiBQcmVmZXIgYHNjaGVkdWxlVXBkYXRlYCBvdmVyIGB1cGRhdGVgIGJlY2F1c2Ugb2YgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gdXBkYXRlKCkge1xuICAvLyBpZiBwb3BwZXIgaXMgZGVzdHJveWVkLCBkb24ndCBwZXJmb3JtIGFueSBmdXJ0aGVyIHVwZGF0ZVxuICBpZiAodGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBkYXRhID0ge1xuICAgIGluc3RhbmNlOiB0aGlzLFxuICAgIHN0eWxlczoge30sXG4gICAgYXJyb3dTdHlsZXM6IHt9LFxuICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIGZsaXBwZWQ6IGZhbHNlLFxuICAgIG9mZnNldHM6IHt9XG4gIH07XG5cbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHRoaXMuc3RhdGUsIHRoaXMucG9wcGVyLCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBkYXRhLnBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KHRoaXMub3B0aW9ucy5wbGFjZW1lbnQsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIHRoaXMucG9wcGVyLCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LCB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZyk7XG5cbiAgLy8gc3RvcmUgdGhlIGNvbXB1dGVkIHBsYWNlbWVudCBpbnNpZGUgYG9yaWdpbmFsUGxhY2VtZW50YFxuICBkYXRhLm9yaWdpbmFsUGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG5cbiAgZGF0YS5wb3NpdGlvbkZpeGVkID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQ7XG5cbiAgLy8gY29tcHV0ZSB0aGUgcG9wcGVyIG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldFBvcHBlck9mZnNldHModGhpcy5wb3BwZXIsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIGRhdGEucGxhY2VtZW50KTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyLnBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJztcblxuICAvLyBydW4gdGhlIG1vZGlmaWVyc1xuICBkYXRhID0gcnVuTW9kaWZpZXJzKHRoaXMubW9kaWZpZXJzLCBkYXRhKTtcblxuICAvLyB0aGUgZmlyc3QgYHVwZGF0ZWAgd2lsbCBjYWxsIGBvbkNyZWF0ZWAgY2FsbGJhY2tcbiAgLy8gdGhlIG90aGVyIG9uZXMgd2lsbCBjYWxsIGBvblVwZGF0ZWAgY2FsbGJhY2tcbiAgaWYgKCF0aGlzLnN0YXRlLmlzQ3JlYXRlZCkge1xuICAgIHRoaXMuc3RhdGUuaXNDcmVhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vcHRpb25zLm9uVXBkYXRlKGRhdGEpO1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgaXMgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc01vZGlmaWVyRW5hYmxlZChtb2RpZmllcnMsIG1vZGlmaWVyTmFtZSkge1xuICByZXR1cm4gbW9kaWZpZXJzLnNvbWUoKHsgbmFtZSwgZW5hYmxlZCB9KSA9PiBlbmFibGVkICYmIG5hbWUgPT09IG1vZGlmaWVyTmFtZSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBwcmVmaXhlZCBzdXBwb3J0ZWQgcHJvcGVydHkgbmFtZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5IChjYW1lbENhc2UpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBwcmVmaXhlZCBwcm9wZXJ0eSAoY2FtZWxDYXNlIG9yIFBhc2NhbENhc2UsIGRlcGVuZGluZyBvbiB0aGUgdmVuZG9yIHByZWZpeClcbiAqL1xuZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gIGNvbnN0IHByZWZpeGVzID0gW2ZhbHNlLCAnbXMnLCAnV2Via2l0JywgJ01veicsICdPJ107XG4gIGNvbnN0IHVwcGVyUHJvcCA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIGNvbnN0IHRvQ2hlY2sgPSBwcmVmaXggPyBgJHtwcmVmaXh9JHt1cHBlclByb3B9YCA6IHByb3BlcnR5O1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVt0b0NoZWNrXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0b0NoZWNrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBEZXN0cm95IHRoZSBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgLy8gdG91Y2ggRE9NIG9ubHkgaWYgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGlzIGVuYWJsZWRcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKHRoaXMubW9kaWZpZXJzLCAnYXBwbHlTdHlsZScpKSB7XG4gICAgdGhpcy5wb3BwZXIucmVtb3ZlQXR0cmlidXRlKCd4LXBsYWNlbWVudCcpO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUudG9wID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUuYm90dG9tID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUud2lsbENoYW5nZSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlW2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyldID0gJyc7XG4gIH1cblxuICB0aGlzLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuXG4gIC8vIHJlbW92ZSB0aGUgcG9wcGVyIGlmIHVzZXIgZXhwbGljaXR5IGFza2VkIGZvciB0aGUgZGVsZXRpb24gb24gZGVzdHJveVxuICAvLyBkbyBub3QgdXNlIGByZW1vdmVgIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnQgaXRcbiAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVPbkRlc3Ryb3kpIHtcbiAgICB0aGlzLnBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wcGVyKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHdpbmRvdyBhc3NvY2lhdGVkIHdpdGggdGhlIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge1dpbmRvd31cbiAqL1xuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW1lbnQpIHtcbiAgY29uc3Qgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogd2luZG93O1xufVxuXG5mdW5jdGlvbiBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsUGFyZW50LCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpIHtcbiAgY29uc3QgaXNCb2R5ID0gc2Nyb2xsUGFyZW50Lm5vZGVOYW1lID09PSAnQk9EWSc7XG4gIGNvbnN0IHRhcmdldCA9IGlzQm9keSA/IHNjcm9sbFBhcmVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IDogc2Nyb2xsUGFyZW50O1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICBpZiAoIWlzQm9keSkge1xuICAgIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhnZXRTY3JvbGxQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUpLCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpO1xuICB9XG4gIHNjcm9sbFBhcmVudHMucHVzaCh0YXJnZXQpO1xufVxuXG4vKipcbiAqIFNldHVwIG5lZWRlZCBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIG9wdGlvbnMsIHN0YXRlLCB1cGRhdGVCb3VuZCkge1xuICAvLyBSZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gdXBkYXRlQm91bmQ7XG4gIGdldFdpbmRvdyhyZWZlcmVuY2UpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXRlLnVwZGF0ZUJvdW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgLy8gU2Nyb2xsIGV2ZW50IGxpc3RlbmVyIG9uIHNjcm9sbCBwYXJlbnRzXG4gIGNvbnN0IHNjcm9sbEVsZW1lbnQgPSBnZXRTY3JvbGxQYXJlbnQocmVmZXJlbmNlKTtcbiAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKHNjcm9sbEVsZW1lbnQsICdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCwgc3RhdGUuc2Nyb2xsUGFyZW50cyk7XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBzY3JvbGxFbGVtZW50O1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gdHJ1ZTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogSXQgd2lsbCBhZGQgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHN0YXJ0IHJlY2FsY3VsYXRpbmdcbiAqIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIgZWxlbWVudCB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICghdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHNldHVwRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMub3B0aW9ucywgdGhpcy5zdGF0ZSwgdGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKHJlZmVyZW5jZSwgc3RhdGUpIHtcbiAgLy8gUmVtb3ZlIHJlc2l6ZSBldmVudCBsaXN0ZW5lciBvbiB3aW5kb3dcbiAgZ2V0V2luZG93KHJlZmVyZW5jZSkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQpO1xuXG4gIC8vIFJlbW92ZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKHRhcmdldCA9PiB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kKTtcbiAgfSk7XG5cbiAgLy8gUmVzZXQgc3RhdGVcbiAgc3RhdGUudXBkYXRlQm91bmQgPSBudWxsO1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0gW107XG4gIHN0YXRlLnNjcm9sbEVsZW1lbnQgPSBudWxsO1xuICBzdGF0ZS5ldmVudHNFbmFibGVkID0gZmFsc2U7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBJdCB3aWxsIHJlbW92ZSByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgd29uJ3QgcmVjYWxjdWxhdGUgcG9wcGVyIHBvc2l0aW9uXG4gKiB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC4gSXQgYWxzbyB3b24ndCB0cmlnZ2VyIG9uVXBkYXRlIGNhbGxiYWNrIGFueW1vcmUsXG4gKiB1bmxlc3MgeW91IGNhbGwgYHVwZGF0ZWAgbWV0aG9kIG1hbnVhbGx5LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICh0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMuc3RhdGUpO1xuICB9XG59XG5cbi8qKlxuICogVGVsbHMgaWYgYSBnaXZlbiBpbnB1dCBpcyBhIG51bWJlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHsqfSBpbnB1dCB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuIG4gIT09ICcnICYmICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIHN0eWxlIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICBsZXQgdW5pdCA9ICcnO1xuICAgIC8vIGFkZCB1bml0IGlmIHRoZSB2YWx1ZSBpcyBudW1lcmljIGFuZCBpcyBvbmUgb2YgdGhlIGZvbGxvd2luZ1xuICAgIGlmIChbJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHByb3ApICE9PSAtMSAmJiBpc051bWVyaWMoc3R5bGVzW3Byb3BdKSkge1xuICAgICAgdW5pdCA9ICdweCc7XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF0gKyB1bml0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGF0dHJpYnV0ZXMgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgYXR0cmlidXRlcyB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cmlidXRlc1twcm9wXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5zdHlsZXMgLSBMaXN0IG9mIHN0eWxlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLmF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2FtZSBkYXRhIG9iamVjdFxuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlKGRhdGEpIHtcbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuc3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gaW4gdGhpcyB3YXkgd2UgY2FuIG1ha2UgdGhlIDNyZCBwYXJ0eSBtb2RpZmllcnMgYWRkIGN1c3RvbSBzdHlsZXMgdG8gaXRcbiAgLy8gQmUgYXdhcmUsIG1vZGlmaWVycyBjb3VsZCBvdmVycmlkZSB0aGUgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBwcmV2aW91c1xuICAvLyBsaW5lcyBvZiB0aGlzIG1vZGlmaWVyIVxuICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuc3R5bGVzKTtcblxuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5hdHRyaWJ1dGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gdGhleSB3aWxsIGJlIHNldCBhcyBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgc2V0QXR0cmlidXRlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5hdHRyaWJ1dGVzKTtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgZGVmaW5lZCBhbmQgYXJyb3dTdHlsZXMgaGFzIHNvbWUgcHJvcGVydGllc1xuICBpZiAoZGF0YS5hcnJvd0VsZW1lbnQgJiYgT2JqZWN0LmtleXMoZGF0YS5hcnJvd1N0eWxlcykubGVuZ3RoKSB7XG4gICAgc2V0U3R5bGVzKGRhdGEuYXJyb3dFbGVtZW50LCBkYXRhLmFycm93U3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFNldCB0aGUgeC1wbGFjZW1lbnQgYXR0cmlidXRlIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkXG4gKiB0byBhZGQgbWFyZ2lucyB0byB0aGUgcG9wcGVyIG1hcmdpbnMgbmVlZHMgdG8gYmUgY2FsY3VsYXRlZCB0byBnZXQgdGhlXG4gKiBjb3JyZWN0IHBvcHBlciBvZmZzZXRzLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5tb2RpZmllcnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUG9wcGVyLmpzIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYXBwbHlTdHlsZU9uTG9hZChyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCBzdGF0ZSkge1xuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgY29uc3QgcmVmZXJlbmNlT2Zmc2V0cyA9IGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlLCBvcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBjb25zdCBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChvcHRpb25zLnBsYWNlbWVudCwgcmVmZXJlbmNlT2Zmc2V0cywgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZyk7XG5cbiAgcG9wcGVyLnNldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnLCBwbGFjZW1lbnQpO1xuXG4gIC8vIEFwcGx5IGBwb3NpdGlvbmAgdG8gcG9wcGVyIGJlZm9yZSBhbnl0aGluZyBlbHNlIGJlY2F1c2VcbiAgLy8gd2l0aG91dCB0aGUgcG9zaXRpb24gYXBwbGllZCB3ZSBjYW4ndCBndWFyYW50ZWUgY29ycmVjdCBjb21wdXRhdGlvbnNcbiAgc2V0U3R5bGVzKHBvcHBlciwgeyBwb3NpdGlvbjogb3B0aW9ucy5wb3NpdGlvbkZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScgfSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZShkYXRhLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgeCwgeSB9ID0gb3B0aW9ucztcbiAgY29uc3QgeyBwb3BwZXIgfSA9IGRhdGEub2Zmc2V0cztcblxuICAvLyBSZW1vdmUgdGhpcyBsZWdhY3kgc3VwcG9ydCBpbiBQb3BwZXIuanMgdjJcbiAgY29uc3QgbGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uID0gZmluZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgbW9kaWZpZXIgPT4gbW9kaWZpZXIubmFtZSA9PT0gJ2FwcGx5U3R5bGUnKS5ncHVBY2NlbGVyYXRpb247XG4gIGlmIChsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUud2FybignV0FSTklORzogYGdwdUFjY2VsZXJhdGlvbmAgb3B0aW9uIG1vdmVkIHRvIGBjb21wdXRlU3R5bGVgIG1vZGlmaWVyIGFuZCB3aWxsIG5vdCBiZSBzdXBwb3J0ZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFBvcHBlci5qcyEnKTtcbiAgfVxuICBjb25zdCBncHVBY2NlbGVyYXRpb24gPSBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCA/IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA6IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uO1xuXG4gIGNvbnN0IG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIGNvbnN0IG9mZnNldFBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcblxuICAvLyBTdHlsZXNcbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBwb3BwZXIucG9zaXRpb25cbiAgfTtcblxuICAvLyBBdm9pZCBibHVycnkgdGV4dCBieSB1c2luZyBmdWxsIHBpeGVsIGludGVnZXJzLlxuICAvLyBGb3IgcGl4ZWwtcGVyZmVjdCBwb3NpdGlvbmluZywgdG9wL2JvdHRvbSBwcmVmZXJzIHJvdW5kZWRcbiAgLy8gdmFsdWVzLCB3aGlsZSBsZWZ0L3JpZ2h0IHByZWZlcnMgZmxvb3JlZCB2YWx1ZXMuXG4gIGNvbnN0IG9mZnNldHMgPSB7XG4gICAgbGVmdDogTWF0aC5mbG9vcihwb3BwZXIubGVmdCksXG4gICAgdG9wOiBNYXRoLnJvdW5kKHBvcHBlci50b3ApLFxuICAgIGJvdHRvbTogTWF0aC5yb3VuZChwb3BwZXIuYm90dG9tKSxcbiAgICByaWdodDogTWF0aC5mbG9vcihwb3BwZXIucmlnaHQpXG4gIH07XG5cbiAgY29uc3Qgc2lkZUEgPSB4ID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIGNvbnN0IHNpZGVCID0geSA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG5cbiAgLy8gaWYgZ3B1QWNjZWxlcmF0aW9uIGlzIHNldCB0byBgdHJ1ZWAgYW5kIHRyYW5zZm9ybSBpcyBzdXBwb3J0ZWQsXG4gIC8vICB3ZSB1c2UgYHRyYW5zbGF0ZTNkYCB0byBhcHBseSB0aGUgcG9zaXRpb24gdG8gdGhlIHBvcHBlciB3ZVxuICAvLyBhdXRvbWF0aWNhbGx5IHVzZSB0aGUgc3VwcG9ydGVkIHByZWZpeGVkIHZlcnNpb24gaWYgbmVlZGVkXG4gIGNvbnN0IHByZWZpeGVkUHJvcGVydHkgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpO1xuXG4gIC8vIG5vdywgbGV0J3MgbWFrZSBhIHN0ZXAgYmFjayBhbmQgbG9vayBhdCB0aGlzIGNvZGUgY2xvc2VseSAod3RmPylcbiAgLy8gSWYgdGhlIGNvbnRlbnQgb2YgdGhlIHBvcHBlciBncm93cyBvbmNlIGl0J3MgYmVlbiBwb3NpdGlvbmVkLCBpdFxuICAvLyBtYXkgaGFwcGVuIHRoYXQgdGhlIHBvcHBlciBnZXRzIG1pc3BsYWNlZCBiZWNhdXNlIG9mIHRoZSBuZXcgY29udGVudFxuICAvLyBvdmVyZmxvd2luZyBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVG8gYXZvaWQgdGhpcyBwcm9ibGVtLCB3ZSBwcm92aWRlIHR3byBvcHRpb25zICh4IGFuZCB5KSwgd2hpY2ggYWxsb3dcbiAgLy8gdGhlIGNvbnN1bWVyIHRvIGRlZmluZSB0aGUgb2Zmc2V0IG9yaWdpbi5cbiAgLy8gSWYgd2UgcG9zaXRpb24gYSBwb3BwZXIgb24gdG9wIG9mIGEgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIGNhbiBzZXRcbiAgLy8gYHhgIHRvIGB0b3BgIHRvIG1ha2UgdGhlIHBvcHBlciBncm93IHRvd2FyZHMgaXRzIHRvcCBpbnN0ZWFkIG9mXG4gIC8vIGl0cyBib3R0b20uXG4gIGxldCBsZWZ0LCB0b3A7XG4gIGlmIChzaWRlQSA9PT0gJ2JvdHRvbScpIHtcbiAgICB0b3AgPSAtb2Zmc2V0UGFyZW50UmVjdC5oZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgfSBlbHNlIHtcbiAgICB0b3AgPSBvZmZzZXRzLnRvcDtcbiAgfVxuICBpZiAoc2lkZUIgPT09ICdyaWdodCcpIHtcbiAgICBsZWZ0ID0gLW9mZnNldFBhcmVudFJlY3Qud2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGxlZnQgPSBvZmZzZXRzLmxlZnQ7XG4gIH1cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbiAmJiBwcmVmaXhlZFByb3BlcnR5KSB7XG4gICAgc3R5bGVzW3ByZWZpeGVkUHJvcGVydHldID0gYHRyYW5zbGF0ZTNkKCR7bGVmdH1weCwgJHt0b3B9cHgsIDApYDtcbiAgICBzdHlsZXNbc2lkZUFdID0gMDtcbiAgICBzdHlsZXNbc2lkZUJdID0gMDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0nO1xuICB9IGVsc2Uge1xuICAgIC8vIG90aHdlcmlzZSwgd2UgdXNlIHRoZSBzdGFuZGFyZCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCBhbmQgYHJpZ2h0YCBwcm9wZXJ0aWVzXG4gICAgY29uc3QgaW52ZXJ0VG9wID0gc2lkZUEgPT09ICdib3R0b20nID8gLTEgOiAxO1xuICAgIGNvbnN0IGludmVydExlZnQgPSBzaWRlQiA9PT0gJ3JpZ2h0JyA/IC0xIDogMTtcbiAgICBzdHlsZXNbc2lkZUFdID0gdG9wICogaW52ZXJ0VG9wO1xuICAgIHN0eWxlc1tzaWRlQl0gPSBsZWZ0ICogaW52ZXJ0TGVmdDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9IGAke3NpZGVBfSwgJHtzaWRlQn1gO1xuICB9XG5cbiAgLy8gQXR0cmlidXRlc1xuICBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICAgICd4LXBsYWNlbWVudCc6IGRhdGEucGxhY2VtZW50XG4gIH07XG5cbiAgLy8gVXBkYXRlIGBkYXRhYCBhdHRyaWJ1dGVzLCBzdHlsZXMgYW5kIGFycm93U3R5bGVzXG4gIGRhdGEuYXR0cmlidXRlcyA9IF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBkYXRhLmF0dHJpYnV0ZXMpO1xuICBkYXRhLnN0eWxlcyA9IF9leHRlbmRzKHt9LCBzdHlsZXMsIGRhdGEuc3R5bGVzKTtcbiAgZGF0YS5hcnJvd1N0eWxlcyA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMuYXJyb3csIGRhdGEuYXJyb3dTdHlsZXMpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGRlcGVuZHMgZnJvbSBhbm90aGVyIG9uZS48YnIgLz5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgbmVlZGVkIG1vZGlmaWVyIGlzIGxpc3RlZCBhbmQgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVycyAtIGxpc3Qgb2YgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGluZ05hbWUgLSBuYW1lIG9mIHJlcXVlc3RpbmcgbW9kaWZpZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0ZWROYW1lIC0gbmFtZSBvZiByZXF1ZXN0ZWQgbW9kaWZpZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc01vZGlmaWVyUmVxdWlyZWQobW9kaWZpZXJzLCByZXF1ZXN0aW5nTmFtZSwgcmVxdWVzdGVkTmFtZSkge1xuICBjb25zdCByZXF1ZXN0aW5nID0gZmluZChtb2RpZmllcnMsICh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcmVxdWVzdGluZ05hbWUpO1xuXG4gIGNvbnN0IGlzUmVxdWlyZWQgPSAhIXJlcXVlc3RpbmcgJiYgbW9kaWZpZXJzLnNvbWUobW9kaWZpZXIgPT4ge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSByZXF1ZXN0ZWROYW1lICYmIG1vZGlmaWVyLmVuYWJsZWQgJiYgbW9kaWZpZXIub3JkZXIgPCByZXF1ZXN0aW5nLm9yZGVyO1xuICB9KTtcblxuICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICBjb25zdCByZXF1ZXN0aW5nID0gYFxcYCR7cmVxdWVzdGluZ05hbWV9XFxgYDtcbiAgICBjb25zdCByZXF1ZXN0ZWQgPSBgXFxgJHtyZXF1ZXN0ZWROYW1lfVxcYGA7XG4gICAgY29uc29sZS53YXJuKGAke3JlcXVlc3RlZH0gbW9kaWZpZXIgaXMgcmVxdWlyZWQgYnkgJHtyZXF1ZXN0aW5nfSBtb2RpZmllciBpbiBvcmRlciB0byB3b3JrLCBiZSBzdXJlIHRvIGluY2x1ZGUgaXQgYmVmb3JlICR7cmVxdWVzdGluZ30hYCk7XG4gIH1cbiAgcmV0dXJuIGlzUmVxdWlyZWQ7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBhcnJvdyhkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGFycm93IGRlcGVuZHMgb24ga2VlcFRvZ2V0aGVyIGluIG9yZGVyIHRvIHdvcmtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdhcnJvdycsICdrZWVwVG9nZXRoZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgbGV0IGFycm93RWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgbm90IGZvdW5kLCBkb24ndCBydW4gdGhlIG1vZGlmaWVyXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB0aGUgYXJyb3dFbGVtZW50IGlzbid0IGEgcXVlcnkgc2VsZWN0b3Igd2UgbXVzdCBjaGVjayB0aGF0IHRoZVxuICAgIC8vIHByb3ZpZGVkIERPTSBub2RlIGlzIGNoaWxkIG9mIGl0cyBwb3BwZXIgbm9kZVxuICAgIGlmICghZGF0YS5pbnN0YW5jZS5wb3BwZXIuY29udGFpbnMoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgYXJyb3cuZWxlbWVudGAgbXVzdCBiZSBjaGlsZCBvZiBpdHMgcG9wcGVyIGVsZW1lbnQhJyk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBkYXRhLm9mZnNldHM7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gIGNvbnN0IGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIGNvbnN0IHNpZGVDYXBpdGFsaXplZCA9IGlzVmVydGljYWwgPyAnVG9wJyA6ICdMZWZ0JztcbiAgY29uc3Qgc2lkZSA9IHNpZGVDYXBpdGFsaXplZC50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICBjb25zdCBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICBjb25zdCBhcnJvd0VsZW1lbnRTaXplID0gZ2V0T3V0ZXJTaXplcyhhcnJvd0VsZW1lbnQpW2xlbl07XG5cbiAgLy9cbiAgLy8gZXh0ZW5kcyBrZWVwVG9nZXRoZXIgYmVoYXZpb3IgbWFraW5nIHN1cmUgdGhlIHBvcHBlciBhbmQgaXRzXG4gIC8vIHJlZmVyZW5jZSBoYXZlIGVub3VnaCBwaXhlbHMgaW4gY29uanVjdGlvblxuICAvL1xuXG4gIC8vIHRvcC9sZWZ0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8IHBvcHBlcltzaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLT0gcG9wcGVyW3NpZGVdIC0gKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XG4gIH1cbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgPiBwb3BwZXJbb3BTaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gKz0gcmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSAtIHBvcHBlcltvcFNpZGVdO1xuICB9XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuXG4gIC8vIGNvbXB1dGUgY2VudGVyIG9mIHRoZSBwb3BwZXJcbiAgY29uc3QgY2VudGVyID0gcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW2xlbl0gLyAyIC0gYXJyb3dFbGVtZW50U2l6ZSAvIDI7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHBvcHBlciBvZmZzZXRzXG4gIC8vIHRha2UgcG9wcGVyIG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXG4gIGNvbnN0IGNzcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIGNvbnN0IHBvcHBlck1hcmdpblNpZGUgPSBwYXJzZUZsb2F0KGNzc1tgbWFyZ2luJHtzaWRlQ2FwaXRhbGl6ZWR9YF0sIDEwKTtcbiAgY29uc3QgcG9wcGVyQm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2Bib3JkZXIke3NpZGVDYXBpdGFsaXplZH1XaWR0aGBdLCAxMCk7XG4gIGxldCBzaWRlVmFsdWUgPSBjZW50ZXIgLSBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC0gcG9wcGVyTWFyZ2luU2lkZSAtIHBvcHBlckJvcmRlclNpZGU7XG5cbiAgLy8gcHJldmVudCBhcnJvd0VsZW1lbnQgZnJvbSBiZWluZyBwbGFjZWQgbm90IGNvbnRpZ3VvdXNseSB0byBpdHMgcG9wcGVyXG4gIHNpZGVWYWx1ZSA9IE1hdGgubWF4KE1hdGgubWluKHBvcHBlcltsZW5dIC0gYXJyb3dFbGVtZW50U2l6ZSwgc2lkZVZhbHVlKSwgMCk7XG5cbiAgZGF0YS5hcnJvd0VsZW1lbnQgPSBhcnJvd0VsZW1lbnQ7XG4gIGRhdGEub2Zmc2V0cy5hcnJvdyA9IHtcbiAgICBbc2lkZV06IE1hdGgucm91bmQoc2lkZVZhbHVlKSxcbiAgICBbYWx0U2lkZV06ICcnIC8vIG1ha2Ugc3VyZSB0byB1bnNldCBhbnkgZXZlbnR1YWwgYWx0U2lkZSB2YWx1ZSBmcm9tIHRoZSBET00gbm9kZVxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IHZhcmlhdGlvblxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbikge1xuICBpZiAodmFyaWF0aW9uID09PSAnZW5kJykge1xuICAgIHJldHVybiAnc3RhcnQnO1xuICB9IGVsc2UgaWYgKHZhcmlhdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgIHJldHVybiAnZW5kJztcbiAgfVxuICByZXR1cm4gdmFyaWF0aW9uO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAqIC0gYGF1dG9gXG4gKiAtIGB0b3BgXG4gKiAtIGByaWdodGBcbiAqIC0gYGJvdHRvbWBcbiAqIC0gYGxlZnRgXG4gKlxuICogRWFjaCBwbGFjZW1lbnQgY2FuIGhhdmUgYSB2YXJpYXRpb24gZnJvbSB0aGlzIGxpc3Q6XG4gKiAtIGAtc3RhcnRgXG4gKiAtIGAtZW5kYFxuICpcbiAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICogaXMgcmlnaHQuPGJyIC8+XG4gKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICpcbiAqIFNvbWUgdmFsaWQgZXhhbXBsZXMgYXJlOlxuICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gKiAtIGBib3R0b21gIChvbiBib3R0b20sIGNlbnRlcmVkKVxuICogLSBgYXV0by1yaWdodGAgKG9uIHRoZSBzaWRlIHdpdGggbW9yZSBzcGFjZSBhdmFpbGFibGUsIGFsaWdubWVudCBkZXBlbmRzIGJ5IHBsYWNlbWVudClcbiAqXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAZW51bSB7U3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAbWV0aG9kIHBsYWNlbWVudHNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xudmFyIHBsYWNlbWVudHMgPSBbJ2F1dG8tc3RhcnQnLCAnYXV0bycsICdhdXRvLWVuZCcsICd0b3Atc3RhcnQnLCAndG9wJywgJ3RvcC1lbmQnLCAncmlnaHQtc3RhcnQnLCAncmlnaHQnLCAncmlnaHQtZW5kJywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdsZWZ0LWVuZCcsICdsZWZ0JywgJ2xlZnQtc3RhcnQnXTtcblxuLy8gR2V0IHJpZCBvZiBgYXV0b2AgYGF1dG8tc3RhcnRgIGFuZCBgYXV0by1lbmRgXG5jb25zdCB2YWxpZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLnNsaWNlKDMpO1xuXG4vKipcbiAqIEdpdmVuIGFuIGluaXRpYWwgcGxhY2VtZW50LCByZXR1cm5zIGFsbCB0aGUgc3Vic2VxdWVudCBwbGFjZW1lbnRzXG4gKiBjbG9ja3dpc2UgKG9yIGNvdW50ZXItY2xvY2t3aXNlKS5cbiAqXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IC0gQSB2YWxpZCBwbGFjZW1lbnQgKGl0IGFjY2VwdHMgdmFyaWF0aW9ucylcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gY291bnRlciAtIFNldCB0byB0cnVlIHRvIHdhbGsgdGhlIHBsYWNlbWVudHMgY291bnRlcmNsb2Nrd2lzZVxuICogQHJldHVybnMge0FycmF5fSBwbGFjZW1lbnRzIGluY2x1ZGluZyB0aGVpciB2YXJpYXRpb25zXG4gKi9cbmZ1bmN0aW9uIGNsb2Nrd2lzZShwbGFjZW1lbnQsIGNvdW50ZXIgPSBmYWxzZSkge1xuICBjb25zdCBpbmRleCA9IHZhbGlkUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCk7XG4gIGNvbnN0IGFyciA9IHZhbGlkUGxhY2VtZW50cy5zbGljZShpbmRleCArIDEpLmNvbmNhdCh2YWxpZFBsYWNlbWVudHMuc2xpY2UoMCwgaW5kZXgpKTtcbiAgcmV0dXJuIGNvdW50ZXIgPyBhcnIucmV2ZXJzZSgpIDogYXJyO1xufVxuXG5jb25zdCBCRUhBVklPUlMgPSB7XG4gIEZMSVA6ICdmbGlwJyxcbiAgQ0xPQ0tXSVNFOiAnY2xvY2t3aXNlJyxcbiAgQ09VTlRFUkNMT0NLV0lTRTogJ2NvdW50ZXJjbG9ja3dpc2UnXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaW5uZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEuZmxpcHBlZCAmJiBkYXRhLnBsYWNlbWVudCA9PT0gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCkge1xuICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsIG9wdGlvbnMucGFkZGluZywgb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCwgZGF0YS5wb3NpdGlvbkZpeGVkKTtcblxuICBsZXQgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgbGV0IHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgbGV0IHZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMV0gfHwgJyc7XG5cbiAgbGV0IGZsaXBPcmRlciA9IFtdO1xuXG4gIHN3aXRjaCAob3B0aW9ucy5iZWhhdmlvcikge1xuICAgIGNhc2UgQkVIQVZJT1JTLkZMSVA6XG4gICAgICBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBwbGFjZW1lbnRPcHBvc2l0ZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNPVU5URVJDTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50LCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBmbGlwT3JkZXIgPSBvcHRpb25zLmJlaGF2aW9yO1xuICB9XG5cbiAgZmxpcE9yZGVyLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgaWYgKHBsYWNlbWVudCAhPT0gc3RlcCB8fCBmbGlwT3JkZXIubGVuZ3RoID09PSBpbmRleCArIDEpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gICAgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgY29uc3QgcG9wcGVyT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG4gICAgY29uc3QgcmVmT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICAvLyB1c2luZyBmbG9vciBiZWNhdXNlIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgY29uc3Qgb3ZlcmxhcHNSZWYgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKHJlZk9mZnNldHMubGVmdCkgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihyZWZPZmZzZXRzLnJpZ2h0KSB8fCBwbGFjZW1lbnQgPT09ICd0b3AnICYmIGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKHJlZk9mZnNldHMudG9wKSB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKHJlZk9mZnNldHMuYm90dG9tKTtcblxuICAgIGNvbnN0IG92ZXJmbG93c0xlZnQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IoYm91bmRhcmllcy5sZWZ0KTtcbiAgICBjb25zdCBvdmVyZmxvd3NSaWdodCA9IGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IoYm91bmRhcmllcy5yaWdodCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzVG9wID0gZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIGNvbnN0IG92ZXJmbG93c0JvdHRvbSA9IGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKGJvdW5kYXJpZXMuYm90dG9tKTtcblxuICAgIGNvbnN0IG92ZXJmbG93c0JvdW5kYXJpZXMgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0IHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCB8fCBwbGFjZW1lbnQgPT09ICd0b3AnICYmIG92ZXJmbG93c1RvcCB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbTtcblxuICAgIC8vIGZsaXAgdGhlIHZhcmlhdGlvbiBpZiByZXF1aXJlZFxuICAgIGNvbnN0IGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICAgIGNvbnN0IGZsaXBwZWRWYXJpYXRpb24gPSAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnMgJiYgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0xlZnQgfHwgaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1JpZ2h0IHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NUb3AgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgLy8gdGhpcyBib29sZWFuIHRvIGRldGVjdCBhbnkgZmxpcCBsb29wXG4gICAgICBkYXRhLmZsaXBwZWQgPSB0cnVlO1xuXG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuXG4gICAgICAvLyB0aGlzIG9iamVjdCBjb250YWlucyBgcG9zaXRpb25gLCB3ZSB3YW50IHRvIHByZXNlcnZlIGl0IGFsb25nIHdpdGhcbiAgICAgIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnR5IHdlIG1heSBhZGQgaW4gdGhlIGZ1dHVyZVxuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMucG9wcGVyLCBnZXRQb3BwZXJPZmZzZXRzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCkpO1xuXG4gICAgICBkYXRhID0gcnVuTW9kaWZpZXJzKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBkYXRhLCAnZmxpcCcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24ga2VlcFRvZ2V0aGVyKGRhdGEpIHtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICBjb25zdCBzaWRlID0gaXNWZXJ0aWNhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcbiAgY29uc3Qgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICBjb25zdCBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgaWYgKHBvcHBlcltzaWRlXSA8IGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9IGZsb29yKHJlZmVyZW5jZVtvcFNpZGVdKSAtIHBvcHBlclttZWFzdXJlbWVudF07XG4gIH1cbiAgaWYgKHBvcHBlcltvcFNpZGVdID4gZmxvb3IocmVmZXJlbmNlW3NpZGVdKSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbb3BTaWRlXSA9IGZsb29yKHJlZmVyZW5jZVtzaWRlXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBjb250YWluaW5nIHZhbHVlICsgdW5pdCBpbnRvIGEgcHggdmFsdWUgbnVtYmVyXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gc3RyIC0gVmFsdWUgKyB1bml0IHN0cmluZ1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IG1lYXN1cmVtZW50IC0gYGhlaWdodGAgb3IgYHdpZHRoYFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ31cbiAqIFZhbHVlIGluIHBpeGVscywgb3Igb3JpZ2luYWwgc3RyaW5nIGlmIG5vIHZhbHVlcyB3ZXJlIGV4dHJhY3RlZFxuICovXG5mdW5jdGlvbiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpIHtcbiAgLy8gc2VwYXJhdGUgdmFsdWUgZnJvbSB1bml0XG4gIGNvbnN0IHNwbGl0ID0gc3RyLm1hdGNoKC8oKD86XFwtfFxcKyk/XFxkKlxcLj9cXGQqKSguKikvKTtcbiAgY29uc3QgdmFsdWUgPSArc3BsaXRbMV07XG4gIGNvbnN0IHVuaXQgPSBzcGxpdFsyXTtcblxuICAvLyBJZiBpdCdzIG5vdCBhIG51bWJlciBpdCdzIGFuIG9wZXJhdG9yLCBJIGd1ZXNzXG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgaWYgKHVuaXQuaW5kZXhPZignJScpID09PSAwKSB7XG4gICAgbGV0IGVsZW1lbnQ7XG4gICAgc3dpdGNoICh1bml0KSB7XG4gICAgICBjYXNlICclcCc6XG4gICAgICAgIGVsZW1lbnQgPSBwb3BwZXJPZmZzZXRzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyUnOlxuICAgICAgY2FzZSAnJXInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudCA9IHJlZmVyZW5jZU9mZnNldHM7XG4gICAgfVxuXG4gICAgY29uc3QgcmVjdCA9IGdldENsaWVudFJlY3QoZWxlbWVudCk7XG4gICAgcmV0dXJuIHJlY3RbbWVhc3VyZW1lbnRdIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3ZoJyB8fCB1bml0ID09PSAndncnKSB7XG4gICAgLy8gaWYgaXMgYSB2aCBvciB2dywgd2UgY2FsY3VsYXRlIHRoZSBzaXplIGJhc2VkIG9uIHRoZSB2aWV3cG9ydFxuICAgIGxldCBzaXplO1xuICAgIGlmICh1bml0ID09PSAndmgnKSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemUgLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBpcyBhbiBleHBsaWNpdCBwaXhlbCB1bml0LCB3ZSBnZXQgcmlkIG9mIHRoZSB1bml0IGFuZCBrZWVwIHRoZSB2YWx1ZVxuICAgIC8vIGlmIGlzIGFuIGltcGxpY2l0IHVuaXQsIGl0J3MgcHgsIGFuZCB3ZSByZXR1cm4ganVzdCB0aGUgdmFsdWVcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhbiBgb2Zmc2V0YCBzdHJpbmcgdG8gZXh0cmFwb2xhdGUgYHhgIGFuZCBgeWAgbnVtZXJpYyBvZmZzZXRzLlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IG9mZnNldFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gYmFzZVBsYWNlbWVudFxuICogQHJldHVybnMge0FycmF5fSBhIHR3byBjZWxscyBhcnJheSB3aXRoIHggYW5kIHkgb2Zmc2V0cyBpbiBudW1iZXJzXG4gKi9cbmZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cywgYmFzZVBsYWNlbWVudCkge1xuICBjb25zdCBvZmZzZXRzID0gWzAsIDBdO1xuXG4gIC8vIFVzZSBoZWlnaHQgaWYgcGxhY2VtZW50IGlzIGxlZnQgb3IgcmlnaHQgYW5kIGluZGV4IGlzIDAgb3RoZXJ3aXNlIHVzZSB3aWR0aFxuICAvLyBpbiB0aGlzIHdheSB0aGUgZmlyc3Qgb2Zmc2V0IHdpbGwgdXNlIGFuIGF4aXMgYW5kIHRoZSBzZWNvbmQgb25lXG4gIC8vIHdpbGwgdXNlIHRoZSBvdGhlciBvbmVcbiAgY29uc3QgdXNlSGVpZ2h0ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgLy8gU3BsaXQgdGhlIG9mZnNldCBzdHJpbmcgdG8gb2J0YWluIGEgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzXG4gIC8vIFRoZSByZWdleCBhZGRyZXNzZXMgdmFsdWVzIHdpdGggdGhlIHBsdXMgb3IgbWludXMgc2lnbiBpbiBmcm9udCAoKzEwLCAtMjAsIGV0YylcbiAgY29uc3QgZnJhZ21lbnRzID0gb2Zmc2V0LnNwbGl0KC8oXFwrfFxcLSkvKS5tYXAoZnJhZyA9PiBmcmFnLnRyaW0oKSk7XG5cbiAgLy8gRGV0ZWN0IGlmIHRoZSBvZmZzZXQgc3RyaW5nIGNvbnRhaW5zIGEgcGFpciBvZiB2YWx1ZXMgb3IgYSBzaW5nbGUgb25lXG4gIC8vIHRoZXkgY291bGQgYmUgc2VwYXJhdGVkIGJ5IGNvbW1hIG9yIHNwYWNlXG4gIGNvbnN0IGRpdmlkZXIgPSBmcmFnbWVudHMuaW5kZXhPZihmaW5kKGZyYWdtZW50cywgZnJhZyA9PiBmcmFnLnNlYXJjaCgvLHxcXHMvKSAhPT0gLTEpKTtcblxuICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKCdPZmZzZXRzIHNlcGFyYXRlZCBieSB3aGl0ZSBzcGFjZShzKSBhcmUgZGVwcmVjYXRlZCwgdXNlIGEgY29tbWEgKCwpIGluc3RlYWQuJyk7XG4gIH1cblxuICAvLyBJZiBkaXZpZGVyIGlzIGZvdW5kLCB3ZSBkaXZpZGUgdGhlIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kcyB0byBkaXZpZGVcbiAgLy8gdGhlbSBieSBvZnNldCBYIGFuZCBZLlxuICBjb25zdCBzcGxpdFJlZ2V4ID0gL1xccyosXFxzKnxcXHMrLztcbiAgbGV0IG9wcyA9IGRpdmlkZXIgIT09IC0xID8gW2ZyYWdtZW50cy5zbGljZSgwLCBkaXZpZGVyKS5jb25jYXQoW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVswXV0pLCBbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzFdXS5jb25jYXQoZnJhZ21lbnRzLnNsaWNlKGRpdmlkZXIgKyAxKSldIDogW2ZyYWdtZW50c107XG5cbiAgLy8gQ29udmVydCB0aGUgdmFsdWVzIHdpdGggdW5pdHMgdG8gYWJzb2x1dGUgcGl4ZWxzIHRvIGFsbG93IG91ciBjb21wdXRhdGlvbnNcbiAgb3BzID0gb3BzLm1hcCgob3AsIGluZGV4KSA9PiB7XG4gICAgLy8gTW9zdCBvZiB0aGUgdW5pdHMgcmVseSBvbiB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHBvcHBlclxuICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gKGluZGV4ID09PSAxID8gIXVzZUhlaWdodCA6IHVzZUhlaWdodCkgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgbGV0IG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgcmV0dXJuIG9wXG4gICAgLy8gVGhpcyBhZ2dyZWdhdGVzIGFueSBgK2Agb3IgYC1gIHNpZ24gdGhhdCBhcmVuJ3QgY29uc2lkZXJlZCBvcGVyYXRvcnNcbiAgICAvLyBlLmcuOiAxMCArICs1ID0+IFsxMCwgKywgKzVdXG4gICAgLnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgaWYgKGFbYS5sZW5ndGggLSAxXSA9PT0gJycgJiYgWycrJywgJy0nXS5pbmRleE9mKGIpICE9PSAtMSkge1xuICAgICAgICBhW2EubGVuZ3RoIC0gMV0gPSBiO1xuICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IHRydWU7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSBlbHNlIGlmIChtZXJnZVdpdGhQcmV2aW91cykge1xuICAgICAgICBhW2EubGVuZ3RoIC0gMV0gKz0gYjtcbiAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYS5jb25jYXQoYik7XG4gICAgICB9XG4gICAgfSwgW10pXG4gICAgLy8gSGVyZSB3ZSBjb252ZXJ0IHRoZSBzdHJpbmcgdmFsdWVzIGludG8gbnVtYmVyIHZhbHVlcyAoaW4gcHgpXG4gICAgLm1hcChzdHIgPT4gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSk7XG4gIH0pO1xuXG4gIC8vIExvb3AgdHJvdWdoIHRoZSBvZmZzZXRzIGFycmF5cyBhbmQgZXhlY3V0ZSB0aGUgb3BlcmF0aW9uc1xuICBvcHMuZm9yRWFjaCgob3AsIGluZGV4KSA9PiB7XG4gICAgb3AuZm9yRWFjaCgoZnJhZywgaW5kZXgyKSA9PiB7XG4gICAgICBpZiAoaXNOdW1lcmljKGZyYWcpKSB7XG4gICAgICAgIG9mZnNldHNbaW5kZXhdICs9IGZyYWcgKiAob3BbaW5kZXgyIC0gMV0gPT09ICctJyA/IC0xIDogMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAYXJndW1lbnQge051bWJlcnxTdHJpbmd9IG9wdGlvbnMub2Zmc2V0PTBcbiAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBvZmZzZXQoZGF0YSwgeyBvZmZzZXQgfSkge1xuICBjb25zdCB7IHBsYWNlbWVudCwgb2Zmc2V0czogeyBwb3BwZXIsIHJlZmVyZW5jZSB9IH0gPSBkYXRhO1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgbGV0IG9mZnNldHM7XG4gIGlmIChpc051bWVyaWMoK29mZnNldCkpIHtcbiAgICBvZmZzZXRzID0gWytvZmZzZXQsIDBdO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldHMgPSBwYXJzZU9mZnNldChvZmZzZXQsIHBvcHBlciwgcmVmZXJlbmNlLCBiYXNlUGxhY2VtZW50KTtcbiAgfVxuXG4gIGlmIChiYXNlUGxhY2VtZW50ID09PSAnbGVmdCcpIHtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLmxlZnQgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzFdO1xuICB9XG5cbiAgZGF0YS5wb3BwZXIgPSBwb3BwZXI7XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YSwgb3B0aW9ucykge1xuICBsZXQgYm91bmRhcmllc0VsZW1lbnQgPSBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50IHx8IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG5cbiAgLy8gSWYgb2Zmc2V0UGFyZW50IGlzIHRoZSByZWZlcmVuY2UgZWxlbWVudCwgd2UgcmVhbGx5IHdhbnQgdG9cbiAgLy8gZ28gb25lIHN0ZXAgdXAgYW5kIHVzZSB0aGUgbmV4dCBvZmZzZXRQYXJlbnQgYXMgcmVmZXJlbmNlIHRvXG4gIC8vIGF2b2lkIHRvIG1ha2UgdGhpcyBtb2RpZmllciBjb21wbGV0ZWx5IHVzZWxlc3MgYW5kIGxvb2sgbGlrZSBicm9rZW5cbiAgaWYgKGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlID09PSBib3VuZGFyaWVzRWxlbWVudCkge1xuICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGJvdW5kYXJpZXNFbGVtZW50KTtcbiAgfVxuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXNldHMgdGhlIHBvcHBlcidzIHBvc2l0aW9uIHNvIHRoYXQgdGhlIGRvY3VtZW50IHNpemUgY2FuIGJlIGNhbGN1bGF0ZWQgZXhjbHVkaW5nXG4gIC8vIHRoZSBzaXplIG9mIHRoZSBwb3BwZXIgZWxlbWVudCBpdHNlbGZcbiAgY29uc3QgdHJhbnNmb3JtUHJvcCA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG4gIGNvbnN0IHBvcHBlclN0eWxlcyA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXG4gIGNvbnN0IHsgdG9wLCBsZWZ0LCBbdHJhbnNmb3JtUHJvcF06IHRyYW5zZm9ybSB9ID0gcG9wcGVyU3R5bGVzO1xuICBwb3BwZXJTdHlsZXMudG9wID0gJyc7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gJyc7XG4gIHBvcHBlclN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9ICcnO1xuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSwgb3B0aW9ucy5wYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCwgZGF0YS5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzdG9yZXMgdGhlIG9yaWdpbmFsIHN0eWxlIHByb3BlcnRpZXMgYWZ0ZXIgdGhlIG9mZnNldHMgaGF2ZSBiZWVuIGNvbXB1dGVkXG4gIHBvcHBlclN0eWxlcy50b3AgPSB0b3A7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gbGVmdDtcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xuXG4gIG9wdGlvbnMuYm91bmRhcmllcyA9IGJvdW5kYXJpZXM7XG5cbiAgY29uc3Qgb3JkZXIgPSBvcHRpb25zLnByaW9yaXR5O1xuICBsZXQgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICBjb25zdCBjaGVjayA9IHtcbiAgICBwcmltYXJ5KHBsYWNlbWVudCkge1xuICAgICAgbGV0IHZhbHVlID0gcG9wcGVyW3BsYWNlbWVudF07XG4gICAgICBpZiAocG9wcGVyW3BsYWNlbWVudF0gPCBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiYgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KHBvcHBlcltwbGFjZW1lbnRdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgW3BsYWNlbWVudF06IHZhbHVlIH07XG4gICAgfSxcbiAgICBzZWNvbmRhcnkocGxhY2VtZW50KSB7XG4gICAgICBjb25zdCBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgbGV0IHZhbHVlID0gcG9wcGVyW21haW5TaWRlXTtcbiAgICAgIGlmIChwb3BwZXJbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJiAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4ocG9wcGVyW21haW5TaWRlXSwgYm91bmRhcmllc1twbGFjZW1lbnRdIC0gKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IHBvcHBlci53aWR0aCA6IHBvcHBlci5oZWlnaHQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IFttYWluU2lkZV06IHZhbHVlIH07XG4gICAgfVxuICB9O1xuXG4gIG9yZGVyLmZvckVhY2gocGxhY2VtZW50ID0+IHtcbiAgICBjb25zdCBzaWRlID0gWydsZWZ0JywgJ3RvcCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTEgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5JztcbiAgICBwb3BwZXIgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyLCBjaGVja1tzaWRlXShwbGFjZW1lbnQpKTtcbiAgfSk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHBvcHBlcjtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gc2hpZnQoZGF0YSkge1xuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCBzaGlmdHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIC8vIGlmIHNoaWZ0IHNoaWZ0dmFyaWF0aW9uIGlzIHNwZWNpZmllZCwgcnVuIHRoZSBtb2RpZmllclxuICBpZiAoc2hpZnR2YXJpYXRpb24pIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgcG9wcGVyIH0gPSBkYXRhLm9mZnNldHM7XG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnYm90dG9tJywgJ3RvcCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuICAgIGNvbnN0IHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gICAgY29uc3Qgc2hpZnRPZmZzZXRzID0ge1xuICAgICAgc3RhcnQ6IHsgW3NpZGVdOiByZWZlcmVuY2Vbc2lkZV0gfSxcbiAgICAgIGVuZDoge1xuICAgICAgICBbc2lkZV06IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVttZWFzdXJlbWVudF0gLSBwb3BwZXJbbWVhc3VyZW1lbnRdXG4gICAgICB9XG4gICAgfTtcblxuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyLCBzaGlmdE9mZnNldHNbc2hpZnR2YXJpYXRpb25dKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gaGlkZShkYXRhKSB7XG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaGlkZScsICdwcmV2ZW50T3ZlcmZsb3cnKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3QgcmVmUmVjdCA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG4gIGNvbnN0IGJvdW5kID0gZmluZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgbW9kaWZpZXIgPT4gbW9kaWZpZXIubmFtZSA9PT0gJ3ByZXZlbnRPdmVyZmxvdycpLmJvdW5kYXJpZXM7XG5cbiAgaWYgKHJlZlJlY3QuYm90dG9tIDwgYm91bmQudG9wIHx8IHJlZlJlY3QubGVmdCA+IGJvdW5kLnJpZ2h0IHx8IHJlZlJlY3QudG9wID4gYm91bmQuYm90dG9tIHx8IHJlZlJlY3QucmlnaHQgPCBib3VuZC5sZWZ0KSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gdHJ1ZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSBmYWxzZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGlubmVyKGRhdGEpIHtcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCBpc0hvcml6ID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgY29uc3Qgc3VidHJhY3RMZW5ndGggPSBbJ3RvcCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA9PT0gLTE7XG5cbiAgcG9wcGVyW2lzSG9yaXogPyAnbGVmdCcgOiAndG9wJ10gPSByZWZlcmVuY2VbYmFzZVBsYWNlbWVudF0gLSAoc3VidHJhY3RMZW5ndGggPyBwb3BwZXJbaXNIb3JpeiA/ICd3aWR0aCcgOiAnaGVpZ2h0J10gOiAwKTtcblxuICBkYXRhLnBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KHBvcHBlcik7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogTW9kaWZpZXIgZnVuY3Rpb24sIGVhY2ggbW9kaWZpZXIgY2FuIGhhdmUgYSBmdW5jdGlvbiBvZiB0aGlzIHR5cGUgYXNzaWduZWRcbiAqIHRvIGl0cyBgZm5gIHByb3BlcnR5LjxiciAvPlxuICogVGhlc2UgZnVuY3Rpb25zIHdpbGwgYmUgY2FsbGVkIG9uIGVhY2ggdXBkYXRlLCB0aGlzIG1lYW5zIHRoYXQgeW91IG11c3RcbiAqIG1ha2Ugc3VyZSB0aGV5IGFyZSBwZXJmb3JtYW50IGVub3VnaCB0byBhdm9pZCBwZXJmb3JtYW5jZSBib3R0bGVuZWNrcy5cbiAqXG4gKiBAZnVuY3Rpb24gTW9kaWZpZXJGblxuICogQGFyZ3VtZW50IHtkYXRhT2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cblxuLyoqXG4gKiBNb2RpZmllcnMgYXJlIHBsdWdpbnMgdXNlZCB0byBhbHRlciB0aGUgYmVoYXZpb3Igb2YgeW91ciBwb3BwZXJzLjxiciAvPlxuICogUG9wcGVyLmpzIHVzZXMgYSBzZXQgb2YgOSBtb2RpZmllcnMgdG8gcHJvdmlkZSBhbGwgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdGllc1xuICogbmVlZGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICpcbiAqIFVzdWFsbHkgeW91IGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGBvcmRlcmAsIGBmbmAgYW5kIGBvbkxvYWRgIHByb3BzLlxuICogQWxsIHRoZSBvdGhlciBwcm9wZXJ0aWVzIGFyZSBjb25maWd1cmF0aW9ucyB0aGF0IGNvdWxkIGJlIHR3ZWFrZWQuXG4gKiBAbmFtZXNwYWNlIG1vZGlmaWVyc1xuICovXG52YXIgbW9kaWZpZXJzID0ge1xuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBzaGlmdCB0aGUgcG9wcGVyIG9uIHRoZSBzdGFydCBvciBlbmQgb2YgaXRzIHJlZmVyZW5jZVxuICAgKiBlbGVtZW50LjxiciAvPlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIHZhcmlhdGlvbiBvZiB0aGUgYHBsYWNlbWVudGAgcHJvcGVydHkuPGJyIC8+XG4gICAqIEl0IGNhbiBiZSBvbmUgZWl0aGVyIGAtZW5kYCBvciBgLXN0YXJ0YC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHNoaWZ0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTEwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogc2hpZnRcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGBvZmZzZXRgIG1vZGlmaWVyIGNhbiBzaGlmdCB5b3VyIHBvcHBlciBvbiBib3RoIGl0cyBheGlzLlxuICAgKlxuICAgKiBJdCBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgdW5pdHM6XG4gICAqIC0gYHB4YCBvciB1bml0bGVzcywgaW50ZXJwcmV0ZWQgYXMgcGl4ZWxzXG4gICAqIC0gYCVgIG9yIGAlcmAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICogLSBgJXBgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIC0gYHZ3YCwgQ1NTIHZpZXdwb3J0IHdpZHRoIHVuaXRcbiAgICogLSBgdmhgLCBDU1Mgdmlld3BvcnQgaGVpZ2h0IHVuaXRcbiAgICpcbiAgICogRm9yIGxlbmd0aCBpcyBpbnRlbmRlZCB0aGUgbWFpbiBheGlzIHJlbGF0aXZlIHRvIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHBvcHBlci48YnIgLz5cbiAgICogVGhpcyBtZWFucyB0aGF0IGlmIHRoZSBwbGFjZW1lbnQgaXMgYHRvcGAgb3IgYGJvdHRvbWAsIHRoZSBsZW5ndGggd2lsbCBiZSB0aGVcbiAgICogYHdpZHRoYC4gSW4gY2FzZSBvZiBgbGVmdGAgb3IgYHJpZ2h0YCwgaXQgd2lsbCBiZSB0aGUgaGVpZ2h0LlxuICAgKlxuICAgKiBZb3UgY2FuIHByb3ZpZGUgYSBzaW5nbGUgdmFsdWUgKGFzIGBOdW1iZXJgIG9yIGBTdHJpbmdgKSwgb3IgYSBwYWlyIG9mIHZhbHVlc1xuICAgKiBhcyBgU3RyaW5nYCBkaXZpZGVkIGJ5IGEgY29tbWEgb3Igb25lIChvciBtb3JlKSB3aGl0ZSBzcGFjZXMuPGJyIC8+XG4gICAqIFRoZSBsYXR0ZXIgaXMgYSBkZXByZWNhdGVkIG1ldGhvZCBiZWNhdXNlIGl0IGxlYWRzIHRvIGNvbmZ1c2lvbiBhbmQgd2lsbCBiZVxuICAgKiByZW1vdmVkIGluIHYyLjxiciAvPlxuICAgKiBBZGRpdGlvbmFsbHksIGl0IGFjY2VwdHMgYWRkaXRpb25zIGFuZCBzdWJ0cmFjdGlvbnMgYmV0d2VlbiBkaWZmZXJlbnQgdW5pdHMuXG4gICAqIE5vdGUgdGhhdCBtdWx0aXBsaWNhdGlvbnMgYW5kIGRpdmlzaW9ucyBhcmVuJ3Qgc3VwcG9ydGVkLlxuICAgKlxuICAgKiBWYWxpZCBleGFtcGxlcyBhcmU6XG4gICAqIGBgYFxuICAgKiAxMFxuICAgKiAnMTAlJ1xuICAgKiAnMTAsIDEwJ1xuICAgKiAnMTAlLCAxMCdcbiAgICogJzEwICsgMTAlJ1xuICAgKiAnMTAgLSA1dmggKyAzJSdcbiAgICogJy0xMHB4ICsgNXZoLCA1cHggLSA2JSdcbiAgICogYGBgXG4gICAqID4gKipOQioqOiBJZiB5b3UgZGVzaXJlIHRvIGFwcGx5IG9mZnNldHMgdG8geW91ciBwb3BwZXJzIGluIGEgd2F5IHRoYXQgbWF5IG1ha2UgdGhlbSBvdmVybGFwXG4gICAqID4gd2l0aCB0aGVpciByZWZlcmVuY2UgZWxlbWVudCwgdW5mb3J0dW5hdGVseSwgeW91IHdpbGwgaGF2ZSB0byBkaXNhYmxlIHRoZSBgZmxpcGAgbW9kaWZpZXIuXG4gICAqID4gTW9yZSBvbiB0aGlzIFtyZWFkaW5nIHRoaXMgaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL2lzc3Vlcy8zNzMpXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBvZmZzZXQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAyMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBvZmZzZXQsXG4gICAgLyoqIEBwcm9wIHtOdW1iZXJ8U3RyaW5nfSBvZmZzZXQ9MFxuICAgICAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIG9mZnNldDogMFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHByZXZlbnQgdGhlIHBvcHBlciBmcm9tIGJlaW5nIHBvc2l0aW9uZWQgb3V0c2lkZSB0aGUgYm91bmRhcnkuXG4gICAqXG4gICAqIEFuIHNjZW5hcmlvIGV4aXN0cyB3aGVyZSB0aGUgcmVmZXJlbmNlIGl0c2VsZiBpcyBub3Qgd2l0aGluIHRoZSBib3VuZGFyaWVzLjxiciAvPlxuICAgKiBXZSBjYW4gc2F5IGl0IGhhcyBcImVzY2FwZWQgdGhlIGJvdW5kYXJpZXNcIiDigJQgb3IganVzdCBcImVzY2FwZWRcIi48YnIgLz5cbiAgICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHBlciBzaG91bGQgZWl0aGVyOlxuICAgKlxuICAgKiAtIGRldGFjaCBmcm9tIHRoZSByZWZlcmVuY2UgYW5kIHJlbWFpbiBcInRyYXBwZWRcIiBpbiB0aGUgYm91bmRhcmllcywgb3JcbiAgICogLSBpZiBpdCBzaG91bGQgaWdub3JlIHRoZSBib3VuZGFyeSBhbmQgXCJlc2NhcGUgd2l0aCBpdHMgcmVmZXJlbmNlXCJcbiAgICpcbiAgICogV2hlbiBgZXNjYXBlV2l0aFJlZmVyZW5jZWAgaXMgc2V0IHRvYHRydWVgIGFuZCByZWZlcmVuY2UgaXMgY29tcGxldGVseVxuICAgKiBvdXRzaWRlIGl0cyBib3VuZGFyaWVzLCB0aGUgcG9wcGVyIHdpbGwgb3ZlcmZsb3cgKG9yIGNvbXBsZXRlbHkgbGVhdmUpXG4gICAqIHRoZSBib3VuZGFyaWVzIGluIG9yZGVyIHRvIHJlbWFpbiBhdHRhY2hlZCB0byB0aGUgZWRnZSBvZiB0aGUgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTMwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogcHJldmVudE92ZXJmbG93LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtBcnJheX0gW3ByaW9yaXR5PVsnbGVmdCcsJ3JpZ2h0JywndG9wJywnYm90dG9tJ11dXG4gICAgICogUG9wcGVyIHdpbGwgdHJ5IHRvIHByZXZlbnQgb3ZlcmZsb3cgZm9sbG93aW5nIHRoZXNlIHByaW9yaXRpZXMgYnkgZGVmYXVsdCxcbiAgICAgKiB0aGVuLCBpdCBjb3VsZCBvdmVyZmxvdyBvbiB0aGUgbGVmdCBhbmQgb24gdG9wIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcHJpb3JpdHk6IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ10sXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogQW1vdW50IG9mIHBpeGVsIHVzZWQgdG8gZGVmaW5lIGEgbWluaW11bSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBib3VuZGFyaWVzXG4gICAgICogYW5kIHRoZSBwb3BwZXIgdGhpcyBtYWtlcyBzdXJlIHRoZSBwb3BwZXIgaGFzIGFsd2F5cyBhIGxpdHRsZSBwYWRkaW5nXG4gICAgICogYmV0d2VlbiB0aGUgZWRnZXMgb2YgaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3Njcm9sbFBhcmVudCdcbiAgICAgKiBCb3VuZGFyaWVzIHVzZWQgYnkgdGhlIG1vZGlmaWVyLCBjYW4gYmUgYHNjcm9sbFBhcmVudGAsIGB3aW5kb3dgLFxuICAgICAqIGB2aWV3cG9ydGAgb3IgYW55IERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAnc2Nyb2xsUGFyZW50J1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2Ugc3VyZSB0aGUgcmVmZXJlbmNlIGFuZCBpdHMgcG9wcGVyIHN0YXkgbmVhciBlYWNob3RoZXJzXG4gICAqIHdpdGhvdXQgbGVhdmluZyBhbnkgZ2FwIGJldHdlZW4gdGhlIHR3by4gRXhwZWNpYWxseSB1c2VmdWwgd2hlbiB0aGUgYXJyb3cgaXNcbiAgICogZW5hYmxlZCBhbmQgeW91IHdhbnQgdG8gYXNzdXJlIGl0IHRvIHBvaW50IHRvIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogSXQgY2FyZXMgb25seSBhYm91dCB0aGUgZmlyc3QgYXhpcywgeW91IGNhbiBzdGlsbCBoYXZlIHBvcHBlcnMgd2l0aCBtYXJnaW5cbiAgICogYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBrZWVwVG9nZXRoZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NDAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA0MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBrZWVwVG9nZXRoZXJcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBtb2RpZmllciBpcyB1c2VkIHRvIG1vdmUgdGhlIGBhcnJvd0VsZW1lbnRgIG9mIHRoZSBwb3BwZXIgdG8gbWFrZVxuICAgKiBzdXJlIGl0IGlzIHBvc2l0aW9uZWQgYmV0d2VlbiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgYW5kIGl0cyBwb3BwZXIgZWxlbWVudC5cbiAgICogSXQgd2lsbCByZWFkIHRoZSBvdXRlciBzaXplIG9mIHRoZSBgYXJyb3dFbGVtZW50YCBub2RlIHRvIGRldGVjdCBob3cgbWFueVxuICAgKiBwaXhlbHMgb2YgY29uanVjdGlvbiBhcmUgbmVlZGVkLlxuICAgKlxuICAgKiBJdCBoYXMgbm8gZWZmZWN0IGlmIG5vIGBhcnJvd0VsZW1lbnRgIGlzIHByb3ZpZGVkLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXJyb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA1MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcnJvdyxcbiAgICAvKiogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gZWxlbWVudD0nW3gtYXJyb3ddJyAtIFNlbGVjdG9yIG9yIG5vZGUgdXNlZCBhcyBhcnJvdyAqL1xuICAgIGVsZW1lbnQ6ICdbeC1hcnJvd10nXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gZmxpcCB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50IHdoZW4gaXQgc3RhcnRzIHRvIG92ZXJsYXAgaXRzXG4gICAqIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqXG4gICAqICoqTk9URToqKiB0aGlzIG1vZGlmaWVyIHdpbGwgaW50ZXJydXB0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZSBhbmQgd2lsbFxuICAgKiByZXN0YXJ0IGl0IGlmIGl0IGRldGVjdHMgdGhlIG5lZWQgdG8gZmxpcCB0aGUgcGxhY2VtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgZmxpcDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj02MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDYwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGZsaXAsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xBcnJheX0gYmVoYXZpb3I9J2ZsaXAnXG4gICAgICogVGhlIGJlaGF2aW9yIHVzZWQgdG8gY2hhbmdlIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQuIEl0IGNhbiBiZSBvbmUgb2ZcbiAgICAgKiBgZmxpcGAsIGBjbG9ja3dpc2VgLCBgY291bnRlcmNsb2Nrd2lzZWAgb3IgYW4gYXJyYXkgd2l0aCBhIGxpc3Qgb2YgdmFsaWRcbiAgICAgKiBwbGFjZW1lbnRzICh3aXRoIG9wdGlvbmFsIHZhcmlhdGlvbnMpLlxuICAgICAqL1xuICAgIGJlaGF2aW9yOiAnZmxpcCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogVGhlIHBvcHBlciB3aWxsIGZsaXAgaWYgaXQgaGl0cyB0aGUgZWRnZXMgb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSd2aWV3cG9ydCdcbiAgICAgKiBUaGUgZWxlbWVudCB3aGljaCB3aWxsIGRlZmluZSB0aGUgYm91bmRhcmllcyBvZiB0aGUgcG9wcGVyIHBvc2l0aW9uLFxuICAgICAqIHRoZSBwb3BwZXIgd2lsbCBuZXZlciBiZSBwbGFjZWQgb3V0c2lkZSBvZiB0aGUgZGVmaW5lZCBib3VuZGFyaWVzXG4gICAgICogKGV4Y2VwdCBpZiBrZWVwVG9nZXRoZXIgaXMgZW5hYmxlZClcbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3ZpZXdwb3J0J1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2UgdGhlIHBvcHBlciBmbG93IHRvd2FyZCB0aGUgaW5uZXIgb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBCeSBkZWZhdWx0LCB3aGVuIHRoaXMgbW9kaWZpZXIgaXMgZGlzYWJsZWQsIHRoZSBwb3BwZXIgd2lsbCBiZSBwbGFjZWQgb3V0c2lkZVxuICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBpbm5lcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj03MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDcwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9ZmFsc2UgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaW5uZXJcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBoaWRlIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0c2lkZSBvZiB0aGVcbiAgICogcG9wcGVyIGJvdW5kYXJpZXMuIEl0IHdpbGwgc2V0IGEgYHgtb3V0LW9mLWJvdW5kYXJpZXNgIGF0dHJpYnV0ZSB3aGljaCBjYW5cbiAgICogYmUgdXNlZCB0byBoaWRlIHdpdGggYSBDU1Mgc2VsZWN0b3IgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgaXNcbiAgICogb3V0IG9mIGJvdW5kYXJpZXMuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGhpZGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBoaWRlXG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBzdHlsZSB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGVsZW1lbnQgdG8gZ2V0c1xuICAgKiBwcm9wZXJseSBwb3NpdGlvbmVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyBtb2RpZmllciB3aWxsIG5vdCB0b3VjaCB0aGUgRE9NLCBpdCBqdXN0IHByZXBhcmVzIHRoZSBzdHlsZXNcbiAgICogc28gdGhhdCBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgY2FuIGFwcGx5IGl0LiBUaGlzIHNlcGFyYXRpb24gaXMgdXNlZnVsXG4gICAqIGluIGNhc2UgeW91IG5lZWQgdG8gcmVwbGFjZSBgYXBwbHlTdHlsZWAgd2l0aCBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogVGhpcyBtb2RpZmllciBoYXMgYDg1MGAgYXMgYG9yZGVyYCB2YWx1ZSB0byBtYWludGFpbiBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAqIHdpdGggcHJldmlvdXMgdmVyc2lvbnMgb2YgUG9wcGVyLmpzLiBFeHBlY3QgdGhlIG1vZGlmaWVycyBvcmRlcmluZyBtZXRob2RcbiAgICogdG8gY2hhbmdlIGluIGZ1dHVyZSBtYWpvciB2ZXJzaW9ucyBvZiB0aGUgbGlicmFyeS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGNvbXB1dGVTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04NTAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDg1MCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGNvbXB1dGVTdHlsZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM2QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdib3R0b20nXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWCBheGlzIChgYm90dG9tYCBvciBgdG9wYCkuIEFLQSBYIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYGJvdHRvbWBcbiAgICAgKi9cbiAgICB4OiAnYm90dG9tJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nbGVmdCddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBZIGF4aXMgKGBsZWZ0YCBvciBgcmlnaHRgKS4gQUtBIFkgb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgcmlnaHRgXG4gICAgICovXG4gICAgeTogJ3JpZ2h0J1xuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSBjb21wdXRlZCBzdHlsZXMgdG8gdGhlIHBvcHBlciBlbGVtZW50LlxuICAgKlxuICAgKiBBbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIGFyZSBsaW1pdGVkIHRvIHRoaXMgbW9kaWZpZXIuIFRoaXMgaXMgdXNlZnVsIGluIGNhc2VcbiAgICogeW91IHdhbnQgdG8gaW50ZWdyYXRlIFBvcHBlci5qcyBpbnNpZGUgYSBmcmFtZXdvcmsgb3IgdmlldyBsaWJyYXJ5IGFuZCB5b3VcbiAgICogd2FudCB0byBkZWxlZ2F0ZSBhbGwgdGhlIERPTSBtYW5pcHVsYXRpb25zIHRvIGl0LlxuICAgKlxuICAgKiBOb3RlIHRoYXQgaWYgeW91IGRpc2FibGUgdGhpcyBtb2RpZmllciwgeW91IG11c3QgbWFrZSBzdXJlIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiBoYXMgaXRzIHBvc2l0aW9uIHNldCB0byBgYWJzb2x1dGVgIGJlZm9yZSBQb3BwZXIuanMgY2FuIGRvIGl0cyB3b3JrIVxuICAgKlxuICAgKiBKdXN0IGRpc2FibGUgdGhpcyBtb2RpZmllciBhbmQgZGVmaW5lIHlvdSBvd24gdG8gYWNoaWV2ZSB0aGUgZGVzaXJlZCBlZmZlY3QuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcHBseVN0eWxlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTkwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogOTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXBwbHlTdHlsZSxcbiAgICAvKiogQHByb3Age0Z1bmN0aW9ufSAqL1xuICAgIG9uTG9hZDogYXBwbHlTdHlsZU9uTG9hZCxcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMTAuMCwgdGhlIHByb3BlcnR5IG1vdmVkIHRvIGBjb21wdXRlU3R5bGVgIG1vZGlmaWVyXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNkIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdW5kZWZpbmVkXG4gIH1cbn07XG5cbi8qKlxuICogVGhlIGBkYXRhT2JqZWN0YCBpcyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGluZm9ybWF0aW9ucyB1c2VkIGJ5IFBvcHBlci5qc1xuICogdGhpcyBvYmplY3QgZ2V0IHBhc3NlZCB0byBtb2RpZmllcnMgYW5kIHRvIHRoZSBgb25DcmVhdGVgIGFuZCBgb25VcGRhdGVgIGNhbGxiYWNrcy5cbiAqIEBuYW1lIGRhdGFPYmplY3RcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmluc3RhbmNlIFRoZSBQb3BwZXIuanMgaW5zdGFuY2VcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLnBsYWNlbWVudCBQbGFjZW1lbnQgYXBwbGllZCB0byBwb3BwZXJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50IFBsYWNlbWVudCBvcmlnaW5hbGx5IGRlZmluZWQgb24gaW5pdFxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmZsaXBwZWQgVHJ1ZSBpZiBwb3BwZXIgaGFzIGJlZW4gZmxpcHBlZCBieSBmbGlwIG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuaGlkZSBUcnVlIGlmIHRoZSByZWZlcmVuY2UgZWxlbWVudCBpcyBvdXQgb2YgYm91bmRhcmllcywgdXNlZnVsIHRvIGtub3cgd2hlbiB0byBoaWRlIHRoZSBwb3BwZXIuXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBkYXRhLmFycm93RWxlbWVudCBOb2RlIHVzZWQgYXMgYXJyb3cgYnkgYXJyb3cgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLnN0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciwgaXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmFycm93U3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGFycm93LCBpdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYm91bmRhcmllcyBPZmZzZXRzIG9mIHRoZSBwb3BwZXIgYm91bmRhcmllc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cyBUaGUgbWVhc3VyZW1lbnRzIG9mIHBvcHBlciwgcmVmZXJlbmNlIGFuZCBhcnJvdyBlbGVtZW50cy5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucG9wcGVyIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLmFycm93XSBgdG9wYCBhbmQgYGxlZnRgIG9mZnNldHMsIG9ubHkgb25lIG9mIHRoZW0gd2lsbCBiZSBkaWZmZXJlbnQgZnJvbSAwXG4gKi9cblxuLyoqXG4gKiBEZWZhdWx0IG9wdGlvbnMgcHJvdmlkZWQgdG8gUG9wcGVyLmpzIGNvbnN0cnVjdG9yLjxiciAvPlxuICogVGhlc2UgY2FuIGJlIG92ZXJyaWRlbiB1c2luZyB0aGUgYG9wdGlvbnNgIGFyZ3VtZW50IG9mIFBvcHBlci5qcy48YnIgLz5cbiAqIFRvIG92ZXJyaWRlIGFuIG9wdGlvbiwgc2ltcGx5IHBhc3MgYXMgM3JkIGFyZ3VtZW50IGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lXG4gKiBzdHJ1Y3R1cmUgb2YgdGhpcyBvYmplY3QsIGV4YW1wbGU6XG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmLCBwb3AsIHtcbiAqICAgbW9kaWZpZXJzOiB7XG4gKiAgICAgcHJldmVudE92ZXJmbG93OiB7IGVuYWJsZWQ6IGZhbHNlIH1cbiAqICAgfVxuICogfSlcbiAqIGBgYFxuICogQHR5cGUge09iamVjdH1cbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xudmFyIERlZmF1bHRzID0ge1xuICAvKipcbiAgICogUG9wcGVyJ3MgcGxhY2VtZW50XG4gICAqIEBwcm9wIHtQb3BwZXIucGxhY2VtZW50c30gcGxhY2VtZW50PSdib3R0b20nXG4gICAqL1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXG4gIC8qKlxuICAgKiBTZXQgdGhpcyB0byB0cnVlIGlmIHlvdSB3YW50IHBvcHBlciB0byBwb3NpdGlvbiBpdCBzZWxmIGluICdmaXhlZCcgbW9kZVxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcG9zaXRpb25GaXhlZD1mYWxzZVxuICAgKi9cbiAgcG9zaXRpb25GaXhlZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZXZlbnRzIChyZXNpemUsIHNjcm9sbCkgYXJlIGluaXRpYWxseSBlbmFibGVkXG4gICAqIEBwcm9wIHtCb29sZWFufSBldmVudHNFbmFibGVkPXRydWVcbiAgICovXG4gIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBwb3BwZXIgd2hlblxuICAgKiB5b3UgY2FsbCB0aGUgYGRlc3Ryb3lgIG1ldGhvZC5cbiAgICogQHByb3Age0Jvb2xlYW59IHJlbW92ZU9uRGVzdHJveT1mYWxzZVxuICAgKi9cbiAgcmVtb3ZlT25EZXN0cm95OiBmYWxzZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyBjcmVhdGVkLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvbkNyZWF0ZX1cbiAgICovXG4gIG9uQ3JlYXRlOiAoKSA9PiB7fSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkLCB0aGlzIGNhbGxiYWNrIGlzIG5vdCBjYWxsZWRcbiAgICogb24gdGhlIGluaXRpYWxpemF0aW9uL2NyZWF0aW9uIG9mIHRoZSBwb3BwZXIsIGJ1dCBvbmx5IG9uIHN1YnNlcXVlbnRcbiAgICogdXBkYXRlcy48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25VcGRhdGV9XG4gICAqL1xuICBvblVwZGF0ZTogKCkgPT4ge30sXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kaWZpZXJzIHVzZWQgdG8gbW9kaWZ5IHRoZSBvZmZzZXRzIGJlZm9yZSB0aGV5IGFyZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuXG4gICAqIFRoZXkgcHJvdmlkZSBtb3N0IG9mIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgUG9wcGVyLmpzXG4gICAqIEBwcm9wIHttb2RpZmllcnN9XG4gICAqL1xuICBtb2RpZmllcnNcbn07XG5cbi8qKlxuICogQGNhbGxiYWNrIG9uQ3JlYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvblVwZGF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cblxuLy8gVXRpbHNcbi8vIE1ldGhvZHNcbmNsYXNzIFBvcHBlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgUG9wcGVyLmpzIGluc3RhbmNlXG4gICAqIEBjbGFzcyBQb3BwZXJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxyZWZlcmVuY2VPYmplY3R9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgZWxlbWVudCB1c2VkIGFzIHBvcHBlci5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBZb3VyIGN1c3RvbSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBvbmVzIGRlZmluZWQgaW4gW0RlZmF1bHRzXSgjZGVmYXVsdHMpXG4gICAqIEByZXR1cm4ge09iamVjdH0gaW5zdGFuY2UgLSBUaGUgZ2VuZXJhdGVkIFBvcHBlci5qcyBpbnN0YW5jZVxuICAgKi9cbiAgY29uc3RydWN0b3IocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUgPSAoKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xuXG4gICAgLy8gbWFrZSB1cGRhdGUoKSBkZWJvdW5jZWQsIHNvIHRoYXQgaXQgb25seSBydW5zIGF0IG1vc3Qgb25jZS1wZXItdGlja1xuICAgIHRoaXMudXBkYXRlID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyB3aXRoIHt9IHdlIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3B0aW9ucyBpbnNpZGUgaXRcbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIC8vIGluaXQgc3RhdGVcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEZXN0cm95ZWQ6IGZhbHNlLFxuICAgICAgaXNDcmVhdGVkOiBmYWxzZSxcbiAgICAgIHNjcm9sbFBhcmVudHM6IFtdXG4gICAgfTtcblxuICAgIC8vIGdldCByZWZlcmVuY2UgYW5kIHBvcHBlciBlbGVtZW50cyAoYWxsb3cgalF1ZXJ5IHdyYXBwZXJzKVxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5qcXVlcnkgPyByZWZlcmVuY2VbMF0gOiByZWZlcmVuY2U7XG4gICAgdGhpcy5wb3BwZXIgPSBwb3BwZXIgJiYgcG9wcGVyLmpxdWVyeSA/IHBvcHBlclswXSA6IHBvcHBlcjtcblxuICAgIC8vIERlZXAgbWVyZ2UgbW9kaWZpZXJzIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzID0ge307XG4gICAgT2JqZWN0LmtleXMoX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnMsIG9wdGlvbnMubW9kaWZpZXJzKSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gPSBfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVyc1tuYW1lXSB8fCB7fSwgb3B0aW9ucy5tb2RpZmllcnMgPyBvcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA6IHt9KTtcbiAgICB9KTtcblxuICAgIC8vIFJlZmFjdG9yaW5nIG1vZGlmaWVycycgbGlzdCAoT2JqZWN0ID0+IEFycmF5KVxuICAgIHRoaXMubW9kaWZpZXJzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1vZGlmaWVycykubWFwKG5hbWUgPT4gX2V4dGVuZHMoe1xuICAgICAgbmFtZVxuICAgIH0sIHRoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0pKVxuICAgIC8vIHNvcnQgdGhlIG1vZGlmaWVycyBieSBvcmRlclxuICAgIC5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XG5cbiAgICAvLyBtb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIHdoZW4gUG9wcGVyLmpzIGdldCBpbml0ZWRcbiAgICAvLyBzdWNoIGNvZGUgaXMgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgb2YgaXRzIG1vZGlmaWVyXG4gICAgLy8gdGhleSBjb3VsZCBhZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlaXIgb3B0aW9ucyBjb25maWd1cmF0aW9uXG4gICAgLy8gQkUgQVdBUkU6IGRvbid0IGFkZCBvcHRpb25zIHRvIGBvcHRpb25zLm1vZGlmaWVycy5uYW1lYCBidXQgdG8gYG1vZGlmaWVyT3B0aW9uc2AhXG4gICAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChtb2RpZmllck9wdGlvbnMgPT4ge1xuICAgICAgaWYgKG1vZGlmaWVyT3B0aW9ucy5lbmFibGVkICYmIGlzRnVuY3Rpb24obW9kaWZpZXJPcHRpb25zLm9uTG9hZCkpIHtcbiAgICAgICAgbW9kaWZpZXJPcHRpb25zLm9uTG9hZCh0aGlzLnJlZmVyZW5jZSwgdGhpcy5wb3BwZXIsIHRoaXMub3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCB0aGlzLnN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGZpcmUgdGhlIGZpcnN0IHVwZGF0ZSB0byBwb3NpdGlvbiB0aGUgcG9wcGVyIGluIHRoZSByaWdodCBwbGFjZVxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICBjb25zdCBldmVudHNFbmFibGVkID0gdGhpcy5vcHRpb25zLmV2ZW50c0VuYWJsZWQ7XG4gICAgaWYgKGV2ZW50c0VuYWJsZWQpIHtcbiAgICAgIC8vIHNldHVwIGV2ZW50IGxpc3RlbmVycywgdGhleSB3aWxsIHRha2UgY2FyZSBvZiB1cGRhdGUgdGhlIHBvc2l0aW9uIGluIHNwZWNpZmljIHNpdHVhdGlvbnNcbiAgICAgIHRoaXMuZW5hYmxlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQgPSBldmVudHNFbmFibGVkO1xuICB9XG5cbiAgLy8gV2UgY2FuJ3QgdXNlIGNsYXNzIHByb3BlcnRpZXMgYmVjYXVzZSB0aGV5IGRvbid0IGdldCBsaXN0ZWQgaW4gdGhlXG4gIC8vIGNsYXNzIHByb3RvdHlwZSBhbmQgYnJlYWsgc3R1ZmYgbGlrZSBTaW5vbiBzdHVic1xuICB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHVwZGF0ZS5jYWxsKHRoaXMpO1xuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgcmV0dXJuIGRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxuICBlbmFibGVFdmVudExpc3RlbmVycygpIHtcbiAgICByZXR1cm4gZW5hYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgfVxuICBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIGRpc2FibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjaGVkdWxlIGFuIHVwZGF0ZSwgaXQgd2lsbCBydW4gb24gdGhlIG5leHQgVUkgdXBkYXRlIGF2YWlsYWJsZVxuICAgKiBAbWV0aG9kIHNjaGVkdWxlVXBkYXRlXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG5cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiB1dGlsaXRpZXMgdXNlZnVsIHdoZW4gd3JpdGluZyBjdXN0b20gbW9kaWZpZXJzLlxuICAgKiBTdGFydGluZyBmcm9tIHZlcnNpb24gMS43LCB0aGlzIG1ldGhvZCBpcyBhdmFpbGFibGUgb25seSBpZiB5b3VcbiAgICogaW5jbHVkZSBgcG9wcGVyLXV0aWxzLmpzYCBiZWZvcmUgYHBvcHBlci5qc2AuXG4gICAqXG4gICAqICoqREVQUkVDQVRJT04qKjogVGhpcyB3YXkgdG8gYWNjZXNzIFBvcHBlclV0aWxzIGlzIGRlcHJlY2F0ZWRcbiAgICogYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MiEgVXNlIHRoZSBQb3BwZXJVdGlscyBtb2R1bGUgZGlyZWN0bHkgaW5zdGVhZC5cbiAgICogRHVlIHRvIHRoZSBoaWdoIGluc3RhYmlsaXR5IG9mIHRoZSBtZXRob2RzIGNvbnRhaW5lZCBpbiBVdGlscywgd2UgY2FuJ3RcbiAgICogZ3VhcmFudGVlIHRoZW0gdG8gZm9sbG93IHNlbXZlci4gVXNlIHRoZW0gYXQgeW91ciBvd24gcmlzayFcbiAgICogQHN0YXRpY1xuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuOFxuICAgKiBAbWVtYmVyIFV0aWxzXG4gICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICovXG59XG5cbi8qKlxuICogVGhlIGByZWZlcmVuY2VPYmplY3RgIGlzIGFuIG9iamVjdCB0aGF0IHByb3ZpZGVzIGFuIGludGVyZmFjZSBjb21wYXRpYmxlIHdpdGggUG9wcGVyLmpzXG4gKiBhbmQgbGV0cyB5b3UgdXNlIGl0IGFzIHJlcGxhY2VtZW50IG9mIGEgcmVhbCBET00gbm9kZS48YnIgLz5cbiAqIFlvdSBjYW4gdXNlIHRoaXMgbWV0aG9kIHRvIHBvc2l0aW9uIGEgcG9wcGVyIHJlbGF0aXZlbHkgdG8gYSBzZXQgb2YgY29vcmRpbmF0ZXNcbiAqIGluIGNhc2UgeW91IGRvbid0IGhhdmUgYSBET00gbm9kZSB0byB1c2UgYXMgcmVmZXJlbmNlLlxuICpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWZlcmVuY2VPYmplY3QsIHBvcHBlck5vZGUpO1xuICogYGBgXG4gKlxuICogTkI6IFRoaXMgZmVhdHVyZSBpc24ndCBzdXBwb3J0ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTBcbiAqIEBuYW1lIHJlZmVyZW5jZU9iamVjdFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZGF0YS5nZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc2V0IG9mIGNvb3JkaW5hdGVzIGNvbXBhdGlibGUgd2l0aCB0aGUgbmF0aXZlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudFdpZHRoXG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50SGVpZ2h0XG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqL1xuXG5Qb3BwZXIuVXRpbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpLlBvcHBlclV0aWxzO1xuUG9wcGVyLnBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuUG9wcGVyLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHBlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvcHBlci5qcy5tYXBcbiIsIiQoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBZb3VyIGN1c3RvbSBKUyBoZXJlXG5cbn0pO1xuIl19
