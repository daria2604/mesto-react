import React from "react"
import avatar from "../images/avatar.jpg"

function Main() {
  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit').classList.add('popup_opened')
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_add').classList.add('popup_opened')
  }

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened')
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button className="button button_action_edit-avatar" type="button" onClick={handleEditAvatarClick}/>
          <img
            src={avatar}
            alt="Аватар"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="button button_action_edit" type="button" onClick={handleEditProfileClick}/>
          </div>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button className="button button_action_add" type="button" onClick={handleAddPlaceClick}/>
      </section>
      <section className="gallery">
        <div className="cards">
          <template id="cardTemplate" />
        </div>
      </section>
    </main>
  )
};

export default Main;
