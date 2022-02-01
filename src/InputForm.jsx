import React, { useState } from 'react';
import './styles/inputForm.css';

export default function InputForm({ setItem, setPrice }) {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const toogleError = (price) => {
    if ( price.match(/^[1-9][0-9]*$/) ) { 
      setPrice(price)
      setShowErrorMessage(false) 
    } else {
      setShowErrorMessage(true)
    }     
  }

  return (
    <>
      <div className='inputForm-items'>
        <div>
          <input
            onChange={(e) => setItem(e.target.value)}
            type="text"
            className="inputForm-text"
            placeholder="Write item"
          />
        </div>

        <div>
          <input
            onChange={(e) => toogleError(e.target.value) }
            type="text"
            className="inputForm-text"
            placeholder="Write price"
          />
          {showErrorMessage ? <p className='inputForm-message'>You need to write the right price</p> : null}
        </div>

      </div>
    </>
  );
}