import React, { useState } from 'react';
import './styles/shoppinglist.css';

export default function ShoppingList({ setItem, setPrice }) {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  return (
    <>
      <div className='shoppinglist-items'>
        <div>
          <input
            onChange={(e) => setItem(e.target.value)}
            type="text"
            className="inputText"
            placeholder="Write item"
          />
        </div>

        <div>
          <input
            onChange={(e) => e.target.value.match(/^[0-9]+$/) ? setPrice(e.target.value) : setShowErrorMessage(!showErrorMessage)}
            type="text"
            className="inputText"
            placeholder="Write price"
          />
          {showErrorMessage ? <p className='shoppinglist-message'>You need to write numbers</p> : null}
        </div>

      </div>
    </>
  );
}