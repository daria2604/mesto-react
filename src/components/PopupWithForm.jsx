import React from "react"

function PopupWithForm({name, title, button, ...props}) {
  return (
    <div className={`popup popup_type_${name}`}>
          <div className="popup__container">
            <button className="button button_action_close" type="button"/>
            <form
              className={`popup__form popup__form_type_${name}`}
              name={`${name}Form`}
              autoComplete="off"
            >
              <h3 className={`popup__heading popup__heading_type_${name}`}>
                {title}
              </h3>
              {props.children}
              <button
                type="submit"
                className={`popup__submit-button popup__submit-button_type_${name}`}
              >
                {button}
              </button>
            </form>
          </div>
        </div>
  )
};


export default PopupWithForm;
