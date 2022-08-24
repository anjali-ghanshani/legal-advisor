const { Pool } = require("pg");

const connectionString =
  "postgres://jfauvvzlbvcdli:d4e76005433f3932d942a184c98e9beb495a1e2820cc3edf3c4d491fbba5d222@ec2-44-205-64-253.compute-1.amazonaws.com:5432/ddjhr83slpu2kk";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
