import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './StatisticsInfo.styled';

export const StatisticsInfo = ({  label, percentage }) => 
{    
return (
<Item>
  <Label>{label}</Label>
  <Percentage>{percentage}</Percentage>
</Item>
)
}


StatisticsInfo.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};