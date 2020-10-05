import styled from 'styled-components'

export const Section = styled.section`
   align-items: center;
   display: flex;
   justify-content: center;
   max-width: 1480px;
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.15rem;
  font-weight: 300;
  margin: 0;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 2.4rem;
    max-width: 1330px;
  }
  
  @media (min-width: 1441px) {
    font-size: 3rem;
    max-width: 1450px;
  }
`;

export const LinkItem = styled.a`
  color: #B8191E;
  font-style: italic;
  text-decoration: none;
  transition: color 250ms ease-in;
  
  &:hover,
  &:focus {
    color: #C4C4C4;
    outline: 0;
  }
`;
