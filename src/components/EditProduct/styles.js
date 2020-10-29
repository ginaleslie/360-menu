import styled from "styled-components"

export const SideBar = styled.div`
  background: ${props => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow-x: hidden;
  min-width: 400px;
  position: relative;
`
export const Scroll = styled.div`
  overflow-y: scroll;
  margin: 0;
  height: inherit;
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
export const PaddingImage = styled.div`
  padding: 0 0 14px 50px;

  position: relative;
`

export const PaddingContet = styled.div`
  padding: 40px;
`

export const Input = styled.input`
  margin-top: 16px;
  width: 100%;
  color: white;
  border-radius: 3px;
  padding: 10px;
  background: none;
  outline: none;
  border: 1px solid gray;
`

export const CloseBtn = styled.button`
  position: absolute;
  outline: none;
  border: none;
  top: 10px;
  left: 10px;
`

export const Line = styled.div`
  background: #333333;
  height: 1px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 16px;
`
