document.addEventListener('DOMContentLoaded', function() {
    var btn1 = document.querySelector('.btn1');
    var btn2 = document.querySelector('.btn2');
    var btn3 = document.querySelector('.btn3');
    var imgs = document.querySelectorAll('.slide');
    var currentIndex =  0

    // Ocultar todas las imágenes excepto la primera
    imgs.forEach(function(img,index) {
        img.style.display = (index ===  0) ? 'block' : 'none';
    });

    function showImg(index) {
        imgs.forEach(function(img, idx) {
            img.style.display = (idx === index) ? 'block' : 'none';
        });
    }

    function nextImg() {
        currentIndex++;
        if (currentIndex >= imgs.length) {
            currentIndex =  0; // Volver al primer índice si llegamos al final
        }
        showImg(currentIndex);
    }

    // Llamar a nextImg cada  5 segundos
    setInterval(nextImg,  5000);

    btn1.addEventListener('click', function() {
        showImg(0);
    });

    btn2.addEventListener('click', function() {
        showImg(1);
    });

    btn3.addEventListener('click', function() {
        showImg(2);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var pruebaGratisElements = document.querySelectorAll(".pruebaGratis");
  
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold:  0.1 }); // El elemento entrará en la vista cuando al menos el  10% esté visible
  
    pruebaGratisElements.forEach(function(element) {
      observer.observe(element);
    });
  });

  ScrollReveal().reveal('.header', { origin: 'top' , delay:  500 });
ScrollReveal().reveal('.main', { origin: 'top', distance: '50px', delay:  500 });
ScrollReveal().reveal('.portadaIzquierda', { origin: 'left', distance: '50px', delay:  500 });
ScrollReveal().reveal('.portadaDerecha', { origin: 'right', distance: '50px', delay:  500 });
ScrollReveal().reveal('.aboutMe', { origin: 'bottom', distance: '50px', delay:  500 });
ScrollReveal().reveal('.projects', { origin: 'bottom', distance: '50px', delay:  500 });
ScrollReveal().reveal('.contac', { origin: 'bottom', distance: '50px', delay:  500 });

  