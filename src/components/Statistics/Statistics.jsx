import PropTypes from 'prop-types'
import { StatisticsInfo } from 'components/StatisticsInfo/StatisticsInfo';
// import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import { Title, SectionStatistics, StatisticsUl } from './Statistics.styled';


export const Statistics = ({ data, title }) => {
return (
    <SectionStatistics>
      {title && <Title>{title}</Title>}      

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
        title: PropTypes.string,
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };