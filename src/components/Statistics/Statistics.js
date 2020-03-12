import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomColor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${x}, ${y}, ${z})`;

  return bgColor;
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.length > 0 &&
        stats.map(item => (
          <li
            className={styles.item}
            style={{ backgroundColor: getRandomColor() }}
            key={item.id}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}&#37;</span>
          </li>
        ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  stats: {},
  title: '',
};

Statistics.ropTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
