import React from "react";
import { Row, Col } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, RadialBarChart, RadialBar, Legend } from "recharts";

const TransactionChartYear = (props) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const COLORS =["#e60049", "#0bb4ff", "#50e991", "#e6d800", "#9b19f5",
        "#ffa300", "#dc0ab4", "#b3d4ff", "#00bfa0"
    ];

    const COLORS2 = COLORS.slice().reverse();

    const propOrder = props.items.sort(function(a,b){
        return new Date(a.date) - new Date(b.date)})
    
    const filterYearExp = propOrder.filter( (transaction) => {
        return (new Date(transaction.date).getFullYear().toString() ===
                new Date().getFullYear().toString() &&
                transaction.type_of === 'expense')
    });

    const filterPerMonthExp = filterYearExp.map((transaction) => ({
        name: (monthNames[new Date(transaction.date).getMonth().toString()]),
        value: Number(transaction.amount)
    }));
   
    const holderExp = {};
    filterPerMonthExp.forEach(function(d) {
        if (holderExp.hasOwnProperty(d.name)) {
            holderExp[d.name] = holderExp[d.name] + d.value;
        } else {
            holderExp[d.name] = d.value;
        }
    });

    const chartDataExp = [];
    for (const propExp in holderExp) {
        chartDataExp.push({ name: propExp, value: Number(holderExp[propExp].toFixed(2)) });
    };

    const filterYearInc = props.items.filter( (transaction) => {
        return (new Date(transaction.date).getFullYear().toString() ===
                new Date().getFullYear().toString() &&
                transaction.type_of === 'income')
    });

    const filterPerMonthInc = filterYearInc.map((transaction) => ({
        name: (monthNames[new Date(transaction.date).getMonth().toString()]),
        value: Number(transaction.amount)
    }));
   
    const holderInc = {};
    filterPerMonthInc.forEach(function(d) {
        if (holderInc.hasOwnProperty(d.name)) {
            holderInc[d.name] = holderInc[d.name] + d.value;
        } else {
            holderInc[d.name] = d.value;
        }
    });

    const chartDataInc = [];
    for (const propInc in holderInc) {
        chartDataInc.push({ name: propInc, value: Number(holderInc[propInc].toFixed(2)) });
    };

    return (   
        <Row className="d-flex p-2">
            {
            !(chartDataInc.length === 0) &&
            <Col  align="center">
            <PieChart width={350} height={350} >
                <Pie 
                    data={chartDataInc}
                    innerRadius={40}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label 
                    isAnimationActive={true}
                >
                {chartDataInc.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]}  />
                ))}
                </Pie>
                <Legend verticalAlign="top"/>
                <Tooltip formatter={(value) => new Intl.NumberFormat('en-US',
                    {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(value)} />
            </PieChart>
            <h5>Current Year Incomes</h5>
            </Col>
            }
            {
            !(chartDataExp.length === 0) &&
            <Col  align="center">
            <PieChart width={350} height={350} >
                <Pie 
                    data={chartDataExp}
                    innerRadius={40}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label 
                    isAnimationActive={true}
                >
                {chartDataExp.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
                ))}
                </Pie>
                <Legend verticalAlign="top"/>
                <Tooltip formatter={(value) => new Intl.NumberFormat('en-US',
                    {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(value)} />
            </PieChart>
            <h5>Current Year Expenses</h5>
            </Col>
            }

        </Row>
    );
}

export default TransactionChartYear;
