import * as React from "react";

export interface IColunaProps{
    class: string
    children?: any
}

export default function Coluna(props:IColunaProps){
    return(
        <div className={`coluna ${props.class}`}>
            {props.children}
        </div>
    )
}