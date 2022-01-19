import React, { useState } from 'react'
import PropTypes from 'prop-types';



export const AddCategory = ({ setCategories }) => {
    const [inputValue, setinputValue] = useState('');
    const hadleInputChange = (e) => {

        setinputValue(e.target.value);

    }
    const handleSubmit = (e) => {

        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue,...cats]);
            setinputValue('');
            // console.log('submithecho');
        }
    }
    return ( 
        <form onSubmit = { handleSubmit } >


        <input type = "text"
        value = { inputValue }
        onChange = { hadleInputChange }
        />


        
       </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}