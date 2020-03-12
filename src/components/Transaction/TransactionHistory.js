import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transaction_history}>
    <thead>
      <tr className={styles.thead_tr}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody className={styles.tbody}>
      {items.length > 0 &&
        items.map(el => (
          <tr key={el.id} className={styles.tbody_tr}>
            <td className={styles.type_td}>{el.type}</td>
            <td className={styles.amount_td}>{el.amount}</td>
            <td className={styles.currency_td}>{el.currency}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
