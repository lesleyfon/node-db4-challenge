exports.seed = async function(knex){
    await knex('recipes').truncate();
    await knex('ingredients').truncate();
}