import styled from 'styled-components';
import { colors } from '../../app.styled';

export const StyledHeader = styled.header`
  padding: 20px 50px;
  overflow: hidden;
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
    z-index: 99;
    .sun-icon,
    .moon-icon {
      margin: 0 7px;
      cursor: pointer;
      transition: 0.3s linear;
    }
  }
  .menu-container {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    .menu-item {
      cursor: pointer;
      width: 100%;
      transition: linear 0.3s;
      &:hover {
        opacity: 0.6;
      }
      @media (min-width: 900px) {
        font-size: 0.7rem;
      }
      @media (min-width: 1150px) {
        font-size: 1rem;
      }
    }
    .hamburger {
      z-index: 99;
      cursor: pointer;
      margin-left: auto;
      .line {
        height: 2px;
        width: 20px;
        margin: 4px 0;
        border-radius: 10px;
      }
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
