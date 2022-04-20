import api from "./api"


export async function CriarCliente(params) {
    const estrutura = []
  
    await api.post(`/cliente/createClient`, params)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function LogarCliente(params) {
    const estrutura = []
  
    await api.post(`/cliente/login`, params)
      .then((res) => {
        estrutura.push(res?.data)
      }).catch((err) => {
        estrutura.push(err?.response)
      });

    return estrutura
}

export async function RecuperarSenha(params) {
    const estrutura = []
  
    await api.post(`/cliente/RecoverEmail?email=${params}`)
      .then((res) => {
        estrutura.push(res?.data)
      }).catch((err) => {
        estrutura.push(err?.response)
      });

    return estrutura
}