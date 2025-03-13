const client = require("../config/db");

// Store contact form submission
const sendMessage = async (req, res) => {
    try {
        console.log("Received request body:", req.body);
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const result = await client.query(
            `INSERT INTO contact_messages (name, email, subject, message) 
            VALUES ($1, $2, $3, $4) RETURNING *`,
            [name, email, subject, message]
        );
        console.log("Database insert result:", result.rows[0]);

        res.status(201).json({ message: "Message sent successfully!", data: result.rows[0] });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Server error: " + err.message });
    }
};

// Get all messages (for admin panel or review)
const getMessages = async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM contact_messages ORDER BY created_at DESC");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Server error: " + err.message });
    }
};

module.exports = { sendMessage, getMessages };


