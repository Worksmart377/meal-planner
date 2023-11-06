const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
  {
    ingredientName: {
      type: String,
    },
    ingredientQuantity: {
      type: Number,
    },
    ingredientUOM: {
      type: String,
      enum: ["Each", "LB", "OZ", "Cup", "1/4 Cup", "1/3 Cup", "1/2 Cup", "TBSP", "1/4 TBSP", "1/3 TBSP", "1/2 TBSP", "TSP", "1/4 TSP", "1/3 TSP", "1/2 TSP","Pinch", "Can", "Package"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ingredient", ingredientSchema);
