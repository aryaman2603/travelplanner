const pool = require("../config/db");

// Get all destinations
const getAllDestinations = async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT id, city, country, brief_description, description, best_months, image_url, image_url2 FROM destinations"
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single destination by ID
const getDestinationById = async (req, res) => {
    try {
        const { city } = req.params;
        
        /*if (isNaN(city)) {
            return res.status(400).json({ error: "Invalid destination ID. It must be a number." });
        }*/

        const result = await pool.query(
            "SELECT city, country, brief_description, description, best_months, image_url, image_url2, hotel1, hotel2, hotel3, hotel4, thing_to_do1, thing_to_do2, thing_to_do3, thing_to_do4, thing_to_do5 FROM destinations WHERE city = $1", 
            [city]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Destination not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Server error: " + err.message });
    }
};


// Add a new destination
const addDestination = async (req, res) => {
    try {
        const { city, country, brief_description, description, best_months, image_url, image_url2, hotel1, hotel2, hotel3, hotel4, thing_to_do1, thing_to_do2, thing_to_do3, thing_to_do4, thing_to_do5 } = req.body;

        if (!city || !country || !brief_description || !description || !best_months || !image_url || !image_url2 || !hotel1 || !hotel2 || !hotel3 || !hotel4 || !thing_to_do1 || !thing_to_do2 || !thing_to_do3 || !thing_to_do4 || !thing_to_do5) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const result = await pool.query(
            `INSERT INTO destinations (city, country, brief_description, description, best_months, image_url, image_url2, hotel1, hotel2, hotel3, hotel4, thing_to_do1, thing_to_do2, thing_to_do3, thing_to_do4, thing_to_do5) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
            [city, country, brief_description, description, best_months, image_url, image_url2, hotel1, hotel2, hotel3, hotel4, thing_to_do1, thing_to_do2, thing_to_do3, thing_to_do4, thing_to_do5]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Server error: " + err.message });
    }
};

module.exports = { getAllDestinations, getDestinationById, addDestination };


