import mongoose from "mongoose";

const productModel = mongoose.Schema({
  name: String,
  class: Number,
  profession: String,
});

const model = mongoose.model("users", productModel);

export default model;
