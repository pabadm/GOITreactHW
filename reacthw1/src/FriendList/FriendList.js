import React from 'react';
import './FriendList.css';

const Friend = ({props}) => {
    return(
    props.map(prop=>(
    <li className={prop.isOnline ? 'Friend-online Friend':'Friend-offline Friend'} 
    key={prop.id}>
        <img className='friend-avatar' alt='friend-avatar' src={prop.avatar}/>
        <p className='friend-name'>{prop.name}</p>
    </li>
    ))
    )
}

const FriendList= ({props}) =>{
    return(
    <div className='FriendList-container'>
        <ul className='FriendList-list'>
            <Friend props={props}/>
        </ul>
    </div>
    )
}

export default FriendList;
