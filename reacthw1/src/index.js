
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// profile
import Profile from './socialProfile/Profile';
import user from './socialProfile/user.json';
//statistics
import Statistics from './statisticsSection/Statistics';
import data from './statisticsSection/statistics-data.json';
//
//отрисовываю все задания сразу
const EveryTask = () =>{
    return(
        <div>
        {Profile(user)}
        {Statistics('Upload-stats', data)}
        </div>
    )
}

ReactDOM.render(EveryTask(),document.querySelector('#root'))
//<Statistics title={title}, props={data}/>не робить почему-то

