import{s as y,e as d,c as v,b as N,f as c,y as B,i as m,l as w,r as E,a as b,g as k,n as H,t as j,d as z,m as A,C as D}from"../chunks/scheduler.Ylj15gGJ.js";import{S as L,i as O,c as p,b as _,m as g,t as f,a as $,d as h,g as q,e as F}from"../chunks/index.v8Cf7wUF.js";import{e as C,_ as M,a as R}from"../chunks/pal.5NleLwEN.js";import{I as T,g as V,a as G,r as J,b as K,c as Q,S as U,d as W,C as X}from"../chunks/Supporting.tJYGm-5i.js";/* empty css                            */function I(o,a,n){const s=o.slice();return s[8]=a[n],s[10]=n,s}function Y(o){let a,n;return a=new W({props:{style:"color: red",src:R(o[8]),alt:o[8].en}}),{c(){p(a.$$.fragment)},l(s){_(a.$$.fragment,s)},m(s,e){g(a,s,e),n=!0},p:H,i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){$(a.$$.fragment,s),n=!1},d(s){h(a,s)}}}function P(o){let a,n="未所持",s;return{c(){a=d("span"),a.textContent=n,s=d("br"),this.h()},l(e){a=v(e,"SPAN",{style:!0,"data-svelte-h":!0}),A(a)!=="svelte-1kgwwsn"&&(a.textContent=n),s=v(e,"BR",{}),this.h()},h(){D(a,"font-size","25px")},m(e,l){m(e,a,l),m(e,s,l)},d(e){e&&(c(a),c(s))}}}function Z(o){let a=o[0].has(o[8].name),n,s=o[8].name+"",e,l=a&&P();return{c(){l&&l.c(),n=b(),e=j(s)},l(t){l&&l.l(t),n=k(t),e=z(t,s)},m(t,r){l&&l.m(t,r),m(t,n,r),m(t,e,r)},p(t,r){r&1&&(a=t[0].has(t[8].name)),a?l||(l=P(),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},d(t){t&&(c(n),c(e)),l&&l.d(t)}}}function x(o){let a,n;return a=new X({props:{style:"font-size: 13px",$$slots:{default:[Z]},$$scope:{ctx:o}}}),{c(){p(a.$$.fragment)},l(s){_(a.$$.fragment,s)},m(s,e){g(a,s,e),n=!0},p(s,e){const l={};e&2049&&(l.$$scope={dirty:e,ctx:s}),a.$set(l)},i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){$(a.$$.fragment,s),n=!1},d(s){h(a,s)}}}function ee(o){let a,n,s,e,l;return a=new Q({props:{$$slots:{default:[Y]},$$scope:{ctx:o}}}),s=new U({props:{style:"height: "+(o[0].has(o[8].name)?"100%":"30%"),$$slots:{default:[x]},$$scope:{ctx:o}}}),{c(){p(a.$$.fragment),n=b(),p(s.$$.fragment),e=b()},l(t){_(a.$$.fragment,t),n=k(t),_(s.$$.fragment,t),e=k(t)},m(t,r){g(a,t,r),m(t,n,r),g(s,t,r),m(t,e,r),l=!0},p(t,r){const i={};r&2048&&(i.$$scope={dirty:r,ctx:t}),a.$set(i);const u={};r&1&&(u.style="height: "+(t[0].has(t[8].name)?"100%":"30%")),r&2049&&(u.$$scope={dirty:r,ctx:t}),s.$set(u)},i(t){l||(f(a.$$.fragment,t),f(s.$$.fragment,t),l=!0)},o(t){$(a.$$.fragment,t),$(s.$$.fragment,t),l=!1},d(t){t&&(c(n),c(e)),h(a,t),h(s,t)}}}function S(o){let a,n;function s(){return o[3](o[8])}return a=new K({props:{class:"image-item",$$slots:{default:[ee]},$$scope:{ctx:o}}}),a.$on("click",s),{c(){p(a.$$.fragment)},l(e){_(a.$$.fragment,e)},m(e,l){g(a,e,l),n=!0},p(e,l){o=e;const t={};l&2049&&(t.$$scope={dirty:l,ctx:o}),a.$set(t)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){$(a.$$.fragment,e),n=!1},d(e){h(a,e)}}}function te(o){let a,n,s=C(Object.values(o[1])),e=[];for(let t=0;t<s.length;t+=1)e[t]=S(I(o,s,t));const l=t=>$(e[t],1,1,()=>{e[t]=null});return{c(){for(let t=0;t<e.length;t+=1)e[t].c();a=w()},l(t){for(let r=0;r<e.length;r+=1)e[r].l(t);a=w()},m(t,r){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,r);m(t,a,r),n=!0},p(t,r){if(r&7){s=C(Object.values(t[1]));let i;for(i=0;i<s.length;i+=1){const u=I(t,s,i);e[i]?(e[i].p(u,r),f(e[i],1)):(e[i]=S(u),e[i].c(),f(e[i],1),e[i].m(a.parentNode,a))}for(q(),i=s.length;i<e.length;i+=1)l(i);F()}},i(t){if(!n){for(let r=0;r<s.length;r+=1)f(e[r]);n=!0}},o(t){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)$(e[r]);n=!1},d(t){t&&c(a),E(e,t)}}}function ae(o){let a,n,s;return n=new T({props:{class:"my-image-list-standard",withTextProtection:!0,$$slots:{default:[te]},$$scope:{ctx:o}}}),{c(){a=d("div"),p(n.$$.fragment),this.h()},l(e){a=v(e,"DIV",{class:!0});var l=N(a);_(n.$$.fragment,l),l.forEach(c),this.h()},h(){B(a,"class","test svelte-g12ihc")},m(e,l){m(e,a,l),g(n,a,null),s=!0},p(e,[l]){const t={};l&2049&&(t.$$scope={dirty:l,ctx:e}),n.$set(t)},i(e){s||(f(n.$$.fragment,e),s=!0)},o(e){$(n.$$.fragment,e),s=!1},d(e){e&&c(a),h(n)}}}function se(o,a,n){const s=M;V();let e=new Set(G().map(r=>r==null?void 0:r.name));s.モコロン;function l(r){e.has(r.name)?e.delete(r.name):e.add(r.name),n(0,e),J([...e].map(i=>s[i]))}return[e,s,l,r=>l(r)]}class fe extends L{constructor(a){super(),O(this,a,se,ae,y,{})}}export{fe as component};
