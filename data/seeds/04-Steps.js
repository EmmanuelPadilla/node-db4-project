
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {id: 1, sequence:1, instruction:'wash all ingredients', Recipe_id: 1},
        {id: 2, sequence:2, instruction:'chop into 1cm sq pices', Recipe_id: 1},
        {id: 3, sequence:3, instruction:'mix in a bowl, season to taste, squirt of lemon', Recipe_id: 1},
        {id: 4, sequence:1, instruction:'wash all ingredients', Recipe_id: 2},
        {id: 5, sequence:2, instruction:'boil all ingredients until tender', Recipe_id: 2},
        {id: 6, sequence:3, instruction:'blend until uniform in consistency', Recipe_id: 2},
        {id: 7, sequence:4, instruction:'season to taste, pour in jar, profit', Recipe_id: 2},
        {id: 8, sequence:1, instruction:'wash all ingredients', Recipe_id: 3},
        {id: 9, sequence:2, instruction:'boil all ingredients until tender', Recipe_id: 3},
        {id: 10, sequence:3, instruction:'blend until uniform in consistency', Recipe_id: 3},
        {id: 11, sequence:4, instruction:'season to taste, pour in jar, profit', Recipe_id: 3},
        {id: 12, sequence:1, instruction:'wash all ingredients', Recipe_id: 4},
        {id: 13, sequence:2, instruction:'chop into 1cm sq pices', Recipe_id: 4},
        {id: 13, sequence:2, instruction:'mush in bowl', Recipe_id: 4},
        {id: 14, sequence:3, instruction:'season to taste, squirt of lemon', Recipe_id: 4},
      ]);
    });
};
