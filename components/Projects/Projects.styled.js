import styled from 'styled-components'

export const Button = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    transition: color 250ms ease-in;
    padding: 0;
    
    &:hover,
    &:focus {
      color: #E95D62;
      outline: 0;
    }
`;

export const Heading = styled.h1`
  font-family: 'Inter', serif;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.01em;
  
  @media(min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const Seperator = styled.span`
  background-color: #000000;
  display: inline-block;
  margin: 0 1rem;
  height: 1px;
  width: 53px;
  
  @media (min-width: 768px) {
    width: 83px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1rem;
  
  @media(min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 0;
  }
  
  &::after {
    
    @media (min-width: 768px) {
      content: " / ";
      padding: 0 1rem;
    }
  }
`;

export const LinkItem = styled.a`
  color: #000000;
  transition: color 250ms ease-in;
  text-decoration: none;
  
  &:hover,
  &:focus {
    color: #E95D62;
    outline: 0;
  }
`;

export const Sup = styled.sup`
  display: inline-block;
  font-size: 1.25rem;
  margin-left: 0.5rem;
  
  @media(min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  
  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const IsoTope = styled.ul`
  align-items: center;
  display: flex;
`;

export const IsoTopeItem = styled.li`
  font-family: 'Inter', serif;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.01em;
  margin: 0 1rem 0 0;
  
  @media(min-width: 768px) {
    font-size: 1rem;
  }
  
  &.is-active ${Button} {
    color: #E95D62;
  }
`;