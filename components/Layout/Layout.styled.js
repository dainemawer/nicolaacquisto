import styled from 'styled-components'

export const Main = styled.main`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: calc(100% - 172px);
  padding: 2rem;
  
  &.projects {
    height: calc(100% - 172px);
  
    @media (min-width: 1240px) {
        height: auto;
      }
  }
`;