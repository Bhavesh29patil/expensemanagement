const userModel = require('../models/userModel')

const loginController = async(res,req) =>{
    try{
        const {email , password} = req.body
        const user = await userModel.findOne({email , password})
        if(!user){
            return res.status(404).send("user not found")
        }
        res.status(200).json({
            sucess:true,
            user})
    }
    catch(err){
        res.status(400).json({
            sucess:false,
            err
        })
    }
}
const registerController = async(req,res) =>{
    try{
        const newUser = new userModel(req.body)
        await newUser.save()

        res.status(201).json({
            sucess:true,
            newUser
        })``
    }
    catch(err){
        res.status(400).json({
            sucess:false,
            err
        })
    }
}


module.exports = {loginController}
module.exports = {registerController}