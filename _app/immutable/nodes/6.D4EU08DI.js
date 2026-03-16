import{c as G,a as l,f as M,t as b}from"../chunks/D4hQxbvB.js";import{p as R,F as X,A as o,f as N,G as D,a as Y,H as j,c as T,r as E,s as $,e as Z,$ as ee,n as I,E as F}from"../chunks/Dovj7JAe.js";import{c as te}from"../chunks/SP8bS9JM.js";import{a as ne,h as se}from"../chunks/BqX-D65y.js";import{I as C}from"../chunks/DqqRo0zr.js";import{p as g,s as oe,i as ae,r as J}from"../chunks/oO9wO9b3.js";import{s as K}from"../chunks/C3o3htIE.js";import{a as re,b as V,G as B,r as ie,u as ce,d as le,c as U}from"../chunks/CvEWuzLv.js";import{N as de,a as L}from"../chunks/Jc3o36Yc.js";import{B as ue}from"../chunks/Cp4FwHth.js";import{C as z}from"../chunks/Cp4-SZJ-.js";class pe extends re{axesDown=-1;changeFocus;constructor(e,r,t,c=!1,d,S,p,A=!1){super(e,t,c,d,S,p,A),this.changeFocus=r}onbuttonpressed(e,r){if(this.disabled||!V(this.input,e))return!1;const t=this.input;return t.buttons.includes(r)?this.onpressed():(t.buttons_next.includes(r)&&this.changeFocus(1),t.buttons_prev.includes(r)&&this.changeFocus(-1),!1)}onkeypressed(e){if(this.disabled)return!1;const r=this.input,t=e.key.toLowerCase();return r.keys.includes(t)?this.onpressed():(r.keys_next.includes(t)&&this.changeFocus(1),r.keys_prev.includes(t)&&this.changeFocus(-1),!1)}onupdate(e){if(this.disabled||!V(this.input,e))return;const r=this.input;for(const t of r.axes){const c=e.axes[t];let d=r.sensitivity;if(c<-d&&this.axesDown!=t){this.changeFocus(-1),this.axesDown=t;continue}if(c>d&&this.axesDown!=t){this.changeFocus(1),this.axesDown=t;continue}c<d&&c>-d&&(this.axesDown=-1)}}}function W(k,e){R(e,!0);let r=g(e,"requiresFocus",3,!0),t=g(e,"onpressed",3,void 0),c=g(e,"onhold",3,void 0),d=g(e,"onrelease",3,void 0),S=g(e,"selectedIndex",15,0),p=g(e,"focussed",15,0),A=g(e,"inputMapping",19,()=>({name:"Nav",gamepad:-1,axes:[1],sensitivity:.05,buttons:[B.DOWN],buttons_prev:[B.DPAD_UP],buttons_next:[B.DPAD_DOWN],keys_prev:["w"],keys_next:["s"],keys:["enter","r"]})),_=g(e,"context",19,()=>["default"]),x=g(e,"consumePress",3,!1),O=g(e,"wrapFocus",3,!0),y=J(e,["$$slots","$$events","$$legacy","children","requiresFocus","onpressed","onhold","onrelease","selectedIndex","focussed","inputMapping","context","consumePress","wrapFocus"]),i=j(void 0);const v=()=>o(i)?Array.from(o(i).querySelectorAll('a, button, [role="button"], .np-navigation-drawer-item')):[],w=a=>{const s=v();if(s.length===0)return;let n=p()+a;O()?(n<0&&(n=s.length-1),n>=s.length&&(n=0)):n=Math.max(0,Math.min(s.length-1,n)),p(n),s[p()]?.focus()},P=()=>{const s=v()[p()];return s&&(S(p()),s.click()),t()&&t()(),!0};let u;X(()=>{if(!o(i))return;u=new pe(A(),w,o(i),r(),P,c(),d(),x()),ie(_(),u);const a=()=>le(u),s=()=>{const n=U.activeComponents.indexOf(u);n!==-1&&U.activeComponents.splice(n,1)};return o(i).addEventListener("focusin",a),o(i).addEventListener("focusout",s),()=>{o(i)&&(ce(_(),u),o(i).removeEventListener("focusin",a),o(i).removeEventListener("focusout",s))}}),de(k,oe(()=>y,{get element(){return o(i)},set element(a){D(i,a,!0)},children:(a,s)=>{var n=G(),f=N(n);{var m=h=>{var q=G(),Q=N(q);K(Q,()=>e.children),l(h,q)};ae(f,h=>{e.children&&h(m)})}l(a,n)},$$slots:{default:!0}})),Y()}var ve=M('<div class="demo-container svelte-18zcik5"><figure><!></figure></div>');function H(k,e){let r=J(e,["$$slots","$$events","$$legacy","children"]);var t=ve(),c=T(t);ne(c,()=>({...r}),void 0,void 0,void 0,"svelte-18zcik5");var d=T(c);K(d,()=>e.children),E(c),E(t),l(k,t)}var fe=M("<!> <!> <!>",1),me=M("<!> <!>",1),ge=M("<!> <!> <!>",1),he=M('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>',1),$e=M("<h1>Navigation Drawer</h1> <h2>Usage</h2> <!> <!> <!> <!>",1);function Ce(k){let e=j(1);var r=$e();se("1o0mcn0",p=>{Z(()=>{ee.title="Navigation Drawer - Noph UI"})});var t=$(N(r),4);H(t,{children:(p,A)=>{var _=me(),x=N(_);ue(x,{popovertarget:"demo-drawer",children:(y,i)=>{I();var v=b("Open Nav");l(y,v)},$$slots:{default:!0}});var O=$(x,2);W(O,{id:"demo-drawer",modal:!0,backdrop:!0,children:(y,i)=>{var v=fe(),w=N(v);{const a=n=>{C(n,{children:(f,m)=>{I();var h=b("videocam");l(f,h)},$$slots:{default:!0}})};let s=F(()=>o(e)===1);L(w,{get selected(){return o(s)},onclick:()=>{D(e,1)},label:"Videos",badgeLabelText:"+100",icon:a,$$slots:{icon:!0}})}var P=$(w,2);{const a=n=>{C(n,{children:(f,m)=>{I();var h=b("palette");l(f,h)},$$slots:{default:!0}})};let s=F(()=>o(e)===2);L(P,{get selected(){return o(s)},onclick:()=>{D(e,2)},label:"Styles",icon:a,$$slots:{icon:!0}})}var u=$(P,2);{const a=n=>{C(n,{children:(f,m)=>{I();var h=b("settings");l(f,h)},$$slots:{default:!0}})};let s=F(()=>o(e)===3);L(u,{get selected(){return o(s)},onclick:()=>{D(e,3)},label:"Settings",icon:a,$$slots:{icon:!0}})}l(y,v)},$$slots:{default:!0}}),l(p,_)},$$slots:{default:!0}});var c=$(t,2);z(c,{value:`<Button popovertarget="demo-drawer">Open Nav</Button>
<NavigationDrawer id="demo-drawer" modal backdrop>
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
</NavigationDrawer>`});var d=$(c,2);H(d,{children:(p,A)=>{var _=he(),x=N(_);te(x,()=>({"--np-navigation-drawer-height":"200px"})),W(x.lastChild,{children:(O,y)=>{var i=ge(),v=N(i);{const u=s=>{C(s,{children:(n,f)=>{I();var m=b("videocam");l(n,m)},$$slots:{default:!0}})};let a=F(()=>o(e)===1);L(v,{get selected(){return o(a)},onclick:()=>{D(e,1)},label:"Videos",badgeLabelText:"+100",icon:u,$$slots:{icon:!0}})}var w=$(v,2);{const u=s=>{C(s,{children:(n,f)=>{I();var m=b("palette");l(n,m)},$$slots:{default:!0}})};let a=F(()=>o(e)===2);L(w,{get selected(){return o(a)},onclick:()=>{D(e,2)},label:"Styles",icon:u,$$slots:{icon:!0}})}var P=$(w,2);{const u=s=>{C(s,{children:(n,f)=>{I();var m=b("settings");l(n,m)},$$slots:{default:!0}})};let a=F(()=>o(e)===3);L(P,{get selected(){return o(a)},onclick:()=>{D(e,3)},label:"Settings",icon:u,$$slots:{icon:!0}})}l(O,i)},$$slots:{default:!0}}),E(x),l(p,_)},$$slots:{default:!0}});var S=$(d,2);z(S,{value:`<NavigationDrawer --np-navigation-drawer-height="200px">
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
</NavigationDrawer>`}),l(k,r)}export{Ce as component};
