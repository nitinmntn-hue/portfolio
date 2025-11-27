import React from "react";
import "../styles/buttons.scss"; // your SCSS file
import '../styles/cards.scss';


const buttonData = [
  { label: "Ocean Waves", text: "Get Started", className: "button-ocean" },
  { label: "Emerald Forest", text: "Explore More", className: "button-emerald" },
  { label: "Sunset Glow", text: "Learn More", className: "button-sunset" },
  { label: "Deep Ocean", text: "Dive In", className: "button-deep" },
  { label: "Golden Hour", text: "Discover", className: "button-gold" },
  { label: "Chrome Polish", text: "Premium", className: "button-chrome" },
  { label: "Royal Purple", text: "Upgrade", className: "button-purple" },
  { label: "Fresh Mint", text: "Refresh", className: "button-mint" },
  { label: "Electric Lime", text: "Energise", className: "button-electric" },
  { label: "Soft Lavender", text: "Relax", className: "button-lavender" },
  { label: "Fire Ember", text: "Ignite", className: "button-fire" },
  { label: "Forest Depths", text: "Explore", className: "button-forest" },
];

function Buttons() {
  return (
    <div className="showcase">
      <div className="header">
        <h1 className="main-title">Polished Button Collection</h1>
        <p className="description">
          Beautiful, shiny UI components with light sweep animations
        </p>
      </div>

      <div className="button-collection">
        {buttonData.map((btn, index) => (
          <div className="button-wrapper" key={index}>
            <span className="button-label">{btn.label}</span>
            <button className={`shine-button ${btn.className}`}>
              {btn.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
