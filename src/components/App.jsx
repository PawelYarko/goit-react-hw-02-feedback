import React from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import s from './App.module.css';


export default class App extends React.Component{ 
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  };
  
  onLeaveFeedback = (e) => {
      e.preventDefault();
      const elem = e.target.innerText.toLowerCase();
      this.setState(pervState => ({
          [elem]: pervState[elem] + 1,             
          }))            
  }
  
  countTotalFeedback = () =>{
    //   const { good, neutral, bad } = this.state;
    //   let total = good + neutral + bad;
    //   return total;
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }
  
  countPositiveFeedbackPercentage = () =>{
      const {bad} = this.state;
      let percentageCount = 100 - (bad / this.countTotalFeedback() * 100);
      return Math.round(percentageCount);
  }
      
  render(){
    const {good, neutral , bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    const stats = Object.entries(this.state)

    // console.log(options)
    return (
        <div className={s.container}>
            <Section title={"Please leave feedback"}>
                <FeedbackOptions 
                options={options} 
                onLeaveFeedback={this.onLeaveFeedback}
                /> 
                <Statistics 
                  stats={stats}
                  total={total} 
                  positivePercentage={positivePercentage}
                />
            </Section>
        </div>
        );
    };
}
