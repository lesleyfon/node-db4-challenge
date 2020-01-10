exports.up = async function(knex) {
    await knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128);
     })
    await knex.schema.createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name');
    })
    await knex.schema.createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');
        tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients');
        tbl.string('quantity');
        tbl.primary(['recipe_id', 'ingredient_id']);
})
    
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipe_ingredients');
    await knex.schema.dropTableIfExists('recipes');
    await knex.schema.dropTableIfExists('ingredients');

};