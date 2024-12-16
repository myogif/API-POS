var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const categoryRoutes = require('./routes/categories.routes');
const productRoutes = require('./routes/products.routes');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(categoryRoutes);
app.use(productRoutes);

module.exports = app;
