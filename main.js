let urlBase = 'https://api-colombia.com';
let general = urlBase + '/api/v1/Country/Colombia';
let departamentos = urlBase + '/api/v1/Department';
let ciudad = urlBase + '/api/v1/City/';

let ubicacionDescrip = document.getElementById('descrip');
let parrafo = document.createElement('span');


//Promesa de la descripcion
fetch(general)
    .then(response => response.json())
    .then(data => {
        parrafo.innerHTML = `${data.description}`
        ubicacionDescrip.appendChild(parrafo);
    })

//Promesa de los Departamentos
fetch(departamentos)
    .then(response => response.json())
    .then(data => {
        
        let ubicacionCartas = document.getElementById('contendorCartas');
        ubicacionCartas.innerHTML='';
        data.forEach(element => {
            
            let link = ciudad + element.cityCapitalId
            fetch(link)
                .then(responseCiudad => responseCiudad.json())
                .then(dataCiudad => {

                    
                    let divCarta = document.createElement('div');
                    divCarta.classList.add('card', 'mb-3');
                    divCarta.style.width = '14rem';
                    divCarta.innerHTML = `
                    <div class="card-body text-center border border-primary">
                        <h5 class="card-title">${element.name}</h5>
                        <h6 class="card-subtitle mb-2  text-body-secondary "> Capital: ${dataCiudad.name}</h6>
                        <div class="justified-text mb-2">
                        <p class="card-text" >${element.description.substring(0, 150)}...</p>
                        </div>
                        <a href="/detalles.html?id=${element.id}" class="card-link">Detalles</a>
                    </div>`

                    ubicacionCartas.appendChild(divCarta)
                })
            
        });


    })
