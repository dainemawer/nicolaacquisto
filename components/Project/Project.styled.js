import styled from 'styled-components'

export const Grid = styled.div`
  position: relative;

  @supports (display: grid) {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr;
      
      @media (min-width: 768px) {
        grid-template-columns: 3fr 7fr;
      }
  }
  
`;

export const Heading = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

export const Role = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
  margin-top: 0;
`;

export const Credits = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.01em;
  margin: 4rem 0 2rem 0;
`;

export const Content = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 3rem;
`;

export const Figure = styled.figure`
  display: flex;
  margin: 0 0 3rem 0;
  justify-content: flex-end;
`;

export const Back = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  
  svg path {
    stroke: #000000;
    transition: stroke 250ms ease-in;
  }
  
  &:hover,
  &:focus {
    outline: 0;
    
    svg path {
      stroke: #D96666;
    }
  }
`;

export const Sticky = styled.section`
  position: static;
  
  @media (min-width: 768px) {
      position: sticky;
      top: 2rem;
  }
  
`;