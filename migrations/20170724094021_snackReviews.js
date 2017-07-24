exports.up = function(knex, Promise) {
  return knex.schema.createTable('snack_reviews', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.integer('users_id').references('users.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('snack_reviews');
};
