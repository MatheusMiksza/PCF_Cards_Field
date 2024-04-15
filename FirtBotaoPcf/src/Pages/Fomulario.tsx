import * as React from "react";
import Botao from "../components/Botao/botao";
import { IInputs } from "../../generated/ManifestTypes";
import { Stack } from "@fluentui/react";
import './Formulario.css'

export interface IformularioProps{
    children?:any;
    context?:ComponentFramework.Context<IInputs>;
    onClick?:()=>void
}



export default function Formulario(props:IformularioProps){

    const [nome, setNome] = React.useState()
    
    const alertBtn = (text:string)=>{
        alert(text)
    }
    return(
        <Stack className="form">
            <Stack ><input type="text" placeholder="Digite o nome..."/></Stack>
            <Stack className="btns">
                <Botao cor="blue" text="Salvar" onClick={()=>alertBtn("Salvar")}></Botao>
                <Botao cor="white" text="Cancelar" ></Botao>
            </Stack>
        </Stack>
    )
}