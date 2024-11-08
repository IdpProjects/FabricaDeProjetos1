import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// Os css`s de pagina estarão na pasta Style/Pages/NomeDaPagina.css
// Para importar basta digitar import "./Style/Pages/NomeDaPagina.css"

function Landing() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
  
          // Chamada à API de geocodificação reversa
          const apiKey = 'f11d3bf2ac824cba99b0ccb7cfd8c083';
          const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
  
          axios.get(url)
            .then(response => {
              const city = response.data.results[0].components.city;
              setCity(city);
            })
            .catch(error => {
              console.error("Erro ao obter o nome da cidade: ", error);
            });
        },
        (error) => {
          console.error("Erro ao obter localização: ", error);
        }
      );
    } else {
      console.error("Geolocalização não é suportada pelo navegador.");
    }
  }, []);

  useEffect(() => {
    if (city !== '') {
      navigate('/home');
    }
  }, [city]);
  
  return (
    // Dentro deste Return, vão os codigos HTML, que serão lidos e interpretados pelo React.
    // Nesta Pagina, devem ser chamados os componentes que compõem a pagina Home.
    // Um exemplo será a NavBar, que será chamada em todas as paginas, ja que toda pagina terá o elemento de navegação

    <div>
      <h1>Localização do Usuário</h1>
      {location.latitude && location.longitude ? (
        <div>
          <p>Cidade: {city || 'Obtendo nome da cidade...'}</p>
        </div>
      ) : (
        <p>Obtendo localização...</p>
      )}
    </div>
  )
}

export default Landing
