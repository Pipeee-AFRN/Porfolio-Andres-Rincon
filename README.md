# Portafolio de Andrés Felipe Rincón

Este es mi portafolio personal, desarrollado con HTML y CSS. El objetivo de este proyecto es mostrar mis habilidades y proporcionar información básica sobre mi trayectoria educativa, mis habilidades técnicas y cómo contactarme.

## Descripción

La página web tiene varias secciones clave:

1. **(Navbar)**: Incluye un menú de navegación que cambia a un menú tipo hamburguesa cuando la pantalla es pequeña.
2. **Sección Hero**: Se muestra mi nombre, junto con el CTA "La chispa de una idea es solo el comienzo. Vamos a encenderla juntos"
3. **Sección "Acerca de"**: Muestra información sobre mí, junto con una foto y algunos detalles personales.
4. **Sección de Habilidades**: Exhibe mis principales habilidades tecnológicas, con iconos representativos.
5. **Sección de Educación**: Presenta mis logros académicos, destacando mi formación en informática y mi carrera en Ingeniería de Sistemas.
6. **Formulario de Contacto**: Permite a los visitantes ponerse en contacto conmigo.
7. **Enlaces Sociales**: Enlaces a mis perfiles de LinkedIn, WhatsApp y GitHub.

## Características del Diseño Responsivo

El diseño de la página es totalmente responsivo y se adapta a diferentes tamaños de pantalla utilizando `media queries` y el modelo de diseño de **CSS Grid**. En particular, utilizo la propiedad `grid-template-columns` para ajustar el número de columnas de la sección de habilidades según el tamaño de la pantalla. 

Por ejemplo, en la sección de habilidades, donde se muestran iconos que representan las tecnologías que domino, utilizo el siguiente código CSS:

```css
.skills-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);  /* Esto crea dos columnas de igual tamaño */
  gap: 20px;
}


