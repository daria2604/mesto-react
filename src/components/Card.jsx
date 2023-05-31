import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Card({ card, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext)
  const isOwn = card.owner._id === currentUser._id
  const isLiked = card.likes.some(i => i._id === currentUser._id)
  const cardLikeButtonClassName = (
    `button__like ${isLiked && 'button__like_active'}`
  )

  function handleClick() {
    onCardClick(card)
  }

  return (
    <div className="card">
    {isOwn && <button className="button button_action_delete" type="button" />}
    <img
      className="card__image"
      alt={card.name}
      src={card.link}
      onClick={handleClick}
    />
    <div className="card__info">
      <h2 className="card__title">{card.name}</h2>
      <div className="card__like">
        <button className={`button ${cardLikeButtonClassName}`} type="button" />
        <p className="card__like_counter">{card.likes.length}</p>
      </div>
      </div>
    </div>
  )
};

export default Card;
