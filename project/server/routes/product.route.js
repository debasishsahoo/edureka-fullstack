const Router=require('express').Router()
const productController=require('../controllers/product.controller')
const authGard=require('../middlewares/auth.middleware')

Router.post('/add',authGard,productController.addProduct);
Router.get('/view',authGard,productController.viewProduct);
Router.get('/view/:id',authGard,productController.viewProductById);
Router.put('/update/:id',authGard,productController.updateProduct);
Router.delete('/delete/:id',authGard,productController.deleteProduct);

module.exports=Router;