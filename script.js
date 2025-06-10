// objeto global de inicializadores
const sectionInitializers = {};

// === Seção 1 ===
sectionInitializers.initSection1 = function() {
  const video = document.getElementById('video-background-1');
  const sloganMain = document.querySelector('.hero-section-1 .slogan-main');
  // … restante da lógica que você já tinha …
};

// === Seção 2 ===
sectionInitializers.initSection2 = function() {
  // … sua lógica do globo 3D …
};

// init automático on scroll/intersection
document.addEventListener('DOMContentLoaded', () => {
  sectionInitializers.initSection1();
  sectionInitializers.initSection2();
  // … chame as outras initSectionX conforme necessário …
});
