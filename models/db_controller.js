const mysql = require('mysql')
const express = require('express')
const router = express.Router();
var bodyParser = require('body-parser')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hospital-management'
});

con.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log("Connected to database")
    }
})