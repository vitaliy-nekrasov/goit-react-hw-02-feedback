import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.styled';

export function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  return (
    <List>
      {options.map((option, index) => {
        return (
          <Item key={index}>
            <Button
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </Button>
          </Item>
        );
      })}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
