import styled from 'styled-components'

export const Grid = styled.div`
  position: relative;

  @supports (display: grid) {
      display: grid;
      grid-template-columns: 1fr;
      
      @media (min-width: 1024px) {
        grid-gap: 3rem;
        grid-template-columns: 3fr 7fr;
      }
  }
  
`;

export const Heading = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 1.625rem;
  font-weight: 400;
  margin: 0 0 0.5rem 0;
  
  @media (min-width: 1281px) {
    font-size: 2rem;
  }
`;

export const Role = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.625rem;
  font-weight: 400;
  font-style: italic;
  margin: 0;
  
  @media (min-width: 1281px) {
    font-size: 2rem;
  }
`;

export const Credits = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.01em;
  margin: 2rem 0 3rem 0;
  
  @media (min-width: 1281px) {
    font-size: 1rem;
  }
`;

export const Content = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 3rem;
  
  @media (min-width: 1281px) {
    font-size: 1rem;
  }
`;

export const Figure = styled.figure`
  display: flex;
  margin: 0 0 3rem 0;
  justify-content: flex-end;
  
  & img {
    max-width: 100%;
    
    @media (min-width: 1024px) {
      max-width: 750px;
    }
    
    @media (min-width: 1440px) {
      max-width: 100%;
    }
  }
`;

export const Back = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin-bottom: 1rem;
  
  @media(min-width: 1024px) {
    margin-bottom: 0;
  }
  
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
