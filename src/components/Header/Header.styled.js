import styled from 'styled-components';
import { colors } from '../../app.styled';

export const StyledHeader = styled.header`
  /* background: #b00b69; */
  padding: 20px 50px;
  .logo {
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s linear;
    &:hover {
      color: ${colors.white};
    }
  }
  .icon-container {
    .sun-icon,
    .moon-icon {
      margin: 0 7px;
      cursor: pointer;
      transition: 0.3s linear;
      /* &:hover {
        color: var(--clr-1);
      } */
    }
  }
  .menu-container {
    .menu-item {
      cursor: pointer;
      margin-left: 30px;
      transition: 0.3s linear;
      &:hover {
        color: var(--clr-1);
      }
    }
  }
`;
