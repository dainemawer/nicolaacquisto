import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 1.625rem;
  font-weight: 400;
  margin-top: 0;
`;

export const Role = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.625rem;
  font-style: italic;
  font-weight: 400;
`;

export const Description = styled.div`

  p {
      font-family: 'Inter', sans-serif;
      font-size: 1.375rem;
      line-height: 1.5;
      margin-bottom: 3rem;
      margin-top: 2rem;
      
      @media (min-width: 1024px) {
        margin-bottom: 0;
      }
  }
  
`;

export const CreditTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin: 0 0 3rem 0;
  text-transform: uppercase;
`;

export const DefinitionTitle = styled.dt`
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
`;

export const DefinitionGrid = styled.dl`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3rem;
  
  @media (min-width: 1024px) {
    margin-bottom: 5rem;
  }
`;

export const DefinitionDescription = styled.dd`
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  margin-left: 0;
`;

export const WorkLink = styled.a`
  color: #000000;
  font-family: 'Inter', sans-serif;
  font-size: 1.375rem;
  text-decoration: none;
  transition: color 250ms ease-in-out;
  
  svg path {
    stroke: #000000;
    transition: stroke 250ms ease-in-out;
  }
  
  &:hover,
  &:focus {
    color: #b8191e;
    outline: 0;
    
    svg path {
      stroke: #b8191e;
    }
  }
`;

export const Quote = styled.blockquote`
  font-size: 2.125rem;
  line-height: 1.5;
  margin: 0 auto 3rem auto;
  max-width: 415px;
  
  @media(min-width: 1024px) {
    margin: 0 auto;
  }
  
  p {
    font-family: 'Playfair Display', serif;
    margin: 0;
  }
`;

export const Side = styled.div`

  p {
      font-family: 'Inter', sans-serif;
      font-size: 1.375rem;
      line-height: 1.5;
      
      &:first-child {
        margin-top: 0;
      }
  }
`;

export const Grid = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem 0;
  
  @media(min-width: 1024px) {
    flex-direction: row;
    margin: 4rem 0;
  }
  
  article {
    flex: 0 1 100%;
    
    @media(min-width: 1024px) {
      flex: 0 1 50%;
    }
  }
  
  aside {
      flex: 0 1 100%;
      
      @media(min-width: 1024px) {
          flex: 0 1 30%;
      }
  }
`;

export const GridDescription = styled.section`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem 0;
    
    @media(min-width: 1024px) {
        flex-direction: row;
        margin: 4rem 0;
    }

    article {
        flex: 0 1 100%;
        
         @media(min-width: 1024px) {
          flex: 0 1 50%;
        }
    }

    aside {
        flex: 0 1 100%;
        
        @media(min-width: 1024px) {
          flex: 0 1 50%;
        }
    }
`

export const Figure = styled.figure`
  line-height: 0;
  left: 50%;
  margin-bottom: 0;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 0;
  max-width: 100vw;
  position: relative;
  right: 50%;
  width: 100vw;
`;
