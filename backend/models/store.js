// models/stores.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Stores = sequelize.define(
    'stores',
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING(500),
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: 'stores',
      timestamps: false,
      underscored: true,
    }
  );

  // Static methods
  Stores.findStore = async function (criteria) {
    return await this.findOne({ where: criteria });
  };

  Stores.createStore = async function (storeData) {
    try {
      return await this.create(storeData);
    } catch (error) {
      console.error('Error creating store:', error);
      throw new Error('Error creating store');
    }
  };

  Stores.updateStore = async function (id, updateData) {
    try {
      const [updatedRows] = await this.update(updateData, {
        where: { id },
      });
      if (updatedRows > 0) {
        return await this.findOne({ where: { id } });
      }
      return null;
    } catch (error) {
      console.error('Error updating store:', error);
      throw new Error('Error updating store');
    }
  };

  Stores.deleteStore = async function (id) {
    try {
      const deletedRows = await this.destroy({
        where: { id },
      });
      return deletedRows > 0;
    } catch (error) {
      console.error('Error deleting store:', error);
      throw new Error('Error deleting store');
    }
  };

  return Stores;
};
