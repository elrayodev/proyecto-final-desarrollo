const express = require("express");
const router = express.Router();
const inventarioController = require("../controllers/inventario-controller");

router.get("/", inventarioController.getAllProducts);
router.post("/", inventarioController.createProducto);
router.put("/:id", inventarioController.updateInventario);
router.delete("/:id", inventarioController.deleteProducto);

module.exports = router