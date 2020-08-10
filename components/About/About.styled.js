import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  width: 100%;
  
  @media (min-width: 1240px) {
    grid-template-columns: 3fr 1fr;
  }
`;

export const Article = styled.article`
  max-width: 1030px;
  position: relative;
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
  max-width: 100%;
  
  @media (min-width: 1240px) {
    right: -3rem;
    top: -2rem;
    left: unset;
    max-width: 385px;
    transform: none;
  }
  
  &.image-is-overlay {
    opacity: 1;
    visibility: visible;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: normal;
  line-height: 1.2;
  margin: 0 0 4rem 0;
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
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  
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
  font-size: 1.125rem;
  line-height: 1.75;
`;

export const WidgetHeading = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;