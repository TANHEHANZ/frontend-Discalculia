import { React, useState } from "react";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";
import styled  from "styled-components";

const AdminComponent = () => {
  const [expandir, setExpandir] = useState(false);
  const [expandir1, setExpandir1] = useState(false);
  const [expandir2, setExpandir2] = useState(false);

  return (
    <Master>
      <article>
        <h1>Discalculia</h1>
        <img src="" alt="" />
      </article>
      <h2>Home</h2>
      <article>
        <Linkes to="/pacientes">
          <img src="" alt="" /> Juegos
        </Linkes>
        <Linkes to="/Resultados">
          <img src="" alt="" />
          Categorias
        </Linkes>
        <Linkes to="/seguimientos">
          <img src="" alt="" />
          Retroalimentacion
        </Linkes>
        <Linkes to="/muestras">
          <img src="" alt="" />
          Gestion de usuarios
        </Linkes>
      </article>
    </Master>
  );
};

export default AdminComponent;
const Borderabajo = keyframes`
  0% {
    border-bottom: solid 1px transparent;
    width: 0%;
    transform: scaleX(0);
    transform-origin: left;
  }

  100% {
    border-bottom: solid 1px #BF00FE;
    width: 100%;
    transform: scaleX(1);
    transform-origin: left;
  }
`;


export const Master = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  background-color: #161929;
  & > div {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100%;
    color: #fff;
    padding: 3em 2em;
    & img {
      width: 3em;
    }
    & h2 {
      padding: 0 0 0 4em;
    }
  }
  & > section {
    width: 100%;
    height: 60vh;
    overflow-y: scroll;
  }
  & h2 {
    font-weight: 100;
    font-size: 0.7em;
    text-transform: uppercase;
    color: #fff;
    padding: 0 1.5em;
    background-color: transparent;
    margin: 1em 1.5em;
  }
  & > article {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    & h1 {
      color: #fff;
      font-weight: 100;
      background-color: transparent;
      padding: 0.5em 0 1em 0em;
      border-bottom: solid 1px #bf00fe;
      width: 100%;
      height:10vh;
      display:flex;
      justify-content:center;
      align-items:center;

    }
    & img {
      width: 2em;
      padding: 1.8em 0;

      filter: invert(100%);
      background-color: transparent;
    }
  }
`;
export const Linkes = styled(Link)`
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  padding: 0.2em 2em;
  gap: 0.5em;
  transition: all 0.5s ease-in-out;
  &::first-of-type::first-letter {
    color: #bf00fe;
  }
  &:hover {
    background-color: #2c345fc3;
    color: #bf00fe;
    border-bottom: solid 2px #bf00fe;
    transform: translateX(10px);
  }
`;

