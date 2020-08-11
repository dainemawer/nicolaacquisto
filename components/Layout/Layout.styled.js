import styled from 'styled-components'

export const Main = styled.main`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: auto;
  padding: 2rem;
  
  @media (min-width: 1240px) {
    height: calc(100% - 172px);
  }
  
  &.projects {
    @media (min-width: 1240px) {
        height: auto;
      }
  }
`;