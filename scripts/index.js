const initialCards = [
  {
    name: "Golden Gate bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editModal = document.querySelector("#edit-profile-modal");
const profileEditButton = document.querySelector(".profile__edit-btn");
const profileCloseEditButton = editModal.querySelector(".modal__close-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileFormElement = editModal.querySelector(".modal__form");
const profileNameInput = editModal.querySelector("#profile-name-input");
const profileDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

const newPostModal = document.querySelector("#new-post-modal");
const newPostButton = document.querySelector(".profile__add-btn");
const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");

const newPostFormElement = newPostModal.querySelector(".modal__form");
const newPostNameInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");

const viewImageModal = document.querySelector("#image-modal");
const viewImageCloseButton = viewImageModal.querySelector(".modal__close-btn");
const viewImageEl = viewImageModal.querySelector(".modal__image");
const viewImageCaptionEl = viewImageModal.querySelector(".modal__caption");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

profileEditButton.addEventListener("click", function () {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(editModal);
});

profileCloseEditButton.addEventListener("click", function () {
  closeModal(editModal);
});

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function openModal(modalform) {
  modalform.classList.add("modal_opened");
}

function closeModal(modalform) {
  modalform.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(newPostCaptionInput.value);
  console.log(newPostNameInput.value);
  const inputValues = {
    name: newPostCaptionInput.value,
    link: newPostNameInput.value,
  };

  const cardElement = getCardElement(inputValues);
  cardList.prepend(cardElement);
  closeModal(newPostModal);
  newPostCaptionInput.value = "";
  newPostNameInput.value = "";
}

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");

  const cardlikebutton = cardElement.querySelector(".card__like-button");
  cardlikebutton.addEventListener("click", () => {
    cardlikebutton.classList.toggle("card__like-button_active");
  });

  const carddeletebutton = cardElement.querySelector(".card__delete-button");
  carddeletebutton.addEventListener("click", () => {
    //carddeletebutton.closest(".card").remove();
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    viewImageEl.setAttribute("src", data.link);
    viewImageEl.setAttribute("alt", data.name);
    viewImageCaptionEl.textContent = data.name;

    openModal(viewImageModal);
  });

  viewImageCloseButton.addEventListener("click", () => {
    closeModal(viewImageModal);
  });

  cardNameElement.textContent = data.name;
  cardImageElement.setAttribute("src", data.link);
  cardImageElement.setAttribute("alt", data.name);

  return cardElement;
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
newPostFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardList.append(cardElement);
});
