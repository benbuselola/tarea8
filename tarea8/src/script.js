class personaje { //creacion de la clase personaje, la cual nos permite tener la base para las cartas 
  constructor(nombre, tipo, imagen) { 
    this.nombre = nombre;
    this.tipo = tipo;
    this.imagen = imagen;
  }
  get nombrePersonaje() {
    return this.nombre;
  }
  get tipoPersonaje() {
    return this.tipo;
  }
  get imagenPersonaje() {
    return this.imagen;
  }
  show() { //Acá, se realiza la esctructura html que va a ser introducida en el index
    // como dato, intenté realizar la misma estructura de la tarea anterior empleando document.createRange().createContextualFragment , pero no obtuve un resultado
    let carta = `
    <div class="cartax">
      <div class="infocarta">
        <img  class= "imagencarta" src="${this.imagen}" class="imagen" alt="${this.nombre}">
        <div class="textocarta">
          <h2 class="titulocarta">${this.nombre}</h2>
          <h2 class="raza">${this.tipo}</h2>
        </div>
      </div>
    </div>`;
    document.getElementById('carta').innerHTML += carta;
  }
}

async function mostrarPersonajes() { //Funcion la cual nos permite obtener los datos de los personajes meidante la api entregada
  for (let i = 1; i < 2; i++) {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${i}`);
    const datos = await respuesta.json();
    for (let j = 0; j < datos.results.length; j++) {
      const pers = new personaje( //creamos el personaje
        datos.results[j].name,
        datos.results[j].species,
        datos.results[j].image
      );
      pers.show(); //mostramos el personaje por el html
    }
  }
}

mostrarPersonajes(); //llamado a la funcion 
