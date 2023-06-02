import React from "react"

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      button="Создать"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        type="text"
        placeholder="Название"
        className="popup__input popup__input_type_title"
        name="title"
        minLength={2}
        maxLength={30}
        defaultValue=""
        required=""
      />
      <span className="popup__input-error popup__input-error_type_title" />
      <input
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_link"
        name="link"
        defaultValue=""
        required=""
      />
      <span className="popup__input-error popup__input-error_type_link" />
    </PopupWithForm>
  )
};

export default AddPlacePopup;
