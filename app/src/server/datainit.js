var mongoose = require('mongoose'),
	dbname = "angular_mongodb";

var Product = mongoose.model("Product", {
		name: String,
		price: Number,
		category: String,
		image: String,
		description: String,
		author: String
});

mongoose.connect("mongodb://localhost/" + dbname);


var db = mongoose.connection;
db.on("error", console.error);
db.once("open", deleteProducts);

function deleteProducts(){
	Product.remove({}, function(err){
		if(err) console.log(err);
		insertProducts()
	});
}

function insertProducts(){
	var products = new Product({
		name: "A Game of Thrones",
		price: 150,
		category: "Fantasy",
		image: "img/game.jpg",
		description: "HBO's hit series A GAME OF THRONES is based on George R. R. Martin's internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A GAME OF THRONES is the first volume in the series. Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun. It will stretch from the south, where heat breeds plot, lusts and intrigues; to the vast and savage eastern lands; all the way to the frozen north, where an 800-foot wall of ice protects the kingdom from the dark forces that lie beyond. Kings and queens, knights and renegades, liars, lords and honest men...all will play the Game of Thrones. Winter is coming...",
		author: "George R.R.Martin"
	});
	products.save(function(err){
		if(err) console.log(err);
	});
	   var products = new Product({
		name: "Pride and Prejudice",
		price: 50,
		category: "Classics",
		image: "img/Pride-and-Prejudice.jpg",
	    description:"Elizabeth Bennet, the second eldest of five daughters whom Mrs. Bennet is anxious to dispose of in marriage, is the most intelligent and delightful of all Jane Austen's heroines. Her vitality, vivacity and wit, her hasty dismissal of superior Mr. Darcy-- the most disagreeable man in the world'--how he improves his manners and she changes her mind, are the central ingredients of Pride and Prejudice. It is Jane Austen's best-loved novel and through the depth and sparkle of its comedy we are encouraged to consider what balance of energy and order, playfulness and regulation constitutes real strength of character.",
		author: "Jane Austen"	
	});
	   products.save(function(err){
		if(err) console.log(err);
	});
	var products = new Product({
		name: "The Name of the Wind",
		price: 200,
		category: "Fantasy",
		image: "img/name-of-the-wind.jpg",
	    description:"The riveting first-person narrative of a young man who grows to be the most notorious magician his world has ever seen. From his childhood in a troupe of traveling players, to years spent as a near-feral orphan in a crime- ridden city, to his daringly brazen yet successful bid to enter a legendary school of magic, The Name of the Wind is a masterpiece that transports readers into the body and mind of a wizard. It is a high-action novel written with a poet's hand, a powerful coming-of-age story of a magically gifted young man, told through his eyes: to read this book is to be the hero.",
		author: "Patrick Rothfuss"	
	});
	products.save(function(err){
		if(err) console.log(err);
	});
	var products = new Product({
		name: "1984",
		price: 70,
		category: "Classics",
		image: "img/1984.jpeg",
	    description:"1984 has come and gone, but George Orwell's prophetic, nightmare vision in 1949 of the world we were becoming is timelier than ever. 1984 is still the great modern classic negative Utopia - a startling original and haunting novel that creates an imaginary world that is completely convincing from the first sentence to the last four words. No one can deny this novel's power, its hold on the imagination of whole generations, or the power of its admonitions - a power that seems to grow, not lessen, with the passage of time.",
		author: "George Orwell"	
	});	
	products.save(function(err){
		if(err) console.log(err);
	});
	var products = new Product({
		name: "The Rosie Project",
		price: 100,
		category: "Romance",
		image: "img/rosie.jpg",
	    description:"The Rosie Project by Graeme Simsion is a story about love, life and lobster every Tuesday... Meet Don Tillman. Don is getting married. He just doesn't know who to yet. But he has designed a very detailed questionnaire to help him find the perfect woman. One thing he already knows, though, is that it's not Rosie. Absolutely, completely, definitely not. Sometimes, though, you don't find love: love finds you...",
		author: "Graeme Simsion"	
	});	
	products.save(function(err){
		if(err) console.log(err);
	});
	var products = new Product({
		name: "The Bronze Horseman",
		price: 110,
		category: "Romance",
		image: "http://ecx.images-amazon.com/images/I/51t0jUmcasL.jpg",
	    description:"A magnificent epic of love, war and Russia from the international bestselling author of TULLY and ROAD TO PARADISE Leningrad 1941: the white nights of summer illuminate a city of fallen grandeur whose palaces and avenues speak of a different age, when Leningrad was known as St Petersburg. Two sisters, Tatiana and Dasha, share the same bed, living in one room with their brother and parents. The routine of their hard impoverished life is shattered on 22 June 1941 when Hitler invades Russia. For the Metanov family, for Leningrad and particularly for Tatiana, life will never be the same again. On that fateful day, Tatiana meets a brash young man named Alexander. The family suffers as Hitler's army advances on Leningrad, and the Russian winter closes in. With bombs falling and the city under siege, Tatiana and Alexander are drawn inexorably to each other, but theirs is a love that could tear Tatiana's family apart, and at its heart lies a secret that could mean death to anyone who hears it.",
		author: "Paullina Simons"	
	});	
products.save(function(err){
		if(err) console.log(err);
	});
    var products = new Product({
		name: "Dune",
		price: 80,
		category: "Sci-fi",
		image: "http://media.tumblr.com/tumblr_m589pvTOQZ1qbaom0.jpg",
	    description:"The Duke of Atreides has been manoeuvred by his arch-enemy, Baron Harkonnen, into administering the desert planet of Dune. Although it is almost completely without water, Dune is a planet of fabulous wealth, for it is the only source of a drug prized throughout the Galactic Empire. The Duke and his son, Paul, are expecting treachery, and it duly comes - but from a shockingly unexpected place. Then Paul succeeds his father, and he becomes a catalyst for the native people of Dune, whose knowledge of the ecology of the planet gives them vast power. They have been waiting for a leader like Paul Atreides, a leader who can harness that force ...DUNE: one of the most brilliant science fiction novels ever written, as engrossing and heart-rending today as it was when it was first published half a century ago.",
		author: "Frank Herbert"	
	});	
	products.save(function(err){
		if(err) console.log(err);
	});
	   var products = new Product({
		name: "Is it just me?",
		price: 120,
		category: "Non-fiction",
		image: "http://bookoxygen.com/wp-content/uploads/2012/10/Is-it-just-me-hardback-jacket1.jpg",
	    description:"Well hello to you dear browser. Now I have your attention it would be rude if I didn't tell you a little about my literary feast. So, here is the thing: is it just me or does anyone else find that adulthood offers no refuge from the unexpected horrors, peculiar lack of physical coordination and sometimes unexplained nudity, that accompanied childhood and adolescence? Does everybody struggle with the hazards that accompany, say, sitting elegantly on a bar stool; using chopsticks; pretending to understand the bank crisis; pedicures - surely it's plain wrong for a stranger to fondle your feet? Or is it just me? I am proud to say I have a wealth of awkward experiences - from school days to life as an office temp - and here I offer my 18-year-old self (and I hope you too dear reader) some much needed caution and guidance on how to navigate life's rocky path. Because frankly where is the manual? The much needed manual to life. Well, fret not, for this is my attempt at one and let's call it, because it's fun, a Miran-ual. I thank you.",
		author: "Miranda Hart"	
	});	


	products.save(function(err){
		if(err) console.log(err);
	});
}