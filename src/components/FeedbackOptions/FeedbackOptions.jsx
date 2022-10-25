import PropTypes from 'prop-types';

export function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  return (
    <ul>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <button
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
