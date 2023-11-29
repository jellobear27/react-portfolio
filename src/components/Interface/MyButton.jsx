import React from 'react'

function MyButton(props) {
    const {displayText, to} = props
  return (
    <a target='_blank' href={to}>{displayText}</a>
  )
}

export default MyButton