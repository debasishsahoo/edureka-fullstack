const Router=require('express').Router()
const productController=require('../controllers/product.controller')

Router.post('/add',productController.addProduct);
Router.get('/view',productController.viewProduct);
Router.get('/view/:id',productController.viewProductById);
Router.put('/update/:id',productController.updateProduct);
Router.delete('/delete/:id',productController.deleteProduct);

module.exports=Router;