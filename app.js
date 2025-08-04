const axios = require('axios');
const prompt = require('prompt-sync')({ sigint: true }); // permite Ctrl+C sin romper

const pais = prompt('Ingrese el nombre de un país: ');

if (!pais) {
  console.log('ingresa un país válido.');
  process.exit(1);
}

const url = `https://restcountries.com/v3.1/name/${pais}`;

axios.get(url)
  .then(response => {
    const data = response.data[0];

    console.log(`\n📍 País: ${data.name.common}`);
    console.log(`🏛️ Capital: ${data.capital ? data.capital[0] : 'No disponible'}`);
    console.log(`👥 Población: ${data.population.toLocaleString()} habitantes`);
  })
  .catch(error => {
    console.error('\n❌ No se pudo obtener información.');
  });
