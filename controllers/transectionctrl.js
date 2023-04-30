const transectionModel = require("../models/transectionModel");
const moment = require ('moment')
const getALLTransection = async (req, res) => {
  try {
    const {frequency , selectedDates,type} = req.body;
    const transections = await transectionModel.find({
        ...(frequency !== 'custom' ? {
            date:{
                $gt : moment().subtract(Number(frequency),'d').toDate(),
            },
        }: {
            date:{
                $gte: selectedDates[0],
                $lte : selectedDates[1],
            }
        }
       ),
      userid: req.body.userid,
      ...(type !== 'all' && {type})
    });
    res.status(200).json(transections);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addTransection = async (req, res) => {
  try {
    const newTransection = new transectionModel(req.body);
    await newTransection.save();
    res.status(201).send("Transection Created");
  } catch (error) {
    console.log(error);
    console.log("hello")
    res.status(500).json(error);
  }
};

module.exports = { getALLTransection, addTransection };
