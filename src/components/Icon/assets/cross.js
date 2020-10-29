import * as React from "react"

function SvgCross(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.815 8.637l5.303-5.304 1.179 1.179-5.303 5.303 5.303 5.303-1.179 1.179-5.303-5.303-5.303 5.303-1.179-1.179 5.304-5.303-5.304-5.303 1.179-1.179 5.303 5.304z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgCross

