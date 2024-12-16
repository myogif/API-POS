const models = require('../models');

// Get Category by ID
exports.getCategory = async (req, res) => {
  try {
    const category = await models.categories.findAll({
      attributes: ['id', 'name']
    });

      return res.status(200).json({
        status: 'success',
        message: 'Category found',
        data: category
      });
    
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

// Add Category
exports.addCategory = async (req, res) => {
  try {
   

    const category = await models.categories.create({
      name: req.body.name,
      description: req.body.description,
      created_at: new Date(),
      updated_at: new Date()
    });

    return res.status(200).json({
      status: 'success',
      message: 'Category has been registered',
      data: category
    });
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

// Update Category
exports.updateCategory = async (req, res) => {
  try {
    const id_category = req.params.id;

    const cek_category = await models.categories.findOne({
      where: { id: id_category }
    });

    if (!cek_category) {
      return res.status(400).json({
        status: 'failed',
        message: 'Category not found, please register a new Category'
      });
    }

    await models.categories.update({
      name: req.body.name,
      description: req.body.description,
      updated_at: new Date()
    }, {
      where: { id: id_category }
    });

    return res.status(200).json({
      status: 'success',
      message: 'Category has been updated'
    });
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

// Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    const id_category = req.params.id;

    const cek_category = await models.categories.findOne({
      where: { id: id_category }
    });

    if (!cek_category) {
      return res.status(400).json({
        status: 'failed',
        message: 'Category not found'
      });
    }

    await models.categories.destroy({
      where: { id: id_category }
    });

    return res.status(200).json({
      status: 'success',
      message: 'Category has been deleted'
    });
  } catch (err) {
    return res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};
