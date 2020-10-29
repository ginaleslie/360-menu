import React from "react"
import PropTypes from "prop-types"
import PriceText from "./styles"

const Price = ({ amount, size, currency, color, paddingRight }) => {
  // TODO: make signDisplay work
  const formattedAmount = new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency,
  }).format(amount)

  return (
    <PriceText
      size={size}
      color={color}
      amount={amount}
      paddingRight={paddingRight}
    >
      {formattedAmount}
    </PriceText>
  )
}

Price.propTypes = {
  amount: PropTypes.number.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  color: PropTypes.oneOf(["white", "secondary", "grayOne"]),
  paddingRight: PropTypes.oneOf(["medium", "large"]),
  add: PropTypes.bool,
  currency: PropTypes.string,
}

Price.defaultProps = {
  size: "small",
  color: "secondary",
  add: false,
  currency: "ZAR",
}

export default Price
