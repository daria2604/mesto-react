import React from "react"

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
    <div className="popup__container">
      <button className="button button_action_close" type="button" />
      <div className="popup__wrap">
        <img className="popup__image" alt="#" src="#" />
        <p className="popup__caption" />
      </div>
    </div>
    </div>
  )
};

export default ImagePopup;
