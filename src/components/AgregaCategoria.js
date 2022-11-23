import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AgregaCategoria = ( {agregaCategorias} ) => {

    //nunca dejar como useState(), porque es undefinded, mejor poner un string vacio
    const [inputValue, setInputValue] = useState('');

    const hanldeInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2)
        {
            //cats es el estado anterior de GifExpert
            agregaCategorias( cats => [inputValue, ...cats] );
            setInputValue('');
        }
    }

    return (
        //con el form funciona como agrupador de elemento, no es necesario un fragment
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={hanldeInputChange}
            />
        </form>
    )
}

AgregaCategoria.propTypes = {
    agregaCategorias: PropTypes.func.isRequired
}

export default AgregaCategoria