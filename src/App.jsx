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
    setItems([...items, { item: item, price: price, checked: false }])
    setItem('')
  }

  // toggleChecked will change checked value to opposite value for element with given index in items
  const toggleChecked = (index) => {
    let arr = []
    for (let i = 0; i < items.length; i++) {
      if (i === index) {
        arr.push({ item: items[i]['item'], price: items[i]['price'], checked: !items[i]['checked'] })
      } else {
        arr.push(items[i])
      }
    }
    setItems(arr)
  }



  const sortItems = () => {
    setItems([...items].sort((a, b) => a[item] > b[item] ? 1 : -1))
  }

  const sortPrice = () => {
    setItems([...items].sort((a, b) => a[price] > b[price] ? 1 : -1))
  }
  console.log('items:', items)

  return (
    <div className='app-grid'>
      <div className='app-header'></div>
      <div className='app-content'>
        <HomePage />

        {items.length > 0
          ? <div className='app-sort-completed'>
            <div>
              <input
                type='checkbox'
                name='sort'
              />
              <label for='sort'>completed/acquired</label>
            </div>
            <div className='app-sort'> Sort by:
              <div onClick={() => sortItems()} className='app-sort-kind'>  Name </div>
              <div onClick={() => sortPrice()} className='app-sort-kind'>  Price </div>
            </div>
          </div>
          : null}

        {items.map((el, index) => <div>
          <input type="checkbox" checked={el.checked} onChange={() => toggleChecked(index)} />
          <label for={el}> {el['item']}, ${el['price']}</label>
        </div>)
        }




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
      <div className='app-footer'>Eleonora Kazakova</div>
    </div>
  )
}