import React, { useState } from 'react'
import AgregaCategoria from './components/AgregaCategoria';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categorias, setCategorias] = useState(['Rick And Morty']);
  
  // const handleAdd = () => {
  //   setCategorias([...categorias, 'Hunter X']);
  // }

  return (
    <>
        <h2>Gif Expert App</h2>
        <AgregaCategoria agregaCategorias = {setCategorias}/>
        <hr />
        
        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {
              categorias.map( cat => (
                <GifGrid categoria={ cat } key={ cat }/>
              ))
            }
        </ol>
    </>
  )
}

export default GifExpertApp