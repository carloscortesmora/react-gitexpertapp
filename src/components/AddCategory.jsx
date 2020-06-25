import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = e => {
        setInputValue( e.target.value );
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories( categories => [ inputValue, ...categories ] );
            setInputValue('');
        }
    }

    return ( 
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                onChange={ handleInputChange }
                value={ inputValue }
            />
        </form>
     );
}

AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired,
}
 
export default AddCategory;