import styled from "styled-components"

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 23px;
  @media (max-width: 1108px) {
    grid-template-columns: 1fr;
  }
`
export const Scroll = styled.div`
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`
export const Container = styled.div`
  padding: 40px;
`
