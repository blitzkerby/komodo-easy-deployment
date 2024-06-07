import"./footer-Q-sS-PRx.js";function m(){var e=document.querySelector(".logos-slide").cloneNode(!0);document.querySelector(".logos").appendChild(e)}const v=[{src:"./landing-page/auto-scroll/hello-kitty-island-adventure.jpg",alt:"Hello Kitty Island Adventure"},{src:"./landing-page/auto-scroll/nba-2k24-arcade-edition.jpg",alt:"NBA 2K24 Arcade Edition"},{src:"./landing-page/auto-scroll/so-fresh-90s-dance.jpg",alt:"So Fresh 90s Dance"},{src:"./landing-page/auto-scroll/strength-with-jenn.jpg",alt:"Strength with Jenn"}],b=[{content:`
            <div class="in-card-container  apple-music-image">
                <div class="in-card"></div>
            </div>`},{content:`
            <div class="in-card-container  todays-acoustic-image">
                <div class="in-card"></div>
            </div>`}];document.querySelector("#infinite-scroller-section").innerHTML=`
<section class="infinite-scroller-section">
    <div class="container">
        <div class="logos">
            <div class="logos-slide">
                
            </div>
        </div>
    </div>
</section>
`;v.forEach(e=>{const t=document.createElement("div");t.classList.add("slide-item"),t.innerHTML=`
        <img src="${e.src}" alt="${e.alt}">
    `,document.querySelector(".infinite-scroller-section .logos-slide").appendChild(t)});b.forEach(e=>{const t=document.createElement("div");t.classList.add("slide-item"),t.innerHTML=e.content,document.querySelector(".infinite-scroller-section .logos-slide").appendChild(t)});m(document.querySelector(".infinite-scroller-section"));window.document.querySelectorAll(".cus-card").forEach(e=>{const t=window.document.createElement("div"),i=window.document.createElement("div"),a=e.getAttribute("data-label"),c=e.getAttribute("data-available")==="true";t.setAttribute("class",e.getAttribute("class")),i.classList.add("badge");let s="";s+=a?`<span class="label">${a}</span>`:"",s+=c?"":'<span class="available">sold out</span>',i.innerHTML=s,t.appendChild(i);const n=window.document.createElement("div");n.classList.add("image");const o=e.getAttribute("data-imgSrc"),d=e.getAttribute("data-imgPlaceholder");n.innerHTML=`
  <img class="img-top" src=${o}>
  <img class="img-placeholder" src=${d}>
  `,t.appendChild(n);const l=window.document.createElement("div");l.classList.add("product-info"),e.getAttribute("data-name");const r=e.getAttribute("data-title"),u=e.getAttribute("data-price"),g=e.getAttribute("data-rating");l.innerHTML=`
  <strong class="title p-size"  >${r}</strong>
  <div class="price" >
  <p class = "p-size">${u}</p></div>
  <div class="rating">${g}</div>
  `,t.appendChild(l);const p=e.getAttribute("data-url");t.addEventListener("click",()=>{window.location.href=p}),e.replaceWith(t)});
