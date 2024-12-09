import React, {useContext}from 'react';
import {useInput} from '../hooks';
import { ColorContext } from '../..';
import {useColors} from "../color-hooks";

export default function AddColorForm () {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    //const {addColor} = useContext(ColorContext);
    const {addColor} = useColors();

    const submit = event => {
        event.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };
    
    return (
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder = "Nazwa koloru ..." required />
            <input {...colorProps} type="color" required />
            <button>DODAJ</button> 
        </form>
    )
}


