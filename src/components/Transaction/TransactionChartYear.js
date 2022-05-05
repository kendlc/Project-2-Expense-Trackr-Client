import React, {useState, useEffect} from "react";
import createRequest from '../../request';
import { PieChart, Pie, Cell, Tooltip, RadialBarChart, RadialBar, Legend } from "recharts";

const TransactionChartYear = () => {
    const [transactions, setTransactions] = useState([]);
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const COLORS =['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    useEffect(() => {
        let mounted = true;
            createRequest('/transactions.json')
            .then(result => {
                if(mounted){
                setTransactions(result); 
                };
            });
            return()=> mounted = false;
        }, []);

    console.log(transactions);

    const filterYear = transactions.filter( (transaction) => {
        return new Date(transaction.date).getFullYear().toString() === new Date().getFullYear().toString();
    });
    console.log(filterYear)
    
    const data = filterYear.map((transaction) => ({
            name: ( monthNames[new Date(transaction.date).getMonth().toString()] ) , value: Number(transaction.amount)
    }));

    

    

    return (   
        
        <PieChart width={800} height={400} >
            <Pie 
                data={data}
                cx={120}
                cy={200}
                innerRadius={20}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label 
                isAnimationActive={true}
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            <Pie
                data={data}
                cx={420}
                cy={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
        <Legend verticalAlign="top" height={36}/>
    </PieChart>
      
    );
    
}

export default TransactionChartYear;







// import React, {PureComponent} from 'react';
// import {PieChart, Pie, Sector, Cell} from 'recharts';

// const data= [
//     { name: "Salary", value: 1200 },
//     { name: "Takeaways", value: 400 },
//     { name: "a", value: 120 },
//     { name: "e", value: 200 },
//     { name: "d", value: 80 },
//     { name: "bC", value: 500 },
  
//   ];
  
//   const COLORS =['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// export default class Example extends PureComponent {
//     // static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';
  
//     render() {
//       return (
//         <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
//           <Pie
//             data={data}
//             cx={120}
//             cy={200}
//             innerRadius={20}
//             outerRadius={80}
//             fill="#8884d8"
//             paddingAngle={5}
//             dataKey="value"
//             label
//             isAnimationActive={true}
//           >
//             {data.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Pie
//           data={data}
//           cx={420}
//           cy={200}
//           startAngle={180}
//           endAngle={0}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     );
//   }
// }


// const data01 = [
//     { name: "Group A", value: 400 },
//     { name: "Group B", value: 300 },
//     { name: "Group C", value: 300 },
//     { name: "Group D", value: 200 },
//     { name: "Group E", value: 278 },
//     { name: "Group F", value: 189 }
//     ];

//     const data02 = [
//     { name: "Group A", value: 2400 },
//     { name: "Group B", value: 4567 },
//     { name: "Group C", value: 1398 },
//     { name: "Group D", value: 9800 },
//     { name: "Group E", value: 3908 },
//     { name: "Group F", value: 4800 }
//     ];



// const d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);







