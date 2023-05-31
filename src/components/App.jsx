import React, { useState } from "react";
import { useEffect } from "react";
import api from "../utils/Api";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    api.getUserInfo()
    .then(data => {
      setCurrentUser(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={setSelectedCard}
        />
        <Footer />
        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          button="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            placeholder="Имя"
            className="popup__input popup__input_type_name"
            name="name"
            minLength={2}
            maxLength={40}
            defaultValue=""
            required=""
          />
          <span className="popup__input-error popup__input-error_type_name" />
          <input
            type="text"
            placeholder="О себе"
            className="popup__input popup__input_type_about"
            name="about"
            minLength={2}
            maxLength={200}
            defaultValue=""
            required=""
          />
          <span className="popup__input-error popup__input-error_type_about" />
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          button="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_avatar"
            name="avatar-link"
            defaultValue=""
            required=""
          />
          <span className="popup__input-error popup__input-error_type_avatar-link" />
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="Новое место"
          button="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          button="Да"
          onClose={closeAllPopups}
        ></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
