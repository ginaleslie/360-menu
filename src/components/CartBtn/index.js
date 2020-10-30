import React, { useContext } from "react"
import { Button } from "./styles"

const CartBtn = ({ children, click }) => {
  return (
    <Button type="button" onClick={click}>
      {children}
    </Button>
  )
}

export default CartBtn
