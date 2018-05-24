const express = require("express");
// Express Router
const router = express.Router();
// Validations
const validation = require("../client/src/Shared/Validations/signup");
// Middleware
const middleware = require("../client/src/Shared/Middleware/authenticateMiddleware");
//Kid Model
const { Users, Kids } = require("../models");


// ----------------------------------------------------------------------------------- //
//Pay for Kid
router.use("/", (req,res) => {
    
   const { paymentInfo, parentId } = req.body;
   
   Kids.findOne({
       where: {
          UserId: parentId,
          paymentId: null
       }
   }).then(kid => {
       Kids.update({
          paymentId: paymentInfo,
          paidFor: true
       }, {
           where: {
               id: kid.id
           }
       }).then(kid => {
           res.json(kid);
       })
   })
})


// ----------------------------------------------------------------------------------- //
module.exports = router;