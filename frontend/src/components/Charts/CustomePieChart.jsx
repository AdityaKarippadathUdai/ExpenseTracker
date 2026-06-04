import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import CustomTooltip from './CustomTooltip';

const CustomePieChart = ({ data, label, totalAmount, colors, showTextAnchor }) => {
    return (
        <ResponsiveContainer width="100%" height={380}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    innerRadius={100}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={colors[index % colors.length]}
                        />
                    ))}
                </Pie>
                <Tooltip content={CustomTooltip} />
                <Legend content={CustomTooltip}/>
                {showTextAnchor && (
                    <text
                        x="50%"
                        y="50%"
                        dy={-25}
                        textAnchor="middle"
                        fill="#666"
                        fontSize={14}
                    >
                        {label}
                    </text>
                )}
                {showTextAnchor && (
                    <text
                        x="50%"
                        y="50%"
                        dy={8}
                        textAnchor="middle"
                        fill="#333"
                        fontSize={24}
                        fontWeight="bold"
                    >
                        {totalAmount}
                    </text>
                )}
            </PieChart>
        </ResponsiveContainer>
    );
};

export default CustomePieChart;