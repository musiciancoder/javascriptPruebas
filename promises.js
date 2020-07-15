

const aplicarDescuento = new Promise((resolve, reject)=> {
  setTimeout(() => {
    let descuento = false;

    if (descuento) {
      resolve('Descuento Aplicable');
    } else {
      reject('No se pudo aplicar')
    }

  }, 3000);
});


aplicarDescuento.then(resultado=> {
  console.log(resultado);

}).catch(error=>{
  console.log(error);
})
