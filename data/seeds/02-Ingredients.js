
exports.seed = function(knex, Promise) {
 
      return knex('Ingredients').insert([
        {id: 1, Ingredient_Name: 'Tomato'},
        {id: 2, Ingredient_Name: 'Avocado'},
        {id: 3, Ingredient_Name: 'Onion'},
        {id: 4, Ingredient_Name: 'Cilantro'},
        {id: 5, Ingredient_Name: 'Jalapeño'},
        {id: 6, Ingredient_Name: 'Arbol Chilies'},
        {id: 7, Ingredient_Name: 'Tomatillo'}
      ]);
};
