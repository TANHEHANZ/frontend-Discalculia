import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import PacientesForm from "../models/PacientesForm";
import { UseFech } from "../hooks/useFech";
import juego1 from "../img/imgnay/juego1.png"
import styled from "styled-components";
import { getJuegos ,deleteJuego} from "../services/Juegos";
import Resultados from "./Resultados";

const Pacientes = () => {
  const [juegoactual, setJuegoactual] = useState({});
  const { getApi, data: juegs } = UseFech(getJuegos);
  const { openModal, closeModal } = useModal(
    Object.keys(juegoactual).length > 0
      ? "Editar Registro Juego"
      : "Agregar un nuevo Juego",
    <PacientesForm
      getApi={getApi}
      juegoactual={juegoactual}
      setJuegoactual={setJuegoactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(juegoactual).length > 0) {
      openModal();
    }
  }, [juegoactual]);

  return (
    <Section>
        <h2>Juegos Guardados</h2>
   <article>
        <section>
          <button onClick={openModal}> nuevo juego</button>
       <p>Buscar Juegos</p>
          <input  type="text"
            placeholder="Buscar"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)} />
         
        <Resultados/>
        </section>
          
      <Div>
  
      {juegs
            .filter((v) =>
              v.nombre_juego.toLowerCase().includes(filtro.toLowerCase())
            )
            .map((v, i) => (
      <section key={i}>
      <img src={juego1} alt="sd" />

        <p>Nombre del Juego :{v.nombre_juego}</p>
        <p>Descripcion : {v.descripcion}</p>
        <p>Pertenece A :{v.id_categorias}</p>
        <p>Nivel de Dificultad:{v.nivel_dificultad}</p>
        <p>Pertenece A :{v.id_categorias}</p>
        <button
                        onClick={() => {
                          setJuegoactual(v);
                        }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => {
                          deleteJuego(v.id, getApi);
                        }}
                      >
                       Eliminar
                      </button>
      </section>
          ))}
    </Div>
   </article>
    </Section>
  );
};

export default Pacientes;

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: transparent;
  padding: 1em;

& article{
  gap:2em;
  display:flex;
  width:90%;
  margin:2em auto;
  & > section{
    width:40%;
  height: auto;
  padding:1em 0;
  display: flex;
  margin:0 auto;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  border-radius:15px;
  border:solid 1px #be00fe40;
  gap:.5em;
  & p{
color:#fff;

  }
  & input{
width:90%;
background-color:transparent;
border:none;
border-bottom:solid 1px #BF00FE;
outline: none;
margin:2em 0;
color:#fff;
  }
  &:hover{
    box-shadow:0 2px 5px #BF00FE;
  }
  & button{
   width:90%;
   color:#fff9;
   border:solid 1px #BF00FE;
   border-radius:0.5em;
   background-color:transparent;
   cursor: pointer;
   padding:0.5em 0;
   &:hover{
    background-color:#BF00FE;
    color:#fff;
   }}}
  & > div{
    width:40%;
  height: 20vh;
  padding:1em 0;
  display: flex;
  margin:0 auto;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  border-radius:15px;
  border:solid 1px #be00fe40;
  gap:2em;
  &:hover{
    box-shadow:0 2px 5px #BF00FE;
  }
  & button{
    padding:0.3em 1em;
   color:#fff9;
   border:solid 1px #BF00FE;
   border-radius:0.5em;
   background-color:transparent;
   cursor: pointer;
   &:hover{
    background-color:#BF00FE;
    color:#fff;
   }

  }
  }
}
  & h2{
    color:#fff;
    font-size:1.2em;
    font-weight:100;
    text-transform:uppercase;
    width:15%;
  transition: all 0.5s ease-in-out;
&:hover{
  border-bottom:solid 1px #fff;
  background-color:#BF00FE;
  width:20%;

}
    }
`;
const Div = styled.aside`
  width:60%;
  height: auto;
  display: flex;
  margin:0 auto;
  flex-direction: row;
  border-radius:15px;
  /* border:solid 1px #be00fe40; */
  flex-wrap:wrap;

  & img{
    width:100%;
    height:auto;
    &:hover{
      filter: drop-shadow(0 2px 5px #BF00FE);
    }

  }
  & section{
  padding:1em 1em;

    width:calc(90% / 2);
  border:solid 1px #be00fe40;
display:flex;
flex-direction:column;
gap :0.5em;
margin:0.5em 1em 0 1em;
&:hover{
    box-shadow:0 2px 5px #BF00FE;
  }
& p{
  
  transition: all 0.5s ease-in-out;

  color:#fff;
  &:hover{
  border-bottom:solid 1px #fff;
  background-color:#BF00FE;
  width:100%;

}
}
& > h1{
  font-size:0.9em;
  font-weight:100;
  color:#fff;
  text-transform:uppercase;
}
& > button {
   padding:0.3em 1em;
   color:#fff9;
   border:solid 1px #BF00FE;
   border-radius:0.5em;
   background-color:transparent;
   cursor: pointer;
   &:hover{
    background-color:#BF00FE;
    color:#fff;
   }
  }
  }
 
`;

