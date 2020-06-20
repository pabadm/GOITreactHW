import React from 'react';
import './Statistics.css';

///создает список с помощью перебирания.
const StatList = (props) =>{
    return(
<ul className= 'statistics-list'>

    {props.map(prop =>(
    <li className="item">
        <span className='label'>
        {prop.label}
        </span>
        <span className='percentage'>
        {prop.percentage}%
        </span>
    </li>
    ))}

</ul>
    )
}
//////////\

////основная функция
const Statistics = (title,props) =>{
    return(
    <div className='Statistics'>
        <div className='title-container'>
            <span className="title">{title}</span>
        </div>
        <div className="statistics-container">
                {StatList(props)}
        </div>
    </div>
    )
}

// ReactDOM.render(Statistics(data),document.querySelector('#root'))
export default Statistics;