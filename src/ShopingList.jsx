import React, { useContext, useState } from 'react';
import './styles/shopingList.css';
import Sorting from './Sorting';
import {ItemsContext } from './App';

export default function ShopingList() {
  const itemsContext = useContext(ItemsContext);  

  const [checkedHide, setCheckedHide] = useState(false);
  const toggleCheckedHide = () => setCheckedHide(!checkedHide);

  // toggleChecked will change checked value to opposite value for element with given index in items
  const toggleChecked = (index) => {
    let arr = [];
    for (let i = 0; i < itemsContext.items.length; i++) {
      if (i === index) {
        arr.push({ item: itemsContext.items[i]['item'], price: itemsContext.items[i]['price'], checked: !itemsContext.items[i]['checked'], completed: !itemsContext.items[i]['completed'] });
      } else {
        arr.push(itemsContext.items[i]);
      }
    }
    itemsContext.setItems(arr);
  };
 
  return (
    <div className='shopingList-content'>
      <div className='shopingList-block'>

        <div>
          <input
            type='checkbox'
            name='sort'
            checked={checkedHide}
            onChange={toggleCheckedHide}
          />
          <label key='sort'>Hide completed items</label>
        </div>

        <Sorting />

      </div>
      <div className={itemsContext.items.length > 0 ? 'shopingList-items' : null}>
        {
          itemsContext.items.map((el, index) => el.checked && checkedHide
            ? null
            : <div className='shopingList-line' key={el.item + el.price}>
              <input type="checkbox" checked={el.checked} onChange={() => toggleChecked(index)} />
              <label > {el.item}, ${el.price} </label>
              <p className='shopingList-copleted'> {el.completed ? 'completed item' : null }</p>
            </div>
          )
        }
      </div>
    </div>
  );
}