import styled, { css } from "styled-components"
import {Loading} from "../../components/Loading/Loading.style"

const hasCenter = ({center}) => center && css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: var(--gap-big);
` 

const Container = styled.div`
  position: relative;

  & > ${Loading} {
    position: absolute;
    bottom: var(--gap-bigger);
  }

  ${hasCenter};
`

export default {
  Container
}