import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onBtnClick}) => {
    return (
        <div>
            {options.map(option => (
                <Button
                    type="button"
                    key={option}
                    onClick={() => onBtnClick(option)}>{option}
                </Button>
            ))}
        </div>
    );
};

FeedbackOptions.protoTypes = {
    options: PropTypes.array.isRequired,
    onBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;