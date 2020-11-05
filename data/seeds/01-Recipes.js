
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {Recipe_id: 1, Recipe_Name: 'Pico de Gallo'},
        {Recipe_id: 2, Recipe_Name: 'Red Sauce'},
        {Recipe_id: 3, Recipe_Name: 'Green Sauce'}
        {Recipe_id: 3, Recipe_Name: 'Guacamole'}
      ]);
    });
};
