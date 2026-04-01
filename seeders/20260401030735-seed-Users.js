'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        email: "anpray@gmail.com",
        password: bcrypt.hashSync("anang123", 8),
        role: "Teacher",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "akbarmars@gmail.com",
        password: bcrypt.hashSync("akbar123", 8),
        role: "Student",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
