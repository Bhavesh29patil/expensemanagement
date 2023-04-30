const transectionModel = require("../models/transectionModel");
const moment = require ('moment')
const getALLTransection = async (req, res) => {
  try {
    const frequency = req.body;
    const transection = await transectionModel.find({
        ...(frequency !== 'custom' ? {
            date:{
                $gt : moment().subtract(number(frequency),'d').toDate(),
            },
        }: {
            date:{
                $gte: selectedDates[0],
                $lte : seelctedDtes[1],
            }
        }
       ),
      userid: req.body.userid,
    });
    res.status(200).json(transection);
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
    res.status(500).json(error);
  }
};

module.exports = { getALLTransection, addTransection };
