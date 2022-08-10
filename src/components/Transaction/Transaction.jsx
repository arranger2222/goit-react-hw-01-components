import PropTypes from 'prop-types';
import { Td, Tr } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
    return (
        <Tr>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
        </Tr>
    )
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};