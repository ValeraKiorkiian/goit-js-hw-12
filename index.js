import{a as A,S as f,i as a}from"./assets/vendor-zn2RWmSy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==";function h(n){return A("https://pixabay.com/api/",{params:{key:"49291442-2080f69002eb1568626ca7c49",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),y=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function v(n){const r=n.map(({largeImageURL:s,webformatURL:o,tags:e,likes:t,views:i,comments:u,downloads:m})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img src="${o}" alt="${e}" width="360" height="200" />
        </a>
        <div class="description-container">
        <div class="description">
          <p class="description-text">Likes</p>
          <span class="description-num">${t}</span>
        </div>
        <div class="description">
          <p class="description-text">Views</p>
          <span class="description-num">${i}</span>
        </div>
        <div class="description">
          <p class="description-text">Comments</p>
          <span class="description-num">${u}</span>
        </div>
        <div class="description">
          <p class="description-text">Downloads</p>
          <span class="description-num">${m}</span>
        </div>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function w(){l.innerHTML=""}const c={message:"Sorry, there are no images matching your search query. Please try again",iconUrl:g,position:"topRight",messageColor:"#fff",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"},d=document.querySelector(".form"),p=document.querySelector(".loader");d.addEventListener("submit",x);function x(n){n.preventDefault();const r=n.currentTarget.elements.searchText.value.trim();r&&(w(),L(),h(r).then(({hits:s})=>{if(s.length===0){a.show(c);return}v(s)}).catch(s=>{console.log(s),a.error(c)}).finally(()=>{d.reset(),E()}))}function L(){p.style.display="flex"}function E(){p.style.display="none"}
//# sourceMappingURL=index.js.map
