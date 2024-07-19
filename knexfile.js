// knexfile.js
module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            port: '8889',
            user: 'indhi',
            password: 'indhi',
            database: 'bts_todo'
        },
      migrations: {
        directory: './migrations'
      }
    }
  };
  