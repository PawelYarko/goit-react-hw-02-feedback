import React from 'react';
import PropTypes from 'prop-types';
import s from '../Feedback.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) =>{
    return (
        options.map(option =>
            <button type="button" className={s.button} onClick={onLeaveFeedback}>{option}</button>
        )
    )
}

export default FeedbackOptions;