exports.seed = function(knex){
    return knex('recipe_ingredients').insert([
        {
            recipe_id: 1,
            ingredient_id: 1,
            quantity: '3 cups of what ever you want ',
        },
        {
            recipe_id: 1,
            ingredient_id: 2,
            quantity: '4 eggs',
        },
        {
            recipe_id: 1,
            ingredient_id: 3,
            quantity: 'a lot of bacon',
        },
        {
            recipe_id: 1,
            ingredient_id: 4,
            quantity: 'mozzarella cheese',
        },
    ])
}