const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type:DataTypes.STRING,
      allowNull: false
      
    },
    imagen:{
      type:DataTypes.STRING,
      allowNull: false,

    },
    release_date:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating:{
      type: DataTypes.STRING,
      allowNull: false,
    }
    
  },
  {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  });
};
