import React from "react"
import avatar from "../images/avatar.jpg"

const Main = () => {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button className="button button_action_edit-avatar" type="button" />
          <img
            src={avatar}
            alt="Аватар"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="button button_action_edit" type="button" />
          </div>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button className="button button_action_add" type="button" />
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
