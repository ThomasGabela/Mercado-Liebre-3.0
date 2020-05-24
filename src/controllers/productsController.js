const fs = require('fs');
const path = require('path');

const modelproduct = require(path.join(__dirname, "../models/product.js"))
let products = modelproduct.findAll();

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render("products", {products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {		
		let product = products.find((x) => x.id == req.params.productId)
		
		res.render("detail", {product})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		console.log(req.body)
		return res.redirect('/products')
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;