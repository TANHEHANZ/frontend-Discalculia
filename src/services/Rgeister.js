const baseUrl =
  import.meta.env.VITE_BACKEND_URL

export const getRegister = async () => {
  try {
    const response = await fetch(`${baseUrl}usuarios`, {
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
export const deleteRegister = async (id, callback) => {
  const response = await fetch(`${baseUrl}usuarioEliminar/${id}`, {
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
export const postRegister = async (nombre,apellido, email, telefono, password, password_confirmation, callback) => {
    console.log(JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        password: password,
        password_confirmation: password_confirmation
      }))
  const response = await fetch(`${baseUrl}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
      password: password,
      password_confirmation: password_confirmation
    })
  });
  if (response.ok) {
    callback();
  }
}