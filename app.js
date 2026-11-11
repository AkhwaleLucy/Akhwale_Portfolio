
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve website files
app.use(express.static(path.join(__dirname, "public")));

// Test backend
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Portfolio server is running"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Portfolio running on port ${PORT}`);
});
