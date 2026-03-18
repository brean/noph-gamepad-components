import"../chunks/DsnmJJEf.js";import{p as oe,D as de,q as ue,J as Z,f as F,a as d,b as ae,c as M,d as $,r as h,s as l,g as ve,$ as pe,n as y,h as o,w as me,L as k,M as q,K as P,t as fe,e as ge,i as Q}from"../chunks/DN8h_EDg.js";import{c as he}from"../chunks/DCajICLa.js";import{a as _e,h as xe}from"../chunks/BIk_plJh.js";import{I as A}from"../chunks/CPgLyLbD.js";import{s as re}from"../chunks/BvYZsohd.js";import{p as f,s as $e,i as be,r as le}from"../chunks/DcDWxInr.js";import{a as we,b as ee,G as C,r as Ie,u as ye,d as De,c as te,I as B}from"../chunks/0Zk7tL8G.js";import{N as ke,a as V}from"../chunks/C1gPmnrb.js";import{B as Ne}from"../chunks/hapXyTFl.js";import{C as ne}from"../chunks/C-2CTcfC.js";class Pe extends we{axesDown=-1;changeFocus;constructor(e,n,t,a=!1,v,S,_,O=!1){super(e,t,a,v,S,_,O),this.changeFocus=n}onbuttonpressed(e,n){if(this.disabled||!ee(this.input,e))return!1;const t=this.input;return t.buttons.includes(n)?this.onpressed():(t.buttons_next.includes(n)&&this.changeFocus(1),t.buttons_prev.includes(n)&&this.changeFocus(-1),!1)}onkeypressed(e){if(this.disabled)return!1;const n=this.input,t=e.key.toLowerCase();return n.keys.includes(t)?this.onpressed():(n.keys_next.includes(t)&&this.changeFocus(1),n.keys_prev.includes(t)&&this.changeFocus(-1),!1)}onupdate(e){if(this.disabled||!ee(this.input,e))return;const n=this.input;for(const t of n.axes){const a=e.axes[t];let v=n.sensitivity;if(a<-v&&this.axesDown!=t){this.changeFocus(-1),this.axesDown=t;continue}if(a>v&&this.axesDown!=t){this.changeFocus(1),this.axesDown=t;continue}a<v&&a>-v&&(this.axesDown=-1)}}}function se(L,e){oe(e,!0);let n=f(e,"requiresFocus",3,!0),t=f(e,"onpressed",3,void 0),a=f(e,"onhold",3,void 0),v=f(e,"onrelease",3,void 0),S=f(e,"selectedIndex",15,0),_=f(e,"focussed",15,0),O=f(e,"tabindex",19,()=>-1),K=f(e,"inputMapping",19,()=>({name:"Nav",gamepad:-1,axes:[1],sensitivity:.05,buttons:[C.DOWN],buttons_prev:[C.DPAD_UP],buttons_next:[C.DPAD_DOWN],keys_prev:["w"],keys_next:["s"],keys:["enter","r"]})),N=f(e,"context",19,()=>["default"]),j=f(e,"consumePress",3,!1),D=f(e,"wrapFocus",3,!0),s=f(e,"element",15),T=le(e,["$$slots","$$events","$$legacy","children","requiresFocus","onpressed","onhold","onrelease","selectedIndex","focussed","tabindex","inputMapping","context","consumePress","wrapFocus","element"]);const p=()=>s()?Array.from(s().querySelectorAll('a, button, [role="button"], .np-navigation-drawer-item')):[],E=u=>{const r=p();if(r.length===0)return;let i=_()+u;D()?(i<0&&(i=r.length-1),i>=r.length&&(i=0)):i=Math.max(0,Math.min(r.length-1,i)),_(i),r[_()]?.focus()},G=()=>{const r=p()[_()];return r&&(S(_()),r.click()),t()&&t()(),!0};let c;const m=()=>De(c),b=()=>{const u=te.activeComponents.indexOf(c);u>=0&&te.activeComponents.splice(u,1)};de(()=>{if(s())return ue(()=>{s()&&(c=new Pe(K(),E,s(),n(),G,a(),v(),j()),Ie(N(),c),s().addEventListener("focusin",m),s().addEventListener("focusout",b))}),()=>{ye(N(),c),s()&&(s().removeEventListener("focusin",m),s().removeEventListener("focusout",b))}}),ke(L,$e({get tabindex(){return O()}},()=>T,{get element(){return s()},set element(u){s(u)},children:(u,r)=>{var i=Z(),g=F(i);{var w=I=>{var x=Z(),J=F(x);re(J,()=>e.children),d(I,x)};be(g,I=>{e.children&&I(w)})}d(u,i)},$$slots:{default:!0}})),ae()}var Fe=M('<div class="demo-container svelte-18zcik5"><figure><!></figure></div>');function ie(L,e){let n=le(e,["$$slots","$$events","$$legacy","children"]);var t=Fe(),a=$(t);_e(a,()=>({...n}),void 0,void 0,void 0,"svelte-18zcik5");var v=$(a);re(v,()=>e.children),h(a),h(t),d(L,t)}var Ce=M("Open Nav <!>/<!>",1),Me=M('<div style="display: flex; flex-direction: row; align-items: center;"><div>Press</div> <div><!></div> <div><!></div> <div>to close,</div></div> <div style="display: flex; flex-direction: row; align-items: center;"><div><!></div> <div><!></div> <div>to select.</div></div> <!> <!> <!>',1),Le=M("<!> <!>",1),Se=M("<!> <!> <!>",1),Oe=M('<div style="display: grid;grid-template-columns: 1fr;"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <div> </div></div>'),Te=M("<h1>Navigation Drawer</h1> <h2>Usage</h2> <!> <!> <!> <!>",1);function Je(L,e){oe(e,!0);let n=Q(1),t=Q(1),a=Q(void 0);var v=Te();xe("1o0mcn0",N=>{ve(()=>{pe.title="Navigation Drawer - Noph UI"})});var S=l(F(v),4);ie(S,{children:(N,j)=>{var D=Le(),s=F(D);{let p=P(()=>({name:"",gamepad:-1,buttons:[C.RIGHT],keys:["e"]}));Ne(s,{style:"min-width: 200px;",get inputMapping(){return o(p)},onclick:()=>(console.log("x"),o(a)&&(o(a).togglePopover(),me().then(()=>{o(a)&&o(a).focus()})),!0),children:(E,G)=>{y();var c=Ce(),m=l(F(c));B(m,{type:"ps4",get input(){return C.RIGHT}});var b=l(m,2);B(b,{type:"keyboard_mouse",input:"e"}),d(E,c)},$$slots:{default:!0}})}var T=l(s,2);se(T,{id:"demo-drawer",modal:!0,backdrop:!0,get selectedIndex(){return o(n)},set selectedIndex(p){k(n,p,!0)},get element(){return o(a)},set element(p){k(a,p,!0)},children:(p,E)=>{var G=Me(),c=F(G),m=l($(c),2),b=$(m);B(b,{type:"ps4",get input(){return C.RIGHT}}),h(m);var u=l(m,2),r=$(u);B(r,{type:"keyboard_mouse",input:"e"}),h(u),y(2),h(c);var i=l(c,2),g=$(i),w=$(g);B(w,{type:"ps4",get input(){return C.DOWN}}),h(g);var I=l(g,2),x=$(I);B(x,{type:"keyboard_mouse",input:"r"}),h(I),y(2),h(i);var J=l(i,2);{const H=U=>{A(U,{children:(W,Y)=>{y();var z=q("videocam");d(W,z)},$$slots:{default:!0}})};let R=P(()=>o(n)===0);V(J,{get selected(){return o(R)},onclick:()=>{k(n,0)},label:"Videos",badgeLabelText:"+100",icon:H,$$slots:{icon:!0}})}var X=l(J,2);{const H=U=>{A(U,{children:(W,Y)=>{y();var z=q("palette");d(W,z)},$$slots:{default:!0}})};let R=P(()=>o(n)===1);V(X,{get selected(){return o(R)},onclick:()=>{k(n,1)},label:"Styles",icon:H,$$slots:{icon:!0}})}var ce=l(X,2);{const H=U=>{A(U,{children:(W,Y)=>{y();var z=q("settings");d(W,z)},$$slots:{default:!0}})};let R=P(()=>o(n)===2);V(ce,{get selected(){return o(R)},onclick:()=>{k(n,2)},label:"Settings",icon:H,$$slots:{icon:!0}})}d(p,G)},$$slots:{default:!0}}),d(N,D)},$$slots:{default:!0}});var _=l(S,2);ne(_,{value:`<Button>Open Nav</Button>
	<NavigationDrawer
		id="demo-drawer"
		modal
		bind:selectedIndex={selectionModalNav}
		bind:focussed={selectionModalNav}
		backdrop
		bind:element={drawerElement}>
	<NavigationDrawerItem
		selected={selection === 0}
		onclick={() => {
			selection = 0
		}}
		label="Videos"
		badgeLabelText="+100"
	>
		{#snippet icon()}<Icon>videocam</Icon>{/snippet}
	</NavigationDrawerItem>
	<NavigationDrawerItem
		selected={selection === 1}
		onclick={() => {
			selection = 1
		}}
		label="Styles"
	>
		{#snippet icon()}<Icon>palette</Icon>{/snippet}
	</NavigationDrawerItem>
	<NavigationDrawerItem
		selected={selection === 2}
		onclick={() => {
			selection = 2
		}}
		label="Settings"
	>
		{#snippet icon()}<Icon>settings</Icon>{/snippet}
	</NavigationDrawerItem>
</NavigationDrawer>`});var O=l(_,2);ie(O,{children:(N,j)=>{var D=Oe(),s=$(D);he(s,()=>({"--np-navigation-drawer-height":"200px"})),se(s.lastChild,{selectedIndex:-1,children:(E,G)=>{var c=Se(),m=F(c);{const r=g=>{A(g,{children:(w,I)=>{y();var x=q("videocam");d(w,x)},$$slots:{default:!0}})};let i=P(()=>o(t)===1);V(m,{get selected(){return o(i)},onclick:()=>{k(t,1)},label:"Videos",badgeLabelText:"+100",icon:r,$$slots:{icon:!0}})}var b=l(m,2);{const r=g=>{A(g,{children:(w,I)=>{y();var x=q("palette");d(w,x)},$$slots:{default:!0}})};let i=P(()=>o(t)===2);V(b,{get selected(){return o(i)},onclick:()=>{k(t,2)},label:"Styles",icon:r,$$slots:{icon:!0}})}var u=l(b,2);{const r=g=>{A(g,{children:(w,I)=>{y();var x=q("settings");d(w,x)},$$slots:{default:!0}})};let i=P(()=>o(t)===3);V(u,{get selected(){return o(i)},onclick:()=>{k(t,3)},label:"Settings",icon:r,$$slots:{icon:!0}})}d(E,c)},$$slots:{default:!0}}),h(s);var T=l(s,2),p=$(T);h(T),h(D),fe(()=>ge(p,`Selected: ${o(t)??""}`)),d(N,D)},$$slots:{default:!0}});var K=l(O,2);ne(K,{value:`<NavigationDrawer --np-navigation-drawer-height="200px">
  <NavigationDrawerItem
    selected={selection === 1}
    onclick={() => {
      selection = 1
    }}
    label="Videos"
    badgeLabelText="+100"
  >
    {#snippet icon()}<Icon>videocam</Icon>{/snippet}
  </NavigationDrawerItem>
  <NavigationDrawerItem
    selected={selection === 2}
    onclick={() => {
      selection = 2
    }}
    label="Styles"
  >
    {#snippet icon()}<Icon>palette</Icon>{/snippet}
  </NavigationDrawerItem>
  <NavigationDrawerItem
    selected={selection === 3}
    onclick={() => {
      selection = 3
    }}
    label="Settings"
  >
    {#snippet icon()}<Icon>settings</Icon>{/snippet}
  </NavigationDrawerItem>
</NavigationDrawer>`}),d(L,v),ae()}export{Je as component};
