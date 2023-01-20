const clienteService = require("../services/clienteService");

const getAllJuguetes = (req, res) => {
  try {
    clienteService.getAllJuguetes()
      .then((juguetes) =>
        res.send({ status: "OK", data: juguetes }));
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const getMiDeuda = (req, res) => {
  try {
    const { params: { clienteId }, } = req;
    if (!clienteId) {
      return;
    }
    clienteService.getMiDeuda(clienteId)
      .then((deuda) =>
        res.send({ status: "OK", data: deuda }));
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
      .then((misPagos) =>
        res.send({ status: "OK", data: misPagos }));
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
      .then((juguetesSeparados) =>
        res.send({ status: "OK", data: juguetesSeparados }));
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
      res.status(201).send({ status: "OK", data: "Hacen falta datos, reviselos y realize la cosulta nuevamente" });
      return;
    }
    const datosCliente = {
      cedula: body.cedula,
      nombre: body.nombre,
      apellido: body.apellido
    };
    clienteService.insertarCliente(datosCliente)
      .then((datosC) =>
        res.status(201).send({ status: "OK", data: datosC }));
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
      res.status(201).send({ status: "OK", data: "Hacen falta datos, reviselos y realize la cosulta nuevamente" });
      return;
    }
    const datosJuguete = {
      codigo: body.codigo,
      nombre: body.nombre,
      cantidad: body.cantidad,
      precio: body.precio
    };
    clienteService.insertarJuguete(datosJuguete)
      .then((datosJ) =>
        res.status(201).send({ status: "OK", data: datosJ }));
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
      res.status(201).send({ status: "OK", data: "Hacen falta datos, reviselos y realize la cosulta nuevamente" });
      return;
    }
    const datosJuguete = {
      id_juguete: body.id_cliente,
      id_cliente: body.id_juguete,
      cantidad: body.cantidad
    };
    clienteService.separarJuguetes(datosJuguete)
      .then((datosJ) =>
        res.status(201).send({ status: "OK", data: datosJ }));
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
      res.status(201).send({ status: "OK", data: "Hacen falta datos, reviselos y realize la cosulta nuevamente" });
      return;
    }
    const datosPago = {
      id_cliente: body.id_cliente,
      pago: body.pago
    };
    clienteService.pagoDeuda(datosPago)
      .then((datosP) =>
        res.status(201).send({ status: "OK", data: datosP }));
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const updatedJuguetes = (req, res) => {
  try {
    if (
      !body.nombre_juguete ||
      !body.cantidad_juguete ||
      !body.precio ||
      !body.codigo 
    ) {
      res.status(201).send({ status: "OK", data: "Hacen falta datos, reviselos y realize la cosulta nuevamente" });
      return;
    }
  clienteService.updatedJuguetes( body)
    .then((updatedJuguete) =>
      res.send({ status: "OK", data: updatedJuguete }));
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
  const { body } = req;
    
};

const deleteJuguetes = (req, res) => {
  try {
    const { params: { jugueteId }, } = req;
  if (!jugueteId) {
    res.status(204).send({ status: "OK", data: "Hacen falta datos, reviselos y realize la cosulta nuevamente" });
    return;
  }
  clienteService.deleteJuguetes(jugueteId);
  res.status(204).send({ status: "OK" });
  } catch (error) {
    console.log("Ha ocurrido un error: " + error);
  }
};

const deleteCliente = (req, res) => {
  try {
    const { params: { clienteId }, } = req;
  if (!clienteId) {
    res.status(204).send({ status: "OK", data: "Hacen falta datos, reviselos y realize la cosulta nuevamente" });
    return;
  }
  clienteService.deleteCliente(clienteId);
  res.status(204).send({ status: "OK" });
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