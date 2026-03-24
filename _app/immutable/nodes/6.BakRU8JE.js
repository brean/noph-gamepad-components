import"../chunks/DsnmJJEf.js";import{p as oe,l as de,m as ue,J as Z,f as F,a as u,b as ae,c as M,d as $,r as _,s as l,g as ve,$ as pe,n as y,h as o,E as me,L as k,M as A,K as P,t as fe,e as ge,i as Q}from"../chunks/Ch07M8P7.js";import{c as he}from"../chunks/CpAxgXK4.js";import{a as _e,h as xe}from"../chunks/rEk7OFDx.js";import{I as B}from"../chunks/D9yjEiws.js";import{s as re}from"../chunks/D7AiCkSQ.js";import{p as g,s as $e,i as be,r as le}from"../chunks/BZfq_pgW.js";import{a as Ie,b as ee,G as C,r as we,u as ye,d as De,c as te,I as q}from"../chunks/BeFgDwDq.js";import{N as ke,a as V}from"../chunks/DV1VtAcF.js";import{B as Ne}from"../chunks/IKJIzz4s.js";import{C as ne}from"../chunks/CPNbJA6g.js";class Pe extends Ie{axesDown=-1;changeFocus;constructor(e,n,t,a=!1,p,S,h,O=!1){super(e,t,a,p,S,h,O),this.changeFocus=n}onbuttonpressed(e,n){if(this.disabled||!ee(this.input,e))return!1;const t=this.input;return t.buttons.includes(n)?this.onpressed():(t.buttons_next.includes(n)&&this.changeFocus(1),t.buttons_prev.includes(n)&&this.changeFocus(-1),!1)}onkeypressed(e){if(this.disabled)return!1;const n=this.input,t=e.key.toLowerCase();return n.keys.includes(t)?this.onpressed():(n.keys_next.includes(t)&&this.changeFocus(1),n.keys_prev.includes(t)&&this.changeFocus(-1),!1)}onupdate(e){if(this.disabled||!ee(this.input,e))return;const n=this.input;for(const t of n.axes){const a=e.axes[t];let p=n.sensitivity;if(a<-p&&this.axesDown!=t){this.changeFocus(-1),this.axesDown=t;continue}if(a>p&&this.axesDown!=t){this.changeFocus(1),this.axesDown=t;continue}a<p&&a>-p&&(this.axesDown=-1)}}}function se(L,e){oe(e,!0);let n=g(e,"requiresFocus",3,!0),t=g(e,"onpressed",3,void 0),a=g(e,"onhold",3,void 0),p=g(e,"onrelease",3,void 0),S=g(e,"selectedIndex",15,0),h=g(e,"focussed",15,0),O=g(e,"tabindex",19,()=>-1),K=g(e,"inputMapping",19,()=>({name:"Nav",gamepad:-1,axes:[1],sensitivity:.05,buttons:[C.DOWN],buttons_prev:[C.DPAD_UP],buttons_next:[C.DPAD_DOWN],keys_prev:["w"],keys_next:["s"],keys:["enter","r"]})),N=g(e,"context",19,()=>["default"]),j=g(e,"consumePress",3,!1),D=g(e,"wrapFocus",3,!0),i=g(e,"element",15),E=le(e,["$$slots","$$events","$$legacy","children","requiresFocus","onpressed","onhold","onrelease","selectedIndex","focussed","tabindex","inputMapping","context","consumePress","wrapFocus","element"]);const m=()=>i()?Array.from(i().querySelectorAll('a, button, [role="button"], .np-navigation-drawer-item')):[],T=c=>{const r=m();if(r.length===0)return;let s=h()+c;D()?(s<0&&(s=r.length-1),s>=r.length&&(s=0)):s=Math.max(0,Math.min(r.length-1,s)),h(s),r[h()]?.focus()},G=()=>{const r=m()[h()];return r&&(S(h()),r.click()),t()&&t()(),!0};let d;const f=c=>{De(d);const r=m(),s=c.target,v=r.indexOf(s);v!==-1&&h(v)},b=()=>{const c=te.activeComponents.indexOf(d);c>=0&&te.activeComponents.splice(c,1)};de(()=>{if(i())return ue(()=>{i()&&(d=new Pe(K(),T,i(),n(),G,a(),p(),j()),we(N(),d),i().addEventListener("focusin",f),i().addEventListener("focusout",b))}),()=>{ye(N(),d),i()&&(i().removeEventListener("focusin",f),i().removeEventListener("focusout",b))}}),ke(L,$e({get tabindex(){return O()}},()=>E,{get element(){return i()},set element(c){i(c)},children:(c,r)=>{var s=Z(),v=F(s);{var I=w=>{var x=Z(),J=F(x);re(J,()=>e.children),u(w,x)};be(v,w=>{e.children&&w(I)})}u(c,s)},$$slots:{default:!0}})),ae()}var Fe=M('<div class="demo-container svelte-18zcik5"><figure><!></figure></div>');function ie(L,e){let n=le(e,["$$slots","$$events","$$legacy","children"]);var t=Fe(),a=$(t);_e(a,()=>({...n}),void 0,void 0,void 0,"svelte-18zcik5");var p=$(a);re(p,()=>e.children),_(a),_(t),u(L,t)}var Ce=M("Open Nav <!>/<!>",1),Me=M('<div style="display: flex; flex-direction: row; align-items: center;"><div>Press</div> <div><!></div> <div><!></div> <div>to close,</div></div> <div style="display: flex; flex-direction: row; align-items: center;"><div><!></div> <div><!></div> <div>to select.</div></div> <!> <!> <!>',1),Le=M("<!> <!>",1),Se=M("<!> <!> <!>",1),Oe=M('<div style="display: grid;grid-template-columns: 1fr;"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper> <div> </div></div>'),Ee=M("<h1>Navigation Drawer</h1> <h2>Usage</h2> <!> <!> <!> <!>",1);function Je(L,e){oe(e,!0);let n=Q(1),t=Q(1),a=Q(void 0);var p=Ee();xe("1o0mcn0",N=>{ve(()=>{pe.title="Navigation Drawer - Noph UI"})});var S=l(F(p),4);ie(S,{children:(N,j)=>{var D=Le(),i=F(D);{let m=P(()=>({name:"",gamepad:-1,buttons:[C.RIGHT],keys:["e"]}));Ne(i,{style:"min-width: 200px;",get inputMapping(){return o(m)},onclick:()=>(o(a)&&(o(a).togglePopover(),me().then(()=>{o(a)&&o(a).focus()})),!0),children:(T,G)=>{y();var d=Ce(),f=l(F(d));q(f,{type:"ps4",get input(){return C.RIGHT}});var b=l(f,2);q(b,{type:"keyboard_mouse",input:"e"}),u(T,d)},$$slots:{default:!0}})}var E=l(i,2);se(E,{id:"demo-drawer",modal:!0,backdrop:!0,get selectedIndex(){return o(n)},set selectedIndex(m){k(n,m,!0)},get element(){return o(a)},set element(m){k(a,m,!0)},children:(m,T)=>{var G=Me(),d=F(G),f=l($(d),2),b=$(f);q(b,{type:"ps4",get input(){return C.RIGHT}}),_(f);var c=l(f,2),r=$(c);q(r,{type:"keyboard_mouse",input:"e"}),_(c),y(2),_(d);var s=l(d,2),v=$(s),I=$(v);q(I,{type:"ps4",get input(){return C.DOWN}}),_(v);var w=l(v,2),x=$(w);q(x,{type:"keyboard_mouse",input:"r"}),_(w),y(2),_(s);var J=l(s,2);{const H=U=>{B(U,{children:(W,Y)=>{y();var z=A("videocam");u(W,z)},$$slots:{default:!0}})};let R=P(()=>o(n)===0);V(J,{get selected(){return o(R)},onclick:()=>{k(n,0)},label:"Videos",badgeLabelText:"+100",icon:H,$$slots:{icon:!0}})}var X=l(J,2);{const H=U=>{B(U,{children:(W,Y)=>{y();var z=A("palette");u(W,z)},$$slots:{default:!0}})};let R=P(()=>o(n)===1);V(X,{get selected(){return o(R)},onclick:()=>{k(n,1)},label:"Styles",icon:H,$$slots:{icon:!0}})}var ce=l(X,2);{const H=U=>{B(U,{children:(W,Y)=>{y();var z=A("settings");u(W,z)},$$slots:{default:!0}})};let R=P(()=>o(n)===2);V(ce,{get selected(){return o(R)},onclick:()=>{k(n,2)},label:"Settings",icon:H,$$slots:{icon:!0}})}u(m,G)},$$slots:{default:!0}}),u(N,D)},$$slots:{default:!0}});var h=l(S,2);ne(h,{value:`<Button>Open Nav</Button>
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
</NavigationDrawer>`});var O=l(h,2);ie(O,{children:(N,j)=>{var D=Oe(),i=$(D);he(i,()=>({"--np-navigation-drawer-height":"200px"})),se(i.lastChild,{selectedIndex:-1,children:(T,G)=>{var d=Se(),f=F(d);{const r=v=>{B(v,{children:(I,w)=>{y();var x=A("videocam");u(I,x)},$$slots:{default:!0}})};let s=P(()=>o(t)===1);V(f,{get selected(){return o(s)},onclick:()=>{k(t,1)},label:"Videos",badgeLabelText:"+100",icon:r,$$slots:{icon:!0}})}var b=l(f,2);{const r=v=>{B(v,{children:(I,w)=>{y();var x=A("palette");u(I,x)},$$slots:{default:!0}})};let s=P(()=>o(t)===2);V(b,{get selected(){return o(s)},onclick:()=>{k(t,2)},label:"Styles",icon:r,$$slots:{icon:!0}})}var c=l(b,2);{const r=v=>{B(v,{children:(I,w)=>{y();var x=A("settings");u(I,x)},$$slots:{default:!0}})};let s=P(()=>o(t)===3);V(c,{get selected(){return o(s)},onclick:()=>{k(t,3)},label:"Settings",icon:r,$$slots:{icon:!0}})}u(T,d)},$$slots:{default:!0}}),_(i);var E=l(i,2),m=$(E);_(E),_(D),fe(()=>ge(m,`Selected: ${o(t)??""}`)),u(N,D)},$$slots:{default:!0}});var K=l(O,2);ne(K,{value:`<NavigationDrawer --np-navigation-drawer-height="200px">
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
</NavigationDrawer>`}),u(L,p),ae()}export{Je as component};
