'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("UserProfiles", [
      {
        firstName: "Anang",
        lastName: "Prayogo",
        birthOfDate: new Date("05/08/2001"),
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        phoneNumber: "083895780607",
      },
      {
        firstName: "Akbar",
        lastName: "Marshall",
        birthOfDate: new Date("01/04/2006"),
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        phoneNumber: "08381212",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserProfiles', null, {});
  }
};
