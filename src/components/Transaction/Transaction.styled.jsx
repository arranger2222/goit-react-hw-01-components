import styled from '@emotion/styled';

export const Td = styled.td`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid #757575;
  text-transform: capitalize;
  color: ${p => p.theme.colors.primaryText};
`;

export const Tr = styled.tr`
  :nth-of-type(2n) {
  background-color: ${p => p.theme.colors.teal};
}
`;