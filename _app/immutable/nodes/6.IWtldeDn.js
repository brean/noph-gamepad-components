import{c as Z,a as u,f as M,t as A,s as de}from"../chunks/CuBzguH3.js";import{p as ie,H as ue,f as F,a as ae,c as $,r as h,s as c,e as ve,$ as pe,n as I,g as s,o as me,I as y,G as P,t as fe,J as K}from"../chunks/CkSIZBiO.js";import{c as ge}from"../chunks/BQ6wCVzu.js";import{a as he,h as _e}from"../chunks/BwRQ8euw.js";import{I as B}from"../chunks/BCdnQUH0.js";import{p as f,s as xe,i as $e,r as re}from"../chunks/BphYHr6V.js";import{s as le}from"../chunks/DCVa_2Ex.js";import{a as be,b as ee,G as C,r as Ie,u as we,d as ye,c as te,I as q}from"../chunks/2jdTXSlN.js";import{N as De,a as H}from"../chunks/CnaP8sUm.js";import{B as Ne}from"../chunks/ChQ3uI5i.js";import{C as ne}from"../chunks/Dz9Ms6U2.js";class ke extends be{axesDown=-1;changeFocus;constructor(e,n,t,o=!1,v,L,_,G=!1){super(e,t,o,v,L,_,G),this.changeFocus=n}onbuttonpressed(e,n){if(this.disabled||!ee(this.input,e))return!1;const t=this.input;return t.buttons.includes(n)?this.onpressed():(t.buttons_next.includes(n)&&this.changeFocus(1),t.buttons_prev.includes(n)&&this.changeFocus(-1),!1)}onkeypressed(e){if(this.disabled)return!1;const n=this.input,t=e.key.toLowerCase();return n.keys.includes(t)?this.onpressed():(n.keys_next.includes(t)&&this.changeFocus(1),n.keys_prev.includes(t)&&this.changeFocus(-1),!1)}onupdate(e){if(this.disabled||!ee(this.input,e))return;const n=this.input;for(const t of n.axes){const o=e.axes[t];let v=n.sensitivity;if(o<-v&&this.axesDown!=t){this.changeFocus(-1),this.axesDown=t;continue}if(o>v&&this.axesDown!=t){this.changeFocus(1),this.axesDown=t;continue}o<v&&o>-v&&(this.axesDown=-1)}}}function se(S,e){ie(e,!0);let n=f(e,"requiresFocus",3,!0),t=f(e,"onpressed",3,void 0),o=f(e,"onhold",3,void 0),v=f(e,"onrelease",3,void 0),L=f(e,"selectedIndex",15,0),_=f(e,"focussed",15,0),G=f(e,"tabindex",19,()=>-1),J=f(e,"inputMapping",19,()=>({name:"Nav",gamepad:-1,axes:[1],sensitivity:.05,buttons:[C.DOWN],buttons_prev:[C.DPAD_UP],buttons_next:[C.DPAD_DOWN],keys_prev:["w"],keys_next:["s"],keys:["enter","r"]})),D=f(e,"context",19,()=>["default"]),j=f(e,"consumePress",3,!1),w=f(e,"wrapFocus",3,!0),i=f(e,"element",15),O=re(e,["$$slots","$$events","$$legacy","children","requiresFocus","onpressed","onhold","onrelease","selectedIndex","focussed","tabindex","inputMapping","context","consumePress","wrapFocus","element"]);const m=()=>i()?Array.from(i().querySelectorAll('a, button, [role="button"], .np-navigation-drawer-item')):[],T=a=>{const r=m();if(r.length===0)return;let l=_()+a;w()?(l<0&&(l=r.length-1),l>=r.length&&(l=0)):l=Math.max(0,Math.min(r.length-1,l)),_(l),r[_()]?.focus()},E=()=>{const r=m()[_()];return r&&(L(_()),r.click()),t()&&t()(),!0};let d;ue(()=>{if(!i())return;d=new ke(J(),T,i(),n(),E,o(),v(),j()),Ie(D(),d);const a=()=>ye(d),r=()=>{const l=te.activeComponents.indexOf(d);l>=0&&te.activeComponents.splice(l,1)};return i().addEventListener("focusin",a),i().addEventListener("focusout",r),()=>{i()&&(we(D(),d),i().removeEventListener("focusin",a),i().removeEventListener("focusout",r))}}),De(S,xe({get tabindex(){return G()}},()=>O,{get element(){return i()},set element(a){i(a)},children:(a,r)=>{var l=Z(),b=F(l);{var g=p=>{var x=Z(),N=F(x);le(N,()=>e.children),u(p,x)};$e(b,p=>{e.children&&p(g)})}u(a,l)},$$slots:{default:!0}})),ae()}var Pe=M('<div class="demo-container svelte-18zcik5"><figure><!></figure></div>');function oe(S,e){let n=re(e,["$$slots","$$events","$$legacy","children"]);var t=Pe(),o=$(t);he(o,()=>({...n}),void 0,void 0,void 0,"svelte-18zcik5");var v=$(o);le(v,()=>e.children),h(o),h(t),u(S,t)}var Fe=M("Open Nav <!>/<!>",1),Ce=M('<div style="display: flex; flex-direction: row; align-items: center;"><div>Press</div> <div><!></div> <div><!></div> <div>to close,</div></div> <div style="display: flex; flex-direction: row; align-items: center;"><div><!></div> <div><!></div> <div>to select.</div></div> <!> <!> <!>',1),Me=M("<!> <!>",1),Se=M("<!> <!> <!>",1),Le=M('<div style="display: grid;grid-template-columns: 1fr;"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <div> </div></div>'),Ge=M("<h1>Navigation Drawer</h1> <h2>Usage</h2> <!> <!> <!> <!>",1);function ze(S,e){ie(e,!0);let n=K(1),t=K(1),o=K(void 0);var v=Ge();_e("1o0mcn0",D=>{ve(()=>{pe.title="Navigation Drawer - Noph UI"})});var L=c(F(v),4);oe(L,{children:(D,j)=>{var w=Me(),i=F(w);{let m=P(()=>({name:"",gamepad:-1,buttons:[C.RIGHT],keys:["e"]}));Ne(i,{style:"min-width: 200px;",get inputMapping(){return s(m)},onclick:()=>(console.log("x"),s(o)&&(s(o).togglePopover(),me().then(()=>{s(o)&&s(o).focus()})),!0),children:(T,E)=>{I();var d=Fe(),a=c(F(d));q(a,{type:"ps4",get input(){return C.RIGHT}});var r=c(a,2);q(r,{type:"keyboard_mouse",input:"e"}),u(T,d)},$$slots:{default:!0}})}var O=c(i,2);se(O,{id:"demo-drawer",modal:!0,backdrop:!0,get selectedIndex(){return s(n)},set selectedIndex(m){y(n,m,!0)},get element(){return s(o)},set element(m){y(o,m,!0)},children:(m,T)=>{var E=Ce(),d=F(E),a=c($(d),2),r=$(a);q(r,{type:"ps4",get input(){return C.RIGHT}}),h(a);var l=c(a,2),b=$(l);q(b,{type:"keyboard_mouse",input:"e"}),h(l),I(2),h(d);var g=c(d,2),p=$(g),x=$(p);q(x,{type:"ps4",get input(){return C.DOWN}}),h(p);var N=c(p,2),k=$(N);q(k,{type:"keyboard_mouse",input:"r"}),h(N),I(2),h(g);var Q=c(g,2);{const V=U=>{B(U,{children:(W,Y)=>{I();var z=A("videocam");u(W,z)},$$slots:{default:!0}})};let R=P(()=>s(n)===0);H(Q,{get selected(){return s(R)},onclick:()=>{y(n,0)},label:"Videos",badgeLabelText:"+100",icon:V,$$slots:{icon:!0}})}var X=c(Q,2);{const V=U=>{B(U,{children:(W,Y)=>{I();var z=A("palette");u(W,z)},$$slots:{default:!0}})};let R=P(()=>s(n)===1);H(X,{get selected(){return s(R)},onclick:()=>{y(n,1)},label:"Styles",icon:V,$$slots:{icon:!0}})}var ce=c(X,2);{const V=U=>{B(U,{children:(W,Y)=>{I();var z=A("settings");u(W,z)},$$slots:{default:!0}})};let R=P(()=>s(n)===2);H(ce,{get selected(){return s(R)},onclick:()=>{y(n,2)},label:"Settings",icon:V,$$slots:{icon:!0}})}u(m,E)},$$slots:{default:!0}}),u(D,w)},$$slots:{default:!0}});var _=c(L,2);ne(_,{value:`<Button>Open Nav</Button>
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
</NavigationDrawer>`});var G=c(_,2);oe(G,{children:(D,j)=>{var w=Le(),i=$(w);ge(i,()=>({"--np-navigation-drawer-height":"200px"})),se(i.lastChild,{selectedIndex:-1,children:(T,E)=>{var d=Se(),a=F(d);{const b=p=>{B(p,{children:(x,N)=>{I();var k=A("videocam");u(x,k)},$$slots:{default:!0}})};let g=P(()=>s(t)===1);H(a,{get selected(){return s(g)},onclick:()=>{y(t,1)},label:"Videos",badgeLabelText:"+100",icon:b,$$slots:{icon:!0}})}var r=c(a,2);{const b=p=>{B(p,{children:(x,N)=>{I();var k=A("palette");u(x,k)},$$slots:{default:!0}})};let g=P(()=>s(t)===2);H(r,{get selected(){return s(g)},onclick:()=>{y(t,2)},label:"Styles",icon:b,$$slots:{icon:!0}})}var l=c(r,2);{const b=p=>{B(p,{children:(x,N)=>{I();var k=A("settings");u(x,k)},$$slots:{default:!0}})};let g=P(()=>s(t)===3);H(l,{get selected(){return s(g)},onclick:()=>{y(t,3)},label:"Settings",icon:b,$$slots:{icon:!0}})}u(T,d)},$$slots:{default:!0}}),h(i);var O=c(i,2),m=$(O);h(O),h(w),fe(()=>de(m,`Selected: ${s(t)??""}`)),u(D,w)},$$slots:{default:!0}});var J=c(G,2);ne(J,{value:`<NavigationDrawer --np-navigation-drawer-height="200px">
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
</NavigationDrawer>`}),u(S,v),ae()}export{ze as component};
