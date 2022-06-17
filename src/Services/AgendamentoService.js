import api from "./api"
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function BuscarDoutorPorEspecialidade(params) {
  const estrutura = []
  const tokenclient = await AsyncStorage.getItem("TOKEN")
  await api.get(`/consulta/GetDoctorsBySpeciality?speciality=${params}`, {
    headers: {
      Authorization: `Bearer ${tokenclient}`
    }
  })
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
  const tokenclient = await AsyncStorage.getItem("TOKEN")
  await api.get(`/consulta/GetQuerysByCrmDate?crm=${params?.medicoAtual}&DataConsulta=${params?.DataConsulta}`,
    {
      headers: {
        Authorization: `Bearer ${tokenclient}`
      }
    })
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
  await api.get(`/consulta/GetEspecialityAll`, {
    headers: {
      Authorization: `Bearer ${tokenclient}`
    }
  })
    .then((res) => {
      estrutura.push(res.data.data)
    }).catch((err) => {
      estrutura.push(err.data.data)
    });

  return estrutura
}

export async function CriarNovaConsulta(params) {
  const estrutura = []

  const tokenclient = await AsyncStorage.getItem("TOKEN")
  await api.post(`/consulta/CreateNewQuery`, params, {
    headers: {
      Authorization: `Bearer ${tokenclient}`
    }
  })
    .then((res) => {
      estrutura.push(res)
    }).catch((err) => {
      estrutura.push(err)
    });

  return estrutura
}

export async function DeletarConsultaPorId(params) {
  const estrutura = []
  const tokenclient = await AsyncStorage.getItem("TOKEN")
  await api.delete(`/Consulta/deleteQueryById?IdClient=${params}`, {
    headers: {
      Authorization: `Bearer ${tokenclient}`
    }
  })
    .then((res) => {
      estrutura.push(res.data.data)
    }).catch((err) => {
      estrutura.push(err.data.data)
    });

  return estrutura
}

export async function ConsultaPorId(params) {
  const estrutura = []

  await api.get(`/Consulta/QueryByCustomer?IdClient=${params.idClient}`, {
    headers: {
      Authorization: `Bearer ${params.token}`
    }
  })
    .then((res) => {
      estrutura.push(res.data.data)
    }).catch((err) => {
      estrutura.push(err.data.data)
    });

  return estrutura
}

export async function ConsultaPorCRM(params) {
  const estrutura = []

  const tokenclient = await AsyncStorage.getItem("TOKEN")
  await api.get(`/Consulta/GetQueryByCrm?crm=${params}`, {
    headers: {
      Authorization: `Bearer ${tokenclient}`
    }
  })
    .then((res) => {
      estrutura.push(res.data.data)
    }).catch((err) => {
      estrutura.push(err.data.data)
    });

  return estrutura
}

export async function ConsultaPorFiltroData(params) {
  const estrutura = []

  const tokenclient = await AsyncStorage.getItem("TOKEN")
  await api.post(`/Consulta/GetFilterDate`, params, {
    headers: {
      Authorization: `Bearer ${tokenclient}`
    }
  })
    .then((res) => {
      estrutura.push(res.data.data)
    }).catch((err) => {
      estrutura.push(err.data.data)
    });

  return estrutura
}