import React, { Component } from 'react';
import './FeedbackWidget.css';

class FeedbackWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: { good: 0, neutral: 0, bad: 0 },
    };
  }

  handleFeedback = type => {
    this.setState(prevState => ({
      feedback: {
        ...prevState.feedback,
        [type]: prevState.feedback[type] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.feedback;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state.feedback;
    return total === 0 ? 0 : (good / total) * 100;
  };

  render() {
    const { feedback } = this.state;
    return (
      <div className="container">
        <h1>Feedback Widget</h1>
        <div className="button-container">
          <button
            className="button"
            onClick={() => this.handleFeedback('good')}
          >
            Good
          </button>
          <button
            className="button"
            onClick={() => this.handleFeedback('neutral')}
          >
            Neutral
          </button>
          <button className="button" onClick={() => this.handleFeedback('bad')}>
            Bad
          </button>
        </div>
        {this.countTotalFeedback() > 0 ? (
          <div className="statistics-container">
            <h2>Statistics</h2>
            <div className="statistics-item">Good: {feedback.good}</div>
            <div className="statistics-item">Neutral: {feedback.neutral}</div>
            <div className="statistics-item">Bad: {feedback.bad}</div>
            <div className="statistics-item">
              Total Feedback: {this.countTotalFeedback()}
            </div>
            <div className="statistics-item">
              Positive Feedback Percentage:{' '}
              {this.countPositiveFeedbackPercentage().toFixed(2)}%
            </div>
          </div>
        ) : (
          <p>No feedback given yet</p>
        )}
      </div>
    );
  }
}

export default FeedbackWidget;
