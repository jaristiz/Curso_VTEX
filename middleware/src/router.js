const express = require("express");

const router = express.Router();

const listAllSkusAndProductsId = require("./controllers/listAllSkusAndProductsId")
const listProduct = require("./controllers/listProductController")
const listSku = require("./controllers/listSkuController")

router.post("/list-all-skus",listAllSkusAndProductsId.index);
router.get("/list-products",listProduct.index);
router.get("/list-sku",listProduct.index);

module.exports = router;