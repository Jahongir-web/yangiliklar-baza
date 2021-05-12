const { Pool } = require('pg')

const pool = new Pool({
  connectionString: 'postgres://ccmvpnpl:oRZwWBiHlb1283vbQU9zOoiD0bh4xwrf@john.db.elephantsql.com:5432/ccmvpnpl'
})


const rows = async (query, ...params) => {

  const client = await pool.connect()

  try {
    const { rows } = await client.query(query, params)
    return rows
  } catch (error) {
    console.error(error.message)
  }
  finally {
    client.release()
  }
}

module.exports.rows = rows