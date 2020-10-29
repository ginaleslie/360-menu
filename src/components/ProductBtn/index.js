import React, { useContext } from "react"
import { Button } from "./styles"
import Icon from "../Icon"
import ProductsContext from "../../context/Products"

const ProductBtn = ({ product }) => {
  const { setActiveProduct } = useContext(ProductsContext)
  return (
    <Button onClick={() => setActiveProduct(product)} className="addProductBtn">
      <Icon name="PLUS" size="small" />
    </Button>
  )
}

export default ProductBtn
