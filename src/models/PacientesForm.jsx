import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input,Select } from './DoctoresForm';
import { updateJuego ,postJuegos} from "../services/Juegos";
import { getCategorias } from "../services/Categorias";
const PacientesForm = ({
  getApi,
  juegoactual,
  setJuegoactual,
  closeModal,
}) => {

  const [nombre_juego, setNombre_juego] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nivel_dificultad, setNivel_dificultad] = useState("");
  const [imagen, setImagen] = useState("");
  const [puntuacion, setPuntuacion] = useState("");
  const [id_categorias, setId_categorias] = useState("");
  const { data: cate } = UseFech(getCategorias);
  // const llenarimagen = (e) => {
  //   getBase64(e.target.files[0], (resultado) => {
  //     setImagen(resultado);
  //   });
  // };
  useEffect(() => {
    if (Object.keys(juegoactual).length > 0) {
        setNombre_juego(juegoactual.nombre_juego);
        setDescripcion(juegoactual.descripcion);
        setNivel_dificultad(juegoactual.nivel_dificultad);
        setImagen(juegoactual.imagen);
        setPuntuacion(juegoactual.puntuacion);
    }
    return () => {
        setJuegoactual({});
    };
  }, [juegoactual]);
  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(juegoactual).length > 0) {
      updateJuego(
        {
        id: juegoactual.id,
        nombre_juego:juegoactual.nombre_juego,
        descripcion:juegoactual.descripcion,
        nivel_dificultad:juegoactual.nivel_dificultad,
        imagen:juegoactual.imagen,
        puntuacion:juegoactual.puntuacion,
        id_categorias:juegoactual.id_categorias,
        },
        () => {
          setNombre_juego("");
        setDescripcion("");
        setNivel_dificultad("");
        setImagen("");
        setPuntuacion("");
          closeModal();
          setJuegoactual({});
          getApi();
        }
      );
    } else {
      postJuegos(
          nombre_juego,descripcion,nivel_dificultad,imagen,puntuacion,id_categorias,
         () => {
          setNombre_juego("");
        setDescripcion("");
        setNivel_dificultad("");
        setImagen("");
        setPuntuacion("");
        getApi();
        closeModal();
      });
    }
  };
  return(
  <Container>
  <div>
    <form>
      <Divinput>
        <Divinputlabel>
          <label>Nombre del juego:</label>
          <Input
            name="Nombre"
            placeholder="Ingrese un Nombre"
            type="text"
            required
            value={nombre_juego}
            onChange={(e) => setNombre_juego(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
        <Divinputlabel>
          <label>descripcion:</label>
          <Input
            name="app"
            placeholder="Ingrese apellido paterno"
            type="text"
            required
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
      <Divinputlabel>
          <label>Nivel de dificultad:</label>
          <Input
            name="app m"
            placeholder="Ingrese apellido materno"
            type="text"
            required
            value={nivel_dificultad}
            onChange={(e) => setNivel_dificultad(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
        <Divinputlabel>
          <label>imagen:</label>
          <Input
            name="app"
            placeholder="Ingrese apellido paterno"
            type="text"
            required
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
     
      <Divinput>
        <Divinputlabel>
          <label>puntuacion</label>
          <Input
            name="Telefono"
            placeholder="Seguimiento de telefono"
            type="number"
            value={puntuacion}
            required
            onChange={(e) => setPuntuacion(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
      <Divinput>
              <Divinputlabel>
                <label>id_categorias</label>
                <Select onChange={(e) => setId_categorias(e.target.value)}>
                  <option >seleccione </option>
                  {cate.map((v, i) => (
                    <option key={i} value={v.id}>
                      {v.nombre_categoria}
                    </option>
                  ))}
                </Select>
              </Divinputlabel>
            </Divinput>
      <Divboton>
        <Botonagregar onClick={(e) => updatepost(e)}>
          {Object.keys(juegoactual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
      </Divboton>
    </form>
  </div>
</Container>
  )
};
export default PacientesForm;
