const express = require("express");
const routes = express.Router();

var doctype = require('../modules/module.doctype');

routes.route('/:doctype').post((req, res) => {
    doctype(req.params.doctype, req.body, res);
});

module.exports = routes