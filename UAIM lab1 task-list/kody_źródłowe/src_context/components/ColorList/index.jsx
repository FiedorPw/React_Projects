import React, {useContext} from "react";
import Color from "../Color";
import{ColorContext} from "../..";
import {useColors} from "../color-hooks";


export default function ColorList() {

    const {colors} = useContext(ColorContext);
    console.log("ColorList colors = ", {colors})
    //const {colors} = useColors();

    if(!colors.length) return <div>Brak kolorów</div>;
    return (
        <div className = "color-list">
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    );
}

