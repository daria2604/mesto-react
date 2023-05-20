import React, { useEffect, useState } from "react"
import avatar from "../images/avatar.jpg"
import api from "../utils/Api.js"

function Main(props) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    api.getUserInfo(userInfo)
    .then(data => {
      setUserName(() => {
        return data.name
      })
      setUserDescription(() => {
        return data.about
      })
      setUserAvatar(() => {
        return data.avatar
      })
    })
    .catch(err => {
      console.log(err)
    })
  })



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
            src={userAvatar}
            alt="Аватар"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="button button_action_edit"
              type="button"
              onClick={() => {
                props.onEditProfile(true)}
              }/>
          </div>
          <p className="profile__about">{userDescription}</p>
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
