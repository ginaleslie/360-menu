import styled from "styled-components"

export const SideBar = styled.div`
  background: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 71px);
  overflow-y: scroll;
  min-width: 400px;
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
export const Fixed = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(16, 16, 16, 1),
    rgba(20, 20, 20, 1),
    rgba(21, 21, 21, 1),
    rgba(25, 25, 25, 1),
    rgba(34, 34, 34, 1),
    rgba(34, 34, 34, 0.2)
  );
  position: sticky;
  z-index: 60;
  top: 0;
  width: 100%;
  padding-top: 40px;
`
export const Padding = styled.div`
  padding: 0 40px 14px 40px;
`
export const Styled = styled.div`
  height: inherit;
`

export const Line = styled.div`
  background: #333333;
  height: 1px;
  width: 100%;
  margin-bottom: 10px;
`
