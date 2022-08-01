// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  
    client: process.env.CLIENT_DB,
    connection: {
      database: process.env.NAME_DB ,
      user:     process.env.USER_DB,
      password: process.env.PASS_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  

};
