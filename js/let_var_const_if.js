var soyVar = "soy var declarado e inicializado";
const soyConst = "soy const declarado e inicializado";
let soyLet= "soy let declarado e inicializado";


//var soyVarD;
//const soyConstD; //no se puede
//let soyLetD;



//console.log(a); //undefined
//console.log(b); //la variable no esta definida
 //console.log(c); //la variable no esta definida
//console.log(d); // la variable no esta definida
let e;
console.log(e); //esto si se puede , porque ya hemos definido la variable en la linea de arriba. Sin embargo marca udefinded
muestraValor = true;

if (muestraValor) {

  var soyVar = "soy var declarado e inicializado y modificado";
  //soyConst = "soy const declarado e inicializado y modificado"; // const no puede ser modificado (programa no va a correr)
  let soyLet = "soy let declarado e inicializado y modificado";

  var a = "soy variable local var a ";
  const b = "soy variable local const b";
  let c = "soy variable local let c";

  d = "soy variable global d";
  e = "soy variable global e";
  console.log('');
  console.log(soyVar);
  //console.log(soyConst);
  console.log(soyLet);
  console.log('');
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
}

console.log('');
console.log(soyVar); //variable modificada en una funcion. Tendra el valor que le asignamos dentro de la funcion
console.log(soyConst);
console.log(soyLet); //variable modificada en una funcion. Tendra el valor que le asignamos dentro de la funcion
console.log('');
console.log(a); //esto si se puede
//console.log(b); //la vaeriable no etsa definida
 //console.log(c); //error la variable no esta definida
console.log(d); //es el unico caso donde una variable definida dentro de una funcion puede ser usada fuera.aca no va a haber problemas porque esta linea esta despues de la funcion donde la variable esta definida como global



