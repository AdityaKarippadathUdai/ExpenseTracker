const User=require('../models/User');
const Income=require('../models/Income');


// Add Income Source
exports.addIncome = (req, res) => {
    const userId=req.user.id;

    try{
        const {icon,source,amount,date}=req.body;
        // Validate input check for missing fields
        if(!source||!amount||!date){
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newIncome=new Income({
            userId,
            icon,
            source,
            amount,
            date:new Date(date)
        });
        await newIncome.save();
        res.status(201).json(newIncome);

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get All Income Sources
exports.getAllIncome = (req, res) => {

};

// Delete Income Source
exports.deleteIncome = (req, res) => {

};

// Download Income Excel Report
exports.downloadIncomeExcel = (req, res) => {

};