import * as React from "react";
import '../styles/main.css'
import { IInputs } from "../../generated/ManifestTypes";
import Coluna from "./Coluna";
import Card from "./Card/Card";
import { IDadosInstrutor } from "../Interfaces/interdaces";
import Cabecalho from "./Cabecalho";
import { geraId } from "./Hook/Hook";

export interface IGestaoProps{
    context?:ComponentFramework.Context<IInputs>
    dados:IDadosInstrutor[]
    setUpdaeteContext:(instrutor:IDadosInstrutor)=>void
}

export default function Gestao(props:IGestaoProps){
    const clickCard = function(i:IDadosInstrutor){
        props.setUpdaeteContext(i)
        
    }
    const cards = function(i:number){
       
        return props.dados.filter(item => item.coluna === i).map(itemMap => {
            const id = geraId()
            return (               
                    <Card key={id} instrutor={itemMap} onCliclkCard={()=>clickCard(itemMap)}></Card>               
            )

        })    
    }

    const colunas = function(i:number){
        
        return( <Coluna class={`${i}`}> 
                        {<Cabecalho coluna={i} ></Cabecalho>}               
                        {cards(i)}             
                     </Coluna> )
        
    }
    return(
        <div className="main">
            <div className="nav filter">Filtros</div>         
            <div className="root">  
                {colunas(1)}
                {colunas(2)}
                {colunas(3)}                  
            </div>
        </div>
    )
}