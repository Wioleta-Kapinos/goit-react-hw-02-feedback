import React, { Component } from "react"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = event => {
    if (event.target.textContent === "Good") {
      this.setState({good: this.state.good + 1});
    }
    if (event.target.textContent === "Neutral") {
      this.setState({neutral: this.state.neutral + 1});
    }
    if (event.target.textContent === "Bad") {
      this.setState({bad: this.state.bad + 1});
    }
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
      return total;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const {good} = this.state;
      return Math.round((good / total) * 100);
  }

  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback =this.countPositiveFeedbackPercentage();
      return (
          <div className="App">
            <Section title="&#128073; Please leave feedback &#128072;">
              <FeedbackOptions
                onLeaveFeedback = {this.onLeaveFeedback}
              />
            </Section>
            <Section title="Statistics">
              <Statistics
                good= {good}
                neutral= {neutral}
                bad= {bad}
                total= {total}
                positiveFeedback= {positiveFeedback}
              />
            </Section>
          </div>
      );
  }
}