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

const getOneWorkout = (workoutId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cliente.getOneWorkout(workoutId).then((workout) => resolve(workout));
    }, 1000)
  })
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
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};