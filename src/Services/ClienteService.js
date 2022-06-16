import api from "./api"


export async function CriarCliente(params) {
  const estrutura = []

  await api.post(`/cliente/createClient`, params)
    .then((res) => {
      estrutura.push(res?.data)
    }).catch((err) => {
      estrutura.push(err?.response?.data)
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

export async function ConfirmarCodigo(params) {
  const estrutura = []

  await api.post(`/cliente/RecoverPass`, params)
    .then((res) => {
      estrutura.push(res?.data)
    }).catch((err) => {
      estrutura.push(err?.response)
    });

  return estrutura
}

export async function TrocarSenha(params) {
  const estrutura = []

  await api.put(`/cliente/AlterPass`, params)
    .then((res) => {
      estrutura.push(res?.data)
    }).catch((err) => {
      estrutura.push(err?.response)
    });

  return estrutura
}