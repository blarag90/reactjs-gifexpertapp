import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ( {categoria} ) => {

    const [imagenes, setImagenes] = useState([])

    useEffect( () => {
        //helper para pbtener las imagenes del endpoint
        getGifs(categoria)
            .then( imgs => setImagenes(imgs)) 
        
    }, [categoria]); //si se deja vacio el array de dependencias, quiere decir que se getGifs() se ejecutara solo 1 vez

    

  return (
    <>
        <h3>{ categoria }</h3>
        <div className='card-grid'>
            
            {
                imagenes.map( img => (
                    //spread: otra forma de mandar un props con solo los argumentos que me interesan
                    <GifGridItem key={img.id} {...img} />
                ))
            }
                
            
        </div>
    </>
  )
}

export default GifGrid