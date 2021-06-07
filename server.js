require("rootpath")();
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");
const nodemailer = require("nodemailer");
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

app.use(cors());
app.use(express.json()); //Used to parse JSON bodies. Body parser is deprecated
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// use JWT auth to secure the api
app.use(jwt());

// global error handler
app.use(errorHandler);

// api routes
app.use("/users", require("./users/users.controller"));

app.post("/contact", (req, res) => {
  const smtpTrans = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
  });

  const mailOpts = {
    from: "Your sender info here", // This is ignored by mail agent
    to: GMAIL_USER,
    subject: "New message from Plancy app contact form",
    text: `user contact email: ${req.body.email}`,
  };

  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      res.json({ status: 200, data: req.body.email });
    }
  });
});

const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
