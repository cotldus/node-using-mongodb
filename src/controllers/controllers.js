import mongoose from 'mongoose';
import ProductSchema from '../models';

const Product = mongoose.model('Product', ProductSchema);

function addnewProduct() {
    const newProduct = new Product(req.body)
    newProduct.save(function (err, Product) {
        if (err)  {
            res.send(err);
        }
        res.json(Product)
        // saved!
      });
}