import React from "react"
import avatar from "../images/avatar.jpg"

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            className="button button_action_edit-avatar"
            type="button"
            onClick={() => {
              props.onEditAvatar(true)}
            }/>
          <img
            src={avatar}
            alt="Аватар"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="button button_action_edit"
              type="button"
              onClick={() => {
                props.onEditProfile(true)}
              }/>
          </div>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button
          className="button button_action_add"
          type="button"
          onClick={() => {
            props.onAddPlace(true)
          }}/>
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
