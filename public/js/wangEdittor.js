! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.wangEditor = t() : e.wangEditor = t() }(window, (function() { return function(e) { var t = {};

        function n(o) { if (t[o]) return t[o].exports; var r = t[o] = { i: o, l: !1, exports: {} }; return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports } return n.m = e, n.c = t, n.d = function(e, t, o) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var o = Object.create(null); if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                for (var r in e) n.d(o, r, function(t) { return e[t] }.bind(null, r)); return o }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 140) }([function(e, t) { e.exports = function(e) { return e && e.__esModule ? e : { default: e } } }, function(e, t, n) { e.exports = n(141) }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(55)),
            i = o(n(70)),
            a = o(n(71)),
            l = o(n(92)),
            u = o(n(31)),
            c = o(n(118)),
            s = o(n(19)),
            f = o(n(26)),
            d = o(n(3)),
            p = o(n(95)),
            v = o(n(1)),
            h = function() { for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length; var o = Array(e),
                    r = 0; for (t = 0; t < n; t++)
                    for (var i = arguments[t], a = 0, l = i.length; a < l; a++, r++) o[r] = i[a]; return o };
        (0, v.default)(t, "__esModule", { value: !0 }), t.DomElement = void 0; var A = n(7),
            g = [];

        function m(e) { var t = [],
                n = []; return t = (0, p.default)(e) ? e : e.split(";"), (0, d.default)(t).call(t, (function(e) { var t, o = (0, f.default)(t = e.split(":")).call(t, (function(e) { return (0, s.default)(e).call(e) }));
                2 === o.length && n.push(o[0] + ":" + o[1]) })), n } var y = function() {
            function e(t) { if (this.elems = [], this.length = this.elems.length, this.dataSource = new c.default, t) { if (t instanceof e) return t; var n = [],
                        o = t instanceof Node ? t.nodeType : -1; if (this.selector = t, 1 === o || 9 === o) n = [t];
                    else if (function(e) { return !!e && (e instanceof HTMLCollection || e instanceof NodeList) }(t)) n = A.toArray(t);
                    else if (t instanceof Array) n = t;
                    else if ("string" == typeof t) { var r, i = (0, s.default)(r = t.replace("/\n/mg", "")).call(r);
                        n = 0 === (0, u.default)(i).call(i, "<") ? function(e) { var t = document.createElement("div");
                            t.innerHTML = e; var n = t.children; return A.toArray(n) }(i) : function(e) { var t = document.querySelectorAll(e); return A.toArray(t) }(i) } var a = n.length; if (!a) return this; for (var l = 0; l < a; l++) this.elems.push(n[l]);
                    this.length = a } } return (0, v.default)(e.prototype, "id", { get: function() { return this.elems[0].id }, enumerable: !1, configurable: !0 }), e.prototype.forEach = function(e) { for (var t = 0; t < this.length; t++) { var n = this.elems[t]; if (!1 === e.call(n, n, t)) break } return this }, e.prototype.clone = function(e) { var t;
                void 0 === e && (e = !1); var n = []; return (0, d.default)(t = this.elems).call(t, (function(t) { n.push(t.cloneNode(!!e)) })), w(n) }, e.prototype.get = function(e) { void 0 === e && (e = 0); var t = this.length; return e >= t && (e %= t), w(this.elems[e]) }, e.prototype.first = function() { return this.get(0) }, e.prototype.last = function() { var e = this.length; return this.get(e - 1) }, e.prototype.on = function(e, t, n) { var o; return e ? ("function" == typeof t && (n = t, t = ""), (0, d.default)(o = this).call(o, (function(o) { if (t) { var r = function(e) { var o = e.target;
                            o.matches(t) && n.call(o, e) };
                        o.addEventListener(e, r), g.push({ elem: o, selector: t, fn: n, agentFn: r }) } else o.addEventListener(e, n) }))) : this }, e.prototype.off = function(e, t, n) { var o; return e ? ("function" == typeof t && (n = t, t = ""), (0, d.default)(o = this).call(o, (function(o) { if (t) { for (var r = -1, i = 0; i < g.length; i++) { var a = g[i]; if (a.selector === t && a.fn === n && a.elem === o) { r = i; break } } if (-1 !== r) { var u = (0, l.default)(g).call(g, r, 1)[0].agentFn;
                            o.removeEventListener(e, u) } } else o.removeEventListener(e, n) }))) : this }, e.prototype.attr = function(e, t) { var n; return null == t ? this.elems[0].getAttribute(e) || "" : (0, d.default)(n = this).call(n, (function(n) { n.setAttribute(e, t) })) }, e.prototype.removeAttr = function(e) { var t;
                (0, d.default)(t = this).call(t, (function(t) { t.removeAttribute(e) })) }, e.prototype.addClass = function(e) { var t; return e ? (0, d.default)(t = this).call(t, (function(t) { if (t.className) { var n = t.className.split(/\s/);
                        n = (0, a.default)(n).call(n, (function(e) { return !!(0, s.default)(e).call(e) })), (0, u.default)(n).call(n, e) < 0 && n.push(e), t.className = n.join(" ") } else t.className = e })) : this }, e.prototype.removeClass = function(e) { var t; return e ? (0, d.default)(t = this).call(t, (function(t) { if (t.className) { var n = t.className.split(/\s/);
                        n = (0, a.default)(n).call(n, (function(t) { return !(!(t = (0, s.default)(t).call(t)) || t === e) })), t.className = n.join(" ") } })) : this }, e.prototype.hasClass = function(e) { if (!e) return !1; var t = this.elems[0]; if (!t.className) return !1; var n = t.className.split(/\s/); return (0, i.default)(n).call(n, e) }, e.prototype.css = function(e, t) { var n, o; return o = "" == t ? "" : e + ":" + t + ";", (0, d.default)(n = this).call(n, (function(t) { var n, r = (0, s.default)(n = t.getAttribute("style") || "").call(n); if (r) { var i = m(r);
                        i = (0, f.default)(i).call(i, (function(t) { return 0 === (0, u.default)(t).call(t, e) ? o : t })), "" != o && (0, u.default)(i).call(i, o) < 0 && i.push(o), "" == o && (i = m(i)), t.setAttribute("style", i.join("; ")) } else t.setAttribute("style", o) })) }, e.prototype.getBoundingClientRect = function() { return this.elems[0].getBoundingClientRect() }, e.prototype.show = function() { return this.css("display", "block") }, e.prototype.hide = function() { return this.css("display", "none") }, e.prototype.children = function() { var e = this.elems[0]; return e ? w(e.children) : null }, e.prototype.childNodes = function() { var e = this.elems[0]; return e ? w(e.childNodes) : null }, e.prototype.replaceChildAll = function(e) { for (var t = this.getNode(), n = this.elems[0]; n.hasChildNodes();) t.firstChild && n.removeChild(t.firstChild);
                this.append(e) }, e.prototype.append = function(e) { var t; return (0, d.default)(t = this).call(t, (function(t) {
                    (0, d.default)(e).call(e, (function(e) { t.appendChild(e) })) })) }, e.prototype.remove = function() { var e; return (0, d.default)(e = this).call(e, (function(e) { if (e.remove) e.remove();
                    else { var t = e.parentElement;
                        t && t.removeChild(e) } })) }, e.prototype.isContain = function(e) { var t = this.elems[0],
                    n = e.elems[0]; return t.contains(n) }, e.prototype.getSizeData = function() { return this.elems[0].getBoundingClientRect() }, e.prototype.getNodeName = function() { return this.elems[0].nodeName }, e.prototype.getNode = function(e) { return void 0 === e && (e = 0), this.elems[e] }, e.prototype.getClientHeight = function() { return this.elems[0].clientHeight }, e.prototype.find = function(e) { return w(this.elems[0].querySelectorAll(e)) }, e.prototype.text = function(e) { var t; return e ? (0, d.default)(t = this).call(t, (function(t) { t.innerHTML = e })) : this.elems[0].innerHTML.replace(/<[^>]+>/g, (function() { return "" })) }, e.prototype.html = function(e) { var t = this.elems[0]; return e ? (t.innerHTML = e, this) : t.innerHTML }, e.prototype.val = function() { var e, t = this.elems[0]; return (0, s.default)(e = t.value).call(e) }, e.prototype.focus = function() { var e; return (0, d.default)(e = this).call(e, (function(e) { e.focus() })) }, e.prototype.prev = function() { return w(this.elems[0].previousElementSibling) }, e.prototype.next = function() { return w(this.elems[0].nextElementSibling) }, e.prototype.getNextSibling = function() { return w(this.elems[0].nextSibling) }, e.prototype.parent = function() { return w(this.elems[0].parentElement) }, e.prototype.parentUntil = function(e, t) { var n = t || this.elems[0]; if ("BODY" === n.nodeName) return null; var o = n.parentElement; return null === o ? null : o.matches(e) ? w(o) : this.parentUntil(e, o) }, e.prototype.parentUntilEditor = function(e, t, n) { var o = n || this.elems[0]; if (w(o).equal(t.$textContainerElem) || w(o).equal(t.$toolbarElem)) return null; var r = o.parentElement; return null === r ? null : r.matches(e) ? w(r) : this.parentUntilEditor(e, t, r) }, e.prototype.equal = function(t) { return t instanceof e ? this.elems[0] === t.elems[0] : t instanceof HTMLElement && this.elems[0] === t }, e.prototype.insertBefore = function(e) { var t, n = w(e).elems[0]; return n ? (0, d.default)(t = this).call(t, (function(e) { n.parentNode.insertBefore(e, n) })) : this }, e.prototype.insertAfter = function(e) { var t, n = w(e).elems[0],
                    o = n && n.nextSibling; return n ? (0, d.default)(t = this).call(t, (function(e) { var t = n.parentNode;
                    o ? t.insertBefore(e, o) : t.appendChild(e) })) : this }, e.prototype.data = function(e, t) { if (null == t) return this.dataSource.get(e);
                this.dataSource.set(e, t) }, e.prototype.getNodeTop = function(e) { if (this.length < 1) return this; var t = this.parent(); return e.$textElem.equal(this) || e.$textElem.equal(t) ? this : (t.prior = this, t.getNodeTop(e)) }, e.prototype.getOffsetData = function() { var e = this.elems[0]; return { top: e.offsetTop, left: e.offsetLeft, width: e.offsetWidth, height: e.offsetHeight, parent: e.offsetParent } }, e.prototype.scrollTop = function(e) { this.elems[0].scrollTo({ top: e }) }, e }();

        function w() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return new((0, r.default)(y).apply(y, h([void 0], e))) }
        t.DomElement = y, t.default = w }, function(e, t, n) { e.exports = n(187) }, function(e, t, n) { e.exports = n(145) }, function(e, t, n) { e.exports = n(320) }, function(e, t, n) { "use strict"; var o = n(8),
            r = n(73).f,
            i = n(103),
            a = n(9),
            l = n(49),
            u = n(17),
            c = n(16),
            s = function(e) { var t = function(t, n, o) { if (this instanceof e) { switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n) } return new e(t, n, o) } return e.apply(this, arguments) }; return t.prototype = e.prototype, t };
        e.exports = function(e, t) { var n, f, d, p, v, h, A, g, m = e.target,
                y = e.global,
                w = e.stat,
                x = e.proto,
                b = y ? o : w ? o[m] : (o[m] || {}).prototype,
                E = y ? a : a[m] || (a[m] = {}),
                _ = E.prototype; for (d in t) n = !i(y ? d : m + (w ? "." : "#") + d, e.forced) && b && c(b, d), v = E[d], n && (h = e.noTargetGet ? (g = r(b, d)) && g.value : b[d]), p = n && h ? h : t[d], n && typeof v == typeof p || (A = e.bind && n ? l(p, o) : e.wrap && n ? s(p) : x && "function" == typeof p ? l(Function.call, p) : p, (e.sham || p && p.sham || v && v.sham) && u(A, "sham", !0), E[d] = A, x && (c(a, f = m + "Prototype") || u(a, f, {}), a[f][d] = p, e.real && _ && !_[d] && u(_, d, p))) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(26)),
            i = o(n(95)),
            a = o(n(96)),
            l = o(n(127)),
            u = o(n(45)),
            c = o(n(268)),
            s = o(n(1)),
            f = function() { for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length; var o = Array(e),
                    r = 0; for (t = 0; t < n; t++)
                    for (var i = arguments[t], a = 0, l = i.length; a < l; a++, r++) o[r] = i[a]; return o };
        (0, s.default)(t, "__esModule", { value: !0 }), t.hexToRgb = t.getRandomCode = t.toArray = t.deepClone = t.isFunction = t.debounce = t.throttle = t.arrForEach = t.forEach = t.replaceSpecialSymbol = t.replaceHtmlSymbol = t.getRandom = t.UA = void 0; var d = function() {
            function e() { this._ua = navigator.userAgent; var e = this._ua.match(/(Edge?)\/(\d+)/);
                this.isOldEdge = !!(e && "Edge" == e[1] && (0, c.default)(e[2]) < 19), this.isFirefox = !(!/Firefox\/\d+/.test(this._ua) || /Seamonkey\/\d+/.test(this._ua)) } return e.prototype.isIE = function() { return "ActiveXObject" in window }, e.prototype.isWebkit = function() { return /webkit/i.test(this._ua) }, e }();
        t.UA = new d, t.getRandom = function(e) { var t; return void 0 === e && (e = ""), e + (0, u.default)(t = Math.random().toString()).call(t, 2) }, t.replaceHtmlSymbol = function(e) { return e.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>") }, t.replaceSpecialSymbol = function(e) { return e.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"') }, t.forEach = function(e, t) { for (var n in e) { if (Object.prototype.hasOwnProperty.call(e, n))
                    if (!1 === t(n, e[n])) break } }, t.arrForEach = function(e, t) { var n, o, r = e.length || 0; for (n = 0; n < r && (o = e[n], !1 !== t.call(e, o, n)); n++); }, t.throttle = function(e, t) { void 0 === t && (t = 200); var n = !1; return function() { for (var o = this, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                n || (n = !0, (0, l.default)((function() { n = !1, e.call.apply(e, f([o], r)) }), t)) } }, t.debounce = function(e, t) { void 0 === t && (t = 200); var n = 0; return function() { for (var o = this, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                n && window.clearTimeout(n), n = window.setTimeout((function() { n = 0, e.call.apply(e, f([o], r)) }), t) } }, t.isFunction = function(e) { return "function" == typeof e }, t.deepClone = function e(t) { if ("object" !== (0, a.default)(t) || "function" == typeof t || null === t) return t; var n; for (var o in (0, i.default)(t) && (n = []), (0, i.default)(t) || (n = {}), t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = e(t[o])); return n }, t.toArray = function(e) { return (0, u.default)(Array.prototype).call(e) }, t.getRandomCode = function() { var e; return (0, u.default)(e = Math.random().toString(36)).call(e, -5) }, t.hexToRgb = function(e) { var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e); if (null == t) return null; var n = (0, r.default)(t).call(t, (function(e) { return (0, c.default)(e, 16) })); return "rgb(" + n[1] + ", " + n[2] + ", " + n[3] + ")" } }, function(e, t, n) {
        (function(t) { var n = function(e) { return e && e.Math == Math && e };
            e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function() { return this }() || Function("return this")() }).call(this, n(144)) }, function(e, t) { e.exports = {} }, function(e, t, n) { var o = n(8),
            r = n(79),
            i = n(16),
            a = n(63),
            l = n(83),
            u = n(107),
            c = r("wks"),
            s = o.Symbol,
            f = u ? s : s && s.withoutSetter || a;
        e.exports = function(e) { return i(c, e) || (l && i(s, e) ? c[e] = s[e] : c[e] = f("Symbol." + e)), c[e] } }, function(e, t) { e.exports = function(e) { try { return !!e() } catch (e) { return !0 } } }, function(e, t, n) { var o = n(9),
            r = n(16),
            i = n(97),
            a = n(18).f;
        e.exports = function(e) { var t = o.Symbol || (o.Symbol = {});
            r(t, e) || a(t, e, { value: i.f(e) }) } }, function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t, n) { var o = n(11);
        e.exports = !o((function() { return 7 != Object.defineProperty({}, 1, { get: function() { return 7 } })[1] })) }, function(e, t, n) { var o = n(9);
        e.exports = function(e) { return o[e + "Prototype"] } }, function(e, t) { var n = {}.hasOwnProperty;
        e.exports = function(e, t) { return n.call(e, t) } }, function(e, t, n) { var o = n(14),
            r = n(18),
            i = n(37);
        e.exports = o ? function(e, t, n) { return r.f(e, t, i(1, n)) } : function(e, t, n) { return e[t] = n, e } }, function(e, t, n) { var o = n(14),
            r = n(102),
            i = n(25),
            a = n(59),
            l = Object.defineProperty;
        t.f = o ? l : function(e, t, n) { if (i(e), t = a(t, !0), i(n), r) try { return l(e, t, n) } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported"); return "value" in n && (e[t] = n.value), e } }, function(e, t, n) { e.exports = n(222) }, function(e, t, n) { "use strict"; var o, r = function() { return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o },
            i = function() { var e = {}; return function(t) { if (void 0 === e[t]) { var n = document.querySelector(t); if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (e) { n = null }
                        e[t] = n } return e[t] } }(),
            a = [];

        function l(e) { for (var t = -1, n = 0; n < a.length; n++)
                if (a[n].identifier === e) { t = n; break }
            return t }

        function u(e, t) { for (var n = {}, o = [], r = 0; r < e.length; r++) { var i = e[r],
                    u = t.base ? i[0] + t.base : i[0],
                    c = n[u] || 0,
                    s = "".concat(u, " ").concat(c);
                n[u] = c + 1; var f = l(s),
                    d = { css: i[1], media: i[2], sourceMap: i[3] }; - 1 !== f ? (a[f].references++, a[f].updater(d)) : a.push({ identifier: s, updater: A(d, t), references: 1 }), o.push(s) } return o }

        function c(e) { var t = document.createElement("style"),
                o = e.attributes || {}; if (void 0 === o.nonce) { var r = n.nc;
                r && (o.nonce = r) } if (Object.keys(o).forEach((function(e) { t.setAttribute(e, o[e]) })), "function" == typeof e.insert) e.insert(t);
            else { var a = i(e.insert || "head"); if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                a.appendChild(t) } return t } var s, f = (s = [], function(e, t) { return s[e] = t, s.filter(Boolean).join("\n") });

        function d(e, t, n, o) { var r = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css; if (e.styleSheet) e.styleSheet.cssText = f(t, r);
            else { var i = document.createTextNode(r),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i) } }

        function p(e, t, n) { var o = n.css,
                r = n.media,
                i = n.sourceMap; if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), i && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = o;
            else { for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(o)) } } var v = null,
            h = 0;

        function A(e, t) { var n, o, r; if (t.singleton) { var i = h++;
                n = v || (v = c(t)), o = d.bind(null, n, i, !1), r = d.bind(null, n, i, !0) } else n = c(t), o = p.bind(null, n, t), r = function() {! function(e) { if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e) }(n) }; return o(e),
                function(t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        o(e = t) } else r() } }
        e.exports = function(e, t) {
            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r()); var n = u(e = e || [], t); return function(e) { if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) { for (var o = 0; o < n.length; o++) { var r = l(n[o]);
                        a[r].references-- } for (var i = u(e, t), c = 0; c < n.length; c++) { var s = l(n[c]);
                        0 === a[s].references && (a[s].updater(), a.splice(s, 1)) }
                    n = i } } } }, function(e, t, n) { "use strict";
        e.exports = function(e) { var t = []; return t.toString = function() { return this.map((function(t) { var n = function(e, t) { var n = e[1] || "",
                            o = e[3]; if (!o) return n; if (t && "function" == typeof btoa) { var r = (a = o, l = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l), "/*# ".concat(u, " */")),
                                i = o.sources.map((function(e) { return "/*# sourceURL=".concat(o.sourceRoot || "").concat(e, " */") })); return [n].concat(i).concat([r]).join("\n") } var a, l, u; return [n].join("\n") }(t, e); return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n })).join("") }, t.i = function(e, n, o) { "string" == typeof e && (e = [
                    [null, e, ""]
                ]); var r = {}; if (o)
                    for (var i = 0; i < this.length; i++) { var a = this[i][0];
                        null != a && (r[a] = !0) }
                for (var l = 0; l < e.length; l++) { var u = [].concat(e[l]);
                    o && r[u[0]] || (n && (u[2] ? u[2] = "".concat(n, " and ").concat(u[2]) : u[2] = n), t.push(u)) } }, t } }, function(e, t, n) { var o = n(14),
            r = n(11),
            i = n(16),
            a = Object.defineProperty,
            l = {},
            u = function(e) { throw e };
        e.exports = function(e, t) { if (i(l, e)) return l[e];
            t || (t = {}); var n = [][e],
                c = !!i(t, "ACCESSORS") && t.ACCESSORS,
                s = i(t, 0) ? t[0] : u,
                f = i(t, 1) ? t[1] : void 0; return l[e] = !!n && !r((function() { if (c && !o) return !0; var e = { length: -1 };
                c ? a(e, 1, { enumerable: !0, get: u }) : e[1] = 1, n.call(e, s, f) })) } }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = function(e) {
            function t(t, n) { return e.call(this, t, n) || this } return u(t, e), t }(c(n(98)).default);
        t.default = s }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(3)),
            a = r(n(1)),
            l = r(n(4)),
            u = r(n(5)),
            c = (o = function(e, t) { return (o = u.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, l.default)(t) : (n.prototype = t.prototype, new n) }),
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }); var f = s(n(2)),
            d = s(n(98)),
            p = s(n(133)),
            v = function(e) {
                function t(t, n, o) { var r = e.call(this, t, n) || this;
                    o.title = n.i18next.t("menus.dropListMenu." + o.title); var a, l = "zh-CN" === n.config.lang ? "" : "w-e-drop-list-tl"; "" !== l && "list" === o.type && (0, i.default)(a = o.list).call(a, (function(e) { var t = e.$elem,
                            n = f.default(t.children()); if (n.length > 0) { var o = null == n ? void 0 : n.getNodeName();
                            o && "I" === o && t.addClass(l) } })); var u = new p.default(r, o); return r.dropList = u, t.on("mouseenter", (function() { var e;
                        null != n.selection.getRange() && (t.css("z-index", n.zIndex.get("menu")), (0, i.default)(e = n.txt.eventHooks.dropListMenuHoverEvents).call(e, (function(e) { return e() })), u.showTimeoutId = window.setTimeout((function() { u.show() }), 200)) })).on("mouseleave", (function() { t.css("z-index", "auto"), u.hideTimeoutId = window.setTimeout((function() { u.hide() })) })), r } return c(t, e), t }(d.default);
        t.default = v }, function(e, t, n) { var o = n(13);
        e.exports = function(e) { if (!o(e)) throw TypeError(String(e) + " is not an object"); return e } }, function(e, t, n) { e.exports = n(227) }, function(e, t, n) { e.exports = n(291) }, function(e, t, n) { var o = n(74),
            r = n(48);
        e.exports = function(e) { return o(r(e)) } }, function(e, t, n) { var o = n(9),
            r = n(8),
            i = function(e) { return "function" == typeof e ? e : void 0 };
        e.exports = function(e, t) { return arguments.length < 2 ? i(o[e]) || i(r[e]) : o[e] && o[e][t] || r[e] && r[e][t] } }, function(e, t, n) { var o = n(49),
            r = n(74),
            i = n(40),
            a = n(38),
            l = n(91),
            u = [].push,
            c = function(e) { var t = 1 == e,
                    n = 2 == e,
                    c = 3 == e,
                    s = 4 == e,
                    f = 6 == e,
                    d = 7 == e,
                    p = 5 == e || f; return function(v, h, A, g) { for (var m, y, w = i(v), x = r(w), b = o(h, A, 3), E = a(x.length), _ = 0, C = g || l, S = t ? C(v, E) : n || d ? C(v, 0) : void 0; E > _; _++)
                        if ((p || _ in x) && (y = b(m = x[_], _, w), e))
                            if (t) S[_] = y;
                            else if (y) switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return m;
                        case 6:
                            return _;
                        case 2:
                            u.call(S, m) } else switch (e) {
                        case 4:
                            return !1;
                        case 7:
                            u.call(S, m) }
                    return f ? -1 : c || s ? s : S } };
        e.exports = { forEach: c(0), map: c(1), filter: c(2), some: c(3), every: c(4), find: c(5), findIndex: c(6), filterOut: c(7) } }, function(e, t, n) { e.exports = n(214) }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.urlRegex = t.EMPTY_FN = void 0, t.EMPTY_FN = function() {}, t.urlRegex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/ }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(130)),
            i = o(n(27)),
            a = o(n(3)),
            l = o(n(1)),
            u = o(n(323)),
            c = o(n(325)),
            s = o(n(106)),
            f = function(e, t, n, o) { return new(n || (n = s.default))((function(r, i) {
                    function a(e) { try { u(o.next(e)) } catch (e) { i(e) } }

                    function l(e) { try { u(o.throw(e)) } catch (e) { i(e) } }

                    function u(e) { var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(a, l) }
                    u((o = o.apply(e, t || [])).next()) })) },
            d = function(e, t) { var n, o, r, i, a = { label: 0, sent: function() { if (1 & r[0]) throw r[1]; return r[1] }, trys: [], ops: [] }; return i = { next: l(0), throw: l(1), return: l(2) }, "function" == typeof c.default && (i[u.default] = function() { return this }), i;

                function l(i) { return function(l) { return function(i) { if (n) throw new TypeError("Generator is already executing."); for (; a;) try { if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r; switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        r = i; break;
                                    case 4:
                                        return a.label++, { value: i[1], done: !1 };
                                    case 5:
                                        a.label++, o = i[1], i = [0]; continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop(); continue;
                                    default:
                                        if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) { a = 0; continue } if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) { a.label = i[1]; break } if (6 === i[0] && a.label < r[1]) { a.label = r[1], r = i; break } if (r && a.label < r[2]) { a.label = r[2], a.ops.push(i); break }
                                        r[2] && a.ops.pop(), a.trys.pop(); continue }
                                i = t.call(e, a) } catch (e) { i = [6, e], o = 0 } finally { n = r = 0 }
                            if (5 & i[0]) throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 } }([i, l]) } } },
            p = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, l.default)(t, "__esModule", { value: !0 }); var v = p(n(2)),
            h = n(32),
            A = function() {
                function e(t, n) { this.menu = t, this.conf = n, this.$container = v.default('<div class="w-e-panel-container"></div>'); var o = t.editor;
                    o.txt.eventHooks.clickEvents.push(e.hideCurAllPanels), o.txt.eventHooks.toolbarClickEvents.push(e.hideCurAllPanels), o.txt.eventHooks.dropListMenuHoverEvents.push(e.hideCurAllPanels) } return e.prototype.create = function() { var t = this,
                        n = this.menu; if (!e.createdMenus.has(n)) { var o = this.conf,
                            r = this.$container,
                            l = o.width || 300,
                            u = n.editor.$toolbarElem.getBoundingClientRect(),
                            c = n.$elem.getBoundingClientRect(),
                            s = u.height + u.top - c.top,
                            p = (u.width - l) / 2 + u.left - c.left;
                        r.css("width", l + "px").css("margin-top", s + "px").css("margin-left", p + "px").css("z-index", n.editor.zIndex.get("panel")); var A = v.default('<i class="w-e-icon-close w-e-panel-close"></i>');
                        r.append(A), A.on("click", (function() { t.remove() })); var g = v.default('<ul class="w-e-panel-tab-title"></ul>'),
                            m = v.default('<div class="w-e-panel-tab-content"></div>');
                        r.append(g).append(m); var y = o.height;
                        y && m.css("height", y + "px").css("overflow-y", "auto"); var w = o.tabs || [],
                            x = [],
                            b = [];
                        (0, a.default)(w).call(w, (function(e, t) { if (e) { var n = e.title || "",
                                    o = e.tpl || "",
                                    r = v.default('<li class="w-e-item">' + n + "</li>");
                                g.append(r); var i = v.default(o);
                                m.append(i), x.push(r), b.push(i), 0 === t ? (r.data("active", !0), r.addClass("w-e-active")) : i.hide(), r.on("click", (function() { r.data("active") || ((0, a.default)(x).call(x, (function(e) { e.data("active", !1), e.removeClass("w-e-active") })), (0, a.default)(b).call(b, (function(e) { e.hide() })), r.data("active", !0), r.addClass("w-e-active"), i.show()) })) } })), r.on("click", (function(e) { e.stopPropagation() })), n.$elem.append(r), (0, a.default)(w).call(w, (function(e, n) { if (e) { var o = e.events || [];
                                (0, a.default)(o).call(o, (function(e) { var o = e.selector,
                                        r = e.type,
                                        a = e.fn || h.EMPTY_FN,
                                        l = b[n];
                                    (0, i.default)(l).call(l, o).on(r, (function(e) { return f(t, void 0, void 0, (function() { return d(this, (function(t) { switch (t.label) {
                                                    case 0:
                                                        return e.stopPropagation(), [4, a(e)];
                                                    case 1:
                                                        return t.sent() && this.remove(), [2] } })) })) })) })) } })); var E = (0, i.default)(r).call(r, "input[type=text],textarea");
                        E.length && E.get(0).focus(), e.hideCurAllPanels(), n.setPanel(this), e.createdMenus.add(n) } }, e.prototype.remove = function() { var t = this.menu,
                        n = this.$container;
                    n && n.remove(), e.createdMenus.delete(t) }, e.hideCurAllPanels = function() { var t;
                    0 !== e.createdMenus.size && (0, a.default)(t = e.createdMenus).call(t, (function(e) { var t = e.panel;
                        t && t.remove() })) }, e.createdMenus = new r.default, e }();
        t.default = A }, function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(String(e) + " is not a function"); return e } }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = function(e) {
            function t(t, n) { return e.call(this, t, n) || this } return u(t, e), t.prototype.setPanel = function(e) { this.panel = e }, t }(c(n(98)).default);
        t.default = s }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(55)),
            i = o(n(3)),
            a = o(n(1)),
            l = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }); var u = l(n(2)),
            c = function() {
                function e(e, t, n) { this.editor = e, this.$targetElem = t, this.conf = n, this._show = !1, this._isInsertTextContainer = !1; var o = u.default("<div></div>");
                    o.addClass("w-e-tooltip"), this.$container = o } return e.prototype.getPositionData = function() { var e = this.$container,
                        t = 0,
                        n = 0,
                        o = document.documentElement.scrollTop,
                        r = this.$targetElem.getBoundingClientRect(),
                        i = this.editor.$textElem.getBoundingClientRect(),
                        a = this.$targetElem.getOffsetData(),
                        l = u.default(a.parent),
                        c = this.editor.$textElem.elems[0].scrollTop; if (this._isInsertTextContainer = l.equal(this.editor.$textContainerElem), this._isInsertTextContainer) { var s = l.getClientHeight(),
                            f = a.top,
                            d = a.left,
                            p = a.height,
                            v = f - c;
                        v > 25 ? (t = v - 20 - 15, e.addClass("w-e-tooltip-up")) : v + p + 20 < s ? (t = v + p + 10, e.addClass("w-e-tooltip-down")) : (t = (v > 0 ? v : 0) + 20 + 10, e.addClass("w-e-tooltip-down")), n = d < 0 ? 0 : d } else r.top < 20 || r.top - i.top < 20 ? (t = r.bottom + o + 5, e.addClass("w-e-tooltip-down")) : (t = r.top + o - 20 - 15, e.addClass("w-e-tooltip-up")), n = r.left < 0 ? 0 : r.left; return { top: t, left: n } }, e.prototype.appendMenus = function() { var e = this,
                        t = this.conf,
                        n = this.editor,
                        o = this.$targetElem,
                        r = this.$container;
                    (0, i.default)(t).call(t, (function(t, i) { var a = t.$elem,
                            l = u.default("<div></div>");
                        l.addClass("w-e-tooltip-item-wrapper "), l.append(a), r.append(l), a.on("click", (function(r) { r.preventDefault(), t.onClick(n, o) && e.remove() })) })) }, e.prototype.create = function() { var e, t, n = this.editor,
                        o = this.$container;
                    this.appendMenus(); var i = this.getPositionData(),
                        a = i.top,
                        l = i.left;
                    o.css("top", a + "px"), o.css("left", l + "px"), o.css("z-index", n.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(o) : u.default("body").append(o), this._show = !0, n.beforeDestroy((0, r.default)(e = this.remove).call(e, this)), n.txt.eventHooks.onBlurEvents.push((0, r.default)(t = this.remove).call(t, this)) }, e.prototype.remove = function() { this.$container.remove(), this._show = !1 }, (0, a.default)(e.prototype, "isShow", { get: function() { return this._show }, enumerable: !1, configurable: !0 }), e }();
        t.default = c }, function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t, n) { var o = n(61),
            r = Math.min;
        e.exports = function(e) { return e > 0 ? r(o(e), 9007199254740991) : 0 } }, function(e, t) { e.exports = !0 }, function(e, t, n) { var o = n(48);
        e.exports = function(e) { return Object(o(e)) } }, function(e, t, n) { var o = n(25),
            r = n(170),
            i = n(38),
            a = n(49),
            l = n(171),
            u = n(172),
            c = function(e, t) { this.stopped = e, this.result = t };
        e.exports = function(e, t, n) { var s, f, d, p, v, h, A, g = n && n.that,
                m = !(!n || !n.AS_ENTRIES),
                y = !(!n || !n.IS_ITERATOR),
                w = !(!n || !n.INTERRUPTED),
                x = a(t, g, 1 + m + w),
                b = function(e) { return s && u(s), new c(!0, e) },
                E = function(e) { return m ? (o(e), w ? x(e[0], e[1], b) : x(e[0], e[1])) : w ? x(e, b) : x(e) }; if (y) s = e;
            else { if ("function" != typeof(f = l(e))) throw TypeError("Target is not iterable"); if (r(f)) { for (d = 0, p = i(e.length); p > d; d++)
                        if ((v = E(e[d])) && v instanceof c) return v;
                    return new c(!1) }
                s = f.call(e) } for (h = s.next; !(A = h.call(s)).done;) { try { v = E(A.value) } catch (e) { throw u(s), e } if ("object" == typeof v && v && v instanceof c) return v } return new c(!1) } }, function(e, t) { e.exports = {} }, function(e, t, n) { var o = n(84),
            r = n(18).f,
            i = n(17),
            a = n(16),
            l = n(174),
            u = n(10)("toStringTag");
        e.exports = function(e, t, n, c) { if (e) { var s = n ? e : e.prototype;
                a(s, u) || r(s, u, { configurable: !0, value: t }), c && !o && i(s, "toString", l) } } }, function(e, t, n) { var o, r, i, a = n(179),
            l = n(8),
            u = n(13),
            c = n(17),
            s = n(16),
            f = n(80),
            d = n(62),
            p = n(51),
            v = l.WeakMap; if (a) { var h = f.state || (f.state = new v),
                A = h.get,
                g = h.has,
                m = h.set;
            o = function(e, t) { return t.facade = e, m.call(h, e, t), t }, r = function(e) { return A.call(h, e) || {} }, i = function(e) { return g.call(h, e) } } else { var y = d("state");
            p[y] = !0, o = function(e, t) { return t.facade = e, c(e, y, t), t }, r = function(e) { return s(e, y) ? e[y] : {} }, i = function(e) { return s(e, y) } }
        e.exports = { set: o, get: r, has: i, enforce: function(e) { return i(e) ? r(e) : o(e, {}) }, getterFor: function(e) { return function(t) { var n; if (!u(t) || (n = r(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required"); return n } } } }, function(e, t, n) { e.exports = n(264) }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }), t.createElementFragment = t.createDocumentFragment = t.createElement = t.insertBefore = t.getEndPoint = t.getStartPoint = t.updateRange = t.filterSelectionNodes = void 0; var a = n(137),
            l = i(n(2));

        function u(e) { return document.createElement(e) }
        t.filterSelectionNodes = function(e) { var t = []; return (0, r.default)(e).call(e, (function(e) { var n = e.getNodeName(); if (n !== a.ListType.OrderedList && n !== a.ListType.UnorderedList) t.push(e);
                else if (e.prior) t.push(e.prior);
                else { var o = e.children();
                    null == o || (0, r.default)(o).call(o, (function(e) { t.push(l.default(e)) })) } })), t }, t.updateRange = function(e, t, n) { var o = e.selection,
                r = document.createRange();
            t.length > 1 ? (r.setStart(t.elems[0], 0), r.setEnd(t.elems[t.length - 1], t.elems[t.length - 1].childNodes.length)) : r.selectNodeContents(t.elems[0]), n && r.collapse(!1), o.saveRange(r), o.restoreSelection() }, t.getStartPoint = function(e) { var t; return e.prior ? e.prior : l.default(null === (t = e.children()) || void 0 === t ? void 0 : t.elems[0]) }, t.getEndPoint = function(e) { var t; return e.prior ? e.prior : l.default(null === (t = e.children()) || void 0 === t ? void 0 : t.last().elems[0]) }, t.insertBefore = function(e, t, n) { void 0 === n && (n = null), e.parent().elems[0].insertBefore(t, n) }, t.createElement = u, t.createDocumentFragment = function() { return document.createDocumentFragment() }, t.createElementFragment = function(e, t, n) { return void 0 === n && (n = "li"), (0, r.default)(e).call(e, (function(e) { var o = u(n);
                o.innerHTML = e.html(), t.append(o), e.remove() })), t } }, function(e, t) { var n = {}.toString;
        e.exports = function(e) { return n.call(e).slice(8, -1) } }, function(e, t) { e.exports = function(e) { if (null == e) throw TypeError("Can't call method on " + e); return e } }, function(e, t, n) { var o = n(34);
        e.exports = function(e, t, n) { if (o(e), void 0 === t) return e; switch (n) {
                case 0:
                    return function() { return e.call(t) };
                case 1:
                    return function(n) { return e.call(t, n) };
                case 2:
                    return function(n, o) { return e.call(t, n, o) };
                case 3:
                    return function(n, o, r) { return e.call(t, n, o, r) } } return function() { return e.apply(t, arguments) } } }, function(e, t, n) { var o, r = n(25),
            i = n(148),
            a = n(78),
            l = n(51),
            u = n(105),
            c = n(75),
            s = n(62),
            f = s("IE_PROTO"),
            d = function() {},
            p = function(e) { return "<script>" + e + "<\/script>" },
            v = function() { try { o = document.domain && new ActiveXObject("htmlfile") } catch (e) {} var e, t;
                v = o ? function(e) { e.write(p("")), e.close(); var t = e.parentWindow.Object; return e = null, t }(o) : ((t = c("iframe")).style.display = "none", u.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F); for (var n = a.length; n--;) delete v.prototype[a[n]]; return v() };
        l[f] = !0, e.exports = Object.create || function(e, t) { var n; return null !== e ? (d.prototype = r(e), n = new d, d.prototype = null, n[f] = e) : n = v(), void 0 === t ? n : i(n, t) } }, function(e, t) { e.exports = {} }, function(e, t, n) { var o = n(17);
        e.exports = function(e, t, n, r) { r && r.enumerable ? e[t] = n : o(e, t, n) } }, function(e, t, n) { n(185); var o = n(186),
            r = n(8),
            i = n(64),
            a = n(17),
            l = n(42),
            u = n(10)("toStringTag"); for (var c in o) { var s = r[c],
                f = s && s.prototype;
            f && i(f) !== u && a(f, u, c), l[c] = l.Array } }, function(e, t, n) { var o = n(47);
        e.exports = Array.isArray || function(e) { return "Array" == o(e) } }, function(e, t, n) { e.exports = n(192) }, function(e, t, n) { var o = n(11),
            r = n(10),
            i = n(88),
            a = r("species");
        e.exports = function(e) { return i >= 51 || !o((function() { var t = []; return (t.constructor = {})[a] = function() { return { foo: 1 } }, 1 !== t[e](Boolean).foo })) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.ListHandle = void 0; var r = o(n(380)),
            i = function(e) { this.options = e, this.selectionRangeElem = new r.default };
        t.ListHandle = i }, function(e, t, n) { "use strict"; var o = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            i = r && !o.call({ 1: 2 }, 1);
        t.f = i ? function(e) { var t = r(this, e); return !!t && t.enumerable } : o }, function(e, t, n) { var o = n(13);
        e.exports = function(e, t) { if (!o(e)) return e; var n, r; if (t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r; if ("function" == typeof(n = e.valueOf) && !o(r = n.call(e))) return r; if (!t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r; throw TypeError("Can't convert object to primitive value") } }, function(e, t, n) { var o = n(104),
            r = n(78);
        e.exports = Object.keys || function(e) { return o(e, r) } }, function(e, t) { var n = Math.ceil,
            o = Math.floor;
        e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e) } }, function(e, t, n) { var o = n(79),
            r = n(63),
            i = o("keys");
        e.exports = function(e) { return i[e] || (i[e] = r(e)) } }, function(e, t) { var n = 0,
            o = Math.random();
        e.exports = function(e) { return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + o).toString(36) } }, function(e, t, n) { var o = n(84),
            r = n(47),
            i = n(10)("toStringTag"),
            a = "Arguments" == r(function() { return arguments }());
        e.exports = o ? r : function(e) { var t, n, o; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) { try { return e[t] } catch (e) {} }(t = Object(e), i)) ? n : a ? r(t) : "Object" == (o = r(t)) && "function" == typeof t.callee ? "Arguments" : o } }, function(e, t) {}, function(e, t, n) { var o = n(29);
        e.exports = o("navigator", "userAgent") || "" }, function(e, t, n) { "use strict"; var o = n(34),
            r = function(e) { var t, n;
                this.promise = new e((function(e, o) { if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                    t = e, n = o })), this.resolve = o(t), this.reject = o(n) };
        e.exports.f = function(e) { return new r(e) } }, function(e, t, n) { "use strict"; var o = n(183).charAt,
            r = n(44),
            i = n(89),
            a = r.set,
            l = r.getterFor("String Iterator");
        i(String, "String", (function(e) { a(this, { type: "String Iterator", string: String(e), index: 0 }) }), (function() { var e, t = l(this),
                n = t.string,
                r = t.index; return r >= n.length ? { value: void 0, done: !0 } : (e = o(n, r), t.index += e.length, { value: e, done: !1 }) })) }, function(e, t, n) { "use strict"; var o = n(11);
        e.exports = function(e, t) { var n = [][e]; return !!n && o((function() { n.call(null, t || function() { throw 1 }, 1) })) } }, function(e, t, n) { e.exports = n(197) }, function(e, t, n) { e.exports = n(206) }, function(e, t) { e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff" }, function(e, t, n) { var o = n(14),
            r = n(58),
            i = n(37),
            a = n(28),
            l = n(59),
            u = n(16),
            c = n(102),
            s = Object.getOwnPropertyDescriptor;
        t.f = o ? s : function(e, t) { if (e = a(e), t = l(t, !0), c) try { return s(e, t) } catch (e) {}
            if (u(e, t)) return i(!r.f.call(e, t), e[t]) } }, function(e, t, n) { var o = n(11),
            r = n(47),
            i = "".split;
        e.exports = o((function() { return !Object("z").propertyIsEnumerable(0) })) ? function(e) { return "String" == r(e) ? i.call(e, "") : Object(e) } : Object }, function(e, t, n) { var o = n(8),
            r = n(13),
            i = o.document,
            a = r(i) && r(i.createElement);
        e.exports = function(e) { return a ? i.createElement(e) : {} } }, function(e, t, n) { var o = n(28),
            r = n(38),
            i = n(77),
            a = function(e) { return function(t, n, a) { var l, u = o(t),
                        c = r(u.length),
                        s = i(a, c); if (e && n != n) { for (; c > s;)
                            if ((l = u[s++]) != l) return !0 } else
                        for (; c > s; s++)
                            if ((e || s in u) && u[s] === n) return e || s || 0; return !e && -1 } };
        e.exports = { includes: a(!0), indexOf: a(!1) } }, function(e, t, n) { var o = n(61),
            r = Math.max,
            i = Math.min;
        e.exports = function(e, t) { var n = o(e); return n < 0 ? r(n + t, 0) : i(n, t) } }, function(e, t) { e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, function(e, t, n) { var o = n(39),
            r = n(80);
        (e.exports = function(e, t) { return r[e] || (r[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: "3.8.3", mode: o ? "pure" : "global", copyright: "© 2021 Denis Pushkarev (zloirock.ru)" }) }, function(e, t, n) { var o = n(8),
            r = n(149),
            i = o["__core-js_shared__"] || r("__core-js_shared__", {});
        e.exports = i }, function(e, t, n) { var o = n(16),
            r = n(40),
            i = n(62),
            a = n(168),
            l = i("IE_PROTO"),
            u = Object.prototype;
        e.exports = a ? Object.getPrototypeOf : function(e) { return e = r(e), o(e, l) ? e[l] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null } }, function(e, t, n) { var o = n(25),
            r = n(169);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() { var e, t = !1,
                n = {}; try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array } catch (e) {} return function(n, i) { return o(n), r(i), t ? e.call(n, i) : n.__proto__ = i, n } }() : void 0) }, function(e, t, n) { var o = n(11);
        e.exports = !!Object.getOwnPropertySymbols && !o((function() { return !String(Symbol()) })) }, function(e, t, n) { var o = {};
        o[n(10)("toStringTag")] = "z", e.exports = "[object z]" === String(o) }, function(e, t) { e.exports = function(e, t, n) { if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation"); return e } }, function(e, t, n) { var o = n(47),
            r = n(8);
        e.exports = "process" == o(r.process) }, function(e, t) { e.exports = function(e) { try { return { error: !1, value: e() } } catch (e) { return { error: !0, value: e } } } }, function(e, t, n) { var o, r, i = n(8),
            a = n(66),
            l = i.process,
            u = l && l.versions,
            c = u && u.v8;
        c ? r = (o = c.split("."))[0] + o[1] : a && (!(o = a.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = a.match(/Chrome\/(\d+)/)) && (r = o[1]), e.exports = r && +r }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(184),
            i = n(81),
            a = n(82),
            l = n(43),
            u = n(17),
            c = n(52),
            s = n(10),
            f = n(39),
            d = n(42),
            p = n(116),
            v = p.IteratorPrototype,
            h = p.BUGGY_SAFARI_ITERATORS,
            A = s("iterator"),
            g = function() { return this };
        e.exports = function(e, t, n, s, p, m, y) { r(n, t, s); var w, x, b, E = function(e) { if (e === p && N) return N; if (!h && e in S) return S[e]; switch (e) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function() { return new n(this, e) } } return function() { return new n(this) } },
                _ = t + " Iterator",
                C = !1,
                S = e.prototype,
                M = S[A] || S["@@iterator"] || p && S[p],
                N = !h && M || E(p),
                k = "Array" == t && S.entries || M; if (k && (w = i(k.call(new e)), v !== Object.prototype && w.next && (f || i(w) === v || (a ? a(w, v) : "function" != typeof w[A] && u(w, A, g)), l(w, _, !0, !0), f && (d[_] = g))), "values" == p && M && "values" !== M.name && (C = !0, N = function() { return M.call(this) }), f && !y || S[A] === N || u(S, A, N), d[t] = N, p)
                if (x = { values: E("values"), keys: m ? N : E("keys"), entries: E("entries") }, y)
                    for (b in x)(h || C || !(b in S)) && c(S, b, x[b]);
                else o({ target: t, proto: !0, forced: h || C }, x);
            return x } }, function(e, t) { e.exports = function() {} }, function(e, t, n) { var o = n(13),
            r = n(54),
            i = n(10)("species");
        e.exports = function(e, t) { var n; return r(e) && ("function" != typeof(n = e.constructor) || n !== Array && !r(n.prototype) ? o(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t) } }, function(e, t, n) { e.exports = n(210) }, function(e, t, n) { "use strict"; var o = n(59),
            r = n(18),
            i = n(37);
        e.exports = function(e, t, n) { var a = o(t);
            a in e ? r.f(e, a, i(0, n)) : e[a] = n } }, function(e, t, n) { var o = n(48),
            r = "[" + n(72) + "]",
            i = RegExp("^" + r + r + "*"),
            a = RegExp(r + r + "*$"),
            l = function(e) { return function(t) { var n = String(o(t)); return 1 & e && (n = n.replace(i, "")), 2 & e && (n = n.replace(a, "")), n } };
        e.exports = { start: l(1), end: l(2), trim: l(3) } }, function(e, t, n) { e.exports = n(231) }, function(e, t, n) { var o = n(234),
            r = n(236);

        function i(t) { return e.exports = i = "function" == typeof r && "symbol" == typeof o ? function(e) { return typeof e } : function(e) { return e && "function" == typeof r && e.constructor === r && e !== r.prototype ? "symbol" : typeof e }, i(t) }
        e.exports = i }, function(e, t, n) { var o = n(10);
        t.f = o }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = o(n(1)),
            a = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var l = a(n(33)),
            u = function() {
                function e(e, t) { var n = this;
                    this.$elem = e, this.editor = t, this._active = !1, e.on("click", (function(e) { var o;
                        l.default.hideCurAllPanels(), (0, r.default)(o = t.txt.eventHooks.menuClickEvents).call(o, (function(e) { return e() })), e.stopPropagation(), null != t.selection.getRange() && n.clickHandler(e) })) } return e.prototype.clickHandler = function(e) {}, e.prototype.active = function() { this._active = !0, this.$elem.addClass("w-e-active") }, e.prototype.unActive = function() { this._active = !1, this.$elem.removeClass("w-e-active") }, (0, i.default)(e.prototype, "isActive", { get: function() { return this._active }, enumerable: !1, configurable: !0 }), e }();
        t.default = u }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(31)),
            i = o(n(3)),
            a = o(n(55)),
            l = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var u = n(7),
            c = l(n(135)),
            s = l(n(136)),
            f = function() {
                function e(e) { this.editor = e } return e.prototype.insertImg = function(e, t, n) { var o = this.editor,
                        r = o.config,
                        i = function(e, t) { return void 0 === t && (t = "validate."), o.i18next.t(t + e) },
                        a = t ? 'alt="' + t + '" ' : "",
                        l = n ? 'data-href="' + encodeURIComponent(n) + '" ' : "";
                    o.cmd.do("insertHTML", '<img src="' + e + '" ' + a + l + 'style="max-width:100%;"/>'), r.linkImgCallback(e, t, n); var u = document.createElement("img");
                    u.onload = function() { u = null }, u.onerror = function() { r.customAlert(i("插入图片错误"), "error", "wangEditor: " + i("插入图片错误") + "，" + i("图片链接") + ' "' + e + '"，' + i("下载链接失败")), u = null }, u.onabort = function() { return u = null }, u.src = e }, e.prototype.uploadImg = function(e) { var t = this; if (e.length) { var n = this.editor,
                            o = n.config,
                            l = function(e) { return n.i18next.t("validate." + e) },
                            f = o.uploadImgServer,
                            d = o.uploadImgShowBase64,
                            p = o.uploadImgMaxSize,
                            v = p / 1024 / 1024,
                            h = o.uploadImgMaxLength,
                            A = o.uploadFileName,
                            g = o.uploadImgParams,
                            m = o.uploadImgParamsWithUrl,
                            y = o.uploadImgHeaders,
                            w = o.uploadImgHooks,
                            x = o.uploadImgTimeout,
                            b = o.withCredentials,
                            E = o.customUploadImg; if (E || f || d) { var _ = [],
                                C = []; if (u.arrForEach(e, (function(e) { var t = e.name,
                                        n = e.size;
                                    t && n && (!1 !== /\.(jpg|jpeg|png|bmp|gif|webp)$/i.test(t) ? p < n ? C.push("【" + t + "】" + l("大于") + " " + v + "M") : _.push(e) : C.push("【" + t + "】" + l("不是图片"))) })), C.length) o.customAlert(l("图片验证未通过") + ": \n" + C.join("\n"), "warning");
                            else if (0 !== _.length)
                                if (_.length > h) o.customAlert(l("一次最多上传") + h + l("张图片"), "warning");
                                else if (E && "function" == typeof E) { var S;
                                E(_, (0, a.default)(S = this.insertImg).call(S, this)) } else { var M = new FormData; if ((0, i.default)(_).call(_, (function(e, t) { var n = A || e.name;
                                        _.length > 1 && (n += t + 1), M.append(n, e) })), f) { var N = f.split("#");
                                    f = N[0]; var k = N[1] || "";
                                    (0, i.default)(u).call(u, g, (function(e, t) { m && ((0, r.default)(f).call(f, "?") > 0 ? f += "&" : f += "?", f = f + e + "=" + t), M.append(e, t) })), k && (f += "#" + k); var B = c.default(f, { timeout: x, formData: M, headers: y, withCredentials: !!b, beforeSend: function(e) { if (w.before) return w.before(e, n, _) }, onTimeout: function(e) { o.customAlert(l("上传图片超时"), "error"), w.timeout && w.timeout(e, n) }, onProgress: function(e, t) { var o = new s.default(n);
                                            t.lengthComputable && (e = t.loaded / t.total, o.show(e)) }, onError: function(e) { o.customAlert(l("上传图片错误"), "error", l("上传图片错误") + "，" + l("服务器返回状态") + ": " + e.status), w.error && w.error(e, n) }, onFail: function(e, t) { o.customAlert(l("上传图片失败"), "error", l("上传图片返回结果错误") + "，" + l("返回结果") + ": " + t), w.fail && w.fail(e, n, t) }, onSuccess: function(e, r) { if (w.customInsert) { var u;
                                                w.customInsert((0, a.default)(u = t.insertImg).call(u, t), r, n) } else { if ("0" != r.errno) return o.customAlert(l("上传图片失败"), "error", l("上传图片返回结果错误") + "，" + l("返回结果") + " errno=" + r.errno), void(w.fail && w.fail(e, n, r)); var c = r.data;
                                                (0, i.default)(c).call(c, (function(e) { "string" == typeof e ? t.insertImg(e) : t.insertImg(e.url, e.alt, e.href) })), w.success && w.success(e, n, r) } } }); "string" == typeof B && o.customAlert(B, "error") } else d && u.arrForEach(e, (function(e) { var n = t,
                                        o = new FileReader;
                                    o.readAsDataURL(e), o.onload = function() { if (this.result) { var e = this.result.toString();
                                            n.insertImg(e, e) } } })) } else o.customAlert(l("传入的文件不合法"), "warning") } } }, e }();
        t.default = f }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(45)),
            i = o(n(3)),
            a = o(n(413));

        function l(e) { return !!e.length && "w-e-todo" === e.attr("class") }

        function u(e, t) { return 3 === e.nodeType ? e.nodeValue === t.nodeValue : e.contains(t) }

        function c(e, t, n) { void 0 === n && (n = !0); var o = e.nodeValue,
                i = null == o ? void 0 : (0, r.default)(o).call(o, 0, t); if (o = null == o ? void 0 : (0, r.default)(o).call(o, t), !n) { var a = o;
                o = i, i = a } return e.nodeValue = i, o }(0, o(n(1)).default)(t, "__esModule", { value: !0 }), t.dealTextNode = t.isAllTodo = t.isTodo = t.getCursorNextNode = void 0, t.isTodo = l, t.isAllTodo = function(e) { var t = e.selection.getSelectionRangeTopNodes(); if (0 !== t.length) return (0, a.default)(t).call(t, (function(e) { return l(e) })) }, t.getCursorNextNode = function e(t, n, o) { var r; if (t.hasChildNodes()) { var a = t.cloneNode(),
                    l = !1; "" === n.nodeValue && (l = !0); var s = []; return (0, i.default)(r = t.childNodes).call(r, (function(t) { if (!u(t, n) && l && (a.appendChild(t.cloneNode(!0)), "BR" !== t.nodeName && s.push(t)), u(t, n)) { if (1 === t.nodeType) { var r = e(t, n, o);
                            r && "" !== r.textContent && (null == a || a.appendChild(r)) } if (3 === t.nodeType && n.isEqualNode(t)) { var i = c(t, o);
                            a.textContent = i }
                        l = !0 } })), (0, i.default)(s).call(s, (function(e) { e.remove() })), a } }, t.dealTextNode = c }, function(e, t, n) { "use strict"; var o = n(0)(n(1));
        (0, o.default)(t, "__esModule", { value: !0 }); var r = n(433),
            i = function() {
                function e(e) { this.maxSize = e, this.isRe = !1, this.data = new r.CeilStack(e), this.revokeData = new r.CeilStack(e) } return (0, o.default)(e.prototype, "size", { get: function() { return [this.data.size, this.revokeData.size] }, enumerable: !1, configurable: !0 }), e.prototype.resetMaxSize = function(e) { this.data.resetMax(e), this.revokeData.resetMax(e) }, e.prototype.save = function(e) { return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(e), this }, e.prototype.revoke = function(e) {!this.isRe && (this.isRe = !0); var t = this.data.outstack(); return !!t && (this.revokeData.instack(t), e(t), !0) }, e.prototype.restore = function(e) {!this.isRe && (this.isRe = !0); var t = this.revokeData.outstack(); return !!t && (this.data.instack(t), e(t), !0) }, e }();
        t.default = i }, function(e, t, n) { var o = n(14),
            r = n(11),
            i = n(75);
        e.exports = !o && !r((function() { return 7 != Object.defineProperty(i("div"), "a", { get: function() { return 7 } }).a })) }, function(e, t, n) { var o = n(11),
            r = /#|\.prototype\./,
            i = function(e, t) { var n = l[a(e)]; return n == c || n != u && ("function" == typeof t ? o(t) : !!t) },
            a = i.normalize = function(e) { return String(e).replace(r, ".").toLowerCase() },
            l = i.data = {},
            u = i.NATIVE = "N",
            c = i.POLYFILL = "P";
        e.exports = i }, function(e, t, n) { var o = n(16),
            r = n(28),
            i = n(76).indexOf,
            a = n(51);
        e.exports = function(e, t) { var n, l = r(e),
                u = 0,
                c = []; for (n in l) !o(a, n) && o(l, n) && c.push(n); for (; t.length > u;) o(l, n = t[u++]) && (~i(c, n) || c.push(n)); return c } }, function(e, t, n) { var o = n(29);
        e.exports = o("document", "documentElement") }, function(e, t, n) { e.exports = n(165) }, function(e, t, n) { var o = n(83);
        e.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator }, function(e, t, n) { var o = n(8);
        e.exports = o.Promise }, function(e, t, n) { var o = n(52);
        e.exports = function(e, t, n) { for (var r in t) n && n.unsafe && e[r] ? e[r] = t[r] : o(e, r, t[r], n); return e } }, function(e, t, n) { "use strict"; var o = n(29),
            r = n(18),
            i = n(10),
            a = n(14),
            l = i("species");
        e.exports = function(e) { var t = o(e),
                n = r.f;
            a && t && !t[l] && n(t, l, { configurable: !0, get: function() { return this } }) } }, function(e, t, n) { var o = n(80),
            r = Function.toString; "function" != typeof o.inspectSource && (o.inspectSource = function(e) { return r.call(e) }), e.exports = o.inspectSource }, function(e, t, n) { var o = n(25),
            r = n(34),
            i = n(10)("species");
        e.exports = function(e, t) { var n, a = o(e).constructor; return void 0 === a || null == (n = o(a)[i]) ? t : r(n) } }, function(e, t, n) { var o, r, i, a = n(8),
            l = n(11),
            u = n(49),
            c = n(105),
            s = n(75),
            f = n(114),
            d = n(86),
            p = a.location,
            v = a.setImmediate,
            h = a.clearImmediate,
            A = a.process,
            g = a.MessageChannel,
            m = a.Dispatch,
            y = 0,
            w = {},
            x = function(e) { if (w.hasOwnProperty(e)) { var t = w[e];
                    delete w[e], t() } },
            b = function(e) { return function() { x(e) } },
            E = function(e) { x(e.data) },
            _ = function(e) { a.postMessage(e + "", p.protocol + "//" + p.host) };
        v && h || (v = function(e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return w[++y] = function() {
                ("function" == typeof e ? e : Function(e)).apply(void 0, t) }, o(y), y }, h = function(e) { delete w[e] }, d ? o = function(e) { A.nextTick(b(e)) } : m && m.now ? o = function(e) { m.now(b(e)) } : g && !f ? (i = (r = new g).port2, r.port1.onmessage = E, o = u(i.postMessage, i, 1)) : a.addEventListener && "function" == typeof postMessage && !a.importScripts && p && "file:" !== p.protocol && !l(_) ? (o = _, a.addEventListener("message", E, !1)) : o = "onreadystatechange" in s("script") ? function(e) { c.appendChild(s("script")).onreadystatechange = function() { c.removeChild(this), x(e) } } : function(e) { setTimeout(b(e), 0) }), e.exports = { set: v, clear: h } }, function(e, t, n) { var o = n(66);
        e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(o) }, function(e, t, n) { var o = n(25),
            r = n(13),
            i = n(67);
        e.exports = function(e, t) { if (o(e), r(t) && t.constructor === e) return t; var n = i.f(e); return (0, n.resolve)(t), n.promise } }, function(e, t, n) { "use strict"; var o, r, i, a = n(11),
            l = n(81),
            u = n(17),
            c = n(16),
            s = n(10),
            f = n(39),
            d = s("iterator"),
            p = !1;
        [].keys && ("next" in (i = [].keys()) ? (r = l(l(i))) !== Object.prototype && (o = r) : p = !0); var v = null == o || a((function() { var e = {}; return o[d].call(e) !== e }));
        v && (o = {}), f && !v || c(o, d) || u(o, d, (function() { return this })), e.exports = { IteratorPrototype: o, BUGGY_SAFARI_ITERATORS: p } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = o(n(1)),
            a = o(n(4)),
            l = a.default ? function(e, t, n, o) { void 0 === o && (o = n), (0, i.default)(e, o, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, o) { void 0 === o && (o = n), e[o] = t[n] },
            u = a.default ? function(e, t) {
                (0, i.default)(e, "default", { enumerable: !0, value: t }) } : function(e, t) { e.default = t },
            c = function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                    for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && l(t, e, n); return u(t, e), t },
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var f = s(n(2)),
            d = n(7),
            p = s(n(273)),
            v = s(n(288)),
            h = s(n(289)),
            A = s(n(290)),
            g = s(n(309)),
            m = s(n(419)),
            y = s(n(420)),
            w = s(n(421)),
            x = s(n(422)),
            b = c(n(423)),
            E = s(n(426)),
            _ = s(n(427)),
            C = s(n(428)),
            S = s(n(430)),
            M = s(n(440)),
            N = s(n(23)),
            k = s(n(133)),
            B = s(n(24)),
            T = s(n(33)),
            I = s(n(35)),
            R = s(n(36)),
            H = 1,
            D = function() {
                function e(e, t) { if (this.beforeDestroyHooks = [], this.id = "wangEditor-" + H++, this.toolbarSelector = e, this.textSelector = t, null == e) throw new Error("错误：初始化编辑器时候未传入任何参数，请查阅文档");
                    this.config = d.deepClone(p.default), this.$toolbarElem = f.default("<div></div>"), this.$textContainerElem = f.default("<div></div>"), this.$textElem = f.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new v.default(this), this.cmd = new h.default(this), this.txt = new A.default(this), this.menus = new g.default(this), this.zIndex = new _.default, this.change = new C.default(this), this.history = new S.default(this); var n = M.default(this),
                        o = n.disable,
                        r = n.enable;
                    this.disable = o, this.enable = r } return e.prototype.initSelection = function(e) { y.default(this, e) }, e.prototype.create = function() { this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), x.default(this), m.default(this), this.txt.init(), this.menus.init(), b.default(this), this.initSelection(!0), w.default(this), this.change.observe(), this.history.observe() }, e.prototype.beforeDestroy = function(e) { return this.beforeDestroyHooks.push(e), this }, e.prototype.destroy = function() { var e, t = this;
                    (0, r.default)(e = this.beforeDestroyHooks).call(e, (function(e) { return e.call(t) })), this.$toolbarElem.remove(), this.$textContainerElem.remove() }, e.prototype.fullScreen = function() { b.setFullScreen(this) }, e.prototype.unFullScreen = function() { b.setUnFullScreen(this) }, e.prototype.scrollToHead = function(e) { E.default(this, e) }, e.registerMenu = function(t, n) { n && "function" == typeof n && (e.globalCustomMenuConstructorList[t] = n) }, e.$ = f.default, e.BtnMenu = N.default, e.DropList = k.default, e.DropListMenu = B.default, e.Panel = T.default, e.PanelMenu = I.default, e.Tooltip = R.default, e.globalCustomMenuConstructorList = {}, e }();
        t.default = D }, function(e, t, n) { e.exports = n(218) }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(8),
            i = n(120),
            a = n(11),
            l = n(17),
            u = n(41),
            c = n(85),
            s = n(13),
            f = n(43),
            d = n(18).f,
            p = n(30).forEach,
            v = n(14),
            h = n(44),
            A = h.set,
            g = h.getterFor;
        e.exports = function(e, t, n) { var h, m = -1 !== e.indexOf("Map"),
                y = -1 !== e.indexOf("Weak"),
                w = m ? "set" : "add",
                x = r[e],
                b = x && x.prototype,
                E = {}; if (v && "function" == typeof x && (y || b.forEach && !a((function() {
                    (new x).entries().next() })))) { h = t((function(t, n) { A(c(t, h, e), { type: e, collection: new x }), null != n && u(n, t[w], { that: t, AS_ENTRIES: m }) })); var _ = g(e);
                p(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], (function(e) { var t = "add" == e || "set" == e;!(e in b) || y && "clear" == e || l(h.prototype, e, (function(n, o) { var r = _(this).collection; if (!t && y && !s(n)) return "get" == e && void 0; var i = r[e](0 === n ? 0 : n, o); return t ? this : i })) })), y || d(h.prototype, "size", { configurable: !0, get: function() { return _(this).collection.size } }) } else h = n.getConstructor(t, e, m, w), i.REQUIRED = !0; return f(h, e, !1, !0), E[e] = h, o({ global: !0, forced: !0 }, E), y || n.setStrong(h, e, m), h } }, function(e, t, n) { var o = n(51),
            r = n(13),
            i = n(16),
            a = n(18).f,
            l = n(63),
            u = n(221),
            c = l("meta"),
            s = 0,
            f = Object.isExtensible || function() { return !0 },
            d = function(e) { a(e, c, { value: { objectID: "O" + ++s, weakData: {} } }) },
            p = e.exports = { REQUIRED: !1, fastKey: function(e, t) { if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!i(e, c)) { if (!f(e)) return "F"; if (!t) return "E";
                        d(e) } return e[c].objectID }, getWeakData: function(e, t) { if (!i(e, c)) { if (!f(e)) return !0; if (!t) return !1;
                        d(e) } return e[c].weakData }, onFreeze: function(e) { return u && p.REQUIRED && f(e) && !i(e, c) && d(e), e } };
        o[c] = !0 }, function(e, t, n) { "use strict"; var o = n(18).f,
            r = n(50),
            i = n(109),
            a = n(49),
            l = n(85),
            u = n(41),
            c = n(89),
            s = n(110),
            f = n(14),
            d = n(120).fastKey,
            p = n(44),
            v = p.set,
            h = p.getterFor;
        e.exports = { getConstructor: function(e, t, n, c) { var s = e((function(e, o) { l(e, s, t), v(e, { type: t, index: r(null), first: void 0, last: void 0, size: 0 }), f || (e.size = 0), null != o && u(o, e[c], { that: e, AS_ENTRIES: n }) })),
                    p = h(t),
                    A = function(e, t, n) { var o, r, i = p(e),
                            a = g(e, t); return a ? a.value = n : (i.last = a = { index: r = d(t, !0), key: t, value: n, previous: o = i.last, next: void 0, removed: !1 }, i.first || (i.first = a), o && (o.next = a), f ? i.size++ : e.size++, "F" !== r && (i.index[r] = a)), e },
                    g = function(e, t) { var n, o = p(e),
                            r = d(t); if ("F" !== r) return o.index[r]; for (n = o.first; n; n = n.next)
                            if (n.key == t) return n }; return i(s.prototype, { clear: function() { for (var e = p(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                        e.first = e.last = void 0, f ? e.size = 0 : this.size = 0 }, delete: function(e) { var t = p(this),
                            n = g(this, e); if (n) { var o = n.next,
                                r = n.previous;
                            delete t.index[n.index], n.removed = !0, r && (r.next = o), o && (o.previous = r), t.first == n && (t.first = o), t.last == n && (t.last = r), f ? t.size-- : this.size-- } return !!n }, forEach: function(e) { for (var t, n = p(this), o = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first;)
                            for (o(t.value, t.key, this); t && t.removed;) t = t.previous }, has: function(e) { return !!g(this, e) } }), i(s.prototype, n ? { get: function(e) { var t = g(this, e); return t && t.value }, set: function(e, t) { return A(this, 0 === e ? 0 : e, t) } } : { add: function(e) { return A(this, e = 0 === e ? 0 : e, e) } }), f && o(s.prototype, "size", { get: function() { return p(this).size } }), s }, setStrong: function(e, t, n) { var o = t + " Iterator",
                    r = h(t),
                    i = h(o);
                c(e, t, (function(e, t) { v(this, { type: o, target: e, state: r(e), kind: t, last: void 0 }) }), (function() { for (var e = i(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous; return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? { value: n.key, done: !1 } : "values" == t ? { value: n.value, done: !1 } : { value: [n.key, n.value], done: !1 } : (e.target = void 0, { value: void 0, done: !0 }) }), n ? "entries" : "values", !n, !0), s(t) } } }, function(e, t, n) { n(123), n(68), n(53); var o = n(97);
        e.exports = o.f("iterator") }, function(e, t, n) { n(12)("iterator") }, function(e, t, n) { n(238), n(65), n(239), n(241), n(242), n(243), n(244), n(123), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256); var o = n(9);
        e.exports = o.Symbol }, function(e, t, n) { var o = n(104),
            r = n(78).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) { return o(e, r) } }, function(e, t) { t.f = Object.getOwnPropertySymbols }, function(e, t, n) { e.exports = n(262) }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.default = { zIndex: 1e4 } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }), t.getPasteImgs = t.getPasteHtml = t.getPasteText = void 0; var a = n(7),
            l = i(n(300));

        function u(e) { var t = e.clipboardData,
                n = ""; return n = null == t ? window.clipboardData && window.clipboardData.getData("text") : t.getData("text/plain"), a.replaceHtmlSymbol(n) }
        t.getPasteText = u, t.getPasteHtml = function(e, t, n) { void 0 === t && (t = !0), void 0 === n && (n = !1); var o = e.clipboardData,
                r = ""; if (o && (r = o.getData("text/html")), !r) { var i = u(e); if (!i) return "";
                r = "<p>" + i + "</p>" } return r = l.default(r, t, n) }, t.getPasteImgs = function(e) { var t, n = []; if (u(e)) return n; var o = null === (t = e.clipboardData) || void 0 === t ? void 0 : t.items; return o ? ((0, r.default)(a).call(a, o, (function(e, t) { var o = t.type; /image/i.test(o) && n.push(t.getAsFile()) })), n) : n } }, function(e, t, n) { e.exports = n(302) }, function(e, t, n) { e.exports = n(310) }, function(e, t, n) { e.exports = n(314) }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = o(n(1)),
            a = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var l = a(n(2)),
            u = n(32),
            c = function() {
                function e(e, t) { var n = this;
                    this.hideTimeoutId = 0, this.showTimeoutId = 0, this.menu = e, this.conf = t; var o = l.default('<div class="w-e-droplist"></div>'),
                        i = l.default("<p>" + t.title + "</p>");
                    i.addClass("w-e-dp-title"), o.append(i); var a = t.list || [],
                        c = t.type || "list",
                        s = t.clickHandler || u.EMPTY_FN,
                        f = l.default('<ul class="' + ("list" === c ? "w-e-list" : "w-e-block") + '"></ul>');
                    (0, r.default)(a).call(a, (function(e) { var t = e.$elem,
                            o = e.value,
                            r = l.default('<li class="w-e-item"></li>');
                        t && (r.append(t), f.append(r), r.on("click", (function() { s(o), n.hideTimeoutId = window.setTimeout((function() { n.hide() })) }))) })), o.append(f), o.on("mouseleave", (function() { n.hideTimeoutId = window.setTimeout((function() { n.hide() })) })), this.$container = o, this.rendered = !1, this._show = !1 } return e.prototype.show = function() { this.hideTimeoutId && clearTimeout(this.hideTimeoutId); var e = this.menu.$elem,
                        t = this.$container; if (!this._show) { if (this.rendered) t.show();
                        else { var n = e.getSizeData().height || 0,
                                o = this.conf.width || 100;
                            t.css("margin-top", n + "px").css("width", o + "px"), e.append(t), this.rendered = !0 }
                        this._show = !0 } }, e.prototype.hide = function() { this.showTimeoutId && clearTimeout(this.showTimeoutId); var e = this.$container;
                    this._show && (e.hide(), this._show = !1) }, (0, i.default)(e.prototype, "isShow", { get: function() { return this._show }, enumerable: !1, configurable: !0 }), e }();
        t.default = c }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.default = function(e) { var t = e.selection.getSelectionContainerElem(); return !!(null == t ? void 0 : t.length) && "A" === t.getNodeName() } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(96)),
            i = o(n(3));
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = n(7);
        t.default = function(e, t) { var n = new XMLHttpRequest; if (n.open("POST", e), n.timeout = t.timeout || 1e4, n.ontimeout = function() { console.error("wangEditor - 请求超时"), t.onTimeout && t.onTimeout(n) }, n.upload && (n.upload.onprogress = function(e) { var n = e.loaded / e.total;
                    t.onProgress && t.onProgress(n, e) }), t.headers && (0, i.default)(a).call(a, t.headers, (function(e, t) { n.setRequestHeader(e, t) })), n.withCredentials = !!t.withCredentials, t.beforeSend) { var o = t.beforeSend(n); if (o && "object" === (0, r.default)(o) && o.prevent) return o.msg } return n.onreadystatechange = function() { if (4 === n.readyState) { var e = n.status; if (!(e < 200 || e >= 300 && e < 400)) { if (e >= 400) return console.error("wangEditor - XHR 报错，状态码 " + e), void(t.onError && t.onError(n)); var o, i = n.responseText; if ("object" !== (0, r.default)(i)) try { o = JSON.parse(i) } catch (e) { return console.error("wangEditor - 返回结果不是 JSON 格式", i), void(t.onFail && t.onFail(n, i)) } else o = i;
                        t.onSuccess(n, o) } } }, n.send(t.formData || null), n } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(352)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = i(n(2)),
            l = function() {
                function e(e) { this.editor = e, this.$textContainer = e.$textContainerElem, this.$bar = a.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0 } return e.prototype.show = function(e) { var t = this; if (!this.isShow) { this.isShow = !0; var n = this.$bar;
                        this.$textContainer.append(n), (0, r.default)() - this.time > 100 && e <= 1 && (n.css("width", 100 * e + "%"), this.time = (0, r.default)()); var o = this.timeoutId;
                        o && clearTimeout(o), this.timeoutId = window.setTimeout((function() { t.hide() }), 500) } }, e.prototype.hide = function() { this.$bar.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0 }, e }();
        t.default = l }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = a.default ? function(e, t, n, o) { void 0 === o && (o = n), (0, i.default)(e, o, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, o) { void 0 === o && (o = n), e[o] = t[n] },
            s = a.default ? function(e, t) {
                (0, i.default)(e, "default", { enumerable: !0, value: t }) } : function(e, t) { e.default = t },
            f = function(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                    for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && c(t, e, n); return s(t, e), t },
            d = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }), t.ListType = void 0; var p, v = d(n(2)),
            h = d(n(24)),
            A = n(46),
            g = f(n(378));! function(e) { e.OrderedList = "OL", e.UnorderedList = "UL" }(p = t.ListType || (t.ListType = {})); var m = function(e) {
            function t(t) { var n = this,
                    o = v.default('<div class="w-e-menu" data-title="序列">\n                <i class="w-e-icon-list2"></i>\n            </div>'),
                    r = { width: 130, title: "序列", type: "list", list: [{ $elem: v.default('\n                        <p>\n                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>\n                            ' + t.i18next.t("menus.dropListMenu.list.无序列表") + "\n                        <p>"), value: p.UnorderedList }, { $elem: v.default('<p>\n                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>\n                            ' + t.i18next.t("menus.dropListMenu.list.有序列表") + "\n                        <p>"), value: p.OrderedList }], clickHandler: function(e) { n.command(e) } }; return n = e.call(this, o, t, r) || this } return u(t, e), t.prototype.command = function(e) { void 0 !== this.editor.selection.getSelectionContainerElem() && (this.handleSelectionRangeNodes(e), this.tryChangeActive()) }, t.prototype.validator = function(e, t, n) { return !(!e.length || !t.length || n.equal(e) || n.equal(t)) }, t.prototype.handleSelectionRangeNodes = function(e) { var t = this.editor,
                    n = t.selection,
                    o = e.toLowerCase(),
                    r = n.getSelectionContainerElem(),
                    i = n.getSelectionStartElem().getNodeTop(t),
                    a = n.getSelectionEndElem().getNodeTop(t); if (this.validator(i, a, t.$textElem)) { var l = n.getRange(),
                        u = null == l ? void 0 : l.collapsed;
                    t.$textElem.equal(r) || (r = r.getNodeTop(t)); var c, s = { editor: t, listType: e, listTarget: o, $selectionElem: r, $startElem: i, $endElem: a };
                    c = this.isOrderElem(r) ? g.ClassType.Wrap : this.isOrderElem(i) && this.isOrderElem(a) ? g.ClassType.Join : this.isOrderElem(i) ? g.ClassType.StartJoin : this.isOrderElem(a) ? g.ClassType.EndJoin : g.ClassType.Other; var f = new g.default(g.createListHandle(c, s, l));
                    A.updateRange(t, f.getSelectionRangeElem(), !!u) } }, t.prototype.isOrderElem = function(e) { var t = e.getNodeName(); return t === p.OrderedList || t === p.UnorderedList }, t.prototype.tryChangeActive = function() {}, t }(h.default);
        t.default = m }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.default = function(e) { var t = e.selection.getSelectionContainerElem(); return !!(null == t ? void 0 : t.length) && !("CODE" != t.getNodeName() && "PRE" != t.getNodeName() && "CODE" != t.parent().getNodeName() && "PRE" != t.parent().getNodeName() && !/hljs/.test(t.parent().attr("class"))) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(27)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }), t.todo = void 0; var a = i(n(2)),
            l = function() {
                function e(e) { var t;
                    this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = a.default(this.template), this.$child = null === (t = null == e ? void 0 : e.childNodes()) || void 0 === t ? void 0 : t.clone(!0) } return e.prototype.init = function() { var e = this,
                        t = this.getInput(),
                        n = this.$child,
                        o = this.getInputContainer();
                    n && n.insertAfter(o), t.on("click", (function() { e.checked ? null == t || t.removeAttr("checked") : null == t || t.attr("checked", ""), e.checked = !e.checked })) }, e.prototype.getInput = function() { var e = this.$todo; return (0, r.default)(e).call(e, "input") }, e.prototype.getInputContainer = function() { return this.getInput().parent() }, e.prototype.getTodo = function() { return this.$todo }, e }();
        t.todo = l, t.default = function(e) { var t = new l(e); return t.init(), t } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(1)),
            i = o(n(4)).default ? function(e, t, n, o) { void 0 === o && (o = n), (0, r.default)(e, o, { enumerable: !0, get: function() { return t[n] } }) } : function(e, t, n, o) { void 0 === o && (o = n), e[o] = t[n] },
            a = function(e, t) { for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n) },
            l = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, r.default)(t, "__esModule", { value: !0 }), n(150), n(152), n(156), n(158), n(160), n(162), n(164); var u = l(n(117));
        a(n(443), t); try { document } catch (e) { throw new Error("请在浏览器环境下运行") }
        t.default = u.default }, function(e, t, n) { var o = n(142);
        e.exports = o }, function(e, t, n) { n(143); var o = n(9).Object,
            r = e.exports = function(e, t, n) { return o.defineProperty(e, t, n) };
        o.defineProperty.sham && (r.sham = !0) }, function(e, t, n) { var o = n(6),
            r = n(14);
        o({ target: "Object", stat: !0, forced: !r, sham: !r }, { defineProperty: n(18).f }) }, function(e, t) { var n;
        n = function() { return this }(); try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
        e.exports = n }, function(e, t, n) { var o = n(146);
        e.exports = o }, function(e, t, n) { n(147); var o = n(9).Object;
        e.exports = function(e, t) { return o.create(e, t) } }, function(e, t, n) { n(6)({ target: "Object", stat: !0, sham: !n(14) }, { create: n(50) }) }, function(e, t, n) { var o = n(14),
            r = n(18),
            i = n(25),
            a = n(60);
        e.exports = o ? Object.defineProperties : function(e, t) { i(e); for (var n, o = a(t), l = o.length, u = 0; l > u;) r.f(e, n = o[u++], t[n]); return e } }, function(e, t, n) { var o = n(8),
            r = n(17);
        e.exports = function(e, t) { try { r(o, e, t) } catch (n) { o[e] = t } return t } }, function(e, t, n) { var o = n(20),
            r = n(151); "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
        ]); var i = { insert: "head", singleton: !1 };
        o(r, i);
        e.exports = r.locals || {} }, function(e, t, n) {
        (t = n(21)(!1)).push([e.i, '.w-e-toolbar,\n.w-e-text-container,\n.w-e-menu-panel {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  background-color: #fff;\n  /*表情菜单样式*/\n  /*分割线样式*/\n}\n.w-e-toolbar h1,\n.w-e-text-container h1,\n.w-e-menu-panel h1 {\n  font-size: 2em !important;\n}\n.w-e-toolbar h2,\n.w-e-text-container h2,\n.w-e-menu-panel h2 {\n  font-size: 1.5em !important;\n}\n.w-e-toolbar h3,\n.w-e-text-container h3,\n.w-e-menu-panel h3 {\n  font-size: 1.17em !important;\n}\n.w-e-toolbar h4,\n.w-e-text-container h4,\n.w-e-menu-panel h4 {\n  font-size: 1em !important;\n}\n.w-e-toolbar h5,\n.w-e-text-container h5,\n.w-e-menu-panel h5 {\n  font-size: 0.83em !important;\n}\n.w-e-toolbar p,\n.w-e-text-container p,\n.w-e-menu-panel p {\n  font-size: 1em !important;\n}\n.w-e-toolbar .eleImg,\n.w-e-text-container .eleImg,\n.w-e-menu-panel .eleImg {\n  cursor: pointer;\n  display: inline-block;\n  font-size: 18px;\n  padding: 0 3px;\n}\n.w-e-toolbar *,\n.w-e-text-container *,\n.w-e-menu-panel * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.w-e-toolbar hr,\n.w-e-text-container hr,\n.w-e-menu-panel hr {\n  cursor: pointer;\n  display: block;\n  height: 0px;\n  border: 0;\n  border-top: 3px solid #ccc;\n  margin: 20px 0;\n}\n.w-e-clear-fix:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.w-e-drop-list-item {\n  position: relative;\n  top: 1px;\n  padding-right: 7px;\n  color: #333 !important;\n}\n.w-e-drop-list-tl {\n  padding-left: 10px;\n  text-align: left;\n}\n', ""]), e.exports = t }, function(e, t, n) { var o = n(20),
            r = n(153); "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
        ]); var i = { insert: "head", singleton: !1 };
        o(r, i);
        e.exports = r.locals || {} }, function(e, t, n) { var o = n(21),
            r = n(154),
            i = n(155);
        t = o(!1); var a = r(i);
        t.push([e.i, "@font-face {\n  font-family: 'w-e-icon';\n  src: url(" + a + ') format(\'truetype\');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^="w-e-icon-"],\n[class*=" w-e-icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'w-e-icon\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.w-e-icon-close:before {\n  content: "\\f00d";\n}\n.w-e-icon-upload2:before {\n  content: "\\e9c6";\n}\n.w-e-icon-trash-o:before {\n  content: "\\f014";\n}\n.w-e-icon-header:before {\n  content: "\\f1dc";\n}\n.w-e-icon-pencil2:before {\n  content: "\\e906";\n}\n.w-e-icon-paint-brush:before {\n  content: "\\f1fc";\n}\n.w-e-icon-image:before {\n  content: "\\e90d";\n}\n.w-e-icon-play:before {\n  content: "\\e912";\n}\n.w-e-icon-location:before {\n  content: "\\e947";\n}\n.w-e-icon-undo:before {\n  content: "\\e965";\n}\n.w-e-icon-redo:before {\n  content: "\\e966";\n}\n.w-e-icon-quotes-left:before {\n  content: "\\e977";\n}\n.w-e-icon-list-numbered:before {\n  content: "\\e9b9";\n}\n.w-e-icon-list2:before {\n  content: "\\e9bb";\n}\n.w-e-icon-link:before {\n  content: "\\e9cb";\n}\n.w-e-icon-happy:before {\n  content: "\\e9df";\n}\n.w-e-icon-bold:before {\n  content: "\\ea62";\n}\n.w-e-icon-underline:before {\n  content: "\\ea63";\n}\n.w-e-icon-italic:before {\n  content: "\\ea64";\n}\n.w-e-icon-strikethrough:before {\n  content: "\\ea65";\n}\n.w-e-icon-table2:before {\n  content: "\\ea71";\n}\n.w-e-icon-paragraph-left:before {\n  content: "\\ea77";\n}\n.w-e-icon-paragraph-center:before {\n  content: "\\ea78";\n}\n.w-e-icon-paragraph-right:before {\n  content: "\\ea79";\n}\n.w-e-icon-paragraph-justify:before {\n  content: "\\ea7a";\n}\n.w-e-icon-terminal:before {\n  content: "\\f120";\n}\n.w-e-icon-page-break:before {\n  content: "\\ea68";\n}\n.w-e-icon-cancel-circle:before {\n  content: "\\ea0d";\n}\n.w-e-icon-font:before {\n  content: "\\ea5c";\n}\n.w-e-icon-text-heigh:before {\n  content: "\\ea5f";\n}\n.w-e-icon-paint-format:before {\n  content: "\\e90c";\n}\n.w-e-icon-indent-increase:before {\n  content: "\\ea7b";\n}\n.w-e-icon-indent-decrease:before {\n  content: "\\ea7c";\n}\n.w-e-icon-row-height:before {\n  content: "\\e9be";\n}\n.w-e-icon-fullscreen_exit:before {\n  content: "\\e900";\n}\n.w-e-icon-fullscreen:before {\n  content: "\\e901";\n}\n.w-e-icon-split-line:before {\n  content: "\\ea0b";\n}\n.w-e-icon-checkbox-checked:before {\n  content: "\\ea52";\n}\n', ""]), e.exports = t }, function(e, t, n) { "use strict";
        e.exports = function(e, t) { return t || (t = {}), "string" != typeof(e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) } }, function(e, t, n) { "use strict";
        n.r(t), t.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" }, function(e, t, n) { var o = n(20),
            r = n(157); "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
        ]); var i = { insert: "head", singleton: !1 };
        o(r, i);
        e.exports = r.locals || {} }, function(e, t, n) {
        (t = n(21)(!1)).push([e.i, ".w-e-toolbar {\n  display: flex;\n  padding: 0 6px;\n  flex-wrap: wrap;\n  position: relative;\n  /* 单个菜单 */\n}\n.w-e-toolbar .w-e-menu {\n  position: relative;\n  display: flex;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n}\n.w-e-toolbar .w-e-menu i {\n  color: #999;\n}\n.w-e-toolbar .w-e-menu:hover {\n  background-color: #F6F6F6;\n}\n.w-e-toolbar .w-e-menu:hover i {\n  color: #333;\n}\n.w-e-toolbar .w-e-active i {\n  color: #1e88e5;\n}\n.w-e-toolbar .w-e-active:hover i {\n  color: #1e88e5;\n}\n", ""]), e.exports = t }, function(e, t, n) { var o = n(20),
            r = n(159); "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
        ]); var i = { insert: "head", singleton: !1 };
        o(r, i);
        e.exports = r.locals || {} }, function(e, t, n) {
        (t = n(21)(!1)).push([e.i, '.w-e-text-container {\n  position: relative;\n}\n.w-e-text-container .w-e-progress {\n  position: absolute;\n  background-color: #1e88e5;\n  top: 0;\n  left: 0;\n  height: 1px;\n}\n.w-e-text-container .placeholder {\n  color: #D4D4D4;\n  position: absolute;\n  font-size: 11pt;\n  line-height: 22px;\n  left: 10px;\n  top: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: -1;\n}\n.w-e-text {\n  padding: 0 10px;\n  overflow-y: auto;\n}\n.w-e-text p,\n.w-e-text h1,\n.w-e-text h2,\n.w-e-text h3,\n.w-e-text h4,\n.w-e-text h5,\n.w-e-text table,\n.w-e-text pre {\n  margin: 10px 0;\n  line-height: 1.5;\n}\n.w-e-text ul,\n.w-e-text ol {\n  margin: 10px 0 10px 20px;\n}\n.w-e-text blockquote {\n  display: block;\n  border-left: 8px solid #d0e5f2;\n  padding: 5px 10px;\n  margin: 10px 0;\n  line-height: 1.4;\n  font-size: 100%;\n  background-color: #f1f1f1;\n}\n.w-e-text code {\n  display: inline-block;\n  background-color: #f1f1f1;\n  border-radius: 3px;\n  padding: 3px 5px;\n  margin: 0 3px;\n}\n.w-e-text pre code {\n  display: block;\n}\n.w-e-text table {\n  border-top: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n}\n.w-e-text table td,\n.w-e-text table th {\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 3px 5px;\n  min-height: 30px;\n}\n.w-e-text table th {\n  border-bottom: 2px solid #ccc;\n  text-align: center;\n  background-color: #f1f1f1;\n}\n.w-e-text:focus {\n  outline: none;\n}\n.w-e-text img {\n  cursor: pointer;\n}\n.w-e-text img:hover {\n  box-shadow: 0 0 5px #333;\n}\n.w-e-text .w-e-todo {\n  margin: 0 0 0 20px;\n}\n.w-e-text .w-e-todo li {\n  list-style: none;\n  font-size: 1em;\n}\n.w-e-text .w-e-todo li span:nth-child(1) {\n  position: relative;\n  left: -18px;\n}\n.w-e-text .w-e-todo li span:nth-child(1) input {\n  position: absolute;\n  margin-right: 3px;\n}\n.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {\n  top: 50%;\n  margin-top: -6px;\n}\n.w-e-tooltip {\n  position: absolute;\n  display: flex;\n  color: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0.75);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 5px 6px;\n  justify-content: center;\n  align-items: center;\n}\n.w-e-tooltip-up::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-top-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-down::after {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-item-wrapper {\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0 5px;\n}\n.w-e-tooltip-item-wrapper:hover {\n  color: #ccc;\n  text-decoration: underline;\n}\n.w-e-menu-tooltip {\n  position: absolute;\n  display: flex;\n  color: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0.75);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 5px 6px;\n  justify-content: center;\n  align-items: center;\n}\n.w-e-menu-tooltip-up::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-top-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-menu-tooltip-item-wrapper {\n  font-size: 14px;\n  margin: 0 5px;\n}\n', ""]), e.exports = t }, function(e, t, n) { var o = n(20),
            r = n(161); "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
        ]); var i = { insert: "head", singleton: !1 };
        o(r, i);
        e.exports = r.locals || {} }, function(e, t, n) {
        (t = n(21)(!1)).push([e.i, '.w-e-menu .w-e-panel-container {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border: 1px solid #ccc;\n  border-top: 0;\n  box-shadow: 1px 1px 2px #ccc;\n  color: #333;\n  background-color: #fff;\n  text-align: left;\n  /* 为 emotion panel 定制的样式 */\n  /* 上传图片、上传视频的 panel 定制样式 */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px;\n  margin: 2px 5px 0 0;\n  cursor: pointer;\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close:hover {\n  color: #333;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title {\n  list-style: none;\n  display: flex;\n  font-size: 14px;\n  margin: 2px 10px 0 10px;\n  border-bottom: 1px solid #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {\n  padding: 3px 5px;\n  color: #999;\n  cursor: pointer;\n  margin: 0 3px;\n  position: relative;\n  top: 1px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {\n  color: #333;\n  border-bottom: 1px solid #333;\n  cursor: default;\n  font-weight: 700;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content {\n  padding: 10px 15px 10px 15px;\n  font-size: 16px;\n  /* 输入框的样式 */\n  /* 按钮的样式 */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {\n  outline: none;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  margin-top: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {\n  border-color: #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {\n  border: none;\n  border-bottom: 1px solid #ccc;\n  font-size: 14px;\n  height: 20px;\n  color: #333;\n  text-align: left;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {\n  width: 30px;\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {\n  border-bottom: 2px solid #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {\n  font-size: 14px;\n  color: #1e88e5;\n  border: none;\n  padding: 5px 10px;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {\n  float: left;\n  margin-right: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {\n  float: right;\n  margin-left: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {\n  color: #c24f4a;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {\n  background-color: #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {\n  cursor: pointer;\n  font-size: 18px;\n  padding: 0 3px;\n  display: inline-block;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container,\n.w-e-menu .w-e-panel-container .w-e-up-video-container {\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,\n.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {\n  display: inline-block;\n  color: #999;\n  cursor: pointer;\n  font-size: 60px;\n  line-height: 1;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,\n.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {\n  color: #333;\n}\n', ""]), e.exports = t }, function(e, t, n) { var o = n(20),
            r = n(163); "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
        ]); var i = { insert: "head", singleton: !1 };
        o(r, i);
        e.exports = r.locals || {} }, function(e, t, n) {
        (t = n(21)(!1)).push([e.i, ".w-e-toolbar .w-e-droplist {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #fff;\n  border: 1px solid #f1f1f1;\n  border-right-color: #ccc;\n  border-bottom-color: #ccc;\n}\n.w-e-toolbar .w-e-droplist .w-e-dp-title {\n  text-align: center;\n  color: #999;\n  line-height: 2;\n  border-bottom: 1px solid #f1f1f1;\n  font-size: 13px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list {\n  list-style: none;\n  line-height: 1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {\n  color: #333;\n  padding: 5px 0;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block {\n  list-style: none;\n  text-align: left;\n  padding: 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {\n  display: inline-block;\n  padding: 3px 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n", ""]), e.exports = t }, function(e, t, n) { "use strict"; var o = n(0)(n(106));
        Element.prototype.matches || (Element.prototype.matches = function(e) { for (var t = this.ownerDocument.querySelectorAll(e), n = t.length; n >= 0 && t.item(n) !== this; n--); return n > -1 }), window.Promise || (window.Promise = o.default) }, function(e, t, n) { var o = n(166);
        e.exports = o }, function(e, t, n) { n(167), n(65), n(173), n(180), n(181), n(182), n(68), n(53); var o = n(9);
        e.exports = o.Promise }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(81),
            i = n(82),
            a = n(50),
            l = n(17),
            u = n(37),
            c = n(41),
            s = function(e, t) { var n = this; if (!(n instanceof s)) return new s(e, t);
                i && (n = i(new Error(void 0), r(n))), void 0 !== t && l(n, "message", String(t)); var o = []; return c(e, o.push, { that: o }), l(n, "errors", o), n };
        s.prototype = a(Error.prototype, { constructor: u(5, s), message: u(5, ""), name: u(5, "AggregateError") }), o({ global: !0 }, { AggregateError: s }) }, function(e, t, n) { var o = n(11);
        e.exports = !o((function() {
            function e() {} return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype })) }, function(e, t, n) { var o = n(13);
        e.exports = function(e) { if (!o(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype"); return e } }, function(e, t, n) { var o = n(10),
            r = n(42),
            i = o("iterator"),
            a = Array.prototype;
        e.exports = function(e) { return void 0 !== e && (r.Array === e || a[i] === e) } }, function(e, t, n) { var o = n(64),
            r = n(42),
            i = n(10)("iterator");
        e.exports = function(e) { if (null != e) return e[i] || e["@@iterator"] || r[o(e)] } }, function(e, t, n) { var o = n(25);
        e.exports = function(e) { var t = e.return; if (void 0 !== t) return o(t.call(e)).value } }, function(e, t, n) { "use strict"; var o, r, i, a, l = n(6),
            u = n(39),
            c = n(8),
            s = n(29),
            f = n(108),
            d = n(52),
            p = n(109),
            v = n(43),
            h = n(110),
            A = n(13),
            g = n(34),
            m = n(85),
            y = n(111),
            w = n(41),
            x = n(175),
            b = n(112),
            E = n(113).set,
            _ = n(176),
            C = n(115),
            S = n(178),
            M = n(67),
            N = n(87),
            k = n(44),
            B = n(103),
            T = n(10),
            I = n(86),
            R = n(88),
            H = T("species"),
            D = "Promise",
            F = k.get,
            L = k.set,
            O = k.getterFor(D),
            P = f,
            Q = c.TypeError,
            j = c.document,
            U = c.process,
            z = s("fetch"),
            Y = M.f,
            $ = Y,
            V = !!(j && j.createEvent && c.dispatchEvent),
            G = "function" == typeof PromiseRejectionEvent,
            J = B(D, (function() { if (!(y(P) !== String(P))) { if (66 === R) return !0; if (!I && !G) return !0 } if (u && !P.prototype.finally) return !0; if (R >= 51 && /native code/.test(P)) return !1; var e = P.resolve(1),
                    t = function(e) { e((function() {}), (function() {})) }; return (e.constructor = {})[H] = t, !(e.then((function() {})) instanceof t) })),
            K = J || !x((function(e) { P.all(e).catch((function() {})) })),
            W = function(e) { var t; return !(!A(e) || "function" != typeof(t = e.then)) && t },
            q = function(e, t) { if (!e.notified) { e.notified = !0; var n = e.reactions;
                    _((function() { for (var o = e.value, r = 1 == e.state, i = 0; n.length > i;) { var a, l, u, c = n[i++],
                                s = r ? c.ok : c.fail,
                                f = c.resolve,
                                d = c.reject,
                                p = c.domain; try { s ? (r || (2 === e.rejection && te(e), e.rejection = 1), !0 === s ? a = o : (p && p.enter(), a = s(o), p && (p.exit(), u = !0)), a === c.promise ? d(Q("Promise-chain cycle")) : (l = W(a)) ? l.call(a, f, d) : f(a)) : d(o) } catch (e) { p && !u && p.exit(), d(e) } }
                        e.reactions = [], e.notified = !1, t && !e.rejection && Z(e) })) } },
            X = function(e, t, n) { var o, r;
                V ? ((o = j.createEvent("Event")).promise = t, o.reason = n, o.initEvent(e, !1, !0), c.dispatchEvent(o)) : o = { promise: t, reason: n }, !G && (r = c["on" + e]) ? r(o) : "unhandledrejection" === e && S("Unhandled promise rejection", n) },
            Z = function(e) { E.call(c, (function() { var t, n = e.facade,
                        o = e.value; if (ee(e) && (t = N((function() { I ? U.emit("unhandledRejection", o, n) : X("unhandledrejection", n, o) })), e.rejection = I || ee(e) ? 2 : 1, t.error)) throw t.value })) },
            ee = function(e) { return 1 !== e.rejection && !e.parent },
            te = function(e) { E.call(c, (function() { var t = e.facade;
                    I ? U.emit("rejectionHandled", t) : X("rejectionhandled", t, e.value) })) },
            ne = function(e, t, n) { return function(o) { e(t, o, n) } },
            oe = function(e, t, n) { e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, q(e, !0)) },
            re = function(e, t, n) { if (!e.done) { e.done = !0, n && (e = n); try { if (e.facade === t) throw Q("Promise can't be resolved itself"); var o = W(t);
                        o ? _((function() { var n = { done: !1 }; try { o.call(t, ne(re, n, e), ne(oe, n, e)) } catch (t) { oe(n, t, e) } })) : (e.value = t, e.state = 1, q(e, !1)) } catch (t) { oe({ done: !1 }, t, e) } } };
        J && (P = function(e) { m(this, P, D), g(e), o.call(this); var t = F(this); try { e(ne(re, t), ne(oe, t)) } catch (e) { oe(t, e) } }, (o = function(e) { L(this, { type: D, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 }) }).prototype = p(P.prototype, { then: function(e, t) { var n = O(this),
                    o = Y(b(this, P)); return o.ok = "function" != typeof e || e, o.fail = "function" == typeof t && t, o.domain = I ? U.domain : void 0, n.parent = !0, n.reactions.push(o), 0 != n.state && q(n, !1), o.promise }, catch: function(e) { return this.then(void 0, e) } }), r = function() { var e = new o,
                t = F(e);
            this.promise = e, this.resolve = ne(re, t), this.reject = ne(oe, t) }, M.f = Y = function(e) { return e === P || e === i ? new r(e) : $(e) }, u || "function" != typeof f || (a = f.prototype.then, d(f.prototype, "then", (function(e, t) { var n = this; return new P((function(e, t) { a.call(n, e, t) })).then(e, t) }), { unsafe: !0 }), "function" == typeof z && l({ global: !0, enumerable: !0, forced: !0 }, { fetch: function(e) { return C(P, z.apply(c, arguments)) } }))), l({ global: !0, wrap: !0, forced: J }, { Promise: P }), v(P, D, !1, !0), h(D), i = s(D), l({ target: D, stat: !0, forced: J }, { reject: function(e) { var t = Y(this); return t.reject.call(void 0, e), t.promise } }), l({ target: D, stat: !0, forced: u || J }, { resolve: function(e) { return C(u && this === i ? P : this, e) } }), l({ target: D, stat: !0, forced: K }, { all: function(e) { var t = this,
                    n = Y(t),
                    o = n.resolve,
                    r = n.reject,
                    i = N((function() { var n = g(t.resolve),
                            i = [],
                            a = 0,
                            l = 1;
                        w(e, (function(e) { var u = a++,
                                c = !1;
                            i.push(void 0), l++, n.call(t, e).then((function(e) { c || (c = !0, i[u] = e, --l || o(i)) }), r) })), --l || o(i) })); return i.error && r(i.value), n.promise }, race: function(e) { var t = this,
                    n = Y(t),
                    o = n.reject,
                    r = N((function() { var r = g(t.resolve);
                        w(e, (function(e) { r.call(t, e).then(n.resolve, o) })) })); return r.error && o(r.value), n.promise } }) }, function(e, t, n) { "use strict"; var o = n(84),
            r = n(64);
        e.exports = o ? {}.toString : function() { return "[object " + r(this) + "]" } }, function(e, t, n) { var o = n(10)("iterator"),
            r = !1; try { var i = 0,
                a = { next: function() { return { done: !!i++ } }, return: function() { r = !0 } };
            a[o] = function() { return this }, Array.from(a, (function() { throw 2 })) } catch (e) {}
        e.exports = function(e, t) { if (!t && !r) return !1; var n = !1; try { var i = {};
                i[o] = function() { return { next: function() { return { done: n = !0 } } } }, e(i) } catch (e) {} return n } }, function(e, t, n) { var o, r, i, a, l, u, c, s, f = n(8),
            d = n(73).f,
            p = n(113).set,
            v = n(114),
            h = n(177),
            A = n(86),
            g = f.MutationObserver || f.WebKitMutationObserver,
            m = f.document,
            y = f.process,
            w = f.Promise,
            x = d(f, "queueMicrotask"),
            b = x && x.value;
        b || (o = function() { var e, t; for (A && (e = y.domain) && e.exit(); r;) { t = r.fn, r = r.next; try { t() } catch (e) { throw r ? a() : i = void 0, e } }
            i = void 0, e && e.enter() }, v || A || h || !g || !m ? w && w.resolve ? (c = w.resolve(void 0), s = c.then, a = function() { s.call(c, o) }) : a = A ? function() { y.nextTick(o) } : function() { p.call(f, o) } : (l = !0, u = m.createTextNode(""), new g(o).observe(u, { characterData: !0 }), a = function() { u.data = l = !l })), e.exports = b || function(e) { var t = { fn: e, next: void 0 };
            i && (i.next = t), r || (r = t, a()), i = t } }, function(e, t, n) { var o = n(66);
        e.exports = /web0s(?!.*chrome)/i.test(o) }, function(e, t, n) { var o = n(8);
        e.exports = function(e, t) { var n = o.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t)) } }, function(e, t, n) { var o = n(8),
            r = n(111),
            i = o.WeakMap;
        e.exports = "function" == typeof i && /native code/.test(r(i)) }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(34),
            i = n(67),
            a = n(87),
            l = n(41);
        o({ target: "Promise", stat: !0 }, { allSettled: function(e) { var t = this,
                    n = i.f(t),
                    o = n.resolve,
                    u = n.reject,
                    c = a((function() { var n = r(t.resolve),
                            i = [],
                            a = 0,
                            u = 1;
                        l(e, (function(e) { var r = a++,
                                l = !1;
                            i.push(void 0), u++, n.call(t, e).then((function(e) { l || (l = !0, i[r] = { status: "fulfilled", value: e }, --u || o(i)) }), (function(e) { l || (l = !0, i[r] = { status: "rejected", reason: e }, --u || o(i)) })) })), --u || o(i) })); return c.error && u(c.value), n.promise } }) }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(34),
            i = n(29),
            a = n(67),
            l = n(87),
            u = n(41);
        o({ target: "Promise", stat: !0 }, { any: function(e) { var t = this,
                    n = a.f(t),
                    o = n.resolve,
                    c = n.reject,
                    s = l((function() { var n = r(t.resolve),
                            a = [],
                            l = 0,
                            s = 1,
                            f = !1;
                        u(e, (function(e) { var r = l++,
                                u = !1;
                            a.push(void 0), s++, n.call(t, e).then((function(e) { u || f || (f = !0, o(e)) }), (function(e) { u || f || (u = !0, a[r] = e, --s || c(new(i("AggregateError"))(a, "No one promise resolved"))) })) })), --s || c(new(i("AggregateError"))(a, "No one promise resolved")) })); return s.error && c(s.value), n.promise } }) }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(39),
            i = n(108),
            a = n(11),
            l = n(29),
            u = n(112),
            c = n(115),
            s = n(52);
        o({ target: "Promise", proto: !0, real: !0, forced: !!i && a((function() { i.prototype.finally.call({ then: function() {} }, (function() {})) })) }, { finally: function(e) { var t = u(this, l("Promise")),
                    n = "function" == typeof e; return this.then(n ? function(n) { return c(t, e()).then((function() { return n })) } : e, n ? function(n) { return c(t, e()).then((function() { throw n })) } : e) } }), r || "function" != typeof i || i.prototype.finally || s(i.prototype, "finally", l("Promise").prototype.finally) }, function(e, t, n) { var o = n(61),
            r = n(48),
            i = function(e) { return function(t, n) { var i, a, l = String(r(t)),
                        u = o(n),
                        c = l.length; return u < 0 || u >= c ? e ? "" : void 0 : (i = l.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (a = l.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? l.charAt(u) : i : e ? l.slice(u, u + 2) : a - 56320 + (i - 55296 << 10) + 65536 } };
        e.exports = { codeAt: i(!1), charAt: i(!0) } }, function(e, t, n) { "use strict"; var o = n(116).IteratorPrototype,
            r = n(50),
            i = n(37),
            a = n(43),
            l = n(42),
            u = function() { return this };
        e.exports = function(e, t, n) { var c = t + " Iterator"; return e.prototype = r(o, { next: i(1, n) }), a(e, c, !1, !0), l[c] = u, e } }, function(e, t, n) { "use strict"; var o = n(28),
            r = n(90),
            i = n(42),
            a = n(44),
            l = n(89),
            u = a.set,
            c = a.getterFor("Array Iterator");
        e.exports = l(Array, "Array", (function(e, t) { u(this, { type: "Array Iterator", target: o(e), index: 0, kind: t }) }), (function() { var e = c(this),
                t = e.target,
                n = e.kind,
                o = e.index++; return !t || o >= t.length ? (e.target = void 0, { value: void 0, done: !0 }) : "keys" == n ? { value: o, done: !1 } : "values" == n ? { value: t[o], done: !1 } : { value: [o, t[o]], done: !1 } }), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries") }, function(e, t) { e.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 } }, function(e, t, n) { n(53); var o = n(188),
            r = n(64),
            i = Array.prototype,
            a = { DOMTokenList: !0, NodeList: !0 };
        e.exports = function(e) { var t = e.forEach; return e === i || e instanceof Array && t === i.forEach || a.hasOwnProperty(r(e)) ? o : t } }, function(e, t, n) { var o = n(189);
        e.exports = o }, function(e, t, n) { n(190); var o = n(15);
        e.exports = o("Array").forEach }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(191);
        o({ target: "Array", proto: !0, forced: [].forEach != r }, { forEach: r }) }, function(e, t, n) { "use strict"; var o = n(30).forEach,
            r = n(69),
            i = n(22),
            a = r("forEach"),
            l = i("forEach");
        e.exports = a && l ? [].forEach : function(e) { return o(this, e, arguments.length > 1 ? arguments[1] : void 0) } }, function(e, t, n) { var o = n(193);
        e.exports = o }, function(e, t, n) { var o = n(194),
            r = Function.prototype;
        e.exports = function(e) { var t = e.bind; return e === r || e instanceof Function && t === r.bind ? o : t } }, function(e, t, n) { n(195); var o = n(15);
        e.exports = o("Function").bind }, function(e, t, n) { n(6)({ target: "Function", proto: !0 }, { bind: n(196) }) }, function(e, t, n) { "use strict"; var o = n(34),
            r = n(13),
            i = [].slice,
            a = {},
            l = function(e, t, n) { if (!(t in a)) { for (var o = [], r = 0; r < t; r++) o[r] = "a[" + r + "]";
                    a[t] = Function("C,a", "return new C(" + o.join(",") + ")") } return a[t](e, n) };
        e.exports = Function.bind || function(e) { var t = o(this),
                n = i.call(arguments, 1),
                a = function() { var o = n.concat(i.call(arguments)); return this instanceof a ? l(t, o.length, o) : t.apply(e, o) }; return r(t.prototype) && (a.prototype = t.prototype), a } }, function(e, t, n) { var o = n(198);
        e.exports = o }, function(e, t, n) { var o = n(199),
            r = n(201),
            i = Array.prototype,
            a = String.prototype;
        e.exports = function(e) { var t = e.includes; return e === i || e instanceof Array && t === i.includes ? o : "string" == typeof e || e === a || e instanceof String && t === a.includes ? r : t } }, function(e, t, n) { n(200); var o = n(15);
        e.exports = o("Array").includes }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(76).includes,
            i = n(90);
        o({ target: "Array", proto: !0, forced: !n(22)("indexOf", { ACCESSORS: !0, 1: 0 }) }, { includes: function(e) { return r(this, e, arguments.length > 1 ? arguments[1] : void 0) } }), i("includes") }, function(e, t, n) { n(202); var o = n(15);
        e.exports = o("String").includes }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(203),
            i = n(48);
        o({ target: "String", proto: !0, forced: !n(205)("includes") }, { includes: function(e) { return !!~String(i(this)).indexOf(r(e), arguments.length > 1 ? arguments[1] : void 0) } }) }, function(e, t, n) { var o = n(204);
        e.exports = function(e) { if (o(e)) throw TypeError("The method doesn't accept regular expressions"); return e } }, function(e, t, n) { var o = n(13),
            r = n(47),
            i = n(10)("match");
        e.exports = function(e) { var t; return o(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == r(e)) } }, function(e, t, n) { var o = n(10)("match");
        e.exports = function(e) { var t = /./; try { "/./" [e](t) } catch (n) { try { return t[o] = !1, "/./" [e](t) } catch (e) {} } return !1 } }, function(e, t, n) { var o = n(207);
        e.exports = o }, function(e, t, n) { var o = n(208),
            r = Array.prototype;
        e.exports = function(e) { var t = e.filter; return e === r || e instanceof Array && t === r.filter ? o : t } }, function(e, t, n) { n(209); var o = n(15);
        e.exports = o("Array").filter }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(30).filter,
            i = n(56),
            a = n(22),
            l = i("filter"),
            u = a("filter");
        o({ target: "Array", proto: !0, forced: !l || !u }, { filter: function(e) { return r(this, e, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(e, t, n) { var o = n(211);
        e.exports = o }, function(e, t, n) { var o = n(212),
            r = Array.prototype;
        e.exports = function(e) { var t = e.splice; return e === r || e instanceof Array && t === r.splice ? o : t } }, function(e, t, n) { n(213); var o = n(15);
        e.exports = o("Array").splice }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(77),
            i = n(61),
            a = n(38),
            l = n(40),
            u = n(91),
            c = n(93),
            s = n(56),
            f = n(22),
            d = s("splice"),
            p = f("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
            v = Math.max,
            h = Math.min;
        o({ target: "Array", proto: !0, forced: !d || !p }, { splice: function(e, t) { var n, o, s, f, d, p, A = l(this),
                    g = a(A.length),
                    m = r(e, g),
                    y = arguments.length; if (0 === y ? n = o = 0 : 1 === y ? (n = 0, o = g - m) : (n = y - 2, o = h(v(i(t), 0), g - m)), g + n - o > 9007199254740991) throw TypeError("Maximum allowed length exceeded"); for (s = u(A, o), f = 0; f < o; f++)(d = m + f) in A && c(s, f, A[d]); if (s.length = o, n < o) { for (f = m; f < g - o; f++) p = f + n, (d = f + o) in A ? A[p] = A[d] : delete A[p]; for (f = g; f > g - o + n; f--) delete A[f - 1] } else if (n > o)
                    for (f = g - o; f > m; f--) p = f + n - 1, (d = f + o - 1) in A ? A[p] = A[d] : delete A[p]; for (f = 0; f < n; f++) A[f + m] = arguments[f + 2]; return A.length = g - o + n, s } }) }, function(e, t, n) { var o = n(215);
        e.exports = o }, function(e, t, n) { var o = n(216),
            r = Array.prototype;
        e.exports = function(e) { var t = e.indexOf; return e === r || e instanceof Array && t === r.indexOf ? o : t } }, function(e, t, n) { n(217); var o = n(15);
        e.exports = o("Array").indexOf }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(76).indexOf,
            i = n(69),
            a = n(22),
            l = [].indexOf,
            u = !!l && 1 / [1].indexOf(1, -0) < 0,
            c = i("indexOf"),
            s = a("indexOf", { ACCESSORS: !0, 1: 0 });
        o({ target: "Array", proto: !0, forced: u || !c || !s }, { indexOf: function(e) { return u ? l.apply(this, arguments) || 0 : r(this, e, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(e, t, n) { var o = n(219);
        e.exports = o }, function(e, t, n) { n(220), n(65), n(68), n(53); var o = n(9);
        e.exports = o.Map }, function(e, t, n) { "use strict"; var o = n(119),
            r = n(121);
        e.exports = o("Map", (function(e) { return function() { return e(this, arguments.length ? arguments[0] : void 0) } }), r) }, function(e, t, n) { var o = n(11);
        e.exports = !o((function() { return Object.isExtensible(Object.preventExtensions({})) })) }, function(e, t, n) { var o = n(223);
        e.exports = o }, function(e, t, n) { var o = n(224),
            r = String.prototype;
        e.exports = function(e) { var t = e.trim; return "string" == typeof e || e === r || e instanceof String && t === r.trim ? o : t } }, function(e, t, n) { n(225); var o = n(15);
        e.exports = o("String").trim }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(94).trim;
        o({ target: "String", proto: !0, forced: n(226)("trim") }, { trim: function() { return r(this) } }) }, function(e, t, n) { var o = n(11),
            r = n(72);
        e.exports = function(e) { return o((function() { return !!r[e]() || "​᠎" != "​᠎" [e]() || r[e].name !== e })) } }, function(e, t, n) { var o = n(228);
        e.exports = o }, function(e, t, n) { var o = n(229),
            r = Array.prototype;
        e.exports = function(e) { var t = e.map; return e === r || e instanceof Array && t === r.map ? o : t } }, function(e, t, n) { n(230); var o = n(15);
        e.exports = o("Array").map }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(30).map,
            i = n(56),
            a = n(22),
            l = i("map"),
            u = a("map");
        o({ target: "Array", proto: !0, forced: !l || !u }, { map: function(e) { return r(this, e, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(e, t, n) { var o = n(232);
        e.exports = o }, function(e, t, n) { n(233); var o = n(9);
        e.exports = o.Array.isArray }, function(e, t, n) { n(6)({ target: "Array", stat: !0 }, { isArray: n(54) }) }, function(e, t, n) { e.exports = n(235) }, function(e, t, n) { var o = n(122);
        e.exports = o }, function(e, t, n) { e.exports = n(237) }, function(e, t, n) { var o = n(124);
        n(257), n(258), n(259), n(260), n(261), e.exports = o }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(11),
            i = n(54),
            a = n(13),
            l = n(40),
            u = n(38),
            c = n(93),
            s = n(91),
            f = n(56),
            d = n(10),
            p = n(88),
            v = d("isConcatSpreadable"),
            h = p >= 51 || !r((function() { var e = []; return e[v] = !1, e.concat()[0] !== e })),
            A = f("concat"),
            g = function(e) { if (!a(e)) return !1; var t = e[v]; return void 0 !== t ? !!t : i(e) };
        o({ target: "Array", proto: !0, forced: !h || !A }, { concat: function(e) { var t, n, o, r, i, a = l(this),
                    f = s(a, 0),
                    d = 0; for (t = -1, o = arguments.length; t < o; t++)
                    if (g(i = -1 === t ? a : arguments[t])) { if (d + (r = u(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded"); for (n = 0; n < r; n++, d++) n in i && c(f, d, i[n]) } else { if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                        c(f, d++, i) }
                return f.length = d, f } }) }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(8),
            i = n(29),
            a = n(39),
            l = n(14),
            u = n(83),
            c = n(107),
            s = n(11),
            f = n(16),
            d = n(54),
            p = n(13),
            v = n(25),
            h = n(40),
            A = n(28),
            g = n(59),
            m = n(37),
            y = n(50),
            w = n(60),
            x = n(125),
            b = n(240),
            E = n(126),
            _ = n(73),
            C = n(18),
            S = n(58),
            M = n(17),
            N = n(52),
            k = n(79),
            B = n(62),
            T = n(51),
            I = n(63),
            R = n(10),
            H = n(97),
            D = n(12),
            F = n(43),
            L = n(44),
            O = n(30).forEach,
            P = B("hidden"),
            Q = R("toPrimitive"),
            j = L.set,
            U = L.getterFor("Symbol"),
            z = Object.prototype,
            Y = r.Symbol,
            $ = i("JSON", "stringify"),
            V = _.f,
            G = C.f,
            J = b.f,
            K = S.f,
            W = k("symbols"),
            q = k("op-symbols"),
            X = k("string-to-symbol-registry"),
            Z = k("symbol-to-string-registry"),
            ee = k("wks"),
            te = r.QObject,
            ne = !te || !te.prototype || !te.prototype.findChild,
            oe = l && s((function() { return 7 != y(G({}, "a", { get: function() { return G(this, "a", { value: 7 }).a } })).a })) ? function(e, t, n) { var o = V(z, t);
                o && delete z[t], G(e, t, n), o && e !== z && G(z, t, o) } : G,
            re = function(e, t) { var n = W[e] = y(Y.prototype); return j(n, { type: "Symbol", tag: e, description: t }), l || (n.description = t), n },
            ie = c ? function(e) { return "symbol" == typeof e } : function(e) { return Object(e) instanceof Y },
            ae = function(e, t, n) { e === z && ae(q, t, n), v(e); var o = g(t, !0); return v(n), f(W, o) ? (n.enumerable ? (f(e, P) && e[P][o] && (e[P][o] = !1), n = y(n, { enumerable: m(0, !1) })) : (f(e, P) || G(e, P, m(1, {})), e[P][o] = !0), oe(e, o, n)) : G(e, o, n) },
            le = function(e, t) { v(e); var n = A(t),
                    o = w(n).concat(fe(n)); return O(o, (function(t) { l && !ue.call(n, t) || ae(e, t, n[t]) })), e },
            ue = function(e) { var t = g(e, !0),
                    n = K.call(this, t); return !(this === z && f(W, t) && !f(q, t)) && (!(n || !f(this, t) || !f(W, t) || f(this, P) && this[P][t]) || n) },
            ce = function(e, t) { var n = A(e),
                    o = g(t, !0); if (n !== z || !f(W, o) || f(q, o)) { var r = V(n, o); return !r || !f(W, o) || f(n, P) && n[P][o] || (r.enumerable = !0), r } },
            se = function(e) { var t = J(A(e)),
                    n = []; return O(t, (function(e) { f(W, e) || f(T, e) || n.push(e) })), n },
            fe = function(e) { var t = e === z,
                    n = J(t ? q : A(e)),
                    o = []; return O(n, (function(e) {!f(W, e) || t && !f(z, e) || o.push(W[e]) })), o };
        (u || (N((Y = function() { if (this instanceof Y) throw TypeError("Symbol is not a constructor"); var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                t = I(e),
                n = function(e) { this === z && n.call(q, e), f(this, P) && f(this[P], t) && (this[P][t] = !1), oe(this, t, m(1, e)) }; return l && ne && oe(z, t, { configurable: !0, set: n }), re(t, e) }).prototype, "toString", (function() { return U(this).tag })), N(Y, "withoutSetter", (function(e) { return re(I(e), e) })), S.f = ue, C.f = ae, _.f = ce, x.f = b.f = se, E.f = fe, H.f = function(e) { return re(R(e), e) }, l && (G(Y.prototype, "description", { configurable: !0, get: function() { return U(this).description } }), a || N(z, "propertyIsEnumerable", ue, { unsafe: !0 }))), o({ global: !0, wrap: !0, forced: !u, sham: !u }, { Symbol: Y }), O(w(ee), (function(e) { D(e) })), o({ target: "Symbol", stat: !0, forced: !u }, { for: function(e) { var t = String(e); if (f(X, t)) return X[t]; var n = Y(t); return X[t] = n, Z[n] = t, n }, keyFor: function(e) { if (!ie(e)) throw TypeError(e + " is not a symbol"); if (f(Z, e)) return Z[e] }, useSetter: function() { ne = !0 }, useSimple: function() { ne = !1 } }), o({ target: "Object", stat: !0, forced: !u, sham: !l }, { create: function(e, t) { return void 0 === t ? y(e) : le(y(e), t) }, defineProperty: ae, defineProperties: le, getOwnPropertyDescriptor: ce }), o({ target: "Object", stat: !0, forced: !u }, { getOwnPropertyNames: se, getOwnPropertySymbols: fe }), o({ target: "Object", stat: !0, forced: s((function() { E.f(1) })) }, { getOwnPropertySymbols: function(e) { return E.f(h(e)) } }), $) && o({ target: "JSON", stat: !0, forced: !u || s((function() { var e = Y(); return "[null]" != $([e]) || "{}" != $({ a: e }) || "{}" != $(Object(e)) })) }, { stringify: function(e, t, n) { for (var o, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]); if (o = t, (p(t) || void 0 !== e) && !ie(e)) return d(t) || (t = function(e, t) { if ("function" == typeof o && (t = o.call(this, e, t)), !ie(t)) return t }), r[1] = t, $.apply(null, r) } });
        Y.prototype[Q] || M(Y.prototype, Q, Y.prototype.valueOf), F(Y, "Symbol"), T[P] = !0 }, function(e, t, n) { var o = n(28),
            r = n(125).f,
            i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(e) { return a && "[object Window]" == i.call(e) ? function(e) { try { return r(e) } catch (e) { return a.slice() } }(e) : r(o(e)) } }, function(e, t, n) { n(12)("asyncIterator") }, function(e, t) {}, function(e, t, n) { n(12)("hasInstance") }, function(e, t, n) { n(12)("isConcatSpreadable") }, function(e, t, n) { n(12)("match") }, function(e, t, n) { n(12)("matchAll") }, function(e, t, n) { n(12)("replace") }, function(e, t, n) { n(12)("search") }, function(e, t, n) { n(12)("species") }, function(e, t, n) { n(12)("split") }, function(e, t, n) { n(12)("toPrimitive") }, function(e, t, n) { n(12)("toStringTag") }, function(e, t, n) { n(12)("unscopables") }, function(e, t, n) { var o = n(8);
        n(43)(o.JSON, "JSON", !0) }, function(e, t) {}, function(e, t) {}, function(e, t, n) { n(12)("asyncDispose") }, function(e, t, n) { n(12)("dispose") }, function(e, t, n) { n(12)("observable") }, function(e, t, n) { n(12)("patternMatch") }, function(e, t, n) { n(12)("replaceAll") }, function(e, t, n) { n(263); var o = n(9);
        e.exports = o.setTimeout }, function(e, t, n) { var o = n(6),
            r = n(8),
            i = n(66),
            a = [].slice,
            l = function(e) { return function(t, n) { var o = arguments.length > 2,
                        r = o ? a.call(arguments, 2) : void 0; return e(o ? function() {
                        ("function" == typeof t ? t : Function(t)).apply(this, r) } : t, n) } };
        o({ global: !0, bind: !0, forced: /MSIE .\./.test(i) }, { setTimeout: l(r.setTimeout), setInterval: l(r.setInterval) }) }, function(e, t, n) { var o = n(265);
        e.exports = o }, function(e, t, n) { var o = n(266),
            r = Array.prototype;
        e.exports = function(e) { var t = e.slice; return e === r || e instanceof Array && t === r.slice ? o : t } }, function(e, t, n) { n(267); var o = n(15);
        e.exports = o("Array").slice }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(13),
            i = n(54),
            a = n(77),
            l = n(38),
            u = n(28),
            c = n(93),
            s = n(10),
            f = n(56),
            d = n(22),
            p = f("slice"),
            v = d("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
            h = s("species"),
            A = [].slice,
            g = Math.max;
        o({ target: "Array", proto: !0, forced: !p || !v }, { slice: function(e, t) { var n, o, s, f = u(this),
                    d = l(f.length),
                    p = a(e, d),
                    v = a(void 0 === t ? d : t, d); if (i(f) && ("function" != typeof(n = f.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[h]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return A.call(f, p, v); for (o = new(void 0 === n ? Array : n)(g(v - p, 0)), s = 0; p < v; p++, s++) p in f && c(o, s, f[p]); return o.length = s, o } }) }, function(e, t, n) { e.exports = n(269) }, function(e, t, n) { var o = n(270);
        e.exports = o }, function(e, t, n) { n(271); var o = n(9);
        e.exports = o.parseInt }, function(e, t, n) { var o = n(6),
            r = n(272);
        o({ global: !0, forced: parseInt != r }, { parseInt: r }) }, function(e, t, n) { var o = n(8),
            r = n(94).trim,
            i = n(72),
            a = o.parseInt,
            l = /^[+-]?0[Xx]/,
            u = 8 !== a(i + "08") || 22 !== a(i + "0x16");
        e.exports = u ? function(e, t) { var n = r(String(e)); return a(n, t >>> 0 || (l.test(n) ? 16 : 10)) } : a }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(274)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = i(n(279)),
            l = i(n(280)),
            u = i(n(128)),
            c = i(n(281)),
            s = i(n(282)),
            f = i(n(283)),
            d = i(n(284)),
            p = i(n(285)),
            v = i(n(286)),
            h = i(n(287)),
            A = (0, r.default)({}, a.default, l.default, u.default, s.default, c.default, f.default, d.default, p.default, v.default, h.default, { linkCheck: function(e, t) { return !0 } });
        t.default = A }, function(e, t, n) { e.exports = n(275) }, function(e, t, n) { var o = n(276);
        e.exports = o }, function(e, t, n) { n(277); var o = n(9);
        e.exports = o.Object.assign }, function(e, t, n) { var o = n(6),
            r = n(278);
        o({ target: "Object", stat: !0, forced: Object.assign !== r }, { assign: r }) }, function(e, t, n) { "use strict"; var o = n(14),
            r = n(11),
            i = n(60),
            a = n(126),
            l = n(58),
            u = n(40),
            c = n(74),
            s = Object.assign,
            f = Object.defineProperty;
        e.exports = !s || r((function() { if (o && 1 !== s({ b: 1 }, s(f({}, "a", { enumerable: !0, get: function() { f(this, "b", { value: 3, enumerable: !1 }) } }), { b: 2 })).b) return !0; var e = {},
                t = {},
                n = Symbol(); return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function(e) { t[e] = e })), 7 != s({}, e)[n] || "abcdefghijklmnopqrst" != i(s({}, t)).join("") })) ? function(e, t) { for (var n = u(e), r = arguments.length, s = 1, f = a.f, d = l.f; r > s;)
                for (var p, v = c(arguments[s++]), h = f ? i(v).concat(f(v)) : i(v), A = h.length, g = 0; A > g;) p = h[g++], o && !d.call(v, p) || (n[p] = v[p]); return n } : s }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var o = "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal",
            r = "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal";
        t.default = { menus: ["head", "bold", "fontSize", "fontName", "italic", "underline", "strikeThrough", "indent", "lineHeight", "foreColor", "backColor", "link", "list", "todo", "justify", "quote", "emoticon", "image", "video", "table", "code", "splitLine", "undo", "redo"], fontNames: ["黑体", "仿宋", "楷体", "标楷体", "华文仿宋", "华文楷体", "宋体", "微软雅黑", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"], fontSizes: { "x-small": { name: "10px", value: "1" }, small: { name: "13px", value: "2" }, normal: { name: "16px", value: "3" }, large: { name: "18px", value: "4" }, "x-large": { name: "24px", value: "5" }, "xx-large": { name: "32px", value: "6" }, "xxx-large": { name: "48px", value: "7" } }, colors: ["#000000", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b", "#ffffff"], languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"], languageTab: "　　　　", emotions: [{ title: "默认", type: "image", content: [{ alt: "[坏笑]", src: o + "/50/pcmoren_huaixiao_org.png" }, { alt: "[舔屏]", src: o + "/40/pcmoren_tian_org.png" }, { alt: "[污]", src: o + "/3c/pcmoren_wu_org.png" }] }, { title: "新浪", type: "image", content: [{ src: r + "/7a/shenshou_thumb.gif", alt: "[草泥马]" }, { src: r + "/60/horse2_thumb.gif", alt: "[神马]" }, { src: r + "/bc/fuyun_thumb.gif", alt: "[浮云]" }] }, { title: "emoji", type: "emoji", content: "😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐".split(/\s/) }, { title: "手势", type: "emoji", content: ["🙌", "👏", "👋", "👍", "👎", "👊", "✊", "️👌", "✋", "👐", "💪", "🙏", "️👆", "👇", "👈", "👉", "🖕", "🖐", "🤘"] }], lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"], undoLimit: 20, indentation: "2em", showMenuTooltips: !0 } }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var o = n(32);
        t.default = { onchangeTimeout: 200, onchange: o.EMPTY_FN, onfocus: o.EMPTY_FN, onblur: o.EMPTY_FN, onCatalogChange: null, customAlert: function(e, t, n) { window.alert(e), n && console.error("wangEditor: " + n) } } }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.default = { pasteFilterStyle: !0, pasteIgnoreImg: !1, pasteTextHandle: function(e) { return e } } }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.default = { styleWithCSS: !1 } }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var o = n(32);
        t.default = { linkImgCheck: function(e, t, n) { return !0 }, showLinkImg: !0, showLinkImgAlt: !0, showLinkImgHref: !0, linkImgCallback: o.EMPTY_FN, uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"], uploadImgServer: "", uploadImgShowBase64: !1, uploadImgMaxSize: 5242880, uploadImgMaxLength: 100, uploadFileName: "", uploadImgParams: {}, uploadImgParamsWithUrl: !1, uploadImgHeaders: {}, uploadImgHooks: {}, uploadImgTimeout: 1e4, withCredentials: !1, customUploadImg: null } }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.default = { focus: !0, height: 300, placeholder: "请输入正文", zIndexFullScreen: 10002, showFullScreen: !0 } }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.default = { lang: "zh-CN", languages: { "zh-CN": { wangEditor: { "重置": "重置", "插入": "插入", "默认": "默认", "创建": "创建", "修改": "修改", "如": "如", "请输入正文": "请输入正文", menus: { title: { "标题": "标题", "加粗": "加粗", "字号": "字号", "字体": "字体", "斜体": "斜体", "下划线": "下划线", "删除线": "删除线", "缩进": "缩进", "行高": "行高", "文字颜色": "文字颜色", "背景色": "背景色", "链接": "链接", "序列": "序列", "对齐": "对齐", "引用": "引用", "表情": "表情", "图片": "图片", "视频": "视频", "表格": "表格", "代码": "代码", "分割线": "分割线", "恢复": "恢复", "撤销": "撤销", "全屏": "全屏", "待办事项": "待办事项" }, dropListMenu: { "设置标题": "设置标题", "背景颜色": "背景颜色", "文字颜色": "文字颜色", "设置字号": "设置字号", "设置字体": "设置字体", "设置缩进": "设置缩进", "对齐方式": "对齐方式", "设置行高": "设置行高", "序列": "序列", head: { "正文": "正文" }, indent: { "增加缩进": "增加缩进", "减少缩进": "减少缩进" }, justify: { "靠左": "靠左", "居中": "居中", "靠右": "靠右", "两端": "两端" }, list: { "无序列表": "无序列表", "有序列表": "有序列表" } }, panelMenus: { emoticon: { "默认": "默认", "新浪": "新浪", emoji: "emoji", "手势": "手势" }, image: { "上传图片": "上传图片", "网络图片": "网络图片", "图片地址": "图片地址", "图片文字说明": "图片文字说明", "跳转链接": "跳转链接" }, link: { "链接": "链接", "链接文字": "链接文字", "取消链接": "取消链接", "查看链接": "查看链接" }, video: { "插入视频": "插入视频", "上传视频": "上传视频" }, table: { "行": "行", "列": "列", "的": "的", "表格": "表格", "添加行": "添加行", "删除行": "删除行", "添加列": "添加列", "删除列": "删除列", "设置表头": "设置表头", "取消表头": "取消表头", "插入表格": "插入表格", "删除表格": "删除表格" }, code: { "删除代码": "删除代码", "修改代码": "修改代码", "插入代码": "插入代码" } } }, validate: { "张图片": "张图片", "大于": "大于", "图片链接": "图片链接", "不是图片": "不是图片", "返回结果": "返回结果", "上传图片超时": "上传图片超时", "上传图片错误": "上传图片错误", "上传图片失败": "上传图片失败", "插入图片错误": "插入图片错误", "一次最多上传": "一次最多上传", "下载链接失败": "下载链接失败", "图片验证未通过": "图片验证未通过", "服务器返回状态": "服务器返回状态", "上传图片返回结果错误": "上传图片返回结果错误", "请替换为支持的图片类型": "请替换为支持的图片类型", "您插入的网络图片无法识别": "您插入的网络图片无法识别", "您刚才插入的图片链接未通过编辑器校验": "您刚才插入的图片链接未通过编辑器校验", "插入视频错误": "插入视频错误", "视频链接": "视频链接", "不是视频": "不是视频", "视频验证未通过": "视频验证未通过", "个视频": "个视频", "上传视频超时": "上传视频超时", "上传视频错误": "上传视频错误", "上传视频失败": "上传视频失败", "上传视频返回结果错误": "上传视频返回结果错误" } } }, en: { wangEditor: { "重置": "reset", "插入": "insert", "默认": "default", "创建": "create", "修改": "edit", "如": "like", "请输入正文": "please enter the text", menus: { title: { "标题": "head", "加粗": "bold", "字号": "font size", "字体": "font family", "斜体": "italic", "下划线": "underline", "删除线": "strikethrough", "缩进": "indent", "行高": "line heihgt", "文字颜色": "font color", "背景色": "background", "链接": "link", "序列": "numbered list", "对齐": "align", "引用": "quote", "表情": "emoticons", "图片": "image", "视频": "media", "表格": "table", "代码": "code", "分割线": "split line", "恢复": "undo", "撤销": "redo", "全屏": "fullscreen", "待办事项": "todo" }, dropListMenu: { "设置标题": "title", "背景颜色": "background", "文字颜色": "font color", "设置字号": "font size", "设置字体": "font family", "设置缩进": "indent", "对齐方式": "align", "设置行高": "line heihgt", "序列": "list", head: { "正文": "text" }, indent: { "增加缩进": "indent", "减少缩进": "outdent" }, justify: { "靠左": "left", "居中": "center", "靠右": "right", "两端": "justify" }, list: { "无序列表": "unordered", "有序列表": "ordered" } }, panelMenus: { emoticon: { "默认": "default", "新浪": "sina", emoji: "emoji", "手势": "gesture" }, image: { "上传图片": "upload image", "网络图片": "network image", "图片地址": "image link", "图片文字说明": "image alt", "跳转链接": "hyperlink" }, link: { "链接": "link", "链接文字": "link text", "取消链接": "unlink", "查看链接": "view links" }, video: { "插入视频": "insert video", "上传视频": "upload local video" }, table: { "行": "rows", "列": "columns", "的": " ", "表格": "table", "添加行": "insert row", "删除行": "delete row", "添加列": "insert column", "删除列": "delete column", "设置表头": "set header", "取消表头": "cancel header", "插入表格": "insert table", "删除表格": "delete table" }, code: { "删除代码": "delete code", "修改代码": "edit code", "插入代码": "insert code" } } }, validate: { "张图片": "images", "大于": "greater than", "图片链接": "image link", "不是图片": "is not image", "返回结果": "return results", "上传图片超时": "upload image timeout", "上传图片错误": "upload image error", "上传图片失败": "upload image failed", "插入图片错误": "insert image error", "一次最多上传": "once most at upload", "下载链接失败": "download link failed", "图片验证未通过": "image validate failed", "服务器返回状态": "server return status", "上传图片返回结果错误": "upload image return results error", "请替换为支持的图片类型": "please replace with a supported image type", "您插入的网络图片无法识别": "the network picture you inserted is not recognized", "您刚才插入的图片链接未通过编辑器校验": "the image link you just inserted did not pass the editor verification", "插入视频错误": "insert video error", "视频链接": "video link", "不是视频": "is not video", "视频验证未通过": "video validate failed", "个视频": "videos", "上传视频超时": "upload video timeout", "上传视频错误": "upload video error", "上传视频失败": "upload video failed", "上传视频返回结果错误": "upload video return results error" } } } } } }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var o = n(7);
        t.default = { compatibleMode: function() { return !(!o.UA.isIE() && !o.UA.isOldEdge) }, historyMaxSize: 30 } }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var o = n(32);
        t.default = { onlineVideoCheck: function(e) { return !0 }, onlineVideoCallback: o.EMPTY_FN, showLinkVideo: !0, uploadVideoAccept: ["mp4"], uploadVideoServer: "", uploadVideoMaxSize: 1073741824, uploadVideoName: "", uploadVideoParams: {}, uploadVideoParamsWithUrl: !1, uploadVideoHeaders: {}, uploadVideoHooks: {}, uploadVideoTimeout: 72e5, withVideoCredentials: !1, customUploadVideo: null, customInsertVideo: null } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(19)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = i(n(2)),
            l = n(7),
            u = function() {
                function e(e) { this._currentRange = null, this.editor = e } return e.prototype.getRange = function() { return this._currentRange }, e.prototype.saveRange = function(e) { if (e) this._currentRange = e;
                    else { var t = window.getSelection(); if (0 !== t.rangeCount) { var n = t.getRangeAt(0),
                                o = this.getSelectionContainerElem(n); if ((null == o ? void 0 : o.length) && "false" !== o.attr("contenteditable") && !o.parentUntil("[contenteditable=false]")) { var i = this.editor,
                                    a = i.$textElem; if (a.isContain(o)) { var l; if (a.elems[0] === o.elems[0])
                                        if ("<p><br></p>" === (0, r.default)(l = a.html()).call(l)) { var u = a.children(),
                                                c = null == u ? void 0 : u.last();
                                            i.selection.createRangeByElem(c, !0, !0), i.selection.restoreSelection() }
                                    this._currentRange = n } } } } }, e.prototype.collapseRange = function(e) { void 0 === e && (e = !1); var t = this._currentRange;
                    t && t.collapse(e) }, e.prototype.getSelectionText = function() { var e = this._currentRange; return e ? e.toString() : "" }, e.prototype.getSelectionContainerElem = function(e) { var t, n; if (t = e || this._currentRange) return n = t.commonAncestorContainer, a.default(1 === n.nodeType ? n : n.parentNode) }, e.prototype.getSelectionStartElem = function(e) { var t, n; if (t = e || this._currentRange) return n = t.startContainer, a.default(1 === n.nodeType ? n : n.parentNode) }, e.prototype.getSelectionEndElem = function(e) { var t, n; if (t = e || this._currentRange) return n = t.endContainer, a.default(1 === n.nodeType ? n : n.parentNode) }, e.prototype.isSelectionEmpty = function() { var e = this._currentRange; return !(!e || !e.startContainer || e.startContainer !== e.endContainer || e.startOffset !== e.endOffset) }, e.prototype.restoreSelection = function() { var e = window.getSelection(),
                        t = this._currentRange;
                    e && t && (e.removeAllRanges(), e.addRange(t)) }, e.prototype.createEmptyRange = function() { var e, t = this.editor,
                        n = this.getRange(); if (n && this.isSelectionEmpty()) try { l.UA.isWebkit() ? (t.cmd.do("insertHTML", "&#8203;"), n.setEnd(n.endContainer, n.endOffset + 1), this.saveRange(n)) : (e = a.default("<strong>&#8203;</strong>"), t.cmd.do("insertElem", e), this.createRangeByElem(e, !0)) } catch (e) {} }, e.prototype.createRangeByElems = function(e, t) { var n = window.getSelection ? window.getSelection() : document.getSelection();
                    null == n || n.removeAllRanges(); var o = document.createRange();
                    o.setStart(e, 0), o.setEnd(t, t.childNodes.length || 1), this.saveRange(o), this.restoreSelection() }, e.prototype.createRangeByElem = function(e, t, n) { if (e.length) { var o = e.elems[0],
                            r = document.createRange();
                        n ? r.selectNodeContents(o) : r.selectNode(o), null != t && (r.collapse(t), t || (this.saveRange(r), this.editor.selection.moveCursor(o))), this.saveRange(r) } }, e.prototype.getSelectionRangeTopNodes = function() { var e, t, n = null === (e = this.getSelectionStartElem()) || void 0 === e ? void 0 : e.getNodeTop(this.editor),
                        o = null === (t = this.getSelectionEndElem()) || void 0 === t ? void 0 : t.getNodeTop(this.editor); return this.recordSelectionNodes(a.default(n), a.default(o)) }, e.prototype.moveCursor = function(e, t) { var n, o = this.getRange(),
                        r = 3 === e.nodeType ? null === (n = e.nodeValue) || void 0 === n ? void 0 : n.length : e.childNodes.length;
                    (l.UA.isFirefox || l.UA.isIE()) && 0 !== r && (3 !== e.nodeType && "BR" !== e.childNodes[r - 1].nodeName || (r -= 1)); var i = null != t ? t : r;
                    o && e && (o.setStart(e, i), o.setEnd(e, i), this.restoreSelection()) }, e.prototype.getCursorPos = function() { var e = window.getSelection(); return null == e ? void 0 : e.anchorOffset }, e.prototype.clearWindowSelectionRange = function() { var e = window.getSelection();
                    e && e.removeAllRanges() }, e.prototype.recordSelectionNodes = function(e, t) { for (var n = [], o = e, r = this.editor.$textElem, i = !0; i;) { var l = null == o ? void 0 : o.getNodeTop(this.editor); "BODY" === l.getNodeName() && (i = !1), l.length > 0 && (n.push(a.default(o)), (null == t ? void 0 : t.equal(l)) || r.equal(l) ? i = !1 : o = l.getNextSibling()) } return n }, e }();
        t.default = u }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(2)),
            i = function() {
                function e(e) { this.editor = e } return e.prototype.do = function(e, t) { var n = this.editor;
                    n.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true"); var o = n.selection; if (o.getRange()) { switch (o.restoreSelection(), e) {
                            case "insertHTML":
                                this.insertHTML(t); break;
                            case "insertElem":
                                this.insertElem(t); break;
                            default:
                                this.execCommand(e, t) }
                        n.menus.changeActive(), o.saveRange(), o.restoreSelection() } }, e.prototype.insertHTML = function(e) { var t = this.editor,
                        n = t.selection.getRange(); if (null != n)
                        if (this.queryCommandSupported("insertHTML")) this.execCommand("insertHTML", e);
                        else if (n.insertNode) { if (n.deleteContents(), r.default(e).elems.length > 0) n.insertNode(r.default(e).elems[0]);
                        else { var o = document.createElement("p");
                            o.appendChild(document.createTextNode(e)), n.insertNode(o) }
                        t.selection.collapseRange() } }, e.prototype.insertElem = function(e) { var t = this.editor.selection.getRange();
                    null != t && t.insertNode && (t.deleteContents(), t.insertNode(e.elems[0])) }, e.prototype.execCommand = function(e, t) { document.execCommand(e, !1, t) }, e.prototype.queryCommandValue = function(e) { return document.queryCommandValue(e) }, e.prototype.queryCommandState = function(e) { return document.queryCommandState(e) }, e.prototype.queryCommandSupported = function(e) { return document.queryCommandSupported(e) }, e }();
        t.default = i }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(31)),
            i = o(n(19)),
            a = o(n(3)),
            l = o(n(27)),
            u = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var c = u(n(2)),
            s = u(n(295)),
            f = n(7),
            d = u(n(307)),
            p = u(n(308)),
            v = function() {
                function e(e) { this.editor = e, this.eventHooks = { onBlurEvents: [], changeEvents: [], dropEvents: [], clickEvents: [], keydownEvents: [], keyupEvents: [], tabUpEvents: [], tabDownEvents: [], enterUpEvents: [], enterDownEvents: [], deleteUpEvents: [], deleteDownEvents: [], pasteEvents: [], linkClickEvents: [], codeClickEvents: [], textScrollEvents: [], toolbarClickEvents: [], imgClickEvents: [], imgDragBarMouseDownEvents: [], tableClickEvents: [], menuClickEvents: [], dropListMenuHoverEvents: [], splitLineEvents: [], videoClickEvents: [] } } return e.prototype.init = function() { this._saveRange(), this._bindEventHooks(), s.default(this) }, e.prototype.togglePlaceholder = function() { var e, t = this.html(),
                        n = (0, l.default)(e = this.editor.$textContainerElem).call(e, ".placeholder");
                    n.hide(), t && " " !== t || n.show() }, e.prototype.clear = function() { this.html("<p><br></p>") }, e.prototype.html = function(e) { var t = this.editor,
                        n = t.$textElem; if (null == e) { var o = n.html(),
                            l = (o = (o = (o = o.replace(/\u200b/gm, "")).replace(/<p><\/p>/gim, "")).replace(/<p><br\/?><\/p>$/gim, "")).match(/<(img|br|hr|input)[^>]*>/gi); return null !== l && (0, a.default)(l).call(l, (function(e) { e.match(/\/>/) || (o = o.replace(e, e.substring(0, e.length - 1) + "/>")) })), o } "" === (e = (0, i.default)(e).call(e)) && (e = "<p><br></p>"), 0 !== (0, r.default)(e).call(e, "<") && (e = "<p>" + e + "</p>"), e = e.replace(/\s+</g, "<"), n.html(e), t.initSelection() }, e.prototype.setJSON = function(e) { var t = p.default(e).children(),
                        n = this.editor.$textElem;
                    t && n.replaceChildAll(t) }, e.prototype.getJSON = function() { var e = this.editor.$textElem; return d.default(e) }, e.prototype.text = function(e) { var t = this.editor,
                        n = t.$textElem; if (null == e) { var o = n.text(); return o = o.replace(/\u200b/gm, "") }
                    n.text("<p>" + e + "</p>"), t.initSelection() }, e.prototype.append = function(e) { var t, n = this.editor,
                        o = n.$textElem; if (0 !== (0, r.default)(e).call(e, "<") && (e = "<p>" + e + "</p>"), /(<p><br><\/p>)+$/g.test((0, i.default)(t = o.html()).call(t))) { var a = o.html().replace(/(.*)<p><br><\/p>/, "$1" + e);
                        this.html(a) } else o.append(c.default(e));
                    n.initSelection() }, e.prototype._saveRange = function() { var e = this.editor,
                        t = e.$textElem;

                    function n() { e.selection.saveRange(), e.menus.changeActive() }
                    t.on("keyup", n), t.on("click", (function e() { n(), t.off("click", e) })), t.on("mousedown", (function() { t.on("mouseleave", n) })), t.on("mouseup", (function() { var o = e.selection.getRange(); if (null != o) { var r = o.startOffset,
                                i = o.endOffset,
                                a = null == o ? void 0 : o.endContainer;
                            r !== i && null != a && (null == o || o.setStart(a, i)), n(), t.off("mouseleave", n) } })) }, e.prototype._bindEventHooks = function() { var e = this.editor,
                        t = e.$textElem,
                        n = this.eventHooks;

                    function o(e) { e.preventDefault() }
                    t.on("click", (function(e) { var t = n.clickEvents;
                        (0, a.default)(t).call(t, (function(t) { return t(e) })) })), t.on("keyup", (function(e) { if (13 === e.keyCode) { var t = n.enterUpEvents;
                            (0, a.default)(t).call(t, (function(t) { return t(e) })) } })), t.on("keyup", (function(e) { var t = n.keyupEvents;
                        (0, a.default)(t).call(t, (function(t) { return t(e) })) })), t.on("keydown", (function(e) { var t = n.keydownEvents;
                        (0, a.default)(t).call(t, (function(t) { return t(e) })) })), t.on("keyup", (function(e) { if (8 === e.keyCode) { var t = n.deleteUpEvents;
                            (0, a.default)(t).call(t, (function(t) { return t(e) })) } })), t.on("keydown", (function(e) { if (8 === e.keyCode) { var t = n.deleteDownEvents;
                            (0, a.default)(t).call(t, (function(t) { return t(e) })) } })), t.on("paste", (function(e) { if (!f.UA.isIE()) { e.preventDefault(); var t = n.pasteEvents;
                            (0, a.default)(t).call(t, (function(t) { return t(e) })) } })), t.on("keydown", (function(t) {
                        (e.isFocus || e.isCompatibleMode) && (t.ctrlKey || t.metaKey) && 90 === t.keyCode && (t.preventDefault(), t.shiftKey ? e.history.restore() : e.history.revoke()) })), t.on("keyup", (function(e) { if (9 === e.keyCode) { e.preventDefault(); var t = n.tabUpEvents;
                            (0, a.default)(t).call(t, (function(t) { return t(e) })) } })), t.on("keydown", (function(e) { if (9 === e.keyCode) { e.preventDefault(); var t = n.tabDownEvents;
                            (0, a.default)(t).call(t, (function(t) { return t(e) })) } })), t.on("scroll", f.throttle((function(e) { var t = n.textScrollEvents;
                        (0, a.default)(t).call(t, (function(t) { return t(e) })) }), 100)), c.default(document).on("dragleave", o).on("drop", o).on("dragenter", o).on("dragover", o), e.beforeDestroy((function() { c.default(document).off("dragleave", o).off("drop", o).off("dragenter", o).off("dragover", o) })), t.on("drop", (function(e) { e.preventDefault(); var t = n.dropEvents;
                        (0, a.default)(t).call(t, (function(t) { return t(e) })) })), t.on("click", (function(e) { var t = null,
                            o = e.target,
                            r = c.default(o); if ("A" === r.getNodeName()) t = r;
                        else { var i = r.parentUntil("a");
                            null != i && (t = i) } if (t) { var l = n.linkClickEvents;
                            (0, a.default)(l).call(l, (function(e) { return e(t) })) } })), t.on("click", (function(e) { var t = null,
                            o = e.target,
                            r = c.default(o); if ("IMG" !== r.getNodeName() || r.elems[0].getAttribute("data-emoji") || (e.stopPropagation(), t = r), t) { var i = n.imgClickEvents;
                            (0, a.default)(i).call(i, (function(e) { return e(t) })) } })), t.on("click", (function(e) { var t = null,
                            o = e.target,
                            r = c.default(o); if ("PRE" === r.getNodeName()) t = r;
                        else { var i = r.parentUntil("pre");
                            null !== i && (t = i) } if (t) { var l = n.codeClickEvents;
                            (0, a.default)(l).call(l, (function(e) { return e(t) })) } })), t.on("click", (function(t) { var o = null,
                            r = t.target,
                            i = c.default(r); if ("HR" === i.getNodeName() && (o = i), o) { e.selection.createRangeByElem(o), e.selection.restoreSelection(); var l = n.splitLineEvents;
                            (0, a.default)(l).call(l, (function(e) { return e(o) })) } })), e.$toolbarElem.on("click", (function(e) { var t = n.toolbarClickEvents;
                        (0, a.default)(t).call(t, (function(t) { return t(e) })) })), e.$textContainerElem.on("mousedown", (function(e) { var t = e.target; if (c.default(t).hasClass("w-e-img-drag-rb")) { var o = n.imgDragBarMouseDownEvents;
                            (0, a.default)(o).call(o, (function(e) { return e() })) } })), t.on("click", (function(t) { var o, r = t.target; if (o = c.default(r).parentUntilEditor("TABLE", e, r)) { var i = n.tableClickEvents;
                            (0, a.default)(i).call(i, (function(e) { return e(o) })) } })), t.on("keydown", (function(e) { if (13 === e.keyCode) { var t = n.enterDownEvents;
                            (0, a.default)(t).call(t, (function(t) { return t(e) })) } })), t.on("click", (function(e) { var t = null,
                            o = e.target,
                            r = c.default(o); if ("VIDEO" === r.getNodeName() && (e.stopPropagation(), t = r), t) { var i = n.videoClickEvents;
                            (0, a.default)(i).call(i, (function(e) { return e(t) })) } })) }, e }();
        t.default = v }, function(e, t, n) { var o = n(292);
        e.exports = o }, function(e, t, n) { var o = n(293),
            r = Array.prototype;
        e.exports = function(e) { var t = e.find; return e === r || e instanceof Array && t === r.find ? o : t } }, function(e, t, n) { n(294); var o = n(15);
        e.exports = o("Array").find }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(30).find,
            i = n(90),
            a = n(22),
            l = !0,
            u = a("find"); "find" in [] && Array(1).find((function() { l = !1 })), o({ target: "Array", proto: !0, forced: l || !u }, { find: function(e) { return r(this, e, arguments.length > 1 ? arguments[1] : void 0) } }), i("find") }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(296)),
            i = o(n(297)),
            a = o(n(298)),
            l = o(n(299)),
            u = o(n(306));
        t.default = function(e) { var t = e.editor,
                n = e.eventHooks;
            r.default(t, n.enterUpEvents, n.enterDownEvents), i.default(t, n.deleteUpEvents, n.deleteDownEvents), a.default(t, n.tabDownEvents), l.default(t, n.pasteEvents), u.default(t, n.imgClickEvents) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(2));
        t.default = function(e, t, n) {
            function o(t) { var n = r.default("<p><br></p>");
                n.insertBefore(t), e.selection.createRangeByElem(n, !0, !0), e.selection.restoreSelection(), t.remove() }
            t.push((function() { var t = e.$textElem,
                    n = e.selection.getSelectionContainerElem(),
                    r = n.parent(); "<code><br></code>" !== r.html() ? r.equal(t) && "P" !== n.getNodeName() && (n.text() || o(n)) : o(n) })), n.push((function(t) { var n;
                e.selection.saveRange(null === (n = getSelection()) || void 0 === n ? void 0 : n.getRangeAt(0)), e.selection.getSelectionContainerElem().id === e.textElemId && (t.preventDefault(), e.cmd.do("insertHTML", "<p><br></p>")) })) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(19)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = i(n(2));
        t.default = function(e, t, n) { t.push((function() { var t, n = e.$textElem,
                    o = (0, r.default)(t = n.html().toLowerCase()).call(t); if (!o || "<br>" === o) { var i = a.default("<p><br/></p>");
                    n.html(" "), n.append(i), e.selection.createRangeByElem(i, !1, !0), e.selection.restoreSelection(), e.selection.moveCursor(i.getNode(), 0) } })), n.push((function(t) { var n, o = e.$textElem; "<p><br></p>" !== (0, r.default)(n = o.html().toLowerCase()).call(n) || t.preventDefault() })) } }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.default = function(e, t) { t.push((function() { if (e.cmd.queryCommandSupported("insertHTML")) { var t = e.selection.getSelectionContainerElem(); if (t) { var n = t.parent(),
                            o = t.getNodeName(),
                            r = n.getNodeName(); "CODE" == o || "CODE" === r || "PRE" === r || /hljs/.test(r) ? e.cmd.do("insertHTML", e.config.languageTab) : e.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;") } } })) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(19)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = n(129),
            l = n(7),
            u = n(32),
            c = i(n(2));

        function s(e) { var t = e; return t = (t = t.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).replace(/<p><\/p>/gim, "<p><br></p>"), (0, r.default)(t).call(t) }
        t.default = function(e, t) { t.push((function(t) { var n = e.config,
                    o = n.pasteFilterStyle,
                    r = n.pasteIgnoreImg,
                    i = n.pasteTextHandle,
                    f = a.getPasteHtml(t, o, r),
                    d = a.getPasteText(t);
                d = d.replace(/\n/gm, "<br>"); var p = e.selection.getSelectionContainerElem(); if (p) { var v, h = null == p ? void 0 : p.getNodeName(),
                        A = null == p ? void 0 : p.getNodeTop(e),
                        g = ""; if (A.elems[0] && (g = null == A ? void 0 : A.getNodeName()), "CODE" === h || "PRE" === g) return i && l.isFunction(i) && (d = "" + (i(d) || "")), void e.cmd.do("insertHTML", (v = d, v.replace(/<br>|<br\/>/gm, "\n").replace(/<[^>]+>/gm, ""))); if (u.urlRegex.test(d) && o) return e.cmd.do("insertHTML", '<a href="' + d + '" target="_blank">' + d + "</a>"); if (f) try { if (i && l.isFunction(i) && (f = "" + (i(f) || "")), /[\.\#\@]?\w+[^{]+\{[^}]*\}/.test(f) && o) e.cmd.do("insertHTML", "" + s(d));
                        else { var m = s(f); if (function(e) { var t; if ("" === e) return !1; var n = document.createElement("div"); return n.innerHTML = e, "P" === (null === (t = n.firstChild) || void 0 === t ? void 0 : t.nodeName) }(m)) { var y = e.$textElem; if (y.equal(p)) return e.cmd.do("insertHTML", "" + s(f)), void e.selection.createEmptyRange();
                                y.append(c.default(m)),
                                    function(e) { if (!(null == e ? void 0 : e.length)) return !1; var t = e.elems[0]; return "P" === t.nodeName && "<br>" === t.innerHTML }(A) && A.remove(); var w = y.last(); if (!(null == w ? void 0 : w.length)) return;
                                e.selection.moveCursor(w.elems[0]) } else e.cmd.do("insertHTML", "" + s(f)) } } catch (t) { i && l.isFunction(i) && (d = "" + (i(d) || "")), e.cmd.do("insertHTML", "" + s(d)) } } })) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(70)),
            i = o(n(3)),
            a = o(n(19)),
            l = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var u = n(301),
            c = l(n(305));

        function s(e, t) { var n; return e = (0, a.default)(n = e.toLowerCase()).call(n), !!u.IGNORE_TAGS.has(e) || !(!t || "img" !== e) }
        t.default = function(e, t, n) { void 0 === t && (t = !0), void 0 === n && (n = !1); var o = [],
                l = "";
            (new c.default).parse(e, { startElement: function(e, c) { if (function(e) {
                            (e = (0, a.default)(e).call(e)) && (u.EMPTY_TAGS.has(e) || (l = e)) }(e), !s(e, n)) { var f = u.NECESSARY_ATTRS.get(e) || [],
                            d = [];
                        (0, i.default)(c).call(c, (function(e) { var n = e.name; "style" !== n ? !1 !== (0, r.default)(f).call(f, n) && d.push(e) : t || d.push(e) })); var p = function(e, t) { var n = "";
                            n = "<" + e; var o = []; return (0, i.default)(t).call(t, (function(e) { o.push(e.name + '="' + e.value + '"') })), o.length > 0 && (n = n + " " + o.join(" ")), n = n + (u.EMPTY_TAGS.has(e) ? "/" : "") + ">" }(e, d);
                        o.push(p) } }, characters: function(e) { e && (s(l, n) && /^</.test(e) || o.push(e)) }, endElement: function(e) { if (!s(e, n)) { var t = function(e) { return "</" + e + ">" }(e);
                        o.push(t), l = "" } }, comment: function(e) {} }); var f = o.join(""); return f = function(e) { var t = /<span>(.*?)<\/span>/; return e.replace(/<span>.*?<\/span>/gi, (function(e) { var n = e.match(t); return null == n ? "" : n[1] })) }(f) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(118)),
            i = o(n(130));
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }), t.TOP_LEVEL_TAGS = t.EMPTY_TAGS = t.NECESSARY_ATTRS = t.IGNORE_TAGS = void 0, t.IGNORE_TAGS = new i.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center"]), t.NECESSARY_ATTRS = new r.default([
            ["img", ["src", "alt"]],
            ["a", ["href", "target"]],
            ["td", ["colspan", "rowspan"]],
            ["th", ["colspan", "rowspan"]]
        ]), t.EMPTY_TAGS = new i.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), t.TOP_LEVEL_TAGS = new i.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]) }, function(e, t, n) { var o = n(303);
        e.exports = o }, function(e, t, n) { n(304), n(65), n(68), n(53); var o = n(9);
        e.exports = o.Set }, function(e, t, n) { "use strict"; var o = n(119),
            r = n(121);
        e.exports = o("Set", (function(e) { return function() { return e(this, arguments.length ? arguments[0] : void 0) } }), r) }, function(e, t) {
        function n() {}
        n.prototype = { handler: null, startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m, endTagRe: /^<\/([^>\s]+)[^>]*>/m, attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm, parse: function(e, t) { t && (this.contentHandler = t); for (var n, o, r, i = !1, a = this; e.length > 0;) "\x3c!--" == e.substring(0, 4) ? -1 != (r = e.indexOf("--\x3e")) ? (this.contentHandler.comment(e.substring(4, r)), e = e.substring(r + 3), i = !1) : i = !0 : "</" == e.substring(0, 2) ? this.endTagRe.test(e) ? (RegExp.leftContext, n = RegExp.lastMatch, o = RegExp.rightContext, n.replace(this.endTagRe, (function() { return a.parseEndTag.apply(a, arguments) })), e = o, i = !1) : i = !0 : "<" == e.charAt(0) && (this.startTagRe.test(e) ? (RegExp.leftContext, n = RegExp.lastMatch, o = RegExp.rightContext, n.replace(this.startTagRe, (function() { return a.parseStartTag.apply(a, arguments) })), e = o, i = !1) : i = !0), i && (-1 == (r = e.indexOf("<")) ? (this.contentHandler.characters(e), e = "") : (this.contentHandler.characters(e.substring(0, r)), e = e.substring(r))), i = !0 }, parseStartTag: function(e, t, n) { var o = this.parseAttributes(t, n);
                this.contentHandler.startElement(t, o) }, parseEndTag: function(e, t) { this.contentHandler.endElement(t) }, parseAttributes: function(e, t) { var n = this,
                    o = []; return t.replace(this.attrRe, (function(t, r, i, a, l, u, c, s) { o.push(n.parseAttribute(e, t, r, i, a, l, u, c, s)) })), o }, parseAttribute: function(e, t, n) { var o = "";
                arguments[7] ? o = arguments[8] : arguments[5] ? o = arguments[6] : arguments[3] && (o = arguments[4]); var r = !o && !arguments[3]; return { name: n, value: r ? null : o } } }, e.exports = n }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.default = function(e, t) { t.push((function(t) { e.selection.createRangeByElem(t), e.selection.restoreSelection() })) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = n(7),
            l = i(n(2));
        t.default = function e(t) { var n = [],
                o = t.childNodes() || []; return (0, r.default)(o).call(o, (function(t) { var o, r = t.nodeType; if (3 === r && (o = t.textContent || "", o = a.replaceHtmlSymbol(o)), 1 === r) {
                    (o = o = {}).tag = t.nodeName.toLowerCase(); for (var i = [], u = t.attributes, c = u.length || 0, s = 0; s < c; s++) { var f = u[s];
                        i.push({ name: f.name, value: f.value }) }
                    o.attrs = i, o.children = e(l.default(t)) }
                o && n.push(o) })), n } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(96)),
            i = o(n(3)),
            a = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var l = a(n(2));
        t.default = function e(t, n) { void 0 === n && (n = document.createElement("div")); var o = n; return (0, i.default)(t).call(t, (function(t) { var n, a;
                ("string" == typeof t && (n = document.createTextNode(t)), "object" === (0, r.default)(t)) && (n = document.createElement(t.tag), (0, i.default)(a = t.attrs).call(a, (function(e) { l.default(n).attr(e.name, e.value) })), t.children && t.children.length > 0 && e(t.children, n.getRootNode()));
                n && o.appendChild(n) })), l.default(o) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(55)),
            i = o(n(127)),
            a = o(n(131)),
            l = o(n(132)),
            u = o(n(3)),
            c = o(n(70)),
            s = o(n(71)),
            f = o(n(95)),
            d = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var p = d(n(117)),
            v = d(n(318)),
            h = d(n(2)),
            A = function() {
                function e(e) { this.editor = e, this.menuList = [], this.constructorList = v.default } return e.prototype.extend = function(e, t) { t && "function" == typeof t && (this.constructorList[e] = t) }, e.prototype.init = function() { var e, t, n = this,
                        o = this.editor.config,
                        r = o.excludeMenus;!1 === (0, f.default)(r) && (r = []), o.menus = (0, s.default)(e = o.menus).call(e, (function(e) { return !1 === (0, c.default)(r).call(r, e) })), (0, u.default)(t = o.menus).call(t, (function(e) { var t = n.constructorList[e];
                        n._initMenuList(e, t) })); for (var i = 0, a = (0, l.default)(p.default.globalCustomMenuConstructorList); i < a.length; i++) { var d = a[i],
                            v = d[0],
                            h = d[1];
                        this._initMenuList(v, h) }
                    this._addToToolbar(), o.showMenuTooltips && this._bindMenuTooltips() }, e.prototype._initMenuList = function(e, t) { var n; if (null != t && "function" == typeof t)
                        if ((0, a.default)(n = this.menuList).call(n, (function(t) { return t.key === e }))) console.warn("菜单名称重复:" + e);
                        else { var o = new t(this.editor);
                            o.key = e, this.menuList.push(o) } }, e.prototype._bindMenuTooltips = function() { var e = this.editor,
                        t = e.$toolbarElem,
                        n = h.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-up">\n            <div class="w-e-menu-tooltip-item-wrapper">\n              <div></div>\n            </div>\n          </div>');
                    n.css("visibility", "hidden"), t.append(n), n.css("z-index", e.zIndex.get("tooltip")); var o = 0;

                    function r() { o && clearTimeout(o) }

                    function i() { r(), n.css("visibility", "hidden") }
                    t.on("mouseover", (function(a) { var l, u, c = a.target,
                            s = h.default(c); if (s.isContain(t)) i();
                        else { if (null != s.parentUntil(".w-e-droplist")) i();
                            else if (s.attr("data-title")) l = s.attr("data-title"), u = s;
                            else { var f = s.parentUntil(".w-e-menu");
                                null != f && (l = f.attr("data-title"), u = f) } if (l && u) { r(); var d = u.getOffsetData();
                                n.text(e.i18next.t("menus.title." + l)); var p = n.getOffsetData(),
                                    v = d.left + d.width / 2 - p.width / 2;
                                n.css("left", v + "px"), n.css("top", -1 * d.height + "px"), o = window.setTimeout((function() { n.css("visibility", "visible") }), 200) } else i() } })).on("mouseleave", (function() { i() })) }, e.prototype._addToToolbar = function() { var e, t = this.editor.$toolbarElem;
                    (0, u.default)(e = this.menuList).call(e, (function(e) { var n = e.$elem;
                        n && t.append(n) })) }, e.prototype.menuFind = function(e) { for (var t = this.menuList, n = 0, o = t.length; n < o; n++)
                        if (t[n].key === e) return t[n];
                    return t[0] }, e.prototype.changeActive = function() { var e;
                    (0, u.default)(e = this.menuList).call(e, (function(e) { var t;
                        (0, i.default)((0, r.default)(t = e.tryChangeActive).call(t, e), 100) })) }, e }();
        t.default = A }, function(e, t, n) { var o = n(311);
        e.exports = o }, function(e, t, n) { var o = n(312),
            r = Array.prototype;
        e.exports = function(e) { var t = e.some; return e === r || e instanceof Array && t === r.some ? o : t } }, function(e, t, n) { n(313); var o = n(15);
        e.exports = o("Array").some }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(30).some,
            i = n(69),
            a = n(22),
            l = i("some"),
            u = a("some");
        o({ target: "Array", proto: !0, forced: !l || !u }, { some: function(e) { return r(this, e, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(e, t, n) { var o = n(315);
        e.exports = o }, function(e, t, n) { n(316); var o = n(9);
        e.exports = o.Object.entries }, function(e, t, n) { var o = n(6),
            r = n(317).entries;
        o({ target: "Object", stat: !0 }, { entries: function(e) { return r(e) } }) }, function(e, t, n) { var o = n(14),
            r = n(60),
            i = n(28),
            a = n(58).f,
            l = function(e) { return function(t) { for (var n, l = i(t), u = r(l), c = u.length, s = 0, f = []; c > s;) n = u[s++], o && !a.call(l, n) || f.push(e ? [n, l[n]] : l[n]); return f } };
        e.exports = { entries: l(!0), values: l(!1) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(319)),
            i = o(n(327)),
            a = o(n(332)),
            l = o(n(336)),
            u = o(n(337)),
            c = o(n(338)),
            s = o(n(339)),
            f = o(n(341)),
            d = o(n(343)),
            p = o(n(344)),
            v = o(n(347)),
            h = o(n(348)),
            A = o(n(349)),
            g = o(n(358)),
            m = o(n(372)),
            y = o(n(376)),
            w = o(n(137)),
            x = o(n(385)),
            b = o(n(387)),
            E = o(n(388)),
            _ = o(n(389)),
            C = o(n(404)),
            S = o(n(409)),
            M = o(n(412));
        t.default = { bold: r.default, head: i.default, italic: l.default, link: a.default, underline: u.default, strikeThrough: c.default, fontName: s.default, fontSize: f.default, justify: d.default, quote: p.default, backColor: v.default, foreColor: h.default, video: A.default, image: g.default, indent: m.default, emoticon: y.default, list: w.default, lineHeight: x.default, undo: b.default, redo: E.default, table: _.default, code: C.default, splitLine: S.default, todo: M.default } }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(23)),
            f = c(n(2)),
            d = function(e) {
                function t(t) { var n = f.default('<div class="w-e-menu" data-title="加粗">\n                <i class="w-e-icon-bold"></i>\n            </div>'); return e.call(this, n, t) || this } return u(t, e), t.prototype.clickHandler = function() { var e = this.editor,
                        t = e.selection.isSelectionEmpty();
                    t && e.selection.createEmptyRange(), e.cmd.do("bold"), t && (e.selection.collapseRange(), e.selection.restoreSelection()) }, t.prototype.tryChangeActive = function() { this.editor.cmd.queryCommandState("bold") ? this.active() : this.unActive() }, t }(s.default);
        t.default = d }, function(e, t, n) { var o = n(321);
        e.exports = o }, function(e, t, n) { n(322); var o = n(9);
        e.exports = o.Object.setPrototypeOf }, function(e, t, n) { n(6)({ target: "Object", stat: !0 }, { setPrototypeOf: n(82) }) }, function(e, t, n) { e.exports = n(324) }, function(e, t, n) { var o = n(122);
        e.exports = o }, function(e, t, n) { e.exports = n(326) }, function(e, t, n) { var o = n(124);
        e.exports = o }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(70)),
            a = r(n(328)),
            l = r(n(3)),
            u = r(n(27)),
            c = r(n(31)),
            s = r(n(1)),
            f = r(n(4)),
            d = r(n(5)),
            p = (o = function(e, t) { return (o = d.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, f.default)(t) : (n.prototype = t.prototype, new n) }),
            v = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, s.default)(t, "__esModule", { value: !0 }); var h = v(n(24)),
            A = v(n(2)),
            g = n(7),
            m = function(e) {
                function t(t) { var n = this,
                        o = A.default('<div class="w-e-menu" data-title="标题"><i class="w-e-icon-header"></i></div>'),
                        r = { width: 100, title: "设置标题", type: "list", list: [{ $elem: A.default("<h1>H1</h1>"), value: "<h1>" }, { $elem: A.default("<h2>H2</h2>"), value: "<h2>" }, { $elem: A.default("<h3>H3</h3>"), value: "<h3>" }, { $elem: A.default("<h4>H4</h4>"), value: "<h4>" }, { $elem: A.default("<h5>H5</h5>"), value: "<h5>" }, { $elem: A.default("<p>" + t.i18next.t("menus.dropListMenu.head.正文") + "</p>"), value: "<p>" }], clickHandler: function(e) { n.command(e) } }; return n = e.call(this, o, t, r) || this, t.config.onCatalogChange && (n.oldCatalogs = [], n.addListenerCatalog(), n.getCatalogs()), n } return p(t, e), t.prototype.command = function(e) { var t = this.editor,
                        n = t.selection.getSelectionContainerElem(); if (n && t.$textElem.equal(n)) this.setMultilineHead(e);
                    else { var o; if ((0, c.default)(o = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(o, A.default(n).getNodeName()) > -1) return;
                        t.cmd.do("formatBlock", e) } "<p>" !== e && this.addUidForSelectionElem() }, t.prototype.addUidForSelectionElem = function() { var e = this.editor.selection.getSelectionContainerElem(),
                        t = g.getRandomCode();
                    A.default(e).attr("id", t) }, t.prototype.addListenerCatalog = function() { var e = this;
                    this.editor.txt.eventHooks.changeEvents.push((function() { e.getCatalogs() })) }, t.prototype.getCatalogs = function() { var e = this.editor,
                        t = this.editor.$textElem,
                        n = e.config.onCatalogChange,
                        o = (0, u.default)(t).call(t, "h1,h2,h3,h4,h5"),
                        r = [];
                    (0, l.default)(o).call(o, (function(e, t) { var n = A.default(e),
                            o = n.attr("id"),
                            i = n.getNodeName(),
                            a = n.text();
                        o || (o = g.getRandomCode(), n.attr("id", o)), a && r.push({ tag: i, id: o, text: a }) })), (0, a.default)(this.oldCatalogs) !== (0, a.default)(r) && (this.oldCatalogs = r, n && n(r)) }, t.prototype.setMultilineHead = function(e) { var t, n, o = this,
                        r = this.editor,
                        i = r.selection,
                        a = null === (t = i.getSelectionContainerElem()) || void 0 === t ? void 0 : t.elems[0],
                        u = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"],
                        c = A.default(i.getSelectionStartElem()),
                        s = A.default(i.getSelectionEndElem());
                    s.elems[0].outerHTML !== A.default("<p><br></p>").elems[0].outerHTML || s.elems[0].nextSibling || (s = s.prev()); var f = [];
                    f.push(c.getNodeTop(r)); var d = [],
                        p = null === (n = i.getRange()) || void 0 === n ? void 0 : n.commonAncestorContainer.childNodes;
                    null == p || (0, l.default)(p).call(p, (function(e, t) { e === f[0].getNode() && d.push(t), e === s.getNodeTop(r).getNode() && d.push(t) })); for (var v = 0; f[v].getNode() !== s.getNodeTop(r).getNode();) { if (!f[v].elems[0]) return; var h = A.default(f[v].next().getNode());
                        f.push(h), v++ }
                    null == f || (0, l.default)(f).call(f, (function(t, n) { if (!o.hasTag(t, u)) { var r = A.default(e),
                                i = t.parent().getNode();
                            r.html("" + t.html()), i.insertBefore(r.getNode(), t.getNode()), t.remove() } })), i.createRangeByElems(a.children[d[0]], a.children[d[1]]) }, t.prototype.hasTag = function(e, t) { var n, o = this; if (!e) return !1; if ((0, i.default)(t).call(t, null == e ? void 0 : e.getNodeName())) return !0; var r = !1; return null === (n = e.children()) || void 0 === n || (0, l.default)(n).call(n, (function(e) { r = o.hasTag(A.default(e), t) })), r }, t.prototype.tryChangeActive = function() { var e = this.editor.cmd.queryCommandValue("formatBlock"); /^h/i.test(e) ? this.active() : this.unActive() }, t }(h.default);
        t.default = m }, function(e, t, n) { e.exports = n(329) }, function(e, t, n) { var o = n(330);
        e.exports = o }, function(e, t, n) { n(331); var o = n(9);
        o.JSON || (o.JSON = { stringify: JSON.stringify }), e.exports = function(e, t, n) { return o.JSON.stringify.apply(null, arguments) } }, function(e, t, n) { var o = n(6),
            r = n(29),
            i = n(11),
            a = r("JSON", "stringify"),
            l = /[\uD800-\uDFFF]/g,
            u = /^[\uD800-\uDBFF]$/,
            c = /^[\uDC00-\uDFFF]$/,
            s = function(e, t, n) { var o = n.charAt(t - 1),
                    r = n.charAt(t + 1); return u.test(e) && !c.test(r) || c.test(e) && !u.test(o) ? "\\u" + e.charCodeAt(0).toString(16) : e },
            f = i((function() { return '"\\udf06\\ud834"' !== a("\udf06\ud834") || '"\\udead"' !== a("\udead") }));
        a && o({ target: "JSON", stat: !0, forced: f }, { stringify: function(e, t, n) { var o = a.apply(null, arguments); return "string" == typeof o ? o.replace(l, s) : o } }) }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(35)),
            f = c(n(2)),
            d = c(n(333)),
            p = c(n(134)),
            v = c(n(33)),
            h = c(n(334)),
            A = function(e) {
                function t(t) { var n, o = f.default('<div class="w-e-menu" data-title="链接"><i class="w-e-icon-link"></i></div>'); return n = e.call(this, o, t) || this, h.default(t), n } return u(t, e), t.prototype.clickHandler = function() { var e, t = this.editor; if (this.isActive) { if (!(e = t.selection.getSelectionContainerElem())) return;
                        this.createPanel(e.text(), e.attr("href")) } else t.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(t.selection.getSelectionText(), "") }, t.prototype.createPanel = function(e, t) { var n = d.default(this.editor, e, t);
                    new v.default(this, n).create() }, t.prototype.tryChangeActive = function() { var e = this.editor;
                    p.default(e) ? this.active() : this.unActive() }, t }(s.default);
        t.default = A }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(19)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = n(7),
            l = i(n(2)),
            u = i(n(134));
        t.default = function(e, t, n) { var o, i = a.getRandom("input-link"),
                c = a.getRandom("input-text"),
                s = a.getRandom("btn-ok"),
                f = a.getRandom("btn-del"),
                d = u.default(e) ? "inline-block" : "none";

            function p() { if (u.default(e)) { var t = e.selection.getSelectionContainerElem();
                    t && (e.selection.createRangeByElem(t), e.selection.restoreSelection(), o = t) } } return { width: 300, height: 0, tabs: [{ title: e.i18next.t("menus.panelMenus.link.链接"), tpl: '<div>\n                        <input\n                            id="' + c + '"\n                            type="text"\n                            class="block"\n                            value="' + t + '"\n                            placeholder="' + e.i18next.t("menus.panelMenus.link.链接文字") + '"/>\n                        </td>\n                        <input\n                            id="' + i + '"\n                            type="text"\n                            class="block"\n                            value="' + n + '"\n                            placeholder="' + e.i18next.t("如") + ' https://..."/>\n                        </td>\n                        <div class="w-e-button-container">\n                            <button type="button" id="' + s + '" class="right">\n                                ' + e.i18next.t("插入") + '\n                            </button>\n                            <button type="button" id="' + f + '" class="gray right" style="display:' + d + '">\n                                ' + e.i18next.t("menus.panelMenus.link.取消链接") + "\n                            </button>\n                        </div>\n                    </div>", events: [{ selector: "#" + s, type: "click", fn: function() { var t, n, o = l.default("#" + i),
                                a = l.default("#" + c),
                                s = (0, r.default)(t = o.val()).call(t),
                                f = (0, r.default)(n = a.val()).call(n); if (s && (f || (f = s), function(t, n) { var o = e.config.linkCheck(t, n); if (void 0 === o);
                                    else { if (!0 === o) return !0;
                                        e.config.customAlert(o, "warning") } return !1 }(f, s))) return function(t, n) { u.default(e) ? (p(), e.cmd.do("insertHTML", '<a href="' + n + '" target="_blank">' + t + "</a>")) : e.cmd.do("insertHTML", '<a href="' + n + '" target="_blank">' + t + "</a>") }(f, s), !0 } }, { selector: "#" + f, type: "click", fn: function() { return function() { if (u.default(e)) { p(); var t = o.text();
                                    e.cmd.do("insertHTML", "<span>" + t + "</span>") } }(), !0 } }] }] } } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(335));
        t.default = function(e) { r.default(e) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(2)),
            i = o(n(36));
        t.default = function(e) { var t = function(e) { var t; return { showLinkTooltip: function(n) { var o = [{ $elem: r.default("<span>" + e.i18next.t("menus.panelMenus.link.查看链接") + "</span>"), onClick: function(e, t) { var n = t.attr("href"); return window.open(n, "_target"), !0 } }, { $elem: r.default("<span>" + e.i18next.t("menus.panelMenus.link.取消链接") + "</span>"), onClick: function(e, t) { e.selection.createRangeByElem(t), e.selection.restoreSelection(); var n = t.text(); return e.cmd.do("insertHTML", "<span>" + n + "</span>"), !0 } }];
                            (t = new i.default(e, n, o)).create() }, hideLinkTooltip: function() { t && (t.remove(), t = null) } } }(e),
                n = t.showLinkTooltip,
                o = t.hideLinkTooltip;
            e.txt.eventHooks.linkClickEvents.push(n), e.txt.eventHooks.clickEvents.push(o), e.txt.eventHooks.keyupEvents.push(o), e.txt.eventHooks.toolbarClickEvents.push(o), e.txt.eventHooks.menuClickEvents.push(o), e.txt.eventHooks.textScrollEvents.push(o) } }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(23)),
            f = c(n(2)),
            d = function(e) {
                function t(t) { var n = f.default('<div class="w-e-menu" data-title="斜体">\n                <i class="w-e-icon-italic"></i>\n            </div>'); return e.call(this, n, t) || this } return u(t, e), t.prototype.clickHandler = function() { var e = this.editor,
                        t = e.selection.isSelectionEmpty();
                    t && e.selection.createEmptyRange(), e.cmd.do("italic"), t && (e.selection.collapseRange(), e.selection.restoreSelection()) }, t.prototype.tryChangeActive = function() { this.editor.cmd.queryCommandState("italic") ? this.active() : this.unActive() }, t }(s.default);
        t.default = d }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(23)),
            f = c(n(2)),
            d = function(e) {
                function t(t) { var n = f.default('<div class="w-e-menu" data-title="下划线">\n                <i class="w-e-icon-underline"></i>\n            </div>'); return e.call(this, n, t) || this } return u(t, e), t.prototype.clickHandler = function() { var e = this.editor,
                        t = e.selection.isSelectionEmpty();
                    t && e.selection.createEmptyRange(), e.cmd.do("underline"), t && (e.selection.collapseRange(), e.selection.restoreSelection()) }, t.prototype.tryChangeActive = function() { this.editor.cmd.queryCommandState("underline") ? this.active() : this.unActive() }, t }(s.default);
        t.default = d }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(23)),
            f = c(n(2)),
            d = function(e) {
                function t(t) { var n = f.default('<div class="w-e-menu" data-title="删除线">\n                <i class="w-e-icon-strikethrough"></i>\n            </div>'); return e.call(this, n, t) || this } return u(t, e), t.prototype.clickHandler = function() { var e = this.editor,
                        t = e.selection.isSelectionEmpty();
                    t && e.selection.createEmptyRange(), e.cmd.do("strikeThrough"), t && (e.selection.collapseRange(), e.selection.restoreSelection()) }, t.prototype.tryChangeActive = function() { this.editor.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive() }, t }(s.default);
        t.default = d }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(24)),
            f = c(n(2)),
            d = c(n(340)),
            p = function(e) {
                function t(t) { var n = this,
                        o = f.default('<div class="w-e-menu" data-title="字体">\n                <i class="w-e-icon-font"></i>\n            </div>'),
                        r = { width: 100, title: "设置字体", type: "list", list: new d.default(t.config.fontNames).getItemList(), clickHandler: function(e) { n.command(e) } }; return n = e.call(this, o, t, r) || this } return u(t, e), t.prototype.command = function(e) { var t, n = this.editor,
                        o = n.selection.isSelectionEmpty(),
                        r = null === (t = n.selection.getSelectionContainerElem()) || void 0 === t ? void 0 : t.elems[0]; if (null != r) { var i = "p" !== (null == r ? void 0 : r.nodeName.toLowerCase()),
                            a = (null == r ? void 0 : r.getAttribute("face")) === e; if (o) { if (i && !a) { var l = n.selection.getSelectionRangeTopNodes();
                                n.selection.createRangeByElem(l[0]), n.selection.moveCursor(l[0].elems[0]) }
                            n.selection.createEmptyRange() }
                        n.cmd.do("fontName", e), o && (n.selection.collapseRange(), n.selection.restoreSelection()) } }, t.prototype.tryChangeActive = function() {}, t }(s.default);
        t.default = p }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = i(n(2)),
            l = function() {
                function e(e) { var t = this;
                    this.itemList = [], (0, r.default)(e).call(e, (function(e) { t.itemList.push({ $elem: a.default("<p style=\"font-family:'" + e + "'\">" + e + "</p>"), value: e }) })) } return e.prototype.getItemList = function() { return this.itemList }, e }();
        t.default = l }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(24)),
            f = c(n(2)),
            d = c(n(342)),
            p = function(e) {
                function t(t) { var n = this,
                        o = f.default('<div class="w-e-menu" data-title="字号">\n                <i class="w-e-icon-text-heigh"></i>\n            </div>'),
                        r = { width: 160, title: "设置字号", type: "list", list: new d.default(t.config.fontSizes).getItemList(), clickHandler: function(e) { n.command(e) } }; return n = e.call(this, o, t, r) || this } return u(t, e), t.prototype.command = function(e) { var t, n = this.editor,
                        o = n.selection.isSelectionEmpty(),
                        r = null === (t = n.selection.getSelectionContainerElem()) || void 0 === t ? void 0 : t.elems[0]; if (null != r) { var i = "p" !== (null == r ? void 0 : r.nodeName.toLowerCase()),
                            a = (null == r ? void 0 : r.getAttribute("size")) === e; if (o) { if (i && !a) { var l = n.selection.getSelectionRangeTopNodes();
                                n.selection.createRangeByElem(l[0]), n.selection.moveCursor(l[0].elems[0]) }
                            n.selection.createEmptyRange() }
                        n.cmd.do("fontSize", e), o && (n.selection.collapseRange(), n.selection.restoreSelection()) } }, t.prototype.tryChangeActive = function() {}, t }(s.default);
        t.default = p }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(2)),
            i = function() {
                function e(e) { for (var t in this.itemList = [], e) { var n = e[t];
                        this.itemList.push({ $elem: r.default('<p style="font-size:' + t + '">' + n.name + "</p>"), value: n.value }) } } return e.prototype.getItemList = function() { return this.itemList }, e }();
        t.default = i }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(31)),
            a = r(n(3)),
            l = r(n(1)),
            u = r(n(4)),
            c = r(n(5)),
            s = (o = function(e, t) { return (o = c.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, u.default)(t) : (n.prototype = t.prototype, new n) }),
            f = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, l.default)(t, "__esModule", { value: !0 }); var d = f(n(24)),
            p = f(n(2)),
            v = ["LI"],
            h = ["UL", "BLOCKQUOTE"],
            A = function(e) {
                function t(t) { var n = this,
                        o = p.default('<div class="w-e-menu" data-title="对齐"><i class="w-e-icon-paragraph-left"></i></div>'),
                        r = { width: 100, title: "对齐方式", type: "list", list: [{ $elem: p.default('<p>\n                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>\n                            ' + t.i18next.t("menus.dropListMenu.justify.靠左") + "\n                        </p>"), value: "left" }, { $elem: p.default('<p>\n                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>\n                            ' + t.i18next.t("menus.dropListMenu.justify.居中") + "\n                        </p>"), value: "center" }, { $elem: p.default('<p>\n                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>\n                            ' + t.i18next.t("menus.dropListMenu.justify.靠右") + "\n                        </p>"), value: "right" }, { $elem: p.default('<p>\n                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>\n                            ' + t.i18next.t("menus.dropListMenu.justify.两端") + "\n                        </p>"), value: "justify" }], clickHandler: function(e) { n.command(e) } }; return n = e.call(this, o, t, r) || this } return s(t, e), t.prototype.command = function(e) { var t = this.editor,
                        n = t.selection,
                        o = n.getSelectionContainerElem();
                    n.saveRange(); var r = t.selection.getSelectionRangeTopNodes(); if (null == o ? void 0 : o.length)
                        if (this.isSpecialNode(o, r[0]) || this.isSpecialTopNode(r[0])) { var i = this.getSpecialNodeUntilTop(o, r[0]); if (null == i) return;
                            p.default(i).css("text-align", e) } else(0, a.default)(r).call(r, (function(t) { t.css("text-align", e) }));
                    n.restoreSelection() }, t.prototype.getSpecialNodeUntilTop = function(e, t) { for (var n = e.elems[0], o = t.elems[0]; null != n;) { if (-1 !== (0, i.default)(v).call(v, null == n ? void 0 : n.nodeName)) return n; if (n.parentNode === o) return n;
                        n = n.parentNode } return n }, t.prototype.isSpecialNode = function(e, t) { var n = this.getSpecialNodeUntilTop(e, t); return null != n && -1 !== (0, i.default)(v).call(v, n.nodeName) }, t.prototype.isSpecialTopNode = function(e) { var t; return null != e && -1 !== (0, i.default)(h).call(h, null === (t = e.elems[0]) || void 0 === t ? void 0 : t.nodeName) }, t.prototype.tryChangeActive = function() {}, t }(d.default);
        t.default = A }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(3)),
            a = r(n(1)),
            l = r(n(4)),
            u = r(n(5)),
            c = (o = function(e, t) { return (o = u.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, l.default)(t) : (n.prototype = t.prototype, new n) }),
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }); var f = s(n(2)),
            d = s(n(23)),
            p = s(n(345)),
            v = s(n(346)),
            h = function(e) {
                function t(t) { var n, o = f.default('<div class="w-e-menu" data-title="引用">\n                <i class="w-e-icon-quotes-left"></i>\n            </div>'); return n = e.call(this, o, t) || this, p.default(t), n } return c(t, e), t.prototype.clickHandler = function() { var e, t = this.editor,
                        n = t.selection.isSelectionEmpty(),
                        o = t.selection.getSelectionRangeTopNodes(),
                        r = o[o.length - 1]; if ("BLOCKQUOTE" !== this.getTopNodeName()) { var a = v.default(o);
                        a.insertAfter(r), this.delSelectNode(o); var l = null === (e = a.childNodes()) || void 0 === e ? void 0 : e.last().getNode(); if (null == l) return; return l.textContent ? t.selection.moveCursor(l) : t.selection.moveCursor(l, 0), this.tryChangeActive(), void f.default("<p><br></p>").insertAfter(a) } var u = f.default(r.childNodes()),
                        c = u.length,
                        s = r;
                    (0, i.default)(u).call(u, (function(e) { var t = f.default(e);
                        t.insertAfter(s), s = t })), r.remove(), t.selection.moveCursor(u.elems[c - 1]), this.tryChangeActive(), n && (t.selection.collapseRange(), t.selection.restoreSelection()) }, t.prototype.tryChangeActive = function() { var e; "BLOCKQUOTE" === (null === (e = this.editor.selection.getSelectionRangeTopNodes()[0]) || void 0 === e ? void 0 : e.getNodeName()) ? this.active(): this.unActive() }, t.prototype.getTopNodeName = function() { var e = this.editor.selection.getSelectionRangeTopNodes()[0]; return null == e ? void 0 : e.getNodeName() }, t.prototype.delSelectNode = function(e) {
                    (0, i.default)(e).call(e, (function(e) { e.remove() })) }, t }(d.default);
        t.default = h }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(2));
        t.default = function(e) { e.txt.eventHooks.enterDownEvents.push((function(t) { var n, o = e.selection.getSelectionContainerElem(),
                    i = e.selection.getSelectionRangeTopNodes()[0]; if ("BLOCKQUOTE" === (null == i ? void 0 : i.getNodeName())) { if ("BLOCKQUOTE" === o.getNodeName()) { var a = null === (n = o.childNodes()) || void 0 === n ? void 0 : n.getNode();
                        e.selection.moveCursor(a) } if ("" === o.text()) { t.preventDefault(), o.remove(); var l = r.default("<p><br></p>");
                        l.insertAfter(i), e.selection.moveCursor(l.getNode(), 0) } "" === i.text() && i.remove() } })) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = i(n(2));
        t.default = function(e) { var t = a.default("<blockquote></blockquote>"); return (0, r.default)(e).call(e, (function(e) { t.append(e.clone(!0)) })), t } }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(26)),
            a = r(n(1)),
            l = r(n(4)),
            u = r(n(5)),
            c = (o = function(e, t) { return (o = u.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, l.default)(t) : (n.prototype = t.prototype, new n) }),
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }); var f = s(n(24)),
            d = s(n(2)),
            p = n(7),
            v = function(e) {
                function t(t) { var n, o = this,
                        r = d.default('<div class="w-e-menu" data-title="背景色">\n                <i class="w-e-icon-paint-brush"></i>\n            </div>'),
                        a = { width: 120, title: "背景颜色", type: "inline-block", list: (0, i.default)(n = t.config.colors).call(n, (function(e) { return { $elem: d.default('<i style="color:' + e + ';" class="w-e-icon-paint-brush"></i>'), value: e } })), clickHandler: function(e) { o.command(e) } }; return o = e.call(this, r, t, a) || this } return c(t, e), t.prototype.command = function(e) { var t, n = this.editor,
                        o = n.selection.isSelectionEmpty(),
                        r = null === (t = n.selection.getSelectionContainerElem()) || void 0 === t ? void 0 : t.elems[0]; if (null != r) { var i = "p" !== (null == r ? void 0 : r.nodeName.toLowerCase()),
                            a = null == r ? void 0 : r.style.backgroundColor,
                            l = p.hexToRgb(e) === a; if (o) { if (i && !l) { var u = n.selection.getSelectionRangeTopNodes();
                                n.selection.createRangeByElem(u[0]), n.selection.moveCursor(u[0].elems[0]) }
                            n.selection.createEmptyRange() }
                        n.cmd.do("backColor", e), o && (n.selection.collapseRange(), n.selection.restoreSelection()) } }, t.prototype.tryChangeActive = function() {}, t }(f.default);
        t.default = v }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(26)),
            a = r(n(1)),
            l = r(n(4)),
            u = r(n(5)),
            c = (o = function(e, t) { return (o = u.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, l.default)(t) : (n.prototype = t.prototype, new n) }),
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }); var f = s(n(24)),
            d = s(n(2)),
            p = function(e) {
                function t(t) { var n, o = this,
                        r = d.default('<div class="w-e-menu" data-title="文字颜色">\n                <i class="w-e-icon-pencil2"></i>\n            </div>'),
                        a = { width: 120, title: "文字颜色", type: "inline-block", list: (0, i.default)(n = t.config.colors).call(n, (function(e) { return { $elem: d.default('<i style="color:' + e + ';" class="w-e-icon-pencil2"></i>'), value: e } })), clickHandler: function(e) { o.command(e) } }; return o = e.call(this, r, t, a) || this } return c(t, e), t.prototype.command = function(e) { var t, n = this.editor,
                        o = n.selection.isSelectionEmpty(),
                        r = null === (t = n.selection.getSelectionContainerElem()) || void 0 === t ? void 0 : t.elems[0]; if (null != r) { var i = "p" !== (null == r ? void 0 : r.nodeName.toLowerCase()),
                            a = (null == r ? void 0 : r.getAttribute("color")) === e; if (o) { if (i && !a) { var l = n.selection.getSelectionRangeTopNodes();
                                n.selection.createRangeByElem(l[0]), n.selection.moveCursor(l[0].elems[0]) }
                            n.selection.createEmptyRange() } var u = n.selection.getSelectionText(); if ("A" === r.nodeName && r.textContent === u) { var c = d.default("<span>&#8203;</span>").getNode();
                            r.appendChild(c) }
                        n.cmd.do("foreColor", e), o && (n.selection.collapseRange(), n.selection.restoreSelection()) } }, t.prototype.tryChangeActive = function() {}, t }(f.default);
        t.default = p }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(2)),
            f = c(n(33)),
            d = c(n(35)),
            p = c(n(350)),
            v = c(n(356)),
            h = function(e) {
                function t(t) { var n, o = s.default('<div class="w-e-menu" data-title="视频">\n                <i class="w-e-icon-play"></i>\n            </div>'); return n = e.call(this, o, t) || this, v.default(t), n } return u(t, e), t.prototype.clickHandler = function() { this.createPanel("") }, t.prototype.createPanel = function(e) { var t = p.default(this.editor, e);
                    new f.default(this, t).create() }, t.prototype.tryChangeActive = function() {}, t }(d.default);
        t.default = h }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(19)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = n(7),
            l = i(n(2)),
            u = i(n(351));
        t.default = function(e, t) { var n = e.config,
                o = new u.default(e),
                i = a.getRandom("input-iframe"),
                c = a.getRandom("btn-ok"),
                s = a.getRandom("input-upload"),
                f = a.getRandom("btn-local-ok"),
                d = [{ title: e.i18next.t("menus.panelMenus.video.上传视频"), tpl: '<div class="w-e-up-video-container">\n                    <div id="' + f + '" class="w-e-up-btn">\n                        <i class="w-e-icon-upload2"></i>\n                    </div>\n                    <div style="display:none;">\n                        <input id="' + s + '" type="file" accept="video/*"/>\n                    </div>\n                 </div>', events: [{ selector: "#" + f, type: "click", fn: function() { var e = l.default("#" + s).elems[0]; if (!e) return !0;
                            e.click() } }, { selector: "#" + s, type: "change", fn: function() { var e = l.default("#" + s).elems[0]; if (!e) return !0; var t = e.files; return t.length && o.uploadVideo(t), !0 } }] }, { title: e.i18next.t("menus.panelMenus.video.插入视频"), tpl: '<div>\n                    <input \n                        id="' + i + '" \n                        type="text" \n                        class="block" \n                        placeholder="' + e.i18next.t("如") + '：<iframe src=... ></iframe>"/>\n                    </td>\n                    <div class="w-e-button-container">\n                        <button type="button" id="' + c + '" class="right">\n                            ' + e.i18next.t("插入") + "\n                        </button>\n                    </div>\n                </div>", events: [{ selector: "#" + c, type: "click", fn: function() { var t, n = l.default("#" + i),
                                o = (0, r.default)(t = n.val()).call(t); if (o && function(t) { var n = e.config.onlineVideoCheck(t); return !0 === n || ("string" == typeof n && e.config.customAlert(n, "error"), !1) }(o)) return function(t) { e.cmd.do("insertHTML", t + "<p><br></p>"), e.config.onlineVideoCallback(t) }(o), !0 } }] }],
                p = { width: 300, height: 0, tabs: [] }; return window.FileReader && (n.uploadVideoServer || n.customUploadVideo) && p.tabs.push(d[0]), n.showLinkVideo && p.tabs.push(d[1]), p } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(31)),
            i = o(n(3)),
            a = o(n(55)),
            l = o(n(131)),
            u = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var c = n(7),
            s = u(n(135)),
            f = u(n(136)),
            d = function() {
                function e(e) { this.editor = e } return e.prototype.uploadVideo = function(e) { var t = this; if (e.length) { var n = this.editor,
                            o = n.config,
                            u = function(e) { return n.i18next.t("validate." + e) },
                            d = o.uploadVideoServer,
                            p = o.uploadVideoMaxSize / 1024 / 1024,
                            v = o.uploadVideoName,
                            h = o.uploadVideoParams,
                            A = o.uploadVideoParamsWithUrl,
                            g = o.uploadVideoHeaders,
                            m = o.uploadVideoHooks,
                            y = o.uploadVideoTimeout,
                            w = o.withVideoCredentials,
                            x = o.customUploadVideo,
                            b = o.uploadVideoAccept,
                            E = [],
                            _ = []; if (c.arrForEach(e, (function(e) { var t = e.name,
                                    n = e.size / 1024 / 1024;
                                t && n && (b instanceof Array ? (0, l.default)(b).call(b, (function(e) { return e === t.split(".")[t.split(".").length - 1] })) ? p < n ? _.push("【" + t + "】" + u("大于") + " " + p + "M") : E.push(e) : _.push("【" + t + "】" + u("不是视频")) : _.push("【" + b + "】" + u("uploadVideoAccept 不是Array"))) })), _.length) o.customAlert(u("视频验证未通过") + ": \n" + _.join("\n"), "warning");
                        else if (0 !== E.length)
                            if (x && "function" == typeof x) { var C;
                                x(E, (0, a.default)(C = this.insertVideo).call(C, this)) } else { var S = new FormData; if ((0, i.default)(E).call(E, (function(e, t) { var n = v || e.name;
                                        E.length > 1 && (n += t + 1), S.append(n, e) })), d) { var M = d.split("#");
                                    d = M[0]; var N = M[1] || "";
                                    (0, i.default)(c).call(c, h, (function(e, t) { A && ((0, r.default)(d).call(d, "?") > 0 ? d += "&" : d += "?", d = d + e + "=" + t), S.append(e, t) })), N && (d += "#" + N); var k = s.default(d, { timeout: y, formData: S, headers: g, withCredentials: !!w, beforeSend: function(e) { if (m.before) return m.before(e, n, E) }, onTimeout: function(e) { o.customAlert(u("上传视频超时"), "error"), m.timeout && m.timeout(e, n) }, onProgress: function(e, t) { var o = new f.default(n);
                                            t.lengthComputable && (e = t.loaded / t.total, o.show(e)) }, onError: function(e) { o.customAlert(u("上传视频错误"), "error", u("上传视频错误") + "，" + u("服务器返回状态") + ": " + e.status), m.error && m.error(e, n) }, onFail: function(e, t) { o.customAlert(u("上传视频失败"), "error", u("上传视频返回结果错误") + "，" + u("返回结果") + ": " + t), m.fail && m.fail(e, n, t) }, onSuccess: function(e, r) { if (m.customInsert) { var i;
                                                m.customInsert((0, a.default)(i = t.insertVideo).call(i, t), r, n) } else { if ("0" != r.errno) return o.customAlert(u("上传视频失败"), "error", u("上传视频返回结果错误") + "，" + u("返回结果") + " errno=" + r.errno), void(m.fail && m.fail(e, n, r)); var l = r.data;
                                                t.insertVideo(l.url), m.success && m.success(e, n, r) } } }); "string" == typeof k && o.customAlert(k, "error") } }
                        else o.customAlert(u("传入的文件不合法"), "warning") } }, e.prototype.insertVideo = function(e) { var t = this.editor,
                        n = t.config,
                        o = function(e, n) { return void 0 === n && (n = "validate."), t.i18next.t(n + e) }; if (n.customInsertVideo) n.customInsertVideo(e);
                    else { t.cmd.do("insertHTML", '<video src="' + e + '" controls="controls" style="max-width:100%"></video><p><br></p>'); var r = document.createElement("video");
                        r.onload = function() { r = null }, r.onerror = function() { n.customAlert(o("插入视频错误"), "error", "wangEditor: " + o("插入视频错误") + "，" + o("视频链接") + ' "' + e + '"，' + o("下载链接失败")), r = null }, r.onabort = function() { return r = null }, r.src = e } }, e }();
        t.default = d }, function(e, t, n) { e.exports = n(353) }, function(e, t, n) { var o = n(354);
        e.exports = o }, function(e, t, n) { n(355); var o = n(9);
        e.exports = o.Date.now }, function(e, t, n) { n(6)({ target: "Date", stat: !0 }, { now: function() { return (new Date).getTime() } }) }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(357));
        t.default = function(e) { r.default(e) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.createShowHideFn = void 0; var r = o(n(2)),
            i = o(n(36));

        function a(e) { var t; return { showVideoTooltip: function(n) { var o, a, l = [{ $elem: r.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(e, t) { return t.remove(), !0 } }, { $elem: r.default("<span>100%</span>"), onClick: function(e, t) { return t.attr("width", "100%"), t.removeAttr("height"), !0 } }, { $elem: r.default("<span>50%</span>"), onClick: function(e, t) { return t.attr("width", "50%"), t.removeAttr("height"), !0 } }, { $elem: r.default("<span>30%</span>"), onClick: function(e, t) { return t.attr("width", "30%"), t.removeAttr("height"), !0 } }, { $elem: r.default("<span>" + (o = "重置", void 0 === a && (a = ""), e.i18next.t(a + o) + "</span>")), onClick: function(e, t) { return t.removeAttr("width"), t.removeAttr("height"), !0 } }];
                    (t = new i.default(e, n, l)).create() }, hideVideoTooltip: function() { t && (t.remove(), t = null) } } }
        t.createShowHideFn = a, t.default = function(e) { var t = a(e),
                n = t.showVideoTooltip,
                o = t.hideVideoTooltip;
            e.txt.eventHooks.videoClickEvents.push(n), e.txt.eventHooks.clickEvents.push(o), e.txt.eventHooks.keyupEvents.push(o), e.txt.eventHooks.toolbarClickEvents.push(o), e.txt.eventHooks.menuClickEvents.push(o), e.txt.eventHooks.textScrollEvents.push(o), e.txt.eventHooks.changeEvents.push(o) } }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(27)),
            a = r(n(26)),
            l = r(n(1)),
            u = r(n(4)),
            c = r(n(5)),
            s = (o = function(e, t) { return (o = c.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, u.default)(t) : (n.prototype = t.prototype, new n) }),
            f = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, l.default)(t, "__esModule", { value: !0 }); var d = n(32),
            p = f(n(2)),
            v = f(n(33)),
            h = f(n(35)),
            A = f(n(359)),
            g = f(n(371)),
            m = function(e) {
                function t(t) { var n, o = this,
                        r = p.default('<div class="w-e-menu" data-title="图片"><i class="w-e-icon-image"></i></div>'),
                        l = g.default(t);
                    l.onlyUploadConf && (r = l.onlyUploadConf.$elem, (0, a.default)(n = l.onlyUploadConf.events).call(n, (function(e) { var t = e.selector,
                            n = e.type,
                            o = e.fn || d.EMPTY_FN;
                        (0, i.default)(r).call(r, t).on(n, (function(e) { e.stopPropagation(), o(e) })) }))); return (o = e.call(this, r, t) || this).imgPanelConfig = l, A.default(t), o } return s(t, e), t.prototype.clickHandler = function() { this.imgPanelConfig.onlyUploadConf || this.createPanel() }, t.prototype.createPanel = function() { var e = this.imgPanelConfig,
                        t = new v.default(this, e);
                    this.setPanel(t), t.create() }, t.prototype.tryChangeActive = function() {}, t }(h.default);
        t.default = m }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(360)),
            i = o(n(361)),
            a = o(n(362)),
            l = o(n(370));
        t.default = function(e) { r.default(e), i.default(e), a.default(e), l.default(e) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = n(129),
            i = o(n(99));

        function a(e, t) { if (! function(e, t) { var n = e.config,
                        o = n.pasteFilterStyle,
                        i = n.pasteIgnoreImg; return !!r.getPasteHtml(t, o, i) || !!r.getPasteText(t) }(t, e)) { var n = r.getPasteImgs(e); if (n.length) new i.default(t).uploadImg(n) } }
        t.default = function(e) { e.txt.eventHooks.pasteEvents.push((function(t) { a(t, e) })) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(99));
        t.default = function(e) { e.txt.eventHooks.dropEvents.push((function(t) { var n = t.dataTransfer && t.dataTransfer.files;
                n && n.length && new r.default(e).uploadImg(n) })) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(363)),
            i = o(n(27)),
            a = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }), t.createShowHideFn = void 0; var l = a(n(2));
        n(368); var u = n(7);

        function c(e, t, n, o, r) { e.attr("style", "width:" + t + "px; height:" + n + "px; left:" + o + "px; top:" + r + "px;") }

        function s(e) { var t, n = e.$textContainerElem,
                o = function(e, t) { var n = l.default('<div class="w-e-img-drag-mask">\n            <div class="w-e-img-drag-show-size"></div>\n            <div class="w-e-img-drag-rb"></div>\n         </div>'); return n.hide(), t.append(n), n }(0, n);

            function a() {
                (0, i.default)(n).call(n, ".w-e-img-drag-mask").hide() } return function(e, n) { e.on("click", (function(e) { e.stopPropagation() })), e.on("mousedown", ".w-e-img-drag-rb", (function(o) { if (o.preventDefault(), t) { var a = o.clientX,
                            u = o.clientY,
                            s = n.getBoundingClientRect(),
                            f = t.getBoundingClientRect(),
                            d = f.width,
                            p = f.height,
                            v = f.left - s.left,
                            h = f.top - s.top,
                            A = d / p,
                            g = d,
                            m = p,
                            y = l.default(document);
                        y.on("mousemove", x), y.on("mouseup", b), y.on("mouseleave", w) }

                    function w() { y.off("mousemove", x), y.off("mouseup", b) }

                    function x(t) { t.stopPropagation(), t.preventDefault(), g = d + (t.clientX - a), m = p + (t.clientY - u), g / m != A && (m = g / A), g = (0, r.default)(g.toFixed(2)), m = (0, r.default)(m.toFixed(2)), (0, i.default)(e).call(e, ".w-e-img-drag-show-size").text(g.toFixed(2).replace(".00", "") + "px * " + m.toFixed(2).replace(".00", "") + "px"), c(e, g, m, v, h) }

                    function b() { t.attr("width", g + ""), t.attr("height", m + ""); var n = t.getBoundingClientRect();
                        c(e, g, m, n.left - s.left, n.top - s.top), w() } })) }(o, n), l.default(document).on("click", a), e.beforeDestroy((function() { l.default(document).off("click", a) })), { showDrag: function(e) { if (u.UA.isIE()) return !1;
                    e && function(e, t, n) { var o = e.getBoundingClientRect(),
                            a = n.getBoundingClientRect(),
                            l = a.width.toFixed(2),
                            u = a.height.toFixed(2);
                        (0, i.default)(t).call(t, ".w-e-img-drag-show-size").text(l + "px * " + u + "px"), c(t, (0, r.default)(l), (0, r.default)(u), a.left - o.left, a.top - o.top), t.show() }(n, o, t = e) }, hideDrag: a } }
        t.createShowHideFn = s, t.default = function(e) { var t = s(e),
                n = t.showDrag,
                o = t.hideDrag;
            e.txt.eventHooks.imgClickEvents.push(n), e.txt.eventHooks.textScrollEvents.push(o), e.txt.eventHooks.keyupEvents.push(o), e.txt.eventHooks.toolbarClickEvents.push(o), e.txt.eventHooks.menuClickEvents.push(o), e.txt.eventHooks.changeEvents.push(o) } }, function(e, t, n) { e.exports = n(364) }, function(e, t, n) { var o = n(365);
        e.exports = o }, function(e, t, n) { n(366); var o = n(9);
        e.exports = o.parseFloat }, function(e, t, n) { var o = n(6),
            r = n(367);
        o({ global: !0, forced: parseFloat != r }, { parseFloat: r }) }, function(e, t, n) { var o = n(8),
            r = n(94).trim,
            i = n(72),
            a = o.parseFloat,
            l = 1 / a(i + "-0") != -1 / 0;
        e.exports = l ? function(e) { var t = r(String(e)),
                n = a(t); return 0 === n && "-" == t.charAt(0) ? -0 : n } : a }, function(e, t, n) { var o = n(20),
            r = n(369); "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
        ]); var i = { insert: "head", singleton: !1 };
        o(r, i);
        e.exports = r.locals || {} }, function(e, t, n) {
        (t = n(21)(!1)).push([e.i, ".w-e-text-container {\n  overflow: hidden;\n}\n.w-e-img-drag-mask {\n  position: absolute;\n  z-index: 1;\n  border: 1px dashed #ccc;\n  box-sizing: border-box;\n}\n.w-e-img-drag-mask .w-e-img-drag-rb {\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #ccc;\n  cursor: se-resize;\n}\n.w-e-img-drag-mask .w-e-img-drag-show-size {\n  min-width: 110px;\n  height: 22px;\n  line-height: 22px;\n  font-size: 14px;\n  color: #999;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #999;\n  color: #fff;\n  border-radius: 2px;\n  padding: 0 5px;\n}\n", ""]), e.exports = t }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.createShowHideFn = void 0; var r = o(n(2)),
            i = o(n(36));

        function a(e) { var t, n = function(t, n) { return void 0 === n && (n = ""), e.i18next.t(n + t) }; return { showImgTooltip: function(o) { var a = [{ $elem: r.default("<span class='w-e-icon-trash-o'></span>"), onClick: function(e, t) { return e.selection.createRangeByElem(t), e.selection.restoreSelection(), e.cmd.do("delete"), !0 } }, { $elem: r.default("<span>30%</span>"), onClick: function(e, t) { return t.attr("width", "30%"), t.removeAttr("height"), !0 } }, { $elem: r.default("<span>50%</span>"), onClick: function(e, t) { return t.attr("width", "50%"), t.removeAttr("height"), !0 } }, { $elem: r.default("<span>100%</span>"), onClick: function(e, t) { return t.attr("width", "100%"), t.removeAttr("height"), !0 } }];
                    a.push({ $elem: r.default("<span>" + n("重置") + "</span>"), onClick: function(e, t) { return t.removeAttr("width"), t.removeAttr("height"), !0 } }), o.attr("data-href") && a.push({ $elem: r.default("<span>" + n("查看链接") + "</span>"), onClick: function(e, t) { var n = t.attr("data-href"); return n && (n = decodeURIComponent(n), window.open(n, "_target")), !0 } }), (t = new i.default(e, o, a)).create() }, hideImgTooltip: function() { t && (t.remove(), t = null) } } }
        t.createShowHideFn = a, t.default = function(e) { var t = a(e),
                n = t.showImgTooltip,
                o = t.hideImgTooltip;
            e.txt.eventHooks.imgClickEvents.push(n), e.txt.eventHooks.clickEvents.push(o), e.txt.eventHooks.keyupEvents.push(o), e.txt.eventHooks.toolbarClickEvents.push(o), e.txt.eventHooks.menuClickEvents.push(o), e.txt.eventHooks.textScrollEvents.push(o), e.txt.eventHooks.imgDragBarMouseDownEvents.push(o), e.txt.eventHooks.changeEvents.push(o) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(19)),
            i = o(n(26)),
            a = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var l = a(n(2)),
            u = n(7),
            c = a(n(99));
        t.default = function(e) { var t, n = e.config,
                o = new c.default(e),
                a = u.getRandom("up-trigger-id"),
                s = u.getRandom("up-file-id"),
                f = u.getRandom("input-link-url"),
                d = u.getRandom("input-link-url-alt"),
                p = u.getRandom("input-link-url-href"),
                v = u.getRandom("btn-link"),
                h = function(t, n) { return void 0 === n && (n = "menus.panelMenus.image."), e.i18next.t(n + t) },
                A = 1 === n.uploadImgMaxLength ? "" : 'multiple="multiple"',
                g = (0, i.default)(t = n.uploadImgAccept).call(t, (function(e) { return "image/" + e })).join(","),
                m = function(e, t, n) { return '<div class="' + e + '" data-title="' + n + '">\n            <div id="' + a + '" class="w-e-up-btn">\n                <i class="' + t + '"></i>\n            </div>\n            <div style="display:none;">\n                <input id="' + s + '" type="file" ' + A + ' accept="' + g + '"/>\n            </div>\n        </div>' },
                y = [{ selector: "#" + a, type: "click", fn: function() { var e = l.default("#" + s).elems[0]; if (!e) return !0;
                        e.click() } }, { selector: "#" + s, type: "change", fn: function() { var e = l.default("#" + s).elems[0]; if (!e) return !0; var t = e.files; return (null == t ? void 0 : t.length) && o.uploadImg(t), !0 } }],
                w = ['<input\n            id="' + f + '"\n            type="text"\n            class="block"\n            placeholder="' + h("图片地址") + '"/>'];
            n.showLinkImgAlt && w.push('\n        <input\n            id="' + d + '"\n            type="text"\n            class="block"\n            placeholder="' + h("图片文字说明") + '"/>'), n.showLinkImgHref && w.push('\n        <input\n            id="' + p + '"\n            type="text"\n            class="block"\n            placeholder="' + h("跳转链接") + '"/>'); var x = [{ title: h("上传图片"), tpl: m("w-e-up-img-container", "w-e-icon-upload2", ""), events: y }, { title: h("网络图片"), tpl: "<div>\n                    " + w.join("") + '\n                    <div class="w-e-button-container">\n                        <button type="button" id="' + v + '" class="right">' + h("插入", "") + "</button>\n                    </div>\n                </div>", events: [{ selector: "#" + v, type: "click", fn: function() { var e, t = l.default("#" + f),
                                i = (0, r.default)(e = t.val()).call(e); if (i) { var a, u, c, s, v, h; if (n.showLinkImgAlt) a = (0, r.default)(u = l.default("#" + d).val()).call(u); if (n.showLinkImgHref) c = (0, r.default)(s = l.default("#" + p).val()).call(s); if (v = i, !0 === (h = n.linkImgCheck(v)) || ("string" == typeof h && n.customAlert(h, "error"), 0)) return o.insertImg(i, a, c), !0 } } }] }],
                b = { width: 300, height: 0, tabs: [], onlyUploadConf: { $elem: l.default(m("w-e-menu", "w-e-icon-image", "图片")), events: y } }; return window.FileReader && (n.uploadImgShowBase64 || n.uploadImgServer || n.customUploadImg) && b.tabs.push(x[0]), n.showLinkImg && (b.tabs.push(x[1]), b.onlyUploadConf = void 0), b } }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(3)),
            a = r(n(1)),
            l = r(n(4)),
            u = r(n(5)),
            c = (o = function(e, t) { return (o = u.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, l.default)(t) : (n.prototype = t.prototype, new n) }),
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }); var f = s(n(2)),
            d = s(n(24)),
            p = s(n(373)),
            v = function(e) {
                function t(t) { var n = this,
                        o = f.default('<div class="w-e-menu" data-title="缩进">\n                <i class="w-e-icon-indent-increase"></i>\n            </div>'),
                        r = { width: 130, title: "设置缩进", type: "list", list: [{ $elem: f.default('<p>\n                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>\n                            ' + t.i18next.t("menus.dropListMenu.indent.增加缩进") + "\n                        <p>"), value: "increase" }, { $elem: f.default('<p>\n                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>\n                            ' + t.i18next.t("menus.dropListMenu.indent.减少缩进") + "\n                        <p>"), value: "decrease" }], clickHandler: function(e) { n.command(e) } }; return n = e.call(this, o, t, r) || this } return c(t, e), t.prototype.command = function(e) { var t = this.editor,
                        n = t.selection.getSelectionContainerElem(); if (n && t.$textElem.equal(n)) { var o = t.selection.getSelectionRangeTopNodes();
                        o.length > 0 && (0, i.default)(o).call(o, (function(n) { p.default(f.default(n), e, t) })) } else n && n.length > 0 && (0, i.default)(n).call(n, (function(n) { p.default(f.default(n), e, t) }));
                    t.selection.restoreSelection(), this.tryChangeActive() }, t.prototype.tryChangeActive = function() { var e = this.editor,
                        t = e.selection.getSelectionStartElem(),
                        n = f.default(t).getNodeTop(e);
                    n.length <= 0 || ("" != n.elems[0].style.paddingLeft ? this.active() : this.unActive()) }, t }(d.default);
        t.default = v }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(19)),
            i = o(n(45)),
            a = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var l = a(n(374)),
            u = a(n(375)),
            c = /^(\d+)(\w+)$/,
            s = /^(\d+)%$/;

        function f(e) { var t = e.config.indentation; if ("string" == typeof t) { if (c.test(t)) { var n, o = (0, i.default)(n = (0, r.default)(t).call(t).match(c)).call(n, 1, 3),
                        a = o[0],
                        l = o[1]; return { value: Number(a), unit: l } } if (s.test(t)) return { value: Number((0, r.default)(t).call(t).match(s)[1]), unit: "%" } } else if (void 0 !== t.value && t.unit) return t; return { value: 2, unit: "em" } }
        t.default = function(e, t, n) { var o = e.getNodeTop(n); /^P$/i.test(o.getNodeName()) && ("increase" === t ? l.default(o, f(n)) : "decrease" === t && u.default(o, f(n))) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(45));
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }), t.default = function(e, t) { var n = e.elems[0]; if ("" === n.style.paddingLeft) e.css("padding-left", t.value + t.unit);
            else { var o = n.style.paddingLeft,
                    i = (0, r.default)(o).call(o, 0, o.length - t.unit.length),
                    a = Number(i) + t.value;
                e.css("padding-left", "" + a + t.unit) } } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(45));
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }), t.default = function(e, t) { var n = e.elems[0]; if ("" !== n.style.paddingLeft) { var o = n.style.paddingLeft,
                    i = (0, r.default)(o).call(o, 0, o.length - t.unit.length),
                    a = Number(i) - t.value;
                a > 0 ? e.css("padding-left", "" + a + t.unit) : e.css("padding-left", "") } } }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(2)),
            f = c(n(35)),
            d = c(n(33)),
            p = c(n(377)),
            v = function(e) {
                function t(t) { var n = s.default('<div class="w-e-menu" data-title="表情">\n                <i class="w-e-icon-happy"></i>\n            </div>'); return e.call(this, n, t) || this } return u(t, e), t.prototype.createPanel = function() { var e = p.default(this.editor);
                    new d.default(this, e).create() }, t.prototype.clickHandler = function() { this.createPanel() }, t.prototype.tryChangeActive = function() {}, t }(f.default);
        t.default = v }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(19)),
            i = o(n(71)),
            a = o(n(26)),
            l = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var u = l(n(2));
        t.default = function(e) { var t = e.config.emotions;

            function n(e) { var t, n, o = []; "image" == e.type ? (o = (0, a.default)(t = e.content).call(t, (function(e) { return "string" == typeof e ? "" : '<span  title="' + e.alt + '">\n                    <img class="eleImg" data-emoji="' + e.alt + '" style src="' + e.src + '" alt="[' + e.alt + ']">\n                </span>' })), o = (0, i.default)(o).call(o, (function(e) { return "" !== e }))) : o = (0, a.default)(n = e.content).call(n, (function(e) { return '<span class="eleImg" title="' + e + '">' + e + "</span>" })); return o.join("").replace(/&nbsp;/g, "") } return { width: 300, height: 230, tabs: (0, a.default)(t).call(t, (function(t) { return { title: e.i18next.t("menus.panelMenus.emoticon." + t.title), tpl: "<div>" + n(t) + "</div>", events: [{ selector: ".eleImg", type: "click", fn: function(t) { var n, o, i = u.default(t.target); "IMG" === i.getNodeName() ? n = (0, r.default)(o = i.parent().html()).call(o) : n = "<span>" + i.html() + "</span>"; return e.cmd.do("insertHTML", n), !0 } }] } })) } } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.createListHandle = t.ClassType = void 0; var r, i = o(n(2)),
            a = o(n(379)),
            l = o(n(381)),
            u = o(n(382)),
            c = o(n(383)),
            s = o(n(384));! function(e) { e.Wrap = "WrapListHandle", e.Join = "JoinListHandle", e.StartJoin = "StartJoinListHandle", e.EndJoin = "EndJoinListHandle", e.Other = "OtherListHandle" }(r = t.ClassType || (t.ClassType = {})); var f = { WrapListHandle: a.default, JoinListHandle: l.default, StartJoinListHandle: u.default, EndJoinListHandle: c.default, OtherListHandle: s.default };
        t.createListHandle = function(e, t, n) { if (e === r.Other && void 0 === n) throw new Error("other 类需要传入 range"); return e !== r.Other ? new f[e](t) : new f[e](t, n) }; var d = function() {
            function e(e) { this.handle = e, this.handle.exec() } return e.prototype.getSelectionRangeElem = function() { return i.default(this.handle.selectionRangeElem.get()) }, e }();
        t.default = d }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(3)),
            a = r(n(1)),
            l = r(n(4)),
            u = r(n(5)),
            c = (o = function(e, t) { return (o = u.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, l.default)(t) : (n.prototype = t.prototype, new n) }),
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }); var f = s(n(2)),
            d = n(57),
            p = n(46),
            v = function(e) {
                function t(t) { return e.call(this, t) || this } return c(t, e), t.prototype.exec = function() { var e, t = this.options,
                        n = t.listType,
                        o = t.listTarget,
                        r = t.$selectionElem,
                        a = t.$startElem,
                        l = t.$endElem,
                        u = [],
                        c = null == r ? void 0 : r.getNodeName(),
                        s = a.prior,
                        d = l.prior; if (!a.prior && !l.prior || !(null == s ? void 0 : s.prev().length) && !(null == d ? void 0 : d.next().length)) { var v;
                        (0, i.default)(v = null == r ? void 0 : r.children()).call(v, (function(e) { u.push(f.default(e)) })), c === n ? e = p.createElementFragment(u, p.createDocumentFragment(), "p") : (e = p.createElement(o), (0, i.default)(u).call(u, (function(t) { e.append(t.elems[0]) }))), this.selectionRangeElem.set(e), p.insertBefore(r, e, r.elems[0]), r.remove() } else { for (var h = s; h.length;) u.push(h), h = (null == d ? void 0 : d.equal(h)) ? f.default(void 0) : h.next(); var A = s.prev(),
                            g = d.next(); if (c === n ? e = p.createElementFragment(u, p.createDocumentFragment(), "p") : (e = p.createElement(o), (0, i.default)(u).call(u, (function(t) { e.append(t.elems[0]) }))), A.length && g.length) { for (var m = []; g.length;) m.push(g), g = g.next(); var y = p.createElement(c);
                            (0, i.default)(m).call(m, (function(e) { y.append(e.elems[0]) })), f.default(y).insertAfter(r), this.selectionRangeElem.set(e), (w = r.next()).length ? p.insertBefore(r, e, w.elems[0]) : r.parent().elems[0].append(e) } else if (A.length) { var w;
                            this.selectionRangeElem.set(e), (w = r.next()).length ? p.insertBefore(r, e, w.elems[0]) : r.parent().elems[0].append(e) } else this.selectionRangeElem.set(e), p.insertBefore(r, e, r.elems[0]) } }, t }(d.ListHandle);
        t.default = v }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3));
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var i = function() {
            function e() { this._element = null } return e.prototype.set = function(e) { if (e instanceof DocumentFragment) { var t, n = [];
                    (0, r.default)(t = e.childNodes).call(t, (function(e) { n.push(e) })), e = n }
                this._element = e }, e.prototype.get = function() { return this._element }, e.prototype.clear = function() { this._element = null }, e }();
        t.default = i }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(3)),
            a = r(n(1)),
            l = r(n(4)),
            u = r(n(5)),
            c = (o = function(e, t) { return (o = u.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, l.default)(t) : (n.prototype = t.prototype, new n) }),
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }); var f = s(n(2)),
            d = n(57),
            p = n(46),
            v = function(e) {
                function t(t) { return e.call(this, t) || this } return c(t, e), t.prototype.exec = function() { var e, t, n, o, r, a, l, u, c = this.options,
                        s = c.editor,
                        d = c.listType,
                        v = c.listTarget,
                        h = c.$startElem,
                        A = c.$endElem,
                        g = s.selection.getSelectionRangeTopNodes(),
                        m = null == h ? void 0 : h.getNodeName(); if (m === (null == A ? void 0 : A.getNodeName()))
                        if (g.length > 2)
                            if (g.shift(), g.pop(), u = p.createElementFragment(p.filterSelectionNodes(g), p.createDocumentFragment()), m === d) null === (e = A.children()) || void 0 === e || (0, i.default)(e).call(e, (function(e) { u.append(e) })), A.remove(), this.selectionRangeElem.set(u), h.elems[0].append(u);
                            else { for (var y = document.createDocumentFragment(), w = document.createDocumentFragment(), x = p.getStartPoint(h); x.length;) { var b = x.elems[0];
                                    x = x.next(), y.append(b) } for (var E = p.getEndPoint(A), _ = []; E.length;) _.unshift(E.elems[0]), E = E.prev();
                                (0, i.default)(_).call(_, (function(e) { w.append(e) })); var C = p.createElement(v);
                                C.append(y), C.append(u), C.append(w), u = C, this.selectionRangeElem.set(u), f.default(C).insertAfter(h), !(null === (t = h.children()) || void 0 === t ? void 0 : t.length) && h.remove(), !(null === (n = A.children()) || void 0 === n ? void 0 : n.length) && A.remove() }
                    else { g.length = 0; for (x = p.getStartPoint(h); x.length;) g.push(x), x = x.next(); for (E = p.getEndPoint(A), _ = []; E.length;) _.unshift(E), E = E.prev();
                        g.push.apply(g, _), m === d ? (u = p.createElementFragment(g, p.createDocumentFragment(), "p"), this.selectionRangeElem.set(u), p.insertBefore(h, u, A.elems[0])) : (u = p.createElement(v), (0, i.default)(g).call(g, (function(e) { u.append(e.elems[0]) })), this.selectionRangeElem.set(u), f.default(u).insertAfter(h)), !(null === (o = h.children()) || void 0 === o ? void 0 : o.length) && A.remove(), !(null === (r = A.children()) || void 0 === r ? void 0 : r.length) && A.remove() } else { var S = []; for (E = p.getEndPoint(A); E.length;) S.unshift(E), E = E.prev(); var M = []; for (x = p.getStartPoint(h); x.length;) M.push(x), x = x.next(); if (u = p.createDocumentFragment(), g.shift(), g.pop(), (0, i.default)(M).call(M, (function(e) { return u.append(e.elems[0]) })), u = p.createElementFragment(p.filterSelectionNodes(g), u), (0, i.default)(S).call(S, (function(e) { return u.append(e.elems[0]) })), this.selectionRangeElem.set(u), m === d) h.elems[0].append(u), !(null === (a = A.children()) || void 0 === a ? void 0 : a.length) && A.remove();
                        else if (null === (l = A.children()) || void 0 === l ? void 0 : l.length) { var N = A.children();
                            p.insertBefore(N, u, N.elems[0]) } else A.elems[0].append(u) } }, t }(d.ListHandle);
        t.default = v }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(3)),
            a = r(n(1)),
            l = r(n(4)),
            u = r(n(5)),
            c = (o = function(e, t) { return (o = u.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, l.default)(t) : (n.prototype = t.prototype, new n) }),
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }); var f = s(n(2)),
            d = n(57),
            p = n(46),
            v = function(e) {
                function t(t) { return e.call(this, t) || this } return c(t, e), t.prototype.exec = function() { var e, t, n = this.options,
                        o = n.editor,
                        r = n.listType,
                        a = n.listTarget,
                        l = n.$startElem,
                        u = o.selection.getSelectionRangeTopNodes(),
                        c = null == l ? void 0 : l.getNodeName();
                    u.shift(); for (var s = [], d = p.getStartPoint(l); d.length;) s.push(d), d = d.next();
                    c === r ? (t = p.createDocumentFragment(), (0, i.default)(s).call(s, (function(e) { return t.append(e.elems[0]) })), t = p.createElementFragment(p.filterSelectionNodes(u), t), this.selectionRangeElem.set(t), l.elems[0].append(t)) : (t = p.createElement(a), (0, i.default)(s).call(s, (function(e) { return t.append(e.elems[0]) })), t = p.createElementFragment(p.filterSelectionNodes(u), t), this.selectionRangeElem.set(t), f.default(t).insertAfter(l), !(null === (e = l.children()) || void 0 === e ? void 0 : e.length) && l.remove()) }, t }(d.ListHandle);
        t.default = v }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(3)),
            a = r(n(1)),
            l = r(n(4)),
            u = r(n(5)),
            c = (o = function(e, t) { return (o = u.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, l.default)(t) : (n.prototype = t.prototype, new n) }),
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }); var f = s(n(2)),
            d = n(57),
            p = n(46),
            v = function(e) {
                function t(t) { return e.call(this, t) || this } return c(t, e), t.prototype.exec = function() { var e, t, n, o = this.options,
                        r = o.editor,
                        a = o.listType,
                        l = o.listTarget,
                        u = o.$endElem,
                        c = r.selection.getSelectionRangeTopNodes(),
                        s = null == u ? void 0 : u.getNodeName();
                    c.pop(); for (var d = [], v = p.getEndPoint(u); v.length;) d.unshift(v), v = v.prev(); if (s === a)
                        if (n = p.createElementFragment(p.filterSelectionNodes(c), p.createDocumentFragment()), (0, i.default)(d).call(d, (function(e) { return n.append(e.elems[0]) })), this.selectionRangeElem.set(n), null === (e = u.children()) || void 0 === e ? void 0 : e.length) { var h = u.children();
                            p.insertBefore(h, n, h.elems[0]) } else u.elems[0].append(n);
                    else { var A = p.filterSelectionNodes(c);
                        A.push.apply(A, d), n = p.createElementFragment(A, p.createElement(l)), this.selectionRangeElem.set(n), f.default(n).insertBefore(u), !(null === (t = u.children()) || void 0 === t ? void 0 : t.length) && u.remove() } }, t }(d.ListHandle);
        t.default = v }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) });
        (0, i.default)(t, "__esModule", { value: !0 }); var c = n(57),
            s = n(46),
            f = function(e) {
                function t(t, n) { var o = e.call(this, t) || this; return o.range = n, o } return u(t, e), t.prototype.exec = function() { var e = this.options,
                        t = e.editor,
                        n = e.listTarget,
                        o = t.selection.getSelectionRangeTopNodes(),
                        r = s.createElementFragment(s.filterSelectionNodes(o), s.createElement(n));
                    this.selectionRangeElem.set(r), this.range.insertNode(r) }, t }(c.ListHandle);
        t.default = f }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(31)),
            a = r(n(3)),
            l = r(n(1)),
            u = r(n(4)),
            c = r(n(5)),
            s = (o = function(e, t) { return (o = c.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, u.default)(t) : (n.prototype = t.prototype, new n) }),
            f = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, l.default)(t, "__esModule", { value: !0 }); var d = f(n(24)),
            p = f(n(2)),
            v = f(n(386)),
            h = n(7),
            A = function(e) {
                function t(t) { var n = this,
                        o = p.default('<div class="w-e-menu" data-title="行高">\n                    <i class="w-e-icon-row-height"></i>\n                </div>'),
                        r = { width: 100, title: "设置行高", type: "list", list: new v.default(t, t.config.lineHeights).getItemList(), clickHandler: function(e) { t.selection.saveRange(), n.command(e) } }; return n = e.call(this, o, t, r) || this } return s(t, e), t.prototype.command = function(e) { var t, n = this,
                        o = window.getSelection ? window.getSelection() : document.getSelection(),
                        r = ["P"],
                        l = this.editor,
                        u = "";
                    l.selection.restoreSelection(); var c = p.default(l.selection.getSelectionContainerElem()); if (null == c ? void 0 : c.length) { var s = p.default(l.selection.getSelectionContainerElem()),
                            f = p.default(l.selection.getSelectionStartElem()).elems[0],
                            d = "",
                            v = [],
                            A = ""; if (c && l.$textElem.equal(c)) { if (h.UA.isIE()) return; var g = [],
                                m = [],
                                y = [],
                                w = p.default(l.selection.getSelectionStartElem()),
                                x = p.default(l.selection.getSelectionEndElem()),
                                b = null === (t = l.selection.getRange()) || void 0 === t ? void 0 : t.commonAncestorContainer.childNodes;
                            m.push(this.getDom(w.elems[0])), null == b || (0, a.default)(b).call(b, (function(e, t) { e === n.getDom(w.elems[0]) && g.push(t), e === n.getDom(x.elems[0]) && g.push(t) })); var E = 0,
                                _ = void 0; for (y.push(this.getDom(w.elems[0])); m[E] !== this.getDom(x.elems[0]);) _ = p.default(m[E].nextElementSibling).elems[0], -1 !== (0, i.default)(r).call(r, p.default(_).getNodeName()) ? (y.push(_), m.push(_)) : m.push(_), E++; if ("P" !== p.default(m[0]).getNodeName()) { E = 0; for (var C = 0; C < m.length; C++)
                                    if ("P" === p.default(m[C]).getNodeName()) { E = C; break }
                                if (0 === E) return; for (var S = 0; S !== E;) m.shift(), S++ } return this.setRange(m[0], m[m.length - 1]), (0, a.default)(m).call(m, (function(t) { d = t.getAttribute("style"), v = d ? d.split(";") : [], A = "", "P" === p.default(t).getNodeName() ? (A = e ? n.styleProcessing(v) + "line-height:" + e + ";" : n.styleProcessing(v), u = u + "<" + p.default(t).getNodeName().toLowerCase() + ' style="' + A + '">' + t.innerHTML + "</" + p.default(t).getNodeName().toLowerCase() + ">") : (A = n.styleProcessing(v), u = u + "<" + p.default(t).getNodeName().toLowerCase() + ' style="' + A + '">' + t.innerHTML + "</" + p.default(t).getNodeName().toLowerCase() + ">") })), this.action(u, l), f = s.elems[0], void this.setRange(f.children[g[0]], f.children[g[1]]) }
                        f = this.getDom(f), -1 !== (0, i.default)(r).call(r, p.default(f).getNodeName()) && (d = f.getAttribute("style"), v = d ? d.split(";") : [], null == o || o.selectAllChildren(f), l.selection.saveRange(), e ? (A = d ? this.styleProcessing(v) + "line-height:" + e + ";" : "line-height:" + e + ";", u = "<" + p.default(f).getNodeName().toLowerCase() + ' style="' + A + '">' + f.innerHTML + "</" + p.default(f).getNodeName().toLowerCase() + ">", "BLOCKQUOTE" === p.default(f).getNodeName() ? p.default(f).css("line-height", e) : this.action(u, l)) : d && (A = this.styleProcessing(v), u = "" === A ? "<" + p.default(f).getNodeName().toLowerCase() + ">" + f.innerHTML + "</" + p.default(f).getNodeName().toLowerCase() + ">" : "<" + p.default(f).getNodeName().toLowerCase() + ' style="' + A + '">' + f.innerHTML + "</" + p.default(f).getNodeName().toLowerCase() + ">", this.action(u, l))) } }, t.prototype.getDom = function(e) { var t = p.default(e).elems[0]; if (!t.parentNode) return t; return t = function e(t, n) { var o = p.default(t.parentNode); return n.$textElem.equal(o) ? t : e(o.elems[0], n) }(t, this.editor) }, t.prototype.action = function(e, t) { t.cmd.do("insertHTML", e) }, t.prototype.styleProcessing = function(e) { var t = ""; return (0, a.default)(e).call(e, (function(e) { "" !== e && -1 === (0, i.default)(e).call(e, "line-height") && (t = t + e + ";") })), t }, t.prototype.setRange = function(e, t) { var n = this.editor,
                        o = window.getSelection ? window.getSelection() : document.getSelection();
                    null == o || o.removeAllRanges(); var r = document.createRange(),
                        i = e,
                        a = t;
                    r.setStart(i, 0), r.setEnd(a, 1), null == o || o.addRange(r), n.selection.saveRange(), null == o || o.removeAllRanges(), n.selection.restoreSelection() }, t.prototype.tryChangeActive = function() { var e = this.editor,
                        t = e.selection.getSelectionContainerElem(); if (!t || !e.$textElem.equal(t)) { var n = p.default(e.selection.getSelectionStartElem()); if (0 !== n.length) { var o = (n = this.getDom(n.elems[0])).getAttribute("style") ? n.getAttribute("style") : "";
                            o && -1 !== (0, i.default)(o).call(o, "line-height") ? this.active() : this.unActive() } } }, t }(d.default);
        t.default = A }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = i(n(2)),
            l = function() {
                function e(e, t) { var n = this;
                    this.itemList = [{ $elem: a.default("<span>" + e.i18next.t("默认") + "</span>"), value: "" }], (0, r.default)(t).call(t, (function(e) { n.itemList.push({ $elem: a.default("<span>" + e + "</span>"), value: e }) })) } return e.prototype.getItemList = function() { return this.itemList }, e }();
        t.default = l }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(2)),
            f = function(e) {
                function t(t) { var n = s.default('<div class="w-e-menu" data-title="撤销">\n                <i class="w-e-icon-undo"></i>\n            </div>'); return e.call(this, n, t) || this } return u(t, e), t.prototype.clickHandler = function() { var e = this.editor;
                    e.history.revoke(); var t = e.$textElem.children(); if (null == t ? void 0 : t.length) { var n = t.last();
                        e.selection.createRangeByElem(n, !1, !0), e.selection.restoreSelection() } }, t.prototype.tryChangeActive = function() { this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive()) }, t }(c(n(23)).default);
        t.default = f }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(2)),
            f = function(e) {
                function t(t) { var n = s.default('<div class="w-e-menu" data-title="恢复">\n                <i class="w-e-icon-redo"></i>\n            </div>'); return e.call(this, n, t) || this } return u(t, e), t.prototype.clickHandler = function() { var e = this.editor;
                    e.history.restore(); var t = e.$textElem.children(); if (null == t ? void 0 : t.length) { var n = t.last();
                        e.selection.createRangeByElem(n, !1, !0), e.selection.restoreSelection() } }, t.prototype.tryChangeActive = function() { this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive()) }, t }(c(n(23)).default);
        t.default = f }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(35)),
            f = c(n(2)),
            d = c(n(390)),
            p = c(n(33)),
            v = c(n(399)),
            h = function(e) {
                function t(t) { var n, o = f.default('<div class="w-e-menu" data-title="表格"><i class="w-e-icon-table2"></i></div>'); return n = e.call(this, o, t) || this, v.default(t), n } return u(t, e), t.prototype.clickHandler = function() { this.createPanel() }, t.prototype.createPanel = function() { var e = d.default(this.editor);
                    new p.default(this, e).create() }, t.prototype.tryChangeActive = function() {}, t }(s.default);
        t.default = h }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(391)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = n(7),
            l = i(n(2));
        n(396); var u = i(n(398));

        function c(e) { return e > 0 && (0, r.default)(e) }
        t.default = function(e) { var t = new u.default(e),
                n = a.getRandom("w-col-id"),
                o = a.getRandom("w-row-id"),
                r = a.getRandom("btn-link"),
                i = "menus.panelMenus.table.",
                s = function(t) { return e.i18next.t(t) },
                f = [{ title: s(i + "插入表格"), tpl: '<div>\n                    <div class="w-e-table">\n                        <span>' + s("创建") + '</span>\n                        <input id="' + o + '"  type="text" class="w-e-table-input" value="5"/></td>\n                        <span>' + s(i + "行") + '</span>\n                        <input id="' + n + '" type="text" class="w-e-table-input" value="5"/></td>\n                        <span>' + (s(i + "列") + s(i + "的") + s(i + "表格")) + '</span>\n                    </div>\n                    <div class="w-e-button-container">\n                        <button type="button" id="' + r + '" class="right">' + s("插入") + "</button>\n                    </div>\n                </div>", events: [{ selector: "#" + r, type: "click", fn: function() { var r = Number(l.default("#" + n).val()),
                                i = Number(l.default("#" + o).val()); return c(i) && c(r) ? (t.createAction(i, r), !0) : (e.config.customAlert("表格行列请输入正整数", "warning"), !1) } }] }],
                d = { width: 330, height: 0, tabs: [] }; return d.tabs.push(f[0]), d } }, function(e, t, n) { e.exports = n(392) }, function(e, t, n) { var o = n(393);
        e.exports = o }, function(e, t, n) { n(394); var o = n(9);
        e.exports = o.Number.isInteger }, function(e, t, n) { n(6)({ target: "Number", stat: !0 }, { isInteger: n(395) }) }, function(e, t, n) { var o = n(13),
            r = Math.floor;
        e.exports = function(e) { return !o(e) && isFinite(e) && r(e) === e } }, function(e, t, n) { var o = n(20),
            r = n(397); "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
        ]); var i = { insert: "head", singleton: !1 };
        o(r, i);
        e.exports = r.locals || {} }, function(e, t, n) {
        (t = n(21)(!1)).push([e.i, ".w-e-table {\n  display: flex;\n}\n.w-e-table .w-e-table-input {\n  width: 40px;\n  text-align: center!important;\n  margin: 0 5px;\n}\n", ""]), e.exports = t }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(2)),
            i = function() {
                function e(e) { this.editor = e } return e.prototype.createAction = function(e, t) { var n = this.editor,
                        o = r.default(n.selection.getSelectionContainerElem()),
                        i = r.default(o.elems[0]).parentUntilEditor("UL", n),
                        a = r.default(o.elems[0]).parentUntilEditor("OL", n); if (!i && !a) { var l = this.createTableHtml(e, t);
                        n.cmd.do("insertHTML", l) } }, e.prototype.createTableHtml = function(e, t) { for (var n = "", o = "", r = 0; r < e; r++) { o = ""; for (var i = 0; i < t; i++) o += 0 === r ? "<th></th>" : "<td></td>";
                        n = n + "<tr>" + o + "</tr>" } return '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + n + "</tbody></table><p><br></p>" }, e }();
        t.default = i }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(400)),
            i = o(n(403));
        t.default = function(e) { r.default(e), i.default(e) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(2)),
            i = o(n(36)),
            a = o(n(401)),
            l = o(n(402));

        function u(e) { var t = e.selection.getSelectionStartElem(),
                n = e.selection.getSelectionEndElem(); return (null == t ? void 0 : t.elems[0]) !== (null == n ? void 0 : n.elems[0]) }
        t.default = function(e) { var t = function(e) { var t; return { showTableTooltip: function(n) { var o = new l.default(e),
                                c = function(t, n) { return void 0 === n && (n = "menus.panelMenus.table."), e.i18next.t(n + t) },
                                s = [{ $elem: r.default("<span>" + c("删除表格") + "</span>"), onClick: function(e, t) { return e.selection.createRangeByElem(t), e.selection.restoreSelection(), e.cmd.do("insertHTML", "<p><br></p>"), !0 } }, { $elem: r.default("<span>" + c("添加行") + "</span>"), onClick: function(e, t) { if (u(e)) return !0; var n = r.default(e.selection.getSelectionStartElem()),
                                            i = o.getRowNode(n.elems[0]); if (!i) return !0; var l = Number(o.getCurrentRowIndex(t.elems[0], i)),
                                            c = o.getTableHtml(t.elems[0]),
                                            s = o.getTableHtml(a.default.ProcessingRow(r.default(c), l).elems[0]); return e.selection.createRangeByElem(t), e.selection.restoreSelection(), e.cmd.do("insertHTML", s), !0 } }, { $elem: r.default("<span>" + c("删除行") + "</span>"), onClick: function(e, t) { if (u(e)) return !0; var n = r.default(e.selection.getSelectionStartElem()),
                                            i = o.getRowNode(n.elems[0]); if (!i) return !0; var l = Number(o.getCurrentRowIndex(t.elems[0], i)),
                                            c = o.getTableHtml(t.elems[0]),
                                            s = a.default.DeleteRow(r.default(c), l).elems[0].childNodes[0].childNodes.length,
                                            f = ""; return e.selection.createRangeByElem(t), e.selection.restoreSelection(), f = 0 === s ? "<p><br></p>" : o.getTableHtml(a.default.DeleteRow(r.default(c), l).elems[0]), e.cmd.do("insertHTML", f), !0 } }, { $elem: r.default("<span>" + c("添加列") + "</span>"), onClick: function(e, t) { if (u(e)) return !0; var n = r.default(e.selection.getSelectionStartElem()),
                                            i = o.getCurrentColIndex(n.elems[0]),
                                            l = o.getTableHtml(t.elems[0]),
                                            c = o.getTableHtml(a.default.ProcessingCol(r.default(l), i).elems[0]); return e.selection.createRangeByElem(t), e.selection.restoreSelection(), e.cmd.do("insertHTML", c), !0 } }, { $elem: r.default("<span>" + c("删除列") + "</span>"), onClick: function(e, t) { if (u(e)) return !0; var n = r.default(e.selection.getSelectionStartElem()),
                                            i = o.getCurrentColIndex(n.elems[0]),
                                            l = o.getTableHtml(t.elems[0]),
                                            c = a.default.DeleteCol(r.default(l), i).elems[0].childNodes[0].childNodes[0].childNodes.length,
                                            s = ""; return e.selection.createRangeByElem(t), e.selection.restoreSelection(), s = 1 === c ? "<p><br></p>" : o.getTableHtml(a.default.DeleteCol(r.default(l), i).elems[0]), e.cmd.do("insertHTML", s), !0 } }, { $elem: r.default("<span>" + c("设置表头") + "</span>"), onClick: function(e, t) { if (u(e)) return !0; var n = r.default(e.selection.getSelectionStartElem()),
                                            i = o.getRowNode(n.elems[0]); if (!i) return !0; var l = Number(o.getCurrentRowIndex(t.elems[0], i));
                                        0 !== l && (l = 0); var c = o.getTableHtml(t.elems[0]),
                                            s = o.getTableHtml(a.default.setTheHeader(r.default(c), l, "th").elems[0]); return e.selection.createRangeByElem(t), e.selection.restoreSelection(), e.cmd.do("insertHTML", s), !0 } }, { $elem: r.default("<span>" + c("取消表头") + "</span>"), onClick: function(e, t) { var n = r.default(e.selection.getSelectionStartElem()),
                                            i = o.getRowNode(n.elems[0]); if (!i) return !0; var l = Number(o.getCurrentRowIndex(t.elems[0], i));
                                        0 !== l && (l = 0); var u = o.getTableHtml(t.elems[0]),
                                            c = o.getTableHtml(a.default.setTheHeader(r.default(u), l, "td").elems[0]); return e.selection.createRangeByElem(t), e.selection.restoreSelection(), e.cmd.do("insertHTML", c), !0 } }];
                            (t = new i.default(e, n, s)).create() }, hideTableTooltip: function() { t && (t.remove(), t = null) } } }(e),
                n = t.showTableTooltip,
                o = t.hideTableTooltip;
            e.txt.eventHooks.tableClickEvents.push(n), e.txt.eventHooks.clickEvents.push(o), e.txt.eventHooks.keyupEvents.push(o), e.txt.eventHooks.toolbarClickEvents.push(o), e.txt.eventHooks.menuClickEvents.push(o), e.txt.eventHooks.textScrollEvents.push(o) } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = o(n(92)),
            a = o(n(45)),
            l = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var u = l(n(2));

        function c(e, t) { for (; 0 !== e.childNodes.length;) e.removeChild(e.childNodes[0]); for (var n = 0; n < t.length; n++) e.appendChild(t[n]) }

        function s(e) { var t = e.elems[0].childNodes[0]; return "COLGROUP" === t.nodeName && (t = e.elems[0].childNodes[e.elems[0].childNodes.length - 1]), t }
        t.default = { ProcessingRow: function(e, t) { for (var n = s(e), o = (0, a.default)(Array.prototype).apply(n.childNodes), r = o[0].childNodes.length, l = document.createElement("tr"), f = 0; f < r; f++) { var d = document.createElement("td");
                    l.appendChild(d) } return (0, i.default)(o).call(o, t + 1, 0, l), c(n, o), u.default(n.parentNode) }, ProcessingCol: function(e, t) { for (var n = s(e), o = (0, a.default)(Array.prototype).apply(n.childNodes), l = function(e) { var n, a = []; for ((0, r.default)(n = o[e].childNodes).call(n, (function(e) { a.push(e) })); 0 !== o[e].childNodes.length;) o[e].removeChild(o[e].childNodes[0]); var l = "TH" !== u.default(a[0]).getNodeName() ? document.createElement("td") : document.createElement("th");
                        (0, i.default)(a).call(a, t + 1, 0, l); for (var c = 0; c < a.length; c++) o[e].appendChild(a[c]) }, f = 0; f < o.length; f++) l(f); return c(n, o), u.default(n.parentNode) }, DeleteRow: function(e, t) { var n = s(e),
                    o = (0, a.default)(Array.prototype).apply(n.childNodes); return (0, i.default)(o).call(o, t, 1), c(n, o), u.default(n.parentNode) }, DeleteCol: function(e, t) { for (var n = s(e), o = (0, a.default)(Array.prototype).apply(n.childNodes), l = function(e) { var n, a = []; for ((0, r.default)(n = o[e].childNodes).call(n, (function(e) { a.push(e) })); 0 !== o[e].childNodes.length;) o[e].removeChild(o[e].childNodes[0]);
                        (0, i.default)(a).call(a, t, 1); for (var l = 0; l < a.length; l++) o[e].appendChild(a[l]) }, f = 0; f < o.length; f++) l(f); return c(n, o), u.default(n.parentNode) }, setTheHeader: function(e, t, n) { for (var o = s(e), l = (0, a.default)(Array.prototype).apply(o.childNodes), f = l[t].childNodes, d = document.createElement("tr"), p = function(e) { var t, o = document.createElement(n);
                        (0, r.default)(t = f[e].childNodes).call(t, (function(e) { o.appendChild(e) })), d.appendChild(o) }, v = 0; v < f.length; v++) p(v); return (0, i.default)(l).call(l, t, 1, d), c(o, l), u.default(o.parentNode) } } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = i(n(2)),
            l = function() {
                function e(e) { this.editor = e } return e.prototype.getRowNode = function(e) { var t, n = a.default(e).elems[0]; return n.parentNode ? n = null === (t = a.default(n).parentUntil("TR", n)) || void 0 === t ? void 0 : t.elems[0] : n }, e.prototype.getCurrentRowIndex = function(e, t) { var n, o = 0,
                        i = e.childNodes[0]; return "COLGROUP" === i.nodeName && (i = e.childNodes[e.childNodes.length - 1]), (0, r.default)(n = i.childNodes).call(n, (function(e, n) { e === t && (o = n) })), o }, e.prototype.getCurrentColIndex = function(e) { var t, n, o = 0,
                        i = "TD" === a.default(e).getNodeName() || "TH" === a.default(e).getNodeName() ? e : null === (n = a.default(e).parentUntil("TD", e)) || void 0 === n ? void 0 : n.elems[0],
                        l = a.default(i).parent(); return (0, r.default)(t = l.elems[0].childNodes).call(t, (function(e, t) { e === i && (o = t) })), o }, e.prototype.getTableHtml = function(e) { return '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + a.default(e).html() + "</table>" }, e }();
        t.default = l }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.default = function(e) { var t = e.txt,
                n = e.selection;
            t.eventHooks.keydownEvents.push((function(t) { e.selection.saveRange(); var o = n.getSelectionContainerElem(); if (o) { var r = o.getNodeTop(e),
                        i = r.length && r.prev().length ? r.prev() : null;
                    i && "TABLE" === i.getNodeName() && 0 === n.getCursorPos() && 8 === t.keyCode && t.preventDefault() } })) } }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(26)),
            a = r(n(1)),
            l = r(n(4)),
            u = r(n(5)),
            c = (o = function(e, t) { return (o = u.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, l.default)(t) : (n.prototype = t.prototype, new n) }),
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }), t.formatCodeHtml = void 0; var f = s(n(35)),
            d = s(n(2)),
            p = n(7),
            v = s(n(405)),
            h = s(n(138)),
            A = s(n(33)),
            g = s(n(406));
        t.formatCodeHtml = function(e, t) { return t ? (t = function(e) { var t = e.match(/<pre[\s|\S]+?\/pre>/g); return null === t || (0, i.default)(t).call(t, (function(t) { e = e.replace(t, t.replace(/<\/code><code>/g, "\n").replace(/<br>/g, "")) })), e }(t = function e(t) { var n, o = t.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm); if (!o || !o.length) return t; for (var r = (0, i.default)(n = p.deepClone(o)).call(n, (function(e) { return (e = e.replace(/<span\sclass="hljs[^>]+>/, "")).replace(/<\/span>/, "") })), a = 0; a < o.length; a++) t = t.replace(o[a], r[a]); return e(t) }(t)), t = p.replaceSpecialSymbol(t)) : t }; var m = function(e) {
            function t(t) { var n, o = d.default('<div class="w-e-menu" data-title="代码"><i class="w-e-icon-terminal"></i></div>'); return n = e.call(this, o, t) || this, g.default(t), n } return c(t, e), t.prototype.insertLineCode = function(e) { var t = this.editor,
                    n = d.default("<code>" + e + "</code>");
                t.cmd.do("insertElem", n), t.selection.createRangeByElem(n, !1), t.selection.restoreSelection() }, t.prototype.clickHandler = function() { var e = this.editor,
                    t = e.selection.getSelectionText();
                this.isActive || (e.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(t)) }, t.prototype.createPanel = function(e, t) { var n = v.default(this.editor, e, t);
                new A.default(this, n).create() }, t.prototype.tryChangeActive = function() { var e = this.editor;
                h.default(e) ? this.active() : this.unActive() }, t }(f.default);
        t.default = m }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(26)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = n(7),
            l = i(n(2)),
            u = i(n(138));
        t.default = function(e, t, n) { var o, i = a.getRandom("input-iframe"),
                c = a.getRandom("select"),
                s = a.getRandom("btn-ok");

            function f(t) { u.default(e) && function() { if (!u.default(e)) return; var t = e.selection.getSelectionStartElem(),
                        n = null == t ? void 0 : t.getNodeTop(e); if (!n) return;
                    e.selection.createRangeByElem(n), e.selection.restoreSelection(), n }(), e.cmd.do("insertHTML", t); var n = e.selection.getSelectionStartElem(),
                    o = null == n ? void 0 : n.getNodeTop(e);
                l.default("<p><br></p>").insertAfter(o) } var d = function(t) { return e.i18next.t(t) }; return { width: 500, height: 0, tabs: [{ title: d("menus.panelMenus.code.插入代码"), tpl: '<div>\n                        <select name="" id="' + c + '">\n                            ' + (0, r.default)(o = e.config.languageType).call(o, (function(e) { return "<option " + (n == e ? "selected" : "") + ' value ="' + e + '">' + e + "</option>" })) + '\n                        </select>\n                        <textarea id="' + i + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + t.replace(/&quot;/g, '"') + '</textarea>\n                        <div class="w-e-button-container">\n                            <button type="button" id="' + s + '" class="right">' + (u.default(e) ? d("修改") : d("插入")) + "</button>\n                        </div>\n                    </div>", events: [{ selector: "#" + s, type: "click", fn: function() { var t, n = document.getElementById(i),
                                o = l.default("#" + c).val(),
                                r = n.value; if (t = e.highlight ? e.highlight.highlightAuto(r).value : "<xmp>" + r + "</xmp>", r) return !u.default(e) && (f('<pre type="' + o + '"><code>' + t + "</code></pre>"), !0) } }] }] } } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(407)),
            i = o(n(408));
        t.default = function(e) { r.default(e), i.default(e) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.createShowHideFn = void 0; var r = o(n(2)),
            i = o(n(36));

        function a(e) { var t; return { showCodeTooltip: function(n) { var o, a, l = [{ $elem: r.default("<span>" + (o = "删除代码", void 0 === a && (a = "menus.panelMenus.code."), e.i18next.t(a + o) + "</span>")), onClick: function(e, t) { return t.remove(), !0 } }];
                    (t = new i.default(e, n, l)).create() }, hideCodeTooltip: function() { t && (t.remove(), t = null) } } }
        t.createShowHideFn = a, t.default = function(e) { var t = a(e),
                n = t.showCodeTooltip,
                o = t.hideCodeTooltip;
            e.txt.eventHooks.codeClickEvents.push(n), e.txt.eventHooks.clickEvents.push(o), e.txt.eventHooks.toolbarClickEvents.push(o), e.txt.eventHooks.menuClickEvents.push(o), e.txt.eventHooks.textScrollEvents.push(o) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(2));
        t.default = function(e) { var t = e.$textElem,
                n = e.selection;
            e.txt.eventHooks.keydownEvents.push((function(e) { var o; if (40 === e.keyCode) { var i = n.getSelectionContainerElem(),
                        a = null === (o = t.children()) || void 0 === o ? void 0 : o.last(); if ("XMP" === (null == i ? void 0 : i.elems[0].tagName) && "PRE" === (null == a ? void 0 : a.elems[0].tagName)) { var l = r.default("<p><br></p>");
                        t.append(l) } } })) } }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(23)),
            f = c(n(2)),
            d = c(n(410)),
            p = n(7),
            v = function(e) {
                function t(t) { var n, o = f.default('<div class="w-e-menu" data-title="分割线"><i class="w-e-icon-split-line"></i></div>'); return n = e.call(this, o, t) || this, d.default(t), n } return u(t, e), t.prototype.clickHandler = function() { var e = this.editor,
                        t = e.selection.getRange(),
                        n = e.selection.getSelectionContainerElem(); if (null == n ? void 0 : n.length) { var o = f.default(n.elems[0]),
                            r = o.parentUntil("TABLE", n.elems[0]),
                            i = o.children(); "CODE" !== o.getNodeName() && (r && "TABLE" === f.default(r.elems[0]).getNodeName() || i && 0 !== i.length && "IMG" === f.default(i.elems[0]).getNodeName() && !(null == t ? void 0 : t.collapsed) || this.createSplitLine()) } }, t.prototype.createSplitLine = function() { var e = "<hr/><p><br/></p>";
                    p.UA.isFirefox && (e = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", e) }, t.prototype.tryChangeActive = function() {}, t }(s.default);
        t.default = v }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(411));
        t.default = function(e) { r.default(e) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(2)),
            i = o(n(36));
        t.default = function(e) { var t = function(e) { var t; return { showSplitLineTooltip: function(n) { var o = [{ $elem: r.default("<span>" + e.i18next.t("menus.panelMenus.删除") + "</span>"), onClick: function(e, t) { return e.selection.createRangeByElem(t), e.selection.restoreSelection(), e.cmd.do("delete"), !0 } }];
                            (t = new i.default(e, n, o)).create() }, hideSplitLineTooltip: function() { t && (t.remove(), t = null) } } }(e),
                n = t.showSplitLineTooltip,
                o = t.hideSplitLineTooltip;
            e.txt.eventHooks.splitLineEvents.push(n), e.txt.eventHooks.clickEvents.push(o), e.txt.eventHooks.keyupEvents.push(o), e.txt.eventHooks.toolbarClickEvents.push(o), e.txt.eventHooks.menuClickEvents.push(o), e.txt.eventHooks.textScrollEvents.push(o) } }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(3)),
            a = r(n(1)),
            l = r(n(4)),
            u = r(n(5)),
            c = (o = function(e, t) { return (o = u.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, l.default)(t) : (n.prototype = t.prototype, new n) }),
            s = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, a.default)(t, "__esModule", { value: !0 }); var f = s(n(2)),
            d = s(n(23)),
            p = n(100),
            v = s(n(418)),
            h = s(n(139)),
            A = function(e) {
                function t(t) { var n, o = f.default('<div class="w-e-menu" data-title="待办事项">\n                    <i class="w-e-icon-checkbox-checked"></i>\n                </div>'); return n = e.call(this, o, t) || this, v.default(t), n } return c(t, e), t.prototype.clickHandler = function() { var e = this.editor;
                    p.isAllTodo(e) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo() }, t.prototype.tryChangeActive = function() { p.isAllTodo(this.editor) ? this.active() : this.unActive() }, t.prototype.setTodo = function() { var e = this.editor,
                        t = e.selection.getSelectionRangeTopNodes();
                    (0, i.default)(t).call(t, (function(t) { var n; if ("P" === (null == t ? void 0 : t.getNodeName())) { var o = h.default(t).getTodo(),
                                r = null === (n = o.children()) || void 0 === n ? void 0 : n.getNode();
                            o.insertAfter(t), e.selection.moveCursor(r), t.remove() } })), this.tryChangeActive() }, t.prototype.cancelTodo = function() { var e = this.editor,
                        t = e.selection.getSelectionRangeTopNodes();
                    (0, i.default)(t).call(t, (function(t) { var n, o, r, i = null === (o = null === (n = t.childNodes()) || void 0 === n ? void 0 : n.childNodes()) || void 0 === o ? void 0 : o.clone(!0),
                            a = f.default("<p></p>");
                        a.append(i), a.insertAfter(t), null === (r = a.childNodes()) || void 0 === r || r.get(0).remove(), e.selection.moveCursor(a.getNode()), t.remove() })) }, t }(d.default);
        t.default = A }, function(e, t, n) { e.exports = n(414) }, function(e, t, n) { var o = n(415);
        e.exports = o }, function(e, t, n) { var o = n(416),
            r = Array.prototype;
        e.exports = function(e) { var t = e.every; return e === r || e instanceof Array && t === r.every ? o : t } }, function(e, t, n) { n(417); var o = n(15);
        e.exports = o("Array").every }, function(e, t, n) { "use strict"; var o = n(6),
            r = n(30).every,
            i = n(69),
            a = n(22),
            l = i("every"),
            u = a("every");
        o({ target: "Array", proto: !0, forced: !l || !u }, { every: function(e) { return r(this, e, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = i(n(2)),
            l = n(100),
            u = i(n(139)),
            c = n(100);
        t.default = function(e) { e.txt.eventHooks.enterDownEvents.push((function(t) { var n, o; if (l.isAllTodo(e)) { t.preventDefault(); var i = e.selection,
                        s = i.getSelectionRangeTopNodes()[0],
                        f = null === (n = s.childNodes()) || void 0 === n ? void 0 : n.get(0),
                        d = null === (o = window.getSelection()) || void 0 === o ? void 0 : o.anchorNode,
                        p = i.getRange(); if (!(null == p ? void 0 : p.collapsed)) { var v = null == p ? void 0 : p.commonAncestorContainer.childNodes,
                            h = null == p ? void 0 : p.startContainer,
                            A = null == p ? void 0 : p.endContainer,
                            g = null == p ? void 0 : p.startOffset,
                            m = null == p ? void 0 : p.endOffset,
                            y = 0,
                            w = 0,
                            x = [];
                        null == v || (0, r.default)(v).call(v, (function(e, t) { e.contains(h) && (y = t), e.contains(A) && (w = t) })), w - y > 1 && (null == v || (0, r.default)(v).call(v, (function(e, t) { t <= y || t >= w || x.push(e) })), (0, r.default)(x).call(x, (function(e) { e.remove() }))), c.dealTextNode(h, g), c.dealTextNode(A, m, !1), e.selection.moveCursor(A, 0) } if ("" === s.text()) { var b = a.default("<p><br></p>"); return b.insertAfter(s), i.moveCursor(b.getNode()), void s.remove() } var E = i.getCursorPos(),
                        _ = l.getCursorNextNode(null == f ? void 0 : f.getNode(), d, E),
                        C = u.default(a.default(_)),
                        S = C.getInputContainer(),
                        M = S.parent().getNode(),
                        N = C.getTodo(),
                        k = S.getNode().nextSibling; if ("" === (null == f ? void 0 : f.text()) && (null == f || f.append(a.default("<br>"))), N.insertAfter(s), k && "" !== (null == k ? void 0 : k.textContent)) i.moveCursor(M);
                    else { if ("BR" !== (null == k ? void 0 : k.nodeName)) a.default("<br>").insertAfter(S);
                        i.moveCursor(M, 1) } } })), e.txt.eventHooks.deleteUpEvents.push((function() { var t = e.selection.getSelectionRangeTopNodes()[0];
                t && c.isTodo(t) && "" === t.text() && (a.default("<p><br></p>").insertAfter(t), t.remove()) })), e.txt.eventHooks.deleteDownEvents.push((function(t) { var n, o; if (l.isAllTodo(e)) { var i, u = e.selection,
                        c = u.getSelectionRangeTopNodes()[0],
                        s = null === (n = c.childNodes()) || void 0 === n ? void 0 : n.getNode(),
                        f = a.default("<p></p>"),
                        d = f.getNode(),
                        p = null === (o = window.getSelection()) || void 0 === o ? void 0 : o.anchorNode,
                        v = u.getCursorPos(),
                        h = p.previousSibling; if ("" === c.text()) { t.preventDefault(); var A = a.default("<p><br></p>"); return A.insertAfter(c), c.remove(), void u.moveCursor(A.getNode(), 0) } if ("SPAN" === (null == h ? void 0 : h.nodeName) && "INPUT" === h.childNodes[0].nodeName && 0 === v) t.preventDefault(), null == s || (0, r.default)(i = s.childNodes).call(i, (function(e, t) { 0 !== t && d.appendChild(e.cloneNode(!0)) })), f.insertAfter(c), c.remove() } })) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(2)),
            i = n(7),
            a = "1px solid #c9d8db",
            l = "#FFF",
            u = "1px solid #EEE";
        t.default = function(e) { var t, n, o = e.toolbarSelector,
                c = r.default(o),
                s = e.textSelector,
                f = e.config.height,
                d = e.i18next,
                p = r.default("<div></div>"),
                v = r.default("<div></div>");
            null == s ? (n = c.children(), c.append(p).append(v), p.css("background-color", l).css("border", a).css("border-bottom", u), v.css("border", a).css("border-top", "none").css("height", f + "px")) : (c.append(p), r.default(s).append(v), n = v.children()), (t = r.default("<div></div>")).attr("contenteditable", "true").css("width", "100%").css("height", "100%"); var h = r.default("<div>" + d.t(e.config.placeholder) + "</div>");
            h.addClass("placeholder"), n && n.length ? (t.append(n), h.hide()) : t.append(r.default("<p><br></p>")), v.append(t), v.append(h), p.addClass("w-e-toolbar").css("z-index", e.zIndex.get("toolbar")), v.addClass("w-e-text-container"), v.css("z-index", e.zIndex.get()), t.addClass("w-e-text"); var A = i.getRandom("toolbar-elem");
            p.attr("id", A); var g = i.getRandom("text-elem");
            t.attr("id", g); var m = v.getClientHeight();
            m !== t.getClientHeight() && t.css("min-height", m + "px"), e.$toolbarElem = p, e.$textContainerElem = v, e.$textElem = t, e.toolbarElemId = A, e.textElemId = g } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(2));
        t.default = function e(t, n) { var o = t.$textElem,
                i = o.children(); if (!i || !i.length) return o.append(r.default("<p><br></p>")), void e(t); var a = i.last(); if (n) { var l = a.html().toLowerCase(),
                    u = a.getNodeName(); if ("<br>" !== l && "<br/>" !== l || "P" !== u) return o.append(r.default("<p><br></p>")), void e(t) }
            t.selection.createRangeByElem(a, !1, !0), t.config.focus ? t.selection.restoreSelection() : t.selection.clearWindowSelectionRange() } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(3)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = i(n(2));

        function l(e) {
            (0, e.config.onfocus)(e.txt.html() || "") }
        t.default = function(e) {! function(e) { var t = e.config.onchange;
                e.txt.eventHooks.changeEvents.push((function() { var n = e.txt.html() || "";
                    t(n), e.txt.togglePlaceholder() })) }(e),
            function(e) {
                function t(t) { var n = t.target,
                        o = a.default(n),
                        i = e.$textElem,
                        u = e.$toolbarElem,
                        c = i.isContain(o),
                        s = u.isContain(o),
                        f = u.elems[0] == t.target; if (c) e.isFocus || l(e), e.isFocus = !0;
                    else { if (s && !f || !e.isFocus) return;! function(e) { var t, n = e.config.onblur,
                                o = e.txt.html() || "";
                            (0, r.default)(t = e.txt.eventHooks.onBlurEvents).call(t, (function(e) { return e() })), n(o) }(e), e.isFocus = !1 } }
                e.isFocus = !1, document.activeElement === e.$textElem.elems[0] && (l(e), e.isFocus = !0);
                a.default(document).on("click", t), e.beforeDestroy((function() { a.default(document).off("click", t) })) }(e),
            function(e) { e.$textElem.on("compositionstart", (function() { e.isComposing = !0 })).on("compositionend", (function() { e.isComposing = !1 })) }(e) } }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }), t.default = function(e) { var t = e.config,
                n = t.lang,
                o = t.languages; if (null == e.i18next) e.i18next = { t: function(e) { var t = e.split("."); return t[t.length - 1] } };
            else try { e.i18next.init({ ns: "wangEditor", lng: n, defaultNS: "wangEditor", resources: o }) } catch (e) { throw new Error("i18next:" + e) } } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(27)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }), t.setUnFullScreen = t.setFullScreen = void 0; var a = i(n(2));
        n(424);
        t.setFullScreen = function(e) { var t = a.default(e.toolbarSelector),
                n = e.$textContainerElem,
                o = e.$toolbarElem,
                i = (0, r.default)(o).call(o, "i.w-e-icon-fullscreen"),
                l = e.config;
            i.removeClass("w-e-icon-fullscreen"), i.addClass("w-e-icon-fullscreen_exit"), t.addClass("w-e-full-screen-editor"), t.css("z-index", l.zIndexFullScreen); var u = o.getBoundingClientRect();
            n.css("height", "calc(100% - " + u.height + "px)") };
        t.setUnFullScreen = function(e) { var t = a.default(e.toolbarSelector),
                n = e.$textContainerElem,
                o = e.$toolbarElem,
                i = (0, r.default)(o).call(o, "i.w-e-icon-fullscreen_exit"),
                l = e.config;
            i.removeClass("w-e-icon-fullscreen_exit"), i.addClass("w-e-icon-fullscreen"), t.removeClass("w-e-full-screen-editor"), t.css("z-index", "auto"), n.css("height", l.height + "px") };
        t.default = function(e) { if (!e.textSelector && e.config.showFullScreen) { var n = e.$toolbarElem,
                    o = a.default('<div class="w-e-menu" data-title="全屏">\n            <i class="w-e-icon-fullscreen"></i>\n        </div>');
                o.on("click", (function(n) { var o;
                    (0, r.default)(o = a.default(n.currentTarget)).call(o, "i").hasClass("w-e-icon-fullscreen") ? t.setFullScreen(e) : t.setUnFullScreen(e) })), n.append(o) } } }, function(e, t, n) { var o = n(20),
            r = n(425); "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
        ]); var i = { insert: "head", singleton: !1 };
        o(r, i);
        e.exports = r.locals || {} }, function(e, t, n) {
        (t = n(21)(!1)).push([e.i, ".w-e-full-screen-editor {\n  position: fixed;\n  width: 100%!important;\n  height: 100%!important;\n  left: 0;\n  top: 0;\n}\n", ""]), e.exports = t }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(27));
        (0, o(n(1)).default)(t, "__esModule", { value: !0 });
        t.default = function(e, t) { var n = e.$textElem,
                o = (0, r.default)(n).call(n, "[id='" + t + "']").getOffsetData().top;
            n.scrollTop(o) } }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(128)),
            i = { menu: 2, panel: 2, toolbar: 1, tooltip: 1, textContainer: 1 },
            a = function() {
                function e() { this.tier = i, this.baseZIndex = r.default.zIndex } return e.prototype.get = function(e) { return e && this.tier[e] ? this.baseZIndex + this.tier[e] : this.baseZIndex }, e.prototype.init = function(e) { this.baseZIndex == r.default.zIndex && (this.baseZIndex = e.config.zIndex) }, e }();
        t.default = a }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(3)),
            a = r(n(71)),
            l = r(n(1)),
            u = r(n(4)),
            c = r(n(5)),
            s = (o = function(e, t) { return (o = c.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, u.default)(t) : (n.prototype = t.prototype, new n) }),
            f = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, l.default)(t, "__esModule", { value: !0 }); var d = f(n(429)),
            p = n(7),
            v = n(32); var h = function(e) {
            function t(t) { var n = e.call(this, (function(e, o) { var r; if (e = function(e, t) { return (0, a.default)(e).call(e, (function(e) { var n = e.type,
                                    o = e.target,
                                    r = e.attributeName; return "attributes" != n || "attributes" == n && ("contenteditable" == r || o != t) })) }(e, o.target), (r = n.data).push.apply(r, e), t.isCompatibleMode) n.asyncSave();
                    else if (!t.isComposing) return n.asyncSave() })) || this; return n.editor = t, n.data = [], n.asyncSave = v.EMPTY_FN, n } return s(t, e), t.prototype.save = function() { this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit()) }, t.prototype.emit = function() { var e;
                (0, i.default)(e = this.editor.txt.eventHooks.changeEvents).call(e, (function(e) { return e() })) }, t.prototype.observe = function() { var t = this;
                e.prototype.observe.call(this, this.editor.$textElem.elems[0]); var n = this.editor.config.onchangeTimeout;
                this.asyncSave = p.debounce((function() { t.save() }), n), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", (function() { t.asyncSave() })) }, t }(d.default);
        t.default = h }, function(e, t, n) { "use strict"; var o = n(0)(n(1));
        (0, o.default)(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { var n = this;
                this.options = { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0, characterData: !0, characterDataOldValue: !0 }, this.callback = function(t) { e(t, n) }, this.observer = new MutationObserver(this.callback), t && (this.options = t) } return (0, o.default)(e.prototype, "target", { get: function() { return this.node }, enumerable: !1, configurable: !0 }), e.prototype.observe = function(e) { this.node instanceof Node || (this.node = e, this.connect()) }, e.prototype.connect = function() { if (this.node) return this.observer.observe(this.node, this.options), this; throw new Error("还未初始化绑定，请您先绑定有效的 Node 节点") }, e.prototype.disconnect = function() { var e = this.observer.takeRecords();
                e.length && this.callback(e), this.observer.disconnect() }, e }();
        t.default = r }, function(e, t, n) { "use strict"; var o = n(0)(n(1)),
            r = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o.default)(t, "__esModule", { value: !0 }); var i = r(n(431)),
            a = r(n(438)),
            l = r(n(439)),
            u = function() {
                function e(e) { this.editor = e, this.content = new i.default(e), this.scroll = new a.default(e), this.range = new l.default(e) } return (0, o.default)(e.prototype, "size", { get: function() { return this.scroll.size }, enumerable: !1, configurable: !0 }), e.prototype.observe = function() { this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe() }, e.prototype.save = function(e) { e.length && (this.content.save(e), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save()) }, e.prototype.revoke = function() { this.editor.change.disconnect(); var e = this.content.revoke();
                    e && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), e && this.editor.change.emit() }, e.prototype.restore = function() { this.editor.change.disconnect(); var e = this.content.restore();
                    e && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), e && this.editor.change.emit() }, e }();
        t.default = u }, function(e, t, n) { "use strict"; var o = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var r = o(n(432)),
            i = o(n(436)),
            a = function() {
                function e(e) { this.editor = e } return e.prototype.observe = function() { this.editor.isCompatibleMode ? this.cache = new i.default(this.editor) : this.cache = new r.default(this.editor), this.cache.observe() }, e.prototype.save = function(e) { this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(e) }, e.prototype.revoke = function() { var e; return null === (e = this.cache) || void 0 === e ? void 0 : e.revoke() }, e.prototype.restore = function() { var e; return null === (e = this.cache) || void 0 === e ? void 0 : e.restore() }, e }();
        t.default = a }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(101)),
            f = c(n(434)),
            d = n(435),
            p = function(e) {
                function t(t) { var n = e.call(this, t.config.historyMaxSize) || this; return n.editor = t, n } return u(t, e), t.prototype.observe = function() { this.resetMaxSize(this.editor.config.historyMaxSize) }, t.prototype.compile = function(e) { return this.save(f.default(e)), this }, t.prototype.revoke = function() { return e.prototype.revoke.call(this, (function(e) { d.revoke(e) })) }, t.prototype.restore = function() { return e.prototype.restore.call(this, (function(e) { d.restore(e) })) }, t }(s.default);
        t.default = p }, function(e, t, n) { "use strict"; var o = n(0)(n(1));
        (0, o.default)(t, "__esModule", { value: !0 }), t.CeilStack = void 0; var r = function() {
            function e(e) { void 0 === e && (e = 0), this.data = [], this.max = 0, this.reset = !1, (e = Math.abs(e)) && (this.max = e) } return e.prototype.resetMax = function(e) { e = Math.abs(e), this.reset || isNaN(e) || (this.max = e, this.reset = !0) }, (0, o.default)(e.prototype, "size", { get: function() { return this.data.length }, enumerable: !1, configurable: !0 }), e.prototype.instack = function(e) { return this.data.unshift(e), this.max && this.size > this.max && (this.data.length = this.max), this }, e.prototype.outstack = function() { return this.data.shift() }, e.prototype.clear = function() { return this.data.length = 0, this }, e }();
        t.CeilStack = r }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(31)),
            i = o(n(3));
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }), t.compliePosition = t.complieNodes = t.compileValue = t.compileType = void 0; var a = n(7);

        function l(e) { switch (e) {
                case "childList":
                    return "node";
                case "attributes":
                    return "attr";
                default:
                    return "text" } }

        function u(e) { switch (e.type) {
                case "attributes":
                    return e.target.getAttribute(e.attributeName) || "";
                case "characterData":
                    return e.target.textContent;
                default:
                    return "" } }

        function c(e) { var t = {}; return e.addedNodes.length && (t.add = a.toArray(e.addedNodes)), e.removedNodes.length && (t.remove = a.toArray(e.removedNodes)), t }

        function s(e) { return e.previousSibling ? { type: "before", target: e.previousSibling } : e.nextSibling ? { type: "after", target: e.nextSibling } : { type: "parent", target: e.target } }
        t.compileType = l, t.compileValue = u, t.complieNodes = c, t.compliePosition = s; var f = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];

        function d(e, t) { for (var n = 0, o = t.length - 1; o > 0 && e.contains(t[o]); o--) n++; return n }
        t.default = function(e) { var t = [],
                n = !1,
                o = []; return (0, i.default)(e).call(e, (function(e, i) { var p = { type: l(e.type), target: e.target, attr: e.attributeName || "", value: u(e) || "", oldValue: e.oldValue || "", nodes: c(e), position: s(e) }; if (t.push(p), a.UA.isFirefox) { if (n && e.addedNodes.length && 1 == e.addedNodes[0].nodeType) { var v = e.addedNodes[0],
                            h = { type: "node", target: v, attr: "", value: "", oldValue: "", nodes: { add: [n] }, position: { type: "parent", target: v } }; - 1 != (0, r.default)(f).call(f, v.nodeName) ? (h.nodes.add = a.toArray(v.childNodes), t.push(h)) : 3 == n.nodeType ? (d(v, o) && (h.nodes.add = a.toArray(v.childNodes)), t.push(h)) : -1 == (0, r.default)(f).call(f, e.target.nodeName) && d(v, o) && (h.nodes.add = a.toArray(v.childNodes), t.push(h)) } "node" == p.type && 1 == e.removedNodes.length ? (n = e.removedNodes[0], o.push(n)) : (n = !1, o.length = 0) } })), t } }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(132)),
            i = o(n(3));

        function a(e, t) { var n = e.position.target; switch (e.position.type) {
                case "before":
                    n.nextSibling ? (n = n.nextSibling, (0, i.default)(t).call(t, (function(t) { e.target.insertBefore(t, n) }))) : (0, i.default)(t).call(t, (function(t) { e.target.appendChild(t) })); break;
                case "after":
                    (0, i.default)(t).call(t, (function(t) { e.target.insertBefore(t, n) })); break;
                default:
                    (0, i.default)(t).call(t, (function(e) { n.appendChild(e) })) } }(0, o(n(1)).default)(t, "__esModule", { value: !0 }), t.restore = t.revoke = void 0; var l = { node: function(e) { for (var t = 0, n = (0, r.default)(e.nodes); t < n.length; t++) { var o = n[t],
                        l = o[0],
                        u = o[1]; switch (l) {
                        case "add":
                            (0, i.default)(u).call(u, (function(t) { e.target.removeChild(t) })); break;
                        default:
                            a(e, u) } } }, text: function(e) { e.target.textContent = e.oldValue }, attr: function(e) { var t = e.target;
                null == e.oldValue ? t.removeAttribute(e.attr) : t.setAttribute(e.attr, e.oldValue) } };
        t.revoke = function(e) { for (var t = e.length - 1; t > -1; t--) { var n = e[t];
                l[n.type](n) } }; var u = { node: function(e) { for (var t = 0, n = (0, r.default)(e.nodes); t < n.length; t++) { var o = n[t],
                        l = o[0],
                        u = o[1]; switch (l) {
                        case "add":
                            a(e, u); break;
                        default:
                            (0, i.default)(u).call(u, (function(e) { e.parentNode.removeChild(e) })) } } }, text: function(e) { e.target.textContent = e.value }, attr: function(e) { e.target.setAttribute(e.attr, e.value) } };
        t.restore = function(e) { for (var t = 0, n = e; t < n.length; t++) { var o = n[t];
                u[o.type](o) } } }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }); var o = n(437),
            r = function() {
                function e(e) { this.editor = e, this.data = new o.TailChain } return e.prototype.observe = function() { this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html()) }, e.prototype.save = function() { return this.data.insertLast(this.editor.$textElem.html()), this }, e.prototype.revoke = function() { var e = this.data.prev(); return !!e && (this.editor.$textElem.html(e), !0) }, e.prototype.restore = function() { var e = this.data.next(); return !!e && (this.editor.$textElem.html(e), !0) }, e }();
        t.default = r }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(92)),
            i = o(n(1));
        (0, i.default)(t, "__esModule", { value: !0 }), t.TailChain = void 0; var a = function() {
            function e() { this.data = [], this.max = 0, this.point = 0, this.isRe = !1 } return e.prototype.resetMax = function(e) {
                (e = Math.abs(e)) && (this.max = e) }, (0, i.default)(e.prototype, "size", { get: function() { return this.data.length }, enumerable: !1, configurable: !0 }), e.prototype.insertLast = function(e) { var t;
                this.isRe && ((0, r.default)(t = this.data).call(t, this.point + 1), this.isRe = !1); for (this.data.push(e); this.max && this.size > this.max;) this.data.shift(); return this.point = this.size - 1, this }, e.prototype.current = function() { return this.data[this.point] }, e.prototype.prev = function() { if (!this.isRe && (this.isRe = !0), this.point--, !(this.point < 0)) return this.current();
                this.point = 0 }, e.prototype.next = function() { if (!this.isRe && (this.isRe = !0), this.point++, !(this.point >= this.size)) return this.current();
                this.point = this.size - 1 }, e }();
        t.TailChain = a }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = function(e) {
            function t(t) { var n = e.call(this, t.config.historyMaxSize) || this; return n.editor = t, n.last = 0, n.target = t.$textElem.elems[0], n } return u(t, e), t.prototype.observe = function() { var e = this;
                this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", (function() { e.last = e.target.scrollTop })), this.resetMaxSize(this.editor.config.historyMaxSize) }, t.prototype.save = function() { return e.prototype.save.call(this, [this.last, this.target.scrollTop]), this }, t.prototype.revoke = function() { var t = this; return e.prototype.revoke.call(this, (function(e) { t.target.scrollTop = e[0] })) }, t.prototype.restore = function() { var t = this; return e.prototype.restore.call(this, (function(e) { t.target.scrollTop = e[1] })) }, t }(c(n(101)).default);
        t.default = s }, function(e, t, n) { "use strict"; var o, r = n(0),
            i = r(n(1)),
            a = r(n(4)),
            l = r(n(5)),
            u = (o = function(e, t) { return (o = l.default || { __proto__: [] }
                    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]) })(e, t) }, function(e, t) {
                function n() { this.constructor = e }
                o(e, t), e.prototype = null === t ? (0, a.default)(t) : (n.prototype = t.prototype, new n) }),
            c = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, i.default)(t, "__esModule", { value: !0 }); var s = c(n(101)),
            f = c(n(2)),
            d = n(7);

        function p(e) { return { start: [e.startContainer, e.startOffset], end: [e.endContainer, e.endOffset], root: e.commonAncestorContainer, collapsed: e.collapsed } } var v = function(e) {
            function t(t) { var n = e.call(this, t.config.historyMaxSize) || this; return n.editor = t, n.lastRange = p(document.createRange()), n.root = t.$textElem.elems[0], n.updateLastRange = d.debounce((function() { n.lastRange = p(n.rangeHandle) }), t.config.onchangeTimeout), n } return u(t, e), (0, i.default)(t.prototype, "rangeHandle", { get: function() { var e = document.getSelection(); return e && e.rangeCount ? e.getRangeAt(0) : document.createRange() }, enumerable: !1, configurable: !0 }), t.prototype.observe = function() { var e = this;

                function t() { var t = e.rangeHandle;
                    (e.root === t.commonAncestorContainer || e.root.contains(t.commonAncestorContainer)) && (e.editor.isComposing || e.updateLastRange()) }
                this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize), f.default(document).on("selectionchange", t), this.editor.beforeDestroy((function() { f.default(document).off("selectionchange", t) })), e.editor.$textElem.on("keydown", (function(t) { "Backspace" != t.key && "Delete" != t.key || e.updateLastRange() })) }, t.prototype.save = function() { var t = p(this.rangeHandle); return e.prototype.save.call(this, [this.lastRange, t]), this.lastRange = t, this }, t.prototype.set = function(e) { try { if (e) { var t = this.rangeHandle; return t.setStart.apply(t, e.start), t.setEnd.apply(t, e.end), this.editor.menus.changeActive(), !0 } } catch (e) { return !1 } return !1 }, t.prototype.revoke = function() { var t = this; return e.prototype.revoke.call(this, (function(e) { t.set(e[0]) })) }, t.prototype.restore = function() { var t = this; return e.prototype.restore.call(this, (function(e) { t.set(e[1]) })) }, t }(s.default);
        t.default = v }, function(e, t, n) { "use strict"; var o = n(0),
            r = o(n(27)),
            i = function(e) { return e && e.__esModule ? e : { default: e } };
        (0, o(n(1)).default)(t, "__esModule", { value: !0 }); var a = i(n(2));
        n(441), t.default = function(e) { var t, n, o = !1; return e.txt.eventHooks.changeEvents.push((function() { o && (0, r.default)(t).call(t, ".w-e-content-preview").html(e.$textElem.html()) })), { disable: function() { if (!o) { e.$textElem.hide(); var r = e.zIndex.get("textContainer"),
                            i = e.txt.html();
                        t = a.default('<div class="w-e-content-mantle" style="z-index:' + r + '">\n                <div class="w-e-content-preview w-e-text">' + i + "</div>\n            </div>"), e.$textContainerElem.append(t); var l = e.zIndex.get("menu");
                        n = a.default('<div class="w-e-menue-mantle" style="z-index:' + l + '"></div>'), e.$toolbarElem.append(n), o = !0 } }, enable: function() { o && (t.remove(), n.remove(), e.$textElem.show(), o = !1) } } } }, function(e, t, n) { var o = n(20),
            r = n(442); "string" == typeof(r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
        ]); var i = { insert: "head", singleton: !1 };
        o(r, i);
        e.exports = r.locals || {} }, function(e, t, n) {
        (t = n(21)(!1)).push([e.i, ".w-e-content-mantle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.w-e-content-mantle .w-e-content-preview {\n  width: 100%;\n  min-height: 100%;\n  padding: 0 10px;\n  line-height: 1.5;\n}\n.w-e-content-mantle .w-e-content-preview img {\n  cursor: default;\n}\n.w-e-content-mantle .w-e-content-preview img:hover {\n  box-shadow: none;\n}\n.w-e-menue-mantle {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n", ""]), e.exports = t }, function(e, t, n) { "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", { value: !0 }) }]).default }));
//# sourceMappingURL=wangEditor.min.js.map