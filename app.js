// Define the `phonecatApp` module
//https://tutorialslink.com/Articles/CRUD-operations-using-AngularJs-in-Aspnet-MVC/45
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      discription: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      discription: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      discription: 'The Next, Next Generation tablet.'
    }
  ];

$scope.btn = "Add";


$scope.AddData = function AddData(){
  console.log($scope.todo.name )
  console.log($scope.todo.discription )

  if($scope.todo.name =="" || $scope.todo.name ==undefined){
    alert("Name Is requared.");
    return
  }
  if($scope.todo.discription =="" || $scope.todo.discription ==undefined){
    alert("Discription Is requared.");
    return
  }


    if(  $scope.btn == "Add"){
        $scope.phones.push($scope.todo);
    }
    if(  $scope.btn == "Edit"){
        //console.log($scope.dataIndex)
        $scope.phones.splice($scope.dataIndex, 1,$scope.todo);

    }
    $scope.todo = {};
    $scope.btn = "Add";
    $scope.dataIndex= "";
}



$scope.todo = {};


$scope.removeItem = function removeItem(n){
    console.log(n )
    $scope.phones.splice(n, 1);
}
$scope.editItem = function editItem(n){
    console.log(n )
    $scope.btn = "Edit";
    $scope.todo.name =$scope.phones[n].name;
    $scope.todo.discription = $scope.phones[n].discription;
    $scope.dataIndex = n;
}

});