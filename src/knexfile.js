require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const { CLIENT_DB, NAME_DB, USER_DB, PASS_DB } = process.env
module.exports = {
  
    client: CLIENT_DB,
    connection: {
      database: NAME_DB ,
      user:     USER_DB,
      password: PASS_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
};
