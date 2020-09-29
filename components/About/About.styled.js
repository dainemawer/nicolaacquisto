import styled from 'styled-components'

export const Section = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1240px) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 3fr 1fr;
    width: 100%;
  }
`;

export const Article = styled.article`
  max-width: 750px;
  position: relative;
  
  @media(min-width: 1440px) {
    max-width: 1000px;
  }
`;

export const Image = styled.img`
  position: absolute;
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 50%;
  visibility: hidden;
  z-index: -1;
  transform: translateX(-50%);
  transition: opacity 250ms ease-in, visibility 250ms ease-in;
  
  @media (min-width: 1024px) {
    left: unset;
    max-width: 65%;
    right: -21rem;
    top: -4.25rem;
  }
  
  @media (min-width: 1281px) {
    right: -6rem;
    top: -2rem;
    left: unset;
    max-width: 50%;
    transform: none;
  }
  
  &.image-is-overlay {
    opacity: 1;
    visibility: visible;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.15rem;
  font-weight: normal;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  white-space: break-spaces;
  
  @media (min-width: 1024px) {
      font-size: 2.125rem;
      margin: 0 0 4rem 0;
      max-width: 1000px;
  }
  
   @media (min-width: 1440px) {
    font-size: 3rem;
    margin: 0 0 4rem 0;
  }
`;

export const Em = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-style: italic;
  padding: 0;
  color: #D9575B !important;
`;

export const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 2rem 2rem 0;
  white-space: break-spaces;
  
  @media (min-width: 768px) {
    font-size: 1.375rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Widget = styled.div`
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Wrap = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  
  @media (min-width: 1240px) {
    justify-content: space-between;
  }
`;

export const List = styled.ul`
  margin-right: 4rem;
  
  @media (min-width: 1240px) {
    margin-right: 0;
  }
`;

export const SkillsItem = styled.li`
  font-size: 0.9375rem;
  line-height: 1.75;
`;

export const WidgetHeading = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Aside = styled.aside`
  width: 100%;
  
  @media(min-width: 1240px) {
    width: auto;
  }
  
`;
