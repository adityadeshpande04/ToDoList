
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var items=["Study"];

app.use(bodyParser.urlencoded({extended:true}));
var ejs= require("ejs");

app.set("view engine","ejs");
app.use(express.static("public"));
app.get('/', function(req,res)
{
    var today= new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month: "long"
    }
    var day=today.toLocaleDateString("en-US",options);

  res.render('list',{kindOfDay:day, newItems:items});
 res.send();
});

app.post("/", function(req,res)
{
var item=req.body.newItem;

items.push(item);
res.redirect("/");
});

app.listen(3000, function()
{
    console.log("Server active.");
});
