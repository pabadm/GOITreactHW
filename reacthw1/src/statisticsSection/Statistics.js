import React from 'react';
import './Statistics.css';

///элементы списка перебираю и получается конфетка

const StatisticsItems = ({props}) =>{
    return(
    props.map(prop=>(
        <li key={prop.id} className="StatisticsItem" >
        <span className='label'>
        {prop.label}
        </span>
        <span className='percentage'>
        {prop.percentage}%
        </span>
    </li>
    ))
    )
}
//////////\

////основная функция
const Statistics = ({ title, props }) =>{
    console.log('props :>> ', props);
    return(
    <div className='Statistics'>
        <div className='title-container'>
            <span className="title">{title}</span>
        </div>
        <div className="statistics-container">
            <ul className= 'statistics-list'>
                <StatisticsItems props={props}/>
            </ul>
        </div>
    </div>
    )
}


// ReactDOM.render(Statistics(data),document.querySelector('#root'))
export default Statistics;