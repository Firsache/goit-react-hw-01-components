import PropTypes from 'prop-types';
export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({ type, amount, currency, id }) => {
        return (<tbody key={id}>
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>)
      })}
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
  // type: PropTypes.string.isRequired,
  // amount: PropTypes.string.isRequired,
  // currency: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired
}
