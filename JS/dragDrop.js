//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
    dragText = dropArea.querySelector("header"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input");
let file; //essa variável será usada em muitas funções
button.onclick = () => {
    input.click(); //se clicar no botão, o input será acionado ao mesmo tempo
}
input.addEventListener("change", function() {
    //Pega o arquivo selecionado pelo usuário e ele sempre será o primeiro [0] do array
    file = this.files[0];
    dropArea.classList.add("active");
    showFile(); //chamando a funcao
});
//Quando o arquivo for colocado sobre a área
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault(); //Faz com que o arquivo não seja aberto em outra guia/aba
    dropArea.classList.add("active");
    dragText.textContent = "Solte sua foto aqui";
});
//Quando sair da área
dropArea.addEventListener("dragleave", (e) => {
    e.preventDefault(); //Faz com que o arquivo não seja aberto em outra guia/aba
    dropArea.classList.remove("active");
    dragText.textContent = "Arraste sua foto para esse local";
});
//Quando soltar a imagem na área
dropArea.addEventListener("drop", (e) => {
    e.preventDefault(); //Faz com que o arquivo não seja aberto em outra guia/aba
    //Se o usuário escolher vários arquivos, o último sempre será o primeiro [0] do array
    file = e.dataTransfer.files[0];
    showFile(); //chamando a função
});

function showFile() {
    let fileType = file.type; //pegando o tipo/formato da imagem
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //Adicionando alguns formatos válidos ao array
    if (validExtensions.includes(fileType)) { //if user selected file is an image file
        let fileReader = new FileReader(); //creating new FileReader object
        fileReader.onload = () => {
            let fileURL = fileReader.result; //passing user file source in fileURL variable

            let imgTag = `<img src="${fileURL}" alt="image">`; //criando a tag img a passando o arquivo selecionado para o atributo img src
            dropArea.innerHTML = imgTag; // add a imagem ao HTML
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("This is not an Image File!");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    }
}