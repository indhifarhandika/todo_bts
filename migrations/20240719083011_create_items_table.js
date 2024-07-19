// migrations/20210719000002_create_items_table.js
exports.up = function(knex) {
    return knex.schema.createTable('items', function(table) {
      table.increments('id').primary();
      table.integer('checklist_id').unsigned().notNullable().references('id').inTable('checklists');
      table.string('description').notNullable();
      table.boolean('completed').defaultTo(false);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('items');
  };