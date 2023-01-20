const express = require("express");
const clienteController = require("../../controllers/clienteController");

const router = express.Router();

router.get("/:clienteId", clienteController.getMiDeuda);

//router.get("/:clienteId", clienteController.getOneWorkout);

router.post("/", clienteController.createNewWorkout);

router.patch("/:clienteId", clienteController.updateOneWorkout);

router.delete("/:clienteId", clienteController.deleteOneWorkout);

module.exports = router;