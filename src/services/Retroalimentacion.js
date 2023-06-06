const baseUrl =
    import.meta.env.VITE_BACKEND_URL
export const getretroalimebntacion = async () => {


    try {
        const response = await fetch(`${baseUrl}retro`, {
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
export const deletretro= async (id, callback) => {
    const response = await fetch(`${baseUrl}retro/${id}`, {
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
export const updateretro = async (retroalimentacionactual,callback) => {

    const response = await fetch(`${baseUrl}retro/${retroalimentacionactual.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({

        retroalimentacion:retroalimentacionactual.retroalimentacion,
        id_juegos:retroalimentacionactual.id_juegos,

    })});
    if(response.ok){
      callback();
    }
  }
  export const postretro = async (retroalimentacion,id_juegos,callback) => {
    const response = await fetch(`${baseUrl}retro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        retroalimentacion:retroalimentacion,
        id_juegos:id_juegos,
    })});
    if(response.ok){
      callback();
    }
  }