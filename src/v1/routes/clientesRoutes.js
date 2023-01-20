const express = require("express");
const clienteController = require("../../controllers/clienteController");

const router = express.Router();

//para la secreatia
router.get("/allJuguetes", clienteController.getAllJuguetes);

router.get("/miDeuda/:clienteId", clienteController.getMiDeuda);

router.get("/misPagos/:clienteId", clienteController.getMisPagos);

router.get("/misJuguetesSeparados/:clienteId", clienteController.getMisJuguetesSeparados);

router.post("/insertarCliente", clienteController.insertarCliente);

router.post("/insertarJuguete", clienteController.insertarJuguete);

router.post("/separarJuguetes", clienteController.separarJuguetes);

router.post("/pagoDeuda", clienteController.pagoDeuda);

//para administrar

router.patch("/actualizarJuguetes", clienteController.updatedJuguetes);

router.delete("/eliminarJuguetes/:jugueteId", clienteController.deleteJuguetes);

router.delete("/eliminarCliente/:clienteId", clienteController.deleteCliente);

module.exports = router;