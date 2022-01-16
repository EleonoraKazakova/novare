import React, { useState } from 'react';
import './styles/inputForm.css';

export default function InputForm({ setItem, setPrice }) {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

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
            onChange={(e) => e.target.value.match(/^[0-9]+$/) ? setPrice(e.target.value) : setShowErrorMessage(!showErrorMessage)}
            type="text"
            className="inputForm-text"
            placeholder="Write price"
          />
          {showErrorMessage ? <p className='inputForm-message'>You need to write numbers</p> : null}
        </div>

      </div>
    </>
  );
}