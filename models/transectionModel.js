const mongoose = require('mongoose');

const transectionSchema = new mongoose.Schema(
  {
    userid:{
        type:String,
        required:true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required, cannot be kept empty"],
    },
    type:{
        type:String,
        required:[true,"type is req"]
    },
    category: {
      type: String,
      required: [true, "Category is required, cannot be kept empty"],
    },
    category: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    date: {
      type: String,
      required: [true, "data is required"],
    },
  },
  { timestamps: true }
);

const transectionModel = mongoose.model('transections', transectionSchema);
module.exports = transectionModel;
