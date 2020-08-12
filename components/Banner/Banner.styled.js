import styled from 'styled-components'

export const Section = styled.section`
   align-items: center;
   display: flex;
   justify-content: center;
   max-width: 1480px;
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 300;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const LinkItem = styled.a`
  color: #E95D62;
  font-style: italic;
  text-decoration: none;
  transition: color 250ms ease-in;
  
  &:hover,
  &:focus {
    color: #C4C4C4;
    outline: 0;
  }
`;