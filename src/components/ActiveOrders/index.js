import React, { useContext } from "react"
import { Button, Padding, Line, Box, BoxTwo } from "./styles"
import CartContext from "../../context/Cart"
import SubHeading from "../SubHeading"
import Heading from "../Heading"
import Copy from "../Copy"
import Icon from "../Icon"
import Price from "../Price"

const ActiveOrders = () => {
  const { orders } = useContext(CartContext)

  return (
    <Padding>
      <SubHeading color="white" paddingBtm="medium">
        {orders.filter(order => order.type === "active").length} Active orders
      </SubHeading>

      {orders
        .filter(order => order.type === "active")
        .map((product, index) => {
          return (
            <div key={`${product.name}_${index}`}>
              <Box>
                <div>
                  <Heading color="grayOne" size="large" paddingBtm="small">
                    {product.name}
                  </Heading>
                  <Copy color="grayOne">{product.description}</Copy>
                </div>
                <Button>
                  <Icon name="TIME" color="primary" size="medium" />
                </Button>
              </Box>
              <BoxTwo>
                <Price color="grayOne" amount={product.unitCost}></Price>
              </BoxTwo>
              <Line />
            </div>
          )
        })}
    </Padding>
  )
}

export default ActiveOrders
