import styled from 'styled-components'

export const Footer = styled.footer`
  align-items: center;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-right: 2rem;
  
  &:last-child {
    margin-right: 0;
  }
`;

export const LinkItem = styled.a`
  display: block;
  color: #000000;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  text-decoration: none;
  transition: color 250ms ease-in-out;
  
  svg path {
    transition: fill 250ms ease-in-out;
  }
  
  &:hover,
  &:focus {
    color: #d96666;
    outline: 0;
    
    svg path {
      fill: #d96666;
    }
  }
`;
