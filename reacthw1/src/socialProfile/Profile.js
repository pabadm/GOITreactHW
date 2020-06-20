import React from 'react';
// import ReactDOM from 'react-dom';
import './Profile.css';

const Profile = ({props}) => {
    return(
        <div className='Profile'>
        <div className='description-container'>
            <img src={props.avatar} alt='someone`s avatar' className='avatar' />
            <p className='name'>{props.name}</p>
            <p className='tag'>@{props.tag}</p>
            <p className='location'>{props.location}</p>
        </div>
        <div className='stats-container'>
            <ul className='stats-list'>
                <li className='stat'>
                    <span className='stat-label'>Followers</span>
                    <span className='stat-quantity'>{props.stats.followers}</span>
                </li>
                <li className='stat'>
                    <span className='stat-label'>Views</span>
                    <span className='stat-quantity'>{props.stats.views}</span>
                </li>
                <li className='stat'>
                    <span className='stat-label'>Likes</span>
                    <span   className='stat-quantity'>{props.stats.likes}</span>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Profile;