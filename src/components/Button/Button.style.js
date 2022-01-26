import styled from 'styled-components'

const Button = styled.button`
  background-color: var(--color-twitch);
  color: var(--color-white);
  padding: var(--gap-big) var(--gap-bigger);
  font-size: var(--size-button);
  border-style: solid;
  border-width: var(--gap-smaller);
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
`

export default {
  Button
}