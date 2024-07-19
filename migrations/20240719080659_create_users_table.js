// migrations/20210719000000_create_users_table.js
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('username').notNullable().unique();
        table.string('email').notNullable().unique();;
        table.string('password').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
