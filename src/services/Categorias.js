const baseUrl =
    import.meta.env.VITE_BACKEND_URL
export const getCategorias = async () => {


    try {
        const response = await fetch(`${baseUrl}categoria`, {
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
export const deletecategoria= async (id, callback) => {
    const response = await fetch(`${baseUrl}categoria/${id}`, {
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
export const updatetema = async (categoriaactual,callback) => {

    const response = await fetch(`${baseUrl}categoria/${categoriaactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre_categoria:categoriaactual.nombre_categoria,
        id_juegos:categoriaactual.id_juegos,

    })});
    if(response.ok){
      callback();
    }
  }
  export const postTiposcancer = async (nombre_categoria,id_juegos,callback) => {
    const response = await fetch(`${baseUrl}categoria`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        nombre_categoria:nombre_categoria,
        id_juegos:id_juegos,
    })});
    if(response.ok){
      callback();
    }
  }