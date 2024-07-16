import { g as Qft, a as Yft, c as _5e, b as VI, s as f5e, P as p5e, d as v5e, h as b5e, e as $he, j as Zft, v as Kft, p as d5e, f as m5e, i as ept, k as tpt } from "./copilot-DKr2YKvS.js";
import { g as rpt, a as Xhe, i as g5e, b as npt, c as ipt, d as spt, e as apt, f as opt } from "./react-utils-DFD62MFY.js";
function h5e(Jc) {
  throw new Error('Could not dynamically require "' + Jc + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var S5e = { exports: {} };
const cpt = {}, lpt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cpt
}, Symbol.toStringTag, { value: "Module" })), kk = /* @__PURE__ */ Qft(lpt);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
(function(Jc) {
  var Fa = (() => {
    var Nc = Object.defineProperty, sf = Object.getOwnPropertyNames, Pt = (e, t) => function() {
      return e && (t = (0, e[sf(e)[0]])(e = 0)), t;
    }, af = (e, t) => function() {
      return t || (0, e[sf(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    }, Do = (e, t) => {
      for (var n in t)
        Nc(e, n, { get: t[n], enumerable: !0 });
    }, M0, ug, Uj, A5e = Pt({
      "src/compiler/corePublic.ts"() {
        M0 = "5.4", ug = "5.4.5", Uj = /* @__PURE__ */ ((e) => (e[e.LessThan = -1] = "LessThan", e[e.EqualTo = 0] = "EqualTo", e[e.GreaterThan = 1] = "GreaterThan", e))(Uj || {});
      }
    });
    function vr(e) {
      return e ? e.length : 0;
    }
    function sr(e, t) {
      if (e)
        for (let n = 0; n < e.length; n++) {
          const i = t(e[n], n);
          if (i)
            return i;
        }
    }
    function kK(e, t) {
      if (e)
        for (let n = e.length - 1; n >= 0; n--) {
          const i = t(e[n], n);
          if (i)
            return i;
        }
    }
    function fc(e, t) {
      if (e !== void 0)
        for (let n = 0; n < e.length; n++) {
          const i = t(e[n], n);
          if (i !== void 0)
            return i;
        }
    }
    function oD(e, t) {
      for (const n of e) {
        const i = t(n);
        if (i !== void 0)
          return i;
      }
    }
    function t0e(e, t, n) {
      let i = n;
      if (e) {
        let s = 0;
        for (const o of e)
          i = t(i, o, s), s++;
      }
      return i;
    }
    function qj(e, t, n) {
      const i = [];
      E.assertEqual(e.length, t.length);
      for (let s = 0; s < e.length; s++)
        i.push(n(e[s], t[s], s));
      return i;
    }
    function Hj(e, t) {
      if (e.length <= 1)
        return e;
      const n = [];
      for (let i = 0, s = e.length; i < s; i++)
        i && n.push(t), n.push(e[i]);
      return n;
    }
    function Vi(e, t) {
      if (e) {
        for (let n = 0; n < e.length; n++)
          if (!t(e[n], n))
            return !1;
      }
      return !0;
    }
    function wn(e, t, n) {
      if (e !== void 0)
        for (let i = n ?? 0; i < e.length; i++) {
          const s = e[i];
          if (t(s, i))
            return s;
        }
    }
    function dT(e, t, n) {
      if (e !== void 0)
        for (let i = n ?? e.length - 1; i >= 0; i--) {
          const s = e[i];
          if (t(s, i))
            return s;
        }
    }
    function Sc(e, t, n) {
      if (e === void 0)
        return -1;
      for (let i = n ?? 0; i < e.length; i++)
        if (t(e[i], i))
          return i;
      return -1;
    }
    function WI(e, t, n) {
      if (e === void 0)
        return -1;
      for (let i = n ?? e.length - 1; i >= 0; i--)
        if (t(e[i], i))
          return i;
      return -1;
    }
    function r0e(e, t) {
      for (let n = 0; n < e.length; n++) {
        const i = t(e[n], n);
        if (i)
          return i;
      }
      return E.fail();
    }
    function bs(e, t, n = Uh) {
      if (e) {
        for (const i of e)
          if (n(i, t))
            return !0;
      }
      return !1;
    }
    function cD(e, t, n = Uh) {
      return e.length === t.length && e.every((i, s) => n(i, t[s]));
    }
    function CK(e, t, n) {
      for (let i = n || 0; i < e.length; i++)
        if (bs(t, e.charCodeAt(i)))
          return i;
      return -1;
    }
    function R0(e, t) {
      let n = 0;
      if (e)
        for (let i = 0; i < e.length; i++) {
          const s = e[i];
          t(s, i) && n++;
        }
      return n;
    }
    function An(e, t) {
      if (e) {
        const n = e.length;
        let i = 0;
        for (; i < n && t(e[i]); )
          i++;
        if (i < n) {
          const s = e.slice(0, i);
          for (i++; i < n; ) {
            const o = e[i];
            t(o) && s.push(o), i++;
          }
          return s;
        }
      }
      return e;
    }
    function Gj(e, t) {
      let n = 0;
      for (let i = 0; i < e.length; i++)
        t(e[i], i, e) && (e[n] = e[i], n++);
      e.length = n;
    }
    function _g(e) {
      e.length = 0;
    }
    function rr(e, t) {
      let n;
      if (e) {
        n = [];
        for (let i = 0; i < e.length; i++)
          n.push(t(e[i], i));
      }
      return n;
    }
    function* F4(e, t) {
      for (const n of e)
        yield t(n);
    }
    function al(e, t) {
      if (e)
        for (let n = 0; n < e.length; n++) {
          const i = e[n], s = t(i, n);
          if (i !== s) {
            const o = e.slice(0, n);
            for (o.push(s), n++; n < e.length; n++)
              o.push(t(e[n], n));
            return o;
          }
        }
      return e;
    }
    function jp(e) {
      const t = [];
      for (const n of e)
        n && (ts(n) ? Nn(t, n) : t.push(n));
      return t;
    }
    function Zs(e, t) {
      let n;
      if (e)
        for (let i = 0; i < e.length; i++) {
          const s = t(e[i], i);
          s && (ts(s) ? n = Nn(n, s) : n = _r(n, s));
        }
      return n || We;
    }
    function O4(e, t) {
      const n = [];
      if (e)
        for (let i = 0; i < e.length; i++) {
          const s = t(e[i], i);
          s && (ts(s) ? Nn(n, s) : n.push(s));
        }
      return n;
    }
    function* $j(e, t) {
      for (const n of e) {
        const i = t(n);
        i && (yield* i);
      }
    }
    function EK(e, t) {
      let n;
      if (e)
        for (let i = 0; i < e.length; i++) {
          const s = e[i], o = t(s, i);
          (n || s !== o || ts(o)) && (n || (n = e.slice(0, i)), ts(o) ? Nn(n, o) : n.push(o));
        }
      return n || e;
    }
    function Xj(e, t) {
      const n = [];
      for (let i = 0; i < e.length; i++) {
        const s = t(e[i], i);
        if (s === void 0)
          return;
        n.push(s);
      }
      return n;
    }
    function Ri(e, t) {
      const n = [];
      if (e)
        for (let i = 0; i < e.length; i++) {
          const s = t(e[i], i);
          s !== void 0 && n.push(s);
        }
      return n;
    }
    function* L4(e, t) {
      for (const n of e) {
        const i = t(n);
        i !== void 0 && (yield i);
      }
    }
    function PK(e, t) {
      if (!e)
        return;
      const n = /* @__PURE__ */ new Map();
      return e.forEach((i, s) => {
        const o = t(s, i);
        if (o !== void 0) {
          const [c, u] = o;
          c !== void 0 && u !== void 0 && n.set(c, u);
        }
      }), n;
    }
    function M4(e, t, n) {
      if (e.has(t))
        return e.get(t);
      const i = n();
      return e.set(t, i), i;
    }
    function u1(e, t) {
      return e.has(t) ? !1 : (e.add(t), !0);
    }
    function* DK(e) {
      yield e;
    }
    function Qj(e, t, n) {
      let i;
      if (e) {
        i = [];
        const s = e.length;
        let o, c, u = 0, f = 0;
        for (; u < s; ) {
          for (; f < s; ) {
            const g = e[f];
            if (c = t(g, f), f === 0)
              o = c;
            else if (c !== o)
              break;
            f++;
          }
          if (u < f) {
            const g = n(e.slice(u, f), o, u, f);
            g && i.push(g), u = f;
          }
          o = c, f++;
        }
      }
      return i;
    }
    function wK(e, t) {
      if (!e)
        return;
      const n = /* @__PURE__ */ new Map();
      return e.forEach((i, s) => {
        const [o, c] = t(s, i);
        n.set(o, c);
      }), n;
    }
    function ct(e, t) {
      if (e)
        if (t) {
          for (const n of e)
            if (t(n))
              return !0;
        } else
          return e.length > 0;
      return !1;
    }
    function Yj(e, t, n) {
      let i;
      for (let s = 0; s < e.length; s++)
        t(e[s]) ? i = i === void 0 ? s : i : i !== void 0 && (n(i, s), i = void 0);
      i !== void 0 && n(i, e.length);
    }
    function es(e, t) {
      return ct(t) ? ct(e) ? [...e, ...t] : t : e;
    }
    function N5e(e, t) {
      return t;
    }
    function lD(e) {
      return e.map(N5e);
    }
    function I5e(e, t, n) {
      const i = lD(e);
      n0e(e, i, n);
      let s = e[i[0]];
      const o = [i[0]];
      for (let c = 1; c < i.length; c++) {
        const u = i[c], f = e[u];
        t(s, f) || (o.push(u), s = f);
      }
      return o.sort(), o.map((c) => e[c]);
    }
    function F5e(e, t) {
      const n = [];
      for (const i of e)
        Uf(n, i, t);
      return n;
    }
    function Av(e, t, n) {
      return e.length === 0 ? [] : e.length === 1 ? e.slice() : n ? I5e(e, t, n) : F5e(e, t);
    }
    function O5e(e, t) {
      if (e.length === 0)
        return We;
      let n = e[0];
      const i = [n];
      for (let s = 1; s < e.length; s++) {
        const o = e[s];
        switch (t(o, n)) {
          case !0:
          case 0:
            continue;
          case -1:
            return E.fail("Array is unsorted.");
        }
        i.push(n = o);
      }
      return i;
    }
    function Zj() {
      return [];
    }
    function j0(e, t, n, i) {
      if (e.length === 0)
        return e.push(t), !0;
      const s = zh(e, t, Ao, n);
      return s < 0 ? (e.splice(~s, 0, t), !0) : i ? (e.splice(s, 0, t), !0) : !1;
    }
    function R4(e, t, n) {
      return O5e(lb(e, t), n || t || hu);
    }
    function UI(e, t) {
      if (e.length < 2)
        return !0;
      for (let n = 1, i = e.length; n < i; n++)
        if (t(e[n - 1], e[n]) === 1)
          return !1;
      return !0;
    }
    function j4(e, t, n, i) {
      let s = 3;
      if (e.length < 2)
        return s;
      let o = t(e[0]);
      for (let c = 1, u = e.length; c < u && s !== 0; c++) {
        const f = t(e[c]);
        s & 1 && n(o, f) > 0 && (s &= -2), s & 2 && i(o, f) > 0 && (s &= -3), o = f;
      }
      return s;
    }
    function pd(e, t, n = Uh) {
      if (!e || !t)
        return e === t;
      if (e.length !== t.length)
        return !1;
      for (let i = 0; i < e.length; i++)
        if (!n(e[i], t[i], i))
          return !1;
      return !0;
    }
    function uD(e) {
      let t;
      if (e)
        for (let n = 0; n < e.length; n++) {
          const i = e[n];
          (t || !i) && (t || (t = e.slice(0, n)), i && t.push(i));
        }
      return t || e;
    }
    function AK(e, t, n) {
      if (!t || !e || t.length === 0 || e.length === 0)
        return t;
      const i = [];
      e:
        for (let s = 0, o = 0; o < t.length; o++) {
          o > 0 && E.assertGreaterThanOrEqual(
            n(t[o], t[o - 1]),
            0
            /* EqualTo */
          );
          t:
            for (const c = s; s < e.length; s++)
              switch (s > c && E.assertGreaterThanOrEqual(
                n(e[s], e[s - 1]),
                0
                /* EqualTo */
              ), n(t[o], e[s])) {
                case -1:
                  i.push(t[o]);
                  continue e;
                case 0:
                  continue e;
                case 1:
                  continue t;
              }
        }
      return i;
    }
    function _r(e, t) {
      return t === void 0 ? e : e === void 0 ? [t] : (e.push(t), e);
    }
    function Ck(e, t) {
      return e === void 0 ? t : t === void 0 ? e : ts(e) ? ts(t) ? es(e, t) : _r(e, t) : ts(t) ? _r(t, e) : [e, t];
    }
    function NK(e, t) {
      return t < 0 ? e.length + t : t;
    }
    function Nn(e, t, n, i) {
      if (t === void 0 || t.length === 0)
        return e;
      if (e === void 0)
        return t.slice(n, i);
      n = n === void 0 ? 0 : NK(t, n), i = i === void 0 ? t.length : NK(t, i);
      for (let s = n; s < i && s < t.length; s++)
        t[s] !== void 0 && e.push(t[s]);
      return e;
    }
    function Uf(e, t, n) {
      return bs(e, t, n) ? !1 : (e.push(t), !0);
    }
    function Gg(e, t, n) {
      return e ? (Uf(e, t, n), e) : [t];
    }
    function n0e(e, t, n) {
      t.sort((i, s) => n(e[i], e[s]) || No(i, s));
    }
    function lb(e, t) {
      return e.length === 0 ? e : e.slice().sort(t);
    }
    function* Kj(e) {
      for (let t = e.length - 1; t >= 0; t--)
        yield e[t];
    }
    function Jh(e, t) {
      const n = lD(e);
      return n0e(e, n, t), n.map((i) => e[i]);
    }
    function eB(e, t, n, i) {
      for (; n < i; ) {
        if (e[n] !== t[n])
          return !1;
        n++;
      }
      return !0;
    }
    function xl(e) {
      return e === void 0 || e.length === 0 ? void 0 : e[0];
    }
    function qI(e) {
      if (e)
        for (const t of e)
          return t;
    }
    function va(e) {
      return E.assert(e.length !== 0), e[0];
    }
    function tB(e) {
      for (const t of e)
        return t;
      E.fail("iterator is empty");
    }
    function wo(e) {
      return e === void 0 || e.length === 0 ? void 0 : e[e.length - 1];
    }
    function ka(e) {
      return E.assert(e.length !== 0), e[e.length - 1];
    }
    function Cm(e) {
      return e && e.length === 1 ? e[0] : void 0;
    }
    function rB(e) {
      return E.checkDefined(Cm(e));
    }
    function Em(e) {
      return e && e.length === 1 ? e[0] : e;
    }
    function nB(e, t, n) {
      const i = e.slice(0);
      return i[t] = n, i;
    }
    function zh(e, t, n, i, s) {
      return mT(e, n(t), n, i, s);
    }
    function mT(e, t, n, i, s) {
      if (!ct(e))
        return -1;
      let o = s || 0, c = e.length - 1;
      for (; o <= c; ) {
        const u = o + (c - o >> 1), f = n(e[u], u);
        switch (i(f, t)) {
          case -1:
            o = u + 1;
            break;
          case 0:
            return u;
          case 1:
            c = u - 1;
            break;
        }
      }
      return ~o;
    }
    function Au(e, t, n, i, s) {
      if (e && e.length > 0) {
        const o = e.length;
        if (o > 0) {
          let c = i === void 0 || i < 0 ? 0 : i;
          const u = s === void 0 || c + s > o - 1 ? o - 1 : c + s;
          let f;
          for (arguments.length <= 2 ? (f = e[c], c++) : f = n; c <= u; )
            f = t(f, e[c], c), c++;
          return f;
        }
      }
      return n;
    }
    function Ka(e, t) {
      return z0.call(e, t);
    }
    function HI(e, t) {
      return z0.call(e, t) ? e[t] : void 0;
    }
    function fg(e) {
      const t = [];
      for (const n in e)
        z0.call(e, n) && t.push(n);
      return t;
    }
    function i0e(e) {
      const t = [];
      do {
        const n = Object.getOwnPropertyNames(e);
        for (const i of n)
          Uf(t, i);
      } while (e = Object.getPrototypeOf(e));
      return t;
    }
    function gT(e) {
      const t = [];
      for (const n in e)
        z0.call(e, n) && t.push(e[n]);
      return t;
    }
    function IK(e, t) {
      const n = new Array(e);
      for (let i = 0; i < e; i++)
        n[i] = t(i);
      return n;
    }
    function gs(e, t) {
      const n = [];
      for (const i of e)
        n.push(t ? t(i) : i);
      return n;
    }
    function Ek(e, ...t) {
      for (const n of t)
        if (n !== void 0)
          for (const i in n)
            Ka(n, i) && (e[i] = n[i]);
      return e;
    }
    function FK(e, t, n = Uh) {
      if (e === t)
        return !0;
      if (!e || !t)
        return !1;
      for (const i in e)
        if (z0.call(e, i) && (!z0.call(t, i) || !n(e[i], t[i])))
          return !1;
      for (const i in t)
        if (z0.call(t, i) && !z0.call(e, i))
          return !1;
      return !0;
    }
    function Nv(e, t, n = Ao) {
      const i = /* @__PURE__ */ new Map();
      for (const s of e) {
        const o = t(s);
        o !== void 0 && i.set(o, n(s));
      }
      return i;
    }
    function OK(e, t, n = Ao) {
      const i = [];
      for (const s of e)
        i[t(s)] = n(s);
      return i;
    }
    function _D(e, t, n = Ao) {
      const i = Tf();
      for (const s of e)
        i.add(t(s), n(s));
      return i;
    }
    function B4(e, t, n = Ao) {
      return gs(_D(e, t).values(), n);
    }
    function GI(e, t) {
      const n = {};
      if (e)
        for (const i of e) {
          const s = `${t(i)}`;
          (n[s] ?? (n[s] = [])).push(i);
        }
      return n;
    }
    function iB(e) {
      const t = {};
      for (const n in e)
        z0.call(e, n) && (t[n] = e[n]);
      return t;
    }
    function $I(e, t) {
      const n = {};
      for (const i in t)
        z0.call(t, i) && (n[i] = t[i]);
      for (const i in e)
        z0.call(e, i) && (n[i] = e[i]);
      return n;
    }
    function sB(e, t) {
      for (const n in t)
        z0.call(t, n) && (e[n] = t[n]);
    }
    function Os(e, t) {
      return t ? t.bind(e) : void 0;
    }
    function Tf() {
      const e = /* @__PURE__ */ new Map();
      return e.add = L5e, e.remove = M5e, e;
    }
    function L5e(e, t) {
      let n = this.get(e);
      return n ? n.push(t) : this.set(e, n = [t]), n;
    }
    function M5e(e, t) {
      const n = this.get(e);
      n && (yT(n, t), n.length || this.delete(e));
    }
    function fD(e) {
      const t = e?.slice() || [];
      let n = 0;
      function i() {
        return n === t.length;
      }
      function s(...c) {
        t.push(...c);
      }
      function o() {
        if (i())
          throw new Error("Queue is empty");
        const c = t[n];
        if (t[n] = void 0, n++, n > 100 && n > t.length >> 1) {
          const u = t.length - n;
          t.copyWithin(
            /*target*/
            0,
            /*start*/
            n
          ), t.length = u, n = 0;
        }
        return c;
      }
      return {
        enqueue: s,
        dequeue: o,
        isEmpty: i
      };
    }
    function aB(e, t) {
      const n = /* @__PURE__ */ new Map();
      let i = 0;
      function* s() {
        for (const c of n.values())
          ts(c) ? yield* c : yield c;
      }
      const o = {
        has(c) {
          const u = e(c);
          if (!n.has(u))
            return !1;
          const f = n.get(u);
          if (!ts(f))
            return t(f, c);
          for (const g of f)
            if (t(g, c))
              return !0;
          return !1;
        },
        add(c) {
          const u = e(c);
          if (n.has(u)) {
            const f = n.get(u);
            if (ts(f))
              bs(f, c, t) || (f.push(c), i++);
            else {
              const g = f;
              t(g, c) || (n.set(u, [g, c]), i++);
            }
          } else
            n.set(u, c), i++;
          return this;
        },
        delete(c) {
          const u = e(c);
          if (!n.has(u))
            return !1;
          const f = n.get(u);
          if (ts(f)) {
            for (let g = 0; g < f.length; g++)
              if (t(f[g], c))
                return f.length === 1 ? n.delete(u) : f.length === 2 ? n.set(u, f[1 - g]) : lB(f, g), i--, !0;
          } else if (t(f, c))
            return n.delete(u), i--, !0;
          return !1;
        },
        clear() {
          n.clear(), i = 0;
        },
        get size() {
          return i;
        },
        forEach(c) {
          for (const u of gs(n.values()))
            if (ts(u))
              for (const f of u)
                c(f, f, o);
            else {
              const f = u;
              c(f, f, o);
            }
        },
        keys() {
          return s();
        },
        values() {
          return s();
        },
        *entries() {
          for (const c of s())
            yield [c, c];
        },
        [Symbol.iterator]: () => s(),
        [Symbol.toStringTag]: n[Symbol.toStringTag]
      };
      return o;
    }
    function ts(e) {
      return Array.isArray(e);
    }
    function hT(e) {
      return ts(e) ? e : [e];
    }
    function ls(e) {
      return typeof e == "string";
    }
    function Vh(e) {
      return typeof e == "number";
    }
    function Vn(e, t) {
      return e !== void 0 && t(e) ? e : void 0;
    }
    function Ls(e, t) {
      return e !== void 0 && t(e) ? e : E.fail(`Invalid cast. The supplied value ${e} did not pass the test '${E.getFunctionName(t)}'.`);
    }
    function Ca(e) {
    }
    function dd() {
      return !1;
    }
    function Wh() {
      return !0;
    }
    function _1() {
    }
    function Ao(e) {
      return e;
    }
    function LK(e) {
      return e.toLowerCase();
    }
    function Pm(e) {
      return GK.test(e) ? e.replace(GK, LK) : e;
    }
    function ks() {
      throw new Error("Not implemented");
    }
    function $u(e) {
      let t;
      return () => (e && (t = e(), e = void 0), t);
    }
    function Dm(e) {
      const t = /* @__PURE__ */ new Map();
      return (n) => {
        const i = `${typeof n}:${n}`;
        let s = t.get(i);
        return s === void 0 && !t.has(i) && (s = e(n), t.set(i, s)), s;
      };
    }
    function s0e(e) {
      const t = /* @__PURE__ */ new WeakMap();
      return (n) => {
        let i = t.get(n);
        return i === void 0 && !t.has(n) && (i = e(n), t.set(n, i)), i;
      };
    }
    function MK(e, t) {
      return (...n) => {
        let i = t.get(n);
        return i === void 0 && !t.has(n) && (i = e(...n), t.set(n, i)), i;
      };
    }
    function a0e(e, t, n, i, s) {
      if (s) {
        const o = [];
        for (let c = 0; c < arguments.length; c++)
          o[c] = arguments[c];
        return (c) => Au(o, (u, f) => f(u), c);
      } else
        return i ? (o) => i(n(t(e(o)))) : n ? (o) => n(t(e(o))) : t ? (o) => t(e(o)) : e ? (o) => e(o) : (o) => o;
    }
    function Uh(e, t) {
      return e === t;
    }
    function f1(e, t) {
      return e === t || e !== void 0 && t !== void 0 && e.toUpperCase() === t.toUpperCase();
    }
    function ub(e, t) {
      return Uh(e, t);
    }
    function o0e(e, t) {
      return e === t ? 0 : e === void 0 ? -1 : t === void 0 ? 1 : e < t ? -1 : 1;
    }
    function No(e, t) {
      return o0e(e, t);
    }
    function XI(e, t) {
      return No(e?.start, t?.start) || No(e?.length, t?.length);
    }
    function oB(e, t) {
      return Au(e, (n, i) => t(n, i) === -1 ? n : i);
    }
    function QI(e, t) {
      return e === t ? 0 : e === void 0 ? -1 : t === void 0 ? 1 : (e = e.toUpperCase(), t = t.toUpperCase(), e < t ? -1 : e > t ? 1 : 0);
    }
    function RK(e, t) {
      return e === t ? 0 : e === void 0 ? -1 : t === void 0 ? 1 : (e = e.toLowerCase(), t = t.toLowerCase(), e < t ? -1 : e > t ? 1 : 0);
    }
    function hu(e, t) {
      return o0e(e, t);
    }
    function Pk(e) {
      return e ? QI : hu;
    }
    function jK() {
      return mB;
    }
    function BK(e) {
      mB !== e && (mB = e, $K = void 0);
    }
    function pD(e, t) {
      return ($K || ($K = u0e(mB)))(e, t);
    }
    function JK(e, t, n, i) {
      return e === t ? 0 : e === void 0 ? -1 : t === void 0 ? 1 : i(e[n], t[n]);
    }
    function B0(e, t) {
      return No(e ? 1 : 0, t ? 1 : 0);
    }
    function J4(e, t, n) {
      const i = Math.max(2, Math.floor(e.length * 0.34));
      let s = Math.floor(e.length * 0.4) + 1, o;
      for (const c of t) {
        const u = n(c);
        if (u !== void 0 && Math.abs(u.length - e.length) <= i) {
          if (u === e || u.length < 3 && u.toLowerCase() !== e.toLowerCase())
            continue;
          const f = R5e(e, u, s - 0.1);
          if (f === void 0)
            continue;
          E.assert(f < s), s = f, o = c;
        }
      }
      return o;
    }
    function R5e(e, t, n) {
      let i = new Array(t.length + 1), s = new Array(t.length + 1);
      const o = n + 0.01;
      for (let u = 0; u <= t.length; u++)
        i[u] = u;
      for (let u = 1; u <= e.length; u++) {
        const f = e.charCodeAt(u - 1), g = Math.ceil(u > n ? u - n : 1), d = Math.floor(t.length > n + u ? n + u : t.length);
        s[0] = u;
        let y = u;
        for (let T = 1; T < g; T++)
          s[T] = o;
        for (let T = g; T <= d; T++) {
          const k = e[u - 1].toLowerCase() === t[T - 1].toLowerCase() ? i[T - 1] + 0.1 : i[T - 1] + 2, w = f === t.charCodeAt(T - 1) ? i[T - 1] : Math.min(
            /*delete*/
            i[T] + 1,
            /*insert*/
            s[T - 1] + 1,
            /*substitute*/
            k
          );
          s[T] = w, y = Math.min(y, w);
        }
        for (let T = d + 1; T <= t.length; T++)
          s[T] = o;
        if (y > n)
          return;
        const S = i;
        i = s, s = S;
      }
      const c = i[t.length];
      return c > n ? void 0 : c;
    }
    function Zo(e, t, n) {
      const i = e.length - t.length;
      return i >= 0 && (n ? f1(e.slice(i), t) : e.indexOf(t, i) === i);
    }
    function Dk(e, t) {
      return Zo(e, t) ? e.slice(0, e.length - t.length) : e;
    }
    function zK(e, t) {
      return Zo(e, t) ? e.slice(0, e.length - t.length) : void 0;
    }
    function cB(e) {
      let t = e.length;
      for (let n = t - 1; n > 0; n--) {
        let i = e.charCodeAt(n);
        if (i >= 48 && i <= 57)
          do
            --n, i = e.charCodeAt(n);
          while (n > 0 && i >= 48 && i <= 57);
        else if (n > 4 && (i === 110 || i === 78)) {
          if (--n, i = e.charCodeAt(n), i !== 105 && i !== 73 || (--n, i = e.charCodeAt(n), i !== 109 && i !== 77))
            break;
          --n, i = e.charCodeAt(n);
        } else
          break;
        if (i !== 45 && i !== 46)
          break;
        t = n;
      }
      return t === e.length ? e : e.slice(0, t);
    }
    function wk(e, t) {
      for (let n = 0; n < e.length; n++)
        if (e[n] === t)
          return J0(e, n), !0;
      return !1;
    }
    function J0(e, t) {
      for (let n = t; n < e.length - 1; n++)
        e[n] = e[n + 1];
      e.pop();
    }
    function lB(e, t) {
      e[t] = e[e.length - 1], e.pop();
    }
    function yT(e, t) {
      return j5e(e, (n) => n === t);
    }
    function j5e(e, t) {
      for (let n = 0; n < e.length; n++)
        if (t(e[n]))
          return lB(e, n), !0;
      return !1;
    }
    function su(e) {
      return e ? Ao : Pm;
    }
    function VK({ prefix: e, suffix: t }) {
      return `${e}*${t}`;
    }
    function WK(e, t) {
      return E.assert(YI(e, t)), t.substring(e.prefix.length, t.length - e.suffix.length);
    }
    function uB(e, t, n) {
      let i, s = -1;
      for (const o of e) {
        const c = t(o);
        YI(c, n) && c.prefix.length > s && (s = c.prefix.length, i = o);
      }
      return i;
    }
    function Wi(e, t, n) {
      return n ? f1(e.slice(0, t.length), t) : e.lastIndexOf(t, 0) === 0;
    }
    function z4(e, t) {
      return Wi(e, t) ? e.substr(t.length) : e;
    }
    function _B(e, t, n = Ao) {
      return Wi(n(e), n(t)) ? e.substring(t.length) : void 0;
    }
    function YI({ prefix: e, suffix: t }, n) {
      return n.length >= e.length + t.length && Wi(n, e) && Zo(n, t);
    }
    function ZI(e, t) {
      return (n) => e(n) && t(n);
    }
    function md(...e) {
      return (...t) => {
        let n;
        for (const i of e)
          if (n = i(...t), n)
            return n;
        return n;
      };
    }
    function KI(e) {
      return (...t) => !e(...t);
    }
    function c0e(e) {
    }
    function vT(e) {
      return e === void 0 ? void 0 : [e];
    }
    function e7(e, t, n, i, s, o) {
      o = o || Ca;
      let c = 0, u = 0;
      const f = e.length, g = t.length;
      let d = !1;
      for (; c < f && u < g; ) {
        const y = e[c], S = t[u], T = n(y, S);
        T === -1 ? (i(y), c++, d = !0) : T === 1 ? (s(S), u++, d = !0) : (o(S, y), c++, u++);
      }
      for (; c < f; )
        i(e[c++]), d = !0;
      for (; u < g; )
        s(t[u++]), d = !0;
      return d;
    }
    function UK(e) {
      const t = [];
      return l0e(
        e,
        t,
        /*outer*/
        void 0,
        0
      ), t;
    }
    function l0e(e, t, n, i) {
      for (const s of e[i]) {
        let o;
        n ? (o = n.slice(), o.push(s)) : o = [s], i === e.length - 1 ? t.push(o) : l0e(e, t, o, i + 1);
      }
    }
    function t7(e, t) {
      if (e) {
        const n = e.length;
        let i = 0;
        for (; i < n && t(e[i]); )
          i++;
        return e.slice(0, i);
      }
    }
    function qK(e, t) {
      if (e) {
        const n = e.length;
        let i = 0;
        for (; i < n && t(e[i]); )
          i++;
        return e.slice(i);
      }
    }
    function fB() {
      return typeof process < "u" && !!process.nextTick && !process.browser && !0;
    }
    var We, r7, HK, pB, qh, z0, GK, dB, u0e, $K, mB, B5e = Pt({
      "src/compiler/core.ts"() {
        Fs(), We = [], r7 = /* @__PURE__ */ new Map(), HK = /* @__PURE__ */ new Set(), pB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.CaseSensitive = 1] = "CaseSensitive", e[e.CaseInsensitive = 2] = "CaseInsensitive", e[e.Both = 3] = "Both", e))(pB || {}), qh = Array.prototype.at ? (e, t) => e?.at(t) : (e, t) => {
          if (e && (t = NK(e, t), t < e.length))
            return e[t];
        }, z0 = Object.prototype.hasOwnProperty, GK = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g, dB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Normal = 1] = "Normal", e[e.Aggressive = 2] = "Aggressive", e[e.VeryAggressive = 3] = "VeryAggressive", e))(dB || {}), u0e = /* @__PURE__ */ (() => {
          return t;
          function e(n, i, s) {
            if (n === i)
              return 0;
            if (n === void 0)
              return -1;
            if (i === void 0)
              return 1;
            const o = s(n, i);
            return o < 0 ? -1 : o > 0 ? 1 : 0;
          }
          function t(n) {
            const i = new Intl.Collator(n, { usage: "sort", sensitivity: "variant" }).compare;
            return (s, o) => e(s, o, i);
          }
        })();
      }
    }), gB, E, J5e = Pt({
      "src/compiler/debug.ts"() {
        Fs(), Fs(), gB = /* @__PURE__ */ ((e) => (e[e.Off = 0] = "Off", e[e.Error = 1] = "Error", e[e.Warning = 2] = "Warning", e[e.Info = 3] = "Info", e[e.Verbose = 4] = "Verbose", e))(gB || {}), ((e) => {
          let t = 0;
          e.currentLogLevel = 2, e.isDebugging = !1;
          function n(Ht) {
            return e.currentLogLevel <= Ht;
          }
          e.shouldLog = n;
          function i(Ht, Ue) {
            e.loggingHost && n(Ht) && e.loggingHost.log(Ht, Ue);
          }
          function s(Ht) {
            i(3, Ht);
          }
          e.log = s, ((Ht) => {
            function Ue(ei) {
              i(1, ei);
            }
            Ht.error = Ue;
            function Et(ei) {
              i(2, ei);
            }
            Ht.warn = Et;
            function fr(ei) {
              i(3, ei);
            }
            Ht.log = fr;
            function Hn(ei) {
              i(4, ei);
            }
            Ht.trace = Hn;
          })(s = e.log || (e.log = {}));
          const o = {};
          function c() {
            return t;
          }
          e.getAssertionLevel = c;
          function u(Ht) {
            const Ue = t;
            if (t = Ht, Ht > Ue)
              for (const Et of fg(o)) {
                const fr = o[Et];
                fr !== void 0 && e[Et] !== fr.assertion && Ht >= fr.level && (e[Et] = fr, o[Et] = void 0);
              }
          }
          e.setAssertionLevel = u;
          function f(Ht) {
            return t >= Ht;
          }
          e.shouldAssert = f;
          function g(Ht, Ue) {
            return f(Ht) ? !0 : (o[Ue] = { level: Ht, assertion: e[Ue] }, e[Ue] = Ca, !1);
          }
          function d(Ht, Ue) {
            debugger;
            const Et = new Error(Ht ? `Debug Failure. ${Ht}` : "Debug Failure.");
            throw Error.captureStackTrace && Error.captureStackTrace(Et, Ue || d), Et;
          }
          e.fail = d;
          function y(Ht, Ue, Et) {
            return d(
              `${Ue || "Unexpected node."}\r
Node ${fe(Ht.kind)} was unexpected.`,
              Et || y
            );
          }
          e.failBadSyntaxKind = y;
          function S(Ht, Ue, Et, fr) {
            Ht || (Ue = Ue ? `False expression: ${Ue}` : "False expression.", Et && (Ue += `\r
Verbose Debug Information: ` + (typeof Et == "string" ? Et : Et())), d(Ue, fr || S));
          }
          e.assert = S;
          function T(Ht, Ue, Et, fr, Hn) {
            if (Ht !== Ue) {
              const ei = Et ? fr ? `${Et} ${fr}` : Et : "";
              d(`Expected ${Ht} === ${Ue}. ${ei}`, Hn || T);
            }
          }
          e.assertEqual = T;
          function k(Ht, Ue, Et, fr) {
            Ht >= Ue && d(`Expected ${Ht} < ${Ue}. ${Et || ""}`, fr || k);
          }
          e.assertLessThan = k;
          function w(Ht, Ue, Et) {
            Ht > Ue && d(`Expected ${Ht} <= ${Ue}`, Et || w);
          }
          e.assertLessThanOrEqual = w;
          function P(Ht, Ue, Et) {
            Ht < Ue && d(`Expected ${Ht} >= ${Ue}`, Et || P);
          }
          e.assertGreaterThanOrEqual = P;
          function F(Ht, Ue, Et) {
            Ht == null && d(Ue, Et || F);
          }
          e.assertIsDefined = F;
          function J(Ht, Ue, Et) {
            return F(Ht, Ue, Et || J), Ht;
          }
          e.checkDefined = J;
          function U(Ht, Ue, Et) {
            for (const fr of Ht)
              F(fr, Ue, Et || U);
          }
          e.assertEachIsDefined = U;
          function $(Ht, Ue, Et) {
            return U(Ht, Ue, Et || $), Ht;
          }
          e.checkEachDefined = $;
          function j(Ht, Ue = "Illegal value:", Et) {
            const fr = typeof Ht == "object" && Ka(Ht, "kind") && Ka(Ht, "pos") ? "SyntaxKind: " + fe(Ht.kind) : JSON.stringify(Ht);
            return d(`${Ue} ${fr}`, Et || j);
          }
          e.assertNever = j;
          function re(Ht, Ue, Et, fr) {
            g(1, "assertEachNode") && S(
              Ue === void 0 || Vi(Ht, Ue),
              Et || "Unexpected node.",
              () => `Node array did not pass test '${ee(Ue)}'.`,
              fr || re
            );
          }
          e.assertEachNode = re;
          function R(Ht, Ue, Et, fr) {
            g(1, "assertNode") && S(
              Ht !== void 0 && (Ue === void 0 || Ue(Ht)),
              Et || "Unexpected node.",
              () => `Node ${fe(Ht?.kind)} did not pass test '${ee(Ue)}'.`,
              fr || R
            );
          }
          e.assertNode = R;
          function Y(Ht, Ue, Et, fr) {
            g(1, "assertNotNode") && S(
              Ht === void 0 || Ue === void 0 || !Ue(Ht),
              Et || "Unexpected node.",
              () => `Node ${fe(Ht.kind)} should not have passed test '${ee(Ue)}'.`,
              fr || Y
            );
          }
          e.assertNotNode = Y;
          function ue(Ht, Ue, Et, fr) {
            g(1, "assertOptionalNode") && S(
              Ue === void 0 || Ht === void 0 || Ue(Ht),
              Et || "Unexpected node.",
              () => `Node ${fe(Ht?.kind)} did not pass test '${ee(Ue)}'.`,
              fr || ue
            );
          }
          e.assertOptionalNode = ue;
          function pe(Ht, Ue, Et, fr) {
            g(1, "assertOptionalToken") && S(
              Ue === void 0 || Ht === void 0 || Ht.kind === Ue,
              Et || "Unexpected node.",
              () => `Node ${fe(Ht?.kind)} was not a '${fe(Ue)}' token.`,
              fr || pe
            );
          }
          e.assertOptionalToken = pe;
          function H(Ht, Ue, Et) {
            g(1, "assertMissingNode") && S(
              Ht === void 0,
              Ue || "Unexpected node.",
              () => `Node ${fe(Ht.kind)} was unexpected'.`,
              Et || H
            );
          }
          e.assertMissingNode = H;
          function q(Ht) {
          }
          e.type = q;
          function ee(Ht) {
            if (typeof Ht != "function")
              return "";
            if (Ka(Ht, "name"))
              return Ht.name;
            {
              const Ue = Function.prototype.toString.call(Ht), Et = /^function\s+([\w$]+)\s*\(/.exec(Ue);
              return Et ? Et[1] : "";
            }
          }
          e.getFunctionName = ee;
          function oe(Ht) {
            return `{ name: ${xi(Ht.escapedName)}; flags: ${ft(Ht.flags)}; declarations: ${rr(Ht.declarations, (Ue) => fe(Ue.kind))} }`;
          }
          e.formatSymbol = oe;
          function Se(Ht = 0, Ue, Et) {
            const fr = K(Ue);
            if (Ht === 0)
              return fr.length > 0 && fr[0][0] === 0 ? fr[0][1] : "0";
            if (Et) {
              const Hn = [];
              let ei = Ht;
              for (const [Ii, ns] of fr) {
                if (Ii > Ht)
                  break;
                Ii !== 0 && Ii & Ht && (Hn.push(ns), ei &= ~Ii);
              }
              if (ei === 0)
                return Hn.join("|");
            } else
              for (const [Hn, ei] of fr)
                if (Hn === Ht)
                  return ei;
            return Ht.toString();
          }
          e.formatEnum = Se;
          const ae = /* @__PURE__ */ new Map();
          function K(Ht) {
            const Ue = ae.get(Ht);
            if (Ue)
              return Ue;
            const Et = [];
            for (const Hn in Ht) {
              const ei = Ht[Hn];
              typeof ei == "number" && Et.push([ei, Hn]);
            }
            const fr = Jh(Et, (Hn, ei) => No(Hn[0], ei[0]));
            return ae.set(Ht, fr), fr;
          }
          function fe(Ht) {
            return Se(
              Ht,
              i7,
              /*isFlags*/
              !1
            );
          }
          e.formatSyntaxKind = fe;
          function ke(Ht) {
            return Se(
              Ht,
              h7,
              /*isFlags*/
              !1
            );
          }
          e.formatSnippetKind = ke;
          function Oe(Ht) {
            return Se(
              Ht,
              m7,
              /*isFlags*/
              !1
            );
          }
          e.formatScriptKind = Oe;
          function me(Ht) {
            return Se(
              Ht,
              s7,
              /*isFlags*/
              !0
            );
          }
          e.formatNodeFlags = me;
          function be(Ht) {
            return Se(
              Ht,
              a7,
              /*isFlags*/
              !0
            );
          }
          e.formatModifierFlags = be;
          function xe(Ht) {
            return Se(
              Ht,
              g7,
              /*isFlags*/
              !0
            );
          }
          e.formatTransformFlags = xe;
          function De(Ht) {
            return Se(
              Ht,
              y7,
              /*isFlags*/
              !0
            );
          }
          e.formatEmitFlags = De;
          function ft(Ht) {
            return Se(
              Ht,
              _7,
              /*isFlags*/
              !0
            );
          }
          e.formatSymbolFlags = ft;
          function ge(Ht) {
            return Se(
              Ht,
              f7,
              /*isFlags*/
              !0
            );
          }
          e.formatTypeFlags = ge;
          function Fe(Ht) {
            return Se(
              Ht,
              d7,
              /*isFlags*/
              !0
            );
          }
          e.formatSignatureFlags = Fe;
          function $e(Ht) {
            return Se(
              Ht,
              p7,
              /*isFlags*/
              !0
            );
          }
          e.formatObjectFlags = $e;
          function Dt(Ht) {
            return Se(
              Ht,
              hD,
              /*isFlags*/
              !0
            );
          }
          e.formatFlowFlags = Dt;
          function at(Ht) {
            return Se(
              Ht,
              o7,
              /*isFlags*/
              !0
            );
          }
          e.formatRelationComparisonResult = at;
          function Je(Ht) {
            return Se(
              Ht,
              c9,
              /*isFlags*/
              !0
            );
          }
          e.formatCheckMode = Je;
          function pt(Ht) {
            return Se(
              Ht,
              l9,
              /*isFlags*/
              !0
            );
          }
          e.formatSignatureCheckMode = pt;
          function zt(Ht) {
            return Se(
              Ht,
              o9,
              /*isFlags*/
              !0
            );
          }
          e.formatTypeFacts = zt;
          let Wt = !1, gr;
          function Lr(Ht) {
            "__debugFlowFlags" in Ht || Object.defineProperties(Ht, {
              // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
              __tsDebuggerDisplay: {
                value() {
                  const Ue = this.flags & 2 ? "FlowStart" : this.flags & 4 ? "FlowBranchLabel" : this.flags & 8 ? "FlowLoopLabel" : this.flags & 16 ? "FlowAssignment" : this.flags & 32 ? "FlowTrueCondition" : this.flags & 64 ? "FlowFalseCondition" : this.flags & 128 ? "FlowSwitchClause" : this.flags & 256 ? "FlowArrayMutation" : this.flags & 512 ? "FlowCall" : this.flags & 1024 ? "FlowReduceLabel" : this.flags & 1 ? "FlowUnreachable" : "UnknownFlow", Et = this.flags & -2048;
                  return `${Ue}${Et ? ` (${Dt(Et)})` : ""}`;
                }
              },
              __debugFlowFlags: {
                get() {
                  return Se(
                    this.flags,
                    hD,
                    /*isFlags*/
                    !0
                  );
                }
              },
              __debugToString: {
                value() {
                  return ln(this);
                }
              }
            });
          }
          function er(Ht) {
            Wt && (typeof Object.setPrototypeOf == "function" ? (gr || (gr = Object.create(Object.prototype), Lr(gr)), Object.setPrototypeOf(Ht, gr)) : Lr(Ht));
          }
          e.attachFlowNodeDebugInfo = er;
          let jt;
          function Rt(Ht) {
            "__tsDebuggerDisplay" in Ht || Object.defineProperties(Ht, {
              __tsDebuggerDisplay: {
                value(Ue) {
                  return Ue = String(Ue).replace(/(?:,[\s\w\d_]+:[^,]+)+\]$/, "]"), `NodeArray ${Ue}`;
                }
              }
            });
          }
          function Kn(Ht) {
            Wt && (typeof Object.setPrototypeOf == "function" ? (jt || (jt = Object.create(Array.prototype), Rt(jt)), Object.setPrototypeOf(Ht, jt)) : Rt(Ht));
          }
          e.attachNodeArrayDebugInfo = Kn;
          function Ji() {
            if (Wt)
              return;
            const Ht = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap();
            Object.defineProperties(Ll.getSymbolConstructor().prototype, {
              // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
              __tsDebuggerDisplay: {
                value() {
                  const fr = this.flags & 33554432 ? "TransientSymbol" : "Symbol", Hn = this.flags & -33554433;
                  return `${fr} '${Qo(this)}'${Hn ? ` (${ft(Hn)})` : ""}`;
                }
              },
              __debugFlags: {
                get() {
                  return ft(this.flags);
                }
              }
            }), Object.defineProperties(Ll.getTypeConstructor().prototype, {
              // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
              __tsDebuggerDisplay: {
                value() {
                  const fr = this.flags & 67359327 ? `IntrinsicType ${this.intrinsicName}${this.debugIntrinsicName ? ` (${this.debugIntrinsicName})` : ""}` : this.flags & 98304 ? "NullableType" : this.flags & 384 ? `LiteralType ${JSON.stringify(this.value)}` : this.flags & 2048 ? `LiteralType ${this.value.negative ? "-" : ""}${this.value.base10Value}n` : this.flags & 8192 ? "UniqueESSymbolType" : this.flags & 32 ? "EnumType" : this.flags & 1048576 ? "UnionType" : this.flags & 2097152 ? "IntersectionType" : this.flags & 4194304 ? "IndexType" : this.flags & 8388608 ? "IndexedAccessType" : this.flags & 16777216 ? "ConditionalType" : this.flags & 33554432 ? "SubstitutionType" : this.flags & 262144 ? "TypeParameter" : this.flags & 524288 ? this.objectFlags & 3 ? "InterfaceType" : this.objectFlags & 4 ? "TypeReference" : this.objectFlags & 8 ? "TupleType" : this.objectFlags & 16 ? "AnonymousType" : this.objectFlags & 32 ? "MappedType" : this.objectFlags & 1024 ? "ReverseMappedType" : this.objectFlags & 256 ? "EvolvingArrayType" : "ObjectType" : "Type", Hn = this.flags & 524288 ? this.objectFlags & -1344 : 0;
                  return `${fr}${this.symbol ? ` '${Qo(this.symbol)}'` : ""}${Hn ? ` (${$e(Hn)})` : ""}`;
                }
              },
              __debugFlags: {
                get() {
                  return ge(this.flags);
                }
              },
              __debugObjectFlags: {
                get() {
                  return this.flags & 524288 ? $e(this.objectFlags) : "";
                }
              },
              __debugTypeToString: {
                value() {
                  let fr = Ht.get(this);
                  return fr === void 0 && (fr = this.checker.typeToString(this), Ht.set(this, fr)), fr;
                }
              }
            }), Object.defineProperties(Ll.getSignatureConstructor().prototype, {
              __debugFlags: {
                get() {
                  return Fe(this.flags);
                }
              },
              __debugSignatureToString: {
                value() {
                  var fr;
                  return (fr = this.checker) == null ? void 0 : fr.signatureToString(this);
                }
              }
            });
            const Et = [
              Ll.getNodeConstructor(),
              Ll.getIdentifierConstructor(),
              Ll.getTokenConstructor(),
              Ll.getSourceFileConstructor()
            ];
            for (const fr of Et)
              Ka(fr.prototype, "__debugKind") || Object.defineProperties(fr.prototype, {
                // for use with vscode-js-debug's new customDescriptionGenerator in launch.json
                __tsDebuggerDisplay: {
                  value() {
                    return `${Lo(this) ? "GeneratedIdentifier" : Ie(this) ? `Identifier '${an(this)}'` : Pi(this) ? `PrivateIdentifier '${an(this)}'` : aa(this) ? `StringLiteral ${JSON.stringify(this.text.length < 10 ? this.text : this.text.slice(10) + "...")}` : J_(this) ? `NumericLiteral ${this.text}` : cO(this) ? `BigIntLiteral ${this.text}n` : qo(this) ? "TypeParameterDeclaration" : rs(this) ? "ParameterDeclaration" : ac(this) ? "ConstructorDeclaration" : Ef(this) ? "GetAccessorDeclaration" : V_(this) ? "SetAccessorDeclaration" : rx(this) ? "CallSignatureDeclaration" : bw(this) ? "ConstructSignatureDeclaration" : n2(this) ? "IndexSignatureDeclaration" : Sw(this) ? "TypePredicateNode" : Yf(this) ? "TypeReferenceNode" : Bm(this) ? "FunctionTypeNode" : FC(this) ? "ConstructorTypeNode" : nx(this) ? "TypeQueryNode" : W_(this) ? "TypeLiteralNode" : Tw(this) ? "ArrayTypeNode" : ix(this) ? "TupleTypeNode" : pO(this) ? "OptionalTypeNode" : dO(this) ? "RestTypeNode" : uy(this) ? "UnionTypeNode" : sx(this) ? "IntersectionTypeNode" : ax(this) ? "ConditionalTypeNode" : Bb(this) ? "InferTypeNode" : Jb(this) ? "ParenthesizedTypeNode" : xw(this) ? "ThisTypeNode" : zb(this) ? "TypeOperatorNode" : Vb(this) ? "IndexedAccessTypeNode" : LC(this) ? "MappedTypeNode" : _y(this) ? "LiteralTypeNode" : OC(this) ? "NamedTupleMember" : Pg(this) ? "ImportTypeNode" : fe(this.kind)}${this.flags ? ` (${me(this.flags)})` : ""}`;
                  }
                },
                __debugKind: {
                  get() {
                    return fe(this.kind);
                  }
                },
                __debugNodeFlags: {
                  get() {
                    return me(this.flags);
                  }
                },
                __debugModifierFlags: {
                  get() {
                    return be(Sre(this));
                  }
                },
                __debugTransformFlags: {
                  get() {
                    return xe(this.transformFlags);
                  }
                },
                __debugIsParseTreeNode: {
                  get() {
                    return Z4(this);
                  }
                },
                __debugEmitFlags: {
                  get() {
                    return De(ha(this));
                  }
                },
                __debugGetText: {
                  value(Hn) {
                    if (ko(this))
                      return "";
                    let ei = Ue.get(this);
                    if (ei === void 0) {
                      const Ii = as(this), ns = Ii && wr(Ii);
                      ei = ns ? jv(ns, Ii, Hn) : "", Ue.set(this, ei);
                    }
                    return ei;
                  }
                }
              });
            Wt = !0;
          }
          e.enableDebugInfo = Ji;
          function yi(Ht) {
            const Ue = Ht & 7;
            let Et = Ue === 0 ? "in out" : Ue === 3 ? "[bivariant]" : Ue === 2 ? "in" : Ue === 1 ? "out" : Ue === 4 ? "[independent]" : "";
            return Ht & 8 ? Et += " (unmeasurable)" : Ht & 16 && (Et += " (unreliable)"), Et;
          }
          e.formatVariance = yi;
          class os {
            __debugToString() {
              var Ue;
              switch (this.kind) {
                case 3:
                  return ((Ue = this.debugInfo) == null ? void 0 : Ue.call(this)) || "(function mapper)";
                case 0:
                  return `${this.source.__debugTypeToString()} -> ${this.target.__debugTypeToString()}`;
                case 1:
                  return qj(
                    this.sources,
                    this.targets || rr(this.sources, () => "any"),
                    (Et, fr) => `${Et.__debugTypeToString()} -> ${typeof fr == "string" ? fr : fr.__debugTypeToString()}`
                  ).join(", ");
                case 2:
                  return qj(
                    this.sources,
                    this.targets,
                    (Et, fr) => `${Et.__debugTypeToString()} -> ${fr().__debugTypeToString()}`
                  ).join(", ");
                case 5:
                case 4:
                  return `m1: ${this.mapper1.__debugToString().split(`
`).join(`
    `)}
m2: ${this.mapper2.__debugToString().split(`
`).join(`
    `)}`;
                default:
                  return j(this);
              }
            }
          }
          e.DebugTypeMapper = os;
          function hr(Ht) {
            return e.isDebugging ? Object.setPrototypeOf(Ht, os.prototype) : Ht;
          }
          e.attachDebugPrototypeIfDebug = hr;
          function _i(Ht) {
            return console.log(ln(Ht));
          }
          e.printControlFlowGraph = _i;
          function ln(Ht) {
            let Ue = -1;
            function Et(A) {
              return A.id || (A.id = Ue, Ue--), A.id;
            }
            let fr;
            ((A) => {
              A.lr = "─", A.ud = "│", A.dr = "╭", A.dl = "╮", A.ul = "╯", A.ur = "╰", A.udr = "├", A.udl = "┤", A.dlr = "┬", A.ulr = "┴", A.udlr = "╫";
            })(fr || (fr = {}));
            let Hn;
            ((A) => {
              A[A.None = 0] = "None", A[A.Up = 1] = "Up", A[A.Down = 2] = "Down", A[A.Left = 4] = "Left", A[A.Right = 8] = "Right", A[A.UpDown = 3] = "UpDown", A[A.LeftRight = 12] = "LeftRight", A[A.UpLeft = 5] = "UpLeft", A[A.UpRight = 9] = "UpRight", A[A.DownLeft = 6] = "DownLeft", A[A.DownRight = 10] = "DownRight", A[A.UpDownLeft = 7] = "UpDownLeft", A[A.UpDownRight = 11] = "UpDownRight", A[A.UpLeftRight = 13] = "UpLeftRight", A[A.DownLeftRight = 14] = "DownLeftRight", A[A.UpDownLeftRight = 15] = "UpDownLeftRight", A[A.NoChildren = 16] = "NoChildren";
            })(Hn || (Hn = {}));
            const ei = 2032, Ii = 882, ns = /* @__PURE__ */ Object.create(
              /*o*/
              null
            ), Ws = [], _a = et(Ht, /* @__PURE__ */ new Set());
            for (const A of Ws)
              A.text = Yt(A.flowNode, A.circular), Ge(A);
            const cr = mt(_a), br = Be(cr);
            return nt(_a, 0), Kt();
            function Le(A) {
              return !!(A.flags & 128);
            }
            function rt(A) {
              return !!(A.flags & 12) && !!A.antecedents;
            }
            function tt(A) {
              return !!(A.flags & ei);
            }
            function yt(A) {
              return !!(A.flags & Ii);
            }
            function ne(A) {
              const le = [];
              for (const W of A.edges)
                W.source === A && le.push(W.target);
              return le;
            }
            function we(A) {
              const le = [];
              for (const W of A.edges)
                W.target === A && le.push(W.source);
              return le;
            }
            function et(A, le) {
              const W = Et(A);
              let ce = ns[W];
              if (ce && le.has(A))
                return ce.circular = !0, ce = {
                  id: -1,
                  flowNode: A,
                  edges: [],
                  text: "",
                  lane: -1,
                  endLane: -1,
                  level: -1,
                  circular: "circularity"
                }, Ws.push(ce), ce;
              if (le.add(A), !ce)
                if (ns[W] = ce = { id: W, flowNode: A, edges: [], text: "", lane: -1, endLane: -1, level: -1, circular: !1 }, Ws.push(ce), rt(A))
                  for (const Ne of A.antecedents)
                    B(ce, Ne, le);
                else
                  tt(A) && B(ce, A.antecedent, le);
              return le.delete(A), ce;
            }
            function B(A, le, W) {
              const ce = et(le, W), Ne = { source: A, target: ce };
              A.edges.push(Ne), ce.edges.push(Ne);
            }
            function Ge(A) {
              if (A.level !== -1)
                return A.level;
              let le = 0;
              for (const W of we(A))
                le = Math.max(le, Ge(W) + 1);
              return A.level = le;
            }
            function mt(A) {
              let le = 0;
              for (const W of ne(A))
                le = Math.max(le, mt(W));
              return le + 1;
            }
            function Be(A) {
              const le = Pe(Array(A), 0);
              for (const W of Ws)
                le[W.level] = Math.max(le[W.level], W.text.length);
              return le;
            }
            function nt(A, le) {
              if (A.lane === -1) {
                A.lane = le, A.endLane = le;
                const W = ne(A);
                for (let ce = 0; ce < W.length; ce++) {
                  ce > 0 && le++;
                  const Ne = W[ce];
                  nt(Ne, le), Ne.endLane > A.endLane && (le = Ne.endLane);
                }
                A.endLane = le;
              }
            }
            function wt(A) {
              if (A & 2)
                return "Start";
              if (A & 4)
                return "Branch";
              if (A & 8)
                return "Loop";
              if (A & 16)
                return "Assignment";
              if (A & 32)
                return "True";
              if (A & 64)
                return "False";
              if (A & 128)
                return "SwitchClause";
              if (A & 256)
                return "ArrayMutation";
              if (A & 512)
                return "Call";
              if (A & 1024)
                return "ReduceLabel";
              if (A & 1)
                return "Unreachable";
              throw new Error();
            }
            function nr(A) {
              const le = wr(A);
              return jv(
                le,
                A,
                /*includeTrivia*/
                !1
              );
            }
            function Yt(A, le) {
              let W = wt(A.flags);
              if (le && (W = `${W}#${Et(A)}`), yt(A))
                A.node && (W += ` (${nr(A.node)})`);
              else if (Le(A)) {
                const ce = [];
                for (let Ne = A.clauseStart; Ne < A.clauseEnd; Ne++) {
                  const Ce = A.switchStatement.caseBlock.clauses[Ne];
                  p3(Ce) ? ce.push("default") : ce.push(nr(Ce.expression));
                }
                W += ` (${ce.join(", ")})`;
              }
              return le === "circularity" ? `Circular(${W})` : W;
            }
            function Kt() {
              const A = br.length, le = Ws.reduce((_t, Tt) => Math.max(_t, Tt.lane), 0) + 1, W = Pe(Array(le), ""), ce = br.map(() => Array(le)), Ne = br.map(() => Pe(Array(le), 0));
              for (const _t of Ws) {
                ce[_t.level][_t.lane] = _t;
                const Tt = ne(_t);
                for (let ar = 0; ar < Tt.length; ar++) {
                  const Er = Tt[ar];
                  let Nr = 8;
                  Er.lane === _t.lane && (Nr |= 4), ar > 0 && (Nr |= 1), ar < Tt.length - 1 && (Nr |= 2), Ne[_t.level][Er.lane] |= Nr;
                }
                Tt.length === 0 && (Ne[_t.level][_t.lane] |= 16);
                const Jt = we(_t);
                for (let ar = 0; ar < Jt.length; ar++) {
                  const Er = Jt[ar];
                  let Nr = 4;
                  ar > 0 && (Nr |= 1), ar < Jt.length - 1 && (Nr |= 2), Ne[_t.level - 1][Er.lane] |= Nr;
                }
              }
              for (let _t = 0; _t < A; _t++)
                for (let Tt = 0; Tt < le; Tt++) {
                  const Jt = _t > 0 ? Ne[_t - 1][Tt] : 0, ar = Tt > 0 ? Ne[_t][Tt - 1] : 0;
                  let Er = Ne[_t][Tt];
                  Er || (Jt & 8 && (Er |= 12), ar & 2 && (Er |= 3), Ne[_t][Tt] = Er);
                }
              for (let _t = 0; _t < A; _t++)
                for (let Tt = 0; Tt < W.length; Tt++) {
                  const Jt = Ne[_t][Tt], ar = Jt & 4 ? "─" : " ", Er = ce[_t][Tt];
                  Er ? (Ce(Tt, Er.text), _t < A - 1 && (Ce(Tt, " "), Ce(Tt, St(ar, br[_t] - Er.text.length)))) : _t < A - 1 && Ce(Tt, St(ar, br[_t] + 1)), Ce(Tt, V(Jt)), Ce(Tt, Jt & 8 && _t < A - 1 && !ce[_t + 1][Tt] ? "─" : " ");
                }
              return `
${W.join(`
`)}
`;
              function Ce(_t, Tt) {
                W[_t] += Tt;
              }
            }
            function V(A) {
              switch (A) {
                case 3:
                  return "│";
                case 12:
                  return "─";
                case 5:
                  return "╯";
                case 9:
                  return "╰";
                case 6:
                  return "╮";
                case 10:
                  return "╭";
                case 7:
                  return "┤";
                case 11:
                  return "├";
                case 13:
                  return "┴";
                case 14:
                  return "┬";
                case 15:
                  return "╫";
              }
              return " ";
            }
            function Pe(A, le) {
              if (A.fill)
                A.fill(le);
              else
                for (let W = 0; W < A.length; W++)
                  A[W] = le;
              return A;
            }
            function St(A, le) {
              if (A.repeat)
                return le > 0 ? A.repeat(le) : "";
              let W = "";
              for (; W.length < le; )
                W += A;
              return W;
            }
          }
          e.formatControlFlowGraph = ln;
        })(E || (E = {}));
      }
    });
    function _0e(e) {
      const t = p0e.exec(e);
      if (!t)
        return;
      const [, n, i = "0", s = "0", o = "", c = ""] = t;
      if (!(o && !d0e.test(o)) && !(c && !g0e.test(c)))
        return {
          major: parseInt(n, 10),
          minor: parseInt(i, 10),
          patch: parseInt(s, 10),
          prerelease: o,
          build: c
        };
    }
    function z5e(e, t) {
      if (e === t)
        return 0;
      if (e.length === 0)
        return t.length === 0 ? 0 : 1;
      if (t.length === 0)
        return -1;
      const n = Math.min(e.length, t.length);
      for (let i = 0; i < n; i++) {
        const s = e[i], o = t[i];
        if (s === o)
          continue;
        const c = QK.test(s), u = QK.test(o);
        if (c || u) {
          if (c !== u)
            return c ? -1 : 1;
          const f = No(+s, +o);
          if (f)
            return f;
        } else {
          const f = hu(s, o);
          if (f)
            return f;
        }
      }
      return No(e.length, t.length);
    }
    function f0e(e) {
      const t = [];
      for (let n of e.trim().split(y0e)) {
        if (!n)
          continue;
        const i = [];
        n = n.trim();
        const s = S0e.exec(n);
        if (s) {
          if (!V5e(s[1], s[2], i))
            return;
        } else
          for (const o of n.split(v0e)) {
            const c = T0e.exec(o.trim());
            if (!c || !W5e(c[1], c[2], i))
              return;
          }
        t.push(i);
      }
      return t;
    }
    function XK(e) {
      const t = b0e.exec(e);
      if (!t)
        return;
      const [, n, i = "*", s = "*", o, c] = t;
      return { version: new Bp(
        mp(n) ? 0 : parseInt(n, 10),
        mp(n) || mp(i) ? 0 : parseInt(i, 10),
        mp(n) || mp(i) || mp(s) ? 0 : parseInt(s, 10),
        o,
        c
      ), major: n, minor: i, patch: s };
    }
    function V5e(e, t, n) {
      const i = XK(e);
      if (!i)
        return !1;
      const s = XK(t);
      return s ? (mp(i.major) || n.push(wm(">=", i.version)), mp(s.major) || n.push(
        mp(s.minor) ? wm("<", s.version.increment("major")) : mp(s.patch) ? wm("<", s.version.increment("minor")) : wm("<=", s.version)
      ), !0) : !1;
    }
    function W5e(e, t, n) {
      const i = XK(t);
      if (!i)
        return !1;
      const { version: s, major: o, minor: c, patch: u } = i;
      if (mp(o))
        (e === "<" || e === ">") && n.push(wm("<", Bp.zero));
      else
        switch (e) {
          case "~":
            n.push(wm(">=", s)), n.push(wm(
              "<",
              s.increment(
                mp(c) ? "major" : "minor"
              )
            ));
            break;
          case "^":
            n.push(wm(">=", s)), n.push(wm(
              "<",
              s.increment(
                s.major > 0 || mp(c) ? "major" : s.minor > 0 || mp(u) ? "minor" : "patch"
              )
            ));
            break;
          case "<":
          case ">=":
            n.push(
              mp(c) || mp(u) ? wm(e, s.with({ prerelease: "0" })) : wm(e, s)
            );
            break;
          case "<=":
          case ">":
            n.push(
              mp(c) ? wm(e === "<=" ? "<" : ">=", s.increment("major").with({ prerelease: "0" })) : mp(u) ? wm(e === "<=" ? "<" : ">=", s.increment("minor").with({ prerelease: "0" })) : wm(e, s)
            );
            break;
          case "=":
          case void 0:
            mp(c) || mp(u) ? (n.push(wm(">=", s.with({ prerelease: "0" }))), n.push(wm("<", s.increment(mp(c) ? "major" : "minor").with({ prerelease: "0" })))) : n.push(wm("=", s));
            break;
          default:
            return !1;
        }
      return !0;
    }
    function mp(e) {
      return e === "*" || e === "x" || e === "X";
    }
    function wm(e, t) {
      return { operator: e, operand: t };
    }
    function U5e(e, t) {
      if (t.length === 0)
        return !0;
      for (const n of t)
        if (q5e(e, n))
          return !0;
      return !1;
    }
    function q5e(e, t) {
      for (const n of t)
        if (!H5e(e, n.operator, n.operand))
          return !1;
      return !0;
    }
    function H5e(e, t, n) {
      const i = e.compareTo(n);
      switch (t) {
        case "<":
          return i < 0;
        case "<=":
          return i <= 0;
        case ">":
          return i > 0;
        case ">=":
          return i >= 0;
        case "=":
          return i === 0;
        default:
          return E.assertNever(t);
      }
    }
    function G5e(e) {
      return rr(e, $5e).join(" || ") || "*";
    }
    function $5e(e) {
      return rr(e, X5e).join(" ");
    }
    function X5e(e) {
      return `${e.operator}${e.operand}`;
    }
    var p0e, d0e, m0e, g0e, h0e, QK, hB, Bp, dD, y0e, v0e, b0e, S0e, T0e, Q5e = Pt({
      "src/compiler/semver.ts"() {
        Fs(), p0e = /^(0|[1-9]\d*)(?:\.(0|[1-9]\d*)(?:\.(0|[1-9]\d*)(?:-([a-z0-9-.]+))?(?:\+([a-z0-9-.]+))?)?)?$/i, d0e = /^(?:0|[1-9]\d*|[a-z-][a-z0-9-]*)(?:\.(?:0|[1-9]\d*|[a-z-][a-z0-9-]*))*$/i, m0e = /^(?:0|[1-9]\d*|[a-z-][a-z0-9-]*)$/i, g0e = /^[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i, h0e = /^[a-z0-9-]+$/i, QK = /^(0|[1-9]\d*)$/, hB = class zI {
          constructor(t, n = 0, i = 0, s = "", o = "") {
            typeof t == "string" && ({ major: t, minor: n, patch: i, prerelease: s, build: o } = E.checkDefined(_0e(t), "Invalid version")), E.assert(t >= 0, "Invalid argument: major"), E.assert(n >= 0, "Invalid argument: minor"), E.assert(i >= 0, "Invalid argument: patch");
            const c = s ? ts(s) ? s : s.split(".") : We, u = o ? ts(o) ? o : o.split(".") : We;
            E.assert(Vi(c, (f) => m0e.test(f)), "Invalid argument: prerelease"), E.assert(Vi(u, (f) => h0e.test(f)), "Invalid argument: build"), this.major = t, this.minor = n, this.patch = i, this.prerelease = c, this.build = u;
          }
          static tryParse(t) {
            const n = _0e(t);
            if (!n)
              return;
            const { major: i, minor: s, patch: o, prerelease: c, build: u } = n;
            return new zI(i, s, o, c, u);
          }
          compareTo(t) {
            return this === t ? 0 : t === void 0 ? 1 : No(this.major, t.major) || No(this.minor, t.minor) || No(this.patch, t.patch) || z5e(this.prerelease, t.prerelease);
          }
          increment(t) {
            switch (t) {
              case "major":
                return new zI(this.major + 1, 0, 0);
              case "minor":
                return new zI(this.major, this.minor + 1, 0);
              case "patch":
                return new zI(this.major, this.minor, this.patch + 1);
              default:
                return E.assertNever(t);
            }
          }
          with(t) {
            const {
              major: n = this.major,
              minor: i = this.minor,
              patch: s = this.patch,
              prerelease: o = this.prerelease,
              build: c = this.build
            } = t;
            return new zI(n, i, s, o, c);
          }
          toString() {
            let t = `${this.major}.${this.minor}.${this.patch}`;
            return ct(this.prerelease) && (t += `-${this.prerelease.join(".")}`), ct(this.build) && (t += `+${this.build.join(".")}`), t;
          }
        }, hB.zero = new hB(0, 0, 0, ["0"]), Bp = hB, dD = class T5e {
          constructor(t) {
            this._alternatives = t ? E.checkDefined(f0e(t), "Invalid range spec.") : We;
          }
          static tryParse(t) {
            const n = f0e(t);
            if (n) {
              const i = new T5e("");
              return i._alternatives = n, i;
            }
          }
          /**
           * Tests whether a version matches the range. This is equivalent to `satisfies(version, range, { includePrerelease: true })`.
           * in `node-semver`.
           */
          test(t) {
            return typeof t == "string" && (t = new Bp(t)), U5e(t, this._alternatives);
          }
          toString() {
            return G5e(this._alternatives);
          }
        }, y0e = /\|\|/g, v0e = /\s+/g, b0e = /^([xX*0]|[1-9]\d*)(?:\.([xX*0]|[1-9]\d*)(?:\.([xX*0]|[1-9]\d*)(?:-([a-z0-9-.]+))?(?:\+([a-z0-9-.]+))?)?)?$/i, S0e = /^\s*([a-z0-9-+.*]+)\s+-\s+([a-z0-9-+.*]+)\s*$/i, T0e = /^(~|\^|<|<=|>|>=|=)?\s*([a-z0-9-+.*]+)$/i;
      }
    });
    function x0e(e, t) {
      return typeof e == "object" && typeof e.timeOrigin == "number" && typeof e.mark == "function" && typeof e.measure == "function" && typeof e.now == "function" && typeof e.clearMarks == "function" && typeof e.clearMeasures == "function" && typeof t == "function";
    }
    function Y5e() {
      if (typeof performance == "object" && typeof PerformanceObserver == "function" && x0e(performance, PerformanceObserver))
        return {
          // For now we always write native performance events when running in the browser. We may
          // make this conditional in the future if we find that native web performance hooks
          // in the browser also slow down compilation.
          shouldWriteNativeEvents: !0,
          performance,
          PerformanceObserver
        };
    }
    function Z5e() {
      if (fB())
        try {
          const { performance: e, PerformanceObserver: t } = kk;
          if (x0e(e, t))
            return {
              // By default, only write native events when generating a cpu profile or using the v8 profiler.
              shouldWriteNativeEvents: !1,
              performance: e,
              PerformanceObserver: t
            };
        } catch {
        }
    }
    function YK() {
      return yB;
    }
    var yB, ZK, xo, K5e = Pt({
      "src/compiler/performanceCore.ts"() {
        Fs(), yB = Y5e() || Z5e(), ZK = yB?.performance, xo = ZK ? () => ZK.now() : Date.now ? Date.now : () => +/* @__PURE__ */ new Date();
      }
    }), n7, Nu, eFe = Pt({
      "src/compiler/perfLogger.ts"() {
        try {
          const e = process.env.TS_ETW_MODULE_PATH ?? "./node_modules/@microsoft/typescript-etw";
          n7 = h5e(e);
        } catch {
          n7 = void 0;
        }
        Nu = n7?.logEvent ? n7 : void 0;
      }
    });
    function k0e(e, t, n, i) {
      return e ? vB(t, n, i) : bB;
    }
    function vB(e, t, n) {
      let i = 0;
      return {
        enter: s,
        exit: o
      };
      function s() {
        ++i === 1 && Io(t);
      }
      function o() {
        --i === 0 ? (Io(n), xf(e, t, n)) : i < 0 && E.fail("enter/exit count does not match.");
      }
    }
    function Io(e) {
      if (Ak) {
        const t = V4.get(e) ?? 0;
        V4.set(e, t + 1), Nk.set(e, xo()), _b?.mark(e), typeof onProfilerEvent == "function" && onProfilerEvent(e);
      }
    }
    function xf(e, t, n) {
      if (Ak) {
        const i = (n !== void 0 ? Nk.get(n) : void 0) ?? xo(), s = (t !== void 0 ? Nk.get(t) : void 0) ?? KK, o = Ik.get(e) || 0;
        Ik.set(e, o + (i - s)), _b?.measure(e, t, n);
      }
    }
    function tFe(e) {
      return V4.get(e) || 0;
    }
    function rFe(e) {
      return Ik.get(e) || 0;
    }
    function nFe(e) {
      Ik.forEach((t, n) => e(n, t));
    }
    function iFe(e) {
      Nk.forEach((t, n) => e(n));
    }
    function sFe(e) {
      e !== void 0 ? Ik.delete(e) : Ik.clear(), _b?.clearMeasures(e);
    }
    function aFe(e) {
      e !== void 0 ? (V4.delete(e), Nk.delete(e)) : (V4.clear(), Nk.clear()), _b?.clearMarks(e);
    }
    function oFe() {
      return Ak;
    }
    function cFe(e = Ul) {
      var t;
      return Ak || (Ak = !0, mD || (mD = YK()), mD && (KK = mD.performance.timeOrigin, (mD.shouldWriteNativeEvents || (t = e?.cpuProfilingEnabled) != null && t.call(e) || e?.debugMode) && (_b = mD.performance))), !0;
    }
    function lFe() {
      Ak && (Nk.clear(), V4.clear(), Ik.clear(), _b = void 0, Ak = !1);
    }
    var mD, _b, bB, Ak, KK, Nk, V4, Ik, uFe = Pt({
      "src/compiler/performance.ts"() {
        Fs(), bB = { enter: Ca, exit: Ca }, Ak = !1, KK = xo(), Nk = /* @__PURE__ */ new Map(), V4 = /* @__PURE__ */ new Map(), Ik = /* @__PURE__ */ new Map();
      }
    }), eee = {};
    Do(eee, {
      clearMarks: () => aFe,
      clearMeasures: () => sFe,
      createTimer: () => vB,
      createTimerIf: () => k0e,
      disable: () => lFe,
      enable: () => cFe,
      forEachMark: () => iFe,
      forEachMeasure: () => nFe,
      getCount: () => tFe,
      getDuration: () => rFe,
      isEnabled: () => oFe,
      mark: () => Io,
      measure: () => xf,
      nullTimer: () => bB
    });
    var fb = Pt({
      "src/compiler/_namespaces/ts.performance.ts"() {
        uFe();
      }
    }), qr, gD, tee, ree, _Fe = Pt({
      "src/compiler/tracing.ts"() {
        Fs(), fb(), ((e) => {
          let t, n = 0, i = 0, s;
          const o = [];
          let c;
          const u = [];
          function f(re, R, Y) {
            if (E.assert(!qr, "Tracing already started"), t === void 0)
              try {
                t = kk;
              } catch (ee) {
                throw new Error(`tracing requires having fs
(original error: ${ee.message || ee})`);
              }
            s = re, o.length = 0, c === void 0 && (c = Mn(R, "legend.json")), t.existsSync(R) || t.mkdirSync(R, { recursive: !0 });
            const ue = s === "build" ? `.${process.pid}-${++n}` : s === "server" ? `.${process.pid}` : "", pe = Mn(R, `trace${ue}.json`), H = Mn(R, `types${ue}.json`);
            u.push({
              configFilePath: Y,
              tracePath: pe,
              typesPath: H
            }), i = t.openSync(pe, "w"), qr = e;
            const q = { cat: "__metadata", ph: "M", ts: 1e3 * xo(), pid: 1, tid: 1 };
            t.writeSync(
              i,
              `[
` + [{ name: "process_name", args: { name: "tsc" }, ...q }, { name: "thread_name", args: { name: "Main" }, ...q }, { name: "TracingStartedInBrowser", ...q, cat: "disabled-by-default-devtools.timeline" }].map((ee) => JSON.stringify(ee)).join(`,
`)
            );
          }
          e.startTracing = f;
          function g() {
            E.assert(qr, "Tracing is not in progress"), E.assert(!!o.length == (s !== "server")), t.writeSync(i, `
]
`), t.closeSync(i), qr = void 0, o.length ? $(o) : u[u.length - 1].typesPath = void 0;
          }
          e.stopTracing = g;
          function d(re) {
            s !== "server" && o.push(re);
          }
          e.recordType = d, ((re) => {
            re.Parse = "parse", re.Program = "program", re.Bind = "bind", re.Check = "check", re.CheckTypes = "checkTypes", re.Emit = "emit", re.Session = "session";
          })(e.Phase || (e.Phase = {}));
          function y(re, R, Y) {
            J("I", re, R, Y, '"s":"g"');
          }
          e.instant = y;
          const S = [];
          function T(re, R, Y, ue = !1) {
            ue && J("B", re, R, Y), S.push({ phase: re, name: R, args: Y, time: 1e3 * xo(), separateBeginAndEnd: ue });
          }
          e.push = T;
          function k(re) {
            E.assert(S.length > 0), F(S.length - 1, 1e3 * xo(), re), S.length--;
          }
          e.pop = k;
          function w() {
            const re = 1e3 * xo();
            for (let R = S.length - 1; R >= 0; R--)
              F(R, re);
            S.length = 0;
          }
          e.popAll = w;
          const P = 1e3 * 10;
          function F(re, R, Y) {
            const { phase: ue, name: pe, args: H, time: q, separateBeginAndEnd: ee } = S[re];
            ee ? (E.assert(!Y, "`results` are not supported for events with `separateBeginAndEnd`"), J(
              "E",
              ue,
              pe,
              H,
              /*extras*/
              void 0,
              R
            )) : P - q % P <= R - q && J("X", ue, pe, { ...H, results: Y }, `"dur":${R - q}`, q);
          }
          function J(re, R, Y, ue, pe, H = 1e3 * xo()) {
            s === "server" && R === "checkTypes" || (Io("beginTracing"), t.writeSync(i, `,
{"pid":1,"tid":1,"ph":"${re}","cat":"${R}","ts":${H},"name":"${Y}"`), pe && t.writeSync(i, `,${pe}`), ue && t.writeSync(i, `,"args":${JSON.stringify(ue)}`), t.writeSync(i, "}"), Io("endTracing"), xf("Tracing", "beginTracing", "endTracing"));
          }
          function U(re) {
            const R = wr(re);
            return R ? {
              path: R.path,
              start: Y(Ga(R, re.pos)),
              end: Y(Ga(R, re.end))
            } : void 0;
            function Y(ue) {
              return {
                line: ue.line + 1,
                character: ue.character + 1
              };
            }
          }
          function $(re) {
            var R, Y, ue, pe, H, q, ee, oe, Se, ae, K, fe, ke, Oe, me, be, xe, De, ft;
            Io("beginDumpTypes");
            const ge = u[u.length - 1].typesPath, Fe = t.openSync(ge, "w"), $e = /* @__PURE__ */ new Map();
            t.writeSync(Fe, "[");
            const Dt = re.length;
            for (let at = 0; at < Dt; at++) {
              const Je = re[at], pt = Je.objectFlags, zt = Je.aliasSymbol ?? Je.symbol;
              let Wt;
              if (pt & 16 | Je.flags & 2944)
                try {
                  Wt = (R = Je.checker) == null ? void 0 : R.typeToString(Je);
                } catch {
                  Wt = void 0;
                }
              let gr = {};
              if (Je.flags & 8388608) {
                const hr = Je;
                gr = {
                  indexedAccessObjectType: (Y = hr.objectType) == null ? void 0 : Y.id,
                  indexedAccessIndexType: (ue = hr.indexType) == null ? void 0 : ue.id
                };
              }
              let Lr = {};
              if (pt & 4) {
                const hr = Je;
                Lr = {
                  instantiatedType: (pe = hr.target) == null ? void 0 : pe.id,
                  typeArguments: (H = hr.resolvedTypeArguments) == null ? void 0 : H.map((_i) => _i.id),
                  referenceLocation: U(hr.node)
                };
              }
              let er = {};
              if (Je.flags & 16777216) {
                const hr = Je;
                er = {
                  conditionalCheckType: (q = hr.checkType) == null ? void 0 : q.id,
                  conditionalExtendsType: (ee = hr.extendsType) == null ? void 0 : ee.id,
                  conditionalTrueType: ((oe = hr.resolvedTrueType) == null ? void 0 : oe.id) ?? -1,
                  conditionalFalseType: ((Se = hr.resolvedFalseType) == null ? void 0 : Se.id) ?? -1
                };
              }
              let jt = {};
              if (Je.flags & 33554432) {
                const hr = Je;
                jt = {
                  substitutionBaseType: (ae = hr.baseType) == null ? void 0 : ae.id,
                  constraintType: (K = hr.constraint) == null ? void 0 : K.id
                };
              }
              let Rt = {};
              if (pt & 1024) {
                const hr = Je;
                Rt = {
                  reverseMappedSourceType: (fe = hr.source) == null ? void 0 : fe.id,
                  reverseMappedMappedType: (ke = hr.mappedType) == null ? void 0 : ke.id,
                  reverseMappedConstraintType: (Oe = hr.constraintType) == null ? void 0 : Oe.id
                };
              }
              let Kn = {};
              if (pt & 256) {
                const hr = Je;
                Kn = {
                  evolvingArrayElementType: hr.elementType.id,
                  evolvingArrayFinalType: (me = hr.finalArrayType) == null ? void 0 : me.id
                };
              }
              let Ji;
              const yi = Je.checker.getRecursionIdentity(Je);
              yi && (Ji = $e.get(yi), Ji || (Ji = $e.size, $e.set(yi, Ji)));
              const os = {
                id: Je.id,
                intrinsicName: Je.intrinsicName,
                symbolName: zt?.escapedName && xi(zt.escapedName),
                recursionId: Ji,
                isTuple: pt & 8 ? !0 : void 0,
                unionTypes: Je.flags & 1048576 ? (be = Je.types) == null ? void 0 : be.map((hr) => hr.id) : void 0,
                intersectionTypes: Je.flags & 2097152 ? Je.types.map((hr) => hr.id) : void 0,
                aliasTypeArguments: (xe = Je.aliasTypeArguments) == null ? void 0 : xe.map((hr) => hr.id),
                keyofType: Je.flags & 4194304 ? (De = Je.type) == null ? void 0 : De.id : void 0,
                ...gr,
                ...Lr,
                ...er,
                ...jt,
                ...Rt,
                ...Kn,
                destructuringPattern: U(Je.pattern),
                firstDeclaration: U((ft = zt?.declarations) == null ? void 0 : ft[0]),
                flags: E.formatTypeFlags(Je.flags).split("|"),
                display: Wt
              };
              t.writeSync(Fe, JSON.stringify(os)), at < Dt - 1 && t.writeSync(Fe, `,
`);
            }
            t.writeSync(Fe, `]
`), t.closeSync(Fe), Io("endDumpTypes"), xf("Dump types", "beginDumpTypes", "endDumpTypes");
          }
          function j() {
            c && t.writeFileSync(c, JSON.stringify(u));
          }
          e.dumpLegend = j;
        })(gD || (gD = {})), tee = gD.startTracing, ree = gD.dumpLegend;
      }
    });
    function pb(e, t = !0) {
      const n = yD[e.category];
      return t ? n.toLowerCase() : n;
    }
    var i7, s7, a7, SB, o7, c7, TB, hD, xB, Fk, l7, kB, CB, u7, EB, PB, DB, wB, AB, NB, IB, FB, OB, LB, MB, _7, RB, jB, BB, JB, f7, p7, zB, VB, WB, UB, qB, HB, d7, GB, $B, XB, QB, YB, ZB, yD, Ok, KB, eJ, tJ, rJ, W4, nJ, iJ, sJ, m7, aJ, oJ, cJ, lJ, uJ, g7, h7, y7, _J, fJ, pJ, dJ, mJ, gJ, hJ, yJ, vD, vJ, C0e = Pt({
      "src/compiler/types.ts"() {
        i7 = /* @__PURE__ */ ((e) => (e[e.Unknown = 0] = "Unknown", e[e.EndOfFileToken = 1] = "EndOfFileToken", e[e.SingleLineCommentTrivia = 2] = "SingleLineCommentTrivia", e[e.MultiLineCommentTrivia = 3] = "MultiLineCommentTrivia", e[e.NewLineTrivia = 4] = "NewLineTrivia", e[e.WhitespaceTrivia = 5] = "WhitespaceTrivia", e[e.ShebangTrivia = 6] = "ShebangTrivia", e[e.ConflictMarkerTrivia = 7] = "ConflictMarkerTrivia", e[e.NonTextFileMarkerTrivia = 8] = "NonTextFileMarkerTrivia", e[e.NumericLiteral = 9] = "NumericLiteral", e[e.BigIntLiteral = 10] = "BigIntLiteral", e[e.StringLiteral = 11] = "StringLiteral", e[e.JsxText = 12] = "JsxText", e[e.JsxTextAllWhiteSpaces = 13] = "JsxTextAllWhiteSpaces", e[e.RegularExpressionLiteral = 14] = "RegularExpressionLiteral", e[e.NoSubstitutionTemplateLiteral = 15] = "NoSubstitutionTemplateLiteral", e[e.TemplateHead = 16] = "TemplateHead", e[e.TemplateMiddle = 17] = "TemplateMiddle", e[e.TemplateTail = 18] = "TemplateTail", e[e.OpenBraceToken = 19] = "OpenBraceToken", e[e.CloseBraceToken = 20] = "CloseBraceToken", e[e.OpenParenToken = 21] = "OpenParenToken", e[e.CloseParenToken = 22] = "CloseParenToken", e[e.OpenBracketToken = 23] = "OpenBracketToken", e[e.CloseBracketToken = 24] = "CloseBracketToken", e[e.DotToken = 25] = "DotToken", e[e.DotDotDotToken = 26] = "DotDotDotToken", e[e.SemicolonToken = 27] = "SemicolonToken", e[e.CommaToken = 28] = "CommaToken", e[e.QuestionDotToken = 29] = "QuestionDotToken", e[e.LessThanToken = 30] = "LessThanToken", e[e.LessThanSlashToken = 31] = "LessThanSlashToken", e[e.GreaterThanToken = 32] = "GreaterThanToken", e[e.LessThanEqualsToken = 33] = "LessThanEqualsToken", e[e.GreaterThanEqualsToken = 34] = "GreaterThanEqualsToken", e[e.EqualsEqualsToken = 35] = "EqualsEqualsToken", e[e.ExclamationEqualsToken = 36] = "ExclamationEqualsToken", e[e.EqualsEqualsEqualsToken = 37] = "EqualsEqualsEqualsToken", e[e.ExclamationEqualsEqualsToken = 38] = "ExclamationEqualsEqualsToken", e[e.EqualsGreaterThanToken = 39] = "EqualsGreaterThanToken", e[e.PlusToken = 40] = "PlusToken", e[e.MinusToken = 41] = "MinusToken", e[e.AsteriskToken = 42] = "AsteriskToken", e[e.AsteriskAsteriskToken = 43] = "AsteriskAsteriskToken", e[e.SlashToken = 44] = "SlashToken", e[e.PercentToken = 45] = "PercentToken", e[e.PlusPlusToken = 46] = "PlusPlusToken", e[e.MinusMinusToken = 47] = "MinusMinusToken", e[e.LessThanLessThanToken = 48] = "LessThanLessThanToken", e[e.GreaterThanGreaterThanToken = 49] = "GreaterThanGreaterThanToken", e[e.GreaterThanGreaterThanGreaterThanToken = 50] = "GreaterThanGreaterThanGreaterThanToken", e[e.AmpersandToken = 51] = "AmpersandToken", e[e.BarToken = 52] = "BarToken", e[e.CaretToken = 53] = "CaretToken", e[e.ExclamationToken = 54] = "ExclamationToken", e[e.TildeToken = 55] = "TildeToken", e[e.AmpersandAmpersandToken = 56] = "AmpersandAmpersandToken", e[e.BarBarToken = 57] = "BarBarToken", e[e.QuestionToken = 58] = "QuestionToken", e[e.ColonToken = 59] = "ColonToken", e[e.AtToken = 60] = "AtToken", e[e.QuestionQuestionToken = 61] = "QuestionQuestionToken", e[e.BacktickToken = 62] = "BacktickToken", e[e.HashToken = 63] = "HashToken", e[e.EqualsToken = 64] = "EqualsToken", e[e.PlusEqualsToken = 65] = "PlusEqualsToken", e[e.MinusEqualsToken = 66] = "MinusEqualsToken", e[e.AsteriskEqualsToken = 67] = "AsteriskEqualsToken", e[e.AsteriskAsteriskEqualsToken = 68] = "AsteriskAsteriskEqualsToken", e[e.SlashEqualsToken = 69] = "SlashEqualsToken", e[e.PercentEqualsToken = 70] = "PercentEqualsToken", e[e.LessThanLessThanEqualsToken = 71] = "LessThanLessThanEqualsToken", e[e.GreaterThanGreaterThanEqualsToken = 72] = "GreaterThanGreaterThanEqualsToken", e[e.GreaterThanGreaterThanGreaterThanEqualsToken = 73] = "GreaterThanGreaterThanGreaterThanEqualsToken", e[e.AmpersandEqualsToken = 74] = "AmpersandEqualsToken", e[e.BarEqualsToken = 75] = "BarEqualsToken", e[e.BarBarEqualsToken = 76] = "BarBarEqualsToken", e[e.AmpersandAmpersandEqualsToken = 77] = "AmpersandAmpersandEqualsToken", e[e.QuestionQuestionEqualsToken = 78] = "QuestionQuestionEqualsToken", e[e.CaretEqualsToken = 79] = "CaretEqualsToken", e[e.Identifier = 80] = "Identifier", e[e.PrivateIdentifier = 81] = "PrivateIdentifier", e[e.JSDocCommentTextToken = 82] = "JSDocCommentTextToken", e[e.BreakKeyword = 83] = "BreakKeyword", e[e.CaseKeyword = 84] = "CaseKeyword", e[e.CatchKeyword = 85] = "CatchKeyword", e[e.ClassKeyword = 86] = "ClassKeyword", e[e.ConstKeyword = 87] = "ConstKeyword", e[e.ContinueKeyword = 88] = "ContinueKeyword", e[e.DebuggerKeyword = 89] = "DebuggerKeyword", e[e.DefaultKeyword = 90] = "DefaultKeyword", e[e.DeleteKeyword = 91] = "DeleteKeyword", e[e.DoKeyword = 92] = "DoKeyword", e[e.ElseKeyword = 93] = "ElseKeyword", e[e.EnumKeyword = 94] = "EnumKeyword", e[e.ExportKeyword = 95] = "ExportKeyword", e[e.ExtendsKeyword = 96] = "ExtendsKeyword", e[e.FalseKeyword = 97] = "FalseKeyword", e[e.FinallyKeyword = 98] = "FinallyKeyword", e[e.ForKeyword = 99] = "ForKeyword", e[e.FunctionKeyword = 100] = "FunctionKeyword", e[e.IfKeyword = 101] = "IfKeyword", e[e.ImportKeyword = 102] = "ImportKeyword", e[e.InKeyword = 103] = "InKeyword", e[e.InstanceOfKeyword = 104] = "InstanceOfKeyword", e[e.NewKeyword = 105] = "NewKeyword", e[e.NullKeyword = 106] = "NullKeyword", e[e.ReturnKeyword = 107] = "ReturnKeyword", e[e.SuperKeyword = 108] = "SuperKeyword", e[e.SwitchKeyword = 109] = "SwitchKeyword", e[e.ThisKeyword = 110] = "ThisKeyword", e[e.ThrowKeyword = 111] = "ThrowKeyword", e[e.TrueKeyword = 112] = "TrueKeyword", e[e.TryKeyword = 113] = "TryKeyword", e[e.TypeOfKeyword = 114] = "TypeOfKeyword", e[e.VarKeyword = 115] = "VarKeyword", e[e.VoidKeyword = 116] = "VoidKeyword", e[e.WhileKeyword = 117] = "WhileKeyword", e[e.WithKeyword = 118] = "WithKeyword", e[e.ImplementsKeyword = 119] = "ImplementsKeyword", e[e.InterfaceKeyword = 120] = "InterfaceKeyword", e[e.LetKeyword = 121] = "LetKeyword", e[e.PackageKeyword = 122] = "PackageKeyword", e[e.PrivateKeyword = 123] = "PrivateKeyword", e[e.ProtectedKeyword = 124] = "ProtectedKeyword", e[e.PublicKeyword = 125] = "PublicKeyword", e[e.StaticKeyword = 126] = "StaticKeyword", e[e.YieldKeyword = 127] = "YieldKeyword", e[e.AbstractKeyword = 128] = "AbstractKeyword", e[e.AccessorKeyword = 129] = "AccessorKeyword", e[e.AsKeyword = 130] = "AsKeyword", e[e.AssertsKeyword = 131] = "AssertsKeyword", e[e.AssertKeyword = 132] = "AssertKeyword", e[e.AnyKeyword = 133] = "AnyKeyword", e[e.AsyncKeyword = 134] = "AsyncKeyword", e[e.AwaitKeyword = 135] = "AwaitKeyword", e[e.BooleanKeyword = 136] = "BooleanKeyword", e[e.ConstructorKeyword = 137] = "ConstructorKeyword", e[e.DeclareKeyword = 138] = "DeclareKeyword", e[e.GetKeyword = 139] = "GetKeyword", e[e.InferKeyword = 140] = "InferKeyword", e[e.IntrinsicKeyword = 141] = "IntrinsicKeyword", e[e.IsKeyword = 142] = "IsKeyword", e[e.KeyOfKeyword = 143] = "KeyOfKeyword", e[e.ModuleKeyword = 144] = "ModuleKeyword", e[e.NamespaceKeyword = 145] = "NamespaceKeyword", e[e.NeverKeyword = 146] = "NeverKeyword", e[e.OutKeyword = 147] = "OutKeyword", e[e.ReadonlyKeyword = 148] = "ReadonlyKeyword", e[e.RequireKeyword = 149] = "RequireKeyword", e[e.NumberKeyword = 150] = "NumberKeyword", e[e.ObjectKeyword = 151] = "ObjectKeyword", e[e.SatisfiesKeyword = 152] = "SatisfiesKeyword", e[e.SetKeyword = 153] = "SetKeyword", e[e.StringKeyword = 154] = "StringKeyword", e[e.SymbolKeyword = 155] = "SymbolKeyword", e[e.TypeKeyword = 156] = "TypeKeyword", e[e.UndefinedKeyword = 157] = "UndefinedKeyword", e[e.UniqueKeyword = 158] = "UniqueKeyword", e[e.UnknownKeyword = 159] = "UnknownKeyword", e[e.UsingKeyword = 160] = "UsingKeyword", e[e.FromKeyword = 161] = "FromKeyword", e[e.GlobalKeyword = 162] = "GlobalKeyword", e[e.BigIntKeyword = 163] = "BigIntKeyword", e[e.OverrideKeyword = 164] = "OverrideKeyword", e[e.OfKeyword = 165] = "OfKeyword", e[e.QualifiedName = 166] = "QualifiedName", e[e.ComputedPropertyName = 167] = "ComputedPropertyName", e[e.TypeParameter = 168] = "TypeParameter", e[e.Parameter = 169] = "Parameter", e[e.Decorator = 170] = "Decorator", e[e.PropertySignature = 171] = "PropertySignature", e[e.PropertyDeclaration = 172] = "PropertyDeclaration", e[e.MethodSignature = 173] = "MethodSignature", e[e.MethodDeclaration = 174] = "MethodDeclaration", e[e.ClassStaticBlockDeclaration = 175] = "ClassStaticBlockDeclaration", e[e.Constructor = 176] = "Constructor", e[e.GetAccessor = 177] = "GetAccessor", e[e.SetAccessor = 178] = "SetAccessor", e[e.CallSignature = 179] = "CallSignature", e[e.ConstructSignature = 180] = "ConstructSignature", e[e.IndexSignature = 181] = "IndexSignature", e[e.TypePredicate = 182] = "TypePredicate", e[e.TypeReference = 183] = "TypeReference", e[e.FunctionType = 184] = "FunctionType", e[e.ConstructorType = 185] = "ConstructorType", e[e.TypeQuery = 186] = "TypeQuery", e[e.TypeLiteral = 187] = "TypeLiteral", e[e.ArrayType = 188] = "ArrayType", e[e.TupleType = 189] = "TupleType", e[e.OptionalType = 190] = "OptionalType", e[e.RestType = 191] = "RestType", e[e.UnionType = 192] = "UnionType", e[e.IntersectionType = 193] = "IntersectionType", e[e.ConditionalType = 194] = "ConditionalType", e[e.InferType = 195] = "InferType", e[e.ParenthesizedType = 196] = "ParenthesizedType", e[e.ThisType = 197] = "ThisType", e[e.TypeOperator = 198] = "TypeOperator", e[e.IndexedAccessType = 199] = "IndexedAccessType", e[e.MappedType = 200] = "MappedType", e[e.LiteralType = 201] = "LiteralType", e[e.NamedTupleMember = 202] = "NamedTupleMember", e[e.TemplateLiteralType = 203] = "TemplateLiteralType", e[e.TemplateLiteralTypeSpan = 204] = "TemplateLiteralTypeSpan", e[e.ImportType = 205] = "ImportType", e[e.ObjectBindingPattern = 206] = "ObjectBindingPattern", e[e.ArrayBindingPattern = 207] = "ArrayBindingPattern", e[e.BindingElement = 208] = "BindingElement", e[e.ArrayLiteralExpression = 209] = "ArrayLiteralExpression", e[e.ObjectLiteralExpression = 210] = "ObjectLiteralExpression", e[e.PropertyAccessExpression = 211] = "PropertyAccessExpression", e[e.ElementAccessExpression = 212] = "ElementAccessExpression", e[e.CallExpression = 213] = "CallExpression", e[e.NewExpression = 214] = "NewExpression", e[e.TaggedTemplateExpression = 215] = "TaggedTemplateExpression", e[e.TypeAssertionExpression = 216] = "TypeAssertionExpression", e[e.ParenthesizedExpression = 217] = "ParenthesizedExpression", e[e.FunctionExpression = 218] = "FunctionExpression", e[e.ArrowFunction = 219] = "ArrowFunction", e[e.DeleteExpression = 220] = "DeleteExpression", e[e.TypeOfExpression = 221] = "TypeOfExpression", e[e.VoidExpression = 222] = "VoidExpression", e[e.AwaitExpression = 223] = "AwaitExpression", e[e.PrefixUnaryExpression = 224] = "PrefixUnaryExpression", e[e.PostfixUnaryExpression = 225] = "PostfixUnaryExpression", e[e.BinaryExpression = 226] = "BinaryExpression", e[e.ConditionalExpression = 227] = "ConditionalExpression", e[e.TemplateExpression = 228] = "TemplateExpression", e[e.YieldExpression = 229] = "YieldExpression", e[e.SpreadElement = 230] = "SpreadElement", e[e.ClassExpression = 231] = "ClassExpression", e[e.OmittedExpression = 232] = "OmittedExpression", e[e.ExpressionWithTypeArguments = 233] = "ExpressionWithTypeArguments", e[e.AsExpression = 234] = "AsExpression", e[e.NonNullExpression = 235] = "NonNullExpression", e[e.MetaProperty = 236] = "MetaProperty", e[e.SyntheticExpression = 237] = "SyntheticExpression", e[e.SatisfiesExpression = 238] = "SatisfiesExpression", e[e.TemplateSpan = 239] = "TemplateSpan", e[e.SemicolonClassElement = 240] = "SemicolonClassElement", e[e.Block = 241] = "Block", e[e.EmptyStatement = 242] = "EmptyStatement", e[e.VariableStatement = 243] = "VariableStatement", e[e.ExpressionStatement = 244] = "ExpressionStatement", e[e.IfStatement = 245] = "IfStatement", e[e.DoStatement = 246] = "DoStatement", e[e.WhileStatement = 247] = "WhileStatement", e[e.ForStatement = 248] = "ForStatement", e[e.ForInStatement = 249] = "ForInStatement", e[e.ForOfStatement = 250] = "ForOfStatement", e[e.ContinueStatement = 251] = "ContinueStatement", e[e.BreakStatement = 252] = "BreakStatement", e[e.ReturnStatement = 253] = "ReturnStatement", e[e.WithStatement = 254] = "WithStatement", e[e.SwitchStatement = 255] = "SwitchStatement", e[e.LabeledStatement = 256] = "LabeledStatement", e[e.ThrowStatement = 257] = "ThrowStatement", e[e.TryStatement = 258] = "TryStatement", e[e.DebuggerStatement = 259] = "DebuggerStatement", e[e.VariableDeclaration = 260] = "VariableDeclaration", e[e.VariableDeclarationList = 261] = "VariableDeclarationList", e[e.FunctionDeclaration = 262] = "FunctionDeclaration", e[e.ClassDeclaration = 263] = "ClassDeclaration", e[e.InterfaceDeclaration = 264] = "InterfaceDeclaration", e[e.TypeAliasDeclaration = 265] = "TypeAliasDeclaration", e[e.EnumDeclaration = 266] = "EnumDeclaration", e[e.ModuleDeclaration = 267] = "ModuleDeclaration", e[e.ModuleBlock = 268] = "ModuleBlock", e[e.CaseBlock = 269] = "CaseBlock", e[e.NamespaceExportDeclaration = 270] = "NamespaceExportDeclaration", e[e.ImportEqualsDeclaration = 271] = "ImportEqualsDeclaration", e[e.ImportDeclaration = 272] = "ImportDeclaration", e[e.ImportClause = 273] = "ImportClause", e[e.NamespaceImport = 274] = "NamespaceImport", e[e.NamedImports = 275] = "NamedImports", e[e.ImportSpecifier = 276] = "ImportSpecifier", e[e.ExportAssignment = 277] = "ExportAssignment", e[e.ExportDeclaration = 278] = "ExportDeclaration", e[e.NamedExports = 279] = "NamedExports", e[e.NamespaceExport = 280] = "NamespaceExport", e[e.ExportSpecifier = 281] = "ExportSpecifier", e[e.MissingDeclaration = 282] = "MissingDeclaration", e[e.ExternalModuleReference = 283] = "ExternalModuleReference", e[e.JsxElement = 284] = "JsxElement", e[e.JsxSelfClosingElement = 285] = "JsxSelfClosingElement", e[e.JsxOpeningElement = 286] = "JsxOpeningElement", e[e.JsxClosingElement = 287] = "JsxClosingElement", e[e.JsxFragment = 288] = "JsxFragment", e[e.JsxOpeningFragment = 289] = "JsxOpeningFragment", e[e.JsxClosingFragment = 290] = "JsxClosingFragment", e[e.JsxAttribute = 291] = "JsxAttribute", e[e.JsxAttributes = 292] = "JsxAttributes", e[e.JsxSpreadAttribute = 293] = "JsxSpreadAttribute", e[e.JsxExpression = 294] = "JsxExpression", e[e.JsxNamespacedName = 295] = "JsxNamespacedName", e[e.CaseClause = 296] = "CaseClause", e[e.DefaultClause = 297] = "DefaultClause", e[e.HeritageClause = 298] = "HeritageClause", e[e.CatchClause = 299] = "CatchClause", e[e.ImportAttributes = 300] = "ImportAttributes", e[e.ImportAttribute = 301] = "ImportAttribute", e[
          e.AssertClause = 300
          /* ImportAttributes */
        ] = "AssertClause", e[
          e.AssertEntry = 301
          /* ImportAttribute */
        ] = "AssertEntry", e[e.ImportTypeAssertionContainer = 302] = "ImportTypeAssertionContainer", e[e.PropertyAssignment = 303] = "PropertyAssignment", e[e.ShorthandPropertyAssignment = 304] = "ShorthandPropertyAssignment", e[e.SpreadAssignment = 305] = "SpreadAssignment", e[e.EnumMember = 306] = "EnumMember", e[e.UnparsedPrologue = 307] = "UnparsedPrologue", e[e.UnparsedPrepend = 308] = "UnparsedPrepend", e[e.UnparsedText = 309] = "UnparsedText", e[e.UnparsedInternalText = 310] = "UnparsedInternalText", e[e.UnparsedSyntheticReference = 311] = "UnparsedSyntheticReference", e[e.SourceFile = 312] = "SourceFile", e[e.Bundle = 313] = "Bundle", e[e.UnparsedSource = 314] = "UnparsedSource", e[e.InputFiles = 315] = "InputFiles", e[e.JSDocTypeExpression = 316] = "JSDocTypeExpression", e[e.JSDocNameReference = 317] = "JSDocNameReference", e[e.JSDocMemberName = 318] = "JSDocMemberName", e[e.JSDocAllType = 319] = "JSDocAllType", e[e.JSDocUnknownType = 320] = "JSDocUnknownType", e[e.JSDocNullableType = 321] = "JSDocNullableType", e[e.JSDocNonNullableType = 322] = "JSDocNonNullableType", e[e.JSDocOptionalType = 323] = "JSDocOptionalType", e[e.JSDocFunctionType = 324] = "JSDocFunctionType", e[e.JSDocVariadicType = 325] = "JSDocVariadicType", e[e.JSDocNamepathType = 326] = "JSDocNamepathType", e[e.JSDoc = 327] = "JSDoc", e[
          e.JSDocComment = 327
          /* JSDoc */
        ] = "JSDocComment", e[e.JSDocText = 328] = "JSDocText", e[e.JSDocTypeLiteral = 329] = "JSDocTypeLiteral", e[e.JSDocSignature = 330] = "JSDocSignature", e[e.JSDocLink = 331] = "JSDocLink", e[e.JSDocLinkCode = 332] = "JSDocLinkCode", e[e.JSDocLinkPlain = 333] = "JSDocLinkPlain", e[e.JSDocTag = 334] = "JSDocTag", e[e.JSDocAugmentsTag = 335] = "JSDocAugmentsTag", e[e.JSDocImplementsTag = 336] = "JSDocImplementsTag", e[e.JSDocAuthorTag = 337] = "JSDocAuthorTag", e[e.JSDocDeprecatedTag = 338] = "JSDocDeprecatedTag", e[e.JSDocClassTag = 339] = "JSDocClassTag", e[e.JSDocPublicTag = 340] = "JSDocPublicTag", e[e.JSDocPrivateTag = 341] = "JSDocPrivateTag", e[e.JSDocProtectedTag = 342] = "JSDocProtectedTag", e[e.JSDocReadonlyTag = 343] = "JSDocReadonlyTag", e[e.JSDocOverrideTag = 344] = "JSDocOverrideTag", e[e.JSDocCallbackTag = 345] = "JSDocCallbackTag", e[e.JSDocOverloadTag = 346] = "JSDocOverloadTag", e[e.JSDocEnumTag = 347] = "JSDocEnumTag", e[e.JSDocParameterTag = 348] = "JSDocParameterTag", e[e.JSDocReturnTag = 349] = "JSDocReturnTag", e[e.JSDocThisTag = 350] = "JSDocThisTag", e[e.JSDocTypeTag = 351] = "JSDocTypeTag", e[e.JSDocTemplateTag = 352] = "JSDocTemplateTag", e[e.JSDocTypedefTag = 353] = "JSDocTypedefTag", e[e.JSDocSeeTag = 354] = "JSDocSeeTag", e[e.JSDocPropertyTag = 355] = "JSDocPropertyTag", e[e.JSDocThrowsTag = 356] = "JSDocThrowsTag", e[e.JSDocSatisfiesTag = 357] = "JSDocSatisfiesTag", e[e.SyntaxList = 358] = "SyntaxList", e[e.NotEmittedStatement = 359] = "NotEmittedStatement", e[e.PartiallyEmittedExpression = 360] = "PartiallyEmittedExpression", e[e.CommaListExpression = 361] = "CommaListExpression", e[e.SyntheticReferenceExpression = 362] = "SyntheticReferenceExpression", e[e.Count = 363] = "Count", e[
          e.FirstAssignment = 64
          /* EqualsToken */
        ] = "FirstAssignment", e[
          e.LastAssignment = 79
          /* CaretEqualsToken */
        ] = "LastAssignment", e[
          e.FirstCompoundAssignment = 65
          /* PlusEqualsToken */
        ] = "FirstCompoundAssignment", e[
          e.LastCompoundAssignment = 79
          /* CaretEqualsToken */
        ] = "LastCompoundAssignment", e[
          e.FirstReservedWord = 83
          /* BreakKeyword */
        ] = "FirstReservedWord", e[
          e.LastReservedWord = 118
          /* WithKeyword */
        ] = "LastReservedWord", e[
          e.FirstKeyword = 83
          /* BreakKeyword */
        ] = "FirstKeyword", e[
          e.LastKeyword = 165
          /* OfKeyword */
        ] = "LastKeyword", e[
          e.FirstFutureReservedWord = 119
          /* ImplementsKeyword */
        ] = "FirstFutureReservedWord", e[
          e.LastFutureReservedWord = 127
          /* YieldKeyword */
        ] = "LastFutureReservedWord", e[
          e.FirstTypeNode = 182
          /* TypePredicate */
        ] = "FirstTypeNode", e[
          e.LastTypeNode = 205
          /* ImportType */
        ] = "LastTypeNode", e[
          e.FirstPunctuation = 19
          /* OpenBraceToken */
        ] = "FirstPunctuation", e[
          e.LastPunctuation = 79
          /* CaretEqualsToken */
        ] = "LastPunctuation", e[
          e.FirstToken = 0
          /* Unknown */
        ] = "FirstToken", e[
          e.LastToken = 165
          /* LastKeyword */
        ] = "LastToken", e[
          e.FirstTriviaToken = 2
          /* SingleLineCommentTrivia */
        ] = "FirstTriviaToken", e[
          e.LastTriviaToken = 7
          /* ConflictMarkerTrivia */
        ] = "LastTriviaToken", e[
          e.FirstLiteralToken = 9
          /* NumericLiteral */
        ] = "FirstLiteralToken", e[
          e.LastLiteralToken = 15
          /* NoSubstitutionTemplateLiteral */
        ] = "LastLiteralToken", e[
          e.FirstTemplateToken = 15
          /* NoSubstitutionTemplateLiteral */
        ] = "FirstTemplateToken", e[
          e.LastTemplateToken = 18
          /* TemplateTail */
        ] = "LastTemplateToken", e[
          e.FirstBinaryOperator = 30
          /* LessThanToken */
        ] = "FirstBinaryOperator", e[
          e.LastBinaryOperator = 79
          /* CaretEqualsToken */
        ] = "LastBinaryOperator", e[
          e.FirstStatement = 243
          /* VariableStatement */
        ] = "FirstStatement", e[
          e.LastStatement = 259
          /* DebuggerStatement */
        ] = "LastStatement", e[
          e.FirstNode = 166
          /* QualifiedName */
        ] = "FirstNode", e[
          e.FirstJSDocNode = 316
          /* JSDocTypeExpression */
        ] = "FirstJSDocNode", e[
          e.LastJSDocNode = 357
          /* JSDocSatisfiesTag */
        ] = "LastJSDocNode", e[
          e.FirstJSDocTagNode = 334
          /* JSDocTag */
        ] = "FirstJSDocTagNode", e[
          e.LastJSDocTagNode = 357
          /* JSDocSatisfiesTag */
        ] = "LastJSDocTagNode", e[
          e.FirstContextualKeyword = 128
          /* AbstractKeyword */
        ] = "FirstContextualKeyword", e[
          e.LastContextualKeyword = 165
          /* OfKeyword */
        ] = "LastContextualKeyword", e))(i7 || {}), s7 = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Let = 1] = "Let", e[e.Const = 2] = "Const", e[e.Using = 4] = "Using", e[e.AwaitUsing = 6] = "AwaitUsing", e[e.NestedNamespace = 8] = "NestedNamespace", e[e.Synthesized = 16] = "Synthesized", e[e.Namespace = 32] = "Namespace", e[e.OptionalChain = 64] = "OptionalChain", e[e.ExportContext = 128] = "ExportContext", e[e.ContainsThis = 256] = "ContainsThis", e[e.HasImplicitReturn = 512] = "HasImplicitReturn", e[e.HasExplicitReturn = 1024] = "HasExplicitReturn", e[e.GlobalAugmentation = 2048] = "GlobalAugmentation", e[e.HasAsyncFunctions = 4096] = "HasAsyncFunctions", e[e.DisallowInContext = 8192] = "DisallowInContext", e[e.YieldContext = 16384] = "YieldContext", e[e.DecoratorContext = 32768] = "DecoratorContext", e[e.AwaitContext = 65536] = "AwaitContext", e[e.DisallowConditionalTypesContext = 131072] = "DisallowConditionalTypesContext", e[e.ThisNodeHasError = 262144] = "ThisNodeHasError", e[e.JavaScriptFile = 524288] = "JavaScriptFile", e[e.ThisNodeOrAnySubNodesHasError = 1048576] = "ThisNodeOrAnySubNodesHasError", e[e.HasAggregatedChildData = 2097152] = "HasAggregatedChildData", e[e.PossiblyContainsDynamicImport = 4194304] = "PossiblyContainsDynamicImport", e[e.PossiblyContainsImportMeta = 8388608] = "PossiblyContainsImportMeta", e[e.JSDoc = 16777216] = "JSDoc", e[e.Ambient = 33554432] = "Ambient", e[e.InWithStatement = 67108864] = "InWithStatement", e[e.JsonFile = 134217728] = "JsonFile", e[e.TypeCached = 268435456] = "TypeCached", e[e.Deprecated = 536870912] = "Deprecated", e[e.BlockScoped = 7] = "BlockScoped", e[e.Constant = 6] = "Constant", e[e.ReachabilityCheckFlags = 1536] = "ReachabilityCheckFlags", e[e.ReachabilityAndEmitFlags = 5632] = "ReachabilityAndEmitFlags", e[e.ContextFlags = 101441536] = "ContextFlags", e[e.TypeExcludesFlags = 81920] = "TypeExcludesFlags", e[e.PermanentlySetIncrementalFlags = 12582912] = "PermanentlySetIncrementalFlags", e[
          e.IdentifierHasExtendedUnicodeEscape = 256
          /* ContainsThis */
        ] = "IdentifierHasExtendedUnicodeEscape", e[
          e.IdentifierIsInJSDocNamespace = 4096
          /* HasAsyncFunctions */
        ] = "IdentifierIsInJSDocNamespace", e))(s7 || {}), a7 = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Public = 1] = "Public", e[e.Private = 2] = "Private", e[e.Protected = 4] = "Protected", e[e.Readonly = 8] = "Readonly", e[e.Override = 16] = "Override", e[e.Export = 32] = "Export", e[e.Abstract = 64] = "Abstract", e[e.Ambient = 128] = "Ambient", e[e.Static = 256] = "Static", e[e.Accessor = 512] = "Accessor", e[e.Async = 1024] = "Async", e[e.Default = 2048] = "Default", e[e.Const = 4096] = "Const", e[e.In = 8192] = "In", e[e.Out = 16384] = "Out", e[e.Decorator = 32768] = "Decorator", e[e.Deprecated = 65536] = "Deprecated", e[e.JSDocPublic = 8388608] = "JSDocPublic", e[e.JSDocPrivate = 16777216] = "JSDocPrivate", e[e.JSDocProtected = 33554432] = "JSDocProtected", e[e.JSDocReadonly = 67108864] = "JSDocReadonly", e[e.JSDocOverride = 134217728] = "JSDocOverride", e[e.SyntacticOrJSDocModifiers = 31] = "SyntacticOrJSDocModifiers", e[e.SyntacticOnlyModifiers = 65504] = "SyntacticOnlyModifiers", e[e.SyntacticModifiers = 65535] = "SyntacticModifiers", e[e.JSDocCacheOnlyModifiers = 260046848] = "JSDocCacheOnlyModifiers", e[
          e.JSDocOnlyModifiers = 65536
          /* Deprecated */
        ] = "JSDocOnlyModifiers", e[e.NonCacheOnlyModifiers = 131071] = "NonCacheOnlyModifiers", e[e.HasComputedJSDocModifiers = 268435456] = "HasComputedJSDocModifiers", e[e.HasComputedFlags = 536870912] = "HasComputedFlags", e[e.AccessibilityModifier = 7] = "AccessibilityModifier", e[e.ParameterPropertyModifier = 31] = "ParameterPropertyModifier", e[e.NonPublicAccessibilityModifier = 6] = "NonPublicAccessibilityModifier", e[e.TypeScriptModifier = 28895] = "TypeScriptModifier", e[e.ExportDefault = 2080] = "ExportDefault", e[e.All = 131071] = "All", e[e.Modifier = 98303] = "Modifier", e))(a7 || {}), SB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.IntrinsicNamedElement = 1] = "IntrinsicNamedElement", e[e.IntrinsicIndexedElement = 2] = "IntrinsicIndexedElement", e[e.IntrinsicElement = 3] = "IntrinsicElement", e))(SB || {}), o7 = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Succeeded = 1] = "Succeeded", e[e.Failed = 2] = "Failed", e[e.Reported = 4] = "Reported", e[e.ReportsUnmeasurable = 8] = "ReportsUnmeasurable", e[e.ReportsUnreliable = 16] = "ReportsUnreliable", e[e.ReportsMask = 24] = "ReportsMask", e))(o7 || {}), c7 = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Auto = 1] = "Auto", e[e.Loop = 2] = "Loop", e[e.Unique = 3] = "Unique", e[e.Node = 4] = "Node", e[e.KindMask = 7] = "KindMask", e[e.ReservedInNestedScopes = 8] = "ReservedInNestedScopes", e[e.Optimistic = 16] = "Optimistic", e[e.FileLevel = 32] = "FileLevel", e[e.AllowNameSubstitution = 64] = "AllowNameSubstitution", e))(c7 || {}), TB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.PrecedingLineBreak = 1] = "PrecedingLineBreak", e[e.PrecedingJSDocComment = 2] = "PrecedingJSDocComment", e[e.Unterminated = 4] = "Unterminated", e[e.ExtendedUnicodeEscape = 8] = "ExtendedUnicodeEscape", e[e.Scientific = 16] = "Scientific", e[e.Octal = 32] = "Octal", e[e.HexSpecifier = 64] = "HexSpecifier", e[e.BinarySpecifier = 128] = "BinarySpecifier", e[e.OctalSpecifier = 256] = "OctalSpecifier", e[e.ContainsSeparator = 512] = "ContainsSeparator", e[e.UnicodeEscape = 1024] = "UnicodeEscape", e[e.ContainsInvalidEscape = 2048] = "ContainsInvalidEscape", e[e.HexEscape = 4096] = "HexEscape", e[e.ContainsLeadingZero = 8192] = "ContainsLeadingZero", e[e.ContainsInvalidSeparator = 16384] = "ContainsInvalidSeparator", e[e.BinaryOrOctalSpecifier = 384] = "BinaryOrOctalSpecifier", e[e.WithSpecifier = 448] = "WithSpecifier", e[e.StringLiteralFlags = 7176] = "StringLiteralFlags", e[e.NumericLiteralFlags = 25584] = "NumericLiteralFlags", e[e.TemplateLiteralLikeFlags = 7176] = "TemplateLiteralLikeFlags", e[e.IsInvalid = 26656] = "IsInvalid", e))(TB || {}), hD = /* @__PURE__ */ ((e) => (e[e.Unreachable = 1] = "Unreachable", e[e.Start = 2] = "Start", e[e.BranchLabel = 4] = "BranchLabel", e[e.LoopLabel = 8] = "LoopLabel", e[e.Assignment = 16] = "Assignment", e[e.TrueCondition = 32] = "TrueCondition", e[e.FalseCondition = 64] = "FalseCondition", e[e.SwitchClause = 128] = "SwitchClause", e[e.ArrayMutation = 256] = "ArrayMutation", e[e.Call = 512] = "Call", e[e.ReduceLabel = 1024] = "ReduceLabel", e[e.Referenced = 2048] = "Referenced", e[e.Shared = 4096] = "Shared", e[e.Label = 12] = "Label", e[e.Condition = 96] = "Condition", e))(hD || {}), xB = /* @__PURE__ */ ((e) => (e[e.ExpectError = 0] = "ExpectError", e[e.Ignore = 1] = "Ignore", e))(xB || {}), Fk = class {
        }, l7 = /* @__PURE__ */ ((e) => (e[e.RootFile = 0] = "RootFile", e[e.SourceFromProjectReference = 1] = "SourceFromProjectReference", e[e.OutputFromProjectReference = 2] = "OutputFromProjectReference", e[e.Import = 3] = "Import", e[e.ReferenceFile = 4] = "ReferenceFile", e[e.TypeReferenceDirective = 5] = "TypeReferenceDirective", e[e.LibFile = 6] = "LibFile", e[e.LibReferenceDirective = 7] = "LibReferenceDirective", e[e.AutomaticTypeDirectiveFile = 8] = "AutomaticTypeDirectiveFile", e))(l7 || {}), kB = /* @__PURE__ */ ((e) => (e[e.FilePreprocessingReferencedDiagnostic = 0] = "FilePreprocessingReferencedDiagnostic", e[e.FilePreprocessingFileExplainingDiagnostic = 1] = "FilePreprocessingFileExplainingDiagnostic", e[e.ResolutionDiagnostics = 2] = "ResolutionDiagnostics", e))(kB || {}), CB = /* @__PURE__ */ ((e) => (e[e.Js = 0] = "Js", e[e.Dts = 1] = "Dts", e))(CB || {}), u7 = /* @__PURE__ */ ((e) => (e[e.Not = 0] = "Not", e[e.SafeModules = 1] = "SafeModules", e[e.Completely = 2] = "Completely", e))(u7 || {}), EB = /* @__PURE__ */ ((e) => (e[e.Success = 0] = "Success", e[e.DiagnosticsPresent_OutputsSkipped = 1] = "DiagnosticsPresent_OutputsSkipped", e[e.DiagnosticsPresent_OutputsGenerated = 2] = "DiagnosticsPresent_OutputsGenerated", e[e.InvalidProject_OutputsSkipped = 3] = "InvalidProject_OutputsSkipped", e[e.ProjectReferenceCycle_OutputsSkipped = 4] = "ProjectReferenceCycle_OutputsSkipped", e))(EB || {}), PB = /* @__PURE__ */ ((e) => (e[e.Ok = 0] = "Ok", e[e.NeedsOverride = 1] = "NeedsOverride", e[e.HasInvalidOverride = 2] = "HasInvalidOverride", e))(PB || {}), DB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Literal = 1] = "Literal", e[e.Subtype = 2] = "Subtype", e))(DB || {}), wB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Signature = 1] = "Signature", e[e.NoConstraints = 2] = "NoConstraints", e[e.Completions = 4] = "Completions", e[e.SkipBindingPatterns = 8] = "SkipBindingPatterns", e))(wB || {}), AB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.NoTruncation = 1] = "NoTruncation", e[e.WriteArrayAsGenericType = 2] = "WriteArrayAsGenericType", e[e.GenerateNamesForShadowedTypeParams = 4] = "GenerateNamesForShadowedTypeParams", e[e.UseStructuralFallback = 8] = "UseStructuralFallback", e[e.ForbidIndexedAccessSymbolReferences = 16] = "ForbidIndexedAccessSymbolReferences", e[e.WriteTypeArgumentsOfSignature = 32] = "WriteTypeArgumentsOfSignature", e[e.UseFullyQualifiedType = 64] = "UseFullyQualifiedType", e[e.UseOnlyExternalAliasing = 128] = "UseOnlyExternalAliasing", e[e.SuppressAnyReturnType = 256] = "SuppressAnyReturnType", e[e.WriteTypeParametersInQualifiedName = 512] = "WriteTypeParametersInQualifiedName", e[e.MultilineObjectLiterals = 1024] = "MultilineObjectLiterals", e[e.WriteClassExpressionAsTypeLiteral = 2048] = "WriteClassExpressionAsTypeLiteral", e[e.UseTypeOfFunction = 4096] = "UseTypeOfFunction", e[e.OmitParameterModifiers = 8192] = "OmitParameterModifiers", e[e.UseAliasDefinedOutsideCurrentScope = 16384] = "UseAliasDefinedOutsideCurrentScope", e[e.UseSingleQuotesForStringLiteralType = 268435456] = "UseSingleQuotesForStringLiteralType", e[e.NoTypeReduction = 536870912] = "NoTypeReduction", e[e.OmitThisParameter = 33554432] = "OmitThisParameter", e[e.AllowThisInObjectLiteral = 32768] = "AllowThisInObjectLiteral", e[e.AllowQualifiedNameInPlaceOfIdentifier = 65536] = "AllowQualifiedNameInPlaceOfIdentifier", e[e.AllowAnonymousIdentifier = 131072] = "AllowAnonymousIdentifier", e[e.AllowEmptyUnionOrIntersection = 262144] = "AllowEmptyUnionOrIntersection", e[e.AllowEmptyTuple = 524288] = "AllowEmptyTuple", e[e.AllowUniqueESSymbolType = 1048576] = "AllowUniqueESSymbolType", e[e.AllowEmptyIndexInfoType = 2097152] = "AllowEmptyIndexInfoType", e[e.WriteComputedProps = 1073741824] = "WriteComputedProps", e[e.AllowNodeModulesRelativePaths = 67108864] = "AllowNodeModulesRelativePaths", e[e.DoNotIncludeSymbolChain = 134217728] = "DoNotIncludeSymbolChain", e[e.IgnoreErrors = 70221824] = "IgnoreErrors", e[e.InObjectTypeLiteral = 4194304] = "InObjectTypeLiteral", e[e.InTypeAlias = 8388608] = "InTypeAlias", e[e.InInitialEntityName = 16777216] = "InInitialEntityName", e))(AB || {}), NB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.NoTruncation = 1] = "NoTruncation", e[e.WriteArrayAsGenericType = 2] = "WriteArrayAsGenericType", e[e.GenerateNamesForShadowedTypeParams = 4] = "GenerateNamesForShadowedTypeParams", e[e.UseStructuralFallback = 8] = "UseStructuralFallback", e[e.WriteTypeArgumentsOfSignature = 32] = "WriteTypeArgumentsOfSignature", e[e.UseFullyQualifiedType = 64] = "UseFullyQualifiedType", e[e.SuppressAnyReturnType = 256] = "SuppressAnyReturnType", e[e.MultilineObjectLiterals = 1024] = "MultilineObjectLiterals", e[e.WriteClassExpressionAsTypeLiteral = 2048] = "WriteClassExpressionAsTypeLiteral", e[e.UseTypeOfFunction = 4096] = "UseTypeOfFunction", e[e.OmitParameterModifiers = 8192] = "OmitParameterModifiers", e[e.UseAliasDefinedOutsideCurrentScope = 16384] = "UseAliasDefinedOutsideCurrentScope", e[e.UseSingleQuotesForStringLiteralType = 268435456] = "UseSingleQuotesForStringLiteralType", e[e.NoTypeReduction = 536870912] = "NoTypeReduction", e[e.OmitThisParameter = 33554432] = "OmitThisParameter", e[e.AllowUniqueESSymbolType = 1048576] = "AllowUniqueESSymbolType", e[e.AddUndefined = 131072] = "AddUndefined", e[e.WriteArrowStyleSignature = 262144] = "WriteArrowStyleSignature", e[e.InArrayType = 524288] = "InArrayType", e[e.InElementType = 2097152] = "InElementType", e[e.InFirstTypeArgument = 4194304] = "InFirstTypeArgument", e[e.InTypeAlias = 8388608] = "InTypeAlias", e[e.NodeBuilderFlagsMask = 848330095] = "NodeBuilderFlagsMask", e))(NB || {}), IB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.WriteTypeParametersOrArguments = 1] = "WriteTypeParametersOrArguments", e[e.UseOnlyExternalAliasing = 2] = "UseOnlyExternalAliasing", e[e.AllowAnyNodeKind = 4] = "AllowAnyNodeKind", e[e.UseAliasDefinedOutsideCurrentScope = 8] = "UseAliasDefinedOutsideCurrentScope", e[e.WriteComputedProps = 16] = "WriteComputedProps", e[e.DoNotIncludeSymbolChain = 32] = "DoNotIncludeSymbolChain", e))(IB || {}), FB = /* @__PURE__ */ ((e) => (e[e.Accessible = 0] = "Accessible", e[e.NotAccessible = 1] = "NotAccessible", e[e.CannotBeNamed = 2] = "CannotBeNamed", e))(FB || {}), OB = /* @__PURE__ */ ((e) => (e[e.UnionOrIntersection = 0] = "UnionOrIntersection", e[e.Spread = 1] = "Spread", e))(OB || {}), LB = /* @__PURE__ */ ((e) => (e[e.This = 0] = "This", e[e.Identifier = 1] = "Identifier", e[e.AssertsThis = 2] = "AssertsThis", e[e.AssertsIdentifier = 3] = "AssertsIdentifier", e))(LB || {}), MB = /* @__PURE__ */ ((e) => (e[e.Unknown = 0] = "Unknown", e[e.TypeWithConstructSignatureAndValue = 1] = "TypeWithConstructSignatureAndValue", e[e.VoidNullableOrNeverType = 2] = "VoidNullableOrNeverType", e[e.NumberLikeType = 3] = "NumberLikeType", e[e.BigIntLikeType = 4] = "BigIntLikeType", e[e.StringLikeType = 5] = "StringLikeType", e[e.BooleanType = 6] = "BooleanType", e[e.ArrayLikeType = 7] = "ArrayLikeType", e[e.ESSymbolType = 8] = "ESSymbolType", e[e.Promise = 9] = "Promise", e[e.TypeWithCallSignature = 10] = "TypeWithCallSignature", e[e.ObjectType = 11] = "ObjectType", e))(MB || {}), _7 = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.FunctionScopedVariable = 1] = "FunctionScopedVariable", e[e.BlockScopedVariable = 2] = "BlockScopedVariable", e[e.Property = 4] = "Property", e[e.EnumMember = 8] = "EnumMember", e[e.Function = 16] = "Function", e[e.Class = 32] = "Class", e[e.Interface = 64] = "Interface", e[e.ConstEnum = 128] = "ConstEnum", e[e.RegularEnum = 256] = "RegularEnum", e[e.ValueModule = 512] = "ValueModule", e[e.NamespaceModule = 1024] = "NamespaceModule", e[e.TypeLiteral = 2048] = "TypeLiteral", e[e.ObjectLiteral = 4096] = "ObjectLiteral", e[e.Method = 8192] = "Method", e[e.Constructor = 16384] = "Constructor", e[e.GetAccessor = 32768] = "GetAccessor", e[e.SetAccessor = 65536] = "SetAccessor", e[e.Signature = 131072] = "Signature", e[e.TypeParameter = 262144] = "TypeParameter", e[e.TypeAlias = 524288] = "TypeAlias", e[e.ExportValue = 1048576] = "ExportValue", e[e.Alias = 2097152] = "Alias", e[e.Prototype = 4194304] = "Prototype", e[e.ExportStar = 8388608] = "ExportStar", e[e.Optional = 16777216] = "Optional", e[e.Transient = 33554432] = "Transient", e[e.Assignment = 67108864] = "Assignment", e[e.ModuleExports = 134217728] = "ModuleExports", e[e.All = -1] = "All", e[e.Enum = 384] = "Enum", e[e.Variable = 3] = "Variable", e[e.Value = 111551] = "Value", e[e.Type = 788968] = "Type", e[e.Namespace = 1920] = "Namespace", e[e.Module = 1536] = "Module", e[e.Accessor = 98304] = "Accessor", e[e.FunctionScopedVariableExcludes = 111550] = "FunctionScopedVariableExcludes", e[
          e.BlockScopedVariableExcludes = 111551
          /* Value */
        ] = "BlockScopedVariableExcludes", e[
          e.ParameterExcludes = 111551
          /* Value */
        ] = "ParameterExcludes", e[
          e.PropertyExcludes = 0
          /* None */
        ] = "PropertyExcludes", e[e.EnumMemberExcludes = 900095] = "EnumMemberExcludes", e[e.FunctionExcludes = 110991] = "FunctionExcludes", e[e.ClassExcludes = 899503] = "ClassExcludes", e[e.InterfaceExcludes = 788872] = "InterfaceExcludes", e[e.RegularEnumExcludes = 899327] = "RegularEnumExcludes", e[e.ConstEnumExcludes = 899967] = "ConstEnumExcludes", e[e.ValueModuleExcludes = 110735] = "ValueModuleExcludes", e[e.NamespaceModuleExcludes = 0] = "NamespaceModuleExcludes", e[e.MethodExcludes = 103359] = "MethodExcludes", e[e.GetAccessorExcludes = 46015] = "GetAccessorExcludes", e[e.SetAccessorExcludes = 78783] = "SetAccessorExcludes", e[e.AccessorExcludes = 13247] = "AccessorExcludes", e[e.TypeParameterExcludes = 526824] = "TypeParameterExcludes", e[
          e.TypeAliasExcludes = 788968
          /* Type */
        ] = "TypeAliasExcludes", e[
          e.AliasExcludes = 2097152
          /* Alias */
        ] = "AliasExcludes", e[e.ModuleMember = 2623475] = "ModuleMember", e[e.ExportHasLocal = 944] = "ExportHasLocal", e[e.BlockScoped = 418] = "BlockScoped", e[e.PropertyOrAccessor = 98308] = "PropertyOrAccessor", e[e.ClassMember = 106500] = "ClassMember", e[e.ExportSupportsDefaultModifier = 112] = "ExportSupportsDefaultModifier", e[e.ExportDoesNotSupportDefaultModifier = -113] = "ExportDoesNotSupportDefaultModifier", e[e.Classifiable = 2885600] = "Classifiable", e[e.LateBindingContainer = 6256] = "LateBindingContainer", e))(_7 || {}), RB = /* @__PURE__ */ ((e) => (e[e.Numeric = 0] = "Numeric", e[e.Literal = 1] = "Literal", e))(RB || {}), jB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Instantiated = 1] = "Instantiated", e[e.SyntheticProperty = 2] = "SyntheticProperty", e[e.SyntheticMethod = 4] = "SyntheticMethod", e[e.Readonly = 8] = "Readonly", e[e.ReadPartial = 16] = "ReadPartial", e[e.WritePartial = 32] = "WritePartial", e[e.HasNonUniformType = 64] = "HasNonUniformType", e[e.HasLiteralType = 128] = "HasLiteralType", e[e.ContainsPublic = 256] = "ContainsPublic", e[e.ContainsProtected = 512] = "ContainsProtected", e[e.ContainsPrivate = 1024] = "ContainsPrivate", e[e.ContainsStatic = 2048] = "ContainsStatic", e[e.Late = 4096] = "Late", e[e.ReverseMapped = 8192] = "ReverseMapped", e[e.OptionalParameter = 16384] = "OptionalParameter", e[e.RestParameter = 32768] = "RestParameter", e[e.DeferredType = 65536] = "DeferredType", e[e.HasNeverType = 131072] = "HasNeverType", e[e.Mapped = 262144] = "Mapped", e[e.StripOptional = 524288] = "StripOptional", e[e.Unresolved = 1048576] = "Unresolved", e[e.Synthetic = 6] = "Synthetic", e[e.Discriminant = 192] = "Discriminant", e[e.Partial = 48] = "Partial", e))(jB || {}), BB = /* @__PURE__ */ ((e) => (e.Call = "__call", e.Constructor = "__constructor", e.New = "__new", e.Index = "__index", e.ExportStar = "__export", e.Global = "__global", e.Missing = "__missing", e.Type = "__type", e.Object = "__object", e.JSXAttributes = "__jsxAttributes", e.Class = "__class", e.Function = "__function", e.Computed = "__computed", e.Resolving = "__resolving__", e.ExportEquals = "export=", e.Default = "default", e.This = "this", e.InstantiationExpression = "__instantiationExpression", e.ImportAttributes = "__importAttributes", e))(BB || {}), JB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.TypeChecked = 1] = "TypeChecked", e[e.LexicalThis = 2] = "LexicalThis", e[e.CaptureThis = 4] = "CaptureThis", e[e.CaptureNewTarget = 8] = "CaptureNewTarget", e[e.SuperInstance = 16] = "SuperInstance", e[e.SuperStatic = 32] = "SuperStatic", e[e.ContextChecked = 64] = "ContextChecked", e[e.MethodWithSuperPropertyAccessInAsync = 128] = "MethodWithSuperPropertyAccessInAsync", e[e.MethodWithSuperPropertyAssignmentInAsync = 256] = "MethodWithSuperPropertyAssignmentInAsync", e[e.CaptureArguments = 512] = "CaptureArguments", e[e.EnumValuesComputed = 1024] = "EnumValuesComputed", e[e.LexicalModuleMergesWithClass = 2048] = "LexicalModuleMergesWithClass", e[e.LoopWithCapturedBlockScopedBinding = 4096] = "LoopWithCapturedBlockScopedBinding", e[e.ContainsCapturedBlockScopeBinding = 8192] = "ContainsCapturedBlockScopeBinding", e[e.CapturedBlockScopedBinding = 16384] = "CapturedBlockScopedBinding", e[e.BlockScopedBindingInLoop = 32768] = "BlockScopedBindingInLoop", e[e.NeedsLoopOutParameter = 65536] = "NeedsLoopOutParameter", e[e.AssignmentsMarked = 131072] = "AssignmentsMarked", e[e.ContainsConstructorReference = 262144] = "ContainsConstructorReference", e[e.ConstructorReference = 536870912] = "ConstructorReference", e[e.ContainsClassWithPrivateIdentifiers = 1048576] = "ContainsClassWithPrivateIdentifiers", e[e.ContainsSuperPropertyInStaticInitializer = 2097152] = "ContainsSuperPropertyInStaticInitializer", e[e.InCheckIdentifier = 4194304] = "InCheckIdentifier", e))(JB || {}), f7 = /* @__PURE__ */ ((e) => (e[e.Any = 1] = "Any", e[e.Unknown = 2] = "Unknown", e[e.String = 4] = "String", e[e.Number = 8] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Enum = 32] = "Enum", e[e.BigInt = 64] = "BigInt", e[e.StringLiteral = 128] = "StringLiteral", e[e.NumberLiteral = 256] = "NumberLiteral", e[e.BooleanLiteral = 512] = "BooleanLiteral", e[e.EnumLiteral = 1024] = "EnumLiteral", e[e.BigIntLiteral = 2048] = "BigIntLiteral", e[e.ESSymbol = 4096] = "ESSymbol", e[e.UniqueESSymbol = 8192] = "UniqueESSymbol", e[e.Void = 16384] = "Void", e[e.Undefined = 32768] = "Undefined", e[e.Null = 65536] = "Null", e[e.Never = 131072] = "Never", e[e.TypeParameter = 262144] = "TypeParameter", e[e.Object = 524288] = "Object", e[e.Union = 1048576] = "Union", e[e.Intersection = 2097152] = "Intersection", e[e.Index = 4194304] = "Index", e[e.IndexedAccess = 8388608] = "IndexedAccess", e[e.Conditional = 16777216] = "Conditional", e[e.Substitution = 33554432] = "Substitution", e[e.NonPrimitive = 67108864] = "NonPrimitive", e[e.TemplateLiteral = 134217728] = "TemplateLiteral", e[e.StringMapping = 268435456] = "StringMapping", e[e.Reserved1 = 536870912] = "Reserved1", e[e.AnyOrUnknown = 3] = "AnyOrUnknown", e[e.Nullable = 98304] = "Nullable", e[e.Literal = 2944] = "Literal", e[e.Unit = 109472] = "Unit", e[e.Freshable = 2976] = "Freshable", e[e.StringOrNumberLiteral = 384] = "StringOrNumberLiteral", e[e.StringOrNumberLiteralOrUnique = 8576] = "StringOrNumberLiteralOrUnique", e[e.DefinitelyFalsy = 117632] = "DefinitelyFalsy", e[e.PossiblyFalsy = 117724] = "PossiblyFalsy", e[e.Intrinsic = 67359327] = "Intrinsic", e[e.StringLike = 402653316] = "StringLike", e[e.NumberLike = 296] = "NumberLike", e[e.BigIntLike = 2112] = "BigIntLike", e[e.BooleanLike = 528] = "BooleanLike", e[e.EnumLike = 1056] = "EnumLike", e[e.ESSymbolLike = 12288] = "ESSymbolLike", e[e.VoidLike = 49152] = "VoidLike", e[e.Primitive = 402784252] = "Primitive", e[e.DefinitelyNonNullable = 470302716] = "DefinitelyNonNullable", e[e.DisjointDomains = 469892092] = "DisjointDomains", e[e.UnionOrIntersection = 3145728] = "UnionOrIntersection", e[e.StructuredType = 3670016] = "StructuredType", e[e.TypeVariable = 8650752] = "TypeVariable", e[e.InstantiableNonPrimitive = 58982400] = "InstantiableNonPrimitive", e[e.InstantiablePrimitive = 406847488] = "InstantiablePrimitive", e[e.Instantiable = 465829888] = "Instantiable", e[e.StructuredOrInstantiable = 469499904] = "StructuredOrInstantiable", e[e.ObjectFlagsType = 3899393] = "ObjectFlagsType", e[e.Simplifiable = 25165824] = "Simplifiable", e[e.Singleton = 67358815] = "Singleton", e[e.Narrowable = 536624127] = "Narrowable", e[e.IncludesMask = 473694207] = "IncludesMask", e[
          e.IncludesMissingType = 262144
          /* TypeParameter */
        ] = "IncludesMissingType", e[
          e.IncludesNonWideningType = 4194304
          /* Index */
        ] = "IncludesNonWideningType", e[
          e.IncludesWildcard = 8388608
          /* IndexedAccess */
        ] = "IncludesWildcard", e[
          e.IncludesEmptyObject = 16777216
          /* Conditional */
        ] = "IncludesEmptyObject", e[
          e.IncludesInstantiable = 33554432
          /* Substitution */
        ] = "IncludesInstantiable", e[
          e.IncludesConstrainedTypeVariable = 536870912
          /* Reserved1 */
        ] = "IncludesConstrainedTypeVariable", e[e.NotPrimitiveUnion = 36323331] = "NotPrimitiveUnion", e))(f7 || {}), p7 = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Class = 1] = "Class", e[e.Interface = 2] = "Interface", e[e.Reference = 4] = "Reference", e[e.Tuple = 8] = "Tuple", e[e.Anonymous = 16] = "Anonymous", e[e.Mapped = 32] = "Mapped", e[e.Instantiated = 64] = "Instantiated", e[e.ObjectLiteral = 128] = "ObjectLiteral", e[e.EvolvingArray = 256] = "EvolvingArray", e[e.ObjectLiteralPatternWithComputedProperties = 512] = "ObjectLiteralPatternWithComputedProperties", e[e.ReverseMapped = 1024] = "ReverseMapped", e[e.JsxAttributes = 2048] = "JsxAttributes", e[e.JSLiteral = 4096] = "JSLiteral", e[e.FreshLiteral = 8192] = "FreshLiteral", e[e.ArrayLiteral = 16384] = "ArrayLiteral", e[e.PrimitiveUnion = 32768] = "PrimitiveUnion", e[e.ContainsWideningType = 65536] = "ContainsWideningType", e[e.ContainsObjectOrArrayLiteral = 131072] = "ContainsObjectOrArrayLiteral", e[e.NonInferrableType = 262144] = "NonInferrableType", e[e.CouldContainTypeVariablesComputed = 524288] = "CouldContainTypeVariablesComputed", e[e.CouldContainTypeVariables = 1048576] = "CouldContainTypeVariables", e[e.ClassOrInterface = 3] = "ClassOrInterface", e[e.RequiresWidening = 196608] = "RequiresWidening", e[e.PropagatingFlags = 458752] = "PropagatingFlags", e[e.InstantiatedMapped = 96] = "InstantiatedMapped", e[e.ObjectTypeKindMask = 1343] = "ObjectTypeKindMask", e[e.ContainsSpread = 2097152] = "ContainsSpread", e[e.ObjectRestType = 4194304] = "ObjectRestType", e[e.InstantiationExpressionType = 8388608] = "InstantiationExpressionType", e[e.IsClassInstanceClone = 16777216] = "IsClassInstanceClone", e[e.IdenticalBaseTypeCalculated = 33554432] = "IdenticalBaseTypeCalculated", e[e.IdenticalBaseTypeExists = 67108864] = "IdenticalBaseTypeExists", e[e.IsGenericTypeComputed = 2097152] = "IsGenericTypeComputed", e[e.IsGenericObjectType = 4194304] = "IsGenericObjectType", e[e.IsGenericIndexType = 8388608] = "IsGenericIndexType", e[e.IsGenericType = 12582912] = "IsGenericType", e[e.ContainsIntersections = 16777216] = "ContainsIntersections", e[e.IsUnknownLikeUnionComputed = 33554432] = "IsUnknownLikeUnionComputed", e[e.IsUnknownLikeUnion = 67108864] = "IsUnknownLikeUnion", e[e.IsNeverIntersectionComputed = 16777216] = "IsNeverIntersectionComputed", e[e.IsNeverIntersection = 33554432] = "IsNeverIntersection", e[e.IsConstrainedTypeVariable = 67108864] = "IsConstrainedTypeVariable", e))(p7 || {}), zB = /* @__PURE__ */ ((e) => (e[e.Invariant = 0] = "Invariant", e[e.Covariant = 1] = "Covariant", e[e.Contravariant = 2] = "Contravariant", e[e.Bivariant = 3] = "Bivariant", e[e.Independent = 4] = "Independent", e[e.VarianceMask = 7] = "VarianceMask", e[e.Unmeasurable = 8] = "Unmeasurable", e[e.Unreliable = 16] = "Unreliable", e[e.AllowsStructuralFallback = 24] = "AllowsStructuralFallback", e))(zB || {}), VB = /* @__PURE__ */ ((e) => (e[e.Required = 1] = "Required", e[e.Optional = 2] = "Optional", e[e.Rest = 4] = "Rest", e[e.Variadic = 8] = "Variadic", e[e.Fixed = 3] = "Fixed", e[e.Variable = 12] = "Variable", e[e.NonRequired = 14] = "NonRequired", e[e.NonRest = 11] = "NonRest", e))(VB || {}), WB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.IncludeUndefined = 1] = "IncludeUndefined", e[e.NoIndexSignatures = 2] = "NoIndexSignatures", e[e.Writing = 4] = "Writing", e[e.CacheSymbol = 8] = "CacheSymbol", e[e.NoTupleBoundsCheck = 16] = "NoTupleBoundsCheck", e[e.ExpressionPosition = 32] = "ExpressionPosition", e[e.ReportDeprecated = 64] = "ReportDeprecated", e[e.SuppressNoImplicitAnyError = 128] = "SuppressNoImplicitAnyError", e[e.Contextual = 256] = "Contextual", e[
          e.Persistent = 1
          /* IncludeUndefined */
        ] = "Persistent", e))(WB || {}), UB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.StringsOnly = 1] = "StringsOnly", e[e.NoIndexSignatures = 2] = "NoIndexSignatures", e[e.NoReducibleCheck = 4] = "NoReducibleCheck", e))(UB || {}), qB = /* @__PURE__ */ ((e) => (e[e.Component = 0] = "Component", e[e.Function = 1] = "Function", e[e.Mixed = 2] = "Mixed", e))(qB || {}), HB = /* @__PURE__ */ ((e) => (e[e.Call = 0] = "Call", e[e.Construct = 1] = "Construct", e))(HB || {}), d7 = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.HasRestParameter = 1] = "HasRestParameter", e[e.HasLiteralTypes = 2] = "HasLiteralTypes", e[e.Abstract = 4] = "Abstract", e[e.IsInnerCallChain = 8] = "IsInnerCallChain", e[e.IsOuterCallChain = 16] = "IsOuterCallChain", e[e.IsUntypedSignatureInJSFile = 32] = "IsUntypedSignatureInJSFile", e[e.IsNonInferrable = 64] = "IsNonInferrable", e[e.IsSignatureCandidateForOverloadFailure = 128] = "IsSignatureCandidateForOverloadFailure", e[e.PropagatingFlags = 167] = "PropagatingFlags", e[e.CallChainFlags = 24] = "CallChainFlags", e))(d7 || {}), GB = /* @__PURE__ */ ((e) => (e[e.String = 0] = "String", e[e.Number = 1] = "Number", e))(GB || {}), $B = /* @__PURE__ */ ((e) => (e[e.Simple = 0] = "Simple", e[e.Array = 1] = "Array", e[e.Deferred = 2] = "Deferred", e[e.Function = 3] = "Function", e[e.Composite = 4] = "Composite", e[e.Merged = 5] = "Merged", e))($B || {}), XB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.NakedTypeVariable = 1] = "NakedTypeVariable", e[e.SpeculativeTuple = 2] = "SpeculativeTuple", e[e.SubstituteSource = 4] = "SubstituteSource", e[e.HomomorphicMappedType = 8] = "HomomorphicMappedType", e[e.PartialHomomorphicMappedType = 16] = "PartialHomomorphicMappedType", e[e.MappedTypeConstraint = 32] = "MappedTypeConstraint", e[e.ContravariantConditional = 64] = "ContravariantConditional", e[e.ReturnType = 128] = "ReturnType", e[e.LiteralKeyof = 256] = "LiteralKeyof", e[e.NoConstraints = 512] = "NoConstraints", e[e.AlwaysStrict = 1024] = "AlwaysStrict", e[e.MaxValue = 2048] = "MaxValue", e[e.PriorityImpliesCombination = 416] = "PriorityImpliesCombination", e[e.Circularity = -1] = "Circularity", e))(XB || {}), QB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.NoDefault = 1] = "NoDefault", e[e.AnyDefault = 2] = "AnyDefault", e[e.SkippedGenericFunction = 4] = "SkippedGenericFunction", e))(QB || {}), YB = /* @__PURE__ */ ((e) => (e[e.False = 0] = "False", e[e.Unknown = 1] = "Unknown", e[e.Maybe = 3] = "Maybe", e[e.True = -1] = "True", e))(YB || {}), ZB = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.ExportsProperty = 1] = "ExportsProperty", e[e.ModuleExports = 2] = "ModuleExports", e[e.PrototypeProperty = 3] = "PrototypeProperty", e[e.ThisProperty = 4] = "ThisProperty", e[e.Property = 5] = "Property", e[e.Prototype = 6] = "Prototype", e[e.ObjectDefinePropertyValue = 7] = "ObjectDefinePropertyValue", e[e.ObjectDefinePropertyExports = 8] = "ObjectDefinePropertyExports", e[e.ObjectDefinePrototypeProperty = 9] = "ObjectDefinePrototypeProperty", e))(ZB || {}), yD = /* @__PURE__ */ ((e) => (e[e.Warning = 0] = "Warning", e[e.Error = 1] = "Error", e[e.Suggestion = 2] = "Suggestion", e[e.Message = 3] = "Message", e))(yD || {}), Ok = /* @__PURE__ */ ((e) => (e[e.Classic = 1] = "Classic", e[e.NodeJs = 2] = "NodeJs", e[e.Node10 = 2] = "Node10", e[e.Node16 = 3] = "Node16", e[e.NodeNext = 99] = "NodeNext", e[e.Bundler = 100] = "Bundler", e))(Ok || {}), KB = /* @__PURE__ */ ((e) => (e[e.Legacy = 1] = "Legacy", e[e.Auto = 2] = "Auto", e[e.Force = 3] = "Force", e))(KB || {}), eJ = /* @__PURE__ */ ((e) => (e[e.FixedPollingInterval = 0] = "FixedPollingInterval", e[e.PriorityPollingInterval = 1] = "PriorityPollingInterval", e[e.DynamicPriorityPolling = 2] = "DynamicPriorityPolling", e[e.FixedChunkSizePolling = 3] = "FixedChunkSizePolling", e[e.UseFsEvents = 4] = "UseFsEvents", e[e.UseFsEventsOnParentDirectory = 5] = "UseFsEventsOnParentDirectory", e))(eJ || {}), tJ = /* @__PURE__ */ ((e) => (e[e.UseFsEvents = 0] = "UseFsEvents", e[e.FixedPollingInterval = 1] = "FixedPollingInterval", e[e.DynamicPriorityPolling = 2] = "DynamicPriorityPolling", e[e.FixedChunkSizePolling = 3] = "FixedChunkSizePolling", e))(tJ || {}), rJ = /* @__PURE__ */ ((e) => (e[e.FixedInterval = 0] = "FixedInterval", e[e.PriorityInterval = 1] = "PriorityInterval", e[e.DynamicPriority = 2] = "DynamicPriority", e[e.FixedChunkSize = 3] = "FixedChunkSize", e))(rJ || {}), W4 = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.CommonJS = 1] = "CommonJS", e[e.AMD = 2] = "AMD", e[e.UMD = 3] = "UMD", e[e.System = 4] = "System", e[e.ES2015 = 5] = "ES2015", e[e.ES2020 = 6] = "ES2020", e[e.ES2022 = 7] = "ES2022", e[e.ESNext = 99] = "ESNext", e[e.Node16 = 100] = "Node16", e[e.NodeNext = 199] = "NodeNext", e[e.Preserve = 200] = "Preserve", e))(W4 || {}), nJ = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Preserve = 1] = "Preserve", e[e.React = 2] = "React", e[e.ReactNative = 3] = "ReactNative", e[e.ReactJSX = 4] = "ReactJSX", e[e.ReactJSXDev = 5] = "ReactJSXDev", e))(nJ || {}), iJ = /* @__PURE__ */ ((e) => (e[e.Remove = 0] = "Remove", e[e.Preserve = 1] = "Preserve", e[e.Error = 2] = "Error", e))(iJ || {}), sJ = /* @__PURE__ */ ((e) => (e[e.CarriageReturnLineFeed = 0] = "CarriageReturnLineFeed", e[e.LineFeed = 1] = "LineFeed", e))(sJ || {}), m7 = /* @__PURE__ */ ((e) => (e[e.Unknown = 0] = "Unknown", e[e.JS = 1] = "JS", e[e.JSX = 2] = "JSX", e[e.TS = 3] = "TS", e[e.TSX = 4] = "TSX", e[e.External = 5] = "External", e[e.JSON = 6] = "JSON", e[e.Deferred = 7] = "Deferred", e))(m7 || {}), aJ = /* @__PURE__ */ ((e) => (e[e.ES3 = 0] = "ES3", e[e.ES5 = 1] = "ES5", e[e.ES2015 = 2] = "ES2015", e[e.ES2016 = 3] = "ES2016", e[e.ES2017 = 4] = "ES2017", e[e.ES2018 = 5] = "ES2018", e[e.ES2019 = 6] = "ES2019", e[e.ES2020 = 7] = "ES2020", e[e.ES2021 = 8] = "ES2021", e[e.ES2022 = 9] = "ES2022", e[e.ESNext = 99] = "ESNext", e[e.JSON = 100] = "JSON", e[
          e.Latest = 99
          /* ESNext */
        ] = "Latest", e))(aJ || {}), oJ = /* @__PURE__ */ ((e) => (e[e.Standard = 0] = "Standard", e[e.JSX = 1] = "JSX", e))(oJ || {}), cJ = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Recursive = 1] = "Recursive", e))(cJ || {}), lJ = /* @__PURE__ */ ((e) => (e[e.nullCharacter = 0] = "nullCharacter", e[e.maxAsciiCharacter = 127] = "maxAsciiCharacter", e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.lineSeparator = 8232] = "lineSeparator", e[e.paragraphSeparator = 8233] = "paragraphSeparator", e[e.nextLine = 133] = "nextLine", e[e.space = 32] = "space", e[e.nonBreakingSpace = 160] = "nonBreakingSpace", e[e.enQuad = 8192] = "enQuad", e[e.emQuad = 8193] = "emQuad", e[e.enSpace = 8194] = "enSpace", e[e.emSpace = 8195] = "emSpace", e[e.threePerEmSpace = 8196] = "threePerEmSpace", e[e.fourPerEmSpace = 8197] = "fourPerEmSpace", e[e.sixPerEmSpace = 8198] = "sixPerEmSpace", e[e.figureSpace = 8199] = "figureSpace", e[e.punctuationSpace = 8200] = "punctuationSpace", e[e.thinSpace = 8201] = "thinSpace", e[e.hairSpace = 8202] = "hairSpace", e[e.zeroWidthSpace = 8203] = "zeroWidthSpace", e[e.narrowNoBreakSpace = 8239] = "narrowNoBreakSpace", e[e.ideographicSpace = 12288] = "ideographicSpace", e[e.mathematicalSpace = 8287] = "mathematicalSpace", e[e.ogham = 5760] = "ogham", e[e._ = 95] = "_", e[e.$ = 36] = "$", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.ampersand = 38] = "ampersand", e[e.asterisk = 42] = "asterisk", e[e.at = 64] = "at", e[e.backslash = 92] = "backslash", e[e.backtick = 96] = "backtick", e[e.bar = 124] = "bar", e[e.caret = 94] = "caret", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.closeParen = 41] = "closeParen", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.equals = 61] = "equals", e[e.exclamation = 33] = "exclamation", e[e.greaterThan = 62] = "greaterThan", e[e.hash = 35] = "hash", e[e.lessThan = 60] = "lessThan", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.openParen = 40] = "openParen", e[e.percent = 37] = "percent", e[e.plus = 43] = "plus", e[e.question = 63] = "question", e[e.semicolon = 59] = "semicolon", e[e.singleQuote = 39] = "singleQuote", e[e.slash = 47] = "slash", e[e.tilde = 126] = "tilde", e[e.backspace = 8] = "backspace", e[e.formFeed = 12] = "formFeed", e[e.byteOrderMark = 65279] = "byteOrderMark", e[e.tab = 9] = "tab", e[e.verticalTab = 11] = "verticalTab", e))(lJ || {}), uJ = /* @__PURE__ */ ((e) => (e.Ts = ".ts", e.Tsx = ".tsx", e.Dts = ".d.ts", e.Js = ".js", e.Jsx = ".jsx", e.Json = ".json", e.TsBuildInfo = ".tsbuildinfo", e.Mjs = ".mjs", e.Mts = ".mts", e.Dmts = ".d.mts", e.Cjs = ".cjs", e.Cts = ".cts", e.Dcts = ".d.cts", e))(uJ || {}), g7 = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.ContainsTypeScript = 1] = "ContainsTypeScript", e[e.ContainsJsx = 2] = "ContainsJsx", e[e.ContainsESNext = 4] = "ContainsESNext", e[e.ContainsES2022 = 8] = "ContainsES2022", e[e.ContainsES2021 = 16] = "ContainsES2021", e[e.ContainsES2020 = 32] = "ContainsES2020", e[e.ContainsES2019 = 64] = "ContainsES2019", e[e.ContainsES2018 = 128] = "ContainsES2018", e[e.ContainsES2017 = 256] = "ContainsES2017", e[e.ContainsES2016 = 512] = "ContainsES2016", e[e.ContainsES2015 = 1024] = "ContainsES2015", e[e.ContainsGenerator = 2048] = "ContainsGenerator", e[e.ContainsDestructuringAssignment = 4096] = "ContainsDestructuringAssignment", e[e.ContainsTypeScriptClassSyntax = 8192] = "ContainsTypeScriptClassSyntax", e[e.ContainsLexicalThis = 16384] = "ContainsLexicalThis", e[e.ContainsRestOrSpread = 32768] = "ContainsRestOrSpread", e[e.ContainsObjectRestOrSpread = 65536] = "ContainsObjectRestOrSpread", e[e.ContainsComputedPropertyName = 131072] = "ContainsComputedPropertyName", e[e.ContainsBlockScopedBinding = 262144] = "ContainsBlockScopedBinding", e[e.ContainsBindingPattern = 524288] = "ContainsBindingPattern", e[e.ContainsYield = 1048576] = "ContainsYield", e[e.ContainsAwait = 2097152] = "ContainsAwait", e[e.ContainsHoistedDeclarationOrCompletion = 4194304] = "ContainsHoistedDeclarationOrCompletion", e[e.ContainsDynamicImport = 8388608] = "ContainsDynamicImport", e[e.ContainsClassFields = 16777216] = "ContainsClassFields", e[e.ContainsDecorators = 33554432] = "ContainsDecorators", e[e.ContainsPossibleTopLevelAwait = 67108864] = "ContainsPossibleTopLevelAwait", e[e.ContainsLexicalSuper = 134217728] = "ContainsLexicalSuper", e[e.ContainsUpdateExpressionForIdentifier = 268435456] = "ContainsUpdateExpressionForIdentifier", e[e.ContainsPrivateIdentifierInExpression = 536870912] = "ContainsPrivateIdentifierInExpression", e[e.HasComputedFlags = -2147483648] = "HasComputedFlags", e[
          e.AssertTypeScript = 1
          /* ContainsTypeScript */
        ] = "AssertTypeScript", e[
          e.AssertJsx = 2
          /* ContainsJsx */
        ] = "AssertJsx", e[
          e.AssertESNext = 4
          /* ContainsESNext */
        ] = "AssertESNext", e[
          e.AssertES2022 = 8
          /* ContainsES2022 */
        ] = "AssertES2022", e[
          e.AssertES2021 = 16
          /* ContainsES2021 */
        ] = "AssertES2021", e[
          e.AssertES2020 = 32
          /* ContainsES2020 */
        ] = "AssertES2020", e[
          e.AssertES2019 = 64
          /* ContainsES2019 */
        ] = "AssertES2019", e[
          e.AssertES2018 = 128
          /* ContainsES2018 */
        ] = "AssertES2018", e[
          e.AssertES2017 = 256
          /* ContainsES2017 */
        ] = "AssertES2017", e[
          e.AssertES2016 = 512
          /* ContainsES2016 */
        ] = "AssertES2016", e[
          e.AssertES2015 = 1024
          /* ContainsES2015 */
        ] = "AssertES2015", e[
          e.AssertGenerator = 2048
          /* ContainsGenerator */
        ] = "AssertGenerator", e[
          e.AssertDestructuringAssignment = 4096
          /* ContainsDestructuringAssignment */
        ] = "AssertDestructuringAssignment", e[
          e.OuterExpressionExcludes = -2147483648
          /* HasComputedFlags */
        ] = "OuterExpressionExcludes", e[
          e.PropertyAccessExcludes = -2147483648
          /* OuterExpressionExcludes */
        ] = "PropertyAccessExcludes", e[
          e.NodeExcludes = -2147483648
          /* PropertyAccessExcludes */
        ] = "NodeExcludes", e[e.ArrowFunctionExcludes = -2072174592] = "ArrowFunctionExcludes", e[e.FunctionExcludes = -1937940480] = "FunctionExcludes", e[e.ConstructorExcludes = -1937948672] = "ConstructorExcludes", e[e.MethodOrAccessorExcludes = -2005057536] = "MethodOrAccessorExcludes", e[e.PropertyExcludes = -2013249536] = "PropertyExcludes", e[e.ClassExcludes = -2147344384] = "ClassExcludes", e[e.ModuleExcludes = -1941676032] = "ModuleExcludes", e[e.TypeExcludes = -2] = "TypeExcludes", e[e.ObjectLiteralExcludes = -2147278848] = "ObjectLiteralExcludes", e[e.ArrayLiteralOrCallOrNewExcludes = -2147450880] = "ArrayLiteralOrCallOrNewExcludes", e[e.VariableDeclarationListExcludes = -2146893824] = "VariableDeclarationListExcludes", e[
          e.ParameterExcludes = -2147483648
          /* NodeExcludes */
        ] = "ParameterExcludes", e[e.CatchClauseExcludes = -2147418112] = "CatchClauseExcludes", e[e.BindingPatternExcludes = -2147450880] = "BindingPatternExcludes", e[e.ContainsLexicalThisOrSuper = 134234112] = "ContainsLexicalThisOrSuper", e[e.PropertyNamePropagatingFlags = 134234112] = "PropertyNamePropagatingFlags", e))(g7 || {}), h7 = /* @__PURE__ */ ((e) => (e[e.TabStop = 0] = "TabStop", e[e.Placeholder = 1] = "Placeholder", e[e.Choice = 2] = "Choice", e[e.Variable = 3] = "Variable", e))(h7 || {}), y7 = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.SingleLine = 1] = "SingleLine", e[e.MultiLine = 2] = "MultiLine", e[e.AdviseOnEmitNode = 4] = "AdviseOnEmitNode", e[e.NoSubstitution = 8] = "NoSubstitution", e[e.CapturesThis = 16] = "CapturesThis", e[e.NoLeadingSourceMap = 32] = "NoLeadingSourceMap", e[e.NoTrailingSourceMap = 64] = "NoTrailingSourceMap", e[e.NoSourceMap = 96] = "NoSourceMap", e[e.NoNestedSourceMaps = 128] = "NoNestedSourceMaps", e[e.NoTokenLeadingSourceMaps = 256] = "NoTokenLeadingSourceMaps", e[e.NoTokenTrailingSourceMaps = 512] = "NoTokenTrailingSourceMaps", e[e.NoTokenSourceMaps = 768] = "NoTokenSourceMaps", e[e.NoLeadingComments = 1024] = "NoLeadingComments", e[e.NoTrailingComments = 2048] = "NoTrailingComments", e[e.NoComments = 3072] = "NoComments", e[e.NoNestedComments = 4096] = "NoNestedComments", e[e.HelperName = 8192] = "HelperName", e[e.ExportName = 16384] = "ExportName", e[e.LocalName = 32768] = "LocalName", e[e.InternalName = 65536] = "InternalName", e[e.Indented = 131072] = "Indented", e[e.NoIndentation = 262144] = "NoIndentation", e[e.AsyncFunctionBody = 524288] = "AsyncFunctionBody", e[e.ReuseTempVariableScope = 1048576] = "ReuseTempVariableScope", e[e.CustomPrologue = 2097152] = "CustomPrologue", e[e.NoHoisting = 4194304] = "NoHoisting", e[e.Iterator = 8388608] = "Iterator", e[e.NoAsciiEscaping = 16777216] = "NoAsciiEscaping", e))(y7 || {}), _J = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.TypeScriptClassWrapper = 1] = "TypeScriptClassWrapper", e[e.NeverApplyImportHelper = 2] = "NeverApplyImportHelper", e[e.IgnoreSourceNewlines = 4] = "IgnoreSourceNewlines", e[e.Immutable = 8] = "Immutable", e[e.IndirectCall = 16] = "IndirectCall", e[e.TransformPrivateStaticElements = 32] = "TransformPrivateStaticElements", e))(_J || {}), fJ = /* @__PURE__ */ ((e) => (e[e.Extends = 1] = "Extends", e[e.Assign = 2] = "Assign", e[e.Rest = 4] = "Rest", e[e.Decorate = 8] = "Decorate", e[
          e.ESDecorateAndRunInitializers = 8
          /* Decorate */
        ] = "ESDecorateAndRunInitializers", e[e.Metadata = 16] = "Metadata", e[e.Param = 32] = "Param", e[e.Awaiter = 64] = "Awaiter", e[e.Generator = 128] = "Generator", e[e.Values = 256] = "Values", e[e.Read = 512] = "Read", e[e.SpreadArray = 1024] = "SpreadArray", e[e.Await = 2048] = "Await", e[e.AsyncGenerator = 4096] = "AsyncGenerator", e[e.AsyncDelegator = 8192] = "AsyncDelegator", e[e.AsyncValues = 16384] = "AsyncValues", e[e.ExportStar = 32768] = "ExportStar", e[e.ImportStar = 65536] = "ImportStar", e[e.ImportDefault = 131072] = "ImportDefault", e[e.MakeTemplateObject = 262144] = "MakeTemplateObject", e[e.ClassPrivateFieldGet = 524288] = "ClassPrivateFieldGet", e[e.ClassPrivateFieldSet = 1048576] = "ClassPrivateFieldSet", e[e.ClassPrivateFieldIn = 2097152] = "ClassPrivateFieldIn", e[e.CreateBinding = 4194304] = "CreateBinding", e[e.SetFunctionName = 8388608] = "SetFunctionName", e[e.PropKey = 16777216] = "PropKey", e[e.AddDisposableResourceAndDisposeResources = 33554432] = "AddDisposableResourceAndDisposeResources", e[
          e.FirstEmitHelper = 1
          /* Extends */
        ] = "FirstEmitHelper", e[
          e.LastEmitHelper = 33554432
          /* AddDisposableResourceAndDisposeResources */
        ] = "LastEmitHelper", e[
          e.ForOfIncludes = 256
          /* Values */
        ] = "ForOfIncludes", e[
          e.ForAwaitOfIncludes = 16384
          /* AsyncValues */
        ] = "ForAwaitOfIncludes", e[e.AsyncGeneratorIncludes = 6144] = "AsyncGeneratorIncludes", e[e.AsyncDelegatorIncludes = 26624] = "AsyncDelegatorIncludes", e[e.SpreadIncludes = 1536] = "SpreadIncludes", e))(fJ || {}), pJ = /* @__PURE__ */ ((e) => (e[e.SourceFile = 0] = "SourceFile", e[e.Expression = 1] = "Expression", e[e.IdentifierName = 2] = "IdentifierName", e[e.MappedTypeParameter = 3] = "MappedTypeParameter", e[e.Unspecified = 4] = "Unspecified", e[e.EmbeddedStatement = 5] = "EmbeddedStatement", e[e.JsxAttributeValue = 6] = "JsxAttributeValue", e[e.ImportTypeNodeAttributes = 7] = "ImportTypeNodeAttributes", e))(pJ || {}), dJ = /* @__PURE__ */ ((e) => (e[e.Parentheses = 1] = "Parentheses", e[e.TypeAssertions = 2] = "TypeAssertions", e[e.NonNullAssertions = 4] = "NonNullAssertions", e[e.PartiallyEmittedExpressions = 8] = "PartiallyEmittedExpressions", e[e.Assertions = 6] = "Assertions", e[e.All = 15] = "All", e[e.ExcludeJSDocTypeAssertion = 16] = "ExcludeJSDocTypeAssertion", e))(dJ || {}), mJ = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.InParameters = 1] = "InParameters", e[e.VariablesHoistedInParameters = 2] = "VariablesHoistedInParameters", e))(mJ || {}), gJ = /* @__PURE__ */ ((e) => (e.Prologue = "prologue", e.EmitHelpers = "emitHelpers", e.NoDefaultLib = "no-default-lib", e.Reference = "reference", e.Type = "type", e.TypeResolutionModeRequire = "type-require", e.TypeResolutionModeImport = "type-import", e.Lib = "lib", e.Prepend = "prepend", e.Text = "text", e.Internal = "internal", e))(gJ || {}), hJ = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.SingleLine = 0] = "SingleLine", e[e.MultiLine = 1] = "MultiLine", e[e.PreserveLines = 2] = "PreserveLines", e[e.LinesMask = 3] = "LinesMask", e[e.NotDelimited = 0] = "NotDelimited", e[e.BarDelimited = 4] = "BarDelimited", e[e.AmpersandDelimited = 8] = "AmpersandDelimited", e[e.CommaDelimited = 16] = "CommaDelimited", e[e.AsteriskDelimited = 32] = "AsteriskDelimited", e[e.DelimitersMask = 60] = "DelimitersMask", e[e.AllowTrailingComma = 64] = "AllowTrailingComma", e[e.Indented = 128] = "Indented", e[e.SpaceBetweenBraces = 256] = "SpaceBetweenBraces", e[e.SpaceBetweenSiblings = 512] = "SpaceBetweenSiblings", e[e.Braces = 1024] = "Braces", e[e.Parenthesis = 2048] = "Parenthesis", e[e.AngleBrackets = 4096] = "AngleBrackets", e[e.SquareBrackets = 8192] = "SquareBrackets", e[e.BracketsMask = 15360] = "BracketsMask", e[e.OptionalIfUndefined = 16384] = "OptionalIfUndefined", e[e.OptionalIfEmpty = 32768] = "OptionalIfEmpty", e[e.Optional = 49152] = "Optional", e[e.PreferNewLine = 65536] = "PreferNewLine", e[e.NoTrailingNewLine = 131072] = "NoTrailingNewLine", e[e.NoInterveningComments = 262144] = "NoInterveningComments", e[e.NoSpaceIfEmpty = 524288] = "NoSpaceIfEmpty", e[e.SingleElement = 1048576] = "SingleElement", e[e.SpaceAfterList = 2097152] = "SpaceAfterList", e[e.Modifiers = 2359808] = "Modifiers", e[e.HeritageClauses = 512] = "HeritageClauses", e[e.SingleLineTypeLiteralMembers = 768] = "SingleLineTypeLiteralMembers", e[e.MultiLineTypeLiteralMembers = 32897] = "MultiLineTypeLiteralMembers", e[e.SingleLineTupleTypeElements = 528] = "SingleLineTupleTypeElements", e[e.MultiLineTupleTypeElements = 657] = "MultiLineTupleTypeElements", e[e.UnionTypeConstituents = 516] = "UnionTypeConstituents", e[e.IntersectionTypeConstituents = 520] = "IntersectionTypeConstituents", e[e.ObjectBindingPatternElements = 525136] = "ObjectBindingPatternElements", e[e.ArrayBindingPatternElements = 524880] = "ArrayBindingPatternElements", e[e.ObjectLiteralExpressionProperties = 526226] = "ObjectLiteralExpressionProperties", e[e.ImportAttributes = 526226] = "ImportAttributes", e[
          e.ImportClauseEntries = 526226
          /* ImportAttributes */
        ] = "ImportClauseEntries", e[e.ArrayLiteralExpressionElements = 8914] = "ArrayLiteralExpressionElements", e[e.CommaListElements = 528] = "CommaListElements", e[e.CallExpressionArguments = 2576] = "CallExpressionArguments", e[e.NewExpressionArguments = 18960] = "NewExpressionArguments", e[e.TemplateExpressionSpans = 262144] = "TemplateExpressionSpans", e[e.SingleLineBlockStatements = 768] = "SingleLineBlockStatements", e[e.MultiLineBlockStatements = 129] = "MultiLineBlockStatements", e[e.VariableDeclarationList = 528] = "VariableDeclarationList", e[e.SingleLineFunctionBodyStatements = 768] = "SingleLineFunctionBodyStatements", e[
          e.MultiLineFunctionBodyStatements = 1
          /* MultiLine */
        ] = "MultiLineFunctionBodyStatements", e[
          e.ClassHeritageClauses = 0
          /* SingleLine */
        ] = "ClassHeritageClauses", e[e.ClassMembers = 129] = "ClassMembers", e[e.InterfaceMembers = 129] = "InterfaceMembers", e[e.EnumMembers = 145] = "EnumMembers", e[e.CaseBlockClauses = 129] = "CaseBlockClauses", e[e.NamedImportsOrExportsElements = 525136] = "NamedImportsOrExportsElements", e[e.JsxElementOrFragmentChildren = 262144] = "JsxElementOrFragmentChildren", e[e.JsxElementAttributes = 262656] = "JsxElementAttributes", e[e.CaseOrDefaultClauseStatements = 163969] = "CaseOrDefaultClauseStatements", e[e.HeritageClauseTypes = 528] = "HeritageClauseTypes", e[e.SourceFileStatements = 131073] = "SourceFileStatements", e[e.Decorators = 2146305] = "Decorators", e[e.TypeArguments = 53776] = "TypeArguments", e[e.TypeParameters = 53776] = "TypeParameters", e[e.Parameters = 2576] = "Parameters", e[e.IndexSignatureParameters = 8848] = "IndexSignatureParameters", e[e.JSDocComment = 33] = "JSDocComment", e))(hJ || {}), yJ = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.TripleSlashXML = 1] = "TripleSlashXML", e[e.SingleLine = 2] = "SingleLine", e[e.MultiLine = 4] = "MultiLine", e[e.All = 7] = "All", e[
          e.Default = 7
          /* All */
        ] = "Default", e))(yJ || {}), vD = {
          reference: {
            args: [
              { name: "types", optional: !0, captureSpan: !0 },
              { name: "lib", optional: !0, captureSpan: !0 },
              { name: "path", optional: !0, captureSpan: !0 },
              { name: "no-default-lib", optional: !0 },
              { name: "resolution-mode", optional: !0 }
            ],
            kind: 1
            /* TripleSlashXML */
          },
          "amd-dependency": {
            args: [{ name: "path" }, { name: "name", optional: !0 }],
            kind: 1
            /* TripleSlashXML */
          },
          "amd-module": {
            args: [{ name: "name" }],
            kind: 1
            /* TripleSlashXML */
          },
          "ts-check": {
            kind: 2
            /* SingleLine */
          },
          "ts-nocheck": {
            kind: 2
            /* SingleLine */
          },
          jsx: {
            args: [{ name: "factory" }],
            kind: 4
            /* MultiLine */
          },
          jsxfrag: {
            args: [{ name: "factory" }],
            kind: 4
            /* MultiLine */
          },
          jsximportsource: {
            args: [{ name: "factory" }],
            kind: 4
            /* MultiLine */
          },
          jsxruntime: {
            args: [{ name: "factory" }],
            kind: 4
            /* MultiLine */
          }
        }, vJ = /* @__PURE__ */ ((e) => (e[e.ParseAll = 0] = "ParseAll", e[e.ParseNone = 1] = "ParseNone", e[e.ParseForTypeErrors = 2] = "ParseForTypeErrors", e[e.ParseForTypeInfo = 3] = "ParseForTypeInfo", e))(vJ || {});
      }
    });
    function U4(e) {
      let t = 5381;
      for (let n = 0; n < e.length; n++)
        t = (t << 5) + t + e.charCodeAt(n);
      return t.toString();
    }
    function E0e() {
      Error.stackTraceLimit < 100 && (Error.stackTraceLimit = 100);
    }
    function bT(e, t) {
      return e.getModifiedTime(t) || of;
    }
    function nee(e) {
      return {
        250: e.Low,
        500: e.Medium,
        2e3: e.High
      };
    }
    function fFe(e) {
      if (!e.getEnvironmentVariable)
        return;
      const t = s("TSC_WATCH_POLLINGINTERVAL", v7);
      S7 = o("TSC_WATCH_POLLINGCHUNKSIZE", b7) || S7, SD = o("TSC_WATCH_UNCHANGEDPOLLTHRESHOLDS", b7) || SD;
      function n(c, u) {
        return e.getEnvironmentVariable(`${c}_${u.toUpperCase()}`);
      }
      function i(c) {
        let u;
        return f("Low"), f("Medium"), f("High"), u;
        function f(g) {
          const d = n(c, g);
          d && ((u || (u = {}))[g] = Number(d));
        }
      }
      function s(c, u) {
        const f = i(c);
        if (f)
          return g("Low"), g("Medium"), g("High"), !0;
        return !1;
        function g(d) {
          u[d] = f[d] || u[d];
        }
      }
      function o(c, u) {
        const f = i(c);
        return (t || f) && nee(f ? { ...u, ...f } : u);
      }
    }
    function P0e(e, t, n, i, s) {
      let o = n;
      for (let u = t.length; i && u; c(), u--) {
        const f = t[n];
        if (f) {
          if (f.isClosed) {
            t[n] = void 0;
            continue;
          }
        } else
          continue;
        i--;
        const g = gFe(f, bT(e, f.fileName));
        if (f.isClosed) {
          t[n] = void 0;
          continue;
        }
        s?.(f, n, g), t[n] && (o < n && (t[o] = f, t[n] = void 0), o++);
      }
      return n;
      function c() {
        n++, n === t.length && (o < n && (t.length = o), n = 0, o = 0);
      }
    }
    function pFe(e) {
      const t = [], n = [], i = u(
        250
        /* Low */
      ), s = u(
        500
        /* Medium */
      ), o = u(
        2e3
        /* High */
      );
      return c;
      function c(P, F, J) {
        const U = {
          fileName: P,
          callback: F,
          unchangedPolls: 0,
          mtime: bT(e, P)
        };
        return t.push(U), S(U, J), {
          close: () => {
            U.isClosed = !0, yT(t, U);
          }
        };
      }
      function u(P) {
        const F = [];
        return F.pollingInterval = P, F.pollIndex = 0, F.pollScheduled = !1, F;
      }
      function f(P, F) {
        F.pollIndex = d(F, F.pollingInterval, F.pollIndex, S7[F.pollingInterval]), F.length ? w(F.pollingInterval) : (E.assert(F.pollIndex === 0), F.pollScheduled = !1);
      }
      function g(P, F) {
        d(
          n,
          250,
          /*pollIndex*/
          0,
          n.length
        ), f(P, F), !F.pollScheduled && n.length && w(
          250
          /* Low */
        );
      }
      function d(P, F, J, U) {
        return P0e(
          e,
          P,
          J,
          U,
          $
        );
        function $(j, re, R) {
          R ? (j.unchangedPolls = 0, P !== n && (P[re] = void 0, T(j))) : j.unchangedPolls !== SD[F] ? j.unchangedPolls++ : P === n ? (j.unchangedPolls = 1, P[re] = void 0, S(
            j,
            250
            /* Low */
          )) : F !== 2e3 && (j.unchangedPolls++, P[re] = void 0, S(
            j,
            F === 250 ? 500 : 2e3
            /* High */
          ));
        }
      }
      function y(P) {
        switch (P) {
          case 250:
            return i;
          case 500:
            return s;
          case 2e3:
            return o;
        }
      }
      function S(P, F) {
        y(F).push(P), k(F);
      }
      function T(P) {
        n.push(P), k(
          250
          /* Low */
        );
      }
      function k(P) {
        y(P).pollScheduled || w(P);
      }
      function w(P) {
        y(P).pollScheduled = e.setTimeout(P === 250 ? g : f, P, P === 250 ? "pollLowPollingIntervalQueue" : "pollPollingIntervalQueue", y(P));
      }
    }
    function dFe(e, t, n, i) {
      const s = Tf(), o = i ? /* @__PURE__ */ new Map() : void 0, c = /* @__PURE__ */ new Map(), u = su(t);
      return f;
      function f(d, y, S, T) {
        const k = u(d);
        s.add(k, y).length === 1 && o && o.set(k, n(d) || of);
        const w = Un(k) || ".", P = c.get(w) || g(Un(d) || ".", w, T);
        return P.referenceCount++, {
          close: () => {
            P.referenceCount === 1 ? (P.close(), c.delete(w)) : P.referenceCount--, s.remove(k, y);
          }
        };
      }
      function g(d, y, S) {
        const T = e(
          d,
          1,
          (k, w) => {
            if (!ls(w))
              return;
            const P = Xi(w, d), F = u(P), J = P && s.get(F);
            if (J) {
              let U, $ = 1;
              if (o) {
                const j = o.get(F);
                if (k === "change" && (U = n(P) || of, U.getTime() === j.getTime()))
                  return;
                U || (U = n(P) || of), o.set(F, U), j === of ? $ = 0 : U === of && ($ = 2);
              }
              for (const j of J)
                j(P, $, U);
            }
          },
          /*recursive*/
          !1,
          500,
          S
        );
        return T.referenceCount = 0, c.set(y, T), T;
      }
    }
    function mFe(e) {
      const t = [];
      let n = 0, i;
      return s;
      function s(u, f) {
        const g = {
          fileName: u,
          callback: f,
          mtime: bT(e, u)
        };
        return t.push(g), c(), {
          close: () => {
            g.isClosed = !0, yT(t, g);
          }
        };
      }
      function o() {
        i = void 0, n = P0e(e, t, n, S7[
          250
          /* Low */
        ]), c();
      }
      function c() {
        !t.length || i || (i = e.setTimeout(o, 2e3, "pollQueue"));
      }
    }
    function D0e(e, t, n, i, s) {
      const c = su(t)(n), u = e.get(c);
      return u ? u.callbacks.push(i) : e.set(c, {
        watcher: s(
          // Cant infer types correctly so lets satisfy checker
          (f, g, d) => {
            var y;
            return (y = e.get(c)) == null ? void 0 : y.callbacks.slice().forEach((S) => S(f, g, d));
          }
        ),
        callbacks: [i]
      }), {
        close: () => {
          const f = e.get(c);
          f && (!wk(f.callbacks, i) || f.callbacks.length || (e.delete(c), Kf(f)));
        }
      };
    }
    function gFe(e, t) {
      const n = e.mtime.getTime(), i = t.getTime();
      return n !== i ? (e.mtime = t, e.callback(e.fileName, bJ(n, i), t), !0) : !1;
    }
    function bJ(e, t) {
      return e === 0 ? 0 : t === 0 ? 2 : 1;
    }
    function bD(e) {
      return oee(e);
    }
    function iee(e) {
      oee = e;
    }
    function hFe({
      watchDirectory: e,
      useCaseSensitiveFileNames: t,
      getCurrentDirectory: n,
      getAccessibleSortedChildDirectories: i,
      fileSystemEntryExists: s,
      realpath: o,
      setTimeout: c,
      clearTimeout: u
    }) {
      const f = /* @__PURE__ */ new Map(), g = Tf(), d = /* @__PURE__ */ new Map();
      let y;
      const S = Pk(!t), T = su(t);
      return (R, Y, ue, pe) => ue ? k(R, pe, Y) : e(R, Y, ue, pe);
      function k(R, Y, ue) {
        const pe = T(R);
        let H = f.get(pe);
        H ? H.refCount++ : (H = {
          watcher: e(
            R,
            (ee) => {
              j(ee, Y) || (Y?.synchronousWatchDirectory ? (w(pe, ee), $(R, pe, Y)) : P(R, pe, ee, Y));
            },
            /*recursive*/
            !1,
            Y
          ),
          refCount: 1,
          childWatches: We
        }, f.set(pe, H), $(R, pe, Y));
        const q = ue && { dirName: R, callback: ue };
        return q && g.add(pe, q), {
          dirName: R,
          close: () => {
            const ee = E.checkDefined(f.get(pe));
            q && g.remove(pe, q), ee.refCount--, !ee.refCount && (f.delete(pe), Kf(ee), ee.childWatches.forEach(hd));
          }
        };
      }
      function w(R, Y, ue) {
        let pe, H;
        ls(Y) ? pe = Y : H = Y, g.forEach((q, ee) => {
          if (!(H && H.get(ee) === !0) && (ee === R || Wi(R, ee) && R[ee.length] === Oo))
            if (H)
              if (ue) {
                const oe = H.get(ee);
                oe ? oe.push(...ue) : H.set(ee, ue.slice());
              } else
                H.set(ee, !0);
            else
              q.forEach(({ callback: oe }) => oe(pe));
        });
      }
      function P(R, Y, ue, pe) {
        const H = f.get(Y);
        if (H && s(
          R,
          1
          /* Directory */
        )) {
          F(R, Y, ue, pe);
          return;
        }
        w(Y, ue), U(H);
      }
      function F(R, Y, ue, pe) {
        const H = d.get(Y);
        H ? H.fileNames.push(ue) : d.set(Y, { dirName: R, options: pe, fileNames: [ue] }), y && (u(y), y = void 0), y = c(J, 1e3, "timerToUpdateChildWatches");
      }
      function J() {
        y = void 0, bD(`sysLog:: onTimerToUpdateChildWatches:: ${d.size}`);
        const R = xo(), Y = /* @__PURE__ */ new Map();
        for (; !y && d.size; ) {
          const pe = d.entries().next();
          E.assert(!pe.done);
          const { value: [H, { dirName: q, options: ee, fileNames: oe }] } = pe;
          d.delete(H);
          const Se = $(q, H, ee);
          w(H, Y, Se ? void 0 : oe);
        }
        bD(`sysLog:: invokingWatchers:: Elapsed:: ${xo() - R}ms:: ${d.size}`), g.forEach((pe, H) => {
          const q = Y.get(H);
          q && pe.forEach(({ callback: ee, dirName: oe }) => {
            ts(q) ? q.forEach(ee) : ee(oe);
          });
        });
        const ue = xo() - R;
        bD(`sysLog:: Elapsed:: ${ue}ms:: onTimerToUpdateChildWatches:: ${d.size} ${y}`);
      }
      function U(R) {
        if (!R)
          return;
        const Y = R.childWatches;
        R.childWatches = We;
        for (const ue of Y)
          ue.close(), U(f.get(T(ue.dirName)));
      }
      function $(R, Y, ue) {
        const pe = f.get(Y);
        if (!pe)
          return !1;
        let H;
        const q = e7(
          s(
            R,
            1
            /* Directory */
          ) ? Ri(i(R), (Se) => {
            const ae = Xi(Se, R);
            return !j(ae, ue) && S(ae, Hs(o(ae))) === 0 ? ae : void 0;
          }) : We,
          pe.childWatches,
          (Se, ae) => S(Se, ae.dirName),
          ee,
          hd,
          oe
        );
        return pe.childWatches = H || We, q;
        function ee(Se) {
          const ae = k(Se, ue);
          oe(ae);
        }
        function oe(Se) {
          (H || (H = [])).push(Se);
        }
      }
      function j(R, Y) {
        return ct(TD, (ue) => re(R, ue)) || w0e(R, Y, t, n);
      }
      function re(R, Y) {
        return R.includes(Y) ? !0 : t ? !1 : T(R).includes(Y);
      }
    }
    function yFe(e) {
      return (t, n, i) => e(n === 1 ? "change" : "rename", "", i);
    }
    function vFe(e, t, n) {
      return (i, s, o) => {
        i === "rename" ? (o || (o = n(e) || of), t(e, o !== of ? 0 : 2, o)) : t(e, 1, o);
      };
    }
    function w0e(e, t, n, i) {
      return (t?.excludeDirectories || t?.excludeFiles) && (BO(e, t?.excludeFiles, n, i()) || BO(e, t?.excludeDirectories, n, i()));
    }
    function A0e(e, t, n, i, s) {
      return (o, c) => {
        if (o === "rename") {
          const u = c ? Hs(Mn(e, c)) : e;
          (!c || !w0e(u, n, i, s)) && t(u);
        }
      };
    }
    function see({
      pollingWatchFileWorker: e,
      getModifiedTime: t,
      setTimeout: n,
      clearTimeout: i,
      fsWatchWorker: s,
      fileSystemEntryExists: o,
      useCaseSensitiveFileNames: c,
      getCurrentDirectory: u,
      fsSupportsRecursiveFsWatch: f,
      getAccessibleSortedChildDirectories: g,
      realpath: d,
      tscWatchFile: y,
      useNonPollingWatchers: S,
      tscWatchDirectory: T,
      inodeWatching: k,
      fsWatchWithTimestamp: w,
      sysLog: P
    }) {
      const F = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
      let $, j, re, R, Y = !1;
      return {
        watchFile: ue,
        watchDirectory: oe
      };
      function ue(me, be, xe, De) {
        De = q(De, S);
        const ft = E.checkDefined(De.watchFile);
        switch (ft) {
          case 0:
            return K(
              me,
              be,
              250,
              /*options*/
              void 0
            );
          case 1:
            return K(
              me,
              be,
              xe,
              /*options*/
              void 0
            );
          case 2:
            return pe()(
              me,
              be,
              xe,
              /*options*/
              void 0
            );
          case 3:
            return H()(
              me,
              be,
              /* pollingInterval */
              void 0,
              /*options*/
              void 0
            );
          case 4:
            return fe(
              me,
              0,
              vFe(me, be, t),
              /*recursive*/
              !1,
              xe,
              hA(De)
            );
          case 5:
            return re || (re = dFe(fe, c, t, w)), re(me, be, xe, hA(De));
          default:
            E.assertNever(ft);
        }
      }
      function pe() {
        return $ || ($ = pFe({ getModifiedTime: t, setTimeout: n }));
      }
      function H() {
        return j || (j = mFe({ getModifiedTime: t, setTimeout: n }));
      }
      function q(me, be) {
        if (me && me.watchFile !== void 0)
          return me;
        switch (y) {
          case "PriorityPollingInterval":
            return {
              watchFile: 1
              /* PriorityPollingInterval */
            };
          case "DynamicPriorityPolling":
            return {
              watchFile: 2
              /* DynamicPriorityPolling */
            };
          case "UseFsEvents":
            return ee(4, 1, me);
          case "UseFsEventsWithFallbackDynamicPolling":
            return ee(4, 2, me);
          case "UseFsEventsOnParentDirectory":
            be = !0;
          default:
            return be ? (
              // Use notifications from FS to watch with falling back to fs.watchFile
              ee(5, 1, me)
            ) : (
              // Default to using fs events
              {
                watchFile: 4
                /* UseFsEvents */
              }
            );
        }
      }
      function ee(me, be, xe) {
        const De = xe?.fallbackPolling;
        return {
          watchFile: me,
          fallbackPolling: De === void 0 ? be : De
        };
      }
      function oe(me, be, xe, De) {
        return f ? fe(
          me,
          1,
          A0e(me, be, De, c, u),
          xe,
          500,
          hA(De)
        ) : (R || (R = hFe({
          useCaseSensitiveFileNames: c,
          getCurrentDirectory: u,
          fileSystemEntryExists: o,
          getAccessibleSortedChildDirectories: g,
          watchDirectory: Se,
          realpath: d,
          setTimeout: n,
          clearTimeout: i
        })), R(me, be, xe, De));
      }
      function Se(me, be, xe, De) {
        E.assert(!xe);
        const ft = ae(De), ge = E.checkDefined(ft.watchDirectory);
        switch (ge) {
          case 1:
            return K(
              me,
              () => be(me),
              500,
              /*options*/
              void 0
            );
          case 2:
            return pe()(
              me,
              () => be(me),
              500,
              /*options*/
              void 0
            );
          case 3:
            return H()(
              me,
              () => be(me),
              /* pollingInterval */
              void 0,
              /*options*/
              void 0
            );
          case 0:
            return fe(
              me,
              1,
              A0e(me, be, De, c, u),
              xe,
              500,
              hA(ft)
            );
          default:
            E.assertNever(ge);
        }
      }
      function ae(me) {
        if (me && me.watchDirectory !== void 0)
          return me;
        switch (T) {
          case "RecursiveDirectoryUsingFsWatchFile":
            return {
              watchDirectory: 1
              /* FixedPollingInterval */
            };
          case "RecursiveDirectoryUsingDynamicPriorityPolling":
            return {
              watchDirectory: 2
              /* DynamicPriorityPolling */
            };
          default:
            const be = me?.fallbackPolling;
            return {
              watchDirectory: 0,
              fallbackPolling: be !== void 0 ? be : void 0
            };
        }
      }
      function K(me, be, xe, De) {
        return D0e(
          F,
          c,
          me,
          be,
          (ft) => e(me, ft, xe, De)
        );
      }
      function fe(me, be, xe, De, ft, ge) {
        return D0e(
          De ? U : J,
          c,
          me,
          xe,
          (Fe) => ke(me, be, Fe, De, ft, ge)
        );
      }
      function ke(me, be, xe, De, ft, ge) {
        let Fe, $e;
        k && (Fe = me.substring(me.lastIndexOf(Oo)), $e = Fe.slice(Oo.length));
        let Dt = o(me, be) ? Je() : Wt();
        return {
          close: () => {
            Dt && (Dt.close(), Dt = void 0);
          }
        };
        function at(gr) {
          Dt && (P(`sysLog:: ${me}:: Changing watcher to ${gr === Je ? "Present" : "Missing"}FileSystemEntryWatcher`), Dt.close(), Dt = gr());
        }
        function Je() {
          if (Y)
            return P(`sysLog:: ${me}:: Defaulting to watchFile`), zt();
          try {
            const gr = (be === 1 || !w ? s : Oe)(
              me,
              De,
              k ? pt : xe
            );
            return gr.on("error", () => {
              xe("rename", ""), at(Wt);
            }), gr;
          } catch (gr) {
            return Y || (Y = gr.code === "ENOSPC"), P(`sysLog:: ${me}:: Changing to watchFile`), zt();
          }
        }
        function pt(gr, Lr) {
          let er;
          if (Lr && Zo(Lr, "~") && (er = Lr, Lr = Lr.slice(0, Lr.length - 1)), gr === "rename" && (!Lr || Lr === $e || Zo(Lr, Fe))) {
            const jt = t(me) || of;
            er && xe(gr, er, jt), xe(gr, Lr, jt), k ? at(jt === of ? Wt : Je) : jt === of && at(Wt);
          } else
            er && xe(gr, er), xe(gr, Lr);
        }
        function zt() {
          return ue(
            me,
            yFe(xe),
            ft,
            ge
          );
        }
        function Wt() {
          return ue(
            me,
            (gr, Lr, er) => {
              Lr === 0 && (er || (er = t(me) || of), er !== of && (xe("rename", "", er), at(Je)));
            },
            ft,
            ge
          );
        }
      }
      function Oe(me, be, xe) {
        let De = t(me) || of;
        return s(me, be, (ft, ge, Fe) => {
          ft === "change" && (Fe || (Fe = t(me) || of), Fe.getTime() === De.getTime()) || (De = Fe || t(me) || of, xe(ft, ge, De));
        });
      }
    }
    function aee(e) {
      const t = e.writeFile;
      e.writeFile = (n, i, s) => nV(
        n,
        i,
        !!s,
        (o, c, u) => t.call(e, o, c, u),
        (o) => e.createDirectory(o),
        (o) => e.directoryExists(o)
      );
    }
    function N0e(e) {
      Ul = e;
    }
    var SJ, v7, of, b7, S7, SD, TD, oee, TJ, Ul, bFe = Pt({
      "src/compiler/sys.ts"() {
        Fs(), SJ = /* @__PURE__ */ ((e) => (e[e.Created = 0] = "Created", e[e.Changed = 1] = "Changed", e[e.Deleted = 2] = "Deleted", e))(SJ || {}), v7 = /* @__PURE__ */ ((e) => (e[e.High = 2e3] = "High", e[e.Medium = 500] = "Medium", e[e.Low = 250] = "Low", e))(v7 || {}), of = /* @__PURE__ */ new Date(0), b7 = { Low: 32, Medium: 64, High: 256 }, S7 = nee(b7), SD = nee(b7), TD = ["/node_modules/.", "/.git", "/.#"], oee = Ca, TJ = /* @__PURE__ */ ((e) => (e[e.File = 0] = "File", e[e.Directory = 1] = "Directory", e))(TJ || {}), Ul = (() => {
          const e = "\uFEFF";
          function t() {
            const i = /^native |^\([^)]+\)$|^(internal[\\/]|[a-zA-Z0-9_\s]+(\.js)?$)/, s = kk, o = kk, c = kk;
            let u;
            try {
              u = kk;
            } catch {
              u = void 0;
            }
            let f, g = "./profile.cpuprofile";
            const d = kk.Buffer, y = process.platform === "darwin", S = process.platform === "linux" || y, T = c.platform(), k = H(), w = s.realpathSync.native ? process.platform === "win32" ? De : s.realpathSync.native : s.realpathSync, P = __filename.endsWith("sys.js") ? o.join(o.dirname(__dirname), "__fake__.js") : __filename, F = process.platform === "win32" || y, J = $u(() => process.cwd()), { watchFile: U, watchDirectory: $ } = see({
              pollingWatchFileWorker: ee,
              getModifiedTime: ge,
              setTimeout,
              clearTimeout,
              fsWatchWorker: oe,
              useCaseSensitiveFileNames: k,
              getCurrentDirectory: J,
              fileSystemEntryExists: Oe,
              // Node 4.0 `fs.watch` function supports the "recursive" option on both OSX and Windows
              // (ref: https://github.com/nodejs/node/pull/2649 and https://github.com/Microsoft/TypeScript/issues/4643)
              fsSupportsRecursiveFsWatch: F,
              getAccessibleSortedChildDirectories: (at) => fe(at).directories,
              realpath: ft,
              tscWatchFile: process.env.TSC_WATCHFILE,
              useNonPollingWatchers: !!process.env.TSC_NONPOLLING_WATCHER,
              tscWatchDirectory: process.env.TSC_WATCHDIRECTORY,
              inodeWatching: S,
              fsWatchWithTimestamp: y,
              sysLog: bD
            }), j = {
              args: process.argv.slice(2),
              newLine: c.EOL,
              useCaseSensitiveFileNames: k,
              write(at) {
                process.stdout.write(at);
              },
              getWidthOfTerminal() {
                return process.stdout.columns;
              },
              writeOutputIsTTY() {
                return process.stdout.isTTY;
              },
              readFile: ae,
              writeFile: K,
              watchFile: U,
              watchDirectory: $,
              resolvePath: (at) => o.resolve(at),
              fileExists: me,
              directoryExists: be,
              getAccessibleFileSystemEntries: fe,
              createDirectory(at) {
                if (!j.directoryExists(at))
                  try {
                    s.mkdirSync(at);
                  } catch (Je) {
                    if (Je.code !== "EEXIST")
                      throw Je;
                  }
              },
              getExecutingFilePath() {
                return P;
              },
              getCurrentDirectory: J,
              getDirectories: xe,
              getEnvironmentVariable(at) {
                return process.env[at] || "";
              },
              readDirectory: ke,
              getModifiedTime: ge,
              setModifiedTime: Fe,
              deleteFile: $e,
              createHash: u ? Dt : U4,
              createSHA256Hash: u ? Dt : void 0,
              getMemoryUsage() {
                return _5e.gc && _5e.gc(), process.memoryUsage().heapUsed;
              },
              getFileSize(at) {
                try {
                  const Je = re(at);
                  if (Je?.isFile())
                    return Je.size;
                } catch {
                }
                return 0;
              },
              exit(at) {
                ue(() => process.exit(at));
              },
              enableCPUProfiler: R,
              disableCPUProfiler: ue,
              cpuProfilingEnabled: () => !!f || bs(process.execArgv, "--cpu-prof") || bs(process.execArgv, "--prof"),
              realpath: ft,
              debugMode: !!process.env.NODE_INSPECTOR_IPC || !!process.env.VSCODE_INSPECTOR_OPTIONS || ct(process.execArgv, (at) => /^--(inspect|debug)(-brk)?(=\d+)?$/i.test(at)) || !!process.recordreplay,
              tryEnableSourceMapsForHost() {
                try {
                  kk.install();
                } catch {
                }
              },
              setTimeout,
              clearTimeout,
              clearScreen: () => {
                process.stdout.write("\x1Bc");
              },
              setBlocking: () => {
                var at;
                const Je = (at = process.stdout) == null ? void 0 : at._handle;
                Je && Je.setBlocking && Je.setBlocking(!0);
              },
              bufferFrom: pe,
              base64decode: (at) => pe(at, "base64").toString("utf8"),
              base64encode: (at) => pe(at).toString("base64"),
              require: (at, Je) => {
                try {
                  const pt = tse(Je, at, j);
                  return { module: h5e(pt), modulePath: pt, error: void 0 };
                } catch (pt) {
                  return { module: void 0, modulePath: void 0, error: pt };
                }
              }
            };
            return j;
            function re(at) {
              return s.statSync(at, { throwIfNoEntry: !1 });
            }
            function R(at, Je) {
              if (f)
                return Je(), !1;
              const pt = kk;
              if (!pt || !pt.Session)
                return Je(), !1;
              const zt = new pt.Session();
              return zt.connect(), zt.post("Profiler.enable", () => {
                zt.post("Profiler.start", () => {
                  f = zt, g = at, Je();
                });
              }), !0;
            }
            function Y(at) {
              let Je = 0;
              const pt = /* @__PURE__ */ new Map(), zt = au(o.dirname(P)), Wt = `file://${Am(zt) === 1 ? "" : "/"}${zt}`;
              for (const gr of at.nodes)
                if (gr.callFrame.url) {
                  const Lr = au(gr.callFrame.url);
                  Jp(Wt, Lr, k) ? gr.callFrame.url = TT(
                    Wt,
                    Lr,
                    Wt,
                    su(k),
                    /*isAbsolutePathAnUrl*/
                    !0
                  ) : i.test(Lr) || (gr.callFrame.url = (pt.has(Lr) ? pt : pt.set(Lr, `external${Je}.js`)).get(Lr), Je++);
                }
              return at;
            }
            function ue(at) {
              if (f && f !== "stopping") {
                const Je = f;
                return f.post("Profiler.stop", (pt, { profile: zt }) => {
                  var Wt;
                  if (!pt) {
                    try {
                      (Wt = re(g)) != null && Wt.isDirectory() && (g = o.join(g, `${(/* @__PURE__ */ new Date()).toISOString().replace(/:/g, "-")}+P${process.pid}.cpuprofile`));
                    } catch {
                    }
                    try {
                      s.mkdirSync(o.dirname(g), { recursive: !0 });
                    } catch {
                    }
                    s.writeFileSync(g, JSON.stringify(Y(zt)));
                  }
                  f = void 0, Je.disconnect(), at();
                }), f = "stopping", !0;
              } else
                return at(), !1;
            }
            function pe(at, Je) {
              return d.from && d.from !== Int8Array.from ? d.from(at, Je) : new d(at, Je);
            }
            function H() {
              return T === "win32" || T === "win64" ? !1 : !me(q(__filename));
            }
            function q(at) {
              return at.replace(/\w/g, (Je) => {
                const pt = Je.toUpperCase();
                return Je === pt ? Je.toLowerCase() : pt;
              });
            }
            function ee(at, Je, pt) {
              s.watchFile(at, { persistent: !0, interval: pt }, Wt);
              let zt;
              return {
                close: () => s.unwatchFile(at, Wt)
              };
              function Wt(gr, Lr) {
                const er = +Lr.mtime == 0 || zt === 2;
                if (+gr.mtime == 0) {
                  if (er)
                    return;
                  zt = 2;
                } else if (er)
                  zt = 0;
                else {
                  if (+gr.mtime == +Lr.mtime)
                    return;
                  zt = 1;
                }
                Je(at, zt, gr.mtime);
              }
            }
            function oe(at, Je, pt) {
              return s.watch(
                at,
                F ? { persistent: !0, recursive: !!Je } : { persistent: !0 },
                pt
              );
            }
            function Se(at, Je) {
              let pt;
              try {
                pt = s.readFileSync(at);
              } catch {
                return;
              }
              let zt = pt.length;
              if (zt >= 2 && pt[0] === 254 && pt[1] === 255) {
                zt &= -2;
                for (let Wt = 0; Wt < zt; Wt += 2) {
                  const gr = pt[Wt];
                  pt[Wt] = pt[Wt + 1], pt[Wt + 1] = gr;
                }
                return pt.toString("utf16le", 2);
              }
              return zt >= 2 && pt[0] === 255 && pt[1] === 254 ? pt.toString("utf16le", 2) : zt >= 3 && pt[0] === 239 && pt[1] === 187 && pt[2] === 191 ? pt.toString("utf8", 3) : pt.toString("utf8");
            }
            function ae(at, Je) {
              var pt, zt;
              (pt = Nu) == null || pt.logStartReadFile(at);
              const Wt = Se(at);
              return (zt = Nu) == null || zt.logStopReadFile(), Wt;
            }
            function K(at, Je, pt) {
              var zt;
              (zt = Nu) == null || zt.logEvent("WriteFile: " + at), pt && (Je = e + Je);
              let Wt;
              try {
                Wt = s.openSync(at, "w"), s.writeSync(
                  Wt,
                  Je,
                  /*position*/
                  void 0,
                  "utf8"
                );
              } finally {
                Wt !== void 0 && s.closeSync(Wt);
              }
            }
            function fe(at) {
              var Je;
              (Je = Nu) == null || Je.logEvent("ReadDir: " + (at || "."));
              try {
                const pt = s.readdirSync(at || ".", { withFileTypes: !0 }), zt = [], Wt = [];
                for (const gr of pt) {
                  const Lr = typeof gr == "string" ? gr : gr.name;
                  if (Lr === "." || Lr === "..")
                    continue;
                  let er;
                  if (typeof gr == "string" || gr.isSymbolicLink()) {
                    const jt = Mn(at, Lr);
                    try {
                      if (er = re(jt), !er)
                        continue;
                    } catch {
                      continue;
                    }
                  } else
                    er = gr;
                  er.isFile() ? zt.push(Lr) : er.isDirectory() && Wt.push(Lr);
                }
                return zt.sort(), Wt.sort(), { files: zt, directories: Wt };
              } catch {
                return wF;
              }
            }
            function ke(at, Je, pt, zt, Wt) {
              return EV(at, Je, pt, zt, k, process.cwd(), Wt, fe, ft);
            }
            function Oe(at, Je) {
              const pt = Error.stackTraceLimit;
              Error.stackTraceLimit = 0;
              try {
                const zt = re(at);
                if (!zt)
                  return !1;
                switch (Je) {
                  case 0:
                    return zt.isFile();
                  case 1:
                    return zt.isDirectory();
                  default:
                    return !1;
                }
              } catch {
                return !1;
              } finally {
                Error.stackTraceLimit = pt;
              }
            }
            function me(at) {
              return Oe(
                at,
                0
                /* File */
              );
            }
            function be(at) {
              return Oe(
                at,
                1
                /* Directory */
              );
            }
            function xe(at) {
              return fe(at).directories.slice();
            }
            function De(at) {
              return at.length < 260 ? s.realpathSync.native(at) : s.realpathSync(at);
            }
            function ft(at) {
              try {
                return w(at);
              } catch {
                return at;
              }
            }
            function ge(at) {
              var Je;
              const pt = Error.stackTraceLimit;
              Error.stackTraceLimit = 0;
              try {
                return (Je = re(at)) == null ? void 0 : Je.mtime;
              } catch {
                return;
              } finally {
                Error.stackTraceLimit = pt;
              }
            }
            function Fe(at, Je) {
              try {
                s.utimesSync(at, Je, Je);
              } catch {
                return;
              }
            }
            function $e(at) {
              try {
                return s.unlinkSync(at);
              } catch {
                return;
              }
            }
            function Dt(at) {
              const Je = u.createHash("sha256");
              return Je.update(at), Je.digest("hex");
            }
          }
          let n;
          return fB() && (n = t()), n && aee(n), n;
        })(), Ul && Ul.getEnvironmentVariable && (fFe(Ul), E.setAssertionLevel(
          /^development$/i.test(Ul.getEnvironmentVariable("NODE_ENV")) ? 1 : 0
          /* None */
        )), Ul && Ul.debugMode && (E.isDebugging = !0);
      }
    });
    function xJ(e) {
      return e === 47 || e === 92;
    }
    function cee(e) {
      return T7(e) < 0;
    }
    function L_(e) {
      return T7(e) > 0;
    }
    function kJ(e) {
      const t = T7(e);
      return t > 0 && t === e.length;
    }
    function q4(e) {
      return T7(e) !== 0;
    }
    function cf(e) {
      return /^\.\.?($|[\\/])/.test(e);
    }
    function CJ(e) {
      return !q4(e) && !cf(e);
    }
    function ST(e) {
      return Ic(e).includes(".");
    }
    function Ko(e, t) {
      return e.length > t.length && Zo(e, t);
    }
    function Yc(e, t) {
      for (const n of t)
        if (Ko(e, n))
          return !0;
      return !1;
    }
    function Hh(e) {
      return e.length > 0 && xJ(e.charCodeAt(e.length - 1));
    }
    function I0e(e) {
      return e >= 97 && e <= 122 || e >= 65 && e <= 90;
    }
    function SFe(e, t) {
      const n = e.charCodeAt(t);
      if (n === 58)
        return t + 1;
      if (n === 37 && e.charCodeAt(t + 1) === 51) {
        const i = e.charCodeAt(t + 2);
        if (i === 97 || i === 65)
          return t + 3;
      }
      return -1;
    }
    function T7(e) {
      if (!e)
        return 0;
      const t = e.charCodeAt(0);
      if (t === 47 || t === 92) {
        if (e.charCodeAt(1) !== t)
          return 1;
        const i = e.indexOf(t === 47 ? Oo : ED, 2);
        return i < 0 ? e.length : i + 1;
      }
      if (I0e(t) && e.charCodeAt(1) === 58) {
        const i = e.charCodeAt(2);
        if (i === 47 || i === 92)
          return 3;
        if (e.length === 2)
          return 2;
      }
      const n = e.indexOf(_ee);
      if (n !== -1) {
        const i = n + _ee.length, s = e.indexOf(Oo, i);
        if (s !== -1) {
          const o = e.slice(0, n), c = e.slice(i, s);
          if (o === "file" && (c === "" || c === "localhost") && I0e(e.charCodeAt(s + 1))) {
            const u = SFe(e, s + 2);
            if (u !== -1) {
              if (e.charCodeAt(u) === 47)
                return ~(u + 1);
              if (u === e.length)
                return ~u;
            }
          }
          return ~(s + 1);
        }
        return ~e.length;
      }
      return 0;
    }
    function Am(e) {
      const t = T7(e);
      return t < 0 ? ~t : t;
    }
    function Un(e) {
      e = au(e);
      const t = Am(e);
      return t === e.length ? e : (e = p1(e), e.slice(0, Math.max(t, e.lastIndexOf(Oo))));
    }
    function Ic(e, t, n) {
      if (e = au(e), Am(e) === e.length)
        return "";
      e = p1(e);
      const s = e.slice(Math.max(Am(e), e.lastIndexOf(Oo) + 1)), o = t !== void 0 && n !== void 0 ? Lk(s, t, n) : void 0;
      return o ? s.slice(0, s.length - o.length) : s;
    }
    function F0e(e, t, n) {
      if (Wi(t, ".") || (t = "." + t), e.length >= t.length && e.charCodeAt(e.length - t.length) === 46) {
        const i = e.slice(e.length - t.length);
        if (n(i, t))
          return i;
      }
    }
    function TFe(e, t, n) {
      if (typeof t == "string")
        return F0e(e, t, n) || "";
      for (const i of t) {
        const s = F0e(e, i, n);
        if (s)
          return s;
      }
      return "";
    }
    function Lk(e, t, n) {
      if (t)
        return TFe(p1(e), t, n ? f1 : ub);
      const i = Ic(e), s = i.lastIndexOf(".");
      return s >= 0 ? i.substring(s) : "";
    }
    function xFe(e, t) {
      const n = e.substring(0, t), i = e.substring(t).split(Oo);
      return i.length && !wo(i) && i.pop(), [n, ...i];
    }
    function pl(e, t = "") {
      return e = Mn(t, e), xFe(e, Am(e));
    }
    function V0(e, t) {
      return e.length === 0 ? "" : (e[0] && dl(e[0])) + e.slice(1, t).join(Oo);
    }
    function au(e) {
      return e.includes("\\") ? e.replace(M0e, Oo) : e;
    }
    function db(e) {
      if (!ct(e))
        return [];
      const t = [e[0]];
      for (let n = 1; n < e.length; n++) {
        const i = e[n];
        if (i && i !== ".") {
          if (i === "..") {
            if (t.length > 1) {
              if (t[t.length - 1] !== "..") {
                t.pop();
                continue;
              }
            } else if (t[0])
              continue;
          }
          t.push(i);
        }
      }
      return t;
    }
    function Mn(e, ...t) {
      e && (e = au(e));
      for (let n of t)
        n && (n = au(n), !e || Am(n) !== 0 ? e = n : e = dl(e) + n);
      return e;
    }
    function W0(e, ...t) {
      return Hs(ct(t) ? Mn(e, ...t) : au(e));
    }
    function xD(e, t) {
      return db(pl(e, t));
    }
    function Xi(e, t) {
      return V0(xD(e, t));
    }
    function Hs(e) {
      if (e = au(e), !k7.test(e))
        return e;
      const t = e.replace(/\/\.\//g, "/").replace(/^\.\//, "");
      if (t !== e && (e = t, !k7.test(e)))
        return e;
      const n = V0(db(pl(e)));
      return n && Hh(e) ? dl(n) : n;
    }
    function kFe(e) {
      return e.length === 0 ? "" : e.slice(1).join(Oo);
    }
    function EJ(e, t) {
      return kFe(xD(e, t));
    }
    function Fo(e, t, n) {
      const i = L_(e) ? Hs(e) : Xi(e, t);
      return n(i);
    }
    function p1(e) {
      return Hh(e) ? e.substr(0, e.length - 1) : e;
    }
    function dl(e) {
      return Hh(e) ? e : e + Oo;
    }
    function Iv(e) {
      return !q4(e) && !cf(e) ? "./" + e : e;
    }
    function kD(e, t, n, i) {
      const s = n !== void 0 && i !== void 0 ? Lk(e, n, i) : Lk(e);
      return s ? e.slice(0, e.length - s.length) + (Wi(t, ".") ? t : "." + t) : e;
    }
    function lee(e, t) {
      const n = GW(e);
      return n ? e.slice(0, e.length - n.length) + (Wi(t, ".") ? t : "." + t) : kD(e, t);
    }
    function uee(e, t, n) {
      if (e === t)
        return 0;
      if (e === void 0)
        return -1;
      if (t === void 0)
        return 1;
      const i = e.substring(0, Am(e)), s = t.substring(0, Am(t)), o = QI(i, s);
      if (o !== 0)
        return o;
      const c = e.substring(i.length), u = t.substring(s.length);
      if (!k7.test(c) && !k7.test(u))
        return n(c, u);
      const f = db(pl(e)), g = db(pl(t)), d = Math.min(f.length, g.length);
      for (let y = 1; y < d; y++) {
        const S = n(f[y], g[y]);
        if (S !== 0)
          return S;
      }
      return No(f.length, g.length);
    }
    function O0e(e, t) {
      return uee(e, t, hu);
    }
    function L0e(e, t) {
      return uee(e, t, QI);
    }
    function $g(e, t, n, i) {
      return typeof n == "string" ? (e = Mn(n, e), t = Mn(n, t)) : typeof n == "boolean" && (i = n), uee(e, t, Pk(i));
    }
    function Jp(e, t, n, i) {
      if (typeof n == "string" ? (e = Mn(n, e), t = Mn(n, t)) : typeof n == "boolean" && (i = n), e === void 0 || t === void 0)
        return !1;
      if (e === t)
        return !0;
      const s = db(pl(e)), o = db(pl(t));
      if (o.length < s.length)
        return !1;
      const c = i ? f1 : ub;
      for (let u = 0; u < s.length; u++)
        if (!(u === 0 ? f1 : c)(s[u], o[u]))
          return !1;
      return !0;
    }
    function PJ(e, t, n) {
      const i = n(e), s = n(t);
      return Wi(i, s + "/") || Wi(i, s + "\\");
    }
    function DJ(e, t, n, i) {
      const s = db(pl(e)), o = db(pl(t));
      let c;
      for (c = 0; c < s.length && c < o.length; c++) {
        const g = i(s[c]), d = i(o[c]);
        if (!(c === 0 ? f1 : n)(g, d))
          break;
      }
      if (c === 0)
        return o;
      const u = o.slice(c), f = [];
      for (; c < s.length; c++)
        f.push("..");
      return ["", ...f, ...u];
    }
    function zp(e, t, n) {
      E.assert(Am(e) > 0 == Am(t) > 0, "Paths must either both be absolute or both be relative");
      const o = DJ(e, t, (typeof n == "boolean" ? n : !1) ? f1 : ub, typeof n == "function" ? n : Ao);
      return V0(o);
    }
    function H4(e, t, n) {
      return L_(e) ? TT(
        t,
        e,
        t,
        n,
        /*isAbsolutePathAnUrl*/
        !1
      ) : e;
    }
    function CD(e, t, n) {
      return Iv(zp(Un(e), t, n));
    }
    function TT(e, t, n, i, s) {
      const o = DJ(
        W0(n, e),
        W0(n, t),
        ub,
        i
      ), c = o[0];
      if (s && L_(c)) {
        const u = c.charAt(0) === Oo ? "file://" : "file:///";
        o[0] = u + c;
      }
      return V0(o);
    }
    function Vp(e, t) {
      for (; ; ) {
        const n = t(e);
        if (n !== void 0)
          return n;
        const i = Un(e);
        if (i === e)
          return;
        e = i;
      }
    }
    function x7(e) {
      return Zo(e, "/node_modules");
    }
    var Oo, ED, _ee, M0e, k7, CFe = Pt({
      "src/compiler/path.ts"() {
        Fs(), Oo = "/", ED = "\\", _ee = "://", M0e = /\\/g, k7 = /(?:\/\/)|(?:^|\/)\.\.?(?:$|\/)/;
      }
    });
    function b(e, t, n, i, s, o, c) {
      return { code: e, category: t, key: n, message: i, reportsUnnecessary: s, elidedInCompatabilityPyramid: o, reportsDeprecated: c };
    }
    var p, EFe = Pt({
      "src/compiler/diagnosticInformationMap.generated.ts"() {
        C0e(), p = {
          Unterminated_string_literal: b(1002, 1, "Unterminated_string_literal_1002", "Unterminated string literal."),
          Identifier_expected: b(1003, 1, "Identifier_expected_1003", "Identifier expected."),
          _0_expected: b(1005, 1, "_0_expected_1005", "'{0}' expected."),
          A_file_cannot_have_a_reference_to_itself: b(1006, 1, "A_file_cannot_have_a_reference_to_itself_1006", "A file cannot have a reference to itself."),
          The_parser_expected_to_find_a_1_to_match_the_0_token_here: b(1007, 1, "The_parser_expected_to_find_a_1_to_match_the_0_token_here_1007", "The parser expected to find a '{1}' to match the '{0}' token here."),
          Trailing_comma_not_allowed: b(1009, 1, "Trailing_comma_not_allowed_1009", "Trailing comma not allowed."),
          Asterisk_Slash_expected: b(1010, 1, "Asterisk_Slash_expected_1010", "'*/' expected."),
          An_element_access_expression_should_take_an_argument: b(1011, 1, "An_element_access_expression_should_take_an_argument_1011", "An element access expression should take an argument."),
          Unexpected_token: b(1012, 1, "Unexpected_token_1012", "Unexpected token."),
          A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma: b(1013, 1, "A_rest_parameter_or_binding_pattern_may_not_have_a_trailing_comma_1013", "A rest parameter or binding pattern may not have a trailing comma."),
          A_rest_parameter_must_be_last_in_a_parameter_list: b(1014, 1, "A_rest_parameter_must_be_last_in_a_parameter_list_1014", "A rest parameter must be last in a parameter list."),
          Parameter_cannot_have_question_mark_and_initializer: b(1015, 1, "Parameter_cannot_have_question_mark_and_initializer_1015", "Parameter cannot have question mark and initializer."),
          A_required_parameter_cannot_follow_an_optional_parameter: b(1016, 1, "A_required_parameter_cannot_follow_an_optional_parameter_1016", "A required parameter cannot follow an optional parameter."),
          An_index_signature_cannot_have_a_rest_parameter: b(1017, 1, "An_index_signature_cannot_have_a_rest_parameter_1017", "An index signature cannot have a rest parameter."),
          An_index_signature_parameter_cannot_have_an_accessibility_modifier: b(1018, 1, "An_index_signature_parameter_cannot_have_an_accessibility_modifier_1018", "An index signature parameter cannot have an accessibility modifier."),
          An_index_signature_parameter_cannot_have_a_question_mark: b(1019, 1, "An_index_signature_parameter_cannot_have_a_question_mark_1019", "An index signature parameter cannot have a question mark."),
          An_index_signature_parameter_cannot_have_an_initializer: b(1020, 1, "An_index_signature_parameter_cannot_have_an_initializer_1020", "An index signature parameter cannot have an initializer."),
          An_index_signature_must_have_a_type_annotation: b(1021, 1, "An_index_signature_must_have_a_type_annotation_1021", "An index signature must have a type annotation."),
          An_index_signature_parameter_must_have_a_type_annotation: b(1022, 1, "An_index_signature_parameter_must_have_a_type_annotation_1022", "An index signature parameter must have a type annotation."),
          readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature: b(1024, 1, "readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature_1024", "'readonly' modifier can only appear on a property declaration or index signature."),
          An_index_signature_cannot_have_a_trailing_comma: b(1025, 1, "An_index_signature_cannot_have_a_trailing_comma_1025", "An index signature cannot have a trailing comma."),
          Accessibility_modifier_already_seen: b(1028, 1, "Accessibility_modifier_already_seen_1028", "Accessibility modifier already seen."),
          _0_modifier_must_precede_1_modifier: b(1029, 1, "_0_modifier_must_precede_1_modifier_1029", "'{0}' modifier must precede '{1}' modifier."),
          _0_modifier_already_seen: b(1030, 1, "_0_modifier_already_seen_1030", "'{0}' modifier already seen."),
          _0_modifier_cannot_appear_on_class_elements_of_this_kind: b(1031, 1, "_0_modifier_cannot_appear_on_class_elements_of_this_kind_1031", "'{0}' modifier cannot appear on class elements of this kind."),
          super_must_be_followed_by_an_argument_list_or_member_access: b(1034, 1, "super_must_be_followed_by_an_argument_list_or_member_access_1034", "'super' must be followed by an argument list or member access."),
          Only_ambient_modules_can_use_quoted_names: b(1035, 1, "Only_ambient_modules_can_use_quoted_names_1035", "Only ambient modules can use quoted names."),
          Statements_are_not_allowed_in_ambient_contexts: b(1036, 1, "Statements_are_not_allowed_in_ambient_contexts_1036", "Statements are not allowed in ambient contexts."),
          A_declare_modifier_cannot_be_used_in_an_already_ambient_context: b(1038, 1, "A_declare_modifier_cannot_be_used_in_an_already_ambient_context_1038", "A 'declare' modifier cannot be used in an already ambient context."),
          Initializers_are_not_allowed_in_ambient_contexts: b(1039, 1, "Initializers_are_not_allowed_in_ambient_contexts_1039", "Initializers are not allowed in ambient contexts."),
          _0_modifier_cannot_be_used_in_an_ambient_context: b(1040, 1, "_0_modifier_cannot_be_used_in_an_ambient_context_1040", "'{0}' modifier cannot be used in an ambient context."),
          _0_modifier_cannot_be_used_here: b(1042, 1, "_0_modifier_cannot_be_used_here_1042", "'{0}' modifier cannot be used here."),
          _0_modifier_cannot_appear_on_a_module_or_namespace_element: b(1044, 1, "_0_modifier_cannot_appear_on_a_module_or_namespace_element_1044", "'{0}' modifier cannot appear on a module or namespace element."),
          Top_level_declarations_in_d_ts_files_must_start_with_either_a_declare_or_export_modifier: b(1046, 1, "Top_level_declarations_in_d_ts_files_must_start_with_either_a_declare_or_export_modifier_1046", "Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier."),
          A_rest_parameter_cannot_be_optional: b(1047, 1, "A_rest_parameter_cannot_be_optional_1047", "A rest parameter cannot be optional."),
          A_rest_parameter_cannot_have_an_initializer: b(1048, 1, "A_rest_parameter_cannot_have_an_initializer_1048", "A rest parameter cannot have an initializer."),
          A_set_accessor_must_have_exactly_one_parameter: b(1049, 1, "A_set_accessor_must_have_exactly_one_parameter_1049", "A 'set' accessor must have exactly one parameter."),
          A_set_accessor_cannot_have_an_optional_parameter: b(1051, 1, "A_set_accessor_cannot_have_an_optional_parameter_1051", "A 'set' accessor cannot have an optional parameter."),
          A_set_accessor_parameter_cannot_have_an_initializer: b(1052, 1, "A_set_accessor_parameter_cannot_have_an_initializer_1052", "A 'set' accessor parameter cannot have an initializer."),
          A_set_accessor_cannot_have_rest_parameter: b(1053, 1, "A_set_accessor_cannot_have_rest_parameter_1053", "A 'set' accessor cannot have rest parameter."),
          A_get_accessor_cannot_have_parameters: b(1054, 1, "A_get_accessor_cannot_have_parameters_1054", "A 'get' accessor cannot have parameters."),
          Type_0_is_not_a_valid_async_function_return_type_in_ES5_SlashES3_because_it_does_not_refer_to_a_Promise_compatible_constructor_value: b(1055, 1, "Type_0_is_not_a_valid_async_function_return_type_in_ES5_SlashES3_because_it_does_not_refer_to_a_Prom_1055", "Type '{0}' is not a valid async function return type in ES5/ES3 because it does not refer to a Promise-compatible constructor value."),
          Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher: b(1056, 1, "Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher_1056", "Accessors are only available when targeting ECMAScript 5 and higher."),
          The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: b(1058, 1, "The_return_type_of_an_async_function_must_either_be_a_valid_promise_or_must_not_contain_a_callable_t_1058", "The return type of an async function must either be a valid promise or must not contain a callable 'then' member."),
          A_promise_must_have_a_then_method: b(1059, 1, "A_promise_must_have_a_then_method_1059", "A promise must have a 'then' method."),
          The_first_parameter_of_the_then_method_of_a_promise_must_be_a_callback: b(1060, 1, "The_first_parameter_of_the_then_method_of_a_promise_must_be_a_callback_1060", "The first parameter of the 'then' method of a promise must be a callback."),
          Enum_member_must_have_initializer: b(1061, 1, "Enum_member_must_have_initializer_1061", "Enum member must have initializer."),
          Type_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method: b(1062, 1, "Type_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method_1062", "Type is referenced directly or indirectly in the fulfillment callback of its own 'then' method."),
          An_export_assignment_cannot_be_used_in_a_namespace: b(1063, 1, "An_export_assignment_cannot_be_used_in_a_namespace_1063", "An export assignment cannot be used in a namespace."),
          The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type_Did_you_mean_to_write_Promise_0: b(1064, 1, "The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type_Did_you_mean_to_wri_1064", "The return type of an async function or method must be the global Promise<T> type. Did you mean to write 'Promise<{0}>'?"),
          The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type: b(1065, 1, "The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type_1065", "The return type of an async function or method must be the global Promise<T> type."),
          In_ambient_enum_declarations_member_initializer_must_be_constant_expression: b(1066, 1, "In_ambient_enum_declarations_member_initializer_must_be_constant_expression_1066", "In ambient enum declarations member initializer must be constant expression."),
          Unexpected_token_A_constructor_method_accessor_or_property_was_expected: b(1068, 1, "Unexpected_token_A_constructor_method_accessor_or_property_was_expected_1068", "Unexpected token. A constructor, method, accessor, or property was expected."),
          Unexpected_token_A_type_parameter_name_was_expected_without_curly_braces: b(1069, 1, "Unexpected_token_A_type_parameter_name_was_expected_without_curly_braces_1069", "Unexpected token. A type parameter name was expected without curly braces."),
          _0_modifier_cannot_appear_on_a_type_member: b(1070, 1, "_0_modifier_cannot_appear_on_a_type_member_1070", "'{0}' modifier cannot appear on a type member."),
          _0_modifier_cannot_appear_on_an_index_signature: b(1071, 1, "_0_modifier_cannot_appear_on_an_index_signature_1071", "'{0}' modifier cannot appear on an index signature."),
          A_0_modifier_cannot_be_used_with_an_import_declaration: b(1079, 1, "A_0_modifier_cannot_be_used_with_an_import_declaration_1079", "A '{0}' modifier cannot be used with an import declaration."),
          Invalid_reference_directive_syntax: b(1084, 1, "Invalid_reference_directive_syntax_1084", "Invalid 'reference' directive syntax."),
          _0_modifier_cannot_appear_on_a_constructor_declaration: b(1089, 1, "_0_modifier_cannot_appear_on_a_constructor_declaration_1089", "'{0}' modifier cannot appear on a constructor declaration."),
          _0_modifier_cannot_appear_on_a_parameter: b(1090, 1, "_0_modifier_cannot_appear_on_a_parameter_1090", "'{0}' modifier cannot appear on a parameter."),
          Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement: b(1091, 1, "Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement_1091", "Only a single variable declaration is allowed in a 'for...in' statement."),
          Type_parameters_cannot_appear_on_a_constructor_declaration: b(1092, 1, "Type_parameters_cannot_appear_on_a_constructor_declaration_1092", "Type parameters cannot appear on a constructor declaration."),
          Type_annotation_cannot_appear_on_a_constructor_declaration: b(1093, 1, "Type_annotation_cannot_appear_on_a_constructor_declaration_1093", "Type annotation cannot appear on a constructor declaration."),
          An_accessor_cannot_have_type_parameters: b(1094, 1, "An_accessor_cannot_have_type_parameters_1094", "An accessor cannot have type parameters."),
          A_set_accessor_cannot_have_a_return_type_annotation: b(1095, 1, "A_set_accessor_cannot_have_a_return_type_annotation_1095", "A 'set' accessor cannot have a return type annotation."),
          An_index_signature_must_have_exactly_one_parameter: b(1096, 1, "An_index_signature_must_have_exactly_one_parameter_1096", "An index signature must have exactly one parameter."),
          _0_list_cannot_be_empty: b(1097, 1, "_0_list_cannot_be_empty_1097", "'{0}' list cannot be empty."),
          Type_parameter_list_cannot_be_empty: b(1098, 1, "Type_parameter_list_cannot_be_empty_1098", "Type parameter list cannot be empty."),
          Type_argument_list_cannot_be_empty: b(1099, 1, "Type_argument_list_cannot_be_empty_1099", "Type argument list cannot be empty."),
          Invalid_use_of_0_in_strict_mode: b(1100, 1, "Invalid_use_of_0_in_strict_mode_1100", "Invalid use of '{0}' in strict mode."),
          with_statements_are_not_allowed_in_strict_mode: b(1101, 1, "with_statements_are_not_allowed_in_strict_mode_1101", "'with' statements are not allowed in strict mode."),
          delete_cannot_be_called_on_an_identifier_in_strict_mode: b(1102, 1, "delete_cannot_be_called_on_an_identifier_in_strict_mode_1102", "'delete' cannot be called on an identifier in strict mode."),
          for_await_loops_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules: b(1103, 1, "for_await_loops_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules_1103", "'for await' loops are only allowed within async functions and at the top levels of modules."),
          A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement: b(1104, 1, "A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement_1104", "A 'continue' statement can only be used within an enclosing iteration statement."),
          A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement: b(1105, 1, "A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement_1105", "A 'break' statement can only be used within an enclosing iteration or switch statement."),
          The_left_hand_side_of_a_for_of_statement_may_not_be_async: b(1106, 1, "The_left_hand_side_of_a_for_of_statement_may_not_be_async_1106", "The left-hand side of a 'for...of' statement may not be 'async'."),
          Jump_target_cannot_cross_function_boundary: b(1107, 1, "Jump_target_cannot_cross_function_boundary_1107", "Jump target cannot cross function boundary."),
          A_return_statement_can_only_be_used_within_a_function_body: b(1108, 1, "A_return_statement_can_only_be_used_within_a_function_body_1108", "A 'return' statement can only be used within a function body."),
          Expression_expected: b(1109, 1, "Expression_expected_1109", "Expression expected."),
          Type_expected: b(1110, 1, "Type_expected_1110", "Type expected."),
          Private_field_0_must_be_declared_in_an_enclosing_class: b(1111, 1, "Private_field_0_must_be_declared_in_an_enclosing_class_1111", "Private field '{0}' must be declared in an enclosing class."),
          A_default_clause_cannot_appear_more_than_once_in_a_switch_statement: b(1113, 1, "A_default_clause_cannot_appear_more_than_once_in_a_switch_statement_1113", "A 'default' clause cannot appear more than once in a 'switch' statement."),
          Duplicate_label_0: b(1114, 1, "Duplicate_label_0_1114", "Duplicate label '{0}'."),
          A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement: b(1115, 1, "A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement_1115", "A 'continue' statement can only jump to a label of an enclosing iteration statement."),
          A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement: b(1116, 1, "A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement_1116", "A 'break' statement can only jump to a label of an enclosing statement."),
          An_object_literal_cannot_have_multiple_properties_with_the_same_name: b(1117, 1, "An_object_literal_cannot_have_multiple_properties_with_the_same_name_1117", "An object literal cannot have multiple properties with the same name."),
          An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name: b(1118, 1, "An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name_1118", "An object literal cannot have multiple get/set accessors with the same name."),
          An_object_literal_cannot_have_property_and_accessor_with_the_same_name: b(1119, 1, "An_object_literal_cannot_have_property_and_accessor_with_the_same_name_1119", "An object literal cannot have property and accessor with the same name."),
          An_export_assignment_cannot_have_modifiers: b(1120, 1, "An_export_assignment_cannot_have_modifiers_1120", "An export assignment cannot have modifiers."),
          Octal_literals_are_not_allowed_Use_the_syntax_0: b(1121, 1, "Octal_literals_are_not_allowed_Use_the_syntax_0_1121", "Octal literals are not allowed. Use the syntax '{0}'."),
          Variable_declaration_list_cannot_be_empty: b(1123, 1, "Variable_declaration_list_cannot_be_empty_1123", "Variable declaration list cannot be empty."),
          Digit_expected: b(1124, 1, "Digit_expected_1124", "Digit expected."),
          Hexadecimal_digit_expected: b(1125, 1, "Hexadecimal_digit_expected_1125", "Hexadecimal digit expected."),
          Unexpected_end_of_text: b(1126, 1, "Unexpected_end_of_text_1126", "Unexpected end of text."),
          Invalid_character: b(1127, 1, "Invalid_character_1127", "Invalid character."),
          Declaration_or_statement_expected: b(1128, 1, "Declaration_or_statement_expected_1128", "Declaration or statement expected."),
          Statement_expected: b(1129, 1, "Statement_expected_1129", "Statement expected."),
          case_or_default_expected: b(1130, 1, "case_or_default_expected_1130", "'case' or 'default' expected."),
          Property_or_signature_expected: b(1131, 1, "Property_or_signature_expected_1131", "Property or signature expected."),
          Enum_member_expected: b(1132, 1, "Enum_member_expected_1132", "Enum member expected."),
          Variable_declaration_expected: b(1134, 1, "Variable_declaration_expected_1134", "Variable declaration expected."),
          Argument_expression_expected: b(1135, 1, "Argument_expression_expected_1135", "Argument expression expected."),
          Property_assignment_expected: b(1136, 1, "Property_assignment_expected_1136", "Property assignment expected."),
          Expression_or_comma_expected: b(1137, 1, "Expression_or_comma_expected_1137", "Expression or comma expected."),
          Parameter_declaration_expected: b(1138, 1, "Parameter_declaration_expected_1138", "Parameter declaration expected."),
          Type_parameter_declaration_expected: b(1139, 1, "Type_parameter_declaration_expected_1139", "Type parameter declaration expected."),
          Type_argument_expected: b(1140, 1, "Type_argument_expected_1140", "Type argument expected."),
          String_literal_expected: b(1141, 1, "String_literal_expected_1141", "String literal expected."),
          Line_break_not_permitted_here: b(1142, 1, "Line_break_not_permitted_here_1142", "Line break not permitted here."),
          or_expected: b(1144, 1, "or_expected_1144", "'{' or ';' expected."),
          or_JSX_element_expected: b(1145, 1, "or_JSX_element_expected_1145", "'{' or JSX element expected."),
          Declaration_expected: b(1146, 1, "Declaration_expected_1146", "Declaration expected."),
          Import_declarations_in_a_namespace_cannot_reference_a_module: b(1147, 1, "Import_declarations_in_a_namespace_cannot_reference_a_module_1147", "Import declarations in a namespace cannot reference a module."),
          Cannot_use_imports_exports_or_module_augmentations_when_module_is_none: b(1148, 1, "Cannot_use_imports_exports_or_module_augmentations_when_module_is_none_1148", "Cannot use imports, exports, or module augmentations when '--module' is 'none'."),
          File_name_0_differs_from_already_included_file_name_1_only_in_casing: b(1149, 1, "File_name_0_differs_from_already_included_file_name_1_only_in_casing_1149", "File name '{0}' differs from already included file name '{1}' only in casing."),
          _0_declarations_must_be_initialized: b(1155, 1, "_0_declarations_must_be_initialized_1155", "'{0}' declarations must be initialized."),
          _0_declarations_can_only_be_declared_inside_a_block: b(1156, 1, "_0_declarations_can_only_be_declared_inside_a_block_1156", "'{0}' declarations can only be declared inside a block."),
          Unterminated_template_literal: b(1160, 1, "Unterminated_template_literal_1160", "Unterminated template literal."),
          Unterminated_regular_expression_literal: b(1161, 1, "Unterminated_regular_expression_literal_1161", "Unterminated regular expression literal."),
          An_object_member_cannot_be_declared_optional: b(1162, 1, "An_object_member_cannot_be_declared_optional_1162", "An object member cannot be declared optional."),
          A_yield_expression_is_only_allowed_in_a_generator_body: b(1163, 1, "A_yield_expression_is_only_allowed_in_a_generator_body_1163", "A 'yield' expression is only allowed in a generator body."),
          Computed_property_names_are_not_allowed_in_enums: b(1164, 1, "Computed_property_names_are_not_allowed_in_enums_1164", "Computed property names are not allowed in enums."),
          A_computed_property_name_in_an_ambient_context_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: b(1165, 1, "A_computed_property_name_in_an_ambient_context_must_refer_to_an_expression_whose_type_is_a_literal_t_1165", "A computed property name in an ambient context must refer to an expression whose type is a literal type or a 'unique symbol' type."),
          A_computed_property_name_in_a_class_property_declaration_must_have_a_simple_literal_type_or_a_unique_symbol_type: b(1166, 1, "A_computed_property_name_in_a_class_property_declaration_must_have_a_simple_literal_type_or_a_unique_1166", "A computed property name in a class property declaration must have a simple literal type or a 'unique symbol' type."),
          A_computed_property_name_in_a_method_overload_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: b(1168, 1, "A_computed_property_name_in_a_method_overload_must_refer_to_an_expression_whose_type_is_a_literal_ty_1168", "A computed property name in a method overload must refer to an expression whose type is a literal type or a 'unique symbol' type."),
          A_computed_property_name_in_an_interface_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: b(1169, 1, "A_computed_property_name_in_an_interface_must_refer_to_an_expression_whose_type_is_a_literal_type_or_1169", "A computed property name in an interface must refer to an expression whose type is a literal type or a 'unique symbol' type."),
          A_computed_property_name_in_a_type_literal_must_refer_to_an_expression_whose_type_is_a_literal_type_or_a_unique_symbol_type: b(1170, 1, "A_computed_property_name_in_a_type_literal_must_refer_to_an_expression_whose_type_is_a_literal_type__1170", "A computed property name in a type literal must refer to an expression whose type is a literal type or a 'unique symbol' type."),
          A_comma_expression_is_not_allowed_in_a_computed_property_name: b(1171, 1, "A_comma_expression_is_not_allowed_in_a_computed_property_name_1171", "A comma expression is not allowed in a computed property name."),
          extends_clause_already_seen: b(1172, 1, "extends_clause_already_seen_1172", "'extends' clause already seen."),
          extends_clause_must_precede_implements_clause: b(1173, 1, "extends_clause_must_precede_implements_clause_1173", "'extends' clause must precede 'implements' clause."),
          Classes_can_only_extend_a_single_class: b(1174, 1, "Classes_can_only_extend_a_single_class_1174", "Classes can only extend a single class."),
          implements_clause_already_seen: b(1175, 1, "implements_clause_already_seen_1175", "'implements' clause already seen."),
          Interface_declaration_cannot_have_implements_clause: b(1176, 1, "Interface_declaration_cannot_have_implements_clause_1176", "Interface declaration cannot have 'implements' clause."),
          Binary_digit_expected: b(1177, 1, "Binary_digit_expected_1177", "Binary digit expected."),
          Octal_digit_expected: b(1178, 1, "Octal_digit_expected_1178", "Octal digit expected."),
          Unexpected_token_expected: b(1179, 1, "Unexpected_token_expected_1179", "Unexpected token. '{' expected."),
          Property_destructuring_pattern_expected: b(1180, 1, "Property_destructuring_pattern_expected_1180", "Property destructuring pattern expected."),
          Array_element_destructuring_pattern_expected: b(1181, 1, "Array_element_destructuring_pattern_expected_1181", "Array element destructuring pattern expected."),
          A_destructuring_declaration_must_have_an_initializer: b(1182, 1, "A_destructuring_declaration_must_have_an_initializer_1182", "A destructuring declaration must have an initializer."),
          An_implementation_cannot_be_declared_in_ambient_contexts: b(1183, 1, "An_implementation_cannot_be_declared_in_ambient_contexts_1183", "An implementation cannot be declared in ambient contexts."),
          Modifiers_cannot_appear_here: b(1184, 1, "Modifiers_cannot_appear_here_1184", "Modifiers cannot appear here."),
          Merge_conflict_marker_encountered: b(1185, 1, "Merge_conflict_marker_encountered_1185", "Merge conflict marker encountered."),
          A_rest_element_cannot_have_an_initializer: b(1186, 1, "A_rest_element_cannot_have_an_initializer_1186", "A rest element cannot have an initializer."),
          A_parameter_property_may_not_be_declared_using_a_binding_pattern: b(1187, 1, "A_parameter_property_may_not_be_declared_using_a_binding_pattern_1187", "A parameter property may not be declared using a binding pattern."),
          Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement: b(1188, 1, "Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement_1188", "Only a single variable declaration is allowed in a 'for...of' statement."),
          The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer: b(1189, 1, "The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer_1189", "The variable declaration of a 'for...in' statement cannot have an initializer."),
          The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer: b(1190, 1, "The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer_1190", "The variable declaration of a 'for...of' statement cannot have an initializer."),
          An_import_declaration_cannot_have_modifiers: b(1191, 1, "An_import_declaration_cannot_have_modifiers_1191", "An import declaration cannot have modifiers."),
          Module_0_has_no_default_export: b(1192, 1, "Module_0_has_no_default_export_1192", "Module '{0}' has no default export."),
          An_export_declaration_cannot_have_modifiers: b(1193, 1, "An_export_declaration_cannot_have_modifiers_1193", "An export declaration cannot have modifiers."),
          Export_declarations_are_not_permitted_in_a_namespace: b(1194, 1, "Export_declarations_are_not_permitted_in_a_namespace_1194", "Export declarations are not permitted in a namespace."),
          export_Asterisk_does_not_re_export_a_default: b(1195, 1, "export_Asterisk_does_not_re_export_a_default_1195", "'export *' does not re-export a default."),
          Catch_clause_variable_type_annotation_must_be_any_or_unknown_if_specified: b(1196, 1, "Catch_clause_variable_type_annotation_must_be_any_or_unknown_if_specified_1196", "Catch clause variable type annotation must be 'any' or 'unknown' if specified."),
          Catch_clause_variable_cannot_have_an_initializer: b(1197, 1, "Catch_clause_variable_cannot_have_an_initializer_1197", "Catch clause variable cannot have an initializer."),
          An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive: b(1198, 1, "An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive_1198", "An extended Unicode escape value must be between 0x0 and 0x10FFFF inclusive."),
          Unterminated_Unicode_escape_sequence: b(1199, 1, "Unterminated_Unicode_escape_sequence_1199", "Unterminated Unicode escape sequence."),
          Line_terminator_not_permitted_before_arrow: b(1200, 1, "Line_terminator_not_permitted_before_arrow_1200", "Line terminator not permitted before arrow."),
          Import_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_import_d_from_mod_or_another_module_format_instead: b(1202, 1, "Import_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_import_Asterisk_as_1202", `Import assignment cannot be used when targeting ECMAScript modules. Consider using 'import * as ns from "mod"', 'import {a} from "mod"', 'import d from "mod"', or another module format instead.`),
          Export_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_export_default_or_another_module_format_instead: b(1203, 1, "Export_assignment_cannot_be_used_when_targeting_ECMAScript_modules_Consider_using_export_default_or__1203", "Export assignment cannot be used when targeting ECMAScript modules. Consider using 'export default' or another module format instead."),
          Re_exporting_a_type_when_0_is_enabled_requires_using_export_type: b(1205, 1, "Re_exporting_a_type_when_0_is_enabled_requires_using_export_type_1205", "Re-exporting a type when '{0}' is enabled requires using 'export type'."),
          Decorators_are_not_valid_here: b(1206, 1, "Decorators_are_not_valid_here_1206", "Decorators are not valid here."),
          Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name: b(1207, 1, "Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name_1207", "Decorators cannot be applied to multiple get/set accessors of the same name."),
          Invalid_optional_chain_from_new_expression_Did_you_mean_to_call_0: b(1209, 1, "Invalid_optional_chain_from_new_expression_Did_you_mean_to_call_0_1209", "Invalid optional chain from new expression. Did you mean to call '{0}()'?"),
          Code_contained_in_a_class_is_evaluated_in_JavaScript_s_strict_mode_which_does_not_allow_this_use_of_0_For_more_information_see_https_Colon_Slash_Slashdeveloper_mozilla_org_Slashen_US_Slashdocs_SlashWeb_SlashJavaScript_SlashReference_SlashStrict_mode: b(1210, 1, "Code_contained_in_a_class_is_evaluated_in_JavaScript_s_strict_mode_which_does_not_allow_this_use_of__1210", "Code contained in a class is evaluated in JavaScript's strict mode which does not allow this use of '{0}'. For more information, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode."),
          A_class_declaration_without_the_default_modifier_must_have_a_name: b(1211, 1, "A_class_declaration_without_the_default_modifier_must_have_a_name_1211", "A class declaration without the 'default' modifier must have a name."),
          Identifier_expected_0_is_a_reserved_word_in_strict_mode: b(1212, 1, "Identifier_expected_0_is_a_reserved_word_in_strict_mode_1212", "Identifier expected. '{0}' is a reserved word in strict mode."),
          Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode: b(1213, 1, "Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_stric_1213", "Identifier expected. '{0}' is a reserved word in strict mode. Class definitions are automatically in strict mode."),
          Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode: b(1214, 1, "Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode_1214", "Identifier expected. '{0}' is a reserved word in strict mode. Modules are automatically in strict mode."),
          Invalid_use_of_0_Modules_are_automatically_in_strict_mode: b(1215, 1, "Invalid_use_of_0_Modules_are_automatically_in_strict_mode_1215", "Invalid use of '{0}'. Modules are automatically in strict mode."),
          Identifier_expected_esModule_is_reserved_as_an_exported_marker_when_transforming_ECMAScript_modules: b(1216, 1, "Identifier_expected_esModule_is_reserved_as_an_exported_marker_when_transforming_ECMAScript_modules_1216", "Identifier expected. '__esModule' is reserved as an exported marker when transforming ECMAScript modules."),
          Export_assignment_is_not_supported_when_module_flag_is_system: b(1218, 1, "Export_assignment_is_not_supported_when_module_flag_is_system_1218", "Export assignment is not supported when '--module' flag is 'system'."),
          Generators_are_not_allowed_in_an_ambient_context: b(1221, 1, "Generators_are_not_allowed_in_an_ambient_context_1221", "Generators are not allowed in an ambient context."),
          An_overload_signature_cannot_be_declared_as_a_generator: b(1222, 1, "An_overload_signature_cannot_be_declared_as_a_generator_1222", "An overload signature cannot be declared as a generator."),
          _0_tag_already_specified: b(1223, 1, "_0_tag_already_specified_1223", "'{0}' tag already specified."),
          Signature_0_must_be_a_type_predicate: b(1224, 1, "Signature_0_must_be_a_type_predicate_1224", "Signature '{0}' must be a type predicate."),
          Cannot_find_parameter_0: b(1225, 1, "Cannot_find_parameter_0_1225", "Cannot find parameter '{0}'."),
          Type_predicate_0_is_not_assignable_to_1: b(1226, 1, "Type_predicate_0_is_not_assignable_to_1_1226", "Type predicate '{0}' is not assignable to '{1}'."),
          Parameter_0_is_not_in_the_same_position_as_parameter_1: b(1227, 1, "Parameter_0_is_not_in_the_same_position_as_parameter_1_1227", "Parameter '{0}' is not in the same position as parameter '{1}'."),
          A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods: b(1228, 1, "A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods_1228", "A type predicate is only allowed in return type position for functions and methods."),
          A_type_predicate_cannot_reference_a_rest_parameter: b(1229, 1, "A_type_predicate_cannot_reference_a_rest_parameter_1229", "A type predicate cannot reference a rest parameter."),
          A_type_predicate_cannot_reference_element_0_in_a_binding_pattern: b(1230, 1, "A_type_predicate_cannot_reference_element_0_in_a_binding_pattern_1230", "A type predicate cannot reference element '{0}' in a binding pattern."),
          An_export_assignment_must_be_at_the_top_level_of_a_file_or_module_declaration: b(1231, 1, "An_export_assignment_must_be_at_the_top_level_of_a_file_or_module_declaration_1231", "An export assignment must be at the top level of a file or module declaration."),
          An_import_declaration_can_only_be_used_at_the_top_level_of_a_namespace_or_module: b(1232, 1, "An_import_declaration_can_only_be_used_at_the_top_level_of_a_namespace_or_module_1232", "An import declaration can only be used at the top level of a namespace or module."),
          An_export_declaration_can_only_be_used_at_the_top_level_of_a_namespace_or_module: b(1233, 1, "An_export_declaration_can_only_be_used_at_the_top_level_of_a_namespace_or_module_1233", "An export declaration can only be used at the top level of a namespace or module."),
          An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file: b(1234, 1, "An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file_1234", "An ambient module declaration is only allowed at the top level in a file."),
          A_namespace_declaration_is_only_allowed_at_the_top_level_of_a_namespace_or_module: b(1235, 1, "A_namespace_declaration_is_only_allowed_at_the_top_level_of_a_namespace_or_module_1235", "A namespace declaration is only allowed at the top level of a namespace or module."),
          The_return_type_of_a_property_decorator_function_must_be_either_void_or_any: b(1236, 1, "The_return_type_of_a_property_decorator_function_must_be_either_void_or_any_1236", "The return type of a property decorator function must be either 'void' or 'any'."),
          The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any: b(1237, 1, "The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any_1237", "The return type of a parameter decorator function must be either 'void' or 'any'."),
          Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression: b(1238, 1, "Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression_1238", "Unable to resolve signature of class decorator when called as an expression."),
          Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression: b(1239, 1, "Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression_1239", "Unable to resolve signature of parameter decorator when called as an expression."),
          Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression: b(1240, 1, "Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression_1240", "Unable to resolve signature of property decorator when called as an expression."),
          Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression: b(1241, 1, "Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression_1241", "Unable to resolve signature of method decorator when called as an expression."),
          abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration: b(1242, 1, "abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration_1242", "'abstract' modifier can only appear on a class, method, or property declaration."),
          _0_modifier_cannot_be_used_with_1_modifier: b(1243, 1, "_0_modifier_cannot_be_used_with_1_modifier_1243", "'{0}' modifier cannot be used with '{1}' modifier."),
          Abstract_methods_can_only_appear_within_an_abstract_class: b(1244, 1, "Abstract_methods_can_only_appear_within_an_abstract_class_1244", "Abstract methods can only appear within an abstract class."),
          Method_0_cannot_have_an_implementation_because_it_is_marked_abstract: b(1245, 1, "Method_0_cannot_have_an_implementation_because_it_is_marked_abstract_1245", "Method '{0}' cannot have an implementation because it is marked abstract."),
          An_interface_property_cannot_have_an_initializer: b(1246, 1, "An_interface_property_cannot_have_an_initializer_1246", "An interface property cannot have an initializer."),
          A_type_literal_property_cannot_have_an_initializer: b(1247, 1, "A_type_literal_property_cannot_have_an_initializer_1247", "A type literal property cannot have an initializer."),
          A_class_member_cannot_have_the_0_keyword: b(1248, 1, "A_class_member_cannot_have_the_0_keyword_1248", "A class member cannot have the '{0}' keyword."),
          A_decorator_can_only_decorate_a_method_implementation_not_an_overload: b(1249, 1, "A_decorator_can_only_decorate_a_method_implementation_not_an_overload_1249", "A decorator can only decorate a method implementation, not an overload."),
          Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5: b(1250, 1, "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_1250", "Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'."),
          Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_definitions_are_automatically_in_strict_mode: b(1251, 1, "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_d_1251", "Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'. Class definitions are automatically in strict mode."),
          Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_are_automatically_in_strict_mode: b(1252, 1, "Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_1252", "Function declarations are not allowed inside blocks in strict mode when targeting 'ES3' or 'ES5'. Modules are automatically in strict mode."),
          Abstract_properties_can_only_appear_within_an_abstract_class: b(1253, 1, "Abstract_properties_can_only_appear_within_an_abstract_class_1253", "Abstract properties can only appear within an abstract class."),
          A_const_initializer_in_an_ambient_context_must_be_a_string_or_numeric_literal_or_literal_enum_reference: b(1254, 1, "A_const_initializer_in_an_ambient_context_must_be_a_string_or_numeric_literal_or_literal_enum_refere_1254", "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference."),
          A_definite_assignment_assertion_is_not_permitted_in_this_context: b(1255, 1, "A_definite_assignment_assertion_is_not_permitted_in_this_context_1255", "A definite assignment assertion '!' is not permitted in this context."),
          A_required_element_cannot_follow_an_optional_element: b(1257, 1, "A_required_element_cannot_follow_an_optional_element_1257", "A required element cannot follow an optional element."),
          A_default_export_must_be_at_the_top_level_of_a_file_or_module_declaration: b(1258, 1, "A_default_export_must_be_at_the_top_level_of_a_file_or_module_declaration_1258", "A default export must be at the top level of a file or module declaration."),
          Module_0_can_only_be_default_imported_using_the_1_flag: b(1259, 1, "Module_0_can_only_be_default_imported_using_the_1_flag_1259", "Module '{0}' can only be default-imported using the '{1}' flag"),
          Keywords_cannot_contain_escape_characters: b(1260, 1, "Keywords_cannot_contain_escape_characters_1260", "Keywords cannot contain escape characters."),
          Already_included_file_name_0_differs_from_file_name_1_only_in_casing: b(1261, 1, "Already_included_file_name_0_differs_from_file_name_1_only_in_casing_1261", "Already included file name '{0}' differs from file name '{1}' only in casing."),
          Identifier_expected_0_is_a_reserved_word_at_the_top_level_of_a_module: b(1262, 1, "Identifier_expected_0_is_a_reserved_word_at_the_top_level_of_a_module_1262", "Identifier expected. '{0}' is a reserved word at the top-level of a module."),
          Declarations_with_initializers_cannot_also_have_definite_assignment_assertions: b(1263, 1, "Declarations_with_initializers_cannot_also_have_definite_assignment_assertions_1263", "Declarations with initializers cannot also have definite assignment assertions."),
          Declarations_with_definite_assignment_assertions_must_also_have_type_annotations: b(1264, 1, "Declarations_with_definite_assignment_assertions_must_also_have_type_annotations_1264", "Declarations with definite assignment assertions must also have type annotations."),
          A_rest_element_cannot_follow_another_rest_element: b(1265, 1, "A_rest_element_cannot_follow_another_rest_element_1265", "A rest element cannot follow another rest element."),
          An_optional_element_cannot_follow_a_rest_element: b(1266, 1, "An_optional_element_cannot_follow_a_rest_element_1266", "An optional element cannot follow a rest element."),
          Property_0_cannot_have_an_initializer_because_it_is_marked_abstract: b(1267, 1, "Property_0_cannot_have_an_initializer_because_it_is_marked_abstract_1267", "Property '{0}' cannot have an initializer because it is marked abstract."),
          An_index_signature_parameter_type_must_be_string_number_symbol_or_a_template_literal_type: b(1268, 1, "An_index_signature_parameter_type_must_be_string_number_symbol_or_a_template_literal_type_1268", "An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type."),
          Cannot_use_export_import_on_a_type_or_type_only_namespace_when_0_is_enabled: b(1269, 1, "Cannot_use_export_import_on_a_type_or_type_only_namespace_when_0_is_enabled_1269", "Cannot use 'export import' on a type or type-only namespace when '{0}' is enabled."),
          Decorator_function_return_type_0_is_not_assignable_to_type_1: b(1270, 1, "Decorator_function_return_type_0_is_not_assignable_to_type_1_1270", "Decorator function return type '{0}' is not assignable to type '{1}'."),
          Decorator_function_return_type_is_0_but_is_expected_to_be_void_or_any: b(1271, 1, "Decorator_function_return_type_is_0_but_is_expected_to_be_void_or_any_1271", "Decorator function return type is '{0}' but is expected to be 'void' or 'any'."),
          A_type_referenced_in_a_decorated_signature_must_be_imported_with_import_type_or_a_namespace_import_when_isolatedModules_and_emitDecoratorMetadata_are_enabled: b(1272, 1, "A_type_referenced_in_a_decorated_signature_must_be_imported_with_import_type_or_a_namespace_import_w_1272", "A type referenced in a decorated signature must be imported with 'import type' or a namespace import when 'isolatedModules' and 'emitDecoratorMetadata' are enabled."),
          _0_modifier_cannot_appear_on_a_type_parameter: b(1273, 1, "_0_modifier_cannot_appear_on_a_type_parameter_1273", "'{0}' modifier cannot appear on a type parameter"),
          _0_modifier_can_only_appear_on_a_type_parameter_of_a_class_interface_or_type_alias: b(1274, 1, "_0_modifier_can_only_appear_on_a_type_parameter_of_a_class_interface_or_type_alias_1274", "'{0}' modifier can only appear on a type parameter of a class, interface or type alias"),
          accessor_modifier_can_only_appear_on_a_property_declaration: b(1275, 1, "accessor_modifier_can_only_appear_on_a_property_declaration_1275", "'accessor' modifier can only appear on a property declaration."),
          An_accessor_property_cannot_be_declared_optional: b(1276, 1, "An_accessor_property_cannot_be_declared_optional_1276", "An 'accessor' property cannot be declared optional."),
          _0_modifier_can_only_appear_on_a_type_parameter_of_a_function_method_or_class: b(1277, 1, "_0_modifier_can_only_appear_on_a_type_parameter_of_a_function_method_or_class_1277", "'{0}' modifier can only appear on a type parameter of a function, method or class"),
          The_runtime_will_invoke_the_decorator_with_1_arguments_but_the_decorator_expects_0: b(1278, 1, "The_runtime_will_invoke_the_decorator_with_1_arguments_but_the_decorator_expects_0_1278", "The runtime will invoke the decorator with {1} arguments, but the decorator expects {0}."),
          The_runtime_will_invoke_the_decorator_with_1_arguments_but_the_decorator_expects_at_least_0: b(1279, 1, "The_runtime_will_invoke_the_decorator_with_1_arguments_but_the_decorator_expects_at_least_0_1279", "The runtime will invoke the decorator with {1} arguments, but the decorator expects at least {0}."),
          Namespaces_are_not_allowed_in_global_script_files_when_0_is_enabled_If_this_file_is_not_intended_to_be_a_global_script_set_moduleDetection_to_force_or_add_an_empty_export_statement: b(1280, 1, "Namespaces_are_not_allowed_in_global_script_files_when_0_is_enabled_If_this_file_is_not_intended_to__1280", "Namespaces are not allowed in global script files when '{0}' is enabled. If this file is not intended to be a global script, set 'moduleDetection' to 'force' or add an empty 'export {}' statement."),
          Cannot_access_0_from_another_file_without_qualification_when_1_is_enabled_Use_2_instead: b(1281, 1, "Cannot_access_0_from_another_file_without_qualification_when_1_is_enabled_Use_2_instead_1281", "Cannot access '{0}' from another file without qualification when '{1}' is enabled. Use '{2}' instead."),
          An_export_declaration_must_reference_a_value_when_verbatimModuleSyntax_is_enabled_but_0_only_refers_to_a_type: b(1282, 1, "An_export_declaration_must_reference_a_value_when_verbatimModuleSyntax_is_enabled_but_0_only_refers__1282", "An 'export =' declaration must reference a value when 'verbatimModuleSyntax' is enabled, but '{0}' only refers to a type."),
          An_export_declaration_must_reference_a_real_value_when_verbatimModuleSyntax_is_enabled_but_0_resolves_to_a_type_only_declaration: b(1283, 1, "An_export_declaration_must_reference_a_real_value_when_verbatimModuleSyntax_is_enabled_but_0_resolve_1283", "An 'export =' declaration must reference a real value when 'verbatimModuleSyntax' is enabled, but '{0}' resolves to a type-only declaration."),
          An_export_default_must_reference_a_value_when_verbatimModuleSyntax_is_enabled_but_0_only_refers_to_a_type: b(1284, 1, "An_export_default_must_reference_a_value_when_verbatimModuleSyntax_is_enabled_but_0_only_refers_to_a_1284", "An 'export default' must reference a value when 'verbatimModuleSyntax' is enabled, but '{0}' only refers to a type."),
          An_export_default_must_reference_a_real_value_when_verbatimModuleSyntax_is_enabled_but_0_resolves_to_a_type_only_declaration: b(1285, 1, "An_export_default_must_reference_a_real_value_when_verbatimModuleSyntax_is_enabled_but_0_resolves_to_1285", "An 'export default' must reference a real value when 'verbatimModuleSyntax' is enabled, but '{0}' resolves to a type-only declaration."),
          ESM_syntax_is_not_allowed_in_a_CommonJS_module_when_verbatimModuleSyntax_is_enabled: b(1286, 1, "ESM_syntax_is_not_allowed_in_a_CommonJS_module_when_verbatimModuleSyntax_is_enabled_1286", "ESM syntax is not allowed in a CommonJS module when 'verbatimModuleSyntax' is enabled."),
          A_top_level_export_modifier_cannot_be_used_on_value_declarations_in_a_CommonJS_module_when_verbatimModuleSyntax_is_enabled: b(1287, 1, "A_top_level_export_modifier_cannot_be_used_on_value_declarations_in_a_CommonJS_module_when_verbatimM_1287", "A top-level 'export' modifier cannot be used on value declarations in a CommonJS module when 'verbatimModuleSyntax' is enabled."),
          An_import_alias_cannot_resolve_to_a_type_or_type_only_declaration_when_verbatimModuleSyntax_is_enabled: b(1288, 1, "An_import_alias_cannot_resolve_to_a_type_or_type_only_declaration_when_verbatimModuleSyntax_is_enabl_1288", "An import alias cannot resolve to a type or type-only declaration when 'verbatimModuleSyntax' is enabled."),
          _0_resolves_to_a_type_only_declaration_and_must_be_marked_type_only_in_this_file_before_re_exporting_when_1_is_enabled_Consider_using_import_type_where_0_is_imported: b(1289, 1, "_0_resolves_to_a_type_only_declaration_and_must_be_marked_type_only_in_this_file_before_re_exporting_1289", "'{0}' resolves to a type-only declaration and must be marked type-only in this file before re-exporting when '{1}' is enabled. Consider using 'import type' where '{0}' is imported."),
          _0_resolves_to_a_type_only_declaration_and_must_be_marked_type_only_in_this_file_before_re_exporting_when_1_is_enabled_Consider_using_export_type_0_as_default: b(1290, 1, "_0_resolves_to_a_type_only_declaration_and_must_be_marked_type_only_in_this_file_before_re_exporting_1290", "'{0}' resolves to a type-only declaration and must be marked type-only in this file before re-exporting when '{1}' is enabled. Consider using 'export type { {0} as default }'."),
          _0_resolves_to_a_type_and_must_be_marked_type_only_in_this_file_before_re_exporting_when_1_is_enabled_Consider_using_import_type_where_0_is_imported: b(1291, 1, "_0_resolves_to_a_type_and_must_be_marked_type_only_in_this_file_before_re_exporting_when_1_is_enable_1291", "'{0}' resolves to a type and must be marked type-only in this file before re-exporting when '{1}' is enabled. Consider using 'import type' where '{0}' is imported."),
          _0_resolves_to_a_type_and_must_be_marked_type_only_in_this_file_before_re_exporting_when_1_is_enabled_Consider_using_export_type_0_as_default: b(1292, 1, "_0_resolves_to_a_type_and_must_be_marked_type_only_in_this_file_before_re_exporting_when_1_is_enable_1292", "'{0}' resolves to a type and must be marked type-only in this file before re-exporting when '{1}' is enabled. Consider using 'export type { {0} as default }'."),
          with_statements_are_not_allowed_in_an_async_function_block: b(1300, 1, "with_statements_are_not_allowed_in_an_async_function_block_1300", "'with' statements are not allowed in an async function block."),
          await_expressions_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules: b(1308, 1, "await_expressions_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules_1308", "'await' expressions are only allowed within async functions and at the top levels of modules."),
          The_current_file_is_a_CommonJS_module_and_cannot_use_await_at_the_top_level: b(1309, 1, "The_current_file_is_a_CommonJS_module_and_cannot_use_await_at_the_top_level_1309", "The current file is a CommonJS module and cannot use 'await' at the top level."),
          Did_you_mean_to_use_a_Colon_An_can_only_follow_a_property_name_when_the_containing_object_literal_is_part_of_a_destructuring_pattern: b(1312, 1, "Did_you_mean_to_use_a_Colon_An_can_only_follow_a_property_name_when_the_containing_object_literal_is_1312", "Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring pattern."),
          The_body_of_an_if_statement_cannot_be_the_empty_statement: b(1313, 1, "The_body_of_an_if_statement_cannot_be_the_empty_statement_1313", "The body of an 'if' statement cannot be the empty statement."),
          Global_module_exports_may_only_appear_in_module_files: b(1314, 1, "Global_module_exports_may_only_appear_in_module_files_1314", "Global module exports may only appear in module files."),
          Global_module_exports_may_only_appear_in_declaration_files: b(1315, 1, "Global_module_exports_may_only_appear_in_declaration_files_1315", "Global module exports may only appear in declaration files."),
          Global_module_exports_may_only_appear_at_top_level: b(1316, 1, "Global_module_exports_may_only_appear_at_top_level_1316", "Global module exports may only appear at top level."),
          A_parameter_property_cannot_be_declared_using_a_rest_parameter: b(1317, 1, "A_parameter_property_cannot_be_declared_using_a_rest_parameter_1317", "A parameter property cannot be declared using a rest parameter."),
          An_abstract_accessor_cannot_have_an_implementation: b(1318, 1, "An_abstract_accessor_cannot_have_an_implementation_1318", "An abstract accessor cannot have an implementation."),
          A_default_export_can_only_be_used_in_an_ECMAScript_style_module: b(1319, 1, "A_default_export_can_only_be_used_in_an_ECMAScript_style_module_1319", "A default export can only be used in an ECMAScript-style module."),
          Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: b(1320, 1, "Type_of_await_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member_1320", "Type of 'await' operand must either be a valid promise or must not contain a callable 'then' member."),
          Type_of_yield_operand_in_an_async_generator_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: b(1321, 1, "Type_of_yield_operand_in_an_async_generator_must_either_be_a_valid_promise_or_must_not_contain_a_cal_1321", "Type of 'yield' operand in an async generator must either be a valid promise or must not contain a callable 'then' member."),
          Type_of_iterated_elements_of_a_yield_Asterisk_operand_must_either_be_a_valid_promise_or_must_not_contain_a_callable_then_member: b(1322, 1, "Type_of_iterated_elements_of_a_yield_Asterisk_operand_must_either_be_a_valid_promise_or_must_not_con_1322", "Type of iterated elements of a 'yield*' operand must either be a valid promise or must not contain a callable 'then' member."),
          Dynamic_imports_are_only_supported_when_the_module_flag_is_set_to_es2020_es2022_esnext_commonjs_amd_system_umd_node16_or_nodenext: b(1323, 1, "Dynamic_imports_are_only_supported_when_the_module_flag_is_set_to_es2020_es2022_esnext_commonjs_amd__1323", "Dynamic imports are only supported when the '--module' flag is set to 'es2020', 'es2022', 'esnext', 'commonjs', 'amd', 'system', 'umd', 'node16', or 'nodenext'."),
          Dynamic_imports_only_support_a_second_argument_when_the_module_option_is_set_to_esnext_node16_or_nodenext: b(1324, 1, "Dynamic_imports_only_support_a_second_argument_when_the_module_option_is_set_to_esnext_node16_or_nod_1324", "Dynamic imports only support a second argument when the '--module' option is set to 'esnext', 'node16', or 'nodenext'."),
          Argument_of_dynamic_import_cannot_be_spread_element: b(1325, 1, "Argument_of_dynamic_import_cannot_be_spread_element_1325", "Argument of dynamic import cannot be spread element."),
          This_use_of_import_is_invalid_import_calls_can_be_written_but_they_must_have_parentheses_and_cannot_have_type_arguments: b(1326, 1, "This_use_of_import_is_invalid_import_calls_can_be_written_but_they_must_have_parentheses_and_cannot__1326", "This use of 'import' is invalid. 'import()' calls can be written, but they must have parentheses and cannot have type arguments."),
          String_literal_with_double_quotes_expected: b(1327, 1, "String_literal_with_double_quotes_expected_1327", "String literal with double quotes expected."),
          Property_value_can_only_be_string_literal_numeric_literal_true_false_null_object_literal_or_array_literal: b(1328, 1, "Property_value_can_only_be_string_literal_numeric_literal_true_false_null_object_literal_or_array_li_1328", "Property value can only be string literal, numeric literal, 'true', 'false', 'null', object literal or array literal."),
          _0_accepts_too_few_arguments_to_be_used_as_a_decorator_here_Did_you_mean_to_call_it_first_and_write_0: b(1329, 1, "_0_accepts_too_few_arguments_to_be_used_as_a_decorator_here_Did_you_mean_to_call_it_first_and_write__1329", "'{0}' accepts too few arguments to be used as a decorator here. Did you mean to call it first and write '@{0}()'?"),
          A_property_of_an_interface_or_type_literal_whose_type_is_a_unique_symbol_type_must_be_readonly: b(1330, 1, "A_property_of_an_interface_or_type_literal_whose_type_is_a_unique_symbol_type_must_be_readonly_1330", "A property of an interface or type literal whose type is a 'unique symbol' type must be 'readonly'."),
          A_property_of_a_class_whose_type_is_a_unique_symbol_type_must_be_both_static_and_readonly: b(1331, 1, "A_property_of_a_class_whose_type_is_a_unique_symbol_type_must_be_both_static_and_readonly_1331", "A property of a class whose type is a 'unique symbol' type must be both 'static' and 'readonly'."),
          A_variable_whose_type_is_a_unique_symbol_type_must_be_const: b(1332, 1, "A_variable_whose_type_is_a_unique_symbol_type_must_be_const_1332", "A variable whose type is a 'unique symbol' type must be 'const'."),
          unique_symbol_types_may_not_be_used_on_a_variable_declaration_with_a_binding_name: b(1333, 1, "unique_symbol_types_may_not_be_used_on_a_variable_declaration_with_a_binding_name_1333", "'unique symbol' types may not be used on a variable declaration with a binding name."),
          unique_symbol_types_are_only_allowed_on_variables_in_a_variable_statement: b(1334, 1, "unique_symbol_types_are_only_allowed_on_variables_in_a_variable_statement_1334", "'unique symbol' types are only allowed on variables in a variable statement."),
          unique_symbol_types_are_not_allowed_here: b(1335, 1, "unique_symbol_types_are_not_allowed_here_1335", "'unique symbol' types are not allowed here."),
          An_index_signature_parameter_type_cannot_be_a_literal_type_or_generic_type_Consider_using_a_mapped_object_type_instead: b(1337, 1, "An_index_signature_parameter_type_cannot_be_a_literal_type_or_generic_type_Consider_using_a_mapped_o_1337", "An index signature parameter type cannot be a literal type or generic type. Consider using a mapped object type instead."),
          infer_declarations_are_only_permitted_in_the_extends_clause_of_a_conditional_type: b(1338, 1, "infer_declarations_are_only_permitted_in_the_extends_clause_of_a_conditional_type_1338", "'infer' declarations are only permitted in the 'extends' clause of a conditional type."),
          Module_0_does_not_refer_to_a_value_but_is_used_as_a_value_here: b(1339, 1, "Module_0_does_not_refer_to_a_value_but_is_used_as_a_value_here_1339", "Module '{0}' does not refer to a value, but is used as a value here."),
          Module_0_does_not_refer_to_a_type_but_is_used_as_a_type_here_Did_you_mean_typeof_import_0: b(1340, 1, "Module_0_does_not_refer_to_a_type_but_is_used_as_a_type_here_Did_you_mean_typeof_import_0_1340", "Module '{0}' does not refer to a type, but is used as a type here. Did you mean 'typeof import('{0}')'?"),
          Class_constructor_may_not_be_an_accessor: b(1341, 1, "Class_constructor_may_not_be_an_accessor_1341", "Class constructor may not be an accessor."),
          The_import_meta_meta_property_is_only_allowed_when_the_module_option_is_es2020_es2022_esnext_system_node16_or_nodenext: b(1343, 1, "The_import_meta_meta_property_is_only_allowed_when_the_module_option_is_es2020_es2022_esnext_system__1343", "The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'es2022', 'esnext', 'system', 'node16', or 'nodenext'."),
          A_label_is_not_allowed_here: b(1344, 1, "A_label_is_not_allowed_here_1344", "'A label is not allowed here."),
          An_expression_of_type_void_cannot_be_tested_for_truthiness: b(1345, 1, "An_expression_of_type_void_cannot_be_tested_for_truthiness_1345", "An expression of type 'void' cannot be tested for truthiness."),
          This_parameter_is_not_allowed_with_use_strict_directive: b(1346, 1, "This_parameter_is_not_allowed_with_use_strict_directive_1346", "This parameter is not allowed with 'use strict' directive."),
          use_strict_directive_cannot_be_used_with_non_simple_parameter_list: b(1347, 1, "use_strict_directive_cannot_be_used_with_non_simple_parameter_list_1347", "'use strict' directive cannot be used with non-simple parameter list."),
          Non_simple_parameter_declared_here: b(1348, 1, "Non_simple_parameter_declared_here_1348", "Non-simple parameter declared here."),
          use_strict_directive_used_here: b(1349, 1, "use_strict_directive_used_here_1349", "'use strict' directive used here."),
          Print_the_final_configuration_instead_of_building: b(1350, 3, "Print_the_final_configuration_instead_of_building_1350", "Print the final configuration instead of building."),
          An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal: b(1351, 1, "An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal_1351", "An identifier or keyword cannot immediately follow a numeric literal."),
          A_bigint_literal_cannot_use_exponential_notation: b(1352, 1, "A_bigint_literal_cannot_use_exponential_notation_1352", "A bigint literal cannot use exponential notation."),
          A_bigint_literal_must_be_an_integer: b(1353, 1, "A_bigint_literal_must_be_an_integer_1353", "A bigint literal must be an integer."),
          readonly_type_modifier_is_only_permitted_on_array_and_tuple_literal_types: b(1354, 1, "readonly_type_modifier_is_only_permitted_on_array_and_tuple_literal_types_1354", "'readonly' type modifier is only permitted on array and tuple literal types."),
          A_const_assertions_can_only_be_applied_to_references_to_enum_members_or_string_number_boolean_array_or_object_literals: b(1355, 1, "A_const_assertions_can_only_be_applied_to_references_to_enum_members_or_string_number_boolean_array__1355", "A 'const' assertions can only be applied to references to enum members, or string, number, boolean, array, or object literals."),
          Did_you_mean_to_mark_this_function_as_async: b(1356, 1, "Did_you_mean_to_mark_this_function_as_async_1356", "Did you mean to mark this function as 'async'?"),
          An_enum_member_name_must_be_followed_by_a_or: b(1357, 1, "An_enum_member_name_must_be_followed_by_a_or_1357", "An enum member name must be followed by a ',', '=', or '}'."),
          Tagged_template_expressions_are_not_permitted_in_an_optional_chain: b(1358, 1, "Tagged_template_expressions_are_not_permitted_in_an_optional_chain_1358", "Tagged template expressions are not permitted in an optional chain."),
          Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here: b(1359, 1, "Identifier_expected_0_is_a_reserved_word_that_cannot_be_used_here_1359", "Identifier expected. '{0}' is a reserved word that cannot be used here."),
          Type_0_does_not_satisfy_the_expected_type_1: b(1360, 1, "Type_0_does_not_satisfy_the_expected_type_1_1360", "Type '{0}' does not satisfy the expected type '{1}'."),
          _0_cannot_be_used_as_a_value_because_it_was_imported_using_import_type: b(1361, 1, "_0_cannot_be_used_as_a_value_because_it_was_imported_using_import_type_1361", "'{0}' cannot be used as a value because it was imported using 'import type'."),
          _0_cannot_be_used_as_a_value_because_it_was_exported_using_export_type: b(1362, 1, "_0_cannot_be_used_as_a_value_because_it_was_exported_using_export_type_1362", "'{0}' cannot be used as a value because it was exported using 'export type'."),
          A_type_only_import_can_specify_a_default_import_or_named_bindings_but_not_both: b(1363, 1, "A_type_only_import_can_specify_a_default_import_or_named_bindings_but_not_both_1363", "A type-only import can specify a default import or named bindings, but not both."),
          Convert_to_type_only_export: b(1364, 3, "Convert_to_type_only_export_1364", "Convert to type-only export"),
          Convert_all_re_exported_types_to_type_only_exports: b(1365, 3, "Convert_all_re_exported_types_to_type_only_exports_1365", "Convert all re-exported types to type-only exports"),
          Split_into_two_separate_import_declarations: b(1366, 3, "Split_into_two_separate_import_declarations_1366", "Split into two separate import declarations"),
          Split_all_invalid_type_only_imports: b(1367, 3, "Split_all_invalid_type_only_imports_1367", "Split all invalid type-only imports"),
          Class_constructor_may_not_be_a_generator: b(1368, 1, "Class_constructor_may_not_be_a_generator_1368", "Class constructor may not be a generator."),
          Did_you_mean_0: b(1369, 3, "Did_you_mean_0_1369", "Did you mean '{0}'?"),
          This_import_is_never_used_as_a_value_and_must_use_import_type_because_importsNotUsedAsValues_is_set_to_error: b(1371, 1, "This_import_is_never_used_as_a_value_and_must_use_import_type_because_importsNotUsedAsValues_is_set__1371", "This import is never used as a value and must use 'import type' because 'importsNotUsedAsValues' is set to 'error'."),
          await_expressions_are_only_allowed_at_the_top_level_of_a_file_when_that_file_is_a_module_but_this_file_has_no_imports_or_exports_Consider_adding_an_empty_export_to_make_this_file_a_module: b(1375, 1, "await_expressions_are_only_allowed_at_the_top_level_of_a_file_when_that_file_is_a_module_but_this_fi_1375", "'await' expressions are only allowed at the top level of a file when that file is a module, but this file has no imports or exports. Consider adding an empty 'export {}' to make this file a module."),
          _0_was_imported_here: b(1376, 3, "_0_was_imported_here_1376", "'{0}' was imported here."),
          _0_was_exported_here: b(1377, 3, "_0_was_exported_here_1377", "'{0}' was exported here."),
          Top_level_await_expressions_are_only_allowed_when_the_module_option_is_set_to_es2022_esnext_system_node16_nodenext_or_preserve_and_the_target_option_is_set_to_es2017_or_higher: b(1378, 1, "Top_level_await_expressions_are_only_allowed_when_the_module_option_is_set_to_es2022_esnext_system_n_1378", "Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher."),
          An_import_alias_cannot_reference_a_declaration_that_was_exported_using_export_type: b(1379, 1, "An_import_alias_cannot_reference_a_declaration_that_was_exported_using_export_type_1379", "An import alias cannot reference a declaration that was exported using 'export type'."),
          An_import_alias_cannot_reference_a_declaration_that_was_imported_using_import_type: b(1380, 1, "An_import_alias_cannot_reference_a_declaration_that_was_imported_using_import_type_1380", "An import alias cannot reference a declaration that was imported using 'import type'."),
          Unexpected_token_Did_you_mean_or_rbrace: b(1381, 1, "Unexpected_token_Did_you_mean_or_rbrace_1381", "Unexpected token. Did you mean `{'}'}` or `&rbrace;`?"),
          Unexpected_token_Did_you_mean_or_gt: b(1382, 1, "Unexpected_token_Did_you_mean_or_gt_1382", "Unexpected token. Did you mean `{'>'}` or `&gt;`?"),
          Function_type_notation_must_be_parenthesized_when_used_in_a_union_type: b(1385, 1, "Function_type_notation_must_be_parenthesized_when_used_in_a_union_type_1385", "Function type notation must be parenthesized when used in a union type."),
          Constructor_type_notation_must_be_parenthesized_when_used_in_a_union_type: b(1386, 1, "Constructor_type_notation_must_be_parenthesized_when_used_in_a_union_type_1386", "Constructor type notation must be parenthesized when used in a union type."),
          Function_type_notation_must_be_parenthesized_when_used_in_an_intersection_type: b(1387, 1, "Function_type_notation_must_be_parenthesized_when_used_in_an_intersection_type_1387", "Function type notation must be parenthesized when used in an intersection type."),
          Constructor_type_notation_must_be_parenthesized_when_used_in_an_intersection_type: b(1388, 1, "Constructor_type_notation_must_be_parenthesized_when_used_in_an_intersection_type_1388", "Constructor type notation must be parenthesized when used in an intersection type."),
          _0_is_not_allowed_as_a_variable_declaration_name: b(1389, 1, "_0_is_not_allowed_as_a_variable_declaration_name_1389", "'{0}' is not allowed as a variable declaration name."),
          _0_is_not_allowed_as_a_parameter_name: b(1390, 1, "_0_is_not_allowed_as_a_parameter_name_1390", "'{0}' is not allowed as a parameter name."),
          An_import_alias_cannot_use_import_type: b(1392, 1, "An_import_alias_cannot_use_import_type_1392", "An import alias cannot use 'import type'"),
          Imported_via_0_from_file_1: b(1393, 3, "Imported_via_0_from_file_1_1393", "Imported via {0} from file '{1}'"),
          Imported_via_0_from_file_1_with_packageId_2: b(1394, 3, "Imported_via_0_from_file_1_with_packageId_2_1394", "Imported via {0} from file '{1}' with packageId '{2}'"),
          Imported_via_0_from_file_1_to_import_importHelpers_as_specified_in_compilerOptions: b(1395, 3, "Imported_via_0_from_file_1_to_import_importHelpers_as_specified_in_compilerOptions_1395", "Imported via {0} from file '{1}' to import 'importHelpers' as specified in compilerOptions"),
          Imported_via_0_from_file_1_with_packageId_2_to_import_importHelpers_as_specified_in_compilerOptions: b(1396, 3, "Imported_via_0_from_file_1_with_packageId_2_to_import_importHelpers_as_specified_in_compilerOptions_1396", "Imported via {0} from file '{1}' with packageId '{2}' to import 'importHelpers' as specified in compilerOptions"),
          Imported_via_0_from_file_1_to_import_jsx_and_jsxs_factory_functions: b(1397, 3, "Imported_via_0_from_file_1_to_import_jsx_and_jsxs_factory_functions_1397", "Imported via {0} from file '{1}' to import 'jsx' and 'jsxs' factory functions"),
          Imported_via_0_from_file_1_with_packageId_2_to_import_jsx_and_jsxs_factory_functions: b(1398, 3, "Imported_via_0_from_file_1_with_packageId_2_to_import_jsx_and_jsxs_factory_functions_1398", "Imported via {0} from file '{1}' with packageId '{2}' to import 'jsx' and 'jsxs' factory functions"),
          File_is_included_via_import_here: b(1399, 3, "File_is_included_via_import_here_1399", "File is included via import here."),
          Referenced_via_0_from_file_1: b(1400, 3, "Referenced_via_0_from_file_1_1400", "Referenced via '{0}' from file '{1}'"),
          File_is_included_via_reference_here: b(1401, 3, "File_is_included_via_reference_here_1401", "File is included via reference here."),
          Type_library_referenced_via_0_from_file_1: b(1402, 3, "Type_library_referenced_via_0_from_file_1_1402", "Type library referenced via '{0}' from file '{1}'"),
          Type_library_referenced_via_0_from_file_1_with_packageId_2: b(1403, 3, "Type_library_referenced_via_0_from_file_1_with_packageId_2_1403", "Type library referenced via '{0}' from file '{1}' with packageId '{2}'"),
          File_is_included_via_type_library_reference_here: b(1404, 3, "File_is_included_via_type_library_reference_here_1404", "File is included via type library reference here."),
          Library_referenced_via_0_from_file_1: b(1405, 3, "Library_referenced_via_0_from_file_1_1405", "Library referenced via '{0}' from file '{1}'"),
          File_is_included_via_library_reference_here: b(1406, 3, "File_is_included_via_library_reference_here_1406", "File is included via library reference here."),
          Matched_by_include_pattern_0_in_1: b(1407, 3, "Matched_by_include_pattern_0_in_1_1407", "Matched by include pattern '{0}' in '{1}'"),
          File_is_matched_by_include_pattern_specified_here: b(1408, 3, "File_is_matched_by_include_pattern_specified_here_1408", "File is matched by include pattern specified here."),
          Part_of_files_list_in_tsconfig_json: b(1409, 3, "Part_of_files_list_in_tsconfig_json_1409", "Part of 'files' list in tsconfig.json"),
          File_is_matched_by_files_list_specified_here: b(1410, 3, "File_is_matched_by_files_list_specified_here_1410", "File is matched by 'files' list specified here."),
          Output_from_referenced_project_0_included_because_1_specified: b(1411, 3, "Output_from_referenced_project_0_included_because_1_specified_1411", "Output from referenced project '{0}' included because '{1}' specified"),
          Output_from_referenced_project_0_included_because_module_is_specified_as_none: b(1412, 3, "Output_from_referenced_project_0_included_because_module_is_specified_as_none_1412", "Output from referenced project '{0}' included because '--module' is specified as 'none'"),
          File_is_output_from_referenced_project_specified_here: b(1413, 3, "File_is_output_from_referenced_project_specified_here_1413", "File is output from referenced project specified here."),
          Source_from_referenced_project_0_included_because_1_specified: b(1414, 3, "Source_from_referenced_project_0_included_because_1_specified_1414", "Source from referenced project '{0}' included because '{1}' specified"),
          Source_from_referenced_project_0_included_because_module_is_specified_as_none: b(1415, 3, "Source_from_referenced_project_0_included_because_module_is_specified_as_none_1415", "Source from referenced project '{0}' included because '--module' is specified as 'none'"),
          File_is_source_from_referenced_project_specified_here: b(1416, 3, "File_is_source_from_referenced_project_specified_here_1416", "File is source from referenced project specified here."),
          Entry_point_of_type_library_0_specified_in_compilerOptions: b(1417, 3, "Entry_point_of_type_library_0_specified_in_compilerOptions_1417", "Entry point of type library '{0}' specified in compilerOptions"),
          Entry_point_of_type_library_0_specified_in_compilerOptions_with_packageId_1: b(1418, 3, "Entry_point_of_type_library_0_specified_in_compilerOptions_with_packageId_1_1418", "Entry point of type library '{0}' specified in compilerOptions with packageId '{1}'"),
          File_is_entry_point_of_type_library_specified_here: b(1419, 3, "File_is_entry_point_of_type_library_specified_here_1419", "File is entry point of type library specified here."),
          Entry_point_for_implicit_type_library_0: b(1420, 3, "Entry_point_for_implicit_type_library_0_1420", "Entry point for implicit type library '{0}'"),
          Entry_point_for_implicit_type_library_0_with_packageId_1: b(1421, 3, "Entry_point_for_implicit_type_library_0_with_packageId_1_1421", "Entry point for implicit type library '{0}' with packageId '{1}'"),
          Library_0_specified_in_compilerOptions: b(1422, 3, "Library_0_specified_in_compilerOptions_1422", "Library '{0}' specified in compilerOptions"),
          File_is_library_specified_here: b(1423, 3, "File_is_library_specified_here_1423", "File is library specified here."),
          Default_library: b(1424, 3, "Default_library_1424", "Default library"),
          Default_library_for_target_0: b(1425, 3, "Default_library_for_target_0_1425", "Default library for target '{0}'"),
          File_is_default_library_for_target_specified_here: b(1426, 3, "File_is_default_library_for_target_specified_here_1426", "File is default library for target specified here."),
          Root_file_specified_for_compilation: b(1427, 3, "Root_file_specified_for_compilation_1427", "Root file specified for compilation"),
          File_is_output_of_project_reference_source_0: b(1428, 3, "File_is_output_of_project_reference_source_0_1428", "File is output of project reference source '{0}'"),
          File_redirects_to_file_0: b(1429, 3, "File_redirects_to_file_0_1429", "File redirects to file '{0}'"),
          The_file_is_in_the_program_because_Colon: b(1430, 3, "The_file_is_in_the_program_because_Colon_1430", "The file is in the program because:"),
          for_await_loops_are_only_allowed_at_the_top_level_of_a_file_when_that_file_is_a_module_but_this_file_has_no_imports_or_exports_Consider_adding_an_empty_export_to_make_this_file_a_module: b(1431, 1, "for_await_loops_are_only_allowed_at_the_top_level_of_a_file_when_that_file_is_a_module_but_this_file_1431", "'for await' loops are only allowed at the top level of a file when that file is a module, but this file has no imports or exports. Consider adding an empty 'export {}' to make this file a module."),
          Top_level_for_await_loops_are_only_allowed_when_the_module_option_is_set_to_es2022_esnext_system_node16_nodenext_or_preserve_and_the_target_option_is_set_to_es2017_or_higher: b(1432, 1, "Top_level_for_await_loops_are_only_allowed_when_the_module_option_is_set_to_es2022_esnext_system_nod_1432", "Top-level 'for await' loops are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher."),
          Neither_decorators_nor_modifiers_may_be_applied_to_this_parameters: b(1433, 1, "Neither_decorators_nor_modifiers_may_be_applied_to_this_parameters_1433", "Neither decorators nor modifiers may be applied to 'this' parameters."),
          Unexpected_keyword_or_identifier: b(1434, 1, "Unexpected_keyword_or_identifier_1434", "Unexpected keyword or identifier."),
          Unknown_keyword_or_identifier_Did_you_mean_0: b(1435, 1, "Unknown_keyword_or_identifier_Did_you_mean_0_1435", "Unknown keyword or identifier. Did you mean '{0}'?"),
          Decorators_must_precede_the_name_and_all_keywords_of_property_declarations: b(1436, 1, "Decorators_must_precede_the_name_and_all_keywords_of_property_declarations_1436", "Decorators must precede the name and all keywords of property declarations."),
          Namespace_must_be_given_a_name: b(1437, 1, "Namespace_must_be_given_a_name_1437", "Namespace must be given a name."),
          Interface_must_be_given_a_name: b(1438, 1, "Interface_must_be_given_a_name_1438", "Interface must be given a name."),
          Type_alias_must_be_given_a_name: b(1439, 1, "Type_alias_must_be_given_a_name_1439", "Type alias must be given a name."),
          Variable_declaration_not_allowed_at_this_location: b(1440, 1, "Variable_declaration_not_allowed_at_this_location_1440", "Variable declaration not allowed at this location."),
          Cannot_start_a_function_call_in_a_type_annotation: b(1441, 1, "Cannot_start_a_function_call_in_a_type_annotation_1441", "Cannot start a function call in a type annotation."),
          Expected_for_property_initializer: b(1442, 1, "Expected_for_property_initializer_1442", "Expected '=' for property initializer."),
          Module_declaration_names_may_only_use_or_quoted_strings: b(1443, 1, "Module_declaration_names_may_only_use_or_quoted_strings_1443", `Module declaration names may only use ' or " quoted strings.`),
          _0_is_a_type_and_must_be_imported_using_a_type_only_import_when_preserveValueImports_and_isolatedModules_are_both_enabled: b(1444, 1, "_0_is_a_type_and_must_be_imported_using_a_type_only_import_when_preserveValueImports_and_isolatedMod_1444", "'{0}' is a type and must be imported using a type-only import when 'preserveValueImports' and 'isolatedModules' are both enabled."),
          _0_resolves_to_a_type_only_declaration_and_must_be_imported_using_a_type_only_import_when_preserveValueImports_and_isolatedModules_are_both_enabled: b(1446, 1, "_0_resolves_to_a_type_only_declaration_and_must_be_imported_using_a_type_only_import_when_preserveVa_1446", "'{0}' resolves to a type-only declaration and must be imported using a type-only import when 'preserveValueImports' and 'isolatedModules' are both enabled."),
          _0_resolves_to_a_type_only_declaration_and_must_be_re_exported_using_a_type_only_re_export_when_1_is_enabled: b(1448, 1, "_0_resolves_to_a_type_only_declaration_and_must_be_re_exported_using_a_type_only_re_export_when_1_is_1448", "'{0}' resolves to a type-only declaration and must be re-exported using a type-only re-export when '{1}' is enabled."),
          Preserve_unused_imported_values_in_the_JavaScript_output_that_would_otherwise_be_removed: b(1449, 3, "Preserve_unused_imported_values_in_the_JavaScript_output_that_would_otherwise_be_removed_1449", "Preserve unused imported values in the JavaScript output that would otherwise be removed."),
          Dynamic_imports_can_only_accept_a_module_specifier_and_an_optional_set_of_attributes_as_arguments: b(1450, 3, "Dynamic_imports_can_only_accept_a_module_specifier_and_an_optional_set_of_attributes_as_arguments_1450", "Dynamic imports can only accept a module specifier and an optional set of attributes as arguments"),
          Private_identifiers_are_only_allowed_in_class_bodies_and_may_only_be_used_as_part_of_a_class_member_declaration_property_access_or_on_the_left_hand_side_of_an_in_expression: b(1451, 1, "Private_identifiers_are_only_allowed_in_class_bodies_and_may_only_be_used_as_part_of_a_class_member__1451", "Private identifiers are only allowed in class bodies and may only be used as part of a class member declaration, property access, or on the left-hand-side of an 'in' expression"),
          resolution_mode_should_be_either_require_or_import: b(1453, 1, "resolution_mode_should_be_either_require_or_import_1453", "`resolution-mode` should be either `require` or `import`."),
          resolution_mode_can_only_be_set_for_type_only_imports: b(1454, 1, "resolution_mode_can_only_be_set_for_type_only_imports_1454", "`resolution-mode` can only be set for type-only imports."),
          resolution_mode_is_the_only_valid_key_for_type_import_assertions: b(1455, 1, "resolution_mode_is_the_only_valid_key_for_type_import_assertions_1455", "`resolution-mode` is the only valid key for type import assertions."),
          Type_import_assertions_should_have_exactly_one_key_resolution_mode_with_value_import_or_require: b(1456, 1, "Type_import_assertions_should_have_exactly_one_key_resolution_mode_with_value_import_or_require_1456", "Type import assertions should have exactly one key - `resolution-mode` - with value `import` or `require`."),
          Matched_by_default_include_pattern_Asterisk_Asterisk_Slash_Asterisk: b(1457, 3, "Matched_by_default_include_pattern_Asterisk_Asterisk_Slash_Asterisk_1457", "Matched by default include pattern '**/*'"),
          File_is_ECMAScript_module_because_0_has_field_type_with_value_module: b(1458, 3, "File_is_ECMAScript_module_because_0_has_field_type_with_value_module_1458", `File is ECMAScript module because '{0}' has field "type" with value "module"`),
          File_is_CommonJS_module_because_0_has_field_type_whose_value_is_not_module: b(1459, 3, "File_is_CommonJS_module_because_0_has_field_type_whose_value_is_not_module_1459", `File is CommonJS module because '{0}' has field "type" whose value is not "module"`),
          File_is_CommonJS_module_because_0_does_not_have_field_type: b(1460, 3, "File_is_CommonJS_module_because_0_does_not_have_field_type_1460", `File is CommonJS module because '{0}' does not have field "type"`),
          File_is_CommonJS_module_because_package_json_was_not_found: b(1461, 3, "File_is_CommonJS_module_because_package_json_was_not_found_1461", "File is CommonJS module because 'package.json' was not found"),
          resolution_mode_is_the_only_valid_key_for_type_import_attributes: b(1463, 1, "resolution_mode_is_the_only_valid_key_for_type_import_attributes_1463", "'resolution-mode' is the only valid key for type import attributes."),
          Type_import_attributes_should_have_exactly_one_key_resolution_mode_with_value_import_or_require: b(1464, 1, "Type_import_attributes_should_have_exactly_one_key_resolution_mode_with_value_import_or_require_1464", "Type import attributes should have exactly one key - 'resolution-mode' - with value 'import' or 'require'."),
          The_import_meta_meta_property_is_not_allowed_in_files_which_will_build_into_CommonJS_output: b(1470, 1, "The_import_meta_meta_property_is_not_allowed_in_files_which_will_build_into_CommonJS_output_1470", "The 'import.meta' meta-property is not allowed in files which will build into CommonJS output."),
          Module_0_cannot_be_imported_using_this_construct_The_specifier_only_resolves_to_an_ES_module_which_cannot_be_imported_with_require_Use_an_ECMAScript_import_instead: b(1471, 1, "Module_0_cannot_be_imported_using_this_construct_The_specifier_only_resolves_to_an_ES_module_which_c_1471", "Module '{0}' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported with 'require'. Use an ECMAScript import instead."),
          catch_or_finally_expected: b(1472, 1, "catch_or_finally_expected_1472", "'catch' or 'finally' expected."),
          An_import_declaration_can_only_be_used_at_the_top_level_of_a_module: b(1473, 1, "An_import_declaration_can_only_be_used_at_the_top_level_of_a_module_1473", "An import declaration can only be used at the top level of a module."),
          An_export_declaration_can_only_be_used_at_the_top_level_of_a_module: b(1474, 1, "An_export_declaration_can_only_be_used_at_the_top_level_of_a_module_1474", "An export declaration can only be used at the top level of a module."),
          Control_what_method_is_used_to_detect_module_format_JS_files: b(1475, 3, "Control_what_method_is_used_to_detect_module_format_JS_files_1475", "Control what method is used to detect module-format JS files."),
          auto_Colon_Treat_files_with_imports_exports_import_meta_jsx_with_jsx_Colon_react_jsx_or_esm_format_with_module_Colon_node16_as_modules: b(1476, 3, "auto_Colon_Treat_files_with_imports_exports_import_meta_jsx_with_jsx_Colon_react_jsx_or_esm_format_w_1476", '"auto": Treat files with imports, exports, import.meta, jsx (with jsx: react-jsx), or esm format (with module: node16+) as modules.'),
          An_instantiation_expression_cannot_be_followed_by_a_property_access: b(1477, 1, "An_instantiation_expression_cannot_be_followed_by_a_property_access_1477", "An instantiation expression cannot be followed by a property access."),
          Identifier_or_string_literal_expected: b(1478, 1, "Identifier_or_string_literal_expected_1478", "Identifier or string literal expected."),
          The_current_file_is_a_CommonJS_module_whose_imports_will_produce_require_calls_however_the_referenced_file_is_an_ECMAScript_module_and_cannot_be_imported_with_require_Consider_writing_a_dynamic_import_0_call_instead: b(1479, 1, "The_current_file_is_a_CommonJS_module_whose_imports_will_produce_require_calls_however_the_reference_1479", `The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("{0}")' call instead.`),
          To_convert_this_file_to_an_ECMAScript_module_change_its_file_extension_to_0_or_create_a_local_package_json_file_with_type_Colon_module: b(1480, 3, "To_convert_this_file_to_an_ECMAScript_module_change_its_file_extension_to_0_or_create_a_local_packag_1480", 'To convert this file to an ECMAScript module, change its file extension to \'{0}\' or create a local package.json file with `{ "type": "module" }`.'),
          To_convert_this_file_to_an_ECMAScript_module_change_its_file_extension_to_0_or_add_the_field_type_Colon_module_to_1: b(1481, 3, "To_convert_this_file_to_an_ECMAScript_module_change_its_file_extension_to_0_or_add_the_field_type_Co_1481", `To convert this file to an ECMAScript module, change its file extension to '{0}', or add the field \`"type": "module"\` to '{1}'.`),
          To_convert_this_file_to_an_ECMAScript_module_add_the_field_type_Colon_module_to_0: b(1482, 3, "To_convert_this_file_to_an_ECMAScript_module_add_the_field_type_Colon_module_to_0_1482", 'To convert this file to an ECMAScript module, add the field `"type": "module"` to \'{0}\'.'),
          To_convert_this_file_to_an_ECMAScript_module_create_a_local_package_json_file_with_type_Colon_module: b(1483, 3, "To_convert_this_file_to_an_ECMAScript_module_create_a_local_package_json_file_with_type_Colon_module_1483", 'To convert this file to an ECMAScript module, create a local package.json file with `{ "type": "module" }`.'),
          _0_is_a_type_and_must_be_imported_using_a_type_only_import_when_verbatimModuleSyntax_is_enabled: b(1484, 1, "_0_is_a_type_and_must_be_imported_using_a_type_only_import_when_verbatimModuleSyntax_is_enabled_1484", "'{0}' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled."),
          _0_resolves_to_a_type_only_declaration_and_must_be_imported_using_a_type_only_import_when_verbatimModuleSyntax_is_enabled: b(1485, 1, "_0_resolves_to_a_type_only_declaration_and_must_be_imported_using_a_type_only_import_when_verbatimMo_1485", "'{0}' resolves to a type-only declaration and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled."),
          Decorator_used_before_export_here: b(1486, 1, "Decorator_used_before_export_here_1486", "Decorator used before 'export' here."),
          Octal_escape_sequences_are_not_allowed_Use_the_syntax_0: b(1487, 1, "Octal_escape_sequences_are_not_allowed_Use_the_syntax_0_1487", "Octal escape sequences are not allowed. Use the syntax '{0}'."),
          Escape_sequence_0_is_not_allowed: b(1488, 1, "Escape_sequence_0_is_not_allowed_1488", "Escape sequence '{0}' is not allowed."),
          Decimals_with_leading_zeros_are_not_allowed: b(1489, 1, "Decimals_with_leading_zeros_are_not_allowed_1489", "Decimals with leading zeros are not allowed."),
          File_appears_to_be_binary: b(1490, 1, "File_appears_to_be_binary_1490", "File appears to be binary."),
          _0_modifier_cannot_appear_on_a_using_declaration: b(1491, 1, "_0_modifier_cannot_appear_on_a_using_declaration_1491", "'{0}' modifier cannot appear on a 'using' declaration."),
          _0_declarations_may_not_have_binding_patterns: b(1492, 1, "_0_declarations_may_not_have_binding_patterns_1492", "'{0}' declarations may not have binding patterns."),
          The_left_hand_side_of_a_for_in_statement_cannot_be_a_using_declaration: b(1493, 1, "The_left_hand_side_of_a_for_in_statement_cannot_be_a_using_declaration_1493", "The left-hand side of a 'for...in' statement cannot be a 'using' declaration."),
          The_left_hand_side_of_a_for_in_statement_cannot_be_an_await_using_declaration: b(1494, 1, "The_left_hand_side_of_a_for_in_statement_cannot_be_an_await_using_declaration_1494", "The left-hand side of a 'for...in' statement cannot be an 'await using' declaration."),
          _0_modifier_cannot_appear_on_an_await_using_declaration: b(1495, 1, "_0_modifier_cannot_appear_on_an_await_using_declaration_1495", "'{0}' modifier cannot appear on an 'await using' declaration."),
          Identifier_string_literal_or_number_literal_expected: b(1496, 1, "Identifier_string_literal_or_number_literal_expected_1496", "Identifier, string literal, or number literal expected."),
          The_types_of_0_are_incompatible_between_these_types: b(2200, 1, "The_types_of_0_are_incompatible_between_these_types_2200", "The types of '{0}' are incompatible between these types."),
          The_types_returned_by_0_are_incompatible_between_these_types: b(2201, 1, "The_types_returned_by_0_are_incompatible_between_these_types_2201", "The types returned by '{0}' are incompatible between these types."),
          Call_signature_return_types_0_and_1_are_incompatible: b(
            2202,
            1,
            "Call_signature_return_types_0_and_1_are_incompatible_2202",
            "Call signature return types '{0}' and '{1}' are incompatible.",
            /*reportsUnnecessary*/
            void 0,
            /*elidedInCompatabilityPyramid*/
            !0
          ),
          Construct_signature_return_types_0_and_1_are_incompatible: b(
            2203,
            1,
            "Construct_signature_return_types_0_and_1_are_incompatible_2203",
            "Construct signature return types '{0}' and '{1}' are incompatible.",
            /*reportsUnnecessary*/
            void 0,
            /*elidedInCompatabilityPyramid*/
            !0
          ),
          Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1: b(
            2204,
            1,
            "Call_signatures_with_no_arguments_have_incompatible_return_types_0_and_1_2204",
            "Call signatures with no arguments have incompatible return types '{0}' and '{1}'.",
            /*reportsUnnecessary*/
            void 0,
            /*elidedInCompatabilityPyramid*/
            !0
          ),
          Construct_signatures_with_no_arguments_have_incompatible_return_types_0_and_1: b(
            2205,
            1,
            "Construct_signatures_with_no_arguments_have_incompatible_return_types_0_and_1_2205",
            "Construct signatures with no arguments have incompatible return types '{0}' and '{1}'.",
            /*reportsUnnecessary*/
            void 0,
            /*elidedInCompatabilityPyramid*/
            !0
          ),
          The_type_modifier_cannot_be_used_on_a_named_import_when_import_type_is_used_on_its_import_statement: b(2206, 1, "The_type_modifier_cannot_be_used_on_a_named_import_when_import_type_is_used_on_its_import_statement_2206", "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement."),
          The_type_modifier_cannot_be_used_on_a_named_export_when_export_type_is_used_on_its_export_statement: b(2207, 1, "The_type_modifier_cannot_be_used_on_a_named_export_when_export_type_is_used_on_its_export_statement_2207", "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement."),
          This_type_parameter_might_need_an_extends_0_constraint: b(2208, 1, "This_type_parameter_might_need_an_extends_0_constraint_2208", "This type parameter might need an `extends {0}` constraint."),
          The_project_root_is_ambiguous_but_is_required_to_resolve_export_map_entry_0_in_file_1_Supply_the_rootDir_compiler_option_to_disambiguate: b(2209, 1, "The_project_root_is_ambiguous_but_is_required_to_resolve_export_map_entry_0_in_file_1_Supply_the_roo_2209", "The project root is ambiguous, but is required to resolve export map entry '{0}' in file '{1}'. Supply the `rootDir` compiler option to disambiguate."),
          The_project_root_is_ambiguous_but_is_required_to_resolve_import_map_entry_0_in_file_1_Supply_the_rootDir_compiler_option_to_disambiguate: b(2210, 1, "The_project_root_is_ambiguous_but_is_required_to_resolve_import_map_entry_0_in_file_1_Supply_the_roo_2210", "The project root is ambiguous, but is required to resolve import map entry '{0}' in file '{1}'. Supply the `rootDir` compiler option to disambiguate."),
          Add_extends_constraint: b(2211, 3, "Add_extends_constraint_2211", "Add `extends` constraint."),
          Add_extends_constraint_to_all_type_parameters: b(2212, 3, "Add_extends_constraint_to_all_type_parameters_2212", "Add `extends` constraint to all type parameters"),
          Duplicate_identifier_0: b(2300, 1, "Duplicate_identifier_0_2300", "Duplicate identifier '{0}'."),
          Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: b(2301, 1, "Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor_2301", "Initializer of instance member variable '{0}' cannot reference identifier '{1}' declared in the constructor."),
          Static_members_cannot_reference_class_type_parameters: b(2302, 1, "Static_members_cannot_reference_class_type_parameters_2302", "Static members cannot reference class type parameters."),
          Circular_definition_of_import_alias_0: b(2303, 1, "Circular_definition_of_import_alias_0_2303", "Circular definition of import alias '{0}'."),
          Cannot_find_name_0: b(2304, 1, "Cannot_find_name_0_2304", "Cannot find name '{0}'."),
          Module_0_has_no_exported_member_1: b(2305, 1, "Module_0_has_no_exported_member_1_2305", "Module '{0}' has no exported member '{1}'."),
          File_0_is_not_a_module: b(2306, 1, "File_0_is_not_a_module_2306", "File '{0}' is not a module."),
          Cannot_find_module_0_or_its_corresponding_type_declarations: b(2307, 1, "Cannot_find_module_0_or_its_corresponding_type_declarations_2307", "Cannot find module '{0}' or its corresponding type declarations."),
          Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambiguity: b(2308, 1, "Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambig_2308", "Module {0} has already exported a member named '{1}'. Consider explicitly re-exporting to resolve the ambiguity."),
          An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements: b(2309, 1, "An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements_2309", "An export assignment cannot be used in a module with other exported elements."),
          Type_0_recursively_references_itself_as_a_base_type: b(2310, 1, "Type_0_recursively_references_itself_as_a_base_type_2310", "Type '{0}' recursively references itself as a base type."),
          Cannot_find_name_0_Did_you_mean_to_write_this_in_an_async_function: b(2311, 1, "Cannot_find_name_0_Did_you_mean_to_write_this_in_an_async_function_2311", "Cannot find name '{0}'. Did you mean to write this in an async function?"),
          An_interface_can_only_extend_an_object_type_or_intersection_of_object_types_with_statically_known_members: b(2312, 1, "An_interface_can_only_extend_an_object_type_or_intersection_of_object_types_with_statically_known_me_2312", "An interface can only extend an object type or intersection of object types with statically known members."),
          Type_parameter_0_has_a_circular_constraint: b(2313, 1, "Type_parameter_0_has_a_circular_constraint_2313", "Type parameter '{0}' has a circular constraint."),
          Generic_type_0_requires_1_type_argument_s: b(2314, 1, "Generic_type_0_requires_1_type_argument_s_2314", "Generic type '{0}' requires {1} type argument(s)."),
          Type_0_is_not_generic: b(2315, 1, "Type_0_is_not_generic_2315", "Type '{0}' is not generic."),
          Global_type_0_must_be_a_class_or_interface_type: b(2316, 1, "Global_type_0_must_be_a_class_or_interface_type_2316", "Global type '{0}' must be a class or interface type."),
          Global_type_0_must_have_1_type_parameter_s: b(2317, 1, "Global_type_0_must_have_1_type_parameter_s_2317", "Global type '{0}' must have {1} type parameter(s)."),
          Cannot_find_global_type_0: b(2318, 1, "Cannot_find_global_type_0_2318", "Cannot find global type '{0}'."),
          Named_property_0_of_types_1_and_2_are_not_identical: b(2319, 1, "Named_property_0_of_types_1_and_2_are_not_identical_2319", "Named property '{0}' of types '{1}' and '{2}' are not identical."),
          Interface_0_cannot_simultaneously_extend_types_1_and_2: b(2320, 1, "Interface_0_cannot_simultaneously_extend_types_1_and_2_2320", "Interface '{0}' cannot simultaneously extend types '{1}' and '{2}'."),
          Excessive_stack_depth_comparing_types_0_and_1: b(2321, 1, "Excessive_stack_depth_comparing_types_0_and_1_2321", "Excessive stack depth comparing types '{0}' and '{1}'."),
          Type_0_is_not_assignable_to_type_1: b(2322, 1, "Type_0_is_not_assignable_to_type_1_2322", "Type '{0}' is not assignable to type '{1}'."),
          Cannot_redeclare_exported_variable_0: b(2323, 1, "Cannot_redeclare_exported_variable_0_2323", "Cannot redeclare exported variable '{0}'."),
          Property_0_is_missing_in_type_1: b(2324, 1, "Property_0_is_missing_in_type_1_2324", "Property '{0}' is missing in type '{1}'."),
          Property_0_is_private_in_type_1_but_not_in_type_2: b(2325, 1, "Property_0_is_private_in_type_1_but_not_in_type_2_2325", "Property '{0}' is private in type '{1}' but not in type '{2}'."),
          Types_of_property_0_are_incompatible: b(2326, 1, "Types_of_property_0_are_incompatible_2326", "Types of property '{0}' are incompatible."),
          Property_0_is_optional_in_type_1_but_required_in_type_2: b(2327, 1, "Property_0_is_optional_in_type_1_but_required_in_type_2_2327", "Property '{0}' is optional in type '{1}' but required in type '{2}'."),
          Types_of_parameters_0_and_1_are_incompatible: b(2328, 1, "Types_of_parameters_0_and_1_are_incompatible_2328", "Types of parameters '{0}' and '{1}' are incompatible."),
          Index_signature_for_type_0_is_missing_in_type_1: b(2329, 1, "Index_signature_for_type_0_is_missing_in_type_1_2329", "Index signature for type '{0}' is missing in type '{1}'."),
          _0_and_1_index_signatures_are_incompatible: b(2330, 1, "_0_and_1_index_signatures_are_incompatible_2330", "'{0}' and '{1}' index signatures are incompatible."),
          this_cannot_be_referenced_in_a_module_or_namespace_body: b(2331, 1, "this_cannot_be_referenced_in_a_module_or_namespace_body_2331", "'this' cannot be referenced in a module or namespace body."),
          this_cannot_be_referenced_in_current_location: b(2332, 1, "this_cannot_be_referenced_in_current_location_2332", "'this' cannot be referenced in current location."),
          this_cannot_be_referenced_in_constructor_arguments: b(2333, 1, "this_cannot_be_referenced_in_constructor_arguments_2333", "'this' cannot be referenced in constructor arguments."),
          this_cannot_be_referenced_in_a_static_property_initializer: b(2334, 1, "this_cannot_be_referenced_in_a_static_property_initializer_2334", "'this' cannot be referenced in a static property initializer."),
          super_can_only_be_referenced_in_a_derived_class: b(2335, 1, "super_can_only_be_referenced_in_a_derived_class_2335", "'super' can only be referenced in a derived class."),
          super_cannot_be_referenced_in_constructor_arguments: b(2336, 1, "super_cannot_be_referenced_in_constructor_arguments_2336", "'super' cannot be referenced in constructor arguments."),
          Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors: b(2337, 1, "Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors_2337", "Super calls are not permitted outside constructors or in nested functions inside constructors."),
          super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class: b(2338, 1, "super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_der_2338", "'super' property access is permitted only in a constructor, member function, or member accessor of a derived class."),
          Property_0_does_not_exist_on_type_1: b(2339, 1, "Property_0_does_not_exist_on_type_1_2339", "Property '{0}' does not exist on type '{1}'."),
          Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword: b(2340, 1, "Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword_2340", "Only public and protected methods of the base class are accessible via the 'super' keyword."),
          Property_0_is_private_and_only_accessible_within_class_1: b(2341, 1, "Property_0_is_private_and_only_accessible_within_class_1_2341", "Property '{0}' is private and only accessible within class '{1}'."),
          This_syntax_requires_an_imported_helper_named_1_which_does_not_exist_in_0_Consider_upgrading_your_version_of_0: b(2343, 1, "This_syntax_requires_an_imported_helper_named_1_which_does_not_exist_in_0_Consider_upgrading_your_ve_2343", "This syntax requires an imported helper named '{1}' which does not exist in '{0}'. Consider upgrading your version of '{0}'."),
          Type_0_does_not_satisfy_the_constraint_1: b(2344, 1, "Type_0_does_not_satisfy_the_constraint_1_2344", "Type '{0}' does not satisfy the constraint '{1}'."),
          Argument_of_type_0_is_not_assignable_to_parameter_of_type_1: b(2345, 1, "Argument_of_type_0_is_not_assignable_to_parameter_of_type_1_2345", "Argument of type '{0}' is not assignable to parameter of type '{1}'."),
          Untyped_function_calls_may_not_accept_type_arguments: b(2347, 1, "Untyped_function_calls_may_not_accept_type_arguments_2347", "Untyped function calls may not accept type arguments."),
          Value_of_type_0_is_not_callable_Did_you_mean_to_include_new: b(2348, 1, "Value_of_type_0_is_not_callable_Did_you_mean_to_include_new_2348", "Value of type '{0}' is not callable. Did you mean to include 'new'?"),
          This_expression_is_not_callable: b(2349, 1, "This_expression_is_not_callable_2349", "This expression is not callable."),
          Only_a_void_function_can_be_called_with_the_new_keyword: b(2350, 1, "Only_a_void_function_can_be_called_with_the_new_keyword_2350", "Only a void function can be called with the 'new' keyword."),
          This_expression_is_not_constructable: b(2351, 1, "This_expression_is_not_constructable_2351", "This expression is not constructable."),
          Conversion_of_type_0_to_type_1_may_be_a_mistake_because_neither_type_sufficiently_overlaps_with_the_other_If_this_was_intentional_convert_the_expression_to_unknown_first: b(2352, 1, "Conversion_of_type_0_to_type_1_may_be_a_mistake_because_neither_type_sufficiently_overlaps_with_the__2352", "Conversion of type '{0}' to type '{1}' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first."),
          Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1: b(2353, 1, "Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1_2353", "Object literal may only specify known properties, and '{0}' does not exist in type '{1}'."),
          This_syntax_requires_an_imported_helper_but_module_0_cannot_be_found: b(2354, 1, "This_syntax_requires_an_imported_helper_but_module_0_cannot_be_found_2354", "This syntax requires an imported helper but module '{0}' cannot be found."),
          A_function_whose_declared_type_is_neither_undefined_void_nor_any_must_return_a_value: b(2355, 1, "A_function_whose_declared_type_is_neither_undefined_void_nor_any_must_return_a_value_2355", "A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value."),
          An_arithmetic_operand_must_be_of_type_any_number_bigint_or_an_enum_type: b(2356, 1, "An_arithmetic_operand_must_be_of_type_any_number_bigint_or_an_enum_type_2356", "An arithmetic operand must be of type 'any', 'number', 'bigint' or an enum type."),
          The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access: b(2357, 1, "The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access_2357", "The operand of an increment or decrement operator must be a variable or a property access."),
          The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: b(2358, 1, "The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_paramete_2358", "The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter."),
          The_right_hand_side_of_an_instanceof_expression_must_be_either_of_type_any_a_class_function_or_other_type_assignable_to_the_Function_interface_type_or_an_object_type_with_a_Symbol_hasInstance_method: b(2359, 1, "The_right_hand_side_of_an_instanceof_expression_must_be_either_of_type_any_a_class_function_or_other_2359", "The right-hand side of an 'instanceof' expression must be either of type 'any', a class, function, or other type assignable to the 'Function' interface type, or an object type with a 'Symbol.hasInstance' method."),
          The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type: b(2362, 1, "The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type_2362", "The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type."),
          The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type: b(2363, 1, "The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_bigint_or_an_enum_type_2363", "The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type."),
          The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access: b(2364, 1, "The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access_2364", "The left-hand side of an assignment expression must be a variable or a property access."),
          Operator_0_cannot_be_applied_to_types_1_and_2: b(2365, 1, "Operator_0_cannot_be_applied_to_types_1_and_2_2365", "Operator '{0}' cannot be applied to types '{1}' and '{2}'."),
          Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined: b(2366, 1, "Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined_2366", "Function lacks ending return statement and return type does not include 'undefined'."),
          This_comparison_appears_to_be_unintentional_because_the_types_0_and_1_have_no_overlap: b(2367, 1, "This_comparison_appears_to_be_unintentional_because_the_types_0_and_1_have_no_overlap_2367", "This comparison appears to be unintentional because the types '{0}' and '{1}' have no overlap."),
          Type_parameter_name_cannot_be_0: b(2368, 1, "Type_parameter_name_cannot_be_0_2368", "Type parameter name cannot be '{0}'."),
          A_parameter_property_is_only_allowed_in_a_constructor_implementation: b(2369, 1, "A_parameter_property_is_only_allowed_in_a_constructor_implementation_2369", "A parameter property is only allowed in a constructor implementation."),
          A_rest_parameter_must_be_of_an_array_type: b(2370, 1, "A_rest_parameter_must_be_of_an_array_type_2370", "A rest parameter must be of an array type."),
          A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation: b(2371, 1, "A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation_2371", "A parameter initializer is only allowed in a function or constructor implementation."),
          Parameter_0_cannot_reference_itself: b(2372, 1, "Parameter_0_cannot_reference_itself_2372", "Parameter '{0}' cannot reference itself."),
          Parameter_0_cannot_reference_identifier_1_declared_after_it: b(2373, 1, "Parameter_0_cannot_reference_identifier_1_declared_after_it_2373", "Parameter '{0}' cannot reference identifier '{1}' declared after it."),
          Duplicate_index_signature_for_type_0: b(2374, 1, "Duplicate_index_signature_for_type_0_2374", "Duplicate index signature for type '{0}'."),
          Type_0_is_not_assignable_to_type_1_with_exactOptionalPropertyTypes_Colon_true_Consider_adding_undefined_to_the_types_of_the_target_s_properties: b(2375, 1, "Type_0_is_not_assignable_to_type_1_with_exactOptionalPropertyTypes_Colon_true_Consider_adding_undefi_2375", "Type '{0}' is not assignable to type '{1}' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties."),
          A_super_call_must_be_the_first_statement_in_the_constructor_to_refer_to_super_or_this_when_a_derived_class_contains_initialized_properties_parameter_properties_or_private_identifiers: b(2376, 1, "A_super_call_must_be_the_first_statement_in_the_constructor_to_refer_to_super_or_this_when_a_derived_2376", "A 'super' call must be the first statement in the constructor to refer to 'super' or 'this' when a derived class contains initialized properties, parameter properties, or private identifiers."),
          Constructors_for_derived_classes_must_contain_a_super_call: b(2377, 1, "Constructors_for_derived_classes_must_contain_a_super_call_2377", "Constructors for derived classes must contain a 'super' call."),
          A_get_accessor_must_return_a_value: b(2378, 1, "A_get_accessor_must_return_a_value_2378", "A 'get' accessor must return a value."),
          Argument_of_type_0_is_not_assignable_to_parameter_of_type_1_with_exactOptionalPropertyTypes_Colon_true_Consider_adding_undefined_to_the_types_of_the_target_s_properties: b(2379, 1, "Argument_of_type_0_is_not_assignable_to_parameter_of_type_1_with_exactOptionalPropertyTypes_Colon_tr_2379", "Argument of type '{0}' is not assignable to parameter of type '{1}' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties."),
          Overload_signatures_must_all_be_exported_or_non_exported: b(2383, 1, "Overload_signatures_must_all_be_exported_or_non_exported_2383", "Overload signatures must all be exported or non-exported."),
          Overload_signatures_must_all_be_ambient_or_non_ambient: b(2384, 1, "Overload_signatures_must_all_be_ambient_or_non_ambient_2384", "Overload signatures must all be ambient or non-ambient."),
          Overload_signatures_must_all_be_public_private_or_protected: b(2385, 1, "Overload_signatures_must_all_be_public_private_or_protected_2385", "Overload signatures must all be public, private or protected."),
          Overload_signatures_must_all_be_optional_or_required: b(2386, 1, "Overload_signatures_must_all_be_optional_or_required_2386", "Overload signatures must all be optional or required."),
          Function_overload_must_be_static: b(2387, 1, "Function_overload_must_be_static_2387", "Function overload must be static."),
          Function_overload_must_not_be_static: b(2388, 1, "Function_overload_must_not_be_static_2388", "Function overload must not be static."),
          Function_implementation_name_must_be_0: b(2389, 1, "Function_implementation_name_must_be_0_2389", "Function implementation name must be '{0}'."),
          Constructor_implementation_is_missing: b(2390, 1, "Constructor_implementation_is_missing_2390", "Constructor implementation is missing."),
          Function_implementation_is_missing_or_not_immediately_following_the_declaration: b(2391, 1, "Function_implementation_is_missing_or_not_immediately_following_the_declaration_2391", "Function implementation is missing or not immediately following the declaration."),
          Multiple_constructor_implementations_are_not_allowed: b(2392, 1, "Multiple_constructor_implementations_are_not_allowed_2392", "Multiple constructor implementations are not allowed."),
          Duplicate_function_implementation: b(2393, 1, "Duplicate_function_implementation_2393", "Duplicate function implementation."),
          This_overload_signature_is_not_compatible_with_its_implementation_signature: b(2394, 1, "This_overload_signature_is_not_compatible_with_its_implementation_signature_2394", "This overload signature is not compatible with its implementation signature."),
          Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local: b(2395, 1, "Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local_2395", "Individual declarations in merged declaration '{0}' must be all exported or all local."),
          Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters: b(2396, 1, "Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters_2396", "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters."),
          Declaration_name_conflicts_with_built_in_global_identifier_0: b(2397, 1, "Declaration_name_conflicts_with_built_in_global_identifier_0_2397", "Declaration name conflicts with built-in global identifier '{0}'."),
          constructor_cannot_be_used_as_a_parameter_property_name: b(2398, 1, "constructor_cannot_be_used_as_a_parameter_property_name_2398", "'constructor' cannot be used as a parameter property name."),
          Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference: b(2399, 1, "Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference_2399", "Duplicate identifier '_this'. Compiler uses variable declaration '_this' to capture 'this' reference."),
          Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference: b(2400, 1, "Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference_2400", "Expression resolves to variable declaration '_this' that compiler uses to capture 'this' reference."),
          A_super_call_must_be_a_root_level_statement_within_a_constructor_of_a_derived_class_that_contains_initialized_properties_parameter_properties_or_private_identifiers: b(2401, 1, "A_super_call_must_be_a_root_level_statement_within_a_constructor_of_a_derived_class_that_contains_in_2401", "A 'super' call must be a root-level statement within a constructor of a derived class that contains initialized properties, parameter properties, or private identifiers."),
          Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference: b(2402, 1, "Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference_2402", "Expression resolves to '_super' that compiler uses to capture base class reference."),
          Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2: b(2403, 1, "Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_t_2403", "Subsequent variable declarations must have the same type.  Variable '{0}' must be of type '{1}', but here has type '{2}'."),
          The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation: b(2404, 1, "The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation_2404", "The left-hand side of a 'for...in' statement cannot use a type annotation."),
          The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any: b(2405, 1, "The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any_2405", "The left-hand side of a 'for...in' statement must be of type 'string' or 'any'."),
          The_left_hand_side_of_a_for_in_statement_must_be_a_variable_or_a_property_access: b(2406, 1, "The_left_hand_side_of_a_for_in_statement_must_be_a_variable_or_a_property_access_2406", "The left-hand side of a 'for...in' statement must be a variable or a property access."),
          The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter_but_here_has_type_0: b(2407, 1, "The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter_but_2407", "The right-hand side of a 'for...in' statement must be of type 'any', an object type or a type parameter, but here has type '{0}'."),
          Setters_cannot_return_a_value: b(2408, 1, "Setters_cannot_return_a_value_2408", "Setters cannot return a value."),
          Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class: b(2409, 1, "Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class_2409", "Return type of constructor signature must be assignable to the instance type of the class."),
          The_with_statement_is_not_supported_All_symbols_in_a_with_block_will_have_type_any: b(2410, 1, "The_with_statement_is_not_supported_All_symbols_in_a_with_block_will_have_type_any_2410", "The 'with' statement is not supported. All symbols in a 'with' block will have type 'any'."),
          Type_0_is_not_assignable_to_type_1_with_exactOptionalPropertyTypes_Colon_true_Consider_adding_undefined_to_the_type_of_the_target: b(2412, 1, "Type_0_is_not_assignable_to_type_1_with_exactOptionalPropertyTypes_Colon_true_Consider_adding_undefi_2412", "Type '{0}' is not assignable to type '{1}' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the type of the target."),
          Property_0_of_type_1_is_not_assignable_to_2_index_type_3: b(2411, 1, "Property_0_of_type_1_is_not_assignable_to_2_index_type_3_2411", "Property '{0}' of type '{1}' is not assignable to '{2}' index type '{3}'."),
          _0_index_type_1_is_not_assignable_to_2_index_type_3: b(2413, 1, "_0_index_type_1_is_not_assignable_to_2_index_type_3_2413", "'{0}' index type '{1}' is not assignable to '{2}' index type '{3}'."),
          Class_name_cannot_be_0: b(2414, 1, "Class_name_cannot_be_0_2414", "Class name cannot be '{0}'."),
          Class_0_incorrectly_extends_base_class_1: b(2415, 1, "Class_0_incorrectly_extends_base_class_1_2415", "Class '{0}' incorrectly extends base class '{1}'."),
          Property_0_in_type_1_is_not_assignable_to_the_same_property_in_base_type_2: b(2416, 1, "Property_0_in_type_1_is_not_assignable_to_the_same_property_in_base_type_2_2416", "Property '{0}' in type '{1}' is not assignable to the same property in base type '{2}'."),
          Class_static_side_0_incorrectly_extends_base_class_static_side_1: b(2417, 1, "Class_static_side_0_incorrectly_extends_base_class_static_side_1_2417", "Class static side '{0}' incorrectly extends base class static side '{1}'."),
          Type_of_computed_property_s_value_is_0_which_is_not_assignable_to_type_1: b(2418, 1, "Type_of_computed_property_s_value_is_0_which_is_not_assignable_to_type_1_2418", "Type of computed property's value is '{0}', which is not assignable to type '{1}'."),
          Types_of_construct_signatures_are_incompatible: b(2419, 1, "Types_of_construct_signatures_are_incompatible_2419", "Types of construct signatures are incompatible."),
          Class_0_incorrectly_implements_interface_1: b(2420, 1, "Class_0_incorrectly_implements_interface_1_2420", "Class '{0}' incorrectly implements interface '{1}'."),
          A_class_can_only_implement_an_object_type_or_intersection_of_object_types_with_statically_known_members: b(2422, 1, "A_class_can_only_implement_an_object_type_or_intersection_of_object_types_with_statically_known_memb_2422", "A class can only implement an object type or intersection of object types with statically known members."),
          Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor: b(2423, 1, "Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_access_2423", "Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member accessor."),
          Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function: b(2425, 1, "Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_functi_2425", "Class '{0}' defines instance member property '{1}', but extended class '{2}' defines it as instance member function."),
          Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function: b(2426, 1, "Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_functi_2426", "Class '{0}' defines instance member accessor '{1}', but extended class '{2}' defines it as instance member function."),
          Interface_name_cannot_be_0: b(2427, 1, "Interface_name_cannot_be_0_2427", "Interface name cannot be '{0}'."),
          All_declarations_of_0_must_have_identical_type_parameters: b(2428, 1, "All_declarations_of_0_must_have_identical_type_parameters_2428", "All declarations of '{0}' must have identical type parameters."),
          Interface_0_incorrectly_extends_interface_1: b(2430, 1, "Interface_0_incorrectly_extends_interface_1_2430", "Interface '{0}' incorrectly extends interface '{1}'."),
          Enum_name_cannot_be_0: b(2431, 1, "Enum_name_cannot_be_0_2431", "Enum name cannot be '{0}'."),
          In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element: b(2432, 1, "In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enu_2432", "In an enum with multiple declarations, only one declaration can omit an initializer for its first enum element."),
          A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged: b(2433, 1, "A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merg_2433", "A namespace declaration cannot be in a different file from a class or function with which it is merged."),
          A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged: b(2434, 1, "A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged_2434", "A namespace declaration cannot be located prior to a class or function with which it is merged."),
          Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces: b(2435, 1, "Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces_2435", "Ambient modules cannot be nested in other modules or namespaces."),
          Ambient_module_declaration_cannot_specify_relative_module_name: b(2436, 1, "Ambient_module_declaration_cannot_specify_relative_module_name_2436", "Ambient module declaration cannot specify relative module name."),
          Module_0_is_hidden_by_a_local_declaration_with_the_same_name: b(2437, 1, "Module_0_is_hidden_by_a_local_declaration_with_the_same_name_2437", "Module '{0}' is hidden by a local declaration with the same name."),
          Import_name_cannot_be_0: b(2438, 1, "Import_name_cannot_be_0_2438", "Import name cannot be '{0}'."),
          Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relative_module_name: b(2439, 1, "Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relati_2439", "Import or export declaration in an ambient module declaration cannot reference module through relative module name."),
          Import_declaration_conflicts_with_local_declaration_of_0: b(2440, 1, "Import_declaration_conflicts_with_local_declaration_of_0_2440", "Import declaration conflicts with local declaration of '{0}'."),
          Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module: b(2441, 1, "Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_2441", "Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of a module."),
          Types_have_separate_declarations_of_a_private_property_0: b(2442, 1, "Types_have_separate_declarations_of_a_private_property_0_2442", "Types have separate declarations of a private property '{0}'."),
          Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2: b(2443, 1, "Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2_2443", "Property '{0}' is protected but type '{1}' is not a class derived from '{2}'."),
          Property_0_is_protected_in_type_1_but_public_in_type_2: b(2444, 1, "Property_0_is_protected_in_type_1_but_public_in_type_2_2444", "Property '{0}' is protected in type '{1}' but public in type '{2}'."),
          Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses: b(2445, 1, "Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses_2445", "Property '{0}' is protected and only accessible within class '{1}' and its subclasses."),
          Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1_This_is_an_instance_of_class_2: b(2446, 1, "Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1_This_is_an_instance_of_cl_2446", "Property '{0}' is protected and only accessible through an instance of class '{1}'. This is an instance of class '{2}'."),
          The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead: b(2447, 1, "The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead_2447", "The '{0}' operator is not allowed for boolean types. Consider using '{1}' instead."),
          Block_scoped_variable_0_used_before_its_declaration: b(2448, 1, "Block_scoped_variable_0_used_before_its_declaration_2448", "Block-scoped variable '{0}' used before its declaration."),
          Class_0_used_before_its_declaration: b(2449, 1, "Class_0_used_before_its_declaration_2449", "Class '{0}' used before its declaration."),
          Enum_0_used_before_its_declaration: b(2450, 1, "Enum_0_used_before_its_declaration_2450", "Enum '{0}' used before its declaration."),
          Cannot_redeclare_block_scoped_variable_0: b(2451, 1, "Cannot_redeclare_block_scoped_variable_0_2451", "Cannot redeclare block-scoped variable '{0}'."),
          An_enum_member_cannot_have_a_numeric_name: b(2452, 1, "An_enum_member_cannot_have_a_numeric_name_2452", "An enum member cannot have a numeric name."),
          Variable_0_is_used_before_being_assigned: b(2454, 1, "Variable_0_is_used_before_being_assigned_2454", "Variable '{0}' is used before being assigned."),
          Type_alias_0_circularly_references_itself: b(2456, 1, "Type_alias_0_circularly_references_itself_2456", "Type alias '{0}' circularly references itself."),
          Type_alias_name_cannot_be_0: b(2457, 1, "Type_alias_name_cannot_be_0_2457", "Type alias name cannot be '{0}'."),
          An_AMD_module_cannot_have_multiple_name_assignments: b(2458, 1, "An_AMD_module_cannot_have_multiple_name_assignments_2458", "An AMD module cannot have multiple name assignments."),
          Module_0_declares_1_locally_but_it_is_not_exported: b(2459, 1, "Module_0_declares_1_locally_but_it_is_not_exported_2459", "Module '{0}' declares '{1}' locally, but it is not exported."),
          Module_0_declares_1_locally_but_it_is_exported_as_2: b(2460, 1, "Module_0_declares_1_locally_but_it_is_exported_as_2_2460", "Module '{0}' declares '{1}' locally, but it is exported as '{2}'."),
          Type_0_is_not_an_array_type: b(2461, 1, "Type_0_is_not_an_array_type_2461", "Type '{0}' is not an array type."),
          A_rest_element_must_be_last_in_a_destructuring_pattern: b(2462, 1, "A_rest_element_must_be_last_in_a_destructuring_pattern_2462", "A rest element must be last in a destructuring pattern."),
          A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature: b(2463, 1, "A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature_2463", "A binding pattern parameter cannot be optional in an implementation signature."),
          A_computed_property_name_must_be_of_type_string_number_symbol_or_any: b(2464, 1, "A_computed_property_name_must_be_of_type_string_number_symbol_or_any_2464", "A computed property name must be of type 'string', 'number', 'symbol', or 'any'."),
          this_cannot_be_referenced_in_a_computed_property_name: b(2465, 1, "this_cannot_be_referenced_in_a_computed_property_name_2465", "'this' cannot be referenced in a computed property name."),
          super_cannot_be_referenced_in_a_computed_property_name: b(2466, 1, "super_cannot_be_referenced_in_a_computed_property_name_2466", "'super' cannot be referenced in a computed property name."),
          A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type: b(2467, 1, "A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type_2467", "A computed property name cannot reference a type parameter from its containing type."),
          Cannot_find_global_value_0: b(2468, 1, "Cannot_find_global_value_0_2468", "Cannot find global value '{0}'."),
          The_0_operator_cannot_be_applied_to_type_symbol: b(2469, 1, "The_0_operator_cannot_be_applied_to_type_symbol_2469", "The '{0}' operator cannot be applied to type 'symbol'."),
          Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher: b(2472, 1, "Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher_2472", "Spread operator in 'new' expressions is only available when targeting ECMAScript 5 and higher."),
          Enum_declarations_must_all_be_const_or_non_const: b(2473, 1, "Enum_declarations_must_all_be_const_or_non_const_2473", "Enum declarations must all be const or non-const."),
          const_enum_member_initializers_must_be_constant_expressions: b(2474, 1, "const_enum_member_initializers_must_be_constant_expressions_2474", "const enum member initializers must be constant expressions."),
          const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment_or_type_query: b(2475, 1, "const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_im_2475", "'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment or type query."),
          A_const_enum_member_can_only_be_accessed_using_a_string_literal: b(2476, 1, "A_const_enum_member_can_only_be_accessed_using_a_string_literal_2476", "A const enum member can only be accessed using a string literal."),
          const_enum_member_initializer_was_evaluated_to_a_non_finite_value: b(2477, 1, "const_enum_member_initializer_was_evaluated_to_a_non_finite_value_2477", "'const' enum member initializer was evaluated to a non-finite value."),
          const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN: b(2478, 1, "const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN_2478", "'const' enum member initializer was evaluated to disallowed value 'NaN'."),
          let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations: b(2480, 1, "let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations_2480", "'let' is not allowed to be used as a name in 'let' or 'const' declarations."),
          Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1: b(2481, 1, "Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1_2481", "Cannot initialize outer scoped variable '{0}' in the same scope as block scoped declaration '{1}'."),
          The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation: b(2483, 1, "The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation_2483", "The left-hand side of a 'for...of' statement cannot use a type annotation."),
          Export_declaration_conflicts_with_exported_declaration_of_0: b(2484, 1, "Export_declaration_conflicts_with_exported_declaration_of_0_2484", "Export declaration conflicts with exported declaration of '{0}'."),
          The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access: b(2487, 1, "The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access_2487", "The left-hand side of a 'for...of' statement must be a variable or a property access."),
          Type_0_must_have_a_Symbol_iterator_method_that_returns_an_iterator: b(2488, 1, "Type_0_must_have_a_Symbol_iterator_method_that_returns_an_iterator_2488", "Type '{0}' must have a '[Symbol.iterator]()' method that returns an iterator."),
          An_iterator_must_have_a_next_method: b(2489, 1, "An_iterator_must_have_a_next_method_2489", "An iterator must have a 'next()' method."),
          The_type_returned_by_the_0_method_of_an_iterator_must_have_a_value_property: b(2490, 1, "The_type_returned_by_the_0_method_of_an_iterator_must_have_a_value_property_2490", "The type returned by the '{0}()' method of an iterator must have a 'value' property."),
          The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern: b(2491, 1, "The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern_2491", "The left-hand side of a 'for...in' statement cannot be a destructuring pattern."),
          Cannot_redeclare_identifier_0_in_catch_clause: b(2492, 1, "Cannot_redeclare_identifier_0_in_catch_clause_2492", "Cannot redeclare identifier '{0}' in catch clause."),
          Tuple_type_0_of_length_1_has_no_element_at_index_2: b(2493, 1, "Tuple_type_0_of_length_1_has_no_element_at_index_2_2493", "Tuple type '{0}' of length '{1}' has no element at index '{2}'."),
          Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher: b(2494, 1, "Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher_2494", "Using a string in a 'for...of' statement is only supported in ECMAScript 5 and higher."),
          Type_0_is_not_an_array_type_or_a_string_type: b(2495, 1, "Type_0_is_not_an_array_type_or_a_string_type_2495", "Type '{0}' is not an array type or a string type."),
          The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_standard_function_expression: b(2496, 1, "The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_stand_2496", "The 'arguments' object cannot be referenced in an arrow function in ES3 and ES5. Consider using a standard function expression."),
          This_module_can_only_be_referenced_with_ECMAScript_imports_Slashexports_by_turning_on_the_0_flag_and_referencing_its_default_export: b(2497, 1, "This_module_can_only_be_referenced_with_ECMAScript_imports_Slashexports_by_turning_on_the_0_flag_and_2497", "This module can only be referenced with ECMAScript imports/exports by turning on the '{0}' flag and referencing its default export."),
          Module_0_uses_export_and_cannot_be_used_with_export_Asterisk: b(2498, 1, "Module_0_uses_export_and_cannot_be_used_with_export_Asterisk_2498", "Module '{0}' uses 'export =' and cannot be used with 'export *'."),
          An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments: b(2499, 1, "An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments_2499", "An interface can only extend an identifier/qualified-name with optional type arguments."),
          A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments: b(2500, 1, "A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments_2500", "A class can only implement an identifier/qualified-name with optional type arguments."),
          A_rest_element_cannot_contain_a_binding_pattern: b(2501, 1, "A_rest_element_cannot_contain_a_binding_pattern_2501", "A rest element cannot contain a binding pattern."),
          _0_is_referenced_directly_or_indirectly_in_its_own_type_annotation: b(2502, 1, "_0_is_referenced_directly_or_indirectly_in_its_own_type_annotation_2502", "'{0}' is referenced directly or indirectly in its own type annotation."),
          Cannot_find_namespace_0: b(2503, 1, "Cannot_find_namespace_0_2503", "Cannot find namespace '{0}'."),
          Type_0_must_have_a_Symbol_asyncIterator_method_that_returns_an_async_iterator: b(2504, 1, "Type_0_must_have_a_Symbol_asyncIterator_method_that_returns_an_async_iterator_2504", "Type '{0}' must have a '[Symbol.asyncIterator]()' method that returns an async iterator."),
          A_generator_cannot_have_a_void_type_annotation: b(2505, 1, "A_generator_cannot_have_a_void_type_annotation_2505", "A generator cannot have a 'void' type annotation."),
          _0_is_referenced_directly_or_indirectly_in_its_own_base_expression: b(2506, 1, "_0_is_referenced_directly_or_indirectly_in_its_own_base_expression_2506", "'{0}' is referenced directly or indirectly in its own base expression."),
          Type_0_is_not_a_constructor_function_type: b(2507, 1, "Type_0_is_not_a_constructor_function_type_2507", "Type '{0}' is not a constructor function type."),
          No_base_constructor_has_the_specified_number_of_type_arguments: b(2508, 1, "No_base_constructor_has_the_specified_number_of_type_arguments_2508", "No base constructor has the specified number of type arguments."),
          Base_constructor_return_type_0_is_not_an_object_type_or_intersection_of_object_types_with_statically_known_members: b(2509, 1, "Base_constructor_return_type_0_is_not_an_object_type_or_intersection_of_object_types_with_statically_2509", "Base constructor return type '{0}' is not an object type or intersection of object types with statically known members."),
          Base_constructors_must_all_have_the_same_return_type: b(2510, 1, "Base_constructors_must_all_have_the_same_return_type_2510", "Base constructors must all have the same return type."),
          Cannot_create_an_instance_of_an_abstract_class: b(2511, 1, "Cannot_create_an_instance_of_an_abstract_class_2511", "Cannot create an instance of an abstract class."),
          Overload_signatures_must_all_be_abstract_or_non_abstract: b(2512, 1, "Overload_signatures_must_all_be_abstract_or_non_abstract_2512", "Overload signatures must all be abstract or non-abstract."),
          Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression: b(2513, 1, "Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression_2513", "Abstract method '{0}' in class '{1}' cannot be accessed via super expression."),
          A_tuple_type_cannot_be_indexed_with_a_negative_value: b(2514, 1, "A_tuple_type_cannot_be_indexed_with_a_negative_value_2514", "A tuple type cannot be indexed with a negative value."),
          Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2: b(2515, 1, "Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2_2515", "Non-abstract class '{0}' does not implement inherited abstract member '{1}' from class '{2}'."),
          All_declarations_of_an_abstract_method_must_be_consecutive: b(2516, 1, "All_declarations_of_an_abstract_method_must_be_consecutive_2516", "All declarations of an abstract method must be consecutive."),
          Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type: b(2517, 1, "Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type_2517", "Cannot assign an abstract constructor type to a non-abstract constructor type."),
          A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard: b(2518, 1, "A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard_2518", "A 'this'-based type guard is not compatible with a parameter-based type guard."),
          An_async_iterator_must_have_a_next_method: b(2519, 1, "An_async_iterator_must_have_a_next_method_2519", "An async iterator must have a 'next()' method."),
          Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions: b(2520, 1, "Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions_2520", "Duplicate identifier '{0}'. Compiler uses declaration '{1}' to support async functions."),
          The_arguments_object_cannot_be_referenced_in_an_async_function_or_method_in_ES3_and_ES5_Consider_using_a_standard_function_or_method: b(2522, 1, "The_arguments_object_cannot_be_referenced_in_an_async_function_or_method_in_ES3_and_ES5_Consider_usi_2522", "The 'arguments' object cannot be referenced in an async function or method in ES3 and ES5. Consider using a standard function or method."),
          yield_expressions_cannot_be_used_in_a_parameter_initializer: b(2523, 1, "yield_expressions_cannot_be_used_in_a_parameter_initializer_2523", "'yield' expressions cannot be used in a parameter initializer."),
          await_expressions_cannot_be_used_in_a_parameter_initializer: b(2524, 1, "await_expressions_cannot_be_used_in_a_parameter_initializer_2524", "'await' expressions cannot be used in a parameter initializer."),
          Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value: b(2525, 1, "Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value_2525", "Initializer provides no value for this binding element and the binding element has no default value."),
          A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface: b(2526, 1, "A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface_2526", "A 'this' type is available only in a non-static member of a class or interface."),
          The_inferred_type_of_0_references_an_inaccessible_1_type_A_type_annotation_is_necessary: b(2527, 1, "The_inferred_type_of_0_references_an_inaccessible_1_type_A_type_annotation_is_necessary_2527", "The inferred type of '{0}' references an inaccessible '{1}' type. A type annotation is necessary."),
          A_module_cannot_have_multiple_default_exports: b(2528, 1, "A_module_cannot_have_multiple_default_exports_2528", "A module cannot have multiple default exports."),
          Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_functions: b(2529, 1, "Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_func_2529", "Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of a module containing async functions."),
          Property_0_is_incompatible_with_index_signature: b(2530, 1, "Property_0_is_incompatible_with_index_signature_2530", "Property '{0}' is incompatible with index signature."),
          Object_is_possibly_null: b(2531, 1, "Object_is_possibly_null_2531", "Object is possibly 'null'."),
          Object_is_possibly_undefined: b(2532, 1, "Object_is_possibly_undefined_2532", "Object is possibly 'undefined'."),
          Object_is_possibly_null_or_undefined: b(2533, 1, "Object_is_possibly_null_or_undefined_2533", "Object is possibly 'null' or 'undefined'."),
          A_function_returning_never_cannot_have_a_reachable_end_point: b(2534, 1, "A_function_returning_never_cannot_have_a_reachable_end_point_2534", "A function returning 'never' cannot have a reachable end point."),
          Type_0_cannot_be_used_to_index_type_1: b(2536, 1, "Type_0_cannot_be_used_to_index_type_1_2536", "Type '{0}' cannot be used to index type '{1}'."),
          Type_0_has_no_matching_index_signature_for_type_1: b(2537, 1, "Type_0_has_no_matching_index_signature_for_type_1_2537", "Type '{0}' has no matching index signature for type '{1}'."),
          Type_0_cannot_be_used_as_an_index_type: b(2538, 1, "Type_0_cannot_be_used_as_an_index_type_2538", "Type '{0}' cannot be used as an index type."),
          Cannot_assign_to_0_because_it_is_not_a_variable: b(2539, 1, "Cannot_assign_to_0_because_it_is_not_a_variable_2539", "Cannot assign to '{0}' because it is not a variable."),
          Cannot_assign_to_0_because_it_is_a_read_only_property: b(2540, 1, "Cannot_assign_to_0_because_it_is_a_read_only_property_2540", "Cannot assign to '{0}' because it is a read-only property."),
          Index_signature_in_type_0_only_permits_reading: b(2542, 1, "Index_signature_in_type_0_only_permits_reading_2542", "Index signature in type '{0}' only permits reading."),
          Duplicate_identifier_newTarget_Compiler_uses_variable_declaration_newTarget_to_capture_new_target_meta_property_reference: b(2543, 1, "Duplicate_identifier_newTarget_Compiler_uses_variable_declaration_newTarget_to_capture_new_target_me_2543", "Duplicate identifier '_newTarget'. Compiler uses variable declaration '_newTarget' to capture 'new.target' meta-property reference."),
          Expression_resolves_to_variable_declaration_newTarget_that_compiler_uses_to_capture_new_target_meta_property_reference: b(2544, 1, "Expression_resolves_to_variable_declaration_newTarget_that_compiler_uses_to_capture_new_target_meta__2544", "Expression resolves to variable declaration '_newTarget' that compiler uses to capture 'new.target' meta-property reference."),
          A_mixin_class_must_have_a_constructor_with_a_single_rest_parameter_of_type_any: b(2545, 1, "A_mixin_class_must_have_a_constructor_with_a_single_rest_parameter_of_type_any_2545", "A mixin class must have a constructor with a single rest parameter of type 'any[]'."),
          The_type_returned_by_the_0_method_of_an_async_iterator_must_be_a_promise_for_a_type_with_a_value_property: b(2547, 1, "The_type_returned_by_the_0_method_of_an_async_iterator_must_be_a_promise_for_a_type_with_a_value_pro_2547", "The type returned by the '{0}()' method of an async iterator must be a promise for a type with a 'value' property."),
          Type_0_is_not_an_array_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator: b(2548, 1, "Type_0_is_not_an_array_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator_2548", "Type '{0}' is not an array type or does not have a '[Symbol.iterator]()' method that returns an iterator."),
          Type_0_is_not_an_array_type_or_a_string_type_or_does_not_have_a_Symbol_iterator_method_that_returns_an_iterator: b(2549, 1, "Type_0_is_not_an_array_type_or_a_string_type_or_does_not_have_a_Symbol_iterator_method_that_returns__2549", "Type '{0}' is not an array type or a string type or does not have a '[Symbol.iterator]()' method that returns an iterator."),
          Property_0_does_not_exist_on_type_1_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_2_or_later: b(2550, 1, "Property_0_does_not_exist_on_type_1_Do_you_need_to_change_your_target_library_Try_changing_the_lib_c_2550", "Property '{0}' does not exist on type '{1}'. Do you need to change your target library? Try changing the 'lib' compiler option to '{2}' or later."),
          Property_0_does_not_exist_on_type_1_Did_you_mean_2: b(2551, 1, "Property_0_does_not_exist_on_type_1_Did_you_mean_2_2551", "Property '{0}' does not exist on type '{1}'. Did you mean '{2}'?"),
          Cannot_find_name_0_Did_you_mean_1: b(2552, 1, "Cannot_find_name_0_Did_you_mean_1_2552", "Cannot find name '{0}'. Did you mean '{1}'?"),
          Computed_values_are_not_permitted_in_an_enum_with_string_valued_members: b(2553, 1, "Computed_values_are_not_permitted_in_an_enum_with_string_valued_members_2553", "Computed values are not permitted in an enum with string valued members."),
          Expected_0_arguments_but_got_1: b(2554, 1, "Expected_0_arguments_but_got_1_2554", "Expected {0} arguments, but got {1}."),
          Expected_at_least_0_arguments_but_got_1: b(2555, 1, "Expected_at_least_0_arguments_but_got_1_2555", "Expected at least {0} arguments, but got {1}."),
          A_spread_argument_must_either_have_a_tuple_type_or_be_passed_to_a_rest_parameter: b(2556, 1, "A_spread_argument_must_either_have_a_tuple_type_or_be_passed_to_a_rest_parameter_2556", "A spread argument must either have a tuple type or be passed to a rest parameter."),
          Expected_0_type_arguments_but_got_1: b(2558, 1, "Expected_0_type_arguments_but_got_1_2558", "Expected {0} type arguments, but got {1}."),
          Type_0_has_no_properties_in_common_with_type_1: b(2559, 1, "Type_0_has_no_properties_in_common_with_type_1_2559", "Type '{0}' has no properties in common with type '{1}'."),
          Value_of_type_0_has_no_properties_in_common_with_type_1_Did_you_mean_to_call_it: b(2560, 1, "Value_of_type_0_has_no_properties_in_common_with_type_1_Did_you_mean_to_call_it_2560", "Value of type '{0}' has no properties in common with type '{1}'. Did you mean to call it?"),
          Object_literal_may_only_specify_known_properties_but_0_does_not_exist_in_type_1_Did_you_mean_to_write_2: b(2561, 1, "Object_literal_may_only_specify_known_properties_but_0_does_not_exist_in_type_1_Did_you_mean_to_writ_2561", "Object literal may only specify known properties, but '{0}' does not exist in type '{1}'. Did you mean to write '{2}'?"),
          Base_class_expressions_cannot_reference_class_type_parameters: b(2562, 1, "Base_class_expressions_cannot_reference_class_type_parameters_2562", "Base class expressions cannot reference class type parameters."),
          The_containing_function_or_module_body_is_too_large_for_control_flow_analysis: b(2563, 1, "The_containing_function_or_module_body_is_too_large_for_control_flow_analysis_2563", "The containing function or module body is too large for control flow analysis."),
          Property_0_has_no_initializer_and_is_not_definitely_assigned_in_the_constructor: b(2564, 1, "Property_0_has_no_initializer_and_is_not_definitely_assigned_in_the_constructor_2564", "Property '{0}' has no initializer and is not definitely assigned in the constructor."),
          Property_0_is_used_before_being_assigned: b(2565, 1, "Property_0_is_used_before_being_assigned_2565", "Property '{0}' is used before being assigned."),
          A_rest_element_cannot_have_a_property_name: b(2566, 1, "A_rest_element_cannot_have_a_property_name_2566", "A rest element cannot have a property name."),
          Enum_declarations_can_only_merge_with_namespace_or_other_enum_declarations: b(2567, 1, "Enum_declarations_can_only_merge_with_namespace_or_other_enum_declarations_2567", "Enum declarations can only merge with namespace or other enum declarations."),
          Property_0_may_not_exist_on_type_1_Did_you_mean_2: b(2568, 1, "Property_0_may_not_exist_on_type_1_Did_you_mean_2_2568", "Property '{0}' may not exist on type '{1}'. Did you mean '{2}'?"),
          Could_not_find_name_0_Did_you_mean_1: b(2570, 1, "Could_not_find_name_0_Did_you_mean_1_2570", "Could not find name '{0}'. Did you mean '{1}'?"),
          Object_is_of_type_unknown: b(2571, 1, "Object_is_of_type_unknown_2571", "Object is of type 'unknown'."),
          A_rest_element_type_must_be_an_array_type: b(2574, 1, "A_rest_element_type_must_be_an_array_type_2574", "A rest element type must be an array type."),
          No_overload_expects_0_arguments_but_overloads_do_exist_that_expect_either_1_or_2_arguments: b(2575, 1, "No_overload_expects_0_arguments_but_overloads_do_exist_that_expect_either_1_or_2_arguments_2575", "No overload expects {0} arguments, but overloads do exist that expect either {1} or {2} arguments."),
          Property_0_does_not_exist_on_type_1_Did_you_mean_to_access_the_static_member_2_instead: b(2576, 1, "Property_0_does_not_exist_on_type_1_Did_you_mean_to_access_the_static_member_2_instead_2576", "Property '{0}' does not exist on type '{1}'. Did you mean to access the static member '{2}' instead?"),
          Return_type_annotation_circularly_references_itself: b(2577, 1, "Return_type_annotation_circularly_references_itself_2577", "Return type annotation circularly references itself."),
          Unused_ts_expect_error_directive: b(2578, 1, "Unused_ts_expect_error_directive_2578", "Unused '@ts-expect-error' directive."),
          Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_save_dev_types_Slashnode: b(2580, 1, "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_save_dev_types_Slashno_2580", "Cannot find name '{0}'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`."),
          Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_save_dev_types_Slashjquery: b(2581, 1, "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_save_dev_types_Slash_2581", "Cannot find name '{0}'. Do you need to install type definitions for jQuery? Try `npm i --save-dev @types/jquery`."),
          Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_save_dev_types_Slashjest_or_npm_i_save_dev_types_Slashmocha: b(2582, 1, "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_save_dev_type_2582", "Cannot find name '{0}'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`."),
          Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_1_or_later: b(2583, 1, "Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_2583", "Cannot find name '{0}'. Do you need to change your target library? Try changing the 'lib' compiler option to '{1}' or later."),
          Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_include_dom: b(2584, 1, "Cannot_find_name_0_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_2584", "Cannot find name '{0}'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'."),
          _0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Do_you_need_to_change_your_target_library_Try_changing_the_lib_compiler_option_to_es2015_or_later: b(2585, 1, "_0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Do_you_need_to_change_your_target_library_2585", "'{0}' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the 'lib' compiler option to es2015 or later."),
          Cannot_assign_to_0_because_it_is_a_constant: b(2588, 1, "Cannot_assign_to_0_because_it_is_a_constant_2588", "Cannot assign to '{0}' because it is a constant."),
          Type_instantiation_is_excessively_deep_and_possibly_infinite: b(2589, 1, "Type_instantiation_is_excessively_deep_and_possibly_infinite_2589", "Type instantiation is excessively deep and possibly infinite."),
          Expression_produces_a_union_type_that_is_too_complex_to_represent: b(2590, 1, "Expression_produces_a_union_type_that_is_too_complex_to_represent_2590", "Expression produces a union type that is too complex to represent."),
          Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_save_dev_types_Slashnode_and_then_add_node_to_the_types_field_in_your_tsconfig: b(2591, 1, "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_node_Try_npm_i_save_dev_types_Slashno_2591", "Cannot find name '{0}'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node` and then add 'node' to the types field in your tsconfig."),
          Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_save_dev_types_Slashjquery_and_then_add_jquery_to_the_types_field_in_your_tsconfig: b(2592, 1, "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_jQuery_Try_npm_i_save_dev_types_Slash_2592", "Cannot find name '{0}'. Do you need to install type definitions for jQuery? Try `npm i --save-dev @types/jquery` and then add 'jquery' to the types field in your tsconfig."),
          Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_save_dev_types_Slashjest_or_npm_i_save_dev_types_Slashmocha_and_then_add_jest_or_mocha_to_the_types_field_in_your_tsconfig: b(2593, 1, "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_a_test_runner_Try_npm_i_save_dev_type_2593", "Cannot find name '{0}'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha` and then add 'jest' or 'mocha' to the types field in your tsconfig."),
          This_module_is_declared_with_export_and_can_only_be_used_with_a_default_import_when_using_the_0_flag: b(2594, 1, "This_module_is_declared_with_export_and_can_only_be_used_with_a_default_import_when_using_the_0_flag_2594", "This module is declared with 'export =', and can only be used with a default import when using the '{0}' flag."),
          _0_can_only_be_imported_by_using_a_default_import: b(2595, 1, "_0_can_only_be_imported_by_using_a_default_import_2595", "'{0}' can only be imported by using a default import."),
          _0_can_only_be_imported_by_turning_on_the_esModuleInterop_flag_and_using_a_default_import: b(2596, 1, "_0_can_only_be_imported_by_turning_on_the_esModuleInterop_flag_and_using_a_default_import_2596", "'{0}' can only be imported by turning on the 'esModuleInterop' flag and using a default import."),
          _0_can_only_be_imported_by_using_a_require_call_or_by_using_a_default_import: b(2597, 1, "_0_can_only_be_imported_by_using_a_require_call_or_by_using_a_default_import_2597", "'{0}' can only be imported by using a 'require' call or by using a default import."),
          _0_can_only_be_imported_by_using_a_require_call_or_by_turning_on_the_esModuleInterop_flag_and_using_a_default_import: b(2598, 1, "_0_can_only_be_imported_by_using_a_require_call_or_by_turning_on_the_esModuleInterop_flag_and_using__2598", "'{0}' can only be imported by using a 'require' call or by turning on the 'esModuleInterop' flag and using a default import."),
          JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist: b(2602, 1, "JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist_2602", "JSX element implicitly has type 'any' because the global type 'JSX.Element' does not exist."),
          Property_0_in_type_1_is_not_assignable_to_type_2: b(2603, 1, "Property_0_in_type_1_is_not_assignable_to_type_2_2603", "Property '{0}' in type '{1}' is not assignable to type '{2}'."),
          JSX_element_type_0_does_not_have_any_construct_or_call_signatures: b(2604, 1, "JSX_element_type_0_does_not_have_any_construct_or_call_signatures_2604", "JSX element type '{0}' does not have any construct or call signatures."),
          Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property: b(2606, 1, "Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property_2606", "Property '{0}' of JSX spread attribute is not assignable to target property."),
          JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property: b(2607, 1, "JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property_2607", "JSX element class does not support attributes because it does not have a '{0}' property."),
          The_global_type_JSX_0_may_not_have_more_than_one_property: b(2608, 1, "The_global_type_JSX_0_may_not_have_more_than_one_property_2608", "The global type 'JSX.{0}' may not have more than one property."),
          JSX_spread_child_must_be_an_array_type: b(2609, 1, "JSX_spread_child_must_be_an_array_type_2609", "JSX spread child must be an array type."),
          _0_is_defined_as_an_accessor_in_class_1_but_is_overridden_here_in_2_as_an_instance_property: b(2610, 1, "_0_is_defined_as_an_accessor_in_class_1_but_is_overridden_here_in_2_as_an_instance_property_2610", "'{0}' is defined as an accessor in class '{1}', but is overridden here in '{2}' as an instance property."),
          _0_is_defined_as_a_property_in_class_1_but_is_overridden_here_in_2_as_an_accessor: b(2611, 1, "_0_is_defined_as_a_property_in_class_1_but_is_overridden_here_in_2_as_an_accessor_2611", "'{0}' is defined as a property in class '{1}', but is overridden here in '{2}' as an accessor."),
          Property_0_will_overwrite_the_base_property_in_1_If_this_is_intentional_add_an_initializer_Otherwise_add_a_declare_modifier_or_remove_the_redundant_declaration: b(2612, 1, "Property_0_will_overwrite_the_base_property_in_1_If_this_is_intentional_add_an_initializer_Otherwise_2612", "Property '{0}' will overwrite the base property in '{1}'. If this is intentional, add an initializer. Otherwise, add a 'declare' modifier or remove the redundant declaration."),
          Module_0_has_no_default_export_Did_you_mean_to_use_import_1_from_0_instead: b(2613, 1, "Module_0_has_no_default_export_Did_you_mean_to_use_import_1_from_0_instead_2613", "Module '{0}' has no default export. Did you mean to use 'import { {1} } from {0}' instead?"),
          Module_0_has_no_exported_member_1_Did_you_mean_to_use_import_1_from_0_instead: b(2614, 1, "Module_0_has_no_exported_member_1_Did_you_mean_to_use_import_1_from_0_instead_2614", "Module '{0}' has no exported member '{1}'. Did you mean to use 'import {1} from {0}' instead?"),
          Type_of_property_0_circularly_references_itself_in_mapped_type_1: b(2615, 1, "Type_of_property_0_circularly_references_itself_in_mapped_type_1_2615", "Type of property '{0}' circularly references itself in mapped type '{1}'."),
          _0_can_only_be_imported_by_using_import_1_require_2_or_a_default_import: b(2616, 1, "_0_can_only_be_imported_by_using_import_1_require_2_or_a_default_import_2616", "'{0}' can only be imported by using 'import {1} = require({2})' or a default import."),
          _0_can_only_be_imported_by_using_import_1_require_2_or_by_turning_on_the_esModuleInterop_flag_and_using_a_default_import: b(2617, 1, "_0_can_only_be_imported_by_using_import_1_require_2_or_by_turning_on_the_esModuleInterop_flag_and_us_2617", "'{0}' can only be imported by using 'import {1} = require({2})' or by turning on the 'esModuleInterop' flag and using a default import."),
          Source_has_0_element_s_but_target_requires_1: b(2618, 1, "Source_has_0_element_s_but_target_requires_1_2618", "Source has {0} element(s) but target requires {1}."),
          Source_has_0_element_s_but_target_allows_only_1: b(2619, 1, "Source_has_0_element_s_but_target_allows_only_1_2619", "Source has {0} element(s) but target allows only {1}."),
          Target_requires_0_element_s_but_source_may_have_fewer: b(2620, 1, "Target_requires_0_element_s_but_source_may_have_fewer_2620", "Target requires {0} element(s) but source may have fewer."),
          Target_allows_only_0_element_s_but_source_may_have_more: b(2621, 1, "Target_allows_only_0_element_s_but_source_may_have_more_2621", "Target allows only {0} element(s) but source may have more."),
          Source_provides_no_match_for_required_element_at_position_0_in_target: b(2623, 1, "Source_provides_no_match_for_required_element_at_position_0_in_target_2623", "Source provides no match for required element at position {0} in target."),
          Source_provides_no_match_for_variadic_element_at_position_0_in_target: b(2624, 1, "Source_provides_no_match_for_variadic_element_at_position_0_in_target_2624", "Source provides no match for variadic element at position {0} in target."),
          Variadic_element_at_position_0_in_source_does_not_match_element_at_position_1_in_target: b(2625, 1, "Variadic_element_at_position_0_in_source_does_not_match_element_at_position_1_in_target_2625", "Variadic element at position {0} in source does not match element at position {1} in target."),
          Type_at_position_0_in_source_is_not_compatible_with_type_at_position_1_in_target: b(2626, 1, "Type_at_position_0_in_source_is_not_compatible_with_type_at_position_1_in_target_2626", "Type at position {0} in source is not compatible with type at position {1} in target."),
          Type_at_positions_0_through_1_in_source_is_not_compatible_with_type_at_position_2_in_target: b(2627, 1, "Type_at_positions_0_through_1_in_source_is_not_compatible_with_type_at_position_2_in_target_2627", "Type at positions {0} through {1} in source is not compatible with type at position {2} in target."),
          Cannot_assign_to_0_because_it_is_an_enum: b(2628, 1, "Cannot_assign_to_0_because_it_is_an_enum_2628", "Cannot assign to '{0}' because it is an enum."),
          Cannot_assign_to_0_because_it_is_a_class: b(2629, 1, "Cannot_assign_to_0_because_it_is_a_class_2629", "Cannot assign to '{0}' because it is a class."),
          Cannot_assign_to_0_because_it_is_a_function: b(2630, 1, "Cannot_assign_to_0_because_it_is_a_function_2630", "Cannot assign to '{0}' because it is a function."),
          Cannot_assign_to_0_because_it_is_a_namespace: b(2631, 1, "Cannot_assign_to_0_because_it_is_a_namespace_2631", "Cannot assign to '{0}' because it is a namespace."),
          Cannot_assign_to_0_because_it_is_an_import: b(2632, 1, "Cannot_assign_to_0_because_it_is_an_import_2632", "Cannot assign to '{0}' because it is an import."),
          JSX_property_access_expressions_cannot_include_JSX_namespace_names: b(2633, 1, "JSX_property_access_expressions_cannot_include_JSX_namespace_names_2633", "JSX property access expressions cannot include JSX namespace names"),
          _0_index_signatures_are_incompatible: b(2634, 1, "_0_index_signatures_are_incompatible_2634", "'{0}' index signatures are incompatible."),
          Type_0_has_no_signatures_for_which_the_type_argument_list_is_applicable: b(2635, 1, "Type_0_has_no_signatures_for_which_the_type_argument_list_is_applicable_2635", "Type '{0}' has no signatures for which the type argument list is applicable."),
          Type_0_is_not_assignable_to_type_1_as_implied_by_variance_annotation: b(2636, 1, "Type_0_is_not_assignable_to_type_1_as_implied_by_variance_annotation_2636", "Type '{0}' is not assignable to type '{1}' as implied by variance annotation."),
          Variance_annotations_are_only_supported_in_type_aliases_for_object_function_constructor_and_mapped_types: b(2637, 1, "Variance_annotations_are_only_supported_in_type_aliases_for_object_function_constructor_and_mapped_t_2637", "Variance annotations are only supported in type aliases for object, function, constructor, and mapped types."),
          Type_0_may_represent_a_primitive_value_which_is_not_permitted_as_the_right_operand_of_the_in_operator: b(2638, 1, "Type_0_may_represent_a_primitive_value_which_is_not_permitted_as_the_right_operand_of_the_in_operato_2638", "Type '{0}' may represent a primitive value, which is not permitted as the right operand of the 'in' operator."),
          React_components_cannot_include_JSX_namespace_names: b(2639, 1, "React_components_cannot_include_JSX_namespace_names_2639", "React components cannot include JSX namespace names"),
          Cannot_augment_module_0_with_value_exports_because_it_resolves_to_a_non_module_entity: b(2649, 1, "Cannot_augment_module_0_with_value_exports_because_it_resolves_to_a_non_module_entity_2649", "Cannot augment module '{0}' with value exports because it resolves to a non-module entity."),
          A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums: b(2651, 1, "A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_memb_2651", "A member initializer in a enum declaration cannot reference members declared after it, including members defined in other enums."),
          Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_default_0_declaration_instead: b(2652, 1, "Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_d_2652", "Merged declaration '{0}' cannot include a default export declaration. Consider adding a separate 'export default {0}' declaration instead."),
          Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1: b(2653, 1, "Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1_2653", "Non-abstract class expression does not implement inherited abstract member '{0}' from class '{1}'."),
          JSX_expressions_must_have_one_parent_element: b(2657, 1, "JSX_expressions_must_have_one_parent_element_2657", "JSX expressions must have one parent element."),
          Type_0_provides_no_match_for_the_signature_1: b(2658, 1, "Type_0_provides_no_match_for_the_signature_1_2658", "Type '{0}' provides no match for the signature '{1}'."),
          super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_higher: b(2659, 1, "super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_highe_2659", "'super' is only allowed in members of object literal expressions when option 'target' is 'ES2015' or higher."),
          super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions: b(2660, 1, "super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions_2660", "'super' can only be referenced in members of derived classes or object literal expressions."),
          Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module: b(2661, 1, "Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module_2661", "Cannot export '{0}'. Only local declarations can be exported from a module."),
          Cannot_find_name_0_Did_you_mean_the_static_member_1_0: b(2662, 1, "Cannot_find_name_0_Did_you_mean_the_static_member_1_0_2662", "Cannot find name '{0}'. Did you mean the static member '{1}.{0}'?"),
          Cannot_find_name_0_Did_you_mean_the_instance_member_this_0: b(2663, 1, "Cannot_find_name_0_Did_you_mean_the_instance_member_this_0_2663", "Cannot find name '{0}'. Did you mean the instance member 'this.{0}'?"),
          Invalid_module_name_in_augmentation_module_0_cannot_be_found: b(2664, 1, "Invalid_module_name_in_augmentation_module_0_cannot_be_found_2664", "Invalid module name in augmentation, module '{0}' cannot be found."),
          Invalid_module_name_in_augmentation_Module_0_resolves_to_an_untyped_module_at_1_which_cannot_be_augmented: b(2665, 1, "Invalid_module_name_in_augmentation_Module_0_resolves_to_an_untyped_module_at_1_which_cannot_be_augm_2665", "Invalid module name in augmentation. Module '{0}' resolves to an untyped module at '{1}', which cannot be augmented."),
          Exports_and_export_assignments_are_not_permitted_in_module_augmentations: b(2666, 1, "Exports_and_export_assignments_are_not_permitted_in_module_augmentations_2666", "Exports and export assignments are not permitted in module augmentations."),
          Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_module: b(2667, 1, "Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_mod_2667", "Imports are not permitted in module augmentations. Consider moving them to the enclosing external module."),
          export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always_visible: b(2668, 1, "export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always__2668", "'export' modifier cannot be applied to ambient modules and module augmentations since they are always visible."),
          Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations: b(2669, 1, "Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_2669", "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations."),
          Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambient_context: b(2670, 1, "Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambien_2670", "Augmentations for the global scope should have 'declare' modifier unless they appear in already ambient context."),
          Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity: b(2671, 1, "Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity_2671", "Cannot augment module '{0}' because it resolves to a non-module entity."),
          Cannot_assign_a_0_constructor_type_to_a_1_constructor_type: b(2672, 1, "Cannot_assign_a_0_constructor_type_to_a_1_constructor_type_2672", "Cannot assign a '{0}' constructor type to a '{1}' constructor type."),
          Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration: b(2673, 1, "Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration_2673", "Constructor of class '{0}' is private and only accessible within the class declaration."),
          Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration: b(2674, 1, "Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration_2674", "Constructor of class '{0}' is protected and only accessible within the class declaration."),
          Cannot_extend_a_class_0_Class_constructor_is_marked_as_private: b(2675, 1, "Cannot_extend_a_class_0_Class_constructor_is_marked_as_private_2675", "Cannot extend a class '{0}'. Class constructor is marked as private."),
          Accessors_must_both_be_abstract_or_non_abstract: b(2676, 1, "Accessors_must_both_be_abstract_or_non_abstract_2676", "Accessors must both be abstract or non-abstract."),
          A_type_predicate_s_type_must_be_assignable_to_its_parameter_s_type: b(2677, 1, "A_type_predicate_s_type_must_be_assignable_to_its_parameter_s_type_2677", "A type predicate's type must be assignable to its parameter's type."),
          Type_0_is_not_comparable_to_type_1: b(2678, 1, "Type_0_is_not_comparable_to_type_1_2678", "Type '{0}' is not comparable to type '{1}'."),
          A_function_that_is_called_with_the_new_keyword_cannot_have_a_this_type_that_is_void: b(2679, 1, "A_function_that_is_called_with_the_new_keyword_cannot_have_a_this_type_that_is_void_2679", "A function that is called with the 'new' keyword cannot have a 'this' type that is 'void'."),
          A_0_parameter_must_be_the_first_parameter: b(2680, 1, "A_0_parameter_must_be_the_first_parameter_2680", "A '{0}' parameter must be the first parameter."),
          A_constructor_cannot_have_a_this_parameter: b(2681, 1, "A_constructor_cannot_have_a_this_parameter_2681", "A constructor cannot have a 'this' parameter."),
          this_implicitly_has_type_any_because_it_does_not_have_a_type_annotation: b(2683, 1, "this_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_2683", "'this' implicitly has type 'any' because it does not have a type annotation."),
          The_this_context_of_type_0_is_not_assignable_to_method_s_this_of_type_1: b(2684, 1, "The_this_context_of_type_0_is_not_assignable_to_method_s_this_of_type_1_2684", "The 'this' context of type '{0}' is not assignable to method's 'this' of type '{1}'."),
          The_this_types_of_each_signature_are_incompatible: b(2685, 1, "The_this_types_of_each_signature_are_incompatible_2685", "The 'this' types of each signature are incompatible."),
          _0_refers_to_a_UMD_global_but_the_current_file_is_a_module_Consider_adding_an_import_instead: b(2686, 1, "_0_refers_to_a_UMD_global_but_the_current_file_is_a_module_Consider_adding_an_import_instead_2686", "'{0}' refers to a UMD global, but the current file is a module. Consider adding an import instead."),
          All_declarations_of_0_must_have_identical_modifiers: b(2687, 1, "All_declarations_of_0_must_have_identical_modifiers_2687", "All declarations of '{0}' must have identical modifiers."),
          Cannot_find_type_definition_file_for_0: b(2688, 1, "Cannot_find_type_definition_file_for_0_2688", "Cannot find type definition file for '{0}'."),
          Cannot_extend_an_interface_0_Did_you_mean_implements: b(2689, 1, "Cannot_extend_an_interface_0_Did_you_mean_implements_2689", "Cannot extend an interface '{0}'. Did you mean 'implements'?"),
          _0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Did_you_mean_to_use_1_in_0: b(2690, 1, "_0_only_refers_to_a_type_but_is_being_used_as_a_value_here_Did_you_mean_to_use_1_in_0_2690", "'{0}' only refers to a type, but is being used as a value here. Did you mean to use '{1} in {0}'?"),
          _0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible: b(2692, 1, "_0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible_2692", "'{0}' is a primitive, but '{1}' is a wrapper object. Prefer using '{0}' when possible."),
          _0_only_refers_to_a_type_but_is_being_used_as_a_value_here: b(2693, 1, "_0_only_refers_to_a_type_but_is_being_used_as_a_value_here_2693", "'{0}' only refers to a type, but is being used as a value here."),
          Namespace_0_has_no_exported_member_1: b(2694, 1, "Namespace_0_has_no_exported_member_1_2694", "Namespace '{0}' has no exported member '{1}'."),
          Left_side_of_comma_operator_is_unused_and_has_no_side_effects: b(
            2695,
            1,
            "Left_side_of_comma_operator_is_unused_and_has_no_side_effects_2695",
            "Left side of comma operator is unused and has no side effects.",
            /*reportsUnnecessary*/
            !0
          ),
          The_Object_type_is_assignable_to_very_few_other_types_Did_you_mean_to_use_the_any_type_instead: b(2696, 1, "The_Object_type_is_assignable_to_very_few_other_types_Did_you_mean_to_use_the_any_type_instead_2696", "The 'Object' type is assignable to very few other types. Did you mean to use the 'any' type instead?"),
          An_async_function_or_method_must_return_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES2015_in_your_lib_option: b(2697, 1, "An_async_function_or_method_must_return_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_in_2697", "An async function or method must return a 'Promise'. Make sure you have a declaration for 'Promise' or include 'ES2015' in your '--lib' option."),
          Spread_types_may_only_be_created_from_object_types: b(2698, 1, "Spread_types_may_only_be_created_from_object_types_2698", "Spread types may only be created from object types."),
          Static_property_0_conflicts_with_built_in_property_Function_0_of_constructor_function_1: b(2699, 1, "Static_property_0_conflicts_with_built_in_property_Function_0_of_constructor_function_1_2699", "Static property '{0}' conflicts with built-in property 'Function.{0}' of constructor function '{1}'."),
          Rest_types_may_only_be_created_from_object_types: b(2700, 1, "Rest_types_may_only_be_created_from_object_types_2700", "Rest types may only be created from object types."),
          The_target_of_an_object_rest_assignment_must_be_a_variable_or_a_property_access: b(2701, 1, "The_target_of_an_object_rest_assignment_must_be_a_variable_or_a_property_access_2701", "The target of an object rest assignment must be a variable or a property access."),
          _0_only_refers_to_a_type_but_is_being_used_as_a_namespace_here: b(2702, 1, "_0_only_refers_to_a_type_but_is_being_used_as_a_namespace_here_2702", "'{0}' only refers to a type, but is being used as a namespace here."),
          The_operand_of_a_delete_operator_must_be_a_property_reference: b(2703, 1, "The_operand_of_a_delete_operator_must_be_a_property_reference_2703", "The operand of a 'delete' operator must be a property reference."),
          The_operand_of_a_delete_operator_cannot_be_a_read_only_property: b(2704, 1, "The_operand_of_a_delete_operator_cannot_be_a_read_only_property_2704", "The operand of a 'delete' operator cannot be a read-only property."),
          An_async_function_or_method_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declaration_for_the_Promise_constructor_or_include_ES2015_in_your_lib_option: b(2705, 1, "An_async_function_or_method_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_de_2705", "An async function or method in ES5/ES3 requires the 'Promise' constructor.  Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your '--lib' option."),
          Required_type_parameters_may_not_follow_optional_type_parameters: b(2706, 1, "Required_type_parameters_may_not_follow_optional_type_parameters_2706", "Required type parameters may not follow optional type parameters."),
          Generic_type_0_requires_between_1_and_2_type_arguments: b(2707, 1, "Generic_type_0_requires_between_1_and_2_type_arguments_2707", "Generic type '{0}' requires between {1} and {2} type arguments."),
          Cannot_use_namespace_0_as_a_value: b(2708, 1, "Cannot_use_namespace_0_as_a_value_2708", "Cannot use namespace '{0}' as a value."),
          Cannot_use_namespace_0_as_a_type: b(2709, 1, "Cannot_use_namespace_0_as_a_type_2709", "Cannot use namespace '{0}' as a type."),
          _0_are_specified_twice_The_attribute_named_0_will_be_overwritten: b(2710, 1, "_0_are_specified_twice_The_attribute_named_0_will_be_overwritten_2710", "'{0}' are specified twice. The attribute named '{0}' will be overwritten."),
          A_dynamic_import_call_returns_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES2015_in_your_lib_option: b(2711, 1, "A_dynamic_import_call_returns_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES20_2711", "A dynamic import call returns a 'Promise'. Make sure you have a declaration for 'Promise' or include 'ES2015' in your '--lib' option."),
          A_dynamic_import_call_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declaration_for_the_Promise_constructor_or_include_ES2015_in_your_lib_option: b(2712, 1, "A_dynamic_import_call_in_ES5_SlashES3_requires_the_Promise_constructor_Make_sure_you_have_a_declarat_2712", "A dynamic import call in ES5/ES3 requires the 'Promise' constructor.  Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your '--lib' option."),
          Cannot_access_0_1_because_0_is_a_type_but_not_a_namespace_Did_you_mean_to_retrieve_the_type_of_the_property_1_in_0_with_0_1: b(2713, 1, "Cannot_access_0_1_because_0_is_a_type_but_not_a_namespace_Did_you_mean_to_retrieve_the_type_of_the_p_2713", `Cannot access '{0}.{1}' because '{0}' is a type, but not a namespace. Did you mean to retrieve the type of the property '{1}' in '{0}' with '{0}["{1}"]'?`),
          The_expression_of_an_export_assignment_must_be_an_identifier_or_qualified_name_in_an_ambient_context: b(2714, 1, "The_expression_of_an_export_assignment_must_be_an_identifier_or_qualified_name_in_an_ambient_context_2714", "The expression of an export assignment must be an identifier or qualified name in an ambient context."),
          Abstract_property_0_in_class_1_cannot_be_accessed_in_the_constructor: b(2715, 1, "Abstract_property_0_in_class_1_cannot_be_accessed_in_the_constructor_2715", "Abstract property '{0}' in class '{1}' cannot be accessed in the constructor."),
          Type_parameter_0_has_a_circular_default: b(2716, 1, "Type_parameter_0_has_a_circular_default_2716", "Type parameter '{0}' has a circular default."),
          Subsequent_property_declarations_must_have_the_same_type_Property_0_must_be_of_type_1_but_here_has_type_2: b(2717, 1, "Subsequent_property_declarations_must_have_the_same_type_Property_0_must_be_of_type_1_but_here_has_t_2717", "Subsequent property declarations must have the same type.  Property '{0}' must be of type '{1}', but here has type '{2}'."),
          Duplicate_property_0: b(2718, 1, "Duplicate_property_0_2718", "Duplicate property '{0}'."),
          Type_0_is_not_assignable_to_type_1_Two_different_types_with_this_name_exist_but_they_are_unrelated: b(2719, 1, "Type_0_is_not_assignable_to_type_1_Two_different_types_with_this_name_exist_but_they_are_unrelated_2719", "Type '{0}' is not assignable to type '{1}'. Two different types with this name exist, but they are unrelated."),
          Class_0_incorrectly_implements_class_1_Did_you_mean_to_extend_1_and_inherit_its_members_as_a_subclass: b(2720, 1, "Class_0_incorrectly_implements_class_1_Did_you_mean_to_extend_1_and_inherit_its_members_as_a_subclas_2720", "Class '{0}' incorrectly implements class '{1}'. Did you mean to extend '{1}' and inherit its members as a subclass?"),
          Cannot_invoke_an_object_which_is_possibly_null: b(2721, 1, "Cannot_invoke_an_object_which_is_possibly_null_2721", "Cannot invoke an object which is possibly 'null'."),
          Cannot_invoke_an_object_which_is_possibly_undefined: b(2722, 1, "Cannot_invoke_an_object_which_is_possibly_undefined_2722", "Cannot invoke an object which is possibly 'undefined'."),
          Cannot_invoke_an_object_which_is_possibly_null_or_undefined: b(2723, 1, "Cannot_invoke_an_object_which_is_possibly_null_or_undefined_2723", "Cannot invoke an object which is possibly 'null' or 'undefined'."),
          _0_has_no_exported_member_named_1_Did_you_mean_2: b(2724, 1, "_0_has_no_exported_member_named_1_Did_you_mean_2_2724", "'{0}' has no exported member named '{1}'. Did you mean '{2}'?"),
          Class_name_cannot_be_Object_when_targeting_ES5_with_module_0: b(2725, 1, "Class_name_cannot_be_Object_when_targeting_ES5_with_module_0_2725", "Class name cannot be 'Object' when targeting ES5 with module {0}."),
          Cannot_find_lib_definition_for_0: b(2726, 1, "Cannot_find_lib_definition_for_0_2726", "Cannot find lib definition for '{0}'."),
          Cannot_find_lib_definition_for_0_Did_you_mean_1: b(2727, 1, "Cannot_find_lib_definition_for_0_Did_you_mean_1_2727", "Cannot find lib definition for '{0}'. Did you mean '{1}'?"),
          _0_is_declared_here: b(2728, 3, "_0_is_declared_here_2728", "'{0}' is declared here."),
          Property_0_is_used_before_its_initialization: b(2729, 1, "Property_0_is_used_before_its_initialization_2729", "Property '{0}' is used before its initialization."),
          An_arrow_function_cannot_have_a_this_parameter: b(2730, 1, "An_arrow_function_cannot_have_a_this_parameter_2730", "An arrow function cannot have a 'this' parameter."),
          Implicit_conversion_of_a_symbol_to_a_string_will_fail_at_runtime_Consider_wrapping_this_expression_in_String: b(2731, 1, "Implicit_conversion_of_a_symbol_to_a_string_will_fail_at_runtime_Consider_wrapping_this_expression_i_2731", "Implicit conversion of a 'symbol' to a 'string' will fail at runtime. Consider wrapping this expression in 'String(...)'."),
          Cannot_find_module_0_Consider_using_resolveJsonModule_to_import_module_with_json_extension: b(2732, 1, "Cannot_find_module_0_Consider_using_resolveJsonModule_to_import_module_with_json_extension_2732", "Cannot find module '{0}'. Consider using '--resolveJsonModule' to import module with '.json' extension."),
          Property_0_was_also_declared_here: b(2733, 1, "Property_0_was_also_declared_here_2733", "Property '{0}' was also declared here."),
          Are_you_missing_a_semicolon: b(2734, 1, "Are_you_missing_a_semicolon_2734", "Are you missing a semicolon?"),
          Did_you_mean_for_0_to_be_constrained_to_type_new_args_Colon_any_1: b(2735, 1, "Did_you_mean_for_0_to_be_constrained_to_type_new_args_Colon_any_1_2735", "Did you mean for '{0}' to be constrained to type 'new (...args: any[]) => {1}'?"),
          Operator_0_cannot_be_applied_to_type_1: b(2736, 1, "Operator_0_cannot_be_applied_to_type_1_2736", "Operator '{0}' cannot be applied to type '{1}'."),
          BigInt_literals_are_not_available_when_targeting_lower_than_ES2020: b(2737, 1, "BigInt_literals_are_not_available_when_targeting_lower_than_ES2020_2737", "BigInt literals are not available when targeting lower than ES2020."),
          An_outer_value_of_this_is_shadowed_by_this_container: b(2738, 3, "An_outer_value_of_this_is_shadowed_by_this_container_2738", "An outer value of 'this' is shadowed by this container."),
          Type_0_is_missing_the_following_properties_from_type_1_Colon_2: b(2739, 1, "Type_0_is_missing_the_following_properties_from_type_1_Colon_2_2739", "Type '{0}' is missing the following properties from type '{1}': {2}"),
          Type_0_is_missing_the_following_properties_from_type_1_Colon_2_and_3_more: b(2740, 1, "Type_0_is_missing_the_following_properties_from_type_1_Colon_2_and_3_more_2740", "Type '{0}' is missing the following properties from type '{1}': {2}, and {3} more."),
          Property_0_is_missing_in_type_1_but_required_in_type_2: b(2741, 1, "Property_0_is_missing_in_type_1_but_required_in_type_2_2741", "Property '{0}' is missing in type '{1}' but required in type '{2}'."),
          The_inferred_type_of_0_cannot_be_named_without_a_reference_to_1_This_is_likely_not_portable_A_type_annotation_is_necessary: b(2742, 1, "The_inferred_type_of_0_cannot_be_named_without_a_reference_to_1_This_is_likely_not_portable_A_type_a_2742", "The inferred type of '{0}' cannot be named without a reference to '{1}'. This is likely not portable. A type annotation is necessary."),
          No_overload_expects_0_type_arguments_but_overloads_do_exist_that_expect_either_1_or_2_type_arguments: b(2743, 1, "No_overload_expects_0_type_arguments_but_overloads_do_exist_that_expect_either_1_or_2_type_arguments_2743", "No overload expects {0} type arguments, but overloads do exist that expect either {1} or {2} type arguments."),
          Type_parameter_defaults_can_only_reference_previously_declared_type_parameters: b(2744, 1, "Type_parameter_defaults_can_only_reference_previously_declared_type_parameters_2744", "Type parameter defaults can only reference previously declared type parameters."),
          This_JSX_tag_s_0_prop_expects_type_1_which_requires_multiple_children_but_only_a_single_child_was_provided: b(2745, 1, "This_JSX_tag_s_0_prop_expects_type_1_which_requires_multiple_children_but_only_a_single_child_was_pr_2745", "This JSX tag's '{0}' prop expects type '{1}' which requires multiple children, but only a single child was provided."),
          This_JSX_tag_s_0_prop_expects_a_single_child_of_type_1_but_multiple_children_were_provided: b(2746, 1, "This_JSX_tag_s_0_prop_expects_a_single_child_of_type_1_but_multiple_children_were_provided_2746", "This JSX tag's '{0}' prop expects a single child of type '{1}', but multiple children were provided."),
          _0_components_don_t_accept_text_as_child_elements_Text_in_JSX_has_the_type_string_but_the_expected_type_of_1_is_2: b(2747, 1, "_0_components_don_t_accept_text_as_child_elements_Text_in_JSX_has_the_type_string_but_the_expected_t_2747", "'{0}' components don't accept text as child elements. Text in JSX has the type 'string', but the expected type of '{1}' is '{2}'."),
          Cannot_access_ambient_const_enums_when_0_is_enabled: b(2748, 1, "Cannot_access_ambient_const_enums_when_0_is_enabled_2748", "Cannot access ambient const enums when '{0}' is enabled."),
          _0_refers_to_a_value_but_is_being_used_as_a_type_here_Did_you_mean_typeof_0: b(2749, 1, "_0_refers_to_a_value_but_is_being_used_as_a_type_here_Did_you_mean_typeof_0_2749", "'{0}' refers to a value, but is being used as a type here. Did you mean 'typeof {0}'?"),
          The_implementation_signature_is_declared_here: b(2750, 1, "The_implementation_signature_is_declared_here_2750", "The implementation signature is declared here."),
          Circularity_originates_in_type_at_this_location: b(2751, 1, "Circularity_originates_in_type_at_this_location_2751", "Circularity originates in type at this location."),
          The_first_export_default_is_here: b(2752, 1, "The_first_export_default_is_here_2752", "The first export default is here."),
          Another_export_default_is_here: b(2753, 1, "Another_export_default_is_here_2753", "Another export default is here."),
          super_may_not_use_type_arguments: b(2754, 1, "super_may_not_use_type_arguments_2754", "'super' may not use type arguments."),
          No_constituent_of_type_0_is_callable: b(2755, 1, "No_constituent_of_type_0_is_callable_2755", "No constituent of type '{0}' is callable."),
          Not_all_constituents_of_type_0_are_callable: b(2756, 1, "Not_all_constituents_of_type_0_are_callable_2756", "Not all constituents of type '{0}' are callable."),
          Type_0_has_no_call_signatures: b(2757, 1, "Type_0_has_no_call_signatures_2757", "Type '{0}' has no call signatures."),
          Each_member_of_the_union_type_0_has_signatures_but_none_of_those_signatures_are_compatible_with_each_other: b(2758, 1, "Each_member_of_the_union_type_0_has_signatures_but_none_of_those_signatures_are_compatible_with_each_2758", "Each member of the union type '{0}' has signatures, but none of those signatures are compatible with each other."),
          No_constituent_of_type_0_is_constructable: b(2759, 1, "No_constituent_of_type_0_is_constructable_2759", "No constituent of type '{0}' is constructable."),
          Not_all_constituents_of_type_0_are_constructable: b(2760, 1, "Not_all_constituents_of_type_0_are_constructable_2760", "Not all constituents of type '{0}' are constructable."),
          Type_0_has_no_construct_signatures: b(2761, 1, "Type_0_has_no_construct_signatures_2761", "Type '{0}' has no construct signatures."),
          Each_member_of_the_union_type_0_has_construct_signatures_but_none_of_those_signatures_are_compatible_with_each_other: b(2762, 1, "Each_member_of_the_union_type_0_has_construct_signatures_but_none_of_those_signatures_are_compatible_2762", "Each member of the union type '{0}' has construct signatures, but none of those signatures are compatible with each other."),
          Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_for_of_will_always_send_0: b(2763, 1, "Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_for_of_will_always_s_2763", "Cannot iterate value because the 'next' method of its iterator expects type '{1}', but for-of will always send '{0}'."),
          Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_spread_will_always_send_0: b(2764, 1, "Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_spread_will_al_2764", "Cannot iterate value because the 'next' method of its iterator expects type '{1}', but array spread will always send '{0}'."),
          Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_destructuring_will_always_send_0: b(2765, 1, "Cannot_iterate_value_because_the_next_method_of_its_iterator_expects_type_1_but_array_destructuring__2765", "Cannot iterate value because the 'next' method of its iterator expects type '{1}', but array destructuring will always send '{0}'."),
          Cannot_delegate_iteration_to_value_because_the_next_method_of_its_iterator_expects_type_1_but_the_containing_generator_will_always_send_0: b(2766, 1, "Cannot_delegate_iteration_to_value_because_the_next_method_of_its_iterator_expects_type_1_but_the_co_2766", "Cannot delegate iteration to value because the 'next' method of its iterator expects type '{1}', but the containing generator will always send '{0}'."),
          The_0_property_of_an_iterator_must_be_a_method: b(2767, 1, "The_0_property_of_an_iterator_must_be_a_method_2767", "The '{0}' property of an iterator must be a method."),
          The_0_property_of_an_async_iterator_must_be_a_method: b(2768, 1, "The_0_property_of_an_async_iterator_must_be_a_method_2768", "The '{0}' property of an async iterator must be a method."),
          No_overload_matches_this_call: b(2769, 1, "No_overload_matches_this_call_2769", "No overload matches this call."),
          The_last_overload_gave_the_following_error: b(2770, 1, "The_last_overload_gave_the_following_error_2770", "The last overload gave the following error."),
          The_last_overload_is_declared_here: b(2771, 1, "The_last_overload_is_declared_here_2771", "The last overload is declared here."),
          Overload_0_of_1_2_gave_the_following_error: b(2772, 1, "Overload_0_of_1_2_gave_the_following_error_2772", "Overload {0} of {1}, '{2}', gave the following error."),
          Did_you_forget_to_use_await: b(2773, 1, "Did_you_forget_to_use_await_2773", "Did you forget to use 'await'?"),
          This_condition_will_always_return_true_since_this_function_is_always_defined_Did_you_mean_to_call_it_instead: b(2774, 1, "This_condition_will_always_return_true_since_this_function_is_always_defined_Did_you_mean_to_call_it_2774", "This condition will always return true since this function is always defined. Did you mean to call it instead?"),
          Assertions_require_every_name_in_the_call_target_to_be_declared_with_an_explicit_type_annotation: b(2775, 1, "Assertions_require_every_name_in_the_call_target_to_be_declared_with_an_explicit_type_annotation_2775", "Assertions require every name in the call target to be declared with an explicit type annotation."),
          Assertions_require_the_call_target_to_be_an_identifier_or_qualified_name: b(2776, 1, "Assertions_require_the_call_target_to_be_an_identifier_or_qualified_name_2776", "Assertions require the call target to be an identifier or qualified name."),
          The_operand_of_an_increment_or_decrement_operator_may_not_be_an_optional_property_access: b(2777, 1, "The_operand_of_an_increment_or_decrement_operator_may_not_be_an_optional_property_access_2777", "The operand of an increment or decrement operator may not be an optional property access."),
          The_target_of_an_object_rest_assignment_may_not_be_an_optional_property_access: b(2778, 1, "The_target_of_an_object_rest_assignment_may_not_be_an_optional_property_access_2778", "The target of an object rest assignment may not be an optional property access."),
          The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access: b(2779, 1, "The_left_hand_side_of_an_assignment_expression_may_not_be_an_optional_property_access_2779", "The left-hand side of an assignment expression may not be an optional property access."),
          The_left_hand_side_of_a_for_in_statement_may_not_be_an_optional_property_access: b(2780, 1, "The_left_hand_side_of_a_for_in_statement_may_not_be_an_optional_property_access_2780", "The left-hand side of a 'for...in' statement may not be an optional property access."),
          The_left_hand_side_of_a_for_of_statement_may_not_be_an_optional_property_access: b(2781, 1, "The_left_hand_side_of_a_for_of_statement_may_not_be_an_optional_property_access_2781", "The left-hand side of a 'for...of' statement may not be an optional property access."),
          _0_needs_an_explicit_type_annotation: b(2782, 3, "_0_needs_an_explicit_type_annotation_2782", "'{0}' needs an explicit type annotation."),
          _0_is_specified_more_than_once_so_this_usage_will_be_overwritten: b(2783, 1, "_0_is_specified_more_than_once_so_this_usage_will_be_overwritten_2783", "'{0}' is specified more than once, so this usage will be overwritten."),
          get_and_set_accessors_cannot_declare_this_parameters: b(2784, 1, "get_and_set_accessors_cannot_declare_this_parameters_2784", "'get' and 'set' accessors cannot declare 'this' parameters."),
          This_spread_always_overwrites_this_property: b(2785, 1, "This_spread_always_overwrites_this_property_2785", "This spread always overwrites this property."),
          _0_cannot_be_used_as_a_JSX_component: b(2786, 1, "_0_cannot_be_used_as_a_JSX_component_2786", "'{0}' cannot be used as a JSX component."),
          Its_return_type_0_is_not_a_valid_JSX_element: b(2787, 1, "Its_return_type_0_is_not_a_valid_JSX_element_2787", "Its return type '{0}' is not a valid JSX element."),
          Its_instance_type_0_is_not_a_valid_JSX_element: b(2788, 1, "Its_instance_type_0_is_not_a_valid_JSX_element_2788", "Its instance type '{0}' is not a valid JSX element."),
          Its_element_type_0_is_not_a_valid_JSX_element: b(2789, 1, "Its_element_type_0_is_not_a_valid_JSX_element_2789", "Its element type '{0}' is not a valid JSX element."),
          The_operand_of_a_delete_operator_must_be_optional: b(2790, 1, "The_operand_of_a_delete_operator_must_be_optional_2790", "The operand of a 'delete' operator must be optional."),
          Exponentiation_cannot_be_performed_on_bigint_values_unless_the_target_option_is_set_to_es2016_or_later: b(2791, 1, "Exponentiation_cannot_be_performed_on_bigint_values_unless_the_target_option_is_set_to_es2016_or_lat_2791", "Exponentiation cannot be performed on 'bigint' values unless the 'target' option is set to 'es2016' or later."),
          Cannot_find_module_0_Did_you_mean_to_set_the_moduleResolution_option_to_nodenext_or_to_add_aliases_to_the_paths_option: b(2792, 1, "Cannot_find_module_0_Did_you_mean_to_set_the_moduleResolution_option_to_nodenext_or_to_add_aliases_t_2792", "Cannot find module '{0}'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?"),
          The_call_would_have_succeeded_against_this_implementation_but_implementation_signatures_of_overloads_are_not_externally_visible: b(2793, 1, "The_call_would_have_succeeded_against_this_implementation_but_implementation_signatures_of_overloads_2793", "The call would have succeeded against this implementation, but implementation signatures of overloads are not externally visible."),
          Expected_0_arguments_but_got_1_Did_you_forget_to_include_void_in_your_type_argument_to_Promise: b(2794, 1, "Expected_0_arguments_but_got_1_Did_you_forget_to_include_void_in_your_type_argument_to_Promise_2794", "Expected {0} arguments, but got {1}. Did you forget to include 'void' in your type argument to 'Promise'?"),
          The_intrinsic_keyword_can_only_be_used_to_declare_compiler_provided_intrinsic_types: b(2795, 1, "The_intrinsic_keyword_can_only_be_used_to_declare_compiler_provided_intrinsic_types_2795", "The 'intrinsic' keyword can only be used to declare compiler provided intrinsic types."),
          It_is_likely_that_you_are_missing_a_comma_to_separate_these_two_template_expressions_They_form_a_tagged_template_expression_which_cannot_be_invoked: b(2796, 1, "It_is_likely_that_you_are_missing_a_comma_to_separate_these_two_template_expressions_They_form_a_tag_2796", "It is likely that you are missing a comma to separate these two template expressions. They form a tagged template expression which cannot be invoked."),
          A_mixin_class_that_extends_from_a_type_variable_containing_an_abstract_construct_signature_must_also_be_declared_abstract: b(2797, 1, "A_mixin_class_that_extends_from_a_type_variable_containing_an_abstract_construct_signature_must_also_2797", "A mixin class that extends from a type variable containing an abstract construct signature must also be declared 'abstract'."),
          The_declaration_was_marked_as_deprecated_here: b(2798, 1, "The_declaration_was_marked_as_deprecated_here_2798", "The declaration was marked as deprecated here."),
          Type_produces_a_tuple_type_that_is_too_large_to_represent: b(2799, 1, "Type_produces_a_tuple_type_that_is_too_large_to_represent_2799", "Type produces a tuple type that is too large to represent."),
          Expression_produces_a_tuple_type_that_is_too_large_to_represent: b(2800, 1, "Expression_produces_a_tuple_type_that_is_too_large_to_represent_2800", "Expression produces a tuple type that is too large to represent."),
          This_condition_will_always_return_true_since_this_0_is_always_defined: b(2801, 1, "This_condition_will_always_return_true_since_this_0_is_always_defined_2801", "This condition will always return true since this '{0}' is always defined."),
          Type_0_can_only_be_iterated_through_when_using_the_downlevelIteration_flag_or_with_a_target_of_es2015_or_higher: b(2802, 1, "Type_0_can_only_be_iterated_through_when_using_the_downlevelIteration_flag_or_with_a_target_of_es201_2802", "Type '{0}' can only be iterated through when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher."),
          Cannot_assign_to_private_method_0_Private_methods_are_not_writable: b(2803, 1, "Cannot_assign_to_private_method_0_Private_methods_are_not_writable_2803", "Cannot assign to private method '{0}'. Private methods are not writable."),
          Duplicate_identifier_0_Static_and_instance_elements_cannot_share_the_same_private_name: b(2804, 1, "Duplicate_identifier_0_Static_and_instance_elements_cannot_share_the_same_private_name_2804", "Duplicate identifier '{0}'. Static and instance elements cannot share the same private name."),
          Private_accessor_was_defined_without_a_getter: b(2806, 1, "Private_accessor_was_defined_without_a_getter_2806", "Private accessor was defined without a getter."),
          This_syntax_requires_an_imported_helper_named_1_with_2_parameters_which_is_not_compatible_with_the_one_in_0_Consider_upgrading_your_version_of_0: b(2807, 1, "This_syntax_requires_an_imported_helper_named_1_with_2_parameters_which_is_not_compatible_with_the_o_2807", "This syntax requires an imported helper named '{1}' with {2} parameters, which is not compatible with the one in '{0}'. Consider upgrading your version of '{0}'."),
          A_get_accessor_must_be_at_least_as_accessible_as_the_setter: b(2808, 1, "A_get_accessor_must_be_at_least_as_accessible_as_the_setter_2808", "A get accessor must be at least as accessible as the setter"),
          Declaration_or_statement_expected_This_follows_a_block_of_statements_so_if_you_intended_to_write_a_destructuring_assignment_you_might_need_to_wrap_the_whole_assignment_in_parentheses: b(2809, 1, "Declaration_or_statement_expected_This_follows_a_block_of_statements_so_if_you_intended_to_write_a_d_2809", "Declaration or statement expected. This '=' follows a block of statements, so if you intended to write a destructuring assignment, you might need to wrap the whole assignment in parentheses."),
          Expected_1_argument_but_got_0_new_Promise_needs_a_JSDoc_hint_to_produce_a_resolve_that_can_be_called_without_arguments: b(2810, 1, "Expected_1_argument_but_got_0_new_Promise_needs_a_JSDoc_hint_to_produce_a_resolve_that_can_be_called_2810", "Expected 1 argument, but got 0. 'new Promise()' needs a JSDoc hint to produce a 'resolve' that can be called without arguments."),
          Initializer_for_property_0: b(2811, 1, "Initializer_for_property_0_2811", "Initializer for property '{0}'"),
          Property_0_does_not_exist_on_type_1_Try_changing_the_lib_compiler_option_to_include_dom: b(2812, 1, "Property_0_does_not_exist_on_type_1_Try_changing_the_lib_compiler_option_to_include_dom_2812", "Property '{0}' does not exist on type '{1}'. Try changing the 'lib' compiler option to include 'dom'."),
          Class_declaration_cannot_implement_overload_list_for_0: b(2813, 1, "Class_declaration_cannot_implement_overload_list_for_0_2813", "Class declaration cannot implement overload list for '{0}'."),
          Function_with_bodies_can_only_merge_with_classes_that_are_ambient: b(2814, 1, "Function_with_bodies_can_only_merge_with_classes_that_are_ambient_2814", "Function with bodies can only merge with classes that are ambient."),
          arguments_cannot_be_referenced_in_property_initializers: b(2815, 1, "arguments_cannot_be_referenced_in_property_initializers_2815", "'arguments' cannot be referenced in property initializers."),
          Cannot_use_this_in_a_static_property_initializer_of_a_decorated_class: b(2816, 1, "Cannot_use_this_in_a_static_property_initializer_of_a_decorated_class_2816", "Cannot use 'this' in a static property initializer of a decorated class."),
          Property_0_has_no_initializer_and_is_not_definitely_assigned_in_a_class_static_block: b(2817, 1, "Property_0_has_no_initializer_and_is_not_definitely_assigned_in_a_class_static_block_2817", "Property '{0}' has no initializer and is not definitely assigned in a class static block."),
          Duplicate_identifier_0_Compiler_reserves_name_1_when_emitting_super_references_in_static_initializers: b(2818, 1, "Duplicate_identifier_0_Compiler_reserves_name_1_when_emitting_super_references_in_static_initializer_2818", "Duplicate identifier '{0}'. Compiler reserves name '{1}' when emitting 'super' references in static initializers."),
          Namespace_name_cannot_be_0: b(2819, 1, "Namespace_name_cannot_be_0_2819", "Namespace name cannot be '{0}'."),
          Type_0_is_not_assignable_to_type_1_Did_you_mean_2: b(2820, 1, "Type_0_is_not_assignable_to_type_1_Did_you_mean_2_2820", "Type '{0}' is not assignable to type '{1}'. Did you mean '{2}'?"),
          Import_assertions_are_only_supported_when_the_module_option_is_set_to_esnext_nodenext_or_preserve: b(2821, 1, "Import_assertions_are_only_supported_when_the_module_option_is_set_to_esnext_nodenext_or_preserve_2821", "Import assertions are only supported when the '--module' option is set to 'esnext', 'nodenext', or 'preserve'."),
          Import_assertions_cannot_be_used_with_type_only_imports_or_exports: b(2822, 1, "Import_assertions_cannot_be_used_with_type_only_imports_or_exports_2822", "Import assertions cannot be used with type-only imports or exports."),
          Import_attributes_are_only_supported_when_the_module_option_is_set_to_esnext_nodenext_or_preserve: b(2823, 1, "Import_attributes_are_only_supported_when_the_module_option_is_set_to_esnext_nodenext_or_preserve_2823", "Import attributes are only supported when the '--module' option is set to 'esnext', 'nodenext', or 'preserve'."),
          Cannot_find_namespace_0_Did_you_mean_1: b(2833, 1, "Cannot_find_namespace_0_Did_you_mean_1_2833", "Cannot find namespace '{0}'. Did you mean '{1}'?"),
          Relative_import_paths_need_explicit_file_extensions_in_ECMAScript_imports_when_moduleResolution_is_node16_or_nodenext_Consider_adding_an_extension_to_the_import_path: b(2834, 1, "Relative_import_paths_need_explicit_file_extensions_in_ECMAScript_imports_when_moduleResolution_is_n_2834", "Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path."),
          Relative_import_paths_need_explicit_file_extensions_in_ECMAScript_imports_when_moduleResolution_is_node16_or_nodenext_Did_you_mean_0: b(2835, 1, "Relative_import_paths_need_explicit_file_extensions_in_ECMAScript_imports_when_moduleResolution_is_n_2835", "Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '{0}'?"),
          Import_assertions_are_not_allowed_on_statements_that_compile_to_CommonJS_require_calls: b(2836, 1, "Import_assertions_are_not_allowed_on_statements_that_compile_to_CommonJS_require_calls_2836", "Import assertions are not allowed on statements that compile to CommonJS 'require' calls."),
          Import_assertion_values_must_be_string_literal_expressions: b(2837, 1, "Import_assertion_values_must_be_string_literal_expressions_2837", "Import assertion values must be string literal expressions."),
          All_declarations_of_0_must_have_identical_constraints: b(2838, 1, "All_declarations_of_0_must_have_identical_constraints_2838", "All declarations of '{0}' must have identical constraints."),
          This_condition_will_always_return_0_since_JavaScript_compares_objects_by_reference_not_value: b(2839, 1, "This_condition_will_always_return_0_since_JavaScript_compares_objects_by_reference_not_value_2839", "This condition will always return '{0}' since JavaScript compares objects by reference, not value."),
          An_interface_cannot_extend_a_primitive_type_like_0_It_can_only_extend_other_named_object_types: b(2840, 1, "An_interface_cannot_extend_a_primitive_type_like_0_It_can_only_extend_other_named_object_types_2840", "An interface cannot extend a primitive type like '{0}'. It can only extend other named object types."),
          _0_is_an_unused_renaming_of_1_Did_you_intend_to_use_it_as_a_type_annotation: b(2842, 1, "_0_is_an_unused_renaming_of_1_Did_you_intend_to_use_it_as_a_type_annotation_2842", "'{0}' is an unused renaming of '{1}'. Did you intend to use it as a type annotation?"),
          We_can_only_write_a_type_for_0_by_adding_a_type_for_the_entire_parameter_here: b(2843, 1, "We_can_only_write_a_type_for_0_by_adding_a_type_for_the_entire_parameter_here_2843", "We can only write a type for '{0}' by adding a type for the entire parameter here."),
          Type_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: b(2844, 1, "Type_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor_2844", "Type of instance member variable '{0}' cannot reference identifier '{1}' declared in the constructor."),
          This_condition_will_always_return_0: b(2845, 1, "This_condition_will_always_return_0_2845", "This condition will always return '{0}'."),
          A_declaration_file_cannot_be_imported_without_import_type_Did_you_mean_to_import_an_implementation_file_0_instead: b(2846, 1, "A_declaration_file_cannot_be_imported_without_import_type_Did_you_mean_to_import_an_implementation_f_2846", "A declaration file cannot be imported without 'import type'. Did you mean to import an implementation file '{0}' instead?"),
          The_right_hand_side_of_an_instanceof_expression_must_not_be_an_instantiation_expression: b(2848, 1, "The_right_hand_side_of_an_instanceof_expression_must_not_be_an_instantiation_expression_2848", "The right-hand side of an 'instanceof' expression must not be an instantiation expression."),
          Target_signature_provides_too_few_arguments_Expected_0_or_more_but_got_1: b(2849, 1, "Target_signature_provides_too_few_arguments_Expected_0_or_more_but_got_1_2849", "Target signature provides too few arguments. Expected {0} or more, but got {1}."),
          The_initializer_of_a_using_declaration_must_be_either_an_object_with_a_Symbol_dispose_method_or_be_null_or_undefined: b(2850, 1, "The_initializer_of_a_using_declaration_must_be_either_an_object_with_a_Symbol_dispose_method_or_be_n_2850", "The initializer of a 'using' declaration must be either an object with a '[Symbol.dispose]()' method, or be 'null' or 'undefined'."),
          The_initializer_of_an_await_using_declaration_must_be_either_an_object_with_a_Symbol_asyncDispose_or_Symbol_dispose_method_or_be_null_or_undefined: b(2851, 1, "The_initializer_of_an_await_using_declaration_must_be_either_an_object_with_a_Symbol_asyncDispose_or_2851", "The initializer of an 'await using' declaration must be either an object with a '[Symbol.asyncDispose]()' or '[Symbol.dispose]()' method, or be 'null' or 'undefined'."),
          await_using_statements_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules: b(2852, 1, "await_using_statements_are_only_allowed_within_async_functions_and_at_the_top_levels_of_modules_2852", "'await using' statements are only allowed within async functions and at the top levels of modules."),
          await_using_statements_are_only_allowed_at_the_top_level_of_a_file_when_that_file_is_a_module_but_this_file_has_no_imports_or_exports_Consider_adding_an_empty_export_to_make_this_file_a_module: b(2853, 1, "await_using_statements_are_only_allowed_at_the_top_level_of_a_file_when_that_file_is_a_module_but_th_2853", "'await using' statements are only allowed at the top level of a file when that file is a module, but this file has no imports or exports. Consider adding an empty 'export {}' to make this file a module."),
          Top_level_await_using_statements_are_only_allowed_when_the_module_option_is_set_to_es2022_esnext_system_node16_nodenext_or_preserve_and_the_target_option_is_set_to_es2017_or_higher: b(2854, 1, "Top_level_await_using_statements_are_only_allowed_when_the_module_option_is_set_to_es2022_esnext_sys_2854", "Top-level 'await using' statements are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher."),
          Class_field_0_defined_by_the_parent_class_is_not_accessible_in_the_child_class_via_super: b(2855, 1, "Class_field_0_defined_by_the_parent_class_is_not_accessible_in_the_child_class_via_super_2855", "Class field '{0}' defined by the parent class is not accessible in the child class via super."),
          Import_attributes_are_not_allowed_on_statements_that_compile_to_CommonJS_require_calls: b(2856, 1, "Import_attributes_are_not_allowed_on_statements_that_compile_to_CommonJS_require_calls_2856", "Import attributes are not allowed on statements that compile to CommonJS 'require' calls."),
          Import_attributes_cannot_be_used_with_type_only_imports_or_exports: b(2857, 1, "Import_attributes_cannot_be_used_with_type_only_imports_or_exports_2857", "Import attributes cannot be used with type-only imports or exports."),
          Import_attribute_values_must_be_string_literal_expressions: b(2858, 1, "Import_attribute_values_must_be_string_literal_expressions_2858", "Import attribute values must be string literal expressions."),
          Excessive_complexity_comparing_types_0_and_1: b(2859, 1, "Excessive_complexity_comparing_types_0_and_1_2859", "Excessive complexity comparing types '{0}' and '{1}'."),
          The_left_hand_side_of_an_instanceof_expression_must_be_assignable_to_the_first_argument_of_the_right_hand_side_s_Symbol_hasInstance_method: b(2860, 1, "The_left_hand_side_of_an_instanceof_expression_must_be_assignable_to_the_first_argument_of_the_right_2860", "The left-hand side of an 'instanceof' expression must be assignable to the first argument of the right-hand side's '[Symbol.hasInstance]' method."),
          An_object_s_Symbol_hasInstance_method_must_return_a_boolean_value_for_it_to_be_used_on_the_right_hand_side_of_an_instanceof_expression: b(2861, 1, "An_object_s_Symbol_hasInstance_method_must_return_a_boolean_value_for_it_to_be_used_on_the_right_han_2861", "An object's '[Symbol.hasInstance]' method must return a boolean value for it to be used on the right-hand side of an 'instanceof' expression."),
          Type_0_is_generic_and_can_only_be_indexed_for_reading: b(2862, 1, "Type_0_is_generic_and_can_only_be_indexed_for_reading_2862", "Type '{0}' is generic and can only be indexed for reading."),
          A_class_cannot_extend_a_primitive_type_like_0_Classes_can_only_extend_constructable_values: b(2863, 1, "A_class_cannot_extend_a_primitive_type_like_0_Classes_can_only_extend_constructable_values_2863", "A class cannot extend a primitive type like '{0}'. Classes can only extend constructable values."),
          A_class_cannot_implement_a_primitive_type_like_0_It_can_only_implement_other_named_object_types: b(2864, 1, "A_class_cannot_implement_a_primitive_type_like_0_It_can_only_implement_other_named_object_types_2864", "A class cannot implement a primitive type like '{0}'. It can only implement other named object types."),
          Import_0_conflicts_with_local_value_so_must_be_declared_with_a_type_only_import_when_isolatedModules_is_enabled: b(2865, 1, "Import_0_conflicts_with_local_value_so_must_be_declared_with_a_type_only_import_when_isolatedModules_2865", "Import '{0}' conflicts with local value, so must be declared with a type-only import when 'isolatedModules' is enabled."),
          Import_0_conflicts_with_global_value_used_in_this_file_so_must_be_declared_with_a_type_only_import_when_isolatedModules_is_enabled: b(2866, 1, "Import_0_conflicts_with_global_value_used_in_this_file_so_must_be_declared_with_a_type_only_import_w_2866", "Import '{0}' conflicts with global value used in this file, so must be declared with a type-only import when 'isolatedModules' is enabled."),
          Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_Bun_Try_npm_i_save_dev_types_Slashbun: b(2867, 1, "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_Bun_Try_npm_i_save_dev_types_Slashbun_2867", "Cannot find name '{0}'. Do you need to install type definitions for Bun? Try `npm i --save-dev @types/bun`."),
          Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_Bun_Try_npm_i_save_dev_types_Slashbun_and_then_add_bun_to_the_types_field_in_your_tsconfig: b(2868, 1, "Cannot_find_name_0_Do_you_need_to_install_type_definitions_for_Bun_Try_npm_i_save_dev_types_Slashbun_2868", "Cannot find name '{0}'. Do you need to install type definitions for Bun? Try `npm i --save-dev @types/bun` and then add 'bun' to the types field in your tsconfig."),
          Import_declaration_0_is_using_private_name_1: b(4e3, 1, "Import_declaration_0_is_using_private_name_1_4000", "Import declaration '{0}' is using private name '{1}'."),
          Type_parameter_0_of_exported_class_has_or_is_using_private_name_1: b(4002, 1, "Type_parameter_0_of_exported_class_has_or_is_using_private_name_1_4002", "Type parameter '{0}' of exported class has or is using private name '{1}'."),
          Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1: b(4004, 1, "Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1_4004", "Type parameter '{0}' of exported interface has or is using private name '{1}'."),
          Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: b(4006, 1, "Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1_4006", "Type parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'."),
          Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: b(4008, 1, "Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1_4008", "Type parameter '{0}' of call signature from exported interface has or is using private name '{1}'."),
          Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: b(4010, 1, "Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1_4010", "Type parameter '{0}' of public static method from exported class has or is using private name '{1}'."),
          Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: b(4012, 1, "Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1_4012", "Type parameter '{0}' of public method from exported class has or is using private name '{1}'."),
          Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: b(4014, 1, "Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1_4014", "Type parameter '{0}' of method from exported interface has or is using private name '{1}'."),
          Type_parameter_0_of_exported_function_has_or_is_using_private_name_1: b(4016, 1, "Type_parameter_0_of_exported_function_has_or_is_using_private_name_1_4016", "Type parameter '{0}' of exported function has or is using private name '{1}'."),
          Implements_clause_of_exported_class_0_has_or_is_using_private_name_1: b(4019, 1, "Implements_clause_of_exported_class_0_has_or_is_using_private_name_1_4019", "Implements clause of exported class '{0}' has or is using private name '{1}'."),
          extends_clause_of_exported_class_0_has_or_is_using_private_name_1: b(4020, 1, "extends_clause_of_exported_class_0_has_or_is_using_private_name_1_4020", "'extends' clause of exported class '{0}' has or is using private name '{1}'."),
          extends_clause_of_exported_class_has_or_is_using_private_name_0: b(4021, 1, "extends_clause_of_exported_class_has_or_is_using_private_name_0_4021", "'extends' clause of exported class has or is using private name '{0}'."),
          extends_clause_of_exported_interface_0_has_or_is_using_private_name_1: b(4022, 1, "extends_clause_of_exported_interface_0_has_or_is_using_private_name_1_4022", "'extends' clause of exported interface '{0}' has or is using private name '{1}'."),
          Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4023, 1, "Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4023", "Exported variable '{0}' has or is using name '{1}' from external module {2} but cannot be named."),
          Exported_variable_0_has_or_is_using_name_1_from_private_module_2: b(4024, 1, "Exported_variable_0_has_or_is_using_name_1_from_private_module_2_4024", "Exported variable '{0}' has or is using name '{1}' from private module '{2}'."),
          Exported_variable_0_has_or_is_using_private_name_1: b(4025, 1, "Exported_variable_0_has_or_is_using_private_name_1_4025", "Exported variable '{0}' has or is using private name '{1}'."),
          Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4026, 1, "Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot__4026", "Public static property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."),
          Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: b(4027, 1, "Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4027", "Public static property '{0}' of exported class has or is using name '{1}' from private module '{2}'."),
          Public_static_property_0_of_exported_class_has_or_is_using_private_name_1: b(4028, 1, "Public_static_property_0_of_exported_class_has_or_is_using_private_name_1_4028", "Public static property '{0}' of exported class has or is using private name '{1}'."),
          Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4029, 1, "Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_name_4029", "Public property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."),
          Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: b(4030, 1, "Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4030", "Public property '{0}' of exported class has or is using name '{1}' from private module '{2}'."),
          Public_property_0_of_exported_class_has_or_is_using_private_name_1: b(4031, 1, "Public_property_0_of_exported_class_has_or_is_using_private_name_1_4031", "Public property '{0}' of exported class has or is using private name '{1}'."),
          Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2: b(4032, 1, "Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2_4032", "Property '{0}' of exported interface has or is using name '{1}' from private module '{2}'."),
          Property_0_of_exported_interface_has_or_is_using_private_name_1: b(4033, 1, "Property_0_of_exported_interface_has_or_is_using_private_name_1_4033", "Property '{0}' of exported interface has or is using private name '{1}'."),
          Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: b(4034, 1, "Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_name_1_from_private_mod_4034", "Parameter type of public static setter '{0}' from exported class has or is using name '{1}' from private module '{2}'."),
          Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_private_name_1: b(4035, 1, "Parameter_type_of_public_static_setter_0_from_exported_class_has_or_is_using_private_name_1_4035", "Parameter type of public static setter '{0}' from exported class has or is using private name '{1}'."),
          Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: b(4036, 1, "Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2_4036", "Parameter type of public setter '{0}' from exported class has or is using name '{1}' from private module '{2}'."),
          Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_private_name_1: b(4037, 1, "Parameter_type_of_public_setter_0_from_exported_class_has_or_is_using_private_name_1_4037", "Parameter type of public setter '{0}' from exported class has or is using private name '{1}'."),
          Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4038, 1, "Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_external_modul_4038", "Return type of public static getter '{0}' from exported class has or is using name '{1}' from external module {2} but cannot be named."),
          Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: b(4039, 1, "Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_4039", "Return type of public static getter '{0}' from exported class has or is using name '{1}' from private module '{2}'."),
          Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_private_name_1: b(4040, 1, "Return_type_of_public_static_getter_0_from_exported_class_has_or_is_using_private_name_1_4040", "Return type of public static getter '{0}' from exported class has or is using private name '{1}'."),
          Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4041, 1, "Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_4041", "Return type of public getter '{0}' from exported class has or is using name '{1}' from external module {2} but cannot be named."),
          Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2: b(4042, 1, "Return_type_of_public_getter_0_from_exported_class_has_or_is_using_name_1_from_private_module_2_4042", "Return type of public getter '{0}' from exported class has or is using name '{1}' from private module '{2}'."),
          Return_type_of_public_getter_0_from_exported_class_has_or_is_using_private_name_1: b(4043, 1, "Return_type_of_public_getter_0_from_exported_class_has_or_is_using_private_name_1_4043", "Return type of public getter '{0}' from exported class has or is using private name '{1}'."),
          Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: b(4044, 1, "Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_mod_4044", "Return type of constructor signature from exported interface has or is using name '{0}' from private module '{1}'."),
          Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0: b(4045, 1, "Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0_4045", "Return type of constructor signature from exported interface has or is using private name '{0}'."),
          Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: b(4046, 1, "Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4046", "Return type of call signature from exported interface has or is using name '{0}' from private module '{1}'."),
          Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0: b(4047, 1, "Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0_4047", "Return type of call signature from exported interface has or is using private name '{0}'."),
          Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: b(4048, 1, "Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4048", "Return type of index signature from exported interface has or is using name '{0}' from private module '{1}'."),
          Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0: b(4049, 1, "Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0_4049", "Return type of index signature from exported interface has or is using private name '{0}'."),
          Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: b(4050, 1, "Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module__4050", "Return type of public static method from exported class has or is using name '{0}' from external module {1} but cannot be named."),
          Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: b(4051, 1, "Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1_4051", "Return type of public static method from exported class has or is using name '{0}' from private module '{1}'."),
          Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0: b(4052, 1, "Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0_4052", "Return type of public static method from exported class has or is using private name '{0}'."),
          Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: b(4053, 1, "Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_c_4053", "Return type of public method from exported class has or is using name '{0}' from external module {1} but cannot be named."),
          Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: b(4054, 1, "Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1_4054", "Return type of public method from exported class has or is using name '{0}' from private module '{1}'."),
          Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0: b(4055, 1, "Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0_4055", "Return type of public method from exported class has or is using private name '{0}'."),
          Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1: b(4056, 1, "Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1_4056", "Return type of method from exported interface has or is using name '{0}' from private module '{1}'."),
          Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0: b(4057, 1, "Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0_4057", "Return type of method from exported interface has or is using private name '{0}'."),
          Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: b(4058, 1, "Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named_4058", "Return type of exported function has or is using name '{0}' from external module {1} but cannot be named."),
          Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1: b(4059, 1, "Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1_4059", "Return type of exported function has or is using name '{0}' from private module '{1}'."),
          Return_type_of_exported_function_has_or_is_using_private_name_0: b(4060, 1, "Return_type_of_exported_function_has_or_is_using_private_name_0_4060", "Return type of exported function has or is using private name '{0}'."),
          Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4061, 1, "Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_can_4061", "Parameter '{0}' of constructor from exported class has or is using name '{1}' from external module {2} but cannot be named."),
          Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2: b(4062, 1, "Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2_4062", "Parameter '{0}' of constructor from exported class has or is using name '{1}' from private module '{2}'."),
          Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1: b(4063, 1, "Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1_4063", "Parameter '{0}' of constructor from exported class has or is using private name '{1}'."),
          Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: b(4064, 1, "Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_mod_4064", "Parameter '{0}' of constructor signature from exported interface has or is using name '{1}' from private module '{2}'."),
          Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: b(4065, 1, "Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1_4065", "Parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'."),
          Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: b(4066, 1, "Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2_4066", "Parameter '{0}' of call signature from exported interface has or is using name '{1}' from private module '{2}'."),
          Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: b(4067, 1, "Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1_4067", "Parameter '{0}' of call signature from exported interface has or is using private name '{1}'."),
          Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4068, 1, "Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module__4068", "Parameter '{0}' of public static method from exported class has or is using name '{1}' from external module {2} but cannot be named."),
          Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: b(4069, 1, "Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2_4069", "Parameter '{0}' of public static method from exported class has or is using name '{1}' from private module '{2}'."),
          Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: b(4070, 1, "Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1_4070", "Parameter '{0}' of public static method from exported class has or is using private name '{1}'."),
          Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4071, 1, "Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_c_4071", "Parameter '{0}' of public method from exported class has or is using name '{1}' from external module {2} but cannot be named."),
          Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: b(4072, 1, "Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2_4072", "Parameter '{0}' of public method from exported class has or is using name '{1}' from private module '{2}'."),
          Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: b(4073, 1, "Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1_4073", "Parameter '{0}' of public method from exported class has or is using private name '{1}'."),
          Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2: b(4074, 1, "Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2_4074", "Parameter '{0}' of method from exported interface has or is using name '{1}' from private module '{2}'."),
          Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: b(4075, 1, "Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1_4075", "Parameter '{0}' of method from exported interface has or is using private name '{1}'."),
          Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4076, 1, "Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4076", "Parameter '{0}' of exported function has or is using name '{1}' from external module {2} but cannot be named."),
          Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2: b(4077, 1, "Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2_4077", "Parameter '{0}' of exported function has or is using name '{1}' from private module '{2}'."),
          Parameter_0_of_exported_function_has_or_is_using_private_name_1: b(4078, 1, "Parameter_0_of_exported_function_has_or_is_using_private_name_1_4078", "Parameter '{0}' of exported function has or is using private name '{1}'."),
          Exported_type_alias_0_has_or_is_using_private_name_1: b(4081, 1, "Exported_type_alias_0_has_or_is_using_private_name_1_4081", "Exported type alias '{0}' has or is using private name '{1}'."),
          Default_export_of_the_module_has_or_is_using_private_name_0: b(4082, 1, "Default_export_of_the_module_has_or_is_using_private_name_0_4082", "Default export of the module has or is using private name '{0}'."),
          Type_parameter_0_of_exported_type_alias_has_or_is_using_private_name_1: b(4083, 1, "Type_parameter_0_of_exported_type_alias_has_or_is_using_private_name_1_4083", "Type parameter '{0}' of exported type alias has or is using private name '{1}'."),
          Exported_type_alias_0_has_or_is_using_private_name_1_from_module_2: b(4084, 1, "Exported_type_alias_0_has_or_is_using_private_name_1_from_module_2_4084", "Exported type alias '{0}' has or is using private name '{1}' from module {2}."),
          Extends_clause_for_inferred_type_0_has_or_is_using_private_name_1: b(4085, 1, "Extends_clause_for_inferred_type_0_has_or_is_using_private_name_1_4085", "Extends clause for inferred type '{0}' has or is using private name '{1}'."),
          Conflicting_definitions_for_0_found_at_1_and_2_Consider_installing_a_specific_version_of_this_library_to_resolve_the_conflict: b(4090, 1, "Conflicting_definitions_for_0_found_at_1_and_2_Consider_installing_a_specific_version_of_this_librar_4090", "Conflicting definitions for '{0}' found at '{1}' and '{2}'. Consider installing a specific version of this library to resolve the conflict."),
          Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: b(4091, 1, "Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2_4091", "Parameter '{0}' of index signature from exported interface has or is using name '{1}' from private module '{2}'."),
          Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_private_name_1: b(4092, 1, "Parameter_0_of_index_signature_from_exported_interface_has_or_is_using_private_name_1_4092", "Parameter '{0}' of index signature from exported interface has or is using private name '{1}'."),
          Property_0_of_exported_class_expression_may_not_be_private_or_protected: b(4094, 1, "Property_0_of_exported_class_expression_may_not_be_private_or_protected_4094", "Property '{0}' of exported class expression may not be private or protected."),
          Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4095, 1, "Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_4095", "Public static method '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."),
          Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: b(4096, 1, "Public_static_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4096", "Public static method '{0}' of exported class has or is using name '{1}' from private module '{2}'."),
          Public_static_method_0_of_exported_class_has_or_is_using_private_name_1: b(4097, 1, "Public_static_method_0_of_exported_class_has_or_is_using_private_name_1_4097", "Public static method '{0}' of exported class has or is using private name '{1}'."),
          Public_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4098, 1, "Public_method_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4098", "Public method '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named."),
          Public_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: b(4099, 1, "Public_method_0_of_exported_class_has_or_is_using_name_1_from_private_module_2_4099", "Public method '{0}' of exported class has or is using name '{1}' from private module '{2}'."),
          Public_method_0_of_exported_class_has_or_is_using_private_name_1: b(4100, 1, "Public_method_0_of_exported_class_has_or_is_using_private_name_1_4100", "Public method '{0}' of exported class has or is using private name '{1}'."),
          Method_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2: b(4101, 1, "Method_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2_4101", "Method '{0}' of exported interface has or is using name '{1}' from private module '{2}'."),
          Method_0_of_exported_interface_has_or_is_using_private_name_1: b(4102, 1, "Method_0_of_exported_interface_has_or_is_using_private_name_1_4102", "Method '{0}' of exported interface has or is using private name '{1}'."),
          Type_parameter_0_of_exported_mapped_object_type_is_using_private_name_1: b(4103, 1, "Type_parameter_0_of_exported_mapped_object_type_is_using_private_name_1_4103", "Type parameter '{0}' of exported mapped object type is using private name '{1}'."),
          The_type_0_is_readonly_and_cannot_be_assigned_to_the_mutable_type_1: b(4104, 1, "The_type_0_is_readonly_and_cannot_be_assigned_to_the_mutable_type_1_4104", "The type '{0}' is 'readonly' and cannot be assigned to the mutable type '{1}'."),
          Private_or_protected_member_0_cannot_be_accessed_on_a_type_parameter: b(4105, 1, "Private_or_protected_member_0_cannot_be_accessed_on_a_type_parameter_4105", "Private or protected member '{0}' cannot be accessed on a type parameter."),
          Parameter_0_of_accessor_has_or_is_using_private_name_1: b(4106, 1, "Parameter_0_of_accessor_has_or_is_using_private_name_1_4106", "Parameter '{0}' of accessor has or is using private name '{1}'."),
          Parameter_0_of_accessor_has_or_is_using_name_1_from_private_module_2: b(4107, 1, "Parameter_0_of_accessor_has_or_is_using_name_1_from_private_module_2_4107", "Parameter '{0}' of accessor has or is using name '{1}' from private module '{2}'."),
          Parameter_0_of_accessor_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: b(4108, 1, "Parameter_0_of_accessor_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named_4108", "Parameter '{0}' of accessor has or is using name '{1}' from external module '{2}' but cannot be named."),
          Type_arguments_for_0_circularly_reference_themselves: b(4109, 1, "Type_arguments_for_0_circularly_reference_themselves_4109", "Type arguments for '{0}' circularly reference themselves."),
          Tuple_type_arguments_circularly_reference_themselves: b(4110, 1, "Tuple_type_arguments_circularly_reference_themselves_4110", "Tuple type arguments circularly reference themselves."),
          Property_0_comes_from_an_index_signature_so_it_must_be_accessed_with_0: b(4111, 1, "Property_0_comes_from_an_index_signature_so_it_must_be_accessed_with_0_4111", "Property '{0}' comes from an index signature, so it must be accessed with ['{0}']."),
          This_member_cannot_have_an_override_modifier_because_its_containing_class_0_does_not_extend_another_class: b(4112, 1, "This_member_cannot_have_an_override_modifier_because_its_containing_class_0_does_not_extend_another__4112", "This member cannot have an 'override' modifier because its containing class '{0}' does not extend another class."),
          This_member_cannot_have_an_override_modifier_because_it_is_not_declared_in_the_base_class_0: b(4113, 1, "This_member_cannot_have_an_override_modifier_because_it_is_not_declared_in_the_base_class_0_4113", "This member cannot have an 'override' modifier because it is not declared in the base class '{0}'."),
          This_member_must_have_an_override_modifier_because_it_overrides_a_member_in_the_base_class_0: b(4114, 1, "This_member_must_have_an_override_modifier_because_it_overrides_a_member_in_the_base_class_0_4114", "This member must have an 'override' modifier because it overrides a member in the base class '{0}'."),
          This_parameter_property_must_have_an_override_modifier_because_it_overrides_a_member_in_base_class_0: b(4115, 1, "This_parameter_property_must_have_an_override_modifier_because_it_overrides_a_member_in_base_class_0_4115", "This parameter property must have an 'override' modifier because it overrides a member in base class '{0}'."),
          This_member_must_have_an_override_modifier_because_it_overrides_an_abstract_method_that_is_declared_in_the_base_class_0: b(4116, 1, "This_member_must_have_an_override_modifier_because_it_overrides_an_abstract_method_that_is_declared__4116", "This member must have an 'override' modifier because it overrides an abstract method that is declared in the base class '{0}'."),
          This_member_cannot_have_an_override_modifier_because_it_is_not_declared_in_the_base_class_0_Did_you_mean_1: b(4117, 1, "This_member_cannot_have_an_override_modifier_because_it_is_not_declared_in_the_base_class_0_Did_you__4117", "This member cannot have an 'override' modifier because it is not declared in the base class '{0}'. Did you mean '{1}'?"),
          The_type_of_this_node_cannot_be_serialized_because_its_property_0_cannot_be_serialized: b(4118, 1, "The_type_of_this_node_cannot_be_serialized_because_its_property_0_cannot_be_serialized_4118", "The type of this node cannot be serialized because its property '{0}' cannot be serialized."),
          This_member_must_have_a_JSDoc_comment_with_an_override_tag_because_it_overrides_a_member_in_the_base_class_0: b(4119, 1, "This_member_must_have_a_JSDoc_comment_with_an_override_tag_because_it_overrides_a_member_in_the_base_4119", "This member must have a JSDoc comment with an '@override' tag because it overrides a member in the base class '{0}'."),
          This_parameter_property_must_have_a_JSDoc_comment_with_an_override_tag_because_it_overrides_a_member_in_the_base_class_0: b(4120, 1, "This_parameter_property_must_have_a_JSDoc_comment_with_an_override_tag_because_it_overrides_a_member_4120", "This parameter property must have a JSDoc comment with an '@override' tag because it overrides a member in the base class '{0}'."),
          This_member_cannot_have_a_JSDoc_comment_with_an_override_tag_because_its_containing_class_0_does_not_extend_another_class: b(4121, 1, "This_member_cannot_have_a_JSDoc_comment_with_an_override_tag_because_its_containing_class_0_does_not_4121", "This member cannot have a JSDoc comment with an '@override' tag because its containing class '{0}' does not extend another class."),
          This_member_cannot_have_a_JSDoc_comment_with_an_override_tag_because_it_is_not_declared_in_the_base_class_0: b(4122, 1, "This_member_cannot_have_a_JSDoc_comment_with_an_override_tag_because_it_is_not_declared_in_the_base__4122", "This member cannot have a JSDoc comment with an '@override' tag because it is not declared in the base class '{0}'."),
          This_member_cannot_have_a_JSDoc_comment_with_an_override_tag_because_it_is_not_declared_in_the_base_class_0_Did_you_mean_1: b(4123, 1, "This_member_cannot_have_a_JSDoc_comment_with_an_override_tag_because_it_is_not_declared_in_the_base__4123", "This member cannot have a JSDoc comment with an 'override' tag because it is not declared in the base class '{0}'. Did you mean '{1}'?"),
          Compiler_option_0_of_value_1_is_unstable_Use_nightly_TypeScript_to_silence_this_error_Try_updating_with_npm_install_D_typescript_next: b(4124, 1, "Compiler_option_0_of_value_1_is_unstable_Use_nightly_TypeScript_to_silence_this_error_Try_updating_w_4124", "Compiler option '{0}' of value '{1}' is unstable. Use nightly TypeScript to silence this error. Try updating with 'npm install -D typescript@next'."),
          Each_declaration_of_0_1_differs_in_its_value_where_2_was_expected_but_3_was_given: b(4125, 1, "Each_declaration_of_0_1_differs_in_its_value_where_2_was_expected_but_3_was_given_4125", "Each declaration of '{0}.{1}' differs in its value, where '{2}' was expected but '{3}' was given."),
          One_value_of_0_1_is_the_string_2_and_the_other_is_assumed_to_be_an_unknown_numeric_value: b(4126, 1, "One_value_of_0_1_is_the_string_2_and_the_other_is_assumed_to_be_an_unknown_numeric_value_4126", "One value of '{0}.{1}' is the string '{2}', and the other is assumed to be an unknown numeric value."),
          The_current_host_does_not_support_the_0_option: b(5001, 1, "The_current_host_does_not_support_the_0_option_5001", "The current host does not support the '{0}' option."),
          Cannot_find_the_common_subdirectory_path_for_the_input_files: b(5009, 1, "Cannot_find_the_common_subdirectory_path_for_the_input_files_5009", "Cannot find the common subdirectory path for the input files."),
          File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: b(5010, 1, "File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0_5010", "File specification cannot end in a recursive directory wildcard ('**'): '{0}'."),
          Cannot_read_file_0_Colon_1: b(5012, 1, "Cannot_read_file_0_Colon_1_5012", "Cannot read file '{0}': {1}."),
          Failed_to_parse_file_0_Colon_1: b(5014, 1, "Failed_to_parse_file_0_Colon_1_5014", "Failed to parse file '{0}': {1}."),
          Unknown_compiler_option_0: b(5023, 1, "Unknown_compiler_option_0_5023", "Unknown compiler option '{0}'."),
          Compiler_option_0_requires_a_value_of_type_1: b(5024, 1, "Compiler_option_0_requires_a_value_of_type_1_5024", "Compiler option '{0}' requires a value of type {1}."),
          Unknown_compiler_option_0_Did_you_mean_1: b(5025, 1, "Unknown_compiler_option_0_Did_you_mean_1_5025", "Unknown compiler option '{0}'. Did you mean '{1}'?"),
          Could_not_write_file_0_Colon_1: b(5033, 1, "Could_not_write_file_0_Colon_1_5033", "Could not write file '{0}': {1}."),
          Option_project_cannot_be_mixed_with_source_files_on_a_command_line: b(5042, 1, "Option_project_cannot_be_mixed_with_source_files_on_a_command_line_5042", "Option 'project' cannot be mixed with source files on a command line."),
          Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES2015_or_higher: b(5047, 1, "Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES_5047", "Option 'isolatedModules' can only be used when either option '--module' is provided or option 'target' is 'ES2015' or higher."),
          Option_0_cannot_be_specified_when_option_target_is_ES3: b(5048, 1, "Option_0_cannot_be_specified_when_option_target_is_ES3_5048", "Option '{0}' cannot be specified when option 'target' is 'ES3'."),
          Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided: b(5051, 1, "Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided_5051", "Option '{0} can only be used when either option '--inlineSourceMap' or option '--sourceMap' is provided."),
          Option_0_cannot_be_specified_without_specifying_option_1: b(5052, 1, "Option_0_cannot_be_specified_without_specifying_option_1_5052", "Option '{0}' cannot be specified without specifying option '{1}'."),
          Option_0_cannot_be_specified_with_option_1: b(5053, 1, "Option_0_cannot_be_specified_with_option_1_5053", "Option '{0}' cannot be specified with option '{1}'."),
          A_tsconfig_json_file_is_already_defined_at_Colon_0: b(5054, 1, "A_tsconfig_json_file_is_already_defined_at_Colon_0_5054", "A 'tsconfig.json' file is already defined at: '{0}'."),
          Cannot_write_file_0_because_it_would_overwrite_input_file: b(5055, 1, "Cannot_write_file_0_because_it_would_overwrite_input_file_5055", "Cannot write file '{0}' because it would overwrite input file."),
          Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files: b(5056, 1, "Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files_5056", "Cannot write file '{0}' because it would be overwritten by multiple input files."),
          Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0: b(5057, 1, "Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0_5057", "Cannot find a tsconfig.json file at the specified directory: '{0}'."),
          The_specified_path_does_not_exist_Colon_0: b(5058, 1, "The_specified_path_does_not_exist_Colon_0_5058", "The specified path does not exist: '{0}'."),
          Invalid_value_for_reactNamespace_0_is_not_a_valid_identifier: b(5059, 1, "Invalid_value_for_reactNamespace_0_is_not_a_valid_identifier_5059", "Invalid value for '--reactNamespace'. '{0}' is not a valid identifier."),
          Pattern_0_can_have_at_most_one_Asterisk_character: b(5061, 1, "Pattern_0_can_have_at_most_one_Asterisk_character_5061", "Pattern '{0}' can have at most one '*' character."),
          Substitution_0_in_pattern_1_can_have_at_most_one_Asterisk_character: b(5062, 1, "Substitution_0_in_pattern_1_can_have_at_most_one_Asterisk_character_5062", "Substitution '{0}' in pattern '{1}' can have at most one '*' character."),
          Substitutions_for_pattern_0_should_be_an_array: b(5063, 1, "Substitutions_for_pattern_0_should_be_an_array_5063", "Substitutions for pattern '{0}' should be an array."),
          Substitution_0_for_pattern_1_has_incorrect_type_expected_string_got_2: b(5064, 1, "Substitution_0_for_pattern_1_has_incorrect_type_expected_string_got_2_5064", "Substitution '{0}' for pattern '{1}' has incorrect type, expected 'string', got '{2}'."),
          File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: b(5065, 1, "File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildca_5065", "File specification cannot contain a parent directory ('..') that appears after a recursive directory wildcard ('**'): '{0}'."),
          Substitutions_for_pattern_0_shouldn_t_be_an_empty_array: b(5066, 1, "Substitutions_for_pattern_0_shouldn_t_be_an_empty_array_5066", "Substitutions for pattern '{0}' shouldn't be an empty array."),
          Invalid_value_for_jsxFactory_0_is_not_a_valid_identifier_or_qualified_name: b(5067, 1, "Invalid_value_for_jsxFactory_0_is_not_a_valid_identifier_or_qualified_name_5067", "Invalid value for 'jsxFactory'. '{0}' is not a valid identifier or qualified-name."),
          Adding_a_tsconfig_json_file_will_help_organize_projects_that_contain_both_TypeScript_and_JavaScript_files_Learn_more_at_https_Colon_Slash_Slashaka_ms_Slashtsconfig: b(5068, 1, "Adding_a_tsconfig_json_file_will_help_organize_projects_that_contain_both_TypeScript_and_JavaScript__5068", "Adding a tsconfig.json file will help organize projects that contain both TypeScript and JavaScript files. Learn more at https://aka.ms/tsconfig."),
          Option_0_cannot_be_specified_without_specifying_option_1_or_option_2: b(5069, 1, "Option_0_cannot_be_specified_without_specifying_option_1_or_option_2_5069", "Option '{0}' cannot be specified without specifying option '{1}' or option '{2}'."),
          Option_resolveJsonModule_cannot_be_specified_when_moduleResolution_is_set_to_classic: b(5070, 1, "Option_resolveJsonModule_cannot_be_specified_when_moduleResolution_is_set_to_classic_5070", "Option '--resolveJsonModule' cannot be specified when 'moduleResolution' is set to 'classic'."),
          Option_resolveJsonModule_cannot_be_specified_when_module_is_set_to_none_system_or_umd: b(5071, 1, "Option_resolveJsonModule_cannot_be_specified_when_module_is_set_to_none_system_or_umd_5071", "Option '--resolveJsonModule' cannot be specified when 'module' is set to 'none', 'system', or 'umd'."),
          Unknown_build_option_0: b(5072, 1, "Unknown_build_option_0_5072", "Unknown build option '{0}'."),
          Build_option_0_requires_a_value_of_type_1: b(5073, 1, "Build_option_0_requires_a_value_of_type_1_5073", "Build option '{0}' requires a value of type {1}."),
          Option_incremental_can_only_be_specified_using_tsconfig_emitting_to_single_file_or_when_option_tsBuildInfoFile_is_specified: b(5074, 1, "Option_incremental_can_only_be_specified_using_tsconfig_emitting_to_single_file_or_when_option_tsBui_5074", "Option '--incremental' can only be specified using tsconfig, emitting to single file or when option '--tsBuildInfoFile' is specified."),
          _0_is_assignable_to_the_constraint_of_type_1_but_1_could_be_instantiated_with_a_different_subtype_of_constraint_2: b(5075, 1, "_0_is_assignable_to_the_constraint_of_type_1_but_1_could_be_instantiated_with_a_different_subtype_of_5075", "'{0}' is assignable to the constraint of type '{1}', but '{1}' could be instantiated with a different subtype of constraint '{2}'."),
          _0_and_1_operations_cannot_be_mixed_without_parentheses: b(5076, 1, "_0_and_1_operations_cannot_be_mixed_without_parentheses_5076", "'{0}' and '{1}' operations cannot be mixed without parentheses."),
          Unknown_build_option_0_Did_you_mean_1: b(5077, 1, "Unknown_build_option_0_Did_you_mean_1_5077", "Unknown build option '{0}'. Did you mean '{1}'?"),
          Unknown_watch_option_0: b(5078, 1, "Unknown_watch_option_0_5078", "Unknown watch option '{0}'."),
          Unknown_watch_option_0_Did_you_mean_1: b(5079, 1, "Unknown_watch_option_0_Did_you_mean_1_5079", "Unknown watch option '{0}'. Did you mean '{1}'?"),
          Watch_option_0_requires_a_value_of_type_1: b(5080, 1, "Watch_option_0_requires_a_value_of_type_1_5080", "Watch option '{0}' requires a value of type {1}."),
          Cannot_find_a_tsconfig_json_file_at_the_current_directory_Colon_0: b(5081, 1, "Cannot_find_a_tsconfig_json_file_at_the_current_directory_Colon_0_5081", "Cannot find a tsconfig.json file at the current directory: {0}."),
          _0_could_be_instantiated_with_an_arbitrary_type_which_could_be_unrelated_to_1: b(5082, 1, "_0_could_be_instantiated_with_an_arbitrary_type_which_could_be_unrelated_to_1_5082", "'{0}' could be instantiated with an arbitrary type which could be unrelated to '{1}'."),
          Cannot_read_file_0: b(5083, 1, "Cannot_read_file_0_5083", "Cannot read file '{0}'."),
          A_tuple_member_cannot_be_both_optional_and_rest: b(5085, 1, "A_tuple_member_cannot_be_both_optional_and_rest_5085", "A tuple member cannot be both optional and rest."),
          A_labeled_tuple_element_is_declared_as_optional_with_a_question_mark_after_the_name_and_before_the_colon_rather_than_after_the_type: b(5086, 1, "A_labeled_tuple_element_is_declared_as_optional_with_a_question_mark_after_the_name_and_before_the_c_5086", "A labeled tuple element is declared as optional with a question mark after the name and before the colon, rather than after the type."),
          A_labeled_tuple_element_is_declared_as_rest_with_a_before_the_name_rather_than_before_the_type: b(5087, 1, "A_labeled_tuple_element_is_declared_as_rest_with_a_before_the_name_rather_than_before_the_type_5087", "A labeled tuple element is declared as rest with a '...' before the name, rather than before the type."),
          The_inferred_type_of_0_references_a_type_with_a_cyclic_structure_which_cannot_be_trivially_serialized_A_type_annotation_is_necessary: b(5088, 1, "The_inferred_type_of_0_references_a_type_with_a_cyclic_structure_which_cannot_be_trivially_serialize_5088", "The inferred type of '{0}' references a type with a cyclic structure which cannot be trivially serialized. A type annotation is necessary."),
          Option_0_cannot_be_specified_when_option_jsx_is_1: b(5089, 1, "Option_0_cannot_be_specified_when_option_jsx_is_1_5089", "Option '{0}' cannot be specified when option 'jsx' is '{1}'."),
          Non_relative_paths_are_not_allowed_when_baseUrl_is_not_set_Did_you_forget_a_leading_Slash: b(5090, 1, "Non_relative_paths_are_not_allowed_when_baseUrl_is_not_set_Did_you_forget_a_leading_Slash_5090", "Non-relative paths are not allowed when 'baseUrl' is not set. Did you forget a leading './'?"),
          Option_preserveConstEnums_cannot_be_disabled_when_0_is_enabled: b(5091, 1, "Option_preserveConstEnums_cannot_be_disabled_when_0_is_enabled_5091", "Option 'preserveConstEnums' cannot be disabled when '{0}' is enabled."),
          The_root_value_of_a_0_file_must_be_an_object: b(5092, 1, "The_root_value_of_a_0_file_must_be_an_object_5092", "The root value of a '{0}' file must be an object."),
          Compiler_option_0_may_only_be_used_with_build: b(5093, 1, "Compiler_option_0_may_only_be_used_with_build_5093", "Compiler option '--{0}' may only be used with '--build'."),
          Compiler_option_0_may_not_be_used_with_build: b(5094, 1, "Compiler_option_0_may_not_be_used_with_build_5094", "Compiler option '--{0}' may not be used with '--build'."),
          Option_0_can_only_be_used_when_module_is_set_to_preserve_or_to_es2015_or_later: b(5095, 1, "Option_0_can_only_be_used_when_module_is_set_to_preserve_or_to_es2015_or_later_5095", "Option '{0}' can only be used when 'module' is set to 'preserve' or to 'es2015' or later."),
          Option_allowImportingTsExtensions_can_only_be_used_when_either_noEmit_or_emitDeclarationOnly_is_set: b(5096, 1, "Option_allowImportingTsExtensions_can_only_be_used_when_either_noEmit_or_emitDeclarationOnly_is_set_5096", "Option 'allowImportingTsExtensions' can only be used when either 'noEmit' or 'emitDeclarationOnly' is set."),
          An_import_path_can_only_end_with_a_0_extension_when_allowImportingTsExtensions_is_enabled: b(5097, 1, "An_import_path_can_only_end_with_a_0_extension_when_allowImportingTsExtensions_is_enabled_5097", "An import path can only end with a '{0}' extension when 'allowImportingTsExtensions' is enabled."),
          Option_0_can_only_be_used_when_moduleResolution_is_set_to_node16_nodenext_or_bundler: b(5098, 1, "Option_0_can_only_be_used_when_moduleResolution_is_set_to_node16_nodenext_or_bundler_5098", "Option '{0}' can only be used when 'moduleResolution' is set to 'node16', 'nodenext', or 'bundler'."),
          Option_0_is_deprecated_and_will_stop_functioning_in_TypeScript_1_Specify_compilerOption_ignoreDeprecations_Colon_2_to_silence_this_error: b(5101, 1, "Option_0_is_deprecated_and_will_stop_functioning_in_TypeScript_1_Specify_compilerOption_ignoreDeprec_5101", `Option '{0}' is deprecated and will stop functioning in TypeScript {1}. Specify compilerOption '"ignoreDeprecations": "{2}"' to silence this error.`),
          Option_0_has_been_removed_Please_remove_it_from_your_configuration: b(5102, 1, "Option_0_has_been_removed_Please_remove_it_from_your_configuration_5102", "Option '{0}' has been removed. Please remove it from your configuration."),
          Invalid_value_for_ignoreDeprecations: b(5103, 1, "Invalid_value_for_ignoreDeprecations_5103", "Invalid value for '--ignoreDeprecations'."),
          Option_0_is_redundant_and_cannot_be_specified_with_option_1: b(5104, 1, "Option_0_is_redundant_and_cannot_be_specified_with_option_1_5104", "Option '{0}' is redundant and cannot be specified with option '{1}'."),
          Option_verbatimModuleSyntax_cannot_be_used_when_module_is_set_to_UMD_AMD_or_System: b(5105, 1, "Option_verbatimModuleSyntax_cannot_be_used_when_module_is_set_to_UMD_AMD_or_System_5105", "Option 'verbatimModuleSyntax' cannot be used when 'module' is set to 'UMD', 'AMD', or 'System'."),
          Use_0_instead: b(5106, 3, "Use_0_instead_5106", "Use '{0}' instead."),
          Option_0_1_is_deprecated_and_will_stop_functioning_in_TypeScript_2_Specify_compilerOption_ignoreDeprecations_Colon_3_to_silence_this_error: b(5107, 1, "Option_0_1_is_deprecated_and_will_stop_functioning_in_TypeScript_2_Specify_compilerOption_ignoreDepr_5107", `Option '{0}={1}' is deprecated and will stop functioning in TypeScript {2}. Specify compilerOption '"ignoreDeprecations": "{3}"' to silence this error.`),
          Option_0_1_has_been_removed_Please_remove_it_from_your_configuration: b(5108, 1, "Option_0_1_has_been_removed_Please_remove_it_from_your_configuration_5108", "Option '{0}={1}' has been removed. Please remove it from your configuration."),
          Option_moduleResolution_must_be_set_to_0_or_left_unspecified_when_option_module_is_set_to_1: b(5109, 1, "Option_moduleResolution_must_be_set_to_0_or_left_unspecified_when_option_module_is_set_to_1_5109", "Option 'moduleResolution' must be set to '{0}' (or left unspecified) when option 'module' is set to '{1}'."),
          Option_module_must_be_set_to_0_when_option_moduleResolution_is_set_to_1: b(5110, 1, "Option_module_must_be_set_to_0_when_option_moduleResolution_is_set_to_1_5110", "Option 'module' must be set to '{0}' when option 'moduleResolution' is set to '{1}'."),
          Generates_a_sourcemap_for_each_corresponding_d_ts_file: b(6e3, 3, "Generates_a_sourcemap_for_each_corresponding_d_ts_file_6000", "Generates a sourcemap for each corresponding '.d.ts' file."),
          Concatenate_and_emit_output_to_single_file: b(6001, 3, "Concatenate_and_emit_output_to_single_file_6001", "Concatenate and emit output to single file."),
          Generates_corresponding_d_ts_file: b(6002, 3, "Generates_corresponding_d_ts_file_6002", "Generates corresponding '.d.ts' file."),
          Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations: b(6004, 3, "Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations_6004", "Specify the location where debugger should locate TypeScript files instead of source locations."),
          Watch_input_files: b(6005, 3, "Watch_input_files_6005", "Watch input files."),
          Redirect_output_structure_to_the_directory: b(6006, 3, "Redirect_output_structure_to_the_directory_6006", "Redirect output structure to the directory."),
          Do_not_erase_const_enum_declarations_in_generated_code: b(6007, 3, "Do_not_erase_const_enum_declarations_in_generated_code_6007", "Do not erase const enum declarations in generated code."),
          Do_not_emit_outputs_if_any_errors_were_reported: b(6008, 3, "Do_not_emit_outputs_if_any_errors_were_reported_6008", "Do not emit outputs if any errors were reported."),
          Do_not_emit_comments_to_output: b(6009, 3, "Do_not_emit_comments_to_output_6009", "Do not emit comments to output."),
          Do_not_emit_outputs: b(6010, 3, "Do_not_emit_outputs_6010", "Do not emit outputs."),
          Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typechecking: b(6011, 3, "Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typech_6011", "Allow default imports from modules with no default export. This does not affect code emit, just typechecking."),
          Skip_type_checking_of_declaration_files: b(6012, 3, "Skip_type_checking_of_declaration_files_6012", "Skip type checking of declaration files."),
          Do_not_resolve_the_real_path_of_symlinks: b(6013, 3, "Do_not_resolve_the_real_path_of_symlinks_6013", "Do not resolve the real path of symlinks."),
          Only_emit_d_ts_declaration_files: b(6014, 3, "Only_emit_d_ts_declaration_files_6014", "Only emit '.d.ts' declaration files."),
          Specify_ECMAScript_target_version: b(6015, 3, "Specify_ECMAScript_target_version_6015", "Specify ECMAScript target version."),
          Specify_module_code_generation: b(6016, 3, "Specify_module_code_generation_6016", "Specify module code generation."),
          Print_this_message: b(6017, 3, "Print_this_message_6017", "Print this message."),
          Print_the_compiler_s_version: b(6019, 3, "Print_the_compiler_s_version_6019", "Print the compiler's version."),
          Compile_the_project_given_the_path_to_its_configuration_file_or_to_a_folder_with_a_tsconfig_json: b(6020, 3, "Compile_the_project_given_the_path_to_its_configuration_file_or_to_a_folder_with_a_tsconfig_json_6020", "Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'."),
          Syntax_Colon_0: b(6023, 3, "Syntax_Colon_0_6023", "Syntax: {0}"),
          options: b(6024, 3, "options_6024", "options"),
          file: b(6025, 3, "file_6025", "file"),
          Examples_Colon_0: b(6026, 3, "Examples_Colon_0_6026", "Examples: {0}"),
          Options_Colon: b(6027, 3, "Options_Colon_6027", "Options:"),
          Version_0: b(6029, 3, "Version_0_6029", "Version {0}"),
          Insert_command_line_options_and_files_from_a_file: b(6030, 3, "Insert_command_line_options_and_files_from_a_file_6030", "Insert command line options and files from a file."),
          Starting_compilation_in_watch_mode: b(6031, 3, "Starting_compilation_in_watch_mode_6031", "Starting compilation in watch mode..."),
          File_change_detected_Starting_incremental_compilation: b(6032, 3, "File_change_detected_Starting_incremental_compilation_6032", "File change detected. Starting incremental compilation..."),
          KIND: b(6034, 3, "KIND_6034", "KIND"),
          FILE: b(6035, 3, "FILE_6035", "FILE"),
          VERSION: b(6036, 3, "VERSION_6036", "VERSION"),
          LOCATION: b(6037, 3, "LOCATION_6037", "LOCATION"),
          DIRECTORY: b(6038, 3, "DIRECTORY_6038", "DIRECTORY"),
          STRATEGY: b(6039, 3, "STRATEGY_6039", "STRATEGY"),
          FILE_OR_DIRECTORY: b(6040, 3, "FILE_OR_DIRECTORY_6040", "FILE OR DIRECTORY"),
          Errors_Files: b(6041, 3, "Errors_Files_6041", "Errors  Files"),
          Generates_corresponding_map_file: b(6043, 3, "Generates_corresponding_map_file_6043", "Generates corresponding '.map' file."),
          Compiler_option_0_expects_an_argument: b(6044, 1, "Compiler_option_0_expects_an_argument_6044", "Compiler option '{0}' expects an argument."),
          Unterminated_quoted_string_in_response_file_0: b(6045, 1, "Unterminated_quoted_string_in_response_file_0_6045", "Unterminated quoted string in response file '{0}'."),
          Argument_for_0_option_must_be_Colon_1: b(6046, 1, "Argument_for_0_option_must_be_Colon_1_6046", "Argument for '{0}' option must be: {1}."),
          Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1: b(6048, 1, "Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1_6048", "Locale must be of the form <language> or <language>-<territory>. For example '{0}' or '{1}'."),
          Unable_to_open_file_0: b(6050, 1, "Unable_to_open_file_0_6050", "Unable to open file '{0}'."),
          Corrupted_locale_file_0: b(6051, 1, "Corrupted_locale_file_0_6051", "Corrupted locale file {0}."),
          Raise_error_on_expressions_and_declarations_with_an_implied_any_type: b(6052, 3, "Raise_error_on_expressions_and_declarations_with_an_implied_any_type_6052", "Raise error on expressions and declarations with an implied 'any' type."),
          File_0_not_found: b(6053, 1, "File_0_not_found_6053", "File '{0}' not found."),
          File_0_has_an_unsupported_extension_The_only_supported_extensions_are_1: b(6054, 1, "File_0_has_an_unsupported_extension_The_only_supported_extensions_are_1_6054", "File '{0}' has an unsupported extension. The only supported extensions are {1}."),
          Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures: b(6055, 3, "Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures_6055", "Suppress noImplicitAny errors for indexing objects lacking index signatures."),
          Do_not_emit_declarations_for_code_that_has_an_internal_annotation: b(6056, 3, "Do_not_emit_declarations_for_code_that_has_an_internal_annotation_6056", "Do not emit declarations for code that has an '@internal' annotation."),
          Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir: b(6058, 3, "Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir_6058", "Specify the root directory of input files. Use to control the output directory structure with --outDir."),
          File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files: b(6059, 1, "File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files_6059", "File '{0}' is not under 'rootDir' '{1}'. 'rootDir' is expected to contain all source files."),
          Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix: b(6060, 3, "Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix_6060", "Specify the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix)."),
          NEWLINE: b(6061, 3, "NEWLINE_6061", "NEWLINE"),
          Option_0_can_only_be_specified_in_tsconfig_json_file_or_set_to_null_on_command_line: b(6064, 1, "Option_0_can_only_be_specified_in_tsconfig_json_file_or_set_to_null_on_command_line_6064", "Option '{0}' can only be specified in 'tsconfig.json' file or set to 'null' on command line."),
          Enables_experimental_support_for_ES7_decorators: b(6065, 3, "Enables_experimental_support_for_ES7_decorators_6065", "Enables experimental support for ES7 decorators."),
          Enables_experimental_support_for_emitting_type_metadata_for_decorators: b(6066, 3, "Enables_experimental_support_for_emitting_type_metadata_for_decorators_6066", "Enables experimental support for emitting type metadata for decorators."),
          Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file: b(6070, 3, "Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file_6070", "Initializes a TypeScript project and creates a tsconfig.json file."),
          Successfully_created_a_tsconfig_json_file: b(6071, 3, "Successfully_created_a_tsconfig_json_file_6071", "Successfully created a tsconfig.json file."),
          Suppress_excess_property_checks_for_object_literals: b(6072, 3, "Suppress_excess_property_checks_for_object_literals_6072", "Suppress excess property checks for object literals."),
          Stylize_errors_and_messages_using_color_and_context_experimental: b(6073, 3, "Stylize_errors_and_messages_using_color_and_context_experimental_6073", "Stylize errors and messages using color and context (experimental)."),
          Do_not_report_errors_on_unused_labels: b(6074, 3, "Do_not_report_errors_on_unused_labels_6074", "Do not report errors on unused labels."),
          Report_error_when_not_all_code_paths_in_function_return_a_value: b(6075, 3, "Report_error_when_not_all_code_paths_in_function_return_a_value_6075", "Report error when not all code paths in function return a value."),
          Report_errors_for_fallthrough_cases_in_switch_statement: b(6076, 3, "Report_errors_for_fallthrough_cases_in_switch_statement_6076", "Report errors for fallthrough cases in switch statement."),
          Do_not_report_errors_on_unreachable_code: b(6077, 3, "Do_not_report_errors_on_unreachable_code_6077", "Do not report errors on unreachable code."),
          Disallow_inconsistently_cased_references_to_the_same_file: b(6078, 3, "Disallow_inconsistently_cased_references_to_the_same_file_6078", "Disallow inconsistently-cased references to the same file."),
          Specify_library_files_to_be_included_in_the_compilation: b(6079, 3, "Specify_library_files_to_be_included_in_the_compilation_6079", "Specify library files to be included in the compilation."),
          Specify_JSX_code_generation: b(6080, 3, "Specify_JSX_code_generation_6080", "Specify JSX code generation."),
          Only_amd_and_system_modules_are_supported_alongside_0: b(6082, 1, "Only_amd_and_system_modules_are_supported_alongside_0_6082", "Only 'amd' and 'system' modules are supported alongside --{0}."),
          Base_directory_to_resolve_non_absolute_module_names: b(6083, 3, "Base_directory_to_resolve_non_absolute_module_names_6083", "Base directory to resolve non-absolute module names."),
          Deprecated_Use_jsxFactory_instead_Specify_the_object_invoked_for_createElement_when_targeting_react_JSX_emit: b(6084, 3, "Deprecated_Use_jsxFactory_instead_Specify_the_object_invoked_for_createElement_when_targeting_react__6084", "[Deprecated] Use '--jsxFactory' instead. Specify the object invoked for createElement when targeting 'react' JSX emit"),
          Enable_tracing_of_the_name_resolution_process: b(6085, 3, "Enable_tracing_of_the_name_resolution_process_6085", "Enable tracing of the name resolution process."),
          Resolving_module_0_from_1: b(6086, 3, "Resolving_module_0_from_1_6086", "======== Resolving module '{0}' from '{1}'. ========"),
          Explicitly_specified_module_resolution_kind_Colon_0: b(6087, 3, "Explicitly_specified_module_resolution_kind_Colon_0_6087", "Explicitly specified module resolution kind: '{0}'."),
          Module_resolution_kind_is_not_specified_using_0: b(6088, 3, "Module_resolution_kind_is_not_specified_using_0_6088", "Module resolution kind is not specified, using '{0}'."),
          Module_name_0_was_successfully_resolved_to_1: b(6089, 3, "Module_name_0_was_successfully_resolved_to_1_6089", "======== Module name '{0}' was successfully resolved to '{1}'. ========"),
          Module_name_0_was_not_resolved: b(6090, 3, "Module_name_0_was_not_resolved_6090", "======== Module name '{0}' was not resolved. ========"),
          paths_option_is_specified_looking_for_a_pattern_to_match_module_name_0: b(6091, 3, "paths_option_is_specified_looking_for_a_pattern_to_match_module_name_0_6091", "'paths' option is specified, looking for a pattern to match module name '{0}'."),
          Module_name_0_matched_pattern_1: b(6092, 3, "Module_name_0_matched_pattern_1_6092", "Module name '{0}', matched pattern '{1}'."),
          Trying_substitution_0_candidate_module_location_Colon_1: b(6093, 3, "Trying_substitution_0_candidate_module_location_Colon_1_6093", "Trying substitution '{0}', candidate module location: '{1}'."),
          Resolving_module_name_0_relative_to_base_url_1_2: b(6094, 3, "Resolving_module_name_0_relative_to_base_url_1_2_6094", "Resolving module name '{0}' relative to base url '{1}' - '{2}'."),
          Loading_module_as_file_Slash_folder_candidate_module_location_0_target_file_types_Colon_1: b(6095, 3, "Loading_module_as_file_Slash_folder_candidate_module_location_0_target_file_types_Colon_1_6095", "Loading module as file / folder, candidate module location '{0}', target file types: {1}."),
          File_0_does_not_exist: b(6096, 3, "File_0_does_not_exist_6096", "File '{0}' does not exist."),
          File_0_exists_use_it_as_a_name_resolution_result: b(6097, 3, "File_0_exists_use_it_as_a_name_resolution_result_6097", "File '{0}' exists - use it as a name resolution result."),
          Loading_module_0_from_node_modules_folder_target_file_types_Colon_1: b(6098, 3, "Loading_module_0_from_node_modules_folder_target_file_types_Colon_1_6098", "Loading module '{0}' from 'node_modules' folder, target file types: {1}."),
          Found_package_json_at_0: b(6099, 3, "Found_package_json_at_0_6099", "Found 'package.json' at '{0}'."),
          package_json_does_not_have_a_0_field: b(6100, 3, "package_json_does_not_have_a_0_field_6100", "'package.json' does not have a '{0}' field."),
          package_json_has_0_field_1_that_references_2: b(6101, 3, "package_json_has_0_field_1_that_references_2_6101", "'package.json' has '{0}' field '{1}' that references '{2}'."),
          Allow_javascript_files_to_be_compiled: b(6102, 3, "Allow_javascript_files_to_be_compiled_6102", "Allow javascript files to be compiled."),
          Checking_if_0_is_the_longest_matching_prefix_for_1_2: b(6104, 3, "Checking_if_0_is_the_longest_matching_prefix_for_1_2_6104", "Checking if '{0}' is the longest matching prefix for '{1}' - '{2}'."),
          Expected_type_of_0_field_in_package_json_to_be_1_got_2: b(6105, 3, "Expected_type_of_0_field_in_package_json_to_be_1_got_2_6105", "Expected type of '{0}' field in 'package.json' to be '{1}', got '{2}'."),
          baseUrl_option_is_set_to_0_using_this_value_to_resolve_non_relative_module_name_1: b(6106, 3, "baseUrl_option_is_set_to_0_using_this_value_to_resolve_non_relative_module_name_1_6106", "'baseUrl' option is set to '{0}', using this value to resolve non-relative module name '{1}'."),
          rootDirs_option_is_set_using_it_to_resolve_relative_module_name_0: b(6107, 3, "rootDirs_option_is_set_using_it_to_resolve_relative_module_name_0_6107", "'rootDirs' option is set, using it to resolve relative module name '{0}'."),
          Longest_matching_prefix_for_0_is_1: b(6108, 3, "Longest_matching_prefix_for_0_is_1_6108", "Longest matching prefix for '{0}' is '{1}'."),
          Loading_0_from_the_root_dir_1_candidate_location_2: b(6109, 3, "Loading_0_from_the_root_dir_1_candidate_location_2_6109", "Loading '{0}' from the root dir '{1}', candidate location '{2}'."),
          Trying_other_entries_in_rootDirs: b(6110, 3, "Trying_other_entries_in_rootDirs_6110", "Trying other entries in 'rootDirs'."),
          Module_resolution_using_rootDirs_has_failed: b(6111, 3, "Module_resolution_using_rootDirs_has_failed_6111", "Module resolution using 'rootDirs' has failed."),
          Do_not_emit_use_strict_directives_in_module_output: b(6112, 3, "Do_not_emit_use_strict_directives_in_module_output_6112", "Do not emit 'use strict' directives in module output."),
          Enable_strict_null_checks: b(6113, 3, "Enable_strict_null_checks_6113", "Enable strict null checks."),
          Unknown_option_excludes_Did_you_mean_exclude: b(6114, 1, "Unknown_option_excludes_Did_you_mean_exclude_6114", "Unknown option 'excludes'. Did you mean 'exclude'?"),
          Raise_error_on_this_expressions_with_an_implied_any_type: b(6115, 3, "Raise_error_on_this_expressions_with_an_implied_any_type_6115", "Raise error on 'this' expressions with an implied 'any' type."),
          Resolving_type_reference_directive_0_containing_file_1_root_directory_2: b(6116, 3, "Resolving_type_reference_directive_0_containing_file_1_root_directory_2_6116", "======== Resolving type reference directive '{0}', containing file '{1}', root directory '{2}'. ========"),
          Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2: b(6119, 3, "Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2_6119", "======== Type reference directive '{0}' was successfully resolved to '{1}', primary: {2}. ========"),
          Type_reference_directive_0_was_not_resolved: b(6120, 3, "Type_reference_directive_0_was_not_resolved_6120", "======== Type reference directive '{0}' was not resolved. ========"),
          Resolving_with_primary_search_path_0: b(6121, 3, "Resolving_with_primary_search_path_0_6121", "Resolving with primary search path '{0}'."),
          Root_directory_cannot_be_determined_skipping_primary_search_paths: b(6122, 3, "Root_directory_cannot_be_determined_skipping_primary_search_paths_6122", "Root directory cannot be determined, skipping primary search paths."),
          Resolving_type_reference_directive_0_containing_file_1_root_directory_not_set: b(6123, 3, "Resolving_type_reference_directive_0_containing_file_1_root_directory_not_set_6123", "======== Resolving type reference directive '{0}', containing file '{1}', root directory not set. ========"),
          Type_declaration_files_to_be_included_in_compilation: b(6124, 3, "Type_declaration_files_to_be_included_in_compilation_6124", "Type declaration files to be included in compilation."),
          Looking_up_in_node_modules_folder_initial_location_0: b(6125, 3, "Looking_up_in_node_modules_folder_initial_location_0_6125", "Looking up in 'node_modules' folder, initial location '{0}'."),
          Containing_file_is_not_specified_and_root_directory_cannot_be_determined_skipping_lookup_in_node_modules_folder: b(6126, 3, "Containing_file_is_not_specified_and_root_directory_cannot_be_determined_skipping_lookup_in_node_mod_6126", "Containing file is not specified and root directory cannot be determined, skipping lookup in 'node_modules' folder."),
          Resolving_type_reference_directive_0_containing_file_not_set_root_directory_1: b(6127, 3, "Resolving_type_reference_directive_0_containing_file_not_set_root_directory_1_6127", "======== Resolving type reference directive '{0}', containing file not set, root directory '{1}'. ========"),
          Resolving_type_reference_directive_0_containing_file_not_set_root_directory_not_set: b(6128, 3, "Resolving_type_reference_directive_0_containing_file_not_set_root_directory_not_set_6128", "======== Resolving type reference directive '{0}', containing file not set, root directory not set. ========"),
          Resolving_real_path_for_0_result_1: b(6130, 3, "Resolving_real_path_for_0_result_1_6130", "Resolving real path for '{0}', result '{1}'."),
          Cannot_compile_modules_using_option_0_unless_the_module_flag_is_amd_or_system: b(6131, 1, "Cannot_compile_modules_using_option_0_unless_the_module_flag_is_amd_or_system_6131", "Cannot compile modules using option '{0}' unless the '--module' flag is 'amd' or 'system'."),
          File_name_0_has_a_1_extension_stripping_it: b(6132, 3, "File_name_0_has_a_1_extension_stripping_it_6132", "File name '{0}' has a '{1}' extension - stripping it."),
          _0_is_declared_but_its_value_is_never_read: b(
            6133,
            1,
            "_0_is_declared_but_its_value_is_never_read_6133",
            "'{0}' is declared but its value is never read.",
            /*reportsUnnecessary*/
            !0
          ),
          Report_errors_on_unused_locals: b(6134, 3, "Report_errors_on_unused_locals_6134", "Report errors on unused locals."),
          Report_errors_on_unused_parameters: b(6135, 3, "Report_errors_on_unused_parameters_6135", "Report errors on unused parameters."),
          The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files: b(6136, 3, "The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files_6136", "The maximum dependency depth to search under node_modules and load JavaScript files."),
          Cannot_import_type_declaration_files_Consider_importing_0_instead_of_1: b(6137, 1, "Cannot_import_type_declaration_files_Consider_importing_0_instead_of_1_6137", "Cannot import type declaration files. Consider importing '{0}' instead of '{1}'."),
          Property_0_is_declared_but_its_value_is_never_read: b(
            6138,
            1,
            "Property_0_is_declared_but_its_value_is_never_read_6138",
            "Property '{0}' is declared but its value is never read.",
            /*reportsUnnecessary*/
            !0
          ),
          Import_emit_helpers_from_tslib: b(6139, 3, "Import_emit_helpers_from_tslib_6139", "Import emit helpers from 'tslib'."),
          Auto_discovery_for_typings_is_enabled_in_project_0_Running_extra_resolution_pass_for_module_1_using_cache_location_2: b(6140, 1, "Auto_discovery_for_typings_is_enabled_in_project_0_Running_extra_resolution_pass_for_module_1_using__6140", "Auto discovery for typings is enabled in project '{0}'. Running extra resolution pass for module '{1}' using cache location '{2}'."),
          Parse_in_strict_mode_and_emit_use_strict_for_each_source_file: b(6141, 3, "Parse_in_strict_mode_and_emit_use_strict_for_each_source_file_6141", 'Parse in strict mode and emit "use strict" for each source file.'),
          Module_0_was_resolved_to_1_but_jsx_is_not_set: b(6142, 1, "Module_0_was_resolved_to_1_but_jsx_is_not_set_6142", "Module '{0}' was resolved to '{1}', but '--jsx' is not set."),
          Module_0_was_resolved_as_locally_declared_ambient_module_in_file_1: b(6144, 3, "Module_0_was_resolved_as_locally_declared_ambient_module_in_file_1_6144", "Module '{0}' was resolved as locally declared ambient module in file '{1}'."),
          Module_0_was_resolved_as_ambient_module_declared_in_1_since_this_file_was_not_modified: b(6145, 3, "Module_0_was_resolved_as_ambient_module_declared_in_1_since_this_file_was_not_modified_6145", "Module '{0}' was resolved as ambient module declared in '{1}' since this file was not modified."),
          Specify_the_JSX_factory_function_to_use_when_targeting_react_JSX_emit_e_g_React_createElement_or_h: b(6146, 3, "Specify_the_JSX_factory_function_to_use_when_targeting_react_JSX_emit_e_g_React_createElement_or_h_6146", "Specify the JSX factory function to use when targeting 'react' JSX emit, e.g. 'React.createElement' or 'h'."),
          Resolution_for_module_0_was_found_in_cache_from_location_1: b(6147, 3, "Resolution_for_module_0_was_found_in_cache_from_location_1_6147", "Resolution for module '{0}' was found in cache from location '{1}'."),
          Directory_0_does_not_exist_skipping_all_lookups_in_it: b(6148, 3, "Directory_0_does_not_exist_skipping_all_lookups_in_it_6148", "Directory '{0}' does not exist, skipping all lookups in it."),
          Show_diagnostic_information: b(6149, 3, "Show_diagnostic_information_6149", "Show diagnostic information."),
          Show_verbose_diagnostic_information: b(6150, 3, "Show_verbose_diagnostic_information_6150", "Show verbose diagnostic information."),
          Emit_a_single_file_with_source_maps_instead_of_having_a_separate_file: b(6151, 3, "Emit_a_single_file_with_source_maps_instead_of_having_a_separate_file_6151", "Emit a single file with source maps instead of having a separate file."),
          Emit_the_source_alongside_the_sourcemaps_within_a_single_file_requires_inlineSourceMap_or_sourceMap_to_be_set: b(6152, 3, "Emit_the_source_alongside_the_sourcemaps_within_a_single_file_requires_inlineSourceMap_or_sourceMap__6152", "Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set."),
          Transpile_each_file_as_a_separate_module_similar_to_ts_transpileModule: b(6153, 3, "Transpile_each_file_as_a_separate_module_similar_to_ts_transpileModule_6153", "Transpile each file as a separate module (similar to 'ts.transpileModule')."),
          Print_names_of_generated_files_part_of_the_compilation: b(6154, 3, "Print_names_of_generated_files_part_of_the_compilation_6154", "Print names of generated files part of the compilation."),
          Print_names_of_files_part_of_the_compilation: b(6155, 3, "Print_names_of_files_part_of_the_compilation_6155", "Print names of files part of the compilation."),
          The_locale_used_when_displaying_messages_to_the_user_e_g_en_us: b(6156, 3, "The_locale_used_when_displaying_messages_to_the_user_e_g_en_us_6156", "The locale used when displaying messages to the user (e.g. 'en-us')"),
          Do_not_generate_custom_helper_functions_like_extends_in_compiled_output: b(6157, 3, "Do_not_generate_custom_helper_functions_like_extends_in_compiled_output_6157", "Do not generate custom helper functions like '__extends' in compiled output."),
          Do_not_include_the_default_library_file_lib_d_ts: b(6158, 3, "Do_not_include_the_default_library_file_lib_d_ts_6158", "Do not include the default library file (lib.d.ts)."),
          Do_not_add_triple_slash_references_or_imported_modules_to_the_list_of_compiled_files: b(6159, 3, "Do_not_add_triple_slash_references_or_imported_modules_to_the_list_of_compiled_files_6159", "Do not add triple-slash references or imported modules to the list of compiled files."),
          Deprecated_Use_skipLibCheck_instead_Skip_type_checking_of_default_library_declaration_files: b(6160, 3, "Deprecated_Use_skipLibCheck_instead_Skip_type_checking_of_default_library_declaration_files_6160", "[Deprecated] Use '--skipLibCheck' instead. Skip type checking of default library declaration files."),
          List_of_folders_to_include_type_definitions_from: b(6161, 3, "List_of_folders_to_include_type_definitions_from_6161", "List of folders to include type definitions from."),
          Disable_size_limitations_on_JavaScript_projects: b(6162, 3, "Disable_size_limitations_on_JavaScript_projects_6162", "Disable size limitations on JavaScript projects."),
          The_character_set_of_the_input_files: b(6163, 3, "The_character_set_of_the_input_files_6163", "The character set of the input files."),
          Skipping_module_0_that_looks_like_an_absolute_URI_target_file_types_Colon_1: b(6164, 3, "Skipping_module_0_that_looks_like_an_absolute_URI_target_file_types_Colon_1_6164", "Skipping module '{0}' that looks like an absolute URI, target file types: {1}."),
          Do_not_truncate_error_messages: b(6165, 3, "Do_not_truncate_error_messages_6165", "Do not truncate error messages."),
          Output_directory_for_generated_declaration_files: b(6166, 3, "Output_directory_for_generated_declaration_files_6166", "Output directory for generated declaration files."),
          A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl: b(6167, 3, "A_series_of_entries_which_re_map_imports_to_lookup_locations_relative_to_the_baseUrl_6167", "A series of entries which re-map imports to lookup locations relative to the 'baseUrl'."),
          List_of_root_folders_whose_combined_content_represents_the_structure_of_the_project_at_runtime: b(6168, 3, "List_of_root_folders_whose_combined_content_represents_the_structure_of_the_project_at_runtime_6168", "List of root folders whose combined content represents the structure of the project at runtime."),
          Show_all_compiler_options: b(6169, 3, "Show_all_compiler_options_6169", "Show all compiler options."),
          Deprecated_Use_outFile_instead_Concatenate_and_emit_output_to_single_file: b(6170, 3, "Deprecated_Use_outFile_instead_Concatenate_and_emit_output_to_single_file_6170", "[Deprecated] Use '--outFile' instead. Concatenate and emit output to single file"),
          Command_line_Options: b(6171, 3, "Command_line_Options_6171", "Command-line Options"),
          Provide_full_support_for_iterables_in_for_of_spread_and_destructuring_when_targeting_ES5_or_ES3: b(6179, 3, "Provide_full_support_for_iterables_in_for_of_spread_and_destructuring_when_targeting_ES5_or_ES3_6179", "Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'."),
          Enable_all_strict_type_checking_options: b(6180, 3, "Enable_all_strict_type_checking_options_6180", "Enable all strict type-checking options."),
          Scoped_package_detected_looking_in_0: b(6182, 3, "Scoped_package_detected_looking_in_0_6182", "Scoped package detected, looking in '{0}'"),
          Reusing_resolution_of_module_0_from_1_of_old_program_it_was_successfully_resolved_to_2: b(6183, 3, "Reusing_resolution_of_module_0_from_1_of_old_program_it_was_successfully_resolved_to_2_6183", "Reusing resolution of module '{0}' from '{1}' of old program, it was successfully resolved to '{2}'."),
          Reusing_resolution_of_module_0_from_1_of_old_program_it_was_successfully_resolved_to_2_with_Package_ID_3: b(6184, 3, "Reusing_resolution_of_module_0_from_1_of_old_program_it_was_successfully_resolved_to_2_with_Package__6184", "Reusing resolution of module '{0}' from '{1}' of old program, it was successfully resolved to '{2}' with Package ID '{3}'."),
          Enable_strict_checking_of_function_types: b(6186, 3, "Enable_strict_checking_of_function_types_6186", "Enable strict checking of function types."),
          Enable_strict_checking_of_property_initialization_in_classes: b(6187, 3, "Enable_strict_checking_of_property_initialization_in_classes_6187", "Enable strict checking of property initialization in classes."),
          Numeric_separators_are_not_allowed_here: b(6188, 1, "Numeric_separators_are_not_allowed_here_6188", "Numeric separators are not allowed here."),
          Multiple_consecutive_numeric_separators_are_not_permitted: b(6189, 1, "Multiple_consecutive_numeric_separators_are_not_permitted_6189", "Multiple consecutive numeric separators are not permitted."),
          Whether_to_keep_outdated_console_output_in_watch_mode_instead_of_clearing_the_screen: b(6191, 3, "Whether_to_keep_outdated_console_output_in_watch_mode_instead_of_clearing_the_screen_6191", "Whether to keep outdated console output in watch mode instead of clearing the screen."),
          All_imports_in_import_declaration_are_unused: b(
            6192,
            1,
            "All_imports_in_import_declaration_are_unused_6192",
            "All imports in import declaration are unused.",
            /*reportsUnnecessary*/
            !0
          ),
          Found_1_error_Watching_for_file_changes: b(6193, 3, "Found_1_error_Watching_for_file_changes_6193", "Found 1 error. Watching for file changes."),
          Found_0_errors_Watching_for_file_changes: b(6194, 3, "Found_0_errors_Watching_for_file_changes_6194", "Found {0} errors. Watching for file changes."),
          Resolve_keyof_to_string_valued_property_names_only_no_numbers_or_symbols: b(6195, 3, "Resolve_keyof_to_string_valued_property_names_only_no_numbers_or_symbols_6195", "Resolve 'keyof' to string valued property names only (no numbers or symbols)."),
          _0_is_declared_but_never_used: b(
            6196,
            1,
            "_0_is_declared_but_never_used_6196",
            "'{0}' is declared but never used.",
            /*reportsUnnecessary*/
            !0
          ),
          Include_modules_imported_with_json_extension: b(6197, 3, "Include_modules_imported_with_json_extension_6197", "Include modules imported with '.json' extension"),
          All_destructured_elements_are_unused: b(
            6198,
            1,
            "All_destructured_elements_are_unused_6198",
            "All destructured elements are unused.",
            /*reportsUnnecessary*/
            !0
          ),
          All_variables_are_unused: b(
            6199,
            1,
            "All_variables_are_unused_6199",
            "All variables are unused.",
            /*reportsUnnecessary*/
            !0
          ),
          Definitions_of_the_following_identifiers_conflict_with_those_in_another_file_Colon_0: b(6200, 1, "Definitions_of_the_following_identifiers_conflict_with_those_in_another_file_Colon_0_6200", "Definitions of the following identifiers conflict with those in another file: {0}"),
          Conflicts_are_in_this_file: b(6201, 3, "Conflicts_are_in_this_file_6201", "Conflicts are in this file."),
          Project_references_may_not_form_a_circular_graph_Cycle_detected_Colon_0: b(6202, 1, "Project_references_may_not_form_a_circular_graph_Cycle_detected_Colon_0_6202", "Project references may not form a circular graph. Cycle detected: {0}"),
          _0_was_also_declared_here: b(6203, 3, "_0_was_also_declared_here_6203", "'{0}' was also declared here."),
          and_here: b(6204, 3, "and_here_6204", "and here."),
          All_type_parameters_are_unused: b(6205, 1, "All_type_parameters_are_unused_6205", "All type parameters are unused."),
          package_json_has_a_typesVersions_field_with_version_specific_path_mappings: b(6206, 3, "package_json_has_a_typesVersions_field_with_version_specific_path_mappings_6206", "'package.json' has a 'typesVersions' field with version-specific path mappings."),
          package_json_does_not_have_a_typesVersions_entry_that_matches_version_0: b(6207, 3, "package_json_does_not_have_a_typesVersions_entry_that_matches_version_0_6207", "'package.json' does not have a 'typesVersions' entry that matches version '{0}'."),
          package_json_has_a_typesVersions_entry_0_that_matches_compiler_version_1_looking_for_a_pattern_to_match_module_name_2: b(6208, 3, "package_json_has_a_typesVersions_entry_0_that_matches_compiler_version_1_looking_for_a_pattern_to_ma_6208", "'package.json' has a 'typesVersions' entry '{0}' that matches compiler version '{1}', looking for a pattern to match module name '{2}'."),
          package_json_has_a_typesVersions_entry_0_that_is_not_a_valid_semver_range: b(6209, 3, "package_json_has_a_typesVersions_entry_0_that_is_not_a_valid_semver_range_6209", "'package.json' has a 'typesVersions' entry '{0}' that is not a valid semver range."),
          An_argument_for_0_was_not_provided: b(6210, 3, "An_argument_for_0_was_not_provided_6210", "An argument for '{0}' was not provided."),
          An_argument_matching_this_binding_pattern_was_not_provided: b(6211, 3, "An_argument_matching_this_binding_pattern_was_not_provided_6211", "An argument matching this binding pattern was not provided."),
          Did_you_mean_to_call_this_expression: b(6212, 3, "Did_you_mean_to_call_this_expression_6212", "Did you mean to call this expression?"),
          Did_you_mean_to_use_new_with_this_expression: b(6213, 3, "Did_you_mean_to_use_new_with_this_expression_6213", "Did you mean to use 'new' with this expression?"),
          Enable_strict_bind_call_and_apply_methods_on_functions: b(6214, 3, "Enable_strict_bind_call_and_apply_methods_on_functions_6214", "Enable strict 'bind', 'call', and 'apply' methods on functions."),
          Using_compiler_options_of_project_reference_redirect_0: b(6215, 3, "Using_compiler_options_of_project_reference_redirect_0_6215", "Using compiler options of project reference redirect '{0}'."),
          Found_1_error: b(6216, 3, "Found_1_error_6216", "Found 1 error."),
          Found_0_errors: b(6217, 3, "Found_0_errors_6217", "Found {0} errors."),
          Module_name_0_was_successfully_resolved_to_1_with_Package_ID_2: b(6218, 3, "Module_name_0_was_successfully_resolved_to_1_with_Package_ID_2_6218", "======== Module name '{0}' was successfully resolved to '{1}' with Package ID '{2}'. ========"),
          Type_reference_directive_0_was_successfully_resolved_to_1_with_Package_ID_2_primary_Colon_3: b(6219, 3, "Type_reference_directive_0_was_successfully_resolved_to_1_with_Package_ID_2_primary_Colon_3_6219", "======== Type reference directive '{0}' was successfully resolved to '{1}' with Package ID '{2}', primary: {3}. ========"),
          package_json_had_a_falsy_0_field: b(6220, 3, "package_json_had_a_falsy_0_field_6220", "'package.json' had a falsy '{0}' field."),
          Disable_use_of_source_files_instead_of_declaration_files_from_referenced_projects: b(6221, 3, "Disable_use_of_source_files_instead_of_declaration_files_from_referenced_projects_6221", "Disable use of source files instead of declaration files from referenced projects."),
          Emit_class_fields_with_Define_instead_of_Set: b(6222, 3, "Emit_class_fields_with_Define_instead_of_Set_6222", "Emit class fields with Define instead of Set."),
          Generates_a_CPU_profile: b(6223, 3, "Generates_a_CPU_profile_6223", "Generates a CPU profile."),
          Disable_solution_searching_for_this_project: b(6224, 3, "Disable_solution_searching_for_this_project_6224", "Disable solution searching for this project."),
          Specify_strategy_for_watching_file_Colon_FixedPollingInterval_default_PriorityPollingInterval_DynamicPriorityPolling_FixedChunkSizePolling_UseFsEvents_UseFsEventsOnParentDirectory: b(6225, 3, "Specify_strategy_for_watching_file_Colon_FixedPollingInterval_default_PriorityPollingInterval_Dynami_6225", "Specify strategy for watching file: 'FixedPollingInterval' (default), 'PriorityPollingInterval', 'DynamicPriorityPolling', 'FixedChunkSizePolling', 'UseFsEvents', 'UseFsEventsOnParentDirectory'."),
          Specify_strategy_for_watching_directory_on_platforms_that_don_t_support_recursive_watching_natively_Colon_UseFsEvents_default_FixedPollingInterval_DynamicPriorityPolling_FixedChunkSizePolling: b(6226, 3, "Specify_strategy_for_watching_directory_on_platforms_that_don_t_support_recursive_watching_natively__6226", "Specify strategy for watching directory on platforms that don't support recursive watching natively: 'UseFsEvents' (default), 'FixedPollingInterval', 'DynamicPriorityPolling', 'FixedChunkSizePolling'."),
          Specify_strategy_for_creating_a_polling_watch_when_it_fails_to_create_using_file_system_events_Colon_FixedInterval_default_PriorityInterval_DynamicPriority_FixedChunkSize: b(6227, 3, "Specify_strategy_for_creating_a_polling_watch_when_it_fails_to_create_using_file_system_events_Colon_6227", "Specify strategy for creating a polling watch when it fails to create using file system events: 'FixedInterval' (default), 'PriorityInterval', 'DynamicPriority', 'FixedChunkSize'."),
          Tag_0_expects_at_least_1_arguments_but_the_JSX_factory_2_provides_at_most_3: b(6229, 1, "Tag_0_expects_at_least_1_arguments_but_the_JSX_factory_2_provides_at_most_3_6229", "Tag '{0}' expects at least '{1}' arguments, but the JSX factory '{2}' provides at most '{3}'."),
          Option_0_can_only_be_specified_in_tsconfig_json_file_or_set_to_false_or_null_on_command_line: b(6230, 1, "Option_0_can_only_be_specified_in_tsconfig_json_file_or_set_to_false_or_null_on_command_line_6230", "Option '{0}' can only be specified in 'tsconfig.json' file or set to 'false' or 'null' on command line."),
          Could_not_resolve_the_path_0_with_the_extensions_Colon_1: b(6231, 1, "Could_not_resolve_the_path_0_with_the_extensions_Colon_1_6231", "Could not resolve the path '{0}' with the extensions: {1}."),
          Declaration_augments_declaration_in_another_file_This_cannot_be_serialized: b(6232, 1, "Declaration_augments_declaration_in_another_file_This_cannot_be_serialized_6232", "Declaration augments declaration in another file. This cannot be serialized."),
          This_is_the_declaration_being_augmented_Consider_moving_the_augmenting_declaration_into_the_same_file: b(6233, 1, "This_is_the_declaration_being_augmented_Consider_moving_the_augmenting_declaration_into_the_same_fil_6233", "This is the declaration being augmented. Consider moving the augmenting declaration into the same file."),
          This_expression_is_not_callable_because_it_is_a_get_accessor_Did_you_mean_to_use_it_without: b(6234, 1, "This_expression_is_not_callable_because_it_is_a_get_accessor_Did_you_mean_to_use_it_without_6234", "This expression is not callable because it is a 'get' accessor. Did you mean to use it without '()'?"),
          Disable_loading_referenced_projects: b(6235, 3, "Disable_loading_referenced_projects_6235", "Disable loading referenced projects."),
          Arguments_for_the_rest_parameter_0_were_not_provided: b(6236, 1, "Arguments_for_the_rest_parameter_0_were_not_provided_6236", "Arguments for the rest parameter '{0}' were not provided."),
          Generates_an_event_trace_and_a_list_of_types: b(6237, 3, "Generates_an_event_trace_and_a_list_of_types_6237", "Generates an event trace and a list of types."),
          Specify_the_module_specifier_to_be_used_to_import_the_jsx_and_jsxs_factory_functions_from_eg_react: b(6238, 1, "Specify_the_module_specifier_to_be_used_to_import_the_jsx_and_jsxs_factory_functions_from_eg_react_6238", "Specify the module specifier to be used to import the 'jsx' and 'jsxs' factory functions from. eg, react"),
          File_0_exists_according_to_earlier_cached_lookups: b(6239, 3, "File_0_exists_according_to_earlier_cached_lookups_6239", "File '{0}' exists according to earlier cached lookups."),
          File_0_does_not_exist_according_to_earlier_cached_lookups: b(6240, 3, "File_0_does_not_exist_according_to_earlier_cached_lookups_6240", "File '{0}' does not exist according to earlier cached lookups."),
          Resolution_for_type_reference_directive_0_was_found_in_cache_from_location_1: b(6241, 3, "Resolution_for_type_reference_directive_0_was_found_in_cache_from_location_1_6241", "Resolution for type reference directive '{0}' was found in cache from location '{1}'."),
          Resolving_type_reference_directive_0_containing_file_1: b(6242, 3, "Resolving_type_reference_directive_0_containing_file_1_6242", "======== Resolving type reference directive '{0}', containing file '{1}'. ========"),
          Interpret_optional_property_types_as_written_rather_than_adding_undefined: b(6243, 3, "Interpret_optional_property_types_as_written_rather_than_adding_undefined_6243", "Interpret optional property types as written, rather than adding 'undefined'."),
          Modules: b(6244, 3, "Modules_6244", "Modules"),
          File_Management: b(6245, 3, "File_Management_6245", "File Management"),
          Emit: b(6246, 3, "Emit_6246", "Emit"),
          JavaScript_Support: b(6247, 3, "JavaScript_Support_6247", "JavaScript Support"),
          Type_Checking: b(6248, 3, "Type_Checking_6248", "Type Checking"),
          Editor_Support: b(6249, 3, "Editor_Support_6249", "Editor Support"),
          Watch_and_Build_Modes: b(6250, 3, "Watch_and_Build_Modes_6250", "Watch and Build Modes"),
          Compiler_Diagnostics: b(6251, 3, "Compiler_Diagnostics_6251", "Compiler Diagnostics"),
          Interop_Constraints: b(6252, 3, "Interop_Constraints_6252", "Interop Constraints"),
          Backwards_Compatibility: b(6253, 3, "Backwards_Compatibility_6253", "Backwards Compatibility"),
          Language_and_Environment: b(6254, 3, "Language_and_Environment_6254", "Language and Environment"),
          Projects: b(6255, 3, "Projects_6255", "Projects"),
          Output_Formatting: b(6256, 3, "Output_Formatting_6256", "Output Formatting"),
          Completeness: b(6257, 3, "Completeness_6257", "Completeness"),
          _0_should_be_set_inside_the_compilerOptions_object_of_the_config_json_file: b(6258, 1, "_0_should_be_set_inside_the_compilerOptions_object_of_the_config_json_file_6258", "'{0}' should be set inside the 'compilerOptions' object of the config json file"),
          Found_1_error_in_0: b(6259, 3, "Found_1_error_in_0_6259", "Found 1 error in {0}"),
          Found_0_errors_in_the_same_file_starting_at_Colon_1: b(6260, 3, "Found_0_errors_in_the_same_file_starting_at_Colon_1_6260", "Found {0} errors in the same file, starting at: {1}"),
          Found_0_errors_in_1_files: b(6261, 3, "Found_0_errors_in_1_files_6261", "Found {0} errors in {1} files."),
          File_name_0_has_a_1_extension_looking_up_2_instead: b(6262, 3, "File_name_0_has_a_1_extension_looking_up_2_instead_6262", "File name '{0}' has a '{1}' extension - looking up '{2}' instead."),
          Module_0_was_resolved_to_1_but_allowArbitraryExtensions_is_not_set: b(6263, 1, "Module_0_was_resolved_to_1_but_allowArbitraryExtensions_is_not_set_6263", "Module '{0}' was resolved to '{1}', but '--allowArbitraryExtensions' is not set."),
          Enable_importing_files_with_any_extension_provided_a_declaration_file_is_present: b(6264, 3, "Enable_importing_files_with_any_extension_provided_a_declaration_file_is_present_6264", "Enable importing files with any extension, provided a declaration file is present."),
          Resolving_type_reference_directive_for_program_that_specifies_custom_typeRoots_skipping_lookup_in_node_modules_folder: b(6265, 3, "Resolving_type_reference_directive_for_program_that_specifies_custom_typeRoots_skipping_lookup_in_no_6265", "Resolving type reference directive for program that specifies custom typeRoots, skipping lookup in 'node_modules' folder."),
          Option_0_can_only_be_specified_on_command_line: b(6266, 1, "Option_0_can_only_be_specified_on_command_line_6266", "Option '{0}' can only be specified on command line."),
          Directory_0_has_no_containing_package_json_scope_Imports_will_not_resolve: b(6270, 3, "Directory_0_has_no_containing_package_json_scope_Imports_will_not_resolve_6270", "Directory '{0}' has no containing package.json scope. Imports will not resolve."),
          Import_specifier_0_does_not_exist_in_package_json_scope_at_path_1: b(6271, 3, "Import_specifier_0_does_not_exist_in_package_json_scope_at_path_1_6271", "Import specifier '{0}' does not exist in package.json scope at path '{1}'."),
          Invalid_import_specifier_0_has_no_possible_resolutions: b(6272, 3, "Invalid_import_specifier_0_has_no_possible_resolutions_6272", "Invalid import specifier '{0}' has no possible resolutions."),
          package_json_scope_0_has_no_imports_defined: b(6273, 3, "package_json_scope_0_has_no_imports_defined_6273", "package.json scope '{0}' has no imports defined."),
          package_json_scope_0_explicitly_maps_specifier_1_to_null: b(6274, 3, "package_json_scope_0_explicitly_maps_specifier_1_to_null_6274", "package.json scope '{0}' explicitly maps specifier '{1}' to null."),
          package_json_scope_0_has_invalid_type_for_target_of_specifier_1: b(6275, 3, "package_json_scope_0_has_invalid_type_for_target_of_specifier_1_6275", "package.json scope '{0}' has invalid type for target of specifier '{1}'"),
          Export_specifier_0_does_not_exist_in_package_json_scope_at_path_1: b(6276, 3, "Export_specifier_0_does_not_exist_in_package_json_scope_at_path_1_6276", "Export specifier '{0}' does not exist in package.json scope at path '{1}'."),
          Resolution_of_non_relative_name_failed_trying_with_modern_Node_resolution_features_disabled_to_see_if_npm_library_needs_configuration_update: b(6277, 3, "Resolution_of_non_relative_name_failed_trying_with_modern_Node_resolution_features_disabled_to_see_i_6277", "Resolution of non-relative name failed; trying with modern Node resolution features disabled to see if npm library needs configuration update."),
          There_are_types_at_0_but_this_result_could_not_be_resolved_when_respecting_package_json_exports_The_1_library_may_need_to_update_its_package_json_or_typings: b(6278, 3, "There_are_types_at_0_but_this_result_could_not_be_resolved_when_respecting_package_json_exports_The__6278", `There are types at '{0}', but this result could not be resolved when respecting package.json "exports". The '{1}' library may need to update its package.json or typings.`),
          Resolution_of_non_relative_name_failed_trying_with_moduleResolution_bundler_to_see_if_project_may_need_configuration_update: b(6279, 3, "Resolution_of_non_relative_name_failed_trying_with_moduleResolution_bundler_to_see_if_project_may_ne_6279", "Resolution of non-relative name failed; trying with '--moduleResolution bundler' to see if project may need configuration update."),
          There_are_types_at_0_but_this_result_could_not_be_resolved_under_your_current_moduleResolution_setting_Consider_updating_to_node16_nodenext_or_bundler: b(6280, 3, "There_are_types_at_0_but_this_result_could_not_be_resolved_under_your_current_moduleResolution_setti_6280", "There are types at '{0}', but this result could not be resolved under your current 'moduleResolution' setting. Consider updating to 'node16', 'nodenext', or 'bundler'."),
          Enable_project_compilation: b(6302, 3, "Enable_project_compilation_6302", "Enable project compilation"),
          Composite_projects_may_not_disable_declaration_emit: b(6304, 1, "Composite_projects_may_not_disable_declaration_emit_6304", "Composite projects may not disable declaration emit."),
          Output_file_0_has_not_been_built_from_source_file_1: b(6305, 1, "Output_file_0_has_not_been_built_from_source_file_1_6305", "Output file '{0}' has not been built from source file '{1}'."),
          Referenced_project_0_must_have_setting_composite_Colon_true: b(6306, 1, "Referenced_project_0_must_have_setting_composite_Colon_true_6306", `Referenced project '{0}' must have setting "composite": true.`),
          File_0_is_not_listed_within_the_file_list_of_project_1_Projects_must_list_all_files_or_use_an_include_pattern: b(6307, 1, "File_0_is_not_listed_within_the_file_list_of_project_1_Projects_must_list_all_files_or_use_an_includ_6307", "File '{0}' is not listed within the file list of project '{1}'. Projects must list all files or use an 'include' pattern."),
          Cannot_prepend_project_0_because_it_does_not_have_outFile_set: b(6308, 1, "Cannot_prepend_project_0_because_it_does_not_have_outFile_set_6308", "Cannot prepend project '{0}' because it does not have 'outFile' set"),
          Output_file_0_from_project_1_does_not_exist: b(6309, 1, "Output_file_0_from_project_1_does_not_exist_6309", "Output file '{0}' from project '{1}' does not exist"),
          Referenced_project_0_may_not_disable_emit: b(6310, 1, "Referenced_project_0_may_not_disable_emit_6310", "Referenced project '{0}' may not disable emit."),
          Project_0_is_out_of_date_because_output_1_is_older_than_input_2: b(6350, 3, "Project_0_is_out_of_date_because_output_1_is_older_than_input_2_6350", "Project '{0}' is out of date because output '{1}' is older than input '{2}'"),
          Project_0_is_up_to_date_because_newest_input_1_is_older_than_output_2: b(6351, 3, "Project_0_is_up_to_date_because_newest_input_1_is_older_than_output_2_6351", "Project '{0}' is up to date because newest input '{1}' is older than output '{2}'"),
          Project_0_is_out_of_date_because_output_file_1_does_not_exist: b(6352, 3, "Project_0_is_out_of_date_because_output_file_1_does_not_exist_6352", "Project '{0}' is out of date because output file '{1}' does not exist"),
          Project_0_is_out_of_date_because_its_dependency_1_is_out_of_date: b(6353, 3, "Project_0_is_out_of_date_because_its_dependency_1_is_out_of_date_6353", "Project '{0}' is out of date because its dependency '{1}' is out of date"),
          Project_0_is_up_to_date_with_d_ts_files_from_its_dependencies: b(6354, 3, "Project_0_is_up_to_date_with_d_ts_files_from_its_dependencies_6354", "Project '{0}' is up to date with .d.ts files from its dependencies"),
          Projects_in_this_build_Colon_0: b(6355, 3, "Projects_in_this_build_Colon_0_6355", "Projects in this build: {0}"),
          A_non_dry_build_would_delete_the_following_files_Colon_0: b(6356, 3, "A_non_dry_build_would_delete_the_following_files_Colon_0_6356", "A non-dry build would delete the following files: {0}"),
          A_non_dry_build_would_build_project_0: b(6357, 3, "A_non_dry_build_would_build_project_0_6357", "A non-dry build would build project '{0}'"),
          Building_project_0: b(6358, 3, "Building_project_0_6358", "Building project '{0}'..."),
          Updating_output_timestamps_of_project_0: b(6359, 3, "Updating_output_timestamps_of_project_0_6359", "Updating output timestamps of project '{0}'..."),
          Project_0_is_up_to_date: b(6361, 3, "Project_0_is_up_to_date_6361", "Project '{0}' is up to date"),
          Skipping_build_of_project_0_because_its_dependency_1_has_errors: b(6362, 3, "Skipping_build_of_project_0_because_its_dependency_1_has_errors_6362", "Skipping build of project '{0}' because its dependency '{1}' has errors"),
          Project_0_can_t_be_built_because_its_dependency_1_has_errors: b(6363, 3, "Project_0_can_t_be_built_because_its_dependency_1_has_errors_6363", "Project '{0}' can't be built because its dependency '{1}' has errors"),
          Build_one_or_more_projects_and_their_dependencies_if_out_of_date: b(6364, 3, "Build_one_or_more_projects_and_their_dependencies_if_out_of_date_6364", "Build one or more projects and their dependencies, if out of date"),
          Delete_the_outputs_of_all_projects: b(6365, 3, "Delete_the_outputs_of_all_projects_6365", "Delete the outputs of all projects."),
          Show_what_would_be_built_or_deleted_if_specified_with_clean: b(6367, 3, "Show_what_would_be_built_or_deleted_if_specified_with_clean_6367", "Show what would be built (or deleted, if specified with '--clean')"),
          Option_build_must_be_the_first_command_line_argument: b(6369, 1, "Option_build_must_be_the_first_command_line_argument_6369", "Option '--build' must be the first command line argument."),
          Options_0_and_1_cannot_be_combined: b(6370, 1, "Options_0_and_1_cannot_be_combined_6370", "Options '{0}' and '{1}' cannot be combined."),
          Updating_unchanged_output_timestamps_of_project_0: b(6371, 3, "Updating_unchanged_output_timestamps_of_project_0_6371", "Updating unchanged output timestamps of project '{0}'..."),
          Project_0_is_out_of_date_because_output_of_its_dependency_1_has_changed: b(6372, 3, "Project_0_is_out_of_date_because_output_of_its_dependency_1_has_changed_6372", "Project '{0}' is out of date because output of its dependency '{1}' has changed"),
          Updating_output_of_project_0: b(6373, 3, "Updating_output_of_project_0_6373", "Updating output of project '{0}'..."),
          A_non_dry_build_would_update_timestamps_for_output_of_project_0: b(6374, 3, "A_non_dry_build_would_update_timestamps_for_output_of_project_0_6374", "A non-dry build would update timestamps for output of project '{0}'"),
          A_non_dry_build_would_update_output_of_project_0: b(6375, 3, "A_non_dry_build_would_update_output_of_project_0_6375", "A non-dry build would update output of project '{0}'"),
          Cannot_update_output_of_project_0_because_there_was_error_reading_file_1: b(6376, 3, "Cannot_update_output_of_project_0_because_there_was_error_reading_file_1_6376", "Cannot update output of project '{0}' because there was error reading file '{1}'"),
          Cannot_write_file_0_because_it_will_overwrite_tsbuildinfo_file_generated_by_referenced_project_1: b(6377, 1, "Cannot_write_file_0_because_it_will_overwrite_tsbuildinfo_file_generated_by_referenced_project_1_6377", "Cannot write file '{0}' because it will overwrite '.tsbuildinfo' file generated by referenced project '{1}'"),
          Composite_projects_may_not_disable_incremental_compilation: b(6379, 1, "Composite_projects_may_not_disable_incremental_compilation_6379", "Composite projects may not disable incremental compilation."),
          Specify_file_to_store_incremental_compilation_information: b(6380, 3, "Specify_file_to_store_incremental_compilation_information_6380", "Specify file to store incremental compilation information"),
          Project_0_is_out_of_date_because_output_for_it_was_generated_with_version_1_that_differs_with_current_version_2: b(6381, 3, "Project_0_is_out_of_date_because_output_for_it_was_generated_with_version_1_that_differs_with_curren_6381", "Project '{0}' is out of date because output for it was generated with version '{1}' that differs with current version '{2}'"),
          Skipping_build_of_project_0_because_its_dependency_1_was_not_built: b(6382, 3, "Skipping_build_of_project_0_because_its_dependency_1_was_not_built_6382", "Skipping build of project '{0}' because its dependency '{1}' was not built"),
          Project_0_can_t_be_built_because_its_dependency_1_was_not_built: b(6383, 3, "Project_0_can_t_be_built_because_its_dependency_1_was_not_built_6383", "Project '{0}' can't be built because its dependency '{1}' was not built"),
          Have_recompiles_in_incremental_and_watch_assume_that_changes_within_a_file_will_only_affect_files_directly_depending_on_it: b(6384, 3, "Have_recompiles_in_incremental_and_watch_assume_that_changes_within_a_file_will_only_affect_files_di_6384", "Have recompiles in '--incremental' and '--watch' assume that changes within a file will only affect files directly depending on it."),
          _0_is_deprecated: b(
            6385,
            2,
            "_0_is_deprecated_6385",
            "'{0}' is deprecated.",
            /*reportsUnnecessary*/
            void 0,
            /*elidedInCompatabilityPyramid*/
            void 0,
            /*reportsDeprecated*/
            !0
          ),
          Performance_timings_for_diagnostics_or_extendedDiagnostics_are_not_available_in_this_session_A_native_implementation_of_the_Web_Performance_API_could_not_be_found: b(6386, 3, "Performance_timings_for_diagnostics_or_extendedDiagnostics_are_not_available_in_this_session_A_nativ_6386", "Performance timings for '--diagnostics' or '--extendedDiagnostics' are not available in this session. A native implementation of the Web Performance API could not be found."),
          The_signature_0_of_1_is_deprecated: b(
            6387,
            2,
            "The_signature_0_of_1_is_deprecated_6387",
            "The signature '{0}' of '{1}' is deprecated.",
            /*reportsUnnecessary*/
            void 0,
            /*elidedInCompatabilityPyramid*/
            void 0,
            /*reportsDeprecated*/
            !0
          ),
          Project_0_is_being_forcibly_rebuilt: b(6388, 3, "Project_0_is_being_forcibly_rebuilt_6388", "Project '{0}' is being forcibly rebuilt"),
          Reusing_resolution_of_module_0_from_1_of_old_program_it_was_not_resolved: b(6389, 3, "Reusing_resolution_of_module_0_from_1_of_old_program_it_was_not_resolved_6389", "Reusing resolution of module '{0}' from '{1}' of old program, it was not resolved."),
          Reusing_resolution_of_type_reference_directive_0_from_1_of_old_program_it_was_successfully_resolved_to_2: b(6390, 3, "Reusing_resolution_of_type_reference_directive_0_from_1_of_old_program_it_was_successfully_resolved__6390", "Reusing resolution of type reference directive '{0}' from '{1}' of old program, it was successfully resolved to '{2}'."),
          Reusing_resolution_of_type_reference_directive_0_from_1_of_old_program_it_was_successfully_resolved_to_2_with_Package_ID_3: b(6391, 3, "Reusing_resolution_of_type_reference_directive_0_from_1_of_old_program_it_was_successfully_resolved__6391", "Reusing resolution of type reference directive '{0}' from '{1}' of old program, it was successfully resolved to '{2}' with Package ID '{3}'."),
          Reusing_resolution_of_type_reference_directive_0_from_1_of_old_program_it_was_not_resolved: b(6392, 3, "Reusing_resolution_of_type_reference_directive_0_from_1_of_old_program_it_was_not_resolved_6392", "Reusing resolution of type reference directive '{0}' from '{1}' of old program, it was not resolved."),
          Reusing_resolution_of_module_0_from_1_found_in_cache_from_location_2_it_was_successfully_resolved_to_3: b(6393, 3, "Reusing_resolution_of_module_0_from_1_found_in_cache_from_location_2_it_was_successfully_resolved_to_6393", "Reusing resolution of module '{0}' from '{1}' found in cache from location '{2}', it was successfully resolved to '{3}'."),
          Reusing_resolution_of_module_0_from_1_found_in_cache_from_location_2_it_was_successfully_resolved_to_3_with_Package_ID_4: b(6394, 3, "Reusing_resolution_of_module_0_from_1_found_in_cache_from_location_2_it_was_successfully_resolved_to_6394", "Reusing resolution of module '{0}' from '{1}' found in cache from location '{2}', it was successfully resolved to '{3}' with Package ID '{4}'."),
          Reusing_resolution_of_module_0_from_1_found_in_cache_from_location_2_it_was_not_resolved: b(6395, 3, "Reusing_resolution_of_module_0_from_1_found_in_cache_from_location_2_it_was_not_resolved_6395", "Reusing resolution of module '{0}' from '{1}' found in cache from location '{2}', it was not resolved."),
          Reusing_resolution_of_type_reference_directive_0_from_1_found_in_cache_from_location_2_it_was_successfully_resolved_to_3: b(6396, 3, "Reusing_resolution_of_type_reference_directive_0_from_1_found_in_cache_from_location_2_it_was_succes_6396", "Reusing resolution of type reference directive '{0}' from '{1}' found in cache from location '{2}', it was successfully resolved to '{3}'."),
          Reusing_resolution_of_type_reference_directive_0_from_1_found_in_cache_from_location_2_it_was_successfully_resolved_to_3_with_Package_ID_4: b(6397, 3, "Reusing_resolution_of_type_reference_directive_0_from_1_found_in_cache_from_location_2_it_was_succes_6397", "Reusing resolution of type reference directive '{0}' from '{1}' found in cache from location '{2}', it was successfully resolved to '{3}' with Package ID '{4}'."),
          Reusing_resolution_of_type_reference_directive_0_from_1_found_in_cache_from_location_2_it_was_not_resolved: b(6398, 3, "Reusing_resolution_of_type_reference_directive_0_from_1_found_in_cache_from_location_2_it_was_not_re_6398", "Reusing resolution of type reference directive '{0}' from '{1}' found in cache from location '{2}', it was not resolved."),
          Project_0_is_out_of_date_because_buildinfo_file_1_indicates_that_some_of_the_changes_were_not_emitted: b(6399, 3, "Project_0_is_out_of_date_because_buildinfo_file_1_indicates_that_some_of_the_changes_were_not_emitte_6399", "Project '{0}' is out of date because buildinfo file '{1}' indicates that some of the changes were not emitted"),
          Project_0_is_up_to_date_but_needs_to_update_timestamps_of_output_files_that_are_older_than_input_files: b(6400, 3, "Project_0_is_up_to_date_but_needs_to_update_timestamps_of_output_files_that_are_older_than_input_fil_6400", "Project '{0}' is up to date but needs to update timestamps of output files that are older than input files"),
          Project_0_is_out_of_date_because_there_was_error_reading_file_1: b(6401, 3, "Project_0_is_out_of_date_because_there_was_error_reading_file_1_6401", "Project '{0}' is out of date because there was error reading file '{1}'"),
          Resolving_in_0_mode_with_conditions_1: b(6402, 3, "Resolving_in_0_mode_with_conditions_1_6402", "Resolving in {0} mode with conditions {1}."),
          Matched_0_condition_1: b(6403, 3, "Matched_0_condition_1_6403", "Matched '{0}' condition '{1}'."),
          Using_0_subpath_1_with_target_2: b(6404, 3, "Using_0_subpath_1_with_target_2_6404", "Using '{0}' subpath '{1}' with target '{2}'."),
          Saw_non_matching_condition_0: b(6405, 3, "Saw_non_matching_condition_0_6405", "Saw non-matching condition '{0}'."),
          Project_0_is_out_of_date_because_buildinfo_file_1_indicates_there_is_change_in_compilerOptions: b(6406, 3, "Project_0_is_out_of_date_because_buildinfo_file_1_indicates_there_is_change_in_compilerOptions_6406", "Project '{0}' is out of date because buildinfo file '{1}' indicates there is change in compilerOptions"),
          Allow_imports_to_include_TypeScript_file_extensions_Requires_moduleResolution_bundler_and_either_noEmit_or_emitDeclarationOnly_to_be_set: b(6407, 3, "Allow_imports_to_include_TypeScript_file_extensions_Requires_moduleResolution_bundler_and_either_noE_6407", "Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set."),
          Use_the_package_json_exports_field_when_resolving_package_imports: b(6408, 3, "Use_the_package_json_exports_field_when_resolving_package_imports_6408", "Use the package.json 'exports' field when resolving package imports."),
          Use_the_package_json_imports_field_when_resolving_imports: b(6409, 3, "Use_the_package_json_imports_field_when_resolving_imports_6409", "Use the package.json 'imports' field when resolving imports."),
          Conditions_to_set_in_addition_to_the_resolver_specific_defaults_when_resolving_imports: b(6410, 3, "Conditions_to_set_in_addition_to_the_resolver_specific_defaults_when_resolving_imports_6410", "Conditions to set in addition to the resolver-specific defaults when resolving imports."),
          true_when_moduleResolution_is_node16_nodenext_or_bundler_otherwise_false: b(6411, 3, "true_when_moduleResolution_is_node16_nodenext_or_bundler_otherwise_false_6411", "`true` when 'moduleResolution' is 'node16', 'nodenext', or 'bundler'; otherwise `false`."),
          Project_0_is_out_of_date_because_buildinfo_file_1_indicates_that_file_2_was_root_file_of_compilation_but_not_any_more: b(6412, 3, "Project_0_is_out_of_date_because_buildinfo_file_1_indicates_that_file_2_was_root_file_of_compilation_6412", "Project '{0}' is out of date because buildinfo file '{1}' indicates that file '{2}' was root file of compilation but not any more."),
          Entering_conditional_exports: b(6413, 3, "Entering_conditional_exports_6413", "Entering conditional exports."),
          Resolved_under_condition_0: b(6414, 3, "Resolved_under_condition_0_6414", "Resolved under condition '{0}'."),
          Failed_to_resolve_under_condition_0: b(6415, 3, "Failed_to_resolve_under_condition_0_6415", "Failed to resolve under condition '{0}'."),
          Exiting_conditional_exports: b(6416, 3, "Exiting_conditional_exports_6416", "Exiting conditional exports."),
          Searching_all_ancestor_node_modules_directories_for_preferred_extensions_Colon_0: b(6417, 3, "Searching_all_ancestor_node_modules_directories_for_preferred_extensions_Colon_0_6417", "Searching all ancestor node_modules directories for preferred extensions: {0}."),
          Searching_all_ancestor_node_modules_directories_for_fallback_extensions_Colon_0: b(6418, 3, "Searching_all_ancestor_node_modules_directories_for_fallback_extensions_Colon_0_6418", "Searching all ancestor node_modules directories for fallback extensions: {0}."),
          The_expected_type_comes_from_property_0_which_is_declared_here_on_type_1: b(6500, 3, "The_expected_type_comes_from_property_0_which_is_declared_here_on_type_1_6500", "The expected type comes from property '{0}' which is declared here on type '{1}'"),
          The_expected_type_comes_from_this_index_signature: b(6501, 3, "The_expected_type_comes_from_this_index_signature_6501", "The expected type comes from this index signature."),
          The_expected_type_comes_from_the_return_type_of_this_signature: b(6502, 3, "The_expected_type_comes_from_the_return_type_of_this_signature_6502", "The expected type comes from the return type of this signature."),
          Print_names_of_files_that_are_part_of_the_compilation_and_then_stop_processing: b(6503, 3, "Print_names_of_files_that_are_part_of_the_compilation_and_then_stop_processing_6503", "Print names of files that are part of the compilation and then stop processing."),
          File_0_is_a_JavaScript_file_Did_you_mean_to_enable_the_allowJs_option: b(6504, 1, "File_0_is_a_JavaScript_file_Did_you_mean_to_enable_the_allowJs_option_6504", "File '{0}' is a JavaScript file. Did you mean to enable the 'allowJs' option?"),
          Print_names_of_files_and_the_reason_they_are_part_of_the_compilation: b(6505, 3, "Print_names_of_files_and_the_reason_they_are_part_of_the_compilation_6505", "Print names of files and the reason they are part of the compilation."),
          Consider_adding_a_declare_modifier_to_this_class: b(6506, 3, "Consider_adding_a_declare_modifier_to_this_class_6506", "Consider adding a 'declare' modifier to this class."),
          Allow_JavaScript_files_to_be_a_part_of_your_program_Use_the_checkJS_option_to_get_errors_from_these_files: b(6600, 3, "Allow_JavaScript_files_to_be_a_part_of_your_program_Use_the_checkJS_option_to_get_errors_from_these__6600", "Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files."),
          Allow_import_x_from_y_when_a_module_doesn_t_have_a_default_export: b(6601, 3, "Allow_import_x_from_y_when_a_module_doesn_t_have_a_default_export_6601", "Allow 'import x from y' when a module doesn't have a default export."),
          Allow_accessing_UMD_globals_from_modules: b(6602, 3, "Allow_accessing_UMD_globals_from_modules_6602", "Allow accessing UMD globals from modules."),
          Disable_error_reporting_for_unreachable_code: b(6603, 3, "Disable_error_reporting_for_unreachable_code_6603", "Disable error reporting for unreachable code."),
          Disable_error_reporting_for_unused_labels: b(6604, 3, "Disable_error_reporting_for_unused_labels_6604", "Disable error reporting for unused labels."),
          Ensure_use_strict_is_always_emitted: b(6605, 3, "Ensure_use_strict_is_always_emitted_6605", "Ensure 'use strict' is always emitted."),
          Have_recompiles_in_projects_that_use_incremental_and_watch_mode_assume_that_changes_within_a_file_will_only_affect_files_directly_depending_on_it: b(6606, 3, "Have_recompiles_in_projects_that_use_incremental_and_watch_mode_assume_that_changes_within_a_file_wi_6606", "Have recompiles in projects that use 'incremental' and 'watch' mode assume that changes within a file will only affect files directly depending on it."),
          Specify_the_base_directory_to_resolve_non_relative_module_names: b(6607, 3, "Specify_the_base_directory_to_resolve_non_relative_module_names_6607", "Specify the base directory to resolve non-relative module names."),
          No_longer_supported_In_early_versions_manually_set_the_text_encoding_for_reading_files: b(6608, 3, "No_longer_supported_In_early_versions_manually_set_the_text_encoding_for_reading_files_6608", "No longer supported. In early versions, manually set the text encoding for reading files."),
          Enable_error_reporting_in_type_checked_JavaScript_files: b(6609, 3, "Enable_error_reporting_in_type_checked_JavaScript_files_6609", "Enable error reporting in type-checked JavaScript files."),
          Enable_constraints_that_allow_a_TypeScript_project_to_be_used_with_project_references: b(6611, 3, "Enable_constraints_that_allow_a_TypeScript_project_to_be_used_with_project_references_6611", "Enable constraints that allow a TypeScript project to be used with project references."),
          Generate_d_ts_files_from_TypeScript_and_JavaScript_files_in_your_project: b(6612, 3, "Generate_d_ts_files_from_TypeScript_and_JavaScript_files_in_your_project_6612", "Generate .d.ts files from TypeScript and JavaScript files in your project."),
          Specify_the_output_directory_for_generated_declaration_files: b(6613, 3, "Specify_the_output_directory_for_generated_declaration_files_6613", "Specify the output directory for generated declaration files."),
          Create_sourcemaps_for_d_ts_files: b(6614, 3, "Create_sourcemaps_for_d_ts_files_6614", "Create sourcemaps for d.ts files."),
          Output_compiler_performance_information_after_building: b(6615, 3, "Output_compiler_performance_information_after_building_6615", "Output compiler performance information after building."),
          Disables_inference_for_type_acquisition_by_looking_at_filenames_in_a_project: b(6616, 3, "Disables_inference_for_type_acquisition_by_looking_at_filenames_in_a_project_6616", "Disables inference for type acquisition by looking at filenames in a project."),
          Reduce_the_number_of_projects_loaded_automatically_by_TypeScript: b(6617, 3, "Reduce_the_number_of_projects_loaded_automatically_by_TypeScript_6617", "Reduce the number of projects loaded automatically by TypeScript."),
          Remove_the_20mb_cap_on_total_source_code_size_for_JavaScript_files_in_the_TypeScript_language_server: b(6618, 3, "Remove_the_20mb_cap_on_total_source_code_size_for_JavaScript_files_in_the_TypeScript_language_server_6618", "Remove the 20mb cap on total source code size for JavaScript files in the TypeScript language server."),
          Opt_a_project_out_of_multi_project_reference_checking_when_editing: b(6619, 3, "Opt_a_project_out_of_multi_project_reference_checking_when_editing_6619", "Opt a project out of multi-project reference checking when editing."),
          Disable_preferring_source_files_instead_of_declaration_files_when_referencing_composite_projects: b(6620, 3, "Disable_preferring_source_files_instead_of_declaration_files_when_referencing_composite_projects_6620", "Disable preferring source files instead of declaration files when referencing composite projects."),
          Emit_more_compliant_but_verbose_and_less_performant_JavaScript_for_iteration: b(6621, 3, "Emit_more_compliant_but_verbose_and_less_performant_JavaScript_for_iteration_6621", "Emit more compliant, but verbose and less performant JavaScript for iteration."),
          Emit_a_UTF_8_Byte_Order_Mark_BOM_in_the_beginning_of_output_files: b(6622, 3, "Emit_a_UTF_8_Byte_Order_Mark_BOM_in_the_beginning_of_output_files_6622", "Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files."),
          Only_output_d_ts_files_and_not_JavaScript_files: b(6623, 3, "Only_output_d_ts_files_and_not_JavaScript_files_6623", "Only output d.ts files and not JavaScript files."),
          Emit_design_type_metadata_for_decorated_declarations_in_source_files: b(6624, 3, "Emit_design_type_metadata_for_decorated_declarations_in_source_files_6624", "Emit design-type metadata for decorated declarations in source files."),
          Disable_the_type_acquisition_for_JavaScript_projects: b(6625, 3, "Disable_the_type_acquisition_for_JavaScript_projects_6625", "Disable the type acquisition for JavaScript projects"),
          Emit_additional_JavaScript_to_ease_support_for_importing_CommonJS_modules_This_enables_allowSyntheticDefaultImports_for_type_compatibility: b(6626, 3, "Emit_additional_JavaScript_to_ease_support_for_importing_CommonJS_modules_This_enables_allowSyntheti_6626", "Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility."),
          Filters_results_from_the_include_option: b(6627, 3, "Filters_results_from_the_include_option_6627", "Filters results from the `include` option."),
          Remove_a_list_of_directories_from_the_watch_process: b(6628, 3, "Remove_a_list_of_directories_from_the_watch_process_6628", "Remove a list of directories from the watch process."),
          Remove_a_list_of_files_from_the_watch_mode_s_processing: b(6629, 3, "Remove_a_list_of_files_from_the_watch_mode_s_processing_6629", "Remove a list of files from the watch mode's processing."),
          Enable_experimental_support_for_legacy_experimental_decorators: b(6630, 3, "Enable_experimental_support_for_legacy_experimental_decorators_6630", "Enable experimental support for legacy experimental decorators."),
          Print_files_read_during_the_compilation_including_why_it_was_included: b(6631, 3, "Print_files_read_during_the_compilation_including_why_it_was_included_6631", "Print files read during the compilation including why it was included."),
          Output_more_detailed_compiler_performance_information_after_building: b(6632, 3, "Output_more_detailed_compiler_performance_information_after_building_6632", "Output more detailed compiler performance information after building."),
          Specify_one_or_more_path_or_node_module_references_to_base_configuration_files_from_which_settings_are_inherited: b(6633, 3, "Specify_one_or_more_path_or_node_module_references_to_base_configuration_files_from_which_settings_a_6633", "Specify one or more path or node module references to base configuration files from which settings are inherited."),
          Specify_what_approach_the_watcher_should_use_if_the_system_runs_out_of_native_file_watchers: b(6634, 3, "Specify_what_approach_the_watcher_should_use_if_the_system_runs_out_of_native_file_watchers_6634", "Specify what approach the watcher should use if the system runs out of native file watchers."),
          Include_a_list_of_files_This_does_not_support_glob_patterns_as_opposed_to_include: b(6635, 3, "Include_a_list_of_files_This_does_not_support_glob_patterns_as_opposed_to_include_6635", "Include a list of files. This does not support glob patterns, as opposed to `include`."),
          Build_all_projects_including_those_that_appear_to_be_up_to_date: b(6636, 3, "Build_all_projects_including_those_that_appear_to_be_up_to_date_6636", "Build all projects, including those that appear to be up to date."),
          Ensure_that_casing_is_correct_in_imports: b(6637, 3, "Ensure_that_casing_is_correct_in_imports_6637", "Ensure that casing is correct in imports."),
          Emit_a_v8_CPU_profile_of_the_compiler_run_for_debugging: b(6638, 3, "Emit_a_v8_CPU_profile_of_the_compiler_run_for_debugging_6638", "Emit a v8 CPU profile of the compiler run for debugging."),
          Allow_importing_helper_functions_from_tslib_once_per_project_instead_of_including_them_per_file: b(6639, 3, "Allow_importing_helper_functions_from_tslib_once_per_project_instead_of_including_them_per_file_6639", "Allow importing helper functions from tslib once per project, instead of including them per-file."),
          Specify_a_list_of_glob_patterns_that_match_files_to_be_included_in_compilation: b(6641, 3, "Specify_a_list_of_glob_patterns_that_match_files_to_be_included_in_compilation_6641", "Specify a list of glob patterns that match files to be included in compilation."),
          Save_tsbuildinfo_files_to_allow_for_incremental_compilation_of_projects: b(6642, 3, "Save_tsbuildinfo_files_to_allow_for_incremental_compilation_of_projects_6642", "Save .tsbuildinfo files to allow for incremental compilation of projects."),
          Include_sourcemap_files_inside_the_emitted_JavaScript: b(6643, 3, "Include_sourcemap_files_inside_the_emitted_JavaScript_6643", "Include sourcemap files inside the emitted JavaScript."),
          Include_source_code_in_the_sourcemaps_inside_the_emitted_JavaScript: b(6644, 3, "Include_source_code_in_the_sourcemaps_inside_the_emitted_JavaScript_6644", "Include source code in the sourcemaps inside the emitted JavaScript."),
          Ensure_that_each_file_can_be_safely_transpiled_without_relying_on_other_imports: b(6645, 3, "Ensure_that_each_file_can_be_safely_transpiled_without_relying_on_other_imports_6645", "Ensure that each file can be safely transpiled without relying on other imports."),
          Specify_what_JSX_code_is_generated: b(6646, 3, "Specify_what_JSX_code_is_generated_6646", "Specify what JSX code is generated."),
          Specify_the_JSX_factory_function_used_when_targeting_React_JSX_emit_e_g_React_createElement_or_h: b(6647, 3, "Specify_the_JSX_factory_function_used_when_targeting_React_JSX_emit_e_g_React_createElement_or_h_6647", "Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'."),
          Specify_the_JSX_Fragment_reference_used_for_fragments_when_targeting_React_JSX_emit_e_g_React_Fragment_or_Fragment: b(6648, 3, "Specify_the_JSX_Fragment_reference_used_for_fragments_when_targeting_React_JSX_emit_e_g_React_Fragme_6648", "Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'."),
          Specify_module_specifier_used_to_import_the_JSX_factory_functions_when_using_jsx_Colon_react_jsx_Asterisk: b(6649, 3, "Specify_module_specifier_used_to_import_the_JSX_factory_functions_when_using_jsx_Colon_react_jsx_Ast_6649", "Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'."),
          Make_keyof_only_return_strings_instead_of_string_numbers_or_symbols_Legacy_option: b(6650, 3, "Make_keyof_only_return_strings_instead_of_string_numbers_or_symbols_Legacy_option_6650", "Make keyof only return strings instead of string, numbers or symbols. Legacy option."),
          Specify_a_set_of_bundled_library_declaration_files_that_describe_the_target_runtime_environment: b(6651, 3, "Specify_a_set_of_bundled_library_declaration_files_that_describe_the_target_runtime_environment_6651", "Specify a set of bundled library declaration files that describe the target runtime environment."),
          Print_the_names_of_emitted_files_after_a_compilation: b(6652, 3, "Print_the_names_of_emitted_files_after_a_compilation_6652", "Print the names of emitted files after a compilation."),
          Print_all_of_the_files_read_during_the_compilation: b(6653, 3, "Print_all_of_the_files_read_during_the_compilation_6653", "Print all of the files read during the compilation."),
          Set_the_language_of_the_messaging_from_TypeScript_This_does_not_affect_emit: b(6654, 3, "Set_the_language_of_the_messaging_from_TypeScript_This_does_not_affect_emit_6654", "Set the language of the messaging from TypeScript. This does not affect emit."),
          Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations: b(6655, 3, "Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations_6655", "Specify the location where debugger should locate map files instead of generated locations."),
          Specify_the_maximum_folder_depth_used_for_checking_JavaScript_files_from_node_modules_Only_applicable_with_allowJs: b(6656, 3, "Specify_the_maximum_folder_depth_used_for_checking_JavaScript_files_from_node_modules_Only_applicabl_6656", "Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'."),
          Specify_what_module_code_is_generated: b(6657, 3, "Specify_what_module_code_is_generated_6657", "Specify what module code is generated."),
          Specify_how_TypeScript_looks_up_a_file_from_a_given_module_specifier: b(6658, 3, "Specify_how_TypeScript_looks_up_a_file_from_a_given_module_specifier_6658", "Specify how TypeScript looks up a file from a given module specifier."),
          Set_the_newline_character_for_emitting_files: b(6659, 3, "Set_the_newline_character_for_emitting_files_6659", "Set the newline character for emitting files."),
          Disable_emitting_files_from_a_compilation: b(6660, 3, "Disable_emitting_files_from_a_compilation_6660", "Disable emitting files from a compilation."),
          Disable_generating_custom_helper_functions_like_extends_in_compiled_output: b(6661, 3, "Disable_generating_custom_helper_functions_like_extends_in_compiled_output_6661", "Disable generating custom helper functions like '__extends' in compiled output."),
          Disable_emitting_files_if_any_type_checking_errors_are_reported: b(6662, 3, "Disable_emitting_files_if_any_type_checking_errors_are_reported_6662", "Disable emitting files if any type checking errors are reported."),
          Disable_truncating_types_in_error_messages: b(6663, 3, "Disable_truncating_types_in_error_messages_6663", "Disable truncating types in error messages."),
          Enable_error_reporting_for_fallthrough_cases_in_switch_statements: b(6664, 3, "Enable_error_reporting_for_fallthrough_cases_in_switch_statements_6664", "Enable error reporting for fallthrough cases in switch statements."),
          Enable_error_reporting_for_expressions_and_declarations_with_an_implied_any_type: b(6665, 3, "Enable_error_reporting_for_expressions_and_declarations_with_an_implied_any_type_6665", "Enable error reporting for expressions and declarations with an implied 'any' type."),
          Ensure_overriding_members_in_derived_classes_are_marked_with_an_override_modifier: b(6666, 3, "Ensure_overriding_members_in_derived_classes_are_marked_with_an_override_modifier_6666", "Ensure overriding members in derived classes are marked with an override modifier."),
          Enable_error_reporting_for_codepaths_that_do_not_explicitly_return_in_a_function: b(6667, 3, "Enable_error_reporting_for_codepaths_that_do_not_explicitly_return_in_a_function_6667", "Enable error reporting for codepaths that do not explicitly return in a function."),
          Enable_error_reporting_when_this_is_given_the_type_any: b(6668, 3, "Enable_error_reporting_when_this_is_given_the_type_any_6668", "Enable error reporting when 'this' is given the type 'any'."),
          Disable_adding_use_strict_directives_in_emitted_JavaScript_files: b(6669, 3, "Disable_adding_use_strict_directives_in_emitted_JavaScript_files_6669", "Disable adding 'use strict' directives in emitted JavaScript files."),
          Disable_including_any_library_files_including_the_default_lib_d_ts: b(6670, 3, "Disable_including_any_library_files_including_the_default_lib_d_ts_6670", "Disable including any library files, including the default lib.d.ts."),
          Enforces_using_indexed_accessors_for_keys_declared_using_an_indexed_type: b(6671, 3, "Enforces_using_indexed_accessors_for_keys_declared_using_an_indexed_type_6671", "Enforces using indexed accessors for keys declared using an indexed type."),
          Disallow_import_s_require_s_or_reference_s_from_expanding_the_number_of_files_TypeScript_should_add_to_a_project: b(6672, 3, "Disallow_import_s_require_s_or_reference_s_from_expanding_the_number_of_files_TypeScript_should_add__6672", "Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project."),
          Disable_strict_checking_of_generic_signatures_in_function_types: b(6673, 3, "Disable_strict_checking_of_generic_signatures_in_function_types_6673", "Disable strict checking of generic signatures in function types."),
          Add_undefined_to_a_type_when_accessed_using_an_index: b(6674, 3, "Add_undefined_to_a_type_when_accessed_using_an_index_6674", "Add 'undefined' to a type when accessed using an index."),
          Enable_error_reporting_when_local_variables_aren_t_read: b(6675, 3, "Enable_error_reporting_when_local_variables_aren_t_read_6675", "Enable error reporting when local variables aren't read."),
          Raise_an_error_when_a_function_parameter_isn_t_read: b(6676, 3, "Raise_an_error_when_a_function_parameter_isn_t_read_6676", "Raise an error when a function parameter isn't read."),
          Deprecated_setting_Use_outFile_instead: b(6677, 3, "Deprecated_setting_Use_outFile_instead_6677", "Deprecated setting. Use 'outFile' instead."),
          Specify_an_output_folder_for_all_emitted_files: b(6678, 3, "Specify_an_output_folder_for_all_emitted_files_6678", "Specify an output folder for all emitted files."),
          Specify_a_file_that_bundles_all_outputs_into_one_JavaScript_file_If_declaration_is_true_also_designates_a_file_that_bundles_all_d_ts_output: b(6679, 3, "Specify_a_file_that_bundles_all_outputs_into_one_JavaScript_file_If_declaration_is_true_also_designa_6679", "Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output."),
          Specify_a_set_of_entries_that_re_map_imports_to_additional_lookup_locations: b(6680, 3, "Specify_a_set_of_entries_that_re_map_imports_to_additional_lookup_locations_6680", "Specify a set of entries that re-map imports to additional lookup locations."),
          Specify_a_list_of_language_service_plugins_to_include: b(6681, 3, "Specify_a_list_of_language_service_plugins_to_include_6681", "Specify a list of language service plugins to include."),
          Disable_erasing_const_enum_declarations_in_generated_code: b(6682, 3, "Disable_erasing_const_enum_declarations_in_generated_code_6682", "Disable erasing 'const enum' declarations in generated code."),
          Disable_resolving_symlinks_to_their_realpath_This_correlates_to_the_same_flag_in_node: b(6683, 3, "Disable_resolving_symlinks_to_their_realpath_This_correlates_to_the_same_flag_in_node_6683", "Disable resolving symlinks to their realpath. This correlates to the same flag in node."),
          Disable_wiping_the_console_in_watch_mode: b(6684, 3, "Disable_wiping_the_console_in_watch_mode_6684", "Disable wiping the console in watch mode."),
          Enable_color_and_formatting_in_TypeScript_s_output_to_make_compiler_errors_easier_to_read: b(6685, 3, "Enable_color_and_formatting_in_TypeScript_s_output_to_make_compiler_errors_easier_to_read_6685", "Enable color and formatting in TypeScript's output to make compiler errors easier to read."),
          Specify_the_object_invoked_for_createElement_This_only_applies_when_targeting_react_JSX_emit: b(6686, 3, "Specify_the_object_invoked_for_createElement_This_only_applies_when_targeting_react_JSX_emit_6686", "Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit."),
          Specify_an_array_of_objects_that_specify_paths_for_projects_Used_in_project_references: b(6687, 3, "Specify_an_array_of_objects_that_specify_paths_for_projects_Used_in_project_references_6687", "Specify an array of objects that specify paths for projects. Used in project references."),
          Disable_emitting_comments: b(6688, 3, "Disable_emitting_comments_6688", "Disable emitting comments."),
          Enable_importing_json_files: b(6689, 3, "Enable_importing_json_files_6689", "Enable importing .json files."),
          Specify_the_root_folder_within_your_source_files: b(6690, 3, "Specify_the_root_folder_within_your_source_files_6690", "Specify the root folder within your source files."),
          Allow_multiple_folders_to_be_treated_as_one_when_resolving_modules: b(6691, 3, "Allow_multiple_folders_to_be_treated_as_one_when_resolving_modules_6691", "Allow multiple folders to be treated as one when resolving modules."),
          Skip_type_checking_d_ts_files_that_are_included_with_TypeScript: b(6692, 3, "Skip_type_checking_d_ts_files_that_are_included_with_TypeScript_6692", "Skip type checking .d.ts files that are included with TypeScript."),
          Skip_type_checking_all_d_ts_files: b(6693, 3, "Skip_type_checking_all_d_ts_files_6693", "Skip type checking all .d.ts files."),
          Create_source_map_files_for_emitted_JavaScript_files: b(6694, 3, "Create_source_map_files_for_emitted_JavaScript_files_6694", "Create source map files for emitted JavaScript files."),
          Specify_the_root_path_for_debuggers_to_find_the_reference_source_code: b(6695, 3, "Specify_the_root_path_for_debuggers_to_find_the_reference_source_code_6695", "Specify the root path for debuggers to find the reference source code."),
          Check_that_the_arguments_for_bind_call_and_apply_methods_match_the_original_function: b(6697, 3, "Check_that_the_arguments_for_bind_call_and_apply_methods_match_the_original_function_6697", "Check that the arguments for 'bind', 'call', and 'apply' methods match the original function."),
          When_assigning_functions_check_to_ensure_parameters_and_the_return_values_are_subtype_compatible: b(6698, 3, "When_assigning_functions_check_to_ensure_parameters_and_the_return_values_are_subtype_compatible_6698", "When assigning functions, check to ensure parameters and the return values are subtype-compatible."),
          When_type_checking_take_into_account_null_and_undefined: b(6699, 3, "When_type_checking_take_into_account_null_and_undefined_6699", "When type checking, take into account 'null' and 'undefined'."),
          Check_for_class_properties_that_are_declared_but_not_set_in_the_constructor: b(6700, 3, "Check_for_class_properties_that_are_declared_but_not_set_in_the_constructor_6700", "Check for class properties that are declared but not set in the constructor."),
          Disable_emitting_declarations_that_have_internal_in_their_JSDoc_comments: b(6701, 3, "Disable_emitting_declarations_that_have_internal_in_their_JSDoc_comments_6701", "Disable emitting declarations that have '@internal' in their JSDoc comments."),
          Disable_reporting_of_excess_property_errors_during_the_creation_of_object_literals: b(6702, 3, "Disable_reporting_of_excess_property_errors_during_the_creation_of_object_literals_6702", "Disable reporting of excess property errors during the creation of object literals."),
          Suppress_noImplicitAny_errors_when_indexing_objects_that_lack_index_signatures: b(6703, 3, "Suppress_noImplicitAny_errors_when_indexing_objects_that_lack_index_signatures_6703", "Suppress 'noImplicitAny' errors when indexing objects that lack index signatures."),
          Synchronously_call_callbacks_and_update_the_state_of_directory_watchers_on_platforms_that_don_t_support_recursive_watching_natively: b(6704, 3, "Synchronously_call_callbacks_and_update_the_state_of_directory_watchers_on_platforms_that_don_t_supp_6704", "Synchronously call callbacks and update the state of directory watchers on platforms that don`t support recursive watching natively."),
          Set_the_JavaScript_language_version_for_emitted_JavaScript_and_include_compatible_library_declarations: b(6705, 3, "Set_the_JavaScript_language_version_for_emitted_JavaScript_and_include_compatible_library_declaratio_6705", "Set the JavaScript language version for emitted JavaScript and include compatible library declarations."),
          Log_paths_used_during_the_moduleResolution_process: b(6706, 3, "Log_paths_used_during_the_moduleResolution_process_6706", "Log paths used during the 'moduleResolution' process."),
          Specify_the_path_to_tsbuildinfo_incremental_compilation_file: b(6707, 3, "Specify_the_path_to_tsbuildinfo_incremental_compilation_file_6707", "Specify the path to .tsbuildinfo incremental compilation file."),
          Specify_options_for_automatic_acquisition_of_declaration_files: b(6709, 3, "Specify_options_for_automatic_acquisition_of_declaration_files_6709", "Specify options for automatic acquisition of declaration files."),
          Specify_multiple_folders_that_act_like_Slashnode_modules_Slash_types: b(6710, 3, "Specify_multiple_folders_that_act_like_Slashnode_modules_Slash_types_6710", "Specify multiple folders that act like './node_modules/@types'."),
          Specify_type_package_names_to_be_included_without_being_referenced_in_a_source_file: b(6711, 3, "Specify_type_package_names_to_be_included_without_being_referenced_in_a_source_file_6711", "Specify type package names to be included without being referenced in a source file."),
          Emit_ECMAScript_standard_compliant_class_fields: b(6712, 3, "Emit_ECMAScript_standard_compliant_class_fields_6712", "Emit ECMAScript-standard-compliant class fields."),
          Enable_verbose_logging: b(6713, 3, "Enable_verbose_logging_6713", "Enable verbose logging."),
          Specify_how_directories_are_watched_on_systems_that_lack_recursive_file_watching_functionality: b(6714, 3, "Specify_how_directories_are_watched_on_systems_that_lack_recursive_file_watching_functionality_6714", "Specify how directories are watched on systems that lack recursive file-watching functionality."),
          Specify_how_the_TypeScript_watch_mode_works: b(6715, 3, "Specify_how_the_TypeScript_watch_mode_works_6715", "Specify how the TypeScript watch mode works."),
          Require_undeclared_properties_from_index_signatures_to_use_element_accesses: b(6717, 3, "Require_undeclared_properties_from_index_signatures_to_use_element_accesses_6717", "Require undeclared properties from index signatures to use element accesses."),
          Specify_emit_Slashchecking_behavior_for_imports_that_are_only_used_for_types: b(6718, 3, "Specify_emit_Slashchecking_behavior_for_imports_that_are_only_used_for_types_6718", "Specify emit/checking behavior for imports that are only used for types."),
          Default_catch_clause_variables_as_unknown_instead_of_any: b(6803, 3, "Default_catch_clause_variables_as_unknown_instead_of_any_6803", "Default catch clause variables as 'unknown' instead of 'any'."),
          Do_not_transform_or_elide_any_imports_or_exports_not_marked_as_type_only_ensuring_they_are_written_in_the_output_file_s_format_based_on_the_module_setting: b(6804, 3, "Do_not_transform_or_elide_any_imports_or_exports_not_marked_as_type_only_ensuring_they_are_written_i_6804", "Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting."),
          one_of_Colon: b(6900, 3, "one_of_Colon_6900", "one of:"),
          one_or_more_Colon: b(6901, 3, "one_or_more_Colon_6901", "one or more:"),
          type_Colon: b(6902, 3, "type_Colon_6902", "type:"),
          default_Colon: b(6903, 3, "default_Colon_6903", "default:"),
          module_system_or_esModuleInterop: b(6904, 3, "module_system_or_esModuleInterop_6904", 'module === "system" or esModuleInterop'),
          false_unless_strict_is_set: b(6905, 3, "false_unless_strict_is_set_6905", "`false`, unless `strict` is set"),
          false_unless_composite_is_set: b(6906, 3, "false_unless_composite_is_set_6906", "`false`, unless `composite` is set"),
          node_modules_bower_components_jspm_packages_plus_the_value_of_outDir_if_one_is_specified: b(6907, 3, "node_modules_bower_components_jspm_packages_plus_the_value_of_outDir_if_one_is_specified_6907", '`["node_modules", "bower_components", "jspm_packages"]`, plus the value of `outDir` if one is specified.'),
          if_files_is_specified_otherwise_Asterisk_Asterisk_Slash_Asterisk: b(6908, 3, "if_files_is_specified_otherwise_Asterisk_Asterisk_Slash_Asterisk_6908", '`[]` if `files` is specified, otherwise `["**/*"]`'),
          true_if_composite_false_otherwise: b(6909, 3, "true_if_composite_false_otherwise_6909", "`true` if `composite`, `false` otherwise"),
          module_AMD_or_UMD_or_System_or_ES6_then_Classic_Otherwise_Node: b(69010, 3, "module_AMD_or_UMD_or_System_or_ES6_then_Classic_Otherwise_Node_69010", "module === `AMD` or `UMD` or `System` or `ES6`, then `Classic`, Otherwise `Node`"),
          Computed_from_the_list_of_input_files: b(6911, 3, "Computed_from_the_list_of_input_files_6911", "Computed from the list of input files"),
          Platform_specific: b(6912, 3, "Platform_specific_6912", "Platform specific"),
          You_can_learn_about_all_of_the_compiler_options_at_0: b(6913, 3, "You_can_learn_about_all_of_the_compiler_options_at_0_6913", "You can learn about all of the compiler options at {0}"),
          Including_watch_w_will_start_watching_the_current_project_for_the_file_changes_Once_set_you_can_config_watch_mode_with_Colon: b(6914, 3, "Including_watch_w_will_start_watching_the_current_project_for_the_file_changes_Once_set_you_can_conf_6914", "Including --watch, -w will start watching the current project for the file changes. Once set, you can config watch mode with:"),
          Using_build_b_will_make_tsc_behave_more_like_a_build_orchestrator_than_a_compiler_This_is_used_to_trigger_building_composite_projects_which_you_can_learn_more_about_at_0: b(6915, 3, "Using_build_b_will_make_tsc_behave_more_like_a_build_orchestrator_than_a_compiler_This_is_used_to_tr_6915", "Using --build, -b will make tsc behave more like a build orchestrator than a compiler. This is used to trigger building composite projects which you can learn more about at {0}"),
          COMMON_COMMANDS: b(6916, 3, "COMMON_COMMANDS_6916", "COMMON COMMANDS"),
          ALL_COMPILER_OPTIONS: b(6917, 3, "ALL_COMPILER_OPTIONS_6917", "ALL COMPILER OPTIONS"),
          WATCH_OPTIONS: b(6918, 3, "WATCH_OPTIONS_6918", "WATCH OPTIONS"),
          BUILD_OPTIONS: b(6919, 3, "BUILD_OPTIONS_6919", "BUILD OPTIONS"),
          COMMON_COMPILER_OPTIONS: b(6920, 3, "COMMON_COMPILER_OPTIONS_6920", "COMMON COMPILER OPTIONS"),
          COMMAND_LINE_FLAGS: b(6921, 3, "COMMAND_LINE_FLAGS_6921", "COMMAND LINE FLAGS"),
          tsc_Colon_The_TypeScript_Compiler: b(6922, 3, "tsc_Colon_The_TypeScript_Compiler_6922", "tsc: The TypeScript Compiler"),
          Compiles_the_current_project_tsconfig_json_in_the_working_directory: b(6923, 3, "Compiles_the_current_project_tsconfig_json_in_the_working_directory_6923", "Compiles the current project (tsconfig.json in the working directory.)"),
          Ignoring_tsconfig_json_compiles_the_specified_files_with_default_compiler_options: b(6924, 3, "Ignoring_tsconfig_json_compiles_the_specified_files_with_default_compiler_options_6924", "Ignoring tsconfig.json, compiles the specified files with default compiler options."),
          Build_a_composite_project_in_the_working_directory: b(6925, 3, "Build_a_composite_project_in_the_working_directory_6925", "Build a composite project in the working directory."),
          Creates_a_tsconfig_json_with_the_recommended_settings_in_the_working_directory: b(6926, 3, "Creates_a_tsconfig_json_with_the_recommended_settings_in_the_working_directory_6926", "Creates a tsconfig.json with the recommended settings in the working directory."),
          Compiles_the_TypeScript_project_located_at_the_specified_path: b(6927, 3, "Compiles_the_TypeScript_project_located_at_the_specified_path_6927", "Compiles the TypeScript project located at the specified path."),
          An_expanded_version_of_this_information_showing_all_possible_compiler_options: b(6928, 3, "An_expanded_version_of_this_information_showing_all_possible_compiler_options_6928", "An expanded version of this information, showing all possible compiler options"),
          Compiles_the_current_project_with_additional_settings: b(6929, 3, "Compiles_the_current_project_with_additional_settings_6929", "Compiles the current project, with additional settings."),
          true_for_ES2022_and_above_including_ESNext: b(6930, 3, "true_for_ES2022_and_above_including_ESNext_6930", "`true` for ES2022 and above, including ESNext."),
          List_of_file_name_suffixes_to_search_when_resolving_a_module: b(6931, 1, "List_of_file_name_suffixes_to_search_when_resolving_a_module_6931", "List of file name suffixes to search when resolving a module."),
          Variable_0_implicitly_has_an_1_type: b(7005, 1, "Variable_0_implicitly_has_an_1_type_7005", "Variable '{0}' implicitly has an '{1}' type."),
          Parameter_0_implicitly_has_an_1_type: b(7006, 1, "Parameter_0_implicitly_has_an_1_type_7006", "Parameter '{0}' implicitly has an '{1}' type."),
          Member_0_implicitly_has_an_1_type: b(7008, 1, "Member_0_implicitly_has_an_1_type_7008", "Member '{0}' implicitly has an '{1}' type."),
          new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type: b(7009, 1, "new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type_7009", "'new' expression, whose target lacks a construct signature, implicitly has an 'any' type."),
          _0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type: b(7010, 1, "_0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type_7010", "'{0}', which lacks return-type annotation, implicitly has an '{1}' return type."),
          Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type: b(7011, 1, "Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type_7011", "Function expression, which lacks return-type annotation, implicitly has an '{0}' return type."),
          This_overload_implicitly_returns_the_type_0_because_it_lacks_a_return_type_annotation: b(7012, 1, "This_overload_implicitly_returns_the_type_0_because_it_lacks_a_return_type_annotation_7012", "This overload implicitly returns the type '{0}' because it lacks a return type annotation."),
          Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: b(7013, 1, "Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type_7013", "Construct signature, which lacks return-type annotation, implicitly has an 'any' return type."),
          Function_type_which_lacks_return_type_annotation_implicitly_has_an_0_return_type: b(7014, 1, "Function_type_which_lacks_return_type_annotation_implicitly_has_an_0_return_type_7014", "Function type, which lacks return-type annotation, implicitly has an '{0}' return type."),
          Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number: b(7015, 1, "Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number_7015", "Element implicitly has an 'any' type because index expression is not of type 'number'."),
          Could_not_find_a_declaration_file_for_module_0_1_implicitly_has_an_any_type: b(7016, 1, "Could_not_find_a_declaration_file_for_module_0_1_implicitly_has_an_any_type_7016", "Could not find a declaration file for module '{0}'. '{1}' implicitly has an 'any' type."),
          Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature: b(7017, 1, "Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature_7017", "Element implicitly has an 'any' type because type '{0}' has no index signature."),
          Object_literal_s_property_0_implicitly_has_an_1_type: b(7018, 1, "Object_literal_s_property_0_implicitly_has_an_1_type_7018", "Object literal's property '{0}' implicitly has an '{1}' type."),
          Rest_parameter_0_implicitly_has_an_any_type: b(7019, 1, "Rest_parameter_0_implicitly_has_an_any_type_7019", "Rest parameter '{0}' implicitly has an 'any[]' type."),
          Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: b(7020, 1, "Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type_7020", "Call signature, which lacks return-type annotation, implicitly has an 'any' return type."),
          _0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer: b(7022, 1, "_0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or__7022", "'{0}' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer."),
          _0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: b(7023, 1, "_0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_reference_7023", "'{0}' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions."),
          Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: b(7024, 1, "Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_ref_7024", "Function implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions."),
          Generator_implicitly_has_yield_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_type_annotation: b(7025, 1, "Generator_implicitly_has_yield_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_retu_7025", "Generator implicitly has yield type '{0}' because it does not yield any values. Consider supplying a return type annotation."),
          JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists: b(7026, 1, "JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists_7026", "JSX element implicitly has type 'any' because no interface 'JSX.{0}' exists."),
          Unreachable_code_detected: b(
            7027,
            1,
            "Unreachable_code_detected_7027",
            "Unreachable code detected.",
            /*reportsUnnecessary*/
            !0
          ),
          Unused_label: b(
            7028,
            1,
            "Unused_label_7028",
            "Unused label.",
            /*reportsUnnecessary*/
            !0
          ),
          Fallthrough_case_in_switch: b(7029, 1, "Fallthrough_case_in_switch_7029", "Fallthrough case in switch."),
          Not_all_code_paths_return_a_value: b(7030, 1, "Not_all_code_paths_return_a_value_7030", "Not all code paths return a value."),
          Binding_element_0_implicitly_has_an_1_type: b(7031, 1, "Binding_element_0_implicitly_has_an_1_type_7031", "Binding element '{0}' implicitly has an '{1}' type."),
          Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_parameter_type_annotation: b(7032, 1, "Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_parameter_type_annotation_7032", "Property '{0}' implicitly has type 'any', because its set accessor lacks a parameter type annotation."),
          Property_0_implicitly_has_type_any_because_its_get_accessor_lacks_a_return_type_annotation: b(7033, 1, "Property_0_implicitly_has_type_any_because_its_get_accessor_lacks_a_return_type_annotation_7033", "Property '{0}' implicitly has type 'any', because its get accessor lacks a return type annotation."),
          Variable_0_implicitly_has_type_1_in_some_locations_where_its_type_cannot_be_determined: b(7034, 1, "Variable_0_implicitly_has_type_1_in_some_locations_where_its_type_cannot_be_determined_7034", "Variable '{0}' implicitly has type '{1}' in some locations where its type cannot be determined."),
          Try_npm_i_save_dev_types_Slash_1_if_it_exists_or_add_a_new_declaration_d_ts_file_containing_declare_module_0: b(7035, 1, "Try_npm_i_save_dev_types_Slash_1_if_it_exists_or_add_a_new_declaration_d_ts_file_containing_declare__7035", "Try `npm i --save-dev @types/{1}` if it exists or add a new declaration (.d.ts) file containing `declare module '{0}';`"),
          Dynamic_import_s_specifier_must_be_of_type_string_but_here_has_type_0: b(7036, 1, "Dynamic_import_s_specifier_must_be_of_type_string_but_here_has_type_0_7036", "Dynamic import's specifier must be of type 'string', but here has type '{0}'."),
          Enables_emit_interoperability_between_CommonJS_and_ES_Modules_via_creation_of_namespace_objects_for_all_imports_Implies_allowSyntheticDefaultImports: b(7037, 3, "Enables_emit_interoperability_between_CommonJS_and_ES_Modules_via_creation_of_namespace_objects_for__7037", "Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'."),
          Type_originates_at_this_import_A_namespace_style_import_cannot_be_called_or_constructed_and_will_cause_a_failure_at_runtime_Consider_using_a_default_import_or_import_require_here_instead: b(7038, 3, "Type_originates_at_this_import_A_namespace_style_import_cannot_be_called_or_constructed_and_will_cau_7038", "Type originates at this import. A namespace-style import cannot be called or constructed, and will cause a failure at runtime. Consider using a default import or import require here instead."),
          Mapped_object_type_implicitly_has_an_any_template_type: b(7039, 1, "Mapped_object_type_implicitly_has_an_any_template_type_7039", "Mapped object type implicitly has an 'any' template type."),
          If_the_0_package_actually_exposes_this_module_consider_sending_a_pull_request_to_amend_https_Colon_Slash_Slashgithub_com_SlashDefinitelyTyped_SlashDefinitelyTyped_Slashtree_Slashmaster_Slashtypes_Slash_1: b(7040, 1, "If_the_0_package_actually_exposes_this_module_consider_sending_a_pull_request_to_amend_https_Colon_S_7040", "If the '{0}' package actually exposes this module, consider sending a pull request to amend 'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/{1}'"),
          The_containing_arrow_function_captures_the_global_value_of_this: b(7041, 1, "The_containing_arrow_function_captures_the_global_value_of_this_7041", "The containing arrow function captures the global value of 'this'."),
          Module_0_was_resolved_to_1_but_resolveJsonModule_is_not_used: b(7042, 1, "Module_0_was_resolved_to_1_but_resolveJsonModule_is_not_used_7042", "Module '{0}' was resolved to '{1}', but '--resolveJsonModule' is not used."),
          Variable_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage: b(7043, 2, "Variable_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage_7043", "Variable '{0}' implicitly has an '{1}' type, but a better type may be inferred from usage."),
          Parameter_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage: b(7044, 2, "Parameter_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage_7044", "Parameter '{0}' implicitly has an '{1}' type, but a better type may be inferred from usage."),
          Member_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage: b(7045, 2, "Member_0_implicitly_has_an_1_type_but_a_better_type_may_be_inferred_from_usage_7045", "Member '{0}' implicitly has an '{1}' type, but a better type may be inferred from usage."),
          Variable_0_implicitly_has_type_1_in_some_locations_but_a_better_type_may_be_inferred_from_usage: b(7046, 2, "Variable_0_implicitly_has_type_1_in_some_locations_but_a_better_type_may_be_inferred_from_usage_7046", "Variable '{0}' implicitly has type '{1}' in some locations, but a better type may be inferred from usage."),
          Rest_parameter_0_implicitly_has_an_any_type_but_a_better_type_may_be_inferred_from_usage: b(7047, 2, "Rest_parameter_0_implicitly_has_an_any_type_but_a_better_type_may_be_inferred_from_usage_7047", "Rest parameter '{0}' implicitly has an 'any[]' type, but a better type may be inferred from usage."),
          Property_0_implicitly_has_type_any_but_a_better_type_for_its_get_accessor_may_be_inferred_from_usage: b(7048, 2, "Property_0_implicitly_has_type_any_but_a_better_type_for_its_get_accessor_may_be_inferred_from_usage_7048", "Property '{0}' implicitly has type 'any', but a better type for its get accessor may be inferred from usage."),
          Property_0_implicitly_has_type_any_but_a_better_type_for_its_set_accessor_may_be_inferred_from_usage: b(7049, 2, "Property_0_implicitly_has_type_any_but_a_better_type_for_its_set_accessor_may_be_inferred_from_usage_7049", "Property '{0}' implicitly has type 'any', but a better type for its set accessor may be inferred from usage."),
          _0_implicitly_has_an_1_return_type_but_a_better_type_may_be_inferred_from_usage: b(7050, 2, "_0_implicitly_has_an_1_return_type_but_a_better_type_may_be_inferred_from_usage_7050", "'{0}' implicitly has an '{1}' return type, but a better type may be inferred from usage."),
          Parameter_has_a_name_but_no_type_Did_you_mean_0_Colon_1: b(7051, 1, "Parameter_has_a_name_but_no_type_Did_you_mean_0_Colon_1_7051", "Parameter has a name but no type. Did you mean '{0}: {1}'?"),
          Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature_Did_you_mean_to_call_1: b(7052, 1, "Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature_Did_you_mean_to_call_1_7052", "Element implicitly has an 'any' type because type '{0}' has no index signature. Did you mean to call '{1}'?"),
          Element_implicitly_has_an_any_type_because_expression_of_type_0_can_t_be_used_to_index_type_1: b(7053, 1, "Element_implicitly_has_an_any_type_because_expression_of_type_0_can_t_be_used_to_index_type_1_7053", "Element implicitly has an 'any' type because expression of type '{0}' can't be used to index type '{1}'."),
          No_index_signature_with_a_parameter_of_type_0_was_found_on_type_1: b(7054, 1, "No_index_signature_with_a_parameter_of_type_0_was_found_on_type_1_7054", "No index signature with a parameter of type '{0}' was found on type '{1}'."),
          _0_which_lacks_return_type_annotation_implicitly_has_an_1_yield_type: b(7055, 1, "_0_which_lacks_return_type_annotation_implicitly_has_an_1_yield_type_7055", "'{0}', which lacks return-type annotation, implicitly has an '{1}' yield type."),
          The_inferred_type_of_this_node_exceeds_the_maximum_length_the_compiler_will_serialize_An_explicit_type_annotation_is_needed: b(7056, 1, "The_inferred_type_of_this_node_exceeds_the_maximum_length_the_compiler_will_serialize_An_explicit_ty_7056", "The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed."),
          yield_expression_implicitly_results_in_an_any_type_because_its_containing_generator_lacks_a_return_type_annotation: b(7057, 1, "yield_expression_implicitly_results_in_an_any_type_because_its_containing_generator_lacks_a_return_t_7057", "'yield' expression implicitly results in an 'any' type because its containing generator lacks a return-type annotation."),
          If_the_0_package_actually_exposes_this_module_try_adding_a_new_declaration_d_ts_file_containing_declare_module_1: b(7058, 1, "If_the_0_package_actually_exposes_this_module_try_adding_a_new_declaration_d_ts_file_containing_decl_7058", "If the '{0}' package actually exposes this module, try adding a new declaration (.d.ts) file containing `declare module '{1}';`"),
          This_syntax_is_reserved_in_files_with_the_mts_or_cts_extension_Use_an_as_expression_instead: b(7059, 1, "This_syntax_is_reserved_in_files_with_the_mts_or_cts_extension_Use_an_as_expression_instead_7059", "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead."),
          This_syntax_is_reserved_in_files_with_the_mts_or_cts_extension_Add_a_trailing_comma_or_explicit_constraint: b(7060, 1, "This_syntax_is_reserved_in_files_with_the_mts_or_cts_extension_Add_a_trailing_comma_or_explicit_cons_7060", "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma or explicit constraint."),
          A_mapped_type_may_not_declare_properties_or_methods: b(7061, 1, "A_mapped_type_may_not_declare_properties_or_methods_7061", "A mapped type may not declare properties or methods."),
          You_cannot_rename_this_element: b(8e3, 1, "You_cannot_rename_this_element_8000", "You cannot rename this element."),
          You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library: b(8001, 1, "You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library_8001", "You cannot rename elements that are defined in the standard TypeScript library."),
          import_can_only_be_used_in_TypeScript_files: b(8002, 1, "import_can_only_be_used_in_TypeScript_files_8002", "'import ... =' can only be used in TypeScript files."),
          export_can_only_be_used_in_TypeScript_files: b(8003, 1, "export_can_only_be_used_in_TypeScript_files_8003", "'export =' can only be used in TypeScript files."),
          Type_parameter_declarations_can_only_be_used_in_TypeScript_files: b(8004, 1, "Type_parameter_declarations_can_only_be_used_in_TypeScript_files_8004", "Type parameter declarations can only be used in TypeScript files."),
          implements_clauses_can_only_be_used_in_TypeScript_files: b(8005, 1, "implements_clauses_can_only_be_used_in_TypeScript_files_8005", "'implements' clauses can only be used in TypeScript files."),
          _0_declarations_can_only_be_used_in_TypeScript_files: b(8006, 1, "_0_declarations_can_only_be_used_in_TypeScript_files_8006", "'{0}' declarations can only be used in TypeScript files."),
          Type_aliases_can_only_be_used_in_TypeScript_files: b(8008, 1, "Type_aliases_can_only_be_used_in_TypeScript_files_8008", "Type aliases can only be used in TypeScript files."),
          The_0_modifier_can_only_be_used_in_TypeScript_files: b(8009, 1, "The_0_modifier_can_only_be_used_in_TypeScript_files_8009", "The '{0}' modifier can only be used in TypeScript files."),
          Type_annotations_can_only_be_used_in_TypeScript_files: b(8010, 1, "Type_annotations_can_only_be_used_in_TypeScript_files_8010", "Type annotations can only be used in TypeScript files."),
          Type_arguments_can_only_be_used_in_TypeScript_files: b(8011, 1, "Type_arguments_can_only_be_used_in_TypeScript_files_8011", "Type arguments can only be used in TypeScript files."),
          Parameter_modifiers_can_only_be_used_in_TypeScript_files: b(8012, 1, "Parameter_modifiers_can_only_be_used_in_TypeScript_files_8012", "Parameter modifiers can only be used in TypeScript files."),
          Non_null_assertions_can_only_be_used_in_TypeScript_files: b(8013, 1, "Non_null_assertions_can_only_be_used_in_TypeScript_files_8013", "Non-null assertions can only be used in TypeScript files."),
          Type_assertion_expressions_can_only_be_used_in_TypeScript_files: b(8016, 1, "Type_assertion_expressions_can_only_be_used_in_TypeScript_files_8016", "Type assertion expressions can only be used in TypeScript files."),
          Signature_declarations_can_only_be_used_in_TypeScript_files: b(8017, 1, "Signature_declarations_can_only_be_used_in_TypeScript_files_8017", "Signature declarations can only be used in TypeScript files."),
          Report_errors_in_js_files: b(8019, 3, "Report_errors_in_js_files_8019", "Report errors in .js files."),
          JSDoc_types_can_only_be_used_inside_documentation_comments: b(8020, 1, "JSDoc_types_can_only_be_used_inside_documentation_comments_8020", "JSDoc types can only be used inside documentation comments."),
          JSDoc_typedef_tag_should_either_have_a_type_annotation_or_be_followed_by_property_or_member_tags: b(8021, 1, "JSDoc_typedef_tag_should_either_have_a_type_annotation_or_be_followed_by_property_or_member_tags_8021", "JSDoc '@typedef' tag should either have a type annotation or be followed by '@property' or '@member' tags."),
          JSDoc_0_is_not_attached_to_a_class: b(8022, 1, "JSDoc_0_is_not_attached_to_a_class_8022", "JSDoc '@{0}' is not attached to a class."),
          JSDoc_0_1_does_not_match_the_extends_2_clause: b(8023, 1, "JSDoc_0_1_does_not_match_the_extends_2_clause_8023", "JSDoc '@{0} {1}' does not match the 'extends {2}' clause."),
          JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name: b(8024, 1, "JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name_8024", "JSDoc '@param' tag has name '{0}', but there is no parameter with that name."),
          Class_declarations_cannot_have_more_than_one_augments_or_extends_tag: b(8025, 1, "Class_declarations_cannot_have_more_than_one_augments_or_extends_tag_8025", "Class declarations cannot have more than one '@augments' or '@extends' tag."),
          Expected_0_type_arguments_provide_these_with_an_extends_tag: b(8026, 1, "Expected_0_type_arguments_provide_these_with_an_extends_tag_8026", "Expected {0} type arguments; provide these with an '@extends' tag."),
          Expected_0_1_type_arguments_provide_these_with_an_extends_tag: b(8027, 1, "Expected_0_1_type_arguments_provide_these_with_an_extends_tag_8027", "Expected {0}-{1} type arguments; provide these with an '@extends' tag."),
          JSDoc_may_only_appear_in_the_last_parameter_of_a_signature: b(8028, 1, "JSDoc_may_only_appear_in_the_last_parameter_of_a_signature_8028", "JSDoc '...' may only appear in the last parameter of a signature."),
          JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name_It_would_match_arguments_if_it_had_an_array_type: b(8029, 1, "JSDoc_param_tag_has_name_0_but_there_is_no_parameter_with_that_name_It_would_match_arguments_if_it_h_8029", "JSDoc '@param' tag has name '{0}', but there is no parameter with that name. It would match 'arguments' if it had an array type."),
          The_type_of_a_function_declaration_must_match_the_function_s_signature: b(8030, 1, "The_type_of_a_function_declaration_must_match_the_function_s_signature_8030", "The type of a function declaration must match the function's signature."),
          You_cannot_rename_a_module_via_a_global_import: b(8031, 1, "You_cannot_rename_a_module_via_a_global_import_8031", "You cannot rename a module via a global import."),
          Qualified_name_0_is_not_allowed_without_a_leading_param_object_1: b(8032, 1, "Qualified_name_0_is_not_allowed_without_a_leading_param_object_1_8032", "Qualified name '{0}' is not allowed without a leading '@param {object} {1}'."),
          A_JSDoc_typedef_comment_may_not_contain_multiple_type_tags: b(8033, 1, "A_JSDoc_typedef_comment_may_not_contain_multiple_type_tags_8033", "A JSDoc '@typedef' comment may not contain multiple '@type' tags."),
          The_tag_was_first_specified_here: b(8034, 1, "The_tag_was_first_specified_here_8034", "The tag was first specified here."),
          You_cannot_rename_elements_that_are_defined_in_a_node_modules_folder: b(8035, 1, "You_cannot_rename_elements_that_are_defined_in_a_node_modules_folder_8035", "You cannot rename elements that are defined in a 'node_modules' folder."),
          You_cannot_rename_elements_that_are_defined_in_another_node_modules_folder: b(8036, 1, "You_cannot_rename_elements_that_are_defined_in_another_node_modules_folder_8036", "You cannot rename elements that are defined in another 'node_modules' folder."),
          Type_satisfaction_expressions_can_only_be_used_in_TypeScript_files: b(8037, 1, "Type_satisfaction_expressions_can_only_be_used_in_TypeScript_files_8037", "Type satisfaction expressions can only be used in TypeScript files."),
          Decorators_may_not_appear_after_export_or_export_default_if_they_also_appear_before_export: b(8038, 1, "Decorators_may_not_appear_after_export_or_export_default_if_they_also_appear_before_export_8038", "Decorators may not appear after 'export' or 'export default' if they also appear before 'export'."),
          A_JSDoc_template_tag_may_not_follow_a_typedef_callback_or_overload_tag: b(8039, 1, "A_JSDoc_template_tag_may_not_follow_a_typedef_callback_or_overload_tag_8039", "A JSDoc '@template' tag may not follow a '@typedef', '@callback', or '@overload' tag"),
          Declaration_emit_for_this_file_requires_using_private_name_0_An_explicit_type_annotation_may_unblock_declaration_emit: b(9005, 1, "Declaration_emit_for_this_file_requires_using_private_name_0_An_explicit_type_annotation_may_unblock_9005", "Declaration emit for this file requires using private name '{0}'. An explicit type annotation may unblock declaration emit."),
          Declaration_emit_for_this_file_requires_using_private_name_0_from_module_1_An_explicit_type_annotation_may_unblock_declaration_emit: b(9006, 1, "Declaration_emit_for_this_file_requires_using_private_name_0_from_module_1_An_explicit_type_annotati_9006", "Declaration emit for this file requires using private name '{0}' from module '{1}'. An explicit type annotation may unblock declaration emit."),
          JSX_attributes_must_only_be_assigned_a_non_empty_expression: b(17e3, 1, "JSX_attributes_must_only_be_assigned_a_non_empty_expression_17000", "JSX attributes must only be assigned a non-empty 'expression'."),
          JSX_elements_cannot_have_multiple_attributes_with_the_same_name: b(17001, 1, "JSX_elements_cannot_have_multiple_attributes_with_the_same_name_17001", "JSX elements cannot have multiple attributes with the same name."),
          Expected_corresponding_JSX_closing_tag_for_0: b(17002, 1, "Expected_corresponding_JSX_closing_tag_for_0_17002", "Expected corresponding JSX closing tag for '{0}'."),
          Cannot_use_JSX_unless_the_jsx_flag_is_provided: b(17004, 1, "Cannot_use_JSX_unless_the_jsx_flag_is_provided_17004", "Cannot use JSX unless the '--jsx' flag is provided."),
          A_constructor_cannot_contain_a_super_call_when_its_class_extends_null: b(17005, 1, "A_constructor_cannot_contain_a_super_call_when_its_class_extends_null_17005", "A constructor cannot contain a 'super' call when its class extends 'null'."),
          An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: b(17006, 1, "An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_ex_17006", "An unary expression with the '{0}' operator is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses."),
          A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: b(17007, 1, "A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Con_17007", "A type assertion expression is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses."),
          JSX_element_0_has_no_corresponding_closing_tag: b(17008, 1, "JSX_element_0_has_no_corresponding_closing_tag_17008", "JSX element '{0}' has no corresponding closing tag."),
          super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class: b(17009, 1, "super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class_17009", "'super' must be called before accessing 'this' in the constructor of a derived class."),
          Unknown_type_acquisition_option_0: b(17010, 1, "Unknown_type_acquisition_option_0_17010", "Unknown type acquisition option '{0}'."),
          super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class: b(17011, 1, "super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class_17011", "'super' must be called before accessing a property of 'super' in the constructor of a derived class."),
          _0_is_not_a_valid_meta_property_for_keyword_1_Did_you_mean_2: b(17012, 1, "_0_is_not_a_valid_meta_property_for_keyword_1_Did_you_mean_2_17012", "'{0}' is not a valid meta-property for keyword '{1}'. Did you mean '{2}'?"),
          Meta_property_0_is_only_allowed_in_the_body_of_a_function_declaration_function_expression_or_constructor: b(17013, 1, "Meta_property_0_is_only_allowed_in_the_body_of_a_function_declaration_function_expression_or_constru_17013", "Meta-property '{0}' is only allowed in the body of a function declaration, function expression, or constructor."),
          JSX_fragment_has_no_corresponding_closing_tag: b(17014, 1, "JSX_fragment_has_no_corresponding_closing_tag_17014", "JSX fragment has no corresponding closing tag."),
          Expected_corresponding_closing_tag_for_JSX_fragment: b(17015, 1, "Expected_corresponding_closing_tag_for_JSX_fragment_17015", "Expected corresponding closing tag for JSX fragment."),
          The_jsxFragmentFactory_compiler_option_must_be_provided_to_use_JSX_fragments_with_the_jsxFactory_compiler_option: b(17016, 1, "The_jsxFragmentFactory_compiler_option_must_be_provided_to_use_JSX_fragments_with_the_jsxFactory_com_17016", "The 'jsxFragmentFactory' compiler option must be provided to use JSX fragments with the 'jsxFactory' compiler option."),
          An_jsxFrag_pragma_is_required_when_using_an_jsx_pragma_with_JSX_fragments: b(17017, 1, "An_jsxFrag_pragma_is_required_when_using_an_jsx_pragma_with_JSX_fragments_17017", "An @jsxFrag pragma is required when using an @jsx pragma with JSX fragments."),
          Unknown_type_acquisition_option_0_Did_you_mean_1: b(17018, 1, "Unknown_type_acquisition_option_0_Did_you_mean_1_17018", "Unknown type acquisition option '{0}'. Did you mean '{1}'?"),
          _0_at_the_end_of_a_type_is_not_valid_TypeScript_syntax_Did_you_mean_to_write_1: b(17019, 1, "_0_at_the_end_of_a_type_is_not_valid_TypeScript_syntax_Did_you_mean_to_write_1_17019", "'{0}' at the end of a type is not valid TypeScript syntax. Did you mean to write '{1}'?"),
          _0_at_the_start_of_a_type_is_not_valid_TypeScript_syntax_Did_you_mean_to_write_1: b(17020, 1, "_0_at_the_start_of_a_type_is_not_valid_TypeScript_syntax_Did_you_mean_to_write_1_17020", "'{0}' at the start of a type is not valid TypeScript syntax. Did you mean to write '{1}'?"),
          Unicode_escape_sequence_cannot_appear_here: b(17021, 1, "Unicode_escape_sequence_cannot_appear_here_17021", "Unicode escape sequence cannot appear here."),
          Circularity_detected_while_resolving_configuration_Colon_0: b(18e3, 1, "Circularity_detected_while_resolving_configuration_Colon_0_18000", "Circularity detected while resolving configuration: {0}"),
          The_files_list_in_config_file_0_is_empty: b(18002, 1, "The_files_list_in_config_file_0_is_empty_18002", "The 'files' list in config file '{0}' is empty."),
          No_inputs_were_found_in_config_file_0_Specified_include_paths_were_1_and_exclude_paths_were_2: b(18003, 1, "No_inputs_were_found_in_config_file_0_Specified_include_paths_were_1_and_exclude_paths_were_2_18003", "No inputs were found in config file '{0}'. Specified 'include' paths were '{1}' and 'exclude' paths were '{2}'."),
          File_is_a_CommonJS_module_it_may_be_converted_to_an_ES_module: b(80001, 2, "File_is_a_CommonJS_module_it_may_be_converted_to_an_ES_module_80001", "File is a CommonJS module; it may be converted to an ES module."),
          This_constructor_function_may_be_converted_to_a_class_declaration: b(80002, 2, "This_constructor_function_may_be_converted_to_a_class_declaration_80002", "This constructor function may be converted to a class declaration."),
          Import_may_be_converted_to_a_default_import: b(80003, 2, "Import_may_be_converted_to_a_default_import_80003", "Import may be converted to a default import."),
          JSDoc_types_may_be_moved_to_TypeScript_types: b(80004, 2, "JSDoc_types_may_be_moved_to_TypeScript_types_80004", "JSDoc types may be moved to TypeScript types."),
          require_call_may_be_converted_to_an_import: b(80005, 2, "require_call_may_be_converted_to_an_import_80005", "'require' call may be converted to an import."),
          This_may_be_converted_to_an_async_function: b(80006, 2, "This_may_be_converted_to_an_async_function_80006", "This may be converted to an async function."),
          await_has_no_effect_on_the_type_of_this_expression: b(80007, 2, "await_has_no_effect_on_the_type_of_this_expression_80007", "'await' has no effect on the type of this expression."),
          Numeric_literals_with_absolute_values_equal_to_2_53_or_greater_are_too_large_to_be_represented_accurately_as_integers: b(80008, 2, "Numeric_literals_with_absolute_values_equal_to_2_53_or_greater_are_too_large_to_be_represented_accur_80008", "Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers."),
          JSDoc_typedef_may_be_converted_to_TypeScript_type: b(80009, 2, "JSDoc_typedef_may_be_converted_to_TypeScript_type_80009", "JSDoc typedef may be converted to TypeScript type."),
          JSDoc_typedefs_may_be_converted_to_TypeScript_types: b(80010, 2, "JSDoc_typedefs_may_be_converted_to_TypeScript_types_80010", "JSDoc typedefs may be converted to TypeScript types."),
          Add_missing_super_call: b(90001, 3, "Add_missing_super_call_90001", "Add missing 'super()' call"),
          Make_super_call_the_first_statement_in_the_constructor: b(90002, 3, "Make_super_call_the_first_statement_in_the_constructor_90002", "Make 'super()' call the first statement in the constructor"),
          Change_extends_to_implements: b(90003, 3, "Change_extends_to_implements_90003", "Change 'extends' to 'implements'"),
          Remove_unused_declaration_for_Colon_0: b(90004, 3, "Remove_unused_declaration_for_Colon_0_90004", "Remove unused declaration for: '{0}'"),
          Remove_import_from_0: b(90005, 3, "Remove_import_from_0_90005", "Remove import from '{0}'"),
          Implement_interface_0: b(90006, 3, "Implement_interface_0_90006", "Implement interface '{0}'"),
          Implement_inherited_abstract_class: b(90007, 3, "Implement_inherited_abstract_class_90007", "Implement inherited abstract class"),
          Add_0_to_unresolved_variable: b(90008, 3, "Add_0_to_unresolved_variable_90008", "Add '{0}.' to unresolved variable"),
          Remove_variable_statement: b(90010, 3, "Remove_variable_statement_90010", "Remove variable statement"),
          Remove_template_tag: b(90011, 3, "Remove_template_tag_90011", "Remove template tag"),
          Remove_type_parameters: b(90012, 3, "Remove_type_parameters_90012", "Remove type parameters"),
          Import_0_from_1: b(90013, 3, "Import_0_from_1_90013", `Import '{0}' from "{1}"`),
          Change_0_to_1: b(90014, 3, "Change_0_to_1_90014", "Change '{0}' to '{1}'"),
          Declare_property_0: b(90016, 3, "Declare_property_0_90016", "Declare property '{0}'"),
          Add_index_signature_for_property_0: b(90017, 3, "Add_index_signature_for_property_0_90017", "Add index signature for property '{0}'"),
          Disable_checking_for_this_file: b(90018, 3, "Disable_checking_for_this_file_90018", "Disable checking for this file"),
          Ignore_this_error_message: b(90019, 3, "Ignore_this_error_message_90019", "Ignore this error message"),
          Initialize_property_0_in_the_constructor: b(90020, 3, "Initialize_property_0_in_the_constructor_90020", "Initialize property '{0}' in the constructor"),
          Initialize_static_property_0: b(90021, 3, "Initialize_static_property_0_90021", "Initialize static property '{0}'"),
          Change_spelling_to_0: b(90022, 3, "Change_spelling_to_0_90022", "Change spelling to '{0}'"),
          Declare_method_0: b(90023, 3, "Declare_method_0_90023", "Declare method '{0}'"),
          Declare_static_method_0: b(90024, 3, "Declare_static_method_0_90024", "Declare static method '{0}'"),
          Prefix_0_with_an_underscore: b(90025, 3, "Prefix_0_with_an_underscore_90025", "Prefix '{0}' with an underscore"),
          Rewrite_as_the_indexed_access_type_0: b(90026, 3, "Rewrite_as_the_indexed_access_type_0_90026", "Rewrite as the indexed access type '{0}'"),
          Declare_static_property_0: b(90027, 3, "Declare_static_property_0_90027", "Declare static property '{0}'"),
          Call_decorator_expression: b(90028, 3, "Call_decorator_expression_90028", "Call decorator expression"),
          Add_async_modifier_to_containing_function: b(90029, 3, "Add_async_modifier_to_containing_function_90029", "Add async modifier to containing function"),
          Replace_infer_0_with_unknown: b(90030, 3, "Replace_infer_0_with_unknown_90030", "Replace 'infer {0}' with 'unknown'"),
          Replace_all_unused_infer_with_unknown: b(90031, 3, "Replace_all_unused_infer_with_unknown_90031", "Replace all unused 'infer' with 'unknown'"),
          Add_parameter_name: b(90034, 3, "Add_parameter_name_90034", "Add parameter name"),
          Declare_private_property_0: b(90035, 3, "Declare_private_property_0_90035", "Declare private property '{0}'"),
          Replace_0_with_Promise_1: b(90036, 3, "Replace_0_with_Promise_1_90036", "Replace '{0}' with 'Promise<{1}>'"),
          Fix_all_incorrect_return_type_of_an_async_functions: b(90037, 3, "Fix_all_incorrect_return_type_of_an_async_functions_90037", "Fix all incorrect return type of an async functions"),
          Declare_private_method_0: b(90038, 3, "Declare_private_method_0_90038", "Declare private method '{0}'"),
          Remove_unused_destructuring_declaration: b(90039, 3, "Remove_unused_destructuring_declaration_90039", "Remove unused destructuring declaration"),
          Remove_unused_declarations_for_Colon_0: b(90041, 3, "Remove_unused_declarations_for_Colon_0_90041", "Remove unused declarations for: '{0}'"),
          Declare_a_private_field_named_0: b(90053, 3, "Declare_a_private_field_named_0_90053", "Declare a private field named '{0}'."),
          Includes_imports_of_types_referenced_by_0: b(90054, 3, "Includes_imports_of_types_referenced_by_0_90054", "Includes imports of types referenced by '{0}'"),
          Remove_type_from_import_declaration_from_0: b(90055, 3, "Remove_type_from_import_declaration_from_0_90055", `Remove 'type' from import declaration from "{0}"`),
          Remove_type_from_import_of_0_from_1: b(90056, 3, "Remove_type_from_import_of_0_from_1_90056", `Remove 'type' from import of '{0}' from "{1}"`),
          Add_import_from_0: b(90057, 3, "Add_import_from_0_90057", 'Add import from "{0}"'),
          Update_import_from_0: b(90058, 3, "Update_import_from_0_90058", 'Update import from "{0}"'),
          Export_0_from_module_1: b(90059, 3, "Export_0_from_module_1_90059", "Export '{0}' from module '{1}'"),
          Export_all_referenced_locals: b(90060, 3, "Export_all_referenced_locals_90060", "Export all referenced locals"),
          Convert_function_to_an_ES2015_class: b(95001, 3, "Convert_function_to_an_ES2015_class_95001", "Convert function to an ES2015 class"),
          Convert_0_to_1_in_0: b(95003, 3, "Convert_0_to_1_in_0_95003", "Convert '{0}' to '{1} in {0}'"),
          Extract_to_0_in_1: b(95004, 3, "Extract_to_0_in_1_95004", "Extract to {0} in {1}"),
          Extract_function: b(95005, 3, "Extract_function_95005", "Extract function"),
          Extract_constant: b(95006, 3, "Extract_constant_95006", "Extract constant"),
          Extract_to_0_in_enclosing_scope: b(95007, 3, "Extract_to_0_in_enclosing_scope_95007", "Extract to {0} in enclosing scope"),
          Extract_to_0_in_1_scope: b(95008, 3, "Extract_to_0_in_1_scope_95008", "Extract to {0} in {1} scope"),
          Annotate_with_type_from_JSDoc: b(95009, 3, "Annotate_with_type_from_JSDoc_95009", "Annotate with type from JSDoc"),
          Infer_type_of_0_from_usage: b(95011, 3, "Infer_type_of_0_from_usage_95011", "Infer type of '{0}' from usage"),
          Infer_parameter_types_from_usage: b(95012, 3, "Infer_parameter_types_from_usage_95012", "Infer parameter types from usage"),
          Convert_to_default_import: b(95013, 3, "Convert_to_default_import_95013", "Convert to default import"),
          Install_0: b(95014, 3, "Install_0_95014", "Install '{0}'"),
          Replace_import_with_0: b(95015, 3, "Replace_import_with_0_95015", "Replace import with '{0}'."),
          Use_synthetic_default_member: b(95016, 3, "Use_synthetic_default_member_95016", "Use synthetic 'default' member."),
          Convert_to_ES_module: b(95017, 3, "Convert_to_ES_module_95017", "Convert to ES module"),
          Add_undefined_type_to_property_0: b(95018, 3, "Add_undefined_type_to_property_0_95018", "Add 'undefined' type to property '{0}'"),
          Add_initializer_to_property_0: b(95019, 3, "Add_initializer_to_property_0_95019", "Add initializer to property '{0}'"),
          Add_definite_assignment_assertion_to_property_0: b(95020, 3, "Add_definite_assignment_assertion_to_property_0_95020", "Add definite assignment assertion to property '{0}'"),
          Convert_all_type_literals_to_mapped_type: b(95021, 3, "Convert_all_type_literals_to_mapped_type_95021", "Convert all type literals to mapped type"),
          Add_all_missing_members: b(95022, 3, "Add_all_missing_members_95022", "Add all missing members"),
          Infer_all_types_from_usage: b(95023, 3, "Infer_all_types_from_usage_95023", "Infer all types from usage"),
          Delete_all_unused_declarations: b(95024, 3, "Delete_all_unused_declarations_95024", "Delete all unused declarations"),
          Prefix_all_unused_declarations_with_where_possible: b(95025, 3, "Prefix_all_unused_declarations_with_where_possible_95025", "Prefix all unused declarations with '_' where possible"),
          Fix_all_detected_spelling_errors: b(95026, 3, "Fix_all_detected_spelling_errors_95026", "Fix all detected spelling errors"),
          Add_initializers_to_all_uninitialized_properties: b(95027, 3, "Add_initializers_to_all_uninitialized_properties_95027", "Add initializers to all uninitialized properties"),
          Add_definite_assignment_assertions_to_all_uninitialized_properties: b(95028, 3, "Add_definite_assignment_assertions_to_all_uninitialized_properties_95028", "Add definite assignment assertions to all uninitialized properties"),
          Add_undefined_type_to_all_uninitialized_properties: b(95029, 3, "Add_undefined_type_to_all_uninitialized_properties_95029", "Add undefined type to all uninitialized properties"),
          Change_all_jsdoc_style_types_to_TypeScript: b(95030, 3, "Change_all_jsdoc_style_types_to_TypeScript_95030", "Change all jsdoc-style types to TypeScript"),
          Change_all_jsdoc_style_types_to_TypeScript_and_add_undefined_to_nullable_types: b(95031, 3, "Change_all_jsdoc_style_types_to_TypeScript_and_add_undefined_to_nullable_types_95031", "Change all jsdoc-style types to TypeScript (and add '| undefined' to nullable types)"),
          Implement_all_unimplemented_interfaces: b(95032, 3, "Implement_all_unimplemented_interfaces_95032", "Implement all unimplemented interfaces"),
          Install_all_missing_types_packages: b(95033, 3, "Install_all_missing_types_packages_95033", "Install all missing types packages"),
          Rewrite_all_as_indexed_access_types: b(95034, 3, "Rewrite_all_as_indexed_access_types_95034", "Rewrite all as indexed access types"),
          Convert_all_to_default_imports: b(95035, 3, "Convert_all_to_default_imports_95035", "Convert all to default imports"),
          Make_all_super_calls_the_first_statement_in_their_constructor: b(95036, 3, "Make_all_super_calls_the_first_statement_in_their_constructor_95036", "Make all 'super()' calls the first statement in their constructor"),
          Add_qualifier_to_all_unresolved_variables_matching_a_member_name: b(95037, 3, "Add_qualifier_to_all_unresolved_variables_matching_a_member_name_95037", "Add qualifier to all unresolved variables matching a member name"),
          Change_all_extended_interfaces_to_implements: b(95038, 3, "Change_all_extended_interfaces_to_implements_95038", "Change all extended interfaces to 'implements'"),
          Add_all_missing_super_calls: b(95039, 3, "Add_all_missing_super_calls_95039", "Add all missing super calls"),
          Implement_all_inherited_abstract_classes: b(95040, 3, "Implement_all_inherited_abstract_classes_95040", "Implement all inherited abstract classes"),
          Add_all_missing_async_modifiers: b(95041, 3, "Add_all_missing_async_modifiers_95041", "Add all missing 'async' modifiers"),
          Add_ts_ignore_to_all_error_messages: b(95042, 3, "Add_ts_ignore_to_all_error_messages_95042", "Add '@ts-ignore' to all error messages"),
          Annotate_everything_with_types_from_JSDoc: b(95043, 3, "Annotate_everything_with_types_from_JSDoc_95043", "Annotate everything with types from JSDoc"),
          Add_to_all_uncalled_decorators: b(95044, 3, "Add_to_all_uncalled_decorators_95044", "Add '()' to all uncalled decorators"),
          Convert_all_constructor_functions_to_classes: b(95045, 3, "Convert_all_constructor_functions_to_classes_95045", "Convert all constructor functions to classes"),
          Generate_get_and_set_accessors: b(95046, 3, "Generate_get_and_set_accessors_95046", "Generate 'get' and 'set' accessors"),
          Convert_require_to_import: b(95047, 3, "Convert_require_to_import_95047", "Convert 'require' to 'import'"),
          Convert_all_require_to_import: b(95048, 3, "Convert_all_require_to_import_95048", "Convert all 'require' to 'import'"),
          Move_to_a_new_file: b(95049, 3, "Move_to_a_new_file_95049", "Move to a new file"),
          Remove_unreachable_code: b(95050, 3, "Remove_unreachable_code_95050", "Remove unreachable code"),
          Remove_all_unreachable_code: b(95051, 3, "Remove_all_unreachable_code_95051", "Remove all unreachable code"),
          Add_missing_typeof: b(95052, 3, "Add_missing_typeof_95052", "Add missing 'typeof'"),
          Remove_unused_label: b(95053, 3, "Remove_unused_label_95053", "Remove unused label"),
          Remove_all_unused_labels: b(95054, 3, "Remove_all_unused_labels_95054", "Remove all unused labels"),
          Convert_0_to_mapped_object_type: b(95055, 3, "Convert_0_to_mapped_object_type_95055", "Convert '{0}' to mapped object type"),
          Convert_namespace_import_to_named_imports: b(95056, 3, "Convert_namespace_import_to_named_imports_95056", "Convert namespace import to named imports"),
          Convert_named_imports_to_namespace_import: b(95057, 3, "Convert_named_imports_to_namespace_import_95057", "Convert named imports to namespace import"),
          Add_or_remove_braces_in_an_arrow_function: b(95058, 3, "Add_or_remove_braces_in_an_arrow_function_95058", "Add or remove braces in an arrow function"),
          Add_braces_to_arrow_function: b(95059, 3, "Add_braces_to_arrow_function_95059", "Add braces to arrow function"),
          Remove_braces_from_arrow_function: b(95060, 3, "Remove_braces_from_arrow_function_95060", "Remove braces from arrow function"),
          Convert_default_export_to_named_export: b(95061, 3, "Convert_default_export_to_named_export_95061", "Convert default export to named export"),
          Convert_named_export_to_default_export: b(95062, 3, "Convert_named_export_to_default_export_95062", "Convert named export to default export"),
          Add_missing_enum_member_0: b(95063, 3, "Add_missing_enum_member_0_95063", "Add missing enum member '{0}'"),
          Add_all_missing_imports: b(95064, 3, "Add_all_missing_imports_95064", "Add all missing imports"),
          Convert_to_async_function: b(95065, 3, "Convert_to_async_function_95065", "Convert to async function"),
          Convert_all_to_async_functions: b(95066, 3, "Convert_all_to_async_functions_95066", "Convert all to async functions"),
          Add_missing_call_parentheses: b(95067, 3, "Add_missing_call_parentheses_95067", "Add missing call parentheses"),
          Add_all_missing_call_parentheses: b(95068, 3, "Add_all_missing_call_parentheses_95068", "Add all missing call parentheses"),
          Add_unknown_conversion_for_non_overlapping_types: b(95069, 3, "Add_unknown_conversion_for_non_overlapping_types_95069", "Add 'unknown' conversion for non-overlapping types"),
          Add_unknown_to_all_conversions_of_non_overlapping_types: b(95070, 3, "Add_unknown_to_all_conversions_of_non_overlapping_types_95070", "Add 'unknown' to all conversions of non-overlapping types"),
          Add_missing_new_operator_to_call: b(95071, 3, "Add_missing_new_operator_to_call_95071", "Add missing 'new' operator to call"),
          Add_missing_new_operator_to_all_calls: b(95072, 3, "Add_missing_new_operator_to_all_calls_95072", "Add missing 'new' operator to all calls"),
          Add_names_to_all_parameters_without_names: b(95073, 3, "Add_names_to_all_parameters_without_names_95073", "Add names to all parameters without names"),
          Enable_the_experimentalDecorators_option_in_your_configuration_file: b(95074, 3, "Enable_the_experimentalDecorators_option_in_your_configuration_file_95074", "Enable the 'experimentalDecorators' option in your configuration file"),
          Convert_parameters_to_destructured_object: b(95075, 3, "Convert_parameters_to_destructured_object_95075", "Convert parameters to destructured object"),
          Extract_type: b(95077, 3, "Extract_type_95077", "Extract type"),
          Extract_to_type_alias: b(95078, 3, "Extract_to_type_alias_95078", "Extract to type alias"),
          Extract_to_typedef: b(95079, 3, "Extract_to_typedef_95079", "Extract to typedef"),
          Infer_this_type_of_0_from_usage: b(95080, 3, "Infer_this_type_of_0_from_usage_95080", "Infer 'this' type of '{0}' from usage"),
          Add_const_to_unresolved_variable: b(95081, 3, "Add_const_to_unresolved_variable_95081", "Add 'const' to unresolved variable"),
          Add_const_to_all_unresolved_variables: b(95082, 3, "Add_const_to_all_unresolved_variables_95082", "Add 'const' to all unresolved variables"),
          Add_await: b(95083, 3, "Add_await_95083", "Add 'await'"),
          Add_await_to_initializer_for_0: b(95084, 3, "Add_await_to_initializer_for_0_95084", "Add 'await' to initializer for '{0}'"),
          Fix_all_expressions_possibly_missing_await: b(95085, 3, "Fix_all_expressions_possibly_missing_await_95085", "Fix all expressions possibly missing 'await'"),
          Remove_unnecessary_await: b(95086, 3, "Remove_unnecessary_await_95086", "Remove unnecessary 'await'"),
          Remove_all_unnecessary_uses_of_await: b(95087, 3, "Remove_all_unnecessary_uses_of_await_95087", "Remove all unnecessary uses of 'await'"),
          Enable_the_jsx_flag_in_your_configuration_file: b(95088, 3, "Enable_the_jsx_flag_in_your_configuration_file_95088", "Enable the '--jsx' flag in your configuration file"),
          Add_await_to_initializers: b(95089, 3, "Add_await_to_initializers_95089", "Add 'await' to initializers"),
          Extract_to_interface: b(95090, 3, "Extract_to_interface_95090", "Extract to interface"),
          Convert_to_a_bigint_numeric_literal: b(95091, 3, "Convert_to_a_bigint_numeric_literal_95091", "Convert to a bigint numeric literal"),
          Convert_all_to_bigint_numeric_literals: b(95092, 3, "Convert_all_to_bigint_numeric_literals_95092", "Convert all to bigint numeric literals"),
          Convert_const_to_let: b(95093, 3, "Convert_const_to_let_95093", "Convert 'const' to 'let'"),
          Prefix_with_declare: b(95094, 3, "Prefix_with_declare_95094", "Prefix with 'declare'"),
          Prefix_all_incorrect_property_declarations_with_declare: b(95095, 3, "Prefix_all_incorrect_property_declarations_with_declare_95095", "Prefix all incorrect property declarations with 'declare'"),
          Convert_to_template_string: b(95096, 3, "Convert_to_template_string_95096", "Convert to template string"),
          Add_export_to_make_this_file_into_a_module: b(95097, 3, "Add_export_to_make_this_file_into_a_module_95097", "Add 'export {}' to make this file into a module"),
          Set_the_target_option_in_your_configuration_file_to_0: b(95098, 3, "Set_the_target_option_in_your_configuration_file_to_0_95098", "Set the 'target' option in your configuration file to '{0}'"),
          Set_the_module_option_in_your_configuration_file_to_0: b(95099, 3, "Set_the_module_option_in_your_configuration_file_to_0_95099", "Set the 'module' option in your configuration file to '{0}'"),
          Convert_invalid_character_to_its_html_entity_code: b(95100, 3, "Convert_invalid_character_to_its_html_entity_code_95100", "Convert invalid character to its html entity code"),
          Convert_all_invalid_characters_to_HTML_entity_code: b(95101, 3, "Convert_all_invalid_characters_to_HTML_entity_code_95101", "Convert all invalid characters to HTML entity code"),
          Convert_all_const_to_let: b(95102, 3, "Convert_all_const_to_let_95102", "Convert all 'const' to 'let'"),
          Convert_function_expression_0_to_arrow_function: b(95105, 3, "Convert_function_expression_0_to_arrow_function_95105", "Convert function expression '{0}' to arrow function"),
          Convert_function_declaration_0_to_arrow_function: b(95106, 3, "Convert_function_declaration_0_to_arrow_function_95106", "Convert function declaration '{0}' to arrow function"),
          Fix_all_implicit_this_errors: b(95107, 3, "Fix_all_implicit_this_errors_95107", "Fix all implicit-'this' errors"),
          Wrap_invalid_character_in_an_expression_container: b(95108, 3, "Wrap_invalid_character_in_an_expression_container_95108", "Wrap invalid character in an expression container"),
          Wrap_all_invalid_characters_in_an_expression_container: b(95109, 3, "Wrap_all_invalid_characters_in_an_expression_container_95109", "Wrap all invalid characters in an expression container"),
          Visit_https_Colon_Slash_Slashaka_ms_Slashtsconfig_to_read_more_about_this_file: b(95110, 3, "Visit_https_Colon_Slash_Slashaka_ms_Slashtsconfig_to_read_more_about_this_file_95110", "Visit https://aka.ms/tsconfig to read more about this file"),
          Add_a_return_statement: b(95111, 3, "Add_a_return_statement_95111", "Add a return statement"),
          Remove_braces_from_arrow_function_body: b(95112, 3, "Remove_braces_from_arrow_function_body_95112", "Remove braces from arrow function body"),
          Wrap_the_following_body_with_parentheses_which_should_be_an_object_literal: b(95113, 3, "Wrap_the_following_body_with_parentheses_which_should_be_an_object_literal_95113", "Wrap the following body with parentheses which should be an object literal"),
          Add_all_missing_return_statement: b(95114, 3, "Add_all_missing_return_statement_95114", "Add all missing return statement"),
          Remove_braces_from_all_arrow_function_bodies_with_relevant_issues: b(95115, 3, "Remove_braces_from_all_arrow_function_bodies_with_relevant_issues_95115", "Remove braces from all arrow function bodies with relevant issues"),
          Wrap_all_object_literal_with_parentheses: b(95116, 3, "Wrap_all_object_literal_with_parentheses_95116", "Wrap all object literal with parentheses"),
          Move_labeled_tuple_element_modifiers_to_labels: b(95117, 3, "Move_labeled_tuple_element_modifiers_to_labels_95117", "Move labeled tuple element modifiers to labels"),
          Convert_overload_list_to_single_signature: b(95118, 3, "Convert_overload_list_to_single_signature_95118", "Convert overload list to single signature"),
          Generate_get_and_set_accessors_for_all_overriding_properties: b(95119, 3, "Generate_get_and_set_accessors_for_all_overriding_properties_95119", "Generate 'get' and 'set' accessors for all overriding properties"),
          Wrap_in_JSX_fragment: b(95120, 3, "Wrap_in_JSX_fragment_95120", "Wrap in JSX fragment"),
          Wrap_all_unparented_JSX_in_JSX_fragment: b(95121, 3, "Wrap_all_unparented_JSX_in_JSX_fragment_95121", "Wrap all unparented JSX in JSX fragment"),
          Convert_arrow_function_or_function_expression: b(95122, 3, "Convert_arrow_function_or_function_expression_95122", "Convert arrow function or function expression"),
          Convert_to_anonymous_function: b(95123, 3, "Convert_to_anonymous_function_95123", "Convert to anonymous function"),
          Convert_to_named_function: b(95124, 3, "Convert_to_named_function_95124", "Convert to named function"),
          Convert_to_arrow_function: b(95125, 3, "Convert_to_arrow_function_95125", "Convert to arrow function"),
          Remove_parentheses: b(95126, 3, "Remove_parentheses_95126", "Remove parentheses"),
          Could_not_find_a_containing_arrow_function: b(95127, 3, "Could_not_find_a_containing_arrow_function_95127", "Could not find a containing arrow function"),
          Containing_function_is_not_an_arrow_function: b(95128, 3, "Containing_function_is_not_an_arrow_function_95128", "Containing function is not an arrow function"),
          Could_not_find_export_statement: b(95129, 3, "Could_not_find_export_statement_95129", "Could not find export statement"),
          This_file_already_has_a_default_export: b(95130, 3, "This_file_already_has_a_default_export_95130", "This file already has a default export"),
          Could_not_find_import_clause: b(95131, 3, "Could_not_find_import_clause_95131", "Could not find import clause"),
          Could_not_find_namespace_import_or_named_imports: b(95132, 3, "Could_not_find_namespace_import_or_named_imports_95132", "Could not find namespace import or named imports"),
          Selection_is_not_a_valid_type_node: b(95133, 3, "Selection_is_not_a_valid_type_node_95133", "Selection is not a valid type node"),
          No_type_could_be_extracted_from_this_type_node: b(95134, 3, "No_type_could_be_extracted_from_this_type_node_95134", "No type could be extracted from this type node"),
          Could_not_find_property_for_which_to_generate_accessor: b(95135, 3, "Could_not_find_property_for_which_to_generate_accessor_95135", "Could not find property for which to generate accessor"),
          Name_is_not_valid: b(95136, 3, "Name_is_not_valid_95136", "Name is not valid"),
          Can_only_convert_property_with_modifier: b(95137, 3, "Can_only_convert_property_with_modifier_95137", "Can only convert property with modifier"),
          Switch_each_misused_0_to_1: b(95138, 3, "Switch_each_misused_0_to_1_95138", "Switch each misused '{0}' to '{1}'"),
          Convert_to_optional_chain_expression: b(95139, 3, "Convert_to_optional_chain_expression_95139", "Convert to optional chain expression"),
          Could_not_find_convertible_access_expression: b(95140, 3, "Could_not_find_convertible_access_expression_95140", "Could not find convertible access expression"),
          Could_not_find_matching_access_expressions: b(95141, 3, "Could_not_find_matching_access_expressions_95141", "Could not find matching access expressions"),
          Can_only_convert_logical_AND_access_chains: b(95142, 3, "Can_only_convert_logical_AND_access_chains_95142", "Can only convert logical AND access chains"),
          Add_void_to_Promise_resolved_without_a_value: b(95143, 3, "Add_void_to_Promise_resolved_without_a_value_95143", "Add 'void' to Promise resolved without a value"),
          Add_void_to_all_Promises_resolved_without_a_value: b(95144, 3, "Add_void_to_all_Promises_resolved_without_a_value_95144", "Add 'void' to all Promises resolved without a value"),
          Use_element_access_for_0: b(95145, 3, "Use_element_access_for_0_95145", "Use element access for '{0}'"),
          Use_element_access_for_all_undeclared_properties: b(95146, 3, "Use_element_access_for_all_undeclared_properties_95146", "Use element access for all undeclared properties."),
          Delete_all_unused_imports: b(95147, 3, "Delete_all_unused_imports_95147", "Delete all unused imports"),
          Infer_function_return_type: b(95148, 3, "Infer_function_return_type_95148", "Infer function return type"),
          Return_type_must_be_inferred_from_a_function: b(95149, 3, "Return_type_must_be_inferred_from_a_function_95149", "Return type must be inferred from a function"),
          Could_not_determine_function_return_type: b(95150, 3, "Could_not_determine_function_return_type_95150", "Could not determine function return type"),
          Could_not_convert_to_arrow_function: b(95151, 3, "Could_not_convert_to_arrow_function_95151", "Could not convert to arrow function"),
          Could_not_convert_to_named_function: b(95152, 3, "Could_not_convert_to_named_function_95152", "Could not convert to named function"),
          Could_not_convert_to_anonymous_function: b(95153, 3, "Could_not_convert_to_anonymous_function_95153", "Could not convert to anonymous function"),
          Can_only_convert_string_concatenations_and_string_literals: b(95154, 3, "Can_only_convert_string_concatenations_and_string_literals_95154", "Can only convert string concatenations and string literals"),
          Selection_is_not_a_valid_statement_or_statements: b(95155, 3, "Selection_is_not_a_valid_statement_or_statements_95155", "Selection is not a valid statement or statements"),
          Add_missing_function_declaration_0: b(95156, 3, "Add_missing_function_declaration_0_95156", "Add missing function declaration '{0}'"),
          Add_all_missing_function_declarations: b(95157, 3, "Add_all_missing_function_declarations_95157", "Add all missing function declarations"),
          Method_not_implemented: b(95158, 3, "Method_not_implemented_95158", "Method not implemented."),
          Function_not_implemented: b(95159, 3, "Function_not_implemented_95159", "Function not implemented."),
          Add_override_modifier: b(95160, 3, "Add_override_modifier_95160", "Add 'override' modifier"),
          Remove_override_modifier: b(95161, 3, "Remove_override_modifier_95161", "Remove 'override' modifier"),
          Add_all_missing_override_modifiers: b(95162, 3, "Add_all_missing_override_modifiers_95162", "Add all missing 'override' modifiers"),
          Remove_all_unnecessary_override_modifiers: b(95163, 3, "Remove_all_unnecessary_override_modifiers_95163", "Remove all unnecessary 'override' modifiers"),
          Can_only_convert_named_export: b(95164, 3, "Can_only_convert_named_export_95164", "Can only convert named export"),
          Add_missing_properties: b(95165, 3, "Add_missing_properties_95165", "Add missing properties"),
          Add_all_missing_properties: b(95166, 3, "Add_all_missing_properties_95166", "Add all missing properties"),
          Add_missing_attributes: b(95167, 3, "Add_missing_attributes_95167", "Add missing attributes"),
          Add_all_missing_attributes: b(95168, 3, "Add_all_missing_attributes_95168", "Add all missing attributes"),
          Add_undefined_to_optional_property_type: b(95169, 3, "Add_undefined_to_optional_property_type_95169", "Add 'undefined' to optional property type"),
          Convert_named_imports_to_default_import: b(95170, 3, "Convert_named_imports_to_default_import_95170", "Convert named imports to default import"),
          Delete_unused_param_tag_0: b(95171, 3, "Delete_unused_param_tag_0_95171", "Delete unused '@param' tag '{0}'"),
          Delete_all_unused_param_tags: b(95172, 3, "Delete_all_unused_param_tags_95172", "Delete all unused '@param' tags"),
          Rename_param_tag_name_0_to_1: b(95173, 3, "Rename_param_tag_name_0_to_1_95173", "Rename '@param' tag name '{0}' to '{1}'"),
          Use_0: b(95174, 3, "Use_0_95174", "Use `{0}`."),
          Use_Number_isNaN_in_all_conditions: b(95175, 3, "Use_Number_isNaN_in_all_conditions_95175", "Use `Number.isNaN` in all conditions."),
          Convert_typedef_to_TypeScript_type: b(95176, 3, "Convert_typedef_to_TypeScript_type_95176", "Convert typedef to TypeScript type."),
          Convert_all_typedef_to_TypeScript_types: b(95177, 3, "Convert_all_typedef_to_TypeScript_types_95177", "Convert all typedef to TypeScript types."),
          Move_to_file: b(95178, 3, "Move_to_file_95178", "Move to file"),
          Cannot_move_to_file_selected_file_is_invalid: b(95179, 3, "Cannot_move_to_file_selected_file_is_invalid_95179", "Cannot move to file, selected file is invalid"),
          Use_import_type: b(95180, 3, "Use_import_type_95180", "Use 'import type'"),
          Use_type_0: b(95181, 3, "Use_type_0_95181", "Use 'type {0}'"),
          Fix_all_with_type_only_imports: b(95182, 3, "Fix_all_with_type_only_imports_95182", "Fix all with type-only imports"),
          Cannot_move_statements_to_the_selected_file: b(95183, 3, "Cannot_move_statements_to_the_selected_file_95183", "Cannot move statements to the selected file"),
          Inline_variable: b(95184, 3, "Inline_variable_95184", "Inline variable"),
          Could_not_find_variable_to_inline: b(95185, 3, "Could_not_find_variable_to_inline_95185", "Could not find variable to inline."),
          Variables_with_multiple_declarations_cannot_be_inlined: b(95186, 3, "Variables_with_multiple_declarations_cannot_be_inlined_95186", "Variables with multiple declarations cannot be inlined."),
          Add_missing_comma_for_object_member_completion_0: b(95187, 3, "Add_missing_comma_for_object_member_completion_0_95187", "Add missing comma for object member completion '{0}'."),
          Add_missing_parameter_to_0: b(95188, 3, "Add_missing_parameter_to_0_95188", "Add missing parameter to '{0}'"),
          Add_missing_parameters_to_0: b(95189, 3, "Add_missing_parameters_to_0_95189", "Add missing parameters to '{0}'"),
          Add_all_missing_parameters: b(95190, 3, "Add_all_missing_parameters_95190", "Add all missing parameters"),
          Add_optional_parameter_to_0: b(95191, 3, "Add_optional_parameter_to_0_95191", "Add optional parameter to '{0}'"),
          Add_optional_parameters_to_0: b(95192, 3, "Add_optional_parameters_to_0_95192", "Add optional parameters to '{0}'"),
          Add_all_optional_parameters: b(95193, 3, "Add_all_optional_parameters_95193", "Add all optional parameters"),
          No_value_exists_in_scope_for_the_shorthand_property_0_Either_declare_one_or_provide_an_initializer: b(18004, 1, "No_value_exists_in_scope_for_the_shorthand_property_0_Either_declare_one_or_provide_an_initializer_18004", "No value exists in scope for the shorthand property '{0}'. Either declare one or provide an initializer."),
          Classes_may_not_have_a_field_named_constructor: b(18006, 1, "Classes_may_not_have_a_field_named_constructor_18006", "Classes may not have a field named 'constructor'."),
          JSX_expressions_may_not_use_the_comma_operator_Did_you_mean_to_write_an_array: b(18007, 1, "JSX_expressions_may_not_use_the_comma_operator_Did_you_mean_to_write_an_array_18007", "JSX expressions may not use the comma operator. Did you mean to write an array?"),
          Private_identifiers_cannot_be_used_as_parameters: b(18009, 1, "Private_identifiers_cannot_be_used_as_parameters_18009", "Private identifiers cannot be used as parameters."),
          An_accessibility_modifier_cannot_be_used_with_a_private_identifier: b(18010, 1, "An_accessibility_modifier_cannot_be_used_with_a_private_identifier_18010", "An accessibility modifier cannot be used with a private identifier."),
          The_operand_of_a_delete_operator_cannot_be_a_private_identifier: b(18011, 1, "The_operand_of_a_delete_operator_cannot_be_a_private_identifier_18011", "The operand of a 'delete' operator cannot be a private identifier."),
          constructor_is_a_reserved_word: b(18012, 1, "constructor_is_a_reserved_word_18012", "'#constructor' is a reserved word."),
          Property_0_is_not_accessible_outside_class_1_because_it_has_a_private_identifier: b(18013, 1, "Property_0_is_not_accessible_outside_class_1_because_it_has_a_private_identifier_18013", "Property '{0}' is not accessible outside class '{1}' because it has a private identifier."),
          The_property_0_cannot_be_accessed_on_type_1_within_this_class_because_it_is_shadowed_by_another_private_identifier_with_the_same_spelling: b(18014, 1, "The_property_0_cannot_be_accessed_on_type_1_within_this_class_because_it_is_shadowed_by_another_priv_18014", "The property '{0}' cannot be accessed on type '{1}' within this class because it is shadowed by another private identifier with the same spelling."),
          Property_0_in_type_1_refers_to_a_different_member_that_cannot_be_accessed_from_within_type_2: b(18015, 1, "Property_0_in_type_1_refers_to_a_different_member_that_cannot_be_accessed_from_within_type_2_18015", "Property '{0}' in type '{1}' refers to a different member that cannot be accessed from within type '{2}'."),
          Private_identifiers_are_not_allowed_outside_class_bodies: b(18016, 1, "Private_identifiers_are_not_allowed_outside_class_bodies_18016", "Private identifiers are not allowed outside class bodies."),
          The_shadowing_declaration_of_0_is_defined_here: b(18017, 1, "The_shadowing_declaration_of_0_is_defined_here_18017", "The shadowing declaration of '{0}' is defined here"),
          The_declaration_of_0_that_you_probably_intended_to_use_is_defined_here: b(18018, 1, "The_declaration_of_0_that_you_probably_intended_to_use_is_defined_here_18018", "The declaration of '{0}' that you probably intended to use is defined here"),
          _0_modifier_cannot_be_used_with_a_private_identifier: b(18019, 1, "_0_modifier_cannot_be_used_with_a_private_identifier_18019", "'{0}' modifier cannot be used with a private identifier."),
          An_enum_member_cannot_be_named_with_a_private_identifier: b(18024, 1, "An_enum_member_cannot_be_named_with_a_private_identifier_18024", "An enum member cannot be named with a private identifier."),
          can_only_be_used_at_the_start_of_a_file: b(18026, 1, "can_only_be_used_at_the_start_of_a_file_18026", "'#!' can only be used at the start of a file."),
          Compiler_reserves_name_0_when_emitting_private_identifier_downlevel: b(18027, 1, "Compiler_reserves_name_0_when_emitting_private_identifier_downlevel_18027", "Compiler reserves name '{0}' when emitting private identifier downlevel."),
          Private_identifiers_are_only_available_when_targeting_ECMAScript_2015_and_higher: b(18028, 1, "Private_identifiers_are_only_available_when_targeting_ECMAScript_2015_and_higher_18028", "Private identifiers are only available when targeting ECMAScript 2015 and higher."),
          Private_identifiers_are_not_allowed_in_variable_declarations: b(18029, 1, "Private_identifiers_are_not_allowed_in_variable_declarations_18029", "Private identifiers are not allowed in variable declarations."),
          An_optional_chain_cannot_contain_private_identifiers: b(18030, 1, "An_optional_chain_cannot_contain_private_identifiers_18030", "An optional chain cannot contain private identifiers."),
          The_intersection_0_was_reduced_to_never_because_property_1_has_conflicting_types_in_some_constituents: b(18031, 1, "The_intersection_0_was_reduced_to_never_because_property_1_has_conflicting_types_in_some_constituent_18031", "The intersection '{0}' was reduced to 'never' because property '{1}' has conflicting types in some constituents."),
          The_intersection_0_was_reduced_to_never_because_property_1_exists_in_multiple_constituents_and_is_private_in_some: b(18032, 1, "The_intersection_0_was_reduced_to_never_because_property_1_exists_in_multiple_constituents_and_is_pr_18032", "The intersection '{0}' was reduced to 'never' because property '{1}' exists in multiple constituents and is private in some."),
          Type_0_is_not_assignable_to_type_1_as_required_for_computed_enum_member_values: b(18033, 1, "Type_0_is_not_assignable_to_type_1_as_required_for_computed_enum_member_values_18033", "Type '{0}' is not assignable to type '{1}' as required for computed enum member values."),
          Specify_the_JSX_fragment_factory_function_to_use_when_targeting_react_JSX_emit_with_jsxFactory_compiler_option_is_specified_e_g_Fragment: b(18034, 3, "Specify_the_JSX_fragment_factory_function_to_use_when_targeting_react_JSX_emit_with_jsxFactory_compi_18034", "Specify the JSX fragment factory function to use when targeting 'react' JSX emit with 'jsxFactory' compiler option is specified, e.g. 'Fragment'."),
          Invalid_value_for_jsxFragmentFactory_0_is_not_a_valid_identifier_or_qualified_name: b(18035, 1, "Invalid_value_for_jsxFragmentFactory_0_is_not_a_valid_identifier_or_qualified_name_18035", "Invalid value for 'jsxFragmentFactory'. '{0}' is not a valid ide