import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Tue',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Wed',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Thu',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Fri',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Sat',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Sun',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const AreaChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={400}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis alphabetic={100} />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#ff6a49" />
                <Bar dataKey="uv" stackId="a" fill="#e7b860" />
                <Bar dataKey="amt" stackId="a" fill="#11998e" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default AreaChart;