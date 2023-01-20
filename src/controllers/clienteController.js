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

const getMisPagos = (req, res) => {
  try {
    const { params: { clienteId }, } = req;
    if (!clienteId) {
      return;
    }
    clienteService.getMisPagos(clienteId)
      .then((cliente) =>
        res.send({ status: "OK", data: cliente }));
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const getMisJuguetesSeparados = (req, res) => {
  try {
    const { params: { clienteId }, } = req;
    if (!clienteId) {
      return;
    }
    clienteService.getMisJuguetesSeparados(clienteId)
      .then((cliente) =>
        res.send({ status: "OK", data: cliente }));
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const insertarCliente = (req, res) => {
  try {
    const { body } = req;
    if (
      !body.cedula ||
      !body.nombre ||
      !body.apellido
    ) {
      return;
    }
    const datosCliente = {
      cedula: body.cedula,
      nombre: body.nombre,
      apellido: body.apellido
    };
    console.log(datosCliente);
    clienteService.insertarCliente(datosCliente)
      .then((datos) =>
        res.status(201).send({ status: "OK", data: datos }));
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const insertarJuguete = (req, res) => {
  try {
    const { body } = req;
    if (
      !body.codigo ||
      !body.nombre ||
      !body.cantidad ||
      !body.precio
    ) {
      return;
    }
    const datosJuguete = {
      codigo: body.codigo,
      nombre: body.nombre,
      cantidad: body.cantidad,
      precio: body.precio
    };
    clienteService.insertarJuguete(datosJuguete)
      .then((datos) =>
        res.status(201).send({ status: "OK", data: datos }));
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const separarJuguetes = (req, res) => {
  try {
    const { body } = req;
    if (
      !body.id_juguete ||
      !body.id_cliente ||
      !body.cantidad
    ) {
      return;
    }
    const datosJuguete = {
      id_juguete: body.id_cliente,
      id_cliente: body.id_juguete,
      cantidad: body.cantidad
    };
    clienteService.separarJuguetes(datosJuguete)
      .then((datos) =>
        res.status(201).send({ status: "OK", data: datos }));
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const pagoDeuda = (req, res) => {
  try {
    const { body } = req;
    if (
      !body.id_cliente ||
      !body.pago
    ) {
      return;
    }
    const datosPago = {
      id_cliente: body.id_cliente,
      pago: body.pago
    };
    clienteService.pagoDeuda(datosPago)
      .then((datos) =>
        res.status(201).send({ status: "OK", data: datos }));
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
  getMisPagos,
  getMisJuguetesSeparados,
  insertarCliente,
  insertarJuguete,
  separarJuguetes,
  pagoDeuda,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout
};