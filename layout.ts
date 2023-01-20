import React from 'react';
import styled from 'styled-components';
export const DesktopContainer = styled.div`
  @media (max-width: 768px) {
    display: none !important;
  }
`;
export const MobileContainer = styled.div`
  @media (min-width: 769px) {
    display: none !important;
  }
`;
