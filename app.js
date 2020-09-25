const fs = require('fs');
const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 8182;

app.set("view engine", "ejs");

app.get('/', (req,res) => {
    fs.readFile('./data/db.json',(err,result) => {
        var movies = JSON.parse(result);
        //console.log(movies);
        if(err){
            throw err;
        }else {
            res.render('sample' , { movies : movies});            
        }
    })
})


app.listen(port,(err) => {
    console.log('server is running on port '+port);
})