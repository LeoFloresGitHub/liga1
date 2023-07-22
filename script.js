
document.addEventListener('DOMContentLoaded', () => {
const url = 'https://liga1peruexpress.fly.dev/api/liga1/equipos/';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTAwNjc5MjgsImV4cCI6NDg0MzY2NzkyOH0.sabZSJzIN0ok_Eik2rBqfrlYbCVASieCbUwffcpyNU4';
const options = {
  method: 'GET',
  headers:{
    'Authorization':`Bearer ${token}`
  }
};
fetch(url,options)
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('cardContainer');

    // Recorremos los datos del JSON y creamos los cards dinámicamente
    data.forEach(equipo => {
      const card = document.createElement('div');
      card.classList.add('card');

      const imagen = document.createElement('img')
      imagen.src = equipo.imagen;
      imagen.height = '210'; // Establecer la altura de la imagen
      imagen.width = '160'; // Establecer el ancho de la imagen


      const nombre = document.createElement('h3');
      nombre.textContent = equipo.nombre;

      const fundacion = document.createElement('p');
      fundacion.textContent = 'Fundacion: ' + equipo.fundacion;

      const estadio = document.createElement('p');
      estadio.textContent = 'Estadio: ' + equipo.estadio;

      const apodo = document.createElement('p');
      apodo.textContent = 'Apodo: ' + equipo.apodo[0];

      const titulos = document.createElement('p');
      titulos.textContent = 'Titulos: ' + equipo.titulos;

      card.appendChild(imagen);
      card.appendChild(nombre);
      
      card.appendChild(fundacion);
      card.appendChild(estadio);

      card.appendChild(apodo);
      card.appendChild(titulos);

      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
  });