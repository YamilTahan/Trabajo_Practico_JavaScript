// Ejercicio 1: Crea una lista (<ul>) con varios elementos (<li>). Escribe un script que agregue un evento click a cada elemento de la lista para que, cuando se haga clic en un li, se muestre su texto en la consola.

const lis = document.querySelectorAll("#lista8 li")
lis.forEach((li)=>{
    li.addEventListener("click", ()=>{
        console.log(li.textContent)
    })
})

// Ejercicio 2: Crea un campo de texto y un botón en una página HTML. Escribe un script que haga que el botón deshabilite el campo de texto cuando se haga clic en él. Luego, añade otro botón que vuelva a habilitar el campo de texto.

const campo8 = document.getElementById("campo8")
document.getElementById("dis").addEventListener("click",()=>{
    campo8.disabled=true;
})
document.getElementById("ena").addEventListener("click",()=>{
    campo8.disabled=false;
})