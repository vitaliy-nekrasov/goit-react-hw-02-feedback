import React, { Component } from 'react';

export class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerButton = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <p>Please leave feedback</p>
        <ul>
          {options.map((option, index) => {
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => {
                    this.handlerButton(option);
                  }}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
        <p>Statistics</p>
        <ul>
          <li>
            <p>Good: {this.state.good}</p>
          </li>
          <li>
            <p>Neutral: {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.state.bad}</p>
          </li>
          <li>
            <p>Total: {this.countTotalFeedback()}</p>
          </li>
          <li>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </li>
        </ul>
      </div>
    );
  }
}
