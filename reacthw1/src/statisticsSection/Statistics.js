import React from 'react';
import './Statistics.css';
import PropTypes from 'prop-types';

///элементы списка перебираю и получается конфетка

const StatisticsItems = ({stats}) =>{
    return(
    stats.map(stat=>(
    <li key={stat.id} className="StatisticsItem" >
        <span className='label'>
        {stat.label}
        </span>
        <span className='percentage'>
        {stat.percentage}%
        </span>
    </li>
    ))
    )
}
StatisticsItems.defaultProps ={
    stats: PropTypes.array,
}


//////////\

////основная функция
const Statistics = ({ title, stats }) =>{
    return(
    <div className='Statistics'>
        <div className='title-container'>
            {
            title !== undefined 
            && <h2 className="title">{title}</h2>
            }    
        </div>
        <div className="statistics-container">
            <ul className= 'statistics-list'>
                <StatisticsItems stats={stats}/>
            </ul>
        </div>
    </div>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}
export default Statistics;