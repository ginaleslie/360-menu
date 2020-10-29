import React, { useContext } from "react"
import { Button } from "./styles"
import CartContext from "../../context/Cart"

const CartBtn = ({ children, click }) => {
  return (
    <Button type="button" onClick={click}>
      {children}
    </Button>
  )
}

export default CartBtn
