const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");

// Function to render the form for creating a new ingredient
async function newIngredient(req, res) {
  try {
    // Find all existing ingredients in the database
    const foundIngredient = await Ingredient.find({});
      // Check if the ingredient already exists
      const existingIngredient = await Ingredient.findOne({ foundIngredient });

      if (existingIngredient) {
        // Handle the case where the ingredient already exists
        res.status(409).render("error", {
          title: "Ingredient already exists",
        });
      } else {
        const ingredientName = req.body.ingredientName; // assuming ingredientName is sent in the request body
        // Insert the new ingredient
        const newIngredient = new Ingredient({ ingredientName });
        await newIngredient.save();
  
        // Redirect or render success view
        res.redirect("/ingredients/new");
      }
    // Render the "new" view and pass in the found ingredients as data
    res.render("ingredients/new");
  } catch (error) {
    console.log(error);
    res.status(404).render("error", {
      title: "Something went wrong",
    });
  }
}

  // Function to create a new ingredient
  async function create(req, res) {
    try {
      const { ingredientName, ingredientQuantity, ingredientUOM } = req.body;
      // Create a new ingredient using the data from the request body
      await Ingredient.create({
        ingredientName,
        ingredientQuantity,
        ingredientUOM
      });
      
      // Redirect to the page for creating a new ingredient again
      res.redirect("/ingredients/new");
    } catch (error) {
      console.log(error);
      res.render("error", {
        title: "Something went wrong",
      });
    }
  }

module.exports = {
  create,
  new: newIngredient,
};
``