

angular.module('madlib', []).controller('madlibController' ,function($scope){

$scope.displayForm=true;

$scope.checkSomething= function(){

	return $scope.displayForm;

}

$scope.ShowAlternate = function(isValid){

$scope.submitted=true;

if(isValid)	{
	$scope.displayForm= !$scope.displayForm;
	}
}

$scope.clearData = function(ValidForm){

$scope.ShowAlternate(ValidForm);
$scope.female_name="";              
$scope.job_title="";              
$scope.tedious_task ="";              
$scope.dirty_task="";              
$scope.celebrity="";              
$scope.useless_skill="";
$scope.adjective="";
$scope.obnoxiuous_celbertity="";
$scope.huge_number="";
}


$scope.submitForm = function(){

$scope.submitted=true;
}


});