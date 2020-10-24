import React from "react"
import PropTypes from "prop-types"
import Drinks from "./assets/drinks"
import Dessert from "./assets/desserts"
import Panini from "./assets/panini"
import Pizza from "./assets/pizza"
import Pasta from "./assets/pasta"
import Starter from "./assets/starter"
import Salad from "./assets/salad"
import Logo from "./assets/logo"
import Waiter from "./assets/waiter"

const Icon = ({ name, size, iconColor }) => {
  let iconSize
  switch (size) {
    case "small":
      iconSize = 10
      break
    case "medium":
      iconSize = 16
      break
    case "large":
      iconSize = 24
      break
    case "xlarge":
      iconSize = 40
      break

    default:
      break
  }

  let content
  switch (name) {
    case "DESSERT":
      content = <Dessert width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "DRINK":
      content = <Drinks width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "PANINI":
      content = <Panini width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "PIZZA":
      content = <Pizza width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "PASTA":
      content = <Pasta width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "STARTER":
      content = <Starter width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "SALAD":
      content = <Salad width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "LOGO":
      content = <Logo width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "WAITER":
      content = (
        <Waiter
          width={`${iconSize}px`}
          height={`${iconSize}px`}
          color={`${currentColor}`}
        />
      )
      break

    default:
      break
  }

  return (
    <div
      style={{
        fontSize: `${iconSize}px`,
        height: `${iconSize}px`,
        width: `${iconSize}px`,
      }}
    >
      {content}
    </div>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
}

Icon.defaultProps = {
  size: "large",
  iconColor: "white",
}

export default Icon
