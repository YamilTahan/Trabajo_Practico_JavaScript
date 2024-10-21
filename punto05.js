// Ejercicio 1: Define un objeto persona con las propiedades nombre, edad, y ciudad. Luego, agrega un método que permita cambiar la ciudad de la persona. Usa el método para actualizar la ciudad y muestra las propiedades actualizadas en la consola.

// let persona = {
//     nombre: "Yamil",
//     edad: 20,
//     ciudad: "Mendoza",
//     cambiazo: function cambiarCity(ciudadNueva){
//                 this.ciudad=ciudadNueva
//             }
// }

// console.log("Datos cargados: Nombre: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+ persona.ciudad)
// persona.cambiazo("Nueva York")
// console.log("Datos nuevos: Nombre: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+ persona.ciudad)

// Ejercicio 2: Crea un objeto libro con propiedades titulo, autor, y año. Luego, escribe un método que determine si el libro tiene más de 10 años desde su publicación. Muestra un mensaje en la consola indicando si el libro es antiguo o reciente.

// let libro = {
//         titulo: "Don Quijote",
//         autor: "Miguel de Cervantes",
//         año: "1605",
//         cuanantiguo: function() {
//                 let año_actual = 2024;
//                 let antiguedad = año_actual - this.año;
//                 if (antiguedad > 10) {
//                         console.log("El libro " + libro.titulo + " es antiguo: ", (antiguedad>10));
//                 } else {
//                         console.log("El libro " + libro.titulo + " es antiguo: ", (antiguedad>10));

//                 }
//         }
// }
// libro.cuanantiguo();