import React from "react"
import PropTypes from "prop-types"
import { Text } from "./styles.js"

const Copy = ({ children, size, color }) => (
  <Text size={size} color={color}>
    {children}
  </Text>
)

Copy.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["xsmall", "small"]),
  color: PropTypes.oneOf(["grayOne", "grayTwo", "grayThree"]),
}

Copy.defaultProps = {
  size: "xsmall",
  color: "grayThree",
}

export default Copy
