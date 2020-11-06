
exports.up = function(knex) {
    return knex.schema
    .createTable('Recipes', tbl => {
        tbl.increments()
        tbl.string('Recipe_Name',128).notNullable()
    })
    .createTable('Ingredients', tbl =>{
        tbl.increments()
        tbl.string('Ing_Name', 128).notNullable()
    })
    .createTable('Recipe_Ingredients', tbl =>{
        tbl.increments()
        tbl.integer('Ingredient_id')
        tbl.floatingNumber('Quantity')
        tbl.integer('Recipe_Id')
            .unsigned()
            .notNullable()
            .refrences('Recipe_id')
            .inTable('Recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('Steps', tbl =>{
        tbl.increments()
        tbl.integer('sequence')
        tbl.string('instuction')
        tbl.integer('Recipe_Id')
            .unsigned()
            .notNullable()
            .refrences('Recipe_id')
            .inTable('Recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('Steps')
  .dropTableIfExists('Recipe_Ingredients')
  .dropTableIfExists('Ingredients')
  .dropTableIfExists('Recipes')
};
