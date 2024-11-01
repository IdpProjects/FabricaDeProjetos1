import React from 'react'
import { personas } from '../Utils/mocks/persona'
// Os css`s de componentes estarão na pasta Style/Components/NomeDaPagina.css
// Para importar basta digitar import "./Style/Components/NomeDaPagina.css"
// Neste componente, devem ir apenas os codigos referentes á construção do carrosel.  


// Dica de ouro : Em react é possivel usar funções javascript para realizar ações mais complexas.
// Normalmente neste espaço abaixo



function Carrousel() {
  // Dentro deste Return, vão os codigos HTML, que serão lidos e interpretados pelo React.
  // O array personas está importado e pode ser ultilizado, basta percorrer o array usando uma função chamada de .map()
  // O `map` pode ser usado diretamente no `return` para gerar o conteúdo.
  return (
    <div className="carousel">
      <h2>Carrousel</h2>
      {personas.map((elementoDoArray, index) => {
        const { name, personaHistory, srcImage } = elementoDoArray;
        return (
          <div key={index} className="carousel-item">
            <h3>{name}</h3>
            <h4>teste</h4>
            <p>{personaHistory}</p>
            <img src={srcImage} alt={`${name} profile`} />
          </div>
        );
      })}
    </div>
  );
}

export default Carrousel;