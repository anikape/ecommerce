const imageSpace = document.querySelector('.drop-image');

function dragover(e) {
    e.preventDefault(); // cancela o comportamento padrão e libera o drop pra funcionar
    imageSpace.classList.add('hover'); //?? descobrir pq a função add hover n está funcionando

}

function dragleave() {
    imageSpace.classList.remove('hover');
}

//função para capturar imagem
function dropImage(e) {

    e.preventDefault();
    imageSpace.classList.remove('hover'); // remove  hover

    const imageFile = e.dataTransfer.files[0];

    //validação do arquivo. Para aceitar apenas nas extensões de imagem.

    const tipoArquivo = imageFile.type.split('/')[0]; // a função split divide o array. Como o type da imagem é image.jpge === image/jpge. Precisamos aqui apenas do image pq temos diversas extenções de aquivos

    if (tipoArquivo === "image") {
        const urlImage = URL.createObjectURL(imageFile); // converte o aquivo para imagem

        const imagem = document.createElement('img');
        imagem.src = urlImage;

        //add a imagem ao drop-image (área delimitada no html)


        imageSpace.appendChild(imagem);


    } else {
        alert('Arquivo Inválido.');
    }


}


imageSpace.addEventListener('dragover', dragover); // encosta ná área de captura
imageSpace.addEventListener('dragleave', dragleave); // quando sai da área de soltagem do elemento
imageSpace.addEventListener('drop', dropImage) // soltar/capturar o elemento