exports.seed = function(knex){
    return knex('ingredients').insert([
        {
          ingredient_name: 'dough'  
        },
        {
            ingredient_name: 'eggs'  
        },
        {
            ingredient_name: 'bacon'  
        },
        {
            ingredient_name: 'mozzarella cheese'  
        },
    ])
}