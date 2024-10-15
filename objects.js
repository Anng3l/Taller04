let desarrolloSoftware = {
    introduccionDesarrolloWeb :
        {
            titulo: "Introducción al desarrollo web",
            rutas: [
                {
                    titulo: "Fundamentos de Programación y Desarrollo Web",
                    cursos: 11,
                    horas: 44
                }
            ]
            
        },
    
    frontend :
        {
            titulo: "Especialización Frontend Developer",
            rutas: [
                {
                    titulo: "HTML y CSS desde cero",
                    cursos: 16,
                    horas: 50
                },
                {
                    titulo: "JavaScript para Frontend",
                    cursos: 9,
                    horas: 32
                },
                {
                    titulo: "Frontend con Vue.js",
                    cursos: 14,
                    horas: 48
                },
                {
                    titulo: "Frontend con React.js",
                    cursos: 10,
                    horas: 38
                },
                {
                    titulo: "Frontend con Angular",
                    cursos: 10,
                    horas: 39
                }
            ]
        },
    
        backend:
        {
            titulo: "Especialización Backend Developer",
            rutas: [
                {
                    titulo: "Backend, Arquitectura y Bases de Datos",
                    cursos: 19,
                    horas: 71
                },
                {
                    titulo: "Backend con Node.js",
                    cursos: 23,
                    horas: 82
                },
                {
                    titulo: "Python: De Cero a Experto",
                    cursos: 8,
                    horas: 31
                },
                {
                    titulo: "Backend con PHP",
                    cursos: 23,
                    horas: 69
                },
                {
                    titulo: "Backend con C# y .NET",
                    cursos: 12,
                    horas: 34
                },
                {
                    titulo: "Backend con Java",
                    cursos: 12,
                    horas: 38
                }
            ]
        },
        
    fullstack:
        {
            titulo: "Especialización Fullstack Developer",
            rutas: [
                {
                    titulo: "Full Stack Developer con JavaSCript",
                    cursos: 21,
                    horas: 84
                },
                {
                    titulo: "Full Stack con Next.js",
                    cursos: 5,
                    horas: 16
                },
                {
                    titulo: "Full Stack con WordPress",
                    cursos: 8,
                    horas: 31
                }
            ]
        }
}


//Desestructuración de Objetos

const {introduccionDesarrolloWeb: introWeb, frontend: front, backend, fullstack} = desarrolloSoftware;
console.log(introWeb, "\n ------", front, "\n ------",backend, "\n ------", fullstack);
console.log("\n\n\n\n\n\n\n\nzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")


let planDuo = {
    precio: 329,
    recurrencia: "Anual",
    estudiantes: 2
}

const {precio, ...i} = planDuo;
console.log(precio, "\n", i)


//Congelación de objetos.
console.log("\n\n\n\n\n\n CONGELACIÓN DE OBJETOS ")
let planBasic = {
    precio: 34,
    recurrencia: "mensual",
    estudiantes: 1
}
    //El objeto es congelado. No se le pueden agregar ni eliminar propiedades.
Object.freeze(planBasic);
planBasic.precio = 35;
planBasic.precio === 35 ? console.log("Se cambió\n") : console.log("No se cambió\n");

    //Con el método "seal" se protege al objeto, y se pueden sólo modificar 
    //las propiedades existentes.
planDuo = {
    precio: 329,
    recurrencia: "Anual",
    estudiantes: 2
}
Object.seal(planDuo);
console.log(Object.isSealed(planDuo));
planDuo.precio = 35;  //Se cambia la propiedad preexistente de precio, con valor 34, a 35
planDuo.precio === 35 ? console.log("Se cambió") : console.log("No se cambió");
console.log("Valor: ", planDuo.precio, "\n");

//Copiar propiedades utilizando el spread operator

let planExpert = {
    precio: 249,
    recurrencia: "Anual",
    estudiantes: 1,
    xyz: {
        prueba: "zzz"
    }
}

let planExpertCopy = {...planExpert};
console.log("Copia: ", planExpertCopy, "\n\n\n");

planExpertCopy.xyz.prueba = "Propiedad de referencia modificada";
planExpertCopy.precio = 20;

console.log("Original: ", planExpert);
console.log("Copia: ", planExpertCopy);

console.log("###########################################################################")

    //Unión de objetos
planExpert = {
    precio: 249,
    recurrencia: "Anual",
    estudiantes: 1,
    xyz: {
        prueba: "zzz"
    }
}
let tipoPlan = {
    tipo: [
        {
            tipoSub: "Personas"
        },
        {
            tipoSub: "Empresas"
        }
    ]
}

let x = {...tipoPlan, ...planExpert};
console.log(x, "\n\n\n");


//This en objetos
let y = {
    id: 0,
    name: "Jose",
    saludar() {
        console.log(`Hola, soy ${this.name}`)
    }
}
y.saludar();
console.log("This general: ", this);

let j = {
    id: 0,
    name: "Jose",
    saludar: () => {
        console.log(`\nHola, soy ${this.name}\n\n\n`)
    }
}
j.saludar();



//Métodos para trabajar con objetos
planDuo = {
    precio: 329,
    recurrencia: "Anual",
    estudiantes: 2
}

console.log("Claves: ", Object.keys(planDuo))
console.log("Valores: ", Object.values(planDuo))
console.log("Claves y valores: ", Object.entries(planDuo))


