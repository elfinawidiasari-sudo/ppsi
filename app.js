const H='<header class="top"><img src="logo-pemda.png" alt="Logo Pemda Lampung Barat"><img src="logo-teknokrat.png" alt="Logo Universitas Teknokrat Indonesia"><b>ResQCity</b></header>';
const F='<footer class="foot">Copyright©2026 by Elfina Widia Sari dan Dr. Erliyan Redy Susanto, M.Kom (dosen pengampu)</footer>';
document.querySelectorAll('.phone').forEach(p=>{p.insertAdjacentHTML('afterbegin',H);p.insertAdjacentHTML('beforeend',F)});
if(document.body.dataset.chrome){document.body.insertAdjacentHTML('afterbegin',H);document.body.insertAdjacentHTML('beforeend',F)}
const secs=[...document.querySelectorAll('.sec')];
function show(){if(!secs.length)return;const h=location.hash.slice(1)||secs[0].id;secs.forEach(s=>s.classList.toggle('on',s.id===h));document.querySelectorAll('.side a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+h))}
addEventListener('hashchange',show);show();
