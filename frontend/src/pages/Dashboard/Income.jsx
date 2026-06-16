import React from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useState } from 'react';
import Modal from '../../components/Modal';
import AddIncomeForm from '../../components/Income/AddIncomeForm';
import toast from 'react-hot-toast'
import { useState, useEffect } from "react";
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import IncomeOverview from "../../components/Income/IncomeOverview";
import IncomeList from '../../components/Income/IncomeList';

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
  const handleAddIncome=async(income)=>{
    const {source,amount,date,icon}=income;

    // Validation
    if(!source.trim()){
      toast.error("Source Required");
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
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME,{
        source,
        amount,
        date,
        icon,
      });
      setOpenAddIncomeModal(false);
      toast.success("Income added successfully");
      fetchIncomeDetails();
    }catch(error){
      console.log("Error",error.response?.data.message || error.message);
    }

  };

  //Delete Income
  const deleteIncome=async(id)=>{};

  // handle download income data
  const handleDownloadIncomeDetails = async () => {};

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

          <IncomeList
          transactions={incomeData}
          onDelete={(id)=>{
            setOpenDeleteAlert({show:true,data:id})
          }}
          onDownload={handleDownloadIncomeDetails}
          />

        </div>

        <Modal 
        isOpen={openAddIncomeModal}
        onClose={()=>setOpenAddIncomeModal(false)}
        title="Add Income"
        >
          <AddIncomeForm onAddIncome={handleAddIncome}/>
        </Modal>
      </div>
    </DashboardLayout>
  )
}
export default Income