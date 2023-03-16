import css from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <div className={css.buttons}>
            <button className={css.btn}
            type="button"
            onClick= {onLeaveFeedback}>Good</button>
            <button className={css.btn}
            type="button"
            onClick= {onLeaveFeedback}>Neutral</button>
            <button className={css.btn}
            type="button"
            onClick= {onLeaveFeedback}>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;