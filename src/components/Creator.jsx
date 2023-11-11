/**
 * Creator.jsx
 */


import React, { useContext } from 'react'
import { CustomContext } from '../contexts/CustomContext'



export const Creator = ({ custom, children }) => {
  const { provided, setProvided } = useContext(CustomContext)


  const onChange = event => {
    setProvided(event.target.value)
  }


  return (
    <>
      <h1>Creator</h1>
      <p>"{custom}"</p>
      <label htmlFor="input">
        <input
          type="text"
          name="input"
          id="input"
          value={provided}
          onChange={onChange}
        />
      </label>
      {children}
    </>
  )
}