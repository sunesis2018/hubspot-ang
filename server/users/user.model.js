const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        firstName: { type: DataTypes.STRING, allowNull: false},
        lastName: { type: DataTypes.STRING, allowNull: false},
        phoneNumber: { type: DataTypes.STRING, allowNull: false},
        email: { type: DataTypes.STRING, allowNull: false},
        hash: { type: DataTypes.STRING, allowNull: false},
    };

    const options = {
        defaultScope: {
            attributes: {exclude: ['hash']}
        },
        scopes: {
          withHash: {attributes: {},}
        }
    };
    return sequelize.define('User', attributes, options);
}
