// Ejercicio 1: En el html muestra tres elementos de tipo <p> y haz un botón que dispara una función y nos permita cambiar todos nuestros elementos de tipo p en nuestra pagina de color azul.

document.getElementById("cambiar").addEventListener("click", ()=>{
    let parrafos = document.querySelectorAll("p.p7")
    parrafos.forEach(
        function(i) {
                if (i.classList.contains("p7blue")) {
                    i.classList.remove("p7blue")
                } else {
                    i.classList.add("p7blue")
                }
            })
})

// Ejercicio 2: Crea un formulario simple con un campo de texto y un botón. Escribe un script en JavaScript que muestre una alerta con el valor ingresado en el campo de texto cuando el usuario haga clic en el botón.

const campo  = document.getElementById("campo7")
document.getElementById("alerta").addEventListener("click", ()=>{
    if (campo.value != ""){
        alert("Has ingresado: "+campo.value)
    }
})

