function greet(){
    console.log("Hello");
}
greet();

function logGreeting(fn){
    fn();
}
logGreeting(greet);

let logGreeting2 = (miParametro) => miParametro();
logGreeting2(greet);
logGreeting2(function(){
    console.log("Hello from a function created on the fly");
})

let greetMe =  function(){
    console.log("Hello* from the function expression");
}
greetMe();

let greetMe2 = ()=>{console.log("Hello Arrow");}
greetMe2();

let saludo =(nombre, tratamineto) => {
    console.log("Hola " + tratamineto + " " + nombre);
}
saludo('Miguel', 'sr.');

let cuadro = numero => {
    return numero + numero;
}

let cuadrado = numero => numero * numero;

let color = "rojo";
let talla = "M";
let modelo = "Clásico";

console.log("Juan tiene una playera talla " + talla + " de color " + color + " modelo " + modelo);
console.log(`Juan tiene una playera talla ${talla} de color ${color} modelo ${modelo}`);