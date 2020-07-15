const descargarUsuarios = (cantidad) => new Promise((resolve, reject)=>{

  const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

  //llamado a ajax
  const xhr = new XMLHttpRequest();

  //abrir la conexion
  xhr.open('GET', api, true);

  //on load
  xhr.onload= () =>{
    if(xhr.status===200){
      resolve(JSON.parse(xhr.responseText),results);

  }else{
      reject(Error(xhr.statusText));


  }
  }

  //opcional {on error}
  xhr.oneror=(error)=>reject(error);

  //send
  xhr.send()

});

descargarUsuarios(20).then(
  miembros=>console.error(
    new Error('hubo un error' + error)
  )
)
