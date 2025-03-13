const express = require("express");
const cors = require("cors");
const destinationRoutes = require("./routes/destinationRoutes");
const contactRoutes = require("./routes/contactRoutes");
const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Routes
app.use("/api/destinations", destinationRoutes);
app.use("/api/contact", contactRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
