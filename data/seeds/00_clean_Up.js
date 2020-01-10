exports.seed = async function(knex){
    await knex('instructions').truncate();
    await knex('recipe_ingredients').truncate();
    await knex('recipes').truncate();
    await knex('ingredients').truncate();
}