var soyVar = "soy var declarado e inicializado";
const soyConst = "soy const declarado e inicializado";
let soyLet= "soy let declarado e inicializado";


//hoisting
soyVarD = "soy var declarado e inicializado"; //var es el unico que no reclama al definir una variable y no estar inicializada.
soyConstD = "soy const declarado e inicializado"; //no puede ser modificado ni dentro ni fuera de una funcion
let soyLetD= "soy let declarado e inicializado"; //reclama al no estar inicializado

var soyVarD; //es hoisted
//const soyConstD; //NO SE PUEDE!
// let soyLetD; //error porque no es hoisted
//fin de hoisting


//console.log('');
//console.log(soyVar); //variable modificada en una funcion. Tendra el valor que le asignamos dentro de la funcion
//console.log(soyConst);
//console.log(soyLet); //variable modificada en una funcion. Tendra el valor que le asignamos dentro de la funcion
//console.log('');
//console.log(a); //la variable no esta definida
//console.log(b); //la vaeriable no etsa definida
// console.log(c); //la variable no esta definida
//console.log(d); //es el unico caso donde una variable definida dentro de una funcion puede ser usada fuera, solo que acá la variable  no esta declarada antes que el script llegue a la funcion, por eso marca que no esta definida.*/

let e;
console.log(e); //esto si se puede , porque ya hemos definido la variable en la linea de arriba, pero da indefinido

muestraValor();




function muestraValor() {
  soyVar = "soy var declarado e inicializado y modificado";
  //soyConst = "soy const declarado e inicializado y modificado"; // const no puede ser modificado
  soyLet = "soy let declarado e inicializado y modificado";
  const soyconst2 = "soy const2";

  var a = "soy variable local var a";
  const b = "soy variable local const b";
  let c = "soy variable local let c";

  d = "soy variable global d"
  e = "soy variable global e"

 console.log(soyVar);
  console.log(soyConst);
  console.log(soyLet);
  console.log('');
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

console.log('');
console.log(soyVar); //variable modificada en una funcion. Tendra el valor que le asignamos dentro de la funcion
console.log(soyConst);
console.log(soyLet); //variable modificada en una funcion. Tendra el valor que le asignamos dentro de la funcion
console.log('');
//console.log(a); //la variable no esta definida
//console.log(b); //la vaeriable no etsa definida
 //console.log(c); //la vatriable no esta definida
console.log(d); //es el unico caso donde una variable definida dentro de una funcion puede ser usada fuera.aca no va a haber problemas porque esta linea esta despues de la funcion donde la variable esta definida como global
console.log(console.log2);

