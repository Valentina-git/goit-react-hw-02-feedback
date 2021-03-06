import React from 'react';
import PropTypes from 'prop-types';
import WrapperFeedback from './StyledFeedback';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <WrapperFeedback>
      {Object.keys(options).map(item => (
        <button
          className="feedback-btn"
          onClick={onLeaveFeedback}
          type="button"
          key={item}
          name={item}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </WrapperFeedback>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
