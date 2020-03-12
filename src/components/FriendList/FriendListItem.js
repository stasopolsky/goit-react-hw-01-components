import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ friend, alt }) => (
  <li className={styles.item}>
    <span
      className={friend.isOnline === true ? styles.onLine : styles.offLine}
    />
    <img className={styles.avatar} src={friend.avatar} alt={alt} width="48" />
    <p className={styles.name}>{friend.name}</p>
  </li>
);

FriendListItem.defaultProps = {
  friend: {},
  alt: 'avatar',
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
  alt: PropTypes.string,
};

export default FriendListItem;
