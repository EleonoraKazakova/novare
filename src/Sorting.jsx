import React, { useContext, useState } from 'react'
import './styles/sorting.css'
import { ItemsContext } from './App'

export default function Sorting() {
  const objItems = useContext(ItemsContext)
  const [clickName, setClickName] = useState(false)
  const [clickPrice, setClickPrice] = useState(false)

  const sortItems = () => {
    objItems.setItems([...objItems.items].sort((a, b) => a['item'] > b['item'] ? 1 : -1))
    setClickName(!clickName)
    setClickPrice('')
  }

  const sortPrice = () => {
    objItems.setItems([...objItems.items].sort((a, b) => a['price'] > b['price'] ? 1 : -1))
    setClickPrice(!clickPrice)
    setClickName('')    
  }  

  return (
    <div className='sorting-sort-completed'>

      <div className='sorting-sort'> Sort by:
        <div onClick={() => sortItems()}
          className={clickName ? 'sorting-sort-bold' : 'sorting-sort-kind'}>
          Name
        </div>
        <div onClick={() => sortPrice()} 
        className={clickPrice ? 'sorting-sort-bold' : 'sorting-sort-kind'}>
          Price
        </div>
      </div>
    </div>)
}