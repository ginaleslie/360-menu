import * as React from "react"

function SvgPencil(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.667 13.333V8.667h-1.334v4.666H2.667V2.667h4.666V1.333H2.667c-.737 0-1.334.597-1.334 1.334v10.666c0 .737.597 1.334 1.334 1.334h10.666c.737 0 1.334-.597 1.334-1.334zM12.785 1.816a1.636 1.636 0 00-2.321 0l-5.58 5.58a2.698 2.698 0 00-.882 1.796L4 11.335v.667h2.756a2.7 2.7 0 001.882-.92l5.548-5.545a1.641 1.641 0 000-2.32l-1.4-1.401zM6.71 10.67c.356-.025.688-.191.954-.496l4.041-4.04-1.836-1.837-4.07 4.07a1.38 1.38 0 00-.465.878v1.424H6.71zm4.102-7.316l1.836 1.836.596-.596a.308.308 0 000-.435l-1.402-1.402a.304.304 0 00-.432 0l-.598.597z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgPencil
