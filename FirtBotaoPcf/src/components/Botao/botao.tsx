import * as React from "react";
import './botao.css'

interface IBotaoProps{
    cor: "blue"|"white",
    text:string,
    children?:any
    onClick?:()=>void
}

export default function Botao(props:IBotaoProps){
    
    return(
            <button onClick={props.onClick} className={`btn ${props.cor}`}>{props.text}</button>
    )


}