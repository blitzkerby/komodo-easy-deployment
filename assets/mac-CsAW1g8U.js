import"./footer-Q-sS-PRx.js";function s(t){const e=document.querySelector(`#${t} .slider-wrapper .image-list`),l=document.querySelectorAll(`#${t} .slider-wrapper .slide-button`),n=e.scrollWidth-e.clientWidth-50,o=l[0],g=l[1];e.scrollBy({right:100,behavior:"smooth"}),o.classList.toggle("faded"),l.forEach(a=>{a.addEventListener("click",()=>{const m=a.id==="prev-slide"?-1:1,L=e.clientWidth*m;e.scrollBy({left:L,behavior:"smooth"})})});const c=()=>{o.classList.toggle("faded",e.scrollLeft<=0),g.classList.toggle("faded",e.scrollLeft>=n)};e.addEventListener("scroll",()=>{c()}),e.addEventListener("resize",()=>{c()})}s("get-to-know-mac");s("laptop-gallery");s("desktop-gallery");s("display-gallery");s("buy-mac");s("mac-essentials");const i=t=>document.querySelector(t),r=document.querySelector(".btn-menu"),d=document.querySelectorAll(".gallery-item");d.forEach(t=>t.classList.add("hidden"));r.addEventListener("click",t=>{d.forEach(e=>e.classList.add("hidden")),r.querySelectorAll(".btn").forEach(e=>e.classList.remove("active")),t.target.classList.contains("btn-1")?(t.target.classList.toggle("active"),i(".laptops").classList.remove("hidden")):t.target.classList.contains("btn-2")?(t.target.classList.add("active"),i(".desktops").classList.remove("hidden")):t.target.classList.contains("btn-3")&&(t.target.classList.toggle("active"),i(".displays").classList.remove("hidden"))});window.addEventListener("load",()=>{document.querySelector(".laptops").classList.remove("hidden"),document.querySelector(".btn-1").classList.add("active")});
