import React from 'react';
import reactDom from 'react-dom';
import { TodoForm } from '../TodoForm';
import './Modal.css'

function Modal({children}){
    return reactDom.createPortal(
        <div className='ModalBackground'>
            <TodoForm></TodoForm>
        </div>,
        document.getElementById("modal")
    );
}

export {Modal};