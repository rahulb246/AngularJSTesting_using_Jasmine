describe('Students factory', function() {
  var Students;
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
var singleStudent =  {
   id: '5',
   name: 'Neymar',
   college: 'MIT',
   location: 'Boston',
   facebook: 'neymar'
 };
  // Load our api.students module
  beforeEach(angular.mock.module('api.students'));

  // Set our injected Students factory (_Students_) to our local Students variable
  beforeEach(inject(function(_Students_) {
    Students = _Students_;
  }));

  // A simple test to verify the Students service exists
  it('should exist', function() {
    expect(Students).toBeDefined();
  });

  // A set of tests for our Student.all() method
  describe('.all()', function() {
    // A simple test to verify the method all exists
    it('should exist', function() {
      expect(Students.all).toBeDefined();
    });

    // A test to verify that calling all() returns the array of students we hard-coded above
    it('should return a hard-coded list of Students', function() {
      expect(Students.all()).toEqual(StudentList);
    });
  });
  describe('.findById()', function() {
   // A simple test to verify the method findById exists
   it('should exist', function() {
     expect(Students.findById).toBeDefined();
   });
   it('should return one student object if it exists', function() {
      expect(Students.findById('5')).toEqual(singleStudent);
    });
    it('should return undefined if the user cannot be found', function() {
        expect(Students.findById('ABC')).not.toBeDefined();
      });
 });
});
