exports.seed =  function(knex) {
  // Deletes ALL existing entrie
  return knex("recipes").insert([
    { recipe_name: "Breakfast Pizza" },
    { recipe_name: "rowValue2" },
    { recipe_name: "rowValue3" }
  ]);
};
