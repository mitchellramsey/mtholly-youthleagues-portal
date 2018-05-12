// Dependencies
const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../client/src/Shared/Validations/signup");
// Middleware
const middleware = require("../client/src/Shared/Middleware/authenticateMiddleware");
//Kid Model
const { kids } = require("../models");

//Register Child POST
router.post("/", (req,res) => {
    console.log(req.body);
    
});

module.exports = router;