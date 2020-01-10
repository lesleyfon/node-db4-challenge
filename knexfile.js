// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/recipe.db3"
    },
    migration: {
      directory: "./data/migrations"
    },
    seed: {
      directory: "./data/seeds"
    }
  }
};
