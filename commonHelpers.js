import{S as d,i as y}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f=t=>fetch(`https://pixabay.com/api/?key=42682169-5194f534d6ac320016f3b6be7&q=${t}&image_type=photo&pretty=true`),l=document.querySelector(".gallery"),m=t=>t.map(({largeImageURL:s,webformatURL:n,tags:a,likes:e,views:r,comments:o,downloads:g})=>`
        <li class="gallery__item">
            <a href="${s}" class="gallery__link"
                ><img src="${n}" alt="${a}" class="gallery__image"
            /></a>
            <div class="gallery__description">
                <p class="gallery__text"><strong>Likes</strong> <span>${e}</span></p>
                <p class="gallery__text"><strong>Views</strong> <span>${r}</span></p>
                <p class="gallery__text"><strong>Comments</strong> <span>${o}</span></p>
                <p class="gallery__text"><strong>Downloads</strong> <span>${g}</span></p>
            </div>
        </li>
      `).join(""),h=t=>l.insertAdjacentHTML("beforeend",m(t));l.addEventListener("click",t=>{t.preventDefault(),new d("a",{captionsData:"alt",captionDelay:250}).open()});const i=document.querySelector(".js-form"),c=document.querySelector("button"),u=document.querySelector(".loader"),p=(t,s)=>y.show({message:t,messageColor:s,position:"topCenter"});i.addEventListener("submit",t=>{t.preventDefault(),l.innerHTML="";const s=t.currentTarget.elements["js-input"].value;s&&(c.disabled=!0,u.style.display="block",f(s).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).then(n=>{n.hits.length?h(n.hits):p("Sorry, there are no images matching your search query. Please try again!","green")}).catch(n=>p("Something went wrong. Please try again","red")).finally(()=>{c.disabled=!1,u.style.display="none"})),i.reset()});
//# sourceMappingURL=commonHelpers.js.map
