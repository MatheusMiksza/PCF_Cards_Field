import * as React from "react";
import './Card.css'
import { IDadosInstrutor } from "../../Interfaces/interdaces";

export interface ICardProps{    
    instrutor:IDadosInstrutor
    onCliclkCard?:()=>void

}

export default function Card(props:ICardProps){
  
    return(
        <div className="card" onDoubleClick={()=> props.onCliclkCard?.()} >
            <span className="titulo" >{props.instrutor.titulo}</span>
            <span className="nome" >{props.instrutor.nome}</span>
            <span className="texto">{props.instrutor.descricao}</span>
            <span className="rodape">{props.instrutor.produto}</span>
        </div>
    )
}