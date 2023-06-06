import React from 'react'
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import SeguimientosForm from "../models/SeguimientosForm";
import { UseFech } from "../hooks/useFech";
import { deleteSeguimiento, getSeguimiento } from "../services/Seguimentos";
import styled from "styled-components";
import { getretroalimebntacion ,deletretro } from '../services/Retroalimentacion';

const Seguimientos = () => {

  const [retroalimentacionactual, setRetroalimentacionactual] = useState({});
  const { getApi, data: retro} = UseFech(getretroalimebntacion);
  const { openModal, closeModal } = useModal(
    Object.keys(retroalimentacionactual).lengTh > 0
      ? "Editar Resultados"
      : "Agregar  ",
    <SeguimientosForm
      getApi={getApi}
      retroalimentacionactual={retroalimentacionactual}
      setRetroalimentacionactual={setRetroalimentacionactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(retroalimentacionactual).length > 0) {
      openModal();
    }
  }, [retroalimentacionactual]);

  return (
    <Section>
        <Div>
          <section>
            <h1>Registro Retroalimentacion</h1>
          </section>
            {retro.map((v, i) => (
                <div key={i}>
           
                    <label> Numero de registro : {i + 1}</label>
                    <label>Descripcion de retroalimentacion : {v.retroalimentacion}</label>
                    <label>Juego perteneciente: {v.nombre_juego}</label>
                  
                </div>
              ))}
      </Div>
      </Section>
  )
}

export default Seguimientos



const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 1em;
`;
// const Borderabajo = keyframes`
//   0% {
//    & div{
// &::before{
//   width:0%;
// }
//    }
//   }

//   100% {
//     & div{
// &::before{
//   width:100%;
// }
//    }
//   }
// `;

const Div = styled.div`
  width: 90%;
  height: 60vh;
  display: flex;
  margin:0 auto;
  flex-direction: column;
  border-radius:15px;
  border:solid 1px #fff2;
padding:1em;
  
  & section{
display:flex;
flex-direction:row;
gap :2em;
margin:1em 1em 2em 1em;
& > h1{
  font-size:0.9em;
  font-weight:100;
  color:#fff;
  text-transform:uppercase;
}
  }
  & > div{
    width:calc(90% / 3);
    border:solid 1.5px #be00fe60;
    display:flex;
    justify-content:center;
    flex-direction:column;
    position:relative;
    z-index:1;
    background-color:#161929;
    transition: all 3s ease-in-out;
    padding:1em;
   &:hover{
    &::before{
      background-color:#be00fe60;
    }
   }
    &::before{
      width:90%;
      height:0.5em;
      content:"";
      border:solid 1px #be00fe60;
      position:absolute;
      z-index:-2;
      bottom:-.6em;
      border-top:none;

    }
    & > label {
width:100%;
color:#fff;    
}
    & label:nth-child(3){
background-color:#be00fe60;
color:#fff;
width:100%;
text-align:center;
    }
  }
`;


