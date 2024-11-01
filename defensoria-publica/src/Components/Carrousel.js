import React from 'react'
import { personas } from '../Utils/mocks/persona'
// Os css`s de componentes estarão na pasta Style/Components/NomeDaPagina.css
// Para importar basta digitar import "./Style/Components/NomeDaPagina.css"
// Neste componente, devem ir apenas os codigos referentes á construção do carrosel.  


// Dica de ouro : Em react é possivel usar funções javascript para realizar ações mais complexas.
// Normalmente neste espaço abaixo

var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});



function Carrousel() {
  // Dentro deste Return, vão os codigos HTML, que serão lidos e interpretados pelo React.
  // O array personas está importado e pode ser ultilizado, basta percorrer o array usando uma função chamada de .map()
  // O `map` pode ser usado diretamente no `return` para gerar o conteúdo.
  return (
    <div className="carousel">
      <span>SLIDER</span>
    <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="project-img">
              <img src="./img/foto_01.png" alt="Foto 01" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="project-img">
              <img src="./img/foto_02.png" alt="Foto 02" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="project-img">
              <img src="./img/foto_03.png" alt="Foto 03" />
            </div>
          </div>
        </div>
      
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
    </div>
  );
}

export default Carrousel;