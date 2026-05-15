const User = require('../models/User');
const Income = require('../models/Income');

// Add Income Source
exports.addIncome = async (req, res) => {
    const userId = req.user.id;

    try {
        const { icon, source, amount, date } = req.body;

        // Validate input
        if (!source || !amount || !date) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        // Optional: validate amount
        if (isNaN(amount) || Number(amount) <= 0) {
            return res.status(400).json({
                message: 'Amount must be a valid positive number'
            });
        }

        const newIncome = new Income({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });

        await newIncome.save();

        res.status(201).json(newIncome);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Server error'
        });
    }
};

// Get All Income Sources
exports.getAllIncome = async (req, res) => {

    const userId = req.user.id;
    
    try {
        const incomes = await Income.find({ userId }).sort({ date: -1 });
        res.status(200).json(incomes);
    }catch(error){
        res.status(500).json({
            message: 'Server error'
        });
    }
};

// Delete Income Source
exports.deleteIncome = async (req, res) => {

};

// Download Income Excel Report
exports.downloadIncomeExcel = async (req, res) => {

};