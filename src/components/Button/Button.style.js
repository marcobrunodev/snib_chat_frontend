import styled, { css } from 'styled-components'

const hasLoading = ({loading}) => loading && css`
  &:hover {
    transition: transform 200ms ease-in-out;
    transform: scale(1);
  }

  &:before {
    transform: translateX(-10%);
  }
`;

const hasFinishLoading = ({finishLoading}) => finishLoading && css`
   &:before {
    transform: translateX(0%);
    transition: transform 200ms linear;
  }
`

const barLoading = css`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-warning);
    transform: translateX(-100%);
    transition: transform 1s linear;
  }
`;

const Content = styled.span`
  position: relative;
  z-index: 1;
`

const Button = styled.button`
  --border-width: var(--gap-smaller);

  position: relative;
  overflow: hidden;
  background-color: var(--color-twitch);
  color: var(--color-white);
  padding: var(--gap-big) var(--gap-bigger);
  font-size: var(--size-button);
  border-style: solid;
  border-width: var(--border-width);
  border-image-slice: 2;
  border-image-width: 2;
  border-image-repeat: stretch;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(200,200,200)" /></svg>');
  border-image-outset: 2;
  border-color: white;
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  ${barLoading};
  ${hasLoading};
  ${hasFinishLoading};
`

export default {
  Button,
  Content
}