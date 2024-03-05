import axios from "axios";

const username = 'Picuruz45'; // Reemplaza con el nombre de usuario de GitHub

async function obtenerRepositorios() {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    const repositorios = response.data;

    return repositorios;
  } catch (error) {
    console.error('Error al obtener repositorios:', error.response ? error.response.data : error.message);
  }
}

export default obtenerRepositorios;
