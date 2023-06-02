import { useState, useEffect } from "react";
import api from "../utils/Api";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
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
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
         <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
         />
          <PopupWithForm
            name="confirm"
            title="Вы уверены?"
            button="Да"
            onClose={closeAllPopups}
          ></PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
