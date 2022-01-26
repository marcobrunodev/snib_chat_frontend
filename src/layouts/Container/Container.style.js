import styled, { css } from "styled-components"

const hasCenter = ({center}) => center && css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
` 

const Container = styled.div`
  ${hasCenter};
`

export default {
  Container
}