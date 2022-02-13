import React, { useState } from 'react';


/**
 * Custom hoook para trabajar con el local storage
 * 
 * @param itemName Nombre de la instancia localStorage que utilizaremos
 * @param initialValue valor inicial del localStorage
 * 
 * @return item,saveItem arreglo del estado y el setEstado.
 */
function useLocalStorage (itemName,initialValue){

    //Taremos a los elementos del localStorage
    const localStorageItem=localStorage.getItem(itemName);
    let parsedItem;

    //Si el localStorage esta vacio le damos un valor inicial caso contrario los parseamos
    if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue));
        parsedItem=initialValue;
    }else{
        parsedItem=JSON.parse(localStorageItem);
    }

    //Estados de iniciales
    const [item,setItem] = useState(parsedItem);


    //Funcion que guarda en el localStorage el cambio realizado.
    const saveItem = (newItem) => {
        const stringiedItem=JSON.stringify(newItem);
        localStorage.setItem(itemName,stringiedItem);
        setItem(newItem);
    }

    return [
        item,
        saveItem
    ];
}

export {useLocalStorage};