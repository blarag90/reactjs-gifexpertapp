import React from 'react'

const GifGridItem = ( {id, titulo, url} ) => {
    //console.log({id, titulo, url});

    return (
        <div className='card'>
            <img src={url} alt={titulo} />
            <p>{ titulo }</p>
        </div>
    )
}

export default GifGridItem