import{a as i}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="live_flmZ5dDBT3wVdeEPuv5Kj7j7B3jNrhyqYAeUN8upA4BeNOAvleJOiLXrSMvAFjWk";i.defaults.headers.common["x-api-key"]=f;async function m(){try{return(await i.get("https://api.thecatapi.com/v1/breeds")).data}catch{throw new Error("Failed to fetch breeds")}}async function h(r){try{return(await i.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${r}`)).data}catch{throw new Error("Failed to fetch cat by breed")}}const c=document.getElementById("breedSelect"),d=document.querySelector(".loader"),l=document.querySelector(".error"),u=document.querySelector(".cat-info"),g=document.getElementById("catImage"),b=document.getElementById("catDetails");function y(){d.style.display="block",c.style.display="none"}function p(){d.style.display="none",c.style.display="block"}async function w(){try{y(),(await m()).forEach(t=>{const n=document.createElement("option");n.value=t.id,n.textContent=t.name,c.appendChild(n)})}catch{l.style.display="block"}finally{p()}}async function v(r){try{const n=(await h(r))[0];g.src=n.url;const s=n.breeds[0];b.innerHTML=`
      <h3>${s.name}</h3>
      <p><strong>Description:</strong> ${s.description}</p>
      <p><strong>Temperament:</strong> ${s.temperament}</p>
    `,u.style.display="block"}catch{l.style.display="block"}finally{p()}}c.addEventListener("change",async r=>{const t=r.target.value;y(),l.style.display="none",u.style.display="none",await v(t)});w();
//# sourceMappingURL=commonHelpers.js.map