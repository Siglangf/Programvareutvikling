const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const users = ('/api/users');
const product = ('/api/product');
const orders = ('/api/orders');
const reports = ('/api/reports');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use('users', users);
app.use('product', product);
app.use('orders', orders);
app.use('reports', reports);
