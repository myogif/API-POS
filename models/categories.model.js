module.exports = (sequelize, DataTypes) =>{
    const categories = sequelize.define('categories', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
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
      tableName: 'categories',
    });


    categories.associate = (models) => {
        categories.hasMany(models.products, {as: 'product', foreignKey: 'category_id' });
    };

    return categories;

}
