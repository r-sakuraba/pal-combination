import{s as k,x as g,i as b,f as m,y as P,e as H,o as y,b as C,d as I,q as N,z as S,r as j}from"../chunks/scheduler.IoPLG4dD.js";import{S as q,i as O,c as u,b as $,m as p,t as i,a as f,d as _,g as R,e as x}from"../chunks/index.EteLzElm.js";import{_ as z,e as d}from"../chunks/pal.KVuhwUaA.js";import{g as B,r as D,P as E}from"../chunks/PalCard.MRSB2Qcx.js";import{C as M}from"../chunks/Theme.svelte_svelte_type_style_lang.gMbEd4zb.js";import{R as V}from"../chunks/Row.S7LRO3tI.js";function v(c,a,r){const t=c.slice();return t[3]=a[r],t[5]=r,t}function w(c){let a,r,t,e;return r=new E({props:{pal:c[3],notHave:c[0].has(c[3].name)}}),r.$on("clickImage",c[2]),{c(){a=H("div"),u(r.$$.fragment),t=y(),this.h()},l(s){a=C(s,"DIV",{class:!0});var n=I(a);$(r.$$.fragment,n),t=N(n),n.forEach(m),this.h()},h(){S(a,"class","col-3 col-md-2 col-xl-1 col-div svelte-44rter")},m(s,n){b(s,a,n),p(r,a,null),j(a,t),e=!0},p(s,n){const o={};n&1&&(o.notHave=s[0].has(s[3].name)),r.$set(o)},i(s){e||(i(r.$$.fragment,s),e=!0)},o(s){f(r.$$.fragment,s),e=!1},d(s){s&&m(a),_(r)}}}function A(c){let a,r,t=d(Object.values(c[1])),e=[];for(let n=0;n<t.length;n+=1)e[n]=w(v(c,t,n));const s=n=>f(e[n],1,1,()=>{e[n]=null});return{c(){for(let n=0;n<e.length;n+=1)e[n].c();a=g()},l(n){for(let o=0;o<e.length;o+=1)e[o].l(n);a=g()},m(n,o){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(n,o);b(n,a,o),r=!0},p(n,o){if(o&7){t=d(Object.values(n[1]));let l;for(l=0;l<t.length;l+=1){const h=v(n,t,l);e[l]?(e[l].p(h,o),i(e[l],1)):(e[l]=w(h),e[l].c(),i(e[l],1),e[l].m(a.parentNode,a))}for(R(),l=t.length;l<e.length;l+=1)s(l);x()}},i(n){if(!r){for(let o=0;o<t.length;o+=1)i(e[o]);r=!0}},o(n){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)f(e[o]);r=!1},d(n){n&&m(a),P(e,n)}}}function F(c){let a,r;return a=new V({props:{$$slots:{default:[A]},$$scope:{ctx:c}}}),{c(){u(a.$$.fragment)},l(t){$(a.$$.fragment,t)},m(t,e){p(a,t,e),r=!0},p(t,e){const s={};e&65&&(s.$$scope={dirty:e,ctx:t}),a.$set(s)},i(t){r||(i(a.$$.fragment,t),r=!0)},o(t){f(a.$$.fragment,t),r=!1},d(t){_(a,t)}}}function G(c){let a,r;return a=new M({props:{$$slots:{default:[F]},$$scope:{ctx:c}}}),{c(){u(a.$$.fragment)},l(t){$(a.$$.fragment,t)},m(t,e){p(a,t,e),r=!0},p(t,[e]){const s={};e&65&&(s.$$scope={dirty:e,ctx:t}),a.$set(s)},i(t){r||(i(a.$$.fragment,t),r=!0)},o(t){f(a.$$.fragment,t),r=!1},d(t){_(a,t)}}}function J(c,a,r){const t=z;let e=new Set(B().map(n=>n==null?void 0:n.name));function s(n){const o=n.detail;e.has(o.name)?e.delete(o.name):e.add(o.name),r(0,e),D([...e].map(l=>t[l]))}return[e,t,s]}class X extends q{constructor(a){super(),O(this,a,J,G,k,{})}}export{X as component};