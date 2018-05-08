// Requiring dependencies
const express = require("express");
// Express router
const router = new express.Router();

// Landing page
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
module.exports = router;

