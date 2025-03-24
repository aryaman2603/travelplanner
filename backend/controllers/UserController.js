const pool = require("../config/db");
const bcrypt = require("bcrypt");

const signupUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            `INSERT INTO users (name, email, password) 
            VALUES ($1, $2, $3) RETURNING *`,
            [name, email, hashedPassword]
        );

        res.status(201).json({ message: "Signup successful!", user: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: "Server error: " + err.message });
    }
};

module.exports = { signupUser };
