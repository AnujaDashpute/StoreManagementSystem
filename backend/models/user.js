// models/users.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'users',
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
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(500),
      },
      role: {
        type: DataTypes.ENUM('customer', 'store_owner', 'admin'),
        allowNull: false,
        defaultValue: 'customer',
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
      tableName: 'users',
      timestamps: false,
      underscored: true,
    }
  );

  // Static methods
  Users.findUser = async function (criteria) {
    return await this.findOne({ where: criteria });
  };

  Users.createUser = async function (userData) {
    try {
      return await this.create(userData);
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Error creating user');
    }
  };

  Users.updateUser = async function (id, updateData) {
    try {
      const [updatedRows] = await this.update(updateData, {
        where: { id },
      });
      if (updatedRows > 0) {
        return await this.findOne({ where: { id } });
      }
      return null;
    } catch (error) {
      console.error('Error updating user:', error);
      throw new Error('Error updating user');
    }
  };

  Users.deleteUser = async function (id) {
    try {
      const deletedRows = await this.destroy({
        where: { id },
      });
      return deletedRows > 0;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Error deleting user');
    }
  };

  return Users;
};
