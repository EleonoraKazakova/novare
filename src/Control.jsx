import React, { useContext, useState } from 'react'
import './styles/control.css'
import Sorting from './Sorting'
import {ItemsContext } from './App'

export default function Control() {
  const objItems = useContext(ItemsContext)  

  const [checkedHide, setCheckedHide] = useState(false)
  const toggleCheckedHide = () => setCheckedHide(!checkedHide)

  // toggleChecked will change checked value to opposite value for element with given index in items
  const toggleChecked = (index) => {
    let arr = []
    for (let i = 0; i < objItems.items.length; i++) {
      if (i === index) {
        arr.push({ item: objItems.items[i]['item'], price: objItems.items[i]['price'], checked: !objItems.items[i]['checked'], completed: !objItems.items[i]['completed'] })
      } else {
        arr.push(objItems.items[i])
      }
    }
    objItems.setItems(arr)
  }
 console.log('objItems:', objItems)
  return (
    <div className='control-content'>
      <div className='control-block'>

        <div>
          <input
            type='checkbox'
            name='sort'
            checked={checkedHide}
            onChange={() => toggleCheckedHide()}
          />
          <label key='sort'>Hide completed orders</label>
        </div>

        <Sorting />

      </div>
      <div className={objItems.items.length > 0 ? 'control-items' : null}>
        {
          objItems.items.map((el, index) => el.checked && checkedHide
            ? null
            : <div>
              <input type="checkbox" checked={el.checked} onChange={() => toggleChecked(index)} />
              <label key={el}> {el['item']}, ${el['price']}, {el['completed'] ? null : 'completed order'}</label>
            </div>
          )
        }
      </div>
    </div>
  )
}