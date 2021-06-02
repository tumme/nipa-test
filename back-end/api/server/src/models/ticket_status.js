'use strict';
module.exports = (sequelize, DataTypes) => {
  const ticket_status = sequelize.define('ticket_status', {
    status: DataTypes.STRING
  }, {});
  ticket_status.associate = function(models) {
    models.ticket_status.hasMany(models.ticket, { foreignKey: "status" });
  };
  return ticket_status;
};