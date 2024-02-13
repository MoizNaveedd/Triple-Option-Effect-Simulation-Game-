const mongoose = require('mongoose')
const laptopChoiceSchema = new mongoose.Schema({
    Firstchoice: { type: String, required: true },
    SecondChoice:{type:String,required:true},
    text:{type:String},
    email:{type:String,required:true}
  });

  const LaptopChoice = mongoose.model('UserSelections', laptopChoiceSchema)

  module.exports= LaptopChoice;