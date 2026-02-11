var storylane1765503625412=function(){"use strict";var le=Object.defineProperty;var $=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var D=(h,m,d)=>m in h?le(h,m,{enumerable:!0,configurable:!0,writable:!0,value:d}):h[m]=d,w=(h,m)=>{for(var d in m||(m={}))ae.call(m,d)&&D(h,d,m[d]);if($)for(var d of $(m))de.call(m,d)&&D(h,d,m[d]);return h};var A=(h,m,d)=>new Promise((P,E)=>{var F=b=>{try{C(d.next(b))}catch(v){E(v)}},I=b=>{try{C(d.throw(b))}catch(v){E(v)}},C=b=>b.done?P(b.value):Promise.resolve(b.value).then(F,I);C((d=d.apply(h,m)).next())});const h="storylane-embed-demo",m="storylane-token-submit",d="storylane-tracking",P="storylane-host-info",E="storylane-demo-host",F="storylane-close-demo-player",I="hubspotutk",C="_mkto_trk",b=/visitor_id\d+/,v={CloseModal:"sl-close"},z=`.sl-close-btn {
  background: #ffffff;
  color: #1a1348;
  border: 2px solid #fffffe;
  border-radius: 20px;
  line-height: 18px;
  box-shadow: 0px 0px 5px #444;
  cursor: pointer;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  height: 24px;
  width: 24px;
  padding: 0px;
}

.sl-close-btn:hover {
  box-shadow: 0px 0px 6px rgba(255, 255, 100, 1);
}
`;class q extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),n=document.createElement("button");n.classList.add("sl-close-btn"),n.innerHTML='<svg viewBox="0 0 24 24" class="__sl-close-btn" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#9392A3" d="m17.674 15.738-9.5-9.5A1.11 1.11 0 0 0 6.6 6.235l-.274.274a1.11 1.11 0 0 0 0 1.573l9.5 9.5a1.114 1.114 0 0 0 1.574 0l.273-.274a1.11 1.11 0 0 0 0-1.573"></path><path fill="#9392A3" d="m17.675 6.51-.275-.275a1.113 1.113 0 0 0-1.573 0l-9.5 9.5a1.113 1.113 0 0 0 0 1.573l.272.274a1.11 1.11 0 0 0 1.574 0l9.5-9.5a1.113 1.113 0 0 0 0-1.573"></path><path fill="#F3F5F7" d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24"></path><path fill="#9392A3" d="M16.215 14.964 13.251 12l2.964-2.964a.883.883 0 0 0 0-1.25.884.884 0 0 0-1.25 0L12 10.748 9.036 7.785a.885.885 0 0 0-1.251 1.251L10.749 12l-2.964 2.964a.883.883 0 1 0 1.25 1.251L12 13.251l2.964 2.964a.884.884 0 0 0 1.251-1.25"></path></svg>';const t=document.createElement("style");t.textContent=z,e.appendChild(t),e.appendChild(n),this.addCloseEventListener(n)}addCloseEventListener(e){const n=()=>{this.dispatchEvent(new Event(v.CloseModal))};e.addEventListener("click",n),this.addEventListener("disconnected",()=>{e.removeEventListener("click",n)})}}customElements.get("sl-close-button")||customElements.define("sl-close-button",q);class U{constructor(){this.storylane_style="",this.embed_style="",this.demo_html=""}Play(e){if(typeof e!="object")return console.log("Error: Invalid params."),0;switch(this.params=e,this.params.type){case"popup":this.Player(e);break;case"preview_embed":this.PreviewEmbed(e);break}}PreviewEmbed(e){var a;if(typeof e!="object")return console.log("Error: Invalid params."),0;let n={scale:.9};this.params=w(w({},n),e);const t=this.params.demo_url;if(!t)return console.log("Error: Invalid params. Please provide valid demo_url"),0;console.log("creating storylane demo with preview");const r=this.params.element,i=r.closest(".sl-embed-container");if(!i){console.error("Unable to find .sl-embed-container");return}const u=i.querySelector(".sl-preview");if(!u){console.error("Unable to find .sl-preview");return}const l=i.querySelector("iframe.sl-demo");if(!l){console.error('Unable to find "iframe.sl-demo"');return}(a=r.parentElement)!=null&&a.classList.contains("sl-preview-heading")?r.parentElement.style.display="none":r.style.display="none",u.style.display="none",l.style.display="block",l.style.backgroundColor="#f3f5f7",l.style.borderRadius="inherit",l.src=t}Player(e){if(typeof e!="object")return console.log("Error: Invalid params."),0;let n={scale:"0.9",width:"100%",padding_bottom:"calc(56.33% + 27px)",fullscreen:!1};if(this.params=w(w({},n),e),!this.params.hasOwnProperty("demo_url"))return console.log("Error: Invalid params. Please provide valid demo_url"),0;this.storylane_style=`
          #__sl-demo-wrapper{
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 9999999;
            background: rgba(0,0,0,0.8);
          }
          .__sl-embed-container{
            z-index: 99999999;
            position: relative;
            width: 100%;
            display: flex;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            align-items: center;
            justify-content: center;
          }
          .__sl-embed{
            position:relative;
            width:100%;
            height:0;
          }
          .__sl-embed-portrait {
            padding-bottom: 0px !important;
            height: 100% !important;
          }
          .__sl-player-iframe {
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            border:none;
          }`,this.embed_style=`
          padding-bottom: $padding_bottom;
          transform: scale($scale);
          -webkit-transform: scale($scale);
          -moz-transform: scale($scale);
          -o-transform: scale($scale);
        `,this.demo_html=`
          <div class="__sl-embed-container">
            <div style="position:absolute; top:8px; right:4px;z-index:1;">
              <sl-close-button></sl-close-button>
            </div>
            <div class="__sl-embed-wrapper" style="width: $embed_width; height: $embed_height; position: relative; display:flex; align-items:center">
              <div class="__sl-embed">
                <iframe class='__sl-player-iframe' allowfullscreen></iframe>
              </div>
            </div>
          </div>
        `,console.log("creating storylane demo");let t=document.getElementById("__sl-demo-wrapper");if(t==null){t=document.createElement("div"),t.id="__sl-demo-wrapper",t.setAttribute("style","display: none;"),document.body.appendChild(t);let g=document.createElement("style");g.innerHTML=this.storylane_style,document.head.appendChild(g)}t.innerHTML=this.demo_html;const r=this.params.element,i=document.getElementsByClassName("__sl-player-iframe")[0],u=document.getElementsByClassName("__sl-embed-wrapper")[0],l=document.getElementsByClassName("__sl-embed")[0],a=parseFloat(this.params.scale),s=window.innerWidth<window.innerHeight;let p=window.innerHeight-50,f=window.innerWidth-50;s&&(p=window.innerHeight,f=window.innerWidth);let c=f,y="auto";if(this.params.fullscreen===!0)c="100%";else{let g=parseFloat(this.params.height),M=parseFloat(this.params.width);if(!isNaN(g)&&g!=0&&!isNaN(M)&&M!=0){let ie=parseFloat((g/M).toFixed(2));c=M,g>p&&(c=parseFloat((p/ie).toFixed(2))),c>f&&(c=f)}isNaN(a)||(c=(c*a).toFixed(2)),c=c+"px"}s&&(c="100%",this.params.demo_type==="html"&&l&&(y="100%",l.classList.add("__sl-embed-portrait")));let _=u.getAttribute("style")||"";_=_.replaceAll(/\$embed_width/g,c),_=_.replaceAll(/\$embed_height/g,y),u.setAttribute("style",_);let k=this.embed_style.replaceAll(/\$scale/g,"1.0");const S=this.params.padding_bottom;k=k.replaceAll(/\$padding_bottom/g,S),l==null||l.setAttribute("style",k),r&&r.onclick===null?r.addEventListener("click",g=>{i&&this.params&&t&&(i.src=this.params.demo_url,t.style.display="")}):(i&&(i.src=this.params.demo_url),t.style.display="");function j(g){(g.key==="Escape"||g.key==="Esc")&&(i&&t&&(t.style.display="none",i.src=""),document.removeEventListener("keydown",j))}document.addEventListener("keydown",j);const x=document.querySelector("sl-close-button");function O(){i&&t&&(t.style.display="none",i.src=""),x==null||x.removeEventListener(v.CloseModal,O)}x==null||x.addEventListener(v.CloseModal,O)}Embed(e){if(typeof e!="object")return console.log("Error: Invalid params."),0;let n={scale:"0.9"};if(this.params=w(w({},n),e),!this.params.hasOwnProperty("demo_url"))return console.log("Error: Invalid params. Please provide valid demo_url"),0;this.storylane_style=`
          #__sl-demo-embed-wrapper{
            width: 100%;
            height: 100%;
            z-index: 10000;
            background: rgba(0,0,0,0.6);
            background-color: #F3F5F7;
            border: 0px solid black;
          }
          .__sl-iframe{border: 0px; width: 100%; height: 100%; min-height: 100vh;}
  
          .__sl-demo-preview{
            width:100%; height: 100%;
            transform:scale(1.0);
            background-color: #ffffff;
            z-index: 999999999;
          }
  
          .__sl-play{
            z-index: 10003;
            box-sizing: border-box;
              display:block;
              width:140px;
              height:60px;
              padding-top: 14px;
              padding-left: 8px;
              line-height: 20px;
              border: 3px solid #fff;
              border-radius: 5px;
              color: #f5f5f5;
              text-align:center;
              text-decoration:none;
              background-color: #e0007a;
              font-size: 22px;
              font-weight: normal;
              transition: all 0.3s ease;
            position: relative;
            top: 45%;
            left: 45%;
            cursor: pointer;
          }
  
          .__sl-play:hover {
              background-color: #c1066c;
              box-shadow: 0px 0px 6px rgba(255,255,100,1);
          }
        `;let t=document.getElementById("__sl-demo-embed-wrapper");if(t==null){t=document.createElement("div"),t.id="__sl-demo-embed-wrapper",t.removeAttribute("style");const l=document.createElement("style");l.innerHTML=this.storylane_style,document.head.appendChild(l)}let r=this.params.element;const i=this.params.demo_url,u=this.params.demo_preview;if(i){console.log("creating storylane embedded demo");const l=document.createElement("iframe");l.classList.add("__sl-iframe"),l.src=i,t.appendChild(l),r.innerHTML="",r.appendChild(t)}else if(u){console.log("creating storylane embedded demo with preview");const l=r.innerHTML,a=document.createElement("div");a.classList.add("__sl-demo-preview"),a.setAttribute("style","background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('"+u+"') no-repeat; background-size: 100% auto;");const s=document.createElement("a");s.classList.add("__sl-play"),s.text="Start Demo",s.addEventListener("click",p=>{a.remove(),t&&(t.innerHTML=l)}),a.appendChild(s),t.appendChild(a),r.innerHTML="",r.appendChild(t)}}}function B(o,e){const n=o.split("; ");for(let t=0;t<n.length;t++){const i=n[t].split("=");if(i[0].match(e))return i[1]}return null}function K(o,e,n,t){try{return o.cookie=e+"="+(n||"")+"; max-age="+t+"; path=/; secure",!0}catch(r){return!1}}const N="slReferer";function W(o){try{const e=H(o);!T(o)&&e&&J(o,e)}catch(e){}}function H(o){const e=o.referrer;return e?btoa(e):null}function T(o){const e=B(o.cookie,N);return e?decodeURIComponent(e):null}function J(o,e){K(o,N,encodeURIComponent(e),31536e3)}function V(){return A(this,null,function*(){return G()})}function G(){try{const o=document.cookie.match(/_ga=(.+?)(;|$)/);if(!o)return null;const n=o[1].split(".");return n.length>=3?n.slice(2).join("."):null}catch(o){return console.error("Error accessing document.cookie:",o),null}}function Q(o){return A(this,null,function*(){var n,t,r,i,u;const e=o.data;if(typeof e=="object"&&e!==null&&e&&e.source===h){let a=new URL(window.location.toString()).searchParams,s=a.get("email");a.delete("email");let p=[],f={};for(const[y,_]of a.entries())if(y.match(/token/)!==null){p.push(y);let k=(n=y.match(/^token\[(.*)]$/))==null?void 0:n[1];k&&(f[k]=_)}for(const y of p)a.delete(y);s&&((t=o.source)==null||t.postMessage({source:E,lead:{email:s}},{targetOrigin:o.origin})),Object.keys(f).length>0&&((r=o.source)==null||r.postMessage({message:m,payload:{token:f}},{targetOrigin:o.origin}));const c=yield V();return(i=o.source)==null||i.postMessage({source:P,host:{url:window.location.href,gaClientId:c,referer:{current:H(document)}},url_query:a.toString()},{targetOrigin:o.origin}),(u=o.source)==null||u.postMessage({source:d,tracking:btoa(document.cookie),ref:{original:T(document),current:H(document)}},{targetOrigin:o.origin}),!0}return!1})}const L=({tracking:o,encode:e=!0})=>{try{const n="https://api.storylane.io/api/v1/shared/tracking",t=e?btoa(o):o;if("sendBeacon"in navigator){const r=new FormData;r.set("tracking",t),navigator.sendBeacon(n,r)}else fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},keepalive:!0,body:JSON.stringify({tracking:t})})}catch(n){}};function R(o,e){const n=o.split("; ");for(let t=0;t<n.length;t++){const r=n[t];if(r.split("=")[0].match(e))return r}return null}function X(o){const e=o.data;if(typeof e=="object"&&e!==null&&e.type==="hsFormCallback"&&e.eventName==="onFormSubmitted"){const n=R(document.cookie,I);return n&&L({tracking:n}),!0}return!1}function Y(o){const e=o.data;if(typeof e=="object"&&e!==null&&e.message==="LD_SAVE_FORM_DATA"){const n=R(document.cookie,b);return n&&L({tracking:n}),!0}return!1}function Z(o){if(typeof o.data=="string"&&o.data.startsWith('{"mktoResponse"')){const e=JSON.parse(o.data);if(typeof e=="object"&&"mktoResponse"in e&&e.mktoResponse.error===!1){const n=R(document.cookie,C);n&&L({tracking:n})}return!0}return!1}function ee(o){o.querySelectorAll("form").forEach(n=>{n.addEventListener("submit",t=>{try{L({tracking:o.cookie})}catch(r){console.error(r)}},{passive:!0,capture:!1})})}const te=`.sl-preview-img {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  z-index: 999991;
  object-fit: cover;
  object-position: 0% 0%; /* top-left corner */
}
`;function oe(o){const e=o.data;if(typeof e=="object"&&e!==null&&"message"in e&&e.message===F){const n=document.getElementById("__sl-demo-wrapper"),t=document.getElementsByClassName("__sl-player-iframe")[0];t&&n&&(n.style.display="none",t.src="")}return!1}function ne(o){const e=o.createElement("style");e.innerHTML=te,o.head.appendChild(e)}function re(){if("Storylane"in window)return;const o=new U;window.Storylane=o,se();function e(){var u,l,a;ee(document),W(document),ne(document);const n=document.querySelectorAll(".sl-preview");if(n.length>0)for(const s of n){let p=document.createElement("img");p.src=((u=s.style.backgroundImage.match(/(https?:\/\/[^ |'|"]*)/))==null?void 0:u[0])||"",p.classList.add("sl-preview-img"),p.alt="Preview image of the interactive demo",s.appendChild(p),s.style.backgroundImage="",s.parentElement&&(s.parentElement.style.borderRadius="10px"),s.style.borderRadius="inherit"}const t=document.querySelectorAll(".sl-demo-btn");if(t.length>0)for(const s of t)(l=window.Storylane)==null||l.Player({element:s,demo_url:s.getAttribute("data-sl-url"),scale:s.getAttribute("data-sl-scale")});const r=document.querySelectorAll('a[href*="?sl_popup"],a[href*="&sl_popup"]');if(r.length>0)for(const s of r){let p=new URL(s.getAttribute("href")||""),f=new URLSearchParams(p.search),c=f.get("config"),y=c&&c.length?JSON.parse(atob(c)):{};f.delete("config"),f.delete("sl_popup"),p.search=f.toString();const _={element:s,demo_url:p,type:"popup"};s.onclick=function(k){var S;k.preventDefault(),(S=window.Storylane)==null||S.Play(w(w({},_),y))}}const i=document.querySelectorAll(".sl-inline-embed");if(i.length>0)for(const s of i)(a=window.Storylane)==null||a.Embed({element:s,demo_preview:s.getAttribute("data-sl-preview"),demo_url:s.getAttribute("data-sl-url"),scale:s.getAttribute("data-sl-scale")})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}function se(){const o=[X,Q,Y,Z,oe];window.addEventListener("message",e=>A(this,null,function*(){for(const n of o)try{if((yield Promise.resolve(n(e)))===!0)break}catch(t){console.error("Error in message handler:",t)}}))}return function(){re()}(),""}();
