import React, { useEffect, useState } from 'react';

/**
 * Custom hoook para trabajar con el local storage
 * 
 * @param itemName Nombre de la instancia localStorage que utilizaremos
 * @param initialValue valor inicial del localStorage
 * 
 * @return item,saveItem arreglo del estado y el setEstado.
 */
function useLocalStorage (itemName,initialValue){
    //Estados de iniciales
    const[error,setError]=useState(false);
    const[loading,setLoading]=useState(true);
    const [item,setItem] = useState(initialValue);

    useEffect(()=>{
        setTimeout(()=>{
            try {
                const s=7/0;
                //Traeremos a los elementos del localStorage
                const localStorageItem=localStorage.getItem(itemName);
                let parsedItem;
            
                //Si el localStorage esta vacio le damos un valor inicial caso contrario los parseamos
                if(!localStorageItem){
                    localStorage.setItem(itemName,JSON.stringify(initialValue));
                    parsedItem=initialValue;
                }else{
                    parsedItem=JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
            
        },2000);
    },[]);

    //Funcion que guarda en el localStorage el cambio realizado.
    const saveItem = (newItem) => {
        try {
            const stringiedItem=JSON.stringify(newItem);
            localStorage.setItem(itemName,stringiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error,
    }
}

export {useLocalStorage};