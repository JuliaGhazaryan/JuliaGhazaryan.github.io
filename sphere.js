const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'REACT', "npm", "Git",
    'SASS', "Github", "ES5/ES6", "JSON",
    'NODEJS',  "Redux", "Bootstrap", "Tailwind", "TypeScript", "MUI"
  ];
  
  let tagCloud;
  let radius;
  
  function initTagCloud() {
    radius = Math.min(window.innerWidth, window.innerHeight) / 2.5;
    tagCloud = TagCloud('.Sphere', Texts, {
      radius: radius,
      maxSpeed: 'normal',
      initSpeed: 'slow',
      direction: 135,
      keep: true
    });
  
    const color = '#08fdd8';
    document.querySelector('.Sphere').style.color = color;
  }
  
  initTagCloud();
  
  window.addEventListener('resize', () => {
    tagCloud.pause();
    setTimeout(() => {
      tagCloud.destroy();
      initTagCloud();
    }, 500);
  })



