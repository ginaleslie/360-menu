import React, { useContext } from "react"
import { SideBar, Line, Padding, Fixed, Styled } from "./styles"
import CartContext from "../../context/Cart"
import ActiveOrders from "../ActiveOrders"
import NewOrders from "../NewOrders"
import CartBtn from "../CartBtn"
import Heading from "../Heading"

const Cart = ({ removeProduct }) => {
  const {
    newOrders,
    setNewOrders,
    setActiveOrders,
    activeOrders,
    updateNewOrdersToActive,
    orders,
  } = useContext(CartContext)

  // const setOrder = () => {
  //   if (activeOrders.length === 0) {
  //     setActiveOrders(newOrders)
  //   } else {
  //     setActiveOrders(current => [...current, newOrders].flat())
  //     // setTotal(current => current + product.unitCost)
  //   }

  //   setNewOrders([])
  // }
  // console.log(activeOrders)

  return (
    <div>
      <SideBar>
        <Fixed>
          <Padding>
            <Heading color="white" paddingBtm="xlarge">
              Order Summary
            </Heading>
            <Line />
          </Padding>
        </Fixed>

        <Styled>
          <ActiveOrders />

          <NewOrders />
        </Styled>
      </SideBar>
      <CartBtn
        disabled={orders.length === 0}
        click={() => updateNewOrdersToActive()}
      >
        Order Items
      </CartBtn>
    </div>
  )
}

export default Cart
