import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="root">
    <div className="page">
          <Header/>
          <Main/>
          <Footer/>
        <div className="popup popup_type_edit">
          <div className="popup__container">
            <button className="button button_action_close" type="button" />
            <form
              className="popup__form popup__form_type_edit"
              name="editForm"
              autoComplete="off"
            >
              <h3 className="popup__heading popup__heading_type_edit">
                Редактировать профиль
              </h3>
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
              <button
                type="submit"
                className="popup__submit-button popup__submit-button_type_edit"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_add">
          <div className="popup__container">
            <button className="button button_action_close" type="button" />
            <form
              className="popup__form popup__form_type_add"
              name="addForm"
              autoComplete="off"
            >
              <h3 className="popup__heading popup__heading_type_add">Новое место</h3>
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
              <button
                type="submit"
                className="popup__submit-button popup__submit-button_type_add"
              >
                Создать
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_image">
          <div className="popup__container">
            <button className="button button_action_close" type="button" />
            <div className="popup__wrap">
              <img className="popup__image" alt="#" src="#" />
              <p className="popup__caption" />
            </div>
          </div>
        </div>
        <div className="popup popup_type_confirm">
          <div className="popup__container">
            <button className="button button_action_close" type="button" />
            <form className="popup__form popup__form_type_confirm" name="confirmForm">
              <h3 className="popup__heading popup__heading_type_confirm">
                Вы уверены?
              </h3>
              <button
                type="submit"
                className="popup__submit-button popup__submit-button_type_confirm"
              >
                Да
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <button className="button button_action_close" type="button" />
            <form
              className="popup__form popup__form_type_avatar"
              name="avatarForm"
              autoComplete="off"
            >
              <h3 className="popup__heading popup__heading_type_avatar">
                Обновить аватар
              </h3>
              <input
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_type_avatar"
                name="avatar-link"
                defaultValue=""
                required=""
              />
              <span className="popup__input-error popup__input-error_type_avatar-link" />
              <button
                type="submit"
                className="popup__submit-button popup__submit-button_type_avatar"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
