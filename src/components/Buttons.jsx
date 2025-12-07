import React from "react";
import "../styles/buttons.scss"; // your SCSS file
// import '../styles/cards.scss';

function Buttons({text="Data" , variant = "", type=''}) {
  // Build the className dynamically based on variant
  const className = `shine-button button-${variant}`;

  return (
    <div className="">
      <button className={className} type={type}>{text}</button>
    </div>
  );
}


export default Buttons;
