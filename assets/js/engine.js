// Generic scrollytelling engine, shared by every chapter page.
// Each chapter page defines its own `window.PANELS = { sceneId: () => svgString }`
// before this script runs.
(function(){
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.SCROLLY_REDUCED_MOTION = reducedMotion;

  const frame = document.getElementById('vizFrame');
  let lastScene = null;

  function countUp(el, target, duration=900){
    if(!el) return;
    if(reducedMotion){ el.textContent = target; return; }
    const start = performance.now();
    function step(now){
      const p = Math.min(1,(now-start)/duration);
      el.textContent = Math.floor(p*target);
      if(p<1) requestAnimationFrame(step); else el.textContent = target;
    }
    requestAnimationFrame(step);
  }
  window.countUp = countUp;

  function renderScene(scene){
    if(scene===lastScene) return;
    lastScene = scene;
    const builder = (window.PANELS || {})[scene];
    if(!builder || !frame) return;
    const panel = document.createElement('div');
    panel.className = 'viz-panel';
    panel.innerHTML = builder();
    frame.innerHTML = '';
    frame.appendChild(panel);
    requestAnimationFrame(()=>{
      panel.classList.add('active');
      panel.querySelectorAll('.growbar').forEach(b=>{
        if(b.hasAttribute('data-target')){
          const target = b.getAttribute('data-target');
          b.style.transition = reducedMotion ? 'none' : 'width .6s ease-out';
          requestAnimationFrame(()=> b.setAttribute('width', target));
        } else if(b.hasAttribute('data-target-opacity')){
          b.style.transition = reducedMotion ? 'none' : 'opacity .6s ease-out';
          requestAnimationFrame(()=> b.style.opacity = b.getAttribute('data-target-opacity'));
        }
      });
      panel.querySelectorAll('.fallbar').forEach(b=>{
        const target = parseFloat(b.getAttribute('data-target'));
        const basey = parseFloat(b.getAttribute('data-basey'));
        const mode = b.getAttribute('data-mode');
        b.style.transition = reducedMotion ? 'none' : 'height .6s ease-out';
        requestAnimationFrame(()=>{
          if(mode==='up'){ b.setAttribute('height', target); b.setAttribute('y', basey - target); }
          else { b.setAttribute('height', target); }
        });
      });
      const gaugeArc = panel.querySelector('#gaugeArc');
      if(gaugeArc){
        const tx = gaugeArc.getAttribute('data-target-x'), ty = gaugeArc.getAttribute('data-target-y');
        const cx=280, cy=230, r=160;
        gaugeArc.style.transition = reducedMotion ? 'none' : 'd .8s ease-out';
        requestAnimationFrame(()=>{ gaugeArc.setAttribute('d', `M ${cx-r} ${cy} A ${r} ${r} 0 0 1 ${tx} ${ty}`); });
      }
      const rentLine = panel.querySelector('#rentLine');
      if(rentLine){ rentLine.style.transition= reducedMotion?'none':'stroke-dashoffset 1s ease-out'; requestAnimationFrame(()=>rentLine.style.strokeDashoffset='0'); }
      const wageLine = panel.querySelector('#wageLine');
      if(wageLine){ wageLine.style.transition= reducedMotion?'none':'stroke-dashoffset 1.4s ease-out'; requestAnimationFrame(()=>wageLine.style.strokeDashoffset='0'); }
    });
  }
  window.renderScene = renderScene;

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const scene = entry.target.dataset.scene;
        renderScene(scene);
        if(typeof window.onSceneChange === 'function') window.onSceneChange(scene);
      }
    });
  },{threshold:0.5});

  document.querySelectorAll('.beat').forEach(b=>observer.observe(b));

  const progressBar = document.getElementById('progressBar');
  function updateProgress(){
    if(!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop/docHeight)*100 : 0;
    progressBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, {passive:true});
  updateProgress();

  const allBeats = Array.from(document.querySelectorAll('.beat'));
  const nextArrow = document.getElementById('nextArrow');
  if(nextArrow){
    nextArrow.addEventListener('click', ()=>{
      const viewportMid = window.scrollY + window.innerHeight * 0.4;
      let next = allBeats.find(b => (b.getBoundingClientRect().top + window.scrollY) > viewportMid + 10);
      if(next) next.scrollIntoView({behavior: reducedMotion ? 'auto' : 'smooth'});
    });
    function toggleArrowVisibility(){
      const nearBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 40;
      nextArrow.classList.toggle('hide', nearBottom);
    }
    window.addEventListener('scroll', toggleArrowVisibility, {passive:true});
    toggleArrowVisibility();
  }

  // Render the first scene on load (usually "0" or the chapter's own opening id).
  const firstBeat = allBeats[0];
  if(firstBeat) renderScene(firstBeat.dataset.scene);
})();
