import React, { useContext, useState, useEffect } from "react"
import {
  SideBar,
  Line,
  Scroll,
  CloseBtn,
  PaddingImage,
  PaddingContet,
  NoPadding,
  Input,
} from "./styles"
import CartBtn from "../CartBtn"
import ProductsContext from "../../context/Products"
import CartContext from "../../context/Cart"
import Heading from "../Heading"
import ProductImage from "../ProductImage"
import Icon from "../Icon"
import Copy from "../Copy"
import SubHeading from "../SubHeading"
import ProductIcon from "../ProductIcon"

const EditProduct = () => {
  const { activeProduct, activeCategory, setActiveProduct } = useContext(
    ProductsContext
  )
  const { addToOrders } = useContext(CartContext)
  const [note, setNote] = useState("")
  // const updateNote = e => setNote(e.target.value)
  console.log(addToOrders)

  return (
    <SideBar>
      <PaddingImage>
        {Boolean(activeProduct?.images?.[0].thumbnails.large) ? (
          <ProductImage
            source={activeProduct?.images?.[0].thumbnails.large.url}
            alt={name}
            maxWidth="widthCart"
            minWidth="minCart"
            borderRad="borderCart"
            maxHeight="heightCart"
          />
        ) : null}
      </PaddingImage>
      <Scroll>
        <PaddingContet>
          <CloseBtn onClick={() => setActiveProduct(null)}>
            <Icon name="CROSS" />
          </CloseBtn>
          <Heading color="white" paddingBtm="small">
            {activeProduct.name}
          </Heading>
          <Copy size="small">{activeProduct.description}</Copy>
          <Line />

          <div>
            <SubHeading color="white">Special Instructions</SubHeading>
            <Input
              onChange={e => setNote(e.target.value)}
              placeholder="Add a note (e.g. no onions, extra sauce)"
            />
          </div>
        </PaddingContet>
      </Scroll>
      <CartBtn
        click={() => {
          if (note !== "") {
            addToOrders({ ...activeProduct, type: "new", note: note })
            setActiveProduct(null)
          } else {
            addToOrders({ ...activeProduct, type: "new", note: "-" })
            setActiveProduct(null)
          }
        }}
      >
        Add to cart
      </CartBtn>
    </SideBar>
  )
}
export default EditProduct
