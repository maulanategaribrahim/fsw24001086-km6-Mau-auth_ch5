"use strict";
const { User } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Aku",
        address: "Jakarta",
        age: 24,
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kamu",
        address: "Bandung",
        age: 26,
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dia",
        address: "Surabaya",
        age: 34,
        role: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "DIRIKU",
        address: "semarank",
        age: 20,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const users = await User.findAll();

    await queryInterface.bulkInsert(
      "Auths",
      [
        {
          email: "aku@gmail.com",
          password: "$2a$12$DMHSmA0QrJYJJkdHNrWHiuBqj2cOmkO5ccd7C6Z5ovYLmRWUifsjC",
          confirmPassword: "$2a$12$DMHSmA0QrJYJJkdHNrWHiuBqj2cOmkO5ccd7C6Z5ovYLmRWUifsjC",
          userId: users[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "kamu@gmail.com",
          password: "$2a$12$3nPP0ONf2a71RDhNBzQ5aOUkfGGwf7mHvAe/PDuARJ1AD9MRhFU4i",
          confirmPassword: "$2a$12$3nPP0ONf2a71RDhNBzQ5aOUkfGGwf7mHvAe/PDuARJ1AD9MRhFU4i",
          userId: users[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "dia@gmail.com",
          password: "$2a$12$dk8kVhAMRWyW2e/tACJcJeboBKRxWdsIi3uUjs38hg11xVP/VsPSy",
          confirmPassword: "$2a$12$dk8kVhAMRWyW2e/tACJcJeboBKRxWdsIi3uUjs38hg11xVP/VsPSy",
          userId: users[2].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "diriini@gmail.com",
          password: "$2b$10$/lnn9GCM684AmlFEb8Ae9OzJed0ag.pl0HfUZg4wIaFDkBw9rwamW",
          confirmPassword: "$2b$10$PRC851Hn3xQj/YTIpvGZZ.u2dj19zhBUUgZE2G7f5/c/q.JzlKyH2",
          userId: users[3].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
