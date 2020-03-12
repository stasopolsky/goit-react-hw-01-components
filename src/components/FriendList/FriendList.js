import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friend__list}>
    {friends.length > 0 &&
      friends.map(el => <FriendListItem key={el.id} friend={el} />)}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FriendList;
