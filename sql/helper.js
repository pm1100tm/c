const executeQuery = (conn, query) => {
  return conn.execute(query).then(([rows]) => rows);
};

const dropTable = (conn, tableName) => {
  const query = `
    DROP TABLE IF EXISTS \`${tableName}\`
  `;

  return executeQuery(conn, query);
};

module.exports = {
  executeQuery,
  dropTable,
};
