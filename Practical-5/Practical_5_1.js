const express = require('express');

const app = express();

app.use(express.json());

// Products object/list
let products = [
    {
        product_id: 1,
        product_name: 'T-Shirt',
        product_size: 'L',
        product_brand: 'Nike',
        product_color: 'Black',
    },
    {
        product_id: 2,
        product_name: 'Jeans',
        product_size: 'M',
        product_brand: 'Levis',
        product_color: 'Blue',
    },
];

// --------------------------------------------------
// GET - Display all products
// --------------------------------------------------

app.get('/products', (req, res) => {
    res.json(products);
});

// --------------------------------------------------
// POST - Add a new product
// --------------------------------------------------

app.post('/products', (req, res) => {
    const newProduct = {
        product_id: products.length + 1,
        product_name: req.body.product_name,
        product_size: req.body.product_size,
        product_brand: req.body.product_brand,
        product_color: req.body.product_color,
    };

    products.push(newProduct);

    res.status(201).json({
        message: 'Product added successfully',
        product: newProduct,
    });
});

// --------------------------------------------------
// PUT - Update a product
// --------------------------------------------------

app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find((p) => p.product_id === id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found',
        });
    }

    product.product_name = req.body.product_name;
    product.product_size = req.body.product_size;
    product.product_brand = req.body.product_brand;
    product.product_color = req.body.product_color;

    res.json({
        message: 'Product updated successfully',
        product: product,
    });
});

// --------------------------------------------------
// DELETE - Delete a product
// --------------------------------------------------

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = products.findIndex((p) => p.product_id === id);

    if (index === -1) {
        return res.status(404).json({
            message: 'Product not found',
        });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: 'Product deleted successfully',
        product: deletedProduct[0],
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
