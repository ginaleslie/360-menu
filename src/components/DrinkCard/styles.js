import styled from "styled-components"

export const Card = styled.div`
  background: ${props => props.theme.colors.white};
  border: 1px solid #f2f2f2;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  max-width: 200px;
  &:hover {
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.3);
  }
`
export const Favorite = styled.button`
  position: absolute;
  border: none;
  left: 10px;
  outline: none;
  top: 10px;
  &::active {
    outline: none;
  }
`

export const Count = styled.div`
  padding-top: ${props => props.theme.padding.xsmall};
  padding-bottom: ${props => props.theme.padding.xsmall};
  display: flex;
  align-items: center;
`

export const Top = styled.div`
  padding: 15px 12px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Line = styled.div`
  background: #e9e9e9;
  height: 1px;
  width: 100%;

  margin-top: 37px;
`
