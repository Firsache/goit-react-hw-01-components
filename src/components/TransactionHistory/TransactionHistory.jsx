import PropTypes from 'prop-types';
import { Table, Head, Title, Body, Row, Data } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </tr>
      </Head>
      {items.map(({ type, amount, currency, id }) => {
        return (<Body key={id}>
          <Row>
            <Data>{type}</Data>
            <Data>{amount}</Data>
            <Data>{currency}</Data>
          </Row>
        </Body>)
      })}
    </Table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

