var mongoose = require('mongoose');
var Algorithm = mongoose.model("Algorithm");

module.exports = (function(){
  return {

  add: function(req,res){
    var algorithm = new Algorithm(req.body);
    algorithm.save(function(err){
      if(err){
        console.log('save algorithm server controller errors:', algorithm.errors);
        res.json({title: "you have errors", errors: algorithm.errors});
      } else {
        console.log("algorithm added: ", algorithm);
        res.json('added successfully');
      }
    })
  }








  }
})();
