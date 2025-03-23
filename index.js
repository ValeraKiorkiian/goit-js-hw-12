import{a as b,S as B,i}from"./assets/vendor-mYwBqgd4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==";async function g(o,t=1,s){const{data:n}=await b("https://pixabay.com/api/",{params:{key:"49291442-2080f69002eb1568626ca7c49",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}});return n}const f=document.querySelector(".gallery"),S=new B(".gallery-link",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({largeImageURL:s,webformatURL:n,tags:e,likes:r,views:c,comments:L,downloads:x})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img src="${n}" alt="${e}" width="360" height="200" />
        </a>
        <div class="description-container">
        <div class="description">
          <p class="description-text">Likes</p>
          <span class="description-num">${r}</span>
        </div>
        <div class="description">
          <p class="description-text">Views</p>
          <span class="description-num">${c}</span>
        </div>
        <div class="description">
          <p class="description-text">Comments</p>
          <span class="description-num">${L}</span>
        </div>
        <div class="description">
          <p class="description-text">Downloads</p>
          <span class="description-num">${x}</span>
        </div>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",t),S.refresh()}function U(){f.innerHTML=""}const p={message:"Sorry, there are no images matching your search query. Please try again",iconUrl:E,position:"topRight",messageColor:"#fff",backgroundColor:"#ef4040",theme:"dark",maxWidth:"432px"};let a=1,l="";const d=15,A=document.querySelector(".form"),y=document.querySelector(".loader"),m=document.querySelector(".pagination-btn");A.addEventListener("submit",M);m.addEventListener("click",R);async function M(o){if(o.preventDefault(),l=o.currentTarget.elements.searchText.value.trim(),u(),!l){i.error({message:"Please,enter search word",position:"topRight"});return}a=1,U(),w();try{const{hits:t,totalHits:s}=await g(l,a,d);if(t.length===0){i.show(p);return}h(t),F(),a*d>=s&&(i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#FAFAFB"}),console.log("end"),u())}catch(t){console.log(t),i.error(p)}finally{A.reset(),v()}}async function R(){w(),a++;try{const{hits:o,totalHits:t}=await g(l,a,d);h(o);const{height:s}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"}),a*d>=t&&(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"#FAFAFB"}))}catch(o){console.log(o),i.error(p)}finally{v()}}function w(){y.style.display="flex"}function v(){y.style.display="none"}function F(){m.style.display="block"}function u(){m.style.display="none"}
//# sourceMappingURL=index.js.map
