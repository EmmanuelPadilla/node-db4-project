
exports.seed = function(knex, Promise) {
  
      return knex('Recipe_Ingredients').insert([
        {id: 1, Ingredient_id: 1, Quantity:2, Recipe_Id: 1},
        {id: 2, Ingredient_id: 3, Quantity:1, Recipe_Id: 1},
        {id: 3, Ingredient_id: 4, Quantity:.5, Recipe_Id: 1},
        {id: 4, Ingredient_id: 5, Quantity:1, Recipe_Id: 1},
        {id: 5, Ingredient_id: 1, Quantity:4, Recipe_Id: 2},
        {id: 6, Ingredient_id: 2, Quantity:.5, Recipe_Id: 2},
        {id: 7, Ingredient_id: 7, Quantity:20, Recipe_Id: 2},
        {id: 8, Ingredient_id: 5, Quantity:5, Recipe_Id: 3},
        {id: 9, Ingredient_id: 4, Quantity:.5, Recipe_Id: 3},
        {id: 10, Ingredient_id: 3, Quantity:5, Recipe_Id: 3},
        {id: 11, Ingredient_id: 6, Quantity:4, Recipe_Id: 4},
        {id: 12, Ingredient_id: 1, Quantity:1, Recipe_Id: 4},
        {id: 13, Ingredient_id: 2, Quantity:.5, Recipe_Id: 4},
        {id: 14, Ingredient_id: 4, Quantity:.5, Recipe_Id: 4},
        {id: 15, Ingredient_id: 3, Quantity:1, Recipe_Id: 4},
        
      ]);
    
};
