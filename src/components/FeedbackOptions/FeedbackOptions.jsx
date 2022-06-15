import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) =>{
    return (
        options.map(option =>
            <button type="button" className={s.button} onClick={onLeaveFeedback} key={option}>{option}</button>   
        )
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;