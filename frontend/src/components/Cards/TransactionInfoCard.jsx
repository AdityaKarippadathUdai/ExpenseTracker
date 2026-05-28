import React from 'react'
import {
    LuUtensils,
    LuTrendingUp,
    LuTrendingDown,
    LuTrash2
} from 'react-icons/lu';


const TransactionInfoCard = ({
    title,
    icon,
    date,
    amount,
    type,
    hideDeleteBtn
}) => {
  return (
    <div className=''>
        <div className=''>
            {icon?(
                <image src={icon} alt={title} className=''/>
            ):(
                <LuUUtensils />
            )}
        </div>
    </div>
  )
}

export default TransactionInfoCard