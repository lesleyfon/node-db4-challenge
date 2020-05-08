exports.seed = async function(knex){
    await knex('recipes').truncates();
    await knex('ingredients').truncates();
}