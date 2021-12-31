import React from 'react'
import { useState } from 'react/cjs/react.development'
import './styles/shoppinglist.css'

export default function ShoppingList({item, setItem}) {
  /*const [item, setItem] = useState([])
  const [items, setItems] = useState([])
  const [showItem, setShowItem] = useState(false)
  const toggleItems = () => setItems(...items, item)
  const toggleShowItem = () => {
    setItems([...items, item])
  }*/
  console.log('items:', item)
  return (
    <>
      <div>
        <label className='factors-label'>
          <input type="checkbox" />
          <input
            onChange={(e) => setItem([e.target.value])}
            value={item}
            type="text"
            className='shopinglist-textarea'
          />
          {/*<span className='shopinglist-floating-label'>write order</span>*/}
        </label>
      </div>
      {/*<div className='app-button' onClick={toggleShowItem}>
          Show item
  </div>*/}
    </>
  )
}