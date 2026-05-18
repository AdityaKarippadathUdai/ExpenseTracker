const User = require('../models/User');
const Expense = require('../models/Expense');
const xlsx = require('xlsx');


// Add Expense
exports.addExpense = async (req, res) => {
    const userId = req.user.id;

    try {
        const { icon, category, amount, date } = req.body;

        // Validate input
        if (!category || !amount || !date) {
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

        const newExpense = new Expense({
            userId,
            icon,
            category,
            amount,
            date: new Date(date)
        });

        await newExpense.save();

        res.status(201).json(newExpense);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Server error'
        });
    }
};

// Get All Expenses
exports.getAllExpenses = async (req, res) => {

    const userId = req.user.id;
    
    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });
        res.status(200).json(expense);
    }catch(error){
        res.status(500).json({
            message: 'Server error'
        });
    }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
    try{
        await Expense.findOneAndDelete(req.params.id);
        res.json({ message: 'Expense deleted successfully' });
        
    }catch(error){
        res.status(500).json({
            message: 'Server error'
        });
    }
};

// Download Expense Excel Report
exports.downloadExpenseExcel = async (req, res) => {
    const userId=req.user.id;
    
    try {
        const expense = await Expense.find({ userId }).sort({ date: -1 });

        // Ready Data for Excel
        const data=expense.map(item=>({
            Category: item.category,
            Amount: item.amount,
            Date: item.date,
        }));

        const wb=xlsx.utils.book_new();
        const ws=xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb,ws,"Expense Report");

        xlsx.writeFile(wb,"Expense_Report.xlsx");
        
        res.download("Expense_Report.xlsx");
    }catch(error){
        res.status(500).json({
            message: 'Server error'
        });
    }
};