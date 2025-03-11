const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "new123",
    database: "travelplanner"
})

client.connect()
     .then(()=> console.log("Connected to PostgreSQL"))
     .catch(err => console.error("Database connection error", err));

module.exports = client;     

