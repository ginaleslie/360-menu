import React, { useContext } from "react"
import { Button, Padding, Line, Box, BoxTwo } from "./styles"
import CartContext from "../../context/Cart"
import SubHeading from "../SubHeading"
import Heading from "../Heading"
import Copy from "../Copy"
import Icon from "../Icon"
import Price from "../Price"

const NewOrders = () => {
  const { orders, removeOrderAtIndex } = useContext(CartContext)
  return (
    <Padding>
      <SubHeading color="white" paddingBtm="medium">
        {orders.filter(order => order.type === "new").length} New orders
      </SubHeading>

      {orders
        .filter(order => order.type === "new")
        .map((product, index) => {
          return (
            <div key={`${product.name}_${index}`}>
              <Box>
                <div>
                  <Heading color="white" size="large" paddingBtm="small">
                    {product.name}
                  </Heading>
                  <Copy color="grayThree">{product.description}</Copy>
                </div>
                <Button onClick={() => removeOrderAtIndex(index)}>
                  <Icon name="TRASH" color="white" size="medium" />
                </Button>
              </Box>
              <BoxTwo>
                <Copy>{}</Copy>
                <Price color="white" amount={product.unitCost}></Price>
              </BoxTwo>
              <Line />
            </div>
          )
        })}
    </Padding>
  )
}

export default NewOrders
