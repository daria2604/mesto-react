import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div className="root">
    <div className="page">
          <Header/>
          <Main/>
          <Footer/>
          <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            button="Сохранить"
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
          ></PopupWithForm>

        {/* <div className="popup popup_type_image">
          <div className="popup__container">
            <button className="button button_action_close" type="button" />
            <div className="popup__wrap">
              <img className="popup__image" alt="#" src="#" />
              <p className="popup__caption" />
            </div>
          </div>
        </div> */}
        </div>
    </div>
  );
}

export default App;
