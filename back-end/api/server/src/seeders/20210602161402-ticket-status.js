

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ticket_statuses', [
      {
      status: 'Open',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      status: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      status: 'Accepted',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      status: 'Resolved',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      status: 'Rejected',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('Users', null, {});
  }
};