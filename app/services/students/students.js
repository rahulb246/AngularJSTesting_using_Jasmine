(function() {
  'use strict';

  // Creating the module and factory we referenced in the beforeEach blocks in our test file
  angular.module('api.students', [])
  .factory('Students', function() {
    var Students = {};
    var StudentList = [
   {
     id: '1',
     name: 'IronMan',
     college: 'CMU',
     location: 'Pittsburg',
     facebook: 'stark'
   },
   {
     id: '2',
     name: 'Rahul',
     college: 'CBIT',
     location: 'Hyderabad',
     facebook: 'rahulb246'
   },
   {
     id: '3',
     name: 'Messi',
     college: 'CBIT',
     location: 'Hyderabad',
     facebook: 'messi'
   },
   {
     id: '4',
     name: 'Dybala',
     college: 'Stanford Univeristy',
     location: 'Stanford',
     facebook: 'dybala'
   },
   {
     id: '5',
     name: 'Neymar',
     college: 'MIT',
     location: 'Boston',
     facebook: 'neymar'
   }
 ];

    Students.all = function() {
        return StudentList;
   };
   Students.findById = function(id) {
      // Returning a single student object as our test expects it to
      return StudentList.find(function(student) {
        return student.id === id;
      });
    };
    return Students;
  });
})();
