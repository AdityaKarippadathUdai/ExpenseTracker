import React from 'react'
import{
    BarChart,
    CartesianGrid,
    ToolTip,
    Legend,
    ResponsiveContainer,
    Cell,
    XAxis,
    YAxis,
} from 'recharts';

const CustomBarChart = ({data}) => {
  return (
    <div className='bg-white mt-6'>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} >
            <CartesianGrid stroke="none" />

            <XAxis datakeys="month" tick={{ fontSize:12 ,fill:'#555'}} stroke="none" />

            <YAxis tick={{fontSize:12, fill:'#555'}} stroke="none" />

            <Tooltip content={<CustomTooltip />} />

            <Bar 
            dataKey="amount"
            fill="#FF8842"
            radius={[10,10,0,0]}
            activeDot={{r:8,fill:"yellow"}}
            activeStyle={{fill:"green"}}
            >
            {data.map((entry,index)=>(
                <Cell key={index} fill={getBarColor(index)} />
                
            ))}
            </Bar>
            </BarChart>
        </ResponsiveContainer>
        
    </div>
  )
}

export default CustomBarChart