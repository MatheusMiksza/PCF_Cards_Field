import * as React from "react";
import "../styles/cabecalho.css"
import { SetImag } from "./img/img";



interface ICabecalhoProps{
    coluna:number
}



export default function Cabecalho(props:ICabecalhoProps){

   

    let text:string
    let imgSrc:()=>void

    if(props.coluna === 1)text = "Manha" 
    else if(props.coluna === 2)text = "Tarde"
    else text = "Noite"



    return(
        <div className="cabecalho">
            <span className={text.toLowerCase()}>{text}</span>
            <img src={SetImag(text)} alt="" />
        </div>
    )
}