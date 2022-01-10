import React, { useState, useEffect } from 'react'
import ShoppingList from './ShoppingList'
import './styles/app.css'
import HomePage from './Homepage'

export default function App() {
  const [item, setItem] = useState('')
  const [price, setPrice] = useState('')
  const [items, setItems] = useState(() => {
    console.log('error')
    try {
      return JSON.parse(localStorage.getItem('items')) ?? []
    }
    catch { return [] }
  })
  useEffect(() => localStorage.setItem('items', JSON.stringify(items)), [items])

  const [addItem, setAddItem] = useState(false)
  const toggleAddItem = () => {
    setAddItem(!addItem)
    if (item === '') {
      return
    }
    if (item.length > 0 && price.length > 0) {
      setItems([...items, { item: item, price: price, checked: false }])
    }

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

  const [checkedHide, setCheckedHide] = useState(false)
  const toggleCheckedHide = () => setCheckedHide(!checkedHide)

  const sortItems = () => {
    setItems([...items].sort((a, b) => a['item'] > b['item'] ? 1 : -1))
  }

  const sortPrice = () => {
    setItems([...items].sort((a, b) => a['price'] > b['price'] ? 1 : -1))
  }
  console.log('items:', items)

  return (
    <div className='app-grid'>
      <div className='app-header'></div>
      <div className='app-content'>
        <HomePage />
        <div className='app-block'>
          {items.length > 0
            ? <div className='app-sort-completed'>
              <div>
                <input
                  type='checkbox'
                  name='sort'
                  checked={checkedHide}
                  onChange={() => toggleCheckedHide()}
                />
                <label key='sort' >completed/acquired</label>
              </div>
              <div className='app-sort'> Sort by:
                <div onClick={() => sortItems()} className='app-sort-kind'>  Name </div>
                <div onClick={() => sortPrice()} className='app-sort-kind'>  Price </div>
              </div>
            </div>
            : null}

          <div className={items.length > 0 ? 'app-items' : null}>
            {
              items.map((el, index) => el.checked && checkedHide
                ? null
                : <div>
                  <input type="checkbox" checked={el.checked} onChange={() => toggleChecked(index)} />
                  <label key={el}> {el['item']}, ${el['price']}</label>
                </div>
              )
            }
          </div>

          {addItem
            ? <ShoppingList
              setItem={setItem}
              setPrice={setPrice}
            />
            : null
          }
        </div>
        <div className='app-button' onClick={toggleAddItem}>
          Add item
        </div>
      </div>
      <div className='app-footer'>Eleonora Kazakova</div>
    </div>
  )
}