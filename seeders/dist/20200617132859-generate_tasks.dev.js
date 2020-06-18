'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tasks', [{
      id: 1,
      descripcion: 'Terminar el curso de laravel',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      descripcion: 'Editar el diseño del blog',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      descripcion: 'Hacer video de blog en PHP',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      descripcion: 'Desayunar',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tasks', null, {});
  }
};