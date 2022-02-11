import react, { useState } from "react";
import './TodoSearch.css'
import PropTypes from 'prop-types';

function TodoSearch({searchValue,setSearchValue}){

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
    }

    return(
        <>
            <div className="searchContainer">
                <input 
                    className="input inputTask" 
                    placeholder="Search task" 
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
            </div>
        </>
    );
}

//Obligatorio la recepcion de propiedade al invocar el componente
TodoSearch.propTypes = {
    searchValue: PropTypes.string,
    setSearchValue: PropTypes.func.isRequired,
}

export {TodoSearch};
