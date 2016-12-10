describe('StudentsController', function() {
  var $controller, StudentsController, StudentsFactory;
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

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('components.students'));
  beforeEach(angular.mock.module('api.students'));

  // Inject the $controller service to create instances of the controller (StudentsController) we want to test
  beforeEach(inject(function(_$controller_, _Students_) {
    $controller = _$controller_;
    StudentsFactory = _Students_;
    spyOn(StudentsFactory, 'all').and.callFake(function() {
      return StudentList;
    });
    StudentsController = $controller('StudentsController', {});
  }));

  // Verify our controller exists
  it('should be defined', function() {
    expect(StudentsController).toBeDefined();
  });
  it('should initialize with a call to Students.all()', function() {
    expect(StudentsFactory.all).toHaveBeenCalled();
    expect(StudentsController.students).toEqual(StudentList);
  });
});
