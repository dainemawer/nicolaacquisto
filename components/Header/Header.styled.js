import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;



export const LinkItem = styled.a`
  color: #000000;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  text-decoration: none;
  transition: color 250ms ease-in;
  
  &:hover,
  &:focus {
    color: #d96666;
    outline: 0;
  }
`;

export const ListItem = styled.li`
  margin-right: 2rem;
  
  &:last-child {
    margin-right: 0;
  }
  
  &.active {
  
    & ${LinkItem} {
      color: #d96666;
    }
  }
`;

export const Nav = styled.nav`
  position: relative;
  top: -4px;
  
  @media(min-width: 768px) {
    position: static;
  }
`;

export const LogoLink = styled.a`
  cursor: pointer;
  display: block;
  height: 18px;
`;
