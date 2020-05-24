const fs = require('fs');
const path = require('path');

const product = require(path.join(__dirname, "../models/product.js"))
let products = product.findAll();

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		res.render("index", {products})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
