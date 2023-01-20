// In src/services/workoutServices.js
//libreria para crear id aleatorios
const { v4: uuid } = require("uuid");
const cliente = require("../database/cliente");

const getAllJuguetes = () => {
  try {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.getAllJuguetes().then((juguetes) => resolve(juguetes));
    }, 1000)
  }) 
  } catch (error) {
    console.log("Ha ocurrido un error: "+error);
  }
};

const getMiDeuda = (clienteId) => {
  try {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.getMiDeuda(clienteId).then((deuda) => resolve(deuda));
    }, 1000)
  }) 
  } catch (error) {
    console.log("Ha ocurrido un error: "+error);
  }
};

const getMisPagos = (clienteId) => {
  try {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.getMisPagos(clienteId).then((misPagos) => resolve(misPagos));
    }, 1000)
  }) 
  } catch (error) {
    console.log("Ha ocurrido un error: "+error);
  }
};

const getMisJuguetesSeparados = (clienteId) => {
  try {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.getMisJuguetesSeparados(clienteId).then((juguetesSeparados) => resolve(juguetesSeparados));
    }, 1000)
  }) 
  } catch (error) {
    console.log("Ha ocurrido un error: "+error);
  }
};

const insertarCliente = (datosCliente) => {
  try {
    const datosInsertar = {
    ...datosCliente,
    id: uuid() //agregando la id aleatoria y las fechas
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.insertarCliente(datosInsertar).then((datosC) => resolve(datosC));
    }, 1000)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const insertarJuguete = (datosJuguete) => {
  try {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.insertarJuguete(datosJuguete).then((datosJ) => resolve(datosJ));
    }, 1000)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const separarJuguetes = (datosJuguete) => {
  try {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.separarJuguetes(datosJuguete).then((datosJ) => resolve(datosJ));
    }, 1000)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const pagoDeuda = (datosPago) => {
  try {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.pagoDeuda(datosPago).then((datos) => resolve(datos));
    }, 1000)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const updatedJuguetes = (cambios) => {
 try {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.updatedJuguetes( cambios).then((updatedJuguete) => resolve(updatedJuguete));
    }, 1000)
  })
 } catch (error) {
  console.log("Ha ocurrido un error: " + error);
 }
};

const deleteJuguetes = (jugueteId) => {
  try {
    cliente.deleteJuguetes(jugueteId);
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const deleteCliente = (clienteId) => {
  try {
    cliente.deleteCliente(clienteId);
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

module.exports = {
  getAllJuguetes,
  getMiDeuda,
  getMisPagos,
  getMisJuguetesSeparados,
  insertarCliente,
  insertarJuguete,
  separarJuguetes,
  pagoDeuda,
  updatedJuguetes,
  deleteJuguetes,
  deleteCliente
};