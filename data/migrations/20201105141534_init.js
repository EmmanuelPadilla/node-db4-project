
exports.up = function(knex) {
    return knex.schema
    .createTable('Recipes', tbl => {
        tbl.increments('Recipe_Id')
        tbl.string('Recipe_Name',128).notNullable()
    })
    .createTable('Ingredients', tbl =>{
        tbl.increments()
        tbl.string('Ingredient_Name', 128).notNullable()
    })
    .createTable('Recipe_Ingredients', tbl =>{
        tbl.increments()
        tbl.integer('Ingredient_id')
            .unsigned()
            .notNullable()
            .references('id') //ingredients.id instead of .intable()
            .inTable('Ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.real('Quantity')
        tbl.integer('Recipe_Id')
            .unsigned()
            .notNullable()
            .references('Recipe_Id')
            .inTable('Recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('Steps', tbl =>{
        tbl.increments()
        tbl.integer('sequence')
        tbl.string('instruction')
        tbl.integer('Recipe_Id')
            .unsigned()
            .notNullable()
            .references('Recipe_Id')
            .inTable('Recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('Steps')
  .dropTableIfExists('Recipe_Ingredients')
  .dropTableIfExists('Ingredients')
  .dropTableIfExists('Recipes')
};
