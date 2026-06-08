import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useState } from 'react';
import Modal from '../../components/Modal';

export const Income = () => {
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data:null,
  });


  // get income details
  const fetchIncomeDetails=async()=>{
    if (loading) return;
    
    setLoading(true);
    try{
      const response=await axiosInstance.get(
        `${API_PATHS.INCOME.GET_ALL_INCOME}`

      );
      if (response.data){
        setIncomeData(response.data);
      }
    } catch(error){
      console.log("Error fetching income details:",error);
    } finally {
      setLoading(false);
    }
  };

  //Handle Income
  const handleAddIncome=async(income)=>{};

  //Delete Income
  const deleteIncome=async(id)=>{};

  // handle download income data
  const handleDownloadInomeDetails=async()=>{};

  useEffect(()=>{
    fetchIncomeDetails();
    return ()=>{};
  },[]);


  return (
    <DashboardLayout activeMenu="income">
      <div className='my-5 mx-auto'>
          <div className='grid grid-cols-1 gap-6'>
            <div>
            <IncomeOverview
            transactions={()=>setOpenAddIncomeModal(true)}
            />
          </div>
        </div>

        <Modal 
        isOpen={openAddIncomeModal}
        onClose={()=>setOpenAddIncomeModal(false)}
        title="Add Income"
        >
          <div></div>
        </Modal>
      </div>
    </DashboardLayout>
  )
}
export default Income