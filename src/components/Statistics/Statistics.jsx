import PropTypes from 'prop-types'
import { StatisticsInfo } from 'components/StatisticsInfo/StatisticsInfo';
import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import { SectionStatistics, StatisticsUl } from './Statistics.styled';


export const Statistics = ({ data }) => {
return (
    <SectionStatistics>
      <StatisticsTitle title="Upload stats"/>
        <StatisticsUl>           
          {data.map(item => (
          <StatisticsInfo
            key={item.id}
            label={item.label}
            percentage={item.percentage}
            />
            ))}       
        </StatisticsUl>
    </SectionStatistics>)
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };