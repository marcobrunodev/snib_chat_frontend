import styled, { css } from 'styled-components';
import coffee from '../../assets/images/coffee_happy.gif'

const hasActive = ({active}) => active && css`
  transform: translateY(0);
  opacity: 1;
` 

export const Image = styled.img.attrs({
  src: coffee, 
  alt: 'Gif mostrando que está carregando algo da aplicação'
})``

export const Figcaption = styled.figcaption`
  color: var(--color-white);
  font-size: var(--size-small);
`

export const Loading = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-small);
  opacity: 0;
  transition: transform 600ms ease-in-out, opacity 300ms ease-in-out;
  transform: translateY(-20%);
  z-index: -1;

  ${hasActive};
`

export default {
  Loading,
  Image,
  Figcaption
}