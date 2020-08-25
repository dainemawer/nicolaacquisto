import styled from 'styled-components'

export const Section = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const Permalink = styled.a`
  cursor: pointer;
  transition: opacity 250ms ease-in-out;
  padding: 3rem;
  
  &:hover,
  &:focus {
    opacity: 0.65;
  }
`;