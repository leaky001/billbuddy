const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const billRoutes = require('./routes/billRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: 'http://localhost:5173',
 credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {res.send('Welcome to BillBuddy');});

app.use('/api/auth', authRoutes);
app.use('/api/bills', billRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
