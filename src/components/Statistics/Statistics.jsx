import PropTypes from 'prop-types';
import { StatisticsSection, Title } from './Statistics.styled';

export const Statistics = ({ title, children }) => {
  return (<StatisticsSection>
    {title && <Title>{title}</Title>}    
    {children}
  </StatisticsSection>
  )
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired
}