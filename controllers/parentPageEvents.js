// Dependencies
const express = require("express");
const authenticateMiddleware = require("../client/src/Shared/Middleware/authenticateMiddleware");

const router = express.Router();

// Parent page route
router.post("/", authenticateMiddleware, (req, res) => {
    res.status(201).json({ success: true });
})

module.exports = router;