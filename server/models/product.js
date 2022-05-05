import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productSku: {
      type: String,
      required: true,
      unique: true,
    },
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
      type: Array,
    },
    purity: {
      type: Array,
    },
    size: {
      type: Array,
    },
    centerStone: {
      type: Array,
    },
    clarity: {
      type: Array,
    },
    stoneShape: {
      type: Array,
    },
    carat: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    popular: { type: Boolean, default: false },
    state: { type: Array, default: "NEW" },
    madeToOrder: { type: Boolean, default: true },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
