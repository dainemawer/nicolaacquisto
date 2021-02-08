import styled from "styled-components"

export const Section = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 1480px;
`

export const Title = styled.h1`
  font-family: "Playfair Display", serif;
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

  @media (min-width: 1540px) {
    font-size: 3rem;
    max-width: 1475px;
  }
`

export const LinkItem = styled.a`
  color: #d96666;
  font-style: italic;
  text-decoration: none;
  transition: opacity 250ms ease-in;

  &:hover,
  &:focus {
    opacity: 0.65;
    outline: 0;
  }
`
