// Dependencies
const express = require("express");

// Authentication Middleware
const authenticateMiddleware = require("../client/src/Shared/Middleware/authenticateMiddleware");

// Express Router
const router = express.Router();

// ----------------------------------------------------------------------------------- //
// Parent page route
router.post("/", authenticateMiddleware, (req, res) => {
    res.status(201).json({ success: true });
})

// ----------------------------------------------------------------------------------- //
module.exports = router;