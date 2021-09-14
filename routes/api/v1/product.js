const express=require('express');
const router=express.Router();
const { body, param, checkSchema } = require('express-validator');
const productController=require('../../../controllers/api/v1/product-controller');

router.post('/create',[
    body("name").not().isEmpty().withMessage("Name is Empty"),
    body("quantity").isInt({ gt: 0 })
    .withMessage("Quantity is less than 0"),
],
  productController.createProduct
);

router.get('/all',productController.getProduct);


router.delete('/delete/:id',[ 
    param("id").isMongoId().withMessage("Invalid ID"),
 ]

,productController.deleteProduct);

router.patch("/update/:id",
    checkSchema({
        id:{
            in:['params'],
            errorMessage:'Wrong ID',
            isMongoId:true,
        },
        price:{
            in:["body"],
            isFloat:{ options:{gt:0}},
            errorMessage:'cost should be greater than zero',
            optional:true,
        },
        description:{
            in:['body'],
            isEmpty:{
                options:{min : 5}
            },
            errorMessage:'Description shouldnot be empty',
        },
        quantity:{
            in:['body'],
            isInt:{
                options:{min :0},
            },
            errorMessage:'Quantity cannot be negative',
            optional:true,
        },
    }),
    productController.updateProduct);
    module.exports=router;