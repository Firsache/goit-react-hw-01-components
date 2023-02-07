import PropTypes from 'prop-types';

export const StatisticsList = ({ stats }) => {
    return (
      <ul className="stat-list">{stats.map(({ id, label, percentage }) => {
        return (
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
        )
      })}
    </ul>
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