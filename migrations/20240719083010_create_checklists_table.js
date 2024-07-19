// migrations/20210719000001_create_checklists_table.js
exports.up = function(knex) {
    return knex.schema.createTable('checklists', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
      table.string('title').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('checklists');
  };