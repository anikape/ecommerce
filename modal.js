const openModalButton = document.querySelector("#open-modal"); //vai pegar o botão Login no header do html
const closeModalButton = document.querySelector("#close-modal"); // Vai pegar o botão Fechar no Modal
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

//para adicionar ou remover classes

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

//Criar um array que terá o mesmo comportamento - el = elementos

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());

})