const express = require("express");
const router = express.Router();
const ContactForm = require("../controllers/contact")


router.route('/contact').post(ContactForm);

module.exports = router;