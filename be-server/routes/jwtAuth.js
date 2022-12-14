const router = require("express").Router();
const pool = require("../db"); //registering
const bcrypt = require("bcrypt");

const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

router.post("/register", validInfo, async (req, res) => {
  //1. destructure the req.body (name, email, password)
  const { name, email, password } = req.body;

  try {

    //2. check if user exists (if exist throw error)
    const user = await pool.query(
      " SELECT * FROM USERS WHERE USER_email = $1",
      [email]
    );

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists"); // 401 : Unauthenticated
    }

    //3. Bcrypt the user password
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    //4.  enter the new user in our database
    const newUser = await pool.query(
      "INSERT INTO users (user_name,user_email,user_password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );

    //5. generate our JWT token
    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });

  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// login route
router.post("/login", validInfo, async (req, res) => {
  try {

    //1. destructure the req.body
    const { email, password } = req.body;

    //2.  if user does not exist (throw error if not)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).send("Password or email is incorrect");
    }

    //3. check if incoming passwrd as the database password
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );


    if (!validPassword) {
      return res.status(401).json("Password or email is incorrect");
    }

    //4. give them a jwt token
    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });

  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});


router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
 
module.exports = router;
