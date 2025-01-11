'use client' 

import {useState} from 'react'
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import Rodape from "./componentes/Rodape";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";

export default function Home() {

  const [ehTemaEscuro, setTemaEscuro] = useState(false)

  function alterarTema() {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    
    <div>
      <header>
        <Topo acao_onclick={alterarTema} ehTemaEscuro={ehTemaEscuro}/>
      </header>
      <main>
        <SecaoBanner ehTemaEscuro={ehTemaEscuro}/>
        <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro}/>
      </main>
      <footer>
        <Rodape ehTemaEscuro={ehTemaEscuro}/>
      </footer>
    </div>
  );
}
