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

export const ListItem = styled.li`
  margin-right: 1rem;
  
  &:last-child {
    margin-right: 0;
  }
`;

export const LinkItem = styled.a`
  color: #000000;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  text-decoration: none;
`;