import React from 'react'
import { useState } from 'react/cjs/react.development'
import './styles/shoppinglist.css'

export default function ShoppingList({ setItem, setPrice }) {
  const [message, setMessage] = useState(false)

  return (
    <>
      <div className='shoppinglist-items'>
        <label>
          <input
            onChange={(e) => setItem(e.target.value)}
            type="text"
            className="inputText"
            placeholder="Write order"
          />
        </label>

        <label>
          <input
            onChange={(e) => e.target.value.match(/^[0-9]+$/) ? setPrice(e.target.value) : setMessage(!message)}
            type="text"
            className="inputText"
            placeholder="Write price"
          />
          {message ? <p>You need to write numbers</p> : null}
        </label>

      </div>
    </>
  )
}