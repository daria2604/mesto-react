import React from "react"

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card)
  }

  return (
    <div className="card">
    <button className="button button_action_delete" type="button" />
    <img
      className="card__image"
      alt={card.name}
      src={card.link}
      onClick={handleClick}
    />
    <div className="card__info">
      <h2 className="card__title">{card.name}</h2>
      <div className="card__like">
        <button className="button button__like" type="button" />
        <p className="card__like_counter">{card.likes.length}</p>
      </div>
      </div>
    </div>
  )
};

export default Card;
