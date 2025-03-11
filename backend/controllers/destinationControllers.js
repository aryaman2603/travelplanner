const client = require("../config/db");

// Get all destinations
const getAllDestinations = async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM destinations");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single destination by ID
const getDestinationById = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Check if ID is a valid number
        if (isNaN(id)) {
            return res.status(400).json({ error: "Invalid destination ID. It must be a number." });
        }

        const result = await client.query("SELECT * FROM destinations WHERE id = $1", [id]);

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
        const { city, country, description, best_months, image_url } = req.body;

        // Check for missing fields
        if (!city || !country || !description || !best_months || !image_url) {
            return res.status(400).json({ error: "All fields (city, country, description, best_months, image_url) are required." });
        }

        const result = await client.query(
            "INSERT INTO destinations (city, country, description, best_months, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [city, country, description, best_months, image_url]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Server error: " + err.message });
    }
};


module.exports = { getAllDestinations, getDestinationById, addDestination };
