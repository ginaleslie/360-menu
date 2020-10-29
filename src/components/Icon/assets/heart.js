import * as React from "react"

function SvgHeart(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.036 1.333c-.966 0-1.588.115-2.3.464-.265.13-.513.285-.743.467a4.2 4.2 0 00-.712-.445c-.727-.36-1.38-.486-2.311-.486C2.478 1.333.667 3.398.667 6.08c0 2.025 1.129 3.982 3.232 5.873 1.104.993 2.514 1.976 3.523 2.499L8 14.75l.578-.3c1.01-.522 2.419-1.505 3.523-2.498 2.103-1.891 3.232-3.848 3.232-5.873 0-2.653-1.828-4.736-4.297-4.747zM14 6.08c0 1.587-.943 3.22-2.79 4.882-1.009.906-2.304 1.812-3.21 2.287-.906-.475-2.201-1.38-3.21-2.287C2.944 9.3 2 7.667 2 6.08c0-1.982 1.256-3.413 2.97-3.413.74 0 1.195.087 1.72.347.31.153.584.356.821.609l.49.523.487-.528c.242-.263.52-.47.833-.623.51-.25.937-.328 1.712-.328C12.726 2.674 14 4.126 14 6.08z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgHeart