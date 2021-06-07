require("dotenv").config();
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

module.exports = router;

sendData = (req, res) => {
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
    //   host: 'smtp.gmail.com',
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: GMAIL_USER,
    //     pass: GMAIL_PASS
    //   }
  });

  // Specify what the email will look like
  const mailOpts = {
    from: "Your sender info here", // This is ignored by mail agent
    to: GMAIL_USER,
    subject: "New message from Plancy app contact form",
    text: `user contact email: ${req.body.email}`,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log(req.body.email);
      response.sendStatus(200);
    }
  });
};

router.post("/", sendData);
