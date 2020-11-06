
exports.seed = function(knex, Promise) {

      return knex('Recipes').insert([
        {Recipe_Id: 1, Recipe_Name: 'Pico de Gallo'},
        {Recipe_Id: 2, Recipe_Name: 'Red Sauce'},
        {Recipe_Id: 3, Recipe_Name: 'Green Sauce'},
        {Recipe_Id: 4, Recipe_Name: 'Guacamole'}
      ]);
};
