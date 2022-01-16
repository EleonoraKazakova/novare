import React, { useContext, useState } from 'react';
import './styles/sorting.css';
import { ItemsContext } from './App';

export default function Sorting() {
  const itemsContext = useContext(ItemsContext);
  const [clickName, setClickName] = useState(false);
  const [clickPrice, setClickPrice] = useState(false);

  const sortItems = () => {
    itemsContext.setItems([...itemsContext.items].sort((a, b) => a.item > b.item ? 1 : -1));
    setClickName(true);    
    setClickPrice(false);
  };

  const sortPrice = () => {
    itemsContext.setItems([...itemsContext.items].sort((a, b) => a.price > b.price ? 1 : -1));
    setClickPrice(true);
    setClickName(false);
  };

  return (
    <div className='sorting-completed'>

      <div className='sorting-block'>
        <p>Sort by:</p>
        <div onClick={sortItems}
          className={clickName ? 'sorting-bold' : 'sorting-kind'}>
          <p>Name</p>
        </div>
        <div onClick={sortPrice}
          className={clickPrice ? 'sorting-bold' : 'sorting-kind'}>
          <p>Price</p>
        </div>
      </div>
    </div>);
}