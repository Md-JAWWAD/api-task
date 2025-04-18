// const { model } = require("mongoose");
import model from "../model/Schema.js";

const getProducts = async (req, res) => {
  try {
    const filter = {};

    if (req.query.name) {
      filter.name = req.query.name;
    }
    if (req.query.class) {
      filter.class = req.query.class;
    }
    if (req.query.profession) {
      filter.profession = req.query.profession;
    }

    console.log(filter);
    const getQuery = await model.find(filter);
    res.json(getQuery);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getSearchProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const collect = await model.findById(id);
    !collect
      ? res.status(404).json({ message: "Product not find" })
      : res.status(200).json({ message: "Product find", collect });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createProducts = async (req, res) => {
  try {
    const collect = await model.create(req.body);
    res.status(200).json({ message: "Product created", collect });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const collect = await model.findByIdAndUpdate(id, req.body);
    !collect
      ? res.status(404).json({ message: "Product not found" })
      : res.status(200).json({ message: "Product updated" });
  } catch (error) {
    res.status(202).json({ message: error.message });
  }
};
const deleteProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const del = await model.findByIdAndDelete(id);
    !del
      ? res.status(404).json({ message: "Product not found" })
      : res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(202).json({ message: error.message });
  }
};

export {
  getSearchProducts,
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
};
