import{S as d,i}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=r=>fetch(`https://pixabay.com/api/?key=42682169-5194f534d6ac320016f3b6be7&q=${r}&image_type=photo&pretty=true`),l=document.querySelector(".gallery"),y=r=>r.map(({largeImageURL:o,webformatURL:s,tags:a,likes:e,views:t,comments:n,downloads:g})=>`
        <li class="gallery__item">
            <a href="${o}" class="gallery__link"
                ><img src="${s}" alt="${a}" class="gallery__image"
            /></a>
            <div class="gallery__description">
                <p class="gallery__text"><strong>Likes</strong> <span>${e}</span></p>
                <p class="gallery__text"><strong>Views</strong> <span>${t}</span></p>
                <p class="gallery__text"><strong>Comments</strong> <span>${n}</span></p>
                <p class="gallery__text"><strong>Downloads</strong> <span>${g}</span></p>
            </div>
        </li>
      `).join(""),f=r=>{l.innerHTML="",l.insertAdjacentHTML("beforeend",y(r))};l.addEventListener("click",r=>{r.preventDefault(),new d("a",{captionsData:"alt",captionDelay:250}).open()});const c=document.querySelector(".js-form"),p=document.querySelector("button"),u=document.querySelector(".loader");c.addEventListener("submit",r=>{r.preventDefault();const o=r.currentTarget.elements["js-input"].value;o&&(p.disabled=!0,u.style.display="block",m(o).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{s.hits.length?f(s.hits):i.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"green",position:"topCenter"})}).catch(s=>{i.show({message:"Something went wrong. Please try again",messageColor:"red",position:"topCenter"})}).finally(()=>{p.disabled=!1,u.style.display="none"})),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
