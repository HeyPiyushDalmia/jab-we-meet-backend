const express=require("express");
const router=express.Router();
const Createevent = require("../controllers/createevent")

router.route("/createevent").post(Createevent.create);
// router.route("/myaccount").get(rep)

module.exports = router;