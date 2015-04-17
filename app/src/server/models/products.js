var mongoose = require('mongoose');

var schema = {
	name: String,
	price: Number,
	category: String,
	image: String,
	description: String,
	author: String	
}

var Products = mongoose.model("Products", schema);

module.exports = Products;