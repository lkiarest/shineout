/**
* cn - pulse
* en - pulse
*/
import React from 'react'
import { Spin } from 'shineout'

export default function () {
  const style = { display: 'flex' }
  return (
    <div style={style}>
      <Spin size={16} type="pulse" color="green" />
      <Spin type="pulse" />
      <Spin size="48px" type="pulse" color="#dc3545" />
    </div>
  )
}