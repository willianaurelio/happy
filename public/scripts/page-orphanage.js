const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
};


// create map
const map = L.map('mapid',options).setView([-27.222633,-49.6455874], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker
L
.marker([-27.213524, -49.643066],{icon})
.addTo(map);

/* image gallery */

function selectImage(event){
    const button = event.currentTarget

    console.log(button.childen)

    //removendo todas as classes .actives
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active");
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageCountainer = document.querySelector(".orphanage-details > img")
    

    //atualizar o container da imagem clicada
    imageCountainer.src = image.src
    console.log(imageCountainer)

    //adicionar a classe .active clicada
    button.classList.add('active')
}
