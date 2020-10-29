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
import Plus from "./assets/plus"
import Heart from "./assets/heart"
import FullHeart from "./assets/fullheart"
import Trash from "./assets/trash"
import Pencil from "./assets/pencil"
import Time from "./assets/time"
import Cross from "./assets/cross"

const Icon = ({ name, size, color }) => {
  let iconSize
  switch (size) {
    case "xsmall":
      iconSize = 10
      break
    case "small":
      iconSize = 13
      break
    case "medium":
      iconSize = 19
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

  let iconColor
  switch (color) {
    case "primary":
      iconColor = "#E54A2D"
      break

    case "white":
      iconColor = "#ffffff"
      break

    case "grayOne":
      iconColor = "#4F4F4F"
      break

    case "grayTwo":
      iconColor = "#BDBDBD"
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
      content = <Waiter width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "PLUS":
      content = <Plus width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "HEART":
      content = <Heart width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "TRASH":
      content = <Trash width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "PENCIL":
      content = <Pencil width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "TIME":
      content = <Time width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "CROSS":
      content = <Cross width={`${iconSize}px`} height={`${iconSize}px`} />
      break
    case "FULLHEART":
      content = <FullHeart width={`${iconSize}px`} height={`${iconSize}px`} />
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
        color: `${iconColor}`,
      }}
    >
      {content}
    </div>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "grayOne",
    "grayTwo",
    "grayThree",
  ]),
}

Icon.defaultProps = {
  size: "large",
  color: "white",
}

export default Icon
