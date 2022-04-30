import api from "./api"
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function BuscarDoutorPorEspecialidade(params) {
    const estrutura = []
  
    await api.get(`/consulta/GetDoctorsBySpeciality?speciality=${params}`)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function BuscarDoutorPorCrm(params) {
    const estrutura = []
  
    await api.get(`/consulta/GetDoctorsByCrm?crm=${params}`)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function BuscarFilaPorMedicoeDataConsulta(params) {
    const estrutura = []
  
    await axios.get(`/consulta/GetQuerysByCrmDate?crm=${params?.medicoAtual}&DataConsulta=${params?.DataConsulta}`)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function BuscarTodasEspecialidades() {
    const estrutura = []
  
    const tokenclient = await AsyncStorage.getItem("TOKEN")
    await api.get(`/consulta/GetEspecialityAll`, {headers: {
      Authorization: `Bearer ${tokenclient}`
      }})
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function CriarNovaConsulta(params) {
    const estrutura = []
  
    await api.post(`/consulta/CreateNewQuery`, params)
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function DeletarConsultaPorId(params) {
    const estrutura = []
  
    await api.delete(`/Consulta/deleteQueryById?IdClient=${params.key}`, )
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}

export async function ConsultaPorId(params) {
    const estrutura = []
  
    await api.get(`/Consulta/QueryByCustomer?IdClient=${params.idClient}`, {headers: {
      Authorization: `Bearer ${params.token}`
      }})
      .then((res) => {
        estrutura.push(res.data.data)
      }).catch((err) => {
        estrutura.push(err.data.data)
      });

    return estrutura
}