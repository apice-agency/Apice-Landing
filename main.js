// Cambiá este número (formato internacional, sin + ni espacios). Ej. Argentina: 5493415551234
var WHATSAPP_NUMBER="5492657263564";
var MSG="¡Hola Apice! Quiero probar mi web gratis por 7 días. ¿Podemos agendar una reunión?";
var url="https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(MSG);
document.querySelectorAll(".js-wa").forEach(function(a){a.href=url;a.target="_blank";a.rel="noopener"});
document.getElementById("y").textContent=new Date().getFullYear();
var calm=matchMedia("(prefers-reduced-motion:reduce)").matches;
// escritura rotativa
if(!calm){var tw=document.getElementById("tw"),ph=["más online.","más ordenado.","sin trabajo repetido.","abierto las 24 hs."],pi=0,ci=ph[0].length,del=true;
(function t(){var w=ph[pi];if(del){ci--;tw.textContent=w.slice(0,ci);if(ci<=0){del=false;pi=(pi+1)%ph.length}setTimeout(t,35)}
else{var n=ph[pi];ci++;tw.textContent=n.slice(0,ci);if(ci>=n.length){del=true;setTimeout(t,1800)}else setTimeout(t,70)}})();
setTimeout(function(){},0)}
// revelar al hacer scroll
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
// parallax + barra + línea de pasos
var px=[].slice.call(document.querySelectorAll(".px")),hero=document.getElementById("top"),bar=document.getElementById("bar"),steps=document.getElementById("steps");
function onScroll(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+(h>0?scrollY/h:0)+")";
 if(!calm)px.forEach(function(p){p.style.setProperty("--sy",(-scrollY*p.dataset.depth/180)+"px")});
 var r=steps.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.75-r.top)/r.height));steps.style.setProperty("--p",p)}
addEventListener("scroll",onScroll,{passive:true});onScroll();
if(!calm&&matchMedia("(pointer:fine)").matches){
 hero.addEventListener("pointermove",function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
  px.forEach(function(p){var d=+p.dataset.depth;p.style.setProperty("--x",(x*d*1.6)+"px");p.style.setProperty("--y",(y*d*1.6)+"px")})});
 document.querySelectorAll(".card").forEach(function(c){
  c.addEventListener("pointermove",function(e){var b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;c.style.transform="perspective(600px) rotateY("+(x*10)+"deg) rotateX("+(-y*10)+"deg) translateY(-3px)"});
  c.addEventListener("pointerleave",function(){c.style.transform=""})})}
