require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { router } = require('./routes/api');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;
const host = process.env.HOST || 'http://localhost';

mongoose.connect(`mongodb+srv://konstantin_konovalov:${process.env.DB_PASS}@mongodbcluster-vasux.mongodb.net/test?retryWrites=true`, {
    useNewUrlParser: true,
    dbName: process.env.NODE_ENV !== 'test' ? 'TodosDB' : 'TestDB'
}).then(() => console.log('Database connected successfully')).catch(err => console.log('Database connection error: ', err));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());

app.use('/api', router);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port, host, () => {
    console.log(`Server started and running on ${host}:${port}`);
});
