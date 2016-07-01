var user = require('../controllers/algorithms.js');
module.exports= function(app){

 app.post('/add', function(req,res){
    user.add(req,res);
   });


  }
