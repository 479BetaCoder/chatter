const utilConstants = require("./api/utils/Constants");
const express = require("express"),
  app = express(),
  port = process.env.PORT || utilConstants.PORT,
  mongoose = require("mongoose"), //created model loading here
  bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require('./api/utils/jwt');
const errorHandler = require("./api/utils/error_handler");

// Mongo Atlas
const uri = utilConstants.MONGODB_URL;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  promiseLibrary: global.Promise,
})
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err))

// enable cors
app.use(cors());
app.use(jwt());
app.use(errorHandler);
//Adding body parser for handling request and response objects.
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);


//Initialize app
let initApp = require("./api/app");
initApp(app);

app.listen(port);
console.log("ChatterApp RESTful API server started on: " + port);
