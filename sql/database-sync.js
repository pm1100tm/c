const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const { dropTable, executeQuery } = require('./helper');

const readSQL = (directory, file) => {
  return fs
    .readFileSync(path.join((__dirname, `${directory}/${file}`)))
    .toString();
};

const dropAllTables = async (conn) =>
  fs
    .readdirSync(path.join(__dirname, 'DDL'))
    .map((file) => file.split('.'))
    .map(([tableName]) => dropTable(conn, tableName));

const syncSchema = async (conn) =>
  fs
    .readdirSync(path.join(__dirname, 'DDL'))
    .map((file) => readSQL('DDL', file))
    .map((query) => executeQuery(conn, query));

const seedData = async (conn) =>
  fs
    .readdirSync(path.join(__dirname, 'SEED'))
    .map((file) => readSQL('SEED', file))
    .map((query) => executeQuery(conn, query));

const main = async () => {
  let dbConn;

  try {
    const connectionOption = {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    };

    console.log(connectionOption);

    dbConn = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    });

    await dropAllTables(dbConn);
    console.log('DATABASE TABLES ALL DROPPED');

    await syncSchema(dbConn);
    console.log('DATABASE SCHEMAS SYNC DONE');

    await seedData(dbConn);
    console.log('DATABASE SEEDS SYNC DONE');
  } catch (e) {
    console.error(e);
  } finally {
    await dbConn.end();
  }
};

main();
