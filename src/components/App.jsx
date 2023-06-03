import React from "react";
import api from "../utils/Api";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
    .then(data => {
      setCards(data)
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

  function closeOnOverlay(evt) {
    evt.currentTarget === evt.target && closeAllPopups()
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id)

    if(!isLiked) {
      api.likeCard(card._id)
      .then(newCard => {
        setCards(state =>
          state.map(item => item._id === card._id ? newCard : item))
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      api.unlikeCard(card._id)
      .then(newCard => {
        setCards(state =>
          state.map(item => item._id === card._id ? newCard : item))
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
      setCards(state =>
        state.filter(item => item._id !== card._id))
    })
    .catch(err => {
      console.log(err)
    })
  }

  function handleUpdateUser(userInfo) {
    api.updateUserInfo(userInfo)
    .then(data => {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch(err => {
      console.log(err)
    })
  }

  function handleUpdateAvatar(newAvatar) {
    api.updateAvatar(newAvatar)
    .then(data => {
      setCurrentUser(data)
      closeAllPopups()
    })
    .catch(err => {
      console.log(err)
    })
  }

  function handleAddPlaceSubmit(newCard) {
    api.addCard(newCard)
    .then(card => {
      setCards([card, ...cards])
      closeAllPopups()
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="root">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            onOverlay={closeOnOverlay}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            onOverlay={closeOnOverlay}
          />
         <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
            onOverlay={closeOnOverlay}
         />
          <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            button="Да"
            onClose={closeAllPopups}
          ></PopupWithForm>
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            onOverlay={closeOnOverlay}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
