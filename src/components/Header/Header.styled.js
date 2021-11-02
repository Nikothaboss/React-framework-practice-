import styled from 'styled-components';
import { colors } from '../../app.styled';

export const StyledHeader = styled.header`
  /* background: #b00b69; */
  padding: 20px 50px;
  position: relative;
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
    }
  }
  .menu-container {
    .menu-item {
      cursor: pointer;
      margin-left: 30px;
    }
    .hamburger {
      z-index: 99;
    }
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100%;
      background: #000;
      z-index: 9;
    }
    .mobile-menu {
      position: fixed;
      top: 0;
      height: 100vh;
      width: 40%;
      z-index: 9;
      overflow: hidden;
      .mobile-menu-item {
        margin-top: 1rem;
        padding: 0.5rem;
        padding-left: 1rem;
      }
    }
  }
`;
