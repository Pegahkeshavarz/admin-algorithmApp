var mongoose = require('mongoose');

var Schema = mongoose.Schema;


/***** Algorighm Schema *****/
var algorithmSchema = new mongoose.Schema({
    name: {type: String},
    algorithm: {type: String},
    solution: {type: String},
    expire_dt: {type: Date},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    chat_id: {type: mongoose.Schema.Types.ObjectId, ref: "Chat"},
    category: {type: String}
}, {timestamps: true})

// register schema as a model
mongoose.model('Algorithm', algorithmSchema);
