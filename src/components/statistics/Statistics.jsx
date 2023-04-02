import PropTypes from 'prop-types';
import { Marker } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Marker>Good: {good}</Marker>
      <Marker>Neutral: {neutral}</Marker>
      <Marker>Bad: {bad}</Marker>
      <Marker>Total: {total}</Marker>
      <Marker>
        Positive percentage:
        <span
          style={
            positivePercentage > 50 ? { color: 'green' } : { color: 'red' }
          }
        >
          {` ${positivePercentage}%`}
        </span>
      </Marker>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
