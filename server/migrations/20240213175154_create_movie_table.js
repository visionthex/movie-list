/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id').primary();
    table.string('title', 255);
    table.string('director', 255);
    table.integer('year');
    table.boolean('oscar');
    table.text('review');
    table.float('rating');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movies');
};
