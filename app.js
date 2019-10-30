var express             = require('express'),
    mongoose            = require('mongoose'),
    methodOverride      = require('method-override'),
    expressSanitizer    = require('express-sanitizer'),
    bodyParser          = require('body-parser'),
    app                 = express();

mongoose.connect("mongodb+srv://testuser:testpassword@devcluster-9bzzo.mongodb.net/test?retryWrites=true&w=majority",
{dbName: 'cipherdb', useNewUrlParser: true, useUnifiedTopology: true});


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer()); //after body-parser

