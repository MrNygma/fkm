$(document).ready(function() {
  $('.botones').click(function() {
      const boton = $(this);
      const columna = boton.closest('.formatoColumna');
      const tipoBoton = boton.find('p').attr('class').replace('.', '');

      // Si el botón ya está seleccionado, solo lo deseleccionamos
      if (boton.hasClass('seleccionado')) {
          boton.removeClass('seleccionado');
          return;
      }

      // Deseleccionamos cualquier otro botón del mismo tipo en toda la página
      $(`.${tipoBoton}`).closest('.botones').removeClass('seleccionado');

      // Deseleccionamos cualquier otro botón en la misma columna
      columna.find('.botones.seleccionado').removeClass('seleccionado');

      // Seleccionamos el nuevo botón
      boton.addClass('seleccionado');
  });
});