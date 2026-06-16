/* eslint-disable react-hooks/set-state-in-effect */
import React from 'react'
import {LuPlus} from 'react-icons/lu';
import CustomBarChart from '../Charts/CustomBarChart';
import { useEffect } from 'react';
import { prepareIncomeBarChartData } from '../../utils/helper';
import { useState } from 'react';

const IncomeOverview = ({transactions,onAddIncome}) => {
    const [chartData,setChartData] = useState([]);

    useEffect(()=>{
        const result=prepareIncomeBarChartData(transactions);
        setChartData(result);
        return ()=>{};
    },[transactions]);
  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
        <div className=''>
            <h5 clasName='text-lg'>Income Overview</h5>
            <p className='text-xs text-gray-400 mt-0.5'>
                Track your income and stay on top of your financial goals .
            </p>
        </div>
        <button className='add-btn' onClick={onAddIncome}>
            <LuPlus className='text-lg'/>
            AddIncome
        </button>
    </div>
    <div className='mt-10'>
        <CustomBarChart data={chartData}/>
    </div>
    </div>
  )
}

export default IncomeOverview