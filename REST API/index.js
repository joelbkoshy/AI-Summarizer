import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users',userRoutes);

// Get
app.get('/', (req, res) => {
    res.status(200);
    res.send('You are here');
});

// Port Connection
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
