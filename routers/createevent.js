const express=require("express");
const router=express.Router();
const {create, rep} = require("../controllers/createevent")

router.route("/create").post(create);
router.route("/myaccount").get(rep)
router.route("/events").get(rep);


module.exports = router;