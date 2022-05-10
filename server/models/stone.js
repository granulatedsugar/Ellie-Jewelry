import mongoose from "mongoose";

const Schema = mongoose.Schema;

const stoneSchema = new Schema(
  {
    stone: { type: String, required: true, unique: false },
    clarity: { type: String, required: true, unique: false },
    carat: { type: Array, required: true, unique: false },
  },
  {
    timestamps: true,
  }
);

const Stone = mongoose.model("Stone", stoneSchema);

export default Stone;
