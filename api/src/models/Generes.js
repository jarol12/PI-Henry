const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
  sequelize.define('genere',{
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    img:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
  )
    
}
