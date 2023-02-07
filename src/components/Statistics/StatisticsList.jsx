import PropTypes from 'prop-types';
import { StatsList, StatsItem } from './Statistics.styled';

export const StatisticsList = ({ stats }) => {
    return (
      <StatsList>{stats.map(({ id, label, percentage }) => {
        return (
        <StatsItem key={id}>
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
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
}