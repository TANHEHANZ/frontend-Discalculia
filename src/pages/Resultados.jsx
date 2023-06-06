import React from 'react'
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import ResultadosForm from "../models/ResultadosForm";
import { UseFech } from "../hooks/useFech";
import { deleteResultados, getResultados } from "../services/Resultados";

import styled from "styled-components";
import { getCategorias } from '../services/Categorias';
const Resultados = () => {

  const [resultadoactual, setResultadoactual] = useState({});
  const { getApi, data: categ} = UseFech(getCategorias);

  const { openModal, closeModal } = useModal(
    Object.keys(resultadoactual).lengTh > 0
      ? "Editar Resultados"
      : "Agregar Resultado",
    <ResultadosForm
      getApi={getApi}
      resultadoactual={resultadoactual}
      setResultadoactual={setResultadoactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(resultadoactual).length > 0) {
      openModal();
    }
  }, [resultadoactual]);
  return (
    <Section>

        <Div>
          <section>
            <h1>Registrar una Categoria</h1>
            <button onClick={openModal}> nueva categoria</button>
          </section>
          <table>
            <thead>
              <tr>
                <th>Nº</th>
                <th>Categoria</th>

            
              </tr>
            </thead>
            {categ
              .map((v, i) => (
                <tbody key={i}>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{v.nombre_categoria}</td>
                    <td>
                      <div>
                        <button
                          onClick={() => {
                            setResultadoactual(v);
                          }}
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => {
                            deleteResultados(v.id, getApi);
                          }}
                        >
                         Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </Div>
      </Section>
  )
}

export default Resultados


const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 1em;
`;

const Div = styled.div`
  width:100%;
  height: auto;
  display: flex;
  margin:0 auto;
  flex-direction: column;
  border-radius:15px;
  border:solid 1px #fff2;
  
  & section{
display:flex;
flex-direction:column;
gap :1em;
margin:0.5em 1em 0 1em;
& > h1{
  font-size:0.9em;
  font-weight:100;
  color:#fff;
  text-transform:uppercase;
  width:100%;
}
& > button {
   padding:0.2em 1em;
   color:#6f0909;
   border:solid 1px #069266;
   background-color:transparent;
   cursor: pointer;
   height:2em;display:flex;
   justify-content:center;
   align-items:center;
   margin:0 auto;
  }
  }
 
  & table {
    margin: 1em auto;
    /* background-color: transparent; */
    width: 80%;
    background-color:transparent;
    height: auto;
    border-collapse: collapse;
   
    & button{
background-color:transparent;
border:solid 1px #09216f;
color:#fff;
margin:0 5px;
cursor: pointer;
padding:0.2em 1em;
&:nth-child(2){
border:solid 1px #6f0909;

}
&:hover{
  background-color:#09216f;
  &:nth-child(2){
background-color: #6f0909;
}
}
    }
    & th {
      font-size:1em;
     font-weight:100;
 
    }
    & td{
      color:#fff;
      font-weight:lighter;
      font-size:0.8em;
      padding:0.5em 0;
      text-align:center;
      &:nth-child(1){
padding:0 1.5em;
   }
    }
  
    & tr {
   border-top:solid 1px #fff2;
   border-bottom:solid 1px #fff2;
   
  &:hover{
  
        background-color:#be00fe40;
        color:#fff;
      
  }
    }
    & thead {
     color:#BF00FE;
     padding:1em 0;
     & tr {
      &:hover{
        background-color:transparent;
        color:#BF00FE;
        font-weight:100;
      }
     }
    }

   
  }
`;


