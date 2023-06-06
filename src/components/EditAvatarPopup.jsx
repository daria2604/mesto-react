import React from "react"
import { useForm } from "react-hook-form"
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, onOverlay }) {
  const avatarRef = React.useRef()
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onTouched' })

  // React.useEffect(() => {
  //   avatarRef.current.value = ''
  // }, [isOpen])

  function handleFormSubmit(evt) {
    evt.preventDefault()
    onUpdateAvatar({ avatar: avatarRef.current.value })
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      button="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onOverlay={onOverlay}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <input
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__input popup__input_type_avatar"
        name="avatar-link"
        ref={avatarRef}
        {...register('url', ({
          required: 'Введите ссылку на изображение',
          pattern: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
        }))}
      />
      { errors.url ? <span className="popup__input-error">{errors.url?.message}</span>  : <span className="popup__input-error" />}
    </PopupWithForm>
  )
};

export default EditAvatarPopup;
