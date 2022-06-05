import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';
import Section from './Section/Section'
import Statistics from './Statistics/Statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'



class Feedback extends React.Component{
static defoultState = {
    goodStartValue: 0,
    neutralStartValue: 0,
    badStartValue: 0,
};

static propTypes = {
    
};

state = {
    good: this.props.goodStartValue,
    neutral: this.props.neutralStartValue,
    bad: this.props.badStartValue,
};

onLeaveFeedback = (e) => {
    e.preventDefault();
    const elem = e.target.innerText.toLowerCase();
    this.setState(pervState => ({
        [elem]: pervState[elem] + 1,             
        }))            
}

countTotalFeedback = () =>{
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
}

countPositiveFeedbackPercentage = () =>{
    const {bad} = this.state;
    let positivePercentageCount = 100 - (bad / this.countTotalFeedback() * 100);
    return Math.round(positivePercentageCount);
}
    
render(){
    const {good, neutral , bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
        <div className={s.container}>
            <Section title={"Please leave feedback"}>
                <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.onLeaveFeedback}/> 
                <Statistics 
                    good={good} 
                    neutral={neutral} 
                    bad={bad} 
                    total={total} 
                    positivePercentage={positivePercentage}
                />
            </Section>
        </div>
        );
    };
}

export default Feedback;

