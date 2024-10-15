let especializaciones = ["Introduccion al desarrollo web", "Frontend Developer", "Backend Developer", "FullStack Developer"]


console.log("Recorridos ##############################")
//Recorridos

for (let i in especializaciones)
{
    console.log("Variable: ", i, "\nValores array: ", especializaciones[i])
}

for (let i of especializaciones)
{
    //Imprime directamente los valores del array
    console.log(i);
}




console.log("Métodos ##############################")
//Métodos

//Agregar al final
especializaciones.push("Extras");
console.log(especializaciones);
//Agrega al inicio del array
especializaciones.unshift("inicio");
console.log(especializaciones);
//Elimina el último elemento del array
especializaciones.pop();
console.log(especializaciones);
//Elimina el primer elemento del array
especializaciones.shift();
console.log(especializaciones);
//Copia de un arreglo dentro de un rango específico
let copia = especializaciones.slice(1, 3);
console.log(copia);
//Determina si el elemento ingresado es arreglo
console.log(Array.isArray(especializaciones));
//Dermina la longitud del arreglo
console.log(especializaciones.length);


console.log("Destructuración ##############################")
//Destructuración

//Tomará los primeros valores hasta que cada variable indicada en el let
//posea un valor
let [x, y, z] = especializaciones;
console.log(x, "-", y, "-",z)

console.log("\n\nOperadores ##############################")
//Rest operator
console.log("   Operador rest ##############################")
//Agrupa elementos sobrantes en una destructuración en un array
let [x1, y1, ...z1] = especializaciones;
console.log(x1, "-", y1, "-", z1);

//Spread operator
//Permite realizar copias y unificar arreglos en uno nuevo
let preciosAnuales = [249, 329];
let unificacion = [...preciosAnuales, ...especializaciones];
console.log("   Operador spread ##############################")
console.log("Unificación: ", unificacion);

let copiaArray = [ ...especializaciones ];
console.log("Copia: ", copiaArray);