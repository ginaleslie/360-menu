import React from "react"
import PropTypes from "prop-types"
import { Text } from "./styles.js"

const SubHeading = ({ children, size, color, paddingBtm }) => (
  <Text size={size} color={color} padding={paddingBtm}>
    {children}
  </Text>
)

SubHeading.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium"]),
  color: PropTypes.oneOf(["white", "grayOne"]),
  paddingBtm: PropTypes.oneOf(["medium", "large"]),
}

SubHeading.defaultProps = {
  size: "small",
  color: "grayOne",
}

export default SubHeading
