import React from "react";
import styled from "styled-components";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useNavContext } from "../context/navcontext";
import { useuserContext } from "../context/userContext";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();
  const { setLogged } = useNavContext();
  const { user, setUser } = useuserContext();
  const enviar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.ok) {
      const responsejson = await response?.json();
      /*       console.log(responsejson.user) */
      setUser(responsejson.user[0]);
      /*  document.cookie = `token=${responsejson.access_token}; max-age=${60 * 60};
            path=/; somesite=stric`; */
      /*      document.cookie = `user=${JSON.stringify(responsejson.user[0])}; max-age=${60 * 60 * 24};
            path=/; somesite=stric`; */
      localStorage.setItem("user", JSON.stringify(responsejson.user[0]));
      setLogged(true);
      setUser((user) => ({ ...user, isLogged: true }));
      navegate("/");
    }
  };

  return (
    <Abody>
     <section>
        <article>
          <img
            src="https://png.pngtree.com/png-vector/20230531/ourmid/pngtree-cartoon-boy-sitting-down-vector-png-image_6790857.png"
            alt=""
          />
          <h1>Iniciar secion</h1>
          <p>Si no tienes una cuenta registrate !!</p>

          <form>
            <input
              type="email"
              placeholder=" Ingrese el email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="password"
              placeholder="ingresa la  contraseña"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button onClick={enviar}>Ingresar</button>
          </form>
          <Linkes to="/Register">Registrarse</Linkes>
        </article>
      </section>
    </Abody>
  );
}

export default Login;

export const Linkes = styled(Link)`
color:#fff;
text-decoration: none;
background-color:#fcbf4a;
width:60%;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
content:"";
bottom:2em;
border-radius:0 0 1em 1em ;
padding:0.5em 0;
&:hover{
border-bottom: solid 1px #fcbf4a;
}
`;

const Abody = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  background-image:url("https://previews.123rf.com/images/irwanjos/irwanjos1510/irwanjos151000010/47538203-dos-estudiantes-sentados-en-los-bloques-del-alfabeto.jpg");
background-repeat:no-repeat;
object-fit:cover;
background-size:100%;
  & > section {
    box-shadow: 0 0 6px 1px #0002;
    z-index: 2;
    & > div {
      width: 20%;
      background-color: rgb(99, 131, 250);
      height: 100%;
      border-radius: 2em 0 0 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      position: relative;
      overflow: hidden;

      & h2 {
        color: #fff;
        font-size: 3em;
      }
    }
    width: 68%;
    height: 80%;
    border-radius: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    & article {
      width: 50%;
      background-color: #023047;
      height: 100%;
      border-radius: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      position:relative;

      & img {
        width: 6em;
        height: 6em;
        background-color: transparent;
        box-shadow: 0 0 5px 1px #0002;
        border-radius: 0.7em;
        filter: invert(1);
      }
      & h1 {
        font-size: 1.5em;
        font-weight: 100;
        text-transform: uppercase;
      }
      & form {
        width: 60%;
        height: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        & label {
          font-size: 0.8em;
        }
        & input {
          width: 100%;
          background-color: #fcbf4a;
          border-radius: 0.5em;
          outline: none;
          padding: 0.5em 0;
        }
        & button {
          margin-top: 1em;
          width: 100%;
          background-color: rgb(99, 220, 250);
          border: solid 1px #0002;
          padding: 0.5em 0;
          color: #fff;
          cursor:pointer;
          &:hover {
            background-color: #fcbf4a;
          }
        }
        gap: 0.8em;
      }
    }
  }
`;