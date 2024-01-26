const express = require('express');
const connectDB = require('./DbConnection');
const loginRouter = require('./routes/login.route');
const questionRouter = require('./routes/question.route');
const profileRouter = require('./routes/profile.route');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors())

app.use('/user',loginRouter);
app.use('/user',questionRouter);
app.use('/user',profileRouter);

connectDB();

app.listen(port, () => {
    console.log('Server is running on port', port);
});
