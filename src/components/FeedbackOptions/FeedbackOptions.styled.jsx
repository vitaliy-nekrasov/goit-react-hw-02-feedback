import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  margin-bottom: ${p => p.theme.space[4]};
`;
export const Item = styled.li`
  & :last-child {
    margin-right: ${p => p.theme.space[3]};
  }
`;
export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  width: ${p => p.theme.space[7]};
  height: ${p => p.theme.space[6]};
  line-height: ${p => p.theme.space[4]};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.space[5]};
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: ${p => p.theme.space[2]};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.black};
  background: ${p => p.theme.colors.white};
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${({ children, theme }) => {
      switch (children) {
        case 'good': {
          return theme.colors.green;
        }
        case 'neutral': {
          return theme.colors.yellow;
        }
        case 'bad': {
          return theme.colors.red;
        }
        default:
          return theme.colors.white;
      }
    }};
    box-shadow: 0 15px 20px rgba(56, 66, 62, 0.606);
    transform: translateY(-7px);
  }
`;
