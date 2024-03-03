let dezplasador = document.querySelector(".mas");
let subPuntos = document.querySelectorAll(".sub_puntos");

dezplasador.addEventListener("click", () => {

    subPuntos.forEach(subPuntos => {
        
        subPuntos.classList.toggle('hidden');
    })
        
   
});