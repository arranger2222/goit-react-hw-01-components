import styled from '@emotion/styled';
import getRandomColor from '../../utilities/randomColor';

export const Item = styled.li`
  width: calc((100% / 5) - 30px);
  display: flex;
  flex-direction: column;
  padding: 10px 4px;
  border-radius: 5px;
  :not(:last-child) {
  border-right: 1px solid #d4d7da;
}
 background-color: ${getRandomColor};
`;

export const Label = styled.span`
  margin-bottom: 8px;
  font-size: 16px;
  color: ${p => p.theme.colors.black};
`;

export const Percentage = styled.span`
  font-size: 24px;
  color: ${p => p.theme.colors.black};
`;