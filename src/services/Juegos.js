const baseUrl =
    import.meta.env.VITE_BACKEND_URL
export const getJuegos = async () => {
    try {
        const response = await fetch(`${baseUrl}juego`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response;
    } catch (error) {
        console.log(error);
    }
};
export const deleteJuego= async (id, callback) => {
    const response = await fetch(`${baseUrl}juego/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },
    })
    if (response.ok) {
        callback();
    }
};
export const updateJuego = async (juegoactual,callback) => {
    const response = await fetch(`${baseUrl}juego/${juegoactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre_juego:juegoactual.nombre_juego,
        descripcion:juegoactual.descripcion,
        nivel_dificultad:juegoactual.nivel_dificultad,
        imagen:juegoactual.imagen,
        puntuacion:juegoactual.puntuacion,
        id_categorias:juegoactual.id_categorias,
    })});
    if(response.ok){
      callback();
    }
  }
  export const postJuegos = async (nombre_juego,descripcion,nivel_dificultad,imagen,puntuacion,id_categorias,callback) => {
    console.log(JSON.stringify({
        nombre_juego:nombre_juego,
        descripcion:descripcion,
        nivel_dificultad:nivel_dificultad,
        imagen:imagen,
        puntuacion:puntuacion,
        id_categorias:id_categorias,
    }))
    
    const response = await fetch(`${baseUrl}juego`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre_juego:nombre_juego,
        descripcion:descripcion,
        nivel_dificultad:nivel_dificultad,
        imagen:imagen,
        puntuacion:puntuacion,
        id_categorias:id_categorias,
    })});
    if(response.ok){
      callback();
    }
  }