import React from 'react';
import PropTypes from 'prop-types';
import WrapperStatistic from './StyledStatistics';

const Statistics = ({ props, total, positivePercentage }) => {
  return (
    <WrapperStatistic>
      {Object.keys(props).map(item => (
        <p className="stat" key={item}>
          {item[0].toUpperCase() + item.slice(1)} :
          <span className="statNumber">{props[item]}</span>
        </p>
      ))}
      <p className="stat">Total: {total()}</p>
      <p className="stat">Positive feedback: {positivePercentage()}%</p>
    </WrapperStatistic>
  );
};

Statistics.propTypes = {
  props: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
