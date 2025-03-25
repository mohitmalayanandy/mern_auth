require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require("cors");
const connectDB = require('./config/mongodb');
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()
const port = 4000
connectDB();



app.use(express.json());
app.use(cors({ credentials: true }));
app.use(cookieParser());

// API endpoints
app.get('/', (req, res) => {
    res.send('API is Working Super Fine')
})
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(port, () => {
    console.log(`Server Started on PORT: ${port}`)
})