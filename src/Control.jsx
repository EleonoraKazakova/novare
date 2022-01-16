import React, { useContext, useState } from 'react';
import './styles/control.css';
import Sorting from './Sorting';
import {ItemsContext } from './App';

export default function Control() {
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
    <div className='control-content'>
      <div className='control-block'>

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
      <div className={itemsContext.items.length > 0 ? 'control-items' : null}>
        {
          itemsContext.items.map((el, index) => el.checked && checkedHide
            ? null
            : <div className='control-line'>
              <input type="checkbox" checked={el.checked} onChange={() => toggleChecked(index)} />
              <label key={el}> {el.item}, ${el.price} </label>
              <p className='control-copleted'> {el.completed ? 'completed item' : null }</p>
            </div>
          )
        }
      </div>
    </div>
  );
}