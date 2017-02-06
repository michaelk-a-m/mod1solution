(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  
  $scope.lunchlist = "";
  $scope.totalItem = 0;
  $scope.message = "";
  $scope.borderColor = "";
  $scope.fontColor= "";

  
  $scope.startCounting = function(){
  	var tempTotal = countLunchItems($scope.lunchlist);
  	$scope.totalItem = tempTotal;
	  	if($scope.totalItem == 0){
	  		$scope.message = "Please enter data first!"
	  		$scope.fontColor = "red";
	  	}
	  	else if($scope.totalItem > 3){
	  			$scope.message = "Too much!";
	  			$scope.fontColor = "green";
	  	}
	  	else{
	  			$scope.message = "Enjoy!";
	  			$scope.fontColor = "green";
	  	}
  			

  	};
  	

}

function countLunchItems(string){
	var totalLunchItem = 0;
	var stringArray = string.split(',');
	for(var i = 0; i < stringArray.length; i++) {
		if(stringArray[i].trim()!='')
		totalLunchItem++;
	}

	return totalLunchItem;
};

})();
