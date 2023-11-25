const express = require('express');
const userRouter = require('./routes/userRouter');
const categoryRouter = require('./routes/categoryRouter');
const productRouter = require('./routes/productRouter');
const server = express();
const PORT = 1339;


//middleware (check the request and redirect the request)
//im middlewares we use "use" to redirect the request
server.use("/api/v1/users", userRouter)
server.use("/api/v1/products", productRouter)
server.use("/api/v1/categories",categoryRouter)



server.get('/api/v1', (req, res) => {
  res.send('Hello World');
});



server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
