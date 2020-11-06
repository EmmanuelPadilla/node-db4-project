
exports.seed = function(knex, Promise) {
 
      return knex('Ingredients').insert([
        {Ing_Id: 1, Ing_Name: 'Tomato'},
        {Ing_Id: 2, Ing_Name: 'Avocado'},
        {Ing_Id: 3, Ing_Name: 'Onion'},
        {Ing_Id: 4, Ing_Name: 'Cilantro'},
        {Ing_Id: 5, Ing_Name: 'Jalapeño'},
        {Ing_Id: 6, Ing_Name: 'Arbol Chilies'},
        {Ing_Id: 7, Ing_Name: 'Tomatillo'}
      ]);
};
