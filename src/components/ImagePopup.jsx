import React from "react"

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card.link ? 'popup_opened' : ''}`}>
    <div className="popup__container">
      <button
        className="button button_action_close"
        type="button"
        onClick={onClose}
      />
      <div className="popup__wrap">
        <img
          className="popup__image"
          alt={card.name}
          src={card.link}
        />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
    </div>
  )
};

export default ImagePopup;
