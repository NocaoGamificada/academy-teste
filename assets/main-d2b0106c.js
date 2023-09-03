import{F as _}from"./Footer-1e89bbe3.js";import{d as v,o as f,k as d,a as c,c as r,e,F as h,l as u,b as i,g as p,t as w,p as x,h as y,_ as b}from"./index-a7b2b98b.js";const M=s=>(x("data-v-e68c5e90"),s=s(),y(),s),C={class:"d-flex flex-row"},H={id:"sideMenu",class:"menu vh-100 position-relative d-flex flex-column justify-content-between align-items-center pt-5 overflow-y-auto"},B={class:"col-12 list-unstyled d-flex flex-column"},z=M(()=>e("span",{class:"text-center px-4 mt-5"},[e("img",{class:"logo",src:"imgs/marke-se academy-logo.png",alt:""})],-1)),V={class:"menu-item col-12 rounded-end-5"},S=["innerHTML"],k={class:"text mb-0 ms-3 text-nowrap"},A={class:"w-100 list-unstyled sticky-top bottom-100"},I={class:"menu-item col-12 rounded-end-5"},L=["innerHTML"],q={class:"text mb-0 ms-3 text-nowrap"},F={id:"content",class:"overflow-y-scroll overflow-x-hidden"},T=v({__name:"main",setup(s){f(()=>{const l=document.querySelector("#content"),a=document.querySelector("#sideMenu"),o=document.querySelector("#footer"),n=()=>{a.style.maxHeight=`${window.innerHeight-o.getBoundingClientRect().height}px`};n();const t=()=>{l.style.width=`${window.innerWidth-a.getBoundingClientRect().width}px`,l.style.height=`${window.innerHeight-o.getBoundingClientRect().height}px`};t(),window.onresize=()=>{t(),n()}});const g=[{title:"Meus Cursos",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>`,path:"/academy-criador/meus-cursos"},{title:"Criar Novo Curso",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>`,path:"/academy-criador/criar-novo-curso"},{title:"Análises",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"/>
</svg>`,path:"/academy-criador/analises"},{title:"Usuários",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
  class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
</svg>`,path:"/academy-criador/usuarios"}],m=[{title:"Configurações",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill"
                viewBox="0 0 16 16">
                <path
                  d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>`,path:"configuracoes"},{title:"Sair",icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-door-open-fill" viewBox="0 0 16 16">
              <path
                d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
            </svg>`,path:""}];return(l,a)=>{const o=d("router-link"),n=d("router-view");return c(),r("section",C,[e("aside",H,[e("ul",B,[z,(c(),r(h,null,u(g,t=>e("li",V,[i(o,{class:"text-decoration-none py-2 ps-4 d-flex flex-row flex-nowrap justify-content-start align-items-center",to:t.path,style:{color:"var(--secondary-color)"}},{default:p(()=>[e("div",{class:"icon border d-flex align-items-center",innerHTML:t.icon},null,8,S),e("p",k,w(t.title),1)]),_:2},1032,["to"])])),64))]),e("ul",A,[(c(),r(h,null,u(m,t=>e("li",I,[i(o,{class:"text-decoration-none py-2 ps-4 d-flex flex-row flex-nowrap justify-content-start align-items-center",to:t.path,style:{color:"var(--secondary-color)"}},{default:p(()=>[e("div",{class:"icon border d-flex align-items-center",innerHTML:t.icon},null,8,L),e("p",q,w(t.title),1)]),_:2},1032,["to"])])),64))])]),e("div",F,[i(n)]),i(_)])}}});const R=b(T,[["__scopeId","data-v-e68c5e90"]]);export{R as default};
