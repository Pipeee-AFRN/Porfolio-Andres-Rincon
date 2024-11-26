// Agregar animación de entrada a las secciones al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.hero, .about, .skills, .education');
    
    // Función para verificar si una sección es visible
    function checkVisibility() {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          section.classList.add('visible');
        }
      });
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verificar si alguna sección ya es visible al cargar la página
    
    // Función para mostrar el menú
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    menuToggle.addEventListener('change', function() {
      navbar.classList.toggle('open', menuToggle.checked);
      navbar.classList.toggle('close', !menuToggle.checked);
    });
  });
  