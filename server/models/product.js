import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
    },
    metalColor: {
      type: Boolean,
    },
    purity: {
      type: Number,
    },
    size: {
      type: Number,
    },
    centerStone: {
      type: String,
    },
    clarity: {
      type: String,
    },
    stoneShape: {
      type: String,
    },
    carat: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
