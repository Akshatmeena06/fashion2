const getproductcontroller = require("../controllers/product/getproductcontroller");
const express = require("express");
const router = express.Router();

router.get("/", getproductcontroller);

router.get("/category/:category", getproductcontroller);
router.get("/subcategory/:subcategory", getproductcontroller);
router.get("/name/:name", getproductcontroller);

router.get("/id/:id", getproductcontroller);
router.get("/random", getproductcontroller);
router.get("/toprated", getproductcontroller);
router.get("/lowtohigh", getproductcontroller);
router.get("/hightolow", getproductcontroller);
module.exports = router;
