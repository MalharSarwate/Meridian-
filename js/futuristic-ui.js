document.addEventListener('DOMContentLoaded',()=>{
 const tabs=[...document.querySelectorAll('[data-panel]')];
 function activate(button,focus=false){tabs.forEach(t=>{const active=t===button;t.setAttribute('aria-selected',active);t.tabIndex=active?0:-1;document.getElementById(t.dataset.panel).hidden=!active;});if(focus)button.focus();}
 tabs.forEach((t,i)=>{t.onclick=()=>activate(t);t.onkeydown=e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();activate(tabs[n],true);}};});
 document.getElementById('hud-area').textContent=window.MERIDIAN_AREA.name.toUpperCase();
 const map=window.realKurlaMap;if(!map)return;
 const toggle=(id,match)=>{document.getElementById(id).onclick=e=>{const b=e.currentTarget;const show=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',String(show));for(const l of map.getStyle()?.layers||[])if(match(l))map.setLayoutProperty(l.id,'visibility',show?'visible':'none');};};
 toggle('buildings-toggle',l=>l.type==='fill-extrusion');toggle('network-toggle',l=>l.id==='study-road-hit'||l.id==='study-boundary');
 new MutationObserver(()=>activate(tabs[2])).observe(document.getElementById('selection'),{childList:true});
});