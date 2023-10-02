import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    mix-blend-mode: ${theme.spacings.medium};
  `}
`;
