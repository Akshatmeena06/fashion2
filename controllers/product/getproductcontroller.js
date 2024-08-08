const mongoose = require("mongoose");
const productcollection = require("../../models/productschema");

const getproductcontroller = async (req, res) => {
  try {
    const { id, category, name, subcategory } = req.params;
    let products;

    if (category) {
      const searchcategory = category.toLowerCase();
      products = await productcollection.find({
        category: { $regex: new RegExp(searchcategory, "i") },
      });
    } else if (name) {
      const searchname = name.toLowerCase();
      products = await productcollection.find({
        name: { $regex: new RegExp(searchname, "i") },
      });
    } else if (subcategory) {
      const searchsubcategory = subcategory.toLowerCase();
      console.log(`sub`);
      products = await productcollection.find({
        sub_category: { $regex: new RegExp(searchsubcategory, "i") },
      });
    } else if (id) {
      products = await productcollection.find({
        _id: id,
      });
    } else if (req.path.includes("/random")) {
      products = await productcollection.aggregate([
        {
          $sample: {
            size: 9,
          },
        },
      ]);
    } else if (req.path.includes("/toprated")) {
      products = await productcollection.find().sort({ rating: -1 }).limit(9);
    } else if (req.path.includes("/hightolow")) {
      products = await productcollection
        .find()
        .sort({ new_price: -1 })
        .limit(9);
    } else if (req.path.includes("/lowtohigh")) {
      products = await productcollection
        .find()
        .sort({ new_price: +1 })
        .limit(9);
    } else {
      products = await productcollection.find();
      console.log(`Product fetched`);
    }
    if (!products || products.length === 0) {
      return res.status(404).send({ message: "product not found" });
    }

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({
      message: "Error fetching product",
    });
    console.log(`Error occurred: ${error}`);
  }
};

module.exports = getproductcontroller;
