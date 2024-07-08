import React from 'react'

const Button = ({classes, label}) => {
  return (
   <button className={classes}>{label}</button>
  )
}

export default Button