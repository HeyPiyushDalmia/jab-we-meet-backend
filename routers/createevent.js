const express=require("express");
const router=express.Router();
const {
    create,rep
}=require("../controllers/createevent")

router.route("/createevent").post(create);
router.route("/myaccount").get(rep)

module.exports = router;