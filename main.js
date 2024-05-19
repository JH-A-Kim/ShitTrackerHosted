const express = require('express');
const bodyParser = require('body-parser');
const poopRouter = require('./api/poop');
const userRouter = require('./api/user')
const { connect } = require('mongoose');
const cors = require("cors");
const app = express();

app.set('view engine', 'ejs');
app.use(cors())
// Connect to MongoDB
connect('mongodb+srv://mentorme6969:mentorMe6969@mentorme.dewbckv.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/poop', poopRouter);
app.use('/api/users', userRouter)

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
