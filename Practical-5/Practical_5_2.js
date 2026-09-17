const express = require('express');

const app = express();

app.use(express.json());

// Import routers
const orderRouter = require('./routes/order');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const categoryRouter = require('./routes/category');

// Mount routers
app.use('/order', orderRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);

// Start server
app.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
