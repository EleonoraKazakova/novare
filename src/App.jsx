import React, { useState } from 'react'
import ShoppingList from './ShoppingList'
import './styles/app.css'
import HomePage from './Homepage'

export default function App() {
  const [item, setItem] = useState('')
  const [items, setItems] = useState('')

  const [addItem, setAddItem] = useState(false)
  const toggleAddItem = () => {
    setAddItem(!addItem)
    setItems([...items, item])
  }

  return (
    <div className='app-grid'>
      <div className='app-header'></div>

      <div className='app-content'>
        {items}
        <HomePage />
        {addItem
          ? <ShoppingList
            item={item}
            setItem={setItem}            
          />
          : null
        }

        <div className='app-button' onClick={toggleAddItem}>
          Add item
        </div>


      </div>
      <div className='app-footer'>footer</div>
    </div>
  )
}