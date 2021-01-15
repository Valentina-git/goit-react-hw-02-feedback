import React, { Component } from 'react';
import FeedbackOptions from '../feedback/FeedbackOptions';
import Section from '../section/Section';
import Statistics from '../statistic/Statistics';
import Notification from '../notification/Notification';
import WrapperFeedbackStatistic from './styledFeedbackStatistic';

class FeedbackStatistic extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };
  handleIncreament = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    return (
      <WrapperFeedbackStatistic>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleIncreament}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              props={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </WrapperFeedbackStatistic>
    );
  }
}

export default FeedbackStatistic;
