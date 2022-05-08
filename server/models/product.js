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
      default: ["#F7F7F7", "#d4af37", "#CBA3B2"],
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
    clarity: { type: Array },
    stoneShape: { type: Array },
    carat: { type: Array },
    price: { type: Number, required: true },
    popular: { type: Boolean, default: false },
    state: { type: Boolean, default: true },
    madeToOrder: { type: Boolean, default: true },
    inStock: { type: Boolean, default: true },
    labor: { type: Number, default: 0 },
    markup: { type: [Number], default: 0 },
    packaging: { type: Number, default: 0 },
    grams: { type: [Number] },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
