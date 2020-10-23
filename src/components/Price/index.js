import React from "react"
import PropTypes from "prop-types"
import PriceText from "./styles"

const Price = ({ amount, size, currency, color }) => {
  // TODO: make signDisplay work
  const formattedAmount = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency,
  }).format(amount)

  return (
    <PriceText size={size} color={color} amount={amount}>
      {formattedAmount}
    </PriceText>
  )
}

Price.propTypes = {
  amount: PropTypes.number.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  color: PropTypes.oneOf(["light", "dark"]),
  add: PropTypes.bool,
  currency: PropTypes.string,
}

Price.defaultProps = {
  size: "small",
  color: "dark",
  add: false,
  currency: "ZAR",
}

export default Price
