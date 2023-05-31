import { useEffect, useState, useContext } from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx"
import api from "../utils/Api.js"
import Card from "./Card"

function Main(props) {
  const currentUser = useContext(CurrentUserContext)
  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getInitialCards()
    .then(data => {
      setCards(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            className="button button_action_edit-avatar"
            type="button"
            onClick={props.onEditAvatar}/>
          <img
            src={currentUser.avatar}
            alt="Аватар"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="button button_action_edit"
              type="button"
              onClick={props.onEditProfile}/>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          className="button button_action_add"
          type="button"
          onClick={props.onAddPlace}/>
      </section>
      <section className="gallery">
        <div className="cards">
            {cards.map(card => (
              <Card
                card={card}
                key={card._id}
                onCardClick={props.onCardClick}
              />
              ))
            }
        </div>
      </section>
    </main>
  )
};

export default Main;
