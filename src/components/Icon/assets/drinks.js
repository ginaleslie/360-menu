import * as React from "react"

function SvgDrinks(props) {
  return (
    <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <path d="M7.46 12h9.08L15 22H9zM7.46 12h9.08L17 9H7zM12 6l.9-3.62a.5.5 0 01.53-.38l4.07.5M6 6h12" />
      </g>
    </svg>
  )
}

export default SvgDrinks
