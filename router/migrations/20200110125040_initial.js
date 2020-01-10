
exports.up = async function(knex) {
    await knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128);
     })
    await knex.schema.createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name');
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExist('recipes');
    await knex.schema.dropTableIfExist('ingredients');

};
