const User = require('../models/User');
const Income = require('../models/Income');
const xlsx = require('xlsx');


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
    const userId = req.user.id;

    try {
        const income = await Income.findOneAndDelete({
            _id: req.params.id,
            userId
        });

        if (!income) {
            return res.status(404).json({
                message: "Income source not found"
            });
        }

        res.json({
            message: "Income source deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
};

// Download Income Excel Report
exports.downloadIncomeExcel = async (req, res) => {
    const userId=req.user.id;
    
    try {
        const income = await Income.find({ userId }).sort({ date: -1 });

        // Ready Data for Excel
        const data=income.map(item=>({
            Source: item.source,
            Amount: item.amount,
            Date: item.date,
        }));

        const wb=xlsx.utils.book_new();
        const ws=xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb,ws,"Income Report");

        xlsx.writeFile(wb,"Income_Report.xlsx");
        
        res.download("Income_Report.xlsx");
    }catch(error){
        res.status(500).json({
            message: 'Server error'
        });
    }
};