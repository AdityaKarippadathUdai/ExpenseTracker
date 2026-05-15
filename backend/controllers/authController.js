const User=require('../models/User');
const jwt =require('jsonwebtoken');

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"1h"
    });
}

//Register User
exports.registerUser=async (req,res)=>{
    const {fullName,email,password,profileImageUrl}=req.body;
    // Check for missing fields
    if(!fullName || !email || !password){
        return res.status(400).json({message:"Please fill in all required fields"});
    }

    try{
        // check if email is already registered
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"Email is already registered"});
        }
        // Create new user
        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl
        });
        res.status(201).json({
            id:user._id,
            user,
            token:generateToken(user._id),
        });
    }catch(err){
        res.status(500).json({message:"Error registering user",error:err.message});
    }

};

//Login User
exports.loginUser=async(req,res)=>{
    const {email,password}=req.body;
    // Check for missing fields
    if(!email || !password){
        return res.status(400).json({message:"Please fill in all required fields"});
    }
    try{
        const user=await User.findOne({email});
        if (!user ||!(await user.comparePassword(password))){
            return res.status(401).json({message:"Invalid email or password"});
        }
        res.status(200).json({
            id:user._id,
            user,
            token:generateToken(user._id),
        });
    }catch(err){
        res.status(500).json({message:"Error logging in user",error:err.message});
    }
};

//Get User Info
exports.getUserInfo=async(req,res)=>{
    try{
        const user=await User.findById(req.user.id).select('-password');
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({message:"Error fetching user info",error:err.message});
    }
};

