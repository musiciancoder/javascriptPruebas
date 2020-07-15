const str = "hello";
const arr = str.split("");
let text = "";

for (let i = 0; i < arr.length; i++) {
  text = text + arr[i] ;
  console.log(text);
}

console.log(text.search("o"));
console.log(text.includes("o"));

let res = str.slice(2,4);

console.log(res);

//metodo escibir al reves
let str1 = str.split("");

console.log("Array str1: " + str1);



let letra = " ";

for (let i=str1.length -1; i >=0; i--) {

  letra = letra + str1[i];

 // console.log(letra);

}

console.log(letra);

//

[0, 1, 2].map(i => {
  console.log("Esto es :" + i+1);
  return i + 1
});

let letra2 =" ";

const myWea = (array) => {
  array.map((valor ,i, myarray) => {
    console.log("Antes: " + letra2 +valor);  
   // console.log(typeof (letra2 )+ typeof (valor));
    letra2 = letra2 + valor; //retorna solo el ultimo
    console.log(typeof (letra2 ));
    console.log(i);
    console.log(myarray);
   // return letra2; //NO ES NECESARIO DEVOLVER UN VALOR PARA EL MAP
  });
  return letra2;
};



let str12=["o","t","r","o"];

let d = myWea(str12);

console.log("Soy d:" + d);



let str14 = str12.toString();
let str13 = str12.join('*');

console.log(str14);
console.log(str13);
