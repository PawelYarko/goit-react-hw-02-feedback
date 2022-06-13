import React from 'react';
import Notification from './Notification'
import PropTypes from 'prop-types';
import s from '../Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
    return (
        <div>
            <h2>Statistics</h2>
            {<Notification message="There is no feedback"/> &&
            <ul className={s.statsList}>
                <li className={s.item}>Good: {good}</li>
                <li className={s.item}>Neutral: {neutral}</li>
                <li className={s.item}>Bad: {bad}</li>
                <li className={s.item}>Total: {total}</li>
                <li className={s.item}>Positive feedback: {positivePercentage}%</li>
            </ul>} 
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number
}

export default Statistics;

 