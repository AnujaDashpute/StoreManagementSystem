// models/ratings.js
'use strict';

module.exports = (sequelize, DataTypes) => {
  const Ratings = sequelize.define(
    'ratings',
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      store_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
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
      tableName: 'ratings',
      timestamps: false,
      underscored: true,
    }
  );

  // Static methods
  Ratings.findRating = async function (criteria) {
    return await this.findOne({ where: criteria });
  };

  Ratings.createRating = async function (ratingData) {
    try {
      return await this.create(ratingData);
    } catch (error) {
      console.error('Error creating rating:', error);
      throw new Error('Error creating rating');
    }
  };

  Ratings.updateRating = async function (id, updateData) {
    try {
      const [updatedRows] = await this.update(updateData, {
        where: { id },
      });
      if (updatedRows > 0) {
        return await this.findOne({ where: { id } });
      }
      return null;
    } catch (error) {
      console.error('Error updating rating:', error);
      throw new Error('Error updating rating');
    }
  };

  Ratings.deleteRating = async function (id) {
    try {
      const deletedRows = await this.destroy({
        where: { id },
      });
      return deletedRows > 0;
    } catch (error) {
      console.error('Error deleting rating:', error);
      throw new Error('Error deleting rating');
    }
  };

  return Ratings;
};
