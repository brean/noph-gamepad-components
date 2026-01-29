import{l as u5,q as Z5,r as J5,c as N5,a as N,f as U,d as l5,e as y5}from"./B3wk3v6i.js";import{t as e5,h as b5,A as E5,ad as O5,bd as $5,F as T5,G as t3,Z as n3,b8 as L3,b5 as Q3,d as s3,g as Q5,a8 as e3,be as i3,b2 as o3,a5 as l3,j as w3,bf as g3,bg as h3,bh as r3,aj as a3,a1 as F3,as as $,aZ as q5,a4 as x5,p as G5,y as O,f as K,a as H5,w as D5,m as i5,c as R,r as I,v as d3,bc as p3,s as E,x as P5}from"./BOs4Ln1W.js";import{p as v,i as u,b as x3}from"./y0x0yPzR.js";import{b as j,d as f3}from"./C__GEJOS.js";function k3(L,t,n=!1,Q=!1,e=!1){var i=L,l="";e5(()=>{var d=O5;if(l===(l=t()??"")){b5&&E5();return}if(d.nodes!==null&&($5(d.nodes.start,d.nodes.end),d.nodes=null),l!==""){if(b5){T5.data;for(var p=E5(),w=p;p!==null&&(p.nodeType!==t3||p.data!=="");)w=p,p=n3(p);if(p===null)throw L3(),Q3;u5(T5,w),i=s3(p);return}var a=l+"";n?a=`<svg>${a}</svg>`:Q&&(a=`<math>${a}</math>`);var g=Z5(a);if((n||Q)&&(g=Q5(g)),u5(Q5(g),g.lastChild),n||Q)for(;Q5(g);)i.before(Q5(g));else i.before(g)}})}const v3=()=>performance.now(),q={tick:L=>requestAnimationFrame(L),now:()=>v3(),tasks:new Set};function z5(){const L=q.now();q.tasks.forEach(t=>{t.c(L)||(q.tasks.delete(t),t.f())}),q.tasks.size!==0&&q.tick(z5)}function c3(L){let t;return q.tasks.size===0&&q.tick(z5),{promise:new Promise(n=>{q.tasks.add(t={c:L,f:n})}),abort(){q.tasks.delete(t)}}}function o5(L,t){q5(()=>{L.dispatchEvent(new CustomEvent(t))})}function M3(L){if(L==="float")return"cssFloat";if(L==="offset")return"cssOffset";if(L.startsWith("--"))return L;const t=L.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function C5(L){const t={},n=L.split(";");for(const Q of n){const[e,i]=Q.split(":");if(!e||i===void 0)break;const l=M3(e.trim());t[l]=i.trim()}return t}const _3=L=>L;function A5(L,t,n,Q){var e=(L&h3)!==0,i=(L&r3)!==0,l=e&&i,d=(L&g3)!==0,p=l?"both":e?"in":"out",w,a=t.inert,g=t.style.overflow,y,s;function k(){return q5(()=>w??=n()(t,Q?.()??{},{direction:p}))}var F={is_global:d,in(){if(t.inert=a,!e){s?.abort(),s?.reset?.();return}i||y?.abort(),y=f5(t,k(),s,1,()=>{o5(t,"introend"),y?.abort(),y=w=void 0,t.style.overflow=g})},out(c){if(!i){c?.(),w=void 0;return}t.inert=!0,s=f5(t,k(),y,0,()=>{o5(t,"outroend"),c?.()})},stop:()=>{y?.abort(),s?.abort()}},h=O5;if((h.nodes.t??=[]).push(F),e&&J5){var b=d;if(!b){for(var x=h.parent;x&&(x.f&e3)!==0;)for(;(x=x.parent)&&(x.f&i3)===0;);b=!x||(x.f&o3)!==0}b&&l3(()=>{w3(()=>F.in())})}}function f5(L,t,n,Q,e){var i=Q===1;if(a3(t)){var l,d=!1;return F3(()=>{if(!d){var h=t({direction:i?"in":"out"});l=f5(L,h,n,Q,e)}}),{abort:()=>{d=!0,l?.abort()},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(n?.deactivate(),!t?.duration&&!t?.delay)return o5(L,i?"introstart":"outrostart"),e(),{abort:$,deactivate:$,reset:$,t:()=>Q};const{delay:p=0,css:w,tick:a,easing:g=_3}=t;var y=[];if(i&&n===void 0&&(a&&a(0,1),w)){var s=C5(w(0,1));y.push(s,s)}var k=()=>1-Q,F=L.animate(y,{duration:p,fill:"forwards"});return F.onfinish=()=>{F.cancel(),o5(L,i?"introstart":"outrostart");var h=n?.t()??1-Q;n?.abort();var b=Q-h,x=t.duration*Math.abs(b),c=[];if(x>0){var P=!1;if(w)for(var t5=Math.ceil(x/16.666666666666668),V=0;V<=t5;V+=1){var n5=h+b*g(V/t5),W=C5(w(n5,1-n5));c.push(W),P||=W.overflow==="hidden"}P&&(L.style.overflow="hidden"),k=()=>{var X=F.currentTime;return h+b*g(X/x)},a&&c3(()=>{if(F.playState!=="running")return!1;var X=k();return a(X,1-X),!0})}F=L.animate(c,{duration:x,fill:"forwards"}),F.onfinish=()=>{k=()=>Q,a?.(Q,1-Q),e()}},{abort:()=>{F&&(F.cancel(),F.effect=null,F.onfinish=$)},deactivate:()=>{e=$},reset:()=>{Q===0&&a?.(1,0)},t:()=>k()}}class s5{static DOWN=0;static RIGHT=1;static LEFT=2;static UP=3;static BUMPER_LEFT=4;static BUMPER_RIGHT=5;static TRIGGER_LEFT=6;static TRIGGER_RIGHT=7;static VIEW=8;static MENU=9;static AXIS_BUTTON_LEFT=10;static AXIS_BUTTON_RIGHT=11;static DPAD_UP=12;static DPAD_DOWN=13;static DPAD_LEFT=14;static DPAD_RIGHT=15;static HOME=16;static DPAD_HORIZONTAL="dpad_horizontal";static DPAD_VERTICAL="dpad_vertical";static LEFT_AXIS="left_axis";static LEFT_HORIZONTAL="left_horizontal";static LEFT_VERTICAL="left_vertical";static LEFT_UP="left_up";static LEFT_RIGHT="left_right";static LEFT_LEFT="left_left";static LEFT_DOWN="left_down";static RIGHT_AXIS="right_axis";static RIGHT_HORIZONTAL="right_horizontal";static RIGHT_VERTICAL="right_vertical";static RIGHT_UP="right_up";static RIGHT_RIGHT="right_right";static RIGHT_LEFT="right_left";static RIGHT_DOWN="right_down";static CROSS=0;static CIRCLE=1;static SQUARE=2;static TRIANGLE=3;static L1=4;static R1=5;static L2=6;static R2=7;static SHARE=8;static OPTIONS=9;static PS=16;static A=0;static B=1;static X=2;static Y=3;static LB=4;static RB=5;static TL=6;static TR=7;static BACK=8;static START=9;static XBOX=16}const m3=(L,t)=>Math.sqrt(L**2+t**2),u3=(L,t)=>Math.atan2(t,L),y3=(L,t)=>[L*Math.cos(t),L*Math.sin(t)],b3=(L,t)=>Math.min(Math.max(-t,L),t);function B5(L,t){return L.gamepad===-1||L.gamepad===t.index}function S5(L){const t=document.activeElement,n=Array.from(document.querySelectorAll('input, select, textarea, button, [tabindex]:not([tabindex="-1"])'));if(!t)return;let Q=n.indexOf(t);for(let e=1;e<n.length;e++){let i=(Q+e*L)%n.length;i<0&&(i=n.length-1,Q=i);const l=n[i];if(!l.hasAttribute("disabled"))return l}}function E1(){const L=S5(-1);L&&L.focus()}function T1(){const L=S5(1);L&&L.focus()}class E3{focusElement;requiresFocus;input;disabled=!1;onpressedCallback;onholdCallback;onreleaseCallback;consumePress;constructor(t,n,Q=!1,e,i,l,d=!1){this.onpressedCallback=e,this.onholdCallback=i,this.onreleaseCallback=l,this.focusElement=n,this.input=t,this.requiresFocus=Q,this.consumePress=d}onpressed(){return this.disabled?!1:(this.onpressedCallback&&this.onpressedCallback(),this.consumePress)}onhold(){this.onholdCallback&&this.onholdCallback()}onrelease(){this.onreleaseCallback&&this.onreleaseCallback()}thisGamepadButton(t,n){return B5(this.input,t)}onbuttonpressed(t,n){return this.onpressed()}onbuttonrelease(t,n){this.onrelease()}onbuttonhold(t,n){this.onhold()}onupdate(t){}thisKey(t){return!1}onkeypressed(t){return this.thisKey(t)&&this.onpressed()}onkeyrelease(t){this.thisKey(t)&&this.onrelease()}onkeyhold(t){this.thisKey(t)&&this.onhold()}}const M=x5({components:{},activeComponents:[],showHints:!1,context:"default"}),R5=L=>{M.activeComponents.includes(L)||M.activeComponents.push(L)},T3=(L,t)=>{L.forEach(n=>{M.components[n]||(M.components[n]=[]),M.components[n].push(t)}),!t.requiresFocus&&L.includes("default")&&R5(t),t.focusElement&&t.requiresFocus&&(t.focusElement.addEventListener("focus",()=>{L.includes(M.context)&&R5(t)}),t.focusElement.addEventListener("blur",()=>{M.activeComponents.splice(M.activeComponents.indexOf(t),1)}))},P3=(L,t)=>{L.forEach(n=>{M.components[n]&&M.components[n].splice(M.components[n].indexOf(t),1)}),M.activeComponents.includes(t)&&M.activeComponents.slice(M.activeComponents.indexOf(t))};class C3 extends E3{gamepadActive=!0;pos=[0,0];updatePosition;xPos=!1;xNeg=!1;yPos=!1;yNeg=!1;constructor(t,n,Q,e=!1){super(t,Q,e),this.updatePosition=n}onrelease(){let t=this.pos[0],n=this.pos[1];(this.xPos||this.xNeg)&&(t=0),(this.yPos||this.yNeg)&&(n=0),!(t==this.pos[0]&&n==this.pos[1])&&(this.pos=[t,n],this.updatePosition(!0,this.pos))}onhold(){let t=this.pos[0],n=this.pos[1];this.xPos?t=1:this.xNeg&&(t=-1),this.yPos?n=1:this.yNeg&&(n=-1),!(t==this.pos[0]&&n==this.pos[1])&&(this.pos=[t,n],this.updatePosition(!0,this.pos))}updateKeys(t){const n=this.input,Q=t.key.toLowerCase();this.xPos=n.key_x_pos.includes(Q),this.xNeg=n.key_x_neg.includes(Q),this.yPos=n.key_y_pos.includes(Q),this.yNeg=n.key_y_neg.includes(Q)}thisKey(t){return this.xPos||this.xNeg||this.yPos||this.yNeg}onkeyrelease(t){this.disabled||(this.updateKeys(t),super.onkeyrelease(t))}onkeyhold(t){this.disabled||(this.updateKeys(t),super.onkeyhold(t))}updateButton(t){const n=this.input;this.xPos=n.button_x_pos.includes(t),this.xNeg=n.button_x_neg.includes(t),this.yPos=n.button_y_pos.includes(t),this.yNeg=n.button_y_neg.includes(t)}onbuttonhold(t,n){this.disabled||(this.updateButton(n),super.onbuttonhold(t,n))}onbuttonrelease(t,n){this.disabled||(this.updateButton(n),super.onbuttonrelease(t,n))}onupdate(t){if(this.disabled||!this.gamepadActive||!B5(this.input,t))return;const n=this.input;let Q=t.axes[n.axes_x],e=t.axes[n.axes_y];if(n.invert_x&&(Q=-Q),n.invert_y&&(e=-e),Math.abs(Q)<n.deadzoneX&&Math.abs(e)<n.deadzoneY){this.updatePosition(!1,[0,0]);return}this.updatePosition(!0,[Q,e])}activateGamepad=()=>{this.disabled||(this.gamepadActive=!0)}}class A3 extends C3{radius;calcPos;constructor(t,n,Q,e,i,l=!1){super(t,e,i,l),this.radius=n,this.calcPos=Q}onrelease(){let t=this.pos[0],n=this.pos[1];(this.xPos||this.xNeg)&&(t=0),(this.yPos||this.yNeg)&&(n=0),!(t==this.pos[0]&&n==this.pos[1])&&(this.calcPos(t*this.radius,n*this.radius),this.pos=[t,n],this.gamepadActive=!0)}onhold(){let t=this.pos[0],n=this.pos[1];this.xPos?t=1:this.xNeg&&(t=-1),this.yPos?n=1:this.yNeg&&(n=-1),!(t==this.pos[0]&&n==this.pos[1])&&(this.pos=[t,n],this.calcPos(t*this.radius,n*this.radius),this.gamepadActive=!1)}}const R3=L=>L;function I5(L,{delay:t=0,duration:n=400,easing:Q=R3}={}){const e=+getComputedStyle(L).opacity;return{delay:t,duration:n,easing:Q,css:i=>`opacity: ${i*e}`}}const I3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path
         stroke="none"
         fill="#7db700"
         d="m 32,20 q 0,5 -3.525,8.475 Q 25,32 20,32 15.025,32 11.5,28.475 8,25 8,20 8,15.025 11.5,11.5 15.025,8 20,8 25,8 28.475,11.5 32,15.025 32,20 m -9,5 h 2 L 21,15 h -2 l -4,10 h 2 l 0.8,-2 h 4.4 L 23,25 M 20,17.5 21.4,21 H 18.6 L 20,17.5"
         id="path4"
         style="stroke-width:0.500001" />
    <path
       stroke="none"
       fill="#7c66e8"
       d="m 40,38 -1.4,1.4 4.6,4.6 -4.6,4.6 1.400001,1.4 4.6,-4.6 4.6,4.6 1.4,-1.4 -4.6,-4.6 4.6,-4.6 -1.4,-1.4 -4.6,4.6 -4.6,-4.6 M 56,44 q 0,5 -3.525,8.475 Q 48.999999,56 43.999999,56 39.024999,56 35.499998,52.475 32,49 32,44 q 0,-4.975 3.499998,-8.5 3.525001,-3.5 8.500001,-3.5 5,0 8.475001,3.5 Q 56,39.025 56,44"
       id="path14"
       style="stroke-width:0.5" />
  </g>
</svg>
`,N3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
  <path
     stroke="none"
     fill="#ef4e29"
     d="m 32,20 q 0,5 -3.525,8.475001 -3.475,3.525 -8.475,3.525 -4.975,0 -8.5,-3.525 Q 8,25 8,20 8,15.025 11.5,11.5 15.025,8 20,8 25,8 28.475,11.5 32,15.025 32,20 m -9.5,-2 q 0,0.425 -0.275,0.7 H 22.2 Q 21.9,19 21.5,19 h -3 v -2 h 3 q 0.4,0 0.675,0.275 l 0.05,0.05 Q 22.5,17.6 22.5,18 m 2,4 q 0,-1.15 -0.75,-2 0.75,-0.85 0.75,-2 0,-1.225 -0.875,-2.1 L 23.6,15.875 Q 22.725,15 21.5,15 h -5 v 10 h 5 q 1.225,0 2.1,-0.875 L 23.625,24.1 Q 24.5,23.225 24.5,22 m -2,0 q 0,0.4 -0.275,0.675 l -0.05,0.05 Q 21.9,23 21.5,23 h -3 v -2 h 3 q 0.4,0 0.7,0.3 h 0.025 Q 22.5,21.575 22.5,22"
     id="path242"
     style="stroke-width:0.5" />
     <path
     stroke="none"
     fill="#ff6666"
     d="m 46.850002,41.175 q 1.15,1.15 1.15,2.825 0,1.674999 -1.15,2.849999 -1.175,1.15 -2.85,1.15 -1.65,0 -2.800001,-1.15 l -0.025,-0.025 q -1.175,-1.175 -1.175,-2.824999 0,-1.65 1.175,-2.825 h 0.025 Q 42.350002,40 44.000002,40 q 1.675,0 2.85,1.175 m 3.15,2.825 q 0,-2.5 -1.75,-4.25 -1.75,-1.75 -4.25,-1.75 -2.475001,0 -4.225001,1.75 -1.775,1.75 -1.775,4.25 0,2.499999 1.775,4.249999 1.75,1.75 4.225001,1.75 2.5,0 4.25,-1.75 1.75,-1.75 1.75,-4.249999 m 6,0 q 0,4.999999 -3.525,8.474999 -3.475,3.525 -8.475,3.525 -4.975001,0 -8.500002,-3.525 Q 32,48.999999 32,44 q 0,-4.975 3.5,-8.5 3.525001,-3.5 8.500002,-3.5 5,0 8.475,3.5 3.525,3.525 3.525,8.5"
     id="path254"
     style="stroke-width:0.5" />
  </g>
</svg>
`,O3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path
     stroke="none"
     fill="#ff69f8"
     d="m 56,43.999999 q 0,4.999999 -3.525,8.474999 -3.475,3.525 -8.475,3.525 -4.975,0 -8.5,-3.525 Q 32,48.999998 32,43.999999 32,39.024999 35.5,35.5 39.025,32 44,32 49,32 52.475,35.5 56,39.024999 56,43.999999 m -18,-6 V 49.999998 H 50 V 37.999999 H 38 m 2,9.999999 v -7.999999 h 8 v 7.999999 h -8"
     id="path287"
     style="stroke-width:0.5" />
    <path
     stroke="none"
     fill="#009feb"
     d="m 32,19.999999 q 0,5 -3.525,8.475 Q 25,31.999998 19.999999,31.999998 15.025,31.999998 11.5,28.474999 8,24.999999 8,19.999999 8,15.025 11.5,11.5 15.025,8 19.999999,8 25,8 28.475,11.5 32,15.025 32,19.999999 M 15.5,16.5 l 2.999999,3.499999 -2.999999,3.5 v 0.5 l 1.124999,1 h 0.575 l 2.8,-3.25 2.825002,3.25 h 0.55 l 1.124999,-1 v -0.5 l -2.999999,-3.5 L 24.5,16.5 V 16 l -1.124999,-1 h -0.55 l -2.825002,3.275 -2.8,-3.275 h -0.575 L 15.5,16 v 0.5"
     id="path299"
     style="stroke-width:0.5" />
  </g>
</svg>
`,q3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path
     stroke="none"
     fill="#40e2a0"
     d="m 56,44 q 0,5 -3.525,8.475 Q 49,56 44,56 39.025,56 35.5,52.475 32,49 32,44 32,39.025 35.5,35.5 39.025,32 44,32 49,32 52.475,35.5 56,39.025 56,44 M 51,49 44,37 37,49 H 51 M 44,40.975 47.525,47 H 40.5 L 44,40.975"
     id="path9"
     style="stroke-width:0.5" /><path
     stroke="none"
     fill="#feb504"
     d="m 32,20 q 0,5 -3.525,8.475 Q 25,32 20,32 15.025,32 11.5,28.475 8,25 8,20 8,15.025 11.5,11.5 15.025,8 20,8 25,8 28.475,11.5 32,15.025 32,20 M 15.5,16.5 19,20.45 V 25 h 2 V 20.45 L 24.5,16.5 V 16 l -1.125,-1 h -0.55 L 20,18.275 17.2,15 H 16.625 L 15.5,16 v 0.5"
     id="path179"
     style="stroke-width:0.5" />
  </g>     
</svg>
`,G3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 M46.25 24.2 L43.5 28.3 40.75 24.2 38.25 25.85 42 31.45 42 38 45 38 45 31.45 48.75 25.85 46.25 24.2 M20 28.75 L20.2 28.3 20.25 28.25 Q20.55 28 21 28 21.45 28 21.8 28.3 L22 28.75 22 31 20 31 20 28.75 M17 28.75 L17 38 20 38 20 34 22 34 22 38 25 38 25 28.75 Q25 27.15 23.75 26.05 22.55 25 21 25 19.4 25 18.25 26.05 L18.2 26.05 Q17 27.15 17 28.75 M37 38 L37 25 34 25 34 32 30 25 27 25 27 38 30 38 30 31 34 38 37 38"/>
  </g>
</svg>`,H3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 M39 26 L39 23 38 22 35 22 25 38 25 41 26 42 29 42 39 26"/>
  </g>
</svg>`,D3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 M30 24 L30 28.6 26.05 26.3 24.05 29.75 28 32.05 24.05 34.3 26.05 37.75 30 35.5 30 40 34 40 34 35.5 37.9 37.75 39.9 34.3 35.95 32.05 39.9 29.75 37.9 26.3 34 28.55 34 24 30 24"/>
  </g>
</svg>`,z3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q9.55 56 8.3 50.8 8 49.55 8 48 L8 16 Q8 14.45 8.3 13.2 9.55 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 33 43 32.7 43.7 32 44 Q31.6 44 31.3 43.7 L29.9 45.1 Q30.8 46 32 46 33.2 46 34.1 45.1 35 44.2 35 43 L35 40.25 35 40 35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,B3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 Q35 42 35 40 L35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,S3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31 22 Q29 22 29 24 L29 26 Q29 28 31 28 L33 28 Q35 28 35 26 L35 24 Q35 22 33 22 L31 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 Q35 42 35 40 L35 38 Q35 36 33 36 L31 36"/>
  </g>
</svg>`,U3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 36 Q29 36 29 38 L29 40 Q29 42 31 42 L33 42 33 43 32.7 43.7 32 44 Q31.6 44 31.3 43.7 L29.9 45.1 Q30.8 46 32 46 33.2 46 34.1 45.1 35 44.2 35 43 L35 40.25 35 40 35 38 Q35 36 33 36 L31 36 M31 22 Q29 22 29 24 L29 26 Q29 28 31 28 L33 28 Q35 28 35 26 L35 24 Q35 22 33 22 L31 22"/>
  </g>
</svg>`,V3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32 26 L36 26 36 22 29 22 28 23 28 41 29 42 36 42 36 38 32 38 32 26"/>
  </g>
</svg>`,X3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32 26 L32 38 28 38 28 42 35 42 36 41 36 23 35 22 28 22 28 26 32 26"/>
  </g>
</svg>`,K3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 30 L34 30 34 24 30 24 30 30 24 30 24 34 30 34 30 40 34 40 34 34 40 34 40 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 52.9 53 54.8 51.1 56 48 56 L16 56 Q12.9 56 11 54.8 8 52.9 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,j3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 30 L24 30 24 34 40 34 40 30"/>
  </g>
</svg>`,W3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q9.55 56 8.3 50.8 8 49.55 8 48 L8 16 Q8 14.45 8.3 13.2 9.55 8 16 8 M27.5 28 Q24 28 21.55 30.65 20.95 31.25 21 32.1 21.05 32.9 21.65 33.5 22.25 34.05 23.1 34 23.9 33.95 24.5 33.35 25.7 32 27.5 32 29.3 32 30.55 33.35 33 36 36.5 36 40 36 42.5 33.35 43.05 32.75 43 31.95 42.95 31.1 42.35 30.55 41.75 29.95 40.95 30 40.1 30.05 39.55 30.65 38.3 32 36.5 32 34.7 32 33.5 30.65 31 28 27.5 28"/>
  </g>
</svg>`,Y3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26 41 L26 37 22 37 22 44 23 45 41 45 42 44 42 37 38 37 38 41 26 41"/>
  </g>
</svg>`,Z3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M36 20 Q34 20 34 22 L34 28 Q34 30 36 30 L38 30 Q40 30 40 28 L40 22 Q40 20 38 20 L36 20 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26 20 Q24 20 24 22 L24 28 Q24 30 26 30 L28 30 Q30 30 30 28 L30 22 Q30 20 28 20 L26 20"/>
  </g>
</svg>`,J3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 16 L48 16 Q56 16 56 24 L56 40 Q56 44.9 53 46.8 51.1 48 48 48 L16 48 Q12.9 48 11 46.8 8 44.9 8 40 L8 24 Q8 16 16 16 M20 32 L26 38 28 38 28 34 44 34 44 30 28 30 28 26 26 26 20 32"/>
  </g>
</svg>`,$3=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 14 L48 14 Q56 14 56 22 L56 41 Q56 49 48 49 L16 49 Q8 49 8 41 L8 22 Q8 14 16 14 M36 42 L36 38 28 38 28 42 36 42 M32 20 L24 28 24 30 28 30 28 36 36 36 36 30 40 30 40 28 32 20"/>
  </g>
</svg>`,t2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44 31 L44 45 47 45 47 31 44 31 M48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 M23 26 L29 32 31 32 31 28 47 28 47 24 31 24 31 20 29 20 23 26 M41 38 L35 32 33 32 33 36 17 36 17 40 33 40 33 44 35 44 41 38 M17 19 L17 33 20 33 20 19 17 19"/>
  </g>
</svg>`,n2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 16 L48 16 Q56 16 56 24 L56 40 Q56 44.9 53 46.8 51.1 48 48 48 L16 48 Q12.9 48 11 46.8 8 44.9 8 40 L8 24 Q8 16 16 16 M32 24 L24 32 24 34 28 34 28 40 36 40 36 34 40 34 40 32 32 24"/>
  </g>
</svg>`,L2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33"/>
    <path stroke="none" fill="#E73246" d="M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
  </g>
</svg>`,Q2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
    <path stroke="none" fill="#E73246" d="M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33"/>
  </g>
</svg>`,s2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17"/>
    <path stroke="none" fill="#FFFFFF" d="M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
  </g>
</svg>`,e2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M29 17 L35 17 Q39 17 39 21 L39 27 Q39 31 35 31 L29 31 Q25 31 25 27 L25 21 Q25 17 29 17 M45 33 L51 33 Q55 33 55 37 L55 43 Q55 47 51 47 L45 47 Q41 47 41 43 L41 37 Q41 33 45 33 M13 33 L19 33 Q23 33 23 37 L23 43 Q23 47 19 47 L13 47 Q9 47 9 43 L9 37 Q9 33 13 33"/>
    <path stroke="none" fill="#E73246" d="M29 33 L35 33 Q39 33 39 37 L39 43 Q39 47 35 47 L29 47 Q25 47 25 43 L25 37 Q25 33 29 33"/>
  </g>
</svg>`,i2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M36.95 27 L35.95 27 Q35.55 27 35.25 27.3 34.95 27.6 34.95 28 34.95 28.4 35.25 28.7 L35.95 29 35.95 29.25 35.7 29.8 35.7 29.75 34.95 30 34.15 29.75 33.95 29.25 33.95 24.8 Q33.95 24.45 34.2 24.2 L34.15 24.3 Q34.5 24 34.95 24 L35.7 24.3 35.7 24.25 35.95 24.8 Q35.95 25.2 36.25 25.5 36.55 25.8 36.95 25.8 L37.65 25.5 37.95 24.8 Q37.95 23.65 37.05 22.8 L37 22.75 Q36.1 22 34.95 22 33.7 22 32.85 22.75 L32.8 22.8 Q31.95 23.65 31.95 24.8 L31.95 29.25 Q31.95 30.35 32.8 31.2 L32.85 31.3 Q33.7 32 34.95 32 36.1 32 37 31.3 L37.05 31.25 Q37.95 30.35 37.95 29.25 L37.95 28 37.65 27.3 36.95 27 M44 22 L40 22 Q39.6 22 39.3 22.3 39 22.6 39 23 L39 31 Q39 31.4 39.3 31.7 39.6 32 40 32 L44 32 44.7 31.7 45 31 44.7 30.3 Q44.4 30 44 30 L41 30 41 28 44 28 44.7 27.7 45 27 44.7 26.3 Q44.4 26 44 26 L41 26 41 24 44 24 44.7 23.7 45 23 44.7 22.3 Q44.4 22 44 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40.95 35.8 L40.95 42 Q40.95 42.4 41.25 42.7 41.55 43 41.95 43 L42.65 42.7 42.95 42 42.95 35.8 Q42.95 35.45 43.2 35.2 L43.15 35.3 Q43.5 35 43.95 35 L44.7 35.3 44.7 35.25 44.95 35.8 44.95 42 Q44.95 42.4 45.25 42.7 45.55 43 45.95 43 L46.65 42.7 46.95 42 46.95 35.8 Q46.95 34.65 46.05 33.8 L46 33.75 Q45.1 33 43.95 33 42.7 33 41.85 33.75 L41.8 33.8 Q40.95 34.65 40.95 35.8 M31.95 34.15 L32.95 42.15 33.2 42.7 33.75 43 34.35 42.95 34.8 42.55 35.95 40.8 37.15 42.55 37.6 42.95 38.2 43 38.7 42.7 38.95 42.15 39.95 34.15 39.75 33.4 Q39.5 33.05 39.1 33 38.65 32.95 38.35 33.2 38 33.45 37.95 33.9 L37.3 39.2 36.8 38.45 36.3 38.05 35.65 38.05 35.15 38.45 34.65 39.2 33.95 33.9 33.6 33.2 Q33.25 32.95 32.85 33 32.4 33.05 32.15 33.4 31.9 33.7 31.95 34.15 M21.1 26 L20 26 20 24 21.05 24 21.7 24.25 22 25 21.75 25.7 21.7 25.7 21.45 25.9 21.1 26 M21.1 28 L22.35 27.7 22.45 27.65 23.1 27.15 23.1 27.1 Q24 26.25 24 25 24 23.75 23.1 22.85 22.25 22 21.05 22 L19 22 Q18.6 22 18.3 22.3 18 22.6 18 23 L18 31 Q18 31.4 18.3 31.7 18.6 32 19 32 L19.7 31.7 20 31 20 28 21.1 28 M27 24.8 L27.25 24.2 27.2 24.3 Q27.55 24 28 24 28.45 24 28.75 24.3 L28.75 24.25 29 24.8 29 27 27 27 27 24.8 M25 24.8 L25 31 Q25 31.4 25.3 31.7 25.6 32 26 32 L26.7 31.7 27 31 27 29 29 29 29 31 Q29 31.4 29.3 31.7 L30 32 Q30.4 32 30.7 31.7 L31 31 31 24.8 Q31 23.65 30.1 22.8 L30.05 22.75 Q29.15 22 28 22 26.75 22 25.9 22.75 L25.85 22.8 Q25 23.65 25 24.8 M25.8 33.8 Q24.95 34.65 24.95 35.8 L24.95 40.25 Q24.95 41.35 25.8 42.2 L25.85 42.3 Q26.7 43 27.95 43 29.1 43 30 42.3 L30.05 42.25 Q30.95 41.35 30.95 40.25 L30.95 35.8 Q30.95 34.65 30.05 33.8 L30 33.75 Q29.1 33 27.95 33 26.7 33 25.85 33.75 L25.8 33.8 M26.95 35.8 Q26.95 35.45 27.2 35.2 L27.15 35.3 Q27.5 35 27.95 35 L28.7 35.3 28.7 35.25 28.95 35.8 28.95 40.25 28.7 40.8 28.7 40.75 27.95 41 27.15 40.75 26.95 40.25 26.95 35.8 M23.05 33.75 Q22.15 33 21.05 33 L19 33 Q18.6 33 18.3 33.3 18 33.6 18 34 L18 42 Q18 42.4 18.3 42.7 18.6 43 19 43 L21.05 43 Q22.15 43 23.05 42.3 L23.1 42.25 Q24 41.35 24 40.25 L24 35.8 Q24 34.65 23.1 33.8 L23.05 33.75 M21.05 35 Q21.45 35 21.75 35.3 L21.75 35.25 22 35.8 22 40.25 21.75 40.8 21.75 40.75 21.05 41 20 41 20 35 21.05 35"/>
  </g>
</svg>`,o2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M37 27 L36 27 Q35.6 27 35.3 27.3 35 27.6 35 28 L35.3 28.7 Q35.6 29 36 29 L36 29.25 35.75 29.8 35.75 29.75 35 30 34.2 29.75 34 29.25 34 24.8 Q34 24.45 34.25 24.2 L34.2 24.3 Q34.55 24 35 24 35.45 24 35.75 24.3 L35.75 24.25 36 24.8 Q36 25.2 36.3 25.5 L37 25.8 37.7 25.5 38 24.8 Q38 23.65 37.1 22.8 L37.05 22.75 Q36.15 22 35 22 33.75 22 32.9 22.75 L32.85 22.8 Q32 23.65 32 24.8 L32 29.25 Q32 30.35 32.85 31.2 L32.9 31.3 Q33.75 32 35 32 36.15 32 37.05 31.3 L37.1 31.25 Q38 30.35 38 29.25 L38 28 37.7 27.3 Q37.4 27 37 27 M44 26 L41 26 41 24 44 24 44.7 23.7 45 23 44.7 22.3 Q44.4 22 44 22 L40 22 Q39.6 22 39.3 22.3 39 22.6 39 23 L39 31 Q39 31.4 39.3 31.7 39.6 32 40 32 L44 32 44.7 31.7 45 31 44.7 30.3 Q44.4 30 44 30 L41 30 41 28 44 28 44.7 27.7 45 27 44.7 26.3 Q44.4 26 44 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M21.1 26 L20 26 20 24 21.05 24 21.7 24.25 22 25 21.75 25.7 21.7 25.7 21.45 25.9 21.1 26 M21.1 28 L22.35 27.7 22.45 27.65 23.1 27.15 23.1 27.1 Q24 26.25 24 25 24 23.75 23.1 22.85 22.25 22 21.05 22 L19 22 Q18.6 22 18.3 22.3 18 22.6 18 23 L18 31 Q18 31.4 18.3 31.7 18.6 32 19 32 L19.7 31.7 20 31 20 28 21.1 28 M27 24.8 L27.25 24.2 27.2 24.3 Q27.55 24 28 24 28.45 24 28.75 24.3 L28.75 24.25 29 24.8 29 27 27 27 27 24.8 M25 24.8 L25 31 Q25 31.4 25.3 31.7 25.6 32 26 32 L26.7 31.7 27 31 27 29 29 29 29 31 Q29 31.4 29.3 31.7 L30 32 Q30.4 32 30.7 31.7 L31 31 31 24.8 Q31 23.65 30.1 22.8 L30.05 22.75 Q29.15 22 28 22 26.75 22 25.9 22.75 L25.85 22.8 Q25 23.65 25 24.8 M28.1 37 L27 37 27 35 28.05 35 28.7 35.25 29 36 28.75 36.7 28.7 36.7 28.45 36.9 28.1 37 M28.1 39 L29.35 38.7 29.45 38.65 30.1 38.15 30.1 38.1 Q31 37.25 31 36 31 34.75 30.1 33.85 29.25 33 28.05 33 L26 33 Q25.6 33 25.3 33.3 25 33.6 25 34 L25 42 Q25 42.4 25.3 42.7 25.6 43 26 43 L26.7 42.7 27 42 27 39 28.1 39 M20 40.2 L20 34 19.7 33.3 Q19.4 33 19 33 18.6 33 18.3 33.3 18 33.6 18 34 L18 40.2 Q18 41.35 18.85 42.2 L18.9 42.3 Q19.75 43 21 43 22.15 43 23.05 42.3 L23.1 42.25 Q24 41.35 24 40.2 L24 34 23.7 33.3 Q23.4 33 23 33 22.6 33 22.3 33.3 22 33.6 22 34 L22 40.2 21.75 40.8 21.75 40.75 21 41 20.2 40.75 20 40.2"/>
  </g>
</svg>`,l2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39 25 L39 38 41.5 38 Q43.8 38 45.35 36.4 L45.4 36.35 Q47 34.8 47 32.5 L47 30.5 Q47 28.2 45.4 26.7 L45.35 26.6 Q43.8 25 41.5 25 L39 25 M42 28.05 L43.2 28.75 43.25 28.75 43.3 28.8 Q44 29.45 44 30.5 L44 32.5 Q44 33.55 43.3 34.2 L43.2 34.3 Q42.7 34.8 42 34.95 L42 28.05 M17 25 L17 38 25 38 25 35 20 35 20 33 25 33 25 30 20 30 20 28 25 28 25 25 17 25 M37 38 L37 25 34 25 34 32 30 25 27 25 27 38 30 38 30 31 34 38 37 38"/>
  </g>
</svg>`,w2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 28 L40 36 Q40 36.4 40.3 36.7 L41 37 45 37 45.7 36.7 46 36 45.7 35.3 Q45.4 35 45 35 L42 35 42 33 45 33 45.7 32.7 46 32 45.7 31.3 Q45.4 31 45 31 L42 31 42 29 45 29 45.7 28.7 46 28 45.7 27.3 Q45.4 27 45 27 L41 27 40.7 27.05 Q40.45 27.1 40.3 27.3 40 27.6 40 28 M23 36 L23 28 22.7 27.3 Q22.55 27.1 22.3 27.05 L22 27 21.7 27.05 Q21.45 27.1 21.3 27.3 21 27.6 21 28 L21 31 19 31 19 28 18.7 27.3 Q18.55 27.1 18.3 27.05 L18 27 17.7 27.05 Q17.45 27.1 17.3 27.3 17 27.6 17 28 L17 36 Q17 36.4 17.3 36.7 L18 37 Q18.4 37 18.7 36.7 L19 36 19 33 21 33 21 36 Q21 36.4 21.3 36.7 21.6 37 22 37 L22.7 36.7 23 36 M39 36 L39 28 38.7 27.3 Q38.55 27.1 38.3 27.05 L38 27 37.7 27.05 Q37.45 27.1 37.3 27.3 L35 29.6 32.7 27.3 Q32.55 27.1 32.3 27.05 L32 27 31.7 27.05 Q31.45 27.1 31.3 27.3 31 27.6 31 28 L31 36 Q31 36.4 31.3 36.7 31.6 37 32 37 L32.7 36.7 33 36 33 30.4 34.3 31.7 Q34.6 32 35 32 L35.7 31.7 37 30.4 37 36 Q37 36.4 37.3 36.7 37.6 37 38 37 L38.7 36.7 39 36 M24.85 27.8 Q24 28.65 24 29.8 L24 34.25 Q24 35.35 24.85 36.2 L24.9 36.3 Q25.75 37 27 37 28.15 37 29.05 36.3 L29.1 36.25 Q30 35.35 30 34.25 L30 29.8 Q30 28.65 29.1 27.8 L29.05 27.75 Q28.4 27.2 27.6 27.05 L27 27 26.4 27.05 Q25.55 27.2 24.9 27.75 L24.85 27.8 M26 29.8 Q26 29.45 26.25 29.2 L26.2 29.3 Q26.55 29 27 29 27.45 29 27.75 29.3 L27.75 29.25 28 29.8 28 34.25 27.75 34.8 27.75 34.75 27 35 26.2 34.75 26 34.25 26 29.8"/>
  </g>
</svg>`,g2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M38.1 32.1 Q39 31.25 39 30 39 28.75 38.1 27.85 37.25 27 36.05 27 L34 27 Q33.6 27 33.3 27.3 33 27.6 33 28 L33 36 Q33 36.4 33.3 36.7 L34 37 Q34.4 37 34.7 36.7 L35 36 35 33 35.4 33 37.1 36.45 Q37.3 36.8 37.7 36.95 L38.45 36.9 38.95 36.35 38.9 35.55 37.45 32.65 38.1 32.15 38.1 32.1 M36.1 31 L35 31 35 29 36.05 29 Q36.45 29 36.7 29.25 L37 30 36.75 30.7 36.7 30.7 36.45 30.9 36.1 31 M40 28 L40 36 Q40 36.4 40.3 36.7 L41 37 45 37 45.7 36.7 46 36 45.7 35.3 Q45.4 35 45 35 L42 35 42 28 41.7 27.3 Q41.4 27 41 27 40.6 27 40.3 27.3 40 27.6 40 28 M56 22 L56 42 Q56 46.9 53 48.8 51.1 50 48 50 L16 50 Q12.9 50 11 48.8 8 46.9 8 42 L8 22 Q8 14 16 14 L48 14 Q56 14 56 22 M24.1 36.25 Q25 35.35 25 34.25 L24.7 33.55 Q24.4 33.25 24 33.25 23.6 33.25 23.3 33.55 23 33.85 23 34.25 L22.75 34.8 22.75 34.75 22 35 21.2 34.75 21 34.25 21 29.8 21.25 29.2 21.2 29.3 Q21.55 29 22 29 22.45 29 22.75 29.3 L22.75 29.25 23 29.8 Q23 30.2 23.3 30.5 23.6 30.8 24 30.8 L24.7 30.5 25 29.8 Q25 28.65 24.1 27.8 L24.05 27.75 Q23.15 27 22 27 20.75 27 19.9 27.75 L19.85 27.8 Q19 28.65 19 29.8 L19 34.25 Q19 35.35 19.85 36.2 L19.9 36.3 Q20.75 37 22 37 23.15 37 24.05 36.3 L24.1 36.25 M27 29 L28 29 28 36 Q28 36.4 28.3 36.7 28.6 37 29 37 L29.7 36.7 30 36 30 29 31 29 31.7 28.7 32 28 31.7 27.3 Q31.4 27 31 27 L27 27 Q26.6 27 26.3 27.3 26 27.6 26 28 L26.3 28.7 27 29"/>
  </g>
</svg>`,h2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 40 8 38.95 8 36 Q8 28 16 28 L28 28 28 16 Q28 8 36 8 L38.95 8 40 8 48 8 M29 41 L35 47 37 47 37 43 44.1 43 Q45.3 42.95 46.1 42.1 46.95 41.3 47 40.1 L47 29 43 29 43 39 37 39 37 35 35 35 29 41"/>
  </g>
</svg>`,r2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 42 L42 42 34 22 30 22 22 42 26 42 27.6 38 36.4 38 38 42 M32 27 L34.8 34 29.2 34 32 27"/>
  </g>
</svg>`,a2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M34 22 L25 22 24 23 24 41 25 42 34 42 Q36.45 42 38.2 40.25 L38.25 40.2 Q40 38.45 40 36 40 33.65 38.45 32 40 30.3 40 28 40 25.5 38.25 23.75 L38.2 23.7 Q36.45 22 34 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 36 28.8 35.45 29.35 L35.35 29.45 Q34.8 29.95 34.15 30 L28 30 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 38 L28 34 34.15 34 Q34.85 34.05 35.4 34.6 L35.45 34.6 Q36 35.15 36 36 36 36.8 35.45 37.35 L35.35 37.45 Q34.8 38 34 38 L28 38"/>
  </g>
</svg>`,F2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M24 30 L24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 40.95 L37.65 39.65 Q38.95 38.35 39.55 36.8 L35.8 35.35 34.85 36.85 Q33.65 38 32 38 30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 30 Q28 28.35 29.2 27.2 30.35 26 32 26 33.65 26 34.85 27.2 L35.8 28.7 39.55 27.2 Q38.95 25.65 37.65 24.35 35.3 22 32 22 28.7 22 26.35 24.35 24 26.7 24 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,d2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 26 L30.15 26 Q32.5 26.05 34.25 27.8 36 29.55 36 32 36 34.45 34.25 36.25 32.5 37.95 30.15 38 L28 38 28 26 M24 22 L24 42 30.25 42 Q34.25 41.9 37.1 39.1 L38.05 38 Q40 35.4 40 32 40 28.55 38.05 26 L37.1 24.95 Q34.25 22.1 30.25 22 L24 22"/>
  </g>
</svg>`,p2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M24 22 L24 42 40 42 40 38 28 38 28 34 40 34 40 30 28 30 28 26 40 26 40 22 24 22 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,x2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 22 L24 42 28 42 28 34 40 34 40 30 28 30 28 26 40 26 40 22 24 22"/>
  </g>
</svg>`,f2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39.25 24.8 Q36.45 22 32.5 22 28.55 22 25.8 24.8 23 27.55 23 31.5 L23 32.85 23.3 34.95 Q23.85 37.3 25.8 39.25 28.55 42 32.5 42 36.45 42 39.25 39.25 41.1 37.3 41.75 35 L41.8 34.85 42 32.85 42 32 41 31 31 31 31 35 37.45 35 36.4 36.4 Q34.75 38 32.5 38 30.25 38 28.65 36.4 27.55 35.3 27.2 34 L27 32.65 27 31.5 Q27 29.25 28.65 27.65 30.25 26 32.5 26 34.75 26 36.4 27.65 L36.85 28.15 39.7 25.3 39.25 24.8"/>
  </g>
</svg>`,k2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q51.45 8 53.45 9.5 56 11.45 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 11.45 10.6 9.5 12.55 8 16 8 M24 22 L24 42 28 42 28 34 36 34 36 42 40 42 40 22 36 22 36 30 28 30 28 22 24 22"/>
  </g>
</svg>`,v2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M30 22 L30 42 34 42 34 22 30 22"/>
  </g>
</svg>`,c2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M37 34.2 L37 22 33 22 33 34.1 Q32.95 35.7 31.85 36.85 30.65 38 29 38 L27 38 27 42 29.25 42 Q31.3 41.95 33 40.95 L34.65 39.65 Q36.95 37.35 37 34.2"/>
  </g>
</svg>`,M2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 34 L31 34 37 42 40 42 40 39 34.75 32 40 25 40 22 37 22 31 30 28 30 28 22 24 22 24 42 28 42 28 34"/>
  </g>
</svg>`,_2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 42 L40 42 40 38 28 38 28 22 24 22 24 42"/>
  </g>
</svg>`,m2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M22 42 L26 42 26 32 31 42 33 42 38 32 38 42 42 42 42 22 38 22 32 34 26 22 22 22 22 42 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,u2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 42 L28 30 36 42 40 42 40 22 36 22 36 34 28 22 24 22 24 42 28 42"/>
  </g>
</svg>`,y2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 32 Q40 27.85 37.65 24.9 35.3 22 32 22 28.65 22 26.3 24.9 24 27.85 24 32 24 36.15 26.3 39.1 28.65 42 32 42 35.3 42 37.65 39.1 40 36.15 40 32 M34.55 27.4 L34.55 27.45 Q36 29.35 36 32 36 34.65 34.55 36.6 33.45 37.9 32 38 30.5 37.9 29.4 36.6 28 34.65 28 32 28 29.35 29.4 27.45 30.5 26.1 32 26 33.45 26.1 34.55 27.4 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,b2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M25 22 L24 23 24 42 28 42 28 36 34 36 34.2 36 Q35.75 35.95 37 35.2 L38.1 34.4 38.1 34.35 38.2 34.25 38.25 34.2 39.6 32.3 40 30 40 28 Q40 25.5 38.25 23.75 L38.2 23.7 37 22.8 Q35.75 22.05 34.2 22 L25 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 L36 30.4 35.45 31.35 35.35 31.45 34.9 31.8 34.05 32 28 32 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,E2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M28 30 Q28 28.35 29.2 27.2 30.35 26 32 26 33.65 26 34.85 27.2 36 28.35 36 30 L36 34.1 35.9 34.9 35 34 32 34 32 37 32.9 37.9 32 38 Q30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 30 M24 30 L24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 41 L37 42 40 42 40 39 39 38 Q39.95 36.25 40 34.2 L40 30 Q40 26.7 37.65 24.35 35.3 22 32 22 28.7 22 26.35 24.35 24 26.7 24 30"/>
  </g>
</svg>`,T2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M25 22 L24 23 24 42 28 42 28 36 34 36 34.5 36 36 42 40 42 38.1 34.35 38.2 34.25 38.25 34.2 Q40 32.45 40 30 L40 28 Q40 25.5 38.25 23.75 L38.2 23.7 37 22.8 Q35.75 22.05 34.2 22 L25 22 M28 26 L34 26 Q34.8 26 35.4 26.6 L35.45 26.6 Q36 27.15 36 28 L36 30 Q36 30.8 35.45 31.35 L35.35 31.45 Q34.8 32 34 32 L28 32 28 26 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,P2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M34 30 L30 30 Q29.2 30 28.6 29.4 28 28.8 28 28 28 27.2 28.55 26.65 L28.65 26.55 Q29.2 26 30 26 L34.05 26 Q34.8 26 35.35 26.55 L35.45 26.65 Q36 27.2 36 28 L39.85 26.5 39.7 26 Q39.25 24.8 38.25 23.8 L38.2 23.75 Q36.5 22.05 34.15 22 L30 22 Q27.55 22 25.8 23.75 L25.75 23.8 Q24 25.55 24 28 24 30.5 25.75 32.25 27.5 34 30 34 L34 34 Q34.8 34 35.4 34.6 36 35.2 36 36 36 36.8 35.45 37.35 L35.35 37.45 Q34.8 38 34 38 L29.95 38 Q29.2 38 28.65 37.45 L28.55 37.35 Q28 36.8 28 36 L24.2 37.55 24.35 38 Q24.75 39.2 25.75 40.2 L25.8 40.25 Q27.5 41.95 29.85 42 L34 42 Q36.45 42 38.2 40.25 L38.25 40.2 Q40 38.45 40 36 40 33.5 38.25 31.75 36.5 30 34 30 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8"/>
  </g>
</svg>`,C2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 22 L24 22 24 26 30 26 30 42 34 42 34 26 40 26 40 22"/>
  </g>
</svg>`,A2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 22 L36 22 36 34.1 Q35.95 35.7 34.85 36.85 33.65 38 32 38 30.35 38 29.2 36.85 28.05 35.7 28 34.1 L28 22 24 22 24 34.2 Q24.05 37.35 26.35 39.65 L28 40.95 Q29.8 42 32 42 34.2 42 36 40.95 L37.65 39.65 Q39.95 37.35 40 34.2 L40 22"/>
  </g>
</svg>`,R2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 56 Q8 56 8 48 L8 16 Q8 8 16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 M38 22 L32 37 26 22 22 22 30 42 34 42 42 22 38 22"/>
  </g>
</svg>`,I2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M31 22 L28 31 25 22 21 22 21 24 27 42 29 42 32 33 35 42 37 42 43 24 43 22 39 22 36 31 33 22 31 22"/>
  </g>
</svg>`,N2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 25 L29 32 23 39 23 40 25.25 42 26.4 42 32 35.5 37.65 42 38.75 42 41 40 41 39 35 32 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,O2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 25 L30 32.9 30 42 34 42 34 32.9 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,q2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M24 22 L24 26 34 26 24 38 24 42 40 42 40 38 30 38 40 26 40 22 24 22"/>
  </g>
</svg>`,G2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M36.95 25.55 Q34.9 23.5 32 23.5 29.15 23.5 27.05 25.5 L27 25.55 Q25 27.65 25 30.5 L25 33.5 Q25 36.4 27.05 38.45 29.15 40.5 32 40.5 34.85 40.5 36.9 38.45 L36.95 38.4 Q39 36.35 39 33.5 L39 30.5 Q39 27.65 36.95 25.55 M32 27.5 Q33.2 27.5 34.1 28.4 35 29.25 35 30.5 L35 33.5 Q35 34.7 34.1 35.55 L34.05 35.6 Q33.2 36.5 32 36.5 30.75 36.5 29.9 35.6 29 34.7 29 33.5 L29 30.5 Q29 29.3 29.85 28.4 L29.9 28.35 Q30.8 27.5 32 27.5"/>
  </g>
</svg>`,H2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M35 24 L31 24 28 27 28 28.95 31 28.95 31 33.85 31 33.95 31 41 35 41 35 24"/>
  </g>
</svg>`,D2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M33.5 28.4 Q34.25 29.15 33 30.45 L26 37 26 41 30.85 41 30.95 41 38 41 38 37 32 37 36.45 32.55 Q38.65 30.35 37.4 27 L36.4 25.65 36.35 25.6 Q34.75 24 32.5 24 L30.85 24 Q28.9 24.05 27.5 25.4 L27.4 25.5 Q26.35 26.6 26.1 28 L26 29 30 29 Q30 28.6 30.3 28.3 30.55 28.05 30.85 28 L30.95 28 32.5 28 Q33.1 28 33.5 28.4"/>
  </g>
</svg>`,z2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 35.75 Q38.05 33.9 36.75 32.5 38.05 31.1 38 29.25 38.05 27.05 36.05 25.4 L36.1 25.5 Q34.4 24 32 24 29.6 24 27.9 25.45 26.05 26.95 26 29 L30.1 29 30.45 28.55 30.45 28.5 Q31.1 28 32 28 32.9 28 33.5 28.5 L33.55 28.55 Q33.95 28.85 34 29.25 L33.6 30 Q33 30.5 32.15 30.5 L30 30.5 30 34.5 32.15 34.5 32.7 34.55 Q33.2 34.65 33.6 35 L34 35.75 33.55 36.45 33.5 36.5 Q32.9 37 32 37 31.1 37 30.45 36.5 L30.45 36.45 30.1 36 26 36 Q26.05 38.05 27.9 39.55 29.6 41 32 41 34.4 41 36.1 39.5 L36.05 39.6 Q38.05 37.95 38 35.75"/>
  </g>
</svg>`,B2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 24 L34 24 34 30 30 30 30 24 26 24 26 32.05 Q26 32.85 26.55 33.4 27.15 34 27.95 34 L34 34 34 41 38 41 38 24"/>
  </g>
</svg>`,S2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M34.5 36.6 Q34.1 37 33.5 37 L30.95 37 Q30.6 37 30.3 36.7 30 36.4 30 36 L26 36 26.1 37 Q26.35 38.4 27.4 39.5 L27.5 39.6 Q28.9 40.95 30.85 41 L33.5 41 Q35.75 41 37.35 39.4 L37.4 39.35 Q38.8 37.95 39 36 L39 35.5 Q39 33.2 37.4 31.6 35.8 30 33.5 30 L30 30 30 28 39 28 39 24 26 24 26 34 33.5 34 Q34.1 34 34.55 34.45 35 34.9 35 35.5 35 36.1 34.6 36.5 L34.5 36.6"/>
  </g>
</svg>`,U2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M37.25 30.75 Q35.5 29 33 29 L35 24 30 24 26.15 33.65 26.1 34 26 35 Q26 37.5 27.75 39.25 29.5 41 32 41 L33 41 Q35.45 41 37.2 39.25 L37.25 39.2 Q39 37.45 39 35 39 32.5 37.25 30.75 M33 33 Q33.8 33 34.4 33.6 35 34.2 35 35 35 35.8 34.45 36.35 L34.35 36.45 Q33.8 37 33 37 L32 37 Q31.2 37 30.6 36.4 30 35.8 30 35 30 34.45 30.25 34 L30.55 33.6 30.6 33.55 31.35 33.1 32 33 33 33"/>
  </g>
</svg>`,V2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M33 41 L38 28 38 24 25 24 25 28 33 28 28 41 33 41"/>
  </g>
</svg>`,X2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M32.5 41 Q34.75 41 36.35 39.4 L36.4 39.35 Q37.8 37.95 38 36 L38 35.5 Q38 33.6 36.9 32.2 38 30.85 38 29 38 26.95 36.6 25.5 L36.5 25.4 Q35.05 24 33.05 24 L29.95 24 28.65 24.2 Q27.45 24.5 26.5 25.4 L26.4 25.5 Q25 26.95 25 29 25 30.85 26.1 32.2 25 33.6 25 35.5 L25 36 Q25.2 37.95 26.6 39.35 L26.65 39.4 Q28.25 41 30.5 41 L32.5 41 M30 30 L29.3 29.7 Q29 29.4 29 29 29 28.6 29.3 28.3 29.6 28 29.95 28 L33.05 28 Q33.4 28 33.7 28.3 L34 29 33.7 29.7 33 30 30 30 M33.5 36.6 Q33.1 37 32.5 37 L30.5 37 Q29.9 37 29.5 36.6 L29.4 36.5 Q29 36.1 29 35.5 29 34.9 29.45 34.45 29.9 34 30.5 34 L32.55 34 Q33.1 34 33.55 34.45 34 34.9 34 35.5 34 36.1 33.6 36.5 L33.5 36.6"/>
  </g>
</svg>`,K2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M26.75 34.25 Q28.5 36 31 36 L29 41 34 41 37.85 31.35 37.9 31 38 30 Q38 27.5 36.25 25.75 34.5 24 32 24 L31 24 Q28.55 24 26.8 25.75 L26.75 25.8 Q25 27.55 25 30 25 32.5 26.75 34.25 M31 32 Q30.2 32 29.6 31.4 29 30.8 29 30 29 29.2 29.55 28.65 L29.65 28.55 Q30.2 28 31 28 L32 28 Q32.8 28 33.4 28.6 34 29.2 34 30 L33.75 31 33.45 31.4 33.4 31.45 32.65 31.9 32 32 31 32"/>
  </g>
</svg>`,j2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M43 24 L39 24 36 27 36 28.95 39 28.95 39 33.85 39 33.95 39 41 43 41 43 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M25 41 L25 35 32 35 32 31 28.15 31 28.05 31 25 31 25 28 32 28 32 24 28.15 24 28.05 24 21 24 21 33.85 21 33.95 21 41 25 41"/>
  </g>
</svg>`,W2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 41 L23 35 30 35 30 31 23 31 23 28 30 28 30 24 24.15 24 24.05 24 19 24 19 33.85 19 33.95 19 41 23 41 M40.5 28.4 Q41.25 29.15 40 30.45 L33 37 33 41 37.85 41 37.95 41 45 41 45 37 39 37 43.45 32.55 Q45.65 30.35 44.4 27 L43.4 25.65 43.35 25.6 43.25 25.5 Q41.7 24 39.5 24 L37.85 24 Q35.9 24.05 34.5 25.4 L34.4 25.5 Q33.35 26.6 33.1 28 L33 29 37 29 Q37 28.6 37.3 28.3 37.55 28.05 37.85 28 L37.95 28 39.5 28 Q40.1 28 40.5 28.4"/>
  </g>
</svg>`,Y2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M45 35.75 Q45.05 33.9 43.75 32.5 45.05 31.1 45 29.25 45.05 27.05 43.05 25.4 L43.1 25.5 Q41.4 24 39 24 36.6 24 34.9 25.45 33.05 26.95 33 29 L37.1 29 37.45 28.55 37.45 28.5 Q38.1 28 39 28 39.9 28 40.5 28.5 L40.55 28.55 41 29.25 40.6 30 Q40 30.5 39.15 30.5 L37 30.5 37 34.5 39.15 34.5 39.7 34.55 Q40.2 34.65 40.6 35 L41 35.75 40.55 36.45 40.5 36.5 Q39.9 37 39 37 38.1 37 37.45 36.5 L37.45 36.45 37.1 36 33 36 Q33.05 38.05 34.9 39.55 36.6 41 39 41 41.4 41 43.1 39.5 L43.05 39.6 Q45.05 37.95 45 35.75 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,Z2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M45 24 L41 24 41 30 37 30 37 24 33 24 33 32.05 Q33 32.85 33.55 33.4 34.15 34 34.95 34 L41 34 41 41 45 41 45 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,J2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M41.5 36.6 Q41.1 37 40.5 37 L37.95 37 37.3 36.7 Q37 36.4 37 36 L33 36 33.1 37 Q33.35 38.4 34.4 39.5 L34.5 39.6 Q35.9 40.95 37.85 41 L40.5 41 Q42.75 41 44.35 39.4 L44.4 39.35 Q45.8 37.95 46 36 L46 35.5 Q46 33.2 44.4 31.6 42.8 30 40.5 30 L37 30 37 28 46 28 46 24 33 24 33 34 40.5 34 Q41.1 34 41.55 34.45 42 34.9 42 35.5 42 36.1 41.6 36.5 L41.5 36.6 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,$2=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.25 30.75 Q42.5 29 40 29 L42 24 37 24 33.15 33.65 33.1 34 33 35 Q33 37.5 34.75 39.25 36.5 41 39 41 L40 41 Q42.45 41 44.2 39.25 L44.25 39.2 Q46 37.45 46 35 46 32.5 44.25 30.75 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M40 33 Q40.8 33 41.4 33.6 42 34.2 42 35 42 35.8 41.45 36.35 L41.35 36.45 Q40.8 37 40 37 L39 37 Q38.2 37 37.6 36.4 37 35.8 37 35 37 34.45 37.25 34 L37.55 33.6 37.6 33.55 Q37.95 33.25 38.35 33.1 L39 33 40 33 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,t4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M41 41 L46 28 46 24 33 24 33 28 41 28 36 41 41 41 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,n4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M38 30 Q37.6 30 37.3 29.7 37 29.4 37 29 37 28.6 37.3 28.3 37.6 28 37.95 28 L41.05 28 Q41.4 28 41.7 28.3 L42 29 41.7 29.7 41 30 38 30 M40.5 41 Q42.75 41 44.35 39.4 L44.4 39.35 Q45.8 37.95 46 36 L46 35.5 Q46 33.6 44.9 32.2 46 30.85 46 29 46 26.95 44.6 25.5 L44.5 25.4 Q43.05 24 41.05 24 L37.95 24 36.65 24.2 Q35.45 24.5 34.5 25.4 L34.4 25.5 Q33 26.95 33 29 33 30.85 34.1 32.2 33 33.6 33 35.5 L33 36 Q33.2 37.95 34.6 39.35 L34.65 39.4 Q36.25 41 38.5 41 L40.5 41 M41.5 36.6 Q41.1 37 40.5 37 L38.5 37 Q37.9 37 37.5 36.6 L37.4 36.5 Q37 36.1 37 35.5 37 34.9 37.45 34.45 37.9 34 38.5 34 L40.55 34 Q41.1 34 41.55 34.45 42 34.9 42 35.5 42 36.1 41.6 36.5 L41.5 36.6 M22 41 L22 35 29 35 29 31 25.15 31 25.05 31 22 31 22 28 29 28 29 24 25.15 24 25.05 24 18 24 18 33.85 18 33.95 18 41 22 41"/>
  </g>
</svg>`,L4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M39 32 Q38.2 32 37.6 31.4 37 30.8 37 30 37 29.2 37.55 28.65 L37.65 28.55 Q38.2 28 39 28 L40 28 Q40.8 28 41.4 28.6 42 29.2 42 30 L41.75 31 41.45 31.4 41.4 31.45 40.65 31.9 40 32 39 32 M34.75 34.25 Q36.5 36 39 36 L37 41 42 41 45.85 31.35 45.9 31 46 30 Q46 27.5 44.25 25.75 42.5 24 40 24 L39 24 Q36.55 24 34.8 25.75 L34.75 25.8 Q33 27.55 33 30 33 32.5 34.75 34.25 M23 41 L23 35 30 35 30 31 26.15 31 26.05 31 23 31 23 28 30 28 30 24 26.15 24 26.05 24 19 24 19 33.85 19 33.95 19 41 23 41"/>
  </g>
</svg>`,Q4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M43 28 Q44.2 28 45.1 28.9 46 29.75 46 31 L46 34 Q46 35.2 45.1 36.05 L45.05 36.1 Q44.2 37 43 37 41.75 37 40.9 36.1 40 35.2 40 34 L40 31 Q40 29.8 40.85 28.9 L40.9 28.85 Q41.8 28 43 28 M47.95 26.05 Q45.9 24 43 24 40.15 24 38.05 26 L38 26.05 Q36 28.15 36 31 L36 34 Q36 36.9 38.05 38.95 40.15 41 43 41 45.85 41 47.9 38.95 L47.95 38.9 Q50 36.85 50 34 L50 31 Q50 28.15 47.95 26.05 M34 24 L30 24 27 27 27 28.95 30 28.95 30 33.85 30 33.95 30 41 34 41 34 24 M18 41 L18 35 25 35 25 31 21.15 31 21.05 31 18 31 18 28 25 28 25 24 21.15 24 21.05 24 14 24 14 33.85 14 33.95 14 41 18 41"/>
  </g>
</svg>`,s4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M47 24 L43 24 40 27 40 28.95 43 28.95 43 33.85 43 33.95 43 41 47 41 47 24 M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M21 41 L21 35 28 35 28 31 24.15 31 24.05 31 21 31 21 28 28 28 28 24 24.15 24 24.05 24 17 24 17 33.85 17 33.95 17 41 21 41 M38 24 L34 24 31 27 31 28.95 34 28.95 34 33.85 34 33.95 34 41 38 41 38 24"/>
  </g>
</svg>`,e4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 8 L48 8 Q56 8 56 16 L56 48 Q56 56 48 56 L16 56 Q8 56 8 48 L8 16 Q8 8 16 8 M34 24 L30 24 27 27 27 28.95 30 28.95 30 33.85 30 33.95 30 41 34 41 34 24 M18 41 L18 35 25 35 25 31 21.15 31 21.05 31 18 31 18 28 25 28 25 24 21.15 24 21.05 24 14 24 14 33.85 14 33.95 14 41 18 41 M44.5 28.4 Q45.25 29.15 44 30.45 L37 37 37 41 41.85 41 41.95 41 49 41 49 37 43 37 47.45 32.55 Q49.65 30.35 48.4 27 L47.4 25.65 47.35 25.6 Q45.75 24 43.5 24 L41.85 24 Q39.9 24.05 38.5 25.4 L38.4 25.5 Q37.35 26.6 37.1 28 L37 29 41 29 Q41 28.6 41.3 28.3 41.55 28.05 41.85 28 L41.95 28 43.5 28 Q44.1 28 44.5 28.4"/>
  </g>
</svg>`,i4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#7C66E8" d="M22.8 20 L20 22.8 29.2 32 20 41.2 22.8 44 32 34.8 41.2 44 44 41.2 34.8 32 44 22.8 41.2 20 32 29.2 22.8 20 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,o4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FF6666" d="M37.7 26.35 Q40 28.65 40 32 40 35.35 37.7 37.7 35.35 40 32 40 28.7 40 26.4 37.7 L26.35 37.65 Q24 35.3 24 32 24 28.7 26.35 26.35 L26.4 26.35 Q28.7 24 32 24 35.35 24 37.7 26.35 M44 32 Q44 27 40.5 23.5 37 20 32 20 27.05 20 23.55 23.5 20 27 20 32 20 37 23.55 40.5 27.05 44 32 44 37 44 40.5 40.5 44 37 44 32 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,l4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FF69F8" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M20 20 L20 44 44 44 44 20 20 20 M24 40 L24 24 40 24 40 40 24 40"/>
  </g>
</svg>`,w4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#40E2A0" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M46 42 L32 18 18 42 46 42 M32 25.95 L39.05 38 25 38 32 25.95"/>
  </g>
</svg>`,g4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M42 25 L38 25 35 28 35 29.95 38 29.95 38 34.85 38 34.95 38 42 42 42 42 25 M12 30 Q12 21.7 17.8 15.8 20.2 13.45 22.95 12.1 27.05 10 32 10 40.25 10 46.1 15.8 49.85 19.55 51.25 24.3 L51.8 26.9 52 29.6 52 46 52 46.45 Q51.85 49.15 50.1 51.2 L49.65 51.65 49.45 51.85 Q48 53.2 46.25 53.7 L44 54 20 54 Q16.7 54 14.35 51.65 12 49.3 12 46 L12 30 M22 25 L22 42 34 42 34 38 26 38 26 25 22 25"/>
  </g>
</svg>`,h4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M21 25 L21 42 25 42 25 37 28 37 30.5 42 34.5 42 31.45 35.9 32.2 35.25 32.25 35.2 33.2 34 Q34 32.65 34 31 34 28.5 32.25 26.75 L31.35 26 Q29.9 25 28 25 L21 25 M43 25 L39 25 36 28 36 29.95 39 29.95 39 34.85 39 34.95 39 42 43 42 43 25 M12 30 Q12 21.7 17.8 15.8 23.7 10 32 10 40.25 10 46.1 15.8 49.85 19.55 51.25 24.3 L51.8 26.9 52 29.6 52 46 52 46.45 Q51.85 49.15 50.1 51.2 L49.65 51.65 49.45 51.85 Q48 53.2 46.25 53.7 L44 54 20 54 Q16.85 54 14.55 51.85 L14.35 51.65 Q12 49.3 12 46 L12 30 M28 29 Q28.8 29 29.4 29.6 30 30.2 30 31 30 31.8 29.45 32.35 L29.35 32.45 Q28.8 33 28 33 L25 33 25 29 28 29"/>
  </g>
</svg>`,r4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M23 23 L23 40 35 40 35 36 27 36 27 23 23 23 M16 30 L16 16 Q16 12.7 18.35 10.35 20.7 8 24 8 L48 8 Q51.3 8 53.65 10.35 55.75 12.45 56 15.25 L56 16 56 40 Q56 46.6 51.3 51.3 46.6 56 40 56 L12.8 56 Q10.75 56 9.45 54.75 8 53.45 8 51.6 8 50.15 12 43.6 15.75 37.4 16 30 M44.5 27.4 Q45.25 28.15 44 29.45 L37 36 37 40 41.85 40 41.95 40 49 40 49 36 43 36 47.45 31.55 Q49.65 29.35 48.4 26 L47.4 24.65 47.35 24.6 Q45.75 23 43.5 23 L41.85 23 Q39.9 23.05 38.5 24.4 L38.4 24.5 Q37.35 25.6 37.1 27 L37 28 41 28 Q41 27.6 41.3 27.3 41.55 27.05 41.85 27 L41.95 27 43.5 27 Q44.1 27 44.5 27.4"/>
  </g>
</svg>`,a4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M48 30 Q48.25 37.4 52 43.6 56 50.15 56 51.6 56 53.45 54.55 54.75 53.25 56 51.2 56 L24 56 Q17.4 56 12.7 51.3 8 46.6 8 40 L8 16 Q8 12.7 10.35 10.35 12.7 8 16 8 L40 8 Q43.3 8 45.65 10.35 48 12.7 48 16 L48 30 M37.5 27.4 Q38.25 28.15 37 29.45 L30 36 30 40 34.85 40 34.95 40 42 40 42 36 36 36 40.45 31.55 Q42.65 29.35 41.4 26 L40.4 24.65 40.35 24.6 Q38.75 23 36.5 23 L34.85 23 Q32.9 23.05 31.5 24.4 L31.4 24.5 Q30.35 25.6 30.1 27 L30 28 34 28 Q34 27.6 34.3 27.3 34.55 27.05 34.85 27 L34.95 27 36.5 27 Q37.1 27 37.5 27.4 M22 27 Q22.8 27 23.4 27.6 24 28.2 24 29 24 29.8 23.45 30.35 L23.35 30.45 Q22.8 31 22 31 L19 31 19 27 22 27 M15 23 L15 40 19 40 19 35 22 35 24.5 40 28.5 40 25.45 33.9 26.2 33.25 26.25 33.2 Q28 31.45 28 29 28 26.5 26.25 24.75 24.5 23 22 23 L15 23"/>
  </g>
</svg>`,F4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M28 19 L27.7 19.7 Q27.4 20 27 20 L26.3 19.7 26 19 26 16 24 16 24 19 23.7 19.7 23 20 Q22.6 20 22.3 19.7 22 19.4 22 19 L22 11 Q22 10.6 22.3 10.3 22.6 10 23 10 23.4 10 23.7 10.3 L24 11 24 14 26 14 26 11 Q26 10.6 26.3 10.3 26.6 10 27 10 27.4 10 27.7 10.3 L28 11 28 19 M18 12 Q17.6 12 17.3 12.3 17 12.6 17 13 17 13.4 17.3 13.7 17.6 14 17.95 14 L18.05 14 Q19.2 14 20.1 14.9 21 15.8 21 17 21 18.2 20.1 19.1 19.2 20 18 20 L16 20 15.3 19.7 Q15 19.4 15 19 15 18.6 15.3 18.3 15.6 18 16 18 L18 18 Q18.4 18 18.7 17.7 L19 17 18.7 16.3 Q18.4 16 18.05 16 L17.95 16 Q16.8 16 15.9 15.1 15 14.2 15 13 15 11.8 15.9 10.9 16.8 10 18 10 L20 10 Q20.4 10 20.7 10.3 L21 11 20.7 11.7 20 12 18 12 M39.1 14 L39.45 13.9 39.7 13.7 39.75 13.7 40 13 39.7 12.25 Q39.45 12 39.05 12 L38 12 38 14 39.1 14 M29 12.8 Q29 11.65 29.85 10.8 L29.9 10.75 Q30.75 10 32 10 33.15 10 34.05 10.75 L34.1 10.8 Q35 11.65 35 12.8 L35 19 34.7 19.7 Q34.4 20 34 20 L33.3 19.7 Q33 19.4 33 19 L33 17 31 17 31 19 30.7 19.7 Q30.4 20 30 20 L29.3 19.7 Q29 19.4 29 19 L29 12.8 M31 12.8 L31 15 33 15 33 12.8 32.75 12.25 32.75 12.3 Q32.45 12 32 12 31.55 12 31.2 12.3 L31.25 12.2 Q31 12.45 31 12.8 M41.1 15.1 L41.1 15.15 40.45 15.65 41.9 18.55 41.95 19.35 41.45 19.9 40.7 19.95 Q40.3 19.8 40.1 19.45 L38.4 16 38 16 38 19 37.7 19.7 37 20 36.3 19.7 Q36 19.4 36 19 L36 11 Q36 10.6 36.3 10.3 36.6 10 37 10 L39.05 10 Q40.25 10 41.1 10.85 42 11.75 42 13 42 14.25 41.1 15.1 M43 11 Q43 10.6 43.3 10.3 43.6 10 44 10 L48 10 Q48.4 10 48.7 10.3 L49 11 48.7 11.7 Q48.4 12 48 12 L45 12 45 14 48 14 Q48.4 14 48.7 14.3 L49 15 48.7 15.7 Q48.4 16 48 16 L45 16 45 18 48 18 Q48.4 18 48.7 18.3 L49 19 48.7 19.7 Q48.4 20 48 20 L44 20 Q43.6 20 43.3 19.7 43 19.4 43 19 L43 11 M32 26 Q35.3 26 37.65 28.35 40 30.7 40 34 L40 46 Q40 49.3 37.65 51.65 35.3 54 32 54 28.7 54 26.35 51.65 24 49.3 24 46 L24 34 Q24 30.7 26.35 28.35 28.7 26 32 26"/>
  </g>
</svg>`,d4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M10.85 10.8 L10.9 10.75 Q11.75 10 13 10 14.15 10 15.05 10.75 L15.1 10.8 Q16 11.65 16 12.8 L16 17.25 Q16 18.35 15.1 19.25 L15.05 19.3 Q14.15 20 13 20 11.75 20 10.9 19.3 L10.85 19.2 Q10 18.35 10 17.25 L10 12.8 Q10 11.65 10.85 10.8 M12 12.8 L12 17.25 12.2 17.75 13 18 13.75 17.75 13.75 17.8 14 17.25 14 12.8 13.75 12.25 13.75 12.3 Q13.45 12 13 12 12.55 12 12.2 12.3 L12.25 12.2 12 12.8 M20.1 14 L20.45 13.9 20.7 13.7 20.75 13.7 21 13 20.7 12.25 Q20.45 12 20.05 12 L19 12 19 14 20.1 14 M19 19 L18.7 19.7 Q18.4 20 18 20 L17.3 19.7 Q17 19.4 17 19 L17 11 Q17 10.6 17.3 10.3 17.6 10 18 10 L20.05 10 Q21.25 10 22.1 10.85 23 11.75 23 13 23 14.25 22.1 15.1 L22.1 15.15 21.45 15.65 21.35 15.7 20.1 16 19 16 19 19 M25 12 L24.3 11.7 Q24 11.4 24 11 24 10.6 24.3 10.3 24.6 10 25 10 L29 10 29.7 10.3 30 11 29.7 11.7 29 12 28 12 28 19 27.7 19.7 Q27.4 20 27 20 L26.3 19.7 26 19 26 12 25 12 M36 12.8 L36 17.25 36.2 17.75 37 18 37.75 17.75 37.75 17.8 38 17.25 38 12.8 37.75 12.25 37.75 12.3 Q37.45 12 37 12 36.55 12 36.2 12.3 L36.25 12.2 36 12.8 M34.85 10.8 L34.9 10.75 Q35.75 10 37 10 38.15 10 39.05 10.75 L39.1 10.8 Q40 11.65 40 12.8 L40 17.25 Q40 18.35 39.1 19.25 L39.05 19.3 Q38.15 20 37 20 35.75 20 34.9 19.3 L34.85 19.2 Q34 18.35 34 17.25 L34 12.8 Q34 11.65 34.85 10.8 M33 19 L32.7 19.7 32 20 Q31.6 20 31.3 19.7 31 19.4 31 19 L31 11 Q31 10.6 31.3 10.3 31.6 10 32 10 32.4 10 32.7 10.3 L33 11 33 19 M47 19 L46.8 19.65 46.25 20 45.6 19.9 45.1 19.45 43 15.25 43 19 42.7 19.7 42 20 41.3 19.7 Q41 19.4 41 19 L41 11 Q41 10.65 41.25 10.4 L41.8 10.05 42.45 10.1 42.9 10.55 45 14.75 45 11 Q45 10.6 45.3 10.3 45.6 10 46 10 46.4 10 46.7 10.3 L47 11 47 19 M51 12 Q50.6 12 50.3 12.3 50 12.6 50 13 50 13.4 50.3 13.7 L50.95 14 51.05 14 Q52.2 14 53.1 14.9 54 15.8 54 17 54 18.2 53.1 19.1 52.2 20 51 20 L49 20 Q48.6 20 48.3 19.7 48 19.4 48 19 48 18.6 48.3 18.3 48.6 18 49 18 L51 18 Q51.4 18 51.7 17.7 L52 17 51.7 16.3 Q51.4 16 51.05 16 L50.95 16 Q49.8 16 48.9 15.1 48 14.2 48 13 48 11.8 48.9 10.9 49.8 10 51 10 L53 10 Q53.4 10 53.7 10.3 L54 11 53.7 11.7 53 12 51 12 M32 26 Q35.3 26 37.65 28.35 40 30.7 40 34 L40 46 39.85 47.6 Q39.4 49.9 37.65 51.65 35.3 54 32 54 28.7 54 26.35 51.65 24.6 49.9 24.15 47.6 L24 46 24 34 Q24 30.7 26.35 28.35 28.7 26 32 26"/>
  </g>
</svg>`,p4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M22.75 9.45 L22.3 8.95 22.25 8.85 Q21 7.5 21 5.65 21 3.75 22.25 2.5 23.55 1 25.6 1 L38.4 1 Q40.25 0.95 41.7 2.4 43 3.65 43 5.65 43 7.5 41.8 8.85 L41.7 8.95 41.25 9.45 37.9 12.95 35.6 15.3 35.3 15.6 35.3 15.65 Q33.85 17.05 32 17 30 17 28.7 15.6 L28.4 15.3 26.15 12.95 22.75 9.45 M30.85 13.5 Q31.3 14 32 14 32.65 14 33.15 13.5 L39.55 6.85 Q40 6.35 40 5.65 40 4.95 39.55 4.5 39.05 4 38.4 4 L25.6 4 Q24.9 4 24.45 4.5 24 4.95 24 5.65 24 6.35 24.45 6.85 L30.85 13.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 13.5 L24.45 6.85 Q24 6.35 24 5.65 24 4.95 24.45 4.5 24.9 4 25.6 4 L38.4 4 Q39.05 4 39.55 4.5 40 4.95 40 5.65 40 6.35 39.55 6.85 L33.15 13.5 Q32.65 14 32 14 31.3 14 30.85 13.5 M41.25 9.45 Q45.5 10.85 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 18.5 10.85 22.75 9.45 L26.15 12.95 Q21.25 14.05 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 42.75 14.05 37.9 12.95 L41.25 9.45 M28.4 15.3 L28.7 15.6 Q30 17 32 17 33.85 17.05 35.3 15.65 L35.3 15.6 35.6 15.3 Q40.5 16.05 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q23.65 16.05 28.4 15.3 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30"/>
  </g>
</svg>`,x4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M22.75 9.45 L22.3 8.95 22.25 8.85 Q21 7.5 21 5.65 21 3.75 22.25 2.5 23.55 1 25.6 1 L38.4 1 Q40.25 0.95 41.7 2.4 43 3.65 43 5.65 43 7.5 41.8 8.85 L41.7 8.95 41.25 9.45 37.9 12.95 35.6 15.3 35.3 15.6 35.3 15.65 Q33.85 17.05 32 17 30 17 28.7 15.6 L28.4 15.3 26.15 12.95 22.75 9.45 M30.85 13.5 Q31.3 14 32 14 32.65 14 33.15 13.5 L39.55 6.85 Q40 6.35 40 5.65 40 4.95 39.55 4.5 39.05 4 38.4 4 L25.6 4 Q24.9 4 24.45 4.5 24 4.95 24 5.65 24 6.35 24.45 6.85 L30.85 13.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 13.5 L24.45 6.85 Q24 6.35 24 5.65 24 4.95 24.45 4.5 24.9 4 25.6 4 L38.4 4 Q39.05 4 39.55 4.5 40 4.95 40 5.65 40 6.35 39.55 6.85 L33.15 13.5 Q32.65 14 32 14 31.3 14 30.85 13.5 M41.25 9.45 Q45.5 10.85 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 18.5 10.85 22.75 9.45 L26.15 12.95 Q21.25 14.05 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 42.75 14.05 37.9 12.95 L41.25 9.45 M28.4 15.3 L28.7 15.6 Q30 17 32 17 33.85 17.05 35.3 15.65 L35.3 15.6 35.6 15.3 Q40.5 16.05 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q23.65 16.05 28.4 15.3 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27"/>
  </g>
</svg>`,f4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10"/>
    <path stroke="none" fill="#FFFFFF" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
  </g>
</svg>`,k4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#E73246" d="M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
  </g>
</svg>`,v4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
    <path stroke="none" fill="#E73246" d="M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
  </g>
</svg>`,c4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#E73246" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26"/>
  </g>
</svg>`,M4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M37.7 26.35 Q40 28.65 40 32 40 35.35 37.7 37.7 35.35 40 32 40 28.7 40 26.4 37.7 L26.35 37.65 Q24 35.3 24 32 24 28.7 26.35 26.35 L26.4 26.35 Q28.7 24 32 24 35.35 24 37.7 26.35 M44 32 Q44 27 40.5 23.5 37 20 32 20 27.05 20 23.55 23.5 20 27 20 32 20 37 23.55 40.5 27.05 44 32 44 37 44 40.5 40.5 44 37 44 32 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32"/>
  </g>
</svg>`,_4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#FFFFFF" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
  </g>
</svg>`,m4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M56 26 L56 38 Q56 38.85 55.45 39.45 54.85 40 54 40 L44.85 40 Q44 40 43.45 39.45 L37.45 33.45 Q36.85 32.85 36.85 32 36.85 31.15 37.45 30.6 L43.45 24.6 Q44 24 44.85 24 L54 24 Q54.85 24 55.45 24.6 56 25.15 56 26 M19.15 40 L10 40 Q9.15 40 8.6 39.45 8 38.85 8 38 L8 26 Q8 25.15 8.6 24.6 9.15 24 10 24 L19.15 24 Q20 24 20.6 24.6 L26.6 30.6 Q27.15 31.15 27.15 32 27.15 32.85 26.6 33.45 L20.6 39.45 Q20 40 19.15 40"/>
    <path stroke="none" fill="#E73246" d="M40 10 L40 19.15 Q40 20 39.45 20.6 L33.45 26.6 Q32.85 27.15 32 27.15 31.15 27.15 30.6 26.6 L24.6 20.6 Q24 20 24 19.15 L24 10 Q24 9.15 24.6 8.6 25.15 8 26 8 L38 8 Q38.85 8 39.45 8.6 40 9.15 40 10 M33.45 37.45 L39.45 43.45 Q40 44 40 44.85 L40 54 Q40 54.85 39.45 55.45 38.85 56 38 56 L26 56 Q25.15 56 24.6 55.45 24 54.85 24 54 L24 44.85 Q24 44 24.6 43.45 L30.6 37.45 Q31.15 36.85 32 36.85 32.85 36.85 33.45 37.45"/>
  </g>
</svg>`,u4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`,y4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M50.85 15.35 Q51.65 15 52.65 15 54.5 15 55.85 16.2 L55.95 16.3 62.6 22.7 62.65 22.7 Q64.05 24.15 64 26 64 28 62.6 29.3 L55.95 35.7 55.85 35.75 55 36.4 Q53.95 37 52.65 37 50.75 37 49.5 35.75 L49.05 35.3 Q48 34.1 48 32.4 L48 26.05 48 25.95 48 19.6 48.1 18.55 Q48.4 17.3 49.4 16.3 50 15.65 50.85 15.35 M9 36.4 L8.15 35.75 8.05 35.7 1.4 29.3 Q0 28 0 26 -0.05 24.15 1.35 22.7 L1.4 22.7 8.05 16.3 8.15 16.2 Q9.5 15 11.35 15 12.35 15 13.15 15.35 13.95 15.65 14.6 16.3 15.6 17.3 15.9 18.55 L16 19.6 16 26.05 16 26.1 16 32.4 Q16 34.1 14.95 35.3 L14.5 35.75 Q13.25 37 11.35 37 10.05 37 9 36.4 M60.5 27.15 Q61 26.7 61 26 61 25.35 60.5 24.85 L53.85 18.45 Q53.5 18.15 53.1 18.05 L52.65 18 Q51.95 18 51.5 18.45 51 18.95 51 19.6 L51 32.4 Q51 33.1 51.5 33.55 51.95 34 52.65 34 L53.85 33.55 60.5 27.15 M3.5 27.15 L10.15 33.55 Q10.65 34 11.35 34 L12.5 33.55 Q13 33.1 13 32.4 L13 19.6 Q13 18.95 12.5 18.45 12.05 18 11.35 18 L10.9 18.05 Q10.45 18.15 10.15 18.45 L3.5 24.85 Q3 25.35 3 26 3 26.7 3.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" d="M3.5 27.15 Q3 26.7 3 26 3 25.35 3.5 24.85 L10.15 18.45 Q10.45 18.15 10.9 18.05 L11.35 18 Q12.05 18 12.5 18.45 13 18.95 13 19.6 L13 32.4 Q13 33.1 12.5 33.55 L11.35 34 Q10.65 34 10.15 33.55 L3.5 27.15 M55 36.4 Q53.35 40.8 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 10.65 40.8 9 36.4 10.05 37 11.35 37 13.25 37 14.5 35.75 L14.95 35.3 Q16 36.55 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 49.05 35.3 49.5 35.75 Q50.75 37 52.65 37 53.95 37 55 36.4 M13.15 15.35 L15 13.65 Q22.05 8 32 8 42 8 48.95 13.65 L50.85 15.35 Q50 15.65 49.4 16.3 48.4 17.3 48.1 18.55 L46.55 17.1 Q40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 15.9 18.55 Q15.6 17.3 14.6 16.3 13.95 15.65 13.15 15.35 M48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 M60.5 27.15 L53.85 33.55 52.65 34 Q51.95 34 51.5 33.55 51 33.1 51 32.4 L51 19.6 Q51 18.95 51.5 18.45 51.95 18 52.65 18 L53.1 18.05 Q53.5 18.15 53.85 18.45 L60.5 24.85 Q61 25.35 61 26 61 26.7 60.5 27.15 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30"/>
  </g>
</svg>`,b4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M43 10.1 L43 10.35 Q43 12.35 41.7 13.6 L41.3 14 Q40 15.05 38.4 15 L32.8 15 31.2 15 25.6 15 Q23.9 15 22.75 14 L22.25 13.5 Q21 12.25 21 10.35 L21 10.1 Q21.1 8.4 22.25 7.15 L22.3 7.05 28.7 0.4 Q30 -1 32 -1 33.85 -1.05 35.3 0.35 L35.3 0.4 41.7 7.05 41.8 7.15 Q42.9 8.4 43 10.1 M42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37 38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 M30.85 2.5 L24.45 9.15 Q24 9.65 24 10.35 24 11.05 24.45 11.5 24.9 12 25.6 12 L38.4 12 Q39.05 12 39.55 11.5 40 11.05 40 10.35 40 9.65 39.55 9.15 L33.15 2.5 Q32.65 2 32 2 31.3 2 30.85 2.5 M30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5 M41.3 14 L41.7 13.6 Q43 12.35 43 10.35 L43 10.1 Q46.2 11.4 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 17.8 11.4 21 10.1 L21 10.35 Q21 12.25 22.25 13.5 L22.75 14 Q19.85 15.15 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 44.1 15.15 41.3 14 M31.2 15 L32.8 15 Q39.45 15.25 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q24.7 15.2 31.2 15 M30.85 2.5 Q31.3 2 32 2 32.65 2 33.15 2.5 L39.55 9.15 Q40 9.65 40 10.35 40 11.05 39.55 11.5 39.05 12 38.4 12 L25.6 12 Q24.9 12 24.45 11.5 24 11.05 24 10.35 24 9.65 24.45 9.15 L30.85 2.5 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30"/>
  </g>
</svg>`,E4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M43 10.1 L43 10.35 Q43 12.35 41.7 13.6 L41.3 14 Q40 15.05 38.4 15 L32.8 15 31.2 15 25.6 15 Q23.9 15 22.75 14 L22.25 13.5 Q21 12.25 21 10.35 L21 10.1 Q21.1 8.4 22.25 7.15 L22.3 7.05 28.7 0.4 Q30 -1 32 -1 33.85 -1.05 35.3 0.35 L35.3 0.4 41.7 7.05 41.8 7.15 Q42.9 8.4 43 10.1 M30.85 2.5 L24.45 9.15 Q24 9.65 24 10.35 24 11.05 24.45 11.5 24.9 12 25.6 12 L38.4 12 Q39.05 12 39.55 11.5 40 11.05 40 10.35 40 9.65 39.55 9.15 L33.15 2.5 Q32.65 2 32 2 31.3 2 30.85 2.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 2.5 Q31.3 2 32 2 32.65 2 33.15 2.5 L39.55 9.15 Q40 9.65 40 10.35 40 11.05 39.55 11.5 39.05 12 38.4 12 L25.6 12 Q24.9 12 24.45 11.5 24 11.05 24 10.35 24 9.65 24.45 9.15 L30.85 2.5 M41.3 14 L41.7 13.6 Q43 12.35 43 10.35 L43 10.1 Q46.2 11.4 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 17.8 11.4 21 10.1 L21 10.35 Q21 12.25 22.25 13.5 L22.75 14 Q19.85 15.15 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 44.1 15.15 41.3 14 M31.2 15 L32.8 15 Q39.45 15.25 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q24.7 15.2 31.2 15 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30"/>
  </g>
</svg>`,T4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M50.85 15.35 Q51.65 15 52.65 15 54.5 15 55.85 16.2 L55.95 16.3 62.6 22.7 62.65 22.7 Q64.05 24.15 64 26 64 28 62.6 29.3 L55.95 35.7 55.85 35.75 55 36.4 Q53.95 37 52.65 37 50.75 37 49.5 35.75 L49.05 35.3 Q48 34.1 48 32.4 L48 26.05 48 25.95 48 19.6 48.1 18.55 Q48.4 17.3 49.4 16.3 50 15.65 50.85 15.35 M60.5 27.15 Q61 26.7 61 26 61 25.35 60.5 24.85 L53.85 18.45 Q53.5 18.15 53.1 18.05 L52.65 18 Q51.95 18 51.5 18.45 51 18.95 51 19.6 L51 32.4 Q51 33.1 51.5 33.55 51.95 34 52.65 34 L53.85 33.55 60.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" d="M60.5 27.15 L53.85 33.55 52.65 34 Q51.95 34 51.5 33.55 51 33.1 51 32.4 L51 19.6 Q51 18.95 51.5 18.45 51.95 18 52.65 18 L53.1 18.05 Q53.5 18.15 53.85 18.45 L60.5 24.85 Q61 25.35 61 26 61 26.7 60.5 27.15 M55 36.4 Q53.35 40.8 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 L50.85 15.35 Q50 15.65 49.4 16.3 48.4 17.3 48.1 18.55 L46.55 17.1 Q40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 49.05 35.3 49.5 35.75 Q50.75 37 52.65 37 53.95 37 55 36.4 M48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30"/>
  </g>
</svg>`,P4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 M14.95 35.3 Q16 36.55 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 15.9 18.55 Q15.6 17.3 14.6 16.3 13.95 15.65 13.15 15.35 L15 13.65 Q22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 10.65 40.8 9 36.4 10.05 37 11.35 37 13.25 37 14.5 35.75 L14.95 35.3 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M3.5 27.15 Q3 26.7 3 26 3 25.35 3.5 24.85 L10.15 18.45 Q10.45 18.15 10.9 18.05 L11.35 18 Q12.05 18 12.5 18.45 13 18.95 13 19.6 L13 32.4 Q13 33.1 12.5 33.55 L11.35 34 Q10.65 34 10.15 33.55 L3.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M3.5 27.15 L10.15 33.55 Q10.65 34 11.35 34 L12.5 33.55 Q13 33.1 13 32.4 L13 19.6 Q13 18.95 12.5 18.45 12.05 18 11.35 18 L10.9 18.05 Q10.45 18.15 10.15 18.45 L3.5 24.85 Q3 25.35 3 26 3 26.7 3.5 27.15 M16 26.1 L16 32.4 Q16 34.1 14.95 35.3 L14.5 35.75 Q13.25 37 11.35 37 10.05 37 9 36.4 L8.15 35.75 8.05 35.7 1.4 29.3 Q0 28 0 26 -0.05 24.15 1.35 22.7 L1.4 22.7 8.05 16.3 8.15 16.2 Q9.5 15 11.35 15 12.35 15 13.15 15.35 13.95 15.65 14.6 16.3 15.6 17.3 15.9 18.55 L16 19.6 16 26.05 16 26.1"/>
  </g>
</svg>`,C4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`,A4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`,R4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M50.85 15.35 Q51.65 15 52.65 15 54.5 15 55.85 16.2 L55.95 16.3 62.6 22.7 62.65 22.7 Q64.05 24.15 64 26 64 28 62.6 29.3 L55.95 35.7 55.85 35.75 55 36.4 Q53.95 37 52.65 37 50.75 37 49.5 35.75 L49.05 35.3 Q48 34.1 48 32.4 L48 26.05 48 25.95 48 19.6 48.1 18.55 Q48.4 17.3 49.4 16.3 50 15.65 50.85 15.35 M9 36.4 L8.15 35.75 8.05 35.7 1.4 29.3 Q0 28 0 26 -0.05 24.15 1.35 22.7 L1.4 22.7 8.05 16.3 8.15 16.2 Q9.5 15 11.35 15 12.35 15 13.15 15.35 13.95 15.65 14.6 16.3 15.6 17.3 15.9 18.55 L16 19.6 16 26.05 16 26.1 16 32.4 Q16 34.1 14.95 35.3 L14.5 35.75 Q13.25 37 11.35 37 10.05 37 9 36.4 M60.5 27.15 Q61 26.7 61 26 61 25.35 60.5 24.85 L53.85 18.45 Q53.5 18.15 53.1 18.05 L52.65 18 Q51.95 18 51.5 18.45 51 18.95 51 19.6 L51 32.4 Q51 33.1 51.5 33.55 51.95 34 52.65 34 L53.85 33.55 60.5 27.15 M3.5 27.15 L10.15 33.55 Q10.65 34 11.35 34 L12.5 33.55 Q13 33.1 13 32.4 L13 19.6 Q13 18.95 12.5 18.45 12.05 18 11.35 18 L10.9 18.05 Q10.45 18.15 10.15 18.45 L3.5 24.85 Q3 25.35 3 26 3 26.7 3.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" d="M3.5 27.15 Q3 26.7 3 26 3 25.35 3.5 24.85 L10.15 18.45 Q10.45 18.15 10.9 18.05 L11.35 18 Q12.05 18 12.5 18.45 13 18.95 13 19.6 L13 32.4 Q13 33.1 12.5 33.55 L11.35 34 Q10.65 34 10.15 33.55 L3.5 27.15 M55 36.4 Q53.35 40.8 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 10.65 40.8 9 36.4 10.05 37 11.35 37 13.25 37 14.5 35.75 L14.95 35.3 Q16 36.55 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 49.05 35.3 49.5 35.75 Q50.75 37 52.65 37 53.95 37 55 36.4 M13.15 15.35 L15 13.65 Q22.05 8 32 8 42 8 48.95 13.65 L50.85 15.35 Q50 15.65 49.4 16.3 48.4 17.3 48.1 18.55 L46.55 17.1 Q40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 15.9 18.55 Q15.6 17.3 14.6 16.3 13.95 15.65 13.15 15.35 M48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 M60.5 27.15 L53.85 33.55 52.65 34 Q51.95 34 51.5 33.55 51 33.1 51 32.4 L51 19.6 Q51 18.95 51.5 18.45 51.95 18 52.65 18 L53.1 18.05 Q53.5 18.15 53.85 18.45 L60.5 24.85 Q61 25.35 61 26 61 26.7 60.5 27.15 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27"/>
  </g>
</svg>`,I4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M43 10.1 L43 10.35 Q43 12.35 41.7 13.6 L41.3 14 Q40 15.05 38.4 15 L32.8 15 31.2 15 25.6 15 Q23.9 15 22.75 14 L22.25 13.5 Q21 12.25 21 10.35 L21 10.1 Q21.1 8.4 22.25 7.15 L22.3 7.05 28.7 0.4 Q30 -1 32 -1 33.85 -1.05 35.3 0.35 L35.3 0.4 41.7 7.05 41.8 7.15 Q42.9 8.4 43 10.1 M42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37 38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 M30.85 2.5 L24.45 9.15 Q24 9.65 24 10.35 24 11.05 24.45 11.5 24.9 12 25.6 12 L38.4 12 Q39.05 12 39.55 11.5 40 11.05 40 10.35 40 9.65 39.55 9.15 L33.15 2.5 Q32.65 2 32 2 31.3 2 30.85 2.5 M30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5 M41.3 14 L41.7 13.6 Q43 12.35 43 10.35 L43 10.1 Q46.2 11.4 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 17.8 11.4 21 10.1 L21 10.35 Q21 12.25 22.25 13.5 L22.75 14 Q19.85 15.15 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 44.1 15.15 41.3 14 M31.2 15 L32.8 15 Q39.45 15.25 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q24.7 15.2 31.2 15 M30.85 2.5 Q31.3 2 32 2 32.65 2 33.15 2.5 L39.55 9.15 Q40 9.65 40 10.35 40 11.05 39.55 11.5 39.05 12 38.4 12 L25.6 12 Q24.9 12 24.45 11.5 24 11.05 24 10.35 24 9.65 24.45 9.15 L30.85 2.5 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30"/>
  </g>
</svg>`,N4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M43 10.1 L43 10.35 Q43 12.35 41.7 13.6 L41.3 14 Q40 15.05 38.4 15 L32.8 15 31.2 15 25.6 15 Q23.9 15 22.75 14 L22.25 13.5 Q21 12.25 21 10.35 L21 10.1 Q21.1 8.4 22.25 7.15 L22.3 7.05 28.7 0.4 Q30 -1 32 -1 33.85 -1.05 35.3 0.35 L35.3 0.4 41.7 7.05 41.8 7.15 Q42.9 8.4 43 10.1 M30.85 2.5 L24.45 9.15 Q24 9.65 24 10.35 24 11.05 24.45 11.5 24.9 12 25.6 12 L38.4 12 Q39.05 12 39.55 11.5 40 11.05 40 10.35 40 9.65 39.55 9.15 L33.15 2.5 Q32.65 2 32 2 31.3 2 30.85 2.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 2.5 Q31.3 2 32 2 32.65 2 33.15 2.5 L39.55 9.15 Q40 9.65 40 10.35 40 11.05 39.55 11.5 39.05 12 38.4 12 L25.6 12 Q24.9 12 24.45 11.5 24 11.05 24 10.35 24 9.65 24.45 9.15 L30.85 2.5 M41.3 14 L41.7 13.6 Q43 12.35 43 10.35 L43 10.1 Q46.2 11.4 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 17.8 11.4 21 10.1 L21 10.35 Q21 12.25 22.25 13.5 L22.75 14 Q19.85 15.15 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 44.1 15.15 41.3 14 M31.2 15 L32.8 15 Q39.45 15.25 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q24.7 15.2 31.2 15 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30"/>
  </g>
</svg>`,O4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M50.85 15.35 Q51.65 15 52.65 15 54.5 15 55.85 16.2 L55.95 16.3 62.6 22.7 62.65 22.7 Q64.05 24.15 64 26 64 28 62.6 29.3 L55.95 35.7 55.85 35.75 55 36.4 Q53.95 37 52.65 37 50.75 37 49.5 35.75 L49.05 35.3 Q48 34.1 48 32.4 L48 26.05 48 25.95 48 19.6 48.1 18.55 Q48.4 17.3 49.4 16.3 50 15.65 50.85 15.35 M60.5 27.15 Q61 26.7 61 26 61 25.35 60.5 24.85 L53.85 18.45 Q53.5 18.15 53.1 18.05 L52.65 18 Q51.95 18 51.5 18.45 51 18.95 51 19.6 L51 32.4 Q51 33.1 51.5 33.55 51.95 34 52.65 34 L53.85 33.55 60.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" d="M60.5 27.15 L53.85 33.55 52.65 34 Q51.95 34 51.5 33.55 51 33.1 51 32.4 L51 19.6 Q51 18.95 51.5 18.45 51.95 18 52.65 18 L53.1 18.05 Q53.5 18.15 53.85 18.45 L60.5 24.85 Q61 25.35 61 26 61 26.7 60.5 27.15 M55 36.4 Q53.35 40.8 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 L50.85 15.35 Q50 15.65 49.4 16.3 48.4 17.3 48.1 18.55 L46.55 17.1 Q40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 49.05 35.3 49.5 35.75 Q50.75 37 52.65 37 53.95 37 55 36.4 M48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27"/>
  </g>
</svg>`,q4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 M14.95 35.3 Q16 36.55 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 15.9 18.55 Q15.6 17.3 14.6 16.3 13.95 15.65 13.15 15.35 L15 13.65 Q22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 10.65 40.8 9 36.4 10.05 37 11.35 37 13.25 37 14.5 35.75 L14.95 35.3 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M3.5 27.15 Q3 26.7 3 26 3 25.35 3.5 24.85 L10.15 18.45 Q10.45 18.15 10.9 18.05 L11.35 18 Q12.05 18 12.5 18.45 13 18.95 13 19.6 L13 32.4 Q13 33.1 12.5 33.55 L11.35 34 Q10.65 34 10.15 33.55 L3.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M3.5 27.15 L10.15 33.55 Q10.65 34 11.35 34 L12.5 33.55 Q13 33.1 13 32.4 L13 19.6 Q13 18.95 12.5 18.45 12.05 18 11.35 18 L10.9 18.05 Q10.45 18.15 10.15 18.45 L3.5 24.85 Q3 25.35 3 26 3 26.7 3.5 27.15 M16 26.1 L16 32.4 Q16 34.1 14.95 35.3 L14.5 35.75 Q13.25 37 11.35 37 10.05 37 9 36.4 L8.15 35.75 8.05 35.7 1.4 29.3 Q0 28 0 26 -0.05 24.15 1.35 22.7 L1.4 22.7 8.05 16.3 8.15 16.2 Q9.5 15 11.35 15 12.35 15 13.15 15.35 13.95 15.65 14.6 16.3 15.6 17.3 15.9 18.55 L16 19.6 16 26.05 16 26.1"/>
  </g>
</svg>`,G4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`,H4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#7DB700" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M38 42 L42 42 34 22 30 22 22 42 26 42 27.6 38 36.4 38 38 42 M32 27 L34.8 34 29.2 34 32 27"/>
  </g>
</svg>`,D4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#EF4E29" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M37 28 Q37 28.85 36.45 29.4 L36.4 29.4 Q35.8 30 35 30 L29 30 29 26 35 26 Q35.8 26 36.35 26.55 L36.45 26.65 Q37 27.2 37 28 M41 36 Q41 33.7 39.5 32 41 30.3 41 28 41 25.55 39.25 23.8 L39.2 23.75 Q37.45 22 35 22 L25 22 25 42 35 42 Q37.45 42 39.2 40.25 L39.25 40.2 Q41 38.45 41 36 M37 36 Q37 36.8 36.45 37.35 L36.35 37.45 Q35.8 38 35 38 L29 38 29 34 35 34 Q35.8 34 36.4 34.6 L36.45 34.6 Q37 35.15 37 36"/>
  </g>
</svg>`,z4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#009FEB" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M23 25 L29 32 23 39 23 40 25.25 42 26.4 42 32 35.5 37.65 42 38.75 42 41 40 41 39 35 32 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,B4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FEB504" d="M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M23 25 L30 32.9 30 42 34 42 34 32.9 41 25 41 24 38.75 22 37.65 22 32 28.55 26.4 22 25.25 22 23 24 23 25"/>
  </g>
</svg>`,S4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 39 Q41.6 39 42.8 37.8 44 36.65 44 35 44 33.6 43.1 32.5 44 31.45 44 30 44 28.4 42.8 27.2 41.6 26 40 26 L33 26 33 39 40 39 M40 31 L36 31 36 29 40 29 Q40.45 29 40.7 29.3 L41 30 40.7 30.7 Q40.45 31 40 31 M48 16 Q56 16 56 24 L56 40 Q56 48 48 48 L16 48 Q8 48 8 40 L8 32 Q8 25.4 12.7 20.7 17.4 16 24 16 L48 16 M40 36 L36 36 36 34 40 34 Q40.45 34 40.7 34.3 L41 35 40.7 35.7 Q40.45 36 40 36 M24 36 L24 26 21 26 21 39 30 39 30 36 24 36"/>
  </g>
</svg>`,U4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M40 39 Q41.6 39 42.8 37.8 44 36.65 44 35 44 33.6 43.1 32.5 44 31.45 44 30 44 28.4 42.8 27.2 41.6 26 40 26 L33 26 33 39 40 39 M40 31 L36 31 36 29 40 29 Q40.45 29 40.7 29.3 L41 30 40.7 30.7 Q40.45 31 40 31 M16 16 L40 16 Q46.6 16 51.3 20.7 56 25.4 56 32 L56 40 Q56 48 48 48 L16 48 Q8 48 8 40 L8 24 Q8 16 16 16 M40 36 L36 36 36 34 40 34 Q40.45 34 40.7 34.3 L41 35 40.7 35.7 Q40.45 36 40 36 M25 36 L26 35.9 26 36 27 39 30 39 28.5 34.5 Q30 33.05 30 31 30 28.95 28.5 27.45 27.05 26 25 26 L19 26 19 39 22 39 22 36 25 36 M22 33 L22 29 25 29 Q25.85 29 26.4 29.55 27 30.15 27 31 27 31.85 26.4 32.4 25.85 33 25.05 33 L22 33"/>
  </g>
</svg>`,V4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M37 36 L41 36 41 23 46 23 46 19 32 19 32 23 37 23 37 36 M18 19 L18 36 30 36 30 32 22 32 22 19 18 19 M15.7 54 Q8 53.85 8 46 L8 18 Q8 10 16 10 L48 10 Q56 10 56 18 L56 31.05 Q55.65 40.3 48.95 47 42.15 53.8 32.65 54 L15.7 54"/>
  </g>
</svg>`,X4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M38 36 L42 36 42 23 47 23 47 19 33 19 33 23 38 23 38 36 M48.3 54 L31.35 54 Q21.85 53.8 15.05 47 8.35 40.3 8 31.05 L8 18 Q8 10 16 10 L48 10 Q56 10 56 18 L56 46 Q56 53.85 48.3 54 M25 23 Q25.8 23 26.4 23.6 27 24.2 27 25 27 25.8 26.45 26.35 L26.35 26.45 Q25.8 27 25 27 L22 27 22 23 25 23 M18 19 L18 36 22 36 22 31 25 31 27.5 36 31.5 36 28.45 29.9 29.2 29.25 29.25 29.2 Q31 27.45 31 25 31 22.5 29.25 20.75 27.5 19 25 19 L18 19"/>
  </g>
</svg>`,K4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M22.75 9.45 L22.3 8.95 22.25 8.85 Q21 7.5 21 5.65 21 3.75 22.25 2.5 23.55 1 25.6 1 L38.4 1 Q40.25 0.95 41.7 2.4 43 3.65 43 5.65 43 7.5 41.8 8.85 L41.7 8.95 41.25 9.45 37.9 12.95 35.6 15.3 35.3 15.6 35.3 15.65 Q33.85 17.05 32 17 30 17 28.7 15.6 L28.4 15.3 26.15 12.95 22.75 9.45 M30.85 13.5 Q31.3 14 32 14 32.65 14 33.15 13.5 L39.55 6.85 Q40 6.35 40 5.65 40 4.95 39.55 4.5 39.05 4 38.4 4 L25.6 4 Q24.9 4 24.45 4.5 24 4.95 24 5.65 24 6.35 24.45 6.85 L30.85 13.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 13.5 L24.45 6.85 Q24 6.35 24 5.65 24 4.95 24.45 4.5 24.9 4 25.6 4 L38.4 4 Q39.05 4 39.55 4.5 40 4.95 40 5.65 40 6.35 39.55 6.85 L33.15 13.5 Q32.65 14 32 14 31.3 14 30.85 13.5 M41.25 9.45 Q45.5 10.85 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 18.5 10.85 22.75 9.45 L26.15 12.95 Q21.25 14.05 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 42.75 14.05 37.9 12.95 L41.25 9.45 M28.4 15.3 L28.7 15.6 Q30 17 32 17 33.85 17.05 35.3 15.65 L35.3 15.6 35.6 15.3 Q40.5 16.05 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q23.65 16.05 28.4 15.3 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30"/>
  </g>
</svg>`,j4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M22.75 9.45 L22.3 8.95 22.25 8.85 Q21 7.5 21 5.65 21 3.75 22.25 2.5 23.55 1 25.6 1 L38.4 1 Q40.25 0.95 41.7 2.4 43 3.65 43 5.65 43 7.5 41.8 8.85 L41.7 8.95 41.25 9.45 37.9 12.95 35.6 15.3 35.3 15.6 35.3 15.65 Q33.85 17.05 32 17 30 17 28.7 15.6 L28.4 15.3 26.15 12.95 22.75 9.45 M30.85 13.5 Q31.3 14 32 14 32.65 14 33.15 13.5 L39.55 6.85 Q40 6.35 40 5.65 40 4.95 39.55 4.5 39.05 4 38.4 4 L25.6 4 Q24.9 4 24.45 4.5 24 4.95 24 5.65 24 6.35 24.45 6.85 L30.85 13.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 13.5 L24.45 6.85 Q24 6.35 24 5.65 24 4.95 24.45 4.5 24.9 4 25.6 4 L38.4 4 Q39.05 4 39.55 4.5 40 4.95 40 5.65 40 6.35 39.55 6.85 L33.15 13.5 Q32.65 14 32 14 31.3 14 30.85 13.5 M41.25 9.45 Q45.5 10.85 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 18.5 10.85 22.75 9.45 L26.15 12.95 Q21.25 14.05 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 42.75 14.05 37.9 12.95 L41.25 9.45 M28.4 15.3 L28.7 15.6 Q30 17 32 17 33.85 17.05 35.3 15.65 L35.3 15.6 35.6 15.3 Q40.5 16.05 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q23.65 16.05 28.4 15.3 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27"/>
  </g>
</svg>`,W4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M41 23 L52 23 Q56 23 56 27 L56 37 Q56 41 52 41 L41 41 41 52 Q41 56 37 56 L27 56 Q23 56 23 52 L23 41 12 41 Q8 41 8 37 L8 27 Q8 23 12 23 L23 23 41 23"/>
    <path stroke="none" fill="#E73246" d="M41 23 L23 23 23 12 Q23 8 27 8 L37 8 Q41 8 41 12 L41 23"/>
  </g>
</svg>`,Y4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M23 41 L12 41 Q8 41 8 37 L8 27 Q8 23 12 23 L23 23 23 12 Q23 8 27 8 L37 8 Q41 8 41 12 L41 23 52 23 Q56 23 56 27 L56 37 Q56 41 52 41 L41 41 23 41"/>
    <path stroke="none" fill="#E73246" d="M23 41 L41 41 41 52 Q41 56 37 56 L27 56 Q23 56 23 52 L23 41"/>
  </g>
</svg>`,Z4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M23 23 L23 12 Q23 8 27 8 L37 8 Q41 8 41 12 L41 23 52 23 Q56 23 56 27 L56 37 Q56 41 52 41 L41 41 41 52 Q41 56 37 56 L27 56 Q23 56 23 52 L23 41 23 23"/>
    <path stroke="none" fill="#E73246" d="M23 23 L23 41 12 41 Q8 41 8 37 L8 27 Q8 23 12 23 L23 23"/>
  </g>
</svg>`,J4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M41 23 L41 41 41 52 Q41 56 37 56 L27 56 Q23 56 23 52 L23 41 12 41 Q8 41 8 37 L8 27 Q8 23 12 23 L23 23 23 12 Q23 8 27 8 L37 8 Q41 8 41 12 L41 23"/>
    <path stroke="none" fill="#E73246" d="M41 23 L52 23 Q56 23 56 27 L56 37 Q56 41 52 41 L41 41 41 23"/>
  </g>
</svg>`,$4=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M28 43 L29 44 44 44 45 43 45 30 44 29 29 29 28 30 28 43 M20 35 L21 36 26 36 26 33 23 33 23 23.95 34 23.95 34 27 37 27 37 22 36 21 21 21 20 22 20 35 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M42 32 L42 41 31 41 31 32 42 32"/>
  </g>
</svg>`,t1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M21 22 L21 26 43 26 43 22 21 22 M56 32 Q56 42 48.95 48.95 42 56 32 56 22.05 56 15 48.95 8 42 8 32 8 22.05 15 15 22.05 8 32 8 42 8 48.95 15 56 22.05 56 32 M21 38 L21 42 43 42 43 38 21 38 M21 30 L21 34 43 34 43 30 21 30"/>
  </g>
</svg>`,n1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M41 41 L41 52 Q41 56 37 56 L27 56 Q23 56 23 52 L23 41 23 23 23 12 Q23 8 27 8 L37 8 Q41 8 41 12 L41 23 41 41"/>
    <path stroke="none" fill="#E73246" d="M41 41 L41 23 52 23 Q56 23 56 27 L56 37 Q56 41 52 41 L41 41 M23 41 L12 41 Q8 41 8 37 L8 27 Q8 23 12 23 L23 23 23 41"/>
  </g>
</svg>`,L1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#E73246" d="M41 41 L41 52 Q41 56 37 56 L27 56 Q23 56 23 52 L23 41 41 41 M23 23 L23 12 Q23 8 27 8 L37 8 Q41 8 41 12 L41 23 23 23"/>
    <path stroke="none" fill="#FFFFFF" d="M23 23 L41 23 52 23 Q56 23 56 27 L56 37 Q56 41 52 41 L41 41 23 41 12 41 Q8 41 8 37 L8 27 Q8 23 12 23 L23 23"/>
  </g>
</svg>`,Q1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`,s1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M50.85 15.35 Q51.65 15 52.65 15 54.5 15 55.85 16.2 L55.95 16.3 62.6 22.7 62.65 22.7 Q64.05 24.15 64 26 64 28 62.6 29.3 L55.95 35.7 55.85 35.75 55 36.4 Q53.95 37 52.65 37 50.75 37 49.5 35.75 L49.05 35.3 Q48 34.1 48 32.4 L48 26.05 48 25.95 48 19.6 48.1 18.55 Q48.4 17.3 49.4 16.3 50 15.65 50.85 15.35 M9 36.4 L8.15 35.75 8.05 35.7 1.4 29.3 Q0 28 0 26 -0.05 24.15 1.35 22.7 L1.4 22.7 8.05 16.3 8.15 16.2 Q9.5 15 11.35 15 12.35 15 13.15 15.35 13.95 15.65 14.6 16.3 15.6 17.3 15.9 18.55 L16 19.6 16 26.05 16 26.1 16 32.4 Q16 34.1 14.95 35.3 L14.5 35.75 Q13.25 37 11.35 37 10.05 37 9 36.4 M60.5 27.15 Q61 26.7 61 26 61 25.35 60.5 24.85 L53.85 18.45 Q53.5 18.15 53.1 18.05 L52.65 18 Q51.95 18 51.5 18.45 51 18.95 51 19.6 L51 32.4 Q51 33.1 51.5 33.55 51.95 34 52.65 34 L53.85 33.55 60.5 27.15 M3.5 27.15 L10.15 33.55 Q10.65 34 11.35 34 L12.5 33.55 Q13 33.1 13 32.4 L13 19.6 Q13 18.95 12.5 18.45 12.05 18 11.35 18 L10.9 18.05 Q10.45 18.15 10.15 18.45 L3.5 24.85 Q3 25.35 3 26 3 26.7 3.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" d="M3.5 27.15 Q3 26.7 3 26 3 25.35 3.5 24.85 L10.15 18.45 Q10.45 18.15 10.9 18.05 L11.35 18 Q12.05 18 12.5 18.45 13 18.95 13 19.6 L13 32.4 Q13 33.1 12.5 33.55 L11.35 34 Q10.65 34 10.15 33.55 L3.5 27.15 M55 36.4 Q53.35 40.8 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 10.65 40.8 9 36.4 10.05 37 11.35 37 13.25 37 14.5 35.75 L14.95 35.3 Q16 36.55 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 49.05 35.3 49.5 35.75 Q50.75 37 52.65 37 53.95 37 55 36.4 M13.15 15.35 L15 13.65 Q22.05 8 32 8 42 8 48.95 13.65 L50.85 15.35 Q50 15.65 49.4 16.3 48.4 17.3 48.1 18.55 L46.55 17.1 Q40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 15.9 18.55 Q15.6 17.3 14.6 16.3 13.95 15.65 13.15 15.35 M48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 M60.5 27.15 L53.85 33.55 52.65 34 Q51.95 34 51.5 33.55 51 33.1 51 32.4 L51 19.6 Q51 18.95 51.5 18.45 51.95 18 52.65 18 L53.1 18.05 Q53.5 18.15 53.85 18.45 L60.5 24.85 Q61 25.35 61 26 61 26.7 60.5 27.15 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30"/>
  </g>
</svg>`,e1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M43 10.1 L43 10.35 Q43 12.35 41.7 13.6 L41.3 14 Q40 15.05 38.4 15 L32.8 15 31.2 15 25.6 15 Q23.9 15 22.75 14 L22.25 13.5 Q21 12.25 21 10.35 L21 10.1 Q21.1 8.4 22.25 7.15 L22.3 7.05 28.7 0.4 Q30 -1 32 -1 33.85 -1.05 35.3 0.35 L35.3 0.4 41.7 7.05 41.8 7.15 Q42.9 8.4 43 10.1 M42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37 38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 M30.85 2.5 L24.45 9.15 Q24 9.65 24 10.35 24 11.05 24.45 11.5 24.9 12 25.6 12 L38.4 12 Q39.05 12 39.55 11.5 40 11.05 40 10.35 40 9.65 39.55 9.15 L33.15 2.5 Q32.65 2 32 2 31.3 2 30.85 2.5 M30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5 M41.3 14 L41.7 13.6 Q43 12.35 43 10.35 L43 10.1 Q46.2 11.4 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 17.8 11.4 21 10.1 L21 10.35 Q21 12.25 22.25 13.5 L22.75 14 Q19.85 15.15 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 44.1 15.15 41.3 14 M31.2 15 L32.8 15 Q39.45 15.25 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q24.7 15.2 31.2 15 M30.85 2.5 Q31.3 2 32 2 32.65 2 33.15 2.5 L39.55 9.15 Q40 9.65 40 10.35 40 11.05 39.55 11.5 39.05 12 38.4 12 L25.6 12 Q24.9 12 24.45 11.5 24 11.05 24 10.35 24 9.65 24.45 9.15 L30.85 2.5 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30"/>
  </g>
</svg>`,i1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M43 10.1 L43 10.35 Q43 12.35 41.7 13.6 L41.3 14 Q40 15.05 38.4 15 L32.8 15 31.2 15 25.6 15 Q23.9 15 22.75 14 L22.25 13.5 Q21 12.25 21 10.35 L21 10.1 Q21.1 8.4 22.25 7.15 L22.3 7.05 28.7 0.4 Q30 -1 32 -1 33.85 -1.05 35.3 0.35 L35.3 0.4 41.7 7.05 41.8 7.15 Q42.9 8.4 43 10.1 M30.85 2.5 L24.45 9.15 Q24 9.65 24 10.35 24 11.05 24.45 11.5 24.9 12 25.6 12 L38.4 12 Q39.05 12 39.55 11.5 40 11.05 40 10.35 40 9.65 39.55 9.15 L33.15 2.5 Q32.65 2 32 2 31.3 2 30.85 2.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 2.5 Q31.3 2 32 2 32.65 2 33.15 2.5 L39.55 9.15 Q40 9.65 40 10.35 40 11.05 39.55 11.5 39.05 12 38.4 12 L25.6 12 Q24.9 12 24.45 11.5 24 11.05 24 10.35 24 9.65 24.45 9.15 L30.85 2.5 M41.3 14 L41.7 13.6 Q43 12.35 43 10.35 L43 10.1 Q46.2 11.4 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 17.8 11.4 21 10.1 L21 10.35 Q21 12.25 22.25 13.5 L22.75 14 Q19.85 15.15 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 44.1 15.15 41.3 14 M31.2 15 L32.8 15 Q39.45 15.25 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q24.7 15.2 31.2 15 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30"/>
  </g>
</svg>`,o1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M50.85 15.35 Q51.65 15 52.65 15 54.5 15 55.85 16.2 L55.95 16.3 62.6 22.7 62.65 22.7 Q64.05 24.15 64 26 64 28 62.6 29.3 L55.95 35.7 55.85 35.75 55 36.4 Q53.95 37 52.65 37 50.75 37 49.5 35.75 L49.05 35.3 Q48 34.1 48 32.4 L48 26.05 48 25.95 48 19.6 48.1 18.55 Q48.4 17.3 49.4 16.3 50 15.65 50.85 15.35 M60.5 27.15 Q61 26.7 61 26 61 25.35 60.5 24.85 L53.85 18.45 Q53.5 18.15 53.1 18.05 L52.65 18 Q51.95 18 51.5 18.45 51 18.95 51 19.6 L51 32.4 Q51 33.1 51.5 33.55 51.95 34 52.65 34 L53.85 33.55 60.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" d="M60.5 27.15 L53.85 33.55 52.65 34 Q51.95 34 51.5 33.55 51 33.1 51 32.4 L51 19.6 Q51 18.95 51.5 18.45 51.95 18 52.65 18 L53.1 18.05 Q53.5 18.15 53.85 18.45 L60.5 24.85 Q61 25.35 61 26 61 26.7 60.5 27.15 M55 36.4 Q53.35 40.8 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 L50.85 15.35 Q50 15.65 49.4 16.3 48.4 17.3 48.1 18.55 L46.55 17.1 Q40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 49.05 35.3 49.5 35.75 Q50.75 37 52.65 37 53.95 37 55 36.4 M48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30"/>
  </g>
</svg>`,l1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 M14.95 35.3 Q16 36.55 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 15.9 18.55 Q15.6 17.3 14.6 16.3 13.95 15.65 13.15 15.35 L15 13.65 Q22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 10.65 40.8 9 36.4 10.05 37 11.35 37 13.25 37 14.5 35.75 L14.95 35.3 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M3.5 27.15 Q3 26.7 3 26 3 25.35 3.5 24.85 L10.15 18.45 Q10.45 18.15 10.9 18.05 L11.35 18 Q12.05 18 12.5 18.45 13 18.95 13 19.6 L13 32.4 Q13 33.1 12.5 33.55 L11.35 34 Q10.65 34 10.15 33.55 L3.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M3.5 27.15 L10.15 33.55 Q10.65 34 11.35 34 L12.5 33.55 Q13 33.1 13 32.4 L13 19.6 Q13 18.95 12.5 18.45 12.05 18 11.35 18 L10.9 18.05 Q10.45 18.15 10.15 18.45 L3.5 24.85 Q3 25.35 3 26 3 26.7 3.5 27.15 M16 26.1 L16 32.4 Q16 34.1 14.95 35.3 L14.5 35.75 Q13.25 37 11.35 37 10.05 37 9 36.4 L8.15 35.75 8.05 35.7 1.4 29.3 Q0 28 0 26 -0.05 24.15 1.35 22.7 L1.4 22.7 8.05 16.3 8.15 16.2 Q9.5 15 11.35 15 12.35 15 13.15 15.35 13.95 15.65 14.6 16.3 15.6 17.3 15.9 18.55 L16 19.6 16 26.05 16 26.1"/>
  </g>
</svg>`,w1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M31 30 L31 20 28 20 28 33 37 33 37 30 31 30 M25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`,g1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M12 27.4 Q12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4"/>
  </g>
</svg>`,h1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M50.85 15.35 Q51.65 15 52.65 15 54.5 15 55.85 16.2 L55.95 16.3 62.6 22.7 62.65 22.7 Q64.05 24.15 64 26 64 28 62.6 29.3 L55.95 35.7 55.85 35.75 55 36.4 Q53.95 37 52.65 37 50.75 37 49.5 35.75 L49.05 35.3 Q48 34.1 48 32.4 L48 26.05 48 25.95 48 19.6 48.1 18.55 Q48.4 17.3 49.4 16.3 50 15.65 50.85 15.35 M9 36.4 L8.15 35.75 8.05 35.7 1.4 29.3 Q0 28 0 26 -0.05 24.15 1.35 22.7 L1.4 22.7 8.05 16.3 8.15 16.2 Q9.5 15 11.35 15 12.35 15 13.15 15.35 13.95 15.65 14.6 16.3 15.6 17.3 15.9 18.55 L16 19.6 16 26.05 16 26.1 16 32.4 Q16 34.1 14.95 35.3 L14.5 35.75 Q13.25 37 11.35 37 10.05 37 9 36.4 M60.5 27.15 Q61 26.7 61 26 61 25.35 60.5 24.85 L53.85 18.45 Q53.5 18.15 53.1 18.05 L52.65 18 Q51.95 18 51.5 18.45 51 18.95 51 19.6 L51 32.4 Q51 33.1 51.5 33.55 51.95 34 52.65 34 L53.85 33.55 60.5 27.15 M3.5 27.15 L10.15 33.55 Q10.65 34 11.35 34 L12.5 33.55 Q13 33.1 13 32.4 L13 19.6 Q13 18.95 12.5 18.45 12.05 18 11.35 18 L10.9 18.05 Q10.45 18.15 10.15 18.45 L3.5 24.85 Q3 25.35 3 26 3 26.7 3.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" d="M3.5 27.15 Q3 26.7 3 26 3 25.35 3.5 24.85 L10.15 18.45 Q10.45 18.15 10.9 18.05 L11.35 18 Q12.05 18 12.5 18.45 13 18.95 13 19.6 L13 32.4 Q13 33.1 12.5 33.55 L11.35 34 Q10.65 34 10.15 33.55 L3.5 27.15 M55 36.4 Q53.35 40.8 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 10.65 40.8 9 36.4 10.05 37 11.35 37 13.25 37 14.5 35.75 L14.95 35.3 Q16 36.55 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 49.05 35.3 49.5 35.75 Q50.75 37 52.65 37 53.95 37 55 36.4 M13.15 15.35 L15 13.65 Q22.05 8 32 8 42 8 48.95 13.65 L50.85 15.35 Q50 15.65 49.4 16.3 48.4 17.3 48.1 18.55 L46.55 17.1 Q40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 15.9 18.55 Q15.6 17.3 14.6 16.3 13.95 15.65 13.15 15.35 M48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 M60.5 27.15 L53.85 33.55 52.65 34 Q51.95 34 51.5 33.55 51 33.1 51 32.4 L51 19.6 Q51 18.95 51.5 18.45 51.95 18 52.65 18 L53.1 18.05 Q53.5 18.15 53.85 18.45 L60.5 24.85 Q61 25.35 61 26 61 26.7 60.5 27.15 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27"/>
  </g>
</svg>`,r1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M43 10.1 L43 10.35 Q43 12.35 41.7 13.6 L41.3 14 Q40 15.05 38.4 15 L32.8 15 31.2 15 25.6 15 Q23.9 15 22.75 14 L22.25 13.5 Q21 12.25 21 10.35 L21 10.1 Q21.1 8.4 22.25 7.15 L22.3 7.05 28.7 0.4 Q30 -1 32 -1 33.85 -1.05 35.3 0.35 L35.3 0.4 41.7 7.05 41.8 7.15 Q42.9 8.4 43 10.1 M42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37 38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 M30.85 2.5 L24.45 9.15 Q24 9.65 24 10.35 24 11.05 24.45 11.5 24.9 12 25.6 12 L38.4 12 Q39.05 12 39.55 11.5 40 11.05 40 10.35 40 9.65 39.55 9.15 L33.15 2.5 Q32.65 2 32 2 31.3 2 30.85 2.5 M30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5 M41.3 14 L41.7 13.6 Q43 12.35 43 10.35 L43 10.1 Q46.2 11.4 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 17.8 11.4 21 10.1 L21 10.35 Q21 12.25 22.25 13.5 L22.75 14 Q19.85 15.15 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 44.1 15.15 41.3 14 M31.2 15 L32.8 15 Q39.45 15.25 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q24.7 15.2 31.2 15 M30.85 2.5 Q31.3 2 32 2 32.65 2 33.15 2.5 L39.55 9.15 Q40 9.65 40 10.35 40 11.05 39.55 11.5 39.05 12 38.4 12 L25.6 12 Q24.9 12 24.45 11.5 24 11.05 24 10.35 24 9.65 24.45 9.15 L30.85 2.5 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30"/>
  </g>
</svg>`,a1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M43 10.1 L43 10.35 Q43 12.35 41.7 13.6 L41.3 14 Q40 15.05 38.4 15 L32.8 15 31.2 15 25.6 15 Q23.9 15 22.75 14 L22.25 13.5 Q21 12.25 21 10.35 L21 10.1 Q21.1 8.4 22.25 7.15 L22.3 7.05 28.7 0.4 Q30 -1 32 -1 33.85 -1.05 35.3 0.35 L35.3 0.4 41.7 7.05 41.8 7.15 Q42.9 8.4 43 10.1 M30.85 2.5 L24.45 9.15 Q24 9.65 24 10.35 24 11.05 24.45 11.5 24.9 12 25.6 12 L38.4 12 Q39.05 12 39.55 11.5 40 11.05 40 10.35 40 9.65 39.55 9.15 L33.15 2.5 Q32.65 2 32 2 31.3 2 30.85 2.5"/>
    <path stroke="none" fill="#FFFFFF" d="M30.85 2.5 Q31.3 2 32 2 32.65 2 33.15 2.5 L39.55 9.15 Q40 9.65 40 10.35 40 11.05 39.55 11.5 39.05 12 38.4 12 L25.6 12 Q24.9 12 24.45 11.5 24 11.05 24 10.35 24 9.65 24.45 9.15 L30.85 2.5 M41.3 14 L41.7 13.6 Q43 12.35 43 10.35 L43 10.1 Q46.2 11.4 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 17.8 11.4 21 10.1 L21 10.35 Q21 12.25 22.25 13.5 L22.75 14 Q19.85 15.15 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 44.1 15.15 41.3 14 M31.2 15 L32.8 15 Q39.45 15.25 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q24.7 15.2 31.2 15 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30"/>
  </g>
</svg>`,F1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M50.85 15.35 Q51.65 15 52.65 15 54.5 15 55.85 16.2 L55.95 16.3 62.6 22.7 62.65 22.7 Q64.05 24.15 64 26 64 28 62.6 29.3 L55.95 35.7 55.85 35.75 55 36.4 Q53.95 37 52.65 37 50.75 37 49.5 35.75 L49.05 35.3 Q48 34.1 48 32.4 L48 26.05 48 25.95 48 19.6 48.1 18.55 Q48.4 17.3 49.4 16.3 50 15.65 50.85 15.35 M60.5 27.15 Q61 26.7 61 26 61 25.35 60.5 24.85 L53.85 18.45 Q53.5 18.15 53.1 18.05 L52.65 18 Q51.95 18 51.5 18.45 51 18.95 51 19.6 L51 32.4 Q51 33.1 51.5 33.55 51.95 34 52.65 34 L53.85 33.55 60.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" d="M60.5 27.15 L53.85 33.55 52.65 34 Q51.95 34 51.5 33.55 51 33.1 51 32.4 L51 19.6 Q51 18.95 51.5 18.45 51.95 18 52.65 18 L53.1 18.05 Q53.5 18.15 53.85 18.45 L60.5 24.85 Q61 25.35 61 26 61 26.7 60.5 27.15 M55 36.4 Q53.35 40.8 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 L50.85 15.35 Q50 15.65 49.4 16.3 48.4 17.3 48.1 18.55 L46.55 17.1 Q40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 49.05 35.3 49.5 35.75 Q50.75 37 52.65 37 53.95 37 55 36.4 M48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27"/>
  </g>
</svg>`,d1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.05 37 32 37 24.85 37 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 M14.95 35.3 Q16 36.55 17.4 37.65 23.45 42.5 32 42.5 40.55 42.5 46.55 37.7 L46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 15.9 18.55 Q15.6 17.3 14.6 16.3 13.95 15.65 13.15 15.35 L15 13.65 Q22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 10.65 40.8 9 36.4 10.05 37 11.35 37 13.25 37 14.5 35.75 L14.95 35.3 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M3.5 27.15 Q3 26.7 3 26 3 25.35 3.5 24.85 L10.15 18.45 Q10.45 18.15 10.9 18.05 L11.35 18 Q12.05 18 12.5 18.45 13 18.95 13 19.6 L13 32.4 Q13 33.1 12.5 33.55 L11.35 34 Q10.65 34 10.15 33.55 L3.5 27.15"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M3.5 27.15 L10.15 33.55 Q10.65 34 11.35 34 L12.5 33.55 Q13 33.1 13 32.4 L13 19.6 Q13 18.95 12.5 18.45 12.05 18 11.35 18 L10.9 18.05 Q10.45 18.15 10.15 18.45 L3.5 24.85 Q3 25.35 3 26 3 26.7 3.5 27.15 M16 26.1 L16 32.4 Q16 34.1 14.95 35.3 L14.5 35.75 Q13.25 37 11.35 37 10.05 37 9 36.4 L8.15 35.75 8.05 35.7 1.4 29.3 Q0 28 0 26 -0.05 24.15 1.35 22.7 L1.4 22.7 8.05 16.3 8.15 16.2 Q9.5 15 11.35 15 12.35 15 13.15 15.35 13.95 15.65 14.6 16.3 15.6 17.3 15.9 18.55 L16 19.6 16 26.05 16 26.1"/>
  </g>
</svg>`,p1=`<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs/>
  <g>
    <path stroke="none" fill="#FFFFFF" d="M31.2 37 Q24.55 36.75 19.8 32.95 L19.7 32.9 Q16.3 30 16 26.1 L16 26.05 Q16.25 22 19.85 19 L19.95 18.9 Q25 15 32 15 39.15 15 44.2 19 L44.15 19 Q47.7 22 48 25.95 L48 26.05 Q47.7 30 44.2 32.9 L44 33.05 Q39.35 36.75 32.8 37 L31.2 37 M42.8 40.15 L46.55 37.7 46.6 37.65 Q51.9 33.4 52 27.4 51.85 21.4 46.55 17.1 40.55 12.3 32 12.3 23.45 12.3 17.4 17.1 L17.45 17.1 Q12.15 21.4 12 27.4 12.1 33.45 17.4 37.65 L21.25 40.15 Q21 40.8 21 41.65 21 43.5 22.25 44.85 L22.3 44.95 28.7 51.6 Q30 53 32 53 33.85 53.05 35.3 51.65 L35.3 51.6 41.7 44.95 41.8 44.85 Q43 43.5 43 41.65 L42.8 40.15 M43 50 Q43 52.5 39.75 54.25 36.55 56 32 56 27.5 56 24.25 54.25 21 52.5 21 50 L21 47.9 Q17.8 46.55 15 44.3 8 38.7 8 30.65 L8 30.1 8 29.55 8 29 8 28.5 8 28.1 8 27.95 8 27.4 Q8 19.4 15 13.65 22.05 8 32 8 42 8 48.95 13.65 56 19.4 56 27.4 L56 27.95 56 28.1 56 28.5 56 29 56 29.55 56 30.1 56 30.65 Q56 38.7 48.95 44.3 46.2 46.55 43 47.9 L43 50 M33 30 L34 29.9 34 30 35 33 38 33 36.5 28.5 Q38 27.05 38 25 38 22.95 36.5 21.45 35.05 20 33 20 L27 20 27 33 30 33 30 30 33 30 M30 27 L30 23 33 23 Q33.85 23 34.4 23.55 35 24.15 35 25 35 25.85 34.4 26.4 33.85 27 33.05 27 L30 27 M30.85 49.5 L24.45 42.85 Q24 42.35 24 41.65 L24.05 41.3 24.45 40.5 Q24.9 40 25.6 40 L38.4 40 Q39.05 40 39.55 40.5 L40 41.3 40 41.65 Q40 42.35 39.55 42.85 L33.15 49.5 Q32.65 50 32 50 31.3 50 30.85 49.5"/>
    <path stroke="none" fill="#FFFFFF" fill-opacity="0" d="M30.85 49.5 Q31.3 50 32 50 32.65 50 33.15 49.5 L39.55 42.85 Q40 42.35 40 41.65 L40 41.3 39.55 40.5 Q39.05 40 38.4 40 L25.6 40 Q24.9 40 24.45 40.5 L24.05 41.3 24 41.65 Q24 42.35 24.45 42.85 L30.85 49.5 M32.8 37 L38.4 37 Q40.25 36.95 41.7 38.4 42.45 39.15 42.8 40.15 L43 41.65 Q43 43.5 41.8 44.85 L41.7 44.95 35.3 51.6 35.3 51.65 Q33.85 53.05 32 53 30 53 28.7 51.6 L22.3 44.95 22.25 44.85 Q21 43.5 21 41.65 21 40.8 21.25 40.15 21.55 39.2 22.25 38.5 23.55 37 25.6 37 L31.2 37 32.8 37"/>
  </g>
</svg>`;var x1=U('<div class="svg-container svelte-8rvg2f"><!></div>');function T(L,t){G5(t,!0);let n=v(t,"width",3,40),Q=v(t,"height",3,40),e=v(t,"color",3,"#666666");const i={0:i4,1:o4,2:l4,3:w4,4:g4,5:h4,6:r4,7:a4,8:F4,9:d4,10:p4,11:x4,12:f4,13:k4,14:v4,15:c4,16:M4,dpad_horizontal:_4,dpad_vertical:m4,left_axis:u4,left_horizontal:y4,left_vertical:b4,left_up:E4,left_right:T4,left_left:P4,left_down:C4,right_axis:A4,right_horizontal:R4,right_vertical:I4,right_up:N4,right_right:O4,right_left:q4,right_down:G4},l={0:H4,1:D4,2:z4,3:B4,4:S4,5:U4,6:V4,7:X4,8:K4,9:j4,10:W4,11:Y4,12:Z4,13:J4,14:$4,15:t1,dpad_horizontal:n1,dpad_vertical:L1,left_axis:Q1,left_horizontal:s1,left_vertical:e1,left_up:i1,left_right:o1,left_left:l1,left_down:w1,right_axis:g1,right_horizontal:h1,right_vertical:r1,right_up:a1,right_right:F1,right_left:d1,right_down:p1},d={any:G3,"/":H3,"*":D3,",":z3,".":B3,":":S3,";":U3,"[":V3,"]":X3,"+":K3,"-":j3,"~":W3," ":Y3,'"':Z3,backspace:J3,capslock:$3,tab:t2,shift:n2,arrowleft:L2,arrowright:Q2,arrowup:s2,arrowdown:e2,pagedown:i2,pageup:o2,end:l2,home:w2,control:g2,enter:h2,a:r2,b:a2,c:F2,d:d2,e:p2,f:x2,g:f2,h:k2,i:v2,j:c2,k:M2,l:_2,m:m2,n:u2,o:y2,p:b2,q:E2,r:T2,s:P2,t:C2,u:A2,v:R2,w:I2,x:N2,y:O2,z:q2,0:G2,1:H2,2:D2,3:z2,4:B2,5:S2,6:U2,7:V2,8:X2,9:K2,f1:j2,f2:W2,f3:Y2,f4:Z2,f5:J2,f6:$2,f7:t4,f8:n4,f9:L4,f10:Q4,f11:s4,f12:e4},p={0:I3,1:N3,2:O3,3:q3};let w=D5(void 0),a=t.type;switch(["ps4","ps5"].includes(t.type)&&(a="ps"),a){case"keyboard_mouse":let k=t.input.toLowerCase();O(w,d[k],!0);break;case"xbox":O(w,l[t.input],!0);break;case"ps":O(w,i[t.input],!0);break;case"generic":t.input in p?O(w,p[t.input],!0):O(w,i[t.input],!0)}var g=N5(),y=K(g);{var s=k=>{var F=x1();let h;var b=R(F);k3(b,()=>i5(w).replace("<g>",`<g transform="scale(${Math.min(n()/64,Q()/64)})">`).replace('fill="#FFFFFF"',`fill="${e()}"`)),I(F),e5(()=>h=j(F,"",h,{height:`${Q()??""}px`,width:`${n()??""}px`})),N(k,F)};u(y,k=>{i5(w)&&k(s)})}N(L,g),H5()}l5(["pointerdown","click","pointerup","pointerout"]);l5(["keydown","click","pointerup","touchstart","touchend","pointerout","pointerdown"]);var f1=U('<div class="hint hint-up svelte-tppe42"><!> <!></div> <div class="hint hint-down svelte-tppe42"><!> <!></div>',1),k1=U("<!> <br/>",1),v1=U("<!> <br/>",1),c1=U('<div class="hint hint-left svelte-tppe42"><!> <!></div> <div class="hint hint-right svelte-tppe42"><!> <!></div>',1),M1=U('<div class="hints_container svelte-tppe42"><div class="hint svelte-tppe42"><!></div> <!> <!></div>'),_1=U('<div class="joystick_area svelte-tppe42" role="button"><!> <div class="joystick_container svelte-tppe42"><div class="joystick_back svelte-tppe42"></div> <div class="joystick_front svelte-tppe42"></div></div></div>');function P1(L,t){G5(t,!0);let n=v(t,"disabled",3,!1),Q=v(t,"size",3,100),e=v(t,"backgroundWidth",3,200),i=v(t,"backgroundHeight",3,200),l=v(t,"color",3,"rgb(106, 191, 163)"),d=v(t,"defaultOpacity",3,.5),p=v(t,"activeOpacity",3,.8),w=v(t,"border",3,1),a=v(t,"borderColor",3,"black"),g=v(t,"position",31,()=>x5([0,0])),y=v(t,"style",3,"background-color: rgb(215, 219, 221);"),s=v(t,"inputMapping",19,()=>({name:"Virtual Joystick",gamepad:-1,axes_x:0,axes_y:1,button_x_pos:[s5.DPAD_RIGHT],button_x_neg:[s5.DPAD_LEFT],button_y_pos:[s5.DPAD_DOWN],button_y_neg:[s5.DPAD_UP],deadzoneX:.05,deadzoneY:.05,key_x_pos:["d"],key_x_neg:["a"],key_y_pos:["s"],key_y_neg:["w"],invert_x:!1,invert_y:!1})),k=v(t,"context",19,()=>["default"]),F=v(t,"requiresFocus",3,!1);const h=Q()/2;let b=!1,x,c,P=D5(x5(d()));function t5(){return x}function V(r){if(n()||!s().gamepad||!b||!r.target)return;const f=r.target.getBoundingClientRect(),G=r.x-f.x,C=r.y-f.y;c&&(c.gamepadActive=!1,n5(G,C))}function n5(r,f){let G=r-e()/2,C=f-i()/2;W(G,C)}function W(r,f){s().disable_axes&&(s().disable_axes.includes("x")&&(r=0),s().disable_axes.includes("y")&&(f=0));const G=m3(r,f),C=u3(r,f);let g5=b3(G,h),L5=y3(g5,C),z=L5[0]/h,H=L5[1]/h;if(Math.abs(z)<s().deadzoneX&&Math.abs(H)<s().deadzoneY){g([0,0]),O(P,d());return}z=Math.abs(z)<1e-6?0:z,H=Math.abs(H)<1e-6?0:H,O(P,p()),g([z,H])}function X(){b=!1,O(P,d()),g([0,0])}function U5(r,f){O(P,r?p():d(),!0),s().disable_axes&&(s().disable_axes.includes("x")&&(f[0]=0),s().disable_axes.includes("y")&&(f[1]=0)),g(f)}d3(()=>(c=new A3(s(),h,W,U5,x,F()),T3(k(),c),()=>{c&&P3(k(),c)}));var V5={getElement:t5},_=_1();y5("pointerup",p3,X),f3(_,"tabindex",0),_.__keydown=()=>{x.focus()},_.__click=()=>{x.focus()};let k5;_.__pointerdown=r=>{n()||(r.stopImmediatePropagation(),b=!0,V(r))},_.__pointerup=()=>{c?.activateGamepad()},_.__pointermove=V,_.__touchstart=()=>{},_.__touchend=()=>{c?.activateGamepad()},_.__pointerout=()=>{c?.activateGamepad()};var v5=R(_);{var X5=r=>{var f=M1();let G;var C=R(f),g5=R(C);{var L5=m=>{T(m,{type:"generic",input:"left_axis"})},z=m=>{var D=N5(),A=K(D);{var B=S=>{T(S,{type:"generic",input:"right_axis"})};u(A,S=>{[2,3].includes(s().axes_x)&&[2,3].includes(s().axes_y)&&S(B)},!0)}N(m,D)};u(g5,m=>{[0,1].includes(s().axes_x)&&[0,1].includes(s().axes_y)?m(L5):m(z,!1)})}I(C);var H=E(C,2);{var j5=m=>{var D=f1(),A=K(D),B=R(A);{var S=o=>{T(o,{type:"keyboard_mouse",get input(){return s().key_y_neg[0]}})};u(B,o=>{s().key_y_neg.length>0&&o(S)})}var h5=E(B,2);{var r5=o=>{T(o,{type:"generic",get input(){return s().button_y_neg[0]}})};u(h5,o=>{s().button_y_neg.length>0&&o(r5)})}I(A);var Y=E(A,2),Z=R(Y);{var a5=o=>{T(o,{type:"keyboard_mouse",get input(){return s().key_y_pos[0]}})};u(Z,o=>{s().key_y_pos.length>0&&o(a5)})}var F5=E(Z,2);{var d5=o=>{T(o,{type:"generic",get input(){return s().button_y_pos[0]}})};u(F5,o=>{s().button_y_pos.length>0&&o(d5)})}I(Y),N(m,D)};u(H,m=>{s().disable_axes?.includes("y")||m(j5)})}var W5=E(H,2);{var Y5=m=>{var D=c1(),A=K(D),B=R(A);{var S=o=>{var J=k1(),p5=K(J);T(p5,{type:"keyboard_mouse",get input(){return s().key_x_neg[0]}}),P5(2),N(o,J)};u(B,o=>{s().key_x_neg.length>0&&o(S)})}var h5=E(B,2);{var r5=o=>{T(o,{type:"generic",get input(){return s().button_x_neg[0]}})};u(h5,o=>{s().button_x_neg.length>0&&o(r5)})}I(A);var Y=E(A,2),Z=R(Y);{var a5=o=>{var J=v1(),p5=K(J);T(p5,{type:"keyboard_mouse",get input(){return s().key_x_pos[0]}}),P5(2),N(o,J)};u(Z,o=>{s().key_x_pos.length>0&&o(a5)})}var F5=E(Z,2);{var d5=o=>{T(o,{type:"generic",get input(){return s().button_x_pos[0]}})};u(F5,o=>{s().button_x_pos.length>0&&o(d5)})}I(Y),N(m,D)};u(W5,m=>{s().disable_axes?.includes("x")||m(Y5)})}I(f),e5(()=>G=j(f,"",G,{width:e()+"px",height:i()+"px"})),A5(2,f,()=>I5),A5(1,f,()=>I5),N(r,f)};u(v5,r=>{M.showHints&&k().includes(M.context)&&r(X5)})}var w5=E(v5,2);let c5;var M5=R(w5);let _5;var K5=E(M5,2);let m5;return I(w5),I(_),x3(_,r=>x=r,()=>x),e5(()=>{k5=j(_,y(),k5,{width:e()+"px",height:i()+"px"}),c5=j(w5,"",c5,{left:(e()-Q())/2+"px",top:(i()-Q())/2+"px"}),_5=j(M5,"",_5,{width:Q()+"px",height:Q()+"px",background:l(),opacity:i5(P),transition:"none",border:w()>0?w()+"px solid "+a():0}),m5=j(K5,"",m5,{left:g()[0]*h+"px",top:g()[1]*h+"px","margin-top":h/2+"px","margin-left":h/2+"px",transition:"opacity 0.2s ease-in-out",width:h+"px",height:h+"px",background:l(),opacity:i5(P),border:w()>0?w()+"px solid "+a():0})}),y5("pointerleave",_,()=>{c?.activateGamepad()}),N(L,_),H5(V5)}l5(["keydown","click","pointerdown","pointerup","pointermove","touchstart","touchend","pointerout"]);l5(["pointerdown"]);export{s5 as G,T as I,P1 as J,E3 as a,B5 as b,M as c,q as d,T1 as e,I5 as f,E1 as g,R5 as h,c3 as l,T3 as r,A5 as t,P3 as u};
