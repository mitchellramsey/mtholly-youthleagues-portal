// Dependencies
const jwt = require("jsonwebtoken");
const config = require("../Config/config");
const { Users } = require("../../../../models");

// Middleware Function
module.exports = function(req, res, next) {
    // Authorization Header
    const authorizationHeader = req.headers["authorization"];
    // Token by default is null
    let token;
    // If token is passed to us..
    if(authorizationHeader) {
        // Split token by space and turn it into an array to propery check it
        token = authorizationHeader.split(" ")[1];
    }
    // If we have token
    if(token) {
        // Verify it
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            // if error
            if(err) {
                res.status(401).json({ error: "Failed to authenticate "});
            } else {
                // Associate the user with the decoded token-id
                Users.findOne({
                    where: {
                        id: decoded.id
                    },
                }).then(user => {
                    // If user isn't found
                    if(!user) {
                        // Throw error
                        res.status(404).json({
                            error: "User does not exists"
                        })
                    } else {
                        // Else, assign the user
                        req.currentUser = user;
                        next();
                    }
                })
            }
        })
    } else {
        // We do not have it
        res.status(403).json({
            error: "No token provided"
        })
    }
}