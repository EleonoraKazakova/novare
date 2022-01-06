import React, { useState } from 'react'
import ShoppingList from './ShoppingList'
import './styles/app.css'
import HomePage from './Homepage'

export default function App() {
  const [item, setItem] = useState('')
  const [price, setPrice] = useState('')
  const [items, setItems] = useState([])

  const [addItem, setAddItem] = useState(false)
  const toggleAddItem = () => {
    setAddItem(!addItem)
    if (item === '') {
      return
    }
    setItems([...items, [item, price]])
    setItem('')
  }

  
  const sortItems = () => { setItems([...items].sort((a, b) => a[0] > b[0] ? 1 : -1)) }

  
  const sortPrice = () => { setItems([...items].sort((a, b) => a[1] > b[1] ? 1 : -1)) }
  console.log('items:', items)

  return (
    <div className='app-grid'>
      <div className='app-header'></div>
      <div className='app-content'>
        <HomePage />
        {items.length > 0
          ? <div>
            <div><input type="checkbox" name='item' onClick={() => sortItems()} /> <label for='item'>Sort by item </label></div>
            <div><input type="checkbox" name='price' onClick={() => sortPrice()} /> <label for='price'>Sort by price </label></div>
          </div>
          : null}

        { items.map(el => <div> <input type="checkbox" /> <label for={el}> {el[0]}, ${el[1]}</label>  </div>) }

        {/*<div> <input type="checkbox" /> {items.join(', ')} </div>*/}

        {addItem
          ? <ShoppingList
            setItem={setItem}
            setPrice={setPrice}
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