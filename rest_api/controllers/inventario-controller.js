const Inventario = require("../models/inventario");

function createProducto(req, res){
    let producto = new Inventario({
        id: req.body.id,
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
        provider: req.body.provider,
        fechaUcltimoRegistro: req.body.fechaUltimoRegistro
    });

    producto.save((err, result) => {
        if(err){
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }

        if(!result){
            return res.status(400).json({
                error: true,
                message: "Client error",
                code: 20
            });
        }

        return res.status(200).json({
            error: false,
            message:"Success",
            data: result,
            code: 10
        });

    });

}; // Fin de la función crear tarea en la bd

function updateInventario(req, res) {
    const producto_id = req.params.id
    const data = req.body;

    Inventario.findByIdAndUpdate(producto_id, data, {new: true}, (err, result) => {
        if(err){
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }

        if(!result){
            return res.status(400).json({
                error: true,
                message: "ID Not Found",
                code: 20
            });
        }

        return res.status(200).json({
            error: false,
            message:"Success",
            data: result,
            code:10
        });

    });

}; // Fin de función update

function getAllProducts(req, res){

    Inventario.find().exec( (err, tareas) => {
        if(err){
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }

        return res.status(200).json({
            error: false,
            message:"Success",
            data: tareas,
            code:10
        });
    });

}

function deleteProducto(req, res) {

    const producto_id = req.params.id;

    Inventario.findOneAndDelete({id: producto_id}, (err, result) => {
        if(err){
            return res.status(500).json({
                error: true,
                message: "Server error",
                code: 0
            });
        }

        if(!result){
            return res.status(400).json({
                error: true,
                message: "ID Not Found",
                code: 20
            });
        }

        return res.status(200).json({
            error: false,
            message:"Success",
            data: result,
            code:10
        });

    });

}

module.exports = {
    createProducto,
    updateInventario,
    getAllProducts,
    deleteProducto
};