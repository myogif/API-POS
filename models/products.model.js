module.exports = (sequelize, DataTypes) =>{
    const products = sequelize.define('products', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      stocks: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt:{
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt:{
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: false,
      },
      
    },{
      tableName: 'products',
    });


    products.associate = (models) => {
        products.belongsTo(models.categories, { foreignKey: 'category_id' });
      };
    

    return products;

}
