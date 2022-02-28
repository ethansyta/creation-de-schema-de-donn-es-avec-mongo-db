const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    title: {type : string , require : true},
    description:{type: string, require:true},
    imageUrl:{type: string, require: true},
    price: {type: Number, require: true},
    userId:{type: string, require: true}
});

module.export = mongoose.model('thing', thingSchema);