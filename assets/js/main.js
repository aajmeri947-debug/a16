(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var P={'8x8':[64,6,'4–6'],'9x13':[117,12,'8–12'],'10x15':[150,15,'12–16'],'12x17':[204,20,'16–20']},pan='9x13',sauce=0;
function pc(){var p=P[pan],L=+$('pc-l').value,area=p[0],f=area/117,lf=L/4;$('pc-lv').textContent=L;$('pc-sv').textContent=p[2]+' servings';
 $('pc-a').textContent=Math.ceil(3*f*L)+' sheets ('+Math.round(Math.ceil(3*f*L)*20)+' g)';$('pc-b').textContent=(6*f*lf).toFixed(1)+' cups';$('pc-c').textContent=(4*f*lf).toFixed(1)+' cups';$('pc-d').textContent=Math.round(450*f*Math.max(.8,lf*.9))+' g';$('pc-e').textContent=Math.round(100*f*lf)+' g';
 $('pc-sn').textContent=sauce?'Vegetable sauce':'Ragù';var x=$('pc-x'),h='',c=sauce?'#E07A3E':'#C8372D';for(var i=0;i<L;i++){h+='<i style="background:#F1C86A;height:10px;animation-delay:'+(i*3)*.08+'s"></i>';if(i<L-1){h+='<i style="background:'+c+';animation-delay:'+(i*3+1)*.08+'s"></i><i style="background:#fff;height:12px;animation-delay:'+(i*3+2)*.08+'s"></i>';}}
 h+='<i style="background:#fff;height:12px;animation-delay:'+(L*3)*.08+'s"></i><i style="background:#E5A23B;height:20px;animation-delay:'+(L*3+1)*.08+'s"></i>';x.innerHTML=h;x.style.width=Math.min(100,52+Math.sqrt(area)*3.2)+'%';}
if($('pc-x')){var pb=[].slice.call(document.querySelectorAll('#pc-p button'));pb.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){pan=b.dataset.v;pb.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});pc();});});
 var sb=[].slice.call(document.querySelectorAll('#pc-s button'));sb.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){sauce=+b.dataset.v;sb.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});pc();});});$('pc-l').addEventListener('input',pc);pc();}
var B=[['375°F',[['Heat the oven',15,'to 375°F'],['Bake covered',25,'foil on, to stop the top drying'],['Bake uncovered',25,'until bubbling and golden'],['Rest',15,'so slices hold together']]],
['375°F',[['Take it out of the fridge',30,'while the oven heats'],['Bake covered',40,'cold lasagna needs longer'],['Bake uncovered',20,'until golden at the edges'],['Rest',15,'before slicing']]],
['375°F',[['Heat the oven',15,'no need to thaw'],['Bake covered',75,'foil tight, keep it on'],['Bake uncovered',15,'brown the cheese; check it is piping hot in the centre'],['Rest',15,'before slicing']]],
['350°F',[['Heat the oven',10,'add a spoonful of water or sauce to the slice'],['Warm covered',20,'until hot all the way through'],['Rest',3,'then serve']]]],st=0;
function hm(m){m=((m%1440)+1440)%1440;var h=Math.floor(m/60),mm=m%60,ap=h<12?'am':'pm',hh=h%12||12;return hh+':'+String(mm).padStart(2,'0')+' '+ap;}
function bk(){var b=B[st],t=($('bk-t').value||'19:00').split(':'),end=(+t[0])*60+(+t[1]),tot=b[1].reduce(function(a,s){return a+s[1];},0),cur=end-tot,h='';$('bk-o').textContent=b[0];
 b[1].forEach(function(s,i){h+='<li style="animation-delay:'+i*.1+'s"><b>'+hm(cur)+' · '+s[0]+'</b><span>'+s[1]+' min, '+s[2]+'</span></li>';cur+=s[1];});h+='<li style="animation-delay:'+b[1].length*.1+'s"><b>'+hm(end)+' · Serve</b><span>Total '+Math.floor(tot/60)+' h '+(tot%60)+' min</span></li>';$('bk-l').innerHTML=h;}
if($('bk-l')){var bb=[].slice.call(document.querySelectorAll('#bk-s button'));bb.forEach(function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){st=+b.dataset.v;bb.forEach(function(o){o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b);});bk();});});$('bk-t').addEventListener('input',bk);$('bk-t').addEventListener('change',bk);bk();}
})();
