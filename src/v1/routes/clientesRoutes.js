const express = require("express");
const clienteController = require("../../controllers/clienteController");

const router = express.Router();

router.get("/misDeudas/:clienteId", clienteController.getMiDeuda);

router.get("/misPagos/:clienteId", clienteController.getMisPagos);

router.get("/misJuguetesSeparados/:clienteId", clienteController.getMisJuguetesSeparados);

router.post("/insertarCliente", clienteController.insertarCliente);

router.post("/insertarJuguete", clienteController.insertarJuguete);

router.post("/separarJuguetes", clienteController.separarJuguetes);

router.post("/pagoDeuda", clienteController.pagoDeuda);

module.exports = router;