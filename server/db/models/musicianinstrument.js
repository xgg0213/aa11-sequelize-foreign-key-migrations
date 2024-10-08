'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MusicianInstrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MusicianInstrument.init({
    musicianId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Musicians',
        key: 'id'
      }
    },
    instrumentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Instruments',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'MusicianInstrument',
  });
  return MusicianInstrument;
};