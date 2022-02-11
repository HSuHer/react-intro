import React from 'react';
import './TodoCounter.css';
import PropTypes from 'prop-types';

function TodoCounter({totalTodos,completedTodos}){
    
    return (
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

TodoCounter.prototype = {
    totalTodos: PropTypes.number,
    completedTodos: PropTypes.number,
}

export {TodoCounter};