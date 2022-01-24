import React from "react";
import "./styles/homepage.css";
import Logo from "./images/logo.png";

export default function HomePage({ items }) {
  /**
   * This component works as intented but it would be hard to maintain. Why?
   * Because you have 2 separated if statements: item.lenght > 0;
   * That means that this component can be either only the title "Shopping list" or a whole "screen".
   * At that point is better to have 2 separate "screens" each one with the same title.
   */
  return (
    /**
     * The diamond tag (called Fragment) is used when we want to return a few standalone tags that arent an entire component.
     * This particular HomeScreen is neither a compoonent or a few lines, is something bigger, an entire page. So it must return a tag like <div>, <section>, etc.
     */
    <>
      {items.length > 0 ? null : <img src={Logo} className="homepage-logo" />}

      {/* HTML semantics */}
      <div className="homepage-title">Shopping list</div>

      {items.length > 0 ? null : (
        <div className="homepage-content">
          <p>Hello!</p>
          {/* this div is not neccesary, all 3 paragraphs share the same styling, no need to group some and leave the "hello" outside -1 */}
          {/* If the hello have a different priority, add the css class to it, or make it a heading (if is a title) */}
          <div className="homepage-text">
            <p>We are happy to welcome you to our website!</p>
            <p>You can click on the button and add orders.</p>
          </div>
        </div>
      )}
    </>
  );
}
