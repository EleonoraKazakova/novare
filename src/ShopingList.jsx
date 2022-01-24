import React, { useContext, useState } from "react";
import "./styles/shopingList.css";
import Sorting from "./Sorting";
import { ItemsContext } from "./App";

export default function ShopingList() {
  const itemsContext = useContext(ItemsContext);

  const [checkedHide, setCheckedHide] = useState(false);
  const toggleCheckedHide = () => setCheckedHide(!checkedHide);

  /**
   * A comment about a comment (how meta no?) -1
   * The comment is not neccesary, by reading the name toggleChecked and see the argument needed (index),
   * then we can assume that it loops over an array and targets the specific item in the index position.
   */
  // toggleChecked will change checked value to opposite value for element with given index in items
  const toggleChecked = (index) => {
    let arr = [];

    // we can use modern functional programming in JS to make this more readable.
    for (let i = 0; i < itemsContext.items.length; i++) {
      if (i === index) {
        // formatting, the original code in 1 line was impossible to understand -1
        arr.push({
          item: itemsContext.items[i]["item"],
          price: itemsContext.items[i]["price"],
          checked: !itemsContext.items[i]["checked"],
          completed: !itemsContext.items[i]["completed"],
        });
      } else {
        arr.push(itemsContext.items[i]);
      }
    }
    itemsContext.setItems(arr);
  };

  return (
    <div className="shopingList-content">
      <div className="shopingList-block">
        {/* This div withouth class can be avoided by wrapping up the label around the input */}
        {/* Example: */}
        {/* <label><input type="checkbox" />Hide completed items</label> */}
        {/* Bonus: This makes the text "Hide completed items" clickable a win in usability */}
        <div>
          <input
            type="checkbox"
            name="sort"
            checked={checkedHide}
            onChange={toggleCheckedHide}
          />
          <label key="sort">Hide completed items</label>
        </div>

        <Sorting />
      </div>
      <div
        className={itemsContext.items.length > 0 ? "shopingList-items" : null}
      >
        {/* Refactoring -1 */}
        {/* You can refactor */}
        {itemsContext.items.map((el, index) =>
          el.checked && checkedHide ? null : (
            <div className="shopingList-line" key={el.item + el.price}>
              <input
                type="checkbox"
                checked={el.checked}
                onChange={() => toggleChecked(index)}
              />
              {/* layout/design -1, use CSS padding if you want to leave a space before */}
              <label>
                {" "}
                {el.item}, ${el.price}{" "}
              </label>
              {/* layout/design -1, same as above */}
              <p className="shopingList-copleted">
                {" "}
                {el.completed ? "completed item" : null}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
