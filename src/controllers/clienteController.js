const clienteService = require("../services/clienteService");

const getMiDeuda = (req, res) => {
  try {
    const { params: { clienteId }, } = req;
    if (!clienteId) {
      return;
    }
    clienteService.getMiDeuda(clienteId)
      .then((cliente) =>
        res.send({ status: "OK", data: cliente }));
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const getOneWorkout = (req, res) => {
  const { params: { workoutId }, } = req;
  if (!workoutId) {
    return;
  }
  clienteService.getOneWorkout(workoutId)
    .then((workout) =>
      res.send({ status: "OK", data: workout }));
};

const createNewWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.email ||
    !body.password ||
    !body.name ||
    !body.last_name
  ) {
    return;
  }
  const newWorkout = {
    email: body.email,
    password: body.password,
    name: body.name,
    last_name: body.last_name
  };
  console.log(body);
  clienteService.createNewWorkout(newWorkout)
    .then((workout) =>
      res.status(201).send({ status: "OK", data: workout }));
};

const updateOneWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  clienteService.updateOneWorkout(workoutId, body)
    .then((updatedWorkout) =>
      res.send({ status: "OK", data: updatedWorkout }));
};

const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  clienteService.deleteOneWorkout(workoutId);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getMiDeuda,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};