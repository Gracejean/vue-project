const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/DB");
const routes = require("./router");

mongoose.Promise = global.Promise;

console.log("connecting....");
mongoose.useFindAndModify = true
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true }, (err, data) => {
    if (err) {
        console.log("error : " + err);
    } else {
        console.log("database is connected!");
    }
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '110mb' }));
app.use(bodyParser.json());

app.use("/admin", routes);

app.listen(PORT, function() {
    console.log("Server is running on Port:", PORT);
});