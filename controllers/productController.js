const productModel = require('../models/productModel');

const ProdcutController = {
    get: async(req , res)=>{
        try {
            const result = await productModel.find();
            res.status(200).json({
                isSuccessfull: true,
                data: result
            }) 
        } catch (error) {
            console.log(error)
            res.status(400).json({
                isSuccessfull: false,
                error: error.message
            })
        }
    } ,

    getById: async(req , res)=>{
        try {
            const id = req.params.id;
            const result = await productModel.findById(id);
            res.status(200).json({
                isSuccessfull: true,
                data: result
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                isSuccessfull: false,
                error: error.message
            })
        }
    } ,

    post: async(req , res)=>{
        try {
            const body = req.body;
            const obj = {
                name: body.name,
                price: body.price,
                description: body.description
            }
            const modelObj = new productModel(obj);

            modelObj.save().
            then(()=>{
                res.status(201).json({
                    isSuccessfull: true,
                    message: "Product Added Successfully"
                })
            }).
            catch((error)=>{
                throw error;
            })
        } catch (error) {
            res.status(400).json({
                isSuccessfull: false,
                error: error.message
              })
        }
    } ,

    put: async(req , res)=>{
        try {
            const id = req.params.id;
            const body = req.body;

            const result = await productModel.findByIdAndUpdate(id , body, {new: true});

            res.status(200).json({
                isSuccessfull: true,
                message: "Record Updated Successfully",
                data: result,
              });

        } catch (error) {
            console.log(error);
            res.status(400).json({
              isSuccessfull: false,
              error: error.message,
            });
        }
    } ,

    delete: async(req ,res)=>{
        try {
            const id = req.params.id;
            const result = await productModel.findByIdAndDelete(id);

            res.status(200).json({
                isSuccessfull: true,
                message: "Product deleted Successfully",
                data: result,
              });
        } catch (error) {
            console.log(error);
            res.status(400).json({
              isSuccessfull: false,
              error: error.message,
            });
        }
    }
}

module.exports = ProdcutController;
