import React from 'react'
import {
  postResultados,
  updateResultados,
  getResultados,
} from "../services/Resultados";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { UseFech } from "../hooks/useFech";
import { getMuestras } from '../services/Muestras';
import { getLaboratotio } from '../services/Laboratorios';
import { Divinput,Botonagregar,Container,Divboton,Divinputlabel,Input,Select } from './DoctoresForm';
import { postcategorias ,updatecategoria} from '../services/Categorias';

const ResultadosForm = ( {getApi,
  categoriaactual,
  setCategoriaactual,
  closeModal}) => {

    const [nombre_categoria ,setNombre_categoria]= useState("");

    useEffect(() => {
      if (Object.keys(categoriaactual).length > 0) {
        setNombre_categoria(categoriaactual.nombre_categoria);
        }
      return () => {
        setCategoriaactual({});
      };
    }, [categoriaactual]);

    const updatepost = (e) => {
      e.preventDefault();
      if (Object.keys(categoriaactual).length > 0) {
        updatecategoria(
          {
            id: categoriaactual.id,
            nombre_categoria: nombre_categoria,
          },
          () => {
            setNombre_categoria("");
            closeModal();
            setCategoriaactual({});
            getApi();
          }
        );
      } else {
        postcategorias(nombre_categoria, () => {
          setNombre_categoria("");
          getApi();
          closeModal();
        });
      }
    };
  return (
    <Container>
  <div>
    <form>
      <Divinput>
        <Divinputlabel>
          <label>nombre_categoria:</label>
          <Input
            name="nombre_categoria"
            placeholder="Ingrese el resultado"
            type="text"
            required
            value={nombre_categoria}
            onChange={(e) => setNombre_categoria(e.target.value)}
          />
        </Divinputlabel>
      </Divinput>
    
      <Divboton>
        <Botonagregar onClick={(e) => updatepost(e)}>
          {Object.keys(categoriaactual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
      </Divboton>
    </form>
  </div>
</Container>
  )
}

export default ResultadosForm

