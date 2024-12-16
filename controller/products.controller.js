const models = require('../models');

// Get Product by ID
exports.getProductByID = async (req, res) => {
  try {
    const id_product = req.params.id;
    const product = await models.products.findOne({
      where: { id: id_product },
    });

    if (product) {
      return res.status(200).json({
        status: 'success',
        message: 'Product found',
        data: product
      });
    } else {
      return res.status(404).json({
        status: 'failed',
        message: 'Product not found'
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

exports.getAllProducts = async (req, res) => {
    try {
      const product = await models.products.findAll();
  
       return res.status(200).json({
            status: 'success',
            message: 'Product found',
            data: product
       });
    } catch (err) {
      return res.status(400).json({
        status: 'failed',
        message: err.message
      });
    }
  };

// Add Product
exports.addProduct = async (req, res) => {
  try {
    const cek_product = await models.products.findOne({
      where: { code: req.body.code }
    });

    if (cek_product) {
      return res.status(400).json({
        status: 'failed',
        message: 'Product already exists'
      });
    }

    const cek_category = await models.categories.findOne({
      where: { id: req.body.category_id }
    });

    if (!cek_category) {
      return res.status(400).json({
        status: 'failed',
        message: 'Category not found, please register a new Category'
      });
    }

    const product = await models.products.create({
      category_id: req.body.category_id,
      name: req.body.name,
      price: req.body.price,
      unit: req.body.unit,
      stocks: req.body.stocks,
      code: req.body.code,
      created_at: new Date(),
      updated_at: new Date()
    });

    return res.status(200).json({
      status: 'success',
      message: 'Product has been registered',
      data: product
    });
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const id_product = req.params.id;

    const cek_product = await models.products.findOne({
      where: { id: id_product }
    });

    if (!cek_product) {
      return res.status(400).json({
        status: 'failed',
        message: 'Product not found'
      });
    }

    await models.products.update({
      name: req.body.name,
      price: req.body.price,
      unit: req.body.unit,
      stocks: req.body.stocks,
      code: req.body.code,
      updated_at: new Date()
    }, {
      where: { id: id_product }
    });

    return res.status(200).json({
      status: 'success',
      message: 'Product has been updated'
    });
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const id_product = req.params.id;

    const cek_product = await models.products.findOne({
      where: { id: id_product }
    });

    if (!cek_product) {
      return res.status(400).json({
        status: 'failed',
        message: 'Product not found'
      });
    }

    await models.products.destroy({
      where: { id: id_product }
    });

    return res.status(200).json({
      status: 'success',
      message: 'Product has been deleted'
    });
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};
