import PropTypes from 'prop-types';

export const StatisticsList = (stats) => {
  console.log(stats);
    return (
      <ul class="stat-list">{stats.map(({ id, label, percentage }) => {
        return (
        <li class="item" key={id}>
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
        )
      })}
    </ul>
  )
};

StatisticsList.propTypes = {
  stats: PropTypes.array.isRequired
  // stats: PropTypes.exact({
  //   id: PropTypes.number.isRequired,
  //   label: PropTypes.string.isRequired,
  //   percentage: PropTypes.number.isRequired
  // })
}