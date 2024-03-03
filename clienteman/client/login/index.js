document.querySelector('.boton2').addEventListener('click', function(event) {
    event.preventDefault();


    var container = document.querySelector('.container');
    container.classList.add('container-move-right');

    var cuadroRegistro = document.querySelector('.cuadro');
    cuadroRegistro.style.display = 'none'; // Esto ocultará el div padre


    container.addEventListener('transitionend', function() {
        window.location.href = "/register";
    }, { once: true });
});
