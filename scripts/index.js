const initialCards = [
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

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const profileEditButton = document.querySelector(".profile__edit-btn");
const profileCloseEditButton = editModal.querySelector(".modal__close-btn");

const profileFormElement = editModal.querySelector(".modal__form");
const profileNameInput = editModal.querySelector("#profile-name-input");
const profileDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);
//console.log(profileName);
//console.log(profileNameInput);

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");
//console.log(cardTemplate);

function openModal() {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  editModal.classList.add("modal__opened");
}

function closeModal() {
  editModal.classList.remove("modal__opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal();
}

function getCardElement(data) {
  //console.log(data);
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameElement = cardElement.querySelector(".card__title");

  const cardImageElement = cardElement.querySelector(".card__image");

  cardNameElement.textContent = data.name;
  cardImageElement.setAttribute("src", data.link);
  cardImageElement.setAttribute("alt", data.name);

  return cardElement;
}

profileEditButton.addEventListener("click", openModal);

profileCloseEditButton.addEventListener("click", closeModal);

//console.log(initialCards);

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardList.prepend(cardElement);
}
