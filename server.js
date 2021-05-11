require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");

app.use(cors());
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// use JWT auth to secure the api
app.use(jwt());

// global error handler
app.use(errorHandler);

// api routes
app.use("/users", require("./users/users.controller"));

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
