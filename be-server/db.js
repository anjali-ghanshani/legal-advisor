const {Pool} = require('pg');

const connectionString =
  "postgres://smjkbcyiwfipql:50fa36c0a350486bbe38476b252396096167ebe1f296c0148dbb73415d806d3f@ec2-44-193-178-122.compute-1.amazonaws.com:5432/d4qh07l9qr56g9";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, //  Not Authenticating
  },
});

// Demo to test connection

// pool.query(`SELECT * FROM appointment;`, (err, res) => {
//     if (err) {
//         console.log("Error - Failed to Load all appointment");
//         console.log(err);
//     }
//     else{
//         console.log(res.rows);
//     }
// });

// pool.end();

module.exports = pool;
