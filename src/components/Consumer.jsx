import React, { useContext } from 'react'
import { CustomContext } from '../contexts/CustomContext'

export const Consumer = () => {
  const { provided } = useContext(CustomContext)

  return (
    <>
      <h2>Consumer</h2>
      <p>{provided}</p>
    </>
  )
}