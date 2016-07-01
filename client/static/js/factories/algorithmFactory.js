algorithmApp.factory('algorithmFactory', function($http){
 var categories = [{name:'array'}, {name: 'string'}, {name:'binary search tree' }, {name:'singly link list' }];
  var factory = {};

factory.getCategory = function(callback){
  callback(categories)
}

factory.add = function(data){
  $http.post('/add', data).success(function(output){
    console.log(output);
  });
}


  return factory;
});
