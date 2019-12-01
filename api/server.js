const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/DB");
const adminRoutes = require("./router/admin.router");
const userRoutes = require("./router/user.router");
mongoose.Promise = global.Promise;
console.log("connecting....");
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, (err, data) => {
    if (err) {
        console.log("error : " + err);
    } else {
        console.log("database is connected!");
    }
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '110mb' }));
app.use(bodyParser.json());

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
});
