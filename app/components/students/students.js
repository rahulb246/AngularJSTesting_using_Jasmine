(function() {
  'use strict';

  // Define the component and controller we loaded in our test
  angular.module('components.students', [])
  .controller('StudentsController', function(Students) {
    var vm = this;
    vm.students = Students.all();
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('students', {
        url: '/students',
        templateUrl: 'components/students/students.html',
        controller: 'StudentsController as sc'
      })
      /*.state('student', {
        url: '/student/:id',
        templateUrl: 'components/students/students.html',
        controller: 'StudentsController as sc'
        resolve:{
          resolvedStudent: function(Students, $stateParams){
            return Students.findById($stateParams.id);
          }
        }
      })*/
      ;

  });
})();
