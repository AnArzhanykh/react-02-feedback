import  React, {Component} from 'react';
import Section from './components/Section'
import FeedbackOptions from './components/FeedbackOptions'
import Statistics from './components/Statistics'
import Notification from './components/Notification'
class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (item) =>{
    this.setState(prevState =>({
          [item]: prevState[item] +1
        }))
  }

  render() {
    const {good, neutral, bad} = this.state;  
    const total = good + neutral + bad;
    const positivePercentage = Math.round(good*100/total)


    return (
      <div className="App">
        <Section title="Please leave feedback" state={this.state}>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
          {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} /> : <Notification message="No feedback given" />}
        </Section>
      </div>
    )
  }

}

export default App;
