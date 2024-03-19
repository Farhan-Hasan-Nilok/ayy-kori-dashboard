import React from 'react';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import RadialProgress from '../../components/RadialProgress/RadialProgress';
import Container from '../../components/Container/Container';
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
import AreaChart from '../../components/AreaChart/AreaChart';
const Dashboard = () => {
    return (
        <Container>
            <div className='md:flex items-center justify-between space-y-3 md:space-y-0 p-4'>
                <Header title="Good Morning" />
                <Search placeholder="Search..." />
            </div>
            <div className='flex items-center justify-between flex-col md:flex-row flex-wrap'>
                <RadialProgress color="#11998e" title="Total Candidates" quantity={360} arrow={<GoArrowUpRight/>}/>
                <RadialProgress color="#e7b860" title="Shortlisted Candidates" quantity={201} arrow={<GoArrowUpRight />} />
                <RadialProgress color="#ff6a49" title="Rejected Candidates" quantity={160} arrow={<GoArrowDownRight />} />
            </div>

            <div>
                <AreaChart />
            </div>
        </Container>
    );
};

export default Dashboard;