import React, { useState, useEffect, createContext } from 'react';
import ShoppingList from './ShoppingList';
import './styles/app.css';
import HomePage from './Homepage';
import Control from './Control';

const ItemsContext = createContext();
export { ItemsContext };

export default function App() {

  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('items')) ?? [];
    } catch {
      return [];
    }
  });

  useEffect(() => localStorage.setItem('items', JSON.stringify(items)), [items]);

  const [addItem, setAddItem] = useState(false);
  const toggleAddItem = () => {
    setAddItem(!addItem);
    if (item === '') {
      return;
    }
    if (item.length > 0 && price.length > 0) {
      setItems([...items, { item: item, price: Number(price), checked: false, completed: false }]);
    }
    setItem('');
  };

  const itemsContext = { items, setItems };

  return (
    <div className='app-grid'>
      <div className='app-header'></div>
      <div className='app-content'>
        <HomePage items={items} />

        {items.length > 0
          ? <ItemsContext.Provider value={itemsContext}>
            <Control />
          </ItemsContext.Provider>
          : null}

        <div className='app-items'>
          {addItem
            ? <ShoppingList
              setItem={setItem}
              setPrice={setPrice}
            />
            : null
          }
        </div>

        <button className='app-button' onClick={toggleAddItem}>
          Add item
        </button>

      </div>

      <div className='app-footer'>Copyright by Eleonora Kazakova 2022</div>

    </div>
  );
}