import React, { useEffect } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { API_PATHS } from '../../utils/apiPaths';
import AddExpenseForm from '../../components/Expense/AddExpenseForm';

export const Expense = () => {
  useUserAuth();

  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data:null,
  });
  const [openAddExpenseModal, setOpenAddExpenseModal] = useState(false);

  // get Expense details
  const fetchExpenseDetails=async()=>{
    if (loading) return;
    
    setLoading(true);
    try{
      const response=await axiosInstance.get(
        `${API_PATHS.EXPENSE.GET_ALL_EXPENSE}`

      );
      if (response.data){
        setExpenseData(response.data);
      }
    } catch(error){
      console.log("Error fetching income details:",error);
    } finally {
      setLoading(false);
    }
  };

  //Handle Expense
  const handleAddExpense=async(expense)=>{
    const {category,amount,date,icon}=expense;

    // Validation
    if(!category.trim()){
      toast.error("Cayegory Required");
      return;
    }
    if(!amount || isNaN(amount) || Number(amount)<=0){
      toast.error("Amount must be a valid number");
      return;
    }
    if(!date){
      toast.error("Date is required");
      return;
    }
    try{
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE,{
        category,
        amount,
        date,
        icon,
      });
      setOpenAddExpenseModal(false);
      toast.success("Expense added successfully");
      fetchExpenseDetails();
    }catch(error){
      console.log("Error",error.response?.data.message || error.message);
    }

  };




  
  useEffect(()=>{
    fetchExpenseDetails();

    return ()=>{};

  },[]);

  return (
    <DashboardLayout activeMenu="Expense">
      <div className='my-5 mx-auto'>
        <div className='grid grid-cols-1 gap-6'>
          <div className=''>
            <ExpenseOverview
            transactions={expenseData}
            onExpenseIncome={()=>setOpenAddExpenseModal(true)}
            />
          </div>

          <ExpenseList 
          transactions={expenseData}
          onDelete={(id)=>{
            setOpenDeleteAlert({show:true,data:id});
          }}
          onDownload={handleDownloadExpenseDetails}
          />
        </div>

        <Modal 
        isOpen={openAddExpenseModal}
        onClose={()=>setOpenAddExpenseModal(false)}
        title="Add Expense"
        >
          <AddExpenseForm onAddExpense={handleAddExpense} />
          
        </Modal>
      </div>
    </DashboardLayout>
  )
}
export default Expense;