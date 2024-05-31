let urlGet = new URL(document.location).searchParams;
let idUrl = urlGet.get('id');
let urlBase = 'https://api-colombia.com';
let urlIdDepar = urlBase + '/api/v1/Department/' + idUrl
let urlCiudades = urlBase + '/api/v1/Department/' + idUrl + '/cities'
let urlNatural = urlBase + '/api/v1/Department/' + idUrl + '/naturalareas'
let ubicacionDepar = document.getElementById('detallesDepartamento')
let ubicacionMunicipios = document.getElementById('contenedorMunicipios')

fetch(urlIdDepar)
    .then(response => response.json())
    .then(data => {

        ubicacionDepar.innerHTML = `
        <h2 class=" text-center">${data.name}</h2>
        <span class="mb-1 text-center"><strong>Su Capital es: </strong>${data.cityCapital.name}</span>
        <span class="mb-1 text-center"><strong>Tiene un cantidad de :</strong> ${data.municipalities} municipios</span>
        <span class="mb-1 text-center"><strong>Abarca una superficie de:</strong> ${data.surface} km²</span>
        <span class="mb-1 text-center"><strong>Población: </strong>${data.population} personas</span>
        <span class="mb-1 text-center"><strong>Indicactivo Telefonico: </strong>${data.phonePrefix}</span>
        <span class=" text-center">${data.description}</span>`;

    })

fetch(urlCiudades)
    .then(response => response.json())
    .then(data => {
        
        ubicacionMunicipios.innerHTML = '';
        data.forEach(element => {
            let divCiudad = document.createElement('div');
            divCiudad.classList.add('card', 'mb-3');
            divCiudad.style.width = '14rem';
            divCiudad.innerHTML = `
            <div class="card-body text-center ">
                <h5 class="card-title">${element.name}</h5>
            </div>`
            ubicacionMunicipios.appendChild(divCiudad)
        });

    })

fetch(urlNatural)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].naturalAreas);
    })
   
