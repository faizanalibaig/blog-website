require('dotenv').config();
const express= require('express');
const expressLayout= require('express-ejs-layouts')
const connectDB= require('./server/config/dbConfig')

const app= express();
const PORT= process.env.PORT || 5000;

connectDB();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));
app.use('/about', require('./server/routes/about'))
app.use('/contact', require('./server/routes/contact'))



app.listen(PORT, ()=>{
    console.log(`Port running on ${PORT}`);
})