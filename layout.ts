import styled from 'styled-components';
export const DesktopContainer = styled.div`
  @media (max-width: 1025px) {
    display: none !important;
  }
`;
export const MobileContainer = styled.div`
  @media (min-width: 961px) {
    display: none !important;
  }
`;