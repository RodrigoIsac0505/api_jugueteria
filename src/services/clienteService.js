// In src/services/workoutServices.js
//libreria para crear id aleatorios
const { v4: uuid } = require("uuid");
const cliente = require("../database/cliente");

const getMiDeuda = (clienteId) => {
  try {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.getMiDeuda(clienteId).then((workout) => resolve(workout));
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
      cliente.getMisPagos(clienteId).then((workout) => resolve(workout));
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
      cliente.getMisJuguetesSeparados(clienteId).then((workout) => resolve(workout));
    }, 1000)
  }) 
  } catch (error) {
    console.log("Ha ocurrido un error: "+error);
  }
};

const getOneWorkout = (workoutId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.getOneWorkout(workoutId).then((workout) => resolve(workout));
    }, 1000)
  })
};

const insertarCliente = (datosCliente) => {
  try {
    const datosInsertar = {
    ...datosCliente,
    id: uuid() //agregando la id aleatoria y las fechas
  };
  console.log(datosInsertar);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.insertarCliente(datosInsertar).then((datos) => resolve(datos));
    }, 1000)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const insertarJuguete = (datosJuguete) => {
  try {
  console.log(datosJuguete);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.insertarJuguete(datosJuguete).then((datos) => resolve(datos));
    }, 1000)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const separarJuguetes = (datosJuguete) => {
  try {
  console.log(datosJuguete);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.separarJuguetes(datosJuguete).then((datos) => resolve(datos));
    }, 1000)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const pagoDeuda = (datosPago) => {
  try {
  console.log(datosPago);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.pagoDeuda(datosPago).then((datos) => resolve(datos));
    }, 1000)
  })
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const createNewWorkout = (newWorkout) => {
  //agregando la id aleatoria y las fechas
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  console.log(workoutToInsert);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.createNewWorkout(workoutToInsert).then((workout) => resolve(workout));
    }, 1000)
  })
};

const updateOneWorkout = (workoutId, changes) => {
  const workoutToUpdated = {
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.updateOneWorkout(workoutId, workoutToUpdated).then((workout) => resolve(workout));
    }, 1000)
  })
};

const deleteOneWorkout = (workoutId) => {
  cliente.deleteOneWorkout(workoutId);
};

module.exports = {
  getMiDeuda,
  getMisPagos,
  getMisJuguetesSeparados,
  insertarCliente,
  insertarJuguete,
  separarJuguetes,
  pagoDeuda,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};