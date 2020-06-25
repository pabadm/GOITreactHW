import React from "react";
// import ReactDOM from 'react-dom';
import "./Profile.css";
import PropTypes from "prop-types";

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className='Profile'>
      <div className='description-container'>
        <img src={avatar} alt='someone`s avatar' className='avatar' />
        <p className='name'>{name}</p>
        <p className='tag'>@{tag}</p>
        <p className='location'>{location}</p>
      </div>
      <div className='stats-container'>
        <ul className='stats-list'>
          <li className='stat'>
            <span className='stat-label'>Followers</span>
            <span className='stat-quantity'>{stats.followers}</span>
          </li>
          <li className='stat'>
            <span className='stat-label'>Views</span>
            <span className='stat-quantity'>{stats.views}</span>
          </li>
          <li className='stat'>
            <span className='stat-label'>Likes</span>
            <span className='stat-quantity'>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
