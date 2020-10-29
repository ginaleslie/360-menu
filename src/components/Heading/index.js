import React from "react"
import PropTypes from "prop-types"
import { Text } from "./styles.js"

const Heading = ({ children, size, color, paddingBtm }) => (
  <Text size={size} color={color} padding={paddingBtm}>
    {children}
  </Text>
)

Heading.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["large", "xlarge"]),
  color: PropTypes.oneOf(["primary", "secondary", "white", "grayOne"]),
  paddingBtm: PropTypes.oneOf(["small", "large", "xlarge"]),
}

Heading.defaultProps = {
  size: "xlarge",
  color: "secondary",
}

export default Heading
