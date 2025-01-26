require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');
const productRouter = require('./routes/productRouter')

const PORT = 6000;

// Middleware
app.use(express.json());

app.use('/auth',authRouter);

app.use('/product',productRouter);


// Start the server
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running and db connected`);
    });
}).catch(err => {
    console.log(err);
});

