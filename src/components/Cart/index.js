import React, { useContext, useState } from "react"
import CartContext from "../../context/Cart"

function getTotal(total) {
  if (total < 0) {
    total *= -1
  }
  return total
}

const Cart = () => {
  const { cart, total, setCart, setTotal } = useContext(CartContext)
  const [pastOrders, setPastOrders] = useState([])

  const remove = product => {
    setCart(current => current.filter(index => index !== product))
    setTotal(current => current - product.price)
  }

  const order = () => {
    if (pastOrders.length === 0) {
      setPastOrders(cart)
    } else {
      setPastOrders(current => [...current, cart].flat())
    }
    setCart([])
  }
  console.log(pastOrders)

  return (
    <div>
      <h1>Cart</h1>

      <div>Total: {getTotal(total)}</div>
      <div>
        <h2>Active orders {pastOrders.length}</h2>

        {pastOrders.map((product, index) => {
          return (
            <ul key={`${product.name}_${index}`}>
              <li>{product.name}</li>
              <li>{product.price}</li>
            </ul>
          )
        })}
      </div>
      <div>
        <h2>New orders {cart.length}</h2>

        {cart.map((product, index) => {
          return (
            <ul key={`${product.name}_${index}`}>
              <li>{product.name}</li>
              <li>{product.price}</li>
              <button onClick={() => remove(product)}>Remove</button>
            </ul>
          )
        })}
        <button
          type="button"
          disabled={cart.length === 0}
          onClick={() => order()}
        >
          Order items
        </button>
      </div>
    </div>
  )
}

export default Cart
