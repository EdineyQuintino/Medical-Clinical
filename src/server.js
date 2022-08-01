require('dotenv').config();
const express = require('express');

const routes = require('./routes/routes');
const app = express();

const PORT = process.env.PORT || 3334;
app.use(express.json());
app.use(routes);

app.listen(PORT,()=>{
    console.log('Running on port',PORT);
});
