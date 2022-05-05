
import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const TransactionChartYear = (props) => {

    const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
    ];

    const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 }
    ];

   
    return (
        <PieChart width={1000} height={400}>
        <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx={300}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
        />
        <Tooltip />
        </PieChart>
    );
    
}

export default TransactionChartYear;