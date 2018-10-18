var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT)
});

var reservations = []; 
var waitlist = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/api/tables', function(req, res){
    return res.json(reservations)
})

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.post('/api/tables', function(req, res){
    var newPerson = req.body;
    newPerson.routeName = newPerson.name.replace(/\s+/g, "").toLowerCase();
    console.log(newPerson);
    reservations.push(newPerson);
    res.json(newPerson);

})