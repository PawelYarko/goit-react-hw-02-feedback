import React from 'react';
import PropTypes from 'prop-types';
import s from '../Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <h2>Statistics</h2>
            <ul className={s.statsList}>
                <li className={s.item}>Good: {good}</li>
                <li className={s.item}>Neutral: {neutral}</li>
                <li className={s.item}>Bad: {bad}</li>
                <li className={s.item}>Total: {total}</li>
                <li className={s.item}>Positive feedback: {positivePercentage}%</li>
            </ul> 
        </div>
    )
}

export default Statistics;

 