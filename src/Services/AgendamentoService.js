import axios from "axios";

export async function BuscarDoutorPorEspecialidade(params) {
    const estrutura = []
  
    await axios.get(`${api}/consulta/GetDoctorsBySpeciality?speciality=${params}`)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function BuscarDoutorPorCrm(params) {
    const estrutura = []
  
    await axios.get(`${api}/consulta/GetDoctorsByCrm?crm=${params}`)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function BuscarFilaPorMedicoeDataConsulta(params) {
    const estrutura = []
  
    await axios.get(`${api}/consulta/GetQuerysByCrmDate?crm=${params.medicoAtual}&DataConsulta=${params.DataConsulta}`)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function BuscarFilaPorMedicoeDataConsulta(params) {
    const estrutura = []
  
    await axios.get(`${api}/consulta/GetEspecialityAll`)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function CriarNovaConsulta(params) {
    const estrutura = []
  
    await axios.post(`${api}/consulta/CreateNewQuery`, params)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function DeletarConsultaPorId(params) {
    const estrutura = []
  
    await axios.delete(`${api}/Consulta/deleteQueryById?IdClient=${params.key}`, )
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function ConsultaConsultaPorId(params) {
    const estrutura = []
  
    await axios.delete(`${api}/Consulta/QueryByCustomer?IdClient=${params.idClient}`, )
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}