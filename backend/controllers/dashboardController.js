const Income=require("../models/Income");
const Expense=require("../models/Expense");

const {isValidObjectId,Types}=require("mongoose");

// Dashboard data: total income, total expense, net balance
exports.getDashboardData=async(req,res)=>{
    try{
        const userId=req.user.id;
        const userObjectId=new Types.ObjectId(String(userId));

        //Fetch total income and total expense 
        const totalIncome=await Income.aggregate([
            {$match:{user:userObjectId}},
            {$group:{_id:null,total:{$sum:"$amount"}}}
        ]);

        console.log("Total Income:",{totalIncome,userId:isValidObjectId(userId)});

        const totalExpense=await Expense.aggregate([
            {$match:{user:userObjectId}},
            {$group:{_id:null,total:{$sum:"$amount"}}}
        ]);
        console.log("Total Expense:",{totalExpense,userId:isValidObjectId(userId)});

        //Income Transactions in last 60 days
        const last60DaysIncomeTransactions=await Income.find({
            userId,
            date:{$gte:new Date(Date.now()-60*24*60*60*1000)},
        }).sort({date:-1});

        //Income in last 60 days
        const incomeLast60Days=last60DaysIncomeTransactions.reduce(
            (sum,transaction)=>sum+transaction.amount,0);

        // Get Expenses last 30 days

        const last30DaysExpenseTransactions=await Expense.find({
            userId,
            date:{$gte:new Date(Date.now()-30*24*60*60*1000)},
        }).sort({date:-1});

        //total expense in last 30 days
        const expenseLast30Days=last30DaysExpenseTransactions.reduce(
            (sum,transaction)=>sum+transaction.amount,0);

        // Fetch recent 5 transactions (both income and expense)
        const lastTransactions=[...(await Income.find({userId}).sort({date:-1}).limit(5)).map(
            (txn)=>({
                ...txn.toObject(),
                type:"income",
            })
        ),...(await Expense.find({userId}).sort({date:-1}).limit(5)).map(
            (txn)=>({
                ...txn.toObject(),
                type:"expense",
            })
        )].sort((a,b)=>b.date-a.date).slice(0,5);

        //Final Response
        res.json({
            totalBalance:(totalIncome[0]?.total || 0)-(totalExpense[0]?.total || 0),
            totalIncome:totalIncome[0]?.total || 0,
            totalExpenses:totalExpense[0]?.total || 0,
            last30DaysExpenses:{
                total:expenseLast30Days,
                transactions:last30DaysExpenseTransactions,
            },
            last60DaysIncome:{
                total:incomeLast60Days,
                transactions:last60DaysIncomeTransactions,
            },
            recentTransactions:lastTransactions,
        });
    
    }catch(error){
        res.status(500).json({message:"Server Error",error:error.message});

    }
}