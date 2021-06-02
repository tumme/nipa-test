'use strict';
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define('ticket', {
    ticket_code: DataTypes.STRING,
    ticket_title: DataTypes.STRING,
    contract_name: DataTypes.STRING,
    contract_email: DataTypes.STRING,
    status: DataTypes.INTEGER,
    ticket_description: DataTypes.TEXT
  }, {});
  ticket.associate = function(models) {
    models.ticket.belongsTo(models.ticket_status, { foreignKey: "status" });
  };
  return ticket;
};