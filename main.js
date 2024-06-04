let urlBase = 'https://api-colombia.com';
let general = urlBase + '/api/v1/Country/Colombia';
let departamentos = urlBase + '/api/v1/Department';
let region = urlBase + '/api/v1/Region';

let ubicacionDescrip = document.getElementById('descrip');
let parrafo = document.createElement('span');
let ubicacionCheck = document.getElementById('contenedorCheck');


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
        ubicacionCartas.innerHTML = '';
        
        data.forEach(element => {

            let link = region + "/"+ element.regionId
            fetch(link)
                .then(responseCiudad => responseCiudad.json())
                .then(dataRegion => {


                    let divCarta = document.createElement('div');
                    divCarta.classList.add('card', 'mb-3');
                    divCarta.style.width = '14rem';
                    divCarta.innerHTML = `
                    <div class="card-body text-center border border-primary">
                        <img src="/favicon_io/all-flags-of-departments-of-colombia-vector.jpg" class="card-img-top" alt="Imagen referencia del departamento">
                        <h5 class="card-title">${element.name}</h5>
                        <h6 class="card-subtitle mb-2  text-body-secondary "> Región: ${dataRegion.name}</h6>
                        <div class="justified-text">
                        <span class="card-text" >${element.description.substring(0, 150)}...</span>
                        </div>
                        <a href="/detalles.html?id=${element.id}" class="btn btn-outline-primary">Detalles</a>
                    </div>`

                    ubicacionCartas.appendChild(divCarta)
                })

        });


    })

fetch(region)
    .then(response => response.json())
    .then(data => {
        ubicacionCheck.innerHTML = '';
        data.forEach(element => {
            
            let divCheck = document.createElement('div');
            divCheck.classList.add('form-check', 'form-check-inline')
            divCheck.innerHTML =`
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="${element.name}" value="${element.id}">
            <label class="form-check-label" for="${element.name}">${element.name}</label>`
            ubicacionCheck.appendChild(divCheck)
        });;
    })
