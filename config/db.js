const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: '8889',
        user: 'indhi',
        password: 'indhi',
        database: 'bts_todo'
    }
});

module.exports = db;
