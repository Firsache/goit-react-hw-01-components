import PropTypes from 'prop-types';
import { StatsList, StatsItem } from './Statistics.styled';
import { generateRandomColor } from 'utils/RandomColor';

export const StatisticsList = ({ stats }) => {
  return (
    <StatsList>{stats.map(({ id, label, percentage }) => {
      const randomColor = generateRandomColor();
        return (
        <StatsItem key={id} backgroundColor={randomColor}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </StatsItem>
        )
      })}
    </StatsList>
  )
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}