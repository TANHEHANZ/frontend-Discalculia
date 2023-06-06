import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { postmuestras, updateMuestras } from "../services/Muestras";
import { postRegister } from "../services/Rgeister";
import {
  Divinput,
  Botonagregar,
  Container,
  Divboton,
  Divinputlabel,
  Input,
  Select,
} from "./DoctoresForm";

const MuestrasForm = ({
  getApi,
  usuariosactual,
  setUsuarioactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  useEffect(() => {
    if (Object.keys(usuariosactual).length > 0) {
      setNombre(usuariosactual.nombre);
      setApellido(usuariosactual.apellido);
      setEmail(usuariosactual.email);
      setTelefono(usuariosactual.telefono);
      setPassword(usuariosactual.password);
      setPassword_confirmation(usuariosactual.password_confirmation);
    }
    return () => {
      setUsuarioactual({});
    };
  }, [usuariosactual]);
  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(usuariosactual).length >= 0) {
      postRegister(
        nombre,
        apellido,
        email,
        telefono,
        password,
        password_confirmation,
        () => {
          setNombre("");
          setApellido("");
          setEmail("");
          setTelefono("");
          setPassword("");
          setPassword_confirmation("");
          getApi();
          closeModal();
        }
      );
    }
  };

  return (
    <Container>
      <div>
        <form>
          <Divinput>
            <Divinputlabel>
              <label>nombre: </label>
              <Input
                name="nombre"
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>apellido: </label>
              <Input
                name="apellido"
                type="text"
                required
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>email: </label>
              <Input
                name="email"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>telefono: </label>
              <Input
                name="telefono"
                type="text"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>password: </label>
              <Input
                name="password"
                type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>password confirma: </label>
              <Input
                name="password"
                type="text"
                required
                value={password_confirmation}
                onChange={(e) => setPassword_confirmation(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divboton>
            <Botonagregar onClick={(e) => updatepost(e)}>
              {Object.keys(usuariosactual).length > 0 ? "Editar" : "Agregar"}
            </Botonagregar>
          </Divboton>
        </form>
      </div>
    </Container>
  );
};
export default MuestrasForm;
