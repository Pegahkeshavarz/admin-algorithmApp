algorithmApp.controller('algorithmCtrl', function ($scope, algorithmFactory) {

  algorithmFactory.getCategory(function(data){
    $scope.categories = data;
  });

  $scope.addAlgorithm = function(){
    algorithmFactory.add($scope.new);
    $scope.new = {};
  }

});
