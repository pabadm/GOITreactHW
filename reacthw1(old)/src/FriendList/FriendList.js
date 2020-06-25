import React from "react";
import "./FriendList.css";
import PropTypes from "prop-types";

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li
      className={`Friend
    ${isOnline ? " Friend-online" : " Friend-offline"}`}>
      <img className='friend-avatar' alt='friend-avatar' src={avatar} />
      <p className='friend-name'>{name}</p>
    </li>
  );
};
Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

const FriendList = ({ friends }) => {
  return (
    <div className='FriendList-container'>
      <ul className='FriendList-list'>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array,
};
export default FriendList;
