import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';
import Statistics from './Statistics/Statistics'



class Feedback extends React.Component{
static defoultState = {
    goodStartValue: 0,
    neutralStartValue: 0,
    badStartValue: 0,
};

state = {
    good: this.props.goodStartValue,
    neutral: this.props.neutralStartValue,
    bad: this.props.badStartValue,
};

onBtnGoodClick = () => {
    this.setState(pervState => {
        return {
            good: pervState.good + 1, 
        };      
    })
}

onBtnNeutralClick = () => {
    this.setState(pervState => {
        return {
            neutral: pervState.neutral + 1, 
        };      
    })
}

onBtnBadClick = () => {
    this.setState(pervState => {
        return {
            bad: pervState.bad + 1, 
        };      
    })
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
            <h1>Please leave feedback</h1>
            <div>
                <button className={s.button} onClick={this.onBtnGoodClick}>Good</button>
                <button className={s.button} onClick={this.onBtnNeutralClick}>Neutral</button>
                <button className={s.button} onClick={this.onBtnBadClick}>Bad</button>
            </div>
            <Statistics 
                good={good} 
                neutral={neutral} 
                bad={bad} 
                total={total} 
                positivePercentage={positivePercentage}
            />
        </div>
        );
    };
}

export default Feedback;

