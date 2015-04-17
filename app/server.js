
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('products', ['products']);
var dbc = mongojs('products', ['categories']);
var dbo = mongojs('products', ['orders']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/products', function (req, res) {
    console.log('I received a GET request');

    db.products.find(function (err, docs) {
        res.json(docs);
    });
});


app.post('/products', function (req, res) {
    console.log(req.body);
    db.products.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});



app.delete('/products/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.products.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/products/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.products.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/products/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.products.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, price: req.body.price, category: req.body.category, info: req.body.info, image: req.body.image }},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});


/*************************************************************************************************************************/

// Categories
app.get('/categories', function (req, res) {
    dbc.categories.find(function (err, docs) {
        res.json(docs);
    });
});


/*************************************************************************************************************************/

// Orders

app.post('/checkout', function (req, res) {
    console.log(req.body);
    dbo.orders.insert(req.body, function(err, doc) {
        res.json(doc);
    });

});
/*************************************************************************************************************************/

app.listen(2000);
console.log("Server running on port 2000");