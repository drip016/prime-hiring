const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const devRouter = require('./routes/developers');

const app = express();
const port = 8080;
dotenv.config();

app.use(express.json());

mongoose
    .connect(
        'mongodb+srv://drip016:prime_hiring_assignment_123@primehiringcluster.hvnws.mongodb.net/primeHiringDB?retryWrites=true&w=majority'
    )
    .then(console.log('Connected to PrimeHiring DB.'))
    .catch((err) => console.log(err));

app.use('/api/v1/developers', devRouter);

app.listen(port, () =>
    console.log(`Prime hiring app listening on port ${port}!`)
);
