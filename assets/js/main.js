/* ================= PRELOADER ================= */
(function(){
  const loader=document.getElementById('loader');
  if(!loader)return;
  const bar=loader.querySelector('.loader-bar i');
  const pct=loader.querySelector('.loader-pct');
  let p=0;
  const t=setInterval(()=>{
    p=Math.min(100,p+Math.random()*17+6);
    bar.style.transform='scaleX('+(p/100)+')';
    pct.textContent=String(Math.floor(p)).padStart(3,'0')+' %';
    if(p>=100){
      clearInterval(t);
      setTimeout(()=>{loader.classList.add('done');document.body.classList.add('loaded');},350);
    }
  },130);
})();

/* ================= CURSOR ================= */
(function(){
  if(matchMedia('(hover:none)').matches)return;
  const dot=document.createElement('div');dot.className='cursor-dot';
  const ring=document.createElement('div');ring.className='cursor-ring';
  document.body.append(dot,ring);
  let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
  addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx-3}px,${my-3}px)`;});
  (function loop(){
    rx+=(mx-rx)*.14;ry+=(my-ry)*.14;
    ring.style.transform=`translate(${rx-ring.offsetWidth/2}px,${ry-ring.offsetHeight/2}px)`;
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,.idx-row').forEach(el=>{
    el.addEventListener('pointerenter',()=>ring.classList.add('hot'));
    el.addEventListener('pointerleave',()=>ring.classList.remove('hot'));
  });
})();

/* ================= MENU ================= */
(function(){
  const btn=document.getElementById('menuToggle');
  const menu=document.getElementById('menu');
  if(!btn||!menu)return;
  const openLabel=btn.dataset.openLabel||'MENU';
  const closeLabel=btn.dataset.closeLabel||'FECHAR';
  const label=btn.querySelector('.menu-label');
  let scrollY=0;
  const deck=document.getElementById('deck');

  function getScrollPos(){
    return deck?deck.scrollTop:window.scrollY;
  }

  function restoreScroll(pos){
    if(deck)deck.scrollTop=pos;
    else window.scrollTo(0,pos);
  }

  function setMenu(open){
    document.body.classList.toggle('menu-open',open);
    btn.setAttribute('aria-expanded',open);
    if(label)label.textContent=open?closeLabel:openLabel;
    if(open){
      scrollY=getScrollPos();
      document.body.style.position='fixed';
      document.body.style.top=deck?`-${window.scrollY||0}px`:`-${scrollY}px`;
      document.body.style.left='0';
      document.body.style.right='0';
      if(deck)deck.style.overflow='hidden';
    }else{
      document.body.style.position='';
      document.body.style.top='';
      document.body.style.left='';
      document.body.style.right='0';
      if(deck){
        deck.style.overflow='';
        restoreScroll(scrollY);
      }else{
        restoreScroll(scrollY);
      }
      scrollY=0;
    }
  }

  btn.addEventListener('click',()=>setMenu(!document.body.classList.contains('menu-open')));
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
  addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false);});
})();

/* ================= PARTICLE FIELD ================= */
const Field=(function(){
  const cv=document.getElementById('field');
  if(!cv)return null;
  const ctx=cv.getContext('2d');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W,H,DPR;
  const N=innerWidth<520?180:innerWidth<700?240:520;
  const pts=[];
  let mouse={x:-1e4,y:-1e4};
  let mode='sphere',t=0;

  function resize(){
    DPR=Math.min(devicePixelRatio||1,2);
    W=innerWidth;H=innerHeight;
    cv.width=W*DPR;cv.height=H*DPR;
    cv.style.width=W+'px';cv.style.height=H+'px';
    ctx.setTransform(DPR,0,0,DPR,0,0);
  }
  resize();addEventListener('resize',resize);
  addEventListener('pointermove',e=>{mouse.x=e.clientX;mouse.y=e.clientY;});

  for(let i=0;i<N;i++){
    pts.push({x:Math.random()*W,y:Math.random()*H,tx:0,ty:0,s:0,
      a:Math.random()*Math.PI*2,b:Math.acos(2*Math.random()-1),
      r:Math.random(),sz:Math.random()*1.6+.5,ph:Math.random()*Math.PI*2});
  }

  function targets(){
    const cx=W*(innerWidth>960?0.62:0.5),cy=H*0.5;
    const R=Math.min(W,H)*0.30;
    pts.forEach((p,i)=>{
      if(mode==='sphere'){
        const a=p.a+t*.00035,b=p.b;
        const x3=Math.sin(b)*Math.cos(a),y3=Math.cos(b),z3=Math.sin(b)*Math.sin(a);
        const sc=1/(1.9-z3*.9);
        p.tx=cx+x3*R*1.35*sc; p.ty=cy+y3*R*1.05*sc; p.s=sc;
      }else if(mode==='wave'){
        const col=i%40, row=Math.floor(i/40);
        const gx=W*0.08+col*(W*0.84/39);
        const gy=H*0.55+row*26 - 80 + Math.sin(t*.0016+col*.45+row*.6)*34;
        p.tx=gx;p.ty=gy;p.s=.8;
      }else if(mode==='grid'){
        const cols=Math.ceil(Math.sqrt(N*W/H));
        const rows=Math.ceil(N/cols);
        const col=i%cols,row=Math.floor(i/cols);
        p.tx=W*0.06+col*(W*0.88/(cols-1))+Math.sin(t*.001+i)*3;
        p.ty=H*0.12+row*(H*0.76/(rows-1))+Math.cos(t*.001+i)*3;
        p.s=.7;
      }else if(mode==='ring'){
        const a=p.a+t*.0006;
        const rr=R*(0.9+0.22*Math.sin(t*.0012+p.ph)) * (0.75+p.r*.5);
        p.tx=W*0.5+Math.cos(a)*rr*1.5;
        p.ty=H*0.52+Math.sin(a)*rr*.62;
        p.s=.9;
      }else{ /* drift */
        p.tx=p.x+Math.sin(t*.0007+p.ph)*.6;
        p.ty=p.y+Math.cos(t*.0006+p.ph)*.6;
        p.s=.7;
      }
    });
  }

  function frame(now){
    t=now;
    targets();
    ctx.clearRect(0,0,W,H);
    // links
    ctx.lineWidth=.55;
    for(let i=0;i<N;i+=3){
      const p=pts[i],q=pts[(i+7)%N];
      const dx=p.x-q.x,dy=p.y-q.y,d2=dx*dx+dy*dy;
      if(d2<10000){
        const o=(1-d2/10000)*.35;
        ctx.strokeStyle=`rgba(140,110,255,${o})`;
        ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();
      }
    }
    pts.forEach(p=>{
      // mouse repulsion
      const dx=p.x-mouse.x,dy=p.y-mouse.y,d2=dx*dx+dy*dy;
      let ox=0,oy=0;
      if(d2<16900){const f=(1-Math.sqrt(d2)/130)*46;const d=Math.sqrt(d2)||1;ox=dx/d*f;oy=dy/d*f;}
      p.x+=((p.tx+ox)-p.x)*.052;
      p.y+=((p.ty+oy)-p.y)*.052;
      const tw=.5+.5*Math.sin(t*.002+p.ph);
      const r=p.sz*p.s*(0.8+tw*.5);
      const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,r*3);
      const hue=p.r<.5?'164,76,255':'46,124,246';
      g.addColorStop(0,`rgba(${hue},${.75*p.s})`);
      g.addColorStop(1,'rgba(0,0,0,0)');
      ctx.fillStyle=g;
      ctx.beginPath();ctx.arc(p.x,p.y,r*3,0,7);ctx.fill();
    });
    if(!reduced)requestAnimationFrame(frame);
  }
  if(reduced){targets();pts.forEach(p=>{p.x=p.tx;p.y=p.ty});frame(0);}
  else requestAnimationFrame(frame);

  return {set(m){mode=m;}};
})();

/* ================= HOME DECK ================= */
(function(){
  const deck=document.getElementById('deck');
  if(!deck)return;
  const slides=[...deck.querySelectorAll('.slide')];
  const dots=[...document.querySelectorAll('.rail-dots button')];
  const cur=document.getElementById('railCur');
  const hint=document.querySelector('.scroll-hint');

  const io=new IntersectionObserver(es=>{
    es.forEach(e=>{
      if(e.isIntersecting){
        const i=slides.indexOf(e.target);
        slides.forEach(s=>s.classList.remove('active'));
        e.target.classList.add('active');
        dots.forEach((d,j)=>d.classList.toggle('on',j===i));
        if(cur)cur.textContent=String(i+1).padStart(2,'0');
        if(Field)Field.set(e.target.dataset.field||'drift');
        if(hint)hint.classList.toggle('hide',i>0);
      }
    });
  },{root:deck,threshold:innerWidth<700?0.42:0.55});
  slides.forEach(s=>io.observe(s));

  dots.forEach((d,i)=>d.addEventListener('click',()=>slides[i].scrollIntoView({behavior:'smooth'})));
})();

/* ================= SUBPAGE HELPERS ================= */
(function(){
  // reveals
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}
  }),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // page field mode
  const pf=document.body.dataset.field;
  if(pf&&Field)Field.set(pf);

  // accordion (areas page)
  document.querySelectorAll('.idx-row').forEach(row=>{
    row.addEventListener('click',()=>{
      const open=row.getAttribute('aria-expanded')==='true';
      document.querySelectorAll('.idx-row').forEach(r=>r.setAttribute('aria-expanded','false'));
      row.setAttribute('aria-expanded',String(!open));
    });
    row.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();row.click();}
    });
  });
})();
