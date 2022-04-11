import axios from "axios";
import api from "./api"


export async function CriarCliente(params) {
    const estrutura = []
  
    await axios.post(`${api}/cliente/createClient`, params)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function LogarCliente(params) {
    const estrutura = []
  
    await axios.post(`${api}/cliente/login`, params)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}