// create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker
map.on('click', (event)=> {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;



    //remove icon
    marker && map.removeLayer(marker)

    //add icon
    marker = L.marker([lat,lng],{icon})
    .addTo(map)
})

// add fields of photos upload
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-images
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verifica se o clone está vazio, se sim, não adiciona ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //limpar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

//delete fields of photos upload
function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()
}

//Select yes or no
function toggleSelect(event){
    //remover a seleção (.active de cada um dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })

    //incluindo a seleção (.active no botão clicado)
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o "input hidden" com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}