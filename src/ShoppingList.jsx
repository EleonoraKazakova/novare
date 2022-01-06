import React from 'react'
import './styles/shoppinglist.css'

export default function ShoppingList({ setItem, setPrice }) {

  return (
    <>
      <div className='shoppinglist-items'>
        <div>
          <input
            onChange={(e) => setItem(e.target.value)}
            type="text"
            className="inputText"
          />
          <span className='floating-label'>write order</span>
        </div>
        <div>
          <input
            onChange={(e) => setPrice (e.target.value )}
            type="text"
            className="inputText"
          />
          <span className='floating-label'>write price</span>
        </div>
      </div>
    </>
  )
}