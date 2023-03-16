import Notification from "components/Notification/Notification";
import css from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    if (total === 0) {
        return  <Notification message="There is no feedback." />
    }
    return (
        <div className={css.stats}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positiveFeedback}%</p>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback: PropTypes.number, 
}

export default Statistics;